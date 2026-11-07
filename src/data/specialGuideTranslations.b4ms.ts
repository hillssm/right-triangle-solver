// specialGuideTranslations.bms.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B4_MS = {
  "ms": {
      "meta": {
        "title": "Kalkulator Segi Tiga Khas Bersudut Tegak - Nisbah 45-45-90 dan 30-60-90",
        "description": "Selesaikan segi tiga 45-45-90 dan 30-60-90 dengan Kalkulator Segi Tiga Khas Bersudut Tegak. Gunakan nisbah tetap 1:1:√2 dan 1:√3:2 untuk mencari sisi yang hilang dengan cepat.",
        "primaryKeyword": "Kalkulator Segi Tiga Khas Bersudut Tegak",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navigasi Bahagian",
      "tocItems": {
        "sec-intro": "Kalkulator Segi Tiga Khas Bersudut Tegak",
        "sec-calculate": "Kira Sisi yang Hilang bagi Segi Tiga Khas Bersudut Tegak",
        "sec-what": "Apakah Segi Tiga Khas Bersudut Tegak?",
        "sec-types": "Dua Jenis Utama Segi Tiga Khas Bersudut Tegak",
        "sec-454590": "Memahami Segi Tiga 45-45-90",
        "sec-derive-454590": "Menerbitkan Nisbah Sisi 45-45-90",
        "sec-306090": "Memahami Segi Tiga 30-60-90",
        "sec-derive-306090": "Menerbitkan Nisbah Sisi 30-60-90",
        "sec-compare": "Membandingkan Nisbah Sisi Kedua-dua Segi Tiga Khas",
        "sec-how-hyp-45": "Cara Menggunakan Kalkulator Hipotenus 45-45-90",
        "sec-how-leg-45": "Cara Mencari Kaki daripada Hipotenus 45-45-90",
        "sec-how-long-30": "Cara Menggunakan Kalkulator Kaki Panjang 30-60-90",
        "sec-how-hyp-30": "Cara Menggunakan Kalkulator Hipotenus 30-60-90",
        "sec-examples": "Contoh Langkah demi Langkah untuk Kedua-dua Jenis Segi Tiga Khas",
        "sec-area-perimeter": "Hubungan Luas dan Perimeter dalam Segi Tiga Khas Bersudut Tegak",
        "sec-exact": "Jawapan Tepat Berpunca Berbanding Anggaran Perpuluhan",
        "sec-verify": "Cara Mengesahkan Pengiraan Segi Tiga Khas Bersudut Tegak",
        "sec-mistakes": "Kesilapan Lazim Ketika Menyelesaikan Segi Tiga Khas Bersudut Tegak",
        "sec-applications": "Aplikasi Praktikal Segi Tiga Khas Bersudut Tegak",
        "sec-practice": "Soalan Latihan Berserta Jawapan",
        "sec-related": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
        "sec-faq": "Soalan Lazim",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Selesaikan segi tiga 45-45-90 dan 30-60-90 daripada satu sisi yang diketahui, dengan menggunakan nisbah sisi tetap mereka.",
            },
            {
              "kind": "p",
              "text": "Segi tiga khas bersudut tegak ialah segi tiga bersudut tegak yang sudut-sudutnya menghasilkan nisbah sisi tetap yang tidak pernah berubah, tidak kira betapa besar atau kecil segi tiga itu. Hanya dua pola sudut yang melakukan ini dalam geometri sekolah: segi tiga 45-45-90 dan segi tiga 30-60-90. Kalkulator Segi Tiga Khas Bersudut Tegak di halaman ini merangkumi kedua-dua jenis, jadi satu sisi yang diketahui sudah cukup untuk mencari setiap sisi yang lain.",
            },
            {
              "kind": "p",
              "text": "Segi tiga 45-45-90 mempunyai dua kaki yang sama panjang, dan sisi-sisinya mengikut nisbah [[a : b : c = 1 : 1 : \\sqrt{2}]]. Segi tiga 30-60-90 mempunyai tiga panjang sisi yang berbeza, dan sisi-sisinya mengikut nisbah [[a : b : c = 1 : \\sqrt{3} : 2]]. Di sini [[a]] dan [[b]] ialah kaki dan [[c]] ialah hipotenus, dan maksud [[a]] dan [[b]] berubah mengikut jenis segi tiga, jadi bahagian-bahagian di bawah sentiasa menyatakan jenis yang digunakan.",
            },
            {
              "kind": "p",
              "text": "Jika segi tiga 45-45-90 mempunyai kaki 5 cm, kaki yang satu lagi juga 5 cm dan hipotenusnya ialah [[c = 5\\sqrt{2} \\approx 7.071]] cm. Jika segi tiga 30-60-90 mempunyai kaki pendek 5 cm, kaki panjangnya ialah [[b = 5\\sqrt{3} \\approx 8.660]] cm dan hipotenusnya ialah [[c = 10]] cm. Empat mod kalkulator di halaman ini melaksanakan tepat langkah-langkah ini, dan panduan di bawah menerangkan dari mana setiap nisbah berasal, cara memilih mod yang betul, dan cara menyemak setiap jawapan.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Kira Sisi yang Hilang bagi Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini mempunyai empat mod, satu untuk setiap sisi hilang yang biasanya ditanya dalam soalan segi tiga khas bersudut tegak. Pilih jenis segi tiga dahulu, kemudian pilih sisi yang anda ketahui dan sisi yang anda perlukan. Jadual di bawah menyenaraikan setiap mod berserta input, formula, dan hasilnya.",
            },
          ],
          "table": {
            "headers": [
              "Mod kalkulator",
              "Input yang diperlukan",
              "Hasil",
            ],
            "rows": [
              [
                "45-45-90: Hipotenus",
                "Kaki a",
                "Hipotenus c",
              ],
              [
                "45-45-90: Kaki",
                "Hipotenus c",
                "Kaki a",
              ],
              [
                "30-60-90: Kaki panjang",
                "Kaki pendek a",
                "Kaki panjang b",
              ],
              [
                "30-60-90: Hipotenus",
                "Kaki pendek a",
                "Hipotenus c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Mod 1 mencari hipotenus segi tiga 45-45-90 daripada mana-mana kaki yang sama panjang.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 2 mencari kaki segi tiga 45-45-90 daripada hipotenus.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 3 mencari kaki panjang segi tiga 30-60-90 daripada kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Mod 4 mencari hipotenus segi tiga 30-60-90 daripada kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Untuk menggunakan mana-mana mod, sahkan jenis segi tiga daripada sudut-sudutnya, kenal pasti sisi yang diketahui, masukkan ukuran positif, pilih unit yang sepadan dengan bahagian lain soalan, dan klik Kira. Gunakan Tetapkan Semula sebelum pengiraan baharu supaya nilai lama tidak terbawa ke jawapan seterusnya. Setiap mod memerlukan formula yang berbeza kerana setiap mod bermula daripada sisi diketahui yang berbeza, dan kedua-dua jenis segi tiga mempunyai nisbah yang berbeza, jadi formula 45-45-90 tidak sekali-kali digunakan dalam soalan 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Gambar rajah alir bagi empat mod Kalkulator Segi Tiga Khas Bersudut Tegak: kaki 45-45-90 kepada hipotenus, hipotenus 45-45-90 kepada kaki, kaki pendek 30-60-90 kepada kaki panjang, dan kaki pendek 30-60-90 kepada hipotenus",
            "caption": "Empat mod kalkulator: setiap satunya bermula daripada sisi yang diketahui dan menggunakan satu nisbah tetap.",
          },
        },
        "sec-what": {
          "h2": "Apakah Segi Tiga Khas Bersudut Tegak?",
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga khas bersudut tegak ialah segi tiga bersudut tegak yang ketiga-tiga sudutnya ditetapkan pada nilai yang memaksa sisi-sisinya menjadi satu nisbah yang tidak berubah. Kebanyakan segi tiga bersudut tegak tidak mempunyai jalan pintas sebegini: mengetahui satu sisi tidak memberitahu anda apa-apa tentang sisi yang lain sehingga anda juga mengetahui satu sudut atau satu sisi kedua. Dalam segi tiga khas bersudut tegak, sudut-sudut sahaja sudah menetapkan bentuknya, jadi satu panjang sisi sudah menetapkan seluruh segi tiga.",
            },
            {
              "kind": "p",
              "text": "Teorem Pythagoras masih terpakai, dan ia merupakan alat yang menghasilkan kedua-dua nisbah. Dalam segi tiga 45-45-90, dua kaki yang sama panjang menjadikan teorem itu mengecil kepada [[2a^2 = c^2]], yang memberikan [[c = a\\sqrt{2}]]. Dalam segi tiga 30-60-90, hipotenus adalah dua kali kaki pendek, jadi teorem itu memberikan [[b^2 = (2a)^2 - a^2 = 3a^2]], yang memberikan [[b = a\\sqrt{3}]]. Terbitan penuh terdapat dalam bahagian masing-masing di bawah.",
            },
            {
              "kind": "p",
              "text": "Nisbah kekal sama pada setiap saiz kerana segi tiga-segi tiga itu serupa dalam jenisnya sendiri. Segi tiga 45-45-90 dengan kaki 1 cm dan satu lagi dengan kaki 100 cm mempunyai bentuk yang sama, sudut yang sama, dan nisbah 1:1:√2 yang sama. Kebebasan skala inilah yang menjadikan segi tiga-segi tiga ini sangat berguna dalam geometri dan trigonometri: sebaik sahaja anda mengenali pola sudutnya, anda boleh menulis setiap sisi tanpa mengukur atau menggunakan sinus dan kosinus.",
            },
            {
              "kind": "p",
              "text": "Segi tiga 45-45-90 dan 30-60-90 ialah dua keluarga yang berbeza, bukan dua nama untuk bentuk yang sama. Satu mempunyai dua kaki yang sama panjang dan satu lagi mempunyai tiga panjang sisi yang berbeza. Mengelirukan kedua-duanya ialah kesilapan paling lazim dalam topik ini, jadi bahagian seterusnya memperkenalkan setiap keluarga secara berasingan sebelum panduan ini membandingkannya bersebelahan.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Dua segi tiga khas bersudut tegak bersebelahan: segi tiga 45-45-90 dengan nisbah 1:1:√2 dan segi tiga 30-60-90 dengan nisbah 1:√3:2",
            "caption": "Dua segi tiga khas bersudut tegak: 45-45-90 dengan kaki yang sama panjang, dan 30-60-90 dengan tiga sisi yang berbeza.",
          },
        },
        "sec-types": {
          "h2": "Dua Jenis Utama Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua-dua segi tiga khas ialah segi tiga bersudut tegak, jadi setiap satunya mempunyai sudut 90° dan hipotenus yang bertentangan dengannya. Yang berbeza ialah pasangan sudut tirus, dan sudut tiruslah yang menentukan nisbah sisi. Pelajari setiap jenis secara berasingan dahulu, dan perbandingan di bahagian akhir panduan ini akan mudah diikuti.",
            },
            {
              "kind": "h3",
              "text": "Segi Tiga 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Sudut: 45°, 45°, 90°.",
                "Dua kaki yang sama panjang, jadi mana-mana kaki boleh dijadikan input yang diketahui.",
                "Hipotenus sama dengan kaki didarab √2, [[c = a\\sqrt{2}]].",
                "Nisbah sisi: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Juga dipanggil segi tiga bersudut tegak sama kaki.",
              ],
            },
            {
              "kind": "h3",
              "text": "Segi Tiga 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Sudut: 30°, 60°, 90°.",
                "Kaki pendek [[a]] bertentangan dengan sudut 30°, kaki panjang [[b]] bertentangan dengan sudut 60°.",
                "Hipotenus sama dengan dua kali kaki pendek, [[c = 2a]].",
                "Kaki panjang sama dengan kaki pendek didarab √3, [[b = a\\sqrt{3}]].",
                "Nisbah sisi: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Segi tiga bersudut tegak tak sama sisi, kerana ketiga-tiga sisinya berbeza.",
              ],
            },
            {
              "kind": "p",
              "text": "Perbezaan visualnya jelas sebaik sahaja anda mencarinya. Dalam segi tiga 45-45-90, kedua-dua kaki kelihatan sama panjang, dan hipotenusnya bersudut 45° dengan setiap kaki. Dalam segi tiga 30-60-90, kaki yang bertentangan dengan sudut 30° jelas merupakan sisi terpendek, kaki yang bertentangan dengan sudut 60° lebih panjang, dan hipotenusnya tepat dua kali kaki pendek. Jadual di bawah merumuskan perbezaan itu.",
            },
          ],
          "table": {
            "headers": [
              "Ciri",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sudut",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Nisbah sisi",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kaki sama panjang",
                "Ya",
                "Tidak",
              ],
              [
                "Sisi terpendek",
                "Kedua-dua kaki",
                "Kaki pendek (bertentangan 30°)",
              ],
              [
                "Sisi terpanjang",
                "Hipotenus",
                "Hipotenus",
              ],
              [
                "Formula hipotenus",
                "a√2",
                "2a",
              ],
              [
                "Formula kaki panjang",
                "Tidak berkenaan",
                "a√3",
              ],
              [
                "Jenis segi tiga",
                "Bersudut tegak sama kaki",
                "Bersudut tegak tak sama sisi",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Memahami Segi Tiga 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga 45-45-90 ialah segi tiga bersudut tegak sama kaki. Kedua-dua sudut tirusnya ialah 45°, jadi sudut-sudutnya berjumlah [[45° + 45° + 90° = 180°]], seperti yang mesti berlaku bagi setiap segi tiga. Oleh kerana kedua-dua sudut tirus adalah sama, sisi-sisi yang bertentangan dengannya juga sama, dan itulah sebabnya kedua-dua kaki mempunyai panjang yang sama.",
            },
            {
              "kind": "p",
              "text": "Namakan kaki [[a]] dan [[b]] serta hipotenus [[c]]. Kaki yang sama panjang bermaksud [[a = b]], dan nisbah sisinya ialah [[a : b : c = 1 : 1 : \\sqrt{2}]]. Hipotenus ialah sisi terpanjang, seperti dalam setiap segi tiga bersudut tegak, dan ia lebih panjang daripada mana-mana kaki dengan faktor √2, kira-kira 1.414.",
            },
            {
              "kind": "p",
              "text": "Dua formula kerja ialah hipotenus daripada kaki dan kaki daripada hipotenus.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Ambil kaki 5 cm. Kaki yang satu lagi ialah 5 cm, dan hipotenusnya ialah [[c = 5\\sqrt{2} \\approx 7.071]] cm. Langkah yang sama berfungsi pada sebarang saiz: kaki 12 cm memberikan hipotenus [[12\\sqrt{2} \\approx 16.971]] cm, dan kaki 1 unit memberikan hipotenus √2 unit. <a href=\"/45-45-90-triangle-calculator/\">Kalkulator segi tiga 45-45-90</a> merangkumi jenis segi tiga ini dengan terperinci, termasuk luas dan perimeter.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Segi tiga 45-45-90 dengan dua kaki yang sama panjang ditanda kongruen, sudut 45°, 45°, 90°, dan hipotenus dilabel a√2",
            "caption": "Segi tiga 45-45-90: kaki yang sama panjang, sudut tirus yang sama, dan hipotenus a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Menerbitkan Nisbah Sisi 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Nisbah 1:1:√2 bukan peraturan yang perlu dihafal tanpa memahami. Ia terbit dalam beberapa langkah daripada teorem Pythagoras, dan melihat langkah-langkahnya sekali sahaja menjadikan nisbah itu sukar dilupakan. Mulakan dengan hakikat bahawa kaki-kakinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Gunakan teorem Pythagoras pada kaki-kaki dan hipotenus.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Gantikan [[b]] dengan [[a]], kerana kaki-kakinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Gabungkan dua sebutan yang sama.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambil punca kuasa dua positif kedua-dua belah. Panjang adalah positif, jadi punca negatif diketepikan.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Letakkan [[a = 1]] dan nisbah itu muncul secara langsung: kaki 1 dan 1, hipotenus √2, jadi nisbahnya ialah [[1 : 1 : \\sqrt{2}]]. Nisbah yang sama juga menerangkan pepenjuru sebuah segi empat sama. Segi empat sama dengan sisi [[a]] mempunyai pepenjuru yang membahagikannya kepada dua segi tiga 45-45-90 yang kongruen, dan pepenjuru itu ialah hipotenus bagi mana-mana satu daripadanya, jadi pepenjuru itu sama dengan [[a\\sqrt{2}]]. Segi empat sama dengan sisi 8 cm mempunyai pepenjuru [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Segi tiga 45-45-90 berlabel yang menunjukkan terbitan Pythagoras a kuasa dua tambah a kuasa dua sama dengan c kuasa dua, memberikan c sama dengan a darab punca kuasa dua 2",
              "caption": "Terbitan Pythagoras: kaki yang sama panjang mengubah a² + b² = c² menjadi 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Segi empat sama dengan sisi 8 cm dan pepenjuru 8 punca kuasa dua 2 cm, dibahagi kepada dua segi tiga 45-45-90 yang kongruen",
              "caption": "Pepenjuru segi empat sama membahagikan segi empat sama itu kepada dua segi tiga 45-45-90 yang kongruen.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Memahami Segi Tiga 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga 30-60-90 mempunyai tiga sudut yang berbeza, jadi ia mempunyai tiga panjang sisi yang berbeza. Sisi yang bertentangan dengan sudut terkecil ialah sisi terpendek, sisi yang bertentangan dengan sudut pertengahan ialah sisi pertengahan, dan sisi yang bertentangan dengan sudut 90° ialah hipotenus. Peraturan sisi bertentangan inilah kunci untuk melabel segi tiga ini dengan betul.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a]] untuk kaki pendek yang bertentangan dengan 30°, [[b]] untuk kaki panjang yang bertentangan dengan 60°, dan [[c]] untuk hipotenus yang bertentangan dengan 90°. Dua formula kerja ialah kaki panjang daripada kaki pendek dan hipotenus daripada kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Nisbah sisinya ialah [[a : b : c = 1 : \\sqrt{3} : 2]], dengan √3 kira-kira 1.732. Ambil kaki pendek 5 cm. Kaki panjangnya ialah [[b = 5\\sqrt{3} \\approx 8.660]] cm dan hipotenusnya ialah [[c = 10]] cm. Semak dengan teorem Pythagoras: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], yang mengesahkan ketiga-tiga sisi itu sepadan.",
            },
            {
              "kind": "p",
              "text": "Hipotenus sentiasa tepat dua kali kaki pendek, dan inilah semakan terpantas dalam topik ini. Jika soalan menyatakan hipotenus ialah 14 cm, kaki pendeknya ialah 7 cm serta-merta, dan kaki panjang menyusul sebagai [[7\\sqrt{3} \\approx 12.124]] cm. <a href=\"/30-60-90-triangle-calculator/\">Kalkulator segi tiga 30-60-90</a> merangkumi jenis segi tiga ini dengan terperinci, termasuk terbitan segi tiga sama sisinya.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Segi tiga 30-60-90 dengan kaki pendek a bertentangan dengan 30 darjah, kaki panjang a punca kuasa dua 3 bertentangan dengan 60 darjah, dan hipotenus 2a bertentangan dengan 90 darjah",
            "caption": "Segi tiga 30-60-90: kaki pendek terletak bertentangan dengan 30°, kaki panjang bertentangan dengan 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Menerbitkan Nisbah Sisi 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Nisbah 1:√3:2 berasal daripada segi tiga sama sisi, dan pembinaannya wajar diikuti langkah demi langkah. Mulakan dengan segi tiga sama sisi yang panjang sisinya ialah [[2a]]. Ketiga-tiga sudutnya ialah 60° dan ketiga-tiga sisinya sama panjang.",
            },
            {
              "kind": "p",
              "text": "Lukis satu tinggi dari satu bucu ke sisi bertentangan. Tinggi itu melakukan tiga perkara serentak: ia membahagikan segi tiga sama sisi itu kepada dua segi tiga bersudut tegak yang kongruen, ia memotong tapak menjadi dua segmen yang panjangnya [[a]], dan ia membahagikan satu sudut 60° kepada dua sudut 30°. Setiap separuh kini menjadi segi tiga dengan sudut 30°, 60°, dan 90°.",
            },
            {
              "kind": "p",
              "text": "Dalam mana-mana separuh, hipotenusnya ialah sisi asal segi tiga sama sisi, [[2a]], dan kaki pendeknya ialah separuh tapak, [[a]]. Namakan tinggi itu, iaitu kaki panjang, [[b]]. Gunakan teorem Pythagoras pada segi tiga separuh itu.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Kembangkan kuasa dua itu.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Permudahkan.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambil punca kuasa dua positif.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Letakkan [[a = 1]] dan nisbah itu muncul: kaki pendek 1, kaki panjang √3, hipotenus 2, jadi nisbahnya ialah [[1 : \\sqrt{3} : 2]]. Tinggi segi tiga sama sisi dengan sisi 10 cm oleh itu ialah [[5\\sqrt{3} \\approx 8.660]] cm, kerana tinggi itu ialah kaki panjang segi tiga 30-60-90 dengan kaki pendek 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Segi tiga sama sisi dengan sisi 2a dibahagi oleh satu tinggi kepada dua segi tiga 30-60-90 yang kongruen, setiap satunya dengan kaki pendek a, kaki panjang a punca kuasa dua 3, dan hipotenus 2a",
            "caption": "Satu tinggi membahagikan segi tiga sama sisi kepada dua segi tiga 30-60-90 yang kongruen.",
          },
        },
        "sec-compare": {
          "h2": "Membandingkan Nisbah Sisi Kedua-dua Segi Tiga Khas",
          "blocks": [
            {
              "kind": "p",
              "text": "Kedua-dua nisbah kelihatan serupa pada pandangan pertama, dan inilah tepatnya sebab ia sering tertukar. Kedua-duanya mengandungi punca kuasa dua dan satu nombor bulat kecil, dan kedua-duanya menerangkan segi tiga bersudut tegak. Tetapi nombor-nombor itu terletak di tempat yang berbeza: dalam 1:1:√2, punca itu terletak pada hipotenus, manakala dalam 1:√3:2, punca itu terletak pada kaki panjang dan hipotenusnya ialah nombor bulat 2.",
            },
          ],
          "table": {
            "headers": [
              "Ciri",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Sudut",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Nisbah sisi",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kaki sama panjang",
                "Ya",
                "Tidak",
              ],
              [
                "Sisi terpendek",
                "Kedua-dua kaki",
                "Kaki pendek",
              ],
              [
                "Sisi terpanjang",
                "Hipotenus",
                "Hipotenus",
              ],
              [
                "Formula hipotenus",
                "a√2",
                "2a",
              ],
              [
                "Formula kaki panjang",
                "Tidak berkenaan",
                "a√3",
              ],
              [
                "Jenis segi tiga",
                "Bersudut tegak sama kaki",
                "Bersudut tegak tak sama sisi",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Formula-formula itu tidak boleh ditukar ganti. Mendarab kaki pendek 30-60-90 dengan √2 memberikan hipotenus yang salah, dan menggandakan kaki 45-45-90 memberikan hipotenus yang salah. Kedua-dua segi tiga berasal daripada pembinaan yang berbeza, pepenjuru segi empat sama untuk 45-45-90 dan tinggi segi tiga sama sisi untuk 30-60-90, jadi nisbah mereka menjawab soalan geometri yang berbeza.",
            },
            {
              "kind": "p",
              "text": "Satu contoh berangka untuk setiap jenis menunjukkan jurangnya. Segi tiga 45-45-90 dengan kaki 5 cm mempunyai hipotenus [[5\\sqrt{2} \\approx 7.071]] cm. Segi tiga 30-60-90 dengan kaki pendek 5 cm mempunyai hipotenus 10 cm dan kaki panjang [[5\\sqrt{3} \\approx 8.660]] cm. Nombor permulaan yang sama, jawapan yang sangat berbeza, dan satu-satunya cara untuk membezakannya ialah pola sudutnya.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Perbandingan bersebelahan nisbah 45-45-90 1:1:√2 dan nisbah 30-60-90 1:√3:2 pada skala yang sepadan",
            "caption": "Kedua-dua nisbah pada skala yang sepadan: puncanya terletak pada hipotenus untuk 45-45-90, dan pada kaki panjang untuk 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Cara Menggunakan Kalkulator Hipotenus 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 1 ialah mod yang paling banyak digunakan di halaman ini, dan ia hanya mengambil beberapa saat sebaik sahaja jenis segi tiga disahkan. Ikut langkah-langkah mengikut urutan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Sahkan segi tiga itu ialah 45-45-90: kedua-dua sudut tirus berukuran 45°.",
                "Pilih mana-mana kaki yang sama panjang sebagai sisi yang diketahui, kerana kedua-dua kaki mempunyai panjang yang sama.",
                "Pilih mod hipotenus 45-45-90 dalam kalkulator.",
                "Masukkan panjang kaki sebagai nombor positif.",
                "Pilih unit yang sepadan dengan bahagian lain soalan.",
                "Klik Kira Hipotenus c.",
                "Baca hasilnya, iaitu hipotenus dalam unit yang sama.",
                "Gunakan Tetapkan Semula sebelum memulakan pengiraan baharu.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod ini menggunakan formula di bawah.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki 7 cm, hipotenusnya ialah [[c = 7\\sqrt{2} \\approx 9.899]] cm. Formula ini sah hanya apabila kedua-dua sudut tirus ialah 45°, jadi semak sudut-sudutnya sebelum mempercayai jawapannya. Jika sudutnya ialah 30° dan 60° pula, tukar kepada mod 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Cara Mencari Kaki daripada Hipotenus 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 2 berfungsi secara songsang daripada hipotenus kepada kaki. Ia membahagi dengan √2, iaitu langkah yang paling kerap dilupakan. Formulanya ditunjukkan di bawah.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Hasil yang sama boleh ditulis dalam bentuk ternasional, yang mengelakkan punca dalam penyebut.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Untuk menggunakan mod ini, sahkan pola sudut 45-45-90, pilih mod kaki 45-45-90, masukkan hipotenus, pilih unit, dan klik Kira. Dengan hipotenus 10 cm, kakinya ialah [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Kedua-dua kaki mempunyai panjang ini, kerana kaki-kakinya sama panjang, jadi satu jawapan ini menerangkan seluruh segi tiga. Semakan pantas: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], yang sepadan dengan kuasa dua hipotenus.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Cara Menggunakan Kalkulator Kaki Panjang 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 3 mencari kaki panjang daripada kaki pendek, dan satu-satunya bahagian sukar ialah mengenal pasti kaki pendek dengan betul. Kaki pendek ialah sisi yang bertentangan dengan sudut 30°, dan ia sentiasa merupakan sisi terpendek segi tiga itu.",
            },
            {
              "kind": "steps",
              "steps": [
                "Sahkan segi tiga itu ialah 30-60-90 daripada sudut-sudutnya.",
                "Cari sisi yang bertentangan dengan sudut 30°: itulah kaki pendek.",
                "Pilih mod kaki panjang 30-60-90 dalam kalkulator.",
                "Masukkan kaki pendek sebagai nombor positif.",
                "Pilih unit yang sepadan dengan bahagian lain soalan.",
                "Klik Kira Kaki Panjang.",
                "Baca hasilnya, iaitu kaki panjang dalam unit yang sama.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod ini menggunakan formula di bawah.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki pendek 6 cm, kaki panjangnya ialah [[b = 6\\sqrt{3} \\approx 10.392]] cm. Memasukkan hipotenus atau kaki panjang secara tersilap memberikan jawapan yang salah, jadi labelkan sisi-sisi itu dahulu dan masukkan kaki pendek sahaja.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Cara Menggunakan Kalkulator Hipotenus 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Mod 4 ialah mod paling mudah di halaman ini, kerana hipotenus segi tiga 30-60-90 tepat dua kali kaki pendek. Tiada punca kuasa dua yang terlibat, yang menjadikan jawapannya mudah disemak dengan tangan.",
            },
            {
              "kind": "steps",
              "steps": [
                "Sahkan segi tiga itu ialah 30-60-90 daripada sudut-sudutnya.",
                "Kenal pasti kaki pendek, sisi yang bertentangan dengan sudut 30°.",
                "Pilih mod hipotenus 30-60-90 dalam kalkulator.",
                "Masukkan kaki pendek sebagai nombor positif.",
                "Pilih unit yang sepadan dengan bahagian lain soalan.",
                "Klik Kira Hipotenus c.",
                "Baca hasilnya, iaitu hipotenus dalam unit yang sama.",
              ],
            },
            {
              "kind": "p",
              "text": "Mod ini menggunakan formula di bawah.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Dengan kaki pendek 8 cm, hipotenusnya ialah [[c = 16]] cm. Kaki panjang untuk segi tiga yang sama ialah [[8\\sqrt{3} \\approx 13.856]] cm, yang terletak antara kaki pendek dan hipotenus, seperti yang sepatutnya. Jika keputusan yang keluar lebih kecil daripada kaki pendek, mod yang salah telah dipilih.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Contoh Langkah demi Langkah untuk Kedua-dua Jenis Segi Tiga Khas",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua contoh kerja ini menyelesaikan setiap sisi bagi setiap jenis segi tiga daripada satu sisi yang diketahui. Luas dan perimeter muncul di sini sebagai pengiraan manual tambahan, bukan sebagai mod kalkulator: kalkulator di halaman ini hanya mencari panjang sisi.",
            },
            {
              "kind": "h3",
              "text": "Contoh 1: Segi Tiga 45-45-90",
            },
            {
              "kind": "p",
              "text": "Diberi segi tiga 45-45-90 dengan kaki [[a = 5]] cm, cari kaki yang satu lagi, hipotenus, luas, dan perimeter.",
            },
            {
              "kind": "p",
              "text": "Kaki-kakinya sama panjang, jadi kaki yang satu lagi ialah [[b = 5]] cm. Hipotenus menyusul daripada nisbah.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Luas ialah separuh hasil darab kaki-kaki itu.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Perimeter ialah jumlah ketiga-tiga sisi.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Segi Tiga 30-60-90",
            },
            {
              "kind": "p",
              "text": "Diberi segi tiga 30-60-90 dengan kaki pendek [[a = 5]] cm, cari kaki panjang, hipotenus, luas, dan perimeter.",
            },
            {
              "kind": "p",
              "text": "Kaki panjang ialah kaki pendek didarab √3, dan hipotenus ialah dua kali kaki pendek.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Luas ialah separuh hasil darab kaki-kaki itu.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Perimeter ialah jumlah ketiga-tiga sisi.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Kedua-dua contoh disahkan dengan teorem Pythagoras. Untuk yang pertama, [[5^2 + 5^2 = 50]] dan [[7.071^2 \\approx 50]]. Untuk yang kedua, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Hubungan Luas dan Perimeter dalam Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Luas dan perimeter ialah pengiraan susulan yang berguna sebaik sahaja sisi-sisi diketahui, tetapi ia merupakan hubungan manual, bukan fungsi kalkulator di halaman ini. Formula di bawah menggunakan label sisi yang sama seperti bahagian lain panduan ini, dengan [[a]] sebagai kaki yang diketahui untuk 45-45-90 dan kaki pendek untuk 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga 45-45-90, luas ialah separuh kuasa dua kaki, dan perimeter ialah kaki didarab [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga 30-60-90, luas ialah separuh hasil darab kaki-kaki, dan perimeter ialah kaki pendek didarab [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Ambil segi tiga 45-45-90 dengan kaki 6 cm. Luasnya ialah [[A = \\frac{36}{2} = 18]] cm², dan perimeternya ialah [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Ambil segi tiga 30-60-90 dengan kaki pendek 6 cm. Luasnya ialah [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², dan perimeternya ialah [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Pastikan unitnya betul: luas sentiasa dalam unit persegi dan perimeter dalam unit linear, jadi jawapan 18 cm untuk luas ialah kesilapan unit, bukan kesilapan pembundaran.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Jawapan Tepat Berpunca Berbanding Anggaran Perpuluhan",
          "blocks": [
            {
              "kind": "p",
              "text": "Punca kuasa dua dalam panduan ini ialah nombor tak nisbah, yang bermaksud pengembangan perpuluhannya tidak pernah berakhir dan tidak pernah berulang. Dua nilai yang perlu diketahui ditunjukkan di bawah.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Jawapan tepat mengekalkan punca itu, seperti [[5\\sqrt{2}]], manakala jawapan perpuluhan menggantikannya dengan anggaran, seperti [[5\\sqrt{2} \\approx 7.071]]. Jawapan tepat diutamakan dalam matematik sekolah kerana ia tidak membawa ralat pembundaran dan ia menunjukkan struktur soalan. Guru dapat melihat dengan serta-merta bahawa [[5\\sqrt{2}]] berasal daripada segi tiga 45-45-90, manakala 7.071 boleh berasal dari mana-mana sahaja.",
            },
            {
              "kind": "p",
              "text": "Perpuluhan lebih baik untuk ukuran praktikal, apabila pembaris atau alat pemotong memerlukan nombor, bukan simbol. Apabila perpuluhan diperlukan, bundarkan hanya pada akhir pengiraan, bukan di tengah-tengahnya. Membundarkan √2 kepada 1.41 sebelum mendarab dengan 5 memberikan 7.05, yang tersasar sebanyak 0.021 daripada nilai sebenar 7.071, dan ralat itu bertambah dengan nombor yang lebih besar. Labelkan setiap perpuluhan dengan tanda lebih kurang sama, supaya pembaca tidak sekali-kali menyangka [[5\\sqrt{3} \\approx 8.660]] sebagai kesamaan tepat.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Mengesahkan Pengiraan Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Setiap jawapan segi tiga khas boleh disemak dalam masa kurang seminit dengan tiga ujian: nisbah sisi, teorem Pythagoras, dan jumlah sudut. Jalankan sekurang-kurangnya dua daripadanya sebelum mempercayai sesuatu keputusan.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga 45-45-90, semak bahawa kaki-kakinya sama panjang, [[a = b]], dan sisi-sisinya memenuhi teorem Pythagoras, [[a^2 + b^2 = c^2]]. Dengan [[a = 5]] cm dan [[c = 7.071]] cm, semakannya ialah [[25 + 25 = 50]] berbanding [[7.071^2 \\approx 50]], yang bersetuju.",
            },
            {
              "kind": "p",
              "text": "Untuk segi tiga 30-60-90, semak bahawa kaki panjang ialah kaki pendek didarab √3, [[b = a\\sqrt{3}]], bahawa hipotenus ialah dua kali kaki pendek, [[c = 2a]], dan bahawa [[a^2 + b^2 = c^2]]. Dengan [[a = 5]] cm, [[b = 8.660]] cm, dan [[c = 10]] cm, semakannya ialah [[25 + 75 = 100 = 10^2]], yang bersetuju.",
            },
            {
              "kind": "p",
              "text": "Juga sahkan jumlah sudut: ketiga-tiga sudut mesti berjumlah 180°. Segi tiga 45-45-90 memberikan [[45° + 45° + 90° = 180°]], dan segi tiga 30-60-90 memberikan [[30° + 60° + 90° = 180°]]. Jika nisbah, teorem, dan sudut-sudut semuanya bersetuju, jawapannya kukuh. Jika mana-mana satu daripadanya gagal, jenis segi tiga telah dikenal pasti dengan salah atau formula yang salah telah digunakan.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesilapan Lazim Ketika Menyelesaikan Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat belas kesilapan menyebabkan hampir setiap jawapan yang salah dalam topik ini. Setiap satunya disenaraikan di bawah berserta pendekatan yang betul, supaya anda dapat mengesan kesilapan anda sendiri dengan cepat.",
            },
            {
              "kind": "list",
              "items": [
                "Mengelirukan segi tiga 45-45-90 dengan segi tiga 30-60-90. Semak sudut-sudut dahulu: dua sudut 45° bermaksud 45-45-90, manakala 30° dan 60° bermaksud 30-60-90.",
                "Menggunakan √3 dan bukannya √2. Hipotenus 45-45-90 ialah [[c = a\\sqrt{2}]], bukan [[a\\sqrt{3}]].",
                "Menggunakan √2 dan bukannya √3. Kaki panjang 30-60-90 ialah [[b = a\\sqrt{3}]], bukan [[a\\sqrt{2}]].",
                "Menganggap kedua-dua kaki sama panjang dalam segi tiga 30-60-90. Hanya segi tiga 45-45-90 mempunyai kaki yang sama panjang; dalam 30-60-90, kaki panjang ialah √3 kali kaki pendek.",
                "Menganggap kaki pendek dan kaki panjang sama panjang. Kaki pendek terletak bertentangan dengan 30° dan kaki panjang bertentangan dengan 60°, jadi ia berbeza dengan faktor √3.",
                "Lupa bahawa hipotenus 30-60-90 sama dengan dua kali kaki pendek. Ia ialah [[c = 2a]], penggandaan nombor bulat tanpa punca kuasa dua.",
                "Menggunakan sisi input yang salah. Mod 3 dan Mod 4 kedua-duanya memerlukan kaki pendek, jadi memasukkan kaki panjang atau hipotenus memberikan jawapan yang salah.",
                "Mengelirukan kaki pendek dengan hipotenus. Hipotenus ialah sisi terpanjang dan terletak bertentangan dengan sudut 90°; kaki pendek ialah sisi terpendek.",
                "Lupa membahagi dengan √2 ketika mencari kaki 45-45-90. Kakinya ialah [[a = \\frac{c}{\\sqrt{2}}]], bukan [[a = c\\sqrt{2}]], yang akan menjadikan kaki lebih panjang daripada hipotenus.",
                "Lupa mendarab dengan √3 ketika mencari kaki panjang 30-60-90. Kaki panjang ialah [[b = a\\sqrt{3}]], dan menggunakan [[a]] sahaja memberikan kaki pendek semula.",
                "Membundarkan punca terlalu awal. Kekalkan [[\\sqrt{2}]] dan [[\\sqrt{3}]] tepat sepanjang setiap langkah dan bundarkan hanya jawapan akhir.",
                "Mencampur unit. Kaki dalam cm dan hipotenus dalam mm tidak boleh berkongsi satu formula; tukar dahulu, kemudian kira.",
                "Mengelirukan luas dan perimeter. Luas menggunakan unit persegi dan formula [[A = \\frac{a^2}{2}]] untuk 45-45-90, manakala perimeter menggunakan unit linear dan [[P = a(2 + \\sqrt{2})]].",
                "Menggunakan formula segi tiga khas pada segi tiga bersudut tegak sewenang-wenangnya. Nisbah 1:1:√2 dan 1:√3:2 hanya berfungsi untuk pola sudut masing-masing; segi tiga 20-70-90 memerlukan trigonometri pula.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplikasi Praktikal Segi Tiga Khas Bersudut Tegak",
          "blocks": [
            {
              "kind": "p",
              "text": "Segi tiga khas bersudut tegak muncul di mana-mana segi empat sama, segi tiga sama sisi, dan sudut piawai wujud. Pepenjuru segi empat sama ialah masalah 45-45-90: meja segi empat sama dengan sisi 60 cm mempunyai pepenjuru [[60\\sqrt{2} \\approx 84.853]] cm. Tinggi segi tiga sama sisi ialah masalah 30-60-90: papan tanda segi tiga dengan sisi 40 cm mempunyai tinggi [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "Di dalam kelas, segi tiga-segi tiga ini menjadikan kerja rumah geometri dan latihan trigonometri lebih pantas, kerana sudut piawai seperti 30°, 45°, dan 60° mempunyai nilai sinus dan kosinus tepat yang datang terus daripada nisbah-nisbah ini. Dalam lukisan teknikal dan draf sudut piawai, sesiku 45° dan 30-60 dibina tepat berdasarkan segi tiga-segi tiga ini, jadi pelukis pelan boleh melukis garisan 45° atau garisan 30° dengan mengetahui perkadaran sisi lebih awal.",
            },
            {
              "kind": "p",
              "text": "Konsep seni bina dan reka bentuk menggunakan pola yang sama untuk pendakap pepenjuru, cerun bumbung, dan susun atur jubin, dan geometri pembinaan menggunakannya untuk semakan pantas di tapak, seperti mengesahkan sudut adalah tepat dengan mengukur pepenjuru gaya 3-4-5 atau pepenjuru 45-45-90. Pemodelan matematik dan demonstrasi bilik darjah menggunakannya juga, kerana jawapan punca tepat itu mengekalkan penaakulan yang kelihatan dan bukannya menyembunyikannya di dalam kalkulator. Anggap ini sebagai jalan pintas geometri untuk perancangan dan semakan, bukan pengganti ukuran kejuruteraan yang betul apabila ketepatan diperlukan.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soalan Latihan Berserta Jawapan",
          "blocks": [
            {
              "kind": "p",
              "text": "Kerjakan setiap soalan sendiri, kemudian semak penyelesaiannya. Soalan luas dan perimeter ialah latihan manual, bukan mod kalkulator. Gunakan nombor yang berbeza daripada contoh utama supaya pola itu perlu digunakan semula.",
            },
            {
              "kind": "h3",
              "text": "Soalan 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Segi tiga 45-45-90 mempunyai kaki 7 cm. Cari hipotenus. Penyelesaian: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Segi tiga 45-45-90 mempunyai hipotenus 12 cm. Cari kaki. Penyelesaian: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Segi tiga 45-45-90 mempunyai kaki 9 cm. Cari luas. Penyelesaian: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Segi tiga 45-45-90 mempunyai kaki 4 cm. Cari perimeter. Penyelesaian: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Soalan 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Segi tiga 30-60-90 mempunyai kaki pendek 7 cm. Cari kaki panjang. Penyelesaian: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Segi tiga 30-60-90 mempunyai kaki pendek 9 cm. Cari hipotenus. Penyelesaian: [[c = 2 \\times 9 = 18]] cm.",
                "Segi tiga 30-60-90 mempunyai kaki pendek 6 cm. Cari luas. Penyelesaian: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Segi tiga 30-60-90 mempunyai kaki pendek 10 cm. Cari perimeter. Penyelesaian: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
      "relatedIntro": "Setiap alat di bawah menyelesaikan jenis masalah segi tiga bersudut tegak yang berbeza. Pilih alat yang sepadan dengan maklumat yang sudah anda ada.",
      "relatedItems": [
        "Kalkulator Segi Tiga 45-45-90",
        "Kalkulator Segi Tiga 30-60-90",
        "Kalkulator Sisi Segi Tiga Bersudut Tegak",
        "Kalkulator Nisbah Trigonometri",
        "Kalkulator Sudut Segi Tiga Bersudut Tegak",
        "Kalkulator Teorem Pythagoras",
      ],
      "faqHeading": "Soalan Lazim",
      "faqs": [
        {
          "question": "Apakah segi tiga khas bersudut tegak?",
          "answer": "Segi tiga khas bersudut tegak ialah segi tiga bersudut tegak yang sudut-sudutnya menetapkan nisbah sisinya, jadi satu sisi yang diketahui menentukan setiap sisi yang lain. Dua jenisnya ialah segi tiga 45-45-90, dengan nisbah [[1 : 1 : \\sqrt{2}]], dan segi tiga 30-60-90, dengan nisbah [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Segi tiga khas bersudut tegak manakah yang diliputi oleh kalkulator ini?",
          "answer": "Kalkulator ini merangkumi segi tiga 45-45-90 dan segi tiga 30-60-90, dua segi tiga khas bersudut tegak yang digunakan dalam geometri sekolah. Ia mempunyai empat mod: hipotenus 45-45-90 daripada kaki, kaki 45-45-90 daripada hipotenus, kaki panjang 30-60-90 daripada kaki pendek, dan hipotenus 30-60-90 daripada kaki pendek.",
        },
        {
          "question": "Apakah nisbah sisi segi tiga 45-45-90?",
          "answer": "Nisbah sisi segi tiga 45-45-90 ialah [[1 : 1 : \\sqrt{2}]]. Kedua-dua kakinya sama panjang, dan hipotenusnya ialah kaki didarab √2, kira-kira 1.414. Dengan kaki 5 cm, hipotenusnya ialah [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Apakah nisbah sisi segi tiga 30-60-90?",
          "answer": "Nisbah sisi segi tiga 30-60-90 ialah [[1 : \\sqrt{3} : 2]]. Kaki pendek terletak bertentangan dengan 30°, kaki panjang bertentangan dengan 60°, dan hipotenus bertentangan dengan 90°. Dengan kaki pendek 5 cm, kaki panjangnya ialah [[5\\sqrt{3} \\approx 8.660]] cm dan hipotenusnya ialah 10 cm.",
        },
        {
          "question": "Mengapakah √2 muncul dalam segi tiga 45-45-90?",
          "answer": "√2 berasal daripada teorem Pythagoras yang digunakan pada dua kaki yang sama panjang. Dengan [[a = b]], teorem itu memberikan [[a^2 + a^2 = c^2]], jadi [[2a^2 = c^2]] dan [[c = a\\sqrt{2}]]. Punca itu ialah harga untuk mengubah dua segi empat sama yang sama menjadi satu segi empat sama hipotenus.",
        },
        {
          "question": "Mengapakah √3 muncul dalam segi tiga 30-60-90?",
          "answer": "√3 berasal daripada membahagikan segi tiga sama sisi kepada dua. Satu tinggi membahagikan segi tiga sama sisi dengan sisi [[2a]] kepada dua segi tiga 30-60-90, dan teorem Pythagoras pada satu separuh memberikan [[b^2 = 3a^2]], jadi kaki panjangnya ialah [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Bagaimanakah saya mencari hipotenus segi tiga 45-45-90?",
          "answer": "Darabkan mana-mana kaki yang sama panjang dengan √2. Formulanya ialah [[c = a\\sqrt{2}]]. Sebagai contoh, kaki 7 cm memberikan hipotenus [[7\\sqrt{2} \\approx 9.899]] cm. Pilih mod hipotenus 45-45-90, masukkan kaki, dan klik Kira.",
        },
        {
          "question": "Bagaimanakah saya mencari kaki panjang segi tiga 30-60-90?",
          "answer": "Darabkan kaki pendek dengan √3. Formulanya ialah [[b = a\\sqrt{3}]]. Sebagai contoh, kaki pendek 6 cm memberikan kaki panjang [[6\\sqrt{3} \\approx 10.392]] cm. Pastikan anda memasukkan kaki pendek, sisi yang bertentangan dengan sudut 30°, bukan hipotenus.",
        },
        {
          "question": "Bolehkah saya mengira kaki yang hilang daripada hipotenus?",
          "answer": "Ya, untuk segi tiga 45-45-90. Bahagikan hipotenus dengan √2, menggunakan [[a = \\frac{c}{\\sqrt{2}}]] atau bentuk ternasional [[a = \\frac{c\\sqrt{2}}{2}]]. Hipotenus 10 cm memberikan kaki [[5\\sqrt{2} \\approx 7.071]] cm, dan kedua-dua kaki berkongsi panjang itu.",
        },
        {
          "question": "Adakah semua segi tiga khas bersudut tegak serupa dalam jenisnya sendiri?",
          "answer": "Ya. Setiap segi tiga 45-45-90 mempunyai sudut yang sama dan nisbah 1:1:√2 yang sama, jadi mana-mana dua daripadanya adalah serupa. Setiap segi tiga 30-60-90 juga berkongsi nisbah 1:√3:2. Segi tiga 45-45-90 tidak sekali-kali serupa dengan segi tiga 30-60-90, kerana sudut-sudut mereka berbeza.",
        },
        {
          "question": "Apakah perbezaan antara kedua-dua jenis segi tiga khas?",
          "answer": "Segi tiga 45-45-90 mempunyai dua kaki yang sama panjang dan nisbah 1:1:√2, manakala segi tiga 30-60-90 mempunyai tiga sisi yang berbeza dan nisbah 1:√3:2. Yang pertama berasal daripada pepenjuru segi empat sama, yang kedua daripada tinggi segi tiga sama sisi, dan formula mereka tidak boleh ditukar ganti.",
        },
        {
          "question": "Bagaimanakah saya boleh mengesahkan panjang sisi yang saya kira?",
          "answer": "Semak nisbah sisi, teorem Pythagoras, dan jumlah sudut. Untuk 45-45-90, sahkan [[a = b]] dan [[a^2 + b^2 = c^2]]. Untuk 30-60-90, sahkan [[b = a\\sqrt{3}]], [[c = 2a]], dan [[a^2 + b^2 = c^2]]. Jika ketiga-tiga semakan bersetuju, jawapannya kukuh.",
        },
      ],
    },
};
