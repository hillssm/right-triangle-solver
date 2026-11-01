/**
 * cotangentGuideTranslations.batch3.ts
 * Translations of the Cotangent Ratio Calculator guide (CotangentRatioGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese (zh).
 *
 * Structure per language: tocHeading, tocItems (14 entries), sections (13 entries),
 * faqs (12), faqHeading, relatedHeading, conclusion.
 * Formulas, KaTeX markup ([[...]] and [[[...]]]), variable names, numbers, and degree
 * values are preserved exactly as in the English source. URLs are never translated.
 * No em dashes. Arabic math stays LTR via the renderer's dir="ltr" wrapper.
 */

export const COTANGENT_TRANSLATIONS_BATCH3 = {
"id": {
    "tocHeading": "Di Dalam Panduan Ini",
    "tocItems": {
      "cot-intro": "Apa Itu Kalkulator Rasio Kotangen?",
      "cot-triangle": "Memahami Sisi Samping dan Sisi Depan",
      "cot-whatis": "Memahami Rasio Kotangen",
      "cot-formula": "Cara Kerja Rumus Kotangen",
      "cot-howto": "Cara Menggunakan Kalkulator Rasio Kotangen",
      "cot-examples": "Contoh Langkah-demi-Langkah Menghitung Kotangen",
      "cot-applications": "Contoh Nyata Penggunaan Rasio Kotangen",
      "cot-angle": "Memahami Hubungan Antara Kotangen dan Besar Sudut",
      "cot-recover": "Cara Menemukan Sudut Saat Kotangen Diketahui",
      "cot-mistakes": "Kesalahan Umum Saat Menghitung Kotangen",
      "cot-verify": "Cara Memeriksa Apakah Hasil Kotangen Anda Valid",
      "cot-vs": "Kotangen vs. Tangen, Sinus, dan Kosinus",
      "cot-related": "Jelajahi Kalkulator Trigonometri Terkait",
      "cot-faq": "Pertanyaan yang Sering Diajukan"
    },
    "sections": {
      "cot-intro": {
        "h2": "Apa Itu Kalkulator Rasio Kotangen?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator rasio kotangen menjawab satu pertanyaan: untuk sebuah sudut lancip dalam segitiga siku-siku, bagaimana perbandingan sisi yang bersebelahan dengan sudut terhadap sisi yang berhadapan dengannya? Masukkan kedua panjang sisi tersebut, dan alat ini akan membagi sisi samping dengan sisi depan, sehingga menghasilkan [[\\cot(A)=b/a]]. Dengan sisi samping 4 cm dan sisi depan 3 cm, perhitungannya adalah [[4/3\\approx1.3333]]: sisi samping kira-kira 1.3333 kali lebih panjang daripada sisi depan. Angka desimal itu adalah jawaban lengkapnya. Angka tersebut tidak memiliki satuan, karena sentimeter saling meniadakan dalam pembagian, dan angka itu bukan sudut dalam derajat. Hipotenusa tidak pernah masuk dalam perhitungan ini; kedua kaki yang saling tegak lurus sudah cukup. Kotangen juga merupakan kebalikan dari tangen, itulah sebabnya banyak buku teks memperkenalkannya sebagai bentuk terbalik dari [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Memahami Sisi Samping dan Sisi Depan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut tepat [[90^\\circ]], yaitu sudut antara dua garis tegak lurus, seperti dinding yang bertemu lantai datar. Hipotenusa terletak di seberang sudut siku-siku itu dan selalu menjadi sisi terpanjang. Dua sudut lainnya berbagi sisa 90 derajat, sehingga keduanya lancip. Kedua kaki bertemu di sudut siku-siku, saling tegak lurus, dan hubungan keduanyalah yang digambarkan oleh kotangen."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Samping?"
          },
          {
            "kind": "p",
            "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut acuan [[A]] tanpa menjadi hipotenusa. Dalam soal-soal praktis, sisi ini sering berperan sebagai jarak horizontal: jarak tanah dari dasar tangga, proyeksi horizontal atap, atau komponen horizontal suatu gaya. Sisi ini menjadi pembilang dalam rumus kotangen. Kaki mana yang dihitung sebagai sisi samping bergantung pada sudut acuan yang dipilih, sehingga beralih dari sudut [[A]] ke sudut [[B]] akan menukar label sisi samping dan sisi depan."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Depan?"
          },
          {
            "kind": "p",
            "text": "Sisi depan [[a]] terletak tepat di seberang sudut [[A]] dan tidak pernah menyentuh titik sudutnya. Dalam soal-soal praktis, sisi ini sering berperan sebagai kenaikan vertikal: tinggi dinding, perbedaan elevasi, atau komponen vertikal suatu pengukuran. Sisi ini menjadi penyebut dalam rumus kotangen, yang berarti memperbesarnya akan mengecilkan rasio dan memperkecilnya akan memperbesar rasio."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa [[c]] adalah sisi di seberang sudut siku-siku: dalam diagram apa pun, sisi ini menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan sisi ini selalu lebih panjang daripada kedua kaki. Sisi ini tidak berperan dalam rasio kotangen dasar, itulah sebabnya kalkulator tidak pernah memintanya. Sisi ini menjadi relevan ketika sinus, kosinus, sekan, atau kosekan masuk dalam perhitungan, atau ketika teorema Pythagoras digunakan untuk memverifikasi bahwa kedua kaki membentuk segitiga siku-siku yang sesungguhnya."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segitiga siku-siku dengan sudut A di kiri bawah, sisi samping b berwarna emas, sisi depan a berwarna hijau, cot(A)=b/a",
            "caption": "Sudut A berada di kiri bawah; kotangen menggunakan sisi samping b berwarna emas dan sisi depan a berwarna hijau, bukan hipotenusa c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Memahami Rasio Kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen membandingkan panjang di samping sudut acuan dengan panjang di seberangnya:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\cot(A)]] adalah kotangen dari sudut [[A]], [[b]] adalah sisi samping, dan [[a]] adalah sisi depan: berapa kali sisi depan muat ke dalam sisi samping."
          },
          {
            "kind": "h3",
            "text": "Kotangen sebagai Kebalikan dari Tangen"
          },
          {
            "kind": "p",
            "text": "Tangen membagi sisi depan dengan sisi samping, [[\\tan(A)=a/b]]. Mengambil kebalikannya akan membalik pecahan tersebut, [[1/\\tan(A)=b/a]], yang persis merupakan rumus kotangen:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\tan(A)=3/4=0.75]], kebalikannya adalah [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: segitiga yang sama, digambarkan dari arah berlawanan. Perbedaan ini penting karena [[\\tan^{-1}]] menyatakan fungsi tangen invers, sedangkan [[1/\\tan(A)]] adalah kebalikan dari tangen: gagasan yang berkaitan, tetapi maknanya berbeda dan jawabannya pun berbeda."
          },
          {
            "kind": "h3",
            "text": "Memahami Kotangen sebagai Jarak Horizontal dibagi Kenaikan Vertikal"
          },
          {
            "kind": "p",
            "text": "Ketika sudut [[A]] diukur dari arah horizontal, sisi samping dapat mewakili jarak horizontal dan sisi depan mewakili kenaikan vertikal. Maka [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. Tangen memberikan hubungan yang sama dalam bentuk terbalik, kenaikan dibagi jarak horizontal. Pembacaan jarak-dibagi-kenaikan ini menjadikan kotangen sebagai rasio alami untuk pertanyaan seperti berapa jarak horizontal yang mencakup berapa ketinggian, dan pembacaan ini bergantung pada sudut acuan yang dipilih dan geometri situasinya."
          },
          {
            "kind": "h3",
            "text": "Apa Arti Nilai Kotangen?"
          },
          {
            "kind": "p",
            "text": "Kotangen yang lebih besar dari 1 berarti sisi samping lebih panjang daripada sisi depan, dan sudut acuan kurang dari [[45^\\circ]]. Kotangen yang sama dengan 1 berarti kedua kaki sama panjang dan sudut [[A]] tepat [[45^\\circ]]. Kotangen antara 0 dan 1 berarti sisi depan lebih panjang daripada sisi samping, dan sudut acuan terletak antara [[45^\\circ]] dan [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Mengapa Kotangen Bisa Lebih Besar dari 1"
          },
          {
            "kind": "p",
            "text": "Berbeda dengan sinus dan kosinus, kotangen tidak memiliki batas atas 0 hingga 1 karena hipotenusa tidak pernah masuk dalam pembagian. Untuk [[\\cot(A)=8/2=4]], sisi samping hanyalah empat kali sisi depan, dan sudut acuannya adalah sudut lancip yang relatif kecil. Nilai positif berhingga apa pun dimungkinkan."
          },
          {
            "kind": "h3",
            "text": "Mengapa Kotangen Bisa Kurang dari 1"
          },
          {
            "kind": "p",
            "text": "Untuk [[\\cot(A)=3/6=0.5]], sisi samping adalah setengah dari sisi depan, sehingga sudut acuannya adalah sudut lancip yang relatif besar. Rasio turun di bawah 1 tanpa ada yang salah: itu hanyalah ciri segitiga yang lebih tinggi dan lebih ramping."
          },
          {
            "kind": "h3",
            "text": "Mengapa Kotangen Merupakan Rasio Tak Berdimensi"
          },
          {
            "kind": "p",
            "text": "Membagi satu panjang dengan panjang lain akan meniadakan satuan: [[4\\text{ m}/3\\text{ m}=4/3]], dan [[400\\text{ cm}/300\\text{ cm}=4/3]] juga. Angka tersebut menggambarkan bentuk segitiga, bukan pengukuran dengan satuan fisik, jadi tuliskan hasilnya sebagai angka biasa, jangan pernah disertai meter, sentimeter, atau derajat."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga tahap: segitiga 3-4-5 diberi label, tangen tan(A)=3/4=0.75, kotangen cot(A)=4/3=1.3333, hubungan kebalikannya",
            "caption": "Tiga tahap: beri label pada segitiga 3-4-5, hitung tangen tan(A) = 3/4, lalu balik pecahannya untuk mendapatkan cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Cara Kerja Rumus Kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulailah dari definisinya: kotangen adalah sisi samping dibagi sisi depan. Dalam notasi halaman ini:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi samping menjadi pembilang karena itulah panjang yang dibandingkan; sisi depan menjadi penyebut karena itulah panjang acuan, satuan berapa banyak yang ini muat ke dalam yang itu. Menukarnya akan menghasilkan rasio tangen."
          },
          {
            "kind": "h3",
            "text": "Contoh Lengkap: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis rumusnya. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Substitusikan pengukurannya. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bagi. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Tafsirkan jawabannya. Sisi samping kira-kira 1.3333 kali sisi depan."
          },
          {
            "kind": "p",
            "text": "Langkah 5: Verifikasi dengan rasio tangen. [[\\tan(A)=3/4=0.75]], dan [[1/0.75\\approx1.3333]]. Kedua jalur menghasilkan angka yang sama, dan memang begitulah perilaku rasio yang saling berkebalikan."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Cara Menggunakan Kalkulator Rasio Kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah ini sesuai dengan antarmuka aktual di halaman ini."
          }
        ],
        "steps": [
          "<strong>Tentukan sudut acuan [[A]],</strong> karena sisi samping dan sisi depan didefinisikan relatif terhadapnya.",
          "<strong>Temukan sisi samping [[b]]:</strong> kaki yang menyentuh sudut [[A]] yang bukan hipotenusa.",
          "<strong>Temukan sisi depan [[a]]:</strong> kaki yang tepat di seberang sudut [[A]], yang tidak pernah menyentuh titik sudutnya.",
          "<strong>Ukur atau dapatkan kedua panjang sisi</strong> dalam satuan yang sama.",
          "<strong>Masukkan panjang sisi samping</strong> di kolom input pertama.",
          "<strong>Masukkan panjang sisi depan</strong> di kolom input kedua.",
          "<strong>Pilih satuan yang cocok dengan pemilih satuan</strong> agar pembagian membandingkan hal yang sepadan.",
          "<strong>Pastikan kedua pengukuran bernilai positif;</strong> panjang nol atau negatif tidak dapat membentuk segitiga nyata.",
          "<strong>Klik Calculate cot(A)</strong> untuk membagi sisi samping dengan sisi depan.",
          "<strong>Baca rasio kotangen:</strong> sisi samping yang dinyatakan sebagai kelipatan sisi depan.",
          "<strong>Tafsirkan hasilnya:</strong> lebih besar dari 1 berarti sisi samping lebih panjang, sama dengan 1 berarti kedua kaki sama panjang, kurang dari 1 berarti sisi depan lebih panjang.",
          "<strong>Gunakan Reset</strong> untuk menghapus input dan memulai lagi."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta hipotenusa maupun sudut dalam derajat: dua panjang sisi positif adalah input lengkap, dan hasilnya selalu berupa angka positif tak berdimensi."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Contoh Langkah-demi-Langkah Menghitung Kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikuti pola yang sama: tulis rumus, substitusikan, bagi, tafsirkan."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Sisi samping kira-kira 1.3333 kali sisi depan; hipotenusa sama sekali tidak masuk perhitungan."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segitiga Siku-Siku 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Rasio lebih besar dari 1 karena sisi samping adalah kaki yang lebih panjang; rasio ini memberi tahu kita bahwa sisi samping 2.4 kali sisi depan, bukan seberapa besar segitiganya."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segitiga Siku-Siku Sama Kaki"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Kaki yang sama panjang menghasilkan rasio tepat 1, yang merupakan ciri sudut acuan [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segitiga dengan Sisi Samping Lebih Kecil"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=6\\text{ m}]] dan [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Hasilnya kurang dari 1 karena sisi depan adalah kaki yang lebih panjang, sehingga sudut acuannya lebih besar dari [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Contoh Nyata Penggunaan Rasio Kotangen",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen adalah rasio matematis, bukan besaran fisik yang memiliki satuan. Nilai praktisnya terletak pada membandingkan jarak horizontal dengan kenaikan vertikal, memeriksa geometri segitiga, dan menggunakan rumus yang secara khusus meminta sisi samping dibagi sisi depan. Setiap contoh mengasumsikan segitiga siku-siku yang disederhanakan, dan tidak satu pun dari rasio ini yang dengan sendirinya menyelesaikan pertanyaan tentang keselamatan, kekuatan, atau kepatuhan terhadap kode."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Menemukan Rasio Jarak-terhadap-Kenaikan Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga bersandar pada dinding vertikal. Dasarnya berjarak 3 m dari dinding, dan mencapai 4 m ke atas dinding. Jarak horizontal adalah sisi samping [[b=3\\text{ m}]], jangkauan vertikal adalah sisi depan [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], sehingga [[\\boxed{\\cot(A)=0.75}]]: jarak horizontal adalah 75 persen dari tinggi vertikal. Rasio menggambarkan geometri tangga; rasio ini tidak menentukan apakah tangga diposisikan dengan aman."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Menghitung Rasio Jarak-terhadap-Kenaikan Atap"
          },
          {
            "kind": "p",
            "text": "Sebuah bagian atap memiliki jarak horizontal 4 m dan kenaikan vertikal 3 m. Di sini [[b=4\\text{ m}]] dan [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]: jarak horizontal kira-kira 1.3333 kali kenaikan vertikal. Rasio ini bukan penilaian struktural atau penilaian kode atap yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Mengevaluasi Rasio Kotangen Sebuah Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan yang disederhanakan memiliki jarak horizontal 9 m dan kenaikan vertikal 0.75 m. Dengan [[b=9\\text{ m}]] dan [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], sehingga [[\\boxed{\\cot(A)=12}]]. Jarak horizontal adalah 12 kali kenaikan vertikal, ciri kemiringan yang landai. Rasio saja tidak menentukan aksesibilitas atau kepatuhan terhadap kode bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Pengukuran Survei"
          },
          {
            "kind": "p",
            "text": "Sebuah segitiga survei yang disederhanakan memiliki jarak horizontal 40 m dan perbedaan elevasi vertikal 30 m. Dengan [[b=40\\text{ m}]] dan [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]. Rasio membandingkan jarak horizontal dengan perbedaan vertikal secara langsung. Survei yang sebenarnya dapat memerlukan pengukuran tambahan, koreksi, dan prosedur instrumen."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Kawat Penahan yang Menyangga Tiang"
          },
          {
            "kind": "p",
            "text": "Sebuah kawat penahan menghubungkan tiang ke jangkar tanah. Jangkar berjarak 12 m secara horizontal dari tiang, dan titik pemasangannya 5 m di atas tanah. Dengan [[b=12\\text{ m}]] dan [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], sehingga [[\\boxed{\\cot(A)=2.4}]]. Jarak horizontal adalah 2.4 kali pemisahan vertikal. Rasio ini tidak menentukan tegangan kawat, kekuatan jangkar, atau keamanan struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Memahami Rasio Jarak-terhadap-Kenaikan Tangga Rumah"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga rumah yang disederhanakan memiliki jarak horizontal 4 m dan kenaikan vertikal 3 m. Dengan [[b=4\\text{ m}]] dan [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]. Jarak horizontal kira-kira 1.3333 kali kenaikan vertikal. Contoh ini menggambarkan diagonal ideal dan tidak memverifikasi dimensi tangga rumah atau kepatuhan terhadap kode."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Komponen Horizontal dan Vertikal Boom Derek"
          },
          {
            "kind": "p",
            "text": "Sebuah boom derek yang disederhanakan membentuk segitiga siku-siku dengan proyeksi horizontal 6 m dan kenaikan vertikal 8 m. Dengan [[b=6\\text{ m}]] dan [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], sehingga [[\\boxed{\\cot(A)=0.75}]]. Proyeksi horizontal adalah 75 persen dari komponen vertikal. Rasio tidak menentukan kapasitas angkat atau keamanan pengoperasian."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segmen Penerbangan Pesawat yang Lurus"
          },
          {
            "kind": "p",
            "text": "Untuk segmen penerbangan yang disederhanakan, sebuah pesawat terbang sepanjang lintasan lurus dengan perpindahan horizontal 4 km dan kenaikan vertikal 3 km. Dengan [[b=4\\text{ km}]] dan [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]. Perpindahan horizontal kira-kira 1.3333 kali kenaikan vertikal. Ini adalah model geometris ideal, bukan perhitungan navigasi penerbangan yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Penyangga Mekanis Diagonal"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga diagonal memiliki offset horizontal 1.2 m dan kenaikan vertikal 1.6 m. Dengan [[b=1.2\\text{ m}]] dan [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], sehingga [[\\boxed{\\cot(A)=0.75}]]. Offset horizontal adalah 75 persen dari kenaikan vertikal. Rasio tidak menentukan kekuatan atau kesesuaian penyangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Bagian Pendakian yang Lurus"
          },
          {
            "kind": "p",
            "text": "Sebuah bagian lurus yang disederhanakan dari rute pendakian memiliki perpindahan horizontal 80 m dan kenaikan vertikal 60 m. Dengan [[b=80\\text{ m}]] dan [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]. Perpindahan horizontal kira-kira 1.3333 kali kenaikan elevasi. Jalur sebenarnya dapat memiliki tikungan dan gradien yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Penyangga Kanopi"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga kanopi diagonal memiliki proyeksi horizontal 2.4 m dan kenaikan vertikal 1.8 m. Dengan [[b=2.4\\text{ m}]] dan [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], sehingga [[\\boxed{\\cot(A)\\approx1.3333}]]. Rasio menggambarkan proyeksi horizontal relatif terhadap kenaikan vertikal. Perhitungan ini tidak menentukan kesesuaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Kabel yang Merentang Dua Ketinggian Berbeda"
          },
          {
            "kind": "p",
            "text": "Sebuah kabel lurus merentang 24 m secara horizontal antara dua titik dengan pemisahan vertikal 7 m. Dengan [[b=24\\text{ m}]] dan [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], sehingga [[\\boxed{\\cot(A)\\approx3.4286}]]. Pemisahan horizontal kira-kira 3.4286 kali perbedaan vertikal. Model ini mengasumsikan garis lurus antara kedua titik ujung."
          },
          {
            "kind": "h3",
            "text": "Perbandingan Contoh-Contoh Praktis"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Polanya berlaku di seluruh contoh: rasio besar ketika sisi samping jauh lebih besar daripada sisi depan, dan kecil ketika sisi depan mendominasi."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situasi", "Sisi samping b", "Sisi depan a", "Rumus kotangen", "Rasio terhitung", "Tafsiran"],
            "rows": [
              ["Tangga", "3 m", "4 m", "3/4", "0.75", "Jarak adalah 75% dari jangkauan vertikal"],
              ["Atap", "4 m", "3 m", "4/3", "1.3333", "Jarak adalah 1.3333 kali kenaikan"],
              ["Tanjakan", "9 m", "0.75 m", "9/0.75", "12", "Jarak adalah 12 kali kenaikan"],
              ["Survei", "40 m", "30 m", "40/30", "1.3333", "Jarak adalah 1.3333 kali selisih elevasi"],
              ["Kawat penahan", "12 m", "5 m", "12/5", "2.4", "Jarak adalah 2.4 kali tinggi"],
              ["Tangga rumah", "4 m", "3 m", "4/3", "1.3333", "Jarak adalah 1.3333 kali kenaikan"],
              ["Boom derek", "6 m", "8 m", "6/8", "0.75", "Proyeksi adalah 75% dari kenaikan"],
              ["Segmen penerbangan", "4 km", "3 km", "4/3", "1.3333", "Perpindahan adalah 1.3333 kali kenaikan"],
              ["Penyangga", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Offset adalah 75% dari kenaikan"],
              ["Rute pendakian", "80 m", "60 m", "80/60", "1.3333", "Perpindahan adalah 1.3333 kali kenaikan"],
              ["Penyangga kanopi", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "Proyeksi adalah 1.3333 kali kenaikan"],
              ["Kabel", "24 m", "7 m", "24/7", "3.4286", "Pemisahan adalah 3.4286 kali selisih tinggi"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: rasio tangga 0.75, atap 1.3333, tanjakan 12, survei 1.3333, masing-masing dengan segitiga siku-siku berlabel",
            "caption": "Empat perhitungan praktis: tangga, atap, tanjakan, dan survei, masing-masing dengan segitiga, rumus, dan rasionya."
          }
        ]
      },
      "cot-angle": {
        "h2": "Memahami Hubungan Antara Kotangen dan Besar Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangen menurun seiring bertambahnya sudut lancip. Sudut kecil membuat sisi samping jauh lebih panjang daripada sisi depan, sehingga rasionya besar; saat sudut [[A]] membuka menuju [[90^\\circ]], sisi depan mengambil alih dan rasio turun menuju 0. Nilai acuan terverifikasi di bawah ini menunjukkan polanya:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Pengukuran dalam tabel bersifat ilustratif: rasio, bukan panjang absolut, yang menentukan sudut. Rasio tumbuh tanpa batas saat sudut mendekati [[0^\\circ]] dan mendekati 0 saat sudut mendekati [[90^\\circ]], tetap positif dan berhingga untuk setiap segitiga yang valid.",
          "Kalkulator tidak menerima input sudut; nilai-nilai acuan ini berfungsi sebagai orientasi dan nilai pemeriksaan saat memverifikasi hasil."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Sudut A", "Sisi samping b", "Sisi depan a", "Rasio kotangen"],
            "rows": [
              ["30 derajat", "sqrt(3)", "1", "Kira-kira 1.7321"],
              ["45 derajat", "1", "1", "1"],
              ["60 derajat", "1", "sqrt(3)", "Kira-kira 0.5774"],
              ["75 derajat", "1", "Kira-kira 3.7321", "Kira-kira 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai kotangen 1.7321, 1, 0.5774; kotangen menurun seiring bertambahnya sudut",
            "caption": "Saat sudut A bertambah, sisi depan menjadi bagian yang lebih besar dari sisi samping, sehingga cot(A) menurun."
          }
        ]
      },
      "cot-recover": {
        "h2": "Cara Menemukan Sudut Saat Kotangen Diketahui",
        "blocks": [
          {
            "kind": "p",
            "text": "Rasio kotangen bukanlah sudut itu sendiri. Ketika rasionya diketahui dan sudutnya diperlukan, trigonometri invers menjembatani kesenjangan tersebut. Untuk rasio kotangen positif dalam segitiga siku-siku, ambil kebalikannya untuk mendapatkan kembali rasio tangen, lalu terapkan tangen invers:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan kata lain, karena [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Contoh yang Dikerjakan"
          },
          {
            "kind": "p",
            "text": "Diketahui [[\\cot(A)=4/3]]: kebalikannya adalah [[\\tan(A)=3/4]], sehingga [[A=\\tan^{-1}(3/4)]] dan [[\\boxed{A\\approx36.87^\\circ}]]. Atur kalkulator ilmiah ke mode derajat sebelum menekan tombol tangen invers. Ini adalah perhitungan sudut terpisah; kalkulator rasio kotangen di halaman ini menerima panjang sisi dan menghasilkan rasio, bukan sudut."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Kotangen",
        "blocks": [],
        "steps": [
          "<strong>Membalik rumus menjadi [[a/b]] alih-alih [[b/a]].</strong> Ini menghitung tangen. Perbaikan: letakkan sisi samping di atas.",
          "<strong>Mencampuradukkan kotangen dengan tangen.</strong> Melaporkan 0.75 untuk segitiga 3-4-5. Perbaikan: tangen adalah sisi depan dibagi sisi samping; kotangen adalah pecahan yang dibalik.",
          "<strong>Mencampuradukkan kotangen dengan kosinus.</strong> Menggunakan [[b/c]]. Perbaikan: kosinus memerlukan hipotenusa; kotangen tidak pernah menyentuhnya.",
          "<strong>Menggunakan hipotenusa alih-alih salah satu dari kedua kaki.</strong> Menghitung [[b/c]] atau [[c/a]]. Perbaikan: penyebutnya adalah kaki depan [[a]], bukan [[c]].",
          "<strong>Tertukar antara sisi samping dan sisi depan.</strong> Memilih kaki yang salah. Perbaikan: telusuri dari sudut [[A]]: kaki yang menyentuhnya adalah sisi samping, yang di seberangnya adalah sisi depan.",
          "<strong>Lupa bahwa label sisi bergantung pada sudut acuan.</strong> Menggunakan label yang digambar untuk sudut [[B]]. Perbaikan: beri label ulang setiap kali sudut acuan berubah.",
          "<strong>Menganggap kotangen harus antara 0 dan 1.</strong> Memperlakukan 2.4 atau 12 sebagai kesalahan. Perbaikan: nilai-nilai itu sah; hanya sinus dan kosinus yang dibatasi di 1.",
          "<strong>Menganggap kotangen 1 berarti segitiga tidak valid.</strong> Perbaikan: [[\\cot(A)=1]] berarti kaki-kakinya sama panjang dan sudut [[45^\\circ]], segitiga yang sangat valid.",
          "<strong>Melaporkan rasio dengan meter atau sentimeter.</strong> Menulis 1.3333 m. Perbaikan: satuannya sudah saling meniadakan, jadi laporkan angka biasa.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Pembagian dengan nol atau rasio negatif yang tidak bermakna. Perbaikan: gunakan panjang positif saja.",
          "<strong>Mencampur satuan pengukuran.</strong> Meter dibagi sentimeter menggeser rasio sebesar 100. Perbaikan: ubah kedua sisi ke satu satuan terlebih dahulu.",
          "<strong>Membulatkan terlalu dini.</strong> Membulatkan [[4/3]] menjadi 1.33 sebelum memverifikasi menambah kesalahan yang bisa dihindari. Perbaikan: simpan digit ekstra hingga langkah akhir.",
          "<strong>Menganggap kotangen adalah sudut dalam derajat.</strong> Membaca 1.3333 sebagai 1.3333 derajat. Perbaikan: itu adalah rasio; sudutnya memerlukan tangen invers.",
          "<strong>Mencampuradukkan kebalikan tangen dengan tangen invers.</strong> Menulis [[1/\\tan(A)]] ketika [[\\tan^{-1}(a/b)]] yang dibutuhkan, atau sebaliknya. Perbaikan: kebalikan membalik pecahan; invers mendapatkan kembali sudutnya.",
          "<strong>Menganggap nilai kotangen menentukan ukuran segitiga.</strong> Dua segitiga yang sangat berbeda bisa berbagi [[\\cot(A)=1.3333]]. Perbaikan: rasio menetapkan bentuknya, bukan skalanya."
        ],
        "closingParagraphs": [
          "<strong>Salah Versus Benar</strong>",
          "Diketahui [[b=4]] dan [[a=3]]:",
          "Salah: [[3/4=0.75]]. Ini adalah rasio tangen, bukan kotangen.",
          "Benar: [[\\cot(A)=4/3\\approx1.3333]]. Verifikasi: [[\\tan(A)=3/4=0.75]] dan [[1/0.75\\approx1.3333]], yang mengonfirmasi hubungan kebalikannya."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Cara Memeriksa Apakah Hasil Kotangen Anda Valid",
        "blocks": [
          {
            "kind": "p",
            "text": "Segitiga siku-siku yang valid dan tidak degeneratif memerlukan kaki-kaki positif, [[a \\gt 0]] dan [[b \\gt 0]], sehingga hasil kotangen harus berupa angka positif berhingga:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Kedua pengukuran harus menggunakan satuan yang cocok. Hasil yang lebih besar dari 1, sama dengan 1, atau kurang dari 1 semuanya bisa valid; berbeda dengan sinus dan kosinus, kotangen tidak dibatasi di 1."
          },
          {
            "kind": "h3",
            "text": "Metode 1: Periksa Kebalikan dari Tangen"
          },
          {
            "kind": "p",
            "text": "Verifikasi [[\\tan(A)=a/b]], lalu konfirmasi [[\\cot(A)=1/\\tan(A)]]. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4=0.75]], sehingga [[\\cot(A)=1/0.75\\approx1.3333}]]. Ketidakcocokan antara kedua jalur menandakan pecahan terbalik atau sisi yang salah diberi label."
          },
          {
            "kind": "h3",
            "text": "Metode 2: Periksa Teorema Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika hipotenusa diketahui atau dibutuhkan, hitung [[c=\\sqrt{a^2+b^2}]]. Untuk [[a=3]] dan [[b=4]]: [[c=\\sqrt{9+16}=5]], dan [[3^2+4^2=5^2]]. Ini mengonfirmasi bahwa panjang sisi membentuk segitiga siku-siku yang sesungguhnya. Hipotenusa adalah nilai verifikasi di sini, bukan bagian dari rumus kotangen utama."
          },
          {
            "kind": "h3",
            "text": "Metode 3: Periksa Hubungan Sudut"
          },
          {
            "kind": "p",
            "text": "Untuk rasio kotangen yang diketahui, dapatkan kembali sudutnya dengan [[A=\\tan^{-1}(a/b)]]. Dengan [[a=3]] dan [[b=4]]: [[A\\approx36.87^\\circ]]. Karena sisi samping lebih panjang daripada sisi depan, sudutnya harus berada di bawah [[45^\\circ]]; jika tidak, label sisinya mungkin tertukar. Perbedaan kecil bisa muncul dari pembulatan."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Kotangen vs. Tangen, Sinus, dan Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap rasio membandingkan pasangan sisi yang berbeda, menggunakan sudut acuan dan label sisi yang sama:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kotangen dan tangen adalah pasangan yang saling berkebalikan: [[\\cot(A)=1/\\tan(A)]]. Jika [[\\tan(A)=0.75]], maka [[\\cot(A)\\approx1.3333}]]. Pilih kotangen ketika rumus meminta sisi samping dibagi sisi depan, ketika Anda mengerjakan hubungan jarak-terhadap-kenaikan, atau ketika hanya kedua kaki yang diketahui; pilih tangen untuk kenaikan-terhadap-jarak, sinus untuk sisi depan terhadap hipotenusa, dan kosinus untuk sisi samping terhadap hipotenusa.",
          "Untuk rasio-rasio tetangga, lihat <a href=\"/sine-ratio-calculator/\">Kalkulator Rasio Sinus</a>, <a href=\"/cosine-ratio-calculator/\">Kalkulator Rasio Kosinus</a>, <a href=\"/tangent-ratio-calculator/\">Kalkulator Rasio Tangen</a>, <a href=\"/secant-ratio-calculator/\">Kalkulator Rasio Sekan</a>, dan <a href=\"/cosecant-ratio-calculator/\">Kalkulator Rasio Kosekan</a>."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Rasio", "Rumus", "Apa yang dibandingkan"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi depan terhadap hipotenusa"],
              ["Kosinus", "cos(A) = b/c", "Sisi samping terhadap hipotenusa"],
              ["Tangen", "tan(A) = a/b", "Sisi depan terhadap sisi samping"],
              ["Kotangen", "cot(A) = b/a", "Sisi samping terhadap sisi depan"],
              ["Sekan", "sec(A) = c/b", "Hipotenusa terhadap sisi samping"],
              ["Kosekan", "csc(A) = c/a", "Hipotenusa terhadap sisi depan"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Jelajahi Kalkulator Trigonometri Terkait",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator Rasio Sinus",
            "desc": "Hitung rasio sinus dari sisi depan dan hipotenusa."
          },
          {
            "name": "Kalkulator Rasio Kosinus",
            "desc": "Hitung rasio kosinus dari sisi samping dan hipotenusa."
          },
          {
            "name": "Kalkulator Rasio Tangen",
            "desc": "Hitung rasio tangen dari sisi depan dan sisi samping."
          },
          {
            "name": "Kalkulator Rasio Sekan",
            "desc": "Hitung rasio sekan dari hipotenusa dan sisi samping."
          },
          {
            "name": "Kalkulator Rasio Kosekan",
            "desc": "Hitung rasio kosekan dari hipotenusa dan sisi depan."
          },
          {
            "name": "Kalkulator Sudut Segitiga Siku-Siku",
            "desc": "Temukan sudut lancip dari panjang sisi."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Trigonometri Terkait",
    "faqs": [
      {
        "question": "Apa rumus kotangen untuk segitiga siku-siku?",
        "answer": "cot(A) = b / a: bagi sisi samping sudut A dengan sisi depan sudut A. Dengan sisi samping 4 cm dan sisi depan 3 cm, hasilnya adalah 4/3, sekitar 1.3333."
      },
      {
        "question": "Bagaimana hubungan kotangen dengan tangen?",
        "answer": "Kotangen adalah kebalikan dari tangen: cot(A) = 1 / tan(A). Jika tan(A) = 3/4 = 0.75, maka cot(A) = 4/3, sekitar 1.3333. Kedua rasio menggambarkan segitiga yang sama dari sudut pandang yang dibalik, dan pemeriksaan kebalikan adalah cara tercepat untuk memverifikasi hasil."
      },
      {
        "question": "Apa perbedaan kotangen dan kosinus?",
        "answer": "Kotangen membagi sisi samping dengan sisi depan (b/a), hanya menggunakan kedua kaki. Kosinus membagi sisi samping dengan hipotenusa (b/c). Kotangen adalah kebalikan dari tangen, bukan dari kosinus; perbedaan ini adalah salah satu kesalahan yang paling sering diuji dalam trigonometri awal."
      },
      {
        "question": "Bisakah kotangen lebih besar dari 1?",
        "answer": "Ya. Kotangen tidak memiliki batas atas 0 hingga 1 karena tidak ada hipotenusa yang terlibat. Ketika sisi samping lebih panjang daripada sisi depan, hasilnya di atas 1: untuk sudut 30 derajat, cot(30 deg) sekitar 1.7321. Nilai 2.4, 12, atau angka positif berhingga apa pun semuanya dimungkinkan."
      },
      {
        "question": "Apa arti nilai kotangen 1?",
        "answer": "Sisi samping dan sisi depan sama panjang, sehingga segitiga sama kaki pada sudut acuan dan sudut A adalah 45 derajat. Sisi samping 6 cm dan sisi depan 6 cm menghasilkan cot(A) = 6/6 = 1."
      },
      {
        "question": "Bisakah kotangen kurang dari 1?",
        "answer": "Ya, setiap kali sisi depan lebih panjang daripada sisi samping. Sisi samping 6 m dan sisi depan 8 m menghasilkan cot(A) = 6/8 = 0.75, dan sudut acuannya kemudian lebih besar dari 45 derajat."
      },
      {
        "question": "Apakah kotangen memiliki satuan pengukuran?",
        "answer": "Tidak. Kedua input adalah panjang yang diukur dalam satuan yang sama, sehingga satuannya saling meniadakan: 4 m / 3 m = 4/3, persis seperti 400 cm / 300 cm = 4/3. Laporkan kotangen sebagai angka biasa tanpa dimensi, jangan pernah disertai derajat, meter, atau kaki."
      },
      {
        "question": "Bagaimana cara menghitung kotangen dari panjang sisi?",
        "answer": "Ukur sisi samping b dan sisi depan a dalam satuan yang sama, pastikan keduanya positif, lalu bagi: cot(A) = b / a. Di halaman ini, masukkan sisi samping di kolom pertama dan sisi depan di kolom kedua, pilih satuan yang cocok, dan klik Calculate cot(A)."
      },
      {
        "question": "Bagaimana cara menemukan sudut dari rasio kotangen?",
        "answer": "Ambil kebalikannya untuk mendapatkan rasio tangen, lalu terapkan tangen invers: A = tan^-1(a / b). Untuk cot(A) = 4/3, rasio tangennya adalah 3/4, sehingga A = tan^-1(0.75), sekitar 36.87 derajat. Atur kalkulator ilmiah ke mode derajat terlebih dahulu. Kalkulator di halaman ini menghasilkan rasio, bukan sudut."
      },
      {
        "question": "Apakah kalkulator kotangen memerlukan hipotenusa?",
        "answer": "Tidak. Rasio kotangen dasar hanya menggunakan kedua sisi yang tegak lurus, sehingga hipotenusa tidak pernah masuk rumus. Hipotenusa menjadi relevan hanya untuk pekerjaan lanjutan dengan sinus, kosinus, sekan, atau kosekan, atau ketika teorema Pythagoras digunakan untuk memverifikasi segitiga."
      },
      {
        "question": "Apa arti kotangen dalam istilah jarak dan kenaikan?",
        "answer": "Ketika sudut A diukur dari arah horizontal, cot(A) adalah jarak horizontal dibagi kenaikan vertikal. Kotangen 0.75 berarti jarak horizontal adalah 75 persen dari kenaikan vertikal; kotangen 12 berarti jaraknya dua belas kali kenaikan. Tangen adalah gagasan yang sama dalam bentuk terbalik: kenaikan dibagi jarak."
      },
      {
        "question": "Kapan saya harus menggunakan kotangen, bukan tangen?",
        "answer": "Gunakan kotangen ketika rumus atau prosedur secara khusus meminta sisi samping dibagi sisi depan, ketika Anda membandingkan jarak horizontal dengan kenaikan vertikal, atau ketika sisi yang diketahui adalah kedua kaki. Jika hubungan yang diketahui adalah kenaikan dibagi jarak, atau sisi depan dibagi sisi samping, tangen adalah pilihan langsung."
      }
    ],
    "conclusion": {
      "h2": "Gunakan Rasio Kotangen dengan Percaya Diri",
      "paragraphs": [
        "Kotangen adalah bentuk terbalik dari tangen: bagi sisi samping dengan sisi depan dan Anda telah menggambarkan bentuk jarak-terhadap-kenaikan segitiga. Rumus [[\\cot(A)=b/a]] hanya memerlukan dua pengukuran, jawabannya selalu berupa angka positif tak berdimensi, dan dapat berada di atas, tepat pada, atau di bawah 1 tergantung kaki mana yang lebih panjang. Ketika sudutnya sendiri dibutuhkan, [[A=\\tan^{-1}(a/b)]] akan menemukannya. Tangga, atap, tanjakan, atau 3-4-5 di buku teks, metodenya tidak pernah berubah: tentukan sisi samping, tentukan sisi depan, bagi, dan verifikasi dengan kebalikan dari tangen."
      ]
    }
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "cot-intro": "ما هي حاسبة نسبة ظل التمام؟",
      "cot-triangle": "فهم الضلع المجاور والضلع المقابل",
      "cot-whatis": "فهم نسبة ظل التمام",
      "cot-formula": "كيف تعمل صيغة ظل التمام",
      "cot-howto": "كيفية استخدام حاسبة نسبة ظل التمام",
      "cot-examples": "أمثلة خطوة بخطوة لحساب ظل التمام",
      "cot-applications": "أمثلة واقعية لاستخدام نسبة ظل التمام",
      "cot-angle": "فهم العلاقة بين ظل التمام وحجم الزاوية",
      "cot-recover": "كيفية إيجاد زاوية عندما يكون ظل التمام معروفا",
      "cot-mistakes": "أخطاء شائعة عند حساب ظل التمام",
      "cot-verify": "كيفية التحقق من صحة نتيجة ظل التمام",
      "cot-vs": "ظل التمام مقابل الظل والجيب وجيب التمام",
      "cot-related": "استكشف حاسبات المثلثات ذات الصلة",
      "cot-faq": "الأسئلة الشائعة"
    },
    "sections": {
      "cot-intro": {
        "h2": "ما هي حاسبة نسبة ظل التمام؟",
        "blocks": [
          {
            "kind": "p",
            "text": "تجيب حاسبة نسبة ظل التمام عن سؤال واحد: بالنسبة لزاوية حادة في مثلث قائم الزاوية، كيف يقارن الضلع المجاور للزاوية بالضلع المقابل لها؟ أدخل طولي الضلعين، وستقسم الأداة الضلع المجاور على الضلع المقابل، لتعيد [[\\cot(A)=b/a]]. مع ضلع مجاور طوله 4 سم وضلع مقابل طوله 3 سم، يكون الحساب [[4/3\\approx1.3333]]: الضلع المجاور أطول من الضلع المقابل بنحو 1.3333 مرة. هذا العدد العشري هو الإجابة الكاملة. وهو لا يحمل أي وحدات، لأن السنتيمترات تلغى في القسمة، وليس زاوية بالدرجات. الوتر لا يدخل هذا الحساب أبدا؛ الضلعان المتعامدان كافيان. وظل التمام هو أيضا مقلوب الظل، ولهذا تعرفه كثير من الكتب المدرسية بأنه الصورة المعكوسة من [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "فهم الضلع المجاور والضلع المقابل",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث القائم الزاوية؟"
          },
          {
            "kind": "p",
            "text": "المثلث القائم الزاوية فيه زاوية قياسها [[90^\\circ]] بالضبط، وهي الزاوية بين خطين متعامدين، كالجدار الذي يلتقي بأرضية مستوية. الوتر يقع مقابل تلك الزاوية القائمة وهو دائما أطول ضلع. الزاويتان الأخريان تتقاسمان الدرجات التسعين المتبقية، فتكونان حادتين. الضلعان القائمان يلتقيان عند الزاوية القائمة، متعامدين أحدهما على الآخر، والعلاقة بينهما هي ما يصفه ظل التمام."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور [[b]] هو الضلع القائم الذي يلامس الزاوية المرجعية [[A]] دون أن يكون الوتر. وفي المسائل العملية غالبا ما يلعب دور المسافة الأفقية: المسافة الأرضية من قاعدة سلم، أو الإسقاط الأفقي لسقف، أو المركبة الأفقية لقوة. وهو يذهب إلى بسط صيغة ظل التمام. وأي ضلع يعد مجاورا يعتمد على الزاوية المرجعية المختارة، فالانتقال من الزاوية [[A]] إلى الزاوية [[B]] يبدل تسميتي المجاور والمقابل."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المقابل؟"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل [[a]] يقع مباشرة مقابل الزاوية [[A]] ولا يلامس رأسها أبدا. وفي المسائل العملية غالبا ما يلعب دور الارتفاع العمودي: ارتفاع جدار، أو فرق ارتفاع، أو المركبة العمودية لقياس ما. وهو يذهب إلى مقام صيغة ظل التمام، مما يعني أن تكبيره يصغر النسبة وتصغيره يكبرها."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "الوتر [[c]] هو الضلع المقابل للزاوية القائمة: في أي رسم يقابل المربع الصغير الذي يميز ركن [[90^\\circ]]، وهو أطول من أي من الضلعين القائمين قطعا. وهو لا يلعب أي دور في نسبة ظل التمام الأساسية، ولهذا لا تطلبه الحاسبة أبدا. ويصبح مهما عندما يدخل الجيب أو جيب التمام أو القاطع أو قاطع التمام في العمل، أو عندما تستخدم نظرية فيثاغورس للتحقق من أن الضلعين يشكلان مثلثا قائما حقيقيا."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "مثلث قائم الزاوية بزاوية A أسفل اليسار، الضلع المجاور الذهبي b، الضلع المقابل الأخضر a، cot(A)=b/a",
            "caption": "الزاوية A تقع أسفل اليسار؛ يستخدم ظل التمام الضلع المجاور الذهبي b والضلع المقابل الأخضر a، وليس الوتر c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "فهم نسبة ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "يقارن ظل التمام الطول المجاور للزاوية المرجعية بالطول المقابل لها:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "هنا [[\\cot(A)]] هو ظل تمام الزاوية [[A]]، و[[b]] هو الضلع المجاور، و[[a]] هو الضلع المقابل: أي كم مرة يتسع الضلع المجاور للضلع المقابل."
          },
          {
            "kind": "h3",
            "text": "ظل التمام مقلوبا للظل"
          },
          {
            "kind": "p",
            "text": "الظل يقسم الضلع المقابل على الضلع المجاور، [[\\tan(A)=a/b]]. وأخذ المقلوب يعكس ذلك الكسر، [[1/\\tan(A)=b/a]]، وهو بالضبط صيغة ظل التمام:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "مع [[\\tan(A)=3/4=0.75]]، يكون المقلوب [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: المثلث نفسه، موصوفا من الاتجاه المعاكس. وهذا التمييز مهم لأن [[\\tan^{-1}]] يدل على دالة الظل العكسية، بينما [[1/\\tan(A)]] هو مقلوب الظل: فكرتان مترابطتان، لكن بمعنيين مختلفين وإجابتين مختلفتين."
          },
          {
            "kind": "h3",
            "text": "فهم ظل التمام قسمة المسافة الأفقية على الارتفاع العمودي"
          },
          {
            "kind": "p",
            "text": "عندما تقاس الزاوية [[A]] من الأفقي، يمكن أن يمثل الضلع المجاور المسافة الأفقية والضلع المقابل الارتفاع العمودي. وعندئذ [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. والظل يعطي العلاقة نفسها معكوسة، الارتفاع مقسوما على المسافة. وهذه القراءة للمسافة على الارتفاع تجعل ظل التمام النسبة الطبيعية لأسئلة مثل كم من المسافة الأفقية يغطي مقدارا من الارتفاع، وهي تعتمد على الزاوية المرجعية المختارة وهندسة الموقف."
          },
          {
            "kind": "h3",
            "text": "ماذا تعني قيمة ظل التمام؟"
          },
          {
            "kind": "p",
            "text": "ظل التمام الأكبر من 1 يعني أن الضلع المجاور أطول من الضلع المقابل، وأن الزاوية المرجعية أقل من [[45^\\circ]]. وظل التمام المساوي لـ 1 يعني أن الضلعين متساويان وأن الزاوية [[A]] هي [[45^\\circ]] بالضبط. وظل التمام الواقع بين 0 و1 يعني أن الضلع المقابل أطول من الضلع المجاور، وأن الزاوية المرجعية تقع بين [[45^\\circ]] و[[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "لماذا يمكن أن يكون ظل التمام أكبر من 1"
          },
          {
            "kind": "p",
            "text": "بخلاف الجيب وجيب التمام، لا يوجد لظل التمام سقف من 0 إلى 1 لأن الوتر لا يدخل القسمة أبدا. ففي حالة [[\\cot(A)=8/2=4]]، الضلع المجاور ببساطة أربعة أضعاف الضلع المقابل، والزاوية المرجعية زاوية حادة صغيرة نسبيا. وأي قيمة موجبة محدودة ممكنة."
          },
          {
            "kind": "h3",
            "text": "لماذا يمكن أن يكون ظل التمام أقل من 1"
          },
          {
            "kind": "p",
            "text": "في حالة [[\\cot(A)=3/6=0.5]]، الضلع المجاور نصف الضلع المقابل، فتكون الزاوية المرجعية زاوية حادة كبيرة نسبيا. وتنخفض النسبة دون 1 دون أن يحدث أي خطأ: إنها ببساطة سمة مثلث أطول وأضيق."
          },
          {
            "kind": "h3",
            "text": "لماذا ظل التمام نسبة عديمة الوحدات"
          },
          {
            "kind": "p",
            "text": "قسمة طول على آخر تلغي الوحدات: [[4\\text{ m}/3\\text{ m}=4/3]]، وكذلك [[400\\text{ cm}/300\\text{ cm}=4/3]]. فالعدد يصف شكل المثلث، وليس قياسا بوحدات فيزيائية، لذا اكتب النتيجة عددا مجردا، ولا ترفق بها أبدا أمتارا أو سنتيمترات أو درجات."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "ثلاث مراحل: مثلث 3-4-5 موسوم، الظل tan(A)=3/4=0.75، ظل التمام cot(A)=4/3=1.3333، العلاقة المقلوبة",
            "caption": "ثلاث مراحل: سم مثلث 3-4-5، واحسب الظل tan(A) = 3/4، ثم اقلب الكسر لتحصل على cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "كيف تعمل صيغة ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "ابدأ من التعريف: ظل التمام هو الضلع المجاور مقسوما على الضلع المقابل. وبالترميز المستخدم في هذه الصفحة:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور هو البسط لأنه الطول الذي تتم مقارنته؛ والضلع المقابل هو المقام لأنه الطول المرجعي، وحدة كم من هذه يتسع في ذاك. وتبديلهما يعطي نسبة الظل بدلا من ذلك."
          },
          {
            "kind": "h3",
            "text": "مثال محلول بالكامل: مثلث قائم الزاوية 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=4\\text{ cm}]]، [[a=3\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "الخطوة 1: اكتب الصيغة. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 2: عوض بالقياسات. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 3: اقسم. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 4: فسر الإجابة. الضلع المجاور أطول من الضلع المقابل بنحو 1.3333 مرة."
          },
          {
            "kind": "p",
            "text": "الخطوة 5: تحقق بنسبة الظل. [[\\tan(A)=3/4=0.75]]، و[[1/0.75\\approx1.3333]]. كلا المسارين يصلان إلى العدد نفسه، وهذا بالضبط سلوك النسب المقلوبة."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "كيفية استخدام حاسبة نسبة ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "الشرح أدناه يطابق الواجهة الفعلية في هذه الصفحة."
          }
        ],
        "steps": [
          "<strong>حدد الزاوية المرجعية [[A]]،</strong> لأن الضلعين المجاور والمقابل معرفان بالنسبة إليها.",
          "<strong>حدد الضلع المجاور [[b]]:</strong> الضلع القائم الذي يلامس الزاوية [[A]] وليس الوتر.",
          "<strong>حدد الضلع المقابل [[a]]:</strong> الضلع القائم الذي يقع مباشرة مقابل الزاوية [[A]]، والذي لا يلامس رأسها أبدا.",
          "<strong>قس طولي الضلعين أو احصل عليهما</strong> بالوحدة نفسها.",
          "<strong>أدخل طول الضلع المجاور</strong> في حقل الإدخال الأول.",
          "<strong>أدخل طول الضلع المقابل</strong> في حقل الإدخال الثاني.",
          "<strong>اختر وحدات متطابقة بمحددات الوحدات</strong> حتى تقارن القسمة مثلا بمثل.",
          "<strong>تأكد أن القياسين موجبان؛</strong> فالأطوال الصفرية أو السالبة لا يمكن أن تشكل مثلثا حقيقيا.",
          "<strong>انقر Calculate cot(A)</strong> لقسمة الضلع المجاور على الضلع المقابل.",
          "<strong>اقرأ نسبة ظل التمام:</strong> الضلع المجاور معبرا عنه مضاعفا للضلع المقابل.",
          "<strong>فسر النتيجة:</strong> الأكبر من 1 يعني ضلعا مجاورا أطول، والمساوي لـ 1 يعني ضلعين متساويين، والأقل من 1 يعني ضلعا مقابلا أطول.",
          "<strong>استخدم Reset</strong> لمسح المدخلات والبدء من جديد."
        ],
        "closingParagraphs": [
          "لا تطلب الحاسبة وترا ولا زاوية بالدرجات: طولا ضلعين موجبين هما المدخل الكامل، والنتيجة دائما عدد موجب عديم الوحدات."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "أمثلة خطوة بخطوة لحساب ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "كل مثال يتبع النمط نفسه: اكتب الصيغة، وعوض، واقسم، وفسر."
          },
          {
            "kind": "h3",
            "text": "المثال 1: مثلث قائم الزاوية 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=4\\text{ cm}]]، [[a=3\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور أطول من الضلع المقابل بنحو 1.3333 مرة؛ والوتر خارج الحساب تماما."
          },
          {
            "kind": "h3",
            "text": "المثال 2: مثلث قائم الزاوية 5-12-13"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=12\\text{ m}]]، [[a=5\\text{ m}]]، [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "النسبة أكبر من 1 لأن الضلع المجاور هو الضلع الأطول؛ وهي تخبرنا أن الضلع المجاور يساوي 2.4 ضعف الضلع المقابل، وليس حجم المثلث."
          },
          {
            "kind": "h3",
            "text": "المثال 3: مثلث قائم الزاوية متساوي الساقين"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=6\\text{ cm}]]، [[a=6\\text{ cm}]]، [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "الضلعان المتساويان يعطيان نسبة 1 بالضبط، وهي سمة زاوية مرجعية [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "المثال 4: مثلث بضلع مجاور أصغر"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=6\\text{ m}]] و[[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "النتيجة أقل من 1 لأن الضلع المقابل هو الضلع الأطول، فتكون الزاوية المرجعية أكبر من [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "أمثلة واقعية لاستخدام نسبة ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "ظل التمام نسبة رياضية، وليس كمية فيزيائية لها وحدات. وتكمن قيمته العملية في مقارنة المسافة الأفقية بالارتفاع العمودي، والتحقق من هندسة المثلث، واستخدام الصيغ التي تطلب تحديدا الضلع المجاور مقسوما على المقابل. ويفترض كل مثال مثلثا قائما مبسطا، ولا تحسم أي من هذه النسب وحدها مسائل السلامة أو المتانة أو الامتثال للمعايير."
          },
          {
            "kind": "h3",
            "text": "المثال 5: إيجاد نسبة المسافة إلى الارتفاع لسلم"
          },
          {
            "kind": "p",
            "text": "يستند سلم إلى جدار عمودي. قاعدته على بعد 3 م من الجدار، ويصل إلى ارتفاع 4 م على الجدار. المسافة الأفقية هي الضلع المجاور [[b=3\\text{ m}]]، والوصول العمودي هو الضلع المقابل [[a=4\\text{ m}]]. [[\\cot(A)=3/4]]، إذن [[\\boxed{\\cot(A)=0.75}]]: المسافة الأفقية 75 بالمئة من الارتفاع العمودي. تصف النسبة هندسة السلم؛ وهي لا تحدد ما إذا كان السلم موضوعا بأمان."
          },
          {
            "kind": "h3",
            "text": "المثال 6: حساب نسبة المسافة إلى الارتفاع لسقف"
          },
          {
            "kind": "p",
            "text": "مقطع سقف له مسافة أفقية 4 م وارتفاع عمودي 3 م. هنا [[b=4\\text{ m}]] و[[a=3\\text{ m}]]. [[\\cot(A)=4/3]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]: المسافة الأفقية نحو 1.3333 ضعف الارتفاع العمودي. وهذه النسبة ليست تقييما إنشائيا أو تقييم امتثال لمعايير التسقيف كاملا."
          },
          {
            "kind": "h3",
            "text": "المثال 7: تقييم نسبة ظل التمام لمنحدر"
          },
          {
            "kind": "p",
            "text": "منحدر مبسط له مسافة أفقية 9 م وارتفاع عمودي 0.75 م. مع [[b=9\\text{ m}]] و[[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]]، إذن [[\\boxed{\\cot(A)=12}]]. المسافة الأفقية 12 ضعف الارتفاع العمودي، وهي سمة منحدر لطيف. والنسبة وحدها لا تحدد إمكانية الوصول أو الامتثال لمعايير البناء."
          },
          {
            "kind": "h3",
            "text": "المثال 8: قياس مساحي"
          },
          {
            "kind": "p",
            "text": "مثلث مساحي مبسط له مسافة أفقية 40 م وفرق ارتفاع عمودي 30 م. مع [[b=40\\text{ m}]] و[[a=30\\text{ m}]]: [[\\cot(A)=40/30]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]. تقارن النسبة الفصل الأفقي بالفرق العمودي مباشرة. وقد تتطلب المساحة الفعلية قياسات إضافية وتصحيحات وإجراءات أجهزة."
          },
          {
            "kind": "h3",
            "text": "المثال 9: سلك شد يدعم عمودا"
          },
          {
            "kind": "p",
            "text": "يربط سلك شد عمودا بمرساة أرضية. المرساة على بعد 12 م أفقيا من العمود، ونقطة التثبيت على ارتفاع 5 م عن الأرض. مع [[b=12\\text{ m}]] و[[a=5\\text{ m}]]: [[\\cot(A)=12/5]]، إذن [[\\boxed{\\cot(A)=2.4}]]. المسافة الأفقية 2.4 ضعف الفصل العمودي. وهذه النسبة لا تثبت شد السلك أو متانة المرساة أو السلامة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 10: فهم نسبة المسافة إلى الارتفاع لدرج"
          },
          {
            "kind": "p",
            "text": "درج مبسط له مسافة أفقية 4 م وارتفاع عمودي 3 م. مع [[b=4\\text{ m}]] و[[a=3\\text{ m}]]: [[\\cot(A)=4/3]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]. المسافة الأفقية نحو 1.3333 ضعف الارتفاع العمودي. يصف المثال قطرا مثاليا ولا يتحقق من أبعاد الدرج أو الامتثال للمعايير."
          },
          {
            "kind": "h3",
            "text": "المثال 11: المركبتان الأفقية والعمودية لذراع رافعة"
          },
          {
            "kind": "p",
            "text": "ذراع رافعة مبسطة تشكل مثلثا قائما بإسقاط أفقي 6 م وارتفاع عمودي 8 م. مع [[b=6\\text{ m}]] و[[a=8\\text{ m}]]: [[\\cot(A)=6/8]]، إذن [[\\boxed{\\cot(A)=0.75}]]. الإسقاط الأفقي 75 بالمئة من المركبة العمودية. والنسبة لا تثبت قدرة الرفع أو سلامة التشغيل."
          },
          {
            "kind": "h3",
            "text": "المثال 12: مقطع طيران مستقيم لطائرة"
          },
          {
            "kind": "p",
            "text": "لمقطع طيران مبسط، تطير طائرة على مسار مستقيم بإزاحة أفقية 4 كم وكسب عمودي 3 كم. مع [[b=4\\text{ km}]] و[[a=3\\text{ km}]]: [[\\cot(A)=4/3]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]. الإزاحة الأفقية نحو 1.3333 ضعف الكسب العمودي. وهذا نموذج هندسي مثالي، وليس حساب ملاحة جوية كاملا."
          },
          {
            "kind": "h3",
            "text": "المثال 13: دعامة ميكانيكية قطرية"
          },
          {
            "kind": "p",
            "text": "دعامة قطرية لها إزاحة أفقية 1.2 م وارتفاع عمودي 1.6 م. مع [[b=1.2\\text{ m}]] و[[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]]، إذن [[\\boxed{\\cot(A)=0.75}]]. الإزاحة الأفقية 75 بالمئة من الارتفاع العمودي. والنسبة لا تحدد متانة الدعامة أو ملاءمتها."
          },
          {
            "kind": "h3",
            "text": "المثال 14: مقطع مستقيم من مسار مشي"
          },
          {
            "kind": "p",
            "text": "مقطع مستقيم مبسط من مسار مشي له إزاحة أفقية 80 م وكسب عمودي 60 م. مع [[b=80\\text{ m}]] و[[a=60\\text{ m}]]: [[\\cot(A)=80/60]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]. الإزاحة الأفقية نحو 1.3333 ضعف الكسب في الارتفاع. وقد تكون للمسارات الفعلية منحنيات وتدرجات متغيرة."
          },
          {
            "kind": "h3",
            "text": "المثال 15: دعامة مظلة"
          },
          {
            "kind": "p",
            "text": "دعامة مظلة قطرية لها إسقاط أفقي 2.4 م وارتفاع عمودي 1.8 م. مع [[b=2.4\\text{ m}]] و[[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]]، إذن [[\\boxed{\\cot(A)\\approx1.3333}]]. تصف النسبة الإسقاط الأفقي بالنسبة إلى الارتفاع العمودي. وهذا الحساب لا يثبت الملاءمة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 16: كبل يمتد بين ارتفاعين مختلفين"
          },
          {
            "kind": "p",
            "text": "كبل مستقيم يمتد 24 م أفقيا بين نقطتين بفصل عمودي 7 م. مع [[b=24\\text{ m}]] و[[a=7\\text{ m}]]: [[\\cot(A)=24/7]]، إذن [[\\boxed{\\cot(A)\\approx3.4286}]]. الفصل الأفقي نحو 3.4286 ضعف الفرق العمودي. ويفترض النموذج خطا مستقيما بين النقطتين الطرفيتين."
          },
          {
            "kind": "h3",
            "text": "مقارنة الأمثلة العملية"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "يسري النمط في كل الأمثلة: تكون النسبة كبيرة عندما يطغى الضلع المجاور على الضلع المقابل، وصغيرة عندما يهيمن الضلع المقابل."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الحالة", "الضلع المجاور b", "الضلع المقابل a", "صيغة ظل التمام", "النسبة المحسوبة", "التفسير"],
            "rows": [
              ["سلم", "3 m", "4 m", "3/4", "0.75", "المسافة 75% من الوصول العمودي"],
              ["سقف", "4 m", "3 m", "4/3", "1.3333", "المسافة 1.3333 ضعف الارتفاع"],
              ["منحدر", "9 m", "0.75 m", "9/0.75", "12", "المسافة 12 ضعف الارتفاع"],
              ["مساحة", "40 m", "30 m", "40/30", "1.3333", "المسافة 1.3333 ضعف فرق الارتفاع"],
              ["سلك شد", "12 m", "5 m", "12/5", "2.4", "المسافة 2.4 ضعف الارتفاع"],
              ["درج", "4 m", "3 m", "4/3", "1.3333", "المسافة 1.3333 ضعف الارتفاع"],
              ["ذراع رافعة", "6 m", "8 m", "6/8", "0.75", "الإسقاط 75% من الارتفاع"],
              ["مقطع طيران", "4 km", "3 km", "4/3", "1.3333", "الإزاحة 1.3333 ضعف الكسب"],
              ["دعامة", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "الإزاحة 75% من الارتفاع"],
              ["مسار مشي", "80 m", "60 m", "80/60", "1.3333", "الإزاحة 1.3333 ضعف الكسب"],
              ["دعامة مظلة", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "الإسقاط 1.3333 ضعف الارتفاع"],
              ["كبل", "24 m", "7 m", "24/7", "3.4286", "الفصل 3.4286 ضعف فرق الارتفاع"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "أربع لوحات: نسبة السلم 0.75، والسقف 1.3333، والمنحدر 12، والمساحة 1.3333، كل منها بمثلث قائم موسوم",
            "caption": "أربع حسابات عملية: السلم والسقف والمنحدر والمساحة، كل منها بمثلثه وصيغته ونسبته."
          }
        ]
      },
      "cot-angle": {
        "h2": "فهم العلاقة بين ظل التمام وحجم الزاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "يتناقص ظل التمام كلما كبرت الزاوية الحادة. فالزاوية الصغيرة تبقي الضلع المجاور أطول بكثير من الضلع المقابل، فتكون النسبة كبيرة؛ وعندما تنفتح الزاوية [[A]] نحو [[90^\\circ]]، يتولى الضلع المقابل الصدارة وتنخفض النسبة نحو 0. وتظهر القيم المرجعية المتحقق منها أدناه هذا النمط:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "قياسات الجدول توضيحية: فالنسب، لا الأطوال المطلقة، هي التي تحدد الزوايا. تنمو النسبة بلا حد عندما تقترب الزاوية من [[0^\\circ]] وتقترب من 0 عندما تقترب الزاوية من [[90^\\circ]]، وتبقى موجبة ومحدودة لكل مثلث صالح.",
          "الحاسبة لا تأخذ أي مدخل زاوية؛ وهذه القيم المرجعية تعمل توجيها وقيما للتحقق عند التحقق من نتيجة."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الزاوية A", "الضلع المجاور b", "الضلع المقابل a", "نسبة ظل التمام"],
            "rows": [
              ["30 درجة", "sqrt(3)", "1", "نحو 1.7321"],
              ["45 درجة", "1", "1", "1"],
              ["60 درجة", "1", "sqrt(3)", "نحو 0.5774"],
              ["75 درجة", "1", "نحو 3.7321", "نحو 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "ثلاثة مثلثات عند 30 و45 و60 درجة بقيم ظل تمام 1.7321 و1 و0.5774؛ يتناقص ظل التمام كلما كبرت الزاوية",
            "caption": "كلما كبرت الزاوية A، أصبح الضلع المقابل حصة أكبر من الضلع المجاور، فيتناقص cot(A)."
          }
        ]
      },
      "cot-recover": {
        "h2": "كيفية إيجاد زاوية عندما يكون ظل التمام معروفا",
        "blocks": [
          {
            "kind": "p",
            "text": "نسبة ظل التمام ليست زاوية في حد ذاتها. فعندما تكون النسبة معروفة وتكون الزاوية مطلوبة، يسد حساب المثلثات العكسي الفجوة. وبالنسبة لنسبة ظل تمام موجبة في مثلث قائم الزاوية، خذ المقلوب لاستعادة نسبة الظل، ثم طبق الظل العكسي:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "وبالمقابل، بما أن [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "مثال محلول"
          },
          {
            "kind": "p",
            "text": "المعطى [[\\cot(A)=4/3]]: المقلوب هو [[\\tan(A)=3/4]]، إذن [[A=\\tan^{-1}(3/4)]] و[[\\boxed{A\\approx36.87^\\circ}]]. اضبط الحاسبة العلمية على وضع الدرجات قبل الضغط على مفتاح الظل العكسي. وهذا حساب زاوية منفصل؛ فحاسبة نسبة ظل التمام في هذه الصفحة تأخذ أطوال الأضلاع وتعيد النسبة، ولا تعيد الزاوية أبدا."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "أخطاء شائعة عند حساب ظل التمام",
        "blocks": [],
        "steps": [
          "<strong>عكس الصيغة إلى [[a/b]] بدلا من [[b/a]].</strong> هذا يحسب الظل. الإصلاح: ضع الضلع المجاور في الأعلى.",
          "<strong>الخلط بين ظل التمام والظل.</strong> الإبلاغ عن 0.75 لمثلث 3-4-5. الإصلاح: الظل هو المقابل على المجاور؛ وظل التمام هو الكسر المعكوس.",
          "<strong>الخلط بين ظل التمام وجيب التمام.</strong> استخدام [[b/c]]. الإصلاح: جيب التمام يحتاج الوتر؛ وظل التمام لا يمسه أبدا.",
          "<strong>استخدام الوتر بدلا من أحد الضلعين القائمين.</strong> حساب [[b/c]] أو [[c/a]]. الإصلاح: المقام هو الضلع المقابل [[a]]، وليس [[c]].",
          "<strong>الخلط بين الضلعين المجاور والمقابل.</strong> اختيار الضلع الخطأ. الإصلاح: تتبع من الزاوية [[A]]: الضلع الذي يلامسها هو المجاور، والذي يقابلها هو المقابل.",
          "<strong>نسيان أن تسميات الأضلاع تعتمد على الزاوية المرجعية.</strong> استخدام تسميات مرسومة للزاوية [[B]]. الإصلاح: أعد التسمية كلما تغيرت الزاوية المرجعية.",
          "<strong>افتراض أن ظل التمام يجب أن يكون بين 0 و1.</strong> معاملة 2.4 أو 12 كأخطاء. الإصلاح: تلك القيم سليمة؛ فالجيب وجيب التمام وحدهما محصوران عند 1.",
          "<strong>افتراض أن ظل تمام 1 يعني مثلثا غير صالح.</strong> الإصلاح: [[\\cot(A)=1]] يعني ببساطة ضلعين متساويين وزاوية [[45^\\circ]]، مثلث صالح تماما.",
          "<strong>الإبلاغ عن النسبة بالأمتار أو السنتيمترات.</strong> كتابة 1.3333 m. الإصلاح: الوحدات ألغيت فعلا، فأبلغ عددا مجردا.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> قسمة على صفر أو نسبة سالبة لا معنى لها. الإصلاح: استخدم أطوالا موجبة فقط.",
          "<strong>خلط وحدات القياس.</strong> قسمة الأمتار على السنتيمترات تحرف النسبة بمقدار 100. الإصلاح: حول الضلعين إلى وحدة واحدة أولا.",
          "<strong>التقريب مبكرا جدا.</strong> تقريب [[4/3]] إلى 1.33 قبل التحقق يضيف خطأ يمكن تجنبه. الإصلاح: احتفظ بأرقام إضافية حتى الخطوة الأخيرة.",
          "<strong>افتراض أن ظل التمام زاوية بالدرجات.</strong> قراءة 1.3333 على أنها 1.3333 درجة. الإصلاح: إنها نسبة؛ والزاوية تحتاج الظل العكسي.",
          "<strong>الخلط بين مقلوب الظل والظل العكسي.</strong> كتابة [[1/\\tan(A)]] عندما يكون [[\\tan^{-1}(a/b)]] مطلوبا، أو العكس. الإصلاح: المقلوب يعكس الكسر؛ والعكسي يستعيد الزاوية.",
          "<strong>افتراض أن قيمة ظل التمام تحدد حجم المثلث.</strong> يمكن لمثلثين مختلفين جدا أن يشتركا في [[\\cot(A)=1.3333]]. الإصلاح: النسبة تحدد الشكل، لا المقياس."
        ],
        "closingParagraphs": [
          "<strong>الخطأ مقابل الصواب</strong>",
          "المعطى [[b=4]] و[[a=3]]:",
          "خطأ: [[3/4=0.75]]. هذه نسبة الظل، وليست ظل التمام.",
          "صواب: [[\\cot(A)=4/3\\approx1.3333]]. تحقق: [[\\tan(A)=3/4=0.75]] و[[1/0.75\\approx1.3333]]، مما يؤكد العلاقة المقلوبة."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "كيفية التحقق من صحة نتيجة ظل التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "المثلث القائم الصالح غير المنحل يتطلب ضلعين قائمين موجبين، [[a \\gt 0]] و[[b \\gt 0]]، لذا يجب أن تكون نتيجة ظل التمام عددا موجبا محدودا:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "ويجب أن يستخدم القياسان وحدات متوافقة. فالنتيجة الأكبر من 1 أو المساوية لـ 1 أو الأقل من 1 يمكن أن تكون كلها صالحة؛ فبخلاف الجيب وجيب التمام، ظل التمام ليس محصورا عند 1."
          },
          {
            "kind": "h3",
            "text": "الطريقة 1: تحقق من مقلوب الظل"
          },
          {
            "kind": "p",
            "text": "تحقق من [[\\tan(A)=a/b]]، ثم أكد أن [[\\cot(A)=1/\\tan(A)]]. مع [[a=3]] و[[b=4]]: [[\\tan(A)=3/4=0.75]]، إذن [[\\cot(A)=1/0.75\\approx1.3333}]]. وعدم التطابق بين المسارين يشير إلى كسر معكوس أو ضلع مسمى خطأ."
          },
          {
            "kind": "h3",
            "text": "الطريقة 2: تحقق من نظرية فيثاغورس"
          },
          {
            "kind": "p",
            "text": "إذا كان الوتر معروفا أو مطلوبا، فاحسب [[c=\\sqrt{a^2+b^2}]]. فمع [[a=3]] و[[b=4]]: [[c=\\sqrt{9+16}=5]]، و[[3^2+4^2=5^2]]. وهذا يؤكد أن أطوال الأضلاع تشكل مثلثا قائما حقيقيا. الوتر هنا قيمة للتحقق، وليس جزءا من صيغة ظل التمام الأساسية."
          },
          {
            "kind": "h3",
            "text": "الطريقة 3: تحقق من العلاقة الزاوية"
          },
          {
            "kind": "p",
            "text": "لنسبة ظل تمام معروفة، استعد الزاوية بـ [[A=\\tan^{-1}(a/b)]]. فمع [[a=3]] و[[b=4]]: [[A\\approx36.87^\\circ]]. ولأن الضلع المجاور أطول من الضلع المقابل، يجب أن تقع الزاوية دون [[45^\\circ]]؛ فإن لم يحدث ذلك، فتسميتا الضلعين مبدلتان على الأرجح. وقد تنشأ فروق صغيرة من التقريب."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "ظل التمام مقابل الظل والجيب وجيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "تقارن كل نسبة زوجا مختلفا من الأضلاع، باستخدام الزاوية المرجعية وتسميات الأضلاع نفسها:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "ظل التمام والظل هما الزوج المقلوب: [[\\cot(A)=1/\\tan(A)]]. فإذا كان [[\\tan(A)=0.75]]، فإن [[\\cot(A)\\approx1.3333}]]. اختر ظل التمام عندما تطلب صيغة المجاور مقسوما على المقابل، أو عندما تعمل على علاقات المسافة إلى الارتفاع، أو عندما يكون الضلعان القائمان فقط معلومين؛ واختر الظل للارتفاع إلى المسافة، والجيب للمقابل مقابل الوتر، وجيب التمام للمجاور مقابل الوتر.",
          "للنسب المجاورة، انظر <a href=\"/sine-ratio-calculator/\">حاسبة نسبة الجيب</a>، و<a href=\"/cosine-ratio-calculator/\">حاسبة نسبة جيب التمام</a>، و<a href=\"/tangent-ratio-calculator/\">حاسبة نسبة الظل</a>، و<a href=\"/secant-ratio-calculator/\">حاسبة نسبة القاطع</a>، و<a href=\"/cosecant-ratio-calculator/\">حاسبة نسبة قاطع التمام</a>."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["النسبة", "الصيغة", "ما تقارنه"],
            "rows": [
              ["الجيب", "sin(A) = a/c", "الضلع المقابل إلى الوتر"],
              ["جيب التمام", "cos(A) = b/c", "الضلع المجاور إلى الوتر"],
              ["الظل", "tan(A) = a/b", "الضلع المقابل إلى الضلع المجاور"],
              ["ظل التمام", "cot(A) = b/a", "الضلع المجاور إلى الضلع المقابل"],
              ["القاطع", "sec(A) = c/b", "الوتر إلى الضلع المجاور"],
              ["قاطع التمام", "csc(A) = c/a", "الوتر إلى الضلع المقابل"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "استكشف حاسبات المثلثات ذات الصلة",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "حاسبة نسبة الجيب",
            "desc": "احسب نسبة الجيب من الضلع المقابل والوتر."
          },
          {
            "name": "حاسبة نسبة جيب التمام",
            "desc": "احسب نسبة جيب التمام من الضلع المجاور والوتر."
          },
          {
            "name": "حاسبة نسبة الظل",
            "desc": "احسب نسبة الظل من الضلعين المقابل والمجاور."
          },
          {
            "name": "حاسبة نسبة القاطع",
            "desc": "احسب نسبة القاطع من الوتر والضلع المجاور."
          },
          {
            "name": "حاسبة نسبة قاطع التمام",
            "desc": "احسب نسبة قاطع التمام من الوتر والضلع المقابل."
          },
          {
            "name": "حاسبة زوايا المثلث القائم",
            "desc": "أوجد الزوايا الحادة من أطوال الأضلاع."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة",
    "faqs": [
      {
        "question": "ما هي صيغة ظل التمام للمثلث القائم الزاوية؟",
        "answer": "cot(A) = b / a: اقسم الضلع المجاور للزاوية A على الضلع المقابل للزاوية A. مع ضلع مجاور طوله 4 سم وضلع مقابل طوله 3 سم، تكون النتيجة 4/3، أي نحو 1.3333."
      },
      {
        "question": "كيف يرتبط ظل التمام بالظل؟",
        "answer": "ظل التمام هو مقلوب الظل: cot(A) = 1 / tan(A). فإذا كان tan(A) = 3/4 = 0.75، فإن cot(A) = 4/3، أي نحو 1.3333. تصف النسبتان المثلث نفسه من منظورين معكوسين، والتحقق بالمقلوب هو أسرع طريقة للتحقق من النتيجة."
      },
      {
        "question": "ما الفرق بين ظل التمام وجيب التمام؟",
        "answer": "يقسم ظل التمام الضلع المجاور على الضلع المقابل (b/a)، مستخدما الضلعين القائمين فقط. ويقسم جيب التمام الضلع المجاور على الوتر (b/c). وظل التمام هو مقلوب الظل، وليس مقلوب جيب التمام؛ وهذا التمييز من أكثر الأخطاء اختبارا في حساب المثلثات المبكر."
      },
      {
        "question": "هل يمكن أن يكون ظل التمام أكبر من 1؟",
        "answer": "نعم. لا يوجد لظل التمام سقف من 0 إلى 1 لأن الوتر لا يدخل الحساب. فعندما يكون الضلع المجاور أطول من الضلع المقابل، تكون النتيجة فوق 1: فبالنسبة لزاوية 30 درجة، يكون cot(30 deg) نحو 1.7321. والقيم 2.4 و12 أو أي عدد موجب محدود كلها ممكنة."
      },
      {
        "question": "ماذا تعني قيمة ظل تمام تساوي 1؟",
        "answer": "الضلعان المجاور والمقابل متساويان في الطول، فيكون المثلث متساوي الساقين عند الزاوية المرجعية وتكون الزاوية A هي 45 درجة. فضلع مجاور طوله 6 سم وضلع مقابل طوله 6 سم يعطيان cot(A) = 6/6 = 1."
      },
      {
        "question": "هل يمكن أن يكون ظل التمام أقل من 1؟",
        "answer": "نعم، كلما كان الضلع المقابل أطول من الضلع المجاور. فضلع مجاور طوله 6 م وضلع مقابل طوله 8 م يعطيان cot(A) = 6/8 = 0.75، وتكون الزاوية المرجعية عندئذ أكبر من 45 درجة."
      },
      {
        "question": "هل لظل التمام وحدات قياس؟",
        "answer": "لا. فالمدخلان طولان يقاسان بالوحدة نفسها، فتلغى الوحدات: 4 m / 3 m = 4/3، تماما كما أن 400 cm / 300 cm = 4/3. أبلغ ظل التمام عددا مجردا عديم الوحدات، ولا ترفق به أبدا درجات أو أمتارا أو أقداما."
      },
      {
        "question": "كيف تحسب ظل التمام من أطوال الأضلاع؟",
        "answer": "قس الضلع المجاور b والضلع المقابل a بالوحدة نفسها، وتأكد أنهما موجبان، ثم اقسم: cot(A) = b / a. وفي هذه الصفحة، أدخل الضلع المجاور في الحقل الأول والضلع المقابل في الحقل الثاني، واختر وحدات متوافقة، وانقر Calculate cot(A)."
      },
      {
        "question": "كيف أجد زاوية من نسبة ظل تمام؟",
        "answer": "خذ المقلوب للحصول على نسبة الظل، ثم طبق الظل العكسي: A = tan^-1(a / b). فبالنسبة إلى cot(A) = 4/3، تكون نسبة الظل 3/4، إذن A = tan^-1(0.75)، أي نحو 36.87 درجة. اضبط الحاسبة العلمية على وضع الدرجات أولا. وحاسبة هذه الصفحة تعيد النسبة، لا الزاوية."
      },
      {
        "question": "هل تحتاج حاسبة ظل التمام إلى الوتر؟",
        "answer": "لا. فنسبة ظل التمام الأساسية تستخدم فقط الضلعين المتعامدين، فلا يدخل الوتر الصيغة أبدا. ويصبح مهما فقط للعمل اللاحق مع الجيب وجيب التمام والقاطع وقاطع التمام، أو عندما تستخدم نظرية فيثاغورس للتحقق من المثلث."
      },
      {
        "question": "ماذا يعني ظل التمام بلغة المسافة والارتفاع؟",
        "answer": "عندما تقاس الزاوية A من الأفقي، يكون cot(A) هو المسافة الأفقية مقسومة على الارتفاع العمودي. فظل التمام 0.75 يعني أن المسافة الأفقية 75 بالمئة من الارتفاع العمودي؛ وظل التمام 12 يعني أن المسافة اثنا عشر ضعف الارتفاع. والظل هو الفكرة نفسها معكوسة: الارتفاع مقسوما على المسافة."
      },
      {
        "question": "متى أستخدم ظل التمام بدلا من الظل؟",
        "answer": "استخدم ظل التمام عندما تطلب صيغة أو إجراء تحديدا المجاور مقسوما على المقابل، أو عندما تقارن المسافة الأفقية بالارتفاع العمودي، أو عندما تكون الأضلاع المعلومة هي الضلعين القائمين. أما إذا كانت العلاقة المعلومة هي الارتفاع على المسافة، أو المقابل على المجاور، فالظل هو الخيار المباشر."
      }
    ],
    "conclusion": {
      "h2": "استخدم نسبة ظل التمام بثقة",
      "paragraphs": [
        "ظل التمام هو الصورة المعكوسة للظل: اقسم الضلع المجاور على الضلع المقابل وستكون قد وصفت شكل المسافة إلى الارتفاع للمثلث. والصيغة [[\\cot(A)=b/a]] تحتاج قياسين فقط، والإجابة دائما عدد موجب عديم الوحدات، ويمكن أن تكون فوق 1 أو عنده أو دونه حسب أي الضلعين أطول. وعندما تكون الزاوية نفسها مطلوبة، يستعيدها [[A=\\tan^{-1}(a/b)]]. سلما كان أو سقفا أو منحدرا أو مثلث 3-4-5 في الكتاب المدرسي، لا تتغير الطريقة أبدا: حدد الضلع المجاور، وحدد الضلع المقابل، واقسم، وتحقق بمقلوب الظل."
      ]
    }
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "cot-intro": "Какво е калкулатор за котангенс съотношение?",
      "cot-triangle": "Разбиране на прилежащата и срещулежащата страна",
      "cot-whatis": "Разбиране на котангенс съотношението",
      "cot-formula": "Как работи формулата за котангенс",
      "cot-howto": "Как да използвате калкулатора за котангенс съотношение",
      "cot-examples": "Примери стъпка по стъпка за изчисляване на котангенс",
      "cot-applications": "Примери от реалния живот за използване на котангенс съотношението",
      "cot-angle": "Разбиране на връзката между котангенс и големината на ъгъла",
      "cot-recover": "Как да намерите ъгъл, когато котангенсът е известен",
      "cot-mistakes": "Чести грешки при изчисляване на котангенс",
      "cot-verify": "Как да проверите дали резултатът ви за котангенс е валиден",
      "cot-vs": "Котангенс срещу тангенс, синус и косинус",
      "cot-related": "Разгледайте свързаните тригонометрични калкулатори",
      "cot-faq": "Често задавани въпроси"
    },
    "sections": {
      "cot-intro": {
        "h2": "Какво е калкулатор за котангенс съотношение?",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът за котангенс съотношение отговаря на един въпрос: за остър ъгъл в правоъгълен триъгълник, как страната до ъгъла се сравнява със страната срещу него? Въведете двете дължини на страните и инструментът дели прилежащата страна на срещулежащата, връщайки [[\\cot(A)=b/a]]. При прилежаща страна 4 см и срещулежаща страна 3 см изчислението е [[4/3\\approx1.3333]]: прилежащата страна е приблизително 1.3333 пъти по-дълга от срещулежащата. Това десетично число е пълният отговор. То няма мерни единици, тъй като сантиметрите се съкращават при делението, и не е ъгъл в градуси. Хипотенузата никога не участва в това изчисление; двата перпендикулярни катета са достатъчни. Котангенсът е също реципрочна стойност на тангенса, затова много учебници го представят като обърнатата форма на [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Разбиране на прилежащата и срещулежащата страна",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник има един ъгъл от точно [[90^\\circ]], ъгълът между две перпендикулярни прави, като стена, срещаща равен под. Хипотенузата лежи срещу този прав ъгъл и винаги е най-дългата страна. Другите два ъгъла си поделят оставащите 90 градуса, така че и двата са остри. Двата катета се срещат при правия ъгъл, перпендикулярни един на друг, и именно тяхната връзка описва котангенсът."
          },
          {
            "kind": "h3",
            "text": "Какво е прилежащата страна?"
          },
          {
            "kind": "p",
            "text": "Прилежащата страна [[b]] е катетът, който докосва референтния ъгъл [[A]], без да е хипотенузата. В практическите задачи тя често играе ролята на хоризонталното разстояние: разстоянието по земята от основата на стълба, хоризонталната проекция на покрив или хоризонталната съставка на сила. Тя отива в числителя на формулата за котангенс. Кой катет се брои за прилежащ зависи от избрания референтен ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[B]] разменя означенията прилежащ и срещулежащ."
          },
          {
            "kind": "h3",
            "text": "Какво е срещулежащата страна?"
          },
          {
            "kind": "p",
            "text": "Срещулежащата страна [[a]] лежи точно срещу ъгъл [[A]] и никога не докосва върха му. В практическите задачи тя често играе ролята на вертикалното издигане: височината на стена, денивелация или вертикалната съставка на измерване. Тя отива в знаменателя на формулата за котангенс, което означава, че увеличаването ѝ свива съотношението, а намаляването ѝ го разширява."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенузата?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата [[c]] е страната срещу правия ъгъл: във всяка диаграма тя е срещу малкия квадрат, отбелязващ ъгъла от [[90^\\circ]], и е строго по-дълга от всеки катет. Тя не играе никаква роля в основното котангенс съотношение, затова калкулаторът никога не я иска. Тя става съществена, когато в работата влязат синус, косинус, секанс или косеканс, или когато Питагоровата теорема се използва, за да се провери, че двата катета образуват истински правоъгълен триъгълник."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Правоъгълен триъгълник с ъгъл A долу вляво, златиста прилежаща страна b, зелена срещулежаща страна a, cot(A)=b/a",
            "caption": "Ъгъл A е долу вляво; котангенсът използва златистата прилежаща страна b и зелената срещулежаща страна a, а не хипотенузата c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Разбиране на котангенс съотношението",
        "blocks": [
          {
            "kind": "p",
            "text": "Котангенсът сравнява дължината до референтния ъгъл с дължината срещу него:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Тук [[\\cot(A)]] е котангенсът на ъгъл [[A]], [[b]] е прилежащата страна, а [[a]] е срещулежащата страна: колко пъти срещулежащата страна се побира в прилежащата."
          },
          {
            "kind": "h3",
            "text": "Котангенсът като реципрочна стойност на тангенса"
          },
          {
            "kind": "p",
            "text": "Тангенсът дели срещулежащата страна на прилежащата, [[\\tan(A)=a/b]]. Взимането на реципрочната стойност обръща тази дроб, [[1/\\tan(A)=b/a]], което е точно формулата за котангенс:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "При [[\\tan(A)=3/4=0.75]] реципрочната стойност е [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: същият триъгълник, описан от противоположната посока. Това разграничение е важно, защото [[\\tan^{-1}]] означава функцията обратен тангенс, докато [[1/\\tan(A)]] е реципрочният тангенс: свързани идеи, но с различно значение и различни отговори."
          },
          {
            "kind": "h3",
            "text": "Разбиране на котангенса като хоризонтално разстояние, делено на вертикално издигане"
          },
          {
            "kind": "p",
            "text": "Когато ъгъл [[A]] се измерва от хоризонталата, прилежащата страна може да представя хоризонталното разстояние, а срещулежащата, вертикалното издигане. Тогава [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. Тангенсът дава същата връзка обърната: издигане, делено на разстояние. Това прочитане на разстояние върху издигане прави котангенса естественото съотношение за въпроси като колко хоризонтално разстояние покрива колко височина, и то зависи от избрания референтен ъгъл и геометрията на ситуацията."
          },
          {
            "kind": "h3",
            "text": "Какво означава стойност на котангенс?"
          },
          {
            "kind": "p",
            "text": "Котангенс по-голям от 1 означава, че прилежащата страна е по-дълга от срещулежащата, а референтният ъгъл е по-малък от [[45^\\circ]]. Котангенс равен на 1 означава, че двата катета са равни и ъгъл [[A]] е точно [[45^\\circ]]. Котангенс между 0 и 1 означава, че срещулежащата страна е по-дълга от прилежащата, а референтният ъгъл е между [[45^\\circ]] и [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Защо котангенсът може да е по-голям от 1"
          },
          {
            "kind": "p",
            "text": "За разлика от синуса и косинуса, котангенсът няма таван от 0 до 1, защото хипотенузата никога не участва в делението. При [[\\cot(A)=8/2=4]] прилежащата страна е просто четири пъти срещулежащата, а референтният ъгъл е сравнително малък остър ъгъл. Всяка положителна крайна стойност е възможна."
          },
          {
            "kind": "h3",
            "text": "Защо котангенсът може да е по-малък от 1"
          },
          {
            "kind": "p",
            "text": "При [[\\cot(A)=3/6=0.5]] прилежащата страна е половината от срещулежащата, така че референтният ъгъл е сравнително голям остър ъгъл. Съотношението пада под 1, без нищо да е сгрешено: това е просто белегът на по-висок и по-тесен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Защо котангенсът е безразмерно съотношение"
          },
          {
            "kind": "p",
            "text": "Делението на една дължина на друга съкращава мерните единици: [[4\\text{ m}/3\\text{ m}=4/3]], а също и [[400\\text{ cm}/300\\text{ cm}=4/3]]. Числото описва формата на триъгълника, а не измерване с физически единици, затова запишете резултата като обикновено число, никога с метри, сантиметри или градуси."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Три етапа: означен триъгълник 3-4-5, тангенс tan(A)=3/4=0.75, котангенс cot(A)=4/3=1.3333, реципрочната връзка",
            "caption": "Три етапа: означете триъгълника 3-4-5, изчислете тангенса tan(A) = 3/4, после обърнете дробта, за да получите cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Как работи формулата за котангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Започнете от определението: котангенсът е прилежащата страна, делена на срещулежащата. В означенията на тази страница:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]]"
          },
          {
            "kind": "p",
            "text": "Прилежащата страна е числителят, защото е дължината, която се сравнява; срещулежащата страна е знаменателят, защото е референтната дължина, единицата колко от тези се побират в онази. Размяната им дава вместо това тангенс съотношението."
          },
          {
            "kind": "h3",
            "text": "Напълно разработен пример: правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Стъпка 1: Запишете формулата. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 2: Заместете измерванията. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 3: Разделете. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 4: Тълкувайте отговора. Прилежащата страна е около 1.3333 пъти срещулежащата."
          },
          {
            "kind": "p",
            "text": "Стъпка 5: Проверете с тангенс съотношението. [[\\tan(A)=3/4=0.75]] и [[1/0.75\\approx1.3333]]. И двата пътя стигат до едно и също число, което е точно как се държат реципрочните съотношения."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Как да използвате калкулатора за котангенс съотношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Ръководството по-долу съответства на действителния интерфейс на тази страница."
          }
        ],
        "steps": [
          "<strong>Определете референтния ъгъл [[A]],</strong> тъй като прилежащата и срещулежащата страна се дефинират спрямо него.",
          "<strong>Намерете прилежащата страна [[b]]:</strong> катетът, докосващ ъгъл [[A]], който не е хипотенузата.",
          "<strong>Намерете срещулежащата страна [[a]]:</strong> катетът точно срещу ъгъл [[A]], който никога не докосва върха му.",
          "<strong>Измерете или получете двете дължини на страните</strong> в една и съща мерна единица.",
          "<strong>Въведете дължината на прилежащата страна</strong> в първото поле за въвеждане.",
          "<strong>Въведете дължината на срещулежащата страна</strong> във второто поле за въвеждане.",
          "<strong>Изберете съвпадащи единици с избирачите на единици,</strong> така че делението да сравнява еднородни величини.",
          "<strong>Потвърдете, че и двете измервания са положителни;</strong> нулеви или отрицателни дължини не могат да образуват истински триъгълник.",
          "<strong>Щракнете Calculate cot(A),</strong> за да разделите прилежащата страна на срещулежащата.",
          "<strong>Прочетете котангенс съотношението:</strong> прилежащата страна, изразена като кратно на срещулежащата.",
          "<strong>Изтълкувайте резултата:</strong> по-голям от 1 означава по-дълга прилежаща страна, равен на 1 означава равни катети, по-малък от 1 означава по-дълга срещулежаща страна.",
          "<strong>Използвайте Reset,</strong> за да изчистите въведеното и да започнете отначало."
        ],
        "closingParagraphs": [
          "Калкулаторът не иска нито хипотенуза, нито ъгъл в градуси: две положителни дължини на страни са пълният вход, а резултатът винаги е положително безразмерно число."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Примери стъпка по стъпка за изчисляване на котангенс",
        "blocks": [
          {
            "kind": "p",
            "text": "Всеки пример следва един и същ модел: запишете формулата, заместете, разделете, изтълкувайте."
          },
          {
            "kind": "h3",
            "text": "Пример 1: Правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Прилежащата страна е около 1.3333 пъти срещулежащата; хипотенузата изобщо не участва в изчислението."
          },
          {
            "kind": "h3",
            "text": "Пример 2: Правоъгълен триъгълник 5-12-13"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Съотношението е по-голямо от 1, защото прилежащата страна е по-дългият катет; то ни казва, че прилежащата страна е 2.4 пъти срещулежащата, а не колко голям е триъгълникът."
          },
          {
            "kind": "h3",
            "text": "Пример 3: Равнобедрен правоъгълен триъгълник"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Равните катети дават съотношение точно 1, което е белегът на референтен ъгъл [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Пример 4: Триъгълник с по-малка прилежаща страна"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=6\\text{ m}]] и [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Резултатът е по-малък от 1, защото срещулежащата страна е по-дългият катет, така че референтният ъгъл е по-голям от [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Примери от реалния живот за използване на котангенс съотношението",
        "blocks": [
          {
            "kind": "p",
            "text": "Котангенсът е математическо съотношение, а не физическа величина с мерни единици. Практическата му стойност е в сравняването на хоризонталното разстояние с вертикалното издигане, проверката на геометрията на триъгълника и използването на формули, които изрично изискват прилежаща, делена на срещулежаща. Всеки пример приема опростен правоъгълен триъгълник и нито едно от тези съотношения само по себе си не решава въпроси за безопасност, якост или съответствие с норми."
          },
          {
            "kind": "h3",
            "text": "Пример 5: Намиране на съотношението разстояние към издигане на стълба"
          },
          {
            "kind": "p",
            "text": "Стълба е опряна на вертикална стена. Основата ѝ е на 3 м от стената, а достига 4 м нагоре по стената. Хоризонталното разстояние е прилежащата страна [[b=3\\text{ m}]], вертикалният обхват е срещулежащата страна [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], значи [[\\boxed{\\cot(A)=0.75}]]: хоризонталното разстояние е 75 процента от вертикалната височина. Съотношението описва геометрията на стълбата; то не определя дали стълбата е поставена безопасно."
          },
          {
            "kind": "h3",
            "text": "Пример 6: Изчисляване на съотношението разстояние към издигане на покрив"
          },
          {
            "kind": "p",
            "text": "Покривна секция има хоризонтално разстояние 4 м и вертикално издигане 3 м. Тук [[b=4\\text{ m}]] и [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]: хоризонталното разстояние е около 1.3333 пъти вертикалното издигане. Това съотношение не е пълна конструктивна или нормативна оценка на покрива."
          },
          {
            "kind": "h3",
            "text": "Пример 7: Оценяване на котангенс съотношението на рампа"
          },
          {
            "kind": "p",
            "text": "Опростена рампа има хоризонтално разстояние 9 м и вертикално издигане 0.75 м. При [[b=9\\text{ m}]] и [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], значи [[\\boxed{\\cot(A)=12}]]. Хоризонталното разстояние е 12 пъти вертикалното издигане, белегът на полегат наклон. Съотношението само по себе си не определя достъпност или съответствие със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 8: Геодезическо измерване"
          },
          {
            "kind": "p",
            "text": "Опростен геодезически триъгълник има хоризонтално разстояние 40 м и вертикална денивелация 30 м. При [[b=40\\text{ m}]] и [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]. Съотношението сравнява пряко хоризонталното разделяне с вертикалната разлика. Реалната геодезия може да изисква допълнителни измервания, корекции и инструментални процедури."
          },
          {
            "kind": "h3",
            "text": "Пример 9: Обтегач, поддържащ стълб"
          },
          {
            "kind": "p",
            "text": "Обтегач свързва стълб със земна котва. Котвата е на 12 м хоризонтално от стълба, а точката на закрепване е на 5 м над земята. При [[b=12\\text{ m}]] и [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], значи [[\\boxed{\\cot(A)=2.4}]]. Хоризонталното разстояние е 2.4 пъти вертикалното разделяне. Това съотношение не установява опъването на въжето, якостта на котвата или конструктивната безопасност."
          },
          {
            "kind": "h3",
            "text": "Пример 10: Разбиране на съотношението разстояние към издигане на стълбище"
          },
          {
            "kind": "p",
            "text": "Опростено стълбище има хоризонтално разстояние 4 м и вертикално издигане 3 м. При [[b=4\\text{ m}]] и [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]. Хоризонталното разстояние е около 1.3333 пъти вертикалното издигане. Примерът описва идеализиран диагонал и не проверява размерите на стълбището или съответствието с норми."
          },
          {
            "kind": "h3",
            "text": "Пример 11: Хоризонталната и вертикалната съставка на стрела на кран"
          },
          {
            "kind": "p",
            "text": "Опростена стрела на кран образува правоъгълен триъгълник с хоризонтална проекция 6 м и вертикално издигане 8 м. При [[b=6\\text{ m}]] и [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], значи [[\\boxed{\\cot(A)=0.75}]]. Хоризонталната проекция е 75 процента от вертикалната съставка. Съотношението не установява товароподемност или безопасност при работа."
          },
          {
            "kind": "h3",
            "text": "Пример 12: Праволинеен полетен участък на самолет"
          },
          {
            "kind": "p",
            "text": "За опростен полетен участък самолет лети по прав път с хоризонтално преместване 4 км и вертикално издигане 3 км. При [[b=4\\text{ km}]] и [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]. Хоризонталното преместване е около 1.3333 пъти вертикалното издигане. Това е идеализиран геометричен модел, а не пълно навигационно изчисление."
          },
          {
            "kind": "h3",
            "text": "Пример 13: Диагонална механична подпора"
          },
          {
            "kind": "p",
            "text": "Диагонална подпора има хоризонтално отместване 1.2 м и вертикално издигане 1.6 м. При [[b=1.2\\text{ m}]] и [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], значи [[\\boxed{\\cot(A)=0.75}]]. Хоризонталното отместване е 75 процента от вертикалното издигане. Съотношението не определя якостта или пригодността на подпората."
          },
          {
            "kind": "h3",
            "text": "Пример 14: Прав участък от пешеходен маршрут"
          },
          {
            "kind": "p",
            "text": "Опростен прав участък от пешеходен маршрут има хоризонтално преместване 80 м и вертикално издигане 60 м. При [[b=80\\text{ m}]] и [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]. Хоризонталното преместване е около 1.3333 пъти издигането. Реалните пътеки могат да имат завои и променливи наклони."
          },
          {
            "kind": "h3",
            "text": "Пример 15: Подпора на тента"
          },
          {
            "kind": "p",
            "text": "Диагонална подпора на тента има хоризонтална проекция 2.4 м и вертикално издигане 1.8 м. При [[b=2.4\\text{ m}]] и [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], значи [[\\boxed{\\cot(A)\\approx1.3333}]]. Съотношението описва хоризонталната проекция спрямо вертикалното издигане. Това изчисление не установява конструктивна пригодност."
          },
          {
            "kind": "h3",
            "text": "Пример 16: Кабел между две различни височини"
          },
          {
            "kind": "p",
            "text": "Прав кабел преминава 24 м хоризонтално между две точки с вертикална разлика 7 м. При [[b=24\\text{ m}]] и [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], значи [[\\boxed{\\cot(A)\\approx3.4286}]]. Хоризонталното разделяне е около 3.4286 пъти вертикалната разлика. Моделът приема права линия между крайните точки."
          },
          {
            "kind": "h3",
            "text": "Сравнение на практическите примери"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Моделът важи навсякъде: съотношението е голямо, когато прилежащата страна многократно надвишава срещулежащата, и малко, когато срещулежащата доминира."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ситуация", "Прилежаща страна b", "Срещулежаща страна a", "Формула за котангенс", "Изчислено съотношение", "Тълкуване"],
            "rows": [
              ["Стълба", "3 m", "4 m", "3/4", "0.75", "Разстоянието е 75% от вертикалния обхват"],
              ["Покрив", "4 m", "3 m", "4/3", "1.3333", "Разстоянието е 1.3333 пъти издигането"],
              ["Рампа", "9 m", "0.75 m", "9/0.75", "12", "Разстоянието е 12 пъти издигането"],
              ["Геодезия", "40 m", "30 m", "40/30", "1.3333", "Разстоянието е 1.3333 пъти денивелацията"],
              ["Обтегач", "12 m", "5 m", "12/5", "2.4", "Разстоянието е 2.4 пъти височината"],
              ["Стълбище", "4 m", "3 m", "4/3", "1.3333", "Разстоянието е 1.3333 пъти издигането"],
              ["Стрела на кран", "6 m", "8 m", "6/8", "0.75", "Проекцията е 75% от издигането"],
              ["Полетен участък", "4 km", "3 km", "4/3", "1.3333", "Преместването е 1.3333 пъти издигането"],
              ["Подпора", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Отместването е 75% от издигането"],
              ["Пешеходен маршрут", "80 m", "60 m", "80/60", "1.3333", "Преместването е 1.3333 пъти издигането"],
              ["Подпора на тента", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "Проекцията е 1.3333 пъти издигането"],
              ["Кабел", "24 m", "7 m", "24/7", "3.4286", "Разделянето е 3.4286 пъти разликата във височината"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Четири панела: съотношение на стълба 0.75, покрив 1.3333, рампа 12, геодезия 1.3333, всеки с означен правоъгълен триъгълник",
            "caption": "Четири практически изчисления: стълба, покрив, рампа и геодезия, всяко със своя триъгълник, формула и съотношение."
          }
        ]
      },
      "cot-angle": {
        "h2": "Разбиране на връзката между котангенс и големината на ъгъла",
        "blocks": [
          {
            "kind": "p",
            "text": "Котангенсът намалява с растежа на острия ъгъл. Малък ъгъл държи прилежащата страна много по-дълга от срещулежащата, затова съотношението е голямо; когато ъгъл [[A]] се отваря към [[90^\\circ]], срещулежащата страна взема превес и съотношението спада към 0. Проверените референтни стойности по-долу показват модела:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Измерванията в таблицата са илюстративни: съотношенията, а не абсолютните дължини, определят ъглите. Съотношението расте безгранично, когато ъгълът се доближава до [[0^\\circ]], и се приближава до 0, когато ъгълът се доближава до [[90^\\circ]], оставайки положително и крайно за всеки валиден триъгълник.",
          "Калкулаторът не приема входен ъгъл; тези референтни стойности служат за ориентир и контролни стойности при проверка на резултат."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ъгъл A", "Прилежаща страна b", "Срещулежаща страна a", "Котангенс съотношение"],
            "rows": [
              ["30 градуса", "sqrt(3)", "1", "Приблизително 1.7321"],
              ["45 градуса", "1", "1", "1"],
              ["60 градуса", "1", "sqrt(3)", "Приблизително 0.5774"],
              ["75 градуса", "1", "Приблизително 3.7321", "Приблизително 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Три триъгълника при 30, 45, 60 градуса със стойности на котангенс 1.7321, 1, 0.5774; котангенсът намалява с растежа на ъгъла",
            "caption": "Когато ъгъл A расте, срещулежащата страна става по-голям дял от прилежащата, затова cot(A) намалява."
          }
        ]
      },
      "cot-recover": {
        "h2": "Как да намерите ъгъл, когато котангенсът е известен",
        "blocks": [
          {
            "kind": "p",
            "text": "Котангенс съотношението само по себе си не е ъгъл. Когато съотношението е известно, а ъгълът е нужен, обратната тригонометрия преодолява разликата. За положително котангенс съотношение в правоъгълен триъгълник вземете реципрочната стойност, за да възстановите тангенс съотношението, после приложете обратен тангенс:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Еквивалентно, тъй като [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Разработен пример"
          },
          {
            "kind": "p",
            "text": "Дадено [[\\cot(A)=4/3]]: реципрочната стойност е [[\\tan(A)=3/4]], значи [[A=\\tan^{-1}(3/4)]] и [[\\boxed{A\\approx36.87^\\circ}]]. Настройте научния калкулатор на режим градуси, преди да натиснете клавиша за обратен тангенс. Това е отделно изчисление на ъгъл; калкулаторът за котангенс съотношение на тази страница приема дължини на страни и връща съотношението, никога ъгъла."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Чести грешки при изчисляване на котангенс",
        "blocks": [],
        "steps": [
          "<strong>Обръщане на формулата на [[a/b]] вместо [[b/a]].</strong> Това изчислява тангенс. Поправка: сложете прилежащата страна отгоре.",
          "<strong>Бъркане на котангенс с тангенс.</strong> Отчитане на 0.75 за триъгълник 3-4-5. Поправка: тангенсът е срещулежаща върху прилежаща; котангенсът е обърнатата дроб.",
          "<strong>Бъркане на котангенс с косинус.</strong> Използване на [[b/c]]. Поправка: косинусът се нуждае от хипотенузата; котангенсът никога не я докосва.",
          "<strong>Използване на хипотенузата вместо един от двата катета.</strong> Изчисляване на [[b/c]] или [[c/a]]. Поправка: знаменателят е срещулежащият катет [[a]], а не [[c]].",
          "<strong>Разбъркване на прилежащата и срещулежащата страна.</strong> Избор на грешния катет. Поправка: проследете от ъгъл [[A]]: катетът, който го докосва, е прилежащ, а този срещу него е срещулежащ.",
          "<strong>Забравяне, че означенията на страните зависят от референтния ъгъл.</strong> Използване на означения, начертани за ъгъл [[B]]. Поправка: преозначавайте при всяка смяна на референтния ъгъл.",
          "<strong>Предполагане, че котангенсът трябва да е между 0 и 1.</strong> Третиране на 2.4 или 12 като грешки. Поправка: тези стойности са наред; само синусът и косинусът са ограничени до 1.",
          "<strong>Предполагане, че котангенс 1 означава невалиден триъгълник.</strong> Поправка: [[\\cot(A)=1]] просто означава равни катети и ъгъл [[45^\\circ]], напълно валиден триъгълник.",
          "<strong>Отчитане на съотношението с метри или сантиметри.</strong> Записване на 1.3333 m. Поправка: единиците вече са се съкратили, затова отчетете обикновено число.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Деление на нула или безсмислено отрицателно съотношение. Поправка: използвайте само положителни дължини.",
          "<strong>Смесване на мерни единици.</strong> Метри, делени на сантиметри, изкривяват съотношението със 100. Поправка: първо превърнете двете страни в една единица.",
          "<strong>Твърде ранно закръгляване.</strong> Закръглянето на [[4/3]] до 1.33 преди проверка добавя избежима грешка. Поправка: пазете допълнителни цифри до последната стъпка.",
          "<strong>Предполагане, че котангенсът е ъгъл в градуси.</strong> Четене на 1.3333 като 1.3333 градуса. Поправка: това е съотношение; ъгълът се нуждае от обратен тангенс.",
          "<strong>Бъркане на реципрочен тангенс с обратен тангенс.</strong> Записване на [[1/\\tan(A)]], когато е нужно [[\\tan^{-1}(a/b)]], или обратното. Поправка: реципрочната стойност обръща дробта; обратната възстановява ъгъла.",
          "<strong>Предполагане, че стойността на котангенса определя размера на триъгълника.</strong> Два много различни триъгълника могат да споделят [[\\cot(A)=1.3333]]. Поправка: съотношението фиксира формата, а не мащаба."
        ],
        "closingParagraphs": [
          "<strong>Грешно срещу вярно</strong>",
          "Дадено [[b=4]] и [[a=3]]:",
          "Грешно: [[3/4=0.75]]. Това е тангенс съотношението, а не котангенс.",
          "Вярно: [[\\cot(A)=4/3\\approx1.3333]]. Проверка: [[\\tan(A)=3/4=0.75]] и [[1/0.75\\approx1.3333]], което потвърждава реципрочната връзка."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Как да проверите дали резултатът ви за котангенс е валиден",
        "blocks": [
          {
            "kind": "p",
            "text": "Валидният, неизроден правоъгълен триъгълник изисква положителни катети, [[a \\gt 0]] и [[b \\gt 0]], затова резултатът за котангенс трябва да е положително крайно число:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "И двете измервания трябва да използват съвместими единици. Резултат по-голям от 1, равен на 1 или по-малък от 1, всички могат да са валидни; за разлика от синуса и косинуса, котангенсът не е ограничен до 1."
          },
          {
            "kind": "h3",
            "text": "Метод 1: Проверете реципрочната стойност на тангенса"
          },
          {
            "kind": "p",
            "text": "Проверете [[\\tan(A)=a/b]], после потвърдете [[\\cot(A)=1/\\tan(A)]]. При [[a=3]] и [[b=4]]: [[\\tan(A)=3/4=0.75]], значи [[\\cot(A)=1/0.75\\approx1.3333}]]. Несъответствие между двата пътя сигнализира обърната дроб или погрешно означена страна."
          },
          {
            "kind": "h3",
            "text": "Метод 2: Проверете Питагоровата теорема"
          },
          {
            "kind": "p",
            "text": "Ако хипотенузата е известна или нужна, изчислете [[c=\\sqrt{a^2+b^2}]]. При [[a=3]] и [[b=4]]: [[c=\\sqrt{9+16}=5]] и [[3^2+4^2=5^2]]. Това потвърждава, че дължините на страните образуват истински правоъгълен триъгълник. Хипотенузата тук е контролна стойност, а не част от основната формула за котангенс."
          },
          {
            "kind": "h3",
            "text": "Метод 3: Проверете ъгловата връзка"
          },
          {
            "kind": "p",
            "text": "За известно котангенс съотношение възстановете ъгъла с [[A=\\tan^{-1}(a/b)]]. При [[a=3]] и [[b=4]]: [[A\\approx36.87^\\circ]]. Тъй като прилежащата страна е по-дълга от срещулежащата, ъгълът трябва да попадне под [[45^\\circ]]; ако не стане така, означенията на страните вероятно са разменени. Малки разлики могат да дойдат от закръгляване."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Котангенс срещу тангенс, синус и косинус",
        "blocks": [
          {
            "kind": "p",
            "text": "Всяко съотношение сравнява различна двойка страни, използвайки същия референтен ъгъл и означения на страните:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Котангенсът и тангенсът са реципрочната двойка: [[\\cot(A)=1/\\tan(A)]]. Ако [[\\tan(A)=0.75]], тогава [[\\cot(A)\\approx1.3333}]]. Посегнете към котангенса, когато формула изисква прилежаща, делена на срещулежаща, когато работите със зависимости разстояние към издигане, или когато са известни само двата катета; посегнете към тангенса за издигане към разстояние, към синуса за срещулежащата страна срещу хипотенузата и към косинуса за прилежащата страна срещу хипотенузата.",
          "За съседните съотношения вижте <a href=\"/sine-ratio-calculator/\">калкулатора за синусово съотношение</a>, <a href=\"/cosine-ratio-calculator/\">калкулатора за косинусово съотношение</a>, <a href=\"/tangent-ratio-calculator/\">калкулатора за тангенсово съотношение</a>, <a href=\"/secant-ratio-calculator/\">калкулатора за секансово съотношение</a> и <a href=\"/cosecant-ratio-calculator/\">калкулатора за косекансово съотношение</a>."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Съотношение", "Формула", "Какво сравнява"],
            "rows": [
              ["Синус", "sin(A) = a/c", "Срещулежаща страна към хипотенуза"],
              ["Косинус", "cos(A) = b/c", "Прилежаща страна към хипотенуза"],
              ["Тангенс", "tan(A) = a/b", "Срещулежаща страна към прилежаща страна"],
              ["Котангенс", "cot(A) = b/a", "Прилежаща страна към срещулежаща страна"],
              ["Секанс", "sec(A) = c/b", "Хипотенуза към прилежаща страна"],
              ["Косеканс", "csc(A) = c/a", "Хипотенуза към срещулежаща страна"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Разгледайте свързаните тригонометрични калкулатори",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "Калкулатор за синусово съотношение",
            "desc": "Изчислете синусовото съотношение от срещулежащата страна и хипотенузата."
          },
          {
            "name": "Калкулатор за косинусово съотношение",
            "desc": "Изчислете косинусовото съотношение от прилежащата страна и хипотенузата."
          },
          {
            "name": "Калкулатор за тангенсово съотношение",
            "desc": "Изчислете тангенсовото съотношение от срещулежащата и прилежащата страна."
          },
          {
            "name": "Калкулатор за секансово съотношение",
            "desc": "Изчислете секансовото съотношение от хипотенузата и прилежащата страна."
          },
          {
            "name": "Калкулатор за косекансово съотношение",
            "desc": "Изчислете косекансовото съотношение от хипотенузата и срещулежащата страна."
          },
          {
            "name": "Калкулатор за ъгъл на правоъгълен триъгълник",
            "desc": "Намерете острите ъгли от дължините на страните."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Често задавани въпроси",
    "relatedHeading": "Разгледайте свързаните тригонометрични калкулатори",
    "faqs": [
      {
        "question": "Каква е формулата за котангенс на правоъгълен триъгълник?",
        "answer": "cot(A) = b / a: разделете прилежащата страна на ъгъл A на срещулежащата страна на ъгъл A. При прилежаща страна 4 см и срещулежаща страна 3 см резултатът е 4/3, около 1.3333."
      },
      {
        "question": "Как котангенсът е свързан с тангенса?",
        "answer": "Котангенсът е реципрочна стойност на тангенса: cot(A) = 1 / tan(A). Ако tan(A) = 3/4 = 0.75, тогава cot(A) = 4/3, около 1.3333. Двете съотношения описват един и същ триъгълник от обърнати гледни точки, а проверката с реципрочната стойност е най-бързият начин за проверка на резултат."
      },
      {
        "question": "Каква е разликата между котангенс и косинус?",
        "answer": "Котангенсът дели прилежащата страна на срещулежащата (b/a), използвайки само двата катета. Косинусът дели прилежащата страна на хипотенузата (b/c). Котангенсът е реципрочна стойност на тангенса, а не на косинуса; това разграничение е една от най-често изпитваните грешки в ранната тригонометрия."
      },
      {
        "question": "Може ли котангенсът да е по-голям от 1?",
        "answer": "Да. Котангенсът няма таван от 0 до 1, защото хипотенузата не участва. Когато прилежащата страна е по-дълга от срещулежащата, резултатът е над 1: за ъгъл от 30 градуса cot(30 deg) е около 1.7321. Стойности 2.4, 12 или всяко положително крайно число са възможни."
      },
      {
        "question": "Какво означава стойност на котангенс 1?",
        "answer": "Прилежащата и срещулежащата страна са равни по дължина, така че триъгълникът е равнобедрен при референтния ъгъл, а ъгъл A е 45 градуса. Прилежаща страна 6 см и срещулежаща страна 6 см дават cot(A) = 6/6 = 1."
      },
      {
        "question": "Може ли котангенсът да е по-малък от 1?",
        "answer": "Да, винаги когато срещулежащата страна е по-дълга от прилежащата. Прилежаща страна 6 м и срещулежаща страна 8 м дават cot(A) = 6/8 = 0.75, а референтният ъгъл тогава е по-голям от 45 градуса."
      },
      {
        "question": "Има ли котангенсът мерни единици?",
        "answer": "Не. И двата входа са дължини, измерени в една и съща единица, затова единиците се съкращават: 4 m / 3 m = 4/3, точно както 400 cm / 300 cm = 4/3. Отчитайте котангенса като обикновено безразмерно число, никога с градуси, метри или футове."
      },
      {
        "question": "Как да изчисля котангенс от дължини на страни?",
        "answer": "Измерете прилежащата страна b и срещулежащата страна a в една и съща единица, потвърдете, че и двете са положителни, после разделете: cot(A) = b / a. На тази страница въведете прилежащата страна в първото поле, а срещулежащата във второто, изберете съвместими единици и щракнете Calculate cot(A)."
      },
      {
        "question": "Как да намеря ъгъл от котангенс съотношение?",
        "answer": "Вземете реципрочната стойност, за да получите тангенс съотношението, после приложете обратен тангенс: A = tan^-1(a / b). За cot(A) = 4/3 тангенс съотношението е 3/4, значи A = tan^-1(0.75), около 36.87 градуса. Първо настройте научния калкулатор на режим градуси. Калкулаторът на тази страница връща съотношението, а не ъгъла."
      },
      {
        "question": "Нуждае ли се калкулаторът за котангенс от хипотенузата?",
        "answer": "Не. Основното котангенс съотношение използва само двете перпендикулярни страни, затова хипотенузата никога не влиза във формулата. Тя става съществена само за последваща работа със синус, косинус, секанс или косеканс, или когато Питагоровата теорема се използва за проверка на триъгълника."
      },
      {
        "question": "Какво означава котангенсът в термини на разстояние и издигане?",
        "answer": "Когато ъгъл A се измерва от хоризонталата, cot(A) е хоризонталното разстояние, делено на вертикалното издигане. Котангенс 0.75 означава, че хоризонталното разстояние е 75 процента от вертикалното издигане; котангенс 12 означава, че разстоянието е дванадесет пъти издигането. Тангенсът е същата идея обърната: издигане, делено на разстояние."
      },
      {
        "question": "Кога да използвам котангенс вместо тангенс?",
        "answer": "Използвайте котангенс, когато формула или процедура изрично изисква прилежаща, делена на срещулежаща, когато сравнявате хоризонтално разстояние с вертикално издигане, или когато известните страни са двата катета. Ако известната зависимост е издигане върху разстояние или срещулежаща върху прилежаща, тангенсът е прекият избор."
      }
    ],
    "conclusion": {
      "h2": "Използвайте котангенс съотношението с увереност",
      "paragraphs": [
        "Котангенсът е обърнатата форма на тангенса: разделете прилежащата страна на срещулежащата и сте описали формата разстояние към издигане на триъгълника. Формулата [[\\cot(A)=b/a]] се нуждае само от две измервания, отговорът винаги е положително безразмерно число и може да е над, на или под 1 в зависимост от това кой катет е по-дълъг. Когато самият ъгъл е нужен, [[A=\\tan^{-1}(a/b)]] го възстановява. Стълба, покрив, рампа или учебникарският 3-4-5, методът никога не се променя: определете прилежащата страна, определете срещулежащата страна, разделете и проверете с реципрочната стойност на тангенса."
      ]
    }
  },
"tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "cot-intro": "Kotanjant Oranı Hesaplayıcı Nedir?",
      "cot-triangle": "Komşu Kenarı ve Karşı Kenarı Anlama",
      "cot-whatis": "Kotanjant Oranını Anlama",
      "cot-formula": "Kotanjant Formülü Nasıl Çalışır",
      "cot-howto": "Kotanjant Oranı Hesaplayıcı Nasıl Kullanılır",
      "cot-examples": "Kotanjant Hesaplamanın Adım Adım Örnekleri",
      "cot-applications": "Kotanjant Oranının Gerçek Hayattan Örnekleri",
      "cot-angle": "Kotanjant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
      "cot-recover": "Kotanjant Bilindiğinde Açı Nasıl Bulunur",
      "cot-mistakes": "Kotanjant Hesaplarken Yapılan Yaygın Hatalar",
      "cot-verify": "Kotanjant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
      "cot-vs": "Kotanjant ile Tanjant, Sinüs ve Kosinüs",
      "cot-related": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
      "cot-faq": "Sık Sorulan Sorular"
    },
    "sections": {
      "cot-intro": {
        "h2": "Kotanjant Oranı Hesaplayıcı Nedir?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotanjant oranı hesaplayıcı tek bir soruyu yanıtlar: bir dik üçgende dar bir açı için, açının yanındaki kenar karşısındaki kenarla nasıl karşılaştırılır? İki kenar uzunluğunu girin; araç komşu kenarı karşı kenara böler ve [[\\cot(A)=b/a]] sonucunu döndürür. Komşu kenar 4 cm ve karşı kenar 3 cm olduğunda hesap [[4/3\\approx1.3333]] olur: komşu kenar, karşı kenarın yaklaşık 1.3333 katı uzunluktadır. Bu ondalık sayı tam cevaptır. Bölmede santimetreler sadeleştiği için birimi yoktur ve derece cinsinden bir açı değildir. Hipotenüs bu hesaba hiç girmez; birbirine dik iki kenar yeterlidir. Kotanjant aynı zamanda tanjantın tersidir, bu yüzden birçok ders kitabı onu [[\\tan(A)]]'nin çevrilmiş biçimi olarak tanıtır."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Komşu Kenarı ve Karşı Kenarı Anlama",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Bir dik üçgenin bir açısı tam olarak [[90^\\circ]]'dir; bu, birbirine dik iki doğru arasındaki açıdır, tıpkı düz bir zeminle buluşan bir duvar gibi. Hipotenüs, bu dik açının karşısında yer alır ve her zaman en uzun kenardır. Diğer iki açı, kalan 90 dereceyi paylaşır, dolayısıyla ikisi de dardır. İki kenar dik açıda birleşir, birbirine diktir ve kotanjantın anlattığı ilişki onların ilişkisidir."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Komşu kenar [[b]], hipotenüs olmadan referans açı [[A]]'ye değen kenardır. Uygulamalı problemlerde genellikle yatay uzaklık rolünü üstlenir: merdiven tabanının zemindeki uzaklığı, bir çatının yatay izdüşümü veya bir kuvvetin yatay bileşeni. Kotanjant formülünün payına yazılır. Hangi kenarın komşu sayıldığı, seçilen referans açıya bağlıdır; bu yüzden [[A]] açısından [[B]] açısına geçmek, komşu ve karşı etiketlerini değiştirir."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Karşı kenar [[a]], [[A]] açısının tam karşısında durur ve köşesine hiç değmez. Uygulamalı problemlerde genellikle düşey yükseklik rolünü üstlenir: bir duvarın yüksekliği, bir kot farkı veya bir ölçümün düşey bileşeni. Kotanjant formülünün paydasına yazılır; bu da onu büyütmenin oranı küçülttüğü, küçültmenin ise büyüttüğü anlamına gelir."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs [[c]], dik açının karşısındaki kenardır: her çizimde [[90^\\circ]] köşesini işaretleyen küçük karenin karşısında durur ve iki kenardan da kesinlikle uzundur. Temel kotanjant oranında rolü yoktur; bu yüzden hesaplayıcı onu hiç istemez. Sinüs, kosinüs, sekant veya kosekant işin içine girdiğinde ya da Pisagor teoremiyle iki kenarın gerçek bir dik üçgen oluşturduğu doğrulandığında önem kazanır."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "A açısı sol altta olan dik üçgen: altın renkli komşu kenar b, yeşil karşı kenar a, cot(A)=b/a",
            "caption": "A açısı sol altta yer alır; kotanjant, c hipotenüsünü değil, altın renkli komşu kenar b ile yeşil karşı kenar a'yı kullanır."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Kotanjant Oranını Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotanjant, referans açının yanındaki uzunluğu karşısındaki uzunlukla karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Burada [[\\cot(A)]], [[A]] açısının kotanjantıdır; [[b]] komşu kenar, [[a]] ise karşı kenardır: karşı kenarın komşu kenara kaç kez sığdığını gösterir."
          },
          {
            "kind": "h3",
            "text": "Kotanjant: Tanjantın Tersi"
          },
          {
            "kind": "p",
            "text": "Tanjant, karşı kenarı komşu kenara böler: [[\\tan(A)=a/b]]. Tersi alındığında bu kesir çevrilir: [[1/\\tan(A)=b/a]] ve bu tam olarak kotanjant formülüdür:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=3/4=0.75]] olduğunda tersi [[\\cot(A)=1/0.75=4/3\\approx1.3333]] olur: aynı üçgen, ters yönden anlatılmış hali. Bu ayrım önemlidir çünkü [[\\tan^{-1}]] ters tanjant fonksiyonunu gösterirken [[1/\\tan(A)]] karşılıklı tanjanttır: ilişkili kavramlar, farklı anlamlar, farklı cevaplar."
          },
          {
            "kind": "h3",
            "text": "Kotanjantı Yatay Uzaklık Bölü Düşey Yükseklik Olarak Anlama"
          },
          {
            "kind": "p",
            "text": "[[A]] açısı yataydan ölçüldüğünde, komşu kenar yatay uzaklığı, karşı kenar da düşey yüksekliği temsil edebilir. O zaman [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]] olur. Tanjant aynı ilişkiyi ters verir: yükseklik bölü uzaklık. Uzaklık bölü yükseklik şeklindeki bu okuma, kotanjantı 'ne kadar yatay uzaklık ne kadar yüksekliği karşılar?' gibi soruların doğal oranı yapar; seçilen referans açıya ve durumun geometrisine bağlıdır."
          },
          {
            "kind": "h3",
            "text": "Kotanjant Değeri Ne Anlama Gelir?"
          },
          {
            "kind": "p",
            "text": "1'den büyük bir kotanjant, komşu kenarın karşı kenardan uzun olduğu ve referans açının [[45^\\circ]]'den küçük olduğu anlamına gelir. 1'e eşit kotanjant, iki kenarın eşit olduğu ve [[A]] açısının tam [[45^\\circ]] olduğu anlamına gelir. 0 ile 1 arasındaki kotanjant, karşı kenarın komşu kenardan uzun olduğu ve referans açının [[45^\\circ]] ile [[90^\\circ]] arasında kaldığı anlamına gelir."
          },
          {
            "kind": "h3",
            "text": "Kotanjant Neden 1'den Büyük Olabilir"
          },
          {
            "kind": "p",
            "text": "Sinüs ve kosinüsten farklı olarak kotanjantın 0 ile 1 arasında bir tavanı yoktur çünkü bölmeye hipotenüs girmez. [[\\cot(A)=8/2=4]] için komşu kenar, karşı kenarın dört katıdır ve referans açı göreli olarak küçük bir dar açıdır. Her pozitif sonlu değer mümkündür."
          },
          {
            "kind": "h3",
            "text": "Kotanjant Neden 1'den Küçük Olabilir"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=3/6=0.5]] için komşu kenar, karşı kenarın yarısıdır; dolayısıyla referans açı göreli olarak büyük bir dar açıdır. Oranın 1'in altına düşmesinde yanlış bir şey yoktur: bu yalnızca daha uzun, daha dar bir üçgenin imzasıdır."
          },
          {
            "kind": "h3",
            "text": "Kotanjant Neden Birimsiz Bir Orandır"
          },
          {
            "kind": "p",
            "text": "Bir uzunluğun diğerine bölünmesi birimleri sadeleştirir: [[4\\text{ m}/3\\text{ m}=4/3]] ve aynı şekilde [[400\\text{ cm}/300\\text{ cm}=4/3]]. Bu sayı, fiziksel birim taşıyan bir ölçüm değil, üçgenin biçimini anlatır; bu yüzden sonucu metre, santimetre ya da derece eklemeden yalın bir sayı olarak yazın."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Üç aşama: etiketli 3-4-5 üçgeni, tanjant tan(A)=3/4=0.75, kotanjant cot(A)=4/3=1.3333, karşılıklı ilişki",
            "caption": "Üç aşama: 3-4-5 üçgenini etiketleyin, tanjantı tan(A) = 3/4 hesaplayın, sonra kesri çevirip cot(A) = 4/3 elde edin."
          }
        ]
      },
      "cot-formula": {
        "h2": "Kotanjant Formülü Nasıl Çalışır",
        "blocks": [
          {
            "kind": "p",
            "text": "Tanımdan başlayın: kotanjant, komşu kenarın karşı kenara bölümüdür. Bu sayfadaki gösterimle:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "Komşu kenar paydır çünkü karşılaştırılan uzunluktur; karşı kenar paydadır çünkü referans uzunluktur, yani 'bunlardan kaç tanesi şuna sığar' birimidir. İkisini yer değiştirmek tanjant oranını verir."
          },
          {
            "kind": "h3",
            "text": "Tam Çözümlü Örnek: 3-4-5 Dik Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen: [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Adım 1: Formülü yazın. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Adım 2: Ölçüleri yerine koyun. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Adım 3: Bölün. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Adım 4: Cevabı yorumlayın. Komşu kenar, karşı kenarın yaklaşık 1.3333 katıdır."
          },
          {
            "kind": "p",
            "text": "Adım 5: Tanjant oranıyla doğrulayın. [[\\tan(A)=3/4=0.75]] ve [[1/0.75\\approx1.3333]]. İki yol da aynı sayıya ulaşır; karşılıklı oranlar tam olarak böyle davranır."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Kotanjant Oranı Hesaplayıcı Nasıl Kullanılır",
        "blocks": [
          {
            "kind": "p",
            "text": "Aşağıdaki açıklama bu sayfadaki gerçek arayüzle birebir uyumludur."
          }
        ],
        "steps": [
          "<strong>Referans açı [[A]]'yi belirleyin;</strong> komşu ve karşı kenarlar ona göre tanımlanır.",
          "<strong>Komşu kenar [[b]]'yi bulun:</strong> [[A]] açısına değen, hipotenüs olmayan kenar.",
          "<strong>Karşı kenar [[a]]'yi bulun:</strong> [[A]] açısının tam karşısındaki, köşesine hiç değmeyen kenar.",
          "<strong>Her iki kenar uzunluğunu da ölçün ya da elde edin;</strong> ikisi de aynı birimde olmalı.",
          "<strong>Komşu kenar uzunluğunu</strong> ilk giriş alanına girin.",
          "<strong>Karşı kenar uzunluğunu</strong> ikinci giriş alanına girin.",
          "<strong>Birim seçicilerle eşleşen birimler seçin</strong> ki bölme benzerleri karşılaştırsın.",
          "<strong>Her iki ölçümün de pozitif olduğunu doğrulayın;</strong> sıfır ya da negatif uzunluklar gerçek bir üçgen oluşturamaz.",
          "<strong>Komşu kenarı karşı kenara bölmek için Hesapla cot(A) düğmesine tıklayın.</strong>",
          "<strong>Kotanjant oranını okuyun:</strong> komşu kenarın, karşı kenarın katı olarak ifadesi.",
          "<strong>Sonucu yorumlayın:</strong> 1'den büyükse daha uzun komşu kenar, 1'e eşitse eşit kenarlar, 1'den küçükse daha uzun karşı kenar demektir.",
          "<strong>Girdileri temizleyip baştan başlamak için Sıfırla'yı kullanın.</strong>"
        ],
        "closingParagraphs": [
          "Hesaplayıcı ne hipotenüs ne de derece cinsinden açı ister: iki pozitif kenar uzunluğu eksiksiz girdidir ve sonuç her zaman pozitif, birimsiz bir sayıdır."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Kotanjant Hesaplamanın Adım Adım Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Her örnek aynı kalıbı izler: formülü yazın, yerine koyun, bölün, yorumlayın."
          },
          {
            "kind": "h3",
            "text": "Örnek 1: 3-4-5 Dik Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen: [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Komşu kenar, karşı kenarın yaklaşık 1.3333 katıdır; hipotenüs hesaplamanın tamamen dışındadır."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: 5-12-13 Dik Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen: [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Oran 1'den büyüktür çünkü komşu kenar uzun kenardır; bize üçgenin ne kadar büyük olduğunu değil, komşu kenarın karşı kenarın 2.4 katı olduğunu söyler."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: İkizkenar Dik Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen: [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Eşit kenarlar tam 1 oranını verir; bu, [[45^\\circ]] referans açının imzasıdır."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: Daha Kısa Komşu Kenarlı Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen: [[b=6\\text{ m}]] ve [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Sonuç 1'den küçüktür çünkü karşı kenar uzun kenardır; dolayısıyla referans açı [[45^\\circ]]'den büyüktür."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Kotanjant Oranının Gerçek Hayattan Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotanjant, birimi olan fiziksel bir büyüklük değil, matematiksel bir orandır. Pratik değeri, yatay uzaklığı düşey yükseklikle karşılaştırmakta, üçgen geometrisini denetlemekte ve komşu bölü karşı isteyen formülleri kullanmaktadır. Her örnek basitleştirilmiş bir dik üçgen varsayar ve bu oranların hiçbiri tek başına güvenlik, dayanım ya da yönetmelik uygunluğu sorularını çözmez."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: Merdivenin Uzaklık/Yükseklik Oranını Bulma"
          },
          {
            "kind": "p",
            "text": "Bir merdiven düşey bir duvara yaslanıyor. Tabanı duvardan 3 m uzakta ve duvarda 4 m yüksekliğe ulaşıyor. Yatay uzaklık komşu kenar [[b=3\\text{ m}]], düşey ulaşım karşı kenar [[a=4\\text{ m}]]'tir. [[\\cot(A)=3/4]], yani [[\\boxed{\\cot(A)=0.75}]]: yatay uzaklık, düşey yüksekliğin %75'idir. Oran merdivenin geometrisini anlatır; merdivenin güvenli konumda olup olmadığını belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: Çatının Uzaklık/Yükseklik Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir çatı kesitinin yatay uzaklığı 4 m, düşey yüksekliği 3 m'dir. Burada [[b=4\\text{ m}]] ve [[a=3\\text{ m}]]'tir. [[\\cot(A)=4/3]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]: yatay uzaklık, düşey yüksekliğin yaklaşık 1.3333 katıdır. Bu oran, eksiksiz bir yapısal ya da çatı yönetmeliği değerlendirmesi değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: Rampanın Kotanjant Oranını Değerlendirme"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir rampanın yatay uzaklığı 9 m, düşey yüksekliği 0.75 m'dir. [[b=9\\text{ m}]] ve [[a=0.75\\text{ m}]] ile: [[\\cot(A)=9/0.75]], yani [[\\boxed{\\cot(A)=12}]]. Yatay uzaklık, düşey yüksekliğin 12 katıdır; bu, yumuşak bir eğimin imzasıdır. Oran tek başına erişilebilirliği ya da yapı yönetmeliği uygunluğunu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: Bir Ölçüm Çalışması"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir ölçüm üçgeninin yatay uzaklığı 40 m, düşey kot farkı 30 m'dir. [[b=40\\text{ m}]] ve [[a=30\\text{ m}]] ile: [[\\cot(A)=40/30]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]. Oran, yatay ayrımı düşey farkla doğrudan karşılaştırır. Gerçek ölçüm çalışmaları ek ölçümler, düzeltmeler ve cihaz işlemleri gerektirebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: Direği Destekleyen Gergi Teli"
          },
          {
            "kind": "p",
            "text": "Bir gergi teli, direği zemin ankrajına bağlar. Ankraj, direktten yatay olarak 12 m uzakta ve bağlantı noktası zeminden 5 m yukarıdadır. [[b=12\\text{ m}]] ve [[a=5\\text{ m}]] ile: [[\\cot(A)=12/5]], yani [[\\boxed{\\cot(A)=2.4}]]. Yatay uzaklık, düşey ayrımın 2.4 katıdır. Bu oran, tel gerilimini, ankraj dayanımını ya da yapısal güvenliği belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: Basamakların Uzaklık/Yükseklik Oranını Anlama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir merdivenin yatay uzaklığı 4 m, düşey yüksekliği 3 m'dir. [[b=4\\text{ m}]] ve [[a=3\\text{ m}]] ile: [[\\cot(A)=4/3]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]. Yatay uzaklık, düşey yüksekliğin yaklaşık 1.3333 katıdır. Örnek, idealleştirilmiş bir köşegeni anlatır; merdiven ölçülerini ya da yönetmelik uygunluğunu doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: Vinç Bomunun Yatay ve Düşey Bileşenleri"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir vinç bomu, 6 m yatay izdüşüm ve 8 m düşey yükseklikle bir dik üçgen oluşturur. [[b=6\\text{ m}]] ve [[a=8\\text{ m}]] ile: [[\\cot(A)=6/8]], yani [[\\boxed{\\cot(A)=0.75}]]. Yatay izdüşüm, düşey bileşenin %75'idir. Oran, kaldırma kapasitesini ya da işletme güvenliğini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: Düz Bir Uçak Uçuş Kesimi"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir uçuş kesiminde uçak, 4 km yatay yer değiştirme ve 3 km düşey kazanımla düz bir yol izler. [[b=4\\text{ km}]] ve [[a=3\\text{ km}]] ile: [[\\cot(A)=4/3]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]. Yatay yer değiştirme, düşey kazanımın yaklaşık 1.3333 katıdır. Bu idealleştirilmiş bir geometrik modeldir, eksiksiz bir uçuş seyrüsefer hesabı değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: Köşegen Bir Mekanik Destek"
          },
          {
            "kind": "p",
            "text": "Köşegen bir desteğin yatay kayması 1.2 m, düşey yüksekliği 1.6 m'dir. [[b=1.2\\text{ m}]] ve [[a=1.6\\text{ m}]] ile: [[\\cot(A)=1.2/1.6]], yani [[\\boxed{\\cot(A)=0.75}]]. Yatay kayma, düşey yüksekliğin %75'idir. Oran, desteğin dayanımını ya da uygunluğunu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: Düz Bir Yürüyüş Kesimi"
          },
          {
            "kind": "p",
            "text": "Bir yürüyüş parkurunun basitleştirilmiş düz kesiminin yatay yer değiştirmesi 80 m, düşey kazanımı 60 m'dir. [[b=80\\text{ m}]] ve [[a=60\\text{ m}]] ile: [[\\cot(A)=80/60]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]. Yatay yer değiştirme, kot kazanımının yaklaşık 1.3333 katıdır. Gerçek patikalarda kıvrımlar ve değişen eğimler olabilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: Bir Tente Desteği"
          },
          {
            "kind": "p",
            "text": "Köşegen bir tente desteğinin yatay izdüşümü 2.4 m, düşey yüksekliği 1.8 m'dir. [[b=2.4\\text{ m}]] ve [[a=1.8\\text{ m}]] ile: [[\\cot(A)=2.4/1.8]], yani [[\\boxed{\\cot(A)\\approx1.3333}]]. Oran, yatay izdüşümü düşey yüksekliğe göre anlatır. Bu hesap yapısal uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: İki Farklı Yükseklik Arasında Gerilen Kablo"
          },
          {
            "kind": "p",
            "text": "Düz bir kablo, 7 m düşey ayrımı olan iki nokta arasında yatay olarak 24 m uzanır. [[b=24\\text{ m}]] ve [[a=7\\text{ m}]] ile: [[\\cot(A)=24/7]], yani [[\\boxed{\\cot(A)\\approx3.4286}]]. Yatay ayrım, düşey farkın yaklaşık 3.4286 katıdır. Model, uç noktalar arasında düz bir doğru varsayar."
          },
          {
            "kind": "h3",
            "text": "Pratik Örneklerin Karşılaştırılması"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Örüntü hep aynıdır: komşu kenar karşı kenarı gölgede bıraktığında oran büyük, karşı kenar baskın olduğunda küçük olur."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Durum", "Komşu kenar b", "Karşı kenar a", "Kotanjant formülü", "Hesaplanan oran", "Yorum"],
            "rows": [
              ["Merdiven", "3 m", "4 m", "3/4", "0.75", "Yatay uzaklık düşey yüksekliğin %75'i"],
              ["Çatı", "4 m", "3 m", "4/3", "1.3333", "Yatay uzaklık düşey yüksekliğin 1.3333 katı"],
              ["Rampa", "9 m", "0.75 m", "9/0.75", "12", "Yatay uzaklık düşey yüksekliğin 12 katı"],
              ["Ölçüm", "40 m", "30 m", "40/30", "1.3333", "Uzaklık kot farkının 1.3333 katı"],
              ["Gergi teli", "12 m", "5 m", "12/5", "2.4", "Uzaklık yüksekliğin 2.4 katı"],
              ["Basamaklar", "4 m", "3 m", "4/3", "1.3333", "Yatay uzaklık düşey yüksekliğin 1.3333 katı"],
              ["Vinç bomu", "6 m", "8 m", "6/8", "0.75", "Yatay izdüşüm düşey bileşenin %75'i"],
              ["Uçuş kesimi", "4 km", "3 km", "4/3", "1.3333", "Yatay yer değiştirme düşey kazanımın 1.3333 katı"],
              ["Destek", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Yatay kayma düşey yüksekliğin %75'i"],
              ["Yürüyüş parkuru", "80 m", "60 m", "80/60", "1.3333", "Yer değiştirme kot kazanımının 1.3333 katı"],
              ["Tente desteği", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "İzdüşüm düşey yüksekliğin 1.3333 katı"],
              ["Kablo", "24 m", "7 m", "24/7", "3.4286", "Ayrım yükseklik farkının 3.4286 katı"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Dört panel: merdiven oranı 0.75, çatı 1.3333, rampa 12, ölçüm 1.3333, her birinde etiketli dik üçgen",
            "caption": "Dört pratik hesap: merdiven, çatı, rampa ve ölçüm; her birinde üçgeni, formülü ve oranı var."
          }
        ]
      },
      "cot-angle": {
        "h2": "Kotanjant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotanjant, dar açı büyüdükçe küçülür. Küçük bir açı, komşu kenarı karşı kenardan çok daha uzun tutar; bu yüzden oran büyük olur. [[A]] açısı [[90^\\circ]]'ye doğru açıldıkça karşı kenar öne geçer ve oran 0'a doğru düşer. Aşağıdaki doğrulanmış referans değerler bu örüntüyü gösterir:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tablodaki ölçüler örnekseldir: açıları belirleyen mutlak uzunluklar değil oranlardır. Açı [[0^\\circ]]'ye yaklaştıkça oran sınırsız büyür, [[90^\\circ]]'ye yaklaştıkça 0'a yönelir ve her geçerli üçgen için pozitif ve sonlu kalır.",
          "Hesaplayıcı açı girdisi almaz; bu referans değerler, bir sonucu doğrularken yönlendirme ve denetim değerleri olarak kullanılır."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["A açısı", "Komşu kenar b", "Karşı kenar a", "Kotanjant oranı"],
            "rows": [
              ["30 derece", "sqrt(3)", "1", "Yaklaşık 1.7321"],
              ["45 derece", "1", "1", "1"],
              ["60 derece", "1", "sqrt(3)", "Yaklaşık 0.5774"],
              ["75 derece", "1", "Yaklaşık 3.7321", "Yaklaşık 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 derecede üç üçgen; kotanjant değerleri 1.7321, 1, 0.5774; açı büyüdükçe kotanjant küçülür",
            "caption": "A açısı büyüdükçe karşı kenar, komşu kenarın daha büyük bir payını oluşturur; bu yüzden cot(A) küçülür."
          }
        ]
      },
      "cot-recover": {
        "h2": "Kotanjant Bilindiğinde Açı Nasıl Bulunur",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotanjant oranı başlı başına bir açı değildir. Oran biliniyor ve açı gerekiyorsa, ters trigonometri arayı kapatır. Bir dik üçgende pozitif bir kotanjant oranı için, tanjant oranını geri kazanmak üzere tersini alın, ardından ters tanjant uygulayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Aynı şekilde, çünkü [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Çözümlü Örnek"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]] verildiğinde: tersi [[\\tan(A)=3/4]]'tür, yani [[A=\\tan^{-1}(3/4)]] ve [[\\boxed{A\\approx36.87^\\circ}]]. Ters tanjant tuşuna basmadan önce bilimsel hesap makinesini derece moduna alın. Bu ayrı bir açı hesabıdır; bu sayfadaki kotanjant oranı hesaplayıcı kenar uzunluklarını alır ve oranı döndürür, açıyı asla vermez."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Kotanjant Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [],
        "steps": [
          "<strong>Formülü [[b/a]] yerine [[a/b]] olarak ters çevirme.</strong> Bu tanjantı hesaplar. Düzeltme: komşu kenarı yukarı yazın.",
          "<strong>Kotanjantı tanjantla karıştırma.</strong> 3-4-5 üçgeni için 0.75 bildirme. Düzeltme: tanjant karşı bölü komşudur; kotanjant çevrilmiş kesirdir.",
          "<strong>Kotanjantı kosinüsle karıştırma.</strong> [[b/c]] kullanma. Düzeltme: kosinüs hipotenüs ister; kotanjant ona hiç dokunmaz.",
          "<strong>İki kenardan birinin yerine hipotenüsü kullanma.</strong> [[b/c]] veya [[c/a]] hesaplama. Düzeltme: payda karşı kenar [[a]]'dır, [[c]] değil.",
          "<strong>Komşu ve karşı kenarları karıştırma.</strong> Yanlış kenarı seçme. Düzeltme: [[A]] açısından izleyin: ona değen kenar komşudur, karşısındaki karşıdır.",
          "<strong>Kenar etiketlerinin referans açıya bağlı olduğunu unutma.</strong> [[B]] açısı için çizilmiş etiketleri kullanma. Düzeltme: referans açı her değiştiğinde yeniden etiketleyin.",
          "<strong>Kotanjantın 0 ile 1 arasında olması gerektiğini varsayma.</strong> 2.4 ya da 12'yi hata sanma. Düzeltme: bu değerler gayet normaldir; 1 ile sınırlı olan yalnızca sinüs ve kosinüstür.",
          "<strong>1'lik kotanjantın geçersiz bir üçgen demek olduğunu varsayma.</strong> Düzeltme: [[\\cot(A)=1]] yalnızca eşit kenarlar ve [[45^\\circ]] açı demektir; tamamen geçerli bir üçgendir.",
          "<strong>Oranı metre ya da santimetreyle bildirme.</strong> 1.3333 m yazma. Düzeltme: birimler zaten sadeleşti, o yüzden yalın bir sayı bildirin.",
          "<strong>Sıfır ya da negatif kenar uzunlukları girme.</strong> Sıfıra bölme ya da anlamsız negatif oran. Düzeltme: yalnızca pozitif uzunluklar kullanın.",
          "<strong>Ölçü birimlerini karıştırma.</strong> Metrenin santimetreye bölünmesi oranı 100 kat bozar. Düzeltme: önce her iki kenarı da tek birime çevirin.",
          "<strong>Çok erken yuvarlama.</strong> Doğrulamadan önce [[4/3]]'ü 1.33'e yuvarlamak önlenebilir bir hata ekler. Düzeltme: son adıma kadar fazladan basamak tutun.",
          "<strong>Kotanjantın derece cinsinden bir açı olduğunu varsayma.</strong> 1.3333'ü 1.3333 derece olarak okuma. Düzeltme: bu bir orandır; açı için ters tanjant gerekir.",
          "<strong>Karşılıklı tanjantı ters tanjantla karıştırma.</strong> [[\\tan^{-1}(a/b)]] gerektiğinde [[1/\\tan(A)]] yazma ya da tam tersi. Düzeltme: karşılıklı kesri çevirir; ters, açıyı geri kazandırır.",
          "<strong>Kotanjant değerinin üçgenin büyüklüğünü belirlediğini varsayma.</strong> Birbirinden çok farklı iki üçgen [[\\cot(A)=1.3333]] değerini paylaşabilir. Düzeltme: oran biçimi sabitler, ölçeği değil."
        ],
        "closingParagraphs": [
          "<strong>Yanlış ile Doğru</strong>",
          "Verilen: [[b=4]] ve [[a=3]]:",
          "Yanlış: [[3/4=0.75]]. Bu tanjant oranıdır, kotanjant değil.",
          "Doğru: [[\\cot(A)=4/3\\approx1.3333]]. Doğrulayın: [[\\tan(A)=3/4=0.75]] ve [[1/0.75\\approx1.3333]]; bu, karşılıklı ilişkiyi doğrular."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Kotanjant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "blocks": [
          {
            "kind": "p",
            "text": "Geçerli, bozulmamış bir dik üçgen pozitif kenarlar gerektirir: [[a \\gt 0]] ve [[b \\gt 0]]; bu yüzden kotanjant sonucu pozitif, sonlu bir sayı olmalıdır:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Her iki ölçüm de uyumlu birimlerde olmalıdır. 1'den büyük, 1'e eşit ya da 1'den küçük sonuçların hepsi geçerli olabilir; sinüs ve kosinüsün aksine kotanjant 1 ile sınırlı değildir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 1: Tanjantın Tersini Denetleyin"
          },
          {
            "kind": "p",
            "text": "[[\\tan(A)=a/b]]'yi doğrulayın, ardından [[\\cot(A)=1/\\tan(A)]]'yi onaylayın. [[a=3]] ve [[b=4]] ile: [[\\tan(A)=3/4=0.75]], yani [[\\cot(A)=1/0.75\\approx1.3333}]]. İki yol arasındaki uyumsuzluk, çevrilmiş bir kesrin ya da yanlış etiketlenmiş bir kenarın işaretidir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 2: Pisagor Teoremini Denetleyin"
          },
          {
            "kind": "p",
            "text": "Hipotenüs biliniyorsa ya da gerekiyorsa [[c=\\sqrt{a^2+b^2}]]'yi hesaplayın. [[a=3]] ve [[b=4]] için: [[c=\\sqrt{9+16}=5]] ve [[3^2+4^2=5^2]]. Bu, kenar uzunluklarının gerçek bir dik üçgen oluşturduğunu doğrular. Hipotenüs burada bir doğrulama değeridir, birincil kotanjant formülünün parçası değildir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 3: Açı İlişkisini Denetleyin"
          },
          {
            "kind": "p",
            "text": "Bilinen bir kotanjant oranı için açıyı [[A=\\tan^{-1}(a/b)]] ile geri kazanın. [[a=3]] ve [[b=4]] ile: [[A\\approx36.87^\\circ]]. Komşu kenar karşı kenardan uzun olduğu için açı [[45^\\circ]]'nin altında kalmalıdır; kalmazsa kenar etiketleri büyük olasılıkla yer değiştirmiştir. Yuvarlamadan küçük farklar doğabilir."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Kotanjant ile Tanjant, Sinüs ve Kosinüs",
        "blocks": [
          {
            "kind": "p",
            "text": "Her oran, aynı referans açı ve kenar etiketleri kullanılarak farklı bir kenar çiftini karşılaştırır:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kotanjant ile tanjant karşılıklı çifttir: [[\\cot(A)=1/\\tan(A)]]. [[\\tan(A)=0.75]] ise [[\\cot(A)\\approx1.3333}]] olur. Bir formül komşu bölü karşı istediğinde, uzaklık-yükseklik ilişkileriyle çalışırken ya da yalnızca iki kenar bilindiğinde kotanjantı seçin; yükseklik-uzaklık için tanjantı, hipotenüse karşı karşı kenar için sinüsü, hipotenüse karşı komşu kenar için kosinüsü seçin.",
          "Komşu oranlar için <a href=\"/sine-ratio-calculator/\">Sinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/cosine-ratio-calculator/\">Kosinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/tangent-ratio-calculator/\">Tanjant Oranı Hesaplayıcı</a>'ya, <a href=\"/secant-ratio-calculator/\">Sekant Oranı Hesaplayıcı</a>'ya ve <a href=\"/cosecant-ratio-calculator/\">Kosekant Oranı Hesaplayıcı</a>'ya bakın."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Oran", "Formül", "Karşılaştırma"],
            "rows": [
              ["Sinüs", "sin(A) = a/c", "Karşı kenarın hipotenüse oranı"],
              ["Kosinüs", "cos(A) = b/c", "Komşu kenarın hipotenüse oranı"],
              ["Tanjant", "tan(A) = a/b", "Karşı kenarın komşu kenara oranı"],
              ["Kotanjant", "cot(A) = b/a", "Komşu kenarın karşı kenara oranı"],
              ["Sekant", "sec(A) = c/b", "Hipotenüsün komşu kenara oranı"],
              ["Kosekant", "csc(A) = c/a", "Hipotenüsün karşı kenara oranı"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "Sinüs Oranı Hesaplayıcı",
            "desc": "Karşı kenar ve hipotenüsten sinüs oranını bulun."
          },
          {
            "name": "Kosinüs Oranı Hesaplayıcı",
            "desc": "Komşu kenar ve hipotenüsten kosinüs oranını bulun."
          },
          {
            "name": "Tanjant Oranı Hesaplayıcı",
            "desc": "Karşı ve komşu kenarlardan tanjant oranını bulun."
          },
          {
            "name": "Sekant Oranı Hesaplayıcı",
            "desc": "Hipotenüs ve komşu kenardan sekant oranını bulun."
          },
          {
            "name": "Kosekant Oranı Hesaplayıcı",
            "desc": "Hipotenüs ve karşı kenardan kosekant oranını bulun."
          },
          {
            "name": "Dik Üçgen Açı Hesaplayıcı",
            "desc": "Kenar uzunluklarından dar açıları bulun."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Sık Sorulan Sorular",
    "relatedHeading": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
    "faqs": [
      {
        "question": "Bir dik üçgende kotanjant formülü nedir?",
        "answer": "cot(A) = b / a: A açısının komşu kenarını A açısının karşı kenarına bölün. Komşu kenar 4 cm, karşı kenar 3 cm olduğunda sonuç 4/3, yaklaşık 1.3333 olur."
      },
      {
        "question": "Kotanjant ile tanjant nasıl ilişkilidir?",
        "answer": "Kotanjant, tanjantın tersidir: cot(A) = 1 / tan(A). tan(A) = 3/4 = 0.75 ise cot(A) = 4/3, yaklaşık 1.3333 olur. İki oran aynı üçgeni zıt bakış açılarından anlatır ve ters kontrol, bir sonucu doğrulamanın en hızlı yoludur."
      },
      {
        "question": "Kotanjant ile kosinüs arasındaki fark nedir?",
        "answer": "Kotanjant, komşu kenarı karşı kenara böler (b/a); yalnızca iki kenar kullanılır. Kosinüs, komşu kenarı hipotenüse böler (b/c). Kotanjant, tanjantın tersidir, kosinüsün değil; bu ayrım, erken trigonometride en çok test edilen hatalardan biridir."
      },
      {
        "question": "Kotanjant 1'den büyük olabilir mi?",
        "answer": "Evet. Kotanjantın 0 ile 1 arasında bir tavanı yoktur çünkü bölmeye hipotenüs girmez. Komşu kenar karşı kenardan uzun olduğunda sonuç 1'in üzerindedir: 30 derecelik bir açı için cot(30 deg) yaklaşık 1.7321'dir. 2.4, 12 ya da herhangi bir pozitif sonlu sayı mümkündür."
      },
      {
        "question": "1'lik bir kotanjant değeri ne anlama gelir?",
        "answer": "Komşu ve karşı kenarlar eşit uzunluktadır; bu yüzden üçgen referans açıda ikizkenardır ve A açısı 45 derecedir. 6 cm komşu kenar ve 6 cm karşı kenar, cot(A) = 6/6 = 1 verir."
      },
      {
        "question": "Kotanjant 1'den küçük olabilir mi?",
        "answer": "Evet, karşı kenar komşu kenardan uzun olduğunda her zaman. 6 m komşu kenar ve 8 m karşı kenar cot(A) = 6/8 = 0.75 verir ve referans açı o zaman 45 dereceden büyüktür."
      },
      {
        "question": "Kotanjantın ölçü birimi var mıdır?",
        "answer": "Hayır. Her iki girdi de aynı birimde uzunluk olduğu için birimler sadeleşir: 4 m / 3 m = 4/3, tıpkı 400 cm / 300 cm = 4/3 gibi. Kotanjantı derece, metre ya da fit eklemeden yalın birimsiz bir sayı olarak bildirin."
      },
      {
        "question": "Kotanjant kenar uzunluklarından nasıl hesaplanır?",
        "answer": "Komşu kenar b'yi ve karşı kenar a'yı aynı birimde ölçün, ikisinin de pozitif olduğunu doğrulayın, sonra bölün: cot(A) = b / a. Bu sayfada komşu kenarı ilk alana, karşı kenarı ikinci alana girin, uyumlu birimler seçin ve Hesapla cot(A) düğmesine tıklayın."
      },
      {
        "question": "Kotanjant oranından açı nasıl bulunur?",
        "answer": "Tanjant oranını elde etmek için tersini alın, ardından ters tanjant uygulayın: A = tan^-1(a / b). cot(A) = 4/3 için tanjant oranı 3/4'tür; yani A = tan^-1(0.75), yaklaşık 36.87 derecedir. Önce bilimsel hesap makinenizi derece moduna alın. Bu sayfanın hesaplayıcısı oranı döndürür, açıyı değil."
      },
      {
        "question": "Kotanjant hesaplayıcının hipotenüse ihtiyacı var mıdır?",
        "answer": "Hayır. Temel kotanjant oranı yalnızca birbirine dik iki kenarı kullanır; hipotenüs formüle hiç girmez. Hipotenüs ancak sinüs, kosinüs, sekant ya da kosekantla yapılacak sonraki çalışmalarda ya da üçgeni Pisagor teoremiyle doğrularken önem kazanır."
      },
      {
        "question": "Yatay uzaklık ve düşey yükseklik açısından kotanjant ne demektir?",
        "answer": "A açısı yataydan ölçüldüğünde cot(A), yatay uzaklığın düşey yüksekliğe bölümüdür. 0.75'lik bir kotanjant, yatay uzaklığın düşey yüksekliğin %75'i olduğu demektir; 12'lik bir kotanjant, uzaklığın yüksekliğin on iki katı olduğu demektir. Tanjant aynı fikrin tersidir: yükseklik bölü uzaklık."
      },
      {
        "question": "Tanjant yerine kotanjant ne zaman kullanılmalıdır?",
        "answer": "Bir formül ya da işlem özellikle komşu bölü karşı istediğinde, yatay uzaklığı düşey yükseklikle karşılaştırırken ya da bilinen kenarlar iki kenar olduğunda kotanjantı kullanın. Bilinen ilişki yükseklik bölü uzaklık ya da karşı bölü komşu ise tanjant doğrudan seçimdir."
      }
    ],
    "conclusion": {
      "h2": "Kotanjant Oranını Güvenle Kullanın",
      "paragraphs": [
        "Kotanjant, tanjantın çevrilmiş biçimidir: komşu kenarı karşı kenara bölün; üçgenin uzaklık-yükseklik biçimini anlatmış olursunuz. [[\\cot(A)=b/a]] formülü yalnızca iki ölçüm ister, cevap her zaman pozitif birimsiz bir sayıdır ve hangi kenar uzunsa 1'in üzerinde, eşitse 1'de, altındaysa 1'in altında kalabilir. Açının kendisi gerektiğinde [[A=\\tan^{-1}(a/b)]] onu geri kazandırır. Merdiven, çatı, rampa ya da ders kitabı 3-4-5'i olsun, yöntem hiç değişmez: komşu kenarı belirleyin, karşı kenarı belirleyin, bölün ve tanjantın tersiyle doğrulayın."
      ]
    }
  },
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "cot-intro": "Vad är en kvoträknare för kotangens?",
      "cot-triangle": "Förstå den angränsande sidan och den motstående sidan",
      "cot-whatis": "Förstå kotangenskvoten",
      "cot-formula": "Hur kotangensformeln fungerar",
      "cot-howto": "Så använder du kvoträknaren för kotangens",
      "cot-examples": "Stegvisa exempel på beräkning av kotangens",
      "cot-applications": "Verkliga exempel på användning av kotangenskvoten",
      "cot-angle": "Förstå sambandet mellan kotangens och vinkelstorlek",
      "cot-recover": "Så hittar du en vinkel när kotangensen är känd",
      "cot-mistakes": "Vanliga misstag vid beräkning av kotangens",
      "cot-verify": "Så kontrollerar du om ditt kotangensresultat är giltigt",
      "cot-vs": "Kotangens jämfört med tangens, sinus och cosinus",
      "cot-related": "Utforska relaterade trigonometriska räknare",
      "cot-faq": "Vanliga frågor"
    },
    "sections": {
      "cot-intro": {
        "h2": "Vad är en kvoträknare för kotangens?",
        "blocks": [
          {
            "kind": "p",
            "text": "En kvoträknare för kotangens besvarar en fråga: för en spetsig vinkel i en rätvinklig triangel, hur förhåller sig sidan vid vinkeln till sidan mitt emot den? Mata in de två sidlängderna, så delar verktyget den angränsande sidan med den motstående sidan och returnerar [[\\cot(A)=b/a]]. Med en angränsande sida på 4 cm och en motstående sida på 3 cm blir beräkningen [[4/3\\approx1.3333]]: den angränsande sidan är ungefär 1.3333 gånger så lång som den motstående sidan. Det decimaltalet är det fullständiga svaret. Det har ingen enhet, eftersom centimetrarna tar ut varandra i divisionen, och det är inte en vinkel i grader. Hypotenusan deltar aldrig i denna beräkning; de två vinkelräta benen räcker. Kotangens är också reciproka värdet av tangens, vilket är varför många läroböcker presenterar det som den vända formen av [[\\tan(A)]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "Förstå den angränsande sidan och den motstående sidan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt [[90^\\circ]], vinkeln mellan två vinkelräta linjer, som en vägg som möter ett plant golv. Hypotenusan ligger mitt emot den räta vinkeln och är alltid den längsta sidan. De andra två vinklarna delar på de återstående 90 graderna, så båda är spetsiga. De två benen möts i den räta vinkeln, vinkelräta mot varandra, och det är deras förhållande som kotangensen beskriver."
          },
          {
            "kind": "h3",
            "text": "Vad är den angränsande sidan?"
          },
          {
            "kind": "p",
            "text": "Den angränsande sidan [[b]] är det ben som vidrör referensvinkeln [[A]] utan att vara hypotenusan. I praktiska problem spelar den ofta rollen som den horisontella sträckan: markavståndet från en steges fot, den horisontella projektionen av ett tak eller den horisontella komponenten av en kraft. Den hamnar i täljaren i kotangensformeln. Vilket ben som räknas som angränsande beror på den valda referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[B]] kastar om etiketterna angränsande och motstående."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående sidan?"
          },
          {
            "kind": "p",
            "text": "Den motstående sidan [[a]] ligger direkt mitt emot vinkel [[A]] och vidrör aldrig dess spets. I praktiska problem spelar den ofta rollen som den vertikala höjden: höjden på en vägg, en höjdskillnad eller den vertikala komponenten av ett mått. Den hamnar i nämnaren i kotangensformeln, vilket betyder att en större sida krymper kvoten och en mindre sida växer den."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan [[c]] är sidan mitt emot den räta vinkeln: i varje figur står den mitt emot den lilla kvadraten som markerar hörnet [[90^\\circ]], och den är strängt längre än vartdera benet. Den spelar ingen roll i den grundläggande kotangenskvoten, vilket är varför räknaren aldrig ber om den. Den blir relevant när sinus, cosinus, sekans eller cosekans kommer in i arbetet, eller när Pythagoras sats används för att verifiera att de två benen bildar en äkta rätvinklig triangel."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Rätvinklig triangel med vinkel A längst ner till vänster, gul angränsande sida b, grön motstående sida a, cot(A)=b/a",
            "caption": "Vinkel A sitter längst ner till vänster; kotangensen använder den gula angränsande sidan b och den gröna motstående sidan a, inte hypotenusan c."
          }
        ]
      },
      "cot-whatis": {
        "h2": "Förstå kotangenskvoten",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangensen jämför längden vid referensvinkeln med längden mitt emot den:"
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Här är [[\\cot(A)]] kotangensen av vinkel [[A]], [[b]] är den angränsande sidan och [[a]] är den motstående sidan: hur många gånger den motstående sidan ryms i den angränsande sidan."
          },
          {
            "kind": "h3",
            "text": "Kotangens som reciproka värdet av tangens"
          },
          {
            "kind": "p",
            "text": "Tangensen delar den motstående sidan med den angränsande sidan, [[\\tan(A)=a/b]]. Att ta reciproka värdet vänder på bråket, [[1/\\tan(A)=b/a]], vilket är exakt kotangensformeln:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "Med [[\\tan(A)=3/4=0.75]] är det reciproka värdet [[\\cot(A)=1/0.75=4/3\\approx1.3333]]: samma triangel, beskriven från motsatt håll. Denna distinktion spelar roll eftersom [[\\tan^{-1}]] betecknar den inversa tangensfunktionen, medan [[1/\\tan(A)]] är den reciproka tangensen: besläktade idéer, olika betydelser, olika svar."
          },
          {
            "kind": "h3",
            "text": "Förstå kotangens som horisontell sträcka delat med vertikal höjd"
          },
          {
            "kind": "p",
            "text": "När vinkel [[A]] mäts från det horisontella kan den angränsande sidan representera den horisontella sträckan och den motstående sidan den vertikala höjden. Då är [[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]. Tangensen ger samma förhållande vänt, höjd delat med sträcka. Denna läsning som sträcka över höjd gör kotangensen till den naturliga kvoten för frågor som 'hur mycket horisontell sträcka täcker hur mycket höjd?' och den beror på den valda referensvinkeln och situationens geometri."
          },
          {
            "kind": "h3",
            "text": "Vad betyder ett kotangensvärde?"
          },
          {
            "kind": "p",
            "text": "En kotangens större än 1 betyder att den angränsande sidan är längre än den motstående sidan och att referensvinkeln är mindre än [[45^\\circ]]. En kotangens lika med 1 betyder att de två benen är lika och att vinkel [[A]] är exakt [[45^\\circ]]. En kotangens mellan 0 och 1 betyder att den motstående sidan är längre än den angränsande sidan och att referensvinkeln ligger mellan [[45^\\circ]] och [[90^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Varför kotangens kan vara större än 1"
          },
          {
            "kind": "p",
            "text": "Till skillnad från sinus och cosinus har kotangensen inget 0-till-1-tak eftersom hypotenusan aldrig ingår i divisionen. För [[\\cot(A)=8/2=4]] är den angränsande sidan helt enkelt fyra gånger den motstående sidan, och referensvinkeln är en relativt liten spetsig vinkel. Varje positivt ändligt värde är möjligt."
          },
          {
            "kind": "h3",
            "text": "Varför kotangens kan vara mindre än 1"
          },
          {
            "kind": "p",
            "text": "För [[\\cot(A)=3/6=0.5]] är den angränsande sidan hälften av den motstående sidan, så referensvinkeln är en relativt stor spetsig vinkel. Att kvoten sjunker under 1 är inget fel: det är helt enkelt signaturen för en högre, smalare triangel."
          },
          {
            "kind": "h3",
            "text": "Varför kotangens är en dimensionslös kvot"
          },
          {
            "kind": "p",
            "text": "Att dela en längd med en annan tar ut enheterna: [[4\\text{ m}/3\\text{ m}=4/3]], och [[400\\text{ cm}/300\\text{ cm}=4/3]] likaså. Talet beskriver triangelns form, inte ett mått med fysikaliska enheter, så skriv resultatet som ett vanligt tal, aldrig med meter, centimeter eller grader bifogat."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tre steg: 3-4-5-triangel märkt, tangens tan(A)=3/4=0.75, kotangens cot(A)=4/3=1.3333, det reciproka förhållandet",
            "caption": "Tre steg: märk 3-4-5-triangeln, beräkna tangensen tan(A) = 3/4, vänd sedan på bråket för att få cot(A) = 4/3."
          }
        ]
      },
      "cot-formula": {
        "h2": "Hur kotangensformeln fungerar",
        "blocks": [
          {
            "kind": "p",
            "text": "Utgå från definitionen: kotangens är den angränsande sidan delad med den motstående sidan. I sidans notation:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "Den angränsande sidan är täljaren eftersom det är längden som jämförs; den motstående sidan är nämnaren eftersom det är referenslängden, enheten för 'hur många av dessa ryms i den'. Att byta plats på dem ger i stället tangenskvoten."
          },
          {
            "kind": "h3",
            "text": "Fullständigt löst exempel: en 3-4-5 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Steg 1: Skriv formeln. [[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "Steg 2: Sätt in måtten. [[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "Steg 3: Dividera. [[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Steg 4: Tolka svaret. Den angränsande sidan är ungefär 1.3333 gånger den motstående sidan."
          },
          {
            "kind": "p",
            "text": "Steg 5: Verifiera med tangenskvoten. [[\\tan(A)=3/4=0.75]] och [[1/0.75\\approx1.3333]]. Båda vägarna landar på samma tal, vilket är exakt hur reciproka kvoter beter sig."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "Så använder du kvoträknaren för kotangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Genomgången nedan stämmer överens med det faktiska gränssnittet på denna sida."
          }
        ],
        "steps": [
          "<strong>Identifiera referensvinkeln [[A]],</strong> eftersom de angränsande och motstående sidorna definieras relativt till den.",
          "<strong>Lokalisera den angränsande sidan [[b]]:</strong> det ben som vidrör vinkel [[A]] och inte är hypotenusan.",
          "<strong>Lokalisera den motstående sidan [[a]]:</strong> det ben som ligger direkt mitt emot vinkel [[A]] och aldrig vidrör dess spets.",
          "<strong>Mät eller skaffa båda sidlängderna</strong> i samma enhet.",
          "<strong>Mata in den angränsande sidans längd</strong> i det första inmatningsfältet.",
          "<strong>Mata in den motstående sidans längd</strong> i det andra inmatningsfältet.",
          "<strong>Välj matchande enheter med enhetsväljarna</strong> så att divisionen jämför likt med likt.",
          "<strong>Bekräfta att båda måtten är positiva;</strong> noll eller negativa längder kan inte bilda en verklig triangel.",
          "<strong>Klicka på Beräkna cot(A)</strong> för att dela den angränsande sidan med den motstående sidan.",
          "<strong>Läs av kotangenskvoten:</strong> den angränsande sidan uttryckt som en multipel av den motstående sidan.",
          "<strong>Tolka resultatet:</strong> större än 1 betyder en längre angränsande sida, lika med 1 betyder lika ben, mindre än 1 betyder en längre motstående sida.",
          "<strong>Använd Återställ</strong> för att rensa inmatningarna och börja om."
        ],
        "closingParagraphs": [
          "Räknaren ber varken om hypotenusa eller vinkel i grader: två positiva sidlängder är den fullständiga inmatningen, och resultatet är alltid ett positivt, dimensionslöst tal."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "Stegvisa exempel på beräkning av kotangens",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel följer samma mönster: skriv formeln, sätt in, dividera, tolka."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: en 3-4-5 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "Den angränsande sidan är ungefär 1.3333 gånger den motstående sidan; hypotenusan står helt utanför beräkningen."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: en 5-12-13 rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "Kvoten är större än 1 eftersom den angränsande sidan är det längre benet; den berättar att den angränsande sidan är 2.4 gånger den motstående sidan, inte hur stor triangeln är."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: en likbent rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=6\\text{ cm}]], [[a=6\\text{ cm}]], [[c=6\\sqrt{2}\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "Lika ben ger kvoten exakt 1, vilket är signaturen för en referensvinkel på [[45^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: en triangel med kortare angränsande sida"
          },
          {
            "kind": "p",
            "text": "Givet [[b=6\\text{ m}]] och [[a=8\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "Resultatet är mindre än 1 eftersom den motstående sidan är det längre benet, så referensvinkeln är större än [[45^\\circ]]."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "Verkliga exempel på användning av kotangenskvoten",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangens är en matematisk kvot, inte en fysikalisk storhet med enheter. Dess praktiska värde ligger i att jämföra horisontell sträcka med vertikal höjd, kontrollera triangelgeometri och använda formler som specifikt kräver angränsande delat med motstående. Varje exempel förutsätter en förenklad rätvinklig triangel, och ingen av dessa kvoter avgör på egen hand frågor om säkerhet, hållfasthet eller bygglagstiftning."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: hitta en steges kvot mellan sträcka och höjd"
          },
          {
            "kind": "p",
            "text": "En stege står lutad mot en vertikal vägg. Dess fot står 3 m från väggen, och den når 4 m upp på väggen. Den horisontella sträckan är den angränsande sidan [[b=3\\text{ m}]], den vertikala räckvidden den motstående sidan [[a=4\\text{ m}]]. [[\\cot(A)=3/4]], alltså [[\\boxed{\\cot(A)=0.75}]]: den horisontella sträckan är 75 procent av den vertikala höjden. Kvoten beskriver stegens geometri; den avgör inte om stegen står säkert."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: beräkna ett taks kvot mellan sträcka och höjd"
          },
          {
            "kind": "p",
            "text": "Ett takavsnitt har en horisontell sträcka på 4 m och en vertikal höjd på 3 m. Här är [[b=4\\text{ m}]] och [[a=3\\text{ m}]]. [[\\cot(A)=4/3]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]: den horisontella sträckan är ungefär 1.3333 gånger den vertikala höjden. Denna kvot är inte en fullständig konstruktions- eller taklagsbedömning."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: utvärdera en ramps kotangenskvot"
          },
          {
            "kind": "p",
            "text": "En förenklad ramp har en horisontell sträcka på 9 m och en vertikal höjd på 0.75 m. Med [[b=9\\text{ m}]] och [[a=0.75\\text{ m}]]: [[\\cot(A)=9/0.75]], alltså [[\\boxed{\\cot(A)=12}]]. Den horisontella sträckan är 12 gånger den vertikala höjden, signaturen för en flack lutning. Kvoten ensam avgör inte tillgänglighet eller överensstämmelse med byggregler."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: ett lantmäterimått"
          },
          {
            "kind": "p",
            "text": "En förenklad lantmäteritriangel har ett horisontellt avstånd på 40 m och en vertikal höjdskillnad på 30 m. Med [[b=40\\text{ m}]] och [[a=30\\text{ m}]]: [[\\cot(A)=40/30]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]. Kvoten jämför det horisontella avståndet direkt med den vertikala skillnaden. Verkligt lantmäteri kan kräva ytterligare mätningar, korrigeringar och instrumentprocedurer."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: en staglina som stöttar en stolpe"
          },
          {
            "kind": "p",
            "text": "En staglina förbinder en stolpe med ett markankare. Ankaret står 12 m horisontellt från stolpen, och fästpunkten är 5 m över marken. Med [[b=12\\text{ m}]] och [[a=5\\text{ m}]]: [[\\cot(A)=12/5]], alltså [[\\boxed{\\cot(A)=2.4}]]. Det horisontella avståndet är 2.4 gånger den vertikala separationen. Denna kvot fastställer inte linans dragkraft, ankarets hållfasthet eller konstruktionssäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: förstå en trappas kvot mellan sträcka och höjd"
          },
          {
            "kind": "p",
            "text": "En förenklad trappa har en horisontell sträcka på 4 m och en vertikal höjd på 3 m. Med [[b=4\\text{ m}]] och [[a=3\\text{ m}]]: [[\\cot(A)=4/3]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]. Den horisontella sträckan är ungefär 1.3333 gånger den vertikala höjden. Exemplet beskriver en idealiserad diagonal och verifierar inte trappans mått eller överensstämmelse med byggregler."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: en kranarms horisontella och vertikala komponenter"
          },
          {
            "kind": "p",
            "text": "En förenklad kranarm bildar en rätvinklig triangel med en horisontell projektion på 6 m och en vertikal höjd på 8 m. Med [[b=6\\text{ m}]] och [[a=8\\text{ m}]]: [[\\cot(A)=6/8]], alltså [[\\boxed{\\cot(A)=0.75}]]. Den horisontella projektionen är 75 procent av den vertikala komponenten. Kvoten fastställer inte lyftkapacitet eller driftssäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: ett rakt flygplanssegment"
          },
          {
            "kind": "p",
            "text": "För ett förenklat flygsegment färdas ett flygplan längs en rak bana med en horisontell förflyttning på 4 km och en vertikal ökning på 3 km. Med [[b=4\\text{ km}]] och [[a=3\\text{ km}]]: [[\\cot(A)=4/3]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]. Den horisontella förflyttningen är ungefär 1.3333 gånger den vertikala ökningen. Detta är en idealiserad geometrisk modell, inte en fullständig flygplaneringsberäkning."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: ett diagonalt mekaniskt stag"
          },
          {
            "kind": "p",
            "text": "Ett diagonalt stag har en horisontell förskjutning på 1.2 m och en vertikal höjd på 1.6 m. Med [[b=1.2\\text{ m}]] och [[a=1.6\\text{ m}]]: [[\\cot(A)=1.2/1.6]], alltså [[\\boxed{\\cot(A)=0.75}]]. Den horisontella förskjutningen är 75 procent av den vertikala höjden. Kvoten avgör inte stagets hållfasthet eller lämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: en rak vandringssträcka"
          },
          {
            "kind": "p",
            "text": "En förenklad rak sträcka av en vandringsled har en horisontell förflyttning på 80 m och en vertikal ökning på 60 m. Med [[b=80\\text{ m}]] och [[a=60\\text{ m}]]: [[\\cot(A)=80/60]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]. Den horisontella förflyttningen är ungefär 1.3333 gånger höjdökningen. Verkliga stigar kan ha kurvor och varierande lutningar."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: ett markisstöd"
          },
          {
            "kind": "p",
            "text": "Ett diagonalt markisstöd har en horisontell projektion på 2.4 m och en vertikal höjd på 1.8 m. Med [[b=2.4\\text{ m}]] och [[a=1.8\\text{ m}]]: [[\\cot(A)=2.4/1.8]], alltså [[\\boxed{\\cot(A)\\approx1.3333}]]. Kvoten beskriver den horisontella projektionen relativt den vertikala höjden. Denna beräkning fastställer inte konstruktionens lämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: en kabel mellan två olika höjder"
          },
          {
            "kind": "p",
            "text": "En rak kabel sträcker sig 24 m horisontellt mellan två punkter med en vertikal separation på 7 m. Med [[b=24\\text{ m}]] och [[a=7\\text{ m}]]: [[\\cot(A)=24/7]], alltså [[\\boxed{\\cot(A)\\approx3.4286}]]. Den horisontella separationen är ungefär 3.4286 gånger den vertikala skillnaden. Modellen förutsätter en rak linje mellan ändpunkterna."
          },
          {
            "kind": "h3",
            "text": "Praktiska exempel jämförda"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Mönstret håller hela vägen: kvoten är stor när den angränsande sidan dominerar över den motstående sidan, och liten när den motstående sidan dominerar."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situation", "Angränsande sida b", "Motstående sida a", "Kotangensformel", "Beräknad kvot", "Tolkning"],
            "rows": [
              ["Stege", "3 m", "4 m", "3/4", "0.75", "Horisontell sträcka är 75 % av den vertikala höjden"],
              ["Tak", "4 m", "3 m", "4/3", "1.3333", "Horisontell sträcka är 1.3333 gånger den vertikala höjden"],
              ["Ramp", "9 m", "0.75 m", "9/0.75", "12", "Horisontell sträcka är 12 gånger den vertikala höjden"],
              ["Lantmäteri", "40 m", "30 m", "40/30", "1.3333", "Avståndet är 1.3333 gånger höjdskillnaden"],
              ["Staglina", "12 m", "5 m", "12/5", "2.4", "Avståndet är 2.4 gånger höjden"],
              ["Trappa", "4 m", "3 m", "4/3", "1.3333", "Horisontell sträcka är 1.3333 gånger den vertikala höjden"],
              ["Kranarm", "6 m", "8 m", "6/8", "0.75", "Horisontell projektion är 75 % av den vertikala komponenten"],
              ["Flygsegment", "4 km", "3 km", "4/3", "1.3333", "Horisontell förflyttning är 1.3333 gånger den vertikala ökningen"],
              ["Stag", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "Horisontell förskjutning är 75 % av den vertikala höjden"],
              ["Vandringsled", "80 m", "60 m", "80/60", "1.3333", "Förflyttningen är 1.3333 gånger höjdökningen"],
              ["Markisstöd", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "Projektionen är 1.3333 gånger den vertikala höjden"],
              ["Kabel", "24 m", "7 m", "24/7", "3.4286", "Avståndet är 3.4286 gånger höjdskillnaden"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Fyra paneler: stegkvot 0.75, tak 1.3333, ramp 12, mätning 1.3333, var och en med en märkt rätvinklig triangel",
            "caption": "Fyra praktiska beräkningar: stege, tak, ramp och lantmäteri, var och en med sin triangel, formel och kvot."
          }
        ]
      },
      "cot-angle": {
        "h2": "Förstå sambandet mellan kotangens och vinkelstorlek",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangensen sjunker när den spetsiga vinkeln växer. En liten vinkel håller den angränsande sidan mycket längre än den motstående sidan, så kvoten är stor; när vinkel [[A]] öppnar sig mot [[90^\\circ]] tar den motstående sidan över och kvoten sjunker mot 0. De verifierade referensvärdena nedan visar mönstret:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Tabellmåtten är illustrativa: det är kvoterna, inte de absoluta längderna, som bestämmer vinklarna. Kvoten växer obegränsat när vinkeln närmar sig [[0^\\circ]] och närmar sig 0 när vinkeln närmar sig [[90^\\circ]], och den förblir positiv och ändlig för varje giltig triangel.",
          "Räknaren tar ingen vinkel som inmatning; dessa referensvärden tjänar som orientering och kontrollvärden vid verifiering av ett resultat."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Vinkel A", "Angränsande sida b", "Motstående sida a", "Kotangenskvot"],
            "rows": [
              ["30 grader", "sqrt(3)", "1", "Ungefär 1.7321"],
              ["45 grader", "1", "1", "1"],
              ["60 grader", "1", "sqrt(3)", "Ungefär 0.5774"],
              ["75 grader", "1", "Ungefär 3.7321", "Ungefär 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tre trianglar vid 30, 45, 60 grader med kotangensvärdena 1.7321, 1, 0.5774; kotangensen sjunker när vinkeln växer",
            "caption": "När vinkel A växer utgör den motstående sidan en större andel av den angränsande sidan, så cot(A) sjunker."
          }
        ]
      },
      "cot-recover": {
        "h2": "Så hittar du en vinkel när kotangensen är känd",
        "blocks": [
          {
            "kind": "p",
            "text": "Kotangenskvoten är inte i sig en vinkel. När kvoten är känd och vinkeln behövs överbryggar invers trigonometri gapet. För en positiv kotangenskvot i en rätvinklig triangel, ta reciproka värdet för att återfå tangenskvoten och tillämpa sedan invers tangens:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Ekvivalent, eftersom [[\\tan(A)=a/b]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "Löst exempel"
          },
          {
            "kind": "p",
            "text": "Givet [[\\cot(A)=4/3]]: det reciproka värdet är [[\\tan(A)=3/4]], så [[A=\\tan^{-1}(3/4)]] och [[\\boxed{A\\approx36.87^\\circ}]]. Ställ in den vetenskapliga räknaren på grader innan du trycker på tangenten för invers tangens. Detta är en separat vinkelberäkning; kotangenskvotsräknaren på denna sida tar sidlängder och returnerar kvoten, aldrig vinkeln."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "Vanliga misstag vid beräkning av kotangens",
        "blocks": [],
        "steps": [
          "<strong>Att vända formeln till [[a/b]] i stället för [[b/a]].</strong> Detta beräknar tangensen. Åtgärd: sätt den angränsande sidan överst.",
          "<strong>Att blanda ihop kotangens med tangens.</strong> Rapportera 0.75 för en 3-4-5-triangel. Åtgärd: tangens är motstående delat med angränsande; kotangens är det vända bråket.",
          "<strong>Att blanda ihop kotangens med cosinus.</strong> Använda [[b/c]]. Åtgärd: cosinus behöver hypotenusan; kotangens rör den aldrig.",
          "<strong>Att använda hypotenusan i stället för ett av de två benen.</strong> Beräkna [[b/c]] eller [[c/a]]. Åtgärd: nämnaren är det motstående benet [[a]], inte [[c]].",
          "<strong>Att blanda ihop de angränsande och motstående sidorna.</strong> Välja fel ben. Åtgärd: följ från vinkel [[A]]: det ben som vidrör den är angränsande, det mitt emot är motstående.",
          "<strong>Att glömma att sidetiketterna beror på referensvinkeln.</strong> Använda etiketter ritade för vinkel [[B]]. Åtgärd: märk om varje gång referensvinkeln ändras.",
          "<strong>Att anta att kotangensen måste vara mellan 0 och 1.</strong> Behandla 2.4 eller 12 som fel. Åtgärd: de värdena är helt okej; bara sinus och cosinus är begränsade till 1.",
          "<strong>Att anta att en kotangens på 1 betyder en ogiltig triangel.</strong> Åtgärd: [[\\cot(A)=1]] betyder helt enkelt lika ben och en vinkel på [[45^\\circ]], en fullt giltig triangel.",
          "<strong>Att rapportera kvoten med meter eller centimeter.</strong> Skriva 1.3333 m. Åtgärd: enheterna är redan uttagna, så rapportera ett vanligt tal.",
          "<strong>Att mata in noll eller negativa sidlängder.</strong> Division med noll eller en meningslös negativ kvot. Åtgärd: använd endast positiva längder.",
          "<strong>Att blanda måttenheter.</strong> Meter delat med centimeter snedvrider kvoten med 100. Åtgärd: konvertera båda sidorna till en enhet först.",
          "<strong>Att avrunda för tidigt.</strong> Att avrunda [[4/3]] till 1.33 före verifiering lägger till ett undvikbart fel. Åtgärd: behåll extra siffror till det sista steget.",
          "<strong>Att anta att kotangensen är en vinkel i grader.</strong> Läsa 1.3333 som 1.3333 grader. Åtgärd: det är en kvot; vinkeln kräver invers tangens.",
          "<strong>Att blanda ihop reciprok tangens med invers tangens.</strong> Skriva [[1/\\tan(A)]] när [[\\tan^{-1}(a/b)]] behövs, eller omvänt. Åtgärd: reciprokt vänder bråket; inversen återfår vinkeln.",
          "<strong>Att anta att kotangensvärdet bestämmer triangelns storlek.</strong> Två mycket olika trianglar kan dela [[\\cot(A)=1.3333]]. Åtgärd: kvoten fixerar formen, inte skalan."
        ],
        "closingParagraphs": [
          "<strong>Fel kontra rätt</strong>",
          "Givet [[b=4]] och [[a=3]]:",
          "Felaktigt: [[3/4=0.75]]. Detta är tangenskvoten, inte kotangens.",
          "Rätt: [[\\cot(A)=4/3\\approx1.3333]]. Verifiera: [[\\tan(A)=3/4=0.75]] och [[1/0.75\\approx1.3333]], vilket bekräftar det reciproka förhållandet."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "Så kontrollerar du om ditt kotangensresultat är giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "En giltig, icke-degenererad rätvinklig triangel kräver positiva ben, [[a \\gt 0]] och [[b \\gt 0]], så kotangensresultatet måste vara ett positivt, ändligt tal:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "Båda måtten måste använda kompatibla enheter. Ett resultat större än 1, lika med 1 eller mindre än 1 kan alla vara giltiga; till skillnad från sinus och cosinus är kotangensen inte begränsad till 1."
          },
          {
            "kind": "h3",
            "text": "Metod 1: kontrollera reciproka värdet av tangensen"
          },
          {
            "kind": "p",
            "text": "Verifiera [[\\tan(A)=a/b]] och bekräfta sedan [[\\cot(A)=1/\\tan(A)]]. Med [[a=3]] och [[b=4]]: [[\\tan(A)=3/4=0.75]], alltså [[\\cot(A)=1/0.75\\approx1.3333}]]. En avvikelse mellan de två vägarna signalerar ett vänt bråk eller en felmärkt sida."
          },
          {
            "kind": "h3",
            "text": "Metod 2: kontrollera Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "Om hypotenusan är känd eller behövs, beräkna [[c=\\sqrt{a^2+b^2}]]. För [[a=3]] och [[b=4]]: [[c=\\sqrt{9+16}=5]], och [[3^2+4^2=5^2]]. Detta bekräftar att sidlängderna bildar en äkta rätvinklig triangel. Hypotenusan är här ett verifieringsvärde, inte en del av den primära kotangensformeln."
          },
          {
            "kind": "h3",
            "text": "Metod 3: kontrollera vinkelsambandet"
          },
          {
            "kind": "p",
            "text": "För en känd kotangenskvot, återfå vinkeln med [[A=\\tan^{-1}(a/b)]]. Med [[a=3]] och [[b=4]]: [[A\\approx36.87^\\circ]]. Eftersom den angränsande sidan är längre än den motstående sidan bör vinkeln hamna under [[45^\\circ]]; om den inte gör det är sidetiketterna troligen ombytta. Små skillnader kan bero på avrundning."
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "Kotangens jämfört med tangens, sinus och cosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje kvot jämför ett annat sidpar, med samma referensvinkel och sidetiketter:"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "Kotangens och tangens är det reciproka paret: [[\\cot(A)=1/\\tan(A)]]. Om [[\\tan(A)=0.75]] är [[\\cot(A)\\approx1.3333}]]. Välj kotangens när en formel kräver angränsande delat med motstående, när du arbetar med sträcka-till-höjd-förhållanden eller när bara de två benen är kända; välj tangens för höjd-till-sträcka, sinus för den motstående sidan mot hypotenusan och cosinus för den angränsande sidan mot hypotenusan.",
          "För de närliggande kvoterna, se <a href=\"/sine-ratio-calculator/\">Sinuskvotsräknaren</a>, <a href=\"/cosine-ratio-calculator/\">Cosinuskvotsräknaren</a>, <a href=\"/tangent-ratio-calculator/\">Tangenskvotsräknaren</a>, <a href=\"/secant-ratio-calculator/\">Sekanskvotsräknaren</a> och <a href=\"/cosecant-ratio-calculator/\">Kosekanskvotsräknaren</a>."
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Kvot", "Formel", "Vad den jämför"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Motstående sida mot hypotenusan"],
              ["Cosinus", "cos(A) = b/c", "Angränsande sida mot hypotenusan"],
              ["Tangens", "tan(A) = a/b", "Motstående sida mot angränsande sida"],
              ["Kotangens", "cot(A) = b/a", "Angränsande sida mot motstående sida"],
              ["Sekans", "sec(A) = c/b", "Hypotenusan mot angränsande sida"],
              ["Kosekans", "csc(A) = c/a", "Hypotenusan mot motstående sida"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "Utforska relaterade trigonometriska räknare",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "Sinuskvotsräknare",
            "desc": "Beräkna sinuskvoten från motstående sida och hypotenusa."
          },
          {
            "name": "Cosinuskvotsräknare",
            "desc": "Beräkna cosinuskvoten från angränsande sida och hypotenusa."
          },
          {
            "name": "Tangenskvotsräknare",
            "desc": "Beräkna tangenskvoten från motstående och angränsande sida."
          },
          {
            "name": "Sekanskvotsräknare",
            "desc": "Beräkna sekanskvoten från hypotenusa och angränsande sida."
          },
          {
            "name": "Kosekanskvotsräknare",
            "desc": "Beräkna cosekanskvoten från hypotenusa och motstående sida."
          },
          {
            "name": "Vinkelräknare för rätvinkliga trianglar",
            "desc": "Hitta de spetsiga vinklarna från sidlängderna."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade trigonometriska räknare",
    "faqs": [
      {
        "question": "Vad är kotangensformeln för en rätvinklig triangel?",
        "answer": "cot(A) = b / a: dela sidan angränsande till vinkel A med sidan motstående vinkel A. Med en angränsande sida på 4 cm och en motstående sida på 3 cm blir resultatet 4/3, ungefär 1.3333."
      },
      {
        "question": "Hur är kotangens relaterat till tangens?",
        "answer": "Kotangens är det reciproka värdet av tangens: cot(A) = 1 / tan(A). Om tan(A) = 3/4 = 0.75 är cot(A) = 4/3, ungefär 1.3333. De två kvoterna beskriver samma triangel från vända perspektiv, och den reciproka kontrollen är det snabbaste sättet att verifiera ett resultat."
      },
      {
        "question": "Vad är skillnaden mellan kotangens och cosinus?",
        "answer": "Kotangens delar den angränsande sidan med den motstående sidan (b/a) och använder bara de två benen. Cosinus delar den angränsande sidan med hypotenusan (b/c). Kotangens är det reciproka värdet av tangens, inte av cosinus; den distinktionen är ett av de mest testade misstagen i tidig trigonometri."
      },
      {
        "question": "Kan kotangens vara större än 1?",
        "answer": "Ja. Kotangens har inget 0-till-1-tak eftersom ingen hypotenusa ingår. När den angränsande sidan är längre än den motstående sidan ligger resultatet över 1: för en vinkel på 30 grader är cot(30 deg) ungefär 1.7321. Värdena 2.4, 12 eller vilket positivt ändligt tal som helst är alla möjliga."
      },
      {
        "question": "Vad betyder ett kotangensvärde på 1?",
        "answer": "De angränsande och motstående sidorna är lika långa, så triangeln är likbent vid referensvinkeln och vinkel A är 45 grader. En angränsande sida på 6 cm och en motstående sida på 6 cm ger cot(A) = 6/6 = 1."
      },
      {
        "question": "Kan kotangens vara mindre än 1?",
        "answer": "Ja, varje gång den motstående sidan är längre än den angränsande sidan. En angränsande sida på 6 m och en motstående sida på 8 m ger cot(A) = 6/8 = 0.75, och referensvinkeln är då större än 45 grader."
      },
      {
        "question": "Har kotangens någon måttenhet?",
        "answer": "Nej. Båda inmatningarna är längder mätta i samma enhet, så enheterna tar ut varandra: 4 m / 3 m = 4/3, exakt som 400 cm / 300 cm = 4/3. Rapportera kotangensen som ett vanligt dimensionslöst tal, aldrig med grader, meter eller fot bifogat."
      },
      {
        "question": "Hur beräknar man kotangens från sidlängder?",
        "answer": "Mät den angränsande sidan b och den motstående sidan a i samma enhet, bekräfta att båda är positiva och dividera sedan: cot(A) = b / a. På denna sida matar du in den angränsande sidan i det första fältet och den motstående sidan i det andra, väljer kompatibla enheter och klickar på Beräkna cot(A)."
      },
      {
        "question": "Hur hittar jag en vinkel från en kotangenskvot?",
        "answer": "Ta reciproka värdet för att få tangenskvoten och tillämpa sedan invers tangens: A = tan^-1(a / b). För cot(A) = 4/3 är tangenskvoten 3/4, så A = tan^-1(0.75), ungefär 36.87 grader. Ställ först in den vetenskapliga räknaren på grader. Sidans räknare returnerar kvoten, inte vinkeln."
      },
      {
        "question": "Behöver kotangensräknaren hypotenusan?",
        "answer": "Nej. Den grundläggande kotangenskvoten använder bara de två vinkelräta sidorna, så hypotenusan ingår aldrig i formeln. Den blir relevant endast för uppföljande arbete med sinus, cosinus, sekans eller cosekans, eller när Pythagoras sats används för att verifiera triangeln."
      },
      {
        "question": "Vad betyder kotangens i termer av sträcka och höjd?",
        "answer": "När vinkel A mäts från det horisontella är cot(A) den horisontella sträckan delad med den vertikala höjden. En kotangens på 0.75 betyder att den horisontella sträckan är 75 procent av den vertikala höjden; en kotangens på 12 betyder att sträckan är tolv gånger höjden. Tangens är samma idé vänd: höjd delad med sträcka."
      },
      {
        "question": "När ska jag använda kotangens i stället för tangens?",
        "answer": "Använd kotangens när en formel eller procedur specifikt kräver angränsande delat med motstående, när du jämför horisontell sträcka mot vertikal höjd, eller när de kända sidorna är de två benen. Om det kända förhållandet är höjd över sträcka, eller motstående över angränsande, är tangens det direkta valet."
      }
    ],
    "conclusion": {
      "h2": "Använd kotangenskvoten med självförtroende",
      "paragraphs": [
        "Kotangens är den vända formen av tangens: dela den angränsande sidan med den motstående sidan och du har beskrivit triangelns sträcka-till-höjd-form. Formeln [[\\cot(A)=b/a]] behöver bara två mått, svaret är alltid ett positivt dimensionslöst tal, och det kan ligga över, på eller under 1 beroende på vilket ben som är längre. När själva vinkeln behövs återfår [[A=\\tan^{-1}(a/b)]] den. Stege, tak, ramp eller lärobokens 3-4-5, metoden ändras aldrig: identifiera den angränsande sidan, identifiera den motstående sidan, dividera och verifiera med det reciproka värdet av tangensen."
      ]
    }
  },
  "zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "cot-intro": "什么是余切比计算器？",
      "cot-triangle": "理解邻边与对边",
      "cot-whatis": "理解余切比",
      "cot-formula": "余切公式的工作原理",
      "cot-howto": "如何使用余切比计算器",
      "cot-examples": "余切计算分步示例",
      "cot-applications": "余切比的实际应用示例",
      "cot-angle": "理解余切与角度大小的关系",
      "cot-recover": "已知余切时如何求角度",
      "cot-mistakes": "计算余切时的常见错误",
      "cot-verify": "如何验证余切结果是否有效",
      "cot-vs": "余切与正切、正弦和余弦",
      "cot-related": "探索相关三角计算器",
      "cot-faq": "常见问题"
    },
    "sections": {
      "cot-intro": {
        "h2": "什么是余切比计算器？",
        "blocks": [
          {
            "kind": "p",
            "text": "余切比计算器回答一个问题：对于直角三角形中的一个锐角，角旁边的边与角对面的边相比如何？输入两条边的长度，工具将邻边除以对边，返回[[\\cot(A)=b/a]]。当邻边为4厘米、对边为3厘米时，计算结果为[[4/3\\approx1.3333]]：邻边约为对边的1.3333倍长。这个小数就是完整的答案。它没有单位，因为厘米在除法中被约掉了；它也不是以度为单位的角度。斜边从不参与这个计算；两条互相垂直的直角边就足够了。余切也是正切的倒数，这就是为什么许多教材把它介绍为[[\\tan(A)]]的翻转形式。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-triangle": {
        "h2": "理解邻边与对边",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个角恰好为[[90^\\circ]]，即两条互相垂直的直线之间的夹角，就像墙与平整的地面相接。斜边位于直角的对面，永远是最长的一条边。另外两个角平分剩下的90度，因此都是锐角。两条直角边在直角处相交，互相垂直，余切描述的正是它们之间的关系。"
          },
          {
            "kind": "h3",
            "text": "什么是邻边？"
          },
          {
            "kind": "p",
            "text": "邻边[[b]]是指与参考角[[A]]相邻、但不是斜边的那条直角边。在实际问题中，它常扮演水平距离的角色：梯子底部距墙的地面距离、屋顶的水平投影，或一个力的水平分量。它是余切公式的分子。哪条边算作邻边取决于所选的参考角，因此从角[[A]]切换到角[[B]]时，邻边和对边的标签会互换。"
          },
          {
            "kind": "h3",
            "text": "什么是对边？"
          },
          {
            "kind": "p",
            "text": "对边[[a]]位于角[[A]]的正对面，从不接触它的顶点。在实际问题中，它常扮演垂直高度的角色：墙的高度、高程差，或某个测量量的垂直分量。它是余切公式的分母，这意味着把它变大会缩小比值，变小会增大比值。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边[[c]]是直角对面的边：在任何图形中，它都正对着标示[[90^\\circ]]角的小方块，且严格长于任意一条直角边。它在基本的余切比中不起任何作用，这也是计算器从不要求输入它的原因。只有当正弦、余弦、正割或余割进入计算，或用勾股定理验证两条直角边是否构成真正的直角三角形时，它才变得重要。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "左下角为角A的直角三角形，金色邻边b，绿色对边a，cot(A)=b/a",
            "caption": "角A位于左下角；余切使用金色邻边b和绿色对边a，而不是斜边c。"
          }
        ]
      },
      "cot-whatis": {
        "h2": "理解余切比",
        "blocks": [
          {
            "kind": "p",
            "text": "余切比较参考角旁边的长度与对面的长度："
          },
          {
            "kind": "p",
            "text": "[[[\\cot(A)=\\frac{b}{a}]]]"
          },
          {
            "kind": "p",
            "text": "其中[[\\cot(A)]]是角[[A]]的余切，[[b]]是邻边，[[a]]是对边：即对边能容纳进邻边多少次。"
          },
          {
            "kind": "h3",
            "text": "余切是正切的倒数"
          },
          {
            "kind": "p",
            "text": "正切用对边除以邻边，即[[\\tan(A)=a/b]]。取倒数会把分数翻转，[[1/\\tan(A)=b/a]]，这正是余切公式："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{1}{\\tan(A)}=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "当[[\\tan(A)=3/4=0.75]]时，倒数为[[\\cot(A)=1/0.75=4/3\\approx1.3333]]：同一个三角形，从相反方向描述。这个区别很重要，因为[[\\tan^{-1}]]表示反正切函数，而[[1/\\tan(A)]]是倒数正切：相关的概念，不同的含义，不同的答案。"
          },
          {
            "kind": "h3",
            "text": "把余切理解为水平距离除以垂直高度"
          },
          {
            "kind": "p",
            "text": "当角[[A]]从水平方向测量时，邻边可以表示水平距离，对边表示垂直高度。此时[[\\cot(A)=\\frac{\\text{Horizontal run}}{\\text{Vertical rise}}]]。正切给出翻转后的同一关系：高度除以距离。这种“距离比高度”的读法，使余切成为“多少水平距离对应多少高度”这类问题的自然比值；它取决于所选的参考角和具体情形的几何形状。"
          },
          {
            "kind": "h3",
            "text": "余切值是什么意思？"
          },
          {
            "kind": "p",
            "text": "余切大于1意味着邻边长于对边，参考角小于[[45^\\circ]]。余切等于1意味着两条直角边相等，角[[A]]恰好为[[45^\\circ]]。余切在0和1之间意味着对边长于邻边，参考角介于[[45^\\circ]]和[[90^\\circ]]之间。"
          },
          {
            "kind": "h3",
            "text": "余切为什么可以大于1"
          },
          {
            "kind": "p",
            "text": "与正弦和余弦不同，余切没有0到1的上限，因为除法中从不涉及斜边。对于[[\\cot(A)=8/2=4]]，邻边就是对边的四倍，参考角是一个相对较小的锐角。任何正有限值都是可能的。"
          },
          {
            "kind": "h3",
            "text": "余切为什么可以小于1"
          },
          {
            "kind": "p",
            "text": "对于[[\\cot(A)=3/6=0.5]]，邻边是对边的一半，因此参考角是一个相对较大的锐角。比值降到1以下并不意味着出错：这只是一个又高又窄的三角形的标志。"
          },
          {
            "kind": "h3",
            "text": "余切为什么是无量纲比值"
          },
          {
            "kind": "p",
            "text": "一个长度除以另一个长度会约掉单位：[[4\\text{ m}/3\\text{ m}=4/3]]，[[400\\text{ cm}/300\\text{ cm}=4/3]]同样如此。这个数字描述的是三角形的形状，而不是带有物理单位的测量值，因此结果应写成纯数字，绝不附带米、厘米或度。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "三个步骤：标注3-4-5三角形，正切tan(A)=3/4=0.75，余切cot(A)=4/3=1.3333，互为倒数关系",
            "caption": "三个步骤：标注3-4-5三角形，计算正切tan(A) = 3/4，再把分数翻转得到cot(A) = 4/3。"
          }
        ]
      },
      "cot-formula": {
        "h2": "余切公式的工作原理",
        "blocks": [
          {
            "kind": "p",
            "text": "从定义开始：余切是邻边除以对边。用本页的记号表示："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a}}}]]"
          },
          {
            "kind": "p",
            "text": "邻边是分子，因为它是被比较的长度；对边是分母，因为它是参考长度，即“以此为单位能容纳多少个”的单位。把两者调换得到的是正切比。"
          },
          {
            "kind": "h3",
            "text": "完整解题示例：3-4-5直角三角形"
          },
          {
            "kind": "p",
            "text": "已知[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "第1步：写出公式。[[\\cot(A)=b/a]]"
          },
          {
            "kind": "p",
            "text": "第2步：代入测量值。[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "第3步：相除。[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "第4步：解释答案。邻边约为对边的1.3333倍。"
          },
          {
            "kind": "p",
            "text": "第5步：用正切比验证。[[\\tan(A)=3/4=0.75]]，且[[1/0.75\\approx1.3333]]。两条路径得到同一个数，互为倒数的比值正是这样。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-howto": {
        "h2": "如何使用余切比计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "下面的说明与本页的实际界面完全一致。"
          }
        ],
        "steps": [
          "<strong>确定参考角[[A]]，</strong>因为邻边和对边是相对于它定义的。",
          "<strong>找到邻边[[b]]：</strong>与角[[A]]相邻、但不是斜边的那条直角边。",
          "<strong>找到对边[[a]]：</strong>角[[A]]正对面的那条直角边，它从不接触角的顶点。",
          "<strong>测量或获得两条边的长度，</strong>使用相同单位。",
          "<strong>在第一个输入框中输入邻边长度。</strong>",
          "<strong>在第二个输入框中输入对边长度。</strong>",
          "<strong>用单位选择器选择匹配的单位，</strong>使除法比较的是同类量。",
          "<strong>确认两个测量值都为正数；</strong>零或负长度无法构成真实三角形。",
          "<strong>点击“计算cot(A)”</strong>，将邻边除以对边。",
          "<strong>读取余切比：</strong>以对边倍数表示的邻边。",
          "<strong>解释结果：</strong>大于1表示邻边更长，等于1表示两边相等，小于1表示对边更长。",
          "<strong>使用“重置”</strong>清空输入并重新开始。"
        ],
        "closingParagraphs": [
          "计算器既不要求输入斜边，也不要求输入角度：两个正数边长就是完整的输入，结果恒为正的无量纲数。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-examples": {
        "h2": "余切计算分步示例",
        "blocks": [
          {
            "kind": "p",
            "text": "每个示例都遵循同一模式：写公式、代入、相除、解释。"
          },
          {
            "kind": "h3",
            "text": "示例1：3-4-5直角三角形"
          },
          {
            "kind": "p",
            "text": "已知[[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=4/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)\\approx1.3333}]]"
          },
          {
            "kind": "p",
            "text": "邻边约为对边的1.3333倍；斜边完全不参与计算。"
          },
          {
            "kind": "h3",
            "text": "示例2：5-12-13直角三角形"
          },
          {
            "kind": "p",
            "text": "已知[[b=12\\text{ m}]]、[[a=5\\text{ m}]]、[[c=13\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=12/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=2.4}]]"
          },
          {
            "kind": "p",
            "text": "比值大于1，因为邻边是较长的直角边；它告诉我们邻边是对边的2.4倍，而不是三角形有多大。"
          },
          {
            "kind": "h3",
            "text": "示例3：等腰直角三角形"
          },
          {
            "kind": "p",
            "text": "已知[[b=6\\text{ cm}]]、[[a=6\\text{ cm}]]、[[c=6\\sqrt{2}\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/6]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=1}]]"
          },
          {
            "kind": "p",
            "text": "相等的直角边给出恰好为1的比值，这是[[45^\\circ]]参考角的标志。"
          },
          {
            "kind": "h3",
            "text": "示例4：邻边较短的三角形"
          },
          {
            "kind": "p",
            "text": "已知[[b=6\\text{ m}]]和[[a=8\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cot(A)=6/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cot(A)=0.75}]]"
          },
          {
            "kind": "p",
            "text": "结果小于1，因为对边是较长的直角边，所以参考角大于[[45^\\circ]]。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-applications": {
        "h2": "余切比的实际应用示例",
        "blocks": [
          {
            "kind": "p",
            "text": "余切是一个数学比值，不是带有单位的物理量。它的实际价值在于比较水平距离与垂直高度、检查三角形几何形状，以及使用那些明确要求“邻边除以对边”的公式。每个示例都假设一个简化的直角三角形，这些比值单独都不能解决安全、强度或规范合规方面的问题。"
          },
          {
            "kind": "h3",
            "text": "示例5：求梯子的距离高度比"
          },
          {
            "kind": "p",
            "text": "一架梯子靠在垂直墙面上。它的底部距墙3米，顶端抵达墙上4米高处。水平距离是邻边[[b=3\\text{ m}]]，垂直高度是对边[[a=4\\text{ m}]]。[[\\cot(A)=3/4]]，即[[\\boxed{\\cot(A)=0.75}]]：水平距离是垂直高度的75%。这个比值描述的是梯子的几何形状，不能判断梯子摆放是否安全。"
          },
          {
            "kind": "h3",
            "text": "示例6：计算屋顶的距离高度比"
          },
          {
            "kind": "p",
            "text": "一段屋顶的水平距离为4米，垂直高度为3米。这里[[b=4\\text{ m}]]，[[a=3\\text{ m}]]。[[\\cot(A)=4/3]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]：水平距离约为垂直高度的1.3333倍。这个比值不是完整的结构或屋顶规范评估。"
          },
          {
            "kind": "h3",
            "text": "示例7：评估坡道的余切比"
          },
          {
            "kind": "p",
            "text": "一个简化坡道的水平距离为9米，垂直高度为0.75米。取[[b=9\\text{ m}]]和[[a=0.75\\text{ m}]]：[[\\cot(A)=9/0.75]]，即[[\\boxed{\\cot(A)=12}]]。水平距离是垂直高度的12倍，这是缓坡的标志。仅凭比值不能判断无障碍通行或建筑规范合规。"
          },
          {
            "kind": "h3",
            "text": "示例8：一次测量作业"
          },
          {
            "kind": "p",
            "text": "一个简化测量三角形的水平距离为40米，垂直高差为30米。取[[b=40\\text{ m}]]和[[a=30\\text{ m}]]：[[\\cot(A)=40/30]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]。该比值将水平距离与垂直高差直接比较。实际测量可能还需要额外的测量值、修正和仪器操作。"
          },
          {
            "kind": "h3",
            "text": "示例9：支撑电线杆的拉线"
          },
          {
            "kind": "p",
            "text": "一条拉线将电线杆与地面锚固点相连。锚固点水平距杆12米，连接点高出地面5米。取[[b=12\\text{ m}]]和[[a=5\\text{ m}]]：[[\\cot(A)=12/5]]，即[[\\boxed{\\cot(A)=2.4}]]。水平距离是垂直间距的2.4倍。这个比值不能确定拉线张力、锚固强度或结构安全。"
          },
          {
            "kind": "h3",
            "text": "示例10：理解楼梯的距离高度比"
          },
          {
            "kind": "p",
            "text": "一个简化楼梯的水平距离为4米，垂直高度为3米。取[[b=4\\text{ m}]]和[[a=3\\text{ m}]]：[[\\cot(A)=4/3]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]。水平距离约为垂直高度的1.3333倍。本例描述的是理想化的对角线，不能验证楼梯尺寸或规范合规。"
          },
          {
            "kind": "h3",
            "text": "示例11：起重机吊臂的水平与垂直分量"
          },
          {
            "kind": "p",
            "text": "一个简化的起重机吊臂形成直角三角形，水平投影6米，垂直高度8米。取[[b=6\\text{ m}]]和[[a=8\\text{ m}]]：[[\\cot(A)=6/8]]，即[[\\boxed{\\cot(A)=0.75}]]。水平投影是垂直分量的75%。该比值不能确定起重能力或作业安全。"
          },
          {
            "kind": "h3",
            "text": "示例12：一段直线飞行航段"
          },
          {
            "kind": "p",
            "text": "对于一个简化的飞行航段，飞机沿直线路径飞行，水平位移4公里，垂直增量3公里。取[[b=4\\text{ km}]]和[[a=3\\text{ km}]]：[[\\cot(A)=4/3]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]。水平位移约为垂直增量的1.3333倍。这是一个理想化的几何模型，不是完整的飞行导航计算。"
          },
          {
            "kind": "h3",
            "text": "示例13：斜向机械撑杆"
          },
          {
            "kind": "p",
            "text": "一根斜向撑杆的水平偏移为1.2米，垂直高度为1.6米。取[[b=1.2\\text{ m}]]和[[a=1.6\\text{ m}]]：[[\\cot(A)=1.2/1.6]]，即[[\\boxed{\\cot(A)=0.75}]]。水平偏移是垂直高度的75%。该比值不能确定撑杆的强度或适用性。"
          },
          {
            "kind": "h3",
            "text": "示例14：一段笔直的徒步路段"
          },
          {
            "kind": "p",
            "text": "一段简化笔直的徒步路段，水平位移80米，垂直增量60米。取[[b=80\\text{ m}]]和[[a=60\\text{ m}]]：[[\\cot(A)=80/60]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]。水平位移约为高程增量的1.3333倍。实际小径可能有弯曲和变化的坡度。"
          },
          {
            "kind": "h3",
            "text": "示例15：雨篷支架"
          },
          {
            "kind": "p",
            "text": "一个斜向雨篷支架的水平投影为2.4米，垂直高度为1.8米。取[[b=2.4\\text{ m}]]和[[a=1.8\\text{ m}]]：[[\\cot(A)=2.4/1.8]]，即[[\\boxed{\\cot(A)\\approx1.3333}]]。该比值描述水平投影相对于垂直高度的关系。此计算不能确定结构适用性。"
          },
          {
            "kind": "h3",
            "text": "示例16：跨越两种高度的缆线"
          },
          {
            "kind": "p",
            "text": "一条笔直缆线在两个点之间水平跨越24米，垂直高差7米。取[[b=24\\text{ m}]]和[[a=7\\text{ m}]]：[[\\cot(A)=24/7]]，即[[\\boxed{\\cot(A)\\approx3.4286}]]。水平间距约为垂直高差的3.4286倍。模型假设两端点之间为直线。"
          },
          {
            "kind": "h3",
            "text": "实际示例对比"
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "规律始终成立：当邻边远大于对边时比值大，当对边占主导时比值小。"
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["场景", "邻边 b", "对边 a", "余切公式", "计算结果", "含义"],
            "rows": [
              ["梯子", "3 m", "4 m", "3/4", "0.75", "水平距离是垂直高度的75%"],
              ["屋顶", "4 m", "3 m", "4/3", "1.3333", "水平距离是垂直高度的1.3333倍"],
              ["坡道", "9 m", "0.75 m", "9/0.75", "12", "水平距离是垂直高度的12倍"],
              ["测量", "40 m", "30 m", "40/30", "1.3333", "距离是高差的1.3333倍"],
              ["拉线", "12 m", "5 m", "12/5", "2.4", "距离是高度的2.4倍"],
              ["楼梯", "4 m", "3 m", "4/3", "1.3333", "水平距离是垂直高度的1.3333倍"],
              ["吊臂", "6 m", "8 m", "6/8", "0.75", "水平投影是垂直分量的75%"],
              ["飞行航段", "4 km", "3 km", "4/3", "1.3333", "水平位移是垂直增量的1.3333倍"],
              ["撑杆", "1.2 m", "1.6 m", "1.2/1.6", "0.75", "水平偏移是垂直高度的75%"],
              ["徒步路段", "80 m", "60 m", "80/60", "1.3333", "位移是高程增量的1.3333倍"],
              ["雨篷支架", "2.4 m", "1.8 m", "2.4/1.8", "1.3333", "投影是垂直高度的1.3333倍"],
              ["缆线", "24 m", "7 m", "24/7", "3.4286", "水平间距是高差的3.4286倍"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "四个面板：梯子比值0.75，屋顶1.3333，坡道12，测量1.3333，每个都有标注的直角三角形",
            "caption": "四个实际计算：梯子、屋顶、坡道和测量，每个都有三角形、公式和比值。"
          }
        ]
      },
      "cot-angle": {
        "h2": "理解余切与角度大小的关系",
        "blocks": [
          {
            "kind": "p",
            "text": "余切随锐角的增大而减小。小角度使邻边远长于对边，因此比值大；当角[[A]]向[[90^\\circ]]张开时，对边占主导，比值向0下降。下面的验证参考值展示了这一规律："
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "表格中的测量值是示意性的：决定角度的是比值，而非绝对长度。当角度接近[[0^\\circ]]时比值无限制地增大，接近[[90^\\circ]]时趋向0，对每个有效三角形都保持为正有限数。",
          "计算器不接受角度输入；验证结果时，这些参考值用作方向指引和检验值。"
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["角 A", "邻边 b", "对边 a", "余切比"],
            "rows": [
              ["30 度", "sqrt(3)", "1", "约 1.7321"],
              ["45 度", "1", "1", "1"],
              ["60 度", "1", "sqrt(3)", "约 0.5774"],
              ["75 度", "1", "约 3.7321", "约 0.2679"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30度、45度、60度的三个三角形，余切值分别为1.7321、1、0.5774；角度增大时余切减小",
            "caption": "当角A增大时，对边在邻边中所占的比例越来越大，因此cot(A)减小。"
          }
        ]
      },
      "cot-recover": {
        "h2": "已知余切时如何求角度",
        "blocks": [
          {
            "kind": "p",
            "text": "余切比本身不是角度。当比值已知而需要求角度时，逆三角函数可以填补这一空白。对于直角三角形中的正余切比，取倒数恢复正切比，再应用反正切："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{1}{\\cot(A)}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "同样，因为[[\\tan(A)=a/b]]："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
          },
          {
            "kind": "h3",
            "text": "解题示例"
          },
          {
            "kind": "p",
            "text": "已知[[\\cot(A)=4/3]]：倒数为[[\\tan(A)=3/4]]，因此[[A=\\tan^{-1}(3/4)]]，且[[\\boxed{A\\approx36.87^\\circ}]]。按反正切键之前，先将科学计算器设为角度模式。这是单独的角度计算；本页的余切比计算器输入边长、返回比值，从不返回角度。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-mistakes": {
        "h2": "计算余切时的常见错误",
        "blocks": [],
        "steps": [
          "<strong>把公式写成[[a/b]]而不是[[b/a]]。</strong>这样算出的是正切。改正：把邻边放在上面。",
          "<strong>把余切与正切混淆。</strong>对3-4-5三角形报出0.75。改正：正切是对边比邻边；余切是翻转后的分数。",
          "<strong>把余切与余弦混淆。</strong>使用[[b/c]]。改正：余弦需要斜边；余切从不涉及它。",
          "<strong>用斜边代替两条直角边之一。</strong>计算[[b/c]]或[[c/a]]。改正：分母是对边[[a]]，不是[[c]]。",
          "<strong>把邻边和对边弄混。</strong>选错了边。改正：从角[[A]]出发追踪：与它相邻的边是邻边，对面的边是对边。",
          "<strong>忘记边标签取决于参考角。</strong>使用为角[[B]]画的标签。改正：参考角每变一次就重新标注。",
          "<strong>以为余切必须在0和1之间。</strong>把2.4或12当成错误。改正：这些值完全正常；只有正弦和余弦被限制在1以内。",
          "<strong>以为余切等于1表示三角形无效。</strong>改正：[[\\cot(A)=1]]只表示两条直角边相等、角度为[[45^\\circ]]，是一个完全有效的三角形。",
          "<strong>给比值带上米或厘米单位。</strong>写成1.3333 m。改正：单位已经约掉了，应报告纯数字。",
          "<strong>输入零或负的边长。</strong>除以零或得到无意义的负比值。改正：只使用正长度。",
          "<strong>混用测量单位。</strong>米除以厘米会把比值歪曲100倍。改正：先把两条边换算成同一单位。",
          "<strong>过早四舍五入。</strong>验证前把[[4/3]]四舍五入成1.33会引入可避免的误差。改正：保留多余位数到最后一步。",
          "<strong>把余切当成以度为单位的角度。</strong>把1.3333读成1.3333度。改正：它是比值；求角度需要反正切。",
          "<strong>把倒数正切与反正切混淆。</strong>需要[[\\tan^{-1}(a/b)]]时写成[[1/\\tan(A)]]，或反之。改正：倒数翻转分数；反函数求出角度。",
          "<strong>以为余切值决定三角形的大小。</strong>两个差别很大的三角形可以共享[[\\cot(A)=1.3333]]。改正：比值固定形状，不固定尺寸。"
        ],
        "closingParagraphs": [
          "<strong>错误与正确</strong>",
          "已知[[b=4]]和[[a=3]]：",
          "错误：[[3/4=0.75]]。这是正切比，不是余切。",
          "正确：[[\\cot(A)=4/3\\approx1.3333]]。验证：[[\\tan(A)=3/4=0.75]]且[[1/0.75\\approx1.3333]]，这证实了倒数关系。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-verify": {
        "h2": "如何验证余切结果是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "有效的非退化直角三角形要求直角边为正数，即[[a \\gt 0]]和[[b \\gt 0]]，因此余切结果必须是一个正的有限数："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cot(A)=\\frac{b}{a} \\gt 0}]]]"
          },
          {
            "kind": "p",
            "text": "两个测量值必须使用兼容的单位。大于1、等于1或小于1的结果都可能有效；与正弦和余弦不同，余切不受1的限制。"
          },
          {
            "kind": "h3",
            "text": "方法1：检查正切的倒数"
          },
          {
            "kind": "p",
            "text": "验证[[\\tan(A)=a/b]]，再确认[[\\cot(A)=1/\\tan(A)]]。取[[a=3]]和[[b=4]]：[[\\tan(A)=3/4=0.75]]，因此[[\\cot(A)=1/0.75\\approx1.3333}]]。两条路径不吻合说明分数写反了或边标错了。"
          },
          {
            "kind": "h3",
            "text": "方法2：检查勾股定理"
          },
          {
            "kind": "p",
            "text": "如果斜边已知或需要，计算[[c=\\sqrt{a^2+b^2}]]。对于[[a=3]]和[[b=4]]：[[c=\\sqrt{9+16}=5]]，且[[3^2+4^2=5^2]]。这证实边长构成真正的直角三角形。此处斜边是验证值，不是主要余切公式的一部分。"
          },
          {
            "kind": "h3",
            "text": "方法3：检查角度关系"
          },
          {
            "kind": "p",
            "text": "对于已知的余切比，用[[A=\\tan^{-1}(a/b)]]求出角度。取[[a=3]]和[[b=4]]：[[A\\approx36.87^\\circ]]。因为邻边长于对边，角度应落在[[45^\\circ]]以下；如果不是，边标签很可能弄反了。四舍五入可能带来微小差异。"
          }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cot-vs": {
        "h2": "余切与正切、正弦和余弦",
        "blocks": [
          {
            "kind": "p",
            "text": "每个比值比较的是不同的边对，使用相同的参考角和边标签："
          }
        ],
        "steps": [],
        "closingParagraphs": [
          "余切与正切互为倒数：[[\\cot(A)=1/\\tan(A)]]。若[[\\tan(A)=0.75]]，则[[\\cot(A)\\approx1.3333}]]。当公式要求邻边除以对边、处理距离高度关系，或只知道两条直角边时选择余切；高度比距离选正切，对边比斜边选正弦，邻边比斜边选余弦。",
          "相邻的比值请参见<a href=\"/sine-ratio-calculator/\">正弦比计算器</a>、<a href=\"/cosine-ratio-calculator/\">余弦比计算器</a>、<a href=\"/tangent-ratio-calculator/\">正切比计算器</a>、<a href=\"/secant-ratio-calculator/\">正割比计算器</a>和<a href=\"/cosecant-ratio-calculator/\">余割比计算器</a>。"
        ],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["比值", "公式", "比较对象"],
            "rows": [
              ["正弦", "sin(A) = a/c", "对边与斜边"],
              ["余弦", "cos(A) = b/c", "邻边与斜边"],
              ["正切", "tan(A) = a/b", "对边与邻边"],
              ["余切", "cot(A) = b/a", "邻边与对边"],
              ["正割", "sec(A) = c/b", "斜边与邻边"],
              ["余割", "csc(A) = c/a", "斜边与对边"]
            ]
          }
        ],
        "figures": []
      },
      "cot-related": {
        "h2": "探索相关三角计算器",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
          {
            "name": "正弦比计算器",
            "desc": "用对边和斜边求正弦比。"
          },
          {
            "name": "余弦比计算器",
            "desc": "用邻边和斜边求余弦比。"
          },
          {
            "name": "正切比计算器",
            "desc": "用对边和邻边求正切比。"
          },
          {
            "name": "正割比计算器",
            "desc": "用斜边和邻边求正割比。"
          },
          {
            "name": "余割比计算器",
            "desc": "用斜边和对边求余割比。"
          },
          {
            "name": "直角三角形角度计算器",
            "desc": "用边长求锐角。"
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关三角计算器",
    "faqs": [
      {
        "question": "直角三角形的余切公式是什么？",
        "answer": "cot(A) = b / a：用角A的邻边除以角A的对边。当邻边为4厘米、对边为3厘米时，结果为4/3，约等于1.3333。"
      },
      {
        "question": "余切与正切有什么关系？",
        "answer": "余切是正切的倒数：cot(A) = 1 / tan(A)。若tan(A) = 3/4 = 0.75，则cot(A) = 4/3，约等于1.3333。两个比值从相反的角度描述同一个三角形，倒数检查是验证结果最快的方法。"
      },
      {
        "question": "余切和余弦有什么区别？",
        "answer": "余切用邻边除以对边（b/a），只使用两条直角边。余弦用邻边除以斜边（b/c）。余切是正切的倒数，而不是余弦的倒数；这个区别是初等三角学中最常考的误区之一。"
      },
      {
        "question": "余切可以大于1吗？",
        "answer": "可以。余切没有0到1的上限，因为除法中不涉及斜边。当邻边长于对边时，结果大于1：对于30度的角，cot(30 deg)约等于1.7321。2.4、12或任何正有限数都是可能的。"
      },
      {
        "question": "余切值为1意味着什么？",
        "answer": "邻边与对边长度相等，因此三角形在参考角处为等腰三角形，角A为45度。邻边6厘米、对边6厘米可得cot(A) = 6/6 = 1。"
      },
      {
        "question": "余切可以小于1吗？",
        "answer": "可以，只要对边长于邻边。邻边6米、对边8米可得cot(A) = 6/8 = 0.75，此时参考角大于45度。"
      },
      {
        "question": "余切有测量单位吗？",
        "answer": "没有。两个输入都是相同单位的长度，单位被约掉了：4 m / 3 m = 4/3，正如400 cm / 300 cm = 4/3。余切应报告为纯无量纲数，绝不附带度、米或英尺。"
      },
      {
        "question": "如何从边长计算余切？",
        "answer": "用相同单位测量邻边b和对边a，确认两者都为正数，然后相除：cot(A) = b / a。在本页的第一个输入框中输入邻边，第二个输入框中输入对边，选择兼容的单位，点击“计算cot(A)”。"
      },
      {
        "question": "如何从余切比求角度？",
        "answer": "取倒数得到正切比，再应用反正切：A = tan^-1(a / b)。对于cot(A) = 4/3，正切比为3/4，因此A = tan^-1(0.75)，约等于36.87度。先将科学计算器设为角度模式。本页的计算器返回比值，不返回角度。"
      },
      {
        "question": "余切计算器需要斜边吗？",
        "answer": "不需要。基本的余切比只使用两条互相垂直的边，斜边从不进入公式。只有在后续使用正弦、余弦、正割或余割，或用勾股定理验证三角形时，斜边才变得重要。"
      },
      {
        "question": "从水平距离和垂直高度来看，余切是什么意思？",
        "answer": "当角A从水平方向测量时，cot(A)是水平距离除以垂直高度。余切为0.75意味着水平距离是垂直高度的75%；余切为12意味着距离是高度的十二倍。正切是翻转后的同一概念：高度除以距离。"
      },
      {
        "question": "什么时候用余切而不是正切？",
        "answer": "当公式或步骤明确要求邻边除以对边、比较水平距离与垂直高度，或已知边就是两条直角边时，使用余切。如果已知关系是高度比距离，或对边比邻边，正切是直接的选择。"
      }
    ],
    "conclusion": {
      "h2": "自信地使用余切比",
      "paragraphs": [
        "余切是正切的翻转形式：用邻边除以对边，就描述了三角形的距离高度形状。公式[[\\cot(A)=b/a]]只需要两个测量值，答案恒为正的无量纲数，根据哪条边更长可以大于、等于或小于1。需要角度本身时，[[A=\\tan^{-1}(a/b)]]可以把它求出来。无论是梯子、屋顶、坡道，还是教科书上的3-4-5，方法从不变：确定邻边，确定对边，相除，再用正切的倒数验证。"
      ]
    }
  }
};
