/**
 * missingAngleGuideTranslations.batch3.ts
 * Translations of the Right Triangle Missing Angle Calculator guide (MissingAngleGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese Simplified (zh).
 *
 * Built from the user's actual master prompt (Page 8 of 45). Follows the locked
 * translation prompt (TRANSLATION_PROMPT.md, 2026-10-30).
 *
 * Structure per language:
 * - tocHeading, tocItems (14 entries keyed by section id)
 * - sections (13 entries: missing-intro, missing-angles, missing-formula,
 *   missing-howto, missing-examples, missing-applications, missing-relationship,
 *   missing-reverse, missing-vs, missing-mistakes, missing-verify, missing-choose,
 *   missing-conclusion)
 *   Each section: h2 + blocks (ordered {kind: 'p'|'h3', text}). Optional: steps (howto),
 *   listItems (mistakes, reverse, choose), closingParagraphs (howto, reverse, choose),
 *   table {headers, rows} (applications, relationship, vs),
 *   imgAlt, figcaption (angles, formula, relationship, vs).
 * - faqs (12 question/answer pairs, top-level)
 * - relatedHeading, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX [[...]]/[[[...]]] markup, variable names, numbers, units, URLs,
 * and HTML tags are preserved exactly as in the English source. No em dashes.
 * Arabic (ar) content is RTL-appropriate; math markup stays LTR.
 */

