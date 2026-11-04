/**
 * areaGuideTranslations.batch3c.ts
 * Translations of the Right Triangle Area Calculator guide (AreaGuide.astro), Page 16 of 45.
 * Batch 3c: Swedish (sv), Chinese Simplified (zh).
 *
 * Structure per language (mirrors AREA_TRANSLATION_SCHEMA.md):
 * - tocHeading, tocItems (16 entries keyed by section id)
 * - sections (14 entries: sec-intro, sec-triangle, sec-legs, sec-angle-a, sec-angle-b,
 *   sec-inradius, sec-altitude, sec-choose, sec-howto, sec-applications, sec-verify,
 *   sec-mistakes, sec-validate, sec-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   closingParagraphs, table, imgAlt, figcaption
 * - faqs (12 question/answer pairs), faqHeading, relatedHeading, relatedItems (7)
 *
 * Formulas, KaTeX markup ([[...]] and [[[..]]]), variable names, numbers, and degree
 * values are preserved exactly as in the English source (KaTeX backslashes doubled
 * in the double-quoted TS strings). URLs are never translated. No em dashes.
 * Input field labels stay English; Calculate/Reset use the ground-truth forms.
 */

export const AREA_TRANSLATIONS_BATCH3C = {
"sv": {
    "tocHeading": "I den här guiden",
    "tocItems": {
      "sec-intro": "Vad är en areakalkylator för rätvinkliga trianglar?",
      "sec-triangle": "Vad är arean av en rätvinklig triangel?",
      "sec-legs": "Arean av en rätvinklig triangel med dess två kateter",
      "sec-angle-a": "Hitta rätvinklig triangels area med sidan b, hypotenusan c och vinkeln A",
      "sec-angle-b": "Hitta rätvinklig triangels area med sidan a, hypotenusan c och vinkeln B",
      "sec-inradius": "Hitta rätvinklig triangels area med inradie och halvperimeter",
      "sec-altitude": "Hitta rätvinklig triangels area med hypotenusa och höjd",
      "sec-choose": "Vilken areaformel för rätvinkliga trianglar ska du använda?",
      "sec-howto": "Så här använder du areakalkylatorn för rätvinkliga trianglar",
      "sec-applications": "Verkliga tillämpningar av areaberäkningar för rätvinkliga trianglar",
      "sec-verify": "Så här verifierar du arean av en rätvinklig triangel",
      "sec-mistakes": "Vanliga misstag vid beräkning av rätvinklig triangels area",
      "sec-validate": "Så här kontrollerar du om ditt arearesultat är giltigt",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Slutsats"
    },
    "sections": {
      "sec-intro": {
        "h2": "Vad är en areakalkylator för rätvinkliga trianglar?",
        "blocks": [
          {
            "kind": "p",
            "text": "En areakalkylator för rätvinkliga trianglar hittar den tvådimensionella area som omsluts av en rätvinklig triangels tre sidor. Till exempel har en rätvinklig triangel med kateterna [[a=3\\text{ m}]] och [[b=4\\text{ m}]] arean [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: triangeln upptar sex kvadratmeter yta. Area mäts i kvadratiska enheter eftersom den räknar plan yta, inte längd."
          },
          {
            "kind": "p",
            "text": "De vinkelräta kateterna förenklar beräkningen enormt. Eftersom de två kateterna möts i 90 grader kan den ena kateten fungera som bas och den andra som höjd, så arean är helt enkelt halva deras produkt. Den enkelheten är en anledning till att katetformeln är den första metoden de flesta elever lär sig."
          },
          {
            "kind": "p",
            "text": "Flera metoder finns för samma area eftersom verkliga problem ger dig olika mätvärden. En snickare mäter de två kateterna på en skiva; en lantmätare mäter en hypotenusa och en vinkel; en geometer som arbetar med en inskriven cirkel känner till inradien och halvperimetern. Varje metod förvandlar sin egen uppsättning kända värden till samma area. Kalkylatorn på den här sidan erbjuder fem lägen som matchar dessa situationer: Area from Legs, Area Variation (Angle A), Area Variation (Angle B), Area from Semiperimeter och Area Variation (Altitude). Den bästa metoden är vanligtvis den som använder de mätvärden du redan har, utan att tvinga fram extra omvandlingar först."
          }
        ]
      },
      "sec-triangle": {
        "h2": "Vad är arean av en rätvinklig triangel?",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här guiden använder en konsekvent beteckning genomgående: [[A]] och [[B]] är de två spetsiga vinklarna, [[C=90^\\circ]] är den räta vinkeln, sidan [[a]] ligger mittemot vinkeln [[A]], sidan [[b]] ligger mittemot vinkeln [[B]], sidan [[c]] är hypotenusan mittemot vinkeln [[C]], [[h]] är den vinkelräta höjden från hörnet [[C]] till hypotenusan, [[r]] är inradien, [[s]] är halvperimetern och [[K]] är arean."
          },
          {
            "kind": "h3",
            "text": "Vad är en rätvinklig triangel?"
          },
          {
            "kind": "p",
            "text": "En rätvinklig triangel har en vinkel på exakt 90 grader. Dess två kateter möts vid den räta vinkeln, och hypotenusan ligger mittemot den vinkeln. Hypotenusan är alltid den längsta sidan, och de andra två vinklarna är spetsiga: eftersom de tre vinklarna tillsammans blir 180 grader gäller [[A+B=90^\\circ]]. De två kateterna är vinkelräta mot varandra, vilket är den egenskap som gör areaformeln så direkt."
          },
          {
            "kind": "h3",
            "text": "Vad betyder area?"
          },
          {
            "kind": "p",
            "text": "Area mäter det tvådimensionella utrymmet som omsluts av triangelns tre sidor. Den skiljer sig från omkrets, som mäter den totala randlängden, från sidlängd, som mäter en dimension, och från volym, som mäter tredimensionellt utrymme. En triangulär pappersbit har en area som är lika med mängden papper den täcker; en triangulär trädgårdsdel har en area som är lika med marken den upptar. Båda anges i kvadratiska enheter som kvadratmeter, eftersom area räknar de enhetskvadrater som får plats inuti formen."
          },
          {
            "kind": "h3",
            "text": "Varför delas arean med två?"
          },
          {
            "kind": "p",
            "text": "Två identiska rätvinkliga trianglar kan sättas samman längs sina hypotenusor till en rektangel. Om varje triangel har de vinkelräta kateterna [[a]] och [[b]] har rektangeln arean [[ab]]. En triangel upptar exakt hälften av den rektangeln, så [[[\\boxed{K=\\frac{ab}{2}}]]] Divisionen med två är ingen justeringsfaktor: den är den geometriska konsekvensen av att en triangel är hälften av en rektangel, och den förekommer i varje areametod på den här sidan i en eller annan form."
          },
          {
            "kind": "h3",
            "text": "Varför kan samma triangel ha fem areaformler?"
          },
          {
            "kind": "p",
            "text": "Triangelns area ändras inte när en annan mätmetod används. Metoderna börjar helt enkelt med olika kända värden. Två kateter ger den enklaste formeln. En katet, hypotenusan och den mellanliggande spetsiga vinkeln möjliggör en sinusbaserad formel. Inradie och halvperimeter ger ett alternativt geometriskt samband. Hypotenusa och vinkelrät höjd använder den allmänna bas-höjd-regeln. Alla fem metoderna måste ge samma area när indata beskriver samma giltiga triangel, och den överensstämmelsen är den starkaste verifiering som finns: två metoder, en triangel, ett svar."
          }
        ],
        "imgAlt": "Rätvinklig triangels anatomi: kateterna a och b, hypotenusan c, räta vinkeln C, höjden h mot hypotenusan, formeln K = ab/2",
        "figcaption": "En rätvinklig triangels anatomi: C är den räta vinkeln, a och b är kateterna, c är hypotenusan och h är höjden mot hypotenusan."
      },
      "sec-legs": {
        "h2": "Arean av en rätvinklig triangel med dess två kateter",
        "blocks": [
          {
            "kind": "p",
            "text": "Katetformeln är utgångspunkten för rätvinklig triangels area: [[[\\boxed{K=\\frac{ab}{2}}]]] Den behöver bara de två vinkelräta sidorna, och allt annat på den här sidan kan ses som en variant som återvinner samma storhet från andra indata."
          },
          {
            "kind": "h3",
            "text": "När ska du använda katetformeln?"
          },
          {
            "kind": "p",
            "text": "Använd den här metoden när båda vinkelräta sidorna är kända. Ingen vinkel-, hypotenusa-, inradie- eller höjdberäkning krävs först. Direkt mätning av de två kateterna är vanlig inom snickeri, kakelsättning och skoluppgifter, vilket är anledningen till att läget Area from Legs är standardvalet för de flesta vardagsberäkningar."
          },
          {
            "kind": "h3",
            "text": "Så här fungerar formeln"
          },
          {
            "kind": "p",
            "text": "De två kateterna bildar triangelns bas och vinkelräta höjd. Den allmänna areaformeln för trianglar är [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; eftersom kateterna är vinkelräta kan bas och höjd tas direkt som [[a]] och [[b]], vilket ger [[K=ab/2]]. Ingen trigonometri ingår, och ingen extra sida behöver hittas först."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: En 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\text{ m}]] och [[b=4\\text{ m}]]. Steg 1: skriv formeln [[K=ab/2]]. Steg 2: sätt in värdena, [[K=(3\\times4)/2]]. Steg 3: multiplicera, [[K=12/2]]. Steg 4: dividera med två, [[[\\boxed{K=6\\text{ m}^2}]]] Svaret är sex kvadratmeter, inte sex meter: enheten bär storhetens betydelse."
          },
          {
            "kind": "h3",
            "text": "Kan du byta plats på de två kateterna?"
          },
          {
            "kind": "p",
            "text": "Ja. Multiplikation är kommutativ, så [[ab=ba]] och därmed [[ab/2=ba/2]]. Arean ändras inte om de två kateterna matas in i omvänd ordning, förutsatt att kalkylatorfälten motsvarar rätt katetlängder. Denna symmetri gäller bara för kateterna: att byta en katet mot hypotenusan skulle bryta formeln."
          },
          {
            "kind": "h3",
            "text": "Vad händer om kateterna har decimalvärden?"
          },
          {
            "kind": "p",
            "text": "Decimalmätningar fungerar i samma formel. Med [[a=3.5\\text{ cm}]] och [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]] Aritmetiken är identisk; bara inmatningarnas precision ändras, så behåll tillräckligt många siffror och avrunda i slutet."
          },
          {
            "kind": "h3",
            "text": "Vad händer om en katet är okänd?"
          },
          {
            "kind": "p",
            "text": "En saknad katet kan ibland hittas först med hjälp av Pythagoras sats eller en känd vinkel, och katetformeln tillämpas sedan. Observera att själva katetläget behöver båda kateterna: det återställer inte en saknad sida automatiskt. Om bara en katet och hypotenusan är kända är beräkningen av den saknade kateten ett separat steg innan det här läget kan användas."
          }
        ]
      },
      "sec-angle-a": {
        "h2": "Hitta rätvinklig triangels area med sidan b, hypotenusan c och vinkeln A",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här metoden är användbar när sidan [[b]], hypotenusan [[c]] och den spetsiga vinkeln [[A]] är kända: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Det är kalkylatorns läge Area Variation (Angle A)."
          },
          {
            "kind": "h3",
            "text": "Varför använder den här formeln sinus?"
          },
          {
            "kind": "p",
            "text": "Den allmänna areaformeln för två sidor och deras mellanliggande vinkel är [[K=\\frac12 xy\\sin(\\theta)]]. Vinkeln [[A]] ligger mellan sidorna [[b]] och [[c]], så att sätta in [[x=b]], [[y=c]], [[\\theta=A]] ger [[K=\\frac12 bc\\sin(A)]]. Sinus står för den vinkelräta komponenten av en sida: bara den del av sidan [[c]] som står vinkelrätt mot [[b]] bidrar med höjd, och den vinkelräta delen är [[c\\sin(A)]]."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: En 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[b=4\\text{ m}]], [[c=5\\text{ m}]] och [[A\\approx36.87^\\circ]]. Eftersom [[\\sin(36.87^\\circ)\\approx0.6]] blir substitutionen: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Detta stämmer med katetformeln eftersom 0,6 är exakt förhållandet [[a/c=3/5]]: sinusformen är katetformen i förklädnad, där [[c\\sin(A)]] spelar rollen som den andra kateten."
          },
          {
            "kind": "h3",
            "text": "Vad händer om vinkeln ändras?"
          },
          {
            "kind": "p",
            "text": "Sinusfaktorn ändrar arean när de två sidlängderna och den mellanliggande vinkeln varieras inom en giltig triangel. Föreställ dig inte en vinkel som ändras medan varje sidlängd förblir fast: i en verklig triangel är sidorna och vinklarna länkade, så en ändrad vinkel omformar triangeln och flyttar arean med sig. Den mellanliggande vinkeln är avgörande för den här formeln just eftersom den kodar hur öppen eller sluten triangeln är."
          },
          {
            "kind": "h3",
            "text": "Vanliga fel i läget för vinkel A"
          },
          {
            "kind": "p",
            "text": "Fem misstag återkommer i det här läget. Att para vinkeln [[A]] med fel sida är vanligast: den här formeln behöver sidan [[b]], inte sidan [[a]], eftersom [[b]] och [[c]] är sidorna som omsluter vinkeln [[A]]. Att mata in vinkeln i fel enhet förstör sinusvärdet: den här kalkylatorn förväntar sig grader, så 36,87 grader får inte matas in som 0,6435 radianer. Att glömma att dividera med två dubblar svaret. Och att mata in en rät vinkel eller en annars icke-spetsig vinkel i spetsvinkelfältet beskriver ingen giltig inmatning för det här läget; vinkeln måste ligga strikt mellan 0 och 90 grader."
          }
        ]
      },
      "sec-angle-b": {
        "h2": "Hitta rätvinklig triangels area med sidan a, hypotenusan c och vinkeln B",
        "blocks": [
          {
            "kind": "p",
            "text": "Det här läget använder den andra spetsiga vinkeln och dess två angränsande sidor: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]] Det är kalkylatorns läge Area Variation (Angle B)."
          },
          {
            "kind": "h3",
            "text": "Varför fungerar den här formeln?"
          },
          {
            "kind": "p",
            "text": "Sidorna [[a]] och [[c]] omsluter vinkeln [[B]]. Med utgångspunkt från den allmänna formeln [[K=\\frac12 xy\\sin(\\theta)]] och substitutionen [[x=a]], [[y=c]], [[\\theta=B]] får man [[K=\\frac12 ac\\sin(B)]]. Strukturen är identisk med formeln för vinkel A; bara beteckningarna flyttas, eftersom geometrin hos de två spetsiga vinklarna speglar sig själv."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: Samma 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3\\text{ m}]], [[c=5\\text{ m}]] och [[B\\approx53.13^\\circ]]. Eftersom [[\\sin(53.13^\\circ)\\approx0.8]] blir beräkningen: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Resultatet stämmer med katetmetoden och metoden för vinkel A, som det måste: alla tre beskriver samma triangel."
          },
          {
            "kind": "h3",
            "text": "Hur hänger vinklarna A och B ihop?"
          },
          {
            "kind": "p",
            "text": "De två spetsiga vinklarna är komplementära: [[[\\boxed{A+B=90^\\circ}]]] Detta ger identiteterna [[\\sin(A)=\\cos(B)]] och [[\\sin(B)=\\cos(A)]]. I 3-4-5-triangeln gäller [[\\sin(A)=0.6=\\cos(B)]] och [[\\sin(B)=0.8=\\cos(A)]]. Dessa samband förklarar varför båda vinkelbaserade lägena beräknar samma area när deras indata är konsekventa: det ena lägets sinus är det andra lägets cosinus, och triangelns geometri är oförändrad oavsett vilken spetsig vinkel man utgår från."
          },
          {
            "kind": "h3",
            "text": "Vanliga fel i läget för vinkel B"
          },
          {
            "kind": "p",
            "text": "Spegelbildens misstag dyker upp här: att använda sidan [[b]] i stället för sidan [[a]], att para vinkeln [[B]] med fel sida och att förväxla de två spetsiga vinklarna med varandra. Att glömma sinusfunktionen eller att glömma att dividera med två är samma räknefel som i läget för vinkel A. Slutligen ger en vinkel som inte motsvarar den uppmätta triangeln, till exempel att mata in 36,87 grader där 53,13 grader hör hemma, tyst ett felaktigt men rimligt utseende svar, så kontrollera alltid att vinkeln stämmer med sidparet."
          }
        ]
      },
      "sec-inradius": {
        "h2": "Hitta rätvinklig triangels area med inradie och halvperimeter",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här metoden behöver bara två tal, inradien [[r]] och halvperimetern [[s]]: [[[\\boxed{K=rs}]]] Inradien är radien för den cirkel som är inskriven i triangeln, den cirkel som tangerar alla tre sidorna. Halvperimetern är halva triangelns omkrets: [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Det är kalkylatorns läge Area from Semiperimeter."
          },
          {
            "kind": "h3",
            "text": "Varför är area lika med inradie gånger halvperimeter?"
          },
          {
            "kind": "p",
            "text": "Förbind incentrum, den inskrivna cirkelns mittpunkt, med alla tre hörnen. Detta delar triangeln i tre mindre trianglar. Varje mindre triangel har samma vinkelräta höjd [[r]], eftersom inradien är det vinkelräta avståndet från incentrum till varje sida. Att addera deras areor ger [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Bryt ut [[r/2]]: [[K=\\frac12 r(a+b+c)]]. Eftersom [[s=(a+b+c)/2]] följer det att [[[\\boxed{K=rs}]]] Detta samband gäller för varje giltig triangel, inte bara en rätvinklig, förutsatt att rätt inradie och halvperimeter är kända."
          },
          {
            "kind": "h3",
            "text": "Att hitta inradien för en rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "För en rätvinklig triangel finns en praktisk genväg: [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Betrakta den som en genväg för rätvinkliga trianglar, inte som den allmänna inradieformeln: för en allmän triangel fås inradien från [[r=K/s]], vilket är cirkelresonemang om man försöker hitta arean. Genvägen fungerar eftersom de två tangentlängderna från hörnet med den räta vinkeln är lika och algebran faller snyggt samman för 90-gradersfallet."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: En 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3]], [[b=4]], [[c=5]]. Först halvperimetern: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]] Sedan inradien: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]] Arean är [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Svaret stämmer med katetformeln, vilket bekräftar att perspektivet med den inskrivna cirkeln och katetperspektivet beskriver samma triangel."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: En 5-12-13-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=5]], [[b=12]], [[c=13]]. Halvperimeter: [[s=(5+12+13)/2=15]]. Inradie: [[r=(5+12-13)/2=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifiera med katetformeln: [[K=(5\\times12)/2=30]]. Båda metoderna stämmer överens, vilket är det förväntade utfallet när sidmätningarna är konsekventa."
          },
          {
            "kind": "h3",
            "text": "Vanliga fel"
          },
          {
            "kind": "p",
            "text": "Att förväxla inradien med den omskrivna radien är signaturmisstaget: inradien tangerar sidorna inifrån, medan den omskrivna radien når hörnen utifrån, och de är olika tal. Att använda hela omkretsen i stället för halvperimetern dubblar svaret. Att tillämpa den rätvinkliga triangelns inradiegenväg [[r=(a+b-c)/2]] på en icke-rätvinklig triangel ger ett meningslöst värde. Att glömma att produkten [[rs]] har kvadratiska enheter, och att mata in inkonsekventa sidmätningar i beräkningarna av [[r]] och [[s]], avrundar listan över vanliga fel."
          }
        ]
      },
      "sec-altitude": {
        "h2": "Hitta rätvinklig triangels area med hypotenusa och höjd",
        "blocks": [
          {
            "kind": "p",
            "text": "Den här metoden använder hypotenusan [[c]] som bas och den vinkelräta höjden [[h]] som höjd: [[[\\boxed{K=\\frac{ch}{2}}]]] Det är kalkylatorns läge Area Variation (Altitude)."
          },
          {
            "kind": "h3",
            "text": "Vad är höjden?"
          },
          {
            "kind": "p",
            "text": "En höjd är en vinkelrät linje dragen från ett hörn till den motsatta sidan. I det här läget börjar höjden vid hörnet med den räta vinkeln [[C]] och möter hypotenusan i 90 grader. Den är inte samma sak som någon av kateterna [[a]] eller [[b]]: kateterna ligger längs triangelns kanter, medan höjden faller in i det inre och landar på hypotenusan. Rätvinkelmarkeringen där [[h]] möter [[c]] är det visuella beviset för att vinkelräthetsvillkoret är uppfyllt."
          },
          {
            "kind": "h3",
            "text": "Varför fungerar formeln?"
          },
          {
            "kind": "p",
            "text": "Det är den allmänna bas-höjd-formeln med ett särskilt val av bas. Utgå från [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Välj hypotenusan som bas, [[\\text{base}=c]], och den vinkelräta höjden som höjd, [[\\text{height}=h]]. Alltså [[K=ch/2]]. Inget i denna härledning är specifikt för rätvinkliga trianglar: varje triangels area kan skrivas så här, men den rätvinkliga triangelns katetformel är helt enkelt snabbare när kateterna är kända."
          },
          {
            "kind": "h3",
            "text": "Fullständigt genomräknat exempel: En 6-8-10-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[c=10\\text{ m}]] och [[h=4.8\\text{ m}]]. Beräkna: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Detta är samma area som en rätvinklig triangel vars kateter mäter 6 m och 8 m, eftersom [[(6\\times8)/2=24]]. Två olika beskrivningar, en area."
          },
          {
            "kind": "h3",
            "text": "Hur kan höjden beräknas?"
          },
          {
            "kind": "p",
            "text": "När båda kateterna och hypotenusan är kända följer höjden av att likställa de två areaformlerna: [[ab/2=ch/2]], alltså [[[\\boxed{h=\\frac{ab}{c}}]]] För 6-8-10-triangeln: [[h=(6\\times8)/10=4.8\\text{ m}]]. Höjden är kortare än hypotenusan, som den måste vara: det vinkelräta är den kortaste vägen från hörnet till linjen. Observera att höjdläget inte beräknar en saknad höjd på egen hand; höjden måste vara känd eller härledd först."
          }
        ]
      },
      "sec-choose": {
        "h2": "Vilken areaformel för rätvinkliga trianglar ska du använda?",
        "blocks": [
          {
            "kind": "p",
            "text": "Fem metoder, en area. Jämförelsen nedan kopplar varje uppsättning kända mätvärden till dess formel och kalkylatorläge. Välj raden som matchar de tal du redan har."
          },
          {
            "kind": "h3",
            "text": "Varför katetformeln ofta är enklast"
          },
          {
            "kind": "p",
            "text": "Katetformeln behöver bara två mätvärden och ingen trigonometri. Multiplicera, halvera, klart. När de två vinkelräta sidorna finns tillgängliga är varje annan metod en längre väg till samma tal."
          },
          {
            "kind": "h3",
            "text": "När sinusformeln är användbar"
          },
          {
            "kind": "p",
            "text": "En vinkelbaserad metod förtjänar sin plats när de tillgängliga mätvärdena inkluderar en spetsig vinkel, en katet och hypotenusan, som de gör vid mätning av siktlinjer eller navigationstrianglar. Om vinkeln inte vore känd skulle man först behöva återställa den saknade kateten innan katetformeln kunde användas; sinusformen hoppar över den omvägen."
          },
          {
            "kind": "h3",
            "text": "När halvperimetermetoden är användbar"
          },
          {
            "kind": "p",
            "text": "Inradie-halvperimeter-formeln passar geometriproblem som redan involverar en inskriven cirkel, eller situationer där [[r]] och [[s]] är kända från tidigare steg. Den är också en utmärkt oberoende korskontroll: eftersom den inte delar någon aritmetik med katetformeln tyder överensstämmelse mellan de två starkt på att båda är rätt."
          },
          {
            "kind": "h3",
            "text": "När höjdformeln är användbar"
          },
          {
            "kind": "p",
            "text": "Höjdmetoden är det naturliga valet när hypotenusan och dess vinkelräta höjd är de kända storheterna, vilket händer i uppdelningsproblem där en triangel delas längs sin höjd. Liksom katetformeln är det en ren bas-höjd-beräkning utan trigonometri."
          }
        ],
        "table": {
          "headers": ["Kända mätvärden", "Rekommenderad metod", "Formel"],
          "rows": [
            ["Båda vinkelräta kateterna [[a]], [[b]]", "Area from Legs", "[[K=ab/2]]"],
            ["Kateten [[b]], hypotenusan [[c]], vinkeln [[A]]", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]"],
            ["Kateten [[a]], hypotenusan [[c]], vinkeln [[B]]", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]"],
            ["Inradien [[r]], halvperimetern [[s]]", "Area from Semiperimeter", "[[K=rs]]"],
            ["Hypotenusan [[c]], den vinkelräta höjden [[h]]", "Area Variation (Altitude)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "Fem paneler som visar areaformlerna K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs och K=ch/2",
        "figcaption": "De fem areaformlerna och de mätvärden var och en behöver."
      },
      "sec-howto": {
        "h2": "Så här använder du areakalkylatorn för rätvinkliga trianglar",
        "blocks": [
          {
            "kind": "p",
            "text": "Följ dessa steg för vart och ett av de fem lägena. Att välja rätt läge är viktigare än allt annat: läget avgör vilken formel som körs, så en korrekt formel med fel läge besvarar ändå fel fråga."
          },
          {
            "kind": "h3",
            "text": "Komplett genomgång: Alla fem lägena på en 3-4-5-triangel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3]], [[b=4]], [[c=5]], med [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] och [[h=2.4]] visar det här vad varje läge behöver och returnerar. Varje läge returnerar [[[\\boxed{K=6\\text{ square units}}]]]"
          }
        ],
        "steps": [
          "<strong>Identifiera de mätvärden som redan är kända.</strong> Lista vilka av kateterna, hypotenusan, vinklarna, inradien, halvperimetern eller höjden du faktiskt har.",
          "<strong>Välj det kalkylatorläge som matchar dessa mätvärden.</strong> Area from Legs, Area Variation (Angle A), Area Variation (Angle B), Area from Semiperimeter eller Area Variation (Altitude).",
          "<strong>Läs etiketterna på de inmatningsfält som krävs.</strong> Varje läge visar bara de fält som dess formel behöver.",
          "<strong>Identifiera kateterna, hypotenusan, vinkeln, inradien, halvperimetern eller höjden efter behov.</strong> Matcha varje känt mätvärde med dess etikett, med hjälp av den här guidens beteckningar.",
          "<strong>Mata in det första mätvärdet som krävs.</strong> Till exempel \"Leg a\" i katetläget.",
          "<strong>Mata in de återstående mätvärdena.</strong> Behåll värdena i de fält som deras etiketter beskriver.",
          "<strong>Välj kompatibla enheter med de tillgängliga enhetsväljarna.</strong> Alla längdinmatningar måste dela ett enhetssystem innan de multipliceras.",
          "<strong>För vinkelbaserade lägen, mata in rätt spetsig vinkel.</strong> Den här kalkylatorn förväntar sig vinklar i grader. Mata in vinkeln [[A]] i läget för vinkel A och vinkeln [[B]] i läget för vinkel B, aldrig den räta vinkeln.",
          "<strong>Kontrollera att alla inmatningar är positiva och beskriver en giltig triangel.</strong> Längder måste vara positiva, och hypotenusan måste överstiga vardera kateten.",
          "<strong>Klicka på Beräkna Area.</strong> Knappen kör det valda lägets formel.",
          "<strong>Granska arearesultatet och lösningsstegen.</strong> Kalkylatorn visar formeln, substitutionen och den slutliga arean i kvadratiska enheter.",
          "<strong>Använd den levande triangelvisualiseringen för att verifiera etiketterna.</strong> Bekräfta att diagrammets sid- och vinkeletiketter motsvarar dina avsedda mätvärden.",
          "<strong>Använd Återställ när du startar en ny beräkning.</strong> Knappen Återställ rensar alla fält så att nästa beräkning startar rent."
        ],
        "closingParagraphs": [
          "1. <strong>Area from Legs.</strong> Mata in \"Leg a\" = 3 och \"Leg b\" = 4. Formel: [[K=ab/2]]. Substitution: [[K=(3\\times4)/2]]. Resultat: 6 kvadratenheter.",
          "2. <strong>Area Variation (Angle A).</strong> Mata in \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Formel: [[K=bc\\sin(A)/2]]. Substitution: [[K=(4\\times5\\times0.6)/2]]. Resultat: 6 kvadratenheter.",
          "3. <strong>Area Variation (Angle B).</strong> Mata in \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Formel: [[K=ac\\sin(B)/2]]. Substitution: [[K=(3\\times5\\times0.8)/2]]. Resultat: 6 kvadratenheter.",
          "4. <strong>Area from Semiperimeter.</strong> Mata in \"Inradius r\" = 1 och \"Semiperimeter s\" = 6. Formel: [[K=rs]]. Substitution: [[K=1\\times6]]. Resultat: 6 kvadratenheter.",
          "5. <strong>Area Variation (Altitude).</strong> Mata in \"Hypotenuse c\" = 5 och \"Altitude h\" = 2.4. Formel: [[K=ch/2]]. Substitution: [[K=(5\\times2.4)/2]]. Resultat: 6 kvadratenheter.",
          "Varje läge använder en annan uppsättning kända värden, och inget av dem kräver samma inmatningsfält. Det gemensamma svaret är poängen: fem beskrivningar, en triangel, en area."
        ]
      },
      "sec-applications": {
        "h2": "Verkliga tillämpningar av areaberäkningar för rätvinkliga trianglar",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje exempel anger situationen, de kända mätvärdena, det kalkylatorläge som passar, varför det läget passar, formeln, den stegvisa substitutionen, det slutliga svaret i kvadratiska enheter, en tolkning på enkel svenska, en verifieringsidé där det är användbart, och antagandena bakom triangelmodellen."
          },
          {
            "kind": "h3",
            "text": "Exempel 1: Beräkna arean av en triangulär trädgård"
          },
          {
            "kind": "p",
            "text": "En trädgård innehåller en rätvinklig planteringssektion med vinkelräta kateter på 6 m och 8 m. Välj Area from Legs, det naturliga valet när båda kateterna mäts direkt: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Sektionen täcker 24 kvadratmeter planteringsyta. Detta förutsätter att trädgårdssektionen representeras korrekt av en rätvinklig triangel med raka kanter."
          },
          {
            "kind": "h3",
            "text": "Exempel 2: Mäta en triangulär plywoodskiva"
          },
          {
            "kind": "p",
            "text": "En snickare skär till en rätvinklig skiva med kateter som mäter 1,2 m och 0,8 m. Välj Area from Legs: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]] Skivan täcker knappt en halv kvadratmeter, vilket hjälper till att uppskatta materialtäckning. Skärtillägg och materialspill ingår inte i denna geometriska area."
          },
          {
            "kind": "h3",
            "text": "Exempel 3: Hitta arean av ett triangulärt segel"
          },
          {
            "kind": "p",
            "text": "En triangulär segelsektion har vinkelräta kateter på 5 m och 12 m. Välj Area from Legs: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Formeln ger den plana arean av den triangulära sektionen, användbar för tyguppskattningar innan sömmar och krökning beaktas."
          },
          {
            "kind": "h3",
            "text": "Exempel 4: Uppskatta en rätvinklig marksektion"
          },
          {
            "kind": "p",
            "text": "En lantmäterimätning identifierar en rätvinklig sektion med vinkelräta sidor på 30 m och 40 m. Välj Area from Legs: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]] Detta är arean av den angivna triangulära sektionen, inte nödvändigtvis den totala arean av den omgivande fastigheten. Verkliga markgränser kan kräva mer detaljerad mätning än en enda triangelmodell."
          },
          {
            "kind": "h3",
            "text": "Exempel 5: Beräkna en takgavels area med vinkel A"
          },
          {
            "kind": "p",
            "text": "En förenklad triangulär taksektion har [[b=6\\text{ m}]], [[c=10\\text{ m}]] och [[A\\approx53.13^\\circ]]. Välj Area Variation (Angle A), eftersom en katet, hypotenusan och den mellanliggande vinkeln är de uppmätta data. Med [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Resultatet är arean av det triangulära tvärsnittet. Ett verkligt taks totala yta beror på dess tredimensionella geometri och andra taksektioner."
          },
          {
            "kind": "h3",
            "text": "Exempel 6: Hitta arean av en triangulär markis"
          },
          {
            "kind": "p",
            "text": "En rätvinklig markissektion har [[b=4\\text{ m}]], [[c=5\\text{ m}]] och [[A\\approx36.87^\\circ]]. Välj Area Variation (Angle A): [[K=bc\\sin(A)/2]], och med [[\\sin(36.87^\\circ)\\approx0.6]] blir det [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Detta förutsätter att mätvärdena beskriver en plan rätvinklig triangel, vilket gäller för en spänd rektangulär markis som skurits på diagonalen."
          },
          {
            "kind": "h3",
            "text": "Exempel 7: Beräkna en triangulär stödskiva med vinkel B"
          },
          {
            "kind": "p",
            "text": "En stödskiva har [[a=3\\text{ m}]], [[c=5\\text{ m}]] och [[B\\approx53.13^\\circ]]. Välj Area Variation (Angle B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Den vinkelbaserade formeln hittar arean utan att båda kateterna matas in direkt, vilket hjälper när den andra kateten aldrig mättes."
          },
          {
            "kind": "h3",
            "text": "Exempel 8: Hitta arean av en takstolssektion"
          },
          {
            "kind": "p",
            "text": "En rätvinklig takstolssektion har [[a=5\\text{ m}]], [[c=13\\text{ m}]] och [[B\\approx67.38^\\circ]]. Välj Area Variation (Angle B). Eftersom [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Detta är den triangulära sektionens geometriska area, inte en beräkning av strukturell bärförmåga."
          },
          {
            "kind": "h3",
            "text": "Exempel 9: Beräkna area från inradie och halvperimeter"
          },
          {
            "kind": "p",
            "text": "Betrakta en 3-4-5 rätvinklig triangel med [[r=1]] och [[s=6]]. Välj Area from Semiperimeter: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]] Inradien och halvperimetern ger en alternativ väg som aldrig multiplicerar de två kateterna, men ändå landar på samma svar."
          },
          {
            "kind": "h3",
            "text": "Exempel 10: Hitta arean av en triangulär 5-12-13-tomt"
          },
          {
            "kind": "p",
            "text": "En rätvinklig tomt har sidorna [[a=5]], [[b=12]], [[c=13]]. Välj Area from Semiperimeter. Halvperimeter: [[s=(5+12+13)/2=15]]. Inradie: [[r=(5+12-13)/2=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]] Verifiera med katetformeln: [[K=(5\\times12)/2=30]]. Båda metoderna stämmer överens eftersom båda beskriver samma tomt."
          },
          {
            "kind": "h3",
            "text": "Exempel 11: Uppskatta en triangulär skivas area från höjden"
          },
          {
            "kind": "p",
            "text": "En triangulär skiva representeras av en rätvinklig triangel vars hypotenusa mäter 10 m och vars vinkelräta höjd mot hypotenusan är 4,8 m. Välj Area Variation (Altitude): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Höjden måste vara vinkelrät mot hypotenusan: varje annan linje från hörnet till hypotenusan är längre och skulle överdriva arean."
          },
          {
            "kind": "h3",
            "text": "Exempel 12: Beräkna en triangulär sektion från hypotenusa och höjd"
          },
          {
            "kind": "p",
            "text": "En rätvinklig sektion har en hypotenusa på 20 m och en vinkelrät höjd på 9 m. Välj Area Variation (Altitude): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]] Detta är triangelns area när mätvärdena beskriver samma giltiga rätvinkliga triangel, vilket de gör här: 9 m ligger gott och väl under hypotenusans längd, som ett vinkelrätt måste."
          },
          {
            "kind": "h3",
            "text": "Jämförelse av praktiska exempel"
          }
        ],
        "table": {
          "headers": ["Situation", "Kända värden", "Kalkylatorläge", "Formel", "Slutlig area", "Tolkning"],
          "rows": [
            ["Trädgårdsbädd", "Kateter 6 m, 8 m", "Area from Legs", "[[K=ab/2]]", "24 m²", "Planteringsyta"],
            ["Plywoodskiva", "Kateter 1.2 m, 0.8 m", "Area from Legs", "[[K=ab/2]]", "0.48 m²", "Materialtäckning"],
            ["Segel", "Kateter 5 m, 12 m", "Area from Legs", "[[K=ab/2]]", "30 m²", "Plan tygarea"],
            ["Marksektion", "Kateter 30 m, 40 m", "Area from Legs", "[[K=ab/2]]", "600 m²", "Sektionen, inte hela fastigheten"],
            ["Takgavel", "b 6 m, c 10 m, A 53.13°", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Endast tvärsnitt"],
            ["Markis", "b 4 m, c 5 m, A 36.87°", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Plan tygarea"],
            ["Stödskiva", "a 3 m, c 5 m, B 53.13°", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Ingen andra katet behövs"],
            ["Takstolssektion", "a 5 m, c 13 m, B 67.38°", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometri, inte bärförmåga"],
            ["3-4-5-triangel", "r 1, s 6", "Area from Semiperimeter", "[[K=rs]]", "6 kvadratenheter", "Inskrivna-cirkel-perspektiv på area"],
            ["5-12-13-tomt", "r 2, s 15", "Area from Semiperimeter", "[[K=rs]]", "30 kvadratenheter", "Stämmer med katetkontroll"],
            ["Triangulär skiva", "c 10 m, h 4.8 m", "Area Variation (Altitude)", "[[K=ch/2]]", "24 m²", "Höjden måste vara vinkelrät"],
            ["Triangulär sektion", "c 20 m, h 9 m", "Area Variation (Altitude)", "[[K=ch/2]]", "90 m²", "Giltig rätvinklig triangel"]
          ]
        },
        "imgAlt": "Fyra paneler: trädgård 24 kvm, takgavel 24 kvm, takstol 30 kvm och skiva 24 kvm, var och en med sin triangel",
        "figcaption": "Fyra verkliga beräkningar: trädgård, takgavel, takstol och skiva, var och en med sin triangel och slutliga area."
      },
      "sec-verify": {
        "h2": "Så här verifierar du arean av en rätvinklig triangel",
        "blocks": [
          {
            "kind": "p",
            "text": "En 3-4-5-triangel, fem metoder, ett svar. Givet [[a=3]], [[b=4]], [[c=5]], med [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] och [[h=ab/c=12/5=2.4]]:"
          },
          {
            "kind": "p",
            "text": "<strong>Metod 1, kateter:</strong> [[K=(3\\times4)/2=6]]. <strong>Metod 2, vinkel A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Metod 3, vinkel B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Metod 4, inradie och halvperimeter:</strong> [[K=1\\times6=6]]. <strong>Metod 5, hypotenusa och höjd:</strong> [[K=(5\\times2.4)/2=6]]."
          },
          {
            "kind": "p",
            "text": "Detta är fem matematiska vägar till samma geometriska storhet. Triangelns area beror inte på vilken korrekt formel som används; den beror på triangelns faktiska geometri. När två oberoende metoder stämmer överens om din triangel kan du lita på talet."
          }
        ],
        "imgAlt": "3-4-5-triangel med fem paneler: kateter, vinkel A, vinkel B, inradie-halvperimeter, höjd, alla ger arean 6",
        "figcaption": "Olika indata, olika formler, samma triangelarea."
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid beräkning av rätvinklig triangels area",
        "blocks": [
          {
            "kind": "p",
            "text": "Areafel beror sällan på räknefel. De beror på felaktiga beteckningar, formelförväxlingar och enhetsmissar. De arton nedan täcker nästan varje felaktigt svar som den här sidans kalkylator kan producera."
          },
          {
            "kind": "h3",
            "text": "1. Att glömma att dividera med två"
          },
          {
            "kind": "p",
            "text": "Att multiplicera kateterna utan att halvera ger rektangelns area, inte triangelns. Med kateterna 3 och 4 är [[3\\times4=12]] fel; [[(3\\times4)/2=6]] är rätt. Åtgärd: avsluta varje katet- eller bas-höjd-beräkning med divisionen med två."
          },
          {
            "kind": "h3",
            "text": "2. Att använda hypotenusan som en av de vinkelräta kateterna"
          },
          {
            "kind": "p",
            "text": "Hypotenusan är aldrig en katet. Att mata in c = 5 som en katet tillsammans med den andra kateten 3 ger [[(5\\times3)/2=7.5]] i stället för 6. Åtgärd: identifiera först den längsta sidan och reservera den för hypotenusafältet."
          },
          {
            "kind": "h3",
            "text": "3. Att para vinkel A med fel sida"
          },
          {
            "kind": "p",
            "text": "Formeln för vinkel A behöver sidan [[b]], den sida som omsluter vinkeln [[A]] tillsammans med hypotenusan. Att mata in sidan [[a]] i stället beräknar fel produkt. Åtgärd: kontrollera att vinkeln [[A]] ligger mellan sidorna [[b]] och [[c]] innan värden matas in."
          },
          {
            "kind": "h3",
            "text": "4. Att para vinkel B med fel sida"
          },
          {
            "kind": "p",
            "text": "Spegelbilden: formeln för vinkel B behöver sidan [[a]], inte sidan [[b]]. Åtgärd: bekräfta att vinkeln [[B]] ligger mellan sidorna [[a]] och [[c]]."
          },
          {
            "kind": "h3",
            "text": "5. Att använda fel mellanliggande vinkel i en sinusformel"
          },
          {
            "kind": "p",
            "text": "Att mata in 36,87 grader där 53,13 grader hör hemma, eller vice versa, ger en rimlig men felaktig area. Åtgärd: matcha vinkeln med sidparet: vinkel A hör ihop med [[b]] och [[c]], vinkel B med [[a]] och [[c]]."
          },
          {
            "kind": "h3",
            "text": "6. Att förväxla höjden med en katet"
          },
          {
            "kind": "p",
            "text": "Höjden [[h]] faller från hörnet med den räta vinkeln till hypotenusan; en katet löper längs triangelns kant. Att mata in en katet som höjd överdriver höjden. Åtgärd: höjden måste landa på hypotenusan med en rätvinkelmarkering."
          },
          {
            "kind": "h3",
            "text": "7. Att använda en linje som inte är vinkelrät som höjd"
          },
          {
            "kind": "p",
            "text": "Varje icke-vinkelrät linje från hörnet till hypotenusan är längre än den sanna höjden, så arean blir för stor. Åtgärd: verifiera vinkelrätheten, genom konstruktion eller med kontrollen [[h=ab/c]], innan höjdläget används."
          },
          {
            "kind": "h3",
            "text": "8. Att förväxla inradien med den omskrivna radien"
          },
          {
            "kind": "p",
            "text": "Inradien tangerar sidorna inifrån; den omskrivna radien når hörnen utifrån. I en rätvinklig triangel är den omskrivna radien [[c/2]], alltid större än inradien. Att mata in den omskrivna radien i formeln [[K=rs]] blåser upp arean. Åtgärd: använd [[r=(a+b-c)/2]] för den rätvinkliga triangelns inradie."
          },
          {
            "kind": "h3",
            "text": "9. Att använda hela omkretsen i stället för halvperimetern"
          },
          {
            "kind": "p",
            "text": "Formeln är [[K=rs]] där [[s]] är halvperimetern. Att mata in hela omkretsen 12 i stället för 6 i 3-4-5-triangeln ger 12 i stället för 6. Åtgärd: halvera omkretsen innan den multipliceras med [[r]]."
          },
          {
            "kind": "h3",
            "text": "10. Att blanda inkompatibla mätenheter"
          },
          {
            "kind": "p",
            "text": "Kateter på 3 meter och 40 centimeter är inte 3 och 40 i en formel. Åtgärd: konvertera varje inmatning till en enhet, till exempel 3 m och 0,4 m, innan beräkning."
          },
          {
            "kind": "h3",
            "text": "11. Att ange kvadratmeter som meter"
          },
          {
            "kind": "p",
            "text": "En area på 6 m² är inte 6 m. Den kvadratiska enheten är en del av svarets betydelse: den säger hur mycket yta, inte hur mycket längd. Åtgärd: skriv alltid den kvadratiska enheten tillsammans med talet."
          },
          {
            "kind": "h3",
            "text": "12. Att avrunda sinusvärdet för tidigt"
          },
          {
            "kind": "p",
            "text": "Att använda 0,6 för sinus när det sanna värdet är 0,6000 är ofarligt, men att avrunda 0,9231 till 0,9 mitt i beräkningen förskjuter resultatet. Åtgärd: behåll full precision genom varje steg och avrunda bara det slutliga svaret."
          },
          {
            "kind": "h3",
            "text": "13. Att mata in en rät vinkel eller ogiltig vinkel i ett spetsvinkelfält"
          },
          {
            "kind": "p",
            "text": "Vinkellägena förväntar sig en spetsig vinkel mellan 0 och 90 grader. Att mata in 90 grader eller ett negativt värde beskriver ingen giltig inmatning för dessa lägen. Åtgärd: mata in den spetsiga vinkel som triangeln faktiskt har, i grader."
          },
          {
            "kind": "h3",
            "text": "14. Att anta att alla fem lägen kräver samma mätvärden"
          },
          {
            "kind": "p",
            "text": "Varje läge begär en annan uppsättning indata: katetläget behöver två kateter, läget för vinkel A behöver en katet, hypotenusan och en vinkel, och halvperimeterläget behöver en inradie och en halvperimeter. Åtgärd: läs fältetiketterna för det läge du valt."
          },
          {
            "kind": "h3",
            "text": "15. Att anta att en större omkrets alltid betyder en proportionellt större area"
          },
          {
            "kind": "p",
            "text": "Omkrets och area skalar olika: att fördubbla alla sidor fyrdubblar arean. En triangel med större omkrets kan till och med ha mindre area om den är lång och smal. Åtgärd: jämför areor med areaformler, aldrig med omkretsar."
          },
          {
            "kind": "h3",
            "text": "16. Att glömma att samma area kan beräknas på flera sätt"
          },
          {
            "kind": "p",
            "text": "Att behandla varje metod som ett separat faktum missar den inbyggda verifieringen: om två metoder är oense är något fel med indata eller lägesvalet. Åtgärd: kör en andra metod och undersök varje avvikelse."
          },
          {
            "kind": "h3",
            "text": "17. Att mata in sidlängder som inte kan beskriva den avsedda triangeln"
          },
          {
            "kind": "p",
            "text": "Sidor som inte klarar Pythagoras-kontrollen, som 2, 3 och 10, beskriver ingen rätvinklig triangel alls. Åtgärd: verifiera [[a^2+b^2=c^2]] innan du litar på någon area som bygger på dessa sidor."
          },
          {
            "kind": "h3",
            "text": "18. Att använda den rätvinkliga triangelns inradiegenväg för en icke-rätvinklig triangel"
          },
          {
            "kind": "p",
            "text": "Formeln [[r=(a+b-c)/2]] är härledd från 90-gradersgeometrin. Att tillämpa den på en spetsig eller trubbig triangel ger en meningslös inradie. Åtgärd: använd denna genväg endast när triangeln är bekräftat rätvinklig."
          },
          {
            "kind": "h3",
            "text": "Fel mot rätt: Ett konkret exempel"
          },
          {
            "kind": "p",
            "text": "Givet [[a=3]] och [[b=4]] hoppar en felaktig beräkning över halveringen: [[K=3\\times4=12]]. Det är arean av den motsvarande 3 gånger 4-rektangeln, inte den rätvinkliga triangeln. Den korrekta beräkningen är [[K=(3\\times4)/2=6]]. Triangeln upptar hälften av rektangeln, så divisionen med två är det som förvandlar ett rektangelsvar till ett triangelsvar."
          }
        ]
      },
      "sec-validate": {
        "h2": "Så här kontrollerar du om ditt arearesultat är giltigt",
        "blocks": [
          {
            "kind": "p",
            "text": "Sex kontroller fångar den stora majoriteten av ogiltiga resultat innan de lämnar sidan."
          },
          {
            "kind": "h3",
            "text": "Kontroll 1: Positiva mätvärden"
          },
          {
            "kind": "p",
            "text": "Alla nödvändiga längder måste vara positiva: [[a>0]], [[b>0]], [[c>0]]. För inradieläget gäller [[r>0]] och [[s>0]], och höjden måste också vara positiv. Noll eller negativa inmatningar beskriver ingen triangel."
          },
          {
            "kind": "h3",
            "text": "Kontroll 2: Giltiga sidlängder för triangeln"
          },
          {
            "kind": "p",
            "text": "För en rätvinklig triangel måste [[a^2+b^2=c^2]] gälla, och hypotenusan måste vara längre än vardera kateten. Om sidorna inte klarar denna kontroll är indata inkonsekventa och arean meningslös."
          },
          {
            "kind": "h3",
            "text": "Kontroll 3: Korrekt vinkel-sida-parning"
          },
          {
            "kind": "p",
            "text": "Vinkeln [[A]] paras med sidorna [[b]] och [[c]] i formeln för den mellanliggande vinkeln; vinkeln [[B]] paras med sidorna [[a]] och [[c]]. Bekräfta parningen innan du accepterar ett vinkelbaserat resultat."
          },
          {
            "kind": "h3",
            "text": "Kontroll 4: Korrekt höjd"
          },
          {
            "kind": "p",
            "text": "Höjden [[h]] måste vara vinkelrät mot hypotenusan [[c]]. Ett snabbt rimlighetstest: höjden är alltid kortare än hypotenusan och kortare än vardera kateten."
          },
          {
            "kind": "h3",
            "text": "Kontroll 5: Korrekta areaenheter"
          },
          {
            "kind": "p",
            "text": "Om inmatningslängderna är i meter måste arean vara i kvadratmeter; centimeter ger kvadratcentimeter. Svaret har enheten kvadraten av inmatningsenheten, aldrig själva inmatningsenheten."
          },
          {
            "kind": "h3",
            "text": "Kontroll 6: Korskontrollera med en annan metod"
          },
          {
            "kind": "p",
            "text": "Använd 3-4-5-triangeln för att jämföra katetformeln med halvperimeterformeln: [[(3\\times4)/2=6]] och [[1\\times6=6]]. Båda måste ge 6 kvadratenheter. Små avvikelser i vinkelbaserade beräkningar kan komma från avrundade vinkelmätningar eller avrundade trigonometriska värden; större avvikelser signalerar ett verkligt fel. Den här guiden anger ingen precisionstolerans eller noggrannhetsgaranti för kalkylatorn: kontrollen handlar om konsekvens, inte om utlovad precision."
          }
        ]
      },
      "sec-conclusion": {
        "h2": "En triangel, fem metoder, en area",
        "blocks": [
          {
            "kind": "p",
            "text": "Varje metod på den här sidan besvarar samma fråga från en annan utgångspunkt. Kateter när du har båda vinkelräta sidorna, sinus när du har en mellanliggande vinkel, inradie och halvperimeter när den inskrivna cirkeln är i sikte, höjd när hypotenusan och dess höjd är kända. Matcha läget med dina mätvärden, mata in dem i rätt fält med kompatibla enheter, och låt kalkylatorn sköta aritmetiken. Verifiera sedan med en andra metod: två vägar till samma tal är det säkraste tecknet på att geometrin stämmer."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Vilken är formeln för arean av en rätvinklig triangel?",
        "answer": "Standardformeln är K = ab/2, där a och b är de två vinkelräta kateterna. Fyra likvärdiga metoder täcker andra kända mätvärden: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (inradie gånger halvperimeter) och K = ch/2 (hypotenusa gånger höjd, dividerat med två)."
      },
      {
        "question": "Varför dividerar man med två när man beräknar triangelarea?",
        "answer": "Två identiska rätvinkliga trianglar förenas längs sina hypotenusor till en rektangel med arean ab. En triangel är exakt hälften av den rektangeln, så arean är ab/2. Divisionen med två är geometrisk, inte godtycklig, och den förekommer i varje areametod på den här sidan."
      },
      {
        "question": "Kan jag beräkna arean utan att känna hypotenusan?",
        "answer": "Ja. Katetformeln K = ab/2 behöver ingen hypotenusa, och formeln för inradie-halvperimeter K = rs behöver det inte heller. Hypotenusan krävs bara för de vinkelbaserade lägena och höjdläget."
      },
      {
        "question": "Hur hittar jag arean med en sida och en vinkel?",
        "answer": "Använd formen för den mellanliggande vinkeln. Med kateten b, hypotenusan c och vinkeln A är arean K = bc sin(A)/2. Med kateten a, hypotenusan c och vinkeln B är den K = ac sin(B)/2. Mata in vinkeln i grader och se till att det är den spetsiga vinkeln mellan de två kända sidorna."
      },
      {
        "question": "Varför använder den vinkelbaserade formeln sinus?",
        "answer": "Den allmänna formeln för två sidor och deras mellanliggande vinkel är K = 1/2 xy sin(theta). Sinus extraherar den vinkelräta komponenten av en sida i förhållande till den andra, vilket är den effektiva höjden. För vinkeln A som omsluts av sidorna b och c ger det K = bc sin(A)/2."
      },
      {
        "question": "Vad är inradien för en rätvinklig triangel?",
        "answer": "Inradien är radien för den cirkel som är inskriven i triangeln och tangerar alla tre sidorna. För en rätvinklig triangel kan den beräknas som r = (a + b - c)/2. Det är inte den omskrivna radien, som når hörnen och är lika med c/2 i en rätvinklig triangel."
      },
      {
        "question": "Vad är skillnaden mellan omkrets och halvperimeter?",
        "answer": "Omkretsen är den totala randlängden, a + b + c. Halvperimetern är hälften av den, s = (a + b + c)/2. Areaformeln K = rs använder halvperimetern; att använda hela omkretsen skulle fördubbla svaret."
      },
      {
        "question": "Hur beräknar jag area med hypotenusan och höjden?",
        "answer": "Använd K = ch/2, där c är hypotenusan och h är den vinkelräta höjden från hörnet med den räta vinkeln till hypotenusan. Höjden måste möta hypotenusan i 90 grader; den är inte en av kateterna. Om bara kateterna är kända, hitta först höjden med h = ab/c."
      },
      {
        "question": "Varför ger alla fem areametoderna samma resultat?",
        "answer": "Eftersom de är olika algebraiska beskrivningar av samma geometriska storhet. Katetformeln, sinusformerna, inradie-halvperimeter-produkten och hypotenusa-höjd-formen är alla bevisbart lika för en konsekvent rätvinklig triangel. Överensstämmelse mellan två metoder är den bästa verifieringen av att indata och läge är korrekta."
      },
      {
        "question": "Vilka enheter ska jag använda för arean?",
        "answer": "Kvadratiska enheter som matchar inmatningslängderna: meter ger kvadratmeter, centimeter ger kvadratcentimeter. Konvertera alla inmatningar till en enhet innan beräkning, och rapportera resultatet med den kvadratiska enheten, aldrig en linjär enhet."
      },
      {
        "question": "Kan jag beräkna arean om jag bara känner hypotenusan?",
        "answer": "Nej. Hypotenusan ensam bestämmer inte en unik rätvinklig triangel, så arean är inte fastställd. Du behöver minst ett oberoende mätvärde till: en katet, en spetsig vinkel, höjden, eller inradien tillsammans med halvperimetern."
      },
      {
        "question": "Hur kan jag kontrollera om min areaberäkning är korrekt?",
        "answer": "Kör en andra metod på samma triangel och jämför. För en 3-4-5-triangel ger katetformeln (3 x 4)/2 = 6 och halvperimetermetoden ger 1 x 6 = 6. Verifiera också att sidorna uppfyller Pythagoras sats, bekräfta vinkel-sida-parningen och kontrollera att höjden är vinkelrät mot hypotenusan."
      }
    ],
    "faqHeading": "Vanliga frågor",
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedItems": [
      "Kalkylator för rätvinklig triangels area från kateter",
      "Kalkylator för rätvinklig triangels area från vinkel",
      "Kalkylator för rätvinklig triangels area från halvperimeter",
      "Kalkylator för rätvinklig triangels area från höjd",
      "Kalkylator för rätvinklig triangels omkrets och halvperimeter",
      "Kalkylator för rätvinklig triangels inradie och omskrivna radie",
      "Kalkylator för rätvinklig triangels sidor"
    ]
  },
"zh": {
    "tocHeading": "本指南内容",
    "tocItems": {
      "sec-intro": "什么是直角三角形面积计算器？",
      "sec-triangle": "直角三角形的面积是什么？",
      "sec-legs": "利用两条直角边求直角三角形的面积",
      "sec-angle-a": "利用边 b、斜边 c 和角 A 求直角三角形面积",
      "sec-angle-b": "利用边 a、斜边 c 和角 B 求直角三角形面积",
      "sec-inradius": "利用内切圆半径和半周长求直角三角形面积",
      "sec-altitude": "利用斜边和高求直角三角形面积",
      "sec-choose": "应该使用哪个直角三角形面积公式？",
      "sec-howto": "如何使用直角三角形面积计算器",
      "sec-applications": "直角三角形面积计算的实际应用",
      "sec-verify": "如何验证直角三角形的面积",
      "sec-mistakes": "计算直角三角形面积时的常见错误",
      "sec-validate": "如何检查面积结果是否有效",
      "sec-related": "探索相关的直角三角形计算器",
      "sec-faq": "常见问题",
      "sec-conclusion": "结论"
    },
    "sections": {
      "sec-intro": {
        "h2": "什么是直角三角形面积计算器？",
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形面积计算器可以求出直角三角形三条边所围成的二维面积。例如，一个直角边为 [[a=3\\text{ m}]] 和 [[b=4\\text{ m}]] 的直角三角形，其面积为 [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]：这个三角形占据 6 平方米的表面。面积以平方单位计量，因为它度量的是平面空间，而不是长度。"
          },
          {
            "kind": "p",
            "text": "互相垂直的两条直角边极大地简化了计算。由于两条直角边以 90 度相交，一条直角边可以作为底，另一条作为高，因此面积就是它们乘积的一半。这种简洁性是直角边公式成为大多数学生最先学到的方法的原因之一。"
          },
          {
            "kind": "p",
            "text": "同一个面积存在多种方法，是因为实际问题给出的测量值各不相同。木匠测量板材的两条直角边；测量员测量斜边和一个角；研究内切圆的几何学家知道内切圆半径和半周长。每种方法都把自己的一组已知值转化为同一个面积。本页的计算器提供与这些情形对应的五种模式：Area from Legs、Area Variation (Angle A)、Area Variation (Angle B)、Area from Semiperimeter 和 Area Variation (Altitude)。最好的方法通常是直接使用你已有的测量值的那一种，不需要先做额外的换算。"
          }
        ]
      },
      "sec-triangle": {
        "h2": "直角三角形的面积是什么？",
        "blocks": [
          {
            "kind": "p",
            "text": "本指南全程使用统一的符号：[[A]] 和 [[B]] 是两个锐角，[[C=90^\\circ]] 是直角，边 [[a]] 与角 [[A]] 相对，边 [[b]] 与角 [[B]] 相对，边 [[c]] 是与角 [[C]] 相对的斜边，[[h]] 是从顶点 [[C]] 到斜边的垂直高，[[r]] 是内切圆半径，[[s]] 是半周长，[[K]] 是面积。"
          },
          {
            "kind": "h3",
            "text": "什么是直角三角形？"
          },
          {
            "kind": "p",
            "text": "直角三角形有一个恰好为 90 度的角。它的两条直角边交于直角处，斜边与该角相对。斜边始终是最长的边，另外两个角是锐角：因为三个角之和为 180 度，所以 [[A+B=90^\\circ]]。两条直角边互相垂直，这正是让面积公式如此直接的性质。"
          },
          {
            "kind": "h3",
            "text": "面积是什么意思？"
          },
          {
            "kind": "p",
            "text": "面积度量的是三角形三条边所围成的二维空间。它与周长（度量边界总长度）、边长（度量一维长度）以及体积（度量三维空间）都不同。一块三角形纸片的面积等于它所覆盖的纸张量；一块三角形花园区域的面积等于它所占据的地面。两者都以平方米这样的平方单位表示，因为面积计算的是能够放入该图形内部的单位正方形的数量。"
          },
          {
            "kind": "h3",
            "text": "为什么面积要除以二？"
          },
          {
            "kind": "p",
            "text": "两个全等的直角三角形可以沿斜边拼成一个矩形。如果每个三角形的两条直角边为 [[a]] 和 [[b]]，则矩形的面积为 [[ab]]。一个三角形恰好占据该矩形的一半，因此 [[[\\boxed{K=\\frac{ab}{2}}]]]。除以二并非凑数的系数：它是三角形是矩形一半这一几何事实的直接结果，并且以某种形式出现在本页的每一种面积方法中。"
          },
          {
            "kind": "h3",
            "text": "为什么同一个三角形可以有五个面积公式？"
          },
          {
            "kind": "p",
            "text": "使用不同的测量方法时，三角形的面积不会改变。这些方法只是从不同的已知值出发。两条直角边给出最简单的公式。一条直角边、斜边和夹着的锐角可以用基于正弦的公式。内切圆半径和半周长提供另一种几何关系。斜边和垂直高使用通用的底乘高规则。当输入描述的是同一个有效的三角形时，五种方法必须给出相同的面积，而这种一致性就是最有力的验证：两种方法，一个三角形，一个答案。"
          }
        ],
        "imgAlt": "直角三角形结构：直角边 a 和 b、斜边 c、直角 C、斜边上的高 h，公式 K = ab/2",
        "figcaption": "直角三角形的结构：C 是直角，a 和 b 是直角边，c 是斜边，h 是斜边上的高。"
      },
      "sec-legs": {
        "h2": "利用两条直角边求直角三角形的面积",
        "blocks": [
          {
            "kind": "p",
            "text": "直角边公式是直角三角形面积的起点：[[[\\boxed{K=\\frac{ab}{2}}]]]。它只需要两条互相垂直的边，而本页的其他所有内容都可以看作是从不同输入还原出同一个量的变体。"
          },
          {
            "kind": "h3",
            "text": "什么时候应该使用直角边公式？"
          },
          {
            "kind": "p",
            "text": "只要两条互相垂直的边都已知，就使用这种方法。不需要先计算角度、斜边、内切圆半径或高。直接测量两条直角边在木工、铺砖和课堂习题中很常见，这也是 Area from Legs 模式成为大多数日常计算默认选择的原因。"
          },
          {
            "kind": "h3",
            "text": "公式的工作原理"
          },
          {
            "kind": "p",
            "text": "两条直角边构成三角形的底和垂直高。三角形面积的通用公式是 [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]；由于直角边互相垂直，底和高可以直接取为 [[a]] 和 [[b]]，得到 [[K=ab/2]]。其中不涉及三角函数，也不需要先求出其他边。"
          },
          {
            "kind": "h3",
            "text": "完整示例：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\text{ m}]] 和 [[b=4\\text{ m}]]。第 1 步：写出公式 [[K=ab/2]]。第 2 步：代入数值，[[K=(3\\times4)/2]]。第 3 步：相乘，[[K=12/2]]。第 4 步：除以二，[[[\\boxed{K=6\\text{ m}^2}]]]。答案是 6 平方米，而不是 6 米：单位承载着这个量的含义。"
          },
          {
            "kind": "h3",
            "text": "两条直角边可以互换吗？"
          },
          {
            "kind": "p",
            "text": "可以。乘法满足交换律，因此 [[ab=ba]]，进而 [[ab/2=ba/2]]。只要计算器字段对应的是正确的直角边长度，以相反顺序输入两条直角边，面积不会改变。这种对称性只适用于直角边：把一条直角边与斜边互换会破坏公式。"
          },
          {
            "kind": "h3",
            "text": "如果直角边是小数值怎么办？"
          },
          {
            "kind": "p",
            "text": "小数测量值适用同一个公式。当 [[a=3.5\\text{ cm}]] 且 [[b=9.2\\text{ cm}]] 时：[[K=(3.5\\times9.2)/2]]，[[K=32.2/2]]，[[[\\boxed{K=16.1\\text{ cm}^2}]]]。算术过程完全相同，只是输入的精度不同，因此要保留足够的位数，最后再四舍五入。"
          },
          {
            "kind": "h3",
            "text": "如果一条直角边未知怎么办？"
          },
          {
            "kind": "p",
            "text": "缺失的直角边有时可以先用勾股定理或已知角求出，然后再应用直角边公式。注意，直角边模式本身需要两条直角边：它不会自动还原缺失的边。如果只知道一条直角边和斜边，必须先单独算出缺失的直角边，才能使用该模式。"
          }
        ]
      },
      "sec-angle-a": {
        "h2": "利用边 b、斜边 c 和角 A 求直角三角形面积",
        "blocks": [
          {
            "kind": "p",
            "text": "当边 [[b]]、斜边 [[c]] 和锐角 [[A]] 已知时，这种方法很有用：[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]。这就是计算器的 Area Variation (Angle A) 模式。"
          },
          {
            "kind": "h3",
            "text": "为什么这个公式使用正弦？"
          },
          {
            "kind": "p",
            "text": "两边及其夹角的通用面积公式是 [[K=\\frac12 xy\\sin(\\theta)]]。角 [[A]] 位于边 [[b]] 和 [[c]] 之间，因此代入 [[x=b]]、[[y=c]]、[[\\theta=A]] 得到 [[K=\\frac12 bc\\sin(A)]]。正弦表示的是一条边的垂直分量：只有边 [[c]] 中与 [[b]] 垂直的那部分贡献了高度，而这部分垂直分量就是 [[c\\sin(A)]]。"
          },
          {
            "kind": "h3",
            "text": "完整示例：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[b=4\\text{ m}]]、[[c=5\\text{ m}]] 和 [[A\\approx36.87^\\circ]]。由于 [[\\sin(36.87^\\circ)\\approx0.6]]，代入得：[[K=(4\\times5\\times0.6)/2]]，[[K=12/2]]，[[[\\boxed{K=6\\text{ m}^2}]]]。这与直角边公式一致，因为 0.6 恰好是比值 [[a/c=3/5]]：正弦形式其实就是伪装起来的直角边形式，其中 [[c\\sin(A)]] 扮演了另一条直角边的角色。"
          },
          {
            "kind": "h3",
            "text": "如果角度改变会怎样？"
          },
          {
            "kind": "p",
            "text": "当两条边长和夹角在有效三角形范围内变化时，正弦因子会改变面积。不要想象角度变化而所有边长都固定不变：在真实的三角形中，边和角是相互关联的，因此改变角度会重塑三角形，面积也随之变化。夹角对这个公式至关重要，正是因为它编码了三角形的开合程度。"
          },
          {
            "kind": "h3",
            "text": "角 A 模式中的常见错误"
          },
          {
            "kind": "p",
            "text": "这种模式下反复出现五种错误。将角 [[A]] 与错误的边配对最为常见：这个公式需要的是边 [[b]]，而不是边 [[a]]，因为 [[b]] 和 [[c]] 是夹住角 [[A]] 的两条边。以错误的单位输入角度会破坏正弦值：该计算器要求使用度数，因此 36.87 度不能以 0.6435 弧度输入。忘记除以二会使答案翻倍。在锐角字段中输入直角或非锐角，对该模式来说不是有效输入；角度必须严格介于 0 到 90 度之间。"
          }
        ]
      },
      "sec-angle-b": {
        "h2": "利用边 a、斜边 c 和角 B 求直角三角形面积",
        "blocks": [
          {
            "kind": "p",
            "text": "该模式使用另一个锐角及其两条邻边：[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]。这就是计算器的 Area Variation (Angle B) 模式。"
          },
          {
            "kind": "h3",
            "text": "为什么这个公式成立？"
          },
          {
            "kind": "p",
            "text": "边 [[a]] 和 [[c]] 夹住角 [[B]]。从通用公式 [[K=\\frac12 xy\\sin(\\theta)]] 出发，代入 [[x=a]]、[[y=c]]、[[\\theta=B]] 得到 [[K=\\frac12 ac\\sin(B)]]。其结构与角 A 的公式完全相同，只是标签换了位置，因为两个锐角的几何形状互为镜像。"
          },
          {
            "kind": "h3",
            "text": "完整示例：同一个 3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3\\text{ m}]]、[[c=5\\text{ m}]] 和 [[B\\approx53.13^\\circ]]。由于 [[\\sin(53.13^\\circ)\\approx0.8]]，计算得：[[K=(3\\times5\\times0.8)/2]]，[[K=12/2]]，[[[\\boxed{K=6\\text{ m}^2}]]]。结果必然与直角边法和角 A 法一致：三者描述的是同一个三角形。"
          },
          {
            "kind": "h3",
            "text": "角 A 和角 B 有什么关系？"
          },
          {
            "kind": "p",
            "text": "两个锐角互余：[[[\\boxed{A+B=90^\\circ}]]]。由此得到恒等式 [[\\sin(A)=\\cos(B)]] 和 [[\\sin(B)=\\cos(A)]]。在 3-4-5 三角形中，[[\\sin(A)=0.6=\\cos(B)]] 且 [[\\sin(B)=0.8=\\cos(A)]]。这些关系解释了为什么当输入一致时，两种基于角度的模式会算出相同的面积：一种模式的正弦就是另一种模式的余弦，而无论从哪个锐角出发，三角形的几何形状都不会改变。"
          },
          {
            "kind": "h3",
            "text": "角 B 模式中的常见错误"
          },
          {
            "kind": "p",
            "text": "这里出现的是镜像式错误：用边 [[b]] 代替边 [[a]]、将角 [[B]] 与错误的边配对，以及混淆两个锐角。忘记正弦函数或忘记除以二，与角 A 模式中的算术失误相同。最后，输入与所测三角形不对应的角度，例如在应输入 53.13 度的位置输入了 36.87 度，会悄无声息地产生一个错误但看似合理的面积，因此务必检查角度是否与边对匹配。"
          }
        ]
      },
      "sec-inradius": {
        "h2": "利用内切圆半径和半周长求直角三角形面积",
        "blocks": [
          {
            "kind": "p",
            "text": "这种方法只需要两个数：内切圆半径 [[r]] 和半周长 [[s]]：[[[\\boxed{K=rs}]]]。内切圆半径是三角形内切圆的半径，即与三条边都相切的圆的半径。半周长是三角形周长的一半：[[[\\boxed{s=\\frac{a+b+c}{2}}]]]。这就是计算器的 Area from Semiperimeter 模式。"
          },
          {
            "kind": "h3",
            "text": "为什么面积等于内切圆半径乘以半周长？"
          },
          {
            "kind": "p",
            "text": "将内心（内切圆的圆心）与三个顶点相连。这把三角形分成三个小三角形。每个小三角形的垂直高都相同，为 [[r]]，因为内切圆半径就是内心到每条边的垂直距离。把它们的面积相加得到 [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]。提取公因式 [[r/2]]：[[K=\\frac12 r(a+b+c)]]。由于 [[s=(a+b+c)/2]]，可得 [[[\\boxed{K=rs}]]]。只要内切圆半径和半周长正确，这条关系对任何有效的三角形都成立，不只限于直角三角形。"
          },
          {
            "kind": "h3",
            "text": "求直角三角形的内切圆半径"
          },
          {
            "kind": "p",
            "text": "对于直角三角形有一个方便的捷径：[[[\\boxed{r=\\frac{a+b-c}{2}}]]]。把它当作直角三角形的捷径，而不是通用的内切圆半径公式：对于一般三角形，内切圆半径由 [[r=K/s]] 求得，但如果目标是求面积，这就成了循环论证。这个捷径成立的原因是，从直角顶点引出的两条切线段长度相等，使得代数在 90 度的情形下整齐地化简了。"
          },
          {
            "kind": "h3",
            "text": "完整示例：3-4-5 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]。先求半周长：[[s=(3+4+5)/2]]，[[[\\boxed{s=6}]]]。再求内切圆半径：[[r=(3+4-5)/2]]，[[[\\boxed{r=1}]]]。面积为 [[K=rs]]，[[K=1\\times6]]，[[[\\boxed{K=6\\text{ square units}}]]]。答案与直角边公式一致，证实了内切圆视角和直角边视角描述的是同一个三角形。"
          },
          {
            "kind": "h3",
            "text": "完整示例：5-12-13 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[a=5]]、[[b=12]]、[[c=13]]。半周长：[[s=(5+12+13)/2=15]]。内切圆半径：[[r=(5+12-13)/2=2]]。面积：[[K=2\\times15]]，[[[\\boxed{K=30\\text{ square units}}]]]。用直角边公式验证：[[K=(5\\times12)/2=30]]。两种方法一致，只要边长测量一致，这就是预期的结果。"
          },
          {
            "kind": "h3",
            "text": "常见错误"
          },
          {
            "kind": "p",
            "text": "混淆内切圆半径和外接圆半径是标志性错误：内切圆半径从内部与各边相切，而外接圆半径从外部到达各顶点，两者是不同的数。用完整周长代替半周长会使答案翻倍。把直角三角形内切圆半径捷径 [[r=(a+b-c)/2]] 用在非直角三角形上会得到毫无意义的值。忘记乘积 [[rs]] 的单位是平方单位，以及在计算 [[r]] 和 [[s]] 时输入不一致的边长测量值，也是常见的失误。"
          }
        ]
      },
      "sec-altitude": {
        "h2": "利用斜边和高求直角三角形面积",
        "blocks": [
          {
            "kind": "p",
            "text": "这种方法以斜边 [[c]] 为底、以垂直高 [[h]] 为高：[[[\\boxed{K=\\frac{ch}{2}}]]]。这就是计算器的 Area Variation (Altitude) 模式。"
          },
          {
            "kind": "h3",
            "text": "什么是高？"
          },
          {
            "kind": "p",
            "text": "高是从一个顶点向对边作的垂直线段。在该模式下，高从直角顶点 [[C]] 出发，与斜边成 90 度相交。它不同于任一条直角边 [[a]] 或 [[b]]：直角边沿着三角形的边，而高落入三角形内部，落在斜边上。[[h]] 与 [[c]] 相交处的直角标记，是垂直条件得到满足的视觉保证。"
          },
          {
            "kind": "h3",
            "text": "为什么这个公式成立？"
          },
          {
            "kind": "p",
            "text": "这是通用底乘高公式的一个特定取底方式。从 [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]] 出发。取斜边为底，[[\\text{base}=c]]，取垂直高为高，[[\\text{height}=h]]。因此 [[K=ch/2]]。这个推导并无直角三角形特有的地方：任何三角形的面积都可以这样写，只不过当直角边已知时，直角三角形的直角边公式更快。"
          },
          {
            "kind": "h3",
            "text": "完整示例：6-8-10 三角形"
          },
          {
            "kind": "p",
            "text": "已知 [[c=10\\text{ m}]] 和 [[h=4.8\\text{ m}]]。计算：[[K=(10\\times4.8)/2]]，[[K=48/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。这与直角边为 6 米和 8 米的直角三角形的面积相同，因为 [[(6\\times8)/2=24]]。两种不同的描述，一个面积。"
          },
          {
            "kind": "h3",
            "text": "如何计算高？"
          },
          {
            "kind": "p",
            "text": "当两条直角边和斜边都已知时，令两个面积公式相等即可求出高：[[ab/2=ch/2]]，因此 [[[\\boxed{h=\\frac{ab}{c}}]]]。对于 6-8-10 三角形：[[h=(6\\times8)/10=4.8\\text{ m}]]。高必然比斜边短：垂线段是从顶点到直线的最短路径。注意，高模式不会自行算出缺失的高；高必须先已知或先推导出来。"
          }
        ]
      },
      "sec-choose": {
        "h2": "应该使用哪个直角三角形面积公式？",
        "blocks": [
          {
            "kind": "p",
            "text": "五种方法，一个面积。下面的对比将每组已知测量值映射到对应的公式和计算器模式。选择与你手头数字相符的那一行。"
          },
          {
            "kind": "h3",
            "text": "为什么直角边公式通常最简单"
          },
          {
            "kind": "p",
            "text": "直角边公式只需要两个测量值，不需要三角函数。相乘，除以二，完成。只要两条互相垂直的边可得，其他每种方法都是通向同一个数的更长路径。"
          },
          {
            "kind": "h3",
            "text": "正弦公式何时有用"
          },
          {
            "kind": "p",
            "text": "当现有测量值包含一个锐角、一条直角边和斜边时（如测量视线或导航三角形），基于角度的方法就有了用武之地。如果角度未知，就必须先求出缺失的直角边才能用直角边公式；正弦形式跳过了这个弯路。"
          },
          {
            "kind": "h3",
            "text": "半周长方法何时有用"
          },
          {
            "kind": "p",
            "text": "内切圆半径-半周长公式适合已经涉及内切圆的几何问题，或 [[r]] 和 [[s]] 已从前面的步骤得知的情况。它也是极好的独立交叉验证：因为它与直角边公式没有任何相同的算术步骤，两者一致就强烈表明两者都正确。"
          },
          {
            "kind": "h3",
            "text": "高公式何时有用"
          },
          {
            "kind": "p",
            "text": "当斜边及其垂直高是已知量时（例如沿高把三角形拆分的问题），高方法是最自然的选择。和直角边公式一样，它是纯粹的底乘高计算，不需要三角函数。"
          }
        ],
        "table": {
          "headers": ["已知测量值", "推荐方法", "公式"],
          "rows": [
            ["两条互相垂直的直角边 [[a]]、[[b]]", "Area from Legs", "[[K=ab/2]]"],
            ["直角边 [[b]]、斜边 [[c]]、角 [[A]]", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]"],
            ["直角边 [[a]]、斜边 [[c]]、角 [[B]]", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]"],
            ["内切圆半径 [[r]]、半周长 [[s]]", "Area from Semiperimeter", "[[K=rs]]"],
            ["斜边 [[c]]、垂直高 [[h]]", "Area Variation (Altitude)", "[[K=ch/2]]"]
          ]
        },
        "imgAlt": "五个面板展示面积公式 K=ab/2、K=bc sin(A)/2、K=ac sin(B)/2、K=rs 和 K=ch/2",
        "figcaption": "五个面积公式及其各自所需的测量值。"
      },
      "sec-howto": {
        "h2": "如何使用直角三角形面积计算器",
        "blocks": [
          {
            "kind": "p",
            "text": "对五种模式中的任何一种，都按以下步骤操作。选择正确的模式比其他任何事都重要：模式决定运行哪个公式，因此即使用对了公式，选错模式仍然回答的是错误的问题。"
          },
          {
            "kind": "h3",
            "text": "完整演示：在 3-4-5 三角形上使用全部五种模式"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3]]、[[b=4]]、[[c=5]]，且 [[A\\approx36.87^\\circ]]、[[B\\approx53.13^\\circ]]、[[r=1]]、[[s=6]]、[[h=2.4]]，下面是每种模式的输入和返回结果。每种模式都返回 [[[\\boxed{K=6\\text{ square units}}]]]。"
          }
        ],
        "steps": [
          "<strong>确定已知的测量值。</strong>列出你实际拥有的直角边、斜边、角度、内切圆半径、半周长或高。",
          "<strong>选择与这些测量值匹配的计算器模式。</strong>Area from Legs、Area Variation (Angle A)、Area Variation (Angle B)、Area from Semiperimeter 或 Area Variation (Altitude)。",
          "<strong>阅读所需输入字段的标签。</strong>每种模式只显示其公式需要的字段。",
          "<strong>根据需要确定直角边、斜边、角、内切圆半径、半周长或高。</strong>使用本指南的符号，将每个已知测量值与对应的标签匹配。",
          "<strong>输入第一个所需的测量值。</strong>例如，在直角边模式中输入 \"Leg a\"。",
          "<strong>输入其余测量值。</strong>把每个值放在其标签所描述的字段中。",
          "<strong>使用可用的单位选择器选择兼容的单位。</strong>所有长度输入在相乘之前必须使用同一单位制。",
          "<strong>对于基于角度的模式，输入正确的锐角。</strong>该计算器要求角度以度为单位。在角 A 模式中输入角 [[A]]，在角 B 模式中输入角 [[B]]，绝不要输入直角。",
          "<strong>检查所有输入为正数且描述一个有效的三角形。</strong>长度必须为正，斜边必须长于任一条直角边。",
          "<strong>点击\"计算 Area\"。</strong>该按钮运行所选模式的公式。",
          "<strong>查看面积结果和解题步骤。</strong>计算器会显示公式、代入过程和以平方单位表示的最终面积。",
          "<strong>使用实时三角形可视化图验证标签。</strong>确认图中边和角的标签与你的预期测量值对应。",
          "<strong>开始新的计算时使用\"重置\"。</strong>\"重置\"按钮会清空所有字段，让下一次计算从零开始。"
        ],
        "closingParagraphs": [
          "1. <strong>Area from Legs。</strong>输入 \"Leg a\" = 3 和 \"Leg b\" = 4。公式：[[K=ab/2]]。代入：[[K=(3\\times4)/2]]。结果：6 平方单位。",
          "2. <strong>Area Variation (Angle A)。</strong>输入 \"Leg b\" = 4、\"Hypotenuse c\" = 5、\"Angle A\" = 36.87。公式：[[K=bc\\sin(A)/2]]。代入：[[K=(4\\times5\\times0.6)/2]]。结果：6 平方单位。",
          "3. <strong>Area Variation (Angle B)。</strong>输入 \"Leg a\" = 3、\"Hypotenuse c\" = 5、\"Angle B\" = 53.13。公式：[[K=ac\\sin(B)/2]]。代入：[[K=(3\\times5\\times0.8)/2]]。结果：6 平方单位。",
          "4. <strong>Area from Semiperimeter。</strong>输入 \"Inradius r\" = 1 和 \"Semiperimeter s\" = 6。公式：[[K=rs]]。代入：[[K=1\\times6]]。结果：6 平方单位。",
          "5. <strong>Area Variation (Altitude)。</strong>输入 \"Hypotenuse c\" = 5 和 \"Altitude h\" = 2.4。公式：[[K=ch/2]]。代入：[[K=(5\\times2.4)/2]]。结果：6 平方单位。",
          "每种模式使用不同的已知值集合，没有两种模式需要相同的输入字段。共同的答案才是重点：五种描述，一个三角形，一个面积。"
        ]
      },
      "sec-applications": {
        "h2": "直角三角形面积计算的实际应用",
        "blocks": [
          {
            "kind": "p",
            "text": "每个示例都说明：情境、已知测量值、适用的计算器模式、为什么该模式适用、公式、逐步代入、平方单位的最终答案、通俗的解读、适用的验证思路，以及三角形模型背后的假设。"
          },
          {
            "kind": "h3",
            "text": "示例 1：计算三角形花园的面积"
          },
          {
            "kind": "p",
            "text": "一个花园中有一块直角三角形种植区，两条直角边分别为 6 米和 8 米。当两条直角边都是直接测量时，选择 Area from Legs 是最自然的：[[K=(6\\times8)/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。该区域覆盖 24 平方米的种植面积。这假设该花园区能准确地表示为一个边为直线的直角三角形。"
          },
          {
            "kind": "h3",
            "text": "示例 2：测量一块三角形胶合板"
          },
          {
            "kind": "p",
            "text": "一名木匠切割一块直角三角形板材，直角边长为 1.2 米和 0.8 米。选择 Area from Legs：[[K=(1.2\\times0.8)/2]]，[[K=0.96/2]]，[[[\\boxed{K=0.48\\text{ m}^2}]]]。这块板材覆盖略小于半平方米，有助于估算材料用量。切割余量和材料损耗不计入这个几何面积。"
          },
          {
            "kind": "h3",
            "text": "示例 3：求三角形帆的面积"
          },
          {
            "kind": "p",
            "text": "一块三角形帆的直角边为 5 米和 12 米。选择 Area from Legs：[[K=(5\\times12)/2]]，[[[\\boxed{K=30\\text{ m}^2}]]]。该公式给出三角形截面的平面面积，可在考虑接缝和曲度之前用于估算布料用量。"
          },
          {
            "kind": "h3",
            "text": "示例 4：估算一块直角三角形土地的面积"
          },
          {
            "kind": "p",
            "text": "土地测量确定了一块直角三角形区域，两条直角边为 30 米和 40 米。选择 Area from Legs：[[K=(30\\times40)/2]]，[[[\\boxed{K=600\\text{ m}^2}]]]。这是该三角形区域的面积，不一定是周边整个地块的总面积。真实的土地边界可能需要比单个三角形模型更精细的测量。"
          },
          {
            "kind": "h3",
            "text": "示例 5：利用角 A 计算屋山墙的面积"
          },
          {
            "kind": "p",
            "text": "一个简化的三角形屋顶截面，已知 [[b=6\\text{ m}]]、[[c=10\\text{ m}]] 和 [[A\\approx53.13^\\circ]]。选择 Area Variation (Angle A)，因为测得的数据是一条直角边、斜边和夹角。已知 [[\\sin(53.13^\\circ)\\approx0.8]]：[[K=(6\\times10\\times0.8)/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。结果是三角形截面的面积。真实屋顶的总表面积取决于其三维几何形状和其他屋顶部分。"
          },
          {
            "kind": "h3",
            "text": "示例 6：求三角形遮阳篷的面积"
          },
          {
            "kind": "p",
            "text": "一块直角三角形遮阳篷，已知 [[b=4\\text{ m}]]、[[c=5\\text{ m}]] 和 [[A\\approx36.87^\\circ]]。选择 Area Variation (Angle A)：[[K=bc\\sin(A)/2]]，且已知 [[\\sin(36.87^\\circ)\\approx0.6]]，则 [[K=(4\\times5\\times0.6)/2]]，[[[\\boxed{K=6\\text{ m}^2}]]]。这假设测量值描述的是一个平面直角三角形，对于沿对角线裁剪的绷紧矩形遮阳篷成立。"
          },
          {
            "kind": "h3",
            "text": "示例 7：利用角 B 计算三角形支撑板的面积"
          },
          {
            "kind": "p",
            "text": "一块支撑板，已知 [[a=3\\text{ m}]]、[[c=5\\text{ m}]] 和 [[B\\approx53.13^\\circ]]。选择 Area Variation (Angle B)：[[K=(3\\times5\\times0.8)/2]]，[[[\\boxed{K=6\\text{ m}^2}]]]。基于角度的公式无需直接输入两条直角边即可求出面积，这在第二条直角边从未被测量时很有帮助。"
          },
          {
            "kind": "h3",
            "text": "示例 8：求桁架截面的面积"
          },
          {
            "kind": "p",
            "text": "一个直角三角形桁架截面，已知 [[a=5\\text{ m}]]、[[c=13\\text{ m}]] 和 [[B\\approx67.38^\\circ]]。选择 Area Variation (Angle B)。由于 [[\\sin(67.38^\\circ)\\approx12/13]]：[[K=(5\\times13\\times(12/13))/2]]，[[[\\boxed{K=30\\text{ m}^2}]]]。这是该三角形截面的几何面积，不是结构承载力计算。"
          },
          {
            "kind": "h3",
            "text": "示例 9：利用内切圆半径和半周长计算面积"
          },
          {
            "kind": "p",
            "text": "考虑一个内切圆半径 [[r=1]]、半周长 [[s=6]] 的 3-4-5 直角三角形。选择 Area from Semiperimeter：[[K=rs]]，[[K=1\\times6]]，[[[\\boxed{K=6\\text{ square units}}]]]。内切圆半径和半周长提供了一条从不把两条直角边相乘的替代路径，却得到相同的答案。"
          },
          {
            "kind": "h3",
            "text": "示例 10：求一块 5-12-13 三角形地块的面积"
          },
          {
            "kind": "p",
            "text": "一块直角三角形地块，边长为 [[a=5]]、[[b=12]]、[[c=13]]。选择 Area from Semiperimeter。半周长：[[s=(5+12+13)/2=15]]。内切圆半径：[[r=(5+12-13)/2=2]]。面积：[[K=2\\times15]]，[[[\\boxed{K=30\\text{ square units}}]]]。用直角边公式验证：[[K=(5\\times12)/2=30]]。两种方法一致，因为两者描述的是同一块地。"
          },
          {
            "kind": "h3",
            "text": "示例 11：利用高估算三角形板材的面积"
          },
          {
            "kind": "p",
            "text": "一块三角形板材可表示为直角三角形，斜边长 10 米，斜边上的垂直高为 4.8 米。选择 Area Variation (Altitude)：[[K=ch/2]]，[[K=(10\\times4.8)/2]]，[[[\\boxed{K=24\\text{ m}^2}]]]。高必须垂直于斜边：从顶点到斜边的任何其他线段都更长，会高估面积。"
          },
          {
            "kind": "h3",
            "text": "示例 12：利用斜边和高计算三角形截面"
          },
          {
            "kind": "p",
            "text": "一个直角三角形截面，斜边为 20 米，垂直高为 9 米。选择 Area Variation (Altitude)：[[K=(20\\times9)/2]]，[[[\\boxed{K=90\\text{ m}^2}]]]。当测量值描述的是同一个有效的直角三角形时，这就是该三角形的面积，这里正是如此：9 米远小于斜边长度，垂线段就该如此。"
          },
          {
            "kind": "h3",
            "text": "实际示例对比"
          }
        ],
        "table": {
          "headers": ["情境", "已知值", "计算器模式", "公式", "最终面积", "解读"],
          "rows": [
            ["花园苗床", "直角边 6 米、8 米", "Area from Legs", "[[K=ab/2]]", "24 m²", "种植面积"],
            ["胶合板", "直角边 1.2 米、0.8 米", "Area from Legs", "[[K=ab/2]]", "0.48 m²", "材料覆盖"],
            ["帆", "直角边 5 米、12 米", "Area from Legs", "[[K=ab/2]]", "30 m²", "平面布料面积"],
            ["土地区域", "直角边 30 米、40 米", "Area from Legs", "[[K=ab/2]]", "600 m²", "该区域，而非整块地"],
            ["屋山墙", "b 6 米、c 10 米、A 53.13°", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]", "24 m²", "仅为截面"],
            ["遮阳篷", "b 4 米、c 5 米、A 36.87°", "Area Variation (Angle A)", "[[K=bc\\sin(A)/2]]", "6 m²", "平面织物面积"],
            ["支撑板", "a 3 米、c 5 米、B 53.13°", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]", "6 m²", "无需第二条直角边"],
            ["桁架截面", "a 5 米、c 13 米、B 67.38°", "Area Variation (Angle B)", "[[K=ac\\sin(B)/2]]", "30 m²", "几何量，非承载力"],
            ["3-4-5 三角形", "r 1、s 6", "Area from Semiperimeter", "[[K=rs]]", "6 平方单位", "从内切圆看面积"],
            ["5-12-13 地块", "r 2、s 15", "Area from Semiperimeter", "[[K=rs]]", "30 平方单位", "与直角边验证一致"],
            ["三角形板材", "c 10 米、h 4.8 米", "Area Variation (Altitude)", "[[K=ch/2]]", "24 m²", "高必须垂直"],
            ["三角形截面", "c 20 米、h 9 米", "Area Variation (Altitude)", "[[K=ch/2]]", "90 m²", "有效的直角三角形"]
          ]
        },
        "imgAlt": "四个面板：花园 24 平方米、屋山墙 24 平方米、桁架 30 平方米、板材 24 平方米，各带其三角形",
        "figcaption": "四个实际计算：花园、屋山墙、桁架和板材，各带其三角形和最终面积。"
      },
      "sec-verify": {
        "h2": "如何验证直角三角形的面积",
        "blocks": [
          {
            "kind": "p",
            "text": "一个 3-4-5 三角形，五种方法，一个答案。已知 [[a=3]]、[[b=4]]、[[c=5]]，且 [[A\\approx36.87^\\circ]]、[[B\\approx53.13^\\circ]]、[[r=1]]、[[s=6]]、[[h=ab/c=12/5=2.4]]："
          },
          {
            "kind": "p",
            "text": "<strong>方法 1，直角边：</strong>[[K=(3\\times4)/2=6]]。<strong>方法 2，角 A：</strong>[[K=(4\\times5\\times0.6)/2=6]]。<strong>方法 3，角 B：</strong>[[K=(3\\times5\\times0.8)/2=6]]。<strong>方法 4，内切圆半径和半周长：</strong>[[K=1\\times6=6]]。<strong>方法 5，斜边和高：</strong>[[K=(5\\times2.4)/2=6]]。"
          },
          {
            "kind": "p",
            "text": "这是通向同一几何量的五条数学路径。三角形的面积不取决于使用了哪个正确的公式，而取决于三角形实际的几何形状。只要两种独立的方法对你的三角形给出一致的结果，这个数字就可信。"
          }
        ],
        "imgAlt": "3-4-5 三角形配五个面板：直角边、角 A、角 B、内切圆半径-半周长、高，面积均为 6",
        "figcaption": "不同的输入，不同的公式，相同的三角形面积。"
      },
      "sec-mistakes": {
        "h2": "计算直角三角形面积时的常见错误",
        "blocks": [
          {
            "kind": "p",
            "text": "面积错误很少是算术失误，而是标注错误、公式混淆和单位疏忽。下面这十八条几乎涵盖了本页计算器可能给出的每一种错误答案。"
          },
          {
            "kind": "h3",
            "text": "1. 忘记除以二"
          },
          {
            "kind": "p",
            "text": "把直角边相乘而不除以二，得到的是矩形的面积，而不是三角形的面积。直角边为 3 和 4 时，[[3\\times4=12]] 是错的；[[(3\\times4)/2=6]] 是对的。修正：每次做直角边或底乘高计算，都以除以二收尾。"
          },
          {
            "kind": "h3",
            "text": "2. 把斜边当作一条直角边使用"
          },
          {
            "kind": "p",
            "text": "斜边永远不是直角边。把 c = 5 当作一条直角边、另一条直角边为 3 输入，会得到 [[(5\\times3)/2=7.5]] 而不是 6。修正：先找出最长的边，把它留给斜边字段。"
          },
          {
            "kind": "h3",
            "text": "3. 把角 A 与错误的边配对"
          },
          {
            "kind": "p",
            "text": "角 A 的公式需要的是边 [[b]]，即与斜边一起夹住角 [[A]] 的那条边。输入边 [[a]] 会算出错误的乘积。修正：输入数值前，先确认角 [[A]] 位于边 [[b]] 和 [[c]] 之间。"
          },
          {
            "kind": "h3",
            "text": "4. 把角 B 与错误的边配对"
          },
          {
            "kind": "p",
            "text": "镜像情况：角 B 的公式需要的是边 [[a]]，而不是边 [[b]]。修正：确认角 [[B]] 位于边 [[a]] 和 [[c]] 之间。"
          },
          {
            "kind": "h3",
            "text": "5. 在正弦公式中使用了错误的夹角"
          },
          {
            "kind": "p",
            "text": "在应输入 53.13 度的位置输入了 36.87 度（反之亦然），会得到看似合理但错误的面积。修正：把角度与边对匹配好：角 A 对应 [[b]] 和 [[c]]，角 B 对应 [[a]] 和 [[c]]。"
          },
          {
            "kind": "h3",
            "text": "6. 把高与直角边混淆"
          },
          {
            "kind": "p",
            "text": "高 [[h]] 从直角顶点垂落到斜边；直角边则沿着三角形的边。把直角边当作高输入会高估高度。修正：高必须落在斜边上并带有直角标记。"
          },
          {
            "kind": "h3",
            "text": "7. 把不垂直的线段当作高"
          },
          {
            "kind": "p",
            "text": "从顶点到斜边的任何不垂直的线段都比真正的高更长，因此算出的面积会偏大。修正：使用高模式之前，先通过作图或 [[h=ab/c]] 检查确认垂直。"
          },
          {
            "kind": "h3",
            "text": "8. 混淆内切圆半径和外接圆半径"
          },
          {
            "kind": "p",
            "text": "内切圆半径从内部与各边相切；外接圆半径从外部到达各顶点。在直角三角形中，外接圆半径为 [[c/2]]，始终大于内切圆半径。把外接圆半径代入 [[K=rs]] 公式会夸大面积。修正：直角三角形的内切圆半径请用 [[r=(a+b-c)/2]]。"
          },
          {
            "kind": "h3",
            "text": "9. 用完整周长代替半周长"
          },
          {
            "kind": "p",
            "text": "公式是 [[K=rs]]，其中 [[s]] 是半周长。在 3-4-5 三角形中输入完整周长 12 而不是 6，会得到 12 而不是 6。修正：先把周长减半，再乘以 [[r]]。"
          },
          {
            "kind": "h3",
            "text": "10. 混用不兼容的测量单位"
          },
          {
            "kind": "p",
            "text": "3 米和 40 厘米的直角边，在一个公式里不能直接当作 3 和 40。修正：计算前把所有输入统一到一个单位，例如 3 米和 0.4 米。"
          },
          {
            "kind": "h3",
            "text": "11. 把平方米报成米"
          },
          {
            "kind": "p",
            "text": "6 平方米不是 6 米。平方单位是答案含义的一部分：它表示多少表面，而不是多少长度。修正：写数字时务必带上平方单位。"
          },
          {
            "kind": "h3",
            "text": "12. 过早对正弦值四舍五入"
          },
          {
            "kind": "p",
            "text": "当真值为 0.6000 时用 0.6 表示正弦是无害的，但在计算中途把 0.9231 舍入为 0.9 会改变结果。修正：每一步都保持完整精度，只在最后对答案四舍五入。"
          },
          {
            "kind": "h3",
            "text": "13. 在锐角字段中输入直角或无效角度"
          },
          {
            "kind": "p",
            "text": "角度模式要求输入 0 到 90 度之间的锐角。输入 90 度或负值对这些模式来说不是有效输入。修正：输入三角形实际拥有的锐角，以度为单位。"
          },
          {
            "kind": "h3",
            "text": "14. 以为五种模式需要相同的测量值"
          },
          {
            "kind": "p",
            "text": "每种模式要求的输入都不同：直角边模式需要两条直角边，角 A 模式需要一条直角边、斜边和一个角，半周长模式需要内切圆半径和半周长。修正：阅读所选模式的字段标签。"
          },
          {
            "kind": "h3",
            "text": "15. 以为周长更大面积就一定按比例更大"
          },
          {
            "kind": "p",
            "text": "周长和面积的缩放规律不同：所有边翻倍，面积变为四倍。一个周长更大的三角形，如果又长又细，面积反而可能更小。修正：比较面积要用面积公式，绝不要用周长。"
          },
          {
            "kind": "h3",
            "text": "16. 忘记同一面积可以用多种方法计算"
          },
          {
            "kind": "p",
            "text": "把每种方法当作孤立的事实，会错过内置的验证机会：如果两种方法不一致，说明输入或模式选择有问题。修正：运行第二种方法，调查任何不一致。"
          },
          {
            "kind": "h3",
            "text": "17. 输入无法描述目标三角形的边长"
          },
          {
            "kind": "p",
            "text": "通不过勾股检查的边长（如 2、3、10）根本描述不了一个直角三角形。修正：在相信由这些边算出的任何面积之前，先验证 [[a^2+b^2=c^2]]。"
          },
          {
            "kind": "h3",
            "text": "18. 把直角三角形内切圆半径捷径用于非直角三角形"
          },
          {
            "kind": "p",
            "text": "公式 [[r=(a+b-c)/2]] 是从 90 度几何推导出来的。把它用在锐角或钝角三角形上会得到毫无意义的内切圆半径。修正：只有确认三角形是直角三角形时才使用这个捷径。"
          },
          {
            "kind": "h3",
            "text": "错误与正确：一个具体例子"
          },
          {
            "kind": "p",
            "text": "已知 [[a=3]] 和 [[b=4]]，错误的计算跳过了除以二：[[K=3\\times4=12]]。那是对应的 3×4 矩形的面积，而不是直角三角形的面积。正确的计算是 [[K=(3\\times4)/2=6]]。三角形占据矩形的一半，因此正是除以二把矩形答案变成了三角形答案。"
          }
        ]
      },
      "sec-validate": {
        "h2": "如何检查面积结果是否有效",
        "blocks": [
          {
            "kind": "p",
            "text": "六项检查能在无效结果离开页面之前抓住绝大多数问题。"
          },
          {
            "kind": "h3",
            "text": "检查 1：正的测量值"
          },
          {
            "kind": "p",
            "text": "所有必需的长度必须为正：[[a>0]]、[[b>0]]、[[c>0]]。对于内切圆半径模式，[[r>0]] 且 [[s>0]]，高也必须为正。零或负输入描述不了任何三角形。"
          },
          {
            "kind": "h3",
            "text": "检查 2：有效的三角形边长"
          },
          {
            "kind": "p",
            "text": "对于直角三角形，必须满足 [[a^2+b^2=c^2]]，且斜边必须长于任一条直角边。如果边长通不过这一检查，说明输入不一致，面积毫无意义。"
          },
          {
            "kind": "h3",
            "text": "检查 3：正确的角边配对"
          },
          {
            "kind": "p",
            "text": "在夹角公式中，角 [[A]] 与边 [[b]] 和 [[c]] 配对；角 [[B]] 与边 [[a]] 和 [[c]] 配对。接受基于角度的结果之前，先确认配对正确。"
          },
          {
            "kind": "h3",
            "text": "检查 4：正确的高"
          },
          {
            "kind": "p",
            "text": "高 [[h]] 必须垂直于斜边 [[c]]。一个快速的合理性测试：高始终比斜边短，也比任一条直角边短。"
          },
          {
            "kind": "h3",
            "text": "检查 5：正确的面积单位"
          },
          {
            "kind": "p",
            "text": "如果输入长度以米为单位，面积必须以平方米为单位；厘米对应平方厘米。答案的单位是输入单位的平方，绝不是输入单位本身。"
          },
          {
            "kind": "h3",
            "text": "检查 6：用另一种方法交叉验证"
          },
          {
            "kind": "p",
            "text": "用 3-4-5 三角形比较直角边公式和半周长公式：[[(3\\times4)/2=6]] 和 [[1\\times6=6]]。两者都必须给出 6 平方单位。基于角度的计算中的小偏差可能来自四舍五入的角度测量值或三角函数值；较大的偏差则表明存在真正的错误。本指南未声明计算器的精度容差或准确性保证：这项检查关乎一致性，而不是承诺的精度。"
          }
        ]
      },
      "sec-conclusion": {
        "h2": "一个三角形，五种方法，一个面积",
        "blocks": [
          {
            "kind": "p",
            "text": "本页的每种方法都从不同的起点回答同一个问题。有两条垂直边时用直角边，有夹角时用正弦，内切圆可见时用内切圆半径和半周长，斜边和高已知时用高。根据测量值选择模式，用兼容的单位把数值填入正确的字段，让计算器完成算术。然后用第二种方法验证：两条路径通向同一个数字，是几何正确的最可靠标志。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形的面积公式是什么？",
        "answer": "标准公式是 K = ab/2，其中 a 和 b 是两条互相垂直的直角边。另外四种等价方法覆盖其他已知测量值：K = bc sin(A)/2、K = ac sin(B)/2、K = rs（内切圆半径乘以半周长）和 K = ch/2（斜边乘以高，再除以二）。"
      },
      {
        "question": "计算三角形面积时为什么要除以二？",
        "answer": "两个全等的直角三角形沿斜边拼成一个面积为 ab 的矩形。一个三角形恰好是该矩形的一半，因此面积为 ab/2。除以二是有几何依据的，并非随意设定，它出现在本页的每一种面积方法中。"
      },
      {
        "question": "不知道斜边也能计算面积吗？",
        "answer": "可以。直角边公式 K = ab/2 不需要斜边，内切圆半径-半周长公式 K = rs 也不需要。斜边只在基于角度的模式和高模式中才需要。"
      },
      {
        "question": "如何用一条边和一个角求面积？",
        "answer": "使用夹角形式。已知直角边 b、斜边 c 和角 A 时，面积为 K = bc sin(A)/2；已知直角边 a、斜边 c 和角 B 时，面积为 K = ac sin(B)/2。以度为单位输入角度，并确保它是两条已知边之间的锐角。"
      },
      {
        "question": "基于角度的公式为什么使用正弦？",
        "answer": "两边及其夹角的通用公式是 K = 1/2 xy sin(theta)。正弦提取的是一条边相对于另一条边的垂直分量，即有效高度。对于被边 b 和 c 夹住的角 A，得到 K = bc sin(A)/2。"
      },
      {
        "question": "直角三角形的内切圆半径是什么？",
        "answer": "内切圆半径是三角形内切圆的半径，该圆与三条边都相切。对于直角三角形，可用 r = (a + b - c)/2 计算。它不是外接圆半径：外接圆半径到达各顶点，在直角三角形中等于 c/2。"
      },
      {
        "question": "周长和半周长有什么区别？",
        "answer": "周长是边界总长度 a + b + c。半周长是它的一半，s = (a + b + c)/2。面积公式 K = rs 使用的是半周长；用完整周长会使答案翻倍。"
      },
      {
        "question": "如何用斜边和高计算面积？",
        "answer": "使用 K = ch/2，其中 c 是斜边，h 是从直角顶点到斜边的垂直高。高必须以 90 度与斜边相交；它不是直角边之一。如果只知道直角边，先用 h = ab/c 求出高。"
      },
      {
        "question": "为什么五种面积方法得到相同的结果？",
        "answer": "因为它们是同一几何量的不同代数描述。对于一致的直角三角形，直角边公式、正弦形式、内切圆半径-半周长乘积和斜边-高形式都可证明相等。两种方法一致，是输入和模式正确的最佳验证。"
      },
      {
        "question": "面积应该用什么单位？",
        "answer": "使用与输入长度对应的平方单位：米对应平方米，厘米对应平方厘米。计算前把所有输入统一到一个单位，报告结果时带上平方单位，绝不要用线性单位。"
      },
      {
        "question": "只知道斜边能计算面积吗？",
        "answer": "不能。仅凭斜边无法确定唯一的直角三角形，因此面积不固定。至少还需要一个独立的测量值：一条直角边、一个锐角、高，或内切圆半径加半周长。"
      },
      {
        "question": "如何检查我的面积计算是否正确？",
        "answer": "在同一个三角形上运行第二种方法并比较。对于 3-4-5 三角形，直角边公式给出 (3 x 4)/2 = 6，半周长方法给出 1 x 6 = 6。另外验证各边满足勾股定理，确认角边配对正确，并检查高垂直于斜边。"
      }
    ],
    "faqHeading": "常见问题",
    "relatedHeading": "探索相关的直角三角形计算器",
    "relatedItems": [
      "直角三角形面积计算器（由直角边求面积）",
      "直角三角形面积计算器（由角度求面积）",
      "直角三角形面积计算器（由半周长求面积）",
      "直角三角形面积计算器（由高求面积）",
      "直角三角形周长和半周长计算器",
      "直角三角形内切圆半径和外接圆半径计算器",
      "直角三角形边长计算器"
    ]
  }
};
