/**
 * trigRatiosGuideTranslations.batch3c.ts
 * Page 15 Trig Ratios guide: locales sv, zh (part of BATCH3: id, ar, bg, tr, sv, zh).
 * Math markers [[...]] / [[[...]]] kept byte-identical to English; backslashes doubled.
 */
export const TRIG_RATIOS_TRANSLATIONS_BATCH3C = {
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Vad är en trigkvotskalkylator för rätvinklig triangel?",
      "sec-triangle": "Förstå sidorna i en rätvinklig triangel",
      "sec-ratios": "Förstå trigonometriska kvoter",
      "sec-six": "De sex trigonometriska kvoterna i en rätvinklig triangel",
      "sec-choose": "Hur man väljer rätt trigonometrisk kvot",
      "sec-howto": "Hur man använder trigkvotskalkylatorn för rätvinkliga trianglar",
      "sec-foundations": "Steg-för-steg-exempel på trigonometriska kvoter",
      "sec-applications": "Verkliga tillämpningar av trigonometriska kvoter",
      "sec-relate": "Hur de sex trigonometriska kvoterna hänger ihop",
      "sec-angles": "Förstå trigonometriska kvoter vid olika vinklar",
      "sec-missing-side": "Hur man beräknar en saknad sida i en rätvinklig triangel",
      "sec-inverse": "Hur man hittar en vinkel från en trigonometrisk kvot",
      "sec-mistakes": "Vanliga misstag vid användning av trigonometriska kvoter",
      "sec-verify": "Hur man kontrollerar att trigonometriska resultat är giltiga",
      "sec-related": "Relaterade kalkylatorer",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Vad är en trigkvotskalkylator för rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "En trigkvotskalkylator för rätvinkliga trianglar beräknar de sex trigonometriska kvoterna, sinus, cosinus, tangens, cotangens, sekans och cosekans, utifrån sidlängderna i en rätvinklig triangel. Varje kvot jämför ett visst sidpar i förhållande till en vald spetsig referensvinkel. Kalkylatorn på den här sidan har sex lägen, ett per kvot, så du anger de två sidor varje kvot behöver och får värdet direkt." },
          { "kind": "p", "text": "Dessa kvoter beror på en referensvinkel, inte bara på triangeln. För samma triangel byter ett byte av spetsig vinkel rollerna för de två kateterna, så kvotvärdena ändras också. Därför är kalkylatorns lägen ordnade efter kända sidpar: motstående sida och hypotenusa ger sinus, närliggande sida och hypotenusa ger cosinus, och de två kateterna ger tangens. De reciproka lägena ger cosekans, sekans och cotangens från samma par." },
          { "kind": "p", "text": "Betrakta en 3-4-5-triangel med motstående sida 3, närliggande sida 4 och hypotenusa 5. En triangel ger sex olika värden: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] och [[\\tan(A)=3/4=0.75]], med de reciproka kvoterna [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] och [[\\cot(A)\\approx1.3333]]. Varje kvot ställer en annan fråga om samma form. Att förstå formlerna gör att du kan kontrollräkna varje resultat för hand, vilket är det säkraste sättet att upptäcka felmärkta sidor." }
        ]
      },
      "sec-triangle": {
        "h2": "Förstå sidorna i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Varje trigonometrisk kvot är en jämförelse av två sidor, så korrekt sidnamngivning är grunden för allt som följer. Den här guiden använder en konsekvent konvention: [[A]] är den spetsiga referensvinkeln längst ner till vänster, [[B]] är den räta vinkeln längst ner till höger, [[C]] är den andra spetsiga vinkeln överst, sidan [[a]] är den vertikala kateten, sidan [[b]] är den horisontella basen och sidan [[c]] är den lutande hypotenusan." },
          { "kind": "h3", "text": "Vad är en rätvinklig triangel?" },
          { "kind": "p", "text": "En rätvinklig triangel har en vinkel på exakt 90 grader, medan de andra två vinklarna är spetsiga. De två kateterna möts vid den räta vinkeln och hypotenusan ligger mitt emot den räta vinkeln. Eftersom de tre innervinklarna summerar till 180 grader är de två spetsiga vinklarna komplementära: [[A+C=90^\\circ]]. Rätvinkliga trianglar lämpar sig för trigonometriska beräkningar eftersom en fixerad spetsig vinkel bestämmer triangelns form helt: alla rätvinkliga trianglar med samma spetsiga vinkel är likformiga, så deras sidkvoter stämmer överens." },
          { "kind": "h3", "text": "Vad är den motstående sidan?" },
          { "kind": "p", "text": "Den motstående sidan ligger rakt mitt emot den valda referensvinkeln. I vår konvention är sidan [[a]] motstående vinkel [[A]]. I praktiska problem representerar den motstående sidan ofta vertikal höjd, en höjdskillnad eller den vertikala komponenten av en lutning. Dess roll är inte knuten till en viss sida: om referensvinkeln ändras blir en annan sida motstående." },
          { "kind": "h3", "text": "Vad är den närliggande sidan?" },
          { "kind": "p", "text": "Den närliggande sidan vidrör referensvinkeln men är inte hypotenusan. I vår konvention är sidan [[b]] närliggande vinkel [[A]]. Den representerar ofta horisontell sträcka, ett markavstånd eller en horisontell projektion. Av de tre sidorna är den närliggande sidan den som oftast förväxlas med den motstående sidan, och just det bytet är den vanligaste orsaken till fel kvotvärden." },
          { "kind": "h3", "text": "Vad är hypotenusan?" },
          { "kind": "p", "text": "Hypotenusan ligger mitt emot den räta vinkeln och är alltid triangelns längsta sida. I vår konvention är den den lutande sidan [[c]]. I verkliga situationer kan den representera en stege, en kabel, ett lutande takstöd eller en rak siktlinje. Den ingår i sinus-, cosinus-, sekans- och cosekansformlerna, men inte direkt i tangens- och cotangensformlerna, som jämför de två kateterna." },
          { "kind": "h3", "text": "Varför referensvinkeln spelar roll" },
          { "kind": "p", "text": "Motstående och närliggande är relativa beteckningar, inte fasta namn. För vinkel [[A]] är den motstående sidan [[a]] och den närliggande sidan [[b]]. För vinkel [[C]] byter beteckningarna plats: den motstående sidan är [[b]] och den närliggande sidan är [[a]]. Hypotenusan förblir [[c]] oavsett vilken spetsig vinkel som är referens. Bestäm alltid vilken vinkel du mäter mot innan du märker någon sida." }
        ],
        "imgAlt": "Rätvinklig triangel med vinkel A markerad längst ner till vänster, gyllene motstående sida a, blå närliggande sida b, grå hypotenusa c, rät vinkel vid B",
        "figcaption": "En rätvinklig triangels anatomi: A är referensvinkeln, B är 90-gradersvinkeln, och motstående och närliggande definieras i förhållande till A."
      },
      "sec-ratios": {
        "h2": "Förstå trigonometriska kvoter",
        "blocks": [
          { "kind": "p", "text": "En trigonometrisk kvot jämför två sidlängder i en rätvinklig triangel i förhållande till en vald spetsig vinkel. Den beskriver triangelns form, inte dess storlek: dubbla varje sida och alla sex kvoterna förblir exakt desamma, eftersom täljare och nämnare multipliceras med samma faktor. En 3-4-5-triangel och en skalad 6-8-10-triangel har identiska sinus-, cosinus-, tangens- och reciproka värden. Denna storleksoberoende gör kvoterna användbara: de fångar vinklar som rena tal." },
          { "kind": "h3", "text": "Förstå SOH-CAH-TOA" },
          { "kind": "p", "text": "SOH-CAH-TOA är standardminnesregeln för de tre primära kvoterna. SOH: Sinus = Motstående / Hypotenusa. CAH: Cosinus = Närliggande / Hypotenusa. TOA: Tangens = Motstående / Närliggande. Läs varje som en mening: sinus för en vinkel är längden av sidan mitt emot den vinkeln dividerad med hypotenusan. Regeln täcker sinus, cosinus och tangens; de reciproka kvoterna kommer från en andra regel: vänd på bråket. Cosekans vänder sinus, sekans vänder cosinus och cotangens vänder tangens." },
          { "kind": "h3", "text": "Varför trigonometriska kvoter är dimensionslösa" },
          { "kind": "p", "text": "En kvot dividerar en längd med en annan längd, så enheterna förkortas bort: [[3\\text{ m}/5\\text{ m}=0.6]]. I centimeter ger samma triangel [[300\\text{ cm}/500\\text{ cm}=0.6]], exakt samma tal. Att byta kompatibla mätenheter ändrar aldrig en trigonometrisk kvot. Den praktiska följden är att indata måste dela en enhet innan du dividerar, men resultatet självt bär ingen enhet, därför behandlar kalkylatorn alla indata som vanliga längder." },
          { "kind": "h3", "text": "Varför en triangel ger sex kvoter" },
          { "kind": "p", "text": "Varje kvot jämför ett annat sidpar. Sinus jämför motstående med hypotenusa, cosinus jämför närliggande med hypotenusa och tangens jämför motstående med närliggande. Cosekans, sekans och cotangens vänder motsvarande täljare och nämnare. Sex kvoter, tre sidpar, två riktningar per par. De motsäger inte varandra; de besvarar olika geometriska frågor om samma triangel, därför erbjuder en kalkylator alla sex lägena." }
        ]
      },
      "sec-six": {
        "h2": "De sex trigonometriska kvoterna i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Det här avsnittet förklarar varje kvot i samma format: vad den betyder, dess formel, vilka sidor den använder, varför bråket är ordnat som det är, ett uträknat exempel på 3-4-5-triangeln, vad talet betyder, när kvoten är användbar, hur den relaterar till en annan kvot och ett misstag att undvika." },
          { "kind": "h3", "text": "1. Sinus: motstående dividerat med hypotenusa" },
          { "kind": "p", "text": "Sinus jämför den motstående sidan med hypotenusan: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]. Hypotenusan är nämnaren eftersom den är den längsta sidan, vilket är det som håller sinus mellan 0 och 1 för spetsiga vinklar. Med [[a=3]] och [[c=5]]: [[\\sin(A)=3/5]], alltså [[[\\boxed{\\sin(A)=0.6}]]]. Resultatet betyder att den motstående sidan är 60 procent av hypotenusan. Sinus är användbart när den motstående sidan och hypotenusan är det kända paret, som att hitta en steges vinkel från dess höjd och längd. Det relaterar till cosinus som komplementär partner: sinus för den ena spetsiga vinkeln är lika med cosinus för den andra. Misstaget att undvika: 0.6 är en kvot, inte en vinkel på 0.6 grader." },
          { "kind": "h3", "text": "2. Cosinus: närliggande dividerat med hypotenusa" },
          { "kind": "p", "text": "Cosinus jämför den närliggande sidan med hypotenusan: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]. Både sinus och cosinus dividerar med hypotenusan, så båda ligger mellan 0 och 1; de skiljer sig endast i täljaren, därför beskriver sinus och cosinus olika aspekter av samma vinkel. Med [[b=4]] och [[c=5]]: [[\\cos(A)=4/5]], alltså [[[\\boxed{\\cos(A)=0.8}]]]. Den närliggande sidan är 80 procent av hypotenusan. Cosinus är användbart när den närliggande sidan och hypotenusan är kända, som ett taks horisontella sträcka och takstolens längd. Det relaterar till sinus genom identiteten [[\\sin^2(A)+\\cos^2(A)=1]]. Misstaget att undvika: att byta täljare och använda 3/5 för cosinus i stället för 4/5." },
          { "kind": "h3", "text": "3. Tangens: motstående dividerat med närliggande" },
          { "kind": "p", "text": "Tangens jämför den motstående sidan med den närliggande sidan: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]. Den hoppar över hypotenusan helt, vilket gör den till den naturliga kvoten för lutningsproblem där de två kateterna är de uppmätta storheterna. Med [[a=3]] och [[b=4]]: [[\\tan(A)=3/4]], alltså [[[\\boxed{\\tan(A)=0.75}]]]. Den motstående sidan är 75 procent så lång som den närliggande sidan. Tangens är den matematiska formen av stigning dividerat med sträcka, så den dyker upp i taklutning, ramper och väglutningar. Till skillnad från sinus och cosinus kan tangens överstiga 1 när den motstående sidan är längre än den närliggande sidan. Misstaget att undvika: att förväxla ett tangensvärde på 0.75 med 75 procent av en rät vinkel." },
          { "kind": "h3", "text": "4. Cotangens: närliggande dividerat med motstående" },
          { "kind": "p", "text": "Cotangens är reciproken av tangens: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]. Den vänder den sidjämförelse som tangens gör, så där tangens frågar hur brant en lutning är, frågar cotangens hur flack den är. Med [[b=4]] och [[a=3]]: [[\\cot(A)=4/3]], alltså [[[\\boxed{\\cot(A)\\approx1.3333}]]]. Likvärdigt: [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. Cotangens är användbart när ett problem naturligt ger närliggande över motstående, eller när en formel är skriven i reciprok form. Misstaget att undvika: att skriva cotangens som a/b, vilket är tangens." },
          { "kind": "h3", "text": "5. Sekans: hypotenusa dividerat med närliggande" },
          { "kind": "p", "text": "Sekans är reciproken av cosinus: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]. Att vända cosinus bråk sätter hypotenusan, den längsta sidan, överst, därför är sekans alltid större än 1 för en spetsig vinkel i en giltig rätvinklig triangel. Med [[c=5]] och [[b=4]]: [[\\sec(A)=5/4]], alltså [[[\\boxed{\\sec(A)=1.25}]]]. Likvärdigt: [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. Sekans är användbart i fysik- och ingenjörsformler som är formulerade med hypotenusan i täljaren. Misstaget att undvika: att förväxla sekans med cosinus, eller med den inversa cosinusfunktionen." },
          { "kind": "h3", "text": "6. Cosekans: hypotenusa dividerat med motstående" },
          { "kind": "p", "text": "Cosekans är reciproken av sinus: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]. Liksom sekans sätter den hypotenusan överst, så den är alltid större än 1 för spetsiga vinklar. Med [[c=5]] och [[a=3]]: [[\\csc(A)=5/3]], alltså [[[\\boxed{\\csc(A)\\approx1.6667}]]]. Likvärdigt: [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. Cosekans förekommer i våg- och svängningsmatematik där sinus reciprok är den praktiska formen. Misstaget att undvika: att förväxla cosekans med invers sinus; [[1/\\sin(A)]] är cosekans, medan [[\\sin^{-1}(r)]] återställer en vinkel." },
          { "kind": "p", "text": "Alla sex beräkningar avser samma referensvinkel [[A]]." }
        ],
        "table": {
          "headers": ["Kvot", "Formel", "Sidförhållande", "3-4-5-exempel"],
          "rows": [
            ["Sinus", "[[a/c]]", "Motstående / Hypotenusa", "[[3/5=0.6]]"],
            ["Cosinus", "[[b/c]]", "Närliggande / Hypotenusa", "[[4/5=0.8]]"],
            ["Tangens", "[[a/b]]", "Motstående / Närliggande", "[[3/4=0.75]]"],
            ["Cotangens", "[[b/a]]", "Närliggande / Motstående", "[[4/3\\approx1.3333]]"],
            ["Sekans", "[[c/b]]", "Hypotenusa / Närliggande", "[[5/4=1.25]]"],
            ["Cosekans", "[[c/a]]", "Hypotenusa / Motstående", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "3-4-5-triangel med sex paneler som visar sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        "figcaption": "En 3-4-5-triangel ger alla sex kvoterna: tre primära kvoter och deras tre reciproka."
      },
      "sec-choose": {
        "h2": "Hur man väljer rätt trigonometrisk kvot",
        "blocks": [
          { "kind": "p", "text": "Den bästa kvoten beror på vilka två sidlängder som finns i problemet. Varje sidpar tillåter två reciproka beräkningar, och kalkylatorns sex lägen matchar dessa parningar exakt:" },
          { "kind": "h3", "text": "Hur man använder sinusläget" },
          { "kind": "p", "text": "Välj sinusläget när den motstående sidan och hypotenusan är kända. Ange den motstående sidan i fältet \"Opposite a\" och hypotenusan i fältet \"Hypotenuse c\", klicka sedan på \"Beräkna sin(A)\". Inget läge kräver alla tre sidlängderna; varje läge begär exakt det par som dess kvot använder." },
          { "kind": "h3", "text": "Hur man använder cosinusläget" },
          { "kind": "p", "text": "Välj cosinusläget när den närliggande sidan och hypotenusan är kända. Ange den närliggande sidan i fältet \"Adjacent b\" och hypotenusan i fältet \"Hypotenuse c\", klicka sedan på \"Beräkna cos(A)\"." },
          { "kind": "h3", "text": "Hur man använder tangensläget" },
          { "kind": "p", "text": "Välj tangensläget när de två kateterna är kända. Ange den motstående sidan i fältet \"Opposite a\" och den närliggande sidan i fältet \"Adjacent b\", klicka sedan på \"Beräkna tan(A)\"." },
          { "kind": "h3", "text": "Hur man använder cotangensläget" },
          { "kind": "p", "text": "Välj cotangensläget när kateterna är kända och problemet är formulerat som närliggande över motstående. Ange den närliggande sidan först i fältet \"Adjacent b\" och den motstående sidan i fältet \"Opposite a\", klicka sedan på \"Beräkna cot(A)\"." },
          { "kind": "h3", "text": "Hur man använder sekansläget" },
          { "kind": "p", "text": "Välj sekansläget när hypotenusan och den närliggande sidan är kända. Ange hypotenusan i fältet \"Hypotenuse c\" och den närliggande sidan i fältet \"Adjacent b\", klicka sedan på \"Beräkna sec(A)\"." },
          { "kind": "h3", "text": "Hur man använder cosekansläget" },
          { "kind": "p", "text": "Välj cosekansläget när hypotenusan och den motstående sidan är kända. Ange hypotenusan i fältet \"Hypotenuse c\" och den motstående sidan i fältet \"Opposite a\", klicka sedan på \"Beräkna csc(A)\"." }
        ],
        "table": {
          "headers": ["Kända sidor", "Direkt kvot", "Reciprok kvot"],
          "rows": [
            ["Motstående och hypotenusa", "Sinus", "Cosekans"],
            ["Närliggande och hypotenusa", "Cosinus", "Sekans"],
            ["Motstående och närliggande", "Tangens", "Cotangens"]
          ]
        }
      },
      "sec-howto": {
        "h2": "Hur man använder trigkvotskalkylatorn för rätvinkliga trianglar",
        "blocks": [
          { "kind": "p", "text": "Följ dessa steg för vilket som helst av de sex lägena:" },
          { "kind": "p", "text": "Korrekt sididentifiering betyder mer än att memorera formler. De flesta felaktiga svaren på den här sidan kommer från ett bytt motstående och närliggande, inte från räknefel." }
        ],
        "steps": [
          "Identifiera referensvinkeln. Bestäm vilken spetsig vinkel problemet handlar om. Alla sidbeteckningar följer av detta val.",
          "Märk motstående, närliggande och hypotenusa. Sidan mitt emot referensvinkeln är motstående, kateten som vidrör den är närliggande, och sidan mitt emot den räta vinkeln är hypotenusan.",
          "Bestäm vilka två sidlängder som är kända. Varje läge behöver exakt ett par.",
          "Välj det läge som matchar dessa två sidor. Använd tabellen i föregående avsnitt för att välja sinus, cosinus, tangens, cotangens, sekans eller cosekans.",
          "Ange den första nödvändiga sidlängden. Fälten är märkta, till exempel \"Opposite a\" och \"Hypotenuse c\".",
          "Ange den andra nödvändiga sidlängden. Behåll ordningen som etiketterna visar: vissa lägen listar hypotenusan först.",
          "Välj kompatibla enheter. Använd enhetsväljarna vid varje inmatning så att båda mätningarna delar ett enhetssystem.",
          "Kontrollera att indata är positiva och giltiga. Båda kateterna måste vara positiva och hypotenusan måste vara längre än vardera katet.",
          "Klicka på beräkningsknappen. Till exempel \"Beräkna sin(A)\" i sinusläget.",
          "Granska resultatet och lösningsstegen. Kalkylatorn visar formeln, insättningen och det slutliga värdet.",
          "Kontrollera den levande visualiseringen. Bekräfta att triangelns diagrammärkningar matchar din avsedda referensvinkel.",
          "Använd Återställ för en ny beräkning. Knappen Återställ rensar alla fält så att nästa beräkning börjar från början."
        ],
        "closingParagraphs": [
          "Med motstående sida 3, närliggande sida 4 och hypotenusa 5, alla i samma enhet, är här vad varje läge behöver och ger:",
          "1. Sinusläge: Ange \"Opposite a\" = 3 och \"Hypotenuse c\" = 5, klicka på \"Beräkna sin(A)\". Resultat: 0.6.",
          "2. Cosinusläge: Ange \"Adjacent b\" = 4 och \"Hypotenuse c\" = 5, klicka på \"Beräkna cos(A)\". Resultat: 0.8.",
          "3. Tangensläge: Ange \"Opposite a\" = 3 och \"Adjacent b\" = 4, klicka på \"Beräkna tan(A)\". Resultat: 0.75.",
          "4. Cotangensläge: Ange \"Adjacent b\" = 4 och \"Opposite a\" = 3, klicka på \"Beräkna cot(A)\". Resultat: ungefär 1.3333.",
          "5. Sekansläge: Ange \"Hypotenuse c\" = 5 och \"Adjacent b\" = 4, klicka på \"Beräkna sec(A)\". Resultat: 1.25.",
          "6. Cosekansläge: Ange \"Hypotenuse c\" = 5 och \"Opposite a\" = 3, klicka på \"Beräkna csc(A)\". Resultat: ungefär 1.6667.",
          "Kvoterna är enhetslösa, så inmatningsmätningarna behöver bara kompatibla enheter, inte någon särskild enhet. Kalkylatorn beräknar inte saknade sidor eller vinklar från dessa lägen; den beräknar den begärda kvoten från de två sidor du anger."
        ]
      },
      "sec-foundations": {
        "h2": "Steg-för-steg-exempel på trigonometriska kvoter",
        "blocks": [
          { "kind": "p", "text": "Dessa fyra exempel bygger förståelse stegvis, från en grundläggande heltalstriangel till de exakta kvoterna för speciella trianglar." },
          { "kind": "h3", "text": "Exempel 1: En 3-4-5 rätvinklig triangel" },
          { "kind": "p", "text": "Med [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], beräkna alla sex kvoterna. Sinus: [[3/5=0.6]]. Cosinus: [[4/5=0.8]]. Tangens: [[3/4=0.75]]. Cotangens: [[4/3\\approx1.3333]]. Sekans: [[5/4=1.25]]. Cosekans: [[5/3\\approx1.6667]]. Kvoterna skiljer sig eftersom var och en jämför ett annat sidpar; de beskriver alla samma vinkel [[A]]." },
          { "kind": "h3", "text": "Exempel 2: En 5-12-13 rätvinklig triangel" },
          { "kind": "p", "text": "Med [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Sinus: [[5/13\\approx0.3846]]. Cosinus: [[12/13\\approx0.9231]]. Tangens: [[5/12\\approx0.4167]]. De reciproka: cosekans [[13/5=2.6]], sekans [[13/12\\approx1.0833]], cotangens [[12/5=2.4]]. Jämfört med 3-4-5-triangeln gör den längre närliggande sidan cosinus större och tangens mindre, vilket är hur en flackare vinkel ser ut i kvotform." },
          { "kind": "h3", "text": "Exempel 3: En 45-45-90-triangel" },
          { "kind": "p", "text": "Med [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Sinus och cosinus är lika: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangens och cotangens är båda lika med 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Sekans och cosekans är lika: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Lika kateter gör sinus lika med cosinus och tangens lika med 1; symmetrin mellan de två spetsiga vinklarna förklarar alla tre likheterna." },
          { "kind": "h3", "text": "Exempel 4: En 30-60-90-triangel" },
          { "kind": "p", "text": "För vinkel [[A=30^\\circ]], använd [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Sinus: [[1/2=0.5]]. Cosinus: [[\\sqrt{3}/2\\approx0.8660]]. Tangens: [[1/\\sqrt{3}\\approx0.5774]]. Cotangens: [[\\sqrt{3}\\approx1.7321]]. Sekans: [[2/\\sqrt{3}\\approx1.1547]]. Cosekans: [[2]]. Kvoterna för 30 och 60 grader hänger ihop: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] och [[\\tan(30^\\circ)=\\cot(60^\\circ)]], eftersom de komplementära vinklarna byter motstående och närliggande." }
        ]
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av trigonometriska kvoter",
        "blocks": [
          { "kind": "p", "text": "Varje exempel använder den kvot som passar situationen, inte alla sex. Varje exempel identifierar triangelmodellen, de kända sidorna, referensvinkeln och resultatets betydelse, med antaganden angivna där de spelar roll." },
          { "kind": "h3", "text": "Exempel 5: Beräkna taklutning" },
          { "kind": "p", "text": "Ett tak stiger 3 m över en horisontell sträcka på 4 m. Den förenklade triangeln använder stigningen som motstående sida (a = 3 m) och sträckan som närliggande sida (b = 4 m), med takytan som hypotenusa. Tangens passar eftersom båda kateterna är kända: [[\\tan(A)=3/4=0.75]]. Den procentuella lutningen är [[0.75\\times100\\%=75\\%]], och vinkeln är [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Lutningskvoten, den procentuella lutningen och vinkeln är tre sätt att säga samma sak: taket klättrar 0.75 m för varje 1 m sträcka. Detta är ett geometriexempel, inte en fullständig takkonstruktionsbedömning." },
          { "kind": "h3", "text": "Exempel 6: Förstå en stege mot en vägg" },
          { "kind": "p", "text": "En stege når 4 m upp på en vägg med basen 3 m från väggen. Vägghöjden är den motstående sidan (a = 4 m), markavståndet är den närliggande sidan (b = 3 m), och stegen är hypotenusan: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. För vinkeln mellan stegen och marken: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. Vinkeln är [[A\\approx53.13^\\circ]]. En triangel, en vinkel, tre olika kvoter, var och en betonar ett annat sidpar. Beräkningen fastställer inte stegens säkerhet." },
          { "kind": "h3", "text": "Exempel 7: Bedöma en ramps lutning" },
          { "kind": "p", "text": "En ramp stiger 0.6 m över en horisontell sträcka på 8 m. Tangens passar de två kateterna: [[\\tan(A)=0.6/8=0.075]]. Den procentuella lutningen är [[0.075\\times100\\%=7.5\\%]], och vinkeln är [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. En lutning på 7.5 % är inte en vinkel på 7.5 grader: procent är kvoten gånger 100, medan grader mäter själva vinkeln, och de skiljer sig snabbt åt efter små värden. Tillgänglighet och byggregler kräver ytterligare kontroller utöver denna geometri." },
          { "kind": "h3", "text": "Exempel 8: Mäta en byggnads höjd" },
          { "kind": "p", "text": "En observatör står 24 m horisontellt från en byggnad, och toppen är 18 m över ögonhöjd. Den närliggande sidan är 24 m och den motstående sidan är 18 m, så [[\\tan(A)=18/24=0.75]] och [[A\\approx36.87^\\circ]], elevationsvinkeln. Det raka siktavståndet är [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], vilket ger [[\\sin(A)=18/30=0.6]] och [[\\cos(A)=24/30=0.8]] för samma geometri. Resultatet är relativt ögonhöjd, inte nödvändigtvis byggnadens totala höjd." },
          { "kind": "h3", "text": "Exempel 9: Inmätning av en höjdskillnad" },
          { "kind": "p", "text": "En lantmätare modellerar en vertikal höjdskillnad på 15 m över ett horisontellt avstånd på 20 m. Tangens: [[\\tan(A)=15/20=0.75]]. Det raka avståndet är [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], så [[\\sin(A)=15/25=0.6]] och [[\\cos(A)=20/25=0.8]] beskriver samma inmätta triangel genom olika sidpar. Verklig inmätning kan behöva instrumenthöjdsjusteringar och korrigeringar utöver denna plana modell." },
          { "kind": "h3", "text": "Exempel 10: Uppskatta ett träds höjd från dess skugga" },
          { "kind": "p", "text": "Ett vertikalt träd kastar en 9 m skugga, och höjden över marken är 12 m. Med motstående 12 m och närliggande 9 m: [[\\tan(A)=12/9\\approx1.3333]]. Siktlinjens hypotenusa i den förenklade triangeln är [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], vilket ger [[\\sin(A)=12/15=0.8]] och [[\\cos(A)=9/15=0.6]]. Detta förutsätter plan mark, ett vertikalt träd och en skugga mätt till punkten rakt under kronan." },
          { "kind": "h3", "text": "Exempel 11: Förstå en staglina" },
          { "kind": "p", "text": "En staglina ansluter till en stolpe 12 m över marken, med fästet 5 m horisontellt från stolpen. Linans längd är [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Sinus: [[12/13\\approx0.9231]]. Cosinus: [[5/13\\approx0.3846]]. Tangens: [[12/5=2.4]]. Tangens överstiger 1 här eftersom den vertikala komponenten är längre än den horisontella sträckan; det är normalt, inte ett fel. Dessa kvoter säger inget om fästets styrka eller linans spänning." },
          { "kind": "h3", "text": "Exempel 12: Förstå trappgeometri" },
          { "kind": "p", "text": "En förenklad trappa har en total stigning på 2.4 m och en horisontell sträcka på 3.2 m, med diagonallängd [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Sinus: [[2.4/4=0.6]]. Cosinus: [[3.2/4=0.8]]. Tangens: [[2.4/3.2=0.75]]. Kvoterna beskriver trappans övergripande geometri, men de fastställer inte efterlevnad av trappregler, som också begränsar enskilda stegmått." },
          { "kind": "h3", "text": "Exempel 13: Förstå en kranarms riktning" },
          { "kind": "p", "text": "En förenklad kranarm har en vertikal komponent på 8 m och en horisontell projektion på 6 m, med [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Sinus [[8/10=0.8]] beskriver armens vertikala andel, cosinus [[6/10=0.6]] dess horisontella andel, och tangens [[8/6\\approx1.3333]] dess branthet. Trigonometriska kvoter ensamma bestämmer inte kranens kapacitet eller säker drift." },
          { "kind": "h3", "text": "Exempel 14: Uppskatta en vandringsleds lutning" },
          { "kind": "p", "text": "En rak sträcka av en led stiger 120 m i höjd över 800 m horisontellt. Tangens: [[\\tan(A)=120/800=0.15]]. Lutningen är [[15\\%]] och vinkeln är [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Denna modell med konstant lutning beskriver inte en slingrande led, men den ger en användbar medellutning för att planera ansträngning." },
          { "kind": "h3", "text": "Exempel 15: Kontrollera ett diagonalstag" },
          { "kind": "p", "text": "Ett diagonalstag har en vertikal komponent på 1.5 m och en horisontell komponent på 2 m, med [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Sinus: [[1.5/2.5=0.6]]. Cosinus: [[2/2.5=0.8]]. Tangens: [[1.5/2=0.75]]. Detta är 3-4-5-kvoterna i halv skala, vilket visar att proportionell skalning lämnar varje kvot oförändrad. Detta säger inget om stagets styrka eller lastkapacitet." },
          { "kind": "h3", "text": "Exempel 16: Förstå ett flygplans raka stigning" },
          { "kind": "p", "text": "En förenklad rak flygsträcka stiger 1.5 km vertikalt över 5 km horisontellt. Tangens: [[\\tan(A)=1.5/5=0.3]], så [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. Det raka avståndet är [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], vilket ger [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. Tangens använder markavstånd, sinus använder flygvägens avstånd; samma stigning, olika referenslängder. Detta är ett geometriexempel, inte en flygnavigeringsberäkning." },
          { "kind": "h3", "text": "Jämförelse av praktiska exempel" }
        ],
        "table": {
          "headers": ["Situation", "Kända mått", "Primär kvot", "Värde", "Tolkning"],
          "rows": [
            ["Taklutning", "Stigning 3 m, sträcka 4 m", "Tangens", "0.75", "75 % lutning, 36.87°"],
            ["Stege", "Höjd 4 m, bas 3 m", "Sinus", "0.8", "Vinkel mot marken 53.13°"],
            ["Ramp", "Stigning 0.6 m, sträcka 8 m", "Tangens", "0.075", "7.5 % lutning, 4.29°"],
            ["Byggnadshöjd", "Höjd 18 m, avstånd 24 m", "Tangens", "0.75", "Elevationsvinkel 36.87°"],
            ["Inmätning", "Stigning 15 m, sträcka 20 m", "Tangens", "0.75", "Samma form som taklutning"],
            ["Trädskugga", "Höjd 12 m, skugga 9 m", "Tangens", "1.3333", "Brantare än 45°"],
            ["Staglina", "Höjd 12 m, fäste 5 m", "Tangens", "2.4", "Linan mycket brantare än sträckan"],
            ["Trappa", "Stigning 2.4 m, sträcka 3.2 m", "Tangens", "0.75", "Samma kvoter som 3-4-5"],
            ["Kranarm", "Vertikal 8 m, horisontell 6 m", "Sinus", "0.8", "Mestadels vertikal räckvidd"],
            ["Vandringsled", "Stigning 120 m, sträcka 800 m", "Tangens", "0.15", "15 % medellutning"],
            ["Diagonalstag", "Vertikal 1.5 m, horisontell 2 m", "Sinus", "0.6", "Skalad 3-4-5-geometri"],
            ["Flygplansstigning", "Stigning 1.5 km, sträcka 5 km", "Tangens", "0.3", "16.70° stigningsvinkel"]
          ]
        },
        "imgAlt": "Fyra paneler: taklutning 0.75, stege sin 0.8, inmätning sin 0.6, ramp tan 0.075 med märkta trianglar",
        "figcaption": "Fyra verkliga problem: taklutning, stege, inmätning och ramp, var och en med sin triangel och nyckelkvot."
      },
      "sec-relate": {
        "h2": "Hur de sex trigonometriska kvoterna hänger ihop",
        "blocks": [
          { "kind": "p", "text": "De sex kvoterna är inte sex oberoende fakta. De bildar tre reciproka par, två kvotförhållanden och tre pythagoreiska identiteter. Att känna dessa samband förvandlar sex formler till ett system, och det ger dig verifieringsmetoder för varje beräkning." },
          { "kind": "h3", "text": "Reciproka par" },
          { "kind": "p", "text": "Varje reciprokt par multiplicerar till 1 eftersom bråken förkortas bort: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. På 3-4-5-triangeln: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Små avvikelser kommer från avrundade decimaler, inte från matematiken." },
          { "kind": "h3", "text": "Tangens som sinus dividerat med cosinus" },
          { "kind": "p", "text": "Kvotförhållandet [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] följer av att den gemensamma hypotenusan förkortas bort: [[(a/c)/(b/c)=a/b]]. Kontrollera med 3-4-5-värdena: [[0.6/0.8=0.75]], vilket stämmer med [[\\tan(A)]]. Detta är en användbar verifiering: om din tangens inte är lika med sinus dividerat med cosinus är en sida felmärkt." },
          { "kind": "h3", "text": "Cotangens som cosinus dividerat med sinus" },
          { "kind": "p", "text": "På samma sätt: [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]]. Med 3-4-5-värdena: [[0.8/0.6\\approx1.3333]], vilket stämmer med [[\\cot(A)]]. Cotangens ärver allt tangens vet, vänt." },
          { "kind": "h3", "text": "Den pythagoreiska trigonometriska identiteten" },
          { "kind": "p", "text": "Identiteten [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] följer direkt från Pythagoras sats: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. För 3-4-5-triangeln: [[0.6^2+0.8^2=0.36+0.64=1]]. Ytterligare två identiteter utökar mönstret: [[1+\\tan^2(A)=\\sec^2(A)]] och [[1+\\cot^2(A)=\\csc^2(A)]], som fås genom att dividera den första identiteten med cosinus kvadrat respektive sinus kvadrat. De är praktiska när ett problem ger en kvot och behöver en annan utan sidlängder." },
          { "kind": "h3", "text": "Hur komplementära vinklar påverkar kvoterna" },
          { "kind": "p", "text": "Eftersom [[A+C=90^\\circ]] byter ett byte av referensvinkel från [[A]] till [[C]] motstående och närliggande: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] och [[\\csc(A)=\\sec(C)]]. I 3-4-5-triangeln är [[\\sin(A)=3/5=0.6]] medan [[\\cos(C)=3/5=0.6]], eftersom sidan mitt emot [[A]] är närliggande [[C]]. Varje kvot vid den ena spetsiga vinkeln återkommer som dess kofunktion vid den andra." }
        ]
      },
      "sec-angles": {
        "h2": "Förstå trigonometriska kvoter vid olika vinklar",
        "blocks": [
          { "kind": "p", "text": "När en spetsig referensvinkel växer ändras kvoterna på förutsägbara sätt. Sinus ökar från nära 0 mot 1, medan cosinus minskar från nära 1 mot 0. Tangens ökar från nära 0 utan övre gräns, medan cotangens minskar från stora värden mot 0. Sekans ökar från nära 1 utan gräns, medan cosekans minskar från stora värden mot 1. Detta är gränsbeteenden nära 0 och 90 grader, inte värden som en spetsig vinkel i en giltig icke-degenererad rätvinklig triangel faktiskt uppnår vid ändpunkterna." },
          { "kind": "p", "text": "Mönstret är symmetriskt: sinus vid 30 grader är lika med cosinus vid 60 grader, vilket speglar det komplementära förhållandet. Cotangens, sekans och cosekans kommer från de reciproka förhållandena: till exempel vid 30 grader, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] och [[\\csc(30^\\circ)=1/0.5=2]]." }
        ],
        "table": {
          "headers": ["Vinkel", "Sinus", "Cosinus", "Tangens"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "Ungefär 0.8660", "Ungefär 0.5774"],
            ["[[45^\\circ]]", "Ungefär 0.7071", "Ungefär 0.7071", "1"],
            ["[[60^\\circ]]", "Ungefär 0.8660", "0.5", "Ungefär 1.7321"]
          ]
        },
        "imgAlt": "Flödesschema: välj sinus eller cosekans för motstående och hypotenusa, cosinus eller sekans för närliggande och hypotenusa, tangens eller cotangens för de två kateterna",
        "figcaption": "Välj kalkylatorläge efter det sidpar du känner till: varje par ger en direkt kvot och dess reciproka."
      },
      "sec-missing-side": {
        "h2": "Hur man beräknar en saknad sida i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Sexkvotskalkylatorn hittar kvoter från kända sidor. Att hitta en okänd sida från en känd vinkel och sida är en relaterad men annan uppgift, som löses genom att stuva om kvotformlerna. Detta är följeberäkningar, inte funktioner i själva kvotkalkylatorn." },
          { "kind": "h3", "text": "Hitta den motstående sidan med sinus" },
          { "kind": "p", "text": "Utgå från [[\\sin(A)=a/c]] och stuva om: [[[\\boxed{a=c\\sin(A)}]]]. Med hypotenusa 10 m och vinkel [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Hitta den närliggande sidan med cosinus" },
          { "kind": "p", "text": "Utgå från [[\\cos(A)=b/c]] och stuva om: [[[\\boxed{b=c\\cos(A)}]]]. Med hypotenusa 10 m och vinkel [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { "kind": "h3", "text": "Hitta den motstående sidan med tangens" },
          { "kind": "p", "text": "Utgå från [[\\tan(A)=a/b]] och stuva om: [[[\\boxed{a=b\\tan(A)}]]]. Med närliggande sida 8 m och vinkel [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. Tangens är särskilt användbart här eftersom det kopplar de två kateterna direkt, utan hypotenusa inblandad." }
        ]
      },
      "sec-inverse": {
        "h2": "Hur man hittar en vinkel från en trigonometrisk kvot",
        "blocks": [
          { "kind": "p", "text": "En trigonometrisk kvot är inte en vinkel. När kvoten är känd och vinkeln är okänd återställer inversa trigonometriska funktioner den spetsiga referensvinkeln: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] och [[A=\\tan^{-1}(r)]]. Dessa kallas invers sinus, invers cosinus och invers tangens, även kända som arcsin, arccos och arctan." },
          { "kind": "h3", "text": "Uträknat exempel med sinus" },
          { "kind": "p", "text": "Med [[\\sin(A)=0.6]] är vinkeln [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Uträknat exempel med cosinus" },
          { "kind": "p", "text": "Med [[\\cos(A)=0.8]] är vinkeln [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { "kind": "h3", "text": "Uträknat exempel med tangens" },
          { "kind": "p", "text": "Med [[\\tan(A)=0.75]] är vinkeln [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { "kind": "p", "text": "Alla tre återställer samma vinkel eftersom alla tre kvoterna beskriver samma 3-4-5-triangel. Skillnaden mellan en invers funktion och en reciprok spelar roll här: [[1/\\sin(A)=\\csc(A)]] är en reciprok, en annan kvot, medan [[\\sin^{-1}(r)]] är en invers funktion, som returnerar en vinkel. När du beräknar vinklar för hand, kontrollera om ditt verktyg är i grad- eller radianläge; den här sidans kalkylator arbetar endast med kvoter, så vinkelåterställning är ett separat steg." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid användning av trigonometriska kvoter",
        "blocks": [
          { "kind": "h3", "text": "Förväxla den motstående sidan med den närliggande sidan" },
          { "kind": "p", "text": "Beteckningarna beror på referensvinkeln. I en 3-4-5-triangel ger beräkningen [[4/5=0.8]] för sinus i själva verket cosinus. Åtgärd: markera referensvinkeln först, och märk sedan sidan mitt emot den som motstående." },
          { "kind": "h3", "text": "Identifiera sidor i förhållande till fel referensvinkel" },
          { "kind": "p", "text": "Att märka för vinkel C medan problemet frågar om vinkel A byter varje kvot. Åtgärd: skriv ner vilken vinkel som är referens innan du rör kalkylatorn." },
          { "kind": "h3", "text": "Använda sinus i stället för cosinus" },
          { "kind": "p", "text": "Sinus behöver den motstående sidan; cosinus behöver den närliggande sidan. Om du känner den närliggande sidan och hypotenusan men ändå beräknar [[a/c]] har du bytt kateter. Åtgärd: matcha kvoten med det kända paret med hjälp av tabellen i välj-avsnittet." },
          { "kind": "h3", "text": "Använda tangens när de kända sidorna är motstående och hypotenusa" },
          { "kind": "p", "text": "Tangens behöver de två kateterna. Med motstående och hypotenusa kända är den korrekta direkta kvoten sinus. Åtgärd: kontrollera vilket par du faktiskt har innan du väljer läge." },
          { "kind": "h3", "text": "Vända täljare och nämnare" },
          { "kind": "p", "text": "Att beräkna [[c/a]] när du menade sinus ger cosekans, ett värde över 1 i stället för under 1. Åtgärd: nämnaren är hypotenusan för sinus och cosinus, den närliggande kateten för tangens." },
          { "kind": "h3", "text": "Förväxla tangens med cotangens" },
          { "kind": "p", "text": "Tangens är [[a/b]]; cotangens är [[b/a]]. De är reciproka, så ett fel inverterar svaret. Åtgärd: läs lägesetiketten innan du anger värden." },
          { "kind": "h3", "text": "Förväxla cosinus med sekans" },
          { "kind": "p", "text": "Cosinus är [[b/c]], alltid under 1; sekans är [[c/b]], alltid över 1. Om din sekans blir under 1 beräknade du cosinus. Åtgärd: reciproka kvoter sätter hypotenusan överst." },
          { "kind": "h3", "text": "Förväxla sinus med cosekans" },
          { "kind": "p", "text": "Samma invertering: sinus är [[a/c]], cosekans är [[c/a]]. Åtgärd: kontrollera om ditt resultat ligger i det förväntade intervallet för det läge du valde." },
          { "kind": "h3", "text": "Anta att varje kvot måste vara mindre än 1" },
          { "kind": "p", "text": "Sinus och cosinus är under 1, men tangens, cotangens, sekans och cosekans kan alla överstiga 1. Ett tangensvärde på 2.4 är fullt giltigt för en brant lutning. Åtgärd: lär dig det giltiga intervallet för varje kvot." },
          { "kind": "h3", "text": "Anta att en kvot som 0.6 representerar en vinkel på 0.6 grader" },
          { "kind": "p", "text": "En kvot är ett rent tal, inte ett gradmått. Vinkeln bakom [[\\sin(A)=0.6]] är cirka 36.87 grader, som hittas med invers sinus. Åtgärd: kvoter svarar på \"hur förhåller sig sidorna\"; inversa funktioner svarar på \"vad är vinkeln\"." },
          { "kind": "h3", "text": "Glömma att kvoter är dimensionslösa" },
          { "kind": "p", "text": "Att ange motstående i tum och hypotenusa i fot förstör kvoten, eftersom enheterna inte längre förkortas bort. Åtgärd: konvertera båda indata till en enhet först." },
          { "kind": "h3", "text": "Blanda inkompatibla mätenheter" },
          { "kind": "p", "text": "Samma grundorsak, värd att upprepa: en kvot av 3 tum mot 5 centimeter är inte 0.6. Åtgärd: använd enhetsväljarna på båda inmatningarna innan du beräknar." },
          { "kind": "h3", "text": "Ange noll eller negativa sidlängder" },
          { "kind": "p", "text": "En triangelsida måste vara positiv. Noll eller negativa indata beskriver ingen triangel, och kalkylatorn kan inte producera en meningsfull kvot. Åtgärd: mät om eller läs problemet igen." },
          { "kind": "h3", "text": "Använda sidlängder som inte bildar en giltig rätvinklig triangel" },
          { "kind": "p", "text": "Om sidorna inte klarar Pythagoras-kontrollen, till exempel 2, 3 och 10, finns ingen rätvinklig triangel med de längderna. Åtgärd: verifiera [[a^2+b^2=c^2]] innan du beräknar kvoter." },
          { "kind": "h3", "text": "Avrunda för tidigt" },
          { "kind": "p", "text": "Att avrunda en mellanliggande kvot till en decimal och sedan multiplicera förstorar felet. Åtgärd: behåll full precision genom varje steg och avrunda endast det slutliga svaret." },
          { "kind": "h3", "text": "Förväxla reciproka kvoter med inversa trigonometriska funktioner" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] är en kvot; [[\\sin^{-1}(0.6)]] är en vinkel. Den liknande notationen orsakar verklig förvirring. Åtgärd: reciproka vänder bråk, inversa funktioner återställer vinklar." },
          { "kind": "h3", "text": "Behandla hypotenusan som en av kateterna" },
          { "kind": "p", "text": "Hypotenusan är alltid den längsta sidan och alltid mitt emot den räta vinkeln. Att tilldela den som katet bryter varje kvot. Åtgärd: hitta den längsta sidan först och märk den c." },
          { "kind": "h3", "text": "Anta att de sex kvoterna har samma värde" },
          { "kind": "p", "text": "I en 3-4-5-triangel löper de sex värdena från 0.6 till 1.6667. Endast speciella trianglar som 45-45-90 gör vissa kvoter lika. Åtgärd: förvänta dig sex olika tal från en triangel." },
          { "kind": "h3", "text": "Anta att samma sida alltid är motstående" },
          { "kind": "p", "text": "Sidan mitt emot vinkel A är närliggande vinkel C. Varje uträknat svar måste ange sin referensvinkel. Åtgärd: märk om sidorna närhelst referensvinkeln ändras." },
          { "kind": "h3", "text": "Behandla ett förenklat resultat som ingenjörsbevis" },
          { "kind": "p", "text": "En kvotkontroll på ett stag eller en staglina beskriver geometri, inte styrka, spänning eller regelefterlevnad. Åtgärd: använd kvoter för geometristeget, och kvalificerad ingenjörsanalys för säkerhetsbeslut." },
          { "kind": "h3", "text": "Fel kontra rätt: Ett konkret exempel" },
          { "kind": "p", "text": "Med [[a=3]], [[b=4]], [[c=5]] använder en felaktig sinusberäkning fel sidpar: [[3/4=0.75]]. Det är tangenskvoten, inte sinus. Den korrekta beräkningen är [[\\sin(A)=3/5=0.6]]. Verifiera med kvotförhållandet: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Att identifiera rätt sidor är avgörande, eftersom räkningen är trivial när sidorna är rätt." }
        ]
      },
      "sec-verify": {
        "h2": "Hur man kontrollerar att trigonometriska resultat är giltiga",
        "blocks": [
          { "kind": "p", "text": "En giltig, icke-degenererad rätvinklig triangel kräver positiva kateter, en hypotenusa längre än vardera katet, sidor som uppfyller Pythagoras sats, kompatibla enheter, rätt sidpar för den valda kvoten, och reciproka par som stämmer överens. Fyra snabba metoder täcker allt detta." },
          { "kind": "h3", "text": "Verifieringsmetod 1: Kontrollera sidlängderna" },
          { "kind": "p", "text": "För 3-4-5-triangeln: [[3^2+4^2=5^2]], eller [[9+16=25]]. Att klara Pythagoras-kontrollen bekräftar att sidorna beskriver en verklig rätvinklig triangel innan du litar på någon kvot som härleds från dem." },
          { "kind": "h3", "text": "Verifieringsmetod 2: Kontrollera de reciproka paren" },
          { "kind": "p", "text": "Varje direkt-reciprokt par måste multiplicera till 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Små skillnader kommer från avrundade decimaler." },
          { "kind": "h3", "text": "Verifieringsmetod 3: Kontrollera tangens med sinus och cosinus" },
          { "kind": "p", "text": "Kvotförhållandet ger en oberoende kontroll: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Om kalkylatorns tangensläge och denna beräkning inte stämmer överens var en sida felmärkt." },
          { "kind": "h3", "text": "Verifieringsmetod 4: Kontrollera den inversa vinkeln" },
          { "kind": "p", "text": "Räkna fram vinkeln igen och se om den är rimlig: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Ett spetsigt resultat mellan 0 och 90 grader som matchar triangelns form bekräftar kvoterna." }
        ]
      },
      "sec-conclusion": {
        "h2": "Behärska alla sex kvoter med en triangel",
        "blocks": [
          { "kind": "p", "text": "Varje kvot på den här sidan kommer från samma tre sidor och en referensvinkel. Märk triangeln, matcha sidparet med läget, och låt kalkylatorn sköta räkningen. Sinus, cosinus och tangens besvarar de direkta jämförelserna; cosekans, sekans och cotangens vänder dem. SOH-CAH-TOA påminner om de tre första, reciprokregeln påminner om resten, och identiteten sinus kvadrat plus cosinus kvadrat lika med 1 binder sinus och cosinus samman. Verifiera med Pythagoras-kontrollen och de reciproka produkterna, och återvänd sedan till kalkylatorn överst på sidan för att köra dina tal." }
        ]
      }
    },
    "faqs": [
      { "question": "Vilka är de sex trigonometriska kvoterna i en rätvinklig triangel?", "answer": "De sex kvoterna är sinus (motstående över hypotenusa), cosinus (närliggande över hypotenusa), tangens (motstående över närliggande), cotangens (närliggande över motstående), sekans (hypotenusa över närliggande) och cosekans (hypotenusa över motstående). De tre första är de primära kvoterna; de tre sista är deras reciproka." },
      { "question": "Hur beräknar man sinus, cosinus och tangens?", "answer": "Identifiera referensvinkeln och dividera sedan rätt sidpar. Sinus är motstående dividerat med hypotenusa, cosinus är närliggande dividerat med hypotenusa, och tangens är motstående dividerat med närliggande. För en 3-4-5-triangel ger det 3/5 = 0.6, 4/5 = 0.8 och 3/4 = 0.75." },
      { "question": "Vad är skillnaden mellan direkta och reciproka trigonometriska kvoter?", "answer": "Direkta kvoter (sinus, cosinus, tangens) sätter den mindre sidjämförelsen först, medan reciproka kvoter (cosekans, sekans, cotangens) vänder bråket. Cosekans är 1/sinus, sekans är 1/cosinus och cotangens är 1/tangens. Varje par multiplicerar till 1." },
      { "question": "Varför är trigonometriska kvoter dimensionslösa?", "answer": "En kvot dividerar en längd med en annan, så enheterna förkortas bort. 3 meter dividerat med 5 meter är 0.6, och 300 centimeter dividerat med 500 centimeter är också 0.6. Resultatet bär ingen enhet, därför behöver båda indata bara dela ett enhetssystem." },
      { "question": "Hur väljer jag rätt kalkylatorläge?", "answer": "Matcha läget med ditt kända sidpar. Motstående och hypotenusa: sinus- eller cosekansläge. Närliggande och hypotenusa: cosinus- eller sekansläge. De två kateterna: tangens- eller cotangensläge. Den direkta kvoten och dess reciproka använder samma två indata i omvänd ordning." },
      { "question": "Kan en tangens- eller cotangenskvot vara större än 1?", "answer": "Ja. Tangens jämför de två kateterna, så den överstiger 1 när den motstående sidan är längre än den närliggande sidan, som i en brant lutning. Cotangens överstiger 1 när den närliggande sidan är längre. Endast sinus och cosinus är begränsade till 1, eftersom deras nämnare är den längsta sidan." },
      { "question": "Varför är sekans och cosekans större än 1 för spetsiga vinklar?", "answer": "Båda sätter hypotenusan, triangelns längsta sida, i täljaren. Att dividera den längsta sidan med en kortare sida ger alltid ett värde över 1. För en 3-4-5-triangel är sekans 5/4 = 1.25 och cosekans 5/3, ungefär 1.6667." },
      { "question": "Hur hittar jag en vinkel från en trigonometrisk kvot?", "answer": "Använd en invers trigonometrisk funktion: arcsin för en sinuskvot, arccos för cosinus, arctan för tangens. Om sinus till exempel är 0.6 är vinkeln arcsin(0.6), ungefär 36.87 grader. Observera att detta skiljer sig från reciproken: 1/sinus är cosekans, inte arcsin." },
      { "question": "Hur beräknar jag en saknad sida med trigonometri?", "answer": "Stuva om kvotformeln. Med en känd vinkel och hypotenusa är den motstående sidan hypotenusan gånger sinus för vinkeln, och den närliggande sidan är hypotenusan gånger cosinus. Med den närliggande sidan känd är den motstående sidan den närliggande sidan gånger tangens för vinkeln." },
      { "question": "Vad är skillnaden mellan invers sinus och cosekans?", "answer": "Invers sinus (arcsin) tar en kvot och returnerar en vinkel: arcsin(0.6) är ungefär 36.87 grader. Cosekans tar samma kvot och returnerar dess reciproka: 1/0.6 är ungefär 1.6667, fortfarande en kvot. Den ena upphäver sinusfunktionen; den andra vänder bråket." },
      { "question": "Hur kan jag verifiera mina trigonometriska beräkningar?", "answer": "Fyra kontroller: bekräfta att sidorna uppfyller Pythagoras sats, bekräfta att varje reciprokt par multiplicerar till 1, bekräfta att tangens är lika med sinus dividerat med cosinus, och återställ vinkeln med en invers funktion för att se att den är spetsig och rimlig. Överensstämmelse mellan kontrollerna betyder att sidbeteckningarna är korrekta." },
      { "question": "Hur används trigonometriska kvoter i verkligheten?", "answer": "De omvandlar uppmätta sidor till vinklar och lutningar: taklutning från stigning och sträcka, stegevinklar från höjd och basavstånd, ramplutningar, byggnaders elevationsvinklar, inmätningens siktlinjer, kranarmens riktning och leders lutning. Kvoten ger geometrin; separata ingenjörskontroller hanterar säkerheten." }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Sinuskvotskalkylator",
      "Cosinuskvotskalkylator",
      "Tangenskvotskalkylator",
      "Cotangenskvotskalkylator",
      "Sekanskvotskalkylator",
      "Cosekanskvotskalkylator",
      "Vinkelkalkylator för rätvinkliga trianglar",
      "Sidokalkylator för rätvinklig triangel med vinkel",
      "Kalkylator för speciella rätvinkliga trianglar"
    ]
  },
  "zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "什么是直角三角形三角比计算器?",
      "sec-triangle": "理解直角三角形的边",
      "sec-ratios": "理解三角比",
      "sec-six": "直角三角形的六个三角比",
      "sec-choose": "如何选择正确的三角比",
      "sec-howto": "如何使用直角三角形三角比计算器",
      "sec-foundations": "三角比的分步示例",
      "sec-applications": "三角比的实际应用",
      "sec-relate": "六个三角比之间的关系",
      "sec-angles": "理解不同角度下的三角比",
      "sec-missing-side": "如何计算直角三角形的未知边",
      "sec-inverse": "如何由三角比求角度",
      "sec-mistakes": "使用三角比时的常见错误",
      "sec-verify": "如何验证三角计算结果是否有效",
      "sec-related": "相关计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "结论"
    },
    "sections": {
      "sec-intro": {
        "h2": "什么是直角三角形三角比计算器?",
        "blocks": [
          { "kind": "p", "text": "直角三角形三角比计算器根据直角三角形的边长计算六个三角比: 正弦、余弦、正切、余切、正割和余割。每个三角比都是相对于所选锐角参考角, 对特定边对的比较。本页的计算器提供六种模式, 每种三角比一种, 您只需输入该三角比所需的两条边, 即可立即得到结果。" },
          { "kind": "p", "text": "这些三角比取决于参考角, 而不仅仅取决于三角形。对于同一个三角形, 改变所依据的锐角会交换两条直角边的角色, 因此三角比的值也会变化。这就是计算器模式按已知边对组织的原因: 对边和斜边给出正弦, 邻边和斜边给出余弦, 两条直角边给出正切。倒数模式则从相同的边对给出余割、正割和余切。" },
          { "kind": "p", "text": "考虑一个 3-4-5 三角形, 对边为 3, 邻边为 4, 斜边为 5。一个三角形产生六个不同的值: [[\\sin(A)=3/5=0.6]]、[[\\cos(A)=4/5=0.8]] 和 [[\\tan(A)=3/4=0.75]], 以及倒数三角比 [[\\csc(A)\\approx1.6667]]、[[\\sec(A)=1.25]] 和 [[\\cot(A)\\approx1.3333]]。每个三角比都是对同一形状提出的不同问题。理解公式后, 您可以用手验算任何结果, 这是发现边标注错误的最可靠方法。" }
        ]
      },
      "sec-triangle": {
        "h2": "理解直角三角形的边",
        "blocks": [
          { "kind": "p", "text": "每个三角比都是两条边的比较, 因此正确命名各边是后续一切内容的基础。本指南通篇使用一套约定: [[A]] 是左下角的锐角参考角, [[B]] 是右下角的直角, [[C]] 是顶部的另一个锐角, 边 [[a]] 是垂直直角边, 边 [[b]] 是水平底边, 边 [[c]] 是倾斜的斜边。" },
          { "kind": "h3", "text": "什么是直角三角形?" },
          { "kind": "p", "text": "直角三角形有一个角恰好为 90 度, 另外两个角为锐角。两条直角边在直角处相交, 斜边位于直角的对面。因为三个内角之和为 180 度, 两个锐角互余: [[A+C=90^\\circ]]。直角三角形适合三角计算, 因为固定一个锐角就完全确定了三角形的形状: 具有相同锐角的所有直角三角形都相似, 因此它们的边比一致。" },
          { "kind": "h3", "text": "什么是对边?" },
          { "kind": "p", "text": "对边正好位于所选参考角的对面。在我们的约定中, 边 [[a]] 是角 [[A]] 的对边。在实际问题中, 对边常表示垂直高度、高差或坡度的垂直分量。它的角色并不固定在某条边上: 如果参考角改变, 另一条边就成为对边。" },
          { "kind": "h3", "text": "什么是邻边?" },
          { "kind": "p", "text": "邻边与参考角相接, 但不是斜边。在我们的约定中, 边 [[b]] 是角 [[A]] 的邻边。它常表示水平距离、地面距离或水平投影。在三条边中, 邻边最容易与对边混淆, 而这一次交换是得出错误三角比值的最常见原因。" },
          { "kind": "h3", "text": "什么是斜边?" },
          { "kind": "p", "text": "斜边位于直角的对面, 始终是三角形最长的边。在我们的约定中, 它是倾斜的边 [[c]]。在实际情况中, 它可以表示梯子、缆绳、倾斜的屋顶支撑或直线视距。它出现在正弦、余弦、正割和余割公式中, 但不直接出现在正切和余切公式中, 后两者比较的是两条直角边。" },
          { "kind": "h3", "text": "为什么参考角很重要" },
          { "kind": "p", "text": "对边和邻边是相对的标注, 不是固定的名称。对于角 [[A]], 对边是 [[a]], 邻边是 [[b]]。对于角 [[C]], 标注交换: 对边是 [[b]], 邻边是 [[a]]。无论哪个锐角作为参考, 斜边始终是 [[c]]。在标注任何边之前, 请先确定您要依据哪个角进行测量。" }
        ],
        "imgAlt": "直角三角形, 左下角突出显示角 A, 金色对边 a, 蓝色邻边 b, 灰色斜边 c, B 处为直角",
        "figcaption": "直角三角形的结构: A 是参考角, B 是 90 度角, 对边和邻边是相对于 A 定义的。"
      },
      "sec-ratios": {
        "h2": "理解三角比",
        "blocks": [
          { "kind": "p", "text": "三角比是直角三角形中相对于所选锐角的两条边长的比较。它描述三角形的形状, 而不是大小: 把每条边都加倍, 六个三角比保持完全不变, 因为分子和分母乘以了相同的因子。3-4-5 三角形和按比例放大的 6-8-10 三角形具有相同的正弦、余弦、正切和倒数值。这种与大小无关的特性使三角比非常有用: 它们把角度捕捉为纯数字。" },
          { "kind": "h3", "text": "理解 SOH-CAH-TOA" },
          { "kind": "p", "text": "SOH-CAH-TOA 是三个基本三角比的标准记忆口诀。SOH: 正弦 = 对边 / 斜边。CAH: 余弦 = 邻边 / 斜边。TOA: 正切 = 对边 / 邻边。每一句都可以读成一句话: 某角的正弦等于该角对边长度除以斜边。这个口诀涵盖正弦、余弦和正切; 倒数三角比来自第二条规则: 把分数翻转。余割翻转正弦, 正割翻转余弦, 余切翻转正切。" },
          { "kind": "h3", "text": "为什么三角比是无量纲的" },
          { "kind": "p", "text": "三角比是一个长度除以另一个长度, 因此单位被约掉了: [[3\\text{ m}/5\\text{ m}=0.6]]。用厘米表示, 同一个三角形给出 [[300\\text{ cm}/500\\text{ cm}=0.6]], 完全相同的数字。更换兼容的测量单位永远不会改变三角比。实际意义是: 相除之前输入必须使用同一单位, 但结果本身不带单位, 这就是计算器把所有输入都当作普通长度处理的原因。" },
          { "kind": "h3", "text": "为什么一个三角形产生六个三角比" },
          { "kind": "p", "text": "每个三角比比较不同的边对。正弦比较对边与斜边, 余弦比较邻边与斜边, 正切比较对边与邻边。余割、正割和余切则把相应的分子和分母反过来。六个三角比, 三个边对, 每对两个方向。它们并不互相矛盾; 它们回答的是关于同一个三角形的不同几何问题, 这就是一个计算器提供全部六种模式的原因。" }
        ]
      },
      "sec-six": {
        "h2": "直角三角形的六个三角比",
        "blocks": [
          { "kind": "p", "text": "本节用统一的格式讲解每个三角比: 它的含义、公式、使用哪两条边、分数为什么这样排列、在 3-4-5 三角形上的计算示例、数字的含义、何时有用、它与另一个三角比的关系, 以及一个要避免的错误。" },
          { "kind": "h3", "text": "1. 正弦: 对边除以斜边" },
          { "kind": "p", "text": "正弦比较对边与斜边: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]。斜边作为分母是因为它是最长的边, 这正是锐角的正弦值保持在 0 到 1 之间的原因。当 [[a=3]]、[[c=5]] 时: [[\\sin(A)=3/5]], 即 [[[\\boxed{\\sin(A)=0.6}]]]。结果表示对边是斜边的 60%。当已知边对是对边和斜边时, 正弦很有用, 例如由梯子的高度和长度求梯子与地面的夹角。它与余弦是互余搭档: 一个锐角的正弦等于另一个锐角的余弦。要避免的错误: 0.6 是一个比值, 不是 0.6 度的角。" },
          { "kind": "h3", "text": "2. 余弦: 邻边除以斜边" },
          { "kind": "p", "text": "余弦比较邻边与斜边: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]。正弦和余弦都除以斜边, 因此都在 0 到 1 之间; 它们只在分子上不同, 这就是正弦和余弦描述同一角度不同方面的原因。当 [[b=4]]、[[c=5]] 时: [[\\cos(A)=4/5]], 即 [[[\\boxed{\\cos(A)=0.8}]]]。邻边是斜边的 80%。当邻边和斜边已知时, 余弦很有用, 例如屋顶的水平距离和椽的长度。它通过恒等式 [[\\sin^2(A)+\\cos^2(A)=1]] 与正弦相关联。要避免的错误: 交换分子, 对余弦用了 3/5 而不是 4/5。" },
          { "kind": "h3", "text": "3. 正切: 对边除以邻边" },
          { "kind": "p", "text": "正切比较对边与邻边: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]。它完全跳过斜边, 因此是坡度问题的自然选择, 因为两条直角边正是测量的量。当 [[a=3]]、[[b=4]] 时: [[\\tan(A)=3/4]], 即 [[[\\boxed{\\tan(A)=0.75}]]]。对边是邻边长度的 75%。正切是“垂直升高比水平距离”的数学形式, 因此出现在屋顶坡度、坡道和道路坡度中。与正弦和余弦不同, 当对边长于邻边时, 正切可以超过 1。要避免的错误: 把 0.75 的正切值误认为直角的 75%。" },
          { "kind": "h3", "text": "4. 余切: 邻边除以对边" },
          { "kind": "p", "text": "余切是正切的倒数: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]]。它反转了正切所做的边比较, 因此正切问的是坡有多陡, 余切问的是坡有多缓。当 [[b=4]]、[[a=3]] 时: [[\\cot(A)=4/3]], 即 [[[\\boxed{\\cot(A)\\approx1.3333}]]]。等价地, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]。当问题自然地给出邻边比对边, 或公式写成倒数形式时, 余切很有用。要避免的错误: 把余切写成 a/b, 那是正切。" },
          { "kind": "h3", "text": "5. 正割: 斜边除以邻边" },
          { "kind": "p", "text": "正割是余弦的倒数: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]]。把余弦的分数翻转, 就把最长的边，斜边放到了上面, 这就是在有效的直角三角形中, 锐角的正割总是大于 1 的原因。当 [[c=5]]、[[b=4]] 时: [[\\sec(A)=5/4]], 即 [[[\\boxed{\\sec(A)=1.25}]]]。等价地, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]。正割在分子为斜边的物理和工程公式中很有用。要避免的错误: 把正割与余弦混淆, 或与反余弦函数混淆。" },
          { "kind": "h3", "text": "6. 余割: 斜边除以对边" },
          { "kind": "p", "text": "余割是正弦的倒数: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]]。与正割一样, 它把斜边放在上面, 因此锐角的余割总是大于 1。当 [[c=5]]、[[a=3]] 时: [[\\csc(A)=5/3]], 即 [[[\\boxed{\\csc(A)\\approx1.6667}]]]。等价地, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]。余割出现在波动和振动数学中, 那里正弦的倒数是更方便的形式。要避免的错误: 把余割与反正弦混淆; [[1/\\sin(A)]] 是余割, 而 [[\\sin^{-1}(r)]] 求出的是角度。" },
          { "kind": "p", "text": "六个计算都针对同一个参考角 [[A]]。" }
        ],
        "table": {
          "headers": ["三角比", "公式", "边的关系", "3-4-5 示例"],
          "rows": [
            ["正弦", "[[a/c]]", "对边 / 斜边", "[[3/5=0.6]]"],
            ["余弦", "[[b/c]]", "邻边 / 斜边", "[[4/5=0.8]]"],
            ["正切", "[[a/b]]", "对边 / 邻边", "[[3/4=0.75]]"],
            ["余切", "[[b/a]]", "邻边 / 对边", "[[4/3\\approx1.3333]]"],
            ["正割", "[[c/b]]", "斜边 / 邻边", "[[5/4=1.25]]"],
            ["余割", "[[c/a]]", "斜边 / 对边", "[[5/3\\approx1.6667]]"]
          ]
        },
        "imgAlt": "3-4-5 三角形, 六个面板分别显示 sin 0.6、cos 0.8、tan 0.75、cot 1.3333、sec 1.25、csc 1.6667",
        "figcaption": "一个 3-4-5 三角形产生全部六个三角比: 三个基本三角比和它们的三个倒数。"
      },
      "sec-choose": {
        "h2": "如何选择正确的三角比",
        "blocks": [
          { "kind": "p", "text": "最佳三角比取决于问题中已知的两条边长。每个边对允许两种互为倒数的计算, 计算器的六种模式与这些配对完全对应:" },
          { "kind": "h3", "text": "如何使用正弦模式" },
          { "kind": "p", "text": "当对边和斜边已知时选择正弦模式。在 \"Opposite a\" 字段输入对边, 在 \"Hypotenuse c\" 字段输入斜边, 然后点击 \"计算 sin(A)\"。没有一种模式需要全部三条边长; 每种模式只需要其三角比使用的那一对边。" },
          { "kind": "h3", "text": "如何使用余弦模式" },
          { "kind": "p", "text": "当邻边和斜边已知时选择余弦模式。在 \"Adjacent b\" 字段输入邻边, 在 \"Hypotenuse c\" 字段输入斜边, 然后点击 \"计算 cos(A)\"。" },
          { "kind": "h3", "text": "如何使用正切模式" },
          { "kind": "p", "text": "当两条直角边已知时选择正切模式。在 \"Opposite a\" 字段输入对边, 在 \"Adjacent b\" 字段输入邻边, 然后点击 \"计算 tan(A)\"。" },
          { "kind": "h3", "text": "如何使用余切模式" },
          { "kind": "p", "text": "当直角边已知且问题表述为邻边比对边时选择余切模式。先在 \"Adjacent b\" 字段输入邻边, 再在 \"Opposite a\" 字段输入对边, 然后点击 \"计算 cot(A)\"。" },
          { "kind": "h3", "text": "如何使用正割模式" },
          { "kind": "p", "text": "当斜边和邻边已知时选择正割模式。在 \"Hypotenuse c\" 字段输入斜边, 在 \"Adjacent b\" 字段输入邻边, 然后点击 \"计算 sec(A)\"。" },
          { "kind": "h3", "text": "如何使用余割模式" },
          { "kind": "p", "text": "当斜边和对边已知时选择余割模式。在 \"Hypotenuse c\" 字段输入斜边, 在 \"Opposite a\" 字段输入对边, 然后点击 \"计算 csc(A)\"。" }
        ],
        "table": {
          "headers": ["已知边", "直接三角比", "倒数三角比"],
          "rows": [
            ["对边和斜边", "正弦", "余割"],
            ["邻边和斜边", "余弦", "正割"],
            ["对边和邻边", "正切", "余切"]
          ]
        }
      },
      "sec-howto": {
        "h2": "如何使用直角三角形三角比计算器",
        "blocks": [
          { "kind": "p", "text": "对六种模式中的任何一种, 请按以下步骤操作:" },
          { "kind": "p", "text": "正确识别各边比记住公式更重要。本页大多数错误答案来自对边和邻边标反了, 而不是算术错误。" }
        ],
        "steps": [
          "确定参考角。判断问题是关于哪个锐角, 所有的边标注都由此决定。",
          "标注对边、邻边和斜边。参考角对面的边是对边, 与它相接的直角边是邻边, 直角对面的边是斜边。",
          "确定已知的两条边长。每种模式只需要一对边。",
          "选择与这两条边匹配的模式。用上一节的表格选择正弦、余弦、正切、余切、正割或余割。",
          "输入第一条所需的边长。字段有标注, 例如 \"Opposite a\" 和 \"Hypotenuse c\"。",
          "输入第二条所需的边长。保持标签显示的顺序: 有些模式把斜边列在前面。",
          "选择兼容的单位。使用每个输入旁的单位选择器, 使两个测量值使用同一单位制。",
          "检查输入为正数且有效。两条直角边必须为正数, 斜边必须长于任一直角边。",
          "点击计算按钮。例如, 在正弦模式下点击 \"计算 sin(A)\"。",
          "查看结果和解题步骤。计算器会显示公式、代入过程和最终值。",
          "检查实时可视化图。确认三角形图上的标注与您设定的参考角一致。",
          "用重置按钮开始新的计算。重置按钮会清空所有字段, 让下一次计算从头开始。"
        ],
        "closingParagraphs": [
          "已知对边 3、邻边 4、斜边 5, 且单位一致, 下面是每种模式的输入和返回结果:",
          "1. 正弦模式: 在 \"Opposite a\" 输入 3, 在 \"Hypotenuse c\" 输入 5, 点击 \"计算 sin(A)\"。结果: 0.6。",
          "2. 余弦模式: 在 \"Adjacent b\" 输入 4, 在 \"Hypotenuse c\" 输入 5, 点击 \"计算 cos(A)\"。结果: 0.8。",
          "3. 正切模式: 在 \"Opposite a\" 输入 3, 在 \"Adjacent b\" 输入 4, 点击 \"计算 tan(A)\"。结果: 0.75。",
          "4. 余切模式: 在 \"Adjacent b\" 输入 4, 在 \"Opposite a\" 输入 3, 点击 \"计算 cot(A)\"。结果: 约 1.3333。",
          "5. 正割模式: 在 \"Hypotenuse c\" 输入 5, 在 \"Adjacent b\" 输入 4, 点击 \"计算 sec(A)\"。结果: 1.25。",
          "6. 余割模式: 在 \"Hypotenuse c\" 输入 5, 在 \"Opposite a\" 输入 3, 点击 \"计算 csc(A)\"。结果: 约 1.6667。",
          "三角比没有单位, 因此输入的测量值只需单位兼容, 不必是特定单位。这些模式不会求出未知的边或角; 计算器只根据您提供的两条边计算所请求的三角比。"
        ]
      },
      "sec-foundations": {
        "h2": "三角比的分步示例",
        "blocks": [
          { "kind": "p", "text": "这四个示例循序渐进地建立理解, 从基本的整数三角形到特殊三角形的精确三角比。" },
          { "kind": "h3", "text": "例 1: 3-4-5 直角三角形" },
          { "kind": "p", "text": "已知 [[a=3\\text{ cm}]]、[[b=4\\text{ cm}]]、[[c=5\\text{ cm}]], 计算全部六个三角比。正弦: [[3/5=0.6]]。余弦: [[4/5=0.8]]。正切: [[3/4=0.75]]。余切: [[4/3\\approx1.3333]]。正割: [[5/4=1.25]]。余割: [[5/3\\approx1.6667]]。各三角比不同是因为它们比较不同的边对; 它们描述的都是同一个角 [[A]]。" },
          { "kind": "h3", "text": "例 2: 5-12-13 直角三角形" },
          { "kind": "p", "text": "已知 [[a=5\\text{ m}]]、[[b=12\\text{ m}]]、[[c=13\\text{ m}]]。正弦: [[5/13\\approx0.3846]]。余弦: [[12/13\\approx0.9231]]。正切: [[5/12\\approx0.4167]]。倒数: 余割 [[13/5=2.6]], 正割 [[13/12\\approx1.0833]], 余切 [[12/5=2.4]]。与 3-4-5 三角形相比, 更长的邻边使余弦更大、正切更小, 这正是较缓的角用三角比表达的样子。" },
          { "kind": "h3", "text": "例 3: 45-45-90 三角形" },
          { "kind": "p", "text": "已知 [[a=1]]、[[b=1]]、[[c=\\sqrt{2}]]。正弦和余弦相等: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]。正切和余切都等于 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]。正割和余割相等: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]。相等的直角边使正弦等于余弦、正切等于 1; 两个锐角之间的对称性解释了这三个等式。" },
          { "kind": "h3", "text": "例 4: 30-60-90 三角形" },
          { "kind": "p", "text": "对于角 [[A=30^\\circ]], 取 [[a=1]]、[[b=\\sqrt{3}]]、[[c=2]]。正弦: [[1/2=0.5]]。余弦: [[\\sqrt{3}/2\\approx0.8660]]。正切: [[1/\\sqrt{3}\\approx0.5774]]。余切: [[\\sqrt{3}\\approx1.7321]]。正割: [[2/\\sqrt{3}\\approx1.1547]]。余割: [[2]]。30 度和 60 度的三角比相互关联: [[\\sin(30^\\circ)=\\cos(60^\\circ)]]、[[\\cos(30^\\circ)=\\sin(60^\\circ)]] 和 [[\\tan(30^\\circ)=\\cot(60^\\circ)]], 因为互余的两角交换了对边和邻边。" }
        ]
      },
      "sec-applications": {
        "h2": "三角比的实际应用",
        "blocks": [
          { "kind": "p", "text": "每个示例只使用适合该情境的三角比, 而不是六个全用。每个示例都指明三角形模型、已知边、参考角和结果的含义, 在重要的地方说明假设条件。" },
          { "kind": "h3", "text": "例 5: 计算屋顶坡度" },
          { "kind": "p", "text": "屋顶在 4 米水平距离上升高 3 米。简化三角形以升高作为对边(a = 3 米), 以水平距离作为邻边(b = 4 米), 屋顶表面为斜边。正切适用, 因为两条直角边都已知: [[\\tan(A)=3/4=0.75]]。坡度百分比为 [[0.75\\times100\\%=75\\%]], 角度为 [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]。坡度比、坡度百分比和角度是同一件事的三种说法: 屋顶每水平延伸 1 米就升高 0.75 米。这是一个几何示例, 不是完整的屋顶设计评估。" },
          { "kind": "h3", "text": "例 6: 理解靠墙的梯子" },
          { "kind": "p", "text": "梯子靠墙达到 4 米高, 梯脚离墙 3 米。墙高是对边(a = 4 米), 地面距离是邻边(b = 3 米), 梯子是斜边: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]。对于梯子与地面的夹角: [[\\sin(A)=4/5=0.8]]、[[\\cos(A)=3/5=0.6]]、[[\\tan(A)=4/3\\approx1.3333]]。角度为 [[A\\approx53.13^\\circ]]。一个三角形, 一个角, 三个不同的三角比, 各自强调不同的边对。这个计算不能证明梯子安全。" },
          { "kind": "h3", "text": "例 7: 评估坡道的坡度" },
          { "kind": "p", "text": "坡道在 8 米水平距离上升高 0.6 米。正切适合这两条直角边: [[\\tan(A)=0.6/8=0.075]]。坡度百分比为 [[0.075\\times100\\%=7.5\\%]], 角度为 [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]。7.5% 的坡度不是 7.5 度的角: 百分比是比值乘以 100, 而度数度量的是角本身, 超过较小数值后两者迅速分化。无障碍和建筑规范合规还需要几何之外的额外检查。" },
          { "kind": "h3", "text": "例 8: 测量建筑物的高度" },
          { "kind": "p", "text": "观察者站在离建筑物水平 24 米处, 楼顶在视线水平之上 18 米。邻边为 24 米, 对边为 18 米, 因此 [[\\tan(A)=18/24=0.75]], [[A\\approx36.87^\\circ]], 即仰角。直线视距为 [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], 同一几何给出 [[\\sin(A)=18/30=0.6]] 和 [[\\cos(A)=24/30=0.8]]。结果是相对于视线水平的, 不一定是建筑物的总高度。" },
          { "kind": "h3", "text": "例 9: 测量高差" },
          { "kind": "p", "text": "测量员把 20 米水平距离上的 15 米垂直高差建模为三角形。正切: [[\\tan(A)=15/20=0.75]]。直线距离为 [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], 因此 [[\\sin(A)=15/25=0.6]] 和 [[\\cos(A)=20/25=0.8]] 通过不同的边对描述同一个测得的三角形。实际测量可能需要在这个平面模型之外进行仪器高改正和其他修正。" },
          { "kind": "h3", "text": "例 10: 由树影估算树高" },
          { "kind": "p", "text": "一棵垂直的树投下 9 米长的影子, 树高 12 米。对边 12 米, 邻边 9 米: [[\\tan(A)=12/9\\approx1.3333]]。简化三角形的视线斜边为 [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], 给出 [[\\sin(A)=12/15=0.8]] 和 [[\\cos(A)=9/15=0.6]]。这假设地面水平、树木垂直, 且影子量到树冠正下方的位置。" },
          { "kind": "h3", "text": "例 11: 理解拉线" },
          { "kind": "p", "text": "拉线连接到电线杆离地 12 米处, 锚点离杆水平 5 米。拉线长度为 [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]。正弦: [[12/13\\approx0.9231]]。余弦: [[5/13\\approx0.3846]]。正切: [[12/5=2.4]]。这里正切超过 1, 因为垂直分量长于水平距离; 这是正常的, 不是错误。这些三角比说明不了锚点的强度或拉线的张力。" },
          { "kind": "h3", "text": "例 12: 理解楼梯几何" },
          { "kind": "p", "text": "简化的楼梯总升高 2.4 米, 水平距离 3.2 米, 对角线长度 [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]。正弦: [[2.4/4=0.6]]。余弦: [[3.2/4=0.8]]。正切: [[2.4/3.2=0.75]]。三角比描述楼梯的整体几何, 但不能证明符合楼梯规范, 规范还限制单个台阶的尺寸。" },
          { "kind": "h3", "text": "例 13: 理解起重机吊臂的方向" },
          { "kind": "p", "text": "简化的起重机吊臂垂直分量 8 米, 水平投影 6 米, [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]。正弦 [[8/10=0.8]] 描述吊臂的垂直占比, 余弦 [[6/10=0.6]] 描述水平占比, 正切 [[8/6\\approx1.3333]] 描述陡度。仅靠三角比确定不了起重机的载重能力或安全操作。" },
          { "kind": "h3", "text": "例 14: 估算徒步小径的坡度" },
          { "kind": "p", "text": "小径的一段直线在 800 米水平距离上爬升 120 米。正切: [[\\tan(A)=120/800=0.15]]。坡度为 [[15\\%]], 角度为 [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]。这个等坡度模型描述不了蜿蜒的小径, 但它给出了规划体力消耗的有用平均坡度。" },
          { "kind": "h3", "text": "例 15: 检查机械斜撑" },
          { "kind": "p", "text": "斜撑的垂直分量 1.5 米, 水平分量 2 米, [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]。正弦: [[1.5/2.5=0.6]]。余弦: [[2/2.5=0.8]]。正切: [[1.5/2=0.75]]。这是半尺寸的 3-4-5 三角比, 说明按比例缩放不改变任何三角比。这说明不了斜撑的强度或承载能力。" },
          { "kind": "h3", "text": "例 16: 理解飞机的直线爬升" },
          { "kind": "p", "text": "简化的直线航段在 5 公里水平距离上垂直爬升 1.5 公里。正切: [[\\tan(A)=1.5/5=0.3]], 因此 [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]。直线距离为 [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], 给出 [[\\sin(A)\\approx1.5/5.22\\approx0.287]]。正切用的是地面距离, 正弦用的是航迹距离; 同一次爬升, 参考长度不同。这是一个几何示例, 不是飞行导航计算。" },
          { "kind": "h3", "text": "实际示例对比" }
        ],
        "table": {
          "headers": ["情境", "已知测量值", "主要三角比", "数值", "解释"],
          "rows": [
            ["屋顶坡度", "升高 3 米, 水平距离 4 米", "正切", "0.75", "75% 坡度, 36.87°"],
            ["梯子", "高度 4 米, 底距 3 米", "正弦", "0.8", "与地面的夹角 53.13°"],
            ["坡道", "升高 0.6 米, 水平距离 8 米", "正切", "0.075", "7.5% 坡度, 4.29°"],
            ["建筑物高度", "高度 18 米, 距离 24 米", "正切", "0.75", "仰角 36.87°"],
            ["测量", "升高 15 米, 水平距离 20 米", "正切", "0.75", "与屋顶坡度形状相同"],
            ["树影", "高度 12 米, 影长 9 米", "正切", "1.3333", "比 45° 更陡"],
            ["拉线", "高度 12 米, 锚点 5 米", "正切", "2.4", "拉线比水平距离陡得多"],
            ["楼梯", "升高 2.4 米, 水平距离 3.2 米", "正切", "0.75", "与 3-4-5 的比值相同"],
            ["起重机吊臂", "垂直 8 米, 水平 6 米", "正弦", "0.8", "主要是垂直延伸"],
            ["徒步小径", "升高 120 米, 水平距离 800 米", "正切", "0.15", "平均坡度 15%"],
            ["机械斜撑", "垂直 1.5 米, 水平 2 米", "正弦", "0.6", "按比例缩小的 3-4-5 几何"],
            ["飞机爬升", "升高 1.5 公里, 水平距离 5 公里", "正切", "0.3", "爬升角 16.70°"]
          ]
        },
        "imgAlt": "四个面板: 屋顶坡度 0.75、梯子 sin 0.8、测量 sin 0.6、坡道 tan 0.075, 均带标注的三角形",
        "figcaption": "四个实际问题: 屋顶坡度、梯子、测量和坡道, 每个都给出三角形和关键三角比。"
      },
      "sec-relate": {
        "h2": "六个三角比之间的关系",
        "blocks": [
          { "kind": "p", "text": "六个三角比不是六个孤立的事实。它们构成三对倒数、两个商关系和三个勾股恒等式。掌握这些联系, 六个公式就变成一个体系, 并且每次计算都有了验证方法。" },
          { "kind": "h3", "text": "倒数对" },
          { "kind": "p", "text": "每对倒数相乘等于 1, 因为分数约掉了: [[\\sin(A)\\csc(A)=1]]、[[\\cos(A)\\sec(A)=1]]、[[\\tan(A)\\cot(A)=1]]。在 3-4-5 三角形上: [[0.6\\times1.6667\\approx1]]、[[0.8\\times1.25=1]]、[[0.75\\times1.3333\\approx1]]。微小的差异来自小数四舍五入, 而不是数学本身。" },
          { "kind": "h3", "text": "正切是正弦除以余弦" },
          { "kind": "p", "text": "商关系 [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] 来自约掉共同的斜边: [[(a/c)/(b/c)=a/b]]。用 3-4-5 的值验证: [[0.6/0.8=0.75]], 与 [[\\tan(A)]] 一致。这是一个有用的验证: 如果您的正切不等于正弦除以余弦, 说明某条边标错了。" },
          { "kind": "h3", "text": "余切是余弦除以正弦" },
          { "kind": "p", "text": "同理, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]]。用 3-4-5 的值: [[0.8/0.6\\approx1.3333]], 与 [[\\cot(A)]] 一致。余切继承了正切的一切, 只是翻转了过来。" },
          { "kind": "h3", "text": "三角勾股恒等式" },
          { "kind": "p", "text": "恒等式 [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] 直接来自勾股定理: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]。对于 3-4-5 三角形: [[0.6^2+0.8^2=0.36+0.64=1]]。另外两个恒等式延续了这个模式: [[1+\\tan^2(A)=\\sec^2(A)]] 和 [[1+\\cot^2(A)=\\csc^2(A)]], 分别由第一个恒等式除以余弦平方和正弦平方得到。当问题给出一个三角比而需要另一个、且没有边长时, 它们很方便。" },
          { "kind": "h3", "text": "互余角如何影响三角比" },
          { "kind": "p", "text": "因为 [[A+C=90^\\circ]], 把参考角从 [[A]] 换成 [[C]] 会交换对边和邻边: [[\\sin(A)=\\cos(C)]]、[[\\cos(A)=\\sin(C)]]、[[\\tan(A)=\\cot(C)]]、[[\\cot(A)=\\tan(C)]]、[[\\sec(A)=\\csc(C)]] 和 [[\\csc(A)=\\sec(C)]]。在 3-4-5 三角形中, [[\\sin(A)=3/5=0.6]] 而 [[\\cos(C)=3/5=0.6]], 因为 [[A]] 的对边正是 [[C]] 的邻边。一个锐角处的每个三角比, 都会以余函数的形式在另一个锐角处重现。" }
        ]
      },
      "sec-angles": {
        "h2": "理解不同角度下的三角比",
        "blocks": [
          { "kind": "p", "text": "当锐角参考角增大时, 各三角比以可预测的方式变化。正弦从接近 0 增大到接近 1, 余弦从接近 1 减小到接近 0。正切从接近 0 开始无上限地增大, 余切从很大的值减小到接近 0。正割从接近 1 开始无上限地增大, 余割从很大的值减小到接近 1。这些是 0 度和 90 度附近的极限行为, 不是有效非退化直角三角形中锐角在端点处真正能取到的值。" },
          { "kind": "p", "text": "这个模式是对称的: 30 度的正弦等于 60 度的余弦, 反映了互余关系。余切、正割和余割来自倒数关系: 例如在 30 度时, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] 且 [[\\csc(30^\\circ)=1/0.5=2]]。" }
        ],
        "table": {
          "headers": ["角度", "正弦", "余弦", "正切"],
          "rows": [
            ["[[30^\\circ]]", "0.5", "约 0.8660", "约 0.5774"],
            ["[[45^\\circ]]", "约 0.7071", "约 0.7071", "1"],
            ["[[60^\\circ]]", "约 0.8660", "0.5", "约 1.7321"]
          ]
        },
        "imgAlt": "流程图: 对边和斜边选正弦或余割, 邻边和斜边选余弦或正割, 两条直角边选正切或余切",
        "figcaption": "根据已知的边对选择计算器模式: 每一对边给出一个直接三角比及其倒数。"
      },
      "sec-missing-side": {
        "h2": "如何计算直角三角形的未知边",
        "blocks": [
          { "kind": "p", "text": "六三角比计算器由已知边求三角比。由已知角和边求未知边是相关但不同的任务, 通过对三角比公式变形来解决。这些是配套计算, 不是三角比计算器本身的功能。" },
          { "kind": "h3", "text": "用正弦求对边" },
          { "kind": "p", "text": "从 [[\\sin(A)=a/c]] 出发, 变形得: [[[\\boxed{a=c\\sin(A)}]]]。已知斜边 10 米、角 [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]。" },
          { "kind": "h3", "text": "用余弦求邻边" },
          { "kind": "p", "text": "从 [[\\cos(A)=b/c]] 出发, 变形得: [[[\\boxed{b=c\\cos(A)}]]]。已知斜边 10 米、角 [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]。" },
          { "kind": "h3", "text": "用正切求对边" },
          { "kind": "p", "text": "从 [[\\tan(A)=a/b]] 出发, 变形得: [[[\\boxed{a=b\\tan(A)}]]]。已知邻边 8 米、角 [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]。正切在这里特别有用, 因为它直接连接两条直角边, 不涉及斜边。" }
        ]
      },
      "sec-inverse": {
        "h2": "如何由三角比求角度",
        "blocks": [
          { "kind": "p", "text": "三角比不是角。当三角比已知而角未知时, 反三角函数可以求出锐角参考角: [[A=\\sin^{-1}(r)]]、[[A=\\cos^{-1}(r)]] 和 [[A=\\tan^{-1}(r)]]。它们分别称为反正弦、反余弦和反正切, 也叫 arcsin、arccos 和 arctan。" },
          { "kind": "h3", "text": "用正弦计算的示例" },
          { "kind": "p", "text": "已知 [[\\sin(A)=0.6]], 则角为 [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]。" },
          { "kind": "h3", "text": "用余弦计算的示例" },
          { "kind": "p", "text": "已知 [[\\cos(A)=0.8]], 则角为 [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。" },
          { "kind": "h3", "text": "用正切计算的示例" },
          { "kind": "p", "text": "已知 [[\\tan(A)=0.75]], 则角为 [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]。" },
          { "kind": "p", "text": "三者求出的是同一个角, 因为三个三角比描述的是同一个 3-4-5 三角形。反函数和倒数的区别在这里很关键: [[1/\\sin(A)=\\csc(A)]] 是倒数, 是另一个三角比, 而 [[\\sin^{-1}(r)]] 是反函数, 返回的是角度。手工计算角度时, 请检查工具处于角度制还是弧度制; 本页的计算器只计算三角比, 求角是单独的步骤。" }
        ]
      },
      "sec-mistakes": {
        "h2": "使用三角比时的常见错误",
        "blocks": [
          { "kind": "h3", "text": "把对边与邻边混淆" },
          { "kind": "p", "text": "边的标注取决于参考角。在 3-4-5 三角形中, 对正弦计算 [[4/5=0.8]] 实际上得到的是余弦。改正: 先标出参考角, 再把该角对面的边标为对边。" },
          { "kind": "h3", "text": "相对于错误的参考角识别各边" },
          { "kind": "p", "text": "问题问的是角 A, 却按角 C 标注, 会使每个三角比都错位。改正: 在碰计算器之前, 先写下哪个角是参考角。" },
          { "kind": "h3", "text": "用正弦代替余弦" },
          { "kind": "p", "text": "正弦需要对边, 余弦需要邻边。如果已知邻边和斜边, 却仍然计算 [[a/c]], 说明两条直角边标反了。改正: 用选择一节的表格, 让三角比与已知边对匹配。" },
          { "kind": "h3", "text": "已知边是对边和斜边时用了正切" },
          { "kind": "p", "text": "正切需要两条直角边。已知对边和斜边时, 正确的直接三角比是正弦。改正: 选择模式前先确认实际拥有的是哪一对边。" },
          { "kind": "h3", "text": "分子分母颠倒" },
          { "kind": "p", "text": "想求正弦却算了 [[c/a]], 得到的是余割, 值大于 1 而不是小于 1。改正: 正弦和余弦的分母是斜边, 正切的分母是邻直角边。" },
          { "kind": "h3", "text": "把正切与余切混淆" },
          { "kind": "p", "text": "正切是 [[a/b]], 余切是 [[b/a]]。它们互为倒数, 一次错误就会把答案颠倒。改正: 输入数值前先读清模式标签。" },
          { "kind": "h3", "text": "把余弦与正割混淆" },
          { "kind": "p", "text": "余弦是 [[b/c]], 总是小于 1; 正割是 [[c/b]], 总是大于 1。如果您的正割算出来小于 1, 那您算的是余弦。改正: 倒数三角比把斜边放在上面。" },
          { "kind": "h3", "text": "把正弦与余割混淆" },
          { "kind": "p", "text": "同样的颠倒: 正弦是 [[a/c]], 余割是 [[c/a]]。改正: 检查结果是否落在所选模式的预期范围内。" },
          { "kind": "h3", "text": "认为每个三角比都必须小于 1" },
          { "kind": "p", "text": "正弦和余弦小于 1, 但正切、余切、正割和余割都可以超过 1。陡坡的正切为 2.4 是完全有效的。改正: 记住每个三角比的有效范围。" },
          { "kind": "h3", "text": "认为 0.6 这样的比值代表 0.6 度的角" },
          { "kind": "p", "text": "比值是纯数字, 不是角度度量。[[\\sin(A)=0.6]] 背后的角约为 36.87 度, 要用反正弦求出。改正: 三角比回答“边之间如何比较”, 反函数回答“角是多少”。" },
          { "kind": "h3", "text": "忘记三角比是无量纲的" },
          { "kind": "p", "text": "对边用英寸、斜边用英尺输入会破坏三角比, 因为单位约不掉了。改正: 先把两个输入换算成同一单位。" },
          { "kind": "h3", "text": "混用不兼容的测量单位" },
          { "kind": "p", "text": "同样的根源, 值得重复: 3 英寸比 5 厘米不是 0.6。改正: 计算前在两个输入上都使用单位选择器。" },
          { "kind": "h3", "text": "输入零或负的边长" },
          { "kind": "p", "text": "三角形的边必须为正数。零或负输入描述不了任何三角形, 计算器也给不出有意义的三角比。改正: 重新测量或重新读题。" },
          { "kind": "h3", "text": "使用的边长构不成有效的直角三角形" },
          { "kind": "p", "text": "如果边不满足勾股检验, 例如 2、3 和 10, 则不存在具有这些长度的直角三角形。改正: 计算三角比前先验证 [[a^2+b^2=c^2]]。" },
          { "kind": "h3", "text": "过早四舍五入" },
          { "kind": "p", "text": "把中间三角比四舍五入到一位小数再相乘, 会放大误差。改正: 每一步都保留完整精度, 只对最终答案四舍五入。" },
          { "kind": "h3", "text": "把倒数三角比与反三角函数混淆" },
          { "kind": "p", "text": "[[\\csc(A)=1/\\sin(A)]] 是一个三角比; [[\\sin^{-1}(0.6)]] 是一个角。相似的记号确实会造成混淆。改正: 倒数翻转分数, 反函数求出角度。" },
          { "kind": "h3", "text": "把斜边当作一条直角边" },
          { "kind": "p", "text": "斜边总是最长的边, 且总在直角的对面。把它当作直角边会破坏每个三角比。改正: 先找出最长的边并标为 c。" },
          { "kind": "h3", "text": "认为六个三角比的值相同" },
          { "kind": "p", "text": "在 3-4-5 三角形中, 六个值从 0.6 到 1.6667 各不相同。只有 45-45-90 这样的特殊三角形才会让某些三角比相等。改正: 一个三角形应得到六个不同的数。" },
          { "kind": "h3", "text": "认为同一条边永远是对边" },
          { "kind": "p", "text": "角 A 的对边是角 C 的邻边。每个计算答案都必须说明其参考角。改正: 参考角一变, 就重新标注各边。" },
          { "kind": "h3", "text": "把简化结果当作工程证明" },
          { "kind": "p", "text": "对斜撑或拉线的三角比检验描述的是几何, 不是强度、张力或规范合规。改正: 用三角比完成几何这一步, 安全决策要用合格的工程分析。" },
          { "kind": "h3", "text": "错误与正确: 一个具体例子" },
          { "kind": "p", "text": "已知 [[a=3]]、[[b=4]]、[[c=5]], 错误的正弦计算用了错误的边对: [[3/4=0.75]]。那是正切比, 不是正弦。正确的计算是 [[\\sin(A)=3/5=0.6]]。用商关系验证: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]。识别正确的边至关重要, 因为边对了, 算术就是小事。" }
        ]
      },
      "sec-verify": {
        "h2": "如何验证三角计算结果是否有效",
        "blocks": [
          { "kind": "p", "text": "一个有效的非退化直角三角形要求: 直角边为正数, 斜边长于任一直角边, 各边满足勾股定理, 单位兼容, 所选三角比的边对正确, 且倒数对一致。以下四个快速方法覆盖全部要点。" },
          { "kind": "h3", "text": "验证方法 1: 检查边长" },
          { "kind": "p", "text": "对于 3-4-5 三角形: [[3^2+4^2=5^2]], 即 [[9+16=25]]。通过勾股检验, 就能在信任由这些边导出的任何三角比之前, 确认它们描述的是真实的直角三角形。" },
          { "kind": "h3", "text": "验证方法 2: 检查倒数对" },
          { "kind": "p", "text": "每对直接三角比与倒数相乘必须等于 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]]、[[\\cos(A)\\sec(A)=0.8\\times1.25=1]]、[[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]。微小差异来自小数四舍五入。" },
          { "kind": "h3", "text": "验证方法 3: 用正弦和余弦检验正切" },
          { "kind": "p", "text": "商关系给出独立的检验: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]。如果计算器的正切模式与这个计算不一致, 说明某条边标错了。" },
          { "kind": "h3", "text": "验证方法 4: 检验反函数求出的角" },
          { "kind": "p", "text": "求出角并看它是否合理: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]。得到 0 到 90 度之间的锐角, 且与三角形形状相符, 就证实了这些三角比。" }
        ]
      },
      "sec-conclusion": {
        "h2": "用一个三角形掌握全部六个三角比",
        "blocks": [
          { "kind": "p", "text": "本页的每个三角比都来自相同的三条边和一个参考角。标好三角形, 让边对与模式匹配, 算术交给计算器。正弦、余弦和正切回答直接比较; 余割、正割和余切把它们翻转。SOH-CAH-TOA 记住前三个, 倒数规则记住后三个, 正弦平方加余弦平方等于 1 的恒等式把正弦和余弦连在一起。用勾股检验和倒数乘积验证, 然后回到本页顶部的计算器运行您的数字。" }
        ]
      }
    },
    "faqs": [
      { "question": "直角三角形的六个三角比是什么?", "answer": "六个三角比是: 正弦(对边比斜边)、余弦(邻边比斜边)、正切(对边比邻边)、余切(邻边比对边)、正割(斜边比邻边)和余割(斜边比对边)。前三个是基本三角比, 后三个是它们的倒数。" },
      { "question": "如何计算正弦、余弦和正切?", "answer": "先确定参考角, 再用正确的边对相除。正弦是对边除以斜边, 余弦是邻边除以斜边, 正切是对边除以邻边。对于 3-4-5 三角形, 结果为 3/5 = 0.6、4/5 = 0.8 和 3/4 = 0.75。" },
      { "question": "直接三角比和倒数三角比有什么区别?", "answer": "直接三角比(正弦、余弦、正切)把较小的边比较放在前面, 而倒数三角比(余割、正割、余切)把分数翻转。余割是 1/正弦, 正割是 1/余弦, 余切是 1/正切。每一对相乘都等于 1。" },
      { "question": "为什么三角比是无量纲的?", "answer": "三角比是一个长度除以另一个长度, 单位被约掉了。3 米除以 5 米是 0.6, 300 厘米除以 500 厘米也是 0.6。结果没有单位, 因此两个输入只需使用同一单位制。" },
      { "question": "如何选择正确的计算器模式?", "answer": "根据已知的边对选择模式。对边和斜边: 正弦或余割模式。邻边和斜边: 余弦或正割模式。两条直角边: 正切或余切模式。直接三角比与其倒数使用相同的两个输入, 只是顺序相反。" },
      { "question": "正切或余切的值可以大于 1 吗?", "answer": "可以。正切比较两条直角边, 因此当对边长于邻边时(如陡坡), 它就大于 1。当邻边较长时, 余切大于 1。只有正弦和余弦被限制在 1 以内, 因为它们的分母是最长的边。" },
      { "question": "为什么锐角的正割和余割大于 1?", "answer": "它们都把斜边(三角形最长的边)放在分子上。用最长的边除以任何较短的边, 结果总是大于 1。对于 3-4-5 三角形, 正割是 5/4 = 1.25, 余割是 5/3, 约 1.6667。" },
      { "question": "如何由三角比求角度?", "answer": "使用反三角函数: 正弦用 arcsin, 余弦用 arccos, 正切用 arctan。例如, 若正弦为 0.6, 则角度为 arcsin(0.6), 约 36.87 度。注意这与倒数不同: 1/正弦是余割, 不是 arcsin。" },
      { "question": "如何用三角函数计算未知边?", "answer": "对三角比公式进行变形。已知角度和斜边时, 对边等于斜边乘以该角的正弦, 邻边等于斜边乘以该角的余弦。已知邻边时, 对边等于邻边乘以该角的正切。" },
      { "question": "反正弦和余割有什么区别?", "answer": "反正弦(arcsin)接受一个比值并返回角度: arcsin(0.6) 约为 36.87 度。余割接受同一个比值并返回其倒数: 1/0.6 约为 1.6667, 仍然是一个比值。一个是撤销正弦函数, 另一个是翻转分数。" },
      { "question": "如何验证我的三角计算?", "answer": "四个检查: 确认边满足勾股定理, 确认每一对倒数相乘等于 1, 确认正切等于正弦除以余弦, 以及用反函数求出角度, 看它是否为合理的锐角。各检查一致, 说明边的标注正确。" },
      { "question": "三角比在现实生活中有哪些应用?", "answer": "它们把测量的边长转换为角度和坡度: 由升高和水平距离求屋顶坡度, 由高度和底距求梯子角度, 坡道坡度, 建筑物仰角, 测量视线, 起重机吊臂方向, 小径坡度。三角比给出几何关系, 安全则由专门的工程检查负责。" }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "正弦比计算器",
      "余弦比计算器",
      "正切比计算器",
      "余切比计算器",
      "正割比计算器",
      "余割比计算器",
      "直角三角形角度计算器",
      "用角度求直角三角形边长计算器",
      "特殊直角三角形计算器"
    ]
  }
};
