/**
 * areaFromAngleGuideTranslations.batch3c.ts
 * Right Triangle Area From Angle Guide (Page 18 of 45): translations for
 * Swedish (sv) and Chinese (zh).
 */
export const AREA_FROM_ANGLE_TRANSLATIONS_BATCH3C = {
  "sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Så beräknar du arean av en rätvinklig triangel utifrån en vinkel",
      "sec-geometry": "Förstå sidorna och vinklarna i en rätvinklig triangel",
      "sec-sine": "Varför använder areaformeln sinus?",
      "sec-mode1": "Så hittar du arean med sidan b, hypotenusan c och vinkeln A",
      "sec-mode2": "Så hittar du arean med sidan a, hypotenusan c och vinkeln B",
      "sec-same": "Två vinkelbaserade formler, en rätvinklig triangel",
      "sec-howto": "Så använder du kalkylatorn för triangelarea utifrån vinkel",
      "sec-foundations": "Steg-för-steg-exempel på triangelarea utifrån en vinkel",
      "sec-applications": "Verkliga tillämpningar av triangelarea utifrån vinkel",
      "sec-consistency": "Så kontrollerar du om sidlängderna och vinkeln bildar en rätvinklig triangel",
      "sec-alternatives": "Alternativa sätt att hitta rätvinklig triangelarea med vinklar",
      "sec-angle-effect": "Hur påverkar den spetsiga vinkeln den rätvinkliga triangelns area?",
      "sec-units": "Areaenheter, grader och avrundning",
      "sec-mistakes": "Vanliga misstag vid beräkning av rätvinklig triangelarea utifrån en vinkel",
      "sec-verify": "Så kontrollerar du om din beräknade area stämmer",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Så beräknar du arean av en rätvinklig triangel utifrån en vinkel",
        "blocks": [
          { "kind": "p", "text": "Anta att en rätvinklig triangel har en katet på [[b=4\\text{ m}]], en hypotenusa på [[c=5\\text{ m}]] och att den spetsiga vinkeln mellan dessa två sidor mäter cirka [[A\\approx36.87^\\circ]]. Arean följer direkt: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Eftersom [[\\sin(36.87^\\circ)\\approx0.6]] är arean ungefär [[[\\boxed{K=6\\text{ m}^2}]]]. Triangeln omsluter 6 kvadratmeter plan yta." },
          { "kind": "p", "text": "Den här kalkylatorn hanterar just den situationen: med en katet, hypotenusan och den spetsiga vinkeln mellan dem förvandlar sinus hypotenusan till den saknade vinkelräta höjden, och hälften av basen gånger höjden ger arean i kvadratenheter. Den inkluderade vinkeln måste ligga mellan de två inmatade sidorna, och varje läge kopplar en specifik vinkel till dess två sidor." },
          { "kind": "p", "text": "Vinkeln [[36.87^\\circ]] är avrundad från cirka [[36.8699^\\circ]]; full precision i kalkylatorn ger det mest exakta resultatet." }
        ]
      },
      "sec-geometry": {
        "h2": "Förstå sidorna och vinklarna i en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Den här guiden använder en konsekvent notation genomgående: [[A]] och [[B]] är de två spetsiga vinklarna, [[C=90^\\circ]] är den räta vinkeln, sidan [[a]] ligger motstående vinkel [[A]], sidan [[b]] ligger motstående vinkel [[B]], sidan [[c]] är hypotenusan och [[K]] är arean." },
          { "kind": "h3", "text": "Vad är en rätvinklig triangel?" },
          { "kind": "p", "text": "En rätvinklig triangel har en inre vinkel på exakt [[90^\\circ]]. Dess två kateter möts i den räta vinkeln, och hypotenusan ligger motstående den. Hypotenusan är alltid den längsta sidan. De återstående två vinklarna är spetsiga, och eftersom de tre inre vinklarna summerar till 180 grader gäller [[A+B+C=180^\\circ]]. Eftersom [[C=90^\\circ]] uppfyller de spetsiga vinklarna [[A+B=90^\\circ]]: känner du den ena vet du den andra." },
          { "kind": "h3", "text": "Vad är hypotenusan?" },
          { "kind": "p", "text": "Hypotenusan är sidan motstående den räta vinkeln, betecknad [[c]] i båda kalkylatorlägena. För att hitta den i en triangel ritad i valfri orientering, leta efter den sida som inte vidrör den kvadratiska hörnmarkeringen: den sidan är hypotenusan. Den är längre än vardera kateten, eftersom den spänner över hela den räta vinkeln medan varje katet bara spänner över en spetsig vinkel. Varje areaformel på den här sidan använder [[c]] som en av sina två sidor, så att identifiera den korrekt är den första färdigheten att öva." },
          { "kind": "h3", "text": "Vad är den närliggande sidan?" },
          { "kind": "p", "text": "Den närliggande kateten är den katet som vidrör den valda referensvinkeln utan att vara hypotenusan. För vinkel [[A]] är den närliggande kateten [[b]]; för vinkel [[B]] är den närliggande kateten [[a]]. Namnge referensvinkeln först och läs sedan av dess närliggande katet. Att byta referensvinkel byter tyst vilken katet som räknas som närliggande, och det bytet ligger bakom många av de vanliga misstagen som listas längre ner på sidan." },
          { "kind": "h3", "text": "Vad är den motstående sidan?" },
          { "kind": "p", "text": "Den motstående sidan ligger rakt över från den valda vinkeln och vidrör den inte. För vinkel [[A]] är sidan [[a]] motstående; för vinkel [[B]] är sidan [[b]] motstående. Etiketterna ändras med referensvinkeln, men hypotenusan förblir [[c]] i båda fallen. Att hålla referensvinkeln fast medan du märker triangeln håller varje senare steg konsekvent." },
          { "kind": "h3", "text": "Vad är en inkluderad vinkel?" },
          { "kind": "p", "text": "En inkluderad vinkel är vinkeln som sitter mellan två angivna sidor. Vinkel [[A]] är inkluderad mellan sidorna [[b]] och [[c]]; vinkel [[B]] är inkluderad mellan sidorna [[a]] och [[c]]. Den allmänna sinusareaformeln fungerar bara när vinkeln är den som är inkluderad mellan de två använda sidorna, eftersom formeln läser av den vinkelräta höjden från den vinkeln. Att para ihop en sida med en vinkel den inte vidrör bryter den geometri som formeln bygger på." }
        ],
        "imgAlt": "Rätvinklig triangel ABC som visar båda arealägena: vinkel A mellan sidorna b och c, vinkel B mellan sidorna a och c",
        "figcaption": "Båda kalkylatorlägena använder samma triangel. Läge 1 parar sida b, hypotenusan c och den inkluderade vinkeln A; läge 2 parar sida a, hypotenusan c och den inkluderade vinkeln B."
      },
      "sec-sine": {
        "h2": "Varför använder areaformeln sinus?",
        "blocks": [
          { "kind": "p", "text": "Båda kalkylatorlägena vilar på en allmän formel för arean av en godtycklig triangel givet två sidor och deras inkluderade vinkel:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "Här är [[x]] och [[y]] två sidlängder, [[\\theta]] är vinkeln inkluderad mellan dem och [[K]] är arean. Sinustermen är det som bygger den vinkelräta höjden av den andra sidan." },
          { "kind": "h3", "text": "Hur den allmänna formeln fungerar" },
          { "kind": "p", "text": "Den välkända triangelarearegeln är [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. När den vinkelräta höjden inte mäts direkt kan sinus återskapa den från en annan sida. Ta en bas med längden [[x]] och en andra sida med längden [[y]] som möter den i en vinkel [[\\theta]]. Den vinkelräta komponenten av den andra sidan, den höjd som räknas för arean, är [[h=y\\sin(\\theta)]]. Insättning i bas-höjd-regeln ger [[K=\\frac12 x(y\\sin(\\theta))]], den allmänna formeln ovan. Den inkluderade vinkeln måste höra till de två valda sidorna; en vinkel från någon annanstans i triangeln mäter en annan vinkelrät höjd." },
          { "kind": "h3", "text": "Varför delas arean med två?" },
          { "kind": "p", "text": "Triangeln upptar hälften av arean av det parallellogram som byggs på samma bas med samma vinkelräta höjd. Med bas [[x]] och höjd [[h]] är produkten [[x\\times h]] hela parallellogrammet, och triangeln är exakt hälften av det. Att multiplicera de två sidorna och sinusvärdet utan halveringen ger därför dubbla den önskade arean." },
          { "kind": "h3", "text": "Varför hypotenusan kan användas" },
          { "kind": "p", "text": "En av de två sidorna i formeln med inkluderad vinkel kan vara hypotenusan. Parad med rätt katet och den spetsiga vinkeln mellan dem bär hypotenusan tillräckligt med information för att bygga arean: dess sinuskomponent är precis den vinkelräta höjden relativt den kateten som bas. Det är därför kalkylatorn aldrig frågar efter den andra kateten. Hypotenusan är inte ett speciellt undantag från formeln; den är ett ordinärt val av sida, vid en ordinär inkluderad vinkel." },
          { "kind": "h3", "text": "Varför vinkeln måste vara rätt" },
          { "kind": "p", "text": "Att ersätta vinkel [[A]] med vinkel [[B]] medan samma sidparning behålls ger vanligtvis fel resultat. Ta 3-4-5-triangeln med [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Den korrekta läge 1-beräkningen är [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Att i stället sätta in den andra vinkeln ger [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], eftersom [[\\sin(53.13^\\circ)\\approx0.8]]. Svaret 8 är inte en avrundningsartefakt; det är arean av en annan konfiguration, en där sidparningen inte längre matchar den inkluderade vinkeln. Att få vinkel-sidparningen rätt är en av sidans viktigaste lärdomar." }
        ],
        "imgAlt": "3-4-5 rätvinklig triangel som visar att a är lika med c gånger sin A är lika med 3 som vinkelrät höjd för area",
        "figcaption": "Sinus för vinkel A förvandlar hypotenusan till den vinkelräta höjden a = 3, så den välkända K = ba/2 och den direkta formeln K = bc sin(A)/2 stämmer överens."
      },
      "sec-mode1": {
        "h2": "Så hittar du arean med sidan b, hypotenusan c och vinkeln A",
        "blocks": [
          { "kind": "p", "text": "Läge 1 i kalkylatorn använder:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "Variablerna är: [[b]] kateten närliggande vinkel [[A]], [[c]] hypotenusan, [[A]] den spetsiga inkluderade vinkeln mellan [[b]] och [[c]], och [[K]] arean." },
          { "kind": "h3", "text": "Steg-för-steg-härledning av formeln" },
          { "kind": "p", "text": "Börja från kateternas areaformel [[K=ab/2]]. Från sinusförhållandet vid vinkel [[A]], [[\\sin(A)=a/c]], alltså [[a=c\\sin(A)]]. Den motstående kateten [[a]] skrivs om som hypotenusans sinuskomponent. Insättning ger [[K=\\frac{b(c\\sin(A))}{2}]], och omskrivning ger [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Den okända motstående kateten behöver aldrig matas in eftersom formeln konstruerar den från hypotenusan och vinkeln bakom kulisserna." },
          { "kind": "h3", "text": "Fullständigt räkneexempel" },
          { "kind": "p", "text": "Givet [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        "steps": [
          "<strong>Skriv formeln.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Sätt in.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Beräkna sinus.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Multiplicera.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Dividera.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Svaret säger att triangeln täcker cirka 6 kvadratmeter. Eftersom invinkeln är avrundad hör ordet ungefär hemma i rapporten, även om samma indata med full precision ger exakt 6.",
          "<strong>Verifiera med den saknade kateten.</strong> Den saknade kateten följer från Pythagoras sats: [[a=\\sqrt{c^2-b^2}]], alltså [[a=\\sqrt{25-16}=3]]. Då [[K=(3\\times4)/2=6]]. Båda vägarna stämmer överens eftersom de beskriver samma triangel: sinusvägen bygger den saknade kateten från vinkeln, medan katetvägen använder kateten direkt.",
          "<strong>När ska du använda läge 1?</strong> Använd läge 1 när de kända mätningarna är kateten närliggande den kända spetsiga vinkeln, hypotenusan och själva vinkeln. Om båda kateterna redan är kända är den direkta katetformeln enklare och hoppar över vinkeln helt. Läge 1 är för den vanliga fältsituationen där en vinkel och två längder kommer från samma mätuppställning och den andra kateten aldrig registrerades."
        ]
      },
      "sec-mode2": {
        "h2": "Så hittar du arean med sidan a, hypotenusan c och vinkeln B",
        "blocks": [
          { "kind": "p", "text": "Läge 2 i kalkylatorn använder:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "Variablerna är: [[a]] kateten närliggande vinkel [[B]], som är motstående vinkel [[A]]; [[c]] hypotenusan; [[B]] den inkluderade spetsiga vinkeln mellan [[a]] och [[c]]; och [[K]] arean." },
          { "kind": "h3", "text": "Steg-för-steg-härledning av formeln" },
          { "kind": "p", "text": "Börja igen från [[K=ab/2]]. Sinusförhållandet mätt vid vinkel [[B]] lyder [[\\sin(B)=b/c]], eftersom den motstående sidan från [[B]]:s synvinkel är [[b]]. Alltså [[b=c\\sin(B)]]. Insättning ger [[K=\\frac{a(c\\sin(B))}{2}]], alltså [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Formeln använder sidan [[a]] även om [[a]] kallas den motstående sidan i sidans huvudnotation; etiketten motstående hör till vinkel [[A]], medan samma sida relativt vinkel [[B]] är närliggande. Sidetiketter är alltid relativa till den valda referensvinkeln." },
          { "kind": "h3", "text": "Fullständigt räkneexempel" },
          { "kind": "p", "text": "Givet [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        "steps": [
          "<strong>Skriv formeln.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Sätt in.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Beräkna sinus.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Multiplicera och dividera.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        "closingParagraphs": [
          "Resultatet är samma 6 kvadratmeter som i läge 1-exemplet, eftersom båda exemplen beskriver samma 3-4-5-triangel sedd från dess två spetsiga vinklar.",
          "<strong>Verifiera med den saknade kateten.</strong> Beräkna [[b=\\sqrt{c^2-a^2}]], alltså [[b=\\sqrt{25-9}=4]]. Då [[K=(3\\times4)/2=6]]. Överensstämmelsen är väntad: sinusformeln återskapade tyst den saknade kateten [[b]] från hypotenusan och vinkeln.",
          "<strong>När ska du använda läge 2?</strong> Använd läge 2 när den kända sidan är [[a]], hypotenusan [[c]] är känd och den uppmätta vinkeln är den som vidrör sidan [[a]], nämligen vinkel [[B]]. De två lägena är inte utbytbara utan att också byta sid- och vinkeletiketter; att mata läge 2 med läge 1:s indata beräknar en annan triangels area."
        ]
      },
      "sec-same": {
        "h2": "Två vinkelbaserade formler, en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Båda lägena beräknar arean av samma geometriska objekt, så de måste stämma överens. För läge 1, [[K=bc\\sin(A)/2]], och eftersom [[\\sin(A)=a/c]] för en giltig rätvinklig triangel, [[bc\\sin(A)=ab]]. För läge 2, [[K=ac\\sin(B)/2]], och eftersom [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. Båda formlerna förenklas till [[[\\boxed{K=\\frac{ab}{2}}]]], den välkända katetformeln. De två lägena är två olika indatavgångar till en kvantitet." }
        ],
        "closingParagraphs": [
          "Avrundade vinkelmätningar kan införa små numeriska skillnader mellan de två lägena, eftersom [[36.87^\\circ]] bara är en approximation av det sanna [[36.8699^\\circ]]. En avvikelse på några hundradelar är en avrundningseffekt, inte en oenighet mellan formlerna."
        ],
        "table": {
          "headers": ["Metod", "Indata", "Resultat"],
          "rows": [
            ["Katetformeln", "[[a=3,\\;b=4]]", "6 kvadratenheter"],
            ["Läge 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Ungefär 6"],
            ["Läge 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Ungefär 6"]
          ]
        },
        "imgAlt": "Samma 3-4-5-triangel löst med läge 1- och läge 2-formlerna, båda ger arean 6, verifierad med katetformeln",
        "figcaption": "Två inkluderade vinklar, två ekvivalenta formler, en triangelarea."
      },
      "sec-howto": {
        "h2": "Så använder du kalkylatorn för rätvinklig triangelarea utifrån vinkel",
        "blocks": [
          { "kind": "p", "text": "Den här genomgången följer det faktiska kalkylatorgränssnittet på sidan, steg för steg." }
        ],
        "steps": [
          "<strong>Identifiera de redan kända mätningarna.</strong> Bekräfta att du har en katet, hypotenusan och en spetsig vinkel från samma triangel.",
          "<strong>Välj rätt läge.</strong> Välj läge 1 för sidan [[b]], hypotenusan [[c]] och vinkeln [[A]]; välj läge 2 för sidan [[a]], hypotenusan [[c]] och vinkeln [[B]].",
          "<strong>Bekräfta vilken spetsig vinkel som mäts.</strong> Vinkeln måste vara en av de två spetsiga vinklarna, inte den räta vinkeln.",
          "<strong>Identifiera motsvarande katet.</strong> Kateten måste vidröra den uppmätta vinkeln; kontrollera definitionerna av närliggande och motstående ovan om du är osäker.",
          "<strong>Mata in katetens längd.</strong> Skriv den uppmätta kateten i katetfältet för det valda läget.",
          "<strong>Mata in hypotenusans längd.</strong> Skriv den i hypotenusafältet; den måste vara den längsta av de två längderna.",
          "<strong>Välj kompatibla mätenheter.</strong> Båda längderna måste använda samma enhet före beräkning.",
          "<strong>Mata in den spetsiga vinkeln i grader.</strong> Kalkylatorn förväntar sig grader, inte radianer.",
          "<strong>Bekräfta att vinkeln är strikt mellan [[0^\\circ]] och [[90^\\circ]].</strong> Gränsvärden beskriver degenererade former, inte trianglar.",
          "<strong>Bekräfta att hypotenusan är längre än kateten.</strong> En katet lika med eller längre än hypotenusan kan inte tillhöra en rätvinklig triangel.",
          "<strong>Kontrollera att kateten, hypotenusan och vinkeln beskriver samma rätvinkliga triangel.</strong> Konsistenstesterna i valideringsavsnittet visar hur.",
          "<strong>Klicka på Calculate Area.</strong> Resultatet visas med lösningsstegen.",
          "<strong>Granska resultatet och lösningsstegen.</strong> Följ varje insättning för att säkerställa att de avsedda indatana användes.",
          "<strong>Tolka resultatet i kvadratenheter.</strong> Areenheten är kvadraten av den valda längdenheten.",
          "<strong>Använd Reset för att rensa föregående beräkning.</strong> Detta tömmer alla fält innan nästa triangel matas in."
        ],
        "closingParagraphs": [
          "Lägg märke till att varje läge frågar efter en annan katet och en annan vinkel. Lägerna är distinkta eftersom parningen med inkluderad vinkel är olika, inte för att det ena läget är en genväg av det andra."
        ]
      },
      "sec-foundations": {
        "h2": "Steg-för-steg-exempel på rätvinklig triangelarea utifrån en vinkel",
        "blocks": [
          { "kind": "p", "text": "Fyra exempel bygger metoden på välkända trianglar, från 3-4-5-tripeln till specialvinkelfall." },
          { "kind": "h3", "text": "Exempel 1: 3-4-5-triangel med vinkel A" },
          { "kind": "p", "text": "Givet [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], använd [[K=bc\\sin(A)/2]]. Då [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], alltså [[[\\boxed{K\\approx6}]]]. Arean är 6 kvadratenheter eftersom triangeln omsluter sex enhetskvadrater av plan yta; med fullprecisionsvinkel är värdet exakt 6." },
          { "kind": "h3", "text": "Exempel 2: Samma triangel med vinkel B" },
          { "kind": "p", "text": "Givet [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], använd [[K=ac\\sin(B)/2]]. Då [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], alltså [[[\\boxed{K\\approx6}]]]. Resultatet matchar exempel 1 eftersom båda exemplen beskriver samma triangel; de två vinklarna är komplementära vyer av en form." },
          { "kind": "h3", "text": "Exempel 3: En 30-60-90-triangel" },
          { "kind": "p", "text": "Ta [[c=10]] och [[A=30^\\circ]]. Kateten följer från [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Då [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], och eftersom [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Specialvinkelvärden som [[\\sin(30^\\circ)]] och [[\\cos(30^\\circ)]] ger exakta former före avrundning till decimaler, vilket är varför dessa trianglar är användbara för att kontrollera kalkylatorn för hand." },
          { "kind": "h3", "text": "Exempel 4: En 45-45-90-triangel" },
          { "kind": "p", "text": "Givet [[c=10]] och [[A=45^\\circ]] är kateterna lika: [[a=b=5\\sqrt{2}]]. Då [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], och eftersom [[\\sin(45^\\circ)=\\sqrt{2}/2]] förenklas produkten till [[[\\boxed{K=25}]]]. Detta är en likbent rätvinklig triangel, och som visas senare har den också den största möjliga arean för en rätvinklig triangel med en hypotenusa på 10 enheter." }
        ]
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av rätvinklig triangelarea utifrån vinkel",
        "blocks": [
          { "kind": "p", "text": "Tolv fullt uträknade situationer, sex för varje kalkylatorläge. Varje exempel anger mätningarna, väljer läge, tillämpar formeln och tolkar svaret. Vinkelvärden visas med två decimaler medan aritmetiken behåller full precision under ytan." },
          { "kind": "h3", "text": "Praktiskt exempel 1: Trekantig takgavel" },
          { "kind": "p", "text": "En förenklad rätvinklig takgavelsektion har närliggande sida [[b=4\\text{ m}]], hypotenusa [[c=5\\text{ m}]] och inkluderad vinkel [[A\\approx36.87^\\circ]]. Använd läge 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], alltså [[[\\boxed{K\\approx6\\text{ m}^2}]]]. den plana sektionens area, inte den totala takytan. Kontroll: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "Praktiskt exempel 2: Sidopanel till trekantig ramp" },
          { "kind": "p", "text": "En rätvinklig rampsidopanel har [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]] och [[A\\approx16.26^\\circ]]. Den underliggande motstående sidan är 0.7 m, så [[\\sin(A)=0.7/2.5=0.28]]. Använd läge 1: [[K=(2.4\\times2.5\\times0.28)/2]], alltså [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. sidopanelens area, inte den sluttande rampytan. Kontroll: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "Praktiskt exempel 3: Trekantigt segel" },
          { "kind": "p", "text": "En plan rätvinklig segelsektion har [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] och [[A\\approx22.62^\\circ]]. Den motstående sidan är 5 ft, så [[\\sin(A)=5/13]]. Använd läge 1: [[K=(12\\times13\\times(5/13))/2]], alltså [[[\\boxed{K=30\\text{ ft}^2}]]]. plan geometrisk area, före sömmar och spill. Kontroll: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "Praktiskt exempel 4: Rätvinklig marksektion" },
          { "kind": "p", "text": "En lantmäteriskiss beskriver en rätvinklig tomt med [[b=40\\text{ m}]], [[c=50\\text{ m}]] och [[A\\approx36.87^\\circ]]. Eftersom [[\\sin(A)=30/50=0.6]] ger läge 1 [[K=(40\\times50\\times0.6)/2]], alltså [[[\\boxed{K=600\\text{ m}^2}]]]. den plana tomtarean under en plan modell. Kontroll: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "Praktiskt exempel 5: Stödpanel av stål" },
          { "kind": "p", "text": "En plan trekantig stålpanel har [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]] och [[A\\approx28.07^\\circ]]. Den motstående sidan är 0.8 m, så [[\\sin(A)=0.8/1.7]]. Använd läge 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], alltså [[[\\boxed{K=0.6\\text{ m}^2}]]]. plan area endast, inte bärförmåga. Kontroll: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "Praktiskt exempel 6: Sidoprofil till trappa" },
          { "kind": "p", "text": "En förenklad sidopanel till en trappa har horisontell katet [[b=3.2\\text{ m}]], hypotenusa [[c=4\\text{ m}]] och [[A\\approx36.87^\\circ]]. Med [[\\sin(A)=0.6]] ger läge 1 [[K=(3.2\\times4\\times0.6)/2]], alltså [[[\\boxed{K=3.84\\text{ m}^2}]]]. sidoprofilen, inte stegytan. Kontroll: med den andra kateten 2.4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "Praktiskt exempel 7: Trekantigt glasfönster" },
          { "kind": "p", "text": "Ett rätvinkligt fönster har sidan [[a=0.6\\text{ m}]], hypotenusan [[c=1\\text{ m}]] och inkluderad vinkel [[B\\approx53.13^\\circ]]. Med [[\\sin(B)=0.8]] ger läge 2 [[K=(0.6\\times1\\times0.8)/2]], alltså [[[\\boxed{K=0.24\\text{ m}^2}]]]. glasarea före karmmån. Kontroll: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "Praktiskt exempel 8: Trekantig markis" },
          { "kind": "p", "text": "En plan rätvinklig markissektion har [[a=1.2\\text{ m}]], [[c=2\\text{ m}]] och [[B\\approx53.13^\\circ]]. Använd läge 2: [[K=(1.2\\times2\\times0.8)/2]], alltså [[[\\boxed{K=0.96\\text{ m}^2}]]]. Kontroll: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "Praktiskt exempel 9: Utskärningsmönster i plywood" },
          { "kind": "p", "text": "En rätvinklig plywoodbit har [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]] och [[B\\approx53.13^\\circ]]. Använd läge 2: [[K=(0.9\\times1.5\\times0.8)/2]], alltså [[[\\boxed{K=0.54\\text{ m}^2}]]]. användbar materialarea, exklusive bortskuret spill. Kontroll: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "Praktiskt exempel 10: Uppmätning av ett trekantigt fält" },
          { "kind": "p", "text": "En förenklad fältmätning ger [[a=7\\text{ m}]], [[c=25\\text{ m}]] och [[B\\approx73.74^\\circ]]. Den andra kateten är 24 m, så [[\\sin(B)=24/25=0.96]]. Använd läge 2: [[K=(7\\times25\\times0.96)/2]], alltså [[[\\boxed{K=84\\text{ m}^2}]]]. den plana sektionsarean. Kontroll: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "Praktiskt exempel 11: Trekantig drakpanel" },
          { "kind": "p", "text": "En rätvinklig drak- eller tygpanel har [[a=20\\text{ cm}]], [[c=25\\text{ cm}]] och [[B\\approx36.87^\\circ]]. Eftersom [[\\sin(B)=15/25=0.6]] ger läge 2 [[K=(20\\times25\\times0.6)/2]], alltså [[[\\boxed{K=150\\text{ cm}^2}]]]. kvadratcentimeter, i överensstämmelse med indatana. Kontroll: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "Praktiskt exempel 12: Sidopanel till solcellsfäste" },
          { "kind": "p", "text": "En plan rätvinklig sidopanel till ett stöd har [[a=1.8\\text{ m}]], [[c=3\\text{ m}]] och inkluderad vinkel [[B\\approx53.13^\\circ]]. Med [[\\sin(B)=0.8]] ger läge 2 [[K=(1.8\\times3\\times0.8)/2]], alltså [[[\\boxed{K=2.16\\text{ m}^2}]]]. panelarea, inte elektrisk effekt eller kapacitet. Kontroll: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["Situation", "Läge", "Katet / Hyp.", "Vinkel", "Area", "Tolkning"],
          "rows": [
            ["Takgavel", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Plan sektionsarea"],
            ["Rampsidopanel", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Sidopanel, inte lutning"],
            ["Segel", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Plan area före sömmar"],
            ["Marksektion", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Plan tomtarea"],
            ["Stålpanel", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Endast plan area"],
            ["Trappprofil", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Sidoprofil, inte steg"],
            ["Glasfönster", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Före karmmån"],
            ["Markis", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Trekantig sektionsarea"],
            ["Plywoodbit", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Användbar area, inget spill"],
            ["Fältmätning", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Plant fältområde"],
            ["Drakpanel", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Tygarea"],
            ["Solfästepanel", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Stödpanel, inte effekt"]
          ]
        },
        "imgAlt": "Fyra uträknade rätvinkliga triangelareor: takgavel, glasfönster, fältmätning och segel",
        "figcaption": "Fyra av de uträknade situationerna ovan, var och en med sin triangel, inkluderade vinkel, formel och verifierad area."
      },
      "sec-consistency": {
        "h2": "Så kontrollerar du om sidlängderna och vinkeln bildar en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "En katet, en hypotenusa och en spetsig vinkel bär mer information än en rätvinklig triangel behöver: två av de tre bestämmer den tredje, så alla tre måste stämma överens. Kontrollerna nedan bekräftar att det beräknade talet beskriver en rätvinklig triangel." },
          { "kind": "h3", "text": "Validera läge 1" },
          { "kind": "p", "text": "För läge 1 är konsistensrelationen [[\\cos(A)=b/c]], ekvivalent [[[\\boxed{b=c\\cos(A)}]]]. Med [[b=4]] och [[c=5]] ger [[\\cos(A)=0.8]] [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. En godtycklig vinkel som [[60^\\circ]] skulle inte beskriva samma rätvinkliga triangel med dessa sidlängder: [[5\\cos(60^\\circ)=2.5\\neq4]], så de tre indatana vore ömsesidigt inkonsistenta." },
          { "kind": "h3", "text": "Validera läge 2" },
          { "kind": "p", "text": "För läge 2 är relationen [[\\cos(B)=a/c]], ekvivalent [[[\\boxed{a=c\\cos(B)}]]]. Med [[a=3]] och [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. Den valda vinkeln måste motsvara de faktiska mätningarna; en katet på 3 med en hypotenusa på 5 möts helt enkelt inte i en inkluderad vinkel på till exempel [[70^\\circ]]." },
          { "kind": "h3", "text": "Varför den allmänna areaformeln ändå kan returnera ett tal" },
          { "kind": "p", "text": "Formeln [[K=\\frac12xy\\sin(\\theta)]] beräknar arean av en allmän triangel definierad av två sidor och deras inkluderade vinkel. En inkompatibel vinkel-sidkombination returnerar ändå ett tal, men den resulterande triangeln är inte rätvinklig: det är någon annan triangel som råkar dela dessa tre indata. Det aritmetiska resultatet bevisar inte i sig att indatana beskriver en giltig rätvinklig triangel; cosinuskontrollen ovan gör det jobbet." },
          { "kind": "h3", "text": "Så hanterar du avrundade vinkelmätningar" },
          { "kind": "p", "text": "En vinkel som [[36.87^\\circ]] kan vara en avrundad visning av ungefär [[36.8699^\\circ]]. Små avvikelser från visnings- eller mätavrundning bör skiljas från genuint inkonsistent geometri: några hundradels graders mån är avrundning, medan flera graders avvikelse betyder att indatana inte stämmer överens. Ingen numerisk valideringstolerans påstås för själva kalkylatorn; distinktionen är en bedömning utifrån de aktuella mätningarna." }
        ]
      },
      "sec-alternatives": {
        "h2": "Alternativa sätt att hitta rätvinklig triangelarea med vinklar",
        "blocks": [
          { "kind": "p", "text": "Dessa är matematiska alternativ, inte extra kalkylatorlägen; de visar samma geometri under andra indatakombinationer." },
          { "kind": "h3", "text": "Med hypotenusan och en spetsig vinkel" },
          { "kind": "p", "text": "För en giltig rätvinklig triangel, [[a=c\\sin(A)]] och [[b=c\\cos(A)]]. Insättning i [[K=ab/2]] ger [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Med dubbelvinkelidentiteten [[\\sin(2A)=2\\sin(A)\\cos(A)]] blir detta [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Hypotenusan och en spetsig vinkel bestämmer triangeln fullständigt, så ingen katetmätning behövs alls." },
          { "kind": "h3", "text": "Med en katet och dess närliggande vinkel" },
          { "kind": "p", "text": "Om sidan [[b]] och vinkeln [[A]] är kända, då [[a=b\\tan(A)]], och [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Parningen spelar roll: [[b]] måste vara kateten närliggande vinkel [[A]] för att tangens ska producera den motstående kateten." },
          { "kind": "h3", "text": "Med sidan a och vinkeln B" },
          { "kind": "p", "text": "Speglar föregående fall för vinkel [[B]]: [[b=a\\tan(B)]], alltså [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Sidan [[a]] är närliggande vinkel [[B]], vilket är precis varför tangens återigen återskapar den motstående kateten." },
          { "kind": "h3", "text": "Vilken metod är enklast?" },
          { "kind": "p", "text": "Den bästa formeln är den som matchar de tillgängliga mätningarna. Om båda kateterna är kända, använd [[K=ab/2]] och hoppa över trigonometrin. Om en katet, hypotenusan och den inkluderade vinkeln är kända är kalkylatorns två lägen den direkta vägen. Tangens- och dubbelvinkelformerna är användbara för handberäkningar med specialvinklar, men att lägga till steg som indatana inte kräver lägger bara till fler ställen där fel kan gömma sig." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Hur påverkar den spetsiga vinkeln den rätvinkliga triangelns area?",
        "blocks": [
          { "kind": "p", "text": "Sinus växer när en spetsig vinkel ökar, så en större vinkel verkar lova en större area. Det gäller bara när de andra kvantiteterna hålls fasta, och i en rätvinklig triangel kan sidorna och vinkeln inte ändras oberoende." },
          { "kind": "h3", "text": "Fast hypotenusa, föränderlig vinkel" },
          { "kind": "p", "text": "För en fast hypotenusa kan arean skrivas som [[K=\\frac{c^2\\sin(2A)}{4}]]. Faktorn [[\\sin(2A)]] stiger när [[A]] rör sig från nära [[0^\\circ]] mot [[45^\\circ]] och faller sedan när [[A]] närmar sig [[90^\\circ]]. Arean ökar därför över första halvan av det spetsiga intervallet och minskar över andra halvan. De två halvorna är spegelbilder genom komplementvinkelrelationen [[A+B=90^\\circ]]: att byta vinklarna byter kateterna och lämnar arean oförändrad." },
          { "kind": "h3", "text": "Maximal area för en fast hypotenusa" },
          { "kind": "p", "text": "Eftersom [[\\sin(2A)\\leq1]] är den största möjliga arean [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], uppnådd när [[A=B=45^\\circ]]. För [[c=10]] är den maximala arean [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. Detta är den likbenta rätvinkliga triangeln i exempel 4: lika kateter gör produkten av kateterna, och därmed arean, så stor som den fasta hypotenusan tillåter." },
          { "kind": "h3", "text": "Varför arean inte enkelt ökar med vinkeln i varje fall" },
          { "kind": "p", "text": "Ett påstående om ökande vinklar är meningslöst utan att ange vad som hålls konstant. Med en fast hypotenusa stiger relationen först och faller sedan; med en fast katet är relationen återigen en annan. Att behandla area som en enkelt ökande funktion av vinkeln är en vanlig överförenkling, och detta avsnitt finns för att hålla den borta från ditt arbete." }
        ]
      },
      "sec-units": {
        "h2": "Areaenheter, grader och avrundning",
        "blocks": [
          { "kind": "h3", "text": "Kvadratmeter" },
          { "kind": "p", "text": "Om indatana är i meter kommer arean ut i kvadratmeter: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. Multiplikationen av två längder producerar alltid en kvadratenhet, oavsett enhetssystem." },
          { "kind": "h3", "text": "Kvadratcentimeter" },
          { "kind": "p", "text": "Centimeterindata producerar kvadratcentimeterareor, som i drakpanelexemplet med dess resultat [[150\\text{ cm}^2]]. Omvandling mellan kvadratenheter kvadrerar den linjära omvandlingsfaktorn: 1 m² = 10 000 cm², inte 100." },
          { "kind": "h3", "text": "Kvadratfot" },
          { "kind": "p", "text": "Fotindata producerar kvadratfotareor, som i segelexemplet med dess resultat [[30\\text{ ft}^2]]. Omvandla alla indata till en längdenhet före beräkning; kalkylatorn kan inte blanda meter och fot." },
          { "kind": "h3", "text": "Grader mot radianer" },
          { "kind": "p", "text": "Kalkylatorn förväntar sig vinklar i grader. För omvandling, använd [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Till exempel [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Att mata in ett radianvärde där grader förväntas är ett av de mest skadliga misstagen, eftersom sinus för ett litet radianttal ser rimligt ut medan det är helt fel." },
          { "kind": "h3", "text": "Varför sinus inte har några enheter" },
          { "kind": "p", "text": "Sinus är ett förhållande mellan två längder, så enheterna förkortas bort och värdet är dimensionslöst. Att multiplicera två längder med ett dimensionslöst tal lämnar exakt de kvadratenheter som arean behöver. Det är också därför sinusvärdet är detsamma oavsett om sidorna mättes i meter eller fot, så länge triangelns form är densamma." },
          { "kind": "h3", "text": "Varför mellanliggande avrundning spelar roll" },
          { "kind": "p", "text": "Att avrunda en vinkel eller ett sinusvärde för tidigt kan förskjuta den slutliga arean. Behåll full precision genom beräkningen och avrunda endast det rapporterade resultatet, till en precision som indatamätningarna stöder. En mätning angiven med två signifikanta siffror förtjänar inte ett sexdecimalt svar." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid beräkning av rätvinklig triangelarea utifrån en vinkel",
        "steps": [
          "<strong>Använda vinkel B med läge 1 utan att byta sidor.</strong> Läge 1 parar [[b]] och [[c]] med vinkel [[A]]; att mata det med [[B]] beräknar en annan triangels area.",
          "<strong>Använda vinkel A med läge 2.</strong> Läge 2 parar [[a]] och [[c]] med vinkel [[B]]. Kontrollera lägesväljaren innan du matar in tal.",
          "<strong>Blanda ihop närliggande och motstående.</strong> Dessa etiketter beror på referensvinkeln: fixera vinkeln först och märk sedan kateterna relativt den.",
          "<strong>Mata in hypotenusan i katetfältet.</strong> Kateten måste vara kortare än [[c]]; att byta dem bryter varje konsistenskontroll.",
          "<strong>Använda fel inkluderad vinkel.</strong> Vinkeln måste sitta mellan de två inmatade sidorna, annars är sinusprojektionen fel.",
          "<strong>Glömma sinusfunktionen.</strong> [[bc/2]] ensamt multiplicerar två icke-vinkelräta längder; resultatet är inte triangelns area.",
          "<strong>Glömma att dividera med två.</strong> Den ohalverade produkten är parallellogrammets area, inte triangelns.",
          "<strong>Mata in radianer när grader förväntas.</strong> [[\\sin(0.64)]] och [[\\sin(36.87^\\circ)]] är helt olika tal.",
          "<strong>Mata in 0 eller 90 grader.</strong> Varken beskriver en icke-degenererad rätvinklig triangel med dessa indata.",
          "<strong>Mata in negativa längder eller noll.</strong> Längder är positiva; allt annat har ingen geometrisk betydelse.",
          "<strong>Mata in en katet längre än hypotenusan.</strong> Hypotenusan är alltid den längsta sidan, så denna inmatning motsäger uppställningen.",
          "<strong>Använda inkonsistenta indata.</strong> Kontrollera [[b=c\\cos(A)]] eller [[a=c\\cos(B)]]; ett tal från omatchade indata tillhör ingen rätvinklig triangel.",
          "<strong>Blanda enheter.</strong> Omvandla alla längder till en enhet först; meter med centimeter skalar svaret med 100.",
          "<strong>Rapportera linjära enheter.</strong> Areenheten är kvadraten av längdenheten: m², inte m.",
          "<strong>Avrunda vinkeln för tidigt.</strong> Avrunda endast det slutliga svaret; tidig avrundning förskjuter sinus.",
          "<strong>Behandla lägena som utbytbara.</strong> Varje läge är sin egen formel med sitt eget indatakontrakt."
        ],
        "closingParagraphs": [
          "<strong>Fel-mot-rätt-exempel.</strong>",
          "Ta 3-4-5-triangeln med [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Rätt: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Om fel vinkel sätts in, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], inte 6. Misstaget använder den felaktiga inkluderade vinkeln för sidorna [[b]] och [[c]], och 8 är helt enkelt fel triangels area."
        ]
      },
      "sec-verify": {
        "h2": "Så kontrollerar du om din beräknade area stämmer",
        "blocks": [
          { "kind": "h3", "text": "Metod 1: Kontrollera Pythagoras sats" },
          { "kind": "p", "text": "För en giltig rätvinklig triangel, [[a^2+b^2=c^2]]. För 3-4-5-triangeln, [[9+16=25]]. Ett misslyckande här betyder att sidindatana inte beskriver någon rätvinklig triangel alls." },
          { "kind": "h3", "text": "Metod 2: Kontrollera katetformeln" },
          { "kind": "p", "text": "Beräkna [[K=ab/2]] oberoende. För [[a=3]] och [[b=4]], [[K=6]]. Överensstämmelse med det vinkelbaserade resultatet bekräftar hela beräkningen." },
          { "kind": "h3", "text": "Metod 3: Kontrollera komplementvinkeln" },
          { "kind": "p", "text": "Verifiera [[A+B=90^\\circ]]. För [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]]. Summan måste gälla för att den inmatade vinkeln ska vara en äkta spetsig vinkel i triangeln." },
          { "kind": "h3", "text": "Metod 4: Kontrollera sinusrelationen" },
          { "kind": "p", "text": "För läge 1, [[\\sin(A)=a/c]]; för läge 2, [[\\sin(B)=b/c]]. I 3-4-5-triangeln, [[\\sin(36.87^\\circ)\\approx3/5]] och [[\\sin(53.13^\\circ)\\approx4/5]]. Detta är samma relation som formeln använder, kontrollerad i motsatt riktning." },
          { "kind": "h3", "text": "Metod 5: Verifiera indatakonsistensen" },
          { "kind": "p", "text": "För läge 1, [[b\\approx c\\cos(A)]]; för läge 2, [[a\\approx c\\cos(B)]]. Approximationstecknet är lämpligt när vinkelmätningen har avrundats." },
          { "kind": "h3", "text": "Metod 6: Kontrollera den maximala arean" },
          { "kind": "p", "text": "För en fast hypotenusa, [[K\\leq c^2/4]]. Med [[c=5]] överstiger ingen giltig area 6.25 kvadratenheter. En beräknad area över den gränsen signalerar omedelbart ett indatfel." },
          { "kind": "h3", "text": "Metod 7: Kontrollera kvadratenheter" },
          { "kind": "p", "text": "Säkerställ att resultatet uttrycks i kvadraten av indatalängdenheten. Detta fångar den förvånansvärt vanliga vanan att rapportera areatalet med längdenheten oförändrad." }
        ]
      },
      "sec-conclusion": {
        "h2": "En vinkel, en katet och hypotenusan är allt du behöver",
        "blocks": [
          { "kind": "p", "text": "Den vinkelbaserade areametoden är bas-höjd-regeln med höjden återuppbyggd från hypotenusan. När den inkluderade vinkeln parats med rätt sidor levererar sinus den vinkelräta kateten, och arean är en insättning bort. De två lägena är två dörrar in i samma rum: läge 1 går in genom vinkel A, läge 2 genom vinkel B, och båda anländer till samma area." },
          { "kind": "p", "text": "Disciplinen som gör metoden trovärdig är konsistens: kontrollera att kateten, hypotenusan och vinkeln stämmer överens genom cosinusrelationen, verifiera arean mot katetformeln när den andra kateten kan återskapas, och håll vinkel-sidparningen exakt. Med dessa kontroller på plats förtjänar svaret sitt förtroende." },
          { "kind": "p", "text": "Använd sidans kalkylator närhelst en katet, hypotenusan och den inkluderade vinkeln är de uppmätta datana, och grip efter katet-, höjd- eller semiperimeterkalkylatorerna när mätningarna pekar annorstädes." }
        ]
      }
    },
    "faqs": [
      {
        "question": "Hur hittar man arean av en rätvinklig triangel med hjälp av en vinkel?",
        "answer": "Använd K = bc sin(A)/2 när du känner sidan b, hypotenusan c och den inkluderade vinkeln A; använd K = ac sin(B)/2 när du känner sidan a, hypotenusan c och den inkluderade vinkeln B. Sinus omvandlar hypotenusan till den vinkelräta höjden relativt den valda kateten, och division med två ger arean i kvadratenheter."
      },
      {
        "question": "Vad är formeln för area med sidan b, hypotenusan c och vinkeln A?",
        "answer": "Formeln är K = bc sin(A)/2. Sidan b är kateten närliggande vinkel A, c är hypotenusan och A är den spetsiga vinkeln mellan dem. För b = 4, c = 5 och A cirka 36.87 grader är sin(A) cirka 0.6, så arean är cirka 6 kvadratenheter."
      },
      {
        "question": "Vad är formeln för area med sidan a, hypotenusan c och vinkeln B?",
        "answer": "Formeln är K = ac sin(B)/2. Sidan a är kateten närliggande vinkel B, c är hypotenusan och B är den spetsiga vinkeln mellan dem. För a = 3, c = 5 och B cirka 53.13 grader är sin(B) cirka 0.8, så arean är cirka 6 kvadratenheter, samma triangel som i läge 1-exemplet."
      },
      {
        "question": "Varför använder areaformeln sinus?",
        "answer": "Sinus bygger den vinkelräta höjden av hypotenusan. Med basen b och en sida c som möter den i vinkeln A är höjden c sin(A), så K = bc sin(A)/2. Utan sinustermen skulle formeln multiplicera två icke-vinkelräta längder och besvara en annan geometrisk fråga."
      },
      {
        "question": "Vad är en inkluderad vinkel?",
        "answer": "En inkluderad vinkel sitter mellan två angivna sidor. Vinkel A är inkluderad mellan sidorna b och c; vinkel B är inkluderad mellan sidorna a och c. Sinusareaformeln fungerar bara med den inkluderade vinkeln för de två använda sidorna, eftersom formeln läser av den vinkelräta höjden från den vinkeln."
      },
      {
        "question": "Kan jag beräkna arean utan att känna båda kateterna?",
        "answer": "Ja. Hypotenusan och den inkluderade vinkeln återskapar tillsammans den saknade kateten genom sinus, så den andra kateten behöver aldrig mätas. Om båda kateterna i stället är kända är den enklare formeln K = ab/2 den direkta vägen och behöver ingen trigonometri."
      },
      {
        "question": "Varför ger båda kalkylatorlägena samma area?",
        "answer": "Båda lägena beskriver en triangel. Eftersom sin(A) = a/c är bc sin(A) = ab; eftersom sin(B) = b/c är ac sin(B) = ab. Båda formlerna förenklas till K = ab/2. Små skillnader från avrundade vinkelindata är avrundningseffekter, inte oenigheter mellan formlerna."
      },
      {
        "question": "Kan jag använda vilken spetsig vinkel som helst med en given katet och hypotenusa?",
        "answer": "Nej. De tre indatana måste stämma överens: läge 1 kräver b = c cos(A) och läge 2 kräver a = c cos(B). En godtycklig spetsig vinkel med samma sidlängder beskriver en annan, icke-rätvinklig triangel, och den area formeln returnerar tillhör den triangeln."
      },
      {
        "question": "Hur kan jag verifiera arean med katetformeln?",
        "answer": "Återskapa den saknade kateten med Pythagoras sats och beräkna sedan K = ab/2. För b = 4 och c = 5 är a = sqrt(25 - 16) = 3, och K = 12/2 = 6, vilket matchar det vinkelbaserade resultatet. Överensstämmelse mellan de två oberoende vägarna bekräftar indatana och aritmetiken."
      },
      {
        "question": "Måste vinkeln vara i grader eller radianer?",
        "answer": "Kalkylatorn förväntar sig grader. Omvandla radianer med Grader = Radianer gånger 180/pi; pi/6 radianer är 30 grader. Ett radianvärde inmatat där grader förväntas ger ett rimligt utseende men helt fel sinusvärde, så kontrollera alltid vinkelenheten före beräkning, annars blir hela arean fel."
      },
      {
        "question": "Vad är den maximala arean för en given hypotenusa?",
        "answer": "Maximum är c i kvadrat dividerat med 4, uppnått när båda spetsiga vinklarna är 45 grader, den likbenta rätvinkliga triangeln. För en hypotenusa på 10 enheter är den maximala arean 25 kvadratenheter. Varje beräknad area över c i kvadrat genom 4 signalerar ett indatfel."
      },
      {
        "question": "När ska jag använda huvudkalkylatorn för rätvinklig triangelarea i stället?",
        "answer": "Använd huvudareakalkylatorn när dina mätningar matchar en av dess indatakombinationer mer direkt, till exempel när båda kateterna är kända. Behåll den här vinkelbaserade kalkylatorn för det fall den byggdes för: en katet, hypotenusan och den inkluderade spetsiga vinkeln uppmätta tillsammans vid samma tillfälle."
      }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Kalkylator för rätvinklig triangelarea",
      "Kalkylator för rätvinklig triangelarea utifrån kateter",
      "Kalkylator för rätvinklig triangelarea utifrån höjd",
      "Kalkylator för rätvinklig triangelarea utifrån katet och vinkel",
      "Kalkylator för rätvinklig triangelarea utifrån semiperimeter",
      "Kalkylator för rätvinklig triangelsida utifrån sinus",
      "Kalkylator för rätvinklig triangelvinkel utifrån sinus"
    ]
  },
  "zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "如何根据一个角计算直角三角形的面积",
      "sec-geometry": "了解直角三角形的边和角",
      "sec-sine": "为什么面积公式使用正弦？",
      "sec-mode1": "如何用边 b、斜边 c 和角 A 求面积",
      "sec-mode2": "如何用边 a、斜边 c 和角 B 求面积",
      "sec-same": "两个基于角的公式，一个直角三角形",
      "sec-howto": "如何使用直角三角形面积（按角）计算器",
      "sec-foundations": "根据角求直角三角形面积的分步示例",
      "sec-applications": "根据角求直角三角形面积的实际应用",
      "sec-consistency": "如何检查边长和角是否构成直角三角形",
      "sec-alternatives": "利用角求直角三角形面积的其他方法",
      "sec-angle-effect": "锐角如何影响直角三角形的面积？",
      "sec-units": "面积单位、角度和四舍五入",
      "sec-mistakes": "根据角计算直角三角形面积时的常见错误",
      "sec-verify": "如何检查计算出的面积是否正确",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "结论"
    },
    "sections": {
      "sec-intro": {
        "h2": "如何根据一个角计算直角三角形的面积",
        "blocks": [
          { "kind": "p", "text": "假设一个直角三角形有一条直角边 [[b=4\\text{ m}]]，斜边 [[c=5\\text{ m}]]，这两条边之间的锐角约为 [[A\\approx36.87^\\circ]]。它的面积可直接求得：[[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]。因为 [[\\sin(36.87^\\circ)\\approx0.6]]，面积约为 [[[\\boxed{K=6\\text{ m}^2}]]]。这个三角形包围了 6 平方米的平面。" },
          { "kind": "p", "text": "本计算器正是处理这种情况：已知一条直角边、斜边以及它们之间的锐角，正弦把斜边转化为缺失的垂直高，底乘高的一半即得面积（平方单位）。夹角必须位于输入的两条边之间，每种模式都把一个特定的角与其两条边配对。" },
          { "kind": "p", "text": "角 [[36.87^\\circ]] 是由约 [[36.8699^\\circ]] 四舍五入得到的；在计算器中保持完整精度可得到最准确的结果。" }
        ]
      },
      "sec-geometry": {
        "h2": "了解直角三角形的边和角",
        "blocks": [
          { "kind": "p", "text": "本指南通篇使用一套统一的记号：[[A]] 和 [[B]] 是两个锐角，[[C=90^\\circ]] 是直角，边 [[a]] 与角 [[A]] 相对，边 [[b]] 与角 [[B]] 相对，边 [[c]] 是斜边，[[K]] 是面积。" },
          { "kind": "h3", "text": "什么是直角三角形？" },
          { "kind": "p", "text": "直角三角形有一个内角恰为 [[90^\\circ]]。它的两条直角边交于该直角，斜边与直角相对。斜边恒为最长的边。其余两个角为锐角，因为三个内角之和为 180 度，所以 [[A+B+C=180^\\circ]]。由于 [[C=90^\\circ]]，锐角满足 [[A+B=90^\\circ]]：知道一个就能知道另一个。" },
          { "kind": "h3", "text": "什么是斜边？" },
          { "kind": "p", "text": "斜边是与直角相对的边，在计算器的两种模式中都记为 [[c]]。要在任意摆放的三角形中找到它，就找那条不接触直角方形标记的边：那条边就是斜边。它比任一直角边都长，因为它横跨整个直角，而每条直角边只横跨一个锐角。本页的每个面积公式都把 [[c]] 作为两条边之一，因此正确识别它是首先要练习的技能。" },
          { "kind": "h3", "text": "什么是邻边？" },
          { "kind": "p", "text": "邻直角边是与所选参考角相接触、但不是斜边的那条直角边。对于角 [[A]]，邻直角边是 [[b]]；对于角 [[B]]，邻直角边是 [[a]]。先确定参考角，再读出它的邻直角边。悄悄更换参考角会同时更换哪条直角边算作邻边，而这种更换正是本页后面所列许多常见错误的根源。" },
          { "kind": "h3", "text": "什么是对边？" },
          { "kind": "p", "text": "对边位于所选角的正对面，与该角不接触。对于角 [[A]]，边 [[a]] 为对边；对于角 [[B]]，边 [[b]] 为对边。标记随参考角而变化，但斜边在两种情形下恒为 [[c]]。在标注三角形时固定参考角不变，可使后续每一步保持一致。" },
          { "kind": "h3", "text": "什么是夹角？" },
          { "kind": "p", "text": "夹角是位于两条指定边之间的角。角 [[A]] 夹在边 [[b]] 与 [[c]] 之间；角 [[B]] 夹在边 [[a]] 与 [[c]] 之间。只有当角是所用两条边之间的夹角时，正弦面积公式才成立，因为公式正是从该角读出垂直高的。把一条边与它不接触的角配对，会破坏公式所依赖的几何关系。" }
        ],
        "imgAlt": "直角三角形 ABC，展示两种面积模式：角 A 在边 b 与 c 之间，角 B 在边 a 与 c 之间",
        "figcaption": "计算器的两种模式使用同一个三角形。模式 1 配对边 b、斜边 c 与夹角 A；模式 2 配对边 a、斜边 c 与夹角 B。"
      },
      "sec-sine": {
        "h2": "为什么面积公式使用正弦？",
        "blocks": [
          { "kind": "p", "text": "计算器的两种模式都基于一个通用公式：已知两边及其夹角求任意三角形的面积：" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "其中 [[x]] 和 [[y]] 是两条边的长度，[[\\theta]] 是它们之间的夹角，[[K]] 是面积。正弦项的作用正是从第二条边构造出垂直高。" },
          { "kind": "h3", "text": "通用公式如何运作" },
          { "kind": "p", "text": "熟知的三角形面积法则是 [[K=\\frac12\\times\\text{base}\\times\\text{height}]]。当垂直高不是直接测得时，正弦可以从另一条边把它求出来。取一条长为 [[x]] 的底边和一条长为 [[y]] 的第二条边，两边夹角为 [[\\theta]]。第二条边的垂直分量，也就是对面积有效的高度，为 [[h=y\\sin(\\theta)]]。代入底乘高法则得到 [[K=\\frac12 x(y\\sin(\\theta))]]，即上面的通用公式。夹角必须与所选的两条边对应；三角形中其他位置的角量出的是不同的垂线。" },
          { "kind": "h3", "text": "为什么面积要除以二？" },
          { "kind": "p", "text": "三角形占据了以同一底边、同一垂直高作出的平行四边形面积的一半。底为 [[x]]、高为 [[h]] 时，乘积 [[x\\times h]] 是整个平行四边形，三角形恰为其一半。因此，把两边与正弦值相乘而不减半，会得到所需面积的两倍。" },
          { "kind": "h3", "text": "为什么斜边可以使用" },
          { "kind": "p", "text": "夹角公式中的两条边之一可以是斜边。只要配对了正确的直角边和它们之间的锐角，斜边就携带了足够的信息来构建面积：它的正弦分量恰好是以该直角边为底时的垂直高。这就是计算器从不索要第二条直角边的原因。斜边不是公式的特殊例外；它是在一个普通的夹角处，对边的一种普通选择。" },
          { "kind": "h3", "text": "为什么角必须正确" },
          { "kind": "p", "text": "保持边的配对不变，把角 [[A]] 换成角 [[B]]，通常会得到错误的结果。以 3-4-5 三角形为例，[[b=4]]，[[c=5]]，[[A\\approx36.87^\\circ]]。正确的模式 1 计算是 [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]。若换成另一个角，则得到 [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]]，因为 [[\\sin(53.13^\\circ)\\approx0.8]]。答案 8 不是四舍五入造成的假象；它是另一种构形的面积，在那种构形中边的配对已不再与夹角匹配。把角与边的配对弄正确，是本页最重要的收获之一。" }
        ],
        "imgAlt": "3-4-5 直角三角形，展示 a 等于 c 乘 sin A 等于 3，作为求面积的垂直高",
        "figcaption": "角 A 的正弦把斜边转化为垂直高 a = 3，因此熟知的 K = ba/2 与直接公式 K = bc sin(A)/2 一致。"
      },
      "sec-mode1": {
        "h2": "如何用边 b、斜边 c 和角 A 求面积",
        "blocks": [
          { "kind": "p", "text": "计算器的模式 1 使用：" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "各变量为：[[b]] 是与角 [[A]] 相邻的直角边，[[c]] 是斜边，[[A]] 是 [[b]] 与 [[c]] 之间的锐夹角，[[K]] 是面积。" },
          { "kind": "h3", "text": "公式的分步推导" },
          { "kind": "p", "text": "从直角边面积公式 [[K=ab/2]] 出发。由角 [[A]] 处的正弦比 [[\\sin(A)=a/c]]，得 [[a=c\\sin(A)]]。对直角边 [[a]] 被改写为斜边的正弦分量。代入得 [[K=\\frac{b(c\\sin(A))}{2}]]，整理得到 [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]。未知的对直角边永远不需要输入，因为公式在幕后已用斜边和角把它构造出来。" },
          { "kind": "h3", "text": "完整计算示例" },
          { "kind": "p", "text": "已知 [[b=4\\text{ m}]]，[[c=5\\text{ m}]]，[[A\\approx36.87^\\circ]]：" }
        ],
        "steps": [
          "<strong>写出公式。</strong> [[K=bc\\sin(A)/2]]。",
          "<strong>代入。</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]]。",
          "<strong>计算正弦。</strong> [[\\sin(36.87^\\circ)\\approx0.6]]。",
          "<strong>相乘。</strong> [[K\\approx(20\\times0.6)/2]]。",
          "<strong>相除。</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]。"
        ],
        "closingParagraphs": [
          "答案表明该三角形覆盖约 6 平方米。因为输入的角是四舍五入过的，报告中应带有约字，不过用完整精度时同样的输入恰好得到 6。",
          "<strong>用缺失的直角边验证。</strong> 缺失的直角边由勾股定理求得：[[a=\\sqrt{c^2-b^2}]]，即 [[a=\\sqrt{25-16}=3]]。于是 [[K=(3\\times4)/2=6]]。两条路径一致，因为它们描述的是同一个三角形：正弦路径从角构建出缺失的直角边，而直角边路径直接使用该直角边。",
          "<strong>何时使用模式 1？</strong> 当已知量是与已知锐角相邻的直角边、斜边和该角本身时，使用模式 1。若两条直角边都已知，直接的直角边公式更简单，完全跳过角。模式 1 适用于常见的实测情形：一个角和两个长度来自同一套测量，而第二条直角边从未被记录。"
        ]
      },
      "sec-mode2": {
        "h2": "如何用边 a、斜边 c 和角 B 求面积",
        "blocks": [
          { "kind": "p", "text": "计算器的模式 2 使用：" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "各变量为：[[a]] 是与角 [[B]] 相邻的直角边（它与角 [[A]] 相对）；[[c]] 是斜边；[[B]] 是 [[a]] 与 [[c]] 之间的锐夹角；[[K]] 是面积。" },
          { "kind": "h3", "text": "公式的分步推导" },
          { "kind": "p", "text": "再次从 [[K=ab/2]] 出发。在角 [[B]] 处测得的正弦比为 [[\\sin(B)=b/c]]，因为从 [[B]] 的视角看，对边是 [[b]]。于是 [[b=c\\sin(B)]]。代入得 [[K=\\frac{a(c\\sin(B))}{2}]]，即 [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]。公式使用边 [[a]]，尽管在本页的主记号中 [[a]] 是角 [[A]] 的对边；相对于角 [[B]]，同一条边却是邻边。边的标记恒相对于所选的参考角。" },
          { "kind": "h3", "text": "完整计算示例" },
          { "kind": "p", "text": "已知 [[a=3\\text{ m}]]，[[c=5\\text{ m}]]，[[B\\approx53.13^\\circ]]：" }
        ],
        "steps": [
          "<strong>写出公式。</strong> [[K=ac\\sin(B)/2]]。",
          "<strong>代入。</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]]。",
          "<strong>计算正弦。</strong> [[\\sin(53.13^\\circ)\\approx0.8]]。",
          "<strong>相乘并相除。</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]。"
        ],
        "closingParagraphs": [
          "结果与模式 1 示例的 6 平方米相同，因为两个示例描述的是同一个 3-4-5 三角形，只是从它的两个锐角来看。",
          "<strong>用缺失的直角边验证。</strong> 计算 [[b=\\sqrt{c^2-a^2}]]，得 [[b=\\sqrt{25-9}=4]]。于是 [[K=(3\\times4)/2=6]]。一致是意料之中的：正弦公式已悄悄地从斜边和角重建了缺失的直角边 [[b]]。",
          "<strong>何时使用模式 2？</strong> 当已知边为 [[a]]、斜边 [[c]] 已知、而测得的角是与边 [[a]] 相接触的角，即角 [[B]] 时，使用模式 2。两种模式在不同时更换边与角的标记时不可互换；把模式 1 的输入喂给模式 2，算出的是另一个三角形的面积。"
        ]
      },
      "sec-same": {
        "h2": "两个基于角的公式，一个直角三角形",
        "blocks": [
          { "kind": "p", "text": "两种模式计算的是同一个几何对象的面积，因此必须一致。对于模式 1，[[K=bc\\sin(A)/2]]，而对于有效的直角三角形 [[\\sin(A)=a/c]]，故 [[bc\\sin(A)=ab]]。对于模式 2，[[K=ac\\sin(B)/2]]，而 [[\\sin(B)=b/c]]，故 [[ac\\sin(B)=ab]]。两个公式都化简为 [[[\\boxed{K=\\frac{ab}{2}}]]]，即熟知的直角边公式。两种模式是通向同一个量的两条不同输入路径。" }
        ],
        "closingParagraphs": [
          "四舍五入的角测量值会在两种模式之间引入微小的数值差异，因为 [[36.87^\\circ]] 只是真实值 [[36.8699^\\circ]] 的近似。百分之几的偏差是四舍五入效应，不是公式之间的分歧。"
        ],
        "table": {
          "headers": ["方法", "输入", "结果"],
          "rows": [
            ["直角边公式", "[[a=3,\\;b=4]]", "6 平方单位"],
            ["模式 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "约 6"],
            ["模式 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "约 6"]
          ]
        },
        "imgAlt": "同一个 3-4-5 三角形用模式 1 和模式 2 公式求解，面积均为 6，并用直角边公式验证",
        "figcaption": "两个夹角，两个等价的公式，一个三角形面积。"
      },
      "sec-howto": {
        "h2": "如何使用直角三角形面积（按角）计算器",
        "blocks": [
          { "kind": "p", "text": "下面的演练逐步对照本页计算器的实际界面。" }
        ],
        "steps": [
          "<strong>确认已知的测量值。</strong> 确认你拥有同一三角形的一条直角边、斜边和一个锐角。",
          "<strong>选择正确的模式。</strong> 边 [[b]]、斜边 [[c]] 和角 [[A]] 选择模式 1；边 [[a]]、斜边 [[c]] 和角 [[B]] 选择模式 2。",
          "<strong>确认所测的是哪个锐角。</strong> 该角必须是两个锐角之一，而不是直角。",
          "<strong>确定对应的直角边。</strong> 该直角边必须与所测的角相接触；若不确定，请查看上文邻边与对边的定义。",
          "<strong>输入直角边长度。</strong> 把测得的直角边输入所选模式的直角边字段。",
          "<strong>输入斜边长度。</strong> 把它输入斜边字段；它必须是两个长度中较长的那个。",
          "<strong>选择兼容的长度单位。</strong> 计算前两个长度必须使用同一单位。",
          "<strong>以度为单位输入锐角。</strong> 计算器要求的是度数，不是弧度。",
          "<strong>确认角严格介于 [[0^\\circ]] 与 [[90^\\circ]] 之间。</strong> 边界值描述的是退化图形，不是三角形。",
          "<strong>确认斜边长于直角边。</strong> 等于或长于斜边的直角边不可能属于直角三角形。",
          "<strong>检查直角边、斜边和角是否描述同一个直角三角形。</strong> 验证一节中的一致性检验展示了方法。",
          "<strong>点击 Calculate Area。</strong> 结果连同解题步骤一起显示。",
          "<strong>检查结果和解题步骤。</strong> 逐步核对每次代入，确保使用的是预期的输入。",
          "<strong>以平方单位解读结果。</strong> 面积单位是所选长度单位的平方。",
          "<strong>用 Reset 清除上一次计算。</strong> 这会在输入下一个三角形之前清空所有字段。"
        ],
        "closingParagraphs": [
          "注意每种模式要求输入不同的直角边和不同的角。两种模式之所以不同，是因为夹角的配对不同，而不是因为一种模式是另一种的捷径。"
        ]
      },
      "sec-foundations": {
        "h2": "根据角求直角三角形面积的分步示例",
        "blocks": [
          { "kind": "p", "text": "四个示例在熟悉的三角形上构建方法，从 3-4-5 数组到特殊角情形。" },
          { "kind": "h3", "text": "示例 1：用角 A 的 3-4-5 三角形" },
          { "kind": "p", "text": "已知 [[b=4]]，[[c=5]]，[[A\\approx36.87^\\circ]]，使用 [[K=bc\\sin(A)/2]]。则 [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]]，[[K\\approx(20\\times0.6)/2]]，故 [[[\\boxed{K\\approx6}]]]。面积为 6 平方单位，因为该三角形包围了六个单位正方形的平面；用完整精度的角时该值恰为 6。" },
          { "kind": "h3", "text": "示例 2：用角 B 的同一三角形" },
          { "kind": "p", "text": "已知 [[a=3]]，[[c=5]]，[[B\\approx53.13^\\circ]]，使用 [[K=ac\\sin(B)/2]]。则 [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]]，[[K\\approx(15\\times0.8)/2]]，故 [[[\\boxed{K\\approx6}]]]。结果与示例 1 一致，因为两个示例描述的是同一个三角形；两个角是一个形状的互余视角。" },
          { "kind": "h3", "text": "示例 3：30-60-90 三角形" },
          { "kind": "p", "text": "取 [[c=10]] 和 [[A=30^\\circ]]。直角边由 [[b=c\\cos(30^\\circ)=5\\sqrt{3}]] 求得。则 [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]]，而 [[\\sin(30^\\circ)=1/2]]，故 [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]。[[\\sin(30^\\circ)]] 与 [[\\cos(30^\\circ)]] 这类特殊角的值在小数四舍五入之前给出精确形式，这正是这些三角形便于手算检验计算器的原因。" },
          { "kind": "h3", "text": "示例 4：45-45-90 三角形" },
          { "kind": "p", "text": "已知 [[c=10]] 和 [[A=45^\\circ]]，两直角边相等：[[a=b=5\\sqrt{2}]]。则 [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]]，而 [[\\sin(45^\\circ)=\\sqrt{2}/2]]，乘积化简为 [[[\\boxed{K=25}]]]。这是一个等腰直角三角形，如后文所示，它也是斜边为 10 个单位的直角三角形中面积可能的最大值。" }
        ]
      },
      "sec-applications": {
        "h2": "根据角求直角三角形面积的实际应用",
        "blocks": [
          { "kind": "p", "text": "十二个完整计算的实例，每种计算器模式六个。每个示例给出测量值、选择模式、应用公式并解读答案。角度值显示到两位小数，而运算在底层保持完整精度。" },
          { "kind": "h3", "text": "实际示例 1：三角形屋顶山墙" },
          { "kind": "p", "text": "一个简化的直角三角形屋顶山墙截面，邻边 [[b=4\\text{ m}]]，斜边 [[c=5\\text{ m}]]，夹角 [[A\\approx36.87^\\circ]]。用模式 1：[[K=(4\\times5\\times\\sin(36.87^\\circ))/2]]，故 [[[\\boxed{K\\approx6\\text{ m}^2}]]]。这是平面截面的面积，不是整个屋顶表面。检验：[[K=(3\\times4)/2=6]]。" },
          { "kind": "h3", "text": "实际示例 2：三角形坡道侧板" },
          { "kind": "p", "text": "一块直角三角形坡道侧板，[[b=2.4\\text{ m}]]，[[c=2.5\\text{ m}]]，[[A\\approx16.26^\\circ]]。其对边为 0.7 m，故 [[\\sin(A)=0.7/2.5=0.28]]。用模式 1：[[K=(2.4\\times2.5\\times0.28)/2]]，故 [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]。这是侧板的面积，不是倾斜的坡道表面。检验：[[K=(0.7\\times2.4)/2=0.84]]。" },
          { "kind": "h3", "text": "实际示例 3：三角形船帆" },
          { "kind": "p", "text": "一块平面直角三角形帆面，[[b=12\\text{ ft}]]，[[c=13\\text{ ft}]]，[[A\\approx22.62^\\circ]]。对边为 5 ft，故 [[\\sin(A)=5/13]]。用模式 1：[[K=(12\\times13\\times(5/13))/2]]，故 [[[\\boxed{K=30\\text{ ft}^2}]]]。这是缝制与损耗之前的平面几何面积。检验：[[K=(5\\times12)/2=30]]。" },
          { "kind": "h3", "text": "实际示例 4：直角三角形地块" },
          { "kind": "p", "text": "一份测量草图描述了一块直角三角形地块，[[b=40\\text{ m}]]，[[c=50\\text{ m}]]，[[A\\approx36.87^\\circ]]。因为 [[\\sin(A)=30/50=0.6]]，模式 1 给出 [[K=(40\\times50\\times0.6)/2]]，故 [[[\\boxed{K=600\\text{ m}^2}]]]。这是平面模型下的地块平面面积。检验：[[K=(30\\times40)/2=600]]。" },
          { "kind": "h3", "text": "实际示例 5：钢支撑板" },
          { "kind": "p", "text": "一块平面三角形钢板，[[b=1.5\\text{ m}]]，[[c=1.7\\text{ m}]]，[[A\\approx28.07^\\circ]]。对边为 0.8 m，故 [[\\sin(A)=0.8/1.7]]。用模式 1：[[K=(1.5\\times1.7\\times(0.8/1.7))/2]]，故 [[[\\boxed{K=0.6\\text{ m}^2}]]]。仅为平面面积，不是承载能力。检验：[[K=(0.8\\times1.5)/2=0.6]]。" },
          { "kind": "h3", "text": "实际示例 6：楼梯侧面轮廓" },
          { "kind": "p", "text": "一块简化的楼梯侧板，水平直角边 [[b=3.2\\text{ m}]]，斜边 [[c=4\\text{ m}]]，[[A\\approx36.87^\\circ]]。由 [[\\sin(A)=0.6]]，模式 1 给出 [[K=(3.2\\times4\\times0.6)/2]]，故 [[[\\boxed{K=3.84\\text{ m}^2}]]]。这是侧面轮廓，不是踏步面积。检验：另一条直角边为 2.4 m 时，[[K=(2.4\\times3.2)/2=3.84]]。" },
          { "kind": "h3", "text": "实际示例 7：三角形玻璃窗" },
          { "kind": "p", "text": "一扇直角三角形窗，边 [[a=0.6\\text{ m}]]，斜边 [[c=1\\text{ m}]]，夹角 [[B\\approx53.13^\\circ]]。由 [[\\sin(B)=0.8]]，模式 2 给出 [[K=(0.6\\times1\\times0.8)/2]]，故 [[[\\boxed{K=0.24\\text{ m}^2}]]]。这是窗框余量之前的玻璃面积。检验：[[K=(0.6\\times0.8)/2=0.24]]。" },
          { "kind": "h3", "text": "实际示例 8：三角形遮阳篷" },
          { "kind": "p", "text": "一块平面直角三角形遮阳篷截面，[[a=1.2\\text{ m}]]，[[c=2\\text{ m}]]，[[B\\approx53.13^\\circ]]。用模式 2：[[K=(1.2\\times2\\times0.8)/2]]，故 [[[\\boxed{K=0.96\\text{ m}^2}]]]。检验：[[K=(1.2\\times1.6)/2=0.96]]。" },
          { "kind": "h3", "text": "实际示例 9：胶合板裁剪样板" },
          { "kind": "p", "text": "一块直角三角形胶合板，[[a=0.9\\text{ m}]]，[[c=1.5\\text{ m}]]，[[B\\approx53.13^\\circ]]。用模式 2：[[K=(0.9\\times1.5\\times0.8)/2]]，故 [[[\\boxed{K=0.54\\text{ m}^2}]]]。这是不计裁剪废料的可用材料面积。检验：[[K=(0.9\\times1.2)/2=0.54]]。" },
          { "kind": "h3", "text": "实际示例 10：测量三角形田地" },
          { "kind": "p", "text": "一次简化的三角形田地测量得到 [[a=7\\text{ m}]]，[[c=25\\text{ m}]]，[[B\\approx73.74^\\circ]]。另一条直角边为 24 m，故 [[\\sin(B)=24/25=0.96]]。用模式 2：[[K=(7\\times25\\times0.96)/2]]，故 [[[\\boxed{K=84\\text{ m}^2}]]]。这是该截面的平面面积。检验：[[K=(7\\times24)/2=84]]。" },
          { "kind": "h3", "text": "实际示例 11：三角形风筝面" },
          { "kind": "p", "text": "一块直角三角形风筝或织物面，[[a=20\\text{ cm}]]，[[c=25\\text{ cm}]]，[[B\\approx36.87^\\circ]]。因为 [[\\sin(B)=15/25=0.6]]，模式 2 给出 [[K=(20\\times25\\times0.6)/2]]，故 [[[\\boxed{K=150\\text{ cm}^2}]]]。单位为平方厘米，与输入一致。检验：[[K=(20\\times15)/2=150]]。" },
          { "kind": "h3", "text": "实际示例 12：太阳能支架侧板" },
          { "kind": "p", "text": "一块平面直角三角形支撑侧板，[[a=1.8\\text{ m}]]，[[c=3\\text{ m}]]，夹角 [[B\\approx53.13^\\circ]]。由 [[\\sin(B)=0.8]]，模式 2 给出 [[K=(1.8\\times3\\times0.8)/2]]，故 [[[\\boxed{K=2.16\\text{ m}^2}]]]。这是面板面积，不是发电量或容量。检验：[[K=(1.8\\times2.4)/2=2.16]]。" }
        ],
        "table": {
          "headers": ["情形", "模式", "直角边 / 斜边", "角", "面积", "解读"],
          "rows": [
            ["屋顶山墙", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "平面截面面积"],
            ["坡道侧板", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "侧板，非坡面"],
            ["船帆", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "缝制前的平面面积"],
            ["地块", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "地块平面面积"],
            ["钢板", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "仅平面面积"],
            ["楼梯轮廓", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "侧面轮廓，非踏步"],
            ["玻璃窗", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "窗框余量之前"],
            ["遮阳篷", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "三角形截面面积"],
            ["胶合板", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "可用面积，不计废料"],
            ["田地测量", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "田地平面面积"],
            ["风筝面", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "织物面积"],
            ["太阳能侧板", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "支撑板，非发电量"]
          ]
        },
        "imgAlt": "四个已计算的直角三角形面积：屋顶山墙、玻璃窗、田地测量和船帆",
        "figcaption": "上文四个已计算的情形，每个都给出三角形、夹角、公式和验证后的面积。"
      },
      "sec-consistency": {
        "h2": "如何检查边长和角是否构成直角三角形",
        "blocks": [
          { "kind": "p", "text": "一条直角边、一条斜边和一个锐角携带的信息超过了直角三角形所需：三者之中任意两个决定第三个，因此三者必须一致。下面的检验确认算出的数字描述的是直角三角形。" },
          { "kind": "h3", "text": "验证模式 1" },
          { "kind": "p", "text": "对于模式 1，一致性关系是 [[\\cos(A)=b/c]]，等价于 [[[\\boxed{b=c\\cos(A)}]]]。当 [[b=4]]、[[c=5]] 时，[[\\cos(A)=0.8]] 给出 [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]。任意的角，例如 [[60^\\circ]]，配上这些边长描述的不是同一个直角三角形：[[5\\cos(60^\\circ)=2.5\\neq4]]，因此这三个输入相互不一致。" },
          { "kind": "h3", "text": "验证模式 2" },
          { "kind": "p", "text": "对于模式 2，关系是 [[\\cos(B)=a/c]]，等价于 [[[\\boxed{a=c\\cos(B)}]]]。当 [[a=3]]、[[c=5]] 时，[[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]。所选的角必须与实际测量值对应；直角边为 3、斜边为 5 的三角形，其夹角不可能是 [[70^\\circ]] 这样的值。" },
          { "kind": "h3", "text": "为什么通用面积公式仍能算出一个数" },
          { "kind": "p", "text": "公式 [[K=\\frac12xy\\sin(\\theta)]] 计算的是由两边及其夹角定义的一般三角形的面积。不兼容的角边组合仍会返回一个数，但得到的三角形不是直角三角形：它是恰好共享这三个输入的另一个三角形。算术结果本身并不能证明输入描述的是有效的直角三角形；上文的余弦检验才完成这项工作。" },
          { "kind": "h3", "text": "如何处理四舍五入的角测量值" },
          { "kind": "p", "text": "像 [[36.87^\\circ]] 这样的角可能是约 [[36.8699^\\circ]] 的四舍五入显示。应把显示或测量四舍五入造成的小偏差，与真正不一致的几何区分开：百分之几度的宽容是四舍五入，而几度的偏差意味着输入不一致。本页不对计算器本身的数值验证容差作任何断言；这种区分要根据手头的测量值来判断。" }
        ]
      },
      "sec-alternatives": {
        "h2": "利用角求直角三角形面积的其他方法",
        "blocks": [
          { "kind": "p", "text": "这些是数学上的替代方法，不是额外的计算器模式；它们展示了在其他输入组合下的同一几何。" },
          { "kind": "h3", "text": "用斜边和一个锐角" },
          { "kind": "p", "text": "对于有效的直角三角形，[[a=c\\sin(A)]] 且 [[b=c\\cos(A)]]。代入 [[K=ab/2]] 得到 [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]。利用二倍角恒等式 [[\\sin(2A)=2\\sin(A)\\cos(A)]]，它变为 [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]。斜边和一个锐角完全决定了三角形，因此根本不需要测量直角边。" },
          { "kind": "h3", "text": "用一条直角边及其邻角" },
          { "kind": "p", "text": "若已知边 [[b]] 和角 [[A]]，则 [[a=b\\tan(A)]]，且 [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]。配对很关键：[[b]] 必须是角 [[A]] 的邻直角边，正切才能求出对直角边。" },
          { "kind": "h3", "text": "用边 a 和角 B" },
          { "kind": "p", "text": "把前一种情形镜像到角 [[B]]：[[b=a\\tan(B)]]，故 [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]。边 [[a]] 与角 [[B]] 相邻，这正是正切再次求出对直角边的原因。" },
          { "kind": "h3", "text": "哪种方法最简单？" },
          { "kind": "p", "text": "最好的公式是与现有测量值匹配的那个。如果两条直角边都已知，用 [[K=ab/2]] 并跳过三角函数。如果已知一条直角边、斜边和夹角，计算器的两种模式就是直接路径。正切与二倍角形式便于用特殊角手算，但增加输入并不需要的步骤，只会增加藏匿错误的地方。" }
        ]
      },
      "sec-angle-effect": {
        "h2": "锐角如何影响直角三角形的面积？",
        "blocks": [
          { "kind": "p", "text": "正弦随锐角增大而增大，所以更大的角似乎意味着更大的面积。这只有在其他量保持不变时才成立，而在直角三角形中，边和角不能独立变化。" },
          { "kind": "h3", "text": "斜边固定，角变化" },
          { "kind": "p", "text": "斜边固定时，面积可写成 [[K=\\frac{c^2\\sin(2A)}{4}]]。因子 [[\\sin(2A)]] 在 [[A]] 从接近 [[0^\\circ]] 增至 [[45^\\circ]] 时上升，随后在 [[A]] 趋近 [[90^\\circ]] 时下降。因此面积在锐角区间的前半段增大，在后半段减小。两半通过互余角关系 [[A+B=90^\\circ]] 互为镜像：交换两角即交换两直角边，面积不变。" },
          { "kind": "h3", "text": "斜边固定的最大面积" },
          { "kind": "p", "text": "因为 [[\\sin(2A)\\leq1]]，可能的最大面积是 [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]，在 [[A=B=45^\\circ]] 时取得。当 [[c=10]] 时，最大面积为 [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]。这就是示例 4 中的等腰直角三角形：相等的直角边使直角边的乘积，从而使面积，达到固定斜边所允许的最大值。" },
          { "kind": "h3", "text": "为什么面积并非在所有情形下都随角单调增大" },
          { "kind": "p", "text": "不指明什么保持不变，任何关于角增大的论断都是没有意义的。斜边固定时关系先升后降；直角边固定时关系又有所不同。把面积看作角的简单递增函数是一种常见的过度简化，本节的存在就是为了让它远离你的计算。" }
        ]
      },
      "sec-units": {
        "h2": "面积单位、角度和四舍五入",
        "blocks": [
          { "kind": "h3", "text": "平方米" },
          { "kind": "p", "text": "若输入为米，面积即为平方米：[[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]。两个长度相乘恒产生平方单位，与单位制无关。" },
          { "kind": "h3", "text": "平方厘米" },
          { "kind": "p", "text": "厘米输入产生平方厘米的面积，如风筝面示例中 [[150\\text{ cm}^2]] 的结果。平方单位之间的换算要把线性换算因子平方：1 m² = 10,000 cm²，不是 100。" },
          { "kind": "h3", "text": "平方英尺" },
          { "kind": "p", "text": "英尺输入产生平方英尺的面积，如船帆示例中 [[30\\text{ ft}^2]] 的结果。计算前把所有输入换算为同一长度单位；计算器不能混用米和英尺。" },
          { "kind": "h3", "text": "度与弧度" },
          { "kind": "p", "text": "计算器要求角以度为单位。换算时使用 [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]。例如 [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]。在要求度数的地方输入弧度值是最具破坏性的错误之一，因为小弧度数的正弦看起来合理，实则完全错误。" },
          { "kind": "h3", "text": "为什么正弦没有单位" },
          { "kind": "p", "text": "正弦是两个长度的比，单位相消，值为无量纲。用无量纲的数乘两个长度，恰好得到面积所需的平方单位。这也是为什么只要三角形形状相同，无论边用米还是英尺量，正弦值都一样。" },
          { "kind": "h3", "text": "为什么中间过程的四舍五入很重要" },
          { "kind": "p", "text": "过早对角或正弦值四舍五入会改变最终面积。整个计算保持完整精度，只对报告的结果四舍五入，精度以输入测量值所支持的为准。只给到两位有效数字的测量值，配不上六位小数的答案。" }
        ]
      },
      "sec-mistakes": {
        "h2": "根据角计算直角三角形面积时的常见错误",
        "steps": [
          "<strong>不换边就把角 B 用于模式 1。</strong> 模式 1 把 [[b]] 和 [[c]] 与角 [[A]] 配对；喂给它 [[B]] 会算出另一个三角形的面积。",
          "<strong>把角 A 用于模式 2。</strong> 模式 2 把 [[a]] 和 [[c]] 与角 [[B]] 配对。输入数字前先检查模式选择器。",
          "<strong>混淆邻边与对边。</strong> 这些标记取决于参考角：先固定角，再相对于它标注直角边。",
          "<strong>把斜边输入直角边字段。</strong> 直角边必须短于 [[c]]；两者换位会破坏每一项一致性检验。",
          "<strong>用了错误的夹角。</strong> 角必须位于输入的两条边之间，否则正弦投影就是错的。",
          "<strong>忘了正弦函数。</strong> 单独的 [[bc/2]] 乘的是两条不垂直的长度；结果不是该三角形的面积。",
          "<strong>忘了除以二。</strong> 未减半的乘积是平行四边形的面积，不是三角形的。",
          "<strong>要求度数时输入了弧度。</strong> [[\\sin(0.64)]] 与 [[\\sin(36.87^\\circ)]] 是完全不同的数。",
          "<strong>输入 0 度或 90 度。</strong> 两者都不能配上这些输入描述非退化的直角三角形。",
          "<strong>输入负长度或零长度。</strong> 长度为正；其他值没有几何意义。",
          "<strong>输入比斜边长的直角边。</strong> 斜边恒为最长边，这样的输入与设定矛盾。",
          "<strong>使用了不一致的输入。</strong> 检查 [[b=c\\cos(A)]] 或 [[a=c\\cos(B)]]；来自不匹配输入的数字不属于任何直角三角形。",
          "<strong>混用了单位。</strong> 先把所有长度换算为同一单位；米与厘米混用会把答案放大 100 倍。",
          "<strong>报告了线性单位。</strong> 面积单位是长度单位的平方：m²，不是 m。",
          "<strong>过早对角四舍五入。</strong> 只对最终答案四舍五入；过早四舍五入会改变正弦。",
          "<strong>把两种模式视为可互换。</strong> 每种模式都是有各自输入约定的独立公式。"
        ],
        "closingParagraphs": [
          "<strong>错对示例。</strong>",
          "以 3-4-5 三角形为例，[[b=4]]，[[c=5]]，[[A\\approx36.87^\\circ]]。正确做法：[[K=(4\\times5\\times\\sin(A))/2\\approx6]]。若代入错误的角，[[K=(4\\times5\\times\\sin(B))/2\\approx8]]，不是 6。这个错误对边 [[b]] 与 [[c]] 使用了不正确的夹角，而 8 只是错误三角形的面积。"
        ]
      },
      "sec-verify": {
        "h2": "如何检查计算出的面积是否正确",
        "blocks": [
          { "kind": "h3", "text": "方法 1：检查勾股定理" },
          { "kind": "p", "text": "对于有效的直角三角形，[[a^2+b^2=c^2]]。对于 3-4-5 三角形，[[9+16=25]]。此处失败意味着边输入根本没有描述直角三角形。" },
          { "kind": "h3", "text": "方法 2：检查直角边公式" },
          { "kind": "p", "text": "独立计算 [[K=ab/2]]。当 [[a=3]]、[[b=4]] 时，[[K=6]]。与基于角的结果一致，即证实了整个计算。" },
          { "kind": "h3", "text": "方法 3：检查互余角" },
          { "kind": "p", "text": "验证 [[A+B=90^\\circ]]。当 [[A\\approx36.87^\\circ]] 时，[[B\\approx53.13^\\circ]]。输入的角要成为该三角形真正的锐角，和式必须成立。" },
          { "kind": "h3", "text": "方法 4：检查正弦关系" },
          { "kind": "p", "text": "模式 1 要求 [[\\sin(A)=a/c]]；模式 2 要求 [[\\sin(B)=b/c]]。在 3-4-5 三角形中，[[\\sin(36.87^\\circ)\\approx3/5]] 且 [[\\sin(53.13^\\circ)\\approx4/5]]。这正是公式所用的关系，只是反向检验。" },
          { "kind": "h3", "text": "方法 5：验证输入一致性" },
          { "kind": "p", "text": "模式 1 要求 [[b\\approx c\\cos(A)]]；模式 2 要求 [[a\\approx c\\cos(B)]]。当角的测量值已被四舍五入时，用约等号是恰当的。" },
          { "kind": "h3", "text": "方法 6：检查最大面积" },
          { "kind": "p", "text": "斜边固定时，[[K\\leq c^2/4]]。当 [[c=5]] 时，任何有效面积都不超过 6.25 平方单位。算出的面积若高于该界，立刻说明输入有误。" },
          { "kind": "h3", "text": "方法 7：检查平方单位" },
          { "kind": "p", "text": "确保结果用输入长度单位的平方表示。这能抓住一个出奇常见的习惯：报告面积数值时把长度单位原样照搬。" }
        ]
      },
      "sec-conclusion": {
        "h2": "一个角、一条直角边和斜边，就是你需要的全部",
        "blocks": [
          { "kind": "p", "text": "基于角的面积法就是底乘高法则，只是高从斜边重建。一旦夹角与正确的边配对，正弦给出垂直的直角边，面积只差一次代入。两种模式是通往同一房间的两扇门：模式 1 从角 A 进入，模式 2 从角 B 进入，两者到达同一个面积。" },
          { "kind": "p", "text": "让该方法值得信赖的纪律是一致性：用余弦关系检查直角边、斜边和角是否一致，在能求出第二条直角边时用直角边公式验证面积，并保持角边配对精确。有了这些检查，答案才赢得信任。" },
          { "kind": "p", "text": "当直角边、斜边和夹角是实测数据时，就用本页的计算器；当测量指向别处时，就选用直角边、垂高或半周长计算器。" }
        ]
      }
    },
    "faqs": [
      {
        "question": "如何用一个角求直角三角形的面积？",
        "answer": "已知边 b、斜边 c 和夹角 A 时用 K = bc sin(A)/2；已知边 a、斜边 c 和夹角 B 时用 K = ac sin(B)/2。正弦把斜边转化为相对于所选直角边的垂直高，除以二即得平方单位的面积。"
      },
      {
        "question": "用边 b、斜边 c 和角 A 求面积的公式是什么？",
        "answer": "公式是 K = bc sin(A)/2。边 b 是与角 A 相邻的直角边，c 是斜边，A 是它们之间的锐角。当 b = 4、c = 5、A 约为 36.87 度时，sin(A) 约为 0.6，因此面积约为 6 平方单位。"
      },
      {
        "question": "用边 a、斜边 c 和角 B 求面积的公式是什么？",
        "answer": "公式是 K = ac sin(B)/2：边 a 为角 B 的邻边，c 为斜边，B 为锐夹角。a = 3、c = 5、B 约 53.13 度时 sin(B) 约 0.8，面积约 6 平方单位，与模式 1 示例是同一三角形。"
      },
      {
        "question": "为什么面积公式使用正弦？",
        "answer": "正弦从斜边构建出垂直高。底为 b、边 c 以角 A 与之相交时，高为 c sin(A)，故 K = bc sin(A)/2。若没有正弦项，公式乘的是两条不垂直的长度，回答的是另一个几何问题。"
      },
      {
        "question": "什么是夹角？",
        "answer": "夹角位于两条指定的边之间。角 A 夹在边 b 与 c 之间；角 B 夹在边 a 与 c 之间。正弦面积公式只适用于所用两边的夹角，因为公式正是从该角读出垂直高的。"
      },
      {
        "question": "不知道两条直角边能算面积吗？",
        "answer": "能。斜边与夹角一起通过正弦重建出缺失的直角边，因此第二条直角边永远不需要测量。若两条直角边都已知，更简单的 K = ab/2 公式是直接路径，不需要三角函数。"
      },
      {
        "question": "为什么两种计算器模式给出相同的面积？",
        "answer": "两种模式描述同一三角形：sin(A) = a/c 故 bc sin(A) = ab；sin(B) = b/c 故 ac sin(B) = ab。两式化简为 K = ab/2。角四舍五入的小差异只是舍入效应，非公式分歧。"
      },
      {
        "question": "给定直角边和斜边，可以用任意锐角吗？",
        "answer": "不可以。三个输入必须一致：模式 1 要求 b = c cos(A)，模式 2 要求 a = c cos(B)。配上相同边长的任意锐角描述的是另一个非直角三角形，公式返回的面积属于那个三角形。"
      },
      {
        "question": "如何用直角边公式验证面积？",
        "answer": "用勾股定理求出缺失的直角边，再计算 K = ab/2。当 b = 4、c = 5 时，a = sqrt(25 - 16) = 3，且 K = 12/2 = 6，与基于角的结果一致。两条独立路径的一致证实了输入与运算。"
      },
      {
        "question": "角需要用度还是弧度？",
        "answer": "计算器要求度数。用度 = 弧度 × 180/π 换算；π/6 弧度即 30 度。在要求度数的地方输入弧度值会得到看似合理实则错误的正弦值，因此计算前先检查单位。"
      },
      {
        "question": "给定斜边的最大面积是多少？",
        "answer": "最大值是 c 的平方除以 4，在两个锐角均为 45 度即等腰直角三角形时取得。斜边为 10 个单位时最大面积为 25 平方单位。任何超过 c 平方除以 4 的计算面积都说明输入有误。"
      },
      {
        "question": "何时改用主直角三角形面积计算器？",
        "answer": "当你的测量值与它的某种输入组合更直接匹配时，例如两条直角边都已知，就用主面积计算器。本按角计算器留给它为之而建的情形：一条直角边、斜边和夹锐角一起测得。"
      }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角三角形面积计算器",
      "直角三角形面积（按直角边）计算器",
      "直角三角形面积（按垂高）计算器",
      "直角三角形面积（按直角边和角）计算器",
      "直角三角形面积（按半周长）计算器",
      "直角三角形边（按正弦）计算器",
      "直角三角形角（按正弦）计算器"
    ]
  }
};
