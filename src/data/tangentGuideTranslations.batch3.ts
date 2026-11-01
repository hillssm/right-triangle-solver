/**
 * tangentGuideTranslations.batch3.ts
 * Translations of the Tangent Ratio Calculator guide (TangentRatioGuide.astro, Page 14 of 45).
 * Batch 3: Indonesian (id), Arabic (ar), Bulgarian (bg), Turkish (tr), Swedish (sv), Chinese (zh).
 *
 * Structure per language: tocHeading, tocItems (15 entries), sections (15 entries),
 * faqs (12), faqHeading, relatedHeading, conclusion in sections['sec-conclusion'].
 * Formulas, KaTeX markup ([[...]] and [[[...]]]), variable names, numbers, and degree
 * values are preserved exactly as in the English source. URLs are never translated.
 * No em dashes. Arabic math stays LTR via the renderer's dir="ltr" wrapper.
 */

export const TANGENT_TRANSLATIONS_BATCH3 = {
"id": {
    "tocHeading": "Di Dalam Panduan Ini",
    "tocItems": {
        "sec-intro": "Apa Itu Kalkulator Rasio Tangen?",
        "sec-triangle": "Memahami Sisi Depan dan Sisi Samping",
        "sec-whatis": "Memahami Rasio Tangen",
        "sec-formula": "Cara Kerja Rumus Tangen",
        "sec-howto": "Cara Menggunakan Kalkulator Rasio Tangen",
        "sec-examples": "Contoh Langkah-demi-Langkah Menghitung Tangen",
        "sec-applications": "Contoh Nyata Penggunaan Rasio Tangen",
        "sec-angle": "Memahami Hubungan Antara Tangen dan Besar Sudut",
        "sec-side": "Cara Menemukan Sisi Depan Menggunakan Tangen",
        "sec-recover": "Cara Menemukan Sudut dari Rasio Tangen",
        "sec-mistakes": "Kesalahan Umum Saat Menghitung Tangen",
        "sec-verify": "Cara Memeriksa Apakah Hasil Tangen Anda Valid",
        "sec-vs": "Tangen vs. Sinus, Kosinus, dan Kotangen",
        "sec-related": "Jelajahi Kalkulator Trigonometri Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan"
    },
    "sections": {
        "sec-intro": {
            "h2": "Apa Itu Kalkulator Rasio Tangen?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Kalkulator rasio tangen menjawab satu pertanyaan: untuk sebuah sudut lancip dalam segitiga siku-siku, bagaimana sisi di seberang sudut dibandingkan dengan sisi di sebelahnya? Masukkan sisi depan dan sisi samping, dan alat ini membagi sisi depan dengan sisi samping, sehingga menghasilkan [[\\tan(A)=a/b]]. Sebuah segitiga siku-siku memiliki sisi depan 3 cm dan sisi samping 4 cm, sehingga [[\\tan(A)=3/4=0.75]]. Angka 0.75 itu adalah rasio tangen: ia menyatakan bahwa sisi depan 75 persen dari panjang sisi samping. Angka itu bukan sudut, jadi jangan pernah membacanya sebagai [[0.75^\\circ]]. Hipotenusa tidak pernah masuk dalam perhitungan ini; sisi depan dan sisi samping sudah cukup berdiri sendiri. Tangen adalah salah satu rasio trigonometri dasar, dan kekuatan khususnya adalah membandingkan kenaikan vertikal dengan jarak horizontal, itulah sebabnya ia muncul dalam kemiringan atap, kemiringan jalan, dan lereng jalur landai. Hasilnya adalah angka tak berdimensi: perbandingan murni dua panjang, bukan pengukuran dalam sentimeter atau derajat. Jika yang Anda butuhkan adalah sudut dalam derajat, tangen invers mengubah rasio tersebut menjadi derajat."
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
            "h2": "Memahami Sisi Depan dan Sisi Samping",
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
                    "text": "Apa Itu Sisi Depan?"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan [[a]] adalah sisi yang tepat berada di seberang sudut acuan [[A]], satu-satunya sisi yang tidak pernah menyentuh titik sudutnya. Dalam soal-soal praktis, sisi ini sering berperan sebagai kenaikan vertikal, beda ketinggian, atau tinggi: tinggi dinding yang dicapai tangga, kenaikan atap, atau komponen vertikal lengan derek. Sisi mana yang dihitung sebagai sisi depan bergantung pada sudut acuan yang dipilih, sehingga beralih dari sudut [[A]] ke sudut [[C]] akan menukar label sisi depan dan sisi samping. Sisi ini muncul pada pembilang rumus tangen karena tangen mengukur seberapa besar sisi di seberang sudut relatif terhadap sisi di sebelah sudut."
                },
                {
                    "kind": "h3",
                    "text": "Apa Itu Sisi Samping?"
                },
                {
                    "kind": "p",
                    "text": "Sisi samping [[b]] adalah kaki yang menyentuh sudut acuan [[A]] tanpa menjadi hipotenusa. Dalam soal-soal praktis, sisi ini sering berperan sebagai jarak horizontal atau jarak tanah: jarak dasar tangga dari dinding, jarak horizontal atap, atau panjang bayangan dalam soal sudut matahari. Sisi ini bukan hipotenusa, poin yang layak diperiksa setiap saat, karena hipotenusa adalah sisi yang menghadap sudut siku-siku. Sisi ini muncul pada penyebut rumus tangen, itulah sebabnya tangen membandingkan sisi depan terhadap kaki ini, bukan terhadap sisi terpanjang."
                },
                {
                    "kind": "h3",
                    "text": "Apa Itu Hipotenusa?"
                },
                {
                    "kind": "p",
                    "text": "Hipotenusa [[c]] adalah sisi di seberang sudut siku-siku: dalam setiap diagram ia menghadap kotak kecil yang menandai sudut [[90^\\circ]], dan ia selalu lebih panjang daripada kedua kaki. Dalam soal-soal praktis, sisi ini sering berperan sebagai panjang miring: tangga, kasau atap, kabel penahan, atau penopang diagonal. Sisi ini tidak dibutuhkan untuk perhitungan tangen utama, karena rumus tangen membandingkan kedua kaki secara langsung. Jika ia diperlukan untuk soal lain, teorema Pythagoras menghitungnya dari kedua kaki: [[c=\\sqrt{a^2+b^2}]]."
                },
                {
                    "kind": "p",
                    "text": "Tangen menggunakan kedua kaki dan tidak memerlukan hipotenusa. Pertahankan konvensi penamaan sisi ini secara konsisten: [[a]] di seberang sudut [[A]], [[b]] di sebelah sudut [[A]], dan [[c]] adalah hipotenusa di seberang sudut siku-siku di [[B]]."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "Segitiga siku-siku dengan sudut A di kiri bawah, sisi depan a berwarna emas, sisi samping b berwarna biru, tan(A)=a/b",
                    "caption": "Sudut A berada di kiri bawah; tangen menggunakan sisi depan a berwarna emas dan sisi samping b berwarna biru, bukan hipotenusa c."
                }
            ]
        },
        "sec-whatis": {
            "h2": "Memahami Rasio Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tangen dari sudut lancip [[A]] adalah sisi depan dibagi sisi samping:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Di sini [[\\tan(A)]] berarti tangen dari sudut [[A]], [[a]] adalah sisi depan, dan [[b]] adalah sisi samping. Ketika segitiga diposisikan dengan alasnya sejajar arah horizontal, tangen membandingkan kaki vertikal dengan kaki horizontal: kenaikan per jarak horizontal dalam bentuknya yang paling murni."
                },
                {
                    "kind": "h3",
                    "text": "Memahami SOH-CAH-TOA"
                },
                {
                    "kind": "p",
                    "text": "Siswa mengingat tiga rasio utama dengan satu jembatan keledai:"
                },
                {
                    "kind": "p",
                    "text": "<strong>SOH:</strong> Sinus = Sisi depan / Hipotenusa."
                },
                {
                    "kind": "p",
                    "text": "<strong>CAH:</strong> Kosinus = Sisi samping / Hipotenusa."
                },
                {
                    "kind": "p",
                    "text": "<strong>TOA:</strong> Tangen = Sisi depan / Sisi samping."
                },
                {
                    "kind": "p",
                    "text": "TOA berkaitan dengan rumus tangen [[\\tan(A)=a/b]]: <strong>T</strong> berarti tangen, <strong>O</strong> menempatkan sisi depan di atas, dan <strong>A</strong> menempatkan sisi samping di bawah. Jembatan keledai ini membantu Anda memilih pembilang dan penyebut yang benar sebelum angka apa pun masuk ke perhitungan. Bagian ini tetap berfokus pada tangen; kedua rasio lainnya memiliki halamannya sendiri."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Tangen Tidak Menggunakan Hipotenusa"
                },
                {
                    "kind": "p",
                    "text": "Tangen membandingkan kedua kaki yang saling tegak lurus secara langsung, sehingga hipotenusa tidak diperlukan. Dengan [[a=3]] dan [[b=4]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "Rasio ini sudah mencakup segalanya tentang bagaimana sisi depan dibandingkan dengan sisi samping; membawa hipotenusa akan mengubah pertanyaan yang sedang dijawab. Jika hipotenusa dibutuhkan untuk soal yang berbeda, teorema Pythagoras menghitungnya dari kedua kaki. Tangen sendiri tidak pernah memintanya."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Tangen Adalah Rasio Tak Berdimensi"
                },
                {
                    "kind": "p",
                    "text": "Membagi satu panjang dengan panjang lain menghilangkan satuan fisik. Dengan satuan yang cocok:"
                },
                {
                    "kind": "p",
                    "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "Meternya saling meniadakan, menyisakan angka biasa. Rasio yang sama berasal dari 300 cm dan 400 cm, karena perubahan satuan memengaruhi kedua sisi secara sama. Satu-satunya syarat adalah kedua pengukuran menggunakan satuan yang cocok: mencampur meter dengan sentimeter menghasilkan angka yang tak bermakna, sedangkan mengubah satuan terlebih dahulu menjaga rasio tetap jujur."
                },
                {
                    "kind": "h3",
                    "text": "Apa Arti Nilai Tangen 0.75?"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=0.75]] berarti sisi depan adalah 0.75 kali sisi samping, atau 75 satuan kenaikan vertikal untuk setiap 100 satuan jarak horizontal dalam geometri garis lurus yang sama. Bayangkan atap yang menanjak 75 cm untuk setiap 100 cm jarak horizontal: itulah tepatnya yang digambarkan 0.75. Ini tidak berarti sudutnya [[0.75^\\circ]]; rasio dan sudut adalah besaran yang berbeda, dan mencampuradukkan keduanya adalah salah satu kesalahan paling umum dalam trigonometri."
                },
                {
                    "kind": "h3",
                    "text": "Apa Arti Nilai Tangen 1?"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=1]] berarti [[a=b]]: sisi depan dan sisi samping sama panjang. Segitiga siku-siku sama kaki memiliki dua kaki yang sama, dan karena kedua sudut lancip harus berbagi 90 derajat secara sama, masing-masing adalah [[45^\\circ]]:"
                },
                {
                    "kind": "p",
                    "text": "[[A=45^\\circ]]"
                },
                {
                    "kind": "p",
                    "text": "Kaki yang sama, sudut lancip yang sama, tangen tepat 1. Ini adalah titik keseimbangan skala tangen: di bawah 1 segitiga lebih lebar daripada tingginya, di atas 1 ia lebih tinggi daripada lebarnya."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Tangen Bisa Lebih Besar dari 1"
                },
                {
                    "kind": "p",
                    "text": "Tidak seperti sinus dan kosinus, tangen tidak memiliki batas atas untuk sudut lancip. Jika sisi depan tumbuh melampaui sisi samping, rasio melewati 1 tanpa masalah. Dengan [[a=6]] dan [[b=3]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan dua kali lebih panjang daripada sisi samping. Nilai tangen yang lebih besar dari 1 valid secara matematis dan tidak menandakan kesalahan kalkulator; ia hanya menggambarkan segitiga yang curam, seperti tangga tinggi yang berdiri dekat dengan dinding."
                },
                {
                    "kind": "h3",
                    "text": "Bagaimana Tangen Berkaitan dengan Sinus dan Kosinus"
                },
                {
                    "kind": "p",
                    "text": "Mulailah dengan dua rasio lainnya:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sin(A)=\\frac{a}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "Bagi sinus dengan kosinus dan hipotenusa saling meniadakan:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Oleh karena itu:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Identitas ini cocok dengan definisi sisi depan per sisi samping, dan memberikan pemeriksaan silang yang berguna: setiap hasil tangen harus sama dengan sinus dibagi kosinus untuk sudut yang sama."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "Tiga tahap: segitiga 3-4-5, rumus tangen tan(A)=a/b, hasil 0.75, sisi depan adalah 75 persen dari sisi samping",
                    "caption": "Tiga tahap: beri label segitiga 3-4-5, tulis tan(A) = a/b, lalu bagi 3 dengan 4 untuk mendapatkan 0.75."
                }
            ]
        },
        "sec-formula": {
            "h2": "Cara Kerja Rumus Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Mulailah dengan definisi:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
                },
                {
                    "kind": "p",
                    "text": "Lalu gunakan notasi di halaman ini:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan berada pada pembilang karena tangen mengukur seberapa besar sisi di seberang sudut; sisi samping berada pada penyebut karena ia adalah sisi yang dibandingkan. Tukar keduanya dan Anda mendapatkan kotangen, rasio yang sama sekali berbeda."
                },
                {
                    "kind": "h3",
                    "text": "Contoh yang Dikerjakan Penuh: Segitiga Siku-Siku 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi depan [[a=3\\,\\text{cm}]], sisi samping [[b=4\\,\\text{cm}]], dan hipotenusa [[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 1:</strong> Tulis rumusnya. [[\\tan(A)=a/b]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 2:</strong> Substitusikan nilai-nilai yang diketahui. [[\\tan(A)=3/4]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 3:</strong> Bagi. [[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 4:</strong> Tafsirkan hasilnya. Sisi depan 75 persen dari panjang sisi samping."
                },
                {
                    "kind": "p",
                    "text": "<strong>Langkah 5:</strong> Verifikasi segitiganya. [[3^2+4^2=5^2]], yaitu [[9+16=25]]. Panjang sisi-sisinya konsisten dengan segitiga siku-siku yang asli."
                },
                {
                    "kind": "h3",
                    "text": "Temukan Sudut dari Rasio"
                },
                {
                    "kind": "p",
                    "text": "Jika sudutnya sendiri yang diperlukan, terapkan tangen invers pada rasio:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "Tangen invers juga disebut arkus tangen. Menghitung rasio tangen dan menghitung sudut adalah operasi yang terpisah: rasio menggambarkan bentuk segitiga, sedangkan tangen invers mengubah bentuk itu menjadi derajat. Kalkulator rasio tangen di halaman ini menghasilkan rasio; mendapatkan kembali sudutnya adalah langkah lanjutan pada kalkulator ilmiah."
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
            "h2": "Cara Menggunakan Kalkulator Rasio Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Langkah-langkah di bawah ini sesuai dengan antarmuka langsung di halaman ini. Setiap langkah penting, karena hasil tangen hanya seterpercaya dua pengukuran di belakangnya."
                }
            ],
            "steps": [
                "<strong>Tentukan sudut acuan [[A]].</strong> Tangen selalu bekerja dari satu sudut lancip; menamainya terlebih dahulu menetapkan sisi mana yang depan dan sisi mana yang samping.",
                "<strong>Temukan sisi depan [[a]], tepat di seberang sudut [[A]].</strong> Ini adalah sisi yang tidak pernah menyentuh titik sudut sudut tersebut.",
                "<strong>Temukan sisi samping [[b]], yang menyentuh sudut [[A]] dan bukan hipotenusa.</strong> Periksa kembali bahwa Anda tidak keliru mengambil sisi miring.",
                "<strong>Dapatkan atau ukur kedua panjang sisi.</strong> Meteran, gambar berskala, atau spesifikasi yang diketahui semuanya bisa, selama angka-angkanya menggambarkan segitiga yang sama.",
                "<strong>Masukkan panjang sisi depan di kolom input pertama.</strong> Ini adalah pembilang dari pecahan.",
                "<strong>Masukkan panjang sisi samping di kolom input kedua.</strong> Ini adalah penyebut.",
                "<strong>Pilih satuan pengukuran yang cocok menggunakan pemilih satuan yang tersedia.</strong> Kedua input harus dalam satuan yang sama, atau diubah ke satu satuan sebelum dibagi.",
                "<strong>Pastikan kedua pengukuran positif.</strong> Sisi nol atau negatif tidak bisa dimiliki segitiga nyata.",
                "<strong>Klik Hitung tan(A).</strong> Alat ini membagi sisi depan dengan sisi samping.",
                "<strong>Baca rasio tangen yang dihasilkan.</strong> Jawabannya adalah angka biasa, tanpa derajat dan tanpa satuan panjang yang menempel.",
                "<strong>Periksa apakah hasilnya kurang dari, sama dengan, atau lebih besar dari 1.</strong> Di bawah 1 berarti segitiga lebih lebar daripada tingginya; tepat 1 berarti kakinya sama panjang; di atas 1 berarti sisi depan lebih panjang.",
                "<strong>Gunakan Atur Ulang saat Anda ingin menghapus input dan memulai perhitungan lain.</strong> Input baru layak mendapatkan awal yang baru, bukan angka sisa dari soal sebelumnya."
            ],
            "closingParagraphs": [
                "Kalkulator tidak memerlukan hipotenusa atau input sudut. Kalkulator melakukan satu operasi, pembagian [[a/b]], dan melakukannya pada tepat kedua kaki yang Anda tentukan."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "Contoh Langkah-demi-Langkah Menghitung Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Empat contoh yang dikerjakan membangun keterampilan inti sebelum aplikasi praktis. Masing-masing mengikuti irama yang sama: tulis rumus, substitusikan, bagi, tafsirkan."
                },
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
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan 75 persen dari panjang sisi samping. Karena sisi depan adalah kaki yang lebih pendek di sini, rasio berada di bawah 1, menggambarkan segitiga yang lebih lebar daripada tingginya."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 2: Segitiga Siku-Siku 5-12-13"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi depan [[a=5\\,\\text{m}]], sisi samping [[b=12\\,\\text{m}]], dan hipotenusa [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{5}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan kira-kira 41.67 persen dari panjang sisi samping. Tripel 5-12-13 adalah tripel Pythagoras lainnya, sehingga [[5^2+12^2=13^2]] mengonfirmasi segitiga siku-siku yang asli."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 3: Segitiga 45-45-90"
                },
                {
                    "kind": "p",
                    "text": "Diketahui sisi depan [[a=1\\,\\text{cm}]], sisi samping [[b=1\\,\\text{cm}]], dan hipotenusa [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
                },
                {
                    "kind": "p",
                    "text": "Kaki yang sama menghasilkan rasio tangen 1. Ini adalah titik tengah alami skala tangen dan nilai yang layak dihafal: setiap kali kedua kaki sama, sudut lancipnya masing-masing 45 derajat."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 4: Segitiga 30-60-90"
                },
                {
                    "kind": "p",
                    "text": "Untuk sudut acuan [[A=60^\\circ]], gunakan sisi depan [[a=\\sqrt{3}\\,\\text{cm}]], sisi samping [[b=1\\,\\text{cm}]], dan hipotenusa [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan lebih panjang daripada sisi samping, sehingga rasio melebihi 1, sebagaimana seharusnya untuk sudut 60 derajat. Bandingkan dengan sudut komplementernya:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "Sudut-sudut lancip yang komplementer memiliki nilai tangen yang saling berkebalikan, karena menukar sudut acuan menukar label sisi depan dan sisi samping. [[0.5774 \\times 1.7321 \\approx 1]], yang mengonfirmasi hubungan kebalikannya."
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
            "h2": "Contoh Nyata Penggunaan Rasio Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tangen mendapatkan tempatnya di dunia kerja karena begitu banyak masalah nyata sebenarnya adalah masalah kenaikan per jarak horizontal yang menyamar. Dua belas contoh yang dikerjakan menunjukkan pola yang berulang di jalur landai, atap, tangga, dan garis-garis survei."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 5: Menghitung Kemiringan Jalur Landai"
                },
                {
                    "kind": "p",
                    "text": "Jalur landai yang disederhanakan menanjak 0.6 m sepanjang jarak horizontal 8 m. Kenaikan vertikal adalah sisi depan, [[a=0.6\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=8\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.075}]]"
                },
                {
                    "kind": "p",
                    "text": "Kemiringan persen adalah [[0.075 \\times 100\\%=7.5\\%]], dan sudutnya adalah [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Jalur landai naik 7.5 satuan vertikal untuk setiap 100 satuan horizontal. Perhitungan ini tidak menyatakan kepatuhan aksesibilitas atau kode bangunan."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 6: Menghitung Kemiringan Atap"
                },
                {
                    "kind": "p",
                    "text": "Atap menanjak 3 m sepanjang jarak horizontal 4 m. Kenaikan vertikal adalah sisi depan, [[a=3\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Atap naik 0.75 satuan untuk setiap satuan horizontal, kemiringan 75 persen, dan sudut kemiringannya adalah [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Kemiringan atap juga dinyatakan sebagai kenaikan per jarak horizontal dalam satuan tradisional, seperti inci kenaikan per 12 inci jarak horizontal, yang merupakan rasio yang sama dalam pakaian yang berbeda. Rasio ini bukan merupakan penilaian desain atap yang lengkap."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 7: Menemukan Sudut Tangga"
                },
                {
                    "kind": "p",
                    "text": "Tangga mencapai 4 m ke atas dinding, dan dasarnya berjarak 3 m horizontal dari dinding. Sudut [[A]] berada di antara tangga dan tanah. Tinggi vertikal adalah sisi depan, [[a=4\\,\\text{m}]], dan jarak tanah adalah sisi samping, [[b=3\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{4}{3}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Sudutnya adalah [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. Tinggi vertikal lebih besar daripada jarak horizontal, itulah sebabnya rasio melebihi 1. Contoh ini menjelaskan geometri dan tidak menyatakan apakah tangga diposisikan dengan aman."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 8: Memperkirakan Sudut Elevasi ke Pohon"
                },
                {
                    "kind": "p",
                    "text": "Pohon tingginya 12 m, dan bayangannya 9 m di tanah datar. Anggap sinar matahari membentuk model segitiga siku-siku yang disederhanakan. Tinggi pohon adalah sisi depan, [[a=12\\,\\text{m}]], dan panjang bayangan adalah sisi samping, [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Tingginya kira-kira 1.3333 kali panjang bayangan, dan sudut geometris yang bersesuaian adalah sekitar [[53.13^\\circ]]. Contoh ini mengasumsikan tanah datar, pohon vertikal, dan model bayangan garis lurus."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 9: Mengukur Beda Ketinggian"
                },
                {
                    "kind": "p",
                    "text": "Pengukuran survei menunjukkan beda ketinggian vertikal 15 m sepanjang jarak horizontal 20 m. Beda ketinggian adalah sisi depan, [[a=15\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=20\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{15}{20}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Beda ketinggian adalah 0.75 kali jarak horizontal, dan sudut yang bersesuaian adalah sekitar [[36.87^\\circ]]. Survei sebenarnya bisa memerlukan penyesuaian tinggi instrumen, koreksi, dan pengukuran tambahan di luar model yang disederhanakan ini."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 10: Menghitung Kemiringan Persen Jalan"
                },
                {
                    "kind": "p",
                    "text": "Ruas jalan yang disederhanakan menanjak 1.2 m sepanjang jarak horizontal 24 m. Kenaikan vertikal adalah sisi depan, [[a=1.2\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.05}]]"
                },
                {
                    "kind": "p",
                    "text": "Kemiringan persen adalah [[0.05 \\times 100\\%=5\\%]], dan sudutnya adalah [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. Kemiringan 5 persen tidak berarti sudut 5 derajat; perbedaan ini adalah sumber kebingungan yang umum, dan kedua angka itu tidak boleh digunakan secara bergantian."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 11: Menghitung Kecuraman Tangga"
                },
                {
                    "kind": "p",
                    "text": "Tangga yang disederhanakan memiliki kenaikan vertikal total 2.4 m dan jarak horizontal 3.2 m. Kenaikan vertikal adalah sisi depan, [[a=2.4\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=3.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Kenaikan vertikal adalah 75 persen dari jarak horizontal, dan sudutnya sekitar [[36.87^\\circ]]. Perhitungan ini tidak memverifikasi dimensi tangga, kenyamanan, atau kepatuhan kode bangunan."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 12: Memahami Sudut Kabel Penahan"
                },
                {
                    "kind": "p",
                    "text": "Kabel penahan menempel pada tiang 12 m di atas tanah, sedangkan jangkar tanahnya berjarak 5 m horizontal dari tiang. Tinggi pemasangan adalah sisi depan, [[a=12\\,\\text{m}]], dan jarak tanah adalah sisi samping, [[b=5\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{5}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "Sudutnya adalah [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. Tinggi vertikal adalah 2.4 kali jarak jangkar horizontal, kabel yang curam menurut ukuran apa pun. Rasio tangen tidak menentukan tegangan kabel, kekuatan jangkar, atau keamanan struktural."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 13: Menghitung Arah Lengan Derek"
                },
                {
                    "kind": "p",
                    "text": "Lengan derek yang disederhanakan memiliki komponen vertikal 8 m dan proyeksi horizontal 6 m. Komponen vertikal adalah sisi depan, [[a=8\\,\\text{m}]], dan proyeksi horizontal adalah sisi samping, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{8}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Sudut yang bersesuaian adalah sekitar [[53.13^\\circ]]. Komponen vertikal kira-kira 1.3333 kali proyeksi horizontal. Ini adalah contoh geometri yang disederhanakan dan tidak menyatakan kapasitas derek atau keamanan operasi."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 14: Memperkirakan Gradien Jalur Pendakian"
                },
                {
                    "kind": "p",
                    "text": "Ruas pendakian lurus yang disederhanakan memiliki kenaikan ketinggian vertikal 120 m dan jarak horizontal 800 m. Kenaikan ketinggian adalah sisi depan, [[a=120\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=800\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{120}{800}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.15}]]"
                },
                {
                    "kind": "p",
                    "text": "Kemiringan persen adalah 15 persen, dan sudut yang bersesuaian adalah sekitar [[8.53^\\circ]]. Model yang disederhanakan ini mewakili gradien garis lurus yang konstan, bukan seluruh jalur pendakian yang berkelok."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 15: Mengevaluasi Penopang Mekanis"
                },
                {
                    "kind": "p",
                    "text": "Penopang mekanis diagonal memiliki komponen vertikal 1.5 m dan komponen horizontal 2 m. Komponen vertikal adalah sisi depan, [[a=1.5\\,\\text{m}]], dan komponen horizontal adalah sisi samping, [[b=2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Komponen vertikal adalah 75 persen dari komponen horizontal. Rasio tidak menentukan kekuatan penopang, kapasitas beban, atau kesesuaiannya."
                },
                {
                    "kind": "h3",
                    "text": "Contoh 16: Menemukan Sudut Elevasi ke Gedung"
                },
                {
                    "kind": "p",
                    "text": "Pengamat berdiri 24 m horizontal dari gedung. Puncak gedung berada 18 m di atas ketinggian mata pengamat. Beda vertikal adalah sisi depan, [[a=18\\,\\text{m}]], dan jarak horizontal adalah sisi samping, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{18}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Sudut elevasinya sekitar [[36.87^\\circ]] dalam geometri yang disederhanakan. Ini adalah sudut ke puncak relatif terhadap ketinggian mata horizontal pengamat, belum tentu tinggi total gedung."
                },
                {
                    "kind": "p",
                    "text": "Tangen adalah rasio tak berdimensi, tetapi nilai praktisnya berasal dari membandingkan kenaikan vertikal dengan jarak horizontal, menggambarkan kecuraman lereng lurus, menghitung sudut elevasi, dan menyelesaikan sisi yang hilang ketika sudutnya diketahui. Tiga besaran terkait mudah tertukar, jadi bedakan dengan jelas: <strong>rasio tangen</strong> adalah kenaikan vertikal dibagi jarak horizontal; <strong>kemiringan persen</strong> adalah rasio tangen dikalikan 100 persen; <strong>sudut</strong> adalah hasil penerapan tangen invers pada rasio. Tangen saja tidak pernah menentukan keamanan struktural, kapasitas beban, aksesibilitas, atau kepatuhan rekayasa."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["Situasi", "Sisi depan [[a]]", "Sisi samping [[b]]", "Rumus", "Rasio", "Kemiringan", "Arti"],
                    "rows": [
                        ["Jalur landai", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Kemiringan landai, naik 7.5 per 100 jarak horizontal"],
                        ["Kemiringan atap", "3 m", "4 m", "3/4", "0.75", "75%", "Kenaikan adalah 75% dari jarak horizontal"],
                        ["Tangga sandar", "4 m", "3 m", "4/3", "1.3333", "n/a", "Tinggi melebihi jarak dasar, sudut 53.13 derajat"],
                        ["Ketinggian pohon", "12 m", "9 m", "12/9", "1.3333", "n/a", "Tinggi adalah 1.3333 kali panjang bayangan"],
                        ["Survei", "15 m", "20 m", "15/20", "0.75", "75%", "Beda ketinggian adalah 75% dari jarak horizontal"],
                        ["Kemiringan jalan", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "Kemiringan 5%, bukan sudut 5 derajat"],
                        ["Tangga", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Kenaikan adalah 75% dari jarak horizontal"],
                        ["Kabel penahan", "12 m", "5 m", "12/5", "2.4", "n/a", "Kabel curam, sudut 67.38 derajat"],
                        ["Lengan derek", "8 m", "6 m", "8/6", "1.3333", "n/a", "Vertikal adalah 1.3333 kali horizontal"],
                        ["Jalur pendakian", "120 m", "800 m", "120/800", "0.15", "15%", "Gradien stabil 15%"],
                        ["Penopang mekanis", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "Vertikal adalah 75% dari horizontal"],
                        ["Ketinggian gedung", "18 m", "24 m", "18/24", "0.75", "n/a", "Sudut elevasi 36.87 derajat"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "Empat panel: jalur landai 0.075, kemiringan atap 0.75, tangga 1.3333, survei 0.75, masing-masing dengan segitiga berlabel",
                    "caption": "Empat perhitungan praktis: jalur landai, kemiringan atap, tangga, dan survei, masing-masing dengan segitiga, rumus, dan rasionya."
                }
            ]
        },
        "sec-angle": {
            "h2": "Memahami Hubungan Antara Tangen dan Besar Sudut",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tangen meningkat seiring bertambahnya sudut acuan, dan geometri menjelaskan alasannya. Ketika sudut [[A]] kecil, sisi depan pendek relatif terhadap sisi samping, sehingga rasio berada dekat 0. Saat sudut melebar, sisi depan menjadi bagian yang lebih panjang dari sisi samping, dan rasio menanjak: melewati 1 pada [[45^\\circ]], lalu tanpa batas saat sudut mendekati [[90^\\circ]]. Tabel di bawah menggunakan panjang sisi ilustratif; rasio, bukan ukuran absolut segitiga, yang menentukan sudut."
                },
                {
                    "kind": "p",
                    "text": "Polanya sederhana: tangen kecil ketika sisi depan pendek relatif terhadap sisi samping, sama dengan 1 pada [[45^\\circ]], melebihi 1 untuk sudut lancip yang lebih besar, mendekati nol saat sudut mendekati [[0^\\circ]], dan tumbuh tanpa batas saat sudut mendekati [[90^\\circ]]. Segitiga-segitiga dengan sudut yang sama memiliki rasio tangen yang sama meskipun panjang sisinya berbeda, karena rasio menangkap bentuk, bukan ukuran."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["Sudut [[A]]", "Sisi depan [[a]]", "Sisi samping [[b]]", "Rasio tangen"],
                    "rows": [
                        ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Sekitar 0.5774"],
                        ["[[45^\\circ]]", "1", "1", "1"],
                        ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Sekitar 1.7321"],
                        ["[[75^\\circ]]", "Sekitar 3.7321", "1", "Sekitar 3.7321"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "Tiga segitiga pada 30, 45, 60 derajat dengan nilai tangen 0.5774, 1, 1.7321; tangen naik seiring sudut",
                    "caption": "Saat sudut A membesar, sisi depan menjadi bagian yang lebih panjang dari sisi samping, sehingga tan(A) naik."
                }
            ]
        },
        "sec-side": {
            "h2": "Cara Menemukan Sisi Depan Menggunakan Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Rumus tangen dapat disusun ulang untuk menemukan sisi depan ketika sisi samping dan sudut diketahui. Mulailah dengan [[\\tan(A)=a/b]] dan kalikan kedua ruas dengan [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{a=b\\tan(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Sisi depan sama dengan sisi samping dikalikan tangen sudut. Diketahui sisi samping [[b=10\\,\\text{m}]] dan sudut [[A=30^\\circ]], dan mengetahui [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:"
                },
                {
                    "kind": "p",
                    "text": "[[a=10\\times0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Kenaikan vertikal kira-kira 5.774 m untuk jarak horizontal 10 m pada sudut ini."
                },
                {
                    "kind": "p",
                    "text": "Sisi samping dapat ditemukan dengan cara yang sama dengan menyusun ulang lagi:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Dengan sisi depan [[a=6\\,\\text{m}]] dan [[A=45^\\circ]]: karena [[\\tan(45^\\circ)=1]], [[b=6/1]], sehingga [[\\boxed{b=6\\,\\text{m}}]]. Ini adalah penyusunan ulang matematis dari rumus yang sama. Kalkulator di halaman ini menghasilkan rasio tangen dari panjang sisi; ia tidak menghitung sisi yang hilang secara langsung."
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
            "h2": "Cara Menemukan Sudut dari Rasio Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Rasio tangen dan sudut adalah besaran yang berbeda: satu adalah perbandingan tak berdimensi dari sisi-sisi, yang lain diukur dalam derajat. Ketika rasio diketahui dan sudutnya diperlukan, tangen invers dapat digunakan:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Tangen invers juga disebut arkus tangen. Diketahui [[\\tan(A)=0.75]]:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "Sudutnya kira-kira [[36.87^\\circ]] ketika kalkulator diatur ke derajat."
                },
                {
                    "kind": "h3",
                    "text": "Mengapa Mode Sudut Kalkulator Penting"
                },
                {
                    "kind": "p",
                    "text": "Sudut dapat diukur dalam derajat atau radian, dan kalkulator ilmiah harus diatur ke mode yang dimaksud sebelum tangen invers diterapkan. Lingkaran penuh adalah 360 derajat atau [[2\\pi]] radian, sehingga [[45^\\circ=\\pi/4]] radian. Rasio tangen itu sendiri tidak memiliki satuan derajat maupun radian; satuan-satuan itu berlaku untuk sudut yang diperoleh kembali darinya. Kalkulator rasio tangen di halaman ini menghasilkan rasio secara langsung dan tidak menghasilkan sudut."
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
            "h2": "Kesalahan Umum Saat Menghitung Tangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Sebagian besar kesalahan tangen berasal dari pecahan yang terbalik, sisi yang salah diberi label, atau rasio yang tertukar dengan sudut. Jalani daftar ini sebelum mempercayai sebuah hasil."
                }
            ],
            "steps": [
                "<strong>Membalik rumus dan menghitung [[b/a]] alih-alih [[a/b]].</strong> Ini menghasilkan kotangen, bukan tangen. Dengan [[a=3]] dan [[b=4]], pecahan yang terbalik menghasilkan 1.3333; yang benar menghasilkan 0.75.",
                "<strong>Mencampuradukkan tangen dengan sinus.</strong> Tangen membagi sisi depan dengan sisi samping; sinus membagi sisi depan dengan hipotenusa. Jika hipotenusa ada pada penyebut, jawabannya adalah sinus, bukan tangen.",
                "<strong>Mencampuradukkan tangen dengan kosinus.</strong> Kosinus membagi sisi samping dengan hipotenusa. Tangen tidak pernah menggunakan hipotenusa sama sekali, jadi hipotenusa di posisi mana pun menandakan rasio yang salah.",
                "<strong>Mencampuradukkan tangen dengan kotangen.</strong> Kotangen adalah kebalikannya, sisi samping per sisi depan. Nama yang mirip menyebabkan kesalahan nyata, tetapi urutan pecahannya tepat terbalik.",
                "<strong>Memasukkan hipotenusa dalam rumus tangen utama.</strong> Hipotenusa tidak berperan dalam [[a/b]]. Jika ia muncul dalam perhitungan, rumus yang salah telah digunakan.",
                "<strong>Tertukar antara sisi depan dan sisi samping.</strong> Keduanya adalah kaki, sehingga label-labelnya mudah tertukar. Selalu telusuri dari sudut acuan: yang di seberangnya adalah sisi depan, yang menyentuhnya adalah sisi samping.",
                "<strong>Mengidentifikasi sisi-sisi relatif terhadap sudut acuan yang salah.</strong> Beralih dari sudut [[A]] ke sudut [[C]] menukar label sisi depan dan sisi samping, yang membalik rasio menjadi kebalikannya.",
                "<strong>Menganggap tangen harus kurang dari 1.</strong> Aturan itu milik sinus dan kosinus. Tangen tidak memiliki batas atas untuk sudut lancip, dan hasil di atas 1 sepenuhnya valid.",
                "<strong>Melaporkan rasio tangen sebagai sudut dalam derajat.</strong> Hasil 0.75 adalah rasio, bukan [[0.75^\\circ]]. Memperlakukannya sebagai derajat memasukkan nilai tak bermakna ke setiap perhitungan lanjutan.",
                "<strong>Melaporkan rasio tangen dengan satuan pengukuran.</strong> Satuan saling meniadakan dalam pembagian, jadi '0.75 m' salah. Tulis angka biasanya dan simpan satuannya pada pengukuran input di tempatnya.",
                "<strong>Memasukkan panjang sisi nol atau negatif.</strong> Segitiga tidak dapat memiliki sisi nol atau negatif, sehingga input-input ini menandakan kesalahan entri data atau pengukuran yang hilang, bukan kasus batas yang valid.",
                "<strong>Mencampur satuan pengukuran yang tidak cocok.</strong> Sisi depan 3 m dengan sisi samping 40 cm menghasilkan 7.5, angka yang tak bermakna. Ubah ke satu satuan terlebih dahulu: 3 m dan 4 m menghasilkan 0.75 yang benar.",
                "<strong>Membulatkan terlalu dini.</strong> Membulatkan pembagian perantara ke dua desimal lalu melanjutkan perhitungan akan melipatgandakan kesalahan. Simpan presisi penuh di setiap langkah dan bulatkan hanya jawaban akhirnya.",
                "<strong>Mencampuradukkan kemiringan persen dengan sudut dalam derajat.</strong> Kemiringan 5 persen berasal dari tangen 0.05, tetapi sudutnya adalah [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], bukan 5 derajat. Kemiringan dan sudut adalah besaran yang berbeda.",
                "<strong>Menganggap rasio tangen menentukan ukuran absolut segitiga.</strong> Tangen menggambarkan bentuk, bukan ukuran: tak terhingga segitiga berbagi tangen 0.75, dari sisi depan 3 cm hingga 3 km. Rasio menetapkan proporsinya; panjang sebenarnya memerlukan setidaknya satu pengukuran sisi."
            ],
            "closingParagraphs": [
                "<strong>Salah Versus Benar: Perbandingan yang Dikerjakan</strong> Diketahui sisi depan [[a=3]] dan sisi samping [[b=4]]:",
                "<strong>Salah:</strong> [[4/3\\approx1.3333]]. Ini adalah rasio kotangen untuk sudut [[A]], bukan rasio tangen. Pembilang dan penyebutnya terbalik.",
                "<strong>Benar:</strong> [[\\tan(A)=3/4=0.75]].",
                "<strong>Verifikasi menggunakan sinus dan kosinus:</strong> dengan [[c=5]], [[\\sin(A)=3/5=0.6]] dan [[\\cos(A)=4/5=0.8]]. Oleh karena itu [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], yang mengonfirmasi perhitungan tangen."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "Cara Memeriksa Apakah Hasil Tangen Anda Valid",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Segitiga siku-siku yang valid dan tidak degeneratif memerlukan dua kaki positif, [[a \\gt 0]] dan [[b \\gt 0]], yang diukur dalam satuan yang cocok, sehingga hasil tangen harus positif:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
                },
                {
                    "kind": "p",
                    "text": "Tidak ada syarat sisi depan harus lebih pendek daripada sisi samping, sehingga hasil bisa berada di bawah, tepat pada, atau di atas 1. Hasil nol atau negatif biasanya menunjukkan input yang tidak valid atau label yang terbalik."
                },
                {
                    "kind": "h3",
                    "text": "Metode 1: Periksa Rasio"
                },
                {
                    "kind": "p",
                    "text": "Verifikasi ulang [[\\tan(A)=a/b]] secara langsung. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4=0.75]]. Karena sisi depan lebih pendek daripada sisi samping, rasio seharusnya berada di bawah 1; jika perhitungan tangan kedua tidak setuju, sebuah sisi salah diberi label atau sebuah satuan tercampur."
                },
                {
                    "kind": "h3",
                    "text": "Metode 2: Periksa Teorema Pythagoras"
                },
                {
                    "kind": "p",
                    "text": "Hitung hipotenusa bila diperlukan: [[c=\\sqrt{a^2+b^2}]]. Untuk [[a=3]] dan [[b=4]]: [[c=\\sqrt{9+16}=5]], dan [[3^2+4^2=5^2]]. Ini mengonfirmasi dimensi segitiga siku-siku 3-4-5. Hipotenusa adalah nilai verifikasi di sini, bukan bagian dari rumus tangen utama."
                },
                {
                    "kind": "h3",
                    "text": "Metode 3: Periksa Menggunakan Tangen Invers"
                },
                {
                    "kind": "p",
                    "text": "Untuk rasio tangen 0.75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Karena rasio berada di bawah 1, sudutnya seharusnya berada di bawah [[45^\\circ]]; jika tidak, label sisinya mungkin tertukar. Perbedaan kecil bisa muncul dari pembulatan."
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
            "h2": "Tangen vs. Sinus, Kosinus, dan Kotangen",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Setiap rasio membandingkan pasangan sisi yang berbeda, menggunakan sudut acuan dan label sisi yang sama:"
                },
                {
                    "kind": "p",
                    "text": "Tangen dan kotangen adalah pasangan yang saling berkebalikan: [[\\cot(A)=1/\\tan(A)]]. Jika [[\\tan(A)=0.75]], maka [[\\cot(A)\\approx1.3333]]. Pilih tangen ketika kedua kaki diketahui atau ketika soal melibatkan kenaikan per jarak horizontal; pilih sinus atau kosinus ketika hipotenusa masuk dalam perhitungan, dan kotangen ketika perbandingannya berjalan sebaliknya. Pertahankan tangen sebagai pusat: rasio-rasio tetangga memiliki halamannya sendiri dengan pembahasan penuh."
                },
                {
                    "kind": "p",
                    "text": "Untuk rasio-rasio tetangga, lihat <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sinus</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosinus</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kotangen</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Sekan</a>, dan <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kalkulator Rasio Kosekan</a>."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["Rasio", "Rumus", "Perbandingan sisi"],
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
                    "name": "Kalkulator Rasio Sinus",
                    "desc": "Hitung rasio sinus, sisi depan per hipotenusa, dari dua panjang sisi."
                },
                {
                    "name": "Kalkulator Rasio Kosinus",
                    "desc": "Hitung rasio kosinus, sisi samping per hipotenusa, dari dua panjang sisi."
                },
                {
                    "name": "Kalkulator Rasio Kotangen",
                    "desc": "Hitung rasio kotangen, sisi samping per sisi depan, dari dua panjang sisi."
                },
                {
                    "name": "Kalkulator Rasio Sekan",
                    "desc": "Hitung rasio sekan, hipotenusa per sisi samping, dari dua panjang sisi."
                },
                {
                    "name": "Kalkulator Rasio Kosekan",
                    "desc": "Hitung rasio kosekan, hipotenusa per sisi depan, dari dua panjang sisi."
                },
                {
                    "name": "Kalkulator Sudut Segitiga Siku-Siku",
                    "desc": "Temukan sudut lancip yang hilang dari segitiga siku-siku dari sisi-sisi yang diketahui."
                },
                {
                    "name": "Kalkulator Sisi Segitiga Siku-Siku",
                    "desc": "Temukan panjang sisi yang hilang dari segitiga siku-siku dari sisi dan sudut yang diketahui."
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Gunakan Rasio Tangen dengan Percaya Diri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tangen adalah rasio dari kedua kaki: bagi sisi depan dengan sisi samping dan Anda telah menggambarkan berapa satuan kenaikan vertikal yang datang dengan setiap satuan jarak horizontal. Rumus [[\\tan(A)=a/b]] hanya memerlukan dua pengukuran, jawabannya selalu berupa angka tak berdimensi yang bisa berada di bawah, tepat pada, atau di atas 1, dan nilainya tumbuh seiring bertambahnya sudut acuan. Ketika sisi yang hilang dibutuhkan, [[a=b\\tan(A)]] mendapatkan kembali sisi depan; ketika sudutnya dibutuhkan, [[A=\\tan^{-1}(a/b)]] akan menemukannya. Jalur landai, atap, tangga, atau 3-4-5 di buku teks, metodenya tidak pernah berubah: tentukan sisi depan, tentukan sisi samping, bagi, dan verifikasi dengan pemeriksaan rasio positif."
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
            "question": "Apa rumus rasio tangen untuk segitiga siku-siku?",
            "answer": "tan(A) = a / b: bagi sisi depan a dengan sisi samping b. Dengan sisi depan 3 cm dan sisi samping 4 cm, hasilnya adalah 3/4 = 0.75. Angka desimal itu adalah jawaban lengkap, rasio tak berdimensi, bukan sudut."
        },
        {
            "question": "Bagaimana cara menghitung tangen dari dua panjang sisi?",
            "answer": "Tentukan sudut acuan A, ukur sisi depan a dan sisi samping b dalam satuan yang sama, pastikan keduanya positif, lalu bagi: tan(A) = a / b. Di halaman ini, masukkan sisi depan di kolom pertama dan sisi samping di kolom kedua, lalu klik Hitung tan(A)."
        },
        {
            "question": "Mengapa tangen tidak menggunakan hipotenusa?",
            "answer": "Tangen membandingkan kedua kaki yang saling tegak lurus secara langsung: vertikal melawan horizontal. Hipotenusa tidak menambah informasi baru pada perbandingan itu, sehingga rumus utama hanya memerlukan sisi depan dan sisi samping. Teorema Pythagoras dapat mendapatkan kembali hipotenusa belakangan jika perhitungan lain membutuhkannya."
        },
        {
            "question": "Bisakah tangen lebih besar dari 1?",
            "answer": "Ya. Tangen tidak memiliki batas atas untuk sudut lancip. Ketika sisi depan lebih panjang daripada sisi samping, rasio melebihi 1: dengan a = 6 dan b = 3, tan(A) = 6/3 = 2. Hasil di atas 1 valid secara matematis dan tidak menandakan kesalahan kalkulator."
        },
        {
            "question": "Apa arti nilai tangen 0.75?",
            "answer": "Sisi depan adalah 75 persen dari sisi samping. Dalam segitiga 3-4-5, sisi di seberang sudut A adalah 3 satuan sedangkan sisi di sebelah sudut A adalah 4 satuan, sehingga tan(A) = 3/4 = 0.75. Ia menggambarkan bentuk segitiga dan bukan sudut 0.75 derajat."
        },
        {
            "question": "Apa perbedaan tangen dan kotangen?",
            "answer": "Keduanya saling berkebalikan. Tangen membagi sisi depan dengan sisi samping (a/b); kotangen membagi sisi samping dengan sisi depan (b/a). Jika tan(A) = 0.75, maka cot(A) = 1/0.75, sekitar 1.3333. Urutan pecahannya tepat terbalik."
        },
        {
            "question": "Bagaimana cara menghitung sudut dari rasio tangen?",
            "answer": "Terapkan tangen invers pada rasio: A = tan^-1(a/b). Untuk tan(A) = 0.75, A = tan^-1(0.75), sekitar 36.87 derajat. Atur kalkulator ilmiah ke mode derajat terlebih dahulu. Kalkulator di halaman ini menghasilkan rasio, bukan sudut."
        },
        {
            "question": "Bagaimana cara menemukan sisi depan menggunakan tangen?",
            "answer": "Susun ulang rumusnya menjadi a = b * tan(A). Jika sisi samping 10 m dan sudut A 30 derajat, tan(30 deg) sekitar 0.5774, sehingga a = 10 * 0.5774, sekitar 5.774 m. Ini adalah penyusunan ulang manual; kalkulator di halaman ini menghasilkan rasio dari panjang sisi, bukan sisi yang hilang."
        },
        {
            "question": "Bagaimana cara menemukan sisi samping menggunakan tangen?",
            "answer": "Susun ulang rumusnya menjadi b = a / tan(A). Jika sisi depan 6 m dan sudut A 45 derajat, tan(45 deg) = 1, sehingga b = 6/1 = 6 m. Ini adalah penyusunan ulang matematis dari rumus yang sama, bukan mode terpisah dari kalkulator di halaman ini."
        },
        {
            "question": "Apakah tangen sama dengan kemiringan?",
            "answer": "Keduanya berkaitan erat. Kemiringan sebagai kenaikan per jarak horizontal adalah perbandingan yang sama yang dibuat tangen: perubahan vertikal dibagi perubahan horizontal. Insinyur jalan yang menulis kemiringan 0.05 dan siswa trigonometri yang menulis tan(A) = 0.05 sedang menggambarkan rasio yang sama. Istilahnya berbeda karena konteks, bukan karena matematikanya."
        },
        {
            "question": "Apa perbedaan kemiringan persen dan sudut dalam derajat?",
            "answer": "Kemiringan persen adalah 100 kali rasio tangen: tangen 0.05 menghasilkan kemiringan 5%. Sudutnya adalah tangen invers dari rasio: tan^-1(0.05) sekitar 2.86 derajat. Kemiringan 5% karena itu bukan sudut 5 derajat. Mencampuradukkan keduanya adalah salah satu kesalahan tangen yang paling umum."
        },
        {
            "question": "Bagaimana tangen digunakan dalam konstruksi dan survei?",
            "answer": "Tangen membandingkan kenaikan vertikal dengan jarak horizontal, yang persis menggambarkan kemiringan atap, kemiringan jalur landai, kemiringan jalan, dan kecuraman tangga. Surveyor menggunakannya untuk mengubah beda ketinggian dan jarak horizontal menjadi sudut elevasi. Dalam setiap kasus, rasio saja tidak pernah mensertifikasi keamanan struktural atau kepatuhan kode."
        }
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "relatedHeading": "Jelajahi Kalkulator Trigonometri Terkait"
},
"ar": {
    "tocHeading": "في هذا الدليل",
    "tocItems": {
        "sec-intro": "ما هي حاسبة نسبة الظل؟",
        "sec-triangle": "فهم الضلع المقابل والضلع المجاور",
        "sec-whatis": "فهم نسبة الظل",
        "sec-formula": "كيف تعمل صيغة الظل",
        "sec-howto": "كيفية استخدام حاسبة نسبة الظل",
        "sec-examples": "أمثلة خطوة بخطوة لحساب الظل",
        "sec-applications": "أمثلة واقعية لاستخدام نسبة الظل",
        "sec-angle": "فهم العلاقة بين الظل وحجم الزاوية",
        "sec-side": "كيفية إيجاد الضلع المقابل باستخدام الظل",
        "sec-recover": "كيفية إيجاد زاوية من نسبة ظل",
        "sec-mistakes": "أخطاء شائعة عند حساب الظل",
        "sec-verify": "كيفية التحقق من صحة نتيجة الظل",
        "sec-vs": "الظل مقابل الجيب وجيب التمام وظل التمام",
        "sec-related": "استكشف حاسبات المثلثات ذات الصلة",
        "sec-faq": "الأسئلة الشائعة"
    },
    "sections": {
        "sec-intro": {
            "h2": "ما هي حاسبة نسبة الظل؟",
            "blocks": [
                {
                    "kind": "p",
                    "text": "تجيب حاسبة نسبة الظل عن سؤال واحد: بالنسبة لزاوية حادة في مثلث قائم الزاوية، كيف يقارن الضلع المقابل للزاوية بالضلع الملاصق لها؟ أدخل الضلع المقابل والضلع المجاور، وستقسم الأداة الضلع المقابل على الضلع المجاور، لتعيد [[\\tan(A)=a/b]]. ففي مثلث قائم الزاوية ضلعه المقابل 3 سم وضلعه المجاور 4 سم، تكون [[\\tan(A)=3/4=0.75]]. وهذا العدد 0.75 هو نسبة الظل: فهو يخبرك أن الضلع المقابل يساوي 75 بالمائة من طول الضلع المجاور. وليس زاوية، فلا تقرأه أبدا على أنه [[0.75^\\circ]]. ولا يدخل الوتر في هذا الحساب أبدا؛ فالضلع المقابل والضلع المجاور كافيان وحدهما. والظل أحد النسب المثلثية الأساسية، وقوته الخاصة في مقارنة الارتفاع الرأسي بالمسافة الأفقية، ولهذا يظهر في ميل الأسقف ودرجات الطرق ومنحدرات المزلقان. والنتيجة عدد بلا أبعاد: مقارنة خالصة بين طولين، ليست قياسا بالسنتيمترات ولا بالدرجات. وإن كانت الزاوية بالدرجات هي ما تحتاجه، فالظل العكسي يحول النسبة إلى درجات."
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
            "h2": "فهم الضلع المقابل والضلع المجاور",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "ما هو المثلث القائم الزاوية؟"
                },
                {
                    "kind": "p",
                    "text": "في المثلث القائم الزاوية توجد زاوية قياسها [[90^\\circ]] بالضبط، وهي الزاوية بين خطين متعامدين، كجدار يلتقي بأرضية مستوية. ويقع الوتر مقابل تلك الزاوية القائمة وهو دائما أطول ضلع، لأنه يجب أن يمتد على القطر الكامل عبر الركن. والزاويتان الأخريان تتقاسمان الدرجات التسعين المتبقية، فتكونان حادتين. ويلتقي الضلعان القائمان عند الزاوية القائمة متعامدين أحدهما على الآخر، والعلاقة بينهما وبين الوتر هي ما يجعل حساب المثلثات للمثلث القائم ممكنا."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الضلع المقابل؟"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل [[a]] هو الضلع الذي يقع مباشرة مقابل الزاوية المرجعية [[A]]، وهو الضلع الوحيد الذي لا يلامس رأسها أبدا. وفي المسائل العملية غالبا ما يلعب دور ارتفاع رأسي، أو فرق منسوب، أو طول: كارتفاع الجدار الذي يبلغه سلم، أو ارتفاع سقف، أو المركبة الرأسية لذراع رافعة. وأي ضلع يعد مقابلا يعتمد على الزاوية المرجعية المختارة، فالانتقال من الزاوية [[A]] إلى الزاوية [[C]] يبدل تسميتي المقابل والمجاور. وهو يظهر في بسط صيغة الظل لأن الظل يقيس مدى كبر ذلك الضلع المقابل للزاوية بالنسبة للضلع الملاصق لها."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الضلع المجاور؟"
                },
                {
                    "kind": "p",
                    "text": "الضلع المجاور [[b]] هو الضلع القائم الذي يلامس الزاوية المرجعية [[A]] دون أن يكون الوتر. وفي المسائل العملية غالبا ما يلعب دور مسافة أفقية أو مسافة أرضية: كقاعدة سلم بعيدا عن جدار، أو المسافة الأفقية لسقف، أو طول ظل في مسألة زاوية الشمس. وهو ليس الوتر أبدا، وهذه نقطة تستحق التحقق منها كل مرة، لأن الوتر هو الضلع المواجه للزاوية القائمة. وهو يظهر في مقام صيغة الظل، ولهذا يقارن الظل الضلع المقابل بهذا الضلع القائم لا بأطول ضلع."
                },
                {
                    "kind": "h3",
                    "text": "ما هو الوتر؟"
                },
                {
                    "kind": "p",
                    "text": "الوتر [[c]] هو الضلع المقابل للزاوية القائمة: في أي رسم يواجه المربع الصغير الذي يميز ركن [[90^\\circ]]، وهو أطول من أي من الضلعين قطعا. وفي المسائل العملية غالبا ما يلعب دور طول مائل: سلم، أو عارضة سقف، أو سلك شد، أو دعامة قطرية. وهو غير مطلوب لحساب الظل الأساسي، لأن صيغة الظل تقارن الضلعين القائمين مباشرة. وإن احتاجته مسألة أخرى، فتستخرجه نظرية فيثاغورس من الضلعين: [[c=\\sqrt{a^2+b^2}]]."
                },
                {
                    "kind": "p",
                    "text": "يستخدم الظل الضلعين القائمين ولا يتطلب الوتر. حافظ على اصطلاح تسمية الأضلاع هذا بثبات: [[a]] مقابل الزاوية [[A]]، و[[b]] مجاور للزاوية [[A]]، و[[c]] الوتر المقابل للزاوية القائمة عند [[B]]."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "مثلث قائم الزاوية بزاوية A أسفل اليسار، ضلع مقابل ذهبي a، ضلع مجاور أزرق b، tan(A)=a/b",
                    "caption": "تقع الزاوية A أسفل اليسار؛ يستخدم الظل الضلع المقابل الذهبي a والضلع المجاور الأزرق b، وليس الوتر c."
                }
            ]
        },
        "sec-whatis": {
            "h2": "فهم نسبة الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "ظل الزاوية الحادة [[A]] هو الضلع المقابل مقسوما على الضلع المجاور:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "هنا [[\\tan(A)]] يعني ظل الزاوية [[A]]، و[[a]] هو الضلع المقابل، و[[b]] هو الضلع المجاور. وعندما يوضع المثلث بقاعدته على الاتجاه الأفقي، يقارن الظل الضلع الرأسي بالضلع الأفقي: الارتفاع على المسافة الأفقية في أنقى صوره."
                },
                {
                    "kind": "h3",
                    "text": "فهم SOH-CAH-TOA"
                },
                {
                    "kind": "p",
                    "text": "يتذكر الطلاب النسب الأساسية الثلاث بحيلة تذكيرية واحدة:"
                },
                {
                    "kind": "p",
                    "text": "<strong>SOH:</strong> الجيب = المقابل / الوتر."
                },
                {
                    "kind": "p",
                    "text": "<strong>CAH:</strong> جيب التمام = المجاور / الوتر."
                },
                {
                    "kind": "p",
                    "text": "<strong>TOA:</strong> الظل = المقابل / المجاور."
                },
                {
                    "kind": "p",
                    "text": "يقابل TOA صيغة الظل [[\\tan(A)=a/b]]: فحرف <strong>T</strong> يرمز إلى الظل، وحرف <strong>O</strong> يضع الضلع المقابل في الأعلى، وحرف <strong>A</strong> يضع الضلع المجاور في الأسفل. وتساعدك هذه الحيلة على اختيار البسط والمقام الصحيحين قبل أن تدخل أي أرقام في الحساب. ويبقى هذا القسم مركزا على الظل؛ فللنسبتين الأخريين صفحتاهما الخاصتان."
                },
                {
                    "kind": "h3",
                    "text": "لماذا لا يستخدم الظل الوتر؟"
                },
                {
                    "kind": "p",
                    "text": "يقارن الظل الضلعين القائمين المتعامدين مباشرة، فلا حاجة إلى الوتر. مع [[a=3]] و[[b=4]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "النسبة تلتقط بالفعل كل شيء عن كيفية مقارنة الضلع المقابل بالضلع المجاور؛ وإدخال الوتر سيغير السؤال المطروح. وإن احتاجت مسألة مختلفة إلى الوتر، فتستخرجه نظرية فيثاغورس من الضلعين. والظل نفسه لا يطلبه أبدا."
                },
                {
                    "kind": "h3",
                    "text": "لماذا تكون نسبة الظل بلا أبعاد؟"
                },
                {
                    "kind": "p",
                    "text": "قسمة طول على آخر تلغي الوحدات الفيزيائية. بوحدات متوافقة:"
                },
                {
                    "kind": "p",
                    "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "تلغى الأمتار، تاركة عددا خالصا. والنسبة نفسها تأتي من 300 سم و400 سم، لأن تغيير الوحدة يؤثر في الطرفين بالتساوي. والشرط الوحيد هو أن يستخدم القياسان وحدات متوافقة: فخلط الأمتار بالسنتيمترات ينتج عددا بلا معنى، بينما يحافظ التحويل أولا على صدق النسبة."
                },
                {
                    "kind": "h3",
                    "text": "ماذا تعني قيمة ظل مقدارها 0.75؟"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=0.75]] تعني أن الضلع المقابل يساوي 0.75 مرة من الضلع المجاور، أي 75 وحدة ارتفاع رأسي لكل 100 وحدة مسافة أفقية في الهندسة المستقيمة نفسها. تخيل سقفا يرتفع 75 سم لكل 100 سم مسافة أفقية: هذا بالضبط ما يصفه 0.75. وهذا لا يعني أن الزاوية [[0.75^\\circ]]؛ فالنسبة والزاوية كميتان مختلفتان، وخلطهما من أكثر الأخطاء شيوعا في حساب المثلثات."
                },
                {
                    "kind": "h3",
                    "text": "ماذا تعني قيمة ظل مقدارها 1؟"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=1]] تعني [[a=b]]: الضلعان المقابل والمجاور متساويان. والمثلث القائم المتساوي الساقين له ضلعان قائمان متساويان، ولأن الزاويتين الحادتين يجب أن تتقاسما 90 درجة بالتساوي، فكل منهما [[45^\\circ]]:"
                },
                {
                    "kind": "p",
                    "text": "[[A=45^\\circ]]"
                },
                {
                    "kind": "p",
                    "text": "ضلعان متساويان، وزاويتان حادتان متساويتان، وظل يساوي 1 بالضبط. وهذه نقطة التوازن في مقياس الظل: تحت 1 يكون المثلث أعرض مما هو أطول، وفوق 1 يكون أطول مما هو أعرض."
                },
                {
                    "kind": "h3",
                    "text": "لماذا يمكن أن يكون الظل أكبر من 1؟"
                },
                {
                    "kind": "p",
                    "text": "على عكس الجيب وجيب التمام، لا حد أعلى للظل في الزوايا الحادة. فإذا تجاوز الضلع المقابل الضلع المجاور، تتخطى النسبة 1 دون أي مشكلة. مع [[a=6]] و[[b=3]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل أطول من الضلع المجاور بمرتين. وقيمة الظل الأكبر من 1 صحيحة رياضيا ولا تشير إلى خطأ في الحاسبة؛ فهي ببساطة تصف مثلثا شديد الانحدار، كسلم طويل واقف قرب جدار."
                },
                {
                    "kind": "h3",
                    "text": "كيف يرتبط الظل بالجيب وجيب التمام؟"
                },
                {
                    "kind": "p",
                    "text": "ابدأ بالنسبتين الأخريين:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sin(A)=\\frac{a}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "اقسم الجيب على جيب التمام فيلغى الوتر:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "إذن:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "تتفق هذه المتطابقة مع تعريف المقابل على المجاور، وهي تمنح فحصا متقاطعا مفيدا: فأي نتيجة ظل يجب أن تساوي الجيب مقسوما على جيب التمام للزاوية نفسها."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "ثلاث مراحل: مثلث 3-4-5، صيغة الظل tan(A)=a/b، النتيجة 0.75، المقابل 75 بالمائة من المجاور",
                    "caption": "ثلاث مراحل: سم مثلث 3-4-5، واكتب tan(A) = a/b، ثم اقسم 3 على 4 لتحصل على 0.75."
                }
            ]
        },
        "sec-formula": {
            "h2": "كيف تعمل صيغة الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "ابدأ بالتعريف:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
                },
                {
                    "kind": "p",
                    "text": "ثم استخدم ترميز هذه الصفحة:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "يخص الضلع المقابل البسط لأن الظل يقيس مدى كبر الضلع المقابل للزاوية؛ ويخص الضلع المجاور المقام لأنه الضلع الذي تقاس عليه المقارنة. وبتبديلهما تحصل على ظل التمام، وهي نسبة مختلفة تماما."
                },
                {
                    "kind": "h3",
                    "text": "مثال محلول بالكامل: مثلث قائم الزاوية 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مقابل [[a=3\\,\\text{cm}]]، وضلع مجاور [[b=4\\,\\text{cm}]]، ووتر [[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 1:</strong> اكتب الصيغة. [[\\tan(A)=a/b]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 2:</strong> عوض بالقيم المعلومة. [[\\tan(A)=3/4]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 3:</strong> اقسم. [[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 4:</strong> فسر النتيجة. الضلع المقابل يساوي 75 بالمائة من طول الضلع المجاور."
                },
                {
                    "kind": "p",
                    "text": "<strong>الخطوة 5:</strong> تحقق من المثلث. [[3^2+4^2=5^2]]، أي [[9+16=25]]. أطوال الأضلاع متسقة مع مثلث قائم حقيقي."
                },
                {
                    "kind": "h3",
                    "text": "إيجاد الزاوية من النسبة"
                },
                {
                    "kind": "p",
                    "text": "إذا كانت الزاوية نفسها مطلوبة، فطبق الظل العكسي على النسبة:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "يسمى الظل العكسي أيضا قوس الظل. فحساب نسبة الظل وحساب الزاوية عمليتان منفصلتان: فالنسبة تصف شكل المثلث، بينما يحول الظل العكسي ذلك الشكل إلى درجات. وتعرض حاسبة نسبة الظل في هذه الصفحة النسبة؛ واستعادة الزاوية خطوة تالية على حاسبة علمية."
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
            "h2": "كيفية استخدام حاسبة نسبة الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "تطابق الخطوات التالية الواجهة الحية في هذه الصفحة. وكل خطوة مهمة، لأن نتيجة الظل لا تكون جديرة بالثقة إلا بقدر القياسين اللذين تقوم عليهما."
                }
            ],
            "steps": [
                "<strong>حدد الزاوية المرجعية [[A]].</strong> يعمل الظل دائما من زاوية حادة واحدة؛ وتسميتها أولا تحدد أي ضلع مقابل وأي ضلع مجاور.",
                "<strong>حدد الضلع المقابل [[a]]، الواقع مباشرة مقابل الزاوية [[A]].</strong> هذا هو الضلع الذي لا يلامس رأس الزاوية أبدا.",
                "<strong>حدد الضلع المجاور [[b]]، الذي يلامس الزاوية [[A]] وليس الوتر.</strong> تحقق مرتين أنك لم تأخذ الضلع المائل خطأ.",
                "<strong>احصل على طولي الضلعين أو قسهما.</strong> شريط القياس، أو رسم بمقياس، أو مواصفة معلومة، كلها تصلح ما دامت الأرقام تصف المثلث نفسه.",
                "<strong>أدخل طول الضلع المقابل في حقل الإدخال الأول.</strong> هذا هو بسط الكسر.",
                "<strong>أدخل طول الضلع المجاور في حقل الإدخال الثاني.</strong> هذا هو المقام.",
                "<strong>اختر وحدات قياس متوافقة باستخدام محددات الوحدات المتاحة.</strong> يجب أن يكون المدخلان بالوحدة نفسها، أو محولين إلى وحدة واحدة قبل القسمة.",
                "<strong>تأكد أن القياسين موجبان.</strong> فالضلع الصفري أو السالب لا يمكن أن ينتمي إلى مثلث حقيقي.",
                "<strong>انقر احسب tan(A).</strong> تقسم الأداة الضلع المقابل على الضلع المجاور.",
                "<strong>اقرأ نسبة الظل الناتجة.</strong> الإجابة عدد خالص، بلا درجات ولا وحدات طول مرفقة.",
                "<strong>تحقق ما إذا كانت النتيجة أقل من 1 أو تساويه أو أكبر منه.</strong> تحت 1 يعني أن المثلث أعرض مما هو أطول؛ وتساوي 1 يعني ضلعين متساويين؛ وفوق 1 يعني أن الضلع المقابل أطول.",
                "<strong>استخدم إعادة تعيين عندما تريد مسح المدخلات وبدء حساب آخر.</strong> المدخلات الجديدة تستحق بداية جديدة، لا أرقاما متبقية من المسألة السابقة."
            ],
            "closingParagraphs": [
                "لا تتطلب الحاسبة الوتر ولا مدخلا للزاوية. وهي تجري عملية واحدة، القسمة [[a/b]]، وتجريها على الضلعين القائمين اللذين تحددهما بالضبط."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "أمثلة خطوة بخطوة لحساب الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "تبني أربعة أمثلة محلولة المهارة الأساسية قبل التطبيقات العملية. وكل واحد يتبع الإيقاع نفسه: اكتب الصيغة، وعوض، واقسم، وفسر."
                },
                {
                    "kind": "h3",
                    "text": "المثال 1: مثلث قائم الزاوية 3-4-5"
                },
                {
                    "kind": "p",
                    "text": "بفرض [[a=3\\,\\text{cm}]]، و[[b=4\\,\\text{cm}]]، و[[c=5\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل يساوي 75 بالمائة من طول الضلع المجاور. وبما أن الضلع المقابل هو الضلع القائم الأقصر هنا، تقع النسبة تحت 1، واصفة مثلثا أعرض مما هو أطول."
                },
                {
                    "kind": "h3",
                    "text": "المثال 2: مثلث قائم الزاوية 5-12-13"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مقابل [[a=5\\,\\text{m}]]، وضلع مجاور [[b=12\\,\\text{m}]]، ووتر [[c=13\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{5}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل يساوي تقريبا 41.67 بالمائة من طول الضلع المجاور. والثلاثية 5-12-13 ثلاثية فيثاغورية أخرى، فتؤكد [[5^2+12^2=13^2]] مثلثا قائما حقيقيا."
                },
                {
                    "kind": "h3",
                    "text": "المثال 3: مثلث 45-45-90"
                },
                {
                    "kind": "p",
                    "text": "بفرض ضلع مقابل [[a=1\\,\\text{cm}]]، وضلع مجاور [[b=1\\,\\text{cm}]]، ووتر [[c=\\sqrt{2}\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
                },
                {
                    "kind": "p",
                    "text": "الضلعان المتساويان ينتجان نسبة ظل تساوي 1. وهذه نقطة المنتصف الطبيعية في مقياس الظل وقيمة تستحق الحفظ: فمتى تطابق الضلعان، كانت الزاويتان الحادتان 45 درجة لكل منهما."
                },
                {
                    "kind": "h3",
                    "text": "المثال 4: مثلث 30-60-90"
                },
                {
                    "kind": "p",
                    "text": "للزاوية المرجعية [[A=60^\\circ]]، استخدم ضلعا مقابلا [[a=\\sqrt{3}\\,\\text{cm}]]، وضلعا مجاورا [[b=1\\,\\text{cm}]]، ووترا [[c=2\\,\\text{cm}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل أطول من الضلع المجاور، فتتجاوز النسبة 1، كما ينبغي لزاوية 60 درجة. قارن مع الزاوية المتممة:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "للزاويتين الحادتين المتتامتين قيمتا ظل متعاكستان، لأن تبديل الزاوية المرجعية يبدل تسميتي المقابل والمجاور. و[[0.5774 \\times 1.7321 \\approx 1]]، مما يؤكد العلاقة العكسية."
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
            "h2": "أمثلة واقعية لاستخدام نسبة الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يستحق الظل مكانه في العالم العملي لأن كثيرا من المسائل الواقعية هي في الحقيقة مسائل ارتفاع على مسافة أفقية متنكرة. ويظهر اثنا عشر مثالا محلولا النمط نفسه يتكرر عبر المزلقانات والأسقف والسلالم وخطوط المساحة."
                },
                {
                    "kind": "h3",
                    "text": "المثال 5: حساب ميل مزلقان"
                },
                {
                    "kind": "p",
                    "text": "يرتفع مزلقان مبسط 0.6 م على مسافة أفقية 8 م. الارتفاع الرأسي هو الضلع المقابل، [[a=0.6\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=8\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.075}]]"
                },
                {
                    "kind": "p",
                    "text": "نسبة الميل المئوية هي [[0.075 \\times 100\\%=7.5\\%]]، والزاوية هي [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. يرتفع المزلقان 7.5 وحدات رأسيا لكل 100 وحدة أفقيا. ولا يثبت الحساب إمكانية الوصول ولا الامتثال لقواعد البناء."
                },
                {
                    "kind": "h3",
                    "text": "المثال 6: حساب ميل السقف"
                },
                {
                    "kind": "p",
                    "text": "يرتفع سقف 3 م على مسافة أفقية 4 م. الارتفاع الرأسي هو الضلع المقابل، [[a=3\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "يرتفع السقف 0.75 وحدة لكل وحدة أفقية، أي ميل 75 بالمائة، وزاوية الميل هي [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. ويعبر عن ميل السقف أيضا بالارتفاع على المسافة الأفقية بوحدات تقليدية، كبوصات الارتفاع لكل 12 بوصة مسافة أفقية، وهي النسبة نفسها بثوب مختلف. وهذه النسبة لا تشكل تقييما كاملا لتصميم السقف."
                },
                {
                    "kind": "h3",
                    "text": "المثال 7: إيجاد زاوية سلم"
                },
                {
                    "kind": "p",
                    "text": "يبلغ سلم 4 م أعلى جدار، وقاعدته تبعد 3 م أفقيا عن الجدار. والزاوية [[A]] تقع بين السلم والأرض. الارتفاع الرأسي هو الضلع المقابل، [[a=4\\,\\text{m}]]، والمسافة الأرضية هي الضلع المجاور، [[b=3\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{4}{3}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "الزاوية هي [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. الارتفاع الرأسي أكبر من المسافة الأفقية، ولهذا تتجاوز النسبة 1. ويشرح المثال الهندسة ولا يثبت ما إذا كان السلم موضوعا بأمان."
                },
                {
                    "kind": "h3",
                    "text": "المثال 8: تقدير زاوية الارتفاع إلى شجرة"
                },
                {
                    "kind": "p",
                    "text": "شجرة طولها 12 م، وظلها طوله 9 م على أرض مستوية. افترض أن أشعة الشمس تكون نموذجا مبسطا لمثلث قائم. طول الشجرة هو الضلع المقابل، [[a=12\\,\\text{m}]]، وطول الظل هو الضلع المجاور، [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "الطول يساوي تقريبا 1.3333 مرة من طول الظل، والزاوية الهندسية المناظرة نحو [[53.13^\\circ]]. ويفترض المثال أرضا مستوية وشجرة رأسية ونموذج ظل بخط مستقيم."
                },
                {
                    "kind": "h3",
                    "text": "المثال 9: قياس فرق منسوب"
                },
                {
                    "kind": "p",
                    "text": "يظهر قياس مساحي فرق منسوب رأسي مقداره 15 م على مسافة أفقية 20 م. فرق المنسوب هو الضلع المقابل، [[a=15\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=20\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{15}{20}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "فرق المنسوب يساوي 0.75 مرة من الفصل الأفقي، والزاوية المناظرة نحو [[36.87^\\circ]]. وقد يتطلب المسح الفعلي تعديلات لارتفاع الجهاز وتصحيحات وقياسات إضافية تتجاوز هذا النموذج المبسط."
                },
                {
                    "kind": "h3",
                    "text": "المثال 10: حساب نسبة ميل طريق بالمائة"
                },
                {
                    "kind": "p",
                    "text": "يرتفع مقطع طريق مبسط 1.2 م على مسافة أفقية 24 م. الارتفاع الرأسي هو الضلع المقابل، [[a=1.2\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.05}]]"
                },
                {
                    "kind": "p",
                    "text": "نسبة الميل المئوية هي [[0.05 \\times 100\\%=5\\%]]، والزاوية هي [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. فميل 5 بالمائة لا يعني زاوية 5 درجات؛ وهذا التمييز مصدر شائع للخلط، ولا ينبغي استعمال الرقمين بالتبادل أبدا."
                },
                {
                    "kind": "h3",
                    "text": "المثال 11: حساب انحدار درج"
                },
                {
                    "kind": "p",
                    "text": "لدرج مبسط ارتفاع رأسي كلي 2.4 م ومسافة أفقية 3.2 م. الارتفاع الرأسي هو الضلع المقابل، [[a=2.4\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=3.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "الارتفاع الرأسي يساوي 75 بالمائة من المسافة الأفقية، والزاوية نحو [[36.87^\\circ]]. ولا يتحقق الحساب من أبعاد الدرج ولا راحته ولا الامتثال لقواعد البناء."
                },
                {
                    "kind": "h3",
                    "text": "المثال 12: فهم زاوية سلك شد"
                },
                {
                    "kind": "p",
                    "text": "يثبت سلك شد في عمود على ارتفاع 12 م فوق الأرض، بينما تبعد مرساته الأرضية 5 م أفقيا عن العمود. ارتفاع التثبيت هو الضلع المقابل، [[a=12\\,\\text{m}]]، والمسافة الأرضية هي الضلع المجاور، [[b=5\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{5}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "الزاوية هي [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. الارتفاع الرأسي يساوي 2.4 مرة من مسافة المرساة الأفقية، وهو سلك شديد الانحدار بكل مقياس. ولا تحدد نسبة الظل شد السلك ولا متانة المرساة ولا السلامة الإنشائية."
                },
                {
                    "kind": "h3",
                    "text": "المثال 13: حساب اتجاه ذراع رافعة"
                },
                {
                    "kind": "p",
                    "text": "لذراع رافعة مبسطة مركبة رأسية 8 م وإسقاط أفقي 6 م. المركبة الرأسية هي الضلع المقابل، [[a=8\\,\\text{m}]]، والإسقاط الأفقي هو الضلع المجاور، [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{8}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "الزاوية المناظرة نحو [[53.13^\\circ]]. المركبة الرأسية تساوي تقريبا 1.3333 مرة من الإسقاط الأفقي. وهذا مثال هندسي مبسط ولا يثبت قدرة الرافعة ولا سلامة التشغيل."
                },
                {
                    "kind": "h3",
                    "text": "المثال 14: تقدير انحدار مسار مشي"
                },
                {
                    "kind": "p",
                    "text": "لمقطع مشي مستقيم مبسط كسب ارتفاع رأسي 120 م ومسافة أفقية 800 م. كسب الارتفاع هو الضلع المقابل، [[a=120\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=800\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{120}{800}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.15}]]"
                },
                {
                    "kind": "p",
                    "text": "نسبة الميل المئوية 15 بالمائة، والزاوية المناظرة نحو [[8.53^\\circ]]. ويمثل هذا النموذج المبسط انحدارا ثابتا بخط مستقيم، لا مسار مشي متعرجا بأكمله."
                },
                {
                    "kind": "h3",
                    "text": "المثال 15: تقييم دعامة ميكانيكية"
                },
                {
                    "kind": "p",
                    "text": "لدعامة ميكانيكية قطرية مركبة رأسية 1.5 م ومركبة أفقية 2 م. المركبة الرأسية هي الضلع المقابل، [[a=1.5\\,\\text{m}]]، والمركبة الأفقية هي الضلع المجاور، [[b=2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "المركبة الرأسية تساوي 75 بالمائة من المركبة الأفقية. ولا تحدد النسبة متانة الدعامة ولا قدرتها على الحمل ولا ملاءمتها."
                },
                {
                    "kind": "h3",
                    "text": "المثال 16: إيجاد زاوية الارتفاع إلى مبنى"
                },
                {
                    "kind": "p",
                    "text": "يقف راصد على بعد 24 م أفقيا من مبنى. وقمة المبنى ترتفع 18 م فوق مستوى عين الراصد. الفرق الرأسي هو الضلع المقابل، [[a=18\\,\\text{m}]]، والمسافة الأفقية هي الضلع المجاور، [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{18}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "زاوية الارتفاع نحو [[36.87^\\circ]] في الهندسة المبسطة. وهذه هي الزاوية إلى القمة بالنسبة لمستوى عين الراصد الأفقي، وليست بالضرورة الارتفاع الكلي للمبنى."
                },
                {
                    "kind": "p",
                    "text": "الظل نسبة بلا أبعاد، لكن قيمته العملية تأتي من مقارنة الارتفاع الرأسي بالمسافة الأفقية، ووصف انحدار منحدر مستقيم، وحساب زوايا الارتفاع، وحل الأضلاع الناقصة عندما تكون الزاوية معلومة. وثلاث كميات مرتبطة سهل خلطها، فاحفظها مميزة: <strong>نسبة الظل</strong> هي الارتفاع الرأسي مقسوما على المسافة الأفقية؛ و<strong>نسبة الميل المئوية</strong> هي نسبة الظل مضروبة في 100 بالمائة؛ و<strong>الزاوية</strong> هي ناتج تطبيق الظل العكسي على النسبة. والظل وحده لا يحدد أبدا السلامة الإنشائية ولا قدرة الحمل ولا إمكانية الوصول ولا الامتثال الهندسي."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "الحالة",
                        "المقابل [[a]]",
                        "المجاور [[b]]",
                        "الصيغة",
                        "النسبة",
                        "الميل",
                        "المعنى"
                    ],
                    "rows": [
                        [
                            "المزلقان",
                            "0.6 m",
                            "8 m",
                            "0.6/8",
                            "0.075",
                            "7.5%",
                            "منحدر لطيف، يرتفع 7.5 لكل 100 مسافة أفقية"
                        ],
                        [
                            "ميل السقف",
                            "3 m",
                            "4 m",
                            "3/4",
                            "0.75",
                            "75%",
                            "الارتفاع يساوي 75% من المسافة الأفقية"
                        ],
                        [
                            "السلم",
                            "4 m",
                            "3 m",
                            "4/3",
                            "1.3333",
                            "n/a",
                            "الارتفاع يتجاوز المسافة الأرضية، الزاوية 53.13 درجة"
                        ],
                        [
                            "ارتفاع الشجرة",
                            "12 m",
                            "9 m",
                            "12/9",
                            "1.3333",
                            "n/a",
                            "الطول يساوي 1.3333 مرة من طول الظل"
                        ],
                        [
                            "المساحة",
                            "15 m",
                            "20 m",
                            "15/20",
                            "0.75",
                            "75%",
                            "فرق المنسوب يساوي 75% من المسافة الأفقية"
                        ],
                        [
                            "ميل الطريق",
                            "1.2 m",
                            "24 m",
                            "1.2/24",
                            "0.05",
                            "5%",
                            "ميل 5%، وليست زاوية 5 درجات"
                        ],
                        [
                            "الدرج",
                            "2.4 m",
                            "3.2 m",
                            "2.4/3.2",
                            "0.75",
                            "75%",
                            "الارتفاع يساوي 75% من المسافة الأفقية"
                        ],
                        [
                            "سلك الشد",
                            "12 m",
                            "5 m",
                            "12/5",
                            "2.4",
                            "n/a",
                            "سلك شديد الانحدار، الزاوية 67.38 درجة"
                        ],
                        [
                            "ذراع الرافعة",
                            "8 m",
                            "6 m",
                            "8/6",
                            "1.3333",
                            "n/a",
                            "المركبة الرأسية تساوي 1.3333 مرة من الأفقية"
                        ],
                        [
                            "مسار المشي",
                            "120 m",
                            "800 m",
                            "120/800",
                            "0.15",
                            "15%",
                            "انحدار ثابت 15%"
                        ],
                        [
                            "الدعامة الميكانيكية",
                            "1.5 m",
                            "2 m",
                            "1.5/2",
                            "0.75",
                            "n/a",
                            "المركبة الرأسية تساوي 75% من الأفقية"
                        ],
                        [
                            "ارتفاع المبنى",
                            "18 m",
                            "24 m",
                            "18/24",
                            "0.75",
                            "n/a",
                            "زاوية الارتفاع 36.87 درجة"
                        ]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "أربع لوحات: مزلقان 0.075، ميل سقف 0.75، سلم 1.3333، مساحة 0.75، لكل منها مثلث مسمى",
                    "caption": "أربع حسابات عملية: المزلقان وميل السقف والسلم والمساحة، لكل منها مثلثه وصيغته ونسبته."
                }
            ]
        },
        "sec-angle": {
            "h2": "فهم العلاقة بين الظل وحجم الزاوية",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يزداد الظل مع زيادة الزاوية المرجعية، والهندسة تفسر السبب. فعندما تكون الزاوية [[A]] صغيرة، يكون الضلع المقابل قصيرا بالنسبة للضلع المجاور، فتقع النسبة قرب 0. ومع اتساع الزاوية يصبح الضلع المقابل حصة أطول من الضلع المجاور، وتتصاعد النسبة: تتجاوز 1 عند [[45^\\circ]]، ثم بلا حد مع اقتراب الزاوية من [[90^\\circ]]. يستخدم الجدول أدناه أطوال أضلاع توضيحية؛ فالنسبة، لا الحجم المطلق للمثلث، هي التي تحدد الزاوية."
                },
                {
                    "kind": "p",
                    "text": "النمط بسيط: الظل صغير عندما يكون الضلع المقابل قصيرا بالنسبة للضلع المجاور، ويساوي 1 عند [[45^\\circ]]، ويتجاوز 1 للزوايا الحادة الأكبر، ويقترب من الصفر مع اقتراب الزاوية من [[0^\\circ]]، وينمو بلا حد مع اقتراب الزاوية من [[90^\\circ]]. والمثلثات ذات الزاوية نفسها لها نسبة الظل نفسها حتى عندما تختلف أطوال أضلاعها، لأن النسبة تلتقط الشكل لا الحجم."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "الزاوية [[A]]",
                        "الضلع المقابل [[a]]",
                        "الضلع المجاور [[b]]",
                        "نسبة الظل"
                    ],
                    "rows": [
                        [
                            "[[30^\\circ]]",
                            "1",
                            "[[\\sqrt{3}]]",
                            "نحو 0.5774"
                        ],
                        [
                            "[[45^\\circ]]",
                            "1",
                            "1",
                            "1"
                        ],
                        [
                            "[[60^\\circ]]",
                            "[[\\sqrt{3}]]",
                            "1",
                            "نحو 1.7321"
                        ],
                        [
                            "[[75^\\circ]]",
                            "نحو 3.7321",
                            "1",
                            "نحو 3.7321"
                        ]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "ثلاثة مثلثات عند 30 و45 و60 درجة بقيم ظل 0.5774 و1 و1.7321، يرتفع الظل مع الزاوية",
                    "caption": "مع نمو الزاوية A يصبح الضلع المقابل حصة أطول من الضلع المجاور، فيرتفع tan(A)."
                }
            ]
        },
        "sec-side": {
            "h2": "كيفية إيجاد الضلع المقابل باستخدام الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يمكن إعادة ترتيب صيغة الظل لإيجاد الضلع المقابل عندما يكون الضلع المجاور والزاوية معلومين. ابدأ بـ[[\\tan(A)=a/b]] واضرب الطرفين في [[b]]:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{a=b\\tan(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "الضلع المقابل يساوي الضلع المجاور مضروبا في ظل الزاوية. بفرض ضلع مجاور [[b=10\\,\\text{m}]] وزاوية [[A=30^\\circ]]، ومعرفة أن [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:"
                },
                {
                    "kind": "p",
                    "text": "[[a=10\\times0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "الارتفاع الرأسي يساوي تقريبا 5.774 م لمسافة أفقية 10 م عند هذه الزاوية."
                },
                {
                    "kind": "p",
                    "text": "ويمكن إيجاد الضلع المجاور بالطريقة نفسها بإعادة الترتيب مرة أخرى:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "مع ضلع مقابل [[a=6\\,\\text{m}]] و[[A=45^\\circ]]: بما أن [[\\tan(45^\\circ)=1]]، فإن [[b=6/1]]، أي [[\\boxed{b=6\\,\\text{m}}]]. وهذه إعادات ترتيب رياضية للصيغة نفسها. وتعرض الحاسبة في هذه الصفحة نسبة الظل من أطوال الأضلاع؛ وهي لا تحسب الأضلاع الناقصة مباشرة."
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
            "h2": "كيفية إيجاد زاوية من نسبة ظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "نسبة الظل والزاوية كميتان مختلفتان: إحداهما مقارنة بلا أبعاد بين أضلاع، والأخرى تقاس بالدرجات. وعندما تكون النسبة معلومة وتكون الزاوية مطلوبة، يمكن استخدام الظل العكسي:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "يسمى الظل العكسي أيضا قوس الظل. بفرض [[\\tan(A)=0.75]]:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "الزاوية نحو [[36.87^\\circ]] عندما تضبط الحاسبة على الدرجات."
                },
                {
                    "kind": "h3",
                    "text": "لماذا يهم وضع الزاوية في الحاسبة"
                },
                {
                    "kind": "p",
                    "text": "يمكن قياس الزوايا بالدرجات أو بالراديان، ويجب ضبط الحاسبة العلمية على الوضع المقصود قبل تطبيق الظل العكسي. والدائرة الكاملة 360 درجة أو [[2\\pi]] راديان، فتكون [[45^\\circ=\\pi/4]] راديان. ونسبة الظل نفسها لا تحمل وحدات درجات ولا راديان؛ فتلك الوحدات تنطبق على الزاوية المستعادة منها. وتعرض حاسبة نسبة الظل في هذه الصفحة النسبة مباشرة ولا تعرض زاوية."
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
            "h2": "أخطاء شائعة عند حساب الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "معظم أخطاء الظل تأتي من كسر معكوس، أو ضلع مسمى خطأ، أو خلط النسبة بالزاوية. راجع هذه القائمة قبل الوثوق بنتيجة."
                }
            ],
            "steps": [
                "<strong>عكس الصيغة وحساب [[b/a]] بدلا من [[a/b]].</strong> هذا يعيد ظل التمام لا الظل. مع [[a=3]] و[[b=4]]، يعطي الكسر المعكوس 1.3333؛ والصحيح يعطي 0.75.",
                "<strong>الخلط بين الظل والجيب.</strong> الظل يقسم الضلع المقابل على الضلع المجاور؛ والجيب يقسم الضلع المقابل على الوتر. فإذا كان الوتر في المقام، فالإجابة جيب لا ظل.",
                "<strong>الخلط بين الظل وجيب التمام.</strong> جيب التمام يقسم الضلع المجاور على الوتر. والظل لا يستخدم الوتر أبدا، فوجود الوتر في أي موضع يشير إلى النسبة الخاطئة.",
                "<strong>الخلط بين الظل وظل التمام.</strong> ظل التمام هو المقلوب، المجاور على المقابل. والاسمان المتشابهان يسببان أخطاء حقيقية، لكن ترتيب الكسر معكوس تماما.",
                "<strong>إدخال الوتر في صيغة الظل الأساسية.</strong> لا دور للوتر في [[a/b]]. فإن ظهر في الحساب، فقد استخدمت الصيغة الخاطئة.",
                "<strong>خلط الضلع المقابل بالضلع المجاور.</strong> كلاهما ضلع قائم، فيسهل تبديل التسميتين. تتبع دائما من الزاوية المرجعية: ما يقابلها مقابل، وما يلامسها مجاور.",
                "<strong>تحديد الأضلاع بالنسبة للزاوية المرجعية الخاطئة.</strong> فالانتقال من الزاوية [[A]] إلى الزاوية [[C]] يبدل تسميتي المقابل والمجاور، فيقلب النسبة إلى مقلوبها.",
                "<strong>افتراض أن الظل يجب أن يكون أقل من 1.</strong> تلك القاعدة تخص الجيب وجيب التمام. فالظل لا حد أعلى له في الزوايا الحادة، والنتيجة الأكبر من 1 صحيحة تماما.",
                "<strong>الإبلاغ عن نسبة الظل كزاوية بالدرجات.</strong> نتيجة 0.75 نسبة وليست [[0.75^\\circ]]. ومعاملتها كدرجات تدخل هراء في أي حساب لاحق.",
                "<strong>الإبلاغ عن نسبة الظل بوحدات قياس.</strong> الوحدات تلغى في القسمة، فالقول \"0.75 m\" خطأ. اكتب العدد الخالص وأبق الوحدات في قياسات المدخلات حيث مكانها.",
                "<strong>إدخال أطوال أضلاع صفرية أو سالبة.</strong> لا يمكن للمثلث أن يكون له ضلع صفري أو سالب، فتشير هذه المدخلات إلى خطأ في إدخال البيانات أو قياس مفقود، لا إلى حالة حدية صحيحة.",
                "<strong>خلط وحدات قياس غير متوافقة.</strong> ضلع مقابل 3 م مع ضلع مجاور 40 سم يعطي 7.5، عددا بلا معنى. حول إلى وحدة واحدة أولا: 3 م و4 م يعطيان 0.75 الصحيحة.",
                "<strong>التقريب مبكرا جدا.</strong> تقريب قسمة وسيطة إلى منزلتين عشريتين ثم متابعة الحساب يضاعف الخطأ. حافظ على الدقة الكاملة في كل خطوة وقرب الإجابة النهائية فقط.",
                "<strong>الخلط بين نسبة الميل المئوية والزاوية بالدرجات.</strong> ميل 5 بالمائة يأتي من ظل 0.05، لكن الزاوية [[\\tan^{-1}(0.05)\\approx2.86^\\circ]]، لا 5 درجات. فالميل والزاوية كميتان مختلفتان.",
                "<strong>افتراض أن نسبة الظل تحدد الحجم المطلق للمثلث.</strong> الظل يصف الشكل لا الحجم: فعدد لا نهائي من المثلثات يشترك في ظل 0.75، من ضلع مقابل 3 سم إلى واحد 3 كم. فالنسبة تثبت التناسبات؛ والأطوال الفعلية تحتاج قياس ضلع واحد على الأقل."
            ],
            "closingParagraphs": [
                "<strong>الخطأ مقابل الصواب: مقارنة محلولة</strong> بفرض ضلع مقابل [[a=3]] وضلع مجاور [[b=4]]:",
                "<strong>خطأ:</strong> [[4/3\\approx1.3333]]. هذه نسبة ظل التمام للزاوية [[A]]، لا نسبة الظل. فالبسط والمقام معكوسان.",
                "<strong>صواب:</strong> [[\\tan(A)=3/4=0.75]].",
                "<strong>تحقق باستخدام الجيب وجيب التمام:</strong> مع [[c=5]]، [[\\sin(A)=3/5=0.6]] و[[\\cos(A)=4/5=0.8]]. إذن [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]]، مما يؤكد حساب الظل."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "كيفية التحقق من صحة نتيجة الظل",
            "blocks": [
                {
                    "kind": "p",
                    "text": "يتطلب المثلث القائم الصحيح غير المنحل ضلعين قائمين موجبين، [[a \\gt 0]] و[[b \\gt 0]]، مقاسين بوحدات متوافقة، فيجب أن تكون نتيجة الظل موجبة:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
                },
                {
                    "kind": "p",
                    "text": "ولا يشترط أن يكون الضلع المقابل أقصر من الضلع المجاور، فقد تقع النتيجة تحت 1 أو عنده أو فوقه. والنتيجة الصفرية أو السالبة تشير عادة إلى مدخلات غير صحيحة أو تسميات معكوسة."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 1: تحقق من النسبة"
                },
                {
                    "kind": "p",
                    "text": "أعد التحقق من [[\\tan(A)=a/b]] مباشرة. مع [[a=3]] و[[b=4]]: [[\\tan(A)=3/4=0.75]]. وبما أن الضلع المقابل أقصر من الضلع المجاور، فينبغي أن تقع النسبة تحت 1؛ فإن خالفها حساب يدوي ثان، فإما أن ضلعا مسمى خطأ وإما أن وحدة خلطت."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 2: تحقق من نظرية فيثاغورس"
                },
                {
                    "kind": "p",
                    "text": "احسب الوتر عند الحاجة: [[c=\\sqrt{a^2+b^2}]]. مع [[a=3]] و[[b=4]]: [[c=\\sqrt{9+16}=5]]، و[[3^2+4^2=5^2]]. وهذا يؤكد أبعاد مثلث 3-4-5 القائم. والوتر هنا قيمة تحقق، لا جزء من صيغة الظل الأساسية."
                },
                {
                    "kind": "h3",
                    "text": "الطريقة 3: تحقق باستخدام الظل العكسي"
                },
                {
                    "kind": "p",
                    "text": "لنسبة ظل مقدارها 0.75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. وبما أن النسبة تقع تحت 1، فينبغي أن تقع الزاوية تحت [[45^\\circ]]؛ فإن لم تقع، فتسميات الأضلاع مبدلة على الأرجح. وقد تنشأ فروق صغيرة من التقريب."
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
            "h2": "الظل مقابل الجيب وجيب التمام وظل التمام",
            "blocks": [
                {
                    "kind": "p",
                    "text": "تقارن كل نسبة زوجا مختلفا من الأضلاع، باستخدام الزاوية المرجعية وتسميات الأضلاع نفسها:"
                },
                {
                    "kind": "p",
                    "text": "الظل وظل التمام هما الزوج المتبادل: [[\\cot(A)=1/\\tan(A)]]. فإذا كان [[\\tan(A)=0.75]]، كان [[\\cot(A)\\approx1.3333]]. اختر الظل عندما يكون الضلعان معلومين أو عندما تنطوي مسألة على الارتفاع على المسافة الأفقية؛ واختر الجيب أو جيب التمام عندما يدخل الوتر في العمل، وظل التمام عندما تسير المقارنة في الاتجاه المعاكس. وأبق الظل في المركز: فللنسب المجاورة صفحاتها الخاصة بمعالجات كاملة."
                },
                {
                    "kind": "p",
                    "text": "للنسب المجاورة، انظر <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة الجيب</a>، و<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة جيب التمام</a>، و<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة ظل التمام</a>، و<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة القاطع</a>، و<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">حاسبة نسبة قاطع التمام</a>."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
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
                            "قاطع التمام",
                            "csc(A) = c/a",
                            "الوتر إلى الضلع المقابل"
                        ],
                        [
                            "القاطع",
                            "sec(A) = c/b",
                            "الوتر إلى الضلع المجاور"
                        ],
                        [
                            "ظل التمام",
                            "cot(A) = b/a",
                            "الضلع المجاور إلى الضلع المقابل"
                        ]
                    ]
                }
            ],
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
                    "name": "حاسبة نسبة الجيب",
                    "desc": "احسب نسبة الجيب، الضلع المقابل على الوتر، من طولي ضلعين."
                },
                {
                    "name": "حاسبة نسبة جيب التمام",
                    "desc": "احسب نسبة جيب التمام، الضلع المجاور على الوتر، من طولي ضلعين."
                },
                {
                    "name": "حاسبة نسبة ظل التمام",
                    "desc": "احسب نسبة ظل التمام، الضلع المجاور على الضلع المقابل، من طولي ضلعين."
                },
                {
                    "name": "حاسبة نسبة القاطع",
                    "desc": "احسب نسبة القاطع، الوتر على الضلع المجاور، من طولي ضلعين."
                },
                {
                    "name": "حاسبة نسبة قاطع التمام",
                    "desc": "احسب نسبة قاطع التمام، الوتر على الضلع المقابل، من طولي ضلعين."
                },
                {
                    "name": "حاسبة زاوية المثلث القائم",
                    "desc": "جد زاوية حادة ناقصة في مثلث قائم الزاوية من أضلاع معلومة."
                },
                {
                    "name": "حاسبة ضلع المثلث القائم",
                    "desc": "جد طول ضلع ناقص في مثلث قائم الزاوية من أضلاع وزوايا معلومة."
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "استخدم نسبة الظل بثقة",
            "blocks": [
                {
                    "kind": "p",
                    "text": "الظل هو نسبة الضلعين القائمين: اقسم الضلع المقابل على الضلع المجاور وستكون قد وصفت كم وحدة ارتفاع رأسي تأتي مع كل وحدة مسافة أفقية. وتحتاج الصيغة [[\\tan(A)=a/b]] إلى قياسين فقط، والإجابة دائما عدد بلا أبعاد قد يقع تحت 1 أو عنده أو فوقه، وهو ينمو مع نمو الزاوية المرجعية. وعند الحاجة إلى ضلع ناقص، تستعيد [[a=b\\tan(A)]] الضلع المقابل؛ وعند الحاجة إلى الزاوية، تستعيدها [[A=\\tan^{-1}(a/b)]]. سواء أكان مزلقانا أو سقفا أو سلما أو مثلث 3-4-5 في كتاب، فالطريقة لا تتغير أبدا: حدد الضلع المقابل، وحدد الضلع المجاور، واقسم، وتحقق بفحص إيجابية النسبة."
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
            "question": "ما هي صيغة نسبة الظل للمثلث القائم الزاوية؟",
            "answer": "tan(A) = a / b: اقسم الضلع المقابل a على الضلع المجاور b. مع ضلع مقابل 3 سم وضلع مجاور 4 سم، تكون النتيجة 3/4 = 0.75. وهذا العدد العشري هو الإجابة الكاملة، نسبة بلا أبعاد، وليست زاوية."
        },
        {
            "question": "كيف تحسب الظل من طولي ضلعين؟",
            "answer": "حدد الزاوية المرجعية A، وقس الضلع المقابل a والضلع المجاور b بالوحدة نفسها، وتأكد أنهما موجبان، ثم اقسم: tan(A) = a / b. وفي هذه الصفحة، أدخل الضلع المقابل في الحقل الأول والضلع المجاور في الحقل الثاني، ثم انقر احسب tan(A)."
        },
        {
            "question": "لماذا لا يستخدم الظل الوتر؟",
            "answer": "يقارن الظل الضلعين القائمين المتعامدين مباشرة: الرأسي مقابل الأفقي. والوتر لا يضيف معلومات جديدة إلى تلك المقارنة، فلا تحتاج الصيغة الأساسية إلا الضلعين المقابل والمجاور. ويمكن لنظرية فيثاغورس أن تستعيد الوتر لاحقا إن احتاجه حساب آخر."
        },
        {
            "question": "هل يمكن أن يكون الظل أكبر من 1؟",
            "answer": "نعم. لا حد أعلى للظل في الزوايا الحادة. فعندما يكون الضلع المقابل أطول من الضلع المجاور، تتجاوز النسبة 1: مع a = 6 وb = 3، يكون tan(A) = 6/3 = 2. والنتيجة الأكبر من 1 صحيحة رياضيا ولا تشير إلى خطأ في الحاسبة."
        },
        {
            "question": "ماذا تعني قيمة ظل مقدارها 0.75؟",
            "answer": "الضلع المقابل يساوي 75 بالمائة من الضلع المجاور. وفي مثلث 3-4-5، يكون الضلع المقابل للزاوية A ثلاثة وحدات بينما الضلع الملاصق للزاوية A أربعة وحدات، فيكون tan(A) = 3/4 = 0.75. وهو يصف شكل المثلث وليس زاوية 0.75 درجة."
        },
        {
            "question": "ما الفرق بين الظل وظل التمام؟",
            "answer": "هما متبادلان. الظل يقسم الضلع المقابل على الضلع المجاور (a/b)؛ وظل التمام يقسم الضلع المجاور على الضلع المقابل (b/a). فإذا كان tan(A) = 0.75، كان cot(A) = 1/0.75، أي نحو 1.3333. وترتيب الكسر معكوس تماما."
        },
        {
            "question": "كيف أحسب زاوية من نسبة ظل؟",
            "answer": "طبق الظل العكسي على النسبة: A = tan^-1(a/b). فمع tan(A) = 0.75، تكون A = tan^-1(0.75)، أي نحو 36.87 درجة. اضبط حاسبتك العلمية على وضع الدرجات أولا. وتعرض حاسبة هذه الصفحة النسبة لا الزاوية."
        },
        {
            "question": "كيف أجد الضلع المقابل باستخدام الظل؟",
            "answer": "أعد ترتيب الصيغة إلى a = b * tan(A). فإذا كان الضلع المجاور 10 م والزاوية A تساوي 30 درجة، فإن tan(30 deg) نحو 0.5774، فيكون a = 10 * 0.5774، أي نحو 5.774 م. وهذا إعادة ترتيب يدوية؛ وتعرض حاسبة هذه الصفحة النسبة من أطوال الأضلاع، لا الأضلاع الناقصة."
        },
        {
            "question": "كيف أجد الضلع المجاور باستخدام الظل؟",
            "answer": "أعد ترتيب الصيغة إلى b = a / tan(A). فإذا كان الضلع المقابل 6 م والزاوية A تساوي 45 درجة، فإن tan(45 deg) = 1، فيكون b = 6/1 = 6 م. وهذا إعادة ترتيب رياضية للصيغة نفسها، لا وضع منفصل في حاسبة هذه الصفحة."
        },
        {
            "question": "هل الظل هو نفسه الميل؟",
            "answer": "هما وثيقا الصلة. فالميل كارتفاع على مسافة أفقية هو المقارنة نفسها التي يجريها الظل: التغير الرأسي مقسوما على التغير الأفقي. فمهندس الطرق الذي يكتب ميل 0.05 وطالب حساب المثلثات الذي يكتب tan(A) = 0.05 يصفان النسبة نفسها. والمصطلحان يختلفان بالسياق لا بالرياضيات."
        },
        {
            "question": "ما الفرق بين نسبة الميل المئوية والزاوية بالدرجات؟",
            "answer": "نسبة الميل المئوية هي 100 مرة من نسبة الظل: فظل 0.05 يعطي ميل 5%. والزاوية هي الظل العكسي للنسبة: tan^-1(0.05) نحو 2.86 درجة. فميل 5% إذن ليس زاوية 5 درجات. وخلطهما من أكثر أخطاء الظل شيوعا."
        },
        {
            "question": "كيف يستخدم الظل في البناء والمساحة؟",
            "answer": "يقارن الظل الارتفاع الرأسي بالمسافة الأفقية، وهذا بالضبط ما يصفه ميل السقف وانحدار المزلقان ودرجة الطريق وشدة الدرج. ويستخدمه المساحون لتحويل فرق المنسوب والمسافة الأفقية إلى زاوية ارتفاع. وفي كل حالة لا تثبت النسبة وحدها أبدا السلامة الإنشائية ولا الامتثال للقواعد."
        }
    ],
    "faqHeading": "الأسئلة الشائعة",
    "relatedHeading": "استكشف حاسبات المثلثات ذات الصلة"
},
"bg": {
  "tocHeading": "В това ръководство",
  "tocItems": {
    "sec-intro": "Какво е калкулатор за тангенсово съотношение?",
    "sec-triangle": "Разбиране на срещулежащата и прилежащата страна",
    "sec-whatis": "Разбиране на тангенсовото съотношение",
    "sec-formula": "Как работи формулата за тангенс",
    "sec-howto": "Как да използвате калкулатора за тангенсово съотношение",
    "sec-examples": "Примери стъпка по стъпка за изчисляване на тангенс",
    "sec-applications": "Примери от реалния живот за използване на тангенсовото съотношение",
    "sec-angle": "Разбиране на връзката между тангенса и големината на ъгъла",
    "sec-side": "Как да намерите срещулежащата страна чрез тангенс",
    "sec-recover": "Как да намерите ъгъл от тангенсово съотношение",
    "sec-mistakes": "Чести грешки при изчисляване на тангенс",
    "sec-verify": "Как да проверите дали резултатът ви за тангенс е валиден",
    "sec-vs": "Тангенс срещу синус, косинус и котангенс",
    "sec-related": "Разгледайте свързаните тригонометрични калкулатори",
    "sec-faq": "Често задавани въпроси"
  },
  "sections": {
    "sec-intro": {
      "h2": "Какво е калкулатор за тангенсово съотношение?",
      "blocks": [
        {
          "kind": "p",
          "text": "Калкулаторът за тангенсово съотношение отговаря на един въпрос: за остър ъгъл в правоъгълен триъгълник, как страната срещу ъгъла се сравнява със страната до него? Въведете срещулежащата страна и прилежащата страна и инструментът дели срещулежащата страна на прилежащата страна, връщайки [[\\tan(A)=a/b]]. Правоъгълният триъгълник има срещулежаща страна 3 см и прилежаща страна 4 см, значи [[\\tan(A)=3/4=0.75]]. Това 0.75 е тангенсовото съотношение: то ви казва, че срещулежащата страна е 75 процента от дължината на прилежащата страна. То не е ъгъл, затова никога не го четете като [[0.75^\\circ]]. Хипотенузата никога не влиза в това изчисление; срещулежащата страна и прилежащата страна са достатъчни сами по себе си. Тангенсът е едно от основните тригонометрични съотношения, а особената му сила е да сравнява вертикалното изкачване с хоризонталното разстояние, затова се появява в наклоните на покриви, пътните наклони и рампите. Резултатът е безразмерно число: чисто сравнение на две дължини, а не измерване в сантиметри или градуси. Ако ъгълът в градуси е това, което ви трябва, аркустангенсът преобразува съотношението в градуси."
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
      "h2": "Разбиране на срещулежащата и прилежащата страна",
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
          "text": "Какво е срещулежащата страна?"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна [[a]] е страната точно срещу референтния ъгъл [[A]], единствената страна, която никога не докосва върха му. В практическите задачи тя често играе ролята на вертикално изкачване, денивелация или височина: височината на стена, достигана от стълба, изкачването на покрив или вертикалната компонента на кранова стрела. Коя страна се брои за срещулежаща зависи от избрания референтен ъгъл, така че преминаването от ъгъл [[A]] към ъгъл [[C]] разменя означенията срещулежащ и прилежащ. Тя се появява в числителя на формулата за тангенс, защото тангенсът измерва колко голяма е страната срещу ъгъла спрямо страната до ъгъла."
        },
        {
          "kind": "h3",
          "text": "Какво е прилежащата страна?"
        },
        {
          "kind": "p",
          "text": "Прилежащата страна [[b]] е катетът, който докосва референтния ъгъл [[A]], без да е хипотенузата. В практическите задачи тя често играе ролята на хоризонтално разстояние: основата на стълба от стена, хоризонталното разстояние на покрив или дължината на сянка в задача за слънчев ъгъл. Тя никога не е хипотенузата, момент, който си струва да се проверява всеки път, защото хипотенузата е страната срещу правия ъгъл. Тя се появява в знаменателя на формулата за тангенс, затова тангенсът сравнява срещулежащата страна с този катет, а не с най-дългата страна."
        },
        {
          "kind": "h3",
          "text": "Какво е хипотенузата?"
        },
        {
          "kind": "p",
          "text": "Хипотенузата [[c]] е страната срещу правия ъгъл: във всяка диаграма тя е срещу малкия квадрат, отбелязващ ъгъла от [[90^\\circ]], и е строго по-дълга от всеки катет. В практическите задачи тя често играе ролята на наклонена дължина: стълба, покривна греда, обтегателно въже или диагонална разпора. Тя не е нужна за основното изчисление на тангенса, защото формулата за тангенс сравнява двата катета директно. Ако е нужна за друга задача, Питагоровата теорема я изчислява от двата катета: [[c=\\sqrt{a^2+b^2}]]."
        },
        {
          "kind": "p",
          "text": "Тангенсът използва двата катета и не изисква хипотенузата. Поддържайте това означение на страните последователно: [[a]] срещу ъгъл [[A]], [[b]] прилежаща на ъгъл [[A]], а [[c]] хипотенузата срещу правия ъгъл при [[B]]."
        }
      ],
      "steps": [],
      "closingParagraphs": [],
      "listItems": [],
      "related": [],
      "tables": [],
      "figures": [
        {
          "alt": "Правоъгълен триъгълник с ъгъл A долу вляво, златиста срещулежаща страна a, синя прилежаща страна b, tan(A)=a/b",
          "caption": "Ъгъл A е долу вляво; тангенсът използва златистата срещулежаща страна a и синята прилежаща страна b, а не хипотенузата c."
        }
      ]
    },
    "sec-whatis": {
      "h2": "Разбиране на тангенсовото съотношение",
      "blocks": [
        {
          "kind": "p",
          "text": "Тангенсът на остър ъгъл [[A]] е срещулежащата страна, разделена на прилежащата страна:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
        },
        {
          "kind": "p",
          "text": "Тук [[\\tan(A)]] означава тангенса на ъгъл [[A]], [[a]] е срещулежащата страна, а [[b]] е прилежащата страна. Когато триъгълникът е разположен с основата си по хоризонталното направление, тангенсът сравнява вертикалния катет с хоризонталния катет: изкачване спрямо хоризонтално разстояние в най-чистата му форма."
        },
        {
          "kind": "h3",
          "text": "Разбиране на SOH-CAH-TOA"
        },
        {
          "kind": "p",
          "text": "Учениците запомнят трите основни съотношения с едно помощно средство за памет:"
        },
        {
          "kind": "p",
          "text": "<strong>SOH:</strong> Синус = срещулежаща / хипотенуза."
        },
        {
          "kind": "p",
          "text": "<strong>CAH:</strong> Косинус = прилежаща / хипотенуза."
        },
        {
          "kind": "p",
          "text": "<strong>TOA:</strong> Тангенс = срещулежаща / прилежаща."
        },
        {
          "kind": "p",
          "text": "TOA съответства на формулата за тангенс [[\\tan(A)=a/b]]: <strong>T</strong> означава тангенс, <strong>O</strong> поставя срещулежащата страна отгоре, а <strong>A</strong> поставя прилежащата страна отдолу. Помощното средство ви помага да изберете правилния числител и знаменател, преди каквито и да е числа да влязат в изчислението. Тази секция остава фокусирана върху тангенса; другите две съотношения имат собствени страници."
        },
        {
          "kind": "h3",
          "text": "Защо тангенсът не използва хипотенузата"
        },
        {
          "kind": "p",
          "text": "Тангенсът сравнява двата перпендикулярни катета директно, затова хипотенузата е ненужна. При [[a=3]] и [[b=4]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
        },
        {
          "kind": "p",
          "text": "Съотношението вече улавя всичко за това как срещулежащата страна се сравнява с прилежащата; включването на хипотенузата би променило задавания въпрос. Ако хипотенузата е нужна за друга задача, Питагоровата теорема я изчислява от катетите. Самият тангенс никога не я иска."
        },
        {
          "kind": "h3",
          "text": "Защо тангенсът е безразмерно съотношение"
        },
        {
          "kind": "p",
          "text": "Деленето на една дължина на друга съкращава физическите единици. При съвместими единици:"
        },
        {
          "kind": "p",
          "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
        },
        {
          "kind": "p",
          "text": "Метрите се съкращават, оставяйки обикновено число. Същото съотношение идва от 300 см и 400 см, защото промяната на единицата засяга еднакво и двете страни. Единственото изискване е двете измервания да използват съвместими единици: смесването на метри със сантиметри дава безсмислено число, докато предварителното преобразуване пази съотношението честно."
        },
        {
          "kind": "h3",
          "text": "Какво означава тангенсова стойност 0.75?"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=0.75]] означава, че срещулежащата страна е 0.75 пъти прилежащата страна, или 75 единици вертикално изкачване на всеки 100 единици хоризонтално разстояние в същата праволинейна геометрия. Представете си покрив, който се изкачва със 75 см на всеки 100 см хоризонтално разстояние: точно това описва 0.75. То не означава, че ъгълът е [[0.75^\\circ]]; съотношението и ъгълът са различни величини, а объркването им е една от най-честите грешки в тригонометрията."
        },
        {
          "kind": "h3",
          "text": "Какво означава тангенсова стойност 1?"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=1]] означава [[a=b]]: срещулежащата и прилежащата страна са равни. Равнобедреният правоъгълен триъгълник има два равни катета и тъй като двата остри ъгъла трябва да си поделят 90 градуса по равно, всеки е [[45^\\circ]]:"
        },
        {
          "kind": "p",
          "text": "[[A=45^\\circ]]"
        },
        {
          "kind": "p",
          "text": "Равни катети, равни остри ъгли, тангенс точно 1. Това е балансовата точка на тангенсовата скала: под 1 триъгълникът е по-широк, отколкото висок, над 1 е по-висок, отколкото широк."
        },
        {
          "kind": "h3",
          "text": "Защо тангенсът може да е по-голям от 1"
        },
        {
          "kind": "p",
          "text": "За разлика от синуса и косинуса, тангенсът няма горна граница за остри ъгли. Ако срещулежащата страна надрасне прилежащата, съотношението преминава 1 без никакъв проблем. При [[a=6]] и [[b=3]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна е два пъти по-дълга от прилежащата. Тангенсова стойност, по-голяма от 1, е математически валидна и не показва грешка на калкулатора; тя просто описва стръмен триъгълник, като висока стълба, стояща близо до стена."
        },
        {
          "kind": "h3",
          "text": "Как тангенсът е свързан със синуса и косинуса"
        },
        {
          "kind": "p",
          "text": "Започнете с другите две съотношения:"
        },
        {
          "kind": "p",
          "text": "[[\\sin(A)=\\frac{a}{c}]]"
        },
        {
          "kind": "p",
          "text": "[[\\cos(A)=\\frac{b}{c}]]"
        },
        {
          "kind": "p",
          "text": "Разделете синуса на косинуса и хипотенузата се съкращава:"
        },
        {
          "kind": "p",
          "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
        },
        {
          "kind": "p",
          "text": "Следователно:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
        },
        {
          "kind": "p",
          "text": "Това тъждество се съгласува с определението срещулежаща върху прилежаща и дава полезна кръстосана проверка: всеки тангенсов резултат трябва да е равен на синуса, разделен на косинуса за същия ъгъл."
        }
      ],
      "steps": [],
      "closingParagraphs": [],
      "listItems": [],
      "related": [],
      "tables": [],
      "figures": [
        {
          "alt": "Три етапа: триъгълник 3-4-5, формула за тангенс tan(A)=a/b, резултат 0.75, срещулежащата е 75 процента от прилежащата",
          "caption": "Три етапа: означете триъгълника 3-4-5, запишете tan(A) = a/b, после разделете 3 на 4, за да получите 0.75."
        }
      ]
    },
    "sec-formula": {
      "h2": "Как работи формулата за тангенс",
      "blocks": [
        {
          "kind": "p",
          "text": "Започнете с определението:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
        },
        {
          "kind": "p",
          "text": "После използвайте означението на тази страница:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна принадлежи в числителя, защото тангенсът измерва колко голяма е страната срещу ъгъла; прилежащата страна принадлежи в знаменателя, защото е страната, с която се сравнява. Разменете ги и получавате котангенс, съвсем различно съотношение."
        },
        {
          "kind": "h3",
          "text": "Напълно разработен пример: правоъгълен триъгълник 3-4-5"
        },
        {
          "kind": "p",
          "text": "Дадена е срещулежаща страна [[a=3\\,\\text{cm}]], прилежаща страна [[b=4\\,\\text{cm}]] и хипотенуза [[c=5\\,\\text{cm}]]:"
        },
        {
          "kind": "p",
          "text": "<strong>Стъпка 1:</strong> Запишете формулата. [[\\tan(A)=a/b]]"
        },
        {
          "kind": "p",
          "text": "<strong>Стъпка 2:</strong> Заместете известните стойности. [[\\tan(A)=3/4]]"
        },
        {
          "kind": "p",
          "text": "<strong>Стъпка 3:</strong> Разделете. [[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "<strong>Стъпка 4:</strong> Изтълкувайте резултата. Срещулежащата страна е 75 процента от дължината на прилежащата страна."
        },
        {
          "kind": "p",
          "text": "<strong>Стъпка 5:</strong> Проверете триъгълника. [[3^2+4^2=5^2]], което е [[9+16=25]]. Дължините на страните са съгласувани с истински правоъгълен триъгълник."
        },
        {
          "kind": "h3",
          "text": "Намерете ъгъла от съотношението"
        },
        {
          "kind": "p",
          "text": "Ако самият ъгъл се изисква, приложете обратен тангенс към съотношението:"
        },
        {
          "kind": "p",
          "text": "[[A=\\tan^{-1}(0.75)]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
        },
        {
          "kind": "p",
          "text": "Обратният тангенс се нарича още аркустангенс. Изчисляването на тангенсовото съотношение и изчисляването на ъгъла са отделни операции: съотношението описва формата на триъгълника, докато обратният тангенс преобразува тази форма в градуси. Калкулаторът за тангенсово съотношение на тази страница връща съотношението; възстановяването на ъгъла е следваща стъпка на научен калкулатор."
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
      "h2": "Как да използвате калкулатора за тангенсово съотношение",
      "blocks": [
        {
          "kind": "p",
          "text": "Разходката по-долу съответства на живия интерфейс на тази страница. Всяка стъпка има значение, защото тангенсовият резултат е толкова надежден, колкото двете измервания зад него."
        }
      ],
      "steps": [
        "<strong>Определете референтния ъгъл [[A]].</strong> Тангенсът винаги работи от един остър ъгъл; назоваването му първо фиксира коя страна е срещулежаща и коя е прилежаща.",
        "<strong>Намерете срещулежащата страна [[a]], точно срещу ъгъл [[A]].</strong> Това е страната, която никога не докосва върха на ъгъла.",
        "<strong>Намерете прилежащата страна [[b]], която докосва ъгъл [[A]] и не е хипотенузата.</strong> Проверете отново, че не сте взели наклонената страна по погрешка.",
        "<strong>Получете или измерете и двете дължини на страните.</strong> Ролетка, чертеж в мащаб или известна спецификация стават, стига числата да описват един и същ триъгълник.",
        "<strong>Въведете дължината на срещулежащата страна в първото поле за въвеждане.</strong> Това е числителят на дробта.",
        "<strong>Въведете дължината на прилежащата страна във второто поле за въвеждане.</strong> Това е знаменателят.",
        "<strong>Изберете съвместими мерни единици чрез наличните избирачи на единици.</strong> И двата входа трябва да са в една и съща мерна единица или да се преобразуват в една преди делението.",
        "<strong>Потвърдете, че и двете измервания са положителни.</strong> Нулева или отрицателна страна не може да принадлежи на истински триъгълник.",
        "<strong>Щракнете Изчислете tan(A).</strong> Инструментът дели срещулежащата страна на прилежащата страна.",
        "<strong>Прочетете полученото тангенсово съотношение.</strong> Отговорът е обикновено число, без градуси и без мерни единици за дължина.",
        "<strong>Проверете дали резултатът е по-малък, равен или по-голям от 1.</strong> Под 1 означава, че триъгълникът е по-широк, отколкото висок; точно 1 означава равни катети; над 1 означава, че срещулежащата страна е по-дълга.",
        "<strong>Използвайте Нулиране, когато искате да изчистите въведеното и да започнете друго изчисление.</strong> Новите входове заслужават ново начало, а не остатъчни числа от предишната задача."
      ],
      "closingParagraphs": [
        "Калкулаторът не изисква хипотенузата или ъгъл като вход. Той извършва една операция, делението [[a/b]], и я извършва върху точно двата катета, които определите."
      ],
      "listItems": [],
      "related": [],
      "tables": [],
      "figures": []
    },
    "sec-examples": {
      "h2": "Примери стъпка по стъпка за изчисляване на тангенс",
      "blocks": [
        {
          "kind": "p",
          "text": "Тези четири разработени примера изграждат основното умение преди практическите приложения. Всеки следва един и същ ритъм: запишете формулата, заместете, разделете, изтълкувайте."
        },
        {
          "kind": "h3",
          "text": "Пример 1: Правоъгълен триъгълник 3-4-5"
        },
        {
          "kind": "p",
          "text": "Дадено [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] и [[c=5\\,\\text{cm}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{3}{4}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна е 75 процента от дължината на прилежащата страна. Тъй като срещулежащата страна е по-късият катет тук, съотношението е под 1, описвайки триъгълник, по-широк, отколкото висок."
        },
        {
          "kind": "h3",
          "text": "Пример 2: Правоъгълен триъгълник 5-12-13"
        },
        {
          "kind": "p",
          "text": "Дадена е срещулежаща страна [[a=5\\,\\text{m}]], прилежаща страна [[b=12\\,\\text{m}]] и хипотенуза [[c=13\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{5}{12}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна е приблизително 41.67 процента от дължината на прилежащата страна. Тройката 5-12-13 е друга питагорова тройка, затова [[5^2+12^2=13^2]] потвърждава истински правоъгълен триъгълник."
        },
        {
          "kind": "h3",
          "text": "Пример 3: Триъгълник 45-45-90"
        },
        {
          "kind": "p",
          "text": "Дадена е срещулежаща страна [[a=1\\,\\text{cm}]], прилежаща страна [[b=1\\,\\text{cm}]] и хипотенуза [[c=\\sqrt{2}\\,\\text{cm}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
        },
        {
          "kind": "p",
          "text": "Равните катети дават тангенсово съотношение 1. Това е естествената среда на тангенсовата скала и стойност, която си струва да се запомни: когато двата катета съвпадат, острите ъгли са по 45 градуса."
        },
        {
          "kind": "h3",
          "text": "Пример 4: Триъгълник 30-60-90"
        },
        {
          "kind": "p",
          "text": "За референтен ъгъл [[A=60^\\circ]] използвайте срещулежаща страна [[a=\\sqrt{3}\\,\\text{cm}]], прилежаща страна [[b=1\\,\\text{cm}]] и хипотенуза [[c=2\\,\\text{cm}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна е по-дълга от прилежащата, затова съотношението надвишава 1, както трябва за ъгъл от 60 градуса. Сравнете с допълващия ъгъл:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
        },
        {
          "kind": "p",
          "text": "Допълващите остри ъгли имат реципрочни тангенсови стойности, защото размяната на референтния ъгъл разменя означенията срещулежащ и прилежащ. [[0.5774 \\times 1.7321 \\approx 1]], което потвърждава реципрочната връзка."
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
      "h2": "Примери от реалния живот за използване на тангенсовото съотношение",
      "blocks": [
        {
          "kind": "p",
          "text": "Тангенсът си извоюва мястото в работния свят, защото толкова много реални задачи всъщност са задачи за изкачване спрямо хоризонтално разстояние под прикритие. Дванадесет разработени примера показват как моделът се повтаря при рампи, покриви, стълби и геодезически линии."
        },
        {
          "kind": "h3",
          "text": "Пример 5: Изчисляване на наклона на рампа"
        },
        {
          "kind": "p",
          "text": "Опростена рампа се издига с 0.6 м при хоризонтално разстояние 8 м. Вертикалното изкачване е срещулежащата страна, [[a=0.6\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=8\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.075}]]"
        },
        {
          "kind": "p",
          "text": "Процентният наклон е [[0.075 \\times 100\\%=7.5\\%]], а ъгълът е [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Рампата се издига със 7.5 единици вертикално на всеки 100 единици хоризонтално. Изчислението не установява достъпност или съответствие със строителните норми."
        },
        {
          "kind": "h3",
          "text": "Пример 6: Изчисляване на наклона на покрив"
        },
        {
          "kind": "p",
          "text": "Покрив се издига с 3 м при хоризонтално разстояние 4 м. Вертикалното изкачване е срещулежащата страна, [[a=3\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=4\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{3}{4}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Покривът се издига с 0.75 единици на всяка хоризонтална единица, 75-процентов наклон, а ъгълът на наклона е [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Наклонът на покрива се изразява и като изкачване спрямо хоризонтално разстояние в традиционни единици, например инчове изкачване на 12 инча разстояние, което е същото съотношение в друго облекло. Това съотношение не представлява пълна оценка на покривното проектиране."
        },
        {
          "kind": "h3",
          "text": "Пример 7: Намиране на ъгъла на стълба"
        },
        {
          "kind": "p",
          "text": "Стълба достига 4 м нагоре по стена, а основата ѝ е на 3 м хоризонтално от стената. Ъгълът [[A]] е между стълбата и земята. Вертикалната височина е срещулежащата страна, [[a=4\\,\\text{m}]], а разстоянието по земята е прилежащата страна, [[b=3\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{4}{3}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
        },
        {
          "kind": "p",
          "text": "Ъгълът е [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. Вертикалната височина е по-голяма от хоризонталното разстояние, затова съотношението надвишава 1. Примерът обяснява геометрията и не установява дали стълбата е поставена безопасно."
        },
        {
          "kind": "h3",
          "text": "Пример 8: Оценяване на ъгъла на издигане към дърво"
        },
        {
          "kind": "p",
          "text": "Дърво е високо 12 м, а сянката му е дълга 9 м върху равен терен. Приемете, че слънчевите лъчи създават опростен модел на правоъгълен триъгълник. Височината на дървото е срещулежащата страна, [[a=12\\,\\text{m}]], а дължината на сянката е прилежащата страна, [[b=9\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{12}{9}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
        },
        {
          "kind": "p",
          "text": "Височината е приблизително 1.3333 пъти дължината на сянката, а съответният геометричен ъгъл е около [[53.13^\\circ]]. Примерът приема равен терен, вертикално дърво и праволинеен модел на сянката."
        },
        {
          "kind": "h3",
          "text": "Пример 9: Геодезическо измерване на денивелация"
        },
        {
          "kind": "p",
          "text": "Геодезическо измерване показва вертикална денивелация 15 м при хоризонтално разстояние 20 м. Денивелацията е срещулежащата страна, [[a=15\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=20\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{15}{20}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Денивелацията е 0.75 пъти хоризонталното разделяне, а съответният ъгъл е около [[36.87^\\circ]]. Реалната геодезия може да изисква корекции за височина на инструмента, поправки и допълнителни измервания отвъд този опростен модел."
        },
        {
          "kind": "h3",
          "text": "Пример 10: Изчисляване на процентния наклон на път"
        },
        {
          "kind": "p",
          "text": "Опростен пътен участък се издига с 1.2 м при хоризонтално разстояние 24 м. Вертикалното изкачване е срещулежащата страна, [[a=1.2\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=24\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.05}]]"
        },
        {
          "kind": "p",
          "text": "Процентният наклон е [[0.05 \\times 100\\%=5\\%]], а ъгълът е [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. Наклон 5 процента не означава ъгъл от 5 градуса; това разграничение е често срещан източник на объркване и двете числа никога не бива да се използват взаимозаменяемо."
        },
        {
          "kind": "h3",
          "text": "Пример 11: Изчисляване на стръмността на стълбище"
        },
        {
          "kind": "p",
          "text": "Опростено стълбище има общо вертикално изкачване 2.4 м и хоризонтално разстояние 3.2 м. Вертикалното изкачване е срещулежащата страна, [[a=2.4\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=3.2\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Вертикалното изкачване е 75 процента от хоризонталното разстояние, а ъгълът е около [[36.87^\\circ]]. Изчислението не проверява размерите на стълбището, удобството или съответствието със строителните норми."
        },
        {
          "kind": "h3",
          "text": "Пример 12: Разбиране на ъгъла на обтегателно въже"
        },
        {
          "kind": "p",
          "text": "Обтегателно въже се закрепва за стълб на 12 м над земята, а котвата му в земята е на 5 м хоризонтално от стълба. Височината на закрепване е срещулежащата страна, [[a=12\\,\\text{m}]], а разстоянието по земята е прилежащата страна, [[b=5\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{12}{5}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=2.4}]]"
        },
        {
          "kind": "p",
          "text": "Ъгълът е [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. Вертикалната височина е 2.4 пъти хоризонталното разстояние до котвата, стръмно въже по всяка мярка. Тангенсовото съотношение не определя опъна на въжето, якостта на котвата или конструктивната безопасност."
        },
        {
          "kind": "h3",
          "text": "Пример 13: Изчисляване на посоката на кранова стрела"
        },
        {
          "kind": "p",
          "text": "Опростена кранова стрела има вертикална компонента 8 м и хоризонтална проекция 6 м. Вертикалната компонента е срещулежащата страна, [[a=8\\,\\text{m}]], а хоризонталната проекция е прилежащата страна, [[b=6\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{8}{6}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
        },
        {
          "kind": "p",
          "text": "Съответният ъгъл е около [[53.13^\\circ]]. Вертикалната компонента е приблизително 1.3333 пъти хоризонталната проекция. Това е опростен геометричен пример и не установява товароподемността на крана или безопасността на работа."
        },
        {
          "kind": "h3",
          "text": "Пример 14: Оценяване на наклона на туристическа пътека"
        },
        {
          "kind": "p",
          "text": "Опростен прав участък от туристическа пътека има вертикално изкачване 120 м и хоризонтално разстояние 800 м. Изкачването е срещулежащата страна, [[a=120\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=800\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{120}{800}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.15}]]"
        },
        {
          "kind": "p",
          "text": "Процентният наклон е 15 процента, а съответният ъгъл е около [[8.53^\\circ]]. Този опростен модел представлява постоянен праволинеен наклон, а не цяла криволичеща туристическа пътека."
        },
        {
          "kind": "h3",
          "text": "Пример 15: Оценяване на механична разпора"
        },
        {
          "kind": "p",
          "text": "Диагонална механична разпора има вертикална компонента 1.5 м и хоризонтална компонента 2 м. Вертикалната компонента е срещулежащата страна, [[a=1.5\\,\\text{m}]], а хоризонталната компонента е прилежащата страна, [[b=2\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Вертикалната компонента е 75 процента от хоризонталната компонента. Съотношението не определя якостта на разпората, товароподемността ѝ или пригодността ѝ."
        },
        {
          "kind": "h3",
          "text": "Пример 16: Намиране на ъгъла на издигане към сграда"
        },
        {
          "kind": "p",
          "text": "Наблюдател стои на 24 м хоризонтално от сграда. Върхът на сградата е на 18 м над нивото на очите на наблюдателя. Вертикалната разлика е срещулежащата страна, [[a=18\\,\\text{m}]], а хоризонталното разстояние е прилежащата страна, [[b=24\\,\\text{m}]]:"
        },
        {
          "kind": "p",
          "text": "[[\\tan(A)=\\frac{18}{24}]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{\\tan(A)=0.75}]]"
        },
        {
          "kind": "p",
          "text": "Ъгълът на издигане е около [[36.87^\\circ]] при опростената геометрия. Това е ъгълът към върха спрямо хоризонталното ниво на очите на наблюдателя, а не непременно общата височина на сградата."
        },
        {
          "kind": "p",
          "text": "Тангенсът е безразмерно съотношение, но практическата му стойност идва от сравняването на вертикалното изкачване с хоризонталното разстояние, описването на стръмността на прав наклон, изчисляването на ъгли на издигане и решаването за липсващи страни, когато ъгълът е известен. Три свързани величини лесно се объркват, затова ги дръжте разделени: <strong>тангенсовото съотношение</strong> е вертикално изкачване, разделено на хоризонтално разстояние; <strong>процентният наклон</strong> е тангенсовото съотношение, умножено по 100 процента; <strong>ъгълът</strong> е резултатът от прилагането на обратен тангенс към съотношението. Само тангенсът никога не определя конструктивна безопасност, товароподемност, достъпност или инженерно съответствие."
        }
      ],
      "steps": [],
      "closingParagraphs": [],
      "listItems": [],
      "related": [],
      "tables": [
        {
          "headers": [
            "Ситуация",
            "Срещулежаща [[a]]",
            "Прилежаща [[b]]",
            "Формула",
            "Съотношение",
            "Наклон",
            "Значение"
          ],
          "rows": [
            ["Рампа", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Нежен наклон, изкачва се със 7.5 на 100 разстояние"],
            ["Наклон на покрив", "3 m", "4 m", "3/4", "0.75", "75%", "Изкачването е 75% от разстоянието"],
            ["Стълба", "4 m", "3 m", "4/3", "1.3333", "n/a", "Височината надвишава разстоянието до основата, ъгъл 53.13 градуса"],
            ["Дърво", "12 m", "9 m", "12/9", "1.3333", "n/a", "Височината е 1.3333 пъти дължината на сянката"],
            ["Геодезия", "15 m", "20 m", "15/20", "0.75", "75%", "Денивелацията е 75% от хоризонталното разстояние"],
            ["Пътен наклон", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "Наклон 5%, а не ъгъл от 5 градуса"],
            ["Стълбище", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Изкачването е 75% от разстоянието"],
            ["Обтегателно въже", "12 m", "5 m", "12/5", "2.4", "n/a", "Стръмно въже, ъгъл 67.38 градуса"],
            ["Кранова стрела", "8 m", "6 m", "8/6", "1.3333", "n/a", "Вертикалът е 1.3333 пъти хоризонталът"],
            ["Туристическа пътека", "120 m", "800 m", "120/800", "0.15", "15%", "Постоянен наклон 15%"],
            ["Механична разпора", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "Вертикалът е 75% от хоризонтала"],
            ["Сграда", "18 m", "24 m", "18/24", "0.75", "n/a", "Ъгъл на издигане 36.87 градуса"]
          ]
        }
      ],
      "figures": [
        {
          "alt": "Четири панела: рампа 0.075, наклон на покрив 0.75, стълба 1.3333, геодезия 0.75, всеки с означен триъгълник",
          "caption": "Четири практически изчисления: рампа, наклон на покрив, стълба и геодезия, всяко с триъгълника, формулата и съотношението си."
        }
      ]
    },
    "sec-angle": {
      "h2": "Разбиране на връзката между тангенса и големината на ъгъла",
      "blocks": [
        {
          "kind": "p",
          "text": "Тангенсът расте, когато референтният ъгъл расте, и геометрията обяснява защо. Когато ъгъл [[A]] е малък, срещулежащата страна е къса спрямо прилежащата, затова съотношението е близо до 0. Когато ъгълът се разширява, срещулежащата страна става все по-голям дял от прилежащата и съотношението се изкачва: минава 1 при [[45^\\circ]], после расте без граница, когато ъгълът се приближава към [[90^\\circ]]. Таблицата по-долу използва илюстративни дължини на страни; съотношението, а не абсолютният размер на триъгълника, определя ъгъла."
        }
      ],
      "steps": [],
      "closingParagraphs": [
        "Моделът е прост: тангенсът е малък, когато срещулежащата страна е къса спрямо прилежащата, равен е на 1 при [[45^\\circ]], надвишава 1 за по-големи остри ъгли, приближава нулата, когато ъгълът се приближава към [[0^\\circ]], и расте без граница, когато ъгълът се приближава към [[90^\\circ]]. Триъгълниците с един и същ ъгъл имат едно и също тангенсово съотношение, дори когато дължините на страните им се различават, защото съотношението улавя формата, а не размера."
      ],
      "listItems": [],
      "related": [],
      "tables": [
        {
          "headers": [
            "Ъгъл [[A]]",
            "Срещулежаща страна [[a]]",
            "Прилежаща страна [[b]]",
            "Тангенсово съотношение"
          ],
          "rows": [
            ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Приблизително 0.5774"],
            ["[[45^\\circ]]", "1", "1", "1"],
            ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Приблизително 1.7321"],
            ["[[75^\\circ]]", "Приблизително 3.7321", "1", "Приблизително 3.7321"]
          ]
        }
      ],
      "figures": [
        {
          "alt": "Три триъгълника при 30, 45, 60 градуса със стойности на тангенс 0.5774, 1, 1.7321; тангенсът расте с ъгъла",
          "caption": "Когато ъгъл A расте, срещулежащата страна става все по-голям дял от прилежащата страна, затова tan(A) расте."
        }
      ]
    },
    "sec-side": {
      "h2": "Как да намерите срещулежащата страна чрез тангенс",
      "blocks": [
        {
          "kind": "p",
          "text": "Формулата за тангенс може да се пренареди, за да се намери срещулежащата страна, когато прилежащата страна и ъгълът са известни. Започнете с [[\\tan(A)=a/b]] и умножете двете страни по [[b]]:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{a=b\\tan(A)}]]]"
        },
        {
          "kind": "p",
          "text": "Срещулежащата страна е равна на прилежащата страна, умножена по тангенса на ъгъла. Дадена е прилежаща страна [[b=10\\,\\text{m}]] и ъгъл [[A=30^\\circ]], и знаейки [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:"
        },
        {
          "kind": "p",
          "text": "[[a=10\\times0.5774]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
        },
        {
          "kind": "p",
          "text": "Вертикалното изкачване е приблизително 5.774 м за 10 м хоризонтално разстояние при този ъгъл."
        },
        {
          "kind": "p",
          "text": "Прилежащата страна може да се намери по същия начин с ново пренареждане:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
        },
        {
          "kind": "p",
          "text": "При срещулежаща страна [[a=6\\,\\text{m}]] и [[A=45^\\circ]]: тъй като [[\\tan(45^\\circ)=1]], [[b=6/1]], значи [[\\boxed{b=6\\,\\text{m}}]]. Това са математически пренареждания на същата формула. Калкулаторът на тази страница връща тангенсовото съотношение от дължините на страните; той не изчислява директно липсващи страни."
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
      "h2": "Как да намерите ъгъл от тангенсово съотношение",
      "blocks": [
        {
          "kind": "p",
          "text": "Тангенсовото съотношение и ъгълът са различни величини: едното е безразмерно сравнение на страни, другото се измерва в градуси. Когато съотношението е известно и ъгълът е нужен, може да се използва обратен тангенс:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
        },
        {
          "kind": "p",
          "text": "Обратният тангенс се нарича още аркустангенс. Дадено [[\\tan(A)=0.75]]:"
        },
        {
          "kind": "p",
          "text": "[[A=\\tan^{-1}(0.75)]]"
        },
        {
          "kind": "p",
          "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
        },
        {
          "kind": "p",
          "text": "Ъгълът е приблизително [[36.87^\\circ]], когато калкулаторът е настроен на градуси."
        },
        {
          "kind": "h3",
          "text": "Защо режимът на ъгъла на калкулатора има значение"
        },
        {
          "kind": "p",
          "text": "Ъглите могат да се измерват в градуси или радиани и научният калкулатор трябва да е настроен на предвидения режим, преди да се приложи обратен тангенс. Пълният кръг е 360 градуса или [[2\\pi]] радиана, значи [[45^\\circ=\\pi/4]] радиана. Самото тангенсово съотношение няма нито градусови, нито радианови единици; тези единици се отнасят за ъгъла, възстановен от него. Калкулаторът за тангенсово съотношение на тази страница връща съотношението директно и не връща ъгъл."
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
      "h2": "Чести грешки при изчисляване на тангенс",
      "blocks": [
        {
          "kind": "p",
          "text": "Повечето грешки с тангенса идват от обърната дроб, грешно означена страна или объркване на съотношението с ъгъла. Минете през този списък, преди да се доверите на резултат."
        }
      ],
      "steps": [
        "<strong>Обръщане на формулата и изчисляване на [[b/a]] вместо [[a/b]].</strong> Това връща котангенс, а не тангенс. При [[a=3]] и [[b=4]] обърнатата дроб дава 1.3333; правилната дава 0.75.",
        "<strong>Объркване на тангенс със синус.</strong> Тангенсът дели срещулежащата страна на прилежащата страна; синусът дели срещулежащата страна на хипотенузата. Ако хипотенузата е в знаменателя, отговорът е синус, а не тангенс.",
        "<strong>Объркване на тангенс с косинус.</strong> Косинусът дели прилежащата страна на хипотенузата. Тангенсът изобщо не използва хипотенузата, така че хипотенуза на която и да е позиция сигнализира грешно съотношение.",
        "<strong>Объркване на тангенс с котангенс.</strong> Котангенсът е реципрочната стойност, прилежаща върху срещулежаща. Сходните имена причиняват реални грешки, но редът на дробта е точно обърнат.",
        "<strong>Включване на хипотенузата в основната формула за тангенс.</strong> Хипотенузата не играе никаква роля в [[a/b]]. Ако се появи в изчислението, е използвана грешната формула.",
        "<strong>Размяна на срещулежащата и прилежащата страна.</strong> И двете са катети, затова означенията лесно се объркват. Винаги тръгвайте от референтния ъгъл: срещу него е срещулежащата, докосващата го е прилежащата.",
        "<strong>Определяне на страните спрямо грешния референтен ъгъл.</strong> Преминаването от ъгъл [[A]] към ъгъл [[C]] разменя означенията срещулежащ и прилежащ, което обръща съотношението в реципрочното му.",
        "<strong>Приемане, че тангенсът трябва да е по-малък от 1.</strong> Това правило принадлежи на синуса и косинуса. Тангенсът няма горна граница за остри ъгли и резултат над 1 е напълно валиден.",
        "<strong>Отчитане на тангенсовото съотношение като ъгъл в градуси.</strong> Резултат 0.75 е съотношение, а не [[0.75^\\circ]]. Третирането му като градуси подава безсмислици във всяко следващо изчисление.",
        "<strong>Отчитане на тангенсовото съотношение с мерни единици.</strong> Единиците се съкращават при делението, така че \"0.75 м\" е грешно. Запишете обикновеното число и дръжте единиците във входните измервания, където им е мястото.",
        "<strong>Въвеждане на нулеви или отрицателни дължини на страни.</strong> Триъгълник не може да има нулева или отрицателна страна, така че тези входове сигнализират грешка при въвеждане на данни или липсващо измерване, а не валиден граничен случай.",
        "<strong>Смесване на несъвместими мерни единици.</strong> Срещулежаща страна 3 м с прилежаща страна 40 см дава 7.5, безсмислено число. Първо преобразувайте в една мерна единица: 3 м и 4 м дават правилното 0.75.",
        "<strong>Твърде ранно закръгляване.</strong> Закръглянето на междинно деление до два знака след десетичната запетая и продължаването на изчислението натрупва грешката. Дръжте пълна точност през всяка стъпка и закръгляйте само крайния отговор.",
        "<strong>Объркване на процентния наклон с ъгъл в градуси.</strong> Наклон 5 процента идва от тангенс 0.05, но ъгълът е [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], а не 5 градуса. Наклонът и ъгълът са различни величини.",
        "<strong>Приемане, че тангенсовото съотношение определя абсолютните размери на триъгълника.</strong> Тангенсът описва формата, а не размера: безброй много триъгълници споделят тангенс 0.75, от срещулежаща страна 3 см до срещулежаща страна 3 км. Съотношението фиксира пропорциите; реалните дължини се нуждаят от поне едно измерване на страна."
      ],
      "closingParagraphs": [
        "<strong>Грешно срещу правилно: разработено сравнение.</strong> Дадена е срещулежаща страна [[a=3]] и прилежаща страна [[b=4]]:",
        "<strong>Грешно:</strong> [[4/3\\approx1.3333]]. Това е котангенсовото съотношение за ъгъл [[A]], а не тангенсовото съотношение. Числителят и знаменателят са обърнати.",
        "<strong>Правилно:</strong> [[\\tan(A)=3/4=0.75]].",
        "<strong>Проверете чрез синус и косинус:</strong> при [[c=5]], [[\\sin(A)=3/5=0.6]] и [[\\cos(A)=4/5=0.8]]. Следователно [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], което потвърждава изчислението на тангенса."
      ],
      "listItems": [],
      "related": [],
      "tables": [],
      "figures": []
    },
    "sec-verify": {
      "h2": "Как да проверите дали резултатът ви за тангенс е валиден",
      "blocks": [
        {
          "kind": "p",
          "text": "Валидният, неизроден правоъгълен триъгълник изисква два положителни катета, [[a \\gt 0]] и [[b \\gt 0]], измерени в съвместими единици, затова тангенсовият резултат трябва да е положителен:"
        },
        {
          "kind": "p",
          "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
        },
        {
          "kind": "p",
          "text": "Няма изискване срещулежащата страна да е по-къса от прилежащата, затова резултатът може да е под, на или над 1. Резултат, който е нула или отрицателен, обикновено сочи невалидни входове или обърнати означения."
        },
        {
          "kind": "h3",
          "text": "Метод 1: Проверете съотношението"
        },
        {
          "kind": "p",
          "text": "Проверете отново [[\\tan(A)=a/b]] директно. При [[a=3]] и [[b=4]]: [[\\tan(A)=3/4=0.75]]. Тъй като срещулежащата страна е по-къса от прилежащата, съотношението трябва да излезе под 1; ако второ ръчно изчисление се разминава, някоя страна е грешно означена или някоя единица е смесена."
        },
        {
          "kind": "h3",
          "text": "Метод 2: Проверете Питагоровата теорема"
        },
        {
          "kind": "p",
          "text": "Изчислете хипотенузата, когато е нужна: [[c=\\sqrt{a^2+b^2}]]. За [[a=3]] и [[b=4]]: [[c=\\sqrt{9+16}=5]], и [[3^2+4^2=5^2]]. Това потвърждава размерите на правоъгълния триъгълник 3-4-5. Хипотенузата е проверочна стойност тук, а не част от основната формула за тангенс."
        },
        {
          "kind": "h3",
          "text": "Метод 3: Проверете с обратен тангенс"
        },
        {
          "kind": "p",
          "text": "За тангенсово съотношение 0.75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Тъй като съотношението е под 1, ъгълът трябва да излезе под [[45^\\circ]]; ако не е, означенията на страните вероятно са разменени. Малки разлики могат да дойдат от закръгляне."
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
      "h2": "Тангенс срещу синус, косинус и котангенс",
      "blocks": [
        {
          "kind": "p",
          "text": "Всяко съотношение сравнява различна двойка страни, използвайки същия референтен ъгъл и означения на страните:"
        }
      ],
      "steps": [],
      "closingParagraphs": [
        "Тангенсът и котангенсът са реципрочната двойка: [[\\cot(A)=1/\\tan(A)]]. Ако [[\\tan(A)=0.75]], тогава [[\\cot(A)\\approx1.3333]]. Посегнете към тангенса, когато и двата катета са известни или когато задача включва изкачване спрямо хоризонтално разстояние; посегнете към синуса или косинуса, когато хипотенузата влиза в работата, а към котангенса, когато сравнението върви в другата посока. Дръжте тангенса в центъра: съседните съотношения имат собствени страници с пълни разработки.",
        "За съседните съотношения вижте <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за синусово съотношение</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за косинусово съотношение</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за котангенсово съотношение</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за секансово съотношение</a> и <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">калкулатора за косекансово съотношение</a>."
      ],
      "listItems": [],
      "related": [],
      "tables": [
        {
          "headers": [
            "Съотношение",
            "Формула",
            "Какво сравнява"
          ],
          "rows": [
            ["Синус", "sin(A) = a/c", "Срещулежаща страна към хипотенуза"],
            ["Косинус", "cos(A) = b/c", "Прилежаща страна към хипотенуза"],
            ["Тангенс", "tan(A) = a/b", "Срещулежаща страна към прилежаща страна"],
            ["Косеканс", "csc(A) = c/a", "Хипотенуза към срещулежаща страна"],
            ["Секанс", "sec(A) = c/b", "Хипотенуза към прилежаща страна"],
            ["Котангенс", "cot(A) = b/a", "Прилежаща страна към срещулежаща страна"]
          ]
        }
      ],
      "figures": []
    },
    "sec-related": {
      "h2": "Разгледайте свързаните тригонометрични калкулатори",
      "blocks": [],
      "steps": [],
      "closingParagraphs": [],
      "listItems": [],
      "related": [
        { "name": "Калкулатор за синусово съотношение", "desc": "Изчислява синусовото съотношение, срещулежаща страна върху хипотенуза, от две дължини на страни." },
        { "name": "Калкулатор за косинусово съотношение", "desc": "Изчислява косинусовото съотношение, прилежаща страна върху хипотенуза, от две дължини на страни." },
        { "name": "Калкулатор за котангенсово съотношение", "desc": "Изчислява котангенсовото съотношение, прилежаща страна върху срещулежаща страна, от две дължини на страни." },
        { "name": "Калкулатор за секансово съотношение", "desc": "Изчислява секансовото съотношение, хипотенуза върху прилежаща страна, от две дължини на страни." },
        { "name": "Калкулатор за косекансово съотношение", "desc": "Изчислява косекансовото съотношение, хипотенуза върху срещулежаща страна, от две дължини на страни." },
        { "name": "Калкулатор за ъгъл на правоъгълен триъгълник", "desc": "Намира липсващ остър ъгъл на правоъгълен триъгълник от известни страни." },
        { "name": "Калкулатор за страна на правоъгълен триъгълник", "desc": "Намира липсваща страна на правоъгълен триъгълник от известни страни и ъгли." }
      ],
      "tables": [],
      "figures": []
    },
    "sec-conclusion": {
      "h2": "Използвайте тангенсовото съотношение с увереност",
      "blocks": [
        {
          "kind": "p",
          "text": "Тангенсът е съотношението на двата катета: разделете срещулежащата страна на прилежащата и сте описали колко единици вертикално изкачване идват с всяка единица хоризонтално разстояние. Формулата [[\\tan(A)=a/b]] се нуждае само от две измервания, отговорът винаги е безразмерно число, което може да е под, на или над 1, и расте, когато референтният ъгъл расте. Когато липсваща страна е нужна, [[a=b\\tan(A)]] възстановява срещулежащата страна; когато ъгълът е нужен, [[A=\\tan^{-1}(a/b)]] го възстановява. Рампа, покрив, стълба или учебникарският 3-4-5, методът никога не се променя: определете срещулежащата страна, определете прилежащата страна, разделете и проверете с проверката за положително съотношение."
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
      "question": "Каква е формулата за тангенсовото съотношение на правоъгълен триъгълник?",
      "answer": "tan(A) = a / b: разделете срещулежащата страна a на прилежащата страна b. При срещулежаща страна 3 см и прилежаща страна 4 см резултатът е 3/4 = 0.75. Това десетично число е пълният отговор, безразмерно съотношение, а не ъгъл."
    },
    {
      "question": "Как се изчислява тангенс от две дължини на страни?",
      "answer": "Определете референтния ъгъл A, измерете срещулежащата страна a и прилежащата страна b в една и съща мерна единица, потвърдете, че и двете са положителни, после разделете: tan(A) = a / b. На тази страница въведете срещулежащата страна в първото поле, а прилежащата страна във второто, после щракнете Изчислете tan(A)."
    },
    {
      "question": "Защо тангенсът не използва хипотенузата?",
      "answer": "Тангенсът сравнява двата перпендикулярни катета директно: вертикално срещу хоризонтално. Хипотенузата не добавя нова информация към това сравнение, затова основната формула се нуждае само от срещулежащата и прилежащата страна. Питагоровата теорема може да възстанови хипотенузата по-късно, ако друго изчисление я поиска."
    },
    {
      "question": "Може ли тангенсът да е по-голям от 1?",
      "answer": "Да. Тангенсът няма горна граница за остри ъгли. Когато срещулежащата страна е по-дълга от прилежащата, съотношението надвишава 1: при a = 6 и b = 3, tan(A) = 6/3 = 2. Резултат над 1 е математически валиден и не показва грешка на калкулатора."
    },
    {
      "question": "Какво означава тангенсова стойност 0.75?",
      "answer": "Срещулежащата страна е 75 процента от прилежащата страна. В триъгълник 3-4-5 страната срещу ъгъл A е 3 единици, докато страната до ъгъл A е 4 единици, значи tan(A) = 3/4 = 0.75. Тя описва формата на триъгълника и не е ъгъл от 0.75 градуса."
    },
    {
      "question": "Каква е разликата между тангенс и котангенс?",
      "answer": "Те са реципрочни стойности. Тангенсът дели срещулежащата страна на прилежащата (a/b); котангенсът дели прилежащата страна на срещулежащата (b/a). Ако tan(A) = 0.75, тогава cot(A) = 1/0.75, около 1.3333. Редът на дробта е точно обърнат."
    },
    {
      "question": "Как мога да изчисля ъгъл от тангенсово съотношение?",
      "answer": "Приложете аркустангенс към съотношението: A = tan^-1(a/b). За tan(A) = 0.75, A = tan^-1(0.75), около 36.87 градуса. Първо настройте научния калкулатор на режим градуси. Калкулаторът на тази страница връща съотношението, а не ъгъла."
    },
    {
      "question": "Как мога да намеря срещулежащата страна чрез тангенс?",
      "answer": "Пренаредете формулата до a = b * tan(A). Ако прилежащата страна е 10 м, а ъгъл A е 30 градуса, tan(30 deg) е около 0.5774, значи a = 10 * 0.5774, около 5.774 м. Това е ръчно пренареждане; калкулаторът на тази страница връща съотношението от дължините на страните, а не липсващи страни."
    },
    {
      "question": "Как мога да намеря прилежащата страна чрез тангенс?",
      "answer": "Пренаредете формулата до b = a / tan(A). Ако срещулежащата страна е 6 м, а ъгъл A е 45 градуса, tan(45 deg) = 1, значи b = 6/1 = 6 м. Това е математическо пренареждане на същата формула, а не отделен режим на калкулатора на тази страница."
    },
    {
      "question": "Тангенсът същото ли е като наклона?",
      "answer": "Те са тясно свързани. Наклонът като изкачване спрямо хоризонтално разстояние е същото сравнение, което прави тангенсът: вертикална промяна, разделена на хоризонтална промяна. Пътен инженер, който пише наклон 0.05, и ученик по тригонометрия, който пише tan(A) = 0.05, описват едно и също съотношение. Термините се различават по контекст, а не по математика."
    },
    {
      "question": "Каква е разликата между процентния наклон и ъгъла в градуси?",
      "answer": "Процентният наклон е 100 пъти тангенсовото съотношение: тангенс 0.05 дава наклон 5%. Ъгълът е аркустангенсът на съотношението: tan^-1(0.05) е около 2.86 градуса. Наклон 5% следователно не е ъгъл от 5 градуса. Объркването на двете е една от най-честите грешки с тангенса."
    },
    {
      "question": "Как се използва тангенсът в строителството и геодезията?",
      "answer": "Тангенсът сравнява вертикалното изкачване с хоризонталното разстояние, което е точно това, което описват наклонът на покрива, наклонът на рампата, пътният наклон и стръмността на стълбището. Геодезистите го използват, за да превърнат денивелацията и хоризонталното разстояние в ъгъл на издигане. Във всеки случай самото съотношение никога не удостоверява конструктивна безопасност или съответствие с нормите."
    }
  ],
  "faqHeading": "Често задавани въпроси",
  "relatedHeading": "Разгледайте свързаните тригонометрични калкулатори"
},
"tr": {
    "tocHeading": "Bu Kılavuzda",
    "tocItems": {
        "sec-intro": "Tanjant Oranı Hesaplayıcı Nedir?",
        "sec-triangle": "Karşı Kenarı ve Komşu Kenarı Anlama",
        "sec-whatis": "Tanjant Oranını Anlama",
        "sec-formula": "Tanjant Formülü Nasıl Çalışır",
        "sec-howto": "Tanjant Oranı Hesaplayıcı Nasıl Kullanılır",
        "sec-examples": "Tanjant Hesaplamanın Adım Adım Örnekleri",
        "sec-applications": "Tanjant Oranının Gerçek Hayattan Örnekleri",
        "sec-angle": "Tanjant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
        "sec-side": "Tanjant Kullanarak Karşı Kenar Nasıl Bulunur",
        "sec-recover": "Tanjant Oranından Açı Nasıl Bulunur",
        "sec-mistakes": "Tanjant Hesaplarken Yapılan Yaygın Hatalar",
        "sec-verify": "Tanjant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
        "sec-vs": "Tanjant ile Sinüs, Kosinüs ve Kotanjant",
        "sec-related": "İlgili Trigonometrik Hesaplayıcıları Keşfedin",
        "sec-faq": "Sık Sorulan Sorular"
    },
    "sections": {
        "sec-intro": {
            "h2": "Tanjant Oranı Hesaplayıcı Nedir?",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Bir tanjant oranı hesaplayıcı tek bir soruyu yanıtlar: bir dik üçgendeki dar bir açı için, açının karşısındaki kenar, açının yanındaki kenarla nasıl karşılaştırılır? Karşı kenarı ve komşu kenarı girin; araç, karşı kenarı komşu kenara bölerek [[\\tan(A)=a/b]] sonucunu verir. Bir dik üçgenin karşı kenarı 3 cm, komşu kenarı 4 cm'dir; yani [[\\tan(A)=3/4=0.75]]. Bu 0.75 tanjant oranıdır: karşı kenarın, komşu kenarın yüzde 75'i kadar uzun olduğunu söyler. Bu bir açı değildir; onu asla [[0.75^\\circ]] olarak okumayın. Hipotenüs bu hesaba hiç girmez; karşı kenar ile komşu kenar tek başlarına yeterlidir. Tanjant, temel trigonometrik oranlardan biridir ve onun özel gücü, düşey yükselmeyi yatay mesafeyle karşılaştırmasıdır; bu yüzden çatı eğimlerinde, yol eğimlerinde ve rampa eğimlerinde karşınıza çıkar. Sonuç boyutsuz bir sayıdır: iki uzunluğun yalın bir karşılaştırmasıdır, santimetre ya da derece cinsinden bir ölçüm değildir. Derece cinsinden açı gerekiyorsa, ters tanjant oranı dereceye çevirir."
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
            "h2": "Karşı Kenarı ve Komşu Kenarı Anlama",
            "blocks": [
                {
                    "kind": "h3",
                    "text": "Dik Üçgen Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Bir dik üçgenin bir açısı tam olarak [[90^\\circ]]'dir; bu, birbirine dik iki doğru arasındaki açıdır, tıpkı düz bir zeminle buluşan bir duvar gibi. Hipotenüs bu dik açının karşısında yer alır ve köşeyi çaprazlamasına tamamen aşması gerektiği için her zaman en uzun kenardır. Diğer iki açı kalan 90 dereceyi paylaşır, dolayısıyla ikisi de dar açıdır. İki kenar dik açıda birleşir, birbirine diktir ve onların hipotenüsle ilişkisi, dik üçgen trigonometrisini mümkün kılan şeydir."
                },
                {
                    "kind": "h3",
                    "text": "Karşı Kenar Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a]], referans açı [[A]]'nin tam karşısında duran kenardır; açının köşesine hiç değmeyen tek kenardır. Uygulamalı problemlerde genellikle düşey yükselme, yükseklik farkı ya da bir yükseklik rolünü üstlenir: bir merdivenin duvarda ulaştığı yükseklik, bir çatının yükselmesi ya da bir vinç kolunun düşey bileşeni. Hangi kenarın karşı sayıldığı seçilen referans açıya bağlıdır; bu yüzden [[A]] açısından [[C]] açısına geçmek, karşı ve komşu etiketlerini değiştirir. Tanjant formülünün payında yer alır, çünkü tanjant, açı karşısındaki kenarın, açının yanındaki kenara göre ne kadar büyük olduğunu ölçer."
                },
                {
                    "kind": "h3",
                    "text": "Komşu Kenar Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Komşu kenar [[b]], referans açı [[A]]'ye değen ama hipotenüs olmayan kenardır. Uygulamalı problemlerde genellikle yatay mesafe ya da zemin uzaklığı rolünü üstlenir: merdiven tabanının duvara uzaklığı, çatının yatay açıklığı ya da güneş açısı probleminde gölge uzunluğu. Her seferinde kontrol edilmeye değer bir nokta: asla hipotenüs değildir, çünkü hipotenüs dik açının baktığı kenardır. Tanjant formülünün paydasında yer alır; bu yüzden tanjant, karşı kenarı en uzun kenarla değil, bu kenarla karşılaştırır."
                },
                {
                    "kind": "h3",
                    "text": "Hipotenüs Nedir?"
                },
                {
                    "kind": "p",
                    "text": "Hipotenüs [[c]], dik açının karşısındaki kenardır: her çizimde [[90^\\circ]] köşesini işaretleyen küçük karenin karşısında durur ve iki kenardan da kesinlikle uzundur. Uygulamalı problemlerde genellikle eğik bir uzunluk rolünü üstlenir: merdiven, çatı kirişi, gergi teli ya da çapraz destek. Temel tanjant hesabı için gerekli değildir, çünkü tanjant formülü iki kenarı doğrudan karşılaştırır. Başka bir problemde gerekirse Pisagor teoremi onu iki kenardan hesaplar: [[c=\\sqrt{a^2+b^2}]]."
                },
                {
                    "kind": "p",
                    "text": "Tanjant iki kenarı kullanır ve hipotenüsü gerektirmez. Bu kenar-etiket kuralını tutarlı uygulayın: [[a]] açı [[A]]'nin karşısında, [[b]] açı [[A]]'nin komşusu ve [[c]] dik açının karşısındaki hipotenüstür; dik açı [[B]]'dedir."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "Sol altta A açısı olan dik üçgen: altın rengi karşı kenar a, mavi komşu kenar b, tan(A)=a/b",
                    "caption": "A açısı sol altta yer alır; tanjant, altın rengi karşı kenar a ile mavi komşu kenar b'yi kullanır, hipotenüs c'yi değil."
                }
            ]
        },
        "sec-whatis": {
            "h2": "Tanjant Oranını Anlama",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Dar açı [[A]]'nin tanjantı, karşı kenarın komşu kenara bölümüdür:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Burada [[\\tan(A)]], [[A]] açısının tanjantı demektir, [[a]] karşı kenar, [[b]] ise komşu kenardır. Üçgen, tabanı yatay doğrultuda duracak şekilde yerleştirildiğinde tanjant, düşey kenarı yatay kenarla karşılaştırır: en yalın hâliyle düşey yükselmenin yatay mesafeye oranı."
                },
                {
                    "kind": "h3",
                    "text": "SOH-CAH-TOA'yı Anlama"
                },
                {
                    "kind": "p",
                    "text": "Öğrenciler üç temel oranı tek bir ezber yardımcısıyla hatırlar:"
                },
                {
                    "kind": "p",
                    "text": "<strong>SOH:</strong> Sinüs = Karşı / Hipotenüs."
                },
                {
                    "kind": "p",
                    "text": "<strong>CAH:</strong> Kosinüs = Komşu / Hipotenüs."
                },
                {
                    "kind": "p",
                    "text": "<strong>TOA:</strong> Tanjant = Karşı / Komşu."
                },
                {
                    "kind": "p",
                    "text": "TOA, tanjant formülüne [[\\tan(A)=a/b]] karşılık gelir: <strong>T</strong> tanjantı, <strong>O</strong> karşı kenarı üste, <strong>A</strong> komşu kenarı alta koyar. Yardımcı, sayılara girmeden önce doğru pay ve paydayı seçmenizi sağlar. Bu bölüm tanjanta odaklanır; diğer iki oranın kendi sayfaları vardır."
                },
                {
                    "kind": "h3",
                    "text": "Tanjant Neden Hipotenüsü Kullanmaz"
                },
                {
                    "kind": "p",
                    "text": "Tanjant iki dik kenarı doğrudan karşılaştırır, bu yüzden hipotenüs gereksizdir. [[a=3]] ve [[b=4]] ile:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "Oran, karşı kenarın komşu kenarla nasıl karşılaştırıldığına dair her şeyi zaten yakalar; hipotenüsü katmak sorulan soruyu değiştirir. Hipotenüs başka bir problem için gerekirse Pisagor teoremi onu kenarlardan hesaplar. Tanjantın kendisi onu hiç istemez."
                },
                {
                    "kind": "h3",
                    "text": "Tanjant Neden Boyutsuz Bir Orandır"
                },
                {
                    "kind": "p",
                    "text": "Bir uzunluğu bir başka uzunluğa bölmek fiziksel birimleri sadeleştirir. Uyumlu birimlerle:"
                },
                {
                    "kind": "p",
                    "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "Metreler sadeleşir, geriye yalın bir sayı kalır. Aynı oran 300 cm ile 400 cm'den de gelir, çünkü birim değişimi iki kenarı da eşit etkiler. Tek şart, iki ölçümün de uyumlu birim kullanmasıdır: metre ile santimetreyi karıştırmak anlamsız bir sayı üretir, oysa önce çevirmek oranı dürüst tutar."
                },
                {
                    "kind": "h3",
                    "text": "0.75'lik Bir Tanjant Değeri Ne Anlama Gelir?"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=0.75]], karşı kenarın komşu kenarın 0.75 katı olduğu anlamına gelir; aynı doğru geometride her 100 birimlik yatay mesafede 75 birimlik düşey yükselme demektir. Yatayda her 100 cm'de 75 cm tırmanan bir çatıyı gözünüzde canlandırın: 0.75 tam olarak bunu anlatır. Bu, açının [[0.75^\\circ]] olduğu anlamına gelmez; oran ile açı farklı büyüklüklerdir ve bunları karıştırmak trigonometrideki en yaygın hatalardan biridir."
                },
                {
                    "kind": "h3",
                    "text": "1'lik Bir Tanjant Değeri Ne Anlama Gelir?"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=1]], [[a=b]] demektir: karşı ve komşu kenarlar eşittir. İkizkenar dik üçgenin iki kenarı eşittir ve iki dar açının 90 dereceyi eşit paylaşması gerektiği için her biri [[45^\\circ]]'dir:"
                },
                {
                    "kind": "p",
                    "text": "[[A=45^\\circ]]"
                },
                {
                    "kind": "p",
                    "text": "Eşit kenarlar, eşit dar açılar, tanjant tam 1. Bu, tanjant ölçeğinin denge noktasıdır: 1'in altında üçgen yüksekliğinden daha geniştir, 1'in üzerinde genişliğinden daha uzundur."
                },
                {
                    "kind": "h3",
                    "text": "Tanjant Neden 1'den Büyük Olabilir"
                },
                {
                    "kind": "p",
                    "text": "Sinüs ve kosinüsten farklı olarak tanjantın dar açılar için üst sınırı yoktur. Karşı kenar komşu kenarı geçerse oran sorunsuzca 1'i aşar. [[a=6]] ve [[b=3]] ile:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar, komşu kenarın iki katı uzunluktadır. 1'den büyük bir tanjant değeri matematiksel olarak geçerlidir ve hesaplayıcı hatasına işaret etmez; yalnızca dik bir üçgeni anlatır, tıpkı duvara yakın duran uzun bir merdiven gibi."
                },
                {
                    "kind": "h3",
                    "text": "Tanjantın Sinüs ve Kosinüsle İlişkisi"
                },
                {
                    "kind": "p",
                    "text": "Diğer iki oranla başlayın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\sin(A)=\\frac{a}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "Sinüsü kosinüse bölün, hipotenüs sadeleşir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "Dolayısıyla:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Bu özdeşlik, karşı bölü komşu tanımıyla uyuşur ve kullanışlı bir çapraz kontrol verir: her tanjant sonucu, aynı açı için sinüsün kosinüse bölümüne eşit olmalıdır."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "Üç aşama: 3-4-5 üçgeni, tanjant formülü tan(A)=a/b, sonuç 0.75, karşı kenar komşunun yüzde 75'i",
                    "caption": "Üç aşama: 3-4-5 üçgenini etiketleyin, tan(A) = a/b yazın, sonra 3'ü 4'e bölerek 0.75 elde edin."
                }
            ]
        },
        "sec-formula": {
            "h2": "Tanjant Formülü Nasıl Çalışır",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanımla başlayın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
                },
                {
                    "kind": "p",
                    "text": "Sonra bu sayfanın gösterimini kullanın:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar paya yazılır, çünkü tanjant açının karşısındaki kenarın ne kadar büyük olduğunu ölçer; komşu kenar paydaya yazılır, çünkü karşılaştırma yapılan kenar odur. Yerlerini değiştirirseniz kotanjant elde edersiniz, bu da bambaşka bir orandır."
                },
                {
                    "kind": "h3",
                    "text": "Tam Çözümlü Örnek: 3-4-5 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a=3\\,\\text{cm}]], komşu kenar [[b=4\\,\\text{cm}]] ve hipotenüs [[c=5\\,\\text{cm}]] verilsin:"
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 1:</strong> Formülü yazın. [[\\tan(A)=a/b]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 2:</strong> Bilinen değerleri yerine koyun. [[\\tan(A)=3/4]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 3:</strong> Bölün. [[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 4:</strong> Sonucu yorumlayın. Karşı kenar, komşu kenarın yüzde 75'i kadardır."
                },
                {
                    "kind": "p",
                    "text": "<strong>Adım 5:</strong> Üçgeni doğrulayın. [[3^2+4^2=5^2]], yani [[9+16=25]]. Kenar uzunlukları gerçek bir dik üçgenle tutarlıdır."
                },
                {
                    "kind": "h3",
                    "text": "Orandan Açıyı Bulma"
                },
                {
                    "kind": "p",
                    "text": "Açının kendisi gerekiyorsa orana ters tanjant uygulayın:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "Ters tanjanta arktanjant da denir. Tanjant oranını hesaplamak ile açıyı hesaplamak ayrı işlemlerdir: oran üçgenin biçimini anlatır, ters tanjant ise bu biçimi dereceye çevirir. Bu sayfadaki tanjant oranı hesaplayıcı oranı verir; açıyı geri kazanmak bilimsel hesaplayıcıda yapılacak bir sonraki adımdır."
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
            "h2": "Tanjant Oranı Hesaplayıcı Nasıl Kullanılır",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Aşağıdaki adım adım anlatım, bu sayfadaki canlı arayüzle birebir eşleşir. Her adım önemlidir, çünkü bir tanjant sonucu ancak arkasındaki iki ölçüm kadar güvenilirdir."
                }
            ],
            "steps": [
                "<strong>Referans açı [[A]]'yi belirleyin.</strong> Tanjant her zaman tek bir dar açıdan çalışır; önce onu adlandırmak hangi kenarın karşı, hangisinin komşu olduğunu sabitler.",
                "<strong>Karşı kenar [[a]]'yı bulun: [[A]] açısının tam karşısındadır.</strong> Bu, açının köşesine hiç değmeyen kenardır.",
                "<strong>Komşu kenar [[b]]'yi bulun: [[A]] açısına değer ve hipotenüs değildir.</strong> Yanlışlıkla eğik kenarı kaptığınızdan emin olmak için iki kez kontrol edin.",
                "<strong>İki kenar uzunluğunu da edinin ya da ölçün.</strong> Mezura, ölçekli çizim ya da bilinen bir ölçü hepsi olur; yeter ki sayılar aynı üçgeni anlatsın.",
                "<strong>Karşı kenar uzunluğunu ilk giriş alanına yazın.</strong> Bu, kesrin payıdır.",
                "<strong>Komşu kenar uzunluğunu ikinci giriş alanına yazın.</strong> Bu, kesrin paydasıdır.",
                "<strong>Birlikte kullanılabilen ölçü birimlerini, mevcut birim seçicilerle seçin.</strong> İki girdi de aynı birimde olmalı ya da bölmeden önce tek birime çevrilmelidir.",
                "<strong>İki ölçümün de pozitif olduğunu doğrulayın.</strong> Sıfır ya da negatif bir kenar gerçek bir üçgene ait olamaz.",
                "<strong>\"Hesapla tan(A)\" düğmesine tıklayın.</strong> Araç, karşı kenarı komşu kenara böler.",
                "<strong>Ortaya çıkan tanjant oranını okuyun.</strong> Cevap yalın bir sayıdır; ne derece ne de uzunluk birimi taşır.",
                "<strong>Sonucun 1'den küçük, 1'e eşit ya da 1'den büyük olduğunu kontrol edin.</strong> 1'in altı, üçgenin yüksekliğinden geniş olduğu anlamına gelir; tam 1, kenarların eşit olduğu; 1'in üstü, karşı kenarın daha uzun olduğu anlamına gelir.",
                "<strong>Girdileri temizleyip yeni bir hesaba başlamak istediğinizde Sıfırla'yı kullanın.</strong> Taze girdiler, önceki problemden kalan sayıları değil, taze bir başlangıcı hak eder."
            ],
            "closingParagraphs": [
                "Hesaplayıcı hipotenüs ya da açı girdisi istemez. Tek bir işlem yapar: [[a/b]] bölmesi; ve bunu yalnızca sizin belirlediğiniz iki kenar üzerinde yapar."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "Tanjant Hesaplamanın Adım Adım Örnekleri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Dört çözümlü örnek, uygulamalı örneklerden önce temel beceriyi kurar. Her biri aynı ritmi izler: formülü yaz, yerine koy, böl, yorumla."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 1: 3-4-5 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "[[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] ve [[c=5\\,\\text{cm}]] verilsin:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar, komşu kenarın yüzde 75'i kadardır. Karşı kenar burada kısa kenar olduğundan oran 1'in altında kalır; bu da yüksekliğinden geniş bir üçgeni anlatır."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 2: 5-12-13 Dik Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a=5\\,\\text{m}]], komşu kenar [[b=12\\,\\text{m}]] ve hipotenüs [[c=13\\,\\text{m}]] verilsin:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{5}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar, komşu kenarın yaklaşık yüzde 41.67'si kadardır. 5-12-13 üçlüsü de bir Pisagor üçlüsüdür, yani [[5^2+12^2=13^2]] gerçek bir dik üçgeni doğrular."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 3: 45-45-90 Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a=1\\,\\text{cm}]], komşu kenar [[b=1\\,\\text{cm}]] ve hipotenüs [[c=\\sqrt{2}\\,\\text{cm}]] verilsin:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
                },
                {
                    "kind": "p",
                    "text": "Eşit kenarlar tanjant oranını 1 yapar. Bu, tanjant ölçeğinin doğal orta noktasıdır ve ezberlemeye değer bir değerdir: iki kenar ne zaman eşleşirse dar açılar 45'er derece olur."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 4: 30-60-90 Üçgeni"
                },
                {
                    "kind": "p",
                    "text": "Referans açı [[A=60^\\circ]] için karşı kenar [[a=\\sqrt{3}\\,\\text{cm}]], komşu kenar [[b=1\\,\\text{cm}]] ve hipotenüs [[c=2\\,\\text{cm}]] kullanın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar komşu kenardan uzundur, bu yüzden oran 60 derecelik bir açı için olması gerektiği gibi 1'i aşar. Tümler açıyla karşılaştırın:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "Tümler dar açıların tanjant değerleri birbirinin tersidir, çünkü referans açıyı değiştirmek karşı ve komşu etiketlerini değiştirir. [[0.5774 \\times 1.7321 \\approx 1]]; bu, ters ilişkiyi doğrular."
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
            "h2": "Tanjant Oranının Gerçek Hayattan Örnekleri",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant, çalışma dünyasındaki yerini hak eder; çünkü pek çok gerçek problem, kılık değiştirmiş bir düşey yükselmenin yatay mesafeye oranı problemidir. On iki çözümlü örnek, bu örüntünün rampalarda, çatılarda, merdivenlerde ve ölçüm doğrularında nasıl tekrarlandığını gösterir."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 5: Rampanın Eğimini Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir rampa, 8 m'lik yatay mesafede 0.6 m yükselir. Düşey yükselme karşı kenardır, [[a=0.6\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=8\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.075}]]"
                },
                {
                    "kind": "p",
                    "text": "Yüzde eğim [[0.075 \\times 100\\%=7.5\\%]]'dir ve açı [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]'dir. Rampa, her 100 yatay birimde 7.5 birim düşey yükselir. Bu hesap, erişilebilirlik ya da yapı yönetmeliği uygunluğunu kanıtlamaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 6: Çatı Eğimini Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Bir çatı, 4 m'lik yatay mesafede 3 m yükselir. Düşey yükselme karşı kenardır, [[a=3\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=4\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Çatı, her yatay birimde 0.75 birim yükselir; yüzde 75 eğim demektir ve eğim açısı [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]'dir. Çatı eğimi, geleneksel birimlerle düşey yükselmenin yatay mesafeye oranı olarak da ifade edilir; örneğin 12 birimlik yatayda şu kadar birim yükselme gibi, bu farklı kıyafet giymiş aynı orandır. Bu oran, eksiksiz bir çatı tasarım değerlendirmesi oluşturmaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 7: Merdivenin Açısını Bulma"
                },
                {
                    "kind": "p",
                    "text": "Bir merdiven duvarda 4 m yukarı ulaşır ve tabanı duvardan yatayda 3 m uzaktadır. [[A]] açısı, merdiven ile zemin arasındadır. Düşey yükseklik karşı kenardır, [[a=4\\,\\text{m}]]; zemin mesafesi ise komşu kenardır, [[b=3\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{4}{3}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Açı [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]'dir. Düşey yükseklik yatay mesafeden büyüktür; bu yüzden oran 1'i aşar. Örnek geometriyi açıklar; merdivenin güvenli konumlanıp konumlanmadığını kanıtlamaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 8: Ağaca Yükselme Açısını Tahmin Etme"
                },
                {
                    "kind": "p",
                    "text": "Bir ağaç 12 m boyundadır ve düz zeminde gölgesi 9 m'dir. Güneş ışınlarının basitleştirilmiş bir dik üçgen modeli oluşturduğunu varsayın. Ağaç boyu karşı kenardır, [[a=12\\,\\text{m}]]; gölge uzunluğu ise komşu kenardır, [[b=9\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Yükseklik, gölge uzunluğunun yaklaşık 1.3333 katıdır ve karşılık gelen geometrik açı yaklaşık [[53.13^\\circ]]'dir. Örnek, düz zemin, dikey ağaç ve doğrusal bir gölge modeli varsayar."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 9: Yükselti Farkını Ölçme"
                },
                {
                    "kind": "p",
                    "text": "Bir arazi ölçümü, 20 m'lik yatay mesafede 15 m'lik düşey yükselti farkı gösterir. Yükselti farkı karşı kenardır, [[a=15\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=20\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{15}{20}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Yükselti farkı, yatay ayrımın 0.75 katıdır ve karşılık gelen açı yaklaşık [[36.87^\\circ]]'dir. Gerçek arazi ölçümü, bu basitleştirilmiş modelin ötesinde alet yüksekliği ayarlamaları, düzeltmeler ve ek ölçümler gerektirebilir."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 10: Yolun Yüzde Eğimini Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir yol kesimi, 24 m'lik yatay mesafede 1.2 m yükselir. Düşey yükselme karşı kenardır, [[a=1.2\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.05}]]"
                },
                {
                    "kind": "p",
                    "text": "Yüzde eğim [[0.05 \\times 100\\%=5\\%]]'dir ve açı [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]'dir. Yüzde 5 eğim, 5 derecelik açı demek değildir; bu ayrım yaygın bir karışıklık kaynağıdır ve iki sayı asla birbirinin yerine kullanılmamalıdır."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 11: Basamaklı Merdivenin Dikliğini Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir merdivenin toplam düşey yükselmesi 2.4 m, yatay açıklığı 3.2 m'dir. Düşey yükselme karşı kenardır, [[a=2.4\\,\\text{m}]]; yatay açıklık ise komşu kenardır, [[b=3.2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Düşey yükselme, yatay açıklığın yüzde 75'idir ve açı yaklaşık [[36.87^\\circ]]'dir. Hesap, merdiven ölçülerini, konforu ya da yapı yönetmeliği uygunluğunu doğrulamaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 12: Gergi Telinin Açısını Anlama"
                },
                {
                    "kind": "p",
                    "text": "Bir gergi teli direğe yerden 12 m yukarıda bağlanır; yer ankrajı ise direkten yatayda 5 m uzaktadır. Bağlantı yüksekliği karşı kenardır, [[a=12\\,\\text{m}]]; zemin mesafesi ise komşu kenardır, [[b=5\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{5}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "Açı [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]'dir. Düşey yükseklik, yatay ankraj mesafesinin 2.4 katıdır; her ölçüye göre dik bir teldir. Tanjant oranı, tel gerilimini, ankraj dayanımını ya da yapısal güvenliği belirlemez."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 13: Vinç Kolunun Yönünü Hesaplama"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş bir vinç kolunun düşey bileşeni 8 m, yatay izdüşümü 6 m'dir. Düşey bileşen karşı kenardır, [[a=8\\,\\text{m}]]; yatay izdüşüm ise komşu kenardır, [[b=6\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{8}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "Karşılık gelen açı yaklaşık [[53.13^\\circ]]'dir. Düşey bileşen, yatay izdüşümün yaklaşık 1.3333 katıdır. Bu basitleştirilmiş bir geometri örneğidir; vinç kapasitesini ya da çalışma güvenliğini kanıtlamaz."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 14: Yürüyüş Parkurunun Eğimini Tahmin Etme"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş düz bir yürüyüş kesimi, 800 m'lik yatay mesafede 120 m'lik düşey yükselti kazanımına sahiptir. Yükselti kazanımı karşı kenardır, [[a=120\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=800\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{120}{800}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.15}]]"
                },
                {
                    "kind": "p",
                    "text": "Yüzde eğim yüzde 15'tir ve karşılık gelen açı yaklaşık [[8.53^\\circ]]'dir. Bu basitleştirilmiş model, kıvrımlı bir yürüyüş parkurunun tamamını değil, sabit bir doğrusal eğimi temsil eder."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 15: Mekanik Payandayı Değerlendirme"
                },
                {
                    "kind": "p",
                    "text": "Çapraz bir mekanik payandanın düşey bileşeni 1.5 m, yatay bileşeni 2 m'dir. Düşey bileşen karşı kenardır, [[a=1.5\\,\\text{m}]]; yatay bileşen ise komşu kenardır, [[b=2\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Düşey bileşen, yatay bileşenin yüzde 75'idir. Oran, payandanın dayanımını, yük kapasitesini ya da uygunluğunu belirlemez."
                },
                {
                    "kind": "h3",
                    "text": "Örnek 16: Binaya Yükselme Açısını Bulma"
                },
                {
                    "kind": "p",
                    "text": "Bir gözlemci binadan yatayda 24 m uzakta duruyor. Binanın tepesi, gözlemcinin göz hizasından 18 m yukarıda. Düşey fark karşı kenardır, [[a=18\\,\\text{m}]]; yatay mesafe ise komşu kenardır, [[b=24\\,\\text{m}]]:"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{18}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "Basitleştirilmiş geometride yükselme açısı yaklaşık [[36.87^\\circ]]'dir. Bu, gözlemcinin yatay göz hizasına göre tepeye olan açıdır; binanın toplam yüksekliği olması şart değildir."
                },
                {
                    "kind": "p",
                    "text": "Tanjant boyutsuz bir orandır, ancak pratik değeri düşey yükselmeyi yatay mesafeyle karşılaştırmasından, düz bir eğimin dikliğini anlatmasından, yükselme açılarını hesaplamasından ve açı bilindiğinde eksik kenarları çözmesinden gelir. Kolayca karıştırılan üç ilgili büyüklük vardır; onları doğru tutun: <strong>tanjant oranı</strong>, düşey yükselmenin yatay mesafeye bölümüdür; <strong>yüzde eğim</strong>, tanjant oranının yüzde 100 ile çarpımıdır; <strong>açı</strong> ise orana ters tanjant uygulamanın sonucudur. Tanjant tek başına yapısal güvenliği, yük kapasitesini, erişilebilirliği ya da mühendislik uygunluğunu asla belirlemez."
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
                        "Karşı [[a]]",
                        "Komşu [[b]]",
                        "Formül",
                        "Oran",
                        "Eğim",
                        "Anlam"
                    ],
                    "rows": [
                        ["Rampa", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Yumuşak eğim, 100 yatayda 7.5 yükselir"],
                        ["Çatı eğimi", "3 m", "4 m", "3/4", "0.75", "75%", "Yükselme, yatay mesafenin %75'i"],
                        ["Merdiven", "4 m", "3 m", "4/3", "1.3333", "yok", "Yükseklik taban mesafesini aşar, açı 53.13 derece"],
                        ["Ağaç yüksekliği", "12 m", "9 m", "12/9", "1.3333", "yok", "Yükseklik, gölge uzunluğunun 1.3333 katıdır"],
                        ["Arazi ölçümü", "15 m", "20 m", "15/20", "0.75", "75%", "Yükselti, yatay mesafenin %75'i"],
                        ["Yol eğimi", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "%5 eğim, 5 derecelik açı değil"],
                        ["Basamaklı merdiven", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Yükselme, yatay mesafenin %75'i"],
                        ["Gergi teli", "12 m", "5 m", "12/5", "2.4", "yok", "Dik tel, açı 67.38 derece"],
                        ["Vinç kolu", "8 m", "6 m", "8/6", "1.3333", "yok", "Düşey, yatayın 1.3333 katıdır"],
                        ["Yürüyüş parkuru", "120 m", "800 m", "120/800", "0.15", "15%", "Sabit %15 eğim"],
                        ["Mekanik payanda", "1.5 m", "2 m", "1.5/2", "0.75", "yok", "Düşey, yatayın %75'i"],
                        ["Bina yüksekliği", "18 m", "24 m", "18/24", "0.75", "yok", "Yükselme açısı 36.87 derece"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "Dört panel: rampa 0.075, çatı eğimi 0.75, merdiven 1.3333, ölçüm 0.75, her biri etiketli üçgenle",
                    "caption": "Dört uygulamalı hesap: rampa, çatı eğimi, merdiven ve ölçüm; her birinde üçgeni, formülü ve oranı var."
                }
            ]
        },
        "sec-angle": {
            "h2": "Tanjant ile Açı Büyüklüğü Arasındaki İlişkiyi Anlama",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant, referans açı büyüdükçe büyür ve geometri nedenini açıklar. [[A]] açısı küçükken karşı kenar komşu kenara göre kısadır, bu yüzden oran 0'a yakın durur. Açı genişledikçe karşı kenar, komşu kenarın daha uzun bir payı hâline gelir ve oran tırmanır: [[45^\\circ]]'de 1'i geçer, sonra açı [[90^\\circ]]'ye yaklaştıkça sınırsız büyür. Aşağıdaki tablo örneksel kenar uzunlukları kullanır; açıyı belirleyen üçgenin mutlak büyüklüğü değil orandır."
                },
                {
                    "kind": "p",
                    "text": "Örüntü basittir: karşı kenar komşu kenara göre kısayken tanjant küçüktür, [[45^\\circ]]'de 1'e eşittir, daha büyük dar açılar için 1'i aşar, açı [[0^\\circ]]'ye yaklaştıkça sıfıra yaklaşır ve açı [[90^\\circ]]'ye yaklaştıkça sınırsız büyür. Aynı açıya sahip üçgenler, kenar uzunlukları farklı olsa bile aynı tanjant oranına sahiptir; çünkü oran büyüklüğü değil biçimi yakalar."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": [
                        "A açısı [[A]]",
                        "Karşı kenar [[a]]",
                        "Komşu kenar [[b]]",
                        "Tanjant oranı"
                    ],
                    "rows": [
                        ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Yaklaşık 0.5774"],
                        ["[[45^\\circ]]", "1", "1", "1"],
                        ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Yaklaşık 1.7321"],
                        ["[[75^\\circ]]", "Yaklaşık 3.7321", "1", "Yaklaşık 3.7321"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "30, 45, 60 derecede üç üçgen; tanjant değerleri 0.5774, 1, 1.7321; açıyla tanjant yükselir",
                    "caption": "A açısı büyüdükçe karşı kenar, komşu kenarın daha uzun bir payı hâline gelir; bu yüzden tan(A) yükselir."
                }
            ]
        },
        "sec-side": {
            "h2": "Tanjant Kullanarak Karşı Kenar Nasıl Bulunur",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant formülü, komşu kenar ve açı bilindiğinde karşı kenarı bulacak şekilde yeniden düzenlenebilir. [[\\tan(A)=a/b]] ile başlayın ve iki yanı da [[b]] ile çarpın:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{a=b\\tan(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar, komşu kenarın açının tanjantıyla çarpımına eşittir. Komşu kenar [[b=10\\,\\text{m}]] ve açı [[A=30^\\circ]] verilsin; [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]] olduğunu biliyoruz:"
                },
                {
                    "kind": "p",
                    "text": "[[a=10\\times0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "Bu açıda 10 m'lik yatay mesafe için düşey yükselme yaklaşık 5.774 m'dir."
                },
                {
                    "kind": "p",
                    "text": "Komşu kenar da formülü yeniden düzenleyerek aynı şekilde bulunabilir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenar [[a=6\\,\\text{m}]] ve [[A=45^\\circ]] ile: [[\\tan(45^\\circ)=1]] olduğundan [[b=6/1]] olur; yani [[\\boxed{b=6\\,\\text{m}}]]. Bunlar aynı formülün matematiksel yeniden düzenlemeleridir. Bu sayfadaki hesaplayıcı, kenar uzunluklarından tanjant oranını verir; eksik kenarları doğrudan hesaplamaz."
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
            "h2": "Tanjant Oranından Açı Nasıl Bulunur",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant oranı ile açı farklı büyüklüklerdir: biri kenarların boyutsuz bir karşılaştırması, diğeri dereceyle ölçülür. Oran biliniyor ve açı gerekiyorsa ters tanjant kullanılabilir:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "Ters tanjanta arktanjant da denir. [[\\tan(A)=0.75]] verilsin:"
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "Hesaplayıcı dereceye ayarlıyken açı yaklaşık [[36.87^\\circ]]'dir."
                },
                {
                    "kind": "h3",
                    "text": "Hesaplayıcının Açı Modu Neden Önemlidir"
                },
                {
                    "kind": "p",
                    "text": "Açılar derece ya da radyanla ölçülebilir ve ters tanjant uygulanmadan önce bilimsel hesaplayıcı hedeflenen moda ayarlanmalıdır. Tam daire 360 derece ya da [[2\\pi]] radyandır; yani [[45^\\circ=\\pi/4]] radyandır. Tanjant oranının kendisinin ne derece ne de radyan birimi vardır; bu birimler, orandan geri kazanılan açıya uygulanır. Bu sayfadaki tanjant oranı hesaplayıcı oranı doğrudan verir, açı vermez."
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
            "h2": "Tanjant Hesaplarken Yapılan Yaygın Hatalar",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant hatalarının çoğu, çevrilmiş bir kesirden, yanlış etiketlenmiş bir kenardan ya da oranın açıyla karıştırılmasından gelir. Sonuca güvenmeden önce bu listeyi gözden geçirin."
                }
            ],
            "steps": [
                "<strong>Formülü ters çevirip [[a/b]] yerine [[b/a]] hesaplama.</strong> Bu, tanjant değil kotanjant verir. [[a=3]] ve [[b=4]] ile ters çevrilmiş kesir 1.3333 verir; doğru olan 0.75 verir.",
                "<strong>Tanjantı sinüsle karıştırma.</strong> Tanjant karşı kenarı komşu kenara böler; sinüs karşı kenarı hipotenüse böler. Paydada hipotenüs varsa cevap tanjant değil sinüstür.",
                "<strong>Tanjantı kosinüsle karıştırma.</strong> Kosinüs komşu kenarı hipotenüse böler. Tanjant hipotenüsü hiç kullanmaz; bu yüzden iki konumdan birinde hipotenüs görünmesi yanlış oranın sinyalidir.",
                "<strong>Tanjantı kotanjantla karıştırma.</strong> Kotanjant tersidir: komşu bölü karşı. Benzer adlar gerçek hatalara yol açar ama kesir sırası tam tersinedir.",
                "<strong>Temel tanjant formülüne hipotenüsü katma.</strong> Hipotenüsün [[a/b]]'de rolü yoktur. Hesapta görünüyorsa yanlış formül kullanılmış demektir.",
                "<strong>Karşı ve komşu kenarları karıştırma.</strong> İkisi de kenar olduğundan etiketleri yer değiştirmek kolaydır. Her zaman referans açıdan izleyin: karşısındaki karşıdır, değdiği komşudur.",
                "<strong>Kenarları yanlış referans açıya göre belirleme.</strong> [[A]] açısından [[C]] açısına geçmek, karşı ve komşu etiketlerini değiştirir; bu da oranı tersine çevirir.",
                "<strong>Tanjantın 1'den küçük olması gerektiğini varsayma.</strong> Bu kural sinüs ve kosinüse aittir. Dar açılar için tanjantın üst sınırı yoktur ve 1'in üzerinde bir sonuç gayet geçerlidir.",
                "<strong>Tanjant oranını derece cinsinden bir açı olarak bildirme.</strong> 0.75 sonucu bir orandır, [[0.75^\\circ]] değildir. Onu derece gibi değerlendirmek, sonraki her hesaba saçmalık katar.",
                "<strong>Tanjant oranını ölçü birimiyle bildirme.</strong> Birimler bölmede sadeleşir, bu yüzden \"0.75 m\" yanlıştır. Yalın sayıyı yazın; birimleri ait oldukları yerde, girdi ölçümlerinde tutun.",
                "<strong>Sıfır ya da negatif kenar uzunlukları girme.</strong> Üçgenin sıfır ya da negatif kenarı olamaz; bu girdiler geçerli bir uç durum değil, veri giriş hatası ya da eksik ölçüm sinyali verir.",
                "<strong>Uyumsuz ölçü birimlerini karıştırma.</strong> 3 m karşı kenar ile 40 cm komşu kenar 7.5 verir, anlamsız bir sayı. Önce tek birime çevirin: 3 m ve 4 m doğru 0.75'i verir.",
                "<strong>Çok erken yuvarlama.</strong> Ara bir bölmeyi iki ondalığa yuvarlayıp hesaba devam etmek hatayı katmerler. Her adımda tam duyarlılığı koruyun, yalnızca nihai cevabı yuvarlayın.",
                "<strong>Yüzde eğimi derece cinsinden açıyla karıştırma.</strong> Yüzde 5 eğim 0.05 tanjanttan gelir, ancak açı [[\\tan^{-1}(0.05)\\approx2.86^\\circ]]'dir, 5 derece değil. Eğim ile açı farklı büyüklüklerdir.",
                "<strong>Tanjant oranının üçgenin mutlak boyutunu belirlediğini varsayma.</strong> Tanjant biçimi anlatır, büyüklüğü değil: 3 cm karşı kenarliden 3 km karşı kenarliye, sayısız üçgen 0.75 tanjantını paylaşır. Oran oranları sabitler; gerçek uzunluklar için en az bir kenar ölçümü gerekir."
            ],
            "closingParagraphs": [
                "<strong>Yanlış ile Doğru: Çözümlü Bir Karşılaştırma</strong> Karşı kenarı [[a=3]] ve komşu kenarı [[b=4]] alın:",
                "<strong>Yanlış:</strong> [[4/3\\approx1.3333]]. Bu, [[A]] açısı için kotanjant oranıdır, tanjant oranı değil. Pay ile payda ters çevrilmiş.",
                "<strong>Doğru:</strong> [[\\tan(A)=3/4=0.75]].",
                "<strong>Sinüs ve kosinüsle doğrulayın:</strong> [[c=5]] ile [[\\sin(A)=3/5=0.6]] ve [[\\cos(A)=4/5=0.8]]. Dolayısıyla [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]]; bu, tanjant hesabını doğrular."
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "Tanjant Sonucunuzun Geçerli Olup Olmadığı Nasıl Kontrol Edilir",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Geçerli, yozlaşmamış bir dik üçgen iki pozitif kenar gerektirir: [[a \\gt 0]] ve [[b \\gt 0]]; ölçümler uyumlu birimlerde olmalı, bu yüzden tanjant sonucu pozitif çıkmalıdır:"
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
                },
                {
                    "kind": "p",
                    "text": "Karşı kenarın komşu kenardan kısa olması şart değildir; bu yüzden sonuç 1'in altında, 1'de ya da 1'in üstünde olabilir. Sıfır ya da negatif bir sonuç genellikle geçersiz girdilere ya da ters çevrilmiş etiketlere işaret eder."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 1: Oranı Kontrol Edin"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=a/b]]'yi doğrudan yeniden doğrulayın. [[a=3]] ve [[b=4]] ile: [[\\tan(A)=3/4=0.75]]. Karşı kenar komşu kenardan kısa olduğundan oran 1'in altında kalmalıdır; ikinci bir el hesabı farklı çıkarsa bir kenar yanlış etiketlenmiş ya da bir birim karışmış demektir."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 2: Pisagor Teoremini Kontrol Edin"
                },
                {
                    "kind": "p",
                    "text": "Gerektiğinde hipotenüsü hesaplayın: [[c=\\sqrt{a^2+b^2}]]. [[a=3]] ve [[b=4]] için: [[c=\\sqrt{9+16}=5]] ve [[3^2+4^2=5^2]]. Bu, 3-4-5 dik üçgeninin ölçülerini doğrular. Hipotenüs burada bir doğrulama değeridir, temel tanjant formülünün parçası değildir."
                },
                {
                    "kind": "h3",
                    "text": "Yöntem 3: Ters Tanjantla Kontrol Edin"
                },
                {
                    "kind": "p",
                    "text": "0.75'lik bir tanjant oranı için: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Oran 1'in altında kaldığından açı [[45^\\circ]]'nin altında çıkmalıdır; çıkmazsa kenar etiketleri büyük olasılıkla yer değiştirmiştir. Yuvarlamadan küçük farklar doğabilir."
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
            "h2": "Tanjant ile Sinüs, Kosinüs ve Kotanjant",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Her oran, aynı referans açıyı ve kenar etiketlerini kullanarak farklı bir kenar çiftini karşılaştırır:"
                },
                {
                    "kind": "p",
                    "text": "Tanjant ile kotanjant karşılıklı çifttir: [[\\cot(A)=1/\\tan(A)]]. [[\\tan(A)=0.75]] ise [[\\cot(A)\\approx1.3333]] olur. İki kenar da biliniyorsa ya da problem düşey yükselmenin yatay mesafeye oranını içeriyorsa tanjanta uzanın; hipotenüs işe girdiğinde sinüs ya da kosinüse, karşılaştırma ters yönden yapıldığında kotanjanta uzanın. Tanjantı merkezde tutun: komşu oranların kendi sayfalarında tam anlatımları vardır."
                },
                {
                    "kind": "p",
                    "text": "Komşu oranlar için <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Kosinüs Oranı Hesaplayıcı</a>'ya, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotanjant Oranı Hesaplayıcı</a>'ya, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekant Oranı Hesaplayıcı</a>'ya ve <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Kosekant Oranı Hesaplayıcı</a>'ya bakın."
                }
            ],
            "steps": [],
            "closingParagraphs": [],
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
                        ["Sinüs", "sin(A) = a/c", "Karşı kenar ile hipotenüs"],
                        ["Kosinüs", "cos(A) = b/c", "Komşu kenar ile hipotenüs"],
                        ["Tanjant", "tan(A) = a/b", "Karşı kenar ile komşu kenar"],
                        ["Kosekant", "csc(A) = c/a", "Hipotenüs ile karşı kenar"],
                        ["Sekant", "sec(A) = c/b", "Hipotenüs ile komşu kenar"],
                        ["Kotanjant", "cot(A) = b/a", "Komşu kenar ile karşı kenar"]
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
                    "name": "Sinüs Oranı Hesaplayıcı",
                    "desc": "İki kenar uzunluğundan sinüs oranını (karşı kenar bölü hipotenüs) hesaplayın."
                },
                {
                    "name": "Kosinüs Oranı Hesaplayıcı",
                    "desc": "İki kenar uzunluğundan kosinüs oranını (komşu kenar bölü hipotenüs) hesaplayın."
                },
                {
                    "name": "Kotanjant Oranı Hesaplayıcı",
                    "desc": "İki kenar uzunluğundan kotanjant oranını (komşu kenar bölü karşı kenar) hesaplayın."
                },
                {
                    "name": "Sekant Oranı Hesaplayıcı",
                    "desc": "İki kenar uzunluğundan sekant oranını (hipotenüs bölü komşu kenar) hesaplayın."
                },
                {
                    "name": "Kosekant Oranı Hesaplayıcı",
                    "desc": "İki kenar uzunluğundan kosekant oranını (hipotenüs bölü karşı kenar) hesaplayın."
                },
                {
                    "name": "Dik Üçgen Açı Hesaplayıcı",
                    "desc": "Bilinen kenarlardan bir dik üçgenin eksik dar açısını bulun."
                },
                {
                    "name": "Dik Üçgen Kenar Hesaplayıcı",
                    "desc": "Bilinen kenar ve açılardan bir dik üçgenin eksik kenar uzunluğunu bulun."
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "Tanjant Oranını Güvenle Kullanın",
            "blocks": [
                {
                    "kind": "p",
                    "text": "Tanjant, iki kenarın oranıdır: karşı kenarı komşu kenara bölün; her yatay birimle gelen düşey yükselme birimini anlatmış olursunuz. [[\\tan(A)=a/b]] formülü yalnızca iki ölçüm ister, cevap her zaman 1'in altında, 1'de ya da 1'in üstünde durabilen boyutsuz bir sayıdır ve referans açı büyüdükçe büyür. Eksik bir kenar gerektiğinde [[a=b\\tan(A)]] karşı kenarı geri kazandırır; açı gerektiğinde [[A=\\tan^{-1}(a/b)]] onu geri kazandırır. Rampa, çatı, merdiven ya da ders kitabı 3-4-5'i olsun, yöntem hiç değişmez: karşı kenarı belirleyin, komşu kenarı belirleyin, bölün ve pozitif-oran kontrolüyle doğrulayın."
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
            "question": "Bir dik üçgende tanjant oranı formülü nedir?",
            "answer": "tan(A) = a / b: karşı kenar a'yı komşu kenar b'ye bölün. Karşı kenar 3 cm, komşu kenar 4 cm olduğunda sonuç 3/4 = 0.75 olur. Bu ondalık sayı tam cevaptır; boyutsuz bir orandır, bir açı değildir."
        },
        {
            "question": "İki kenar uzunluğundan tanjant nasıl hesaplanır?",
            "answer": "Referans açı A'yı belirleyin, karşı kenar a ile komşu kenar b'yi aynı birimde ölçün, ikisinin de pozitif olduğunu doğrulayın, sonra bölün: tan(A) = a / b. Bu sayfada karşı kenarı ilk alana, komşu kenarı ikinci alana yazın, sonra \"Hesapla tan(A)\" düğmesine tıklayın."
        },
        {
            "question": "Tanjant neden hipotenüsü kullanmaz?",
            "answer": "Tanjant iki dik kenarı doğrudan karşılaştırır: düşeyi yatayla. Hipotenüs bu karşılaştırmaya yeni bilgi katmaz; bu yüzden temel formül yalnızca karşı ve komşu kenarları ister. Başka bir hesap hipotenüsü isterse Pisagor teoremi onu daha sonra geri kazandırır."
        },
        {
            "question": "Tanjant 1'den büyük olabilir mi?",
            "answer": "Evet. Dar açılar için tanjantın üst sınırı yoktur. Karşı kenar komşu kenardan uzunsa oran 1'i aşar: a = 6 ve b = 3 ile tan(A) = 6/3 = 2. 1'in üzerinde bir sonuç matematiksel olarak geçerlidir ve hesaplayıcı hatasına işaret etmez."
        },
        {
            "question": "0.75'lik bir tanjant değeri ne anlama gelir?",
            "answer": "Karşı kenar, komşu kenarın yüzde 75'idir. 3-4-5 üçgeninde A açısının karşısındaki kenar 3 birim, A açısının yanındaki kenar 4 birimdir; yani tan(A) = 3/4 = 0.75. Bu üçgenin biçimini anlatır; 0.75 derecelik bir açı değildir."
        },
        {
            "question": "Tanjant ile kotanjant arasındaki fark nedir?",
            "answer": "Birbirinin tersidir. Tanjant karşı kenarı komşu kenara böler (a/b); kotanjant komşu kenarı karşı kenara böler (b/a). tan(A) = 0.75 ise cot(A) = 1/0.75, yaklaşık 1.3333 olur. Kesir sırası tam tersinedir."
        },
        {
            "question": "Tanjant oranından açı nasıl hesaplanır?",
            "answer": "Orana ters tanjant uygulayın: A = tan^-1(a/b). tan(A) = 0.75 için A = tan^-1(0.75), yaklaşık 36.87 derecedir. Önce bilimsel hesaplayıcınızı derece moduna alın. Bu sayfanın hesaplayıcısı oranı verir, açıyı değil."
        },
        {
            "question": "Tanjant kullanarak karşı kenar nasıl bulunur?",
            "answer": "Formülü a = b * tan(A) olacak şekilde yeniden düzenleyin. Komşu kenar 10 m ve A açısı 30 derece ise tan(30 derece) yaklaşık 0.5774'tür; yani a = 10 * 0.5774, yaklaşık 5.774 m. Bu elle yapılan bir yeniden düzenlemedir; bu sayfanın hesaplayıcısı kenar uzunluklarından oranı verir, eksik kenarları değil."
        },
        {
            "question": "Tanjant kullanarak komşu kenar nasıl bulunur?",
            "answer": "Formülü b = a / tan(A) olacak şekilde yeniden düzenleyin. Karşı kenar 6 m ve A açısı 45 derece ise tan(45 derece) = 1; yani b = 6/1 = 6 m. Bu, aynı formülün matematiksel bir yeniden düzenlemesidir; bu sayfanın hesaplayıcısının ayrı bir modu değildir."
        },
        {
            "question": "Tanjant, eğimle aynı şey midir?",
            "answer": "Yakından ilişkilidir. Düşey yükselmenin yatay mesafeye oranı olarak eğim, tanjantın yaptığı karşılaştırmanın aynısıdır: düşey değişimin yatay değişime bölümü. Eğimi 0.05 yazan bir yol mühendisi ile tan(A) = 0.05 yazan bir trigonometri öğrencisi aynı oranı anlatır. Terimler bağlama göre farklılaşır, matematiğe göre değil."
        },
        {
            "question": "Yüzde eğim ile derece cinsinden açı arasındaki fark nedir?",
            "answer": "Yüzde eğim, tanjant oranının 100 katıdır: 0.05'lik bir tanjant yüzde 5 eğim verir. Açı, oranın ters tanjantıdır: tan^-1(0.05) yaklaşık 2.86 derecedir. Dolayısıyla yüzde 5 eğim, 5 derecelik açı değildir. İkisini karıştırmak en yaygın tanjant hatalarından biridir."
        },
        {
            "question": "Tanjant inşaatta ve arazi ölçümünde nasıl kullanılır?",
            "answer": "Tanjant, düşey yükselmeyi yatay mesafeyle karşılaştırır; çatı eğimi, rampa eğimi, yol eğimi ve merdiven dikliğinin tam olarak anlattığı şey budur. Arazi ölçümcüleri, bir yükselti farkı ile yatay mesafeyi yükselme açısına çevirmek için onu kullanır. Her durumda oranın kendisi yapısal güvenliği ya da yönetmelik uygunluğunu asla kanıtlamaz."
        }
    ],
    "faqHeading": "Sık Sorulan Sorular",
    "relatedHeading": "İlgili Trigonometrik Hesaplayıcıları Keşfedin"
},
"sv": {
"tocHeading": "I den här guiden",
"tocItems": {
    "sec-intro": "Vad är en tangenskvotsräknare?",
    "sec-triangle": "Förstå den motstående kateten och den närliggande kateten",
    "sec-whatis": "Förstå tangenskvoten",
    "sec-formula": "Hur tangensformeln fungerar",
    "sec-howto": "Så använder du tangenskvotsräknaren",
    "sec-examples": "Stegvisa exempel på beräkning av tangens",
    "sec-applications": "Verkliga exempel på användning av tangenskvoten",
    "sec-angle": "Förstå sambandet mellan tangens och vinkelstorlek",
    "sec-side": "Så hittar du den motstående kateten med tangens",
    "sec-recover": "Så hittar du en vinkel från en tangenskvot",
    "sec-mistakes": "Vanliga misstag vid beräkning av tangens",
    "sec-verify": "Så kontrollerar du om ditt tangensresultat är giltigt",
    "sec-vs": "Tangens jämfört med sinus, cosinus och kotangens",
    "sec-related": "Utforska relaterade trigonometriska räknare",
    "sec-faq": "Vanliga frågor"
},
"sections": {
    "sec-intro": {
        "h2": "Vad är en tangenskvotsräknare?",
        "blocks": [
            {
                "kind": "p",
                "text": "En tangenskvotsräknare besvarar en fråga: för en spetsig vinkel i en rätvinklig triangel, hur förhåller sig kateten tvärs över vinkeln till kateten vid den? Mata in den motstående kateten och den närliggande kateten, så delar verktyget den motstående kateten med den närliggande kateten och returnerar [[\\tan(A)=a/b]]. En rätvinklig triangel har en motstående katet på 3 cm och en närliggande katet på 4 cm, alltså [[\\tan(A)=3/4=0.75]]. Talet 0.75 är tangenskvoten: det talar om att den motstående kateten är 75 procent så lång som den närliggande kateten. Det är inte en vinkel, så läs det aldrig som [[0.75^\\circ]]. Hypotenusan ingår aldrig i denna beräkning; den motstående kateten och den närliggande kateten räcker på egen hand. Tangens är en av de grundläggande trigonometriska kvoterna, och dess särskilda styrka är att jämföra vertikal stigning med horisontell sträcka, vilket är varför den dyker upp i taklutningar, väglutor och ramplutningar. Resultatet är ett dimensionslöst tal: en ren jämförelse av två längder, inte ett mått i centimeter eller grader. Om det är vinkeln i grader du behöver omvandlar arctangens kvoten till grader."
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
        "h2": "Förstå den motstående kateten och den närliggande kateten",
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
                "text": "Vad är den motstående kateten?"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten [[a]] är den katet som ligger direkt mitt emot referensvinkeln [[A]], den enda katet som aldrig vidrör dess spets. I praktiska problem spelar den ofta rollen som en vertikal stigning, en höjdskillnad eller en höjd: vägghöjden en stege når, ett taks stigning eller den vertikala komponenten av en krankom. Vilken katet som räknas som motstående beror på den valda referensvinkeln, så ett byte från vinkel [[A]] till vinkel [[C]] kastar om etiketterna motstående och närliggande. Den hamnar i täljaren i tangensformeln, eftersom tangens mäter hur stor kateten tvärs över vinkeln är i förhållande till kateten vid vinkeln."
            },
            {
                "kind": "h3",
                "text": "Vad är den närliggande kateten?"
            },
            {
                "kind": "p",
                "text": "Den närliggande kateten [[b]] är det ben som vidrör referensvinkeln [[A]] utan att vara hypotenusan. I praktiska problem spelar den ofta rollen som en horisontell sträcka eller ett markavstånd: stegens bas från en vägg, ett taks horisontella sträcka eller skugglängden i ett solvinkelproblem. Den är aldrig hypotenusan, en punkt värd att kontrollera varje gång, eftersom hypotenusan är den sida som ligger mitt emot den räta vinkeln. Den hamnar i nämnaren i tangensformeln, vilket är varför tangens jämför den motstående kateten med detta ben snarare än med den längsta sidan."
            },
            {
                "kind": "h3",
                "text": "Vad är hypotenusan?"
            },
            {
                "kind": "p",
                "text": "Hypotenusan [[c]] är den sida som ligger mitt emot den räta vinkeln: i varje figur står den mitt emot den lilla kvadraten som markerar hörnet [[90^\\circ]], och den är strängt längre än vartdera benet. I praktiska problem spelar den ofta rollen som en lutande längd: en stege, en taksparre, en stagkabel eller ett diagonalt stag. Den behövs inte för den grundläggande tangensberäkningen, eftersom tangensformeln jämför de två benen direkt. Om den krävs för en annan uppgift beräknar Pythagoras sats den från de två benen: [[c=\\sqrt{a^2+b^2}]]."
            },
            {
                "kind": "p",
                "text": "Tangens använder de två benen och kräver inte hypotenusan. Håll denna sidetikettskonvention konsekvent: [[a]] motstående vinkel [[A]], [[b]] närliggande vinkel [[A]], och [[c]] hypotenusan mitt emot den räta vinkeln vid [[B]]."
            }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
            {
                "alt": "Rätvinklig triangel med vinkel A längst ner till vänster, guld motstående katet a, blå närliggande katet b, tan(A)=a/b",
                "caption": "Vinkel A sitter längst ner till vänster; tangensen använder den guld motstående kateten a och den blå närliggande kateten b, inte hypotenusan c."
            }
        ]
    },
    "sec-whatis": {
        "h2": "Förstå tangenskvoten",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangensen av en spetsig vinkel [[A]] är den motstående kateten delad med den närliggande kateten:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
            },
            {
                "kind": "p",
                "text": "Här betyder [[\\tan(A)]] tangensen av vinkel [[A]], [[a]] är den motstående kateten och [[b]] är den närliggande kateten. När triangeln är placerad med sin bas längs den horisontella riktningen jämför tangensen det vertikala benet med det horisontella benet: stigning per horisontell sträcka i sin renaste form."
            },
            {
                "kind": "h3",
                "text": "Förstå SOH-CAH-TOA"
            },
            {
                "kind": "p",
                "text": "Studenter kommer ihåg de tre primära kvoterna med ett enda minnesstöd:"
            },
            {
                "kind": "p",
                "text": "<strong>SOH:</strong> Sinus = motstående katet / hypotenusa."
            },
            {
                "kind": "p",
                "text": "<strong>CAH:</strong> Cosinus = närliggande katet / hypotenusa."
            },
            {
                "kind": "p",
                "text": "<strong>TOA:</strong> Tangens = motstående katet / närliggande katet."
            },
            {
                "kind": "p",
                "text": "TOA motsvarar tangensformeln [[\\tan(A)=a/b]]: <strong>T</strong> står för tangens, <strong>O</strong> placerar den motstående kateten överst, och <strong>A</strong> placerar den närliggande kateten underst. Minnesstödet hjälper dig att välja rätt täljare och nämnare innan några tal kommer in i beräkningen. Detta avsnitt fokuserar på tangens; de andra två kvoterna har egna sidor."
            },
            {
                "kind": "h3",
                "text": "Varför tangens inte använder hypotenusan"
            },
            {
                "kind": "p",
                "text": "Tangens jämför de två vinkelräta benen direkt, så hypotenusan är onödig. Med [[a=3]] och [[b=4]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
            },
            {
                "kind": "p",
                "text": "Kvoten fångar redan allt om hur den motstående kateten förhåller sig till den närliggande kateten; att ta in hypotenusan skulle ändra frågan som ställs. Om hypotenusan behövs för en annan uppgift beräknar Pythagoras sats den från benen. Tangens själv ber aldrig om den."
            },
            {
                "kind": "h3",
                "text": "Varför tangens är en dimensionslös kvot"
            },
            {
                "kind": "p",
                "text": "Att dela en längd med en annan tar ut de fysiska enheterna. Med kompatibla enheter:"
            },
            {
                "kind": "p",
                "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
            },
            {
                "kind": "p",
                "text": "Meterna tar ut varandra och lämnar ett vanligt tal. Samma kvot kommer från 300 cm och 400 cm, eftersom enhetsbytet påverkar båda sidorna lika. Det enda kravet är att båda måtten använder kompatibla enheter: att blanda meter med centimeter ger ett meningslöst tal, medan konvertering först håller kvoten ärlig."
            },
            {
                "kind": "h3",
                "text": "Vad betyder ett tangensvärde på 0.75?"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=0.75]] betyder att den motstående kateten är 0.75 gånger den närliggande kateten, eller 75 enheter vertikal stigning för varje 100 enheter horisontell sträcka i samma rätlinjiga geometri. Föreställ dig ett tak som stiger 75 cm för varje 100 cm horisontell sträcka: det är exakt vad 0.75 beskriver. Det betyder inte att vinkeln är [[0.75^\\circ]]; kvoten och vinkeln är olika storheter, och att blanda ihop dem är ett av de vanligaste felen i trigonometri."
            },
            {
                "kind": "h3",
                "text": "Vad betyder ett tangensvärde på 1?"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=1]] betyder [[a=b]]: den motstående och den närliggande kateten är lika. En likbent rätvinklig triangel har två lika ben, och eftersom de två spetsiga vinklarna måste dela 90 grader lika är var och en [[45^\\circ]]:"
            },
            {
                "kind": "p",
                "text": "[[A=45^\\circ]]"
            },
            {
                "kind": "p",
                "text": "Lika ben, lika spetsiga vinklar, tangens exakt 1. Detta är balanspunkten på tangensskalan: under 1 är triangeln bredare än den är hög, över 1 är den högre än den är bred."
            },
            {
                "kind": "h3",
                "text": "Varför tangens kan vara större än 1"
            },
            {
                "kind": "p",
                "text": "Till skillnad från sinus och cosinus har tangens ingen övre gräns för spetsiga vinklar. Om den motstående kateten växer förbi den närliggande kateten passerar kvoten 1 utan problem. Med [[a=6]] och [[b=3]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten är dubbelt så lång som den närliggande kateten. Ett tangensvärde större än 1 är matematiskt giltigt och indikerar inte ett räknarfel; det beskriver helt enkelt en brant triangel, som en hög stege som står nära en vägg."
            },
            {
                "kind": "h3",
                "text": "Hur tangens hänger ihop med sinus och cosinus"
            },
            {
                "kind": "p",
                "text": "Börja med de andra två kvoterna:"
            },
            {
                "kind": "p",
                "text": "[[\\sin(A)=\\frac{a}{c}]]"
            },
            {
                "kind": "p",
                "text": "[[\\cos(A)=\\frac{b}{c}]]"
            },
            {
                "kind": "p",
                "text": "Dividera sinus med cosinus så tar hypotenusan ut varandra:"
            },
            {
                "kind": "p",
                "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
            },
            {
                "kind": "p",
                "text": "Därför:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
            },
            {
                "kind": "p",
                "text": "Denna identitet stämmer med definitionen motstående delat med närliggande, och den ger en användbar krysskontroll: varje tangensresultat bör vara lika med sinus delat med cosinus för samma vinkel."
            }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": [
            {
                "alt": "Tre steg: 3-4-5-triangel, tangensformel tan(A)=a/b, resultat 0.75, motstående är 75 procent av närliggande",
                "caption": "Tre steg: märk 3-4-5-triangeln, skriv tan(A) = a/b och dividera sedan 3 med 4 för att få 0.75."
            }
        ]
    },
    "sec-formula": {
        "h2": "Hur tangensformeln fungerar",
        "blocks": [
            {
                "kind": "p",
                "text": "Börja med definitionen:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
            },
            {
                "kind": "p",
                "text": "Använd sedan denna sidas beteckningar:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten hör hemma i täljaren eftersom tangens mäter hur stor kateten tvärs över vinkeln är; den närliggande kateten hör hemma i nämnaren eftersom den är den katet som jämförs mot. Byt dem mot varandra och du får kotangens, en helt annan kvot."
            },
            {
                "kind": "h3",
                "text": "Fullt uträknat exempel: en 3-4-5 rätvinklig triangel"
            },
            {
                "kind": "p",
                "text": "Givet en motstående katet på [[a=3\\,\\text{cm}]], en närliggande katet på [[b=4\\,\\text{cm}]] och en hypotenusa på [[c=5\\,\\text{cm}]]:"
            },
            {
                "kind": "p",
                "text": "<strong>Steg 1:</strong> Skriv formeln. [[\\tan(A)=a/b]]"
            },
            {
                "kind": "p",
                "text": "<strong>Steg 2:</strong> Sätt in de kända värdena. [[\\tan(A)=3/4]]"
            },
            {
                "kind": "p",
                "text": "<strong>Steg 3:</strong> Dividera. [[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "<strong>Steg 4:</strong> Tolka resultatet. Den motstående kateten är 75 procent så lång som den närliggande kateten."
            },
            {
                "kind": "p",
                "text": "<strong>Steg 5:</strong> Verifiera triangeln. [[3^2+4^2=5^2]], vilket är [[9+16=25]]. Sidlängderna är förenliga med en äkta rätvinklig triangel."
            },
            {
                "kind": "h3",
                "text": "Hitta vinkeln från kvoten"
            },
            {
                "kind": "p",
                "text": "Om själva vinkeln krävs, applicera arctangens på kvoten:"
            },
            {
                "kind": "p",
                "text": "[[A=\\tan^{-1}(0.75)]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
            },
            {
                "kind": "p",
                "text": "Arctangens kallas också invers tangens. Att beräkna tangenskvoten och att beräkna vinkeln är separata operationer: kvoten beskriver triangelns form, medan arctangens omvandlar den formen till grader. Tangenskvotsräknaren på denna sida returnerar kvoten; att återfå vinkeln är ett uppföljningssteg på en vetenskaplig räknare."
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
        "h2": "Så använder du tangenskvotsräknaren",
        "blocks": [
            {
                "kind": "p",
                "text": "Genomgången nedan matchar det levande gränssnittet på denna sida. Varje steg är viktigt, eftersom ett tangensresultat bara är så pålitligt som de två måtten bakom det."
            }
        ],
        "steps": [
            "<strong>Identifiera referensvinkeln [[A]].</strong> Tangens arbetar alltid från en spetsig vinkel; att namnge den först fastställer vilken katet som är motstående och vilken som är närliggande.",
            "<strong>Lokalisera den motstående kateten [[a]], direkt mitt emot vinkel [[A]].</strong> Detta är den katet som aldrig vidrör vinkelns spets.",
            "<strong>Lokalisera den närliggande kateten [[b]], som vidrör vinkel [[A]] och inte är hypotenusan.</strong> Dubbelkolla att du inte har tagit den sneda sidan av misstag.",
            "<strong>Skaffa eller mät båda sidlängderna.</strong> Ett måttband, en skalritning eller en känd specifikation fungerar alla, så länge talen beskriver samma triangel.",
            "<strong>Mata in den motstående katetens längd i det första inmatningsfältet.</strong> Detta är bråkets täljare.",
            "<strong>Mata in den närliggande katetens längd i det andra inmatningsfältet.</strong> Detta är nämnaren.",
            "<strong>Välj kompatibla måttenheter med de tillgängliga enhetsväljarna.</strong> Båda inmatningarna måste vara i samma enhet, eller konverteras till en sådan innan division.",
            "<strong>Bekräfta att båda måtten är positiva.</strong> En noll- eller negativ katet kan inte tillhöra en verklig triangel.",
            "<strong>Klicka på Beräkna tan(A).</strong> Verktyget delar den motstående kateten med den närliggande kateten.",
            "<strong>Läs av den resulterande tangenskvoten.</strong> Svaret är ett vanligt tal, utan grader och utan längdenheter.",
            "<strong>Kontrollera om resultatet är mindre än, lika med eller större än 1.</strong> Under 1 betyder att triangeln är bredare än den är hög; exakt 1 betyder lika ben; över 1 betyder att den motstående kateten är längre.",
            "<strong>Använd Återställ när du vill rensa inmatningarna och börja en ny beräkning.</strong> Nya inmatningar förtjänar en nystart, inte överblivna tal från föregående uppgift."
        ],
        "closingParagraphs": [
            "Räknaren kräver inte hypotenusan eller en vinkel som inmatning. Den utför en operation, divisionen [[a/b]], och den utför den på exakt de två ben du identifierar."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
    },
    "sec-examples": {
        "h2": "Stegvisa exempel på beräkning av tangens",
        "blocks": [
            {
                "kind": "p",
                "text": "Fyra uträknade exempel bygger den grundläggande färdigheten före de praktiska tillämpningarna. Var och ett följer samma rytm: skriv formeln, sätt in, dividera, tolka."
            },
            {
                "kind": "h3",
                "text": "Exempel 1: en 3-4-5 rätvinklig triangel"
            },
            {
                "kind": "p",
                "text": "Givet [[a=3\\,\\text{cm}]], [[b=4\\,\\text{cm}]] och [[c=5\\,\\text{cm}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{3}{4}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten är 75 procent så lång som den närliggande kateten. Eftersom den motstående kateten är det kortare benet här ligger kvoten under 1, vilket beskriver en triangel bredare än den är hög."
            },
            {
                "kind": "h3",
                "text": "Exempel 2: en 5-12-13 rätvinklig triangel"
            },
            {
                "kind": "p",
                "text": "Givet en motstående katet på [[a=5\\,\\text{m}]], en närliggande katet på [[b=12\\,\\text{m}]] och en hypotenusa på [[c=13\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{5}{12}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten är ungefär 41.67 procent så lång som den närliggande kateten. 5-12-13-trippeln är ännu en pythagoreisk trippel, så [[5^2+12^2=13^2]] bekräftar en äkta rätvinklig triangel."
            },
            {
                "kind": "h3",
                "text": "Exempel 3: en 45-45-90-triangel"
            },
            {
                "kind": "p",
                "text": "Givet en motstående katet på [[a=1\\,\\text{cm}]], en närliggande katet på [[b=1\\,\\text{cm}]] och en hypotenusa på [[c=\\sqrt{2}\\,\\text{cm}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
            },
            {
                "kind": "p",
                "text": "Lika ben ger en tangenskvot på 1. Detta är den naturliga mittpunkten på tangensskalan och ett värde värt att memorera: när de två benen matchar är de spetsiga vinklarna 45 grader var."
            },
            {
                "kind": "h3",
                "text": "Exempel 4: en 30-60-90-triangel"
            },
            {
                "kind": "p",
                "text": "För referensvinkel [[A=60^\\circ]], använd en motstående katet på [[a=\\sqrt{3}\\,\\text{cm}]], en närliggande katet på [[b=1\\,\\text{cm}]] och en hypotenusa på [[c=2\\,\\text{cm}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten är längre än den närliggande kateten, så kvoten överstiger 1, som den bör för en 60-graders vinkel. Jämför med den komplementära vinkeln:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
            },
            {
                "kind": "p",
                "text": "Komplementära spetsiga vinklar har reciproka tangensvärden, eftersom ett byte av referensvinkel kastar om etiketterna motstående och närliggande. [[0.5774 \\times 1.7321 \\approx 1]], vilket bekräftar det reciproka sambandet."
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
        "h2": "Verkliga exempel på användning av tangenskvoten",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangens förtjänar sin plats i arbetslivet eftersom så många verkliga problem verkligen är problem om stigning per horisontell sträcka i förklädnad. Tolv uträknade exempel visar hur mönstret upprepas över ramper, tak, stegar och mätningslinjer."
            },
            {
                "kind": "h3",
                "text": "Exempel 5: beräkna en ramps lutning"
            },
            {
                "kind": "p",
                "text": "En förenklad ramp stiger 0.6 m över en horisontell sträcka på 8 m. Den vertikala stigningen är den motstående kateten, [[a=0.6\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=8\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.075}]]"
            },
            {
                "kind": "p",
                "text": "Lutningen i procent är [[0.075 \\times 100\\%=7.5\\%]], och vinkeln är [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Rampen stiger 7.5 enheter vertikalt för varje 100 enheter horisontellt. Beräkningen fastställer inte tillgänglighet eller byggnormsefterlevnad."
            },
            {
                "kind": "h3",
                "text": "Exempel 6: beräkna taklutning"
            },
            {
                "kind": "p",
                "text": "Ett tak stiger 3 m över en horisontell sträcka på 4 m. Den vertikala stigningen är den motstående kateten, [[a=3\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=4\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{3}{4}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Taket stiger 0.75 enheter för varje horisontell enhet, en lutning på 75 procent, och lutningsvinkeln är [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Taklutning uttrycks också som stigning per sträcka i traditionella enheter, till exempel tum av stigning per 12 tum av sträcka, vilket är samma kvot i annan förpackning. Denna kvot utgör inte en fullständig takdesignbedömning."
            },
            {
                "kind": "h3",
                "text": "Exempel 7: hitta en steges vinkel"
            },
            {
                "kind": "p",
                "text": "En stege når 4 m upp på en vägg, och dess fot står 3 m horisontellt från väggen. Vinkeln [[A]] är mellan stegen och marken. Den vertikala höjden är den motstående kateten, [[a=4\\,\\text{m}]], och markavståndet är den närliggande kateten, [[b=3\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{4}{3}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
            },
            {
                "kind": "p",
                "text": "Vinkeln är [[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]. Den vertikala höjden är större än det horisontella avståndet, vilket är varför kvoten överstiger 1. Exemplet förklarar geometri och fastställer inte om stegen står säkert."
            },
            {
                "kind": "h3",
                "text": "Exempel 8: uppskatta elevationsvinkeln till ett träd"
            },
            {
                "kind": "p",
                "text": "Ett träd är 12 m högt, och dess skugga är 9 m lång på plan mark. Antag att solstrålarna skapar en förenklad rätvinklig triangelmodell. Trädhöjden är den motstående kateten, [[a=12\\,\\text{m}]], och skugglängden är den närliggande kateten, [[b=9\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{12}{9}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
            },
            {
                "kind": "p",
                "text": "Höjden är ungefär 1.3333 gånger skugglängden, och motsvarande geometriska vinkel är cirka [[53.13^\\circ]]. Exemplet antar plan mark, ett vertikalt träd och en rätlinjig skuggmodell."
            },
            {
                "kind": "h3",
                "text": "Exempel 9: mäta en höjdskillnad"
            },
            {
                "kind": "p",
                "text": "En mätning visar en vertikal höjdskillnad på 15 m över en horisontell sträcka på 20 m. Höjdskillnaden är den motstående kateten, [[a=15\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=20\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{15}{20}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Höjdskillnaden är 0.75 gånger den horisontella separationen, och motsvarande vinkel är cirka [[36.87^\\circ]]. Verklig mätning kan kräva instrumenthöjdsjusteringar, korrigeringar och ytterligare mätningar utöver denna förenklade modell."
            },
            {
                "kind": "h3",
                "text": "Exempel 10: beräkna en vägs lutning i procent"
            },
            {
                "kind": "p",
                "text": "En förenklad vägsträcka stiger 1.2 m över en horisontell sträcka på 24 m. Den vertikala stigningen är den motstående kateten, [[a=1.2\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=24\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.05}]]"
            },
            {
                "kind": "p",
                "text": "Lutningen i procent är [[0.05 \\times 100\\%=5\\%]], och vinkeln är [[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]. En lutning på 5 procent betyder inte en vinkel på 5 grader; denna distinktion är en vanlig källa till förvirring, och de två talen bör aldrig användas omväxlande."
            },
            {
                "kind": "h3",
                "text": "Exempel 11: beräkna en trappas branthet"
            },
            {
                "kind": "p",
                "text": "En förenklad trappa har en total vertikal stigning på 2.4 m och en horisontell sträcka på 3.2 m. Den vertikala stigningen är den motstående kateten, [[a=2.4\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=3.2\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Den vertikala stigningen är 75 procent av den horisontella sträckan, och vinkeln är cirka [[36.87^\\circ]]. Beräkningen verifierar inte trappdimensioner, komfort eller byggnormsefterlevnad."
            },
            {
                "kind": "h3",
                "text": "Exempel 12: förstå en stagkabels vinkel"
            },
            {
                "kind": "p",
                "text": "En stagkabel fästs i en stolpe 12 m över marken, medan dess markankare är 5 m horisontellt från stolpen. Fästhöjden är den motstående kateten, [[a=12\\,\\text{m}]], och markavståndet är den närliggande kateten, [[b=5\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{12}{5}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=2.4}]]"
            },
            {
                "kind": "p",
                "text": "Vinkeln är [[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]. Den vertikala höjden är 2.4 gånger det horisontella ankaravståndet, en brant kabel med varje mått. Tangenskvoten bestämmer inte kabelspänning, ankarhållfasthet eller strukturell säkerhet."
            },
            {
                "kind": "h3",
                "text": "Exempel 13: beräkna en krankoms riktning"
            },
            {
                "kind": "p",
                "text": "En förenklad krankom har en vertikal komponent på 8 m och en horisontell projektion på 6 m. Den vertikala komponenten är den motstående kateten, [[a=8\\,\\text{m}]], och den horisontella projektionen är den närliggande kateten, [[b=6\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{8}{6}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
            },
            {
                "kind": "p",
                "text": "Motsvarande vinkel är cirka [[53.13^\\circ]]. Den vertikala komponenten är ungefär 1.3333 gånger den horisontella projektionen. Detta är ett förenklat geometriskt exempel och fastställer inte krankapacitet eller driftssäkerhet."
            },
            {
                "kind": "h3",
                "text": "Exempel 14: uppskatta en vandringsleds gradient"
            },
            {
                "kind": "p",
                "text": "En förenklad rak vandringssträcka har en vertikal höjdvinst på 120 m och en horisontell sträcka på 800 m. Höjdvinsten är den motstående kateten, [[a=120\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=800\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{120}{800}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.15}]]"
            },
            {
                "kind": "p",
                "text": "Lutningen i procent är 15 procent, och motsvarande vinkel är cirka [[8.53^\\circ]]. Denna förenklade modell representerar en konstant rätlinjig gradient, inte en hel slingrande vandringsled."
            },
            {
                "kind": "h3",
                "text": "Exempel 15: utvärdera ett mekaniskt stag"
            },
            {
                "kind": "p",
                "text": "Ett diagonalt mekaniskt stag har en vertikal komponent på 1.5 m och en horisontell komponent på 2 m. Den vertikala komponenten är den motstående kateten, [[a=1.5\\,\\text{m}]], och den horisontella komponenten är den närliggande kateten, [[b=2\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Den vertikala komponenten är 75 procent av den horisontella komponenten. Kvoten bestämmer inte stagets styrka, lastkapacitet eller lämplighet."
            },
            {
                "kind": "h3",
                "text": "Exempel 16: hitta elevationsvinkeln till en byggnad"
            },
            {
                "kind": "p",
                "text": "En observatör står 24 m horisontellt från en byggnad. Byggnadens topp är 18 m över observatörens ögonhöjd. Den vertikala skillnaden är den motstående kateten, [[a=18\\,\\text{m}]], och den horisontella sträckan är den närliggande kateten, [[b=24\\,\\text{m}]]:"
            },
            {
                "kind": "p",
                "text": "[[\\tan(A)=\\frac{18}{24}]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{\\tan(A)=0.75}]]"
            },
            {
                "kind": "p",
                "text": "Elevationsvinkeln är cirka [[36.87^\\circ]] under den förenklade geometrin. Detta är vinkeln till toppen i förhållande till observatörens horisontella ögonhöjd, inte nödvändigtvis den totala byggnadshöjden."
            },
            {
                "kind": "p",
                "text": "Tangens är en dimensionslös kvot, men dess praktiska värde kommer från att jämföra vertikal stigning med horisontell sträcka, beskriva brantheten hos en rak lutning, beräkna elevationsvinklar och lösa för saknade sidor när vinkeln är känd. Tre besläktade storheter är lätta att blanda ihop, så håll dem isär: <strong>tangenskvoten</strong> är vertikal stigning delad med horisontell sträcka; <strong>lutning i procent</strong> är tangenskvoten multiplicerad med 100 procent; <strong>vinkeln</strong> är resultatet av att applicera arctangens på kvoten. Tangens ensam fastställer aldrig strukturell säkerhet, lastkapacitet, tillgänglighet eller ingenjörsefterlevnad."
            }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [
            {
                "headers": ["Situation", "Motstående [[a]]", "Närliggande [[b]]", "Formel", "Kvot", "Lutning", "Betydelse"],
                "rows": [
                    ["Ramp", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "Mild lutning, stiger 7.5 per 100 sträcka"],
                    ["Taklutning", "3 m", "4 m", "3/4", "0.75", "75%", "Stigning är 75% av sträckan"],
                    ["Stege", "4 m", "3 m", "4/3", "1.3333", "n/a", "Höjd överstiger basavstånd, vinkel 53.13 grader"],
                    ["Trädelevation", "12 m", "9 m", "12/9", "1.3333", "n/a", "Höjd är 1.3333 gånger skugglängden"],
                    ["Mätning", "15 m", "20 m", "15/20", "0.75", "75%", "Elevation är 75% av horisontellt avstånd"],
                    ["Väglutning", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "5% lutning, inte en 5-graders vinkel"],
                    ["Trappa", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "Stigning är 75% av sträckan"],
                    ["Stagkabel", "12 m", "5 m", "12/5", "2.4", "n/a", "Brant kabel, vinkel 67.38 grader"],
                    ["Krankom", "8 m", "6 m", "8/6", "1.3333", "n/a", "Vertikal är 1.3333 gånger horisontell"],
                    ["Vandringsled", "120 m", "800 m", "120/800", "0.15", "15%", "Jämn 15% gradient"],
                    ["Mekaniskt stag", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "Vertikal är 75% av horisontell"],
                    ["Byggnadselevation", "18 m", "24 m", "18/24", "0.75", "n/a", "Elevationsvinkel 36.87 grader"]
                ]
            }
        ],
        "figures": [
            {
                "alt": "Fyra paneler: ramp 0.075, taklutning 0.75, stege 1.3333, mätning 0.75, var och en med en märkt triangel",
                "caption": "Fyra praktiska beräkningar: ramp, taklutning, stege och mätning, var och en med sin triangel, formel och kvot."
            }
        ]
    },
    "sec-angle": {
        "h2": "Förstå sambandet mellan tangens och vinkelstorlek",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangens ökar när referensvinkeln ökar, och geometrin förklarar varför. När vinkel [[A]] är liten är den motstående kateten kort i förhållande till den närliggande kateten, så kvoten ligger nära 0. När vinkeln vidgas blir den motstående kateten en längre andel av den närliggande kateten, och kvoten klättrar: förbi 1 vid [[45^\\circ]], sedan obegränsat när vinkeln närmar sig [[90^\\circ]]. Tabellen nedan använder illustrativa sidlängder; kvoten, inte triangelns absoluta storlek, bestämmer vinkeln."
            },
            {
                "kind": "p",
                "text": "Mönstret är enkelt: tangens är liten när den motstående kateten är kort i förhållande till den närliggande kateten, är lika med 1 vid [[45^\\circ]], överstiger 1 för större spetsiga vinklar, närmar sig noll när vinkeln närmar sig [[0^\\circ]], och växer obegränsat när vinkeln närmar sig [[90^\\circ]]. Trianglar med samma vinkel har samma tangenskvot även när deras sidlängder skiljer sig, eftersom kvoten fångar form, inte storlek."
            }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [
            {
                "headers": ["Vinkel [[A]]", "Motstående katet [[a]]", "Närliggande katet [[b]]", "Tangenskvot"],
                "rows": [
                    ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "Ungefär 0.5774"],
                    ["[[45^\\circ]]", "1", "1", "1"],
                    ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "Ungefär 1.7321"],
                    ["[[75^\\circ]]", "Ungefär 3.7321", "1", "Ungefär 3.7321"]
                ]
            }
        ],
        "figures": [
            {
                "alt": "Tre trianglar vid 30, 45, 60 grader med tangensvärdena 0.5774, 1, 1.7321; tangens stiger med vinkeln",
                "caption": "När vinkel A växer blir den motstående kateten en längre andel av den närliggande kateten, så tan(A) stiger."
            }
        ]
    },
    "sec-side": {
        "h2": "Så hittar du den motstående kateten med tangens",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangensformeln kan ställas om för att hitta den motstående kateten när den närliggande kateten och vinkeln är kända. Börja med [[\\tan(A)=a/b]] och multiplicera båda sidor med [[b]]:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{a=b\\tan(A)}]]]"
            },
            {
                "kind": "p",
                "text": "Den motstående kateten är lika med den närliggande kateten multiplicerad med tangensen av vinkeln. Givet en närliggande katet på [[b=10\\,\\text{m}]] och en vinkel på [[A=30^\\circ]], och med vetskapen [[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]:"
            },
            {
                "kind": "p",
                "text": "[[a=10\\times0.5774]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
            },
            {
                "kind": "p",
                "text": "Den vertikala stigningen är ungefär 5.774 m för en 10 m horisontell sträcka vid denna vinkel."
            },
            {
                "kind": "p",
                "text": "Den närliggande kateten kan hittas på samma sätt genom att ställa om igen:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
            },
            {
                "kind": "p",
                "text": "Med en motstående katet på [[a=6\\,\\text{m}]] och [[A=45^\\circ]]: eftersom [[\\tan(45^\\circ)=1]], [[b=6/1]], så [[\\boxed{b=6\\,\\text{m}}]]. Dessa är matematiska omställningar av samma formel. Räknaren på denna sida returnerar tangenskvoten från sidlängder; den beräknar inte saknade sidor direkt."
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
        "h2": "Så hittar du en vinkel från en tangenskvot",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangenskvoten och vinkeln är olika storheter: den ena är en dimensionslös jämförelse av sidor, den andra mäts i grader. När kvoten är känd och vinkeln krävs kan arctangens användas:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
            },
            {
                "kind": "p",
                "text": "Arctangens kallas också invers tangens. Givet [[\\tan(A)=0.75]]:"
            },
            {
                "kind": "p",
                "text": "[[A=\\tan^{-1}(0.75)]]"
            },
            {
                "kind": "p",
                "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
            },
            {
                "kind": "p",
                "text": "Vinkeln är ungefär [[36.87^\\circ]] när räknaren är inställd på grader."
            },
            {
                "kind": "h3",
                "text": "Varför räknarens vinkelläge spelar roll"
            },
            {
                "kind": "p",
                "text": "Vinklar kan mätas i grader eller radianer, och en vetenskaplig räknare måste ställas in på det avsedda läget innan arctangens appliceras. En hel cirkel är 360 grader eller [[2\\pi]] radianer, så [[45^\\circ=\\pi/4]] radianer. Själva tangenskvoten har varken grad- eller radianenheter; dessa enheter gäller för vinkeln som återfås från den. Tangenskvotsräknaren på denna sida returnerar kvoten direkt och returnerar inte en vinkel."
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
        "h2": "Vanliga misstag vid beräkning av tangens",
        "blocks": [
            {
                "kind": "p",
                "text": "De flesta tangensfel kommer från ett vänt bråk, en felmärkt katet eller att kvoten blandas ihop med vinkeln. Gå igenom denna lista innan du litar på ett resultat."
            }
        ],
        "steps": [
            "<strong>Att vända formeln och beräkna [[b/a]] i stället för [[a/b]].</strong> Detta returnerar kotangens, inte tangens. Med [[a=3]] och [[b=4]] ger den vända fraktionen 1.3333; den korrekta ger 0.75.",
            "<strong>Att blanda ihop tangens med sinus.</strong> Tangens delar den motstående kateten med den närliggande kateten; sinus delar den motstående kateten med hypotenusan. Om hypotenusan är i nämnaren är svaret sinus, inte tangens.",
            "<strong>Att blanda ihop tangens med cosinus.</strong> Cosinus delar den närliggande kateten med hypotenusan. Tangens använder aldrig hypotenusan alls, så en hypotenusa på endera positionen signalerar fel kvot.",
            "<strong>Att blanda ihop tangens med kotangens.</strong> Kotangens är det reciproka värdet, närliggande delat med motstående. De liknande namnen orsakar verkliga fel, men bråkordningen är exakt vänd.",
            "<strong>Att inkludera hypotenusan i den grundläggande tangensformeln.</strong> Hypotenusan spelar ingen roll i [[a/b]]. Om den dyker upp i beräkningen användes fel formel.",
            "<strong>Att blanda ihop den motstående och den närliggande kateten.</strong> Båda är ben, så etiketterna är lätta att byta. Spåra alltid från referensvinkeln: tvärs över den är motstående, vid den är närliggande.",
            "<strong>Att identifiera sidorna relativt fel referensvinkel.</strong> Ett byte från vinkel [[A]] till vinkel [[C]] kastar om etiketterna motstående och närliggande, vilket vänder kvoten till dess reciproka värde.",
            "<strong>Att anta att tangens måste vara mindre än 1.</strong> Den regeln tillhör sinus och cosinus. Tangens har ingen övre gräns för spetsiga vinklar, och ett resultat över 1 är fullt giltigt.",
            "<strong>Att rapportera tangenskvoten som en vinkel i grader.</strong> Ett resultat på 0.75 är en kvot, inte [[0.75^\\circ]]. Att behandla den som grader matar nonsens in i varje fortsättningsberäkning.",
            "<strong>Att rapportera tangenskvoten med måttenheter.</strong> Enheterna tar ut varandra i divisionen, så '0.75 m' är fel. Skriv det vanliga talet och behåll enheterna i inmatningsmåtten där de hör hemma.",
            "<strong>Att mata in noll- eller negativa sidlängder.</strong> En triangel kan inte ha en noll- eller negativ katet, så dessa inmatningar signalerar ett inmatningsfel eller ett saknat mått, inte ett giltigt randfall.",
            "<strong>Att blanda inkompatibla måttenheter.</strong> En motstående katet på 3 m med en närliggande katet på 40 cm ger 7.5, ett meningslöst tal. Konvertera till en enhet först: 3 m och 4 m ger korrekta 0.75.",
            "<strong>Att avrunda för tidigt.</strong> Att avrunda en mellanliggande division till två decimaler och sedan fortsätta beräkningen förstärker felet. Behåll full precision genom varje steg och avrunda endast det slutliga svaret.",
            "<strong>Att blanda ihop lutning i procent med vinkel i grader.</strong> En lutning på 5 procent kommer från en tangens på 0.05, men vinkeln är [[\\tan^{-1}(0.05)\\approx2.86^\\circ]], inte 5 grader. Lutning och vinkel är olika storheter.",
            "<strong>Att anta att tangenskvoten bestämmer triangelns absoluta storlek.</strong> Tangens beskriver form, inte storlek: oändligt många trianglar delar en tangens på 0.75, från en 3 cm lång motstående katet till en 3 km lång. Kvoten fixerar proportionerna; faktiska längder kräver minst ett sidmått."
        ],
        "closingParagraphs": [
            "<strong>Fel kontra rätt: en löst jämförelse.</strong> Givet en motstående katet på [[a=3]] och en närliggande katet på [[b=4]]:",
            "<strong>Felaktigt:</strong> [[4/3\\approx1.3333]]. Detta är kotangenskvoten för vinkel [[A]], inte tangenskvoten. Täljaren och nämnaren är omvända.",
            "<strong>Rätt:</strong> [[\\tan(A)=3/4=0.75]].",
            "<strong>Verifiera med sinus och cosinus:</strong> med [[c=5]], [[\\sin(A)=3/5=0.6]] och [[\\cos(A)=4/5=0.8]]. Därför [[\\sin(A)/\\cos(A)=0.6/0.8=0.75]], vilket bekräftar tangensberäkningen."
        ],
        "listItems": [],
        "related": [],
        "tables": [],
        "figures": []
    },
    "sec-verify": {
        "h2": "Så kontrollerar du om ditt tangensresultat är giltigt",
        "blocks": [
            {
                "kind": "p",
                "text": "En giltig, icke-degenererad rätvinklig triangel kräver två positiva ben, [[a \\gt 0]] och [[b \\gt 0]], mätta i kompatibla enheter, så tangensresultatet måste vara positivt:"
            },
            {
                "kind": "p",
                "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
            },
            {
                "kind": "p",
                "text": "Det finns inget krav på att den motstående kateten ska vara kortare än den närliggande kateten, så resultatet kan ligga under, på eller över 1. Ett resultat som är noll eller negativt indikerar vanligtvis ogiltiga inmatningar eller omvända etiketter."
            },
            {
                "kind": "h3",
                "text": "Metod 1: kontrollera kvoten"
            },
            {
                "kind": "p",
                "text": "Verifiera [[\\tan(A)=a/b]] direkt. Med [[a=3]] och [[b=4]]: [[\\tan(A)=3/4=0.75]]. Eftersom den motstående kateten är kortare än den närliggande kateten bör kvoten hamna under 1; om en andra handberäkning inte håller med var en katet felmärkt eller en enhet blandad."
            },
            {
                "kind": "h3",
                "text": "Metod 2: kontrollera Pythagoras sats"
            },
            {
                "kind": "p",
                "text": "Beräkna hypotenusan vid behov: [[c=\\sqrt{a^2+b^2}]]. För [[a=3]] och [[b=4]]: [[c=\\sqrt{9+16}=5]], och [[3^2+4^2=5^2]]. Detta bekräftar dimensionerna i 3-4-5-triangeln. Hypotenusan är här ett verifieringsvärde, inte en del av den primära tangensformeln."
            },
            {
                "kind": "h3",
                "text": "Metod 3: kontrollera med arctangens"
            },
            {
                "kind": "p",
                "text": "För en tangenskvot på 0.75: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Eftersom kvoten ligger under 1 bör vinkeln hamna under [[45^\\circ]]; om den inte gör det är sidetiketterna troligen ombytta. Små skillnader kan bero på avrundning."
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
        "h2": "Tangens jämfört med sinus, cosinus och kotangens",
        "blocks": [
            {
                "kind": "p",
                "text": "Varje kvot jämför ett annat sidpar, med samma referensvinkel och sidetiketter:"
            },
            {
                "kind": "p",
                "text": "Tangens och kotangens är det reciproka paret: [[\\cot(A)=1/\\tan(A)]]. Om [[\\tan(A)=0.75]] är [[\\cot(A)\\approx1.3333]]. Välj tangens när båda benen är kända eller när en uppgift involverar stigning per horisontell sträcka; välj sinus eller cosinus när hypotenusan kommer in i arbetet, och kotangens när jämförelsen går åt andra hållet. Håll tangens central: de närliggande kvoterna har egna sidor med fulla behandlingar."
            },
            {
                "kind": "p",
                "text": "För de närliggande kvoterna, se <a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">Sinuskvotsräknaren</a>, <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Cosinuskvotsräknaren</a>, <a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">Kotangenskvotsräknaren</a>, <a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">Sekanskvotsräknaren</a> och <a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">Cosekanskvotsräknaren</a>."
            }
        ],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [],
        "tables": [
            {
                "headers": ["Kvot", "Formel", "Vad den jämför"],
                "rows": [
                    ["Sinus", "sin(A) = a/c", "Motstående katet mot hypotenusan"],
                    ["Cosinus", "cos(A) = b/c", "Närliggande katet mot hypotenusan"],
                    ["Tangens", "tan(A) = a/b", "Motstående katet mot närliggande katet"],
                    ["Cosekans", "csc(A) = c/a", "Hypotenusan mot motstående katet"],
                    ["Sekans", "sec(A) = c/b", "Hypotenusan mot närliggande katet"],
                    ["Kotangens", "cot(A) = b/a", "Närliggande katet mot motstående katet"]
                ]
            }
        ],
        "figures": []
    },
    "sec-related": {
        "h2": "Utforska relaterade trigonometriska räknare",
        "blocks": [],
        "steps": [],
        "closingParagraphs": [],
        "listItems": [],
        "related": [
            {
                "name": "Sinuskvotsräknare",
                "desc": "Beräkna sinuskvoten, motstående katet delat med hypotenusan, från två sidlängder."
            },
            {
                "name": "Cosinuskvotsräknare",
                "desc": "Beräkna cosinuskvoten, närliggande katet delat med hypotenusan, från två sidlängder."
            },
            {
                "name": "Kotangenskvotsräknare",
                "desc": "Beräkna kotangenskvoten, närliggande katet delat med motstående katet, från två sidlängder."
            },
            {
                "name": "Sekanskvotsräknare",
                "desc": "Beräkna sekanskvoten, hypotenusan delat med närliggande katet, från två sidlängder."
            },
            {
                "name": "Cosekanskvotsräknare",
                "desc": "Beräkna cosekanskvoten, hypotenusan delat med motstående katet, från två sidlängder."
            },
            {
                "name": "Vinkelräknare för rätvinkliga trianglar",
                "desc": "Hitta en saknad spetsig vinkel i en rätvinklig triangel från kända sidor."
            },
            {
                "name": "Sidräknare för rätvinkliga trianglar",
                "desc": "Hitta en saknad sidlängd i en rätvinklig triangel från kända sidor och vinklar."
            }
        ],
        "tables": [],
        "figures": []
    },
    "sec-conclusion": {
        "h2": "Använd tangenskvoten med självförtroende",
        "blocks": [
            {
                "kind": "p",
                "text": "Tangens är kvoten av de två benen: dela den motstående kateten med den närliggande kateten så har du beskrivit hur många enheter vertikal stigning som följer med varje enhet horisontell sträcka. Formeln [[\\tan(A)=a/b]] behöver bara två mått, svaret är alltid ett dimensionslöst tal som kan ligga under, på eller över 1, och det växer när referensvinkeln växer. När en saknad katet behövs återfår [[a=b\\tan(A)]] den motstående kateten; när vinkeln behövs återfår [[A=\\tan^{-1}(a/b)]] den. Ramp, tak, stege eller lärobokens 3-4-5, metoden ändras aldrig: identifiera den motstående kateten, identifiera den närliggande kateten, dividera och verifiera med den positiva kvotkontrollen."
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
        "question": "Vad är tangenskvotsformeln för en rätvinklig triangel?",
        "answer": "tan(A) = a / b: dela den motstående kateten a med den närliggande kateten b. Med en motstående katet på 3 cm och en närliggande katet på 4 cm blir resultatet 3/4 = 0.75. Det decimaltalet är det fullständiga svaret, en dimensionslös kvot, inte en vinkel."
    },
    {
        "question": "Hur beräknar man tangens från två sidlängder?",
        "answer": "Identifiera referensvinkeln A, mät den motstående kateten a och den närliggande kateten b i samma enhet, bekräfta att båda är positiva och dividera sedan: tan(A) = a / b. På denna sida matar du in den motstående kateten i det första fältet och den närliggande kateten i det andra och klickar sedan på Beräkna tan(A)."
    },
    {
        "question": "Varför använder inte tangens hypotenusan?",
        "answer": "Tangens jämför de två vinkelräta benen direkt: vertikalt mot horisontellt. Hypotenusan tillför ingen ny information till den jämförelsen, så den primära formeln behöver bara den motstående och den närliggande kateten. Pythagoras sats kan återfå hypotenusan senare om en annan beräkning behöver den."
    },
    {
        "question": "Kan tangens vara större än 1?",
        "answer": "Ja. Tangens har ingen övre gräns för spetsiga vinklar. När den motstående kateten är längre än den närliggande kateten överstiger kvoten 1: med a = 6 och b = 3 är tan(A) = 6/3 = 2. Ett resultat över 1 är matematiskt giltigt och indikerar inte ett räknarfel."
    },
    {
        "question": "Vad betyder ett tangensvärde på 0.75?",
        "answer": "Den motstående kateten är 75 procent av den närliggande kateten. I en 3-4-5-triangel är kateten tvärs över vinkel A 3 enheter medan kateten vid vinkel A är 4 enheter, så tan(A) = 3/4 = 0.75. Det beskriver triangelns form och är inte en vinkel på 0.75 grader."
    },
    {
        "question": "Vad är skillnaden mellan tangens och kotangens?",
        "answer": "De är reciproka värden. Tangens delar den motstående kateten med den närliggande kateten (a/b); kotangens delar den närliggande kateten med den motstående kateten (b/a). Om tan(A) = 0.75 är cot(A) = 1/0.75, ungefär 1.3333. Bråkordningen är exakt vänd."
    },
    {
        "question": "Hur kan jag beräkna en vinkel från en tangenskvot?",
        "answer": "Applicera arctangens på kvoten: A = tan^-1(a/b). För tan(A) = 0.75 är A = tan^-1(0.75), ungefär 36.87 grader. Ställ först din vetenskapliga räknare på gradläge. Räknaren på denna sida returnerar kvoten, inte vinkeln."
    },
    {
        "question": "Hur kan jag hitta den motstående kateten med tangens?",
        "answer": "Ställ om formeln till a = b * tan(A). Om den närliggande kateten är 10 m och vinkel A är 30 grader är tan(30 grader) ungefär 0.5774, så a = 10 * 0.5774, ungefär 5.774 m. Detta är en manuell omställning; räknaren på denna sida returnerar kvoten från sidlängder, inte saknade sidor."
    },
    {
        "question": "Hur kan jag hitta den närliggande kateten med tangens?",
        "answer": "Ställ om formeln till b = a / tan(A). Om den motstående kateten är 6 m och vinkel A är 45 grader är tan(45 grader) = 1, så b = 6/1 = 6 m. Detta är en matematisk omställning av samma formel, inte ett separat läge för räknaren på denna sida."
    },
    {
        "question": "Är tangens samma sak som lutning?",
        "answer": "De är nära besläktade. Lutning som stigning per horisontell sträcka är samma jämförelse som tangens gör: vertikal förändring delad med horisontell förändring. En vägingenjör som skriver lutning 0.05 och en trigonometristudent som skriver tan(A) = 0.05 beskriver samma kvot. Termerna skiljer sig åt i sammanhang, inte i matematik."
    },
    {
        "question": "Vad är skillnaden mellan lutning i procent och vinkel i grader?",
        "answer": "Lutning i procent är 100 gånger tangenskvoten: en tangens på 0.05 ger en lutning på 5%. Vinkeln är arctangens av kvoten: tan^-1(0.05) är ungefär 2.86 grader. En lutning på 5% är alltså inte en vinkel på 5 grader. Att blanda ihop de två är ett av de vanligaste tangensmisstagen."
    },
    {
        "question": "Hur används tangens i byggande och mätning?",
        "answer": "Tangens jämför vertikal stigning med horisontell sträcka, vilket är exakt vad taklutning, ramplutning, väglutning och trappbranthet beskriver. Lantmätare använder den för att omvandla en höjdskillnad och en horisontell sträcka till en elevationsvinkel. I varje fall certifierar kvoten ensam aldrig strukturell säkerhet eller normeefterlevnad."
    }
],
"faqHeading": "Vanliga frågor",
"relatedHeading": "Utforska relaterade trigonometriska räknare"
},
"zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
        "sec-intro": "什么是正切比计算器？",
        "sec-triangle": "理解对边与邻边",
        "sec-whatis": "理解正切比",
        "sec-formula": "正切公式的工作原理",
        "sec-howto": "如何使用正切比计算器",
        "sec-examples": "正切计算分步示例",
        "sec-applications": "正切比的实际应用示例",
        "sec-angle": "理解正切与角度大小的关系",
        "sec-side": "如何用正切求对边",
        "sec-recover": "已知正切比时如何求角度",
        "sec-mistakes": "计算正切时的常见错误",
        "sec-verify": "如何验证正切结果是否有效",
        "sec-vs": "正切与正弦、余弦和余切",
        "sec-related": "探索相关三角计算器",
        "sec-faq": "常见问题"
    },
    "sections": {
        "sec-intro": {
            "h2": "什么是正切比计算器？",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正切比计算器回答一个问题：对于直角三角形中的一个锐角，角对面的边与角旁边的边相比如何？输入对边和邻边，工具将对边除以邻边，返回[[\\tan(A)=a/b]]。一个直角三角形的对边为3厘米、邻边为4厘米，因此[[\\tan(A)=3/4=0.75]]。这个0.75就是正切比：它告诉你对边长度是邻边的75%。它不是角度，因此绝不能把它读成[[0.75^\\circ]]。斜边从不参与这个计算；对边和邻边就足够了。正切是基本三角比之一，其特别之处在于比较垂直升高与水平距离，这就是它出现在屋顶坡度、公路坡度和坡道斜坡中的原因。结果是一个无量纲数：两个长度的纯粹比较，不是厘米或度数的测量值。如果需要的是以度为单位的角度，反正切可以把比值转换为度数。"
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
            "h2": "理解对边与邻边",
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
                    "text": "什么是对边？"
                },
                {
                    "kind": "p",
                    "text": "对边[[a]]是参考角[[A]]正对面的边，是唯一不接触该角顶点的边。在实际问题中，它常扮演垂直升高、高程差或高度的角色：梯子沿墙到达的高度、屋顶的升高，或起重机吊臂的垂直分量。哪条边算作对边取决于所选的参考角，因此从角[[A]]切换到角[[C]]时，对边和邻边的标签会互换。它出现在正切公式的分子中，因为正切度量的是角对面那条边相对于角旁边那条边的大小。"
                },
                {
                    "kind": "h3",
                    "text": "什么是邻边？"
                },
                {
                    "kind": "p",
                    "text": "邻边[[b]]是与参考角[[A]]相邻、但不是斜边的那条直角边。在实际问题中，它常扮演水平距离或地面距离的角色：梯子底部距墙的距离、屋顶的水平距离，或太阳角问题中的影子长度。它永远不是斜边，每次都要核实这一点，因为斜边是正对直角的边。它出现在正切公式的分母中，这就是为什么正切拿对边与这条直角边比较，而不是与最长边比较。"
                },
                {
                    "kind": "h3",
                    "text": "什么是斜边？"
                },
                {
                    "kind": "p",
                    "text": "斜边[[c]]是直角对面的边：在任何图形中，它都正对着标示[[90^\\circ]]角的小方块，且严格长于任意一条直角边。在实际问题中，它常扮演倾斜长度的角色：梯子、屋顶椽子、拉线或对角撑。它在基本的正切计算中不需要，因为正切公式直接比较两条直角边。如果另一个问题需要它，勾股定理可以用两条直角边求出它：[[c=\\sqrt{a^2+b^2}]]。"
                },
                {
                    "kind": "p",
                    "text": "正切使用两条直角边，不需要斜边。请保持这个边的标签约定不变：[[a]]对着角[[A]]，[[b]]与角[[A]]相邻，[[c]]是正对角[[B]]处直角的斜边。"
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "左下角为角A的直角三角形，金色对边a，蓝色邻边b，tan(A)=a/b",
                    "caption": "角A位于左下角；正切使用金色对边a和蓝色邻边b，不用斜边c。"
                }
            ]
        },
        "sec-whatis": {
            "h2": "理解正切比",
            "blocks": [
                {
                    "kind": "p",
                    "text": "锐角[[A]]的正切是对边除以邻边："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "其中[[\\tan(A)]]表示角[[A]]的正切，[[a]]是对边，[[b]]是邻边。当三角形以底边沿水平方向放置时，正切比较垂直直角边与水平直角边：这是垂直升高与水平距离之比最纯粹的形式。"
                },
                {
                    "kind": "h3",
                    "text": "理解 SOH-CAH-TOA"
                },
                {
                    "kind": "p",
                    "text": "学生用一个记忆口诀记住三个基本比值："
                },
                {
                    "kind": "p",
                    "text": "<strong>SOH:</strong> 正弦 = 对边 / 斜边。"
                },
                {
                    "kind": "p",
                    "text": "<strong>CAH:</strong> 余弦 = 邻边 / 斜边。"
                },
                {
                    "kind": "p",
                    "text": "<strong>TOA:</strong> 正切 = 对边 / 邻边。"
                },
                {
                    "kind": "p",
                    "text": "TOA对应正切公式[[\\tan(A)=a/b]]：<strong>T</strong>代表正切，<strong>O</strong>把对边放在上面，<strong>A</strong>把邻边放在下面。这个口诀帮助你在数字进入计算之前选对分子和分母。本节只讲正切；另外两个比值有各自的页面。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正切不用斜边"
                },
                {
                    "kind": "p",
                    "text": "正切直接比较两条互相垂直的直角边，因此不需要斜边。当[[a=3]]、[[b=4]]时："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "比值已经完整表达了对边与邻边的比较；引入斜边会改变所问的问题。如果另一个问题需要斜边，勾股定理可以用两条直角边求出它。正切本身从不要求斜边。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正切是无量纲比值"
                },
                {
                    "kind": "p",
                    "text": "一个长度除以另一个长度会约掉物理单位。单位一致时："
                },
                {
                    "kind": "p",
                    "text": "[[\\frac{3\\,\\text{m}}{4\\,\\text{m}}=0.75]]"
                },
                {
                    "kind": "p",
                    "text": "米约掉了，只剩下一个纯数字。同样的比值也出现在300厘米和400厘米中，因为单位变化对两条边的影响完全相同。唯一的要求是两次测量使用一致的单位：米与厘米混用会产生毫无意义的数字，而先换算成同一单位才能保证比值准确有效。"
                },
                {
                    "kind": "h3",
                    "text": "正切值0.75是什么意思？"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=0.75]]意味着对边是邻边的0.75倍，即在同样的直线几何中，每100个单位的水平距离对应75个单位的垂直升高。想象一个屋顶，每100厘米水平距离升高75厘米：这正是0.75所描述的。它并不意味着角度是[[0.75^\\circ]]；比值和角度是不同的量，混淆两者是三角学中最常见的错误之一。"
                },
                {
                    "kind": "h3",
                    "text": "正切值1是什么意思？"
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=1]]意味着[[a=b]]：对边和邻边相等。等腰直角三角形有两条相等的直角边，因为两个锐角必须平分90度，所以每个都是[[45^\\circ]]："
                },
                {
                    "kind": "p",
                    "text": "[[A=45^\\circ]]"
                },
                {
                    "kind": "p",
                    "text": "直角边相等、锐角相等，正切恰为1。这是正切刻度上的平衡点：小于1时三角形宽大于高，大于1时高大于宽。"
                },
                {
                    "kind": "h3",
                    "text": "为什么正切可以大于1"
                },
                {
                    "kind": "p",
                    "text": "与正弦和余弦不同，对于锐角，正切没有上限。如果对边长过邻边，比值超过1毫无问题。当[[a=6]]、[[b=3]]时："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{6}{3}=2]]"
                },
                {
                    "kind": "p",
                    "text": "对边是邻边的两倍长。正切值大于1在数学上完全有效，并不表示计算器出错；它只是描述了一个陡峭的三角形，比如紧贴墙面立着的高梯子。"
                },
                {
                    "kind": "h3",
                    "text": "正切与正弦、余弦的关系"
                },
                {
                    "kind": "p",
                    "text": "先从另外两个比值入手："
                },
                {
                    "kind": "p",
                    "text": "[[\\sin(A)=\\frac{a}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\cos(A)=\\frac{b}{c}]]"
                },
                {
                    "kind": "p",
                    "text": "正弦除以余弦，斜边被约掉："
                },
                {
                    "kind": "p",
                    "text": "[[[\\frac{\\sin(A)}{\\cos(A)}=\\frac{a/c}{b/c}=\\frac{a}{b}]]]"
                },
                {
                    "kind": "p",
                    "text": "因此："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "这个恒等式与对边比邻边的定义一致，也是一个实用的交叉验证：同一角度的任何正切结果都应等于正弦除以余弦。"
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": [
                {
                    "alt": "三阶段：3-4-5三角形、正切公式tan(A)=a/b、结果0.75、对边是邻边的75%",
                    "caption": "三阶段：标注3-4-5三角形，写出tan(A) = a/b，再用3除以4得到0.75。"
                }
            ]
        },
        "sec-formula": {
            "h2": "正切公式的工作原理",
            "blocks": [
                {
                    "kind": "p",
                    "text": "从定义出发："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{\\text{Opposite}}{\\text{Adjacent}}]]"
                },
                {
                    "kind": "p",
                    "text": "再使用本页面的记号："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"
                },
                {
                    "kind": "p",
                    "text": "对边属于分子，因为正切度量的是角对面那条边有多大；邻边属于分母，因为它是被比较的对象。两者互换得到的是余切，那是一个完全不同的比值。"
                },
                {
                    "kind": "h3",
                    "text": "完整例题：3-4-5直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知对边[[a=3\\,\\text{cm}]]、邻边[[b=4\\,\\text{cm}]]、斜边[[c=5\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "<strong>步骤 1:</strong> 写出公式。[[\\tan(A)=a/b]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>步骤 2:</strong> 代入已知值。[[\\tan(A)=3/4]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>步骤 3:</strong> 计算除法。[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "<strong>步骤 4:</strong> 解释结果。对边长度是邻边的75%。"
                },
                {
                    "kind": "p",
                    "text": "<strong>步骤 5:</strong> 验证三角形。[[3^2+4^2=5^2]]，即[[9+16=25]]。边长与真正的直角三角形一致。"
                },
                {
                    "kind": "h3",
                    "text": "从比值求角度"
                },
                {
                    "kind": "p",
                    "text": "如果需要的是角度本身，对比值使用反正切："
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "反正切又称为反正切函数。计算正切比和计算角度是两个不同的操作：比值描述三角形的形状，而反正切把形状转换为度数。本页的正切比计算器返回的是比值；求出角度是科学计算器上的后续步骤。"
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
            "h2": "如何使用正切比计算器",
            "blocks": [
                {
                    "kind": "p",
                    "text": "下面的步骤与本页的实际界面对应。每一步都很重要，因为正切结果的可靠性取决于它背后的两次测量。"
                }
            ],
            "steps": [
                "<strong>确定参考角[[A]]。</strong> 正切总是从一个锐角出发；先命名它，才能确定哪条边是对边、哪条边是邻边。",
                "<strong>找到对边[[a]]，即角[[A]]正对面的边。</strong> 这是唯一不接触该角顶点的边。",
                "<strong>找到邻边[[b]]，它接触角[[A]]但不是斜边。</strong> 再三确认没有误拿倾斜的那条边。",
                "<strong>获取或测量两条边的长度。</strong> 卷尺、比例图或已知规格都可以，只要数字描述的是同一个三角形。",
                "<strong>在第一个输入框中输入对边长度。</strong> 这是分数的分子。",
                "<strong>在第二个输入框中输入邻边长度。</strong> 这是分数的分母。",
                "<strong>使用单位选择器选择一致的测量单位。</strong> 两个输入必须是同一单位，否则先换算再除。",
                "<strong>确认两个测量值都是正数。</strong> 零或负数的边长不可能属于真实三角形。",
                "<strong>点击“计算 tan(A)”。</strong> 工具将对边除以邻边。",
                "<strong>读取得到的正切比。</strong> 答案是一个纯数字，不带度数，也不带长度单位。",
                "<strong>判断结果是小于、等于还是大于1。</strong> 小于1说明三角形宽大于高；等于1说明两条直角边相等；大于1说明对边更长。",
                "<strong>想重新计算时使用“重置”。</strong> 新的输入值得一个全新的开始，而不是留着上一个问题的旧数字。"
            ],
            "closingParagraphs": [
                "计算器不需要斜边，也不需要输入角度。它只做一个运算，即除法[[a/b]]，而且只对你指认的两条直角边做这个运算。"
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-examples": {
            "h2": "正切计算分步示例",
            "blocks": [
                {
                    "kind": "p",
                    "text": "四个例题先练好核心技能，再进入实际应用。每个例题都遵循同样的节奏：写公式、代入、除法、解释。"
                },
                {
                    "kind": "h3",
                    "text": "例 1: 3-4-5直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知[[a=3\\,\\text{cm}]]、[[b=4\\,\\text{cm}]]、[[c=5\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "对边长度是邻边的75%。因为这里对边是较短的直角边，比值小于1，描述的是一个宽大于高的三角形。"
                },
                {
                    "kind": "h3",
                    "text": "例 2: 5-12-13直角三角形"
                },
                {
                    "kind": "p",
                    "text": "已知对边[[a=5\\,\\text{m}]]、邻边[[b=12\\,\\text{m}]]、斜边[[c=13\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{5}{12}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx0.4167}]]"
                },
                {
                    "kind": "p",
                    "text": "对边约是邻边长度的41.67%。5-12-13是另一组勾股数，[[5^2+12^2=13^2]]证实这是一个真正的直角三角形。"
                },
                {
                    "kind": "h3",
                    "text": "例 3: 45-45-90三角形"
                },
                {
                    "kind": "p",
                    "text": "已知对边[[a=1\\,\\text{cm}]]、邻边[[b=1\\,\\text{cm}]]、斜边[[c=\\sqrt{2}\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(45^\\circ)=\\frac{1}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(45^\\circ)=1}]]"
                },
                {
                    "kind": "p",
                    "text": "相等的直角边得到正切比1。这是正切刻度自然的中点，值得记住：只要两条直角边相等，两个锐角就都是45度。"
                },
                {
                    "kind": "h3",
                    "text": "例 4: 30-60-90三角形"
                },
                {
                    "kind": "p",
                    "text": "对于参考角[[A=60^\\circ]]，取对边[[a=\\sqrt{3}\\,\\text{cm}]]、邻边[[b=1\\,\\text{cm}]]、斜边[[c=2\\,\\text{cm}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(60^\\circ)=\\frac{\\sqrt{3}}{1}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(60^\\circ)\\approx1.7321}]]"
                },
                {
                    "kind": "p",
                    "text": "对边长于邻边，因此比值大于1，符合60度角的预期。再与余角比较："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(30^\\circ)=\\frac{1}{\\sqrt{3}}\\approx0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "互余锐角的正切值互为倒数，因为更换参考角会互换对边和邻边的标签。[[0.5774 \\times 1.7321 \\approx 1]]，这证实了倒数关系。"
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
            "h2": "正切比的实际应用示例",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正切在现实世界中占有一席之地，因为很多实际问题本质上都是垂直升高与水平距离之比问题。十二个例题展示了这一模式在坡道、屋顶、梯子和测量线路中的反复出现。"
                },
                {
                    "kind": "h3",
                    "text": "例 5: 计算坡道的斜坡"
                },
                {
                    "kind": "p",
                    "text": "一个简化的坡道，在8米的水平距离上升高0.6米。垂直升高是对边，[[a=0.6\\,\\text{m}]]，水平距离是邻边，[[b=8\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{0.6}{8}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.075}]]"
                },
                {
                    "kind": "p",
                    "text": "坡度百分比为[[0.075 \\times 100\\%=7.5\\%]]，角度为[[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]。坡道每100个单位水平距离升高7.5个单位垂直高度。本计算不能证明该坡道符合无障碍或建筑规范要求。"
                },
                {
                    "kind": "h3",
                    "text": "例 6: 计算屋顶坡度"
                },
                {
                    "kind": "p",
                    "text": "一个屋顶在4米的水平距离上升高3米。垂直升高是对边，[[a=3\\,\\text{m}]]，水平距离是邻边，[[b=4\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{3}{4}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "屋顶每1个水平单位升高0.75个单位，即75%的坡度，坡角为[[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]。屋顶坡度也常用传统单位表示为升高与距离之比，例如每12英寸水平距离升高几英寸，那只是换了件衣服的同一比值。本比值不构成完整的屋顶设计评估。"
                },
                {
                    "kind": "h3",
                    "text": "例 7: 求梯子的角度"
                },
                {
                    "kind": "p",
                    "text": "一架梯子沿墙面上升4米，梯脚距墙水平距离为3米。角[[A]]位于梯子与地面之间。垂直高度是对边，[[a=4\\,\\text{m}]]，地面距离是邻边，[[b=3\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{4}{3}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "角度为[[A=\\tan^{-1}(4/3)\\approx53.13^\\circ]]。垂直高度大于水平距离，这就是比值超过1的原因。本例只讲解几何，不能证明梯子摆放得是否安全。"
                },
                {
                    "kind": "h3",
                    "text": "例 8: 估计树的仰角"
                },
                {
                    "kind": "p",
                    "text": "一棵树高12米，在平地上投下9米长的影子。假设太阳光线构成简化的直角三角形模型。树高是对边，[[a=12\\,\\text{m}]]，影长是邻边，[[b=9\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{9}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "树高约为影长的1.3333倍，对应的几何角度约为[[53.13^\\circ]]。本例假设地面平整、树垂直于地面，且影子模型为直线。"
                },
                {
                    "kind": "h3",
                    "text": "例 9: 测量高程差"
                },
                {
                    "kind": "p",
                    "text": "一次测量显示，在20米的水平距离上垂直高程差为15米。高程差是对边，[[a=15\\,\\text{m}]]，水平距离是邻边，[[b=20\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{15}{20}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "高程差是水平距离的0.75倍，对应角度约为[[36.87^\\circ]]。实际测量可能需要仪器高改正、各种校正以及本简化模型之外的额外测量。"
                },
                {
                    "kind": "h3",
                    "text": "例 10: 计算公路的坡度百分比"
                },
                {
                    "kind": "p",
                    "text": "一段简化的公路，在24米的水平距离上上升1.2米。垂直升高是对边，[[a=1.2\\,\\text{m}]]，水平距离是邻边，[[b=24\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.2}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.05}]]"
                },
                {
                    "kind": "p",
                    "text": "坡度百分比为[[0.05 \\times 100\\%=5\\%]]，角度为[[A=\\tan^{-1}(0.05)\\approx2.86^\\circ]]。5%的坡度并不意味着5度的角；这种区分是常见的困惑来源，两个数字绝不能混用。"
                },
                {
                    "kind": "h3",
                    "text": "例 11: 计算楼梯的陡度"
                },
                {
                    "kind": "p",
                    "text": "一个简化的楼梯，总垂直高度为2.4米，水平距离为3.2米。垂直高度是对边，[[a=2.4\\,\\text{m}]]，水平距离是邻边，[[b=3.2\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{2.4}{3.2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "垂直高度是水平距离的75%，角度约为[[36.87^\\circ]]。本计算不能验证楼梯尺寸、舒适度或建筑规范合规性。"
                },
                {
                    "kind": "h3",
                    "text": "例 12: 理解拉线的角度"
                },
                {
                    "kind": "p",
                    "text": "一根拉线固定在距地面12米的杆上，地面锚固点距杆水平距离为5米。固定高度是对边，[[a=12\\,\\text{m}]]，地面距离是邻边，[[b=5\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{12}{5}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=2.4}]]"
                },
                {
                    "kind": "p",
                    "text": "角度为[[A=\\tan^{-1}(2.4)\\approx67.38^\\circ]]。垂直高度是水平锚固距离的2.4倍，怎么看都是一根很陡的拉线。正切比不能决定拉线张力、锚固强度或结构安全。"
                },
                {
                    "kind": "h3",
                    "text": "例 13: 计算起重机吊臂的方向"
                },
                {
                    "kind": "p",
                    "text": "一个简化的起重机吊臂，垂直分量为8米，水平投影为6米。垂直分量是对边，[[a=8\\,\\text{m}]]，水平投影是邻边，[[b=6\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{8}{6}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)\\approx1.3333}]]"
                },
                {
                    "kind": "p",
                    "text": "对应角度约为[[53.13^\\circ]]。垂直分量约为水平投影的1.3333倍。这是一个简化的几何示例，不能证明起重机的起重能力或作业安全。"
                },
                {
                    "kind": "h3",
                    "text": "例 14: 估计徒步小径的坡度"
                },
                {
                    "kind": "p",
                    "text": "一段简化的直线徒步路段，垂直高程增益为120米，水平距离为800米。高程增益是对边，[[a=120\\,\\text{m}]]，水平距离是邻边，[[b=800\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{120}{800}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.15}]]"
                },
                {
                    "kind": "p",
                    "text": "坡度百分比为15%，对应角度约为[[8.53^\\circ]]。这个简化模型表示的是恒定的直线坡度，而不是整条蜿蜒的徒步小径。"
                },
                {
                    "kind": "h3",
                    "text": "例 15: 评估机械斜撑"
                },
                {
                    "kind": "p",
                    "text": "一个对角机械斜撑，垂直分量为1.5米，水平分量为2米。垂直分量是对边，[[a=1.5\\,\\text{m}]]，水平分量是邻边，[[b=2\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{1.5}{2}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "垂直分量是水平分量的75%。该比值不能决定斜撑的强度、承载能力或适用性。"
                },
                {
                    "kind": "h3",
                    "text": "例 16: 求建筑的仰角"
                },
                {
                    "kind": "p",
                    "text": "一名观察者站在距建筑水平距离24米处。建筑顶部高出观察者眼睛水平面18米。垂直高差是对边，[[a=18\\,\\text{m}]]，水平距离是邻边，[[b=24\\,\\text{m}]]："
                },
                {
                    "kind": "p",
                    "text": "[[\\tan(A)=\\frac{18}{24}]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{\\tan(A)=0.75}]]"
                },
                {
                    "kind": "p",
                    "text": "在简化几何下，仰角约为[[36.87^\\circ]]。这是相对于观察者水平视线、朝向建筑顶部的角度，不一定代表建筑总高度。"
                },
                {
                    "kind": "p",
                    "text": "正切是一个无量纲比值，但它的实用价值来自比较垂直升高与水平距离、描述直线坡的陡度、计算仰角，以及在已知角度时求解缺失的边。三个相关量很容易混淆，要分清楚：<strong>正切比</strong>是垂直升高除以水平距离；<strong>坡度百分比</strong>是正切比乘以100%；<strong>角度</strong>是对比值使用反正切得到的结果。仅凭正切永远不能决定结构安全、承载能力、无障碍要求或工程合规性。"
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["情况", "对边 [[a]]", "邻边 [[b]]", "公式", "比值", "坡度", "含义"],
                    "rows": [
                        ["坡道", "0.6 m", "8 m", "0.6/8", "0.075", "7.5%", "缓坡，每100个水平单位升高7.5"],
                        ["屋顶坡度", "3 m", "4 m", "3/4", "0.75", "75%", "升高量是水平距离的75%"],
                        ["梯子", "4 m", "3 m", "4/3", "1.3333", "n/a", "高度超过底部距离，角度53.13度"],
                        ["树木仰角", "12 m", "9 m", "12/9", "1.3333", "n/a", "树高是影长的1.3333倍"],
                        ["测量", "15 m", "20 m", "15/20", "0.75", "75%", "高程是水平距离的75%"],
                        ["公路坡度", "1.2 m", "24 m", "1.2/24", "0.05", "5%", "5%的坡度，不是5度角"],
                        ["楼梯", "2.4 m", "3.2 m", "2.4/3.2", "0.75", "75%", "升高量是水平距离的75%"],
                        ["拉线", "12 m", "5 m", "12/5", "2.4", "n/a", "拉线很陡，角度67.38度"],
                        ["起重机吊臂", "8 m", "6 m", "8/6", "1.3333", "n/a", "垂直分量是水平分量的1.3333倍"],
                        ["徒步小径", "120 m", "800 m", "120/800", "0.15", "15%", "稳定的15%坡度"],
                        ["机械斜撑", "1.5 m", "2 m", "1.5/2", "0.75", "n/a", "垂直分量是水平分量的75%"],
                        ["建筑仰角", "18 m", "24 m", "18/24", "0.75", "n/a", "仰角36.87度"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "四面板：坡道0.075、屋顶坡度0.75、梯子1.3333、测量0.75，每个都有带标注的三角形",
                    "caption": "四个实际计算：坡道、屋顶坡度、梯子和测量，每个都有三角形、公式和比值。"
                }
            ]
        },
        "sec-angle": {
            "h2": "理解正切与角度大小的关系",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正切随参考角增大而增大，几何解释了原因。当角[[A]]较小时，对边相对邻边较短，比值接近0。随着角度变大，对边占邻边的份额越来越长，比值攀升：在[[45^\\circ]]超过1，然后在角度接近[[90^\\circ]]时无界增长。下表使用示意边长；决定角度的是比值，而不是三角形的绝对尺寸。"
                },
                {
                    "kind": "p",
                    "text": "规律很简单：对边相对邻边较短时正切小，在[[45^\\circ]]等于1，较大的锐角对应大于1的值，角度接近[[0^\\circ]]时正切接近零，接近[[90^\\circ]]时无界增长。相同角度的三角形正切比相同，即使边长不同，因为比值捕捉的是形状，不是尺寸。"
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["角 [[A]]", "对边 [[a]]", "邻边 [[b]]", "正切比"],
                    "rows": [
                        ["[[30^\\circ]]", "1", "[[\\sqrt{3}]]", "约为0.5774"],
                        ["[[45^\\circ]]", "1", "1", "1"],
                        ["[[60^\\circ]]", "[[\\sqrt{3}]]", "1", "约为1.7321"],
                        ["[[75^\\circ]]", "约为3.7321", "1", "约为3.7321"]
                    ]
                }
            ],
            "figures": [
                {
                    "alt": "30、45、60度的三个三角形，正切值分别为0.5774、1、1.7321；正切随角度增大而增大",
                    "caption": "随着角A增大，对边占邻边的份额越来越长，因此tan(A)上升。"
                }
            ]
        },
        "sec-side": {
            "h2": "如何用正切求对边",
            "blocks": [
                {
                    "kind": "p",
                    "text": "当已知邻边和角度时，正切公式可以变形求出对边。从[[\\tan(A)=a/b]]出发，两边同乘以[[b]]："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{a=b\\tan(A)}]]]"
                },
                {
                    "kind": "p",
                    "text": "对边等于邻边乘以角的正切。已知邻边[[b=10\\,\\text{m}]]、角度[[A=30^\\circ]]，且已知[[\\tan(30^\\circ)=1/\\sqrt{3}\\approx0.5774]]："
                },
                {
                    "kind": "p",
                    "text": "[[a=10\\times0.5774]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{a\\approx5.774\\,\\text{m}}]]"
                },
                {
                    "kind": "p",
                    "text": "在该角度下，10米的水平距离对应约5.774米的垂直升高。"
                },
                {
                    "kind": "p",
                    "text": "邻边也可以用同样的方式变形求出："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{b=\\frac{a}{\\tan(A)}}]]]"
                },
                {
                    "kind": "p",
                    "text": "已知对边[[a=6\\,\\text{m}]]、[[A=45^\\circ]]：因为[[\\tan(45^\\circ)=1]]，所以[[b=6/1]]，即[[\\boxed{b=6\\,\\text{m}}]]。这些都是同一公式的数学变形。本页的计算器从边长返回正切比；它不能直接计算缺失的边。"
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
            "h2": "已知正切比时如何求角度",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正切比和角度是不同的量：一个是边的无量纲比较，另一个以度为单位测量。当比值已知、需要角度时，可以使用反正切："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{A=\\tan^{-1}\\left(\\frac{a}{b}\\right)}]]]"
                },
                {
                    "kind": "p",
                    "text": "反正切又称为反正切函数。已知[[\\tan(A)=0.75]]："
                },
                {
                    "kind": "p",
                    "text": "[[A=\\tan^{-1}(0.75)]]"
                },
                {
                    "kind": "p",
                    "text": "[[\\boxed{A\\approx36.87^\\circ}]]"
                },
                {
                    "kind": "p",
                    "text": "当计算器设为角度模式时，该角度约为[[36.87^\\circ]]。"
                },
                {
                    "kind": "h3",
                    "text": "为什么计算器的角度模式很重要"
                },
                {
                    "kind": "p",
                    "text": "角度可以用度或弧度测量，科学计算器在使用反正切之前必须设为预定的模式。一整圈是360度或[[2\\pi]]弧度，因此[[45^\\circ=\\pi/4]]弧度。正切比本身既没有度单位也没有弧度单位；这些单位适用于从比值还原出的角度。本页的正切比计算器直接返回比值，不返回角度。"
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
            "h2": "计算正切时的常见错误",
            "blocks": [
                {
                    "kind": "p",
                    "text": "大多数正切错误来自分数写反、边标错，或把比值和角度混淆。在相信结果之前，先过一遍这份清单。"
                }
            ],
            "steps": [
                "<strong>公式写反，算成了[[b/a]]而不是[[a/b]]。</strong> 这得到的是余切，不是正切。当[[a=3]]、[[b=4]]时，写反的分数得到1.3333；正确的得到0.75。",
                "<strong>把正切和正弦混淆。</strong> 正切用对边除以邻边；正弦用对边除以斜边。如果分母是斜边，答案是正弦，不是正切。",
                "<strong>把正切和余弦混淆。</strong> 余弦用邻边除以斜边。正切根本不用斜边，所以无论哪个位置出现斜边，都说明选错了比值。",
                "<strong>把正切和余切混淆。</strong> 余切是倒数，即邻边比对边。名字相似确实会造成错误，但分数的顺序正好相反。",
                "<strong>在基本的正切公式中加入斜边。</strong> 斜边在[[a/b]]中没有任何作用。如果计算中出现了它，说明用错了公式。",
                "<strong>把对边和邻边标反。</strong> 两者都是直角边，标签容易互换。一定要从参考角出发追踪：它对面的边是对边，与它相接的边是邻边。",
                "<strong>相对于错误的参考角辨认边。</strong> 从角[[A]]换到角[[C]]会互换对边和邻边的标签，从而把比值变成它的倒数。",
                "<strong>以为正切必须小于1。</strong> 这条规则属于正弦和余弦。对于锐角，正切没有上限，大于1的结果完全有效。",
                "<strong>把正切比当作角度的度数来报告。</strong> 0.75的结果是一个比值，不是[[0.75^\\circ]]。把它当作度数处理，会让所有后续计算都得出无意义的结果。",
                "<strong>给正切比加上测量单位。</strong> 单位在除法中被约掉了，所以“0.75米”是错误的。写下纯数字，把单位留在它该在的输入测量值里。",
                "<strong>输入零或负数的边长。</strong> 三角形的边不可能是零或负数，所以这类输入意味着录入错误或缺少测量值，不是有效边缘情况。",
                "<strong>混用不兼容的测量单位。</strong> 3米的对边配40厘米的邻边得到7.5，一个毫无意义的数字。先换算成同一单位：3米和4米得到正确的0.75。",
                "<strong>过早四舍五入。</strong> 把中间除法四舍五入到两位小数再继续计算，会累积误差。每一步都保留完整精度，只在最终答案处四舍五入。",
                "<strong>把坡度百分比和角度的度数混淆。</strong> 5%的坡度来自0.05的正切，但角度是[[\\tan^{-1}(0.05)\\approx2.86^\\circ]]，不是5度。坡度和角度是不同的量。",
                "<strong>以为正切比能决定三角形的绝对尺寸。</strong> 正切描述形状，不描述尺寸：无穷多个三角形共享0.75的正切，从3厘米的对边到3公里的对边。比值固定了比例；实际长度至少需要一条边的测量值。"
            ],
            "closingParagraphs": [
                "<strong>错与对：一个完整对比。</strong> 已知对边[[a=3]]、邻边[[b=4]]：",
                "<strong>错误：</strong> [[4/3\\approx1.3333]]。这是角[[A]]的余切比，不是正切比。分子和分母写反了。",
                "<strong>正确：</strong> [[\\tan(A)=3/4=0.75]]。",
                "<strong>用正弦和余弦验证：</strong> 当[[c=5]]时，[[\\sin(A)=3/5=0.6]]且[[\\cos(A)=4/5=0.8]]。因此[[\\sin(A)/\\cos(A)=0.6/0.8=0.75]]，这证实了正切计算。"
            ],
            "listItems": [],
            "related": [],
            "tables": [],
            "figures": []
        },
        "sec-verify": {
            "h2": "如何验证正切结果是否有效",
            "blocks": [
                {
                    "kind": "p",
                    "text": "有效且非退化的直角三角形需要两条正的直角边，[[a \\gt 0]]和[[b \\gt 0]]，以一致的单位测量，因此正切结果必须为正："
                },
                {
                    "kind": "p",
                    "text": "[[[\\boxed{\\tan(A)=\\frac{a}{b} \\gt 0}]]]"
                },
                {
                    "kind": "p",
                    "text": "并不要求对边短于邻边，所以结果可以小于、等于或大于1。零或负的结果通常意味着输入无效或标签写反。"
                },
                {
                    "kind": "h3",
                    "text": "方法一：验证比值"
                },
                {
                    "kind": "p",
                    "text": "直接重新验证[[\\tan(A)=a/b]]。当[[a=3]]、[[b=4]]时：[[\\tan(A)=3/4=0.75]]。因为对边短于邻边，比值应小于1；如果第二遍手算不一致，说明某条边标错了或某处单位混用了。"
                },
                {
                    "kind": "h3",
                    "text": "方法二：验证勾股定理"
                },
                {
                    "kind": "p",
                    "text": "需要时求斜边：[[c=\\sqrt{a^2+b^2}]]。当[[a=3]]、[[b=4]]时：[[c=\\sqrt{9+16}=5]]，且[[3^2+4^2=5^2]]。这证实了3-4-5直角三角形的尺寸。斜边在这里是验证值，不是基本正切公式的一部分。"
                },
                {
                    "kind": "h3",
                    "text": "方法三：用反正切验证"
                },
                {
                    "kind": "p",
                    "text": "对于0.75的正切比：[[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]。因为比值小于1，角度应小于[[45^\\circ]]；如果不是这样，边标签很可能互换了。小的差异可能来自四舍五入。"
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
            "h2": "正切与正弦、余弦和余切",
            "blocks": [
                {
                    "kind": "p",
                    "text": "每个比值比较的是不同的一对边，使用同样的参考角和边标签："
                },
                {
                    "kind": "p",
                    "text": "正切和余切是倒数对：[[\\cot(A)=1/\\tan(A)]]。如果[[\\tan(A)=0.75]]，则[[\\cot(A)\\approx1.3333]]。当两条直角边都已知，或问题涉及垂直升高与水平距离之比时，用正切；当斜边参与计算时，用正弦或余弦；当比较方向反过来时，用余切。正切是核心：相邻比值有各自的页面详细介绍。"
                },
                {
                    "kind": "p",
                    "text": "有关相邻比值，请参阅<a href=\"/sine-ratio-calculator/\" class=\"text-primary hover:underline\">正弦比计算器</a>、<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">余弦比计算器</a>、<a href=\"/cotangent-ratio-calculator/\" class=\"text-primary hover:underline\">余切比计算器</a>、<a href=\"/secant-ratio-calculator/\" class=\"text-primary hover:underline\">正割比计算器</a>和<a href=\"/cosecant-ratio-calculator/\" class=\"text-primary hover:underline\">余割比计算器</a>。"
                }
            ],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [],
            "tables": [
                {
                    "headers": ["比值", "公式", "比较内容"],
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
            "figures": []
        },
        "sec-related": {
            "h2": "探索相关三角计算器",
            "blocks": [],
            "steps": [],
            "closingParagraphs": [],
            "listItems": [],
            "related": [
                {
                    "name": "正弦比计算器",
                    "desc": "根据两条边长计算正弦比，即对边比斜边。"
                },
                {
                    "name": "余弦比计算器",
                    "desc": "根据两条边长计算余弦比，即邻边比斜边。"
                },
                {
                    "name": "余切比计算器",
                    "desc": "根据两条边长计算余切比，即邻边比对边。"
                },
                {
                    "name": "正割比计算器",
                    "desc": "根据两条边长计算正割比，即斜边比邻边。"
                },
                {
                    "name": "余割比计算器",
                    "desc": "根据两条边长计算余割比，即斜边比对边。"
                },
                {
                    "name": "直角三角形角度计算器",
                    "desc": "根据已知边求直角三角形缺失的锐角。"
                },
                {
                    "name": "直角三角形边长计算器",
                    "desc": "根据已知边和角求直角三角形缺失的边长。"
                }
            ],
            "tables": [],
            "figures": []
        },
        "sec-conclusion": {
            "h2": "自信地使用正切比",
            "blocks": [
                {
                    "kind": "p",
                    "text": "正切是两条直角边的比：用对边除以邻边，你就描述了每个水平单位伴随多少个垂直升高单位。公式[[\\tan(A)=a/b]]只需要两次测量，答案永远是一个无量纲数，可以小于、等于或大于1，并且随参考角增大而增大。当需要缺失的边时，[[a=b\\tan(A)]]还原对边；当需要角度时，[[A=\\tan^{-1}(a/b)]]还原角度。无论是坡道、屋顶、梯子，还是教科书上的3-4-5三角形，方法从不改变：认出对边，认出邻边，相除，再用正比值检查法验证。"
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
            "question": "直角三角形的正切比公式是什么？",
            "answer": "tan(A) = a / b：用对边a除以邻边b。当对边为3厘米、邻边为4厘米时，结果为3/4 = 0.75。这个小数就是完整的答案，一个无量纲比值，不是角度。"
        },
        {
            "question": "如何根据两条边长计算正切？",
            "answer": "先确定参考角A，在同一单位下测量对边a和邻边b，确认两者都是正数，然后相除：tan(A) = a / b。在本页，在第一个输入框输入对边，在第二个输入框输入邻边，然后点击 计算 tan(A)。"
        },
        {
            "question": "为什么正切不用斜边？",
            "answer": "正切直接比较两条互相垂直的直角边：垂直对水平。斜边对这个比较没有增加任何新信息，因此基本公式只需要对边和邻边。如果另一个计算需要斜边，勾股定理可以从两条直角边求出它。"
        },
        {
            "question": "正切可以大于1吗？",
            "answer": "可以。对于锐角，正切没有上限。当对边长于邻边时，比值超过1：当a = 6、b = 3时，tan(A) = 6/3 = 2。大于1的结果在数学上有效，不表示计算器出错。"
        },
        {
            "question": "正切值0.75是什么意思？",
            "answer": "对边是邻边的75%。在3-4-5三角形中，角A对面的边为3个单位，角A旁边的边为4个单位，因此tan(A) = 3/4 = 0.75。它描述三角形的形状，不是0.75度的角。"
        },
        {
            "question": "正切和余切有什么区别？",
            "answer": "它们互为倒数。正切用对边除以邻边（a/b）；余切用邻边除以对边（b/a）。如果tan(A) = 0.75，则cot(A) = 1/0.75，约为1.3333。分数的顺序正好相反。"
        },
        {
            "question": "如何从正切比求角度？",
            "answer": "对比值使用反正切：A = tan^-1(a/b)。当tan(A) = 0.75时，A = tan^-1(0.75)，约为36.87度。先把科学计算器设为角度模式。本页的计算器返回的是比值，不是角度。"
        },
        {
            "question": "如何用正切求对边？",
            "answer": "把公式变形为a = b * tan(A)。如果邻边为10米、角A为30度，tan(30度)约为0.5774，因此a = 10 * 0.5774，约为5.774米。这是手动变形；本页的计算器从边长返回比值，不求缺失的边。"
        },
        {
            "question": "如何用正切求邻边？",
            "answer": "把公式变形为b = a / tan(A)。如果对边为6米、角A为45度，tan(45度) = 1，因此b = 6/1 = 6米。这是同一公式的数学变形，不是本页计算器的另一个模式。"
        },
        {
            "question": "正切和斜率一样吗？",
            "answer": "它们密切相关。作为垂直升高与水平距离之比的斜率，与正切做的是同一比较：垂直变化除以水平变化。写出斜率0.05的公路工程师和写出tan(A) = 0.05的三角学学生，描述的是同一个比值。两个术语的差别在语境，不在数学。"
        },
        {
            "question": "坡度百分比和角度的度数有什么区别？",
            "answer": "坡度百分比是正切比的100倍：0.05的正切对应5%的坡度。角度是比值的反正切：tan^-1(0.05)约为2.86度。因此5%的坡度不是5度的角。混淆两者是正切最常见的错误之一。"
        },
        {
            "question": "正切在建筑和测量中如何使用？",
            "answer": "正切比较垂直升高与水平距离，这正是屋顶坡度、坡道斜坡、公路坡度和楼梯陡度所描述的内容。测量人员用它把高程差和水平距离转换为仰角。无论哪种情况，仅凭比值永远不能证明结构安全或规范合规。"
        }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关三角计算器"
}
};
