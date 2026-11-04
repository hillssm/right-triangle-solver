// perimeterGuideTranslations.b5id.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Indonesian (id).
export const B5_ID = {
  "id": {
    "tocHeading": "Navigasi Bagian",
    "tocItems": {
      "sec-intro": "Cara Menghitung Keliling Segitiga Siku-Siku",
      "sec-geometry": "Apa Itu Segitiga Siku-Siku?",
      "sec-definition": "Apa Itu Keliling Segitiga Siku-Siku?",
      "sec-howto": "Cara Menemukan Keliling Segitiga Siku-Siku",
      "sec-examples": "Contoh Langkah demi Langkah Keliling Segitiga Siku-Siku",
      "sec-missing": "Cara Menghitung Keliling Segitiga Siku-Siku dengan Sisi yang Hilang",
      "sec-applications": "Penerapan Nyata Keliling Segitiga Siku-Siku",
      "sec-properties": "Sifat Khusus Keliling Segitiga Siku-Siku",
      "sec-vs-area": "Apa Perbedaan Keliling dan Luas?",
      "sec-semiperimeter": "Apa Hubungan Antara Keliling dan Setengah Keliling?",
      "sec-units": "Memahami Satuan Pengukuran dalam Perhitungan Keliling Segitiga Siku-Siku",
      "sec-mistakes": "Kesalahan Umum Saat Menghitung Keliling Segitiga Siku-Siku",
      "sec-verify": "Cara Memeriksa Apakah Keliling Segitiga Siku-Siku Anda Sudah Benar",
      "sec-related": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
      "sec-faq": "Tanya Jawab",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Menghitung Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Ambil segitiga siku-siku dengan sisi [[a=3]], [[b=4]], dan [[c=5]]. Kelilingnya adalah [[P=3+4+5]], atau [[[\\boxed{P=12\\text{ units}}]]]. Angka 12 memberi tahu jarak penuh mengelilingi batas segitiga: berjalanlah di sepanjang ketiga tepinya dan Anda telah menempuh 12 satuan." },
          { "kind": "p", "text": "Kalkulator ini melakukan penjumlahan itu untuk segitiga siku-siku mana pun. Anda memasukkan dua kaki dan hipotenusa, dan ia mengembalikan panjang batas total dengan langkah pengerjaan dan diagram langsung. Tiga panjang sisi diperlukan karena batas memiliki tiga tepi, dan hipotenusa harus disertakan: ia adalah salah satu dari tiga tepi itu meski tidak pernah menyentuh sudut siku-siku. Kedua kaki membentuk sudut persegi, dan hipotenusa membentang melintasinya untuk menutup bentuknya." },
          { "kind": "p", "text": "Keliling adalah ukuran linear, bukan ukuran luas. Ia menjawab \"berapa banyak bahan tepi yang saya butuhkan?\" dan bukan \"berapa banyak permukaan di dalamnya?\" Perbedaan itu menjadikannya angka yang tepat setiap kali Anda memperkirakan pagar, lis, bingkai, kawat, tali, atau pembatas kain di sekitar bentuk segitiga siku-siku." }
        ]
      },
      "sec-geometry": {
        "h2": "Apa Itu Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "p", "text": "Sebelum penjumlahan dimulai, ketiga sisi harus diberi label dengan benar. Simbol di bawah tetap berlaku di seluruh panduan, dan kalkulator menggunakan nama yang sama." },
          { "kind": "h3", "text": "Definisi Segitiga Siku-Siku" },
          { "kind": "p", "text": "Segitiga siku-siku adalah segitiga yang memiliki satu sudut dalam tepat 90 derajat. Ia memiliki tiga titik sudut, tiga sisi, dua sudut lancip, dan satu sudut siku-siku, yang biasanya ditandai dengan kotak kecil. Kedua sisi yang membentuk sudut siku-siku adalah kaki-kaki; sisi yang berhadapan dengan sudut siku-siku adalah hipotenusa. Karena jumlah sudut segitiga apa pun adalah 180 derajat, [[A+B+C=180^\\circ]], dan dengan [[C=90^\\circ]] maka didapat [[[\\boxed{A+B=90^\\circ}]]]: kedua sudut lancip saling berkomplemen, sehingga mengetahui satu berarti menentukan yang lain. Jumlah sudut penting saat mengidentifikasi segitiga siku-siku karena itu adalah ujian yang harus dilalui panjang sisi: hanya sudut 90 derajat yang asli menghasilkan hubungan sisi yang diandalkan seluruh panduan ini." },
          { "kind": "h3", "text": "Apa Itu Kedua Kaki?" },
          { "kind": "p", "text": "Kaki [[a]] dan kaki [[b]] adalah dua sisi yang bertemu di titik sudut siku-siku, tegak lurus satu sama lain. Salah satunya dapat digambar horizontal atau vertikal tergantung orientasi segitiga; yang mendefinisikannya adalah sudut 90 derajat yang mereka bentuk, bukan arahnya di halaman. Mereka berbeda dari hipotenusa dalam posisi dan panjang: setiap kaki menyentuh sudut siku-siku, dan setiap kaki lebih pendek dari hipotenusa. Dalam pekerjaan keliling, peran mereka sederhana: keduanya adalah tepi batas, sehingga keduanya masuk ke dalam jumlah." },
          { "kind": "h3", "text": "Apa Itu Hipotenusa?" },
          { "kind": "p", "text": "Hipotenusa adalah sisi yang berhadapan dengan sudut siku-siku, selalu sisi terpanjang segitiga. Ia tidak pernah membentuk sudut siku-siku; ia membentang melintasinya, menghubungkan ujung-ujung jauh kedua kaki. Ia berbeda dari kaki-kaki baik dalam posisi maupun panjang: kaki-kaki bertemu pada 90 derajat, sedangkan hipotenusa bertemu setiap kaki pada sudut lancip. Ia melengkapi batas segitiga, itulah sebabnya ia harus disertakan dalam perhitungan keliling. Ketika kedua kaki diketahui, teorema Pythagoras mengembalikannya: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Cara Mengidentifikasi Label Sisi yang Benar" },
          { "kind": "p", "text": "[[a]] dan [[b]] adalah dua sisi yang bertemu pada 90 derajat, dan [[c]] berhadapan dengan sudut siku-siku. Dalam segitiga siku-siku yang tidak merosot, [[c]] adalah sisi terpanjang. Penanda sudut siku-siku memberi tahu sisi mana [[c]]: yaitu sisi yang tidak menyentuh titik sudut itu. Pemeriksaan urutan cepat membantu: urutkan ketiga angka, dan yang terbesar harus berperan sebagai [[c]]. Jika sisi terbesar tidak berada di hadapan sudut persegi, labelnya salah, dan setiap perhitungan yang dibangun di atasnya akan salah pula." },
          { "kind": "h3", "text": "Apakah Rumus Keliling Hanya Berlaku untuk Segitiga Siku-Siku?" },
          { "kind": "p", "text": "Ada perbedaan matematis penting di sini. Rumus [[P=a+b+c]] berlaku untuk setiap segitiga, siku-siku atau tidak: batas tiga sisi mana pun dijumlahkan dengan cara yang sama. Yang ditambahkan kondisi sudut siku-siku adalah hubungan khusus [[a^2+b^2=c^2]], yang berguna untuk menemukan sisi yang hilang dan untuk memeriksa apakah pengukuran tersebut benar-benar menggambarkan segitiga siku-siku. Rumus keliling bersifat universal; hubungan Pythagoras adalah bonus segitiga siku-siku." }
        ],
        "imgAlt": "Segitiga siku-siku ABC dengan kaki a dan b, hipotenusa c, sudut siku-siku di C, dan batas keliling yang disorot",
        "figcaption": "Segitiga ABC: kaki a dan b bertemu pada sudut siku-siku C, hipotenusa c menutup batas, dan P = a + b + c menelusuri ketiga tepinya."
      },
      "sec-definition": {
        "h2": "Apa Itu Keliling Segitiga Siku-Siku?",
        "blocks": [
          { "kind": "h3", "text": "Definisi Keliling" },
          { "kind": "p", "text": "Keliling adalah jarak total mengelilingi batas luar suatu bentuk dua dimensi. Untuk segitiga, ia adalah jumlah ketiga panjang sisinya: [[[\\boxed{P=a+b+c}]]]. Ketiga sisi harus disertakan karena batas tidak lengkap sampai setiap tepi dihitung. Melewatkan satu tidak menghasilkan keliling yang lebih pendek; ia menghasilkan besaran yang berbeda dan salah." },
          { "kind": "h3", "text": "Mengapa Hipotenusa Dihitung dalam Keliling?" },
          { "kind": "p", "text": "Keliling mengukur batas luar secara utuh, dan hipotenusa bukan ukuran pilihan atau internal. Ia adalah salah satu dari tiga tepi luar. Ambil [[a=3]], [[b=4]], [[c=5]]. Perhitungan yang salah [[3+4=7]] hanya menghitung kedua kaki, sisi-sisi sudut persegi. Perhitungan yang benar [[3+4+5=12]] menyusuri seluruh segitiga dan kembali ke awal. Nilai 7 adalah panjang gabungan kedua kaki, bukan keliling penuh, karena jalur dari ujung kaki [[b]] kembali ke awal kaki [[a]] berjalan di sepanjang hipotenusa." },
          { "kind": "h3", "text": "Bagaimana Rumus Keliling Bekerja?" },
          { "kind": "p", "text": "Rumus ini terbagi dalam tiga bagian. Sisi pertama: [[a]]. Sisi kedua: [[b]]. Sisi ketiga: [[c]]. Digabungkan: [[P=a+b+c]]. Penjumlahan sudah cukup karena keliling adalah total panjang, dan panjang-panjang di sepanjang satu jalur cukup dijumlahkan. Tidak perlu pembagian, tidak perlu pemangkatan, tidak perlu trigonometri: rumus ini adalah penggunaan paling sederhana dari definisi batas." },
          { "kind": "h3", "text": "Apa yang Diwakili Keliling dalam Kehidupan Nyata?" },
          { "kind": "p", "text": "Keliling adalah panjang batas total: bahan yang diperlukan untuk mengelilingi suatu objek satu kali. Itu menjadikannya angka di balik ukuran tepi, dimensi bingkai, panjang pembatas, kebutuhan pagar, lis dan cetakan, serta panjang tali dan kawat. Mengukur batas luar adalah pekerjaan yang berbeda dari mengukur permukaan yang tertutup di dalam segitiga. Memagari taman segitiga membutuhkan keliling; menutupi taman yang sama dengan rumput membutuhkan luas. Mencampuradukkan keduanya berarti membeli bahan yang salah." }
        ]
      },
      "sec-howto": {
        "h2": "Cara Menemukan Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Perhitungan ini mengikuti urutan yang jelas. Setiap langkah memiliki tujuan: mengidentifikasi, memeriksa, mensubstitusi, menjumlahkan, dan memverifikasi. Segitiga 3-4-5 mendemonstrasikan setiap langkah." },
          { "kind": "p", "text": "<strong>Langkah 1: Identifikasi ketiga sisi.</strong> Kumpulkan pengukuran [[a=3]], [[b=4]], [[c=5]]. Langkah ini mengumpulkan data mentah sebelum aritmetika apa pun." },
          { "kind": "p", "text": "<strong>Langkah 2: Identifikasi dua kaki yang tegak lurus.</strong> Pastikan bahwa 3 dan 4 adalah kaki-kaki, sisi-sisi yang membentuk sudut 90 derajat. Ini menetapkan peran yang benar untuk [[a]] dan [[b]]." },
          { "kind": "p", "text": "<strong>Langkah 3: Identifikasi hipotenusa di hadapan sudut siku-siku.</strong> Pastikan bahwa 5 adalah hipotenusa: ia adalah sisi terpanjang dan terletak berhadapan dengan sudut persegi. Ini mencegah kesalahan pelabelan yang paling umum." },
          { "kind": "p", "text": "<strong>Langkah 4: Pastikan ketiga pengukuran menggunakan satuan yang kompatibel.</strong> Ketiganya adalah satuan polos di sini, sehingga tidak diperlukan konversi. Langkah ini mencegah penjumlahan meter dengan kaki." },
          { "kind": "p", "text": "<strong>Langkah 5: Tuliskan rumusnya.</strong> [[P=a+b+c]]. Menuliskannya menjaga strukturnya tetap terlihat saat mensubstitusi." },
          { "kind": "p", "text": "<strong>Langkah 6: Substitusikan pengukuran yang diketahui.</strong> [[P=3+4+5]]. Setiap simbol diganti dengan angkanya." },
          { "kind": "p", "text": "<strong>Langkah 7: Jumlahkan ketiga nilai.</strong> [[P=12]]. Satu penjumlahan adalah seluruh aritmetikanya." },
          { "kind": "p", "text": "<strong>Langkah 8: Sertakan satuan pengukuran linear yang benar.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Keliling adalah panjang, sehingga ia memakai satuan linear, tidak pernah satuan persegi." },
          { "kind": "p", "text": "<strong>Langkah 9: Verifikasi hasilnya.</strong> Periksa [[3^2+4^2=5^2]]: [[9+16=25]]. Sisi-sisinya memenuhi teorema Pythagoras, sehingga segitiganya benar-benar siku-siku dan kelilingnya dapat dipercaya." },
          { "kind": "h3", "text": "Mengapa Penting Mengidentifikasi Sisi dengan Benar?" },
          { "kind": "p", "text": "Pelabelan yang salah memengaruhi semua hal setelahnya. Verifikasi matematis gagal ketika hipotenusa salah dilabeli, karena pemeriksaan Pythagoras mengharapkan [[c]] menjadi sisi terpanjang. Perhitungan sisi yang hilang memakai rumus berbeda untuk kaki yang hilang versus hipotenusa yang hilang, sehingga label yang tertukar menerapkan rumus yang salah. Input kalkulator terikat pada [[a]], [[b]], dan [[c]], sehingga nilai yang tertukar menghasilkan jawaban yang tampak masuk akal tetapi salah. Visualisasi segitiga langsung juga akan terlihat terdistorsi ketika nilai kaki berada di slot hipotenusa. Melabeli dengan benar sekali saja melindungi setiap langkah berikutnya." },
          { "kind": "h3", "text": "Bisakah Saya Menghitung Keliling Tanpa Mengetahui Hipotenusa?" },
          { "kind": "p", "text": "Bisa, dengan satu langkah tambahan di awal. Jika kedua kaki diketahui, hipotenusa dapat ditemukan dengan teorema Pythagoras: [[c=\\sqrt{a^2+b^2}]]. Setelah [[c]] diketahui, keliling diperoleh dengan penjumlahan biasa. Ini tidak berarti kalkulator keliling yang ada hanya menerima dua sisi: kalkulator membutuhkan ketiga input, sehingga sisi yang hilang harus dihitung dengan tangan (atau dengan kalkulator sisi) sebelum memasukkan nilai." }
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Empat contoh di bawah mempertahankan kasus pengerjaan yang sudah ada dan memperluas penjelasannya. Setiap contoh mensubstitusikan, menjumlahkan, lalu memverifikasi melalui teorema Pythagoras." },
          { "kind": "h3", "text": "Contoh 1: Segitiga Siku-Siku 3-4-5" },
          { "kind": "p", "text": "Diketahui: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Rumus: [[P=a+b+c]]" },
          { "kind": "p", "text": "Substitusikan: [[P=3+4+5]]" },
          { "kind": "p", "text": "Jumlahkan: [[P=12]]" },
          { "kind": "p", "text": "Jawaban akhir: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifikasi: [[3^2+4^2=5^2]], yaitu [[9+16=25]]. Ukuran-ukuran tersebut memenuhi teorema Pythagoras, sehingga membentuk segitiga siku-siku: dua persegi kecil yang dibangun pada kaki-kakinya tepat mengisi persegi yang dibangun pada hipotenusanya." },
          { "kind": "h3", "text": "Contoh 2: Segitiga Siku-Siku 5-12-13" },
          { "kind": "p", "text": "Diketahui: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Substitusikan: [[P=5+12+13]]" },
          { "kind": "p", "text": "Jawaban akhir: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifikasi: [[5^2+12^2=13^2]], yaitu [[25+144=169]]. Kesetaraan tersebut menegaskan segitiga siku-siku yang valid." },
          { "kind": "h3", "text": "Contoh 3: Segitiga Siku-Siku 8-15-17" },
          { "kind": "p", "text": "Diketahui: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Substitusikan: [[P=8+15+17]]" },
          { "kind": "p", "text": "Jawaban akhir: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifikasi: [[8^2+15^2=17^2]], yaitu [[64+225=289]]. Lagi-lagi persegi-perseginya seimbang, menegaskan sudut siku-sikunya." },
          { "kind": "h3", "text": "Contoh 4: Panjang Sisi Desimal" },
          { "kind": "p", "text": "Diketahui: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Substitusikan: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Jawaban akhir: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifikasi: [[2.5^2+6^2=6.5^2]], yaitu [[6.25+36=42.25]]. Nilai desimal tidak mengubah rumus: penjumlahan bekerja dengan cara yang sama untuk bilangan bulat maupun desimal, dan aritmetika verifikasinya identik." }
        ],
        "table": {
          "headers": ["Segitiga", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling P", "Verifikasi"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Tabel menunjukkan bagaimana panjang sisi yang berbeda menghasilkan ukuran batas yang berbeda, sementara irama dua langkah yang sama, jumlahkan lalu verifikasi, tetap tidak berubah."]
      },
      "sec-missing": {
        "h2": "Cara Menghitung Keliling Segitiga Siku-Siku dengan Sisi yang Tidak Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator keliling yang sudah ada membutuhkan ketiga panjang sisi. Jika satu sisi tidak diketahui, hitung dulu dengan teorema Pythagoras, lalu jumlahkan. Tiga kasus di bawah mencakup semua kemungkinan." },
          { "kind": "h3", "text": "Kasus 1: Mencari Hipotenusa yang Tidak Diketahui" },
          { "kind": "p", "text": "Jika kedua kaki diketahui: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Sekarang hitung: [[P=6+8+10]], sehingga [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Kasus 2: Mencari Kaki yang Tidak Diketahui" },
          { "kind": "p", "text": "Jika hipotenusa [[c]] dan kaki [[a]] diketahui: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Sekarang hitung: [[P=5+12+13]], sehingga [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Kasus 3: Mencari Kaki Lain yang Tidak Diketahui" },
          { "kind": "p", "text": "Jika hipotenusa [[c]] dan kaki [[b]] diketahui: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Contoh: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Sekarang hitung: [[P=8+15+17]], sehingga [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Mengapa Anda Harus Mencari Sisi yang Tidak Diketahui Terlebih Dahulu?" },
          { "kind": "p", "text": "Keliling mewakili batas yang lengkap. Mengabaikan sisi yang tidak diketahui menghasilkan jawaban yang tidak lengkap: dua sisi yang diketahui hanya memberi lintasan parsial, bukan keliling. Perhitungan sisi-yang-tidak-diketahui ini merupakan metode matematika pendukung, bukan mode tambahan dalam kalkulator keliling yang sudah ada. Ketika Anda hanya mengetahui dua sisi, Kalkulator Sisi Segitiga Siku-Siku memulihkan sisi ketiga, lalu kalkulator keliling menyelesaikan pekerjaannya." }
        ],
        "imgAlt": "Segitiga siku-siku dengan kaki 6 dan 8, hipotenusa 10 ditemukan dengan Pythagoras, lalu keliling 24",
        "figcaption": "Kaki 6 dan 8 menghasilkan c = 10 dengan teorema Pythagoras, lalu P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Penerapan Keliling Segitiga Siku-Siku dalam Kehidupan Nyata",
        "blocks": [
          { "kind": "p", "text": "Dua belas contoh realistis yang dikerjakan sepenuhnya menyusul. Setiap contoh menyebutkan situasi, memberikan tiga ukuran sisi, menunjukkan penjumlahan, dan menjelaskan apa yang dibantu diperkirakan oleh hasilnya. Perlakukan setiap contoh sebagai model geometri segitiga siku-siku yang disederhanakan: benda nyata jarang berbentuk segitiga sempurna, sehingga kelonggaran material, sisa potongan, dan verifikasi konstruksi berada di luar angka keliling itu sendiri." },
          { "kind": "h3", "text": "Contoh 1: Bingkai Jendela Kaca Segitiga" },
          { "kind": "p", "text": "Sebuah bingkai jendela segitiga memiliki [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Kemudian [[P=3+4+5]], sehingga [[[\\boxed{P=12\\text{ m}}]]]. Angka 12 meter mewakili total panjang di sekeliling garis luar segitiga jendela, yaitu panjang bahan bingkai yang dipotong. Sambungan bingkai dan kelonggaran potongan mungkin membutuhkan material tambahan di luar 12 meter tersebut." },
          { "kind": "h3", "text": "Contoh 2: Lis Tepi Atap" },
          { "kind": "p", "text": "Sebuah bagian atap segitiga siku-siku memiliki [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Kemudian [[P=6+8+10]], sehingga [[[\\boxed{P=24\\text{ ft}}]]]. Keliling memperkirakan lis di sekeliling garis luar ujung atap yang berbentuk segitiga. Sudut dan tumpang tindih di bagian atap menambah panjang pembelian." },
          { "kind": "h3", "text": "Contoh 3: Pagar Taman Segitiga" },
          { "kind": "p", "text": "Sebuah bagian taman segitiga memiliki [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Kemudian [[P=5+12+13]], sehingga [[[\\boxed{P=30\\text{ m}}]]]. Total panjang batas memperkirakan pagar yang dibutuhkan mengelilingi taman. Gerbang, tiang, tumpang tindih, dan kelonggaran pemasangan dihitung terpisah dari 30 meter garis pagar." },
          { "kind": "h3", "text": "Contoh 4: Braket Penyangga Baja" },
          { "kind": "p", "text": "Sebuah braket logam segitiga siku-siku memiliki [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Kemudian [[P=8+15+17]], sehingga [[[\\boxed{P=40\\text{ cm}}]]]. Keliling menggambarkan tepi luar braket dan membantu memperkirakan material pelindung tepi. Keliling tidak menentukan kekuatan struktural, yang bergantung pada ketebalan, paduan, dan jalur beban, bukan panjang tepi." },
          { "kind": "h3", "text": "Contoh 5: Spanduk Kain Segitiga" },
          { "kind": "p", "text": "Sebuah spanduk kain memiliki [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Kemudian [[P=9+12+15]], sehingga [[[\\boxed{P=36\\text{ ft}}]]]. Keliling memperkirakan total panjang tepi yang perlu dikelim atau dijilid. Kain tambahan untuk jahitan dan lipatan tidak termasuk dalam 36 kaki tersebut." },
          { "kind": "h3", "text": "Contoh 6: Bingkai Papan Tanda Segitiga" },
          { "kind": "p", "text": "Sebuah panel papan tanda segitiga siku-siku memiliki [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Kemudian [[P=12+16+20]], sehingga [[[\\boxed{P=48\\text{ in}}]]]. Keliling memperkirakan bingkai atau lis dekoratif di sekeliling panel." },
          { "kind": "h3", "text": "Contoh 7: Batas Lansekap" },
          { "kind": "p", "text": "Sebuah bagian lansekap segitiga siku-siku memiliki [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Kemudian [[P=7+24+25]], sehingga [[[\\boxed{P=56\\text{ m}}]]]. Hasil ini memperkirakan panjang penuh pembatas lansekap untuk bagian tersebut, sebelum sisa potongan dan tumpang tindih sambungan." },
          { "kind": "h3", "text": "Contoh 8: Bingkai Penyangga Panel Surya" },
          { "kind": "p", "text": "Sebuah bingkai penyangga kecil segitiga siku-siku memiliki [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Kemudian [[P=9+40+41]], sehingga [[[\\boxed{P=90\\text{ cm}}]]]. Keliling menggambarkan garis luar segitiga yang lengkap dari bingkai." },
          { "kind": "h3", "text": "Contoh 9: Batas Kanopi Segitiga" },
          { "kind": "p", "text": "Sebuah bagian kanopi segitiga siku-siku memiliki [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Kemudian [[P=15+20+25]], sehingga [[[\\boxed{P=60\\text{ ft}}]]]. Keliling memperkirakan material batas yang dibutuhkan di sekeliling kain, tidak termasuk perangkat keras pemasangan." },
          { "kind": "h3", "text": "Contoh 10: Lis Ujung Atap Gudang" },
          { "kind": "p", "text": "Sebuah bagian ujung atap gudang yang disederhanakan memiliki [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Kemudian [[P=11+60+61]], sehingga [[[\\boxed{P=132\\text{ ft}}]]]. Total keliling mewakili tiga tepi luar dari bagian segitiga yang dimodelkan." },
          { "kind": "h3", "text": "Contoh 11: Panel Fabrikasi Industri" },
          { "kind": "p", "text": "Sebuah panel fabrikasi segitiga siku-siku memiliki [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Kemudian [[P=13+84+85]], sehingga [[[\\boxed{P=182\\text{ cm}}]]]. Hasilnya membantu memperkirakan profil pelindung tepi atau material batas untuk panel." },
          { "kind": "h3", "text": "Contoh 12: Gusset Penyangga Kayu Lapis" },
          { "kind": "p", "text": "Sebuah pelat penyangga kayu lapis segitiga siku-siku memiliki [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Kemudian [[P=28+45+53]], sehingga [[[\\boxed{P=126\\text{ cm}}]]]. Keliling mewakili tepi luar yang lengkap dari pelat kayu lapis." }
        ],
        "table": {
          "headers": ["Penerapan praktis", "Kaki a", "Kaki b", "Hipotenusa c", "Keliling P", "Satuan ukur"],
          "rows": [
            ["Bingkai jendela kaca segitiga", "3", "4", "5", "12", "m"],
            ["Lis tepi atap", "6", "8", "10", "24", "ft"],
            ["Pagar taman segitiga", "5", "12", "13", "30", "m"],
            ["Braket penyangga baja", "8", "15", "17", "40", "cm"],
            ["Spanduk kain segitiga", "9", "12", "15", "36", "ft"],
            ["Bingkai papan tanda segitiga", "12", "16", "20", "48", "in"],
            ["Batas lansekap", "7", "24", "25", "56", "m"],
            ["Bingkai penyangga panel surya", "9", "40", "41", "90", "cm"],
            ["Batas kanopi segitiga", "15", "20", "25", "60", "ft"],
            ["Lis ujung atap gudang", "11", "60", "61", "132", "ft"],
            ["Panel fabrikasi industri", "13", "84", "85", "182", "cm"],
            ["Gusset penyangga kayu lapis", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Ingat batas-batas praktis: kelonggaran material mungkin diperlukan, sisa potongan tidak termasuk, sambungan bingkai dapat menambah kebutuhan material, gerbang dan bukaan memengaruhi jumlah pagar, ukuran konstruksi sebenarnya harus diverifikasi, dan keliling saja tidak menentukan kekuatan struktural atau kapasitas beban."],
        "imgAlt": "Empat contoh keliling segitiga siku-siku di dunia nyata: bingkai jendela, lis atap, batas taman, braket baja",
        "figcaption": "Jendela, atap, taman, dan braket: setiap panel menelusuri batas segitiga beserta kelilingnya."
      },
      "sec-properties": {
        "h2": "Sifat Khusus Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Di luar penjumlahan sederhana, keliling segitiga siku-siku mematuhi beberapa pertidaksamaan tajam. Pertidaksamaan ini sekaligus menjadi pemeriksaan kewajaran yang cepat untuk setiap hasil perhitungan." },
          { "kind": "h3", "text": "Keliling Lebih Besar dari Dua Kali Hipotenusa" },
          { "kind": "p", "text": "Untuk setiap segitiga yang valid, pertidaksamaan segitiga memberikan [[a+b>c]]. Tambahkan [[c]] ke kedua sisi: [[a+b+c>2c]]. Oleh karena itu [[[\\boxed{P>2c}]]]. Dengan bahasa sederhana: kedua kaki jika digabung selalu lebih panjang daripada hipotenusa, sehingga menambahkan hipotenusa ke kedua sisi membuat pertidaksamaan tetap mengarah ke arah yang sama. Untuk segitiga 3-4-5, [[P=12]] dan [[2c=10]], dan 12 memang lebih besar dari 10." },
          { "kind": "h3", "text": "Keliling Lebih Kecil dari Tiga Kali Hipotenusa" },
          { "kind": "p", "text": "Karena hipotenusa lebih panjang daripada kedua kaki, [[a<c]] dan [[b<c]]. Oleh karena itu [[a+b<2c]]. Menambahkan [[c]] menghasilkan [[[\\boxed{P<3c}]]]. Ini pemeriksaan cepat yang berguna: keliling yang diklaim sama atau lebih besar dari tiga kali hipotenusa tidak mungkin dimiliki segitiga siku-siku yang valid. Untuk segitiga 3-4-5, [[3c=15]], dan 12 berada jauh di bawahnya." },
          { "kind": "h3", "text": "Keliling Segitiga 45-45-90" },
          { "kind": "p", "text": "Dalam segitiga 45-45-90 kedua kakinya memiliki panjang yang sama. Misalkan setiap kaki sama dengan [[k]]. Hipotenusanya adalah [[c=k\\sqrt{2}]]. Oleh karena itu [[P=k+k+k\\sqrt{2}]], atau [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Dengan [[k=5]], kelilingnya adalah [[5(2+\\sqrt{2})\\approx17.07]]: dua kaki sepanjang 5 ditambah hipotenusa sekitar 7,07." },
          { "kind": "h3", "text": "Keliling Segitiga 30-60-90" },
          { "kind": "p", "text": "Jika kaki terpendek adalah [[k]], maka kaki yang lebih panjang adalah [[k\\sqrt{3}]] dan hipotenusanya adalah [[2k]]. Oleh karena itu [[P=k+k\\sqrt{3}+2k]], atau [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Dengan [[k=4]], sisi-sisinya adalah 4, sekitar 6,93, dan 8, menghasilkan keliling sekitar 18,93." },
          { "kind": "h3", "text": "Segitiga Siku-Siku Mana yang Memiliki Keliling Terbesar untuk Hipotenusa Tetap?" },
          { "kind": "p", "text": "Secara intuitif, ketika hipotenusa tetap, keliling bertambah seiring kedua kaki bertambah bersama, dan keliling terbesar tercapai ketika tidak ada kaki yang dikorbankan: ketika kedua kakinya sama. Itulah segitiga 45-45-90. Pernyataan tepatnya menggunakan pertidaksamaan [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Karena [[a^2+b^2=c^2]], maka [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], dengan kesetaraan tepat ketika [[a=b]]. Jadi di antara semua segitiga siku-siku yang berbagi satu hipotenusa, segitiga siku-siku sama kaki memenangkan perlombaan keliling." }
        ]
      },
      "sec-vs-area": {
        "h2": "Apa Perbedaan antara Keliling dan Luas?",
        "blocks": [
          { "kind": "p", "text": "Keliling dan luas sama-sama menggambarkan segitiga, tetapi keduanya menjawab pertanyaan yang berbeda. Bagian ini menarik garisnya dengan saksama." },
          { "kind": "h3", "text": "Keliling Mengukur Batas Luar" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mengukur total jarak mengelilingi segitiga. Satuannya linear: meter, sentimeter, milimeter, kaki, inci. Keliling memberi tahu seberapa banyak material yang menelusuri tepinya." },
          { "kind": "h3", "text": "Luas Mengukur Permukaan yang Dilingkupi" },
          { "kind": "p", "text": "Untuk segitiga siku-siku, [[[\\boxed{K=\\frac{ab}{2}}]]]. Kedua kaki yang tegak lurus berperan sebagai alas dan tinggi, sehingga hipotenusa tidak muncul dalam rumus. Luas menggunakan satuan persegi: meter persegi, sentimeter persegi, kaki persegi, inci persegi. Luas memberi tahu seberapa banyak permukaan yang berada di dalam batas." },
          { "kind": "h3", "text": "Perbandingan Terperinci Menggunakan Segitiga 3-4-5" },
          { "kind": "p", "text": "Keliling: [[P=3+4+5]], sehingga [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Luas: [[K=\\frac{3\\times4}{2}]], sehingga [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Angka 12 dan 6 menggambarkan sifat yang sepenuhnya berbeda dari segitiga yang sama: satu adalah jalan mengelilinginya, yang lain adalah tanah yang dicakupnya." },
          { "kind": "h3", "text": "Dapatkah Dua Segitiga Siku-Siku Memiliki Keliling Sama tetapi Luas Berbeda?" },
          { "kind": "p", "text": "Ya. Keliling saja tidak secara unik menentukan luas; bentuk dan proporsi segitiga memengaruhi luas yang dilingkupinya. Segitiga 3-4-5 memiliki keliling 12 dan luas 6. Segitiga 45-45-90 juga dapat memiliki keliling 12: dari [[P=k(2+\\sqrt{2})=12]], kakinya adalah [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], dan luasnya adalah [[K=\\frac{k^2}{2}\\approx6.18]] satuan persegi, sedikit lebih besar dari 6. Panjang batas sama, interior berbeda: bentuk sama kaki melingkupi sedikit lebih banyak." }
        ],
        "imgAlt": "Segitiga 3-4-5 dengan batas tersorot P sama dengan 12 dan interior terarsir luas K sama dengan 6",
        "figcaption": "Tepi yang disorot adalah keliling; interior yang diarsir adalah luas. Dua pengukuran berbeda."
      },
      "sec-semiperimeter": {
        "h2": "Apa Hubungan antara Keliling dan Setengah Keliling?",
        "blocks": [
          { "kind": "p", "text": "Setengah keliling adalah separuh dari keliling penuh: [[[\\boxed{s=\\frac{P}{2}}]]]. Untuk segitiga siku-siku, nilainya adalah [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Ia tetap menjadi ukuran pendukung di halaman ini, bukan subjek utama kedua." },
          { "kind": "h3", "text": "Contoh Numerik" },
          { "kind": "p", "text": "Gunakan [[a=3,\\;b=4,\\;c=5]]. Kelilingnya adalah [[P=12]], sehingga setengah kelilingnya adalah [[s=\\frac{12}{2}=6]]. Keduanya adalah ukuran linear dalam satuan yang sama; yang satu hanyalah separuh dari yang lain." },
          { "kind": "h3", "text": "Mengapa Setengah Keliling Berguna?" },
          { "kind": "p", "text": "Setengah keliling adalah ukuran antara yang penting dalam geometri segitiga. Ia muncul dalam rumus Heron untuk luas, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], dan dalam hubungan jari-jari dalam [[K=rs]], dan ia menyederhanakan beberapa pembuktian geometri tingkat lanjut. Kapan pun suatu rumus meminta [[s]], hitung dulu kelilingnya lalu bagi dua. Untuk alat khusus, gunakan Kalkulator Setengah Keliling Segitiga Siku-Siku." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Satuan Pengukuran dalam Perhitungan Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Keliling bekerja dalam satuan panjang apa pun: meter, sentimeter, milimeter, kilometer, kaki, inci, yard, atau mil. Angkanya berubah mengikuti satuan, tetapi segitiganya tidak." },
          { "kind": "h3", "text": "Mengapa Ketiga Ukuran Sisi Harus Menggunakan Satuan yang Kompatibel?" },
          { "kind": "p", "text": "Keliling dihitung melalui penjumlahan, dan penjumlahan hanya masuk akal antara kuantitas sejenis. Menambahkan 3 kaki ke 48 inci tanpa konversi mencampur dua skala dan menghasilkan total yang tidak bermakna. Ubah setiap sisi ke satu satuan bersama terlebih dahulu, lalu jumlahkan." },
          { "kind": "h3", "text": "Contoh Konversi Satuan Terperinci" },
          { "kind": "p", "text": "Diketahui [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Ubah inci ke kaki: [[48\\text{ inches}=4\\text{ ft}]]. Sekarang ketiga sisi dalam kaki, sehingga [[P=3+4+5]] dan [[[\\boxed{P=12\\text{ ft}}]]]. Konversi harus dilakukan sebelum penjumlahan, bukan sesudahnya." },
          { "kind": "h3", "text": "Bagaimana Pemilih Satuan Kalkulator Membantu" },
          { "kind": "p", "text": "Setiap dari ketiga masukan di halaman ini memiliki pemilih satuannya sendiri. Ketika Anda memilih satuan berbeda untuk sisi yang berbeda, kalkulator mengubah setiap masukan ke satuan bersama secara otomatis sebelum menjumlahkan: ia membaca satuan yang dipilih untuk sisi pertama dan menyesuaikan dua sisi lainnya agar cocok, menggunakan rasio panjang yang tepat (1 inci = 0,0254 m, 1 kaki = 0,3048 m, dan seterusnya). Hasilnya dilaporkan dalam satuan bersama tersebut. Anda masih bisa mengonversi secara manual seperti contoh di atas, tetapi pemilih-pemilih itu menghilangkan hitung-hitungannya." },
          { "kind": "h3", "text": "Bekerja dengan Ukuran Desimal" },
          { "kind": "p", "text": "Gunakan [[a=2.5,\\;b=6,\\;c=6.5]]. Maka [[P=2.5+6+6.5]], sehingga [[[\\boxed{P=15\\text{ units}}]]]. Nilai desimal dijumlahkan persis dengan cara yang sama seperti bilangan bulat; koma desimalnya tinggal disejajarkan dalam penjumlahan." },
          { "kind": "h3", "text": "Bekerja dengan Panjang Sisi Irasional" },
          { "kind": "p", "text": "Ambil segitiga dengan [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Maka [[P=1+1+\\sqrt{2}]], sehingga [[[\\boxed{P=2+\\sqrt{2}}]]], kira-kira [[P\\approx3.4142]]. Mempertahankan bentuk akar yang tepat berguna dalam soal matematika karena menjaga ketepatan penuh; pendekatan desimalnya untuk pelaporan akhir." },
          { "kind": "h3", "text": "Mengapa Anda Harus Menghindari Pembulatan Terlalu Dini?" },
          { "kind": "p", "text": "Pembulatan prematur menyuntikkan kesalahan kecil yang kemudian dipertahankan oleh penjumlahan akhir. Jika sebuah sisi irasional, seperti [[\\sqrt{2}]], membulatkannya ke 1,41 sebelum menjumlahkan akan memotong sebagian panjang sebenarnya, dan dengan beberapa sisi seperti itu kesalahannya menumpuk. Pertahankan ketepatan penuh selama perhitungan antara dan bulatkan hanya hasil akhir sesuai ketelitian yang diminta soal." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesalahan Umum Saat Menghitung Keliling Segitiga Siku-Siku",
        "blocks": [
          { "kind": "p", "text": "Enam belas kesalahan menyebabkan hampir setiap keliling yang salah. Masing-masing dijelaskan beserta penyebab dan pendekatan yang benar." },
          { "kind": "p", "text": "<strong>1. Lupa menyertakan hipotenusa.</strong> Kesalahan paling umum: menjumlahkan kedua kaki lalu berhenti. Dengan 3-4-5 ini menghasilkan 7, bukan 12. Selalu jumlahkan ketiga sisi." },
          { "kind": "p", "text": "<strong>2. Hanya menggunakan kedua kaki.</strong> Akar penyebab yang sama seperti di atas, sering karena salah membaca soal. Batas memiliki tiga sisi; hitung tiga." },
          { "kind": "p", "text": "<strong>3. Mencampuradukkan keliling dengan luas.</strong> Keliling adalah [[a+b+c]] dalam satuan linear; luas adalah [[ab/2]] dalam satuan persegi. Baca soalnya: \"around\" (di sekeliling) berarti keliling, \"inside\" (di dalam) berarti luas." },
          { "kind": "p", "text": "<strong>4. Memasukkan hipotenusa sebagai kaki.</strong> Menempatkan nilai terpanjang di kolom kaki merusak geometrinya. Kolom hipotenusa harus menampung sisi terpanjang." },
          { "kind": "p", "text": "<strong>5. Memilih sisi yang salah sebagai hipotenusa.</strong> Jika 4 dimasukkan sebagai [[c]] sementara 5 berada di kolom kaki, setiap pemeriksaan gagal. Urutkan dulu nilainya: yang terbesar adalah [[c]]." },
          { "kind": "p", "text": "<strong>6. Menggunakan ukuran yang tidak membentuk segitiga siku-siku.</strong> Uji [[a^2+b^2=c^2]] sebelum mempercayai label \"segitiga siku-siku\". Jika gagal, rumus keliling tetap menjumlahkan, tetapi segitiganya tidak siku-siku." },
          { "kind": "p", "text": "<strong>7. Mencampur sentimeter dan meter.</strong> Menambahkan 3 m ke 40 cm tidak menghasilkan 43 apa pun. Ubah dulu ke satu satuan." },
          { "kind": "p", "text": "<strong>8. Mencampur kaki dan inci.</strong> Perangkap imperial yang klasik. Ubah inci ke kaki (bagi dengan 12) sebelum menjumlahkan, atau biarkan pemilih satuan yang melakukannya." },
          { "kind": "p", "text": "<strong>9. Melaporkan keliling dalam satuan persegi.</strong> Keliling 12 cm persegi adalah kesalahan kategori: jalan mengelilingi segitiga adalah panjang, diukur dalam cm, m, kaki, atau inci." },
          { "kind": "p", "text": "<strong>10. Membulatkan ukuran terlalu dini.</strong> Membulatkan [[\\sqrt{2}]] ke 1,4 sebelum menjumlahkan menumpuk kesalahan. Bulatkan hanya jawaban akhirnya." },
          { "kind": "p", "text": "<strong>11. Lupa menghitung sisi yang hilang.</strong> Dua sisi yang diketahui bukanlah keliling. Pulihkan dulu sisi ketiga dengan teorema Pythagoras, lalu jumlahkan." },
          { "kind": "p", "text": "<strong>12. Menggunakan teorema Pythagoras secara keliru.</strong> Bentuk hipotenusa menjumlahkan kuadrat ([[c=\\sqrt{a^2+b^2}]]); bentuk kaki mengurangkan ([[b=\\sqrt{c^2-a^2}]]). Menukarnya menciptakan sisi yang tidak ada." },
          { "kind": "p", "text": "<strong>13. Memasukkan panjang sisi negatif atau nol.</strong> Panjang selalu positif. Masukan nol atau negatif tidak menggambarkan segitiga apa pun, dan kalkulator dengan tepat menolaknya." },
          { "kind": "p", "text": "<strong>14. Mengabaikan ketaksamaan segitiga.</strong> Jika [[a+b\\leq c]], ketiga panjang itu sama sekali tidak bisa membentuk segitiga. Periksa sebelum menghitung." },
          { "kind": "p", "text": "<strong>15. Menganggap setengah keliling adalah keliling penuh.</strong> Membagi jumlah dengan 2 menghasilkan [[s]], bukan [[P]]. Untuk 3-4-5, [[(3+4+5)/2=6]] adalah setengah keliling; kelilingnya adalah 12." },
          { "kind": "p", "text": "<strong>16. Menganggap keliling saja menentukan luas segitiga.</strong> Seperti ditunjukkan perbandingan 3-4-5 dengan 45-45-90, keliling yang sama bisa menyembunyikan luas yang berbeda. Keliling menetapkan batas, bukan bagian dalamnya." },
          { "kind": "p", "text": "<strong>Salah versus benar, berdampingan.</strong> Diketahui [[a=3,\\;b=4,\\;c=5]]: yang salah adalah [[P=3+4=7]], yang menghilangkan hipotenusa dan hanya mengukur kedua kaki. Yang benar adalah [[P=3+4+5=12]]. Dan [[(3+4+5)/2=6]] adalah setengah keliling, kuantitas berbeda dengan kegunaannya sendiri, bukan keliling penuh." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Apakah Keliling Segitiga Siku-Siku Anda Benar",
        "blocks": [
          { "kind": "p", "text": "Tujuh pemeriksaan independen menangkap hampir setiap kesalahan. Segitiga 3-4-5 mendemonstrasikan masing-masingnya. Pemeriksaan independen penting karena gagal dengan cara yang berbeda: ketika dua metode yang tidak terkait sepakat, jawabannya telah meraih kepercayaannya, entah untuk pekerjaan rumah, gambar teknis, atau perencanaan bahan." },
          { "kind": "p", "text": "<strong>Metode 1: Jumlahkan lagi ketiga sisi.</strong> Hitung ulang [[P=a+b+c]] dari awal: [[3+4+5=12]]. Putaran kedua menangkap kesalahan ketik dan hitung." },
          { "kind": "p", "text": "<strong>Metode 2: Periksa hubungan Pythagoras.</strong> Periksa [[a^2+b^2=c^2]]: [[9+16=25]]. Ini memastikan sisi-sisinya membentuk segitiga siku-siku, yang memvalidasi label sisi tempat keliling bergantung." },
          { "kind": "p", "text": "<strong>Metode 3: Periksa hipotenusa.</strong> Pastikan [[c>a]] dan [[c>b]]: 5 lebih besar dari 3 dan lebih besar dari 4. Jika hipotenusa yang diduga bukan sisi terpanjang, labelnya salah." },
          { "kind": "p", "text": "<strong>Metode 4: Periksa ketaksamaan segitiga.</strong> Pastikan [[a+b>c]]: [[3+4=7>5]]. Jumlah dua sisi mana pun harus melebihi sisi ketiga, atau tidak ada segitiga." },
          { "kind": "p", "text": "<strong>Metode 5: Periksa batas keliling.</strong> Pastikan [[2c<P<3c]]: [[10<12<15]]. Batas-batas ini adalah pemeriksaan mental cepat untuk setiap segitiga siku-siku yang valid." },
          { "kind": "p", "text": "<strong>Metode 6: Periksa satuan pengukuran.</strong> Pastikan ketiga masukan menggunakan satu satuan yang sama. Satuan campuran membatalkan penjumlahan bahkan ketika hitungannya sempurna." },
          { "kind": "p", "text": "<strong>Metode 7: Bandingkan hasilnya dengan visualisasi langsung.</strong> Diagram yang ada di halaman ini menggambar ulang segitiga dari masukan Anda. Jika sebuah sisi salah label atau nilainya salah ketik, gambarnya terlihat salah: hipotenusa yang lebih pendek dari kaki, atau bentuk yang tidak menutup. Percayai gambarnya ketika ia tidak sepakat dengan angkanya, lalu temukan kesalahan masukannya." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tiga Sisi, Satu Batas, Tanpa Jalan Pintas",
        "blocks": [
          { "kind": "p", "text": "Keliling segitiga siku-siku adalah ide paling sederhana di halaman ini dan paling mudah salah karena kelalaian. Rumusnya meminta tiga angka karena batasnya memiliki tiga sisi, dan hipotenusa pantas mendapat tempat dalam penjumlahan sebagai sisi yang menutup bentuk. Segala hal lainnya, metode langkah demi langkah, pemulihan sisi yang hilang, ketaksamaan, pemeriksaan verifikasi, ada untuk melindungi satu penjumlahan itu dari kesalahan pelabelan dan satuan kecil yang menghasilkan jawaban salah yang terlihat masuk akal." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini kapan pun ketiga sisi telah diukur, pulihkan sisi yang hilang melalui teorema Pythagoras ketika belum, dan periksa hasilnya terhadap batas 2c < P < 3c sebelum angka itu masuk ke pesanan bahan. Ketika pertanyaannya beralih ke permukaan di dalam batas, kalkulator luas menanti; ketika beralih ke separuh batas untuk rumus yang lebih dalam, kalkulator setengah keliling mengambil alih." }
        ]
      }
    },
    "relatedHeading": "Jelajahi Kalkulator Segitiga Siku-Siku Terkait",
    "relatedIntro": "Masing-masing alat ini memperluas perhitungan keliling ke satu arah: sisi yang hilang, setengah keliling, permukaan, pengukuran gabungan, atau teorema di balik semuanya.",
    "relatedItems": [
      "Kalkulator Pengukuran Segitiga Siku-Siku",
      "Kalkulator Setengah Keliling Segitiga Siku-Siku",
      "Kalkulator Sisi Segitiga Siku-Siku",
      "Kalkulator Luas Segitiga Siku-Siku",
      "Kalkulator Teorema Pythagoras"
    ],
    "faqHeading": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      { "question": "Apa rumus keliling segitiga siku-siku?", "answer": "Rumusnya adalah P = a + b + c, di mana a dan b adalah kedua kaki yang membentuk sudut 90 derajat dan c adalah hipotenusa, sisi terpanjang. Jumlahkan ketiga panjang sisi; hasilnya adalah total panjang batas dalam satuan linear." },
      { "question": "Bagaimana cara menghitung keliling segitiga siku-siku?", "answer": "Kenali kedua kaki dan hipotenusanya, pastikan ketiganya memakai satuan yang sama, substitusikan ke P = a + b + c, lalu jumlahkan. Untuk segitiga 3-4-5: P = 3 + 4 + 5 = 12 satuan. Kalkulator di halaman ini melakukan langkah yang sama dan menunjukkan pengerjaannya." },
      { "question": "Mengapa saya harus menyertakan hipotenusa?", "answer": "Hipotenusa adalah salah satu dari tiga sisi terluar segitiga, sehingga batasnya tidak lengkap tanpanya. Menjumlahkan hanya kedua kaki segitiga 3-4-5 menghasilkan 7, yaitu gabungan panjang kaki, bukan keliling. Perjalanan penuh mengelilingi segitiga adalah 3 + 4 + 5 = 12." },
      { "question": "Bisakah saya menghitung keliling jika satu sisi hilang?", "answer": "Ya, tetapi pulihkan dulu sisi yang hilang dengan teorema Pythagoras. Dengan kaki 6 dan 8, hipotenusanya adalah sqrt(36 + 64) = 10, sehingga kelilingnya adalah 6 + 8 + 10 = 24. Dengan hipotenusa 13 dan kaki 5, kaki yang hilang adalah sqrt(169 - 25) = 12, sehingga kelilingnya adalah 30." },
      { "question": "Bagaimana cara menemukan hipotenusa sebelum menghitung keliling?", "answer": "Gunakan c = sqrt(a^2 + b^2) ketika kedua kaki diketahui. Untuk kaki 6 dan 8: c = sqrt(36 + 64) = sqrt(100) = 10. Setelah hipotenusa diketahui, jumlahkan ketiga sisi untuk mendapatkan keliling." },
      { "question": "Apakah rumus keliling berbeda untuk segitiga siku-siku?", "answer": "Tidak. P = a + b + c berlaku untuk setiap segitiga. Yang istimewa dari segitiga siku-siku adalah hubungan Pythagoras a^2 + b^2 = c^2, yang memungkinkan Anda menemukan sisi yang hilang atau memastikan bahwa ukuran-ukuran tersebut benar-benar membentuk segitiga siku-siku." },
      { "question": "Berapa keliling segitiga siku-siku 3-4-5?", "answer": "Kelilingnya adalah 3 + 4 + 5 = 12 satuan. Sisi-sisinya memenuhi 9 + 16 = 25, yang memastikan sudut siku-sikunya. Versi berskala seperti 6-8-10 atau 9-12-15 mempertahankan bentuk yang sama dengan keliling yang lebih besar secara proporsional." },
      { "question": "Bagaimana cara memastikan tiga sisi membentuk segitiga siku-siku?", "answer": "Periksa bahwa a^2 + b^2 = c^2 dengan c sebagai sisi terpanjang. Untuk 3, 4, 5: 9 + 16 = 25, sehingga segitiganya siku-siku. Jika kesetaraannya gagal, rumus keliling tetap menjumlahkan, tetapi segitiganya bukan segitiga siku-siku." },
      { "question": "Apa perbedaan antara keliling dan luas?", "answer": "Keliling (P = a + b + c) mengukur total jarak mengelilingi segitiga dalam satuan linear seperti meter atau kaki. Luas (K = ab/2) mengukur permukaan di dalam segitiga dalam satuan persegi seperti meter persegi. Untuk segitiga 3-4-5 kelilingnya 12 satuan dan luasnya 6 satuan persegi." },
      { "question": "Apakah kalkulator keliling mendukung nilai desimal?", "answer": "Ya. Panjang sisi desimal bekerja persis seperti bilangan bulat: untuk a = 2.5, b = 6, c = 6.5, kelilingnya adalah 2.5 + 6 + 6.5 = 15 satuan. Pertahankan ketepatan penuh selama perhitungan dan bulatkan hanya jawaban akhirnya." },
      { "question": "Satuan apa yang harus saya gunakan untuk keliling?", "answer": "Satuan panjang apa pun bisa dipakai: meter, sentimeter, milimeter, kaki, inci, yard, atau mil. Ketiga sisi harus memakai satuan yang sama sebelum dijumlahkan. Kalkulator mengubah setiap masukan ke satuan bersama secara otomatis melalui pemilih satuannya masing-masing." },
      { "question": "Apa hubungan antara keliling dan setengah keliling?", "answer": "Setengah keliling tepat separuh dari keliling: s = P/2. Untuk segitiga 3-4-5, P = 12 dan s = 6. Setengah keliling muncul dalam rumus-rumus tingkat lanjut seperti rumus Heron untuk luas dan hubungan jari-jari dalam K = rs." }
    ]
  }
};
