/**
 * cosineGuideTranslations.batch3.ts
 * Translations of the Cosine Ratio Calculator guide (CosineRatioGuide.astro), Page 10 of 45.
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language (mirrors cosecantGuideTranslations.batch3.ts):
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (13 entries: cos-intro, cos-triangle, cos-whatis, cos-formula,
 *   cos-howto, cos-examples, cos-applications, cos-angle, cos-recover,
 *   cos-mistakes, cos-verify, cos-vs, cos-related)
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

export const COSINE_TRANSLATIONS_BATCH3 = {
"id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "cos-intro": "Apa Itu Kalkulator Rasio Kosinus?",
      "cos-triangle": "Memahami Sisi Samping dan Hipotenusa",
      "cos-whatis": "Memahami Rasio Kosinus",
      "cos-formula": "Cara Kerja Rumus Kosinus",
      "cos-howto": "Cara Menggunakan Kalkulator Rasio Kosinus",
      "cos-examples": "Contoh Langkah demi Langkah Menghitung Kosinus",
      "cos-applications": "Contoh Kehidupan Nyata Menggunakan Rasio Kosinus",
      "cos-angle": "Kosinus dan Ukuran Sudut",
      "cos-recover": "Menemukan Sisi dan Sudut dengan Kosinus",
      "cos-mistakes": "Kesalahan Umum saat Menghitung Kosinus",
      "cos-verify": "Cara Memeriksa Apakah Hasil Kosinus Anda Sah",
      "cos-vs": "Kosinus vs. Sinus, Tangen, dan Sekan",
      "cos-faq": "Pertanyaan yang Sering Diajukan",
      "cos-related": "Jelajahi Kalkulator Trigonometri Terkait"
    },
    "sections": {
      "cos-intro": {
        "h2": "Apa Itu Kalkulator Rasio Kosinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator rasio kosinus menjawab satu pertanyaan: untuk sudut lancip dalam segitiga siku-siku, seberapa panjang sisi samping dibandingkan dengan hipotenusa? Masukkan kedua panjang sisi, dan alat ini membagi sisi samping dengan hipotenusa, menghasilkan [[\\cos(A)=b/c]]. Dengan sisi samping 4 cm dan hipotenusa 5 cm, perhitungannya adalah [[4/5=0.8]]: sisi samping adalah 80 persen dari hipotenusa. Desimal itu adalah jawaban yang lengkap. Jawaban itu tidak membawa satuan, karena sentimeter saling meniadakan selama pembagian, dan itu bukan sudut dalam derajat. Sisi depan tidak pernah masuk dalam perhitungan ini. Dari satu rasio itu Anda dapat membandingkan bentuk, memeriksa pengukuran, menemukan proyeksi horizontal, atau memulihkan sudut dengan kosinus terbalik."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Memahami Sisi Samping dan Hipotenusa",
        "blocks": [
          {
            "kind": "h3",
            "text": "Apa Itu Segitiga Siku-Siku?"
          },
          {
            "kind": "p",
            "text": "Segitiga siku-siku memiliki satu sudut tepat [[90^\\circ]], yaitu sudut antara dua garis yang saling tegak lurus, seperti dinding yang bertemu lantai yang rata. Hipotenusa terletak berhadapan dengan sudut siku-siku itu dan selalu menjadi sisi terpanjang. Kedua sudut lainnya berbagi 90 derajat yang tersisa, sehingga keduanya lancip. Kosinus membandingkan dua sisi tersebut dalam hubungan yang tetap."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Samping?"
          },
          {
            "kind": "p",
            "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut acuan [[A]] tanpa menjadi hipotenusa. Sisi ini sering mewakili bentang horizontal: jarak tanah dari tangga, bentang horizontal kasau, atau proyeksi suatu gaya. Kaki mana yang dianggap sebagai sisi samping bergantung pada sudut acuan, sehingga beralih dari sudut [[A]] ke sudut [[B]] akan menukar label sisi samping dan sisi depan."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "Hipotenusa [[c]] adalah sisi yang berhadapan dengan sudut siku-siku: dalam diagram apa pun sisi ini menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan sisi ini adalah sisi terpanjang. Dalam keadaan nyata, sisi ini dapat berupa tangga, kasau, tanjakan, kabel, atau lintasan garis lurus, dan sisi ini selalu benar-benar lebih panjang daripada sisi samping."
          },
          {
            "kind": "h3",
            "text": "Apa Itu Sisi Depan?"
          },
          {
            "kind": "p",
            "text": "Sisi depan [[a]] terletak tepat berhadapan dengan sudut [[A]] dan tidak pernah menyentuh titik sudutnya. Sisi ini tidak berperan dalam rumus kosinus, itulah sebabnya kalkulator tidak pernah memintanya. Perhatikan sudut acuan dengan benar: salah memilih sudut dan label sisi depan serta sisi samping akan tertukar secara diam-diam."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Segitiga siku-siku dengan sudut A kiri bawah: sisi samping b emas, hipotenusa c biru, sisi depan a netral, cos(A)=b/c",
            "caption": "Sudut A berada di kiri bawah; kosinus menggunakan sisi samping b dan hipotenusa c, bukan sisi depan a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Memahami Rasio Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus membandingkan kaki yang berada di samping sudut [[A]] dengan sisi miring utuh:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Di sini [[\\cos(A)]] adalah kosinus dari sudut [[A]], [[b]] adalah sisi samping, dan [[c]] adalah hipotenusa: bagian hipotenusa yang tertutup oleh sisi samping."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: Sinus = Sisi Depan / Hipotenusa. CAH: Kosinus = Sisi Samping / Hipotenusa. TOA: Tangen = Sisi Depan / Sisi Samping. Huruf-huruf CAH menjabarkan rumus kosinus: huruf pertama menamai fungsi, huruf kedua pembilang, dan huruf ketiga penyebut."
          },
          {
            "kind": "h3",
            "text": "Mengapa Kosinus Merupakan Rasio"
          },
          {
            "kind": "p",
            "text": "Membagi dua panjang akan meniadakan satuannya: [[4\\text{ m}/5\\text{ m}=0.8]], dan [[400\\text{ cm}/500\\text{ cm}=0.8]] juga. Sisi-sisi fisik yang sama selalu menghasilkan angka yang sama, apa pun satuan pengukurannya, selama keduanya berbagi satuan yang sama."
          },
          {
            "kind": "h3",
            "text": "Apa Arti Nilai Kosinus 0,8?"
          },
          {
            "kind": "p",
            "text": "Itu berarti sisi samping adalah 80 persen dari hipotenusa: kaki yang panjang di samping sudut, hipotenusa hanya sedikit lebih panjang. Nilai itu tidak memberikan sudut secara langsung; untuk itu diperlukan kosinus terbalik."
          },
          {
            "kind": "h3",
            "text": "Mengapa Kosinus Kurang dari 1"
          },
          {
            "kind": "p",
            "text": "Hipotenusa lebih panjang daripada kedua kakinya, sehingga [[b \\lt c]] dan [[b/c \\lt 1]], dan kedua sisi positif, sehingga rasio tetap di atas 0. Untuk segitiga siku-siku yang sah dan tidak degenerasi, kosinus selalu berada tepat di antara 0 dan 1; nilai batas 0 dan 1 adalah limit, bukan nilai yang dapat dicapai."
          },
          {
            "kind": "h3",
            "text": "Kosinus Versus Sinus"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] dan [[\\sin(A)=a/c]] berbagi hipotenusa tetapi menggunakan kaki yang berbeda. Pilih kosinus ketika sisi samping diketahui atau diperlukan; pilih sinus ketika sisi depannya. Mencampuradukkan keduanya adalah kesalahan awal yang paling umum."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tiga tahap: segitiga 3-4-5 berlabel, rumus kosinus cos(A)=b/c, hasil 4/5=0.8, sisi samping 80 persen",
            "caption": "Tiga tahap: tentukan sisi-sisinya, terapkan cos(A) = b/c, lalu bagi. Sisi samping adalah 80 persen dari hipotenusa."
          }
        ]
      },
      "cos-formula": {
        "h2": "Cara Kerja Rumus Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulailah dari definisi: kosinus adalah sisi samping dibagi hipotenusa. Dalam notasi halaman ini:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Sisi samping menjadi pembilang karena ia adalah kaki yang dibandingkan; hipotenusa menjadi penyebut karena ia adalah panjang acuan."
          },
          {
            "kind": "h3",
            "text": "Contoh Lengkap: Segitiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis rumusnya. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Substitusikan pengukurannya. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bagi. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Tafsirkan jawabannya. Sisi samping adalah 80 persen dari hipotenusa."
          },
          {
            "kind": "p",
            "text": "Langkah 5: Verifikasi segitiganya. [[3^2+4^2=5^2]], sehingga [[9+16=25]]. Panjang sisi-sisinya konsisten secara matematis."
          },
          {
            "kind": "p",
            "text": "Jika Anda menginginkan sudutnya, bukan rasionya, kosinus terbalik adalah langkah berikutnya: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Itu perhitungan terpisah; alat pada halaman ini hanya mengembalikan rasionya."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Cara Menggunakan Kalkulator Rasio Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Panduan di bawah ini sesuai dengan antarmuka sebenarnya pada halaman ini."
          }
        ],
        "steps": [
          "<strong>Tentukan sudut acuan [[A]],</strong> karena sisi samping didefinisikan relatif terhadapnya.",
          "<strong>Temukan sisi samping [[b]]:</strong> kaki yang menyentuh sudut [[A]] dan bukan hipotenusa.",
          "<strong>Temukan hipotenusa [[c]]:</strong> sisi yang berhadapan dengan sudut siku-siku, sisi terpanjang.",
          "<strong>Ukur atau peroleh kedua panjang sisi</strong> dalam satuan yang sama.",
          "<strong>Masukkan panjang sisi samping</strong> (nilai yang lebih kecil) pada kolom pertama.",
          "<strong>Masukkan hipotenusa</strong> (nilai yang lebih besar) pada kolom kedua.",
          "<strong>Pilih satuan yang cocok dengan pemilih satuan</strong> agar pembagiannya bermakna.",
          "<strong>Pastikan kedua nilai positif;</strong> panjang nol atau negatif tidak dapat membentuk segitiga.",
          "<strong>Periksa bahwa hipotenusa lebih panjang daripada sisi samping;</strong> jika tidak, masukannya tertukar atau salah label.",
          "<strong>Klik Hitung cos(A)</strong> untuk membagi sisi samping dengan hipotenusa.",
          "<strong>Baca rasio kosinusnya:</strong> sisi samping sebagai bagian dari hipotenusa.",
          "<strong>Verifikasi jawabannya berada di antara 0 dan 1;</strong> nilai apa pun di luar rentang itu menandakan kesalahan masukan.",
          "<strong>Gunakan Reset</strong> untuk menghapus masukan dan memulai lagi."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "Contoh Langkah demi Langkah Menghitung Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikuti pola yang sama: tulis rumus, substitusikan, bagi."
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
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Sisi samping adalah 80 persen dari hipotenusa; sisi depan melengkapi segitiga tetapi rumusnya mengabaikannya."
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
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Sisi samping adalah sekitar 92,31 persen dari hipotenusa; sisi depan 5 m tidak diperlukan."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segitiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut [[A=30^\\circ]], sisi samping adalah [[\\sqrt{3}/2]] kali hipotenusa. Dengan [[b=\\sqrt{3}\\text{ cm}]] dan [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Nilai sudut istimewa ini layak dihafal; segitiga 30-60-90 sering muncul dalam soal geometri."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segitiga dengan Sisi Samping 8 dan Hipotenusa 10"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=8\\text{ m}]] dan [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Rasionya sama dengan segitiga 3-4-5 karena menskalakan semua sisi dengan faktor yang sama tidak mengubah sudut dan rasionya."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Contoh Kehidupan Nyata Menggunakan Rasio Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus adalah rasio matematis, bukan besaran fisik yang memiliki satuan. Nilai praktisnya terletak pada membandingkan sisi samping dengan hipotenusa, menghitung proyeksi horizontal, dan memverifikasi pengukuran. Setiap contoh mengasumsikan segitiga siku-siku yang disederhanakan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Menghitung Rasio Kosinus Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga 5 m berdiri dengan alasnya 3 m dari dinding; sudut [[A]] terletak di antara tangga dan tanah yang rata. Jarak tanah adalah sisi samping [[b=3\\text{ m}]], tangga adalah hipotenusa [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], sehingga [[\\boxed{\\cos(A)=0.6}]]: jarak tanah adalah 60 persen dari panjang tangga. Rasio saja tidak menentukan keamanan tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Menghitung Rasio Kosinus Kasau Atap"
          },
          {
            "kind": "p",
            "text": "Sebuah kasau atap memiring 5 m dengan bentang horizontal 4 m: bentangnya adalah sisi samping [[b=4\\text{ m}]], kasaunya hipotenusa [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], sehingga [[\\boxed{\\cos(A)=0.8}]]: bentangnya adalah 80 persen dari panjang miringnya. Ini rasio geometris, bukan penilaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Mengevaluasi Rasio Kosinus Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan memiring 9,5 m dengan bentang horizontal 9 m: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], sehingga [[\\boxed{\\cos(A)\\approx0.9474}]]: bentangnya adalah sekitar 94,74 persen dari panjang miringnya, sebagaimana mestinya tanjakan yang landai. Nilai ini tidak menentukan kepatuhan aksesibilitas."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Pengukuran Survei"
          },
          {
            "kind": "p",
            "text": "Sebuah segitiga survei yang disederhanakan mencatat jarak garis lurus 50 m dan pemisahan horizontal 40 m: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], sehingga [[\\boxed{\\cos(A)=0.8}]]: jarak horizontal adalah 80 persen dari jarak garis lurus. Survei nyata mungkin memerlukan koreksi tinggi instrumen."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Menemukan Rasio Kosinus Kawat Penahan"
          },
          {
            "kind": "p",
            "text": "Sebuah kawat penahan 13 m ditambatkan 12 m secara horizontal dari tiang: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], sehingga [[\\boxed{\\cos(A)\\approx0.9231}]]: pemisahannya adalah sekitar 92,31 persen dari panjang kawat. Nilai ini tidak menjelaskan tegangan kawat atau kekuatan jangkar."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Menghitung Rasio Kosinus Balok Tangga"
          },
          {
            "kind": "p",
            "text": "Sebuah balok tangga yang disederhanakan panjangnya 5 m dengan bentang horizontal 4 m: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], sehingga [[\\boxed{\\cos(A)=0.8}]]: bentangnya adalah 80 persen dari balok diagonal. Nilai ini tidak memverifikasi kepatuhan terhadap kode bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Memahami Proyeksi Horizontal Lengan Derek"
          },
          {
            "kind": "p",
            "text": "Sebuah lengan derek yang disederhanakan panjangnya 10 m dengan proyeksi horizontal 6 m: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], sehingga [[\\boxed{\\cos(A)=0.6}]]: proyeksinya adalah 60 persen dari panjang lengan. Nilai ini tidak menentukan kapasitas angkat."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Segmen Penerbangan Lurus Pesawat"
          },
          {
            "kind": "p",
            "text": "Sebuah pesawat menempuh 5 km sepanjang jalur lurus, menempuh 4 km secara horizontal: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], sehingga [[\\boxed{\\cos(A)=0.8}]]: perpindahan horizontal adalah 80 persen dari panjang jalur. Model yang diidealkan, bukan navigasi penerbangan."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Menghitung Rasio Kosinus Penyangga Diagonal"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga diagonal panjangnya 2 m dengan proyeksi horizontal 1,2 m: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], sehingga [[\\boxed{\\cos(A)=0.6}]]: proyeksinya adalah 60 persen dari panjang penyangga. Nilai ini tidak menentukan kekuatan penyangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Menghitung Rasio Kosinus Jalur Pendakian"
          },
          {
            "kind": "p",
            "text": "Sebuah bagian jalur pendakian yang lurus panjangnya 100 m dengan perpindahan horizontal 80 m: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], sehingga [[\\boxed{\\cos(A)=0.8}]]: perpindahannya adalah 80 persen dari panjang jalur. Jalur pendakian nyata berkelok dan berubah gradiennya."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Penyangga Kanopi"
          },
          {
            "kind": "p",
            "text": "Sebuah penyangga kanopi panjangnya 3 m dengan proyeksi horizontal 2,4 m: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], sehingga [[\\boxed{\\cos(A)=0.8}]]: proyeksinya adalah 80 persen dari panjang penyangga. Nilai ini tidak menentukan kesesuaian struktural."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Kabel di Antara Dua Titik"
          },
          {
            "kind": "p",
            "text": "Sebuah kabel lurus membentang 25 m di antara titik-titik yang terpisah 24 m secara horizontal: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], sehingga [[\\boxed{\\cos(A)=0.96}]]: pemisahannya adalah 96 persen dari panjang kabel. Model ini mengasumsikan kabel lurus dalam segitiga siku-siku."
          },
          {
            "kind": "p",
            "text": "Polanya konsisten di seluruh contoh: rasionya besar ketika sisi samping merupakan bagian besar dari hipotenusa, dan kecil ketika sudutnya terbuka lebar."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situasi", "Sisi samping b", "Hipotenusa c", "Rumus kosinus", "Rasio terhitung", "Interpretasi"],
            "rows": [
              ["Tangga", "3 m", "5 m", "3/5", "0.6", "Jarak tanah adalah 60% dari panjang tangga"],
              ["Kasau atap", "4 m", "5 m", "4/5", "0.8", "Bentang adalah 80% dari panjang kasau"],
              ["Tanjakan", "9 m", "9.5 m", "9/9.5", "0.9474", "Bentang adalah 94,74% dari panjang miring"],
              ["Survei", "40 m", "50 m", "40/50", "0.8", "Jarak horizontal adalah 80% dari garis lurus"],
              ["Kawat penahan", "12 m", "13 m", "12/13", "0.9231", "Pemisahan adalah 92,31% dari kawat"],
              ["Balok tangga", "4 m", "5 m", "4/5", "0.8", "Bentang adalah 80% dari panjang balok"],
              ["Lengan derek", "6 m", "10 m", "6/10", "0.6", "Proyeksi adalah 60% dari lengan"],
              ["Segmen penerbangan", "4 km", "5 km", "4/5", "0.8", "Perpindahan adalah 80% dari jalur"],
              ["Penyangga diagonal", "1.2 m", "2 m", "1.2/2", "0.6", "Proyeksi adalah 60% dari penyangga"],
              ["Jalur pendakian", "80 m", "100 m", "80/100", "0.8", "Perpindahan adalah 80% dari jalur"],
              ["Penyangga kanopi", "2.4 m", "3 m", "2.4/3", "0.8", "Proyeksi adalah 80% dari penyangga"],
              ["Kabel", "24 m", "25 m", "24/25", "0.96", "Pemisahan adalah 96% dari kabel"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Empat panel: tangga rasio 0.6, kasau 0.8, survei 0.8, lengan derek 0.6, masing-masing dengan segitiga siku-siku berlabel",
            "caption": "Empat perhitungan praktis: tangga, kasau atap, survei, dan lengan derek, masing-masing dengan segitiga, rumus, dan rasionya."
          }
        ]
      },
      "cos-angle": {
        "h2": "Memahami Hubungan antara Kosinus dan Ukuran Sudut",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus menyusut seiring sudut lancip bertambah. Sudut kecil membuat sisi samping hampir sepanjang hipotenusa, sehingga rasionya berada dekat 1; seiring sudut [[A]] terbuka menuju [[90^\\circ]], sisi samping menjadi bagian yang lebih kecil dan rasionya menurun. Nilai acuan terverifikasi di bawah menunjukkan polanya:"
          },
          {
            "kind": "p",
            "text": "Pengukuran dalam tabel bersifat ilustratif: rasiolah, bukan panjang absolutnya, yang menentukan sudut-sudutnya. Rasio mendekati 0 seiring sudut mendekati [[90^\\circ]] dan mendekati 1 seiring sudut mendekati [[0^\\circ]], tetap berada tepat di antaranya untuk setiap segitiga yang sah."
          },
          {
            "kind": "p",
            "text": "Kalkulator tidak menerima masukan sudut; nilai acuan ini berfungsi sebagai orientasi dan sebagai nilai pemeriksaan saat memverifikasi hasil."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Sudut A", "Sisi samping b", "Hipotenusa c", "Rasio kosinus"],
            "rows": [
              ["30 derajat", "sqrt(3)", "2", "Sekitar 0.8660"],
              ["45 derajat", "1", "sqrt(2)", "Sekitar 0.7071"],
              ["60 derajat", "1", "2", "0.5"],
              ["80 derajat", "1", "Sekitar 5.7588", "Sekitar 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai kosinus 0.8660, 0.7071, 0.5; kosinus menurun seiring sudut membesar",
            "caption": "Seiring sudut A membesar, sisi samping menjadi bagian yang lebih kecil dari hipotenusa, sehingga cos(A) menurun."
          }
        ]
      },
      "cos-recover": {
        "h2": "Menemukan Sisi dan Sudut dengan Kosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Rumus kosinus disusun ulang dengan rapi untuk memulihkan salah satu dari tiga besarannya ketika dua lainnya diketahui."
          },
          {
            "kind": "h3",
            "text": "Cara Menemukan Sisi Samping"
          },
          {
            "kind": "p",
            "text": "Mulailah dengan [[\\cos(A)=b/c]] dan kalikan kedua ruas dengan [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[c=10\\text{ m}]] dan [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], dan karena [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: setengah dari hipotenusa untuk sudut ini."
          },
          {
            "kind": "h3",
            "text": "Cara Menemukan Hipotenusa"
          },
          {
            "kind": "p",
            "text": "Menyelesaikan untuk [[c]] menghasilkan:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[b=4\\text{ m}]] dan [[A=60^\\circ]]: [[c=4/0.5]], sehingga [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Cara Menemukan Sudut dari Rasio Kosinus"
          },
          {
            "kind": "p",
            "text": "Rasio kosinus dan sudut adalah besaran yang berbeda. Jika rasionya diketahui, kosinus terbalik, juga disebut arkkosinus, memulihkan sudutnya:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], sehingga [[\\boxed{A\\approx36.87^\\circ}]]; atur kalkulator ilmiah ke mode derajat terlebih dahulu. Ini adalah penyusunan ulang matematis: alat pada halaman ini mengembalikan rasionya sendiri."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Kesalahan Umum saat Menghitung Kosinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Salah Versus Benar"
          },
          {
            "kind": "p",
            "text": "Diketahui [[b=4]] dan [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Salah: [[5/4=1.25]]. Ini adalah kebalikan dari kosinus, disebut sekan, dan bukan rasio kosinus."
          },
          {
            "kind": "p",
            "text": "Benar: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Kosinus yang sah dari sudut lancip selalu berada di antara 0 dan 1."
          }
        ],
        "steps": [
          "<strong>Menggunakan sisi depan, bukan sisi samping.</strong> Ini menghitung [[a/c]], yaitu sinus. Perbaikan: pilih kaki yang menyentuh sudut [[A]].",
          "<strong>Membalik pecahan menjadi [[c/b]].</strong> Jawabannya melebihi 1. Perbaikan: sisi yang lebih panjang harus menjadi penyebut.",
          "<strong>Mencampuradukkan kosinus dengan sinus.</strong> Melaporkan 0,6 untuk segitiga 3-4-5. Perbaikan: sinus menggunakan sisi depan; kosinus menggunakan sisi samping.",
          "<strong>Mencampuradukkan kosinus dengan sekan.</strong> Menghitung [[c/b]]. Perbaikan: sekan adalah kebalikan dari kosinus, selalu di atas 1.",
          "<strong>Memasukkan sisi samping yang lebih panjang daripada hipotenusa.</strong> Masukan menggambarkan segitiga yang mustahil. Perbaikan: kolom hipotenusa harus memuat pengukuran yang lebih panjang.",
          "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Pembagian dengan nol atau rasio negatif yang tidak bermakna. Perbaikan: gunakan panjang positif saja.",
          "<strong>Mencampur satuan pengukuran.</strong> Sentimeter dibagi meter menggeser rasio sebesar faktor 100. Perbaikan: ubah kedua sisi ke satu satuan terlebih dahulu.",
          "<strong>Melaporkan kosinus sebagai sudut dalam derajat.</strong> Menulis 0,8 derajat. Perbaikan: rasio adalah bilangan murni, bukan sudut.",
          "<strong>Mengira rasio kosinus memiliki satuan.</strong> Satuannya sudah saling meniadakan dalam pembagian. Perbaikan: hilangkan satuan dari jawaban.",
          "<strong>Mencampuradukkan sudut acuan dengan sudut lancip lainnya.</strong> Label sisi samping dan sisi depan tertukar. Perbaikan: tandai sudut [[A]] pada diagram terlebih dahulu.",
          "<strong>Membulatkan terlalu dini.</strong> Membulatkan [[12/13]] menjadi 0,92 sebelum mengalikan kembali menambah kesalahan yang bisa dihindari. Perbaikan: pertahankan digit tambahan hingga langkah terakhir.",
          "<strong>Mengira kosinus sama untuk setiap segitiga.</strong> Menerapkan satu nilai pada bentuk yang berbeda. Perbaikan: kosinus bergantung pada proporsi segitiga.",
          "<strong>Mengira rasio langsung memberikan sudut dalam derajat.</strong> Membaca 0,8 sebagai sudut. Perbaikan: gunakan kosinus terbalik untuk memulihkan derajat.",
          "<strong>Membaca kosinus 0,8 sebagai 0,8 derajat.</strong> Mencampuradukkan rasio dengan sudut. Perbaikan: 0,8 adalah rasionya; sudutnya sekitar 36,87 derajat.",
          "<strong>Menamai kaki sebelum menentukan sudut acuan.</strong> Sisi samping dan sisi depan tercampur. Perbaikan: tetapkan sudut [[A]] sebelum menamai kaki mana pun."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Cara Memeriksa Apakah Hasil Kosinus Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segitiga siku-siku yang sah dan tidak degenerasi memerlukan [[0 \\lt b \\lt c]], dan oleh karena itu [[0 \\lt b/c \\lt 1]]. Kedua pengukuran harus menggunakan satuan yang kompatibel, dan hasil kosinus harus lebih besar dari 0 dan kurang dari 1. Hasil 1 atau lebih biasanya menunjukkan masukan terbalik, identifikasi sisi yang salah, atau pengukuran yang tidak kompatibel."
          },
          {
            "kind": "h3",
            "text": "Metode 1: Periksa Rasionya"
          },
          {
            "kind": "p",
            "text": "Verifikasi [[\\cos(A)=b/c]] secara langsung. Dengan [[b=4]] dan [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Metode 2: Periksa Teorema Pythagoras"
          },
          {
            "kind": "p",
            "text": "Jika sisi depan diketahui atau diperlukan, hitung [[a=\\sqrt{c^2-b^2}]]. Untuk [[b=4]] dan [[c=5]]: [[a=\\sqrt{25-16}=3]], dan [[3^2+4^2=5^2]]. Ini memastikan dimensi segitiga siku-siku 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Metode 3: Periksa Menggunakan Kosinus Terbalik"
          },
          {
            "kind": "p",
            "text": "Jika rasionya 0,8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Lalu verifikasi bahwa sudut dan rasio sisi konsisten. Selisih kecil dapat muncul karena pembulatan."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Kosinus vs. Sinus, Tangen, dan Sekan",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap rasio membandingkan pasangan sisi yang berbeda, menggunakan sudut acuan dan label sisi yang sama:"
          },
          {
            "kind": "p",
            "text": "Sekan adalah kebalikan dari kosinus: [[\\sec(A)=1/\\cos(A)]]. Jika [[\\cos(A)=0.8]], maka [[\\sec(A)=1/0.8=1.25]]. Gunakan kosinus untuk sisi samping atau proyeksi horizontal, sinus untuk komponen vertikal, tangen ketika tidak ada hipotenusa yang terlibat, dan sekan ketika rumus memerlukan kebalikannya."
          },
          {
            "kind": "p",
            "text": "Untuk rasio-rasio tetangga, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Tangen</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sekan</a>, dan <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Cosecan</a>."
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
              ["Kosinus", "cos(A) = b/c", "Sisi samping terhadap hipotenusa"],
              ["Tangen", "tan(A) = a/b", "Sisi depan terhadap sisi samping"],
              ["Sekan", "sec(A) = c/b", "Hipotenusa terhadap sisi samping"],
              ["Cosecan", "csc(A) = c/a", "Hipotenusa terhadap sisi depan"],
              ["Kotangen", "cot(A) = b/a", "Sisi samping terhadap sisi depan"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "Jelajahi Kalkulator Trigonometri Terkait",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          { "name": "Kalkulator Rasio Sinus" },
          { "name": "Kalkulator Rasio Tangen" },
          { "name": "Kalkulator Rasio Sekan" },
          { "name": "Kalkulator Rasio Cosecan" },
          { "name": "Kalkulator Sudut Segitiga Siku-Siku" },
          { "name": "Kalkulator Sisi Segitiga Siku-Siku" }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Trigonometri Terkait",
    "faqs": [
      {
        "question": "Apa rumus rasio kosinus untuk segitiga siku-siku?",
        "answer": "cos(A) = b / c: bagi sisi yang bersampingan dengan sudut A dengan hipotenusa. Untuk sisi samping 4 cm dan hipotenusa 5 cm, hasilnya adalah 4/5, sekitar 0,8."
      },
      {
        "question": "Bagaimana cara menghitung kosinus dari dua panjang sisi?",
        "answer": "Ukur sisi samping b dan hipotenusa c dalam satuan yang sama, pastikan c lebih panjang daripada b, lalu hitung cos(A) = b / c. Dengan b = 12 m dan c = 13 m, jawabannya adalah 12/13, sekitar 0,9231."
      },
      {
        "question": "Apa perbedaan kosinus dan sinus?",
        "answer": "Kosinus membagi sisi samping dengan hipotenusa (b/c); sinus membagi sisi depan dengan hipotenusa (a/c). Dalam segitiga 3-4-5, cos(A) = 0,8 dan sin(A) = 0,6."
      },
      {
        "question": "Mengapa kosinus kurang dari 1 untuk sudut lancip dalam segitiga siku-siku?",
        "answer": "Hipotenusa adalah sisi terpanjang, sehingga b selalu lebih kecil daripada c. Membagi bilangan positif yang lebih kecil dengan bilangan yang lebih besar menghasilkan nilai di bawah 1; kedua sisi positif, sehingga nilainya tetap di atas 0."
      },
      {
        "question": "Bisakah kosinus lebih besar dari 1 dalam segitiga siku-siku yang sah?",
        "answer": "Tidak. Kosinus di atas 1 membutuhkan sisi samping yang lebih panjang daripada hipotenusa, mustahil dalam segitiga siku-siku yang sebenarnya. Jika alat menampilkan 1 atau lebih, masukannya tertukar, kaki yang digunakan salah, atau pengukurannya tidak kompatibel."
      },
      {
        "question": "Apa arti nilai kosinus 0,8?",
        "answer": "Sisi samping panjangnya 80 persen dari hipotenusa: 4 m / 5 m = 0,8. Angka itu menggambarkan bentuk segitiga, bukan sudut; sudut yang cocok adalah sekitar 36,87 derajat, ditemukan dengan kosinus terbalik."
      },
      {
        "question": "Apakah rasio kosinus memiliki satuan?",
        "answer": "Tidak. Kedua sisi diukur dalam satuan yang sama, sehingga satuannya saling meniadakan: 4 m / 5 m = 0,8, dan 400 cm / 500 cm = 0,8. Laporkan kosinus sebagai bilangan murni tak berdimensi, jangan pernah dengan derajat, meter, atau kaki."
      },
      {
        "question": "Bagaimana cara menemukan sudut dari rasio kosinus?",
        "answer": "Gunakan kosinus terbalik (arkkosinus): A = cos^-1(rasio). Untuk 0,8, A = cos^-1(0,8), sekitar 36,87 derajat. Kalkulator pada halaman ini mengembalikan rasionya, bukan sudutnya, jadi atur kalkulator Anda ke mode derajat terlebih dahulu."
      },
      {
        "question": "Bagaimana cara menemukan sisi samping menggunakan kosinus?",
        "answer": "Susun ulang rumusnya menjadi b = c x cos(A). Kalikan hipotenusa dengan kosinus dari sudutnya. Dengan c = 10 m dan sudut A = 60 derajat, cos(60 derajat) = 0,5, sehingga b = 10 x 0,5 = 5 m."
      },
      {
        "question": "Apa perbedaan kosinus dan sekan?",
        "answer": "Sekan adalah kebalikan dari kosinus: sec(A) = c / b, atau 1 / cos(A). Kosinus memberikan nilai di bawah 1; sekan membalik pecahannya, memberikan nilai di atas 1. Jika cos(A) = 0,8, sec(A) = 1,25."
      },
      {
        "question": "Bisakah saya menghitung kosinus tanpa mengetahui sisi depannya?",
        "answer": "Ya. Kosinus hanya memerlukan sisi samping dan hipotenusa; sisi depan tidak berperan dalam cos(A) = b/c, itulah sebabnya kalkulator ini tidak pernah memintanya."
      },
      {
        "question": "Bagaimana kosinus dapat digunakan dalam pengukuran praktis?",
        "answer": "Kosinus adalah alat untuk proyeksi horizontal: jarak tanah dari panjang tangga, bentang horizontal dari panjang kasau, atau komponen horizontal suatu gaya. Kalikan hipotenusa dengan cos(A) untuk mendapatkan sisi samping, atau gunakan rasio untuk memverifikasi pengukuran sesuai dengan segitiga siku-siku."
      }
    ],
    "conclusion": {
      "h2": "Kuasai Rasio Kosinus dengan Percaya Diri",
      "paragraphs": [
        "Kosinus adalah bagian hipotenusa yang tertutup oleh sisi samping: bagi [[b]] dengan [[c]] untuk menggambarkan bentuk segitiga. Rumus [[\\cos(A)=b/c]] hanya memerlukan dua pengukuran, jawabannya selalu bilangan tak berdimensi di antara 0 dan 1, dan bentuk yang disusun ulang [[b=c\\cos(A)]] serta [[A=\\cos^{-1}(b/c)]] memulihkan sisi yang hilang atau sudutnya. Tangga, kasau, atau 3-4-5 dari buku teks, metodenya tidak pernah berubah: tentukan sisi samping, tentukan hipotenusa, bagi, dan verifikasi."
      ]
    }
  },
"ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "cos-intro": "ما هي حاسبة نسبة جيب التمام؟",
      "cos-triangle": "فهم الضلع المجاور والوتر",
      "cos-whatis": "فهم نسبة جيب التمام",
      "cos-formula": "كيف تعمل صيغة جيب التمام",
      "cos-howto": "كيفية استخدام حاسبة نسبة جيب التمام",
      "cos-examples": "أمثلة خطوة بخطوة لحساب جيب التمام",
      "cos-applications": "أمثلة واقعية لاستخدام نسبة جيب التمام",
      "cos-angle": "جيب التمام وحجم الزاوية",
      "cos-recover": "إيجاد الأضلاع والزوايا بجيب التمام",
      "cos-mistakes": "أخطاء شائعة عند حساب جيب التمام",
      "cos-verify": "كيف تتحقق من صحة نتيجة جيب التمام",
      "cos-vs": "جيب التمام مقابل الجيب والظل والقاطع",
      "cos-faq": "الأسئلة الشائعة",
      "cos-related": "استكشف حاسبات المثلثات ذات الصلة"
    },
    "sections": {
      "cos-intro": {
        "h2": "ما هي حاسبة نسبة جيب التمام؟",
        "blocks": [
          {
            "kind": "p",
            "text": "تجيب حاسبة نسبة جيب التمام عن سؤال واحد: بالنسبة إلى زاوية حادة في مثلث قائم، كم يبلغ طول الضلع المجاور مقارنة بالوتر؟ أدخل طولي الضلعين، فتقسم الأداة الضلع المجاور على الوتر، وتعيد [[\\cos(A)=b/c]]. مع ضلع مجاور طوله 4 سم ووتر طوله 5 سم، يكون الحساب [[4/5=0.8]]: أي أن الضلع المجاور يمثل 80 بالمائة من الوتر. ذلك العدد العشري هو الجواب الكامل. لا يحمل وحدات، لأن السنتيمترات تتلاشى أثناء القسمة، وهو ليس زاوية بالدرجات. والضلع المقابل لا يدخل في هذا الحساب أبداً. ومن تلك النسبة الواحدة يمكنك مقارنة الأشكال، والتحقق من القياسات، وإيجاد الإسقاطات الأفقية، أو استعادة الزاوية بجيب التمام العكسي."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "فهم الضلع المجاور والوتر",
        "blocks": [
          {
            "kind": "h3",
            "text": "ما هو المثلث القائم؟"
          },
          {
            "kind": "p",
            "text": "المثلث القائم له زاوية واحدة قياسها [[90^\\circ]] بالضبط، وهي الزاوية بين خطين متعامدين، كجدار يلتقي بأرضية مستوية. الوتر يقابل تلك الزاوية القائمة وهو أطول الأضلاع دائماً. وتتقاسم الزاويتان الباقيتان الدرجات التسعين المتبقية، فتكونان حادتين. وجيب التمام يقارن ضلعين من تلك الأضلاع في علاقة ثابتة."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المجاور؟"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور [[b]] هو الضلع القائم الذي يلامس الزاوية المرجعية [[A]] دون أن يكون الوتر. وغالباً ما يمثل مسافة أفقية: المسافة الأرضية من سلم، أو الامتداد الأفقي لعارضة سقف، أو إسقاط قوة. وأي ضلع قائم يُعد مجاوراً يعتمد على الزاوية المرجعية، فالانتقال من الزاوية [[A]] إلى الزاوية [[B]] يبدل تسميتي المجاور والمقابل."
          },
          {
            "kind": "h3",
            "text": "ما هو الوتر؟"
          },
          {
            "kind": "p",
            "text": "الوتر [[c]] هو الضلع المقابل للزاوية القائمة: في أي رسم يقابل المربع الصغير الذي يعلّم زاوية [[90^\\circ]]، وهو أطول الأضلاع. وفي الواقع قد يكون سلماً، أو عارضة سقف، أو منحدراً، أو كابلاً، أو مساراً مستقيماً، وهو أطول من الضلع المجاور دائماً وبشكل صارم."
          },
          {
            "kind": "h3",
            "text": "ما هو الضلع المقابل؟"
          },
          {
            "kind": "p",
            "text": "الضلع المقابل [[a]] يقع مباشرة مقابل الزاوية [[A]] ولا يلامس رأسها أبداً. ولا دور له في صيغة جيب التمام، ولهذا لا تطلبه الحاسبة أبداً. احرص على تحديد الزاوية المرجعية: فاختيار الزاوية الخاطئة يبدل تسميتي المقابل والمجاور بصمت."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "مثلث قائم مع الزاوية A أسفل اليسار، الضلع المجاور b بالذهبي، الوتر c بالأزرق، الضلع المقابل a بلون محايد، cos(A)=b/c",
            "caption": "الزاوية A أسفل اليسار؛ يستخدم جيب التمام الضلع المجاور b والوتر c، لا الضلع المقابل a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "فهم نسبة جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "يقارن جيب التمام الضلع القائم المجاور للزاوية [[A]] بالضلع المائل الكامل:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "هنا [[\\cos(A)]] هو جيب تمام الزاوية [[A]]، و[[b]] هو الضلع المجاور، و[[c]] هو الوتر: أي الحصة التي يغطيها الضلع المجاور من الوتر."
          },
          {
            "kind": "h3",
            "text": "فهم SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH تعني: الجيب = المقابل / الوتر. CAH تعني: جيب التمام = المجاور / الوتر. TOA تعني: الظل = المقابل / المجاور. وحروف CAH تصف صيغة جيب التمام: الحرف الأول يسمي الدالة، والثاني البسط، والثالث المقام."
          },
          {
            "kind": "h3",
            "text": "لماذا جيب التمام نسبة؟"
          },
          {
            "kind": "p",
            "text": "قسمة طولين تُلغي الوحدات: [[4\\text{ m}/5\\text{ m}=0.8]]، وكذلك [[400\\text{ cm}/500\\text{ cm}=0.8]]. فالأضلاع الفيزيائية نفسها تعطي دائماً العدد نفسه، أياً كانت الوحدة التي قِست بها، ما دامت الوحدة مشتركة بينهما."
          },
          {
            "kind": "h3",
            "text": "ماذا تعني قيمة جيب تمام 0.8؟"
          },
          {
            "kind": "p",
            "text": "تعني أن الضلع المجاور يمثل 80 بالمائة من الوتر: ضلع قائم طويل بجوار الزاوية، ووتر أطول منه بقليل. وهي لا تعطي الزاوية مباشرة؛ فذلك يحتاج إلى جيب التمام العكسي."
          },
          {
            "kind": "h3",
            "text": "لماذا جيب التمام أقل من 1؟"
          },
          {
            "kind": "p",
            "text": "الوتر أطول من أي من الضلعين القائمين، لذا [[b \\lt c]] و[[b/c \\lt 1]]، وكلتا القيمتين موجبتان، فتبقى النسبة فوق الصفر. وفي أي مثلث قائم صحيح غير منحط، يقع جيب التمام دائماً بين 0 و1 حصراً؛ فقيمتا الحد 0 و1 حدّان لا يمكن بلوغهما."
          },
          {
            "kind": "h3",
            "text": "جيب التمام مقابل الجيب"
          },
          {
            "kind": "p",
            "text": "كل من [[\\cos(A)=b/c]] و[[\\sin(A)=a/c]] يشترك في الوتر لكن يستخدم ضلعاً مختلفاً. اختر جيب التمام عندما يكون الضلع المجاور معروفاً أو مطلوباً؛ واختر الجيب عندما يكون الضلع المقابل هو المعروف أو المطلوب. والخلط بينهما هو أشهر خطأ في البداية."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "ثلاث مراحل: مثلث 3-4-5 موسوم، وصيغة جيب التمام cos(A)=b/c، والنتيجة 4/5=0.8، والضلع المجاور يمثل 80 بالمائة",
            "caption": "ثلاث مراحل: حدد الأضلاع، وطبق cos(A) = b/c، واقسم. الضلع المجاور يمثل 80 بالمائة من الوتر."
          }
        ]
      },
      "cos-formula": {
        "h2": "كيف تعمل صيغة جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "ابدأ من التعريف: جيب التمام هو الضلع المجاور مقسوماً على الوتر. وفي ترميز هذه الصفحة:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور هو البسط لأنه الضلع الذي تتم مقارنته؛ والوتر هو المقام لأنه الطول المرجعي."
          },
          {
            "kind": "h3",
            "text": "مثال محلول بالكامل: مثلث 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=4\\text{ cm}]]، [[a=3\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "الخطوة 1: اكتب الصيغة. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 2: عوّض القياسات. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 3: اقسم. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "الخطوة 4: فسّر الجواب. الضلع المجاور يمثل 80 بالمائة من الوتر."
          },
          {
            "kind": "p",
            "text": "الخطوة 5: تحقق من المثلث. [[3^2+4^2=5^2]]، إذن [[9+16=25]]. أطوال الأضلاع متسقة رياضياً."
          },
          {
            "kind": "p",
            "text": "إن أردت الزاوية لا النسبة، فجيب التمام العكسي هو الخطوة التالية: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. وذلك حساب منفصل؛ فأداة هذه الصفحة تعيد النسبة فقط."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "كيفية استخدام حاسبة نسبة جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "الشرح أدناه يطابق الواجهة الفعلية في هذه الصفحة."
          },
          {
            "kind": "p",
            "text": "لا تطلب الحاسبة أبداً زاوية بالدرجات، ولا الضلع المقابل، ولا قيمة للقلب: طولا الضلعين هما الإدخال الكامل."
          }
        ],
        "steps": [
          "<strong>حدد الزاوية المرجعية [[A]].</strong> فالضلع المجاور يُعرَّف بالنسبة إليها.",
          "<strong>حدد الضلع المجاور [[b]].</strong> الضلع القائم الذي يلامس الزاوية [[A]] وليس الوتر.",
          "<strong>حدد الوتر [[c]].</strong> الضلع المقابل للزاوية القائمة، وهو أطول الأضلاع.",
          "<strong>قِس طولي الضلعين أو احصل عليهما</strong> بالوحدة نفسها.",
          "<strong>أدخل طول الضلع المجاور</strong> (القيمة الأصغر) في الحقل الأول.",
          "<strong>أدخل الوتر</strong> (القيمة الأكبر) في الحقل الثاني.",
          "<strong>اختر وحدات متوافقة من منتقي الوحدات</strong> لتكون القسمة ذات معنى.",
          "<strong>تأكد أن القيمتين موجبتان؛</strong> فالأطوال الصفرية أو السالبة لا يمكن أن تكوّن مثلثاً.",
          "<strong>تحقق أن الوتر أطول من الضلع المجاور؛</strong> فإن لم يكن، فالمدخلات متبادلة أو مسماة خطأ.",
          "<strong>انقر احسب cos(A)</strong> لقسمة الضلع المجاور على الوتر.",
          "<strong>اقرأ نسبة جيب التمام:</strong> أي الضلع المجاور كحصة من الوتر.",
          "<strong>تحقق أن الجواب بين 0 و1؛</strong> فأي شيء خارج هذا المدى يشير إلى خطأ في الإدخال.",
          "<strong>استخدم Reset</strong> لمسح المدخلات والبدء من جديد."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "أمثلة خطوة بخطوة لحساب جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "كل مثال يتبع النمط نفسه: اكتب الصيغة، عوّض، اقسم."
          },
          {
            "kind": "h3",
            "text": "المثال 1: مثلث قائم 3-4-5"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=4\\text{ cm}]]، [[a=3\\text{ cm}]]، [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور يمثل 80 بالمائة من الوتر؛ والضلع المقابل يكمل المثلث لكن الصيغة تتجاهله."
          },
          {
            "kind": "h3",
            "text": "المثال 2: مثلث قائم 5-12-13"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=12\\text{ m}]]، [[a=5\\text{ m}]]، [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "الضلع المجاور يمثل حوالي 92.31 بالمائة من الوتر؛ والضلع المقابل البالغ 5 م غير مطلوب."
          },
          {
            "kind": "h3",
            "text": "المثال 3: مثلث 30-60-90"
          },
          {
            "kind": "p",
            "text": "بالنسبة إلى الزاوية [[A=30^\\circ]]، يكون الضلع المجاور [[\\sqrt{3}/2]] ضعف الوتر. مع [[b=\\sqrt{3}\\text{ cm}]] و[[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "هذه القيمة الخاصة للزاوية جديرة بالحفظ؛ فمثلث 30-60-90 يظهر باستمرار في مسائل الهندسة."
          },
          {
            "kind": "h3",
            "text": "المثال 4: مثلث بضلع مجاور 8 ووتر 10"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=8\\text{ m}]] و[[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "النسبة تطابق مثلث 3-4-5 لأن تكبير كل الأضلاع بالعامل نفسه يترك الزوايا والنسب دون تغيير."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "أمثلة واقعية لاستخدام نسبة جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "جيب التمام نسبة رياضية، وليس كمية فيزيائية لها وحدات. وتكمن قيمته العملية في مقارنة الضلع المجاور بالوتر، وحساب الإسقاطات الأفقية، والتحقق من القياسات. وكل مثال يفترض مثلثاً قائماً مبسطاً."
          },
          {
            "kind": "h3",
            "text": "المثال 5: حساب نسبة جيب التمام لسلم"
          },
          {
            "kind": "p",
            "text": "سلم طوله 5 م يقف وقاعدته على بعد 3 م من الجدار؛ والزاوية [[A]] تقع بين السلم والأرض المستوية. المسافة الأرضية هي الضلع المجاور [[b=3\\text{ m}]]، والسلم هو الوتر [[c=5\\text{ m}]]. [[\\cos(A)=3/5]]، إذن [[\\boxed{\\cos(A)=0.6}]]: أي أن المسافة الأرضية تمثل 60 بالمائة من طول السلم. والنسبة وحدها لا تثبت سلامة السلم."
          },
          {
            "kind": "h3",
            "text": "المثال 6: حساب نسبة جيب التمام لعارضة سقف"
          },
          {
            "kind": "p",
            "text": "عارضة سقف تميل بطول 5 م مع امتداد أفقي 4 م: الامتداد هو الضلع المجاور [[b=4\\text{ m}]]، والعارضة هي الوتر [[c=5\\text{ m}]]. [[\\cos(A)=4/5]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن الامتداد يمثل 80 بالمائة من طول الميل. إنها نسبة هندسية، لا تقييم إنشائي."
          },
          {
            "kind": "h3",
            "text": "المثال 7: تقييم نسبة جيب التمام لمنحدر"
          },
          {
            "kind": "p",
            "text": "منحدر يميل بطول 9.5 م مع امتداد أفقي 9 م: [[b=9\\text{ m}]]، [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]]، إذن [[\\boxed{\\cos(A)\\approx0.9474}]]: أي أن الامتداد يمثل حوالي 94.74 بالمائة من طول الميل، كما هو متوقع لمنحدر لطيف. وهو لا يثبت الالتزام بمعايير الوصول."
          },
          {
            "kind": "h3",
            "text": "المثال 8: قياس مساحي"
          },
          {
            "kind": "p",
            "text": "يسجل مثلث مساحي مبسط مسافة مستقيمة 50 م وفصلاً أفقياً 40 م: [[b=40\\text{ m}]]، [[c=50\\text{ m}]]. [[\\cos(A)=40/50]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن المسافة الأفقية تمثل 80 بالمائة من المسافة المستقيمة. وقد تحتاج المساحة الحقيقية تصحيحات لارتفاع الجهاز."
          },
          {
            "kind": "h3",
            "text": "المثال 9: إيجاد نسبة جيب التمام لسلك شد"
          },
          {
            "kind": "p",
            "text": "سلك شد طوله 13 م يثبت على بعد 12 م أفقياً من العمود: [[b=12\\text{ m}]]، [[c=13\\text{ m}]]. [[\\cos(A)=12/13]]، إذن [[\\boxed{\\cos(A)\\approx0.9231}]]: أي أن البُعد يمثل حوالي 92.31 بالمائة من طول السلك. وهو لا يقول شيئاً عن شد السلك أو قوة التثبيت."
          },
          {
            "kind": "h3",
            "text": "المثال 10: حساب نسبة جيب التمام لعارضة درج"
          },
          {
            "kind": "p",
            "text": "عارضة درج مبسطة طولها 5 م مع امتداد أفقي 4 م: [[b=4\\text{ m}]]، [[c=5\\text{ m}]]. [[\\cos(A)=4/5]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن الامتداد يمثل 80 بالمائة من العارضة القطرية. وهو لا يتحقق من الالتزام بقوانين البناء."
          },
          {
            "kind": "h3",
            "text": "المثال 11: فهم الإسقاط الأفقي لذراع رافعة"
          },
          {
            "kind": "p",
            "text": "ذراع رافعة مبسط طوله 10 م مع إسقاط أفقي 6 م: [[b=6\\text{ m}]]، [[c=10\\text{ m}]]. [[\\cos(A)=6/10]]، إذن [[\\boxed{\\cos(A)=0.6}]]: أي أن الإسقاط يمثل 60 بالمائة من طول الذراع. وهو لا يثبت قدرة الرفع."
          },
          {
            "kind": "h3",
            "text": "المثال 12: مقطع طيران مستقيم لطائرة"
          },
          {
            "kind": "p",
            "text": "تقطع طائرة 5 كم على مسار مستقيم، وتغطي 4 كم أفقياً: [[b=4\\text{ km}]]، [[c=5\\text{ km}]]. [[\\cos(A)=4/5]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن الإزاحة الأفقية تمثل 80 بالمائة من طول المسار. نموذج مثالي، لا ملاحة جوية."
          },
          {
            "kind": "h3",
            "text": "المثال 13: حساب نسبة جيب التمام لدعامة قطرية"
          },
          {
            "kind": "p",
            "text": "دعامة قطرية طولها 2 م مع إسقاط أفقي 1.2 م: [[b=1.2\\text{ m}]]، [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]]، إذن [[\\boxed{\\cos(A)=0.6}]]: أي أن الإسقاط يمثل 60 بالمائة من طول الدعامة. وهو لا يحدد قوة الدعامة."
          },
          {
            "kind": "h3",
            "text": "المثال 14: حساب نسبة جيب التمام لممر تنزه"
          },
          {
            "kind": "p",
            "text": "مقطع مستقيم من ممر مشي طوله 100 م مع إزاحة أفقية 80 م: [[b=80\\text{ m}]]، [[c=100\\text{ m}]]. [[\\cos(A)=80/100]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن الإزاحة تمثل 80 بالمائة من طول المسار. الممرات الحقيقية تنحني وتتغير انحداراتها."
          },
          {
            "kind": "h3",
            "text": "المثال 15: دعامة مظلة"
          },
          {
            "kind": "p",
            "text": "دعامة مظلة طولها 3 م مع إسقاط أفقي 2.4 م: [[b=2.4\\text{ m}]]، [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]]، إذن [[\\boxed{\\cos(A)=0.8}]]: أي أن الإسقاط يمثل 80 بالمائة من طول الدعامة. وهو لا يثبت الملاءمة الإنشائية."
          },
          {
            "kind": "h3",
            "text": "المثال 16: كابل بين نقطتين"
          },
          {
            "kind": "p",
            "text": "كابل مستقيم يمتد 25 م بين نقطتين تبعدان 24 م أفقياً: [[b=24\\text{ m}]]، [[c=25\\text{ m}]]. [[\\cos(A)=24/25]]، إذن [[\\boxed{\\cos(A)=0.96}]]: أي أن البُعد يمثل 96 بالمائة من طول الكابل. ويفترض النموذج كابلاً مستقيماً في مثلث قائم."
          },
          {
            "kind": "h3",
            "text": "الأمثلة العملية مقارنة"
          },
          {
            "kind": "p",
            "text": "يبقى النمط ثابتاً في كل ذلك: تكون النسبة كبيرة عندما يشكل الضلع المجاور حصة كبيرة من الوتر، وتكون صغيرة عندما تنفتح الزاوية."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الحالة", "الضلع المجاور b", "الوتر c", "صيغة جيب التمام", "النسبة المحسوبة", "التفسير"],
            "rows": [
              ["سلم", "3 m", "5 m", "3/5", "0.6", "مسافة الأرض تساوي 60% من طول السلم"],
              ["عارضة سقف", "4 m", "5 m", "4/5", "0.8", "الامتداد يساوي 80% من طول العارضة"],
              ["منحدر", "9 m", "9.5 m", "9/9.5", "0.9474", "الامتداد يساوي 94.74% من طول الميل"],
              ["مساحة", "40 m", "50 m", "40/50", "0.8", "الفجوة الأفقية تساوي 80% من الخط"],
              ["سلك شد", "12 m", "13 m", "12/13", "0.9231", "البُعد يساوي 92.31% من السلك"],
              ["عارضة درج", "4 m", "5 m", "4/5", "0.8", "الامتداد يساوي 80% من طول العارضة"],
              ["ذراع رافعة", "6 m", "10 m", "6/10", "0.6", "الإسقاط يساوي 60% من الذراع"],
              ["مقطع طيران", "4 km", "5 km", "4/5", "0.8", "الإزاحة تساوي 80% من المسار"],
              ["دعامة قطرية", "1.2 m", "2 m", "1.2/2", "0.6", "الإسقاط يساوي 60% من الدعامة"],
              ["ممر تنزه", "80 m", "100 m", "80/100", "0.8", "الإزاحة تساوي 80% من المسار"],
              ["دعامة مظلة", "2.4 m", "3 m", "2.4/3", "0.8", "الإسقاط يساوي 80% من الدعامة"],
              ["كابل", "24 m", "25 m", "24/25", "0.96", "البُعد يساوي 96% من الكابل"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "أربع لوحات: نسبة السلم 0.6، وعارضة السقف 0.8، والمساحة 0.8، وذراع الرافعة 0.6، مع مثلث قائم موسوم لكل منها",
            "caption": "أربع حسابات عملية: السلم وعارضة السقف والمساحة وذراع الرافعة، مع مثلثها وصيغتها ونسبتها لكل منها."
          }
        ]
      },
      "cos-angle": {
        "h2": "فهم العلاقة بين جيب التمام وحجم الزاوية",
        "blocks": [
          {
            "kind": "p",
            "text": "يتقلص جيب التمام كلما كبرت الزاوية الحادة. فالزاوية الصغيرة تبقي الضلع المجاور قريباً من طول الوتر، فتقع النسبة قرب 1؛ ومع انفتاح الزاوية [[A]] نحو [[90^\\circ]] يصبح الضلع المجاور حصة أصغر فتهبط النسبة. وتُظهر القيم المرجعية المؤكدة أدناه هذا النمط:"
          },
          {
            "kind": "p",
            "text": "قياسات الجدول توضيحية: فالنسب، لا الأطوال المطلقة، هي التي تحدد الزوايا. وتقترب النسبة من 0 مع اقتراب الزاوية من [[90^\\circ]]، وتقترب من 1 مع اقتراب الزاوية من [[0^\\circ]]، وتبقى بينهما حصراً لكل مثلث صحيح."
          },
          {
            "kind": "p",
            "text": "لا تأخذ الحاسبة أي زاوية كمدخل؛ وهذه القيم المرجعية مرشدة وقيم تحقق عند التحقق من نتيجة."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["الزاوية A", "الضلع المجاور b", "الوتر c", "نسبة جيب التمام"],
            "rows": [
              ["30 درجة", "sqrt(3)", "2", "حوالي 0.8660"],
              ["45 درجة", "1", "sqrt(2)", "حوالي 0.7071"],
              ["60 درجة", "1", "2", "0.5"],
              ["80 درجة", "1", "حوالي 5.7588", "حوالي 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "ثلاثة مثلثات عند 30 و45 و60 درجة بقيم جيب تمام 0.8660 و0.7071 و0.5؛ ينخفض جيب التمام مع نمو الزاوية",
            "caption": "مع نمو الزاوية A يصبح الضلع المجاور حصة أصغر من الوتر، فينخفض cos(A)."
          }
        ]
      },
      "cos-recover": {
        "h2": "إيجاد الأضلاع والزوايا بجيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "صيغة جيب التمام تعاد ترتيبها بسلاسة لاستعادة أي من مقاديرها الثلاثة عندما يكون الآخران معروفين."
          },
          {
            "kind": "h3",
            "text": "كيف تجد الضلع المجاور"
          },
          {
            "kind": "p",
            "text": "ابدأ من [[\\cos(A)=b/c]] واضرب الطرفين في [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "مع [[c=10\\text{ m}]] و[[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]]، وبما أن [[\\cos(60^\\circ)=0.5]]، فإن [[\\boxed{b=5\\text{ m}}]]: أي نصف الوتر لهذه الزاوية."
          },
          {
            "kind": "h3",
            "text": "كيف تجد الوتر"
          },
          {
            "kind": "p",
            "text": "حل المعادلة لإيجاد [[c]] يعطي:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "مع [[b=4\\text{ m}]] و[[A=60^\\circ]]: [[c=4/0.5]]، إذن [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "كيف تجد زاوية من نسبة جيب التمام"
          },
          {
            "kind": "p",
            "text": "نسبة جيب التمام والزاوية مقداران مختلفان. فإن عُرفت النسبة، استعاد جيب التمام العكسي، ويسمى أيضاً قوس جيب التمام، الزاوية:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "مع [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]]، إذن [[\\boxed{A\\approx36.87^\\circ}]]؛ اضبط الآلة الحاسبة العلمية على وضع الدرجات أولاً. وهذه ترتيبات رياضية: فالأداة في هذه الصفحة تعيد النسبة نفسها."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "أخطاء شائعة عند حساب جيب التمام",
        "blocks": [
          {
            "kind": "h3",
            "text": "الخطأ مقابل الصواب"
          },
          {
            "kind": "p",
            "text": "المعطى [[b=4]] و[[c=5]]:"
          },
          {
            "kind": "p",
            "text": "خطأ: [[5/4=1.25]]. هذا مقلوب جيب التمام، ويسمى القاطع، وليس نسبة جيب التمام."
          },
          {
            "kind": "p",
            "text": "صواب: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "جيب التمام الصحيح للزاوية الحادة يقع دائماً بين 0 و1."
          }
        ],
        "steps": [
          "<strong>استخدام الضلع المقابل بدل الضلع المجاور.</strong> يحسب هذا [[a/c]] وهو الجيب. الحل: اختر الضلع القائم الذي يلامس الزاوية [[A]].",
          "<strong>قلب الكسر إلى [[c/b]].</strong> يخرج الجواب فوق 1. الحل: يجب أن يكون الضلع الأطول هو المقام.",
          "<strong>الخلط بين جيب التمام والجيب.</strong> الإبلاغ عن 0.6 لمثلث 3-4-5. الحل: الجيب يستخدم الضلع المقابل؛ وجيب التمام يستخدم الضلع المجاور.",
          "<strong>الخلط بين جيب التمام والقاطع.</strong> حساب [[c/b]]. الحل: القاطع مقلوب جيب التمام، وهو فوق 1 دائماً.",
          "<strong>إدخال ضلع مجاور أطول من الوتر.</strong> تصف المدخلات مثلثاً مستحيلاً. الحل: يجب أن يحمل حقل الوتر القياس الأطول.",
          "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> قسمة على الصفر أو نسبة سالبة لا معنى لها. الحل: استخدم أطوالاً موجبة فقط.",
          "<strong>خلط وحدات القياس.</strong> قسمة السنتيمترات على الأمتار تحرف النسبة بمقدار 100. الحل: حوّل الضلعين إلى وحدة واحدة أولاً.",
          "<strong>الإبلاغ عن جيب التمام كزاوية بالدرجات.</strong> كتابة 0.8 درجة. الحل: النسبة عدد محض، ليست زاوية.",
          "<strong>افتراض أن نسبة جيب التمام لها وحدات.</strong> الوحدات تلاشت أصلاً في القسمة. الحل: أسقط الوحدة من الجواب.",
          "<strong>الخلط بين الزاوية المرجعية والزاوية الحادة الأخرى.</strong> تتبدل تسميتا المجاور والمقابل. الحل: علّم الزاوية [[A]] على الرسم أولاً.",
          "<strong>التقريب مبكراً جداً.</strong> تقريب [[12/13]] إلى 0.92 قبل الضرب العكسي يضيف خطأ يمكن تجنبه. الحل: احتفظ بأرقام إضافية حتى الخطوة الأخيرة.",
          "<strong>افتراض أن جيب التمام واحد لكل مثلث.</strong> تطبيق قيمة واحدة على شكل مختلف. الحل: جيب التمام يعتمد على نسب المثلث.",
          "<strong>الظن أن النسبة تعطي الزاوية بالدرجات مباشرة.</strong> قراءة 0.8 كزاوية. الحل: استخدم جيب التمام العكسي لاستعادة الدرجات.",
          "<strong>قراءة جيب تمام 0.8 على أنه 0.8 درجة.</strong> الخلط بين النسبة والزاوية. الحل: 0.8 هي النسبة؛ والزاوية حوالي 36.87 درجة.",
          "<strong>تسمية ضلع قبل تحديد الزاوية المرجعية.</strong> يختلط المجاور بالمقابل. الحل: ثبّت الزاوية [[A]] قبل تسمية أي ضلع."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "كيف تتحقق من صحة نتيجة جيب التمام",
        "blocks": [
          {
            "kind": "p",
            "text": "المثلث القائم الصحيح غير المنحط يتطلب [[0 \\lt b \\lt c]]، وبالتالي [[0 \\lt b/c \\lt 1]]. ويجب أن يستخدم القياسان وحدات متوافقة، وأن تكون نتيجة جيب التمام أكبر من 0 وأقل من 1. والنتيجة 1 أو أكثر تشير عادة إلى مدخلات معكوسة، أو تسمية ضلع خاطئة، أو قياسات غير متوافقة."
          },
          {
            "kind": "h3",
            "text": "الطريقة 1: تحقق من النسبة"
          },
          {
            "kind": "p",
            "text": "تحقق من [[\\cos(A)=b/c]] مباشرة. مع [[b=4]] و[[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "الطريقة 2: تحقق بنظرية فيثاغورس"
          },
          {
            "kind": "p",
            "text": "إن كان الضلع المقابل معروفاً أو مطلوباً، احسب [[a=\\sqrt{c^2-b^2}]]. ل[[b=4]] و[[c=5]]: [[a=\\sqrt{25-16}=3]]، و[[3^2+4^2=5^2]]. يؤكد هذا أبعاد مثلث 3-4-5 القائم."
          },
          {
            "kind": "h3",
            "text": "الطريقة 3: تحقق بجيب التمام العكسي"
          },
          {
            "kind": "p",
            "text": "إن كانت النسبة 0.8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. ثم تحقق من اتساق الزاوية مع نسبة الأضلاع. وقد تحدث فروق طفيفة بسبب التقريب."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "جيب التمام مقابل الجيب والظل والقاطع",
        "blocks": [
          {
            "kind": "p",
            "text": "كل نسبة تقارن زوجاً مختلفاً من الأضلاع، بالزاوية المرجعية وتسميات الأضلاع نفسها:"
          },
          {
            "kind": "p",
            "text": "القاطع مقلوب جيب التمام: [[\\sec(A)=1/\\cos(A)]]. فإن كانت [[\\cos(A)=0.8]]، فإن [[\\sec(A)=1/0.8=1.25]]. استخدم جيب التمام للضلع المجاور أو الإسقاط الأفقي، والجيب للمركبات الرأسية، والظل عندما لا يدخل الوتر، والقاطع عندما تستدعي الصيغة المقلوب."
          },
          {
            "kind": "p",
            "text": "للنسب المجاورة، راجع <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الجيب</a>، و<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الظل</a>، و<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة القاطع</a>، و<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة قاطع التمام</a>."
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
              ["جيب التمام", "cos(A) = b/c", "الضلع المجاور إلى الوتر"],
              ["الظل", "tan(A) = a/b", "الضلع المقابل إلى الضلع المجاور"],
              ["القاطع", "sec(A) = c/b", "الوتر إلى الضلع المجاور"],
              ["قاطع التمام", "csc(A) = c/a", "الوتر إلى الضلع المقابل"],
              ["ظل التمام", "cot(A) = b/a", "الضلع المجاور إلى الضلع المقابل"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "استكشف حاسبات المثلثات ذات الصلة",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "حاسبة نسبة الجيب",
            "desc": "أوجد نسبة الجيب من الضلع المقابل والوتر."
          },
          {
            "name": "حاسبة نسبة الظل",
            "desc": "أوجد نسبة الظل من الضلع المقابل والضلع المجاور."
          },
          {
            "name": "حاسبة نسبة القاطع",
            "desc": "أوجد نسبة القاطع من الوتر والضلع المجاور."
          },
          {
            "name": "حاسبة نسبة قاطع التمام",
            "desc": "أوجد نسبة قاطع التمام من الوتر والضلع المقابل."
          },
          {
            "name": "حاسبة زوايا المثلث القائم",
            "desc": "أوجد الزوايا الحادة من أطوال الأضلاع المعروفة."
          },
          {
            "name": "حاسبة أضلاع المثلث القائم",
            "desc": "أوجد طول ضلع مجهول بجيب التمام أو نظرية فيثاغورس."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "ما صيغة نسبة جيب التمام للمثلث القائم؟",
        "answer": "cos(A) = b / c: اقسم الضلع المجاور للزاوية A على الوتر. لضلع مجاور طوله 4 سم ووتر طوله 5 سم، تكون النتيجة 4/5 = 0.8."
      },
      {
        "question": "كيف تحسب جيب التمام من طولي ضلعين؟",
        "answer": "قِس الضلع المجاور b والوتر c بالوحدة نفسها، وتأكد أن c أطول من b، ثم احسب cos(A) = b / c. مع b = 12 m وc = 13 m يكون الجواب 12/13، أي حوالي 0.9231."
      },
      {
        "question": "ما الفرق بين جيب التمام والجيب؟",
        "answer": "يقسم جيب التمام الضلع المجاور على الوتر (b/c)؛ ويقسم الجيب الضلع المقابل على الوتر (a/c). وفي مثلث 3-4-5 يكون cos(A) = 0.8 وsin(A) = 0.6."
      },
      {
        "question": "لماذا يكون جيب التمام أقل من 1 للزاوية الحادة في المثلث القائم؟",
        "answer": "الوتر هو أطول الأضلاع، لذا يكون b دائماً أصغر من c. وقسمة عدد موجب أصغر على عدد أكبر تعطي نتيجة دون 1؛ والضلعان موجبان، فتبقى النتيجة فوق 0."
      },
      {
        "question": "هل يمكن أن يتجاوز جيب التمام 1 في مثلث قائم صحيح؟",
        "answer": "لا. فجيب التمام فوق 1 يتطلب ضلعاً مجاوراً أطول من الوتر، وهذا مستحيل في مثلث قائم حقيقي. فإن أظهرت الأداة 1 أو أكثر، فالمدخلات معكوسة، أو الضلع المستخدم خاطئ، أو القياسات غير متوافقة."
      },
      {
        "question": "ماذا تعني قيمة جيب تمام 0.8؟",
        "answer": "الضلع المجاور يساوي 80 بالمائة من طول الوتر: 4 m / 5 m = 0.8. يصف العدد شكل المثلث، لا زاوية؛ والزاوية المطابقة حوالي 36.87 درجة، وتوجد بجيب التمام العكسي."
      },
      {
        "question": "هل لنسبة جيب التمام وحدات؟",
        "answer": "لا. فالضلعان مقيسان بالوحدة نفسها، فتتلاشى الوحدات: 4 m / 5 m = 0.8، و400 cm / 500 cm = 0.8. أبلغ عن جيب التمام كعدد محض بلا أبعاد، ولا ترفق به درجات أو أمتار أو أقدام أبداً."
      },
      {
        "question": "كيف أجد زاوية من نسبة جيب التمام؟",
        "answer": "استخدم جيب التمام العكسي (قوس جيب التمام): A = cos^-1(ratio). فبالنسبة إلى 0.8 يكون A = cos^-1(0.8)، أي حوالي 36.87 درجة. وحاسبة هذه الصفحة تعيد النسبة لا الزاوية، لذا اضبط الآلة الحاسبة على وضع الدرجات أولاً."
      },
      {
        "question": "كيف أجد الضلع المجاور بجيب التمام؟",
        "answer": "أعد ترتيب الصيغة إلى b = c x cos(A). اضرب الوتر في جيب تمام الزاوية. مع c = 10 m والزاوية A = 60 درجة، يكون cos(60 درجة) = 0.5، إذن b = 10 x 0.5 = 5 m."
      },
      {
        "question": "ما الفرق بين جيب التمام والقاطع؟",
        "answer": "القاطع مقلوب جيب التمام: sec(A) = c / b، أو 1 / cos(A). يعطي جيب التمام قيمة دون 1؛ ويقلب القاطع الكسر فيعطي قيمة فوق 1. فإن كان cos(A) = 0.8، فإن sec(A) = 1.25."
      },
      {
        "question": "هل يمكنني حساب جيب التمام دون معرفة الضلع المقابل؟",
        "answer": "نعم. يحتاج جيب التمام إلى الضلع المجاور والوتر فقط؛ ولا دور للضلع المقابل في cos(A) = b/c، ولهذا لا تطلبه هذه الحاسبة أبداً."
      },
      {
        "question": "كيف يُستخدم جيب التمام في القياسات العملية؟",
        "answer": "جيب التمام أداة الإسقاطات الأفقية: المسافة الأرضية من طول سلم، أو الامتداد الأفقي من طول عارضة سقف، أو المركبة الأفقية لقوة. اضرب الوتر في cos(A) لتحصل على الضلع المجاور، أو استخدم النسبة للتحقق من ملاءمة القياسات لمثلث قائم."
      }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة",
    "conclusion": {
      "h2": "أتقن نسبة جيب التمام بثقة",
      "paragraphs": [
        "جيب التمام هو حصة الوتر التي يغطيها الضلع المجاور: اقسم [[b]] على [[c]] لوصف شكل المثلث. تحتاج الصيغة [[\\cos(A)=b/c]] إلى قياسين فقط، والجواب دائماً عدد بلا أبعاد بين 0 و1، والصيغتان المعاد ترتيبهما [[b=c\\cos(A)]] و[[A=\\cos^{-1}(b/c)]] تستعيدان ضلعاً مفقوداً أو الزاوية. سلماً كان أو عارضة سقف أو مثلث 3-4-5 من الكتاب، لا تتغير الطريقة أبداً: حدد الضلع المجاور، وحدد الوتر، واقسم، وتحقق."
      ]
    }
  },
"bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
      "cos-intro": "Какво представлява калкулаторът за отношение на косинуса?",
      "cos-triangle": "Разбиране на прилежащия катет и хипотенузата",
      "cos-whatis": "Разбиране на косинусовото отношение",
      "cos-formula": "Как работи формулата за косинус",
      "cos-howto": "Как се използва калкулаторът за косинусово отношение",
      "cos-examples": "Примери стъпка по стъпка за изчисляване на косинус",
      "cos-applications": "Примери от реалния живот за използване на косинусовото отношение",
      "cos-angle": "Косинус и големината на ъгъла",
      "cos-recover": "Намиране на страни и ъгли чрез косинус",
      "cos-mistakes": "Чести грешки при изчисляване на косинус",
      "cos-verify": "Как да проверите дали резултатът ви за косинус е валиден",
      "cos-vs": "Косинус срещу синус, тангенс и секанс",
      "cos-faq": "Често задавани въпроси",
      "cos-related": "Разгледайте свързаните тригонометрични калкулатори"
    },
    "sections": {
      "cos-intro": {
        "h2": "Какво представлява калкулаторът за отношение на косинуса?",
        "blocks": [
          {
            "kind": "p",
            "text": "Калкулаторът за отношение на косинуса отговаря на един въпрос: за остър ъгъл в правоъгълен триъгълник колко дълъг е прилежащият катет в сравнение с хипотенузата? Въведете двете дължини на страни и инструментът дели прилежащия катет на хипотенузата, връщайки [[\\cos(A)=b/c]]. При прилежащ катет 4 см и хипотенуза 5 см изчислението е [[4/5=0.8]]: прилежащият катет е 80 процента от хипотенузата. Това десетично число е пълният отговор. То не носи мерни единици, тъй като сантиметрите се съкращават при делението, и не е ъгъл в градуси. Срещулежащият катет никога не влиза в това изчисление. От това единствено отношение можете да сравнявате форми, да проверявате измервания, да намирате хоризонтални проекции или да възстановите ъгъла чрез арккосинус."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Разбиране на прилежащия катет и хипотенузата",
        "blocks": [
          {
            "kind": "h3",
            "text": "Какво е правоъгълен триъгълник?"
          },
          {
            "kind": "p",
            "text": "Правоъгълният триъгълник има един ъгъл от точно [[90^\\circ]], ъгъла между две перпендикулярни прави, като стена, срещаща равен под. Хипотенузата лежи срещу този прав ъгъл и винаги е най-дългата страна. Останалите два ъгъла си поделят оставащите 90 градуса, така че и двата са остри. Косинусът сравнява две от тези страни във фиксирано отношение."
          },
          {
            "kind": "h3",
            "text": "Какво е прилежащ катет?"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет [[b]] е катетът, който докосва референтния ъгъл [[A]], без да е хипотенуза. Той често представя хоризонтално разстояние: разстояние до земята от стълба, хоризонтален обхват на покривна греда или проекция на сила. Кой катет се счита за прилежащ зависи от референтния ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[B]] разменя означенията прилежащ и срещулежащ."
          },
          {
            "kind": "h3",
            "text": "Какво е хипотенуза?"
          },
          {
            "kind": "p",
            "text": "Хипотенузата [[c]] е страната срещу правия ъгъл: във всяка диаграма тя е срещу малкия квадрат, отбелязващ ъгъла от [[90^\\circ]], и е най-дългата страна. В реални ситуации тя може да е стълба, греда, рампа, въже или праволинеен път, и винаги е строго по-дълга от прилежащия катет."
          },
          {
            "kind": "h3",
            "text": "Какво е срещулежащ катет?"
          },
          {
            "kind": "p",
            "text": "Срещулежащият катет [[a]] се намира точно срещу ъгъл [[A]] и никога не докосва върха му. Той не играе роля във формулата за косинус, затова калкулаторът никога не го изисква. Дръжте референтния ъгъл изправен: изберете грешния ъгъл и означенията срещулежащ и прилежащ тихо се разменят."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Триъгълник с ъгъл A долу вляво: златист прилежащ катет b, синя хипотенуза c, срещулежащ катет a, cos(A)=b/c",
            "caption": "Ъгъл A е долу вляво; косинусът използва прилежащия катет b и хипотенузата c, а не срещулежащия катет a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Разбиране на косинусовото отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Косинусът сравнява катета до ъгъл [[A]] с цялата наклонена страна:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Тук [[\\cos(A)]] е косинусът на ъгъл [[A]], [[b]] е прилежащият катет, а [[c]] е хипотенузата: делът от хипотенузата, покрит от прилежащия катет."
          },
          {
            "kind": "h3",
            "text": "Разбиране на SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: синус = срещулежащ катет / хипотенуза. CAH: косинус = прилежащ катет / хипотенуза. TOA: тангенс = срещулежащ катет / прилежащ катет. Буквите CAH описват формулата за косинус: първата буква назовава функцията, втората числителя, а третата знаменателя."
          },
          {
            "kind": "h3",
            "text": "Защо косинусът е отношение"
          },
          {
            "kind": "p",
            "text": "Деленето на две дължини съкращава мерните единици: [[4\\text{ m}/5\\text{ m}=0.8]], а също и [[400\\text{ cm}/500\\text{ cm}=0.8]]. Едни и същи физически страни винаги дават едно и също число, в каквато и мерна единица да са измерени, стига и двете да я споделят."
          },
          {
            "kind": "h3",
            "text": "Какво означава стойност на косинуса 0.8?"
          },
          {
            "kind": "p",
            "text": "Това означава, че прилежащият катет е 80 процента от хипотенузата: дълъг катет до ъгъла, хипотенуза само малко по-дълга. То не дава ъгъла директно; за него е нужен арккосинус."
          },
          {
            "kind": "h3",
            "text": "Защо косинусът е по-малък от 1"
          },
          {
            "kind": "p",
            "text": "Хипотенузата е по-дълга от всеки катет, така че [[b \\lt c]] и [[b/c \\lt 1]], а и двете страни са положителни, така че отношението остава над 0. За валиден, неизроден правоъгълен триъгълник косинусът винаги попада строго между 0 и 1; граничните стойности 0 и 1 са предели, а не достижими стойности."
          },
          {
            "kind": "h3",
            "text": "Косинус срещу синус"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] и [[\\sin(A)=a/c]] споделят хипотенузата, но използват различни катети. Изберете косинус, когато прилежащият катет е известен или нужен; изберете синус, когато е срещулежащият. Смесването на двете е най-честата ранна грешка."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Три етапа: означен триъгълник 3-4-5, формула cos(A)=b/c, резултат 4/5=0.8, прилежащият катет е 80 процента",
            "caption": "Три етапа: определете страните, приложете cos(A) = b/c и разделете. Прилежащият катет е 80 процента от хипотенузата."
          }
        ]
      },
      "cos-formula": {
        "h2": "Как работи формулата за косинус",
        "blocks": [
          {
            "kind": "p",
            "text": "Започнете от определението: косинусът е прилежащият катет, делен на хипотенузата. В означенията на тази страница:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет е числителят, защото е катетът, който се сравнява; хипотенузата е знаменателят, защото е референтната дължина."
          },
          {
            "kind": "h3",
            "text": "Напълно решен пример: триъгълник 3-4-5"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Стъпка 1: Напишете формулата. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 2: Заместете измерванията. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 3: Разделете. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Стъпка 4: Тълкувайте отговора. Прилежащият катет е 80 процента от хипотенузата."
          },
          {
            "kind": "p",
            "text": "Стъпка 5: Проверете триъгълника. [[3^2+4^2=5^2]], така че [[9+16=25]]. Дължините на страните са математически съвместими."
          },
          {
            "kind": "p",
            "text": "Ако искате ъгъла, а не отношението, арккосинусът е следващата стъпка: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Това е отделно изчисление; инструментът на тази страница връща само отношението."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Как се използва калкулаторът за косинусово отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Упътването по-долу съответства на действителния интерфейс на тази страница."
          },
          {
            "kind": "p",
            "text": "Калкулаторът никога не иска ъгъл в градуси, срещулежащ катет или стойност за обръщане: две дължини на страни са пълният вход."
          }
        ],
        "steps": [
          "<strong>Определете референтния ъгъл [[A]],</strong> тъй като прилежащият катет се определя спрямо него.",
          "<strong>Намерете прилежащия катет [[b]]:</strong> катетът, който докосва ъгъл [[A]] и не е хипотенуза.",
          "<strong>Намерете хипотенузата [[c]]:</strong> страната срещу правия ъгъл, най-дългата страна.",
          "<strong>Измерете или получете и двете дължини на страни</strong> в една и съща мерна единица.",
          "<strong>Въведете дължината на прилежащия катет</strong> (по-малката стойност) в първото поле.",
          "<strong>Въведете хипотенузата</strong> (по-голямата стойност) във второто поле.",
          "<strong>Изберете съвпадащи мерни единици с избирачите на единици,</strong> за да е смислено делението.",
          "<strong>Потвърдете, че и двете стойности са положителни;</strong> нулеви или отрицателни дължини не могат да образуват триъгълник.",
          "<strong>Проверете дали хипотенузата е по-дълга от прилежащия катет;</strong> ако не е, входовете са разменени или погрешно означени.",
          "<strong>Щракнете Изчислете cos(A),</strong> за да разделите прилежащия катет на хипотенузата.",
          "<strong>Прочетете отношението на косинуса:</strong> прилежащия катет като дял от хипотенузата.",
          "<strong>Проверете дали отговорът е между 0 и 1;</strong> всичко извън този интервал сигнализира за грешка във входа.",
          "<strong>Използвайте Reset,</strong> за да изчистите входовете и да започнете отначало."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "Примери стъпка по стъпка за изчисляване на косинус",
        "blocks": [
          {
            "kind": "p",
            "text": "Всеки пример следва един и същ модел: напишете формулата, заместете, разделете."
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
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет е 80 процента от хипотенузата; срещулежащият катет допълва триъгълника, но формулата го пренебрегва."
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
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Прилежащият катет е около 92.31 процента от хипотенузата; срещулежащият катет от 5 м не е нужен."
          },
          {
            "kind": "h3",
            "text": "Пример 3: Триъгълник 30-60-90"
          },
          {
            "kind": "p",
            "text": "За ъгъл [[A=30^\\circ]] прилежащият катет е [[\\sqrt{3}/2]] пъти хипотенузата. При [[b=\\sqrt{3}\\text{ cm}]] и [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Тази стойност за специален ъгъл си струва да се запомни; триъгълникът 30-60-90 се появява постоянно в геометричните задачи."
          },
          {
            "kind": "h3",
            "text": "Пример 4: Триъгълник с прилежащ катет 8 и хипотенуза 10"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=8\\text{ m}]] и [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Отношението съвпада с това при триъгълника 3-4-5, защото мащабирането на всички страни с един и същ коефициент оставя ъглите и отношенията непроменени."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Примери от реалния живот за използване на косинусовото отношение",
        "blocks": [
          {
            "kind": "p",
            "text": "Косинусът е математическо отношение, а не физическа величина с мерни единици. Практическата му стойност е в сравняването на прилежащия катет с хипотенузата, изчисляването на хоризонтални проекции и проверката на измерванията. Всеки пример предполага опростен правоъгълен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Пример 5: Изчисляване на косинусовото отношение на стълба"
          },
          {
            "kind": "p",
            "text": "Стълба от 5 м стои с основата си на 3 м от стената; ъгъл [[A]] лежи между стълбата и равния терен. Разстоянието до земята е прилежащият катет [[b=3\\text{ m}]], стълбата е хипотенузата [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], така че [[\\boxed{\\cos(A)=0.6}]]: разстоянието до земята е 60 процента от дължината на стълбата. Самото отношение не установява безопасността на стълбата."
          },
          {
            "kind": "h3",
            "text": "Пример 6: Изчисляване на косинусовото отношение на покривна греда"
          },
          {
            "kind": "p",
            "text": "Покривна греда се спуска 5 м с хоризонтален обхват 4 м: обхватът е прилежащият катет [[b=4\\text{ m}]], гредата е хипотенузата [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], така че [[\\boxed{\\cos(A)=0.8}]]: обхватът е 80 процента от наклонената дължина. Геометрично отношение, а не конструктивна оценка."
          },
          {
            "kind": "h3",
            "text": "Пример 7: Оценка на косинусовото отношение на рампа"
          },
          {
            "kind": "p",
            "text": "Рампа се спуска 9.5 м с хоризонтален обхват 9 м: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], така че [[\\boxed{\\cos(A)\\approx0.9474}]]: обхватът е около 94.74 процента от наклонената дължина, както се очаква за полога рампа. То не установява съответствие с изискванията за достъпност."
          },
          {
            "kind": "h3",
            "text": "Пример 8: Геодезично измерване"
          },
          {
            "kind": "p",
            "text": "Опростен геодезичен триъгълник записва праволинейно разстояние 50 м и хоризонтално разстояние 40 м: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], така че [[\\boxed{\\cos(A)=0.8}]]: хоризонталното разстояние е 80 процента от праволинейното разстояние. Реалната геодезия може да изисква корекции за височината на инструмента."
          },
          {
            "kind": "h3",
            "text": "Пример 9: Намиране на косинусовото отношение на обтягащо въже"
          },
          {
            "kind": "p",
            "text": "Обтягащо въже от 13 м е закрепено на 12 м хоризонтално от стълба: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], така че [[\\boxed{\\cos(A)\\approx0.9231}]]: разстоянието е около 92.31 процента от дължината на въжето. То не казва нищо за опъна на въжето или здравината на котвата."
          },
          {
            "kind": "h3",
            "text": "Пример 10: Изчисляване на косинусовото отношение на стълбищна греда"
          },
          {
            "kind": "p",
            "text": "Опростена стълбищна греда е дълга 5 м с хоризонтален обхват 4 м: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], така че [[\\boxed{\\cos(A)=0.8}]]: обхватът е 80 процента от диагоналната греда. То не проверява съответствието със строителните норми."
          },
          {
            "kind": "h3",
            "text": "Пример 11: Разбиране на хоризонталната проекция на стрела на кран"
          },
          {
            "kind": "p",
            "text": "Опростена стрела на кран е дълга 10 м с хоризонтална проекция 6 м: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], така че [[\\boxed{\\cos(A)=0.6}]]: проекцията е 60 процента от дължината на стрелата. То не установява товароподемност."
          },
          {
            "kind": "h3",
            "text": "Пример 12: Праволинеен полетен участък на самолет"
          },
          {
            "kind": "p",
            "text": "Самолет изминава 5 км по прав път, покривайки 4 км хоризонтално: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], така че [[\\boxed{\\cos(A)=0.8}]]: хоризонталното преместване е 80 процента от дължината на пътя. Идеализиран модел, а не полетна навигация."
          },
          {
            "kind": "h3",
            "text": "Пример 13: Изчисляване на косинусовото отношение на диагонална подпора"
          },
          {
            "kind": "p",
            "text": "Диагонална подпора е дълга 2 м с хоризонтална проекция 1.2 м: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], така че [[\\boxed{\\cos(A)=0.6}]]: проекцията е 60 процента от дължината на подпората. То не определя здравината на подпората."
          },
          {
            "kind": "h3",
            "text": "Пример 14: Изчисляване на косинусовото отношение на туристическа пътека"
          },
          {
            "kind": "p",
            "text": "Прав участък от туристическа пътека е дълъг 100 м с хоризонтално преместване 80 м: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], така че [[\\boxed{\\cos(A)=0.8}]]: преместването е 80 процента от дължината на пътя. Реалните пътеки завиват и променят наклона."
          },
          {
            "kind": "h3",
            "text": "Пример 15: Опора на тента"
          },
          {
            "kind": "p",
            "text": "Опора на тента е дълга 3 м с хоризонтална проекция 2.4 м: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], така че [[\\boxed{\\cos(A)=0.8}]]: проекцията е 80 процента от дължината на опората. То не установява конструктивна годност."
          },
          {
            "kind": "h3",
            "text": "Пример 16: Въже между две точки"
          },
          {
            "kind": "p",
            "text": "Право въже обхваща 25 м между точки, отдалечени хоризонтално на 24 м: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], така че [[\\boxed{\\cos(A)=0.96}]]: разстоянието е 96 процента от дължината на въжето. Моделът предполага право въже в правоъгълен триъгълник."
          },
          {
            "kind": "h3",
            "text": "Сравнение на практическите примери"
          },
          {
            "kind": "p",
            "text": "Моделът се запазва навсякъде: отношението е голямо, когато прилежащият катет е голям дял от хипотенузата, и малко, когато ъгълът се отваря."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ситуация", "Прилежащ катет b", "Хипотенуза c", "Формула за косинус", "Изчислено отношение", "Тълкуване"],
            "rows": [
              ["Стълба", "3 m", "5 m", "3/5", "0.6", "Разстоянието до земята е 60% от дължината на стълбата"],
              ["Покривна греда", "4 m", "5 m", "4/5", "0.8", "Обхватът е 80% от дължината на гредата"],
              ["Рампа", "9 m", "9.5 m", "9/9.5", "0.9474", "Обхватът е 94.74% от дължината на наклона"],
              ["Геодезия", "40 m", "50 m", "40/50", "0.8", "Хоризонталната разлика е 80% от линията"],
              ["Обтягащо въже", "12 m", "13 m", "12/13", "0.9231", "Разстоянието е 92.31% от въжето"],
              ["Стълбищна греда", "4 m", "5 m", "4/5", "0.8", "Обхватът е 80% от дължината на гредата"],
              ["Стрела на кран", "6 m", "10 m", "6/10", "0.6", "Проекцията е 60% от стрелата"],
              ["Полетен участък", "4 km", "5 km", "4/5", "0.8", "Преместването е 80% от пътя"],
              ["Диагонална подпора", "1.2 m", "2 m", "1.2/2", "0.6", "Проекцията е 60% от подпората"],
              ["Туристическа пътека", "80 m", "100 m", "80/100", "0.8", "Преместването е 80% от пътя"],
              ["Опора на тента", "2.4 m", "3 m", "2.4/3", "0.8", "Проекцията е 80% от опората"],
              ["Въже", "24 m", "25 m", "24/25", "0.96", "Разстоянието е 96% от въжето"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Четири панела: стълба с отношение 0.6, греда 0.8, геодезия 0.8, стрела на кран 0.6, всеки с означен правоъгълен триъгълник",
            "caption": "Четири практически изчисления: стълба, покривна греда, геодезия и стрела на кран, всяко с триъгълник, формула и отношение."
          }
        ]
      },
      "cos-angle": {
        "h2": "Разбиране на връзката между косинуса и големината на ъгъла",
        "blocks": [
          {
            "kind": "p",
            "text": "Косинусът намалява с нарастването на острия ъгъл. Малкият ъгъл държи прилежащия катет почти колкото хипотенузата, така че отношението е близо до 1; когато ъгъл [[A]] се отваря към [[90^\\circ]], прилежащият катет става по-малък дял и отношението спада. Проверените референтни стойности по-долу показват модела:"
          },
          {
            "kind": "p",
            "text": "Измерванията в таблицата са илюстративни: отношенията, а не абсолютните дължини, определят ъглите. Отношението се приближава до 0, когато ъгълът се приближава до [[90^\\circ]], и до 1, когато ъгълът се приближава до [[0^\\circ]], оставайки строго между тях за всеки валиден триъгълник."
          },
          {
            "kind": "p",
            "text": "Калкулаторът не приема въвеждане на ъгъл; тези референтни стойности служат за ориентация и проверка при проверяване на резултат."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Ъгъл A", "Прилежащ катет b", "Хипотенуза c", "Косинусово отношение"],
            "rows": [
              ["30 градуса", "sqrt(3)", "2", "Приблизително 0.8660"],
              ["45 градуса", "1", "sqrt(2)", "Приблизително 0.7071"],
              ["60 градуса", "1", "2", "0.5"],
              ["80 градуса", "1", "Приблизително 5.7588", "Приблизително 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Три триъгълника при 30, 45, 60 градуса с косинуси 0.8660, 0.7071, 0.5; косинусът пада с нарастването на ъгъла",
            "caption": "Когато ъгъл A нараства, прилежащият катет става по-малък дял от хипотенузата, така че cos(A) намалява."
          }
        ]
      },
      "cos-recover": {
        "h2": "Намиране на страни и ъгли чрез косинус",
        "blocks": [
          {
            "kind": "p",
            "text": "Формулата за косинус се преобразува чисто, за да възстанови всяка от трите си величини, когато другите две са известни."
          },
          {
            "kind": "h3",
            "text": "Как да намерим прилежащия катет"
          },
          {
            "kind": "p",
            "text": "Започнете с [[\\cos(A)=b/c]] и умножете двете страни по [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "При [[c=10\\text{ m}]] и [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], а тъй като [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: половината от хипотенузата за този ъгъл."
          },
          {
            "kind": "h3",
            "text": "Как да намерим хипотенузата"
          },
          {
            "kind": "p",
            "text": "Решаването за [[c]] вместо това дава:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "При [[b=4\\text{ m}]] и [[A=60^\\circ]]: [[c=4/0.5]], така че [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Как да намерим ъгъл от косинусово отношение"
          },
          {
            "kind": "p",
            "text": "Косинусовото отношение и ъгълът са различни величини. Ако отношението е известно, арккосинусът, наричан още обратен косинус, възстановява ъгъла:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "При [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], така че [[\\boxed{A\\approx36.87^\\circ}]]; първо настройте научния калкулатор в режим на градуси. Това са математически преобразувания: инструментът на тази страница връща самото отношение."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Чести грешки при изчисляване на косинус",
        "blocks": [
          {
            "kind": "h3",
            "text": "Грешно срещу правилно"
          },
          {
            "kind": "p",
            "text": "Дадено [[b=4]] и [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Неправилно: [[5/4=1.25]]. Това е реципрочната стойност на косинуса, наречена секанс, и не е косинусовото отношение."
          },
          {
            "kind": "p",
            "text": "Правилно: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Валидният косинус на остър ъгъл винаги е между 0 и 1."
          }
        ],
        "steps": [
          "<strong>Използване на срещулежащия катет вместо прилежащия.</strong> Това изчислява [[a/c]], което е синус. Поправка: изберете катета, който докосва ъгъл [[A]].",
          "<strong>Обръщане на дробта до [[c/b]].</strong> Отговорът надвишава 1. Поправка: по-дългата страна трябва да е знаменателят.",
          "<strong>Смесване на косинуса със синуса.</strong> Съобщаване на 0.6 за триъгълник 3-4-5. Поправка: синусът използва срещулежащия катет; косинусът използва прилежащия.",
          "<strong>Смесване на косинуса със секанса.</strong> Изчисляване на [[c/b]]. Поправка: секансът е реципрочната стойност на косинуса, винаги над 1.",
          "<strong>Въвеждане на прилежащ катет, по-дълъг от хипотенузата.</strong> Входовете описват невъзможен триъгълник. Поправка: полето за хипотенуза трябва да съдържа по-дългото измерване.",
          "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Деление на нула или безсмислено отрицателно отношение. Поправка: използвайте само положителни дължини.",
          "<strong>Смесване на мерни единици.</strong> Сантиметри, делени на метри, изкривяват отношението 100 пъти. Поправка: първо преобразувайте и двете страни в една мерна единица.",
          "<strong>Съобщаване на косинуса като ъгъл в градуси.</strong> Записване на 0.8 градуса. Поправка: отношението е чисто число, а не ъгъл.",
          "<strong>Предполагане, че косинусовото отношение има мерни единици.</strong> Мерните единици вече са се съкратили при делението. Поправка: изпуснете мерната единица от отговора.",
          "<strong>Смесване на референтния ъгъл с другия остър ъгъл.</strong> Означенията прилежащ и срещулежащ се разменят. Поправка: първо отбележете ъгъл [[A]] на диаграмата.",
          "<strong>Твърде ранно закръгляване.</strong> Закръглянето на [[12/13]] до 0.92 преди обратното умножение добавя избежима грешка. Поправка: запазете допълнителни цифри до последната стъпка.",
          "<strong>Предполагане, че косинусът е еднакъв за всеки триъгълник.</strong> Прилагане на една стойност към различна форма. Поправка: косинусът зависи от пропорциите на триъгълника.",
          "<strong>Мислене, че отношението директно дава ъгъла в градуси.</strong> Четене на 0.8 като ъгъл. Поправка: използвайте арккосинус, за да възстановите градусите.",
          "<strong>Четене на косинус 0.8 като 0.8 градуса.</strong> Смесване на отношение с ъгъл. Поправка: 0.8 е отношението; ъгълът е около 36.87 градуса.",
          "<strong>Наименуване на катет преди определяне на референтния ъгъл.</strong> Прилежащият и срещулежащият се смесват. Поправка: фиксирайте ъгъл [[A]], преди да наименувате който и да е катет."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Как да проверите дали резултатът ви за косинус е валиден",
        "blocks": [
          {
            "kind": "p",
            "text": "Валидният, неизроден правоъгълен триъгълник изисква [[0 \\lt b \\lt c]], а следователно [[0 \\lt b/c \\lt 1]]. И двете измервания трябва да използват съвместими мерни единици, а резултатът за косинус трябва да е по-голям от 0 и по-малък от 1. Резултат 1 или повече обикновено показва разменени входове, неправилно определяне на страна или несъвместими измервания."
          },
          {
            "kind": "h3",
            "text": "Метод 1: Проверете отношението"
          },
          {
            "kind": "p",
            "text": "Проверете [[\\cos(A)=b/c]] директно. При [[b=4]] и [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Метод 2: Проверете питагоровата теорема"
          },
          {
            "kind": "p",
            "text": "Ако срещулежащият катет е известен или нужен, изчислете [[a=\\sqrt{c^2-b^2}]]. За [[b=4]] и [[c=5]]: [[a=\\sqrt{25-16}=3]], и [[3^2+4^2=5^2]]. Това потвърждава размерите на правоъгълния триъгълник 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Метод 3: Проверете чрез арккосинус"
          },
          {
            "kind": "p",
            "text": "Ако отношението е 0.8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. След това проверете дали ъгълът и отношението на страните са съвместими. Поради закръгляване могат да възникнат малки разлики."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Косинус срещу синус, тангенс и секанс",
        "blocks": [
          {
            "kind": "p",
            "text": "Всяко отношение сравнява различна двойка страни, използвайки един и същ референтен ъгъл и означения на страни:"
          },
          {
            "kind": "p",
            "text": "Секансът е реципрочната стойност на косинуса: [[\\sec(A)=1/\\cos(A)]]. Ако [[\\cos(A)=0.8]], тогава [[\\sec(A)=1/0.8=1.25]]. Използвайте косинус за прилежащия катет или хоризонтална проекция, синус за вертикални компоненти, тангенс, когато не участва хипотенуза, и секанс, когато формула изисква реципрочната стойност."
          },
          {
            "kind": "p",
            "text": "За съседните отношения вижте <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на синуса</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на тангенса</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на секанса</a> и <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за отношение на косеканса</a>."
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
              ["Косинус", "cos(A) = b/c", "Прилежащ катет към хипотенуза"],
              ["Тангенс", "tan(A) = a/b", "Срещулежащ катет към прилежащ катет"],
              ["Секанс", "sec(A) = c/b", "Хипотенуза към прилежащ катет"],
              ["Косеканс", "csc(A) = c/a", "Хипотенуза към срещулежащ катет"],
              ["Котангенс", "cot(A) = b/a", "Прилежащ катет към срещулежащ катет"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "Разгледайте свързаните тригонометрични калкулатори",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Калкулатор за отношение на синуса",
            "desc": "Намерете отношението на синуса от срещулежащия катет и хипотенузата."
          },
          {
            "name": "Калкулатор за отношение на тангенса",
            "desc": "Намерете отношението на тангенса от срещулежащия и прилежащия катет."
          },
          {
            "name": "Калкулатор за отношение на секанса",
            "desc": "Намерете отношението на секанса от хипотенузата и прилежащия катет."
          },
          {
            "name": "Калкулатор за отношение на косеканса",
            "desc": "Намерете отношението на косеканса от хипотенузата и срещулежащия катет."
          },
          {
            "name": "Калкулатор за ъгли на правоъгълен триъгълник",
            "desc": "Намерете острия ъгъл от известни дължини на страни."
          },
          {
            "name": "Калкулатор за страни на правоъгълен триъгълник",
            "desc": "Намерете дължината на неизвестна страна от ъгли или питагоровата теорема."
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
        "question": "Каква е формулата за косинусово отношение в правоъгълен триъгълник?",
        "answer": "cos(A) = b / c: разделете прилежащия катет на ъгъл A на хипотенузата. При прилежащ катет 4 см и хипотенуза 5 см резултатът е 4/5 = 0.8."
      },
      {
        "question": "Как се изчислява косинус от две дължини на страни?",
        "answer": "Измерете прилежащия катет b и хипотенузата c в една и съща мерна единица, потвърдете, че c е по-дълга от b, след което изчислете cos(A) = b / c. При b = 12 м и c = 13 м отговорът е 12/13, около 0.9231."
      },
      {
        "question": "Каква е разликата между косинус и синус?",
        "answer": "Косинусът дели прилежащия катет на хипотенузата (b/c); синусът дели срещулежащия катет на хипотенузата (a/c). В триъгълник 3-4-5 cos(A) = 0.8 и sin(A) = 0.6."
      },
      {
        "question": "Защо косинусът е по-малък от 1 за остър ъгъл в правоъгълен триъгълник?",
        "answer": "Хипотенузата е най-дългата страна, така че b винаги е по-малко от c. Деленето на по-малко положително число на по-голямо дава резултат под 1; и двете страни са положителни, така че той остава над 0."
      },
      {
        "question": "Може ли косинусът да е по-голям от 1 във валиден правоъгълен триъгълник?",
        "answer": "Не. Косинус над 1 би изисквал прилежащ катет, по-дълъг от хипотенузата, невъзможно в истински правоъгълен триъгълник. Ако инструментът показва 1 или повече, входовете са разменени, използван е грешен катет или измерванията са несъвместими."
      },
      {
        "question": "Какво означава стойност на косинуса 0.8?",
        "answer": "Прилежащият катет е 80 процента от дължината на хипотенузата: 4 м / 5 м = 0.8. Числото описва формата на триъгълника, а не ъгъл; съответният ъгъл е около 36.87 градуса, намерен чрез арккосинус."
      },
      {
        "question": "Има ли косинусовото отношение мерни единици?",
        "answer": "Не. И двете страни се измерват в една и съща мерна единица, така че мерните единици се съкращават: 4 м / 5 м = 0.8, а 400 см / 500 см = 0.8. Съобщавайте косинуса като чисто безразмерно число, никога с градуси, метри или футове."
      },
      {
        "question": "Как се намира ъгъл от косинусово отношение?",
        "answer": "Използвайте арккосинус (обратен косинус): A = cos^-1(отношение). За 0.8, A = cos^-1(0.8), около 36.87 градуса. Калкулаторът на тази страница връща отношението, а не ъгъла, затова първо настройте калкулатора си в режим на градуси."
      },
      {
        "question": "Как се намира прилежащият катет чрез косинуса?",
        "answer": "Преобразувайте формулата до b = c x cos(A). Умножете хипотенузата по косинуса на ъгъла. При c = 10 м и ъгъл A = 60 градуса, cos(60 градуса) = 0.5, така че b = 10 x 0.5 = 5 м."
      },
      {
        "question": "Каква е разликата между косинус и секанс?",
        "answer": "Секансът е реципрочната стойност на косинуса: sec(A) = c / b, или 1 / cos(A). Косинусът дава стойност под 1; секансът обръща дробта, давайки стойност над 1. Ако cos(A) = 0.8, sec(A) = 1.25."
      },
      {
        "question": "Може ли да се изчисли косинус, без да се знае срещулежащият катет?",
        "answer": "Да. Косинусът се нуждае само от прилежащия катет и хипотенузата; срещулежащият катет не играе роля в cos(A) = b/c, затова този калкулатор никога не го иска."
      },
      {
        "question": "Как може косинусът да се използва в практически измервания?",
        "answer": "Косинусът е инструментът за хоризонтални проекции: разстояние до земята от дължина на стълба, хоризонтален обхват от дължина на греда или хоризонтален компонент на сила. Умножете хипотенузата по cos(A), за да получите прилежащия катет, или използвайте отношението, за да проверите дали измерванията отговарят на правоъгълен триъгълник."
      }
    ],
    "conclusion": {
      "h2": "Овладейте косинусовото отношение с увереност",
      "paragraphs": [
        "Косинусът е делът от хипотенузата, покрит от прилежащия катет: разделете [[b]] на [[c]], за да опишете формата на триъгълника. Формулата [[\\cos(A)=b/c]] се нуждае само от две измервания, отговорът винаги е безразмерно число между 0 и 1, а преобразуваните форми [[b=c\\cos(A)]] и [[A=\\cos^{-1}(b/c)]] възстановяват липсваща страна или ъгъла. Стълба, греда или учебникарски 3-4-5, методът никога не се променя: определете прилежащия катет, определете хипотенузата, разделете и проверете."
      ]
    }
  },
"tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
      "cos-intro": "Kosinüs Oranı Hesaplayıcısı Nedir?",
      "cos-triangle": "Komşu Kenar ve Hipotenüsü Anlama",
      "cos-whatis": "Kosinüs Oranını Anlama",
      "cos-formula": "Kosinüs Formülü Nasıl Çalışır",
      "cos-howto": "Kosinüs Oranı Hesaplayıcısı Nasıl Kullanılır",
      "cos-examples": "Kosinüs Hesaplamada Adım Adım Örnekler",
      "cos-applications": "Kosinüs Oranının Gerçek Hayattan Örnekleri",
      "cos-angle": "Kosinüs ve Açı Büyüklüğü",
      "cos-recover": "Kosinüs ile Kenar ve Açı Bulma",
      "cos-mistakes": "Kosinüs Hesaplarken Yapılan Yaygın Hatalar",
      "cos-verify": "Kosinüs Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
      "cos-vs": "Kosinüs, Sinüs, Tanjant ve Sekant",
      "cos-related": "İlgili Hesaplayıcılar",
      "cos-faq": "SSS"
    },
    "sections": {
      "cos-intro": {
        "h2": "Kosinüs Oranı Hesaplayıcısı Nedir?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinüs oranı hesaplayıcısı tek bir soruya cevap verir: bir dik üçgende dar açı için komşu kenar, hipotenüse kıyasla ne kadar uzundur? İki kenar uzunluğunu girin; araç komşu kenarı hipotenüse böler ve [[\\cos(A)=b/c]] sonucunu verir. 4 cm komşu kenar ve 5 cm hipotenüs için hesaplama [[4/5=0.8]] olur: komşu kenar hipotenüsün yüzde 80'idir. Bu ondalık sayı tam cevaptır. Bölmede santimetreler sadeleştiği için birim taşımaz ve derece cinsinden bir açı değildir. Karşı kenar bu hesaba hiç girmez. Bu tek orandan şekilleri karşılaştırabilir, ölçümleri kontrol edebilir, yatay izdüşümleri bulabilir veya ters kosinüsle açıyı elde edebilirsiniz."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Komşu Kenar ve Hipotenüsü Anlama",
        "blocks": [
          {
            "kind": "h3",
            "text": "Dik Üçgen Nedir?"
          },
          {
            "kind": "p",
            "text": "Bir dik üçgenin bir açısı tam olarak [[90^\\circ]] olur; bu, iki dik doğrunun arasındaki açıdır, tıpkı düz bir zeminle buluşan bir duvar gibi. Hipotenüs bu dik açının karşısında yer alır ve her zaman en uzun kenardır. Kalan iki açı geri kalan 90 dereceyi paylaşır, bu yüzden ikisi de dar açıdır. Kosinüs bu kenarlardan ikisini sabit bir ilişkide karşılaştırır."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Komşu kenar [[b]], hipotenüs olmadan referans açı [[A]]'ya değen dik kenardır. Çoğu zaman yatay bir koşuyu temsil eder: bir merdivenden yere olan mesafe, bir kirişin yatay açıklığı veya bir kuvvetin izdüşümü. Hangi dik kenarın komşu sayılacağı referans açıya bağlıdır; bu yüzden [[A]] açısından [[B]] açısına geçmek komşu ve karşı etiketleri değiştirir."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nedir?"
          },
          {
            "kind": "p",
            "text": "Hipotenüs [[c]], dik açının karşısındaki kenardır: her diyagramda [[90^\\circ]] köşesini işaretleyen küçük kareye bakar ve en uzun kenardır. Gerçek durumlarda bir merdiven, bir kiriş, bir rampa, bir kablo veya doğrusal bir yol olabilir ve her zaman komşu kenardan kesinlikle daha uzundur."
          },
          {
            "kind": "h3",
            "text": "Karşı Kenar Nedir?"
          },
          {
            "kind": "p",
            "text": "Karşı kenar [[a]], [[A]] açısının tam karşısında yer alır ve onun köşesine hiç değmez. Kosinüs formülünde rol oynamaz; bu yüzden hesaplayıcı onu asla istemez. Referans açıyı doğru belirleyin: yanlış açıyı seçerseniz karşı ve komşu etiketler sessizce yer değiştirir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Sol altta A açısı olan dik üçgen, altın komşu kenar b, mavi hipotenüs c, nötr karşı kenar a, cos(A)=b/c",
            "caption": "A açısı sol altta yer alır; kosinüs komşu kenar b ile hipotenüs c'yi kullanır, karşı kenar a'yı değil."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Kosinüs Oranını Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinüs, [[A]] açısının yanındaki dik kenarı bütün eğik kenarla karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Burada [[\\cos(A)]], [[A]] açısının kosinüsüdür; [[b]] komşu kenardır ve [[c]] hipotenüstür: komşu kenarın kapladığı hipotenüs payı."
          },
          {
            "kind": "h3",
            "text": "SOH-CAH-TOA'yı Anlama"
          },
          {
            "kind": "p",
            "text": "SOH: Sinüs = Karşı / Hipotenüs. CAH: Kosinüs = Komşu / Hipotenüs. TOA: Tanjant = Karşı / Komşu. CAH harfleri kosinüs formülünü açıkça yazar: ilk harf fonksiyonun adını, ikinci harf payı, üçüncü harf paydayı belirtir."
          },
          {
            "kind": "h3",
            "text": "Kosinüs Neden Bir Orandır"
          },
          {
            "kind": "p",
            "text": "İki uzunluğu bölmek birimleri sadeleştirir: [[4\\text{ m}/5\\text{ m}=0.8]] ve ayrıca [[400\\text{ cm}/500\\text{ cm}=0.8]]. Aynı fiziksel kenarlar, ikisi de aynı birimi paylaştığı sürece hangi birimle ölçüldüğünden bağımsız olarak her zaman aynı sayıyı verir."
          },
          {
            "kind": "h3",
            "text": "0.8 Kosinüs Değeri Ne Anlama Gelir?"
          },
          {
            "kind": "p",
            "text": "Bu, komşu kenarın hipotenüsün yüzde 80'i olduğu anlamına gelir: açının yanında uzun bir dik kenar ve ondan yalnızca biraz uzun bir hipotenüs. Açıyı doğrudan vermez; bunun için ters kosinüs gerekir."
          },
          {
            "kind": "h3",
            "text": "Kosinüs Neden 1'den Küçüktür"
          },
          {
            "kind": "p",
            "text": "Hipotenüs her iki dik kenardan da uzundur, bu yüzden [[b \\lt c]] ve [[b/c \\lt 1]] olur; ayrıca iki kenar da pozitiftir, bu yüzden oran 0'ın üstünde kalır. Geçerli, çökmemiş bir dik üçgende kosinüs her zaman kesinlikle 0 ile 1 arasında kalır; 0 ve 1 sınır değerleri ulaşılabilen değerler değil, limitlerdir."
          },
          {
            "kind": "h3",
            "text": "Kosinüs ve Sinüs"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] ve [[\\sin(A)=a/c]] aynı hipotenüsü paylaşır ama farklı dik kenar kullanır. Komşu kenar biliniyor veya gerekiyorsa kosinüsü seçin; karşı kenar ise sinüsü seçin. İkisini karıştırmak en yaygın ilk hatadır."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Üç aşama: etiketli 3-4-5 üçgeni, kosinüs formülü cos(A)=b/c, sonuç 4/5=0.8, komşu kenar yüzde 80'dir",
            "caption": "Üç aşama: kenarları belirleyin, cos(A) = b/c formülünü uygulayın ve bölün. Komşu kenar hipotenüsün yüzde 80'idir."
          }
        ]
      },
      "cos-formula": {
        "h2": "Kosinüs Formülü Nasıl Çalışır",
        "blocks": [
          {
            "kind": "p",
            "text": "Tanımdan başlayın: kosinüs, komşu kenarın hipotenüse bölümüdür. Bu sayfanın gösteriminde:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Komşu kenar paydır çünkü karşılaştırılan dik kenardır; hipotenüs paydadır çünkü referans uzunluktur."
          },
          {
            "kind": "h3",
            "text": "Tam Çözümlü Örnek: Bir 3-4-5 Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Adım 1: Formülü yazın. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Adım 2: Ölçümleri yerine koyun. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Adım 3: Bölün. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Adım 4: Cevabı yorumlayın. Komşu kenar hipotenüsün yüzde 80'idir."
          },
          {
            "kind": "p",
            "text": "Adım 5: Üçgeni doğrulayın. [[3^2+4^2=5^2]], yani [[9+16=25]]. Kenar uzunlukları matematiksel olarak tutarlıdır."
          },
          {
            "kind": "p",
            "text": "Oran yerine açıyı istiyorsanız, ters kosinüs bir sonraki adımdır: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Bu ayrı bir hesaplamadır; bu sayfadaki araç yalnızca oranı verir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Kosinüs Oranı Hesaplayıcısı Nasıl Kullanılır",
        "blocks": [
          {
            "kind": "p",
            "text": "Aşağıdaki açıklama bu sayfadaki gerçek arayüzle birebir eşleşir."
          },
          {
            "kind": "p",
            "text": "Hesaplayıcı asla derece cinsinden açı, karşı kenar veya ters alınacak bir değer istemez: iki kenar uzunluğu tüm girdiyi oluşturur."
          }
        ],
        "steps": [
          "<strong>Referans açı [[A]] belirleyin,</strong> çünkü komşu kenar ona göre tanımlanır.",
          "<strong>Komşu kenar [[b]] bulun:</strong> hipotenüs olmayan, [[A]] açısına değen dik kenar.",
          "<strong>Hipotenüs [[c]] bulun:</strong> dik açının karşısındaki kenar, en uzun kenar.",
          "<strong>İki kenar uzunluğunu ölçün veya edinin:</strong> aynı birimle.",
          "<strong>Komşu kenar uzunluğunu girin</strong> (küçük değer) ilk alana.",
          "<strong>Hipotenüsü girin</strong> (büyük değer) ikinci alana.",
          "<strong>Birim seçicilerle eşleşen birimler seçin</strong>, böylece bölme anlamlı olur.",
          "<strong>İki değerin de pozitif olduğunu onaylayın;</strong> sıfır veya negatif uzunluklar üçgen oluşturamaz.",
          "<strong>Hipotenüsün komşu kenardan uzun olduğunu kontrol edin;</strong> değilse girdiler yer değiştirmiş veya yanlış etiketlenmiştir.",
          "<strong>Hesapla cos(A) düğmesine tıklayın</strong> ve komşu kenarı hipotenüse bölün.",
          "<strong>Kosinüs oranını okuyun:</strong> komşu kenarın hipotenüsteki payı.",
          "<strong>Cevabın 0 ile 1 arasında olduğunu doğrulayın;</strong> bu aralığın dışındaki her şey girdi hatasına işarettir.",
          "<strong>Girdileri temizlemek için Reset kullanın</strong> ve baştan başlayın."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "Kosinüs Hesaplamada Adım Adım Örnekler",
        "blocks": [
          {
            "kind": "p",
            "text": "Her örnek aynı düzeni izler: formülü yazın, yerine koyun, bölün."
          },
          {
            "kind": "h3",
            "text": "Örnek 1: Bir 3-4-5 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Komşu kenar hipotenüsün yüzde 80'idir; karşı kenar üçgeni tamamlar ama formül onu yok sayar."
          },
          {
            "kind": "h3",
            "text": "Örnek 2: Bir 5-12-13 Dik Üçgeni"
          },
          {
            "kind": "p",
            "text": "Verilenler [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Komşu kenar hipotenüsün yaklaşık yüzde 92.31'idir; 5 m'lik karşı kenara gerek yoktur."
          },
          {
            "kind": "h3",
            "text": "Örnek 3: Bir 30-60-90 Üçgeni"
          },
          {
            "kind": "p",
            "text": "[[A=30^\\circ]] açısı için komşu kenar hipotenüsün [[\\sqrt{3}/2]] katıdır. [[b=\\sqrt{3}\\text{ cm}]] ve [[c=2\\text{ cm}]] ile:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Bu özel açı değeri ezberlemeye değer; 30-60-90 üçgeni geometri problemlerinde sürekli karşınıza çıkar."
          },
          {
            "kind": "h3",
            "text": "Örnek 4: Komşu Kenarı 8 ve Hipotenüsü 10 Olan Bir Üçgen"
          },
          {
            "kind": "p",
            "text": "Verilenler [[b=8\\text{ m}]] ve [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Oran 3-4-5 üçgeniyle eşleşir, çünkü tüm kenarları aynı çarpanla büyütmek açı ve oranları değiştirmez."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Kosinüs Oranının Gerçek Hayattan Örnekleri",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinüs birim taşıyan fiziksel bir nicelik değil, matematiksel bir orandır. Pratik değeri, komşu kenarı hipotenüsle karşılaştırmakta, yatay izdüşümleri hesaplamakta ve ölçümleri doğrulamakta yatar. Her örnek basitleştirilmiş bir dik üçgen varsayar."
          },
          {
            "kind": "h3",
            "text": "Örnek 5: Bir Merdivenin Kosinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "5 m'lik bir merdiven tabanı duvardan 3 m uzakta durur; [[A]] açısı merdiven ile düz zemin arasında kalır. Zemin mesafesi komşu kenardır [[b=3\\text{ m}]], merdiven hipotenüstür [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], yani [[\\boxed{\\cos(A)=0.6}]]: zemin mesafesi merdiven uzunluğunun yüzde 60'ıdır. Tek başına oran merdiven güvenliğini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 6: Bir Çatı Kirişinin Kosinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Bir çatı kirişi 5 m eğimle 4 m yatay koşuya sahiptir: koşu komşu kenardır [[b=4\\text{ m}]], kiriş hipotenüstür [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], yani [[\\boxed{\\cos(A)=0.8}]]: koşu eğik uzunluğun yüzde 80'idir. Bu geometrik bir orandır, yapısal bir değerlendirme değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 7: Bir Rampanın Kosinüs Oranını Değerlendirme"
          },
          {
            "kind": "p",
            "text": "Bir rampa 9.5 m eğimle 9 m yatay koşuya sahiptir: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], yani [[\\boxed{\\cos(A)\\approx0.9474}]]: koşu eğik uzunluğun yaklaşık yüzde 94.74'üdür, yumuşak bir eğim için beklendiği gibi. Erişilebilirlik uygunluğunu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 8: Bir Arazi Ölçümü"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir arazi ölçüm üçgeni 50 m doğrusal mesafe ve 40 m yatay ayrım kaydeder: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], yani [[\\boxed{\\cos(A)=0.8}]]: yatay mesafe doğrusal mesafenin yüzde 80'idir. Gerçek arazi ölçümleri alet yüksekliği düzeltmeleri gerektirebilir."
          },
          {
            "kind": "h3",
            "text": "Örnek 9: Bir Germe Telinin Kosinüs Oranını Bulma"
          },
          {
            "kind": "p",
            "text": "13 m'lik bir germe teli direkten 12 m yatay uzaklıkta ankrajlanır: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], yani [[\\boxed{\\cos(A)\\approx0.9231}]]: ayrım tel uzunluğunun yaklaşık yüzde 92.31'idir. Tel gerilimi veya ankraj dayanımı hakkında bir şey söylemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 10: Bir Merdiven Kirişinin Kosinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir merdiven kirişi 4 m yatay koşuyla 5 m uzunluğundadır: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], yani [[\\boxed{\\cos(A)=0.8}]]: koşu çapraz kirişin yüzde 80'idir. Yapı yönetmeliğine uygunluğu doğrulamaz."
          },
          {
            "kind": "h3",
            "text": "Örnek 11: Bir Vinç Kolunun Yatay İzdüşümünü Anlama"
          },
          {
            "kind": "p",
            "text": "Basitleştirilmiş bir vinç kolu 6 m yatay izdüşümle 10 m uzunluğundadır: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], yani [[\\boxed{\\cos(A)=0.6}]]: izdüşüm kol uzunluğunun yüzde 60'ıdır. Kaldırma kapasitesini belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 12: Doğrusal Bir Uçak Uçuş Bölümü"
          },
          {
            "kind": "p",
            "text": "Bir uçak düz bir yol boyunca 5 km seyahat eder ve yatayda 4 km yol alır: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], yani [[\\boxed{\\cos(A)=0.8}]]: yatay yer değiştirme yol uzunluğunun yüzde 80'idir. İdealleştirilmiş bir modeldir, uçuş seyrüseferi değildir."
          },
          {
            "kind": "h3",
            "text": "Örnek 13: Bir Çapraz Desteğin Kosinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Çapraz bir destek 1.2 m yatay izdüşümle 2 m uzunluğundadır: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], yani [[\\boxed{\\cos(A)=0.6}]]: izdüşüm destek uzunluğunun yüzde 60'ıdır. Desteğin dayanımını belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 14: Bir Yürüyüş Parkurunun Kosinüs Oranını Hesaplama"
          },
          {
            "kind": "p",
            "text": "Düz bir yürüyüş bölümü 80 m yatay yer değiştirmeyle 100 m uzunluğundadır: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], yani [[\\boxed{\\cos(A)=0.8}]]: yer değiştirme yol uzunluğunun yüzde 80'idir. Gerçek parkurlar kıvrılır ve eğim değiştirir."
          },
          {
            "kind": "h3",
            "text": "Örnek 15: Bir Tente Desteği"
          },
          {
            "kind": "p",
            "text": "Bir tente desteği 2.4 m yatay izdüşümle 3 m uzunluğundadır: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], yani [[\\boxed{\\cos(A)=0.8}]]: izdüşüm destek uzunluğunun yüzde 80'idir. Yapısal uygunluğu belirlemez."
          },
          {
            "kind": "h3",
            "text": "Örnek 16: İki Nokta Arasında Bir Kablo"
          },
          {
            "kind": "p",
            "text": "Düz bir kablo yatayda 24 m aralıkla iki nokta arasında 25 m uzanır: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], yani [[\\boxed{\\cos(A)=0.96}]]: ayrım kablo uzunluğunun yüzde 96'sıdır. Model, dik üçgende düz bir kablo varsayar."
          },
          {
            "kind": "h3",
            "text": "Pratik Örneklerin Karşılaştırılması"
          },
          {
            "kind": "p",
            "text": "Bu düzen baştan sona geçerlidir: komşu kenar hipotenüsün büyük bir payı olduğunda oran büyük, açı açıldıkça oran küçük olur."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Durum", "Komşu kenar b", "Hipotenüs c", "Kosinüs formülü", "Hesaplanan oran", "Yorum"],
            "rows": [
              ["Merdiven", "3 m", "5 m", "3/5", "0.6", "Zemin mesafesi merdiven uzunluğunun 60%'idir"],
              ["Çatı kirişi", "4 m", "5 m", "4/5", "0.8", "Koşu kiriş uzunluğunun 80%'idir"],
              ["Rampa", "9 m", "9.5 m", "9/9.5", "0.9474", "Koşu eğim uzunluğunun 94.74%'üdür"],
              ["Arazi ölçümü", "40 m", "50 m", "40/50", "0.8", "Yatay mesafe doğrusal mesafenin 80%'idir"],
              ["Germe teli", "12 m", "13 m", "12/13", "0.9231", "Ayrım tel uzunluğunun 92.31%'idir"],
              ["Merdiven kirişi", "4 m", "5 m", "4/5", "0.8", "Koşu kiriş uzunluğunun 80%'idir"],
              ["Vinç kolu", "6 m", "10 m", "6/10", "0.6", "İzdüşüm kol uzunluğunun 60%'ıdır"],
              ["Uçuş bölümü", "4 km", "5 km", "4/5", "0.8", "Yer değiştirme yol uzunluğunun 80%'idir"],
              ["Çapraz destek", "1.2 m", "2 m", "1.2/2", "0.6", "İzdüşüm destek uzunluğunun 60%'ıdır"],
              ["Yürüyüş parkuru", "80 m", "100 m", "80/100", "0.8", "Yer değiştirme yol uzunluğunun 80%'idir"],
              ["Tente desteği", "2.4 m", "3 m", "2.4/3", "0.8", "İzdüşüm destek uzunluğunun 80%'idir"],
              ["Kablo", "24 m", "25 m", "24/25", "0.96", "Ayrım kablo uzunluğunun 96%'sıdır"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Dört panel: merdiven oranı 0.6, kiriş 0.8, arazi ölçümü 0.8, vinç kolu 0.6, her biri etiketli dik üçgenle",
            "caption": "Dört pratik hesaplama: merdiven, çatı kirişi, arazi ölçümü ve vinç kolu; her biri üçgeni, formülü ve oranıyla."
          }
        ]
      },
      "cos-angle": {
        "h2": "Kosinüs ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinüs, dar açı büyüdükçe küçülür. Küçük bir açı komşu kenarı hipotenüse neredeyse eşit tutar, bu yüzden oran 1'e yakın olur; [[A]] açısı [[90^\\circ]]'ye doğru açıldıkça komşu kenar daha küçük bir paya dönüşür ve oran düşer. Aşağıdaki doğrulanmış referans değerler düzeni gösterir:"
          },
          {
            "kind": "p",
            "text": "Tablodaki ölçümler açıklayıcıdır: açıları mutlak uzunluklar değil, oranlar belirler. Açı [[90^\\circ]]'ye yaklaştıkça oran 0'a, [[0^\\circ]]'ye yaklaştıkça 1'e yaklaşır ve her geçerli üçgen için kesinlikle arada kalır."
          },
          {
            "kind": "p",
            "text": "Hesaplayıcı açı girdisi almaz; bu referans değerler sonuç doğrularken yön ve kontrol değeri olarak kullanılır."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["A Açısı", "Komşu kenar b", "Hipotenüs c", "Kosinüs oranı"],
            "rows": [
              ["30 derece", "sqrt(3)", "2", "Yaklaşık 0.8660"],
              ["45 derece", "1", "sqrt(2)", "Yaklaşık 0.7071"],
              ["60 derece", "1", "2", "0.5"],
              ["80 derece", "1", "Yaklaşık 5.7588", "Yaklaşık 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30, 45, 60 derecelik üç üçgen, kosinüs değerleri 0.8660, 0.7071, 0.5; açı büyüdükçe kosinüs düşer",
            "caption": "A açısı büyüdükçe komşu kenar hipotenüsün daha küçük bir payı olur, bu yüzden cos(A) düşer."
          }
        ]
      },
      "cos-recover": {
        "h2": "Kosinüs ile Kenar ve Açı Bulma",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinüs formülü, diğer ikisi bilindiğinde üç nicelikten herhangi birini elde edecek şekilde düzgünce yeniden düzenlenir."
          },
          {
            "kind": "h3",
            "text": "Komşu Kenar Nasıl Bulunur"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] formülüyle başlayın ve iki tarafı da [[c]] ile çarpın:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "[[c=10\\text{ m}]] ve [[A=60^\\circ]] ile: [[b=10\\cos(60^\\circ)]] ve [[\\cos(60^\\circ)=0.5]] olduğundan, [[\\boxed{b=5\\text{ m}}]]: bu açı için hipotenüsün yarısı."
          },
          {
            "kind": "h3",
            "text": "Hipotenüs Nasıl Bulunur"
          },
          {
            "kind": "p",
            "text": "Bunun yerine [[c]] için çözmek şunu verir:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "[[b=4\\text{ m}]] ve [[A=60^\\circ]] ile: [[c=4/0.5]], yani [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Bir Kosinüs Oranından Açı Nasıl Bulunur"
          },
          {
            "kind": "p",
            "text": "Kosinüs oranı ile açı farklı niceliklerdir. Oran biliniyorsa, ters kosinüs (arkkosinüs de denir) açıyı geri verir:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=0.8]] ile: [[A=\\cos^{-1}(0.8)]], yani [[\\boxed{A\\approx36.87^\\circ}]]; önce bilimsel hesap makinesini derece moduna alın. Bunlar matematiksel yeniden düzenlemelerdir: bu sayfadaki araç oranın kendisini verir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Kosinüs Hesaplarken Yapılan Yaygın Hatalar",
        "blocks": [
          {
            "kind": "h3",
            "text": "Yanlış ve Doğru"
          },
          {
            "kind": "p",
            "text": "Verilen [[b=4]] ve [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Yanlış: [[5/4=1.25]]. Bu kosinüsün tersidir, sekant denir ve kosinüs oranı değildir."
          },
          {
            "kind": "p",
            "text": "Doğru: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Dar açının geçerli bir kosinüsü her zaman 0 ile 1 arasında yer alır."
          }
        ],
        "steps": [
          "<strong>Komşu kenar yerine karşı kenarı kullanmak.</strong> Bu, [[a/c]] hesaplar ki bu sinüstür. Düzeltme: [[A]] açısına değen dik kenarı seçin.",
          "<strong>Kesri [[c/b]] olarak ters çevirmek.</strong> Cevap 1'i aşar. Düzeltme: uzun kenar payda olmalıdır.",
          "<strong>Kosinüsü sinüsle karıştırmak.</strong> Bir 3-4-5 üçgeni için 0.6 bildirmek. Düzeltme: sinüs karşı kenarı kullanır; kosinüs komşu kenarı kullanır.",
          "<strong>Kosinüsü sekantla karıştırmak.</strong> [[c/b]] hesaplamak. Düzeltme: sekant kosinüsün tersidir, her zaman 1'in üstündedir.",
          "<strong>Hipotenüsten uzun komşu kenar girmek.</strong> Girdiler imkansız bir üçgen tanımlar. Düzeltme: hipotenüs alanında daha uzun ölçüm olmalıdır.",
          "<strong>Sıfır veya negatif kenar uzunlukları girmek.</strong> Sıfıra bölme veya anlamsız negatif oran. Düzeltme: yalnızca pozitif uzunluklar kullanın.",
          "<strong>Ölçü birimlerini karıştırmak.</strong> Santimetrenin metreye bölünmesi oranı 100 kat bozar. Düzeltme: önce iki kenarı da tek birime çevirin.",
          "<strong>Kosinüsü derece cinsinden açı olarak bildirmek.</strong> 0.8 derece yazmak. Düzeltme: oran saf bir sayıdır, açı değildir.",
          "<strong>Kosinüs oranının birimi olduğunu varsaymak.</strong> Birimler bölmede zaten sadeleşti. Düzeltme: cevapta birimi atın.",
          "<strong>Referans açıyı diğer dar açıyla karıştırmak.</strong> Komşu ve karşı etiketler yer değiştirir. Düzeltme: önce diyagramda [[A]] açısını işaretleyin.",
          "<strong>Çok erken yuvarlamak.</strong> Geri çarpmadan önce [[12/13]] değerini 0.92'ye yuvarlamak kaçınılabilir hata ekler. Düzeltme: son adıma kadar fazladan basamak tutun.",
          "<strong>Kosinüsün her üçgende aynı olduğunu varsaymak.</strong> Bir değeri farklı bir şekle uygulamak. Düzeltme: kosinüs üçgenin oranlarına bağlıdır.",
          "<strong>Oranın doğrudan derece cinsinden açıyı verdiğini düşünmek.</strong> 0.8'i açı olarak okumak. Düzeltme: dereceyi elde etmek için ters kosinüs kullanın.",
          "<strong>0.8 kosinüsünü 0.8 derece olarak okumak.</strong> Oranı açıyla karıştırmak. Düzeltme: 0.8 orandır; açı yaklaşık 36.87 derecedir.",
          "<strong>Referans açıyı belirlemeden bir dik kenarı adlandırmak.</strong> Komşu ve karşı karışır. Düzeltme: herhangi bir kenarı adlandırmadan önce [[A]] açısını sabitleyin."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Kosinüs Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "blocks": [
          {
            "kind": "p",
            "text": "Geçerli, çökmemiş bir dik üçgen [[0 \\lt b \\lt c]] gerektirir ve bu yüzden [[0 \\lt b/c \\lt 1]]. İki ölçüm de uyumlu birimler kullanmalı ve kosinüs sonucu 0'dan büyük, 1'den küçük olmalıdır. 1 veya daha fazla bir sonuç genellikle ters girilmiş girdileri, yanlış kenar belirlemeyi veya uyumsuz ölçümleri gösterir."
          },
          {
            "kind": "h3",
            "text": "Yöntem 1: Oranı Kontrol Etme"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] formülünü doğrudan doğrulayın. [[b=4]] ve [[c=5]] ile: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Yöntem 2: Pisagor Teoremini Kontrol Etme"
          },
          {
            "kind": "p",
            "text": "Karşı kenar biliniyor veya gerekiyorsa [[a=\\sqrt{c^2-b^2}]] hesaplayın. [[b=4]] ve [[c=5]] için: [[a=\\sqrt{25-16}=3]] ve [[3^2+4^2=5^2]]. Bu, 3-4-5 dik üçgeninin boyutlarını onaylar."
          },
          {
            "kind": "h3",
            "text": "Yöntem 3: Ters Kosinüsle Kontrol Etme"
          },
          {
            "kind": "p",
            "text": "Oran 0.8 ise: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Ardından açı ile kenar oranının tutarlı olduğunu doğrulayın. Yuvarlama nedeniyle küçük farklar olabilir."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Kosinüs, Sinüs, Tanjant ve Sekant",
        "blocks": [
          {
            "kind": "p",
            "text": "Her oran, aynı referans açıyı ve kenar etiketlerini kullanarak farklı bir kenar çiftini karşılaştırır:"
          },
          {
            "kind": "p",
            "text": "Sekant kosinüsün tersidir: [[\\sec(A)=1/\\cos(A)]]. [[\\cos(A)=0.8]] ise [[\\sec(A)=1/0.8=1.25]] olur. Komşu kenar veya yatay izdüşüm için kosinüsü, dikey bileşenler için sinüsü, hipotenüsün işe karışmadığı durumlarda tanjantı ve formül ters değer istediğinde sekantı kullanın."
          },
          {
            "kind": "p",
            "text": "Komşu oranlar için <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinüs Oranı Hesaplayıcısı</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tanjant Oranı Hesaplayıcısı</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekant Oranı Hesaplayıcısı</a> ve <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kosekant Oranı Hesaplayıcısı</a> sayfalarına bakın."
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
              ["Kosinüs", "cos(A) = b/c", "Komşu kenarın hipotenüse"],
              ["Tanjant", "tan(A) = a/b", "Karşı kenarın komşu kenara"],
              ["Sekant", "sec(A) = c/b", "Hipotenüsün komşu kenara"],
              ["Kosekant", "csc(A) = c/a", "Hipotenüsün karşı kenara"],
              ["Kotanjant", "cot(A) = b/a", "Komşu kenarın karşı kenara"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Sinüs Oranı Hesaplayıcısı"
          },
          {
            "name": "Tanjant Oranı Hesaplayıcısı"
          },
          {
            "name": "Sekant Oranı Hesaplayıcısı"
          },
          {
            "name": "Kosekant Oranı Hesaplayıcısı"
          },
          {
            "name": "Dik Üçgen Açı Hesaplayıcısı"
          },
          {
            "name": "Dik Üçgen Kenar Hesaplayıcısı"
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
        "question": "Dik üçgende kosinüs oranı formülü nedir?",
        "answer": "cos(A) = b / c: A açısının komşu kenarını hipotenüse bölün. 4 cm komşu kenar ve 5 cm hipotenüs için sonuç 4/5 = 0.8 olur."
      },
      {
        "question": "İki kenar uzunluğundan kosinüs nasıl hesaplanır?",
        "answer": "Komşu kenar b ile hipotenüs c'yi aynı birimle ölçün, c'nin b'den uzun olduğunu onaylayın, ardından cos(A) = b / c hesaplayın. b = 12 m ve c = 13 m için cevap 12/13, yaklaşık 0.9231 olur."
      },
      {
        "question": "Kosinüs ile sinüs arasındaki fark nedir?",
        "answer": "Kosinüs komşu kenarı hipotenüse böler (b/c); sinüs karşı kenarı hipotenüse böler (a/c). Bir 3-4-5 üçgeninde cos(A) = 0.8 ve sin(A) = 0.6 olur."
      },
      {
        "question": "Bir dik üçgende dar açı için kosinüs neden 1'den küçüktür?",
        "answer": "Hipotenüs en uzun kenardır, bu yüzden b her zaman c'den küçüktür. Küçük pozitif bir sayıyı büyük bir sayıya bölmek 1'in altında bir sonuç verir; iki kenar da pozitif olduğundan sonuç 0'ın üstünde kalır."
      },
      {
        "question": "Geçerli bir dik üçgende kosinüs 1'den büyük olabilir mi?",
        "answer": "Hayır. 1'in üstünde bir kosinüs, komşu kenarın hipotenüsten uzun olmasını gerektirir ki bu gerçek bir dik üçgende imkansızdır. Araç 1 veya daha fazlasını gösteriyorsa girdiler ters girilmiş, yanlış dik kenar kullanılmış veya ölçümler uyumsuzdur."
      },
      {
        "question": "0.8 kosinüs değeri ne anlama gelir?",
        "answer": "Komşu kenar hipotenüsün yüzde 80'i uzunluğundadır: 4 m / 5 m = 0.8. Bu sayı üçgenin şeklini tanımlar, bir açıyı değil; eşleşen açı ters kosinüsle bulunur ve yaklaşık 36.87 derecedir."
      },
      {
        "question": "Kosinüs oranının birimi var mıdır?",
        "answer": "Hayır. İki kenar da aynı birimle ölçülür, bu yüzden birimler sadeleşir: 4 m / 5 m = 0.8 ve 400 cm / 500 cm = 0.8. Kosinüsü derece, metre veya fit eklemeden düz, birimsiz bir sayı olarak bildirin."
      },
      {
        "question": "Bir kosinüs oranından açı nasıl bulunur?",
        "answer": "Ters kosinüs (arkkosinüs) kullanın: A = cos^-1(oran). 0.8 için A = cos^-1(0.8), yaklaşık 36.87 derece. Bu sayfadaki hesaplayıcı oranı verir, açıyı değil; bu yüzden önce hesap makinenizi derece moduna alın."
      },
      {
        "question": "Kosinüs kullanarak komşu kenar nasıl bulunur?",
        "answer": "Formülü b = c x cos(A) olacak şekilde yeniden düzenleyin. Hipotenüsü açının kosinüsüyle çarpın. c = 10 m ve A açısı = 60 derece iken cos(60 deg) = 0.5 olur, yani b = 10 x 0.5 = 5 m."
      },
      {
        "question": "Kosinüs ile sekant arasındaki fark nedir?",
        "answer": "Sekant kosinüsün tersidir: sec(A) = c / b veya 1 / cos(A). Kosinüs 1'in altında bir değer verir; sekant kesri ters çevirir ve 1'in üstünde bir değer verir. cos(A) = 0.8 ise sec(A) = 1.25 olur."
      },
      {
        "question": "Karşı kenarı bilmeden kosinüs hesaplanabilir mi?",
        "answer": "Evet. Kosinüs yalnızca komşu kenar ile hipotenüse ihtiyaç duyar; cos(A) = b/c formülünde karşı kenarın rolü yoktur, bu yüzden bu hesaplayıcı onu asla istemez."
      },
      {
        "question": "Kosinüs pratik ölçümlerde nasıl kullanılabilir?",
        "answer": "Kosinüs yatay izdüşümler için kullanılan araçtır: merdiven uzunluğundan zemin mesafesi, kiriş uzunluğundan yatay koşu veya bir kuvvetin yatay bileşeni. Komşu kenarı elde etmek için hipotenüsü cos(A) ile çarpın veya ölçümlerin bir dik üçgene uyup uymadığını oranla doğrulayın."
      }
    ],
    "conclusion": {
      "h2": "Kosinüs Oranında Güvenle Ustalaşın",
      "paragraphs": [
        "Kosinüs, komşu kenarın kapladığı hipotenüs payıdır: üçgenin şeklini tanımlamak için [[b]] sayısını [[c]] sayısına bölün. [[\\cos(A)=b/c]] formülü yalnızca iki ölçüm ister, cevap her zaman 0 ile 1 arasında boyutsuz bir sayıdır ve yeniden düzenlenmiş [[b=c\\cos(A)]] ve [[A=\\cos^{-1}(b/c)]] biçimleri eksik kenarı veya açıyı geri verir. Merdiven, kiriş veya ders kitabından bir 3-4-5 olsun, yöntem asla değişmez: komşu kenarı belirleyin, hipotenüsü belirleyin, bölün ve doğrulayın."
      ]
    }
  },
"sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "cos-intro": "Vad är en cosinuskvotskalkylator?",
      "cos-triangle": "Förstå den närliggande kateten och hypotenusan",
      "cos-whatis": "Förstå cosinuskvoten",
      "cos-formula": "Hur cosinusformeln fungerar",
      "cos-howto": "Så använder du cosinuskvotskalkylatorn",
      "cos-examples": "Steg-för-steg-exempel på att beräkna cosinus",
      "cos-applications": "Exempel från verkliga livet med cosinuskvoten",
      "cos-angle": "Cosinus och vinkelstorlek",
      "cos-recover": "Hitta sidor och vinklar med cosinus",
      "cos-mistakes": "Vanliga misstag vid beräkning av cosinus",
      "cos-verify": "Så kontrollerar du att ditt cosinusresultat är giltigt",
      "cos-vs": "Cosinus mot sinus, tangens och sekans",
      "cos-faq": "Vanliga frågor",
      "cos-related": "Relaterade kalkylatorer"
    },
    "sections": {
      "cos-intro": {
        "h2": "Vad är en cosinuskvotskalkylator?",
        "blocks": [
          {
            "kind": "p",
            "text": "En cosinuskvotskalkylator svarar på en fråga: för en spetsig vinkel i en rätvinklig triangel, hur lång är den närliggande kateten jämfört med hypotenusan? Ange de två sidlängderna, och verktyget dividerar den närliggande kateten med hypotenusan och ger [[\\cos(A)=b/c]]. Med en närliggande katet på 4 cm och en hypotenusa på 5 cm blir beräkningen [[4/5=0.8]]: den närliggande kateten är 80 procent av hypotenusan. Det decimaltalet är det fullständiga svaret. Det har inga enheter, eftersom centimeter tar ut varandra vid divisionen, och det är inte en vinkel i grader. Den motstående kateten ingår aldrig i denna beräkning. Från den enda kvoten kan du jämföra former, kontrollera mätningar, hitta horisontella projektioner eller återfå vinkeln med invers cosinus."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "Förstå den närliggande kateten och hypotenusan",
        "blocks": [
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt [[90^\\circ]], vinkeln mellan två vinkelräta linjer, som en vägg som möter ett plant golv. Hypotenusan ligger mitt emot den räta vinkeln och är alltid den längsta sidan. De övriga två vinklarna delar på de återstående 90 graderna, så båda är spetsiga. Cosinus jämför två av dessa sidor i ett fast förhållande."
          },
          {
            "kind": "h3",
            "text": "Vad är den närliggande kateten?"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten [[b]] är det ben som vidrör referensvinkeln [[A]] utan att vara hypotenusan. Den representerar ofta en horisontell sträcka: markavståndet från en stege, en takstols horisontella spannvidd eller projektionen av en kraft. Vilket ben som räknas som närliggande beror på referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[B]] växlar den närliggande och den motstående katetens beteckningar."
          },
          {
            "kind": "h3",
            "text": "Vad är hypotenusan?"
          },
          {
            "kind": "p",
            "text": "Hypotenusan [[c]] är sidan mitt emot den räta vinkeln: i varje diagram vetter den mot den lilla kvadraten som markerar hörnet på [[90^\\circ]], och den är den längsta sidan. I verkliga sammanhang kan den vara en stege, en takstol, en ramp, en kabel eller en rak sträcka, och den är alltid strikt längre än den närliggande kateten."
          },
          {
            "kind": "h3",
            "text": "Vad är den motstående kateten?"
          },
          {
            "kind": "p",
            "text": "Den motstående kateten [[a]] ligger rakt mitt emot vinkel [[A]] och vidrör aldrig dess hörn. Den spelar ingen roll i cosinusformeln, vilket är varför kalkylatorn aldrig ber om den. Håll reda på referensvinkeln: väljer du fel vinkel växlar den motstående och den närliggande katetens beteckningar tyst."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Rätvinklig triangel med vinkel A nere till vänster; gyllene katet b, blå hypotenusa c, neutral katet a, cos(A)=b/c",
            "caption": "Vinkel A sitter nere till vänster; cosinus använder den närliggande kateten b och hypotenusan c, inte den motstående kateten a."
          }
        ]
      },
      "cos-whatis": {
        "h2": "Förstå cosinuskvoten",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus jämför benet intill vinkel [[A]] med hela den lutande sidan:"
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "Här är [[\\cos(A)]] cosinus för vinkel [[A]], [[b]] är den närliggande kateten och [[c]] är hypotenusan: den andel av hypotenusan som den närliggande kateten täcker."
          },
          {
            "kind": "h3",
            "text": "Förstå SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH: sinus = motstående / hypotenusa. CAH: cosinus = närliggande / hypotenusa. TOA: tangens = motstående / närliggande. Bokstäverna CAH stavar ut cosinusformeln: den första bokstaven namnger funktionen, den andra täljaren och den tredje nämnaren."
          },
          {
            "kind": "h3",
            "text": "Varför cosinus är en kvot"
          },
          {
            "kind": "p",
            "text": "Att dividera två längder tar ut enheterna: [[4\\text{ m}/5\\text{ m}=0.8]], och [[400\\text{ cm}/500\\text{ cm}=0.8]] också. Samma fysiska sidor ger alltid samma tal, oavsett vilken enhet du mätt dem i, så länge båda delar den."
          },
          {
            "kind": "h3",
            "text": "Vad betyder ett cosinusvärde på 0.8?"
          },
          {
            "kind": "p",
            "text": "Det betyder att den närliggande kateten är 80 procent av hypotenusan: ett långt ben intill vinkeln, en hypotenusa som bara är lite längre. Det ger inte vinkeln direkt; det kräver invers cosinus."
          },
          {
            "kind": "h3",
            "text": "Varför cosinus är mindre än 1"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är längre än vartdera benet, så [[b \\lt c]] och [[b/c \\lt 1]], och båda sidorna är positiva, så kvoten stannar över 0. För en giltig, icke-degenererad rätvinklig triangel hamnar cosinus alltid strikt mellan 0 och 1; gränsvärdena 0 och 1 är gränser, inte nåbara värden."
          },
          {
            "kind": "h3",
            "text": "Cosinus mot sinus"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] och [[\\sin(A)=a/c]] delar hypotenusan men använder olika ben. Välj cosinus när den närliggande kateten är känd eller behövs; välj sinus när det är den motstående kateten. Att blanda ihop de två är det vanligaste felet i början."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "Tre steg: märkt 3-4-5-triangel, formeln cos(A)=b/c, resultatet 4/5=0.8; närliggande katet är 80 procent",
            "caption": "Tre steg: identifiera sidorna, tillämpa cos(A) = b/c och dividera. Den närliggande kateten är 80 procent av hypotenusan."
          }
        ]
      },
      "cos-formula": {
        "h2": "Hur cosinusformeln fungerar",
        "blocks": [
          {
            "kind": "p",
            "text": "Utgå från definitionen: cosinus är den närliggande kateten dividerad med hypotenusan. I denna sidas beteckningar:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten är täljaren eftersom det är benet som jämförs; hypotenusan är nämnaren eftersom det är referenslängden."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: en 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "Steg 1: Skriv formeln. [[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "Steg 2: Sätt in mätningarna. [[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "Steg 3: Dividera. [[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Steg 4: Tolka svaret. Den närliggande kateten är 80 procent av hypotenusan."
          },
          {
            "kind": "p",
            "text": "Steg 5: Verifiera triangeln. [[3^2+4^2=5^2]], så [[9+16=25]]. Sidlängderna är matematiskt konsistenta."
          },
          {
            "kind": "p",
            "text": "Om du vill ha vinkeln snarare än kvoten är invers cosinus nästa steg: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Det är en separat beräkning; detta sidans verktyg ger bara kvoten."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "Så använder du cosinuskvotskalkylatorn",
        "blocks": [
          {
            "kind": "p",
            "text": "Genomgången nedan matchar det faktiska gränssnittet på den här sidan."
          },
          {
            "kind": "p",
            "text": "Kalkylatorn ber aldrig om en vinkel i grader, den motstående kateten eller ett värde att invertera: två sidlängder är den fullständiga inmatningen."
          }
        ],
        "steps": [
          "<strong>Identifiera referensvinkeln [[A]],</strong> eftersom den närliggande kateten är definierad i förhållande till den.",
          "<strong>Lokalisera den närliggande kateten [[b]]:</strong> det ben som vidrör vinkel [[A]] och inte är hypotenusan.",
          "<strong>Lokalisera hypotenusan [[c]]:</strong> sidan mitt emot den räta vinkeln, den längsta sidan.",
          "<strong>Mät eller skaffa båda sidlängderna</strong> i samma enhet.",
          "<strong>Ange den närliggande katetens längd</strong> (det mindre värdet) i det första fältet.",
          "<strong>Ange hypotenusan</strong> (det större värdet) i det andra fältet.",
          "<strong>Välj matchande enheter med enhetsväljarna</strong> så att divisionen blir meningsfull.",
          "<strong>Bekräfta att båda värdena är positiva;</strong> noll eller negativa längder kan inte bilda en triangel.",
          "<strong>Kontrollera att hypotenusan är längre än den närliggande kateten;</strong> om inte är inmatningarna omkastade eller felmärkta.",
          "<strong>Klicka på Beräkna cos(A)</strong> för att dividera den närliggande kateten med hypotenusan.",
          "<strong>Läs av cosinuskvoten:</strong> den närliggande kateten som andel av hypotenusan.",
          "<strong>Verifiera att svaret ligger mellan 0 och 1;</strong> allt utanför det intervallet signalerar ett inmatningsfel.",
          "<strong>Använd Reset</strong> för att rensa inmatningarna och börja om."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "Steg-för-steg-exempel på att beräkna cosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel följer samma mönster: skriv formeln, sätt in, dividera."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: En rätvinklig 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4\\text{ cm}]], [[a=3\\text{ cm}]], [[c=5\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten är 80 procent av hypotenusan; den motstående kateten fullbordar triangeln men formeln ignorerar den."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: En rätvinklig 5-12-13-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=12\\text{ m}]], [[a=5\\text{ m}]], [[c=13\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "Den närliggande kateten är cirka 92.31 procent av hypotenusan; den 5 m långa motstående kateten behövs inte."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: En 30-60-90-triangel"
          },
          {
            "kind": "p",
            "text": "För vinkel [[A=30^\\circ]] är den närliggande kateten [[\\sqrt{3}/2]] gånger hypotenusan. Med [[b=\\sqrt{3}\\text{ cm}]] och [[c=2\\text{ cm}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "Detta specialvinkelvärde är värt att memorera; 30-60-90-triangeln dyker ständigt upp i geometriproblem."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: En triangel med en närliggande katet på 8 och hypotenusa på 10"
          },
          {
            "kind": "p",
            "text": "Givet [[b=8\\text{ m}]] och [[c=10\\text{ m}]]:"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "Kvoten matchar 3-4-5-triangeln eftersom skalning av alla sidor med samma faktor lämnar vinklarna och kvoterna oförändrade."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "Exempel från verkliga livet med cosinuskvoten",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus är en matematisk kvot, inte en fysikalisk storhet med enheter. Dess praktiska värde ligger i att jämföra den närliggande kateten med hypotenusan, beräkna horisontella projektioner och verifiera mätningar. Varje exempel förutsätter en förenklad rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: Beräkna en steges cosinuskvot"
          },
          {
            "kind": "p",
            "text": "En 5 m stege står med basen 3 m från väggen; vinkel [[A]] ligger mellan stegen och det plana marken. Markavståndet är den närliggande kateten [[b=3\\text{ m}]], stegen hypotenusan [[c=5\\text{ m}]]. [[\\cos(A)=3/5]], så [[\\boxed{\\cos(A)=0.6}]]: markavståndet är 60 procent av stegens längd. Kvoten ensam säger inget om stegens säkerhet."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: Beräkna en takstols cosinuskvot"
          },
          {
            "kind": "p",
            "text": "En takstol lutar 5 m med en horisontell löpning på 4 m: löpningen är den närliggande kateten [[b=4\\text{ m}]], takstolen hypotenusan [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], så [[\\boxed{\\cos(A)=0.8}]]: löpningen är 80 procent av den lutande längden. En geometrisk kvot, inte en konstruktionsbedömning."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Bedöma en ramps cosinuskvot"
          },
          {
            "kind": "p",
            "text": "En ramp lutar 9.5 m med en horisontell löpning på 9 m: [[b=9\\text{ m}]], [[c=9.5\\text{ m}]]. [[\\cos(A)=9/9.5]], så [[\\boxed{\\cos(A)\\approx0.9474}]]: löpningen är cirka 94.74 procent av den lutande längden, som förväntat för en mild lutning. Den fastställer inte tillgänglighetskrav."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: En lantmäterimätning"
          },
          {
            "kind": "p",
            "text": "En förenklad lantmäteritriangel registrerar ett 50 m rakt avstånd och ett 40 m horisontellt avstånd: [[b=40\\text{ m}]], [[c=50\\text{ m}]]. [[\\cos(A)=40/50]], så [[\\boxed{\\cos(A)=0.8}]]: det horisontella avståndet är 80 procent av det raka avståndet. Verklig lantmätning kan kräva instrumenthöjdskorrigeringar."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: Hitta en staglinas cosinuskvot"
          },
          {
            "kind": "p",
            "text": "En 13 m staglina förankras 12 m horisontellt från stolpen: [[b=12\\text{ m}]], [[c=13\\text{ m}]]. [[\\cos(A)=12/13]], så [[\\boxed{\\cos(A)\\approx0.9231}]]: avståndet är cirka 92.31 procent av linans längd. Det säger inget om linans spänning eller förankringens styrka."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: Beräkna ett trapps vangstyckes cosinuskvot"
          },
          {
            "kind": "p",
            "text": "Ett förenklat trapps vangstycke är 5 m långt med en 4 m horisontell löpning: [[b=4\\text{ m}]], [[c=5\\text{ m}]]. [[\\cos(A)=4/5]], så [[\\boxed{\\cos(A)=0.8}]]: löpningen är 80 procent av det diagonala vangstycket. Den verifierar inte byggregler."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: Förstå en kranarms horisontella projektion"
          },
          {
            "kind": "p",
            "text": "En förenklad kranarm är 10 m lång med en 6 m horisontell projektion: [[b=6\\text{ m}]], [[c=10\\text{ m}]]. [[\\cos(A)=6/10]], så [[\\boxed{\\cos(A)=0.6}]]: projektionen är 60 procent av armens längd. Den fastställer inte lyftkapacitet."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: En rak flygsträcka för ett flygplan"
          },
          {
            "kind": "p",
            "text": "Ett flygplan färdas 5 km längs en rak bana och täcker 4 km horisontellt: [[b=4\\text{ km}]], [[c=5\\text{ km}]]. [[\\cos(A)=4/5]], så [[\\boxed{\\cos(A)=0.8}]]: den horisontella förskjutningen är 80 procent av banans längd. En idealiserad modell, inte flygnavigering."
          },
          {
            "kind": "h3",
            "text": "Exempel 13: Beräkna ett diagonalstags cosinuskvot"
          },
          {
            "kind": "p",
            "text": "Ett diagonalstag är 2 m långt med en 1.2 m horisontell projektion: [[b=1.2\\text{ m}]], [[c=2\\text{ m}]]. [[\\cos(A)=1.2/2]], så [[\\boxed{\\cos(A)=0.6}]]: projektionen är 60 procent av stagets längd. Den bestämmer inte stagets styrka."
          },
          {
            "kind": "h3",
            "text": "Exempel 14: Beräkna en vandringsleds cosinuskvot"
          },
          {
            "kind": "p",
            "text": "En rak vandringssträcka är 100 m lång med en 80 m horisontell förskjutning: [[b=80\\text{ m}]], [[c=100\\text{ m}]]. [[\\cos(A)=80/100]], så [[\\boxed{\\cos(A)=0.8}]]: förskjutningen är 80 procent av banans längd. Verkliga leder svänger och byter lutning."
          },
          {
            "kind": "h3",
            "text": "Exempel 15: Ett markisstöd"
          },
          {
            "kind": "p",
            "text": "Ett markisstöd är 3 m långt med en 2.4 m horisontell projektion: [[b=2.4\\text{ m}]], [[c=3\\text{ m}]]. [[\\cos(A)=2.4/3]], så [[\\boxed{\\cos(A)=0.8}]]: projektionen är 80 procent av stödets längd. Det fastställer inte konstruktionslämplighet."
          },
          {
            "kind": "h3",
            "text": "Exempel 16: En kabel mellan två punkter"
          },
          {
            "kind": "p",
            "text": "En rak kabel sträcker sig 25 m mellan punkter 24 m isär horisontellt: [[b=24\\text{ m}]], [[c=25\\text{ m}]]. [[\\cos(A)=24/25]], så [[\\boxed{\\cos(A)=0.96}]]: avståndet är 96 procent av kabellängden. Modellen förutsätter en rak kabel i en rätvinklig triangel."
          },
          {
            "kind": "h3",
            "text": "Praktiska exempel jämförda"
          },
          {
            "kind": "p",
            "text": "Mönstret håller genomgående: kvoten är stor när den närliggande kateten är en stor andel av hypotenusan, och liten när vinkeln öppnar sig."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Situation", "Närliggande katet b", "Hypotenusa c", "Cosinusformel", "Beräknad kvot", "Tolkning"],
            "rows": [
              ["Stege", "3 m", "5 m", "3/5", "0.6", "Markavståndet är 60% av stegens längd"],
              ["Takstol", "4 m", "5 m", "4/5", "0.8", "Löpningen är 80% av takstolens längd"],
              ["Ramp", "9 m", "9.5 m", "9/9.5", "0.9474", "Löpningen är 94.74% av lutningens längd"],
              ["Lantmäteri", "40 m", "50 m", "40/50", "0.8", "Det horisontella gapet är 80% av linjen"],
              ["Staglina", "12 m", "13 m", "12/13", "0.9231", "Avståndet är 92.31% av linan"],
              ["Trapps vangstycke", "4 m", "5 m", "4/5", "0.8", "Löpningen är 80% av vangstyckets längd"],
              ["Kranarm", "6 m", "10 m", "6/10", "0.6", "Projektionen är 60% av armen"],
              ["Flygsträcka", "4 km", "5 km", "4/5", "0.8", "Förskjutningen är 80% av banan"],
              ["Diagonalstag", "1.2 m", "2 m", "1.2/2", "0.6", "Projektionen är 60% av staget"],
              ["Vandringsled", "80 m", "100 m", "80/100", "0.8", "Förskjutningen är 80% av banan"],
              ["Markisstöd", "2.4 m", "3 m", "2.4/3", "0.8", "Projektionen är 80% av stödet"],
              ["Kabel", "24 m", "25 m", "24/25", "0.96", "Avståndet är 96% av kabeln"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Fyra paneler: stegkvot 0.6, takstol 0.8, lantmäteri 0.8, kranarm 0.6, var och en med en märkt rätvinklig triangel",
            "caption": "Fyra praktiska beräkningar: stege, takstol, lantmäteri och kranarm, var och en med sin triangel, formel och kvot."
          }
        ]
      },
      "cos-angle": {
        "h2": "Förstå sambandet mellan cosinus och vinkelstorlek",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinus krymper när den spetsiga vinkeln växer. En liten vinkel håller den närliggande kateten nästan lika lång som hypotenusan, så kvoten ligger nära 1; när vinkel [[A]] öppnar sig mot [[90^\\circ]] blir den närliggande kateten en mindre andel och kvoten faller. De verifierade referensvärdena nedan visar mönstret:"
          },
          {
            "kind": "p",
            "text": "Tabellens mått är illustrativa: kvoterna, inte de absoluta längderna, bestämmer vinklarna. Kvoten närmar sig 0 när vinkeln närmar sig [[90^\\circ]] och närmar sig 1 när vinkeln närmar sig [[0^\\circ]], och stannar strikt däremellan för varje giltig triangel."
          },
          {
            "kind": "p",
            "text": "Kalkylatorn tar ingen vinkelindata; dessa referensvärden tjänar som orientering och kontrollvärden vid verifiering av ett resultat."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["Vinkel A", "Närliggande katet b", "Hypotenusa c", "Cosinuskvot"],
            "rows": [
              ["30 grader", "sqrt(3)", "2", "Cirka 0.8660"],
              ["45 grader", "1", "sqrt(2)", "Cirka 0.7071"],
              ["60 grader", "1", "2", "0.5"],
              ["80 grader", "1", "Cirka 5.7588", "Cirka 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "Tre trianglar vid 30, 45, 60 grader med cosinusvärden 0.8660, 0.7071, 0.5; cosinus sjunker när vinkeln växer",
            "caption": "När vinkel A växer blir den närliggande kateten en mindre andel av hypotenusan, så cos(A) sjunker."
          }
        ]
      },
      "cos-recover": {
        "h2": "Hitta sidor och vinklar med cosinus",
        "blocks": [
          {
            "kind": "p",
            "text": "Cosinusformeln kan enkelt omformas för att återfå vilken som helst av sina tre storheter när de andra två är kända."
          },
          {
            "kind": "h3",
            "text": "Så hittar du den närliggande kateten"
          },
          {
            "kind": "p",
            "text": "Börja med [[\\cos(A)=b/c]] och multiplicera båda sidor med [[c]]:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "Med [[c=10\\text{ m}]] och [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)]], och eftersom [[\\cos(60^\\circ)=0.5]], [[\\boxed{b=5\\text{ m}}]]: halva hypotenusan för denna vinkel."
          },
          {
            "kind": "h3",
            "text": "Så hittar du hypotenusan"
          },
          {
            "kind": "p",
            "text": "Att lösa ut [[c]] i stället ger:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "Med [[b=4\\text{ m}]] och [[A=60^\\circ]]: [[c=4/0.5]], så [[\\boxed{c=8\\text{ m}}]]."
          },
          {
            "kind": "h3",
            "text": "Så hittar du en vinkel från en cosinuskvot"
          },
          {
            "kind": "p",
            "text": "Cosinuskvoten och vinkeln är olika storheter. Om kvoten är känd återfår invers cosinus, även kallad arccosinus, vinkeln:"
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "Med [[\\cos(A)=0.8]]: [[A=\\cos^{-1}(0.8)]], så [[\\boxed{A\\approx36.87^\\circ}]]; ställ den vetenskapliga kalkylatorn i graderläge först. Detta är matematiska omformningar: verktyget på den här sidan ger själva kvoten."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "Vanliga misstag vid beräkning av cosinus",
        "blocks": [
          {
            "kind": "h3",
            "text": "Fel mot rätt"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4]] och [[c=5]]:"
          },
          {
            "kind": "p",
            "text": "Felaktigt: [[5/4=1.25]]. Detta är cosinus reciproka värde, kallat sekans, och det är inte cosinuskvoten."
          },
          {
            "kind": "p",
            "text": "Korrekt: [[\\cos(A)=4/5=0.8]]."
          },
          {
            "kind": "p",
            "text": "Ett giltigt cosinus för en spetsig vinkel ligger alltid mellan 0 och 1."
          }
        ],
        "steps": [
          "<strong>Att använda den motstående kateten i stället för den närliggande kateten.</strong> Det beräknar [[a/c]], vilket är sinus. Åtgärd: välj det ben som vidrör vinkel [[A]].",
          "<strong>Att vända bråket till [[c/b]].</strong> Svaret överstiger 1. Åtgärd: den längre sidan måste vara nämnaren.",
          "<strong>Att blanda ihop cosinus med sinus.</strong> Att ange 0.6 för en 3-4-5-triangel. Åtgärd: sinus använder den motstående kateten; cosinus använder den närliggande kateten.",
          "<strong>Att blanda ihop cosinus med sekans.</strong> Att beräkna [[c/b]]. Åtgärd: sekans är cosinus reciproka värde, alltid över 1.",
          "<strong>Att ange en närliggande katet som är längre än hypotenusan.</strong> Inmatningarna beskriver en omöjlig triangel. Åtgärd: hypotenusafältet måste innehålla den längre mätningen.",
          "<strong>Att ange noll eller negativa sidlängder.</strong> Division med noll eller en meningslös negativ kvot. Åtgärd: använd bara positiva längder.",
          "<strong>Att blanda måttenheter.</strong> Centimeter dividerat med meter snedvrider kvoten med 100. Åtgärd: omvandla båda sidorna till en enhet först.",
          "<strong>Att ange cosinus som en vinkel i grader.</strong> Att skriva 0.8 grader. Åtgärd: kvoten är ett rent tal, inte en vinkel.",
          "<strong>Att anta att cosinuskvoten har enheter.</strong> Enheterna har redan tagit ut varandra i divisionen. Åtgärd: stryk enheten från svaret.",
          "<strong>Att blanda ihop referensvinkeln med den andra spetsiga vinkeln.</strong> Den närliggande och den motstående katetens beteckningar växlar. Åtgärd: markera vinkel [[A]] i diagrammet först.",
          "<strong>Att avrunda för tidigt.</strong> Att avrunda [[12/13]] till 0.92 före återmatning ger undvikbart fel. Åtgärd: behåll extra siffror till det sista steget.",
          "<strong>Att anta att cosinus är densamma för varje triangel.</strong> Att tillämpa ett värde på en annan form. Åtgärd: cosinus beror på triangelns proportioner.",
          "<strong>Att tro att kvoten direkt ger vinkeln i grader.</strong> Att läsa 0.8 som en vinkel. Åtgärd: använd invers cosinus för att återfå graderna.",
          "<strong>Att läsa ett cosinus på 0.8 som 0.8 grader.</strong> Att blanda ihop en kvot med en vinkel. Åtgärd: 0.8 är kvoten; vinkeln är cirka 36.87 grader.",
          "<strong>Att namnge ett ben innan referensvinkeln är identifierad.</strong> Närliggande och motstående blandas ihop. Åtgärd: fastställ vinkel [[A]] innan du namnger något ben."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "Så kontrollerar du att ditt cosinusresultat är giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "En giltig, icke-degenererad rätvinklig triangel kräver [[0 \\lt b \\lt c]], och därför [[0 \\lt b/c \\lt 1]]. Båda mätningarna måste använda kompatibla enheter, och cosinusresultatet måste vara större än 0 och mindre än 1. Ett resultat på 1 eller mer indikerar vanligtvis omkastade inmatningar, felaktig sididentifiering eller inkompatibla mätningar."
          },
          {
            "kind": "h3",
            "text": "Metod 1: Kontrollera kvoten"
          },
          {
            "kind": "p",
            "text": "Verifiera [[\\cos(A)=b/c]] direkt. Med [[b=4]] och [[c=5]]: [[4/5=0.8]]."
          },
          {
            "kind": "h3",
            "text": "Metod 2: Kontrollera med Pythagoras sats"
          },
          {
            "kind": "p",
            "text": "Om den motstående kateten är känd eller behövs, beräkna [[a=\\sqrt{c^2-b^2}]]. För [[b=4]] och [[c=5]]: [[a=\\sqrt{25-16}=3]], och [[3^2+4^2=5^2]]. Detta bekräftar dimensionerna hos den rätvinkliga 3-4-5-triangeln."
          },
          {
            "kind": "h3",
            "text": "Metod 3: Kontrollera med invers cosinus"
          },
          {
            "kind": "p",
            "text": "Om kvoten är 0.8: [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Verifiera sedan att vinkeln och sidkvoten stämmer överens. Små skillnader kan uppstå på grund av avrundning."
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "Cosinus mot sinus, tangens och sekans",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje kvot jämför ett annat par av sidor, med samma referensvinkel och sidbeteckningar:"
          },
          {
            "kind": "p",
            "text": "Sekans är cosinus reciproka värde: [[\\sec(A)=1/\\cos(A)]]. Om [[\\cos(A)=0.8]], då [[\\sec(A)=1/0.8=1.25]]. Använd cosinus för den närliggande kateten eller en horisontell projektion, sinus för vertikala komponenter, tangens när ingen hypotenusa är inblandad, och sekans när en formel kräver det reciproka värdet."
          },
          {
            "kind": "p",
            "text": "För de närliggande kvoterna, se <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinuskvotskalkylatorn</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tangenskvotskalkylatorn</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekanskvotskalkylatorn</a> och <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Cosekantkvotskalkylatorn</a>."
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
              ["Cosinus", "cos(A) = b/c", "Närliggande katet mot hypotenusa"],
              ["Tangens", "tan(A) = a/b", "Motstående katet mot närliggande katet"],
              ["Sekans", "sec(A) = c/b", "Hypotenusa mot närliggande katet"],
              ["Cosekans", "csc(A) = c/a", "Hypotenusa mot motstående katet"],
              ["Cotangens", "cot(A) = b/a", "Närliggande katet mot motstående katet"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "Utforska relaterade trigonometrikalkylatorer",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "Sinuskvotskalkylator",
            "desc": "Hitta sinuskvoten från den motstående kateten och hypotenusan."
          },
          {
            "name": "Tangenskvotskalkylator",
            "desc": "Hitta tangenskvoten från den motstående och den närliggande kateten."
          },
          {
            "name": "Sekanskvotskalkylator",
            "desc": "Hitta sekanskvoten från hypotenusan och den närliggande kateten."
          },
          {
            "name": "Cosekantkvotskalkylator",
            "desc": "Hitta cosekanskvoten från hypotenusan och den motstående kateten."
          },
          {
            "name": "Vinkelkalkylator för rätvinkliga trianglar",
            "desc": "Hitta vinklarna i en rätvinklig triangel utifrån kända sidor."
          },
          {
            "name": "Sidkalkylator för rätvinkliga trianglar",
            "desc": "Hitta de saknade sidlängderna i en rätvinklig triangel."
          }
        ],
        "tables": [],
        "figures": []
      }
    },
    "faqs": [
      {
        "question": "Vad är formeln för cosinuskvot i en rätvinklig triangel?",
        "answer": "cos(A) = b / c: dividera kateten intill vinkel A med hypotenusan. För en närliggande katet på 4 cm och en hypotenusa på 5 cm blir resultatet 4/5 = 0.8."
      },
      {
        "question": "Hur beräknar du cosinus från två sidlängder?",
        "answer": "Mät den närliggande kateten b och hypotenusan c i samma enhet, bekräfta att c är längre än b, och beräkna sedan cos(A) = b / c. Med b = 12 m och c = 13 m blir svaret 12/13, cirka 0.9231."
      },
      {
        "question": "Vad är skillnaden mellan cosinus och sinus?",
        "answer": "Cosinus dividerar den närliggande kateten med hypotenusan (b/c); sinus dividerar den motstående kateten med hypotenusan (a/c). I en 3-4-5-triangel är cos(A) = 0.8 och sin(A) = 0.6."
      },
      {
        "question": "Varför är cosinus mindre än 1 för en spetsig vinkel i en rätvinklig triangel?",
        "answer": "Hypotenusan är den längsta sidan, så b är alltid mindre än c. Att dividera ett mindre positivt tal med ett större ger ett resultat under 1; båda sidorna är positiva, så det stannar över 0."
      },
      {
        "question": "Kan cosinus vara större än 1 i en giltig rätvinklig triangel?",
        "answer": "Nej. Ett cosinus över 1 skulle kräva att den närliggande kateten är längre än hypotenusan, omöjligt i en äkta rätvinklig triangel. Om verktyget visar 1 eller mer är inmatningarna omkastade, fel ben användes eller mätningarna är inkompatibla."
      },
      {
        "question": "Vad betyder ett cosinusvärde på 0.8?",
        "answer": "Den närliggande kateten är 80 procent så lång som hypotenusan: 4 m / 5 m = 0.8. Talet beskriver triangelns form, inte en vinkel; den matchande vinkeln är cirka 36.87 grader och hittas med invers cosinus."
      },
      {
        "question": "Har cosinuskvoten enheter?",
        "answer": "Nej. Båda sidorna mäts i samma enhet, så enheterna tar ut varandra: 4 m / 5 m = 0.8, och 400 cm / 500 cm = 0.8. Ange cosinus som ett rent dimensionslöst tal, aldrig med grader, meter eller fot bifogade."
      },
      {
        "question": "Hur hittar jag en vinkel från en cosinuskvot?",
        "answer": "Använd invers cosinus (arccosinus): A = cos^-1(kvot). För 0.8 är A = cos^-1(0.8), cirka 36.87 grader. Kalkylatorn på den här sidan ger kvoten, inte vinkeln, så ställ din kalkylator i graderläge först."
      },
      {
        "question": "Hur hittar jag den närliggande kateten med cosinus?",
        "answer": "Omforma formeln till b = c x cos(A). Multiplicera hypotenusan med vinkelns cosinus. Med c = 10 m och vinkel A = 60 grader är cosinus för 60 grader = 0.5, så b = 10 x 0.5 = 5 m."
      },
      {
        "question": "Vad är skillnaden mellan cosinus och sekans?",
        "answer": "Sekans är cosinus reciproka värde: sec(A) = c / b, eller 1 / cos(A). Cosinus ger ett värde under 1; sekans vänder bråket och ger ett värde över 1. Om cos(A) = 0.8 är sec(A) = 1.25."
      },
      {
        "question": "Kan jag beräkna cosinus utan att känna till den motstående kateten?",
        "answer": "Ja. Cosinus behöver bara den närliggande kateten och hypotenusan; den motstående kateten spelar ingen roll i cos(A) = b/c, vilket är varför denna kalkylator aldrig ber om den."
      },
      {
        "question": "Hur kan cosinus användas i praktiska mätningar?",
        "answer": "Cosinus är verktyget för horisontella projektioner: markavstånd från en steglängd, horisontell löpning från en takstollängd eller en krafts horisontella komponent. Multiplicera hypotenusan med cos(A) för att få den närliggande kateten, eller använd kvoten för att verifiera att mätningar passar en rätvinklig triangel."
      }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade trigonometrikalkylatorer",
    "conclusion": {
      "h2": "Bemästra cosinuskvoten med självförtroende",
      "paragraphs": [
        "Cosinus är den andel av hypotenusan som den närliggande kateten täcker: dividera [[b]] med [[c]] för att beskriva triangelns form. Formeln [[\\cos(A)=b/c]] behöver bara två mätningar, svaret är alltid ett dimensionslöst tal mellan 0 och 1, och de omformade formerna [[b=c\\cos(A)]] och [[A=\\cos^{-1}(b/c)]] återfår en saknad sida eller vinkeln. Stege, takstol eller 3-4-5 från läroboken, metoden ändras aldrig: identifiera den närliggande kateten, identifiera hypotenusan, dividera och verifiera."
      ]
    }
  },
"zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "cos-intro": "什么是余弦比计算器？",
      "cos-triangle": "理解邻边和斜边",
      "cos-whatis": "理解余弦比",
      "cos-formula": "余弦公式如何工作",
      "cos-howto": "如何使用余弦比计算器",
      "cos-examples": "计算余弦的逐步示例",
      "cos-applications": "余弦比的实际生活示例",
      "cos-angle": "余弦与角大小",
      "cos-recover": "用余弦求边和角",
      "cos-mistakes": "计算余弦时的常见错误",
      "cos-verify": "如何检查余弦结果是否有效",
      "cos-vs": "余弦与正弦、正切、正割的对比",
      "cos-faq": "常见问题",
      "cos-related": "相关计算器"
    },
    "sections": {
      "cos-intro": {
        "h2": "什么是余弦比计算器？",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦比计算器只回答一个问题：直角三角形中某个锐角的邻边与斜边相比有多长？输入两条边的长度，工具用邻边除以斜边，得到 [[\\cos(A)=b/c]]。当邻边为 4 厘米、斜边为 5 厘米时，计算为 [[4/5=0.8]]：邻边是斜边的 80%。这个小数就是完整的答案。它不带单位，因为除法中厘米相互抵消，它也不是以度为单位的角。对边从不参与这个计算。从这一个比值，你可以比较三角形的形状、核对测量值、求水平投影，也可以用反余弦还原出角。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-triangle": {
        "h2": "理解邻边和斜边",
        "blocks": [
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个角恰为 [[90^\\circ]]，即两条互相垂直的直线之间的夹角，就像墙面与水平地面的交角。斜边位于这个直角的对面，恒为最长的边。另外两个角平分剩下的 90 度，所以都是锐角。余弦比较的是其中两条边之间固定的关系。"
          },
          {
            "kind": "h3",
            "text": "什么是邻边？"
          },
          {
            "kind": "p",
            "text": "邻边 [[b]] 是与参考角 [[A]] 相接、但不是斜边的那条直角边。它常代表水平跨度：梯子底端到墙的地面距离、椽子的水平跨度，或力的水平投影。哪条直角边算作邻边取决于参考角，所以从角 [[A]] 换到角 [[B]] 会交换邻边和对边的标号。"
          },
          {
            "kind": "h3",
            "text": "什么是斜边？"
          },
          {
            "kind": "p",
            "text": "斜边 [[c]] 是直角对面的边：在任何示意图中，它正对标着小方块的 [[90^\\circ]] 角，而且是最长的边。在实际场景中，它可以是梯子、椽子、坡道、缆绳或一段直线路径，而且它严格长于邻边。"
          },
          {
            "kind": "h3",
            "text": "什么是对边？"
          },
          {
            "kind": "p",
            "text": "对边 [[a]] 位于角 [[A]] 的正对面，从不接触角 [[A]] 的顶点。它在余弦公式中不起任何作用，这就是计算器从不询问它的原因。参考角要分清：选错角，对边和邻边的标号就会悄悄调换。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "直角三角形，角 A 在左下，金色邻边 b，蓝色斜边 c，灰色对边 a，公式 cos(A)=b/c",
            "caption": "角 A 位于左下；余弦使用邻边 b 和斜边 c，不用对边 a。"
          }
        ]
      },
      "cos-whatis": {
        "h2": "理解余弦比",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦比较的是角 [[A]] 旁边的直角边与完整的斜边："
          },
          {
            "kind": "p",
            "text": "[[[\\cos(A)=\\frac{b}{c}]]]"
          },
          {
            "kind": "p",
            "text": "其中 [[\\cos(A)]] 是角 [[A]] 的余弦，[[b]] 是邻边，[[c]] 是斜边：邻边覆盖了斜边的多少份额。"
          },
          {
            "kind": "h3",
            "text": "理解 SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH：正弦 = 对边 / 斜边。CAH：余弦 = 邻边 / 斜边。TOA：正切 = 对边 / 邻边。字母 CAH 拼出了余弦公式：第一个字母是函数名，第二个是分子，第三个是分母。"
          },
          {
            "kind": "h3",
            "text": "为什么余弦是一个比值"
          },
          {
            "kind": "p",
            "text": "两条长度相除，单位相互抵消：[[4\\text{ m}/5\\text{ m}=0.8]]，[[400\\text{ cm}/500\\text{ cm}=0.8]] 也一样。只要两条边用相同单位测量，无论用什么单位，同一组边总得到同一个数。"
          },
          {
            "kind": "h3",
            "text": "余弦值为 0.8 是什么意思？"
          },
          {
            "kind": "p",
            "text": "它表示邻边是斜边的 80%：一条紧贴着角的较长直角边，斜边只比它稍长一点。它不直接给出角；求角需要反余弦。"
          },
          {
            "kind": "h3",
            "text": "为什么余弦小于 1"
          },
          {
            "kind": "p",
            "text": "斜边长于任一条直角边，所以 [[b \\lt c]]，从而 [[b/c \\lt 1]]；两条边都是正数，所以比值恒大于 0。对有效、非退化的直角三角形，余弦恒严格落在 0 和 1 之间；0 和 1 是边界极限，取不到。"
          },
          {
            "kind": "h3",
            "text": "余弦与正弦的对比"
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=b/c]] 和 [[\\sin(A)=a/c]] 共用斜边，但使用不同的直角边。已知或需要邻边时选余弦；已知或需要对边时选正弦。把两者混淆是最常见的入门错误。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
          {
            "alt": "三个阶段：3-4-5 三角形已标号，余弦公式 cos(A)=b/c，结果 4/5=0.8，邻边是斜边的 80%",
            "caption": "三个阶段：确定边，应用 cos(A) = b/c，然后相除。邻边是斜边的 80%。"
          }
        ]
      },
      "cos-formula": {
        "h2": "余弦公式如何工作",
        "blocks": [
          {
            "kind": "p",
            "text": "从定义出发：余弦是邻边除以斜边。在本页的记号中："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]"
          },
          {
            "kind": "p",
            "text": "邻边是分子，因为它是被比较的边；斜边是分母，因为它是参照的长度。"
          },
          {
            "kind": "h3",
            "text": "完整解题示例：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "第 1 步：写出公式。[[\\cos(A)=b/c]]"
          },
          {
            "kind": "p",
            "text": "第 2 步：代入测量值。[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "第 3 步：相除。[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "第 4 步：解读答案。邻边是斜边的 80%。"
          },
          {
            "kind": "p",
            "text": "第 5 步：验证三角形。[[3^2+4^2=5^2]]，即 [[9+16=25]]。这些边长在数学上是一致的。"
          },
          {
            "kind": "p",
            "text": "如果你想要角而不是比值，下一步是反余弦：[[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。那是另一个计算；本页的工具只返回比值。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-howto": {
        "h2": "如何使用余弦比计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "下面的说明与本页的实际界面完全对应。"
          }
        ],
        "steps": [
          "<strong>确定参考角 [[A]]，</strong>因为邻边是相对于它定义的。",
          "<strong>找到邻边 [[b]]：</strong>与角 [[A]] 相接、但不是斜边的那条直角边。",
          "<strong>找到斜边 [[c]]：</strong>直角对面的边，是最长的边。",
          "<strong>测量或获取两条边的长度，</strong>两条边使用相同单位。",
          "<strong>在第一个输入框中输入邻边长度</strong>（两个值中较小的那个）。",
          "<strong>在第二个输入框中输入斜边</strong>（两个值中较大的那个）。",
          "<strong>用单位选择器选择匹配的单位，</strong>使除法有意义。",
          "<strong>确认两个值都为正数；</strong>零或负的长度无法构成三角形。",
          "<strong>检查斜边是否长于邻边；</strong>如果不是，说明输入调换了或标号错误。",
          "<strong>点击 计算 cos(A)，</strong>用邻边除以斜边。",
          "<strong>读取余弦比值：</strong>邻边在斜边中所占的份额。",
          "<strong>验证答案在 0 和 1 之间；</strong>超出这个范围的值表示输入错误。",
          "<strong>用 Reset 清空输入，</strong>重新开始。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-examples": {
        "h2": "计算余弦的逐步示例",
        "blocks": [
          {
            "kind": "p",
            "text": "每个示例遵循相同的模式：写出公式，代入，相除。"
          },
          {
            "kind": "h3",
            "text": "示例 1：3-4-5 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[b=4\\text{ cm}]]、[[a=3\\text{ cm}]]、[[c=5\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=4/5]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "邻边是斜边的 80%；对边补全了三角形，但公式忽略它。"
          },
          {
            "kind": "h3",
            "text": "示例 2：5-12-13 直角三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[b=12\\text{ m}]]、[[a=5\\text{ m}]]、[[c=13\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=12/13]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)\\approx0.9231}]]"
          },
          {
            "kind": "p",
            "text": "邻边约为斜边的 92.31%；本次计算不需要 5 米的对边。"
          },
          {
            "kind": "h3",
            "text": "示例 3：30-60-90 三角形"
          },
          {
            "kind": "p",
            "text": "对于角 [[A=30^\\circ]]，邻边是斜边的 [[\\sqrt{3}/2]] 倍。取 [[b=\\sqrt{3}\\text{ cm}]] 和 [[c=2\\text{ cm}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cos(30^\\circ)=\\frac{\\sqrt{3}}{2}]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(30^\\circ)\\approx0.8660}]]"
          },
          {
            "kind": "p",
            "text": "这个特殊角的值值得记住；30-60-90 三角形在几何题中不断出现。"
          },
          {
            "kind": "h3",
            "text": "示例 4：邻边为 8、斜边为 10 的三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[b=8\\text{ m}]] 和 [[c=10\\text{ m}]]："
          },
          {
            "kind": "p",
            "text": "[[\\cos(A)=8/10]]"
          },
          {
            "kind": "p",
            "text": "[[\\boxed{\\cos(A)=0.8}]]"
          },
          {
            "kind": "p",
            "text": "这个比值与 3-4-5 三角形相同，因为把所有边按相同倍数缩放，角和比值都不变。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-applications": {
        "h2": "余弦比的实际生活示例",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦是一个数学比值，而不是带单位的物理量。它的实际价值在于比较邻边与斜边、计算水平投影，以及验证测量值。下面的每个示例都假设一个简化的直角三角形。"
          },
          {
            "kind": "h3",
            "text": "示例 5：计算梯子的余弦比"
          },
          {
            "kind": "p",
            "text": "一把 5 米的梯子，底端离墙 3 米；角 [[A]] 位于梯子与水平地面之间。地面距离是邻边 [[b=3\\text{ m}]]，梯子是斜边 [[c=5\\text{ m}]]。[[\\cos(A)=3/5]]，所以 [[\\boxed{\\cos(A)=0.6}]]：地面距离是梯子长度的 60%。仅凭比值无法判定梯子是否安全。"
          },
          {
            "kind": "h3",
            "text": "示例 6：计算屋顶椽子的余弦比"
          },
          {
            "kind": "p",
            "text": "一根屋顶椽子斜长 5 米，水平跨度 4 米：跨度是邻边 [[b=4\\text{ m}]]，椽子是斜边 [[c=5\\text{ m}]]。[[\\cos(A)=4/5]]，所以 [[\\boxed{\\cos(A)=0.8}]]：跨度是倾斜长度的 80%。这是几何比值，不是结构评估。"
          },
          {
            "kind": "h3",
            "text": "示例 7：评估坡道的余弦比"
          },
          {
            "kind": "p",
            "text": "一条坡道斜长 9.5 米，水平跨度 9 米：[[b=9\\text{ m}]]、[[c=9.5\\text{ m}]]。[[\\cos(A)=9/9.5]]，所以 [[\\boxed{\\cos(A)\\approx0.9474}]]：跨度约为倾斜长度的 94.74%，正如平缓坡道应有的那样。它不能判定无障碍通行合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 8：测量示例"
          },
          {
            "kind": "p",
            "text": "一次简化的测量记录了 50 米的直线距离和 40 米的水平间距：[[b=40\\text{ m}]]、[[c=50\\text{ m}]]。[[\\cos(A)=40/50]]，所以 [[\\boxed{\\cos(A)=0.8}]]：水平距离是直线距离的 80%。实际测量可能需要仪器高度修正。"
          },
          {
            "kind": "h3",
            "text": "示例 9：求拉线的余弦比"
          },
          {
            "kind": "p",
            "text": "一根 13 米的拉线，锚固点距杆底水平距离 12 米：[[b=12\\text{ m}]]、[[c=13\\text{ m}]]。[[\\cos(A)=12/13]]，所以 [[\\boxed{\\cos(A)\\approx0.9231}]]：间距约为拉线长度的 92.31%。它不能说明拉线张力或锚固强度。"
          },
          {
            "kind": "h3",
            "text": "示例 10：计算楼梯斜梁的余弦比"
          },
          {
            "kind": "p",
            "text": "一根简化的 5 米楼梯斜梁，水平跨度 4 米：[[b=4\\text{ m}]]、[[c=5\\text{ m}]]。[[\\cos(A)=4/5]]，所以 [[\\boxed{\\cos(A)=0.8}]]：跨度是对角线斜梁的 80%。它不能验证建筑规范合规性。"
          },
          {
            "kind": "h3",
            "text": "示例 11：理解起重机吊臂的水平投影"
          },
          {
            "kind": "p",
            "text": "一根简化的 10 米起重机吊臂，水平投影 6 米：[[b=6\\text{ m}]]、[[c=10\\text{ m}]]。[[\\cos(A)=6/10]]，所以 [[\\boxed{\\cos(A)=0.6}]]：投影是吊臂长度的 60%。它不能判定起重能力。"
          },
          {
            "kind": "h3",
            "text": "示例 12：直线飞行的航段"
          },
          {
            "kind": "p",
            "text": "一架飞机沿直线路径飞行 5 公里，水平位移 4 公里：[[b=4\\text{ km}]]、[[c=5\\text{ km}]]。[[\\cos(A)=4/5]]，所以 [[\\boxed{\\cos(A)=0.8}]]：水平位移是路径长度的 80%。这是理想化模型，不是飞行导航。"
          },
          {
            "kind": "h3",
            "text": "示例 13：计算对角支撑的余弦比"
          },
          {
            "kind": "p",
            "text": "一根对角支撑长 2 米，水平投影 1.2 米：[[b=1.2\\text{ m}]]、[[c=2\\text{ m}]]。[[\\cos(A)=1.2/2]]，所以 [[\\boxed{\\cos(A)=0.6}]]：投影是支撑长度的 60%。它不能判定支撑强度。"
          },
          {
            "kind": "h3",
            "text": "示例 14：计算徒步路线的余弦比"
          },
          {
            "kind": "p",
            "text": "一段直线徒步路段长 100 米，水平位移 80 米：[[b=80\\text{ m}]]、[[c=100\\text{ m}]]。[[\\cos(A)=80/100]]，所以 [[\\boxed{\\cos(A)=0.8}]]：位移是路径长度的 80%。实际路线会弯曲，坡度也会变化。"
          },
          {
            "kind": "h3",
            "text": "示例 15：遮阳篷支架"
          },
          {
            "kind": "p",
            "text": "一根遮阳篷支架长 3 米，水平投影 2.4 米：[[b=2.4\\text{ m}]]、[[c=3\\text{ m}]]。[[\\cos(A)=2.4/3]]，所以 [[\\boxed{\\cos(A)=0.8}]]：投影是支架长度的 80%。它不能判定结构适用性。"
          },
          {
            "kind": "h3",
            "text": "示例 16：两点之间的缆绳"
          },
          {
            "kind": "p",
            "text": "一根直线缆绳跨越 25 米，连接的两点水平相距 24 米：[[b=24\\text{ m}]]、[[c=25\\text{ m}]]。[[\\cos(A)=24/25]]，所以 [[\\boxed{\\cos(A)=0.96}]]：间距是缆绳长度的 96%。模型假设缆绳是直角三角形中的直线。"
          },
          {
            "kind": "p",
            "text": "规律是一致的：当邻边在斜边中所占份额较大时，比值较大；当角张开时，比值较小。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["情况", "邻边 b", "斜边 c", "余弦公式", "计算出的比值", "解读"],
            "rows": [
              ["梯子", "3 m", "5 m", "3/5", "0.6", "地面距离是梯子长度的 60%"],
              ["屋顶椽子", "4 m", "5 m", "4/5", "0.8", "跨度是椽子长度的 80%"],
              ["坡道", "9 m", "9.5 m", "9/9.5", "0.9474", "跨度是坡面长度的 94.74%"],
              ["测量", "40 m", "50 m", "40/50", "0.8", "水平间距是直线距离的 80%"],
              ["拉线", "12 m", "13 m", "12/13", "0.9231", "间距是拉线长度的 92.31%"],
              ["楼梯斜梁", "4 m", "5 m", "4/5", "0.8", "跨度是斜梁长度的 80%"],
              ["起重机吊臂", "6 m", "10 m", "6/10", "0.6", "投影是吊臂长度的 60%"],
              ["航段", "4 km", "5 km", "4/5", "0.8", "位移是路径长度的 80%"],
              ["对角支撑", "1.2 m", "2 m", "1.2/2", "0.6", "投影是支撑长度的 60%"],
              ["徒步路线", "80 m", "100 m", "80/100", "0.8", "位移是路径长度的 80%"],
              ["遮阳篷支架", "2.4 m", "3 m", "2.4/3", "0.8", "投影是支架长度的 80%"],
              ["缆绳", "24 m", "25 m", "24/25", "0.96", "间距是缆绳长度的 96%"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "四个面板：梯子比值 0.6，椽子 0.8，测量 0.8，起重机吊臂 0.6，每个都带标号的直角三角形",
            "caption": "四个实际计算：梯子、屋顶椽子、测量和起重机吊臂，每个都有三角形、公式和比值。"
          }
        ]
      },
      "cos-angle": {
        "h2": "理解余弦与角大小的关系",
        "blocks": [
          {
            "kind": "p",
            "text": "锐角增大时，余弦减小。小角让邻边几乎与斜边等长，所以比值接近 1；随着角 [[A]] 向 [[90^\\circ]] 张开，邻边在斜边中所占的份额变小，比值下降。下面经过验证的参考值显示了这个规律："
          },
          {
            "kind": "p",
            "text": "表中的测量值只是示意：决定角的是比值，而不是绝对长度。角趋近 [[90^\\circ]] 时比值趋近 0，角趋近 [[0^\\circ]] 时比值趋近 1；对每个有效三角形，比值严格介于两者之间。"
          },
          {
            "kind": "p",
            "text": "计算器不接受角输入；这些参考值用作方向提示和验证结果时的核对值。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [
          {
            "headers": ["角 A", "邻边 b", "斜边 c", "余弦比值"],
            "rows": [
              ["30 度", "sqrt(3)", "2", "约 0.8660"],
              ["45 度", "1", "sqrt(2)", "约 0.7071"],
              ["60 度", "1", "2", "0.5"],
              ["80 度", "1", "约 5.7588", "约 0.1736"]
            ]
          }
        ],
        "figures": [
          {
            "alt": "30、45、60 度三个三角形，余弦值 0.8660、0.7071、0.5；角增大时余弦减小",
            "caption": "角 A 增大时，邻边在斜边中所占的比例变小，因此 cos(A) 减小。"
          }
        ]
      },
      "cos-recover": {
        "h2": "用余弦求边和角",
        "blocks": [
          {
            "kind": "p",
            "text": "余弦公式变形后很简洁：已知其中两个量，就可以还原第三个。"
          },
          {
            "kind": "h3",
            "text": "如何求邻边"
          },
          {
            "kind": "p",
            "text": "从 [[\\cos(A)=b/c]] 出发，两边同乘 [[c]]："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{b=c\\cos(A)}]]]"
          },
          {
            "kind": "p",
            "text": "已知 [[c=10\\text{ m}]]、[[A=60^\\circ]]：[[b=10\\cos(60^\\circ)]]，又因为 [[\\cos(60^\\circ)=0.5]]，所以 [[\\boxed{b=5\\text{ m}}]]：这个角下邻边是斜边的一半。"
          },
          {
            "kind": "h3",
            "text": "如何求斜边"
          },
          {
            "kind": "p",
            "text": "把公式解为 [[c]]，得到："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{c=\\frac{b}{\\cos(A)}}]]]"
          },
          {
            "kind": "p",
            "text": "已知 [[b=4\\text{ m}]]、[[A=60^\\circ]]：[[c=4/0.5]]，所以 [[\\boxed{c=8\\text{ m}}]]。"
          },
          {
            "kind": "h3",
            "text": "如何从余弦比求角"
          },
          {
            "kind": "p",
            "text": "余弦比和角是不同的量。如果已知比值，反余弦（也叫 arccosine）可以还原角："
          },
          {
            "kind": "p",
            "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{b}{c}\\right)}]]]"
          },
          {
            "kind": "p",
            "text": "已知 [[\\cos(A)=0.8]]：[[A=\\cos^{-1}(0.8)]]，所以 [[\\boxed{A\\approx36.87^\\circ}]]；先把科学计算器调到角度模式。这些是数学变形：本页的工具返回的是比值本身。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-mistakes": {
        "h2": "计算余弦时的常见错误",
        "blocks": [
          {
            "kind": "h3",
            "text": "错误与正确"
          },
          {
            "kind": "p",
            "text": "已知 [[b=4]] 和 [[c=5]]："
          },
          {
            "kind": "p",
            "text": "错误：[[5/4=1.25]]。这是余弦的倒数，叫正割，不是余弦比。"
          },
          {
            "kind": "p",
            "text": "正确：[[\\cos(A)=4/5=0.8]]。"
          },
          {
            "kind": "p",
            "text": "锐角的有效余弦恒介于 0 和 1 之间。"
          }
        ],
        "steps": [
          "<strong>用了对边而不是邻边。</strong>这样算出的是 [[a/c]]，即正弦。修正：选择与角 [[A]] 相接的直角边。",
          "<strong>把分数写反成 [[c/b]]。</strong>答案会大于 1。修正：较长的边必须是分母。",
          "<strong>把余弦和正弦混淆。</strong>对 3-4-5 三角形报出 0.6。修正：正弦用对边，余弦用邻边。",
          "<strong>把余弦和正割混淆。</strong>算成了 [[c/b]]。修正：正割是余弦的倒数，恒大于 1。",
          "<strong>输入的邻边比斜边长。</strong>这些输入描述的是不可能的三角形。修正：斜边输入框里必须放较长的测量值。",
          "<strong>输入零或负的边长。</strong>除以零或无意义的负比值。修正：只使用正的长度。",
          "<strong>混用了测量单位。</strong>厘米除以米会让比值偏差 100 倍。修正：先把两条边换算成同一单位。",
          "<strong>把余弦报成以度为单位的角。</strong>写成 0.8 度。修正：比值是纯数字，不是角。",
          "<strong>以为余弦比有单位。</strong>单位在除法中已经抵消。修正：答案去掉单位。",
          "<strong>把参考角和另一个锐角搞混。</strong>邻边和对边的标号会调换。修正：先在图上标出角 [[A]]。",
          "<strong>过早四舍五入。</strong>在乘回去之前把 [[12/13]] 舍入为 0.92，会引入不必要的误差。修正：保留更多小数位，直到最后一步。",
          "<strong>以为余弦对所有三角形都一样。</strong>把一个值用在形状不同的三角形上。修正：余弦取决于三角形的比例。",
          "<strong>以为比值直接给出以度为单位的角。</strong>把 0.8 读成角。修正：用反余弦还原度数。",
          "<strong>把 0.8 的余弦读成 0.8 度。</strong>把比值和角混淆。修正：0.8 是比值；角约为 36.87 度。",
          "<strong>确定参考角之前就给边命名。</strong>邻边和对边会混淆。修正：先确定角 [[A]]，再给边命名。"
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-verify": {
        "h2": "如何检查余弦结果是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "有效、非退化的直角三角形要求 [[0 \\lt b \\lt c]]，因此 [[0 \\lt b/c \\lt 1]]。两个测量值必须使用兼容的单位，余弦结果必须大于 0 且小于 1。1 或更大的结果通常表示输入调换、边识别错误或测量值不兼容。"
          },
          {
            "kind": "h3",
            "text": "方法 1：检查比值"
          },
          {
            "kind": "p",
            "text": "直接验证 [[\\cos(A)=b/c]]。已知 [[b=4]]、[[c=5]]：[[4/5=0.8]]。"
          },
          {
            "kind": "h3",
            "text": "方法 2：检查勾股定理"
          },
          {
            "kind": "p",
            "text": "如果对边已知或需要，计算 [[a=\\sqrt{c^2-b^2}]]。已知 [[b=4]]、[[c=5]]：[[a=\\sqrt{25-16}=3]]，且 [[3^2+4^2=5^2]]。这确认了 3-4-5 直角三角形的尺寸。"
          },
          {
            "kind": "h3",
            "text": "方法 3：用反余弦检查"
          },
          {
            "kind": "p",
            "text": "如果比值是 0.8：[[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。然后验证角和边的比值是否一致。四舍五入可能导致微小差异。"
          }
        ],
        "steps": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
      },
      "cos-vs": {
        "h2": "余弦与正弦、正切、正割的对比",
        "blocks": [
          {
            "kind": "p",
            "text": "每个比值比较的是不同的边对，参考角和边的标号相同："
          },
          {
            "kind": "p",
            "text": "正割是余弦的倒数：[[\\sec(A)=1/\\cos(A)]]。如果 [[\\cos(A)=0.8]]，则 [[\\sec(A)=1/0.8=1.25]]。求邻边或水平投影时用余弦，求垂直分量时用正弦，不涉及斜边时用正切，公式需要倒数时用正割。"
          },
          {
            "kind": "p",
            "text": "相邻的比值请参阅 <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比计算器</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">正切比计算器</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比计算器</a> 和 <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比计算器</a>。"
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
              ["余弦", "cos(A) = b/c", "邻边比斜边"],
              ["正切", "tan(A) = a/b", "对边比邻边"],
              ["正割", "sec(A) = c/b", "斜边比邻边"],
              ["余割", "csc(A) = c/a", "斜边比对边"],
              ["余切", "cot(A) = b/a", "邻边比对边"]
            ]
          }
        ],
        "figures": []
      },
      "cos-related": {
        "h2": "探索相关的三角计算器",
        "blocks": [],
        "steps": [],
        "listItems": [],
        "related": [
          {
            "name": "正弦比计算器"
          },
          {
            "name": "正切比计算器"
          },
          {
            "name": "正割比计算器"
          },
          {
            "name": "余割比计算器"
          },
          {
            "name": "直角三角形角度计算器"
          },
          {
            "name": "直角三角形边长计算器"
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
        "question": "直角三角形中余弦比的公式是什么？",
        "answer": "cos(A) = b / c：用角 A 的邻边除以斜边。邻边为 4 厘米、斜边为 5 厘米时，结果为 4/5 = 0.8。"
      },
      {
        "question": "如何用两条边长计算余弦？",
        "answer": "用相同单位测量邻边 b 和斜边 c，确认 c 长于 b，然后计算 cos(A) = b / c。当 b = 12 米、c = 13 米时，答案是 12/13，约 0.9231。"
      },
      {
        "question": "余弦和正弦有什么区别？",
        "answer": "余弦用邻边除以斜边 (b/c)；正弦用对边除以斜边 (a/c)。在 3-4-5 三角形中，cos(A) = 0.8，sin(A) = 0.6。"
      },
      {
        "question": "为什么直角三角形中锐角的余弦小于 1？",
        "answer": "斜边是最长的边，所以 b 恒小于 c。较小的正数除以较大的正数，结果小于 1；两条边都是正数，所以结果大于 0。"
      },
      {
        "question": "有效直角三角形中余弦可以大于 1 吗？",
        "answer": "不可以。大于 1 的余弦需要邻边比斜边长，在真正的直角三角形中不可能。如果工具显示 1 或更大的值，说明输入调换了、用的直角边错了，或测量值不兼容。"
      },
      {
        "question": "余弦值 0.8 是什么意思？",
        "answer": "邻边是斜边长度的 80%：4 米 / 5 米 = 0.8。这个数描述的是三角形的形状，不是角；对应的角约为 36.87 度，用反余弦求得。"
      },
      {
        "question": "余弦比有单位吗？",
        "answer": "没有。两条边用相同单位测量，除法中单位相互抵消：4 米 / 5 米 = 0.8，400 厘米 / 500 厘米 = 0.8。余弦应报为纯粹的无量纲数，绝不要带上度、米或英尺。"
      },
      {
        "question": "如何从余弦比求角？",
        "answer": "用反余弦 (arccosine)：A = cos^-1(比值)。0.8 对应的 A = cos^-1(0.8)，约 36.87 度。本页的计算器返回比值而不是角，所以先把计算器调到角度模式。"
      },
      {
        "question": "如何用余弦求邻边？",
        "answer": "把公式变形为 b = c x cos(A)。用斜边乘以角的余弦。当 c = 10 米、角 A = 60 度时，cos(60 度) = 0.5，所以 b = 10 x 0.5 = 5 米。"
      },
      {
        "question": "余弦和正割有什么区别？",
        "answer": "正割是余弦的倒数：sec(A) = c / b，即 1 / cos(A)。余弦给出小于 1 的值；正割把分数翻转，给出大于 1 的值。如果 cos(A) = 0.8，则 sec(A) = 1.25。"
      },
      {
        "question": "不知道对边也能计算余弦吗？",
        "answer": "能。余弦只需要邻边和斜边；对边在 cos(A) = b/c 中不起作用，这就是本计算器从不询问它的原因。"
      },
      {
        "question": "余弦如何用于实际测量？",
        "answer": "余弦是求水平投影的工具：从梯子长度求地面距离，从椽子长度求水平跨度，或求力的水平分量。用斜边乘以 cos(A) 得到邻边，或用比值验证测量值是否符合直角三角形。"
      }
    ],
    "conclusion": {
      "h2": "自信地掌握余弦比",
      "paragraphs": [
        "余弦是邻边覆盖斜边的份额：用 [[b]] 除以 [[c]] 来描述三角形的形状。公式 [[\\cos(A)=b/c]] 只需要两个测量值，答案恒为 0 和 1 之间的无量纲数，变形后的 [[b=c\\cos(A)]] 和 [[A=\\cos^{-1}(b/c)]] 可以还原缺失的边或角。梯子、椽子，还是课本上的 3-4-5，方法永远不变：确定邻边，确定斜边，相除，验证。"
      ]
    }
  }
};
