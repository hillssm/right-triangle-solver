// areaFromLegAngleGuideTranslations.batch5.ts: Right Triangle Area From Leg and
// Angle Guide (Page 21 of 45) translations for Indonesian (id), Arabic (ar),
// and Bulgarian (bg).
export const AREA_FROM_LEG_ANGLE_TRANSLATIONS_BATCH5 = {
  "id": {
    "faqs": [
      {
        "question": "Apa rumus luas menggunakan satu kaki dan sebuah sudut?",
        "answer": "K = bc sin(A) / 2, dengan b kaki yang bersebelahan dengan sudut A, c hipotenusa, dan A sudut lancip di antara keduanya. Contohnya, b = 4, c = 5, dan A = 36.87° menghasilkan K = (4 × 5 × 0.6) / 2 = 6 satuan luas. Sudut harus dimasukkan dalam derajat, dan kedua sisi harus memakai satuan panjang yang sama."
      },
      {
        "question": "Mengapa rumus ini menggunakan sinus?",
        "answer": "Sinus merekonstruksi kaki tegak lurus yang hilang dari hipotenusa: karena sin(A) = a/c, mengalikan menghasilkan a = c sin(A). Aturan luas standar membutuhkan kedua kaki, K = ab/2, sehingga mensubstitusikan ungkapan sinus untuk a menghasilkan K = bc sin(A)/2. Sinus adalah jembatan antara hipotenusa yang terukur dan tinggi yang tidak terukur."
      },
      {
        "question": "Sisi mana yang bersebelahan dengan sudut A?",
        "answer": "Kaki b bersebelahan dengan sudut A: ia adalah salah satu dari dua sisi yang membentuk sudut itu, sisi lainnya adalah hipotenusa c. Kaki a berhadapan dengan sudut A, terletak di seberang segitiga darinya. Jika Anda mengganti acuan ke sudut B, label-labelnya bertukar: b menjadi sisi berhadapan dan a menjadi sisi bersebelahan."
      },
      {
        "question": "Bisakah saya menghitung luas tanpa mengetahui kaki yang hilang?",
        "answer": "Ya, itulah seluruh tujuan kalkulator ini. Sinus sudut A mengkodekan rasio kaki yang hilang terhadap hipotenusa, sehingga c sin(A) merekonstruksi kaki a tanpa mengukurnya. Masukkan b, c, dan A, dan rumus menangani sisanya. Anda tidak pernah memerlukan sisi ketiga sebagai masukan terpisah."
      },
      {
        "question": "Apa perbedaan antara sudut A dan sudut B?",
        "answer": "Keduanya adalah sudut lancip segitiga siku-siku, dan A + B = 90°. Sudut A terletak di antara kaki b dan hipotenusa c; sudut B terletak di antara kaki a dan hipotenusa c. Rumus K = bc sin(A)/2 secara khusus memerlukan sudut A. Menggunakan sudut B dengan sisi b dan c menghasilkan jawaban yang salah; sudut B berpasangan dengan sisi a dan c."
      },
      {
        "question": "Apakah kalkulator menggunakan derajat atau radian?",
        "answer": "Derajat. Memasukkan nilai radian menghasilkan sinus yang sama sekali berbeda dan luas yang salah, karena kalkulator menafsirkan angka itu sebagai derajat. Ubah radian ke derajat terlebih dahulu dengan derajat = radian × 180/π; misalnya, π/6 radian sama dengan 30°. Selalu konfirmasi satuan sudut sebelum menghitung, karena kolom masukan tidak memberi peringatan ketika satuannya salah."
      },
      {
        "question": "Bisakah saya menggunakan sudut sembarang dengan kaki dan hipotenusa yang diberikan?",
        "answer": "Tidak. Ketiga masukan harus memenuhi b = c cos(A), sehingga sudut sudah ditentukan begitu sisi-sisinya dipilih. Untuk b = 4 dan c = 5, sudut A harus sekitar 36.87°. Memasukkan sudut yang berbeda menggambarkan segitiga yang berbeda, dan hasilnya tidak akan sesuai dengan segitiga siku-siku yang dimaksud."
      },
      {
        "question": "Bagaimana cara memeriksa apakah pengukuran saya membentuk segitiga siku-siku yang valid?",
        "answer": "Verifikasi tiga kondisi: hipotenusa melebihi kaki (c > b > 0), sudut benar-benar di antara 0° dan 90°, dan b = c cos(A) berlaku. Untuk keyakinan ekstra, periksa a = c sin(A) dan teorema Pythagoras a² + b² = c². Jika ada pemeriksaan yang gagal, setidaknya satu pengukuran atau label salah."
      },
      {
        "question": "Bisakah saya menghitung luas jika saya mengetahui kedua kakinya?",
        "answer": "Ya, dan rumus yang lebih pendek K = ab/2 berlaku langsung, tanpa perlu sudut atau sinus. Untuk kaki 3 dan 4, K = 6. Kalkulator berbasis sinus dirancang untuk kasus ketika satu kaki hilang; ketika kedua kaki diketahui, rumus kaki-kaki lebih sederhana dan memberikan hasil yang identik."
      },
      {
        "question": "Apa yang terjadi jika saya memasukkan sudut yang salah?",
        "answer": "Kalkulator mengalikan apa pun yang diterimanya, sehingga sudut yang salah menghasilkan luas yang salah tanpa peringatan. Memasukkan sudut B = 53.13° bukan A = 36.87° dengan b = 4 dan c = 5 menghasilkan 8 bukan 6. Selalu pastikan sudut yang dimasukkan adalah sudut di antara kaki b dan hipotenusa."
      },
      {
        "question": "Berapa luas maksimum yang mungkin untuk hipotenusa tetap?",
        "answer": "K = c²/4, tercapai ketika sudut A = 45° dan segitiga sama kaki dengan kaki-kaki c/√2. Untuk hipotenusa 10, batas atasnya adalah 25 satuan luas. Tidak ada segitiga siku-siku dengan hipotenusa itu yang dapat menutupi luas lebih besar. Jika hasil Anda melebihi c²/4, masukannya tidak konsisten."
      },
      {
        "question": "Apa perbedaan antara rumus berbasis sinus dan rumus alas-tinggi standar?",
        "answer": "Tidak ada perbedaan matematis: mensubstitusikan sin(A) = a/c ke dalam K = bc sin(A)/2 menghasilkan K = ab/2, aturan alas-tinggi standar. Versi sinus hanyalah rumus yang sama yang ditulis ulang untuk nilai-nilai yang diketahui berbeda. Gunakan bentuk sinus ketika hipotenusa dan sudut diketahui; gunakan ab/2 ketika kedua kaki diketahui."
      }
    ],
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedItems": [
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku dari Kaki-Kaki",
      "Kalkulator Luas Segitiga Siku-Siku dari Sudut",
      "Kalkulator Sisi Segitiga Siku-Siku dari Sudut",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Rasio Trigonometri Segitiga Siku-Siku"
    ],
    "relatedIntro": "Pengukuran yang berbeda memerlukan kalkulator yang berbeda.",
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Menghitung Luas Segitiga Siku-Siku Menggunakan Kaki dan Sudut",
      "sec-anatomy": "Memahami Sisi dan Sudut Segitiga Siku-Siku",
      "sec-sine": "Memahami Fungsi Sinus dalam Perhitungan Segitiga Siku-Siku",
      "sec-formula": "Mengapa Rumus Luas Segitiga Siku-Siku Menggunakan Sinus?",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Kaki dan Sudut",
      "sec-consistency": "Cara Memeriksa Apakah Kaki, Hipotenusa, dan Sudut Anda Membentuk Segitiga Siku-Siku yang Valid",
      "sec-examples": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku Menggunakan Kaki dan Sudut",
      "sec-practical": "Penerapan Nyata Luas Segitiga Siku-Siku dari Kaki dan Sudut",
      "sec-compare": "Mengapa Rumus Berbasis Sinus Menghasilkan Luas yang Sama dengan Rumus Kaki-Kaki?",
      "sec-angle-effect": "Bagaimana Sudut Apit Memengaruhi Luas Segitiga Siku-Siku?",
      "sec-alternative": "Bisakah Menghitung Luas Segitiga Siku-Siku Menggunakan Satu Kaki dan Sudutnya?",
      "sec-units": "Memahami Satuan Sudut dan Pengukuran dalam Perhitungan Luas",
      "sec-mistakes": "Kesalahan Umum saat Menghitung Luas Segitiga Siku-Siku dari Kaki dan Sudut",
      "sec-verify": "Cara Memeriksa Apakah Luas Segitiga Siku-Siku Anda Benar",
      "sec-applications": "Luas Segitiga Siku-Siku dari Kaki dan Sudut dalam Praktik",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Pertanyaan yang Sering Diajukan",
      "sec-conclusion": "Tiga Masukan Menentukan Seluruh Luas"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Luas Segitiga Siku-Siku Menggunakan Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Ambil [[b=4]], [[c=5]], dan [[A=36.87^\\circ]]. Terapkan [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Hasilnya menyatakan total luas datar yang dibatasi oleh ketiga sisi: enam satuan luas permukaan. Inilah tepatnya yang dikembalikan Kalkulator Luas Segitiga Siku-Siku dari Kaki dan Sudut untuk masukan-masukan ini." },
          { "kind": "p", "text": "Kalkulator meminta tiga pengukuran. Kaki [[b]] terletak di sebelah sudut [[A]]; hipotenusa [[c]] adalah sisi terpanjang, berhadapan dengan sudut siku-siku; dan sudut [[A]] adalah sudut lancip yang terjepit di antara keduanya. Karena [[\\sin(A)]] sama dengan rasio kaki yang hilang [[a]] terhadap hipotenusa [[c]], rumus membangun kembali tinggi yang hilang tanpa mengukurnya. Mengalikan [[b]], [[c]], dan [[\\sin(A)]] membentuk persegi panjang yang menutupnya; membagi dua memangkasnya menjadi segitiga." },
          { "kind": "p", "text": "Ini penting setiap kali sisi ketiga sulit diukur. Sebuah gambar mungkin memberikan hipotenusa dan satu kaki, sementara busur derajat atau langkah sebelumnya menyediakan sudutnya. Sinus menutup celah itu, sehingga luas mengikuti dari apa yang sudah diketahui." }
        ]
      },
      "sec-anatomy": {
        "h2": "Memahami Sisi dan Sudut Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Sebelum rumus masuk akal, label-labelnya harus tepat. Setiap simbol di bawah muncul dalam kalkulator, dan masing-masing memiliki satu makna yang tetap." },
          { "kind": "h3", "text": "Apa Itu Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Segitiga siku-siku adalah segitiga dengan satu sudut dalam sama dengan 90 derajat. Kedua sisi yang membentuk sudut itu adalah kaki-kakinya, tegak lurus satu sama lain; sisi yang berhadapan dengan sudut siku-siku adalah hipotenusa. Karena ketiga sudut dalam berjumlah 180 derajat, kedua sudut lancip memenuhi [[A+B=90^\\circ]], yang membuatnya saling melengkapi: mengetahui satu berarti menentukan yang lain." },
          { "kind": "h3", "text": "Apa Itu Hipotenusa?" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku. Ia selalu sisi terpanjang, tidak peduli bagaimana segitiga diputar atau digambar. Kalkulator menggunakannya sebagai sisi [[c]], jadi mengidentifikasinya dengan benar adalah langkah pertama: temukan sudut siku-siku, lalu ambil sisi di seberangnya. Sebuah kaki tidak pernah dapat memainkan peran ini, betapa pun panjangnya ia terlihat dalam gambar miring." },
          { "kind": "h3", "text": "Apa Itu Kedua Kaki?" },
          { "kind": "p", "text": "Kedua kaki adalah sisi-sisi yang bertemu di sudut siku-siku, tegak lurus satu sama lain. Kaki [[a]] terletak berhadapan dengan sudut [[A]]; kaki [[b]] terletak berhadapan dengan sudut [[B]]. Kalkulator mengambil kaki [[b]], yang bersebelahan dengan sudut [[A]], sebagai masukan pertamanya. Bersama-sama kedua kaki membentuk sudut tempat sudut 90 derajat berada." },
          { "kind": "h3", "text": "Memahami Sudut A" },
          { "kind": "p", "text": "Sudut [[A]] adalah sudut lancip yang dibentuk oleh kaki [[b]] dan hipotenusa [[c]]. Ia adalah sudut apit di antara dua masukan sisi kalkulator, sehingga [[\\angle A=\\text{angle between }b\\text{ and }c]]. Pasangan ini tetap: di mana pun rumus menyebut [[A]], maksudnya adalah sudut tempat kaki yang diketahui bertemu dengan hipotenusa, bukan sudut di ujung jauh kaki [[b]]." },
          { "kind": "h3", "text": "Sisi Berhadapan dan Bersebelahan Relatif terhadap Sudut A" },
          { "kind": "p", "text": "Berdirilah di sudut [[A]] dan lihatlah ke seberang segitiga. Sisi yang Anda hadapi tanpa menyentuhnya adalah sisi berhadapan; sisi yang membentuk sudut bersama hipotenusa adalah sisi bersebelahan. Label-label ini mengikuti sudut acuan, sehingga mengganti acuan dari [[A]] ke [[B]] menukar kaki yang mana. Ringkasnya: sisi a berhadapan dengan sudut A, sisi b bersebelahan dengan sudut A, dan sisi c adalah hipotenusa." },
          { "kind": "h3", "text": "Memahami Sudut Apit" },
          { "kind": "p", "text": "Sudut apit adalah sudut yang dibentuk oleh dua sisi yang dipilih. Rumus luas mengalikan [[b]] dan [[c]], sehingga sudut yang dibutuhkan adalah sudut yang terperangkap di antara keduanya: sudut [[A]]. Pasangan yang benar untuk kalkulator ini adalah [[b,\\;c,\\;A]]. Menggunakan sudut lain dengan dua sisi yang sama merusak pasangan yang diasumsikan rumus, jadi jangan kelirukan sudut [[A]] dengan sudut [[B]]." }
        ],
        "imgAlt": "Segitiga siku-siku ABC: kaki b dan hipotenusa c disorot, sudut apit A, kaki a yang hilang diberi label",
        "figcaption": "Segitiga ABC: kaki b yang bersebelahan dan hipotenusa c yang disorot membentuk sudut apit A; sisi a adalah kaki berhadapan yang hilang."
      },
      "sec-sine": {
        "h2": "Memahami Fungsi Sinus dalam Perhitungan Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Sinus adalah sebuah rasio, bukan panjang. Untuk sudut lancip, [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] Di segitiga ini itu menjadi [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Rasio ini membandingkan sisi di seberang sudut dengan sisi terpanjang, sehingga ia adalah bilangan murni tanpa satuan. Untuk sudut lancip nilainya selalu berada di antara 0 dan 1, dan ia adalah tepatnya yang memungkinkan satu sisi menggantikan sisi lain." },
          { "kind": "h3", "text": "Bagaimana Sinus Membantu Menemukan Kaki yang Hilang" },
          { "kind": "p", "text": "Mulai dari [[\\sin(A)=\\frac{a}{c}]]. Kalikan kedua ruas dengan [[c]]: [[[\\boxed{a=c\\sin(A)}]]] Hipotenusa mengembalikan rasio ke bentuk panjang, dan panjang itu adalah kaki yang hilang. Kalkulator tidak pernah menanyakan [[a]] karena satu penataan ulang ini memulihkannya dari [[c]] dan [[A]]. Setiap langkah rumus luas selanjutnya bertumpu pada substitusi ini." },
          { "kind": "h3", "text": "Contoh Numerik" },
          { "kind": "p", "text": "Diberikan [[c=5]] dan [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Kaki yang hilang panjangnya 3 satuan, yang melengkapi segitiga 3-4-5 yang familiar. Satu perkalian menggantikan pengukuran terpisah." },
          { "kind": "h3", "text": "Bagaimana Sinus Berbeda dari Kosinus dan Tangen" },
          { "kind": "p", "text": "Kosinus menggunakan sisi bersebelahan: [[\\cos(A)=\\frac{b}{c}]]. Tangen menggunakan kedua kaki: [[\\tan(A)=\\frac{a}{b}]]. Setiap rasio menjawab pertanyaan yang berbeda. Sinus adalah yang dibutuhkan kalkulator ini karena yang tidak diketahui adalah kaki berhadapan [[a]] dan sisi yang diketahui adalah hipotenusa [[c]]. Ketika yang diketahui berubah, rasio yang berguna ikut berubah, tetapi tidak ada hal lain dalam panduan ini yang meninggalkan keluarga sinus." }
        ]
      },
      "sec-formula": {
        "h2": "Mengapa Rumus Luas Segitiga Siku-Siku Menggunakan Sinus?",
        "blocks": [
          { "kind": "p", "text": "Mulai dari aturan standar: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Untuk segitiga ini alas alaminya adalah kaki [[b]] dan tinggi tegak lurusnya adalah kaki [[a]], karena kaki-kaki bertemu pada 90 derajat. Itu menghasilkan [[K=\\frac{ab}{2}]]. Kalkulator tidak menanyakan [[a]], sehingga rumus harus membangunnya kembali. Dari rasio sinus, [[a=c\\sin(A)]]. Substitusikan: [[K=\\frac{b(c\\sin(A))}{2}]], oleh karena itu [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Pembagian dengan dua bertahan dari aturan alas-tinggi; faktor sinus adalah kaki yang hilang yang menyamar." },
          { "kind": "h3", "text": "Mengapa Rumus Dibagi Dua?" },
          { "kind": "p", "text": "Segitiga dengan alas dan tinggi tegak lurus tertentu mengisi tepat separuh jajar genjang yang dibangun pada alas dan tinggi yang sama. Menggandakan segitiga mana pun sepanjang satu sisi melengkapi jajar genjang itu, sehingga segitiga memiliki separuh luasnya. Pembagian dengan dua adalah geometri, bukan konvensi, dan ia berlaku tidak peduli rumus mana yang menyediakan alas dan tinggi." },
          { "kind": "h3", "text": "Bagaimana Sinus Menggantikan Tinggi yang Hilang?" },
          { "kind": "p", "text": "Tinggi tegak lurus dalam [[K=\\frac{ab}{2}]] adalah kaki [[a]]. Karena [[\\sin(A)=\\frac{a}{c}]], mengalikan hipotenusa dengan sinus meregangkan rasio tanpa dimensi itu kembali menjadi panjang [[a]]. Pengguna mengukur [[c]] dan [[A]] bukan [[a]], dan hasil kali [[c\\sin(A)]] melakukan konversi diam-diam di dalam rumus." },
          { "kind": "h3", "text": "Mengapa Hipotenusa Dikalikan dengan Kaki yang Bersebelahan?" },
          { "kind": "p", "text": "Aturan umum untuk segitiga mana pun adalah bahwa dua sisi dan sudut apitnya menentukan luas. Di sini kedua sisi yang diketahui adalah [[b]] dan [[c]], dan sudut apitnya adalah [[A]]. Rumus mengalikan tepat kedua sisi itu, lalu menskalakan dengan [[\\sin(A)]] dan membagi dua. Pasangan sisi lain mana pun akan menuntut sudut apit yang berbeda." },
          { "kind": "h3", "text": "Apakah Rumus Ini Berlaku untuk Segitiga Lain?" },
          { "kind": "p", "text": "Ya, dalam bentuk umumnya: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], dengan [[x]] dan [[y]] adalah dua sisi mana pun dan [[\\theta]] adalah sudut di antara keduanya. Versi segitiga siku-siku adalah aturan itu dengan [[x=b]], [[y=c]], dan [[\\theta=A]]. Kalkulator menambahkan satu batasan: ketiga masukan juga harus memenuhi relasi segitiga siku-siku, seperti [[b=c\\cos(A)]]. Rumus umum menghitung luas untuk pasangan sudut apit mana pun; kalkulator ini menafsirkan hasilnya sebagai segitiga siku-siku." }
        ],
        "imgAlt": "Segitiga 3-4-5: sin A sama dengan 3 per 5 memulihkan kaki a sama dengan 3, luas 6 menurut dua rumus",
        "figcaption": "Dari sinus ke luas: sin A = 3/5 menghasilkan a = 3, sehingga K = bc sin A / 2 = 6 sesuai dengan K = ab/2."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segitiga Siku-Siku dari Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Kalkulator membutuhkan tepat tiga masukan, dimasukkan secara berurutan. Langkah-langkah di bawah mengikuti tata letak layar dari pengukuran yang diketahui hingga hasil yang diperiksa." }
        ],
        "steps": [
          "<strong>Identifikasi kaki b yang bersebelahan.</strong> Kaki yang membentuk sudut A bersama hipotenusa.",
          "<strong>Identifikasi hipotenusa c.</strong> Sisi terpanjang, berhadapan dengan sudut siku-siku.",
          "<strong>Identifikasi sudut lancip apit A.</strong> Sudut di antara kaki b dan hipotenusa c.",
          "<strong>Gunakan satuan yang kompatibel untuk kedua sisi.</strong> Meter dengan meter, kaki dengan kaki, tidak pernah dicampur.",
          "<strong>Masukkan kaki b ke masukan pertama.</strong> Ini adalah kaki yang bersebelahan dengan sudut A.",
          "<strong>Masukkan hipotenusa c ke masukan kedua.</strong> Ia harus melebihi kaki b.",
          "<strong>Masukkan sudut A dalam derajat.</strong> Kalkulator mengharapkan derajat, bukan radian.",
          "<strong>Periksa bahwa sudut berada di antara 0 dan 90 derajat.</strong> Titik-titik ujungnya tidak menggambarkan segitiga.",
          "<strong>Verifikasi bahwa hipotenusa lebih panjang dari kaki.</strong> Jika c tidak lebih besar dari b, sebuah label salah.",
          "<strong>Periksa bahwa ketiga nilai menggambarkan satu segitiga siku-siku.</strong> Konfirmasikan b sama dengan c cos(A), setidaknya kira-kira.",
          "<strong>Klik \"Calculate Area\".</strong> Hasilnya muncul dengan substitusi yang ditampilkan.",
          "<strong>Tinjau hasilnya.</strong> Baca luasnya dan konfirmasikan bahwa ia terlihat masuk akal.",
          "<strong>Baca langkah-langkah penyelesaian.</strong> Mereka menunjukkan rumus, nilai sinus, dan aritmetikanya.",
          "<strong>Periksa bahwa hasil akhir menggunakan satuan luas.</strong> Satuan panjang dikuadratkan, sesuai dengan masukan.",
          "<strong>Gunakan \"Reset\" sebelum memasukkan soal lain.</strong> Ia mengosongkan ketiga kolom untuk awal yang bersih."
        ],
        "closingParagraphs": [
          "Halaman ini menawarkan satu konfigurasi kalkulator: [[b]], [[c]], dan [[A]]. Tidak ada mode kedua; setiap luas di halaman ini berasal dari rumus sinus di atas."
        ]
      },
      "sec-consistency": {
        "h2": "Cara Memeriksa Apakah Kaki, Hipotenusa, dan Sudut Anda Membentuk Segitiga Siku-Siku yang Valid",
        "blocks": [
          { "kind": "p", "text": "Ketiga masukan tidak independen. Dalam segitiga siku-siku, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], oleh karena itu [[[\\boxed{b=c\\cos(A)}]]] Tetapkan dua dari tiga nilai dan yang ketiga sudah ditentukan. Memasukkan tiga angka yang tidak cocok tidak menggambarkan segitiga yang diasumsikan rumus." },
          { "kind": "h3", "text": "Memeriksa Sudut dari Dua Panjang Sisi" },
          { "kind": "p", "text": "Ketika [[b]] dan [[c]] diketahui, sudutnya terpaksa: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Contoh: [[b=4]], [[c=5]] menghasilkan [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Jika busur derajat atau perhitungan sebelumnya melaporkan sudut yang berbeda untuk sisi-sisi ini, salah satu angkanya salah. Sisi-sisilah yang menentukan; sudut mengikuti." },
          { "kind": "h3", "text": "Memeriksa Panjang Sisi dari Sudut" },
          { "kind": "p", "text": "Pemeriksaan berjalan ke arah lain juga. Diberikan [[c=10]] dan [[A=60^\\circ]], kaki yang bersebelahan haruslah [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Memasukkan [[b=8]] dengan hipotenusa dan sudut yang sama tidak akan menggambarkan segitiga siku-siku yang sama, karena [[10\\cos(60^\\circ)]] sama dengan 5, bukan 8. Setiap sudut hanya menerima tepat satu panjang kaki bersebelahan untuk hipotenusa yang tetap." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Masukan Tidak Konsisten?" },
          { "kind": "p", "text": "Rumus umum dua sisi dan sudut apit tetap mengembalikan angka untuk masukan yang tidak konsisten, karena ia mengalikan apa pun yang diterimanya. Tetapi ketika [[b\\neq c\\cos(A)]], pengukuran-pengukuran tidak menggambarkan segitiga siku-siku dengan [[c]] sebagai hipotenusa dan [[b]] sebagai kaki bersebelahannya. Jawaban numerik bukan bukti geometri yang valid; pemeriksaan konsistensilah buktinya." },
          { "kind": "h3", "text": "Kondisi Masukan Dasar" },
          { "kind": "p", "text": "Masukan valid memenuhi [[c>b>0]], [[0^\\circ<A<90^\\circ]], dan [[b=c\\cos(A)]]. Yang pertama menjaga hipotenusa terpanjang; yang kedua menjaga sudut tetap lancip; yang ketiga mengikat ketiga nilai menjadi satu segitiga. Periksa ketiganya sebelum mempercayai luasnya." }
        ],
        "imgAlt": "Tiga panel: 4, 5, 36,87 derajat yang valid; 5, 10, 60 derajat yang valid; 8, 10, 60 derajat yang tidak valid",
        "figcaption": "Masukan valid memenuhi b = c cos A; panel ketiga menunjukkan 10 cos 60 derajat = 5 tidak sama dengan 8."
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Luas Segitiga Siku-Siku Menggunakan Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Empat segitiga siku-siku klasik menunjukkan metode ini pada ukuran yang meningkat. Setiap contoh mensubstitusikan ke rumus sinus lalu memverifikasi hasilnya dengan rumus dua kaki." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diberikan [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Langkah 1: [[K=\\frac{bc\\sin(A)}{2}]]. Langkah 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Langkah 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Langkah 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Verifikasi: [[a=5\\times0.6=3]], dan [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diberikan [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], dengan [[\\sin(A)=\\frac{5}{13}]]. Substitusikan: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. Angka 13 saling menghilangkan: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Verifikasi: [[a=13\\times(5/13)=5]], dan [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 8-15-17" },
          { "kind": "p", "text": "Diberikan [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], dengan [[\\sin(A)=\\frac{8}{17}]]. Maka [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Verifikasi: [[a=8]], dan [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Contoh 4: Segitiga Siku-Siku 7-24-25" },
          { "kind": "p", "text": "Diberikan [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], dengan [[\\sin(A)=\\frac{7}{25}]]. Maka [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Verifikasi: [[a=7]], dan [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh Dasar" }
        ],
        "table": {
          "headers": ["Jenis segitiga", "Kaki b yang diketahui", "Hipotenusa c", "Sudut A", "Luas terhitung"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Penerapan Nyata Luas Segitiga Siku-Siku dari Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang dikerjakan membawa rumus dari halaman ke bengkel, lapangan, dan studio. Setiap situasi menamai panel, bagian, profil, atau model sederhana segitiga siku-siku, mengerjakan tiga masukan kalkulator melalui rumus, dan menyatakan asumsi di balik angka-angkanya. Ketika objek nyata melengkung atau tidak beraturan, perhitungannya hanya mencakup segitiga yang dimodelkan." },
          { "kind": "h3", "text": "Contoh 1: Jendela Kaca Segitiga" },
          { "kind": "p", "text": "Jendela kaca segitiga siku-siku memiliki [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Masukan kalkulator: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Substitusikan: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Ini adalah luas kaca segitiga datar sebelum kelonggaran bingkai dikurangkan." },
          { "kind": "h3", "text": "Contoh 2: Panel Penyangga Atap" },
          { "kind": "p", "text": "Bagian penyangga atap segitiga siku-siku memiliki [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Masukan: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Maka [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Hasilnya menggambarkan bagian penyangga segitiga yang datar, bukan seluruh atap." },
          { "kind": "h3", "text": "Contoh 3: Profil Samping Landai Segitiga" },
          { "kind": "p", "text": "Profil landai segitiga siku-siku yang disederhanakan memiliki [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Masukan: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Maka [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Ini adalah profil samping segitiga, bukan permukaan jalan miring." },
          { "kind": "h3", "text": "Contoh 4: Pelat Gusset Baja" },
          { "kind": "p", "text": "Pelat baja penyangga segitiga memiliki [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Masukan: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Maka [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] Luas saja tidak menentukan kekuatan struktural atau kapasitas beban." },
          { "kind": "h3", "text": "Contoh 5: Bagian Taman Segitiga" },
          { "kind": "p", "text": "Bagian taman segitiga siku-siku yang disederhanakan memiliki [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Masukan: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Maka [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Ini membantu memperkirakan luas bagian segitiga untuk penanaman." },
          { "kind": "h3", "text": "Contoh 6: Panel Layar Segitiga" },
          { "kind": "p", "text": "Bagian layar segitiga siku-siku memiliki [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Masukan: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Maka [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Jahitan dan kelonggaran bahan dikecualikan dari angka panel datar ini." },
          { "kind": "h3", "text": "Contoh 7: Templat Potong Kayu Lapis" },
          { "kind": "p", "text": "Templat kayu lapis segitiga siku-siku memiliki [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Masukan: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Maka [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Luas membantu memperkirakan bahan datar yang dibutuhkan sebelum limbah pemotongan." },
          { "kind": "h3", "text": "Contoh 8: Rambu Jalan Segitiga" },
          { "kind": "p", "text": "Panel rambu segitiga siku-siku memiliki [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Masukan: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Maka [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Ini memperkirakan luas muka rambu yang datar." },
          { "kind": "h3", "text": "Contoh 9: Bagian Survei Lahan" },
          { "kind": "p", "text": "Bagian survei segitiga siku-siku memiliki [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Masukan: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Maka [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Hasilnya berlaku untuk bagian lahan segitiga siku-siku yang disederhanakan." },
          { "kind": "h3", "text": "Contoh 10: Penyangga Tenda Segitiga" },
          { "kind": "p", "text": "Bagian penyangga tenda segitiga siku-siku memiliki [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Masukan: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Maka [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Ini adalah bagian segitiga datar, bukan seluruh kain tenda yang tidak beraturan." },
          { "kind": "h3", "text": "Contoh 11: Penampang Lahan Industri" },
          { "kind": "p", "text": "Bagian lahan industri segitiga siku-siku yang disederhanakan memiliki [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Masukan: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Maka [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Lahan nyata yang tidak beraturan mungkin perlu dibagi menjadi beberapa bentuk." },
          { "kind": "h3", "text": "Contoh 12: Bagian Ujung Atap Gudang" },
          { "kind": "p", "text": "Bagian ujung atap gudang segitiga siku-siku yang besar memiliki [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Masukan: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Maka [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Hasilnya memperkirakan bagian ujung segitiga yang datar." },
          { "kind": "h3", "text": "Perbandingan Contoh-Contoh Praktis" }
        ],
        "table": {
          "headers": ["Penerapan praktis", "Kaki a", "Kaki b yang diketahui", "Hipotenusa c", "Sudut A", "Luas terhitung", "Satuan pengukuran"],
          "rows": [
            ["Jendela kaca", "3", "4", "5", "36.87°", "6", "m²"],
            ["Penyangga atap", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Profil landai", "6", "8", "10", "36.87°", "24", "m²"],
            ["Pelat gusset", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Bagian taman", "7", "24", "25", "16.26°", "84", "m²"],
            ["Panel layar", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Templat kayu lapis", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Rambu jalan", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Bagian survei", "9", "40", "41", "12.68°", "180", "m²"],
            ["Penyangga tenda", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Bagian industri", "11", "60", "61", "10.39°", "330", "m²"],
            ["Ujung atap gudang", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Mengapa Rumus Berbasis Sinus Menghasilkan Luas yang Sama dengan Rumus Kaki-Kaki?",
        "blocks": [
          { "kind": "p", "text": "Mulai dari [[K=\\frac{bc\\sin(A)}{2}]] dan ingat [[\\sin(A)=\\frac{a}{c}]]. Substitusikan: [[K=\\frac{bc(a/c)}{2}]]. [[c]] saling menghilangkan, menyisakan [[[\\boxed{K=\\frac{ab}{2}}]]] Rumus sinus tidak menciptakan luas baru; ia menghitung luas yang sama dari sekumpulan nilai yang diketahui yang berbeda, dengan kaki yang hilang diselundupkan masuk melalui rasio sinus." },
          { "kind": "h3", "text": "Kapan Rumus Sinus Lebih Berguna?" },
          { "kind": "p", "text": "Gunakan ketika satu kaki terukur, hipotenusa diketahui, dan sudut apit tersedia, sementara sisi ketiga tidak pernah diukur langsung. Pengukuran lapangan, gambar berskala, dan data survei sering tiba tepat dalam kombinasi ini. Rumus mengubah ketiga angka itu menjadi luas dalam satu baris, tanpa jalan memutar untuk menemukan kaki yang hilang terlebih dahulu." },
          { "kind": "h3", "text": "Kapan Rumus Kaki-Kaki Lebih Sederhana?" },
          { "kind": "p", "text": "Ketika kedua kaki tegak lurus sudah diketahui, [[K=\\frac{ab}{2}]] lebih pendek: tanpa sinus, tanpa sudut, satu perkalian dan pembagian dua. Gunakan versi sinus hanya ketika sebuah kaki hilang dan sudut dapat menggantikannya." },
          { "kind": "h3", "text": "Perbandingan Numerik" },
          { "kind": "p", "text": "Pada segitiga 3-4-5, metode sinus menghasilkan [[K=\\frac{4\\times5\\times0.6}{2}=6]], dan metode kaki-kaki menghasilkan [[K=\\frac{3\\times4}{2}=6]]. Kedua rute melewati geometri yang sama, sehingga mereka harus cocok. Ketika tidak cocok, masukan atau aritmetikanya yang salah, bukan rumus-rumusnya." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Bagaimana Sudut Apit Memengaruhi Luas Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Dengan hipotenusa tetap, sudut tidak dapat berubah bebas: relasi segitiga siku-siku mengikat [[b]] dan [[A]] bersama. Memperlakukan batasan itu dengan jujur menunjukkan tepat bagaimana luas naik dan turun ketika [[A]] bergerak antara 0 dan 90 derajat." },
          { "kind": "h3", "text": "Apa yang Terjadi Ketika Sudut A Bertambah?" },
          { "kind": "p", "text": "Dengan [[c]] tetap, [[b=c\\cos(A)]] dan [[a=c\\sin(A)]], sehingga [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Identitas sudut ganda memberikan [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] Luas tumbuh ketika [[A]] mendekati 45 derajat dari bawah, mencapai puncak pada 45 derajat, lalu turun menuju 90 derajat. Sudut-sudut yang saling melengkapi, seperti 30° dan 60°, memberikan luas yang sama karena [[\\sin(2A)]] simetris terhadap 45 derajat." },
          { "kind": "h3", "text": "Luas Maksimum untuk Hipotenusa Tetap" },
          { "kind": "p", "text": "Puncaknya terjadi pada [[A=45^\\circ]], ketika [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Di sana [[a=b=\\frac{c}{\\sqrt{2}}]], sehingga segitiga yang memaksimalkan adalah segitiga sama kaki. Hipotenusa tetap tidak dapat menutupi luas segitiga siku-siku lebih dari seperempat kuadratnya, dan hanya bentuk sama kaki yang mencapainya." },
          { "kind": "h3", "text": "Contoh Numerik" },
          { "kind": "p", "text": "Diberikan [[c=10]], batas atasnya adalah [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] Pada [[A=45^\\circ]] kaki-kakinya masing-masing [[10/\\sqrt{2}\\approx7.07]], dan [[\\frac{7.07\\times7.07}{2}\\approx25]]. Perhatikan bahwa 90° bukan masukan lancip yang dapat diterima: ia akan meruntuhkan segitiga menjadi sebuah garis." }
        ]
      },
      "sec-alternative": {
        "h2": "Bisakah Menghitung Luas Segitiga Siku-Siku Menggunakan Satu Kaki dan Sudutnya?",
        "blocks": [
          { "kind": "p", "text": "Ya, dengan tangen bukan sinus. Jika kaki [[b]] dan sudut [[A]] diketahui, kaki berhadapan mengikuti dari [[a=b\\tan(A)]]. Masukkan itu ke [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], oleh karena itu [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Dari sudut lainnya, [[b=a\\tan(B)]] memberikan [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Ini adalah metode alternatif yang sah, berguna ketika hipotenusa tidak diketahui tetapi sebuah kaki dan sudutnya ada di tangan. Ini adalah alternatif matematis, bukan mode tambahan dalam kalkulator di atas, yang hanya bekerja dengan [[b]], [[c]], dan [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Satuan Sudut dan Pengukuran dalam Perhitungan Luas",
        "blocks": [
          { "kind": "p", "text": "Luas mewarisi satuannya dari dua panjang yang dikalikan untuk membuatnya, sementara sudut tidak menyumbang satuan sama sekali. Menjaga ketiga masukan dalam satuan yang kompatibel adalah yang menjaga jawabannya jujur." },
          { "kind": "h3", "text": "Derajat Versus Radian" },
          { "kind": "p", "text": "Kalkulator mengharapkan derajat. Ubah dengan [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; misalnya, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Sudut mode radian yang dimasukkan ke kolom mode derajat diam-diam mengubah nilai sinus: [[\\sin(30^\\circ)=0.5]] tetapi [[\\sin(30\\text{ radians})\\approx-0.99]], yang akan merusak luas. Ubah terlebih dahulu, lalu masukkan." },
          { "kind": "h3", "text": "Mengapa Sinus Tidak Memiliki Satuan" },
          { "kind": "p", "text": "Sinus adalah rasio dua panjang, sehingga satuannya saling menghilangkan: berhadapan per hipotenusa adalah bilangan murni. Satuan luas dalam jawaban sepenuhnya berasal dari mengalikan [[b]] dengan [[c]]. Itulah mengapa pembukuan satuan rumusnya sederhana: cocokkan kedua satuan panjang, dan satuan luas mengikuti." },
          { "kind": "h3", "text": "Satuan Pengukuran Umum" },
          { "kind": "p", "text": "Meter menghasilkan meter persegi, sentimeter menghasilkan sentimeter persegi, kaki menghasilkan kaki persegi, inci menghasilkan inci persegi: [[\\text{m}\\times\\text{m}=\\text{m}^2]], dan pola yang sama berlaku untuk setiap satuan panjang. Satuan campuran, seperti sentimeter dengan meter, harus diubah ke satu satuan sebelum rumus diterapkan, atau angkanya tidak memiliki makna yang bersih." },
          { "kind": "h3", "text": "Mengapa Pembulatan Dini Dapat Memengaruhi Hasil" },
          { "kind": "p", "text": "Jaga presisi penuh melalui langkah-langkah antara dan bulatkan hanya jawaban akhir. Sudut tepat di balik 36.87° adalah 36.869897°, yang sinusnya tepat 0.6; membulatkan sudut terlebih dahulu menggeser sinus sedikit, dan pergeseran itu berlipat melalui [[b]] dan [[c]] ke dalam luas. Kecil pada satu segitiga, terlihat di seluruh proyek." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum saat Menghitung Luas Segitiga Siku-Siku dari Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawaban salah dalam topik ini berakar pada masukan yang salah label, bukan aritmetika yang buruk. Enam belas kesalahan di bawah adalah yang muncul berulang kali, masing-masing dengan penyebab dan perbaikannya." },
          { "kind": "h3", "text": "1. Mengelirukan Hipotenusa dengan Kaki Tegak Lurus" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku dan sisi terpanjang; kaki bertemu dengan sudut siku-siku. Menukarnya memasukkan panjang yang salah ke [[c]]. Perbaikan: temukan sudut siku-siku terlebih dahulu, lalu ambil sisi di seberangnya." },
          { "kind": "h3", "text": "2. Memasangkan Sudut A dengan Kaki yang Salah" },
          { "kind": "p", "text": "Sudut [[A]] terletak di antara kaki [[b]] dan hipotenusa [[c]]. Memasangkannya dengan kaki [[a]] mengacaukan hubungan sudut apit yang diasumsikan rumus. Perbaikan: telusuri kedua sisi yang membentuk sudut yang Anda masukkan." },
          { "kind": "h3", "text": "3. Mengelirukan Sisi Berhadapan dan Bersebelahan" },
          { "kind": "p", "text": "Berhadapan berarti di seberang sudut; bersebelahan berarti menyentuhnya, di samping hipotenusa. Label-label bertukar ketika sudut acuan berubah. Perbaikan: berdirilah di sudut [[A]] dan namai setiap sisi dari sana." },
          { "kind": "h3", "text": "4. Menggunakan Sudut B Bukan Sudut A Tanpa Mengubah Sisi yang Sesuai" },
          { "kind": "p", "text": "Sudut [[B]] berpasangan dengan sisi [[a]] dan [[c]], bukan [[b]] dan [[c]]. Memasukkan [[B]] sambil tetap memakai [[b]] dan [[c]] menghitung besaran yang berbeda. Perbaikan: jaga setiap sudut dengan pasangan sisinya sendiri, atau ubah [[B]] menjadi [[A]] terlebih dahulu." },
          { "kind": "h3", "text": "5. Menggunakan Radian Ketika Kalkulator Mengharapkan Derajat" },
          { "kind": "p", "text": "Memasukkan 0.6435 (radian) di tempat 36.87 (derajat) mengubah [[\\sin(A)]] sepenuhnya. Perbaikan: periksa satuan kalkulator, ubah dengan [[\\times\\frac{180}{\\pi}]] jika perlu, lalu masukkan." },
          { "kind": "h3", "text": "6. Lupa Membagi Dua" },
          { "kind": "p", "text": "Mengalikan [[b\\times c\\times\\sin(A)]] menghasilkan luas jajar genjang yang menutupnya, dua kali luas segitiga. Perbaikan: bagi dua hasil kalinya; /2 adalah bagian rumus, bukan opsional." },
          { "kind": "h3", "text": "7. Lupa Fungsi Sinus" },
          { "kind": "p", "text": "Menghitung [[\\frac{bc}{2}]] saja memperlakukan [[\\sin(A)]] sebagai 1, yang hanya berlaku pada 90°, masukan lancip yang mustahil. Perbaikan: sertakan [[\\sin(A)]]; ia membawa bagian kaki yang hilang." },
          { "kind": "h3", "text": "8. Memasukkan Kaki yang Lebih Panjang dari Hipotenusa" },
          { "kind": "p", "text": "Tidak ada kaki yang dapat melebihi hipotenusa, sehingga [[c\\leq b]] berarti sebuah label salah. Perbaikan: identifikasi ulang sisi-sisinya; pengukuran terpanjang adalah [[c]]." },
          { "kind": "h3", "text": "9. Memasukkan Sudut 0 Derajat" },
          { "kind": "p", "text": "Pada 0°, [[\\sin(A)=0]] dan segitiga runtuh menjadi garis dengan luas nol. Perbaikan: gunakan sudut lancip yang sesungguhnya, benar-benar di antara 0° dan 90°." },
          { "kind": "h3", "text": "10. Memasukkan Sudut 90 Derajat sebagai Sudut Lancip" },
          { "kind": "p", "text": "90° adalah sudut siku-siku [[C]], bukan sudut lancip; [[\\sin(90^\\circ)=1]] mengubah rumus menjadi [[\\frac{bc}{2}]], yang bukan luas segitiga ini. Perbaikan: masukkan sudut lancip di antara [[b]] dan [[c]]." },
          { "kind": "h3", "text": "11. Mencampur Satuan Panjang yang Berbeda" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] dengan [[c=5\\text{ m}]] mengalikan skala yang tidak kompatibel. Perbaikan: ubah keduanya ke satu satuan (400 cm = 4 m) sebelum menghitung." },
          { "kind": "h3", "text": "12. Melaporkan Luas dalam Satuan Linear" },
          { "kind": "p", "text": "Luas 6 m² bukan 6 m. Perbaikan: tulis satuan yang dikuadratkan bersama angkanya, setiap kali." },
          { "kind": "h3", "text": "13. Membulatkan Sudut Terlalu Dini" },
          { "kind": "p", "text": "Membulatkan 36.869897° menjadi 36.87° sebelum mengambil sinus menggeser hasilnya sedikit; membulatkan menjadi 37° menggesernya lebih banyak. Perbaikan: jaga presisi penuh hingga jawaban akhir." },
          { "kind": "h3", "text": "14. Menganggap Ketiga Masukan Dapat Dipilih Secara Independen" },
          { "kind": "p", "text": "[[b]], [[c]], dan [[A]] terhubung oleh [[b=c\\cos(A)]]; memilih ketiganya bebas-bebas menentukan segitiga secara berlebihan. Perbaikan: turunkan nilai ketiga dari dua lainnya bukan mengarangnya." },
          { "kind": "h3", "text": "15. Menggunakan Sudut yang Tidak Konsisten dengan Panjang Sisi yang Dimasukkan" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] gagal dalam pemeriksaan, karena [[10\\cos(60^\\circ)=5\\neq8]]. Rumus tetap mengembalikan angka, tetapi itu bukan luas segitiga siku-siku ini. Perbaikan: jalankan pemeriksaan [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Menganggap Hasil Kalkulator Numerik Selalu Mewakili Segitiga Siku-Siku yang Valid" },
          { "kind": "p", "text": "Aritmetika berhasil pada angka apa pun yang diketik; geometri tidak. Perbaikan: verifikasi dengan pemeriksaan konsistensi dan rumus independen sebelum mempercayai jawabannya." },
          { "kind": "h3", "text": "Salah Versus Benar: Contoh Konkret" },
          { "kind": "p", "text": "Gunakan [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Benar: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Salah memasukkan sudut [[B=53.13^\\circ]] dengan sisi yang sama: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Sudut [[B]] bukan sudut apit di antara [[b]] dan [[c]]; pasangan sisi yang tepat untuknya adalah [[a]] dan [[c]]. Kesalahan tidak terlihat dalam aritmetika dan jelas dalam geometri." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Luas Segitiga Siku-Siku Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Tujuh pemeriksaan independen, semuanya didemonstrasikan pada segitiga 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Kesepakatan antara rute yang berbeda adalah bukti terkuat bahwa jawaban benar." },
          { "kind": "h3", "text": "Metode 1: Periksa Rumus Utama" },
          { "kind": "p", "text": "Hitung ulang [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Lintasan kedua menangkap kesalahan ketik dan sudut yang salah ketik." },
          { "kind": "h3", "text": "Metode 2: Periksa Hubungan Kosinus" },
          { "kind": "p", "text": "Konfirmasikan [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Ketidakcocokan berarti sudut dan sisi-sisinya berasal dari segitiga yang berbeda." },
          { "kind": "h3", "text": "Metode 3: Hitung Kaki yang Hilang" },
          { "kind": "p", "text": "Konfirmasikan [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Ini memeriksa nilai sinus yang memberi makan rumus luas." },
          { "kind": "h3", "text": "Metode 4: Periksa Teorema Pythagoras" },
          { "kind": "p", "text": "Konfirmasikan [[a^2+b^2=c^2]]: [[9+16=25]]. Kegagalan di sini berarti identifikasi sisinya salah." },
          { "kind": "h3", "text": "Metode 5: Verifikasi Menggunakan Dua Kaki" },
          { "kind": "p", "text": "Konfirmasikan [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Dua metode, satu segitiga, satu jawaban." },
          { "kind": "h3", "text": "Metode 6: Periksa Sudut-Sudut yang Saling Melengkapi" },
          { "kind": "p", "text": "Konfirmasikan [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Ini menangkap sudut yang diukur di sudut yang salah." },
          { "kind": "h3", "text": "Metode 7: Periksa Luas Maksimum" },
          { "kind": "p", "text": "Konfirmasikan [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Luas di atas batas atas tidak mungkin untuk hipotenusa yang diberikan." }
        ]
      },
      "sec-applications": {
        "h2": "Luas Segitiga Siku-Siku dari Kaki dan Sudut dalam Praktik",
        "blocks": [
          { "kind": "p", "text": "Ketiga masukan yang sama muncul di tempat-tempat yang tidak pernah menyebut trigonometri. Seorang tukang kaca mengukur kaki dan diagonal jendela dan membaca sudutnya dari bingkai; seorang tukang atap mengetahui hipotenusa penyangga dari panjang kasau dan sudutnya dari kemiringan. Dalam setiap kasus sisi tegak lurus yang hilang adalah yang canggung untuk dijangkau dengan meteran, sementara hipotenusa dan sudutnya tepat di tangan. Rumus sinus ada tepat untuk asimetri itu: ia mengubah pengukuran yang dapat diakses menjadi tinggi yang tidak dapat diakses lalu menjadi luas." },
          { "kind": "p", "text": "Keempat panel di bawah menunjukkan pola pada skala yang berbeda. Jendela kaca (6 m²) dan profil landai (24 m²) menggunakan geometri 3-4-5 dan 6-8-10 skala meter; penyangga atap (30 ft²) menggunakan segitiga 5-12-13; bagian survei (84 m²) menggunakan 7-24-25. Setiap panel melabeli kaki yang bersebelahan, hipotenusa, sudut apit, dan luas yang dihasilkan, sehingga jalur dari pengukuran ke jawaban tetap terlihat." }
        ],
        "imgAlt": "Empat panel: jendela kaca 6 m2, panel atap 30 ft2, profil landai 24 m2, bagian survei 84 m2",
        "figcaption": "Empat kegunaan nyata: jendela, penyangga atap, profil landai, dan bagian survei beserta luasnya."
      },
      "sec-faq": {
        "h2": "Pertanyaan yang Sering Diajukan",
        "blocks": [
          { "kind": "p", "text": "Di bawah ini adalah jawaban atas pertanyaan-pertanyaan paling umum tentang luas dari kaki dan sudut." }
        ]
      },
      "sec-related": {
        "h2": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "blocks": [
          { "kind": "p", "text": "Pengukuran yang berbeda memerlukan kalkulator yang berbeda." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tiga Masukan Menentukan Seluruh Luas",
        "blocks": [
          { "kind": "p", "text": "Satu kaki, hipotenusa, dan sudut di antara keduanya ternyata sudah cukup. Rasio sinus membangun kembali kaki yang hilang, pembagian dua mengubah persegi panjang yang menutup menjadi segitiga, dan relasi konsistensi memungkinkan setiap masukan diperiksa terhadap yang lain. Tidak ada dalam metode ini yang bersifat perkiraan ketika masukannya tepat." },
          { "kind": "p", "text": "Kebiasaan kerjanya sederhana: beri label sisi-sisinya dari sudut A, jaga satuan tetap cocok, konfirmasikan b = c cos(A), dan verifikasi jawabannya melalui rumus kaki-kaki. Dengan kebiasaan itu, K = bc sin(A)/2 sama andalnya dengan perhitungan luas apa pun dalam geometri." }
        ]
      }
    }
  },
  "ar": {
    "faqs": [
      {
        "question": "ما صيغة المساحة باستخدام ضلع قائم واحد وزاوية؟",
        "answer": "K = bc sin(A) / 2، حيث b هو الضلع القائم المجاور للزاوية A، وc هو الوتر، وA هي الزاوية الحادة بينهما. على سبيل المثال، b = 4 وc = 5 وA = 36.87° تعطي K = (4 × 5 × 0.6) / 2 = 6 وحدات مربعة. يجب إدخال الزاوية بالدرجات، ويجب أن يستخدم الضلعان وحدة الطول نفسها."
      },
      {
        "question": "لماذا تستخدم الصيغة الجيب؟",
        "answer": "الجيب يعيد بناء الضلع القائم العمودي المفقود من الوتر: بما أن sin(A) = a/c، فإن الضرب يعطي a = c sin(A). قاعدة المساحة القياسية تحتاج إلى الضلعين القائمين، K = ab/2، لذا فإن التعويض بتعبير الجيب عن a يعطي K = bc sin(A)/2. الجيب هو الجسر بين الوتر المقاس والارتفاع غير المقاس."
      },
      {
        "question": "أي ضلع مجاور للزاوية A؟",
        "answer": "الضلع القائم b مجاور للزاوية A: فهو أحد الضلعين اللذين يشكلان تلك الزاوية، والآخر هو الوتر c. أما الضلع القائم a فهو مقابل للزاوية A، ويقع عبر المثلث منها. إذا بدلت المرجع إلى الزاوية B، تتبدل التسميات: يصبح b هو الضلع المقابل ويصبح a هو الضلع المجاور."
      },
      {
        "question": "هل يمكنني حساب المساحة دون معرفة الضلع القائم المفقود؟",
        "answer": "نعم، وهذا هو الغرض كله من هذه الحاسبة. جيب الزاوية A يشفر نسبة الضلع القائم المفقود إلى الوتر، فيعيد c sin(A) بناء الضلع a دون قياسه. أدخل b وc وA، وستتولى الصيغة الباقي. لن تحتاج أبدًا إلى الضلع الثالث كمدخل منفصل."
      },
      {
        "question": "ما الفرق بين الزاوية A والزاوية B؟",
        "answer": "كلتاهما زاويتان حادتان في المثلث القائم الزاوية، وA + B = 90°. تقع الزاوية A بين الضلع القائم b والوتر c؛ وتقع الزاوية B بين الضلع القائم a والوتر c. تتطلب الصيغة K = bc sin(A)/2 الزاوية A تحديدًا. استخدام الزاوية B مع الضلعين b وc يعطي إجابة خاطئة؛ فالزاوية B تقترن بالضلعين a وc."
      },
      {
        "question": "هل تستخدم الحاسبة الدرجات أم الراديان؟",
        "answer": "الدرجات. إدخال قيمة بالراديان يعطي جيبًا مختلفًا تمامًا ومساحة خاطئة، لأن الحاسبة تفسر الرقم على أنه درجات. حوّل الراديان إلى درجات أولًا باستخدام الدرجات = الراديان × 180/π؛ فمثلًا π/6 راديان يساوي 30°. تحقق دائمًا من وحدة الزاوية التي تتوقعها الحاسبة قبل إدخال أي قيمة وقبل الضغط على زر الحساب."
      },
      {
        "question": "هل يمكنني استخدام أي زاوية مع ضلع قائم ووتر معطيين؟",
        "answer": "لا. يجب أن تحقق المدخلات الثلاثة b = c cos(A)، فالزاوية محددة بمجرد اختيار الضلعين. فعند b = 4 وc = 5 يجب أن تكون الزاوية A حوالي 36.87°. إدخال زاوية مختلفة يصف مثلثًا مختلفًا، ولن تتطابق النتيجة مع المثلث القائم الزاوية المقصود."
      },
      {
        "question": "كيف أتحقق من أن قياساتي تشكل مثلثًا قائم الزاوية صالحًا؟",
        "answer": "تحقق من ثلاثة شروط: أن يتجاوز الوتر الضلع القائم (c > b > 0)، وأن تكون الزاوية محصورة تمامًا بين 0° و90°، وأن يتحقق b = c cos(A). ولثقة إضافية، تحقق من a = c sin(A) ونظرية فيثاغورس a² + b² = c². إذا فشل أي فحص، فهناك قياس أو تسمية خاطئة واحدة على الأقل."
      },
      {
        "question": "هل يمكنني حساب المساحة إذا عرفت الضلعين القائمين؟",
        "answer": "نعم، وتنطبق الصيغة الأقصر K = ab/2 مباشرة، دون حاجة إلى زاوية أو جيب. فعند الضلعين 3 و4 تكون K = 6. الحاسبة المعتمدة على الجيب مصممة للحالة التي يكون فيها أحد الضلعين القائمين مفقودًا؛ وعند معرفة الضلعين معًا، تكون صيغة الضلعين أبسط وتعطي النتيجة نفسها."
      },
      {
        "question": "ماذا يحدث إذا أدخلت الزاوية الخطأ؟",
        "answer": "تضرب الحاسبة كل ما تتلقاه، فالزاوية الخاطئة تعطي مساحة خاطئة دون تحذير. إدخال الزاوية B = 53.13° بدل A = 36.87° مع b = 4 وc = 5 يعطي 8 بدل 6. تأكد دائمًا من أن الزاوية المدخلة هي الواقعة بين الضلع القائم b والوتر."
      },
      {
        "question": "ما أقصى مساحة ممكنة لوتر ثابت؟",
        "answer": "K = c²/4، وتتحقق عندما تكون الزاوية A = 45° ويكون المثلث متساوي الساقين بضلعين c/√2. فعند وتر 10 يكون السقف 25 وحدة مربعة. لا يمكن لأي مثلث قائم الزاوية بهذا الوتر أن يحيط بمساحة أكبر. إذا تجاوزت نتيجتك c²/4 فالمدخلات غير متسقة."
      },
      {
        "question": "ما الفرق بين الصيغة المعتمدة على الجيب وصيغة القاعدة والارتفاع القياسية؟",
        "answer": "لا يوجد فرق رياضي: التعويض بـ sin(A) = a/c في K = bc sin(A)/2 يعطي K = ab/2، وهي قاعدة القاعدة والارتفاع القياسية. نسخة الجيب هي الصيغة نفسها مكتوبة لمعلومات مختلفة. استخدم صيغة الجيب عند معرفة الوتر والزاوية؛ واستخدم ab/2 عند معرفة الضلعين القائمين."
      }
    ],
    "relatedHeading": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
    "relatedItems": [
      "حاسبة مساحة المثلث القائم الزاوية",
      "حاسبة مساحة المثلث القائم الزاوية من الضلعين القائمين",
      "حاسبة مساحة المثلث القائم الزاوية من الزاوية",
      "حاسبة ضلع المثلث القائم الزاوية من الزاوية",
      "حاسبة أضلاع المثلث القائم الزاوية",
      "حاسبة النسب المثلثية للمثلث القائم الزاوية"
    ],
    "relatedIntro": "قياسات مختلفة تتطلب حاسبات مختلفة.",
    "faqHeading": "الأسئلة الشائعة",
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "كيفية حساب مساحة المثلث القائم الزاوية باستخدام ضلع قائم وزاوية",
      "sec-anatomy": "فهم أضلاع وزوايا المثلث القائم الزاوية",
      "sec-sine": "فهم دالة الجيب في حسابات المثلث القائم الزاوية",
      "sec-formula": "لماذا تستخدم صيغة مساحة المثلث القائم الزاوية الجيب؟",
      "sec-howto": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من الضلع القائم والزاوية",
      "sec-consistency": "كيفية التحقق من أن الضلع القائم والوتر والزاوية لديك تشكل مثلثًا قائم الزاوية صالحًا",
      "sec-examples": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية باستخدام الضلع القائم والزاوية",
      "sec-practical": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من الضلع القائم والزاوية",
      "sec-compare": "لماذا تعطي الصيغة المعتمدة على الجيب المساحة نفسها التي تعطيها صيغة الضلعين القائمين؟",
      "sec-angle-effect": "كيف تؤثر الزاوية المحصورة على مساحة المثلث القائم الزاوية؟",
      "sec-alternative": "هل يمكن حساب مساحة المثلث القائم الزاوية باستخدام ضلع قائم واحد وزاويته؟",
      "sec-units": "فهم وحدات الزوايا والقياسات في حسابات المساحة",
      "sec-mistakes": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من ضلع قائم وزاوية",
      "sec-verify": "كيفية التحقق من صحة مساحة المثلث القائم الزاوية",
      "sec-applications": "مساحة المثلث القائم الزاوية من الضلع القائم والزاوية في التطبيق العملي",
      "sec-related": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "ثلاثة مدخلات تحمل المساحة كلها"
    },
    "sections": {
      "sec-intro": {
        "h2": "كيفية حساب مساحة المثلث القائم الزاوية باستخدام ضلع قائم وزاوية",
        "blocks": [
          { "kind": "p", "text": "خذ [[b=4]] و[[c=5]] و[[A=36.87^\\circ]]. طبق [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]]، [[[\\boxed{K=6\\text{ square units}}]]] تسمي النتيجة إجمالي المساحة المسطحة المحصورة بالأضلاع الثلاثة: ست وحدات مربعة من السطح. هذا بالضبط ما تعيده حاسبة مساحة المثلث القائم الزاوية من الضلع القائم والزاوية لهذه المدخلات." },
          { "kind": "p", "text": "تطلب الحاسبة ثلاثة قياسات. يقع الضلع القائم [[b]] بجوار الزاوية [[A]]؛ والوتر [[c]] هو أطول ضلع، مقابل الزاوية القائمة؛ والزاوية [[A]] هي الزاوية الحادة المحصورة بينهما. وبما أن [[\\sin(A)]] يساوي نسبة الضلع القائم المفقود [[a]] إلى الوتر [[c]]، تعيد الصيغة بناء الارتفاع المفقود دون قياسه. ضرب [[b]] و[[c]] و[[\\sin(A)]] يشكل المستطيل المحيط؛ والقسمة على اثنين تقصه إلى مثلث." },
          { "kind": "p", "text": "وهذا مهم كلما كان الضلع الثالث صعب القياس. قد يعطي الرسم الوتر وضلعًا قائمًا واحدًا، بينما يوفر المنقلة أو خطوة سابقة الزاوية. يسد الجيب الفجوة، فتتبع المساحة مما هو معروف أصلًا." }
        ]
      },
      "sec-anatomy": {
        "h2": "فهم أضلاع وزوايا المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "قبل أن تصبح الصيغة مفهومة، يجب أن تكون التسميات دقيقة. يظهر كل رمز أدناه في الحاسبة، ولكل واحد معنى واحد ثابت." },
          { "kind": "h3", "text": "ما هو المثلث القائم الزاوية؟" },
          { "kind": "p", "text": "المثلث القائم الزاوية هو مثلث فيه زاوية داخلية واحدة تساوي 90 درجة. الضلعان اللذان يشكلان تلك الزاوية هما الضلعان القائمان، وهما متعامدان؛ والضلع المقابل للزاوية القائمة هو الوتر. وبما أن مجموع الزوايا الداخلية الثلاث يساوي 180 درجة، فإن الزاويتين الحادتين تحققان [[A+B=90^\\circ]]، ما يجعلهما متتامتين: معرفة إحداهما تحدد الأخرى." },
          { "kind": "h3", "text": "ما هو الوتر؟" },
          { "kind": "p", "text": "الوتر هو الضلع المقابل للزاوية القائمة. وهو دائمًا أطول ضلع، مهما دار المثلث أو رُسم. تستخدمه الحاسبة بوصفه الضلع [[c]]، لذا فإن تحديده الصحيح هو الخطوة الأولى: جد الزاوية القائمة، ثم خذ الضلع المقابل لها. لا يمكن لضلع قائم أن يلعب هذا الدور أبدًا، مهما بدا طويلًا في رسم مائل." },
          { "kind": "h3", "text": "ما هما الضلعان القائمان؟" },
          { "kind": "p", "text": "الضلعان القائمان هما الضلعان اللذان يلتقيان عند الزاوية القائمة، وهما متعامدان. يقع الضلع القائم [[a]] مقابل الزاوية [[A]]؛ ويقع الضلع القائم [[b]] مقابل الزاوية [[B]]. تأخذ الحاسبة الضلع القائم [[b]]، المجاور للزاوية [[A]]، كمدخلها الأول. ويشكل الضلعان معًا الركن الذي تعيش فيه زاوية التسعين درجة." },
          { "kind": "h3", "text": "فهم الزاوية A" },
          { "kind": "p", "text": "الزاوية [[A]] هي الزاوية الحادة التي يشكلها الضلع القائم [[b]] والوتر [[c]]. وهي الزاوية المحصورة بين مدخلي الضلعين في الحاسبة، فيكون [[\\angle A=\\text{angle between }b\\text{ and }c]]. وهذا الاقتران ثابت: أينما ذكرت الصيغة [[A]]، فالمقصود هو الركن الذي يلتقي فيه الضلع القائم المعروف بالوتر، وليس الركن الواقع في الطرف البعيد من الضلع [[b]]." },
          { "kind": "h3", "text": "الضلعان المقابل والمجاور بالنسبة إلى الزاوية A" },
          { "kind": "p", "text": "قف عند الزاوية [[A]] وانظر عبر المثلث. الضلع الذي تواجهه دون أن تلمسه هو الضلع المقابل؛ والضلع الذي يشكل الزاوية إلى جانب الوتر هو الضلع المجاور. تتبع هذه التسميات الزاوية المرجعية، فتبديل المرجع من [[A]] إلى [[B]] يبدل أي ضلع قائم هو أيهما. وباختصار: الضلع a مقابل للزاوية A، والضلع b مجاور للزاوية A، والضلع c هو الوتر." },
          { "kind": "h3", "text": "فهم الزاوية المحصورة" },
          { "kind": "p", "text": "الزاوية المحصورة هي الزاوية التي يشكلها ضلعان مختاران. تضرب صيغة المساحة [[b]] في [[c]]، فالزاوية التي تحتاجها هي المحتجزة بينهما: الزاوية [[A]]. الاقتران الصحيح لهذه الحاسبة هو [[b,\\;c,\\;A]]. استخدام أي زاوية أخرى مع الضلعين نفسيهما يكسر الاقتران الذي تفترضه الصيغة، فلا تخلط بين الزاوية [[A]] والزاوية [[B]]." }
        ],
        "imgAlt": "المثلث القائم الزاوية ABC: الضلع القائم b والوتر c مظللان، والزاوية المحصورة A، والضلع القائم المفقود a موسوم",
        "figcaption": "المثلث ABC: الضلع القائم المجاور المظلل b والوتر c يشكلان الزاوية المحصورة A؛ والضلع a هو الضلع القائم المقابل المفقود."
      },
      "sec-sine": {
        "h2": "فهم دالة الجيب في حسابات المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "الجيب نسبة، وليس طولًا. بالنسبة إلى زاوية حادة، [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] وفي هذا المثلث تصبح [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] تقارن النسبة الضلع المقابل للزاوية بأطول ضلع، فهي عدد خالص بلا وحدات. بالنسبة إلى زاوية حادة تقع قيمتها دائمًا بين 0 و1، وهي بالضبط ما يتيح لضلع أن يقوم مقام ضلع آخر." },
          { "kind": "h3", "text": "كيف يساعد الجيب في إيجاد الضلع القائم المفقود" },
          { "kind": "p", "text": "ابدأ من [[\\sin(A)=\\frac{a}{c}]]. اضرب الطرفين في [[c]]: [[[\\boxed{a=c\\sin(A)}]]] يعيد الوتر تكبير النسبة إلى طول، وهذا الطول هو الضلع القائم المفقود. لا تسأل الحاسبة عن [[a]] أبدًا لأن إعادة الترتيب هذه تستعيده من [[c]] و[[A]]. وكل خطوة لاحقة من صيغة المساحة تقوم على هذا التعويض." },
          { "kind": "h3", "text": "مثال عددي" },
          { "kind": "p", "text": "بمعلومية [[c=5]] و[[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]]، [[a=5\\times0.6]]، [[[\\boxed{a=3}]]] طول الضلع القائم المفقود 3 وحدات، ما يكمل المثلث المألوف 3-4-5. ضرب واحد حل محل قياس منفصل." },
          { "kind": "h3", "text": "كيف يختلف الجيب عن جيب التمام والظل" },
          { "kind": "p", "text": "يستخدم جيب التمام الضلع المجاور: [[\\cos(A)=\\frac{b}{c}]]. ويستخدم الظل الضلعين القائمين: [[\\tan(A)=\\frac{a}{b}]]. تجيب كل نسبة عن سؤال مختلف. الجيب هو ما تحتاجه هذه الحاسبة لأن المجهول هو الضلع القائم المقابل [[a]] والمعلوم هو الوتر [[c]]. عندما تتغير المعلومات يتغير معها النسبة المفيدة، لكن لا شيء آخر في هذا الدليل يغادر عائلة الجيب." }
        ]
      },
      "sec-formula": {
        "h2": "لماذا تستخدم صيغة مساحة المثلث القائم الزاوية الجيب؟",
        "blocks": [
          { "kind": "p", "text": "ابدأ بالقاعدة القياسية: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. في هذا المثلث القاعدة الطبيعية هي الضلع القائم [[b]] والارتفاع العمودي هو الضلع القائم [[a]]، لأن الضلعين يلتقيان عند 90 درجة. فينتج [[K=\\frac{ab}{2}]]. لا تسأل الحاسبة عن [[a]]، فيجب على الصيغة إعادة بنائه. من نسبة الجيب، [[a=c\\sin(A)]]. عوّض: [[K=\\frac{b(c\\sin(A))}{2}]]، ومن ثم [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] القسمة على اثنين باقية من قاعدة القاعدة والارتفاع؛ وعامل الجيب هو الضلع القائم المفقود متنكرًا." },
          { "kind": "h3", "text": "لماذا تُقسم الصيغة على اثنين؟" },
          { "kind": "p", "text": "يملأ مثلث له قاعدة وارتفاع عمودي معطيان نصف متوازي الأضلاع المبني على القاعدة والارتفاع نفسيهما بالضبط. مضاعفة أي مثلث على أحد أضلاعه تكمل ذلك المتوازي، فيملك المثلث نصف مساحته. القسمة على اثنين هندسة، وليست اصطلاحًا، وهي تنطبق أيًّا كانت الصيغة التي توفر القاعدة والارتفاع." },
          { "kind": "h3", "text": "كيف يحل الجيب محل الارتفاع المفقود؟" },
          { "kind": "p", "text": "الارتفاع العمودي في [[K=\\frac{ab}{2}]] هو الضلع القائم [[a]]. وبما أن [[\\sin(A)=\\frac{a}{c}]]، فإن ضرب الوتر في الجيب يمدد النسبة بلا أبعاد لتعود طولًا هو [[a]]. يقيس المستخدم [[c]] و[[A]] بدل [[a]]، وينفذ الجداء [[c\\sin(A)]] التحويل بصمت داخل الصيغة." },
          { "kind": "h3", "text": "لماذا يُضرب الوتر في الضلع القائم المجاور؟" },
          { "kind": "p", "text": "القاعدة العامة لأي مثلث هي أن ضلعين والزاوية المحصورة بينهما يحددان المساحة. هنا الضلعان المعلومان هما [[b]] و[[c]]، وزاويتهما المحصورة هي [[A]]. تضرب الصيغة هذين الضلعين بالذات، ثم تكبر بـ[[\\sin(A)]] وتنصف. أي اقتران آخر من الأضلاع يتطلب زاوية محصورة مختلفة." },
          { "kind": "h3", "text": "هل تعمل هذه الصيغة مع مثلثات أخرى؟" },
          { "kind": "p", "text": "نعم، بصورتها العامة: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]]، حيث [[x]] و[[y]] ضلعان أيًّا كانا و[[\\theta]] هي الزاوية بينهما. نسخة المثلث القائم الزاوية هي تلك القاعدة مع [[x=b]] و[[y=c]] و[[\\theta=A]]. تضيف الحاسبة قيدًا واحدًا: يجب أن تحقق المدخلات الثلاثة أيضًا علاقات المثلث القائم الزاوية، مثل [[b=c\\cos(A)]]. تحسب الصيغة العامة مساحة لأي زوج زاوية محصورة؛ وتفسر هذه الحاسبة النتيجة بوصفها مثلثًا قائم الزاوية." }
        ],
        "imgAlt": "المثلث 3-4-5: sin A يساوي 3 على 5 يستعيد الضلع a يساوي 3، والمساحة 6 بالصيغتين",
        "figcaption": "من الجيب إلى المساحة: sin A = 3/5 يعطي a = 3، فيكون K = bc sin A / 2 = 6 موافقًا لـ K = ab/2."
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة مساحة المثلث القائم الزاوية من الضلع القائم والزاوية",
        "blocks": [
          { "kind": "p", "text": "تحتاج الحاسبة إلى ثلاثة مدخلات بالضبط، تُدخل بالترتيب. تتبع الخطوات أدناه تخطيط الشاشة من القياسات المعلومة إلى النتيجة المتحقق منها." }
        ],
        "steps": [
          "<strong>حدد الضلع القائم المجاور b.</strong> الضلع الذي يشكل الزاوية A مع الوتر.",
          "<strong>حدد الوتر c.</strong> أطول ضلع، المقابل للزاوية القائمة.",
          "<strong>حدد الزاوية الحادة المحصورة A.</strong> الزاوية الواقعة بين الضلع القائم b والوتر c.",
          "<strong>استخدم وحدات متوافقة للضلعين.</strong> أمتار مع أمتار، وأقدام مع أقدام، ولا تخلط أبدًا.",
          "<strong>أدخل الضلع القائم b في المدخل الأول.</strong> هذا هو الضلع المجاور للزاوية A.",
          "<strong>أدخل الوتر c في المدخل الثاني.</strong> يجب أن يتجاوز الضلع القائم b.",
          "<strong>أدخل الزاوية A بالدرجات.</strong> تتوقع الحاسبة الدرجات لا الراديان.",
          "<strong>تحقق من أن الزاوية بين 0 و90 درجة.</strong> تصف النهايتان لا مثلث.",
          "<strong>تحقق من أن الوتر أطول من الضلع القائم.</strong> إذا لم يكن c أكبر من b فهناك تسمية خاطئة.",
          "<strong>تحقق من أن القيم الثلاث تصف مثلثًا قائم الزاوية واحدًا.</strong> أكد أن b تساوي c cos(A)، على الأقل تقريبًا.",
          "<strong>انقر \"Calculate Area\".</strong> تظهر النتيجة مع التعويض معروضًا.",
          "<strong>راجع النتيجة.</strong> اقرأ المساحة وتأكد من أنها تبدو معقولة.",
          "<strong>اقرأ خطوات الحل.</strong> فهي تعرض الصيغة وقيمة الجيب والحساب.",
          "<strong>تحقق من أن النتيجة النهائية تستخدم وحدات مربعة.</strong> وحدات الطول مربعة، مطابقة للمدخلات.",
          "<strong>استخدم \"Reset\" قبل إدخال مسألة أخرى.</strong> فهو يمسح الحقول الثلاثة لبداية نظيفة."
        ],
        "closingParagraphs": [
          "تقدم الصفحة تكوين حاسبة واحدًا: [[b]] و[[c]] و[[A]]. لا يوجد وضع ثانٍ؛ فكل مساحة في هذه الصفحة تأتي من صيغة الجيب أعلاه."
        ]
      },
      "sec-consistency": {
        "h2": "كيفية التحقق من أن الضلع القائم والوتر والزاوية لديك تشكل مثلثًا قائم الزاوية صالحًا",
        "blocks": [
          { "kind": "p", "text": "المدخلات الثلاثة ليست مستقلة. في المثلث القائم الزاوية، [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]، ومن ثم [[[\\boxed{b=c\\cos(A)}]]] ثبت أي قيمتين من القيم الثلاث وقد حُسمت الثالثة. إدخال ثلاثة أرقام متنافرة لا يصف المثلث الذي تفترضه الصيغة." },
          { "kind": "h3", "text": "التحقق من الزاوية من طولي الضلعين" },
          { "kind": "p", "text": "عندما يُعرف [[b]] و[[c]] تكون الزاوية مفروضة: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. مثال: [[b=4]] و[[c=5]] يعطيان [[A=\\cos^{-1}(4/5)]]، [[[\\boxed{A\\approx36.87^\\circ}]]] إذا أبلغت المنقلة أو حساب سابق عن زاوية مختلفة لهذين الضلعين، فأحد الرقمين خاطئ. الضلعان يقرران؛ والزاوية تتبع." },
          { "kind": "h3", "text": "التحقق من طولي الضلعين من الزاوية" },
          { "kind": "p", "text": "يجري الفحص في الاتجاه الآخر أيضًا. بمعلومية [[c=10]] و[[A=60^\\circ]]، يجب أن يكون الضلع القائم المجاور [[b=10\\cos(60^\\circ)]]، [[[\\boxed{b=5}]]] إدخال [[b=8]] مع الوتر والزاوية نفسيهما لن يصف المثلث القائم الزاوية نفسه، لأن [[10\\cos(60^\\circ)]] يساوي 5 لا 8. كل زاوية لا تقبل إلا طول ضلع مجاور واحدًا لوتر ثابت." },
          { "kind": "h3", "text": "ماذا يحدث عندما تكون المدخلات غير متسقة؟" },
          { "kind": "p", "text": "ما تزال صيغة الضلعين والزاوية المحصورة العامة تعيد رقمًا للمدخلات غير المتسقة، لأنها تضرب كل ما تتلقاه. لكن عندما [[b\\neq c\\cos(A)]] لا تصف القياسات مثلثًا قائم الزاوية يكون [[c]] فيه الوتر و[[b]] ضلعه القائم المجاور. الإجابة العددية ليست برهانًا على هندسة صالحة؛ فحص الاتساق هو البرهان." },
          { "kind": "h3", "text": "شروط الإدخال الأساسية" },
          { "kind": "p", "text": "تحقق المدخلات الصالحة [[c>b>0]] و[[0^\\circ<A<90^\\circ]] و[[b=c\\cos(A)]]. الأول يبقي الوتر الأطول؛ والثاني يبقي الزاوية حادة؛ والثالث يربط القيم الثلاث في مثلث واحد. تحقق من الثلاثة قبل أن تثق بالمساحة." }
        ],
        "imgAlt": "ثلاث لوحات: 4 و5 و36.87 درجة صالحة؛ و5 و10 و60 درجة صالحة؛ و8 و10 و60 درجة غير صالحة",
        "figcaption": "المدخلات الصالحة تحقق b = c cos A؛ وتُظهر اللوحة الثالثة أن 10 cos 60 درجة = 5 لا يساوي 8."
      },
      "sec-examples": {
        "h2": "أمثلة خطوة بخطوة لمساحة المثلث القائم الزاوية باستخدام الضلع القائم والزاوية",
        "blocks": [
          { "kind": "p", "text": "تُظهر أربعة مثلثات قائمة الزاوية كلاسيكية الطريقة بأحجام متزايدة. يعوّض كل مثال في صيغة الجيب ثم يتحقق من النتيجة بصيغة الضلعين القائمين." },
          { "kind": "h3", "text": "مثال 1: المثلث القائم الزاوية 3-4-5" },
          { "kind": "p", "text": "بمعلومية [[b=4]] و[[c=5]] و[[A=36.87^\\circ]]. الخطوة 1: [[K=\\frac{bc\\sin(A)}{2}]]. الخطوة 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. الخطوة 3: [[\\sin(36.87^\\circ)\\approx0.6]]. الخطوة 4: [[K=\\frac{20\\times0.6}{2}]]، [[[\\boxed{K=6\\text{ square units}}]]] تحقق: [[a=5\\times0.6=3]]، و[[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "مثال 2: المثلث القائم الزاوية 5-12-13" },
          { "kind": "p", "text": "بمعلومية [[b=12]] و[[c=13]] و[[A\\approx22.62^\\circ]]، مع [[\\sin(A)=\\frac{5}{13}]]. عوّض: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. يُختصر العدد 13: [[K=\\frac{12\\times5}{2}]]، [[[\\boxed{K=30\\text{ square units}}]]] تحقق: [[a=13\\times(5/13)=5]]، و[[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "مثال 3: المثلث القائم الزاوية 8-15-17" },
          { "kind": "p", "text": "بمعلومية [[b=15]] و[[c=17]] و[[A\\approx28.07^\\circ]]، مع [[\\sin(A)=\\frac{8}{17}]]. إذن [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]]، [[[\\boxed{K=60\\text{ square units}}]]] تحقق: [[a=8]]، و[[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "مثال 4: المثلث القائم الزاوية 7-24-25" },
          { "kind": "p", "text": "بمعلومية [[b=24]] و[[c=25]] و[[A\\approx16.26^\\circ]]، مع [[\\sin(A)=\\frac{7}{25}]]. إذن [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]]، [[[\\boxed{K=84\\text{ square units}}]]] تحقق: [[a=7]]، و[[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "مقارنة الأمثلة التأسيسية" }
        ],
        "table": {
          "headers": ["نوع المثلث", "الضلع القائم المعلوم b", "الوتر c", "الزاوية A", "المساحة المحسوبة"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "تطبيقات واقعية لمساحة المثلث القائم الزاوية من الضلع القائم والزاوية",
        "blocks": [
          { "kind": "p", "text": "تنقل اثنتا عشرة حالة محلولة الصيغة من الصفحة إلى الورشة والموقع والاستوديو. تسمي كل حالة لوحة مثلثة قائمة الزاوية أو مقطعًا أو مجسمًا أو نموذجًا مبسطًا، وتعمل بمدخلات الحاسبة الثلاثة عبر الصيغة، وتذكر الافتراض الكامن وراء الأرقام. وحيث يكون الجسم الحقيقي منحنيًا أو غير منتظم، يقتصر الحساب على المثلث النموذج فقط." },
          { "kind": "h3", "text": "مثال 1: نافذة زجاجية مثلثة" },
          { "kind": "p", "text": "نافذة زجاجية مثلثة قائمة الزاوية أبعادها [[a=3\\text{ m}]] و[[b=4\\text{ m}]] و[[c=5\\text{ m}]]. مدخلات الحاسبة: [[b=4]] و[[c=5]] و[[A\\approx36.87^\\circ]]. عوّض: [[K=\\frac{4\\times5\\times0.6}{2}]]، [[[\\boxed{K=6\\text{ m}^2}]]] هذه هي مساحة الزجاج المثلثة المسطحة قبل طرح بدلات الإطار." },
          { "kind": "h3", "text": "مثال 2: لوحة دعم السقف" },
          { "kind": "p", "text": "مقطع دعم سقف مثلث قائم الزاوية أبعاده [[a=5\\text{ ft}]] و[[b=12\\text{ ft}]] و[[c=13\\text{ ft}]]. المدخلات: [[b=12]] و[[c=13]] و[[A\\approx22.62^\\circ]] و[[\\sin(A)=\\frac{5}{13}]]. إذن [[K=\\frac{12\\times13\\times(5/13)}{2}]]، [[[\\boxed{K=30\\text{ ft}^2}]]] تصف النتيجة مقطع الدعم المثلث المسطح، لا السقف كله." },
          { "kind": "h3", "text": "مثال 3: مجسم جانبي لمنحدر مثلث" },
          { "kind": "p", "text": "مجسم منحدر مثلث قائم الزاوية مبسط أبعاده [[a=6\\text{ m}]] و[[b=8\\text{ m}]] و[[c=10\\text{ m}]]. المدخلات: [[b=8]] و[[c=10]] و[[A\\approx36.87^\\circ]]. إذن [[K=\\frac{8\\times10\\times0.6}{2}]]، [[[\\boxed{K=24\\text{ m}^2}]]] هذا هو المجسم الجانبي المثلث، لا سطح المشي المائل." },
          { "kind": "h3", "text": "مثال 4: صفيحة وصل فولاذية" },
          { "kind": "p", "text": "صفيحة دعم فولاذية مثلثة أبعادها [[a=8\\text{ cm}]] و[[b=15\\text{ cm}]] و[[c=17\\text{ cm}]]. المدخلات: [[b=15]] و[[c=17]] و[[A\\approx28.07^\\circ]] و[[\\sin(A)=\\frac{8}{17}]]. إذن [[K=\\frac{15\\times17\\times(8/17)}{2}]]، [[[\\boxed{K=60\\text{ cm}^2}]]] المساحة وحدها لا تثبت القوة الإنشائية أو قدرة التحمل." },
          { "kind": "h3", "text": "مثال 5: مقطع حديقة مثلث" },
          { "kind": "p", "text": "مقطع حديقة مثلث قائم الزاوية مبسط أبعاده [[a=7\\text{ m}]] و[[b=24\\text{ m}]] و[[c=25\\text{ m}]]. المدخلات: [[b=24]] و[[c=25]] و[[A\\approx16.26^\\circ]] و[[\\sin(A)=\\frac{7}{25}]]. إذن [[K=\\frac{24\\times25\\times(7/25)}{2}]]، [[[\\boxed{K=84\\text{ m}^2}]]] يساعد هذا في تقدير مساحة المقطع المثلث للزراعة." },
          { "kind": "h3", "text": "مثال 6: لوحة شراع مثلثة" },
          { "kind": "p", "text": "مقطع شراع مثلث قائم الزاوية أبعاده [[a=9\\text{ ft}]] و[[b=12\\text{ ft}]] و[[c=15\\text{ ft}]]. المدخلات: [[b=12]] و[[c=15]] و[[A\\approx36.87^\\circ]]. إذن [[K=\\frac{12\\times15\\times0.6}{2}]]، [[[\\boxed{K=54\\text{ ft}^2}]]] الدرزات وبدلات القماش مستبعدة من رقم اللوحة المسطحة هذا." },
          { "kind": "h3", "text": "مثال 7: قالب قطع من الخشب الرقائقي" },
          { "kind": "p", "text": "قالب خشب رقائقي مثلث قائم الزاوية أبعاده [[a=12\\text{ cm}]] و[[b=16\\text{ cm}]] و[[c=20\\text{ cm}]]. المدخلات: [[b=16]] و[[c=20]] و[[A\\approx36.87^\\circ]]. إذن [[K=\\frac{16\\times20\\times0.6}{2}]]، [[[\\boxed{K=96\\text{ cm}^2}]]] تساعد المساحة في تقدير المادة المسطحة اللازمة قبل هدر القطع." },
          { "kind": "h3", "text": "مثال 8: لافتة طريق مثلثة" },
          { "kind": "p", "text": "لوحة لافتة مثلثة قائمة الزاوية أبعادها [[a=20\\text{ cm}]] و[[b=21\\text{ cm}]] و[[c=29\\text{ cm}]]. المدخلات: [[b=21]] و[[c=29]] و[[A\\approx43.60^\\circ]] و[[\\sin(A)=\\frac{20}{29}]]. إذن [[K=\\frac{21\\times29\\times(20/29)}{2}]]، [[[\\boxed{K=210\\text{ cm}^2}]]] يقدر هذا مساحة وجه اللافتة المسطحة." },
          { "kind": "h3", "text": "مثال 9: مقطع مساحة أرضية" },
          { "kind": "p", "text": "مقطع أرضي مثلث قائم الزاوية مساح أبعاده [[a=9\\text{ m}]] و[[b=40\\text{ m}]] و[[c=41\\text{ m}]]. المدخلات: [[b=40]] و[[c=41]] و[[A\\approx12.68^\\circ]] و[[\\sin(A)=\\frac{9}{41}]]. إذن [[K=\\frac{40\\times41\\times(9/41)}{2}]]، [[[\\boxed{K=180\\text{ m}^2}]]] تنطبق النتيجة على المقطع الأرضي المثلث القائم الزاوية المبسط." },
          { "kind": "h3", "text": "مثال 10: دعم مظلة مثلث" },
          { "kind": "p", "text": "مقطع دعم مظلة مثلث قائم الزاوية أبعاده [[a=15\\text{ ft}]] و[[b=20\\text{ ft}]] و[[c=25\\text{ ft}]]. المدخلات: [[b=20]] و[[c=25]] و[[A\\approx36.87^\\circ]]. إذن [[K=\\frac{20\\times25\\times0.6}{2}]]، [[[\\boxed{K=150\\text{ ft}^2}]]] هذا هو المقطع المثلث المسطح، لا كامل قماش المظلة غير المنتظم." },
          { "kind": "h3", "text": "مثال 11: مقطع عرضي لموقع صناعي" },
          { "kind": "p", "text": "مقطع أرض صناعي مثلث قائم الزاوية مبسط أبعاده [[a=11\\text{ m}]] و[[b=60\\text{ m}]] و[[c=61\\text{ m}]]. المدخلات: [[b=60]] و[[c=61]] و[[A\\approx10.39^\\circ]] و[[\\sin(A)=\\frac{11}{61}]]. إذن [[K=\\frac{60\\times61\\times(11/61)}{2}]]، [[[\\boxed{K=330\\text{ m}^2}]]] قد يحتاج الموقع الحقيقي غير المنتظم إلى التقسيم إلى أشكال متعددة." },
          { "kind": "h3", "text": "مثال 12: مقطع نهاية سقف مستودع" },
          { "kind": "p", "text": "مقطع نهاية سقف مستودع مثلث قائم الزاوية كبير أبعاده [[a=13\\text{ ft}]] و[[b=84\\text{ ft}]] و[[c=85\\text{ ft}]]. المدخلات: [[b=84]] و[[c=85]] و[[A\\approx8.80^\\circ]] و[[\\sin(A)=\\frac{13}{85}]]. إذن [[K=\\frac{84\\times85\\times(13/85)}{2}]]، [[[\\boxed{K=546\\text{ ft}^2}]]] تقدر النتيجة مقطع النهاية المثلث المسطح." },
          { "kind": "h3", "text": "مقارنة الأمثلة العملية" }
        ],
        "table": {
          "headers": ["التطبيق العملي", "الضلع القائم a", "الضلع القائم المعلوم b", "الوتر c", "الزاوية A", "المساحة المحسوبة", "وحدة القياس"],
          "rows": [
            ["نافذة زجاجية", "3", "4", "5", "36.87°", "6", "m²"],
            ["دعم السقف", "5", "12", "13", "22.62°", "30", "ft²"],
            ["مجسم المنحدر", "6", "8", "10", "36.87°", "24", "m²"],
            ["صفيحة الوصل", "8", "15", "17", "28.07°", "60", "cm²"],
            ["مقطع الحديقة", "7", "24", "25", "16.26°", "84", "m²"],
            ["لوحة الشراع", "9", "12", "15", "36.87°", "54", "ft²"],
            ["قالب الخشب الرقائقي", "12", "16", "20", "36.87°", "96", "cm²"],
            ["لافتة الطريق", "20", "21", "29", "43.60°", "210", "cm²"],
            ["مقطع المساحة", "9", "40", "41", "12.68°", "180", "m²"],
            ["دعم المظلة", "15", "20", "25", "36.87°", "150", "ft²"],
            ["المقطع الصناعي", "11", "60", "61", "10.39°", "330", "m²"],
            ["نهاية سقف المستودع", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "لماذا تعطي الصيغة المعتمدة على الجيب المساحة نفسها التي تعطيها صيغة الضلعين القائمين؟",
        "blocks": [
          { "kind": "p", "text": "ابدأ من [[K=\\frac{bc\\sin(A)}{2}]] وتذكر [[\\sin(A)=\\frac{a}{c}]]. عوّض: [[K=\\frac{bc(a/c)}{2}]]. يُختصر [[c]]، فيبقى [[[\\boxed{K=\\frac{ab}{2}}]]] لا تخترع صيغة الجيب مساحة جديدة؛ فهي تحسب المساحة نفسها من مجموعة معلومات مختلفة، والضلع القائم المفقود مهرب عبر نسبة الجيب." },
          { "kind": "h3", "text": "متى تكون صيغة الجيب أكثر فائدة؟" },
          { "kind": "p", "text": "استخدمها عندما يكون أحد الضلعين القائمين مقاسًا، والوتر معلومًا، والزاوية المحصورة متاحة، بينما لم يُقس الضلع الثالث مباشرة أبدًا. تصل قياسات الميدان والرسوم بمقياس وبيانات المساحة غالبًا بهذا التركيب بالذات. تحول الصيغة تلك الأرقام الثلاثة إلى مساحة في سطر واحد، دون الالتفاف لإيجاد الضلع القائم المفقود أولًا." },
          { "kind": "h3", "text": "متى تكون صيغة الضلعين أبسط؟" },
          { "kind": "p", "text": "عندما يكون الضلعان القائمان المتعامدان معلومين أصلًا، تكون [[K=\\frac{ab}{2}]] أقصر: لا جيب ولا زاوية، ضرب واحد وتنصيف. الجأ إلى نسخة الجيب فقط عندما يكون ضلع قائم مفقودًا ويمكن للزاوية أن تعوّضه." },
          { "kind": "h3", "text": "مقارنة عددية" },
          { "kind": "p", "text": "في المثلث 3-4-5، تعطي طريقة الجيب [[K=\\frac{4\\times5\\times0.6}{2}=6]]، وتعطي طريقة الضلعين [[K=\\frac{3\\times4}{2}=6]]. يمر الطريقان بالهندسة نفسها، فيجب أن يتفقا. وعندما لا يتفقان تكون المدخلات أو الحساب هو الخاطئ، لا الصيغتين أبدًا." }
        ]
      },
      "sec-angle-effect": {
        "h2": "كيف تؤثر الزاوية المحصورة على مساحة المثلث القائم الزاوية؟",
        "blocks": [
          { "kind": "p", "text": "مع ثبات الوتر لا يمكن للزاوية أن تتغير بحرية: تربط علاقات المثلث القائم الزاوية [[b]] و[[A]] معًا. ومعاملة ذلك القيد بصدق تُظهر بالضبط كيف ترتفع المساحة وتنخفض بينما تتحرك [[A]] بين 0 و90 درجة." },
          { "kind": "h3", "text": "ماذا يحدث عندما تزداد الزاوية A؟" },
          { "kind": "p", "text": "مع ثبات [[c]]، يكون [[b=c\\cos(A)]] و[[a=c\\sin(A)]]، فيكون [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. تعطي متطابقة ضعف الزاوية [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] تنمو المساحة كلما اقتربت [[A]] من 45 درجة من الأسفل، وتبلغ الذروة عند 45 درجة، ثم تنخفض نحو 90 درجة. تعطي الزاويتان المتتامتان، مثل 30° و60°، المساحة نفسها لأن [[\\sin(2A)]] متماثل حول 45 درجة." },
          { "kind": "h3", "text": "أقصى مساحة لوتر ثابت" },
          { "kind": "p", "text": "تقع الذروة عند [[A=45^\\circ]]، حيث [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] هناك يكون [[a=b=\\frac{c}{\\sqrt{2}}]]، فيكون المثلث المُعظِّم متساوي الساقين. لا يمكن لوتر ثابت أن يحيط بمساحة مثلثة قائمة الزاوية تزيد على ربع مربعه، ولا يبلغها إلا الشكل متساوي الساقين." },
          { "kind": "h3", "text": "مثال عددي" },
          { "kind": "p", "text": "بمعلومية [[c=10]]، يكون السقف [[K_{\\max}=\\frac{10^2}{4}]]، [[[\\boxed{K_{\\max}=25}]]] عند [[A=45^\\circ]] يكون الضلعان القائمان [[10/\\sqrt{2}\\approx7.07]] لكل منهما، و[[\\frac{7.07\\times7.07}{2}\\approx25]]. لاحظ أن 90° ليست مدخلًا حادًّا مقبولًا: فهي تُسقط المثلث إلى خط." }
        ]
      },
      "sec-alternative": {
        "h2": "هل يمكن حساب مساحة المثلث القائم الزاوية باستخدام ضلع قائم واحد وزاويته؟",
        "blocks": [
          { "kind": "p", "text": "نعم، بالظل لا بالجيب. إذا عُرف الضلع القائم [[b]] والزاوية [[A]]، يتبع الضلع القائم المقابل من [[a=b\\tan(A)]]. ضعه في [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]]، ومن ثم [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] ومن الركن الآخر، تعطي [[b=a\\tan(B)]] [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] هذه طرق بديلة حقيقية، مفيدة عندما يكون الوتر مجهولًا لكن ضلعًا قائمًا وزاويته في اليد. وهي بدائل رياضية، لا أوضاع إضافية في الحاسبة أعلاه، التي تعمل فقط مع [[b]] و[[c]] و[[A]]." }
        ]
      },
      "sec-units": {
        "h2": "فهم وحدات الزوايا والقياسات في حسابات المساحة",
        "blocks": [
          { "kind": "p", "text": "ترث المساحة وحدتها من الطولين المضروبين لتكوينها، بينما لا تسهم الزاوية بأي وحدة على الإطلاق. إبقاء المدخلات الثلاثة بوحدات متوافقة هو ما يبقي الإجابة صادقة." },
          { "kind": "h3", "text": "الدرجات مقابل الراديان" },
          { "kind": "p", "text": "تتوقع الحاسبة الدرجات. حوّل باستخدام [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]؛ فمثلًا [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. زاوية بوضع الراديان تُدخل في حقل وضع الدرجات تغير قيمة الجيب بصمت: [[\\sin(30^\\circ)=0.5]] لكن [[\\sin(30\\text{ radians})\\approx-0.99]]، ما يدمر المساحة. حوّل أولًا، ثم أدخل." },
          { "kind": "h3", "text": "لماذا لا وحدات للجيب" },
          { "kind": "p", "text": "الجيب نسبة طولين، فتُختصر الوحدات: المقابل على الوتر عدد خالص. تأتي الوحدات المربعة في الإجابة كلها من ضرب [[b]] في [[c]]. ولهذا فإن مسك دفاتر الوحدات في الصيغة بسيط: طابق وحدتي الطول، وتتبع وحدة المساحة." },
          { "kind": "h3", "text": "وحدات القياس الشائعة" },
          { "kind": "p", "text": "تعطي الأمتار أمتارًا مربعة، والسنتيمترات سنتيمترات مربعة، والأقدام أقدامًا مربعة، والبوصات بوصات مربعة: [[\\text{m}\\times\\text{m}=\\text{m}^2]]، والنمط نفسه ينطبق على كل وحدة طول. الوحدات المختلطة، كالسنتيمترات مع الأمتار، يجب تحويلها إلى وحدة واحدة قبل تطبيق الصيغة، وإلا فلا معنى نظيف للرقم." },
          { "kind": "h3", "text": "لماذا يمكن أن يؤثر التقريب المبكر على النتيجة" },
          { "kind": "p", "text": "احتفظ بالدقة الكاملة خلال الخطوات الوسيطة وقرّب الإجابة النهائية فقط. الزاوية الدقيقة الكامنة وراء 36.87° هي 36.869897°، وجيبها 0.6 بالضبط؛ تقريب الزاوية أولًا يحرك الجيب قليلًا، وتتضاعف تلك الشعرة عبر [[b]] و[[c]] إلى المساحة. صغيرة في مثلث واحد، وملحوظة عبر مشروع كامل." }
        ]
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند حساب مساحة المثلث القائم الزاوية من ضلع قائم وزاوية",
        "blocks": [
          { "kind": "p", "text": "تعود كل إجابة خاطئة تقريبًا في هذا الموضوع إلى مدخل موسوم خطأً لا إلى حساب سيئ. الأخطاء الستة عشر أدناه هي التي تتكرر مرارًا، ولكل منها سببه وعلاجه." },
          { "kind": "h3", "text": "1. الخلط بين الوتر والضلع القائم العمودي" },
          { "kind": "p", "text": "الوتر هو الضلع المقابل للزاوية القائمة وأطول ضلع؛ والضلع القائم يلتقي بالزاوية القائمة. تبديلهما يدخل طولًا خاطئًا في [[c]]. العلاج: جد الزاوية القائمة أولًا، ثم خذ الضلع المقابل لها." },
          { "kind": "h3", "text": "2. إقران الزاوية A بالضلع القائم الخطأ" },
          { "kind": "p", "text": "تقع الزاوية [[A]] بين الضلع القائم [[b]] والوتر [[c]]. إقرانها بالضلع القائم [[a]] يخلخل علاقة الزاوية المحصورة التي تفترضها الصيغة. العلاج: تتبع الضلعين اللذين يشكلان الزاوية التي أدخلتها." },
          { "kind": "h3", "text": "3. الخلط بين الضلعين المقابل والمجاور" },
          { "kind": "p", "text": "المقابل يعني عبر الزاوية؛ والمجاور يعني ملامسًا لها، بجانب الوتر. تتبدل التسميات عندما تتغير الزاوية المرجعية. العلاج: قف عند الزاوية [[A]] وسمِّ كل ضلع من هناك." },
          { "kind": "h3", "text": "4. استخدام الزاوية B بدل الزاوية A دون تغيير الضلع المناظر" },
          { "kind": "p", "text": "تقترن الزاوية [[B]] بالضلعين [[a]] و[[c]]، لا [[b]] و[[c]]. إدخال [[B]] مع الإبقاء على [[b]] و[[c]] يحسب مقدارًا مختلفًا. العلاج: أبقِ كل زاوية مع اقتران أضلاعها الخاص، أو حوّل [[B]] إلى [[A]] أولًا." },
          { "kind": "h3", "text": "5. استخدام الراديان عندما تتوقع الحاسبة الدرجات" },
          { "kind": "p", "text": "إدخال 0.6435 (راديان) حيث 36.87 (درجات) يغير [[\\sin(A)]] تمامًا. العلاج: تحقق من وحدة الحاسبة، وحوّل باستخدام [[\\times\\frac{180}{\\pi}]] عند الحاجة، ثم أدخل." },
          { "kind": "h3", "text": "6. نسيان القسمة على اثنين" },
          { "kind": "p", "text": "ضرب [[b\\times c\\times\\sin(A)]] يعطي مساحة متوازي الأضلاع المحيط، أي ضعف مساحة المثلث. العلاج: نصّف الجداء؛ فالقسمة على 2 جزء من الصيغة وليست اختيارية." },
          { "kind": "h3", "text": "7. نسيان دالة الجيب" },
          { "kind": "p", "text": "حساب [[\\frac{bc}{2}]] وحده يعامل [[\\sin(A)]] كأنه 1، وهذا لا يتحقق إلا عند 90°، وهي مدخل حاد مستحيل. العلاج: أدرج [[\\sin(A)]]؛ فهو يحمل حصة الضلع القائم المفقود." },
          { "kind": "h3", "text": "8. إدخال ضلع قائم أطول من الوتر" },
          { "kind": "p", "text": "لا يمكن لأي ضلع قائم أن يتجاوز الوتر، فكون [[c\\leq b]] يعني أن تسمية خاطئة. العلاج: أعد تحديد الأضلاع؛ فأطول قياس هو [[c]]." },
          { "kind": "h3", "text": "9. إدخال زاوية 0 درجة" },
          { "kind": "p", "text": "عند 0° يكون [[\\sin(A)=0]] وينهار المثلث إلى خط بمساحة صفر. العلاج: استخدم زاوية حادة حقيقية، محصورة تمامًا بين 0° و90°." },
          { "kind": "h3", "text": "10. إدخال زاوية 90 درجة بوصفها زاوية حادة" },
          { "kind": "p", "text": "90° هي الزاوية القائمة [[C]]، لا زاوية حادة؛ و[[\\sin(90^\\circ)=1]] تحول الصيغة إلى [[\\frac{bc}{2}]]، وهي ليست مساحة هذا المثلث. العلاج: أدخل الزاوية الحادة الواقعة بين [[b]] و[[c]]." },
          { "kind": "h3", "text": "11. خلط وحدات طول مختلفة" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] مع [[c=5\\text{ m}]] يضرب مقياسين غير متوافقين. العلاج: حوّل كليهما إلى وحدة واحدة (400 cm = 4 m) قبل الحساب." },
          { "kind": "h3", "text": "12. الإبلاغ عن المساحة بوحدات خطية" },
          { "kind": "p", "text": "مساحة 6 m² ليست 6 m. العلاج: اكتب الوحدة المربعة مع الرقم، في كل مرة." },
          { "kind": "h3", "text": "13. تقريب الزاوية مبكرًا جدًّا" },
          { "kind": "p", "text": "تقريب 36.869897° إلى 36.87° قبل أخذ الجيب يزيح النتيجة قليلًا؛ والتقريب إلى 37° يزيحها أكثر. العلاج: احتفظ بالدقة الكاملة حتى الإجابة النهائية." },
          { "kind": "h3", "text": "14. افتراض أن المدخلات الثلاثة يمكن اختيارها باستقلال" },
          { "kind": "p", "text": "يرتبط [[b]] و[[c]] و[[A]] بعلاقة [[b=c\\cos(A)]]؛ فاختيار الثلاثة بحرية يفرط في تحديد المثلث. العلاج: اشتق القيمة الثالثة من القيمتين الأخريين بدل اختراعها." },
          { "kind": "h3", "text": "15. استخدام زاوية غير متسقة مع أطوال الأضلاع المدخلة" },
          { "kind": "p", "text": "يفشل [[b=8]] و[[c=10]] و[[A=60^\\circ]] في الفحص، لأن [[10\\cos(60^\\circ)=5\\neq8]]. ما تزال الصيغة تعيد رقمًا، لكنه ليس مساحة هذا المثلث القائم الزاوية. العلاج: نفّذ فحص [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. افتراض أن نتيجة الحاسبة العددية تمثل دائمًا مثلثًا قائم الزاوية صالحًا" },
          { "kind": "p", "text": "ينجح الحساب على أي أرقام تُكتب؛ والهندسة لا. العلاج: تحقق بفحوص الاتساق وصيغة مستقلة قبل الوثوق بالإجابة." },
          { "kind": "h3", "text": "الخطأ مقابل الصواب: مثال ملموس" },
          { "kind": "p", "text": "استخدم [[b=4]] و[[c=5]] و[[A=36.87^\\circ]]. الصواب: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. إدخال الزاوية [[B=53.13^\\circ]] خطأً مع الأضلاع نفسها: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. الزاوية [[B]] ليست الزاوية المحصورة بين [[b]] و[[c]]؛ واقتران أضلاعها الصحيح هو [[a]] و[[c]]. الخطأ غير مرئي في الحساب وواضح في الهندسة." }
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق من صحة مساحة المثلث القائم الزاوية",
        "blocks": [
          { "kind": "p", "text": "سبعة فحوص مستقلة، وكلها موضحة على المثلث 3-4-5 ([[a=3]] و[[b=4]] و[[c=5]] و[[A\\approx36.87^\\circ]]). الاتفاق بين الطرق المختلفة هو أقوى دليل على صحة الإجابة." },
          { "kind": "h3", "text": "الطريقة 1: تحقق من الصيغة الرئيسية" },
          { "kind": "p", "text": "أعد حساب [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. تمريرة ثانية تلتقط الأخطاء المطبعية والزوايا المدخلة خطأً." },
          { "kind": "h3", "text": "الطريقة 2: تحقق من علاقة جيب التمام" },
          { "kind": "p", "text": "أكد [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. عدم التطابق يعني أن الزاوية والأضلاع تنتمي إلى مثلثين مختلفين." },
          { "kind": "h3", "text": "الطريقة 3: احسب الضلع القائم المفقود" },
          { "kind": "p", "text": "أكد [[a=c\\sin(A)]]: [[5\\times0.6=3]]. يتحقق هذا من قيمة الجيب المغذية لصيغة المساحة." },
          { "kind": "h3", "text": "الطريقة 4: تحقق من نظرية فيثاغورس" },
          { "kind": "p", "text": "أكد [[a^2+b^2=c^2]]: [[9+16=25]]. الفشل هنا يعني أن تحديد الأضلاع خاطئ." },
          { "kind": "h3", "text": "الطريقة 5: تحقق باستخدام الضلعين القائمين" },
          { "kind": "p", "text": "أكد [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. طريقتان، ومثلث واحد، وإجابة واحدة." },
          { "kind": "h3", "text": "الطريقة 6: تحقق من الزاويتين المتتامتين" },
          { "kind": "p", "text": "أكد [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. يلتقط هذا زاوية قيست عند الركن الخطأ." },
          { "kind": "h3", "text": "الطريقة 7: تحقق من أقصى مساحة" },
          { "kind": "p", "text": "أكد [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. مساحة فوق السقف مستحيلة للوتر المعطى." }
        ]
      },
      "sec-applications": {
        "h2": "مساحة المثلث القائم الزاوية من الضلع القائم والزاوية في التطبيق العملي",
        "blocks": [
          { "kind": "p", "text": "تظهر المدخلات الثلاثة نفسها في أماكن لا تذكر علم المثلثات أبدًا. يقيس الزجاج ضلع النافذة القائم وقطرها ويقرأ الزاوية من الإطار؛ ويعرف عامل السقف وتر الدعم من طول العارضة والزاوية من الميل. في كل حالة يكون الضلع العمودي المفقود هو الأصعب بلوغًا بشريط القياس، بينما الوتر والزاوية في متناول اليد. توجد صيغة الجيب لهذا التفاوت بالذات: فهي تحول القياسات المتاحة إلى الارتفاع غير المتاح ثم إلى المساحة." },
          { "kind": "p", "text": "تُظهر اللوحات الأربع أدناه النمط بمقاييس مختلفة. تستخدم نافذة زجاجية (6 m²) ومجسم منحدر (24 m²) هندسة 3-4-5 و6-8-10 بمقياس المتر؛ ويستخدم دعم السقف (30 ft²) المثلث 5-12-13؛ ويستخدم مقطع المساحة (84 m²) المثلث 7-24-25. تسمي كل لوحة الضلع القائم المجاور والوتر والزاوية المحصورة والمساحة الناتجة، فيبقى الطريق من القياس إلى الإجابة مرئيًا." }
        ],
        "imgAlt": "أربع لوحات: نافذة زجاجية 6 م2، ولوحة سقف 30 قدم2، ومجسم منحدر 24 م2، ومقطع مساحة 84 م2",
        "figcaption": "أربعة استخدامات حقيقية: نافذة، ودعم سقف، ومجسم منحدر، ومقطع مساحة مع مساحاتها."
      },
      "sec-faq": {
        "h2": "الأسئلة الشائعة",
        "blocks": [
          { "kind": "p", "text": "فيما يلي إجابات عن أكثر الأسئلة شيوعًا حول المساحة من الضلع القائم والزاوية." }
        ]
      },
      "sec-related": {
        "h2": "استكشف حاسبات المثلث القائم الزاوية ذات الصلة",
        "blocks": [
          { "kind": "p", "text": "قياسات مختلفة تتطلب حاسبات مختلفة." }
        ]
      },
      "sec-conclusion": {
        "h2": "ثلاثة مدخلات تحمل المساحة كلها",
        "blocks": [
          { "kind": "p", "text": "يتضح أن ضلعًا قائمًا واحدًا والوتر والزاوية بينهما تكفي. يعيد نسبة الجيب بناء الضلع القائم المفقود، ويحول التنصيف المستطيل المحيط إلى المثلث، وتتيح علاقات الاتساق فحص كل مدخل مقابل الآخرين. لا شيء في الطريقة تقريبي عندما تكون المدخلات دقيقة." },
          { "kind": "p", "text": "عادة العمل بسيطة: سمِّ الأضلاع انطلاقًا من الزاوية A، وأبقِ الوحدات متطابقة، وأكد b = c cos(A)، وتحقق من الإجابة عبر صيغة الضلعين القائمين. بهذه العادات تصبح K = bc sin(A)/2 موثوقة كأي حساب مساحة في الهندسة." }
        ]
      }
    }
  },
  "bg": {
    "faqs": [
      {
        "question": "Каква е формулата за лице с един катет и ъгъл?",
        "answer": "K = bc sin(A) / 2, където b е катетът, съседен на ъгъл A, c е хипотенузата, а A е острият ъгъл между тях. Например b = 4, c = 5 и A = 36.87° дават K = (4 × 5 × 0.6) / 2 = 6 квадратни единици. Ъгълът трябва да се въведе в градуси, а двете страни трябва да използват една и съща мерна единица за дължина."
      },
      {
        "question": "Защо формулата използва синус?",
        "answer": "Синусът възстановява липсващия перпендикулярен катет от хипотенузата: тъй като sin(A) = a/c, умножението дава a = c sin(A). Стандартното правило за лице изисква двата катета, K = ab/2, така че заместването на израза със синус за a дава K = bc sin(A)/2. Синусът е мостът между измерената хипотенуза и неизмерената височина."
      },
      {
        "question": "Коя страна е съседна на ъгъл A?",
        "answer": "Катетът b е съседен на ъгъл A: той е една от двете страни, образуващи този ъгъл, а другата е хипотенузата c. Катетът a е срещуположен на ъгъл A и лежи срещу него в триъгълника. Ако смените отправната точка на ъгъл B, етикетите се разменят: b става срещуположна страна, а a става съседна."
      },
      {
        "question": "Мога ли да изчисля лицето, без да знам липсващия катет?",
        "answer": "Да, това е целият смисъл на този калкулатор. Синусът на ъгъл A кодира отношението на липсващия катет към хипотенузата, така че c sin(A) възстановява катета a без измерване. Въведете b, c и A, а формулата се грижи за останалото. Никога не ви е нужна третата страна като отделен вход."
      },
      {
        "question": "Каква е разликата между ъгъл A и ъгъл B?",
        "answer": "И двата са острите ъгли на правоъгълния триъгълник и A + B = 90°. Ъгъл A лежи между катета b и хипотенузата c; ъгъл B лежи между катета a и хипотенузата c. Формулата K = bc sin(A)/2 изисква именно ъгъл A. Използването на ъгъл B със страните b и c дава грешен отговор; ъгъл B се съчетава със страните a и c."
      },
      {
        "question": "Калкулаторът използва ли градуси или радиани?",
        "answer": "Градуси. Въвеждането на радианна стойност дава съвсем различен синус и грешно лице, защото калкулаторът тълкува числото като градуси. Първо преобразувайте радианите в градуси чрез градуси = радиани × 180/π; например π/6 радиана са равни на 30°. Винаги потвърждавайте мерната единица на ъгъла преди изчисление, тъй като полето не предупреждава при грешна единица."
      },
      {
        "question": "Мога ли да използвам произволен ъгъл при дадени катет и хипотенуза?",
        "answer": "Не. Трите входа трябва да удовлетворяват b = c cos(A), така че ъгълът е фиксиран, щом страните са избрани. При b = 4 и c = 5 ъгъл A трябва да е около 36.87°. Въвеждането на различен ъгъл описва различен триъгълник и резултатът няма да съответства на търсения правоъгълен триъгълник."
      },
      {
        "question": "Как да проверя дали измерванията ми образуват валиден правоъгълен триъгълник?",
        "answer": "Проверете три условия: хипотенузата надвишава катета (c > b > 0), ъгълът е строго между 0° и 90° и е изпълнено b = c cos(A). За допълнителна сигурност проверете a = c sin(A) и Питагоровата теорема a² + b² = c². Ако някоя проверка се провали, поне едно измерване или етикет е грешно."
      },
      {
        "question": "Мога ли да изчисля лицето, ако знам двата катета?",
        "answer": "Да, и по-кратката формула K = ab/2 се прилага директно, без нужда от ъгъл или синус. За катети 3 и 4, K = 6. Синусният калкулатор е проектиран за случая, когато един катет липсва; когато и двата катета са известни, формулата с двата катета е по-проста и дава същия резултат."
      },
      {
        "question": "Какво става, ако въведа грешен ъгъл?",
        "answer": "Калкулаторът умножава каквото получи, така че грешен ъгъл дава грешно лице без предупреждение. Въвеждането на ъгъл B = 53.13° вместо A = 36.87° при b = 4 и c = 5 дава 8 вместо 6. Винаги се уверявайте, че въведеният ъгъл е този между катета b и хипотенузата."
      },
      {
        "question": "Какво е максималното възможно лице при фиксирана хипотенуза?",
        "answer": "K = c²/4, постига се когато ъгъл A = 45° и триъгълникът е равнобедрен с катети c/√2. При хипотенуза 10 таванът е 25 квадратни единици. Никой правоъгълен триъгълник с тази хипотенуза не може да обхване по-голямо лице. Ако резултатът ви надвишава c²/4, входовете са несъвместими."
      },
      {
        "question": "Каква е разликата между синусната формула и стандартната формула основа-височина?",
        "answer": "Няма математическа разлика: заместването на sin(A) = a/c в K = bc sin(A)/2 дава K = ab/2, стандартното правило основа-височина. Синусният вариант е просто същата формула, преписана за различни известни. Използвайте синусната форма, когато са известни хипотенузата и ъгълът; използвайте ab/2, когато са известни двата катета."
      }
    ],
    "relatedHeading": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
    "relatedItems": [
      "Калкулатор за лице на правоъгълен триъгълник",
      "Калкулатор за лице на правоъгълен триъгълник от два катета",
      "Калкулатор за лице на правоъгълен триъгълник от ъгъл",
      "Калкулатор за страна на правоъгълен триъгълник от ъгъл",
      "Калкулатор за страна на правоъгълен триъгълник",
      "Калкулатор за тригонометрични съотношения на правоъгълен триъгълник"
    ],
    "relatedIntro": "Различните измервания изискват различни калкулатори.",
    "faqHeading": "Често задавани въпроси",
    "tocHeading": "В това ръководство",
    "tocItems": {
      "sec-intro": "Как се изчислява лицето на правоъгълен триъгълник с катет и ъгъл",
      "sec-anatomy": "Страните и ъглите на правоъгълния триъгълник",
      "sec-sine": "Синусът в изчисленията с правоъгълен триъгълник",
      "sec-formula": "Защо формулата за лице на правоъгълен триъгълник използва синус?",
      "sec-howto": "Как се използва калкулаторът за лице на правоъгълен триъгълник от катет и ъгъл",
      "sec-consistency": "Как да проверите дали катетът, хипотенузата и ъгълът образуват валиден правоъгълен триъгълник",
      "sec-examples": "Примери стъпка по стъпка за лице на правоъгълен триъгълник с катет и ъгъл",
      "sec-practical": "Приложения в реалния живот на лицето на правоъгълен триъгълник от катет и ъгъл",
      "sec-compare": "Защо синусната формула дава същото лице като формулата с двата катета?",
      "sec-angle-effect": "Как заключеният ъгъл влияе върху лицето на правоъгълен триъгълник?",
      "sec-alternative": "Може ли да се изчисли лицето на правоъгълен триъгълник само с един катет и неговия ъгъл?",
      "sec-units": "Единици за ъгли и измервания в изчисленията на лице",
      "sec-mistakes": "Чести грешки при изчисляване на лицето на правоъгълен триъгълник от катет и ъгъл",
      "sec-verify": "Как да проверите дали лицето на правоъгълния ви триъгълник е вярно",
      "sec-applications": "Лицето на правоъгълен триъгълник от катет и ъгъл в практиката",
      "sec-related": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
      "sec-faq": "Често задавани въпроси",
      "sec-conclusion": "Три входни данни носят цялото лице"
    },
    "sections": {
      "sec-intro": {
        "h2": "Как се изчислява лицето на правоъгълен триъгълник с катет и ъгъл",
        "blocks": [
          { "kind": "p", "text": "Вземете [[b=4]], [[c=5]] и [[A=36.87^\\circ]]. Приложете [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Резултатът назовава общата плоска площ, обградена от трите страни: шест квадратни единици повърхност. Това е точно онова, което калкулаторът за лице на правоъгълен триъгълник от катет и ъгъл връща за тези входове." },
          { "kind": "p", "text": "Калкулаторът изисква три измервания. Катетът [[b]] се намира до ъгъл [[A]]; хипотенузата [[c]] е най-дългата страна, срещу правия ъгъл; а ъгъл [[A]] е острият ъгъл, притиснат между тях. Тъй като [[\\sin(A)]] е равно на отношението на липсващия катет [[a]] към хипотенузата [[c]], формулата възстановява липсващата височина, без да я измерва. Умножаването на [[b]], [[c]] и [[\\sin(A)]] образува ограждащия правоъгълник; деленето на две го подрязва до триъгълника." },
          { "kind": "p", "text": "Това е важно винаги, когато третата страна е неудобна за измерване. Чертежът може да даде хипотенузата и един катет, докато транспортирът или по-ранна стъпка доставят ъгъла. Синусът запълва празнината, така че лицето следва от вече известното." }
        ]
      },
      "sec-anatomy": {
        "h2": "Страните и ъглите на правоъгълния триъгълник",
        "blocks": [
          { "kind": "p", "text": "Преди формулата да придобие смисъл, етикетите трябва да са точни. Всеки символ по-долу се появява в калкулатора и носи едно единствено фиксирано значение." },
          { "kind": "h3", "text": "Какво е правоъгълен триъгълник?" },
          { "kind": "p", "text": "Правоъгълният триъгълник е триъгълник с един вътрешен ъгъл, равен на 90 градуса. Двете страни, образуващи този ъгъл, са катетите, перпендикулярни една на друга; страната срещу правия ъгъл е хипотенузата. Тъй като трите вътрешни ъгъла имат сбор 180 градуса, двата остри ъгъла удовлетворяват [[A+B=90^\\circ]], което ги прави допълващи се: познаването на единия определя другия." },
          { "kind": "h3", "text": "Какво е хипотенуза?" },
          { "kind": "p", "text": "Хипотенузата е страната срещу правия ъгъл. Тя винаги е най-дългата страна, независимо как е завъртян или начертан триъгълникът. Калкулаторът я използва като страна [[c]], затова правилното ѝ идентифициране е първата стъпка: намерете правия ъгъл, после вземете страната срещу него. Катет никога не може да играе тази роля, колкото и дълъг да изглежда в наклонен чертеж." },
          { "kind": "h3", "text": "Какви са двата катета?" },
          { "kind": "p", "text": "Двата катета са страните, които се срещат при правия ъгъл, перпендикулярни една на друга. Катетът [[a]] лежи срещу ъгъл [[A]]; катетът [[b]] лежи срещу ъгъл [[B]]. Калкулаторът взема катета [[b]], съседния на ъгъл [[A]], като свой първи вход. Заедно двата катета образуват ъгъла, където живее 90-градусовият ъгъл." },
          { "kind": "h3", "text": "Разбиране на ъгъл A" },
          { "kind": "p", "text": "Ъгъл [[A]] е острият ъгъл, образуван от катета [[b]] и хипотенузата [[c]]. Той е заключеният ъгъл между двата входни страни на калкулатора, така че [[\\angle A=\\text{angle between }b\\text{ and }c]]. Това съчетаване е фиксирано: където и да спомене формулата [[A]], тя има предвид ъгъла, където известният катет среща хипотенузата, а не ъгъла в далечния край на катета [[b]]." },
          { "kind": "h3", "text": "Срещуположни и съседни страни спрямо ъгъл A" },
          { "kind": "p", "text": "Застанете при ъгъл [[A]] и погледнете през триъгълника. Страната, която гледате, без да я докосвате, е срещуположната страна; страната, образуваща ъгъла заедно с хипотенузата, е съседната страна. Тези етикети следват отправния ъгъл, така че смяната на отправната точка от [[A]] на [[B]] разменя кой катет е кой. Накратко: страна a е срещуположна на ъгъл A, страна b е съседна на ъгъл A, а страна c е хипотенузата." },
          { "kind": "h3", "text": "Разбиране на заключения ъгъл" },
          { "kind": "p", "text": "Заключеният ъгъл е ъгълът, образуван от две избрани страни. Формулата за лице умножава [[b]] и [[c]], затова ъгълът, от който се нуждае, е притиснатият между тях: ъгъл [[A]]. Правилното съчетаване за този калкулатор е [[b,\\;c,\\;A]]. Използването на който и да е друг ъгъл със същите две страни нарушава съчетаването, което формулата предполага, затова не бъркайте ъгъл [[A]] с ъгъл [[B]]." }
        ],
        "imgAlt": "Правоъгълен триъгълник ABC: катет b и хипотенуза c са подчертани, заключеният ъгъл A, липсващият катет a е етикетиран",
        "figcaption": "Триъгълник ABC: подчертаните съседен катет b и хипотенуза c образуват заключения ъгъл A; страна a е липсващият срещуположен катет."
      },
      "sec-sine": {
        "h2": "Синусът в изчисленията с правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "Синусът е отношение, а не дължина. За остър ъгъл [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] В този триъгълник то става [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Отношението сравнява страната срещу ъгъла с най-дългата страна, затова е чисто число без единици. За остър ъгъл стойността му винаги е между 0 и 1 и именно то позволява една страна да замести друга." },
          { "kind": "h3", "text": "Как синусът помага да се намери липсващият катет" },
          { "kind": "p", "text": "Започнете от [[\\sin(A)=\\frac{a}{c}]]. Умножете двете страни по [[c]]: [[[\\boxed{a=c\\sin(A)}]]] Хипотенузата мащабира отношението обратно в дължина, а тази дължина е липсващият катет. Калкулаторът никога не пита за [[a]], защото това единствено пренареждане го възстановява от [[c]] и [[A]]. Всяка следваща стъпка на формулата за лице почива на това заместване." },
          { "kind": "h3", "text": "Числов пример" },
          { "kind": "p", "text": "При [[c=5]] и [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Липсващият катет е дълъг 3 единици, което довършва познатия триъгълник 3-4-5. Едно умножение замени отделно измерване." },
          { "kind": "h3", "text": "Как синусът се различава от косинус и тангенс" },
          { "kind": "p", "text": "Косинусът използва съседната страна: [[\\cos(A)=\\frac{b}{c}]]. Тангенсът използва двата катета: [[\\tan(A)=\\frac{a}{b}]]. Всяко отношение отговаря на различен въпрос. Синусът е онова, от което се нуждае този калкулатор, защото неизвестната е срещуположният катет [[a]], а известната страна е хипотенузата [[c]]. Когато известните се променят, полезно се променя и отношението, но нищо друго в това ръководство не напуска семейството на синуса." }
        ]
      },
      "sec-formula": {
        "h2": "Защо формулата за лице на правоъгълен триъгълник използва синус?",
        "blocks": [
          { "kind": "p", "text": "Започнете със стандартното правило: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. За този триъгълник естествената основа е катетът [[b]], а перпендикулярната височина е катетът [[a]], тъй като катетите се срещат под 90 градуса. Това дава [[K=\\frac{ab}{2}]]. Калкулаторът не пита за [[a]], затова формулата трябва да го възстанови. От синусното отношение [[a=c\\sin(A)]]. Заместете: [[K=\\frac{b(c\\sin(A))}{2}]], следователно [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Деленето на две оцелява от правилото основа-височина; синусният множител е липсващият катет под прикритие." },
          { "kind": "h3", "text": "Защо формулата се дели на две?" },
          { "kind": "p", "text": "Триъгълник с дадена основа и перпендикулярна височина запълва точно половината от успоредника, построен върху същата основа и височина. Удвояването на кой да е триъгълник по една страна довършва този успоредник, така че триъгълникът притежава половината от лицето му. Деленето на две е геометрия, не конвенция, и важи независимо коя формула доставя основата и височината." },
          { "kind": "h3", "text": "Как синусът замества липсващата височина?" },
          { "kind": "p", "text": "Перпендикулярната височина в [[K=\\frac{ab}{2}]] е катетът [[a]]. Тъй като [[\\sin(A)=\\frac{a}{c}]], умножаването на хипотенузата по синуса разтяга безразмерното отношение обратно в дължината [[a]]. Потребителят измерва [[c]] и [[A]] вместо [[a]], а произведението [[c\\sin(A)]] извършва преобразуването безшумно вътре във формулата." },
          { "kind": "h3", "text": "Защо хипотенузата се умножава по съседния катет?" },
          { "kind": "p", "text": "Общото правило за всеки триъгълник е, че две страни и заключеният им ъгъл определят лицето. Тук двете известни страни са [[b]] и [[c]], а заключеният им ъгъл е [[A]]. Формулата умножава точно тези две страни, после мащабира с [[\\sin(A)]] и дели на две. Всяко друго съчетаване на страни би изисквало различен заключен ъгъл." },
          { "kind": "h3", "text": "Работи ли тази формула за други триъгълници?" },
          { "kind": "p", "text": "Да, в общата си форма: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]]], където [[x]] и [[y]] са които и да е две страни, а [[\\theta]] е ъгълът между тях. Версията за правоъгълен триъгълник е това правило с [[x=b]], [[y=c]] и [[\\theta=A]]. Калкулаторът добавя едно ограничение: трите входа трябва да удовлетворяват и правоъгълните отношения, като [[b=c\\cos(A)]]. Общата формула изчислява лице за всяка двойка заключен ъгъл; този калкулатор тълкува резултата като правоъгълен триъгълник." }
        ],
        "imgAlt": "Триъгълник 3-4-5: sin A, равен на 3 върху 5, възстановява катета a, равен на 3, лице 6 по двете формули",
        "figcaption": "От синус към лице: sin A = 3/5 дава a = 3, така че K = bc sin A / 2 = 6 съвпада с K = ab/2."
      },
      "sec-howto": {
        "h2": "Как се използва калкулаторът за лице на правоъгълен триъгълник от катет и ъгъл",
        "blocks": [
          { "kind": "p", "text": "Калкулаторът се нуждае от точно три входа, въведени по ред. Стъпките по-долу следват оформлението на екрана от известните измервания до проверен резултат." }
        ],
        "steps": [
          "<strong>Определете съседния катет b.</strong> Катетът, който образува ъгъл A заедно с хипотенузата.",
          "<strong>Определете хипотенузата c.</strong> Най-дългата страна, срещу правия ъгъл.",
          "<strong>Определете заключения остър ъгъл A.</strong> Ъгълът между катета b и хипотенузата c.",
          "<strong>Използвайте съвместими единици за двете страни.</strong> Метри с метри, футове с футове, никога смесени.",
          "<strong>Въведете катета b в първото поле.</strong> Това е катетът, съседен на ъгъл A.",
          "<strong>Въведете хипотенузата c във второто поле.</strong> Тя трябва да надвишава катета b.",
          "<strong>Въведете ъгъл A в градуси.</strong> Калкулаторът очаква градуси, не радиани.",
          "<strong>Проверете дали ъгълът е между 0 и 90 градуса.</strong> Крайните точки не описват триъгълник.",
          "<strong>Проверете дали хипотенузата е по-дълга от катета.</strong> Ако c не е по-голямо от b, някой етикет е грешен.",
          "<strong>Проверете дали трите стойности описват един правоъгълен триъгълник.</strong> Потвърдете, че b е равно на c cos(A), поне приблизително.",
          "<strong>Натиснете \"Calculate Area\".</strong> Резултатът се появява с показано заместване.",
          "<strong>Прегледайте резултата.</strong> Прочетете лицето и потвърдете, че изглежда разумно.",
          "<strong>Прочетете стъпките на решението.</strong> Те показват формулата, стойността на синуса и аритметиката.",
          "<strong>Проверете дали крайният резултат използва квадратни единици.</strong> Мерни единици за дължина на квадрат, съответстващи на входовете.",
          "<strong>Използвайте \"Reset\", преди да въведете друга задача.</strong> Той изчиства трите полета за чист старт."
        ],
        "closingParagraphs": [
          "Страницата предлага една конфигурация на калкулатора: [[b]], [[c]] и [[A]]. Няма втори режим; всяко лице на тази страница идва от синусната формула по-горе."
        ]
      },
      "sec-consistency": {
        "h2": "Как да проверите дали катетът, хипотенузата и ъгълът образуват валиден правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "Трите входа не са независими. В правоъгълен триъгълник [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], следователно [[[\\boxed{b=c\\cos(A)}]]] Фиксирайте които и да е две от трите стойности и третата вече е решена. Въвеждането на три несъгласувани числа не описва триъгълника, който формулата предполага." },
          { "kind": "h3", "text": "Проверка на ъгъла от двете дължини на страни" },
          { "kind": "p", "text": "Когато [[b]] и [[c]] са известни, ъгълът е принуден: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Пример: [[b=4]], [[c=5]] дават [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Ако транспортир или по-ранно изчисление съобщава различен ъгъл за тези страни, едно от числата е грешно. Страните решават; ъгълът следва." },
          { "kind": "h3", "text": "Проверка на дължините на страни от ъгъла" },
          { "kind": "p", "text": "Проверката работи и в обратната посока. При [[c=10]] и [[A=60^\\circ]] съседният катет трябва да е [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Въвеждането на [[b=8]] със същата хипотенуза и ъгъл няма да опише същия правоъгълен триъгълник, защото [[10\\cos(60^\\circ)]] е равно на 5, а не на 8. Всеки ъгъл допуска точно една дължина на съседния катет при фиксирана хипотенуза." },
          { "kind": "h3", "text": "Какво става, когато входовете са несъвместими?" },
          { "kind": "p", "text": "Общата формула за две страни и заключен ъгъл все пак връща число за несъвместими входове, защото умножава каквото получи. Но когато [[b\\neq c\\cos(A)]], измерванията не описват правоъгълен триъгълник с [[c]] като хипотенуза и [[b]] като негов съседен катет. Числовият отговор не е доказателство за валидна геометрия; проверката за съвместимост е." },
          { "kind": "h3", "text": "Основни условия за вход" },
          { "kind": "p", "text": "Валидните входове удовлетворяват [[c>b>0]], [[0^\\circ<A<90^\\circ]] и [[b=c\\cos(A)]]. Първото държи хипотенузата най-дълга; второто държи ъгъла остър; третото свързва трите стойности в един триъгълник. Проверете и трите, преди да се доверите на лицето." }
        ],
        "imgAlt": "Три панела: валидни 4, 5, 36.87 градуса; валидни 5, 10, 60 градуса; невалидни 8, 10, 60 градуса",
        "figcaption": "Валидните входове удовлетворяват b = c cos A; третият панел показва, че 10 cos 60 градуса = 5 не е равно на 8."
      },
      "sec-examples": {
        "h2": "Примери стъпка по стъпка за лице на правоъгълен триъгълник с катет и ъгъл",
        "blocks": [
          { "kind": "p", "text": "Четири класически правоъгълни триъгълника показват метода в нарастващи размери. Всеки пример замества в синусната формула, след което проверява резултата с формулата за двата катета." },
          { "kind": "h3", "text": "Пример 1: Правоъгълен триъгълник 3-4-5" },
          { "kind": "p", "text": "При [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Стъпка 1: [[K=\\frac{bc\\sin(A)}{2}]]. Стъпка 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Стъпка 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Стъпка 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Проверка: [[a=5\\times0.6=3]] и [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Пример 2: Правоъгълен триъгълник 5-12-13" },
          { "kind": "p", "text": "При [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], с [[\\sin(A)=\\frac{5}{13}]]. Заместете: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. 13 се съкращава: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Проверка: [[a=13\\times(5/13)=5]] и [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Пример 3: Правоъгълен триъгълник 8-15-17" },
          { "kind": "p", "text": "При [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], с [[\\sin(A)=\\frac{8}{17}]]. Тогава [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Проверка: [[a=8]] и [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Пример 4: Правоъгълен триъгълник 7-24-25" },
          { "kind": "p", "text": "При [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], с [[\\sin(A)=\\frac{7}{25}]]. Тогава [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Проверка: [[a=7]] и [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Сравнение на основните примери" }
        ],
        "table": {
          "headers": ["Тип триъгълник", "Известен катет b", "Хипотенуза c", "Ъгъл A", "Изчислено лице"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Приложения в реалния живот на лицето на правоъгълен триъгълник от катет и ъгъл",
        "blocks": [
          { "kind": "p", "text": "Дванадесет решени ситуации пренасят формулата от страницата в работилницата, обекта и студиото. Всяка назовава правоъгълен триъгълен панел, секция, профил или опростен модел, прокарва трите входа на калкулатора през формулата и посочва допускането зад числата. Когато реалният обект е извит или неправилен, изчислението обхваща само моделирания триъгълник." },
          { "kind": "h3", "text": "Пример 1: Триъгълен стъклен прозорец" },
          { "kind": "p", "text": "Правоъгълен триъгълен стъклен прозорец има [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Входове на калкулатора: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Заместете: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Това е плоското триъгълно стъкло преди изваждане на запасите за рамката." },
          { "kind": "h3", "text": "Пример 2: Панел за покривна подпора" },
          { "kind": "p", "text": "Правоъгълна триъгълна покривна подпорна секция има [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Входове: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Тогава [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Резултатът описва плоската триъгълна подпорна секция, а не целия покрив." },
          { "kind": "h3", "text": "Пример 3: Триъгълен страничен профил на рампа" },
          { "kind": "p", "text": "Опростен правоъгълен триъгълен профил на рампа има [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Входове: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Тогава [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Това е триъгълният страничен профил, а не наклонната повърхност за ходене." },
          { "kind": "h3", "text": "Пример 4: Стоманена съединителна плоча" },
          { "kind": "p", "text": "Триъгълна стоманена подпорна плоча има [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Входове: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Тогава [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] Самото лице не установява конструктивна якост или товароносимост." },
          { "kind": "h3", "text": "Пример 5: Триъгълна градинска секция" },
          { "kind": "p", "text": "Опростена правоъгълна триъгълна градинска секция има [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Входове: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Тогава [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Това помага за оценка на лицето на триъгълната секция за засаждане." },
          { "kind": "h3", "text": "Пример 6: Триъгълен панел на ветрило" },
          { "kind": "p", "text": "Правоъгълна триъгълна секция на ветрило има [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Входове: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Тогава [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Шевовете и запасите за материал са изключени от тази плоска цифра." },
          { "kind": "h3", "text": "Пример 7: Шаблон за рязане на шперплат" },
          { "kind": "p", "text": "Правоъгълен триъгълен шаблон от шперплат има [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Входове: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Тогава [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Лицето помага да се оцени необходимият плосък материал преди отпадъка от рязането." },
          { "kind": "h3", "text": "Пример 8: Триъгълен пътен знак" },
          { "kind": "p", "text": "Правоъгълен триъгълен панел на знак има [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Входове: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Тогава [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Това оценява плоското лице на знака." },
          { "kind": "h3", "text": "Пример 9: Геодезична секция" },
          { "kind": "p", "text": "Правоъгълна триъгълна заснета секция има [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Входове: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Тогава [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Резултатът важи за опростената правоъгълна триъгълна земна секция." },
          { "kind": "h3", "text": "Пример 10: Триъгълна подпора на тента" },
          { "kind": "p", "text": "Правоъгълна триъгълна подпорна секция на тента има [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Входове: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Тогава [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Това е плоската триъгълна секция, а не цялата тъкан на неправилна тента." },
          { "kind": "h3", "text": "Пример 11: Напречно сечение на индустриален терен" },
          { "kind": "p", "text": "Опростена правоъгълна триъгълна индустриална земна секция има [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Входове: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Тогава [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Реален неправилен терен може да се наложи да се раздели на няколко фигури." },
          { "kind": "h3", "text": "Пример 12: Секция на челото на складов покрив" },
          { "kind": "p", "text": "Голяма правоъгълна триъгълна секция на чело на складов покрив има [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Входове: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Тогава [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Резултатът оценява плоската триъгълна челна секция." },
          { "kind": "h3", "text": "Сравнение на практическите примери" }
        ],
        "table": {
          "headers": ["Практическо приложение", "Катет a", "Известен катет b", "Хипотенуза c", "Ъгъл A", "Изчислено лице", "Мерна единица"],
          "rows": [
            ["Стъклен прозорец", "3", "4", "5", "36.87°", "6", "m²"],
            ["Покривна подпора", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Профил на рампа", "6", "8", "10", "36.87°", "24", "m²"],
            ["Съединителна плоча", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Градинска секция", "7", "24", "25", "16.26°", "84", "m²"],
            ["Панел на ветрило", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Шаблон от шперплат", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Пътен знак", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Геодезична секция", "9", "40", "41", "12.68°", "180", "m²"],
            ["Подпора на тента", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Индустриална секция", "11", "60", "61", "10.39°", "330", "m²"],
            ["Чело на складов покрив", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Защо синусната формула дава същото лице като формулата с двата катета?",
        "blocks": [
          { "kind": "p", "text": "Започнете от [[K=\\frac{bc\\sin(A)}{2}]] и си спомнете [[\\sin(A)=\\frac{a}{c}]]. Заместете: [[K=\\frac{bc(a/c)}{2}]]. [[c]] се съкращава, остава [[[\\boxed{K=\\frac{ab}{2}}]]] Синусната формула не измисля ново лице; тя изчислява същото лице от различен набор известни, като липсващият катет е внесен контрабандно чрез синусното отношение." },
          { "kind": "h3", "text": "Кога синусната формула е по-полезна?" },
          { "kind": "p", "text": "Използвайте я, когато един катет е измерен, хипотенузата е известна, а заключеният ъгъл е наличен, докато третата страна никога не е била измерена директно. Теренните измервания, мащабните чертежи и геодезичните данни често пристигат точно в това съчетание. Формулата превръща тези три числа в лице на един ред, без отклонение за намиране на липсващия катет първо." },
          { "kind": "h3", "text": "Кога формулата с двата катета е по-проста?" },
          { "kind": "p", "text": "Когато и двата перпендикулярни катета вече са известни, [[K=\\frac{ab}{2}]] е по-кратка: без синус, без ъгъл, едно умножение и делене на две. Посягайте към синусната версия само когато катет липсва и ъгълът може да го замести." },
          { "kind": "h3", "text": "Числово сравнение" },
          { "kind": "p", "text": "При триъгълника 3-4-5 синусният метод дава [[K=\\frac{4\\times5\\times0.6}{2}=6]], а методът с двата катета дава [[K=\\frac{3\\times4}{2}=6]]. И двата пътя минават през същата геометрия, затова трябва да съвпадат. Когато не съвпадат, виновни са входовете или аритметиката, никога формулите." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Как заключеният ъгъл влияе върху лицето на правоъгълен триъгълник?",
        "blocks": [
          { "kind": "p", "text": "При фиксирана хипотенуза ъгълът не може да се променя свободно: правоъгълните отношения свързват [[b]] и [[A]] заедно. Честното третиране на това ограничение показва точно как лицето расте и спада, докато [[A]] се движи между 0 и 90 градуса." },
          { "kind": "h3", "text": "Какво става, когато ъгъл A нараства?" },
          { "kind": "p", "text": "При фиксирано [[c]], [[b=c\\cos(A)]] и [[a=c\\sin(A)]], така че [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Тъждеството за двоен ъгъл дава [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] Лицето расте, докато [[A]] се приближава към 45 градуса отдолу, достига връх при 45 градуса, после спада към 90 градуса. Допълващите се ъгли, като 30° и 60°, дават същото лице, защото [[\\sin(2A)]] е симетричен около 45 градуса." },
          { "kind": "h3", "text": "Максимално лице при фиксирана хипотенуза" },
          { "kind": "p", "text": "Върхът настъпва при [[A=45^\\circ]], където [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Там [[a=b=\\frac{c}{\\sqrt{2}}]], така че максимизиращият триъгълник е равнобедрен. Фиксираната хипотенуза не може да обхване повече правоъгълно триъгълно лице от четвърт от квадрата си, а само равнобедрената форма го достига." },
          { "kind": "h3", "text": "Числов пример" },
          { "kind": "p", "text": "При [[c=10]] таванът е [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] При [[A=45^\\circ]] катетите са по [[10/\\sqrt{2}\\approx7.07]] всеки, а [[\\frac{7.07\\times7.07}{2}\\approx25]]. Обърнете внимание, че 90° не е допустим остър вход: той би свил триъгълника в линия." }
        ]
      },
      "sec-alternative": {
        "h2": "Може ли да се изчисли лицето на правоъгълен триъгълник само с един катет и неговия ъгъл?",
        "blocks": [
          { "kind": "p", "text": "Да, с тангенс вместо синус. Ако катетът [[b]] и ъгъл [[A]] са известни, срещуположният катет следва от [[a=b\\tan(A)]]. Поставете го в [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], следователно [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] От другия ъгъл [[b=a\\tan(B)]] дава [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Това са истински алтернативни методи, полезни когато хипотенузата е неизвестна, но катет и неговият ъгъл са под ръка. Те са математически алтернативи, а не допълнителни режими в калкулатора по-горе, който работи само с [[b]], [[c]] и [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Единици за ъгли и измервания в изчисленията на лице",
        "blocks": [
          { "kind": "p", "text": "Лицето наследява единицата си от двете дължини, умножени за създаването му, докато ъгълът не допринася с никаква единица. Поддържането на трите входа в съвместими единици е онова, което държи отговора честен." },
          { "kind": "h3", "text": "Градуси срещу радиани" },
          { "kind": "p", "text": "Калкулаторът очаква градуси. Преобразувайте с [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; например [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Ъгъл в радиани, подаден в поле за градуси, безшумно променя стойността на синуса: [[\\sin(30^\\circ)=0.5]], но [[\\sin(30\\text{ radians})\\approx-0.99]], което би съсипало лицето. Преобразувайте първо, после въведете." },
          { "kind": "h3", "text": "Защо синусът няма единици" },
          { "kind": "p", "text": "Синусът е отношение на две дължини, затова единиците се съкращават: срещуположна върху хипотенуза е чисто число. Квадратните единици в отговора идват изцяло от умножаването на [[b]] по [[c]]. Затова счетоводството на единиците във формулата е просто: съчетайте двете единици за дължина и единицата за лице следва." },
          { "kind": "h3", "text": "Чести мерни единици" },
          { "kind": "p", "text": "Метрите дават квадратни метри, сантиметрите дават квадратни сантиметри, футовете дават квадратни футове, инчовете дават квадратни инчове: [[\\text{m}\\times\\text{m}=\\text{m}^2]], а същият модел важи за всяка единица за дължина. Смесените единици, като сантиметри с метри, трябва да се преобразуват в една единица, преди формулата да се приложи, иначе числото няма чист смисъл." },
          { "kind": "h3", "text": "Защо ранното закръгляне може да повлияе на резултата" },
          { "kind": "p", "text": "Дръжте пълна точност през междинните стъпки и закръгляйте само крайния отговор. Точният ъгъл зад 36.87° е 36.869897°, чийто синус е точно 0.6; закръглянето на ъгъла първо измества синуса леко, а това изместване се умножава през [[b]] и [[c]] в лицето. Малко за един триъгълник, забележимо за цял проект." }
        ]
      },
      "sec-mistakes": {
        "h2": "Чести грешки при изчисляване на лицето на правоъгълен триъгълник от катет и ъгъл",
        "blocks": [
          { "kind": "p", "text": "Почти всеки грешен отговор в тази тема се дължи на грешно етикетиран вход, а не на лоша аритметика. Шестнадесетте грешки по-долу са тези, които се появяват отново и отново, всяка с причината си и поправката си." },
          { "kind": "h3", "text": "1. Бъркане на хипотенузата с перпендикулярен катет" },
          { "kind": "p", "text": "Хипотенузата е страната срещу правия ъгъл и най-дългата страна; катетът среща правия ъгъл. Размяната им подава грешна дължина в [[c]]. Поправка: първо намерете правия ъгъл, после вземете страната срещу него." },
          { "kind": "h3", "text": "2. Съчетаване на ъгъл A с грешния катет" },
          { "kind": "p", "text": "Ъгъл [[A]] лежи между катета [[b]] и хипотенузата [[c]]. Съчетаването му с катета [[a]] разбърква отношението на заключения ъгъл, което формулата предполага. Поправка: проследете двете страни, които образуват ъгъла, който сте въвели." },
          { "kind": "h3", "text": "3. Бъркане на срещуположни и съседни страни" },
          { "kind": "p", "text": "Срещуположна означава срещу ъгъла; съседна означава да го докосва, до хипотенузата. Етикетите се обръщат, когато отправният ъгъл се промени. Поправка: застанете при ъгъл [[A]] и назовете всяка страна оттам." },
          { "kind": "h3", "text": "4. Използване на ъгъл B вместо ъгъл A без смяна на съответната страна" },
          { "kind": "p", "text": "Ъгъл [[B]] се съчетава със страните [[a]] и [[c]], а не с [[b]] и [[c]]. Въвеждането на [[B]] при запазени [[b]] и [[c]] изчислява различна величина. Поправка: дръжте всеки ъгъл със собственото му съчетаване на страни или първо преобразувайте [[B]] в [[A]]." },
          { "kind": "h3", "text": "5. Използване на радиани, когато калкулаторът очаква градуси" },
          { "kind": "p", "text": "Въвеждането на 0.6435 (радиана) там, където принадлежат 36.87 (градуса), променя [[\\sin(A)]] напълно. Поправка: проверете единицата на калкулатора, преобразувайте с [[\\times\\frac{180}{\\pi}]] при нужда, после въведете." },
          { "kind": "h3", "text": "6. Забравяне да се раздели на две" },
          { "kind": "p", "text": "Умножаването на [[b\\times c\\times\\sin(A)]] дава лицето на ограждащия успоредник, двойно на лицето на триъгълника. Поправка: разделете произведението на две; /2 е част от формулата, не е по избор." },
          { "kind": "h3", "text": "7. Забравяне на синусната функция" },
          { "kind": "p", "text": "Изчисляването само на [[\\frac{bc}{2}]] третира [[\\sin(A)]] като 1, което важи само при 90°, невъзможен остър вход. Поправка: включете [[\\sin(A)]]; той носи дела на липсващия катет." },
          { "kind": "h3", "text": "8. Въвеждане на катет, по-дълъг от хипотенузата" },
          { "kind": "p", "text": "Никой катет не може да надвишава хипотенузата, така че [[c\\leq b]] означава, че етикет е грешен. Поправка: идентифицирайте страните наново; най-дългото измерване е [[c]]." },
          { "kind": "h3", "text": "9. Въвеждане на ъгъл от 0 градуса" },
          { "kind": "p", "text": "При 0° [[\\sin(A)=0]] и триъгълникът се срива до линия с нулево лице. Поправка: използвайте истински остър ъгъл, строго между 0° и 90°." },
          { "kind": "h3", "text": "10. Въвеждане на ъгъл от 90 градуса като остър ъгъл" },
          { "kind": "p", "text": "90° е правият ъгъл [[C]], а не остър ъгъл; [[\\sin(90^\\circ)=1]] превръща формулата в [[\\frac{bc}{2}]], което не е лицето на този триъгълник. Поправка: въведете острия ъгъл между [[b]] и [[c]]." },
          { "kind": "h3", "text": "11. Смесване на различни мерни единици за дължина" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] с [[c=5\\text{ m}]] умножава несъвместими мащаби. Поправка: преобразувайте и двете в една единица (400 cm = 4 m) преди изчисление." },
          { "kind": "h3", "text": "12. Съобщаване на лицето в линейни единици" },
          { "kind": "p", "text": "Лице от 6 m² не е 6 m. Поправка: пишете квадратната единица заедно с числото, всеки път." },
          { "kind": "h3", "text": "13. Твърде ранно закръгляне на ъгъла" },
          { "kind": "p", "text": "Закръглянето на 36.869897° до 36.87°, преди да се вземе синусът, измества резултата леко; закръглянето до 37° го измества повече. Поправка: дръжте пълна точност до крайния отговор." },
          { "kind": "h3", "text": "14. Предполагане, че трите входа могат да се избират независимо" },
          { "kind": "p", "text": "[[b]], [[c]] и [[A]] са свързани от [[b=c\\cos(A)]]; свободният избор на трите преопределя триъгълника. Поправка: изведете третата стойност от другите две, вместо да я измисляте." },
          { "kind": "h3", "text": "15. Използване на ъгъл, несъвместим с въведените дължини на страни" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] не издържат проверката, тъй като [[10\\cos(60^\\circ)=5\\neq8]]. Формулата все пак връща число, но то не е лицето на този правоъгълен триъгълник. Поправка: направете проверката [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Предполагане, че числовият резултат на калкулатора винаги представя валиден правоъгълен триъгълник" },
          { "kind": "p", "text": "Аритметиката успява върху каквито и да е въведени числа; геометрията не. Поправка: проверете с проверките за съвместимост и независима формула, преди да се доверите на отговора." },
          { "kind": "h3", "text": "Грешно срещу вярно: конкретен пример" },
          { "kind": "p", "text": "Използвайте [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Вярно: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Неправилно въвеждане на ъгъл [[B=53.13^\\circ]] със същите страни: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Ъгъл [[B]] не е заключеният ъгъл между [[b]] и [[c]]; правилното му съчетаване на страни е [[a]] и [[c]]. Грешката е невидима в аритметиката и очевидна в геометрията." }
        ]
      },
      "sec-verify": {
        "h2": "Как да проверите дали лицето на правоъгълния ви триъгълник е вярно",
        "blocks": [
          { "kind": "p", "text": "Седем независими проверки, всички демонстрирани върху триъгълника 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Съгласието между различни пътища е най-силното доказателство, че отговорът е верен." },
          { "kind": "h3", "text": "Метод 1: Проверете основната формула" },
          { "kind": "p", "text": "Преизчислете [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Второ преминаване улавя печатни грешки и сгрешени ъгли." },
          { "kind": "h3", "text": "Метод 2: Проверете косинусовото отношение" },
          { "kind": "p", "text": "Потвърдете [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Несъответствие означава, че ъгълът и страните принадлежат на различни триъгълници." },
          { "kind": "h3", "text": "Метод 3: Изчислете липсващия катет" },
          { "kind": "p", "text": "Потвърдете [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Това проверява стойността на синуса, която захранва формулата за лице." },
          { "kind": "h3", "text": "Метод 4: Проверете Питагоровата теорема" },
          { "kind": "p", "text": "Потвърдете [[a^2+b^2=c^2]]: [[9+16=25]]. Неуспехът тук означава, че идентифицирането на страните е грешно." },
          { "kind": "h3", "text": "Метод 5: Проверете с двата катета" },
          { "kind": "p", "text": "Потвърдете [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Два метода, един триъгълник, един отговор." },
          { "kind": "h3", "text": "Метод 6: Проверете допълващите се ъгли" },
          { "kind": "p", "text": "Потвърдете [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Това улавя ъгъл, измерен в грешния ъгъл." },
          { "kind": "h3", "text": "Метод 7: Проверете максималното лице" },
          { "kind": "p", "text": "Потвърдете [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Лице над тавана е невъзможно за дадената хипотенуза." }
        ]
      },
      "sec-applications": {
        "h2": "Лицето на правоъгълен триъгълник от катет и ъгъл в практиката",
        "blocks": [
          { "kind": "p", "text": "Същите три входа се появяват на места, които никога не споменават тригонометрия. Стъкларят измерва катета и диагонала на прозореца и отчита ъгъла от рамката; покривачът знае хипотенузата на подпората от дължината на гредата, а ъгъла от наклона. Във всеки случай липсващата перпендикулярна страна е неудобната за достигане с ролетка, докато хипотенузата и ъгълът са точно под ръка. Синусната формула съществува точно за тази асиметрия: тя преобразува достъпните измервания в недостъпната височина, а после в лице." },
          { "kind": "p", "text": "Четирите панела по-долу показват модела в различни мащаби. Стъклен прозорец (6 m²) и профил на рампа (24 m²) използват метрова геометрия 3-4-5 и 6-8-10; покривната подпора (30 ft²) използва триъгълника 5-12-13; геодезичната секция (84 m²) използва 7-24-25. Всеки панел етикетира съседния катет, хипотенузата, заключения ъгъл и полученото лице, така че пътят от измерването до отговора остава видим." }
        ],
        "imgAlt": "Четири панела: стъклен прозорец 6 m2, покривен панел 30 ft2, профил на рампа 24 m2, геодезична секция 84 m2",
        "figcaption": "Четири реални употреби: прозорец, покривна подпора, профил на рампа и геодезична секция с лицата им."
      },
      "sec-faq": {
        "h2": "Често задавани въпроси",
        "blocks": [
          { "kind": "p", "text": "По-долу са отговорите на най-честите въпроси за лицето от катет и ъгъл." }
        ]
      },
      "sec-related": {
        "h2": "Разгледайте свързаните калкулатори за правоъгълен триъгълник",
        "blocks": [
          { "kind": "p", "text": "Различните измервания изискват различни калкулатори." }
        ]
      },
      "sec-conclusion": {
        "h2": "Три входни данни носят цялото лице",
        "blocks": [
          { "kind": "p", "text": "Един катет, хипотенузата и ъгълът между тях се оказват достатъчни. Синусното отношение възстановява липсващия катет, деленето на две превръща ограждащия правоъгълник в триъгълника, а отношенията за съвместимост позволяват всеки вход да се провери спрямо останалите. Нищо в метода не е приблизително, когато входовете са точни." },
          { "kind": "p", "text": "Работният навик е прост: етикетирайте страните от ъгъл A, дръжте единиците съвместими, потвърдете b = c cos(A) и проверете отговора чрез формулата с двата катета. С тези навици K = bc sin(A)/2 е толкова надеждно, колкото всяко изчисление на лице в геометрията." }
        ]
      }
    }
  }
};
