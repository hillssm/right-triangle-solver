// circumradiusGuideTranslations.bid.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B5_ID = {
  "id": {
      "tocHeading": "Isi Panduan",
      "tocItems": {
        "sec-intro": "Kalkulator Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "sec-calculate": "Menghitung Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "sec-what-circumradius": "Apa Itu Jari-Jari Lingkaran Luar Segitiga Siku-Siku?",
        "sec-circumcircle": "Apa Itu Lingkaran Luar dalam Geometri Segitiga Siku-Siku?",
        "sec-formula": "Rumus Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "sec-why-diameter": "Mengapa Sisi Miring Adalah Diameter Lingkaran Luar?",
        "sec-circumcenter": "Apa Itu Pusat Lingkaran Luar Segitiga Siku-Siku?",
        "sec-how-to-use": "Cara Menggunakan Kalkulator Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "sec-step-example": "Contoh Langkah demi Langkah Mencari Jari-Jari Lingkaran Luar",
        "sec-diagram": "Penjelasan Diagram Lingkaran Luar Segitiga Siku-Siku",
        "sec-proof": "Mengapa Rumus Jari-Jari Lingkaran Luar Berlaku?",
        "sec-thales": "Memahami Teorema Thales dan Lingkaran Luar",
        "sec-examples": "Contoh Soal Menghitung Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
        "sec-legs-known": "Cara Mencari Jari-Jari Lingkaran Luar Jika Dua Sisi Tegak Diketahui",
        "sec-diameter": "Hubungan antara Jari-Jari Lingkaran Luar dan Diameter",
        "sec-vs-inradius": "Jari-Jari Lingkaran Luar vs. Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "sec-pythagoras": "Hubungan antara Jari-Jari Lingkaran Luar dan Teorema Pythagoras",
        "sec-verify": "Cara Memeriksa Perhitungan Jari-Jari Lingkaran Luar Anda",
        "sec-properties": "Sifat-Sifat Penting Jari-Jari Lingkaran Luar pada Segitiga Siku-Siku",
        "sec-mistakes": "Kesalahan Umum saat Menghitung Jari-Jari Lingkaran Luar",
        "sec-applications": "Penerapan Praktis Jari-Jari Lingkaran Luar",
        "sec-practice": "Soal Latihan Beserta Jawaban",
        "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
        "sec-faq": "Pertanyaan yang Sering Diajukan",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Temukan jari-jari lingkaran luar segitiga siku-siku dalam satu pembagian: bagi dua sisi miringnya.",
            },
            {
              "kind": "p",
              "text": "Jari-jari lingkaran luar adalah jari-jari lingkaran yang melewati ketiga titik sudut segitiga, yang disebut lingkaran luar. Sisi miring c adalah sisi di seberang sudut siku-siku, dan itu adalah satu-satunya ukuran yang dibutuhkan kalkulator ini, karena sisi miring juga merupakan diameter lingkaran luar. Rumusnya adalah [[R = \\frac{c}{2}]], dengan [[R]] adalah jari-jari lingkaran luar dan [[c]] adalah sisi miring yang utuh.",
            },
            {
              "kind": "p",
              "text": "Sebagai contoh, jika [[c = 10]] cm, maka [[R = \\frac{10}{2} = 5]] cm. Nilai 5 cm itu adalah jarak dari pusat lingkaran luar ke setiap titik sudut segitiga. Jarak yang sama mencapai titik sudut A, titik sudut B, dan titik sudut C, dan itulah yang membuat lingkaran itu melewati ketiganya.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Menghitung Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini memiliki satu kolom masukan, untuk sisi miring c. Sisi miring adalah sisi di seberang sudut siku-siku, dan juga merupakan sisi terpanjang segitiga. Ukur dari ujung ke ujung, dalam satuan apa pun yang Anda gunakan, lalu masukkan angka tunggal itu.",
            },
            {
              "kind": "p",
              "text": "Sisi miring saja sudah cukup karena jari-jari lingkaran luar tidak bergantung pada hal lain. Itulah sebabnya kalkulator ini tidak membutuhkan masukan kedua atau ketiga.",
            },
            {
              "kind": "p",
              "text": "Masukkan panjang yang positif. Sisi miring nol atau negatif tidak menggambarkan segitiga nyata, dan kalkulator tidak punya apa pun yang masuk akal untuk dibagi dua. Jaga agar satuannya konsisten dengan soal Anda: jika c dalam sentimeter, jawabannya dalam sentimeter, dan jika c dalam meter, jawabannya dalam meter.",
            },
            {
              "kind": "p",
              "text": "Klik Hitung Jari-Jari Lingkaran Luar R untuk melihat hasilnya, dan gunakan Atur Ulang untuk mengosongkan kolom sebelum soal baru. Bacalah jawaban sebagai jari-jari, bukan diameter. Jika kalkulator menampilkan 5 cm untuk sisi miring 10 cm, lebar penuh lingkaran itu adalah 10 cm, dan 5 cm adalah jarak dari pusatnya ke tepinya.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Apa Itu Jari-Jari Lingkaran Luar Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Jari-jari lingkaran luar segitiga siku-siku adalah jari-jari lingkaran luarnya, yaitu lingkaran yang digambar melalui ketiga titik sudutnya. Ambil segitiga ABC dengan sudut siku-siku di C. Gambarlah sebuah lingkaran yang tepat melewati A, B, dan C. Jarak dari pusat lingkaran itu ke salah satu dari ketiga titik sudut adalah jari-jari lingkaran luar, yang ditulis [[R]].",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran disebut pusat lingkaran luar, yang ditulis [[O]]. Pada segitiga siku-siku, [[O]] terletak di titik tengah sisi miring AB. Karena [[O]] adalah pusatnya, jarak dari [[O]] ke ketiga titik sudut semuanya sama, sehingga [[AO = BO = CO = R]]. Satu angka, [[R]], menggambarkan ketiga jarak itu sekaligus.",
            },
            {
              "kind": "p",
              "text": "Contoh sederhana membuatnya nyata. Pada segitiga 6-8-10, sisi miringnya 10 cm, jadi jari-jari lingkaran luarnya 5 cm. Pusatnya terletak 5 cm dari A, 5 cm dari B, dan 5 cm dari C. Sisi-sisi tegaknya, 6 cm dan 8 cm, adalah sisi-sisi segitiga, bukan jari-jari, dan tidak satu pun yang sama dengan jari-jari lingkaran luar di sini.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Segitiga siku-siku ABC di dalam lingkaran luarnya dengan pusat O di titik tengah sisi miring AB",
            "caption": "Segitiga ABC di dalam lingkaran luarnya: O adalah pusatnya, dan AO, BO, serta CO masing-masing sama dengan R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Apa Itu Lingkaran Luar dalam Geometri Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Lingkaran luar adalah lingkaran yang melewati setiap titik sudut sebuah poligon. Untuk segitiga, artinya lingkaran itu melewati ketiga sudutnya dan tidak ada syarat lain. Setiap segitiga memiliki tepat satu lingkaran luar, karena tiga titik yang tidak segaris menentukan satu lingkaran.",
            },
            {
              "kind": "p",
              "text": "Pada segitiga siku-siku, lingkaran luar memiliki bentuk yang istimewa. Segitiga itu berada di dalam lingkaran dengan sisi miringnya terbentang lurus di tengah, dari satu sisi lingkaran ke sisi lainnya. Titik sudut ketiga, yaitu titik sudut siku-siku C, terletak pada lingkaran di antara keduanya. Tidak ada bagian segitiga yang menonjol keluar dari lingkaran, dan lingkaran itu adalah lingkaran terkecil yang dapat melewati ketiga titik sudut.",
            },
            {
              "kind": "p",
              "text": "Lingkaran luar berbeda dari lingkaran dalam. Lingkaran dalam berada di dalam segitiga dan menyentuh ketiga sisinya dari dalam. Lingkaran luar mengelilingi segitiga dan menyentuhnya hanya di ketiga titik sudut. Mencampuradukkan kedua lingkaran itu adalah sumber kebingungan yang paling umum di halaman ini, dan bagian perbandingan di bawah ini menampilkannya berdampingan.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Rumus Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Rumus jari-jari lingkaran luar segitiga siku-siku cukup singkat untuk diingat sekilas:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Di sini [[R]] adalah jari-jari lingkaran luar, yaitu jari-jari lingkaran luar, dan [[c]] adalah sisi miring yang utuh, yaitu sisi di seberang sudut siku-siku. Rumusnya berbunyi: ambil sisi miring lalu bagi dua.",
            },
            {
              "kind": "p",
              "text": "Perhitungannya terdiri dari dua langkah. Pertama, kenali sisi miring dengan benar. Sisi itu berada di seberang sudut siku-siku, dan selalu merupakan sisi terpanjang. Kedua, bagi panjangnya dengan dua. Tidak ada pemangkatan, tidak ada akar kuadrat, dan tidak ada ukuran kedua yang harus dicari terlebih dahulu, asalkan sisi miringnya sudah diketahui.",
            },
            {
              "kind": "p",
              "text": "Alasan pembagian itu berhasil adalah karena sisi miring adalah diameter lingkaran luar. Jari-jari selalu setengah diameter, sehingga [[R = \\frac{D}{2}]], dengan [[D]] adalah diameter. Pada segitiga siku-siku [[D = c]], jadi dengan substitusi diperoleh [[R = \\frac{c}{2}]]. Rumus itu sebenarnya adalah hubungan jari-jari dan diameter yang sudah dikenal, yang diterapkan pada diameter yang kebetulan merupakan sisi segitiga.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga umum, yaitu segitiga yang belum tentu siku-siku, jari-jari lingkaran luar mengikuti rumus [[R = \\frac{abc}{4A}]], dengan [[a]], [[b]], dan [[c]] adalah ketiga sisinya dan [[A]] adalah luas segitiga. Untuk segitiga siku-siku, rumus itu menyederhanakan menjadi [[R = \\frac{c}{2}]], karena luasnya adalah [[A = \\frac{ab}{2}]]. Gunakan rumus umum hanya untuk segitiga yang bukan siku-siku.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Mengapa Sisi Miring Adalah Diameter Lingkaran Luar?",
          "blocks": [
            {
              "kind": "p",
              "text": "Inilah gagasan yang menjadi inti seluruh halaman ini, jadi gagasan ini pantas dilihat dengan saksama. Ambil segitiga siku-siku ABC dengan sudut siku-siku di C, dan misalkan [[O]] adalah titik tengah sisi miring AB. Klaimnya adalah bahwa [[O]] berjarak sama dari ketiga titik sudut, sehingga titik itu menjadi pusat lingkaran luar, dan AB, yang melewati [[O]] dengan kedua ujungnya pada lingkaran, adalah sebuah diameter.",
            },
            {
              "kind": "p",
              "text": "Fakta kuncinya adalah sifat titik tengah segitiga siku-siku: titik tengah sisi miring berjarak sama dari ketiga titik sudut. Dalam simbol, [[OA = OB = OC]]. Karena [[O]] adalah titik tengah AB, [[OA]] dan [[OB]] masing-masing setengah sisi miring, sehingga [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Mengapa [[OC]] sama dengan setengah sisi miring? Salah satu cara melihatnya adalah dengan melengkapi persegi panjang. Gambarlah salinan segitiga ABC yang diputar setengah putaran terhadap [[O]], sehingga kedua segitiga itu bersama-sama membentuk persegi panjang dengan AB sebagai salah satu diagonalnya. Diagonal-diagonal persegi panjang sama panjang dan saling membagi dua, sehingga [[OC = \\frac{c}{2}]] juga.",
            },
            {
              "kind": "p",
              "text": "Setelah [[OA = OB = OC]] terbukti, sisanya mengikuti. Lingkaran yang berpusat di [[O]] dengan jari-jari [[\\frac{c}{2}]] melewati A, B, dan C, sehingga lingkaran itu adalah lingkaran luar, [[O]] adalah pusat lingkaran luar, dan [[\\frac{c}{2}]] adalah jari-jari lingkaran luar. Karena A dan B adalah ujung-ujung berlawanan dari sebuah garis yang melalui pusat, AB adalah diameter, sehingga [[AB = 2R]], yaitu [[c = 2R]] dan karena itu [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Sisi miring AB ditampilkan sebagai diameter lingkaran luar dengan AO dan OB sama dengan R",
            "caption": "Sisi miring AB adalah diameter: AO dan OB masing-masing sama dengan R, dan AB sama dengan 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Apa Itu Pusat Lingkaran Luar Segitiga Siku-Siku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Pusat lingkaran luar segitiga adalah titik yang berjarak sama dari ketiga titik sudut, dan titik itu adalah pusat lingkaran luar. Titik itu ditemukan di tempat garis bagi tegak lurus sisi-sisinya bertemu.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga siku-siku, garis-garis bagi tegak lurus itu bertemu di sebuah titik yang dapat Anda temukan tanpa menggambarnya: titik tengah sisi miring. Bagi dua AB dan Anda mendapatkan pusat lingkaran luar [[O]]. Membagi dua salah satu sisi tegak akan menghasilkan garis yang melewati titik yang sama, dan itu merupakan pemeriksaan yang berguna saat Anda mengonstruksi pusat itu dengan jangka dan penggaris.",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran luar terletak pada sisi miring itu sendiri, tepat di tengah-tengahnya. Itulah ciri khas segitiga siku-siku. Pada segitiga lancip, ketiga sudutnya kurang dari 90 derajat dan pusat lingkaran luar jatuh di dalam segitiga. Segitiga siku-siku adalah kasus batas, dengan pusatnya terletak pada batas segitiga, pada sisi terpanjangnya.",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran luar bukanlah titik sudut siku-siku. Titik sudut C adalah sebuah titik pada lingkaran, pada jarak [[R]] dari [[O]], sedangkan [[O]] adalah pusatnya. Mencampuradukkan keduanya adalah kesalahan umum, karena C adalah sudut segitiga yang paling mencolok secara visual. Ingatlah bahwa pusat harus berjarak sama dari A, B, dan C, dan C tidak berjarak sama dari A dan B kecuali segitiganya sama kaki dengan cara tertentu, jadi C tidak dapat menjadi pusat secara umum.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Pusat lingkaran luar O di titik tengah sisi miring, berjarak sama dari ketiga titik sudut",
            "caption": "O adalah titik tengah AB, dengan OA, OB, dan OC semuanya sama dengan R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Cara Menggunakan Kalkulator Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan langkah singkat membawa Anda dari segitiga berlabel ke jawaban yang sudah diperiksa. Sisi-sisi tegak tidak dibutuhkan pada titik mana pun, karena sisi miring saja sudah menentukan jari-jari lingkaran luar.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kenali segitiga siku-siku dalam soal Anda dan pastikan segitiga itu memiliki sudut siku-siku.",
                "Temukan sudut siku-sikunya, yang biasanya ditandai dengan persegi kecil di titik sudut C.",
                "Kenali sisi di seberang sudut siku-siku; sisi itu adalah sisi miring c.",
                "Pastikan sisi ini adalah sisi terpanjang segitiga. Jika bukan, beri label ulang pada diagram sebelum melanjutkan.",
                "Pilih satuan yang sesuai dan ubah semua ukuran agar semuanya memakai satuan itu.",
                "Masukkan panjang sisi miring pada kolom Hipotenusa c.",
                "Klik Hitung Jari-Jari Lingkaran Luar R dan bacalah hasilnya.",
                "Periksa hasilnya: hasilnya harus positif, dalam satuan yang sama dengan c, dan tepat setengah dari c.",
                "Gunakan Atur Ulang saat memulai perhitungan lain.",
              ],
            },
            {
              "kind": "p",
              "text": "Jika soal Anda memberikan dua sisi tegak sebagai pengganti sisi miring, carilah c terlebih dahulu dengan teorema Pythagoras, [[c = \\sqrt{a^2 + b^2}]], lalu masukkan nilai itu. <a href=\"/right-triangle-side-calculator/\">Kalkulator sisi segitiga siku-siku</a> dapat menemukan sisi miring yang belum diketahui untuk Anda, dan bagian tentang sisi tegak di bawah ini mengerjakan satu contoh lengkap.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Contoh Langkah demi Langkah Mencari Jari-Jari Lingkaran Luar",
          "blocks": [
            {
              "kind": "p",
              "text": "Gunakan [[c = 10]] cm. Tiga langkah di bawah ini menunjukkan seluruh pengerjaannya, tanpa ada yang dilewati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tuliskan rumusnya: [[R = \\frac{c}{2}]].",
                "Substitusikan nilai yang diketahui: [[R = \\frac{10}{2}]].",
                "Bagi: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Jawaban 5 cm berarti lingkaran luar memiliki jari-jari 5 cm. Pusatnya, yaitu titik tengah sisi miring, terletak 5 cm dari setiap titik sudut segitiga, dan lingkaran itu melewati ketiga titik sudut. Diameter lingkaran itu 10 cm, sama dengan sisi miring.",
            },
            {
              "kind": "p",
              "text": "Periksa jawaban dengan hubungan diameter, [[2R = c]]. Menggandakan jari-jari menghasilkan [[2 \\times 5 = 10]] cm, yang sama persis dengan sisi miring. Jika menggandakan jawaban Anda tidak mengembalikan sisi miring yang Anda mulai, pembagiannya salah di suatu tempat, dan pemeriksaan ini langsung menangkapnya.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Contoh soal dengan sisi miring 10 cm dan jari-jari lingkaran luar 5 cm di dalam lingkaran luar",
            "caption": "Contoh soal: c = 10 cm menghasilkan R = 5 cm, dan 2 kali 5 cm sama dengan 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Penjelasan Diagram Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram ini menunjukkan segitiga ABC dengan sudut siku-siku di C. Sisi AC adalah sisi tegak a, sisi BC adalah sisi tegak b, dan sisi AB adalah sisi miring c. Titik [[O]] menandai titik tengah AB, dan sebuah lingkaran yang berpusat di [[O]] melewati A, B, dan C.",
            },
            {
              "kind": "p",
              "text": "Bacalah diagram dengan urutan ini. Mulailah dari A, susuri sisi tegak a ke C, lalu susuri sisi tegak b ke B, kemudian kembali menyusuri sisi miring dari B ke A, melewati [[O]] di tengah jalan. Ruas-ruas dari [[O]] ke A, B, dan C semuanya adalah jari-jari, masing-masing berlabel [[R]].",
            },
            {
              "kind": "p",
              "text": "Ruas AB melewati pusat [[O]] dan kedua ujungnya berada pada lingkaran, dan itulah definisi diameter. Itulah sebabnya AB digambar sebagai garis lurus di tengah lingkaran, bukan sebagai tali busur di salah satu sisi. Sudut siku-siku di C terletak pada lingkaran itu sendiri, dan itulah gambaran yang dijelaskan teorema Thales.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Mengapa Rumus Jari-Jari Lingkaran Luar Berlaku?",
          "blocks": [
            {
              "kind": "p",
              "text": "Buktinya menggunakan titik tengah sisi miring dan fakta bahwa titik itu berjarak sama dari ketiga titik sudut. Misalkan [[M]] adalah titik tengah AB pada segitiga siku-siku ABC, dengan sudut siku-siku di C. Maka [[AM = BM = \\frac{c}{2}]] menurut definisi titik tengah. Langkah yang perlu dibuktikan adalah [[MA = MB = MC]], klaim bahwa jarak ketiga sama dengan dua jarak pertama.",
            },
            {
              "kind": "p",
              "text": "Salah satu cara yang rapi untuk menunjukkannya adalah memperpanjang median CM ke titik D sehingga [[MD = MC]], lalu menghubungkan D ke A dan B. Segi empat ACBD memiliki diagonal AB dan CD yang saling membagi dua di [[M]], sehingga segi empat itu adalah jajar genjang. Sudutnya di C adalah sudut siku-siku, dan jajar genjang dengan satu sudut siku-siku adalah persegi panjang, jadi ACBD adalah persegi panjang.",
            },
            {
              "kind": "p",
              "text": "Diagonal-diagonal persegi panjang sama panjang, sehingga [[CD = AB = c]]. Karena [[M]] membagi dua CD, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Nilai itu sama dengan [[MA]] dan [[MB]], sehingga [[MA = MB = MC = \\frac{c}{2}]]. Titik [[M]] berjarak sama dari A, B, dan C, sehingga titik itu adalah pusat lingkaran luar, dan jarak bersama [[\\frac{c}{2}]] adalah jari-jari lingkaran luar. Karena itu [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Memahami Teorema Thales dan Lingkaran Luar",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema Thales menyatakan bahwa sudut yang menghadap diameter pada sebuah titik di lingkaran adalah sudut siku-siku. Pada gambar, AB adalah diameter sebuah lingkaran dan C adalah sembarang titik pada lingkaran selain A atau B. Maka sudut ACB adalah 90 derajat. Teorema ini dinamai Thales dari Miletus, yang dianggap sebagai orang pertama yang membuktikannya.",
            },
            {
              "kind": "p",
              "text": "Kebalikan teorema inilah yang digunakan halaman ini: jika sebuah segitiga memiliki sudut siku-siku, sisi miringnya dapat diperlakukan sebagai diameter lingkaran yang melewati ketiga titik sudutnya. Ambil segitiga ABC dengan sudut C sama dengan 90 derajat. Kebalikannya mengatakan C terletak pada lingkaran dengan diameter AB, sehingga lingkaran itu adalah lingkaran luar segitiga, dan jari-jarinya adalah setengah AB.",
            },
            {
              "kind": "p",
              "text": "Kedua arah itu bersama-sama memberikan pengujian yang lengkap. Titik C pada lingkaran dengan diameter AB selalu menghasilkan sudut siku-siku di C, dan sudut siku-siku di C selalu menempatkan C pada lingkaran itu.",
            },
            {
              "kind": "p",
              "text": "Teorema ini juga menjelaskan posisi pusat lingkaran luar. Pusat lingkaran adalah titik tengah diameternya, dan diameternya adalah sisi miring, jadi pusatnya adalah titik tengah sisi miring. Tidak ada hal lain tentang segitiga yang perlu diketahui. Itulah sebabnya kalkulator hanya meminta satu angka.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagram teorema Thales dengan diameter AB dan titik C pada lingkaran yang membentuk sudut siku-siku",
            "caption": "Teorema Thales: AB adalah diameter, C berada pada lingkaran, dan sudut C adalah 90 derajat.",
          },
        },
        "sec-examples": {
          "h2": "Contoh Soal Menghitung Jari-Jari Lingkaran Luar Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "h3",
              "text": "Contoh 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 10]] cm, rumusnya menghasilkan [[R = \\frac{10}{2} = 5]] cm. Lingkaran luar memiliki diameter 10 cm dan jari-jari 5 cm, dan pusatnya adalah titik tengah sisi miring, 5 cm dari setiap titik sudut.",
            },
            {
              "kind": "h3",
              "text": "Contoh 2: Ukuran yang Lebih Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Angka yang lebih besar tidak mengubah apa pun tentang caranya: bagi dua sisi miring dan pertahankan satuannya. Lingkaran dengan lebar 24 m memiliki jari-jari 12 m.",
            },
            {
              "kind": "h3",
              "text": "Contoh 3: Ukuran Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Sisi miring desimal menghasilkan jari-jari lingkaran luar desimal, dan itu normal. Periksalah dengan menggandakan: [[2 \\times 3.75 = 7.5]] cm, yang mengembalikan sisi miring.",
            },
            {
              "kind": "h3",
              "text": "Contoh 4: Sisi Miring Ganjil",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Bilangan bulat ganjil jika dibagi dua menghasilkan angka yang berakhiran .5. Ini adalah segitiga 5-12-13, yang sisi-sisi tegaknya 5 cm dan 12 cm, karena [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Contoh 5: Ukuran Milimeter",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Satuan kecil bekerja dengan cara yang sama, dan mempertahankan satuan milimeter sepanjang perhitungan menghindari konversi apa pun. Dalam sentimeter, jawaban yang sama adalah 9 cm, karena 90 mm sama dengan 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Contoh 6: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, yaitu 3.75 ft. Membagi dengan 2 berarti mengalikan penyebut dengan 2, sehingga penyebut bertambah dari 2 menjadi 4. Bentuk desimalnya, 3.75 ft, adalah jawaban yang sama yang ditulis dengan cara berbeda.",
            },
            {
              "kind": "h3",
              "text": "Contoh 7: Satuan yang Berbeda",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Jika diubah ke sentimeter, 0.6 m sama dengan 60 cm, karena 1 m adalah 100 cm. Satuan mana pun benar, tetapi jawaban harus menyatakan satuan yang dipakainya.",
            },
            {
              "kind": "h3",
              "text": "Contoh 8: Ukuran Desimal Besar",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Menggandakan 62.8 menghasilkan 125.6, yang mengonfirmasi pembagiannya.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Cara Mencari Jari-Jari Lingkaran Luar Jika Dua Sisi Tegak Diketahui",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator di halaman ini meminta sisi miring, tetapi banyak soal justru memberikan dua sisi tegak. Dalam hal itu, carilah sisi miring terlebih dahulu dengan teorema Pythagoras, lalu bagi dua. Kedua langkah itu bergabung menjadi satu rumus, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], dengan [[a]] dan [[b]] adalah sisi-sisi tegak.",
            },
            {
              "kind": "p",
              "text": "Gunakan [[a = 6]] cm dan [[b = 8]] cm. Pertama, kuadratkan kedua sisi tegak lalu jumlahkan: [[a^2 + b^2 = 36 + 64 = 100]]. Kemudian ambil akar kuadratnya untuk mendapatkan sisi miring: [[c = \\sqrt{100} = 10]] cm. Lalu bagi dua: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/pythagorean-theorem-calculator/\">Kalkulator teorema Pythagoras</a> menemukan sisi miring yang belum diketahui dari dua sisi tegak, dan itu adalah langkah pertama yang sama seperti yang digunakan di sini. <a href=\"/right-triangle-area-calculator/\">Kalkulator luas segitiga siku-siku</a> menggunakan dua sisi tegak yang sama dengan cara berbeda, yaitu menghitung [[A = \\frac{ab}{2}]], yang bernilai 24 sentimeter persegi untuk segitiga 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Hubungan antara Jari-Jari Lingkaran Luar dan Diameter",
          "blocks": [
            {
              "kind": "p",
              "text": "Jari-jari dan diameter menggambarkan lingkaran yang sama dengan dua cara. Diameter [[D]] adalah jarak lurus melintasi lingkaran melalui pusatnya, dan jari-jari [[R]] adalah jarak dari pusat ke tepi, sehingga [[D = 2R]] dan [[R = \\frac{D}{2}]]. Menggandakan jari-jari menghasilkan diameter, dan membagi dua diameter menghasilkan jari-jari.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga siku-siku, diameter memiliki identitas kedua: diameter itu sama dengan sisi miring. Sisi miring membentang melintasi lingkaran luar dari satu sisi ke sisi lain, melalui pusat, sehingga [[D = c]]. Menggabungkan kedua hubungan itu menghasilkan [[c = 2R]] dan [[R = \\frac{c}{2}]], yang merupakan rumus yang menjadi dasar halaman ini.",
            },
            {
              "kind": "p",
              "text": "Contoh angka membuat ketiga panjang itu tetap jelas. Pada segitiga dengan [[c = 18]] cm, diameternya adalah [[D = 18]] cm dan jari-jari lingkaran luarnya adalah [[R = 9]] cm. Sisi miring, 18 cm, dan diameter, 18 cm, adalah garis yang sama yang diukur dalam dua peran, sedangkan jari-jari, 9 cm, adalah setengah dari garis itu.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Jari-Jari Lingkaran Luar vs. Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Jari-jari lingkaran luar dan jari-jari lingkaran dalam adalah dua jari-jari segitiga siku-siku, dan keduanya menggambarkan dua lingkaran yang berbeda. Jari-jari lingkaran luar [[R]] adalah jari-jari lingkaran luar, yang melewati ketiga titik sudut. Jari-jari lingkaran dalam [[r]] adalah jari-jari lingkaran dalam, yang berada di dalam segitiga dan menyentuh ketiga sisinya. Satu lingkaran mengelilingi segitiga, lingkaran lainnya berada di dalamnya.",
            },
            {
              "kind": "p",
              "text": "Untuk segitiga siku-siku, jari-jari lingkaran luar adalah [[R = \\frac{c}{2}]], sedangkan jari-jari lingkaran dalam adalah [[r = \\frac{a + b - c}{2}]], dengan [[a]] dan [[b]] adalah sisi-sisi tegak dan [[c]] adalah sisi miring. Jari-jari lingkaran luar hanya membutuhkan sisi miring; jari-jari lingkaran dalam membutuhkan ketiga sisi, karena seberapa rapat lingkaran dalam itu muat bergantung pada bentuk segitiga, bukan hanya pada sisi terpanjangnya.",
            },
            {
              "kind": "p",
              "text": "Pusatnya juga berbeda. Pusat lingkaran luar adalah titik tengah sisi miring, pada batas segitiga. Pusat lingkaran dalam berada di dalam segitiga, tempat garis-garis bagi sudut bertemu, pada jarak [[r]] dari setiap sisi.",
            },
            {
              "kind": "p",
              "text": "Gunakan segitiga 6-8-10 untuk melihat perbedaan angkanya. Jari-jari lingkaran luar adalah [[R = \\frac{10}{2} = 5]] cm, dan jari-jari lingkaran dalam adalah [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Untuk soal tentang lingkaran dalam, gunakan <a href=\"/right-triangle-inradius-calculator/\">kalkulator jari-jari lingkaran dalam segitiga siku-siku</a>, yang menerapkan [[r = \\frac{a + b - c}{2}]] secara langsung. <a href=\"/right-triangle-radius-calculator/\">Kalkulator jari-jari segitiga siku-siku</a> mencakup kedua jari-jari dalam satu halaman saat Anda perlu membandingkannya.",
            },
          ],
          "table": {
            "headers": [
              "Fitur",
              "Jari-Jari Lingkaran Luar R",
              "Jari-Jari Lingkaran Dalam r",
            ],
            "rows": [
              [
                "Lingkaran",
                "Lingkaran luar",
                "Lingkaran dalam",
              ],
              [
                "Posisi",
                "Di sekeliling segitiga",
                "Di dalam segitiga",
              ],
              [
                "Sentuhan",
                "Melewati titik sudut",
                "Menempel pada sisi-sisi",
              ],
              [
                "Rumus segitiga siku-siku",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Pusat",
                "Pusat lingkaran luar",
                "Pusat lingkaran dalam",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Lingkaran luar yang melewati titik-titik sudut di samping lingkaran dalam yang menyentuh sisi-sisi, segitiga 6-8-10",
            "caption": "Lingkaran luar (R = 5 cm) di sekeliling segitiga, lingkaran dalam (r = 2 cm) di dalamnya, segitiga 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Hubungan antara Jari-Jari Lingkaran Luar dan Teorema Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Teorema Pythagoras menyatakan bahwa pada segitiga siku-siku, [[a^2 + b^2 = c^2]], dengan [[a]] dan [[b]] adalah sisi-sisi tegak dan [[c]] adalah sisi miring. Teorema ini adalah penghubung antara sisi-sisi tegak dan sisi miring, dan melalui sisi miring, teorema ini juga menjadi penghubung ke jari-jari lingkaran luar.",
            },
            {
              "kind": "p",
              "text": "Karena [[R = \\frac{c}{2}]], dan teorema itu memberikan [[c = \\sqrt{a^2 + b^2}]], substitusi menghasilkan [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Rumus gabungan itu menemukan jari-jari lingkaran luar dari dua sisi tegak dalam satu langkah, tanpa menuliskan sisi miring secara terpisah. Rumus itu adalah perhitungan dua langkah yang sama seperti pada bagian sisi tegak, yang ditulis sebagai satu ungkapan.",
            },
            {
              "kind": "p",
              "text": "Periksalah dengan segitiga 6-8-10. Sisi-sisi tegak menghasilkan [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm untuk sisi miring, dan membagi dua menghasilkan [[R = 5]] cm. Teorema Pythagoras menyediakan sisi miring, dan rumus jari-jari lingkaran luar membagi dua sisi itu.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cara Memeriksa Perhitungan Jari-Jari Lingkaran Luar Anda",
          "blocks": [
            {
              "kind": "p",
              "text": "Empat pemeriksaan independen menangkap hampir setiap kesalahan. Jalankan setidaknya satu pemeriksaan pada setiap jawaban, dan keempatnya saat soalnya penting. Contoh di bawah ini menggunakan segitiga 6-8-10, dengan [[c = 10]] cm dan [[R = 5]] cm, di seluruh bagian.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 1: Hubungan Diameter",
            },
            {
              "kind": "p",
              "text": "Gandakan jari-jari lingkaran luar dan bandingkan dengan sisi miring: [[2R = c]]. Di sini [[2 \\times 5 = 10]] cm, yang sama persis dengan c. Jika menggandakan jawaban Anda tidak mengembalikan sisi miring, pembagian dengan dua yang salah.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 2: Hubungan Titik Tengah",
            },
            {
              "kind": "p",
              "text": "Pusat lingkaran luar harus terletak di tengah-tengah sisi miring. Ukur dari salah satu ujung sisi miring ke pusat: setiap setengahnya harus sama dengan [[R]]. Di sini setiap setengahnya adalah 5 cm, yang sesuai dengan jari-jari lingkaran luar. Pusat yang tidak berada di titik tengah bukanlah pusat lingkaran luar.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 3: Jarak yang Sama",
            },
            {
              "kind": "p",
              "text": "Periksa [[OA = OB = OC = R]]. Pusat harus berjarak sama dari ketiga titik sudut. Pada segitiga 6-8-10, setiap jarak adalah 5 cm. Jika jarak ke titik sudut siku-siku berbeda dari jarak ke ujung-ujung sisi miring, pusat atau jari-jarinya salah.",
            },
            {
              "kind": "h3",
              "text": "Pemeriksaan 4: Teorema Pythagoras",
            },
            {
              "kind": "p",
              "text": "Saat sisi-sisi tegak diketahui, periksa [[a^2 + b^2 = c^2]] dan bandingkan sisi miring yang dihasilkan dengan [[2R]]. Di sini [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], sehingga [[c = 10]] cm, dan [[2R = 10]] cm sesuai. Pemeriksaan ini menguji seluruh segitiga, sehingga pemeriksaan ini menangkap kesalahan pelabelan yang tidak dapat ditangkap pemeriksaan pertama.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Sifat-Sifat Penting Jari-Jari Lingkaran Luar pada Segitiga Siku-Siku",
          "blocks": [
            {
              "kind": "p",
              "text": "Sembilan sifat mengikuti langsung dari [[R = \\frac{c}{2}]]. Masing-masing juga berfungsi sebagai pemeriksaan kewajaran untuk jawaban baru.",
            },
            {
              "kind": "list",
              "items": [
                "Jari-jari lingkaran luar tepat setengah dari sisi miring, [[R = \\frac{c}{2}]], tanpa pembulatan apa pun.",
                "Sisi miring adalah diameter lingkaran luar, sehingga [[D = c]] dan [[c = 2R]].",
                "Pusat lingkaran luar terletak di titik tengah sisi miring, pada sisi terpanjang segitiga.",
                "Jari-jari lingkaran luar selalu positif untuk segitiga yang tidak degenerat, karena sisi miring adalah panjang yang positif.",
                "Jari-jari lingkaran luar sama dengan setengah sisi miring, dan karena sisi miring adalah sisi terpanjang, jari-jari lingkaran luar lebih kecil daripada sisi miring. Apakah jari-jari itu lebih besar atau lebih kecil daripada suatu sisi tegak bergantung pada segitiganya: pada segitiga 6-8-10, [[R = 5]] cm lebih kecil daripada sisi tegak 8 cm, sedangkan pada segitiga 5-12-13, [[R = 6.5]] cm lebih besar daripada sisi tegak 5 cm.",
                "Memperbesar sisi miring akan memperbesar jari-jari lingkaran luar secara proporsional, karena [[R]] adalah setengah dari [[c]].",
                "Menggandakan sisi miring akan menggandakan jari-jari lingkaran luar: jika [[c]] menjadi [[2c]], maka [[R]] menjadi [[c]].",
                "Sisi-sisi tegak tidak dibutuhkan saat sisi miring sudah diketahui; rumusnya hanya menggunakan [[c]].",
                "Ketiga titik sudut berjarak sama dari pusat lingkaran luar, dengan [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Kesalahan Umum saat Menghitung Jari-Jari Lingkaran Luar",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Memasukkan sisi tegak sebagai pengganti sisi miring: membagi dua sisi tegak menghasilkan setengah sisi tegak, bukan jari-jari lingkaran luar. Pada segitiga 6-8-10, membagi dua 6 cm menghasilkan 3 cm, sedangkan jari-jari lingkaran luar yang benar adalah 5 cm.",
                "Lupa membagi dua: melaporkan sisi miring sebagai jawaban menghasilkan diameter, bukan jari-jari. Dengan [[c = 10]] cm, jawabannya adalah 5 cm, bukan 10 cm.",
                "Memperlakukan sisi miring sebagai jari-jari: ini adalah kesalahan yang sama dari arah sebaliknya. Sisi miring membentang selebar penuh lingkaran, jadi sisi miring adalah diameter, dan jari-jarinya adalah setengahnya.",
                "Mencampuradukkan jari-jari lingkaran luar dengan jari-jari lingkaran dalam: jari-jari lingkaran dalam segitiga 6-8-10 adalah 2 cm, sedangkan jari-jari lingkaran luarnya adalah 5 cm. Kedua lingkaran itu berbeda, dan rumusnya juga berbeda.",
                "Mencampuradukkan pusat lingkaran luar dengan titik sudut siku-siku: pusat lingkaran luar adalah titik tengah sisi miring, bukan titik sudut C. Titik sudut C adalah sebuah titik pada lingkaran, pada jarak [[R]] dari pusat.",
                "Menganggap pusat selalu berada di dalam segitiga: pada segitiga siku-siku, pusat lingkaran luar terletak pada sisi miring, dan pada segitiga tumpul, pusatnya terletak di luar.",
                "Menggunakan rumus pada segitiga sembarang: [[R = \\frac{c}{2}]] hanya berlaku untuk segitiga siku-siku. Untuk segitiga umum, gunakan [[R = \\frac{abc}{4A}]], dengan [[A]] adalah luasnya.",
                "Mencampur satuan ukuran: sisi miring dalam meter dan jawaban yang dilaporkan dalam sentimeter berbeda dengan faktor 100. Ubah dulu satuannya, baru bagi dua.",
                "Menggunakan nilai sisi miring nol atau negatif: panjang tidak dapat bernilai nol atau negatif pada segitiga nyata. Masukan nol atau negatif berarti pengukurannya salah.",
                "Mencampuradukkan diameter dan jari-jari: diameter adalah dua kali jari-jari. Jika jawaban Anda dua kali nilai yang diharapkan, Anda mungkin melaporkan [[D]] sebagai pengganti [[R]].",
                "Menganggap lingkaran luar menyentuh ketiga sisi: lingkaran luar melewati titik-titik sudut dan menyentuh segitiga hanya di ketiga titik itu. Lingkaran yang menyentuh sisi-sisinya adalah lingkaran dalam.",
                "Lupa bahwa lingkaran itu melewati ketiga titik sudut: ketiganya harus terletak pada lingkaran, dan itulah yang persis dijamin oleh [[OA = OB = OC]].",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Penerapan Praktis Jari-Jari Lingkaran Luar",
          "blocks": [
            {
              "kind": "p",
              "text": "Penggunaan yang paling langsung adalah pekerjaan rumah geometri dan pekerjaan kelas, di mana soal jari-jari lingkaran luar menguji apakah siswa dapat mengenali sisi miring dan menerapkan [[R = \\frac{c}{2}]] sebagai pengganti rumus yang lebih rumit. Latihan menggambar lingkaran menggunakan gagasan yang sama: jika diberikan segitiga siku-siku, gambarlah lingkaran luarnya dengan membagi dua sisi miring dan mengatur jangka pada jari-jari itu.",
            },
            {
              "kind": "p",
              "text": "Gambar teknis menggunakan hubungan ini saat segitiga siku-siku harus ditempatkan di dalam bingkai lingkaran atau saat busur lingkaran harus melewati tiga titik yang diberikan. Pemodelan geometris dan geometri koordinat menggunakan fakta yang sama untuk menempatkan pusat lingkaran luar segitiga di titik tengah sisi miringnya.",
            },
            {
              "kind": "p",
              "text": "Guru menggunakan topik ini sebagai pelajaran penghubung antara segitiga dan lingkaran, karena topik ini adalah salah satu tempat pertama di mana kedua subjek itu bertemu. Teorema Thales, sifat titik tengah, dan hubungan jari-jari dan diameter semuanya muncul dalam satu gambar, sehingga jari-jari lingkaran luar adalah cara yang ringkas untuk meninjau ketiganya bersama-sama.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Soal Latihan Beserta Jawaban",
          "blocks": [
            {
              "kind": "p",
              "text": "Cobalah keenam soal itu di atas kertas sebelum membaca jawabannya. Tidak ada satu pun nilai yang mengulang contoh soal, dan setiap solusi dikerjakan selengkapnya di bawah ini.",
            },
            {
              "kind": "h3",
              "text": "Soal 1: Bilangan Bulat Dasar",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi miring [[c = 26]] cm. Carilah jari-jari lingkaran luar [[R]].",
            },
            {
              "kind": "h3",
              "text": "Soal 2: Sisi Miring Desimal",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = 9.4]] m, carilah jari-jari lingkaran luar [[R]] dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soal 3: Ukuran Pecahan",
            },
            {
              "kind": "p",
              "text": "Diketahui [[c = \\frac{9}{4}]] ft, carilah [[R]] sebagai pecahan, lalu sebagai desimal.",
            },
            {
              "kind": "h3",
              "text": "Soal 4: Konversi Satuan",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi miring [[c = 240]] cm. Carilah jari-jari lingkaran luar dalam meter.",
            },
            {
              "kind": "h3",
              "text": "Soal 5: Mencari Sisi Miring dari Dua Sisi Tegak",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak [[a = 9]] cm dan [[b = 12]] cm. Carilah sisi miringnya, lalu jari-jari lingkaran luarnya.",
            },
            {
              "kind": "h3",
              "text": "Soal 6: Jari-Jari Lingkaran Luar atau Jari-Jari Lingkaran Dalam?",
            },
            {
              "kind": "p",
              "text": "Segitiga siku-siku memiliki sisi tegak 5 cm dan 12 cm serta sisi miring 13 cm. Carilah jari-jari lingkaran luar [[R]] dan jari-jari lingkaran dalam [[r]], dan nyatakan lingkaran mana yang dimiliki masing-masing.",
            },
            {
              "kind": "h3",
              "text": "Jawaban Soal Latihan",
            },
            {
              "kind": "p",
              "text": "Jawaban 1: [[R = \\frac{26}{2} = 13]] cm. Periksa: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 2: [[R = \\frac{9.4}{2} = 4.7]] m. Periksa: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Jawaban 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, yaitu 1.125 ft. Membagi dengan 2 menggandakan penyebut dari 4 menjadi 8.",
            },
            {
              "kind": "p",
              "text": "Jawaban 4: [[R = \\frac{240}{2} = 120]] cm, dan 120 cm sama dengan 1.2 m, karena 100 cm adalah 1 m.",
            },
            {
              "kind": "p",
              "text": "Jawaban 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, lalu [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Jawaban 6: Jari-jari lingkaran luar dimiliki oleh lingkaran luar, [[R = \\frac{13}{2} = 6.5]] cm, dan jari-jari lingkaran dalam dimiliki oleh lingkaran dalam, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Lingkaran luar melewati titik-titik sudut; lingkaran dalam menyentuh sisi-sisinya.",
            },
          ],
        },
      },
      "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "relatedIntro": "Setiap kalkulator di bawah ini menangani satu tugas segitiga siku-siku tertentu, jadi pilih alat yang sesuai dengan ukuran yang perlu Anda cari.",
      "relatedItems": [
        "Kalkulator Jari-Jari Segitiga Siku-Siku",
        "Kalkulator Jari-Jari Lingkaran Dalam Segitiga Siku-Siku",
        "Kalkulator Sisi Segitiga Siku-Siku",
        "Kalkulator Luas Segitiga Siku-Siku",
        "Kalkulator Teorema Pythagoras",
      ],
      "faqHeading": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Apa rumus jari-jari lingkaran luar segitiga siku-siku?",
          "answer": "Rumusnya adalah [[R = \\frac{c}{2}]], dengan [[R]] adalah jari-jari lingkaran luar dan [[c]] adalah sisi miring. Kenali sisi di seberang sudut siku-siku, lalu bagi panjangnya dengan dua. Sebagai contoh, sisi miring 10 cm menghasilkan jari-jari lingkaran luar 5 cm.",
        },
        {
          "question": "Mengapa sisi miring adalah diameter lingkaran luar?",
          "answer": "Titik tengah sisi miring berjarak sama dari ketiga titik sudut, sehingga titik itu adalah pusat lingkaran luar. Sisi miring melewati pusat itu dengan kedua ujungnya pada lingkaran, dan itulah definisi diameter. Membagi dua sisi miring karena itu menghasilkan jari-jari.",
        },
        {
          "question": "Di mana pusat lingkaran luar segitiga siku-siku?",
          "answer": "Pusat lingkaran luar terletak di titik tengah sisi miring, pada sisi terpanjang segitiga. Pusat itu berjarak sama dari ketiga titik sudut, dengan [[AO = BO = CO = R]]. Pusat itu bukan titik sudut siku-siku, yang merupakan sebuah titik pada lingkaran.",
        },
        {
          "question": "Apa arti jari-jari lingkaran luar?",
          "answer": "Jari-jari lingkaran luar berarti jari-jari lingkaran luar, yaitu lingkaran yang melewati ketiga titik sudut segitiga. Jari-jari itu adalah jarak dari pusat lingkaran luar ke titik sudut mana pun. Pada segitiga siku-siku, jari-jari itu sama dengan setengah sisi miring.",
        },
        {
          "question": "Apakah saya membutuhkan kedua sisi tegak untuk menghitung jari-jari lingkaran luar?",
          "answer": "Tidak. Sisi miring saja sudah cukup, karena [[R = \\frac{c}{2}]]. Sisi-sisi tegak hanya dibutuhkan saat sisi miring belum diketahui, dan dalam hal itu carilah sisi miring terlebih dahulu dengan [[c = \\sqrt{a^2 + b^2}]] lalu bagi dua. Itulah sebabnya kalkulator ini hanya meminta satu nilai, dan kalkulator ini membuat setiap perhitungan tetap singkat dan sederhana.",
        },
        {
          "question": "Apakah jari-jari lingkaran luar setengah dari sisi miring?",
          "answer": "Ya, selalu, untuk segitiga siku-siku. Sisi miring adalah diameter lingkaran luar, dan jari-jari adalah setengah diameter, sehingga [[R = \\frac{c}{2}]]. Menggandakan jari-jari lingkaran luar selalu mengembalikan sisi miring. Sebagai contoh, sisi miring 14 cm menghasilkan jari-jari lingkaran luar 7 cm, dan menggandakan 7 cm mengembalikan 14 cm.",
        },
        {
          "question": "Apakah jari-jari lingkaran luar sama dengan jari-jari lingkaran dalam?",
          "answer": "Tidak. Jari-jari lingkaran luar adalah jari-jari lingkaran yang melalui titik-titik sudut, [[R = \\frac{c}{2}]], sedangkan jari-jari lingkaran dalam adalah jari-jari lingkaran di dalam segitiga yang menyentuh sisi-sisinya, [[r = \\frac{a + b - c}{2}]]. Pada segitiga 6-8-10, keduanya adalah 5 cm dan 2 cm.",
        },
        {
          "question": "Dapatkah pusat lingkaran luar terletak di luar segitiga?",
          "answer": "Ya, untuk segitiga tumpul, pusat lingkaran luar terletak di luar. Untuk segitiga lancip, pusatnya terletak di dalam. Segitiga siku-siku adalah kasus batas: pusat lingkaran luarnya terletak pada sisi miring, tepat di titik tengahnya. Jadi pusat itu tidak pernah berada di dalam daerah segitiga siku-siku, tetapi juga tidak pernah berada di luar segitiga.",
        },
        {
          "question": "Bagaimana hubungan teorema Thales dengan jari-jari lingkaran luar?",
          "answer": "Teorema Thales mengatakan bahwa sudut yang menghadap diameter adalah sudut siku-siku, dan kebalikannya mengatakan bahwa sisi miring segitiga siku-siku adalah diameter. Hal itu menjadikan titik tengah sisi miring sebagai pusat dan setengah sisi miring sebagai jari-jari.",
        },
        {
          "question": "Dapatkah saya mencari jari-jari lingkaran luar dengan menggunakan dua sisi tegak?",
          "answer": "Ya. Pertama, carilah sisi miring dengan [[c = \\sqrt{a^2 + b^2}]], lalu bagi dua: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Untuk sisi tegak 6 cm dan 8 cm, sisi miringnya 10 cm dan jari-jari lingkaran luarnya 5 cm. Gunakan dua langkah yang sama untuk pasangan sisi tegak mana pun, dan periksa hasilnya dengan uji diameter.",
        },
        {
          "question": "Apa yang terjadi jika sisi miring menjadi dua kali lipat?",
          "answer": "Jari-jari lingkaran luar juga menjadi dua kali lipat, karena [[R]] adalah setengah dari [[c]]. Jika sisi miring 10 cm menghasilkan [[R = 5]] cm, sisi miring 20 cm menghasilkan [[R = 10]] cm. Hubungannya berbanding lurus, jadi melipatgandakan tiga kali sisi miring juga melipatgandakan tiga kali jari-jari lingkaran luar.",
        },
        {
          "question": "Apakah lingkaran luar melewati ketiga titik sudut?",
          "answer": "Ya. Itulah definisi lingkaran luar: lingkaran yang melalui setiap titik sudut segitiga. Pada segitiga siku-siku, pusatnya adalah titik tengah sisi miring dan setiap titik sudut terletak tepat [[R]] dari pusat.",
        },
      ],
    },
};
