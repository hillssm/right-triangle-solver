/**
 * secantGuideTranslations.batch3.ts
 * Translations of the Secant Ratio Calculator guide (SecantRatioGuide.astro)
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese (zh).
 *
 * Structure per language: tocHeading, tocItems (15 entries), sections (15 entries),
 * faqs (12), faqHeading, relatedHeading, conclusion in sections['sec-conclusion'].
 * Formulas, KaTeX markup ([[...]] and [[[...]]]), variable names, numbers, and degree
 * values are preserved exactly as in the English source. URLs are never translated.
 * No em dashes. Arabic math stays LTR via the renderer's dir="ltr" wrapper.
 */

export const SECANT_TRANSLATIONS_BATCH3 = {
"id": {
    "tocHeading": "Di Dalam Panduan Ini",
    "tocItems": {
        "sec-intro": "Apa Itu Kalkulator Rasio Sekan?",
        "sec-triangle": "Memahami Sisi Samping dan Hipotenusa",
        "sec-whatis": "Memahami Rasio Sekan",
        "sec-formula": "Cara Kerja Rumus Sekan",
        "sec-howto": "Cara Menggunakan Kalkulator Rasio Sekan",
        "sec-examples": "Contoh Langkah-demi-Langkah Menghitung Sekan",
        "sec-applications": "Contoh Nyata Penggunaan Rasio Sekan",
        "sec-angle": "Memahami Hubungan Antara Sekan dan Besar Sudut",
        "sec-hypotenuse": "Cara Menemukan Hipotenusa Menggunakan Sekan",
        "sec-recover": "Cara Menemukan Sudut dari Rasio Sekan",
        "sec-mistakes": "Kesalahan Umum Saat Menghitung Sekan",
        "sec-verify": "Cara Memeriksa Apakah Hasil Sekan Anda Valid",
        "sec-vs": "Sekan vs. Kosinus, Sinus, dan Kosekan",
        "sec-related": "Jelajahi Kalkulator Trigonometri Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan"
    },
    "sections": {
        "sec-intro": {
            "h2": "Apa Itu Kalkulator Rasio Sekan?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Kalkulator rasio sekan menjawab satu pertanyaan: untuk sebuah sudut lancip dalam segitiga siku-siku, bagaimana sisi terpanjang dibandingkan dengan sisi di sebelah sudut? Masukkan hipotenusa dan sisi samping, dan alat ini akan membagi hipotenusa dengan sisi samping, sehingga menghasilkan [[\\sec(A)=c/b]]. Dengan hipotenusa 5 cm dan sisi samping 4 cm, perhitungannya adalah [[5/4=1.25]]: hipotenusa 1.25 kali lebih panjang daripada sisi samping, yang dengan kata lain berarti 25% lebih panjang. Angka desimal itu adalah jawaban lengkapnya. Angka tersebut tidak memiliki satuan, karena sentimeter saling meniadakan dalam pembagian, dan angka itu bukan sudut dalam derajat, jadi jangan pernah membaca 1.25 sebagai [[1.25^\\circ]]. Sisi depan tidak pernah masuk dalam perhitungan ini; hipotenusa dan sisi samping sudah cukup. Sekan juga merupakan kebalikan dari kosinus, itulah sebabnya banyak buku teks memperkenalkannya sebagai bentuk terbalik dari [[\\cos(A)]]."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-triangle": {
            "h2": "Memahami Sisi Samping dan Hipotenusa",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "Apa Itu Segitiga Siku-Siku?"
                },
                {
                    "kind": "p",
                    "text": "Segitiga siku-siku memiliki satu sudut tepat [[90^\\circ]], yaitu sudut antara dua garis tegak lurus, seperti dinding yang bertemu lantai datar. Hipotenusa terletak di seberang sudut siku-siku itu dan selalu menjadi sisi terpanjang, karena harus merentang sepanjang diagonal penuh melintasi sudut tersebut. Dua sudut lainnya berbagi sisa 90 derajat, sehingga keduanya lancip. Kedua kaki bertemu di sudut siku-siku, saling tegak lurus, dan hubungan keduanya dengan hipotenusalah yang memungkinkan trigonometri segitiga siku-siku."
                },
                {
                    "kind": "h3",
                    "text": "Apa Itu Sisi Samping?"
                },
                {
                    "kind": "p",
                    "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut acuan [[A]] tanpa menjadi hipotenusa. Dalam soal-soal praktis, sisi ini sering berperan sebagai jarak horizontal: jarak tanah dari dasar tangga ke dinding, proyeksi horizontal kasau atap, atau jarak horizontal antara dua titik survei. Sisi ini menjadi penyebut dalam rumus sekan. Kaki mana yang dihitung sebagai sisi samping bergantung pada sudut acuan yang dipilih, sehingga beralih dari sudut [[A]] ke sudut [[B]] akan menukar label sisi samping dan sisi depan."
                },
                {
                    "kind": "h3",
                    "text": "Apa Itu Hipotenusa?"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa [[c]] adalah sisi di seberang sudut siku-siku: dalam diagram apa pun, sisi ini menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan sisi ini selalu lebih panjang daripada kedua kaki. Dalam soal-soal praktis, sisi ini sering berperan sebagai panjang miring: tangga, permukaan tanjakan, kasau, kabel, penyangga diagonal, atau lintasan garis lurus. Sisi ini menjadi pembilang dalam rumus sekan, itulah sebabnya setiap nilai sekan selalu lebih besar dari 1."
                },
                {
                    "kind": "h3",
                    "text": "Apa Itu Sisi Depan?"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan [[a]] terletak tepat di seberang sudut [[A]] dan tidak pernah menyentuh titik sudutnya. Sisi ini tidak berperan dalam perhitungan sekan utama, itulah sebabnya kalkulator tidak pernah memintanya. Sisi ini menjadi relevan ketika teorema Pythagoras digunakan untuk memverifikasi bahwa kedua panjang yang diketahui membentuk segitiga siku-siku yang sesungguhnya, dan sisi ini menjadi pemeran utama untuk sinus, tangen, dan kosekan, di mana sisi depan adalah salah satu dari dua sisi yang bekerja."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [],
            "imgAlt": "Segitiga siku-siku dengan sudut A di kiri bawah, hipotenusa c berwarna emas, sisi samping b berwarna biru, sec(A)=c/b",
            "figcaption": "Sudut A berada di kiri bawah; sekan menggunakan hipotenusa c berwarna emas dan sisi samping b berwarna biru, bukan sisi depan a."
        },
        "sec-whatis": {
            "h2": "Memahami Rasio Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekan membandingkan seluruh sisi miring dengan kaki di sebelah sudut acuan:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Di sini [[\\sec(A)]] adalah sekan dari sudut [[A]], [[c]] adalah hipotenusa, dan [[b]] adalah sisi samping: berapa kali sisi samping muat ke dalam hipotenusa."
                },
                {
                    "kind": "h3",
                    "text": "Sekan sebagai Kebalikan dari Kosinus"
                },
                {
                    "kind": "p",
                    "text": "Kosinus membagi sisi samping dengan hipotenusa, [[\\cos(A)=b/c]]. Mengambil kebalikannya akan membalik pecahan tersebut, [[1/\\cos(A)=c/b]], yang persis merupakan rumus sekan:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Dengan [[\\cos(A)=4/5=0.8]], kebalikannya adalah [[\\sec(A)=1/0.8=1.25]]: segitiga yang sama, digambarkan dari arah berlawanan. Perbedaan ini penting karena kosinus invers, yang ditulis [[\\cos^{-1}]], adalah gagasan yang berbeda: ia mendapatkan kembali sudut dari nilai kosinus, sedangkan [[1/\\cos(A)]] adalah kebalikan dari kosinus, sebuah rasio, bukan sudut."
                },
                {
                    "kind": "h3",
                    "text": "Apa Arti Nilai Sekan 1.25?"
                },
                {
                    "kind": "p",
                    "text": "Sekan 1.25 berarti hipotenusa 1.25 kali lebih panjang daripada sisi samping. Selisih persentasenya adalah [[(1.25-1)\\times100=25]], sehingga hipotenusa 25% lebih panjang daripada sisi samping. Ini tidak berarti sudutnya [[1.25^\\circ]], dan tidak berarti segitiga berukuran 1.25 satuan apa pun. Sekan adalah perbandingan, bukan pengukuran."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Sekan Lebih Besar dari 1"
                },
                {
                    "kind": "p",
                    "text": "Dalam segitiga siku-siku yang valid dan tidak degeneratif, hipotenusa lebih panjang daripada kedua kaki, sehingga [[c \\gt b \\gt 0]]. Membagi hipotenusa dengan sisi samping karenanya menghasilkan rasio lebih besar dari 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hasil tepat 1 tidak dimungkinkan untuk sudut acuan lancip biasa dalam segitiga siku-siku yang tidak degeneratif, karena itu akan mengharuskan hipotenusa sama dengan sisi samping, meratakan segitiga menjadi garis. Nilai 1 adalah nilai batas, didekati hanya saat sudut menyusut menuju [[0^\\circ]]."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Sekan Merupakan Kebalikan dari Kosinus"
                },
                {
                    "kind": "p",
                    "text": "Hubungannya mengikuti langsung dari kedua rumus. Kosinus membagi sisi samping dengan hipotenusa, sekan membagi hipotenusa dengan sisi samping:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "Mengalikannya akan meniadakan semuanya dan menghasilkan 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "Identitas ini adalah alat verifikasi praktis: hitung kosinus dari sisi-sisi yang sama, ambil kebalikannya, dan hasilnya harus sama persis dengan hasil sekan. Ketidakcocokan menunjukkan pecahan yang terbalik atau sisi yang salah diberi label."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Sekan Tidak Memiliki Satuan"
                },
                {
                    "kind": "p",
                    "text": "Sekan membagi satu panjang dengan panjang lain, sehingga satuannya saling meniadakan. Misalnya:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "Meter-meternya lenyap, meninggalkan angka murni. Rasio yang sama muncul dengan 500 cm dan 400 cm, atau dengan pasangan satuan yang cocok lainnya, itulah sebabnya mencampur satuan, seperti hipotenusa dalam meter dengan sisi samping dalam sentimeter, merusak perhitungan bahkan sebelum dimulai."
                },
                {
                    "kind": "h3",
                    "text": "Sekan Versus Kosekan"
                },
                {
                    "kind": "p",
                    "text": "Sekan dan kosekan sama-sama rasio kebalikan yang menggunakan hipotenusa sebagai pembilang, tetapi menggunakan kaki yang berbeda sebagai penyebut:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "Sekan memasangkan hipotenusa dengan sisi samping; kosekan memasangkan hipotenusa dengan sisi depan. Keduanya tidak bisa dipertukarkan, dan memilih yang salah akan menjawab pertanyaan yang berbeda tentang segitiga."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [],
            "imgAlt": "Tiga tahap: segitiga 3-4-5, kosinus cos(A)=4/5=0.8, sekan sec(A)=5/4=1.25, hubungan kebalikannya",
            "figcaption": "Tiga tahap: beri label pada segitiga 3-4-5, hitung kosinus cos(A) = 4/5, lalu balik pecahannya untuk mendapatkan sec(A) = 5/4."
        },
        "sec-formula": {
            "h2": "Cara Kerja Rumus Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Definisi dimulai dari kata-kata, lalu beralih ke simbol. Sekan adalah hipotenusa dibagi sisi samping:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Dalam notasi standar, ini menjadi:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa menjadi pembilang karena sekan menanyakan berapa panjang sisi miring relatif terhadap tapak horizontalnya, dan sisi samping menjadi penyebut karena itulah panjang acuan yang dibandingkan."
                },
                {
                    "kind": "h3",
                    "text": "Contoh Lengkap: Segitiga Siku-Siku 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi samping [[b=4\\,\\text{cm}]], sisi depan [[a=3\\,\\text{cm}]], dan hipotenusa [[c=5\\,\\text{cm}]], kerjakan rumusnya langkah demi langkah."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 1: Tulis rumusnya.</strong> [[\\sec(A)=c/b]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 2: Substitusikan nilai yang diketahui.</strong> [[\\sec(A)=5/4]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 3: Bagi.</strong> [[\\boxed{\\sec(A)=1.25}]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 4: Tafsirkan hasilnya.</strong> Hipotenusa 1.25 kali sisi samping, membuatnya 25% lebih panjang. Tangga 5 cm yang merentang jarak horizontal 4 m berperilaku demikian; geometrinya tidak peduli satuannya, hanya proporsinya."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 5: Verifikasi menggunakan kosinus.</strong> [[\\cos(A)=4/5=0.8]], dan [[1/0.8=1.25]]. Pemeriksaan kebalikan mengonfirmasi hasil sekan, karena kosinus dan sekan saling berkebalikan secara tepat."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 6: Verifikasi segitiganya.</strong> [[3^2+4^2=5^2]], yaitu [[9+16=25]]. Panjang sisi memenuhi teorema Pythagoras, sehingga membentuk segitiga siku-siku yang sesungguhnya dan nilai sekannya dapat dipercaya."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-howto": {
            "h2": "Cara Menggunakan Kalkulator Rasio Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Kalkulator di atas menerima dua input, hipotenusa [[c]] dan sisi samping [[b]], dan menghasilkan [[\\sec(A)]]. Ikuti langkah-langkah ini secara berurutan."
                }
            ],
            "steps": [
                "<strong>Tentukan sudut acuan [[A]].</strong> Setiap label sisi dalam rasio didefinisikan relatif terhadap sudut ini, jadi pilihlah sebelum menyentuh panjang sisinya.",
                "<strong>Temukan hipotenusa [[c]].</strong> Sisi ini terletak di seberang sudut siku-siku dan merupakan sisi terpanjang segitiga; dalam diagram, inilah sisi miringnya.",
                "<strong>Temukan sisi samping [[b]].</strong> Sisi ini menyentuh sudut [[A]] dan bukan hipotenusa; inilah salah satu dari dua kaki yang saling tegak lurus.",
                "<strong>Dapatkan atau ukur kedua panjang sisi.</strong> Ukur dengan alat yang sama dan satuan yang sama, atau ubah salah satu pengukuran sebelum melanjutkan.",
                "<strong>Masukkan hipotenusa di kolom input pertama.</strong> Ini adalah pembilang pecahan, sehingga kesalahan di sini menggeser seluruh jawaban.",
                "<strong>Masukkan sisi samping di kolom input kedua.</strong> Ini adalah penyebut; sisi ini haruslah sisi di sebelah sudut [[A]], bukan sisi di seberangnya.",
                "<strong>Pilih satuan pengukuran yang cocok menggunakan pemilih satuan yang tersedia.</strong> Kedua kolom harus menggunakan satuan yang sama, atau padanan yang telah diubah, atau rasionya akan salah.",
                "<strong>Pastikan kedua pengukuran bernilai positif.</strong> Panjang nol atau negatif tidak memiliki makna dalam segitiga dan menandakan kesalahan entri data.",
                "<strong>Periksa bahwa hipotenusa lebih panjang daripada sisi samping.</strong> Jika tidak, sisi-sisinya salah diberi label atau angka-angka tersebut tidak dapat membentuk segitiga siku-siku.",
                "<strong>Klik Calculate sec(A).</strong> Alat ini melakukan pembagian [[c/b]] dan menampilkan rasionya.",
                "<strong>Baca rasio sekan yang dihasilkan.</strong> Rasio ini adalah desimal tak berdimensi, biasanya dengan empat angka di belakang koma, siap digunakan dalam perhitungan lanjutan.",
                "<strong>Pastikan hasilnya lebih besar dari 1.</strong> Untuk segitiga siku-siku yang valid dan tidak degeneratif dengan sudut acuan lancip, [[\\sec(A) \\gt 1]]; nilai pada atau di bawah 1 berarti ada yang salah di hulu.",
                "<strong>Gunakan Reset ketika Anda ingin menghapus input dan memulai perhitungan lain.</strong> Kolom dan hasilnya kembali ke keadaan awal."
            ],
            "closingParagraphs": [
                "Kalkulator tidak memerlukan sisi depan atau input sudut, karena rasio sekan dasar sepenuhnya ditentukan oleh dua panjang. Kalkulator juga tidak mendapatkan kembali sudut atau sisi yang hilang; untuk itu, rumus-rumus yang disusun ulang di bagian akhir panduan ini menunjukkan jalur manualnya."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "Contoh Langkah-demi-Langkah Menghitung Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Keempat contoh ini menggunakan segitiga klasik yang nilai sekannya layak dihafal, karena selalu muncul kembali dalam trigonometri."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 1: Segitiga Siku-Siku 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "Diketahui [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]], dan [[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa 25% lebih panjang daripada sisi samping. Ini adalah contoh sekan yang paling umum di buku teks, dan hasil 1.25 tepat."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 2: Segitiga Siku-Siku 5-12-13"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi samping [[b=12\\,\\text{m}]], sisi depan [[a=5\\,\\text{m}]], dan hipotenusa [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa kira-kira 8.33% lebih panjang daripada sisi samping. Segitiga ini muncul dalam soal-soal konstruksi karena 13 dekat dengan kemiringan atap yang landai."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 3: Segitiga 45-45-90"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi samping [[b=1\\,\\text{cm}]], sisi depan [[a=1\\,\\text{cm}]], dan hipotenusa [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa kira-kira 1.4142 kali salah satu kaki. Pada 45 derajat kedua kaki sama panjang, sehingga sekan sama dengan kosekan di sini, keduanya [[\\sqrt{2}]]."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 4: Segitiga 30-60-90"
                },
                {
                    "kind": "p",
                    "text": "Untuk sudut acuan [[A=30^\\circ]], gunakan sisi samping [[b=\\sqrt{3}\\,\\text{cm}]], sisi depan [[a=1\\,\\text{cm}]], dan hipotenusa [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa kira-kira 15.47% lebih panjang daripada sisi samping. Perhatikan bahwa rasio hipotenusa 2:1 yang sama muncul pada 60 derajat dengan sisi-sisi yang ditukar, di mana sekannya menjadi 2."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-applications": {
            "h2": "Contoh Nyata Penggunaan Rasio Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekan berguna di mana pun panjang miring harus dibandingkan dengan proyeksi horizontalnya. Dalam setiap contoh, segitiga siku-siku adalah model geometris yang disederhanakan dari situasi nyata, dan asumsi yang dinyatakan menjaga kejujuran penyederhanaan tersebut."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 5: Menghitung Rasio Sekan Tangga"
                },
                {
                    "kind": "p",
                    "text": "Sebuah tangga panjangnya 5 m, dan dasarnya berjarak 4 m dari dinding vertikal. Sudut [[A]] berada di antara tangga dan tanah yang datar. Hipotenusa adalah tangga itu sendiri, [[c=5\\,\\text{m}]], dan sisi samping adalah jarak tanah horizontal, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Tangga 25% lebih panjang daripada proyeksi tanah horizontalnya. Rasio ini tidak menentukan apakah tangga diposisikan dengan aman; keselamatan tangga bergantung pada sudut kerja dan pijakannya, bukan pada sekan saja."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 6: Menghitung Rasio Sekan Kasau Atap"
                },
                {
                    "kind": "p",
                    "text": "Kasau atap memiliki panjang miring 6.5 m dan jarak horizontal 6 m. Kasau adalah hipotenusa, [[c=6.5\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Kasau kira-kira 8.33% lebih panjang daripada jarak horizontalnya. Tukang atap menggunakan hubungan ini secara terbalik setiap saat: ukur jarak pada denah, kalikan dengan sekan, pesan stok kasau. Rasio bukan penilaian desain atap atau struktural yang lengkap."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 7: Mengevaluasi Rasio Sekan Tanjakan"
                },
                {
                    "kind": "p",
                    "text": "Tanjakan yang disederhanakan memiliki panjang miring 9.5 m dan jarak horizontal 9 m. Permukaan miring adalah hipotenusa, [[c=9.5\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "Panjang miring tanjakan kira-kira 5.56% lebih panjang daripada proyeksi horizontalnya. Sekan yang landai mencerminkan kemiringan yang lembut, tetapi rasio saja tidak menentukan aksesibilitas atau kepatuhan terhadap kode bangunan."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 8: Pengukuran Survei"
                },
                {
                    "kind": "p",
                    "text": "Segitiga survei yang disederhanakan memiliki jarak garis lurus 50 m dan jarak horizontal 40 m. Jarak garis lurus adalah hipotenusa, [[c=50\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=40\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Jarak garis lurus 25% lebih panjang daripada jarak horizontal. Surveyor menerapkan reduksi horizontal semacam ini secara rutin; pekerjaan lapangan yang sebenarnya dapat memerlukan koreksi dan prosedur pengukuran tambahan di luar model sederhana."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 9: Kawat Penahan yang Menyangga Tiang"
                },
                {
                    "kind": "p",
                    "text": "Kawat penahan panjangnya 13 m, dan jangkar tanahnya berjarak 12 m secara horizontal dari tiang. Kawat adalah hipotenusa, [[c=13\\,\\text{m}]], dan jarak horizontal dari tiang ke jangkar adalah sisi samping, [[b=12\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Kawat kira-kira 8.33% lebih panjang daripada proyeksi horizontalnya. Ini memberi tahu berapa panjang kabel yang harus dipotong, bukan berapa beban yang ditanggungnya; tegangan kawat, kekuatan jangkar, dan keselamatan struktural memerlukan analisis tersendiri."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 10: Menghitung Rasio Sekan Stringer Tangga Rumah"
                },
                {
                    "kind": "p",
                    "text": "Stringer tangga rumah yang disederhanakan panjangnya 5 m dan merentang jarak horizontal 4 m. Stringer adalah hipotenusa, [[c=5\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Stringer diagonal 25% lebih panjang daripada rentang horizontal. Tukang kayu menggunakan perhitungan terbalik untuk memotong stringer dari dimensi denah. Rasio tidak memverifikasi dimensi tangga rumah atau kepatuhan terhadap kode bangunan."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 11: Memahami Proyeksi Horizontal Boom Derek"
                },
                {
                    "kind": "p",
                    "text": "Boom derek yang disederhanakan memiliki panjang 10 m dan proyeksi horizontal 6 m. Boom adalah hipotenusa, [[c=10\\,\\text{m}]], dan proyeksi horizontal adalah sisi samping, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Boom kira-kira 66.67% lebih panjang daripada proyeksi horizontalnya. Sekan yang curam mencerminkan sudut kerja yang tinggi. Rasio tidak menentukan kapasitas derek atau keselamatan pengoperasian."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 12: Segmen Penerbangan Pesawat yang Lurus"
                },
                {
                    "kind": "p",
                    "text": "Untuk segmen penerbangan lurus yang disederhanakan, panjang lintasannya 5 km dan perpindahan horizontalnya 4 km. Jalur penerbangan adalah hipotenusa, [[c=5\\,\\text{km}]], dan perpindahan horizontal adalah sisi samping, [[b=4\\,\\text{km}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Panjang lintasan 25% lebih panjang daripada perpindahan horizontal. Ini adalah contoh geometris ideal, bukan perhitungan navigasi penerbangan yang lengkap; perencanaan penerbangan yang sebenarnya menambahkan angin, perubahan ketinggian, dan rute ruang udara."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 13: Penyangga Mekanis Diagonal"
                },
                {
                    "kind": "p",
                    "text": "Penyangga diagonal memiliki panjang 2 m dan proyeksi horizontal 1.2 m. Penyangga adalah hipotenusa, [[c=2\\,\\text{m}]], dan proyeksi horizontal adalah sisi samping, [[b=1.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Penyangga kira-kira 66.67% lebih panjang daripada proyeksi horizontalnya. Rasio menggambarkan geometri pemasangannya; rasio tidak menentukan kekuatan atau kesesuaian penyangga."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 14: Menghitung Rasio Sekan Rute Pendakian"
                },
                {
                    "kind": "p",
                    "text": "Bagian lurus yang disederhanakan dari rute pendakian memiliki panjang lintasan 100 m dan perpindahan horizontal 80 m. Lintasan adalah hipotenusa, [[c=100\\,\\text{m}]], dan perpindahan horizontal adalah sisi samping, [[b=80\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Lintasan lurus 25% lebih panjang daripada perpindahan horizontalnya. Jalur pendakian yang sebenarnya mengandung tikungan dan gradien yang berubah, jadi perlakukan ini sebagai satu segmen lurus, bukan seluruh rute."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 15: Penyangga Kanopi"
                },
                {
                    "kind": "p",
                    "text": "Penyangga kanopi memiliki panjang 3 m dan proyeksi horizontal 2.4 m. Penyangga adalah hipotenusa, [[c=3\\,\\text{m}]], dan proyeksi horizontal adalah sisi samping, [[b=2.4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Penyangga 25% lebih panjang daripada proyeksi horizontalnya. Perhitungan tidak menentukan kesesuaian struktural; kekuatan pengencang dan beban angin memerlukan pemeriksaannya sendiri."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 16: Kabel Antara Dua Titik"
                },
                {
                    "kind": "p",
                    "text": "Kabel lurus merentang total 25 m antara dua titik dengan jarak horizontal 24 m. Kabel adalah hipotenusa, [[c=25\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "Kabel kira-kira 4.17% lebih panjang daripada jarak horizontal. Model yang disederhanakan mengasumsikan kabel lurus dan hubungan segitiga siku-siku; kabel yang sebenarnya melengkung ke bawah, yang menambah panjang di luar model sekan."
                },
                {
                    "kind": "p",
                    "text": "Sekan adalah rasio matematis, bukan besaran fisik yang memiliki satuan. Nilai praktisnya terletak pada membandingkan panjang miring dengan proyeksi horizontalnya, mendapatkan kembali panjang ketika sudutnya diketahui, memverifikasi geometri segitiga, dan menggunakan rumus yang secara khusus meminta sekan. Rasio ini tidak pernah dengan sendirinya mensertifikasi keselamatan struktural, kapasitas beban, aksesibilitas, atau kepatuhan rekayasa."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "Situasi",
                        "c",
                        "b",
                        "Rumus",
                        "Rasio",
                        "Lebih panjang",
                        "Makna"
                    ],
                    "rows": [
                        [
                            "Tangga",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Tangga seperempat lebih panjang daripada jarak tanahnya"
                        ],
                        [
                            "Kasau atap",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "Kasau sedikit lebih panjang daripada jarak horizontalnya"
                        ],
                        [
                            "Tanjakan",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "Kemiringan landai yang hanya sedikit lebih panjang daripada jarak horizontalnya"
                        ],
                        [
                            "Survei",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "Jarak garis lurus melebihi jarak horizontal"
                        ],
                        [
                            "Kawat penahan",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "Panjang kawat untuk dipotong berdasarkan jarak tanah"
                        ],
                        [
                            "Stringer tangga",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Stringer diagonal versus rentang horizontal"
                        ],
                        [
                            "Boom derek",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "Boom curam jauh lebih panjang daripada proyeksinya"
                        ],
                        [
                            "Segmen penerbangan",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "Lintasan ideal versus perpindahan horizontal"
                        ],
                        [
                            "Penyangga diagonal",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "Panjang penyangga terhadap proyeksi horizontalnya"
                        ],
                        [
                            "Rute pendakian",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "Segmen lurus versus jarak peta horizontal"
                        ],
                        [
                            "Penyangga kanopi",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "Panjang penyangga versus jangkauan horizontal"
                        ],
                        [
                            "Rentang kabel",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "Kabel nyaris horizontal, nyaris tidak ada tambahan panjang"
                        ]
                    ]
                }
            ],
            "figures": [],
            "imgAlt": "Empat panel: rasio tangga 1.25, tanjakan 1.0556, survei 1.25, boom derek 1.6667, masing-masing dengan segitiga berlabel",
            "figcaption": "Empat perhitungan praktis: tangga, tanjakan, survei, dan boom derek, masing-masing dengan segitiga, rumus, dan rasionya."
        },
        "sec-angle": {
            "h2": "Memahami Hubungan Antara Sekan dan Besar Sudut",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekan tumbuh seiring bertambahnya sudut acuan. Geometrinya menjelaskan alasannya: ketika sudut [[A]] kecil, sisi samping nyaris sepanjang hipotenusa, sehingga rasionya berada sedikit di atas 1. Saat sudut melebar, sisi samping menjadi bagian yang lebih kecil dari hipotenusa, dan rasionya naik. Pada [[45^\\circ]] sekannya adalah [[\\sqrt{2}]], sekitar 1.4142; pada [[60^\\circ]] tepat 2, karena hipotenusa dua kali sisi samping; dan saat sudut mendekati [[90^\\circ]], sisi samping menyusut menuju nol dan sekan tumbuh tanpa batas."
                }
            ],
            "steps": [],
            "closingParagraphs": [
                "Polanya monotonik: setiap kenaikan sudut menaikkan sekan, dan rasionya tetap di atas 1 untuk setiap sudut lancip. Pengukuran dalam tabel bersifat ilustratif; rasio, bukan ukuran absolut segitiga, yang menentukan sudut. Sekan karena itu menggambarkan bentuk segitiga, bukan skalanya."
            ],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "Sudut [[A]]",
                        "Sisi samping [[b]]",
                        "Hipotenusa [[c]]",
                        "Rasio sekan"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "Kira-kira 1.1547"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "Kira-kira 1.4142"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "Kira-kira 3.8637",
                            "Kira-kira 3.8637"
                        ]
                    ]
                }
            ],
            "figures": [],
            "imgAlt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai sekan 1.1547, 1.4142, 2; sekan naik seiring bertambahnya sudut",
            "figcaption": "Saat sudut A bertambah, sisi samping menjadi bagian yang lebih kecil dari hipotenusa, sehingga sec(A) naik."
        },
        "sec-hypotenuse": {
            "h2": "Cara Menemukan Hipotenusa Menggunakan Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Rumus sekan dapat disusun ulang untuk menemukan hipotenusa ketika sisi samping dan sudutnya diketahui. Mulailah dengan [[\\sec(A)=c/b]] dan kalikan kedua sisi dengan [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa sama dengan sisi samping dikalikan sekan dari sudut. Diketahui sisi samping [[b=4\\,\\text{m}]] dan sudut [[A=60^\\circ]], serta mengetahui [[\\sec(60^\\circ)=2]]:"
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa dua kali sisi samping pada sudut ini, yang cocok dengan geometri 30-60-90: sisi di seberang sudut 30 derajat adalah setengah hipotenusa. Sisi samping dapat ditemukan dengan cara yang sama dengan menyusun ulang lagi:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Dengan hipotenusa [[c=10\\,\\text{m}]] dan [[A=60^\\circ]]: [[b=10/2]], sehingga [[\\boxed{b=5\\,\\text{m}}]]. Ini adalah penyusunan ulang matematis dari rumus yang sama. Kalkulator di halaman ini menghasilkan rasio sekan dari panjang sisi; ia tidak langsung menghitung sisi yang hilang."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-recover": {
            "h2": "Cara Menemukan Sudut dari Rasio Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Rasio sekan dan sudut adalah besaran yang berbeda: yang satu adalah perbandingan sisi yang tak berdimensi, yang lain diukur dalam derajat. Jika rasio sekannya diketahui, dapatkan kembali kosinus dengan kebalikannya:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "Kemudian kosinus invers menghasilkan sudut:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Diketahui [[\\sec(A)=1.25]], pertama hitung kosinus: [[\\cos(A)=1/1.25=0.8]]. Kemudian [[A=\\cos^{-1}(0.8)]], menghasilkan [[\\boxed{A\\approx36.87^\\circ}]]. Ini adalah perhitungan sudut terpisah, bukan sesuatu yang dilakukan kalkulator rasio sekan secara langsung. Atur kalkulator ilmiah ke derajat jika jawaban diharapkan dalam derajat; dalam mode radian, input yang sama menghasilkan sekitar 0.6435, sudut yang sama dalam satuan berbeda."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-mistakes": {
            "h2": "Kesalahan Umum Saat Menghitung Sekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sebagian besar kesalahan sekan berasal dari pecahan yang terbalik, sisi yang salah diberi label, atau satuan yang tergelincir. Jalani daftar ini sebelum mempercayai sebuah hasil."
                }
            ],
            "steps": [
                "<strong>Membalik rumus dan menghitung [[b/c]] alih-alih [[c/b]].</strong> Ini adalah kesalahan tunggal yang paling umum, dan hasilnya adalah kosinus, bukan sekan. Dengan [[c=5]] dan [[b=4]], urutan yang salah menghasilkan 0.8; urutan yang benar menghasilkan 1.25.",
                "<strong>Mencampuradukkan sekan dengan kosinus.</strong> Kosinus adalah sisi samping dibagi hipotenusa; sekan adalah kebalikan tepatnya. Jika jawabannya keluar di bawah 1, hampir pasti itu kosinus, bukan sekan.",
                "<strong>Mencampuradukkan sekan dengan kosekan.</strong> Keduanya menggunakan hipotenusa sebagai pembilang, sehingga terlihat mirip. Sekan membagi dengan sisi samping [[b]]; kosekan membagi dengan sisi depan [[a]]. Periksa kaki mana yang sebenarnya diberikan soal.",
                "<strong>Menggunakan sisi depan alih-alih sisi samping.</strong> Membagi [[c/a]] menghitung kosekan. Dengan [[c=5]] dan [[a=3]], itu menghasilkan 1.6667, kosekan yang benar tetapi sekan yang salah.",
                "<strong>Menggunakan sisi yang bukan hipotenusa sebagai pembilang.</strong> Sekan selalu memiliki hipotenusa di atas. Kaki dibagi kaki adalah tangen atau kotangen; kaki dibagi hipotenusa adalah sinus atau kosinus.",
                "<strong>Tertukar antara sisi samping dan sisi depan.</strong> Label-labelnya bertukar ketika sudut acuan berubah dari [[A]] ke [[B]]. Selalu pastikan sudut mana yang disebut soal sebelum menetapkan [[b]].",
                "<strong>Menganggap sekan adalah sudut yang diukur dalam derajat.</strong> Hasil 1.25 adalah rasio, bukan [[1.25^\\circ]]. Memperlakukannya sebagai derajat akan memasukkan nilai tak bermakna ke setiap perhitungan lanjutan.",
                "<strong>Melaporkan rasio dengan meter atau sentimeter.</strong> Satuan saling meniadakan dalam pembagian, jadi '1.25 m' salah. Tulis angka biasanya dan simpan satuannya pada pengukuran input di tempatnya.",
                "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Segitiga tidak dapat memiliki sisi nol atau negatif, sehingga input-input ini menandakan kesalahan entri data atau pengukuran yang hilang, bukan kasus batas yang valid.",
                "<strong>Memasukkan sisi samping yang lebih panjang daripada hipotenusa.</strong> Hipotenusa selalu menjadi sisi terpanjang. Jika [[b \\gt c]], inputnya tertukar atau segitiganya mustahil.",
                "<strong>Mencampur satuan pengukuran.</strong> Hipotenusa 5 m dengan sisi samping 40 cm menghasilkan 0.125, angka yang tak bermakna. Ubah ke satu satuan terlebih dahulu: 5 m dan 4 m menghasilkan 1.25 yang benar.",
                "<strong>Membulatkan terlalu dini.</strong> Membulatkan pembagian perantara ke dua desimal lalu melanjutkan perhitungan akan melipatgandakan kesalahan. Simpan presisi penuh di setiap langkah dan bulatkan hanya jawaban akhirnya.",
                "<strong>Menganggap sekan harus sama dengan 1 untuk segitiga siku-siku.</strong> Tidak ada segitiga siku-siku yang sekannya tepat 1. Harapkan nilai di atas 1, dan perlakukan tepat 1 sebagai sinyal bahwa inputnya terbalik atau segitiganya degeneratif.",
                "<strong>Mencampuradukkan kebalikan kosinus dengan kosinus invers.</strong> [[1/\\cos(A)]] adalah sekan, sebuah rasio; [[\\cos^{-1}]] adalah kosinus invers, yang menghasilkan sudut. Nama yang mirip menyebabkan kesalahan nyata, jadi bacalah notasinya dengan cermat.",
                "<strong>Menganggap sekan saja menentukan dimensi absolut segitiga.</strong> Sekan menggambarkan bentuk, bukan ukuran: tak terhingga segitiga berbagi sekan 1.25, dari hipotenusa 5 cm hingga 5 km. Rasio menetapkan proporsinya; panjang sebenarnya memerlukan setidaknya satu pengukuran sisi."
            ],
            "closingParagraphs": [
                "<strong>Salah Versus Benar: Perbandingan yang Dikerjakan</strong> Diketahui hipotenusa [[c=5]] dan sisi samping [[b=4]]:",
                "<strong>Salah:</strong> [[4/5=0.8]]. Ini adalah kosinus, bukan sekan. Pembilang dan penyebutnya terbalik.",
                "<strong>Benar:</strong> [[\\sec(A)=5/4=1.25]].",
                "<strong>Verifikasi:</strong> [[\\cos(A)=0.8]], dan [[1/0.8=1.25]]. Pemeriksaan kebalikan mengonfirmasi hasilnya, dan jawabannya berada di atas 1, sebagaimana setiap sekan yang valid harusnya."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "Cara Memeriksa Apakah Hasil Sekan Anda Valid",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Segitiga siku-siku yang valid dan tidak degeneratif memerlukan sisi-sisi positif dengan hipotenusa yang selalu terpanjang, [[0 \\lt b \\lt c]], sehingga hasil sekan harus lebih besar dari 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Kedua pengukuran harus menggunakan satuan yang cocok. Hasil pada atau di bawah 1 biasanya menunjukkan input terbalik, identifikasi sisi yang salah, pengukuran yang tidak cocok, atau dimensi segitiga yang tidak valid."
                },
                {
                    "kind": "h3",
                    "text": "Metode 1: Periksa Kebalikan dari Kosinus"
                },
                {
                    "kind": "p",
                    "text": "Verifikasi [[\\cos(A)=b/c]], lalu konfirmasi [[\\sec(A)=1/\\cos(A)]]. Dengan [[b=4]] dan [[c=5]]: [[\\cos(A)=4/5=0.8]], sehingga [[\\sec(A)=1/0.8=1.25]]. Ketidakcocokan antara kedua jalur menandakan pecahan terbalik atau sisi yang salah diberi label."
                },
                {
                    "kind": "h3",
                    "text": "Metode 2: Periksa Teorema Pythagoras"
                },
                {
                    "kind": "p",
                    "text": "Jika sisi depan diketahui atau dibutuhkan, hitung [[a=\\sqrt{c^2-b^2}]]. Untuk [[b=4]] dan [[c=5]]: [[a=\\sqrt{25-16}=3]], dan [[3^2+4^2=5^2]]. Ini mengonfirmasi dimensi segitiga siku-siku 3-4-5. Sisi depan adalah nilai verifikasi di sini, bukan bagian dari rumus sekan utama."
                },
                {
                    "kind": "h3",
                    "text": "Metode 3: Periksa Menggunakan Kosinus Invers"
                },
                {
                    "kind": "p",
                    "text": "Untuk rasio sekan 1.25: [[A=\\cos^{-1}(1/1.25)]], yaitu [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Karena sekan berada sedikit di atas 1, sudutnya seharusnya berada jauh di bawah [[45^\\circ]]; jika tidak, label sisinya mungkin tertukar. Perbedaan kecil bisa muncul dari pembulatan."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-vs": {
            "h2": "Sekan vs. Kosinus, Sinus, dan Kosekan",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Setiap rasio membandingkan pasangan sisi yang berbeda, menggunakan sudut acuan dan label sisi yang sama:"
                }
            ],
            "steps": [],
            "closingParagraphs": [
                "Sekan dan kosinus adalah pasangan yang saling berkebalikan: [[\\sec(A)=1/\\cos(A)]]. Jika [[\\cos(A)=0.8]], maka [[\\sec(A)=1.25]]. Pilih sekan ketika rumus meminta hipotenusa dibagi sisi samping, ketika Anda membandingkan panjang miring dengan proyeksi horizontalnya, atau ketika hubungan yang diketahui dimulai dari sisi terpanjang; pilih kosinus untuk sisi samping terhadap hipotenusa, sinus untuk sisi depan terhadap hipotenusa, dan kosekan ketika hipotenusa dibandingkan dengan sisi depan.",
                "Untuk rasio-rasio tetangga, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sinus</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosinus</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Tangen</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosekan</a>, dan <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kotangen</a>."
            ],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "Rasio",
                        "Rumus",
                        "Apa yang dibandingkan"
                    ],
                    "rows": [
                        [
                            "Sinus",
                            "sin(A) = a/c",
                            "Sisi depan terhadap hipotenusa"
                        ],
                        [
                            "Kosinus",
                            "cos(A) = b/c",
                            "Sisi samping terhadap hipotenusa"
                        ],
                        [
                            "Tangen",
                            "tan(A) = a/b",
                            "Sisi depan terhadap sisi samping"
                        ],
                        [
                            "Sekan",
                            "sec(A) = c/b",
                            "Hipotenusa terhadap sisi samping"
                        ],
                        [
                            "Kosekan",
                            "csc(A) = c/a",
                            "Hipotenusa terhadap sisi depan"
                        ],
                        [
                            "Kotangen",
                            "cot(A) = b/a",
                            "Sisi samping terhadap sisi depan"
                        ]
                    ]
                }
            ],
            "figures": []
        },
        "sec-related": {
            "h2": "Jelajahi Kalkulator Trigonometri Terkait",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "Kalkulator Rasio Sinus"
                },
                {
                    "name": "Kalkulator Rasio Kosinus"
                },
                {
                    "name": "Kalkulator Rasio Tangen"
                },
                {
                    "name": "Kalkulator Rasio Kosekan"
                },
                {
                    "name": "Kalkulator Rasio Kotangen"
                },
                {
                    "name": "Kalkulator Sudut Segitiga Siku-Siku"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Gunakan Rasio Sekan dengan Percaya Diri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekan adalah bentuk terbalik dari kosinus: bagi hipotenusa dengan sisi samping dan Anda telah menggambarkan seberapa jauh lebih panjang sisi miring dibandingkan tapak horizontalnya. Rumus [[\\sec(A)=c/b]] hanya memerlukan dua pengukuran, jawabannya selalu berupa angka tak berdimensi yang lebih besar dari 1, dan nilainya tumbuh seiring bertambahnya sudut acuan. Ketika sisi yang hilang dibutuhkan, [[c=b\\sec(A)]] mendapatkan kembali hipotenusa; ketika sudutnya dibutuhkan, [[A=\\cos^{-1}(1/\\sec(A))]] akan menemukannya. Tangga, kasau, tanjakan, atau 3-4-5 di buku teks, metodenya tidak pernah berubah: tentukan hipotenusa, tentukan sisi samping, bagi, dan verifikasi dengan kebalikan dari kosinus."
                }
            ]
        }
    },
    "faqs": [
        {
            "question": "Apa rumus rasio sekan untuk segitiga siku-siku?",
            "answer": "sec(A) = c / b: bagi hipotenusa c dengan sisi samping sudut A. Dengan hipotenusa 5 cm dan sisi samping 4 cm, hasilnya adalah 5/4 = 1.25. Angka desimal itu adalah jawaban lengkap, rasio tak berdimensi, bukan sudut."
        },
        {
            "question": "Bagaimana hubungan sekan dengan kosinus?",
            "answer": "Sekan adalah kebalikan dari kosinus: sec(A) = 1 / cos(A). Jika cos(A) = 4/5 = 0.8, maka sec(A) = 1/0.8 = 1.25. Kedua rasio menggambarkan sudut yang sama dari sudut pandang yang dibalik, dan pemeriksaan kebalikan adalah cara tercepat untuk memverifikasi perhitungan sekan."
        },
        {
            "question": "Mengapa sekan lebih besar dari 1 dalam segitiga siku-siku?",
            "answer": "Dalam segitiga siku-siku yang valid dan tidak degeneratif, hipotenusa selalu lebih panjang daripada kedua kaki, sehingga c > b > 0. Membagi panjang yang lebih besar dengan yang lebih kecil selalu menghasilkan rasio di atas 1: sec(A) = c/b > 1 untuk setiap sudut acuan lancip."
        },
        {
            "question": "Bisakah sekan sama dengan 1?",
            "answer": "Tidak untuk sudut lancip biasa dalam segitiga siku-siku yang nyata. Sekan tepat 1 akan mengharuskan hipotenusa sama dengan sisi samping, yang meratakan segitiga menjadi garis lurus. Nilai 1 adalah nilai batas yang didekati saat sudut A menyusut menuju 0 derajat, bukan nilai yang pernah dihasilkan segitiga sesungguhnya."
        },
        {
            "question": "Apa arti nilai sekan 1.25?",
            "answer": "Hipotenusa 1.25 kali lebih panjang daripada sisi samping, atau 25 persen lebih panjang. Ini tidak berarti sudutnya 1.25 derajat, dan tidak berarti segitiga berukuran 1.25 satuan. Sekan adalah perbandingan tak berdimensi dari dua panjang."
        },
        {
            "question": "Apakah sekan memiliki satuan pengukuran?",
            "answer": "Tidak. Kedua input adalah panjang yang diukur dalam satuan yang sama, sehingga satuannya saling meniadakan: 5 m / 4 m = 1.25, persis seperti 500 cm / 400 cm = 1.25. Laporkan sekan sebagai angka biasa, jangan pernah disertai derajat, meter, atau kaki."
        },
        {
            "question": "Bagaimana cara menghitung sekan dari panjang sisi?",
            "answer": "Ukur hipotenusa c dan sisi samping b dalam satuan yang sama, pastikan keduanya positif dan c lebih panjang daripada b, lalu bagi: sec(A) = c / b. Di halaman ini, masukkan hipotenusa di kolom pertama dan sisi samping di kolom kedua, pilih satuan yang cocok, dan klik Calculate sec(A)."
        },
        {
            "question": "Bagaimana cara menemukan hipotenusa menggunakan sekan?",
            "answer": "Susun ulang rumusnya menjadi c = b * sec(A). Jika sisi samping 4 m dan sudut A 60 derajat, sec(60 deg) = 2, sehingga c = 4 * 2 = 8 m. Ini adalah penyusunan ulang manual; kalkulator di halaman ini menghasilkan rasio dari panjang sisi, bukan sisi yang hilang."
        },
        {
            "question": "Bagaimana cara menemukan sudut dari rasio sekan?",
            "answer": "Ambil kebalikannya untuk mendapatkan rasio kosinus, lalu terapkan kosinus invers: A = cos^-1(1 / sec(A)). Untuk sec(A) = 1.25, rasio kosinusnya adalah 0.8, sehingga A = cos^-1(0.8), sekitar 36.87 derajat. Atur kalkulator ilmiah ke mode derajat terlebih dahulu. Kalkulator di halaman ini menghasilkan rasio, bukan sudut."
        },
        {
            "question": "Apa perbedaan sekan dan kosekan?",
            "answer": "Sekan membagi hipotenusa dengan sisi samping (c/b); kosekan membagi hipotenusa dengan sisi depan (c/a). Keduanya adalah rasio kebalikan yang melibatkan hipotenusa, tetapi menggunakan kaki yang berbeda, sehingga menjawab pertanyaan yang berbeda dan tidak pernah bisa dipertukarkan."
        },
        {
            "question": "Bisakah saya menghitung sekan tanpa mengetahui sisi depan?",
            "answer": "Ya. Rumus sekan utama hanya menggunakan hipotenusa dan sisi samping, sehingga sisi depan tidak pernah masuk perhitungan. Sisi depan menjadi berguna hanya ketika teorema Pythagoras digunakan untuk memverifikasi segitiga atau ketika sinus, tangen, atau kosekan masuk dalam perhitungan."
        },
        {
            "question": "Bagaimana sekan digunakan dalam pengukuran praktis?",
            "answer": "Sekan membandingkan panjang miring dengan proyeksi horizontalnya: tangga terhadap jarak tanahnya, kasau atap terhadap jarak horizontalnya, kabel terhadap jarak horizontal kedua ujungnya. Rasio memberi tahu seberapa jauh lebih panjang jalur miring dibandingkan proyeksinya, yang berguna untuk memperkirakan panjang material dari denah horizontal."
        }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Trigonometri Terkait"
},
"ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
        "sec-intro": "ما هي حاسبة نسبة القاطع؟",
        "sec-triangle": "فهم الضلع المجاور والوتر",
        "sec-whatis": "فهم نسبة القاطع",
        "sec-formula": "كيف تعمل صيغة القاطع",
        "sec-howto": "كيفية استخدام حاسبة نسبة القاطع",
        "sec-examples": "أمثلة خطوة بخطوة لحساب القاطع",
        "sec-applications": "أمثلة واقعية لاستخدام نسبة القاطع",
        "sec-angle": "فهم العلاقة بين القاطع وحجم الزاوية",
        "sec-hypotenuse": "كيفية إيجاد الوتر باستخدام القاطع",
        "sec-recover": "كيفية إيجاد زاوية من نسبة قاطع",
        "sec-mistakes": "أخطاء شائعة عند حساب القاطع",
        "sec-verify": "كيفية التحقق من صحة نتيجة القاطع",
        "sec-vs": "القاطع مقابل جيب التمام والجيب وقاطع التمام",
        "sec-related": "استكشف حاسبات المثلثات ذات الصلة",
        "sec-faq": "الأسئلة الشائعة"
    },
    "sections": {
        "sec-intro": {
            "h2": "ما هي حاسبة نسبة القاطع؟",
            "blocks": [
                {
                    "kind": "p",
                    "text": "تجيب حاسبة نسبة القاطع عن سؤال واحد: بالنسبة لزاوية حادة في مثلث قائم الزاوية، كيف يقارن أطول ضلع بالضلع الملاصق للزاوية؟ أدخل الوتر والضلع المجاور، وستقسم الأداة الوتر على الضلع المجاور، لتعيد [[\\sec(A)=c/b]]. ومع وتر طوله 5 سم وضلع مجاور طوله 4 سم، يكون الحساب [[5/4=1.25]]: الوتر أطول من الضلع المجاور بنحو 1.25 مرة، وهي طريقة أخرى لقول إنه أطول بنسبة 25%. وهذا العدد العشري هو الإجابة الكاملة. وهو نسبة عديمة الوحدات، لأن السنتيمترات تلغى في القسمة، وليس زاوية بالدرجات، فلا تقرأ 1.25 أبدا على أنها [[1.25^\\circ]]. والضلع المقابل لا يدخل هذا الحساب أبدا؛ فالوتر والضلع المجاور كافيان. والقاطع هو أيضا مقلوب جيب التمام، ولهذا تعرفه كثير من الكتب المدرسية بأنه الصورة المعكوسة من [[\\cos(A)]]."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-triangle": {
            "h2": "فهم الضلع المجاور والوتر",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "ما هو المثلث القائم الزاوية؟"
                },
                {
                    "kind": "p",
                    "text": "المثلث القائم الزاوية فيه زاوية قياسها [[90^\\circ]] بالضبط، وهي الزاوية بين خطين متعامدين، كالجدار الذي يلتقي بأرضية مستوية. الوتر يقع مقابل تلك الزاوية القائمة وهو دائما أطول ضلع، لأنه يجب أن يمتد على القطر الكامل عبر الركن. الزاويتان الأخريان تتقاسمان الدرجات التسعين المتبقية، فتكونان حادتين. الضلعان القائمان يلتقيان عند الزاوية القائمة، متعامدين أحدهما على الآخر، والعلاقة بينهما وبين الوتر هي ما يجعل حساب المثلثات للمثلث القائم ممكنا."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الضلع المجاور؟"
                },
                {
                    "kind": "p",
                    "text": "الضلع المجاور [[b]] هو الضلع القائم الذي يلامس الزاوية المرجعية [[A]] دون أن يكون الوتر. وفي المسائل العملية غالبا ما يلعب دور المسافة الأفقية: المسافة الأرضية من قاعدة سلم إلى جدار، أو الإسقاط الأفقي لعارضة سقف، أو الفصل الأفقي بين نقطتي مساحة. وهو يذهب إلى مقام صيغة القاطع. وأي ضلع يعد مجاورا يعتمد على الزاوية المرجعية المختارة، فالانتقال من الزاوية [[A]] إلى الزاوية [[B]] يبدل تسميتي المجاور والمقابل."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الوتر؟"
                },
                {
                    "kind": "p",
                    "text": "الوتر [[c]] هو الضلع المقابل للزاوية القائمة: في أي رسم يقابل المربع الصغير الذي يميز ركن [[90^\\circ]]، وهو أطول من أي من الضلعين قطعا. وفي المسائل العملية غالبا ما يلعب دور طول مائل: سلم، أو سطح منحدر، أو عارضة، أو كابل، أو دعامة قطرية، أو مسار مستقيم. وهو يذهب إلى بسط صيغة القاطع، ولهذا تخرج كل قيمة قاطع أكبر من 1."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الضلع المقابل؟"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل [[a]] يقع مباشرة مقابل الزاوية [[A]] ولا يلامس رأسها أبدا. وهو لا يلعب أي دور في حساب القاطع الأساسي، ولهذا لا تطلبه الحاسبة أبدا. ويصبح مهما عندما تستخدم نظرية فيثاغورس للتحقق من أن الطولين المعلومين يشكلان مثلثا قائما حقيقيا، ويحتل مركز الصدارة في الجيب والظل وقاطع التمام، حيث يكون الضلع المقابل أحد الضلعين العاملين."
                }
            ],
            "imgAlt": "مثلث قائم الزاوية بزاوية A أسفل اليسار، الوتر الذهبي c، الضلع المجاور الأزرق b، sec(A)=c/b",
            "figcaption": "الزاوية A تقع أسفل اليسار؛ يستخدم القاطع الوتر الذهبي c والضلع المجاور الأزرق b، وليس الضلع المقابل a.",
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-whatis": {
            "h2": "فهم نسبة القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يقارن القاطع الضلع المائل الكامل بالضلع القائم الملاصق للزاوية المرجعية:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "هنا [[\\sec(A)]] هو قاطع الزاوية [[A]]، و[[c]] هو الوتر، و[[b]] هو الضلع المجاور: أي كم مرة يتسع الضلع المجاور في الوتر."
                },
                {
                    "kind": "h3",
                    "text": "القاطع مقلوب جيب التمام"
                },
                {
                    "kind": "p",
                    "text": "جيب التمام يقسم الضلع المجاور على الوتر، [[\\cos(A)=b/c]]. وأخذ المقلوب يعكس ذلك الكسر، [[1/\\cos(A)=c/b]]، وهو بالضبط صيغة القاطع:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "مع [[\\cos(A)=4/5=0.8]]، يكون المقلوب [[\\sec(A)=1/0.8=1.25]]: المثلث نفسه، موصوفا من الاتجاه المعاكس. وهذا التمييز مهم لأن جيب التمام العكسي، المكتوب [[\\cos^{-1}]]، فكرة مختلفة: فهو يستعيد زاوية من قيمة جيب تمام، بينما [[1/\\cos(A)]] هو مقلوب جيب التمام، نسبة وليست زاوية."
                },
                {
                    "kind": "h3",
                    "text": "ماذا تعني قيمة قاطع مقدارها 1.25؟"
                },
                {
                    "kind": "p",
                    "text": "قاطع مقداره 1.25 يعني أن الوتر أطول من الضلع المجاور بنحو 1.25 مرة. والفرق بالنسبة المئوية هو [[(1.25-1)\\times100=25]]، فالوتر أطول من الضلع المجاور بنسبة 25%. وهذا لا يعني أن الزاوية [[1.25^\\circ]]، ولا يعني أن المثلث يقيس 1.25 وحدة من أي شيء. القاطع مقارنة وليس قياسا."
                },
                {
                    "kind": "h3",
                    "text": "لماذا يكون القاطع أكبر من 1"
                },
                {
                    "kind": "p",
                    "text": "في المثلث القائم الزاوية الصحيح غير المنحل، الوتر أطول من أي من الضلعين، أي [[c \\gt b \\gt 0]]. فقسمة الوتر على الضلع المجاور تعطي نسبة أكبر من 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "النتيجة 1 بالضبط غير ممكنة لزاوية مرجعية حادة عادية في مثلث قائم غير منحل، لأن ذلك يتطلب تساوي الوتر مع الضلع المجاور، فينبسط المثلث إلى خط. والقيمة 1 قيمة حدية، يقترب منها فقط عندما تتضاءل الزاوية نحو [[0^\\circ]]."
                },
                {
                    "kind": "h3",
                    "text": "لماذا يكون القاطع مقلوب جيب التمام"
                },
                {
                    "kind": "p",
                    "text": "تتبع العلاقة مباشرة من الصيغتين. جيب التمام يقسم المجاور على الوتر، والقاطع يقسم الوتر على المجاور:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "وضربهما يلغي كل شيء وينتج 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "وهذه المتطابقة أداة تحقق عملية: احسب جيب التمام من الأضلاع نفسها، وخذ مقلوبه، فيجب أن يطابق نتيجة القاطع تماما. وأي اختلاف يشير إلى كسر معكوس أو ضلع مسمى خطأ."
                },
                {
                    "kind": "h3",
                    "text": "لماذا لا يحمل القاطع وحدات"
                },
                {
                    "kind": "p",
                    "text": "القاطع يقسم طولا على آخر، فتلغى الوحدات. مثلا:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "تختفي الأمتار، تاركة عددا خالصا. والنسبة نفسها تظهر مع 500 سم و400 سم، أو مع أي زوج من الوحدات المتطابقة، ولهذا فإن خلط الوحدات، كوتر بالأمتار مع ضلع مجاور بالسنتيمترات، يكسر الحساب قبل أن يبدأ."
                },
                {
                    "kind": "h3",
                    "text": "القاطع مقابل قاطع التمام"
                },
                {
                    "kind": "p",
                    "text": "القاطع وقاطع التمام نسبتان مقلوبتان تستخدمان الوتر في البسط، لكنهما تستخدمان ضلعين مختلفين في المقام:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "القاطع يقرن الوتر بالضلع المجاور؛ وقاطع التمام يقرن الوتر بالضلع المقابل. وهما غير قابلين للتبادل، واختيار الخاطئ منهما يجيب عن سؤال مختلف عن المثلث."
                }
            ],
            "imgAlt": "ثلاث مراحل: مثلث 3-4-5، جيب التمام cos(A)=4/5=0.8، القاطع sec(A)=5/4=1.25، العلاقة المقلوبة",
            "figcaption": "ثلاث مراحل: سم مثلث 3-4-5، واحسب جيب التمام cos(A) = 4/5، ثم اقلب الكسر لتحصل على sec(A) = 5/4.",
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-formula": {
            "h2": "كيف تعمل صيغة القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يبدأ التعريف بالكلمات، ثم ينتقل إلى الرموز. القاطع هو الوتر مقسوما على الضلع المجاور:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "وبالترميز القياسي يصبح:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر يخص البسط لأن القاطع يسأل: كم طول الضلع المائل بالنسبة لبصمته الأفقية؟ والضلع المجاور يخص المقام لأنه الطول المرجعي الذي تقاس عليه المقارنة."
                },
                {
                    "kind": "h3",
                    "text": "مثال محلول بالكامل: مثلث قائم الزاوية 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مجاور [[b=4\\,\\text{cm}]]، وضلع مقابل [[a=3\\,\\text{cm}]]، ووتر [[c=5\\,\\text{cm}]]، اعمل على الصيغة خطوة بخطوة."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 1: اكتب الصيغة.</strong> [[\\sec(A)=c/b]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 2: عوض بالقيم المعلومة.</strong> [[\\sec(A)=5/4]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 3: اقسم.</strong> [[\\boxed{\\sec(A)=1.25}]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 4: فسر النتيجة.</strong> الوتر أطول من الضلع المجاور بنحو 1.25 مرة، أي أطول بنسبة 25%. سلم طوله 5 سم يمتد على مسافة أفقية 4 م يتصرف هكذا؛ فالهندسة لا تكترث للوحدة، بل للنسبة فقط."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 5: تحقق باستخدام جيب التمام.</strong> [[\\cos(A)=4/5=0.8]]، و[[1/0.8=1.25]]. فحص المقلوب يؤكد نتيجة القاطع، لأن جيب التمام والقاطع معكوسان دقيقان أحدهما للآخر."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 6: تحقق من المثلث.</strong> [[3^2+4^2=5^2]]، أي [[9+16=25]]. أطوال الأضلاع تحقق نظرية فيثاغورس، فتشكل مثلثا قائما حقيقيا وقيمة القاطع جديرة بالثقة."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-howto": {
            "h2": "كيفية استخدام حاسبة نسبة القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "الحاسبة أعلاه تأخذ مدخلين، الوتر [[c]] والضلع المجاور [[b]]، وتعيد [[\\sec(A)]]. اتبع هذه الخطوات بالترتيب."
                }
            ],
            "steps": [
                "<strong>حدد الزاوية المرجعية [[A]].</strong> كل تسمية ضلع في النسبة معرفة بالنسبة لهذه الزاوية، فاخترها قبل لمس أطوال الأضلاع.",
                "<strong>حدد الوتر [[c]].</strong> إنه مقابل الزاوية القائمة وأطول أضلاع المثلث؛ وفي الرسوم هو الضلع المائل.",
                "<strong>حدد الضلع المجاور [[b]].</strong> إنه يلامس الزاوية [[A]] وليس الوتر؛ وهو أحد الضلعين القائمين المتعامدين.",
                "<strong>احصل على طولي الضلعين أو قسهما.</strong> قس بالأداة نفسها والوحدة نفسها، أو حول أحد القياسين قبل المتابعة.",
                "<strong>أدخل الوتر في حقل الإدخال الأول.</strong> هذا هو بسط الكسر، فأي خطأ هنا يزحزح الإجابة كلها.",
                "<strong>أدخل الضلع المجاور في حقل الإدخال الثاني.</strong> هذا هو المقام؛ ويجب أن يكون الضلع الملاصق للزاوية [[A]]، لا الضلع المقابل لها.",
                "<strong>اختر وحدات قياس متطابقة باستخدام محددات الوحدات المتاحة.</strong> يجب أن يستخدم الحقلان الوحدة نفسها، أو ما يكافئها بعد التحويل، وإلا خرجت النسبة خاطئة.",
                "<strong>تأكد أن القياسين موجبان.</strong> الطول الصفري أو السالب لا معنى له في مثلث، وهو يشير إلى خطأ في إدخال البيانات.",
                "<strong>تحقق أن الوتر أطول من الضلع المجاور.</strong> إن لم يكن كذلك، فإما أن الأضلاع مسماة خطأ وإما أن الأرقام لا يمكن أن تشكل مثلثا قائما.",
                "<strong>انقر Calculate sec(A).</strong> تؤدي الأداة القسمة [[c/b]] وتعرض النسبة.",
                "<strong>اقرأ نسبة القاطع الناتجة.</strong> إنها عدد عشري عديم الوحدات، غالبا بأربع منازل عشرية، جاهز للاستخدام في حسابات لاحقة.",
                "<strong>تأكد أن النتيجة أكبر من 1.</strong> ففي المثلث القائم الصحيح غير المنحل ذي الزاوية المرجعية الحادة، [[\\sec(A) \\gt 1]]؛ وقيمة تساوي 1 أو أقل تعني أن شيئا ما سار خطأ في الخطوات السابقة.",
                "<strong>استخدم Reset عندما تريد مسح المدخلات وبدء حساب آخر.</strong> تعود الحقول والنتيجة إلى حالتها الابتدائية."
            ],
            "closingParagraphs": [
                "لا تحتاج الحاسبة إلى الضلع المقابل ولا إلى مدخل زاوية، لأن نسبة القاطع الأساسية تتحدد تماما بطولين. وهي أيضا لا تستعيد الزوايا ولا الأضلاع الناقصة؛ وفي تلك الحالات توضح الصيغ المعادة الترتيب لاحقا في هذا الدليل المسار اليدوي."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "أمثلة خطوة بخطوة لحساب القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "هذه الأمثلة الأربعة تستخدم مثلثات كلاسيكية تستحق قيم قاطعها الحفظ، لأنها تتكرر باستمرار في حساب المثلثات."
                },
                {
                    "kind": "h3",
                    "text": "المثال 1: مثلث قائم الزاوية 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "المعطى [[b=4\\,\\text{cm}]]، و[[a=3\\,\\text{cm}]]، و[[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر أطول من الضلع المجاور بنسبة 25%. وهذا أشهر مثال على القاطع في الكتب المدرسية، ونتيجة 1.25 دقيقة."
                },
                {
                    "kind": "h3",
                    "text": "المثال 2: مثلث قائم الزاوية 5-12-13"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مجاور [[b=12\\,\\text{m}]]، وضلع مقابل [[a=5\\,\\text{m}]]، ووتر [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر أطول من الضلع المجاور بنحو 8.33% تقريبا. ويظهر هذا المثلث في مسائل البناء لأن 13 قريبة من ميل سقف ضحل."
                },
                {
                    "kind": "h3",
                    "text": "المثال 3: مثلث 45-45-90"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مجاور [[b=1\\,\\text{cm}]]، وضلع مقابل [[a=1\\,\\text{cm}]]، ووتر [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر أطول من أي من الضلعين بنحو 1.4142 مرة تقريبا. وعند 45 درجة يتساوى الضلعان، فيتساوى القاطع مع قاطع التمام هنا، وكلاهما [[\\sqrt{2}]]."
                },
                {
                    "kind": "h3",
                    "text": "المثال 4: مثلث 30-60-90"
                },
                {
                    "kind": "p",
                    "text": "للزاوية المرجعية [[A=30^\\circ]]، استخدم ضلعا مجاورا [[b=\\sqrt{3}\\,\\text{cm}]]، وضلعا مقابلا [[a=1\\,\\text{cm}]]، ووترا [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر أطول من الضلع المجاور بنحو 15.47% تقريبا. لاحظ أن نسبة الوتر 2:1 نفسها تظهر عند 60 درجة مع تبديل الضلعين، حيث يصبح القاطع 2."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-applications": {
            "h2": "أمثلة واقعية لاستخدام نسبة القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يكسب القاطع مكانته حيثما وجب مقارنة طول مائل بإسقاطه الأفقي. وفي كل مثال يكون المثلث القائم نموذجا هندسيا مبسطا للواقع، والافتراضات المذكورة تحافظ على صدق التبسيط."
                },
                {
                    "kind": "h3",
                    "text": "المثال 5: حساب نسبة قاطع سلم"
                },
                {
                    "kind": "p",
                    "text": "سلم طوله 5 م، وقاعدته تبعد 4 م عن جدار عمودي. والزاوية [[A]] تقع بين السلم والأرض المستوية. الوتر هو السلم نفسه، [[c=5\\,\\text{m}]]، والضلع المجاور هو المسافة الأرضية الأفقية، [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "السلم أطول من إسقاطه الأرضي الأفقي بنسبة 25%. وهذه النسبة لا تثبت ما إذا كان السلم موضوعا بأمان؛ فسلامة السلم تعتمد على زاوية العمل والثبات، لا على القاطع وحده."
                },
                {
                    "kind": "h3",
                    "text": "المثال 6: حساب نسبة قاطع عارضة سقف"
                },
                {
                    "kind": "p",
                    "text": "عارضة سقف طولها المائل 6.5 م ومسافتها الأفقية 6 م. العارضة هي الوتر، [[c=6.5\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "العارضة أطول من مسافتها الأفقية بنحو 8.33% تقريبا. ويستخدم عمال الأسقف هذه العلاقة معكوسة طوال الوقت: قس المسافة على المخطط، واضرب في القاطع، واطلب خشب العوارض. والنسبة ليست تصميما كاملا للسقف ولا تقييما إنشائيا."
                },
                {
                    "kind": "h3",
                    "text": "المثال 7: تقييم نسبة قاطع منحدر"
                },
                {
                    "kind": "p",
                    "text": "منحدر مبسط طوله المائل 9.5 م ومسافته الأفقية 9 م. السطح المائل هو الوتر، [[c=9.5\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "الطول المائل للمنحدر أطول من إسقاطه الأفقي بنحو 5.56% تقريبا. والقاطع الضحل يعكس ميلا لطيفا، لكن النسبة وحدها لا تثبت إمكانية الوصول ولا الامتثال لقواعد البناء."
                },
                {
                    "kind": "h3",
                    "text": "المثال 8: قياس مساحي"
                },
                {
                    "kind": "p",
                    "text": "مثلث مساحي مبسط فيه مسافة مستقيمة 50 م وفصل أفقي 40 م. المسافة المستقيمة هي الوتر، [[c=50\\,\\text{m}]]، والفصل الأفقي هو الضلع المجاور، [[b=40\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "المسافة المستقيمة أطول من الفصل الأفقي بنسبة 25%. ويطبق المساحون هذا النوع من الاختزال الأفقي روتينيا؛ وقد يتطلب العمل الميداني الفعلي تصحيحات إضافية وإجراءات قياس تتجاوز النموذج البسيط."
                },
                {
                    "kind": "h3",
                    "text": "المثال 9: سلك شد يدعم عمودا"
                },
                {
                    "kind": "p",
                    "text": "سلك شد طوله 13 م، ومرساته الأرضية تبعد أفقيا 12 م عن العمود. السلك هو الوتر، [[c=13\\,\\text{m}]]، والمسافة الأفقية من العمود إلى المرساة هي الضلع المجاور، [[b=12\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "السلك أطول من إسقاطه الأفقي بنحو 8.33% تقريبا. وهذا يخبرك بكمية الكابل التي تقطعها، لا بمقدار الحمل الذي يحمله؛ فشد السلك ومتانة المرساة والسلامة الإنشائية تحتاج تحليلا منفصلا."
                },
                {
                    "kind": "h3",
                    "text": "المثال 10: حساب نسبة قاطع عارضة درج"
                },
                {
                    "kind": "p",
                    "text": "عارضة درج مبسطة طولها 5 م وتمتد على مسافة أفقية 4 م. العارضة هي الوتر، [[c=5\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "العارضة القطرية أطول من الامتداد الأفقي بنسبة 25%. ويستخدم النجارون الحساب المعكوس لقطع العوارض من أبعاد المخطط. والنسبة لا تتحقق من أبعاد الدرج ولا من الامتثال لقواعد البناء."
                },
                {
                    "kind": "h3",
                    "text": "المثال 11: فهم الإسقاط الأفقي لذراع رافعة"
                },
                {
                    "kind": "p",
                    "text": "ذراع رافعة مبسطة طولها 10 م وإسقاطها الأفقي 6 م. الذراع هي الوتر، [[c=10\\,\\text{m}]]، والإسقاط الأفقي هو الضلع المجاور، [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "الذراع أطول من إسقاطها الأفقي بنحو 66.67% تقريبا. والقاطع الحاد يعكس زاوية عمل عالية. والنسبة لا تثبت قدرة الرافعة ولا سلامة التشغيل."
                },
                {
                    "kind": "h3",
                    "text": "المثال 12: مقطع طيران مستقيم لطائرة"
                },
                {
                    "kind": "p",
                    "text": "في مقطع طيران مستقيم مبسط، طول المسار 5 كم والإزاحة الأفقية 4 كم. مسار الطيران هو الوتر، [[c=5\\,\\text{km}]]، والإزاحة الأفقية هي الضلع المجاور، [[b=4\\,\\text{km}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "طول المسار أطول من الإزاحة الأفقية بنسبة 25%. وهذا مثال هندسي مثالي، وليس حساب ملاحة جوية كاملا؛ فتخطيط الطيران الفعلي يضيف الرياح وتغيرات الارتفاع ومسارات المجال الجوي."
                },
                {
                    "kind": "h3",
                    "text": "المثال 13: دعامة ميكانيكية قطرية"
                },
                {
                    "kind": "p",
                    "text": "دعامة قطرية طولها 2 م وإسقاطها الأفقي 1.2 م. الدعامة هي الوتر، [[c=2\\,\\text{m}]]، والإسقاط الأفقي هو الضلع المجاور، [[b=1.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "الدعامة أطول من إسقاطها الأفقي بنحو 66.67% تقريبا. والنسبة تصف هندسة التركيب؛ وهي لا تحدد متانة الدعامة ولا ملاءمتها."
                },
                {
                    "kind": "h3",
                    "text": "المثال 14: حساب نسبة قاطع طريق مشي"
                },
                {
                    "kind": "p",
                    "text": "مقطع مشي مستقيم مبسط طول مساره 100 م وإزاحته الأفقية 80 م. المسار هو الوتر، [[c=100\\,\\text{m}]]، والإزاحة الأفقية هي الضلع المجاور، [[b=80\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "المسار المستقيم أطول من إزاحته الأفقية بنسبة 25%. ومسارات المشي الفعلية فيها منحنيات وتدرجات متغيرة، فتعامل مع هذا كمقطع مستقيم واحد، لا كالطريق كله."
                },
                {
                    "kind": "h3",
                    "text": "المثال 15: دعامة مظلة"
                },
                {
                    "kind": "p",
                    "text": "دعامة مظلة طولها 3 م وإسقاطها الأفقي 2.4 م. الدعامة هي الوتر، [[c=3\\,\\text{m}]]، والإسقاط الأفقي هو الضلع المجاور، [[b=2.4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "الدعامة أطول من إسقاطها الأفقي بنسبة 25%. والحساب لا يثبت الملاءمة الإنشائية؛ فمتانة التثبيت وأحمال الرياح تحتاج فحوصها الخاصة."
                },
                {
                    "kind": "h3",
                    "text": "المثال 16: كابل بين نقطتين"
                },
                {
                    "kind": "p",
                    "text": "كابل مستقيم يمتد بطول إجمالي 25 م بين نقطتين بفصل أفقي 24 م. الكابل هو الوتر، [[c=25\\,\\text{m}]]، والفصل الأفقي هو الضلع المجاور، [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "الكابل أطول من الفصل الأفقي بنحو 4.17% تقريبا. والنموذج المبسط يفترض كابلا مستقيما وعلاقة مثلث قائم؛ أما الكابل الحقيقي فيتدلى، مما يضيف طولا يتجاوز نموذج القاطع."
                },
                {
                    "kind": "p",
                    "text": "القاطع نسبة رياضية وليس كمية فيزيائية ذات وحدات. وقيمته العملية تأتي من مقارنة طول مائل بإسقاطه الأفقي، واستعادة الأطوال عندما تكون الزاوية معلومة، والتحقق من هندسة المثلث، واستخدام الصيغ التي تتطلب القاطع تحديدا. وهو لا يشهد أبدا وحده على السلامة الإنشائية أو قدرة التحمل أو إمكانية الوصول أو الامتثال الهندسي."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "الحالة",
                        "c",
                        "b",
                        "الصيغة",
                        "النسبة",
                        "أطول بنسبة",
                        "المعنى"
                    ],
                    "rows": [
                        [
                            "السلم",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "السلم أطول من مسافته الأرضية بربع"
                        ],
                        [
                            "عارضة السقف",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "العارضة أطول قليلا من المسافة الأفقية"
                        ],
                        [
                            "المنحدر",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "ميل لطيف أطول بالكاد من المسافة"
                        ],
                        [
                            "المساحة",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "المسافة المستقيمة تتجاوز الأفقية"
                        ],
                        [
                            "سلك الشد",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "طول السلك للقطع من المسافة الأرضية"
                        ],
                        [
                            "عارضة الدرج",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "العارضة المائلة مقابل الامتداد الأفقي"
                        ],
                        [
                            "ذراع الرافعة",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "ذراع شديدة الانحدار أطول بكثير من إسقاطها"
                        ],
                        [
                            "مقطع الطيران",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "مسار مثالي مقابل الإزاحة الأفقية"
                        ],
                        [
                            "الدعامة القطرية",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "طول الدعامة مقابل إسقاطها الأفقي"
                        ],
                        [
                            "طريق المشي",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "مقطع مستقيم مقابل المسافة الأفقية على الخريطة"
                        ],
                        [
                            "دعامة المظلة",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "طول الدعامة مقابل الامتداد الأفقي"
                        ],
                        [
                            "امتداد الكابل",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "كابل شبه أفقي، بلا طول إضافي يذكر"
                        ]
                    ]
                }
            ],
            "imgAlt": "أربع لوحات: سلم بنسبة 1.25، منحدر 1.0556، مساحة 1.25، ذراع رافعة 1.6667، وكل منها بمثلث قائم موسوم",
            "figcaption": "أربع حسابات عملية: السلم والمنحدر والمساحة وذراع الرافعة، وكل منها بمثلثه وصيغته ونسبته.",
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "figures": []
        },
        "sec-angle": {
            "h2": "فهم العلاقة بين القاطع وحجم الزاوية",
            "blocks": [
                {
                    "kind": "p",
                    "text": "ينمو القاطع كلما كبرت الزاوية المرجعية. والهندسة تفسر السبب: عندما تكون الزاوية [[A]] صغيرة، يكون الضلع المجاور بطول الوتر تقريبا، فتستقر النسبة فوق 1 بقليل. وكلما اتسعت الزاوية، صار الضلع المجاور حصة أصغر من الوتر، وارتفعت النسبة. وعند [[45^\\circ]] يكون القاطع [[\\sqrt{2}]]، أي نحو 1.4142؛ وعند [[60^\\circ]] يكون 2 بالضبط، لأن الوتر ضعف الضلع المجاور؛ وكلما اقتربت الزاوية من [[90^\\circ]]، تضاءل الضلع المجاور نحو الصفر ونما القاطع بلا حد."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "الزاوية [[A]]",
                        "الضلع المجاور [[b]]",
                        "الوتر [[c]]",
                        "نسبة القاطع"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "نحو 1.1547 تقريبا"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "نحو 1.4142 تقريبا"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "نحو 3.8637 تقريبا",
                            "نحو 3.8637 تقريبا"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "النمط رتيب: كل زيادة في الزاوية ترفع القاطع، وتبقى النسبة فوق 1 لكل زاوية حادة. والقياسات في الجدول توضيحية؛ فالنسبة، لا الحجم المطلق للمثلث، هي ما يحدد الزاوية. والقاطع إذن يصف شكل المثلث، لا مقياسه."
            ],
            "imgAlt": "ثلاثة مثلثات بزوايا 30 و45 و60 درجة بقيم قاطع 1.1547 و1.4142 و2؛ يرتفع القاطع كلما كبرت الزاوية",
            "figcaption": "كلما كبرت الزاوية A، صار الضلع المجاور حصة أصغر من الوتر، فيرتفع sec(A).",
            "steps": [],
            "listItems": [],
            "related": [],
            "figures": []
        },
        "sec-hypotenuse": {
            "h2": "كيفية إيجاد الوتر باستخدام القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يمكن إعادة ترتيب صيغة القاطع لإيجاد الوتر عندما يكون الضلع المجاور والزاوية معلومين. ابدأ من [[\\sec(A)=c/b]] واضرب الطرفين في [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر يساوي الضلع المجاور مضروبا في قاطع الزاوية. وبفرض ضلع مجاور [[b=4\\,\\text{m}]] وزاوية [[A=60^\\circ]]، ومعرفة أن [[\\sec(60^\\circ)=2]]:"
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "الوتر ضعف الضلع المجاور عند هذه الزاوية، وهو ما يطابق هندسة 30-60-90: فالضلع المقابل لزاوية 30 درجة نصف الوتر. ويمكن إيجاد الضلع المجاور بالطريقة نفسها بإعادة الترتيب مجددا:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "ومع وتر [[c=10\\,\\text{m}]] وزاوية [[A=60^\\circ]]: [[b=10/2]]، أي [[\\boxed{b=5\\,\\text{m}}]]. وهذه إعادات ترتيب رياضية للصيغة نفسها. والحاسبة في هذه الصفحة تعيد نسبة القاطع من أطوال الأضلاع؛ وهي لا تحسب الأضلاع الناقصة مباشرة."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-recover": {
            "h2": "كيفية إيجاد زاوية من نسبة قاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "نسبة القاطع والزاوية كميتان مختلفتان: إحداهما مقارنة أضلاع عديمة الوحدات، والأخرى تقاس بالدرجات. وإذا كانت نسبة القاطع معلومة، فاستعد جيب التمام بالمقلوب:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "ثم يعيد جيب التمام العكسي الزاوية:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "وبفرض [[\\sec(A)=1.25]]، احسب جيب التمام أولا: [[\\cos(A)=1/1.25=0.8]]. ثم [[A=\\cos^{-1}(0.8)]]، فيكون [[\\boxed{A\\approx36.87^\\circ}]]. وهذا حساب زاوية منفصل، وليس شيئا تؤديه حاسبة نسبة القاطع مباشرة. اضبط الحاسبة العلمية على وضع الدرجات إذا كانت الإجابة متوقعة بالدرجات؛ ففي وضع الراديان يعيد المدخل نفسه نحو 0.6435، وهي الزاوية نفسها بوحدات مختلفة."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-mistakes": {
            "h2": "أخطاء شائعة عند حساب القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "معظم أخطاء القاطع تأتي من كسر معكوس، أو ضلع مسمى خطأ، أو زلة وحدات. مر على هذه القائمة قبل أن تثق بنتيجة."
                }
            ],
            "steps": [
                "<strong>عكس الصيغة وحساب [[b/c]] بدلا من [[c/b]].</strong> هذا أشيع خطأ على الإطلاق، وهو يعيد جيب التمام بدلا من القاطع. ومع [[c=5]] و[[b=4]]، يعطي الترتيب الخاطئ 0.8؛ والترتيب الصحيح يعطي 1.25.",
                "<strong>الخلط بين القاطع وجيب التمام.</strong> جيب التمام هو المجاور مقسوما على الوتر؛ والقاطع هو العكس تماما. وإذا خرجت الإجابة أقل من 1، فهي على الأرجح جيب التمام لا القاطع.",
                "<strong>الخلط بين القاطع وقاطع التمام.</strong> كلاهما يستخدم الوتر في البسط، فيبدوان متشابهين. القاطع يقسم على الضلع المجاور [[b]]؛ وقاطع التمام يقسم على الضلع المقابل [[a]]. تحقق من أي ضلع تعطيه المسألة فعلا.",
                "<strong>استخدام الضلع المقابل بدلا من الضلع المجاور.</strong> قسمة [[c/a]] تحسب قاطع التمام. ومع [[c=5]] و[[a=3]]، تعطي 1.6667، وهو قاطع تمام صحيح لكنه قاطع خاطئ.",
                "<strong>استخدام ضلع ليس الوتر في البسط.</strong> القاطع يضع الوتر دائما في الأعلى. ضلع على ضلع هو الظل أو ظل التمام؛ وضلع على الوتر هو الجيب أو جيب التمام.",
                "<strong>الخلط بين الضلعين المجاور والمقابل.</strong> تتبدل التسميتان عندما تتغير الزاوية المرجعية من [[A]] إلى [[B]]. تأكد دائما من الزاوية التي تسميها المسألة قبل إسناد [[b]].",
                "<strong>افتراض أن القاطع زاوية تقاس بالدرجات.</strong> نتيجة 1.25 نسبة، وليست [[1.25^\\circ]]. ومعاملتها كدرجات يغذي هراء في أي حساب لاحق.",
                "<strong>الإبلاغ عن النسبة بالأمتار أو السنتيمترات.</strong> الوحدات تلغى في القسمة، فـ«1.25 م» خطأ. اكتب العدد مجردا واحتفظ بالوحدات في قياسات المدخلات حيث مكانها.",
                "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> لا يمكن أن يكون للمثلث ضلع صفري أو سالب، فهذه المدخلات تشير إلى خطأ في إدخال البيانات أو قياس مفقود، لا إلى حالة حدية صالحة.",
                "<strong>إدخال ضلع مجاور أطول من الوتر.</strong> الوتر دائما أطول ضلع. وإذا كان [[b \\gt c]]، فالمدخلات متبادلة أو المثلث مستحيل.",
                "<strong>خلط وحدات القياس.</strong> وتر 5 م مع ضلع مجاور 40 سم يعطي 0.125، وهو عدد بلا معنى. حول إلى وحدة واحدة أولا: 5 م و4 م يعطيان 1.25 الصحيحة.",
                "<strong>التقريب المبكر جدا.</strong> تقريب قسمة وسيطة إلى منزلتين عشريتين ثم مواصلة الحساب يراكم الخطأ. احتفظ بالدقة الكاملة في كل خطوة وقرب الإجابة النهائية فقط.",
                "<strong>افتراض أن القاطع يجب أن يساوي 1 في المثلث القائم.</strong> لا يوجد مثلث قائم قاطعه 1 بالضبط. توقع قيمة فوق 1، وتعامل مع 1 بالضبط كإشارة إلى أن المدخلات معكوسة أو المثلث منحل.",
                "<strong>الخلط بين مقلوب جيب التمام وجيب التمام العكسي.</strong> [[1/\\cos(A)]] هو القاطع، نسبة؛ و[[\\cos^{-1}]] هو جيب التمام العكسي، الذي يعيد زاوية. تشابه الاسمين يسبب أخطاء حقيقية، فاقرأ الترميز بعناية.",
                "<strong>افتراض أن القاطع وحده يحدد الأبعاد المطلقة للمثلث.</strong> القاطع يصف الشكل لا الحجم: عدد لا نهائي من المثلثات يشترك في قاطع 1.25، من وتر 5 سم إلى وتر 5 كم. النسبة تثبت التناسب؛ والأطوال الفعلية تحتاج قياس ضلع واحد على الأقل."
            ],
            "closingParagraphs": [
                "<strong>الخطأ مقابل الصواب: مقارنة محلولة</strong> بفرض وتر [[c=5]] وضلع مجاور [[b=4]]:",
                "<strong>خطأ:</strong> [[4/5=0.8]]. هذا جيب التمام لا القاطع. البسط والمقام معكوسان.",
                "<strong>صواب:</strong> [[\\sec(A)=5/4=1.25]].",
                "<strong>تحقق:</strong> [[\\cos(A)=0.8]]، و[[1/0.8=1.25]]. فحص المقلوب يؤكد النتيجة، والإجابة فوق 1، كما يجب أن يكون كل قاطع صحيح."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "كيفية التحقق من صحة نتيجة القاطع",
            "blocks": [
                {
                    "kind": "p",
                    "text": "المثلث القائم الصحيح غير المنحل يتطلب أضلاعا موجبة مع وتر أطول قطعا، [[0 \\lt b \\lt c]]، فيجب أن تكون نتيجة القاطع أكبر من 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "ويجب أن يستخدم القياسان وحدات متوافقة. والنتيجة التي تساوي 1 أو أقل تشير عادة إلى مدخلات معكوسة، أو تحديد أضلاع خاطئ، أو قياسات غير متوافقة، أو أبعاد مثلث غير صالحة."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 1: تحقق من مقلوب جيب التمام"
                },
                {
                    "kind": "p",
                    "text": "تحقق من [[\\cos(A)=b/c]]، ثم تأكد من [[\\sec(A)=1/\\cos(A)]]. ومع [[b=4]] و[[c=5]]: [[\\cos(A)=4/5=0.8]]، أي [[\\sec(A)=1/0.8=1.25]]. وأي اختلاف بين المسارين يشير إلى كسر معكوس أو ضلع مسمى خطأ."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 2: تحقق من نظرية فيثاغورس"
                },
                {
                    "kind": "p",
                    "text": "إذا كان الضلع المقابل معلوما أو مطلوبا، فاحسب [[a=\\sqrt{c^2-b^2}]]. ومع [[b=4]] و[[c=5]]: [[a=\\sqrt{25-16}=3]]، و[[3^2+4^2=5^2]]. وهذا يؤكد أبعاد مثلث 3-4-5 القائم. والضلع المقابل هنا قيمة تحقق، وليس جزءا من صيغة القاطع الأساسية."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 3: تحقق باستخدام جيب التمام العكسي"
                },
                {
                    "kind": "p",
                    "text": "لنسبة قاطع 1.25: [[A=\\cos^{-1}(1/1.25)]]، أي [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. ولأن القاطع فوق 1 باعتدال، يجب أن تقع الزاوية أدنى من [[45^\\circ]] بكثير؛ وإن لم يحدث ذلك فتسميات الأضلاع على الأرجح متبادلة. وقد تنشأ فروق صغيرة من التقريب."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-vs": {
            "h2": "القاطع مقابل جيب التمام والجيب وقاطع التمام",
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
                        "ما تقارنه"
                    ],
                    "rows": [
                        [
                            "الجيب",
                            "sin(A) = a/c",
                            "الضلع المقابل إلى الوتر"
                        ],
                        [
                            "جيب التمام",
                            "cos(A) = b/c",
                            "الضلع المجاور إلى الوتر"
                        ],
                        [
                            "الظل",
                            "tan(A) = a/b",
                            "الضلع المقابل إلى الضلع المجاور"
                        ],
                        [
                            "القاطع",
                            "sec(A) = c/b",
                            "الوتر إلى الضلع المجاور"
                        ],
                        [
                            "قاطع التمام",
                            "csc(A) = c/a",
                            "الوتر إلى الضلع المقابل"
                        ],
                        [
                            "ظل التمام",
                            "cot(A) = b/a",
                            "الضلع المجاور إلى الضلع المقابل"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "القاطع وجيب التمام هما الزوج المقلوب: [[\\sec(A)=1/\\cos(A)]]. فإذا كان [[\\cos(A)=0.8]]، فإن [[\\sec(A)=1.25]]. اختر القاطع عندما تطلب صيغة الوتر مقسوما على المجاور، أو عندما تقارن طولا مائلا بإسقاطه الأفقي، أو عندما تبدأ العلاقة المعلومة من أطول ضلع؛ واختر جيب التمام للمجاور على الوتر، والجيب للمقابل مقابل الوتر، وقاطع التمام عندما يقارن الوتر بالضلع المقابل.",
                "للنسب المجاورة، انظر <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الجيب</a>، و<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة جيب التمام</a>، و<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الظل</a>، و<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة قاطع التمام</a>، و<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة ظل التمام</a>."
            ],
            "steps": [],
            "listItems": [],
            "related": [],
            "figures": []
        },
        "sec-related": {
            "h2": "استكشف حاسبات المثلثات ذات الصلة",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "حاسبة نسبة الجيب"
                },
                {
                    "name": "حاسبة نسبة جيب التمام"
                },
                {
                    "name": "حاسبة نسبة الظل"
                },
                {
                    "name": "حاسبة نسبة قاطع التمام"
                },
                {
                    "name": "حاسبة نسبة ظل التمام"
                },
                {
                    "name": "حاسبة زوايا المثلث القائم"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "استخدم نسبة القاطع بثقة",
            "blocks": [
                {
                    "kind": "p",
                    "text": "القاطع هو الصورة المعكوسة لجيب التمام: اقسم الوتر على الضلع المجاور فتكون قد وصفت كم يزيد الطول المائل عن بصمته الأفقية. والصيغة [[\\sec(A)=c/b]] تحتاج قياسين فقط، والإجابة دائما عدد عديم الوحدات أكبر من 1، وهي تنمو كلما كبرت الزاوية المرجعية. وعندما يلزم ضلع ناقص، [[c=b\\sec(A)]] تستعيد الوتر؛ وعندما تلزم الزاوية، [[A=\\cos^{-1}(1/\\sec(A))]] تستعيدها. سلما كان أم عارضة أم منحدرا أم مثلث 3-4-5 مدرسيا، فالطريقة لا تتغير أبدا: حدد الوتر، وحدد الضلع المجاور، واقسم، وتحقق بمقلوب جيب التمام."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        }
    },
    "faqs": [
        {
            "question": "ما هي صيغة نسبة القاطع للمثلث القائم الزاوية؟",
            "answer": "sec(A) = c / b: اقسم الوتر c على الضلع المجاور للزاوية A. ومع وتر 5 سم وضلع مجاور 4 سم، تكون النتيجة 5/4 = 1.25. وهذا العدد العشري هو الإجابة الكاملة، نسبة عديمة الوحدات، لا زاوية."
        },
        {
            "question": "كيف يرتبط القاطع بجيب التمام؟",
            "answer": "القاطع هو مقلوب جيب التمام: sec(A) = 1 / cos(A). فإذا كان cos(A) = 4/5 = 0.8، فإن sec(A) = 1/0.8 = 1.25. والنسبتان تصفان الزاوية نفسها من منظورين معكوسين، وفحص المقلوب هو أسرع طريقة للتحقق من حساب القاطع."
        },
        {
            "question": "لماذا يكون القاطع أكبر من 1 في المثلث القائم الزاوية؟",
            "answer": "في المثلث القائم الصحيح غير المنحل يكون الوتر أطول قطعا من أي ضلع قائم، أي c > b > 0. وقسمة طول أكبر على طول أصغر تعطي دائما نسبة فوق 1: sec(A) = c/b > 1 لكل زاوية مرجعية حادة."
        },
        {
            "question": "هل يمكن أن يساوي القاطع 1؟",
            "answer": "لا، بالنسبة لزاوية حادة عادية في مثلث قائم حقيقي. فقاطع يساوي 1 بالضبط يتطلب تساوي الوتر مع الضلع المجاور، فينهار المثلث إلى خط مستقيم. والقيمة 1 قيمة حدية يقترب منها فقط عندما تتضاءل الزاوية A نحو 0 درجة، وليست قيمة ينتجها مثلث حقيقي أبدا."
        },
        {
            "question": "ماذا تعني قيمة قاطع مقدارها 1.25؟",
            "answer": "الوتر أطول من الضلع المجاور بنحو 1.25 مرة، أي أطول بنسبة 25 بالمئة. وهذا لا يعني أن الزاوية 1.25 درجة، ولا يعني أن المثلث يقيس 1.25 وحدة. القاطع مقارنة عديمة الوحدات بين طولين."
        },
        {
            "question": "هل للقاطع وحدات قياس؟",
            "answer": "لا. فالمدخلان طولان يقاسان بالوحدة نفسها، فتلغى الوحدات: 5 م / 4 م = 1.25، تماما كما أن 500 سم / 400 سم = 1.25. أبلغ عن القاطع عددا مجردا، ولا ترفق به أبدا درجات ولا أمتارا ولا أقداما."
        },
        {
            "question": "كيف تحسب القاطع من أطوال الأضلاع؟",
            "answer": "قس الوتر c والضلع المجاور b بالوحدة نفسها، وتأكد أن كليهما موجب وأن c أطول من b، ثم اقسم: sec(A) = c / b. وفي هذه الصفحة، أدخل الوتر في الحقل الأول والضلع المجاور في الثاني، واختر وحدات متوافقة، وانقر Calculate sec(A)."
        },
        {
            "question": "كيف أجد الوتر باستخدام القاطع؟",
            "answer": "أعد ترتيب الصيغة إلى c = b * sec(A). فإذا كان الضلع المجاور 4 م والزاوية A قياسها 60 درجة، فإن sec(60 deg) = 2، أي c = 4 * 2 = 8 م. وهذه إعادة ترتيب يدوية؛ فحاسبة هذه الصفحة تعيد النسبة من أطوال الأضلاع، لا الأضلاع الناقصة."
        },
        {
            "question": "كيف أجد زاوية من نسبة قاطع؟",
            "answer": "خذ المقلوب لتحصل على نسبة جيب التمام، ثم طبق جيب التمام العكسي: A = cos^-1(1 / sec(A)). فمع sec(A) = 1.25، تكون نسبة جيب التمام 0.8، أي A = cos^-1(0.8)، أي نحو 36.87 درجة. اضبط حاسبتك العلمية على وضع الدرجات أولا. وحاسبة هذه الصفحة تعيد النسبة، لا الزاوية."
        },
        {
            "question": "ما الفرق بين القاطع وقاطع التمام؟",
            "answer": "القاطع يقسم الوتر على الضلع المجاور (c/b)؛ وقاطع التمام يقسم الوتر على الضلع المقابل (c/a). وكلتاهما نسبتان مقلوبتان يدخل الوتر فيهما، لكنهما تستخدمان ضلعين مختلفين، فيجيبان عن سؤالين مختلفين ولا يتبادلان أبدا."
        },
        {
            "question": "هل يمكنني حساب القاطع دون معرفة الضلع المقابل؟",
            "answer": "نعم. فصيغة القاطع الأساسية تستخدم فقط الوتر والضلع المجاور، فلا يدخل الضلع المقابل الحساب أبدا. ويصبح الضلع المقابل مفيدا فقط عندما تستخدم نظرية فيثاغورس للتحقق من المثلث، أو عندما يدخل الجيب أو الظل أو قاطع التمام في العمل."
        },
        {
            "question": "كيف يستخدم القاطع في القياسات العملية؟",
            "answer": "القاطع يقارن طولا مائلا بإسقاطه الأفقي: سلم مقابل مسافته الأرضية، أو عارضة سقف مقابل مسافتها الأفقية، أو كابل مقابل الفصل الأفقي بين طرفيه. والنسبة تخبرك بكم يزيد المسار المائل عن إسقاطه، وهو ما يفيد في تقدير أطوال المواد من المخططات الأفقية."
        }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة"
},
"bg": {
    "tocHeading": "В това ръководство",
    "tocItems": {
        "sec-intro": "Какво е калкулатор за секансово съотношение?",
        "sec-triangle": "Разбиране на прилежащата страна и хипотенузата",
        "sec-whatis": "Разбиране на секансовото съотношение",
        "sec-formula": "Как работи формулата за секанс",
        "sec-howto": "Как да използвате калкулатора за секансово съотношение",
        "sec-examples": "Примери стъпка по стъпка за изчисляване на секанс",
        "sec-applications": "Примери от реалния живот за използване на секансовото съотношение",
        "sec-angle": "Разбиране на връзката между секанс и големината на ъгъла",
        "sec-hypotenuse": "Как да намерите хипотенузата чрез секанс",
        "sec-recover": "Как да намерите ъгъл от секансово съотношение",
        "sec-mistakes": "Чести грешки при изчисляване на секанс",
        "sec-verify": "Как да проверите дали резултатът ви за секанс е валиден",
        "sec-vs": "Секанс срещу косинус, синус и косеканс",
        "sec-related": "Разгледайте свързаните тригонометрични калкулатори",
        "sec-faq": "Често задавани въпроси"
    },
    "sections": {
        "sec-intro": {
            "h2": "Какво е калкулатор за секансово съотношение?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Калкулаторът за секансово съотношение отговаря на един въпрос: за остър ъгъл в правоъгълен триъгълник, как най-дългата страна се сравнява със страната до ъгъла? Въведете хипотенузата и прилежащата страна и инструментът дели хипотенузата на прилежащата страна, връщайки [[\\sec(A)=c/b]]. При хипотенуза 5 см и прилежаща страна 4 см изчислението е [[5/4=1.25]]: хипотенузата е 1.25 пъти по-дълга от прилежащата страна, което е друг начин да се каже, че е с 25% по-дълга. Това десетично число е пълният отговор. То е безразмерно съотношение, тъй като сантиметрите се съкращават при делението, и не е ъгъл в градуси, затова никога не четете 1.25 като [[1.25^\\circ]]. Срещулежащата страна никога не участва в това изчисление; хипотенузата и прилежащата страна са достатъчни. Секансът е също реципрочна стойност на косинуса, затова много учебници го представят като обърнатата форма на [[\\cos(A)]]."
                }
            ]
        },
        "sec-triangle": {
            "h2": "Разбиране на прилежащата страна и хипотенузата",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "Какво е правоъгълен триъгълник?"
                },
                {
                    "kind": "p",
                    "text": "Правоъгълният триъгълник има един ъгъл от точно [[90^\\circ]], ъгълът между две перпендикулярни прави, като стена, срещаща равен под. Хипотенузата лежи срещу този прав ъгъл и винаги е най-дългата страна, защото трябва да премости пълния диагонал през ъгъла. Другите два ъгъла си поделят оставащите 90 градуса, така че и двата са остри. Двата катета се срещат при правия ъгъл, перпендикулярни един на друг, и именно тяхната връзка с хипотенузата прави възможна тригонометрията на правоъгълния триъгълник."
                },
                {
                    "kind": "h3",
                    "text": "Какво е прилежащата страна?"
                },
                {
                    "kind": "p",
                    "text": "Прилежащата страна [[b]] е катетът, който докосва референтния ъгъл [[A]], без да е хипотенузата. В практическите задачи тя често играе ролята на хоризонталното разстояние: разстоянието по земята от основата на стълба до стена, хоризонталната проекция на покривна греда или хоризонталното разстояние между две геодезически точки. Тя отива в знаменателя на формулата за секанс. Кой катет се брои за прилежащ зависи от избрания референтен ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[B]] разменя означенията прилежащ и срещулежащ."
                },
                {
                    "kind": "h3",
                    "text": "Какво е хипотенузата?"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата [[c]] е страната срещу правия ъгъл: във всяка диаграма тя е срещу малкия квадрат, отбелязващ ъгъла от [[90^\\circ]], и е строго по-дълга от всеки катет. В практическите задачи тя често играе ролята на наклонена дължина: стълба, рампа, покривна греда, кабел, диагонална разпора или праволинеен път. Тя отива в числителя на формулата за секанс, затова всяка секансова стойност излиза по-голяма от 1."
                },
                {
                    "kind": "h3",
                    "text": "Какво е срещулежащата страна?"
                },
                {
                    "kind": "p",
                    "text": "Срещулежащата страна [[a]] лежи точно срещу ъгъл [[A]] и никога не докосва върха му. Тя не играе никаква роля в основното изчисление на секанса, затова калкулаторът никога не я иска. Тя става съществена, когато Питагоровата теорема се използва, за да се провери, че двете известни дължини образуват истински правоъгълен триъгълник, и излиза на преден план за синус, тангенс и косеканс, където срещулежащата страна е една от двете работещи страни."
                }
            ],
            "imgAlt": "Правоъгълен триъгълник с ъгъл A долу вляво, златиста хипотенуза c, синя прилежаща страна b, sec(A)=c/b",
            "figcaption": "Ъгъл A е долу вляво; секансът използва златистата хипотенуза c и синята прилежаща страна b, а не срещулежащата страна a."
        },
        "sec-whatis": {
            "h2": "Разбиране на секансовото съотношение",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Секансът сравнява пълната наклонена страна с катета до референтния ъгъл:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Тук [[\\sec(A)]] е секансът на ъгъл [[A]], [[c]] е хипотенузата, а [[b]] е прилежащата страна: колко пъти прилежащата страна се побира в хипотенузата."
                },
                {
                    "kind": "h3",
                    "text": "Секансът като реципрочна стойност на косинуса"
                },
                {
                    "kind": "p",
                    "text": "Косинусът дели прилежащата страна на хипотенузата, [[\\cos(A)=b/c]]. Взимането на реципрочната стойност обръща тази дроб, [[1/\\cos(A)=c/b]], което е точно формулата за секанс:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "При [[\\cos(A)=4/5=0.8]] реципрочната стойност е [[\\sec(A)=1/0.8=1.25]]: същият триъгълник, описан от противоположната посока. Това разграничение е важно, защото обратният косинус, записан [[\\cos^{-1}]], е различна идея: той възстановява ъгъл от косинусова стойност, докато [[1/\\cos(A)]] е реципрочният косинус, съотношение, а не ъгъл."
                },
                {
                    "kind": "h3",
                    "text": "Какво означава секансова стойност 1.25?"
                },
                {
                    "kind": "p",
                    "text": "Секанс 1.25 означава, че хипотенузата е 1.25 пъти по-дълга от прилежащата страна. Процентната разлика е [[(1.25-1)\\times100=25]], така че хипотенузата е с 25% по-дълга от прилежащата страна. Това не означава, че ъгълът е [[1.25^\\circ]], и не означава, че триъгълникът измерва 1.25 единици от каквото и да било. Секансът е сравнение, а не измерване."
                },
                {
                    "kind": "h3",
                    "text": "Защо секансът е по-голям от 1"
                },
                {
                    "kind": "p",
                    "text": "Във валиден, неизроден правоъгълен триъгълник хипотенузата е по-дълга от всеки катет, така че [[c \\gt b \\gt 0]]. Делението на хипотенузата на прилежащата страна следователно дава съотношение, по-голямо от 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Резултат точно 1 не е възможен за обикновен остър референтен ъгъл в неизроден правоъгълен триъгълник, защото това би изисквало хипотенузата да е равна на прилежащата страна, сплесквайки триъгълника в права линия. Стойността 1 е гранична стойност, приближавана само когато ъгълът се свива към [[0^\\circ]]."
                },
                {
                    "kind": "h3",
                    "text": "Защо секансът е реципрочна стойност на косинуса"
                },
                {
                    "kind": "p",
                    "text": "Връзката следва директно от двете формули. Косинусът дели прилежащата на хипотенузата, секансът дели хипотенузата на прилежащата:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "Умножаването им съкращава всичко и дава 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "Това тъждество е практичен инструмент за проверка: изчислете косинуса от същите страни, вземете реципрочната му стойност и тя трябва да съвпадне точно със секансовия резултат. Несъвпадение сочи обърната дроб или грешно означена страна."
                },
                {
                    "kind": "h3",
                    "text": "Защо секансът няма мерни единици"
                },
                {
                    "kind": "p",
                    "text": "Секансът дели една дължина на друга, така че мерните единици се съкращават. Например:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "Метрите изчезват, оставяйки чисто число. Същото съотношение се появява при 500 см и 400 см или при всяка двойка съвпадащи единици, затова смесването на единици, например хипотенуза в метри с прилежаща страна в сантиметри, проваля изчислението още преди да е започнало."
                },
                {
                    "kind": "h3",
                    "text": "Секанс срещу косеканс"
                },
                {
                    "kind": "p",
                    "text": "Секансът и косекансът са реципрочни съотношения, които използват хипотенузата в числителя, но използват различни катети в знаменателя:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "Секансът съчетава хипотенузата с прилежащата страна; косекансът съчетава хипотенузата със срещулежащата страна. Те не са взаимозаменяеми и изборът на грешното отговаря на различен въпрос за триъгълника."
                }
            ],
            "imgAlt": "Три етапа: триъгълник 3-4-5, косинус cos(A)=4/5=0.8, секанс sec(A)=5/4=1.25, реципрочната връзка",
            "figcaption": "Три етапа: означете триъгълника 3-4-5, изчислете косинуса cos(A) = 4/5, после обърнете дробта, за да получите sec(A) = 5/4."
        },
        "sec-formula": {
            "h2": "Как работи формулата за секанс",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Определението започва с думи, после преминава към символи. Секансът е хипотенузата, делена на прилежащата страна:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "В стандартното означение това става:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата принадлежи в числителя, защото секансът пита колко дълга е наклонената страна спрямо хоризонталния си отпечатък, а прилежащата страна принадлежи в знаменателя, защото е референтната дължина, с която се сравнява."
                },
                {
                    "kind": "h3",
                    "text": "Напълно разработен пример: правоъгълен триъгълник 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "Дадена е прилежаща страна [[b=4\\,\\text{cm}]], срещулежаща страна [[a=3\\,\\text{cm}]] и хипотенуза [[c=5\\,\\text{cm}]]; работете по формулата стъпка по стъпка."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 1: Запишете формулата.</strong> [[\\sec(A)=c/b]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 2: Заместете известните стойности.</strong> [[\\sec(A)=5/4]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 3: Разделете.</strong> [[\\boxed{\\sec(A)=1.25}]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 4: Изтълкувайте резултата.</strong> Хипотенузата е 1.25 пъти прилежащата страна, което я прави с 25% по-дълга. Стълба от 5 см, премостваща 4 м хоризонтално разстояние, се държи по този начин; геометрията не се интересува от мерната единица, а само от пропорцията."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 5: Проверете с косинус.</strong> [[\\cos(A)=4/5=0.8]], и [[1/0.8=1.25]]. Проверката с реципрочната стойност потвърждава секансовия резултат, защото косинусът и секансът са точни обратни един на друг."
                },
                {
                    "kind": "p",
                    "text": "<strong>Стъпка 6: Проверете триъгълника.</strong> [[3^2+4^2=5^2]], което е [[9+16=25]]. Дължините на страните удовлетворяват Питагоровата теорема, така че образуват истински правоъгълен триъгълник и секансовата стойност е надеждна."
                }
            ]
        },
        "sec-howto": {
            "h2": "Как да използвате калкулатора за секансово съотношение",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Калкулаторът по-горе приема два входа, хипотенузата [[c]] и прилежащата страна [[b]], и връща [[\\sec(A)]]. Следвайте тези стъпки по ред."
                }
            ],
            "steps": [
                "<strong>Определете референтния ъгъл [[A]].</strong> Всеки етикет на страна в съотношението е дефиниран спрямо този ъгъл, затова го изберете, преди да докоснете дължините на страните.",
                "<strong>Намерете хипотенузата [[c]].</strong> Тя е срещу правия ъгъл и е най-дългата страна на триъгълника; в диаграмите това е наклонената страна.",
                "<strong>Намерете прилежащата страна [[b]].</strong> Тя докосва ъгъл [[A]] и не е хипотенузата; тя е един от двата перпендикулярни катета.",
                "<strong>Получете или измерете и двете дължини на страните.</strong> Измервайте с един и същ инструмент и в една и съща мерна единица или преобразувайте едното измерване, преди да продължите.",
                "<strong>Въведете хипотенузата в първото поле за въвеждане.</strong> Това е числителят на дробта, така че грешка тук измества целия отговор.",
                "<strong>Въведете прилежащата страна във второто поле за въвеждане.</strong> Това е знаменателят; тя трябва да е страната до ъгъл [[A]], а не страната срещу него.",
                "<strong>Изберете съвместими мерни единици чрез наличните избирачи на единици.</strong> И двете полета трябва да използват една и съща мерна единица или преобразуван еквивалент, иначе съотношението ще е грешно.",
                "<strong>Потвърдете, че и двете измервания са положителни.</strong> Нулева или отрицателна дължина няма смисъл в триъгълник и сигнализира грешка при въвеждане на данни.",
                "<strong>Проверете, че хипотенузата е по-дълга от прилежащата страна.</strong> Ако не е, или страните са грешно означени, или числата не могат да образуват правоъгълен триъгълник.",
                "<strong>Щракнете Calculate sec(A).</strong> Инструментът извършва делението [[c/b]] и показва съотношението.",
                "<strong>Прочетете полученото секансово съотношение.</strong> То е безразмерно десетично число, обикновено с четири знака след десетичната запетая, готово за използване в по-нататъшни изчисления.",
                "<strong>Потвърдете, че резултатът е по-голям от 1.</strong> За валиден, неизроден правоъгълен триъгълник с остър референтен ъгъл, [[\\sec(A) \\gt 1]]; стойност на или под 1 означава, че нещо се е объркало по-рано.",
                "<strong>Използвайте Reset, когато искате да изчистите въведеното и да започнете друго изчисление.</strong> Полетата и резултатът се връщат в началното си състояние."
            ],
            "closingParagraphs": [
                "Калкулаторът не се нуждае от срещулежащата страна или от ъгъл като вход, защото основното секансово съотношение се определя изцяло от две дължини. Той също не възстановява ъгли или липсващи страни; за тях пренаредените формули по-нататък в това ръководство показват ръчния път."
            ]
        },
        "sec-examples": {
            "h2": "Примери стъпка по стъпка за изчисляване на секанс",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Тези четири примера използват класически триъгълници, чиито секансови стойности си струва да се запомнят, защото се появяват постоянно в тригонометрията."
                },
                {
                    "kind": "h3",
                    "text": "Пример 1: Правоъгълен триъгълник 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "Дадено [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] и [[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е с 25% по-дълга от прилежащата страна. Това е най-честият секансов пример в учебниците, а резултатът 1.25 е точен."
                },
                {
                    "kind": "h3",
                    "text": "Пример 2: Правоъгълен триъгълник 5-12-13"
                },
                {
                    "kind": "p",
                    "text": "Дадена е прилежаща страна [[b=12\\,\\text{m}]], срещулежаща страна [[a=5\\,\\text{m}]] и хипотенуза [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е приблизително с 8.33% по-дълга от прилежащата страна. Този триъгълник се появява в строителни задачи, защото 13 е близо до полегат наклон на покрив."
                },
                {
                    "kind": "h3",
                    "text": "Пример 3: Триъгълник 45-45-90"
                },
                {
                    "kind": "p",
                    "text": "Дадена е прилежаща страна [[b=1\\,\\text{cm}]], срещулежаща страна [[a=1\\,\\text{cm}]] и хипотенуза [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е приблизително 1.4142 пъти всеки катет. При 45 градуса двата катета са равни, така че секансът е равен на косеканса тук, и двата [[\\sqrt{2}]]."
                },
                {
                    "kind": "h3",
                    "text": "Пример 4: Триъгълник 30-60-90"
                },
                {
                    "kind": "p",
                    "text": "За референтен ъгъл [[A=30^\\circ]] използвайте прилежаща страна [[b=\\sqrt{3}\\,\\text{cm}]], срещулежаща страна [[a=1\\,\\text{cm}]] и хипотенуза [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е приблизително с 15.47% по-дълга от прилежащата страна. Забележете, че същото съотношение на хипотенузата 2:1 се появява при 60 градуса с разменени страни, където секансът става 2."
                }
            ]
        },
        "sec-applications": {
            "h2": "Примери от реалния живот за използване на секансовото съотношение",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Секансът си изкарва хляба навсякъде, където наклонена дължина трябва да се сравни с хоризонталната си проекция. Във всеки пример правоъгълният триъгълник е опростен геометричен модел на реалната ситуация, а посочените предположения пазят опростяването честно."
                },
                {
                    "kind": "h3",
                    "text": "Пример 5: Изчисляване на секансовото съотношение на стълба"
                },
                {
                    "kind": "p",
                    "text": "Стълба е дълга 5 м, а основата ѝ е на 4 м от вертикална стена. Ъгълът [[A]] е между стълбата и равното земно ниво. Хипотенузата е самата стълба, [[c=5\\,\\text{m}]], а прилежащата страна е хоризонталното разстояние по земята, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Стълбата е с 25% по-дълга от хоризонталната си проекция по земята. Това съотношение не установява дали стълбата е поставена безопасно; безопасността на стълбата зависи от работния ъгъл и опората, а не само от секанса."
                },
                {
                    "kind": "h3",
                    "text": "Пример 6: Изчисляване на секансовото съотношение на покривна греда"
                },
                {
                    "kind": "p",
                    "text": "Покривна греда има наклонена дължина 6.5 м и хоризонтално разстояние 6 м. Гредата е хипотенузата, [[c=6.5\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Гредата е приблизително с 8.33% по-дълга от хоризонталното си разстояние. Покривачите използват тази връзка непрекъснато в обратен ред: измерват разстоянието по плана, умножават по секанса, поръчват материала за гредите. Съотношението не е пълна конструктивна или структурна оценка на покрива."
                },
                {
                    "kind": "h3",
                    "text": "Пример 7: Оценяване на секансовото съотношение на рампа"
                },
                {
                    "kind": "p",
                    "text": "Опростена рампа има наклонена дължина 9.5 м и хоризонтално разстояние 9 м. Наклонената повърхност е хипотенузата, [[c=9.5\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "Наклонената дължина на рампата е приблизително с 5.56% по-дълга от хоризонталната ѝ проекция. Полегатият секанс отразява нежен наклон, но самото съотношение не установява достъпност или съответствие със строителните норми."
                },
                {
                    "kind": "h3",
                    "text": "Пример 8: Геодезическо измерване"
                },
                {
                    "kind": "p",
                    "text": "Опростен геодезически триъгълник има праволинейно разстояние 50 м и хоризонтално разделяне 40 м. Праволинейното разстояние е хипотенузата, [[c=50\\,\\text{m}]], а хоризонталното разделяне е прилежащата страна, [[b=40\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Праволинейното разстояние е с 25% по-дълго от хоризонталното разделяне. Геодезистите прилагат това хоризонтално привеждане рутинно; реалната полева работа може да изисква допълнителни корекции и измервателни процедури извън опростения модел."
                },
                {
                    "kind": "h3",
                    "text": "Пример 9: Обтегателно въже, поддържащо стълб"
                },
                {
                    "kind": "p",
                    "text": "Обтегателно въже е дълго 13 м, а котвата му в земята е на 12 м хоризонтално от стълба. Въжето е хипотенузата, [[c=13\\,\\text{m}]], а хоризонталното разстояние от стълба до котвата е прилежащата страна, [[b=12\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Въжето е приблизително с 8.33% по-дълго от хоризонталната си проекция. Това ви казва колко кабел да отрежете, а не какъв товар носи; опънът на въжето, якостта на котвата и конструктивната безопасност се нуждаят от отделен анализ."
                },
                {
                    "kind": "h3",
                    "text": "Пример 10: Изчисляване на секансовото съотношение на стълбищна тетива"
                },
                {
                    "kind": "p",
                    "text": "Опростена стълбищна тетива е дълга 5 м и премоства хоризонтално разстояние 4 м. Тетивата е хипотенузата, [[c=5\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Диагоналната тетива е с 25% по-дълга от хоризонталния обхват. Дърводелците използват обратното изчисление, за да режат тетиви по размерите от плана. Съотношението не проверява размерите на стълбището или съответствието със строителните норми."
                },
                {
                    "kind": "h3",
                    "text": "Пример 11: Разбиране на хоризонталната проекция на кранова стрела"
                },
                {
                    "kind": "p",
                    "text": "Опростена кранова стрела има дължина 10 м и хоризонтална проекция 6 м. Стрелата е хипотенузата, [[c=10\\,\\text{m}]], а хоризонталната проекция е прилежащата страна, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Стрелата е приблизително с 66.67% по-дълга от хоризонталната си проекция. Стръмният секанс отразява висок работен ъгъл. Съотношението не установява товароподемността на крана или безопасността на работа."
                },
                {
                    "kind": "h3",
                    "text": "Пример 12: Праволинеен полетен сегмент на самолет"
                },
                {
                    "kind": "p",
                    "text": "За опростен праволинеен полетен сегмент дължината на пътя е 5 км, а хоризонталното преместване е 4 км. Пътят на полета е хипотенузата, [[c=5\\,\\text{km}]], а хоризонталното преместване е прилежащата страна, [[b=4\\,\\text{km}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Дължината на пътя е с 25% по-дълга от хоризонталното преместване. Това е идеализиран геометричен пример, а не пълно летателно-навигационно изчисление; реалното планиране на полети добавя вятър, промени във височината и маршрутизация на въздушното пространство."
                },
                {
                    "kind": "h3",
                    "text": "Пример 13: Диагонална механична разпора"
                },
                {
                    "kind": "p",
                    "text": "Диагонална разпора има дължина 2 м и хоризонтална проекция 1.2 м. Разпората е хипотенузата, [[c=2\\,\\text{m}]], а хоризонталната проекция е прилежащата страна, [[b=1.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Разпората е приблизително с 66.67% по-дълга от хоризонталната си проекция. Съотношението описва геометрията на монтажа; то не определя якостта или пригодността на разпората."
                },
                {
                    "kind": "h3",
                    "text": "Пример 14: Изчисляване на секансовото съотношение на туристически маршрут"
                },
                {
                    "kind": "p",
                    "text": "Опростен праволинеен участък от туристически маршрут има дължина на пътеката 100 м и хоризонтално преместване 80 м. Пътеката е хипотенузата, [[c=100\\,\\text{m}]], а хоризонталното преместване е прилежащата страна, [[b=80\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Праволинейната пътека е с 25% по-дълга от хоризонталното си преместване. Реалните туристически пътеки съдържат завои и променящи се наклони, затова приемете това като един праволинеен участък, а не целия маршрут."
                },
                {
                    "kind": "h3",
                    "text": "Пример 15: Подпора на навес"
                },
                {
                    "kind": "p",
                    "text": "Подпора на навес има дължина 3 м и хоризонтална проекция 2.4 м. Подпората е хипотенузата, [[c=3\\,\\text{m}]], а хоризонталната проекция е прилежащата страна, [[b=2.4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Подпората е с 25% по-дълга от хоризонталната си проекция. Изчислението не установява конструктивна пригодност; якостта на закрепването и натоварването от вятър се нуждаят от собствени проверки."
                },
                {
                    "kind": "h3",
                    "text": "Пример 16: Кабел между две точки"
                },
                {
                    "kind": "p",
                    "text": "Прав кабел премоства обща дължина 25 м между две точки с хоризонтално разделяне 24 м. Кабелът е хипотенузата, [[c=25\\,\\text{m}]], а хоризонталното разделяне е прилежащата страна, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "Кабелът е приблизително с 4.17% по-дълъг от хоризонталното разделяне. Опростеният модел приема прав кабел и правоъгълна триъгълна връзка; реалният кабел провисва, което добавя дължина отвъд секансовия модел."
                },
                {
                    "kind": "p",
                    "text": "Секансът е математическо съотношение, а не физическа величина с мерни единици. Практическата му стойност идва от сравняването на наклонена дължина с хоризонталната ѝ проекция, възстановяването на дължини, когато ъгълът е известен, проверката на геометрията на триъгълника и използването на формули, които изрично изискват секанс. Той никога сам по себе си не удостоверява конструктивна безопасност, товароподемност, достъпност или инженерно съответствие."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Ситуация",
                        "c",
                        "b",
                        "Формула",
                        "Съотношение",
                        "По-дълга с",
                        "Значение"
                    ],
                    "rows": [
                        [
                            "Стълба",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Стълбата е с четвърт по-дълга от разстоянието по земята"
                        ],
                        [
                            "Покривна греда",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "Гредата е малко по-дълга от хоризонталното разстояние"
                        ],
                        [
                            "Рампа",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "Нежният наклон е едва по-дълъг от разстоянието"
                        ],
                        [
                            "Геодезия",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "Праволинейното разстояние надвишава хоризонталното"
                        ],
                        [
                            "Обтегателно въже",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "Дължина на въжето за рязане от разстоянието по земята"
                        ],
                        [
                            "Стълбищна тетива",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Диагоналната тетива срещу хоризонталния обхват"
                        ],
                        [
                            "Кранова стрела",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "Стръмната стрела е много по-дълга от проекцията си"
                        ],
                        [
                            "Полетен сегмент",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "Идеализиран път срещу хоризонталното преместване"
                        ],
                        [
                            "Диагонална разпора",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "Дължина на разпората срещу хоризонталната ѝ проекция"
                        ],
                        [
                            "Туристически маршрут",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "Праволинеен участък срещу хоризонталното разстояние по картата"
                        ],
                        [
                            "Подпора на навес",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "Дължина на подпората срещу хоризонталния ѝ обхват"
                        ],
                        [
                            "Кабелен участък",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "Почти хоризонтален кабел, едва малко допълнителна дължина"
                        ]
                    ]
                }
            ],
            "imgAlt": "Четири панела: стълба 1.25, рампа 1.0556, геодезия 1.25, стрела 1.6667, всеки с означен правоъгълен триъгълник",
            "figcaption": "Четири практически изчисления: стълба, рампа, геодезия и кранова стрела, всяко с триъгълника, формулата и съотношението си."
        },
        "sec-angle": {
            "h2": "Разбиране на връзката между секанса и големината на ъгъла",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Секансът расте, когато референтният ъгъл расте. Геометрията обяснява защо: когато ъгъл [[A]] е малък, прилежащата страна е почти толкова дълга, колкото хипотенузата, така че съотношението е малко над 1. Когато ъгълът се разширява, прилежащата страна става все по-малък дял от хипотенузата и съотношението се изкачва. При [[45^\\circ]] секансът е [[\\sqrt{2}]], около 1.4142; при [[60^\\circ]] е точно 2, защото хипотенузата е два пъти прилежащата страна; а когато ъгълът се приближава към [[90^\\circ]], прилежащата страна се свива към нула и секансът расте без граница."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Ъгъл [[A]]",
                        "Прилежаща страна [[b]]",
                        "Хипотенуза [[c]]",
                        "Секансово съотношение"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "Приблизително 1.1547"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "Приблизително 1.4142"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "Приблизително 3.8637",
                            "Приблизително 3.8637"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "Моделът е монотонен: всяко увеличение на ъгъла повишава секанса, а съотношението остава над 1 за всеки остър ъгъл. Измерванията в таблицата са илюстративни; съотношението, а не абсолютният размер на триъгълника, определя ъгъла. Секансът следователно описва формата на триъгълника, а не мащаба му."
            ],
            "imgAlt": "Три триъгълника при 30, 45, 60 градуса със секансови стойности 1.1547, 1.4142, 2; секансът расте с ъгъла",
            "figcaption": "Когато ъгъл A расте, прилежащата страна става все по-малък дял от хипотенузата, затова sec(A) расте."
        },
        "sec-hypotenuse": {
            "h2": "Как да намерите хипотенузата чрез секанс",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Формулата за секанс може да се пренареди, за да се намери хипотенузата, когато прилежащата страна и ъгълът са известни. Започнете с [[\\sec(A)=c/b]] и умножете двете страни по [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е равна на прилежащата страна, умножена по секанса на ъгъла. Дадена е прилежаща страна [[b=4\\,\\text{m}]] и ъгъл [[A=60^\\circ]], и знаейки [[\\sec(60^\\circ)=2]]:"
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Хипотенузата е два пъти прилежащата страна при този ъгъл, което съвпада с геометрията 30-60-90: страната срещу 30 градуса е половината от хипотенузата. Прилежащата страна може да се намери по същия начин чрез ново пренареждане:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "При хипотенуза [[c=10\\,\\text{m}]] и [[A=60^\\circ]]: [[b=10/2]], значи [[\\boxed{b=5\\,\\text{m}}]]. Това са математически пренареждания на една и съща формула. Калкулаторът на тази страница връща секансовото съотношение от дължините на страните; той не изчислява директно липсващи страни."
                }
            ]
        },
        "sec-recover": {
            "h2": "Как да намерите ъгъл от секансово съотношение",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Секансовото съотношение и ъгълът са различни величини: едното е безразмерно сравнение на страни, другото се измерва в градуси. Ако секансовото съотношение е известно, възстановете косинуса с реципрочната стойност:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "После обратният косинус връща ъгъла:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Дадено [[\\sec(A)=1.25]], първо изчислете косинуса: [[\\cos(A)=1/1.25=0.8]]. После [[A=\\cos^{-1}(0.8)]], което дава [[\\boxed{A\\approx36.87^\\circ}]]. Това е отделно изчисление на ъгъл, а не нещо, което калкулаторът за секансово съотношение извършва директно. Настройте научния калкулатор на градуси, ако отговорът се очаква в градуси; в радианов режим същият вход връща около 0.6435, същият ъгъл в различни единици."
                }
            ]
        },
        "sec-mistakes": {
            "h2": "Чести грешки при изчисляване на секанс",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Повечето секансови грешки идват от обърната дроб, грешно означена страна или пропуск в мерните единици. Минете през този списък, преди да се доверите на резултат."
                }
            ],
            "steps": [
                "<strong>Обръщане на формулата и изчисляване на [[b/c]] вместо [[c/b]].</strong> Това е най-честата грешка и тя връща косинус вместо секанс. При [[c=5]] и [[b=4]] грешният ред дава 0.8; правилният ред дава 1.25.",
                "<strong>Объркване на секанс с косинус.</strong> Косинусът е прилежаща, делена на хипотенуза; секансът е точно обратното. Ако отговорът излезе под 1, той почти сигурно е косинус, а не секанс.",
                "<strong>Объркване на секанс с косеканс.</strong> И двете използват хипотенузата в числителя, затова изглеждат сходно. Секансът дели на прилежащата страна [[b]]; косекансът дели на срещулежащата страна [[a]]. Проверете кой катет всъщност дава задачата.",
                "<strong>Използване на срещулежащата страна вместо прилежащата.</strong> Делението [[c/a]] изчислява косеканс. При [[c=5]] и [[a=3]] това дава 1.6667, правилен косеканс, но грешен секанс.",
                "<strong>Използване на страна, която не е хипотенузата, в числителя.</strong> Секансът винаги има хипотенузата отгоре. Катет върху катет е тангенс или котангенс; катет върху хипотенуза е синус или косинус.",
                "<strong>Размяна на прилежащата и срещулежащата страна.</strong> Означенията се разменят, когато референтният ъгъл се смени от [[A]] на [[B]]. Винаги потвърждавайте кой ъгъл назовава задачата, преди да присвоите [[b]].",
                "<strong>Приемане, че секансът е ъгъл, измерен в градуси.</strong> Резултат 1.25 е съотношение, а не [[1.25^\\circ]]. Третирането му като градуси подава безсмислици във всяко следващо изчисление.",
                "<strong>Отчитане на съотношението с метри или сантиметри.</strong> Мерните единици се съкращават при делението, така че 1.25 м е грешно. Запишете обикновеното число и дръжте единиците във входните измервания, където им е мястото.",
                "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Триъгълник не може да има нулева или отрицателна страна, така че тези входове сигнализират грешка при въвеждане на данни или липсващо измерване, а не валиден граничен случай.",
                "<strong>Въвеждане на прилежаща страна, по-дълга от хипотенузата.</strong> Хипотенузата винаги е най-дългата страна. Ако [[b \\gt c]], входовете са разменени или триъгълникът е невъзможен.",
                "<strong>Смесване на мерни единици.</strong> Хипотенуза 5 м с прилежаща страна 40 см дава 0.125, безсмислено число. Първо преобразувайте в една мерна единица: 5 м и 4 м дават правилното 1.25.",
                "<strong>Твърде ранно закръгляване.</strong> Закръглянето на междинно деление до два знака след десетичната запетая и продължаването на изчислението натрупва грешката. Дръжте пълна точност през всяка стъпка и закръгляйте само крайния отговор.",
                "<strong>Приемане, че секансът трябва да е равен на 1 за правоъгълен триъгълник.</strong> Никой правоъгълен триъгълник няма секанс точно 1. Очаквайте стойност над 1 и приемайте точно 1 като сигнал, че входовете са обърнати или триъгълникът е изроден.",
                "<strong>Объркване на реципрочния косинус с обратния косинус.</strong> [[1/\\cos(A)]] е секанс, съотношение; [[\\cos^{-1}]] е обратен косинус, който връща ъгъл. Сходните имена причиняват реални грешки, затова четете означенията внимателно.",
                "<strong>Приемане, че само секансът определя абсолютните размери на триъгълника.</strong> Секансът описва формата, а не размера: безброй много триъгълници споделят секанс 1.25, от хипотенуза 5 см до хипотенуза 5 км. Съотношението фиксира пропорциите; реалните дължини се нуждаят от поне едно измерване на страна."
            ],
            "closingParagraphs": [
                "<strong>Грешно срещу правилно: разработено сравнение</strong> Дадена е хипотенуза [[c=5]] и прилежаща страна [[b=4]]:",
                "<strong>Грешно:</strong> [[4/5=0.8]]. Това е косинус, а не секанс. Числителят и знаменателят са обърнати.",
                "<strong>Правилно:</strong> [[\\sec(A)=5/4=1.25]].",
                "<strong>Проверете:</strong> [[\\cos(A)=0.8]], и [[1/0.8=1.25]]. Проверката с реципрочната стойност потвърждава резултата, а отговорът е над 1, както всеки валиден секанс трябва."
            ]
        },
        "sec-verify": {
            "h2": "Как да проверите дали резултатът ви за секанс е валиден",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Валидният, неизроден правоъгълен триъгълник изисква положителни страни, като хипотенузата е строго най-дълга, [[0 \\lt b \\lt c]], така че секансовият резултат трябва да е по-голям от 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "И двете измервания трябва да използват съвместими мерни единици. Резултат на или под 1 обикновено сочи обърнати входове, неправилно идентифициране на страните, несъвместими измервания или невалидни размери на триъгълника."
                },
                {
                    "kind": "h3",
                    "text": "Метод 1: Проверете реципрочната стойност на косинуса"
                },
                {
                    "kind": "p",
                    "text": "Проверете [[\\cos(A)=b/c]], после потвърдете [[\\sec(A)=1/\\cos(A)]]. При [[b=4]] и [[c=5]]: [[\\cos(A)=4/5=0.8]], значи [[\\sec(A)=1/0.8=1.25]]. Несъвпадение между двата пътя сигнализира обърната дроб или грешно означена страна."
                },
                {
                    "kind": "h3",
                    "text": "Метод 2: Проверете Питагоровата теорема"
                },
                {
                    "kind": "p",
                    "text": "Ако срещулежащата страна е известна или нужна, изчислете [[a=\\sqrt{c^2-b^2}]]. За [[b=4]] и [[c=5]]: [[a=\\sqrt{25-16}=3]], и [[3^2+4^2=5^2]]. Това потвърждава размерите на правоъгълния триъгълник 3-4-5. Срещулежащата страна е проверочна стойност тук, а не част от основната формула за секанс."
                },
                {
                    "kind": "h3",
                    "text": "Метод 3: Проверете с обратен косинус"
                },
                {
                    "kind": "p",
                    "text": "За секансово съотношение 1.25: [[A=\\cos^{-1}(1/1.25)]], което е [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Тъй като секансът е скромно над 1, ъгълът трябва да се окаже доста под [[45^\\circ]]; ако не е, означенията на страните вероятно са разменени. Малки разлики могат да дойдат от закръгляне."
                }
            ]
        },
        "sec-vs": {
            "h2": "Секанс срещу косинус, синус и косеканс",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Всяко съотношение сравнява различна двойка страни, използвайки същия референтен ъгъл и означения на страните:"
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Съотношение",
                        "Формула",
                        "Какво сравнява"
                    ],
                    "rows": [
                        [
                            "Синус",
                            "sin(A) = a/c",
                            "Срещулежаща страна към хипотенуза"
                        ],
                        [
                            "Косинус",
                            "cos(A) = b/c",
                            "Прилежаща страна към хипотенуза"
                        ],
                        [
                            "Тангенс",
                            "tan(A) = a/b",
                            "Срещулежаща страна към прилежаща страна"
                        ],
                        [
                            "Секанс",
                            "sec(A) = c/b",
                            "Хипотенуза към прилежаща страна"
                        ],
                        [
                            "Косеканс",
                            "csc(A) = c/a",
                            "Хипотенуза към срещулежаща страна"
                        ],
                        [
                            "Котангенс",
                            "cot(A) = b/a",
                            "Прилежаща страна към срещулежаща страна"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "Секансът и косинусът са реципрочната двойка: [[\\sec(A)=1/\\cos(A)]]. Ако [[\\cos(A)=0.8]], тогава [[\\sec(A)=1.25]]. Посегнете към секанса, когато формула изисква хипотенуза, делена на прилежаща, когато сравнявате наклонена дължина с хоризонталната ѝ проекция или когато известната връзка започва от най-дългата страна; посегнете към косинуса за прилежаща върху хипотенуза, към синуса за срещулежащата страна срещу хипотенузата и към косеканса, когато хипотенузата се сравнява със срещулежащата страна.",
                "За съседните съотношения вижте <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за синусово съотношение</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за косинусово съотношение</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за тангенсово съотношение</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за косекансово съотношение</a> и <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за котангенсово съотношение</a>."
            ]
        },
        "sec-related": {
            "h2": "Разгледайте свързаните тригонометрични калкулатори",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "Калкулатор за синусово съотношение"
                },
                {
                    "name": "Калкулатор за косинусово съотношение"
                },
                {
                    "name": "Калкулатор за тангенсово съотношение"
                },
                {
                    "name": "Калкулатор за косекансово съотношение"
                },
                {
                    "name": "Калкулатор за котангенсово съотношение"
                },
                {
                    "name": "Калкулатор за ъгъл на правоъгълен триъгълник"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Използвайте секансовото съотношение с увереност",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Секансът е обърнатата форма на косинуса: разделете хипотенузата на прилежащата страна и сте описали колко по-дълга е наклонената дължина от хоризонталния си отпечатък. Формулата [[\\sec(A)=c/b]] се нуждае само от две измервания, отговорът винаги е безразмерно число, по-голямо от 1, и расте, когато референтният ъгъл расте. Когато липсваща страна е нужна, [[c=b\\sec(A)]] възстановява хипотенузата; когато ъгълът е нужен, [[A=\\cos^{-1}(1/\\sec(A))]] го възстановява. Стълба, греда, рампа или учебникарският 3-4-5, методът никога не се променя: определете хипотенузата, определете прилежащата страна, разделете и проверете с реципрочната стойност на косинуса."
                }
            ]
        }
    },
    "faqs": [
        {
            "question": "Каква е формулата за секансовото съотношение на правоъгълен триъгълник?",
            "answer": "sec(A) = c / b: разделете хипотенузата c на страната, прилежаща на ъгъл A. При хипотенуза 5 см и прилежаща страна 4 см резултатът е 5/4 = 1.25. Това десетично число е пълният отговор, безразмерно съотношение, а не ъгъл."
        },
        {
            "question": "Как секансът е свързан с косинуса?",
            "answer": "Секансът е реципрочна стойност на косинуса: sec(A) = 1 / cos(A). Ако cos(A) = 4/5 = 0.8, тогава sec(A) = 1/0.8 = 1.25. Двете съотношения описват един и същ ъгъл от обърнати гледни точки, а проверката с реципрочната стойност е най-бързият начин да проверите секансово изчисление."
        },
        {
            "question": "Защо секансът е по-голям от 1 в правоъгълен триъгълник?",
            "answer": "Във валиден, неизроден правоъгълен триъгълник хипотенузата е строго по-дълга от всеки катет, така че c > b > 0. Делението на по-голяма дължина на по-малка винаги дава съотношение над 1: sec(A) = c/b > 1 за всеки остър референтен ъгъл."
        },
        {
            "question": "Може ли секансът да е равен на 1?",
            "answer": "Не за обикновен остър ъгъл в истински правоъгълен триъгълник. Секанс точно 1 би изисквал хипотенузата да е равна на прилежащата страна, което сплесква триъгълника в права линия. Стойността 1 е гранична стойност, приближавана, когато ъгъл A се свива към 0 градуса, никога стойност, която истински триъгълник произвежда."
        },
        {
            "question": "Какво означава секансова стойност 1.25?",
            "answer": "Хипотенузата е 1.25 пъти по-дълга от прилежащата страна, или с 25 процента по-дълга. Това не означава, че ъгълът е 1.25 градуса, и не означава, че триъгълникът измерва 1.25 единици. Секансът е безразмерно сравнение на две дължини."
        },
        {
            "question": "Има ли секансът мерни единици?",
            "answer": "Не. И двата входа са дължини, измерени в една и съща мерна единица, така че единиците се съкращават: 5 m / 4 m = 1.25, точно както 500 cm / 400 cm = 1.25. Отчитайте секанса като обикновено число, никога с градуси, метри или футове."
        },
        {
            "question": "Как се изчислява секанс от дължини на страни?",
            "answer": "Измерете хипотенузата c и прилежащата страна b в една и съща мерна единица, потвърдете, че и двете са положителни и че c е по-дълга от b, после разделете: sec(A) = c / b. На тази страница въведете хипотенузата в първото поле, а прилежащата страна във второто, изберете съвместими единици и щракнете Calculate sec(A)."
        },
        {
            "question": "Как мога да намеря хипотенузата чрез секанс?",
            "answer": "Пренаредете формулата до c = b * sec(A). Ако прилежащата страна е 4 м, а ъгъл A е 60 градуса, sec(60 deg) = 2, значи c = 4 * 2 = 8 м. Това е ръчно пренареждане; калкулаторът на тази страница връща съотношението от дължините на страните, а не липсващи страни."
        },
        {
            "question": "Как мога да намеря ъгъл от секансово съотношение?",
            "answer": "Вземете реципрочната стойност, за да получите косинусовото съотношение, после приложете обратен косинус: A = cos^-1(1 / sec(A)). За sec(A) = 1.25 косинусовото съотношение е 0.8, значи A = cos^-1(0.8), около 36.87 градуса. Първо настройте научния калкулатор на режим градуси. Калкулаторът на тази страница връща съотношението, а не ъгъла."
        },
        {
            "question": "Каква е разликата между секанс и косеканс?",
            "answer": "Секансът дели хипотенузата на прилежащата страна (c/b); косекансът дели хипотенузата на срещулежащата страна (c/a). И двете са реципрочни съотношения, включващи хипотенузата, но използват различни катети, затова отговарят на различни въпроси и никога не са взаимозаменяеми."
        },
        {
            "question": "Мога ли да изчисля секанс, без да знам срещулежащата страна?",
            "answer": "Да. Основната формула за секанс използва само хипотенузата и прилежащата страна, така че срещулежащата страна никога не влиза в изчислението. Срещулежащата страна става полезна само когато Питагоровата теорема се използва за проверка на триъгълника или когато синус, тангенс или косеканс влязат в работата."
        },
        {
            "question": "Как секансът се използва в практическите измервания?",
            "answer": "Секансът сравнява наклонена дължина с хоризонталната ѝ проекция: стълба срещу разстоянието ѝ по земята, покривна греда срещу хоризонталното ѝ разстояние, кабел срещу хоризонталното разделяне на краищата му. Съотношението ви казва колко по-дълъг е наклоненият път от проекцията си, което е полезно за оценяване на дължини на материали от хоризонтални планове."
        }
    ],
    "faqHeading": "Често задавани въпроси",
    "relatedHeading": "Разгледайте свързаните тригонометрични калкулатори"
},
"tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
        "sec-intro": "Sekant Oranı Hesaplayıcı Nedir?",
        "sec-triangle": "Komşu Kenarı ve Hipotenüsü Anlama",
        "sec-whatis": "Sekant Oranını Anlama",
        "sec-formula": "Sekant Formülü Nasıl Çalışır",
        "sec-howto": "Sekant Oranı Hesaplayıcı Nasıl Kullanılır",
        "sec-examples": "Sekant Hesaplamanın Adım Adım Örnekleri",
        "sec-applications": "Sekant Oranının Gerçek Hayattan Örnekleri",
        "sec-angle": "Sekant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "sec-hypotenuse": "Sekant Kullanarak Hipotenüs Nasıl Bulunur",
        "sec-recover": "Sekant Oranından Açı Nasıl Bulunur",
        "sec-mistakes": "Sekant Hesaplarken Yapılan Yaygın Hatalar",
        "sec-verify": "Sekant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "sec-vs": "Sekant ile Kosinüs, Sinüs ve Kosekant",
        "sec-related": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
        "sec-faq": "Sık Sorulan Sorular"
    },
    "sections": {
        "sec-intro": {
            "h2": "Sekant Oranı Hesaplayıcı Nedir?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant oranı hesaplayıcı tek bir soruyu yanıtlar: bir dik üçgende dar bir açı için en uzun kenar, açının yanındaki kenarla nasıl karşılaştırılır? Hipotenüsü ve komşu kenarı girin; araç hipotenüsü komşu kenara böler ve [[\\sec(A)=c/b]] sonucunu döndürür. Hipotenüs 5 cm, komşu kenar 4 cm olduğunda hesap [[5/4=1.25]] olur: hipotenüs, komşu kenarın 1.25 katı uzunluktadır; başka bir deyişle ondan %25 uzundur. Bu ondalık sayı tam cevaptır. Bölmede santimetreler sadeleştiği için birimsiz bir orandır ve derece cinsinden bir açı değildir; 1.25'i asla [[1.25^\\circ]] olarak okumayın. Karşı kenar bu hesaba hiç girmez; hipotenüs ve komşu kenar yeterlidir. Sekant aynı zamanda kosinüsün tersidir, bu yüzden birçok ders kitabı onu [[\\cos(A)]]'nin çevrilmiş biçimi olarak tanıtır."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-triangle": {
            "h2": "Komşu Kenarı ve Hipotenüsü Anlama",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "Dik Üçgen Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Bir dik üçgenin bir açısı tam olarak [[90^\\circ]]'dir; bu, birbirine dik iki doğru arasındaki açıdır, tıpkı düz bir zeminle buluşan bir duvar gibi. Hipotenüs, bu dik açının karşısında yer alır ve köşeyi çaprazlamasına tamamen aşması gerektiği için her zaman en uzun kenardır. Diğer iki açı kalan 90 dereceyi paylaşır, dolayısıyla ikisi de dardır. İki kenar dik açıda birleşir, birbirine diktir ve onların hipotenüsle ilişkisi, dik üçgen trigonometrisini mümkün kılan şeydir."
                },
                {
                    "kind": "h3",
                    "text": "Komşu Kenar Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Komşu kenar [[b]], referans açı [[A]]'ye değen, hipotenüs olmayan kenardır. Uygulamalı problemlerde genellikle yatay uzaklık rolünü üstlenir: merdiven tabanından duvara olan zemin uzaklığı, bir çatı kirişinin yatay izdüşümü veya iki ölçüm noktası arasındaki yatay ayrım. Sekant formülünün paydasına yazılır. Hangi kenarın komşu sayıldığı, seçilen referans açıya bağlıdır; bu yüzden [[A]] açısından [[B]] açısına geçmek, komşu ve karşı etiketlerini değiştirir."
                },
                {
                    "kind": "h3",
                    "text": "Hipotenüs Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs [[c]], dik açının karşısındaki kenardır: her çizimde [[90^\\circ]] köşesini işaretleyen küçük karenin karşısında durur ve iki kenardan da kesinlikle uzundur. Uygulamalı problemlerde genellikle eğik bir uzunluk rolünü üstlenir: merdiven, rampa yüzeyi, kiriş, kablo, çapraz destek veya dosdoğru bir yol. Sekant formülünün payına yazılır; bu yüzden her sekant değeri 1'den büyük çıkar."
                },
                {
                    "kind": "h3",
                    "text": "Karşı Kenar Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a]], [[A]] açısının tam karşısında durur ve köşesine hiç değmez. Temel sekant hesabında rolü yoktur; bu yüzden hesaplayıcı onu hiç istemez. İki bilinen uzunluğun gerçek bir dik üçgen oluşturduğunu Pisagor teoremiyle doğrularken önem kazanır; sinüs, tanjant ve kosekantta ise iki çalışan kenardan biri olarak başrol oynar."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [],
            "imgAlt": "A açısı sol altta olan dik üçgen: altın renkli hipotenüs c, mavi komşu kenar b, sec(A)=c/b",
            "figcaption": "A açısı sol altta yer alır; sekant, a karşı kenarını değil, altın renkli hipotenüs c ile mavi komşu kenar b'yi kullanır."
        },
        "sec-whatis": {
            "h2": "Sekant Oranını Anlama",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant, eğik kenarın tamamını referans açının yanındaki kenarla karşılaştırır:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Burada [[\\sec(A)]], [[A]] açısının sekantıdır; [[c]] hipotenüs, [[b]] ise komşu kenardır: komşu kenarın hipotenüse kaç kez sığdığını gösterir."
                },
                {
                    "kind": "h3",
                    "text": "Sekant: Kosinüsün Tersi"
                },
                {
                    "kind": "p",
                    "text": "Kosinüs, komşu kenarı hipotenüse böler: [[\\cos(A)=b/c]]. Tersini almak bu kesri çevirir: [[1/\\cos(A)=c/b]] ve bu tam olarak sekant formülüdür:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=4/5=0.8]] olduğunda tersi [[\\sec(A)=1/0.8=1.25]] olur: aynı üçgen, ters yönden anlatılmış hali. Bu ayrım önemlidir çünkü [[\\cos^{-1}]] ile yazılan ters kosinüs farklı bir fikirdir: kosinüs değerinden açıyı geri kazandırır; oysa [[1/\\cos(A)]] karşılıklı kosinüstür, yani bir açı değil bir orandır."
                },
                {
                    "kind": "h3",
                    "text": "1.25'lik Bir Sekant Değeri Ne Anlama Gelir?"
                },
                {
                    "kind": "p",
                    "text": "1.25'lik bir sekant, hipotenüsün komşu kenarın 1.25 katı uzunlukta olduğu anlamına gelir. Yüzde fark [[(1.25-1)\\times100=25]] olduğundan hipotenüs, komşu kenardan %25 uzundur. Bu, açının [[1.25^\\circ]] olduğu anlamına gelmez ve üçgenin 1.25 birim bir şey ölçtüğü anlamına da gelmez. Sekant bir karşılaştırmadır, ölçüm değildir."
                },
                {
                    "kind": "h3",
                    "text": "Sekant Neden 1'den Büyüktür"
                },
                {
                    "kind": "p",
                    "text": "Geçerli, yozlaşmamış bir dik üçgende hipotenüs iki kenardan da uzundur, yani [[c \\gt b \\gt 0]]. Hipotenüsü komşu kenara bölmek bu yüzden 1'den büyük bir oran verir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Sıradan bir dar referans açı için yozlaşmamış bir dik üçgende tam 1 sonucu mümkün değildir, çünkü bu hipotenüsün komşu kenara eşit olmasını gerektirir ve üçgeni bir çizgiye yassıltır. 1 değeri bir sınır değeridir; açıya yalnızca [[0^\\circ]]'ye doğru küçülürken yaklaşılır."
                },
                {
                    "kind": "h3",
                    "text": "Sekant Neden Kosinüsün Tersidir"
                },
                {
                    "kind": "p",
                    "text": "İlişki doğrudan iki formülden çıkar. Kosinüs komşuyu hipotenüse böler, sekant hipotenüsü komşuya böler:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "Bunları çarpmak her şeyi sadeleştirir ve 1 verir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "Bu özdeşlik pratik bir doğrulama aracıdır: aynı kenarlardan kosinüsü hesaplayın, tersini alın ve sekant sonucuyla birebir eşleşmesi gerekir. Eşleşmezlik, çevrilmiş bir kesre ya da yanlış etiketlenmiş bir kenara işaret eder."
                },
                {
                    "kind": "h3",
                    "text": "Sekant Neden Birimsizdir"
                },
                {
                    "kind": "p",
                    "text": "Sekant bir uzunluğu başka bir uzunluğa böler, bu yüzden birimler sadeleşir. Örneğin:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "Metreler yok olur, geriye yalın bir sayı kalır. Aynı oran 500 cm ile 400 cm'de ya da eşleşen birimlerin herhangi bir çiftiyle ortaya çıkar; bu yüzden metre cinsinden hipotenüsü santimetre cinsinden komşu kenarla karıştırmak, hesap başlamadan bozar."
                },
                {
                    "kind": "h3",
                    "text": "Sekant ile Kosekant"
                },
                {
                    "kind": "p",
                    "text": "Sekant ve kosekant, ikisi de payda hipotenüsü kullanan karşılıklı oranlardır; ancak paydada farklı kenarlar kullanırlar:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "Sekant, hipotenüsü komşu kenarla eşleştirir; kosekant, hipotenüsü karşı kenarla eşleştirir. Birbirinin yerine kullanılamazlar ve yanlışını seçmek, üçgen hakkında farklı bir soruyu yanıtlamak demektir."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [],
            "imgAlt": "Üç aşama: 3-4-5 üçgeni, kosinüs cos(A)=4/5=0.8, sekant sec(A)=5/4=1.25, karşılıklı ilişki",
            "figcaption": "Üç aşama: 3-4-5 üçgenini etiketleyin, kosinüsü cos(A) = 4/5 olarak hesaplayın, sonra kesri çevirip sec(A) = 5/4 elde edin."
        },
        "sec-formula": {
            "h2": "Sekant Formülü Nasıl Çalışır",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanım sözle başlar, sonra simgelere geçer. Sekant, hipotenüsün komşu kenara bölümüdür:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Standart gösterimde bu şöyle olur:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs paya yazılır çünkü sekant 'eğik kenar, yatay ayak izine göre ne kadar uzun?' diye sorar; komşu kenar paydaya yazılır çünkü karşılaştırılan referans uzunluk odur."
                },
                {
                    "kind": "h3",
                    "text": "Çözümlü Örnek: 3-4-5 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Komşu kenarı [[b=4\\,\\text{cm}]], karşı kenarı [[a=3\\,\\text{cm}]] ve hipotenüsü [[c=5\\,\\text{cm}]] olan bir üçgende formülü adım adım uygulayın."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 1: Formülü yazın.</strong> [[\\sec(A)=c/b]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 2: Bilinen değerleri yerine koyun.</strong> [[\\sec(A)=5/4]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 3: Bölün.</strong> [[\\boxed{\\sec(A)=1.25}]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 4: Sonucu yorumlayın.</strong> Hipotenüs, komşu kenarın 1.25 katıdır; yani %25 daha uzundur. 4 m'lik yatay uzaklığı aşan 5 m'lik bir merdiven de böyle davranır; geometri birime aldırmaz, yalnızca orana bakar."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 5: Kosinüsle doğrulayın.</strong> [[\\cos(A)=4/5=0.8]] ve [[1/0.8=1.25]]. Karşılıklı kontrol, sekant sonucunu doğrular çünkü kosinüs ile sekant birbirinin tam tersidir."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 6: Üçgeni doğrulayın.</strong> [[3^2+4^2=5^2]], yani [[9+16=25]]. Kenar uzunlukları Pisagor teoremini sağlar; bu yüzden gerçek bir dik üçgen oluştururlar ve sekant değeri güvenilirdir."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-howto": {
            "h2": "Sekant Oranı Hesaplayıcı Nasıl Kullanılır",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Yukarıdaki hesaplayıcı iki girdi alır: hipotenüs [[c]] ve komşu kenar [[b]]; karşılığında [[\\sec(A)]] döndürür. Bu adımları sırayla izleyin."
                }
            ],
            "steps": [
                "<strong>Referans açı [[A]]'yi belirleyin.</strong> Orandaki her kenar etiketi bu açıya göre tanımlanır; bu yüzden kenar uzunluklarına dokunmadan önce onu seçin.",
                "<strong>Hipotenüs [[c]]'yi bulun.</strong> Dik açının karşısındadır ve üçgenin en uzun kenarıdır; çizimlerde eğik kenardır.",
                "<strong>Komşu kenar [[b]]'yi bulun.</strong> [[A]] açısına değer ve hipotenüs değildir; birbirine dik iki kenardan biridir.",
                "<strong>Her iki kenar uzunluğunu da ölçün ya da elde edin.</strong> Aynı aletle ve aynı birimde ölçün ya da devam etmeden önce bir ölçümü çevirin.",
                "<strong>Hipotenüsü ilk giriş alanına girin.</strong> Bu, kesrin payıdır; buradaki bir hata tüm cevabı kaydırır.",
                "<strong>Komşu kenarı ikinci giriş alanına girin.</strong> Bu paydadır; [[A]] açısının yanındaki kenar olmalı, karşısındaki değil.",
                "<strong>Mevcut birim seçicilerle uyumlu ölçü birimleri seçin.</strong> Her iki alan da aynı birimi ya da çevrilmiş eşdeğerini kullanmalı; yoksa oran yanlış olur.",
                "<strong>Her iki ölçümün de pozitif olduğunu doğrulayın.</strong> Sıfır ya da negatif uzunluğun üçgende anlamı yoktur ve veri giriş hatasına işaret eder.",
                "<strong>Hipotenüsün komşu kenardan uzun olduğunu kontrol edin.</strong> Değilse kenarlar yanlış etiketlenmiştir ya da sayılar bir dik üçgen oluşturamaz.",
                "<strong>Calculate sec(A) düğmesine tıklayın.</strong> Araç [[c/b]] bölmesini yapar ve oranı gösterir.",
                "<strong>Ortaya çıkan sekant oranını okuyun.</strong> Birimsiz bir ondalık sayıdır, genellikle dört ondalık basamakla, sonraki hesaplamalarda kullanıma hazırdır.",
                "<strong>Sonucun 1'den büyük olduğunu doğrulayın.</strong> Dar referans açılı, geçerli ve yozlaşmamış bir dik üçgen için [[\\sec(A) \\gt 1]] olur; 1'e eşit ya da daha küçük bir değer, yukarıda bir şeylerin ters gittiği anlamına gelir.",
                "<strong>Girdileri temizleyip yeni bir hesaba başlamak istediğinizde Reset'i kullanın.</strong> Alanlar ve sonuç başlangıç durumuna döner."
            ],
            "closingParagraphs": [
                "Hesaplayıcı karşı kenara ya da açı girdisine ihtiyaç duymaz, çünkü temel sekant oranı iki uzunlukla tamamen belirlenir. Açıları ya da eksik kenarları da geri kazandırmaz; onlar için bu kılavuzun ilerleyen bölümlerindeki düzenlenmiş formüller el yolunu gösterir."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "Sekant Hesaplamanın Adım Adım Örnekleri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Bu dört örnek, sekant değerleri ezberlemeye değer klasik üçgenleri kullanır; çünkü trigonometride sürekli karşınıza çıkarlar."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 1: 3-4-5 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "[[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] ve [[c=5\\,\\text{cm}]] verildiğinde:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs, komşu kenardan %25 uzundur. Bu, ders kitaplarındaki en yaygın sekant örneğidir ve 1.25 sonucu tamdır."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 2: 5-12-13 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Komşu kenarı [[b=12\\,\\text{m}]], karşı kenarı [[a=5\\,\\text{m}]] ve hipotenüsü [[c=13\\,\\text{m}]] olan:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs, komşu kenardan yaklaşık %8.33 uzundur. Bu üçgen, 13'ün sığ bir çatı eğimine yakın durması nedeniyle inşaat problemlerinde karşınıza çıkar."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 3: 45-45-90 Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Komşu kenarı [[b=1\\,\\text{cm}]], karşı kenarı [[a=1\\,\\text{cm}]] ve hipotenüsü [[c=\\sqrt{2}\\,\\text{cm}]] olan:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs, her iki kenarın da yaklaşık 1.4142 katıdır. 45 derecede iki kenar eşittir; bu yüzden sekant burada kosekanta eşittir, ikisi de [[\\sqrt{2}]] olur."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 4: 30-60-90 Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Referans açı [[A=30^\\circ]] için komşu kenarı [[b=\\sqrt{3}\\,\\text{cm}]], karşı kenarı [[a=1\\,\\text{cm}]] ve hipotenüsü [[c=2\\,\\text{cm}]] kullanın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs, komşu kenardan yaklaşık %15.47 uzundur. Aynı 2:1 hipotenüs oranının, kenarlar yer değiştirerek 60 derecede de ortaya çıktığına dikkat edin; orada sekant 2 olur."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-applications": {
            "h2": "Sekant Oranının Gerçek Hayattan Örnekleri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant, eğik bir uzunluğun yatay izdüşümüyle karşılaştırılması gereken her yerde işini yapar. Her örnekte dik üçgen, gerçek durumun basitleştirilmiş geometrik modelidir ve belirtilen varsayımlar bu basitleştirmeyi dürüst tutar."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 5: Merdivenin Sekant Oranını Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Bir merdiven 5 m uzunluğunda ve tabanı dikey duvardan 4 m uzaktadır. [[A]] açısı, merdiven ile düz zemin arasında yer alır. Hipotenüs merdivenin kendisidir: [[c=5\\,\\text{m}]]; komşu kenar ise yatay zemin uzaklığıdır: [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Merdiven, yatay zemin izdüşümünden %25 uzundur. Bu oran, merdivenin güvenli konumlandırılıp konumlandırılmadığını belirlemez; merdiven güvenliği çalışma açısına ve taban tutuşuna bağlıdır, yalnızca sekanta değil."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 6: Çatı Kirişinin Sekant Oranını Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Bir çatı kirişinin eğik uzunluğu 6.5 m, yatay uzanımı 6 m'dir. Kiriş hipotenüstür: [[c=6.5\\,\\text{m}]]; yatay uzanım ise komşu kenardır: [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Kiriş, yatay uzanımından yaklaşık %8.33 uzundur. Çatıcılar bu ilişkiyi sürekli ters yönde kullanır: plandaki uzanımı ölçer, sekantla çarpar, kiriş malzemesini sipariş eder. Oran, eksiksiz bir çatı tasarımı ya da yapısal değerlendirme değildir."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 7: Rampanın Sekant Oranını Değerlendirme"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir rampanın eğik uzunluğu 9.5 m, yatay uzanımı 9 m'dir. Eğik yüzey hipotenüstür: [[c=9.5\\,\\text{m}]]; yatay uzanım ise komşu kenardır: [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "Rampanın eğik uzunluğu, yatay izdüşümünden yaklaşık %5.56 uzundur. Düşük sekant, yumuşak bir eğimi yansıtır; ancak oran tek başına erişilebilirliği ya da yapı yönetmeliğine uygunluğu belirlemez."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 8: Bir Ölçüm Çalışması"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir ölçüm üçgeninde doğrusal uzaklık 50 m, yatay ayrım 40 m'dir. Doğrusal uzaklık hipotenüstür: [[c=50\\,\\text{m}]]; yatay ayrım ise komşu kenardır: [[b=40\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Doğrusal uzaklık, yatay ayrımdan %25 uzundur. Haritacılar bu tür yatay indirgemeyi rutin olarak uygular; gerçek arazi çalışması, basit modelin ötesinde ek düzeltmeler ve ölçüm yöntemleri gerektirebilir."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 9: Direği Tutan Bir Gergi Teli"
                },
                {
                    "kind": "p",
                    "text": "Bir gergi teli 13 m uzunluğunda ve zemin çapası direkten yatayda 12 m uzaktadır. Tel hipotenüstür: [[c=13\\,\\text{m}]]; direkten çapaya olan yatay uzaklık ise komşu kenardır: [[b=12\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Tel, yatay izdüşümünden yaklaşık %8.33 uzundur. Bu, ne kadar kablo keseceğinizi söyler, ne kadar yük taşıyacağını değil; tel gerilimi, çapa dayanımı ve yapısal güvenlik ayrı analiz ister."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 10: Merdiven Kirişinin Sekant Oranını Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir merdiven kirişi 5 m uzunluğunda ve 4 m'lik yatay uzanımı aşar. Kiriş hipotenüstür: [[c=5\\,\\text{m}]]; yatay uzanım ise komşu kenardır: [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Çapraz kiriş, yatay açıklıktan %25 uzundur. Marangozlar, kirişleri plan ölçülerinden kesmek için ters hesabı kullanır. Oran, merdiven ölçülerini ya da yapı yönetmeliğine uygunluğu doğrulamaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 11: Vinç Bomunun Yatay İzdüşümünü Anlama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir vinç bomunun uzunluğu 10 m, yatay izdüşümü 6 m'dir. Bom hipotenüstür: [[c=10\\,\\text{m}]]; yatay izdüşüm ise komşu kenardır: [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Bom, yatay izdüşümünden yaklaşık %66.67 uzundur. Yüksek sekant, dik bir çalışma açısını yansıtır. Oran, vinç kapasitesini ya da çalışma güvenliğini belirlemez."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 12: Doğrusal Bir Uçak Uçuş Kesimi"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş doğrusal bir uçuş kesiminde yol uzunluğu 5 km, yatay yer değiştirme 4 km'dir. Uçuş yolu hipotenüstür: [[c=5\\,\\text{km}]]; yatay yer değiştirme ise komşu kenardır: [[b=4\\,\\text{km}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Yol uzunluğu, yatay yer değiştirmeden %25 uzundur. Bu, idealleştirilmiş bir geometri örneğidir, eksiksiz bir uçuş navigasyon hesabı değildir; gerçek uçuş planlaması rüzgarı, irtifa değişimlerini ve hava sahası rotalarını ekler."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 13: Çapraz Bir Mekanik Destek"
                },
                {
                    "kind": "p",
                    "text": "Çapraz bir desteğin uzunluğu 2 m, yatay izdüşümü 1.2 m'dir. Destek hipotenüstür: [[c=2\\,\\text{m}]]; yatay izdüşüm ise komşu kenardır: [[b=1.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Destek, yatay izdüşümünden yaklaşık %66.67 uzundur. Oran, montajın geometrisini anlatır; desteğin dayanımını ya da uygunluğunu belirlemez."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 14: Bir Yürüyüş Rotasının Sekant Oranını Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş doğrusal bir yürüyüş bölümünde yol uzunluğu 100 m, yatay yer değiştirme 80 m'dir. Yol hipotenüstür: [[c=100\\,\\text{m}]]; yatay yer değiştirme ise komşu kenardır: [[b=80\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Doğrusal yol, yatay yer değiştirmeden %25 uzundur. Gerçek yürüyüş parkurları kıvrımlar ve değişen eğimler içerir; bu yüzden bunu tüm rota değil, tek bir doğrusal kesit olarak değerlendirin."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 15: Bir Tente Desteği"
                },
                {
                    "kind": "p",
                    "text": "Bir tente desteğinin uzunluğu 3 m, yatay izdüşümü 2.4 m'dir. Destek hipotenüstür: [[c=3\\,\\text{m}]]; yatay izdüşüm ise komşu kenardır: [[b=2.4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Destek, yatay izdüşümünden %25 uzundur. Hesap, yapısal uygunluğu belirlemez; bağlantı dayanımı ve rüzgar yükü kendi denetimlerini ister."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 16: İki Nokta Arasındaki Bir Kablo"
                },
                {
                    "kind": "p",
                    "text": "Düz bir kablo, iki nokta arasında yatay ayrımı 24 m olan toplam 25 m'lik bir uzunluğu aşar. Kablo hipotenüstür: [[c=25\\,\\text{m}]]; yatay ayrım ise komşu kenardır: [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "Kablo, yatay ayrımdan yaklaşık %4.17 uzundur. Basitleştirilmiş model, düz bir kablo ve dik üçgen ilişkisi varsayar; gerçek bir kablo sarkar ve sekant modelinin ötesinde ek uzunluk katar."
                },
                {
                    "kind": "p",
                    "text": "Sekant, birimleri olan fiziksel bir büyüklükten çok matematiksel bir orandır. Pratik değeri, eğik bir uzunluğu yatay izdüşümüyle karşılaştırmaktan, açı bilindiğinde uzunlukları geri kazanmaktan, üçgen geometrisini doğrulamaktan ve özellikle sekant gerektiren formülleri kullanmaktan gelir. Tek başına asla yapısal güvenliği, yük kapasitesini, erişilebilirliği ya da mühendislik uygunluğunu onaylamaz."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "Durum",
                        "c",
                        "b",
                        "Formül",
                        "Oran",
                        "Fazlalık",
                        "Anlam"
                    ],
                    "rows": [
                        [
                            "Merdiven",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Merdiven, zemin uzaklığından çeyrek daha uzun"
                        ],
                        [
                            "Çatı kirişi",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "Kiriş, yatay uzanımdan biraz daha uzun"
                        ],
                        [
                            "Rampa",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "Yumuşak eğim, uzanımdan ancak biraz daha uzun"
                        ],
                        [
                            "Ölçüm",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "Doğrusal uzaklık, yatay olanı aşar"
                        ],
                        [
                            "Gergi teli",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "Zemin uzaklığından kesilecek tel uzunluğu"
                        ],
                        [
                            "Merdiven kirişi",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Yatay açıklığa karşı çapraz kiriş"
                        ],
                        [
                            "Vinç bomu",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "Dik bom, izdüşümünden çok daha uzun"
                        ],
                        [
                            "Uçuş kesimi",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "Yatay yer değiştirmeye karşı idealleştirilmiş yol"
                        ],
                        [
                            "Çapraz destek",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "Yatay izdüşüme karşı destek uzunluğu"
                        ],
                        [
                            "Yürüyüş rotası",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "Yatay harita uzaklığına karşı doğrusal kesit"
                        ],
                        [
                            "Tente desteği",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "Yatay erişime karşı destek uzunluğu"
                        ],
                        [
                            "Kablo aralığı",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "Neredeyse yatay kablo, fazladan uzunluk neredeyse yok"
                        ]
                    ]
                }
            ],
            "figures": [],
            "imgAlt": "Dört panel: merdiven oranı 1.25, rampa 1.0556, ölçüm 1.25, vinç bomu 1.6667, her birinde etiketli dik üçgen",
            "figcaption": "Dört pratik hesap: merdiven, rampa, ölçüm ve vinç bomu; her birinde üçgeni, formülü ve oranı var."
        },
        "sec-angle": {
            "h2": "Sekant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant, referans açı büyüdükçe büyür. Geometri nedenini açıklar: [[A]] açısı küçükken komşu kenar neredeyse hipotenüs kadar uzundur, bu yüzden oran 1'in biraz üzerinde kalır. Açı genişledikçe komşu kenar, hipotenüsün daha küçük bir payı hâline gelir ve oran tırmanır. [[45^\\circ]]'de sekant [[\\sqrt{2}]], yaklaşık 1.4142'dir; [[60^\\circ]]'de tam 2'dir çünkü hipotenüs komşu kenarın iki katıdır; açı [[90^\\circ]]'ye yaklaştıkça komşu kenar sıfıra doğru küçülür ve sekant sınırsız büyür."
                }
            ],
            "steps": [],
            "closingParagraphs": [
                "Örüntü monotondur: açıdaki her artış sekantı yükseltir ve oran her dar açı için 1'in üzerinde kalır. Tablodaki ölçüler örnekseldir; açıyı belirleyen üçgenin mutlak büyüklüğü değil orandır. Sekant bu yüzden üçgenin biçimini anlatır, ölçeğini değil."
            ],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "A açısı [[A]]",
                        "Komşu kenar [[b]]",
                        "Hipotenüs [[c]]",
                        "Sekant oranı"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "Yaklaşık 1.1547"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "Yaklaşık 1.4142"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "Yaklaşık 3.8637",
                            "Yaklaşık 3.8637"
                        ]
                    ]
                }
            ],
            "figures": [],
            "imgAlt": "30, 45, 60 derecede üç üçgen; sekant değerleri 1.1547, 1.4142, 2; açı büyüdükçe sekant yükselir",
            "figcaption": "A açısı büyüdükçe komşu kenar, hipotenüsün daha küçük bir payı hâline gelir; bu yüzden sec(A) yükselir."
        },
        "sec-hypotenuse": {
            "h2": "Sekant Kullanarak Hipotenüs Nasıl Bulunur",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant formülü, komşu kenar ve açı bilindiğinde hipotenüsü bulacak şekilde düzenlenebilir. [[\\sec(A)=c/b]] ile başlayın ve iki yanı da [[b]] ile çarpın:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs, komşu kenarın açının sekantıyla çarpımına eşittir. Komşu kenarı [[b=4\\,\\text{m}]] ve açıyı [[A=60^\\circ]] alın; [[\\sec(60^\\circ)=2]] olduğunu biliyoruz:"
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs bu açıda komşu kenarın iki katıdır; bu, 30-60-90 geometrisiyle uyumludur: 30 derecenin karşısındaki kenar hipotenüsün yarısıdır. Komşu kenar da yine düzenlenerek aynı şekilde bulunabilir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüsü [[c=10\\,\\text{m}]] ve [[A=60^\\circ]] alın: [[b=10/2]], yani [[\\boxed{b=5\\,\\text{m}}]]. Bunlar aynı formülün matematiksel düzenlemeleridir. Bu sayfadaki hesaplayıcı, kenar uzunluklarından sekant oranını döndürür; eksik kenarları doğrudan hesaplamaz."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-recover": {
            "h2": "Sekant Oranından Açı Nasıl Bulunur",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant oranı ile açı farklı büyüklüklerdir: biri kenarların birimsiz karşılaştırması, diğeri dereceyle ölçülür. Sekant oranı biliniyorsa, tersiyle kosinüsü geri kazanın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "Sonra ters kosinüs açıyı döndürür:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=1.25]] verildiğinde önce kosinüsü hesaplayın: [[\\cos(A)=1/1.25=0.8]]. Sonra [[A=\\cos^{-1}(0.8)]], yani [[\\boxed{A\\approx36.87^\\circ}]]. Bu, sekant oranı hesaplayıcının doğrudan yapmadığı ayrı bir açı hesabıdır. Cevap derece bekleniyorsa bilimsel hesap makinenizi dereceye alın; radyan modunda aynı girdi yaklaşık 0.6435 döndürür, aynı açı farklı birimde."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-mistakes": {
            "h2": "Sekant Hesaplarken Yapılan Yaygın Hatalar",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant hatalarının çoğu, çevrilmiş bir kesirden, yanlış etiketlenmiş bir kenardan ya da birim kaymasından gelir. Sonuca güvenmeden önce bu listeyi gözden geçirin."
                }
            ],
            "steps": [
                "<strong>Formülü ters çevirip [[c/b]] yerine [[b/c]] hesaplama.</strong> En yaygın hata budur ve sekant yerine kosinüs döndürür. [[c=5]] ve [[b=4]] ile yanlış sıra 0.8 verir; doğru sıra 1.25 verir.",
                "<strong>Sekantı kosinüsle karıştırma.</strong> Kosinüs, komşu bölü hipotenüstür; sekant onun tam tersidir. Cevap 1'in altında çıkıyorsa neredeyse kesinlikle kosinüstür, sekant değil.",
                "<strong>Sekantı kosekantla karıştırma.</strong> İkisi de payda hipotenüsü kullanır, bu yüzden benzer görünür. Sekant komşu kenara [[b]] böler; kosekant karşı kenara [[a]] böler. Problemin gerçekten hangi kenarı verdiğini kontrol edin.",
                "<strong>Komşu kenar yerine karşı kenarı kullanma.</strong> [[c/a]] bölmek kosekant hesaplar. [[c=5]] ve [[a=3]] ile bu 1.6667 verir; doğru bir kosekant ama yanlış bir sekant.",
                "<strong>Payda hipotenüs olmayan bir kenarı kullanma.</strong> Sekantın payında her zaman hipotenüs olur. Kenar bölü kenar tanjant ya da kotanjanttır; kenar bölü hipotenüs sinüs ya da kosinüstür.",
                "<strong>Komşu ve karşı kenarları karıştırma.</strong> Referans açı [[A]]'den [[B]]'ye değiştiğinde etiketler yer değiştirir. [[b]]'yi atamadan önce problemin hangi açıyı adlandırdığını mutlaka doğrulayın.",
                "<strong>Sekantın dereceyle ölçülen bir açı olduğunu varsayma.</strong> 1.25 sonucu bir orandır, [[1.25^\\circ]] değil. Onu derece gibi değerlendirmek, sonraki her hesaba saçmalık katar.",
                "<strong>Oranı metre ya da santimetreyle bildirme.</strong> Birimler bölmede sadeleşir, bu yüzden '1.25 m' yanlıştır. Yalın sayıyı yazın; birimleri ait oldukları yerde, girdi ölçümlerinde tutun.",
                "<strong>Sıfır ya da negatif kenar uzunlukları girme.</strong> Üçgenin sıfır ya da negatif kenarı olamaz; bu girdiler geçerli bir uç durum değil, veri giriş hatası ya da eksik ölçüm sinyali verir.",
                "<strong>Hipotenüsten uzun bir komşu kenar girme.</strong> Hipotenüs her zaman en uzun kenardır. [[b \\gt c]] ise girdiler yer değiştirmiştir ya da üçgen imkânsızdır.",
                "<strong>Ölçü birimlerini karıştırma.</strong> 5 m hipotenüs ile 40 cm komşu kenar 0.125 verir, anlamsız bir sayı. Önce tek birime çevirin: 5 m ve 4 m doğru 1.25'i verir.",
                "<strong>Çok erken yuvarlama.</strong> Ara bir bölmeyi iki ondalığa yuvarlayıp hesaba devam etmek hatayı katmerler. Her adımda tam duyarlılığı koruyun, yalnızca nihai cevabı yuvarlayın.",
                "<strong>Bir dik üçgende sekantın 1 olması gerektiğini varsayma.</strong> Hiçbir dik üçgenin sekantı tam 1 değildir. 1'in üzerinde bir değer bekleyin ve tam 1'i, girdilerin ters çevrildiğinin ya da üçgenin yozlaştığının sinyali sayın.",
                "<strong>Karşılıklı kosinüsü ters kosinüsle karıştırma.</strong> [[1/\\cos(A)]] sekanttır, bir oran; [[\\cos^{-1}]] ters kosinüstür, bir açı döndürür. Benzer adlar gerçek hatalara yol açar; gösterimi dikkatle okuyun.",
                "<strong>Sekantın tek başına üçgenin mutlak boyutlarını belirlediğini varsayma.</strong> Sekant biçimi anlatır, büyüklüğü değil: 5 cm hipotenüslüden 5 km hipotenüslüye, sayısız üçgen 1.25 sekantını paylaşır. Oran oranları sabitler; gerçek uzunluklar için en az bir kenar ölçümü gerekir."
            ],
            "closingParagraphs": [
                "<strong>Yanlış ile Doğru: Çözümlü Bir Karşılaştırma</strong> Hipotenüsü [[c=5]] ve komşu kenarı [[b=4]] alın:",
                "<strong>Yanlış:</strong> [[4/5=0.8]]. Bu kosinüstür, sekant değil. Pay ile payda ters çevrilmiş.",
                "<strong>Doğru:</strong> [[\\sec(A)=5/4=1.25]].",
                "<strong>Doğrulayın:</strong> [[\\cos(A)=0.8]] ve [[1/0.8=1.25]]. Karşılıklı kontrol sonucu doğrular ve cevap, her geçerli sekantın olması gerektiği gibi 1'in üzerindedir."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "Sekant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Geçerli, yozlaşmamış bir dik üçgen, hipotenüsün kesinlikle en uzun olduğu pozitif kenarlar ister: [[0 \\lt b \\lt c]]; bu yüzden sekant sonucu 1'den büyük olmalıdır:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Her iki ölçüm de uyumlu birimler kullanmalıdır. 1'e eşit ya da daha küçük bir sonuç genellikle ters çevrilmiş girdilere, yanlış kenar tanımlamaya, uyumsuz ölçümlere ya da geçersiz üçgen boyutlarına işaret eder."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 1: Kosinüsün Tersini Denetleyin"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=b/c]]'yi doğrulayın, sonra [[\\sec(A)=1/\\cos(A)]] olduğunu onaylayın. [[b=4]] ve [[c=5]] ile: [[\\cos(A)=4/5=0.8]], yani [[\\sec(A)=1/0.8=1.25]]. İki yol arasındaki eşleşmezlik, ters çevrilmiş bir kesre ya da yanlış etiketlenmiş bir kenara işaret eder."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 2: Pisagor Teoremini Denetleyin"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar biliniyor ya da gerekliyse [[a=\\sqrt{c^2-b^2}]] hesaplayın. [[b=4]] ve [[c=5]] için: [[a=\\sqrt{25-16}=3]] ve [[3^2+4^2=5^2]]. Bu, 3-4-5 dik üçgeninin boyutlarını doğrular. Karşı kenar burada bir doğrulama değeridir, temel sekant formülünün parçası değildir."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 3: Ters Kosinüsle Denetleyin"
                },
                {
                    "kind": "p",
                    "text": "1.25'lik bir sekant oranı için: [[A=\\cos^{-1}(1/1.25)]], yani [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Sekant 1'in ancak biraz üzerinde olduğundan açı [[45^\\circ]]'nin belirgin şekilde altında kalmalıdır; kalmıyorsa kenar etiketleri büyük olasılıkla yer değiştirmiştir. Yuvarlamadan küçük farklar doğabilir."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-vs": {
            "h2": "Sekant ile Kosinüs, Sinüs ve Kosekant",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Her oran, aynı referans açıyı ve kenar etiketlerini kullanarak farklı bir kenar çiftini karşılaştırır:"
                }
            ],
            "steps": [],
            "closingParagraphs": [
                "Sekant ile kosinüs karşılıklı çifttir: [[\\sec(A)=1/\\cos(A)]]. [[\\cos(A)=0.8]] ise [[\\sec(A)=1.25]] olur. Bir formül hipotenüs bölü komşu istediğinde, eğik bir uzunluğu yatay izdüşümüyle karşılaştırırken ya da bilinen ilişki en uzun kenardan başladığında sekanta uzanın; komşu bölü hipotenüs için kosinüse, hipotenüse karşı karşı kenar için sinüse, hipotenüs karşı kenarla karşılaştırıldığında ise kosekanta uzanın.",
                "Komşu oranlar için <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kosinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tanjant Oranı Hesaplayıcı</a>'ya, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kosekant Oranı Hesaplayıcı</a>'ya ve <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotanjant Oranı Hesaplayıcı</a>'ya bakın."
            ],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "Oran",
                        "Formül",
                        "Ne karşılaştırır"
                    ],
                    "rows": [
                        [
                            "Sinüs",
                            "sin(A) = a/c",
                            "Karşı kenar ile hipotenüs"
                        ],
                        [
                            "Kosinüs",
                            "cos(A) = b/c",
                            "Komşu kenar ile hipotenüs"
                        ],
                        [
                            "Tanjant",
                            "tan(A) = a/b",
                            "Karşı kenar ile komşu kenar"
                        ],
                        [
                            "Sekant",
                            "sec(A) = c/b",
                            "Hipotenüs ile komşu kenar"
                        ],
                        [
                            "Kosekant",
                            "csc(A) = c/a",
                            "Hipotenüs ile karşı kenar"
                        ],
                        [
                            "Kotanjant",
                            "cot(A) = b/a",
                            "Komşu kenar ile karşı kenar"
                        ]
                    ]
                }
            ],
            "figures": []
        },
        "sec-related": {
            "h2": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "Sinüs Oranı Hesaplayıcı"
                },
                {
                    "name": "Kosinüs Oranı Hesaplayıcı"
                },
                {
                    "name": "Tanjant Oranı Hesaplayıcı"
                },
                {
                    "name": "Kosekant Oranı Hesaplayıcı"
                },
                {
                    "name": "Kotanjant Oranı Hesaplayıcı"
                },
                {
                    "name": "Dik Üçgen Açı Hesaplayıcı"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Sekant Oranını Güvenle Kullanın",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekant, kosinüsün çevrilmiş biçimidir: hipotenüsü komşu kenara bölün; eğik uzunluğun yatay ayak izinden ne kadar daha uzun olduğunu anlatmış olursunuz. [[\\sec(A)=c/b]] formülü yalnızca iki ölçüm ister, cevap her zaman 1'den büyük birimsiz bir sayıdır ve referans açı büyüdükçe büyür. Eksik bir kenar gerektiğinde [[c=b\\sec(A)]] hipotenüsü geri kazandırır; açı gerektiğinde [[A=\\cos^{-1}(1/\\sec(A))]] onu geri kazandırır. Merdiven, kiriş, rampa ya da ders kitabı 3-4-5'i olsun, yöntem hiç değişmez: hipotenüsü belirleyin, komşu kenarı belirleyin, bölün ve kosinüsün tersiyle doğrulayın."
                }
            ]
        }
    },
    "faqs": [
        {
            "question": "Bir dik üçgende sekant formülü nedir?",
            "answer": "sec(A) = c / b: A açısının hipotenüsünü A açısının komşu kenarına bölün. Hipotenüs 5 cm, komşu kenar 4 cm olduğunda sonuç 5/4 = 1.25 olur. Bu ondalık sayı tam cevaptır; birimsiz bir orandır, bir açı değildir."
        },
        {
            "question": "Sekant ile kosinüs nasıl ilişkilidir?",
            "answer": "Sekant, kosinüsün tersidir: sec(A) = 1 / cos(A). cos(A) = 4/5 = 0.8 ise sec(A) = 1/0.8 = 1.25 olur. İki oran aynı açıyı zıt bakış açılarından anlatır ve karşılıklı kontrol, bir sekant hesabını doğrulamanın en hızlı yoludur."
        },
        {
            "question": "Sekant bir dik üçgende neden 1'den büyüktür?",
            "answer": "Geçerli, yozlaşmamış bir dik üçgende hipotenüs iki kenardan da kesinlikle uzundur; yani c > b > 0 olur. Daha büyük bir uzunluğu daha küçük olana bölmek her zaman 1'in üzerinde bir oran verir: her dar referans açı için sec(A) = c/b > 1 olur."
        },
        {
            "question": "Sekant 1'e eşit olabilir mi?",
            "answer": "Sıradan bir dar açıyla gerçek bir dik üçgende olmaz. Tam 1'lik bir sekant, hipotenüsün komşu kenara eşit olmasını gerektirir; bu da üçgeni düz bir çizgiye yassıltır. 1 değeri, A açısı 0 dereceye doğru küçülürken yaklaşılan bir sınır değeridir; gerçek bir üçgenin ürettiği bir değer asla değildir."
        },
        {
            "question": "1.25'lik bir sekant değeri ne anlama gelir?",
            "answer": "Hipotenüs, komşu kenarın 1.25 katı uzunluktadır, yani %25 daha uzundur. Bu, açının 1.25 derece olduğu anlamına gelmez ve üçgenin 1.25 birim ölçtüğü anlamına da gelmez. Sekant, iki uzunluğun birimsiz karşılaştırmasıdır."
        },
        {
            "question": "Sekantın ölçü birimi var mıdır?",
            "answer": "Hayır. Her iki girdi de aynı birimde uzunluk olduğu için birimler sadeleşir: 5 m / 4 m = 1.25, tıpkı 500 cm / 400 cm = 1.25 gibi. Sekantı derece, metre ya da fit eklemeden yalın bir sayı olarak bildirin."
        },
        {
            "question": "Sekant kenar uzunluklarından nasıl hesaplanır?",
            "answer": "Hipotenüs c'yi ve komşu kenar b'yi aynı birimde ölçün, ikisinin de pozitif olduğunu ve c'nin b'den uzun olduğunu doğrulayın, sonra bölün: sec(A) = c / b. Bu sayfada hipotenüsü ilk alana, komşu kenarı ikinci alana girin, uyumlu birimler seçin ve Calculate sec(A) düğmesine tıklayın."
        },
        {
            "question": "Sekant kullanarak hipotenüs nasıl bulunur?",
            "answer": "Formülü c = b * sec(A) olacak şekilde düzenleyin. Komşu kenar 4 m ve A açısı 60 derece ise sec(60 deg) = 2 olur; yani c = 4 * 2 = 8 m. Bu el ile yapılan bir düzenlemedir; bu sayfanın hesaplayıcısı eksik kenarları değil, kenar uzunluklarından oranı döndürür."
        },
        {
            "question": "Sekant oranından açı nasıl bulunur?",
            "answer": "Kosinüs oranını elde etmek için tersini alın, ardından ters kosinüs uygulayın: A = cos^-1(1 / sec(A)). sec(A) = 1.25 için kosinüs oranı 0.8'dir; yani A = cos^-1(0.8), yaklaşık 36.87 derece. Önce bilimsel hesap makinenizi derece moduna alın. Bu sayfanın hesaplayıcısı oranı döndürür, açıyı değil."
        },
        {
            "question": "Sekant ile kosekant arasındaki fark nedir?",
            "answer": "Sekant, hipotenüsü komşu kenara böler (c/b); kosekant, hipotenüsü karşı kenara böler (c/a). İkisi de hipotenüsü içeren karşılıklı oranlardır; ancak farklı kenarlar kullanırlar, bu yüzden farklı soruları yanıtlarlar ve asla birbirinin yerine kullanılamazlar."
        },
        {
            "question": "Karşı kenarı bilmeden sekant hesaplanabilir mi?",
            "answer": "Evet. Temel sekant formülü yalnızca hipotenüsü ve komşu kenarı kullanır; karşı kenar hesaba hiç girmez. Karşı kenar ancak Pisagor teoremiyle üçgeni doğrularken ya da sinüs, tanjant veya kosekant işin içine girdiğinde işe yarar."
        },
        {
            "question": "Sekant pratik ölçümlerde nasıl kullanılır?",
            "answer": "Sekant, eğik bir uzunluğu yatay izdüşümüyle karşılaştırır: bir merdiveni zemin uzaklığıyla, bir çatı kirişini yatay uzanımıyla, bir kabloyu uç noktalarının yatay ayrımıyla. Oran, eğik yolun izdüşümünden ne kadar daha uzun olduğunu söyler; bu da yatay planlardan malzeme uzunluklarını tahmin etmek için kullanışlıdır."
        }
    ],
    "faqHeading": "Sık Sorulan Sorular",
    "relatedHeading": "İlgili Trigonometrik Hesaplayıcıları Keşfedin"
},
"sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
        "sec-intro": "Vad är en sekanskvotsräknare?",
        "sec-triangle": "Förstå den angränsande sidan och hypotenusan",
        "sec-whatis": "Förstå sekanskvoten",
        "sec-formula": "Hur sekansformeln fungerar",
        "sec-howto": "Så använder du sekanskvotsräknaren",
        "sec-examples": "Stegvisa exempel på beräkning av sekans",
        "sec-applications": "Verkliga exempel på användning av sekanskvoten",
        "sec-angle": "Förstå sambandet mellan sekans och vinkelstorlek",
        "sec-hypotenuse": "Så hittar du hypotenusan med sekans",
        "sec-recover": "Så hittar du en vinkel från en sekanskvot",
        "sec-mistakes": "Vanliga misstag vid beräkning av sekans",
        "sec-verify": "Så kontrollerar du om ditt sekansresultat är giltigt",
        "sec-vs": "Sekans jämfört med cosinus, sinus och cosekans",
        "sec-related": "Utforska relaterade trigonometriska räknare",
        "sec-faq": "Vanliga frågor"
    },
    "sections": {
        "sec-intro": {
            "h2": "Vad är en sekanskvotsräknare?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "En sekanskvotsräknare besvarar en fråga: för en spetsig vinkel i en rätvinklig triangel, hur förhåller sig den längsta sidan till sidan vid vinkeln? Mata in hypotenusan och den angränsande sidan, så delar verktyget hypotenusan med den angränsande sidan och returnerar [[\\sec(A)=c/b]]. Med en hypotenusa på 5 cm och en angränsande sida på 4 cm blir beräkningen [[5/4=1.25]]: hypotenusan är 1.25 gånger så lång som den angränsande sidan, vilket är ett annat sätt att säga att den är 25 procent längre. Det decimaltalet är det fullständiga svaret. Det är en dimensionslös kvot, eftersom centimetrarna tar ut varandra i divisionen, och det är inte en vinkel i grader, så läs aldrig 1.25 som [[1.25^\\circ]]. Den motstående sidan ingår aldrig i denna beräkning; hypotenusan och den angränsande sidan räcker. Sekans är också det reciproka värdet av cosinus, vilket är varför många läroböcker presenterar det som den vända formen av [[\\cos(A)]]."
                }
            ]
        },
        "sec-triangle": {
            "h2": "Förstå den angränsande sidan och hypotenusan",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "Vad är en rätvinklig triangel?"
                },
                {
                    "kind": "p",
                    "text": "En rätvinklig triangel har en vinkel på exakt [[90^\\circ]], vinkeln mellan två vinkelräta linjer, som en vägg som möter ett plant golv. Hypotenusan ligger mitt emot den räta vinkeln och är alltid den längsta sidan, eftersom den måste sträcka sig över hela diagonalen genom hörnet. De andra två vinklarna delar på de återstående 90 graderna, så båda är spetsiga. De två benen möts i den räta vinkeln, vinkelräta mot varandra, och det är deras förhållande till hypotenusan som gör trigonometrin för rätvinkliga trianglar möjlig."
                },
                {
                    "kind": "h3",
                    "text": "Vad är den angränsande sidan?"
                },
                {
                    "kind": "p",
                    "text": "Den angränsande sidan [[b]] är det ben som vidrör referensvinkeln [[A]] utan att vara hypotenusan. I praktiska problem spelar den ofta rollen som den horisontella sträckan: markavståndet från en steges fot till en vägg, den horisontella projektionen av en taksparre eller den horisontella separationen mellan två mätpunkter. Den hamnar i nämnaren i sekansformeln. Vilket ben som räknas som angränsande beror på den valda referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[B]] kastar om etiketterna angränsande och motstående."
                },
                {
                    "kind": "h3",
                    "text": "Vad är hypotenusan?"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan [[c]] är sidan mitt emot den räta vinkeln: i varje figur står den mitt emot den lilla kvadraten som markerar hörnet [[90^\\circ]], och den är strängt längre än vartdera benet. I praktiska problem spelar den ofta rollen som en lutande längd: en stege, en rampyta, en sparre, en kabel, ett diagonalt stag eller en rak linje. Den hamnar i täljaren i sekansformeln, vilket är varför varje sekansvärde blir större än 1."
                },
                {
                    "kind": "h3",
                    "text": "Vad är den motstående sidan?"
                },
                {
                    "kind": "p",
                    "text": "Den motstående sidan [[a]] ligger direkt mitt emot vinkel [[A]] och vidrör aldrig dess spets. Den spelar ingen roll i den grundläggande sekansberäkningen, vilket är varför räknaren aldrig ber om den. Den blir relevant när Pythagoras sats används för att verifiera att de två kända längderna bildar en äkta rätvinklig triangel, och den står i centrum för sinus, tangens och cosekans, där den motstående sidan är en av de två arbetssidorna."
                }
            ],
            "imgAlt": "Rätvinklig triangel med vinkel A längst ner till vänster, gul hypotenusa c, blå angränsande sida b, sec(A)=c/b",
            "figcaption": "Vinkel A sitter längst ner till vänster; sekansen använder den gula hypotenusan c och den blå angränsande sidan b, inte den motstående sidan a."
        },
        "sec-whatis": {
            "h2": "Förstå sekanskvoten",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekansen jämför hela den lutande sidan med benet vid referensvinkeln:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Här är [[\\sec(A)]] sekansen av vinkel [[A]], [[c]] är hypotenusan och [[b]] är den angränsande sidan: hur många gånger den angränsande sidan ryms i hypotenusan."
                },
                {
                    "kind": "h3",
                    "text": "Sekans som reciproka värdet av cosinus"
                },
                {
                    "kind": "p",
                    "text": "Cosinus delar den angränsande sidan med hypotenusan, [[\\cos(A)=b/c]]. Att ta reciproka värdet vänder på bråket, [[1/\\cos(A)=c/b]], vilket är exakt sekansformeln:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Med [[\\cos(A)=4/5=0.8]] är det reciproka värdet [[\\sec(A)=1/0.8=1.25]]: samma triangel, beskriven från motsatt håll. Denna distinktion spelar roll eftersom invers cosinus, skrivet [[\\cos^{-1}]], är en annan idé: den återfår en vinkel från ett cosinusvärde, medan [[1/\\cos(A)]] är den reciproka cosinussen, en kvot, inte en vinkel."
                },
                {
                    "kind": "h3",
                    "text": "Vad betyder ett sekansvärde på 1.25?"
                },
                {
                    "kind": "p",
                    "text": "En sekans på 1.25 betyder att hypotenusan är 1.25 gånger så lång som den angränsande sidan. Den procentuella skillnaden är [[(1.25-1)\\times100=25]], så hypotenusan är 25 procent längre än den angränsande sidan. Det betyder inte att vinkeln är [[1.25^\\circ]], och det betyder inte att triangeln mäter 1.25 enheter av någonting. Sekans är en jämförelse, inte ett mått."
                },
                {
                    "kind": "h3",
                    "text": "Varför sekans är större än 1"
                },
                {
                    "kind": "p",
                    "text": "I en giltig, icke-degenererad rätvinklig triangel är hypotenusan längre än vartdera benet, så [[c \\gt b \\gt 0]]. Att dela hypotenusan med den angränsande sidan ger därför en kvot större än 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Ett resultat på exakt 1 är inte möjligt för en vanlig spetsig referensvinkel i en icke-degenererad rätvinklig triangel, eftersom det skulle kräva att hypotenusan är lika med den angränsande sidan, vilket plattar till triangeln till en linje. Värdet 1 är ett gränsvärde, som närmas endast när vinkeln krymper mot [[0^\\circ]]."
                },
                {
                    "kind": "h3",
                    "text": "Varför sekans är reciproka värdet av cosinus"
                },
                {
                    "kind": "p",
                    "text": "Sambandet följer direkt ur de två formlerna. Cosinus delar angränsande med hypotenusa, sekans delar hypotenusa med angränsande:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "Att multiplicera dem tar ut allt och ger 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "Denna identitet är ett praktiskt verifieringsverktyg: beräkna cosinus från samma sidor, ta dess reciproka värde, och det måste stämma exakt med sekansresultatet. En avvikelse pekar på ett vänt bråk eller en felmärkt sida."
                },
                {
                    "kind": "h3",
                    "text": "Varför sekans inte har någon enhet"
                },
                {
                    "kind": "p",
                    "text": "Sekans delar en längd med en annan, så enheterna tar ut varandra. Till exempel:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "Metrarna försvinner och lämnar ett rent tal. Samma kvot uppträder med 500 cm och 400 cm, eller med vilket par av matchande enheter som helst, vilket är varför blandade enheter, som en hypotenusa i meter med en angränsande sida i centimeter, bryter beräkningen innan den börjar."
                },
                {
                    "kind": "h3",
                    "text": "Sekans jämfört med cosekans"
                },
                {
                    "kind": "p",
                    "text": "Sekans och cosekans är båda reciproka kvoter som använder hypotenusan i täljaren, men de använder olika ben i nämnaren:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "Sekans parar hypotenusan med den angränsande sidan; cosekans parar hypotenusan med den motstående sidan. De är inte utbytbara, och att välja fel svarar på en annan fråga om triangeln."
                }
            ],
            "imgAlt": "Tre steg: 3-4-5-triangel, cosinus cos(A)=4/5=0.8, sekans sec(A)=5/4=1.25, det reciproka förhållandet",
            "figcaption": "Tre steg: märk 3-4-5-triangeln, beräkna cosinus cos(A) = 4/5, vänd sedan på bråket för att få sec(A) = 5/4."
        },
        "sec-formula": {
            "h2": "Hur sekansformeln fungerar",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Definitionen börjar i ord och går sedan till symboler. Sekans är hypotenusan delad med den angränsande sidan:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "I standardnotationen blir detta:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan hör hemma i täljaren eftersom sekansen frågar 'hur lång är den lutande sidan relativt sin horisontella projektion?', och den angränsande sidan hör hemma i nämnaren eftersom det är den referenslängd som jämförs med."
                },
                {
                    "kind": "h3",
                    "text": "Fullständigt löst exempel: en 3-4-5 rätvinklig triangel"
                },
                {
                    "kind": "p",
                    "text": "Givet en angränsande sida på [[b=4\\,\\text{cm}]], en motstående sida på [[a=3\\,\\text{cm}]] och en hypotenusa på [[c=5\\,\\text{cm}]], arbeta igenom formeln steg för steg."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 1: Skriv formeln.</strong> [[\\sec(A)=c/b]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 2: Sätt in de kända värdena.</strong> [[\\sec(A)=5/4]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 3: Dividera.</strong> [[\\boxed{\\sec(A)=1.25}]]."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 4: Tolka resultatet.</strong> Hypotenusan är 1.25 gånger den angränsande sidan, vilket gör den 25 procent längre. En 5 cm lång stege som spänner över ett 4 m horisontellt avstånd beter sig så här; geometrin bryr sig inte om enheten, bara om proportionen."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 5: Verifiera med cosinus.</strong> [[\\cos(A)=4/5=0.8]], och [[1/0.8=1.25]]. Den reciproka kontrollen bekräftar sekansresultatet, eftersom cosinus och sekans är exakta inverser av varandra."
                },
                {
                    "kind": "p",
                    "text": "<strong>Steg 6: Verifiera triangeln.</strong> [[3^2+4^2=5^2]], vilket är [[9+16=25]]. Sidlängderna uppfyller Pythagoras sats, så de bildar en äkta rätvinklig triangel och sekansvärdet är tillförlitligt."
                }
            ]
        },
        "sec-howto": {
            "h2": "Så använder du sekanskvotsräknaren",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Räknaren ovan tar två inmatningar, hypotenusan [[c]] och den angränsande sidan [[b]], och returnerar [[\\sec(A)]]. Följ dessa steg i ordning."
                }
            ],
            "steps": [
                "<strong>Identifiera referensvinkeln [[A]].</strong> Varje sidetikett i kvoten definieras relativt denna vinkel, så välj den innan du rör sidlängderna.",
                "<strong>Lokalisera hypotenusan [[c]].</strong> Den ligger mitt emot den räta vinkeln och är triangelns längsta sida; i figurer är det den lutande sidan.",
                "<strong>Lokalisera den angränsande sidan [[b]].</strong> Den vidrör vinkel [[A]] och är inte hypotenusan; den är ett av de två vinkelräta benen.",
                "<strong>Skaffa eller mät båda sidlängderna.</strong> Mät med samma instrument och samma enhet, eller konvertera det ena måttet innan du fortsätter.",
                "<strong>Mata in hypotenusan i det första inmatningsfältet.</strong> Detta är bråkets täljare, så ett misstag här förskjuter hela svaret.",
                "<strong>Mata in den angränsande sidan i det andra inmatningsfältet.</strong> Detta är nämnaren; det måste vara sidan vid vinkel [[A]], inte sidan mitt emot den.",
                "<strong>Välj kompatibla måttenheter med de tillgängliga enhetsväljarna.</strong> Båda fälten måste använda samma enhet, eller en konverterad motsvarighet, annars blir kvoten fel.",
                "<strong>Bekräfta att båda måtten är positiva.</strong> En noll- eller negativ längd har ingen betydelse i en triangel och signalerar ett inmatningsfel.",
                "<strong>Kontrollera att hypotenusan är längre än den angränsande sidan.</strong> Om den inte är det är sidorna felmärkta eller så kan talen inte bilda en rätvinklig triangel.",
                "<strong>Klicka på Calculate sec(A).</strong> Verktyget utför divisionen [[c/b]] och visar kvoten.",
                "<strong>Läs av den resulterande sekanskvoten.</strong> Det är ett dimensionslöst decimaltal, vanligtvis med fyra decimaler, redo att användas i fortsatta beräkningar.",
                "<strong>Bekräfta att resultatet är större än 1.</strong> För en giltig, icke-degenererad rätvinklig triangel med en spetsig referensvinkel gäller [[\\sec(A) \\gt 1]]; ett värde på eller under 1 betyder att något gick fel uppströms.",
                "<strong>Använd Reset när du vill rensa inmatningarna och påbörja en ny beräkning.</strong> Fälten och resultatet återgår till sitt starttillstånd."
            ],
            "closingParagraphs": [
                "Räknaren behöver varken den motstående sidan eller en vinkel som inmatning, eftersom den grundläggande sekanskvoten är helt bestämd av två längder. Den återfår inte heller vinklar eller saknade sidor; för dem visar de omställda formlerna längre ner i guiden den manuella vägen."
            ]
        },
        "sec-examples": {
            "h2": "Stegvisa exempel på beräkning av sekans",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Dessa fyra exempel använder klassiska trianglar vars sekansvärden är värda att memorera, eftersom de dyker upp ständigt i trigonometrin."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 1: en 3-4-5 rätvinklig triangel"
                },
                {
                    "kind": "p",
                    "text": "Givet [[b=4\\,\\text{cm}]], [[a=3\\,\\text{cm}]] och [[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är 25 procent längre än den angränsande sidan. Detta är det vanligaste sekans-exemplet i läroböcker, och resultatet 1.25 är exakt."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 2: en 5-12-13 rätvinklig triangel"
                },
                {
                    "kind": "p",
                    "text": "Givet en angränsande sida på [[b=12\\,\\text{m}]], en motstående sida på [[a=5\\,\\text{m}]] och en hypotenusa på [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är ungefär 8.33 procent längre än den angränsande sidan. Denna triangel dyker upp i byggproblem eftersom 13 ligger nära en flack taklutning."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 3: en 45-45-90 triangel"
                },
                {
                    "kind": "p",
                    "text": "Givet en angränsande sida på [[b=1\\,\\text{cm}]], en motstående sida på [[a=1\\,\\text{cm}]] och en hypotenusa på [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är ungefär 1.4142 gånger vartdera benet. Vid 45 grader är de två benen lika, så sekansen är lika med cosekansen här, båda [[\\sqrt{2}]]."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 4: en 30-60-90 triangel"
                },
                {
                    "kind": "p",
                    "text": "För referensvinkel [[A=30^\\circ]], använd en angränsande sida på [[b=\\sqrt{3}\\,\\text{cm}]], en motstående sida på [[a=1\\,\\text{cm}]] och en hypotenusa på [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är ungefär 15.47 procent längre än den angränsande sidan. Observera att samma 2:1-hypotenuskvot uppträder vid 60 grader med sidorna ombytta, där sekansen blir 2."
                }
            ]
        },
        "sec-applications": {
            "h2": "Verkliga exempel på användning av sekanskvoten",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekansen gör nytta överallt där en lutande längd måste jämföras med sin horisontella projektion. I varje exempel är den rätvinkliga triangeln en förenklad geometrisk modell av den verkliga situationen, och de angivna antagandena håller förenklingen ärlig."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 5: beräkning av en steges sekanskvot"
                },
                {
                    "kind": "p",
                    "text": "En stege är 5 m lång, och dess fot står 4 m från en vertikal vägg. Vinkeln [[A]] sitter mellan stegen och plant mark. Hypotenusan är själva stegen, [[c=5\\,\\text{m}]], och den angränsande sidan är det horisontella markavståndet, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Stegen är 25 procent längre än sin horisontella markprojektion. Denna kvot fastställer inte om stegen står säkert; stegsäkerhet beror på arbetsvinkeln och fotfästet, inte på sekansen ensam."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 6: beräkning av en taksparres sekanskvot"
                },
                {
                    "kind": "p",
                    "text": "En taksparre har en lutande längd på 6.5 m och en horisontell sträcka på 6 m. Sparren är hypotenusan, [[c=6.5\\,\\text{m}]], och den horisontella sträckan är den angränsande sidan, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Sparren är ungefär 8.33 procent längre än sin horisontella sträcka. Takläggare använder detta samband omvänt hela tiden: mät sträckan på ritningen, multiplicera med sekansen, beställ sparrvirke. Kvoten är inte en fullständig takkonstruktions- eller hållfasthetsbedömning."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 7: utvärdering av en ramps sekanskvot"
                },
                {
                    "kind": "p",
                    "text": "En förenklad ramp har en lutande längd på 9.5 m och en horisontell sträcka på 9 m. Den lutande ytan är hypotenusan, [[c=9.5\\,\\text{m}]], och den horisontella sträckan är den angränsande sidan, [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "Rampens lutande längd är ungefär 5.56 procent längre än dess horisontella projektion. Den flacka sekansen speglar en mild lutning, men kvoten ensam fastställer inte tillgänglighet eller överensstämmelse med byggregler."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 8: ett lantmäterimått"
                },
                {
                    "kind": "p",
                    "text": "En förenklad lantmäteritriangel har ett fågelvägsavstånd på 50 m och en horisontell separation på 40 m. Fågelvägsavståndet är hypotenusan, [[c=50\\,\\text{m}]], och den horisontella separationen är den angränsande sidan, [[b=40\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Fågelvägsavståndet är 25 procent längre än den horisontella separationen. Lantmätare tillämpar denna typ av horisontell reduktion rutinmässigt; verkligt fältarbete kan kräva ytterligare korrigeringar och mätprocedurer utöver den enkla modellen."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 9: en staglina som stöttar en stolpe"
                },
                {
                    "kind": "p",
                    "text": "En staglina är 13 m lång, och dess markankare står 12 m horisontellt från stolpen. Linan är hypotenusan, [[c=13\\,\\text{m}]], och det horisontella avståndet från stolpen till ankaret är den angränsande sidan, [[b=12\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "Linan är ungefär 8.33 procent längre än sin horisontella projektion. Detta säger hur mycket kabel du ska klippa till, inte hur mycket last den bär; linans dragkraft, ankarets hållfasthet och konstruktionssäkerhet behöver separat analys."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 10: beräkning av ett trappsparres sekanskvot"
                },
                {
                    "kind": "p",
                    "text": "Ett förenklat trappsparre är 5 m långt och spänner över en horisontell sträcka på 4 m. Sparret är hypotenusan, [[c=5\\,\\text{m}]], och den horisontella sträckan är den angränsande sidan, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Det diagonala sparret är 25 procent längre än den horisontella spännvidden. Snickare använder den omvända beräkningen för att kapa sparren efter ritningens mått. Kvoten verifierar inte trappans mått eller överensstämmelse med byggregler."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 11: förstå en kranarms horisontella projektion"
                },
                {
                    "kind": "p",
                    "text": "En förenklad kranarm har en längd på 10 m och en horisontell projektion på 6 m. Armen är hypotenusan, [[c=10\\,\\text{m}]], och den horisontella projektionen är den angränsande sidan, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Armen är ungefär 66.67 procent längre än sin horisontella projektion. Den branta sekansen speglar en hög arbetsvinkel. Kvoten fastställer inte kranens lyftkapacitet eller driftssäkerhet."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 12: ett rakt flygplanssegment"
                },
                {
                    "kind": "p",
                    "text": "För ett förenklat rakt flygsegment är banlängden 5 km och den horisontella förflyttningen 4 km. Flygbanan är hypotenusan, [[c=5\\,\\text{km}]], och den horisontella förflyttningen är den angränsande sidan, [[b=4\\,\\text{km}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Banlängden är 25 procent längre än den horisontella förflyttningen. Detta är ett idealiserat geometriskt exempel, inte en fullständig flygplaneringsberäkning; verklig flygplanering lägger till vind, höjdförändringar och luftrumsrutter."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 13: ett diagonalt mekaniskt stag"
                },
                {
                    "kind": "p",
                    "text": "Ett diagonalt stag har en längd på 2 m och en horisontell projektion på 1.2 m. Staget är hypotenusan, [[c=2\\,\\text{m}]], och den horisontella projektionen är den angränsande sidan, [[b=1.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "Staget är ungefär 66.67 procent längre än sin horisontella projektion. Kvoten beskriver installationens geometri; den avgör inte stagets hållfasthet eller lämplighet."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 14: beräkning av en vandringsleds sekanskvot"
                },
                {
                    "kind": "p",
                    "text": "En förenklad rak vandringssträcka har en banlängd på 100 m och en horisontell förflyttning på 80 m. Banan är hypotenusan, [[c=100\\,\\text{m}]], och den horisontella förflyttningen är den angränsande sidan, [[b=80\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Den raka banan är 25 procent längre än sin horisontella förflyttning. Verkliga vandringsleder innehåller kurvor och föränderliga lutningar, så betrakta detta som ett enda rakt segment, inte hela leden."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 15: ett markisstöd"
                },
                {
                    "kind": "p",
                    "text": "Ett markisstöd har en längd på 3 m och en horisontell projektion på 2.4 m. Stödet är hypotenusan, [[c=3\\,\\text{m}]], och den horisontella projektionen är den angränsande sidan, [[b=2.4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "Stödet är 25 procent längre än sin horisontella projektion. Beräkningen fastställer inte konstruktionens lämplighet; infästningens hållfasthet och vindlast behöver egna kontroller."
                },
                {
                    "kind": "h3",
                    "text": "Exempel 16: en kabel mellan två punkter"
                },
                {
                    "kind": "p",
                    "text": "En rak kabel spänner över en total längd på 25 m mellan två punkter med en horisontell separation på 24 m. Kabeln är hypotenusan, [[c=25\\,\\text{m}]], och den horisontella separationen är den angränsande sidan, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "Kabeln är ungefär 4.17 procent längre än den horisontella separationen. Den förenklade modellen förutsätter en rak kabel och ett rätvinkligt samband; en verklig kabel hänger, vilket lägger till längd utöver sekansmodellen."
                },
                {
                    "kind": "p",
                    "text": "Sekans är en matematisk kvot snarare än en fysikalisk storhet med enheter. Dess praktiska värde kommer från att jämföra en lutande längd med sin horisontella projektion, återfå längder när vinkeln är känd, verifiera triangelgeometri och använda formler som specifikt kräver sekans. Den certifierar aldrig på egen hand konstruktionssäkerhet, lastkapacitet, tillgänglighet eller överensstämmelse med ingenjörsregler."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Situation",
                        "c",
                        "b",
                        "Formel",
                        "Kvot",
                        "Längre med",
                        "Betydelse"
                    ],
                    "rows": [
                        [
                            "Stege",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Stegen är en fjärdedel längre än sitt markavstånd"
                        ],
                        [
                            "Taksparre",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "Sparren är något längre än den horisontella sträckan"
                        ],
                        [
                            "Ramp",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "Flack lutning, knappt längre än sträckan"
                        ],
                        [
                            "Lantmäteri",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "Fågelvägsavståndet överstiger det horisontella"
                        ],
                        [
                            "Staglina",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "Linlängd att klippa utifrån markavståndet"
                        ],
                        [
                            "Trappsparre",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "Diagonalt trappsparre mot horisontell spännvidd"
                        ],
                        [
                            "Kranarm",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "Brant arm, mycket längre än sin projektion"
                        ],
                        [
                            "Flygsegment",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "Idealiserad bana mot horisontell förflyttning"
                        ],
                        [
                            "Diagonalt stag",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "Staglängd mot sin horisontella projektion"
                        ],
                        [
                            "Vandringsled",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "Rak sträcka mot horisontellt kartavstånd"
                        ],
                        [
                            "Markisstöd",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "Stödlängd mot horisontell räckvidd"
                        ],
                        [
                            "Kabelspann",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "Nästan horisontell kabel, knappt någon extralängd"
                        ]
                    ]
                }
            ],
            "imgAlt": "Fyra paneler: stegekvot 1.25, ramp 1.0556, lantmäteri 1.25, kranarm 1.6667, var och en med en märkt rätvinklig triangel",
            "figcaption": "Fyra praktiska beräkningar: stege, ramp, lantmäteri och kranarm, var och en med sin triangel, formel och kvot."
        },
        "sec-angle": {
            "h2": "Förstå sambandet mellan sekans och vinkelstorlek",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekansen växer när referensvinkeln växer. Geometrin förklarar varför: när vinkel [[A]] är liten är den angränsande sidan nästan lika lång som hypotenusan, så kvoten ligger strax över 1. När vinkeln vidgas blir den angränsande sidan en mindre andel av hypotenusan, och kvoten klättrar. Vid [[45^\\circ]] är sekansen [[\\sqrt{2}]], ungefär 1.4142; vid [[60^\\circ]] är den exakt 2, eftersom hypotenusan är dubbelt så lång som den angränsande sidan; och när vinkeln närmar sig [[90^\\circ]] krymper den angränsande sidan mot noll och sekansen växer utan gräns."
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Vinkel [[A]]",
                        "Angränsande sida [[b]]",
                        "Hypotenusa [[c]]",
                        "Sekanskvot"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "Ungefär 1.1547"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "Ungefär 1.4142"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "Ungefär 3.8637",
                            "Ungefär 3.8637"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "Mönstret är monotont: varje ökning av vinkeln höjer sekansen, och kvoten stannar över 1 för varje spetsig vinkel. Måtten i tabellen är illustrativa; det är kvoten, inte triangelns absoluta storlek, som bestämmer vinkeln. Sekansen beskriver därför triangelns form, inte dess skala."
            ],
            "imgAlt": "Tre trianglar vid 30, 45, 60 grader med sekansvärdena 1.1547, 1.4142, 2; sekansen stiger när vinkeln växer",
            "figcaption": "När vinkel A växer utgör den angränsande sidan en mindre andel av hypotenusan, så sec(A) stiger."
        },
        "sec-hypotenuse": {
            "h2": "Så hittar du hypotenusan med sekans",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekansformeln kan ställas om för att hitta hypotenusan när den angränsande sidan och vinkeln är kända. Utgå från [[\\sec(A)=c/b]] och multiplicera båda sidor med [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är lika med den angränsande sidan multiplicerad med vinkelns sekans. Givet en angränsande sida på [[b=4\\,\\text{m}]] och en vinkel på [[A=60^\\circ]], och med vetskapen att [[\\sec(60^\\circ)=2]]:"
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Hypotenusan är dubbelt så lång som den angränsande sidan vid denna vinkel, vilket stämmer med 30-60-90-geometrin: sidan mitt emot 30 grader är hälften av hypotenusan. Den angränsande sidan kan hittas på samma sätt genom att ställa om igen:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Med en hypotenusa på [[c=10\\,\\text{m}]] och [[A=60^\\circ]]: [[b=10/2]], alltså [[\\boxed{b=5\\,\\text{m}}]]. Detta är matematiska omställningar av samma formel. Räknaren på denna sida returnerar sekanskvoten från sidlängder; den beräknar inte saknade sidor direkt."
                }
            ]
        },
        "sec-recover": {
            "h2": "Så hittar du en vinkel från en sekanskvot",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekanskvoten och vinkeln är olika storheter: den ena är en dimensionslös jämförelse av sidor, den andra mäts i grader. Om sekanskvoten är känd, återfå cosinus med reciproka värdet:"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "Invers cosinus returnerar sedan vinkeln:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Givet [[\\sec(A)=1.25]], beräkna först cosinus: [[\\cos(A)=1/1.25=0.8]]. Sedan [[A=\\cos^{-1}(0.8)]], vilket ger [[\\boxed{A\\approx36.87^\\circ}]]. Detta är en separat vinkelberäkning, inte något som sekanskvotsräknaren utför direkt. Ställ in den vetenskapliga räknaren på grader om svaret förväntas i grader; i radianläge returnerar samma inmatning ungefär 0.6435, samma vinkel i olika enheter."
                }
            ]
        },
        "sec-mistakes": {
            "h2": "Vanliga misstag vid beräkning av sekans",
            "blocks": [
                {
                    "kind": "p",
                    "text": "De flesta sekansfel kommer från ett vänt bråk, en felmärkt sida eller ett enhetsslarv. Gå igenom denna lista innan du litar på ett resultat."
                }
            ],
            "steps": [
                "<strong>Att vända formeln och beräkna [[b/c]] i stället för [[c/b]].</strong> Detta är det absolut vanligaste felet, och det returnerar cosinus i stället för sekans. Med [[c=5]] och [[b=4]] ger fel ordning 0.8; rätt ordning ger 1.25.",
                "<strong>Att blanda ihop sekans med cosinus.</strong> Cosinus är angränsande delat med hypotenusa; sekans är exakt det vända. Om svaret hamnar under 1 är det nästan säkert cosinus, inte sekans.",
                "<strong>Att blanda ihop sekans med cosekans.</strong> Båda använder hypotenusan i täljaren, så de ser likadana ut. Sekans delar med den angränsande sidan [[b]]; cosekans delar med den motstående sidan [[a]]. Kontrollera vilket ben uppgiften faktiskt ger.",
                "<strong>Att använda den motstående sidan i stället för den angränsande.</strong> Att dela [[c/a]] beräknar cosekans. Med [[c=5]] och [[a=3]] ger det 1.6667, en korrekt cosekans men en felaktig sekans.",
                "<strong>Att använda en sida som inte är hypotenusan i täljaren.</strong> Sekans har alltid hypotenusan överst. Ett ben över ett ben är tangens eller kotangens; ett ben över hypotenusan är sinus eller cosinus.",
                "<strong>Att blanda ihop angränsande och motstående sidor.</strong> Etiketterna byter plats när referensvinkeln ändras från [[A]] till [[B]]. Bekräfta alltid vilken vinkel uppgiften namnger innan du tilldelar [[b]].",
                "<strong>Att anta att sekansen är en vinkel mätt i grader.</strong> Ett resultat på 1.25 är en kvot, inte [[1.25^\\circ]]. Att behandla den som grader matar nonsens in i varje fortsättningsberäkning.",
                "<strong>Att rapportera kvoten med meter eller centimeter.</strong> Enheterna tar ut varandra i divisionen, så '1.25 m' är fel. Skriv det vanliga talet och behåll enheterna i inmatningsmåtten där de hör hemma.",
                "<strong>Att mata in noll eller negativa sidlängder.</strong> En triangel kan inte ha en noll- eller negativ sida, så dessa inmatningar signalerar ett inmatningsfel eller ett saknat mått, inte ett giltigt randfall.",
                "<strong>Att mata in en angränsande sida som är längre än hypotenusan.</strong> Hypotenusan är alltid den längsta sidan. Om [[b \\gt c]] är inmatningarna ombytta eller så är triangeln omöjlig.",
                "<strong>Att blanda måttenheter.</strong> En hypotenusa på 5 m med en angränsande sida på 40 cm ger 0.125, ett meningslöst tal. Konvertera till en enhet först: 5 m och 4 m ger korrekta 1.25.",
                "<strong>Att avrunda för tidigt.</strong> Att avrunda en mellanliggande division till två decimaler och sedan fortsätta beräkningen förstärker felet. Behåll full precision genom varje steg och avrunda endast det slutliga svaret.",
                "<strong>Att anta att sekansen måste vara 1 för en rätvinklig triangel.</strong> Ingen rätvinklig triangel har en sekans på exakt 1. Förvänta dig ett värde över 1, och behandla exakt 1 som en signal att inmatningarna var omvända eller att triangeln är degenererad.",
                "<strong>Att blanda ihop reciprok cosinus med invers cosinus.</strong> [[1/\\cos(A)]] är sekans, en kvot; [[\\cos^{-1}]] är invers cosinus, som returnerar en vinkel. De liknande namnen orsakar verkliga fel, så läs notationen noggrant.",
                "<strong>Att anta att sekansen ensam bestämmer triangelns absoluta dimensioner.</strong> Sekansen beskriver form, inte storlek: oändligt många trianglar delar en sekans på 1.25, från en 5 cm lång hypotenusa till en 5 km lång. Kvoten fixerar proportionerna; faktiska längder kräver minst ett sidmått."
            ],
            "closingParagraphs": [
                "<strong>Fel kontra rätt: en löst jämförelse.</strong> Givet en hypotenusa på [[c=5]] och en angränsande sida på [[b=4]]:",
                "<strong>Felaktigt:</strong> [[4/5=0.8]]. Detta är cosinus, inte sekans. Täljaren och nämnaren är omvända.",
                "<strong>Rätt:</strong> [[\\sec(A)=5/4=1.25]].",
                "<strong>Verifiera:</strong> [[\\cos(A)=0.8]], och [[1/0.8=1.25]]. Den reciproka kontrollen bekräftar resultatet, och svaret ligger över 1, som varje giltig sekans måste."
            ]
        },
        "sec-verify": {
            "h2": "Så kontrollerar du om ditt sekansresultat är giltigt",
            "blocks": [
                {
                    "kind": "p",
                    "text": "En giltig, icke-degenererad rätvinklig triangel kräver positiva sidor med hypotenusan strängt längst, [[0 \\lt b \\lt c]], så sekansresultatet måste vara större än 1:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "Båda måtten måste använda kompatibla enheter. Ett resultat på eller under 1 indikerar vanligtvis omvända inmatningar, felaktig sididentifiering, inkompatibla mått eller ogiltiga triangeldimensioner."
                },
                {
                    "kind": "h3",
                    "text": "Metod 1: kontrollera reciproka värdet av cosinus"
                },
                {
                    "kind": "p",
                    "text": "Verifiera [[\\cos(A)=b/c]] och bekräfta sedan [[\\sec(A)=1/\\cos(A)]]. Med [[b=4]] och [[c=5]]: [[\\cos(A)=4/5=0.8]], alltså [[\\sec(A)=1/0.8=1.25]]. En avvikelse mellan de två vägarna signalerar ett vänt bråk eller en felmärkt sida."
                },
                {
                    "kind": "h3",
                    "text": "Metod 2: kontrollera Pythagoras sats"
                },
                {
                    "kind": "p",
                    "text": "Om den motstående sidan är känd eller behövs, beräkna [[a=\\sqrt{c^2-b^2}]]. För [[b=4]] och [[c=5]]: [[a=\\sqrt{25-16}=3]], och [[3^2+4^2=5^2]]. Detta bekräftar dimensionerna i 3-4-5-triangeln. Den motstående sidan är här ett verifieringsvärde, inte en del av den primära sekansformeln."
                },
                {
                    "kind": "h3",
                    "text": "Metod 3: kontrollera med invers cosinus"
                },
                {
                    "kind": "p",
                    "text": "För en sekanskvot på 1.25: [[A=\\cos^{-1}(1/1.25)]], vilket är [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Eftersom sekansen ligger måttligt över 1 bör vinkeln hamna klart under [[45^\\circ]]; om den inte gör det är sidetiketterna troligen ombytta. Små skillnader kan bero på avrundning."
                }
            ]
        },
        "sec-vs": {
            "h2": "Sekans jämfört med cosinus, sinus och cosekans",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Varje kvot jämför ett annat sidpar, med samma referensvinkel och sidetiketter:"
                }
            ],
            "tables": [
                {
                    "headers": [
                        "Kvot",
                        "Formel",
                        "Vad den jämför"
                    ],
                    "rows": [
                        [
                            "Sinus",
                            "sin(A) = a/c",
                            "Motstående sida mot hypotenusan"
                        ],
                        [
                            "Cosinus",
                            "cos(A) = b/c",
                            "Angränsande sida mot hypotenusan"
                        ],
                        [
                            "Tangens",
                            "tan(A) = a/b",
                            "Motstående sida mot angränsande sida"
                        ],
                        [
                            "Sekans",
                            "sec(A) = c/b",
                            "Hypotenusan mot angränsande sida"
                        ],
                        [
                            "Cosekans",
                            "csc(A) = c/a",
                            "Hypotenusan mot motstående sida"
                        ],
                        [
                            "Kotangens",
                            "cot(A) = b/a",
                            "Angränsande sida mot motstående sida"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "Sekans och cosinus är det reciproka paret: [[\\sec(A)=1/\\cos(A)]]. Om [[\\cos(A)=0.8]] är [[\\sec(A)=1.25]]. Välj sekans när en formel kräver hypotenusa delad med angränsande, när du jämför en lutande längd med dess horisontella projektion eller när det kända sambandet utgår från den längsta sidan; välj cosinus för angränsande över hypotenusa, sinus för den motstående sidan mot hypotenusan och cosekans när hypotenusan jämförs med den motstående sidan.",
                "För de närliggande kvoterna, se <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinuskvotsräknaren</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Cosinuskvotsräknaren</a>, <a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">Tangenskvotsräknaren</a>, <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Cosekanskvotsräknaren</a> och <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotangenskvotsräknaren</a>."
            ]
        },
        "sec-related": {
            "h2": "Utforska relaterade trigonometriska räknare",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "Sinuskvotsräknare"
                },
                {
                    "name": "Cosinuskvotsräknare"
                },
                {
                    "name": "Tangenskvotsräknare"
                },
                {
                    "name": "Kosekanskvotsräknare"
                },
                {
                    "name": "Kotangenskvotsräknare"
                },
                {
                    "name": "Vinkelräknare för rätvinkliga trianglar"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Använd sekanskvoten med självförtroende",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sekans är den vända formen av cosinus: dela hypotenusan med den angränsande sidan och du har beskrivit hur mycket längre den lutande längden är än sin horisontella projektion. Formeln [[\\sec(A)=c/b]] behöver bara två mått, svaret är alltid ett dimensionslöst tal större än 1, och det växer när referensvinkeln växer. När en saknad sida behövs återfår [[c=b\\sec(A)]] hypotenusan; när vinkeln behövs återfår [[A=\\cos^{-1}(1/\\sec(A))]] den. Stege, sparre, ramp eller lärobokens 3-4-5, metoden ändras aldrig: identifiera hypotenusan, identifiera den angränsande sidan, dividera och verifiera med det reciproka värdet av cosinus."
                }
            ]
        }
    },
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade trigonometriska räknare",
    "faqs": [
        {
            "question": "Vad är sekansformeln för en rätvinklig triangel?",
            "answer": "sec(A) = c / b: dela hypotenusan c med den sida som är angränsande till vinkel A. Med en hypotenusa på 5 cm och en angränsande sida på 4 cm blir resultatet 5/4 = 1.25. Det decimaltalet är det fullständiga svaret, en dimensionslös kvot, inte en vinkel."
        },
        {
            "question": "Hur är sekans relaterat till cosinus?",
            "answer": "Sekans är det reciproka värdet av cosinus: sec(A) = 1 / cos(A). Om cos(A) = 4/5 = 0.8 är sec(A) = 1/0.8 = 1.25. De två kvoterna beskriver samma vinkel från vända perspektiv, och den reciproka kontrollen är det snabbaste sättet att verifiera en sekansberäkning."
        },
        {
            "question": "Varför är sekans större än 1 i en rätvinklig triangel?",
            "answer": "I en giltig, icke-degenererad rätvinklig triangel är hypotenusan strängt längre än vartdera benet, så c > b > 0. Att dela en större längd med en mindre ger alltid en kvot över 1: sec(A) = c/b > 1 för varje spetsig referensvinkel."
        },
        {
            "question": "Kan sekans vara lika med 1?",
            "answer": "Inte för en vanlig spetsig vinkel i en verklig rätvinklig triangel. En sekans på exakt 1 skulle kräva att hypotenusan är lika med den angränsande sidan, vilket plattar till triangeln till en linje. Värdet 1 är ett gränsvärde som närmas när vinkel A krymper mot 0 grader, aldrig ett värde som en äkta triangel producerar."
        },
        {
            "question": "Vad betyder ett sekansvärde på 1.25?",
            "answer": "Hypotenusan är 1.25 gånger så lång som den angränsande sidan, eller 25 procent längre. Det betyder inte att vinkeln är 1.25 grader, och det betyder inte att triangeln mäter 1.25 enheter. Sekans är en dimensionslös jämförelse av två längder."
        },
        {
            "question": "Har sekans någon måttenhet?",
            "answer": "Nej. Båda inmatningarna är längder mätta i samma enhet, så enheterna tar ut varandra: 5 m / 4 m = 1.25, exakt som 500 cm / 400 cm = 1.25. Rapportera sekansen som ett vanligt tal, aldrig med grader, meter eller fot bifogat."
        },
        {
            "question": "Hur beräknar man sekans från sidlängder?",
            "answer": "Mät hypotenusan c och den angränsande sidan b i samma enhet, bekräfta att båda är positiva och att c är längre än b, och dividera sedan: sec(A) = c / b. På denna sida matar du in hypotenusan i det första fältet och den angränsande sidan i det andra, väljer kompatibla enheter och klickar på Calculate sec(A)."
        },
        {
            "question": "Hur kan jag hitta hypotenusan med sekans?",
            "answer": "Ställ om formeln till c = b * sec(A). Om den angränsande sidan är 4 m och vinkel A är 60 grader är sec(60 deg) = 2, så c = 4 * 2 = 8 m. Detta är en manuell omställning; sidans räknare returnerar kvoten från sidlängder, inte saknade sidor."
        },
        {
            "question": "Hur kan jag hitta en vinkel från en sekanskvot?",
            "answer": "Ta reciproka värdet för att få cosinuskvoten och tillämpa sedan invers cosinus: A = cos^-1(1 / sec(A)). För sec(A) = 1.25 är cosinuskvoten 0.8, så A = cos^-1(0.8), ungefär 36.87 grader. Ställ först in den vetenskapliga räknaren på grader. Sidans räknare returnerar kvoten, inte vinkeln."
        },
        {
            "question": "Vad är skillnaden mellan sekans och cosekans?",
            "answer": "Sekans delar hypotenusan med den angränsande sidan (c/b); cosekans delar hypotenusan med den motstående sidan (c/a). Båda är reciproka kvoter som involverar hypotenusan, men de använder olika ben, så de besvarar olika frågor och är aldrig utbytbara."
        },
        {
            "question": "Kan jag beräkna sekans utan att känna till den motstående sidan?",
            "answer": "Ja. Den grundläggande sekansformeln använder bara hypotenusan och den angränsande sidan, så den motstående sidan ingår aldrig i beräkningen. Den motstående sidan blir användbar endast när Pythagoras sats används för att verifiera triangeln eller när sinus, tangens eller cosekans kommer in i arbetet."
        },
        {
            "question": "Hur används sekans i praktiska mätningar?",
            "answer": "Sekans jämför en lutande längd med dess horisontella projektion: en stege mot sitt markavstånd, en taksparre mot sin horisontella sträcka, en kabel mot den horisontella separationen mellan dess ändpunkter. Kvoten säger hur mycket längre den lutande banan är än sin projektion, vilket är användbart för att uppskatta materiallängder från horisontella ritningar."
        }
    ]
},
"zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
        "sec-intro": "什么是正割比计算器？",
        "sec-triangle": "理解邻边与斜边",
        "sec-whatis": "理解正割比",
        "sec-formula": "正割公式的工作原理",
        "sec-howto": "如何使用正割比计算器",
        "sec-examples": "正割计算分步示例",
        "sec-applications": "正割比的实际应用示例",
        "sec-angle": "理解正割与角度大小的关系",
        "sec-hypotenuse": "如何用正割求斜边",
        "sec-recover": "已知正割比时如何求角度",
        "sec-mistakes": "计算正割时的常见错误",
        "sec-verify": "如何验证正割结果是否有效",
        "sec-vs": "正割与余弦、正弦和余割",
        "sec-related": "探索相关三角计算器",
        "sec-faq": "常见问题"
    },
    "sections": {
        "sec-intro": {
            "h2": "什么是正割比计算器？",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割比计算器回答一个问题：对于直角三角形中的一个锐角，最长边与角旁边的边相比如何？输入斜边和邻边，工具将斜边除以邻边，返回[[\\sec(A)=c/b]]。当斜边为5厘米、邻边为4厘米时，计算结果为[[5/4=1.25]]：斜边是邻边的1.25倍长，换句话说长25%。这个小数就是完整的答案。它没有单位，因为厘米在除法中被约掉了；它也不是以度为单位的角度，因此绝不能把1.25读成[[1.25^\\circ]]。对边从不参与这个计算；斜边和邻边就足够了。正割也是余弦的倒数，这就是为什么许多教材把它介绍为[[\\cos(A)]]的翻转形式。"
                }
            ]
        },
        "sec-triangle": {
            "h2": "理解邻边与斜边",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "什么是直角三角形？"
                },
                {
                    "kind": "p",
                    "text": "直角三角形有一个角恰好为[[90^\\circ]]，即两条互相垂直的直线之间的夹角，就像墙与平整的地面相接。斜边位于直角的对面，永远是最长的一条边，因为它必须跨过拐角拉出完整的对角线。另外两个角平分剩下的90度，因此都是锐角。两条直角边在直角处相交，互相垂直，正是它们与斜边的关系让直角三角学成为可能。"
                },
                {
                    "kind": "h3",
                    "text": "什么是邻边？"
                },
                {
                    "kind": "p",
                    "text": "邻边[[b]]是指与参考角[[A]]相邻、但不是斜边的那条直角边。在实际问题中，它常扮演水平距离的角色：梯子底部距墙的地面距离、屋顶椽的水平投影，或两个测量点之间的水平距离。它是正割公式的分母。哪条边算作邻边取决于所选的参考角，因此从角[[A]]切换到角[[B]]时，邻边和对边的标签会互换。"
                },
                {
                    "kind": "h3",
                    "text": "什么是斜边？"
                },
                {
                    "kind": "p",
                    "text": "斜边[[c]]是直角对面的边：在任何图形中，它都正对着标示[[90^\\circ]]角的小方块，且严格长于任意一条直角边。在实际问题中，它常扮演倾斜长度的角色：梯子、坡面、椽子、缆线、斜撑，或一段直线路径。它是正割公式的分子，这就是为什么每个正割值都大于1。"
                },
                {
                    "kind": "h3",
                    "text": "什么是对边？"
                },
                {
                    "kind": "p",
                    "text": "对边[[a]]位于角[[A]]的正对面，从不接触它的顶点。它在基本的正割计算中不起任何作用，这也是计算器从不要求输入它的原因。只有当用勾股定理验证两条已知边是否构成真正的直角三角形时，它才变得重要；在正弦、正切和余割中，它则是主角之一。"
                }
            ],
            "imgAlt": "左下角为角A的直角三角形，金色斜边c，蓝色邻边b，sec(A)=c/b",
            "figcaption": "角A位于左下角；正割使用金色斜边c和蓝色邻边b，而不是对边a。"
        },
        "sec-whatis": {
            "h2": "理解正割比",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割比较完整的倾斜边与参考角旁边直角边的关系："
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{c}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "其中[[\\sec(A)]]是角[[A]]的正割，[[c]]是斜边，[[b]]是邻边：即邻边能容纳进斜边多少次。"
                },
                {
                    "kind": "h3",
                    "text": "正割是余弦的倒数"
                },
                {
                    "kind": "p",
                    "text": "余弦用邻边除以斜边，即[[\\cos(A)=b/c]]。取倒数会把分数翻转，[[1/\\cos(A)=c/b]]，这正是正割公式："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{1}{\\cos(A)}=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "当[[\\cos(A)=4/5=0.8]]时，倒数为[[\\sec(A)=1/0.8=1.25]]：同一个三角形，从相反方向描述。这个区别很重要，因为反余弦写成[[\\cos^{-1}]]是一个不同的概念：它从余弦值还原出角度，而[[1/\\cos(A)]]是倒数余弦，是一个比值，不是角度。"
                },
                {
                    "kind": "h3",
                    "text": "正割值1.25是什么意思？"
                },
                {
                    "kind": "p",
                    "text": "正割为1.25意味着斜边是邻边的1.25倍长。百分比差为[[(1.25-1)\\times100=25]]，因此斜边比邻边长25%。这不意味着角度是[[1.25^\\circ]]，也不意味着三角形长1.25个什么单位。正割是一种比较，不是一种测量。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正割大于1"
                },
                {
                    "kind": "p",
                    "text": "在有效的非退化直角三角形中，斜边长于任意一条直角边，因此[[c \\gt b \\gt 0]]。斜边除以邻边必然得到大于1的比值："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "对于普通的锐角参考角，非退化直角三角形不可能得到恰好为1的结果，因为那要求斜边等于邻边，会把三角形压成一条直线。值1是一个极限值，只有当角度向[[0^\\circ]]缩小时才会被逼近。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正割是余弦的倒数"
                },
                {
                    "kind": "p",
                    "text": "这一关系直接来自两个公式。余弦用邻边除以斜边，正割用斜边除以邻边："
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "两者相乘会约掉一切，得到1："
                },
                {
                    "kind": "p",
                    "text": "[[[\\cos(A)\\sec(A)=\\frac{b}{c}\\times\\frac{c}{b}=1]]]"
                },
                {
                    "kind": "p",
                    "text": "这个恒等式是一种实用的验证工具：用同样的边计算余弦，取倒数，它必须与正割结果完全一致。不吻合说明分数写反了或边标错了。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正割没有单位"
                },
                {
                    "kind": "p",
                    "text": "正割是一个长度除以另一个长度，因此单位被约掉了。例如："
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{5\\,\\text{m}}{4\\,\\text{m}}=1.25]]]"
                },
                {
                    "kind": "p",
                    "text": "米消失了，只剩下一个纯数字。同样的比值也出现在500厘米和400厘米，或任何一对匹配单位上，这就是为什么混用单位（比如米作单位的斜边配厘米作单位的邻边）会在计算开始之前就破坏结果。"
                },
                {
                    "kind": "h3",
                    "text": "正割与余割的对比"
                },
                {
                    "kind": "p",
                    "text": "正割和余割都是分子用斜边的倒数比，但分母用的直角边不同："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{c}{b}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\csc(A)=\\frac{c}{a}]]"
                },
                {
                    "kind": "p",
                    "text": "正割把斜边与邻边配对；余割把斜边与对边配对。两者不可互换，选错了就会回答关于三角形的另一个问题。"
                }
            ],
            "imgAlt": "三个步骤：3-4-5三角形，余弦cos(A)=4/5=0.8，正割sec(A)=5/4=1.25，互为倒数关系",
            "figcaption": "三个步骤：标注3-4-5三角形，计算余弦cos(A) = 4/5，再把分数翻转得到sec(A) = 5/4。"
        },
        "sec-formula": {
            "h2": "正割公式的工作原理",
            "blocks": [
                {
                    "kind": "p",
                    "text": "定义从文字开始，再过渡到符号。正割是斜边除以邻边："
                },
                {
                    "kind": "p",
                    "text": "[[[\\sec(A)=\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}]]]"
                },
                {
                    "kind": "p",
                    "text": "用本页的记号表示为："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "斜边是分子，因为正割问的是“倾斜边相对于其水平投影有多长”；邻边是分母，因为它是被比较的参考长度。"
                },
                {
                    "kind": "h3",
                    "text": "完整解题示例：3-4-5直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知邻边[[b=4\\,\\text{cm}]]、对边[[a=3\\,\\text{cm}]]、斜边[[c=5\\,\\text{cm}]]，按步骤走一遍公式。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第1步：写出公式。</strong> [[\\sec(A)=c/b]]。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第2步：代入已知值。</strong> [[\\sec(A)=5/4]]。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第3步：相除。</strong> [[\\boxed{\\sec(A)=1.25}]]。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第4步：解释结果。</strong> 斜边是邻边的1.25倍，长25%。一段5厘米的梯子跨过4米的水平距离就是这样；几何只关心比例，不关心单位。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第5步：用余弦验证。</strong> [[\\cos(A)=4/5=0.8]]，且[[1/0.8=1.25]]。倒数检查证实了正割结果，因为余弦和正割互为精确的倒数。"
                },
                {
                    "kind": "p",
                    "text": "<strong>第6步：验证三角形。</strong> [[3^2+4^2=5^2]]，即[[9+16=25]]。边长满足勾股定理，因此它们构成真正的直角三角形，正割值可信。"
                }
            ]
        },
        "sec-howto": {
            "h2": "如何使用正割比计算器",
            "blocks": [
                {
                    "kind": "p",
                    "text": "上面的计算器接受两个输入，斜边[[c]]和邻边[[b]]，返回[[\\sec(A)]]。请按顺序执行以下步骤。"
                }
            ],
            "steps": [
                "<strong>确定参考角[[A]]。</strong> 比值中的每个边标签都是相对于这个角定义的，因此先选定它，再碰边长。",
                "<strong>找到斜边[[c]]。</strong> 它位于直角的对面，是三角形最长的一条边；在图形中它就是倾斜的那条边。",
                "<strong>找到邻边[[b]]。</strong> 它与角[[A]]相邻，不是斜边；是两条互相垂直的直角边之一。",
                "<strong>获得或测量两条边的长度。</strong> 用同一件量具、同一单位测量，或在继续之前先换算其中一个测量值。",
                "<strong>在第一个输入框中输入斜边。</strong> 它是分数的分子，这一步出错会让整个答案偏移。",
                "<strong>在第二个输入框中输入邻边。</strong> 它是分母；必须是角[[A]]旁边的边，而不是它对面的边。",
                "<strong>用可用的单位选择器选择兼容的测量单位。</strong> 两个输入框必须使用同一单位，或换算后的等值，否则比值会出错。",
                "<strong>确认两个测量值都为正数。</strong> 零或负的长度在三角形中没有意义，说明数据录入有误。",
                "<strong>检查斜边是否长于邻边。</strong> 如果不是，说明边标错了，或者这些数字根本构不成直角三角形。",
                "<strong>点击“Calculate sec(A)”。</strong> 工具执行除法[[c/b]]并显示比值。",
                "<strong>读取得到的正割比。</strong> 它是一个无量纲小数，通常保留四位小数，可直接用于后续计算。",
                "<strong>确认结果大于1。</strong> 对于有效的非退化直角三角形和锐角参考角，[[\\sec(A) \\gt 1]]；结果等于或小于1说明上游某个环节出了问题。",
                "<strong>想清空输入重新计算时使用“Reset”。</strong> 输入框和结果会回到初始状态。"
            ],
            "closingParagraphs": [
                "计算器不需要对边或角度输入，因为基本的正割比完全由两个长度决定。它也不还原角度或缺失的边；那些情形可以看本指南后面的变形公式，按手动路径求解。"
            ]
        },
        "sec-examples": {
            "h2": "正割计算分步示例",
            "blocks": [
                {
                    "kind": "p",
                    "text": "这四个示例使用经典三角形，它们的正割值值得记住，因为在三角学中会反复出现。"
                },
                {
                    "kind": "h3",
                    "text": "示例1：3-4-5直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知[[b=4\\,\\text{cm}]]、[[a=3\\,\\text{cm}]]、[[c=5\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "斜边比邻边长25%。这是教材中最常见的正割示例，1.25这个结果是精确值。"
                },
                {
                    "kind": "h3",
                    "text": "示例2：5-12-13直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知邻边[[b=12\\,\\text{m}]]、对边[[a=5\\,\\text{m}]]、斜边[[c=13\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "斜边大约比邻边长8.33%。这个三角形常出现在建筑问题中，因为13接近一个平缓的屋顶坡度。"
                },
                {
                    "kind": "h3",
                    "text": "示例3：45-45-90三角形"
                },
                {
                    "kind": "p",
                    "text": "已知邻边[[b=1\\,\\text{cm}]]、对边[[a=1\\,\\text{cm}]]、斜边[[c=\\sqrt{2}\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(45^\\circ)=\\frac{\\sqrt{2}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(45^\\circ)=\\sqrt{2}\\approx1.4142}]]"
                },
                {
                    "kind": "p",
                    "text": "斜边大约是任意一条直角边的1.4142倍。在45度时两条直角边相等，因此这里正割等于余割，都是[[\\sqrt{2}]]。"
                },
                {
                    "kind": "h3",
                    "text": "示例4：30-60-90三角形"
                },
                {
                    "kind": "p",
                    "text": "取参考角[[A=30^\\circ]]，邻边[[b=\\sqrt{3}\\,\\text{cm}]]、对边[[a=1\\,\\text{cm}]]、斜边[[c=2\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(30^\\circ)=\\frac{2}{\\sqrt{3}}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(30^\\circ)\\approx1.1547}]]"
                },
                {
                    "kind": "p",
                    "text": "斜边大约比邻边长15.47%。注意，同样的2比1斜边比例在60度时也会出现，只是两条边互换了位置，此时正割变为2。"
                }
            ]
        },
        "sec-applications": {
            "h2": "正割比的实际应用示例",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割在倾斜长度需要与水平投影比较的地方发挥作用。在每个示例中，直角三角形都是对真实情形的简化几何模型，陈述的假设让这种简化保持诚实。"
                },
                {
                    "kind": "h3",
                    "text": "示例5：求梯子的正割比"
                },
                {
                    "kind": "p",
                    "text": "一架5米长的梯子，底部距垂直墙面4米。角[[A]]位于梯子与水平地面之间。斜边是梯子本身，[[c=5\\,\\text{m}]]，邻边是水平的地面距离，[[b=4\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "梯子比它的水平地面投影长25%。这个比值不能说明梯子摆放是否安全；梯子安全取决于工作角度和底部固定，单靠正割判断不了。"
                },
                {
                    "kind": "h3",
                    "text": "示例6：求屋顶椽的正割比"
                },
                {
                    "kind": "p",
                    "text": "一根屋顶椽的倾斜长度为6.5米，水平距离为6米。椽是斜边，[[c=6.5\\,\\text{m}]]，水平距离是邻边，[[b=6\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{6.5}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "椽大约比它的水平距离长8.33%。屋顶工整天都在反向使用这个关系：从图纸上量出水平距离，乘以正割，就去订椽料。这个比值不是完整的屋顶设计或结构评估。"
                },
                {
                    "kind": "h3",
                    "text": "示例7：评估坡道的正割比"
                },
                {
                    "kind": "p",
                    "text": "一个简化的坡道，倾斜长度为9.5米，水平距离为9米。倾斜面是斜边，[[c=9.5\\,\\text{m}]]，水平距离是邻边，[[b=9\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{9.5}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0556}]]"
                },
                {
                    "kind": "p",
                    "text": "坡道的倾斜长度大约比它的水平投影长5.56%。较小的正割反映了平缓的坡度，但仅凭比值不能说明无障碍通行或建筑规范合规。"
                },
                {
                    "kind": "h3",
                    "text": "示例8：一次测量作业"
                },
                {
                    "kind": "p",
                    "text": "一个简化的测量三角形，直线距离为50米，水平间距为40米。直线距离是斜边，[[c=50\\,\\text{m}]]，水平间距是邻边，[[b=40\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{50}{40}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "直线距离比水平间距长25%。测量人员日常会做这种水平归算；实际的外业工作可能还需要超出简单模型的额外改正和测量程序。"
                },
                {
                    "kind": "h3",
                    "text": "示例9：支撑电线杆的拉线"
                },
                {
                    "kind": "p",
                    "text": "一条拉线长13米，地面锚固点水平距杆12米。拉线是斜边，[[c=13\\,\\text{m}]]，杆到锚固点的水平距离是邻边，[[b=12\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{13}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0833}]]"
                },
                {
                    "kind": "p",
                    "text": "拉线大约比它的水平投影长8.33%。这能告诉你要裁多长的缆线，不能告诉你它能承受多大的拉力；拉线张力、锚固强度和结构安全需要单独分析。"
                },
                {
                    "kind": "h3",
                    "text": "示例10：求楼梯弦板的正割比"
                },
                {
                    "kind": "p",
                    "text": "一个简化的楼梯弦板长5米，跨越4米的水平距离。弦板是斜边，[[c=5\\,\\text{m}]]，水平距离是邻边，[[b=4\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "对角线方向的弦板比水平跨度长25%。木工会用反向计算按图纸尺寸切割弦板。这个比值不能验证楼梯尺寸或建筑规范合规。"
                },
                {
                    "kind": "h3",
                    "text": "示例11：理解起重机吊臂的水平投影"
                },
                {
                    "kind": "p",
                    "text": "一个简化的起重机吊臂长10米，水平投影为6米。吊臂是斜边，[[c=10\\,\\text{m}]]，水平投影是邻边，[[b=6\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{10}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "吊臂大约比它的水平投影长66.67%。较大的正割反映了较高的工作角度。这个比值不能说明起重能力或作业安全。"
                },
                {
                    "kind": "h3",
                    "text": "示例12：一段直线飞行航段"
                },
                {
                    "kind": "p",
                    "text": "对于一个简化的直线飞行航段，航路长度为5公里，水平位移为4公里。飞行路径是斜边，[[c=5\\,\\text{km}]]，水平位移是邻边，[[b=4\\,\\text{km}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{5}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "航路长度比水平位移长25%。这是一个理想化的几何示例，不是完整的飞行导航计算；真实的飞行计划还要加上风、高度变化和空域航路。"
                },
                {
                    "kind": "h3",
                    "text": "示例13：斜向机械撑杆"
                },
                {
                    "kind": "p",
                    "text": "一根斜向撑杆长2米，水平投影为1.2米。撑杆是斜边，[[c=2\\,\\text{m}]]，水平投影是邻边，[[b=1.2\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{2}{1.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.6667}]]"
                },
                {
                    "kind": "p",
                    "text": "撑杆大约比它的水平投影长66.67%。这个比值描述的是安装的几何形状，不能决定撑杆的强度或适用性。"
                },
                {
                    "kind": "h3",
                    "text": "示例14：求徒步路线的正割比"
                },
                {
                    "kind": "p",
                    "text": "一段简化笔直的徒步路段，路长为100米，水平位移为80米。路线是斜边，[[c=100\\,\\text{m}]]，水平位移是邻边，[[b=80\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{100}{80}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "笔直的路线比它的水平位移长25%。实际的徒步小径包含弯曲和变化的坡度，因此请把它当作单个笔直路段，而不是整条路线。"
                },
                {
                    "kind": "h3",
                    "text": "示例15：雨篷支架"
                },
                {
                    "kind": "p",
                    "text": "一个雨篷支架长3米，水平投影为2.4米。支架是斜边，[[c=3\\,\\text{m}]]，水平投影是邻边，[[b=2.4\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{3}{2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)=1.25}]]"
                },
                {
                    "kind": "p",
                    "text": "支架比它的水平投影长25%。这个计算不能说明结构适用性；紧固强度和风荷载需要各自检查。"
                },
                {
                    "kind": "h3",
                    "text": "示例16：两点之间的缆线"
                },
                {
                    "kind": "p",
                    "text": "一条笔直缆线在两点之间总长25米，两点的水平间距为24米。缆线是斜边，[[c=25\\,\\text{m}]]，水平间距是邻边，[[b=24\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\sec(A)=\\frac{25}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\sec(A)\\approx1.0417}]]"
                },
                {
                    "kind": "p",
                    "text": "缆线大约比水平间距长4.17%。简化模型假设缆线笔直且呈直角三角形关系；真实的缆线会下垂，长度会超出正割模型的计算。"
                },
                {
                    "kind": "p",
                    "text": "正割是一个数学比值，而不是带有单位的物理量。它的实用价值在于比较倾斜长度与水平投影、在已知角度时还原长度、验证三角形几何形状，以及使用那些明确要求正割的公式。它单独从不证明结构安全、承载能力、无障碍通行或工程合规。"
                }
            ],
            "tables": [
                {
                    "headers": [
                        "场景",
                        "c",
                        "b",
                        "公式",
                        "比值",
                        "长出比例",
                        "含义"
                    ],
                    "rows": [
                        [
                            "梯子",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "梯子比它的地面距离长四分之一"
                        ],
                        [
                            "屋顶椽",
                            "6.5 m",
                            "6 m",
                            "6.5/6",
                            "1.0833",
                            "8.33%",
                            "椽子略长于水平距离"
                        ],
                        [
                            "坡道",
                            "9.5 m",
                            "9 m",
                            "9.5/9",
                            "1.0556",
                            "5.56%",
                            "缓坡几乎只比水平距离长一点"
                        ],
                        [
                            "测量",
                            "50 m",
                            "40 m",
                            "50/40",
                            "1.25",
                            "25%",
                            "直线距离超出水平距离"
                        ],
                        [
                            "拉线",
                            "13 m",
                            "12 m",
                            "13/12",
                            "1.0833",
                            "8.33%",
                            "从地面距离算出裁剪所需的拉线长度"
                        ],
                        [
                            "楼梯弦板",
                            "5 m",
                            "4 m",
                            "5/4",
                            "1.25",
                            "25%",
                            "对角线方向的弦板对比水平跨度"
                        ],
                        [
                            "起重机吊臂",
                            "10 m",
                            "6 m",
                            "10/6",
                            "1.6667",
                            "66.67%",
                            "陡峭的吊臂远长于其水平投影"
                        ],
                        [
                            "飞行航段",
                            "5 km",
                            "4 km",
                            "5/4",
                            "1.25",
                            "25%",
                            "理想化航路对比水平位移"
                        ],
                        [
                            "斜向撑杆",
                            "2 m",
                            "1.2 m",
                            "2/1.2",
                            "1.6667",
                            "66.67%",
                            "撑杆长度对比水平投影"
                        ],
                        [
                            "徒步路段",
                            "100 m",
                            "80 m",
                            "100/80",
                            "1.25",
                            "25%",
                            "笔直路段对比水平地图距离"
                        ],
                        [
                            "雨篷支架",
                            "3 m",
                            "2.4 m",
                            "3/2.4",
                            "1.25",
                            "25%",
                            "支架长度对比水平伸出距离"
                        ],
                        [
                            "缆线跨距",
                            "25 m",
                            "24 m",
                            "25/24",
                            "1.0417",
                            "4.17%",
                            "几乎水平的缆线，几乎没有多余长度"
                        ]
                    ]
                }
            ],
            "imgAlt": "四个面板：梯子比值1.25，坡道1.0556，测量1.25，吊臂1.6667，每个都有标注的直角三角形",
            "figcaption": "四个实际计算：梯子、坡道、测量和起重机吊臂，每个都有三角形、公式和比值。"
        },
        "sec-angle": {
            "h2": "理解正割与角度大小的关系",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割随参考角的增大而增大。几何解释了原因：当角[[A]]较小时，邻边几乎与斜边一样长，因此比值刚好大于1。角度张开时，邻边在斜边中所占的比例越来越小，比值随之上升。在[[45^\\circ]]时正割为[[\\sqrt{2}]]，约1.4142；在[[60^\\circ]]时恰好为2，因为斜边是邻边的两倍；当角度趋向[[90^\\circ]]时，邻边向零收缩，正割无限制地增大。"
                }
            ],
            "tables": [
                {
                    "headers": [
                        "角 [[A]]",
                        "邻边 [[b]]",
                        "斜边 [[c]]",
                        "正割比"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "2",
                            "约 1.1547"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "[[\\sqrt{2}]]",
                            "约 1.4142"
                        ],
                        [
                            "[[60^\\circ]]",
                            "1",
                            "2",
                            "2"
                        ],
                        [
                            "[[75^\\circ]]",
                            "1",
                            "约 3.8637",
                            "约 3.8637"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "规律是单调的：角度每增大一点，正割就上升一点；对每个锐角比值都保持大于1。表格中的测量值是示意性的；决定角度的是比值，而不是三角形的绝对大小。因此正割描述的是三角形的形状，不是它的尺寸。"
            ],
            "imgAlt": "30度、45度、60度的三个三角形，正割值分别为1.1547、1.4142、2；角度增大时正割上升",
            "figcaption": "当角A增大时，邻边在斜边中所占的比例越来越小，因此sec(A)上升。"
        },
        "sec-hypotenuse": {
            "h2": "如何用正割求斜边",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割公式可以变形，用邻边和角度求斜边。从[[\\sec(A)=c/b]]出发，两边同乘[[b]]："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{c=b\\sec(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "斜边等于邻边乘以角的正割。已知邻边[[b=4\\,\\text{m}]]、角度[[A=60^\\circ]]，且[[\\sec(60^\\circ)=2]]："
                },
                {
                    "kind": "p",
                    "text": "[[c=4\\times2]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{c=8\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "这个角度下斜边是邻边的两倍，这与30-60-90的几何一致：30度对面的边是斜边的一半。邻边也可以用同样的方法再变形一次求出："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{c}{\\sec(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "已知斜边[[c=10\\,\\text{m}]]、[[A=60^\\circ]]：[[b=10/2]]，因此[[\\boxed{b=5\\,\\text{m}}]]。这些都是同一公式的数学变形。本页的计算器从边长返回正割比；它不直接计算缺失的边。"
                }
            ]
        },
        "sec-recover": {
            "h2": "已知正割比时如何求角度",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割比和角度是不同的量：一个是边的无量纲比较，另一个以度为单位。如果正割比已知，用倒数还原余弦："
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{1}{\\sec(A)}]]"
                },
                {
                    "kind": "p",
                    "text": "然后反余弦返回角度："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\cos^{-1}\\left(\\frac{1}{\\sec(A)}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "已知[[\\sec(A)=1.25]]，先计算余弦：[[\\cos(A)=1/1.25=0.8]]。再由[[A=\\cos^{-1}(0.8)]]得到[[\\boxed{A\\approx36.87^\\circ}]]。这是一次单独的角度计算，不是正割比计算器直接做的事。如果答案要用度表示，先把科学计算器设为角度模式；弧度模式下同样的输入返回约0.6435，是同一个角度用不同单位的表示。"
                }
            ]
        },
        "sec-mistakes": {
            "h2": "计算正割时的常见错误",
            "blocks": [
                {
                    "kind": "p",
                    "text": "大多数正割错误来自写反的分数、标错的边，或单位疏漏。在相信结果之前，先过一遍这份清单。"
                }
            ],
            "steps": [
                "<strong>把公式写反，算成[[b/c]]而不是[[c/b]]。</strong> 这是最常见的错误，算出来的是余弦而不是正割。取[[c=5]]和[[b=4]]，顺序错了得到0.8；顺序对了得到1.25。",
                "<strong>把正割与余弦混淆。</strong> 余弦是邻边除以斜边；正割恰好反过来。如果答案小于1，那几乎肯定是余弦，不是正割。",
                "<strong>把正割与余割混淆。</strong> 两者分子都用斜边，看起来很像。正割除以邻边[[b]]；余割除以对边[[a]]。检查题目实际给出的是哪条直角边。",
                "<strong>用了对边而不是邻边。</strong> 算[[c/a]]得到的是余割。取[[c=5]]和[[a=3]]，那会得到1.6667，是一个正确的余割，但错误的正割。",
                "<strong>分子用的不是斜边。</strong> 正割的分子永远是斜边。直角边除以直角边是正切或余切；直角边除以斜边是正弦或余弦。",
                "<strong>把邻边和对边弄混。</strong> 参考角从[[A]]换成[[B]]时标签会互换。在给[[b]]赋值之前，先确认题目说的是哪个角。",
                "<strong>以为正割是以度为单位的角度。</strong> 1.25这个结果是比值，不是[[1.25^\\circ]]。把它当成度，后续计算全是无意义的。",
                "<strong>给比值带上米或厘米单位。</strong> 单位在除法中被约掉了，因此“1.25米”是错的。写纯数字，把单位留在输入的测量值里。",
                "<strong>输入了零或负的边长。</strong> 三角形不可能有零或负的边，这类输入说明数据录入有误或缺失了测量值，不是什么有效的边界情况。",
                "<strong>输入的邻边比斜边长。</strong> 斜边永远是最长的一条边。如果[[b \\gt c]]，说明输入写反了，或者这个三角形不可能存在。",
                "<strong>混用了测量单位。</strong> 5米的斜边配40厘米的邻边会得到0.125，一个无意义的数字。先换算成同一单位：5米和4米得到正确的1.25。",
                "<strong>过早四舍五入。</strong> 把中间的除法四舍五入到两位小数再继续算，会把误差越积越大。每一步都保留完整精度，只在最后答案四舍五入。",
                "<strong>以为直角三角形的正割必须等于1。</strong> 没有任何直角三角形的正割恰好为1。结果应该大于1；恰好等于1说明输入写反了或三角形退化了。",
                "<strong>把倒数余弦与反余弦混淆。</strong> [[1/\\cos(A)]]是正割，是一个比值；[[\\cos^{-1}]]是反余弦，返回的是角度。名称相似确实会造成真实的错误，读符号时要仔细。",
                "<strong>以为正割单独就能决定三角形的绝对尺寸。</strong> 正割描述形状，不描述大小：无数个三角形共享1.25的正割，从5厘米的斜边到5公里的斜边。比值固定了比例；实际长度至少需要一条边的测量值。"
            ],
            "closingParagraphs": [
                "<strong>错误与正确：解题对比</strong> 已知斜边[[c=5]]和邻边[[b=4]]：",
                "<strong>错误：</strong> [[4/5=0.8]]。这是余弦，不是正割。分子和分母写反了。",
                "<strong>正确：</strong> [[\\sec(A)=5/4=1.25]]。",
                "<strong>验证：</strong> [[\\cos(A)=0.8]]，且[[1/0.8=1.25]]。倒数检查证实了结果，且答案大于1，任何有效的正割都必须如此。"
            ]
        },
        "sec-verify": {
            "h2": "如何验证正割结果是否有效",
            "blocks": [
                {
                    "kind": "p",
                    "text": "有效的非退化直角三角形要求边为正数且斜边严格最长，即[[0 \\lt b \\lt c]]，因此正割结果必须大于1："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\sec(A)=\\frac{c}{b} \\gt 1}]]]"
                },
                {
                    "kind": "p",
                    "text": "两个测量值必须使用兼容的单位。结果等于或小于1通常说明输入写反了、边认错了、测量不兼容，或三角形尺寸无效。"
                },
                {
                    "kind": "h3",
                    "text": "方法1：检查余弦的倒数"
                },
                {
                    "kind": "p",
                    "text": "验证[[\\cos(A)=b/c]]，再确认[[\\sec(A)=1/\\cos(A)]]。取[[b=4]]和[[c=5]]：[[\\cos(A)=4/5=0.8]]，因此[[\\sec(A)=1/0.8=1.25]]。两条路径不吻合说明分数写反了或边标错了。"
                },
                {
                    "kind": "h3",
                    "text": "方法2：检查勾股定理"
                },
                {
                    "kind": "p",
                    "text": "如果对边已知或需要，计算[[a=\\sqrt{c^2-b^2}]]。对于[[b=4]]和[[c=5]]：[[a=\\sqrt{25-16}=3]]，且[[3^2+4^2=5^2]]。这证实了3-4-5直角三角形的尺寸。此处对边是验证值，不是主要正割公式的一部分。"
                },
                {
                    "kind": "h3",
                    "text": "方法3：用反余弦检查"
                },
                {
                    "kind": "p",
                    "text": "对于1.25的正割比：[[A=\\cos^{-1}(1/1.25)]]，即[[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。因为正割只比1大一点点，角度应该明显落在[[45^\\circ]]以下；如果不是，边标签很可能弄反了。四舍五入可能带来微小差异。"
                }
            ]
        },
        "sec-vs": {
            "h2": "正割与余弦、正弦和余割",
            "blocks": [
                {
                    "kind": "p",
                    "text": "每个比值比较的是不同的边对，使用相同的参考角和边标签："
                }
            ],
            "tables": [
                {
                    "headers": [
                        "比值",
                        "公式",
                        "比较对象"
                    ],
                    "rows": [
                        [
                            "正弦",
                            "sin(A) = a/c",
                            "对边与斜边"
                        ],
                        [
                            "余弦",
                            "cos(A) = b/c",
                            "邻边与斜边"
                        ],
                        [
                            "正切",
                            "tan(A) = a/b",
                            "对边与邻边"
                        ],
                        [
                            "正割",
                            "sec(A) = c/b",
                            "斜边与邻边"
                        ],
                        [
                            "余割",
                            "csc(A) = c/a",
                            "斜边与对边"
                        ],
                        [
                            "余切",
                            "cot(A) = b/a",
                            "邻边与对边"
                        ]
                    ]
                }
            ],
            "closingParagraphs": [
                "正割和余弦是倒数对：[[\\sec(A)=1/\\cos(A)]]。若[[\\cos(A)=0.8]]，则[[\\sec(A)=1.25]]。当公式要求斜边除以邻边、比较倾斜长度与水平投影，或已知关系从最长边出发时选择正割；邻边比斜边用余弦，对边比斜边用正弦，斜边与对边比较用余割。",
                "相邻的比值请参见<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比计算器</a>、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">余弦比计算器</a>、<a href=\"/tangent-ratio-calculator/\" class=\"text-primary hover:underline\">正切比计算器</a>、<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比计算器</a>和<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">余切比计算器</a>。"
            ]
        },
        "sec-related": {
            "h2": "探索相关三角计算器",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "正弦比计算器"
                },
                {
                    "name": "余弦比计算器"
                },
                {
                    "name": "正切比计算器"
                },
                {
                    "name": "余割比计算器"
                },
                {
                    "name": "余切比计算器"
                },
                {
                    "name": "直角三角形角度计算器"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "自信地使用正割比",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正割是余弦的翻转形式：斜边除以邻边，就描述了倾斜长度比它的水平投影长多少。公式[[\\sec(A)=c/b]]只需要两个测量值，答案永远是大于1的无量纲数，且随参考角的增大而增大。需要缺失的边时，[[c=b\\sec(A)]]还原斜边；需要角度时，[[A=\\cos^{-1}(1/\\sec(A))]]还原角度。梯子、椽子、坡道，或教科书上的3-4-5，方法从不变：确定斜边，确定邻边，相除，再用余弦的倒数验证。"
                }
            ]
        }
    },
    "faqs": [
        {
            "question": "直角三角形的正割公式是什么？",
            "answer": "sec(A) = c / b：用斜边c除以角A的邻边。当斜边为5厘米、邻边为4厘米时，结果为5/4 = 1.25。这个小数就是完整的答案，一个无量纲比值，不是角度。"
        },
        {
            "question": "正割与余弦有什么关系？",
            "answer": "正割是余弦的倒数：sec(A) = 1 / cos(A)。若cos(A) = 4/5 = 0.8，则sec(A) = 1/0.8 = 1.25。两个比值从翻转的视角描述同一个角度，倒数检查是验证正割计算最快的方法。"
        },
        {
            "question": "为什么直角三角形中的正割大于1？",
            "answer": "在有效的非退化直角三角形中，斜边严格长于任意一条直角边，因此c > b > 0。较大的长度除以较小的长度，比值永远大于1：对每个锐角参考角都有sec(A) = c/b > 1。"
        },
        {
            "question": "正割可以等于1吗？",
            "answer": "对真实直角三角形中的普通锐角不行。正割恰好为1要求斜边等于邻边，这会把三角形压成一条直线。值1是一个极限值，只有当角A向0度缩小时才会被逼近，真正的三角形永远产生不了它。"
        },
        {
            "question": "正割值1.25是什么意思？",
            "answer": "斜边是邻边的1.25倍长，即长25%。这不意味着角度是1.25度，也不意味着三角形长1.25个什么单位。正割是两个长度的无量纲比较。"
        },
        {
            "question": "正割有测量单位吗？",
            "answer": "没有。两个输入都是相同单位的长度，单位被约掉了：5 m / 4 m = 1.25，正如500 cm / 400 cm = 1.25。正割应报告为纯数字，绝不附带度、米或英尺。"
        },
        {
            "question": "如何从边长计算正割？",
            "answer": "用相同单位测量斜边c和邻边b，确认两者都为正数且c长于b，然后相除：sec(A) = c / b。在本页的第一个输入框中输入斜边，第二个输入框中输入邻边，选择兼容的单位，点击“Calculate sec(A)”。"
        },
        {
            "question": "如何用正割求斜边？",
            "answer": "把公式变形为c = b * sec(A)。若邻边为4米、角A为60度，sec(60 deg) = 2，因此c = 4 * 2 = 8米。这是手动的公式变形；本页的计算器从边长返回比值，不求缺失的边。"
        },
        {
            "question": "如何从正割比求角度？",
            "answer": "取倒数得到余弦比，再应用反余弦：A = cos^-1(1 / sec(A))。对于sec(A) = 1.25，余弦比为0.8，因此A = cos^-1(0.8)，约等于36.87度。先把科学计算器设为角度模式。本页的计算器返回比值，不返回角度。"
        },
        {
            "question": "正割和余割有什么区别？",
            "answer": "正割用斜边除以邻边（c/b）；余割用斜边除以对边（c/a）。两者都是分子用斜边的倒数比，但用的直角边不同，因此回答的是不同的问题，永远不能互换。"
        },
        {
            "question": "不知道对边能算正割吗？",
            "answer": "能。基本的正割公式只用斜边和邻边，对边从不进入计算。只有当用勾股定理验证三角形，或正弦、正切、余割进入计算时，对边才变得有用。"
        },
        {
            "question": "正割在实际测量中怎么用？",
            "answer": "正割比较倾斜长度与其水平投影：梯子对比它的地面距离，屋顶椽对比它的水平距离，两端点之间的缆线对比两端点的水平间距。比值告诉你倾斜路径比它的投影长多少，适合从水平图纸估算材料长度。"
        }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关三角计算器"
}
};