export const MISSINGANGLE_TRANSLATIONS_BATCH3 = {
  "id": {
  "sections": {
    "missing-intro": {
      "h2": "Cara Menemukan Sudut yang Hilang dalam Segitiga Siku-Siku",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika salah satu sudut lancip segitiga siku-siku berukuran [[35^\\circ]], sudut yang hilang adalah [[90^\\circ-35^\\circ=55^\\circ]]. Satu pengurangan itu adalah seluruh perhitungannya. Segitiga siku-siku selalu memuat satu sudut 90 derajat, sehingga dua sudut sisanya harus berbagi tepat 90 derajat yang tersisa. Mengurangkan sudut yang diketahui dari 90 derajat akan mengungkapkan sudut yang hilang, tanpa perlu panjang sisi dan tanpa fungsi trigonometri."
        },
        {
          "kind": "p",
          "text": "Jawabannya, 55 derajat dalam contoh ini, adalah sudut lancip lainnya dalam segitiga siku-siku yang sama. Kedua sudut itu selalu bekerja sebagai pasangan: mengetahui salah satunya menentukan yang lain sepenuhnya. Kalkulator ini memang dibuat untuk situasi itu, ketika sebuah sudut sudah diketahui dan hanya komplemennya yang hilang. Ketika belum ada sudut yang diketahui, kalkulator sudut dari tangen atau kalkulator sudut dari sinus dan kosinusnya akan menurunkan sudut pertama dari sisi-sisi yang terukur."
        }
      ]
    },
    "missing-angles": {
      "h2": "Apa Saja Sudut dalam Segitiga Siku-Siku?",
      "blocks": [
        {
          "kind": "h3",
          "text": "Sudut Siku-Siku"
        },
        {
          "kind": "p",
          "text": "Sudut 90 derajat melambangkan sudut sempurna, sudut antara dinding vertikal dan lantai yang datar. Dalam setiap segitiga siku-siku, sudut ini tetap: tidak pernah berubah besarnya, dan diagram menandainya dengan kotak kecil di titik sudut. Karena satu sudut sudah tetap 90 derajat, dua sudut lainnya hanya punya 90 derajat tersisa untuk dibagi berdua, yang memaksa keduanya menjadi sudut lancip."
        },
        {
          "kind": "h3",
          "text": "Dua Sudut Lancip"
        },
        {
          "kind": "p",
          "text": "Sudut lancip berukuran lebih dari [[0^\\circ]] dan kurang dari [[90^\\circ]]. Kedua sudut segitiga siku-siku yang tersisa berada dalam rentang ini, dan keduanya disebut komplementer karena jumlah ukurannya selalu 90 derajat. Pasangannya bersifat ketat: satu sudut lancip yang diketahui hanya menyisakan satu nilai yang mungkin bagi pasangannya, sehingga sudut yang hilang tidak pernah soal perkiraan."
        },
        {
          "kind": "h3",
          "text": "Apa Itu Sudut Komplementer?"
        },
        {
          "kind": "p",
          "text": "Dua sudut disebut komplementer ketika jumlah ukurannya [[90^\\circ]]. Pasangan [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]], dan [[45^\\circ+45^\\circ=90^\\circ]] semuanya komplementer. Sudut komplementer tidak harus sama besar; kesamaan hanya terjadi pada masing-masing 45 derajat. Setiap dua sudut positif yang berjumlah 90 derajat memenuhi syarat, baik keduanya berada di dalam segitiga yang sama maupun tidak."
        },
        {
          "kind": "h3",
          "text": "Mengapa Jumlah Sudut Segitiga Sama dengan 180 Derajat"
        },
        {
          "kind": "p",
          "text": "Setiap segitiga, apa pun bentuknya, memuat tepat 180 derajat di ketiga sudut dalamnya. Dalam segitiga siku-siku, sudut siku-siku yang tetap langsung mengklaim 90 dari derajat itu, sehingga tersisa tepat 90 derajat untuk kedua sudut lancip digabung. Diagram di bawah menunjukkan perhitungan lengkap untuk segitiga dengan sudut 35, 55, dan 90 derajat."
        }
      ],
      "imgAlt": "Segitiga siku-siku dengan label sudut A 35 deg, B 55 deg, C 90 deg",
      "figcaption": "Sudut A (35 deg) dan B (55 deg) komplementer: A + B = 90 deg, dan 35 + 55 + 90 = 180 deg."
    },
    "missing-formula": {
      "h2": "Rumus Mencari Sudut yang Hilang",
      "blocks": [
        {
          "kind": "p",
          "text": "Rumus ini berasal langsung dari aturan jumlah sudut segitiga. Mulai dari pernyataan umum:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Karena segitiganya siku-siku, sudut ketiga tetap:"
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Substitusikan nilai itu ke dalam jumlah sudut:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Kurangkan 90 derajat dari kedua ruas, dan kedua sudut lancip berdiri sendiri:"
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Terakhir, kurangkan sudut yang diketahui [[A]] dari kedua ruas untuk mengisolasi sudut yang hilang:"
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "Setiap langkah adalah aljabar biasa yang diterapkan pada fakta geometris. Tidak ada yang dihafal begitu saja: angka 90 derajat dalam rumus adalah bagian dari jumlah sudut yang tersisa setelah sudut siku-siku mengambil setengahnya."
        },
        {
          "kind": "p",
          "text": "Hubungan yang sama bekerja secara terbalik. Jika sudut [[B]] yang diketahui, menyelesaikan untuk [[A]] menghasilkan:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Kalkulator ini memakai bentuk pertama karena kolom masukannya menerima sudut [[A]] dan mengembalikan sudut [[B]]. Kedua rumus itu bukan aturan yang berbeda; keduanya adalah hubungan sudut komplementer yang sama, diselesaikan untuk variabel yang berbeda."
        },
        {
          "kind": "h3",
          "text": "Mengapa 90 Derajat, Bukan 180 Derajat"
        },
        {
          "kind": "p",
          "text": "Kesalahan yang sering terjadi adalah mengurangkan sudut yang diketahui dari 180 derajat. Total itu mencakup ketiga sudut segitiga, sehingga menggunakannya saja melupakan bahwa sudut siku-siku sudah diperhitungkan. Dengan [[A=35^\\circ]], perhitungan yang salah menghasilkan [[180^\\circ-35^\\circ=145^\\circ]], yang tidak mungkin menjadi sudut lancip segitiga siku-siku mana pun. Perhitungan yang benar, [[90^\\circ-35^\\circ=55^\\circ]], menghormati sudut siku-siku dan bisa langsung dicek: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
        }
      ],
      "imgAlt": "Dua panel yang membandingkan jumlah 180 deg seluruh segitiga dengan pasangan lancip 90 deg",
      "figcaption": "Bagian A menunjukkan jumlah seluruh sudut segitiga; Bagian B mengisolasi sudut lancip komplementer."
    },
    "missing-howto": {
      "h2": "Cara Menggunakan Kalkulator Sudut Hilang Segitiga Siku-Siku",
      "blocks": [
        {
          "kind": "p",
          "text": "Panduan di bawah ini sesuai dengan tampilan antarmuka yang sebenarnya di halaman ini."
        }
      ],
      "steps": [
        "<strong>Kenali segitiga siku-sikunya.</strong> Pastikan bentuknya benar-benar memiliki sudut 90 derajat sebelum melakukan hal lain; rumus ini hanya berlaku untuk segitiga siku-siku.",
        "<strong>Temukan sudut lancip yang sudah Anda ketahui.</strong> Ini adalah sudut [[A]], nilai yang akan Anda ketik ke kalkulator.",
        "<strong>Pastikan sudut yang diketahui itu valid.</strong> Sudut itu harus lebih besar dari [[0^\\circ]] dan kurang dari [[90^\\circ]]. Apa pun di luar rentang itu tidak bisa menjadi sudut lancip segitiga siku-siku.",
        "<strong>Masukkan sudut [[A]] yang diketahui dalam derajat.</strong> Kolom masukan menerima nilai desimal seperti 68,5, jadi pertahankan ketelitian pengukuran Anda.",
        "<strong>Klik Hitung Sudut B.</strong> Alat ini menerapkan [[B=90^\\circ-A]] pada masukan Anda.",
        "<strong>Baca sudut komplementer yang dihitung.</strong> Hasilnya adalah sudut [[B]] dalam derajat.",
        "<strong>Jumlahkan kedua sudut lancip untuk memeriksa hasilnya.</strong> Jumlahnya harus sama dengan 90 derajat; jika tidak, periksa kembali masukannya.",
        "<strong>Gunakan Reset ketika Anda ingin memulai perhitungan baru.</strong> Ini menghapus masukan sehingga sudut baru bisa dimasukkan."
      ],
      "closingParagraphs": [
        "Coba perhatikan apa yang tidak pernah ditanyakan kalkulator: tidak ada panjang sisi depan, tidak ada panjang sisi samping, tidak ada hipotenusa, dan tidak ada nilai sinus, kosinus, atau tangen. Satu sudut lancip yang diketahui adalah seluruh masukannya karena aturan jumlah sudut melakukan sisanya. Alat ini juga tidak menerima radian atau masukan langsung sudut [[B]]; kolom masukannya khusus untuk sudut [[A]] dalam derajat."
      ]
    },
    "missing-examples": {
      "h2": "Contoh Langkah demi Langkah Menemukan Sudut yang Hilang",
      "blocks": [
        {
          "kind": "p",
          "text": "Empat contoh ini membangun keterampilan inti sebelum aplikasi dunia nyatanya. Masing-masing mengikuti pola yang sama: tulis rumusnya, substitusikan, kurangkan."
        },
        {
          "kind": "h3",
          "text": "Contoh 1: Sudut yang Diketahui 35 Derajat"
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=35^\\circ]], tentukan sudut [[B]]."
        },
        {
          "kind": "p",
          "text": "Langkah 1: Tulis rumusnya. [[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "Langkah 2: Substitusikan sudut yang diketahui. [[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Langkah 3: Kurangkan. [[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Cek: [[35^\\circ+55^\\circ=90^\\circ]]. Jawabannya valid karena kedua sudut lancip berjumlah tepat 90 derajat dan masing-masing berada di antara 0 dan 90 derajat secara ketat."
        },
        {
          "kind": "h3",
          "text": "Contoh 2: Sudut yang Diketahui 20 Derajat"
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=20^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Sudut lancip yang lebih kecil menghasilkan sudut komplementer yang lebih besar. Karena pasangan itu harus selalu berjumlah 90 derajat, setiap derajat yang diambil dari satu sudut ditambahkan ke sudut lainnya. Di sini sudut 20 derajat menyisakan 70 derajat yang lumayan besar untuk pasangannya."
        },
        {
          "kind": "h3",
          "text": "Contoh 3: Segitiga Siku-Siku Sama Kaki"
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=45^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Kedua sudut lancip sama besar, masing-masing 45 derajat. Inilah segitiga siku-siku sama kaki, satu-satunya segitiga siku-siku yang sudut lancipnya cocok. Kedua kakinya juga sama panjang, itulah sebabnya segitiga 45-45-90 sering muncul dalam tata letak gambar teknik dan konstruksi."
        },
        {
          "kind": "h3",
          "text": "Contoh 4: Sudut yang Diketahui 68,5 Derajat"
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=68.5^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Sudut lancip yang relatif besar memiliki komplemen yang relatif kecil. Masukan desimal bekerja persis seperti masukan bilangan bulat: kurangkan dengan hati-hati, jaga agar ,5 tetap sejajar, dan 90 kurang 68,5 menghasilkan 21,5. Ceknya tetap berlaku: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
        }
      ]
    },
    "missing-applications": {
      "h2": "Aplikasi Sudut Hilang dalam Kehidupan Nyata",
      "blocks": [
        {
          "kind": "p",
          "text": "Satu hal perlu diperhatikan sebelum contoh dimulai. Rumus sudut hilang berlaku langsung ketika dua sudut itu milik segitiga siku-siku yang sama. Dalam situasi praktis, permukaan horizontal dan permukaan vertikal sering berfungsi sebagai garis acuan yang tegak lurus, dan komponen diagonal seperti tangga atau kaso atap membentuk hipotenusanya. Contoh-contoh di bawah menyatakan asumsi itu di mana pun ia dipakai."
        },
        {
          "kind": "h3",
          "text": "Contoh 5: Menemukan Sudut Kaso Atap terhadap Garis Vertikal"
        },
        {
          "kind": "p",
          "text": "Kaso atap membentuk sudut [[35^\\circ]] dengan garis horizontal. Tentukan sudut antara kaso yang sama dengan garis acuan vertikal."
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=35^\\circ]] diukur dari garis horizontal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Garis acuan horizontal dan vertikal saling tegak lurus, sehingga kedua sudut itu komplementer. Hasil 55 derajat adalah sudut terhadap garis vertikal, bukan perhitungan kemiringan atap atau perhitungan struktur yang lengkap."
        },
        {
          "kind": "h3",
          "text": "Contoh 6: Menemukan Sudut Tangga terhadap Dinding"
        },
        {
          "kind": "p",
          "text": "Sebuah tangga bersandar pada dinding vertikal dan membentuk sudut [[68^\\circ]] dengan tanah yang datar. Tentukan sudut antara tangga dan dinding."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Tanah dan dinding membentuk sudut siku-siku dalam model ideal ini, dengan tangga sebagai hipotenusa. Sudut 22 derajat menggambarkan orientasi tangga terhadap dinding. Perhitungan ini saja tidak memastikan apakah tangga diposisikan dengan aman."
        },
        {
          "kind": "h3",
          "text": "Contoh 7: Memahami Sudut Ramp terhadap Garis Vertikal"
        },
        {
          "kind": "p",
          "text": "Sebuah ramp lurus membentuk sudut [[8^\\circ]] dengan garis horizontal. Tentukan sudut komplementer antara arah ramp dan garis acuan vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Sudut ramp terhadap garis vertikal adalah komplemen dari sudutnya terhadap garis horizontal. Kemiringan landai 8 derajat menyisakan sudut curam 82 derajat terhadap garis vertikal. Sudut ini saja tidak menentukan aksesibilitas atau kepatuhan terhadap aturan bangunan."
        },
        {
          "kind": "h3",
          "text": "Contoh 8: Menemukan Sudut Komplementer Stringer Tangga"
        },
        {
          "kind": "p",
          "text": "Stringer tangga membentuk sudut [[32^\\circ]] dengan lantai. Hitung sudutnya terhadap garis acuan vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Lantai, garis acuan vertikal, dan stringer diagonal membentuk segitiga siku-siku. Hasil 58 derajat menggambarkan orientasi stringer terhadap garis vertikal. Ini tidak memverifikasi dimensi tangga atau kepatuhan terhadap aturan bangunan."
        },
        {
          "kind": "h3",
          "text": "Contoh 9: Menghitung Sudut Penyangga Diagonal terhadap Penopang Vertikal"
        },
        {
          "kind": "p",
          "text": "Sebuah penyangga diagonal membentuk sudut [[40^\\circ]] dengan balok horizontal. Tentukan sudut antara penyangga dan penopang vertikal yang tegak lurus."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Kedua arah acuan harus tegak lurus agar aturan komplemen berlaku. Sudut 50 derajat adalah hasil geometri murni; ini tidak menentukan kekuatan struktural penyangga."
        },
        {
          "kind": "h3",
          "text": "Contoh 10: Menemukan Sudut Kawat Penahan terhadap Tiang Vertikal"
        },
        {
          "kind": "p",
          "text": "Sebuah kawat penahan membentuk sudut [[30^\\circ]] dengan tanah yang datar. Tentukan sudut antara kawat dan tiang vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Tanah horizontal dan tiang vertikal membentuk sudut siku-siku, dengan kawat sebagai hipotenusa. Hasil 60 derajat membingkai ulang arah kawat yang sama terhadap acuan vertikal. Ini tidak memastikan ketegangan kawat atau keamanan jangkarnya."
        },
        {
          "kind": "h3",
          "text": "Contoh 11: Mengubah Sudut Elevasi menjadi Komplemennya"
        },
        {
          "kind": "p",
          "text": "Diagram survei mencatat garis pandang pada sudut elevasi [[24^\\circ]] di atas garis horizontal. Hitung sudut komplementernya terhadap garis vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Sudut yang diukur dari garis horizontal dan sudut yang diukur dari garis vertikal menggambarkan garis pandang yang sama dari sudut pandang yang tegak lurus. Contoh ini mengasumsikan garis pandang lurus dengan acuan horizontal dan vertikal yang tegak lurus."
        },
        {
          "kind": "h3",
          "text": "Contoh 12: Menemukan Sudut Kemiringan Atap terhadap Acuan Vertikal"
        },
        {
          "kind": "p",
          "text": "Kemiringan atap diukur [[27^\\circ]] terhadap garis horizontal. Tentukan sudut komplementernya terhadap garis vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Kedua pengukuran itu menggambarkan kemiringan yang sama dari arah acuan tegak lurus yang berbeda. Tidak satu pun pengukuran itu sendiri yang merupakan penilaian struktural."
        },
        {
          "kind": "h3",
          "text": "Contoh 13: Diagonal dalam Tata Letak Gambar Teknik Persegi"
        },
        {
          "kind": "p",
          "text": "Sebuah garis diagonal dalam tata letak gambar teknik persegi membentuk sudut [[45^\\circ]] dengan satu sisinya. Tentukan sudut yang dibentuknya dengan sisi tegak lurus yang bersebelahan."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Diagonal itu membagi dua sudut siku-siku persegi, sehingga kedua sudut hasilnya adalah 45 derajat. Hubungan ini membantu pemeriksaan gambar dan tata letak dasar: jika diagonal yang diukur tidak membagi sudutnya secara merata, tata letaknya tidak persegi."
        },
        {
          "kind": "h3",
          "text": "Contoh 14: Menemukan Sudut Komplementer Panel Mesin"
        },
        {
          "kind": "p",
          "text": "Sebuah panel dimiringkan [[15^\\circ]] menjauhi garis horizontal. Hitung sudut antara orientasi panel dan arah acuan vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Acuan horizontal dan vertikal saling tegak lurus, sehingga kemiringan panel dan komplemennya menggambarkan orientasi yang sama. Hasilnya hanya menggambarkan orientasi, bukan keamanan atau kinerja mesin."
        },
        {
          "kind": "h3",
          "text": "Contoh 15: Mengubah Sudut Pengamatan Pohon"
        },
        {
          "kind": "p",
          "text": "Seseorang memandang ke puncak pohon pada sudut elevasi [[38^\\circ]] di atas garis horizontal. Tentukan sudut komplementer antara garis pandang dan arah acuan vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Perhitungan ini mengubah arah acuan, bukan garis pandangnya sendiri. Sudut 52 derajat hanyalah tatapan yang sama yang diukur terhadap garis vertikal. Ini tidak menghitung tinggi pohon."
        },
        {
          "kind": "h3",
          "text": "Contoh 16: Menemukan Sudut Pegangan Tangga terhadap Penopang Vertikal"
        },
        {
          "kind": "p",
          "text": "Sebuah pegangan tangga diagonal membentuk sudut [[55^\\circ]] dengan bordes horizontal. Tentukan sudut komplementernya terhadap garis penopang vertikal."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Sudut komplementer menggambarkan orientasi diagonal yang sama dari acuan yang berbeda. Sudut curam 55 derajat terhadap garis horizontal menjadi sudut landai 35 derajat terhadap garis vertikal. Sudut itu saja tidak memverifikasi aksesibilitas atau persyaratan konstruksi."
        },
        {
          "kind": "h3",
          "text": "Perbandingan Contoh Praktis"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Situasi",
          "Sudut yang diketahui",
          "Arah acuan",
          "Sudut yang hilang",
          "Perhitungan",
          "Interpretasi"
        ],
        "rows": [
          [
            "Kaso atap",
            "35&deg;",
            "Horizontal",
            "55&deg;",
            "90 - 35",
            "Sudut kaso terhadap garis vertikal"
          ],
          [
            "Tangga",
            "68&deg;",
            "Tanah",
            "22&deg;",
            "90 - 68",
            "Sudut tangga terhadap dinding"
          ],
          [
            "Ramp",
            "8&deg;",
            "Horizontal",
            "82&deg;",
            "90 - 8",
            "Arah ramp terhadap garis vertikal"
          ],
          [
            "Stringer tangga",
            "32&deg;",
            "Lantai",
            "58&deg;",
            "90 - 32",
            "Sudut stringer terhadap garis vertikal"
          ],
          [
            "Penyangga diagonal",
            "40&deg;",
            "Balok horizontal",
            "50&deg;",
            "90 - 40",
            "Sudut penyangga terhadap penopang vertikal"
          ],
          [
            "Kawat penahan",
            "30&deg;",
            "Tanah",
            "60&deg;",
            "90 - 30",
            "Sudut kawat terhadap tiang"
          ],
          [
            "Garis pandang survei",
            "24&deg;",
            "Horizontal",
            "66&deg;",
            "90 - 24",
            "Garis pandang terhadap garis vertikal"
          ],
          [
            "Kemiringan atap",
            "27&deg;",
            "Horizontal",
            "63&deg;",
            "90 - 27",
            "Sudut kemiringan terhadap garis vertikal"
          ],
          [
            "Diagonal gambar teknik",
            "45&deg;",
            "Satu sisi",
            "45&deg;",
            "90 - 45",
            "Diagonal terhadap sisi bersebelahan"
          ],
          [
            "Panel mesin",
            "15&deg;",
            "Horizontal",
            "75&deg;",
            "90 - 15",
            "Orientasi panel terhadap vertikal"
          ],
          [
            "Pengamatan pohon",
            "38&deg;",
            "Horizontal",
            "52&deg;",
            "90 - 38",
            "Garis pandang terhadap garis vertikal"
          ],
          [
            "Pegangan tangga",
            "55&deg;",
            "Bordes",
            "35&deg;",
            "90 - 55",
            "Pegangan tangga terhadap penopang vertikal"
          ]
        ]
      }
    },
    "missing-relationship": {
      "h2": "Memahami Hubungan Antara Sudut Komplementer",
      "blocks": [
        {
          "kind": "p",
          "text": "Polanya sangat mudah ditebak. Jika sudut [[A]] bertambah, sudut [[B]] berkurang tepat sebesar yang sama, karena jumlahnya terkunci pada 90 derajat. Jika [[A]] berkurang, [[B]] membesar untuk mengisi selisihnya. Pada [[A=45^\\circ]] keduanya bertemu di tengah, dan tidak ada sudut lancip yang bisa mencapai [[0^\\circ]] atau [[90^\\circ]] dalam segitiga siku-siku sejati dengan tiga titik sudut yang berbeda."
        },
        {
          "kind": "p",
          "text": "Tabel ini simetris di sekitar 45 derajat: pasangan (10, 80), (20, 70), dan (30, 60) saling bercermin karena menukar sudut yang diketahui dengan sudut yang hilang hanya membaca hubungan komplementer yang sama dari sisi lain. Empat panel di bawah membuat hubungan saling tukar ini menjadi visual."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Sudut yang diketahui A",
          "Rumus",
          "Sudut yang hilang B"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      },
      "imgAlt": "Empat segitiga yang menunjukkan pasangan komplementer 20-70, 30-60, 45-45, 70-20 deg",
      "figcaption": "Saat sudut A membesar, sudut B menyusut sebesar yang sama; jumlahnya tetap 90 deg."
    },
    "missing-reverse": {
      "h2": "Bagaimana Jika Anda Malah Mengetahui Sudut B?",
      "blocks": [
        {
          "kind": "p",
          "text": "Aturan sudut komplementer yang sama bekerja secara terbalik. Jika sudut [[B]] yang diketahui, selesaikan hubungan itu untuk [[A]]:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Tidak diperlukan rumus baru; rumusnya adalah persamaan yang identik dengan peran yang dipertukarkan."
        },
        {
          "kind": "h3",
          "text": "Contoh Pengerjaan"
        },
        {
          "kind": "p",
          "text": "Diketahui [[B=62^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Tiga contoh singkat arah terbalik lainnya mengikuti langkah yang sama:"
        }
      ],
      "listItems": [
        "[[B=15^\\circ]], sehingga [[A=90^\\circ-15^\\circ=75^\\circ]].",
        "[[B=42^\\circ]], sehingga [[A=90^\\circ-42^\\circ=48^\\circ]].",
        "[[B=70^\\circ]], sehingga [[A=90^\\circ-70^\\circ=20^\\circ]]."
      ],
      "closingParagraphs": [
        "Catatan praktis: kolom masukan kalkulator ini menerima sudut [[A]] dan mengembalikan sudut [[B]]. Pembaca yang hanya mengetahui sudut [[B]] sebaiknya menerapkan rumus kebalikan secara manual kecuali antarmukanya terbukti mendukung memasukkan [[B]] secara langsung."
      ]
    },
    "missing-vs": {
      "h2": "Sudut Komplementer vs. Sudut Suplementer",
      "blocks": [
        {
          "kind": "p",
          "text": "Kedua istilah itu terdengar mirip dan sama-sama menggambarkan pasangan sudut, tetapi keduanya menjawab pertanyaan yang berbeda."
        },
        {
          "kind": "h3",
          "text": "Sudut Komplementer"
        },
        {
          "kind": "p",
          "text": "Dua sudut komplementer ketika jumlahnya [[90^\\circ]]. Dua sudut lancip segitiga siku-siku adalah contoh bakunya: keduanya harus komplementer karena sudut siku-siku sudah mengklaim 90 derajat lainnya dari total segitiga."
        },
        {
          "kind": "h3",
          "text": "Sudut Suplementer"
        },
        {
          "kind": "p",
          "text": "Dua sudut suplementer ketika jumlahnya [[180^\\circ]]. Garis lurus, misalnya, dapat dibagi menjadi dua sudut suplementer. Pasangan suplementer tidak boleh dikacaukan dengan dua sudut lancip segitiga siku-siku, yang berjumlah 90, bukan 180."
        },
        {
          "kind": "p",
          "text": "Jumlah seluruh sudut segitiga adalah 180 derajat, tetapi kedua sudut lancip digabung berjumlah 90 derajat. Menjaga kedua total itu tetap terpisah adalah kunci untuk menghindari kesalahan paling umum di halaman ini."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Hubungan",
          "Total",
          "Contoh"
        ],
        "rows": [
          [
            "Komplementer",
            "90&deg;",
            "35 + 55"
          ],
          [
            "Suplementer",
            "180&deg;",
            "110 + 70"
          ],
          [
            "Sudut siku-siku",
            "90&deg;",
            "Sudut tetap dalam segitiga siku-siku"
          ]
        ]
      },
      "imgAlt": "Empat panel yang menunjukkan sudut komplementer untuk tangga, kaso, penyangga, dan diagonal persegi",
      "figcaption": "Pasangan komplementer dalam situasi nyata: setiap sudut yang diketahui menentukan pasangannya."
    },
    "missing-mistakes": {
      "h2": "Kesalahan Umum Saat Menemukan Sudut yang Hilang",
      "blocks": [
        {
          "kind": "h3",
          "text": "Salah vs. Benar"
        },
        {
          "kind": "p",
          "text": "Diketahui [[A=35^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "Salah: [[180^\\circ-35^\\circ=145^\\circ]]. Ini bukan sudut lancip yang hilang karena sudut siku-siku belum diperhitungkan; 145 derajat tidak bisa berada di dalam segitiga siku-siku bersama sudut 90 derajat."
        },
        {
          "kind": "p",
          "text": "Benar: [[90^\\circ-35^\\circ=55^\\circ]]."
        },
        {
          "kind": "p",
          "text": "Verifikasi: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Jumlah seluruh sudut menegaskan jawabannya."
        }
      ],
      "listItems": [
        "<strong>Mengurangkan sudut yang diketahui dari 180 derajat, bukan 90.</strong> Total 180 derajat sudah mencakup sudut siku-siku, yang memang sudah tetap. Yang keliru: dengan [[A=35^\\circ]] perhitungan yang salah menghasilkan 145 derajat, sudut lancip yang mustahil. Perbaikan: kurangkan dari 90, sehingga diperoleh [[55^\\circ]].",
        "<strong>Lupa bahwa satu sudut sudah 90 derajat.</strong> Sudut siku-siku mudah terlewat karena tidak perlu dihitung. Yang keliru: memperlakukan segitiga seolah ketiga sudutnya tidak diketahui. Perbaikan: ingat bahwa sudut siku-siku mengklaim setengah dari total 180 derajat sebelum Anda mulai.",
        "<strong>Memasukkan 90 derajat ke kalkulator.</strong> Alat ini mengharapkan sudut lancip yang benar-benar di antara 0 dan 90 derajat. Yang keliru: masukan 90 derajat tidak menyisakan ruang untuk sudut lancip kedua. Perbaikan: masukkan hanya sudut lancip yang diketahui.",
        "<strong>Memasukkan sudut yang lebih besar dari 90 derajat.</strong> Tidak ada sudut lancip yang melebihi 90 derajat menurut definisi. Yang keliru: pengurangan menghasilkan hasil negatif, yang tidak memiliki makna geometris di sini. Perbaikan: periksa bahwa masukannya di bawah 90 derajat.",
        "<strong>Memasukkan 0 derajat.</strong> Sudut nol meruntuhkan segitiga menjadi segmen garis. Yang keliru: hasilnya mengklaim komplemen 90 derajat untuk bentuk tanpa luas. Perbaikan: gunakan hanya sudut lancip positif.",
        "<strong>Mengacaukan sudut komplementer dengan sudut suplementer.</strong> Pasangan komplementer berjumlah 90 derajat; pasangan suplementer berjumlah 180 derajat. Yang keliru: mengurangkan dari 180 menghasilkan kesalahan pada butir 1. Perbaikan: cocokkan istilahnya dengan totalnya, komplementer dengan 90.",
        "<strong>Menganggap kedua sudut lancip harus sama besar.</strong> Kesamaan hanya berlaku pada masing-masing 45 derajat. Yang keliru: mengharapkan simetri pada segitiga 20-70. Perbaikan: biarkan pengurangan yang memutuskan; sebagian besar pasangan berbeda.",
        "<strong>Tertukar label sudut A dan B.</strong> Kalkulator menerima [[A]] dan mengembalikan [[B]]. Yang keliru: memasukkan komplemen yang sudah diketahui seolah itu masukannya. Perbaikan: beri label A pada sudut yang diketahui sebelum mengetik apa pun.",
        "<strong>Mengira panjang sisi diperlukan untuk perhitungan khusus ini.</strong> Sisi penting untuk trigonometri, bukan untuk komplemen. Yang keliru: terhenti pada soal yang hanya butuh pengurangan. Perbaikan: jika sudut lancip diketahui, kurangkan dari 90 dan selesai.",
        "<strong>Menggunakan invers sinus, kosinus, atau tangen padahal pengurangan sederhana sudah cukup.</strong> Fungsi invers menjawab pertanyaan yang lebih sulit. Yang keliru: kerja ekstra dan peluang kesalahan mode ekstra. Perbaikan: ketika sudut diketahui, kalkulator sudut dari sinus dan saudara-saudaranya adalah alat yang salah; pengurangan itu tepat dan seketika.",
        "<strong>Menganggap sudut fisik yang terukur otomatis membentuk segitiga siku-siku tanpa memeriksa arah acuannya.</strong> Sudut nyata jarang sempurna. Yang keliru: menerapkan aturan komplemen di tempat sudut 90 derajat sebenarnya tidak ada. Perbaikan: verifikasi bahwa arah acuan saling tegak lurus sebelum mengurangkan.",
        "<strong>Membulatkan pengukuran masukan tanpa perlu sebelum mengurangkan.</strong> Pembulatan dini membuang ketelitian yang sebenarnya dimiliki masukan. Yang keliru: 68,5 dibulatkan menjadi 69 menghasilkan 21, bukan 21,5. Perbaikan: kurangkan dengan nilai terukur penuh, lalu bulatkan hasilnya sesuai ketelitian masukan."
      ]
    },
    "missing-verify": {
      "h2": "Cara Memeriksa Apakah Sudut Hilang Anda Valid",
      "blocks": [
        {
          "kind": "p",
          "text": "Rentang masukan yang valid adalah:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "dan sudut yang dihitung harus memenuhi rentang yang sama:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Masukan 0 atau 90 derajat akan menghasilkan kasus batas degeneratif, bukan segitiga siku-siku biasa dengan tiga titik sudut berbeda dan panjang sisi positif. Kalkulator menegakkan ketidaksamaan ketat ini tepat karena alasan itu."
        },
        {
          "kind": "h3",
          "text": "Metode 1: Jumlahkan Sudut Lancipnya"
        },
        {
          "kind": "p",
          "text": "Verifikasi [[A+B=90^\\circ]]. Contoh: [[35^\\circ+55^\\circ=90^\\circ]]. Ini pemeriksaan tercepat dan langsung menangkap kesalahan 180 derajat."
        },
        {
          "kind": "h3",
          "text": "Metode 2: Periksa Segitiga Lengkapnya"
        },
        {
          "kind": "p",
          "text": "Verifikasi [[A+B+90^\\circ=180^\\circ]]. Contoh: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Ini menegaskan jawaban terhadap jumlah sudut segitiga yang universal."
        },
        {
          "kind": "h3",
          "text": "Metode 3: Periksa Perhitungan Terbaliknya"
        },
        {
          "kind": "p",
          "text": "Jika [[B=90^\\circ-A]], maka [[A=90^\\circ-B]] harus memulihkan masukan semula. Dengan [[A=35^\\circ]] yang menghasilkan [[B=55^\\circ]], cek terbaliknya adalah [[90^\\circ-55^\\circ=35^\\circ]]. Pemeriksaan konsistensi ini sama sekali tidak membutuhkan pengukuran sisi."
        },
        {
          "kind": "p",
          "text": "Satu peringatan: jika sudut masukan berasal dari pengukuran fisik, ketidakpastiannya terbawa ke hasil. Angka 35 derajat yang diukur kasar menghasilkan 55 derajat yang juga kasar; laporkan jawaban dengan ketelitian yang sesuai pengukurannya. Untuk pemeriksaan yang melibatkan panjang sisi, kalkulator teorema Pythagoras dapat mengonfirmasi geometri segitiga secara independen."
        }
      ]
    },
    "missing-choose": {
      "h2": "Memilih Kalkulator Segitiga Siku-Siku yang Tepat",
      "blocks": [
        {
          "kind": "p",
          "text": "Setiap alat di bawah menjawab pertanyaan yang berbeda. Cocokkan alatnya dengan apa yang benar-benar Anda ketahui:"
        }
      ],
      "listItems": [
        "<strong>Kalkulator Sudut Hilang Segitiga Siku-Siku</strong> (halaman ini): menemukan sudut komplementer ketika satu sudut lancip sudah diketahui. Gunakan kapan pun masukannya berupa sudut, bukan sisi.",
        "<strong>Kalkulator Sudut dari Sinus Segitiga Siku-Siku</strong>: menemukan sudut lancip dari sisi depan dan hipotenusa. Gunakan ketika kedua panjang itu terukur.",
        "<strong>Kalkulator Sudut dari Kosinus Segitiga Siku-Siku</strong>: menemukan sudut lancip dari sisi samping dan hipotenusa.",
        "<strong>Kalkulator Sudut dari Tangen Segitiga Siku-Siku</strong>: menemukan sudut lancip dari sisi depan dan sisi samping, yaitu kedua kakinya.",
        "<strong>Kalkulator Sisi dari Sinus Segitiga Siku-Siku</strong>: menemukan panjang sisi yang hilang ketika sebuah sudut dan satu sisi diketahui.",
        "<strong>Kalkulator Sisi dari Kosinus Segitiga Siku-Siku</strong>: menemukan panjang sisi yang hilang dari sudut dan hipotenusa atau sisi samping yang diketahui.",
        "<strong>Kalkulator Sisi dari Tangen Segitiga Siku-Siku</strong>: menemukan kaki yang hilang dari sudut yang diketahui dan kaki lainnya."
      ],
      "closingParagraphs": [
        "Aturan keputusannya sederhana. Anda mengetahui satu sudut lancip: gunakan kalkulator sudut hilang di halaman ini. Anda mengetahui dua panjang sisi yang cocok: gunakan kalkulator trigonometri invers yang sesuai. Anda membutuhkan sisi yang tidak diketahui: gunakan kalkulator sisi. Dan Anda membutuhkan sudut kedua setelah perhitungan trigonometri: kurangkan sudut yang diketahui dari 90 derajat, yang persis seperti yang diotomatisasi halaman ini."
      ]
    },
    "missing-conclusion": {
      "h2": "Temukan Setiap Sudut yang Hilang dengan Percaya Diri",
      "blocks": [
        {
          "kind": "p",
          "text": "Perhitungan sudut hilang adalah operasi paling sederhana dalam geometri segitiga siku-siku: kurangkan sudut lancip yang diketahui dari 90 derajat. Di balik pengurangan itu ada aturan jumlah sudut segitiga, yang mencadangkan setengah dari total setiap segitiga untuk sudut siku-siku dan menyisakan setengah lainnya untuk pasangan komplementer. Baik sudut yang diketahui berasal dari kaso atap, tangga, stringer tangga, maupun tata letak gambar teknik, metodenya tidak pernah berubah: pastikan sudut siku-sikunya, kurangkan dari 90, dan verifikasi bahwa kedua sudut lancip berjumlah 90 derajat. Simpan halaman ini sebagai penanda untuk saat-saat ketika sebuah sudut sudah diketahui dan hanya pasangannya yang hilang."
        }
      ]
    }
  },
  "tocHeading": "Dalam Panduan Ini",
  "tocItems": {
    "missing-angles": "Apa Saja Sudut dalam Segitiga Siku-Siku?",
    "missing-applications": "Aplikasi dalam Kehidupan Nyata",
    "missing-choose": "Memilih Kalkulator yang Tepat",
    "missing-examples": "Contoh Langkah demi Langkah",
    "missing-faq": "FAQ",
    "missing-formula": "Rumus Mencari Sudut yang Hilang",
    "missing-howto": "Cara Menggunakan Kalkulator",
    "missing-intro": "Cara Menemukan Sudut yang Hilang dalam Segitiga Siku-Siku",
    "missing-mistakes": "Kesalahan Umum",
    "missing-related": "Kalkulator Terkait",
    "missing-relationship": "Bagaimana Sudut Komplementer Berubah",
    "missing-reverse": "Bagaimana Jika Anda Mengetahui Sudut B?",
    "missing-verify": "Memeriksa Jawaban Anda",
    "missing-vs": "Komplementer vs. Suplementer"
  },
  "faqs": [
    {
      "question": "Bagaimana cara menemukan sudut yang hilang dalam segitiga siku-siku?",
      "answer": "Kurangkan sudut lancip yang diketahui dari 90 derajat. Rumusnya adalah B = 90 - A, dengan A adalah sudut yang Anda ketahui dan B adalah sudut yang hilang. Misalnya, jika A adalah 35 derajat, maka B = 90 - 35 = 55 derajat. Tidak diperlukan panjang sisi atau fungsi trigonometri."
    },
    {
      "question": "Mengapa kedua sudut lancip berjumlah 90 derajat?",
      "answer": "Setiap segitiga memuat total 180 derajat. Segitiga siku-siku mencadangkan 90 dari derajat itu untuk sudut siku-sikunya, sehingga tersisa tepat 90 derajat untuk dibagi kedua sudut lancip yang tersisa. Itulah sebabnya A + B selalu sama dengan 90 derajat dalam segitiga siku-siku."
    },
    {
      "question": "Apa rumus sudut yang hilang?",
      "answer": "Rumusnya adalah B = 90 - A. Mulai dari jumlah sudut segitiga A + B + 90 = 180, kurangkan 90 dari kedua ruas sehingga diperoleh A + B = 90, lalu kurangkan A dari kedua ruas. Bentuk kebalikannya, A = 90 - B, bekerja dengan cara yang sama ketika B adalah sudut yang diketahui."
    },
    {
      "question": "Apa itu sudut komplementer?",
      "answer": "Dua sudut disebut komplementer ketika jumlah ukurannya 90 derajat. Pasangan 30 dan 60, 35 dan 55, serta 45 dan 45 semuanya komplementer. Dalam setiap segitiga siku-siku, kedua sudut lancip komplementer menurut definisi, yang persis seperti yang diungkapkan rumus sudut hilang."
    },
    {
      "question": "Bisakah saya menemukan sudut yang hilang tanpa mengetahui panjang sisinya?",
      "answer": "Bisa. Ketika satu sudut lancip diketahui, panjang sisi tidak relevan untuk perhitungan ini. Hubungan sudut komplementer hanya bergantung pada jumlah sudut, sehingga mengurangkan dari 90 derajat memberikan jawaban yang tepat. Panjang sisi hanya penting ketika belum ada sudut yang diketahui."
    },
    {
      "question": "Apa perbedaan antara sudut komplementer dan sudut suplementer?",
      "answer": "Sudut komplementer berjumlah 90 derajat; sudut suplementer berjumlah 180 derajat. Kedua sudut lancip segitiga siku-siku komplementer. Kesalahan yang umum adalah mengurangkan sudut yang diketahui dari 180, bukan 90, yang melupakan bahwa sudut siku-siku sudah mencakup setengah dari total segitiga."
    },
    {
      "question": "Bisakah kedua sudut lancip sama besar?",
      "answer": "Bisa, ketika masing-masing berukuran 45 derajat. Maka 90 - 45 = 45, sehingga segitiganya adalah segitiga siku-siku sama kaki dengan dua kaki yang sama panjang. Ini satu-satunya kasus di mana kedua sudut lancip cocok; dalam setiap segitiga siku-siku lainnya keduanya berbeda."
    },
    {
      "question": "Apa yang terjadi jika sudut yang diketahui 35 derajat?",
      "answer": "Sudut yang hilang adalah 90 - 35 = 55 derajat. Anda bisa memverifikasinya dengan dua cara: 35 + 55 = 90 menegaskan pasangan komplementernya, dan 35 + 55 + 90 = 180 menegaskan jumlah seluruh sudut segitiga. Kedua pemeriksaan itu harus selalu cocok."
    },
    {
      "question": "Apa yang terjadi jika sudut yang diketahui lebih besar dari 45 derajat?",
      "answer": "Sudut yang hilang keluar lebih kecil dari 45 derajat, karena keduanya harus tetap berjumlah 90. Misalnya, jika A adalah 68 derajat, maka B = 90 - 68 = 22 derajat. Saat sudut yang diketahui tumbuh mendekati 90, komplemennya menyusut mendekati 0."
    },
    {
      "question": "Bisakah sudut lancip yang hilang tepat 0 atau 90 derajat?",
      "answer": "Tidak dalam segitiga siku-siku biasa. Masukan 0 atau 90 derajat menggambarkan kasus batas degeneratif tanpa luas segitiga nyata, bukan segitiga dengan tiga titik sudut berbeda. Kalkulator mensyaratkan sudut yang diketahui benar-benar di antara 0 dan 90 derajat, dan hasilnya selalu berada dalam rentang yang sama."
    },
    {
      "question": "Bagaimana cara menemukan sudut A ketika sudut B diketahui?",
      "answer": "Gunakan rumus kebalikan A = 90 - B. Ini hubungan komplementer yang sama yang diselesaikan untuk variabel lainnya. Misalnya, jika B adalah 62 derajat, maka A = 90 - 62 = 28 derajat. Perhatikan bahwa kalkulator ini menerima sudut A sebagai masukannya, jadi terapkan rumus kebalikan secara manual ketika hanya B yang diketahui."
    },
    {
      "question": "Kapan sebaiknya saya memakai kalkulator sinus, kosinus, atau tangen?",
      "answer": "Gunakan kalkulator trigonometri invers ketika belum ada sudut yang diketahui tetapi dua panjang sisi sudah ada. Kalkulator sudut dari sinus membutuhkan sisi depan dan hipotenusa, kalkulator sudut dari kosinus membutuhkan sisi samping dan hipotenusa, dan kalkulator sudut dari tangen membutuhkan kedua kakinya. Setelah ada sudut lancip yang diketahui, kalkulator sudut hilang menyelesaikan sisanya."
    }
  ],
  "relatedHeading": "Jelajahi Kalkulator Segitiga Terkait",
  "relatedItems": [
    "Kalkulator Sudut dari Sinus Segitiga Siku-Siku",
    "Kalkulator Sudut dari Kosinus Segitiga Siku-Siku",
    "Kalkulator Sudut dari Tangen Segitiga Siku-Siku",
    "Kalkulator Sisi dari Sinus Segitiga Siku-Siku",
    "Kalkulator Sisi dari Kosinus Segitiga Siku-Siku",
    "Kalkulator Sisi dari Tangen Segitiga Siku-Siku"
  ]
  },
  "ar": {
  "sections": {
    "missing-intro": {
      "h2": "كيفية إيجاد زاوية مفقودة في مثلث قائم الزاوية",
      "blocks": [
        {
          "kind": "p",
          "text": "إذا كانت إحدى الزاويتين الحادتين في مثلث قائم الزاوية قياسها [[35^\\circ]]، فإن الزاوية المفقودة هي [[90^\\circ-35^\\circ=55^\\circ]]. ذلك الطرح الواحد هو الحساب كله. يحتوي المثلث القائم الزاوية دائمًا على زاوية قياسها 90 درجة، لذا يجب أن تتقاسم الزاويتان الباقيتان الـ90 درجة المتبقية بالضبط. طرح الزاوية المعروفة من 90 درجة يكشف الزاوية المفقودة، دون الحاجة إلى أطوال الأضلاع أو الدوال المثلثية."
        },
        {
          "kind": "p",
          "text": "الجواب، وهو 55 درجة في هذه الحالة، يمثل الزاوية الحادة الأخرى في المثلث القائم الزاوية نفسه. تعمل الزاويتان دائمًا كثنائي: معرفة أي منهما تحدد الأخرى تمامًا. هذه الحاسبة موجودة لهذه الحالة بالضبط، عندما تكون الزاوية معروفة أصلًا والزاوية المفقودة هي متممتها فقط. وعندما لا تكون هناك زاوية معروفة بعد، فإن حاسبة إيجاد الزاوية من الظل أو إحدى نظيرتيها من الجيب وجيب التمام تستخرج الزاوية الأولى من الأضلاع المقاسة."
        }
      ]
    },
    "missing-angles": {
      "h2": "ما هي زوايا المثلث القائم الزاوية؟",
      "blocks": [
        {
          "kind": "h3",
          "text": "الزاوية القائمة"
        },
        {
          "kind": "p",
          "text": "زاوية الـ90 درجة تمثل زاوية مثالية، وهي الزاوية بين جدار رأسي وأرضية مستوية. في كل مثلث قائم الزاوية تكون هذه الزاوية ثابتة: لا يتغير قياسها أبدًا، وتُعلَّم الرسوم التخطيطية بمربع صغير عند الرأس. ولأن إحدى الزوايا ثابتة دائمًا عند 90 درجة، فلا يتبقى للزاويتين الأخريين سوى 90 درجة تتقاسماها، مما يجبرهما على أن تكونا حادتين."
        },
        {
          "kind": "h3",
          "text": "الزاويتان الحادتان"
        },
        {
          "kind": "p",
          "text": "الزاوية الحادة قياسها أكبر من [[0^\\circ]] وأقل من [[90^\\circ]]. تقع الزاويتان الباقيتان في المثلث القائم الزاوية ضمن هذا النطاق، وتُسمَّيان متتامتين لأن مجموع قياسيهما دائمًا 90 درجة. وهذا الاقتران صارم: زاوية حادة واحدة معروفة تترك قيمة واحدة ممكنة فقط لشريكتها، فلا تكون الزاوية المفقودة أبدًا مسألة تقدير."
        },
        {
          "kind": "h3",
          "text": "ما هي الزوايا المتتامة؟"
        },
        {
          "kind": "p",
          "text": "تكون الزاويتان متتامتين عندما يكون مجموع قياسيهما [[90^\\circ]]. الثنائيات [[30^\\circ+60^\\circ=90^\\circ]] و[[35^\\circ+55^\\circ=90^\\circ]] و[[45^\\circ+45^\\circ=90^\\circ]] كلها متتامة. لا يلزم أن تكون الزاويتان المتتامتان متساويتين؛ فالتساوي يحدث فقط عند 45 درجة لكل منهما. أي زاويتين موجبتين مجموعهما 90 درجة تُعدَّان متتامتين، سواء كانتا داخل المثلث نفسه أم لا."
        },
        {
          "kind": "h3",
          "text": "لماذا يساوي مجموع زوايا المثلث 180 درجة؟"
        },
        {
          "kind": "p",
          "text": "كل مثلث، مهما كان شكله، يحتوي على 180 درجة بالضبط عبر زواياه الداخلية الثلاث. وفي المثلث القائم الزاوية تأخذ الزاوية القائمة الثابتة 90 درجة من هذه الدرجات فورًا، فيتبقى 90 درجة بالضبط للزاويتين الحادتين معًا. ويوضح الرسم أدناه الحساب الكامل لمثلث زواياه 35 و55 و90 درجة."
        }
      ],
      "imgAlt": "مثلث قائم الزاوية مُعلَّم بالزوايا: A بقياس 35 درجة، وB بقياس 55 درجة، وC بقياس 90 درجة",
      "figcaption": "الزاويتان A (بقياس 35 درجة) وB (بقياس 55 درجة) متتامتان: A + B = 90 درجة، و35 + 55 + 90 = 180 درجة."
    },
    "missing-formula": {
      "h2": "صيغة إيجاد الزاوية المفقودة",
      "blocks": [
        {
          "kind": "p",
          "text": "تأتي الصيغة مباشرة من قاعدة مجموع زوايا المثلث. ابدأ بالعبارة العامة:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "بما أن المثلث قائم الزاوية، فإن الزاوية الثالثة ثابتة:"
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "عوِّض بهذه القيمة في المجموع:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "اطرح 90 درجة من الطرفين، فتبقى الزاويتان الحادتان وحدهما:"
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "وأخيرًا، اطرح الزاوية المعروفة [[A]] من الطرفين لعزل الزاوية المفقودة:"
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "كل خطوة هي جبر عادي مطبَّق على حقيقة هندسية. لا شيء يُحفظ عن ظهر قلب: الـ90 درجة في الصيغة هي حصة مجموع الزوايا المتبقية بعد أن تأخذ الزاوية القائمة نصفها."
        },
        {
          "kind": "p",
          "text": "تعمل العلاقة نفسها بالعكس أيضًا. فإذا كانت الزاوية [[B]] هي المعروفة، فإن حل العلاقة بالنسبة إلى [[A]] يعطي:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "تستخدم هذه الحاسبة الصيغة الأولى لأن حقل الإدخال فيها يقبل الزاوية [[A]] ويعيد الزاوية [[B]]. الصيغتان ليستا قاعدتين مختلفتين؛ بل هما علاقة الزاويتين المتتامتين نفسها محلولةً لمجهولين مختلفين."
        },
        {
          "kind": "h3",
          "text": "لماذا 90 درجة وليس 180 درجة؟"
        },
        {
          "kind": "p",
          "text": "خطأ شائع هو طرح الزاوية المعروفة من 180 درجة. فهذا المجموع يغطي زوايا المثلث الثلاث كلها، لذا فإن استخدامه وحده ينسى أن الزاوية القائمة قد حُسبت أصلًا. مع [[A=35^\\circ]]، يعطي الحساب الخاطئ [[180^\\circ-35^\\circ=145^\\circ]]، وهي قيمة لا يمكن أن تكون زاوية حادة في أي مثلث قائم الزاوية. أما الحساب الصحيح، [[90^\\circ-35^\\circ=55^\\circ]]، فيحترم الزاوية القائمة ويمكن التحقق منه فورًا: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
        }
      ],
      "imgAlt": "لوحتان تقارنان بين مجموع زوايا المثلث البالغ 180 درجة وثنائي الزاويتين الحادتين البالغ 90 درجة",
      "figcaption": "يُظهر الجزء A مجموع زوايا المثلث الكامل؛ بينما يعزل الجزء B الزاويتين الحادتين المتتامتين."
    },
    "missing-howto": {
      "h2": "كيفية استخدام حاسبة الزاوية المفقودة في المثلث القائم الزاوية",
      "blocks": [
        {
          "kind": "p",
          "text": "يطابق الشرح التفصيلي أدناه الواجهة الفعلية في هذه الصفحة."
        }
      ],
      "steps": [
        "<strong>حدِّد المثلث القائم الزاوية.</strong> تأكد من أن الشكل يحتوي على زاوية قائمة حقيقية قياسها 90 درجة قبل أي شيء آخر؛ فالصيغة تنطبق على المثلثات القائمة الزاوية فقط.",
        "<strong>حدِّد الزاوية الحادة التي تعرفها أصلًا.</strong> هذه هي الزاوية [[A]]، القيمة التي ستدخلها في الحاسبة.",
        "<strong>تأكد من صلاحية الزاوية المعروفة.</strong> يجب أن تكون أكبر من [[0^\\circ]] وأصغر من [[90^\\circ]]. أي قيمة خارج هذا النطاق لا يمكن أن تكون زاوية حادة في مثلث قائم الزاوية.",
        "<strong>أدخل الزاوية المعروفة [[A]] بالدرجات.</strong> يقبل حقل الإدخال قيمًا عشرية مثل 68.5، فحافظ على دقة قياسك.",
        "<strong>انقر على «احسب الزاوية B».</strong> تطبق الأداة [[B=90^\\circ-A]] على مدخلاتك.",
        "<strong>اقرأ الزاوية المتممة المحسوبة.</strong> الناتج هو الزاوية [[B]] بالدرجات.",
        "<strong>اجمع الزاويتين الحادتين للتحقق من النتيجة.</strong> يجب أن يساوي المجموع 90 درجة؛ وإذا لم يكن كذلك، أعد فحص المدخلات.",
        "<strong>استخدم «إعادة الضبط» عندما تريد بدء حساب جديد.</strong> يمسح هذا المدخلات ليتسنى إدخال زاوية جديدة."
      ],
      "closingParagraphs": [
        "لاحظ ما لا تطلبه الحاسبة أبدًا: لا طول الضلع المقابل، ولا طول الضلع المجاور، ولا الوتر، ولا قيم الجيب أو جيب التمام أو الظل. فزاوية حادة واحدة معروفة هي المدخل كله، لأن قاعدة مجموع الزوايا تتولى الباقي. كما أن الأداة لا تقبل الراديان ولا الإدخال المباشر للزاوية [[B]]؛ فحقل الإدخال فيها مخصص تحديدًا للزاوية [[A]] بالدرجات."
      ]
    },
    "missing-examples": {
      "h2": "أمثلة خطوة بخطوة لإيجاد الزوايا المفقودة",
      "blocks": [
        {
          "kind": "p",
          "text": "تبني هذه الأمثلة الأربعة المهارة الأساسية قبل التطبيقات الواقعية. ويتبع كل مثال النمط نفسه: اكتب الصيغة، ثم عوِّض، ثم اطرح."
        },
        {
          "kind": "h3",
          "text": "المثال 1: زاوية معروفة قياسها 35 درجة"
        },
        {
          "kind": "p",
          "text": "معطى [[A=35^\\circ]]، أوجد الزاوية [[B]]."
        },
        {
          "kind": "p",
          "text": "الخطوة 1: اكتب الصيغة. [[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "الخطوة 2: عوِّض بالزاوية المعروفة. [[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "الخطوة 3: اطرح. [[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "تحقق: [[35^\\circ+55^\\circ=90^\\circ]]. الجواب صحيح لأن مجموع الزاويتين الحادتين يساوي 90 درجة بالضبط، وكل منهما تقع حصرًا بين 0 و90 درجة."
        },
        {
          "kind": "h3",
          "text": "المثال 2: زاوية معروفة قياسها 20 درجة"
        },
        {
          "kind": "p",
          "text": "معطى [[A=20^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "الزاوية الحادة الأصغر تنتج زاوية متممة أكبر. وبما أن مجموع الثنائي يجب أن يكون 90 درجة دائمًا، فإن كل درجة تُطرح من إحدى الزاويتين تُضاف إلى الأخرى. هنا تترك زاوية الـ20 درجة 70 درجة كاملة لشريكتها."
        },
        {
          "kind": "h3",
          "text": "المثال 3: مثلث قائم الزاوية متساوي الساقين"
        },
        {
          "kind": "p",
          "text": "معطى [[A=45^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "الزاويتان الحادتان متساويتان عند 45 درجة لكل منهما. هذا هو المثلث القائم الزاوية متساوي الساقين، وهو المثلث القائم الوحيد الذي تتطابق فيه زواياه الحادة. وضلعاه القائمان متساويان في الطول أيضًا، وهذا سبب ظهور مثلث 45-45-90 كثيرًا في مخططات الرسم والإنشاءات."
        },
        {
          "kind": "h3",
          "text": "المثال 4: زاوية معروفة قياسها 68.5 درجة"
        },
        {
          "kind": "p",
          "text": "معطى [[A=68.5^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "الزاوية الحادة الكبيرة نسبيًا لها متممة صغيرة نسبيًا. يعمل المدخل العشري تمامًا مثل المدخل الصحيح: اطرح بعناية، محافظًا على محاذاة الـ.5، و90 ناقص 68.5 يساوي 21.5. ويبقى التحقق صحيحًا: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
        }
      ]
    },
    "missing-applications": {
      "h2": "تطبيقات واقعية للزوايا المفقودة",
      "blocks": [
        {
          "kind": "p",
          "text": "ثمة نقطة تحتاج إلى انتباه قبل بدء الأمثلة. تنطبق صيغة الزاوية المفقودة مباشرة عندما تنتمي الزاويتان إلى المثلث القائم الزاوية نفسه. وفي التطبيقات العملية، غالبًا ما يكون السطح الأفقي والسطح الرأسي هما خطي المرجع المتعامدين، بينما يشكِّل العنصر المائل مثل السلم أو العارضة الوتر. وتصرح الأمثلة أدناه بهذا الافتراض حيثما استُخدم."
        },
        {
          "kind": "h3",
          "text": "المثال 5: إيجاد زاوية عارضة السقف بالنسبة إلى الرأسي"
        },
        {
          "kind": "p",
          "text": "تصنع عارضة سقف زاوية قياسها [[35^\\circ]] مع الأفقي. أوجد الزاوية بين العارضة نفسها وخط مرجع رأسي."
        },
        {
          "kind": "p",
          "text": "معطى [[A=35^\\circ]] مقاسةً من الأفقي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "خطا المرجع الأفقي والرأسي متعامدان، لذا فالزاويتان متتامتان. ونتيجة الـ55 درجة هي الزاوية بالنسبة إلى الرأسي، وليست حسابًا كاملًا لميل السقف أو حسابًا إنشائيًا."
        },
        {
          "kind": "h3",
          "text": "المثال 6: إيجاد زاوية السلم بالنسبة إلى الجدار"
        },
        {
          "kind": "p",
          "text": "يستند سلم إلى جدار رأسي ويصنع زاوية قياسها [[68^\\circ]] مع الأرض المستوية. أوجد الزاوية بين السلم والجدار."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "تشكِّل الأرض والجدار زاوية قائمة في هذا النموذج المثالي، والسلم هو الوتر. وتصف زاوية الـ22 درجة اتجاه السلم بالنسبة إلى الجدار. ولا يثبت الحساب وحده ما إذا كان السلم موضوعًا بأمان."
        },
        {
          "kind": "h3",
          "text": "المثال 7: فهم زاوية المنحدر بالنسبة إلى الرأسي"
        },
        {
          "kind": "p",
          "text": "يصنع منحدر مستقيم زاوية قياسها [[8^\\circ]] مع الأفقي. أوجد الزاوية المتممة بين اتجاه المنحدر وخط مرجع رأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "زاوية المنحدر بالنسبة إلى الرأسي هي متممة زاويته بالنسبة إلى الأفقي. فميل ضحل قياسه 8 درجات يترك زاوية حادة قياسها 82 درجة مقابل الرأسي. ولا تحدد هذه الزاوية وحدها إمكانية الوصول أو الامتثال للمواصفات."
        },
        {
          "kind": "h3",
          "text": "المثال 8: إيجاد الزاوية المتممة لعارضة الدرج"
        },
        {
          "kind": "p",
          "text": "تصنع عارضة الدرج زاوية قياسها [[32^\\circ]] مع الأرضية. احسب زاويتها بالنسبة إلى خط مرجع رأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "تشكِّل الأرضية والمرجع الرأسي وعارضة الدرج المائلة المثلث القائم الزاوية. وتصف نتيجة الـ58 درجة اتجاه العارضة مقابل الرأسي. ولا تتحقق من أبعاد الدرج أو الامتثال لمواصفات البناء."
        },
        {
          "kind": "h3",
          "text": "المثال 9: حساب زاوية دعامة مائلة بالنسبة إلى دعامة رأسية"
        },
        {
          "kind": "p",
          "text": "تصنع دعامة مائلة زاوية قياسها [[40^\\circ]] مع عارضة أفقية. أوجد الزاوية بين الدعامة ودعامة رأسية متعامدة."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "يجب أن يكون اتجاها المرجع متعامدين لتنطبق قاعدة التتميم. وزاوية الـ50 درجة نتيجة هندسية خالصة؛ ولا تحدد القوة الإنشائية للدعامة."
        },
        {
          "kind": "h3",
          "text": "المثال 10: إيجاد زاوية سلك الشد بالنسبة إلى عمود رأسي"
        },
        {
          "kind": "p",
          "text": "يصنع سلك الشد زاوية قياسها [[30^\\circ]] مع الأرض المستوية. أوجد الزاوية بين السلك وعمود رأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "تحدِّد الأرض الأفقية والعمود الرأسي الزاوية القائمة، والسلك هو الوتر. وتعيد نتيجة الـ60 درجة صياغة اتجاه السلك نفسه مقابل المرجع الرأسي. ولا تثبت شد السلك أو سلامة التثبيت."
        },
        {
          "kind": "h3",
          "text": "المثال 11: تحويل زاوية الارتفاع إلى متممتها"
        },
        {
          "kind": "p",
          "text": "يسجِّل مخطط مساحي خط رؤية بزاوية ارتفاع قياسها [[24^\\circ]] فوق الأفقي. احسب زاويتها المتممة بالنسبة إلى الرأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "الزاوية المقاسة من الأفقي والزاوية المقاسة من الرأسي تصفان خط الرؤية نفسه من وجهتي نظر متعامدتين. ويفترض المثال خط رؤية مستقيمًا مع مرجعين أفقي ورأسي متعامدين."
        },
        {
          "kind": "h3",
          "text": "المثال 12: إيجاد زاوية ميل السقف بالنسبة إلى مرجع رأسي"
        },
        {
          "kind": "p",
          "text": "يُقاس ميل السقف عند [[27^\\circ]] بالنسبة إلى الأفقي. أوجد زاويته المتممة بالنسبة إلى الرأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "يصف القياسان الميل نفسه من اتجاهي مرجع متعامدين مختلفين. ولا يُعد أي من القياسين وحده تقييمًا إنشائيًا."
        },
        {
          "kind": "h3",
          "text": "المثال 13: قطر في مخطط رسم مربع"
        },
        {
          "kind": "p",
          "text": "يصنع خط قطري في مخطط رسم مربع زاوية قياسها [[45^\\circ]] مع أحد الأضلاع. أوجد الزاوية التي يصنعها مع الضلع المجاور المتعامد."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "ينصِّف القطر الزاوية القائمة للمربع، فتكون الزاويتان الناتجتان 45 درجة لكل منهما. وتساعد هذه العلاقة في فحوص الرسم والتخطيط الأساسية: فإذا لم يقسِّم قطر مقاس الزاوية بالتساوي، فالتخطيط ليس مربعًا."
        },
        {
          "kind": "h3",
          "text": "المثال 14: إيجاد الزاوية المتممة للوحة آلة"
        },
        {
          "kind": "p",
          "text": "لوحة مائلة بمقدار [[15^\\circ]] عن الأفقي. احسب الزاوية بين اتجاه اللوحة واتجاه المرجع الرأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "المرجعان الأفقي والرأسي متعامدان، لذا فإن ميل اللوحة ومتممته يصفان الاتجاه نفسه. وتصف النتيجة الاتجاه فقط، وليس سلامة الآلة أو أداءها."
        },
        {
          "kind": "h3",
          "text": "المثال 15: تحويل زاوية رصد شجرة"
        },
        {
          "kind": "p",
          "text": "ينظر شخص نحو قمة شجرة بزاوية ارتفاع قياسها [[38^\\circ]] فوق الأفقي. أوجد الزاوية المتممة بين خط الرؤية واتجاه مرجع رأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "يغيِّر الحساب اتجاه المرجع، وليس خط الرؤية نفسه. فزاوية الـ52 درجة هي ببساطة النظرة نفسها مقاسةً مقابل الرأسي. ولا يحسب ارتفاع الشجرة."
        },
        {
          "kind": "h3",
          "text": "المثال 16: إيجاد زاوية درابزين بالنسبة إلى دعامة رأسية"
        },
        {
          "kind": "p",
          "text": "يصنع درابزين مائل زاوية قياسها [[55^\\circ]] مع بسطة أفقية. أوجد زاويته المتممة بالنسبة إلى خط دعامة رأسي."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "تصف الزاوية المتممة الاتجاه المائل نفسه من مرجع مختلف. فزاوية حادة قياسها 55 درجة مقابل الأفقي تصبح زاوية ضحلة قياسها 35 درجة مقابل الرأسي. ولا تتحقق الزاوية وحدها من متطلبات إمكانية الوصول أو الإنشاء."
        },
        {
          "kind": "h3",
          "text": "مقارنة الأمثلة العملية"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">الوضع",
          "الزاوية المعروفة",
          "اتجاه المرجع",
          "الزاوية المفقودة",
          "الحساب",
          "التفسير"
        ],
        "rows": [
          [
            "عارضة السقف",
            "35&deg;",
            "أفقي",
            "55&deg;",
            "90 - 35",
            "زاوية العارضة بالنسبة إلى الرأسي"
          ],
          [
            "سلم",
            "68&deg;",
            "الأرض",
            "22&deg;",
            "90 - 68",
            "زاوية السلم بالنسبة إلى الجدار"
          ],
          [
            "منحدر",
            "8&deg;",
            "أفقي",
            "82&deg;",
            "90 - 8",
            "اتجاه المنحدر بالنسبة إلى الرأسي"
          ],
          [
            "عارضة الدرج",
            "32&deg;",
            "الأرضية",
            "58&deg;",
            "90 - 32",
            "زاوية العارضة بالنسبة إلى الرأسي"
          ],
          [
            "دعامة مائلة",
            "40&deg;",
            "عارضة أفقية",
            "50&deg;",
            "90 - 40",
            "زاوية الدعامة بالنسبة إلى الدعامة الرأسية"
          ],
          [
            "سلك الشد",
            "30&deg;",
            "الأرض",
            "60&deg;",
            "90 - 30",
            "زاوية السلك بالنسبة إلى العمود"
          ],
          [
            "خط الرؤية المساحي",
            "24&deg;",
            "أفقي",
            "66&deg;",
            "90 - 24",
            "خط الرؤية بالنسبة إلى الرأسي"
          ],
          [
            "ميل السقف",
            "27&deg;",
            "أفقي",
            "63&deg;",
            "90 - 27",
            "زاوية الميل بالنسبة إلى الرأسي"
          ],
          [
            "قطر الرسم",
            "45&deg;",
            "أحد الأضلاع",
            "45&deg;",
            "90 - 45",
            "القطر بالنسبة إلى الضلع المجاور"
          ],
          [
            "لوحة الآلة",
            "15&deg;",
            "أفقي",
            "75&deg;",
            "90 - 15",
            "اتجاه اللوحة بالنسبة إلى الرأسي"
          ],
          [
            "رصد الشجرة",
            "38&deg;",
            "أفقي",
            "52&deg;",
            "90 - 38",
            "خط الرؤية بالنسبة إلى الرأسي"
          ],
          [
            "درابزين",
            "55&deg;",
            "البسطة",
            "35&deg;",
            "90 - 55",
            "الدرابزين بالنسبة إلى الدعامة الرأسية"
          ]
        ]
      }
    },
    "missing-relationship": {
      "h2": "فهم العلاقة بين الزوايا المتتامة",
      "blocks": [
        {
          "kind": "p",
          "text": "النمط متوقع تمامًا. إذا زادت الزاوية [[A]]، نقصت الزاوية [[B]] بالمقدار نفسه بالضبط، لأن مجموعهما مثبت عند 90 درجة. وإذا نقصت [[A]]، كبرت [[B]] لسد الفجوة. عند [[A=45^\\circ]] تلتقي الزاويتان في المنتصف، ولا يمكن لأي زاوية حادة أن تبلغ [[0^\\circ]] أو [[90^\\circ]] في مثلث قائم زاوية حقيقي له ثلاثة رؤوس متميزة."
        },
        {
          "kind": "p",
          "text": "الجدول متماثل حول 45 درجة: فالثنائيات (10، 80) و(20، 70) و(30، 60) تعكس بعضها لأن تبديل الزاوية المعروفة والمفقودة يقرأ العلاقة المتممة نفسها من الجهة الأخرى. واللوحات الأربع أدناه تجعل هذه المقايضة مرئية."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">الزاوية المعروفة A",
          "الصيغة",
          "الزاوية المفقودة B"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      },
      "imgAlt": "أربعة مثلثات تُظهر الثنائيات المتممة 20-70 و30-60 و45-45 و70-20 درجة",
      "figcaption": "كلما كبرت الزاوية A صغرت الزاوية B بالمقدار نفسه؛ ويبقى مجموعهما 90 درجة."
    },
    "missing-reverse": {
      "h2": "ماذا لو كنت تعرف الزاوية B بدلًا من ذلك؟",
      "blocks": [
        {
          "kind": "p",
          "text": "تعمل قاعدة الزاويتين المتتامتين نفسها بالعكس. فإذا كانت الزاوية [[B]] هي المعروفة، فحُلَّ العلاقة بالنسبة إلى [[A]]:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "لا حاجة إلى صيغة جديدة؛ فهي المعادلة نفسها مع تبادل الأدوار."
        },
        {
          "kind": "h3",
          "text": "مثال محلول"
        },
        {
          "kind": "p",
          "text": "معطى [[B=62^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "ثلاثة أمثلة قصيرة أخرى في الاتجاه المعكوس تتبع الخطوة نفسها:"
        }
      ],
      "listItems": [
        "[[B=15^\\circ]]، إذن [[A=90^\\circ-15^\\circ=75^\\circ]].",
        "[[B=42^\\circ]]، إذن [[A=90^\\circ-42^\\circ=48^\\circ]].",
        "[[B=70^\\circ]]، إذن [[A=90^\\circ-70^\\circ=20^\\circ]]."
      ],
      "closingParagraphs": [
        "ملاحظة عملية: يقبل حقل إدخال هذه الحاسبة الزاوية [[A]] ويعيد الزاوية [[B]]. فمن يعرف الزاوية [[B]] فقط عليه تطبيق الصيغة العكسية يدويًا، ما لم يُتحقق من أن الواجهة تدعم إدخال [[B]] مباشرة."
      ]
    },
    "missing-vs": {
      "h2": "الزوايا المتتامة مقابل الزوايا المتكاملة",
      "blocks": [
        {
          "kind": "p",
          "text": "يتشابه المصطلحان ويصف كلاهما ثنائي زوايا، لكنهما يجيبان عن سؤالين مختلفين."
        },
        {
          "kind": "h3",
          "text": "الزوايا المتتامة"
        },
        {
          "kind": "p",
          "text": "تكون الزاويتان متتامتين عندما يكون مجموعهما [[90^\\circ]]. والزاويتان الحادتان في المثلث القائم الزاوية هما المثال النموذجي: يجب أن تكونا متتامتين لأن الزاوية القائمة تأخذ أصلًا الـ90 درجة الأخرى من مجموع المثلث."
        },
        {
          "kind": "h3",
          "text": "الزوايا المتكاملة"
        },
        {
          "kind": "p",
          "text": "تكون الزاويتان متكاملتين عندما يكون مجموعهما [[180^\\circ]]. فالخط المستقيم مثلًا يمكن تقسيمه إلى زاويتين متكاملتين. ويجب ألا تُخلط الثنائيات المتكاملة أبدًا مع الزاويتين الحادتين في المثلث القائم الزاوية، اللتين مجموعهما 90 وليس 180."
        },
        {
          "kind": "p",
          "text": "مجموع زوايا المثلث الكامل 180 درجة، لكن مجموع الزاويتين الحادتين معًا 90 درجة. والفصل بين هذين المجموعين هو مفتاح تجنب أكثر الأخطاء شيوعًا في هذه الصفحة."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">العلاقة",
          "المجموع",
          "مثال"
        ],
        "rows": [
          [
            "متتامة",
            "90&deg;",
            "35 + 55"
          ],
          [
            "متكاملة",
            "180&deg;",
            "110 + 70"
          ],
          [
            "زاوية قائمة",
            "90&deg;",
            "الزاوية الثابتة في المثلث القائم الزاوية"
          ]
        ]
      },
      "imgAlt": "أربع لوحات تُظهر زوايا متتامة لسلم وعارضة سقف ودعامة وقطر مربع",
      "figcaption": "ثنائيات متتامة في سياقات واقعية: كل زاوية معروفة تحدد شريكتها."
    },
    "missing-mistakes": {
      "h2": "أخطاء شائعة عند إيجاد الزاوية المفقودة",
      "blocks": [
        {
          "kind": "h3",
          "text": "الخطأ مقابل الصواب"
        },
        {
          "kind": "p",
          "text": "معطى [[A=35^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "خطأ: [[180^\\circ-35^\\circ=145^\\circ]]. هذه ليست الزاوية الحادة المفقودة لأن الزاوية القائمة لم تُحسب؛ فلا يمكن لزاوية قياسها 145 درجة أن توجد داخل مثلث قائم الزاوية إلى جانب زاوية قياسها 90 درجة."
        },
        {
          "kind": "p",
          "text": "صواب: [[90^\\circ-35^\\circ=55^\\circ]]."
        },
        {
          "kind": "p",
          "text": "تحقق: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. يؤكد مجموع الزوايا الكامل الجواب."
        }
      ],
      "listItems": [
        "<strong>طرح الزاوية المعروفة من 180 درجة بدلًا من 90.</strong> يشمل مجموع الـ180 درجة الزاوية القائمة، وهي ثابتة أصلًا. الخطأ: مع [[A=35^\\circ]] يعطي الحساب الخاطئ 145 درجة، وهي زاوية حادة مستحيلة. الإصلاح: اطرح من 90، فيكون الناتج [[55^\\circ]].",
        "<strong>نسيان أن إحدى الزوايا 90 درجة أصلًا.</strong> يسهل إغفال الزاوية القائمة لأنها لا تحتاج إلى حساب. الخطأ: التعامل مع المثلث كأن زواياه الثلاث كلها مجهولة. الإصلاح: تذكَّر أن الزاوية القائمة تأخذ نصف مجموع الـ180 درجة قبل أن تبدأ.",
        "<strong>إدخال 90 درجة في الحاسبة.</strong> تتوقع الأداة زاوية حادة بين 0 و90 درجة حصرًا. الخطأ: مدخل 90 درجة لا يترك مجالًا لزاوية حادة ثانية. الإصلاح: أدخل الزاوية الحادة المعروفة فقط.",
        "<strong>إدخال زاوية أكبر من 90 درجة.</strong> لا تتجاوز أي زاوية حادة 90 درجة بحكم التعريف. الخطأ: يعطي الطرح نتيجة سالبة، وهي بلا معنى هندسي هنا. الإصلاح: تحقق من أن المدخل أقل من 90 درجة.",
        "<strong>إدخال 0 درجة.</strong> الزاوية الصفرية تُسقط المثلث إلى قطعة مستقيمة. الخطأ: تدَّعي النتيجة متممة قياسها 90 درجة لشكل بلا مساحة. الإصلاح: استخدم زوايا حادة موجبة فقط.",
        "<strong>الخلط بين الزوايا المتتامة والزوايا المتكاملة.</strong> مجموع الثنائيات المتتامة 90 درجة؛ ومجموع الثنائيات المتكاملة 180 درجة. الخطأ: الطرح من 180 ينتج الخطأ الوارد في البند 1. الإصلاح: اربط الكلمة بالمجموع: المتتامة مع 90.",
        "<strong>افتراض أن الزاويتين الحادتين يجب أن تكونا متساويتين.</strong> لا يتحقق التساوي إلا عند 45 درجة لكل منهما. الخطأ: توقع التماثل في مثلث 20-70. الإصلاح: دع الطرح يقرر؛ فمعظم الثنائيات مختلفة.",
        "<strong>الخلط بين تسميتي الزاويتين A وB.</strong> تأخذ الحاسبة [[A]] وتعيد [[B]]. الخطأ: إدخال المتممة المعروفة أصلًا كما لو كانت المدخل. الإصلاح: سمِّ الزاوية المعروفة A قبل كتابة أي شيء.",
        "<strong>الاعتقاد بأن أطوال الأضلاع مطلوبة لهذا الحساب بالذات.</strong> الأضلاع مهمة لعلم المثلثات، لا للمتممات. الخطأ: التوقف عند مسألة لا تحتاج إلا إلى طرح. الإصلاح: إذا كانت زاوية حادة معروفة، فاطرحها من 90 وانتهِ.",
        "<strong>استخدام الجيب أو جيب التمام أو الظل العكسية عندما يكفي طرح بسيط.</strong> تجيب الدوال العكسية عن سؤال أصعب. الخطأ: عمل إضافي وفرص إضافية لأخطاء الوضع. الإصلاح: عندما تكون الزاوية معروفة، فإن حاسبة إيجاد الزاوية من الجيب ونظيراتها هي الأدوات الخاطئة؛ فالطرح دقيق وفوري.",
        "<strong>افتراض أن زاوية فيزيائية مقاسة تشكِّل تلقائيًا مثلثًا قائم الزاوية دون التحقق من اتجاهي المرجع.</strong> الزوايا الحقيقية نادرًا ما تكون مثالية. الخطأ: تطبيق قاعدة التتميم حيث لا توجد زاوية قائمة قياسها 90 درجة فعلًا. الإصلاح: تحقق من تعامد اتجاهي المرجع قبل الطرح.",
        "<strong>تقريب قياس المدخل دون داعٍ قبل الطرح.</strong> التقريب المبكر يهدر الدقة التي كان المدخل يملكها فعلًا. الخطأ: تقريب 68.5 إلى 69 يعطي 21 بدلًا من 21.5. الإصلاح: اطرح بالقيمة المقاسة الكاملة، ثم قرِّب النتيجة لتطابق دقة المدخل."
      ]
    },
    "missing-verify": {
      "h2": "كيفية التحقق من صلاحية الزاوية المفقودة",
      "blocks": [
        {
          "kind": "p",
          "text": "نطاق المدخلات الصالح هو:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "ويجب أن تحقق الزاوية المحسوبة النطاق نفسه:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "مدخل 0 أو 90 درجة ينتج حالة حدية منحطة بدلًا من مثلث قائم زاوية عادي له ثلاثة رؤوس متميزة وأطوال أضلاع موجبة. وتفرض الحاسبة المتباينة الصارمة لهذا السبب بالذات."
        },
        {
          "kind": "h3",
          "text": "الطريقة 1: اجمع الزاويتين الحادتين"
        },
        {
          "kind": "p",
          "text": "تحقق من [[A+B=90^\\circ]]. مثال: [[35^\\circ+55^\\circ=90^\\circ]]. هذا أسرع فحص ويكشف خطأ الـ180 درجة فورًا."
        },
        {
          "kind": "h3",
          "text": "الطريقة 2: تحقق من المثلث الكامل"
        },
        {
          "kind": "p",
          "text": "تحقق من [[A+B+90^\\circ=180^\\circ]]. مثال: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. يؤكد هذا الجواب مقابل مجموع زوايا المثلث العام."
        },
        {
          "kind": "h3",
          "text": "الطريقة 3: تحقق من الحساب العكسي"
        },
        {
          "kind": "p",
          "text": "إذا كانت [[B=90^\\circ-A]]، فإن [[A=90^\\circ-B]] يجب أن تستعيد المدخل الأصلي. مع [[A=35^\\circ]] التي تعطي [[B=55^\\circ]]، يكون التحقق العكسي [[90^\\circ-55^\\circ=35^\\circ]]. ولا يحتاج فحص الاتساق هذا إلى أي قياسات أضلاع."
        },
        {
          "kind": "p",
          "text": "تحذير واحد: إذا جاءت زاوية المدخل من قياس فيزيائي، فإن عدم يقينها ينتقل إلى النتيجة. فـ35 درجة مقاسة تقريبًا تعطي 55 درجة معروفة تقريبًا؛ أبلغ الجواب بدقة تطابق القياس. وبالنسبة للفحوص التي تشمل أطوال الأضلاع، يمكن لحاسبة نظرية فيثاغورس تأكيد هندسة المثلث بشكل مستقل."
        }
      ]
    },
    "missing-choose": {
      "h2": "اختيار حاسبة المثلث القائم الزاوية المناسبة",
      "blocks": [
        {
          "kind": "p",
          "text": "تجيب كل أداة أدناه عن سؤال مختلف. طابِق الأداة مع ما تعرفه فعلًا:"
        }
      ],
      "listItems": [
        "<strong>حاسبة الزاوية المفقودة في المثلث القائم الزاوية</strong> (هذه الصفحة): تجد الزاوية المتممة عندما تكون إحدى الزاويتين الحادتين معروفة أصلًا. استخدمها كلما كان المدخل زاوية لا ضلعًا.",
        "<strong>حاسبة إيجاد الزاوية من الجيب في المثلث القائم الزاوية</strong>: تجد زاوية حادة من الضلع المقابل والوتر. استخدمها عندما يُقاس هذان الطولان.",
        "<strong>حاسبة إيجاد الزاوية من جيب التمام في المثلث القائم الزاوية</strong>: تجد زاوية حادة من الضلع المجاور والوتر.",
        "<strong>حاسبة إيجاد الزاوية من الظل في المثلث القائم الزاوية</strong>: تجد زاوية حادة من الضلعين المقابل والمجاور، أي الضلعين القائمين.",
        "<strong>حاسبة إيجاد الضلع من الجيب في المثلث القائم الزاوية</strong>: تجد طول ضلع مفقود عندما تكون زاوية وضلع معروفين.",
        "<strong>حاسبة إيجاد الضلع من جيب التمام في المثلث القائم الزاوية</strong>: تجد طول ضلع مفقود من زاوية والوتر أو الضلع المجاور.",
        "<strong>حاسبة إيجاد الضلع من الظل في المثلث القائم الزاوية</strong>: تجد ضلعًا قائمًا مفقودًا من زاوية معروفة والضلع القائم الآخر."
      ],
      "closingParagraphs": [
        "قاعدة القرار بسيطة. تعرف زاوية حادة واحدة: استخدم حاسبة الزاوية المفقودة في هذه الصفحة. تعرف طولي ضلعين مناسبين: استخدم حاسبة الدوال المثلثية العكسية المطابقة. تحتاج إلى ضلع مجهول: استخدم حاسبة الأضلاع. وتحتاج إلى الزاوية الثانية بعد حساب مثلثي: اطرح الزاوية المعروفة من 90 درجة، وهذا بالضبط ما تؤتمته هذه الصفحة."
      ]
    },
    "missing-conclusion": {
      "h2": "أوجد أي زاوية مفقودة بثقة",
      "blocks": [
        {
          "kind": "p",
          "text": "حساب الزاوية المفقودة هو أبسط عملية في هندسة المثلث القائم الزاوية: اطرح الزاوية الحادة المعروفة من 90 درجة. وتقف خلف هذا الطرح قاعدة مجموع زوايا المثلث، التي تحجز نصف مجموع كل مثلث للزاوية القائمة وتترك النصف الآخر للثنائي المتتام. سواء جاءت الزاوية المعروفة من عارضة سقف أو سلم أو عارضة درج أو مخطط رسم، فإن الطريقة لا تتغير أبدًا: تأكد من الزاوية القائمة، واطرح من 90، وتحقق من أن مجموع الزاويتين الحادتين 90 درجة. احفظ هذه الصفحة في المفضلة للحظات التي تكون فيها الزاوية معروفة أصلًا ولا ينقص سوى شريكتها."
        }
      ]
    }
  },
  "tocHeading": "في هذا الدليل",
  "tocItems": {
    "missing-angles": "ما هي زوايا المثلث القائم الزاوية؟",
    "missing-applications": "تطبيقات واقعية",
    "missing-choose": "اختيار الحاسبة المناسبة",
    "missing-examples": "أمثلة خطوة بخطوة",
    "missing-faq": "الأسئلة الشائعة",
    "missing-formula": "صيغة إيجاد الزاوية المفقودة",
    "missing-howto": "كيفية استخدام الحاسبة",
    "missing-intro": "كيفية إيجاد زاوية مفقودة في مثلث قائم الزاوية",
    "missing-mistakes": "أخطاء شائعة",
    "missing-related": "حاسبات ذات صلة",
    "missing-relationship": "كيف تتغير الزوايا المتتامة",
    "missing-reverse": "ماذا لو كنت تعرف الزاوية B بدلًا من ذلك؟",
    "missing-verify": "التحقق من جوابك",
    "missing-vs": "الزوايا المتتامة مقابل الزوايا المتكاملة"
  },
  "faqs": [
    {
      "question": "كيف تجد زاوية مفقودة في مثلث قائم الزاوية؟",
      "answer": "اطرح الزاوية الحادة المعروفة من 90 درجة. الصيغة هي B = 90 - A، حيث A هي الزاوية التي تعرفها وB هي المفقودة. فمثلًا، إذا كانت A قياسها 35 درجة، فإن B = 90 - 35 = 55 درجة. لا حاجة إلى أطوال الأضلاع أو الدوال المثلثية."
    },
    {
      "question": "لماذا يساوي مجموع الزاويتين الحادتين 90 درجة؟",
      "answer": "يحتوي كل مثلث على 180 درجة في المجموع. ويحجز المثلث القائم الزاوية 90 درجة منها لزاويته القائمة، فيتبقى 90 درجة بالضبط لتتقاسمها الزاويتان الحادتان الباقيتان. وهذا سبب أن A + B يساوي 90 درجة دائمًا في المثلث القائم الزاوية."
    },
    {
      "question": "ما هي صيغة الزاوية المفقودة؟",
      "answer": "الصيغة هي B = 90 - A. ابدأ من مجموع زوايا المثلث A + B + 90 = 180، واطرح 90 من الطرفين لتحصل على A + B = 90، ثم اطرح A من الطرفين. والصيغة العكسية A = 90 - B تعمل بالطريقة نفسها عندما تكون B هي الزاوية المعروفة."
    },
    {
      "question": "ما هي الزوايا المتتامة؟",
      "answer": "تكون الزاويتان متتامتين عندما يساوي مجموع قياسيهما 90 درجة. والثنائيات 30 و60، و35 و55، و45 و45 كلها متتامة. وفي كل مثلث قائم الزاوية تكون الزاويتان الحادتان متتامتين بحكم التعريف، وهذا بالضبط ما تعبِّر عنه صيغة الزاوية المفقودة."
    },
    {
      "question": "هل يمكنني إيجاد الزاوية المفقودة دون معرفة أطوال الأضلاع؟",
      "answer": "نعم. عندما تكون إحدى الزاويتين الحادتين معروفة، تصبح أطوال الأضلاع غير ذات صلة بهذا الحساب. فالعلاقة بين الزاويتين المتتامتين تعتمد على مجموع الزوايا فقط، لذا يعطي الطرح من 90 درجة الجواب الدقيق. ولا تهم أطوال الأضلاع إلا عندما لا تكون هناك زاوية معروفة بعد."
    },
    {
      "question": "ما الفرق بين الزوايا المتتامة والزوايا المتكاملة؟",
      "answer": "مجموع الزوايا المتتامة 90 درجة؛ ومجموع الزوايا المتكاملة 180 درجة. والزاويتان الحادتان في المثلث القائم الزاوية متتامتان. والخطأ الشائع هو طرح الزاوية المعروفة من 180 بدلًا من 90، وهو ما ينسى أن الزاوية القائمة تمثل أصلًا نصف مجموع المثلث."
    },
    {
      "question": "هل يمكن أن تتساوى الزاويتان الحادتان؟",
      "answer": "نعم، عندما يكون قياس كل منهما 45 درجة. فعندها 90 - 45 = 45، ويكون المثلث قائم الزاوية متساوي الساقين وله ضلعان قائمان متساويان. وهذه هي الحالة الوحيدة التي تتطابق فيها الزاويتان الحادتان؛ وفي كل مثلث قائم زاوية آخر تختلفان."
    },
    {
      "question": "ماذا يحدث إذا كانت الزاوية المعروفة 35 درجة؟",
      "answer": "الزاوية المفقودة هي 90 - 35 = 55 درجة. ويمكنك التحقق منها بطريقتين: 35 + 55 = 90 يؤكد الثنائي المتتام، و35 + 55 + 90 = 180 يؤكد مجموع زوايا المثلث الكامل. ويجب أن يتفق الفحصان دائمًا."
    },
    {
      "question": "ماذا يحدث إذا كانت الزاوية المعروفة أكبر من 45 درجة؟",
      "answer": "تخرج الزاوية المفقودة أصغر من 45 درجة، لأن مجموعهما يجب أن يبقى 90. فمثلًا، إذا كانت A قياسها 68 درجة، فإن B = 90 - 68 = 22 درجة. وكلما كبرت الزاوية المعروفة مقتربة من 90، صغرت متممتها مقتربة من 0."
    },
    {
      "question": "هل يمكن أن تكون الزاوية الحادة المفقودة 0 أو 90 درجة بالضبط؟",
      "answer": "ليس في مثلث قائم زاوية عادي. فمدخل 0 أو 90 درجة يصف حالة حدية منحطة بلا مساحة مثلثية حقيقية، وليس مثلثًا له ثلاثة رؤوس متميزة. وتتطلب الحاسبة أن تكون الزاوية المعروفة بين 0 و90 درجة حصرًا، والنتيجة تقع دائمًا في النطاق نفسه."
    },
    {
      "question": "كيف أجد الزاوية A عندما تكون الزاوية B معروفة؟",
      "answer": "استخدم الصيغة العكسية A = 90 - B. فهي العلاقة المتممة نفسها محلولةً للمتغير الآخر. فمثلًا، إذا كانت B قياسها 62 درجة، فإن A = 90 - 62 = 28 درجة. لاحظ أن هذه الحاسبة تقبل الزاوية A مدخلًا لها، لذا طبِّق الصيغة العكسية يدويًا عندما تكون B وحدها هي المعروفة."
    },
    {
      "question": "متى أستخدم حاسبة الجيب أو جيب التمام أو الظل بدلًا من ذلك؟",
      "answer": "استخدم حاسبة الدوال المثلثية العكسية عندما لا تكون هناك زاوية معروفة بعد لكن طولي ضلعين معروفان. فتحتاج حاسبة إيجاد الزاوية من الجيب إلى الضلع المقابل والوتر، وحاسبة إيجاد الزاوية من جيب التمام إلى الضلع المجاور والوتر، وحاسبة إيجاد الزاوية من الظل إلى الضلعين القائمين. وبمجرد معرفة أي زاوية حادة، تُكمل حاسبة الزاوية المفقودة المهمة."
    }
  ],
  "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة",
  "relatedItems": [
    "حاسبة إيجاد الزاوية من الجيب في المثلث القائم الزاوية",
    "حاسبة إيجاد الزاوية من جيب التمام في المثلث القائم الزاوية",
    "حاسبة إيجاد الزاوية من الظل في المثلث القائم الزاوية",
    "حاسبة إيجاد الضلع من الجيب في المثلث القائم الزاوية",
    "حاسبة إيجاد الضلع من جيب التمام في المثلث القائم الزاوية",
    "حاسبة إيجاد الضلع من الظل في المثلث القائم الزاوية"
  ]
  },
  "bg": {
  "faqs": [
    {
      "answer": "Извадете известния остър ъгъл от 90 градуса. Формулата е B = 90 - A, където A е ъгълът, който знаете, а B е липсващият. Например, ако A е 35 градуса, то B = 90 - 35 = 55 градуса. Не са нужни дължини на страни или тригонометрични функции.",
      "question": "Как се намира липсващ ъгъл в правоъгълен триъгълник?"
    },
    {
      "answer": "Всеки триъгълник съдържа общо 180 градуса. Правоъгълният триъгълник запазва 90 от тези градуси за своя прав ъгъл, което оставя точно 90 градуса, които да се поделят между двата останали остри ъгъла. Затова A + B винаги е равно на 90 градуса в правоъгълен триъгълник.",
      "question": "Защо двата остри ъгъла се събират до 90 градуса?"
    },
    {
      "answer": "Формулата е B = 90 - A. Започнете от сумата на ъглите в триъгълника A + B + 90 = 180, извадете 90 от двете страни, за да получите A + B = 90, след това извадете A от двете страни. Обратната форма, A = 90 - B, работи по същия начин, когато B е известният ъгъл.",
      "question": "Каква е формулата за липсващ ъгъл?"
    },
    {
      "answer": "Два ъгъла са допълващи се, когато мерките им се събират до 90 градуса. Двойките 30 и 60, 35 и 55, както и 45 и 45 са допълващи се. Във всеки правоъгълен триъгълник двата остри ъгъла са допълващи се по определение, което е точно това, което изразява формулата за липсващ ъгъл.",
      "question": "Какво са допълващите се ъгли?"
    },
    {
      "answer": "Да. Когато е известен един остър ъгъл, дължините на страните са без значение за това изчисление. Зависимостта между допълващите се ъгли зависи само от сумата на ъглите, така че изваждането от 90 градуса дава точния отговор. Дължините на страните имат значение само когато все още не е известен никой ъгъл.",
      "question": "Мога ли да намеря липсващия ъгъл, без да знам дължините на страните?"
    },
    {
      "answer": "Допълващите се ъгли се събират до 90 градуса; допълнителните ъгли се събират до 180 градуса. Двата остри ъгъла на правоъгълния триъгълник са допълващи се. Честа грешка е изваждането на известния ъгъл от 180 вместо от 90, което забравя, че правият ъгъл вече отчита половината от общия сбор на триъгълника.",
      "question": "Каква е разликата между допълващи се и допълнителни ъгли?"
    },
    {
      "answer": "Да, когато всеки е по 45 градуса. Тогава 90 - 45 = 45, така че триъгълникът е равнобедрен правоъгълен триъгълник с два равни катета. Това е единственият случай, в който двата остри ъгъла съвпадат; във всеки друг правоъгълен триъгълник те се различават.",
      "question": "Могат ли и двата остри ъгъла да са равни?"
    },
    {
      "answer": "Липсващият ъгъл е 90 - 35 = 55 градуса. Можете да го проверите по два начина: 35 + 55 = 90 потвърждава допълващата се двойка, а 35 + 55 + 90 = 180 потвърждава пълната сума на ъглите в триъгълника. И двете проверки винаги трябва да съвпадат.",
      "question": "Какво се случва, ако известният ъгъл е 35 градуса?"
    },
    {
      "answer": "Липсващият ъгъл излиза по-малък от 45 градуса, защото двата все пак трябва да са общо 90. Например, ако A е 68 градуса, то B = 90 - 68 = 22 градуса. С нарастването на известния ъгъл към 90, неговото допълнение намалява към 0.",
      "question": "Какво се случва, ако известният ъгъл е по-голям от 45 градуса?"
    },
    {
      "answer": "Не в обикновен правоъгълен триъгълник. Вход от 0 или 90 градуса описва изроден граничен случай без реална триъгълна площ, а не триъгълник с три различни върха. Калкулаторът изисква известният ъгъл да бъде строго между 0 и 90 градуса, а резултатът винаги попада в същия диапазон.",
      "question": "Може ли липсващ остър ъгъл да бъде точно 0 или 90 градуса?"
    },
    {
      "answer": "Използвайте обратната формула A = 90 - B. Това е същата зависимост между допълващите се ъгли, решена за другата променлива. Например, ако B е 62 градуса, то A = 90 - 62 = 28 градуса. Обърнете внимание, че този калкулатор приема ъгъл A като вход, така че прилагайте обратната формула на ръка, когато е известен само B.",
      "question": "Как да намеря ъгъл A, когато е известен ъгъл B?"
    },
    {
      "answer": "Използвайте калкулатор с обратни тригонометрични функции, когато все още не е известен никой ъгъл, но са известни две дължини на страни. Калкулаторът за ъгъл от синус се нуждае от срещулежащата страна и хипотенузата, калкулаторът за ъгъл от косинус се нуждае от прилежащата страна и хипотенузата, а калкулаторът за ъгъл от тангенс се нуждае от двата катета. Щом е известен който и да е остър ъгъл, калкулаторът за липсващ ъгъл довършва работата.",
      "question": "Кога да използвам калкулатор за синус, косинус или тангенс вместо това?"
    }
  ],
  "relatedHeading": "Разгледайте свързаните триъгълни калкулатори",
  "relatedItems": [
    "Калкулатор за ъгъл от синус в правоъгълен триъгълник",
    "Калкулатор за ъгъл от косинус в правоъгълен триъгълник",
    "Калкулатор за ъгъл от тангенс в правоъгълен триъгълник",
    "Калкулатор за страна от синус в правоъгълен триъгълник",
    "Калкулатор за страна от косинус в правоъгълен триъгълник",
    "Калкулатор за страна от тангенс в правоъгълен триъгълник"
  ],
  "sections": {
    "missing-angles": {
      "blocks": [
        {
          "kind": "h3",
          "text": "Правият ъгъл"
        },
        {
          "kind": "p",
          "text": "Ъгълът от 90 градуса представлява идеален ъгъл, ъгълът между вертикална стена и хоризонтален под. Във всеки правоъгълен триъгълник този ъгъл е фиксиран: той никога не променя размера си, а на диаграмите се отбелязва с малък квадрат при върха. Тъй като един ъгъл е постоянно зададен на 90 градуса, другите два ъгъла имат само 90 градуса, които да си поделят, което ги принуждава и двата да бъдат остри."
        },
        {
          "kind": "h3",
          "text": "Двата остри ъгъла"
        },
        {
          "kind": "p",
          "text": "Острият ъгъл е по-голям от [[0^\\circ]] и по-малък от [[90^\\circ]]. И двата останали ъгъла на правоъгълния триъгълник попадат в този диапазон и се наричат допълващи се, защото мерките им винаги се събират до 90 градуса. Съвпадението е строго: един известен остър ъгъл оставя точно една възможна стойност за своя партньор, така че липсващият ъгъл никога не е въпрос на оценка."
        },
        {
          "kind": "h3",
          "text": "Какво са допълващите се ъгли?"
        },
        {
          "kind": "p",
          "text": "Два ъгъла са допълващи се, когато мерките им се събират до [[90^\\circ]]. Двойките [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] и [[45^\\circ+45^\\circ=90^\\circ]] са допълващи се. Допълващите се ъгли не е нужно да са равни; равенство има само при 45 градуса за всеки. Всеки два положителни ъгъла, които общо са 90 градуса, са подходящи, независимо дали се намират в един и същ триъгълник, или не."
        },
        {
          "kind": "h3",
          "text": "Защо ъглите на триъгълника се събират до 180 градуса"
        },
        {
          "kind": "p",
          "text": "Всеки триъгълник, каквато и форма да има, съдържа точно 180 градуса в трите си вътрешни ъгъла. В правоъгълния триъгълник фиксираният прав ъгъл веднага взема 90 от тези градуси, което оставя точно 90 градуса за двата остри ъгъла заедно. Диаграмата по-долу показва пълната сметка за триъгълник с ъгли 35, 55 и 90 градуса."
        }
      ],
      "figcaption": "Ъглите A (35 градуса) и B (55 градуса) са допълващи се: A + B = 90 градуса, а 35 + 55 + 90 = 180 градуса.",
      "h2": "Какви са ъглите в правоъгълен триъгълник?",
      "imgAlt": "Правоъгълен триъгълник, означен с ъгли A 35 градуса, B 55 градуса, C 90 градуса"
    },
    "missing-applications": {
      "blocks": [
        {
          "kind": "p",
          "text": "Един момент изисква внимание, преди да започнат примерите. Формулата за липсващ ъгъл се прилага директно, когато два ъгъла принадлежат на един и същ правоъгълен триъгълник. В практически условия хоризонталната повърхност и вертикалната повърхност често служат като перпендикулярни референтни линии, а диагонален елемент като стълба или покривна греда образува хипотенузата. Примерите по-долу посочват това допускане навсякъде, където е използвано."
        },
        {
          "kind": "h3",
          "text": "Пример 5: Намиране на ъгъла на покривна греда спрямо вертикалата"
        },
        {
          "kind": "p",
          "text": "Покривна греда сключва ъгъл от [[35^\\circ]] с хоризонталата. Намерете ъгъла между същата греда и вертикална референтна линия."
        },
        {
          "kind": "p",
          "text": "Дадено [[A=35^\\circ]], измерено от хоризонталата."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Хоризонталните и вертикалните референтни линии са перпендикулярни, така че двата ъгъла са допълващи се. Резултатът от 55 градуса е ъгълът спрямо вертикалата, а не пълно изчисление на наклон на покрива или конструкция."
        },
        {
          "kind": "h3",
          "text": "Пример 6: Намиране на ъгъла на стълба спрямо стена"
        },
        {
          "kind": "p",
          "text": "Стълба е опряна на вертикална стена и образува ъгъл от [[68^\\circ]] с хоризонталната земя. Намерете ъгъла между стълбата и стената."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Земята и стената образуват прав ъгъл в този идеализиран модел, като стълбата е хипотенузата. Ъгълът от 22 градуса описва ориентацията на стълбата спрямо стената. Самостоятелното изчисление не установява дали стълбата е позиционирана безопасно."
        },
        {
          "kind": "h3",
          "text": "Пример 7: Разбиране на ъгъла на рампа спрямо вертикалата"
        },
        {
          "kind": "p",
          "text": "Права рампа сключва ъгъл от [[8^\\circ]] с хоризонталата. Намерете допълващия ъгъл между посоката на рампата и вертикална референтна линия."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Ъгълът на рампата спрямо вертикалата е допълнението на ъгъла й спрямо хоризонталата. Плитък наклон от 8 градуса оставя стръмен ъгъл от 82 градуса спрямо вертикалата. Само този ъгъл не определя достъпността или съответствието с нормите."
        },
        {
          "kind": "h3",
          "text": "Пример 8: Намиране на допълващия ъгъл на стълбищна греда"
        },
        {
          "kind": "p",
          "text": "Стълбищна греда сключва ъгъл от [[32^\\circ]] с пода. Изчислете ъгъла й спрямо вертикална референтна линия."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Подът, вертикалната референция и диагоналната греда образуват правоъгълния триъгълник. Резултатът от 58 градуса описва ориентацията на гредата спрямо вертикалата. Той не проверява размерите на стълбището или съответствието със строителните норми."
        },
        {
          "kind": "h3",
          "text": "Пример 9: Изчисляване на ъгъла на диагонална скоба спрямо вертикална опора"
        },
        {
          "kind": "p",
          "text": "Диагонална скоба сключва ъгъл от [[40^\\circ]] с хоризонтална греда. Намерете ъгъла между скобата и перпендикулярна вертикална опора."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Двете референтни посоки трябва да са перпендикулярни, за да се прилага правилото за допълнение. Ъгълът от 50 градуса е чист геометричен резултат; той не определя конструктивната якост на скобата."
        },
        {
          "kind": "h3",
          "text": "Пример 10: Намиране на ъгъла на опъващо въже спрямо вертикален стълб"
        },
        {
          "kind": "p",
          "text": "Опъващо въже сключва ъгъл от [[30^\\circ]] с хоризонталната земя. Намерете ъгъла между въжето и вертикален стълб."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Хоризонталната земя и вертикалният стълб определят правия ъгъл, като въжето е хипотенузата. Резултатът от 60 градуса преформулира същата посока на въжето спрямо вертикалната референция. Той не установява опъна на въжето или безопасността на котвата."
        },
        {
          "kind": "h3",
          "text": "Пример 11: Преобразуване на ъгъл на издигане в неговото допълнение"
        },
        {
          "kind": "p",
          "text": "Геодезическа диаграма отчита линия на визиране при ъгъл на издигане от [[24^\\circ]] над хоризонталата. Изчислете нейния допълващ ъгъл спрямо вертикалата."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Ъгъл, измерен от хоризонталата, и ъгъл, измерен от вертикалата, описват една и съща линия на визиране от перпендикулярни гледни точки. Примерът предполага права линия на визиране с перпендикулярни хоризонтални и вертикални референции."
        },
        {
          "kind": "h3",
          "text": "Пример 12: Намиране на ъгъла на покривен скат спрямо вертикална референция"
        },
        {
          "kind": "p",
          "text": "Покривен скат е измерен на [[27^\\circ]] спрямо хоризонталата. Намерете неговия допълващ ъгъл спрямо вертикалата."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Двете измервания описват един и същ скат от различни перпендикулярни референтни посоки. Нито едно измерване само по себе си не е конструктивна оценка."
        },
        {
          "kind": "h3",
          "text": "Пример 13: Диагонал в квадратна чертожна схема"
        },
        {
          "kind": "p",
          "text": "Диагонална линия в квадратна чертожна схема сключва ъгъл от [[45^\\circ]] с една страна. Намерете ъгъла, който сключва със съседната перпендикулярна страна."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Диагоналът разполовява правия ъгъл на квадрата, така че и двата получени ъгъла са по 45 градуса. Тази зависимост помага при основни проверки на чертане и разположение: ако измереният диагонал не разделя ъгъла равномерно, схемата не е квадрат."
        },
        {
          "kind": "h3",
          "text": "Пример 14: Намиране на допълващия ъгъл на машинен панел"
        },
        {
          "kind": "p",
          "text": "Панел е наклонен на [[15^\\circ]] от хоризонталата. Изчислете ъгъла между ориентацията на панела и вертикалната референтна посока."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Хоризонталните и вертикалните референции са перпендикулярни, така че наклонът на панела и неговото допълнение описват една и съща ориентация. Резултатът описва само ориентацията, а не безопасността или производителността на машината."
        },
        {
          "kind": "h3",
          "text": "Пример 15: Преобразуване на ъгъл на наблюдение на дърво"
        },
        {
          "kind": "p",
          "text": "Човек гледа към върха на дърво под ъгъл на издигане от [[38^\\circ]] над хоризонталата. Намерете допълващия ъгъл между линията на визиране и вертикална референтна посока."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Изчислението променя референтната посока, а не самата линия на визиране. Ъгълът от 52 градуса е просто същият поглед, измерен спрямо вертикалата. Той не изчислява височината на дървото."
        },
        {
          "kind": "h3",
          "text": "Пример 16: Намиране на ъгъла на парапет спрямо вертикална опора"
        },
        {
          "kind": "p",
          "text": "Диагонален парапет сключва ъгъл от [[55^\\circ]] с хоризонтална площадка. Намерете неговия допълващ ъгъл спрямо вертикална опорна линия."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Допълващият ъгъл описва същата диагонална ориентация от различна референция. Стръмният ъгъл от 55 градуса спрямо хоризонталата се превръща в плитък ъгъл от 35 градуса спрямо вертикалата. Само ъгълът не проверява изискванията за достъпност или строителство."
        },
        {
          "kind": "h3",
          "text": "Практическите примери сравнени"
        }
      ],
      "h2": "Приложения на липсващите ъгли в реалния живот",
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Ситуация",
          "Известен ъгъл",
          "Референтна посока",
          "Липсващ ъгъл",
          "Изчисление",
          "Тълкуване"
        ],
        "rows": [
          [
            "Покривна греда",
            "35&deg;",
            "Хоризонтала",
            "55&deg;",
            "90 - 35",
            "Ъгъл на гредата спрямо вертикалата"
          ],
          [
            "Стълба",
            "68&deg;",
            "Земя",
            "22&deg;",
            "90 - 68",
            "Ъгъл на стълбата спрямо стената"
          ],
          [
            "Рампа",
            "8&deg;",
            "Хоризонтала",
            "82&deg;",
            "90 - 8",
            "Посока на рампата спрямо вертикалата"
          ],
          [
            "Стълбищна греда",
            "32&deg;",
            "Под",
            "58&deg;",
            "90 - 32",
            "Ъгъл на гредата спрямо вертикалата"
          ],
          [
            "Диагонална скоба",
            "40&deg;",
            "Хоризонтална греда",
            "50&deg;",
            "90 - 40",
            "Ъгъл на скобата спрямо вертикалната опора"
          ],
          [
            "Опъващо въже",
            "30&deg;",
            "Земя",
            "60&deg;",
            "90 - 30",
            "Ъгъл на въжето спрямо стълба"
          ],
          [
            "Геодезическа линия на визиране",
            "24&deg;",
            "Хоризонтала",
            "66&deg;",
            "90 - 24",
            "Линия на визиране спрямо вертикалата"
          ],
          [
            "Покривен скат",
            "27&deg;",
            "Хоризонтала",
            "63&deg;",
            "90 - 27",
            "Ъгъл на ската спрямо вертикалата"
          ],
          [
            "Чертожен диагонал",
            "45&deg;",
            "Една страна",
            "45&deg;",
            "90 - 45",
            "Диагонал спрямо съседната страна"
          ],
          [
            "Машинен панел",
            "15&deg;",
            "Хоризонтала",
            "75&deg;",
            "90 - 15",
            "Ориентация на панела спрямо вертикалата"
          ],
          [
            "Наблюдение на дърво",
            "38&deg;",
            "Хоризонтала",
            "52&deg;",
            "90 - 38",
            "Линия на визиране спрямо вертикалата"
          ],
          [
            "Парапет",
            "55&deg;",
            "Площадка",
            "35&deg;",
            "90 - 55",
            "Парапет спрямо вертикалната опора"
          ]
        ]
      }
    },
    "missing-choose": {
      "blocks": [
        {
          "kind": "p",
          "text": "Всеки инструмент по-долу отговаря на различен въпрос. Съчетайте инструмента с това, което действително знаете:"
        }
      ],
      "closingParagraphs": [
        "Правилото за решение е просто. Знаете един остър ъгъл: използвайте калкулатора за липсващ ъгъл на тази страница. Знаете две подходящи дължини на страни: използвайте съответния калкулатор с обратни тригонометрични функции. Трябва ви неизвестна страна: използвайте калкулатор за страна. А след тригонометрично изчисление ви трябва вторият ъгъл: извадете известния ъгъл от 90 градуса, което е точно това, което тази страница автоматизира."
      ],
      "h2": "Избор на подходящ калкулатор за правоъгълен триъгълник",
      "listItems": [
        "<strong>Калкулатор за липсващ ъгъл в правоъгълен триъгълник</strong> (тази страница): намира допълващия ъгъл, когато един остър ъгъл вече е известен. Използвайте го винаги, когато входът е ъгъл, а не страна.",
        "<strong>Калкулатор за ъгъл от синус в правоъгълен триъгълник</strong>: намира остър ъгъл от срещулежащата страна и хипотенузата. Използвайте го, когато тези две дължини са измерени.",
        "<strong>Калкулатор за ъгъл от косинус в правоъгълен триъгълник</strong>: намира остър ъгъл от прилежащата страна и хипотенузата.",
        "<strong>Калкулатор за ъгъл от тангенс в правоъгълен триъгълник</strong>: намира остър ъгъл от срещулежащата и прилежащата страна, двата катета.",
        "<strong>Калкулатор за страна от синус в правоъгълен триъгълник</strong>: намира липсваща дължина на страна, когато са известни ъгъл и една страна.",
        "<strong>Калкулатор за страна от косинус в правоъгълен триъгълник</strong>: намира липсваща дължина на страна от известен ъгъл и хипотенузата или прилежащата страна.",
        "<strong>Калкулатор за страна от тангенс в правоъгълен триъгълник</strong>: намира липсващ катет от известен ъгъл и другия катет."
      ]
    },
    "missing-conclusion": {
      "blocks": [
        {
          "kind": "p",
          "text": "Изчислението на липсващ ъгъл е най-простата операция в геометрията на правоъгълния триъгълник: извадете известния остър ъгъл от 90 градуса. Зад това изваждане стои правилото за сумата на ъглите в триъгълника, което запазва половината от всеки сбор на триъгълник за правия ъгъл и оставя другата половина на допълващата се двойка. Независимо дали известният ъгъл идва от покривна греда, стълба, стълбищна греда или чертожна схема, методът никога не се променя: потвърдете правия ъгъл, извадете от 90 и проверете, че двата остри ъгъла общо са 90 градуса. Запазете тази страница в отметките си за моментите, когато ъгълът вече е известен и липсва само неговият партньор."
        }
      ],
      "h2": "Намерете всеки липсващ ъгъл с увереност"
    },
    "missing-examples": {
      "blocks": [
        {
          "kind": "p",
          "text": "Тези четири примера изграждат основното умение преди приложенията в реалния живот. Всеки следва една и съща схема: напишете формулата, заместете, извадете."
        },
        {
          "kind": "h3",
          "text": "Пример 1: Известен ъгъл от 35 градуса"
        },
        {
          "kind": "p",
          "text": "Дадено [[A=35^\\circ]], намерете ъгъл [[B]]."
        },
        {
          "kind": "p",
          "text": "Стъпка 1: Напишете формулата. [[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "Стъпка 2: Заместете известния ъгъл. [[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Стъпка 3: Извадете. [[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Проверка: [[35^\\circ+55^\\circ=90^\\circ]]. Отговорът е валиден, защото двата остри ъгъла общо са точно 90 градуса и всеки е строго между 0 и 90 градуса."
        },
        {
          "kind": "h3",
          "text": "Пример 2: Известен ъгъл от 20 градуса"
        },
        {
          "kind": "p",
          "text": "Дадено [[A=20^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "По-малък остър ъгъл дава по-голям допълващ ъгъл. Тъй като двойката винаги трябва да е общо 90 градуса, всеки градус, отнет от единия ъгъл, се добавя към другия. Тук ъгълът от 20 градуса оставя щедри 70 градуса за своя партньор."
        },
        {
          "kind": "h3",
          "text": "Пример 3: Равнобедрен правоъгълен триъгълник"
        },
        {
          "kind": "p",
          "text": "Дадено [[A=45^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "И двата остри ъгъла са равни, по 45 градуса всеки. Това е равнобедреният правоъгълен триъгълник, единственият правоъгълен триъгълник, чиито остри ъгли съвпадат. Двата му катета също са равни по дължина, поради което триъгълникът 45-45-90 се среща толкова често в чертожните и строителните разположения."
        },
        {
          "kind": "h3",
          "text": "Пример 4: Известен ъгъл от 68.5 градуса"
        },
        {
          "kind": "p",
          "text": "Дадено [[A=68.5^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Относително голям остър ъгъл има относително малко допълнение. Десетичният вход работи точно като вход с цяло число: извадете внимателно, като подравните .5, и 90 минус 68.5 дава 21.5. Проверката все още е в сила: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
        }
      ],
      "h2": "Примерни задачи стъпка по стъпка за намиране на липсващи ъгли"
    },
    "missing-formula": {
      "blocks": [
        {
          "kind": "p",
          "text": "Формулата идва директно от правилото за сумата на ъглите в триъгълника. Започнете с общото твърдение:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Тъй като триъгълникът е правоъгълен, третият ъгъл е фиксиран:"
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Заместете тази стойност в сумата:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Извадете 90 градуса от двете страни и двата остри ъгъла остават сами:"
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Накрая извадете известния ъгъл [[A]] от двете страни, за да изолирате липсващия ъгъл:"
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "Всяка стъпка е обикновена алгебра, приложена към геометричен факт. Нищо не се заучава наизуст: 90-те градуса във формулата са делът от сумата на ъглите, който остава, след като правият ъгъл вземе своята половина."
        },
        {
          "kind": "p",
          "text": "Същата зависимост работи и в обратна посока. Ако ъгъл [[B]] е известният, решаването за [[A]] дава:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Този калкулатор използва първата форма, защото входното му поле приема ъгъл [[A]] и връща ъгъл [[B]]. Двете формули не са различни правила; те са същата зависимост между допълващите се ъгли, решена за различни неизвестни."
        },
        {
          "kind": "h3",
          "text": "Защо 90 градуса, а не 180 градуса"
        },
        {
          "kind": "p",
          "text": "Честа грешка е изваждането на известния ъгъл от 180 градуса. Този сбор обхваща и трите ъгъла на триъгълника, така че използването му само по себе си забравя, че правият ъгъл вече е отчетен. При [[A=35^\\circ]] грешното изчисление дава [[180^\\circ-35^\\circ=145^\\circ]], което не може да бъде остър ъгъл на никакъв правоъгълен триъгълник. Правилното изчисление, [[90^\\circ-35^\\circ=55^\\circ]], зачита правия ъгъл и може да се провери веднага: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
        }
      ],
      "figcaption": "Част A показва пълната сума на триъгълника; част B изолира допълващите се остри ъгли.",
      "h2": "Формулата за намиране на липсващ ъгъл",
      "imgAlt": "Два панела, противопоставящи сумата на триъгълника от 180 градуса с двойката остри ъгли от 90 градуса"
    },
    "missing-howto": {
      "blocks": [
        {
          "kind": "p",
          "text": "Ръководството по-долу съответства на реалния интерфейс на тази страница."
        }
      ],
      "closingParagraphs": [
        "Обърнете внимание какво калкулаторът никога не иска: никаква дължина на срещулежаща страна, никаква дължина на прилежаща страна, никаква хипотенуза и никакви стойности на синус, косинус или тангенс. Един известен остър ъгъл е целият вход, защото правилото за сумата на ъглите върши останалото. Инструментът също не приема радиани или директно въвеждане на ъгъл [[B]]; входното му поле е конкретно за ъгъл [[A]] в градуси."
      ],
      "h2": "Как се използва калкулаторът за липсващ ъгъл в правоъгълен триъгълник",
      "steps": [
        "<strong>Определете правоъгълния триъгълник.</strong> Потвърдете, че фигурата има истински ъгъл от 90 градуса, преди да направите каквото и да е; формулата се прилага само за правоъгълни триъгълници.",
        "<strong>Намерете острия ъгъл, който вече знаете.</strong> Това е ъгъл [[A]], стойността, която ще въведете в калкулатора.",
        "<strong>Потвърдете, че известният ъгъл е валиден.</strong> Той трябва да бъде по-голям от [[0^\\circ]] и по-малък от [[90^\\circ]]. Всичко извън този диапазон не може да бъде остър ъгъл на правоъгълен триъгълник.",
        "<strong>Въведете известния ъгъл [[A]] в градуси.</strong> Входното поле приема десетични стойности като 68.5, така че запазете точността на измерването си.",
        "<strong>Натиснете бутона Изчисли ъгъл B.</strong> Инструментът прилага [[B=90^\\circ-A]] към въведената стойност.",
        "<strong>Прочетете изчисления допълващ ъгъл.</strong> Изходът е ъгъл [[B]] в градуси.",
        "<strong>Съберете двата остри ъгъла, за да проверите резултата.</strong> Сумата трябва да е равна на 90 градуса; ако не е, проверете отново въведената стойност.",
        "<strong>Използвайте бутона Нулиране, когато искате да започнете ново изчисление.</strong> Това изчиства въведената стойност, за да може да се въведе нов ъгъл."
      ]
    },
    "missing-intro": {
      "blocks": [
        {
          "kind": "p",
          "text": "Ако един остър ъгъл на правоъгълен триъгълник е [[35^\\circ]], липсващият ъгъл е [[90^\\circ-35^\\circ=55^\\circ]]. Това едно изваждане е цялото изчисление. Правоъгълният триъгълник винаги съдържа един ъгъл от 90 градуса, така че останалите два ъгъла трябва да си поделят точно оставащите 90 градуса. Изваждането на известния ъгъл от 90 градуса разкрива липсващия, без дължини на страни и без тригонометрични функции."
        },
        {
          "kind": "p",
          "text": "Отговорът, в този случай 55 градуса, представлява другият остър ъгъл в същия правоъгълен триъгълник. Двата ъгъла винаги действат като двойка: познаването на единия определя изцяло другия. Този калкулатор съществува точно за този случай, когато един ъгъл вече е известен и липсва само неговият допълващ ъгъл. Когато все още не е известен никой ъгъл, калкулаторът за ъгъл от тангенс или някой от неговите съответници за синус и косинус извежда първия ъгъл от измерени страни."
        }
      ],
      "h2": "Как да намерим липсващ ъгъл в правоъгълен триъгълник"
    },
    "missing-mistakes": {
      "blocks": [
        {
          "kind": "h3",
          "text": "Грешно срещу правилно"
        },
        {
          "kind": "p",
          "text": "Дадено [[A=35^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "Неправилно: [[180^\\circ-35^\\circ=145^\\circ]]. Това не е липсващият остър ъгъл, защото правият ъгъл не е отчетен; 145 градуса не могат да се намират в правоъгълен триъгълник заедно с ъгъл от 90 градуса."
        },
        {
          "kind": "p",
          "text": "Правилно: [[90^\\circ-35^\\circ=55^\\circ]]."
        },
        {
          "kind": "p",
          "text": "Проверка: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Пълната сума на ъглите потвърждава отговора."
        }
      ],
      "h2": "Чести грешки при намиране на липсващ ъгъл",
      "listItems": [
        "<strong>Изваждане на известния ъгъл от 180 градуса вместо от 90.</strong> Сборът от 180 градуса включва правия ъгъл, който вече е фиксиран. Какво се обърква: при [[A=35^\\circ]] грешната сметка дава 145 градуса, невъзможен остър ъгъл. Поправка: извадете от 90, получавайки [[55^\\circ]].",
        "<strong>Забравяне, че единият ъгъл вече е 90 градуса.</strong> Правият ъгъл лесно се пренебрегва, защото не изисква изчисление. Какво се обърква: третиране на триъгълника така, сякаш и трите ъгъла са неизвестни. Поправка: помнете, че правият ъгъл заема половината от общия сбор от 180 градуса, преди да започнете.",
        "<strong>Въвеждане на 90 градуса в калкулатора.</strong> Инструментът очаква остър ъгъл строго между 0 и 90 градуса. Какво се обърква: вход от 90 градуса не оставя място за втори остър ъгъл. Поправка: въвеждайте само известния остър ъгъл.",
        "<strong>Въвеждане на ъгъл, по-голям от 90 градуса.</strong> Никой остър ъгъл не надвишава 90 градуса по определение. Какво се обърква: изваждането дава отрицателен резултат, който няма геометричен смисъл тук. Поправка: проверете дали входът е под 90 градуса.",
        "<strong>Въвеждане на 0 градуса.</strong> Нулев ъгъл свива триъгълника до отсечка. Какво се обърква: резултатът твърди допълнение от 90 градуса за фигура без площ. Поправка: използвайте само положителни остри ъгли.",
        "<strong>Бъркане на допълващи се ъгли с допълнителни ъгли.</strong> Допълващите се двойки се събират до 90 градуса; допълнителните двойки се събират до 180. Какво се обърква: изваждането от 180 поражда грешката от точка 1. Поправка: съчетайте думата със сбора, допълващ се с 90.",
        "<strong>Предполагане, че двата остри ъгъла трябва да са равни.</strong> Равенство има само при 45 градуса всеки. Какво се обърква: очакване на симетрия в триъгълник 20-70. Поправка: оставете изваждането да реши; повечето двойки се различават.",
        "<strong>Размяна на означенията на ъгли A и B.</strong> Калкулаторът приема [[A]] и връща [[B]]. Какво се обърква: въвеждане на вече известното допълнение така, сякаш е входът. Поправка: означете известния ъгъл с A, преди да напишете каквото и да е.",
        "<strong>Мислене, че дължините на страните са нужни за това конкретно изчисление.</strong> Страните имат значение за тригонометрията, не за допълненията. Какво се обърква: зацикляне върху задача, която изисква само изваждане. Поправка: ако е известен остър ъгъл, извадете го от 90 и приключете.",
        "<strong>Използване на обратни синус, косинус или тангенс, когато е достатъчно просто изваждане.</strong> Обратните функции отговарят на по-труден въпрос. Какво се обърква: излишна работа и излишни шансове за грешки в режим. Поправка: когато е известен ъгъл, калкулаторът за ъгъл от синус и неговите събратя са неподходящите инструменти; изваждането е точно и незабавно.",
        "<strong>Предполагане, че измерен физически ъгъл автоматично образува правоъгълен триъгълник, без да се проверят референтните посоки.</strong> Реалните ъгли рядко са идеални. Какво се обърква: прилагане на правилото за допълнение там, където ъгълът от 90 градуса всъщност не съществува. Поправка: проверете дали референтните посоки са перпендикулярни, преди да изваждате.",
        "<strong>Ненужно закръгляне на входно измерване преди изваждане.</strong> Ранното закръгляне изхвърля точност, която входът всъщност е имал. Какво се обърква: 68.5, закръглено до 69, дава 21 вместо 21.5. Поправка: извадете с пълната измерена стойност, след това закръглете резултата съобразно точността на входа."
      ]
    },
    "missing-relationship": {
      "blocks": [
        {
          "kind": "p",
          "text": "Моделът е напълно предвидим. Ако ъгъл [[A]] се увеличи, ъгъл [[B]] намалява с точно същата величина, защото общият им сбор е заключен на 90 градуса. Ако [[A]] намалее, [[B]] нараства, за да запълни разликата. При [[A=45^\\circ]] двата се срещат по средата, а нито един остър ъгъл не може да достигне [[0^\\circ]] или [[90^\\circ]] в истински правоъгълен триъгълник с три различни върха."
        },
        {
          "kind": "p",
          "text": "Таблицата е симетрична около 45 градуса: двойките (10, 80), (20, 70) и (30, 60) се оглеждат взаимно, защото размяната на известния и липсващия ъгъл просто чете същата зависимост между допълващите се ъгли от другата страна. Четирите панела по-долу правят този компромис видим."
        }
      ],
      "figcaption": "С нарастването на ъгъл A, ъгъл B намалява със същата величина; сумата им остава 90 градуса.",
      "h2": "Разбиране на зависимостта между допълващите се ъгли",
      "imgAlt": "Четири триъгълника, показващи допълващите се двойки 20-70, 30-60, 45-45, 70-20 градуса",
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Известен ъгъл A",
          "Формула",
          "Липсващ ъгъл B"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      }
    },
    "missing-reverse": {
      "blocks": [
        {
          "kind": "p",
          "text": "Същото правило за допълващи се ъгли работи и в обратна посока. Ако ъгъл [[B]] е известният, решете зависимостта за [[A]]:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Не е нужна нова формула; това е идентичното уравнение с разменени роли."
        },
        {
          "kind": "h3",
          "text": "Разработен пример"
        },
        {
          "kind": "p",
          "text": "Дадено [[B=62^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Още три кратки примера в обратна посока следват същата стъпка:"
        }
      ],
      "closingParagraphs": [
        "Една практична бележка: входното поле на този калкулатор приема ъгъл [[A]] и връща ъгъл [[B]]. Читател, който знае само ъгъл [[B]], трябва да приложи обратната формула на ръка, освен ако не е проверено, че интерфейсът поддържа директно въвеждане на [[B]]."
      ],
      "h2": "Ами ако знаете ъгъл B?",
      "listItems": [
        "[[B=15^\\circ]], следователно [[A=90^\\circ-15^\\circ=75^\\circ]].",
        "[[B=42^\\circ]], следователно [[A=90^\\circ-42^\\circ=48^\\circ]].",
        "[[B=70^\\circ]], следователно [[A=90^\\circ-70^\\circ=20^\\circ]]."
      ]
    },
    "missing-verify": {
      "blocks": [
        {
          "kind": "p",
          "text": "Валидният входен диапазон е:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "а изчисленият ъгъл трябва да удовлетворява същия диапазон:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Вход от 0 или 90 градуса би дал изроден граничен случай, а не обикновен правоъгълен триъгълник с три различни върха и положителни дължини на страни. Калкулаторът налага строгото неравенство точно по тази причина."
        },
        {
          "kind": "h3",
          "text": "Метод 1: Съберете острите ъгли"
        },
        {
          "kind": "p",
          "text": "Проверете [[A+B=90^\\circ]]. Пример: [[35^\\circ+55^\\circ=90^\\circ]]. Това е най-бързата проверка и веднага улавя грешката със 180 градуса."
        },
        {
          "kind": "h3",
          "text": "Метод 2: Проверете целия триъгълник"
        },
        {
          "kind": "p",
          "text": "Проверете [[A+B+90^\\circ=180^\\circ]]. Пример: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Това потвърждава отговора срещу универсалната сума на ъглите в триъгълника."
        },
        {
          "kind": "h3",
          "text": "Метод 3: Проверете обратното изчисление"
        },
        {
          "kind": "p",
          "text": "Ако [[B=90^\\circ-A]], то [[A=90^\\circ-B]] трябва да възстанови първоначалния вход. При [[A=35^\\circ]], даващо [[B=55^\\circ]], обратната проверка е [[90^\\circ-55^\\circ=35^\\circ]]. Тази проверка за съгласуваност изобщо не се нуждае от измервания на страни."
        },
        {
          "kind": "p",
          "text": "Едно предупреждение: ако входният ъгъл идва от физическо измерване, неговата неопределеност се пренася в резултата. Грубо измерени 35 градуса дават грубо известни 55 градуса; съобщете отговора с точност, съответстваща на измерването. За проверки, включващи дължини на страни, калкулаторът за Питагорова теорема може да потвърди геометрията на триъгълника независимо."
        }
      ],
      "h2": "Как да проверите дали липсващият ъгъл е валиден"
    },
    "missing-vs": {
      "blocks": [
        {
          "kind": "p",
          "text": "Двата термина звучат сходно и двата описват двойки ъгли, но отговарят на различни въпроси."
        },
        {
          "kind": "h3",
          "text": "Допълващи се ъгли"
        },
        {
          "kind": "p",
          "text": "Два ъгъла са допълващи се, когато сумата им е [[90^\\circ]]. Двата остри ъгъла на правоъгълния триъгълник са учебникарският пример: те трябва да са допълващи се, защото правият ъгъл вече заема другите 90 градуса от общия сбор на триъгълника."
        },
        {
          "kind": "h3",
          "text": "Допълнителни ъгли"
        },
        {
          "kind": "p",
          "text": "Два ъгъла са допълнителни, когато сумата им е [[180^\\circ]]. Права линия например може да се раздели на два допълнителни ъгъла. Допълнителните двойки никога не трябва да се бъркат с двата остри ъгъла на правоъгълен триъгълник, които се събират до 90, а не до 180."
        },
        {
          "kind": "p",
          "text": "Пълната сума на ъглите в триъгълника е 180 градуса, но двата остри ъгъла заедно се събират до 90 градуса. Разделянето на тези два сбора е ключът към избягване на най-честата грешка на тази страница."
        }
      ],
      "figcaption": "Допълващи се двойки в реални условия: всеки известен ъгъл определя своя партньор.",
      "h2": "Допълващи се ъгли срещу допълнителни ъгли",
      "imgAlt": "Четири панела, показващи допълващи се ъгли за стълба, покривна греда, скоба и диагонал на квадрат",
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Зависимост",
          "Сбор",
          "Пример"
        ],
        "rows": [
          [
            "Допълващи се",
            "90&deg;",
            "35 + 55"
          ],
          [
            "Допълнителни",
            "180&deg;",
            "110 + 70"
          ],
          [
            "Прав ъгъл",
            "90&deg;",
            "Фиксираният ъгъл в правоъгълен триъгълник"
          ]
        ]
      }
    }
  },
  "tocHeading": "В това ръководство",
  "tocItems": {
    "missing-angles": "Какви са ъглите в правоъгълен триъгълник?",
    "missing-applications": "Приложения в реалния живот",
    "missing-choose": "Избор на подходящ калкулатор",
    "missing-examples": "Примерни задачи стъпка по стъпка",
    "missing-faq": "Често задавани въпроси",
    "missing-formula": "Формулата за намиране на липсващ ъгъл",
    "missing-howto": "Как се използва калкулаторът",
    "missing-intro": "Как да намерим липсващ ъгъл в правоъгълен триъгълник",
    "missing-mistakes": "Чести грешки",
    "missing-related": "Свързани калкулатори",
    "missing-relationship": "Как се променят допълващите се ъгли",
    "missing-reverse": "Ами ако знаете ъгъл B?",
    "missing-verify": "Проверка на отговора",
    "missing-vs": "Допълващи се срещу допълнителни ъгли"
  }
  },
  "tr": {
  "sections": {
    "missing-intro": {
      "h2": "Dik Üçgende Bilinmeyen Açı Nasıl Bulunur",
      "blocks": [
        {
          "kind": "p",
          "text": "Bir dik üçgenin dar açılarından biri [[35^\\circ]] ise, bilinmeyen açı [[90^\\circ-35^\\circ=55^\\circ]] olur. Tek bir çıkarma işlemi, hesabın tamamıdır. Bir dik üçgen her zaman bir tane 90 derecelik açı içerir; bu nedenle kalan iki açı, geriye kalan 90 dereceyi aralarında paylaşmak zorundadır. Bilinen açıyı 90 dereceden çıkarmak, kenar uzunluklarına ve trigonometrik fonksiyonlara gerek kalmadan bilinmeyen açıyı ortaya çıkarır."
        },
        {
          "kind": "p",
          "text": "Bu örnekteki 55 derecelik cevap, aynı dik üçgendeki diğer dar açıyı verir. İki açı her zaman bir çift olarak çalışır: birini bilmek diğerini tamamen belirler. Bu hesap makinesi tam da bu durum içindir: bir açı zaten biliniyor ve yalnızca tümleri eksikse. Henüz hiçbir açı bilinmiyorsa, tanjanttan açı hesap makinesi veya sinüs ve kosinüs karşılıkları, ölçülen kenarlardan ilk açıyı bulur."
        }
      ]
    },
    "missing-angles": {
      "h2": "Dik Üçgenin Açıları Nelerdir?",
      "blocks": [
        {
          "kind": "h3",
          "text": "Dik Açı"
        },
        {
          "kind": "p",
          "text": "90 derecelik açı, kusursuz bir köşeyi temsil eder: dik bir duvar ile düz bir zemin arasındaki açıyı. Her dik üçgende bu açı sabittir: boyutu asla değişmez ve çizimler köşeye konulan küçük bir kare ile bu açıyı işaretler. Bir açı kalıcı olarak 90 dereceye ayarlı olduğundan, diğer iki açıya paylaşacakları yalnızca 90 derece kalır; bu da ikisini de dar açı olmaya zorlar."
        },
        {
          "kind": "h3",
          "text": "İki Dar Açı"
        },
        {
          "kind": "p",
          "text": "Bir dar açı [[0^\\circ]] dereceden büyük, [[90^\\circ]] dereceden küçük ölçülür. Dik üçgenin kalan iki açısı da bu aralıkta kalır ve ölçüleri her zaman 90 dereceye tamamlandığı için bunlara tümler denir. Eşleşme katıdır: bilinen tek bir dar açı, eşi için yalnızca tek bir olası değer bırakır; dolayısıyla bilinmeyen açı asla tahmin işi değildir."
        },
        {
          "kind": "h3",
          "text": "Tümler Açılar Nedir?"
        },
        {
          "kind": "p",
          "text": "Ölçüleri toplamı [[90^\\circ]] olan iki açı tümlerdir. [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] ve [[45^\\circ+45^\\circ=90^\\circ]] çiftlerinin hepsi tümlerdir. Tümler açıların eşit olması gerekmez; eşitlik yalnızca ikisi de 45 dereceyken olur. Aynı üçgenin içinde olsun ya da olmasın, toplamı 90 derece olan her iki pozitif açı bu tanıma uyar."
        },
        {
          "kind": "h3",
          "text": "Bir Üçgenin Açıları Neden Toplamda 180 Derece Eder"
        },
        {
          "kind": "p",
          "text": "Şekli ne olursa olsun her üçgen, üç iç açısında toplam tam 180 derece barındırır. Bir dik üçgende sabit dik açı bu derecelerin 90'ını hemen alır; geriye kalan 90 derece ise iki dar açının toplamına kalır. Aşağıdaki çizim, açıları 35, 55 ve 90 derece olan bir üçgenin tam dökümünü gösterir."
        }
      ],
      "imgAlt": "A 35 derece, B 55 derece ve C 90 derece olarak etiketlenmiş dik üçgen",
      "figcaption": "A (35 derece) ve B (55 derece) açıları tümlerdir: A + B = 90 derece ve 35 + 55 + 90 = 180 derecedir."
    },
    "missing-formula": {
      "h2": "Bilinmeyen Açıyı Bulma Formülü",
      "blocks": [
        {
          "kind": "p",
          "text": "Formül doğrudan üçgenin iç açılar toplamı kuralından gelir. Genel ifadeyle başlayın:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Üçgen dik açılı olduğundan üçüncü açı sabittir:"
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Bu değeri toplamda yerine koyun:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "İki taraftan da 90 derece çıkarın; iki dar açı tek başına kalır:"
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Son olarak, bilinmeyen açıyı yalnız bırakmak için bilinen [[A]] açısını iki taraftan da çıkarın:"
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "Her adım, geometrik bir gerçeğe uygulanan sıradan cebirdir. Hiçbir şey ezberden geçilmez: formüldeki 90 derece, dik açı açı toplamının yarısını aldıktan sonra geriye kalan paydır."
        },
        {
          "kind": "p",
          "text": "Aynı ilişki ters yönde de çalışır. Bilinen açı [[B]] ise, [[A]] için çözmek şunu verir:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Bu hesap makinesi ilk biçimi kullanır, çünkü giriş alanı [[A]] açısını kabul edip [[B]] açısını verir. İki formül farklı kurallar değildir; aynı tümler açı ilişkisinin farklı bilinmeyenler için çözülmüş halleridir."
        },
        {
          "kind": "h3",
          "text": "Neden 90 Derece, 180 Derece Değil"
        },
        {
          "kind": "p",
          "text": "Sık yapılan bir hata, bilinen açıyı 180 dereceden çıkarmaktır. Bu toplam üçgenin üç açısını birden kapsar; dolayısıyla tek başına kullanmak, dik açının zaten hesaba katıldığını unutmaktır. [[A=35^\\circ]] iken yanlış hesap [[180^\\circ-35^\\circ=145^\\circ]] sonucunu verir; bu, hiçbir dik üçgenin dar açısı olamaz. Doğru hesap, [[90^\\circ-35^\\circ=55^\\circ]], dik açıya saygı gösterir ve hemen denetlenebilir: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
        }
      ],
      "imgAlt": "180 derecelik üçgen toplamı ile 90 derecelik dar açı çiftini karşılaştıran iki panel",
      "figcaption": "A Bölümü üçgen toplamının tamamını gösterir; B Bölümü tümler dar açıları ayırır."
    },
    "missing-howto": {
      "h2": "Dik Üçgen Bilinmeyen Açı Hesap Makinesi Nasıl Kullanılır",
      "blocks": [
        {
          "kind": "p",
          "text": "Aşağıdaki adım adım anlatım, bu sayfadaki gerçek arayüzle birebir örtüşür."
        }
      ],
      "steps": [
        "<strong>Dik üçgeni belirleyin.</strong> Başka bir şey yapmadan önce şeklin gerçekten 90 derecelik bir köşesi olduğunu doğrulayın; formül yalnızca dik üçgenlerde geçerlidir.",
        "<strong>Zaten bildiğiniz dar açıyı bulun.</strong> Bu, [[A]] açısıdır; hesap makinesine yazacağınız değerdir.",
        "<strong>Bilinen açının geçerli olduğunu doğrulayın.</strong> [[0^\\circ]] dereceden büyük ve [[90^\\circ]] dereceden küçük olmalıdır. Bu aralığın dışındaki hiçbir değer bir dik üçgenin dar açısı olamaz.",
        "<strong>Bilinen [[A]] açısını derece olarak girin.</strong> Giriş alanı 68,5 gibi ondalık değerleri kabul eder; ölçümünüzün duyarlılığını koruyun.",
        "<strong>B Açısını Hesapla düğmesine tıklayın.</strong> Araç, girişinize [[B=90^\\circ-A]] formülünü uygular.",
        "<strong>Hesaplanan tümler açıyı okuyun.</strong> Çıktı, derece cinsinden [[B]] açısıdır.",
        "<strong>Sonucu denetlemek için iki dar açıyı toplayın.</strong> Toplam 90 dereceye eşit olmalıdır; değilse girişi yeniden kontrol edin.",
        "<strong>Yeni bir hesaplamaya başlamak için Sıfırla düğmesini kullanın.</strong> Bu, girişi temizler; böylece yeni bir açı girilebilir."
      ],
      "closingParagraphs": [
        "Hesap makinesinin asla istemediğine dikkat edin: karşı kenar uzunluğu yok, komşu kenar uzunluğu yok, hipotenüs yok; sinüs, kosinüs veya tanjant değeri de yok. Bilinen tek bir dar açı tüm girdidir, çünkü geri kalan işi açı toplamı kuralı yapar. Araç ayrıca radyan kabul etmez ve [[B]] açısının doğrudan girilmesine de izin vermez; giriş alanı özellikle derece cinsinden [[A]] açısı içindir."
      ]
    },
    "missing-examples": {
      "h2": "Bilinmeyen Açı Bulmanın Adım Adım Örnekleri",
      "blocks": [
        {
          "kind": "p",
          "text": "Bu dört örnek, günlük hayattan uygulamalara geçmeden önce temel beceriyi kurar. Her biri aynı kalıbı izler: formülü yazın, yerine koyun, çıkarın."
        },
        {
          "kind": "h3",
          "text": "Örnek 1: Bilinen Açı 35 Derece"
        },
        {
          "kind": "p",
          "text": "[[A=35^\\circ]] verildiğinde [[B]] açısını bulun."
        },
        {
          "kind": "p",
          "text": "Adım 1: Formülü yazın. [[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "Adım 2: Bilinen açıyı yerine koyun. [[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Adım 3: Çıkarın. [[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Denetim: [[35^\\circ+55^\\circ=90^\\circ]]. Cevap geçerlidir, çünkü iki dar açının toplamı tam 90 derecedir ve her biri kesinlikle 0 ile 90 derece arasındadır."
        },
        {
          "kind": "h3",
          "text": "Örnek 2: Bilinen Açı 20 Derece"
        },
        {
          "kind": "p",
          "text": "[[A=20^\\circ]] verildiğinde:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Daha küçük bir dar açı, daha büyük bir tümler açı üretir. Çift her zaman toplamda 90 dereceyi vermeli olduğundan, bir açıdan alınan her derece diğerine eklenir. Burada 20 derecelik açı, eşine cömertçe 70 derece bırakır."
        },
        {
          "kind": "h3",
          "text": "Örnek 3: İkizkenar Dik Üçgen"
        },
        {
          "kind": "p",
          "text": "[[A=45^\\circ]] verildiğinde:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "İki dar açı da 45'er dereceyle eşittir. Bu, dar açıları eşleşen tek dik üçgen olan ikizkenar dik üçgendir. İki dik kenarı da uzunluk olarak eşittir; 45-45-90 üçgeninin teknik çizim ve şantiye yerleşimlerinde bu kadar sık görülmesinin nedeni budur."
        },
        {
          "kind": "h3",
          "text": "Örnek 4: Bilinen Açı 68,5 Derece"
        },
        {
          "kind": "p",
          "text": "[[A=68.5^\\circ]] verildiğinde:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Görece büyük bir dar açının görece küçük bir tümleri vardır. Ondalıklı giriş, tam sayı girişiyle tıpatıp aynı çalışır: dikkatli çıkarın, ,5'i hizada tutun; 90 eksi 68,5 eşittir 21,5. Denetim hâlâ geçerli: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
        }
      ]
    },
    "missing-applications": {
      "h2": "Bilinmeyen Açıların Günlük Hayattaki Uygulamaları",
      "blocks": [
        {
          "kind": "p",
          "text": "Örneklere başlamadan önce dikkat edilmesi gereken bir nokta var. Bilinmeyen açı formülü, iki açı aynı dik üçgene ait olduğunda doğrudan uygulanır. Pratik ortamlarda yatay bir yüzey ile dikey bir yüzey genellikle dik referans çizgileri görevi görür; merdiven veya mertek gibi çapraz bir bileşen ise hipotenüsü oluşturur. Aşağıdaki örnekler bu varsayımı kullanıldığı her yerde belirtir."
        },
        {
          "kind": "h3",
          "text": "Örnek 5: Çatı Merteğinin Dikeye Göre Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Bir çatı merteği yatayla [[35^\\circ]] açı yapar. Aynı merteğin dikey bir referans çizgisiyle yaptığı açıyı bulun."
        },
        {
          "kind": "p",
          "text": "[[A=35^\\circ]] yataydan ölçülmüş olarak verildiğinde."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Yatay ve dikey referans çizgileri birbirine diktir; bu yüzden iki açı tümlerdir. 55 derecelik sonuç, dikeye göre açıdır; tam bir çatı eğimi veya yapısal hesap değildir."
        },
        {
          "kind": "h3",
          "text": "Örnek 6: Merdivenin Duvarla Yaptığı Açıyı Bulma"
        },
        {
          "kind": "p",
          "text": "Bir merdiven dikey bir duvara yaslanmıştır ve düz zeminle [[68^\\circ]] açı yapar. Merdiven ile duvar arasındaki açıyı bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Bu idealleştirilmiş modelde zemin ve duvar bir dik açı oluşturur; merdiven hipotenüstür. 22 derecelik açı, merdivenin duvara göre yönelimini tanımlar. Hesap tek başına merdivenin güvenli konumlandığını göstermez."
        },
        {
          "kind": "h3",
          "text": "Örnek 7: Rampanın Dikeye Göre Açısını Anlama"
        },
        {
          "kind": "p",
          "text": "Düz bir rampa yatayla [[8^\\circ]] açı yapar. Rampa yönü ile dikey bir referans çizgisi arasındaki tümler açıyı bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Rampanın dikeye göre açısı, yataya göre açısının tümleridir. Hafif 8 derecelik bir eğim, dikeye karşı dik 82 derecelik bir açı bırakır. Bu açı tek başına erişilebilirliği veya yönetmelik uygunluğunu belirlemez."
        },
        {
          "kind": "h3",
          "text": "Örnek 8: Merdiven Kirişinin Tümler Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Bir merdiven kirişi döşemeyle [[32^\\circ]] açı yapar. Dikey bir referans çizgisine göre açısını hesaplayın."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Döşeme, dikey referans ve çapraz kiriş dik üçgeni oluşturur. 58 derecelik sonuç, kirişin dikeye karşı yönelimini tanımlar. Merdiven ölçülerini veya yapı yönetmeliği uygunluğunu doğrulamaz."
        },
        {
          "kind": "h3",
          "text": "Örnek 9: Çapraz Desteğin Dikey Desteğe Göre Açısını Hesaplama"
        },
        {
          "kind": "p",
          "text": "Çapraz bir destek, yatay bir kirişle [[40^\\circ]] açı yapar. Desteğin dikey bir desteğe göre açısını bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Tümler kuralının uygulanabilmesi için iki referans yönünün dik olması gerekir. 50 derecelik açı salt bir geometri sonucudur; desteğin yapısal dayanımını belirlemez."
        },
        {
          "kind": "h3",
          "text": "Örnek 10: Gergi Telinin Dikey Direğe Göre Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Bir gergi teli düz zeminle [[30^\\circ]] açı yapar. Telin dikey bir direğe göre açısını bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Yatay zemin ve dikey direk dik açıyı tanımlar; tel hipotenüstür. 60 derecelik sonuç, aynı tel yönünü dikey referansa göre yeniden ifade eder. Tel gerginliğini veya ankraj güvenliğini göstermez."
        },
        {
          "kind": "h3",
          "text": "Örnek 11: Yükselme Açısını Tümlerine Çevirme"
        },
        {
          "kind": "p",
          "text": "Bir ölçüm şeması, yatayın üzerinde [[24^\\circ]] yükselme açısına sahip bir görüş çizgisi kaydeder. Dikeye göre tümler açısını hesaplayın."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Yataydan ölçülen bir açı ile dikeyden ölçülen bir açı, aynı görüş çizgisini dik bakış açılarından tanımlar. Örnek, yatay ve dikey referansları dik olan düz bir görüş çizgisi varsayar."
        },
        {
          "kind": "h3",
          "text": "Örnek 12: Çatı Eğiminin Dikey Referansa Göre Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Bir çatı eğimi yataya göre [[27^\\circ]] olarak ölçülmüştür. Dikeye göre tümler açısını bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "İki ölçüm, aynı eğimi farklı dik referans yönlerinden tanımlar. Ölçümlerden hiçbiri tek başına yapısal bir değerlendirme değildir."
        },
        {
          "kind": "h3",
          "text": "Örnek 13: Kare Teknik Çizim Yerleşiminde Köşegen"
        },
        {
          "kind": "p",
          "text": "Kare bir teknik çizim yerleşimindeki bir köşegen, bir kenarla [[45^\\circ]] açı yapar. Komşu dik kenarla yaptığı açıyı bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Köşegen, karenin dik açısını ikiye böler; bu yüzden ortaya çıkan iki açı da 45 derecedir. Bu ilişki temel çizim ve yerleşim denetimlerine yardımcı olur: ölçülen bir köşegen köşeyi eşit bölmüyorsa yerleşim kare değildir."
        },
        {
          "kind": "h3",
          "text": "Örnek 14: Makine Panelinin Tümler Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Bir panel yataydan [[15^\\circ]] uzağa eğilmiştir. Panel yönelimi ile dikey referans yönü arasındaki açıyı hesaplayın."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Yatay ve dikey referanslar birbirine diktir; bu yüzden panel eğimi ile tümleri aynı yönelimi tanımlar. Sonuç yalnızca yönelimi tanımlar; makine güvenliğini veya performansını değil."
        },
        {
          "kind": "h3",
          "text": "Örnek 15: Ağaç Gözlem Açısını Çevirme"
        },
        {
          "kind": "p",
          "text": "Bir kişi ağacın tepesine, yatayın üzerinde [[38^\\circ]] yükselme açısıyla bakar. Bakış çizgisi ile dikey bir referans yönü arasındaki tümler açıyı bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Hesap, bakış çizgisinin kendisini değil referans yönünü değiştirir. 52 derecelik açı, aynı bakışın dikeye göre ölçülmüş halidir. Ağaç yüksekliğini hesaplamaz."
        },
        {
          "kind": "h3",
          "text": "Örnek 16: Tırabzanın Dikey Desteğe Göre Açısını Bulma"
        },
        {
          "kind": "p",
          "text": "Çapraz bir tırabzan, yatay bir sahanlıkla [[55^\\circ]] açı yapar. Dikey bir destek çizgisine göre tümler açısını bulun."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Tümler açı, aynı çapraz yönelimi farklı bir referanstan tanımlar. Yataya karşı dik 55 derecelik açı, dikeye karşı hafif 35 derecelik bir açı olur. Açı tek başına erişilebilirlik veya yapım gerekliliklerini doğrulamaz."
        },
        {
          "kind": "h3",
          "text": "Uygulamalı Örneklerin Karşılaştırması"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Durum",
          "Bilinen açı",
          "Referans yön",
          "Bilinmeyen açı",
          "Hesaplama",
          "Yorum"
        ],
        "rows": [
          [
            "Çatı merteği",
            "35&deg;",
            "Yatay",
            "55&deg;",
            "90 - 35",
            "Dikeye göre mertek açısı"
          ],
          [
            "Merdiven",
            "68&deg;",
            "Zemin",
            "22&deg;",
            "90 - 68",
            "Duvara göre merdiven açısı"
          ],
          [
            "Rampa",
            "8&deg;",
            "Yatay",
            "82&deg;",
            "90 - 8",
            "Dikeye göre rampa yönü"
          ],
          [
            "Merdiven kirişi",
            "32&deg;",
            "Döşeme",
            "58&deg;",
            "90 - 32",
            "Dikeye göre kiriş açısı"
          ],
          [
            "Çapraz destek",
            "40&deg;",
            "Yatay kiriş",
            "50&deg;",
            "90 - 40",
            "Dikey desteğe göre destek açısı"
          ],
          [
            "Gergi teli",
            "30&deg;",
            "Zemin",
            "60&deg;",
            "90 - 30",
            "Direğe göre tel açısı"
          ],
          [
            "Ölçüm görüş çizgisi",
            "24&deg;",
            "Yatay",
            "66&deg;",
            "90 - 24",
            "Dikeye göre görüş çizgisi"
          ],
          [
            "Çatı eğimi",
            "27&deg;",
            "Yatay",
            "63&deg;",
            "90 - 27",
            "Dikeye göre eğim açısı"
          ],
          [
            "Teknik çizim köşegeni",
            "45&deg;",
            "Bir kenar",
            "45&deg;",
            "90 - 45",
            "Komşu kenara göre köşegen"
          ],
          [
            "Makine paneli",
            "15&deg;",
            "Yatay",
            "75&deg;",
            "90 - 15",
            "Dikeye göre panel yönelimi"
          ],
          [
            "Ağaç gözlemi",
            "38&deg;",
            "Yatay",
            "52&deg;",
            "90 - 38",
            "Dikeye göre bakış çizgisi"
          ],
          [
            "Tırabzan",
            "55&deg;",
            "Sahanlık",
            "35&deg;",
            "90 - 55",
            "Dikey desteğe göre tırabzan"
          ]
        ]
      }
    },
    "missing-relationship": {
      "h2": "Tümler Açılar Arasındaki İlişkiyi Anlama",
      "blocks": [
        {
          "kind": "p",
          "text": "Kalıp tamamen öngörülebilirdir. [[A]] açısı büyürse [[B]] açısı tam aynı miktarda küçülür, çünkü toplamları 90 derecede kilitlidir. [[A]] küçülürse [[B]] büyüyerek boşluğu doldurur. [[A=45^\\circ]] değerinde ikisi ortada buluşur; üç ayrı köşesi olan gerçek bir dik üçgende hiçbir dar açı [[0^\\circ]] dereceye veya [[90^\\circ]] dereceye ulaşamaz."
        },
        {
          "kind": "p",
          "text": "Tablo 45 dereceye göre simetriktir: (10, 80), (20, 70) ve (30, 60) çiftleri birbirini aynalar; çünkü bilinen ve bilinmeyen açıların yer değiştirmesi, aynı tümler ilişkinin diğer taraftan okunmasından ibarettir. Aşağıdaki dört panel bu değiş tokuşu görselleştirir."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Bilinen A açısı",
          "Formül",
          "Bilinmeyen B açısı"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      },
      "imgAlt": "20-70, 30-60, 45-45 ve 70-20 derecelik tümler çiftleri gösteren dört üçgen",
      "figcaption": "A açısı büyüdükçe B açısı aynı miktarda küçülür; toplamları 90 derecede kalır."
    },
    "missing-reverse": {
      "h2": "Ya B Açısı Biliniyorsa?",
      "blocks": [
        {
          "kind": "p",
          "text": "Aynı tümler açı kuralı ters yönde de çalışır. Bilinen açı [[B]] ise, ilişkiyi [[A]] için çözün:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Yeni bir formüle gerek yoktur; roller değişmiş aynı denklemdir."
        },
        {
          "kind": "h3",
          "text": "Çözümlü Örnek"
        },
        {
          "kind": "p",
          "text": "[[B=62^\\circ]] verildiğinde:"
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Aynı adımı izleyen üç kısa ters yön örneği daha:"
        }
      ],
      "listItems": [
        "[[B=15^\\circ]] ise [[A=90^\\circ-15^\\circ=75^\\circ]] olur.",
        "[[B=42^\\circ]] ise [[A=90^\\circ-42^\\circ=48^\\circ]] olur.",
        "[[B=70^\\circ]] ise [[A=90^\\circ-70^\\circ=20^\\circ]] olur."
      ],
      "closingParagraphs": [
        "Pratik bir not: bu hesap makinesinin giriş alanı [[A]] açısını kabul edip [[B]] açısını verir. Yalnızca [[B]] açısını bilen biri, arayüzün [[B]] açısını doğrudan girmeyi desteklediği doğrulanmadıkça ters formülü elle uygulamalıdır."
      ]
    },
    "missing-vs": {
      "h2": "Tümler Açılar ve Bütünler Açılar",
      "blocks": [
        {
          "kind": "p",
          "text": "İki terim kulağa benzer gelir ve ikisi de açı çiftlerini tanımlar; ancak farklı sorulara yanıt verirler."
        },
        {
          "kind": "h3",
          "text": "Tümler Açılar"
        },
        {
          "kind": "p",
          "text": "İki açı, toplamı [[90^\\circ]] olduğunda tümlerdir. Dik üçgenin iki dar açısı bunun ders kitabı örneğidir: tümler olmak zorundadırlar, çünkü dik açı üçgen toplamının diğer 90 derecesini zaten almıştır."
        },
        {
          "kind": "h3",
          "text": "Bütünler Açılar"
        },
        {
          "kind": "p",
          "text": "İki açı, toplamı [[180^\\circ]] olduğunda bütünlerdir. Örneğin bir doğru, iki bütünler açıya bölünebilir. Bütünler çiftler, toplamı 180 değil 90 olan dik üçgenin iki dar açısıyla asla karıştırılmamalıdır."
        },
        {
          "kind": "p",
          "text": "Üçgenin tam açı toplamı 180 derecedir; ancak iki dar açı birlikte 90 derece eder. Bu iki toplamı ayrı tutmak, bu sayfadaki en yaygın hatadan kaçınmanın anahtarıdır."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">İlişki",
          "Toplam",
          "Örnek"
        ],
        "rows": [
          [
            "Tümler",
            "90&deg;",
            "35 + 55"
          ],
          [
            "Bütünler",
            "180&deg;",
            "110 + 70"
          ],
          [
            "Dik açı",
            "90&deg;",
            "Dik üçgendeki sabit açı"
          ]
        ]
      },
      "imgAlt": "Merdiven, mertek, destek ve kare köşegeni için tümler açıları gösteren dört panel",
      "figcaption": "Gerçek ortamlardaki tümler çiftler: bilinen her açı eşini belirler."
    },
    "missing-mistakes": {
      "h2": "Bilinmeyen Açı Bulurken Yapılan Yaygın Hatalar",
      "blocks": [
        {
          "kind": "h3",
          "text": "Yanlışa Karşı Doğru"
        },
        {
          "kind": "p",
          "text": "[[A=35^\\circ]] verildiğinde:"
        },
        {
          "kind": "p",
          "text": "Yanlış: [[180^\\circ-35^\\circ=145^\\circ]]. Bu, eksik dar açı değildir; çünkü dik açı hesaba katılmamıştır. 145 derece, 90 derecelik bir köşenin yanında bir dik üçgenin içinde yer alamaz."
        },
        {
          "kind": "p",
          "text": "Doğru: [[90^\\circ-35^\\circ=55^\\circ]]."
        },
        {
          "kind": "p",
          "text": "Denetleyin: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Tam açı toplamı cevabı doğrular."
        }
      ],
      "listItems": [
        "<strong>Bilinen açıyı 90 yerine 180 dereceden çıkarma.</strong> 180 derecelik toplam, zaten sabit olan dik açıyı içerir. Sorun ne: [[A=35^\\circ]] iken yanlış hesap 145 derece verir; bu imkânsız bir dar açıdır. Çözüm: 90 dereceden çıkarın, [[55^\\circ]] elde edersiniz.",
        "<strong>Bir açının zaten 90 derece olduğunu unutma.</strong> Dik açı hesap gerektirmediği için kolayca gözden kaçar. Sorun ne: üçgeni, üç açısı da bilinmiyormuş gibi ele almak. Çözüm: başlamadan önce dik açının 180 derecelik toplamın yarısını aldığını hatırlayın.",
        "<strong>Hesap makinesine 90 derece girme.</strong> Araç, kesinlikle 0 ile 90 derece arasında bir dar açı bekler. Sorun ne: 90 derecelik giriş, ikinci bir dar açıya yer bırakmaz. Çözüm: yalnızca bilinen dar açıyı girin.",
        "<strong>90 dereceden büyük bir açı girme.</strong> Tanım gereği hiçbir dar açı 90 dereceyi aşmaz. Sorun ne: çıkarma negatif bir sonuç verir; bunun burada geometrik bir anlamı yoktur. Çözüm: girişin 90 derecenin altında olduğunu kontrol edin.",
        "<strong>0 derece girme.</strong> Sıfır açı, üçgeni bir doğru parçasına indirger. Sorun ne: sonuç, alanı olmayan bir şekle 90 derecelik bir tümler atar. Çözüm: yalnızca pozitif dar açılar kullanın.",
        "<strong>Tümler açılarla bütünler açıları karıştırma.</strong> Tümler çiftler 90 dereceye, bütünler çiftler 180 dereceye tamamlanır. Sorun ne: 180 dereceden çıkarmak, 1. maddede belirtilen hatayı üretir. Çözüm: sözcüğü toplamla eşleştirin; tümler için 90.",
        "<strong>İki dar açının eşit olması gerektiğini varsayma.</strong> Eşitlik yalnızca ikisi de 45 dereceyken geçerlidir. Sorun ne: 20-70 üçgeninde simetri beklemek. Çözüm: kararı çıkarmaya bırakın; çoğu çift farklıdır.",
        "<strong>A ve B açı etiketlerini karıştırma.</strong> Hesap makinesi [[A]] açısını alır, [[B]] açısını verir. Sorun ne: zaten bilinen tümleri, girişmiş gibi yazmak. Çözüm: bir şey yazmadan önce bilinen açıya A deyin.",
        "<strong>Bu özel hesap için kenar uzunluklarının gerekli olduğunu düşünme.</strong> Kenarlar trigonometri için önemlidir, tümler için değil. Sorun ne: yalnızca çıkarma gerektiren bir soruda takılmak. Çözüm: bir dar açı biliniyorsa onu 90 dereceden çıkarın ve bitirin.",
        "<strong>Basit çıkarma yeterli iken ters sinüs, kosinüs veya tanjant kullanma.</strong> Ters fonksiyonlar daha zor bir soruya yanıt verir. Sorun ne: fazladan iş ve fazladan mod hatası riski. Çözüm: bir açı biliniyorken sinüsten açı hesap makinesi ve benzerleri yanlış araçlardır; çıkarma kesin ve anlıktır.",
        "<strong>Ölçülen fiziksel bir açının, referans yönleri kontrol edilmeden otomatik olarak dik üçgen oluşturduğunu varsayma.</strong> Gerçek köşeler nadiren kusursuzdur. Sorun ne: 90 derecelik köşenin aslında olmadığı yerde tümler kuralını uygulamak. Çözüm: çıkarmadan önce referans yönlerinin dik olduğunu doğrulayın.",
        "<strong>Çıkarmadan önce giriş ölçümünü gereksiz yere yuvarlama.</strong> Erken yuvarlama, girişin aslında sahip olduğu duyarlılığı çöpe atar. Sorun ne: 68,5 değerinin 69'a yuvarlanması 21,5 yerine 21 verir. Çözüm: tam ölçülen değerle çıkarın, sonra sonucu girişin duyarlılığına göre yuvarlayın."
      ]
    },
    "missing-verify": {
      "h2": "Bulduğunuz Açının Geçerli Olup Olmadığını Nasıl Denetlersiniz",
      "blocks": [
        {
          "kind": "p",
          "text": "Geçerli giriş aralığı:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "ve hesaplanan açı da aynı aralığı sağlamalıdır:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "0 veya 90 derecelik bir giriş, üç ayrı köşesi ve pozitif kenar uzunlukları olan sıradan bir dik üçgen yerine dejenere bir sınır durumu üretir. Hesap makinesi katı eşitsizliği tam bu nedenle zorunlu kılar."
        },
        {
          "kind": "h3",
          "text": "Yöntem 1: Dar Açıları Topla"
        },
        {
          "kind": "p",
          "text": "[[A+B=90^\\circ]] olduğunu doğrulayın. Örnek: [[35^\\circ+55^\\circ=90^\\circ]]. Bu en hızlı denetimdir ve 180 derecelik hatayı hemen yakalar."
        },
        {
          "kind": "h3",
          "text": "Yöntem 2: Üçgenin Tamamını Denetle"
        },
        {
          "kind": "p",
          "text": "[[A+B+90^\\circ=180^\\circ]] olduğunu doğrulayın. Örnek: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Bu, cevabı evrensel üçgen açı toplamına göre doğrular."
        },
        {
          "kind": "h3",
          "text": "Yöntem 3: Ters Hesaplamayı Denetle"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-A]] ise, [[A=90^\\circ-B]] orijinal girişi geri vermelidir. [[A=35^\\circ]] verildiğinde [[B=55^\\circ]] elde edilir; ters denetim [[90^\\circ-55^\\circ=35^\\circ]] olur. Bu tutarlılık denetimi hiç kenar ölçümü gerektirmez."
        },
        {
          "kind": "p",
          "text": "Bir uyarı: giriş açısı fiziksel bir ölçümden geliyorsa, belirsizliği sonuca da yansır. Yaklaşık ölçülen 35 derece, yaklaşık bilinen 55 derece verir; cevabı ölçümle uyumlu bir duyarlılıkla bildirin. Kenar uzunlukları içeren denetimlerde Pisagor teoremi hesap makinesi üçgen geometrisini bağımsız olarak doğrulayabilir."
        }
      ]
    },
    "missing-choose": {
      "h2": "Doğru Dik Üçgen Hesap Makinesini Seçme",
      "blocks": [
        {
          "kind": "p",
          "text": "Aşağıdaki her araç farklı bir soruyu yanıtlar. Aracı gerçekten bildiklerinize göre seçin:"
        }
      ],
      "listItems": [
        "<strong>Dik Üçgen Bilinmeyen Açı Hesap Makinesi</strong> (bu sayfa): bir dar açı zaten bilindiğinde tümler açıyı bulur. Girdi bir kenar değil, açı olduğunda bunu kullanın.",
        "<strong>Dik Üçgende Sinüsten Açı Hesap Makinesi</strong>: karşı kenar ve hipotenüsten bir dar açı bulur. Bu iki uzunluk ölçüldüğünde kullanın.",
        "<strong>Dik Üçgende Kosinüsten Açı Hesap Makinesi</strong>: komşu kenar ve hipotenüsten bir dar açı bulur.",
        "<strong>Dik Üçgende Tanjanttan Açı Hesap Makinesi</strong>: karşı ve komşu kenarlardan, yani iki dik kenardan bir dar açı bulur.",
        "<strong>Dik Üçgende Sinüsten Kenar Hesap Makinesi</strong>: bir açı ve bir kenar bilindiğinde eksik kenar uzunluğunu bulur.",
        "<strong>Dik Üçgende Kosinüsten Kenar Hesap Makinesi</strong>: bir açı ile hipotenüs veya komşu kenardan eksik kenar uzunluğunu bulur.",
        "<strong>Dik Üçgende Tanjanttan Kenar Hesap Makinesi</strong>: bilinen bir açı ve diğer dik kenardan eksik dik kenarı bulur."
      ],
      "closingParagraphs": [
        "Karar kuralı basittir. Bir dar açı biliyorsunuz: bu sayfadaki bilinmeyen açı hesap makinesini kullanın. Uygun iki kenar uzunluğu biliyorsunuz: eşleşen ters trigonometrik hesap makinesini kullanın. Bilinmeyen bir kenara ihtiyacınız var: kenar hesap makinesini kullanın. Trigonometrik bir hesaptan sonra ikinci açıya mı ihtiyacınız var: bilinen açıyı 90 dereceden çıkarın; bu sayfanın otomatikleştirdiği işlem tam olarak budur."
      ]
    },
    "missing-conclusion": {
      "h2": "Her Bilinmeyen Açıyı Güvenle Bulun",
      "blocks": [
        {
          "kind": "p",
          "text": "Bilinmeyen açı hesabı, dik üçgen geometrisinin en basit işlemidir: bilinen dar açıyı 90 dereceden çıkarın. Bu çıkarma işleminin ardında üçgenin iç açılar toplamı kuralı vardır: her üçgen toplamının yarısını dik açıya ayırır, diğer yarısını tümler çifte bırakır. Bilinen açı ister bir çatı merteğinden, ister bir merdivenden, ister bir merdiven kirişinden, ister bir teknik çizim yerleşiminden gelsin, yöntem asla değişmez: dik açıyı doğrulayın, 90 dereceden çıkarın ve iki dar açının toplamının 90 derece olduğunu denetleyin. Bir açı zaten biliniyor ve yalnızca eşi eksikse diye bu sayfayı yer imlerinize ekleyin."
        }
      ]
    }
  },
  "tocHeading": "Bu Rehberde",
  "tocItems": {
    "missing-angles": "Dik Üçgenin Açıları Nelerdir?",
    "missing-applications": "Günlük Hayattan Örnekler",
    "missing-choose": "Doğru Hesap Makinesini Seçme",
    "missing-examples": "Adım Adım Örnekler",
    "missing-faq": "SSS",
    "missing-formula": "Bilinmeyen Açıyı Bulma Formülü",
    "missing-howto": "Hesap Makinesi Nasıl Kullanılır",
    "missing-intro": "Dik Üçgende Bilinmeyen Açı Nasıl Bulunur",
    "missing-mistakes": "Yaygın Hatalar",
    "missing-related": "İlgili Hesap Makineleri",
    "missing-relationship": "Tümler Açılar Nasıl Değişir",
    "missing-reverse": "Ya B Açısı Biliniyorsa?",
    "missing-verify": "Cevabınızı Kontrol Etme",
    "missing-vs": "Tümler ve Bütünler Açılar"
  },
  "faqs": [
    {
      "question": "Dik üçgende bilinmeyen açı nasıl bulunur?",
      "answer": "Bilinen dar açıyı 90 dereceden çıkarın. Formül B = 90 - A şeklindedir; burada A bildiğiniz açı, B ise bilinmeyen açıdır. Örneğin A 35 dereceyse, B = 90 - 35 = 55 derece olur. Kenar uzunluklarına veya trigonometrik fonksiyonlara gerek yoktur."
    },
    {
      "question": "İki dar açı neden toplamda 90 derece eder?",
      "answer": "Her üçgen toplamda 180 derece barındırır. Bir dik üçgen bu derecelerin 90'ını dik açısına ayırır; geriye kalan 90 derece ise kalan iki dar açı arasında paylaşılır. Dik üçgende A + B'nin her zaman 90 dereceye eşit olmasının nedeni budur."
    },
    {
      "question": "Bilinmeyen açının formülü nedir?",
      "answer": "Formül B = 90 - A şeklindedir. Üçgen açı toplamı A + B + 90 = 180'den başlayın, A + B = 90 elde etmek için iki taraftan da 90 çıkarın, sonra iki taraftan da A çıkarın. Ters biçim A = 90 - B, B bilinen açı olduğunda aynı şekilde çalışır."
    },
    {
      "question": "Tümler açılar nedir?",
      "answer": "İki açı, ölçüleri toplamı 90 derece ettiğinde tümlerdir. 30 ile 60, 35 ile 55 ve 45 ile 45 çiftlerinin hepsi tümlerdir. Her dik üçgende iki dar açı tanım gereği tümlerdir; bilinmeyen açı formülünün ifade ettiği de tam olarak budur."
    },
    {
      "question": "Kenar uzunluklarını bilmeden bilinmeyen açıyı bulabilir miyim?",
      "answer": "Evet. Bir dar açı bilindiğinde, kenar uzunlukları bu hesap için önemsizdir. Tümler açı ilişkisi yalnızca açı toplamına bağlıdır; bu yüzden 90 dereceden çıkarmak kesin cevabı verir. Kenar uzunlukları ancak hiçbir açı bilinmiyorken önem kazanır."
    },
    {
      "question": "Tümler açılar ile bütünler açılar arasındaki fark nedir?",
      "answer": "Tümler açılar 90 dereceye, bütünler açılar 180 dereceye tamamlanır. Dik üçgenin iki dar açısı tümlerdir. Yaygın bir hata, bilinen açıyı 90 yerine 180 dereceden çıkarmaktır; bu, dik açının üçgen toplamının yarısını zaten karşıladığını unutmaktır."
    },
    {
      "question": "İki dar açı da eşit olabilir mi?",
      "answer": "Evet, ikisi de 45 derece ölçüldüğünde. O zaman 90 - 45 = 45 olur; üçgen, iki dik kenarı eşit olan ikizkenar dik üçgendir. İki dar açının eşleştiği tek durum budur; diğer tüm dik üçgenlerde farklıdırlar."
    },
    {
      "question": "Bilinen açı 35 dereceyse ne olur?",
      "answer": "Bilinmeyen açı 90 - 35 = 55 derecedir. Bunu iki yolla denetleyebilirsiniz: 35 + 55 = 90 tümler çifti doğrular, 35 + 55 + 90 = 180 ise tam üçgen açı toplamını doğrular. İki denetim de her zaman aynı fikirde olmalıdır."
    },
    {
      "question": "Bilinen açı 45 dereceden büyükse ne olur?",
      "answer": "Bilinmeyen açı 45 dereceden küçük çıkar; çünkü ikisi toplamda yine 90 etmelidir. Örneğin A 68 dereceyse, B = 90 - 68 = 22 derece olur. Bilinen açı 90 dereceye doğru büyüdükçe tümleri 0 dereceye doğru küçülür."
    },
    {
      "question": "Bilinmeyen bir dar açı tam olarak 0 veya 90 derece olabilir mi?",
      "answer": "Sıradan bir dik üçgende hayır. 0 veya 90 derecelik bir giriş, üç ayrı köşesi olan bir üçgeni değil; gerçek üçgensel alanı olmayan dejenere bir sınır durumunu tanımlar. Hesap makinesi, bilinen açının kesinlikle 0 ile 90 derece arasında olmasını ister; sonuç da her zaman aynı aralıkta kalır."
    },
    {
      "question": "B açısı biliniyorken A açısını nasıl bulurum?",
      "answer": "Ters formülü kullanın: A = 90 - B. Bu, aynı tümler ilişkinin diğer değişken için çözülmüş halidir. Örneğin B 62 dereceyse, A = 90 - 62 = 28 derece olur. Bu hesap makinesinin giriş olarak A açısını kabul ettiğini unutmayın; dolayısıyla yalnızca B biliniyorsa ters formülü elle uygulayın."
    },
    {
      "question": "Sinüs, kosinüs veya tanjant hesap makinesini ne zaman kullanmalıyım?",
      "answer": "Henüz hiçbir açı bilinmiyorken iki kenar uzunluğu biliniyorsa ters trigonometrik bir hesap makinesi kullanın. Sinüsten açı hesap makinesi karşı kenarı ve hipotenüsü ister, kosinüsten açı hesap makinesi komşu kenarı ve hipotenüsü ister, tanjanttan açı hesap makinesi ise iki dik kenarı ister. Herhangi bir dar açı bilindikten sonra bilinmeyen açı hesap makinesi işi bitirir."
    }
  ],
  "relatedHeading": "İlgili Üçgen Hesap Makinelerini Keşfedin",
  "relatedItems": [
    "Dik Üçgende Sinüsten Açı Hesap Makinesi",
    "Dik Üçgende Kosinüsten Açı Hesap Makinesi",
    "Dik Üçgende Tanjanttan Açı Hesap Makinesi",
    "Dik Üçgende Sinüsten Kenar Hesap Makinesi",
    "Dik Üçgende Kosinüsten Kenar Hesap Makinesi",
    "Dik Üçgende Tanjanttan Kenar Hesap Makinesi"
  ]
  },
  "sv": {
  "sections": {
    "missing-intro": {
      "h2": "Hur man hittar en saknad vinkel i en rätvinklig triangel",
      "blocks": [
        {
          "kind": "p",
          "text": "Om en spetsig vinkel i en rätvinklig triangel mäter [[35^\\circ]], så är den saknade vinkeln [[90^\\circ-35^\\circ=55^\\circ]]. Denna enda subtraktion är hela beräkningen. En rätvinklig triangel innehåller alltid en 90-graders vinkel, så de två återstående vinklarna måste dela på exakt de 90 grader som blir över. Att subtrahera den kända vinkeln från 90 grader avslöjar den saknade, utan sidlängder och utan trigonometriska funktioner."
        },
        {
          "kind": "p",
          "text": "Svaret, 55 grader i detta fall, är den andra spetsiga vinkeln i samma rätvinkliga triangel. De två vinklarna fungerar alltid som ett par: om du känner den ena bestäms den andra fullständigt. Denna kalkylator finns exakt för den situationen, när en vinkel redan är känd och bara dess komplementvinkel saknas. När ingen vinkel ännu är känd härleder en kalkylator för vinkel från tangens eller någon av dess motsvarigheter för sinus och cosinus den första vinkeln från uppmätta sidor."
        }
      ]
    },
    "missing-angles": {
      "h2": "Vilka är vinklarna i en rätvinklig triangel?",
      "blocks": [
        {
          "kind": "h3",
          "text": "Den räta vinkeln"
        },
        {
          "kind": "p",
          "text": "En 90-graders vinkel är ett perfekt hörn, vinkeln mellan en lodrät vägg och ett horisontellt golv. I varje rätvinklig triangel är denna vinkel fast: den ändrar aldrig storlek, och i diagram markeras den med en liten kvadrat vid hörnet. Eftersom en vinkel alltid är satt till 90 grader har de två andra vinklarna bara 90 grader kvar att dela på, vilket tvingar båda att vara spetsiga."
        },
        {
          "kind": "h3",
          "text": "De två spetsiga vinklarna"
        },
        {
          "kind": "p",
          "text": "En spetsig vinkel mäter mer än [[0^\\circ]] och mindre än [[90^\\circ]]. Båda de återstående vinklarna i en rätvinklig triangel ligger i detta intervall, och de kallas komplementvinklar eftersom deras mått alltid blir tillsammans 90 grader. Parningen är strikt: en enda känd spetsig vinkel lämnar exakt ett möjligt värde för dess partner, så den saknade vinkeln är aldrig en fråga om uppskattning."
        },
        {
          "kind": "h3",
          "text": "Vad är komplementvinklar?"
        },
        {
          "kind": "p",
          "text": "Två vinklar är komplementvinklar när deras mått tillsammans blir [[90^\\circ]]. Paren [[30^\\circ+60^\\circ=90^\\circ]], [[35^\\circ+55^\\circ=90^\\circ]] och [[45^\\circ+45^\\circ=90^\\circ]] är alla komplementvinklar. Komplementvinklar behöver inte vara lika stora; likhet uppstår endast vid 45 grader vardera. Vilka två positiva vinklar som helst som totalt blir 90 grader kvalificerar, oavsett om de sitter i samma triangel eller inte."
        },
        {
          "kind": "h3",
          "text": "Varför triangelns vinklar blir 180 grader tillsammans"
        },
        {
          "kind": "p",
          "text": "Varje triangel, oavsett form, innehåller exakt 180 grader fördelade på sina tre inre vinklar. I en rätvinklig triangel tar den fasta räta vinkeln omedelbart 90 av dessa grader, vilket lämnar exakt 90 grader till de två spetsiga vinklarna tillsammans. Diagrammet nedan visar hela redovisningen för en triangel med vinklarna 35, 55 och 90 grader."
        }
      ],
      "imgAlt": "Rätvinklig triangel markerad med vinklarna A 35 grader, B 55 grader, C 90 grader",
      "figcaption": "Vinklarna A (35 grader) och B (55 grader) är komplementvinklar: A + B = 90 grader, och 35 + 55 + 90 = 180 grader."
    },
    "missing-formula": {
      "h2": "Formeln för att hitta en saknad vinkel",
      "blocks": [
        {
          "kind": "p",
          "text": "Formeln kommer direkt från triangelns vinkelsummaregel. Börja med det allmänna påståendet:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Eftersom triangeln är rätvinklig är den tredje vinkeln fast:"
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Sätt in detta värde i summan:"
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Subtrahera 90 grader från båda leden, så står de två spetsiga vinklarna ensamma:"
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "Slutligen, subtrahera den kända vinkeln [[A]] från båda leden för att isolera den saknade vinkeln:"
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "Varje steg är vanlig algebra tillämpad på ett geometriskt faktum. Inget memoreras blint: de 90 graderna i formeln är den del av vinkelsumman som blir över efter att den räta vinkeln tagit sin hälft."
        },
        {
          "kind": "p",
          "text": "Samma relation fungerar omvänt. Om vinkel [[B]] är den kända, ger lösning för [[A]]:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Denna kalkylator använder den första formen eftersom dess inmatningsfält accepterar vinkel [[A]] och returnerar vinkel [[B]]. De två formlerna är inte olika regler; de är samma komplementvinkelsrelation löst för olika okända."
        },
        {
          "kind": "h3",
          "text": "Varför 90 grader, inte 180 grader"
        },
        {
          "kind": "p",
          "text": "Ett vanligt fel är att subtrahera den kända vinkeln från 180 grader. Den totalen täcker alla tre vinklarna i triangeln, så att använda den ensam glömmer att den räta vinkeln redan har räknats in. Med [[A=35^\\circ]] ger den felaktiga beräkningen [[180^\\circ-35^\\circ=145^\\circ]], vilket inte kan vara en spetsig vinkel i någon rätvinklig triangel. Den korrekta beräkningen, [[90^\\circ-35^\\circ=55^\\circ]], respekterar den räta vinkeln och kan kontrolleras direkt: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]."
        }
      ],
      "imgAlt": "Två paneler som kontrasterar triangelns vinkelsumma på 180 grader med det spetsiga paret på 90 grader",
      "figcaption": "Del A visar hela triangelns vinkelsumma; del B isolerar de komplementära spetsiga vinklarna."
    },
    "missing-howto": {
      "h2": "Så använder du kalkylatorn för saknad vinkel i en rätvinklig triangel",
      "blocks": [
        {
          "kind": "p",
          "text": "Genomgången nedan motsvarar det faktiska gränssnittet på denna sida."
        }
      ],
      "steps": [
        "<strong>Identifiera den rätvinkliga triangeln.</strong> Bekräfta att figuren har ett äkta 90-graders hörn innan du gör något annat; formeln gäller endast rätvinkliga trianglar.",
        "<strong>Lokalisera den spetsiga vinkel du redan känner.</strong> Detta är vinkel [[A]], värdet du ska skriva in i kalkylatorn.",
        "<strong>Bekräfta att den kända vinkeln är giltig.</strong> Den måste vara större än [[0^\\circ]] och mindre än [[90^\\circ]]. Allt utanför det intervallet kan inte vara en spetsig vinkel i en rätvinklig triangel.",
        "<strong>Skriv in den kända vinkeln [[A]] i grader.</strong> Inmatningsfältet accepterar decimaltal som 68,5, så behåll precisionen i din mätning.",
        "<strong>Klicka på Beräkna vinkel B.</strong> Verktyget tillämpar [[B=90^\\circ-A]] på din inmatning.",
        "<strong>Läs av den beräknade komplementvinkeln.</strong> Utdata är vinkel [[B]] i grader.",
        "<strong>Addera de två spetsiga vinklarna för att kontrollera resultatet.</strong> Summan måste bli 90 grader; om den inte gör det, kontrollera inmatningen igen.",
        "<strong>Använd Återställ när du vill börja en ny beräkning.</strong> Detta rensar inmatningen så att en ny vinkel kan matas in."
      ],
      "closingParagraphs": [
        "Lägg märke till vad kalkylatorn aldrig frågar efter: ingen motstående sidlängd, ingen närliggande sidlängd, ingen hypotenusa och inga sinus-, cosinus- eller tangensvärden. En känd spetsig vinkel är hela inmatningen eftersom vinkelsummaregeln sköter resten. Verktyget accepterar inte heller radianer eller direkt inmatning av vinkel [[B]]; dess inmatningsfält är specifikt vinkel [[A]] i grader."
      ]
    },
    "missing-examples": {
      "h2": "Steg-för-steg-exempel på att hitta saknade vinklar",
      "blocks": [
        {
          "kind": "p",
          "text": "Dessa fyra exempel bygger upp grundfärdigheten före de praktiska tillämpningarna. Varje exempel följer samma mönster: skriv formeln, sätt in, subtrahera."
        },
        {
          "kind": "h3",
          "text": "Exempel 1: En känd vinkel på 35 grader"
        },
        {
          "kind": "p",
          "text": "Givet [[A=35^\\circ]], hitta vinkel [[B]]."
        },
        {
          "kind": "p",
          "text": "Steg 1: Skriv formeln. [[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "Steg 2: Sätt in den kända vinkeln. [[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Steg 3: Subtrahera. [[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Kontroll: [[35^\\circ+55^\\circ=90^\\circ]]. Svaret är giltigt eftersom de två spetsiga vinklarna totalt blir exakt 90 grader och var och en ligger strikt mellan 0 och 90 grader."
        },
        {
          "kind": "h3",
          "text": "Exempel 2: En känd vinkel på 20 grader"
        },
        {
          "kind": "p",
          "text": "Givet [[A=20^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "En mindre spetsig vinkel ger en större komplementvinkel. Eftersom paret alltid måste bli totalt 90 grader läggs varje grad som tas bort från den ena vinkeln till den andra. Här lämnar 20-gradersvinkeln generösa 70 grader åt sin partner."
        },
        {
          "kind": "h3",
          "text": "Exempel 3: En likbent rätvinklig triangel"
        },
        {
          "kind": "p",
          "text": "Givet [[A=45^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Båda spetsiga vinklarna är lika stora, 45 grader vardera. Detta är den likbenta rätvinkliga triangeln, den enda rätvinkliga triangeln vars spetsiga vinklar matchar. Dess två ben är också lika långa, vilket är varför 45-45-90-triangeln förekommer så ofta i ritnings- och byggkonstruktioner."
        },
        {
          "kind": "h3",
          "text": "Exempel 4: En känd vinkel på 68,5 grader"
        },
        {
          "kind": "p",
          "text": "Givet [[A=68.5^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "En relativt stor spetsig vinkel har ett relativt litet komplement. Decimalinmatningen fungerar exakt som ett heltal: subtrahera noggrant och se till att ,5:an hamnar rätt justerad, så ger 90 minus 68,5 resultatet 21,5. Kontrollen håller fortfarande: [[68.5^\\circ+21.5^\\circ=90^\\circ]]."
        }
      ]
    },
    "missing-applications": {
      "h2": "Praktiska tillämpningar av saknade vinklar",
      "blocks": [
        {
          "kind": "p",
          "text": "En punkt kräver omsorg innan exemplen börjar. Formeln för saknad vinkel gäller direkt när två vinklar tillhör samma rätvinkliga triangel. I praktiska sammanhang fungerar en horisontell yta och en lodrät yta ofta som de vinkelräta referenslinjerna, och en diagonal komponent som en stege eller taksparre bildar hypotenusan. Exemplen nedan anger detta antagande överallt där det används."
        },
        {
          "kind": "h3",
          "text": "Exempel 5: Hitta en taksparres vinkel mot lodlinjen"
        },
        {
          "kind": "p",
          "text": "En taksparre bildar en vinkel på [[35^\\circ]] med horisontalplanet. Hitta vinkeln mellan samma sparre och en lodrät referenslinje."
        },
        {
          "kind": "p",
          "text": "Givet [[A=35^\\circ]] mätt från horisontalplanet."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "De horisontella och lodräta referenslinjerna är vinkelräta, så de två vinklarna är komplementvinklar. Resultatet 55 grader är vinkeln mot lodlinjen, inte en fullständig taklutnings- eller konstruktionsberäkning."
        },
        {
          "kind": "h3",
          "text": "Exempel 6: Hitta en steges vinkel mot en vägg"
        },
        {
          "kind": "p",
          "text": "En stege står mot en lodrät vägg och bildar en vinkel på [[68^\\circ]] med det horisontella markplanet. Hitta vinkeln mellan stegen och väggen."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Marken och väggen bildar en rät vinkel i denna idealiserade modell, med stegen som hypotenusa. 22-gradersvinkeln beskriver stegens orientering mot väggen. Beräkningen ensam fastställer inte om stegen står säkert."
        },
        {
          "kind": "h3",
          "text": "Exempel 7: Förstå en ramps vinkel mot lodlinjen"
        },
        {
          "kind": "p",
          "text": "En rak ramp bildar en vinkel på [[8^\\circ]] med horisontalplanet. Hitta komplementvinkeln mellan ramplikningen och en lodrät referenslinje."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Rampens vinkel mot lodlinjen är komplementet till dess vinkel mot horisontalplanet. En flack 8-graders lutning lämnar en brant 82-graders vinkel mot lodlinjen. Denna vinkel ensam avgör inte tillgänglighet eller regelefterlevnad."
        },
        {
          "kind": "h3",
          "text": "Exempel 8: Hitta en trappvangens komplementvinkel"
        },
        {
          "kind": "p",
          "text": "En trappvang bildar en vinkel på [[32^\\circ]] med golvet. Beräkna dess vinkel mot en lodrät referenslinje."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Golvet, den lodräta referensen och den diagonala vangen bildar den rätvinkliga triangeln. Resultatet 58 grader beskriver vangens orientering mot lodlinjen. Det verifierar inte trappans mått eller bygglagstiftningens krav."
        },
        {
          "kind": "h3",
          "text": "Exempel 9: Beräkna ett diagonalstags vinkel mot ett lodrätt stöd"
        },
        {
          "kind": "p",
          "text": "Ett diagonalstag bildar en vinkel på [[40^\\circ]] med en horisontell balk. Hitta vinkeln mellan staget och ett vinkelrätt lodrätt stöd."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "De två referensriktningarna måste vara vinkelräta för att komplementregeln ska gälla. 50-gradersvinkeln är ett rent geometriskt resultat; den avgör inte stagets bärighet."
        },
        {
          "kind": "h3",
          "text": "Exempel 10: Hitta en staglinas vinkel mot en lodrät stolpe"
        },
        {
          "kind": "p",
          "text": "En staglina bildar en vinkel på [[30^\\circ]] med horisontal mark. Hitta vinkeln mellan linan och en lodrät stolpe."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Den horisontella marken och den lodräta stolpen definierar den räta vinkeln, med linan som hypotenusa. Resultatet 60 grader återformulerar samma linriktning mot den lodräta referensen. Det fastställer inte linans spänning eller förankringens säkerhet."
        },
        {
          "kind": "h3",
          "text": "Exempel 11: Omvandla en elevationsvinkel till dess komplement"
        },
        {
          "kind": "p",
          "text": "I ett avvägningsdiagram registreras en siktlinje med en elevationsvinkel på [[24^\\circ]] över horisontalplanet. Beräkna dess komplementvinkel mot lodlinjen."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "En vinkel mätt från horisontalplanet och en vinkel mätt från lodlinjen beskriver samma siktlinje från vinkelräta utsiktspunkter. Exemplet förutsätter en rak siktlinje med vinkelräta horisontella och lodräta referenser."
        },
        {
          "kind": "h3",
          "text": "Exempel 12: Hitta ett takfalls vinkel mot en lodrät referens"
        },
        {
          "kind": "p",
          "text": "Ett takfall mäts till [[27^\\circ]] mot horisontalplanet. Hitta dess komplementvinkel mot lodlinjen."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "De två mätningarna beskriver samma lutning från olika vinkelräta referensriktningar. Ingen av mätningarna ensam är en konstruktionsbedömning."
        },
        {
          "kind": "h3",
          "text": "Exempel 13: En diagonal i en kvadratisk ritningslayout"
        },
        {
          "kind": "p",
          "text": "En diagonal linje i en kvadratisk ritningslayout bildar en vinkel på [[45^\\circ]] med ena sidan. Hitta vinkeln den bildar med den angränsande vinkelräta sidan."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Diagonalen halverar kvadratens räta vinkel, så båda resulterande vinklarna är 45 grader. Denna relation hjälper vid grundläggande ritnings- och layoutkontroller: om en uppmätt diagonal inte delar hörnet jämnt är layouten inte kvadratisk."
        },
        {
          "kind": "h3",
          "text": "Exempel 14: Hitta en maskinpanels komplementvinkel"
        },
        {
          "kind": "p",
          "text": "En panel lutas [[15^\\circ]] bort från horisontalplanet. Beräkna vinkeln mellan panelens orientering och den lodräta referensriktningen."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "De horisontella och lodräta referenserna är vinkelräta, så panellutningen och dess komplement beskriver samma orientering. Resultatet beskriver endast orientering, inte maskinens säkerhet eller prestanda."
        },
        {
          "kind": "h3",
          "text": "Exempel 15: Omvandla en trädbetraktelsevinkel"
        },
        {
          "kind": "p",
          "text": "En person tittar mot toppen av ett träd med en elevationsvinkel på [[38^\\circ]] över horisontalplanet. Hitta komplementvinkeln mellan siktlinjen och en lodrät referensriktning."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Beräkningen ändrar referensriktningen, inte själva siktlinjen. 52-gradersvinkeln är helt enkelt samma blick mätt mot lodlinjen. Den beräknar inte trädets höjd."
        },
        {
          "kind": "h3",
          "text": "Exempel 16: Hitta ett ledstångs vinkel mot ett lodrätt stöd"
        },
        {
          "kind": "p",
          "text": "Ett diagonalt ledstång bildar en vinkel på [[55^\\circ]] med ett horisontellt vilplan. Hitta dess komplementvinkel mot en lodrät stödlinje."
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Komplementvinkeln beskriver samma diagonala orientering från en annan referens. En brant 55-graders vinkel mot horisontalplanet blir en flack 35-graders vinkel mot lodlinjen. Vinkeln ensam verifierar inte tillgänglighets- eller byggkrav."
        },
        {
          "kind": "h3",
          "text": "Praktiska exempel i jämförelse"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Situation",
          "Känd vinkel",
          "Referensriktning",
          "Saknad vinkel",
          "Beräkning",
          "Tolkning"
        ],
        "rows": [
          [
            "Taksparre",
            "35&deg;",
            "Horisontell",
            "55&deg;",
            "90 - 35",
            "Sparrens vinkel mot lodlinjen"
          ],
          [
            "Stege",
            "68&deg;",
            "Mark",
            "22&deg;",
            "90 - 68",
            "Stegens vinkel mot väggen"
          ],
          [
            "Ramp",
            "8&deg;",
            "Horisontell",
            "82&deg;",
            "90 - 8",
            "Rampens riktning mot lodlinjen"
          ],
          [
            "Trappvang",
            "32&deg;",
            "Golv",
            "58&deg;",
            "90 - 32",
            "Vangens vinkel mot lodlinjen"
          ],
          [
            "Diagonalstag",
            "40&deg;",
            "Horisontell balk",
            "50&deg;",
            "90 - 40",
            "Stagets vinkel mot lodrätt stöd"
          ],
          [
            "Staglina",
            "30&deg;",
            "Mark",
            "60&deg;",
            "90 - 30",
            "Linans vinkel mot stolpen"
          ],
          [
            "Avvägnings siktlinje",
            "24&deg;",
            "Horisontell",
            "66&deg;",
            "90 - 24",
            "Siktlinjen mot lodlinjen"
          ],
          [
            "Takfall",
            "27&deg;",
            "Horisontell",
            "63&deg;",
            "90 - 27",
            "Lutningens vinkel mot lodlinjen"
          ],
          [
            "Ritningsdiagonal",
            "45&deg;",
            "En sida",
            "45&deg;",
            "90 - 45",
            "Diagonalen mot angränsande sida"
          ],
          [
            "Maskinpanel",
            "15&deg;",
            "Horisontell",
            "75&deg;",
            "90 - 15",
            "Panelens orientering mot lodlinjen"
          ],
          [
            "Trädbetraktelse",
            "38&deg;",
            "Horisontell",
            "52&deg;",
            "90 - 38",
            "Siktlinjen mot lodlinjen"
          ],
          [
            "Ledstång",
            "55&deg;",
            "Vilplan",
            "35&deg;",
            "90 - 55",
            "Ledstången mot lodrätt stöd"
          ]
        ]
      }
    },
    "missing-relationship": {
      "h2": "Förstå relationen mellan komplementvinklar",
      "blocks": [
        {
          "kind": "p",
          "text": "Mönstret är helt förutsägbart. Om vinkel [[A]] ökar minskar vinkel [[B]] med exakt samma belopp, eftersom deras total är låst till 90 grader. Om [[A]] minskar växer [[B]] för att fylla gapet. Vid [[A=45^\\circ]] möts de två i mitten, och ingen spetsig vinkel kan nå [[0^\\circ]] eller [[90^\\circ]] i en äkta rätvinklig triangel med tre distinkta hörn."
        },
        {
          "kind": "p",
          "text": "Tabellen är symmetrisk kring 45 grader: paren (10, 80), (20, 70) och (30, 60) speglar varandra eftersom byte av känd och saknad vinkel bara läser samma komplementrelation från andra sidan. De fyra panelerna nedan gör denna avvägning visuell."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Känd vinkel A",
          "Formel",
          "Saknad vinkel B"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      },
      "imgAlt": "Fyra trianglar som visar komplementparen 20-70, 30-60, 45-45, 70-20 grader",
      "figcaption": "När vinkel A växer krymper vinkel B med samma belopp; deras summa förblir 90 grader."
    },
    "missing-reverse": {
      "h2": "Vad händer om du i stället känner vinkel B?",
      "blocks": [
        {
          "kind": "p",
          "text": "Samma komplementvinkelsregel fungerar omvänt. Om vinkel [[B]] är den kända, lös relationen för [[A]]:"
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "Ingen ny formel krävs; det är samma ekvation med rollerna ombytta."
        },
        {
          "kind": "h3",
          "text": "Genomräknat exempel"
        },
        {
          "kind": "p",
          "text": "Givet [[B=62^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Ytterligare tre korta exempel i omvänd riktning följer samma steg:"
        }
      ],
      "listItems": [
        "[[B=15^\\circ]], så [[A=90^\\circ-15^\\circ=75^\\circ]].",
        "[[B=42^\\circ]], så [[A=90^\\circ-42^\\circ=48^\\circ]].",
        "[[B=70^\\circ]], så [[A=90^\\circ-70^\\circ=20^\\circ]]."
      ],
      "closingParagraphs": [
        "En praktisk anmärkning: denna kalkylators inmatningsfält accepterar vinkel [[A]] och returnerar vinkel [[B]]. En läsare som bara känner vinkel [[B]] bör tillämpa den omvända formeln för hand om inte gränssnittet är verifierat att stödja direkt inmatning av [[B]]."
      ]
    },
    "missing-vs": {
      "h2": "Komplementvinklar vs. supplementvinklar",
      "blocks": [
        {
          "kind": "p",
          "text": "De två termerna låter lika och båda beskriver vinkelpar, men de svarar på olika frågor."
        },
        {
          "kind": "h3",
          "text": "Komplementvinklar"
        },
        {
          "kind": "p",
          "text": "Två vinklar är komplementvinklar när deras summa är [[90^\\circ]]. De två spetsiga vinklarna i en rätvinklig triangel är läroboksexemplet: de måste vara komplementvinklar eftersom den räta vinkeln redan tar de andra 90 graderna av triangelns total."
        },
        {
          "kind": "h3",
          "text": "Supplementvinklar"
        },
        {
          "kind": "p",
          "text": "Två vinklar är supplementvinklar när deras summa är [[180^\\circ]]. En rät linje kan till exempel delas i två supplementvinklar. Supplementpar ska aldrig förväxlas med de två spetsiga vinklarna i en rätvinklig triangel, som tillsammans blir 90, inte 180."
        },
        {
          "kind": "p",
          "text": "Triangelns fulla vinkelsumma är 180 grader, men de två spetsiga vinklarna blir tillsammans 90 grader. Att hålla isär dessa två totaler är nyckeln till att undvika det vanligaste misstaget på denna sida."
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">Relation",
          "Total",
          "Exempel"
        ],
        "rows": [
          [
            "Komplementvinklar",
            "90&deg;",
            "35 + 55"
          ],
          [
            "Supplementvinklar",
            "180&deg;",
            "110 + 70"
          ],
          [
            "Rät vinkel",
            "90&deg;",
            "Den fasta vinkeln i en rätvinklig triangel"
          ]
        ]
      },
      "imgAlt": "Fyra paneler som visar komplementvinklar för en stege, taksparre, stag och kvadratdiagonal",
      "figcaption": "Komplementpar i verkliga sammanhang: varje känd vinkel bestämmer sin partner."
    },
    "missing-mistakes": {
      "h2": "Vanliga misstag när man hittar en saknad vinkel",
      "blocks": [
        {
          "kind": "h3",
          "text": "Fel kontra rätt"
        },
        {
          "kind": "p",
          "text": "Givet [[A=35^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "Felaktigt: [[180^\\circ-35^\\circ=145^\\circ]]. Detta är inte den saknade spetsiga vinkeln eftersom den räta vinkeln inte har räknats in; 145 grader kan inte sitta i en rätvinklig triangel tillsammans med ett 90-graders hörn."
        },
        {
          "kind": "p",
          "text": "Korrekt: [[90^\\circ-35^\\circ=55^\\circ]]."
        },
        {
          "kind": "p",
          "text": "Verifiera: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Den fulla vinkelsumman bekräftar svaret."
        }
      ],
      "listItems": [
        "<strong>Att subtrahera den kända vinkeln från 180 grader i stället för 90.</strong> 180-graders totalen inkluderar den räta vinkeln, som redan är fast. Vad som går fel: med [[A=35^\\circ]] ger den felaktiga matematiken 145 grader, en omöjlig spetsig vinkel. Åtgärd: subtrahera från 90, vilket ger [[55^\\circ]].",
        "<strong>Att glömma att en vinkel redan är 90 grader.</strong> Den räta vinkeln är lätt att förbise eftersom den inte behöver någon beräkning. Vad som går fel: att behandla triangeln som om alla tre vinklarna vore okända. Åtgärd: kom ihåg att den räta vinkeln tar hälften av 180-graders totalen innan du börjar.",
        "<strong>Att mata in 90 grader i kalkylatorn.</strong> Verktyget förväntar en spetsig vinkel strikt mellan 0 och 90 grader. Vad som går fel: en 90-graders inmatning lämnar inget utrymme för en andra spetsig vinkel. Åtgärd: mata endast in den kända spetsiga vinkeln.",
        "<strong>Att mata in en vinkel större än 90 grader.</strong> Ingen spetsig vinkel överstiger 90 grader per definition. Vad som går fel: subtraktionen ger ett negativt resultat, vilket inte har någon geometrisk betydelse här. Åtgärd: kontrollera att inmatningen är under 90 grader.",
        "<strong>Att mata in 0 grader.</strong> En nollvinkel kollapsar triangeln till ett linjesegment. Vad som går fel: resultatet påstår ett 90-graders komplement för en figur utan area. Åtgärd: använd endast positiva spetsiga vinklar.",
        "<strong>Att förväxla komplementvinklar med supplementvinklar.</strong> Komplementpar blir tillsammans 90 grader; supplementpar blir tillsammans 180. Vad som går fel: att subtrahera från 180 ger misstaget i punkt 1. Åtgärd: matcha ordet med totalen, komplement med 90.",
        "<strong>Att anta att de två spetsiga vinklarna måste vara lika.</strong> Likhet gäller endast vid 45 grader vardera. Vad som går fel: att förvänta symmetri i en 20-70-triangel. Åtgärd: låt subtraktionen avgöra; de flesta par skiljer sig.",
        "<strong>Att blanda ihop vinkelbeteckningarna A och B.</strong> Kalkylatorn tar [[A]] och returnerar [[B]]. Vad som går fel: att mata in det redan kända komplementet som om det vore inmatningen. Åtgärd: beteckna den kända vinkeln A innan du skriver något.",
        "<strong>Att tro att sidlängder krävs för just denna beräkning.</strong> Sidor spelar roll för trigonometri, inte för komplement. Vad som går fel: att fastna på ett problem som bara behöver subtraktion. Åtgärd: om en spetsig vinkel är känd, subtrahera den från 90 och var klar.",
        "<strong>Att använda invers sinus, cosinus eller tangens när enkel subtraktion räcker.</strong> Inversfunktioner svarar på en svårare fråga. Vad som går fel: extra arbete och extra risk för fel inställning (grader mot radianer). Åtgärd: när en vinkel är känd är kalkylatorn för vinkel från sinus och dess syskon fel verktyg; subtraktion är exakt och omedelbar.",
        "<strong>Att anta att en uppmätt fysisk vinkel automatiskt bildar en rätvinklig triangel utan att kontrollera referensriktningarna.</strong> Verkliga hörn är sällan perfekta. Vad som går fel: att tillämpa komplementregeln där 90-graders hörnet faktiskt inte finns. Åtgärd: verifiera att referensriktningarna är vinkelräta innan du subtraherar.",
        "<strong>Att avrunda en inmatad mätning i onödan före subtraktionen.</strong> Tidig avrundning kastar bort precision som inmatningen faktiskt hade. Vad som går fel: 68,5 avrundat till 69 ger 21 i stället för 21,5. Åtgärd: subtrahera med det fulla uppmätta värdet och avrunda sedan resultatet så att det matchar inmatningens precision."
      ]
    },
    "missing-verify": {
      "h2": "Så kontrollerar du om din saknade vinkel är giltig",
      "blocks": [
        {
          "kind": "p",
          "text": "Det giltiga inmatningsintervallet är:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "och den beräknade vinkeln måste uppfylla samma intervall:"
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "En inmatning på 0 eller 90 grader skulle ge ett degenererat gränsfall snarare än en vanlig rätvinklig triangel med tre distinkta hörn och positiva sidlängder. Kalkylatorn tillämpar den strikta olikheten av exakt denna anledning."
        },
        {
          "kind": "h3",
          "text": "Metod 1: Addera de spetsiga vinklarna"
        },
        {
          "kind": "p",
          "text": "Verifiera [[A+B=90^\\circ]]. Exempel: [[35^\\circ+55^\\circ=90^\\circ]]. Detta är den snabbaste kontrollen och fångar 180-graders misstaget omedelbart."
        },
        {
          "kind": "h3",
          "text": "Metod 2: Kontrollera hela triangeln"
        },
        {
          "kind": "p",
          "text": "Verifiera [[A+B+90^\\circ=180^\\circ]]. Exempel: [[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]. Detta bekräftar svaret mot triangelns universella vinkelsumma."
        },
        {
          "kind": "h3",
          "text": "Metod 3: Kontrollera den omvända beräkningen"
        },
        {
          "kind": "p",
          "text": "Om [[B=90^\\circ-A]] måste [[A=90^\\circ-B]] återställa den ursprungliga inmatningen. Med [[A=35^\\circ]] som ger [[B=55^\\circ]] är den omvända kontrollen [[90^\\circ-55^\\circ=35^\\circ]]. Denna konsistenskontroll behöver inga sidmätningar alls."
        },
        {
          "kind": "p",
          "text": "En varning: om inmatningsvinkeln kommer från en fysisk mätning följer dess osäkerhet med in i resultatet. Ungefär uppmätta 35 grader ger ungefär kända 55 grader; rapportera svaret med en precision som matchar mätningen. För kontroller som involverar sidlängder kan Pythagoras-sats-kalkylatorn bekräfta triangelns geometri oberoende."
        }
      ]
    },
    "missing-choose": {
      "h2": "Att välja rätt kalkylator för rätvinklig triangel",
      "blocks": [
        {
          "kind": "p",
          "text": "Varje verktyg nedan svarar på en annan fråga. Matcha verktyget med vad du faktiskt vet:"
        }
      ],
      "listItems": [
        "<strong>Kalkylator för saknad vinkel i rätvinklig triangel</strong> (denna sida): hittar komplementvinkeln när en spetsig vinkel redan är känd. Använd den när inmatningen är en vinkel, inte en sida.",
        "<strong>Kalkylator för vinkel från sinus i rätvinklig triangel</strong>: hittar en spetsig vinkel från den motstående sidan och hypotenusan. Använd den när dessa två längder har uppmätts.",
        "<strong>Kalkylator för vinkel från cosinus i rätvinklig triangel</strong>: hittar en spetsig vinkel från den närliggande sidan och hypotenusan.",
        "<strong>Kalkylator för vinkel från tangens i rätvinklig triangel</strong>: hittar en spetsig vinkel från den motstående och den närliggande sidan, de två benen.",
        "<strong>Kalkylator för sida från sinus i rätvinklig triangel</strong>: hittar en saknad sidlängd när en vinkel och en sida är kända.",
        "<strong>Kalkylator för sida från cosinus i rätvinklig triangel</strong>: hittar en saknad sidlängd från en vinkel och hypotenusan eller den närliggande sidan.",
        "<strong>Kalkylator för sida från tangens i rätvinklig triangel</strong>: hittar ett saknat ben från en känd vinkel och det andra benet."
      ],
      "closingParagraphs": [
        "Beslutsregeln är enkel. Du känner en spetsig vinkel: använd kalkylatorn för saknad vinkel på denna sida. Du känner två lämpliga sidlängder: använd den matchande invers-trigonometriska kalkylatorn. Du behöver en okänd sida: använd en sidokalkylator. Och du behöver den andra vinkeln efter en trigonometrisk beräkning: subtrahera den kända vinkeln från 90 grader, vilket är exakt vad denna sida automatiserar."
      ]
    },
    "missing-conclusion": {
      "h2": "Hitta varje saknad vinkel med tillförsikt",
      "blocks": [
        {
          "kind": "p",
          "text": "Beräkningen av saknad vinkel är den enklaste operationen i rätvinklig-triangel-geometri: subtrahera den kända spetsiga vinkeln från 90 grader. Bakom den subtraktionen ligger triangelns vinkelsummaregel, som reserverar hälften av varje triangels total för den räta vinkeln och lämnar den andra hälften åt komplementparet. Oavsett om den kända vinkeln kommer från en taksparre, en stege, en trappvang eller en ritningslayout förändras metoden aldrig: bekräfta den räta vinkeln, subtrahera från 90 och verifiera att de två spetsiga vinklarna tillsammans blir 90 grader. Spara denna sida som bokmärke för de tillfällen då en vinkel redan är känd och bara dess partner saknas."
        }
      ]
    }
  },
  "tocHeading": "I denna guide",
  "tocItems": {
    "missing-angles": "Vilka är vinklarna i en rätvinklig triangel?",
    "missing-applications": "Praktiska tillämpningar",
    "missing-choose": "Att välja rätt kalkylator",
    "missing-examples": "Steg-för-steg-exempel",
    "missing-faq": "Vanliga frågor",
    "missing-formula": "Formeln för att hitta en saknad vinkel",
    "missing-howto": "Så använder du kalkylatorn",
    "missing-intro": "Hur man hittar en saknad vinkel i en rätvinklig triangel",
    "missing-mistakes": "Vanliga misstag",
    "missing-related": "Relaterade kalkylatorer",
    "missing-relationship": "Hur komplementvinklar förändras",
    "missing-reverse": "Vad händer om du i stället känner vinkel B?",
    "missing-verify": "Kontrollera ditt svar",
    "missing-vs": "Komplementvinklar vs. supplementvinklar"
  },
  "faqs": [
    {
      "question": "Hur hittar man en saknad vinkel i en rätvinklig triangel?",
      "answer": "Subtrahera den kända spetsiga vinkeln från 90 grader. Formeln är B = 90 - A, där A är vinkeln du känner och B är den saknade. Om till exempel A är 35 grader blir B = 90 - 35 = 55 grader. Inga sidlängder eller trigonometriska funktioner behövs."
    },
    {
      "question": "Varför blir de två spetsiga vinklarna tillsammans 90 grader?",
      "answer": "Varje triangel innehåller totalt 180 grader. En rätvinklig triangel reserverar 90 av dessa grader för sin räta vinkel, vilket lämnar exakt 90 grader att dela mellan de två återstående spetsiga vinklarna. Därför är A + B alltid lika med 90 grader i en rätvinklig triangel."
    },
    {
      "question": "Vilken är formeln för en saknad vinkel?",
      "answer": "Formeln är B = 90 - A. Utgå från triangelns vinkelsumma A + B + 90 = 180, subtrahera 90 från båda leden för att få A + B = 90, och subtrahera sedan A från båda leden. Den omvända formen, A = 90 - B, fungerar på samma sätt när B är den kända vinkeln."
    },
    {
      "question": "Vad är komplementvinklar?",
      "answer": "Två vinklar är komplementvinklar när deras mått tillsammans blir 90 grader. Paren 30 och 60, 35 och 55 samt 45 och 45 är alla komplementvinklar. I varje rätvinklig triangel är de två spetsiga vinklarna komplementvinklar per definition, vilket är exakt vad formeln för saknad vinkel uttrycker."
    },
    {
      "question": "Kan jag hitta den saknade vinkeln utan att känna sidlängderna?",
      "answer": "Ja. När en spetsig vinkel är känd är sidlängderna irrelevanta för denna beräkning. Komplementvinkelsrelationen beror endast på vinkelsumman, så att subtrahera från 90 grader ger det exakta svaret. Sidlängder spelar roll endast när ingen vinkel ännu är känd."
    },
    {
      "question": "Vad är skillnaden mellan komplementvinklar och supplementvinklar?",
      "answer": "Komplementvinklar blir tillsammans 90 grader; supplementvinklar blir tillsammans 180 grader. De två spetsiga vinklarna i en rätvinklig triangel är komplementvinklar. Ett vanligt misstag är att subtrahera den kända vinkeln från 180 i stället för 90, vilket glömmer att den räta vinkeln redan står för hälften av triangelns total."
    },
    {
      "question": "Kan båda spetsiga vinklarna vara lika?",
      "answer": "Ja, när vardera mäter 45 grader. Då blir 90 - 45 = 45, så triangeln är en likbent rätvinklig triangel med två lika ben. Detta är det enda fallet där de två spetsiga vinklarna matchar; i varje annan rätvinklig triangel skiljer de sig."
    },
    {
      "question": "Vad händer om den kända vinkeln är 35 grader?",
      "answer": "Den saknade vinkeln är 90 - 35 = 55 grader. Du kan verifiera det på två sätt: 35 + 55 = 90 bekräftar komplementparet, och 35 + 55 + 90 = 180 bekräftar triangelns fulla vinkelsumma. Båda kontrollerna ska alltid stämma överens."
    },
    {
      "question": "Vad händer om den kända vinkeln är större än 45 grader?",
      "answer": "Den saknade vinkeln blir mindre än 45 grader, eftersom de två fortfarande måste bli totalt 90. Om till exempel A är 68 grader blir B = 90 - 68 = 22 grader. När den kända vinkeln växer mot 90 krymper dess komplement mot 0."
    },
    {
      "question": "Kan en saknad spetsig vinkel vara exakt 0 eller 90 grader?",
      "answer": "Inte i en vanlig rätvinklig triangel. En inmatning på 0 eller 90 grader beskriver ett degenererat gränsfall utan någon verklig triangelarea, inte en triangel med tre distinkta hörn. Kalkylatorn kräver att den kända vinkeln ligger strikt mellan 0 och 90 grader, och resultatet hamnar alltid i samma intervall."
    },
    {
      "question": "Hur hittar jag vinkel A när vinkel B är känd?",
      "answer": "Använd den omvända formeln A = 90 - B. Det är samma komplementrelation löst för den andra variabeln. Om till exempel B är 62 grader blir A = 90 - 62 = 28 grader. Observera att denna kalkylator accepterar vinkel A som inmatning, så tillämpa den omvända formeln för hand när endast B är känd."
    },
    {
      "question": "När ska jag i stället använda en sinus-, cosinus- eller tangenskalkylator?",
      "answer": "Använd en invers trigonometrisk kalkylator när ingen vinkel ännu är känd men två sidlängder är det. Kalkylatorn för vinkel från sinus behöver den motstående sidan och hypotenusan, kalkylatorn för vinkel från cosinus behöver den närliggande sidan och hypotenusan, och kalkylatorn för vinkel från tangens behöver båda benen. När någon spetsig vinkel väl är känd slutför kalkylatorn för saknad vinkel jobbet."
    }
  ],
  "relatedHeading": "Utforska relaterade triangelkalkylatorer",
  "relatedItems": [
    "Kalkylator för vinkel från sinus i rätvinklig triangel",
    "Kalkylator för vinkel från cosinus i rätvinklig triangel",
    "Kalkylator för vinkel från tangens i rätvinklig triangel",
    "Kalkylator för sida från sinus i rätvinklig triangel",
    "Kalkylator för sida från cosinus i rätvinklig triangel",
    "Kalkylator för sida från tangens i rätvinklig triangel"
  ]
  },
  "zh": {
  "sections": {
    "missing-intro": {
      "h2": "如何在直角三角形中求缺失角",
      "blocks": [
        {
          "kind": "p",
          "text": "如果直角三角形的一个锐角为 [[35^\\circ]]，那么缺失角就是 [[90^\\circ-35^\\circ=55^\\circ]]。一次减法就完成了整个计算。直角三角形中总有一个 90 度角，因此剩下的两个角恰好平分剩下的 90 度。用 90 度减去已知角就能得到缺失角，不需要边长，也不需要三角函数。"
        },
        {
          "kind": "p",
          "text": "本例中的答案 55 度，就是同一个直角三角形中的另一个锐角。这两个角总是成对出现：知道其中一个，就完全确定了另一个。这个计算器正是为这种情况设计的，当一个角已经已知，只缺少它的余角时。当还没有已知角时，可以通过正切求角计算器或它的正弦、余弦对应计算器，根据测量的边长先求出第一个角。"
        }
      ]
    },
    "missing-angles": {
      "h2": "直角三角形中的角有哪些？",
      "blocks": [
        {
          "kind": "h3",
          "text": "直角"
        },
        {
          "kind": "p",
          "text": "90 度角表示一个完美的直角，就像竖直的墙面与水平的地板之间的夹角。在每个直角三角形中，这个角都是固定的：它永远不会改变大小，图形中会用顶点处的一个小正方形来标记。因为其中一个角永久固定为 90 度，剩下两个角只能平分余下的 90 度，这迫使它们都是锐角。"
        },
        {
          "kind": "h3",
          "text": "两个锐角"
        },
        {
          "kind": "p",
          "text": "锐角大于 [[0^\\circ]] 而小于 [[90^\\circ]]。直角三角形剩下的两个角都落在这个范围内，它们被称为余角，因为它们的度数之和恒为 90 度。这种配对关系是严格的：已知一个锐角，另一个角就只有一种可能的值，因此缺失角绝不是估计出来的。"
        },
        {
          "kind": "h3",
          "text": "什么是余角？"
        },
        {
          "kind": "p",
          "text": "两个角度数之和为 [[90^\\circ]] 时，它们互为余角。[[30^\\circ+60^\\circ=90^\\circ]]、[[35^\\circ+55^\\circ=90^\\circ]] 和 [[45^\\circ+45^\\circ=90^\\circ]] 都是余角组合。余角不需要相等，只有在各为 45 度时才相等。任何两个和为 90 度的正角都算余角，无论它们是否在同一个三角形内。"
        },
        {
          "kind": "h3",
          "text": "为什么三角形的内角和是 180 度"
        },
        {
          "kind": "p",
          "text": "无论形状如何，每个三角形三个内角的总和恰好是 180 度。在直角三角形中，固定的直角立刻占去了 90 度，剩下恰好 90 度由两个锐角平分。下面的图展示了一个角分别为 35 度、55 度和 90 度的三角形的完整角度分配。"
        }
      ],
      "imgAlt": "标有角 A 35 度、B 55 度、C 90 度的直角三角形",
      "figcaption": "角 A（35 度）与角 B（55 度）互为余角：A + B = 90 度，且 35 + 55 + 90 = 180 度。"
    },
    "missing-formula": {
      "h2": "求缺失角的公式",
      "blocks": [
        {
          "kind": "p",
          "text": "这个公式直接来自三角形内角和定理。先从一般表述开始："
        },
        {
          "kind": "p",
          "text": "[[[A+B+C=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "因为三角形是直角三角形，第三个角是固定的："
        },
        {
          "kind": "p",
          "text": "[[[C=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "把这个值代入角和中："
        },
        {
          "kind": "p",
          "text": "[[[A+B+90^\\circ=180^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "两边同时减去 90 度，两个锐角就单独留了下来："
        },
        {
          "kind": "p",
          "text": "[[[A+B=90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "最后，两边同时减去已知角 [[A]]，把缺失角单独分离出来："
        },
        {
          "kind": "p",
          "text": "[[[B=90^\\circ-A]]]"
        },
        {
          "kind": "p",
          "text": "每一步都是把普通代数应用于一个几何事实。没有什么需要死记硬背：公式中的 90 度，是直角拿走它的一半之后，角和中留给两个锐角的份额。"
        },
        {
          "kind": "p",
          "text": "同样的关系反过来也成立。如果已知的是角 [[B]]，解出 [[A]] 得到："
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "这个计算器的输入框接受角 [[A]] 并返回角 [[B]]，因此它使用的是第一种形式。这两个公式不是不同的规则，而是同一个余角关系解不同的未知数。"
        },
        {
          "kind": "h3",
          "text": "为什么是 90 度，而不是 180 度"
        },
        {
          "kind": "p",
          "text": "常见错误是把已知角从 180 度中减去。这个总数涵盖三角形的全部三个角，单独使用它会忘记直角已经被计入。当 [[A=35^\\circ]] 时，错误的计算得到 [[180^\\circ-35^\\circ=145^\\circ]]，这不可能是任何直角三角形的锐角。正确的计算 [[90^\\circ-35^\\circ=55^\\circ]] 尊重了直角，并且可以立即验证：[[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]。"
        }
      ],
      "imgAlt": "两个对比面板：180 度的三角形内角和与 90 度的锐角对",
      "figcaption": "A 部分展示完整的三角形内角和；B 部分单独标出互为余角的两个锐角。"
    },
    "missing-howto": {
      "h2": "如何使用直角三角形缺失角计算器",
      "blocks": [
        {
          "kind": "p",
          "text": "下面的操作步骤与本页面上的实际界面一致。"
        }
      ],
      "steps": [
        "<strong>确认是直角三角形。</strong>在做任何事之前，先确认图形确实有一个 90 度的角；这个公式只适用于直角三角形。",
        "<strong>找出你已经知道的锐角。</strong>这就是角 [[A]]，你将要输入计算器的值。",
        "<strong>确认已知角有效。</strong>它必须大于 [[0^\\circ]] 且小于 [[90^\\circ]]。超出这个范围的值不可能是直角三角形的锐角。",
        "<strong>以度为单位输入已知角 [[A]]。</strong>输入框接受 68.5 这样的小数，所以请保留测量的精度。",
        "<strong>点击“计算角 B”。</strong>工具会把 [[B=90^\\circ-A]] 应用到你的输入上。",
        "<strong>读取算出的余角。</strong>输出结果就是以度为单位的角 [[B]]。",
        "<strong>把两个锐角相加来验证结果。</strong>它们的和必须等于 90 度；如果不等于，请重新检查输入。",
        "<strong>想开始新的计算时使用“重置”。</strong>这会清空输入框，以便输入新的角度。"
      ],
      "closingParagraphs": [
        "注意计算器从不索要什么：没有对边长度，没有邻边长度，没有斜边，也没有正弦、余弦或正切值。一个已知的锐角就是全部输入，因为角和定理完成了其余工作。这个工具也不接受弧度，也不接受直接输入角 [[B]]；它的输入框专门用于以度为单位的角 [[A]]。"
      ]
    },
    "missing-examples": {
      "h2": "求缺失角的分步示例",
      "blocks": [
        {
          "kind": "p",
          "text": "下面四个示例先练好核心技能，再进入实际应用。每个都遵循同一模式：写出公式，代入，相减。"
        },
        {
          "kind": "h3",
          "text": "示例 1：已知角为 35 度"
        },
        {
          "kind": "p",
          "text": "已知 [[A=35^\\circ]]，求角 [[B]]。"
        },
        {
          "kind": "p",
          "text": "第 1 步：写出公式。[[B=90^\\circ-A]]"
        },
        {
          "kind": "p",
          "text": "第 2 步：代入已知角。[[B=90^\\circ-35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "第 3 步：相减。[[B=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "验证：[[35^\\circ+55^\\circ=90^\\circ]]。答案有效，因为两个锐角之和恰好是 90 度，且每个都严格介于 0 度和 90 度之间。"
        },
        {
          "kind": "h3",
          "text": "示例 2：已知角为 20 度"
        },
        {
          "kind": "p",
          "text": "已知 [[A=20^\\circ]]："
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-20^\\circ=70^\\circ]]"
        },
        {
          "kind": "p",
          "text": "较小的锐角会产生较大的余角。因为这对角的和恒为 90 度，从一个角拿走的每一度都会加到另一个角上。这里 20 度的角为它的搭档留下了充裕的 70 度。"
        },
        {
          "kind": "h3",
          "text": "示例 3：等腰直角三角形"
        },
        {
          "kind": "p",
          "text": "已知 [[A=45^\\circ]]："
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "两个锐角都等于 45 度。这就是等腰直角三角形，是唯一两个锐角相等的直角三角形。它的两条直角边长度也相等，这就是为什么 45-45-90 三角形在制图和施工放线中如此常见。"
        },
        {
          "kind": "h3",
          "text": "示例 4：已知角为 68.5 度"
        },
        {
          "kind": "p",
          "text": "已知 [[A=68.5^\\circ]]："
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68.5^\\circ=21.5^\\circ]]"
        },
        {
          "kind": "p",
          "text": "相对较大的锐角对应相对较小的余角。小数输入和整数输入完全一样：仔细相减，把 .5 对齐，90 减 68.5 得 21.5。验证依然成立：[[68.5^\\circ+21.5^\\circ=90^\\circ]]。"
        }
      ]
    },
    "missing-applications": {
      "h2": "缺失角的实际应用",
      "blocks": [
        {
          "kind": "p",
          "text": "示例开始前有一点需要说明。缺失角公式直接适用的前提是，两个角属于同一个直角三角形。在实际场景中，水平面和竖直面常常充当互相垂直的参考线，而梯子、椽子这样的斜向构件则形成斜边。下面的示例在用到这一假设时都会明确说明。"
        },
        {
          "kind": "h3",
          "text": "示例 5：求屋顶椽子与竖直方向的夹角"
        },
        {
          "kind": "p",
          "text": "一根屋顶椽子与水平方向成 [[35^\\circ]] 夹角。求同一根椽子与一条竖直参考线之间的夹角。"
        },
        {
          "kind": "p",
          "text": "已知从水平方向测得 [[A=35^\\circ]]。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-35^\\circ=55^\\circ]]"
        },
        {
          "kind": "p",
          "text": "水平参考线与竖直参考线互相垂直，所以这两个角互为余角。55 度的结果是椽子相对于竖直方向的夹角，而不是完整的屋顶坡度或结构计算。"
        },
        {
          "kind": "h3",
          "text": "示例 6：求梯子与墙面的夹角"
        },
        {
          "kind": "p",
          "text": "一架梯子靠在竖直的墙上，与水平地面成 [[68^\\circ]] 夹角。求梯子与墙面之间的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-68^\\circ=22^\\circ]]"
        },
        {
          "kind": "p",
          "text": "在这个理想化模型中，地面与墙面形成直角，梯子是斜边。22 度的角描述的是梯子相对于墙面的方向。仅凭这个计算无法判断梯子是否摆放安全。"
        },
        {
          "kind": "h3",
          "text": "示例 7：理解坡道与竖直方向的夹角"
        },
        {
          "kind": "p",
          "text": "一条直坡道与水平方向成 [[8^\\circ]] 夹角。求坡道方向与一条竖直参考线之间的余角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-8^\\circ=82^\\circ]]"
        },
        {
          "kind": "p",
          "text": "坡道与竖直方向的夹角，是它与水平方向夹角的余角。8 度的缓坡对应着与竖直方向 82 度的陡角。仅凭这个角无法判断是否符合无障碍标准或规范要求。"
        },
        {
          "kind": "h3",
          "text": "示例 8：求楼梯斜梁的余角"
        },
        {
          "kind": "p",
          "text": "一根楼梯斜梁与地板成 [[32^\\circ]] 夹角。计算它相对于一条竖直参考线的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-32^\\circ=58^\\circ]]"
        },
        {
          "kind": "p",
          "text": "地板、竖直参考线和斜向的斜梁构成直角三角形。58 度的结果描述的是斜梁相对于竖直方向的朝向。它不能验证楼梯尺寸或建筑规范合规性。"
        },
        {
          "kind": "h3",
          "text": "示例 9：求斜撑与竖直支撑的夹角"
        },
        {
          "kind": "p",
          "text": "一根斜撑与水平梁成 [[40^\\circ]] 夹角。求斜撑与一条垂直的竖向支撑之间的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-40^\\circ=50^\\circ]]"
        },
        {
          "kind": "p",
          "text": "要用余角规则，两条参考方向必须互相垂直。50 度的角纯粹是几何结果，不能决定斜撑的结构强度。"
        },
        {
          "kind": "h3",
          "text": "示例 10：求拉线与竖直电杆的夹角"
        },
        {
          "kind": "p",
          "text": "一根拉线与水平地面成 [[30^\\circ]] 夹角。求拉线与一根竖直电杆之间的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-30^\\circ=60^\\circ]]"
        },
        {
          "kind": "p",
          "text": "水平的地面与竖直的电杆确定了直角，拉线是斜边。60 度的结果把同一根拉线的方向换成了相对于竖直参考的表述。它不能确定拉线的张力或锚固安全。"
        },
        {
          "kind": "h3",
          "text": "示例 11：把仰角换算成它的余角"
        },
        {
          "kind": "p",
          "text": "测量图上记录一条视线相对于水平方向的仰角为 [[24^\\circ]]。计算它相对于竖直方向的余角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-24^\\circ=66^\\circ]]"
        },
        {
          "kind": "p",
          "text": "从水平方向测的角和从竖直方向测的角，是从互相垂直的两个视角描述同一条视线。本例假设视线是直线，且水平与竖直参考互相垂直。"
        },
        {
          "kind": "h3",
          "text": "示例 12：求屋顶坡度与竖直参考的夹角"
        },
        {
          "kind": "p",
          "text": "测得屋顶坡度相对于水平方向为 [[27^\\circ]]。求它与竖直方向的余角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-27^\\circ=63^\\circ]]"
        },
        {
          "kind": "p",
          "text": "两种测量从不同的垂直参考方向描述同一个坡度。单独任何一种测量都不是结构评估。"
        },
        {
          "kind": "h3",
          "text": "示例 13：正方形制图布局中的对角线"
        },
        {
          "kind": "p",
          "text": "正方形制图布局中的一条对角线与一条边成 [[45^\\circ]] 夹角。求它与相邻的垂直边之间的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-45^\\circ=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "对角线平分正方形的直角，所以得到的两个角都是 45 度。这个关系有助于基本的绘图和放线检查：如果测得的对角线没有把直角均匀平分，说明布局不是正方形。"
        },
        {
          "kind": "h3",
          "text": "示例 14：求机器面板的余角"
        },
        {
          "kind": "p",
          "text": "一块面板向水平方向倾斜了 [[15^\\circ]]。计算面板朝向与竖直参考方向之间的夹角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-15^\\circ=75^\\circ]]"
        },
        {
          "kind": "p",
          "text": "水平参考与竖直参考互相垂直，所以面板倾角和它的余角描述的是同一种朝向。结果只描述朝向，不能说明机器安全或性能。"
        },
        {
          "kind": "h3",
          "text": "示例 15：换算观察树木的仰角"
        },
        {
          "kind": "p",
          "text": "一个人看向树顶，相对于水平方向的仰角为 [[38^\\circ]]。求视线与一条竖直参考方向之间的余角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-38^\\circ=52^\\circ]]"
        },
        {
          "kind": "p",
          "text": "这个计算改变的是参考方向，而不是视线本身。52 度的角只是同一道目光相对于竖直方向的度量。它不能算出树的高度。"
        },
        {
          "kind": "h3",
          "text": "示例 16：求扶手与竖直支撑的夹角"
        },
        {
          "kind": "p",
          "text": "一根斜向扶手与水平休息平台成 [[55^\\circ]] 夹角。求它相对于一条竖直支撑线的余角。"
        },
        {
          "kind": "p",
          "text": "[[B=90^\\circ-55^\\circ=35^\\circ]]"
        },
        {
          "kind": "p",
          "text": "余角从另一个参考方向描述同一个斜向朝向。相对于水平方向 55 度的陡角，换成相对于竖直方向就是 35 度的缓角。仅凭角度无法验证无障碍或施工要求。"
        },
        {
          "kind": "h3",
          "text": "实际应用对比"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">情形",
          "已知角",
          "参考方向",
          "缺失角",
          "计算",
          "含义"
        ],
        "rows": [
          [
            "屋顶椽子",
            "35&deg;",
            "水平方向",
            "55&deg;",
            "90 - 35",
            "椽子与竖直方向的夹角"
          ],
          [
            "梯子",
            "68&deg;",
            "地面",
            "22&deg;",
            "90 - 68",
            "梯子与墙面的夹角"
          ],
          [
            "坡道",
            "8&deg;",
            "水平方向",
            "82&deg;",
            "90 - 8",
            "坡道方向与竖直方向的夹角"
          ],
          [
            "楼梯斜梁",
            "32&deg;",
            "地板",
            "58&deg;",
            "90 - 32",
            "斜梁与竖直方向的夹角"
          ],
          [
            "斜撑",
            "40&deg;",
            "水平梁",
            "50&deg;",
            "90 - 40",
            "斜撑与竖向支撑的夹角"
          ],
          [
            "拉线",
            "30&deg;",
            "地面",
            "60&deg;",
            "90 - 30",
            "拉线与电杆的夹角"
          ],
          [
            "测量视线",
            "24&deg;",
            "水平方向",
            "66&deg;",
            "90 - 24",
            "视线与竖直方向的夹角"
          ],
          [
            "屋顶坡度",
            "27&deg;",
            "水平方向",
            "63&deg;",
            "90 - 27",
            "坡度与竖直方向的夹角"
          ],
          [
            "制图对角线",
            "45&deg;",
            "一条边",
            "45&deg;",
            "90 - 45",
            "对角线与相邻边的夹角"
          ],
          [
            "机器面板",
            "15&deg;",
            "水平方向",
            "75&deg;",
            "90 - 15",
            "面板朝向与竖直方向的夹角"
          ],
          [
            "树木观测",
            "38&deg;",
            "水平方向",
            "52&deg;",
            "90 - 38",
            "视线与竖直方向的夹角"
          ],
          [
            "扶手",
            "55&deg;",
            "休息平台",
            "35&deg;",
            "90 - 55",
            "扶手与竖直支撑的夹角"
          ]
        ]
      }
    },
    "missing-relationship": {
      "h2": "理解余角之间的关系",
      "blocks": [
        {
          "kind": "p",
          "text": "这个规律完全可以预测。角 [[A]] 增大，角 [[B]] 就精确地减小同样的幅度，因为它们的总和被锁定在 90 度。[[A]] 减小，[[B]] 就会增大来填补空缺。在 [[A=45^\\circ]] 时两者在中间相遇，而在一个真正有三个不同顶点的直角三角形中，锐角不可能达到 [[0^\\circ]] 或 [[90^\\circ]]。"
        },
        {
          "kind": "p",
          "text": "这张表以 45 度为对称中心：数对 (10, 80)、(20, 70) 和 (30, 60) 互为镜像，因为交换已知角和缺失角，只是从另一侧读同一个余角关系。下面的四个面板把这种此消彼长画了出来。"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">已知角 A",
          "公式",
          "缺失角 B"
        ],
        "rows": [
          [
            "10&deg;",
            "90 - 10",
            "80&deg;"
          ],
          [
            "20&deg;",
            "90 - 20",
            "70&deg;"
          ],
          [
            "30&deg;",
            "90 - 30",
            "60&deg;"
          ],
          [
            "45&deg;",
            "90 - 45",
            "45&deg;"
          ],
          [
            "60&deg;",
            "90 - 60",
            "30&deg;"
          ],
          [
            "75&deg;",
            "90 - 75",
            "15&deg;"
          ],
          [
            "80&deg;",
            "90 - 80",
            "10&deg;"
          ]
        ]
      },
      "imgAlt": "四个三角形展示余角组合：20-70、30-60、45-45、70-20 度",
      "figcaption": "角 A 增大时，角 B 同等减小；它们的和恒为 90 度。"
    },
    "missing-reverse": {
      "h2": "如果已知的是角 B 呢？",
      "blocks": [
        {
          "kind": "p",
          "text": "同样的余角规则反过来也成立。如果已知的是角 [[B]]，把这个关系解出 [[A]]："
        },
        {
          "kind": "p",
          "text": "[[[A=90^\\circ-B]]]"
        },
        {
          "kind": "p",
          "text": "不需要新公式，它是同一个方程，只是交换了角色。"
        },
        {
          "kind": "h3",
          "text": "例题"
        },
        {
          "kind": "p",
          "text": "已知 [[B=62^\\circ]]："
        },
        {
          "kind": "p",
          "text": "[[A=90^\\circ-62^\\circ=28^\\circ]]"
        },
        {
          "kind": "p",
          "text": "下面三个简短的反向示例遵循同样的步骤："
        }
      ],
      "listItems": [
        "[[B=15^\\circ]]，所以 [[A=90^\\circ-15^\\circ=75^\\circ]]。",
        "[[B=42^\\circ]]，所以 [[A=90^\\circ-42^\\circ=48^\\circ]]。",
        "[[B=70^\\circ]]，所以 [[A=90^\\circ-70^\\circ=20^\\circ]]。"
      ],
      "closingParagraphs": [
        "实际提示：这个计算器的输入框接受角 [[A]] 并返回角 [[B]]。只知道角 [[B]] 的读者应当手工使用反向公式，除非确认界面支持直接输入 [[B]]。"
      ]
    },
    "missing-vs": {
      "h2": "余角与补角",
      "blocks": [
        {
          "kind": "p",
          "text": "这两个词听起来很像，都描述角的组合，但回答的是不同的问题。"
        },
        {
          "kind": "h3",
          "text": "余角"
        },
        {
          "kind": "p",
          "text": "两个角的和为 [[90^\\circ]] 时互为余角。直角三角形的两个锐角就是教科书般的例子：因为直角已经占去了三角形总和中的另外 90 度，它们必须是余角。"
        },
        {
          "kind": "h3",
          "text": "补角"
        },
        {
          "kind": "p",
          "text": "两个角的和为 [[180^\\circ]] 时互为补角。例如，一条直线可以分成两个补角。补角对绝不能和直角三角形的两个锐角混淆，后者的和是 90 度，不是 180 度。"
        },
        {
          "kind": "p",
          "text": "三角形内角和是 180 度，但两个锐角之和是 90 度。把这两个总数分清楚，是避开本页最常见错误的关键。"
        }
      ],
      "table": {
        "headers": [
          "<tr class=\"border-b border-outline-variant/30\"> <th class=\"py-3 pr-4 font-semibold text-on-surface\">关系",
          "总和",
          "示例"
        ],
        "rows": [
          [
            "余角",
            "90&deg;",
            "35 + 55"
          ],
          [
            "补角",
            "180&deg;",
            "110 + 70"
          ],
          [
            "直角",
            "90&deg;",
            "直角三角形中的固定角"
          ]
        ]
      },
      "imgAlt": "四个面板展示梯子、椽子、斜撑和正方形对角线中的余角",
      "figcaption": "实际场景中的余角组合：每个已知角都唯一确定它的搭档。"
    },
    "missing-mistakes": {
      "h2": "求缺失角时的常见错误",
      "blocks": [
        {
          "kind": "h3",
          "text": "错误与正确"
        },
        {
          "kind": "p",
          "text": "已知 [[A=35^\\circ]]："
        },
        {
          "kind": "p",
          "text": "错误：[[180^\\circ-35^\\circ=145^\\circ]]。这不是缺失的锐角，因为没有把直角计入；145 度不可能和一个 90 度的角一起待在直角三角形里。"
        },
        {
          "kind": "p",
          "text": "正确：[[90^\\circ-35^\\circ=55^\\circ]]。"
        },
        {
          "kind": "p",
          "text": "验证：[[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]。完整的角和确认了答案。"
        }
      ],
      "listItems": [
        "<strong>把已知角从 180 度而不是 90 度中减去。</strong>180 度的总数包含了已经固定的直角。错在哪里：当 [[A=35^\\circ]] 时，错误的计算得到 145 度，一个不可能的锐角。改正：从 90 中减，得到 [[55^\\circ]]。",
        "<strong>忘记已经有一个 90 度的角。</strong>直角最容易被忽略，因为它不需要计算。错在哪里：把三角形当成三个角都未知来处理。改正：动手之前先记住，直角已经占去了 180 度总数的一半。",
        "<strong>在计算器里输入 90 度。</strong>工具要求输入严格介于 0 度和 90 度之间的锐角。错在哪里：输入 90 度后，第二个锐角就没有容身之地了。改正：只输入已知的锐角。",
        "<strong>输入大于 90 度的角。</strong>根据定义，锐角不可能超过 90 度。错在哪里：相减得到负数，在这里没有几何意义。改正：检查输入是否小于 90 度。",
        "<strong>输入 0 度。</strong>零角会把三角形压成一条线段。错在哪里：结果声称一个没有面积的图形有 90 度的余角。改正：只使用正的锐角。",
        "<strong>把余角和补角混淆。</strong>余角对的和是 90 度，补角对的和是 180 度。错在哪里：从 180 中减会犯第 1 条的错误。改正：把词和总数配对，余角对应 90。",
        "<strong>以为两个锐角必须相等。</strong>相等只发生在各为 45 度时。错在哪里：在 20-70 三角形里期待对称。改正：让减法来决定，大多数角对都不相等。",
        "<strong>把角 A 和角 B 的标号弄混。</strong>计算器输入 [[A]]，返回 [[B]]。错在哪里：把已知的余角当成输入来输入。改正：输入之前先把已知角标为 A。",
        "<strong>以为这个计算需要边长。</strong>边长属于三角函数，不属于余角。错在哪里：在一个只需要减法的问题上卡住。改正：如果已知一个锐角，从 90 中减去它就结束了。",
        "<strong>明明简单减法就够用，却去用反正弦、反余弦或反正切。</strong>反函数回答的是更难的问题。错在哪里：多余的工作和更多的模式错误机会。改正：已知角时，正弦求角计算器及其同类是错误的工具，减法精确又直接。",
        "<strong>以为测得的实际角度自动构成直角三角形，而不检查参考方向。</strong>真实的角很少完美。错在哪里：在并不存在 90 度角的地方套用余角规则。改正：相减之前先确认参考方向互相垂直。",
        "<strong>相减之前不必要地对输入测量值取整。</strong>过早取整会丢掉输入本来有的精度。错在哪里：68.5 取整成 69 后得到 21 而不是 21.5。改正：用完整的测量值相减，再按输入的精度对结果取整。"
      ]
    },
    "missing-verify": {
      "h2": "如何检查缺失角是否有效",
      "blocks": [
        {
          "kind": "p",
          "text": "有效的输入范围是："
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt A \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "算出的角也必须满足同样的范围："
        },
        {
          "kind": "p",
          "text": "[[[0^\\circ \\lt B \\lt 90^\\circ]]]"
        },
        {
          "kind": "p",
          "text": "输入 0 度或 90 度只会得到退化的极限情形，而不是有三个不同顶点和正边长的普通直角三角形。计算器强制执行严格不等式，正是出于这个原因。"
        },
        {
          "kind": "h3",
          "text": "方法 1：把两个锐角相加"
        },
        {
          "kind": "p",
          "text": "验证 [[A+B=90^\\circ]]。例如：[[35^\\circ+55^\\circ=90^\\circ]]。这是最快的检查，能立刻发现 180 度的错误。"
        },
        {
          "kind": "h3",
          "text": "方法 2：检查完整的三角形"
        },
        {
          "kind": "p",
          "text": "验证 [[A+B+90^\\circ=180^\\circ]]。例如：[[35^\\circ+55^\\circ+90^\\circ=180^\\circ]]。这是对照普适的三角形内角和来确认答案。"
        },
        {
          "kind": "h3",
          "text": "方法 3：检查反向计算"
        },
        {
          "kind": "p",
          "text": "如果 [[B=90^\\circ-A]]，那么 [[A=90^\\circ-B]] 必须能恢复原始输入。当 [[A=35^\\circ]] 得到 [[B=55^\\circ]] 时，反向检查就是 [[90^\\circ-55^\\circ=35^\\circ]]。这种一致性检查完全不需要测量边长。"
        },
        {
          "kind": "p",
          "text": "一个提醒：如果输入角来自实际测量，它的误差会带入结果。大致测得的 35 度只能得到大致已知的 55 度，请按测量精度来报告答案。如果检查涉及边长，可以用勾股定理计算器独立确认三角形的几何关系。"
        }
      ]
    },
    "missing-choose": {
      "h2": "选择合适的直角三角形计算器",
      "blocks": [
        {
          "kind": "p",
          "text": "下面每个工具回答不同的问题。请根据你实际知道的东西来选工具："
        }
      ],
      "listItems": [
        "<strong>直角三角形缺失角计算器</strong>（本页）：已知一个锐角时求它的余角。输入是角而不是边时都用它。",
        "<strong>直角三角形正弦求角计算器</strong>：根据对边和斜边求锐角。测得这两个长度时用它。",
        "<strong>直角三角形余弦求角计算器</strong>：根据邻边和斜边求锐角。",
        "<strong>直角三角形正切求角计算器</strong>：根据对边和邻边（两条直角边）求锐角。",
        "<strong>直角三角形正弦求边计算器</strong>：已知一个角和一条边时求缺失的边长。",
        "<strong>直角三角形余弦求边计算器</strong>：根据一个角以及斜边或邻边求缺失的边长。",
        "<strong>直角三角形正切求边计算器</strong>：已知一个角和另一条直角边时求缺失的直角边。"
      ],
      "closingParagraphs": [
        "决策规则很简单。已知一个锐角：用本页的缺失角计算器。已知两条合适的边长：用对应的反三角函数计算器。需要求未知边：用求边计算器。而在三角函数计算之后需要第二个角：把已知角从 90 度中减去，这正是本页自动完成的事。"
      ]
    },
    "missing-conclusion": {
      "h2": "自信地求出任何缺失角",
      "blocks": [
        {
          "kind": "p",
          "text": "缺失角计算是直角三角形几何中最简单的运算：用 90 度减去已知的锐角。这次减法背后是三角形内角和定理，它把每个三角形总数的一半留给直角，把另一半留给余角对。无论已知角来自屋顶椽子、梯子、楼梯斜梁还是制图布局，方法永远不变：确认直角，从 90 中减去，再验证两个锐角之和为 90 度。把本页加入书签，在角已经已知、只缺它的搭档时随时使用。"
        }
      ]
    }
  },
  "tocHeading": "本指南内容",
  "tocItems": {
    "missing-angles": "直角三角形中的角有哪些？",
    "missing-applications": "实际应用",
    "missing-choose": "选择合适的计算器",
    "missing-examples": "分步示例",
    "missing-faq": "常见问题",
    "missing-formula": "求缺失角的公式",
    "missing-howto": "如何使用计算器",
    "missing-intro": "如何在直角三角形中求缺失角",
    "missing-mistakes": "常见错误",
    "missing-related": "相关计算器",
    "missing-relationship": "余角如何变化",
    "missing-reverse": "如果已知的是角 B 呢？",
    "missing-verify": "验证答案",
    "missing-vs": "余角与补角"
  },
  "faqs": [
    {
      "question": "如何在直角三角形中求缺失角？",
      "answer": "用 90 度减去已知的锐角。公式是 B = 90 - A，其中 A 是已知角，B 是缺失角。例如，若 A 为 35 度，则 B = 90 - 35 = 55 度。不需要边长，也不需要三角函数。"
    },
    {
      "question": "为什么两个锐角之和是 90 度？",
      "answer": "每个三角形的内角总和都是 180 度。直角三角形把其中 90 度留给直角，剩下恰好 90 度由两个锐角平分。这就是为什么在直角三角形中 A + B 恒等于 90 度。"
    },
    {
      "question": "缺失角的公式是什么？",
      "answer": "公式是 B = 90 - A。从三角形内角和 A + B + 90 = 180 出发，两边同时减去 90 得到 A + B = 90，再两边同时减去 A。反向形式 A = 90 - B 也一样，当已知的是 B 时用它。"
    },
    {
      "question": "什么是余角？",
      "answer": "两个角的度数之和为 90 度时互为余角。30 和 60、35 和 55、45 和 45 都是余角组合。根据定义，每个直角三角形的两个锐角都互为余角，这正是缺失角公式所表达的内容。"
    },
    {
      "question": "不知道边长也能求缺失角吗？",
      "answer": "能。已知一个锐角时，边长与这个计算无关。余角关系只取决于角和，所以从 90 度中减去就能得到精确答案。只有在还没有已知角时，边长才有意义。"
    },
    {
      "question": "余角和补角有什么区别？",
      "answer": "余角之和为 90 度，补角之和为 180 度。直角三角形的两个锐角是余角。常见错误是把已知角从 180 而不是 90 中减去，这忘记了直角已经占去了三角形总数的一半。"
    },
    {
      "question": "两个锐角可以相等吗？",
      "answer": "可以，当它们各为 45 度时。此时 90 - 45 = 45，三角形是两条直角边相等的等腰直角三角形。只有这一种情形下两个锐角相等，其他直角三角形的两个锐角都不相等。"
    },
    {
      "question": "已知角是 35 度时会怎样？",
      "answer": "缺失角为 90 - 35 = 55 度。有两种验证方法：35 + 55 = 90 确认余角对，35 + 55 + 90 = 180 确认完整的三角形内角和。两种检查应当总是吻合。"
    },
    {
      "question": "已知角大于 45 度时会怎样？",
      "answer": "缺失角会小于 45 度，因为两者之和仍是 90。例如，若 A 为 68 度，则 B = 90 - 68 = 22 度。已知角越接近 90 度，它的余角就越接近 0 度。"
    },
    {
      "question": "缺失的锐角可以恰好是 0 度或 90 度吗？",
      "answer": "在普通的直角三角形中不行。输入 0 度或 90 度描述的是没有实际三角形面积的退化极限情形，而不是有三个不同顶点的三角形。计算器要求已知角严格介于 0 度和 90 度之间，结果也总是落在同一范围。"
    },
    {
      "question": "已知角 B 时如何求角 A？",
      "answer": "用反向公式 A = 90 - B。它是同一个余角关系解另一个变量。例如，若 B 为 62 度，则 A = 90 - 62 = 28 度。注意这个计算器的输入是角 A，所以只知道 B 时请手工使用反向公式。"
    },
    {
      "question": "什么时候该用正弦、余弦或正切计算器？",
      "answer": "当还没有已知角、但已知两条边长时，用反三角函数计算器。正弦求角计算器需要对边和斜边，余弦求角计算器需要邻边和斜边，正切求角计算器需要两条直角边。一旦已知任何一个锐角，缺失角计算器就能完成剩下的工作。"
    }
  ],
  "relatedHeading": "探索相关的三角形计算器",
  "relatedItems": [
    "直角三角形正弦求角计算器",
    "直角三角形余弦求角计算器",
    "直角三角形正切求角计算器",
    "直角三角形正弦求边计算器",
    "直角三角形余弦求边计算器",
    "直角三角形正切求边计算器"
  ]
  }
};
