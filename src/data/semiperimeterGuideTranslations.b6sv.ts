// semiperimeterGuideTranslations.b6sv.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Swedish (sv).
export const B6_SV = {
  "sv": {
    "tocHeading": "Avsnittsnavigering",
    "tocItems": {
      "sec-intro": "Hur man beräknar semiperimetern av en rätvinklig triangel",
      "sec-geometry": "Vad är en rätvinklig triangel?",
      "sec-meaning": "Vad är semiperimetern av en rätvinklig triangel?",
      "sec-formula": "Formel för semiperimeter i rätvinklig triangel",
      "sec-calculator": "Så använder du semiperimeterkalkylatorn för rätvinkliga trianglar",
      "sec-examples": "Steg-för-steg-exempel på semiperimeter i rätvinklig triangel",
      "sec-practical": "Verkliga tillämpningar av semiperimeter i rätvinklig triangel",
      "sec-inradius": "Hur hänger semiperimeter ihop med inradien i en rätvinklig triangel?",
      "sec-heron": "Hur används semiperimeter i Herons formel?",
      "sec-vs-perimeter": "Vad är skillnaden mellan omkrets och semiperimeter?",
      "sec-missing-side": "Så beräknar du semiperimeter när en sida saknas",
      "sec-properties": "Viktiga egenskaper hos semiperimetern i rätvinklig triangel",
      "sec-units": "Förstå måttenheter i semiperimeterberäkningar",
      "sec-mistakes": "Vanliga misstag vid beräkning av semiperimeter i rätvinklig triangel",
      "sec-verify": "Så kontrollerar du att ditt semiperimetersvar är rätt",
      "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
      "sec-faq": "Vanliga frågor",
      "sec-conclusion": "Halva omkretsen, full förståelse"
    },
    "sections": {
      "sec-intro": {
        "h2": "Hur man beräknar semiperimetern av en rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Addera de tre sidorna i en rätvinklig triangel och dividera sedan summan med två." },
          { "kind": "p", "text": "Det är hela beräkningen, och den här kalkylatorn utför den för varje rätvinklig triangel när du anger de två kateterna och hypotenusan. Tre sidomått behövs eftersom triangeln har tre kanter, och hypotenusan måste vara med: den är en av dessa tre kanter även om den aldrig rör den räta vinkeln. Summan divideras med två eftersom semiperimetern definieras som exakt halva hela omkretsen, en storhet som dyker upp gång på gång i triangelgeometri." },
          { "kind": "p", "text": "Ett snabbt exempel visar tanken. Givet [[a=3]], [[b=4]] och [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Hela omkretsen är 12 enheter, så dess semiperimeter är 6 enheter. Lägg märke till att semiperimetern är ett linjärt mått, inte ett ytmått: det är en längd, som anges i meter, fot eller vanliga enheter, aldrig i kvadrateenheter. Den blir användbar varje gång en formel efterfrågar halva omkretsen, vilket händer i Herons formel för area, i sambandet med inradien och i flera geometriska bevis där hela omkretsen bara skulle vara i vägen." }
        ]
      },
      "sec-geometry": {
        "h2": "Vad är en rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "Innan någon division med två sker måste de tre sidorna märkas rätt. Symbolerna nedan är fasta genom hela guiden, och kalkylatorn använder samma namn." },
          { "kind": "h3", "text": "Definition av en rätvinklig triangel" },
          { "kind": "p", "text": "En rätvinklig triangel är en triangel med en innervinkel som är exakt 90 grader. Den har tre hörn, tre sidor, två spetsiga vinklar och en rät vinkel, vanligtvis markerad med en liten kvadrat. De två sidor som bildar den räta vinkeln är kateterna; sidan mittemot den räta vinkeln är hypotenusan. Eftersom vinklarna i varje triangel summerar till 180 grader, [[A+B+C=180^\\circ]], och med [[C=90^\\circ]] följer att [[[\\boxed{A+B=90^\\circ}]]]: de två spetsiga vinklarna är komplementära, så om man känner den ena bestäms den andra. Att få den här bilden rätt spelar roll eftersom semiperimeterformeln behandlar varje sida som en randkant, och en felmärkt sida förstör summan innan divisionen ens börjar." },
          { "kind": "h3", "text": "Vad är de två kateterna?" },
          { "kind": "p", "text": "Katet [[a]] och katet [[b]] är de två sidor som möts i det rätvinkliga hörnet, vinkelräta mot varandra. Vilken som helst av dem kan ritas horisontellt eller vertikalt beroende på triangelns orientering; det som definierar dem är det 90-gradiga hörn de bildar, inte deras riktning på sidan. De skiljer sig från hypotenusan i läge och längd: varje katet rör den räta vinkeln, och varje katet är kortare än hypotenusan. I semiperimeterarbete är deras roll enkel: båda är randkanter, så båda ingår i summan som halveras." },
          { "kind": "h3", "text": "Vad är hypotenusan?" },
          { "kind": "p", "text": "Hypotenusan är sidan mittemot den räta vinkeln, alltid triangelns längsta sida. Den bildar aldrig den räta vinkeln; den spänner över den och förenar de bortre ändarna av de två kateterna. Den skiljer sig från kateterna både i läge och längd: kateterna möts i 90 grader, medan hypotenusan möter varje katet i en spetsig vinkel. Den fullbordar triangelns rand, vilket är anledningen till att den måste vara med i semiperimeterberäkningen. När båda kateterna är kända återställer Pythagoras sats den: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Så identifierar du rätt sidomarkeringar" },
          { "kind": "p", "text": "[[a]] och [[b]] är de två sidor som möts i 90 grader, och [[c]] är mittemot den räta vinkeln. I en icke-degenererad rätvinklig triangel är [[c]] den längsta sidan. Rätvinkelsmarkeringen visar vilken sida som är [[c]]: det är den som inte rör det hörnet. En snabb ordningskontroll hjälper: sortera de tre talen, och det största måste spela rollen som [[c]]. Om den längsta sidan inte ligger mittemot det kvadratiska hörnet är markeringarna fel, och den semiperimeter som byggs på dem blir fel den också." },
          { "kind": "h3", "text": "Varför beror semiperimetern på alla tre sidorna?" },
          { "kind": "p", "text": "Semiperimetern härleds från hela omkretsen, och hela omkretsen räknar varje kant av randen. Även om [[a]] och [[b]] är vinkelräta förblir hypotenusan en del av triangelns yttre rand: det är kanten som sluter formen. Att utesluta [[c]] ger inte en kortare semiperimeter; det ger en annan, felaktig storhet. För [[a=3]], [[b=4]], [[c=5]] ger utelämnad hypotenusa [[(3+4)/2=3.5]], medan den sanna semiperimetern är [[(3+4+5)/2=6]]. De saknade 2,5 enheterna är hypotenusans andel, och ingen korrekt formel kan hoppa över den." }
        ],
        "imgAlt": "Rätvinklig triangel ABC med kateterna a och b, hypotenusan c, rät vinkel vid C, visar P = a+b+c och s = (a+b+c)/2",
        "figcaption": "Triangel ABC: kateterna a och b möts vid den räta vinkeln C, hypotenusan c sluter randen, och s = (a + b + c) / 2 är halva omkretsen."
      },
      "sec-meaning": {
        "h2": "Vad är semiperimetern av en rätvinklig triangel?",
        "blocks": [
          { "kind": "h3", "text": "Definition av semiperimeter" },
          { "kind": "p", "text": "Semiperimeter är exakt halva hela omkretsen av en triangel. Om [[P]] är hela sträckan runt triangeln, är semiperimetern [[s]] [[[\\boxed{s=\\frac{P}{2}}]]]. För en rätvinklig triangel är hela omkretsen [[P=a+b+c]], så definitionen blir [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Alla tre sidlängder adderas före divisionen: summan samlar hela randen, och divisionen med två halverar den. Inget lämnas bort och inget räknas två gånger." },
          { "kind": "h3", "text": "Varför kallas den semiperimeter?" },
          { "kind": "p", "text": "Namnet förklarar sig självt när det delas upp. <em>Semi</em> betyder halva, och <em>perimeter</em> betyder den fullständiga randlängden. Tillsammans betyder semiperimeter halva omkretsen. Bokstaven [[s]] är den matematiska standardsymbolen, och den förekommer i många triangelformler just eftersom halverade randlängder dyker upp så ofta. När en formel efterfrågar [[s]], efterfrågar den just detta tal: halva av [[a+b+c]]." },
          { "kind": "h3", "text": "Motsvarar semiperimetern en fysisk halvrandväg?" },
          { "kind": "p", "text": "Detta är en subtil poäng värd att få rätt. Semiperimetern är halva det numeriska totalet av de tre sidlängderna, men den beskriver inte nödvändigtvis en sammanhängande fysisk väg som täcker halva triangelns rand. Att gå 6 enheter längs kanterna på en 3-4-5-triangel skulle till exempel kunna betyda att gå de två kateterna (3 + 4 = 7 är redan för långt) eller en katet plus en del av hypotenusan; det finns ingen enskild naturlig halvvägsrutt. Semiperimetern är i första hand ett härlett geometriskt mått, ett bekvämt mellanvärde som formler använder, snarare än en sträcka man skulle stega upp på marken." },
          { "kind": "h3", "text": "Är semiperimetern en längd eller en area?" },
          { "kind": "p", "text": "Semiperimetern är ett endimensionellt mått: en längd. Om sidlängderna är i meter är [[s]] i meter; i centimeter är den i centimeter; i fot är den i fot; i tum är den i tum. Den får aldrig uttryckas i kvadrateenheter. Divisionen med två ändrar talets storlek, inte dess dimension: att halvera en längd lämnar ändå en längd. Att förväxla [[s]] med en area är ett av de vanligaste nybörjarfelen, och att hålla reda på enheterna är det enklaste sättet att undvika det." },
          { "kind": "h3", "text": "Är semiperimetern alltid större än den längsta sidan?" },
          { "kind": "p", "text": "Ja, för varje giltig icke-degenererad triangel, och triangelolikheten visar varför. Varje triangel uppfyller [[a+b>c]]: de två kortare sidorna tillsammans överstiger den längsta. Lägg till [[c]] på båda sidorna och [[a+b+c>2c]] följer; dividera med två och resultatet är [[[\\boxed{s>c}]]]. För en rätvinklig triangel betyder det att semiperimetern alltid är större än hypotenusan. För 3-4-5 överstiger [[s=6]] [[c=5]]. Det gör en smidig rimlighetskontroll: om din beräknade semiperimeter är mindre än hypotenusan är sidomarkeringarna eller aritmetiken fel." }
        ]
      },
      "sec-formula": {
        "h2": "Formel för semiperimeter i rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Två former av samma formel används, beroende på vad som är känt. Den kompakta formen utgår från hela omkretsen:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Den utvidgade formen utgår från de tre sidorna:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Förstå varje variabel" },
          { "kind": "p", "text": "[[s]] är semiperimetern, svaret som beräknas. [[P]] är hela omkretsen, den fullständiga randlängden. [[a]] är den första kateten och [[b]] den andra kateten, de två vinkelräta sidorna. [[c]] är hypotenusan, den längsta sidan, mittemot den räta vinkeln. Förväxla aldrig [[P]] och [[s]]: den ena är hela randen, den andra är halva den." },
          { "kind": "h3", "text": "Varför dividerar vi med två?" },
          { "kind": "p", "text": "Divisionen är det som gör storheten till en <em>semi</em>perimeter snarare än en omkrets. Ta [[a=3]], [[b=4]], [[c=5]]. Beräkna först hela omkretsen: [[P=3+4+5]], så [[P=12]]. Dividera sedan med två: [[s=12/2]], vilket ger [[[\\boxed{s=6}]]]. Matematiskt skalar divisionen om randtotalen till det halvvärde som formler som Herons förväntar sig. Att hoppa över den besvarar en annan fråga: hela omkretsen, inte semiperimetern." },
          { "kind": "h3", "text": "Varför kan vi inte använda bara de två kateterna?" },
          { "kind": "p", "text": "Eftersom kateterna ensamma inte är hela randen. Det felaktiga angreppssättet [[s=(3+4)/2]] ger 3,5, ett tal utan geometrisk betydelse för denna triangel: det ignorerar hypotenusan, som är en verklig kant av formen. Det korrekta angreppssättet adderar alla tre sidor först: [[s=(3+4+5)/2]], vilket ger [[[\\boxed{s=6}]]]. En lockande genväg är att halvera varje sida och sedan addera, [[1.5+2+2.5=6]]: aritmetiken råkar fungera här eftersom division distribuerar över addition, men det döljer formelns struktur och bjuder in till misstag. Addera först, dividera sedan en gång." },
          { "kind": "h3", "text": "Hur hänger omkrets och semiperimeter ihop?" },
          { "kind": "p", "text": "De är samma mått i två skalor. Att dubblera semiperimetern återställer omkretsen, och att halvera omkretsen återställer semiperimetern:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Vartdera värdet kan återställas när det andra är känt. Om ett problem anger att omkretsen är 30 är semiperimetern omedelbart 15; om en beräkning ger [[s=20]] är hela omkretsen 40. Detta tvåvägssamband är också ett verifieringsverktyg: efter att ha beräknat [[s]] från sidorna måste dubbleringen återskapa sidornas summa." }
        ]
      },
      "sec-calculator": {
        "h2": "Så använder du semiperimeterkalkylatorn för rätvinkliga trianglar",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn på den här sidan har ett jobb: den tar de tre sidlängderna i en rätvinklig triangel och returnerar semiperimetern, och visar varje steg av arbetet. Stegen nedan matchar det befintliga gränssnittet exakt." },
          { "kind": "p", "text": "<strong>Steg 1: Hitta semiperimeterkalkylatorn.</strong> Den sitter nära sidans topp, under H1-rubriken, med tre märkta inmatningsfält." },
          { "kind": "p", "text": "<strong>Steg 2: Identifiera katet a.</strong> Välj en av de två sidor som bildar den räta vinkeln. Vilken av de vinkelräta sidorna som helst kan vara [[a]]." },
          { "kind": "p", "text": "<strong>Steg 3: Identifiera katet b.</strong> Den andra vinkelräta sidan blir [[b]]." },
          { "kind": "p", "text": "<strong>Steg 4: Identifiera hypotenusan c.</strong> Den längsta sidan, mittemot den räta vinkeln, är [[c]]. Att sortera de tre måtten och placera det största i det här fältet förhindrar det vanligaste inmatningsfelet." },
          { "kind": "p", "text": "<strong>Steg 5: Ange den första kateten.</strong> Skriv värdet på [[a]] i fältet Katet a." },
          { "kind": "p", "text": "<strong>Steg 6: Ange den andra kateten.</strong> Skriv värdet på [[b]] i fältet Katet b." },
          { "kind": "p", "text": "<strong>Steg 7: Ange hypotenusan.</strong> Skriv värdet på [[c]] i fältet Hypotenusa c." },
          { "kind": "p", "text": "<strong>Steg 8: Välj lämpliga måttenheter.</strong> Varje inmatning har sin egen enhetsväljare. Alla tre sidorna måste använda kompatibla enheter innan de adderas; att blanda meter med centimeter fördärvar summan." },
          { "kind": "p", "text": "<strong>Steg 9: Klicka på Beräkna semiperimeter.</strong> Verktyget adderar de tre sidorna och dividerar summan med två." },
          { "kind": "p", "text": "<strong>Steg 10: Granska den visade semiperimetern.</strong> Resultatet visas med sin enhet, till exempel [[[\\boxed{s=6\\text{ units}}]]] för 3-4-5-triangeln." },
          { "kind": "p", "text": "<strong>Steg 11: Kontrollera lösningsstegen.</strong> Kalkylatorn visar substitutionen och divisionen, så att du kan följa aritmetiken rad för rad." },
          { "kind": "p", "text": "<strong>Steg 12: Verifiera att resultatet är halva hela omkretsen.</strong> Dubblera resultatet: för 3-4-5, [[2\\times6=12]], vilket matchar [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Steg 13: Använd Återställ när du startar en ny beräkning.</strong> Återställningsknappen rensar alla tre inmatningar så att nästa triangel börjar från ett rent läge." },
          { "kind": "h3", "text": "Vad representerar varje inmatning?" },
          { "kind": "p", "text": "De tre inmatningarna motsvarar de tre randkanterna. Katet a och Katet b tar emot de två vinkelräta sidorna; Hypotenusa c tar emot den längsta sidan. Kalkylatorn adderar exakt det du anger och halverar summan, så varje fälts roll är fast: att byta ett katetvärde till hypotenusafältet ändrar summan och ger en felaktig semiperimeter." },
          { "kind": "h3", "text": "Varför är måttenheter viktiga?" },
          { "kind": "p", "text": "Semiperimetern beräknas genom att addera tre längder, och addition kräver kompatibla enheter. Att addera 3 meter till 40 centimeter utan omvandling ger en meningslös summa. Varje inmatnings enhetsväljare låter dig deklarera enheten du skrev; välj väljare som beskriver de verkliga måtten så att additionen kombinerar likadana med likadana." },
          { "kind": "h3", "text": "Förstå resultatvisningen" },
          { "kind": "p", "text": "Resultatvisningen visar semiperimetern med dess linjära enhet. Bakom den utförde kalkylatorn exakt två operationer: den adderade alla tre sidorna och dividerade sedan summan med två. Ingen annan beräkning är inblandad, och verktyget beräknar inte area eller inradie på egen hand; de formlerna är stödjande förklaringar i den här guiden, inte extra utdata från kalkylatorn." },
          { "kind": "h3", "text": "Förstå lösningsstegen" },
          { "kind": "p", "text": "Panelen med lösningssteg spelar upp beräkningen: de angivna sidovärdena, deras summa, divisionen med två och det slutliga resultatet. Detta synliga arbete är det snabbaste sättet att fånga ett stavfel: om ett steg visar 4 där du menade 40 är felet uppenbart innan svaret används någon annanstans." }
        ]
      },
      "sec-examples": {
        "h2": "Steg-för-steg-exempel på semiperimeter i rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "De fyra exemplen nedan behåller de befintliga uträknade fallen och utvidgar deras förklaringar. Var och en substituerar de tre sidorna, adderar dem, dividerar med två och verifierar sedan svaret." },
          { "kind": "h3", "text": "Exempel 1: 3-4-5 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=3,\\;b=4,\\;c=5]] är formeln [[s=\\frac{a+b+c}{2}]]. Substituera: [[s=\\frac{3+4+5}{2}]]. Addera: [[s=\\frac{12}{2}]]. Det slutliga resultatet är [[[\\boxed{s=6\\text{ units}}]]]. Verifiering: [[P=2s=12]], vilket matchar den direkta summan [[3+4+5]]. Resultatet är korrekt eftersom varje randkant räknades exakt en gång före divisionen." },
          { "kind": "h3", "text": "Exempel 2: 5-12-13 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], så [[s=\\frac{30}{2}]], vilket ger [[[\\boxed{s=15\\text{ units}}]]]. Hela omkretsen är 30, och hälften av 30 är 15. Som kontroll bekräftar [[5^2+12^2=13^2]] den räta vinkeln, så sidomarkeringarna är tillförlitliga." },
          { "kind": "h3", "text": "Exempel 3: 8-15-17 rätvinklig triangel" },
          { "kind": "p", "text": "Givet [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], så [[s=\\frac{40}{2}]], vilket ger [[[\\boxed{s=20\\text{ units}}]]]. Lägg märke till mönstret genom exemplen: när triangeln växer växer semiperimetern i takt med sidorna, alltid exakt halva omkretsen." },
          { "kind": "h3", "text": "Exempel 4: Decimala sidomått" },
          { "kind": "p", "text": "Givet [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], så [[s=\\frac{15}{2}]], vilket ger [[[\\boxed{s=7.5\\text{ units}}]]]. Decimalvärden ändrar inte formeln: samma addera-och-dividera-sekvens gäller. Pythagoras-kontrollen [[2.5^2+6^2=6.5^2]] bekräftar att dessa sidor verkligen bildar en rätvinklig triangel." }
        ],
        "table": {
          "headers": ["Triangel", "Katet a", "Katet b", "Hypotenusa c", "Hela omkretsen P", "Semiperimeter s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Tabellen visar mönstret tydligt: när alla tre dimensioner ökar ökar semiperimetern proportionellt och ligger alltid exakt på halva hela omkretsen. Att jämföra raderna visar också att likformiga trianglar skalar tillsammans; dubblera varje sida och semiperimetern dubbleras också."],
        "imgAlt": "3-4-5-triangel med beräkningssteg: addera sidorna för att få 12, dividera med 2, semiperimeter s är 6",
        "figcaption": "Addera de tre sidorna för att få P = 12, dividera sedan med 2: semiperimetern s = 6."
      },
      "sec-practical": {
        "h2": "Verkliga tillämpningar av semiperimeter i rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "En varning före exemplen: semiperimetern är normalt inte den storhet som används för att köpa halva kantlisten eller staketet runt ett triangulärt föremål. Dess verkliga roll är som ett geometriskt mellanmått, språngbrädan till inradie, areakontroller och designberäkningar. Varje exempel nedan är en förenklad rätvinklig geometrisk modell, och varje beräknar semiperimetern tillsammans med hela omkretsen, arean och inradien så att sambanden förblir synliga." },
          { "kind": "h3", "text": "Exempel 1: Triangulärt fönster med cirkulär dekorativ insats" },
          { "kind": "p", "text": "En triangulär fönstermodell har [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Semiperimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; hela omkretsen [[P=12\\text{ m}]]. Area [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] och inradie [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Semiperimetern är det som gör inradien beräkningsbar: den omvandlar tre sidlängder till det enda tal som kopplar arean till radien hos cirkeln som tangerar alla tre sidorna i den idealiserade triangulära modellen." },
          { "kind": "h3", "text": "Exempel 2: Metallstödvinkel med cirkulär frigång" },
          { "kind": "p", "text": "En rätvinklig stödvinkel har [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Då [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] och [[P=30\\text{ cm}]]. Area [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] ger inradie [[r=\\frac{30}{15}=2\\text{ cm}]]. Detta värde beskriver den inskrivna cirkelns radie i den idealiserade triangeln och kan vägleda geometriska frigångsstudier för en cirkulär urskärning. Det avgör inte, i sig självt, strukturell säkerhet." },
          { "kind": "h3", "text": "Exempel 3: Takgavel med cirkulär ventilationsdesign" },
          { "kind": "p", "text": "En förenklad rätvinklig takgavelmodell har [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Semiperimeter [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; omkrets [[P=24\\text{ ft}]]. Area [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] och inradie [[r=\\frac{24}{12}=2\\text{ ft}]]. Semiperimetern förvandlar gavelns tre kantlängder till den inskrivna cirkelns radie i den förenklade modellen. Verklig ventilationsinstallation kräver separata bygg- och frigångsmått utöver denna geometri." },
          { "kind": "h3", "text": "Exempel 4: Triangulär trädgårdsdesign" },
          { "kind": "p", "text": "En rätvinklig trädgårdsmodell har [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Då [[s=\\frac{7+24+25}{2}=28\\text{ m}]] och [[P=56\\text{ m}]]. Area [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] ger inradie [[r=\\frac{84}{28}=3\\text{ m}]]. Den inskrivna cirkeln är den största cirkel som får plats inuti den idealiserade triangeln samtidigt som den tangerar alla tre sidorna, användbar för att placera en cirkulär rabatt eller fontän i designstadiet." },
          { "kind": "h3", "text": "Exempel 5: CNC-triangulär tillverkningspanel" },
          { "kind": "p", "text": "En triangulär panel har [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Semiperimeter [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; omkrets [[P=40\\text{ cm}]]. Area [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] och inradie [[r=\\frac{60}{20}=3\\text{ cm}]]. Semiperimeter och inradie fungerar här som geometriska referensvärden i CAD-modellering, till exempel vid positionering av en cirkulär detalj i förhållande till panelens kanter." },
          { "kind": "h3", "text": "Exempel 6: Triangulär skylt med cirkulärt emblem" },
          { "kind": "p", "text": "En skyltpanel har [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Då [[s=\\frac{9+12+15}{2}=18\\text{ in}]] och [[P=36\\text{ in}]]. Area [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] ger inradie [[r=\\frac{54}{18}=3\\text{ in}]]. Inradien ger en matematisk referens för det största inskrivna cirkulära emblemet, med förbehåll för den verkliga skyltens faktiska marginaler och monteringsbegränsningar." },
          { "kind": "h3", "text": "Exempel 7: Industriell triangulär plåt" },
          { "kind": "p", "text": "En rätvinklig plåt har [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Semiperimeter [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; omkrets [[P=90\\text{ cm}]]. Area [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] och inradie [[r=\\frac{180}{45}=4\\text{ cm}]]. Semiperimetern stödjer geometriska beräkningar för en idealiserad industriell panel, till exempel dimensionering av en cirkulär upphöjning som måste hålla sig fri från alla tre kanterna." },
          { "kind": "h3", "text": "Exempel 8: Triangulär glasmålningsdesign" },
          { "kind": "p", "text": "En rätvinklig glasdel har [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Då [[s=\\frac{12+16+20}{2}=24\\text{ in}]] och [[P=48\\text{ in}]]. Area [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] ger inradie [[r=\\frac{96}{24}=4\\text{ in}]]. Sambandet är direkt: semiperimetern halverar randen, och att dividera arean med den halva randen ger den inskrivna cirkelns radie för designlayouten." },
          { "kind": "h3", "text": "Exempel 9: Inmätt triangulär marksektion" },
          { "kind": "p", "text": "En förenklad rätvinklig marksektionsmodell har [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Semiperimeter [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; omkrets [[P=70\\text{ m}]]. Area [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] och inradie [[r=\\frac{210}{35}=6\\text{ m}]]. I en förenklad lantmäterimodell fungerar semiperimetern som en kompakt inmatning till area- och inradiekontroller, till exempel vid verifiering av en beräknad markarea mot Herons formel." },
          { "kind": "h3", "text": "Exempel 10: Arkitektonisk triangulär ram" },
          { "kind": "p", "text": "En rätvinklig arkitektonisk ram har [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Då [[s=\\frac{12+35+37}{2}=42\\text{ m}]] och [[P=84\\text{ m}]]. Area [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] ger inradie [[r=\\frac{210}{42}=5\\text{ m}]]. Detta värde kan stödja matematisk modellering av en cirkulär detalj inuti den triangulära ramen, till exempel ett runt fönster centrerat på den inskrivna cirkelns medelpunkt." },
          { "kind": "h3", "text": "Exempel 11: Stor triangulär golvdesign" },
          { "kind": "p", "text": "En rätvinklig golvdel har [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Semiperimeter [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; omkrets [[P=126\\text{ m}]]. Area [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] och inradie [[r=\\frac{630}{63}=10\\text{ m}]]. Här kopplar semiperimetern sidomåtten med den inskrivna cirkelns geometri i modellen: ett tal överbryggar randen och den största möjliga cirkeln." },
          { "kind": "h3", "text": "Exempel 12: Industriell triangulär stödplåt" },
          { "kind": "p", "text": "En stor rätvinklig plåt har [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Då [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] och [[P=154\\text{ cm}]]. Area [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] ger inradie [[r=\\frac{924}{77}=12\\text{ cm}]]. Dessa mått matar en geometrisk modell för en cirkulär koppling eller inre designdetalj, med semiperimetern som det mellanvärde som leder till inradien." }
        ],
        "table": {
          "headers": ["Praktisk tillämpning", "Katet a", "Katet b", "Hypotenusa c", "Omkrets P", "Semiperimeter s", "Area K", "Inradie r", "Enhet"],
          "rows": [
            ["Triangulärt fönster", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Metallvinkel", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Takgavelventil", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Trädgårdsdesign", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["CNC-panel", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Skyltemblem", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Industriplåt", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Glasmålning", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Inmätt marksektion", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Arkitektonisk ram", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Golvdesign", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Stödplåt", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Några påminnelser gäller för varje rad ovan. Varje tillämpning är en förenklad geometrisk modell, inte en byggspecifikation: verkliga mått kräver separat verifiering, strukturell hållfasthet kan inte avläsas från semiperimetern, och verkliga cirkulära öppningar kan behöva ytterligare tillverkningsmarginaler. Semiperimetern är ett matematiskt mellanvärde, inradien är radien hos den inskrivna cirkeln, och den inskrivna cirkeln tangerar alla tre sidorna."]
      },
      "sec-inradius": {
        "h2": "Hur hänger semiperimetern ihop med inradien i en rätvinklig triangel?",
        "blocks": [
          { "kind": "p", "text": "Detta är ett av artikelns viktigaste avsnitt, eftersom inradien är huvudskälet till att semiperimetern existerar som ett eget begrepp. Den inskrivna cirkeln är den största cirkel som får plats inuti en triangel samtidigt som den tangerar alla tre sidorna, och dess radie kallas inradien och betecknas med [[r]]." },
          { "kind": "h3", "text": "Sambandet mellan area och semiperimeter" },
          { "kind": "p", "text": "För varje triangel är arean, inradien och semiperimetern länkade genom en enda kompakt formel:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "där [[K]] är triangelns area, [[r]] är inradien och [[s]] är semiperimetern. Omskriven löser den ut inradien:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Att känna till semiperimetern och arean låter dig därför beräkna inradien direkt: dividera arean med semiperimetern. Detta är semiperimeterns praktiska utdelning. Den komprimerar tre sidlängder till ett tal som tillsammans med arean avslöjar den inskrivna cirkeln." },
          { "kind": "h3", "text": "Speciell inradieformel för rätvinkliga trianglar" },
          { "kind": "p", "text": "För en rätvinklig triangel är arean [[K=\\frac{ab}{2}]] och semiperimetern [[s=\\frac{a+b+c}{2}]]. Att substituera båda i [[r=\\frac{K}{s}]] ger:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Förenkling:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Det finns också en ekvivalent rätvinklig formel som helt undviker arean:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Dessa två uttryck är ekvivalenta för en rätvinklig triangel tack vare Pythagoras samband: algebran faller ihop när [[a^2+b^2=c^2]] tillämpas. Vartdera uttrycket ger samma inradie; det andra är ofta snabbare för hand." },
          { "kind": "h3", "text": "Fullständigt uträknat 3-4-5-exempel" },
          { "kind": "p", "text": "Givet [[a=3,\\;b=4,\\;c=5]]: semiperimeter [[s=\\frac{3+4+5}{2}=6]], area [[K=\\frac{3\\times4}{2}=6]], inradie [[r=\\frac{6}{6}]], alltså [[[\\boxed{r=1}]]]. Verifiera med genvägen: [[r=\\frac{3+4-5}{2}]], vilket ger [[[\\boxed{r=1}]]]. Båda metoderna ger samma svar eftersom de är samma matematik skriven på två sätt: den ena passerar genom arean, den andra stryker den algebraiskt." },
          { "kind": "h3", "text": "Varför är semiperimetern viktig för beräkningar av inskrivna cirklar?" },
          { "kind": "p", "text": "Semiperimetern är bron mellan triangelns rand och dess inskrivna cirkel. Konstruktörer använder den vid dimensionering av cirkulära frigångar inuti triangulära detaljer, vid placering av inskrivna cirkulära detaljer i geometrisk design, vid måttsättning av tekniska ritningar och vid genomgång av matematiska bevis som kopplar area till radie. Inradien kopplar också tillbaka till areaverifiering: om [[K]], [[r]] och [[s]] inte uppfyller [[K=rs]] är något fel i kedjan. Den här kalkylatorn beräknar inte inradien automatiskt; den levererar semiperimetern, och formlerna ovan tar det därifrån." }
        ],
        "imgAlt": "3-4-5 rätvinklig triangel med inskriven cirkel med radien 1; semiperimeter s = 6, area K = 6, r = K/s",
        "figcaption": "Den inskrivna cirkeln tangerar alla tre sidorna; med s = 6 och K = 6 är inradien r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Hur används semiperimetern i Herons formel?",
        "blocks": [
          { "kind": "p", "text": "Herons formel beräknar arean av en triangel från dess tre sidlängder, utan att kräva en separat angiven höjd. Semiperimetern är dess centrala ingrediens: formeln skrivs i termer av [[s]] och skillnaderna mellan [[s]] och varje sida." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Här är [[K]] triangelns area, [[s]] är semiperimetern och [[a]], [[b]], [[c]] är de tre sidlängderna." },
          { "kind": "h3", "text": "Varför använder Herons formel semiperimetern?" },
          { "kind": "p", "text": "Semiperimetern beräknas först eftersom den centrerar uttrycket: varje faktor [[s-a]], [[s-b]], [[s-c]] mäter hur mycket halvperimetern överstiger en sida. Att multiplicera dessa tre överskott med [[s]] självt och ta kvadratroten omvandlar randinformation till area. Formeln fungerar för varje giltig triangel, inte bara rätvinkliga trianglar, vilket är anledningen till att semiperimetern förtjänar sin plats som ett allmänt geometriskt verktyg snarare än en rätvinklig kuriositet." },
          { "kind": "h3", "text": "Fullständigt uträknat 3-4-5-exempel" },
          { "kind": "p", "text": "Givet [[a=3,\\;b=4,\\;c=5]], beräkna först semiperimetern: [[s=\\frac{3+4+5}{2}=6]]. Substituera i Herons formel: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Förenkla: [[K=\\sqrt{6\\times3\\times2\\times1}]], sedan [[K=\\sqrt{36}]], vilket ger [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "h3", "text": "Verifiera resultatet med areafrmeln för rätvinklig triangel" },
          { "kind": "p", "text": "Den direkta areaformeln för rätvinklig triangel är [[K=\\frac{ab}{2}]]. Substitution: [[K=\\frac{3\\times4}{2}]], vilket ger [[[\\boxed{K=6\\text{ square units}}]]]. Båda formlerna ger samma area, vilket är precis poängen: Herons formel, byggd på semiperimetern, bekräftar oberoende den enklare beräkningen." },
          { "kind": "h3", "text": "Varför är detta användbart?" },
          { "kind": "p", "text": "Rätvinkliga trianglar har en enklare direkt areaformel, så Herons formel är sällan den snabbaste vägen till arean. Dess värde ligger i att kontrollera areaberäkningar, i att förstå hur sidlängder ensamma bestämmer arean, i att lösa sidlängdsbaserade problem där ingen höjd anges, och i att verifiera matematiska lösningar genom en oberoende väg. När två orelaterade formler är överens om arean stiger förtroendet för svaret kraftigt." }
        ],
        "imgAlt": "Herons formel tillämpad på en 3-4-5-triangel: semiperimeter 6 ger area 6, verifierat med K = ab/2",
        "figcaption": "Fem steg: sidor, semiperimeter s = 6, Herons substitution, area K = 6, kontroll med K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Vad är skillnaden mellan omkrets och semiperimeter?",
        "blocks": [
          { "kind": "p", "text": "De två storheterna beskriver samma rand i olika skalor, och att förväxla dem är ett av de vanligaste felen i triangelarbete. Det här avsnittet drar gränsen tydligt." },
          { "kind": "h3", "text": "Omkretsen mäter hela randen" },
          { "kind": "p", "text": "Omkretsen är den totala längden runt triangeln:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Den representerar hela vandringen runt alla tre kanterna. För 3-4-5-triangeln är [[P=12]] enheter." },
          { "kind": "h3", "text": "Semiperimetern är halva totalen" },
          { "kind": "p", "text": "Semiperimetern är halva den numeriska omkretsen:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "För samma 3-4-5-triangel är [[s=6]] enheter. Samma triangel, samma rand, men talet är halverat eftersom de formler som konsumerar det, Herons formel och sambandet med inradien, är skrivna för halvvärdet." },
          { "kind": "h3", "text": "Numerisk jämförelse" },
          { "kind": "p", "text": "Använd en 6-8-10 rätvinklig triangel. Omkrets: [[P=6+8+10]], alltså [[[\\boxed{P=24}]]]. Semiperimeter: [[s=\\frac{24}{2}]], alltså [[[\\boxed{s=12}]]]. Omkretsen svarar på \"hur lång är hela randen?\"; semiperimetern svarar på \"vilket är det halvrandvärde min formel behöver?\"." },
          { "kind": "h3", "text": "När ska du använda vilket mått?" },
          { "kind": "p", "text": "Använd omkretsen när jobbet gäller hela randlängden: inramning av en triangulär form, staket runt en triangulär tomt, uppskattning av kantmaterial eller mätning av kantlister. Använd semiperimetern när jobbet är matematiskt: Herons formel, inradieberäkningar, area-radiesamband, avancerade geometribevis eller oberoende verifiering av ett arearesultat. Tumregeln är enkel: fysiskt randarbete tar [[P]]; formelarbete tar [[s]]." },
          { "kind": "h3", "text": "Är semiperimetern halva arean?" },
          { "kind": "p", "text": "Nej, och denna förvirring behöver en fast rättelse. Semiperimetern är ett linjärt mått: för 3-4-5 är den 6 enheter. Area är ett tvådimensionellt mått: för 3-4-5 är den 6 kvadrateenheter. Talen sammanfaller här av en slump, men storheterna skiljer sig i art. Att halvera en längd ger aldrig en area, precis som att halvera en omkrets aldrig ger en yta." }
        ],
        "table": {
          "headers": ["Mått", "Symbol", "Formel", "Betydelse", "Enhet", "Vanlig tillämpning"],
          "rows": [
            ["Omkrets", "[[P]]", "[[P=a+b+c]]", "Hela randlängden", "Linjär (m, ft, in)", "Staket, inramning, lister"],
            ["Semiperimeter", "[[s]]", "[[s=(a+b+c)/2]]", "Halva randlängden", "Linjär (m, ft, in)", "Herons formel, inradie"],
            ["Area", "[[K]]", "[[K=ab/2]]", "Innesluten yta", "Kvadrat (m², ft², in²)", "Yttäckning, material"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Så beräknar du semiperimetern när en sida saknas",
        "blocks": [
          { "kind": "p", "text": "Kalkylatorn på den här sidan kräver alla tre sidlängder: den kan inte halvera en summa den inte kan addera. Om en sida är okänd, beräkna den först med Pythagoras sats och fortsätt sedan med semiperimetern som vanligt." },
          { "kind": "h3", "text": "Att hitta hypotenusan" },
          { "kind": "p", "text": "När båda kateterna är kända, använd [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Exempel: [[a=6]], [[b=8]]. Då [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], vilket ger [[[\\boxed{c=10}]]]. Nu följer semiperimetern: [[s=\\frac{6+8+10}{2}]], alltså [[[\\boxed{s=12}]]]." },
          { "kind": "h3", "text": "Att hitta en saknad katet" },
          { "kind": "p", "text": "När hypotenusan och en katet är kända, använd [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Exempel: [[c=13]], [[b=12]]. Då [[a=\\sqrt{169-144}]], vilket ger [[[\\boxed{a=5}]]]. Sedan [[s=\\frac{5+12+13}{2}]], alltså [[[\\boxed{s=15}]]]." },
          { "kind": "h3", "text": "Varför måste den saknade sidan hittas först?" },
          { "kind": "p", "text": "Semiperimetern kräver den fullständiga summan av alla tre sidorna, och en okänd sida kan inte bara ignoreras eller behandlas som noll. Pythagoras hypotenusaform adderar kvadrater; katetformen subtraherar dem; att tillämpa den felaktiga uppfinner en sida som inte finns. När den saknade sidan har återställts kan <a href=\"/right-triangle-side-calculator/\">kalkylatorn för rätvinkliga triangelsidor</a> dubbelkontrollera värdet, och semiperimeterberäkningen fortsätter på fast mark. Dessa steg för saknad sida är pedagogiska stödmetoder, inte extra inmatningar i den befintliga kalkylatorn." }
        ]
      },
      "sec-properties": {
        "h2": "Viktiga egenskaper hos semiperimetern i rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Semiperimetern beter sig förutsägbart. Dessa egenskaper fungerar både som snabba mentala kontroller och som verktyg i geometriskt resonemang." },
          { "kind": "h3", "text": "Semiperimetern är större än hypotenusan" },
          { "kind": "p", "text": "För varje giltig triangel gäller [[a+b>c]]. Att lägga till [[c]] på båda sidorna ger [[a+b+c>2c]], och att dividera med två ger [[[\\boxed{s>c}]]]. Semiperimetern överstiger alltid den längsta sidan. Om en beräkning returnerar [[s]] mindre än [[c]] är markeringarna eller aritmetiken fel." },
          { "kind": "h3", "text": "Semiperimetern är mindre än summan av kateterna" },
          { "kind": "p", "text": "Triangelolikheten ger också [[c<a+b]]. Att lägga till [[a+b]] på båda sidorna ger [[a+b+c<2(a+b)]], och att halvera ger [[[\\boxed{s<a+b}]]]. Så semiperimetern ligger strikt mellan hypotenusan och summan av kateterna: [[c<s<a+b]]. För 3-4-5: [[5<6<7]]. Denna inramning är en snabb rimlighetskontroll på varje svar." },
          { "kind": "h3", "text": "Att dubblera varje sida dubblerar semiperimetern" },
          { "kind": "p", "text": "Skala 3-4-5-triangeln med två: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] ger sidorna 6, 8, 10. Då [[s_2=\\frac{2a+2b+2c}{2}]], alltså [[[\\boxed{s_2=2s}]]]. Numeriskt: [[s_2=12=2\\times6]]. Semiperimetern är ett linjärt mått, så enhetlig skalning skalar den med samma faktor." },
          { "kind": "h3", "text": "Att tredubbla varje sida tredubblar semiperimetern" },
          { "kind": "p", "text": "Samma linjäritet gäller för varje skalfaktor. Tredubbla varje sida och summan tredubblas; att halvera den tredubblade summan ger tre gånger den ursprungliga semiperimetern: [[[\\boxed{s_2=3s}]]]. Generellt skalar skalning av alla sidor med [[k]] [[s]] med [[k]]. Det är därför likformiga trianglar har proportionella semiperimetrar." },
          { "kind": "h3", "text": "Vad händer när bara en sida ändras?" },
          { "kind": "p", "text": "Att ändra en sida medan de andra två hålls fasta ändrar den numeriska semiperimetern med halva sidlängdsändringen, eftersom bara en term av summan rör sig. Men det finns en hake: de resulterande måtten måste fortfarande beskriva en giltig triangel, och för den här sidan, en rätvinklig triangel. Att förlänga hypotenusan i en 3-4-5-triangel till 6 bryter till exempel [[a^2+b^2=c^2]], så de nya talen beskriver inte längre en rätvinklig triangel alls. Justera en sida i en rätvinklig triangel och de andra måste justeras för att bevara den räta vinkeln." },
          { "kind": "h3", "text": "Semiperimetern hos en 45-45-90-triangel" },
          { "kind": "p", "text": "Låt båda kateterna vara lika med [[k]]. Hypotenusan är [[c=k\\sqrt{2}]], så semiperimetern är [[s=\\frac{k+k+k\\sqrt{2}}{2}]], vilket förenklas till [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]]. De lika kateterna bidrar symmetriskt, och den irrationella hypotenusan lämnar sitt avtryck på resultatet: för [[k=1]] är [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Semiperimetern hos en 30-60-90-triangel" },
          { "kind": "p", "text": "Om den kortare kateten är [[k]] är sidorna [[k]], [[k\\sqrt{3}]] och [[2k]]. Därför [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], vilket ger [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]]. Numeriskt, med [[k=2]] är sidorna 2, [[2\\sqrt{3}\\approx3.464]] och 4, så [[s\\approx4.732]]. Exakt rotform är att föredra här: den bevarar full precision för varje senare Heron- eller inradieberäkning." }
        ]
      },
      "sec-units": {
        "h2": "Förstå måttenheter i semiperimeterberäkningar",
        "blocks": [
          { "kind": "p", "text": "Semiperimetern fungerar i varje längdenhet, meter, centimeter, millimeter, kilometer, fot, tum, yard eller mil, eftersom den bara är en summa av längder, halverad. Svaret har alltid samma enhet som inmatningarna. Den enda strikta regeln är konsekvens: varje sida måste uttryckas i samma enhet före additionen." },
          { "kind": "h3", "text": "Varför måste alla tre sidomått använda kompatibla enheter?" },
          { "kind": "p", "text": "Semiperimetern beräknas genom att addera tre längder, och längder i olika enheter adderas inte direkt. Att addera 3 meter till 40 centimeter som om båda vore vanliga tal ger 43 av ingenting meningsfullt. Summan är bara giltig när varje term delar en enhet, så omvandling kommer före addition, aldrig efter." },
          { "kind": "h3", "text": "Uträkningsexempel för enhetsomvandling" },
          { "kind": "p", "text": "Givet [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Omvandla först tum till fot: [[48\\text{ inches}=4\\text{ ft}]]. Nu är alla tre sidorna i fot: [[s=\\frac{3+4+5}{2}]], vilket ger [[[\\boxed{s=6\\text{ ft}}]]]. Måtten måste omvandlas före additionen eftersom formeln adderar råa tal; den kan inte veta att 48 betydde tum om du inte omvandlar det." },
          { "kind": "h3", "text": "Hur hjälper kalkylatorns enhetsväljare?" },
          { "kind": "p", "text": "Varje inmatning på den här sidan har sin egen måttenhetsväljare, som låter dig deklarera enheten för talet du skrev. Ställ in varje väljare så att den matchar inmatningens verkliga enhet så att verktyget kombinerar värdena på en konsekvent grund. Anta inga omvandlingsfunktioner utöver vad gränssnittet visar: väljarna beskriver dina inmatningar, och semiperimetern beräknas från värdena som angivna." },
          { "kind": "h3", "text": "Arbeta med decimala sidomått" },
          { "kind": "p", "text": "Decimaltal följer samma formel. Med [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], alltså [[s=\\frac{15}{2}]], vilket ger [[[\\boxed{s=7.5\\text{ units}}]]]. Behåll full decimalprecision genom additionen och divisionen; avrunda endast det slutliga visade svaret, och endast om problemet kräver det." },
          { "kind": "h3", "text": "Arbeta med irrationella sidlängder" },
          { "kind": "p", "text": "Vissa rätvinkliga trianglar har irrationella sidor, och formeln hanterar dem på samma sätt. Ta en 45-45-90-triangel med [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], vilket ger den exakta formen [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], ungefär [[s\\approx1.7071]]. Exakt rotnotation är värdefull i matematik eftersom den bevarar full precision: varje senare användning av [[s]] i Herons formel eller en inradieberäkning utgår från det sanna värdet, inte ett avrundat." },
          { "kind": "h3", "text": "Varför ska du undvika att avrunda för tidigt?" },
          { "kind": "p", "text": "För tidig avrundning injicerar fel i varje senare beräkning, och semiperimetern är ofta ett mellanvärde, inte det slutliga svaret. Att avrunda [[s]] till två decimaler innan den matas in i Herons formel, där den förekommer fyra gånger, förstärker felet märkbart. Behåll tillräcklig precision under mellanstegen: bär den fulla decimalen eller den exakta roten, och avrunda en gång, i slutet, till den precision problemet kräver." }
        ]
      },
      "sec-mistakes": {
        "h2": "Vanliga misstag vid beräkning av semiperimeter i rätvinklig triangel",
        "blocks": [
          { "kind": "p", "text": "Sexton fel står för nästan varje felaktig semiperimeter. Var och en förklaras med vad som går fel, varför det händer och det korrekta angreppssättet." },
          { "kind": "p", "text": "<strong>1. Glömmer att dividera summan med två.</strong> Att addera 3 + 4 + 5 = 12 och stanna där ger omkretsen, inte semiperimetern. Avsluta alltid med divisionen: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Dividerar varje sida innan formeln förstås.</strong> Att halvera sidorna individuellt och sedan addera fungerar aritmetiskt men döljer formelns struktur. Addera först, dividera en gång: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Glömmer att inkludera hypotenusan.</strong> Hypotenusan är en randkant. Att utelämna den från en 3-4-5-triangel ger [[(3+4)/2=3.5]] istället för 6." },
          { "kind": "p", "text": "<strong>4. Använder bara de två vinkelräta kateterna.</strong> Samma fel som ovan i annan skepnad. Kateterna ensamma är inte hela randen; hypotenusan sluter formen och måste räknas." },
          { "kind": "p", "text": "<strong>5. Förväxlar semiperimeter med hela omkretsen.</strong> Att rapportera 12 för en 3-4-5-triangel besvarar \"vad är P?\" när frågan gällde s. Kom ihåg: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Förväxlar semiperimeter med area.</strong> För 3-4-5 är båda numeriskt 6, vilket bjuder in till förväxlingen. De skiljer sig i art: 6 längdenheter mot 6 kvadrateenheter yta." },
          { "kind": "p", "text": "<strong>7. Rapporterar resultatet i kvadrateenheter.</strong> En semiperimeter på 6 cm i kvadrat är ett kategorifel. Att halvera en längd lämnar en längd: 6 cm, inte 6 cm²." },
          { "kind": "p", "text": "<strong>8. Använder en felaktig hypotenusa.</strong> Om hypotenusavärdet är fel är summan fel och därmed semiperimetern också. Verifiera [[c=\\sqrt{a^2+b^2}]] när hypotenusan beräknades snarare än mättes." },
          { "kind": "p", "text": "<strong>9. Anger mått som inte bildar en rätvinklig triangel.</strong> Testa [[a^2+b^2=c^2]] innan du litar på etiketten \"rätvinklig triangel\". Additionen fungerar ändå, men den geometriska betydelsen ändras." },
          { "kind": "p", "text": "<strong>10. Blandar centimeter och meter.</strong> Att addera 3 m till 40 cm ger varken 43 av något. Omvandla till en enhet först." },
          { "kind": "p", "text": "<strong>11. Blandar fot och tum.</strong> Den klassiska imperialfällan. Omvandla tum till fot (dividera med 12) före additionen, eller ställ in enhetsväljarna så att de matchar." },
          { "kind": "p", "text": "<strong>12. Avrundar för tidigt.</strong> Att avrunda [[\\sqrt{2}]] till 1,4 före additionen ackumulerar fel. Avrunda endast det slutliga svaret." },
          { "kind": "p", "text": "<strong>13. Använder en saknad sida utan att beräkna den.</strong> Två kända sidor är ingen semiperimeter. Återställ den tredje med Pythagoras sats först, addera sedan och halvera." },
          { "kind": "p", "text": "<strong>14. Tillämpar Herons formel felaktigt.</strong> Faktorerna är [[s-a]], [[s-b]] och [[s-c]]: varje sida subtraheras från semiperimetern, inte från en annan sida. Att förväxla subtraktionerna bryter arean." },
          { "kind": "p", "text": "<strong>15. Förväxlar inradien med den omskrivna cirkelns radie.</strong> Inradien [[r=K/s]] tangerar alla tre sidorna inifrån; den omskrivna cirkelns radie passerar genom hörnen och är lika med [[c/2]] för en rätvinklig triangel. Olika cirklar, olika formler." },
          { "kind": "p", "text": "<strong>16. Antar att semiperimetern beskriver en fysisk halvrandväg.</strong> Det är halva det numeriska totalet, inte en markerad halvvägsrutt runt triangeln. Behandla den som det härledda mellanvärde den är." },
          { "kind": "p", "text": "<strong>Fel mot rätt, sida vid sida.</strong> Givet [[a=3,\\;b=4,\\;c=5]]: fel är [[s=3+4+5=12]], vilket hoppar över divisionen och rapporterar hela omkretsen. Också fel är [[s=(3+4)/2=3.5]], vilket utelämnar hypotenusan. Rätt är [[s=\\frac{3+4+5}{2}]], vilket ger [[[\\boxed{s=6}]]]." }
        ]
      },
      "sec-verify": {
        "h2": "Så kontrollerar du att ditt semiperimetersvar är rätt",
        "blocks": [
          { "kind": "p", "text": "Åtta oberoende kontroller fångar nästan varje fel. 3-4-5-triangeln demonstrerar var och en. Oberoende kontroller spelar roll eftersom de misslyckas på olika sätt: när orelaterade metoder är överens har svaret förtjänat sitt förtroende." },
          { "kind": "p", "text": "<strong>Metod 1: Dubblera semiperimetern.</strong> [[[\\boxed{P=2s}]]] måste vara lika med hela omkretsen: [[2\\times6=12=3+4+5]]. Om dubbleringen inte återskapar sidornas summa gick divisionen eller additionen fel." },
          { "kind": "p", "text": "<strong>Metod 2: Räkna om från alla tre sidorna.</strong> Räkna om [[s=\\frac{a+b+c}{2}]] från grunden: [[(3+4+5)/2=6]]. En andra omgång fångar tangentbordsfel och aritmetiska missar." },
          { "kind": "p", "text": "<strong>Metod 3: Verifiera Pythagoras samband.</strong> Kontrollera [[a^2+b^2=c^2]]: [[9+16=25]]. Detta bekräftar att sidorna bildar en rätvinklig triangel, vilket validerar sidomarkeringarna som semiperimetern beror på." },
          { "kind": "p", "text": "<strong>Metod 4: Kontrollera hypotenusan.</strong> Bekräfta [[c>a]] och [[c>b]]: 5 är större än 3 och större än 4. Om den förmodade hypotenusan inte är den längsta sidan är markeringarna fel." },
          { "kind": "p", "text": "<strong>Metod 5: Kontrollera triangelolikheten.</strong> Bekräfta [[a+b>c]]: [[3+4=7>5]]. Summan av kateterna måste överstiga hypotenusan, annars existerar ingen triangel." },
          { "kind": "p", "text": "<strong>Metod 6: Verifiera semiperimetergränsen.</strong> [[[\\boxed{s>c}]]] måste gälla: [[6>5]]. Denna enskilda olikhet fångar förvånansvärt många markeringsfel." },
          { "kind": "p", "text": "<strong>Metod 7: Kontrollera enheterna.</strong> Bekräfta att alla tre sidlängderna använder kompatibla enheter och att resultatet är ett linjärt mått. Blandade enheter ogiltigförklarar summan även när aritmetiken är perfekt." },
          { "kind": "p", "text": "<strong>Metod 8: Jämför med kalkylatorns lösningssteg.</strong> Det visade resultatet och beräkningsstegen hjälper till att identifiera misstag: om ett steg visar en felskriven sida eller en hoppad division är felet synligt innan svaret används." }
        ]
      },
      "sec-conclusion": {
        "h2": "Halva omkretsen, full förståelse",
        "blocks": [
          { "kind": "p", "text": "Semiperimetern hos en rätvinklig triangel är en liten idé med lång räckvidd. En addition och en division ger ett tal som öppnar vägen till inradien, driver Herons formel och skärper areaverifieringen. Formeln efterfrågar tre sidor eftersom randen har tre kanter, och hypotenusan förtjänar sin plats i summan som kanten som sluter formen. Allt annat i den här guiden, de uträknade exemplen, de tolv tillämpningarna, egenskaperna, enhetsomvandlingarna, de sexton misstagen, de åtta verifieringskontrollerna, finns för att skydda den ena halverade summan från de små markerings- och enhetsfel som ger troligt utseende felaktiga svar." },
          { "kind": "p", "text": "Använd den här sidans kalkylator när alla tre sidorna är uppmätta, återställ en saknad sida genom Pythagoras sats när de inte är det, och kontrollera resultatet mot gränserna c < s < a + b innan talet går in i en ritning eller en modell. När frågan vänder sig mot ytan innanför randen väntar Herons formel och areakalkylatorn; när den vänder sig mot cirkeln inuti triangeln är inradien en division bort." }
        ]
      }
    },
    "relatedHeading": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
    "relatedIntro": "Var och ett av dessa verktyg utvidgar semiperimeterberäkningen i en riktning: hela randen, ytan, vägen via semiperimeter till area, den inskrivna cirkeln, eller de saknade sidorna bakom allt.",
    "relatedItems": [
      "Omkretskalkylator för rätvinklig triangel",
      "Areakalkylator för rätvinklig triangel",
      "Areakalkylator från semiperimeter för rätvinklig triangel",
      "Inradiekalkylator för rätvinklig triangel",
      "Sidokalkylator för rätvinklig triangel"
    ],
    "faqHeading": "Vanliga frågor",
    "faqs": [
      {
        "question": "Vad är formeln för semiperimetern hos en rätvinklig triangel?",
        "answer": "Formeln är s = (a + b + c) / 2, där a och b är de två kateter som bildar 90-gradersvinkeln och c är hypotenusan, den längsta sidan. Addera alla tre sidlängder och dividera sedan summan med två. Ekvivalent: s = P / 2, där P är hela omkretsen."
      },
      {
        "question": "Vad betyder semiperimeter?",
        "answer": "Semiperimeter betyder halva omkretsen. Semi betyder halva och perimeter betyder den fullständiga randlängden, så semiperimetern är exakt halva den totala sträckan runt triangeln. Det är ett härlett geometriskt mått som används som mellanvärde i många triangelformler."
      },
      {
        "question": "Varför är semiperimetern halva omkretsen?",
        "answer": "Det är dess definition: semiperimetern konstrueras genom att ta hela omkretsen och dividera med två. Halvvärdet visar sig vara den storhet som formler som Herons formel och sambandet med inradien K = rs är skrivna för, vilket är anledningen till att den fick ett eget namn och en egen symbol, s."
      },
      {
        "question": "Behöver jag alla tre sidorna för att beräkna semiperimetern?",
        "answer": "Ja. Semiperimetern är halva summan av alla tre sidlängderna, så varje sida måste vara känd, inklusive hypotenusan. Om en sida saknas, återställ den först med Pythagoras sats: c = √(a² + b²) för en saknad hypotenusa, eller a = √(c² − b²) för en saknad katet."
      },
      {
        "question": "Vad är skillnaden mellan omkrets och semiperimeter?",
        "answer": "Omkretsen P = a + b + c är hela randlängden, medan semiperimetern s = (a + b + c) / 2 är halva den. Använd omkretsen för fysiskt randarbete som staket eller inramning, och semiperimetern för formelarbete som Herons formel, inradieberäkningar och geometriska bevis. För en 3-4-5-triangel är P = 12 och s = 6."
      },
      {
        "question": "Mäts semiperimetern i kvadrateenheter?",
        "answer": "Nej. Semiperimetern är ett endimensionellt längdmått, så den tar linjära enheter: meter, centimeter, fot eller tum, som matchar sidlängderna. Kvadrateenheter hör till arean. Att rapportera en semiperimeter på 6 cm² är ett kategorifel; den korrekta enheten är 6 cm."
      },
      {
        "question": "Vad är semiperimetern hos en 3-4-5 rätvinklig triangel?",
        "answer": "Addera sidorna: 3 + 4 + 5 = 12, dividera sedan med två: s = 6 enheter. Hela omkretsen är 12 enheter. Sidorna uppfyller 3² + 4² = 5², vilket bekräftar den räta vinkeln, och semiperimetern 6 överstiger hypotenusan 5, som den måste för varje giltig triangel."
      },
      {
        "question": "Varför används semiperimetern i Herons formel?",
        "answer": "Herons formel, K = √(s(s − a)(s − b)(s − c)), beräknar area enbart från sidlängder, och den skrivs i termer av semiperimetern s och skillnaderna s − a, s − b, s − c. Att beräkna s först centrerar uttrycket och håller det kompakt. För 3-4-5 ger s = 6 K = √(6 × 3 × 2 × 1) = 6 kvadrateenheter."
      },
      {
        "question": "Hur hänger semiperimetern ihop med inradien?",
        "answer": "Area, inradie och semiperimeter uppfyller K = rs, alltså r = K / s. För en rätvinklig triangel förenklas detta till r = (a + b − c) / 2. För 3-4-5: s = 6, K = 6, alltså r = 1. Semiperimetern är bron som omvandlar tre sidlängder till radien hos den inskrivna cirkeln."
      },
      {
        "question": "Kan jag beräkna semiperimetern om en sida saknas?",
        "answer": "Ja, men hitta den saknade sidan först. Med kateterna 6 och 8 är hypotenusan √(36 + 64) = 10, så s = (6 + 8 + 10) / 2 = 12. Med hypotenusan 13 och kateten 12 är den saknade kateten √(169 − 144) = 5, så s = (5 + 12 + 13) / 2 = 15. Kalkylatorn på den här sidan kräver att alla tre sidorna anges."
      },
      {
        "question": "Hur kan jag verifiera mitt semiperimetersvar?",
        "answer": "Dubblera det: 2s måste vara lika med hela omkretsen a + b + c. Kontrollera att s överstiger hypotenusan (s > c) och ligger under summan av kateterna (s < a + b). Bekräfta Pythagoras samband a² + b² = c², verifiera att alla tre sidorna delar en enhet, och jämför med kalkylatorns lösningssteg."
      },
      {
        "question": "Kan semiperimetern användas för att beräkna triangelns area?",
        "answer": "Ja, genom Herons formel: K = √(s(s − a)(s − b)(s − c)). Den är en oberoende kontroll av den direkta formeln för rätvinklig triangel K = ab / 2. För 3-4-5 ger båda 6 kvadrateenheter. Herons formel är mest värdefull när ingen höjd är känd eller när du vill ha en andra, orelaterad beräkning som bekräftar arean."
      }
    ]
  }
};
