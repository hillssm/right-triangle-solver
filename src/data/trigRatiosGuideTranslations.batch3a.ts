/**
 * trigRatiosGuideTranslations.batch3a.ts
 * Page 15 Trig Ratios guide - locales id, ar (part of BATCH3: id, ar, bg, tr, sv, zh).
 * Math markers [[...]] / [[[...]]] kept byte-identical to English; backslashes doubled.
 * Field labels stay English ("Opposite a", "Hypotenuse c"); button labels localized.
 */
export const TRIG_RATIOS_TRANSLATIONS_BATCH3A = {
  "id": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apa Itu Kalkulator Rasio Trigonometri Segitiga Siku-siku?",
      "sec-triangle": "Memahami Sisi-Sisi Segitiga Siku-siku",
      "sec-ratios": "Memahami Rasio Trigonometri",
      "sec-six": "Enam Rasio Trigonometri Segitiga Siku-siku",
      "sec-choose": "Cara Memilih Rasio Trigonometri yang Tepat",
      "sec-howto": "Cara Menggunakan Kalkulator Rasio Trigonometri Segitiga Siku-siku",
      "sec-foundations": "Contoh Langkah demi Langkah Rasio Trigonometri",
      "sec-applications": "Penerapan Rasio Trigonometri dalam Kehidupan Nyata",
      "sec-relate": "Hubungan Antara Enam Rasio Trigonometri",
      "sec-angles": "Memahami Rasio Trigonometri pada Berbagai Sudut",
      "sec-missing-side": "Cara Menghitung Sisi Segitiga Siku-siku yang Tidak Diketahui",
      "sec-inverse": "Cara Menemukan Sudut dari Rasio Trigonometri",
      "sec-mistakes": "Kesalahan Umum Saat Menggunakan Rasio Trigonometri",
      "sec-verify": "Cara Memeriksa Apakah Hasil Trigonometri Anda Valid",
      "sec-related": "Kalkulator Terkait",
      "sec-faq": "FAQ",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apa Itu Kalkulator Rasio Trigonometri Segitiga Siku-siku?",
        "blocks": [
          { "kind": "p", "text": "Kalkulator rasio trigonometri segitiga siku-siku menghitung enam rasio trigonometri, yaitu sinus, kosinus, tangen, kotangen, sekan, dan kosekan, dari panjang sisi segitiga siku-siku. Setiap rasio membandingkan sepasang sisi tertentu relatif terhadap sudut lancip acuan yang dipilih. Kalkulator di halaman ini menawarkan enam mode, satu untuk setiap rasio, sehingga Anda cukup memasukkan dua sisi yang dibutuhkan setiap rasio dan langsung mendapatkan nilainya." },
          { "kind": "p", "text": "Rasio-rasio ini bergantung pada sudut acuan, bukan hanya pada segitiganya. Untuk segitiga yang sama, mengubah sudut lancip yang diukur akan menukar peran kedua kaki segitiga, sehingga nilai rasionya pun berubah. Itulah sebabnya mode kalkulator diatur berdasarkan pasangan sisi yang diketahui: sisi depan dan sisi miring menghasilkan sinus, sisi samping dan sisi miring menghasilkan kosinus, dan kedua kaki menghasilkan tangen. Mode resiprokal menghasilkan kosekan, sekan, dan kotangen dari pasangan yang sama." },
          { "kind": "p", "text": "Perhatikan segitiga 3-4-5 dengan sisi depan 3, sisi samping 4, dan sisi miring 5. Satu segitiga menghasilkan enam nilai berbeda: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]], dan [[\\tan(A)=3/4=0.75]], dengan rasio resiprokal [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]], dan [[\\cot(A)\\approx1.3333]]. Setiap rasio mengajukan pertanyaan berbeda tentang bentuk yang sama. Memahami rumusnya memungkinkan Anda memverifikasi hasil apa pun secara manual, yang merupakan cara paling pasti untuk menangkap sisi yang salah label." }
        ]
      },
      "sec-triangle": {
        "h2": "Memahami Sisi-Sisi Segitiga Siku-siku",
        "blocks": [
          { "kind": "p", "text": "Setiap rasio trigonometri adalah perbandingan dua sisi, jadi memberi nama sisi dengan benar adalah fondasi dari semua yang dibahas berikutnya. Panduan ini menggunakan satu konvensi yang konsisten di seluruh bagian: [[A]] adalah sudut lancip acuan di kiri bawah, [[B]] adalah sudut siku-siku di kanan bawah, [[C]] adalah sudut lancip lainnya di atas, sisi [[a]] adalah kaki vertikal, sisi [[b]] adalah alas horizontal, dan sisi [[c]] adalah sisi miring yang condong." },
          { "kind": "h3", "text": "Apa Itu Segitiga Siku-siku?" },
          { "kind": "p", "text": "Segitiga siku-siku memiliki satu sudut yang besarnya tepat 90 derajat, sedangkan dua sudut lainnya lancip. Kedua kaki bertemu di sudut siku-siku, dan sisi miring terletak di seberang sudut siku-siku. Karena jumlah ketiga sudut dalam adalah 180 derajat, kedua sudut lancip saling berkomplemen: [[A+C=90^\\circ]]. Segitiga siku-siku cocok untuk perhitungan trigonometri karena menetapkan satu sudut lancip akan menetapkan bentuk segitiga sepenuhnya: semua segitiga siku-siku dengan sudut lancip yang sama adalah sebangun, sehingga rasio sisinya sama." },
          { "kind": "h3", "text": "Apa Itu Sisi Depan?" },
          { "kind": "p", "text": "Sisi depan terletak tepat di seberang sudut acuan yang dipilih. Dalam konvensi kita, sisi [[a]] berhadapan dengan sudut [[A]]. Dalam soal praktis, sisi depan sering mewakili tinggi vertikal, selisih elevasi, atau komponen vertikal dari suatu lereng. Perannya tidak melekat pada satu sisi tertentu: jika sudut acuan berubah, sisi lain menjadi sisi depan." },
          { "kind": "h3", "text": "Apa Itu Sisi Samping?" },
          { "kind": "p", "text": "Sisi samping menyentuh sudut acuan tetapi bukan sisi miring. Dalam konvensi kita, sisi [[b]] bersampingan dengan sudut [[A]]. Sisi ini sering mewakili jarak horizontal, jarak di permukaan tanah, atau proyeksi horizontal. Dari ketiga sisi, sisi samping adalah yang paling sering tertukar dengan sisi depan, dan satu pertukaran itu adalah sumber paling umum dari nilai rasio yang salah." },
          { "kind": "h3", "text": "Apa Itu Sisi Miring?" },
          { "kind": "p", "text": "Sisi miring berhadapan dengan sudut siku-siku dan selalu menjadi sisi terpanjang segitiga. Dalam konvensi kita, ia adalah sisi yang condong [[c]]. Dalam situasi nyata, ia dapat berupa tangga, kabel, penyangga atap yang miring, atau jarak pandang garis lurus. Ia muncul dalam rumus sinus, kosinus, sekan, dan kosekan, tetapi tidak langsung dalam rumus tangen dan kotangen, yang membandingkan kedua kaki." },
          { "kind": "h3", "text": "Mengapa Sudut Acuan Penting" },
          { "kind": "p", "text": "Depan dan samping adalah label relatif, bukan nama permanen. Untuk sudut [[A]], sisi depan adalah [[a]] dan sisi samping adalah [[b]]. Untuk sudut [[C]], labelnya bertukar: sisi depan adalah [[b]] dan sisi samping adalah [[a]]. Sisi miring tetap [[c]] tidak peduli sudut lancip mana yang menjadi acuan. Selalu tentukan sudut mana yang Anda ukur sebelum memberi label pada sisi mana pun." }
        ],
        "imgAlt": "Segitiga siku-siku dengan sudut A di kiri bawah disorot, sisi depan a berwarna emas, sisi samping b berwarna biru, sisi miring c berwarna abu-abu, sudut siku-siku di B",
        "figcaption": "Anatomi segitiga siku-siku: A adalah sudut acuan, B adalah sudut 90 derajat, dan depan serta samping didefinisikan relatif terhadap A."
      },
      "sec-ratios": {
        "h2": "Memahami Rasio Trigonometri",
        "blocks": [
          { "kind": "p", "text": "Rasio trigonometri membandingkan dua panjang sisi segitiga siku-siku relatif terhadap sudut lancip yang dipilih. Rasio ini menggambarkan bentuk segitiga, bukan ukurannya: gandakan semua sisi dan keenam rasio tetap persis sama, karena pembilang dan penyebut dikalikan faktor yang sama. Segitiga 3-4-5 dan segitiga 6-8-10 yang diperbesar memiliki nilai sinus, kosinus, tangen, dan resiprokal yang identik. Kemandirian terhadap ukuran inilah yang membuat rasio berguna: rasio menangkap sudut sebagai bilangan murni." },
          { "kind": "h3", "text": "Memahami SOH-CAH-TOA" },
          { "kind": "p", "text": "SOH-CAH-TOA adalah bantuan ingatan standar untuk tiga rasio utama. SOH: Sinus = Depan / Miring. CAH: Kosinus = Samping / Miring. TOA: Tangen = Depan / Samping. Baca masing-masing sebagai kalimat: sinus suatu sudut adalah panjang sisi di depan sudut itu dibagi sisi miring. Bantuan ini mencakup sinus, kosinus, dan tangen; rasio resiprokal berasal dari aturan kedua: balik pecahannya. Kosekan membalik sinus, sekan membalik kosinus, dan kotangen membalik tangen." },
          { "kind": "h3", "text": "Mengapa Rasio Trigonometri Tidak Berdimensi" },
          { "kind": "p", "text": "Rasio membagi satu panjang dengan panjang lain, sehingga satuannya saling menghilangkan: [[3\\text{ m}/5\\text{ m}=0.6]]. Dalam sentimeter, segitiga yang sama menghasilkan [[300\\text{ cm}/500\\text{ cm}=0.6]], bilangan yang identik. Mengubah satuan pengukuran yang kompatibel tidak pernah mengubah rasio trigonometri. Konsekuensi praktisnya adalah masukan Anda harus berbagi satu satuan sebelum dibagi, tetapi hasilnya sendiri tidak berdimensi, itulah sebabnya kalkulator memperlakukan semua masukan sebagai panjang biasa." },
          { "kind": "h3", "text": "Mengapa Satu Segitiga Menghasilkan Enam Rasio" },
          { "kind": "p", "text": "Setiap rasio membandingkan pasangan sisi yang berbeda. Sinus membandingkan depan dengan miring, kosinus membandingkan samping dengan miring, dan tangen membandingkan depan dengan samping. Kosekan, sekan, dan kotangen membalik pembilang dan penyebut yang sesuai. Enam rasio, tiga pasangan sisi, dua arah per pasangan. Rasio-rasio ini tidak saling bertentangan; mereka menjawab pertanyaan geometris berbeda tentang segitiga yang sama, itulah sebabnya satu kalkulator menawarkan keenam mode." }
        ]
      },
      "sec-six": {
        "h2": "Enam Rasio Trigonometri Segitiga Siku-siku",
        "blocks": [
          { "kind": "p", "text": "Bagian ini menjelaskan setiap rasio dalam format yang sama: apa artinya, rumusnya, sisi mana yang digunakan, mengapa pecahan disusun seperti itu, contoh pengerjaan pada segitiga 3-4-5, apa arti bilangannya, kapan rasio berguna, hubungannya dengan rasio lain, dan satu kesalahan yang harus dihindari." },
          { "kind": "h3", "text": "1. Sinus: Sisi Depan Dibagi Sisi Miring" },
          { "kind": "p", "text": "Sinus membandingkan sisi depan dengan sisi miring: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Sisi miring menjadi penyebut karena ia sisi terpanjang, yang membuat sinus tetap antara 0 dan 1 untuk sudut lancip. Dengan [[a=3]] dan [[c=5]]: [[\\sin(A)=3/5]], sehingga [[[\\boxed{\\sin(A)=0.6}]]] Hasilnya berarti sisi depan adalah 60 persen dari sisi miring. Sinus berguna kapan pun sisi depan dan sisi miring adalah pasangan yang diketahui, misalnya mencari sudut tangga dari tinggi dan panjangnya. Sinus berhubungan dengan kosinus sebagai pasangan komplemen: sinus suatu sudut lancip sama dengan kosinus sudut lainnya. Kesalahan yang harus dihindari: 0.6 adalah rasio, bukan sudut 0.6 derajat." },
          { "kind": "h3", "text": "2. Kosinus: Sisi Samping Dibagi Sisi Miring" },
          { "kind": "p", "text": "Kosinus membandingkan sisi samping dengan sisi miring: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]] Baik sinus maupun kosinus dibagi sisi miring, sehingga keduanya tetap antara 0 dan 1; keduanya hanya berbeda pada pembilang, itulah sebabnya sinus dan kosinus menggambarkan aspek berbeda dari sudut yang sama. Dengan [[b=4]] dan [[c=5]]: [[\\cos(A)=4/5]], sehingga [[[\\boxed{\\cos(A)=0.8}]]] Sisi samping adalah 80 persen dari sisi miring. Kosinus berguna ketika sisi samping dan sisi miring diketahui, misalnya jarak horizontal atap dan panjang kasau. Kosinus berhubungan dengan sinus melalui identitas [[\\sin^2(A)+\\cos^2(A)=1]]. Kesalahan yang harus dihindari: menukar pembilang, menggunakan 3/5 untuk kosinus padahal seharusnya 4/5." },
          { "kind": "h3", "text": "3. Tangen: Sisi Depan Dibagi Sisi Samping" },
          { "kind": "p", "text": "Tangen membandingkan sisi depan dengan sisi samping: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]] Tangen melewati sisi miring sepenuhnya, yang menjadikannya rasio alami untuk soal kemiringan di mana kedua kaki adalah besaran yang diukur. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4]], sehingga [[[\\boxed{\\tan(A)=0.75}]]] Sisi depan panjangnya 75 persen dari sisi samping. Tangen adalah bentuk matematis dari kenaikan dibagi jarak horizontal, sehingga muncul dalam kemiringan atap, ramp, dan grade. Berbeda dengan sinus dan kosinus, tangen dapat melebihi 1 kapan pun sisi depan lebih panjang dari sisi samping. Kesalahan yang harus dihindari: mengira tangen 0.75 sebagai 75 persen dari sudut siku-siku." },
          { "kind": "h3", "text": "4. Kotangen: Sisi Samping Dibagi Sisi Depan" },
          { "kind": "p", "text": "Kotangen adalah resiprokal tangen: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]] Kotangen membalik perbandingan sisi yang dibuat tangen, jadi di mana tangen menanyakan seberapa curam suatu lereng, kotangen menanyakan seberapa landai lereng itu. Dengan [[b=4]] dan [[a=3]]: [[\\cot(A)=4/3]], sehingga [[[\\boxed{\\cot(A)\\approx1.3333}]]] Setara dengan [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. Kotangen berguna ketika soal secara alami memberikan samping per depan, atau ketika suatu rumus ditulis dalam bentuk resiprokal. Kesalahan yang harus dihindari: menulis kotangen sebagai a/b, padahal itu tangen." },
          { "kind": "h3", "text": "5. Sekan: Sisi Miring Dibagi Sisi Samping" },
          { "kind": "p", "text": "Sekan adalah resiprokal kosinus: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]] Membalik pecahan kosinus menempatkan sisi miring, sisi terpanjang, di atas, itulah sebabnya sekan selalu lebih besar dari 1 untuk sudut lancip pada segitiga siku-siku yang valid. Dengan [[c=5]] dan [[b=4]]: [[\\sec(A)=5/4]], sehingga [[[\\boxed{\\sec(A)=1.25}]]] Setara dengan [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. Sekan berguna dalam rumus fisika dan teknik yang dinyatakan dengan sisi miring sebagai pembilang. Kesalahan yang harus dihindari: mengacaukan sekan dengan kosinus, atau dengan fungsi kosinus invers." },
          { "kind": "h3", "text": "6. Kosekan: Sisi Miring Dibagi Sisi Depan" },
          { "kind": "p", "text": "Kosekan adalah resiprokal sinus: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]] Seperti sekan, kosekan menempatkan sisi miring di atas, sehingga selalu lebih besar dari 1 untuk sudut lancip. Dengan [[c=5]] dan [[a=3]]: [[\\csc(A)=5/3]], sehingga [[[\\boxed{\\csc(A)\\approx1.6667}]]] Setara dengan [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. Kosekan muncul dalam matematika gelombang dan osilasi di mana resiprokal sinus adalah bentuk yang nyaman. Kesalahan yang harus dihindari: mengacaukan kosekan dengan sinus invers; [[1/\\sin(A)]] adalah kosekan, sedangkan [[\\sin^{-1}(r)]] mengembalikan sudut." },
          { "kind": "h3", "text": "Keenam Rasio dalam Satu Tabel" },
          { "kind": "p", "text": "Keenam perhitungan mengacu pada sudut acuan yang sama [[A]]." }
        ],
        "table": {
          "headers": ["Rasio", "Rumus", "Hubungan sisi", "Contoh 3-4-5"],
          "rows": [
            ["Sinus", "[[a/c]]", "Depan / Miring", "[[3/5=0.6]]"],
            ["Kosinus", "[[b/c]]", "Samping / Miring", "[[4/5=0.8]]"],
            ["Tangen", "[[a/b]]", "Depan / Samping", "[[3/4=0.75]]"],
            ["Kotangen", "[[b/a]]", "Samping / Depan", "[[4/3\\approx1.3333]]"],
            ["Sekan", "[[c/b]]", "Miring / Samping", "[[5/4=1.25]]"],
            ["Kosekan", "[[c/a]]", "Miring / Depan", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "Segitiga 3-4-5 dengan enam panel yang menunjukkan sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        "figcaption": "Satu segitiga 3-4-5 menghasilkan keenam rasio: tiga rasio utama dan tiga resiprokalnya."
      },
      "sec-choose": {
        "h2": "Cara Memilih Rasio Trigonometri yang Tepat",
        "blocks": [
          { "kind": "p", "text": "Rasio terbaik bergantung pada dua panjang sisi yang tersedia dalam suatu soal. Setiap pasangan sisi memungkinkan dua perhitungan resiprokal, dan enam mode kalkulator cocok dengan pasangan-pasangan ini secara tepat:" },
          { "kind": "p", "text": "Jika sisi depan dan sisi miring diketahui, Anda dapat menghitung [[\\sin(A)=a/c]] dan juga [[\\csc(A)=c/a]]. Jika sisi samping dan sisi miring diketahui, Anda dapat menghitung [[\\cos(A)=b/c]] dan [[\\sec(A)=c/b]]. Jika kedua kaki diketahui, Anda dapat menghitung [[\\tan(A)=a/b]] dan [[\\cot(A)=b/a]]." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Sinus" },
          { "kind": "p", "text": "Pilih mode sinus ketika sisi depan dan sisi miring diketahui. Masukkan sisi depan di kolom \"Opposite a\" dan sisi miring di kolom \"Hypotenuse c\", lalu klik \"Hitung sin(A)\". Tidak ada mode yang membutuhkan ketiga panjang sisi; setiap mode meminta tepat pasangan yang digunakan rasionya." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Kosinus" },
          { "kind": "p", "text": "Pilih mode kosinus ketika sisi samping dan sisi miring diketahui. Masukkan sisi samping di kolom \"Adjacent b\" dan sisi miring di kolom \"Hypotenuse c\", lalu klik \"Hitung cos(A)\"." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Tangen" },
          { "kind": "p", "text": "Pilih mode tangen ketika kedua kaki diketahui. Masukkan sisi depan di kolom \"Opposite a\" dan sisi samping di kolom \"Adjacent b\", lalu klik \"Hitung tan(A)\"." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Kotangen" },
          { "kind": "p", "text": "Pilih mode kotangen ketika kaki-kaki diketahui dan soal dinyatakan sebagai samping per depan. Masukkan sisi samping terlebih dahulu di kolom \"Adjacent b\" dan sisi depan di kolom \"Opposite a\", lalu klik \"Hitung cot(A)\"." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Sekan" },
          { "kind": "p", "text": "Pilih mode sekan ketika sisi miring dan sisi samping diketahui. Masukkan sisi miring di kolom \"Hypotenuse c\" dan sisi samping di kolom \"Adjacent b\", lalu klik \"Hitung sec(A)\"." },
          { "kind": "h3", "text": "Cara Menggunakan Mode Rasio Kosekan" },
          { "kind": "p", "text": "Pilih mode kosekan ketika sisi miring dan sisi depan diketahui. Masukkan sisi miring di kolom \"Hypotenuse c\" dan sisi depan di kolom \"Opposite a\", lalu klik \"Hitung csc(A)\"." }
        ],
        "table": {
          "headers": ["Sisi yang diketahui", "Rasio langsung", "Rasio resiprokal"],
          "rows": [
            ["Depan dan miring", "Sinus", "Kosekan"],
            ["Samping dan miring", "Kosinus", "Sekan"],
            ["Depan dan samping", "Tangen", "Kotangen"]
          ]
        }
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Rasio Trigonometri Segitiga Siku-siku",
        "blocks": [
          { "kind": "p", "text": "Ikuti langkah-langkah ini untuk keenam mode:" },
          { "kind": "p", "text": "Identifikasi sisi yang benar lebih penting daripada menghafal rumus. Sebagian besar jawaban salah di halaman ini berasal dari sisi depan dan samping yang tertukar, bukan dari aritmetika." },
          { "kind": "h3", "text": "Panduan Kalkulator Lengkap" }
        ],
        "steps": [
          "Tentukan sudut acuan. Putuskan sudut lancip mana yang dibahas soal. Semua label sisi mengikuti pilihan ini.",
          "Beri label depan, samping, dan miring. Sisi di seberang sudut acuan adalah sisi depan, kaki yang menyentuhnya adalah sisi samping, dan sisi di seberang sudut siku-siku adalah sisi miring.",
          "Tentukan dua panjang sisi yang diketahui. Setiap mode membutuhkan tepat satu pasangan.",
          "Pilih mode yang cocok dengan kedua sisi tersebut. Gunakan tabel di bagian sebelumnya untuk memilih sinus, kosinus, tangen, kotangen, sekan, atau kosekan.",
          "Masukkan panjang sisi pertama yang dibutuhkan. Kolom-kolomnya diberi label, misalnya \"Opposite a\" dan \"Hypotenuse c\".",
          "Masukkan panjang sisi kedua yang dibutuhkan. Ikuti urutan yang ditunjukkan label: beberapa mode mencantumkan sisi miring terlebih dahulu.",
          "Pilih satuan yang kompatibel. Gunakan pemilih satuan di samping setiap masukan agar kedua pengukuran berbagi satu sistem satuan.",
          "Periksa masukan positif dan valid. Kedua kaki harus positif dan sisi miring harus lebih panjang dari kedua kaki.",
          "Klik tombol Hitung. Misalnya, \"Hitung sin(A)\" dalam mode sinus.",
          "Tinjau hasil dan langkah penyelesaian. Kalkulator menampilkan rumus, substitusi, dan nilai akhir.",
          "Periksa visualisasi langsung. Pastikan label diagram segitiga cocok dengan sudut acuan yang Anda maksud.",
          "Gunakan Atur Ulang untuk perhitungan baru. Tombol Atur Ulang membersihkan semua kolom sehingga perhitungan berikutnya dimulai dari awal."
        ],
        "closingParagraphs": [
          "Dengan sisi depan 3, sisi samping 4, dan sisi miring 5, semuanya dalam satuan yang sama, berikut yang dibutuhkan dan dikembalikan setiap mode:",
          "1. Mode Sinus: Masukkan \"Opposite a\" = 3 dan \"Hypotenuse c\" = 5, klik \"Hitung sin(A)\". Hasil: 0.6.",
          "2. Mode Kosinus: Masukkan \"Adjacent b\" = 4 dan \"Hypotenuse c\" = 5, klik \"Hitung cos(A)\". Hasil: 0.8.",
          "3. Mode Tangen: Masukkan \"Opposite a\" = 3 dan \"Adjacent b\" = 4, klik \"Hitung tan(A)\". Hasil: 0.75.",
          "4. Mode Kotangen: Masukkan \"Adjacent b\" = 4 dan \"Opposite a\" = 3, klik \"Hitung cot(A)\". Hasil: sekitar 1.3333.",
          "5. Mode Sekan: Masukkan \"Hypotenuse c\" = 5 dan \"Adjacent b\" = 4, klik \"Hitung sec(A)\". Hasil: 1.25.",
          "6. Mode Kosekan: Masukkan \"Hypotenuse c\" = 5 dan \"Opposite a\" = 3, klik \"Hitung csc(A)\". Hasil: sekitar 1.6667.",
          "Rasio tidak berdimensi, jadi pengukuran masukan hanya perlu satuan yang kompatibel, bukan satuan tertentu. Kalkulator tidak menemukan sisi atau sudut yang hilang dari mode-mode ini; kalkulator menghitung rasio yang diminta dari dua sisi yang Anda berikan."
        ]
      },
      "sec-foundations": {
        "h2": "Contoh Langkah demi Langkah Rasio Trigonometri",
        "blocks": [
          { "kind": "p", "text": "Empat contoh ini membangun pemahaman secara bertahap, dari segitiga bilangan bulat dasar hingga rasio eksak segitiga-segitiga khusus." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-siku 3-4-5" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], hitung keenam rasio. Sinus: [[3/5=0.6]]. Kosinus: [[4/5=0.8]]. Tangen: [[3/4=0.75]]. Kotangen: [[4/3\\approx1.3333]]. Sekan: [[5/4=1.25]]. Kosekan: [[5/3\\approx1.6667]]. Rasio-rasio berbeda karena masing-masing membandingkan pasangan sisi yang berbeda; semuanya menggambarkan sudut yang sama [[A]]." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-siku 5-12-13" },
          { "kind": "p", "text": "Diketahui [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Sinus: [[5/13\\approx0.3846]]. Kosinus: [[12/13\\approx0.9231]]. Tangen: [[5/12\\approx0.4167]]. Resiprokalnya: kosekan [[13/5=2.6]], sekan [[13/12\\approx1.0833]], kotangen [[12/5=2.4]]. Dibandingkan dengan segitiga 3-4-5, sisi samping yang lebih panjang membuat kosinus lebih besar dan tangen lebih kecil, yang merupakan wujud sudut yang lebih landai dalam bentuk rasio." },
          { "kind": "h3", "text": "Contoh 3: Segitiga 45-45-90" },
          { "kind": "p", "text": "Diketahui [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Sinus dan kosinus sama: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangen dan kotangen keduanya sama dengan 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Sekan dan kosekan sama: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Kaki yang sama membuat sinus sama dengan kosinus dan tangen sama dengan 1; simetri antara kedua sudut lancip menjelaskan ketiga kesamaan itu." },
          { "kind": "h3", "text": "Contoh 4: Segitiga 30-60-90" },
          { "kind": "p", "text": "Untuk sudut [[A=30^\\circ]], gunakan [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Sinus: [[1/2=0.5]]. Kosinus: [[\\sqrt{3}/2\\approx0.8660]]. Tangen: [[1/\\sqrt{3}\\approx0.5774]]. Kotangen: [[\\sqrt{3}\\approx1.7321]]. Sekan: [[2/\\sqrt{3}\\approx1.1547]]. Kosekan: [[2]]. Rasio untuk 30 dan 60 derajat saling terkait: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]], dan [[\\tan(30^\\circ)=\\cot(60^\\circ)]], karena sudut-sudut komplemen menukar depan dan samping." }
        ]
      },
      "sec-applications": {
        "h2": "Penerapan Rasio Trigonometri dalam Kehidupan Nyata",
        "blocks": [
          { "kind": "p", "text": "Setiap contoh menggunakan rasio yang cocok dengan situasinya, bukan keenamnya. Setiap contoh mengidentifikasi model segitiga, sisi yang diketahui, sudut acuan, dan makna hasilnya, dengan asumsi dinyatakan bila relevan." },
          { "kind": "h3", "text": "Contoh 5: Menghitung Kemiringan Atap" },
          { "kind": "p", "text": "Atap naik 3 m pada jarak horizontal 4 m. Segitiga yang disederhanakan menggunakan kenaikan sebagai sisi depan (a = 3 m) dan jarak horizontal sebagai sisi samping (b = 4 m), dengan permukaan atap sebagai sisi miring. Tangen cocok karena kedua kaki diketahui: [[\\tan(A)=3/4=0.75]]. Grade persentasenya adalah [[0.75\\times100\\%=75\\%]], dan sudutnya [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Rasio kemiringan, grade persentase, dan sudut adalah tiga cara untuk menyatakan hal yang sama: atap naik 0.75 m untuk setiap 1 m jarak horizontal. Ini contoh geometri, bukan penilaian desain atap yang lengkap." },
          { "kind": "h3", "text": "Contoh 6: Memahami Tangga yang Bersandar di Dinding" },
          { "kind": "p", "text": "Tangga mencapai 4 m di dinding dengan alasnya 3 m dari dinding. Tinggi dinding adalah sisi depan (a = 4 m), jarak tanah adalah sisi samping (b = 3 m), dan tangga adalah sisi miring: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Untuk sudut antara tangga dan tanah: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. Sudutnya [[A\\approx53.13^\\circ]]. Satu segitiga, satu sudut, tiga rasio berbeda, masing-masing menekankan pasangan sisi yang berbeda. Perhitungan ini tidak menetapkan keamanan tangga." },
          { "kind": "h3", "text": "Contoh 7: Mengevaluasi Gradien Ramp" },
          { "kind": "p", "text": "Ramp naik 0.6 m pada jarak horizontal 8 m. Tangen cocok untuk kedua kaki: [[\\tan(A)=0.6/8=0.075]]. Grade persentasenya [[0.075\\times100\\%=7.5\\%]], dan sudutnya [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Grade 7.5% bukanlah sudut 7.5 derajat: persen adalah rasio dikali 100, sedangkan derajat mengukur sudut itu sendiri, dan keduanya cepat menyimpang melewati nilai kecil. Kepatuhan aksesibilitas dan kode bangunan membutuhkan pemeriksaan tambahan di luar geometri ini." },
          { "kind": "h3", "text": "Contoh 8: Mengukur Elevasi Bangunan" },
          { "kind": "p", "text": "Pengamat berdiri 24 m horizontal dari bangunan, dan puncaknya 18 m di atas level mata. Sisi samping adalah 24 m dan sisi depan adalah 18 m, sehingga [[\\tan(A)=18/24=0.75]] dan [[A\\approx36.87^\\circ]], sudut elevasinya. Jarak pandang garis lurus adalah [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], sehingga [[\\sin(A)=18/30=0.6]] dan [[\\cos(A)=24/30=0.8]] untuk geometri yang sama. Hasilnya relatif terhadap level mata, belum tentu total tinggi bangunan." },
          { "kind": "h3", "text": "Contoh 9: Survei Selisih Elevasi" },
          { "kind": "p", "text": "Surveyor memodelkan selisih elevasi vertikal 15 m pada jarak horizontal 20 m. Tangen: [[\\tan(A)=15/20=0.75]]. Jarak garis lurus adalah [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], sehingga [[\\sin(A)=15/25=0.6]] dan [[\\cos(A)=20/25=0.8]] menggambarkan segitiga survei yang sama melalui pasangan sisi yang berbeda. Survei nyata mungkin membutuhkan penyesuaian tinggi instrumen dan koreksi di luar model datar ini." },
          { "kind": "h3", "text": "Contoh 10: Memperkirakan Tinggi Pohon dari Bayangannya" },
          { "kind": "p", "text": "Pohon vertikal menjatuhkan bayangan 9 m, dan tingginya 12 m di atas tanah. Dengan depan 12 m dan samping 9 m: [[\\tan(A)=12/9\\approx1.3333]]. Sisi miring garis pandang pada segitiga yang disederhanakan adalah [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], sehingga [[\\sin(A)=12/15=0.8]] dan [[\\cos(A)=9/15=0.6]]. Ini mengasumsikan tanah datar, pohon vertikal, dan bayangan diukur hingga titik tepat di bawah tajuk." },
          { "kind": "h3", "text": "Contoh 11: Memahami Kawat Penahan (Guy Wire)" },
          { "kind": "p", "text": "Kawat penahan terhubung ke tiang 12 m di atas tanah, dengan jangkar 5 m horizontal dari tiang. Panjang kawat adalah [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Sinus: [[12/13\\approx0.9231]]. Kosinus: [[5/13\\approx0.3846]]. Tangen: [[12/5=2.4]]. Tangen melebihi 1 di sini karena komponen vertikal lebih panjang dari jarak horizontal; itu normal, bukan kesalahan. Rasio-rasio ini tidak menyatakan apa pun tentang kekuatan jangkar atau tegangan kawat." },
          { "kind": "h3", "text": "Contoh 12: Memahami Geometri Tangga" },
          { "kind": "p", "text": "Tangga yang disederhanakan memiliki kenaikan total 2.4 m dan jarak horizontal 3.2 m, dengan panjang diagonal [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Sinus: [[2.4/4=0.6]]. Kosinus: [[3.2/4=0.8]]. Tangen: [[2.4/3.2=0.75]]. Rasio-rasio menggambarkan geometri keseluruhan tangga, tetapi tidak menetapkan kepatuhan terhadap peraturan tangga, yang juga membatasi dimensi anak tangga individual." },
          { "kind": "h3", "text": "Contoh 13: Memahami Arah Boom Derek" },
          { "kind": "p", "text": "Boom derek yang disederhanakan memiliki komponen vertikal 8 m dan proyeksi horizontal 6 m, dengan [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Sinus [[8/10=0.8]] menggambarkan bagian vertikal boom, kosinus [[6/10=0.6]] bagian horizontalnya, dan tangen [[8/6\\approx1.3333]] kecuramannya. Rasio trigonometri saja tidak menentukan kapasitas derek atau pengoperasian yang aman." },
          { "kind": "h3", "text": "Contoh 14: Memperkirakan Gradien Jalur Pendakian" },
          { "kind": "p", "text": "Bagian lurus jalur naik 120 m pada 800 m horizontal. Tangen: [[\\tan(A)=120/800=0.15]]. Gradenya [[15\\%]] dan sudutnya [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Model gradien konstan ini tidak menggambarkan jalur berliku, tetapi memberikan kecuraman rata-rata yang berguna untuk merencanakan usaha." },
          { "kind": "h3", "text": "Contoh 15: Memeriksa Penyangga Mekanis" },
          { "kind": "p", "text": "Penyangga diagonal memiliki komponen vertikal 1.5 m dan komponen horizontal 2 m, dengan [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Sinus: [[1.5/2.5=0.6]]. Kosinus: [[2/2.5=0.8]]. Tangen: [[1.5/2=0.75]]. Ini adalah rasio 3-4-5 pada setengah skala, menunjukkan bahwa penskalaan proporsional tidak mengubah setiap rasio. Ini tidak menyatakan apa pun tentang kekuatan atau kapasitas beban penyangga." },
          { "kind": "h3", "text": "Contoh 16: Memahami Pendakian Lurus Pesawat" },
          { "kind": "p", "text": "Segmen penerbangan lurus yang disederhanakan naik 1.5 km vertikal pada 5 km horizontal. Tangen: [[\\tan(A)=1.5/5=0.3]], sehingga [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. Jarak garis lurus adalah [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], sehingga [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. Tangen menggunakan jarak di tanah, sinus menggunakan jarak jalur terbang; pendakian yang sama, panjang acuan berbeda. Ini contoh geometri, bukan perhitungan navigasi penerbangan." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktis" }
        ],
        "table": {
          "headers": ["Situasi", "Pengukuran yang diketahui", "Rasio utama", "Nilai", "Interpretasi"],
          "rows": [
            ["Kemiringan atap", "Naik 3 m, jarak 4 m", "Tangen", "0.75", "Grade 75%, 36.87°"],
            ["Tangga", "Tinggi 4 m, alas 3 m", "Sinus", "0.8", "Sudut ke tanah 53.13°"],
            ["Ramp", "Naik 0.6 m, jarak 8 m", "Tangen", "0.075", "Grade 7.5%, 4.29°"],
            ["Elevasi bangunan", "Tinggi 18 m, jarak 24 m", "Tangen", "0.75", "Sudut elevasi 36.87°"],
            ["Survei", "Naik 15 m, jarak 20 m", "Tangen", "0.75", "Bentuk sama dengan kemiringan atap"],
            ["Bayangan pohon", "Tinggi 12 m, bayangan 9 m", "Tangen", "1.3333", "Lebih curam dari 45°"],
            ["Kawat penahan", "Tinggi 12 m, jangkar 5 m", "Tangen", "2.4", "Kawat jauh lebih curam dari jarak horizontal"],
            ["Tangga bangunan", "Naik 2.4 m, jarak 3.2 m", "Tangen", "0.75", "Rasio sama dengan 3-4-5"],
            ["Boom derek", "Vertikal 8 m, horizontal 6 m", "Sinus", "0.8", "Sebagian besar jangkauan vertikal"],
            ["Jalur pendakian", "Naik 120 m, jarak 800 m", "Tangen", "0.15", "Grade rata-rata 15%"],
            ["Penyangga mekanis", "Vertikal 1.5 m, horizontal 2 m", "Sinus", "0.6", "Geometri 3-4-5 berskala"],
            ["Pendakian pesawat", "Naik 1.5 km, jarak 5 km", "Tangen", "0.3", "Sudut pendakian 16.70°"]
          ]
        },
        "imgAlt": "Empat panel: kemiringan atap 0.75, tangga sin 0.8, survei sin 0.6, ramp tan 0.075 dengan segitiga berlabel",
        "figcaption": "Empat soal dunia nyata: kemiringan atap, tangga, survei, dan ramp, masing-masing dengan segitiga dan rasio kuncinya."
      },
      "sec-relate": {
        "h2": "Hubungan Antara Enam Rasio Trigonometri",
        "blocks": [
          { "kind": "p", "text": "Keenam rasio bukanlah enam fakta independen. Mereka membentuk tiga pasangan resiprokal, dua hubungan hasil bagi, dan tiga identitas Pythagoras. Mengetahui hubungan ini mengubah enam rumus menjadi satu sistem, dan memberikan metode verifikasi untuk setiap perhitungan." },
          { "kind": "h3", "text": "Pasangan Resiprokal" },
          { "kind": "p", "text": "Setiap pasangan resiprokal dikalikan menjadi 1 karena pecahannya saling menghilangkan: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. Pada segitiga 3-4-5: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Selisih kecil berasal dari desimal yang dibulatkan, bukan dari matematikanya." },
          { "kind": "h3", "text": "Tangen sebagai Sinus Dibagi Kosinus" },
          { "kind": "p", "text": "Hubungan hasil bagi [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] mengikuti dari menghilangkan sisi miring yang sama: [[(a/c)/(b/c)=a/b]]. Periksa dengan nilai 3-4-5: [[0.6/0.8=0.75]], yang cocok dengan [[\\tan(A)]]. Ini verifikasi yang berguna: jika tangen Anda tidak sama dengan sinus dibagi kosinus, ada sisi yang salah label." },
          { "kind": "h3", "text": "Kotangen sebagai Kosinus Dibagi Sinus" },
          { "kind": "p", "text": "Demikian pula, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]] Dengan nilai 3-4-5: [[0.8/0.6\\approx1.3333]], cocok dengan [[\\cot(A)]]. Kotangen mewarisi semua yang diketahui tangen, dalam keadaan terbalik." },
          { "kind": "h3", "text": "Identitas Trigonometri Pythagoras" },
          { "kind": "p", "text": "Identitas [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] mengikuti langsung dari teorema Pythagoras: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Untuk segitiga 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. Dua identitas lagi memperluas polanya: [[1+\\tan^2(A)=\\sec^2(A)]] dan [[1+\\cot^2(A)=\\csc^2(A)]], diperoleh dengan membagi identitas pertama dengan kosinus kuadrat dan sinus kuadrat. Keduanya berguna ketika soal memberikan satu rasio dan membutuhkan rasio lain tanpa panjang sisi." },
          { "kind": "h3", "text": "Pengaruh Sudut Berkomplemen terhadap Rasio" },
          { "kind": "p", "text": "Karena [[A+C=90^\\circ]], mengubah sudut acuan dari [[A]] ke [[C]] menukar depan dan samping: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]], dan [[\\csc(A)=\\sec(C)]]. Pada segitiga 3-4-5, [[\\sin(A)=3/5=0.6]] sedangkan [[\\cos(C)=3/5=0.6]], karena sisi di depan [[A]] bersampingan dengan [[C]]. Setiap rasio pada satu sudut lancip muncul kembali sebagai kofungsinya pada sudut lainnya." }
        ]
      },
      "sec-angles": {
        "h2": "Memahami Rasio Trigonometri pada Berbagai Sudut",
        "blocks": [
          { "kind": "p", "text": "Ketika sudut acuan lancip bertambah besar, rasio berubah dengan cara yang dapat diprediksi. Sinus naik dari mendekati 0 menuju 1, sedangkan kosinus turun dari mendekati 1 menuju 0. Tangen naik dari mendekati 0 tanpa batas atas, sedangkan kotangen turun dari nilai besar menuju 0. Sekan naik dari mendekati 1 tanpa batas, sedangkan kosekan turun dari nilai besar menuju 1. Ini adalah perilaku batas di dekat 0 dan 90 derajat, bukan nilai yang benar-benar dicapai sudut lancip pada segitiga siku-siku yang valid dan tidak degenerat di titik ujung." },
          { "kind": "p", "text": "Polanya simetris: sinus pada 30 derajat sama dengan kosinus pada 60 derajat, mencerminkan hubungan komplemen. Kotangen, sekan, dan kosekan berasal dari hubungan resiprokal: misalnya, pada 30 derajat, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] dan [[\\csc(30^\\circ)=1/0.5=2]]." }
        ],
        "table": {
          "headers": ["Sudut", "Sinus", "Kosinus", "Tangen"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "Sekitar 0.8660", "Sekitar 0.5774"],
            ["[[45^\\circ]]", "Sekitar 0.7071", "Sekitar 0.7071", "1"],
            ["[[60^\\circ]]", "Sekitar 0.8660", "0.5", "Sekitar 1.7321"]
          ]
        },
        "imgAlt": "Bagan alir: pilih sinus atau kosekan untuk depan dan miring, kosinus atau sekan untuk samping dan miring, tangen atau kotangen untuk kedua kaki",
        "figcaption": "Pilih mode kalkulator dari pasangan sisi yang Anda ketahui: setiap pasangan memberikan rasio langsung dan resiprokalnya."
      },
      "sec-missing-side": {
        "h2": "Cara Menghitung Sisi Segitiga Siku-siku yang Tidak Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator enam rasio menemukan rasio dari sisi yang diketahui. Menemukan sisi yang tidak diketahui dari sudut dan sisi yang diketahui adalah tugas terkait tetapi berbeda, diselesaikan dengan menyusun ulang rumus rasio. Ini perhitungan pendamping, bukan fitur kalkulator rasio itu sendiri." },
          { "kind": "h3", "text": "Menemukan Sisi Depan dengan Sinus" },
          { "kind": "p", "text": "Mulai dari [[\\sin(A)=a/c]] dan susun ulang: [[[\\boxed{a=c\\sin(A)}]]] Dengan sisi miring 10 m dan sudut [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Menemukan Sisi Samping dengan Kosinus" },
          { "kind": "p", "text": "Mulai dari [[\\cos(A)=b/c]] dan susun ulang: [[[\\boxed{b=c\\cos(A)}]]] Dengan sisi miring 10 m dan sudut [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Menemukan Sisi Depan dengan Tangen" },
          { "kind": "p", "text": "Mulai dari [[\\tan(A)=a/b]] dan susun ulang: [[[\\boxed{a=b\\tan(A)}]]] Dengan sisi samping 8 m dan sudut [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. Tangen sangat berguna di sini karena menghubungkan kedua kaki secara langsung, tanpa sisi miring." }
        ]
      },
      "sec-inverse": {
        "h2": "Cara Menemukan Sudut dari Rasio Trigonometri",
        "blocks": [
          { "kind": "p", "text": "Rasio trigonometri bukanlah sudut. Ketika rasio diketahui dan sudut tidak diketahui, fungsi trigonometri invers mengembalikan sudut lancip acuan: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]], dan [[A=\\tan^{-1}(r)]]. Ini disebut sinus invers, kosinus invers, dan tangen invers, juga dikenal sebagai arksinus, arkkosinus, dan arktangen." },
          { "kind": "h3", "text": "Contoh Pengerjaan Menggunakan Sinus" },
          { "kind": "p", "text": "Diketahui [[\\sin(A)=0.6]], sudutnya [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Contoh Pengerjaan Menggunakan Kosinus" },
          { "kind": "p", "text": "Diketahui [[\\cos(A)=0.8]], sudutnya [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Contoh Pengerjaan Menggunakan Tangen" },
          { "kind": "p", "text": "Diketahui [[\\tan(A)=0.75]], sudutnya [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { "kind": "p", "text": "Ketiganya mengembalikan sudut yang sama karena ketiga rasio menggambarkan segitiga 3-4-5 yang sama. Perbedaan antara fungsi invers dan resiprokal penting di sini: [[1/\\sin(A)=\\csc(A)]] adalah resiprokal, rasio yang berbeda, sedangkan [[\\sin^{-1}(r)]] adalah fungsi invers, yang mengembalikan sudut. Saat menghitung sudut secara manual, periksa apakah alat Anda dalam mode derajat atau radian; kalkulator halaman ini hanya bekerja dengan rasio, jadi pemulihan sudut adalah langkah terpisah." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menggunakan Rasio Trigonometri",
        "blocks": [
          { "kind": "h3", "text": "Mengacaukan Sisi Depan dengan Sisi Samping" },
          { "kind": "p", "text": "Label bergantung pada sudut acuan. Pada segitiga 3-4-5, menghitung [[4/5=0.8]] untuk sinus sebenarnya menghasilkan kosinus. Perbaikan: tandai sudut acuan terlebih dahulu, lalu beri label sisi di seberangnya sebagai sisi depan." },
          { "kind": "h3", "text": "Mengidentifikasi Sisi Relatif terhadap Sudut Acuan yang Salah" },
          { "kind": "p", "text": "Memberi label untuk sudut C padahal soal menanyakan sudut A menukar setiap rasio. Perbaikan: tulis sudut mana yang menjadi acuan sebelum menyentuh kalkulator." },
          { "kind": "h3", "text": "Menggunakan Sinus Padahal Seharusnya Kosinus" },
          { "kind": "p", "text": "Sinus membutuhkan sisi depan; kosinus membutuhkan sisi samping. Jika Anda mengetahui sisi samping dan sisi miring tetapi tetap menghitung [[a/c]], Anda telah menukar kaki-kakinya. Perbaikan: cocokkan rasio dengan pasangan yang diketahui menggunakan tabel di bagian memilih." },
          { "kind": "h3", "text": "Menggunakan Tangen Ketika Sisi yang Diketahui adalah Depan dan Miring" },
          { "kind": "p", "text": "Tangen membutuhkan kedua kaki. Dengan sisi depan dan sisi miring diketahui, rasio langsung yang benar adalah sinus. Perbaikan: periksa pasangan mana yang benar-benar Anda miliki sebelum memilih mode." },
          { "kind": "h3", "text": "Membalik Pembilang dan Penyebut" },
          { "kind": "p", "text": "Menghitung [[c/a]] ketika maksud Anda sinus menghasilkan kosekan, nilai di atas 1 bukannya di bawah 1. Perbaikan: penyebut adalah sisi miring untuk sinus dan kosinus, kaki samping untuk tangen." },
          { "kind": "h3", "text": "Mengacaukan Tangen dengan Kotangen" },
          { "kind": "p", "text": "Tangen adalah [[a/b]]; kotangen adalah [[b/a]]. Keduanya resiprokal, sehingga satu kesalahan membalikkan jawaban. Perbaikan: baca label mode sebelum memasukkan nilai." },
          { "kind": "h3", "text": "Mengacaukan Kosinus dengan Sekan" },
          { "kind": "p", "text": "Kosinus adalah [[b/c]], selalu di bawah 1; sekan adalah [[c/b]], selalu di atas 1. Jika sekan Anda keluar di bawah 1, Anda menghitung kosinus. Perbaikan: rasio resiprokal menempatkan sisi miring di atas." },
          { "kind": "h3", "text": "Mengacaukan Sinus dengan Kosekan" },
          { "kind": "p", "text": "Inversi yang sama: sinus adalah [[a/c]], kosekan adalah [[c/a]]. Perbaikan: periksa apakah hasil Anda berada dalam rentang yang diharapkan untuk mode yang Anda pilih." },
          { "kind": "h3", "text": "Menganggap Setiap Rasio Harus Kurang dari 1" },
          { "kind": "p", "text": "Sinus dan kosinus di bawah 1, tetapi tangen, kotangen, sekan, dan kosekan semuanya dapat melebihi 1. Tangen 2.4 sangat valid untuk lereng curam. Perbaikan: pelajari rentang valid setiap rasio." },
          { "kind": "h3", "text": "Menganggap Rasio Seperti 0.6 Mewakili Sudut 0.6 Derajat" },
          { "kind": "p", "text": "Rasio adalah bilangan murni, bukan ukuran derajat. Sudut di balik [[\\sin(A)=0.6]] adalah sekitar 36.87 derajat, ditemukan dengan sinus invers. Perbaikan: rasio menjawab \"bagaimana sisi-sisinya dibandingkan\"; fungsi invers menjawab \"berapa sudutnya\"." },
          { "kind": "h3", "text": "Lupa Bahwa Rasio Tidak Berdimensi" },
          { "kind": "p", "text": "Memasukkan sisi depan dalam inci dan sisi miring dalam kaki merusak rasio, karena satuannya tidak lagi saling menghilangkan. Perbaikan: ubah kedua masukan ke satu satuan terlebih dahulu." },
          { "kind": "h3", "text": "Mencampur Satuan Pengukuran yang Tidak Kompatibel" },
          { "kind": "p", "text": "Akar penyebab yang sama, layak diulang: rasio 3 inci terhadap 5 sentimeter bukanlah 0.6. Perbaikan: gunakan pemilih satuan pada kedua masukan sebelum menghitung." },
          { "kind": "h3", "text": "Memasukkan Panjang Sisi Nol atau Negatif" },
          { "kind": "p", "text": "Sisi segitiga harus positif. Masukan nol atau negatif tidak menggambarkan segitiga, dan kalkulator tidak dapat menghasilkan rasio yang bermakna. Perbaikan: ukur ulang atau baca ulang soal." },
          { "kind": "h3", "text": "Menggunakan Panjang Sisi yang Tidak Membentuk Segitiga Siku-siku yang Valid" },
          { "kind": "p", "text": "Jika sisi-sisinya gagal dalam pemeriksaan Pythagoras, misalnya 2, 3, dan 10, tidak ada segitiga siku-siku dengan panjang tersebut. Perbaikan: verifikasi [[a^2+b^2=c^2]] sebelum menghitung rasio." },
          { "kind": "h3", "text": "Membulatkan Terlalu Dini" },
          { "kind": "p", "text": "Membulatkan rasio perantara ke satu desimal lalu mengalikannya memperbesar kesalahan. Perbaikan: pertahankan presisi penuh di setiap langkah dan bulatkan hanya jawaban akhirnya." },
          { "kind": "h3", "text": "Mengacaukan Rasio Resiprokal dengan Fungsi Trigonometri Invers" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] adalah rasio; [[\\sin^{-1}(0.6)]] adalah sudut. Notasi yang mirip menyebabkan kebingungan nyata. Perbaikan: resiprokal membalik pecahan, fungsi invers mengembalikan sudut." },
          { "kind": "h3", "text": "Memperlakukan Sisi Miring sebagai Salah Satu Kaki" },
          { "kind": "p", "text": "Sisi miring selalu sisi terpanjang dan selalu berhadapan dengan sudut siku-siku. Menetapkannya sebagai kaki merusak setiap rasio. Perbaikan: temukan sisi terpanjang terlebih dahulu dan beri label c." },
          { "kind": "h3", "text": "Menganggap Keenam Rasio Memiliki Nilai yang Sama" },
          { "kind": "p", "text": "Pada segitiga 3-4-5 keenam nilainya berkisar dari 0.6 hingga 1.6667. Hanya segitiga khusus seperti 45-45-90 yang membuat beberapa rasio sama. Perbaikan: harapkan enam angka berbeda dari satu segitiga." },
          { "kind": "h3", "text": "Menganggap Sisi yang Sama Selalu Sisi Depan" },
          { "kind": "p", "text": "Sisi di depan sudut A bersampingan dengan sudut C. Setiap jawaban pengerjaan harus menyatakan sudut acuannya. Perbaikan: beri label ulang sisi setiap kali sudut acuan berubah." },
          { "kind": "h3", "text": "Memperlakukan Hasil yang Disederhanakan sebagai Bukti Rekayasa" },
          { "kind": "p", "text": "Pemeriksaan rasio pada penyangga atau kawat penahan menggambarkan geometri, bukan kekuatan, tegangan, atau kepatuhan kode. Perbaikan: gunakan rasio untuk langkah geometri, dan analisis teknik yang memenuhi syarat untuk keputusan keselamatan." },
          { "kind": "h3", "text": "Salah Versus Benar: Contoh Konkret" },
          { "kind": "p", "text": "Diketahui [[a=3]], [[b=4]], [[c=5]], perhitungan sinus yang salah menggunakan pasangan sisi yang keliru: [[3/4=0.75]]. Itu rasio tangen, bukan sinus. Perhitungan yang benar adalah [[\\sin(A)=3/5=0.6]]. Verifikasi dengan hubungan hasil bagi: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Mengidentifikasi sisi yang benar sangat penting, karena aritmetikanya sepele begitu sisinya benar." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Hasil Trigonometri Anda Valid",
        "blocks": [
          { "kind": "p", "text": "Segitiga siku-siku yang valid dan tidak degenerat membutuhkan kaki positif, sisi miring lebih panjang dari kedua kaki, sisi-sisi yang memenuhi teorema Pythagoras, satuan yang kompatibel, pasangan sisi yang benar untuk rasio yang dipilih, dan pasangan resiprokal yang cocok. Empat metode cepat mencakup semuanya." },
          { "kind": "h3", "text": "Metode Verifikasi 1: Periksa Panjang Sisi" },
          { "kind": "p", "text": "Untuk segitiga 3-4-5: [[3^2+4^2=5^2]], atau [[9+16=25]]. Lolos pemeriksaan Pythagoras memastikan sisi-sisi menggambarkan segitiga siku-siku nyata sebelum Anda mempercayai rasio apa pun yang diturunkan darinya." },
          { "kind": "h3", "text": "Metode Verifikasi 2: Periksa Pasangan Resiprokal" },
          { "kind": "p", "text": "Setiap pasangan langsung-resiprokal harus dikalikan menjadi 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Selisih kecil berasal dari desimal yang dibulatkan." },
          { "kind": "h3", "text": "Metode Verifikasi 3: Periksa Tangen Menggunakan Sinus dan Kosinus" },
          { "kind": "p", "text": "Hubungan hasil bagi memberikan pemeriksaan independen: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Jika mode tangen kalkulator dan perhitungan ini tidak cocok, ada sisi yang salah label." },
          { "kind": "h3", "text": "Metode Verifikasi 4: Periksa Sudut Invers" },
          { "kind": "p", "text": "Pulihkan sudutnya dan lihat apakah masuk akal: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Hasil lancip antara 0 dan 90 derajat yang cocok dengan bentuk segitiga memastikan rasio-rasionya." }
        ]
      },
      "sec-conclusion": {
        "h2": "Kuasai Keenam Rasio dengan Satu Segitiga",
        "blocks": [
          { "kind": "p", "text": "Setiap rasio di halaman ini berasal dari tiga sisi yang sama dan satu sudut acuan. Beri label pada segitiga, cocokkan pasangan sisi dengan modenya, dan biarkan kalkulator mengerjakan aritmetikanya. Sinus, kosinus, dan tangen menjawab perbandingan langsung; kosekan, sekan, dan kotangen membaliknya. SOH-CAH-TOA mengingat tiga yang pertama, aturan resiprokal mengingat sisanya, dan identitas sinus kuadrat tambah kosinus kuadrat sama dengan 1 mengikat sinus dan kosinus bersama. Verifikasi dengan pemeriksaan Pythagoras dan hasil kali resiprokal, lalu kembali ke kalkulator di atas halaman ini untuk menjalankan angka-angka Anda." }
        ]
      }
    },
    "faqs": [
      { "question": "Apa enam rasio trigonometri segitiga siku-siku?", "answer": "Keenam rasio adalah sinus (depan per miring), kosinus (samping per miring), tangen (depan per samping), kotangen (samping per depan), sekan (miring per samping), dan kosekan (miring per depan). Tiga yang pertama adalah rasio utama; tiga yang terakhir adalah resiprokalnya." },
      { "question": "Bagaimana cara menghitung sinus, kosinus, dan tangen?", "answer": "Tentukan sudut acuan, lalu bagi pasangan sisi yang benar. Sinus adalah sisi depan dibagi sisi miring, kosinus adalah sisi samping dibagi sisi miring, dan tangen adalah sisi depan dibagi sisi samping. Untuk segitiga 3-4-5, itu menghasilkan 3/5 = 0.6, 4/5 = 0.8, dan 3/4 = 0.75." },
      { "question": "Apa perbedaan rasio trigonometri langsung dan resiprokal?", "answer": "Rasio langsung (sinus, kosinus, tangen) menempatkan perbandingan sisi yang lebih kecil terlebih dahulu, sedangkan rasio resiprokal (kosekan, sekan, kotangen) membalik pecahannya. Kosekan adalah 1/sinus, sekan adalah 1/kosinus, dan kotangen adalah 1/tangen. Setiap pasangan dikalikan menjadi 1." },
      { "question": "Mengapa rasio trigonometri tidak berdimensi?", "answer": "Rasio membagi satu panjang dengan panjang lain, sehingga satuannya saling menghilangkan. 3 meter dibagi 5 meter adalah 0.6, dan 300 sentimeter dibagi 500 sentimeter juga 0.6. Hasilnya tidak berdimensi, itulah sebabnya kedua masukan hanya perlu berbagi satu sistem satuan." },
      { "question": "Bagaimana cara memilih mode kalkulator yang benar?", "answer": "Cocokkan mode dengan pasangan sisi yang Anda ketahui. Depan dan miring: mode sinus atau kosekan. Samping dan miring: mode kosinus atau sekan. Kedua kaki: mode tangen atau kotangen. Rasio langsung dan resiprokalnya menggunakan dua masukan yang sama dalam urutan berlawanan." },
      { "question": "Bisakah rasio tangen atau kotangen lebih besar dari 1?", "answer": "Ya. Tangen membandingkan kedua kaki, sehingga melebihi 1 kapan pun sisi depan lebih panjang dari sisi samping, seperti pada lereng curam. Kotangen melebihi 1 ketika sisi samping lebih panjang. Hanya sinus dan kosinus yang dibatasi 1, karena penyebutnya adalah sisi terpanjang." },
      { "question": "Mengapa sekan dan kosekan lebih besar dari 1 untuk sudut lancip?", "answer": "Keduanya menempatkan sisi miring, sisi terpanjang segitiga, sebagai pembilang. Membagi sisi terpanjang dengan sisi yang lebih pendek selalu menghasilkan nilai di atas 1. Untuk segitiga 3-4-5, sekan adalah 5/4 = 1.25 dan kosekan adalah 5/3, sekitar 1.6667." },
      { "question": "Bagaimana cara menemukan sudut dari rasio trigonometri?", "answer": "Gunakan fungsi trigonometri invers: arksinus untuk rasio sinus, arkkosinus untuk kosinus, arktangen untuk tangen. Misalnya, jika sinus adalah 0.6, sudutnya adalah arksinus(0.6), sekitar 36.87 derajat. Perhatikan bahwa ini berbeda dari resiprokal: 1/sinus adalah kosekan, bukan arksinus." },
      { "question": "Bagaimana cara menghitung sisi yang hilang menggunakan trigonometri?", "answer": "Susun ulang rumus rasio. Dengan sudut dan sisi miring yang diketahui, sisi depan adalah sisi miring dikali sinus sudut, dan sisi samping adalah sisi miring dikali kosinus. Dengan sisi samping yang diketahui, sisi depan adalah sisi samping dikali tangen sudut." },
      { "question": "Apa perbedaan sinus invers dan kosekan?", "answer": "Sinus invers (arksinus) mengambil rasio dan mengembalikan sudut: arksinus(0.6) adalah sekitar 36.87 derajat. Kosekan mengambil rasio yang sama dan mengembalikan resiprokalnya: 1/0.6 adalah sekitar 1.6667, tetap rasio. Satu membalikkan fungsi sinus; yang lain membalik pecahan." },
      { "question": "Bagaimana cara memverifikasi perhitungan trigonometri saya?", "answer": "Empat pemeriksaan: pastikan sisi-sisinya memenuhi teorema Pythagoras, pastikan setiap pasangan resiprokal dikalikan menjadi 1, pastikan tangen sama dengan sinus dibagi kosinus, dan pulihkan sudutnya dengan fungsi invers untuk melihatnya lancip dan masuk akal. Kecocokan di semua pemeriksaan berarti label sisinya benar." },
      { "question": "Bagaimana rasio trigonometri digunakan dalam kehidupan nyata?", "answer": "Rasio mengubah sisi yang diukur menjadi sudut dan kemiringan: kemiringan atap dari kenaikan dan jarak horizontal, sudut tangga dari tinggi dan jarak alas, grade ramp, sudut elevasi bangunan, garis pandang survei, arah boom derek, dan gradien jalur pendakian. Rasio memberikan geometrinya; pemeriksaan teknik terpisah menangani keselamatan." }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-siku Terkait",
    "relatedItems": [
      "Kalkulator Rasio Sinus",
      "Kalkulator Rasio Kosinus",
      "Kalkulator Rasio Tangen",
      "Kalkulator Rasio Kotangen",
      "Kalkulator Rasio Sekan",
      "Kalkulator Rasio Kosekan",
      "Kalkulator Sudut Segitiga Siku-siku",
      "Kalkulator Sisi Segitiga Siku-siku Menggunakan Sudut",
      "Kalkulator Segitiga Siku-siku Khusus"
    ]
  },
  "ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
      "sec-intro": "ما هي حاسبة النسب المثلثية للمثلث القائم؟",
      "sec-triangle": "فهم أضلاع المثلث القائم",
      "sec-ratios": "فهم النسب المثلثية",
      "sec-six": "النسب المثلثية الست للمثلث القائم",
      "sec-choose": "كيفية اختيار النسبة المثلثية الصحيحة",
      "sec-howto": "كيفية استخدام حاسبة النسب المثلثية للمثلث القائم",
      "sec-foundations": "أمثلة خطوة بخطوة للنسب المثلثية",
      "sec-applications": "تطبيقات النسب المثلثية في الحياة الواقعية",
      "sec-relate": "كيف ترتبط النسب المثلثية الست ببعضها",
      "sec-angles": "فهم النسب المثلثية عند زوايا مختلفة",
      "sec-missing-side": "كيفية حساب ضلع مجهول في المثلث القائم",
      "sec-inverse": "كيفية إيجاد زاوية من نسبة مثلثية",
      "sec-mistakes": "أخطاء شائعة عند استخدام النسب المثلثية",
      "sec-verify": "كيفية التحقق من صحة نتائجك المثلثية",
      "sec-related": "حاسبات ذات صلة",
      "sec-faq": "الأسئلة الشائعة",
      "sec-conclusion": "الخلاصة"
    },
    "sections": {
      "sec-intro": {
        "h2": "ما هي حاسبة النسب المثلثية للمثلث القائم؟",
        "blocks": [
          { "kind": "p", "text": "تحسب حاسبة النسب المثلثية للمثلث القائم النسب المثلثية الست، وهي الجيب وجيب التمام والظل وظل التمام والقاطع وقاطع التمام، من أطوال أضلاع المثلث القائم. تقارن كل نسبة زوجاً محدداً من الأضلاع بالنسبة إلى زاوية حادة مرجعية مختارة. توفر الحاسبة في هذه الصفحة ستة أوضاع، واحد لكل نسبة، فتدخل الضلعين اللذين تحتاجهما كل نسبة وتحصل على القيمة فوراً." },
          { "kind": "p", "text": "تعتمد هذه النسب على زاوية مرجعية، وليس على المثلث وحده. فبالنسبة للمثلث نفسه، تغيير الزاوية الحادة التي تُقاس ضدها يبدّل دوري الضلعين، فتتغير قيم النسب أيضاً. لهذا تُنظم أوضاع الحاسبة حسب أزواج الأضلاع المعروفة: الضلع المقابل والوتر يعطيان الجيب، والضلع المجاور والوتر يعطيان جيب التمام، والضلعان يعطيان الظل. أما الأوضاع المقلوبة فتعطي قاطع التمام والقاطع وظل التمام من الأزواج نفسها." },
          { "kind": "p", "text": "خذ مثلث 3-4-5 حيث الضلع المقابل 3 والضلع المجاور 4 والوتر 5. ينتج المثلث الواحد ست قيم مختلفة: [[\\sin(A)=3/5=0.6]] و[[\\cos(A)=4/5=0.8]] و[[\\tan(A)=3/4=0.75]]، مع النسب المقلوبة [[\\csc(A)\\approx1.6667]] و[[\\sec(A)=1.25]] و[[\\cot(A)\\approx1.3333]]. تطرح كل نسبة سؤالاً مختلفاً عن الشكل نفسه. فهم الصيغ يتيح لك التحقق من أي نتيجة يدوياً، وهي الطريقة الأكيدة لاكتشاف الأضلاع المسماة خطأً." }
        ]
      },
      "sec-triangle": {
        "h2": "فهم أضلاع المثلث القائم",
        "blocks": [
          { "kind": "p", "text": "كل نسبة مثلثية هي مقارنة بين ضلعين، لذا فإن تسمية الأضلاع تسمية صحيحة هي أساس كل ما سيأتي. يستخدم هذا الدليل اصطلاحاً واحداً متسقاً في كل أقسامه: [[A]] هي الزاوية الحادة المرجعية في الأسفل اليسار، و[[B]] هي الزاوية القائمة في الأسفل اليمين، و[[C]] هي الزاوية الحادة الأخرى في الأعلى، والضلع [[a]] هو الضلع العمودي، والضلع [[b]] هو القاعدة الأفقية، والضلع [[c]] هو الوتر المائل." },
          { "kind": "h3", "text": "ما هو المثلث القائم؟" },
          { "kind": "p", "text": "المثلث القائم له زاوية واحدة قياسها 90 درجة بالضبط، والزاويتان الأخريان حادتان. يلتقي الضلعان عند الزاوية القائمة، ويقع الوتر مقابل الزاوية القائمة. وبما أن مجموع الزوايا الداخلية الثلاث 180 درجة، فإن الزاويتين الحادتين متتامتان: [[A+C=90^\\circ]]. تناسب المثلثات القائمة الحسابات المثلثية لأن تثبيت زاوية حادة واحدة يحدد شكل المثلث تماماً: فكل المثلثات القائمة التي لها الزاوية الحادة نفسها متشابهة، لذا تتطابق نسب أضلاعها." },
          { "kind": "h3", "text": "ما هو الضلع المقابل؟" },
          { "kind": "p", "text": "الضلع المقابل يقع مباشرة قبالة الزاوية المرجعية المختارة. وفي اصطلاحنا، الضلع [[a]] مقابل الزاوية [[A]]. وفي المسائل العملية يمثل الضلع المقابل غالباً الارتفاع العمودي أو فرق الارتفاع أو المركبة العمودية لمنحدر. ودوره ليس ثابتاً على ضلع بعينه: فإذا تغيرت الزاوية المرجعية أصبح ضلع آخر هو المقابل." },
          { "kind": "h3", "text": "ما هو الضلع المجاور؟" },
          { "kind": "p", "text": "الضلع المجاور يلامس الزاوية المرجعية لكنه ليس الوتر. وفي اصطلاحنا، الضلع [[b]] مجاور للزاوية [[A]]. وهو يمثل غالباً المسافة الأفقية أو مسافة على الأرض أو الإسقاط الأفقي. ومن بين الأضلاع الثلاثة، الضلع المجاور هو الأكثر خلطاً بالضلع المقابل، وهذا التبديل وحده هو المصدر الأكثر شيوعاً لقيم النسب الخاطئة." },
          { "kind": "h3", "text": "ما هو الوتر؟" },
          { "kind": "p", "text": "الوتر مقابل الزاوية القائمة وهو دائماً أطول أضلاع المثلث. وفي اصطلاحنا هو الضلع المائل [[c]]. وفي المواقف الواقعية قد يمثل سلماً أو كابلاً أو دعامة سقف مائلة أو مسافة رؤية بخط مستقيم. ويظهر في صيغ الجيب وجيب التمام والقاطع وقاطع التمام، لكنه لا يظهر مباشرة في صيغتي الظل وظل التمام اللتين تقارنان الضلعين." },
          { "kind": "h3", "text": "لماذا تهم الزاوية المرجعية؟" },
          { "kind": "p", "text": "المقابل والمجاور تسميتان نسبيتان، وليستا اسمين دائمين. فبالنسبة للزاوية [[A]]، الضلع المقابل هو [[a]] والضلع المجاور هو [[b]]. أما بالنسبة للزاوية [[C]] فتتبدل التسميتان: الضلع المقابل هو [[b]] والضلع المجاور هو [[a]]. ويبقى الوتر [[c]] أياً كانت الزاوية الحادة المرجعية. حدد دائماً الزاوية التي تقيس ضدها قبل تسمية أي ضلع." }
        ],
        "imgAlt": "مثلث قائم مع إبراز الزاوية A في الأسفل اليسار، والضلع المقابل a باللون الذهبي، والضلع المجاور b باللون الأزرق، والوتر c باللون الرمادي، والزاوية القائمة عند B",
        "figcaption": "تشريح المثلث القائم: A هي الزاوية المرجعية، وB هي الزاوية 90 درجة، ويُعرَّف المقابل والمجاور بالنسبة إلى A."
      },
      "sec-ratios": {
        "h2": "فهم النسب المثلثية",
        "blocks": [
          { "kind": "p", "text": "تقارن النسبة المثلثية طولي ضلعين في مثلث قائم بالنسبة إلى زاوية حادة مختارة. وهي تصف شكل المثلث لا حجمه: ضاعف كل الأضلاع وستبقى النسب الست كما هي تماماً، لأن البسط والمقام يُضربان بالعامل نفسه. فمثلث 3-4-5 ومثلث 6-8-10 المكبر له قيما الجيب وجيب التمام والظل والمقلوبات متطابقة. وهذا الاستقلال عن الحجم هو ما يجعل النسب مفيدة: فهي تلتقط الزوايا كأعداد خالصة." },
          { "kind": "h3", "text": "فهم SOH-CAH-TOA" },
          { "kind": "p", "text": "SOH-CAH-TOA هي وسيلة التذكر القياسية للنسب الأساسية الثلاث. SOH: الجيب = المقابل / الوتر. CAH: جيب التمام = المجاور / الوتر. TOA: الظل = المقابل / المجاور. اقرأ كلاً منها كجملة: جيب الزاوية هو طول الضلع المقابل لتلك الزاوية مقسوماً على الوتر. تغطي الوسيلة الجيب وجيب التمام والظل؛ أما النسب المقلوبة فتأتي من قاعدة ثانية: اقلب الكسر. قاطع التمام يقلب الجيب، والقاطع يقلب جيب التمام، وظل التمام يقلب الظل." },
          { "kind": "h3", "text": "لماذا النسب المثلثية بلا وحدات؟" },
          { "kind": "p", "text": "تقسم النسبة طولاً على طول، فتلغى الوحدات: [[3\\text{ m}/5\\text{ m}=0.6]]. وبالسنتيمترات يعطي المثلث نفسه [[300\\text{ cm}/500\\text{ cm}=0.6]]، العدد ذاته. تغيير وحدات القياس المتوافقة لا يغير النسبة المثلثية أبداً. والنتيجة العملية أن مدخلاتك يجب أن تشترك في وحدة واحدة قبل القسمة، لكن الناتج نفسه لا يحمل وحدة، ولهذا تعامل الحاسبة كل المدخلات كأطوال عادية." },
          { "kind": "h3", "text": "لماذا ينتج المثلث الواحد ست نسب؟" },
          { "kind": "p", "text": "تقارن كل نسبة زوجاً مختلفاً من الأضلاع. فالجيب يقارن المقابل بالوتر، وجيب التمام يقارن المجاور بالوتر، والظل يقارن المقابل بالمجاور. وقاطع التمام والقاطع وظل التمام تعكس البسط والمقام المقابلين. ست نسب، وثلاثة أزواج أضلاع، واتجاهان لكل زوج. وهي لا تتناقض؛ بل تجيب عن أسئلة هندسية مختلفة عن المثلث نفسه، ولهذا توفر الحاسبة الواحدة الأوضاع الستة." }
        ]
      },
      "sec-six": {
        "h2": "النسب المثلثية الست للمثلث القائم",
        "blocks": [
          { "kind": "p", "text": "يشرح هذا القسم كل نسبة بالصيغة نفسها: ما معناها، وصيغتها، والأضلاع التي تستخدمها، ولماذا رُتب الكسر بهذه الطريقة، ومثال محلول على مثلث 3-4-5، وما معنى العدد، ومتى تكون النسبة مفيدة، وكيف ترتبط بنسبة أخرى، وخطأ واحد يجب تجنبه." },
          { "kind": "h3", "text": "1. الجيب: المقابل مقسوماً على الوتر" },
          { "kind": "p", "text": "يقارن الجيب الضلع المقابل بالوتر: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] الوتر هو المقام لأنه أطول ضلع، وهو ما يبقي الجيب بين 0 و1 للزوايا الحادة. مع [[a=3]] و[[c=5]]: [[\\sin(A)=3/5]]، إذن [[[\\boxed{\\sin(A)=0.6}]]] تعني النتيجة أن الضلع المقابل يساوي 60 بالمئة من الوتر. الجيب مفيد كلما كان الضلع المقابل والوتر هما الزوج المعروف، مثل إيجاد زاوية السلم من ارتفاعه وطوله. ويرتبط بجيب التمام كشريك متمم: فجيب زاوية حادة يساوي جيب تمام الزاوية الأخرى. الخطأ الذي يجب تجنبه: 0.6 نسبة وليست زاوية 0.6 درجة." },
          { "kind": "h3", "text": "2. جيب التمام: المجاور مقسوماً على الوتر" },
          { "kind": "p", "text": "يقارن جيب التمام الضلع المجاور بالوتر: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]] ويتقاسم الجيب وجيب التمام الوتر مقاماً، فيبقى كلاهما بين 0 و1؛ ويختلفان في البسط فقط، ولهذا يصف الجيب وجيب التمام جانبين مختلفين من الزاوية نفسها. مع [[b=4]] و[[c=5]]: [[\\cos(A)=4/5]]، إذن [[[\\boxed{\\cos(A)=0.8}]]] الضلع المجاور يساوي 80 بالمئة من الوتر. جيب التمام مفيد عندما يُعرف الضلع المجاور والوتر، مثل المسافة الأفقية للسقف وطول العارضة. ويرتبط بالجيب عبر المتطابقة [[\\sin^2(A)+\\cos^2(A)=1]]. الخطأ الذي يجب تجنبه: تبديل البسطين، أي استخدام 3/5 لجيب التمام بدلاً من 4/5." },
          { "kind": "h3", "text": "3. الظل: المقابل مقسوماً على المجاور" },
          { "kind": "p", "text": "يقارن الظل الضلع المقابل بالضلع المجاور: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]] وهو يتجاوز الوتر تماماً، ما يجعله النسبة الطبيعية لمسائل الميل حيث الضلعان هما الكميتان المقاستان. مع [[a=3]] و[[b=4]]: [[\\tan(A)=3/4]]، إذن [[[\\boxed{\\tan(A)=0.75}]]] الضلع المقابل أطول بنسبة 75 بالمئة من الضلع المجاور. الظل هو الصورة الرياضية للارتفاع على الامتداد، فيظهر في ميل السقف والمنحدرات والدرجات. وعلى عكس الجيب وجيب التمام، يمكن أن يتجاوز الظل 1 كلما كان الضلع المقابل أطول من الضلع المجاور. الخطأ الذي يجب تجنبه: الخلط بين ظل 0.75 و75 بالمئة من الزاوية القائمة." },
          { "kind": "h3", "text": "4. ظل التمام: المجاور مقسوماً على المقابل" },
          { "kind": "p", "text": "ظل التمام هو مقلوب الظل: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]] وهو يعكس مقارنة الأضلاع التي يجريها الظل، فحيث يسأل الظل عن مدى انحدار الميل، يسأل ظل التمام عن مدى انبساطه. مع [[b=4]] و[[a=3]]: [[\\cot(A)=4/3]]، إذن [[[\\boxed{\\cot(A)\\approx1.3333}]]] وبصيغة مكافئة، [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. ظل التمام مفيد عندما تعطي المسألة طبيعياً المجاور على المقابل، أو عندما تُكتب صيغة بصورة مقلوبة. الخطأ الذي يجب تجنبه: كتابة ظل التمام بصورة a/b، فتلك هي الظل." },
          { "kind": "h3", "text": "5. القاطع: الوتر مقسوماً على المجاور" },
          { "kind": "p", "text": "القاطع هو مقلوب جيب التمام: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]] قلب كسر جيب التمام يضع الوتر، أطول ضلع، في الأعلى، ولهذا يكون القاطع أكبر من 1 دائماً للزاوية الحادة في مثلث قائم صحيح. مع [[c=5]] و[[b=4]]: [[\\sec(A)=5/4]]، إذن [[[\\boxed{\\sec(A)=1.25}]]] وبصيغة مكافئة، [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. القاطع مفيد في صيغ الفيزياء والهندسة التي تُصاغ والوتر في بسطها. الخطأ الذي يجب تجنبه: الخلط بين القاطع وجيب التمام، أو بينه وبين دالة جيب التمام العكسية." },
          { "kind": "h3", "text": "6. قاطع التمام: الوتر مقسوماً على المقابل" },
          { "kind": "p", "text": "قاطع التمام هو مقلوب الجيب: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]] ومثل القاطع، يضع الوتر في الأعلى، فيكون أكبر من 1 دائماً للزوايا الحادة. مع [[c=5]] و[[a=3]]: [[\\csc(A)=5/3]]، إذن [[[\\boxed{\\csc(A)\\approx1.6667}]]] وبصيغة مكافئة، [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. يظهر قاطع التمام في رياضيات الموجات والتذبذب حيث يكون مقلوب الجيب هو الصورة المريحة. الخطأ الذي يجب تجنبه: الخلط بين قاطع التمام والجيب العكسي؛ فـ [[1/\\sin(A)]] هو قاطع التمام، بينما [[\\sin^{-1}(r)]] يستعيد زاوية." },
          { "kind": "h3", "text": "النسب الست في جدول واحد" },
          { "kind": "p", "text": "تشير الحسابات الست كلها إلى الزاوية المرجعية نفسها [[A]]." }
        ],
        "table": {
          "headers": ["النسبة", "الصيغة", "علاقة الأضلاع", "مثال 3-4-5"],
          "rows": [
            ["الجيب", "[[a/c]]", "المقابل / الوتر", "[[3/5=0.6]]"],
            ["جيب التمام", "[[b/c]]", "المجاور / الوتر", "[[4/5=0.8]]"],
            ["الظل", "[[a/b]]", "المقابل / المجاور", "[[3/4=0.75]]"],
            ["ظل التمام", "[[b/a]]", "المجاور / المقابل", "[[4/3\\approx1.3333]]"],
            ["القاطع", "[[c/b]]", "الوتر / المجاور", "[[5/4=1.25]]"],
            ["قاطع التمام", "[[c/a]]", "الوتر / المقابل", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "مثلث 3-4-5 مع ست لوحات تعرض sin 0.6 وcos 0.8 وtan 0.75 وcot 1.3333 وsec 1.25 وcsc 1.6667",
        "figcaption": "مثلث 3-4-5 واحد ينتج النسب الست: ثلاث نسب أساسية وثلاث مقلوباتها."
      },
      "sec-choose": {
        "h2": "كيفية اختيار النسبة المثلثية الصحيحة",
        "blocks": [
          { "kind": "p", "text": "تعتمد أفضل نسبة على طولي الضلعين المتاحين في المسألة. يتيح كل زوج أضلاع حسابين مقلوبين، وأوضاع الحاسبة الستة تطابق هذه الاقترانات تماماً:" },
          { "kind": "p", "text": "إذا عُرف الضلع المقابل والوتر، يمكنك حساب [[\\sin(A)=a/c]] وكذلك [[\\csc(A)=c/a]]. وإذا عُرف الضلع المجاور والوتر، يمكنك حساب [[\\cos(A)=b/c]] و[[\\sec(A)=c/b]]. وإذا عُرف الضلعان، يمكنك حساب [[\\tan(A)=a/b]] و[[\\cot(A)=b/a]]." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة الجيب" },
          { "kind": "p", "text": "اختر وضع الجيب عندما يُعرف الضلع المقابل والوتر. أدخل الضلع المقابل في حقل \"Opposite a\" والوتر في حقل \"Hypotenuse c\"، ثم انقر \"احسب sin(A)\". لا يتطلب أي وضع أطوال الأضلاع الثلاثة؛ فكل وضع يطلب بالضبط الزوج الذي تستخدمه نسبته." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة جيب التمام" },
          { "kind": "p", "text": "اختر وضع جيب التمام عندما يُعرف الضلع المجاور والوتر. أدخل الضلع المجاور في حقل \"Adjacent b\" والوتر في حقل \"Hypotenuse c\"، ثم انقر \"احسب cos(A)\"." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة الظل" },
          { "kind": "p", "text": "اختر وضع الظل عندما يُعرف الضلعان. أدخل الضلع المقابل في حقل \"Opposite a\" والضلع المجاور في حقل \"Adjacent b\"، ثم انقر \"احسب tan(A)\"." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة ظل التمام" },
          { "kind": "p", "text": "اختر وضع ظل التمام عندما يُعرف الضلعان وتُصاغ المسألة بصورة المجاور على المقابل. أدخل الضلع المجاور أولاً في حقل \"Adjacent b\" والضلع المقابل في حقل \"Opposite a\"، ثم انقر \"احسب cot(A)\"." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة القاطع" },
          { "kind": "p", "text": "اختر وضع القاطع عندما يُعرف الوتر والضلع المجاور. أدخل الوتر في حقل \"Hypotenuse c\" والضلع المجاور في حقل \"Adjacent b\"، ثم انقر \"احسب sec(A)\"." },
          { "kind": "h3", "text": "كيفية استخدام وضع نسبة قاطع التمام" },
          { "kind": "p", "text": "اختر وضع قاطع التمام عندما يُعرف الوتر والضلع المقابل. أدخل الوتر في حقل \"Hypotenuse c\" والضلع المقابل في حقل \"Opposite a\"، ثم انقر \"احسب csc(A)\"." }
        ],
        "table": {
          "headers": ["الأضلاع المعروفة", "النسبة المباشرة", "النسبة المقلوبة"],
          "rows": [
            ["المقابل والوتر", "الجيب", "قاطع التمام"],
            ["المجاور والوتر", "جيب التمام", "القاطع"],
            ["المقابل والمجاور", "الظل", "ظل التمام"]
          ]
        }
      },
      "sec-howto": {
        "h2": "كيفية استخدام حاسبة النسب المثلثية للمثلث القائم",
        "blocks": [
          { "kind": "p", "text": "اتبع هذه الخطوات لأي من الأوضاع الستة:" },
          { "kind": "p", "text": "تحديد الأضلاع تسمية صحيحة أهم من حفظ الصيغ. معظم الإجابات الخاطئة في هذه الصفحة تأتي من تبديل المقابل والمجاور، لا من الحساب." },
          { "kind": "h3", "text": "جولة كاملة في الحاسبة" }
        ],
        "steps": [
          "حدد الزاوية المرجعية. قرر أي زاوية حادة تدور حولها المسألة. تتبع كل تسميات الأضلاع هذا الاختيار.",
          "سمِّ المقابل والمجاور والوتر. الضلع الواقع قبالة الزاوية المرجعية هو المقابل، والضلع الملامس لها هو المجاور، والضلع الواقع قبالة الزاوية القائمة هو الوتر.",
          "حدد طولي الضلعين المعروفين. يحتاج كل وضع إلى زوج واحد بالضبط.",
          "اختر الوضع المطابق لهذين الضلعين. استخدم الجدول في القسم السابق لاختيار الجيب أو جيب التمام أو الظل أو ظل التمام أو القاطع أو قاطع التمام.",
          "أدخل طول الضلع الأول المطلوب. الحقول موسومة، مثل \"Opposite a\" و\"Hypotenuse c\".",
          "أدخل طول الضلع الثاني المطلوب. التزم بالترتيب الذي تظهره التسميات: فبعض الأوضاع تذكر الوتر أولاً.",
          "اختر وحدات متوافقة. استخدم محددات الوحدات بجانب كل إدخال ليشترك القياسان في نظام وحدة واحد.",
          "تحقق من أن المدخلات موجبة وصحيحة. يجب أن يكون الضلعان موجبين وأن يكون الوتر أطول من أي منهما.",
          "انقر زر الحساب. مثلاً، \"احسب sin(A)\" في وضع الجيب.",
          "راجع النتيجة وخطوات الحل. تعرض الحاسبة الصيغة والتعويض والقيمة النهائية.",
          "تحقق من التصور المباشر. تأكد أن تسميات مخطط المثلث تطابق الزاوية المرجعية المقصودة.",
          "استخدم إعادة تعيين لحساب جديد. يمسح زر إعادة تعيين كل الحقول فيبدأ الحساب التالي نظيفاً."
        ],
        "closingParagraphs": [
          "بمعرفة الضلع المقابل 3 والضلع المجاور 4 والوتر 5، كلها بالوحدة نفسها، إليك ما يحتاجه كل وضع وما يعيده:",
          "1. وضع الجيب: أدخل \"Opposite a\" = 3 و\"Hypotenuse c\" = 5، وانقر \"احسب sin(A)\". النتيجة: 0.6.",
          "2. وضع جيب التمام: أدخل \"Adjacent b\" = 4 و\"Hypotenuse c\" = 5، وانقر \"احسب cos(A)\". النتيجة: 0.8.",
          "3. وضع الظل: أدخل \"Opposite a\" = 3 و\"Adjacent b\" = 4، وانقر \"احسب tan(A)\". النتيجة: 0.75.",
          "4. وضع ظل التمام: أدخل \"Adjacent b\" = 4 و\"Opposite a\" = 3، وانقر \"احسب cot(A)\". النتيجة: حوالي 1.3333.",
          "5. وضع القاطع: أدخل \"Hypotenuse c\" = 5 و\"Adjacent b\" = 4، وانقر \"احسب sec(A)\". النتيجة: 1.25.",
          "6. وضع قاطع التمام: أدخل \"Hypotenuse c\" = 5 و\"Opposite a\" = 3، وانقر \"احسب csc(A)\". النتيجة: حوالي 1.6667.",
          "النسب بلا وحدات، لذا تحتاج قياسات الإدخال إلى وحدات متوافقة فقط، لا إلى وحدة بعينها. لا تستعيد الحاسبة الأضلاع أو الزوايا المفقودة من هذه الأوضاع؛ بل تحسب النسبة المطلوبة من الضلعين اللذين تقدمهما."
        ]
      },
      "sec-foundations": {
        "h2": "أمثلة خطوة بخطوة للنسب المثلثية",
        "blocks": [
          { "kind": "p", "text": "تبني هذه الأمثلة الأربعة الفهم تدريجياً، من مثلث أساسي بأعداد صحيحة إلى النسب الدقيقة للمثلثات الخاصة." },
          { "kind": "h3", "text": "مثال 1: مثلث قائم 3-4-5" },
          { "kind": "p", "text": "بمعرفة [[a=3\\text{ cm}]] و[[b=4\\text{ cm}]] و[[c=5\\text{ cm}]]، احسب النسب الست. الجيب: [[3/5=0.6]]. جيب التمام: [[4/5=0.8]]. الظل: [[3/4=0.75]]. ظل التمام: [[4/3\\approx1.3333]]. القاطع: [[5/4=1.25]]. قاطع التمام: [[5/3\\approx1.6667]]. تختلف النسب لأن كلاً منها يقارن زوج أضلاع مختلفاً؛ وهي كلها تصف الزاوية نفسها [[A]]." },
          { "kind": "h3", "text": "مثال 2: مثلث قائم 5-12-13" },
          { "kind": "p", "text": "بمعرفة [[a=5\\text{ m}]] و[[b=12\\text{ m}]] و[[c=13\\text{ m}]]. الجيب: [[5/13\\approx0.3846]]. جيب التمام: [[12/13\\approx0.9231]]. الظل: [[5/12\\approx0.4167]]. المقلوبات: قاطع التمام [[13/5=2.6]]، والقاطع [[13/12\\approx1.0833]]، وظل التمام [[12/5=2.4]]. وبالمقارنة مع مثلث 3-4-5، يجعل الضلع المجاور الأطول جيب التمام أكبر والظل أصغر، وهو ما تبدو عليه الزاوية الأقل انحداراً في صورة نسب." },
          { "kind": "h3", "text": "مثال 3: مثلث 45-45-90" },
          { "kind": "p", "text": "بمعرفة [[a=1]] و[[b=1]] و[[c=\\sqrt{2}]]. الجيب وجيب التمام متساويان: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. والظل وظل التمام يساويان 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. والقاطع وقاطع التمام متساويان: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. تساوي الضلعين يجعل الجيب مساوياً لجيب التمام والظل مساوياً 1؛ والتماثل بين الزاويتين الحادتين يفسر المساوات الثلاث." },
          { "kind": "h3", "text": "مثال 4: مثلث 30-60-90" },
          { "kind": "p", "text": "للزاوية [[A=30^\\circ]]، استخدم [[a=1]] و[[b=\\sqrt{3}]] و[[c=2]]. الجيب: [[1/2=0.5]]. جيب التمام: [[\\sqrt{3}/2\\approx0.8660]]. الظل: [[1/\\sqrt{3}\\approx0.5774]]. ظل التمام: [[\\sqrt{3}\\approx1.7321]]. القاطع: [[2/\\sqrt{3}\\approx1.1547]]. قاطع التمام: [[2]]. نسب 30 و60 درجة مترابطة: [[\\sin(30^\\circ)=\\cos(60^\\circ)]] و[[\\cos(30^\\circ)=\\sin(60^\\circ)]] و[[\\tan(30^\\circ)=\\cot(60^\\circ)]]، لأن الزاويتين المتتامتين تتبادلان المقابل والمجاور." }
        ]
      },
      "sec-applications": {
        "h2": "تطبيقات النسب المثلثية في الحياة الواقعية",
        "blocks": [
          { "kind": "p", "text": "يستخدم كل مثال النسبة المناسبة للموقف، لا النسب الست كلها. يحدد كل مثال نموذج المثلث والأضلاع المعروفة والزاوية المرجعية ومعنى النتيجة، مع ذكر الافتراضات حيث تهم." },
          { "kind": "h3", "text": "مثال 5: حساب ميل السقف" },
          { "kind": "p", "text": "يرتفع سقف 3 أمتار على امتداد أفقي 4 أمتار. يستخدم المثلث المبسط الارتفاع ضلعاً مقابلاً (a = 3 m) والامتداد ضلعاً مجاوراً (b = 4 m)، وسطح السقف وتراً. يناسب الظل لأن الضلعين معروفان: [[\\tan(A)=3/4=0.75]]. نسبة الدرجة المئوية هي [[0.75\\times100\\%=75\\%]]، والزاوية [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. نسبة الميل ودرجة النسبة المئوية والزاوية ثلاث طرق لقول الشيء نفسه: يصعد السقف 0.75 م لكل 1 م من الامتداد. هذا مثال هندسي وليس تقييماً كاملاً لتصميم السقف." },
          { "kind": "h3", "text": "مثال 6: فهم سلم مستند إلى جدار" },
          { "kind": "p", "text": "يصل سلم إلى ارتفاع 4 أمتار على جدار وقاعدته على بعد 3 أمتار من الجدار. ارتفاع الجدار هو الضلع المقابل (a = 4 m)، ومسافة الأرض هي الضلع المجاور (b = 3 m)، والسلم هو الوتر: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. وللزاوية بين السلم والأرض: [[\\sin(A)=4/5=0.8]] و[[\\cos(A)=3/5=0.6]] و[[\\tan(A)=4/3\\approx1.3333]]. الزاوية [[A\\approx53.13^\\circ]]. مثلث واحد وزاوية واحدة وثلاث نسب مختلفة، كل منها يبرز زوج أضلاع مختلفاً. لا يثبت هذا الحساب سلامة السلم." },
          { "kind": "h3", "text": "مثال 7: تقييم انحدار منحدر" },
          { "kind": "p", "text": "يرتفع منحدر 0.6 م على امتداد أفقي 8 أمتار. يناسب الظل الضلعين: [[\\tan(A)=0.6/8=0.075]]. نسبة الدرجة المئوية [[0.075\\times100\\%=7.5\\%]]، والزاوية [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. درجة 7.5% ليست زاوية 7.5 درجة: فالنسبة المئوية هي النسبة مضروبة في 100، بينما تقيس الدرجات الزاوية نفسها، ويتباعدان بسرعة بعد القيم الصغيرة. تحتاج إمكانية الوصول والامتثال لقوانين البناء إلى فحوص إضافية تتجاوز هذه الهندسة." },
          { "kind": "h3", "text": "مثال 8: قياس ارتفاع مبنى" },
          { "kind": "p", "text": "يقف مراقب على بعد 24 م أفقياً من مبنى، وقمته على ارتفاع 18 م فوق مستوى العين. الضلع المجاور 24 م والضلع المقابل 18 م، إذن [[\\tan(A)=18/24=0.75]] و[[A\\approx36.87^\\circ]]، وهي زاوية الارتفاع. مسافة الرؤية بخط مستقيم [[c=\\sqrt{18^2+24^2}=30\\text{ m}]]، فيعطي [[\\sin(A)=18/30=0.6]] و[[\\cos(A)=24/30=0.8]] للهندسة نفسها. النتيجة بالنسبة إلى مستوى العين، وليست بالضرورة الارتفاع الكلي للمبنى." },
          { "kind": "h3", "text": "مثال 9: مسح فرق الارتفاع" },
          { "kind": "p", "text": "يصمم مسّاح فرق ارتفاع عمودي 15 م على مسافة أفقية 20 م. الظل: [[\\tan(A)=15/20=0.75]]. المسافة بخط مستقيم [[c=\\sqrt{15^2+20^2}=25\\text{ m}]]، فيصف [[\\sin(A)=15/25=0.6]] و[[\\cos(A)=20/25=0.8]] مثلث المسح نفسه عبر زوجي أضلاع مختلفين. قد يحتاج المسح الحقيقي إلى تعديلات ارتفاع الأداة وتصحيحات تتجاوز هذا النموذج المسطح." },
          { "kind": "h3", "text": "مثال 10: تقدير ارتفاع شجرة من ظلها" },
          { "kind": "p", "text": "تلقي شجرة عمودية ظلاً طوله 9 أمتار، وارتفاعها فوق الأرض 12 م. مع مقابل 12 م ومجاور 9 م: [[\\tan(A)=12/9\\approx1.3333]]. وتر خط الرؤية في المثلث المبسط [[c=\\sqrt{12^2+9^2}=15\\text{ m}]]، فيعطي [[\\sin(A)=12/15=0.8]] و[[\\cos(A)=9/15=0.6]]. يفترض هذا أرضاً مستوية وشجرة عمودية وظلاً مقاساً إلى النقطة الواقعة مباشرة تحت التاج." },
          { "kind": "h3", "text": "مثال 11: فهم سلك الشد" },
          { "kind": "p", "text": "يتصل سلك شد بعمود على ارتفاع 12 م فوق الأرض، ومرساته على بعد 5 أمتار أفقياً من العمود. طول السلك [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. الجيب: [[12/13\\approx0.9231]]. جيب التمام: [[5/13\\approx0.3846]]. الظل: [[12/5=2.4]]. يتجاوز الظل 1 هنا لأن المركبة العمودية أطول من الامتداد الأفقي؛ وهذا طبيعي وليس خطأ. لا تقول هذه النسب شيئاً عن متانة المرساة أو شد السلك." },
          { "kind": "h3", "text": "مثال 12: فهم هندسة الدرج" },
          { "kind": "p", "text": "لدرج مبسط ارتفاع كلي 2.4 م وامتداد أفقي 3.2 م، بطول قطري [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. الجيب: [[2.4/4=0.6]]. جيب التمام: [[3.2/4=0.8]]. الظل: [[2.4/3.2=0.75]]. تصف النسب هندسة الدرج الكلية، لكنها لا تثبت الامتثال لأنظمة الدرج التي تقيد أيضاً أبعاد الدرجات الفردية." },
          { "kind": "h3", "text": "مثال 13: فهم اتجاه ذراع الرافعة" },
          { "kind": "p", "text": "لذراع رافعة مبسط مركبة عمودية 8 أمتار وإسقاط أفقي 6 أمتار، مع [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. يصف الجيب [[8/10=0.8]] الحصة العمودية للذراع، وجيب التمام [[6/10=0.6]] حصته الأفقية، والظل [[8/6\\approx1.3333]] انحداره. لا تحدد النسب المثلثية وحدها قدرة الرافعة أو التشغيل الآمن." },
          { "kind": "h3", "text": "مثال 14: تقدير انحدار مسار جبلي" },
          { "kind": "p", "text": "يكسب مقطع مستقيم من مسار 120 م ارتفاعاً على 800 م أفقياً. الظل: [[\\tan(A)=120/800=0.15]]. الدرجة [[15\\%]] والزاوية [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. لا يصف نموذج الدرجة الثابتة هذا مساراً متعرجاً، لكنه يعطي انحداراً متوسطاً مفيداً لتخطيط الجهد." },
          { "kind": "h3", "text": "مثال 15: فحص دعامة ميكانيكية" },
          { "kind": "p", "text": "لدعامة قطرية مركبة عمودية 1.5 م ومركبة أفقية 2 م، مع [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. الجيب: [[1.5/2.5=0.6]]. جيب التمام: [[2/2.5=0.8]]. الظل: [[1.5/2=0.75]]. هذه نسب 3-4-5 بنصف المقياس، ما يبين أن التحجيم المتناسب يترك كل نسبة دون تغيير. وهذا لا يقول شيئاً عن متانة الدعامة أو قدرتها على التحمل." },
          { "kind": "h3", "text": "مثال 16: فهم صعود طائرة مستقيم" },
          { "kind": "p", "text": "يكسب مقطع طيران مستقيم مبسط 1.5 كم عمودياً على 5 كم أفقياً. الظل: [[\\tan(A)=1.5/5=0.3]]، إذن [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. المسافة بخط مستقيم [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]]، فيعطي [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. يستخدم الظل مسافة الأرض، ويستخدم الجيب مسافة مسار الطيران؛ الصعود نفسه بأطوال مرجعية مختلفة. هذا مثال هندسي وليس حساب ملاحة جوية." },
          { "kind": "h3", "text": "مقارنة الأمثلة العملية" }
        ],
        "table": {
          "headers": ["الموقف", "القياسات المعروفة", "النسبة الأساسية", "القيمة", "التفسير"],
          "rows": [
            ["ميل السقف", "ارتفاع 3 م، امتداد 4 م", "الظل", "0.75", "درجة 75%، 36.87°"],
            ["السلم", "ارتفاع 4 م، قاعدة 3 م", "الجيب", "0.8", "زاوية مع الأرض 53.13°"],
            ["المنحدر", "ارتفاع 0.6 م، امتداد 8 م", "الظل", "0.075", "درجة 7.5%، 4.29°"],
            ["ارتفاع المبنى", "ارتفاع 18 م، مسافة 24 م", "الظل", "0.75", "زاوية الارتفاع 36.87°"],
            ["المسح", "ارتفاع 15 م، امتداد 20 م", "الظل", "0.75", "الشكل نفسه كميل السقف"],
            ["ظل الشجرة", "ارتفاع 12 م، ظل 9 م", "الظل", "1.3333", "أشد انحداراً من 45°"],
            ["سلك الشد", "ارتفاع 12 م، مرساة 5 م", "الظل", "2.4", "السلك أشد انحداراً بكثير من الامتداد"],
            ["الدرج", "ارتفاع 2.4 م، امتداد 3.2 م", "الظل", "0.75", "النسب نفسها كـ 3-4-5"],
            ["ذراع الرافعة", "عمودي 8 م، أفقي 6 م", "الجيب", "0.8", "معظمه مدى عمودي"],
            ["المسار الجبلي", "كسب 120 م، امتداد 800 م", "الظل", "0.15", "درجة متوسطة 15%"],
            ["الدعامة الميكانيكية", "عمودي 1.5 م، أفقي 2 م", "الجيب", "0.6", "هندسة 3-4-5 مصغرة"],
            ["صعود الطائرة", "كسب 1.5 كم، مسافة 5 كم", "الظل", "0.3", "زاوية صعود 16.70°"]
          ]
        },
        "imgAlt": "أربع لوحات: ميل السقف 0.75، والسلم sin 0.8، والمسح sin 0.6، والمنحدر tan 0.075 مع مثلثات موسومة",
        "figcaption": "أربع مسائل من العالم الواقعي: ميل السقف والسلم والمسح والمنحدر، كل منها مع مثلثه ونسبته الأساسية."
      },
      "sec-relate": {
        "h2": "كيف ترتبط النسب المثلثية الست ببعضها",
        "blocks": [
          { "kind": "p", "text": "النسب الست ليست ست حقائق مستقلة. بل تشكل ثلاثة أزواج مقلوبة وعلاقتي قسمة وثلاث متطابقات فيثاغورس. معرفة هذه الروابط تحول الصيغ الست إلى نظام واحد، وتمنحك طرق تحقق لكل حساب." },
          { "kind": "h3", "text": "الأزواج المقلوبة" },
          { "kind": "p", "text": "يضرب كل زوج مقلوب إلى 1 لأن الكسرين يلغي أحدهما الآخر: [[\\sin(A)\\csc(A)=1]] و[[\\cos(A)\\sec(A)=1]] و[[\\tan(A)\\cot(A)=1]]. وعلى مثلث 3-4-5: [[0.6\\times1.6667\\approx1]] و[[0.8\\times1.25=1]] و[[0.75\\times1.3333\\approx1]]. الفروق الصغيرة تأتي من الكسور العشرية المقرّبة، لا من الرياضيات." },
          { "kind": "h3", "text": "الظل كالجيب مقسوماً على جيب التمام" },
          { "kind": "p", "text": "تتبع علاقة القسمة [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] من إلغاء الوتر المشترك: [[(a/c)/(b/c)=a/b]]. تحقق منها بقيم 3-4-5: [[0.6/0.8=0.75]]، وهو ما يطابق [[\\tan(A)]]. هذا تحقق مفيد: فإذا لم يساوِ ظلك الجيب مقسوماً على جيب التمام، فهناك ضلع مسمّى خطأً." },
          { "kind": "h3", "text": "ظل التمام كجيب التمام مقسوماً على الجيب" },
          { "kind": "p", "text": "وبالمثل، [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]] مع قيم 3-4-5: [[0.8/0.6\\approx1.3333]]، وهو ما يطابق [[\\cot(A)]]. يرث ظل التمام كل ما يعرفه الظل، مقلوباً." },
          { "kind": "h3", "text": "المتطابقة المثلثية لفيثاغورس" },
          { "kind": "p", "text": "تتبع المتطابقة [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] مباشرة من نظرية فيثاغورس: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. ولمثلث 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. تمتد متطابقتان أخريان على النمط نفسه: [[1+\\tan^2(A)=\\sec^2(A)]] و[[1+\\cot^2(A)=\\csc^2(A)]]، وتُحصلان بقسمة المتطابقة الأولى على مربع جيب التمام ومربع الجيب. وهما مفيدتان عندما تعطي المسألة نسبة واحدة وتحتاج أخرى دون أطوال الأضلاع." },
          { "kind": "h3", "text": "كيف تؤثر الزوايا المتتامة في النسب؟" },
          { "kind": "p", "text": "بما أن [[A+C=90^\\circ]]، فإن تبديل الزاوية المرجعية من [[A]] إلى [[C]] يبدّل المقابل والمجاور: [[\\sin(A)=\\cos(C)]] و[[\\cos(A)=\\sin(C)]] و[[\\tan(A)=\\cot(C)]] و[[\\cot(A)=\\tan(C)]] و[[\\sec(A)=\\csc(C)]] و[[\\csc(A)=\\sec(C)]]. وفي مثلث 3-4-5، [[\\sin(A)=3/5=0.6]] بينما [[\\cos(C)=3/5=0.6]]، لأن الضلع المقابل لـ [[A]] مجاور لـ [[C]]. كل نسبة عند زاوية حادة تظهر مجدداً كدالة مشتركة لها عند الزاوية الأخرى." }
        ]
      },
      "sec-angles": {
        "h2": "فهم النسب المثلثية عند زوايا مختلفة",
        "blocks": [
          { "kind": "p", "text": "كلما كبرت الزاوية المرجعية الحادة، تغيرت النسب بطرق يمكن التنبؤ بها. يزداد الجيب من قرب 0 نحو 1، بينما يتناقص جيب التمام من قرب 1 نحو 0. ويزداد الظل من قرب 0 دون حد أعلى، بينما يتناقص ظل التمام من قيم كبيرة نحو 0. ويزداد القاطع من قرب 1 دون حد، بينما يتناقص قاطع التمام من قيم كبيرة نحو 1. هذه سلوكيات حدّية قرب 0 و90 درجة، وليست قيماً تبلغها فعلاً زاوية حادة في مثلث قائم صحيح غير منحل عند نقطتي النهاية." },
          { "kind": "p", "text": "النمط متماثل: فالجيب عند 30 درجة يساوي جيب التمام عند 60 درجة، عاكساً علاقة التتام. ويأتي ظل التمام والقاطع وقاطع التمام من العلاقات المقلوبة: فمثلاً عند 30 درجة، [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] و[[\\csc(30^\\circ)=1/0.5=2]]." }
        ],
        "table": {
          "headers": ["الزاوية", "الجيب", "جيب التمام", "الظل"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "حوالي 0.8660", "حوالي 0.5774"],
            ["[[45^\\circ]]", "حوالي 0.7071", "حوالي 0.7071", "1"],
            ["[[60^\\circ]]", "حوالي 0.8660", "0.5", "حوالي 1.7321"]
          ]
        },
        "imgAlt": "مخطط انسيابي: اختر الجيب أو قاطع التمام للمقابل والوتر، وجيب التمام أو القاطع للمجاور والوتر، والظل أو ظل التمام للضلعين",
        "figcaption": "اختر وضع الحاسبة من زوج الأضلاع الذي تعرفه: فكل زوج يعطي نسبة مباشرة ومقلوبها."
      },
      "sec-missing-side": {
        "h2": "كيفية حساب ضلع مجهول في المثلث القائم",
        "blocks": [
          { "kind": "p", "text": "تجد حاسبة النسب الست النسب من الأضلاع المعروفة. أما إيجاد ضلع مجهول من زاوية وضلع معروفين فمهمة مرتبطة لكنها مختلفة، تُحل بإعادة ترتيب صيغ النسب. هذه حسابات مصاحبة، وليست من مزايا حاسبة النسب نفسها." },
          { "kind": "h3", "text": "إيجاد الضلع المقابل بالجيب" },
          { "kind": "p", "text": "ابدأ من [[\\sin(A)=a/c]] وأعد الترتيب: [[[\\boxed{a=c\\sin(A)}]]] مع وتر 10 أمتار وزاوية [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "إيجاد الضلع المجاور بجيب التمام" },
          { "kind": "p", "text": "ابدأ من [[\\cos(A)=b/c]] وأعد الترتيب: [[[\\boxed{b=c\\cos(A)}]]] مع وتر 10 أمتار وزاوية [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "إيجاد الضلع المقابل بالظل" },
          { "kind": "p", "text": "ابدأ من [[\\tan(A)=a/b]] وأعد الترتيب: [[[\\boxed{a=b\\tan(A)}]]] مع ضلع مجاور 8 أمتار وزاوية [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. الظل مفيد هنا بوجه خاص لأنه يربط الضلعين مباشرة دون وتر." }
        ]
      },
      "sec-inverse": {
        "h2": "كيفية إيجاد زاوية من نسبة مثلثية",
        "blocks": [
          { "kind": "p", "text": "النسبة المثلثية ليست زاوية. فعندما تُعرف النسبة وتُجهل الزاوية، تستعيد الدوال المثلثية العكسية الزاوية الحادة المرجعية: [[A=\\sin^{-1}(r)]] و[[A=\\cos^{-1}(r)]] و[[A=\\tan^{-1}(r)]]. وتسمى الجيب العكسي وجيب التمام العكسي والظل العكسي، وتعرف أيضاً بأسماء قوس الجيب وقوس جيب التمام وقوس الظل." },
          { "kind": "h3", "text": "مثال محلول باستخدام الجيب" },
          { "kind": "p", "text": "بمعرفة [[\\sin(A)=0.6]]، تكون الزاوية [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "مثال محلول باستخدام جيب التمام" },
          { "kind": "p", "text": "بمعرفة [[\\cos(A)=0.8]]، تكون الزاوية [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "مثال محلول باستخدام الظل" },
          { "kind": "p", "text": "بمعرفة [[\\tan(A)=0.75]]، تكون الزاوية [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { "kind": "p", "text": "تستعيد الثلاثة الزاوية نفسها لأن النسب الثلاث تصف مثلث 3-4-5 نفسه. والفرق بين الدالة العكسية والمقلوب مهم هنا: فـ [[1/\\sin(A)=\\csc(A)]] مقلوب، أي نسبة مختلفة، بينما [[\\sin^{-1}(r)]] دالة عكسية تعيد زاوية. وعند حساب الزوايا يدوياً، تحقق مما إذا كانت أداتك في وضع الدرجات أم الراديان؛ فحاسبة هذه الصفحة تعمل بالنسب فقط، لذا فإن استعادة الزاوية خطوة منفصلة." }
        ]
      },
      "sec-mistakes": {
        "h2": "أخطاء شائعة عند استخدام النسب المثلثية",
        "blocks": [
          { "kind": "h3", "text": "الخلط بين الضلع المقابل والضلع المجاور" },
          { "kind": "p", "text": "تعتمد التسميات على الزاوية المرجعية. ففي مثلث 3-4-5، حساب [[4/5=0.8]] للجيب يعطي في الواقع جيب التمام. الإصلاح: حدّد الزاوية المرجعية أولاً، ثم سمِّ الضلع الواقع قبالةً منها مقابلاً." },
          { "kind": "h3", "text": "تحديد الأضلاع بالنسبة إلى زاوية مرجعية خاطئة" },
          { "kind": "p", "text": "تسمية الأضلاع للزاوية C بينما تسأل المسألة عن الزاوية A يبدّل كل نسبة. الإصلاح: اكتب أي زاوية هي المرجعية قبل لمس الحاسبة." },
          { "kind": "h3", "text": "استخدام الجيب بدل جيب التمام" },
          { "kind": "p", "text": "يحتاج الجيب الضلع المقابل؛ ويحتاج جيب التمام الضلع المجاور. فإذا عرفت الضلع المجاور والوتر لكنك حسبت [[a/c]] على أي حال، فقد بدّلت الضلعين. الإصلاح: طابق النسبة مع الزوج المعروف باستخدام الجدول في قسم الاختيار." },
          { "kind": "h3", "text": "استخدام الظل عندما تكون الأضلاع المعروفة المقابل والوتر" },
          { "kind": "p", "text": "يحتاج الظل الضلعين. فمع معرفة المقابل والوتر، النسبة المباشرة الصحيحة هي الجيب. الإصلاح: تحقق من الزوج الذي تملكه فعلاً قبل اختيار الوضع." },
          { "kind": "h3", "text": "عكس البسط والمقام" },
          { "kind": "p", "text": "حساب [[c/a]] عندما تقصد الجيب يعطي قاطع التمام، أي قيمة فوق 1 بدل تحت 1. الإصلاح: المقام هو الوتر للجيب وجيب التمام، والضلع المجاور للظل." },
          { "kind": "h3", "text": "الخلط بين الظل وظل التمام" },
          { "kind": "p", "text": "الظل هو [[a/b]]؛ وظل التمام هو [[b/a]]. وهما مقلوبان، فيعكس خطأ واحد الإجابة. الإصلاح: اقرأ تسمية الوضع قبل إدخال القيم." },
          { "kind": "h3", "text": "الخلط بين جيب التمام والقاطع" },
          { "kind": "p", "text": "جيب التمام هو [[b/c]]، ودائماً تحت 1؛ والقاطع هو [[c/b]]، ودائماً فوق 1. فإذا خرج قاطعك تحت 1، فقد حسبت جيب التمام. الإصلاح: النسب المقلوبة تضع الوتر في الأعلى." },
          { "kind": "h3", "text": "الخلط بين الجيب وقاطع التمام" },
          { "kind": "p", "text": "العكس نفسه: الجيب هو [[a/c]]، وقاطع التمام هو [[c/a]]. الإصلاح: تحقق مما إذا كانت نتيجتك ضمن النطاق المتوقع للوضع الذي اخترته." },
          { "kind": "h3", "text": "افتراض أن كل نسبة يجب أن تكون أقل من 1" },
          { "kind": "p", "text": "الجيب وجيب التمام تحت 1، لكن الظل وظل التمام والقاطع وقاطع التمام يمكن أن تتجاوز 1 كلها. فظل 2.4 صحيح تماماً لمنحدر شديد. الإصلاح: تعلّم النطاق الصحيح لكل نسبة." },
          { "kind": "h3", "text": "افتراض أن نسبة مثل 0.6 تمثل زاوية 0.6 درجة" },
          { "kind": "p", "text": "النسبة عدد خالص وليست قياساً بالدرجات. فالزاوية وراء [[\\sin(A)=0.6]] حوالي 36.87 درجة، وتُوجد بالجيب العكسي. الإصلاح: النسب تجيب عن \"كيف تتقارن الأضلاع\"؛ والدوال العكسية تجيب عن \"ما الزاوية\"." },
          { "kind": "h3", "text": "نسيان أن النسب بلا وحدات" },
          { "kind": "p", "text": "إدخال المقابل بالبوصات والوتر بالأقدام يفسد النسبة، لأن الوحدات لم تعد تلغى. الإصلاح: حوّل المدخلين إلى وحدة واحدة أولاً." },
          { "kind": "h3", "text": "خلط وحدات قياس غير متوافقة" },
          { "kind": "p", "text": "السبب الجذري نفسه، ويستحق التكرار: نسبة 3 بوصات إلى 5 سنتيمترات ليست 0.6. الإصلاح: استخدم محددات الوحدات في المدخلين قبل الحساب." },
          { "kind": "h3", "text": "إدخال أطوال أضلاع صفرية أو سالبة" },
          { "kind": "p", "text": "يجب أن يكون ضلع المثلث موجباً. المدخلات الصفرية أو السالبة لا تصف مثلثاً، ولا تستطيع الحاسبة إنتاج نسبة ذات معنى. الإصلاح: أعد القياس أو أعد قراءة المسألة." },
          { "kind": "h3", "text": "استخدام أطوال أضلاع لا تشكل مثلثاً قائماً صحيحاً" },
          { "kind": "p", "text": "إذا فشلت الأضلاع في اختبار فيثاغورس، مثل 2 و3 و10، فلا يوجد مثلث قائم بتلك الأطوال. الإصلاح: تحقق من [[a^2+b^2=c^2]] قبل حساب النسب." },
          { "kind": "h3", "text": "التقريب المبكر جداً" },
          { "kind": "p", "text": "تقريب نسبة وسيطة إلى منزلة عشرية واحدة ثم الضرب يضخّم الخطأ. الإصلاح: احتفظ بالدقة الكاملة في كل خطوة وقرّب الإجابة النهائية فقط." },
          { "kind": "h3", "text": "الخلط بين النسب المقلوبة والدوال المثلثية العكسية" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] نسبة؛ و[[\\sin^{-1}(0.6)]] زاوية. التشابه في الترميز يسبب خلطاً حقيقياً. الإصلاح: المقلوبات تقلب الكسور، والدوال العكسية تستعيد الزوايا." },
          { "kind": "h3", "text": "معاملة الوتر كأحد الضلعين" },
          { "kind": "p", "text": "الوتر هو دائماً أطول ضلع ودائماً مقابل الزاوية القائمة. تعيينه ضلعاً يكسر كل نسبة. الإصلاح: جد أطول ضلع أولاً وسمِّه c." },
          { "kind": "h3", "text": "افتراض أن النسب الست لها القيمة نفسها" },
          { "kind": "p", "text": "في مثلث 3-4-5 تتراوح القيم الست من 0.6 إلى 1.6667. ولا تجعل المثلثات الخاصة مثل 45-45-90 بعض النسب متساوية إلا هي. الإصلاح: توقع ستة أعداد مختلفة من مثلث واحد." },
          { "kind": "h3", "text": "افتراض أن الضلع نفسه دائماً مقابل" },
          { "kind": "p", "text": "الضلع المقابل للزاوية A مجاور للزاوية C. يجب أن تذكر كل إجابة محلولة زاويتها المرجعية. الإصلاح: أعد تسمية الأضلاع كلما تغيرت الزاوية المرجعية." },
          { "kind": "h3", "text": "معاملة نتيجة مبسطة كبرهان هندسي" },
          { "kind": "p", "text": "فحص النسبة لدعامة أو سلك شد يصف الهندسة، لا المتانة أو الشد أو الامتثال للقوانين. الإصلاح: استخدم النسب لخطوة الهندسة، والتحليل الهندسي المؤهل لقرارات السلامة." },
          { "kind": "h3", "text": "خطأ مقابل صواب: مثال ملموس" },
          { "kind": "p", "text": "بمعرفة [[a=3]] و[[b=4]] و[[c=5]]، يستخدم حساب الجيب الخاطئ زوج الأضلاع الخطأ: [[3/4=0.75]]. تلك هي نسبة الظل لا الجيب. والحساب الصحيح هو [[\\sin(A)=3/5=0.6]]. تحقق بعلاقة القسمة: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. تحديد الأضلاع الصحيحة أساسي، لأن الحساب تافه متى صحت الأضلاع." }
        ]
      },
      "sec-verify": {
        "h2": "كيفية التحقق من صحة نتائجك المثلثية",
        "blocks": [
          { "kind": "p", "text": "يتطلب المثلث القائم الصحيح غير المنحل أضلاعاً موجبة، ووتراً أطول من أي ضلع، وأضلاعاً تحقق نظرية فيثاغورس، ووحدات متوافقة، وزوج الأضلاع الصحيح للنسبة المختارة، وأزواجاً مقلوبة متوافقة. تغطي أربع طرق سريعة كل ذلك." },
          { "kind": "h3", "text": "طريقة التحقق 1: تحقق من أطوال الأضلاع" },
          { "kind": "p", "text": "لمثلث 3-4-5: [[3^2+4^2=5^2]]، أو [[9+16=25]]. اجتياز اختبار فيثاغورس يؤكد أن الأضلاع تصف مثلثاً قائماً حقيقياً قبل أن تثق بأي نسبة مشتقة منها." },
          { "kind": "h3", "text": "طريقة التحقق 2: تحقق من الأزواج المقلوبة" },
          { "kind": "p", "text": "يجب أن يضرب كل زوج مباشر-مقلوب إلى 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]] و[[\\cos(A)\\sec(A)=0.8\\times1.25=1]] و[[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. الفروق الصغيرة تأتي من الكسور العشرية المقرّبة." },
          { "kind": "h3", "text": "طريقة التحقق 3: تحقق من الظل باستخدام الجيب وجيب التمام" },
          { "kind": "p", "text": "تعطي علاقة القسمة تحققاً مستقلاً: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. فإذا اختلف وضع الظل في الحاسبة عن هذا الحساب، فقد سُمّي ضلع خطأً." },
          { "kind": "h3", "text": "طريقة التحقق 4: تحقق من الزاوية العكسية" },
          { "kind": "p", "text": "استعد الزاوية وانظر إن كانت معقولة: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. نتيجة حادة بين 0 و90 درجة تطابق شكل المثلث تؤكد النسب." }
        ]
      },
      "sec-conclusion": {
        "h2": "أتقن النسب الست بمثلث واحد",
        "blocks": [
          { "kind": "p", "text": "كل نسبة في هذه الصفحة تأتي من الأضلاع الثلاثة نفسها وزاوية مرجعية واحدة. سمِّ المثلث، وطابق زوج الأضلاع مع الوضع، ودع الحاسبة تتولى الحساب. يجيب الجيب وجيب التمام والظل عن المقارنات المباشرة؛ ويقلبها قاطع التمام والقاطع وظل التمام. يتذكر SOH-CAH-TOA الثلاثة الأولى، وتتذكر قاعدة المقلوب الباقي، وتربط المتطابقة \"جيب مربع زائد جيب تمام مربع يساوي 1\" الجيب بجيب التمام معاً. تحقق باختبار فيثاغورس وحاصلات المقلوبات، ثم عد إلى الحاسبة أعلى هذه الصفحة لتشغيل أرقامك." }
        ]
      }
    },
    "faqs": [
      { "question": "ما هي النسب المثلثية الست للمثلث القائم؟", "answer": "النسب الست هي الجيب (المقابل على الوتر)، وجيب التمام (المجاور على الوتر)، والظل (المقابل على المجاور)، وظل التمام (المجاور على المقابل)، والقاطع (الوتر على المجاور)، وقاطع التمام (الوتر على المقابل). الثلاث الأولى هي النسب الأساسية؛ والثلاث الأخيرة مقلوباتها." },
      { "question": "كيف تحسب الجيب وجيب التمام والظل؟", "answer": "حدد الزاوية المرجعية، ثم اقسم زوج الأضلاع الصحيح. الجيب هو الضلع المقابل مقسوماً على الوتر، وجيب التمام هو الضلع المجاور مقسوماً على الوتر، والظل هو الضلع المقابل مقسوماً على الضلع المجاور. ولمثلث 3-4-5 يعطي ذلك 3/5 = 0.6، و4/5 = 0.8، و3/4 = 0.75." },
      { "question": "ما الفرق بين النسب المثلثية المباشرة والمقلوبة؟", "answer": "تضع النسب المباشرة (الجيب وجيب التمام والظل) مقارنة الضلع الأصغر أولاً، بينما تقلب النسب المقلوبة (قاطع التمام والقاطع وظل التمام) الكسر. قاطع التمام هو 1/الجيب، والقاطع هو 1/جيب التمام، وظل التمام هو 1/الظل. ويضرب كل زوج إلى 1." },
      { "question": "لماذا النسب المثلثية بلا وحدات؟", "answer": "تقسم النسبة طولاً على طول، فتلغى الوحدات. 3 أمتار مقسومة على 5 أمتار تساوي 0.6، و300 سنتيمتر مقسومة على 500 سنتيمتر تساوي 0.6 أيضاً. لا يحمل الناتج وحدة، ولهذا يحتاج المدخلان فقط إلى الاشتراك في نظام وحدة واحد." },
      { "question": "كيف أختار وضع الحاسبة الصحيح؟", "answer": "طابق الوضع مع زوج الأضلاع المعروف لديك. المقابل والوتر: وضع الجيب أو قاطع التمام. المجاور والوتر: وضع جيب التمام أو القاطع. الضلعان: وضع الظل أو ظل التمام. تستخدم النسبة المباشرة ومقلوبها المدخلين نفسهما بترتيب معكوس." },
      { "question": "هل يمكن أن تكون نسبة الظل أو ظل التمام أكبر من 1؟", "answer": "نعم. يقارن الظل الضلعين، فيتجاوز 1 كلما كان الضلع المقابل أطول من الضلع المجاور، كما في منحدر شديد. ويتجاوز ظل التمام 1 عندما يكون الضلع المجاور أطول. والجيب وجيب التمام وحدهما محصوران عند 1، لأن مقامهما هو أطول ضلع." },
      { "question": "لماذا القاطع وقاطع التمام أكبر من 1 للزوايا الحادة؟", "answer": "يضع كلاهما الوتر، أطول أضلاع المثلث، في البسط. قسمة أطول ضلع على أي ضلع أقصر تعطي دائماً قيمة فوق 1. ولمثلث 3-4-5، القاطع هو 5/4 = 1.25 وقاطع التمام هو 5/3، أي حوالي 1.6667." },
      { "question": "كيف أجد زاوية من نسبة مثلثية؟", "answer": "استخدم دالة مثلثية عكسية: قوس الجيب لنسبة الجيب، وقوس جيب التمام لجيب التمام، وقوس الظل للظل. فمثلاً إذا كان الجيب 0.6، فالزاوية هي قوس الجيب (0.6)، أي حوالي 36.87 درجة. لاحظ أن هذا يختلف عن المقلوب: فـ 1/الجيب هو قاطع التمام وليس قوس الجيب." },
      { "question": "كيف أحسب ضلعاً مفقوداً باستخدام حساب المثلثات؟", "answer": "أعد ترتيب صيغة النسبة. فمع معرفة الزاوية والوتر، الضلع المقابل هو الوتر مضروباً في جيب الزاوية، والضلع المجاور هو الوتر مضروباً في جيب تمامها. ومع معرفة الضلع المجاور، الضلع المقابل هو الضلع المجاور مضروباً في ظل الزاوية." },
      { "question": "ما الفرق بين الجيب العكسي وقاطع التمام؟", "answer": "يأخذ الجيب العكسي (قوس الجيب) نسبة ويعيد زاوية: فقوس الجيب (0.6) حوالي 36.87 درجة. ويأخذ قاطع التمام النسبة نفسها ويعيد مقلوبها: فـ 1/0.6 حوالي 1.6667، وما زال نسبة. أحدهما يعكس دالة الجيب؛ والآخر يقلب الكسر." },
      { "question": "كيف أتحقق من حساباتي المثلثية؟", "answer": "أربع فحوص: تأكد أن الأضلاع تحقق نظرية فيثاغورس، وتأكد أن كل زوج مقلوب يضرب إلى 1، وتأكد أن الظل يساوي الجيب مقسوماً على جيب التمام، واستعد الزاوية بدالة عكسية لترى أنها حادة ومعقولة. الاتفاق عبر الفحوص يعني أن تسميات الأضلاع صحيحة." },
      { "question": "كيف تُستخدم النسب المثلثية في الحياة الواقعية؟", "answer": "تحوّل النسب الأضلاع المقاسة إلى زوايا ومنحدرات: ميل السقف من الارتفاع والامتداد، وزوايا السلالم من الارتفاع ومسافة القاعدة، ودرجات المنحدرات، وزوايا ارتفاع المباني، وخطوط رؤية المسح، واتجاه ذراع الرافعة، وانحدارات المسارات. تعطي النسبة الهندسة؛ وتتولى فحوص هندسية منفصلة السلامة." }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلث القائم ذات الصلة",
    "relatedItems": [
      "حاسبة نسبة الجيب",
      "حاسبة نسبة جيب التمام",
      "حاسبة نسبة الظل",
      "حاسبة نسبة ظل التمام",
      "حاسبة نسبة القاطع",
      "حاسبة نسبة قاطع التمام",
      "حاسبة زاوية المثلث القائم",
      "حاسبة ضلع المثلث القائم باستخدام الزاوية",
      "حاسبة المثلث القائم الخاص"
    ]
  }
};
