/**
 * cosecantGuideTranslations.batch3.ts
 * Translations of the Cosecant Ratio Calculator guide (CosecantRatioGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language (mirrors cosecantGuideTranslations.batch1.ts):
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (14 entries: csc-intro, csc-triangle, csc-whatis, csc-formula,
 *   csc-howto, csc-examples, csc-applications, csc-angle, csc-recover,
 *   csc-mistakes, csc-verify, csc-vs, csc-faq, csc-related)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   listItems, related ({name, desc}), tables, figures ({alt, caption})
 * - faqHeading, relatedHeading
 * - faqs (12 question/answer pairs)
 * - conclusion (h2, paragraphs)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. URLs are never
 * translated. No em dashes. Arabic uses RTL-appropriate text.
 */

export const COSECANT_TRANSLATIONS_BATCH3 = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "csc-intro": "Apa Itu Kalkulator Rasio Cosecan?",
      "csc-triangle": "Memahami Hipotenusa dan Sisi Depan",
      "csc-whatis": "Memahami Cosecan dalam Trigonometri",
      "csc-formula": "Rumus Cosecan Dijelaskan Langkah demi Langkah",
      "csc-howto": "Cara Menggunakan Kalkulator",
      "csc-examples": "Contoh Langkah demi Langkah",
      "csc-applications": "Contoh dalam Kehidupan Nyata",
      "csc-angle": "Cosecan dan Ukuran Sudut",
      "csc-recover": "Menemukan Hipotenusa dengan Cosecan",
      "csc-mistakes": "Kesalahan Umum",
      "csc-verify": "Memeriksa Hasil Anda",
      "csc-vs": "Cosecan vs. Rasio Lain",
      "csc-faq": "FAQ",
      "csc-related": "Kalkulator Terkait"
    },
    "sections": {
      "csc-intro": {
        "h2": "Apa Itu Kalkulator Rasio Cosecan?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator rasio cosecan mencari cosecan dari sudut lancip dalam segitiga siku-siku dari dua panjang sisi: hipotenusa [[c]] dan sisi depan [[a]]. Kalkulator ini membagi sisi pertama dengan sisi kedua, menghasilkan [[\\csc(A)=c/a]]. Cosecan adalah kebalikan dari sinus: di mana sinus memberikan sisi depan dibagi hipotenusa, cosecan memberikan hipotenusa dibagi sisi depan, sehingga kedua nilai tersebut selalu dikalikan menjadi 1."
          },
          {
            "kind": "p",
            "text": "Kalkulator tidak memerlukan masukan sudut maupun sisi samping, karena rasio [[c/a]] sepenuhnya ditentukan oleh kedua panjang tersebut. Jawabannya adalah bilangan murni tanpa satuan, karena sentimeter dibagi sentimeter saling meniadakan, dan rasio ini menggambarkan hipotenusa sebagai kelipatan dari sisi depan. Untuk hipotenusa 5 cm dan sisi depan 3 cm, [[\\csc(A)=5/3\\approx1.6667]], artinya hipotenusa sekitar 1,67 kali sisi depan."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Memahami Hipotenusa dan Sisi Depan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut tepat [[90^\\circ]], yaitu sudut antara dua garis yang saling tegak lurus, seperti dinding yang bertemu lantai yang rata. Hipotenusa terletak berhadapan dengan sudut siku-siku itu dan selalu menjadi sisi terpanjang. Karena ketiga sudut harus berjumlah [[180^\\circ]], kedua sudut sisanya berbagi tepat 90 derajat sehingga keduanya lancip. Cosecan termasuk dalam geometri ini karena rumusnya membandingkan dua sisi tersebut, hipotenusa dan sisi depan, dalam hubungan yang tetap."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Depan?"
          },
          {
            "kind": "p",
            "text": "Sisi depan adalah sisi yang tepat berhadapan dengan sudut acuan [[A]]: sisi ini adalah satu-satunya sisi segitiga yang tidak menyentuh titik sudut [[A]]. Sisi mana yang dianggap sebagai sisi depan bergantung pada sudut acuan, sehingga beralih dari sudut [[A]] ke sudut [[B]] akan menukar label kedua kaki segitiga. Dalam soal-soal praktis, sisi depan sering mewakili tinggi vertikal, perbedaan ketinggian, atau kaki tegak lurus suatu struktur. Menentukan sudut acuan dengan benar itu penting, karena sudut yang salah akan menukar sisi depan dan sisi samping secara diam-diam."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku, dan dua fakta mengidentifikasinya dalam diagram apa pun, bagaimanapun segitiga diputar: sisi ini menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan sisi ini adalah sisi terpanjang. Dalam segitiga yang sah dan tidak degenerasi, sisi ini selalu lebih panjang daripada kedua kakinya. Dalam keadaan nyata, sisi ini dapat berupa tangga yang bersandar pada dinding, jarak miring, garis pandang, kasau atap, atau penyangga diagonal."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Samping?"
          },
          {
            "kind": "p",
            "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut [[A]] tanpa menjadi hipotenusa. Sisi ini tidak berperan dalam rumus cosecan, itulah sebabnya kalkulator tidak pernah memintanya. Sisi [[b]] menjadi relevan untuk kosinus, tangen, sekan, dan kotangen, jadi ingatlah sisi ini ketika rasio yang diinginkan berbeda."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segitiga siku-siku dengan sudut A di kiri bawah, sisi depan a berwarna emas, sisi samping b berwarna biru, hipotenusa c berwarna merah muda, rumus csc(A)=c/a",
            "caption": "Sudut A berada di kiri bawah; cosecan menggunakan hipotenusa c dan sisi depan a, bukan sisi samping b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Memahami Cosecan dalam Trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecan membandingkan sisi miring utuh dari segitiga siku-siku dengan sisi yang berhadapan dengan sudut acuan:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\csc(A)]] adalah cosecan dari sudut [[A]], [[c]] adalah hipotenusa, dan [[a]] adalah sisi depan. Rasio ini menjawab satu pertanyaan: berapa banyak panjang sisi depan yang muat dalam hipotenusa?"
          },
          {
            "kind": "h3",
            "text": "Cosecan sebagai Kebalikan dari Sinus"
          },
          {
            "kind": "p",
            "text": "Mulailah dengan rumus sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Mengambil kebalikannya membalik pecahan, memindahkan hipotenusa ke pembilang dan sisi depan ke penyebut:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Karena cosecan didefinisikan sebagai kebalikan dari sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Pemeriksaan konkret membuat pembalikan ini terlihat jelas. Dengan [[\\sin(A)=3/5=0.6]], kebalikannya adalah [[1/0.6=5/3\\approx1.6667]], yang tepat sama dengan cosecan. Kedua bilangan menggambarkan segitiga yang sama dari sudut pandang yang saling berkebalikan, dan mengalikan keduanya selalu menghasilkan 1."
          },
          {
            "kind": "h3",
            "text": "Mengapa Cosecan Lebih Besar dari 1"
          },
          {
            "kind": "p",
            "text": "Hipotenusa lebih panjang daripada sisi depan, sehingga [[c \\gt a]] dan oleh karena itu [[c/a \\gt 1]]. Pemeriksaan numerik cepat: dengan [[c=10]] dan [[a=8]], rasionya adalah [[10/8=1.25]], di atas 1 sebagaimana mestinya. Untuk sudut lancip yang besar, sisi depan hampir sepanjang hipotenusa, sehingga rasio berada tepat di atas 1, tetapi tidak akan pernah sama dengan 1 dalam segitiga siku-siku yang sah dan tidak degenerasi."
          },
          {
            "kind": "h3",
            "text": "Apa Arti Nilai Cosecan?"
          },
          {
            "kind": "p",
            "text": "Cosecan sebesar 2 berarti hipotenusa tepat dua kali sisi depan; 1,6667 berarti sekitar 1,6667 kali. Bacalah angka itu sebagai pengali, bukan sudut: angka ini tidak membawa derajat maupun meter atau kaki, karena kedua satuan sisi saling meniadakan dalam pembagian."
          },
          {
            "kind": "h3",
            "text": "Mengapa Cosecan Berbeda dari Kosinus?"
          },
          {
            "kind": "p",
            "text": "Namanya mirip, tetapi hubungannya berbeda:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kosinus membandingkan sisi samping dengan hipotenusa, sedangkan cosecan membandingkan hipotenusa dengan sisi depan. Pasangan yang perlu diingat: cosecan adalah kebalikan dari sinus, sedangkan sekan adalah kebalikan dari kosinus. Mencampuradukkan kedua kofungsi ini adalah salah satu kesalahan paling umum dalam trigonometri."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga tahap: segitiga 3-4-5, sinus 3/5=0.6, cosecan 5/3=1.6667, identitas csc(A)=1/sin(A)",
            "caption": "Sinus dan cosecan saling berkebalikan: membalik 3/5 menghasilkan 5/3, dan csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Rumus Cosecan Dijelaskan Langkah demi Langkah",
        "blocks": [
          {
            "kind": "p",
            "text": "Rumus ini tidak dibuat-buat; rumus ini mengikuti langsung dari definisi sinus. Mulailah dengan rasio sinus:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Ambil kebalikan dari kedua ruas. Pembilang dan penyebut bertukar tempat:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Karena cosecan adalah kebalikan dari sinus menurut definisi:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenusa muncul di pembilang karena ia adalah penyebut dari sinus; sisi depan turun ke penyebut karena ia adalah pembilang dari sinus. Itulah seluruh penurunannya."
          },
          {
            "kind": "h3",
            "text": "Contoh Lengkap: Segitiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis rumusnya. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Substitusikan pengukurannya. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bagi. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Verifikasi menggunakan sinus. [[\\sin(A)=3/5=0.6]], dan [[1/0.6\\approx1.6667]]. Kedua jalur menghasilkan nilai yang sama karena keduanya adalah pandangan berkebalikan dari satu segitiga. Perhatikan bahwa 1,6667 adalah desimal yang dibulatkan; [[5/3]] adalah rasio tepat untuk panjang sisi ini."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Cara Menggunakan Kalkulator Rasio Cosecan",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah ini sesuai dengan antarmuka sebenarnya pada halaman ini."
          },
          {
            "kind": "p",
            "text": "Perhatikan apa yang tidak pernah diminta kalkulator: tidak ada sudut [[A]] dalam derajat, tidak ada sisi samping, dan tidak ada nilai sinus. Dua panjang sisi adalah masukan yang lengkap karena rasio [[c/a]] tidak bergantung pada hal lain."
          }
        ],
        "steps": [
          "<strong>Tentukan sudut acuan [[A]].</strong> Putuskan sudut lancip mana yang digambarkan rasio, karena sisi depan didefinisikan relatif terhadapnya.",
          "<strong>Temukan hipotenusa [[c]].</strong> Ini adalah sisi yang berhadapan dengan sudut siku-siku dan sisi terpanjang segitiga.",
          "<strong>Temukan sisi depan [[a]].</strong> Ini adalah sisi yang tepat berhadapan dengan sudut [[A]].",
          "<strong>Ukur atau peroleh kedua panjang sisi.</strong> Gunakan pita ukur, gambar, atau data yang diberikan, dengan satuan yang sama untuk keduanya.",
          "<strong>Masukkan hipotenusa pada kolom masukan pertama.</strong> Ini adalah nilai yang lebih besar dari keduanya.",
          "<strong>Masukkan sisi depan pada kolom masukan kedua.</strong> Ini adalah nilai yang lebih kecil dari keduanya.",
          "<strong>Pilih satuan yang kompatibel dengan pemilih satuan.</strong> Kedua kolom harus menggunakan satuan yang sama agar pembagiannya bermakna.",
          "<strong>Pastikan kedua nilai positif.</strong> Panjang nol atau negatif tidak dapat membentuk segitiga.",
          "<strong>Periksa bahwa hipotenusa lebih panjang daripada sisi depan.</strong> Jika tidak, masukannya tertukar atau salah label.",
          "<strong>Klik Hitung csc(A).</strong> Alat ini membagi hipotenusa dengan sisi depan.",
          "<strong>Baca rasio cosecan yang dihasilkan.</strong> Ini adalah bilangan tak berdimensi yang menggambarkan hipotenusa sebagai kelipatan sisi depan.",
          "<strong>Verifikasi bahwa jawabannya lebih besar dari 1.</strong> Nilai 1 atau di bawahnya menandakan kesalahan masukan.",
          "<strong>Gunakan Reset untuk menghapus masukan</strong> dan memulai perhitungan lain."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Contoh Langkah demi Langkah Menghitung Cosecan",
        "blocks": [
          {
            "kind": "p",
            "text": "Keempat contoh ini membangun keterampilan inti sebelum aplikasi dunia nyata. Masing-masing mengikuti pola yang sama: tulis rumus, substitusikan, bagi."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segitiga Siku-Siku 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenusa sekitar 1,6667 kali sisi depan. Sisi samping muncul dalam data yang diberikan hanya untuk melengkapi segitiga; rumusnya mengabaikannya."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segitiga Siku-Siku 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Hasilnya melebihi 1 karena hipotenusa lebih panjang daripada sisi depan. Sisi samping 12 m tidak diperlukan untuk perhitungan ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segitiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut [[A=30^\\circ]], sisi depan adalah setengah hipotenusa. Dengan [[a=5\\text{ cm}]] dan [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Verifikasi: [[\\sin(30^\\circ)=0.5]], dan [[1/0.5=2]]. Nilai tepat ini layak dihafal karena segitiga 30-60-90 sering muncul dalam soal geometri."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segitiga dengan Sisi Depan 8 dan Hipotenusa 10"
          },
          {
            "kind": "p",
            "text": "Diketahui [[a=8\\text{ m}]] dan [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Rasio ini lebih dekat ke 1 daripada hasil 3-4-5 karena sisi depan merupakan proporsi hipotenusa yang lebih besar: 8/10 versus 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Contoh Kehidupan Nyata Menggunakan Rasio Cosecan",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecan adalah rasio matematis, bukan angka yang dilaporkan sendiri di lokasi kerja. Nilainya terletak pada penggambaran hubungan hipotenusa terhadap sisi depan, verifikasi perhitungan, dan pengisian rumus yang membutuhkan cosecan. Setiap contoh di bawah mengasumsikan segitiga siku-siku yang disederhanakan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Memahami Panjang Tangga Relatif terhadap Tingginya"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga 5,5 m mencapai 4,5 m ke atas dinding vertikal. Tangga adalah hipotenusa [[c=5.5\\text{ m}]]; jangkauan adalah sisi depan [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], sehingga [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Tangga itu sekitar 1,2222 kali tinggi vertikal, dan [[c=a\\times\\csc(A)]] memulihkan panjang tangga dari tinggi. Rasio ini hanya menggambarkan geometri, bukan keamanan tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Menghitung Rasio Cosecan Kasau Atap"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau atap 6,5 m memiliki kenaikan vertikal 4 m: kasau adalah hipotenusa miring [[c=6.5\\text{ m}]]; kenaikan adalah sisi depan [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], sehingga [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Kasau itu 1,625 kali kenaikan vertikal. Perhitungan ini tidak memverifikasi kesesuaian struktural atau kepatuhan desain atap."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Mengevaluasi Rasio Cosecan Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan memiliki panjang miring 9,5 m dan kenaikan vertikal 0,75 m: [[c=9.5\\text{ m}]] dan [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], sehingga [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Rasionya besar karena panjang miring jauh melebihi kenaikan vertikal, sebagaimana mestinya tanjakan yang landai. Rasio saja tidak menentukan aksesibilitas atau kepatuhan terhadap kode bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Garis Survei dengan Perbedaan Ketinggian yang Diketahui"
          },
          {
            "kind": "p",
            "text": "Pengukuran survei yang disederhanakan mencatat jarak garis lurus 50 m dan perbedaan vertikal 30 m: garis lurus adalah hipotenusa [[c=50\\text{ m}]]; dengan perbedaan vertikal sebagai sisi depan [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], sehingga [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Jarak miring sekitar 1,6667 kali komponen vertikal. Survei nyata dapat memerlukan koreksi tambahan di luar model sederhana ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Menghitung Rasio Kawat Penahan"
          },
          {
            "kind": "p",
            "text": "Sebuah kawat penahan 18 m memiliki pemisahan vertikal 10 m antara kedua ujungnya: kawat adalah hipotenusa [[c=18\\text{ m}]]; pemisahan adalah sisi depan [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], sehingga [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Kawat itu 1,8 kali pemisahan vertikal. Rasio tidak menentukan tegangan kawat, kekuatan jangkar, atau keamanan struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Mengevaluasi Rasio Balok Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah balok tangga 5 m yang disederhanakan memiliki kenaikan vertikal 2,8 m: balok adalah hipotenusa [[c=5\\text{ m}]]; kenaikan adalah sisi depan [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], sehingga [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Diagonalnya sekitar 1,7857 kali kenaikan vertikal: perhitungan geometri yang disederhanakan, bukan penilaian desain tangga yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Segmen Penerbangan Lurus Pesawat"
          },
          {
            "kind": "p",
            "text": "Sebuah pesawat menempuh 5 km sepanjang jalur lurus sambil naik 1,5 km: jalur adalah hipotenusa [[c=5\\text{ km}]]; kenaikan ketinggian adalah sisi depan [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], sehingga [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Jarak tempuh jauh melebihi kenaikan vertikal, itulah sebabnya rasionya besar. Ini adalah contoh ideal, bukan analisis lengkap dari jalur penerbangan yang berubah."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Penyangga Mekanis"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga diagonal panjangnya 1.700 mm dengan komponen vertikal 800 mm: penyangga adalah hipotenusa [[c=1700\\text{ mm}]]; komponen vertikal adalah sisi depan [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], sehingga [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Milimeter bekerja sama baiknya dengan meter ketika kedua sisi berbagi satuan. Rasio tidak menentukan kekuatan penyangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Lengan Derek"
          },
          {
            "kind": "p",
            "text": "Sebuah lengan derek 10 m yang disederhanakan memiliki komponen vertikal 8 m: lengan adalah hipotenusa [[c=10\\text{ m}]]; komponen vertikal adalah sisi depan [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], sehingga [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Panjang lengan hanya 1,25 kali komponen vertikalnya. Rasio tidak menentukan kapasitas angkat atau keamanan operasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Garis Pandang ke Puncak Pohon"
          },
          {
            "kind": "p",
            "text": "Garis pandang 20 m ke puncak pohon memiliki perbedaan vertikal 12 m dari ketinggian mata pengamat: garis pandang adalah hipotenusa [[c=20\\text{ m}]]; perbedaan vertikal adalah sisi depan [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], sehingga [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Jarak pandang sekitar 1,6667 kali perbedaan vertikal. Hasilnya tidak memberikan tinggi total pohon di atas tanah."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Tanjakan Lurus Jalur Pendakian"
          },
          {
            "kind": "p",
            "text": "Segmen pendakian lurus menanjak 100 m dengan kenaikan ketinggian 80 m: lereng adalah hipotenusa [[c=100\\text{ m}]]; kenaikan adalah sisi depan [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], sehingga [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Rasio berada dekat 1 karena komponen vertikal merupakan bagian besar dari lereng. Jalur pendakian nyata dapat memiliki gradien yang bervariasi."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Penyangga Kanopi"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga kanopi 3,5 m memiliki komponen vertikal 1,2 m: penyangga adalah hipotenusa [[c=3.5\\text{ m}]]; komponen vertikal adalah sisi depan [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], sehingga [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Penyangga itu sekitar 2,9167 kali komponen vertikalnya. Hasilnya tidak menentukan kesesuaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh-Contoh Praktis Dibandingkan"
          },
          {
            "kind": "p",
            "text": "Polanya konsisten: rasio besar ketika sisi depan merupakan pecahan kecil dari hipotenusa, dan mendekati 1 ketika keduanya hampir sama. Membaca cosecan sebagai pengali membuat setiap hasil bermakna."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situasi", "Hipotenusa c", "Sisi depan a", "Rumus cosecan", "Rasio terhitung", "Interpretasi"],
            "rows": [
              ["Tangga", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Tangga 1,2222 kali tingginya"],
              ["Kasau atap", "6.5 m", "4 m", "6.5/4", "1.625", "Kasau 1,625 kali kenaikannya"],
              ["Tanjakan", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Lereng 12,6667 kali kenaikannya"],
              ["Survei", "50 m", "30 m", "50/30", "1.6667", "Jarak 1,6667 kali penurunannya"],
              ["Kawat penahan", "18 m", "10 m", "18/10", "1.8", "Kawat 1,8 kali pemisahannya"],
              ["Balok tangga", "5 m", "2.8 m", "5/2.8", "1.7857", "Balok 1,7857 kali kenaikannya"],
              ["Segmen penerbangan", "5 km", "1.5 km", "5/1.5", "3.3333", "Jalur 3,3333 kali kenaikannya"],
              ["Penyangga mekanis", "1700 mm", "800 mm", "1700/800", "2.125", "Penyangga 2,125 kali komponennya"],
              ["Lengan derek", "10 m", "8 m", "10/8", "1.25", "Lengan 1,25 kali komponennya"],
              ["Garis pandang pohon", "20 m", "12 m", "20/12", "1.6667", "Garis pandang 1,6667 kali perbedaannya"],
              ["Tanjakan pendakian", "100 m", "80 m", "100/80", "1.25", "Lereng 1,25 kali kenaikannya"],
              ["Penyangga kanopi", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Penyangga 2,9167 kali komponennya"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: tangga 1.2222, kasau 1.625, tanjakan 12.6667, survei 1.6667 rasio cosecan dengan segitiga siku-siku",
            "caption": "Empat perhitungan praktis: setiap panel menunjukkan segitiga, rumus, dan rasio."
          }
        ]
      },
      "csc-angle": {
        "h2": "Memahami Hubungan antara Cosecan dan Ukuran Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosecan bergerak berlawanan arah dengan sudut. Ketika sudut lancip kecil, sisi depan pendek relatif terhadap hipotenusa, sehingga [[c/a]] besar. Seiring sudut membesar, sisi depan memanjang mendekati hipotenusa, dan rasio menyusut. Nilai acuan terverifikasi di bawah menunjukkan polanya:"
          },
          {
            "kind": "p",
            "text": "Seiring sudut mendekati [[90^\\circ]], sisi depan mendekati hipotenusa dan rasio mendekati 1, sambil tetap di atas 1 untuk setiap segitiga siku-siku yang sah dan tidak degenerasi. Baris 90 derajat hanyalah acuan batas, karena sudut [[A]] harus lancip. Seiring sudut mendekati [[0^\\circ]], sisi depan menyusut menuju nol dan rasio tumbuh tanpa batas. Rasio mendekati 1 menandakan sudut lancip yang relatif besar; rasio besar menandakan sudut yang relatif kecil."
          },
          {
            "kind": "p",
            "text": "Kalkulator tidak menerima masukan sudut; kalkulator menghitung rasio dari dua panjang sisi. Nilai acuan ini berfungsi sebagai orientasi dan sebagai nilai pemeriksaan saat memverifikasi hasil."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Sudut A", "Sinus sin(A)", "Cosecan csc(A)"],
            "rows": [
              ["30 derajat", "0.5", "2"],
              ["45 derajat", "0.7071", "1.4142"],
              ["60 derajat", "0.8660", "1.1547"],
              ["90 derajat", "1", "1, sebagai nilai batas"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai cosecan 2, 1.4142, 1.1547; rasio menurun seiring sudut membesar",
            "caption": "Seiring sisi depan menjadi bagian yang lebih besar dari hipotenusa, csc(A) bergerak lebih dekat ke 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Menggunakan Cosecan untuk Menemukan Hipotenusa",
        "blocks": [
          {
            "kind": "p",
            "text": "Rumusnya disusun ulang dengan rapi. Mulailah dengan:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kalikan kedua ruas dengan [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenusa adalah sisi depan dikalikan rasio cosecan. Dengan [[a=6\\text{ m}]] dan [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Hasilnya lebih panjang daripada sisi depan, sebagaimana mestinya setiap hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Cara Memulihkan Sisi Depan"
          },
          {
            "kind": "p",
            "text": "Menyelesaikan untuk [[a]] menghasilkan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[c=12\\text{ m}]] dan [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Ini adalah penyusunan ulang matematis dari rasio yang sama. Kalkulator pada halaman ini menghitung rasio itu sendiri; kalkulator tidak menyediakan mode pencarian hipotenusa atau pencarian sisi depan yang terpisah."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Kesalahan Umum saat Menghitung Cosecan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Salah Versus Benar"
          },
          {
            "kind": "p",
            "text": "Diketahui [[c=5]] dan [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Salah: [[3/5=0.6]]. Ini adalah rasio sinus, bukan rasio cosecan."
          },
          {
            "kind": "p",
            "text": "Benar: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Verifikasi: [[\\csc(A)=1/\\sin(A)]], dan [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Mencampuradukkan cosecan dengan sinus.</strong> Sinus adalah [[a/c]]; cosecan adalah [[c/a]]. Yang salah: melaporkan 0,6 untuk segitiga 3-4-5. Perbaikan: letakkan hipotenusa di atas.",
          "<strong>Membalik rumus menjadi [[a/c]] alih-alih [[c/a]].</strong> Yang salah: jawabannya adalah sinus, selalu di bawah 1. Perbaikan: periksa bahwa sisi yang lebih panjang adalah pembilang.",
          "<strong>Mencampuradukkan cosecan dengan sekan.</strong> Sekan adalah [[c/b]], kebalikan dari kosinus. Yang salah: menggunakan sisi samping. Perbaikan: cosecan berpasangan dengan sinus dan sisi depan.",
          "<strong>Menggunakan sisi samping alih-alih sisi depan.</strong> Yang salah: menghitung [[c/b]] karena keliru. Perbaikan: pastikan sisi yang berhadapan dengan sudut [[A]] sebelum membagi.",
          "<strong>Mengira cosecan diukur dalam derajat.</strong> Yang salah: menulis 1,6667 derajat. Perbaikan: rasio adalah bilangan murni, bukan sudut.",
          "<strong>Melaporkan rasio cosecan dengan meter atau sentimeter.</strong> Yang salah: satuannya sudah saling meniadakan. Perbaikan: hilangkan satuan dari jawaban.",
          "<strong>Menerima hasil kurang dari 1 untuk segitiga yang sah.</strong> Yang salah: mempercayai perhitungan dengan masukan tertukar. Perbaikan: hasil yang sah selalu melebihi 1.",
          "<strong>Memasukkan hipotenusa yang lebih pendek daripada sisi depan.</strong> Yang salah: masukan menggambarkan segitiga yang mustahil. Perbaikan: kolom hipotenusa harus memuat pengukuran yang lebih panjang.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Yang salah: pembagian dengan nol atau rasio negatif yang tidak bermakna. Perbaikan: gunakan panjang positif saja.",
          "<strong>Mencampur satuan pengukuran.</strong> Yang salah: sentimeter dibagi meter menggeser rasio sebesar faktor 100. Perbaikan: ubah kedua sisi ke satu satuan terlebih dahulu.",
          "<strong>Membulatkan terlalu dini.</strong> Yang salah: membulatkan [[5/3]] menjadi 1,67 sebelum mengalikan kembali menambah kesalahan yang bisa dihindari. Perbaikan: pertahankan pecahan atau digit tambahan hingga langkah terakhir.",
          "<strong>Mencampuradukkan sudut acuan dengan sudut lancip lainnya.</strong> Yang salah: label sisi depan dan sisi samping tertukar. Perbaikan: tandai sudut [[A]] pada diagram terlebih dahulu.",
          "<strong>Mengira rasio cosecan yang besar adalah sudut.</strong> Yang salah: membaca 12,6667 sebagai derajat. Perbaikan: ini adalah pengali, jadi hipotenusa adalah 12,6667 kali sisi depan.",
          "<strong>Mengira cosecan saja menentukan hipotenusa.</strong> Yang salah: berharap satu angka menghasilkan panjang. Perbaikan: rasio juga membutuhkan sisi depan, melalui [[c=a\\times\\csc(A)]].",
          "<strong>Mencampuradukkan kebalikan sinus dengan kebalikan kosinus.</strong> Yang salah: menggunakan sekan di tempat cosecan. Perbaikan: sinus berpasangan dengan cosecan; kosinus berpasangan dengan sekan."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Cara Memeriksa Apakah Hasil Cosecan Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segitiga siku-siku yang sah dan tidak degenerasi memerlukan:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Oleh karena itu [[c/a \\gt 1]]. Kedua pengukuran harus menggunakan satuan yang kompatibel, dan rasio yang dihitung harus melebihi 1. Hasil tepat 1 hanyalah nilai batas ketika sudut lancip mendekati 90 derajat, bukan hasil untuk segitiga yang sesungguhnya. Rasio di bawah 1 biasanya menunjukkan masukan terbalik, label sisi yang salah, atau pengukuran yang tidak kompatibel."
          },
          {
            "kind": "h3",
            "text": "Metode 1: Periksa Kebalikan Sinus"
          },
          {
            "kind": "p",
            "text": "Hitung [[\\sin(A)=a/c]], lalu [[\\csc(A)=1/\\sin(A)]]. Untuk segitiga 3-4-5, [[\\sin(A)=3/5=0.6]] dan [[1/0.6\\approx1.6667]], sesuai dengan pembagian langsung."
          },
          {
            "kind": "h3",
            "text": "Metode 2: Periksa Teorema Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi samping diketahui atau diperlukan, verifikasi [[b=\\sqrt{c^2-a^2}]]. Untuk [[c=5]] dan [[a=3]]: [[b=\\sqrt{25-9}=4]], dan [[3^2+4^2=5^2]]. Ini memastikan panjang sisi membentuk segitiga siku-siku."
          },
          {
            "kind": "h3",
            "text": "Metode 3: Periksa Rasio dengan Perkalian"
          },
          {
            "kind": "p",
            "text": "Verifikasi [[a\\times\\csc(A)\\approx c]]. Untuk [[a=3]] dan [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Selisih kecil dapat muncul ketika desimal yang ditampilkan dibulatkan; pecahan tepat menghilangkannya."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Cosecan vs. Sinus, Sekan, dan Rasio Trigonometri Lainnya",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap rasio membandingkan pasangan sisi yang berbeda:"
          },
          {
            "kind": "p",
            "text": "Pasangan kebalikan adalah sinus dengan cosecan dan kosinus dengan sekan: [[\\csc(A)=1/\\sin(A)]], sedangkan [[\\sec(A)=1/\\cos(A)]]. Cosecan dan sekan tidak dapat dipertukarkan. Sinus cocok untuk soal pengukuran langsung dengan sisi depan dan hipotenusa yang diketahui; cosecan cocok untuk rumus yang dibangun di sekitar kebalikan dan untuk memulihkan hipotenusa dari nilai cosecan yang diketahui."
          },
          {
            "kind": "p",
            "text": "Untuk rasio-rasio tetangga, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sinus</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sekan</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kotangen</a>, dan <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Trigonometri Segitiga Siku-Siku</a>. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segitiga Siku-Siku</a> membantu ketika panjang sisi itu sendiri yang tidak diketahui."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Rasio", "Rumus", "Yang dibandingkan"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Sisi depan terhadap hipotenusa"],
              ["Cosecan", "csc(A) = c/a", "Hipotenusa terhadap sisi depan"],
              ["Kosinus", "cos(A) = b/c", "Sisi samping terhadap hipotenusa"],
              ["Sekan", "sec(A) = c/b", "Hipotenusa terhadap sisi samping"],
              ["Tangen", "tan(A) = a/b", "Sisi depan terhadap sisi samping"],
              ["Kotangen", "cot(A) = b/a", "Sisi samping terhadap sisi depan"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Pertanyaan yang Sering Diajukan",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Jelajahi Kalkulator Trigonometri Terkait",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkulator Rasio Trigonometri Segitiga Siku-Siku",
            "desc": "Hitung keenam rasio trigonometri sekaligus di satu tempat."
          },
          {
            "name": "Kalkulator Rasio Sinus",
            "desc": "Temukan rasio sinus dari sisi depan dan hipotenusa."
          },
          {
            "name": "Kalkulator Rasio Sekan",
            "desc": "Temukan rasio sekan dari hipotenusa dan sisi samping."
          },
          {
            "name": "Kalkulator Rasio Kotangen",
            "desc": "Temukan rasio kotangen dari sisi samping dan sisi depan."
          },
          {
            "name": "Kalkulator Sisi Segitiga Siku-Siku",
            "desc": "Temukan panjang sisi yang tidak diketahui dari sudut atau teorema Pythagoras."
          },
          {
            "name": "Kalkulator Sudut Segitiga Siku-Siku",
            "desc": "Temukan sudut lancip dari panjang sisi yang diketahui."
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
        "question": "Apa rumus cosecan dalam segitiga siku-siku?",
        "answer": "Rumusnya adalah csc(A) = c / a: bagi hipotenusa dengan sisi yang berhadapan dengan sudut A. Untuk hipotenusa 5 dan sisi depan 3, hasilnya adalah 5/3, sekitar 1,6667. Nilai yang sama berasal dari identitas kebalikan csc(A) = 1 / sin(A)."
      },
      {
        "question": "Bagaimana hubungan cosecan dengan sinus?",
        "answer": "Cosecan adalah kebalikan dari sinus: csc(A) = 1 / sin(A). Sinus membagi sisi depan dengan hipotenusa; cosecan membalik pecahan itu. Keduanya menggambarkan segitiga yang sama, dan hasil kalinya selalu 1. Jika sin(A) = 0,6, maka csc(A) = 1 / 0,6, sekitar 1,6667."
      },
      {
        "question": "Mengapa cosecan lebih besar dari 1 dalam segitiga siku-siku yang sah?",
        "answer": "Dalam segitiga siku-siku yang sah dan tidak degenerasi, hipotenusa adalah sisi terpanjang, sehingga c melebihi a, dan bilangan yang lebih besar dibagi bilangan positif yang lebih kecil selalu di atas 1. Rasio 1 atau kurang menandakan masukan tertukar, label sisi yang salah, atau pengukuran yang mustahil."
      },
      {
        "question": "Apa perbedaan cosecan dan sekan?",
        "answer": "Cosecan membagi hipotenusa dengan sisi depan (c/a), sedangkan sekan membagi hipotenusa dengan sisi samping (c/b). Cosecan adalah kebalikan dari sinus; sekan adalah kebalikan dari kosinus. Keduanya menjawab pertanyaan yang berbeda, sehingga menukarnya memberikan jawaban yang salah kapan pun sisi depan dan sisi samping berbeda."
      },
      {
        "question": "Berapa cosecan dari sudut 30 derajat?",
        "answer": "Cosecan dari 30 derajat tepat 2, karena sisi yang berhadapan dengan 30 derajat adalah setengah hipotenusa: c/a = 2/1 = 2. Periksa: sin(30 derajat) = 0,5, dan 1 / 0,5 = 2. Ini adalah salah satu dari sedikit nilai cosecan yang layak dihafal."
      },
      {
        "question": "Apakah rasio cosecan memiliki satuan?",
        "answer": "Tidak. Baik hipotenusa maupun sisi depan diukur dalam satuan yang sama, sehingga satuannya saling meniadakan selama pembagian. Baik sisi dalam sentimeter, meter, maupun milimeter, rasio cosecan adalah bilangan murni tak berdimensi. Jangan pernah melaporkannya dengan derajat, meter, atau kaki."
      },
      {
        "question": "Bisakah cosecan kurang dari 1?",
        "answer": "Tidak untuk segitiga siku-siku yang sah dan tidak degenerasi. Karena hipotenusa lebih panjang daripada sisi depan, c/a harus melebihi 1. Hasil 1 atau kurang hampir selalu berarti kedua masukan tertukar, sehingga alat menghitung a/c (yaitu sinus) alih-alih c/a. Periksa kembali pengukuran mana yang merupakan hipotenusa."
      },
      {
        "question": "Bagaimana cara menghitung cosecan dari panjang sisi?",
        "answer": "Tentukan hipotenusa c dan sisi depan a, pastikan keduanya menggunakan satuan yang sama dan c lebih panjang daripada a, lalu hitung csc(A) = c / a. Dengan c = 13 m dan a = 5 m, jawabannya adalah 13/5 = 2,6."
      },
      {
        "question": "Bagaimana cara menemukan hipotenusa menggunakan cosecan?",
        "answer": "Susun ulang rumusnya menjadi c = a x csc(A). Kalikan sisi depan yang diketahui dengan rasio cosecan. Jika a = 6 m dan csc(A) = 2,5, maka c = 6 x 2,5 = 15 m. Hasilnya selalu lebih panjang daripada sisi depan, yang merupakan pemeriksaan kewarasan cepat atas aritmetikanya."
      },
      {
        "question": "Apakah kalkulator cosecan memerlukan masukan sudut?",
        "answer": "Tidak. Kalkulator hanya memerlukan dua panjang sisi: hipotenusa dan sisi depan. Rasio c/a sepenuhnya ditentukan oleh pengukuran tersebut, sehingga sudut A tidak pernah masuk ke dalam perhitungan."
      },
      {
        "question": "Bagaimana cosecan berubah ketika sudut bertambah?",
        "answer": "Cosecan menurun seiring sudut lancip bertambah. Sudut kecil memiliki sisi depan yang pendek relatif terhadap hipotenusa, sehingga rasionya besar; sudut besar memiliki sisi depan yang hampir sepanjang hipotenusa, sehingga rasionya berada tepat di atas 1. Misalnya, csc(30 derajat) = 2, csc(45 derajat) sekitar 1,4142, dan csc(60 derajat) sekitar 1,1547."
      },
      {
        "question": "Kapan sebaiknya menggunakan cosecan alih-alih sinus?",
        "answer": "Gunakan cosecan ketika Anda membutuhkan hipotenusa dibagi sisi depan: dalam rumus yang dibangun di sekitar cosecan, dalam pengerjaan identitas kebalikan, atau ketika soal memberikan nilai cosecan dan menanyakan sebuah sisi. Untuk soal pengukuran langsung, sinus biasanya pilihan yang lebih alami."
      }
    ],
    "conclusion": {
      "h2": "Kuasai Rasio Cosecan dengan Percaya Diri",
      "paragraphs": [
        "Cosecan adalah sinus yang dilihat dari sisi lain: bagi hipotenusa dengan sisi depan, dan hasilnya memberi tahu Anda berapa banyak panjang sisi depan yang muat dalam hipotenusa. Rumus [[\\csc(A)=c/a]] hanya membutuhkan dua pengukuran, jawabannya selalu bilangan tak berdimensi di atas 1, dan identitas kebalikan [[\\csc(A)=1/\\sin(A)]] memberi Anda cara bawaan untuk memeriksa setiap perhitungan. Baik segitiganya berupa tangga, kasau, maupun 3-4-5 dari buku teks, metodenya tidak pernah berubah: tentukan hipotenusa, tentukan sisi depan, bagi, dan verifikasi. Simpan <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator teorema Pythagoras</a> untuk memastikan geometri segitiga, dan tandai halaman ini untuk setiap perhitungan cosecan."
      ]
    }
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "csc-intro": "ما هي حاسبة نسبة قاطع التمام؟",
      "csc-triangle": "فهم الوتر والضلع المقابل",
      "csc-whatis": "فهم قاطع التمام في علم المثلثات",
      "csc-formula": "شرح صيغة قاطع التمام خطوة بخطوة",
      "csc-howto": "كيفية استخدام الحاسبة",
      "csc-examples": "أمثلة خطوة بخطوة",
      "csc-applications": "أمثلة من الحياة الواقعية",
      "csc-angle": "قاطع التمام وحجم الزاوية",
      "csc-recover": "إيجاد الوتر باستخدام قاطع التمام",
      "csc-mistakes": "أخطاء شائعة",
      "csc-verify": "التحقق من نتيجتك",
      "csc-vs": "قاطع التمام مقابل النسب الأخرى",
      "csc-faq": "الأسئلة الشائعة",
      "csc-related": "حاسبات ذات صلة"
    },
    "sections": {
      "csc-intro": {
        "h2": "ما هي حاسبة نسبة قاطع التمام؟",
        "blocks": [
          {
            "kind": "p",
            "text": "تحسب حاسبة نسبة قاطع التمام قاطع تمام زاوية حادة في مثلث قائم من طولي ضلعين: الوتر [[c]] والضلع المقابل [[a]]. وهي تقسم الأول على الثاني، فينتج [[\\csc(A)=c/a]]. قاطع التمام هو مقلوب الجيب: فحيث يعطي الجيب المقابل على الوتر، يعطي قاطع التمام الوتر على المقابل، لذلك يكون حاصل ضرب القيمتين دائماً 1."
          },
          {
            "kind": "p",
            "text": "لا تحتاج الحاسبة إلى إدخال زاوية ولا إلى ضلع مجاور، لأن النسبة [[c/a]] تتحدد تماماً بهذين الطولين. الجواب عدد محض بلا وحدات، لأن السنتيمترات مقسومة على سنتيمترات تتلاشى، وهو يصف الوتر كمضاعف للضلع المقابل. فلوتر طوله 5 سم وضلع مقابل طوله 3 سم، يكون [[\\csc(A)=5/3\\approx1.6667]]، أي أن الوتر أطول من الضلع المقابل بنحو 1.67 مرة."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "فهم الوتر والضلع المقابل",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث القائم؟"
          },
          {
            "kind": "p",
            "text": "المثلث القائم له زاوية واحدة قياسها [[90^\\circ]] بالضبط، وهي الزاوية بين خطين متعامدين، كجدار يلتقي بأرضية مستوية. الوتر يقابل تلك الزاوية القائمة وهو أطول الأضلاع دائماً. وبما أن مجموع الزوايا الثلاث يجب أن يكون [[180^\\circ]]، فإن الزاويتين الباقيتين تتقاسمان 90 درجة بالضبط، ولذلك تكونان حادتين معاً. ينتمي قاطع التمام إلى هذه الهندسة لأن صيغته تقارن ضلعين من تلك الأضلاع، الوتر والضلع المقابل، في علاقة ثابتة."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المقابل؟"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل هو الضلع المواجه مباشرة للزاوية المرجعية [[A]]: وهو الضلع الوحيد في المثلث الذي لا يلامس رأس [[A]]. وأي ضلع يُعد مقابلاً يعتمد على الزاوية المرجعية، فالانتقال من الزاوية [[A]] إلى الزاوية [[B]] يبدل تسميتي الضلعين القائمين. وفي المسائل العملية غالباً ما يمثل الضلع المقابل ارتفاعاً رأسياً، أو فرق ارتفاع، أو الضلع العمودي في منشأة. ودقة الزاوية المرجعية مهمة، لأن الزاوية الخاطئة تبدل الضلعين المقابل والمجاور بصمت."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "الوتر هو الضلع المقابل للزاوية القائمة، وحقيقتان تحددانه في أي رسم مهما دُوّر المثلث: فهو يواجه المربع الصغير الذي يعلّم زاوية [[90^\\circ]]، وهو أطول الأضلاع. وفي مثلث صحيح غير منحط يكون أطول من أي من الضلعين القائمين حتماً. وفي الواقع قد يمثل سلماً مسنوداً إلى جدار، أو مسافة مائلة، أو خط رؤية، أو عارضة سقف، أو دعامة قطرية."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور [[b]] هو الضلع القائم الذي يلامس الزاوية [[A]] دون أن يكون الوتر. ولا دور له في صيغة قاطع التمام، ولهذا لا تطلبه الحاسبة أبداً. ويصبح الضلع [[b]] مهماً لجيب التمام والظل والقاطع وظل التمام، فتذكره عندما تكون النسبة المطلوبة مختلفة."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "مثلث قائم الزاوية A أسفل اليسار، الضلع المقابل a بالذهبي، الضلع المجاور b بالأزرق، الوتر c بالوردي، الصيغة csc(A)=c/a",
            "caption": "الزاوية A أسفل اليسار؛ يستخدم قاطع التمام الوتر c والضلع المقابل a، لا الضلع المجاور b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "فهم قاطع التمام في علم المثلثات",
        "blocks": [
          {
            "kind": "p",
            "text": "يقارن قاطع التمام الضلع المائل الكامل للمثلث القائم بالضلع المقابل للزاوية المرجعية:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "هنا [[\\csc(A)]] هو قاطع تمام الزاوية [[A]]، و[[c]] هو الوتر، و[[a]] هو الضلع المقابل. وتجيب النسبة عن سؤال واحد: كم طول ضلع مقابل يتسع داخل الوتر؟"
          },
          {
            "kind": "h3",
            "text": "قاطع التمام كمقلوب للجيب"
          },
          {
            "kind": "p",
            "text": "ابدأ بصيغة الجيب:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "أخذ المقلوب يعكس الكسر، فينتقل الوتر إلى البسط والضلع المقابل إلى المقام:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "وبما أن قاطع التمام يُعرَّف بأنه مقلوب الجيب:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "فحص ملموس يجعل الانعكاس واضحاً. فمع [[\\sin(A)=3/5=0.6]] يكون المقلوب [[1/0.6=5/3\\approx1.6667]]، وهو قاطع التمام بالضبط. ويصف العددان المثلث نفسه من وجهتي نظر متعاكستين، وضربهما يعيد دائماً 1."
          },
          {
            "kind": "h3",
            "text": "لماذا قاطع التمام أكبر من 1"
          },
          {
            "kind": "p",
            "text": "الوتر أطول من الضلع المقابل، إذن [[c \\gt a]] ومن ثم [[c/a \\gt 1]]. وفحص عددي سريع: مع [[c=10]] و[[a=8]] تكون النسبة [[10/8=1.25]]، فوق 1 كما يجب. وبالنسبة لزاوية حادة كبيرة يكون الضلع المقابل بطول الوتر تقريباً، فتكون النسبة فوق 1 بقليل، لكنها لا يمكن أن تساوي 1 أبداً في مثلث قائم صحيح غير منحط."
          },
          {
            "kind": "h3",
            "text": "ماذا تعني قيمة قاطع التمام؟"
          },
          {
            "kind": "p",
            "text": "قاطع تمام يساوي 2 يعني أن الوتر ضعف الضلع المقابل بالضبط؛ و1.6667 تعني نحو 1.6667 مرة. اقرأ العدد كمضاعِف، لا كزاوية: فلا يحمل درجات ولا أمتاراً ولا أقداماً، لأن وحدتي الضلعين تتلاشيان في القسمة."
          },
          {
            "kind": "h3",
            "text": "لماذا يختلف قاطع التمام عن جيب التمام؟"
          },
          {
            "kind": "p",
            "text": "الاسمان متشابهان، لكن العلاقتين مختلفتان:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "يقارن جيب التمام الضلع المجاور بالوتر، بينما يقارن قاطع التمام الوتر بالضلع المقابل. والثنائية التي يجب تذكرها: قاطع التمام هو مقلوب الجيب، بينما القاطع هو مقلوب جيب التمام. وخلط الدالتين المتممتين من أكثر الأخطاء شيوعاً في علم المثلثات."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "ثلاث مراحل: مثلث 3-4-5، الجيب 3/5=0.6، قاطع التمام 5/3=1.6667، المتطابقة csc(A)=1/sin(A)",
            "caption": "الجيب وقاطع التمام مقلوبان: عكس 3/5 يعطي 5/3، وcsc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "شرح صيغة قاطع التمام خطوة بخطوة",
        "blocks": [
          {
            "kind": "p",
            "text": "الصيغة ليست اعتباطية؛ فهي تتبع مباشرة تعريف الجيب. ابدأ بنسبة الجيب:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "خذ مقلوب الطرفين. يتبادل البسط والمقام مكانيهما:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "وبما أن قاطع التمام هو مقلوب الجيب بالتعريف:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "يظهر الوتر في البسط لأنه كان مقام الجيب؛ وينزل الضلع المقابل إلى المقام لأنه كان بسط الجيب. هذا هو الاشتقاق كله."
          },
          {
            "kind": "h3",
            "text": "مثال محلول بالكامل: مثلث 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=3\\text{ cm}]]، [[b=4\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "الخطوة 1: اكتب الصيغة. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 2: عوّض القياسات. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 3: اقسم. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 4: تحقق باستخدام الجيب. [[\\sin(A)=3/5=0.6]]، و[[1/0.6\\approx1.6667]]. وكلتا الطريقتين تصلان إلى القيمة نفسها لأنهما وجهتا نظر متعاكستان لمثلث واحد. لاحظ أن 1.6667 هو العشري المقرَّب؛ أما [[5/3]] فهي النسبة المضبوطة لهذه الأطوال."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "كيفية استخدام حاسبة نسبة قاطع التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "الشرح أدناه يطابق الواجهة الفعلية في هذه الصفحة."
          },
          {
            "kind": "p",
            "text": "لاحظ ما لا تطلبه الحاسبة أبداً: لا زاوية [[A]] بالدرجات، ولا ضلع مجاور، ولا قيمة جيب. فطولا الضلعين هما الإدخال الكامل لأن النسبة [[c/a]] لا تعتمد على شيء آخر."
          }
        ],
        "steps": [
          "<strong>حدد الزاوية المرجعية [[A]].</strong> قرر أي زاوية حادة تصفها النسبة، لأن الضلع المقابل يُعرَّف بالنسبة إليها.",
          "<strong>حدد الوتر [[c]].</strong> هو الضلع المقابل للزاوية القائمة وأطول أضلاع المثلث.",
          "<strong>حدد الضلع المقابل [[a]].</strong> هو الضلع المواجه مباشرة للزاوية [[A]].",
          "<strong>قِس طولي الضلعين أو احصل عليهما.</strong> استخدم شريط قياس أو رسماً أو بيانات معطاة، مع إبقاء الوحدة نفسها للضلعين.",
          "<strong>أدخل الوتر في حقل الإدخال الأول.</strong> وهو القيمة الأكبر من القيمتين.",
          "<strong>أدخل الضلع المقابل في حقل الإدخال الثاني.</strong> وهو القيمة الأصغر من القيمتين.",
          "<strong>اختر وحدات متوافقة من منتقي الوحدات.</strong> يجب أن يستخدم الحقلان الوحدة نفسها لتكون القسمة ذات معنى.",
          "<strong>تأكد أن القيمتين موجبتان.</strong> فالأطوال الصفرية أو السالبة لا يمكن أن تكوّن مثلثاً.",
          "<strong>تحقق أن الوتر أطول من الضلع المقابل.</strong> فإن لم يكن، فالمدخلات متبادلة أو مسماة خطأ.",
          "<strong>انقر احسب csc(A).</strong> تقسم الأداة الوتر على الضلع المقابل.",
          "<strong>اقرأ نسبة قاطع التمام الناتجة.</strong> وهي عدد بلا أبعاد يصف الوتر كمضاعف للضلع المقابل.",
          "<strong>تحقق أن الجواب أكبر من 1.</strong> فأي شيء عند 1 أو دونه يشير إلى خطأ في الإدخال.",
          "<strong>استخدم Reset لمسح المدخلات</strong> وبدء حساب آخر."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "أمثلة خطوة بخطوة لحساب قاطع التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "تبني هذه الأمثلة الأربعة المهارة الأساسية قبل التطبيقات الواقعية. وكل مثال يتبع النمط نفسه: اكتب الصيغة، عوّض، اقسم."
          },
          {
            "kind": "h3",
            "text": "المثال 1: مثلث قائم 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=3\\text{ cm}]]، [[b=4\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "الوتر أطول من الضلع المقابل بنحو 1.6667 مرة. ويظهر الضلع المجاور في البيانات المعطاة لإكمال المثلث فقط؛ والصيغة تتجاهله."
          },
          {
            "kind": "h3",
            "text": "المثال 2: مثلث قائم 5-12-13"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=5\\text{ m}]]، [[b=12\\text{ m}]]، [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "الناتج يتجاوز 1 لأن الوتر أطول من الضلع المقابل. والضلع المجاور 12 م غير لازم لهذا الحساب."
          },
          {
            "kind": "h3",
            "text": "المثال 3: مثلث 30-60-90"
          },
          {
            "kind": "p",
            "text": "بالنسبة للزاوية [[A=30^\\circ]] يكون الضلع المقابل نصف الوتر. مع [[a=5\\text{ cm}]] و[[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "تحقق: [[\\sin(30^\\circ)=0.5]]، و[[1/0.5=2]]. هذه القيمة المضبوطة تستحق الحفظ لأن مثلث 30-60-90 يظهر باستمرار في مسائل الهندسة."
          },
          {
            "kind": "h3",
            "text": "المثال 4: مثلث بضلع مقابل 8 ووتر 10"
          },
          {
            "kind": "p",
            "text": "المعطى [[a=8\\text{ m}]] و[[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "هذه النسبة أقرب إلى 1 من نتيجة 3-4-5 لأن الضلع المقابل يمثل حصة أكبر من الوتر: 8/10 مقابل 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "أمثلة من الحياة الواقعية لاستخدام نسبة قاطع التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "قاطع التمام نسبة رياضية وليس عدداً يُبلَّغ عنه وحده في موقع العمل. وتكمن قيمته في وصف العلاقة بين الوتر والضلع المقابل، والتحقق من الحسابات، وتغذية الصيغ التي تستدعي قاطع التمام. ويفترض كل مثال أدناه مثلثاً قائماً مبسطاً."
          },
          {
            "kind": "h3",
            "text": "المثال 5: فهم طول السلم بالنسبة إلى ارتفاعه"
          },
          {
            "kind": "p",
            "text": "سلم طوله 5.5 م يصل إلى 4.5 م على جدار رأسي. السلم هو الوتر [[c=5.5\\text{ m}]]؛ والوصول هو الضلع المقابل [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]]، إذن [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "السلم أطول من الارتفاع الرأسي بنحو 1.2222 مرة، و[[c=a\\times\\csc(A)]] يستعيد طول السلم من الارتفاع. هذه النسبة تصف الهندسة فقط، لا سلامة السلم."
          },
          {
            "kind": "h3",
            "text": "المثال 6: حساب نسبة قاطع تمام عارضة السقف"
          },
          {
            "kind": "p",
            "text": "عارضة سقف طولها 6.5 م بارتفاع رأسي 4 م: العارضة هي الوتر المائل [[c=6.5\\text{ m}]]؛ والارتفاع هو الضلع المقابل [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]]، إذن [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "العارضة أطول من الارتفاع الرأسي 1.625 مرة. وهذا الحساب لا يتحقق من الملاءمة الإنشائية ولا من مطابقة تصميم السقف."
          },
          {
            "kind": "h3",
            "text": "المثال 7: تقييم نسبة قاطع تمام منحدر"
          },
          {
            "kind": "p",
            "text": "منحدر بطول مائل 9.5 م وارتفاع رأسي 0.75 م: [[c=9.5\\text{ m}]] و[[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]]، إذن [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "النسبة كبيرة لأن الطول المائل يفوق الارتفاع الرأسي بكثير، كما ينبغي لمنحدر لطيف. والنسبة وحدها لا تحدد إمكانية الوصول ولا مطابقة كود البناء."
          },
          {
            "kind": "h3",
            "text": "المثال 8: خط مسح بفرق ارتفاع معلوم"
          },
          {
            "kind": "p",
            "text": "يسجل قياس مسح مبسط مسافة مستقيمة 50 م وفرقاً رأسياً 30 م: الخط المستقيم هو الوتر [[c=50\\text{ m}]]؛ مع اعتبار الفرق الرأسي ضلعاً مقابلاً [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]]، إذن [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "المسافة المائلة أطول من المكون الرأسي بنحو 1.6667 مرة. وقد يتطلب المسح الحقيقي تصحيحات إضافية تتجاوز هذا النموذج المبسط."
          },
          {
            "kind": "h3",
            "text": "المثال 9: حساب نسبة سلك شد"
          },
          {
            "kind": "p",
            "text": "سلك شد طوله 18 م بفاصل رأسي 10 م بين طرفيه: السلك هو الوتر [[c=18\\text{ m}]]؛ والفاصل هو الضلع المقابل [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]]، إذن [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "السلك أطول من الفاصل الرأسي 1.8 مرة. والنسبة لا تحدد شد السلك ولا قوة المرساة ولا السلامة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 10: تقييم نسبة عارضة درج"
          },
          {
            "kind": "p",
            "text": "عارضة درج مبسطة طولها 5 م بارتفاع رأسي 2.8 م: العارضة هي الوتر [[c=5\\text{ m}]]؛ والارتفاع هو الضلع المقابل [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]]، إذن [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "القطر أطول من الارتفاع الرأسي بنحو 1.7857 مرة: حساب هندسي مبسط، وليس تقييماً كاملاً لتصميم الدرج."
          },
          {
            "kind": "h3",
            "text": "المثال 11: مقطع طيران مستقيم لطائرة"
          },
          {
            "kind": "p",
            "text": "تقطع طائرة 5 كم على مسار مستقيم بينما تكسب 1.5 كم ارتفاعاً: المسار هو الوتر [[c=5\\text{ km}]]؛ وكسب الارتفاع هو الضلع المقابل [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]]، إذن [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "مسافة الطيران تفوق الكسب الرأسي بكثير، ومن هنا تأتي النسبة الكبيرة. وهذا مثال مثالي، وليس تحليلاً كاملاً لمسار طيران متغير."
          },
          {
            "kind": "h3",
            "text": "المثال 12: دعامة ميكانيكية"
          },
          {
            "kind": "p",
            "text": "دعامة قطرية طولها 1700 مم بمكون رأسي 800 مم: الدعامة هي الوتر [[c=1700\\text{ mm}]]؛ والمكون الرأسي هو الضلع المقابل [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]]، إذن [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "تعمل المليمترات كما تعمل الأمتار عندما يتشارك الضلعان الوحدة. والنسبة لا تثبت متانة الدعامة."
          },
          {
            "kind": "h3",
            "text": "المثال 13: ذراع رافعة"
          },
          {
            "kind": "p",
            "text": "ذراع رافعة مبسط طوله 10 م بمكون رأسي 8 م: الذراع هو الوتر [[c=10\\text{ m}]]؛ والمكون الرأسي هو الضلع المقابل [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]، إذن [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "طول الذراع أطول من مكونه الرأسي 1.25 مرة فقط. والنسبة لا تثبت قدرة الرفع ولا سلامة التشغيل."
          },
          {
            "kind": "h3",
            "text": "المثال 14: خط رؤية إلى قمة شجرة"
          },
          {
            "kind": "p",
            "text": "خط رؤية طوله 20 م إلى قمة شجرة بفرق رأسي 12 م عن مستوى عين المراقب: خط الرؤية هو الوتر [[c=20\\text{ m}]]؛ والفرق الرأسي هو الضلع المقابل [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]]، إذن [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "مسافة الرؤية أطول من الفرق الرأسي بنحو 1.6667 مرة. والنتيجة لا تعطي الارتفاع الكلي للشجرة فوق الأرض."
          },
          {
            "kind": "h3",
            "text": "المثال 15: منحدر مستقيم لمسار مشي"
          },
          {
            "kind": "p",
            "text": "يقطع مسار مشي مستقيم 100 م مائلاً بكسب ارتفاع 80 م: المنحدر هو الوتر [[c=100\\text{ m}]]؛ والكسب هو الضلع المقابل [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]]، إذن [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "النسبة قريبة من 1 لأن المكون الرأسي يمثل حصة كبيرة من المنحدر. وقد تكون لمسارات المشي الفعلية انحدارات متفاوتة."
          },
          {
            "kind": "h3",
            "text": "المثال 16: دعامة مظلة"
          },
          {
            "kind": "p",
            "text": "دعامة مظلة طولها 3.5 م بمكون رأسي 1.2 م: الدعامة هي الوتر [[c=3.5\\text{ m}]]؛ والمكون الرأسي هو الضلع المقابل [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]]، إذن [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "الدعامة أطول من مكونها الرأسي بنحو 2.9167 مرة. والنتيجة لا تثبت الملاءمة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "مقارنة الأمثلة العملية"
          },
          {
            "kind": "p",
            "text": "النمط ثابت: تكون النسبة كبيرة عندما يكون الضلع المقابل جزءاً صغيراً من الوتر، وقريبة من 1 عندما يكونان متساويين تقريباً. وقراءة قاطع التمام كمضاعِف تجعل كل نتيجة ذات معنى."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الحالة", "الوتر c", "الضلع المقابل a", "صيغة قاطع التمام", "النسبة المحسوبة", "التفسير"],
            "rows": [
              ["سلم", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "السلم أطول من الارتفاع 1.2222 مرة"],
              ["عارضة سقف", "6.5 m", "4 m", "6.5/4", "1.625", "العارضة أطول من الارتفاع 1.625 مرة"],
              ["منحدر", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "المنحدر أطول من الارتفاع 12.6667 مرة"],
              ["مسح", "50 m", "30 m", "50/30", "1.6667", "المسافة أطول من الانخفاض 1.6667 مرة"],
              ["سلك شد", "18 m", "10 m", "18/10", "1.8", "السلك أطول من الفاصل 1.8 مرة"],
              ["عارضة درج", "5 m", "2.8 m", "5/2.8", "1.7857", "العارضة أطول من الارتفاع 1.7857 مرة"],
              ["مقطع طيران", "5 km", "1.5 km", "5/1.5", "3.3333", "المسار أطول من الكسب 3.3333 مرة"],
              ["دعامة ميكانيكية", "1700 mm", "800 mm", "1700/800", "2.125", "الدعامة أطول من المكون 2.125 مرة"],
              ["ذراع رافعة", "10 m", "8 m", "10/8", "1.25", "الذراع أطول من المكون 1.25 مرة"],
              ["خط رؤية شجرة", "20 m", "12 m", "20/12", "1.6667", "خط الرؤية أطول من الفرق 1.6667 مرة"],
              ["منحدر مشي", "100 m", "80 m", "100/80", "1.25", "المنحدر أطول من الكسب 1.25 مرة"],
              ["دعامة مظلة", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "الدعامة أطول من المكون 2.9167 مرة"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "أربع لوحات: سلم 1.2222، عارضة 1.625، منحدر 12.6667، مسح 1.6667 نسب قاطع تمام مع مثلثات قائمة",
            "caption": "أربع حسابات عملية: كل لوحة تعرض المثلث والصيغة والنسبة."
          }
        ]
      },
      "csc-angle": {
        "h2": "فهم العلاقة بين قاطع التمام وحجم الزاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "يتحرك قاطع التمام في الاتجاه المعاكس للزاوية. فعندما تكون الزاوية الحادة صغيرة، يكون الضلع المقابل قصيراً بالنسبة إلى الوتر، فتكون [[c/a]] كبيرة. ومع نمو الزاوية يطول الضلع المقابل مقترباً من الوتر، وتتقلص النسبة. والقيم المرجعية الموثقة أدناه توضح النمط:"
          },
          {
            "kind": "p",
            "text": "ومع اقتراب الزاوية من [[90^\\circ]] يقترب الضلع المقابل من الوتر وتقترب النسبة من 1، مع بقائها فوق 1 لكل مثلث قائم صحيح غير منحط. وصف 90 درجة مرجع حدي فقط، لأن الزاوية [[A]] يجب أن تكون حادة. ومع اقتراب الزاوية من [[0^\\circ]] يتقلص الضلع المقابل نحو الصفر وتنمو النسبة بلا حد. والنسبة القريبة من 1 تشير إلى زاوية حادة كبيرة نسبياً؛ والنسبة الكبيرة تشير إلى زاوية صغيرة نسبياً."
          },
          {
            "kind": "p",
            "text": "لا تقبل الحاسبة إدخال زاوية؛ فهي تحسب النسبة من طولي الضلعين. وتعمل هذه القيم المرجعية كتوجيه وكقيم فحص عند التحقق من نتيجة."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الزاوية A", "الجيب sin(A)", "قاطع التمام csc(A)"],
            "rows": [
              ["30 درجة", "0.5", "2"],
              ["45 درجة", "0.7071", "1.4142"],
              ["60 درجة", "0.8660", "1.1547"],
              ["90 درجة", "1", "1، كقيمة حدية"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "ثلاثة مثلثات عند 30 و45 و60 درجة بقيم قاطع تمام 2 و1.4142 و1.1547؛ تنخفض النسبة مع نمو الزاوية",
            "caption": "ومع ازدياد حصة الضلع المقابل من الوتر، يقترب csc(A) من 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "استخدام قاطع التمام لإيجاد الوتر",
        "blocks": [
          {
            "kind": "p",
            "text": "تُعاد صياغة الصيغة بسلاسة. ابدأ بـ:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "اضرب الطرفين في [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "الوتر هو الضلع المقابل مضروباً في نسبة قاطع التمام. مع [[a=6\\text{ m}]] و[[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "الناتج أطول من الضلع المقابل، كما يجب أن يكون كل وتر."
          },
          {
            "kind": "h3",
            "text": "كيفية استعادة الضلع المقابل"
          },
          {
            "kind": "p",
            "text": "حل المعادلة لـ[[a]] بدلاً من ذلك يعطي:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "مع [[c=12\\text{ m}]] و[[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "هذه إعادة صياغة رياضية للنسبة نفسها. فالحاسبة في هذه الصفحة تحسب النسبة نفسها؛ ولا توفر وضعاً منفصلاً لإيجاد الوتر أو لإيجاد الضلع المقابل."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "أخطاء شائعة عند حساب قاطع التمام",
        "blocks": [
          {
            "kind": "h3",
            "text": "خطأ مقابل صواب"
          },
          {
            "kind": "p",
            "text": "المعطى [[c=5]] و[[a=3]]:"
          },
          {
            "kind": "p",
            "text": "خطأ: [[3/5=0.6]]. هذه نسبة الجيب، ليست نسبة قاطع التمام."
          },
          {
            "kind": "p",
            "text": "صواب: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "تحقق: [[\\csc(A)=1/\\sin(A)]]، و[[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>الخلط بين قاطع التمام والجيب.</strong> الجيب هو [[a/c]]؛ وقاطع التمام هو [[c/a]]. ما الخطأ: الإبلاغ عن 0.6 لمثلث 3-4-5. الحل: ضع الوتر في الأعلى.",
          "<strong>عكس الصيغة إلى [[a/c]] بدل [[c/a]].</strong> ما الخطأ: الجواب هو الجيب، ودائماً دون 1. الحل: تحقق أن الضلع الأطول هو البسط.",
          "<strong>الخلط بين قاطع التمام والقاطع.</strong> القاطع هو [[c/b]]، مقلوب جيب التمام. ما الخطأ: استخدام الضلع المجاور. الحل: قاطع التمام يقترن بالجيب والضلع المقابل.",
          "<strong>استخدام الضلع المجاور بدل الضلع المقابل.</strong> ما الخطأ: حساب [[c/b]] خطأً. الحل: تأكد من الضلع المواجه للزاوية [[A]] قبل القسمة.",
          "<strong>افتراض أن قاطع التمام يُقاس بالدرجات.</strong> ما الخطأ: كتابة 1.6667 درجة. الحل: النسبة عدد محض، ليست زاوية.",
          "<strong>الإبلاغ عن نسبة قاطع التمام بالأمتار أو السنتيمترات.</strong> ما الخطأ: الوحدات تلاشت أصلاً. الحل: أسقط الوحدة من الجواب.",
          "<strong>قبول نتيجة أقل من 1 لمثلث صحيح.</strong> ما الخطأ: الثقة بحساب مدخلاته متبادلة. الحل: النتيجة الصحيحة تتجاوز 1 دائماً.",
          "<strong>إدخال وتر أقصر من الضلع المقابل.</strong> ما الخطأ: المدخلات تصف مثلثاً مستحيلاً. الحل: يجب أن يحمل حقل الوتر القياس الأطول.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> ما الخطأ: قسمة على صفر أو نسبة سالبة بلا معنى. الحل: استخدم أطوالاً موجبة فقط.",
          "<strong>خلط وحدات القياس.</strong> ما الخطأ: سنتيمترات مقسومة على أمتار تحرف النسبة بعامل 100. الحل: حوّل الضلعين إلى وحدة واحدة أولاً.",
          "<strong>التقريب مبكراً جداً.</strong> ما الخطأ: تقريب [[5/3]] إلى 1.67 قبل الضرب مجدداً يضيف خطأ يمكن تجنبه. الحل: احتفظ بالكسر أو بأرقام إضافية حتى الخطوة الأخيرة.",
          "<strong>الخلط بين الزاوية المرجعية والزاوية الحادة الأخرى.</strong> ما الخطأ: تتبادل تسميتا الضلعين المقابل والمجاور. الحل: علّم الزاوية [[A]] على الرسم أولاً.",
          "<strong>افتراض أن نسبة قاطع تمام كبيرة هي زاوية.</strong> ما الخطأ: قراءة 12.6667 كدرجات. الحل: إنها مضاعِف، فالوتر أطول من الضلع المقابل 12.6667 مرة.",
          "<strong>افتراض أن قاطع التمام وحده يحدد الوتر.</strong> ما الخطأ: توقع أن ينتج عدد واحد طولاً. الحل: النسبة تحتاج الضلع المقابل أيضاً، عبر [[c=a\\times\\csc(A)]].",
          "<strong>الخلط بين مقلوب الجيب ومقلوب جيب التمام.</strong> ما الخطأ: استخدام القاطع حيث ينتمي قاطع التمام. الحل: الجيب يقترن بقاطع التمام؛ وجيب التمام يقترن بالقاطع."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "كيفية التحقق من صحة نتيجة قاطع التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "المثلث القائم الصحيح غير المنحط يتطلب:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "إذن [[c/a \\gt 1]]. ويجب أن يستخدم القياسان وحدات متوافقة، وأن تتجاوز النسبة المحسوبة 1. ونتيجة 1 بالضبط هي قيمة حدية فقط عندما تقترب الزاوية الحادة من 90 درجة، وليست نتيجة لمثلث حقيقي. والنسبة دون 1 تشير عادة إلى مدخلات معكوسة، أو تسمية ضلع خاطئة، أو قياسات غير متوافقة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 1: تحقق من مقلوب الجيب"
          },
          {
            "kind": "p",
            "text": "احسب [[\\sin(A)=a/c]]، ثم [[\\csc(A)=1/\\sin(A)]]. فلمثلث 3-4-5، [[\\sin(A)=3/5=0.6]] و[[1/0.6\\approx1.6667]]، مطابقة للقسمة المباشرة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 2: تحقق من نظرية فيثاغورس"
          },
          {
            "kind": "p",
            "text": "إذا كان الضلع المجاور معروفاً أو مطلوباً، فتحقق من [[b=\\sqrt{c^2-a^2}]]. فلـ[[c=5]] و[[a=3]]: [[b=\\sqrt{25-9}=4]]، و[[3^2+4^2=5^2]]. وهذا يؤكد أن أطوال الأضلاع تكوّن مثلثاً قائماً."
          },
          {
            "kind": "h3",
            "text": "الطريقة 3: تحقق من النسبة بالضرب"
          },
          {
            "kind": "p",
            "text": "تحقق من [[a\\times\\csc(A)\\approx c]]. فلـ[[a=3]] و[[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. وقد تظهر فروق صغيرة عندما يُقرَّب العشري المعروض؛ والكسر المضبوط يزيلها."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "قاطع التمام مقابل الجيب والقاطع والنسب المثلثية الأخرى",
        "blocks": [
          {
            "kind": "p",
            "text": "تقارن كل نسبة زوجاً مختلفاً من الأضلاع:"
          },
          {
            "kind": "p",
            "text": "الثنائيتان المتبادلتان هما الجيب مع قاطع التمام وجيب التمام مع القاطع: [[\\csc(A)=1/\\sin(A)]]، بينما [[\\sec(A)=1/\\cos(A)]]. وقاطع التمام والقاطع غير قابلين للتبادل. ويناسب الجيب مسائل القياس المباشرة بضلع مقابل ووتر معروفين؛ ويناسب قاطع التمام الصيغ المبنية حول المقلوب واستعادة الوتر من قيمة قاطع تمام معروفة."
          },
          {
            "kind": "p",
            "text": "للنسب المجاورة، انظر <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الجيب</a>، و<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة القاطع</a>، و<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة ظل التمام</a>، و<a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">حاسبة النسب المثلثية للمثلث القائم</a>. وتساعد <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">حاسبة أضلاع المثلث القائم</a> عندما يكون طول الضلع نفسه هو المجهول."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["النسبة", "الصيغة", "ما تقارنه"],
            "rows": [
              ["الجيب", "sin(A) = a/c", "الضلع المقابل إلى الوتر"],
              ["قاطع التمام", "csc(A) = c/a", "الوتر إلى الضلع المقابل"],
              ["جيب التمام", "cos(A) = b/c", "الضلع المجاور إلى الوتر"],
              ["القاطع", "sec(A) = c/b", "الوتر إلى الضلع المجاور"],
              ["الظل", "tan(A) = a/b", "الضلع المقابل إلى الضلع المجاور"],
              ["ظل التمام", "cot(A) = b/a", "الضلع المجاور إلى الضلع المقابل"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "الأسئلة الشائعة",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "استكشف حاسبات المثلثات ذات الصلة",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "حاسبة النسب المثلثية للمثلث القائم",
            "desc": "احسب النسب المثلثية الست معاً في مكان واحد."
          },
          {
            "name": "حاسبة نسبة الجيب",
            "desc": "أوجد نسبة الجيب من الضلع المقابل والوتر."
          },
          {
            "name": "حاسبة نسبة القاطع",
            "desc": "أوجد نسبة القاطع من الوتر والضلع المجاور."
          },
          {
            "name": "حاسبة نسبة ظل التمام",
            "desc": "أوجد نسبة ظل التمام من الضلع المجاور والضلع المقابل."
          },
          {
            "name": "حاسبة أضلاع المثلث القائم",
            "desc": "أوجد طول ضلع مجهول من الزوايا أو نظرية فيثاغورس."
          },
          {
            "name": "حاسبة زوايا المثلث القائم",
            "desc": "أوجد الزاوية الحادة من أطوال أضلاع معروفة."
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
        "question": "ما هي صيغة قاطع التمام في المثلث القائم؟",
        "answer": "الصيغة هي csc(A) = c / a: اقسم الوتر على الضلع المقابل للزاوية A. فلوتر 5 وضلع مقابل 3 تكون النتيجة 5/3، أي نحو 1.6667. والقيمة نفسها تأتي من متطابقة المقلوب csc(A) = 1 / sin(A)."
      },
      {
        "question": "كيف يرتبط قاطع التمام بالجيب؟",
        "answer": "قاطع التمام هو مقلوب الجيب: csc(A) = 1 / sin(A). يقسم الجيب الضلع المقابل على الوتر؛ ويعكس قاطع التمام ذلك الكسر. وكلاهما يصف المثلث نفسه، وحاصل ضربهما دائماً 1. فإذا كان sin(A) = 0.6، فإن csc(A) = 1 / 0.6، أي نحو 1.6667."
      },
      {
        "question": "لماذا قاطع التمام أكبر من 1 في المثلث القائم الصحيح؟",
        "answer": "في المثلث القائم الصحيح غير المنحط يكون الوتر أطول الأضلاع، فيتجاوز c قيمة a، وعدد أكبر مقسوم على عدد موجب أصغر يكون دائماً فوق 1. والنسبة 1 أو أقل تشير إلى مدخلات متبادلة، أو تسمية ضلع خاطئة، أو قياسات مستحيلة."
      },
      {
        "question": "ما الفرق بين قاطع التمام والقاطع؟",
        "answer": "يقسم قاطع التمام الوتر على الضلع المقابل (c/a)، بينما يقسم القاطع الوتر على الضلع المجاور (c/b). قاطع التمام هو مقلوب الجيب؛ والقاطع هو مقلوب جيب التمام. وهما يجيبان عن سؤالين مختلفين، فتبديلهما يعطي جواباً خاطئاً كلما اختلف الضلعان المقابل والمجاور."
      },
      {
        "question": "ما هو قاطع تمام زاوية 30 درجة؟",
        "answer": "قاطع تمام 30 درجة يساوي 2 بالضبط، لأن الضلع المقابل لـ30 درجة نصف الوتر: c/a = 2/1 = 2. تحقق: sin(30 درجة) = 0.5، و1 / 0.5 = 2. وهو من قيم قاطع التمام القليلة التي تستحق الحفظ."
      },
      {
        "question": "هل لنسبة قاطع التمام وحدات؟",
        "answer": "لا. فالوتر والضلع المقابل يُقاسان بالوحدة نفسها، فتتلاشى الوحدات أثناء القسمة. وسواء كانت الأضلاع بالسنتيمترات أو الأمتار أو المليمترات، فإن نسبة قاطع التمام عدد محض بلا أبعاد. ولا تبلغ عنها أبداً مرفقة بدرجات أو أمتار أو أقدام."
      },
      {
        "question": "هل يمكن أن يكون قاطع التمام أقل من 1؟",
        "answer": "لا، بالنسبة لمثلث قائم صحيح غير منحط. فبما أن الوتر أطول من الضلع المقابل، يجب أن يتجاوز c/a قيمة 1. والنتيجة 1 أو أقل تعني غالباً أن المدخلين تُبودلا، فحسبت الأداة a/c (وهو الجيب) بدل c/a. وأعد التحقق من أي قياس هو الوتر."
      },
      {
        "question": "كيف تحسب قاطع التمام من أطوال الأضلاع؟",
        "answer": "حدد الوتر c والضلع المقابل a، وتأكد أنهما يستخدمان الوحدة نفسها وأن c أطول من a، ثم احسب csc(A) = c / a. فمع c = 13 م وa = 5 م، يكون الجواب 13/5 = 2.6."
      },
      {
        "question": "كيف تجد الوتر باستخدام قاطع التمام؟",
        "answer": "أعد ترتيب الصيغة إلى c = a x csc(A). اضرب الضلع المقابل المعلوم في نسبة قاطع التمام. فإذا كان a = 6 م وcsc(A) = 2.5، فإن c = 6 x 2.5 = 15 م. والناتج أطول من الضلع المقابل دائماً، وهذا فحص سريع لسلامة الحساب."
      },
      {
        "question": "هل تحتاج حاسبة قاطع التمام إلى إدخال زاوية؟",
        "answer": "لا. تحتاج الحاسبة إلى طولي ضلعين فقط: الوتر والضلع المقابل. فالنسبة c/a تتحدد تماماً بتلك القياسات، فلا تدخل الزاوية A في الحساب أبداً."
      },
      {
        "question": "كيف يتغير قاطع التمام عندما تكبر الزاوية؟",
        "answer": "يتناقص قاطع التمام مع نمو الزاوية الحادة. فالزاوية الصغيرة لها ضلع مقابل قصير بالنسبة إلى الوتر، فتكون النسبة كبيرة؛ والزاوية الكبيرة لها ضلع مقابل بطول الوتر تقريباً، فتكون النسبة فوق 1 بقليل. فمثلاً csc(30 درجة) = 2، وcsc(45 درجة) نحو 1.4142، وcsc(60 درجة) نحو 1.1547."
      },
      {
        "question": "متى أستخدم قاطع التمام بدل الجيب؟",
        "answer": "استخدم قاطع التمام عندما تحتاج الوتر على المقابل: في الصيغ المبنية حول قاطع التمام، وفي عمل متطابقات المقلوب، أو عندما تعطي مسألة قيمة قاطع تمام وتسأل عن ضلع. ولمسائل القياس المباشرة يكون الجيب عادة الخيار الأنسب."
      }
    ],
    "conclusion": {
      "h2": "أتقن نسبة قاطع التمام بثقة",
      "paragraphs": [
        "قاطع التمام هو الجيب منظوراً من الجهة الأخرى: اقسم الوتر على الضلع المقابل، وتخبرك النتيجة كم طول ضلع مقابل يتسع داخل الوتر. وتحتاج الصيغة [[\\csc(A)=c/a]] إلى قياسين فقط، والجواب عدد بلا أبعاد فوق 1 دائماً، ومتطابقة المقلوب [[\\csc(A)=1/\\sin(A)]] تمنحك وسيلة مدمجة للتحقق من كل حساب. وسواء كان المثلث سلماً أو عارضة سقف أو 3-4-5 من كتاب مدرسي، فالطريقة لا تتغير أبداً: حدد الوتر، وحدد الضلع المقابل، واقسم، وتحقق. وأبقِ <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">حاسبة نظرية فيثاغورس</a> في متناول اليد لتأكيد هندسة المثلث، وضع هذه الصفحة في المفضلة لكل حساب قاطع تمام."
      ]
    }
  },
  "bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "csc-intro": "Какво представлява калкулаторът за косеканс?",
      "csc-triangle": "Разбиране на хипотенузата и срещулежащия катет",
      "csc-whatis": "Разбиране на косеканса в тригонометрията",
      "csc-formula": "Формулата за косеканс стъпка по стъпка",
      "csc-howto": "Как се използва калкулаторът",
      "csc-examples": "Примери стъпка по стъпка",
      "csc-applications": "Примери от реалния живот",
      "csc-angle": "Косеканс и големината на ъгъла",
      "csc-recover": "Намиране на хипотенузата чрез косеканс",
      "csc-mistakes": "Чести грешки",
      "csc-verify": "Проверка на резултата",
      "csc-vs": "Косеканс срещу другите отношения",
      "csc-faq": "Често задавани въпроси",
      "csc-related": "Свързани калкулатори"
    },
    "sections": {
      "csc-intro": {
        "h2": "Какво представлява калкулаторът за косеканс?",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът за косеканс намира косеканса на остър ъгъл в правоъгълен триъгълник от две дължини на страни: хипотенузата [[c]] и срещулежащия катет [[a]]. Той дели първата на втората, получавайки [[\\csc(A)=c/a]]. Косекансът е реципрочната стойност на синуса: където синусът дава срещулежащия катет върху хипотенузата, косекансът дава хипотенузата върху срещулежащия катет, затова двете стойности винаги се умножават до 1."
          },
          {
            "kind": "p",
            "text": "Калкулаторът не се нуждае нито от въвеждане на ъгъл, нито от прилежащ катет, защото отношението [[c/a]] се определя напълно от тези две дължини. Отговорът е чисто число без мерни единици, тъй като сантиметри, делени на сантиметри, се съкращават, и то описва хипотенузата като кратно на срещулежащия катет. За хипотенуза 5 см и срещулежащ катет 3 см, [[\\csc(A)=5/3\\approx1.6667]], което означава, че хипотенузата е около 1,67 пъти срещулежащия катет."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Разбиране на хипотенузата и срещулежащия катет",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник има един ъгъл от точно [[90^\\circ]], ъгъла между две перпендикулярни прави, като стена, срещаща равен под. Хипотенузата лежи срещу този прав ъгъл и винаги е най-дългата страна. Тъй като трите ъгъла трябва да дадат общо [[180^\\circ]], останалите два ъгъла си поделят точно 90 градуса и следователно и двата са остри. Косекансът принадлежи към тази геометрия, защото формулата му сравнява две от тези страни, хипотенузата и срещулежащия катет, във фиксирано отношение."
          },
          {
            "kind": "h3",
            "text": "Какво е срещулежащ катет?"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет е страната точно срещу референтния ъгъл [[A]]: това е единствената страна на триъгълника, която не докосва върха на [[A]]. Коя страна се счита за срещулежаща зависи от референтния ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[B]] разменя означенията на двата катета. В практическите задачи срещулежащият катет често представя вертикална височина, денивелация или перпендикулярния катет на съоръжение. Правилното определяне на референтния ъгъл е важно, защото грешният ъгъл тихо разменя срещулежащия и прилежащия катет."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенуза?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е страната срещу правия ъгъл, и два факта я идентифицират във всяка диаграма, независимо как е завъртян триъгълникът: тя е срещу малкия квадрат, отбелязващ ъгъла от [[90^\\circ]], и е най-дългата страна. Във валиден, неизроден триъгълник тя е строго по-дълга от всеки катет. В реални ситуации тя може да представлява стълба, облегната на стена, наклонено разстояние, линия на видимост, покривна греда или диагонална подпора."
          },
          {
            "kind": "h3",
            "text": "Какво е прилежащ катет?"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет [[b]] е катетът, който докосва ъгъл [[A]], без да е хипотенуза. Той не играе роля във формулата за косеканс, затова калкулаторът никога не го изисква. Страната [[b]] става важна за косинус, тангенс, секанс и котангенс, така че я имайте предвид, когато целта е различно отношение."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Правоъгълен триъгълник с ъгъл A долу вляво, златист срещулежащ катет a, син прилежащ катет b, розова хипотенуза c, формула csc(A)=c/a",
            "caption": "Ъгъл A е долу вляво; косекансът използва хипотенузата c и срещулежащия катет a, а не прилежащия катет b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Разбиране на косеканса в тригонометрията",
        "blocks": [
          {
            "kind": "p",
            "text": "Косекансът сравнява цялата наклонена страна на правоъгълен триъгълник със страната срещу референтния ъгъл:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Тук [[\\csc(A)]] е косекансът на ъгъл [[A]], [[c]] е хипотенузата, а [[a]] е срещулежащият катет. Отношението отговаря на един въпрос: колко дължини на срещулежащия катет се събират в хипотенузата?"
          },
          {
            "kind": "h3",
            "text": "Косекансът като реципрочна стойност на синуса"
          },
          {
            "kind": "p",
            "text": "Започнете с формулата за синус:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Вземането на реципрочната стойност обръща дробта, премествайки хипотенузата в числителя, а срещулежащия катет в знаменателя:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Тъй като косекансът се определя като реципрочната стойност на синуса:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Конкретна проверка прави обръщането видимо. При [[\\sin(A)=3/5=0.6]] реципрочната стойност е [[1/0.6=5/3\\approx1.6667]], което е точно косекансът. И двете числа описват един и същи триъгълник от реципрочни гледни точки, а умножаването им винаги връща 1."
          },
          {
            "kind": "h3",
            "text": "Защо косекансът е по-голям от 1"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е по-дълга от срещулежащия катет, така че [[c \\gt a]] и следователно [[c/a \\gt 1]]. Бърза числена проверка: при [[c=10]] и [[a=8]] отношението е [[10/8=1.25]], над 1, както се изисква. За голям остър ъгъл срещулежащият катет е почти колкото хипотенузата, така че отношението е малко над 1, но никога не може да е равно на 1 във валиден, неизроден правоъгълен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Какво означава стойност на косеканса?"
          },
          {
            "kind": "p",
            "text": "Косеканс 2 означава, че хипотенузата е точно два пъти срещулежащия катет; 1,6667 означава около 1,6667 пъти. Четете числото като множител, а не като ъгъл: то не носи нито градуси, нито метри или футове, защото двете мерни единици на страните се съкращават при делението."
          },
          {
            "kind": "h3",
            "text": "Защо косекансът се различава от косинуса?"
          },
          {
            "kind": "p",
            "text": "Имената си приличат, но отношенията се различават:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Косинусът сравнява прилежащия катет с хипотенузата, докато косекансът сравнява хипотенузата със срещулежащия катет. Двойката, която трябва да запомните: косекансът е реципрочната стойност на синуса, докато секансът е реципрочната стойност на косинуса. Смесването на двете кофункции е една от най-честите грешки в тригонометрията."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Три етапа: триъгълник 3-4-5, синус 3/5=0.6, косеканс 5/3=1.6667, тъждество csc(A)=1/sin(A)",
            "caption": "Синусът и косекансът са реципрочни: обръщането на 3/5 дава 5/3, а csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Формулата за косеканс стъпка по стъпка",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата не е произволна; тя следва директно от определението за синус. Започнете с отношението на синуса:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Вземете реципрочната стойност на двете страни. Числителят и знаменателят си разменят местата:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Тъй като косекансът е реципрочната стойност на синуса по определение:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Хипотенузата се появява в числителя, защото беше знаменателят на синуса; срещулежащият катет слиза в знаменателя, защото беше числителят на синуса. Това е цялото извеждане."
          },
          {
            "kind": "h3",
            "text": "Напълно решен пример: триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Стъпка 1: Напишете формулата. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 2: Заместете измерванията. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 3: Разделете. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 4: Проверете чрез синуса. [[\\sin(A)=3/5=0.6]], и [[1/0.6\\approx1.6667]]. И двата пътя стигат до една и съща стойност, защото са реципрочни гледни точки към един триъгълник. Имайте предвид, че 1,6667 е закръглената десетична стойност; [[5/3]] е точното отношение за тези дължини на страните."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Как се използва калкулаторът за косеканс",
        "blocks": [
          {
            "kind": "p",
            "text": "Упътването по-долу съответства на действителния интерфейс на тази страница."
          },
          {
            "kind": "p",
            "text": "Забележете какво калкулаторът никога не иска: нито ъгъл [[A]] в градуси, нито прилежащ катет, нито стойност на синус. Двете дължини на страни са пълният вход, защото отношението [[c/a]] не зависи от нищо друго."
          }
        ],
        "steps": [
          "<strong>Определете референтния ъгъл [[A]].</strong> Решете кой остър ъгъл описва отношението, тъй като срещулежащият катет се определя спрямо него.",
          "<strong>Намерете хипотенузата [[c]].</strong> Това е страната срещу правия ъгъл и най-дългата страна на триъгълника.",
          "<strong>Намерете срещулежащия катет [[a]].</strong> Това е страната точно срещу ъгъл [[A]].",
          "<strong>Измерете или получете двете дължини на страни.</strong> Използвайте ролетка, чертеж или дадени данни, като запазите една и съща мерна единица и за двете.",
          "<strong>Въведете хипотенузата в първото поле за вход.</strong> Това е по-голямата от двете стойности.",
          "<strong>Въведете срещулежащия катет във второто поле за вход.</strong> Това е по-малката от двете стойности.",
          "<strong>Изберете съвместими мерни единици с избирачите на единици.</strong> И двете полета трябва да използват една и съща мерна единица, за да е смислено делението.",
          "<strong>Потвърдете, че и двете стойности са положителни.</strong> Нулеви или отрицателни дължини не могат да образуват триъгълник.",
          "<strong>Проверете дали хипотенузата е по-дълга от срещулежащия катет.</strong> Ако не е, входовете са разменени или погрешно означени.",
          "<strong>Щракнете Изчислете csc(A).</strong> Инструментът дели хипотенузата на срещулежащия катет.",
          "<strong>Прочетете полученото отношение на косеканса.</strong> Това е безразмерно число, описващо хипотенузата като кратно на срещулежащия катет.",
          "<strong>Проверете дали отговорът е по-голям от 1.</strong> Всичко на или под 1 сигнализира за грешка във входа.",
          "<strong>Използвайте Reset, за да изчистите входовете</strong> и да започнете друго изчисление."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Примери стъпка по стъпка за изчисляване на косеканс",
        "blocks": [
          {
            "kind": "p",
            "text": "Тези четири примера изграждат основното умение преди приложенията от реалния свят. Всеки следва един и същ модел: напишете формулата, заместете, разделете."
          },
          {
            "kind": "h3",
            "text": "Пример 1: Правоъгълен триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е приблизително 1,6667 пъти срещулежащия катет. Прилежащият катет се появява в дадените данни само за да допълни триъгълника; формулата го пренебрегва."
          },
          {
            "kind": "h3",
            "text": "Пример 2: Правоъгълен триъгълник 5-12-13"
          },
          {
            "kind": "p",
            "text": "Дадено [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Резултатът надвишава 1, защото хипотенузата е по-дълга от срещулежащия катет. Прилежащият катет от 12 м не е нужен за това изчисление."
          },
          {
            "kind": "h3",
            "text": "Пример 3: Триъгълник 30-60-90"
          },
          {
            "kind": "p",
            "text": "За ъгъл [[A=30^\\circ]] срещулежащият катет е половината от хипотенузата. При [[a=5\\text{ cm}]] и [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Проверка: [[\\sin(30^\\circ)=0.5]], и [[1/0.5=2]]. Тази точна стойност си струва да се запомни, защото триъгълникът 30-60-90 се появява постоянно в геометричните задачи."
          },
          {
            "kind": "h3",
            "text": "Пример 4: Триъгълник със срещулежащ катет 8 и хипотенуза 10"
          },
          {
            "kind": "p",
            "text": "Дадено [[a=8\\text{ m}]] и [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Това отношение е по-близо до 1 от резултата при 3-4-5, защото срещулежащият катет е по-голяма част от хипотенузата: 8/10 срещу 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Примери от реалния живот за използване на косеканса",
        "blocks": [
          {
            "kind": "p",
            "text": "Косекансът е математическо отношение, а не число, което се съобщава самостоятелно на работна площадка. Стойността му е в описването на отношението хипотенуза към срещулежащ катет, проверката на изчисленията и захранването на формули, които изискват косеканс. Всеки пример по-долу предполага опростен правоъгълен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Пример 5: Разбиране на дължината на стълба спрямо височината ѝ"
          },
          {
            "kind": "p",
            "text": "Стълба от 5,5 м достига 4,5 м нагоре по вертикална стена. Стълбата е хипотенузата [[c=5.5\\text{ m}]]; достигането е срещулежащият катет [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], така че [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Стълбата е около 1,2222 пъти вертикалната височина, а [[c=a\\times\\csc(A)]] възстановява дължината на стълбата от височината. Това отношение описва само геометрията, не безопасността на стълбата."
          },
          {
            "kind": "h3",
            "text": "Пример 6: Изчисляване на косеканса на покривна греда"
          },
          {
            "kind": "p",
            "text": "Покривна греда от 6,5 м има вертикално издигане 4 м: гредата е наклонената хипотенуза [[c=6.5\\text{ m}]]; издигането е срещулежащият катет [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], така че [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Гредата е 1,625 пъти вертикалното издигане. Това изчисление не проверява конструктивната годност или съответствието на покривния проект."
          },
          {
            "kind": "h3",
            "text": "Пример 7: Оценка на косеканса на рампа"
          },
          {
            "kind": "p",
            "text": "Рампа има наклонена дължина 9,5 м и вертикално издигане 0,75 м: [[c=9.5\\text{ m}]] и [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], така че [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Отношението е голямо, защото наклонената дължина значително надвишава вертикалното издигане, както подобава на полога рампа. Самото отношение не определя достъпността или съответствието със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 8: Геодезична линия с известна денивелация"
          },
          {
            "kind": "p",
            "text": "Опростено геодезично измерване записва праволинейно разстояние 50 м и вертикална разлика 30 м: правата линия е хипотенузата [[c=50\\text{ m}]]; с вертикалната разлика като срещулежащ катет [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], така че [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Наклоненото разстояние е около 1,6667 пъти вертикалния компонент. Реалната геодезия може да изисква допълнителни корекции извън този опростен модел."
          },
          {
            "kind": "h3",
            "text": "Пример 9: Изчисляване на косеканса на обтягащо въже"
          },
          {
            "kind": "p",
            "text": "Обтягащо въже от 18 м има вертикално разстояние 10 м между краищата си: въжето е хипотенузата [[c=18\\text{ m}]]; разстоянието е срещулежащият катет [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], така че [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Въжето е 1,8 пъти вертикалното разстояние. Отношението не определя опъна на въжето, здравината на котвата или конструктивната безопасност."
          },
          {
            "kind": "h3",
            "text": "Пример 10: Оценка на косеканса на стълбищна греда"
          },
          {
            "kind": "p",
            "text": "Опростена стълбищна греда от 5 м има вертикално издигане 2,8 м: гредата е хипотенузата [[c=5\\text{ m}]]; издигането е срещулежащият катет [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], така че [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Диагоналът е около 1,7857 пъти вертикалното издигане: опростено геометрично изчисление, а не пълна оценка на дизайна на стълбището."
          },
          {
            "kind": "h3",
            "text": "Пример 11: Прав полетен участък на самолет"
          },
          {
            "kind": "p",
            "text": "Самолет изминава 5 км по прав път, докато набира 1,5 км височина: пътят е хипотенузата [[c=5\\text{ km}]]; набирането на височина е срещулежащият катет [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], така че [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Разстоянието на полета далеч надвишава вертикалното набиране, оттук и голямото отношение. Това е идеализиран пример, а не пълен анализ на променящ се полетен път."
          },
          {
            "kind": "h3",
            "text": "Пример 12: Механична подпора"
          },
          {
            "kind": "p",
            "text": "Диагонална подпора е дълга 1700 мм с вертикален компонент 800 мм: подпората е хипотенузата [[c=1700\\text{ mm}]]; вертикалният компонент е срещулежащият катет [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], така че [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Милиметрите работят също толкова добре, колкото метрите, когато двете страни споделят мерната единица. Отношението не установява здравината на подпората."
          },
          {
            "kind": "h3",
            "text": "Пример 13: Стрела на кран"
          },
          {
            "kind": "p",
            "text": "Опростена стрела на кран от 10 м има вертикален компонент 8 м: стрелата е хипотенузата [[c=10\\text{ m}]]; вертикалният компонент е срещулежащият катет [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], така че [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Дължината на стрелата е само 1,25 пъти вертикалния ѝ компонент. Отношението не установява товароподемността или безопасността на работа."
          },
          {
            "kind": "h3",
            "text": "Пример 14: Линия на видимост към върха на дърво"
          },
          {
            "kind": "p",
            "text": "Линия на видимост от 20 м към върха на дърво има вертикална разлика 12 м от нивото на очите на наблюдателя: линията на видимост е хипотенузата [[c=20\\text{ m}]]; вертикалната разлика е срещулежащият катет [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], така че [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Разстоянието на видимост е около 1,6667 пъти вертикалната разлика. Резултатът не дава общата височина на дървото над земята."
          },
          {
            "kind": "h3",
            "text": "Пример 15: Прав наклон на планинска пътека"
          },
          {
            "kind": "p",
            "text": "Прав участък от планинска пътека се изкачва 100 м с денивелация 80 м: склонът е хипотенузата [[c=100\\text{ m}]]; денивелацията е срещулежащият катет [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], така че [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Отношението е близо до 1, защото вертикалният компонент е голяма част от склона. Реалните планински пътеки могат да имат променливи наклони."
          },
          {
            "kind": "h3",
            "text": "Пример 16: Подпора на тента"
          },
          {
            "kind": "p",
            "text": "Подпора на тента от 3,5 м има вертикален компонент 1,2 м: подпората е хипотенузата [[c=3.5\\text{ m}]]; вертикалният компонент е срещулежащият катет [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], така че [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Подпората е около 2,9167 пъти вертикалния си компонент. Резултатът не установява конструктивна годност."
          },
          {
            "kind": "h3",
            "text": "Сравнение на практическите примери"
          },
          {
            "kind": "p",
            "text": "Моделът е постоянен: отношението е голямо, когато срещулежащият катет е малка част от хипотенузата, и близо до 1, когато двете са почти равни. Четенето на косеканса като множител прави всеки резултат смислен."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ситуация", "Хипотенуза c", "Срещулежащ катет a", "Формула за косеканс", "Изчислено отношение", "Тълкуване"],
            "rows": [
              ["Стълба", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Стълбата е 1,2222 пъти височината"],
              ["Покривна греда", "6.5 m", "4 m", "6.5/4", "1.625", "Гредата е 1,625 пъти издигането"],
              ["Рампа", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Наклонът е 12,6667 пъти издигането"],
              ["Геодезия", "50 m", "30 m", "50/30", "1.6667", "Разстоянието е 1,6667 пъти спада"],
              ["Обтягащо въже", "18 m", "10 m", "18/10", "1.8", "Въжето е 1,8 пъти разстоянието"],
              ["Стълбищна греда", "5 m", "2.8 m", "5/2.8", "1.7857", "Гредата е 1,7857 пъти издигането"],
              ["Полетен участък", "5 km", "1.5 km", "5/1.5", "3.3333", "Пътят е 3,3333 пъти набирането"],
              ["Механична подпора", "1700 mm", "800 mm", "1700/800", "2.125", "Подпората е 2,125 пъти компонента"],
              ["Стрела на кран", "10 m", "8 m", "10/8", "1.25", "Стрелата е 1,25 пъти компонента"],
              ["Линия на видимост", "20 m", "12 m", "20/12", "1.6667", "Линията е 1,6667 пъти разликата"],
              ["Планински склон", "100 m", "80 m", "100/80", "1.25", "Склонът е 1,25 пъти денивелацията"],
              ["Подпора на тента", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Подпората е 2,9167 пъти компонента"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Четири панела: стълба 1.2222, греда 1.625, рампа 12.6667, геодезия 1.6667 косекансни отношения с правоъгълни триъгълници",
            "caption": "Четири практически изчисления: всеки панел показва триъгълника, формулата и отношението."
          }
        ]
      },
      "csc-angle": {
        "h2": "Разбиране на връзката между косеканса и големината на ъгъла",
        "blocks": [
          {
            "kind": "p",
            "text": "Косекансът се движи в обратна посока на ъгъла. Когато острият ъгъл е малък, срещулежащият катет е къс спрямо хипотенузата, така че [[c/a]] е голямо. С нарастването на ъгъла срещулежащият катет се удължава към хипотенузата и отношението намалява. Проверените референтни стойности по-долу показват модела:"
          },
          {
            "kind": "p",
            "text": "С приближаването на ъгъла към [[90^\\circ]] срещулежащият катет се доближава до хипотенузата и отношението се доближава до 1, като остава над 1 за всеки валиден, неизроден правоъгълен триъгълник. Редът за 90 градуса е само гранична референция, тъй като ъгъл [[A]] трябва да е остър. С приближаването на ъгъла към [[0^\\circ]] срещулежащият катет се свива към нула и отношението расте без граница. Отношение близо до 1 сигнализира сравнително голям остър ъгъл; голямо отношение сигнализира сравнително малък ъгъл."
          },
          {
            "kind": "p",
            "text": "Калкулаторът не приема въвеждане на ъгъл; той изчислява отношението от двете дължини на страни. Тези референтни стойности служат за ориентация и като контролни стойности при проверка на резултат."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ъгъл A", "Синус sin(A)", "Косеканс csc(A)"],
            "rows": [
              ["30 градуса", "0.5", "2"],
              ["45 градуса", "0.7071", "1.4142"],
              ["60 градуса", "0.8660", "1.1547"],
              ["90 градуса", "1", "1, като гранична стойност"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Три триъгълника при 30, 45, 60 градуса със стойности на косеканса 2, 1.4142, 1.1547; отношението намалява с нарастването на ъгъла",
            "caption": "С нарастването на дела на срещулежащия катет от хипотенузата csc(A) се доближава до 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Използване на косеканса за намиране на хипотенузата",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата се преобразува чисто. Започнете с:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Умножете двете страни по [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е срещулежащият катет, умножен по отношението на косеканса. При [[a=6\\text{ m}]] и [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Резултатът е по-дълъг от срещулежащия катет, както трябва да бъде всяка хипотенуза."
          },
          {
            "kind": "h3",
            "text": "Как да възстановим срещулежащия катет"
          },
          {
            "kind": "p",
            "text": "Решаването за [[a]] вместо това дава:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "При [[c=12\\text{ m}]] и [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Това са математически преобразувания на едно и също отношение. Калкулаторът на тази страница изчислява самото отношение; той не предоставя отделни режими за намиране на хипотенузата или на срещулежащия катет."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Чести грешки при изчисляване на косеканс",
        "blocks": [
          {
            "kind": "h3",
            "text": "Грешно срещу вярно"
          },
          {
            "kind": "p",
            "text": "Дадено [[c=5]] и [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Грешно: [[3/5=0.6]]. Това е отношението на синуса, а не на косеканса."
          },
          {
            "kind": "p",
            "text": "Вярно: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Проверка: [[\\csc(A)=1/\\sin(A)]], и [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Бъркане на косеканса със синуса.</strong> Синусът е [[a/c]]; косекансът е [[c/a]]. Какво се обърква: съобщаване на 0,6 за триъгълник 3-4-5. Поправка: поставете хипотенузата отгоре.",
          "<strong>Обръщане на формулата на [[a/c]] вместо [[c/a]].</strong> Какво се обърква: отговорът е синусът, винаги под 1. Поправка: проверете дали по-дългата страна е числителят.",
          "<strong>Бъркане на косеканса със секанса.</strong> Секансът е [[c/b]], реципрочната стойност на косинуса. Какво се обърква: използване на прилежащия катет. Поправка: косекансът се съчетава със синуса и срещулежащия катет.",
          "<strong>Използване на прилежащия катет вместо срещулежащия.</strong> Какво се обърква: изчисляване на [[c/b]] по погрешка. Поправка: потвърдете страната срещу ъгъл [[A]] преди делението.",
          "<strong>Приемане, че косекансът се измерва в градуси.</strong> Какво се обърква: записване на 1,6667 градуса. Поправка: отношението е чисто число, а не ъгъл.",
          "<strong>Съобщаване на отношение на косеканса с метри или сантиметри.</strong> Какво се обърква: мерните единици вече са се съкратили. Поправка: премахнете мерната единица от отговора.",
          "<strong>Приемане на резултат под 1 за валиден триъгълник.</strong> Какво се обърква: доверие в изчисление с разменени входове. Поправка: валидният резултат винаги надвишава 1.",
          "<strong>Въвеждане на хипотенуза, по-къса от срещулежащия катет.</strong> Какво се обърква: входовете описват невъзможен триъгълник. Поправка: полето за хипотенуза трябва да съдържа по-дългото измерване.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Какво се обърква: деление на нула или безсмислено отрицателно отношение. Поправка: използвайте само положителни дължини.",
          "<strong>Смесване на мерни единици.</strong> Какво се обърква: сантиметри, делени на метри, изкривяват отношението с фактор 100. Поправка: преобразувайте двете страни в една мерна единица първо.",
          "<strong>Твърде ранно закръгляване.</strong> Какво се обърква: закръглянето на [[5/3]] до 1,67 преди обратното умножение добавя избежима грешка. Поправка: пазете дробта или допълнителните цифри до последната стъпка.",
          "<strong>Бъркане на референтния ъгъл с другия остър ъгъл.</strong> Какво се обърква: означенията на срещулежащия и прилежащия катет се разменят. Поправка: маркирайте ъгъл [[A]] върху диаграмата първо.",
          "<strong>Приемане, че голямо отношение на косеканса е ъгъл.</strong> Какво се обърква: четене на 12,6667 като градуси. Поправка: това е множител, така че хипотенузата е 12,6667 пъти срещулежащия катет.",
          "<strong>Приемане, че само косекансът определя хипотенузата.</strong> Какво се обърква: очакване едно число да даде дължина. Поправка: отношението се нуждае и от срещулежащия катет, чрез [[c=a\\times\\csc(A)]].",
          "<strong>Бъркане на реципрочната стойност на синуса с тази на косинуса.</strong> Какво се обърква: използване на секанс, където принадлежи косеканс. Поправка: синусът се съчетава с косеканса; косинусът се съчетава със секанса."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Как да проверите дали резултатът ви за косеканс е валиден",
        "blocks": [
          {
            "kind": "p",
            "text": "Валидният, неизроден правоъгълен триъгълник изисква:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Следователно [[c/a \\gt 1]]. И двете измервания трябва да използват съвместими мерни единици, а изчисленото отношение трябва да надвишава 1. Резултат точно 1 е само гранична стойност, когато острият ъгъл се доближава до 90 градуса, а не резултат за истински триъгълник. Отношение под 1 обикновено показва обърнати входове, грешно означение на страна или несъвместими измервания."
          },
          {
            "kind": "h3",
            "text": "Метод 1: Проверете реципрочната стойност на синуса"
          },
          {
            "kind": "p",
            "text": "Изчислете [[\\sin(A)=a/c]], после [[\\csc(A)=1/\\sin(A)]]. За триъгълника 3-4-5, [[\\sin(A)=3/5=0.6]] и [[1/0.6\\approx1.6667]], съвпадащо с директното деление."
          },
          {
            "kind": "h3",
            "text": "Метод 2: Проверете питагоровата теорема"
          },
          {
            "kind": "p",
            "text": "Ако прилежащият катет е известен или нужен, проверете [[b=\\sqrt{c^2-a^2}]]. За [[c=5]] и [[a=3]]: [[b=\\sqrt{25-9}=4]], и [[3^2+4^2=5^2]]. Това потвърждава, че дължините на страните образуват правоъгълен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Метод 3: Проверете отношението чрез умножение"
          },
          {
            "kind": "p",
            "text": "Проверете [[a\\times\\csc(A)\\approx c]]. За [[a=3]] и [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Могат да се появят малки несъответствия, когато показаната десетична стойност е била закръглена; точната дроб ги премахва."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Косеканс срещу синус, секанс и другите тригонометрични отношения",
        "blocks": [
          {
            "kind": "p",
            "text": "Всяко отношение сравнява различна двойка страни:"
          },
          {
            "kind": "p",
            "text": "Реципрочните двойки са синусът с косеканса и косинусът със секанса: [[\\csc(A)=1/\\sin(A)]], докато [[\\sec(A)=1/\\cos(A)]]. Косекансът и секансът не са взаимозаменяеми. Синусът подхожда на задачи за директно измерване с известен срещулежащ катет и хипотенуза; косекансът подхожда на формули, изградени около реципрочната стойност, и на възстановяването на хипотенузата от известна стойност на косеканса."
          },
          {
            "kind": "p",
            "text": "За съседните отношения вижте <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на синуса</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на секанса</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на котангенса</a> и <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">калкулатора за тригонометрични отношения на правоъгълен триъгълник</a>. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Калкулаторът за страни на правоъгълен триъгълник</a> помага, когато самата дължина на страната е неизвестната."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Отношение", "Формула", "Какво сравнява"],
            "rows": [
              ["Синус", "sin(A) = a/c", "Срещулежащ катет към хипотенуза"],
              ["Косеканс", "csc(A) = c/a", "Хипотенуза към срещулежащ катет"],
              ["Косинус", "cos(A) = b/c", "Прилежащ катет към хипотенуза"],
              ["Секанс", "sec(A) = c/b", "Хипотенуза към прилежащ катет"],
              ["Тангенс", "tan(A) = a/b", "Срещулежащ катет към прилежащ катет"],
              ["Котангенс", "cot(A) = b/a", "Прилежащ катет към срещулежащ катет"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Често задавани въпроси",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Разгледайте свързаните тригонометрични калкулатори",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Калкулатор за тригонометрични отношения на правоъгълен триъгълник",
            "desc": "Изчислете и шестте тригонометрични отношения наведнъж на едно място."
          },
          {
            "name": "Калкулатор за отношение на синуса",
            "desc": "Намерете отношението на синуса от срещулежащия катет и хипотенузата."
          },
          {
            "name": "Калкулатор за отношение на секанса",
            "desc": "Намерете отношението на секанса от хипотенузата и прилежащия катет."
          },
          {
            "name": "Калкулатор за отношение на котангенса",
            "desc": "Намерете отношението на котангенса от прилежащия и срещулежащия катет."
          },
          {
            "name": "Калкулатор за страни на правоъгълен триъгълник",
            "desc": "Намерете дължината на неизвестна страна от ъгли или питагоровата теорема."
          },
          {
            "name": "Калкулатор за ъгли на правоъгълен триъгълник",
            "desc": "Намерете острия ъгъл от известни дължини на страни."
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
        "question": "Каква е формулата за косеканс в правоъгълен триъгълник?",
        "answer": "Формулата е csc(A) = c / a: разделете хипотенузата на страната срещу ъгъл A. За хипотенуза 5 и срещулежащ катет 3 резултатът е 5/3, около 1,6667. Същата стойност идва от реципрочното тъждество csc(A) = 1 / sin(A)."
      },
      {
        "question": "Как косекансът е свързан със синуса?",
        "answer": "Косекансът е реципрочната стойност на синуса: csc(A) = 1 / sin(A). Синусът дели срещулежащия катет на хипотенузата; косекансът обръща тази дроб. И двете описват един и същи триъгълник, а произведението им винаги е 1. Ако sin(A) = 0,6, тогава csc(A) = 1 / 0,6, около 1,6667."
      },
      {
        "question": "Защо косекансът е по-голям от 1 във валиден правоъгълен триъгълник?",
        "answer": "Във валиден, неизроден правоъгълен триъгълник хипотенузата е най-дългата страна, така че c надвишава a, а по-голямо число, делено на по-малко положително, винаги е над 1. Отношение 1 или по-малко сигнализира разменени входове, грешно означение на страна или невъзможни измервания."
      },
      {
        "question": "Каква е разликата между косеканс и секанс?",
        "answer": "Косекансът дели хипотенузата на срещулежащия катет (c/a), докато секансът дели хипотенузата на прилежащия катет (c/b). Косекансът е реципрочната стойност на синуса; секансът е реципрочната стойност на косинуса. Те отговарят на различни въпроси, така че размяната им дава грешен отговор, когато срещулежащият и прилежащият катет се различават."
      },
      {
        "question": "Колко е косекансът на ъгъл от 30 градуса?",
        "answer": "Косекансът на 30 градуса е точно 2, защото страната срещу 30 градуса е половината от хипотенузата: c/a = 2/1 = 2. Проверка: sin(30 градуса) = 0,5, и 1 / 0,5 = 2. Това е една от малкото стойности на косеканса, които си струва да се запомнят."
      },
      {
        "question": "Има ли отношението на косеканса мерни единици?",
        "answer": "Не. Хипотенузата и срещулежащият катет се измерват в една и съща мерна единица, така че мерните единици се съкращават при делението. Независимо дали страните са в сантиметри, метри или милиметри, отношението на косеканса е чисто безразмерно число. Никога не го съобщавайте с градуси, метри или футове."
      },
      {
        "question": "Може ли косекансът да е по-малък от 1?",
        "answer": "Не за валиден, неизроден правоъгълен триъгълник. Тъй като хипотенузата е по-дълга от срещулежащия катет, c/a трябва да надвишава 1. Резултат 1 или по-малко почти винаги означава, че двата входа са били разменени, така че инструментът е изчислил a/c (което е синусът) вместо c/a. Проверете отново кое измерване е хипотенузата."
      },
      {
        "question": "Как се изчислява косеканс от дължини на страни?",
        "answer": "Определете хипотенузата c и срещулежащия катет a, потвърдете, че и двете използват една и съща мерна единица и че c е по-дълга от a, след което изчислете csc(A) = c / a. При c = 13 м и a = 5 м отговорът е 13/5 = 2,6."
      },
      {
        "question": "Как се намира хипотенузата чрез косеканса?",
        "answer": "Преобразувайте формулата до c = a x csc(A). Умножете известния срещулежащ катет по отношението на косеканса. Ако a = 6 м и csc(A) = 2,5, тогава c = 6 x 2,5 = 15 м. Резултатът винаги е по-дълъг от срещулежащия катет, което е бърза проверка на аритметиката."
      },
      {
        "question": "Нуждае ли се калкулаторът за косеканс от въвеждане на ъгъл?",
        "answer": "Не. Калкулаторът се нуждае само от две дължини на страни: хипотенузата и срещулежащия катет. Отношението c/a се определя напълно от тези измервания, така че ъгъл A никога не влиза в изчислението."
      },
      {
        "question": "Как се променя косекансът, когато ъгълът нараства?",
        "answer": "Косекансът намалява с нарастването на острия ъгъл. Малкият ъгъл има къс срещулежащ катет спрямо хипотенузата, така че отношението е голямо; големият ъгъл има срещулежащ катет почти колкото хипотенузата, така че отношението е малко над 1. Например csc(30 градуса) = 2, csc(45 градуса) е около 1,4142, а csc(60 градуса) около 1,1547."
      },
      {
        "question": "Кога да използвам косеканс вместо синус?",
        "answer": "Използвайте косеканс, когато ви трябва хипотенуза върху срещулежащ катет: във формули, изградени около косеканса, в работа с реципрочни тъждества или когато задача дава стойност на косеканса и пита за страна. За задачи за директно измерване синусът обикновено е по-естественият избор."
      }
    ],
    "conclusion": {
      "h2": "Овладейте отношението на косеканса с увереност",
      "paragraphs": [
        "Косекансът е синусът, видян от другата страна: разделете хипотенузата на срещулежащия катет и резултатът ви казва колко дължини на срещулежащия катет се събират в хипотенузата. Формулата [[\\csc(A)=c/a]] се нуждае само от две измервания, отговорът винаги е безразмерно число над 1, а реципрочното тъждество [[\\csc(A)=1/\\sin(A)]] ви дава вграден начин да проверявате всяко изчисление. Независимо дали триъгълникът е стълба, покривна греда или учебникарски 3-4-5, методът никога не се променя: определете хипотенузата, определете срещулежащия катет, разделете и проверете. Дръжте <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">калкулатора за питагоровата теорема</a> под ръка за потвърждаване на геометрията на триъгълника, а тази страница в отметките за всяко изчисление на косеканс."
      ]
    }
  },
  "tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "csc-intro": "Kosekant Oranı Hesaplayıcısı Nedir?",
      "csc-triangle": "Hipotenüs ve Karşı Kenarı Anlama",
      "csc-whatis": "Trigonometride Kosekantı Anlama",
      "csc-formula": "Kosekant Formülü Adım Adım Açıklaması",
      "csc-howto": "Hesaplayıcı Nasıl Kullanılır",
      "csc-examples": "Adım Adım Örnekler",
      "csc-applications": "Gerçek Hayattan Örnekler",
      "csc-angle": "Kosekant ve Açı Büyüklüğü",
      "csc-recover": "Kosekant ile Hipotenüsü Bulma",
      "csc-mistakes": "Yaygın Hatalar",
      "csc-verify": "Sonucunuzu Kontrol Etme",
      "csc-vs": "Kosekant ve Diğer Oranlar",
      "csc-faq": "SSS",
      "csc-related": "İlgili Hesaplayıcılar"
    },
    "sections": {
      "csc-intro": {
        "h2": "Kosekant Oranı Hesaplayıcısı Nedir?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekant oranı hesaplayıcısı, bir dik üçgende dar açının kosekantını iki kenar uzunluğundan bulur: hipotenüs [[c]] ve karşı kenar [[a]]. İlki ikinciye böler ve [[\\csc(A)=c/a]] elde eder. Kosekant, sinüsün tersidir: sinüs karşı kenarın hipotenüse bölümünü verirken, kosekant hipotenüsün karşı kenara bölümünü verir, bu yüzden iki değer her zaman çarpıldığında 1 olur."
          },
          {
            "kind": "p",
            "text": "Hesaplayıcı açı girişi de istemez komşu kenar da istemez, çünkü [[c/a]] oranı bu iki uzunlukla tamamen belirlenir. Cevap birimsiz saf bir sayıdır, çünkü santimetrenin santimetreye bölünmesi sadeleşir ve bu sayı hipotenüsü karşı kenarın bir katı olarak tanımlar. 5 cm hipotenüs ve 3 cm karşı kenar için [[\\csc(A)=5/3\\approx1.6667]], yani hipotenüs karşı kenarın yaklaşık 1,67 katıdır."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Hipotenüs ve Karşı Kenarı Anlama",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Dik üçgenin bir açısı tam olarak [[90^\\circ]] olur; bu, iki dik doğrunun arasındaki açıdır, tıpkı düz bir zeminle buluşan bir duvar gibi. Hipotenüs bu dik açının karşısında yer alır ve her zaman en uzun kenardır. Üç açının toplamı [[180^\\circ]] olmak zorunda olduğundan, kalan iki açı tam olarak 90 dereceyi paylaşır ve bu yüzden ikisi de dar açıdır. Kosekant bu geometriye aittir, çünkü formülü bu kenarlardan ikisini, hipotenüs ve karşı kenarı, sabit bir ilişkide karşılaştırır."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Karşı kenar, referans açının [[A]] tam karşısındaki kenardır: üçgenin [[A]] köşesine değmeyen tek kenarıdır. Hangi kenarın karşı kenar sayılacağı referans açıya bağlıdır, bu yüzden [[A]] açısından [[B]] açısına geçmek iki dik kenarın etiketlerini değiştirir. Uygulamalı problemlerde karşı kenar genellikle dikey bir yüksekliği, bir kot farkını veya bir yapının dik bacağını temsil eder. Referans açının doğru olması önemlidir, çünkü yanlış açı karşı ve komşu kenarları sessizce değiştirir."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs, dik açının karşısındaki kenardır ve herhangi bir çizimde, üçgen nasıl döndürülmüş olursa olsun, onu iki olgu tanımlar: [[90^\\circ]] köşesini işaretleyen küçük kareye bakar ve en uzun kenardır. Geçerli, yozlaşmamış bir üçgende her iki dik kenardan da kesinlikle uzundur. Gerçek durumlarda merdivenin duvara dayanması, eğik bir mesafe, bir görüş hattı, bir çatı kirişi veya çapraz bir destek olabilir."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Komşu kenar [[b]], hipotenüs olmadan [[A]] açısına değen dik kenardır. Kosekant formülünde rolü yoktur, bu yüzden hesaplayıcı onu asla istemez. [[b]] kenarı kosinüs, tanjant, sekant ve kotanjant için önemli hale gelir, bu yüzden hedef farklı bir oran olduğunda onu aklınızda tutun."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Sol altta A açısı olan dik üçgen, altın karşı kenar a, mavi komşu kenar b, pembe hipotenüs c, csc(A)=c/a formülü",
            "caption": "A açısı sol altta yer alır; kosekant hipotenüs c ile karşı kenar a kullanır, komşu kenar b değil."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Trigonometride Kosekantı Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekant, bir dik üçgenin bütün eğik kenarını referans açının karşısındaki kenarla karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Burada [[\\csc(A)]], [[A]] açısının kosekantı, [[c]] hipotenüs ve [[a]] karşı kenardır. Oran tek bir soruyu yanıtlar: hipotenüse kaç tane karşı kenar uzunluğu sığar?"
          },
          {
            "kind": "h3",
            "text": "Sinüsün Tersi Olarak Kosekant"
          },
          {
            "kind": "p",
            "text": "Sinüs formülüyle başlayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Tersini almak kesri çevirir, hipotenüsü paya ve karşı kenarı paydaya taşır:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kosekant tanım gereği sinüsün tersi olduğundan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Somut bir kontrol, bu çevirmeyi görünür kılar. [[\\sin(A)=3/5=0.6]] iken tersi [[1/0.6=5/3\\approx1.6667]] olur, bu da tam olarak kosekanttır. İki sayı da aynı üçgeni ters bakış açılarından tanımlar ve çarpımları her zaman 1 verir."
          },
          {
            "kind": "h3",
            "text": "Kosekant Neden 1'den Büyüktür"
          },
          {
            "kind": "p",
            "text": "Hipotenüs karşı kenardan uzundur, bu yüzden [[c \\gt a]] ve dolayısıyla [[c/a \\gt 1]]. Hızlı bir sayısal kontrol: [[c=10]] ve [[a=8]] iken oran [[10/8=1.25]] olur, gerektiği gibi 1'in üzerindedir. Büyük bir dar açıda karşı kenar neredeyse hipotenüs kadar uzundur, bu yüzden oran 1'in biraz üzerinde olur, ancak geçerli, yozlaşmamış bir dik üçgende asla 1'e eşit olamaz."
          },
          {
            "kind": "h3",
            "text": "Kosekant Değeri Ne Anlama Gelir?"
          },
          {
            "kind": "p",
            "text": "2 kosekant, hipotenüsün karşı kenarın tam iki katı olduğu anlamına gelir; 1,6667 yaklaşık 1,6667 kat anlamına gelir. Sayıyı bir açı değil, bir çarpan olarak okuyun: derece taşımaz, metre veya fit taşımaz, çünkü iki kenar birimi bölmede sadeleşir."
          },
          {
            "kind": "h3",
            "text": "Kosekant Kosinüsten Neden Farklıdır?"
          },
          {
            "kind": "p",
            "text": "Adları benzer görünür, ama ilişkiler farklıdır:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kosinüs komşu kenarı hipotenüsle karşılaştırırken, kosekant hipotenüsü karşı kenarla karşılaştırır. Akılda tutulması gereken eşleşme: kosekant sinüsün tersidir, oysa sekant kosinüsün tersidir. İki kofonksiyonu karıştırmak trigonometrideki en yaygın hatalardan biridir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Üç aşama: 3-4-5 üçgeni, sinüs 3/5=0.6, kosekant 5/3=1.6667, csc(A)=1/sin(A) özdeşliği",
            "caption": "Sinüs ve kosekant birbirinin tersidir: 3/5'i çevirmek 5/3 verir ve csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Kosekant Formülü Adım Adım Açıklaması",
        "blocks": [
          {
            "kind": "p",
            "text": "Formül keyfi değildir; doğrudan sinüs tanımından gelir. Sinüs oranıyla başlayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "İki tarafın da tersini alın. Pay ve payda yer değiştirir:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Kosekant tanım gereği sinüsün tersi olduğundan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenüs payda olduğu için payda sinüsün paydasında yer alır; karşı kenar sinüsün payı olduğu için paydaya düşer. Türetmenin tamamı budur."
          },
          {
            "kind": "h3",
            "text": "Tam Çözümlü Örnek: 3-4-5 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilen [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Adım 1: Formülü yazın. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Adım 2: Ölçümleri yerine koyun. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Adım 3: Bölün. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Adım 4: Sinüs kullanarak doğrulayın. [[\\sin(A)=3/5=0.6]] ve [[1/0.6\\approx1.6667]]. İki yol da aynı değere ulaşır, çünkü bunlar tek bir üçgenin ters görünümleridir. 1,6667'nin yuvarlanmış ondalık olduğunu unutmayın; [[5/3]] bu kenar uzunlukları için tam orandır."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Kosekant Oranı Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          {
            "kind": "p",
            "text": "Aşağıdaki açıklama bu sayfadaki gerçek arayüzle birebir eşleşir."
          },
          {
            "kind": "p",
            "text": "Hesaplayıcının asla istemediği şeylere dikkat edin: derece cinsinden [[A]] açısı yok, komşu kenar yok ve sinüs değeri yok. İki kenar uzunluğu tam girdidir, çünkü [[c/a]] oranı başka hiçbir şeye bağlı değildir."
          }
        ],
        "steps": [
          "<strong>Referans açı [[A]] belirleyin.</strong> Oranın hangi dar açıyı tanımladığına karar verin, çünkü karşı kenar ona göre tanımlanır.",
          "<strong>Hipotenüs [[c]] bulun.</strong> Bu, dik açının karşısındaki kenardır ve üçgenin en uzun kenarıdır.",
          "<strong>Karşı kenar [[a]] bulun.</strong> Bu, [[A]] açısının tam karşısındaki kenardır.",
          "<strong>İki kenar uzunluğunu ölçün veya edinin.</strong> Bir mezura, bir çizim veya verilen verileri kullanın, ikisi için de aynı birimi koruyarak.",
          "<strong>Hipotenüsü ilk giriş alanına girin.</strong> Bu, iki değerin büyüğüdür.",
          "<strong>Karşı kenarı ikinci giriş alanına girin.</strong> Bu, iki değerin küçüğüdür.",
          "<strong>Birim seçicilerle uyumlu birimler seçin.</strong> Bölmenin anlamlı olması için iki alan da aynı birimi kullanmalıdır.",
          "<strong>İki değerin de pozitif olduğunu onaylayın.</strong> Sıfır veya negatif uzunluklar üçgen oluşturamaz.",
          "<strong>Hipotenüsün karşı kenardan uzun olduğunu kontrol edin.</strong> Değilse, girdiler yer değiştirmiş veya yanlış etiketlenmiştir.",
          "<strong>Hesapla csc(A) düğmesine tıklayın.</strong> Araç hipotenüsü karşı kenara böler.",
          "<strong>Ortaya çıkan kosekant oranını okuyun.</strong> Bu, hipotenüsü karşı kenarın bir katı olarak tanımlayan boyutsuz bir sayıdır.",
          "<strong>Cevabın 1'den büyük olduğunu doğrulayın.</strong> 1 veya altındaki her şey bir giriş hatasına işaret eder.",
          "<strong>Girdileri temizlemek için Reset kullanın</strong> ve başka bir hesaplamaya başlayın."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Kosekant Hesaplamanın Adım Adım Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Bu dört örnek, gerçek dünya uygulamalarından önce temel beceriyi geliştirir. Her biri aynı deseni izler: formülü yazın, yerine koyun, bölün."
          },
          {
            "kind": "h3",
            "text": "Örnek 1: 3-4-5 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilen [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Hipotenüs, karşı kenarın yaklaşık 1,6667 katıdır. Komşu kenar verilen verilerde yalnızca üçgeni tamamlamak için görünür; formül onu yok sayar."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: 5-12-13 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilen [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Sonuç 1'i aşar, çünkü hipotenüs karşı kenardan uzundur. 12 m komşu kenar bu hesaplama için gerekli değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: 30-60-90 Üçgeni"
          },
          {
            "kind": "p",
            "text": "[[A=30^\\circ]] açısı için karşı kenar hipotenüsün yarısıdır. [[a=5\\text{ cm}]] ve [[c=10\\text{ cm}]] ile:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Doğrulayın: [[\\sin(30^\\circ)=0.5]] ve [[1/0.5=2]]. Bu tam değer ezberlemeye değer, çünkü 30-60-90 üçgeni geometri problemlerinde sürekli karşınıza çıkar."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: Karşı Kenarı 8 ve Hipotenüsü 10 Olan Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilen [[a=8\\text{ m}]] ve [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Bu oran, 3-4-5 sonucuna göre 1'e daha yakındır, çünkü karşı kenar hipotenüsün daha büyük bir oranıdır: 3/5'e karşı 8/10."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Kosekant Oranını Kullanmanın Gerçek Hayattan Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekant matematiksel bir orandır, şantiyede tek başına raporlanan bir sayı değildir. Değeri, hipotenüs-karşı kenar ilişkisini tanımlamakta, hesaplamaları doğrulamakta ve kosekant gerektiren formülleri beslemektedir. Aşağıdaki her örnek basitleştirilmiş bir dik üçgen varsayar."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: Merdiven Uzunluğunu Yüksekliğine Göre Anlama"
          },
          {
            "kind": "p",
            "text": "5,5 m'lik bir merdiven dikey bir duvarda 4,5 m'ye ulaşır. Merdiven hipotenüstür [[c=5.5\\text{ m}]]; erişim karşı kenardır [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], yani [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Merdiven dikey yüksekliğin yaklaşık 1,2222 katıdır ve [[c=a\\times\\csc(A)]] merdiven uzunluğunu yükseklikten geri elde eder. Bu oran yalnızca geometriyi tanımlar, merdiven güvenliğini değil."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: Çatı Kirişinin Kosekant Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "6,5 m'lik bir çatı kirişinin dikey yüksekliği 4 m'dir: kiriş eğik hipotenüstür [[c=6.5\\text{ m}]]; yükseklik karşı kenardır [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], yani [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Kiriş dikey yüksekliğin 1,625 katıdır. Bu hesaplama yapısal uygunluğu veya çatı tasarımına uyumu doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: Rampanın Kosekant Oranını Değerlendirme"
          },
          {
            "kind": "p",
            "text": "Bir rampanın eğik uzunluğu 9,5 m ve dikey yüksekliği 0,75 m'dir: [[c=9.5\\text{ m}]] ve [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], yani [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Oran büyüktür, çünkü eğik uzunluk dikey yüksekliği çok aşar, yumuşak bir rampada olması gerektiği gibi. Oran tek başına erişilebilirliği veya yapı yönetmeliğine uyumu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: Kot Farkı Bilinen Bir Ölçü Hattı"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir arazi ölçümü 50 m doğrusal mesafe ve 30 m dikey fark kaydeder: doğru hat hipotenüstür [[c=50\\text{ m}]]; dikey fark karşı kenar olarak alınır [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], yani [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Eğik mesafe dikey bileşenin yaklaşık 1,6667 katıdır. Gerçek arazi ölçümleri bu basitleştirilmiş modelin ötesinde ek düzeltmeler gerektirebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: Germe Telinin Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "18 m'lik bir germe telinin uçları arasında 10 m dikey ayrım vardır: tel hipotenüstür [[c=18\\text{ m}]]; ayrım karşı kenardır [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], yani [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Tel dikey ayrımın 1,8 katıdır. Oran tel gerilimini, ankraj dayanımını veya yapısal güvenliği belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: Merdiven Kirişinin Oranını Değerlendirme"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş 5 m'lik bir merdiven kirişinin dikey yüksekliği 2,8 m'dir: kiriş hipotenüstür [[c=5\\text{ m}]]; yükseklik karşı kenardır [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], yani [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Köşegen dikey yüksekliğin yaklaşık 1,7857 katıdır: basitleştirilmiş bir geometrik hesaplamadır, eksiksiz bir merdiven tasarım değerlendirmesi değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: Uçağın Doğrusal Uçuş Bölümü"
          },
          {
            "kind": "p",
            "text": "Bir uçak doğrusal bir yolda 5 km yol alırken 1,5 km irtifa kazanır: yol hipotenüstür [[c=5\\text{ km}]]; irtifa kazanımı karşı kenardır [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], yani [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Uçuş mesafesi dikey kazanımı çok aşar, bu yüzden oran büyüktür. Bu idealleştirilmiş bir örnektir, değişen bir uçuş yolunun eksiksiz analizi değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: Mekanik Bir Destek"
          },
          {
            "kind": "p",
            "text": "Çapraz bir destek 1700 mm uzunluğunda ve 800 mm dikey bileşenlidir: destek hipotenüstür [[c=1700\\text{ mm}]]; dikey bileşen karşı kenardır [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], yani [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "İki kenar da aynı birimi paylaştığında milimetreler metreler kadar iyi iş görür. Oran desteğin dayanımını belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: Vinç Kolu"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş 10 m'lik bir vinç kolunun dikey bileşeni 8 m'dir: kol hipotenüstür [[c=10\\text{ m}]]; dikey bileşen karşı kenardır [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], yani [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Kolun uzunluğu dikey bileşeninin yalnızca 1,25 katıdır. Oran kaldırma kapasitesini veya işletme güvenliğini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: Ağaç Tepesine Görüş Hattı"
          },
          {
            "kind": "p",
            "text": "Bir ağacın tepesine 20 m'lik bir görüş hattı, gözlemcinin göz hizasından 12 m dikey farka sahiptir: görüş hattı hipotenüstür [[c=20\\text{ m}]]; dikey fark karşı kenardır [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], yani [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Görüş mesafesi dikey farkın yaklaşık 1,6667 katıdır. Sonuç ağacın yerden toplam yüksekliğini vermez."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: Yürüyüş Rotasının Doğrusal Eğimi"
          },
          {
            "kind": "p",
            "text": "Doğrusal bir yürüyüş bölümü 80 m kot kazanımıyla 100 m eğimlenir: eğim hipotenüstür [[c=100\\text{ m}]]; kazanım karşı kenardır [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], yani [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Oran 1'e yakındır, çünkü dikey bileşen eğimin büyük bir payıdır. Gerçek yürüyüş rotalarının eğimleri değişebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: Tente Desteği"
          },
          {
            "kind": "p",
            "text": "3,5 m'lik bir tente desteğinin dikey bileşeni 1,2 m'dir: destek hipotenüstür [[c=3.5\\text{ m}]]; dikey bileşen karşı kenardır [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], yani [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Destek dikey bileşeninin yaklaşık 2,9167 katıdır. Sonuç yapısal uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Pratik Örneklerin Karşılaştırılması"
          },
          {
            "kind": "p",
            "text": "Desen tutarlıdır: karşı kenar hipotenüsün küçük bir kesri olduğunda oran büyüktür, ikisi neredeyse eşit olduğunda 1'e yakındır. Kosekantı bir çarpan olarak okumak her sonucu anlamlı kılar."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Durum", "Hipotenüs c", "Karşı kenar a", "Kosekant formülü", "Hesaplanan oran", "Yorum"],
            "rows": [
              ["Merdiven", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Merdiven yüksekliğin 1,2222 katı"],
              ["Çatı kirişi", "6.5 m", "4 m", "6.5/4", "1.625", "Kiriş yüksekliğin 1,625 katı"],
              ["Rampa", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Eğim yüksekliğin 12,6667 katı"],
              ["Arazi ölçümü", "50 m", "30 m", "50/30", "1.6667", "Mesafe düşüşün 1,6667 katı"],
              ["Germe teli", "18 m", "10 m", "18/10", "1.8", "Tel ayrımın 1,8 katı"],
              ["Merdiven kirişi", "5 m", "2.8 m", "5/2.8", "1.7857", "Kiriş yüksekliğin 1,7857 katı"],
              ["Uçuş bölümü", "5 km", "1.5 km", "5/1.5", "3.3333", "Yol kazanımın 3,3333 katı"],
              ["Mekanik destek", "1700 mm", "800 mm", "1700/800", "2.125", "Destek bileşenin 2,125 katı"],
              ["Vinç kolu", "10 m", "8 m", "10/8", "1.25", "Kol bileşenin 1,25 katı"],
              ["Ağaç görüş hattı", "20 m", "12 m", "20/12", "1.6667", "Görüş hattı farkın 1,6667 katı"],
              ["Yürüyüş eğimi", "100 m", "80 m", "100/80", "1.25", "Eğim kazanımın 1,25 katı"],
              ["Tente desteği", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Destek bileşenin 2,9167 katı"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Dört panel: merdiven 1.2222, kiriş 1.625, rampa 12.6667, arazi ölçümü 1.6667 kosekant oranları dik üçgenlerle",
            "caption": "Dört pratik hesaplama: her panel üçgeni, formülü ve oranı gösterir."
          }
        ]
      },
      "csc-angle": {
        "h2": "Kosekant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosekant açıyla ters yönde hareket eder. Dar açı küçük olduğunda, karşı kenar hipotenüse göre kısadır, bu yüzden [[c/a]] büyüktür. Açı büyüdükçe, karşı kenar hipotenüse doğru uzar ve oran küçülür. Aşağıdaki doğrulanmış başvuru değerleri deseni gösterir:"
          },
          {
            "kind": "p",
            "text": "Açı [[90^\\circ]]'ye yaklaştıkça karşı kenar hipotenüse yaklaşır ve oran 1'e yaklaşır, ancak her geçerli, yozlaşmamış dik üçgen için 1'in üzerinde kalır. 90 derecelik satır yalnızca sınırlayıcı bir başvurudur, çünkü [[A]] açısı dar olmalıdır. Açı [[0^\\circ]]'ye yaklaştıkça karşı kenar sıfıra doğru küçülür ve oran sınırsız büyür. 1'e yakın bir oran nispeten büyük bir dar açıya işaret eder; büyük bir oran nispeten küçük bir açıya işaret eder."
          },
          {
            "kind": "p",
            "text": "Hesaplayıcı açı girişi kabul etmez; oranı iki kenar uzunluğundan hesaplar. Bu başvuru değerleri yönlendirme görevi görür ve bir sonucu doğrularken kontrol değerleri olarak kullanılır."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["A Açısı", "Sinüs sin(A)", "Kosekant csc(A)"],
            "rows": [
              ["30 derece", "0.5", "2"],
              ["45 derece", "0.7071", "1.4142"],
              ["60 derece", "0.8660", "1.1547"],
              ["90 derece", "1", "1, sınır değer olarak"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 derecede üç üçgen, kosekant değerleri 2, 1.4142, 1.1547; açı büyüdükçe oran düşer",
            "caption": "Karşı kenar hipotenüsün daha büyük bir payı haline geldikçe csc(A) 1'e yaklaşır."
          }
        ]
      },
      "csc-recover": {
        "h2": "Hipotenüsü Bulmak için Kosekant Kullanma",
        "blocks": [
          {
            "kind": "p",
            "text": "Formül düzgünce yeniden düzenlenir. Şununla başlayın:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "İki tarafı da [[a]] ile çarpın:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Hipotenüs, karşı kenarın kosekant oranıyla çarpımıdır. [[a=6\\text{ m}]] ve [[\\csc(A)=2.5]] ile:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Sonuç karşı kenardan uzundur, her hipotenüsün olması gerektiği gibi."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nasıl Geri Elde Edilir"
          },
          {
            "kind": "p",
            "text": "Bunun yerine [[a]] için çözmek şunu verir:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=12\\text{ m}]] ve [[\\csc(A)=2]] ile:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Bunlar aynı oranın matematiksel yeniden düzenlemeleridir. Bu sayfadaki hesaplayıcı oranın kendisini hesaplar; ayrı bir hipotenüs bulma veya karşı kenar bulma modu sunmaz."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Kosekant Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [
          {
            "kind": "h3",
            "text": "Yanlışa Karşı Doğru"
          },
          {
            "kind": "p",
            "text": "Verilen [[c=5]] ve [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Yanlış: [[3/5=0.6]]. Bu sinüs oranıdır, kosekant oranı değil."
          },
          {
            "kind": "p",
            "text": "Doğru: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Doğrulayın: [[\\csc(A)=1/\\sin(A)]] ve [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Kosekantı sinüsle karıştırmak.</strong> Sinüs [[a/c]]'dir; kosekant [[c/a]]'dır. Yanlış giden: 3-4-5 üçgeni için 0,6 rapor etmek. Düzeltme: hipotenüsü üste koyun.",
          "<strong>Formülü [[c/a]] yerine [[a/c]]'ye çevirmek.</strong> Yanlış giden: cevap sinüstür, her zaman 1'in altındadır. Düzeltme: uzun kenarın pay olduğunu kontrol edin.",
          "<strong>Kosekantı sekantla karıştırmak.</strong> Sekant [[c/b]]'dir, kosinüsün tersidir. Yanlış giden: komşu kenarı kullanmak. Düzeltme: kosekant sinüs ve karşı kenarla eşleşir.",
          "<strong>Karşı kenar yerine komşu kenarı kullanmak.</strong> Yanlış giden: yanlışlıkla [[c/b]] hesaplamak. Düzeltme: bölmeden önce [[A]] açısının karşısındaki kenarı doğrulayın.",
          "<strong>Kosekantın dereceyle ölçüldüğünü varsaymak.</strong> Yanlış giden: 1,6667 derece yazmak. Düzeltme: oran saf bir sayıdır, açı değildir.",
          "<strong>Kosekant oranını metre veya santimetreyle rapor etmek.</strong> Yanlış giden: birimler zaten sadeleşmişti. Düzeltme: birimi cevaptan çıkarın.",
          "<strong>Geçerli bir üçgen için 1'den küçük bir sonucu kabul etmek.</strong> Yanlış giden: girdileri yer değiştirmiş bir hesaplamaya güvenmek. Düzeltme: geçerli bir sonuç her zaman 1'i aşar.",
          "<strong>Karşı kenardan kısa bir hipotenüs girmek.</strong> Yanlış giden: girdiler imkansız bir üçgeni tanımlar. Düzeltme: hipotenüs alanı daha uzun ölçümü tutmalıdır.",
          "<strong>Sıfır veya negatif kenar uzunlukları girmek.</strong> Yanlış giden: sıfıra bölme veya anlamsız bir negatif oran. Düzeltme: yalnızca pozitif uzunluklar kullanın.",
          "<strong>Ölçü birimlerini karıştırmak.</strong> Yanlış giden: santimetreyi metreye bölmek oranı 100 katı kaydırır. Düzeltme: önce iki kenarı da tek bir birime çevirin.",
          "<strong>Çok erken yuvarlamak.</strong> Yanlış giden: [[5/3]]'ü geri çarpmadan önce 1,67'ye yuvarlamak kaçınılabilir hata ekler. Düzeltme: kesri veya ek basamakları son adıma kadar koruyun.",
          "<strong>Referans açıyı diğer dar açıyla karıştırmak.</strong> Yanlış giden: karşı ve komşu etiketler yer değiştirir. Düzeltme: önce [[A]] açısını diyagramda işaretleyin.",
          "<strong>Büyük bir kosekant oranının açı olduğunu varsaymak.</strong> Yanlış giden: 12,6667'yi derece olarak okumak. Düzeltme: bu bir çarpandır, yani hipotenüs karşı kenarın 12,6667 katıdır.",
          "<strong>Kosekantın tek başına hipotenüsü belirlediğini varsaymak.</strong> Yanlış giden: tek bir sayının bir uzunluk vermesini beklemek. Düzeltme: oran karşı kenara da ihtiyaç duyar, [[c=a\\times\\csc(A)]] aracılığıyla.",
          "<strong>Sinüsün tersini kosinüsün tersiyle karıştırmak.</strong> Yanlış giden: kosekantın ait olduğu yerde sekant kullanmak. Düzeltme: sinüs kosekantla eşleşir; kosinüs sekantla eşleşir."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Kosekant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "blocks": [
          {
            "kind": "p",
            "text": "Geçerli, yozlaşmamış bir dik üçgen şunu gerektirir:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Bu nedenle [[c/a \\gt 1]]. İki ölçüm de uyumlu birimler kullanmalı ve hesaplanan oran 1'i aşmalıdır. Tam 1 sonucu, dar açı 90 dereceye yaklaştığında yalnızca bir sınır değerdir, gerçek bir üçgenin sonucu değildir. 1'in altındaki bir oran genellikle ters çevrilmiş girdilere, yanlış bir kenar etiketine veya uyumsuz ölçümlere işaret eder."
          },
          {
            "kind": "h3",
            "text": "Yöntem 1: Sinüs Tersini Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "[[\\sin(A)=a/c]] hesaplayın, sonra [[\\csc(A)=1/\\sin(A)]]. 3-4-5 üçgeni için [[\\sin(A)=3/5=0.6]] ve [[1/0.6\\approx1.6667]], doğrudan bölmeyle eşleşir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 2: Pisagor Teoremini Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "Komşu kenar biliniyorsa veya gerekiyorsa [[b=\\sqrt{c^2-a^2}]] doğrulayın. [[c=5]] ve [[a=3]] için: [[b=\\sqrt{25-9}=4]] ve [[3^2+4^2=5^2]]. Bu, kenar uzunluklarının bir dik üçgen oluşturduğunu doğrular."
          },
          {
            "kind": "h3",
            "text": "Yöntem 3: Oranı Çarpmayla Kontrol Edin"
          },
          {
            "kind": "p",
            "text": "[[a\\times\\csc(A)\\approx c]] doğrulayın. [[a=3]] ve [[\\csc(A)=5/3]] için: [[3\\times\\frac{5}{3}=5]]. Görüntülenen bir ondalık yuvarlandığında küçük farklar görünebilir; tam kesir bunları giderir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Kosekant, Sinüs, Sekant ve Diğer Trigonometrik Oranlara Karşı",
        "blocks": [
          {
            "kind": "p",
            "text": "Her oran farklı bir kenar çiftini karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "Ters çiftler sinüs ile kosekant ve kosinüs ile sekanttır: [[\\csc(A)=1/\\sin(A)]], oysa [[\\sec(A)=1/\\cos(A)]]. Kosekant ve sekant birbirinin yerine kullanılamaz. Sinüs, bilinen karşı kenar ve hipotenüsü olan doğrudan ölçüm problemlerine uygundur; kosekant, ters çevresinde kurulan formüllere ve bilinen bir kosekant değerinden hipotenüsü geri elde etmeye uygundur."
          },
          {
            "kind": "p",
            "text": "Komşu oranlar için <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinüs Oranı Hesaplayıcısı</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekant Oranı Hesaplayıcısı</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotanjant Oranı Hesaplayıcısı</a> ve <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Trigonometrik Oranlar Hesaplayıcısı</a> sayfalarına bakın. Kenar uzunluğunun kendisi bilinmeyen olduğunda <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Dik Üçgen Kenar Hesaplayıcısı</a> yardımcı olur."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Oran", "Formül", "Karşılaştırdığı şey"],
            "rows": [
              ["Sinüs", "sin(A) = a/c", "Karşı kenarın hipotenüse"],
              ["Kosekant", "csc(A) = c/a", "Hipotenüsün karşı kenara"],
              ["Kosinüs", "cos(A) = b/c", "Komşu kenarın hipotenüse"],
              ["Sekant", "sec(A) = c/b", "Hipotenüsün komşu kenara"],
              ["Tanjant", "tan(A) = a/b", "Karşı kenarın komşu kenara"],
              ["Kotanjant", "cot(A) = b/a", "Komşu kenarın karşı kenara"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Sık Sorulan Sorular",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Dik Üçgen Trigonometrik Oranlar Hesaplayıcısı",
            "desc": "Altı trigonometrik oranı tek bir yerde birlikte hesaplayın."
          },
          {
            "name": "Sinüs Oranı Hesaplayıcısı",
            "desc": "Karşı kenar ve hipotenüsten sinüs oranını bulun."
          },
          {
            "name": "Sekant Oranı Hesaplayıcısı",
            "desc": "Hipotenüs ve komşu kenardan sekant oranını bulun."
          },
          {
            "name": "Kotanjant Oranı Hesaplayıcısı",
            "desc": "Komşu kenar ve karşı kenardan kotanjant oranını bulun."
          },
          {
            "name": "Dik Üçgen Kenar Hesaplayıcısı",
            "desc": "Açılardan veya Pisagor teoreminden bilinmeyen kenar uzunluğunu bulun."
          },
          {
            "name": "Dik Üçgen Açı Hesaplayıcısı",
            "desc": "Bilinen kenar uzunluklarından dar açıyı bulun."
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
        "question": "Dik üçgende kosekant formülü nedir?",
        "answer": "Formül csc(A) = c / a'dır: hipotenüsü A açısının karşısındaki kenara bölün. 5 hipotenüs ve 3 karşı kenar için sonuç 5/3, yaklaşık 1,6667 olur. Aynı değer ters özdeşlik csc(A) = 1 / sin(A)'dan gelir."
      },
      {
        "question": "Kosekant sinüsle nasıl ilişkilidir?",
        "answer": "Kosekant sinüsün tersidir: csc(A) = 1 / sin(A). Sinüs karşı kenarı hipotenüse böler; kosekant o kesri çevirir. İkisi de aynı üçgeni tanımlar ve çarpımları her zaman 1'dir. sin(A) = 0,6 ise csc(A) = 1 / 0,6, yaklaşık 1,6667 olur."
      },
      {
        "question": "Geçerli bir dik üçgende kosekant neden 1'den büyüktür?",
        "answer": "Geçerli, yozlaşmamış bir dik üçgende hipotenüs en uzun kenardır, bu yüzden c, a'yı aşar ve daha büyük bir sayının daha küçük pozitif bir sayıya bölümü her zaman 1'in üzerindedir. 1 veya daha düşük bir oran, ters çevrilmiş girdilere, yanlış bir kenar etiketine veya imkansız ölçümlere işaret eder."
      },
      {
        "question": "Kosekant ile sekant arasındaki fark nedir?",
        "answer": "Kosekant hipotenüsü karşı kenara böler (c/a), oysa sekant hipotenüsü komşu kenara böler (c/b). Kosekant sinüsün tersidir; sekant kosinüsün tersidir. Farklı soruları yanıtlarlar, bu yüzden karşı ve komşu kenarlar farklı olduğunda bunları değiştirmek yanlış cevap verir."
      },
      {
        "question": "30 derecelik açının kosekantı kaçtır?",
        "answer": "30 derecenin kosekantı tam olarak 2'dir, çünkü 30 derecenin karşısındaki kenar hipotenüsün yarısıdır: c/a = 2/1 = 2. Kontrol edin: sin(30 derece) = 0,5 ve 1 / 0,5 = 2. Ezberlemeye değer birkaç kosekant değerinden biridir."
      },
      {
        "question": "Kosekant oranının birimi var mıdır?",
        "answer": "Hayır. Hem hipotenüs hem karşı kenar aynı birimle ölçülür, bu yüzden birimler bölme sırasında sadeleşir. Kenarlar santimetre, metre veya milimetre olsun, kosekant oranı saf boyutsuz bir sayıdır. Onu asla derece, metre veya fit ile birlikte rapor etmeyin."
      },
      {
        "question": "Kosekant 1'den küçük olabilir mi?",
        "answer": "Geçerli, yozlaşmamış bir dik üçgen için olamaz. Hipotenüs karşı kenardan uzun olduğundan, c/a 1'i aşmalıdır. 1 veya daha düşük bir sonuç neredeyse her zaman iki girdinin yer değiştirdiği anlamına gelir, bu yüzden araç c/a yerine a/c'yi (yani sinüsü) hesaplamıştır. Hangi ölçümün hipotenüs olduğunu yeniden kontrol edin."
      },
      {
        "question": "Kenar uzunluklarından kosekant nasıl hesaplanır?",
        "answer": "Hipotenüs c ile karşı kenar a'yı belirleyin, ikisinin de aynı birimi kullandığını ve c'nin a'dan uzun olduğunu onaylayın, sonra csc(A) = c / a hesaplayın. c = 13 m ve a = 5 m ile cevap 13/5 = 2,6 olur."
      },
      {
        "question": "Kosekant kullanarak hipotenüs nasıl bulunur?",
        "answer": "Formülü c = a x csc(A) olarak yeniden düzenleyin. Bilinen karşı kenarı kosekant oranıyla çarpın. a = 6 m ve csc(A) = 2,5 ise c = 6 x 2,5 = 15 m olur. Sonuç her zaman karşı kenardan uzundur, bu aritmetiğin hızlı bir sağduyu kontrolüdür."
      },
      {
        "question": "Kosekant hesaplayıcısının açı girdisine ihtiyacı var mıdır?",
        "answer": "Hayır. Hesaplayıcının yalnızca iki kenar uzunluğuna ihtiyacı vardır: hipotenüs ve karşı kenar. c/a oranı bu ölçümlerle tamamen belirlenir, bu yüzden A açısı hesaplamaya asla girmez."
      },
      {
        "question": "Açı büyüdükçe kosekant nasıl değişir?",
        "answer": "Dar açı büyüdükçe kosekant azalır. Küçük bir açının hipotenüse göre kısa bir karşı kenarı vardır, bu yüzden oran büyüktür; büyük bir açının neredeyse hipotenüs kadar uzun bir karşı kenarı vardır, bu yüzden oran 1'in biraz üzerinde olur. Örneğin csc(30 derece) = 2, csc(45 derece) yaklaşık 1,4142 ve csc(60 derece) yaklaşık 1,1547'dir."
      },
      {
        "question": "Sinüs yerine kosekantı ne zaman kullanmalıyım?",
        "answer": "Hipotenüs bölü karşı kenara ihtiyaç duyduğunuzda kosekant kullanın: kosekant çevresinde kurulan formüllerde, ters özdeşlik çalışmasında veya bir problem kosekant değeri verip bir kenar sorduğunda. Doğrudan ölçüm problemleri için sinüs genellikle daha doğal seçimdir."
      }
    ],
    "conclusion": {
      "h2": "Kosekant Oranında Güvenle Ustalaşın",
      "paragraphs": [
        "Kosekant, diğer taraftan görülen sinüstür: hipotenüsü karşı kenara bölün ve sonuç size hipotenüse kaç tane karşı kenar uzunluğu sığdığını söyler. [[\\csc(A)=c/a]] formülü yalnızca iki ölçüm ister, cevap her zaman 1'in üzerinde boyutsuz bir sayıdır ve ters özdeşlik [[\\csc(A)=1/\\sin(A)]] size her hesaplamayı kontrol etmenin yerleşik bir yolunu verir. Üçgen ister bir merdiven, ister bir kiriş, ister ders kitabından bir 3-4-5 olsun, yöntem asla değişmez: hipotenüsü belirleyin, karşı kenarı belirleyin, bölün ve doğrulayın. Üçgen geometrisini onaylamak için <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">Pisagor teoremi hesaplayıcısı</a> elinizin altında olsun ve her kosekant hesaplaması için bu sayfayı yer imlerine ekleyin."
      ]
    }
  },
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "csc-intro": "Vad är en cosekantkvotskalkylator?",
      "csc-triangle": "Förstå hypotenusan och den motstående kateten",
      "csc-whatis": "Förstå cosekans i trigonometri",
      "csc-formula": "Cosekansformeln förklarad steg för steg",
      "csc-howto": "Så använder du kalkylatorn",
      "csc-examples": "Steg-för-steg-exempel",
      "csc-applications": "Exempel från verkliga livet",
      "csc-angle": "Cosekans och vinkelstorlek",
      "csc-recover": "Hitta hypotenusan med cosekans",
      "csc-mistakes": "Vanliga misstag",
      "csc-verify": "Kontrollera ditt resultat",
      "csc-vs": "Cosekans mot andra kvoter",
      "csc-faq": "Vanliga frågor",
      "csc-related": "Relaterade kalkylatorer"
    },
    "sections": {
      "csc-intro": {
        "h2": "Vad är en cosekantkvotskalkylator?",
        "blocks": [
          {
            "kind": "p",
            "text": "En cosekantkvotskalkylator hittar cosekansen för en spetsig vinkel i en rätvinklig triangel utifrån två sidlängder: hypotenusan [[c]] och den motstående kateten [[a]]. Den dividerar den första med den andra och ger [[\\csc(A)=c/a]]. Cosekans är sinus reciproka värde: där sinus ger motstående katet dividerat med hypotenusan, ger cosekans hypotenusan dividerat med motstående katet, så de två värdena multiplicerade blir alltid 1."
          },
          {
            "kind": "p",
            "text": "Kalkylatorn behöver varken vinkelindata eller närliggande katet, eftersom kvoten [[c/a]] är helt bestämd av dessa två längder. Svaret är ett rent tal utan enheter, eftersom centimeter dividerat med centimeter tar ut varandra, och det beskriver hypotenusan som en multipel av den motstående kateten. För en hypotenusa på 5 cm och en motstående katet på 3 cm blir [[\\csc(A)=5/3\\approx1.6667]], vilket betyder att hypotenusan är ungefär 1,67 gånger den motstående kateten."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "Förstå hypotenusan och den motstående kateten",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt [[90^\\circ]], vinkeln mellan två vinkelräta linjer, som en vägg som möter ett plant golv. Hypotenusan ligger mitt emot den räta vinkeln och är alltid den längsta sidan. Eftersom de tre vinklarna tillsammans måste bli [[180^\\circ]], delar de återstående två vinklarna exakt 90 grader och är därför båda spetsiga. Cosekans hör till denna geometri eftersom dess formel jämför två av dessa sidor, hypotenusan och den motstående kateten, i ett fast förhållande."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående kateten?"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten är sidan rakt mitt emot referensvinkeln [[A]]: det är den enda sidan i triangeln som inte vidrör hörnet för [[A]]. Vilken sida som räknas som motstående beror på referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[B]] växlar de två kateternas beteckningar. I praktiska problem representerar den motstående kateten ofta en vertikal höjd, en höjdskillnad eller det vinkelräta benet i en konstruktion. Att få referensvinkeln rätt spelar roll, eftersom fel vinkel tyst växlar den motstående och den närliggande kateten."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är sidan mitt emot den räta vinkeln, och två fakta identifierar den i varje diagram, hur triangeln än är vriden: den vetter mot den lilla kvadraten som markerar hörnet på [[90^\\circ]], och den är den längsta sidan. I en giltig, icke-degenererad triangel är den strikt längre än vartdera benet. I verkliga sammanhang kan den representera en stege som lutar mot en vägg, en lutande sträcka, en siktlinje, en takstol eller ett diagonalt stöd."
          },
          {
            "kind": "h3",
            "text": "Vad är den närliggande kateten?"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten [[b]] är det ben som vidrör vinkel [[A]] utan att vara hypotenusan. Den spelar ingen roll i cosekansformeln, vilket är varför kalkylatorn aldrig ber om den. Sidan [[b]] blir relevant för cosinus, tangens, sekans och cotangens, så ha den i åtanke när en annan kvot är målet."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Rätvinklig triangel med vinkel A nere till vänster, gyllene motstående katet a, blå närliggande katet b, rosa hypotenusa c, formeln csc(A)=c/a",
            "caption": "Vinkel A sitter nere till vänster; cosekans använder hypotenusan c och den motstående kateten a, inte den närliggande kateten b."
          }
        ]
      },
      "csc-whatis": {
        "h2": "Förstå cosekans i trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosekans jämför en rätvinklig triangels hela lutande sida med sidan mitt emot referensvinkeln:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Här är [[\\csc(A)]] cosekansen för vinkel [[A]], [[c]] är hypotenusan och [[a]] är den motstående kateten. Kvoten svarar på en fråga: hur många motstående katetlängder får plats i hypotenusan?"
          },
          {
            "kind": "h3",
            "text": "Cosekans som sinus reciproka värde"
          },
          {
            "kind": "p",
            "text": "Börja med sinusformeln:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Att ta det reciproka värdet vänder bråket, flyttar hypotenusan till täljaren och den motstående kateten till nämnaren:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Eftersom cosekans per definition är sinus reciproka värde:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "En konkret kontroll gör vändningen synlig. Med [[\\sin(A)=3/5=0.6]] blir det reciproka värdet [[1/0.6=5/3\\approx1.6667]], vilket är exakt cosekansen. Båda talen beskriver samma triangel ur reciproka synvinklar, och att multiplicera dem ger alltid 1."
          },
          {
            "kind": "h3",
            "text": "Varför cosekans är större än 1"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är längre än den motstående kateten, så [[c \\gt a]] och därmed [[c/a \\gt 1]]. En snabb numerisk kontroll: med [[c=10]] och [[a=8]] blir kvoten [[10/8=1.25]], över 1 som krävs. För en stor spetsig vinkel är den motstående kateten nästan lika lång som hypotenusan, så kvoten ligger strax över 1, men den kan aldrig bli lika med 1 i en giltig, icke-degenererad rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Vad betyder ett cosekansvärde?"
          },
          {
            "kind": "p",
            "text": "En cosekans på 2 betyder att hypotenusan är exakt dubbelt så lång som den motstående kateten; 1,6667 betyder ungefär 1,6667 gånger. Läs talet som en multiplikator, inte som en vinkel: det bär varken grader eller meter eller fot, eftersom de två sidornas enheter tar ut varandra i divisionen."
          },
          {
            "kind": "h3",
            "text": "Varför skiljer sig cosekans från cosinus?"
          },
          {
            "kind": "p",
            "text": "Namnen ser likartade ut, men relationerna skiljer sig:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Cosinus jämför den närliggande kateten med hypotenusan, medan cosekans jämför hypotenusan med den motstående kateten. Parningen att komma ihåg: cosekans är sinus reciproka värde, medan sekans är cosinus reciproka värde. Att blanda ihop de två kofunktionerna är ett av de vanligaste felen i trigonometri."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tre steg: 3-4-5-triangel, sinus 3/5=0.6, cosekans 5/3=1.6667, identiteten csc(A)=1/sin(A)",
            "caption": "Sinus och cosekans är reciproka: att vända 3/5 ger 5/3, och csc(A) = 1/sin(A)."
          }
        ]
      },
      "csc-formula": {
        "h2": "Cosekansformeln förklarad steg för steg",
        "blocks": [
          {
            "kind": "p",
            "text": "Formeln är inte godtycklig; den följer direkt ur sinus definition. Börja med sinuskvoten:"
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Ta det reciproka värdet av båda sidorna. Täljaren och nämnaren byter plats:"
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Eftersom cosekans per definition är sinus reciproka värde:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "Hypotenusan hamnar i täljaren eftersom den var sinus nämnare; den motstående kateten sjunker till nämnaren eftersom den var sinus täljare. Det är hela härledningen."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: en 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Steg 1: Skriv formeln. [[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "Steg 2: Sätt in mätningarna. [[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "Steg 3: Dividera. [[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Steg 4: Verifiera med sinus. [[\\sin(A)=3/5=0.6]], och [[1/0.6\\approx1.6667]]. Båda vägarna landar på samma värde eftersom de är reciproka vyer av en triangel. Observera att 1,6667 är den avrundade decimalen; [[5/3]] är den exakta kvoten för dessa sidlängder."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "Så använder du cosekantkvotskalkylatorn",
        "blocks": [
          {
            "kind": "p",
            "text": "Genomgången nedan matchar det faktiska gränssnittet på den här sidan."
          },
          {
            "kind": "p",
            "text": "Lägg märke till vad kalkylatorn aldrig ber om: ingen vinkel [[A]] i grader, ingen närliggande katet och inget sinusvärde. Två sidlängder är den fullständiga inmatningen eftersom kvoten [[c/a]] inte beror på något annat."
          }
        ],
        "steps": [
          "<strong>Identifiera referensvinkeln [[A]].</strong> Bestäm vilken spetsig vinkel kvoten beskriver, eftersom den motstående kateten är definierad i förhållande till den.",
          "<strong>Lokalisera hypotenusan [[c]].</strong> Det är sidan mitt emot den räta vinkeln och triangelns längsta sida.",
          "<strong>Lokalisera den motstående kateten [[a]].</strong> Det är sidan rakt mitt emot vinkel [[A]].",
          "<strong>Mät eller skaffa båda sidlängderna.</strong> Använd ett måttband, en ritning eller givna data, och behåll samma enhet för båda.",
          "<strong>Ange hypotenusan i det första inmatningsfältet.</strong> Detta är det större av de två värdena.",
          "<strong>Ange den motstående kateten i det andra inmatningsfältet.</strong> Detta är det mindre av de två värdena.",
          "<strong>Välj kompatibla enheter med enhetsväljarna.</strong> Båda fälten måste använda samma enhet för att divisionen ska vara meningsfull.",
          "<strong>Bekräfta att båda värdena är positiva.</strong> Noll eller negativa längder kan inte bilda en triangel.",
          "<strong>Kontrollera att hypotenusan är längre än den motstående kateten.</strong> Om den inte är det är inmatningarna omkastade eller felmärkta.",
          "<strong>Klicka på Beräkna csc(A).</strong> Verktyget dividerar hypotenusan med den motstående kateten.",
          "<strong>Läs av den resulterande cosekanskvoten.</strong> Det är ett dimensionslöst tal som beskriver hypotenusan som en multipel av den motstående kateten.",
          "<strong>Verifiera att svaret är större än 1.</strong> Allt vid eller under 1 signalerar ett inmatningsfel.",
          "<strong>Använd Reset för att rensa inmatningarna</strong> och starta en ny beräkning."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "Steg-för-steg-exempel på att beräkna cosekans",
        "blocks": [
          {
            "kind": "p",
            "text": "Dessa fyra exempel bygger grundfärdigheten före de verkliga tillämpningarna. Varje exempel följer samma mönster: skriv formeln, sätt in, dividera."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: En rätvinklig 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är ungefär 1,6667 gånger den motstående kateten. Den närliggande kateten förekommer i de givna uppgifterna endast för att fullborda triangeln; formeln ignorerar den."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: En rätvinklig 5-12-13-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "Resultatet överstiger 1 eftersom hypotenusan är längre än den motstående kateten. Den närliggande kateten på 12 m behövs inte för denna beräkning."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: En 30-60-90-triangel"
          },
          {
            "kind": "p",
            "text": "För vinkel [[A=30^\\circ]] är den motstående kateten halva hypotenusan. Med [[a=5\\text{ cm}]] och [[c=10\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "Verifiera: [[\\sin(30^\\circ)=0.5]], och [[1/0.5=2]]. Detta exakta värde är värt att memorera eftersom 30-60-90-triangeln ständigt dyker upp i geometriproblem."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: En triangel med motstående katet 8 och hypotenusa 10"
          },
          {
            "kind": "p",
            "text": "Givet [[a=8\\text{ m}]] och [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "Denna kvot ligger närmare 1 än 3-4-5-resultatet eftersom den motstående kateten är en större andel av hypotenusan: 8/10 mot 3/5."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "Exempel från verkliga livet på att använda cosekanskvoten",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosekans är en matematisk kvot snarare än ett tal som rapporteras ensamt på en arbetsplats. Dess värde ligger i att beskriva förhållandet hypotenusa till motstående katet, verifiera beräkningar och mata formler som kräver cosekans. Varje exempel nedan förutsätter en förenklad rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: Förstå en steges längd i förhållande till dess höjd"
          },
          {
            "kind": "p",
            "text": "En 5,5 m stege når 4,5 m upp längs en vertikal vägg. Stegen är hypotenusan [[c=5.5\\text{ m}]]; räckvidden är den motstående kateten [[a=4.5\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]], så [[\\boxed{\\csc(A)\\approx1.2222}]]."
          },
          {
            "kind": "p",
            "text": "Stegen är ungefär 1,2222 gånger den vertikala höjden, och [[c=a\\times\\csc(A)]] återfår stegens längd från höjden. Denna kvot beskriver endast geometri, inte stegsäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: Beräkna en takstols cosekanskvot"
          },
          {
            "kind": "p",
            "text": "En 6,5 m takstol har en vertikal resning på 4 m: takstolen är den lutande hypotenusan [[c=6.5\\text{ m}]]; resningen är den motstående kateten [[a=4\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]], så [[\\boxed{\\csc(A)=1.625}]]."
          },
          {
            "kind": "p",
            "text": "Takstolen är 1,625 gånger den vertikala resningen. Denna beräkning verifierar inte strukturell lämplighet eller takdesignens överensstämmelse."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Utvärdera en ramps cosekanskvot"
          },
          {
            "kind": "p",
            "text": "En ramp har en lutande längd på 9,5 m och en vertikal resning på 0,75 m: [[c=9.5\\text{ m}]] och [[a=0.75\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]], så [[\\boxed{\\csc(A)\\approx12.6667}]]."
          },
          {
            "kind": "p",
            "text": "Kvoten är stor eftersom den lutande längden vida överstiger den vertikala resningen, som en flack ramp bör. Kvoten ensam avgör inte tillgänglighet eller byggnormers efterlevnad."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: En mätningslinje med känd höjdskillnad"
          },
          {
            "kind": "p",
            "text": "En förenklad lantmäterimätning registrerar en rak sträcka på 50 m och en vertikal skillnad på 30 m: den raka linjen är hypotenusan [[c=50\\text{ m}]]; med den vertikala skillnaden som motstående katet [[a=30\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]], så [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Den lutande sträckan är ungefär 1,6667 gånger den vertikala komponenten. Verklig lantmäterimätning kan kräva ytterligare korrigeringar utöver denna förenklade modell."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: Beräkna en staglinas kvot"
          },
          {
            "kind": "p",
            "text": "En 18 m staglina har en vertikal separation på 10 m mellan sina ändpunkter: linan är hypotenusan [[c=18\\text{ m}]]; separationen är den motstående kateten [[a=10\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]], så [[\\boxed{\\csc(A)=1.8}]]."
          },
          {
            "kind": "p",
            "text": "Linan är 1,8 gånger den vertikala separationen. Kvoten avgör inte linans spänning, förankringens hållfasthet eller strukturell säkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: Utvärdera en trappvangs kvot"
          },
          {
            "kind": "p",
            "text": "En förenklad 5 m trappvang har en vertikal resning på 2,8 m: vangen är hypotenusan [[c=5\\text{ m}]]; resningen är den motstående kateten [[a=2.8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]], så [[\\boxed{\\csc(A)\\approx1.7857}]]."
          },
          {
            "kind": "p",
            "text": "Diagonalen är ungefär 1,7857 gånger den vertikala resningen: en förenklad geometrisk beräkning, inte en fullständig bedömning av trappdesignen."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: Ett flygplans raka flygsträcka"
          },
          {
            "kind": "p",
            "text": "Ett flygplan färdas 5 km längs en rak bana medan det stiger 1,5 km i höjd: banan är hypotenusan [[c=5\\text{ km}]]; höjdstigningen är den motstående kateten [[a=1.5\\text{ km}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]], så [[\\boxed{\\csc(A)\\approx3.3333}]]."
          },
          {
            "kind": "p",
            "text": "Flygsträckan överstiger vida den vertikala stigningen, därav den stora kvoten. Detta är ett idealiserat exempel, inte en fullständig analys av en föränderlig flygbana."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: Ett mekaniskt stag"
          },
          {
            "kind": "p",
            "text": "Ett diagonalt stag är 1700 mm långt med en vertikal komponent på 800 mm: staget är hypotenusan [[c=1700\\text{ mm}]]; den vertikala komponenten är den motstående kateten [[a=800\\text{ mm}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]], så [[\\boxed{\\csc(A)=2.125}]]."
          },
          {
            "kind": "p",
            "text": "Millimeter fungerar lika bra som meter när båda sidorna delar enheten. Kvoten fastställer inte stagets hållfasthet."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: En kranarm"
          },
          {
            "kind": "p",
            "text": "En förenklad 10 m kranarm har en vertikal komponent på 8 m: armen är hypotenusan [[c=10\\text{ m}]]; den vertikala komponenten är den motstående kateten [[a=8\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]], så [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Armets längd är bara 1,25 gånger dess vertikala komponent. Kvoten fastställer inte lyftkapacitet eller driftsäkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: En siktlinje till toppen av ett träd"
          },
          {
            "kind": "p",
            "text": "En 20 m siktlinje till ett träds topp har en vertikal skillnad på 12 m från betraktarens ögonhöjd: siktlinjen är hypotenusan [[c=20\\text{ m}]]; den vertikala skillnaden är den motstående kateten [[a=12\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]], så [[\\boxed{\\csc(A)\\approx1.6667}]]."
          },
          {
            "kind": "p",
            "text": "Siktavståndet är ungefär 1,6667 gånger den vertikala skillnaden. Resultatet ger inte trädets totala höjd över marken."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: En vandringsleds raka lutning"
          },
          {
            "kind": "p",
            "text": "En rak vandringssträcka lutar 100 m med en höjdstigning på 80 m: lutningen är hypotenusan [[c=100\\text{ m}]]; stigningen är den motstående kateten [[a=80\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]], så [[\\boxed{\\csc(A)=1.25}]]."
          },
          {
            "kind": "p",
            "text": "Kvoten ligger nära 1 eftersom den vertikala komponenten är en stor andel av lutningen. Verkliga vandringsleder kan ha varierande lutningar."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: Ett markisstöd"
          },
          {
            "kind": "p",
            "text": "Ett 3,5 m markisstöd har en vertikal komponent på 1,2 m: stödet är hypotenusan [[c=3.5\\text{ m}]]; den vertikala komponenten är den motstående kateten [[a=1.2\\text{ m}]]."
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]], så [[\\boxed{\\csc(A)\\approx2.9167}]]."
          },
          {
            "kind": "p",
            "text": "Stödet är ungefär 2,9167 gånger sin vertikala komponent. Resultatet fastställer inte strukturell lämplighet."
          },
          {
            "kind": "h3",
            "text": "Praktiska exempel jämförda"
          },
          {
            "kind": "p",
            "text": "Mönstret är konsekvent: kvoten är stor när den motstående kateten är en liten andel av hypotenusan, och nära 1 när de två är nästan lika. Att läsa cosekans som en multiplikator gör varje resultat meningsfullt."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situation", "Hypotenusa c", "Motstående katet a", "Cosekansformel", "Beräknad kvot", "Tolkning"],
            "rows": [
              ["Stege", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "Stegen är 1,2222 gånger höjden"],
              ["Takstol", "6.5 m", "4 m", "6.5/4", "1.625", "Takstolen är 1,625 gånger resningen"],
              ["Ramp", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "Lutningen är 12,6667 gånger resningen"],
              ["Lantmätning", "50 m", "30 m", "50/30", "1.6667", "Sträckan är 1,6667 gånger sänkningen"],
              ["Staglina", "18 m", "10 m", "18/10", "1.8", "Linan är 1,8 gånger separationen"],
              ["Trappvang", "5 m", "2.8 m", "5/2.8", "1.7857", "Vangen är 1,7857 gånger resningen"],
              ["Flygsträcka", "5 km", "1.5 km", "5/1.5", "3.3333", "Banan är 3,3333 gånger stigningen"],
              ["Mekaniskt stag", "1700 mm", "800 mm", "1700/800", "2.125", "Staget är 2,125 gånger komponenten"],
              ["Kranarm", "10 m", "8 m", "10/8", "1.25", "Armen är 1,25 gånger komponenten"],
              ["Trädsiktlinje", "20 m", "12 m", "20/12", "1.6667", "Siktlinjen är 1,6667 gånger skillnaden"],
              ["Vandringslutning", "100 m", "80 m", "100/80", "1.25", "Lutningen är 1,25 gånger stigningen"],
              ["Markisstöd", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "Stödet är 2,9167 gånger komponenten"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Fyra paneler: stege 1.2222, takstol 1.625, ramp 12.6667, lantmätning 1.6667 cosekanskvoter med rätvinkliga trianglar",
            "caption": "Fyra praktiska beräkningar: varje panel visar triangeln, formeln och kvoten."
          }
        ]
      },
      "csc-angle": {
        "h2": "Förstå sambandet mellan cosekans och vinkelstorlek",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosekans rör sig i motsatt riktning mot vinkeln. När den spetsiga vinkeln är liten är den motstående kateten kort i förhållande till hypotenusan, så [[c/a]] är stort. När vinkeln växer förlängs den motstående kateten mot hypotenusan och kvoten krymper. De verifierade referensvärdena nedan visar mönstret:"
          },
          {
            "kind": "p",
            "text": "När vinkeln närmar sig [[90^\\circ]] närmar sig den motstående kateten hypotenusan och kvoten närmar sig 1, medan den stannar över 1 för varje giltig, icke-degenererad rätvinklig triangel. Raden för 90 grader är endast en gränsreferens, eftersom vinkel [[A]] måste vara spetsig. När vinkeln närmar sig [[0^\\circ]] krymper den motstående kateten mot noll och kvoten växer obegränsat. En kvot nära 1 signalerar en relativt stor spetsig vinkel; en stor kvot signalerar en relativt liten vinkel."
          },
          {
            "kind": "p",
            "text": "Kalkylatorn tar inte emot vinkelindata; den beräknar kvoten från de två sidlängderna. Dessa referensvärden tjänar som orientering och som kontrollvärden när man verifierar ett resultat."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Vinkel A", "Sinus sin(A)", "Cosekans csc(A)"],
            "rows": [
              ["30 grader", "0.5", "2"],
              ["45 grader", "0.7071", "1.4142"],
              ["60 grader", "0.8660", "1.1547"],
              ["90 grader", "1", "1, som gränsvärde"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tre trianglar vid 30, 45, 60 grader med cosekansvärden 2, 1.4142, 1.1547; kvoten faller när vinkeln växer",
            "caption": "När den motstående kateten blir en större andel av hypotenusan rör sig csc(A) närmare 1."
          }
        ]
      },
      "csc-recover": {
        "h2": "Använda cosekans för att hitta hypotenusan",
        "blocks": [
          {
            "kind": "p",
            "text": "Formeln låter sig omformas prydligt. Börja med:"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "Multiplicera båda sidorna med [[a]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är den motstående kateten multiplicerad med cosekanskvoten. Med [[a=6\\text{ m}]] och [[\\csc(A)=2.5]]:"
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Resultatet är längre än den motstående kateten, som varje hypotenusa måste vara."
          },
          {
            "kind": "h3",
            "text": "Så återfår du den motstående kateten"
          },
          {
            "kind": "p",
            "text": "Att lösa för [[a]] i stället ger:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Med [[c=12\\text{ m}]] och [[\\csc(A)=2]]:"
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "Dessa är matematiska omformningar av samma kvot. Kalkylatorn på den här sidan beräknar själva kvoten; den erbjuder inte separata lägen för att hitta hypotenusan eller den motstående kateten."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "Vanliga misstag vid beräkning av cosekans",
        "blocks": [
          {
            "kind": "h3",
            "text": "Fel mot rätt"
          },
          {
            "kind": "p",
            "text": "Givet [[c=5]] och [[a=3]]:"
          },
          {
            "kind": "p",
            "text": "Fel: [[3/5=0.6]]. Detta är sinuskvoten, inte cosekanskvoten."
          },
          {
            "kind": "p",
            "text": "Rätt: [[\\csc(A)=5/3\\approx1.6667]]."
          },
          {
            "kind": "p",
            "text": "Verifiera: [[\\csc(A)=1/\\sin(A)]], och [[1/0.6\\approx1.6667]]."
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>Att förväxla cosekans med sinus.</strong> Sinus är [[a/c]]; cosekans är [[c/a]]. Vad som går fel: att rapportera 0,6 för en 3-4-5-triangel. Åtgärd: sätt hypotenusan överst.",
          "<strong>Att vända formeln till [[a/c]] i stället för [[c/a]].</strong> Vad som går fel: svaret är sinusen, alltid under 1. Åtgärd: kontrollera att den längre sidan är täljaren.",
          "<strong>Att förväxla cosekans med sekans.</strong> Sekans är [[c/b]], cosinus reciproka värde. Vad som går fel: att använda den närliggande kateten. Åtgärd: cosekans paras med sinus och den motstående kateten.",
          "<strong>Att använda den närliggande kateten i stället för den motstående.</strong> Vad som går fel: att av misstag beräkna [[c/b]]. Åtgärd: bekräfta sidan mitt emot vinkel [[A]] före divisionen.",
          "<strong>Att anta att cosekans mäts i grader.</strong> Vad som går fel: att skriva 1,6667 grader. Åtgärd: kvoten är ett rent tal, inte en vinkel.",
          "<strong>Att rapportera en cosekanskvot med meter eller centimeter.</strong> Vad som går fel: enheterna var redan förkortade. Åtgärd: släpp enheten från svaret.",
          "<strong>Att acceptera ett resultat under 1 för en giltig triangel.</strong> Vad som går fel: att lita på en beräkning med omkastade indata. Åtgärd: ett giltigt resultat överstiger alltid 1.",
          "<strong>Att mata in en hypotenusa som är kortare än den motstående kateten.</strong> Vad som går fel: indata beskriver en omöjlig triangel. Åtgärd: hypotenusafältet måste innehålla det längre måttet.",
          "<strong>Att mata in noll eller negativa sidlängder.</strong> Vad som går fel: division med noll eller en meningslös negativ kvot. Åtgärd: använd endast positiva längder.",
          "<strong>Att blanda mätenheter.</strong> Vad som går fel: centimeter dividerat med meter förskjuter kvoten med en faktor 100. Åtgärd: konvertera båda sidorna till en enhet först.",
          "<strong>Att avrunda för tidigt.</strong> Vad som går fel: att avrunda [[5/3]] till 1,67 innan tillbakamultiplikation lägger till undvikbart fel. Åtgärd: behåll bråket eller extra siffror till det sista steget.",
          "<strong>Att förväxla referensvinkeln med den andra spetsiga vinkeln.</strong> Vad som går fel: den motstående och den närliggande beteckningen växlar. Åtgärd: markera vinkel [[A]] på diagrammet först.",
          "<strong>Att anta att en stor cosekanskvot är en vinkel.</strong> Vad som går fel: att läsa 12,6667 som grader. Åtgärd: det är en multiplikator, så hypotenusan är 12,6667 gånger den motstående kateten.",
          "<strong>Att anta att cosekans ensamt bestämmer hypotenusan.</strong> Vad som går fel: att förvänta sig att ett tal ska ge en längd. Åtgärd: kvoten behöver den motstående kateten också, via [[c=a\\times\\csc(A)]].",
          "<strong>Att förväxla sinus reciproka värde med cosinus reciproka värde.</strong> Vad som går fel: att använda sekans där cosekans hör hemma. Åtgärd: sinus paras med cosekans; cosinus paras med sekans."
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "Så kontrollerar du om ditt cosekansresultat är giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "En giltig, icke-degenererad rätvinklig triangel kräver:"
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "Alltså [[c/a \\gt 1]]. Båda mätningarna måste använda kompatibla enheter, och den beräknade kvoten måste överstiga 1. Ett resultat på exakt 1 är endast ett gränsvärde när den spetsiga vinkeln närmar sig 90 grader, inte ett resultat för en verklig triangel. En kvot under 1 tyder vanligen på omvända indata, en felaktig sidbeteckning eller inkompatibla mätningar."
          },
          {
            "kind": "h3",
            "text": "Metod 1: Kontrollera sinus reciproka värde"
          },
          {
            "kind": "p",
            "text": "Beräkna [[\\sin(A)=a/c]], sedan [[\\csc(A)=1/\\sin(A)]]. För 3-4-5-triangeln är [[\\sin(A)=3/5=0.6]] och [[1/0.6\\approx1.6667]], vilket matchar den direkta divisionen."
          },
          {
            "kind": "h3",
            "text": "Metod 2: Kontrollera Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "Om den närliggande kateten är känd eller behövs, verifiera [[b=\\sqrt{c^2-a^2}]]. För [[c=5]] och [[a=3]]: [[b=\\sqrt{25-9}=4]], och [[3^2+4^2=5^2]]. Detta bekräftar att sidlängderna bildar en rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Metod 3: Kontrollera kvoten genom multiplikation"
          },
          {
            "kind": "p",
            "text": "Verifiera [[a\\times\\csc(A)\\approx c]]. För [[a=3]] och [[\\csc(A)=5/3]]: [[3\\times\\frac{5}{3}=5]]. Små avvikelser kan uppstå när en visad decimal har avrundats; det exakta bråket tar bort dem."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "Cosekans mot sinus, sekans och andra trigonometriska kvoter",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje kvot jämför ett annat par av sidor:"
          },
          {
            "kind": "p",
            "text": "De reciproka paren är sinus med cosekans och cosinus med sekans: [[\\csc(A)=1/\\sin(A)]], medan [[\\sec(A)=1/\\cos(A)]]. Cosekans och sekans är inte utbytbara. Sinus passar direkta mätningsproblem med känd motstående katet och hypotenusa; cosekans passar formler byggda kring det reciproka värdet och att återfå hypotenusan från ett känt cosekansvärde."
          },
          {
            "kind": "p",
            "text": "För de närliggande kvoterna, se <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinuskvotskalkylatorn</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekanskvotskalkylatorn</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Cotangenskvotskalkylatorn</a> och <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">Kalkylatorn för rätvinkliga triangelkvoter</a>. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sidkalkylatorn för rätvinkliga trianglar</a> hjälper när sidlängden själv är det okända."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Kvot", "Formel", "Vad den jämför"],
            "rows": [
              ["Sinus", "sin(A) = a/c", "Motstående katet mot hypotenusa"],
              ["Cosekans", "csc(A) = c/a", "Hypotenusa mot motstående katet"],
              ["Cosinus", "cos(A) = b/c", "Närliggande katet mot hypotenusa"],
              ["Sekans", "sec(A) = c/b", "Hypotenusa mot närliggande katet"],
              ["Tangens", "tan(A) = a/b", "Motstående katet mot närliggande katet"],
              ["Cotangens", "cot(A) = b/a", "Närliggande katet mot motstående katet"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "Vanliga frågor",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "Utforska relaterade trigonometrikalkylatorer",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Kalkylator för rätvinkliga triangelkvoter",
            "desc": "Beräkna alla sex trigonometriska kvoter tillsammans på ett ställe."
          },
          {
            "name": "Sinuskvotskalkylator",
            "desc": "Hitta sinuskvoten från den motstående kateten och hypotenusan."
          },
          {
            "name": "Sekanskvotskalkylator",
            "desc": "Hitta sekanskvoten från hypotenusan och den närliggande kateten."
          },
          {
            "name": "Cotangenskvotskalkylator",
            "desc": "Hitta cotangenskvoten från den närliggande och den motstående kateten."
          },
          {
            "name": "Sidkalkylator för rätvinkliga trianglar",
            "desc": "Hitta längden på en okänd sida från vinklar eller Pythagoras sats."
          },
          {
            "name": "Vinkelkalkylator för rätvinkliga trianglar",
            "desc": "Hitta den spetsiga vinkeln från kända sidlängder."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade trigonometrikalkylatorer",
    "faqs": [
      {
        "question": "Vad är formeln för cosekans i en rätvinklig triangel?",
        "answer": "Formeln är csc(A) = c / a: dividera hypotenusan med sidan mitt emot vinkel A. För en hypotenusa på 5 och en motstående katet på 3 blir resultatet 5/3, ungefär 1,6667. Samma värde kommer från den reciproka identiteten csc(A) = 1 / sin(A)."
      },
      {
        "question": "Hur är cosekans relaterat till sinus?",
        "answer": "Cosekans är sinus reciproka värde: csc(A) = 1 / sin(A). Sinus dividerar den motstående kateten med hypotenusan; cosekans vänder det bråket. Båda beskriver samma triangel, och deras produkt är alltid 1. Om sin(A) = 0,6, då är csc(A) = 1 / 0,6, ungefär 1,6667."
      },
      {
        "question": "Varför är cosekans större än 1 i en giltig rätvinklig triangel?",
        "answer": "I en giltig, icke-degenererad rätvinklig triangel är hypotenusan den längsta sidan, så c överstiger a, och ett större tal dividerat med ett mindre positivt tal är alltid över 1. En kvot på 1 eller mindre signalerar omkastade indata, en felaktig sidbeteckning eller omöjliga mätningar."
      },
      {
        "question": "Vad är skillnaden mellan cosekans och sekans?",
        "answer": "Cosekans dividerar hypotenusan med den motstående kateten (c/a), medan sekans dividerar hypotenusan med den närliggande kateten (c/b). Cosekans är sinus reciproka värde; sekans är cosinus reciproka värde. De svarar på olika frågor, så att växla dem ger ett felaktigt svar när de motstående och närliggande kateterna skiljer sig."
      },
      {
        "question": "Vad är cosekansen för en 30-gradersvinkel?",
        "answer": "Cosekansen för 30 grader är exakt 2, eftersom sidan mitt emot 30 grader är halva hypotenusan: c/a = 2/1 = 2. Kontroll: sin(30 grader) = 0,5, och 1 / 0,5 = 2. Det är ett av de få cosekansvärden som är värda att memorera."
      },
      {
        "question": "Har cosekanskvoten enheter?",
        "answer": "Nej. Både hypotenusan och den motstående kateten mäts i samma enhet, så enheterna tar ut varandra under divisionen. Oavsett om sidorna är i centimeter, meter eller millimeter är cosekanskvoten ett rent dimensionslöst tal. Rapportera den aldrig med grader, meter eller fot bifogat."
      },
      {
        "question": "Kan cosekans vara mindre än 1?",
        "answer": "Inte för en giltig, icke-degenererad rätvinklig triangel. Eftersom hypotenusan är längre än den motstående kateten måste c/a överstiga 1. Ett resultat på 1 eller mindre betyder nästan alltid att de två indata bytts, så verktyget beräknade a/c (vilket är sinus) i stället för c/a. Kontrollera vilket mått som är hypotenusan."
      },
      {
        "question": "Hur beräknar du cosekans från sidlängder?",
        "answer": "Identifiera hypotenusan c och den motstående kateten a, bekräfta att båda använder samma enhet och att c är längre än a, och beräkna sedan csc(A) = c / a. Med c = 13 m och a = 5 m blir svaret 13/5 = 2,6."
      },
      {
        "question": "Hur hittar du hypotenusan med cosekans?",
        "answer": "Omforma formeln till c = a x csc(A). Multiplicera den kända motstående kateten med cosekanskvoten. Om a = 6 m och csc(A) = 2,5, då är c = 6 x 2,5 = 15 m. Resultatet är alltid längre än den motstående kateten, vilket är en snabb rimlighetskontroll av aritmetiken."
      },
      {
        "question": "Behöver cosekanskalkylatorn en vinkelindata?",
        "answer": "Nej. Kalkylatorn behöver bara två sidlängder: hypotenusan och den motstående kateten. Kvoten c/a är helt bestämd av dessa mätningar, så vinkel A kommer aldrig in i beräkningen."
      },
      {
        "question": "Hur förändras cosekans när vinkeln ökar?",
        "answer": "Cosekans minskar när den spetsiga vinkeln växer. En liten vinkel har en kort motstående katet i förhållande till hypotenusan, så kvoten är stor; en stor vinkel har en motstående katet nästan lika lång som hypotenusan, så kvoten ligger strax över 1. Till exempel är csc(30 grader) = 2, csc(45 grader) är ungefär 1,4142 och csc(60 grader) ungefär 1,1547."
      },
      {
        "question": "När ska jag använda cosekans i stället för sinus?",
        "answer": "Använd cosekans när du behöver hypotenusa över motstående katet: i formler byggda kring cosekans, i arbete med reciproka identiteter, eller när ett problem ger ett cosekansvärde och ber om en sida. För direkta mätningsproblem är sinus vanligtvis det naturligare valet."
      }
    ],
    "conclusion": {
      "h2": "Bemästra cosekanskvoten med självförtroende",
      "paragraphs": [
        "Cosekans är sinus sett från andra sidan: dividera hypotenusan med den motstående kateten, och resultatet berättar hur många motstående katetlängder som får plats i hypotenusan. Formeln [[\\csc(A)=c/a]] behöver bara två mätningar, svaret är alltid ett dimensionslöst tal över 1, och den reciproka identiteten [[\\csc(A)=1/\\sin(A)]] ger dig ett inbyggt sätt att kontrollera varje beräkning. Oavsett om triangeln är en stege, en takstol eller en 3-4-5 från läroboken ändras metoden aldrig: identifiera hypotenusan, identifiera den motstående kateten, dividera och verifiera. Ha <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">Pythagoras sats-kalkylatorn</a> till hands för att bekräfta triangelgeometrin, och bokmärk den här sidan för varje cosekansberäkning."
      ]
    }
  },
  "zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "csc-intro": "什么是余割比计算器？",
      "csc-triangle": "理解斜边和对边",
      "csc-whatis": "理解三角函数中的余割",
      "csc-formula": "余割公式逐步讲解",
      "csc-howto": "如何使用计算器",
      "csc-examples": "逐步计算示例",
      "csc-applications": "实际生活示例",
      "csc-angle": "余割与角度大小",
      "csc-recover": "用余割求斜边",
      "csc-mistakes": "常见错误",
      "csc-verify": "检查你的计算结果",
      "csc-vs": "余割与其他三角比",
      "csc-faq": "常见问题",
      "csc-related": "相关计算器"
    },
    "sections": {
      "csc-intro": {
        "h2": "什么是余割比计算器？",
        "blocks": [
          {
            "kind": "p",
            "text": "余割比计算器根据两条边的长度求直角三角形中锐角的余割：斜边 [[c]] 和对边 [[a]]。它用第一条边除以第二条边，得到 [[\\csc(A)=c/a]]。余割是正弦的倒数：正弦给出对边比斜边，余割给出斜边比对边，因此这两个值的乘积恒为 1。"
          },
          {
            "kind": "p",
            "text": "计算器不需要输入角度，也不需要邻边，因为比值 [[c/a]] 完全由这两个长度决定。答案是一个没有单位的纯数字，因为厘米除以厘米会相互抵消，它把斜边描述为对边的倍数。对于斜边 5 厘米、对边 3 厘米的情况，[[\\csc(A)=5/3\\approx1.6667]]，即斜边约为对边的 1.67 倍。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-triangle": {
        "h2": "理解斜边和对边",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个角恰为 [[90^\\circ]]，即两条互相垂直的直线之间的夹角，就像墙面与水平地面的交角。斜边位于这个直角的对面，恒为最长的边。由于三个角的和必须为 [[180^\\circ]]，其余两个角恰好平分 90 度，因此都是锐角。余割属于这种几何，因为它的公式比较的是这些边中的两条（斜边和对边）之间固定的关系。"
          },
          {
            "kind": "h3",
            "text": "什么是对边？"
          },
          {
            "kind": "p",
            "text": "对边是正对参考角 [[A]] 的边：它是三角形中唯一不接触角 [[A]] 顶点的边。哪条边算作对边取决于参考角，因此从角 [[A]] 换到角 [[B]] 会交换两条直角边的标号。在实际问题中，对边常代表垂直高度、高差，或结构的垂直边。选对参考角很重要，因为错误的参考角会悄悄地把对边和邻边调换。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边是直角对面的边，无论三角形如何旋转，两个事实总能识别它：它正对标记 [[90^\\circ]] 角的小方块，而且它是最长的边。在有效、非退化的三角形中，它严格长于任一条直角边。在实际场景中，它可以是靠在墙上的梯子、倾斜距离、视线、屋顶椽子或对角支撑。"
          },
          {
            "kind": "h3",
            "text": "什么是邻边？"
          },
          {
            "kind": "p",
            "text": "邻边 [[b]] 是与角 [[A]] 相邻但不是斜边的那条直角边。它在余割公式中不起任何作用，这就是计算器从不询问它的原因。边 [[b]] 在余弦、正切、正割和余切中才变得重要，所以当目标是不同的比时再记住它。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "直角三角形，角 A 在左下，金色对边 a，蓝色邻边 b，粉色斜边 c，公式 csc(A)=c/a",
            "caption": "角 A 位于左下；余割使用斜边 c 和对边 a，不用邻边 b。"
          }
        ]
      },
      "csc-whatis": {
        "h2": "理解三角函数中的余割",
        "blocks": [
          {
            "kind": "p",
            "text": "余割比较的是直角三角形完整的斜边与参考角对边的关系："
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "其中 [[\\csc(A)]] 是角 [[A]] 的余割，[[c]] 是斜边，[[a]] 是对边。这个比值回答一个问题：斜边里能装下几个对边长度？"
          },
          {
            "kind": "h3",
            "text": "作为正弦倒数的余割"
          },
          {
            "kind": "p",
            "text": "从正弦公式开始："
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "取倒数会把分数翻转，斜边移到分子，对边移到分母："
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "因为余割按定义是正弦的倒数："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{1}{\\sin(A)}=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "一个具体的检验让这种翻转一目了然。当 [[\\sin(A)=3/5=0.6]] 时，倒数是 [[1/0.6=5/3\\approx1.6667]]，这正是余割。两个数从互为倒数的视角描述同一个三角形，相乘恒得 1。"
          },
          {
            "kind": "h3",
            "text": "为什么余割大于 1"
          },
          {
            "kind": "p",
            "text": "斜边比对边长，所以 [[c \\gt a]]，从而 [[c/a \\gt 1]]。快速数值检验：当 [[c=10]]、[[a=8]] 时，比值为 [[10/8=1.25]]，如要求高于 1。对于较大的锐角，对边几乎与斜边等长，所以比值略高于 1，但在有效、非退化的直角三角形中，它永远不可能等于 1。"
          },
          {
            "kind": "h3",
            "text": "余割值是什么意思？"
          },
          {
            "kind": "p",
            "text": "余割为 2 表示斜边恰为对边的两倍；1.6667 表示约为 1.6667 倍。把这个数读作乘数，而不是角度：它不带度数，也不带米或英尺，因为两条边的单位在除法中相互抵消。"
          },
          {
            "kind": "h3",
            "text": "为什么余割不同于余弦？"
          },
          {
            "kind": "p",
            "text": "名字看起来相似，但关系不同："
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "余弦比较邻边与斜边，而余割比较斜边与对边。要记住的配对：余割是正弦的倒数，而正割是余弦的倒数。把这两个余函数混淆是三角函数中最常见的错误之一。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "三个阶段：3-4-5 三角形，正弦 3/5=0.6，余割 5/3=1.6667，恒等式 csc(A)=1/sin(A)",
            "caption": "正弦和余割互为倒数：把 3/5 翻转得到 5/3，且 csc(A) = 1/sin(A)。"
          }
        ]
      },
      "csc-formula": {
        "h2": "余割公式逐步讲解",
        "blocks": [
          {
            "kind": "p",
            "text": "这个公式不是凭空规定的，它直接来自正弦的定义。从正弦比开始："
          },
          {
            "kind": "p",
            "text": "[[[\\sin(A)=\\frac{a}{c}]]]"
          },
          {
            "kind": "p",
            "text": "对两边取倒数，分子分母互换位置："
          },
          {
            "kind": "p",
            "text": "[[[\\frac{1}{\\sin(A)}=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "因为余割按定义是正弦的倒数："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]"
          },
          {
            "kind": "p",
            "text": "斜边出现在分子中，因为它是正弦的分母；对边落到分母中，因为它是正弦的分子。这就是整个推导过程。"
          },
          {
            "kind": "h3",
            "text": "完整解题示例：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\text{ cm}]]、[[b=4\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "第 1 步：写出公式。[[\\csc(A)=c/a]]"
          },
          {
            "kind": "p",
            "text": "第 2 步：代入测量值。[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "第 3 步：相除。[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "第 4 步：用正弦验证。[[\\sin(A)=3/5=0.6]]，且 [[1/0.6\\approx1.6667]]。两条路径得到相同的值，因为它们是从互为倒数的视角看同一个三角形。注意 1.6667 是四舍五入后的小数；[[5/3]] 才是这些边长的精确比值。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-howto": {
        "h2": "如何使用余割比计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "下面的说明与本页的实际界面完全对应。"
          },
          {
            "kind": "p",
            "text": "注意计算器从不询问什么：没有以度为单位的角 [[A]]，没有邻边，也没有正弦值。两个边长就是完整的输入，因为比值 [[c/a]] 不依赖其他任何东西。"
          }
        ],
        "steps": [
          "<strong>确定参考角 [[A]]。</strong>决定比值描述的是哪个锐角，因为对边是相对于它定义的。",
          "<strong>找到斜边 [[c]]。</strong>它是直角对面的边，也是三角形最长的边。",
          "<strong>找到对边 [[a]]。</strong>它是正对角 [[A]] 的边。",
          "<strong>测量或获取两条边的长度。</strong>使用卷尺、图纸或给定数据，两条边保持相同单位。",
          "<strong>在第一个输入框中输入斜边。</strong>这是两个值中较大的那个。",
          "<strong>在第二个输入框中输入对边。</strong>这是两个值中较小的那个。",
          "<strong>用单位选择器选择兼容的单位。</strong>两个输入框必须使用相同单位，除法才有意义。",
          "<strong>确认两个值都为正数。</strong>零或负的长度无法构成三角形。",
          "<strong>检查斜边是否长于对边。</strong>如果不是，说明输入调换了或标号错误。",
          "<strong>点击 计算 csc(A)。</strong>工具会用斜边除以对边。",
          "<strong>读取得到的余割比值。</strong>它是一个无量纲数，把斜边描述为对边的倍数。",
          "<strong>验证答案大于 1。</strong>任何等于或小于 1 的值都表示输入错误。",
          "<strong>用 Reset 清空输入</strong>，开始下一次计算。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-examples": {
        "h2": "计算余割的逐步示例",
        "blocks": [
          {
            "kind": "p",
            "text": "这四个示例在进入实际应用之前建立核心技能。每个示例遵循相同的模式：写出公式，代入，相除。"
          },
          {
            "kind": "h3",
            "text": "示例 1：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\text{ cm}]]、[[b=4\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/3]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)\\approx1.6667}]]"
          },
          {
            "kind": "p",
            "text": "斜边约为对边的 1.6667 倍。邻边在给定数据中出现只是为了补全三角形；公式忽略它。"
          },
          {
            "kind": "h3",
            "text": "示例 2：5-12-13 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=5\\text{ m}]]、[[b=12\\text{ m}]]、[[c=13\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=13/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=2.6}]]"
          },
          {
            "kind": "p",
            "text": "结果大于 1，因为斜边比对边长。本次计算不需要 12 米的邻边。"
          },
          {
            "kind": "h3",
            "text": "示例 3：30-60-90 三角形"
          },
          {
            "kind": "p",
            "text": "对于角 [[A=30^\\circ]]，对边是斜边的一半。取 [[a=5\\text{ cm}]] 和 [[c=10\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\csc(30^\\circ)=10/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(30^\\circ)=2}]]"
          },
          {
            "kind": "p",
            "text": "验证：[[\\sin(30^\\circ)=0.5]]，且 [[1/0.5=2]]。这个精确值值得记住，因为 30-60-90 三角形在几何题中不断出现。"
          },
          {
            "kind": "h3",
            "text": "示例 4：对边为 8、斜边为 10 的三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=8\\text{ m}]] 和 [[c=10\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\csc(A)=1.25}]]"
          },
          {
            "kind": "p",
            "text": "这个比值比 3-4-5 的结果更接近 1，因为对边占斜边的比例更大：8/10 对 3/5。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-applications": {
        "h2": "余割比的实际生活示例",
        "blocks": [
          {
            "kind": "p",
            "text": "余割是一个数学比值，而不是在工地现场单独报告的数字。它的价值在于描述斜边与对边的关系、验证计算，以及为需要余割的公式提供输入。下面的每个示例都假设一个简化的直角三角形。"
          },
          {
            "kind": "h3",
            "text": "示例 5：理解梯子长度相对于其高度"
          },
          {
            "kind": "p",
            "text": "一把 5.5 米的梯子沿垂直墙面达到 4.5 米高。梯子是斜边 [[c=5.5\\text{ m}]]；到达高度是对边 [[a=4.5\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5.5/4.5]]，所以 [[\\boxed{\\csc(A)\\approx1.2222}]]。"
          },
          {
            "kind": "p",
            "text": "梯子约为垂直高度的 1.2222 倍，而 [[c=a\\times\\csc(A)]] 可从高度还原梯子长度。这个比值只描述几何关系，不涉及梯子安全。"
          },
          {
            "kind": "h3",
            "text": "示例 6：计算屋顶椽子的余割比"
          },
          {
            "kind": "p",
            "text": "一根 6.5 米的屋顶椽子垂直升高 4 米：椽子是倾斜的斜边 [[c=6.5\\text{ m}]]；升高高度是对边 [[a=4\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=6.5/4]]，所以 [[\\boxed{\\csc(A)=1.625}]]。"
          },
          {
            "kind": "p",
            "text": "椽子是垂直升高高度的 1.625 倍。这个计算不能验证结构适用性或屋顶设计的合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 7：评估坡道的余割比"
          },
          {
            "kind": "p",
            "text": "一条坡道斜长 9.5 米，垂直升高 0.75 米：[[c=9.5\\text{ m}]] 和 [[a=0.75\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=9.5/0.75]]，所以 [[\\boxed{\\csc(A)\\approx12.6667}]]。"
          },
          {
            "kind": "p",
            "text": "比值很大，因为斜长远大于垂直升高，正如平缓的坡道应有的那样。仅凭比值无法判定无障碍通行或建筑规范的合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 8：已知高差的测量线"
          },
          {
            "kind": "p",
            "text": "一次简化的测量记录了 50 米的直线距离和 30 米的垂直高差：直线是斜边 [[c=50\\text{ m}]]；把垂直高差作为对边 [[a=30\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=50/30]]，所以 [[\\boxed{\\csc(A)\\approx1.6667}]]。"
          },
          {
            "kind": "p",
            "text": "倾斜距离约为垂直分量的 1.6667 倍。实际测量可能需要超出这个简化模型的额外修正。"
          },
          {
            "kind": "h3",
            "text": "示例 9：计算拉线的比值"
          },
          {
            "kind": "p",
            "text": "一根 18 米的拉线两端之间有 10 米的垂直间距：拉线是斜边 [[c=18\\text{ m}]]；间距是对边 [[a=10\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=18/10]]，所以 [[\\boxed{\\csc(A)=1.8}]]。"
          },
          {
            "kind": "p",
            "text": "拉线是垂直间距的 1.8 倍。比值不能确定拉线张力、锚固强度或结构安全。"
          },
          {
            "kind": "h3",
            "text": "示例 10：评估楼梯斜梁的比值"
          },
          {
            "kind": "p",
            "text": "一根简化的 5 米楼梯斜梁垂直升高 2.8 米：斜梁是斜边 [[c=5\\text{ m}]]；升高高度是对边 [[a=2.8\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/2.8]]，所以 [[\\boxed{\\csc(A)\\approx1.7857}]]。"
          },
          {
            "kind": "p",
            "text": "对角线约为垂直升高高度的 1.7857 倍：这是简化的几何计算，不是完整的楼梯设计评估。"
          },
          {
            "kind": "h3",
            "text": "示例 11：飞机的直线航段"
          },
          {
            "kind": "p",
            "text": "一架飞机沿直线路径飞行 5 公里，同时爬升 1.5 公里：路径是斜边 [[c=5\\text{ km}]]；爬升高度是对边 [[a=1.5\\text{ km}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=5/1.5]]，所以 [[\\boxed{\\csc(A)\\approx3.3333}]]。"
          },
          {
            "kind": "p",
            "text": "飞行距离远大于垂直爬升，因此比值很大。这是一个理想化的示例，不是变化航线的完整分析。"
          },
          {
            "kind": "h3",
            "text": "示例 12：机械支撑"
          },
          {
            "kind": "p",
            "text": "一根对角支撑长 1700 毫米，垂直分量 800 毫米：支撑是斜边 [[c=1700\\text{ mm}]]；垂直分量是对边 [[a=800\\text{ mm}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1700/800]]，所以 [[\\boxed{\\csc(A)=2.125}]]。"
          },
          {
            "kind": "p",
            "text": "当两条边使用相同单位时，毫米和米一样好用。比值不能确定支撑的强度。"
          },
          {
            "kind": "h3",
            "text": "示例 13：起重机吊臂"
          },
          {
            "kind": "p",
            "text": "一根简化的 10 米起重机吊臂垂直分量为 8 米：吊臂是斜边 [[c=10\\text{ m}]]；垂直分量是对边 [[a=8\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=10/8]]，所以 [[\\boxed{\\csc(A)=1.25}]]。"
          },
          {
            "kind": "p",
            "text": "吊臂长度仅为其垂直分量的 1.25 倍。比值不能确定起重能力或操作安全。"
          },
          {
            "kind": "h3",
            "text": "示例 14：到树顶的视线"
          },
          {
            "kind": "p",
            "text": "一条 20 米的视线通向树顶，与观察者眼高有 12 米的垂直高差：视线是斜边 [[c=20\\text{ m}]]；垂直高差是对边 [[a=12\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=20/12]]，所以 [[\\boxed{\\csc(A)\\approx1.6667}]]。"
          },
          {
            "kind": "p",
            "text": "视线距离约为垂直高差的 1.6667 倍。结果不能给出树在地面以上的总高度。"
          },
          {
            "kind": "h3",
            "text": "示例 15：徒步路线的直线坡段"
          },
          {
            "kind": "p",
            "text": "一段直线徒步路段倾斜 100 米，爬升 80 米：坡面是斜边 [[c=100\\text{ m}]]；爬升是对边 [[a=80\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=100/80]]，所以 [[\\boxed{\\csc(A)=1.25}]]。"
          },
          {
            "kind": "p",
            "text": "比值接近 1，因为垂直分量占坡面的很大比例。实际徒步路线的坡度可能变化。"
          },
          {
            "kind": "h3",
            "text": "示例 16：遮阳篷支架"
          },
          {
            "kind": "p",
            "text": "一根 3.5 米的遮阳篷支架垂直分量为 1.2 米：支架是斜边 [[c=3.5\\text{ m}]]；垂直分量是对边 [[a=1.2\\text{ m}]]。"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=3.5/1.2]]，所以 [[\\boxed{\\csc(A)\\approx2.9167}]]。"
          },
          {
            "kind": "p",
            "text": "支架约为其垂直分量的 2.9167 倍。结果不能确定结构适用性。"
          },
          {
            "kind": "h3",
            "text": "实际示例对比"
          },
          {
            "kind": "p",
            "text": "规律是一致的：当对边是斜边的一小部分时，比值很大；当两者几乎相等时，比值接近 1。把余割读作乘数，每一个结果都有了意义。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["情境", "斜边 c", "对边 a", "余割公式", "计算出的比值", "解读"],
            "rows": [
              ["梯子", "5.5 m", "4.5 m", "5.5/4.5", "1.2222", "梯子是高度的 1.2222 倍"],
              ["屋顶椽子", "6.5 m", "4 m", "6.5/4", "1.625", "椽子是升高高度的 1.625 倍"],
              ["坡道", "9.5 m", "0.75 m", "9.5/0.75", "12.6667", "坡面是升高高度的 12.6667 倍"],
              ["测量", "50 m", "30 m", "50/30", "1.6667", "距离是高差的 1.6667 倍"],
              ["拉线", "18 m", "10 m", "18/10", "1.8", "拉线是间距的 1.8 倍"],
              ["楼梯斜梁", "5 m", "2.8 m", "5/2.8", "1.7857", "斜梁是升高高度的 1.7857 倍"],
              ["飞行航段", "5 km", "1.5 km", "5/1.5", "3.3333", "路径是爬升高度的 3.3333 倍"],
              ["机械支撑", "1700 mm", "800 mm", "1700/800", "2.125", "支撑是分量的 2.125 倍"],
              ["起重机吊臂", "10 m", "8 m", "10/8", "1.25", "吊臂是分量的 1.25 倍"],
              ["树木视线", "20 m", "12 m", "20/12", "1.6667", "视线是高差的 1.6667 倍"],
              ["徒步坡段", "100 m", "80 m", "100/80", "1.25", "坡面是爬升高度的 1.25 倍"],
              ["遮阳篷支架", "3.5 m", "1.2 m", "3.5/1.2", "2.9167", "支架是分量的 2.9167 倍"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "四个面板：梯子 1.2222、椽子 1.625、坡道 12.6667、测量 1.6667 的余割比值与直角三角形",
            "caption": "四个实际计算：每个面板显示三角形、公式和比值。"
          }
        ]
      },
      "csc-angle": {
        "h2": "理解余割与角度大小的关系",
        "blocks": [
          {
            "kind": "p",
            "text": "余割随角度反向变化。当锐角很小时，对边相对于斜边很短，所以 [[c/a]] 很大。随着角度增大，对边向斜边伸长，比值缩小。下面的已验证参考值展示了这个规律："
          },
          {
            "kind": "p",
            "text": "当角度趋近 [[90^\\circ]] 时，对边趋近斜边，比值趋近 1，但对于每个有效、非退化的直角三角形，它始终高于 1。90 度那一行只是极限参考，因为角 [[A]] 必须是锐角。当角度趋近 [[0^\\circ]] 时，对边收缩趋向于零，比值无界增长。接近 1 的比值表示相对较大的锐角；很大的比值表示相对较小的锐角。"
          },
          {
            "kind": "p",
            "text": "计算器不接受角度输入；它根据两条边的长度计算比值。这些参考值用作方向指引，也是在验证结果时的检验值。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["角 A", "正弦 sin(A)", "余割 csc(A)"],
            "rows": [
              ["30 度", "0.5", "2"],
              ["45 度", "0.7071", "1.4142"],
              ["60 度", "0.8660", "1.1547"],
              ["90 度", "1", "1，作为极限值"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30、45、60 度时的三个三角形，余割值分别为 2、1.4142、1.1547；角度增大时比值下降",
            "caption": "当对边占斜边的比例越来越大时，csc(A) 越来越接近 1。"
          }
        ]
      },
      "csc-recover": {
        "h2": "用余割求斜边",
        "blocks": [
          {
            "kind": "p",
            "text": "公式可以干净地变形。先从下式开始："
          },
          {
            "kind": "p",
            "text": "[[[\\csc(A)=\\frac{c}{a}]]]"
          },
          {
            "kind": "p",
            "text": "两边同乘以 [[a]]："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=a\\times\\csc(A)}]]]"
          },
          {
            "kind": "p",
            "text": "斜边等于对边乘以余割比值。取 [[a=6\\text{ m}]] 和 [[\\csc(A)=2.5]]："
          },
          {
            "kind": "p",
            "text": "[[c=6\\times2.5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{c=15\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "结果长于对边，正如每条斜边都应如此。"
          },
          {
            "kind": "h3",
            "text": "如何还原对边"
          },
          {
            "kind": "p",
            "text": "改为解 [[a]] 得到："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{a=\\frac{c}{\\csc(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "取 [[c=12\\text{ m}]] 和 [[\\csc(A)=2]]："
          },
          {
            "kind": "p",
            "text": "[[a=12/2]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{a=6\\text{ m}}]]"
          },
          {
            "kind": "p",
            "text": "这些是同一个比值的数学变形。本页的计算器计算的是比值本身；它不提供单独的求斜边模式或求对边模式。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-mistakes": {
        "h2": "计算余割时的常见错误",
        "blocks": [
          {
            "kind": "h3",
            "text": "错误与正确"
          },
          {
            "kind": "p",
            "text": "已知 [[c=5]] 和 [[a=3]]："
          },
          {
            "kind": "p",
            "text": "错误：[[3/5=0.6]]。这是正弦比，不是余割比。"
          },
          {
            "kind": "p",
            "text": "正确：[[\\csc(A)=5/3\\approx1.6667]]。"
          },
          {
            "kind": "p",
            "text": "验证：[[\\csc(A)=1/\\sin(A)]]，且 [[1/0.6\\approx1.6667]]。"
          }
        ],
        "steps": [],
        "listItems": [
          "<strong>把余割和正弦混淆。</strong>正弦是 [[a/c]]；余割是 [[c/a]]。错在：对 3-4-5 三角形报告 0.6。纠正：把斜边放在上面。",
          "<strong>把公式写反成 [[a/c]] 而不是 [[c/a]]。</strong>错在：答案是正弦，恒小于 1。纠正：检查较长的边是否为分子。",
          "<strong>把余割和正割混淆。</strong>正割是 [[c/b]]，是余弦的倒数。错在：用了邻边。纠正：余割与正弦和对边配对。",
          "<strong>用了邻边而不是对边。</strong>错在：误算了 [[c/b]]。纠正：相除前先确认正对角 [[A]] 的边。",
          "<strong>以为余割以度为单位。</strong>错在：写成 1.6667 度。纠正：比值是纯数字，不是角度。",
          "<strong>给余割比值带上米或厘米。</strong>错在：单位早已抵消。纠正：从答案中去掉单位。",
          "<strong>对有效三角形接受小于 1 的结果。</strong>错在：相信了输入调换的计算。纠正：有效结果恒大于 1。",
          "<strong>输入了比对边还短的斜边。</strong>错在：输入描述了一个不可能的三角形。纠正：斜边输入框必须填较长的测量值。",
          "<strong>输入了零或负的边长。</strong>错在：除以零或无意义的负比值。纠正：只用正长度。",
          "<strong>混用了测量单位。</strong>错在：厘米除以米会使比值偏差 100 倍。纠正：先把两条边换算成同一单位。",
          "<strong>过早四舍五入。</strong>错在：在回乘之前把 [[5/3]] 舍入为 1.67，会引入可避免的误差。纠正：保留分数或多余位数直到最后一步。",
          "<strong>把参考角和另一个锐角搞混。</strong>错在：对边和邻边的标号互换了。纠正：先在图上标出角 [[A]]。",
          "<strong>以为很大的余割比值是角度。</strong>错在：把 12.6667 读成度数。纠正：它是乘数，即斜边是对边的 12.6667 倍。",
          "<strong>以为仅凭余割就能确定斜边。</strong>错在：指望一个数给出长度。纠正：比值还需要对边，通过 [[c=a\\times\\csc(A)]]。",
          "<strong>把正弦的倒数和余弦的倒数混淆。</strong>错在：在该用余割的地方用了正割。纠正：正弦配余割；余弦配正割。"
        ],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-verify": {
        "h2": "如何检查你的余割结果是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "有效、非退化的直角三角形要求："
          },
          {
            "kind": "p",
            "text": "[[[c \\gt a \\gt 0]]]"
          },
          {
            "kind": "p",
            "text": "因此 [[c/a \\gt 1]]。两个测量必须使用兼容的单位，算出的比值必须大于 1。恰为 1 的结果只是锐角趋近 90 度时的极限值，不是真实三角形的结果。小于 1 的比值通常表示输入调换、边标号错误或测量不兼容。"
          },
          {
            "kind": "h3",
            "text": "方法 1：检查正弦倒数"
          },
          {
            "kind": "p",
            "text": "计算 [[\\sin(A)=a/c]]，再计算 [[\\csc(A)=1/\\sin(A)]]。对于 3-4-5 三角形，[[\\sin(A)=3/5=0.6]]，[[1/0.6\\approx1.6667]]，与直接相除一致。"
          },
          {
            "kind": "h3",
            "text": "方法 2：检查勾股定理"
          },
          {
            "kind": "p",
            "text": "如果邻边已知或需要，验证 [[b=\\sqrt{c^2-a^2}]]。对于 [[c=5]] 和 [[a=3]]：[[b=\\sqrt{25-9}=4]]，且 [[3^2+4^2=5^2]]。这确认边长构成直角三角形。"
          },
          {
            "kind": "h3",
            "text": "方法 3：用乘法检查比值"
          },
          {
            "kind": "p",
            "text": "验证 [[a\\times\\csc(A)\\approx c]]。对于 [[a=3]] 和 [[\\csc(A)=5/3]]：[[3\\times\\frac{5}{3}=5]]。当显示的小数被四舍五入时可能出现微小差异；精确分数会消除它们。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-vs": {
        "h2": "余割与正弦、正割及其他三角比",
        "blocks": [
          {
            "kind": "p",
            "text": "每个比值比较的是不同的边对："
          },
          {
            "kind": "p",
            "text": "倒数配对是正弦与余割、余弦与正割：[[\\csc(A)=1/\\sin(A)]]，而 [[\\sec(A)=1/\\cos(A)]]。余割和正割不可互换。正弦适合对边和斜边已知的直接测量问题；余割适合围绕倒数建立的公式，以及从已知余割值还原斜边。"
          },
          {
            "kind": "p",
            "text": "相邻的比值请参阅 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比计算器</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比计算器</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">余切比计算器</a> 和 <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">直角三角形三角比计算器</a>。当边长本身是未知数时，<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">直角三角形边长计算器</a> 会有所帮助。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["比值", "公式", "比较内容"],
            "rows": [
              ["正弦", "sin(A) = a/c", "对边比斜边"],
              ["余割", "csc(A) = c/a", "斜边比对边"],
              ["余弦", "cos(A) = b/c", "邻边比斜边"],
              ["正割", "sec(A) = c/b", "斜边比邻边"],
              ["正切", "tan(A) = a/b", "对边比邻边"],
              ["余切", "cot(A) = b/a", "邻边比对边"]
            ]
          }
        ],
        "figures": []
      },
      "csc-faq": {
        "h2": "常见问题",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "csc-related": {
        "h2": "探索相关的三角计算器",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "直角三角形三角比计算器",
            "desc": "在一个地方同时计算六个三角比。"
          },
          {
            "name": "正弦比计算器",
            "desc": "从对边和斜边求正弦比。"
          },
          {
            "name": "正割比计算器",
            "desc": "从斜边和邻边求正割比。"
          },
          {
            "name": "余切比计算器",
            "desc": "从邻边和对边求余切比。"
          },
          {
            "name": "直角三角形边长计算器",
            "desc": "从角度或勾股定理求未知边长。"
          },
          {
            "name": "直角三角形角度计算器",
            "desc": "从已知边长求锐角。"
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关的三角计算器",
    "faqs": [
      {
        "question": "直角三角形中余割的公式是什么？",
        "answer": "公式是 csc(A) = c / a：用斜边除以角 A 的对边。斜边为 5、对边为 3 时，结果为 5/3，约 1.6667。同样的值来自倒数恒等式 csc(A) = 1 / sin(A)。"
      },
      {
        "question": "余割和正弦有什么关系？",
        "answer": "余割是正弦的倒数：csc(A) = 1 / sin(A)。正弦用对边除以斜边；余割把这个分数翻转。两者描述同一个三角形，乘积恒为 1。若 sin(A) = 0.6，则 csc(A) = 1 / 0.6，约 1.6667。"
      },
      {
        "question": "为什么有效直角三角形中余割大于 1？",
        "answer": "在有效、非退化的直角三角形中，斜边是最长的边，所以 c 大于 a，较大的数除以较小的正数恒大于 1。等于或小于 1 的比值表示输入调换、边标号错误或不可能的测量。"
      },
      {
        "question": "余割和正割有什么区别？",
        "answer": "余割用斜边除以对边（c/a），而正割用斜边除以邻边（c/b）。余割是正弦的倒数；正割是余弦的倒数。它们回答不同的问题，所以当对边和邻边不同时，调换它们会得到错误答案。"
      },
      {
        "question": "30 度角的余割是多少？",
        "answer": "30 度的余割恰为 2，因为 30 度对面的边是斜边的一半：c/a = 2/1 = 2。检验：sin(30 度) = 0.5，1 / 0.5 = 2。它是少数值得记住的余割值之一。"
      },
      {
        "question": "余割比有单位吗？",
        "answer": "没有。斜边和对边用相同单位测量，除法中单位相互抵消。无论边是厘米、米还是毫米，余割比都是纯粹的无量纲数。绝不要给它带上度、米或英尺。"
      },
      {
        "question": "余割可以小于 1 吗？",
        "answer": "对有效、非退化的直角三角形不行。因为斜边比对边长，c/a 必须大于 1。等于或小于 1 的结果几乎总是意味着两个输入被调换了，工具算的是 a/c（即正弦）而不是 c/a。请重新确认哪个测量值是斜边。"
      },
      {
        "question": "如何从边长计算余割？",
        "answer": "确定斜边 c 和对边 a，确认两者使用相同单位且 c 长于 a，然后计算 csc(A) = c / a。当 c = 13 米、a = 5 米时，答案是 13/5 = 2.6。"
      },
      {
        "question": "如何用余割求斜边？",
        "answer": "把公式变形为 c = a x csc(A)。用已知的对边乘以余割比值。若 a = 6 米、csc(A) = 2.5，则 c = 6 x 2.5 = 15 米。结果恒长于对边，这是对算术的快速合理性检查。"
      },
      {
        "question": "余割计算器需要输入角度吗？",
        "answer": "不需要。计算器只需要两条边的长度：斜边和对边。比值 c/a 完全由这些测量决定，角 A 从不参与计算。"
      },
      {
        "question": "角度增大时余割如何变化？",
        "answer": "锐角增大时余割减小。小角度的对边相对于斜边较短，所以比值大；大角度的对边几乎与斜边等长，所以比值略高于 1。例如 csc(30 度) = 2，csc(45 度) 约 1.4142，csc(60 度) 约 1.1547。"
      },
      {
        "question": "什么时候用余割而不用正弦？",
        "answer": "当你需要斜边比对边时用余割：在围绕余割建立的公式中、在倒数恒等式运算中，或当题目给出余割值求边时。对于直接测量问题，正弦通常是更自然的选择。"
      }
    ],
    "conclusion": {
      "h2": "自信地掌握余割比",
      "paragraphs": [
        "余割是从另一面看的正弦：用斜边除以对边，结果告诉你斜边里能装下几个对边长度。公式 [[\\csc(A)=c/a]] 只需要两个测量值，答案恒为大于 1 的无量纲数，倒数恒等式 [[\\csc(A)=1/\\sin(A)]] 为你提供了检查每次计算的内置方法。无论三角形是梯子、椽子还是课本上的 3-4-5，方法永远不变：确定斜边，确定对边，相除，验证。把 <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">勾股定理计算器</a> 放在手边以确认三角形的几何形状，并把本页加入书签，用于每次余割计算。"
      ]
    }
  }
};
