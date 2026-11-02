// areaFromAngleGuideTranslations.batch2c.ts: Right Triangle Area From Angle Guide (Page 18 of 45)
// translations for Malay (ms) and Polish (pl).
export const AREA_FROM_ANGLE_TRANSLATIONS_BATCH2C = {
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Tepat Dari Sudut",
      "sec-geometry": "Memahami Sisi dan Sudut Segi Tiga Tepat",
      "sec-sine": "Mengapa Formula Luas Menggunakan Sinus?",
      "sec-mode1": "Cara Mencari Luas Menggunakan Sisi b, Hipotenus c, dan Sudut A",
      "sec-mode2": "Cara Mencari Luas Menggunakan Sisi a, Hipotenus c, dan Sudut B",
      "sec-same": "Dua Formula Berasaskan Sudut, Satu Segi Tiga Tepat",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segi Tiga Tepat Dari Sudut",
      "sec-foundations": "Contoh Langkah Demi Langkah Luas Segi Tiga Tepat Dari Sudut",
      "sec-applications": "Aplikasi Kehidupan Sebenar Luas Segi Tiga Tepat Dari Sudut",
      "sec-consistency": "Cara Menyemak Sama Ada Panjang Sisi dan Sudut Membentuk Segi Tiga Tepat",
      "sec-alternatives": "Cara Alternatif Mencari Luas Segi Tiga Tepat Menggunakan Sudut",
      "sec-angle-effect": "Bagaimana Sudut Tirus Mempengaruhi Luas Segi Tiga Tepat?",
      "sec-units": "Unit Luas, Darjah, dan Pembundaran",
      "sec-mistakes": "Kesilapan Biasa Apabila Mengira Luas Segi Tiga Tepat Dari Sudut",
      "sec-verify": "Cara Menyemak Sama Ada Luas Yang Dikira Betul",
      "sec-related": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Tepat Dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Andaikan sebuah segi tiga tepat mempunyai kaki [[b=4\\text{ m}]], hipotenus [[c=5\\text{ m}]], dan sudut tirus antara kedua-dua sisi itu berukuran kira-kira [[A\\approx36.87^\\circ]]. Luasnya diperoleh secara langsung: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Memandangkan [[\\sin(36.87^\\circ)\\approx0.6]], luasnya adalah kira-kira [[[\\boxed{K=6\\text{ m}^2}]]]. Segi tiga itu meliputi 6 meter persegi permukaan rata." },
          { "kind": "p", "text": "Kalkulator ini mengendalikan situasi tersebut: dengan satu kaki, hipotenus, dan sudut tirus antaranya, sinus menukar hipotenus menjadi tinggi serenjang yang tiada, dan separuh darab tapak darab tinggi memberikan luas dalam unit persegi. Sudut terangkum mesti terletak antara dua sisi yang dimasukkan, dan setiap mod memadankan satu sudut tertentu dengan dua sisinya." },
          { "kind": "p", "text": "Sudut [[36.87^\\circ]] dibundarkan daripada kira-kira [[36.8699^\\circ]]; mengekalkan ketepatan penuh pada kalkulator memberikan hasil paling tepat." }
        ]
      },
      "sec-geometry": {
        "h2": "Memahami Sisi dan Sudut Segi Tiga Tepat",
        "blocks": [
          { "kind": "p", "text": "Panduan ini menggunakan satu tatatanda yang konsisten: [[A]] dan [[B]] ialah dua sudut tirus, [[C=90^\\circ]] ialah sudut tepat, sisi [[a]] bertentangan dengan sudut [[A]], sisi [[b]] bertentangan dengan sudut [[B]], sisi [[c]] ialah hipotenus, dan [[K]] ialah luas." },
          { "kind": "h3", "text": "Apakah Segi Tiga Tepat?" },
          { "kind": "p", "text": "Segi tiga tepat mempunyai satu sudut pedalaman tepat [[90^\\circ]]. Dua kakinya bertemu pada sudut tepat itu, dan hipotenus terletak bertentangannya. Hipotenus sentiasa sisi terpanjang. Dua sudut selebihnya adalah tirus, dan kerana tiga sudut pedalaman berjumlah 180 darjah, [[A+B+C=180^\\circ]]. Memandangkan [[C=90^\\circ]], sudut-sudut tirus memenuhi [[A+B=90^\\circ]]: mengetahui satu memberitahu anda yang satu lagi." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi bertentangan dengan sudut tepat, dilabel [[c]] dalam kedua-dua mod kalkulator. Untuk mencarinya dalam segi tiga yang dilukis dalam sebarang orientasi, cari sisi yang tidak menyentuh penanda sudut persegi: sisi itulah hipotenus. Ia lebih panjang daripada mana-mana kaki, kerana ia merentangi seluruh sudut tepat manakala setiap kaki hanya merentangi sudut tirus. Setiap formula luas di halaman ini menggunakan [[c]] sebagai salah satu daripada dua sisinya, jadi mengenalinya dengan betul ialah kemahiran pertama untuk dilatih." },
          { "kind": "h3", "text": "Apakah Sisi Bersebelahan?" },
          { "kind": "p", "text": "Kaki bersebelahan ialah kaki yang menyentuh sudut rujukan yang dipilih tanpa menjadi hipotenus. Bagi sudut [[A]] kaki bersebelahan ialah [[b]]; bagi sudut [[B]] kaki bersebelahan ialah [[a]]. Namakan sudut rujukan dahulu, kemudian baca kaki bersebelahannya. Menukar sudut rujukan secara senyap menukar kaki mana yang dikira bersebelahan, dan pertukaran itu punca banyak kesilapan biasa yang disenaraikan kemudian di halaman ini." },
          { "kind": "h3", "text": "Apakah Sisi Bertentangan?" },
          { "kind": "p", "text": "Sisi bertentangan terletak betul-betul di seberang sudut yang dipilih, tidak menyentuhnya. Bagi sudut [[A]] sisi [[a]] adalah bertentangan; bagi sudut [[B]] sisi [[b]] adalah bertentangan. Label berubah mengikut sudut rujukan, tetapi hipotenus kekal [[c]] dalam kedua-dua kes. Mengekalkan sudut rujukan semasa melabel segi tiga memastikan setiap langkah kemudian konsisten." },
          { "kind": "h3", "text": "Apakah Sudut Terangkum?" },
          { "kind": "p", "text": "Sudut terangkum ialah sudut yang terletak antara dua sisi yang ditetapkan. Sudut [[A]] terangkum antara sisi [[b]] dan [[c]]; sudut [[B]] terangkum antara sisi [[a]] dan [[c]]. Formula luas sinus umum hanya berfungsi apabila sudut itu ialah sudut yang terangkum antara dua sisi yang digunakan, kerana formula membaca tinggi serenjang daripada sudut itu. Memadankan sisi dengan sudut yang tidak disentuhnya merosakkan geometri yang menjadi sandaran formula." }
        ],
        "imgAlt": "Segi tiga tepat ABC menunjukkan kedua-dua mod luas: sudut A antara sisi b dan c, sudut B antara sisi a dan c",
        "figcaption": "Kedua-dua mod kalkulator menggunakan segi tiga yang sama. Mod 1 memadankan sisi b, hipotenus c, dan sudut terangkum A; Mod 2 memadankan sisi a, hipotenus c, dan sudut terangkum B."
      },
      "sec-sine": {
        "h2": "Mengapa Formula Luas Menggunakan Sinus?",
        "blocks": [
          { "kind": "p", "text": "Kedua-dua mod kalkulator bersandar pada satu formula umum untuk luas mana-mana segi tiga diberi dua sisi dan sudut terangkumnya:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "Di sini [[x]] dan [[y]] ialah dua panjang sisi, [[\\theta]] ialah sudut yang terangkum antaranya, dan [[K]] ialah luas. Sebutan sinus inilah yang membina tinggi serenjang daripada sisi kedua." },
          { "kind": "h3", "text": "Bagaimana Formula Umum Berfungsi" },
          { "kind": "p", "text": "Peraturan luas segi tiga yang biasa ialah [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Apabila tinggi serenjang tidak diukur secara langsung, sinus boleh memulihkannya daripada sisi lain. Ambil tapak sepanjang [[x]] dan sisi kedua sepanjang [[y]] yang bertemu pada sudut [[\\theta]]. Komponen serenjang sisi kedua itu, tinggi yang dikira untuk luas, ialah [[h=y\\sin(\\theta)]]. Menggantikan ke dalam peraturan tapak-tinggi memberikan [[K=\\frac12 x(y\\sin(\\theta))]], formula umum di atas. Sudut terangkum mesti sepadan dengan dua sisi yang dipilih; sudut dari tempat lain dalam segi tiga mengukur serenjang yang berbeza." },
          { "kind": "h3", "text": "Mengapa Luas Dibahagi Dua?" },
          { "kind": "p", "text": "Segi tiga menduduki separuh luas segi empat selari yang dibina pada tapak yang sama dengan tinggi serenjang yang sama. Dengan tapak [[x]] dan tinggi [[h]], hasil darab [[x\\times h]] ialah segi empat selari penuh, dan segi tiga itu tepat separuhnya. Mendarab dua sisi dan nilai sinus tanpa pembahagian dua itu menghasilkan dua kali ganda luas yang dikehendaki." },
          { "kind": "h3", "text": "Mengapa Hipotenus Boleh Digunakan" },
          { "kind": "p", "text": "Salah satu daripada dua sisi dalam formula sudut terangkum boleh menjadi hipotenus. Dipadankan dengan kaki yang betul dan sudut tirus antaranya, hipotenus membawa maklumat yang cukup untuk membina luas: komponen sinusnya tepat ialah tinggi serenjang relatif kepada kaki itu sebagai tapak. Inilah sebabnya kalkulator tidak pernah meminta kaki kedua. Hipotenus bukan pengecualian khas kepada formula; ia pilihan sisi yang biasa, terletak pada sudut terangkum yang biasa." },
          { "kind": "h3", "text": "Mengapa Sudut Mesti Betul" },
          { "kind": "p", "text": "Menggantikan sudut [[A]] dengan sudut [[B]] sambil mengekalkan pasangan sisi yang sama biasanya memberikan hasil yang salah. Ambil segi tiga 3-4-5 dengan [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Pengiraan Mod 1 yang betul ialah [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Menggantikan sudut yang satu lagi memberikan [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], kerana [[\\sin(53.13^\\circ)\\approx0.8]]. Jawapan 8 bukan artifak pembundaran; ia luas konfigurasi yang berbeza, di mana pasangan sisi tidak lagi sepadan dengan sudut terangkum. Memadankan sudut-sisi dengan betul ialah salah satu pengajaran terpenting halaman ini." }
        ],
        "imgAlt": "Segi tiga tepat 3-4-5 menunjukkan a sama dengan c darab sin A sama dengan 3 sebagai tinggi serenjang untuk luas",
        "figcaption": "Sinus sudut A menukar hipotenus menjadi tinggi serenjang a = 3, jadi K = ba/2 yang biasa dan formula langsung K = bc sin(A)/2 sepadan."
      },
      "sec-mode1": {
        "h2": "Cara Mencari Luas Menggunakan Sisi b, Hipotenus c, dan Sudut A",
        "blocks": [
          { "kind": "p", "text": "Mod 1 kalkulator menggunakan:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "Pemboleh ubahnya ialah: [[b]] kaki yang bersebelahan dengan sudut [[A]], [[c]] hipotenus, [[A]] sudut tirus terangkum antara [[b]] dan [[c]], dan [[K]] luas." },
          { "kind": "h3", "text": "Penerbitan Formula Langkah Demi Langkah" },
          { "kind": "p", "text": "Mulakan daripada formula luas kaki [[K=ab/2]]. Daripada nisbah sinus pada sudut [[A]], [[\\sin(A)=a/c]], jadi [[a=c\\sin(A)]]. Kaki bertentangan [[a]] sedang ditulis semula sebagai komponen sinus hipotenus. Penggantian memberikan [[K=\\frac{b(c\\sin(A))}{2}]], dan penyusunan semula menghasilkan [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Kaki bertentangan yang tidak diketahui tidak perlu dimasukkan kerana formula membinanya daripada hipotenus dan sudut di sebalik tabir." },
          { "kind": "h3", "text": "Contoh Kerja Lengkap" },
          { "kind": "p", "text": "Diberi [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        "steps": [
          "<strong>Tulis formula.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Gantikan.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Kira sinus.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Darab.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Bahagi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Jawapannya menyatakan segi tiga itu meliputi kira-kira 6 meter persegi. Kerana sudut input dibundarkan, perkataan kira-kira wajar dalam laporan, walaupun dengan ketepatan penuh input yang sama memberikan tepat 6.",
          "<strong>Sahkan Menggunakan Kaki Yang Tiada:</strong> Kaki yang tiada diperoleh daripada teorem Pythagoras: [[a=\\sqrt{c^2-b^2}]], jadi [[a=\\sqrt{25-16}=3]]. Kemudian [[K=(3\\times4)/2=6]]. Kedua-dua laluan sepadan kerana ia menghuraikan segi tiga yang sama: laluan sinus membina kaki yang tiada daripada sudut, manakala laluan kaki menggunakan kaki itu secara langsung.",
          "<strong>Bila Patut Anda Gunakan Mod 1?</strong> Gunakan Mod 1 apabila ukuran yang diketahui ialah kaki yang bersebelahan dengan sudut tirus yang diketahui, hipotenus, dan sudut itu sendiri. Jika kedua-dua kaki sudah diketahui, formula kaki langsung lebih mudah dan melangkau sudut sepenuhnya. Mod 1 adalah untuk situasi lapangan biasa di mana sudut dan dua panjang datang daripada persediaan ukuran yang sama, dan kaki kedua tidak pernah direkodkan."
        ]
      },
      "sec-mode2": {
        "h2": "Cara Mencari Luas Menggunakan Sisi a, Hipotenus c, dan Sudut B",
        "blocks": [
          { "kind": "p", "text": "Mod 2 kalkulator menggunakan:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "Pemboleh ubahnya ialah: [[a]] kaki yang bersebelahan dengan sudut [[B]], yang bertentangan dengan sudut [[A]]; [[c]] hipotenus; [[B]] sudut tirus terangkum antara [[a]] dan [[c]]; dan [[K]] luas." },
          { "kind": "h3", "text": "Penerbitan Formula Langkah Demi Langkah" },
          { "kind": "p", "text": "Mulakan semula daripada [[K=ab/2]]. Nisbah sinus yang diukur pada sudut [[B]] berbunyi [[\\sin(B)=b/c]], kerana dari sudut pandangan [[B]] sisi bertentangannya ialah [[b]]. Oleh itu [[b=c\\sin(B)]]. Penggantian memberikan [[K=\\frac{a(c\\sin(B))}{2}]], jadi [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Formula menggunakan sisi [[a]] walaupun [[a]] dipanggil sisi bertentangan dalam tatatanda utama halaman; label bertentangan itu milik sudut [[A]], manakala relatif kepada sudut [[B]] sisi yang sama adalah bersebelahan. Label sisi sentiasa relatif kepada sudut rujukan yang dipilih." },
          { "kind": "h3", "text": "Contoh Kerja Lengkap" },
          { "kind": "p", "text": "Diberi [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        "steps": [
          "<strong>Tulis formula.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Gantikan.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Kira sinus.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Darab dan bahagi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Hasilnya ialah 6 meter persegi yang sama seperti contoh Mod 1, kerana kedua-dua contoh menghuraikan segi tiga 3-4-5 yang sama dilihat daripada dua sudut tirusnya.",
          "<strong>Sahkan Menggunakan Kaki Yang Tiada:</strong> Kira [[b=\\sqrt{c^2-a^2}]], jadi [[b=\\sqrt{25-9}=4]]. Kemudian [[K=(3\\times4)/2=6]]. Persetujuan ini dijangka: formula sinus secara senyap membina semula kaki yang tiada [[b]] daripada hipotenus dan sudut.",
          "<strong>Bila Patut Anda Gunakan Mod 2?</strong> Gunakan Mod 2 apabila sisi yang diketahui ialah [[a]], hipotenus [[c]] diketahui, dan sudut yang diukur ialah sudut yang menyentuh sisi [[a]], iaitu sudut [[B]]. Kedua-dua mod tidak boleh ditukar ganti tanpa turut menukar label sisi dan sudut; memasukkan input Mod 1 ke dalam Mod 2 mengira luas segi tiga yang berbeza."
        ]
      },
      "sec-same": {
        "h2": "Dua Formula Berasaskan Sudut, Satu Segi Tiga Tepat",
        "blocks": [
          { "kind": "p", "text": "Kedua-dua mod mengira luas objek geometri yang sama, jadi ia mesti sepadan. Untuk Mod 1, [[K=bc\\sin(A)/2]], dan memandangkan [[\\sin(A)=a/c]] untuk segi tiga tepat yang sah, [[bc\\sin(A)=ab]]. Untuk Mod 2, [[K=ac\\sin(B)/2]], dan memandangkan [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. Kedua-dua formula dipermudahkan menjadi [[[\\boxed{K=\\frac{ab}{2}}]]], formula kaki yang biasa. Kedua-dua mod ialah dua laluan input berbeza ke satu kuantiti." }
        ],
        "closingParagraphs": [
          "Ukuran sudut yang dibundarkan boleh memperkenalkan perbezaan berangka kecil antara kedua-dua mod, kerana [[36.87^\\circ]] hanya penghampiran kepada [[36.8699^\\circ]] yang sebenar. Percanggahan beberapa perseratus ialah kesan pembundaran, bukan pertikaian antara formula."
        ],
        "table": {
          "headers": ["Kaedah", "Input", "Hasil"],
          "rows": [
            ["Formula kaki", "[[a=3,\\;b=4]]", "6 unit persegi"],
            ["Mod 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Kira-kira 6"],
            ["Mod 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Kira-kira 6"]
          ]
        },
        "imgAlt": "Segi tiga 3-4-5 yang sama diselesaikan oleh Mod 1 dan Mod 2, kedua-dua memberikan luas 6",
        "figcaption": "Dua sudut terangkum, dua formula setara, satu luas segi tiga."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Tepat Dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Panduan ini mengikut antara muka kalkulator sebenar di halaman ini, langkah demi langkah." }
        ],
        "steps": [
          "<strong>Kenal pasti ukuran yang sudah diketahui.</strong> Sahkan anda mempunyai satu kaki, hipotenus, dan sudut tirus daripada segi tiga yang sama.",
          "<strong>Pilih mod yang betul.</strong> Pilih Mod 1 untuk sisi [[b]], hipotenus [[c]], dan sudut [[A]]; pilih Mod 2 untuk sisi [[a]], hipotenus [[c]], dan sudut [[B]].",
          "<strong>Sahkan sudut tirus mana yang diukur.</strong> Sudut itu mestilah salah satu daripada dua sudut tirus, bukan sudut tepat.",
          "<strong>Kenal pasti kaki yang sepadan.</strong> Kaki itu mesti menyentuh sudut yang diukur; semak takrifan bersebelahan dan bertentangan di atas jika tidak pasti.",
          "<strong>Masukkan panjang kaki.</strong> Taip kaki yang diukur ke dalam medan kaki mod yang dipilih.",
          "<strong>Masukkan panjang hipotenus.</strong> Taipkannya ke dalam medan hipotenus; ia mestilah yang terpanjang antara dua panjang itu.",
          "<strong>Pilih unit ukuran yang serasi.</strong> Kedua-dua panjang mesti menggunakan unit yang sama sebelum mengira.",
          "<strong>Masukkan sudut tirus dalam darjah.</strong> Kalkulator menjangkakan darjah, bukan radian.",
          "<strong>Sahkan bahawa sudut itu betul-betul antara [[0^\\circ]] dan [[90^\\circ]].</strong> Nilai sempadan menghuraikan bentuk merosot, bukan segi tiga.",
          "<strong>Sahkan bahawa hipotenus lebih panjang daripada kaki.</strong> Kaki yang sama atau lebih panjang daripada hipotenus tidak boleh dimiliki segi tiga tepat.",
          "<strong>Semak bahawa kaki, hipotenus, dan sudut menghuraikan segi tiga tepat yang sama.</strong> Ujian ketekalan dalam bahagian pengesahan menunjukkan caranya.",
          "<strong>Klik Kira Luas.</strong> Hasilnya muncul dengan langkah penyelesaian ditunjukkan.",
          "<strong>Semak hasil dan langkah penyelesaian.</strong> Jejak setiap penggantian untuk memastikan input yang dimaksudkan telah digunakan.",
          "<strong>Tafsir hasil dalam unit persegi.</strong> Unit luas ialah kuasa dua unit panjang yang dipilih.",
          "<strong>Gunakan Set Semula untuk mengosongkan pengiraan sebelumnya.</strong> Ini mengosongkan semua medan sebelum segi tiga berikutnya dimasukkan."
        ],
        "closingParagraphs": [
          "Perhatikan bahawa setiap mod meminta kaki yang berbeza dan sudut yang berbeza. Mod-mod itu berbeza kerana pasangan sudut terangkumnya berbeza, bukan kerana satu mod jalan pintas kepada yang satu lagi."
        ]
      },
      "sec-foundations": {
        "h2": "Contoh Langkah Demi Langkah Luas Segi Tiga Tepat Dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Empat contoh membina kaedah ini pada segi tiga yang biasa, daripada rangkap 3-4-5 hingga kes sudut khas." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga 3-4-5 Menggunakan Sudut A" },
          { "kind": "p", "text": "Diberi [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], gunakan [[K=bc\\sin(A)/2]]. Kemudian [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], jadi [[[\\boxed{K\\approx6}]]]. Luasnya ialah 6 unit persegi kerana segi tiga itu meliputi enam petak unit permukaan rata; dengan sudut ketepatan penuh nilainya tepat 6." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Sama Menggunakan Sudut B" },
          { "kind": "p", "text": "Diberi [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], gunakan [[K=ac\\sin(B)/2]]. Kemudian [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], jadi [[[\\boxed{K\\approx6}]]]. Hasilnya sepadan dengan Contoh 1 kerana kedua-dua contoh menghuraikan segi tiga yang sama; dua sudut itu pandangan pelengkap bagi satu bentuk." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga 30-60-90" },
          { "kind": "p", "text": "Ambil [[c=10]] dan [[A=30^\\circ]]. Kaki diperoleh daripada [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Kemudian [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], dan memandangkan [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Nilai sudut khas seperti [[\\sin(30^\\circ)]] dan [[\\cos(30^\\circ)]] memberikan bentuk tepat sebelum sebarang pembundaran perpuluhan, itulah sebabnya segi tiga ini berguna untuk menyemak kalkulator secara manual." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga 45-45-90" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[A=45^\\circ]], kaki-kakinya sama: [[a=b=5\\sqrt{2}]]. Kemudian [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], dan memandangkan [[\\sin(45^\\circ)=\\sqrt{2}/2]], hasil darab dipermudahkan menjadi [[[\\boxed{K=25}]]]. Ini segi tiga tepat sama kaki, dan seperti yang ditunjukkan kemudian, ia juga mempunyai luas maksimum yang mungkin untuk segi tiga tepat dengan hipotenus 10 unit." }
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Luas Segi Tiga Tepat Dari Sudut",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang diselesaikan sepenuhnya, enam untuk setiap mod kalkulator. Setiap contoh menyatakan ukuran, memilih mod, menggunakan formula, dan mentafsir jawapan. Nilai sudut ditunjukkan kepada dua tempat perpuluhan manakala aritmetik mengekalkan ketepatan penuh di bawahnya." },
          { "kind": "h3", "text": "Contoh Praktikal 1: Gabel Bumbung Segi Tiga" },
          { "kind": "p", "text": "Bahagian gabel bumbung segi tiga tepat yang dipermudah mempunyai sisi bersebelahan [[b=4\\text{ m}]], hipotenus [[c=5\\text{ m}]], dan sudut terangkum [[A\\approx36.87^\\circ]]. Gunakan Mod 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], jadi [[[\\boxed{K\\approx6\\text{ m}^2}]]]. luas bahagian rata, bukan jumlah permukaan bumbung. Semak: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "Contoh Praktikal 2: Panel Sisi Tanjakan Segi Tiga" },
          { "kind": "p", "text": "Panel sisi tanjakan segi tiga tepat mempunyai [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]], dan [[A\\approx16.26^\\circ]]. Sisi bertentangan yang mendasarinya ialah 0.7 m, jadi [[\\sin(A)=0.7/2.5=0.28]]. Gunakan Mod 1: [[K=(2.4\\times2.5\\times0.28)/2]], jadi [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. luas panel sisi, bukan permukaan tanjakan yang condong. Semak: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "Contoh Praktikal 3: Layar Segi Tiga" },
          { "kind": "p", "text": "Bahagian layar segi tiga tepat yang rata mempunyai [[b=12\\text{ ft}]], [[c=13\\text{ ft}]], dan [[A\\approx22.62^\\circ]]. Sisi bertentangannya ialah 5 ft, jadi [[\\sin(A)=5/13]]. Gunakan Mod 1: [[K=(12\\times13\\times(5/13))/2]], jadi [[[\\boxed{K=30\\text{ ft}^2}]]]. luas geometri rata, sebelum jahitan atau pembaziran. Semak: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "Contoh Praktikal 4: Bahagian Tanah Segi Tiga Tepat" },
          { "kind": "p", "text": "Lakaran ukur menghuraikan plot segi tiga tepat dengan [[b=40\\text{ m}]], [[c=50\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Memandangkan [[\\sin(A)=30/50=0.6]], Mod 1 memberikan [[K=(40\\times50\\times0.6)/2]], jadi [[[\\boxed{K=600\\text{ m}^2}]]]. luas plot satah di bawah model rata. Semak: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "Contoh Praktikal 5: Panel Sokongan Keluli" },
          { "kind": "p", "text": "Panel keluli segi tiga yang rata mempunyai [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]], dan [[A\\approx28.07^\\circ]]. Sisi bertentangannya ialah 0.8 m, jadi [[\\sin(A)=0.8/1.7]]. Gunakan Mod 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], jadi [[[\\boxed{K=0.6\\text{ m}^2}]]]. luas satah sahaja, bukan kapasiti beban. Semak: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "Contoh Praktikal 6: Profil Sisi Tangga" },
          { "kind": "p", "text": "Panel sisi tangga yang dipermudah mempunyai kaki mengufuk [[b=3.2\\text{ m}]], hipotenus [[c=4\\text{ m}]], dan [[A\\approx36.87^\\circ]]. Dengan [[\\sin(A)=0.6]], Mod 1 memberikan [[K=(3.2\\times4\\times0.6)/2]], jadi [[[\\boxed{K=3.84\\text{ m}^2}]]]. profil sisi, bukan luas anak tangga. Semak: dengan kaki yang satu lagi 2.4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "Contoh Praktikal 7: Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Tingkap segi tiga tepat mempunyai sisi [[a=0.6\\text{ m}]], hipotenus [[c=1\\text{ m}]], dan sudut terangkum [[B\\approx53.13^\\circ]]. Dengan [[\\sin(B)=0.8]], Mod 2 memberikan [[K=(0.6\\times1\\times0.8)/2]], jadi [[[\\boxed{K=0.24\\text{ m}^2}]]]. luas kaca sebelum elaun bingkai. Semak: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "Contoh Praktikal 8: Awning Segi Tiga" },
          { "kind": "p", "text": "Bahagian awning segi tiga tepat yang rata mempunyai [[a=1.2\\text{ m}]], [[c=2\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Gunakan Mod 2: [[K=(1.2\\times2\\times0.8)/2]], jadi [[[\\boxed{K=0.96\\text{ m}^2}]]]. Semak: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "Contoh Praktikal 9: Corak Potongan Papan Lapis" },
          { "kind": "p", "text": "Kepingan papan lapis segi tiga tepat mempunyai [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]], dan [[B\\approx53.13^\\circ]]. Gunakan Mod 2: [[K=(0.9\\times1.5\\times0.8)/2]], jadi [[[\\boxed{K=0.54\\text{ m}^2}]]]. luas bahan boleh guna, tidak termasuk sisa potongan. Semak: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "Contoh Praktikal 10: Mengukur Tanah Segi Tiga" },
          { "kind": "p", "text": "Ukuran tanah segi tiga yang dipermudah memberikan [[a=7\\text{ m}]], [[c=25\\text{ m}]], dan [[B\\approx73.74^\\circ]]. Kaki yang satu lagi ialah 24 m, jadi [[\\sin(B)=24/25=0.96]]. Gunakan Mod 2: [[K=(7\\times25\\times0.96)/2]], jadi [[[\\boxed{K=84\\text{ m}^2}]]]. luas bahagian satah. Semak: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "Contoh Praktikal 11: Panel Wau Segi Tiga" },
          { "kind": "p", "text": "Panel wau atau kain segi tiga tepat mempunyai [[a=20\\text{ cm}]], [[c=25\\text{ cm}]], dan [[B\\approx36.87^\\circ]]. Memandangkan [[\\sin(B)=15/25=0.6]], Mod 2 memberikan [[K=(20\\times25\\times0.6)/2]], jadi [[[\\boxed{K=150\\text{ cm}^2}]]]. sentimeter persegi, sepadan dengan input. Semak: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "Contoh Praktikal 12: Panel Sisi Pemasangan Suria" },
          { "kind": "p", "text": "Panel sisi sokongan segi tiga tepat yang rata mempunyai [[a=1.8\\text{ m}]], [[c=3\\text{ m}]], dan sudut terangkum [[B\\approx53.13^\\circ]]. Dengan [[\\sin(B)=0.8]], Mod 2 memberikan [[K=(1.8\\times3\\times0.8)/2]], jadi [[[\\boxed{K=2.16\\text{ m}^2}]]]. luas panel, bukan output atau kapasiti elektrik. Semak: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["Situasi", "Mod", "Kaki / Hip.", "Sudut", "Luas", "Tafsiran"],
          "rows": [
            ["Gabel bumbung", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Luas bahagian rata"],
            ["Panel sisi tanjakan", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Panel sisi, bukan cerun"],
            ["Layar", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Luas rata sebelum jahitan"],
            ["Bahagian tanah", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Luas plot satah"],
            ["Panel keluli", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Luas satah sahaja"],
            ["Profil tangga", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Profil sisi, bukan anak tangga"],
            ["Tingkap kaca", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Sebelum elaun bingkai"],
            ["Awning", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Luas bahagian segi tiga"],
            ["Kepingan papan lapis", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Luas boleh guna, tiada sisa"],
            ["Ukur tanah", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Luas tanah satah"],
            ["Panel wau", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Luas kain"],
            ["Panel sisi suria", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Panel sokongan, bukan output"]
          ]
        },
        "imgAlt": "Empat pengiraan luas segi tiga tepat yang diselesaikan: gabel bumbung, tingkap kaca, ukur tanah, dan layar",
        "figcaption": "Empat situasi yang diselesaikan di atas, setiap satunya dengan segi tiga, sudut terangkum, formula, dan luas yang disahkan."
      },
      "sec-consistency": {
        "h2": "Cara Menyemak Sama Ada Panjang Sisi dan Sudut Membentuk Segi Tiga Tepat",
        "blocks": [
          { "kind": "p", "text": "Kaki, hipotenus, dan sudut tirus membawa lebih banyak maklumat daripada yang diperlukan segi tiga tepat: dua daripada tiga menentukan yang ketiga, jadi ketiga-tiganya mesti sepadan. Semakan di bawah mengesahkan nombor yang dikira menghuraikan segi tiga tepat." },
          { "kind": "h3", "text": "Mengesahkan Mod 1" },
          { "kind": "p", "text": "Untuk Mod 1 hubungan ketekalannya ialah [[\\cos(A)=b/c]], bersamaan dengan [[[\\boxed{b=c\\cos(A)}]]]. Dengan [[b=4]] dan [[c=5]], [[\\cos(A)=0.8]] memberikan [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Sudut sewenang-wenang seperti [[60^\\circ]] tidak akan menghuraikan segi tiga tepat yang sama dengan panjang sisi ini: [[5\\cos(60^\\circ)=2.5\\neq4]], jadi tiga input itu saling tidak konsisten." },
          { "kind": "h3", "text": "Mengesahkan Mod 2" },
          { "kind": "p", "text": "Untuk Mod 2 hubungannya ialah [[\\cos(B)=a/c]], bersamaan dengan [[[\\boxed{a=c\\cos(B)}]]]. Dengan [[a=3]] dan [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. Sudut yang dipilih mesti sepadan dengan ukuran sebenar; kaki 3 dengan hipotenus 5 tidak bertemu pada sudut terangkum, katakan, [[70^\\circ]]." },
          { "kind": "h3", "text": "Mengapa Formula Luas Umum Masih Boleh Mengembalikan Nombor" },
          { "kind": "p", "text": "Formula [[K=\\frac12xy\\sin(\\theta)]] mengira luas segi tiga umum yang ditakrifkan oleh dua sisi dan sudut terangkumnya. Gabungan sudut-sisi yang tidak serasi masih mengembalikan nombor, tetapi segi tiga yang terhasil bukan bersudut tepat: ia segi tiga lain yang kebetulan berkongsi tiga input itu. Hasil aritmetik itu sendiri tidak membuktikan input menghuraikan segi tiga tepat yang sah; semakan kosinus di atas melakukan kerja itu." },
          { "kind": "h3", "text": "Cara Mengendalikan Ukuran Sudut Yang Dibundarkan" },
          { "kind": "p", "text": "Sudut seperti [[36.87^\\circ]] mungkin paparan bundar kepada kira-kira [[36.8699^\\circ]]. Ketidakpadanan kecil daripada paparan atau pembundaran ukuran harus dibezakan daripada geometri yang betul-betul tidak konsisten: kelonggaran beberapa perseratus darjah ialah pembundaran, manakala ketidakpadanan beberapa darjah bermakna input tidak sepadan. Tiada toleransi pengesahan berangka yang didakwa untuk kalkulator itu sendiri; perbezaan itu pertimbangan yang dibuat daripada ukuran yang ada." }
        ]
      },
      "sec-alternatives": {
        "h2": "Cara Alternatif Mencari Luas Segi Tiga Tepat Menggunakan Sudut",
        "blocks": [
          { "kind": "p", "text": "Ini alternatif matematik, bukan mod kalkulator tambahan; ia menunjukkan geometri yang sama di bawah gabungan input lain." },
          { "kind": "h3", "text": "Menggunakan Hipotenus dan Satu Sudut Tirus" },
          { "kind": "p", "text": "Untuk segi tiga tepat yang sah, [[a=c\\sin(A)]] dan [[b=c\\cos(A)]]. Menggantikan ke dalam [[K=ab/2]] memberikan [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Dengan identiti sudut ganda dua [[\\sin(2A)=2\\sin(A)\\cos(A)]], ini menjadi [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Hipotenus dan satu sudut tirus menentukan segi tiga sepenuhnya, jadi tiada ukuran kaki diperlukan langsung." },
          { "kind": "h3", "text": "Menggunakan Satu Kaki dan Sudut Bersebelahannya" },
          { "kind": "p", "text": "Jika sisi [[b]] dan sudut [[A]] diketahui, maka [[a=b\\tan(A)]], dan [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Pasangan itu penting: [[b]] mestilah kaki yang bersebelahan dengan sudut [[A]] agar tangen menghasilkan kaki bertentangan." },
          { "kind": "h3", "text": "Menggunakan Sisi a dan Sudut B" },
          { "kind": "p", "text": "Mencerminkan kes sebelumnya untuk sudut [[B]]: [[b=a\\tan(B)]], jadi [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Sisi [[a]] bersebelahan dengan sudut [[B]], itulah sebabnya tangen sekali lagi memulihkan kaki bertentangan." },
          { "kind": "h3", "text": "Kaedah Mana Paling Mudah?" },
          { "kind": "p", "text": "Formula terbaik ialah yang sepadan dengan ukuran yang tersedia. Jika kedua-dua kaki diketahui, gunakan [[K=ab/2]] dan langkau trigonometri. Jika kaki, hipotenus, dan sudut terangkum diketahui, dua mod kalkulator ialah laluan langsung. Bentuk tangen dan sudut ganda dua berguna untuk pengiraan manual dengan sudut khas, tetapi menambah langkah yang tidak diperlukan input hanya menambah tempat untuk kesilapan bersembunyi." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Bagaimana Sudut Tirus Mempengaruhi Luas Segi Tiga Tepat?",
        "blocks": [
          { "kind": "p", "text": "Sinus bertambah apabila sudut tirus bertambah, jadi sudut yang lebih besar kelihatan menjanjikan luas yang lebih besar. Itu hanya benar apabila kuantiti lain kekal tetap, dan dalam segi tiga tepat sisi dan sudut tidak boleh berubah secara berasingan." },
          { "kind": "h3", "text": "Hipotenus Tetap, Sudut Berubah" },
          { "kind": "p", "text": "Untuk hipotenus tetap, luas boleh ditulis sebagai [[K=\\frac{c^2\\sin(2A)}{4}]]. Faktor [[\\sin(2A)]] naik apabila [[A]] bergerak dari hampir [[0^\\circ]] ke arah [[45^\\circ]], kemudian turun apabila [[A]] menghampiri [[90^\\circ]]. Luas oleh itu bertambah sepanjang separuh pertama julat tirus dan berkurang sepanjang separuh kedua. Dua bahagian itu imej cermin melalui hubungan sudut pelengkap [[A+B=90^\\circ]]: menukar sudut menukar kaki dan luas tidak berubah." },
          { "kind": "h3", "text": "Luas Maksimum Untuk Hipotenus Tetap" },
          { "kind": "p", "text": "Memandangkan [[\\sin(2A)\\leq1]], luas terbesar yang mungkin ialah [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], dicapai apabila [[A=B=45^\\circ]]. Untuk [[c=10]] luas maksimum ialah [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. Ini segi tiga tepat sama kaki Contoh 4: kaki yang sama menjadikan hasil darab kaki, dan oleh itu luas, sebesar yang dibenarkan hipotenus tetap." },
          { "kind": "h3", "text": "Mengapa Luas Tidak Semestinya Bertambah Dengan Sudut Dalam Setiap Kes" },
          { "kind": "p", "text": "Dakwaan tentang sudut yang bertambah tidak bermakna tanpa menamakan apa yang dikekalkan malar. Dengan hipotenus tetap hubungan itu naik kemudian turun; dengan kaki tetap hubungannya berbeza lagi. Menganggap luas sebagai fungsi bertambah mudah bagi sudut ialah pemudahan berlebihan yang biasa, dan bahagian ini wujud untuk mengeluarkannya daripada kerja anda." }
        ]
      },
      "sec-units": {
        "h2": "Unit Luas, Darjah, dan Pembundaran",
        "blocks": [
          { "kind": "h3", "text": "Meter Persegi" },
          { "kind": "p", "text": "Jika input dalam meter, luas keluar dalam meter persegi: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. Pendaraban dua panjang sentiasa menghasilkan unit persegi, apa pun sistem unitnya." },
          { "kind": "h3", "text": "Sentimeter Persegi" },
          { "kind": "p", "text": "Input sentimeter menghasilkan luas sentimeter persegi, seperti dalam contoh panel wau dengan hasil [[150\\text{ cm}^2]]nya. Penukaran antara unit persegi mengkuasa-duakan faktor penukaran linear: 1 m² = 10,000 cm², bukan 100." },
          { "kind": "h3", "text": "Kaki Persegi" },
          { "kind": "p", "text": "Input kaki menghasilkan luas kaki persegi, seperti dalam contoh layar dengan hasil [[30\\text{ ft}^2]]nya. Tukar semua input kepada satu unit panjang sebelum mengira; kalkulator tidak boleh mencampur meter dan kaki." },
          { "kind": "h3", "text": "Darjah lwn. Radian" },
          { "kind": "p", "text": "Kalkulator menjangkakan sudut dalam darjah. Untuk menukar, gunakan [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Contohnya, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Memasukkan nilai radian di tempat darjah dijangkakan ialah antara kesilapan paling merosakkan, kerana sinus nombor radian kecil kelihatan munasabah sedangkan salah sama sekali." },
          { "kind": "h3", "text": "Mengapa Sinus Tiada Unit" },
          { "kind": "p", "text": "Sinus ialah nisbah dua panjang, jadi unitnya terhapus dan nilainya tanpa dimensi. Mendarab dua panjang dengan nombor tanpa dimensi meninggalkan tepat unit persegi yang diperlukan luas. Inilah juga sebabnya nilai sinus sama sama ada sisi diukur dalam meter atau kaki, selagi bentuk segi tiga sama." },
          { "kind": "h3", "text": "Mengapa Pembundaran Perantaraan Penting" },
          { "kind": "p", "text": "Membundarkan sudut atau nilai sinus terlalu awal boleh menganjak luas akhir. Kekalkan ketepatan penuh sepanjang pengiraan dan bundarkan hanya hasil yang dilaporkan, kepada ketepatan yang disokong ukuran input. Ukuran yang diberi kepada dua angka bererti tidak layak mendapat jawapan enam perpuluhan." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Apabila Mengira Luas Segi Tiga Tepat Dari Sudut",
        "steps": [
          "<strong>Menggunakan sudut B dengan Mod 1 tanpa menukar sisi.</strong> Mod 1 memadankan [[b]] dan [[c]] dengan sudut [[A]]; memasukkannya [[B]] mengira luas segi tiga yang berbeza.",
          "<strong>Menggunakan sudut A dengan Mod 2.</strong> Mod 2 memadankan [[a]] dan [[c]] dengan sudut [[B]]. Semak pemilih mod sebelum memasukkan nombor.",
          "<strong>Mengelirukan bersebelahan dan bertentangan.</strong> Label ini bergantung pada sudut rujukan: tetapkan sudut dahulu, kemudian label kaki relatif kepadanya.",
          "<strong>Memasukkan hipotenus ke dalam medan kaki.</strong> Kaki mesti lebih pendek daripada [[c]]; menukarnya merosakkan setiap semakan ketekalan.",
          "<strong>Menggunakan sudut terangkum yang salah.</strong> Sudut mesti terletak antara dua sisi yang dimasukkan, atau unjuran sinus salah.",
          "<strong>Lupa fungsi sinus.</strong> [[bc/2]] sahaja mendarab dua panjang tidak serenjang; hasilnya bukan luas segi tiga.",
          "<strong>Lupa membahagi dua.</strong> Hasil darab tanpa pembahagian dua ialah luas segi empat selari, bukan segi tiga.",
          "<strong>Memasukkan radian apabila darjah dijangkakan.</strong> [[\\sin(0.64)]] dan [[\\sin(36.87^\\circ)]] ialah nombor yang sama sekali berbeza.",
          "<strong>Memasukkan 0 atau 90 darjah.</strong> Kedua-duanya tidak menghuraikan segi tiga tepat tidak merosot dengan input ini.",
          "<strong>Memasukkan panjang negatif atau sifar.</strong> Panjang adalah positif; selain itu tiada makna geometri.",
          "<strong>Memasukkan kaki lebih panjang daripada hipotenus.</strong> Hipotenus sentiasa sisi terpanjang, jadi entri ini bercanggah dengan persediaan.",
          "<strong>Menggunakan input tidak konsisten.</strong> Semak [[b=c\\cos(A)]] atau [[a=c\\cos(B)]]; nombor daripada input tidak sepadan bukan milik mana-mana segi tiga tepat.",
          "<strong>Mencampur unit.</strong> Tukar semua panjang kepada satu unit dahulu; meter dengan sentimeter menskalakan jawapan sebanyak 100.",
          "<strong>Melaporkan unit linear.</strong> Unit luas ialah kuasa dua unit panjang: m², bukan m.",
          "<strong>Membundarkan sudut terlalu awal.</strong> Bundarkan hanya jawapan akhir; pembundaran awal menganjak sinus.",
          "<strong>Menganggap mod boleh ditukar ganti.</strong> Setiap mod ialah formulanya sendiri dengan kontrak inputnya sendiri."
        ],
        "closingParagraphs": [
          "<strong>Contoh Salah lawan Betul:</strong> Ambil segi tiga 3-4-5 dengan [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Betul: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Jika sudut yang salah digantikan, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], bukan 6. Kesilapan itu menggunakan sudut terangkum yang tidak betul untuk sisi [[b]] dan [[c]], dan 8 hanyalah luas segi tiga yang salah."
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Luas Yang Dikira Betul",
        "blocks": [
          { "kind": "h3", "text": "Kaedah 1: Semak Teorem Pythagoras" },
          { "kind": "p", "text": "Untuk segi tiga tepat yang sah, [[a^2+b^2=c^2]]. Untuk segi tiga 3-4-5, [[9+16=25]]. Kegagalan di sini bermakna input sisi menghuraikan tiada segi tiga tepat langsung." },
          { "kind": "h3", "text": "Kaedah 2: Semak Formula Kaki" },
          { "kind": "p", "text": "Kira [[K=ab/2]] secara berasingan. Untuk [[a=3]] dan [[b=4]], [[K=6]]. Persetujuan dengan hasil berasaskan sudut mengesahkan seluruh pengiraan." },
          { "kind": "h3", "text": "Kaedah 3: Semak Sudut Pelengkap" },
          { "kind": "p", "text": "Sahkan [[A+B=90^\\circ]]. Untuk [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]]. Jumlah itu mesti dipenuhi agar sudut yang dimasukkan menjadi sudut tirus tulen segi tiga." },
          { "kind": "h3", "text": "Kaedah 4: Semak Hubungan Sinus" },
          { "kind": "p", "text": "Untuk Mod 1, [[\\sin(A)=a/c]]; untuk Mod 2, [[\\sin(B)=b/c]]. Dalam segi tiga 3-4-5, [[\\sin(36.87^\\circ)\\approx3/5]] dan [[\\sin(53.13^\\circ)\\approx4/5]]. Ini hubungan yang sama digunakan formula, disemak dalam arah bertentangan." },
          { "kind": "h3", "text": "Kaedah 5: Sahkan Ketekalan Input" },
          { "kind": "p", "text": "Untuk Mod 1, [[b\\approx c\\cos(A)]]; untuk Mod 2, [[a\\approx c\\cos(B)]]. Simbol penghampiran wajar apabila ukuran sudut telah dibundarkan." },
          { "kind": "h3", "text": "Kaedah 6: Semak Luas Maksimum" },
          { "kind": "p", "text": "Untuk hipotenus tetap, [[K\\leq c^2/4]]. Dengan [[c=5]], tiada luas sah melebihi 6.25 unit persegi. Luas yang dikira melebihi batas itu menandakan ralat input serta-merta." },
          { "kind": "h3", "text": "Kaedah 7: Semak Unit Persegi" },
          { "kind": "p", "text": "Pastikan hasil dinyatakan dalam kuasa dua unit panjang input. Ini menangkap tabiat yang menghairankan biasa iaitu melaporkan nombor luas dengan unit panjang yang tidak berubah." }
        ]
      },
      "sec-conclusion": {
        "h2": "Sudut, Kaki, dan Hipotenus Sahaja Yang Anda Perlukan",
        "blocks": [
          { "kind": "p", "text": "Kaedah luas berasaskan sudut ialah peraturan tapak-tinggi dengan tinggi dibina semula daripada hipotenus. Setelah sudut terangkum dipadankan dengan sisi yang betul, sinus membekalkan kaki serenjang, dan luas hanya satu penggantian jauhnya. Dua mod ialah dua pintu ke bilik yang sama: Mod 1 masuk melalui sudut A, Mod 2 melalui sudut B, dan kedua-duanya tiba pada luas yang sama." },
          { "kind": "p", "text": "Disiplin yang menjadikan kaedah ini boleh dipercayai ialah ketekalan: semak bahawa kaki, hipotenus, dan sudut sepadan melalui hubungan kosinus, sahkan luas terhadap formula kaki apabila kaki kedua boleh dipulihkan, dan kekalkan pasangan sudut-sisi dengan tepat. Dengan semakan itu, jawapan memperoleh kepercayaannya." },
          { "kind": "p", "text": "Gunakan kalkulator halaman ini apabila kaki, hipotenus, dan sudut terangkum ialah data yang diukur, dan capai kalkulator kaki, altitud, atau semiperimeter apabila ukuran menunjuk ke tempat lain." }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimana anda mencari luas segi tiga tepat menggunakan sudut?",
        "answer": "Gunakan K = bc sin(A)/2 apabila anda tahu sisi b, hipotenus c, dan sudut terangkum A; gunakan K = ac sin(B)/2 apabila anda tahu sisi a, hipotenus c, dan sudut terangkum B. Sinus menukar hipotenus menjadi tinggi serenjang relatif kepada kaki yang dipilih, dan membahagi dua memberikan luas dalam unit persegi."
      },
      {
        "question": "Apakah formula luas menggunakan sisi b, hipotenus c, dan sudut A?",
        "answer": "Formulanya ialah K = bc sin(A)/2. Sisi b ialah kaki yang bersebelahan dengan sudut A, c ialah hipotenus, dan A ialah sudut tirus antaranya. Untuk b = 4, c = 5, dan A kira-kira 36.87 darjah, sin(A) kira-kira 0.6, jadi luasnya kira-kira 6 unit persegi."
      },
      {
        "question": "Apakah formula luas menggunakan sisi a, hipotenus c, dan sudut B?",
        "answer": "Formulanya ialah K = ac sin(B)/2. Sisi a ialah kaki yang bersebelahan dengan sudut B, c ialah hipotenus, dan B ialah sudut tirus antaranya. Untuk a = 3, c = 5, dan B kira-kira 53.13 darjah, sin(B) kira-kira 0.8, jadi luasnya kira-kira 6 unit persegi, segi tiga yang sama seperti contoh Mod 1."
      },
      {
        "question": "Mengapa formula luas menggunakan sinus?",
        "answer": "Sinus membina tinggi serenjang daripada hipotenus. Dengan tapak b dan sisi c bertemu padanya pada sudut A, tingginya ialah c sin(A), jadi K = bc sin(A)/2. Tanpa sebutan sinus formula akan mendarab dua panjang tidak serenjang dan menjawab soalan geometri yang berbeza."
      },
      {
        "question": "Apakah sudut terangkum?",
        "answer": "Sudut terangkum terletak antara dua sisi yang ditetapkan. Sudut A terangkum antara sisi b dan c; sudut B terangkum antara sisi a dan c. Formula luas sinus hanya berfungsi dengan sudut terangkum bagi dua sisi yang digunakan, kerana formula membaca tinggi serenjang daripada sudut itu."
      },
      {
        "question": "Bolehkah saya mengira luas tanpa mengetahui kedua-dua kaki?",
        "answer": "Ya. Hipotenus dan sudut terangkum bersama-sama membina semula kaki yang tiada melalui sinus, jadi kaki kedua tidak perlu diukur langsung. Jika kedua-dua kaki diketahui pula, formula K = ab/2 yang lebih mudah ialah laluan langsung dan tidak memerlukan sebarang trigonometri. Pilih formula yang sepadan dengan data yang anda ada."
      },
      {
        "question": "Mengapa kedua-dua mod kalkulator memberikan luas yang sama?",
        "answer": "Kedua-dua mod menghuraikan satu segi tiga. Memandangkan sin(A) = a/c, bc sin(A) = ab; memandangkan sin(B) = b/c, ac sin(B) = ab. Kedua-dua formula dipermudahkan menjadi K = ab/2. Perbezaan kecil daripada input sudut yang dibundarkan ialah kesan pembundaran, bukan pertikaian antara formula."
      },
      {
        "question": "Bolehkah saya menggunakan sebarang sudut tirus dengan kaki dan hipotenus yang diberi?",
        "answer": "Tidak. Tiga input mesti sepadan: Mod 1 memerlukan b = c cos(A) dan Mod 2 memerlukan a = c cos(B). Sudut tirus sewenang-wenang dengan panjang sisi yang sama menghuraikan segi tiga bukan tepat yang berbeza, dan luas yang dikembalikan formula adalah milik segi tiga itu."
      },
      {
        "question": "Bagaimana saya boleh mengesahkan luas menggunakan formula kaki?",
        "answer": "Pulihkan kaki yang tiada dengan teorem Pythagoras, kemudian kira K = ab/2. Untuk b = 4 dan c = 5, a = punca kuasa dua(25 - 16) = 3, dan K = 12/2 = 6, sepadan dengan hasil berasaskan sudut. Persetujuan antara dua laluan berasingan mengesahkan input dan aritmetik."
      },
      {
        "question": "Adakah sudut perlu dalam darjah atau radian?",
        "answer": "Kalkulator menjangkakan sudut dalam darjah. Tukar radian kepada darjah dengan Darjah = Radian darab 180/pi; sebagai contoh, pi/6 radian ialah 30 darjah. Nilai radian yang dimasukkan di tempat darjah dijangkakan memberikan nilai sinus yang kelihatan munasabah tetapi salah sama sekali, jadi semak unit sudut sebelum mengira."
      },
      {
        "question": "Apakah luas maksimum untuk hipotenus yang diberi?",
        "answer": "Maksimumnya ialah c kuasa dua dibahagi 4, dicapai apabila kedua-dua sudut tirus ialah 45 darjah, segi tiga tepat sama kaki. Untuk hipotenus 10 unit luas maksimum ialah 25 unit persegi. Sebarang luas yang dikira melebihi c kuasa dua per 4 menandakan ralat input."
      },
      {
        "question": "Bila patut saya gunakan Kalkulator Luas Segi Tiga Tepat utama?",
        "answer": "Gunakan kalkulator luas utama apabila ukuran anda sepadan dengan salah satu gabungan inputnya secara lebih langsung, contohnya apabila kedua-dua kaki sudah diketahui. Kekalkan kalkulator berasaskan sudut ini untuk kes khusus ia dibina: satu kaki, hipotenus, dan sudut tirus terangkum yang diukur bersama dalam satu persediaan."
      }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Tepat",
      "Kalkulator Luas Segi Tiga Tepat Dari Kaki",
      "Kalkulator Luas Segi Tiga Tepat Dari Altitud",
      "Kalkulator Luas Segi Tiga Tepat Dari Kaki dan Sudut",
      "Kalkulator Luas Segi Tiga Tepat Dari Semiperimeter",
      "Kalkulator Sisi Segi Tiga Tepat Dari Sinus",
      "Kalkulator Sudut Segi Tiga Tepat Dari Sinus"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego na podstawie kąta",
      "sec-geometry": "Boki i kąty trójkąta prostokątnego",
      "sec-sine": "Dlaczego wzór na pole wykorzystuje sinus?",
      "sec-mode1": "Jak obliczyć pole z boku b, przeciwprostokątnej c i kąta A",
      "sec-mode2": "Jak obliczyć pole z boku a, przeciwprostokątnej c i kąta B",
      "sec-same": "Dwa wzory oparte na kącie, jeden trójkąt prostokątny",
      "sec-howto": "Jak korzystać z kalkulatora pola trójkąta prostokątnego na podstawie kąta",
      "sec-foundations": "Przykłady krok po kroku: pole trójkąta prostokątnego na podstawie kąta",
      "sec-applications": "Praktyczne zastosowania pola trójkąta prostokątnego na podstawie kąta",
      "sec-consistency": "Jak sprawdzić, czy długości boków i kąt tworzą trójkąt prostokątny",
      "sec-alternatives": "Alternatywne sposoby obliczania pola trójkąta prostokątnego przy użyciu kątów",
      "sec-angle-effect": "Jak kąt ostry wpływa na pole trójkąta prostokątnego?",
      "sec-units": "Jednostki pola, stopnie i zaokrąglanie",
      "sec-mistakes": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego na podstawie kąta",
      "sec-verify": "Jak sprawdzić, czy obliczone pole jest poprawne",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego na podstawie kąta",
        "blocks": [
          { "kind": "p", "text": "Załóżmy, że trójkąt prostokątny ma przyprostokątną [[b=4\\text{ m}]], przeciwprostokątną [[c=5\\text{ m}]], a kąt ostry między tymi dwoma bokami mierzy około [[A\\approx36.87^\\circ]]. Jego pole wynika bezpośrednio: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Ponieważ [[\\sin(36.87^\\circ)\\approx0.6]], pole wynosi w przybliżeniu [[[\\boxed{K=6\\text{ m}^2}]]]. Trójkąt obejmuje 6 metrów kwadratowych płaskiej powierzchni." },
          { "kind": "p", "text": "Ten kalkulator obsługuje właśnie taką sytuację: mając jedną przyprostokątną, przeciwprostokątną i kąt ostry między nimi, sinus zamienia przeciwprostokątną w brakującą wysokość prostopadłą, a połowa iloczynu podstawy i wysokości daje pole w jednostkach kwadratowych. Kąt zawarty musi leżeć między dwoma wprowadzonymi bokami, a każdy tryb łączy jeden konkretny kąt z jego dwoma bokami." },
          { "kind": "p", "text": "Kąt [[36.87^\\circ]] jest zaokrągleniem wartości około [[36.8699^\\circ]]; zachowanie pełnej precyzji w kalkulatorze daje najdokładniejszy wynik." }
        ]
      },
      "sec-geometry": {
        "h2": "Boki i kąty trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "W tym przewodniku stosujemy jedną spójną notację: [[A]] i [[B]] to dwa kąty ostre, [[C=90^\\circ]] to kąt prosty, bok [[a]] leży naprzeciw kąta [[A]], bok [[b]] leży naprzeciw kąta [[B]], bok [[c]] to przeciwprostokątna, a [[K]] to pole." },
          { "kind": "h3", "text": "Czym jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny ma jeden kąt wewnętrzny równy dokładnie [[90^\\circ]]. Jego dwie przyprostokątne spotykają się w tym kącie prostym, a przeciwprostokątna leży naprzeciw niego. Przeciwprostokątna jest zawsze najdłuższym bokiem. Pozostałe dwa kąty są ostre, a ponieważ trzy kąty wewnętrzne sumują się do 180 stopni, [[A+B+C=180^\\circ]]. Skoro [[C=90^\\circ]], kąty ostre spełniają [[A+B=90^\\circ]]: znajomość jednego wyznacza drugi." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego, oznaczony [[c]] w obu trybach kalkulatora. Aby ją znaleźć w trójkącie narysowanym w dowolnej orientacji, szukaj boku, który nie dotyka kwadratowego znacznika narożnika: ten bok to przeciwprostokątna. Jest dłuższa od każdej przyprostokątnej, ponieważ obejmuje cały kąt prosty, podczas gdy każda przyprostokątna obejmuje tylko kąt ostry. Każdy wzór na pole na tej stronie używa [[c]] jako jednego z dwóch boków, więc poprawne jej rozpoznanie to pierwsza umiejętność do przećwiczenia." },
          { "kind": "h3", "text": "Czym jest bok przyległy?" },
          { "kind": "p", "text": "Przyprostokątna przyległa to ta, która dotyka wybranego kąta odniesienia, nie będąc przeciwprostokątną. Dla kąta [[A]] przyprostokątną przyległą jest [[b]]; dla kąta [[B]] przyprostokątną przyległą jest [[a]]. Najpierw nazwij kąt odniesienia, potem odczytaj jego przyprostokątną przyległą. Zamiana kąta odniesienia po cichu zamienia to, która przyprostokątna liczy się jako przyległa, a ta zamiana stoi za wieloma typowymi błędami wymienionymi dalej na tej stronie." },
          { "kind": "h3", "text": "Czym jest bok przeciwległy?" },
          { "kind": "p", "text": "Bok przeciwległy leży dokładnie naprzeciw wybranego kąta, nie dotykając go. Dla kąta [[A]] bok [[a]] jest przeciwległy; dla kąta [[B]] bok [[b]] jest przeciwległy. Oznaczenia zmieniają się wraz z kątem odniesienia, ale przeciwprostokątna pozostaje [[c]] w obu przypadkach. Trzymanie kąta odniesienia stałego podczas oznaczania trójkąta zachowuje spójność każdego kolejnego kroku." },
          { "kind": "h3", "text": "Czym jest kąt zawarty?" },
          { "kind": "p", "text": "Kąt zawarty to kąt leżący między dwoma wskazanymi bokami. Kąt [[A]] jest zawarty między bokami [[b]] i [[c]]; kąt [[B]] jest zawarty między bokami [[a]] i [[c]]. Ogólny wzór na pole z sinusem działa tylko wtedy, gdy kąt jest tym zawartym między użytymi dwoma bokami, ponieważ wzór odczytuje wysokość prostopadłą właśnie z tego kąta. Połączenie boku z kątem, którego on nie dotyka, łamie geometrię, na której opiera się wzór." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC z dwoma trybami pola: kąt A między bokami b i c, kąt B między bokami a i c",
        "figcaption": "Oba tryby kalkulatora używają tego samego trójkąta. Tryb 1 łączy bok b, przeciwprostokątną c i zawarty kąt A; tryb 2 łączy bok a, przeciwprostokątną c i zawarty kąt B."
      },
      "sec-sine": {
        "h2": "Dlaczego wzór na pole wykorzystuje sinus?",
        "blocks": [
          { "kind": "p", "text": "Oba tryby kalkulatora opierają się na jednym ogólnym wzorze na pole dowolnego trójkąta o danych dwóch bokach i kącie między nimi:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "Tutaj [[x]] i [[y]] to dwie długości boków, [[\\theta]] to kąt zawarty między nimi, a [[K]] to pole. Człon z sinusem to właśnie to, co buduje wysokość prostopadłą z drugiego boku." },
          { "kind": "h3", "text": "Jak działa ogólny wzór" },
          { "kind": "p", "text": "Znana reguła pola trójkąta to [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Gdy wysokość prostopadła nie jest zmierzona bezpośrednio, sinus potrafi ją odzyskać z innego boku. Weź podstawę o długości [[x]] i drugi bok o długości [[y]] spotykający ją pod kątem [[\\theta]]. Prostopadła składowa tego drugiego boku, czyli wysokość licząca się do pola, to [[h=y\\sin(\\theta)]]. Podstawienie do reguły podstawa-wysokość daje [[K=\\frac12 x(y\\sin(\\theta))]], czyli powyższy ogólny wzór. Kąt zawarty musi odpowiadać wybranym dwóm bokom; kąt z innego miejsca trójkąta mierzy inną prostopadłą." },
          { "kind": "h3", "text": "Dlaczego pole dzielimy przez dwa?" },
          { "kind": "p", "text": "Trójkąt zajmuje połowę pola równoległoboku zbudowanego na tej samej podstawie przy tej samej wysokości prostopadłej. Przy podstawie [[x]] i wysokości [[h]] iloczyn [[x\\times h]] to cały równoległobok, a trójkąt to dokładnie jego połowa. Pomnożenie dwóch boków i wartości sinusa bez dzielenia na pół dałoby więc dwukrotność szukanego pola." },
          { "kind": "h3", "text": "Dlaczego można użyć przeciwprostokątnej" },
          { "kind": "p", "text": "Jednym z dwóch boków we wzorze z kątem zawartym może być przeciwprostokątna. W parze z właściwą przyprostokątną i kątem ostrym między nimi przeciwprostokątna niesie wystarczająco dużo informacji, by zbudować pole: jej składowa sinusoidalna to dokładnie wysokość prostopadła względem tej przyprostokątnej jako podstawy. Dlatego kalkulator nigdy nie prosi o drugą przyprostokątną. Przeciwprostokątna nie jest szczególnym wyjątkiem od wzoru; to zwykły wybór boku przy zwykłym kącie zawartym." },
          { "kind": "h3", "text": "Dlaczego kąt musi być właściwy" },
          { "kind": "p", "text": "Zastąpienie kąta [[A]] kątem [[B]] przy zachowaniu tej samej pary boków zwykle daje błędny wynik. Weź trójkąt 3-4-5 o [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Poprawne obliczenie w trybie 1 to [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Podstawienie drugiego kąta daje [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], ponieważ [[\\sin(53.13^\\circ)\\approx0.8]]. Odpowiedź 8 nie jest artefaktem zaokrąglenia; to pole innej konfiguracji, w której para boków nie pasuje już do kąta zawartego. Poprawne sparowanie kąta z bokami to jedna z najważniejszych lekcji tej strony." }
        ],
        "imgAlt": "Trójkąt prostokątny 3-4-5: a równa się c razy sin A równa się 3 jako wysokość prostopadła do pola",
        "figcaption": "Sinus kąta A zamienia przeciwprostokątną w wysokość prostopadłą a = 3, więc znane K = ba/2 i bezpośredni wzór K = bc sin(A)/2 są zgodne."
      },
      "sec-mode1": {
        "h2": "Jak obliczyć pole z boku b, przeciwprostokątnej c i kąta A",
        "blocks": [
          { "kind": "p", "text": "Tryb 1 kalkulatora używa:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "Zmienne oznaczają: [[b]] przyprostokątną przyległą do kąta [[A]], [[c]] przeciwprostokątną, [[A]] ostry kąt zawarty między [[b]] a [[c]] oraz [[K]] pole." },
          { "kind": "h3", "text": "Wyprowadzenie wzoru krok po kroku" },
          { "kind": "p", "text": "Zacznij od wzoru na pole z przyprostokątnych [[K=ab/2]]. Ze stosunku sinusów przy kącie [[A]] mamy [[\\sin(A)=a/c]], więc [[a=c\\sin(A)]]. Przeciwległa przyprostokątna [[a]] jest przepisywana jako składowa sinusoidalna przeciwprostokątnej. Podstawienie daje [[K=\\frac{b(c\\sin(A))}{2}]], a przekształcenie prowadzi do [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Nieznanej przeciwległej przyprostokątnej nie trzeba wprowadzać, ponieważ wzór konstruuje ją z przeciwprostokątnej i kąta w tle." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład" },
          { "kind": "p", "text": "Dane: [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        "steps": [
          "<strong>Zapisz wzór.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Podstaw.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Oblicz sinus.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Pomnóż.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Podziel.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Odpowiedź mówi, że trójkąt pokrywa około 6 metrów kwadratowych. Ponieważ kąt wejściowy jest zaokrąglony, słowo w przybliżeniu należy do sprawozdania, choć przy pełnej precyzji te same dane dają dokładnie 6.",
          "<strong>Weryfikacja przy użyciu brakującej przyprostokątnej:</strong> Brakująca przyprostokątna wynika z twierdzenia Pitagorasa: [[a=\\sqrt{c^2-b^2}]], więc [[a=\\sqrt{25-16}=3]]. Wtedy [[K=(3\\times4)/2=6]]. Obie drogi są zgodne, ponieważ opisują ten sam trójkąt: droga sinusoidalna buduje brakującą przyprostokątną z kąta, a droga z przyprostokątnych używa jej bezpośrednio.",
          "<strong>Kiedy używać trybu 1?</strong> Użyj trybu 1, gdy znanymi pomiarami są przyprostokątna przyległa do znanego kąta ostrego, przeciwprostokątna i sam ten kąt. Jeśli obie przyprostokątne są już znane, bezpośredni wzór z przyprostokątnych jest prostszy i całkowicie pomija kąt. Tryb 1 służy typowej sytuacji terenowej, w której kąt i dwie długości pochodzą z tego samego zestawu pomiarowego, a druga przyprostokątna nigdy nie została zapisana."
        ]
      },
      "sec-mode2": {
        "h2": "Jak obliczyć pole z boku a, przeciwprostokątnej c i kąta B",
        "blocks": [
          { "kind": "p", "text": "Tryb 2 kalkulatora używa:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "Zmienne oznaczają: [[a]] przyprostokątną przyległą do kąta [[B]], która jest przeciwległa do kąta [[A]]; [[c]] przeciwprostokątną; [[B]] ostry kąt zawarty między [[a]] a [[c]]; oraz [[K]] pole." },
          { "kind": "h3", "text": "Wyprowadzenie wzoru krok po kroku" },
          { "kind": "p", "text": "Zacznij ponownie od [[K=ab/2]]. Stosunek sinusów mierzony przy kącie [[B]] brzmi [[\\sin(B)=b/c]], ponieważ z punktu widzenia [[B]] bokiem przeciwległym jest [[b]]. Stąd [[b=c\\sin(B)]]. Podstawienie daje [[K=\\frac{a(c\\sin(B))}{2}]], więc [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Wzór używa boku [[a]], choć [[a]] nazywany jest bokiem przeciwległym w głównej notacji strony; miano przeciwległy należy do kąta [[A]], natomiast względem kąta [[B]] ten sam bok jest przyległy. Oznaczenia boków są zawsze względne wobec wybranego kąta odniesienia." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład" },
          { "kind": "p", "text": "Dane: [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        "steps": [
          "<strong>Zapisz wzór.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Podstaw.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Oblicz sinus.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Pomnóż i podziel.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Wynik to te same 6 metrów kwadratowych co w przykładzie trybu 1, ponieważ oba przykłady opisują ten sam trójkąt 3-4-5 oglądany z jego dwóch kątów ostrych.",
          "<strong>Weryfikacja przy użyciu brakującej przyprostokątnej:</strong> Oblicz [[b=\\sqrt{c^2-a^2}]], więc [[b=\\sqrt{25-9}=4]]. Wtedy [[K=(3\\times4)/2=6]]. Zgodność jest oczekiwana: wzór sinusoidalny po cichu odtworzył brakującą przyprostokątną [[b]] z przeciwprostokątnej i kąta.",
          "<strong>Kiedy używać trybu 2?</strong> Użyj trybu 2, gdy znanym bokiem jest [[a]], znana jest przeciwprostokątna [[c]], a zmierzony kąt to ten stykający się z bokiem [[a]], czyli kąt [[B]]. Oba tryby nie są wymienne bez jednoczesnej zmiany oznaczeń boków i kątów; wprowadzenie do trybu 2 danych trybu 1 oblicza pole innego trójkąta."
        ]
      },
      "sec-same": {
        "h2": "Dwa wzory oparte na kącie, jeden trójkąt prostokątny",
        "blocks": [
          { "kind": "p", "text": "Oba tryby obliczają pole tego samego obiektu geometrycznego, więc muszą być zgodne. Dla trybu 1 mamy [[K=bc\\sin(A)/2]], a ponieważ [[\\sin(A)=a/c]] dla poprawnego trójkąta prostokątnego, [[bc\\sin(A)=ab]]. Dla trybu 2 mamy [[K=ac\\sin(B)/2]], a ponieważ [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. Oba wzory upraszczają się do [[[\\boxed{K=\\frac{ab}{2}}]]], znanego wzoru z przyprostokątnych. Dwa tryby to dwie różne drogi wejściowe do jednej wielkości." }
        ],
        "closingParagraphs": [
          "Zaokrąglone pomiary kątów mogą wprowadzać drobne różnice liczbowe między trybami, ponieważ [[36.87^\\circ]] jest jedynie przybliżeniem prawdziwych [[36.8699^\\circ]]. Rozbieżność rzędu setnych to efekt zaokrąglenia, nie niezgodność wzorów."
        ],
        "table": {
          "headers": ["Metoda", "Dane wejściowe", "Wynik"],
          "rows": [
            ["Wzór z przyprostokątnych", "[[a=3,\\;b=4]]", "6 jednostek kwadratowych"],
            ["Tryb 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Około 6"],
            ["Tryb 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Około 6"]
          ]
        },
        "imgAlt": "Ten sam trójkąt 3-4-5 rozwiązany wzorami trybu 1 i trybu 2, oba dają pole 6, zweryfikowane wzorem z przyprostokątnych",
        "figcaption": "Dwa kąty zawarte, dwa równoważne wzory, jedno pole trójkąta."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego na podstawie kąta",
        "blocks": [
          { "kind": "p", "text": "Ten przewodnik podąża za rzeczywistym interfejsem kalkulatora na tej stronie, krok po kroku." }
        ],
        "steps": [
          "<strong>Zidentyfikuj znane już pomiary.</strong> Potwierdź, że masz jedną przyprostokątną, przeciwprostokątną i kąt ostry z tego samego trójkąta.",
          "<strong>Wybierz właściwy tryb.</strong> Wybierz tryb 1 dla boku [[b]], przeciwprostokątnej [[c]] i kąta [[A]]; wybierz tryb 2 dla boku [[a]], przeciwprostokątnej [[c]] i kąta [[B]].",
          "<strong>Potwierdź, który kąt ostry jest mierzony.</strong> Kąt musi być jednym z dwóch kątów ostrych, nie kątem prostym.",
          "<strong>Zidentyfikuj odpowiadającą przyprostokątną.</strong> Przyprostokątna musi stykać się ze zmierzonym kątem; w razie wątpliwości sprawdź powyżej definicje przyległej i przeciwległej.",
          "<strong>Wprowadź długość przyprostokątnej.</strong> Wpisz zmierzoną przyprostokątną w pole przyprostokątnej wybranego trybu.",
          "<strong>Wprowadź długość przeciwprostokątnej.</strong> Wpisz ją w pole przeciwprostokątnej; musi być najdłuższa z dwóch długości.",
          "<strong>Wybierz zgodne jednostki miary.</strong> Obie długości muszą używać tej samej jednostki przed obliczeniem.",
          "<strong>Wprowadź kąt ostry w stopniach.</strong> Kalkulator oczekuje stopni, nie radianów.",
          "<strong>Potwierdź, że kąt leży ściśle między [[0^\\circ]] a [[90^\\circ]].</strong> Wartości brzegowe opisują kształty zdegenerowane, nie trójkąty.",
          "<strong>Potwierdź, że przeciwprostokątna jest dłuższa od przyprostokątnej.</strong> Przyprostokątna równa lub dłuższa od przeciwprostokątnej nie może należeć do trójkąta prostokątnego.",
          "<strong>Sprawdź, czy przyprostokątna, przeciwprostokątna i kąt opisują ten sam trójkąt prostokątny.</strong> Testy spójności w sekcji walidacji pokazują jak.",
          "<strong>Kliknij Oblicz pole.</strong> Wynik pojawi się wraz z pokazanymi krokami rozwiązania.",
          "<strong>Przejrzyj wynik i kroki rozwiązania.</strong> Prześledź każde podstawienie, aby upewnić się, że użyto zamierzonych danych.",
          "<strong>Zinterpretuj wynik w jednostkach kwadratowych.</strong> Jednostka pola to kwadrat wybranej jednostki długości.",
          "<strong>Użyj Resetuj, aby wyczyścić poprzednie obliczenie.</strong> Opróżnia to wszystkie pola przed wprowadzeniem kolejnego trójkąta."
        ],
        "closingParagraphs": [
          "Zauważ, że każdy tryb prosi o inną przyprostokątną i inny kąt. Tryby są różne, ponieważ różne jest sparowanie kąta zawartego, a nie dlatego, że jeden tryb jest skrótem drugiego."
        ]
      },
      "sec-foundations": {
        "h2": "Przykłady krok po kroku: pole trójkąta prostokątnego na podstawie kąta",
        "blocks": [
          { "kind": "p", "text": "Cztery przykłady budują metodę na znanych trójkątach, od trójki 3-4-5 po przypadki kątów szczególnych." },
          { "kind": "h3", "text": "Przykład 1: Trójkąt 3-4-5 z kątem A" },
          { "kind": "p", "text": "Dane: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], użyj [[K=bc\\sin(A)/2]]. Wtedy [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], więc [[[\\boxed{K\\approx6}]]]. Pole wynosi 6 jednostek kwadratowych, ponieważ trójkąt obejmuje sześć jednostkowych kwadratów płaskiej powierzchni; przy kącie o pełnej precyzji wartość to dokładnie 6." },
          { "kind": "h3", "text": "Przykład 2: Ten sam trójkąt z kątem B" },
          { "kind": "p", "text": "Dane: [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], użyj [[K=ac\\sin(B)/2]]. Wtedy [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], więc [[[\\boxed{K\\approx6}]]]. Wynik zgadza się z przykładem 1, ponieważ oba przykłady opisują ten sam trójkąt; oba kąty to dopełniające się spojrzenia na jeden kształt." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt 30-60-90" },
          { "kind": "p", "text": "Weź [[c=10]] i [[A=30^\\circ]]. Przyprostokątna wynika z [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Wtedy [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], a ponieważ [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Wartości kątów szczególnych, takie jak [[\\sin(30^\\circ)]] i [[\\cos(30^\\circ)]], dają formy dokładne przed jakimkolwiek zaokrągleniem dziesiętnym, dlatego te trójkąty nadają się do ręcznego sprawdzania kalkulatora." },
          { "kind": "h3", "text": "Przykład 4: Trójkąt 45-45-90" },
          { "kind": "p", "text": "Dane: [[c=10]] i [[A=45^\\circ]], przyprostokątne są równe: [[a=b=5\\sqrt{2}]]. Wtedy [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], a ponieważ [[\\sin(45^\\circ)=\\sqrt{2}/2]], iloczyn upraszcza się do [[[\\boxed{K=25}]]]. To trójkąt prostokątny równoramienny i, jak pokazano dalej, ma on również największe możliwe pole dla trójkąta prostokątnego o przeciwprostokątnej 10 jednostek." }
        ]
      },
      "sec-applications": {
        "h2": "Praktyczne zastosowania pola trójkąta prostokątnego na podstawie kąta",
        "blocks": [
          { "kind": "p", "text": "Dwanaście w pełni rozwiązanych sytuacji, po sześć na każdy tryb kalkulatora. Każdy przykład podaje pomiary, wybiera tryb, stosuje wzór i interpretuje odpowiedź. Wartości kątów pokazano z dokładnością do dwóch miejsc po przecinku, natomiast arytmetyka zachowuje pełną precyzję." },
          { "kind": "h3", "text": "Przykład praktyczny 1: Trójkątny szczyt dachu" },
          { "kind": "p", "text": "Uproszczony trójkątny prostokątny fragment szczytu dachu ma bok przyległy [[b=4\\text{ m}]], przeciwprostokątną [[c=5\\text{ m}]] i kąt zawarty [[A\\approx36.87^\\circ]]. Użyj trybu 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], więc [[[\\boxed{K\\approx6\\text{ m}^2}]]]. pole płaskiego fragmentu, nie całkowita powierzchnia dachu. Sprawdzenie: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "Przykład praktyczny 2: Boczny panel rampy trójkątnej" },
          { "kind": "p", "text": "Boczny panel trójkątnej rampy prostokątnej ma [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]] i [[A\\approx16.26^\\circ]]. Leżący u podstaw bok przeciwległy to 0,7 m, więc [[\\sin(A)=0.7/2.5=0.28]]. Użyj trybu 1: [[K=(2.4\\times2.5\\times0.28)/2]], więc [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. pole panelu bocznego, nie pochyłej powierzchni rampy. Sprawdzenie: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "Przykład praktyczny 3: Trójkątny żagiel" },
          { "kind": "p", "text": "Płaski trójkątny prostokątny fragment żagla ma [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] i [[A\\approx22.62^\\circ]]. Bok przeciwległy to 5 ft, więc [[\\sin(A)=5/13]]. Użyj trybu 1: [[K=(12\\times13\\times(5/13))/2]], więc [[[\\boxed{K=30\\text{ ft}^2}]]]. płaskie pole geometryczne, przed szwami i odpadami. Sprawdzenie: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "Przykład praktyczny 4: Trójkątna prostokątna działka" },
          { "kind": "p", "text": "Szkic geodezyjny opisuje trójkątną prostokątną działkę o [[b=40\\text{ m}]], [[c=50\\text{ m}]] i [[A\\approx36.87^\\circ]]. Ponieważ [[\\sin(A)=30/50=0.6]], tryb 1 daje [[K=(40\\times50\\times0.6)/2]], więc [[[\\boxed{K=600\\text{ m}^2}]]]. pole płaskie działki w modelu płaskim. Sprawdzenie: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "Przykład praktyczny 5: Stalowy panel wsporczy" },
          { "kind": "p", "text": "Płaski trójkątny panel stalowy ma [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]] i [[A\\approx28.07^\\circ]]. Bok przeciwległy to 0,8 m, więc [[\\sin(A)=0.8/1.7]]. Użyj trybu 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], więc [[[\\boxed{K=0.6\\text{ m}^2}]]]. tylko pole płaskie, nie nośność. Sprawdzenie: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "Przykład praktyczny 6: Boczny profil schodów" },
          { "kind": "p", "text": "Uproszczony boczny panel schodów ma poziomą przyprostokątną [[b=3.2\\text{ m}]], przeciwprostokątną [[c=4\\text{ m}]] i [[A\\approx36.87^\\circ]]. Przy [[\\sin(A)=0.6]] tryb 1 daje [[K=(3.2\\times4\\times0.6)/2]], więc [[[\\boxed{K=3.84\\text{ m}^2}]]]. profil boczny, nie pole stopni. Sprawdzenie: przy drugiej przyprostokątnej 2,4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "Przykład praktyczny 7: Trójkątne okno" },
          { "kind": "p", "text": "Trójkątne prostokątne okno ma bok [[a=0.6\\text{ m}]], przeciwprostokątną [[c=1\\text{ m}]] i kąt zawarty [[B\\approx53.13^\\circ]]. Przy [[\\sin(B)=0.8]] tryb 2 daje [[K=(0.6\\times1\\times0.8)/2]], więc [[[\\boxed{K=0.24\\text{ m}^2}]]]. pole szyby przed naddatkami na ramę. Sprawdzenie: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "Przykład praktyczny 8: Trójkątna markiza" },
          { "kind": "p", "text": "Płaski trójkątny prostokątny fragment markizy ma [[a=1.2\\text{ m}]], [[c=2\\text{ m}]] i [[B\\approx53.13^\\circ]]. Użyj trybu 2: [[K=(1.2\\times2\\times0.8)/2]], więc [[[\\boxed{K=0.96\\text{ m}^2}]]]. Sprawdzenie: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "Przykład praktyczny 9: Wykrój ze sklejki" },
          { "kind": "p", "text": "Trójkątny prostokątny kawałek sklejki ma [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]] i [[B\\approx53.13^\\circ]]. Użyj trybu 2: [[K=(0.9\\times1.5\\times0.8)/2]], więc [[[\\boxed{K=0.54\\text{ m}^2}]]]. użyteczne pole materiału, bez odpadów z cięcia. Sprawdzenie: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "Przykład praktyczny 10: Pomiar trójkątnego pola" },
          { "kind": "p", "text": "Uproszczony pomiar trójkątnego pola daje [[a=7\\text{ m}]], [[c=25\\text{ m}]] i [[B\\approx73.74^\\circ]]. Druga przyprostokątna to 24 m, więc [[\\sin(B)=24/25=0.96]]. Użyj trybu 2: [[K=(7\\times25\\times0.96)/2]], więc [[[\\boxed{K=84\\text{ m}^2}]]]. pole płaskie fragmentu. Sprawdzenie: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "Przykład praktyczny 11: Trójkątny panel latawca" },
          { "kind": "p", "text": "Trójkątny prostokątny panel latawca lub tkaniny ma [[a=20\\text{ cm}]], [[c=25\\text{ cm}]] i [[B\\approx36.87^\\circ]]. Ponieważ [[\\sin(B)=15/25=0.6]], tryb 2 daje [[K=(20\\times25\\times0.6)/2]], więc [[[\\boxed{K=150\\text{ cm}^2}]]]. centymetry kwadratowe, zgodnie z danymi. Sprawdzenie: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "Przykład praktyczny 12: Boczny panel montażu solarnego" },
          { "kind": "p", "text": "Płaski trójkątny prostokątny panel boczny wspornika ma [[a=1.8\\text{ m}]], [[c=3\\text{ m}]] i kąt zawarty [[B\\approx53.13^\\circ]]. Przy [[\\sin(B)=0.8]] tryb 2 daje [[K=(1.8\\times3\\times0.8)/2]], więc [[[\\boxed{K=2.16\\text{ m}^2}]]]. pole panelu, nie moc ani wydajność elektryczna. Sprawdzenie: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["Sytuacja", "Tryb", "Przypr. / Przeciwpr.", "Kąt", "Pole", "Interpretacja"],
          "rows": [
            ["Szczyt dachu", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Pole płaskiego fragmentu"],
            ["Boczny panel rampy", "1", "2,4 m / 2,5 m", "[[A\\approx16.26^\\circ]]", "0,84 m²", "Panel boczny, nie stok"],
            ["Żagiel", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Płaskie pole przed szwami"],
            ["Działka", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Płaskie pole działki"],
            ["Panel stalowy", "1", "1,5 m / 1,7 m", "[[A\\approx28.07^\\circ]]", "0,6 m²", "Tylko pole płaskie"],
            ["Profil schodów", "1", "3,2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3,84 m²", "Profil boczny, nie stopnie"],
            ["Okno", "2", "0,6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0,24 m²", "Przed naddatkami na ramę"],
            ["Markiza", "2", "1,2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0,96 m²", "Pole trójkątnego fragmentu"],
            ["Kawałek sklejki", "2", "0,9 m / 1,5 m", "[[B\\approx53.13^\\circ]]", "0,54 m²", "Pole użyteczne, bez odpadów"],
            ["Pomiar pola", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Płaskie pole uprawne"],
            ["Panel latawca", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Pole tkaniny"],
            ["Boczny panel solarny", "2", "1,8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2,16 m²", "Panel wspornika, nie moc"]
          ]
        },
        "imgAlt": "Cztery rozwiązane obliczenia pola trójkąta prostokątnego: szczyt dachu, okno, pomiar pola i żagiel",
        "figcaption": "Cztery z rozwiązanych powyżej sytuacji, każda z trójkątem, kątem zawartym, wzorem i zweryfikowanym polem."
      },
      "sec-consistency": {
        "h2": "Jak sprawdzić, czy długości boków i kąt tworzą trójkąt prostokątny",
        "blocks": [
          { "kind": "p", "text": "Przyprostokątna, przeciwprostokątna i kąt ostry niosą więcej informacji, niż potrzebuje trójkąt prostokątny: dwa z trzech wyznaczają trzecie, więc wszystkie trzy muszą być zgodne. Poniższe testy potwierdzają, że obliczona liczba opisuje trójkąt prostokątny." },
          { "kind": "h3", "text": "Walidacja trybu 1" },
          { "kind": "p", "text": "Dla trybu 1 relacja spójności to [[\\cos(A)=b/c]], równoważnie [[[\\boxed{b=c\\cos(A)}]]]. Przy [[b=4]] i [[c=5]], [[\\cos(A)=0.8]] daje [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Dowolny kąt, taki jak [[60^\\circ]], nie opisywałby tego samego trójkąta prostokątnego przy tych długościach boków: [[5\\cos(60^\\circ)=2.5\\neq4]], więc trzy dane byłyby wzajemnie niespójne." },
          { "kind": "h3", "text": "Walidacja trybu 2" },
          { "kind": "p", "text": "Dla trybu 2 relacja to [[\\cos(B)=a/c]], równoważnie [[[\\boxed{a=c\\cos(B)}]]]. Przy [[a=3]] i [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. Wybrany kąt musi odpowiadać rzeczywistym pomiarom; przyprostokątna 3 z przeciwprostokątną 5 po prostu nie styka się pod kątem zawartym, powiedzmy, [[70^\\circ]]." },
          { "kind": "h3", "text": "Dlaczego ogólny wzór na pole wciąż może zwrócić liczbę" },
          { "kind": "p", "text": "Wzór [[K=\\frac12xy\\sin(\\theta)]] oblicza pole ogólnego trójkąta wyznaczonego przez dwa boki i ich kąt zawarty. Niezgodna kombinacja kąta i boków wciąż zwraca liczbę, ale wynikowy trójkąt nie jest prostokątny: to jakiś inny trójkąt, który akurat dzieli te trzy dane. Sam wynik arytmetyczny nie dowodzi, że dane opisują poprawny trójkąt prostokątny; tę pracę wykonuje powyższy test kosinusowy." },
          { "kind": "h3", "text": "Jak traktować zaokrąglone pomiary kątów" },
          { "kind": "p", "text": "Kąt taki jak [[36.87^\\circ]] może być zaokrąglonym wyświetleniem wartości około [[36.8699^\\circ]]. Drobne niezgodności z wyświetlania lub zaokrąglenia pomiaru należy odróżniać od rzeczywiście niespójnej geometrii: luz rzędu setnych stopnia to zaokrąglenie, natomiast niezgodność rzędu kilku stopni oznacza, że dane się nie zgadzają. Nie deklaruje się żadnej liczbowej tolerancji walidacji samego kalkulatora; rozróżnienie to osąd oparty na dostępnych pomiarach." }
        ]
      },
      "sec-alternatives": {
        "h2": "Alternatywne sposoby obliczania pola trójkąta prostokątnego przy użyciu kątów",
        "blocks": [
          { "kind": "p", "text": "To alternatywy matematyczne, nie dodatkowe tryby kalkulatora; pokazują tę samą geometrię przy innych kombinacjach danych." },
          { "kind": "h3", "text": "Użycie przeciwprostokątnej i jednego kąta ostrego" },
          { "kind": "p", "text": "Dla poprawnego trójkąta prostokątnego [[a=c\\sin(A)]] i [[b=c\\cos(A)]]. Podstawienie do [[K=ab/2]] daje [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Przy tożsamości kąta podwojonego [[\\sin(2A)=2\\sin(A)\\cos(A)]] staje się to [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Przeciwprostokątna i jeden kąt ostry wyznaczają trójkąt w pełni, więc w ogóle nie potrzeba pomiaru przyprostokątnej." },
          { "kind": "h3", "text": "Użycie jednej przyprostokątnej i jej kąta przyległego" },
          { "kind": "p", "text": "Jeśli znane są bok [[b]] i kąt [[A]], to [[a=b\\tan(A)]], a [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Sparowanie ma znaczenie: [[b]] musi być przyprostokątną przyległą do kąta [[A]], aby tangens odtworzył przyprostokątną przeciwległą." },
          { "kind": "h3", "text": "Użycie boku a i kąta B" },
          { "kind": "p", "text": "Lustrzane odbicie poprzedniego przypadku dla kąta [[B]]: [[b=a\\tan(B)]], więc [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Bok [[a]] jest przyległy do kąta [[B]], dlatego tangens znów odtwarza przyprostokątną przeciwległą." },
          { "kind": "h3", "text": "Która metoda jest najprostsza?" },
          { "kind": "p", "text": "Najlepszy wzór to ten, który pasuje do dostępnych pomiarów. Jeśli znane są obie przyprostokątne, użyj [[K=ab/2]] i pomiń trygonometrię. Jeśli znane są przyprostokątna, przeciwprostokątna i kąt zawarty, dwa tryby kalkulatora to bezpośrednia droga. Formy z tangensem i kątem podwojonym przydają się w obliczeniach odręcznych z kątami szczególnymi, ale dodawanie kroków, których dane nie wymagają, tylko mnoży miejsca, w których mogą ukryć się błędy." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Jak kąt ostry wpływa na pole trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Sinus rośnie wraz ze wzrostem kąta ostrego, więc większy kąt zdaje się obiecywać większe pole. To prawda tylko wtedy, gdy pozostałe wielkości pozostają stałe, a w trójkącie prostokątnym boki i kąt nie mogą zmieniać się niezależnie." },
          { "kind": "h3", "text": "Stała przeciwprostokątna, zmienny kąt" },
          { "kind": "p", "text": "Przy stałej przeciwprostokątnej pole można zapisać jako [[K=\\frac{c^2\\sin(2A)}{4}]]. Czynnik [[\\sin(2A)]] rośnie, gdy [[A]] przesuwa się od prawie [[0^\\circ]] w stronę [[45^\\circ]], a potem maleje, gdy [[A]] zbliża się do [[90^\\circ]]. Pole rośnie więc w pierwszej połowie zakresu ostrego, a maleje w drugiej połowie. Obie połowy są lustrzanymi odbiciami przez relację kątów dopełniających [[A+B=90^\\circ]]: zamiana kątów zamienia przyprostokątne, a pole pozostaje bez zmian." },
          { "kind": "h3", "text": "Maksymalne pole przy stałej przeciwprostokątnej" },
          { "kind": "p", "text": "Ponieważ [[\\sin(2A)\\leq1]], największe możliwe pole to [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], osiągane gdy [[A=B=45^\\circ]]. Dla [[c=10]] maksymalne pole to [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. To trójkąt prostokątny równoramienny z przykładu 4: równe przyprostokątne sprawiają, że iloczyn przyprostokątnych, a więc i pole, jest tak duży, jak pozwala stała przeciwprostokątna." },
          { "kind": "h3", "text": "Dlaczego pole nie rośnie po prostu wraz z kątem w każdym przypadku" },
          { "kind": "p", "text": "Twierdzenie o rosnących kątach jest bez znaczenia bez nazwania tego, co jest utrzymywane stałe. Przy stałej przeciwprostokątnej zależność najpierw rośnie, potem maleje; przy stałej przyprostokątnej zależność znów jest inna. Traktowanie pola jako prostej rosnącej funkcji kąta to częste uproszczenie i ta sekcja istnieje po to, by wyeliminować je z Twojej pracy." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki pola, stopnie i zaokrąglanie",
        "blocks": [
          { "kind": "h3", "text": "Metry kwadratowe" },
          { "kind": "p", "text": "Jeśli dane są w metrach, pole wychodzi w metrach kwadratowych: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. Mnożenie dwóch długości zawsze daje jednostkę kwadratową, niezależnie od układu jednostek." },
          { "kind": "h3", "text": "Centymetry kwadratowe" },
          { "kind": "p", "text": "Dane w centymetrach dają pola w centymetrach kwadratowych, jak w przykładzie z panelem latawca z jego wynikiem [[150\\text{ cm}^2]]. Przeliczanie jednostek kwadratowych podnosi do kwadratu liniowy współczynnik przeliczeniowy: 1 m² = 10 000 cm², nie 100." },
          { "kind": "h3", "text": "Stopy kwadratowe" },
          { "kind": "p", "text": "Dane w stopach dają pola w stopach kwadratowych, jak w przykładzie z żaglem z jego wynikiem [[30\\text{ ft}^2]]. Przed obliczeniem sprowadź wszystkie dane do jednej jednostki długości; kalkulator nie miesza metrów ze stopami." },
          { "kind": "h3", "text": "Stopnie a radiany" },
          { "kind": "p", "text": "Kalkulator oczekuje kątów w stopniach. Do przeliczenia użyj [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Na przykład [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Wprowadzenie wartości w radianach tam, gdzie oczekiwane są stopnie, to jeden z najbardziej szkodliwych błędów, ponieważ sinus małej liczby radianowej wygląda wiarygodnie, będąc całkowicie błędnym." },
          { "kind": "h3", "text": "Dlaczego sinus nie ma jednostek" },
          { "kind": "p", "text": "Sinus to stosunek dwóch długości, więc jednostki się skracają i wartość jest bezwymiarowa. Pomnożenie dwóch długości przez liczbę bezwymiarową zostawia dokładnie jednostki kwadratowe, których potrzebuje pole. Dlatego wartość sinusa jest taka sama niezależnie od tego, czy boki zmierzono w metrach, czy w stopach, o ile kształt trójkąta jest ten sam." },
          { "kind": "h3", "text": "Dlaczego zaokrąglanie pośrednie ma znaczenie" },
          { "kind": "p", "text": "Zaokrąglenie kąta lub wartości sinusa zbyt wcześnie może przesunąć końcowe pole. Zachowaj pełną precyzję przez całe obliczenie i zaokrąglaj tylko zgłaszany wynik, z precyzją, na jaką pozwalają pomiary wejściowe. Pomiar podany z dokładnością do dwóch cyfr znaczących nie zasługuje na odpowiedź z sześcioma miejscami po przecinku." }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego na podstawie kąta",
        "steps": [
          "<strong>Użycie kąta B w trybie 1 bez zmiany boków.</strong> Tryb 1 łączy [[b]] i [[c]] z kątem [[A]]; wprowadzenie [[B]] oblicza pole innego trójkąta.",
          "<strong>Użycie kąta A w trybie 2.</strong> Tryb 2 łączy [[a]] i [[c]] z kątem [[B]]. Przed wprowadzeniem liczb sprawdź selektor trybu.",
          "<strong>Mylenie przyległej z przeciwległą.</strong> Te oznaczenia zależą od kąta odniesienia: najpierw ustal kąt, potem oznacz przyprostokątne względem niego.",
          "<strong>Wprowadzenie przeciwprostokątnej w pole przyprostokątnej.</strong> Przyprostokątna musi być krótsza od [[c]]; ich zamiana psuje każdy test spójności.",
          "<strong>Użycie niewłaściwego kąta zawartego.</strong> Kąt musi leżeć między dwoma wprowadzonymi bokami, inaczej rzut sinusoidalny jest błędny.",
          "<strong>Zapomnienie funkcji sinus.</strong> Samo [[bc/2]] mnoży dwie nieprostopadłe długości; wynik nie jest polem trójkąta.",
          "<strong>Zapomnienie dzielenia przez dwa.</strong> Niepodzielony iloczyn to pole równoległoboku, nie trójkąta.",
          "<strong>Wprowadzanie radianów, gdy oczekiwane są stopnie.</strong> [[\\sin(0.64)]] i [[\\sin(36.87^\\circ)]] to zupełnie różne liczby.",
          "<strong>Wprowadzanie 0 lub 90 stopni.</strong> Żadna z tych wartości nie opisuje niezdegenerowanego trójkąta prostokątnego przy tych danych.",
          "<strong>Wprowadzanie ujemnych lub zerowych długości.</strong> Długości są dodatnie; wszystko inne nie ma sensu geometrycznego.",
          "<strong>Wprowadzanie przyprostokątnej dłuższej od przeciwprostokątnej.</strong> Przeciwprostokątna jest zawsze najdłuższym bokiem, więc taki wpis przeczy założeniom.",
          "<strong>Używanie niespójnych danych.</strong> Sprawdź [[b=c\\cos(A)]] lub [[a=c\\cos(B)]]; liczba z niedopasowanych danych nie należy do żadnego trójkąta prostokątnego.",
          "<strong>Mieszanie jednostek.</strong> Najpierw sprowadź wszystkie długości do jednej jednostki; metry z centymetrami skalują odpowiedź stukrotnie.",
          "<strong>Podawanie jednostek liniowych.</strong> Jednostka pola to kwadrat jednostki długości: m², nie m.",
          "<strong>Zaokrąglanie kąta zbyt wcześnie.</strong> Zaokrąglaj tylko końcową odpowiedź; wczesne zaokrąglenie przesuwa sinus.",
          "<strong>Traktowanie trybów jako wymiennych.</strong> Każdy tryb to osobny wzór z własnym kontraktem danych wejściowych."
        ],
        "closingParagraphs": [
          "<strong>Przykład błędny a poprawny:</strong> Weź trójkąt 3-4-5 o [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Poprawnie: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Jeśli podstawić zły kąt, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], nie 6. Błąd polega na użyciu niewłaściwego kąta zawartego dla boków [[b]] i [[c]], a 8 to po prostu pole niewłaściwego trójkąta."
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy obliczone pole jest poprawne",
        "blocks": [
          { "kind": "h3", "text": "Metoda 1: Sprawdź twierdzenie Pitagorasa" },
          { "kind": "p", "text": "Dla poprawnego trójkąta prostokątnego [[a^2+b^2=c^2]]. Dla trójkąta 3-4-5: [[9+16=25]]. Niepowodzenie tutaj oznacza, że dane boków nie opisują żadnego trójkąta prostokątnego." },
          { "kind": "h3", "text": "Metoda 2: Sprawdź wzór z przyprostokątnych" },
          { "kind": "p", "text": "Oblicz niezależnie [[K=ab/2]]. Dla [[a=3]] i [[b=4]]: [[K=6]]. Zgodność z wynikiem opartym na kącie potwierdza całe obliczenie." },
          { "kind": "h3", "text": "Metoda 3: Sprawdź kąt dopełniający" },
          { "kind": "p", "text": "Zweryfikuj [[A+B=90^\\circ]]. Dla [[A\\approx36.87^\\circ]]: [[B\\approx53.13^\\circ]]. Suma musi się zgadzać, aby wprowadzony kąt był prawdziwym kątem ostrym trójkąta." },
          { "kind": "h3", "text": "Metoda 4: Sprawdź zależność sinusoidalną" },
          { "kind": "p", "text": "Dla trybu 1: [[\\sin(A)=a/c]]; dla trybu 2: [[\\sin(B)=b/c]]. W trójkącie 3-4-5: [[\\sin(36.87^\\circ)\\approx3/5]] i [[\\sin(53.13^\\circ)\\approx4/5]]. To ta sama zależność, której używa wzór, sprawdzona w przeciwnym kierunku." },
          { "kind": "h3", "text": "Metoda 5: Zweryfikuj spójność danych" },
          { "kind": "p", "text": "Dla trybu 1: [[b\\approx c\\cos(A)]]; dla trybu 2: [[a\\approx c\\cos(B)]]. Znak przybliżenia jest właściwy, gdy pomiar kąta został zaokrąglony." },
          { "kind": "h3", "text": "Metoda 6: Sprawdź maksymalne pole" },
          { "kind": "p", "text": "Przy stałej przeciwprostokątnej [[K\\leq c^2/4]]. Przy [[c=5]] żadne poprawne pole nie przekracza 6,25 jednostki kwadratowej. Obliczone pole powyżej tej granicy natychmiast sygnalizuje błąd danych." },
          { "kind": "h3", "text": "Metoda 7: Sprawdź jednostki kwadratowe" },
          { "kind": "p", "text": "Upewnij się, że wynik wyrażono w kwadracie jednostki długości danych. To wyłapuje zaskakująco częsty nawyk podawania liczby pola przy niezmienionej jednostce długości." }
        ]
      },
      "sec-conclusion": {
        "h2": "Kąt, przyprostokątna i przeciwprostokątna to wszystko, czego potrzebujesz",
        "blocks": [
          { "kind": "p", "text": "Metoda pola oparta na kącie to reguła podstawa-wysokość z wysokością odtworzoną z przeciwprostokątnej. Gdy kąt zawarty zostanie sparowany z właściwymi bokami, sinus dostarcza prostopadłą przyprostokątną, a pole jest o jedno podstawienie dalej. Dwa tryby to dwoje drzwi do tego samego pokoju: tryb 1 wchodzi przez kąt A, tryb 2 przez kąt B, a oba docierają do tego samego pola." },
          { "kind": "p", "text": "Dyscyplina, która czyni metodę godną zaufania, to spójność: sprawdź, czy przyprostokątna, przeciwprostokątna i kąt zgadzają się przez relację kosinusową, zweryfikuj pole względem wzoru z przyprostokątnych, gdy da się odtworzyć drugą przyprostokątną, i trzymaj sparowanie kąta z bokami dokładne. Przy tych kontrolach odpowiedź zasługuje na zaufanie." },
          { "kind": "p", "text": "Używaj kalkulatora z tej strony, gdy przyprostokątna, przeciwprostokątna i kąt zawarty to zmierzone dane, a sięgaj po kalkulatory z przyprostokątnych, wysokości lub półobwodu, gdy pomiary wskazują gdzie indziej." }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jak obliczyć pole trójkąta prostokątnego na podstawie kąta?",
        "answer": "Użyj K = bc sin(A)/2, gdy znasz bok b, przeciwprostokątną c i zawarty kąt A; użyj K = ac sin(B)/2, gdy znasz bok a, przeciwprostokątną c i zawarty kąt B. Sinus zamienia przeciwprostokątną w wysokość prostopadłą względem wybranej przyprostokątnej, a dzielenie przez dwa daje pole w jednostkach kwadratowych."
      },
      {
        "question": "Jaki jest wzór na pole z boku b, przeciwprostokątnej c i kąta A?",
        "answer": "Wzór to K = bc sin(A)/2. Bok b to przyprostokątna przyległa do kąta A, c to przeciwprostokątna, a A to kąt ostry między nimi. Dla b = 4, c = 5 i A około 36,87 stopnia sin(A) wynosi około 0,6, więc pole to około 6 jednostek kwadratowych."
      },
      {
        "question": "Jaki jest wzór na pole z boku a, przeciwprostokątnej c i kąta B?",
        "answer": "Wzór to K = ac sin(B)/2. Bok a to przyprostokątna przyległa do kąta B, c to przeciwprostokątna, a B to kąt ostry między nimi. Dla a = 3, c = 5 i B około 53,13 stopnia sin(B) wynosi około 0,8, więc pole to około 6 jednostek kwadratowych, ten sam trójkąt co w przykładzie trybu 1."
      },
      {
        "question": "Dlaczego wzór na pole wykorzystuje sinus?",
        "answer": "Sinus buduje wysokość prostopadłą z przeciwprostokątnej. Przy podstawie b i boku c spotykającym ją pod kątem A wysokość wynosi c sin(A), więc K = bc sin(A)/2. Bez członu sinusoidalnego wzór mnożyłby dwie nieprostopadłe długości i odpowiadałby na inne pytanie geometryczne."
      },
      {
        "question": "Czym jest kąt zawarty?",
        "answer": "Kąt zawarty leży między dwoma wskazanymi bokami. Kąt A jest zawarty między bokami b i c; kąt B jest zawarty między bokami a i c. Wzór na pole z sinusem działa tylko z kątem zawartym użytych dwóch boków, ponieważ wzór odczytuje wysokość prostopadłą właśnie z tego kąta."
      },
      {
        "question": "Czy mogę obliczyć pole, nie znając obu przyprostokątnych?",
        "answer": "Tak. Przeciwprostokątna i kąt zawarty wspólnie odtwarzają brakującą przyprostokątną przez sinus, więc drugiej przyprostokątnej nie trzeba w ogóle mierzyć. Jeśli zamiast tego znane są obie przyprostokątne, prostszy wzór K = ab/2 to bezpośrednia droga i nie wymaga żadnej trygonometrii. Wybierz wzór pasujący do danych, które posiadasz."
      },
      {
        "question": "Dlaczego oba tryby kalkulatora dają to samo pole?",
        "answer": "Oba tryby opisują jeden trójkąt. Ponieważ sin(A) = a/c, bc sin(A) = ab; ponieważ sin(B) = b/c, ac sin(B) = ab. Oba wzory upraszczają się do K = ab/2. Drobne różnice z zaokrąglonych danych kątowych to efekty zaokrąglenia, nie niezgodność wzorów."
      },
      {
        "question": "Czy mogę użyć dowolnego kąta ostrego z daną przyprostokątną i przeciwprostokątną?",
        "answer": "Nie. Trzy dane muszą być zgodne: tryb 1 wymaga b = c cos(A), a tryb 2 wymaga a = c cos(B). Dowolny kąt ostry przy tych samych długościach boków opisuje inny, nieprostokątny trójkąt, a pole zwracane przez wzór należy do tamtego trójkąta."
      },
      {
        "question": "Jak zweryfikować pole przy użyciu wzoru z przyprostokątnych?",
        "answer": "Odtwórz brakującą przyprostokątną twierdzeniem Pitagorasa, potem oblicz K = ab/2. Dla b = 4 i c = 5, a = pierwiastek(25 - 16) = 3, a K = 12/2 = 6, zgodnie z wynikiem opartym na kącie. Zgodność dwóch niezależnych dróg potwierdza dane i arytmetykę."
      },
      {
        "question": "Czy kąt musi być w stopniach, czy w radianach?",
        "answer": "Kalkulator oczekuje kątów w stopniach. Przelicz radiany na stopnie wzorem Stopnie = Radiany razy 180/pi; na przykład pi/6 radiana to 30 stopni. Wartość w radianach wprowadzona tam, gdzie oczekiwane są stopnie, daje wiarygodnie wyglądającą, lecz całkowicie błędną wartość sinusa, więc przed obliczeniem sprawdź jednostkę kąta."
      },
      {
        "question": "Jakie jest maksymalne pole dla danej przeciwprostokątnej?",
        "answer": "Maksimum to c do kwadratu podzielone przez 4, osiągane gdy oba kąty ostre mają 45 stopni, czyli w trójkącie prostokątnym równoramiennym. Dla przeciwprostokątnej 10 jednostek maksymalne pole to 25 jednostek kwadratowych. Każde obliczone pole powyżej c kwadrat przez 4 sygnalizuje błąd danych."
      },
      {
        "question": "Kiedy użyć głównego kalkulatora pola trójkąta prostokątnego?",
        "answer": "Użyj głównego kalkulatora pola, gdy Twoje pomiary bardziej bezpośrednio pasują do jednej z jego kombinacji danych, na przykład gdy znane są obie przyprostokątne. Ten kalkulator oparty na kącie zachowaj na przypadek, do którego został zbudowany: jedna przyprostokątna, przeciwprostokątna i zawarty kąt ostry zmierzone razem."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator pola trójkąta prostokątnego z wysokości",
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnej i kąta",
      "Kalkulator pola trójkąta prostokątnego z półobwodu",
      "Kalkulator boku trójkąta prostokątnego z sinusa",
      "Kalkulator kąta trójkąta prostokątnego z sinusa"
    ]
  }
};
