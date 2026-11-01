/**
 * trigRatiosGuideTranslations.batch2c.ts
 * Locales ms (Malay), pl (Polish), 2-locale partial for batch2
 * (split because a single 6-locale worker exceeded its output token budget).
 *
 * Follows TRIGRATIOS_TRANSLATION_SCHEMA.md and the locked translation
 * standard (TRANSLATION_PROMPT.md, 2026-10-30).
 *
 * Structure per language:
 * - tocHeading, tocItems (17 entries keyed by section id)
 * - sections (15 entries): sec-intro, sec-triangle, sec-ratios, sec-six,
 *   sec-choose, sec-howto, sec-foundations, sec-applications, sec-relate,
 *   sec-angles, sec-missing-side, sec-inverse, sec-mistakes, sec-verify,
 *   sec-conclusion
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), steps,
 *   closingParagraphs, table, imgAlt, figcaption where used.
 * - faqs (12 question/answer pairs), faqHeading
 * - relatedHeading, relatedItems (9 calculator names in fixed URL order)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and
 * degree values are preserved exactly as in the English source. Backslashes
 * are doubled for .ts string literals. URLs are never translated.
 * No em dashes. No decorative unicode.
 */

export const TRIG_RATIOS_TRANSLATIONS_BATCH2C = {
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Apakah Kalkulator Nisbah Trigonometri Segi Tiga Tepat?",
      "sec-triangle": "Memahami Sisi-Sisi Segi Tiga Tepat",
      "sec-ratios": "Memahami Nisbah Trigonometri",
      "sec-six": "Enam Nisbah Trigonometri Segi Tiga Tepat",
      "sec-choose": "Cara Memilih Nisbah Trigonometri yang Betul",
      "sec-howto": "Cara Menggunakan Kalkulator Nisbah Trigonometri Segi Tiga Tepat",
      "sec-foundations": "Contoh Langkah Demi Langkah Nisbah Trigonometri",
      "sec-applications": "Aplikasi Kehidupan Sebenar Nisbah Trigonometri",
      "sec-relate": "Bagaimana Enam Nisbah Trigonometri Berkaitan Antara Satu Sama Lain",
      "sec-angles": "Memahami Nisbah Trigonometri pada Sudut Berbeza",
      "sec-missing-side": "Cara Mengira Sisi Hilang Segi Tiga Tepat",
      "sec-inverse": "Cara Mencari Sudut Daripada Nisbah Trigonometri",
      "sec-mistakes": "Kesilapan Biasa Semasa Menggunakan Nisbah Trigonometri",
      "sec-verify": "Cara Menyemak Sama Ada Keputusan Trigonometri Anda Sah",
      "sec-related": "Kalkulator Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Apakah Kalkulator Nisbah Trigonometri Segi Tiga Tepat?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nisbah trigonometri segi tiga tepat mengira enam nisbah trigonometri, sinus, kosinus, tangen, kotangen, sekan, dan kosekan, daripada panjang sisi segi tiga tepat. Setiap nisbah membandingkan pasangan sisi tertentu berbanding sudut rujukan tirus yang dipilih. Kalkulator pada halaman ini menawarkan enam mod, satu untuk setiap nisbah, supaya anda memasukkan dua sisi yang diperlukan setiap nisbah dan mendapatkan nilainya serta-merta."
          },
          {
            "kind": "p",
            "text": "Nisbah-nisbah ini bergantung pada sudut rujukan, bukan hanya segi tiga. Untuk segi tiga yang sama, menukar sudut tirus yang diukur akan menukar peranan kedua-dua kaki, jadi nilai nisbah juga berubah. Itulah sebabnya mod kalkulator disusun mengikut pasangan sisi yang diketahui: sisi bertentangan dan hipotenus memberikan sinus, sisi bersebelahan dan hipotenus memberikan kosinus, dan kedua-dua kaki memberikan tangen. Mod salingan memberikan kosekan, sekan, dan kotangen daripada pasangan yang sama."
          },
          {
            "kind": "p",
            "text": "Pertimbangkan segi tiga 3-4-5 dengan sisi bertentangan 3, sisi bersebelahan 4, dan hipotenus 5. Satu segi tiga menghasilkan enam nilai berbeza: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]], dan [[\\tan(A)=3/4=0.75]], dengan nisbah salingan [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]], dan [[\\cot(A)\\approx1.3333]]. Setiap nisbah mengajukan soalan berbeza tentang bentuk yang sama. Memahami formula membolehkan anda menyemak sebarang keputusan secara manual, yang merupakan cara paling pasti untuk mengesan sisi yang tersalah label."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Memahami Sisi-Sisi Segi Tiga Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah trigonometri ialah perbandingan dua sisi, jadi menamakan sisi dengan betul adalah asas kepada semua yang berikutnya. Panduan ini menggunakan satu konvensi yang konsisten: [[A]] ialah sudut rujukan tirus di kiri bawah, [[B]] ialah sudut tepat di kanan bawah, [[C]] ialah sudut tirus yang lain di bahagian atas, sisi [[a]] ialah kaki menegak, sisi [[b]] ialah tapak mendatar, dan sisi [[c]] ialah hipotenus yang condong."
          },
          {
            "kind": "h3",
            "text": "Apakah Segi Tiga Tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga tepat mempunyai satu sudut yang berukuran tepat 90 darjah, dengan dua sudut yang lain tirus. Kedua-dua kaki bertemu pada sudut tepat, dan hipotenus terletak bertentangan dengan sudut tepat. Oleh kerana tiga sudut dalaman berjumlah 180 darjah, kedua-dua sudut tirus adalah pelengkap: [[A+C=90^\\circ]]. Segi tiga tepat sesuai untuk pengiraan trigonometri kerana menetapkan satu sudut tirus menetapkan bentuk segi tiga sepenuhnya: semua segi tiga tepat dengan sudut tirus yang sama adalah serupa, jadi nisbah sisinya sepadan."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bertentangan?"
          },
          {
            "kind": "p",
            "text": "Sisi bertentangan terletak tepat seberang sudut rujukan yang dipilih. Dalam konvensi kami, sisi [[a]] adalah bertentangan dengan sudut [[A]]. Dalam masalah praktikal, sisi bertentangan sering mewakili ketinggian menegak, perbezaan ketinggian, atau komponen menegak sesuatu cerun. Peranannya tidak tetap pada sisi tertentu: jika sudut rujukan berubah, sisi yang berbeza menjadi sisi bertentangan."
          },
          {
            "kind": "h3",
            "text": "Apakah Sisi Bersebelahan?"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan menyentuh sudut rujukan tetapi bukan hipotenus. Dalam konvensi kami, sisi [[b]] adalah bersebelahan dengan sudut [[A]]. Ia sering mewakili larian mendatar, jarak tanah, atau unjuran mendatar. Antara ketiga-tiga sisi, sisi bersebelahan adalah yang paling kerap dikelirukan dengan sisi bertentangan, dan pertukaran tunggal itu adalah punca paling biasa bagi nilai nisbah yang salah."
          },
          {
            "kind": "h3",
            "text": "Apakah Hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus adalah bertentangan dengan sudut tepat dan sentiasa sisi terpanjang segi tiga. Dalam konvensi kami ia adalah sisi condong [[c]]. Dalam situasi sebenar ia boleh mewakili tangga, kabel, penyokong bumbung yang condong, atau jarak penglihatan garis lurus. Ia muncul dalam formula sinus, kosinus, sekan, dan kosekan, tetapi tidak secara langsung dalam formula tangen dan kotangen, yang membandingkan kedua-dua kaki."
          },
          {
            "kind": "h3",
            "text": "Mengapa Sudut Rujukan Penting"
          },
          {
            "kind": "p",
            "text": "Bertentangan dan bersebelahan ialah label relatif, bukan nama kekal. Untuk sudut [[A]], sisi bertentangan ialah [[a]] dan sisi bersebelahan ialah [[b]]. Untuk sudut [[C]], label bertukar: sisi bertentangan ialah [[b]] dan sisi bersebelahan ialah [[a]]. Hipotenus kekal [[c]] tidak kira sudut tirus mana yang menjadi rujukan. Sentiasa tentukan sudut mana yang anda ukur sebelum melabelkan sebarang sisi."
          }
        ],
        "imgAlt": "Segi tiga tepat: sudut A di kiri bawah, a keemasan bertentangan, b biru bersebelahan, c kelabu hipotenus, sudut tepat di B",
        "figcaption": "Anatomi segi tiga tepat: A ialah sudut rujukan, B ialah sudut 90 darjah, dan bertentangan serta bersebelahan ditakrifkan berbanding A."
      },
      "sec-ratios": {
        "h2": "Memahami Nisbah Trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah trigonometri membandingkan dua panjang sisi segi tiga tepat berbanding sudut tirus yang dipilih. Ia memerikan bentuk segi tiga, bukan saiznya: gandakan setiap sisi dan keenam-enam nisbah kekal sama, kerana pengangka dan penyebut diganda dengan faktor yang sama. Segi tiga 3-4-5 dan segi tiga 6-8-10 yang diskala mempunyai nilai sinus, kosinus, tangen, dan salingan yang sama. Kebebasan saiz inilah yang menjadikan nisbah berguna: ia menangkap sudut sebagai nombor tulen."
          },
          {
            "kind": "h3",
            "text": "Memahami SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA ialah alat ingatan piawai untuk tiga nisbah utama. SOH: Sinus = Bertentangan / Hipotenus. CAH: Kosinus = Bersebelahan / Hipotenus. TOA: Tangen = Bertentangan / Bersebelahan. Baca setiap satu sebagai ayat: sinus sesuatu sudut ialah panjang sisi yang bertentangan dengan sudut itu dibahagi hipotenus. Alat ini merangkumi sinus, kosinus, dan tangen; nisbah salingan datang daripada peraturan kedua: terbalikkan pecahan. Kosekan membalikkan sinus, sekan membalikkan kosinus, dan kotangen membalikkan tangen."
          },
          {
            "kind": "h3",
            "text": "Mengapa Nisbah Trigonometri Tanpa Dimensi"
          },
          {
            "kind": "p",
            "text": "Nisbah membahagi satu panjang dengan panjang lain, jadi unit terhapus: [[3\\text{ m}/5\\text{ m}=0.6]]. Dalam sentimeter, segi tiga yang sama memberikan [[300\\text{ cm}/500\\text{ cm}=0.6]], nombor yang sama. Menukar unit ukuran yang serasi tidak pernah mengubah nisbah trigonometri. Akibat praktikalnya ialah input anda mesti berkongsi satu unit sebelum dibahagi, tetapi hasilnya sendiri tidak membawa unit, itulah sebabnya kalkulator menganggap semua input sebagai panjang biasa."
          },
          {
            "kind": "h3",
            "text": "Mengapa Satu Segi Tiga Menghasilkan Enam Nisbah"
          },
          {
            "kind": "p",
            "text": "Setiap nisbah membandingkan pasangan sisi yang berbeza. Sinus membandingkan bertentangan dengan hipotenus, kosinus membandingkan bersebelahan dengan hipotenus, dan tangen membandingkan bertentangan dengan bersebelahan. Kosekan, sekan, dan kotangen membalikkan pengangka dan penyebut yang sepadan. Enam nisbah, tiga pasangan sisi, dua arah bagi setiap pasangan. Ia tidak bercanggah antara satu sama lain; ia menjawab soalan geometri yang berbeza tentang segi tiga yang sama, itulah sebabnya satu kalkulator menawarkan keenam-enam mod."
          }
        ]
      },
      "sec-six": {
        "h2": "Enam Nisbah Trigonometri Segi Tiga Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Bahagian ini menerangkan setiap nisbah dalam format yang sama: apa maksudnya, formulanya, sisi yang digunakan, mengapa pecahan disusun begitu, contoh kerja pada segi tiga 3-4-5, apa maksud nombor itu, bila nisbah itu berguna, bagaimana ia berkaitan dengan nisbah lain, dan satu kesilapan yang perlu dielakkan."
          },
          {
            "kind": "h3",
            "text": "1. Sinus: Sisi Bertentangan Dibahagi Hipotenus"
          },
          {
            "kind": "p",
            "text": "Sinus membandingkan sisi bertentangan dengan hipotenus: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]. Hipotenus ialah penyebut kerana ia adalah sisi terpanjang, itulah yang mengekalkan sinus antara 0 dan 1 bagi sudut tirus. Dengan [[a=3]] dan [[c=5]]: [[\\sin(A)=3/5]], jadi [[[\\boxed{\\sin(A)=0.6}]]]. Keputusan bermakna sisi bertentangan ialah 60 peratus daripada hipotenus. Sinus berguna apabila sisi bertentangan dan hipotenus ialah pasangan yang diketahui, seperti mencari sudut tangga daripada ketinggian dan panjangnya. Ia berkaitan dengan kosinus sebagai pasangan pelengkap: sinus satu sudut tirus sama dengan kosinus sudut yang satu lagi. Kesilapan yang perlu dielakkan: 0.6 ialah nisbah, bukan sudut 0.6 darjah."
          },
          {
            "kind": "h3",
            "text": "2. Kosinus: Sisi Bersebelahan Dibahagi Hipotenus"
          },
          {
            "kind": "p",
            "text": "Kosinus membandingkan sisi bersebelahan dengan hipotenus: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]. Kedua-dua sinus dan kosinus membahagi dengan hipotenus, jadi kedua-duanya kekal antara 0 dan 1; ia hanya berbeza pada pengangka, itulah sebabnya sinus dan kosinus memerikan aspek berbeza sudut yang sama. Dengan [[b=4]] dan [[c=5]]: [[\\cos(A)=4/5]], jadi [[[\\boxed{\\cos(A)=0.8}]]]. Sisi bersebelahan ialah 80 peratus daripada hipotenus. Kosinus berguna apabila sisi bersebelahan dan hipotenus diketahui, seperti larian mendatar bumbung dan panjang gelegar. Ia berkaitan dengan sinus melalui identiti [[\\sin^2(A)+\\cos^2(A)=1]]. Kesilapan yang perlu dielakkan: menukar pengangka, menggunakan 3/5 untuk kosinus dan bukannya 4/5."
          },
          {
            "kind": "h3",
            "text": "3. Tangen: Sisi Bertentangan Dibahagi Sisi Bersebelahan"
          },
          {
            "kind": "p",
            "text": "Tangen membandingkan sisi bertentangan dengan sisi bersebelahan: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]. Ia melangkau hipotenus sepenuhnya, yang menjadikannya nisbah semula jadi untuk masalah cerun di mana kedua-dua kaki ialah kuantiti yang diukur. Dengan [[a=3]] dan [[b=4]]: [[\\tan(A)=3/4]], jadi [[[\\boxed{\\tan(A)=0.75}]]]. Sisi bertentangan ialah 75 peratus sepanjang sisi bersebelahan. Tangen ialah bentuk matematik bagi kenaikan per larian, jadi ia muncul dalam kecerunan bumbung, tanjakan, dan gred. Berbeza dengan sinus dan kosinus, tangen boleh melebihi 1 apabila sisi bertentangan lebih panjang daripada sisi bersebelahan. Kesilapan yang perlu dielakkan: mengelirukan tangen 0.75 dengan 75 peratus daripada sudut tepat."
          },
          {
            "kind": "h3",
            "text": "4. Kotangen: Sisi Bersebelahan Dibahagi Sisi Bertentangan"
          },
          {
            "kind": "p",
            "text": "Kotangen ialah salingan tangen: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]. Ia membalikkan perbandingan sisi yang dibuat tangen, jadi di mana tangen bertanya betapa curam cerun, kotangen bertanya betapa landainya. Dengan [[b=4]] dan [[a=3]]: [[\\cot(A)=4/3]], jadi [[[\\boxed{\\cot(A)\\approx1.3333}]]]. Setara, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. Kotangen berguna apabila masalah secara semula jadi memberikan bersebelahan per bertentangan, atau apabila formula ditulis dalam bentuk salingan. Kesilapan yang perlu dielakkan: menulis kotangen sebagai a/b, yang merupakan tangen."
          },
          {
            "kind": "h3",
            "text": "5. Sekan: Hipotenus Dibahagi Sisi Bersebelahan"
          },
          {
            "kind": "p",
            "text": "Sekan ialah salingan kosinus: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]. Membalikkan pecahan kosinus meletakkan hipotenus, sisi terpanjang, di atas, itulah sebabnya sekan sentiasa lebih besar daripada 1 untuk sudut tirus dalam segi tiga tepat yang sah. Dengan [[c=5]] dan [[b=4]]: [[\\sec(A)=5/4]], jadi [[[\\boxed{\\sec(A)=1.25}]]]. Setara, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. Sekan berguna dalam formula fizik dan kejuruteraan yang dinyatakan dengan hipotenus sebagai pengangka. Kesilapan yang perlu dielakkan: mengelirukan sekan dengan kosinus, atau dengan fungsi kosinus songsang."
          },
          {
            "kind": "h3",
            "text": "6. Kosekan: Hipotenus Dibahagi Sisi Bertentangan"
          },
          {
            "kind": "p",
            "text": "Kosekan ialah salingan sinus: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]. Seperti sekan, ia meletakkan hipotenus di atas, jadi ia sentiasa lebih besar daripada 1 untuk sudut tirus. Dengan [[c=5]] dan [[a=3]]: [[\\csc(A)=5/3]], jadi [[[\\boxed{\\csc(A)\\approx1.6667}]]]. Setara, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. Kosekan muncul dalam matematik gelombang dan ayunan di mana salingan sinus ialah bentuk yang mudah. Kesilapan yang perlu dielakkan: mengelirukan kosekan dengan sinus songsang; [[1/\\sin(A)]] ialah kosekan, manakala [[\\sin^{-1}(r)]] mendapatkan semula sudut."
          },
          {
            "kind": "h3",
            "text": "Semua Enam Nisbah dalam Satu Jadual"
          },
          {
            "kind": "p",
            "text": "Semua enam pengiraan merujuk sudut rujukan yang sama [[A]]."
          }
        ],
        "table": {
          "headers": ["Nisbah", "Formula", "Hubungan sisi", "Contoh 3-4-5"],
          "rows": [
            ["Sinus", "[[a/c]]", "Bertentangan / Hipotenus", "[[3/5=0.6]]"],
            ["Kosinus", "[[b/c]]", "Bersebelahan / Hipotenus", "[[4/5=0.8]]"],
            ["Tangen", "[[a/b]]", "Bertentangan / Bersebelahan", "[[3/4=0.75]]"],
            ["Kotangen", "[[b/a]]", "Bersebelahan / Bertentangan", "[[4/3\\approx1.3333]]"],
            ["Sekan", "[[c/b]]", "Hipotenus / Bersebelahan", "[[5/4=1.25]]"],
            ["Kosekan", "[[c/a]]", "Hipotenus / Bertentangan", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "Segi tiga 3-4-5 dengan enam panel menunjukkan sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        "figcaption": "Satu segi tiga 3-4-5 menghasilkan keenam-enam nisbah: tiga nisbah utama dan tiga salingan."
      },
      "sec-choose": {
        "h2": "Cara Memilih Nisbah Trigonometri yang Betul",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah terbaik bergantung pada dua panjang sisi yang tersedia dalam masalah. Setiap pasangan sisi membolehkan dua pengiraan salingan, dan enam mod kalkulator sepadan tepat dengan pasangan ini:"
          },
          {
            "kind": "p",
            "text": "Jika sisi bertentangan dan hipotenus diketahui, anda boleh mengira [[\\sin(A)=a/c]] dan juga [[\\csc(A)=c/a]]. Jika sisi bersebelahan dan hipotenus diketahui, anda boleh mengira [[\\cos(A)=b/c]] dan [[\\sec(A)=c/b]]. Jika kedua-dua kaki diketahui, anda boleh mengira [[\\tan(A)=a/b]] dan [[\\cot(A)=b/a]]."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Sinus"
          },
          {
            "kind": "p",
            "text": "Pilih mod sinus apabila sisi bertentangan dan hipotenus diketahui. Masukkan sisi bertentangan dalam medan \"Opposite a\" dan hipotenus dalam medan \"Hypotenuse c\", kemudian klik \"Kira sin(A)\". Tiada mod yang memerlukan ketiga-tiga panjang sisi; setiap mod meminta tepat pasangan yang digunakan nisbahnya."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Kosinus"
          },
          {
            "kind": "p",
            "text": "Pilih mod kosinus apabila sisi bersebelahan dan hipotenus diketahui. Masukkan sisi bersebelahan dalam medan \"Adjacent b\" dan hipotenus dalam medan \"Hypotenuse c\", kemudian klik \"Kira cos(A)\"."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Tangen"
          },
          {
            "kind": "p",
            "text": "Pilih mod tangen apabila kedua-dua kaki diketahui. Masukkan sisi bertentangan dalam medan \"Opposite a\" dan sisi bersebelahan dalam medan \"Adjacent b\", kemudian klik \"Kira tan(A)\"."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Kotangen"
          },
          {
            "kind": "p",
            "text": "Pilih mod kotangen apabila kaki-kaki diketahui dan masalah dinyatakan sebagai bersebelahan per bertentangan. Masukkan sisi bersebelahan dahulu dalam medan \"Adjacent b\" dan sisi bertentangan dalam medan \"Opposite a\", kemudian klik \"Kira cot(A)\"."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Sekan"
          },
          {
            "kind": "p",
            "text": "Pilih mod sekan apabila hipotenus dan sisi bersebelahan diketahui. Masukkan hipotenus dalam medan \"Hypotenuse c\" dan sisi bersebelahan dalam medan \"Adjacent b\", kemudian klik \"Kira sec(A)\"."
          },
          {
            "kind": "h3",
            "text": "Cara Menggunakan Mod Nisbah Kosekan"
          },
          {
            "kind": "p",
            "text": "Pilih mod kosekan apabila hipotenus dan sisi bertentangan diketahui. Masukkan hipotenus dalam medan \"Hypotenuse c\" dan sisi bertentangan dalam medan \"Opposite a\", kemudian klik \"Kira csc(A)\"."
          }
        ],
        "table": {
          "headers": ["Sisi yang diketahui", "Nisbah langsung", "Nisbah salingan"],
          "rows": [
            ["Bertentangan dan hipotenus", "Sinus", "Kosekan"],
            ["Bersebelahan dan hipotenus", "Kosinus", "Sekan"],
            ["Bertentangan dan bersebelahan", "Tangen", "Kotangen"]
          ]
        }
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Nisbah Trigonometri Segi Tiga Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Ikuti langkah-langkah ini untuk mana-mana daripada enam mod:"
          },
          {
            "kind": "p",
            "text": "Pengenalan sisi yang betul lebih penting daripada menghafal formula. Kebanyakan jawapan salah pada halaman ini datang daripada sisi bertentangan dan bersebelahan yang tertukar, bukan daripada aritmetik."
          }
        ],
        "steps": [
          "<strong>Kenal pasti sudut rujukan.</strong> Tentukan sudut tirus mana yang dibincangkan masalah. Semua label sisi mengikuti pilihan ini.",
          "<strong>Labelkan bertentangan, bersebelahan, dan hipotenus.</strong> Sisi seberang sudut rujukan ialah bertentangan, kaki yang menyentuhnya ialah bersebelahan, dan sisi seberang sudut tepat ialah hipotenus.",
          "<strong>Tentukan dua panjang sisi mana yang diketahui.</strong> Setiap mod memerlukan tepat satu pasangan.",
          "<strong>Pilih mod yang sepadan dengan kedua-dua sisi itu.</strong> Gunakan jadual di bahagian sebelumnya untuk memilih sinus, kosinus, tangen, kotangen, sekan, atau kosekan.",
          "<strong>Masukkan panjang sisi pertama yang diperlukan.</strong> Medan dilabelkan, contohnya \"Opposite a\" dan \"Hypotenuse c\".",
          "<strong>Masukkan panjang sisi kedua yang diperlukan.</strong> Kekalkan susunan yang ditunjukkan label: sesetengah mod menyenaraikan hipotenus dahulu.",
          "<strong>Pilih unit yang serasi.</strong> Gunakan pemilih unit di sebelah setiap input supaya kedua-dua ukuran berkongsi satu sistem unit.",
          "<strong>Semak bahawa input positif dan sah.</strong> Kedua-dua kaki mestilah positif dan hipotenus mestilah lebih panjang daripada mana-mana kaki.",
          "<strong>Klik butang Kira.</strong> Contohnya, \"Kira sin(A)\" dalam mod sinus.",
          "<strong>Semak keputusan dan langkah penyelesaian.</strong> Kalkulator menunjukkan formula, penggantian, dan nilai akhir.",
          "<strong>Semak visualisasi langsung.</strong> Sahkan label rajah segi tiga sepadan dengan sudut rujukan yang anda maksudkan.",
          "<strong>Gunakan Tetapkan semula untuk pengiraan baharu.</strong> Butang Tetapkan semula mengosongkan semua medan supaya pengiraan seterusnya bermula dengan bersih."
        ],
        "closingParagraphs": [
          "Dengan sisi bertentangan 3, sisi bersebelahan 4, dan hipotenus 5, semuanya dalam unit yang sama, berikut ialah apa yang diperlukan dan dikembalikan setiap mod:",
          "1. Mod sinus: masukkan \"Opposite a\" = 3 dan \"Hypotenuse c\" = 5, klik \"Kira sin(A)\". Keputusan: 0.6.",
          "2. Mod kosinus: masukkan \"Adjacent b\" = 4 dan \"Hypotenuse c\" = 5, klik \"Kira cos(A)\". Keputusan: 0.8.",
          "3. Mod tangen: masukkan \"Opposite a\" = 3 dan \"Adjacent b\" = 4, klik \"Kira tan(A)\". Keputusan: 0.75.",
          "4. Mod kotangen: masukkan \"Adjacent b\" = 4 dan \"Opposite a\" = 3, klik \"Kira cot(A)\". Keputusan: lebih kurang 1.3333.",
          "5. Mod sekan: masukkan \"Hypotenuse c\" = 5 dan \"Adjacent b\" = 4, klik \"Kira sec(A)\". Keputusan: 1.25.",
          "6. Mod kosekan: masukkan \"Hypotenuse c\" = 5 dan \"Opposite a\" = 3, klik \"Kira csc(A)\". Keputusan: lebih kurang 1.6667.",
          "Nisbah-nisbah tidak berunit, jadi ukuran input hanya perlu unit yang serasi, bukan sebarang unit tertentu. Kalkulator tidak mendapatkan semula sisi atau sudut yang hilang daripada mod-mod ini; ia mengira nisbah yang diminta daripada dua sisi yang anda berikan."
        ]
      },
      "sec-foundations": {
        "h2": "Contoh Langkah Demi Langkah Nisbah Trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Empat contoh ini membina pemahaman secara beransur, daripada segi tiga integer asas kepada nisbah tepat segi tiga khas."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segi Tiga Tepat 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dengan [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], kira keenam-enam nisbah. Sinus: [[3/5=0.6]]. Kosinus: [[4/5=0.8]]. Tangen: [[3/4=0.75]]. Kotangen: [[4/3\\approx1.3333]]. Sekan: [[5/4=1.25]]. Kosekan: [[5/3\\approx1.6667]]. Nisbah-nisbah berbeza kerana setiap satu membandingkan pasangan sisi yang berbeza; semuanya memerikan sudut yang sama [[A]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segi Tiga Tepat 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dengan [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Sinus: [[5/13\\approx0.3846]]. Kosinus: [[12/13\\approx0.9231]]. Tangen: [[5/12\\approx0.4167]]. Salingan: kosekan [[13/5=2.6]], sekan [[13/12\\approx1.0833]], kotangen [[12/5=2.4]]. Berbanding segi tiga 3-4-5, sisi bersebelahan yang lebih panjang menjadikan kosinus lebih besar dan tangen lebih kecil, iaitu rupa sudut yang lebih landai dalam bentuk nisbah."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segi Tiga 45-45-90"
          },
          {
            "kind": "p",
            "text": "Dengan [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Sinus dan kosinus sama: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangen dan kotangen kedua-duanya sama dengan 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Sekan dan kosekan sama: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Kaki yang sama menjadikan sinus sama dengan kosinus dan tangen sama dengan 1; simetri antara kedua-dua sudut tirus menerangkan ketiga-tiga kesamaan."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Segi Tiga 30-60-90"
          },
          {
            "kind": "p",
            "text": "Untuk sudut [[A=30^\\circ]], gunakan [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Sinus: [[1/2=0.5]]. Kosinus: [[\\sqrt{3}/2\\approx0.8660]]. Tangen: [[1/\\sqrt{3}\\approx0.5774]]. Kotangen: [[\\sqrt{3}\\approx1.7321]]. Sekan: [[2/\\sqrt{3}\\approx1.1547]]. Kosekan: [[2]]. Nisbah untuk 30 dan 60 darjah berkaitan: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]], dan [[\\tan(30^\\circ)=\\cot(60^\\circ)]], kerana sudut pelengkap menukar bertentangan dan bersebelahan."
          }
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Nisbah Trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh menggunakan nisbah yang sesuai dengan situasi, bukan keenam-enam. Setiap contoh mengenal pasti model segi tiga, sisi yang diketahui, sudut rujukan, dan maksud keputusan, dengan andaian dinyatakan di mana ia penting."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Mengira Kecerunan Bumbung"
          },
          {
            "kind": "p",
            "text": "Sebuah bumbung naik 3 m pada larian mendatar 4 m. Segi tiga yang diringkaskan menggunakan kenaikan sebagai sisi bertentangan (a = 3 m) dan larian sebagai sisi bersebelahan (b = 4 m), dengan permukaan bumbung sebagai hipotenus. Tangen sesuai kerana kedua-dua kaki diketahui: [[\\tan(A)=3/4=0.75]]. Gred peratusan ialah [[0.75\\times100\\%=75\\%]], dan sudutnya ialah [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Nisbah cerun, gred peratusan, dan sudut ialah tiga cara untuk mengatakan perkara yang sama: bumbung naik 0.75 m untuk setiap 1 m larian. Ini ialah contoh geometri, bukan penilaian reka bentuk bumbung yang lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Memahami Tangga yang Bersandar pada Dinding"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga mencapai 4 m ke atas dinding dengan tapaknya 3 m dari dinding. Ketinggian dinding ialah sisi bertentangan (a = 4 m), jarak tanah ialah sisi bersebelahan (b = 3 m), dan tangga ialah hipotenus: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Untuk sudut antara tangga dan tanah: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. Sudutnya ialah [[A\\approx53.13^\\circ]]. Satu segi tiga, satu sudut, tiga nisbah berbeza, setiap satu menekankan pasangan sisi yang berbeza. Pengiraan ini tidak menentukan keselamatan tangga."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Menilai Kecerunan Tanjakan"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan naik 0.6 m pada larian mendatar 8 m. Tangen sesuai untuk kedua-dua kaki: [[\\tan(A)=0.6/8=0.075]]. Gred peratusan ialah [[0.075\\times100\\%=7.5\\%]], dan sudutnya ialah [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Gred 7.5% bukan sudut 7.5 darjah: peratus ialah nisbah didarab 100, manakala darjah mengukur sudut itu sendiri, dan ia menyimpang dengan cepat selepas nilai kecil. Pematuhan kebolehcapaian dan kod bangunan memerlukan semakan tambahan di luar geometri ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Mengukur Ketinggian Bangunan"
          },
          {
            "kind": "p",
            "text": "Seorang pemerhati berdiri 24 m secara mendatar dari sebuah bangunan, dan bahagian atasnya 18 m di atas aras mata. Sisi bersebelahan ialah 24 m dan sisi bertentangan ialah 18 m, jadi [[\\tan(A)=18/24=0.75]] dan [[A\\approx36.87^\\circ]], sudut dongakan. Jarak penglihatan garis lurus ialah [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], memberikan [[\\sin(A)=18/30=0.6]] dan [[\\cos(A)=24/30=0.8]] untuk geometri yang sama. Keputusan adalah relatif kepada aras mata, bukan semestinya jumlah ketinggian bangunan."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Mengukur Perbezaan Ketinggian"
          },
          {
            "kind": "p",
            "text": "Seorang juruukur memodelkan perbezaan ketinggian menegak 15 m pada jarak mendatar 20 m. Tangen: [[\\tan(A)=15/20=0.75]]. Jarak garis lurus ialah [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], jadi [[\\sin(A)=15/25=0.6]] dan [[\\cos(A)=20/25=0.8]] memerikan segi tiga yang diukur sama melalui pasangan sisi yang berbeza. Ukur tanah sebenar mungkin memerlukan pelarasan ketinggian alat dan pembetulan di luar model rata ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Menganggar Ketinggian Pokok Daripada Bayangnya"
          },
          {
            "kind": "p",
            "text": "Pokok menegak membuang bayang 9 m, dan ketinggian di atas tanah ialah 12 m. Dengan sisi bertentangan 12 m dan bersebelahan 9 m: [[\\tan(A)=12/9\\approx1.3333]]. Hipotenus garis penglihatan bagi segi tiga yang diringkaskan ialah [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], memberikan [[\\sin(A)=12/15=0.8]] dan [[\\cos(A)=9/15=0.6]]. Ini mengandaikan tanah rata, pokok menegak, dan bayang diukur ke titik tepat di bawah puncak."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Memahami Kabel Penambat"
          },
          {
            "kind": "p",
            "text": "Kabel penambat disambungkan ke tiang 12 m di atas tanah, dengan sauh 5 m secara mendatar dari tiang. Panjang wayar ialah [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Sinus: [[12/13\\approx0.9231]]. Kosinus: [[5/13\\approx0.3846]]. Tangen: [[12/5=2.4]]. Tangen melebihi 1 di sini kerana komponen menegak lebih panjang daripada larian mendatar; itu normal, bukan ralat. Nisbah-nisbah ini tidak mengatakan apa-apa tentang kekuatan sauh atau ketegangan wayar."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Memahami Geometri Tangga Bangunan"
          },
          {
            "kind": "p",
            "text": "Tangga bangunan yang diringkaskan mempunyai jumlah kenaikan 2.4 m dan larian mendatar 3.2 m, dengan panjang pepenjuru [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Sinus: [[2.4/4=0.6]]. Kosinus: [[3.2/4=0.8]]. Tangen: [[2.4/3.2=0.75]]. Nisbah-nisbah memerikan geometri keseluruhan tangga, tetapi ia tidak menentukan pematuhan terhadap peraturan tangga, yang juga mengehadkan dimensi anak tangga individu."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Memahami Arah Boom Kren"
          },
          {
            "kind": "p",
            "text": "Boom kren yang diringkaskan mempunyai komponen menegak 8 m dan unjuran mendatar 6 m, dengan [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Sinus [[8/10=0.8]] memerikan bahagian menegak boom, kosinus [[6/10=0.6]] bahagian mendatarnya, dan tangen [[8/6\\approx1.3333]] kecuramannya. Nisbah trigonometri sahaja tidak menentukan kapasiti kren atau operasi selamat."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Menganggar Kecerunan Denai Mendaki"
          },
          {
            "kind": "p",
            "text": "Bahagian lurus denai mendaki naik 120 m pada 800 m secara mendatar. Tangen: [[\\tan(A)=120/800=0.15]]. Grednya ialah [[15\\%]] dan sudutnya ialah [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Model kecerunan malar ini tidak memerikan denai yang berliku, tetapi ia memberikan kecuraman purata yang berguna untuk merancang tenaga."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Menyemak Pendakap Mekanikal"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru mempunyai komponen menegak 1.5 m dan komponen mendatar 2 m, dengan [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Sinus: [[1.5/2.5=0.6]]. Kosinus: [[2/2.5=0.8]]. Tangen: [[1.5/2=0.75]]. Ini ialah nisbah 3-4-5 pada skala separuh, menunjukkan penskalaan berkadar meninggalkan setiap nisbah tidak berubah. Ini tidak mengatakan apa-apa tentang kekuatan atau kapasiti beban pendakap."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Memahami Pendakian Lurus Pesawat"
          },
          {
            "kind": "p",
            "text": "Segmen penerbangan lurus yang diringkaskan naik 1.5 km secara menegak pada 5 km secara mendatar. Tangen: [[\\tan(A)=1.5/5=0.3]], jadi [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. Jarak garis lurus ialah [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], memberikan [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. Tangen menggunakan jarak tanah, sinus menggunakan jarak laluan penerbangan; pendakian yang sama, panjang rujukan berbeza. Ini ialah contoh geometri, bukan pengiraan navigasi penerbangan."
          },
          {
            "kind": "h3",
            "text": "Perbandingan Contoh Praktikal"
          }
        ],
        "table": {
          "headers": ["Situasi", "Ukuran yang diketahui", "Nisbah utama", "Nilai", "Tafsiran"],
          "rows": [
            ["Kecerunan bumbung", "Kenaikan 3 m, larian 4 m", "Tangen", "0.75", "Gred 75%, 36.87°"],
            ["Tangga", "Ketinggian 4 m, tapak 3 m", "Sinus", "0.8", "Sudut ke tanah 53.13°"],
            ["Tanjakan", "Kenaikan 0.6 m, larian 8 m", "Tangen", "0.075", "Gred 7.5%, 4.29°"],
            ["Ketinggian bangunan", "Ketinggian 18 m, jarak 24 m", "Tangen", "0.75", "Sudut dongakan 36.87°"],
            ["Ukur tanah", "Kenaikan 15 m, larian 20 m", "Tangen", "0.75", "Bentuk sama seperti kecerunan bumbung"],
            ["Bayang pokok", "Ketinggian 12 m, bayang 9 m", "Tangen", "1.3333", "Lebih curam daripada 45°"],
            ["Kabel penambat", "Ketinggian 12 m, sauh 5 m", "Tangen", "2.4", "Wayar jauh lebih curam daripada larian"],
            ["Tangga bangunan", "Kenaikan 2.4 m, larian 3.2 m", "Tangen", "0.75", "Nisbah sama seperti 3-4-5"],
            ["Boom kren", "Menegak 8 m, mendatar 6 m", "Sinus", "0.8", "Capaian kebanyakannya menegak"],
            ["Denai mendaki", "Kenaikan 120 m, larian 800 m", "Tangen", "0.15", "Gred purata 15%"],
            ["Pendakap mekanikal", "Menegak 1.5 m, mendatar 2 m", "Sinus", "0.6", "Geometri 3-4-5 diskala"],
            ["Pendakian pesawat", "Kenaikan 1.5 km, jarak 5 km", "Tangen", "0.3", "Sudut pendakian 16.70°"]
          ]
        },
        "imgAlt": "Empat panel: kecerunan bumbung 0.75, tangga sin 0.8, ukur tanah sin 0.6, tanjakan tan 0.075 dengan segi tiga berlabel",
        "figcaption": "Empat masalah dunia sebenar: kecerunan bumbung, tangga, ukur tanah, dan tanjakan, setiap satu dengan segi tiga dan nisbah utamanya."
      },
      "sec-relate": {
        "h2": "Bagaimana Enam Nisbah Trigonometri Berkaitan Antara Satu Sama Lain",
        "blocks": [
          {
            "kind": "p",
            "text": "Keenam-enam nisbah bukan enam fakta bebas. Ia membentuk tiga pasangan salingan, dua hubungan hasil bahagi, dan tiga identiti Pythagoras. Mengetahui hubungan ini menjadikan enam formula sebagai satu sistem, dan ia memberikan anda kaedah pengesahan untuk setiap pengiraan."
          },
          {
            "kind": "h3",
            "text": "Pasangan Salingan"
          },
          {
            "kind": "p",
            "text": "Setiap pasangan salingan berganda menjadi 1 kerana pecahan terhapus: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. Pada segi tiga 3-4-5: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Percanggahan kecil datang daripada perpuluhan yang dibundarkan, bukan daripada matematik."
          },
          {
            "kind": "h3",
            "text": "Tangen sebagai Sinus Dibahagi Kosinus"
          },
          {
            "kind": "p",
            "text": "Hubungan hasil bahagi [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] diperoleh daripada menghapuskan hipotenus yang dikongsi: [[(a/c)/(b/c)=a/b]]. Semak dengan nilai 3-4-5: [[0.6/0.8=0.75]], yang sepadan dengan [[\\tan(A)]]. Ini ialah pengesahan yang berguna: jika tangen anda tidak sama dengan sinus dibahagi kosinus, sesuatu sisi tersalah label."
          },
          {
            "kind": "h3",
            "text": "Kotangen sebagai Kosinus Dibahagi Sinus"
          },
          {
            "kind": "p",
            "text": "Begitu juga, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]]. Dengan nilai 3-4-5: [[0.8/0.6\\approx1.3333]], sepadan dengan [[\\cot(A)]]. Kotangen mewarisi semua yang diketahui tangen, dalam keadaan terbalik."
          },
          {
            "kind": "h3",
            "text": "Identiti Trigonometri Pythagoras"
          },
          {
            "kind": "p",
            "text": "Identiti [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] diperoleh terus daripada teorem Pythagoras: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Untuk segi tiga 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. Dua lagi identiti melanjutkan pola: [[1+\\tan^2(A)=\\sec^2(A)]] dan [[1+\\cot^2(A)=\\csc^2(A)]], diperoleh dengan membahagikan identiti pertama dengan kuasa dua kosinus dan kuasa dua sinus. Ia berguna apabila masalah memberikan satu nisbah dan memerlukan yang lain tanpa panjang sisi."
          },
          {
            "kind": "h3",
            "text": "Bagaimana Sudut Pelengkap Mempengaruhi Nisbah"
          },
          {
            "kind": "p",
            "text": "Oleh kerana [[A+C=90^\\circ]], menukar sudut rujukan daripada [[A]] kepada [[C]] menukar bertentangan dan bersebelahan: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]], dan [[\\csc(A)=\\sec(C)]]. Dalam segi tiga 3-4-5, [[\\sin(A)=3/5=0.6]] manakala [[\\cos(C)=3/5=0.6]], kerana sisi yang bertentangan dengan [[A]] adalah bersebelahan dengan [[C]]. Setiap nisbah pada satu sudut tirus muncul semula sebagai kofungsinya pada sudut yang satu lagi."
          }
        ]
      },
      "sec-angles": {
        "h2": "Memahami Nisbah Trigonometri pada Sudut Berbeza",
        "blocks": [
          {
            "kind": "p",
            "text": "Apabila sudut rujukan tirus membesar, nisbah berubah dengan cara yang boleh diramal. Sinus meningkat daripada hampir 0 ke arah 1, manakala kosinus menurun daripada hampir 1 ke arah 0. Tangen meningkat daripada hampir 0 tanpa had atas, manakala kotangen menurun daripada nilai besar ke arah 0. Sekan meningkat daripada hampir 1 tanpa had, manakala kosekan menurun daripada nilai besar ke arah 1. Ini ialah tingkah laku pengehadan berhampiran 0 dan 90 darjah, bukan nilai yang sebenarnya dicapai sudut tirus dalam segi tiga tepat yang sah dan tidak merosot pada titik hujung."
          },
          {
            "kind": "p",
            "text": "Polanya simetri: sinus pada 30 darjah sama dengan kosinus pada 60 darjah, mencerminkan hubungan pelengkap. Kotangen, sekan, dan kosekan datang daripada hubungan salingan: contohnya, pada 30 darjah, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] dan [[\\csc(30^\\circ)=1/0.5=2]]."
          }
        ],
        "table": {
          "headers": ["Sudut", "Sinus", "Kosinus", "Tangen"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "Lebih kurang 0.8660", "Lebih kurang 0.5774"],
            ["[[45^\\circ]]", "Lebih kurang 0.7071", "Lebih kurang 0.7071", "1"],
            ["[[60^\\circ]]", "Lebih kurang 0.8660", "0.5", "Lebih kurang 1.7321"]
          ]
        },
        "imgAlt": "Carta alir: sinus/kosekan untuk sisi a dan c, kosinus/sekan untuk sisi b dan c, tangen/kotangen untuk sisi a dan b",
        "figcaption": "Pilih mod kalkulator daripada pasangan sisi yang anda ketahui: setiap pasangan memberikan nisbah langsung dan salingannya."
      },
      "sec-missing-side": {
        "h2": "Cara Mengira Sisi Hilang Segi Tiga Tepat",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator enam nisbah mencari nisbah daripada sisi yang diketahui. Mencari sisi yang tidak diketahui daripada sudut dan sisi yang diketahui ialah tugas berkaitan tetapi berbeza, diselesaikan dengan menyusun semula formula nisbah. Ini ialah pengiraan pendamping, bukan ciri kalkulator nisbah itu sendiri."
          },
          {
            "kind": "h3",
            "text": "Mencari Sisi Bertentangan dengan Sinus"
          },
          {
            "kind": "p",
            "text": "Mulakan daripada [[\\sin(A)=a/c]] dan susun semula: [[[\\boxed{a=c\\sin(A)}]]]. Dengan hipotenus 10 m dan sudut [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]."
          },
          {
            "kind": "h3",
            "text": "Mencari Sisi Bersebelahan dengan Kosinus"
          },
          {
            "kind": "p",
            "text": "Mulakan daripada [[\\cos(A)=b/c]] dan susun semula: [[[\\boxed{b=c\\cos(A)}]]]. Dengan hipotenus 10 m dan sudut [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]."
          },
          {
            "kind": "h3",
            "text": "Mencari Sisi Bertentangan dengan Tangen"
          },
          {
            "kind": "p",
            "text": "Mulakan daripada [[\\tan(A)=a/b]] dan susun semula: [[[\\boxed{a=b\\tan(A)}]]]. Dengan sisi bersebelahan 8 m dan sudut [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. Tangen amat berguna di sini kerana ia menghubungkan kedua-dua kaki secara langsung, tanpa hipotenus."
          }
        ]
      },
      "sec-inverse": {
        "h2": "Cara Mencari Sudut Daripada Nisbah Trigonometri",
        "blocks": [
          {
            "kind": "p",
            "text": "Nisbah trigonometri bukan sudut. Apabila nisbah diketahui dan sudut tidak diketahui, fungsi trigonometri songsang mendapatkan semula sudut rujukan tirus: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]], dan [[A=\\tan^{-1}(r)]]. Ini dipanggil sinus songsang, kosinus songsang, dan tangen songsang, juga dikenali sebagai arcsine, arccosine, dan arctangent."
          },
          {
            "kind": "h3",
            "text": "Contoh Kerja Menggunakan Sinus"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\sin(A)=0.6]], sudutnya ialah [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh Kerja Menggunakan Kosinus"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\cos(A)=0.8]], sudutnya ialah [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh Kerja Menggunakan Tangen"
          },
          {
            "kind": "p",
            "text": "Dengan [[\\tan(A)=0.75]], sudutnya ialah [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]."
          },
          {
            "kind": "p",
            "text": "Ketiga-tiganya mendapatkan semula sudut yang sama kerana ketiga-tiga nisbah memerikan segi tiga 3-4-5 yang sama. Perbezaan antara fungsi songsang dan salingan penting di sini: [[1/\\sin(A)=\\csc(A)]] ialah salingan, nisbah yang berbeza, manakala [[\\sin^{-1}(r)]] ialah fungsi songsang, yang mengembalikan sudut. Apabila mengira sudut secara manual, semak sama ada alat anda dalam mod darjah atau radian; kalkulator halaman ini hanya berfungsi dalam nisbah, jadi mendapatkan semula sudut ialah langkah berasingan."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Semasa Menggunakan Nisbah Trigonometri",
        "blocks": [
          {
            "kind": "h3",
            "text": "Mengelirukan Sisi Bertentangan dengan Sisi Bersebelahan"
          },
          {
            "kind": "p",
            "text": "Label bergantung pada sudut rujukan. Dalam segi tiga 3-4-5, mengira [[4/5=0.8]] untuk sinus sebenarnya memberikan kosinus. Pembetulan: tandakan sudut rujukan dahulu, kemudian labelkan sisi seberangnya sebagai bertentangan."
          },
          {
            "kind": "h3",
            "text": "Mengenal Pasti Sisi Berbanding Sudut Rujukan yang Salah"
          },
          {
            "kind": "p",
            "text": "Melabel untuk sudut C sedangkan masalah bertanya tentang sudut A menukar setiap nisbah. Pembetulan: tulis sudut mana yang menjadi rujukan sebelum menyentuh kalkulator."
          },
          {
            "kind": "h3",
            "text": "Menggunakan Sinus dan Bukannya Kosinus"
          },
          {
            "kind": "p",
            "text": "Sinus memerlukan sisi bertentangan; kosinus memerlukan sisi bersebelahan. Jika anda mengetahui sisi bersebelahan dan hipotenus tetapi mengira [[a/c]] juga, anda telah menukar kaki-kaki. Pembetulan: padankan nisbah dengan pasangan yang diketahui menggunakan jadual di bahagian pemilihan."
          },
          {
            "kind": "h3",
            "text": "Menggunakan Tangen Apabila Sisi yang Diketahui Ialah Bertentangan dan Hipotenus"
          },
          {
            "kind": "p",
            "text": "Tangen memerlukan kedua-dua kaki. Dengan sisi bertentangan dan hipotenus diketahui, nisbah langsung yang betul ialah sinus. Pembetulan: semak pasangan mana yang sebenarnya anda ada sebelum memilih mod."
          },
          {
            "kind": "h3",
            "text": "Membalikkan Pengangka dan Penyebut"
          },
          {
            "kind": "p",
            "text": "Mengira [[c/a]] sedangkan anda maksudkan sinus memberikan kosekan, nilai di atas 1 dan bukannya di bawah 1. Pembetulan: penyebut ialah hipotenus untuk sinus dan kosinus, kaki bersebelahan untuk tangen."
          },
          {
            "kind": "h3",
            "text": "Mengelirukan Tangen dengan Kotangen"
          },
          {
            "kind": "p",
            "text": "Tangen ialah [[a/b]]; kotangen ialah [[b/a]]. Ia salingan, jadi satu ralat membalikkan jawapan. Pembetulan: baca label mod sebelum memasukkan nilai."
          },
          {
            "kind": "h3",
            "text": "Mengelirukan Kosinus dengan Sekan"
          },
          {
            "kind": "p",
            "text": "Kosinus ialah [[b/c]], sentiasa di bawah 1; sekan ialah [[c/b]], sentiasa di atas 1. Jika sekan anda keluar di bawah 1, anda mengira kosinus. Pembetulan: nisbah salingan meletakkan hipotenus di atas."
          },
          {
            "kind": "h3",
            "text": "Mengelirukan Sinus dengan Kosekan"
          },
          {
            "kind": "p",
            "text": "Pembalikan yang sama: sinus ialah [[a/c]], kosekan ialah [[c/a]]. Pembetulan: semak sama ada keputusan anda berada dalam julat yang dijangka untuk mod yang anda pilih."
          },
          {
            "kind": "h3",
            "text": "Menganggap Setiap Nisbah Mesti Kurang Daripada 1"
          },
          {
            "kind": "p",
            "text": "Sinus dan kosinus berada di bawah 1, tetapi tangen, kotangen, sekan, dan kosekan semuanya boleh melebihi 1. Tangen 2.4 adalah sah sepenuhnya untuk cerun yang curam. Pembetulan: pelajari julat sah setiap nisbah."
          },
          {
            "kind": "h3",
            "text": "Menganggap Nisbah Seperti 0.6 Mewakili Sudut 0.6 Darjah"
          },
          {
            "kind": "p",
            "text": "Nisbah ialah nombor tulen, bukan ukuran darjah. Sudut di sebalik [[\\sin(A)=0.6]] ialah kira-kira 36.87 darjah, ditemui dengan sinus songsang. Pembetulan: nisbah menjawab \"bagaimana sisi-sisi dibandingkan\"; fungsi songsang menjawab \"apakah sudutnya\"."
          },
          {
            "kind": "h3",
            "text": "Lupa Bahawa Nisbah Tidak Berdimensi"
          },
          {
            "kind": "p",
            "text": "Memasukkan sisi bertentangan dalam inci dan hipotenus dalam kaki merosakkan nisbah, kerana unit tidak lagi terhapus. Pembetulan: tukarkan kedua-dua input kepada satu unit dahulu."
          },
          {
            "kind": "h3",
            "text": "Mencampurkan Unit Ukuran yang Tidak Serasi"
          },
          {
            "kind": "p",
            "text": "Punca yang sama, wajar diulang: nisbah 3 inci kepada 5 sentimeter bukan 0.6. Pembetulan: gunakan pemilih unit pada kedua-dua input sebelum mengira."
          },
          {
            "kind": "h3",
            "text": "Memasukkan Panjang Sisi Sifar atau Negatif"
          },
          {
            "kind": "p",
            "text": "Sisi segi tiga mestilah positif. Input sifar atau negatif memerikan tiada segi tiga, dan kalkulator tidak dapat menghasilkan nisbah yang bermakna. Pembetulan: ukur semula atau baca semula masalah."
          },
          {
            "kind": "h3",
            "text": "Menggunakan Panjang Sisi yang Tidak Membentuk Segi Tiga Tepat yang Sah"
          },
          {
            "kind": "p",
            "text": "Jika sisi-sisi gagal semakan Pythagoras, contohnya 2, 3, dan 10, tiada segi tiga tepat wujud dengan panjang-panjang itu. Pembetulan: sahkan [[a^2+b^2=c^2]] sebelum mengira nisbah."
          },
          {
            "kind": "h3",
            "text": "Membundarkan Terlalu Awal"
          },
          {
            "kind": "p",
            "text": "Membundarkan nisbah perantaraan kepada satu tempat perpuluhan kemudian mendarab membesarkan ralat. Pembetulan: kekalkan ketepatan penuh melalui setiap langkah dan bundarkan hanya jawapan akhir."
          },
          {
            "kind": "h3",
            "text": "Mengelirukan Nisbah Salingan dengan Fungsi Trigonometri Songsang"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1/\\sin(A)]] ialah nisbah; [[\\sin^{-1}(0.6)]] ialah sudut. Notasi yang serupa menyebabkan kekeliruan sebenar. Pembetulan: salingan membalikkan pecahan, fungsi songsang mendapatkan semula sudut."
          },
          {
            "kind": "h3",
            "text": "Menganggap Hipotenus sebagai Salah Satu Kaki"
          },
          {
            "kind": "p",
            "text": "Hipotenus sentiasa sisi terpanjang dan sentiasa bertentangan dengan sudut tepat. Menugaskannya sebagai kaki memecahkan setiap nisbah. Pembetulan: cari sisi terpanjang dahulu dan labelkan sebagai c."
          },
          {
            "kind": "h3",
            "text": "Menganggap Keenam-enam Nisbah Mempunyai Nilai yang Sama"
          },
          {
            "kind": "p",
            "text": "Dalam segi tiga 3-4-5 keenam-enam nilai berjulat dari 0.6 hingga 1.6667. Hanya segi tiga khas seperti 45-45-90 menjadikan sesetengah nisbah sama. Pembetulan: jangkakan enam nombor berbeza daripada satu segi tiga."
          },
          {
            "kind": "h3",
            "text": "Menganggap Sisi yang Sama Sentiasa Bertentangan"
          },
          {
            "kind": "p",
            "text": "Sisi yang bertentangan dengan sudut A adalah bersebelahan dengan sudut C. Setiap jawapan kerja mesti menyatakan sudut rujukannya. Pembetulan: label semula sisi apabila sudut rujukan berubah."
          },
          {
            "kind": "h3",
            "text": "Menganggap Keputusan Ringkas sebagai Bukti Kejuruteraan"
          },
          {
            "kind": "p",
            "text": "Semakan nisbah pada pendakap atau kabel penambat memerikan geometri, bukan kekuatan, ketegangan, atau pematuhan kod. Pembetulan: gunakan nisbah untuk langkah geometri, dan analisis kejuruteraan yang berkelayakan untuk keputusan keselamatan."
          },
          {
            "kind": "h3",
            "text": "Salah Berbanding Betul: Contoh Konkrit"
          },
          {
            "kind": "p",
            "text": "Dengan [[a=3]], [[b=4]], [[c=5]], pengiraan sinus yang salah menggunakan pasangan sisi yang salah: [[3/4=0.75]]. Itu nisbah tangen, bukan sinus. Pengiraan yang betul ialah [[\\sin(A)=3/5=0.6]]. Sahkan dengan hubungan hasil bahagi: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Mengenal pasti sisi yang betul adalah penting, kerana aritmetiknya mudah setelah sisi betul."
          }
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Keputusan Trigonometri Anda Sah",
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga tepat yang sah dan tidak merosot memerlukan kaki positif, hipotenus lebih panjang daripada mana-mana kaki, sisi yang memenuhi teorem Pythagoras, unit yang serasi, pasangan sisi yang betul untuk nisbah yang dipilih, dan pasangan salingan yang sepadan. Empat kaedah pantas merangkumi semua ini."
          },
          {
            "kind": "h3",
            "text": "Kaedah Pengesahan 1: Semak Panjang Sisi"
          },
          {
            "kind": "p",
            "text": "Untuk segi tiga 3-4-5: [[3^2+4^2=5^2]], atau [[9+16=25]]. Lulus semakan Pythagoras mengesahkan sisi-sisi memerikan segi tiga tepat sebenar sebelum anda mempercayai sebarang nisbah yang diperoleh daripadanya."
          },
          {
            "kind": "h3",
            "text": "Kaedah Pengesahan 2: Semak Pasangan Salingan"
          },
          {
            "kind": "p",
            "text": "Setiap pasangan langsung-salingan mesti berganda menjadi 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Perbezaan kecil datang daripada perpuluhan yang dibundarkan."
          },
          {
            "kind": "h3",
            "text": "Kaedah Pengesahan 3: Semak Tangen Menggunakan Sinus dan Kosinus"
          },
          {
            "kind": "p",
            "text": "Hubungan hasil bahagi memberikan semakan bebas: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Jika mod tangen kalkulator dan pengiraan ini tidak sepadan, sesuatu sisi tersalah label."
          },
          {
            "kind": "h3",
            "text": "Kaedah Pengesahan 4: Semak Sudut Songsang"
          },
          {
            "kind": "p",
            "text": "Dapatkan semula sudut dan lihat sama ada ia munasabah: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Keputusan tirus antara 0 dan 90 darjah yang sepadan dengan bentuk segi tiga mengesahkan nisbah-nisbah."
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Kuasai Keenam-enam Nisbah dengan Satu Segi Tiga",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap nisbah pada halaman ini datang daripada tiga sisi yang sama dan satu sudut rujukan. Labelkan segi tiga, padankan pasangan sisi dengan mod, dan biarkan kalkulator melakukan aritmetik. Sinus, kosinus, dan tangen menjawab perbandingan langsung; kosekan, sekan, dan kotangen membalikkannya. SOH-CAH-TOA mengingati tiga yang pertama, peraturan salingan mengingati selebihnya, dan identiti sinus kuasa dua tambah kosinus kuasa dua sama dengan 1 mengikat sinus dan kosinus bersama. Sahkan dengan semakan Pythagoras dan hasil darab salingan, kemudian kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Apakah enam nisbah trigonometri segi tiga tepat?",
        "answer": "Enam nisbah ialah sinus (bertentangan per hipotenus), kosinus (bersebelahan per hipotenus), tangen (bertentangan per bersebelahan), kotangen (bersebelahan per bertentangan), sekan (hipotenus per bersebelahan), dan kosekan (hipotenus per bertentangan). Tiga yang pertama ialah nisbah utama; tiga yang terakhir ialah salingan."
      },
      {
        "question": "Bagaimana mengira sinus, kosinus, dan tangen?",
        "answer": "Kenal pasti sudut rujukan, kemudian bahagikan pasangan sisi yang betul. Sinus ialah sisi bertentangan dibahagi hipotenus, kosinus ialah sisi bersebelahan dibahagi hipotenus, dan tangen ialah sisi bertentangan dibahagi sisi bersebelahan. Untuk segi tiga 3-4-5, itu memberikan 3/5 = 0.6, 4/5 = 0.8, dan 3/4 = 0.75."
      },
      {
        "question": "Apakah perbezaan antara nisbah trigonometri langsung dan salingan?",
        "answer": "Nisbah langsung (sinus, kosinus, tangen) meletakkan perbandingan sisi yang lebih kecil dahulu, manakala nisbah salingan (kosekan, sekan, kotangen) membalikkan pecahan. Kosekan ialah 1/sinus, sekan ialah 1/kosinus, dan kotangen ialah 1/tangen. Setiap pasangan berganda menjadi 1."
      },
      {
        "question": "Mengapa nisbah trigonometri tidak berdimensi?",
        "answer": "Nisbah membahagi satu panjang dengan panjang lain, jadi unit terhapus. 3 meter dibahagi 5 meter ialah 0.6, dan 300 sentimeter dibahagi 500 sentimeter juga 0.6. Keputusan tidak membawa unit, itulah sebabnya kedua-dua input hanya perlu berkongsi satu sistem unit."
      },
      {
        "question": "Bagaimana memilih mod kalkulator yang betul?",
        "answer": "Padankan mod dengan pasangan sisi yang diketahui. Bertentangan dan hipotenus: mod sinus atau kosekan. Bersebelahan dan hipotenus: mod kosinus atau sekan. Kedua-dua kaki: mod tangen atau kotangen. Nisbah langsung dan salingannya menggunakan dua input yang sama dalam susunan berbalik."
      },
      {
        "question": "Bolehkah nisbah tangen atau kotangen melebihi 1?",
        "answer": "Ya. Tangen membandingkan kedua-dua kaki, jadi ia melebihi 1 apabila sisi bertentangan lebih panjang daripada sisi bersebelahan, seperti pada cerun yang curam. Kotangen melebihi 1 apabila sisi bersebelahan lebih panjang. Hanya sinus dan kosinus terhad pada 1, kerana penyebutnya ialah sisi terpanjang."
      },
      {
        "question": "Mengapa sekan dan kosekan lebih besar daripada 1 untuk sudut tirus?",
        "answer": "Kedua-duanya meletakkan hipotenus, sisi terpanjang segi tiga, sebagai pengangka. Membahagi sisi terpanjang dengan mana-mana sisi yang lebih pendek sentiasa memberikan nilai di atas 1. Untuk segi tiga 3-4-5, sekan ialah 5/4 = 1.25 dan kosekan ialah 5/3, kira-kira 1.6667."
      },
      {
        "question": "Bagaimana mencari sudut daripada nisbah trigonometri?",
        "answer": "Gunakan fungsi trigonometri songsang: arcsine untuk nisbah sinus, arccosine untuk kosinus, arctangent untuk tangen. Contohnya, jika sinus ialah 0.6, sudutnya ialah arcsin(0.6), kira-kira 36.87 darjah. Perhatikan bahawa ini berbeza daripada salingan: 1/sinus ialah kosekan, bukan arcsin."
      },
      {
        "question": "Bagaimana mengira sisi yang hilang menggunakan trigonometri?",
        "answer": "Susun semula formula nisbah. Dengan sudut dan hipotenus yang diketahui, sisi bertentangan ialah hipotenus didarab sinus sudut, dan sisi bersebelahan ialah hipotenus didarab kosinus. Dengan sisi bersebelahan yang diketahui, sisi bertentangan ialah sisi bersebelahan didarab tangen sudut."
      },
      {
        "question": "Apakah perbezaan antara sinus songsang dan kosekan?",
        "answer": "Sinus songsang (arcsin) mengambil nisbah dan mengembalikan sudut: arcsin(0.6) ialah kira-kira 36.87 darjah. Kosekan mengambil nisbah yang sama dan mengembalikan salingannya: 1/0.6 ialah kira-kira 1.6667, masih nisbah. Satu menyongsangkan fungsi sinus; yang satu lagi membalikkan pecahan."
      },
      {
        "question": "Bagaimana menyemak pengiraan trigonometri saya?",
        "answer": "Empat semakan: sahkan sisi-sisi memenuhi teorem Pythagoras, sahkan setiap pasangan salingan berganda menjadi 1, sahkan tangen sama dengan sinus dibahagi kosinus, dan dapatkan semula sudut dengan fungsi songsang untuk melihat ia tirus dan munasabah. Persetujuan antara semakan bermakna label sisi betul."
      },
      {
        "question": "Bagaimana nisbah trigonometri digunakan dalam kehidupan sebenar?",
        "answer": "Ia menukarkan sisi yang diukur kepada sudut dan cerun: kecerunan bumbung daripada kenaikan dan larian, sudut tangga daripada ketinggian dan jarak tapak, gred tanjakan, sudut dongakan bangunan, garis penglihatan ukur tanah, arah boom kren, dan kecerunan denai. Nisbah memberikan geometri; semakan kejuruteraan berasingan mengendalikan keselamatan."
      }
    ],
    "faqHeading": "Soalan Lazim",
    "relatedHeading": "Terokai Kalkulator Segi Tiga Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Nisbah Sinus",
      "Kalkulator Nisbah Kosinus",
      "Kalkulator Nisbah Tangen",
      "Kalkulator Nisbah Kotangen",
      "Kalkulator Nisbah Sekan",
      "Kalkulator Nisbah Kosekan",
      "Kalkulator Sudut Segi Tiga Tepat",
      "Kalkulator Sisi Segi Tiga Tepat Menggunakan Sudut",
      "Kalkulator Segi Tiga Tepat Khas"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Co to jest kalkulator stosunków trygonometrycznych trójkąta prostokątnego?",
      "sec-triangle": "Boki trójkąta prostokątnego",
      "sec-ratios": "Czym są stosunki trygonometryczne",
      "sec-six": "Sześć stosunków trygonometrycznych trójkąta prostokątnego",
      "sec-choose": "Jak wybrać właściwy stosunek trygonometryczny",
      "sec-howto": "Jak korzystać z kalkulatora stosunków trygonometrycznych trójkąta prostokątnego",
      "sec-foundations": "Przykłady obliczania stosunków trygonometrycznych krok po kroku",
      "sec-applications": "Zastosowania stosunków trygonometrycznych w życiu codziennym",
      "sec-relate": "Jak sześć stosunków trygonometrycznych wiąże się ze sobą",
      "sec-angles": "Stosunki trygonometryczne przy różnych kątach",
      "sec-missing-side": "Jak obliczyć brakujący bok trójkąta prostokątnego",
      "sec-inverse": "Jak znaleźć kąt ze stosunku trygonometrycznego",
      "sec-mistakes": "Częste błędy przy stosowaniu stosunków trygonometrycznych",
      "sec-verify": "Jak sprawdzić, czy wyniki trygonometryczne są poprawne",
      "sec-related": "Powiązane kalkulatory",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Wnioski"
    },
    "sections": {
      "sec-intro": {
        "h2": "Co to jest kalkulator stosunków trygonometrycznych trójkąta prostokątnego?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator stosunków trygonometrycznych trójkąta prostokątnego oblicza sześć stosunków trygonometrycznych, sinus, cosinus, tangens, cotangens, sekans i cosecans, z długości boków trójkąta prostokątnego. Każdy stosunek porównuje określoną parę boków względem wybranego ostrego kąta odniesienia. Kalkulator na tej stronie oferuje sześć trybów, po jednym dla każdego stosunku, więc wprowadzasz dwa boki potrzebne danemu stosunkowi i natychmiast otrzymujesz wartość."
          },
          {
            "kind": "p",
            "text": "Te stosunki zależą od kąta odniesienia, a nie tylko od trójkąta. Dla tego samego trójkąta zmiana kąta ostrego, względem którego mierzymy, zamienia role obu przyprostokątnych, więc zmieniają się też wartości stosunków. Dlatego tryby kalkulatora są zorganizowane według znanych par boków: bok przeciwległy i przeciwprostokątna dają sinus, bok przyległy i przeciwprostokątna dają cosinus, a dwie przyprostokątne dają tangens. Tryby odwrotne dają cosecans, sekans i cotangens z tych samych par."
          },
          {
            "kind": "p",
            "text": "Rozważmy trójkąt 3-4-5 o boku przeciwległym 3, boku przyległym 4 i przeciwprostokątnej 5. Jeden trójkąt daje sześć różnych wartości: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] oraz [[\\tan(A)=3/4=0.75]], a stosunki odwrotne to [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] i [[\\cot(A)\\approx1.3333]]. Każdy stosunek zadaje inne pytanie o ten sam kształt. Znajomość wzorów pozwala zweryfikować każdy wynik ręcznie, co jest najpewniejszym sposobem na wykrycie błędnie oznaczonych boków."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Boki trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek trygonometryczny to porównanie dwóch boków, więc poprawne nazywanie boków jest fundamentem wszystkiego, co następuje. Ten przewodnik konsekwentnie stosuje jedną konwencję: [[A]] to ostry kąt odniesienia w lewym dolnym rogu, [[B]] to kąt prosty w prawym dolnym rogu, [[C]] to drugi kąt ostry na górze, bok [[a]] to pionowa przyprostokątna, bok [[b]] to pozioma podstawa, a bok [[c]] to nachylona przeciwprostokątna."
          },
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny ma jeden kąt mierzący dokładnie 90 stopni, a pozostałe dwa kąty są ostre. Dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw kąta prostego. Ponieważ trzy kąty wewnętrzne sumują się do 180 stopni, dwa kąty ostre są dopełniające: [[A+C=90^\\circ]]. Trójkąty prostokątne nadają się do obliczeń trygonometrycznych, ponieważ ustalenie jednego kąta ostrego ustala w pełni kształt trójkąta: wszystkie trójkąty prostokątne o tym samym kącie ostrym są podobne, więc ich stosunki boków są zgodne."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przeciwległy?"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy leży dokładnie naprzeciw wybranego kąta odniesienia. W naszej konwencji bok [[a]] jest przeciwległy do kąta [[A]]. W zadaniach praktycznych bok przeciwległy często oznacza wysokość pionową, różnicę wzniesień albo pionową składową nachylenia. Jego rola nie jest przypisana na stałe do konkretnego boku: jeśli kąt odniesienia się zmieni, inny bok stanie się przeciwległy."
          },
          {
            "kind": "h3",
            "text": "Czym jest bok przyległy?"
          },
          {
            "kind": "p",
            "text": "Bok przyległy styka się z kątem odniesienia, ale nie jest przeciwprostokątną. W naszej konwencji bok [[b]] jest przyległy do kąta [[A]]. Często oznacza przebieg poziomy, odległość na gruncie albo rzut poziomy. Spośród trzech boków bok przyległy jest tym, który najczęściej mylony jest z bokiem przeciwległym, i ta jedna zamiana jest najczęstszą przyczyną błędnych wartości stosunków."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna leży naprzeciw kąta prostego i jest zawsze najdłuższym bokiem trójkąta. W naszej konwencji jest to nachylony bok [[c]]. W realnych sytuacjach może oznaczać drabinę, kabel, nachylony słupek dachu albo odległość w linii prostej do celu. Występuje we wzorach na sinus, cosinus, sekans i cosecans, ale nie bezpośrednio we wzorach na tangens i cotangens, które porównują dwie przyprostokątne."
          },
          {
            "kind": "h3",
            "text": "Dlaczego kąt odniesienia ma znaczenie"
          },
          {
            "kind": "p",
            "text": "Przeciwległy i przyległy to etykiety względne, a nie stałe nazwy. Dla kąta [[A]] bokiem przeciwległym jest [[a]], a przyległym [[b]]. Dla kąta [[C]] etykiety się zamieniają: bokiem przeciwległym jest [[b]], a przyległym [[a]]. Przeciwprostokątna pozostaje [[c]] niezależnie od tego, który kąt ostry jest odniesieniem. Zawsze ustal, względem którego kąta mierzysz, zanim oznaczysz jakikolwiek bok."
          }
        ],
        "imgAlt": "Trójkąt prostokątny: A u dołu po lewej, złoty przeciwległy a, niebieski przyległy b, przeciwprostokątna c, kąt prosty przy B",
        "figcaption": "Anatomia trójkąta prostokątnego: A to kąt odniesienia, B to kąt 90 stopni, a przeciwległy i przyległy są zdefiniowane względem A."
      },
      "sec-ratios": {
        "h2": "Czym są stosunki trygonometryczne",
        "blocks": [
          {
            "kind": "p",
            "text": "Stosunek trygonometryczny porównuje dwie długości boków trójkąta prostokątnego względem wybranego kąta ostrego. Opisuje kształt trójkąta, a nie jego rozmiar: podwojenie każdego boku pozostawia wszystkie sześć stosunków dokładnie bez zmian, ponieważ licznik i mianownik mnożone są przez ten sam czynnik. Trójkąt 3-4-5 i przeskalowany trójkąt 6-8-10 mają identyczne wartości sinusa, cosinusa, tangensa i stosunków odwrotnych. Ta niezależność od rozmiaru czyni stosunki użytecznymi: ujmują kąty jako czyste liczby."
          },
          {
            "kind": "h3",
            "text": "Na czym polega SOH-CAH-TOA"
          },
          {
            "kind": "p",
            "text": "SOH-CAH-TOA to standardowa pomoc mnemotechniczna dla trzech głównych stosunków. SOH: Sinus = Przeciwległy / Przeciwprostokątna. CAH: Cosinus = Przyległy / Przeciwprostokątna. TOA: Tangens = Przeciwległy / Przyległy. Każdą z nich czytaj jak zdanie: sinus kąta to długość boku przeciwległego temu kątowi podzielona przez przeciwprostokątną. Pomoc obejmuje sinus, cosinus i tangens; stosunki odwrotne pochodzą z drugiej zasady: odwróć ułamek. Cosecans odwraca sinus, sekans odwraca cosinus, a cotangens odwraca tangens."
          },
          {
            "kind": "h3",
            "text": "Dlaczego stosunki trygonometryczne są bezwymiarowe"
          },
          {
            "kind": "p",
            "text": "Stosunek dzieli jedną długość przez drugą długość, więc jednostki się skracają: [[3\\text{ m}/5\\text{ m}=0.6]]. W centymetrach ten sam trójkąt daje [[300\\text{ cm}/500\\text{ cm}=0.6]], tę samą liczbę. Zmiana spójnych jednostek miary nigdy nie zmienia stosunku trygonometrycznego. Praktyczna konsekwencja jest taka, że dane wejściowe muszą mieć jedną wspólną jednostkę przed podzieleniem, ale sam wynik nie ma jednostki, dlatego kalkulator traktuje wszystkie dane jako zwykłe długości."
          },
          {
            "kind": "h3",
            "text": "Dlaczego jeden trójkąt daje sześć stosunków"
          },
          {
            "kind": "p",
            "text": "Każdy stosunek porównuje inną parę boków. Sinus porównuje przeciwległy z przeciwprostokątną, cosinus porównuje przyległy z przeciwprostokątną, a tangens porównuje przeciwległy z przyległym. Cosecans, sekans i cotangens odwracają odpowiedni licznik i mianownik. Sześć stosunków, trzy pary boków, dwa kierunki dla każdej pary. Nie przeczą sobie; odpowiadają na różne pytania geometryczne o ten sam trójkąt, dlatego jeden kalkulator oferuje wszystkie sześć trybów."
          }
        ]
      },
      "sec-six": {
        "h2": "Sześć stosunków trygonometrycznych trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Ta sekcja wyjaśnia każdy stosunek w tym samym formacie: co oznacza, jaki ma wzór, jakich boków używa, dlaczego ułamek jest uporządkowany właśnie tak, przykład obliczony na trójkącie 3-4-5, co oznacza liczba, kiedy stosunek jest przydatny, jak łączy się z innym stosunkiem i jeden błąd, którego należy unikać."
          },
          {
            "kind": "h3",
            "text": "1. Sinus: bok przeciwległy podzielony przez przeciwprostokątną"
          },
          {
            "kind": "p",
            "text": "Sinus porównuje bok przeciwległy z przeciwprostokątną: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]. Przeciwprostokątna jest mianownikiem, ponieważ jest najdłuższym bokiem, co utrzymuje sinus między 0 a 1 dla kątów ostrych. Przy [[a=3]] i [[c=5]]: [[\\sin(A)=3/5]], więc [[[\\boxed{\\sin(A)=0.6}]]]. Wynik oznacza, że bok przeciwległy to 60 procent przeciwprostokątnej. Sinus jest przydatny, gdy znaną parą są bok przeciwległy i przeciwprostokątna, na przykład przy wyznaczaniu kąta drabiny z jej wysokości i długości. Łączy się z cosinusem jako dopełniający partner: sinus jednego kąta ostrego równa się cosinusowi drugiego. Błąd, którego należy unikać: 0.6 to stosunek, a nie kąt 0.6 stopnia."
          },
          {
            "kind": "h3",
            "text": "2. Cosinus: bok przyległy podzielony przez przeciwprostokątną"
          },
          {
            "kind": "p",
            "text": "Cosinus porównuje bok przyległy z przeciwprostokątną: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]. Sinus i cosinus dzielą przez przeciwprostokątną, więc oba pozostają między 0 a 1; różnią się tylko licznikiem, dlatego sinus i cosinus opisują różne aspekty tego samego kąta. Przy [[b=4]] i [[c=5]]: [[\\cos(A)=4/5]], więc [[[\\boxed{\\cos(A)=0.8}]]]. Bok przyległy to 80 procent przeciwprostokątnej. Cosinus jest przydatny, gdy znane są bok przyległy i przeciwprostokątna, na przykład poziomy przebieg dachu i długość krokwi. Łączy się z sinusem poprzez tożsamość [[\\sin^2(A)+\\cos^2(A)=1]]. Błąd, którego należy unikać: zamiana liczników, użycie 3/5 dla cosinusa zamiast 4/5."
          },
          {
            "kind": "h3",
            "text": "3. Tangens: bok przeciwległy podzielony przez bok przyległy"
          },
          {
            "kind": "p",
            "text": "Tangens porównuje bok przeciwległy z bokiem przyległym: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]. Pomija przeciwprostokątną całkowicie, co czyni go naturalnym stosunkiem dla zadań o nachyleniu, w których obie przyprostokątne są mierzonymi wielkościami. Przy [[a=3]] i [[b=4]]: [[\\tan(A)=3/4]], więc [[[\\boxed{\\tan(A)=0.75}]]]. Bok przeciwległy jest o 75 procent tak długi jak bok przyległy. Tangens to matematyczna postać przyrostu na przebieg poziomy, dlatego występuje w spadach dachów, rampach i nachyleniach. W przeciwieństwie do sinusa i cosinusa tangens może przekraczać 1, gdy bok przeciwległy jest dłuższy niż przyległy. Błąd, którego należy unikać: mylenie tangensa 0.75 z 75 procentami kąta prostego."
          },
          {
            "kind": "h3",
            "text": "4. Cotangens: bok przyległy podzielony przez bok przeciwległy"
          },
          {
            "kind": "p",
            "text": "Cotangens to odwrotność tangensa: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]. Odwraca porównanie boków, które wykonuje tangens, więc tam, gdzie tangens pyta, jak strome jest nachylenie, cotangens pyta, jak łagodne ono jest. Przy [[b=4]] i [[a=3]]: [[\\cot(A)=4/3]], więc [[[\\boxed{\\cot(A)\\approx1.3333}]]]. Równoważnie, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. Cotangens jest przydatny, gdy zadanie w naturalny sposób podaje przyległy przez przeciwległy albo gdy wzór jest zapisany w postaci odwrotnej. Błąd, którego należy unikać: zapisywanie cotangensa jako a/b, co jest tangensem."
          },
          {
            "kind": "h3",
            "text": "5. Sekans: przeciwprostokątna podzielona przez bok przyległy"
          },
          {
            "kind": "p",
            "text": "Sekans to odwrotność cosinusa: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]. Odwrócenie ułamka cosinusa stawia przeciwprostokątną, najdłuższy bok, na górze, dlatego sekans jest zawsze większy od 1 dla kąta ostrego w prawidłowym trójkącie prostokątnym. Przy [[c=5]] i [[b=4]]: [[\\sec(A)=5/4]], więc [[[\\boxed{\\sec(A)=1.25}]]]. Równoważnie, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. Sekans jest przydatny we wzorach fizycznych i inżynieryjnych zapisanych z przeciwprostokątną w liczniku. Błąd, którego należy unikać: mylenie sekansa z cosinusem albo z funkcją arcus cosinus."
          },
          {
            "kind": "h3",
            "text": "6. Cosecans: przeciwprostokątna podzielona przez bok przeciwległy"
          },
          {
            "kind": "p",
            "text": "Cosecans to odwrotność sinusa: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]. Podobnie jak sekans stawia przeciwprostokątną na górze, więc jest zawsze większy od 1 dla kątów ostrych. Przy [[c=5]] i [[a=3]]: [[\\csc(A)=5/3]], więc [[[\\boxed{\\csc(A)\\approx1.6667}]]]. Równoważnie, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. Cosecans występuje w matematyce fal i oscylacji, gdzie odwrotność sinusa jest wygodną postacią. Błąd, którego należy unikać: mylenie cosecansa z arcus sinusem; [[1/\\sin(A)]] to cosecans, natomiast [[\\sin^{-1}(r)]] odtwarza kąt."
          },
          {
            "kind": "h3",
            "text": "Wszystkie sześć stosunków w jednej tabeli"
          },
          {
            "kind": "p",
            "text": "Wszystkie sześć obliczeń odnosi się do tego samego kąta odniesienia [[A]]."
          }
        ],
        "table": {
          "headers": ["Stosunek", "Wzór", "Relacja boków", "Przykład 3-4-5"],
          "rows": [
            ["Sinus", "[[a/c]]", "Przeciwległy / Przeciwprostokątna", "[[3/5=0.6]]"],
            ["Cosinus", "[[b/c]]", "Przyległy / Przeciwprostokątna", "[[4/5=0.8]]"],
            ["Tangens", "[[a/b]]", "Przeciwległy / Przyległy", "[[3/4=0.75]]"],
            ["Cotangens", "[[b/a]]", "Przyległy / Przeciwległy", "[[4/3\\approx1.3333]]"],
            ["Sekans", "[[c/b]]", "Przeciwprostokątna / Przyległy", "[[5/4=1.25]]"],
            ["Cosecans", "[[c/a]]", "Przeciwprostokątna / Przeciwległy", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "Trójkąt 3-4-5 z sześcioma panelami pokazującymi sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        "figcaption": "Jeden trójkąt 3-4-5 daje wszystkie sześć stosunków: trzy główne stosunki i ich trzy odwrotności."
      },
      "sec-choose": {
        "h2": "Jak wybrać właściwy stosunek trygonometryczny",
        "blocks": [
          {
            "kind": "p",
            "text": "Najlepszy stosunek zależy od dwóch długości boków dostępnych w zadaniu. Każda para boków pozwala na dwa odwrotne obliczenia, a sześć trybów kalkulatora odpowiada dokładnie tym parom:"
          },
          {
            "kind": "p",
            "text": "Jeśli znane są bok przeciwległy i przeciwprostokątna, możesz obliczyć [[\\sin(A)=a/c]], a także [[\\csc(A)=c/a]]. Jeśli znane są bok przyległy i przeciwprostokątna, możesz obliczyć [[\\cos(A)=b/c]] i [[\\sec(A)=c/b]]. Jeśli znane są obie przyprostokątne, możesz obliczyć [[\\tan(A)=a/b]] i [[\\cot(A)=b/a]]."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku sinusa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb sinusa, gdy znane są bok przeciwległy i przeciwprostokątna. Wpisz bok przeciwległy w pole \"Opposite a\", a przeciwprostokątną w pole \"Hypotenuse c\", a następnie kliknij \"Oblicz sin(A)\". Żaden tryb nie wymaga wszystkich trzech długości boków; każdy tryb prosi dokładnie o parę używaną przez jego stosunek."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku cosinusa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb cosinusa, gdy znane są bok przyległy i przeciwprostokątna. Wpisz bok przyległy w pole \"Adjacent b\", a przeciwprostokątną w pole \"Hypotenuse c\", a następnie kliknij \"Oblicz cos(A)\"."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku tangensa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb tangensa, gdy znane są obie przyprostokątne. Wpisz bok przeciwległy w pole \"Opposite a\", a bok przyległy w pole \"Adjacent b\", a następnie kliknij \"Oblicz tan(A)\"."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku cotangensa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb cotangensa, gdy znane są przyprostokątne, a zadanie jest sformułowane jako przyległy przez przeciwległy. Wpisz najpierw bok przyległy w pole \"Adjacent b\", a bok przeciwległy w pole \"Opposite a\", a następnie kliknij \"Oblicz cot(A)\"."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku sekansa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb sekansa, gdy znane są przeciwprostokątna i bok przyległy. Wpisz przeciwprostokątną w pole \"Hypotenuse c\", a bok przyległy w pole \"Adjacent b\", a następnie kliknij \"Oblicz sec(A)\"."
          },
          {
            "kind": "h3",
            "text": "Jak korzystać z trybu stosunku cosecansa"
          },
          {
            "kind": "p",
            "text": "Wybierz tryb cosecansa, gdy znane są przeciwprostokątna i bok przeciwległy. Wpisz przeciwprostokątną w pole \"Hypotenuse c\", a bok przeciwległy w pole \"Opposite a\", a następnie kliknij \"Oblicz csc(A)\"."
          }
        ],
        "table": {
          "headers": ["Znane boki", "Stosunek bezpośredni", "Stosunek odwrotny"],
          "rows": [
            ["Przeciwległy i przeciwprostokątna", "Sinus", "Cosecans"],
            ["Przyległy i przeciwprostokątna", "Cosinus", "Sekans"],
            ["Przeciwległy i przyległy", "Tangens", "Cotangens"]
          ]
        }
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora stosunków trygonometrycznych trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Wykonaj te kroki w dowolnym z sześciu trybów:"
          },
          {
            "kind": "p",
            "text": "Poprawne oznaczenie boków ma większe znaczenie niż zapamiętanie wzorów. Większość błędnych odpowiedzi na tej stronie wynika z zamiany boków przeciwległego i przyległego, a nie z arytmetyki."
          }
        ],
        "steps": [
          "<strong>Określ kąt odniesienia.</strong> Ustal, o który kąt ostry chodzi w zadaniu. Wszystkie oznaczenia boków wynikają z tego wyboru.",
          "<strong>Oznacz przeciwległy, przyległy i przeciwprostokątną.</strong> Bok naprzeciw kąta odniesienia to przeciwległy, przyprostokątna stykająca się z nim to przyległy, a bok naprzeciw kąta prostego to przeciwprostokątna.",
          "<strong>Ustal, które dwie długości boków są znane.</strong> Każdy tryb potrzebuje dokładnie jednej pary.",
          "<strong>Wybierz tryb pasujący do tych dwóch boków.</strong> Użyj tabeli z poprzedniej sekcji, aby wybrać sinus, cosinus, tangens, cotangens, sekans albo cosecans.",
          "<strong>Wpisz pierwszą wymaganą długość boku.</strong> Pola są oznaczone, na przykład \"Opposite a\" i \"Hypotenuse c\".",
          "<strong>Wpisz drugą wymaganą długość boku.</strong> Zachowaj kolejność pokazaną na etykietach: niektóre tryby wymieniają przeciwprostokątną jako pierwszą.",
          "<strong>Wybierz spójne jednostki.</strong> Użyj selektorów jednostek obok każdego pola, aby oba pomiary miały jeden system jednostek.",
          "<strong>Sprawdź, czy dane wejściowe są dodatnie i prawidłowe.</strong> Obie przyprostokątne muszą być dodatnie, a przeciwprostokątna musi być dłuższa od każdej przyprostokątnej.",
          "<strong>Kliknij przycisk Oblicz.</strong> Na przykład \"Oblicz sin(A)\" w trybie sinusa.",
          "<strong>Przejrzyj wynik i kroki rozwiązania.</strong> Kalkulator pokazuje wzór, podstawienie i wartość końcową.",
          "<strong>Sprawdź wizualizację na żywo.</strong> Potwierdź, że oznaczenia na schemacie trójkąta pasują do zamierzonego kąta odniesienia.",
          "<strong>Użyj przycisku Resetuj dla nowego obliczenia.</strong> Przycisk Resetuj czyści wszystkie pola, aby następne obliczenie zaczęło się od nowa."
        ],
        "closingParagraphs": [
          "Przy boku przeciwległym 3, boku przyległym 4 i przeciwprostokątnej 5, wszystkich w tej samej jednostce, oto czego każdy tryb potrzebuje i co zwraca:",
          "1. Tryb sinusa: wpisz \"Opposite a\" = 3 i \"Hypotenuse c\" = 5, kliknij \"Oblicz sin(A)\". Wynik: 0.6.",
          "2. Tryb cosinusa: wpisz \"Adjacent b\" = 4 i \"Hypotenuse c\" = 5, kliknij \"Oblicz cos(A)\". Wynik: 0.8.",
          "3. Tryb tangensa: wpisz \"Opposite a\" = 3 i \"Adjacent b\" = 4, kliknij \"Oblicz tan(A)\". Wynik: 0.75.",
          "4. Tryb cotangensa: wpisz \"Adjacent b\" = 4 i \"Opposite a\" = 3, kliknij \"Oblicz cot(A)\". Wynik: około 1.3333.",
          "5. Tryb sekansa: wpisz \"Hypotenuse c\" = 5 i \"Adjacent b\" = 4, kliknij \"Oblicz sec(A)\". Wynik: 1.25.",
          "6. Tryb cosecansa: wpisz \"Hypotenuse c\" = 5 i \"Opposite a\" = 3, kliknij \"Oblicz csc(A)\". Wynik: około 1.6667.",
          "Stosunki są bezwymiarowe, więc pomiary wejściowe potrzebują tylko spójnych jednostek, a nie żadnej konkretnej jednostki. Kalkulator nie odtwarza brakujących boków ani kątów z tych trybów; oblicza żądany stosunek z dwóch podanych boków."
        ]
      },
      "sec-foundations": {
        "h2": "Przykłady obliczania stosunków trygonometrycznych krok po kroku",
        "blocks": [
          {
            "kind": "p",
            "text": "Te cztery przykłady budują zrozumienie stopniowo, od podstawowego trójkąta całkowitego po dokładne stosunki trójkątów specjalnych."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: trójkąt prostokątny 3-4-5"
          },
          {
            "kind": "p",
            "text": "Mając [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], oblicz wszystkie sześć stosunków. Sinus: [[3/5=0.6]]. Cosinus: [[4/5=0.8]]. Tangens: [[3/4=0.75]]. Cotangens: [[4/3\\approx1.3333]]. Sekans: [[5/4=1.25]]. Cosecans: [[5/3\\approx1.6667]]. Stosunki różnią się, ponieważ każdy porównuje inną parę boków; wszystkie opisują ten sam kąt [[A]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: trójkąt prostokątny 5-12-13"
          },
          {
            "kind": "p",
            "text": "Mając [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Sinus: [[5/13\\approx0.3846]]. Cosinus: [[12/13\\approx0.9231]]. Tangens: [[5/12\\approx0.4167]]. Odwrotności: cosecans [[13/5=2.6]], sekans [[13/12\\approx1.0833]], cotangens [[12/5=2.4]]. W porównaniu z trójkątem 3-4-5 dłuższy bok przyległy zwiększa cosinus i zmniejsza tangens, tak w postaci stosunków wygląda łagodniejszy kąt."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: trójkąt 45-45-90"
          },
          {
            "kind": "p",
            "text": "Mając [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Sinus i cosinus są równe: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangens i cotangens oba równe 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Sekans i cosecans są równe: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Równe przyprostokątne sprawiają, że sinus równa się cosinusowi, a tangens równa się 1; symetria między dwoma kątami ostrymi wyjaśnia wszystkie trzy równości."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: trójkąt 30-60-90"
          },
          {
            "kind": "p",
            "text": "Dla kąta [[A=30^\\circ]] użyj [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Sinus: [[1/2=0.5]]. Cosinus: [[\\sqrt{3}/2\\approx0.8660]]. Tangens: [[1/\\sqrt{3}\\approx0.5774]]. Cotangens: [[\\sqrt{3}\\approx1.7321]]. Sekans: [[2/\\sqrt{3}\\approx1.1547]]. Cosecans: [[2]]. Stosunki dla 30 i 60 stopni są powiązane: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] i [[\\tan(30^\\circ)=\\cot(60^\\circ)]], ponieważ kąty dopełniające zamieniają bok przeciwległy z przyległym."
          }
        ]
      },
      "sec-applications": {
        "h2": "Zastosowania stosunków trygonometrycznych w życiu codziennym",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy przykład używa stosunku pasującego do sytuacji, a nie wszystkich sześciu. Każdy przykład identyfikuje model trójkąta, znane boki, kąt odniesienia i znaczenie wyniku, podając założenia tam, gdzie mają znaczenie."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: obliczanie spadu dachu"
          },
          {
            "kind": "p",
            "text": "Dach wznosi się o 3 m na poziomym przebiegu 4 m. Uproszczony trójkąt przyjmuje wznios jako bok przeciwległy (a = 3 m) i przebieg jako bok przyległy (b = 4 m), przy czym powierzchnia dachu jest przeciwprostokątną. Tangens pasuje, ponieważ znane są obie przyprostokątne: [[\\tan(A)=3/4=0.75]]. Nachylenie procentowe to [[0.75\\times100\\%=75\\%]], a kąt to [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Stosunek nachylenia, nachylenie procentowe i kąt to trzy sposoby wyrażenia tego samego: dach wznosi się o 0.75 m na każdy 1 m przebiegu. To przykład geometryczny, a nie pełna ocena projektowa dachu."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: drabina oparta o ścianę"
          },
          {
            "kind": "p",
            "text": "Drabina sięga 4 m w górę ściany, a jej podstawa jest 3 m od ściany. Wysokość ściany to bok przeciwległy (a = 4 m), odległość na gruncie to bok przyległy (b = 3 m), a drabina to przeciwprostokątna: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Dla kąta między drabiną a gruntem: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. Kąt to [[A\\approx53.13^\\circ]]. Jeden trójkąt, jeden kąt, trzy różne stosunki, z których każdy podkreśla inną parę boków. To obliczenie nie potwierdza bezpieczeństwa drabiny."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: ocena nachylenia rampy"
          },
          {
            "kind": "p",
            "text": "Rampa wznosi się o 0.6 m na poziomym przebiegu 8 m. Tangens pasuje do obu przyprostokątnych: [[\\tan(A)=0.6/8=0.075]]. Nachylenie procentowe to [[0.075\\times100\\%=7.5\\%]], a kąt to [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Nachylenie 7.5% to nie kąt 7.5 stopnia: procent to stosunek pomnożony przez 100, natomiast stopnie mierzą sam kąt, i szybko się rozjeżdżają po przekroczeniu małych wartości. Zgodność z przepisami dostępności i przepisami budowlanymi wymaga dodatkowych sprawdzeń poza tą geometrią."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: pomiar wysokości budynku"
          },
          {
            "kind": "p",
            "text": "Obserwator stoi 24 m w poziomie od budynku, a jego szczyt jest 18 m powyżej poziomu oczu. Bok przyległy to 24 m, a bok przeciwległy to 18 m, więc [[\\tan(A)=18/24=0.75]] oraz [[A\\approx36.87^\\circ]], kąt elewacji. Odległość w linii prostej to [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], co daje [[\\sin(A)=18/30=0.6]] i [[\\cos(A)=24/30=0.8]] dla tej samej geometrii. Wynik jest względem poziomu oczu, niekoniecznie względem całkowitej wysokości budynku."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: geodezyjny pomiar różnicy wysokości"
          },
          {
            "kind": "p",
            "text": "Geodeta modeluje pionową różnicę wysokości 15 m na poziomej odległości 20 m. Tangens: [[\\tan(A)=15/20=0.75]]. Odległość w linii prostej to [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], więc [[\\sin(A)=15/25=0.6]] i [[\\cos(A)=20/25=0.8]] opisują ten sam zmierzony trójkąt przez różne pary boków. Prawdziwe pomiary geodezyjne mogą wymagać korekt wysokości instrumentu i poprawek wykraczających poza ten płaski model."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: szacowanie wysokości drzewa na podstawie cienia"
          },
          {
            "kind": "p",
            "text": "Pionowe drzewo rzuca cień długości 9 m, a wysokość nad gruntem to 12 m. Przy boku przeciwległym 12 m i przyległym 9 m: [[\\tan(A)=12/9\\approx1.3333]]. Przeciwprostokątna linii wzroku uproszczonego trójkąta to [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], co daje [[\\sin(A)=12/15=0.8]] i [[\\cos(A)=9/15=0.6]]. Zakłada się tu równy grunt, pionowe drzewo i cień zmierzony do punktu dokładnie pod koroną."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: odciąg masztu"
          },
          {
            "kind": "p",
            "text": "Odciąg łączy się z masztem 12 m nad gruntem, a kotwa jest 5 m w poziomie od masztu. Długość liny to [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Sinus: [[12/13\\approx0.9231]]. Cosinus: [[5/13\\approx0.3846]]. Tangens: [[12/5=2.4]]. Tangens przekracza tu 1, ponieważ składowa pionowa jest dłuższa niż przebieg poziomy; to normalne, nie błąd. Te stosunki nic nie mówią o wytrzymałości kotwy ani o naprężeniu liny."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: geometria schodów"
          },
          {
            "kind": "p",
            "text": "Uproszczone schody mają całkowity wznios 2.4 m i poziomy przebieg 3.2 m, przy długości przekątnej [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Sinus: [[2.4/4=0.6]]. Cosinus: [[3.2/4=0.8]]. Tangens: [[2.4/3.2=0.75]]. Stosunki opisują ogólną geometrię schodów, ale nie potwierdzają zgodności z przepisami schodowymi, które ograniczają też wymiary poszczególnych stopni."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: kierunek wysięgnika żurawia"
          },
          {
            "kind": "p",
            "text": "Uproszczony wysięgnik żurawia ma składową pionową 8 m i rzut poziomy 6 m, przy czym [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Sinus [[8/10=0.8]] opisuje pionowy udział wysięgnika, cosinus [[6/10=0.6]] jego poziomy udział, a tangens [[8/6\\approx1.3333]] jego stromość. Same stosunki trygonometryczne nie określają udźwigu żurawia ani bezpiecznej eksploatacji."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: szacowanie nachylenia szlaku turystycznego"
          },
          {
            "kind": "p",
            "text": "Prosty odcinek szlaku zyskuje 120 m wysokości na 800 m w poziomie. Tangens: [[\\tan(A)=120/800=0.15]]. Nachylenie to [[15\\%]], a kąt to [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Ten model stałego nachylenia nie opisuje krętego szlaku, ale daje użyteczną średnią stromość do planowania wysiłku."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: kontrola stężenia mechanicznego"
          },
          {
            "kind": "p",
            "text": "Ukośne stężenie ma składową pionową 1.5 m i składową poziomą 2 m, przy czym [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Sinus: [[1.5/2.5=0.6]]. Cosinus: [[2/2.5=0.8]]. Tangens: [[1.5/2=0.75]]. To stosunki 3-4-5 w połowie skali, pokazujące, że proporcjonalne skalowanie pozostawia każdy stosunek bez zmian. Nic to nie mówi o wytrzymałości ani nośności stężenia."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: wznoszenie samolotu po prostej"
          },
          {
            "kind": "p",
            "text": "Uproszczony prosty odcinek lotu zyskuje 1.5 km w pionie na 5 km w poziomie. Tangens: [[\\tan(A)=1.5/5=0.3]], więc [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. Odległość w linii prostej to [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], co daje [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. Tangens używa odległości naziemnej, sinus używa odległości lotu; to samo wznoszenie, różne długości odniesienia. To przykład geometryczny, a nie obliczenie nawigacji lotniczej."
          },
          {
            "kind": "h3",
            "text": "Porównanie przykładów praktycznych"
          }
        ],
        "table": {
          "headers": ["Sytuacja", "Znane pomiary", "Główny stosunek", "Wartość", "Interpretacja"],
          "rows": [
            ["Spad dachu", "Wznios 3 m, przebieg 4 m", "Tangens", "0.75", "Nachylenie 75%, 36.87°"],
            ["Drabina", "Wysokość 4 m, podstawa 3 m", "Sinus", "0.8", "Kąt do gruntu 53.13°"],
            ["Rampa", "Wznios 0.6 m, przebieg 8 m", "Tangens", "0.075", "Nachylenie 7.5%, 4.29°"],
            ["Wysokość budynku", "Wysokość 18 m, odległość 24 m", "Tangens", "0.75", "Kąt elewacji 36.87°"],
            ["Geodezja", "Wznios 15 m, przebieg 20 m", "Tangens", "0.75", "Ten sam kształt co spad dachu"],
            ["Cień drzewa", "Wysokość 12 m, cień 9 m", "Tangens", "1.3333", "Bardziej strome niż 45°"],
            ["Odciąg", "Wysokość 12 m, kotwa 5 m", "Tangens", "2.4", "Lina znacznie bardziej stroma niż przebieg"],
            ["Schody", "Wznios 2.4 m, przebieg 3.2 m", "Tangens", "0.75", "Te same stosunki co 3-4-5"],
            ["Wysięgnik żurawia", "Pion 8 m, poziom 6 m", "Sinus", "0.8", "Głównie zasięg pionowy"],
            ["Szlak turystyczny", "Wznios 120 m, przebieg 800 m", "Tangens", "0.15", "Średnie nachylenie 15%"],
            ["Stężenie mechaniczne", "Pion 1.5 m, poziom 2 m", "Sinus", "0.6", "Przeskalowana geometria 3-4-5"],
            ["Wznoszenie samolotu", "Wznios 1.5 km, odległość 5 km", "Tangens", "0.3", "Kąt wznoszenia 16.70°"]
          ]
        },
        "imgAlt": "Cztery panele: spad dachu 0.75, drabina sin 0.8, geodezja sin 0.6, rampa tan 0.075 z opisanymi trójkątami",
        "figcaption": "Cztery problemy z życia wzięte: spad dachu, drabina, geodezja i rampa, każdy ze swoim trójkątem i kluczowym stosunkiem."
      },
      "sec-relate": {
        "h2": "Jak sześć stosunków trygonometrycznych wiąże się ze sobą",
        "blocks": [
          {
            "kind": "p",
            "text": "Sześć stosunków to nie sześć niezależnych faktów. Tworzą trzy pary odwrotne, dwie zależności ilorazowe i trzy tożsamości pitagorejskie. Znajomość tych powiązań zamienia sześć wzorów w jeden system i daje metody weryfikacji każdego obliczenia."
          },
          {
            "kind": "h3",
            "text": "Pary odwrotne"
          },
          {
            "kind": "p",
            "text": "Każda para odwrotna mnoży się do 1, ponieważ ułamki się skracają: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. Na trójkącie 3-4-5: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Drobne rozbieżności pochodzą z zaokrąglonych dziesiętnych, a nie z matematyki."
          },
          {
            "kind": "h3",
            "text": "Tangens jako sinus podzielony przez cosinus"
          },
          {
            "kind": "p",
            "text": "Zależność ilorazowa [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] wynika ze skrócenia wspólnej przeciwprostokątnej: [[(a/c)/(b/c)=a/b]]. Sprawdź na wartościach 3-4-5: [[0.6/0.8=0.75]], co zgadza się z [[\\tan(A)]]. To użyteczna weryfikacja: jeśli tangens nie równa się sinusowi podzielonemu przez cosinus, bok został błędnie oznaczony."
          },
          {
            "kind": "h3",
            "text": "Cotangens jako cosinus podzielony przez sinus"
          },
          {
            "kind": "p",
            "text": "Podobnie, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]]. Dla wartości 3-4-5: [[0.8/0.6\\approx1.3333]], co zgadza się z [[\\cot(A)]]. Cotangens dziedziczy wszystko, co wie tangens, w odwróconej postaci."
          },
          {
            "kind": "h3",
            "text": "Trygonometryczna tożsamość pitagorejska"
          },
          {
            "kind": "p",
            "text": "Tożsamość [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] wynika bezpośrednio z twierdzenia Pitagorasa: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Dla trójkąta 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. Dwie kolejne tożsamości rozszerzają ten schemat: [[1+\\tan^2(A)=\\sec^2(A)]] i [[1+\\cot^2(A)=\\csc^2(A)]], uzyskane przez podzielenie pierwszej tożsamości przez cosinus do kwadratu i sinus do kwadratu. Przydają się, gdy zadanie podaje jeden stosunek, a potrzebny jest inny, bez długości boków."
          },
          {
            "kind": "h3",
            "text": "Jak kąty dopełniające wpływają na stosunki"
          },
          {
            "kind": "p",
            "text": "Ponieważ [[A+C=90^\\circ]], zmiana kąta odniesienia z [[A]] na [[C]] zamienia bok przeciwległy z przyległym: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] oraz [[\\csc(A)=\\sec(C)]]. W trójkącie 3-4-5 [[\\sin(A)=3/5=0.6]], natomiast [[\\cos(C)=3/5=0.6]], ponieważ bok przeciwległy do [[A]] jest przyległy do [[C]]. Każdy stosunek przy jednym kącie ostrym pojawia się ponownie jako jego kofunkcja przy drugim."
          }
        ]
      },
      "sec-angles": {
        "h2": "Stosunki trygonometryczne przy różnych kątach",
        "blocks": [
          {
            "kind": "p",
            "text": "Gdy ostry kąt odniesienia rośnie, stosunki zmieniają się w przewidywalny sposób. Sinus rośnie od wartości bliskich 0 w stronę 1, natomiast cosinus maleje od wartości bliskich 1 w stronę 0. Tangens rośnie od wartości bliskich 0 bez górnego ograniczenia, natomiast cotangens maleje od dużych wartości w stronę 0. Sekans rośnie od wartości bliskich 1 bez ograniczenia, natomiast cosecans maleje od dużych wartości w stronę 1. To zachowania graniczne w pobliżu 0 i 90 stopni, a nie wartości, które kąt ostry w prawidłowym niezdegenerowanym trójkącie prostokątnym faktycznie osiąga na krańcach."
          },
          {
            "kind": "p",
            "text": "Schemat jest symetryczny: sinus przy 30 stopniach równa się cosinusowi przy 60 stopniach, odzwierciedlając zależność dopełniającą. Cotangens, sekans i cosecans pochodzą z zależności odwrotnych: na przykład przy 30 stopniach [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] oraz [[\\csc(30^\\circ)=1/0.5=2]]."
          }
        ],
        "table": {
          "headers": ["Kąt", "Sinus", "Cosinus", "Tangens"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "Około 0.8660", "Około 0.5774"],
            ["[[45^\\circ]]", "Około 0.7071", "Około 0.7071", "1"],
            ["[[60^\\circ]]", "Około 0.8660", "0.5", "Około 1.7321"]
          ]
        },
        "imgAlt": "Wybierz sinus/cosecans dla boków a i c, cosinus/sekans dla boków b i c, tangens/cotangens dla boków a i b",
        "figcaption": "Wybierz tryb kalkulatora na podstawie znanej pary boków: każda para daje stosunek bezpośredni i jego odwrotność."
      },
      "sec-missing-side": {
        "h2": "Jak obliczyć brakujący bok trójkąta prostokątnego",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sześciu stosunków znajduje stosunki ze znanych boków. Znalezienie nieznanego boku ze znanego kąta i boku to zadanie pokrewne, ale inne, rozwiązywane przez przekształcenie wzorów na stosunki. To obliczenia towarzyszące, a nie funkcje samego kalkulatora stosunków."
          },
          {
            "kind": "h3",
            "text": "Znajdowanie boku przeciwległego sinusem"
          },
          {
            "kind": "p",
            "text": "Zacznij od [[\\sin(A)=a/c]] i przekształć: [[[\\boxed{a=c\\sin(A)}]]]. Przy przeciwprostokątnej 10 m i kącie [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]."
          },
          {
            "kind": "h3",
            "text": "Znajdowanie boku przyległego cosinusem"
          },
          {
            "kind": "p",
            "text": "Zacznij od [[\\cos(A)=b/c]] i przekształć: [[[\\boxed{b=c\\cos(A)}]]]. Przy przeciwprostokątnej 10 m i kącie [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]."
          },
          {
            "kind": "h3",
            "text": "Znajdowanie boku przeciwległego tangensem"
          },
          {
            "kind": "p",
            "text": "Zacznij od [[\\tan(A)=a/b]] i przekształć: [[[\\boxed{a=b\\tan(A)}]]]. Przy boku przyległym 8 m i kącie [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. Tangens jest tu szczególnie przydatny, ponieważ łączy obie przyprostokątne bezpośrednio, bez przeciwprostokątnej."
          }
        ]
      },
      "sec-inverse": {
        "h2": "Jak znaleźć kąt ze stosunku trygonometrycznego",
        "blocks": [
          {
            "kind": "p",
            "text": "Stosunek trygonometryczny nie jest kątem. Gdy stosunek jest znany, a kąt nieznany, funkcje trygonometryczne odwrotne odtwarzają ostry kąt odniesienia: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] i [[A=\\tan^{-1}(r)]]. Nazywają się sinusem odwrotnym, cosinusem odwrotnym i tangensem odwrotnym, znanymi też jako arcus sinus, arcus cosinus i arcus tangens."
          },
          {
            "kind": "h3",
            "text": "Przykład obliczony sinusem"
          },
          {
            "kind": "p",
            "text": "Mając [[\\sin(A)=0.6]], kąt to [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład obliczony cosinusem"
          },
          {
            "kind": "p",
            "text": "Mając [[\\cos(A)=0.8]], kąt to [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład obliczony tangensem"
          },
          {
            "kind": "p",
            "text": "Mając [[\\tan(A)=0.75]], kąt to [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]."
          },
          {
            "kind": "p",
            "text": "Wszystkie trzy odtwarzają ten sam kąt, ponieważ wszystkie trzy stosunki opisują ten sam trójkąt 3-4-5. Różnica między funkcją odwrotną a odwrotnością ma tu znaczenie: [[1/\\sin(A)=\\csc(A)]] to odwrotność, inny stosunek, natomiast [[\\sin^{-1}(r)]] to funkcja odwrotna, która zwraca kąt. Obliczając kąty ręcznie, sprawdź, czy narzędzie jest w trybie stopni czy radianów; kalkulator na tej stronie pracuje wyłącznie na stosunkach, więc odtworzenie kąta to osobny krok."
          }
        ]
      },
      "sec-mistakes": {
        "h2": "Częste błędy przy stosowaniu stosunków trygonometrycznych",
        "blocks": [
          {
            "kind": "h3",
            "text": "Mylenie boku przeciwległego z bokiem przyległym"
          },
          {
            "kind": "p",
            "text": "Etykiety zależą od kąta odniesienia. W trójkącie 3-4-5 obliczenie [[4/5=0.8]] dla sinusa faktycznie daje cosinus. Poprawka: najpierw zaznacz kąt odniesienia, a następnie oznacz bok naprzeciw niego jako przeciwległy."
          },
          {
            "kind": "h3",
            "text": "Oznaczanie boków względem niewłaściwego kąta odniesienia"
          },
          {
            "kind": "p",
            "text": "Oznaczanie dla kąta C, gdy zadanie dotyczy kąta A, zamienia każdy stosunek. Poprawka: zapisz, który kąt jest odniesieniem, zanim dotkniesz kalkulatora."
          },
          {
            "kind": "h3",
            "text": "Używanie sinusa zamiast cosinusa"
          },
          {
            "kind": "p",
            "text": "Sinus potrzebuje boku przeciwległego; cosinus potrzebuje boku przyległego. Jeśli znasz bok przyległy i przeciwprostokątną, ale i tak obliczasz [[a/c]], zamieniłeś przyprostokątne. Poprawka: dopasuj stosunek do znanej pary za pomocą tabeli w sekcji wyboru."
          },
          {
            "kind": "h3",
            "text": "Używanie tangensa, gdy znane boki to przeciwległy i przeciwprostokątna"
          },
          {
            "kind": "p",
            "text": "Tangens potrzebuje dwóch przyprostokątnych. Gdy znane są przeciwległy i przeciwprostokątna, właściwym stosunkiem bezpośrednim jest sinus. Poprawka: sprawdź, którą parę faktycznie masz, zanim wybierzesz tryb."
          },
          {
            "kind": "h3",
            "text": "Odwracanie licznika z mianownikiem"
          },
          {
            "kind": "p",
            "text": "Obliczenie [[c/a]], gdy miałeś na myśli sinus, daje cosecans, wartość powyżej 1 zamiast poniżej 1. Poprawka: mianownikiem jest przeciwprostokątna dla sinusa i cosinusa, przyprostokątna przyległa dla tangensa."
          },
          {
            "kind": "h3",
            "text": "Mylenie tangensa z cotangensem"
          },
          {
            "kind": "p",
            "text": "Tangens to [[a/b]]; cotangens to [[b/a]]. To odwrotności, więc jeden błąd odwraca odpowiedź. Poprawka: przeczytaj etykietę trybu przed wprowadzeniem wartości."
          },
          {
            "kind": "h3",
            "text": "Mylenie cosinusa z sekansem"
          },
          {
            "kind": "p",
            "text": "Cosinus to [[b/c]], zawsze poniżej 1; sekans to [[c/b]], zawsze powyżej 1. Jeśli sekans wychodzi poniżej 1, obliczyłeś cosinus. Poprawka: stosunki odwrotne stawiają przeciwprostokątną na górze."
          },
          {
            "kind": "h3",
            "text": "Mylenie sinusa z cosecansem"
          },
          {
            "kind": "p",
            "text": "To samo odwrócenie: sinus to [[a/c]], cosecans to [[c/a]]. Poprawka: sprawdź, czy wynik mieści się w oczekiwanym zakresie dla wybranego trybu."
          },
          {
            "kind": "h3",
            "text": "Zakładanie, że każdy stosunek musi być mniejszy od 1"
          },
          {
            "kind": "p",
            "text": "Sinus i cosinus są poniżej 1, ale tangens, cotangens, sekans i cosecans mogą przekraczać 1. Tangens 2.4 jest w pełni poprawny dla stromego nachylenia. Poprawka: poznaj dopuszczalny zakres każdego stosunku."
          },
          {
            "kind": "h3",
            "text": "Zakładanie, że stosunek taki jak 0.6 oznacza kąt 0.6 stopnia"
          },
          {
            "kind": "p",
            "text": "Stosunek to czysta liczba, a nie miara stopnia. Kąt kryjący się za [[\\sin(A)=0.6]] to około 36.87 stopnia, wyznaczony arcus sinusem. Poprawka: stosunki odpowiadają na pytanie, jak boki się porównują; funkcje odwrotne odpowiadają, jaki jest kąt."
          },
          {
            "kind": "h3",
            "text": "Zapominanie, że stosunki są bezwymiarowe"
          },
          {
            "kind": "p",
            "text": "Wprowadzenie przeciwległej w calach, a przeciwprostokątnej w stopach psuje stosunek, ponieważ jednostki się nie skracają. Poprawka: najpierw przelicz oba wejścia na jedną jednostkę."
          },
          {
            "kind": "h3",
            "text": "Mieszanie niezgodnych jednostek miary"
          },
          {
            "kind": "p",
            "text": "Ta sama przyczyna, warta powtórzenia: stosunek 3 cali do 5 centymetrów to nie 0.6. Poprawka: przed obliczeniem użyj selektorów jednostek przy obu polach."
          },
          {
            "kind": "h3",
            "text": "Wprowadzanie zerowych lub ujemnych długości boków"
          },
          {
            "kind": "p",
            "text": "Bok trójkąta musi być dodatni. Zerowe lub ujemne dane nie opisują żadnego trójkąta, a kalkulator nie może wytworzyć sensownego stosunku. Poprawka: zmierz ponownie albo przeczytaj zadanie jeszcze raz."
          },
          {
            "kind": "h3",
            "text": "Używanie długości boków, które nie tworzą prawidłowego trójkąta prostokątnego"
          },
          {
            "kind": "p",
            "text": "Jeśli boki nie przechodzą sprawdzenia Pitagorasa, na przykład 2, 3 i 10, żaden trójkąt prostokątny o tych długościach nie istnieje. Poprawka: przed obliczeniem stosunków zweryfikuj [[a^2+b^2=c^2]]."
          },
          {
            "kind": "h3",
            "text": "Zaokrąglanie zbyt wcześnie"
          },
          {
            "kind": "p",
            "text": "Zaokrąglenie pośredniego stosunku do jednego miejsca po przecinku, a następnie mnożenie, powiększa błąd. Poprawka: zachowuj pełną precyzję w każdym kroku i zaokrąglaj tylko końcową odpowiedź."
          },
          {
            "kind": "h3",
            "text": "Mylenie stosunków odwrotnych z odwrotnymi funkcjami trygonometrycznymi"
          },
          {
            "kind": "p",
            "text": "[[\\csc(A)=1/\\sin(A)]] to stosunek; [[\\sin^{-1}(0.6)]] to kąt. Podobny zapis powoduje prawdziwe zamieszanie. Poprawka: odwrotności odwracają ułamki, funkcje odwrotne odtwarzają kąty."
          },
          {
            "kind": "h3",
            "text": "Traktowanie przeciwprostokątnej jako jednej z przyprostokątnych"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna jest zawsze najdłuższym bokiem i zawsze leży naprzeciw kąta prostego. Przypisanie jej jako przyprostokątnej psuje każdy stosunek. Poprawka: najpierw znajdź najdłuższy bok i oznacz go jako c."
          },
          {
            "kind": "h3",
            "text": "Zakładanie, że sześć stosunków ma tę samą wartość"
          },
          {
            "kind": "p",
            "text": "W trójkącie 3-4-5 sześć wartości sięga od 0.6 do 1.6667. Tylko trójkąty specjalne, jak 45-45-90, wyrównują niektóre stosunki. Poprawka: spodziewaj się sześciu różnych liczb z jednego trójkąta."
          },
          {
            "kind": "h3",
            "text": "Zakładanie, że ten sam bok jest zawsze przeciwległy"
          },
          {
            "kind": "p",
            "text": "Bok przeciwległy do kąta A jest przyległy do kąta C. Każda obliczona odpowiedź musi podawać swój kąt odniesienia. Poprawka: oznaczaj boki na nowo za każdym razem, gdy zmienia się kąt odniesienia."
          },
          {
            "kind": "h3",
            "text": "Traktowanie uproszczonego wyniku jako dowodu inżynierskiego"
          },
          {
            "kind": "p",
            "text": "Sprawdzenie stosunku na stężeniu albo odciągu opisuje geometrię, a nie wytrzymałość, naprężenie ani zgodność z przepisami. Poprawka: używaj stosunków do kroku geometrycznego, a do decyzji o bezpieczeństwie wykwalifikowanej analizy inżynierskiej."
          },
          {
            "kind": "h3",
            "text": "Błędnie a poprawnie: konkretny przykład"
          },
          {
            "kind": "p",
            "text": "Mając [[a=3]], [[b=4]], [[c=5]], błędne obliczenie sinusa używa niewłaściwej pary boków: [[3/4=0.75]]. To stosunek tangensa, a nie sinusa. Poprawne obliczenie to [[\\sin(A)=3/5=0.6]]. Zweryfikuj zależnością ilorazową: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Poprawne oznaczenie boków jest kluczowe, ponieważ arytmetyka jest trywialna, gdy boki są właściwe."
          }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy wyniki trygonometryczne są poprawne",
        "blocks": [
          {
            "kind": "p",
            "text": "Prawidłowy, niezdegenerowany trójkąt prostokątny wymaga dodatnich przyprostokątnych, przeciwprostokątnej dłuższej od każdej przyprostokątnej, boków spełniających twierdzenie Pitagorasa, spójnych jednostek, właściwej pary boków dla wybranego stosunku oraz zgodnych par odwrotnych. Cztery szybkie metody obejmują to wszystko."
          },
          {
            "kind": "h3",
            "text": "Metoda weryfikacji 1: sprawdź długości boków"
          },
          {
            "kind": "p",
            "text": "Dla trójkąta 3-4-5: [[3^2+4^2=5^2]], czyli [[9+16=25]]. Pomyślne przejście sprawdzenia Pitagorasa potwierdza, że boki opisują prawdziwy trójkąt prostokątny, zanim zaufasz wyprowadzonym z nich stosunkom."
          },
          {
            "kind": "h3",
            "text": "Metoda weryfikacji 2: sprawdź pary odwrotne"
          },
          {
            "kind": "p",
            "text": "Każda para bezpośrednia-odwrotna musi mnożyć się do 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Drobne różnice pochodzą z zaokrąglonych dziesiętnych."
          },
          {
            "kind": "h3",
            "text": "Metoda weryfikacji 3: sprawdź tangens sinusem i cosinusem"
          },
          {
            "kind": "p",
            "text": "Zależność ilorazowa daje niezależne sprawdzenie: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Jeśli tryb tangensa kalkulatora i to obliczenie się nie zgadzają, bok został błędnie oznaczony."
          },
          {
            "kind": "h3",
            "text": "Metoda weryfikacji 4: sprawdź kąt odwrotny"
          },
          {
            "kind": "p",
            "text": "Odtwórz kąt i zobacz, czy jest sensowny: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Ostry wynik między 0 a 90 stopni, pasujący do kształtu trójkąta, potwierdza stosunki."
          }
        ]
      },
      "sec-conclusion": {
        "h2": "Opanuj wszystkie sześć stosunków jednym trójkątem",
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy stosunek na tej stronie pochodzi z tych samych trzech boków i jednego kąta odniesienia. Oznacz trójkąt, dopasuj parę boków do trybu i pozwól kalkulatorowi wykonać arytmetykę. Sinus, cosinus i tangens odpowiadają na porównania bezpośrednie; cosecans, sekans i cotangens je odwracają. SOH-CAH-TOA przypomina pierwsze trzy, zasada odwrotności przypomina resztę, a tożsamość sinus kwadrat plus cosinus kwadrat równa się 1 łączy sinus z cosinusem. Zweryfikuj sprawdzeniem Pitagorasa i iloczynami odwrotności, a następnie wróć do kalkulatora u góry tej strony, aby przeliczyć swoje liczby."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jakie są sześć stosunków trygonometrycznych trójkąta prostokątnego?",
        "answer": "Sześć stosunków to sinus (przeciwległy przez przeciwprostokątną), cosinus (przyległy przez przeciwprostokątną), tangens (przeciwległy przez przyległy), cotangens (przyległy przez przeciwległy), sekans (przeciwprostokątna przez przyległy) i cosecans (przeciwprostokątna przez przeciwległy). Pierwsze trzy to stosunki główne; ostatnie trzy to ich odwrotności."
      },
      {
        "question": "Jak obliczyć sinus, cosinus i tangens?",
        "answer": "Określ kąt odniesienia, a następnie podziel właściwą parę boków. Sinus to bok przeciwległy podzielony przez przeciwprostokątną, cosinus to bok przyległy podzielony przez przeciwprostokątną, a tangens to bok przeciwległy podzielony przez bok przyległy. Dla trójkąta 3-4-5 daje to 3/5 = 0.6, 4/5 = 0.8 i 3/4 = 0.75."
      },
      {
        "question": "Jaka jest różnica między stosunkami trygonometrycznymi bezpośrednimi a odwrotnymi?",
        "answer": "Stosunki bezpośrednie (sinus, cosinus, tangens) stawiają najpierw mniejsze porównanie boków, natomiast stosunki odwrotne (cosecans, sekans, cotangens) odwracają ułamek. Cosecans to 1/sinus, sekans to 1/cosinus, a cotangens to 1/tangens. Każda para mnoży się do 1."
      },
      {
        "question": "Dlaczego stosunki trygonometryczne są bezwymiarowe?",
        "answer": "Stosunek dzieli jedną długość przez drugą, więc jednostki się skracają. 3 metry podzielone przez 5 metrów to 0.6, a 300 centymetrów podzielonych przez 500 centymetrów to też 0.6. Wynik nie ma jednostki, dlatego oba wejścia muszą mieć tylko jeden wspólny system jednostek."
      },
      {
        "question": "Jak wybrać właściwy tryb kalkulatora?",
        "answer": "Dopasuj tryb do znanej pary boków. Przeciwległy i przeciwprostokątna: tryb sinusa albo cosecansa. Przyległy i przeciwprostokątna: tryb cosinusa albo sekansa. Dwie przyprostokątne: tryb tangensa albo cotangensa. Stosunek bezpośredni i jego odwrotność używają tych samych dwóch wejść w odwrotnej kolejności."
      },
      {
        "question": "Czy stosunek tangensa albo cotangensa może być większy od 1?",
        "answer": "Tak. Tangens porównuje dwie przyprostokątne, więc przekracza 1, gdy bok przeciwległy jest dłuższy niż przyległy, jak na stromym nachyleniu. Cotangens przekracza 1, gdy bok przyległy jest dłuższy. Tylko sinus i cosinus są ograniczone do 1, ponieważ ich mianownikiem jest najdłuższy bok."
      },
      {
        "question": "Dlaczego sekans i cosecans są większe od 1 dla kątów ostrych?",
        "answer": "Oba stawiają przeciwprostokątną, najdłuższy bok trójkąta, w liczniku. Dzielenie najdłuższego boku przez dowolny krótszy bok zawsze daje wartość powyżej 1. Dla trójkąta 3-4-5 sekans to 5/4 = 1.25, a cosecans to 5/3, około 1.6667."
      },
      {
        "question": "Jak znaleźć kąt ze stosunku trygonometrycznego?",
        "answer": "Użyj odwrotnej funkcji trygonometrycznej: arcus sinus dla stosunku sinusa, arcus cosinus dla cosinusa, arcus tangens dla tangensa. Na przykład jeśli sinus to 0.6, kąt to arcsin(0.6), około 36.87 stopnia. Zauważ, że to co innego niż odwrotność: 1/sinus to cosecans, nie arcsin."
      },
      {
        "question": "Jak obliczyć brakujący bok za pomocą trygonometrii?",
        "answer": "Przekształć wzór na stosunek. Przy znanym kącie i przeciwprostokątnej bok przeciwległy to przeciwprostokątna razy sinus kąta, a bok przyległy to przeciwprostokątna razy cosinus. Przy znanym boku przyległym bok przeciwległy to bok przyległy razy tangens kąta."
      },
      {
        "question": "Jaka jest różnica między arcus sinusem a cosecansem?",
        "answer": "Arcus sinus (arcsin) bierze stosunek i zwraca kąt: arcsin(0.6) to około 36.87 stopnia. Cosecans bierze ten sam stosunek i zwraca jego odwrotność: 1/0.6 to około 1.6667, wciąż stosunek. Jedno cofa funkcję sinus, drugie odwraca ułamek."
      },
      {
        "question": "Jak mogę zweryfikować swoje obliczenia trygonometryczne?",
        "answer": "Cztery kontrole: potwierdź, że boki spełniają twierdzenie Pitagorasa, potwierdź, że każda para odwrotna mnoży się do 1, potwierdź, że tangens równa się sinusowi podzielonemu przez cosinus, i odtwórz kąt funkcją odwrotną, aby zobaczyć, że jest ostry i sensowny. Zgodność kontroli oznacza, że oznaczenia boków są poprawne."
      },
      {
        "question": "Jak stosuje się stosunki trygonometryczne w życiu codziennym?",
        "answer": "Zamieniają zmierzone boki na kąty i nachylenia: spad dachu ze wzniosu i przebiegu, kąty drabiny z wysokości i odległości podstawy, nachylenia ramp, kąty elewacji budynków, linie celowania geodezyjne, kierunek wysięgnika żurawia i nachylenia szlaków. Stosunek daje geometrię; osobne kontrole inżynierskie zajmują się bezpieczeństwem."
      }
    ],
    "faqHeading": "Często zadawane pytania",
    "relatedHeading": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator stosunku sinusa",
      "Kalkulator stosunku cosinusa",
      "Kalkulator stosunku tangensa",
      "Kalkulator stosunku cotangensa",
      "Kalkulator stosunku sekansa",
      "Kalkulator stosunku cosecansa",
      "Kalkulator kąta trójkąta prostokątnego",
      "Kalkulator boku trójkąta prostokątnego przy użyciu kąta",
      "Kalkulator specjalnych trójkątów prostokątnych"
    ]
  }
};
