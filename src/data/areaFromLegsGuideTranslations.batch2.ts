// areaFromLegsGuideTranslations.batch2.ts: Right Triangle Area From Legs Guide (Page 22 of 45) translations for French (fr), German (de), and Italian (it).
export const AREA_FROM_LEGS_TRANSLATIONS_BATCH2 = {
  "fr": {
    "faqs": [
      {
        "question": "Quelle est la formule de l'aire d'un triangle rectangle à partir de ses cathètes ?",
        "answer": "K = ab/2, où a et b sont les deux cathètes perpendiculaires. Multipliez les cathètes et divisez par deux. Pour a = 6 et b = 8, K = (6 × 8) / 2 = 24 unités carrées. Ni hypoténuse, ni angle, ni autre mesure n'est nécessaire."
      },
      {
        "question": "Pourquoi multiplie-t-on les deux cathètes et divise-t-on par deux ?",
        "answer": "Les deux cathètes forment les côtés d'un rectangle englobant d'aire a × b, et la diagonale du rectangle le coupe en deux triangles rectangles identiques. Chaque triangle possède la moitié du rectangle, donc l'aire est le produit divisé par deux. La multiplication construit le rectangle ; la division le réduit au triangle."
      },
      {
        "question": "Ai-je besoin de l'hypoténuse pour calculer l'aire ?",
        "answer": "Non. L'aire vient des deux cathètes seules, par K = ab/2. L'hypoténuse, c = √(a² + b²), est utile pour vérifier les étiquettes des côtés ou retrouver un côté manquant, mais elle n'entre jamais dans le calcul d'aire lui-même."
      },
      {
        "question": "Quelle est la différence entre une cathète et l'hypoténuse ?",
        "answer": "Les cathètes sont les deux côtés qui se rencontrent à l'angle droit et sont perpendiculaires entre eux. L'hypoténuse est opposée à l'angle droit et est toujours le côté le plus long. Le calculateur prend les deux cathètes comme entrées ; entrer l'hypoténuse comme une cathète produit une mauvaise réponse."
      },
      {
        "question": "Puis-je échanger la cathète a et la cathète b ?",
        "answer": "Oui. La multiplication commute, donc (a × b) / 2 égale (b × a) / 2. Entrer 3 et 4 dans l'un ou l'autre ordre donne 6. Les étiquettes sont une commodité pour parler des côtés, pas une contrainte sur le calcul."
      },
      {
        "question": "Puis-je calculer l'aire avec des mesures décimales de cathètes ?",
        "answer": "Oui. Pour a = 3.5 et b = 9.2, K = (3.5 × 9.2) / 2 = 16.1 unités carrées. La méthode est identique pour les nombres entiers et les décimales. Gardez la pleine précision pendant le calcul et n'arrondissez que la réponse finale selon la précision de mesure."
      },
      {
        "question": "Que se passe-t-il si les deux cathètes utilisent des unités différentes ?",
        "answer": "Convertissez à une unité avant de calculer. Avec a = 3 ft et b = 24 pouces, convertissez 24 pouces en 2 ft, puis K = (3 × 2) / 2 = 3 ft². Multiplier des unités mélangées donne un nombre sans signification propre, donc l'étape de conversion est obligatoire."
      },
      {
        "question": "Puis-je trouver une cathète manquante si je connais l'aire ?",
        "answer": "Oui, en réarrangeant la formule en b = 2K/a (ou a = 2K/b). Avec K = 24 cm² et a = 6 cm, b = 48/6 = 8 cm. C'est la même relation lue à l'envers, pas un mode de calculateur séparé ; le calculateur lui-même prend toujours les deux cathètes."
      },
      {
        "question": "Quel est le lien entre le théorème de Pythagore et l'aire d'un triangle ?",
        "answer": "Il relie les longueurs des côtés par a² + b² = c², tandis que la formule d'aire mesure la surface enfermée. Utilisez le théorème pour trouver un côté manquant ou vérifier une hypoténuse, puis appliquez K = ab/2. Pour des cathètes de 6 et 8, c = 10, et l'aire reste 24 dans tous les cas."
      },
      {
        "question": "La formule fonctionne-t-elle pour les triangles non rectangles ?",
        "answer": "Non. K = ab/2 suppose que l'angle inclus entre les côtés est de 90 degrés. Pour les autres triangles, utilisez K = ab sin(C)/2 avec l'angle inclus réel C. Appliquer la formule des cathètes à un triangle non rectangle traite sin(C) comme égal à 1 alors qu'il ne l'est pas, surestimant l'aire."
      },
      {
        "question": "Pourquoi la réponse est-elle exprimée en unités carrées ?",
        "answer": "L'aire compte les carrés unitaires couvrant la surface : cm × cm = cm², m × m = m², ft × ft = ft². Une unité linéaire comme 24 m décrit une longueur, pas une surface. Déclarez toujours l'unité au carré avec le nombre."
      },
      {
        "question": "Deux triangles rectangles différents peuvent-ils avoir la même aire ?",
        "answer": "Oui, chaque fois que leurs produits de cathètes correspondent. Un triangle de 3 par 4 et un triangle de 2 par 6 donnent tous deux K = 6. La forme et l'aire sont indépendantes : des produits égaux signifient des aires égales, donc un triangle grand et étroit peut enfermer exactement autant de surface qu'un triangle court et large."
      }
    ],
    "relatedHeading": "Explorer les calculateurs de triangles rectangles associés",
    "relatedItems": [
      "Calculateur d'aire de triangle rectangle",
      "Calculateur d'aire de triangle rectangle à partir d'une cathète et d'un angle",
      "Calculateur d'aire de triangle rectangle à partir d'un angle",
      "Calculateur d'aire de triangle rectangle à partir du demi-périmètre",
      "Calculateur de côtés de triangle rectangle",
      "Calculateur de périmètre de triangle rectangle"
    ],
    "relatedIntro": "Des mesures différentes appellent des calculateurs différents.",
    "faqHeading": "Questions fréquentes",
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer l'aire d'un triangle rectangle à partir de ses deux cathètes",
      "sec-anatomy": "Qu'est-ce qu'un triangle rectangle ?",
      "sec-base-height": "Pourquoi les deux cathètes sont-elles la base et la hauteur ?",
      "sec-formula": "Pourquoi l'aire d'un triangle rectangle est-elle la moitié du produit de ses cathètes ?",
      "sec-howto": "Comment utiliser le calculateur d'aire de triangle rectangle à partir des cathètes",
      "sec-examples": "Exemples pas à pas de l'aire d'un triangle rectangle à partir de deux cathètes",
      "sec-practical": "Applications concrètes de l'aire d'un triangle rectangle à partir de deux cathètes",
      "sec-pythagoras": "Quel est le lien entre le théorème de Pythagore et l'aire d'un triangle rectangle ?",
      "sec-missing-leg": "Comment trouver une cathète manquante quand l'aire du triangle est connue",
      "sec-scaling": "Comment la modification des deux cathètes affecte-t-elle l'aire ?",
      "sec-general": "Pourquoi ne peut-on pas utiliser la formule des deux cathètes pour tous les triangles ?",
      "sec-units": "Comprendre les unités lors du calcul de l'aire d'un triangle rectangle",
      "sec-mistakes": "Erreurs fréquentes dans le calcul de l'aire d'un triangle rectangle à partir des cathètes",
      "sec-verify": "Comment vérifier que votre aire de triangle rectangle est correcte",
      "sec-applications": "L'aire d'un triangle rectangle à partir de deux cathètes en pratique",
      "sec-faq": "Questions fréquentes",
      "sec-related": "Explorer les calculateurs de triangles rectangles associés",
      "sec-conclusion": "Deux mesures, un produit divisé par deux"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer l'aire d'un triangle rectangle à partir de ses deux cathètes",
        "blocks": [
          { "kind": "p", "text": "Prenez [[a=6]], [[b=8]]. Appliquez [[K=\\frac{6\\times8}{2}]] : [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Le résultat nomme la surface plane totale entourée par les trois côtés : vingt-quatre unités carrées. C'est exactement ce que le calculateur d'aire de triangle rectangle à partir des cathètes renvoie pour ces deux entrées." },
          { "kind": "p", "text": "Le calculateur n'a besoin que des deux cathètes, les côtés qui se rencontrent à l'angle droit. Comme ces deux côtés sont perpendiculaires, l'un sert de base et l'autre de hauteur, donc aucune autre mesure n'est nécessaire. L'hypoténuse ne joue aucun rôle ici. Multipliez les cathètes, divisez le produit par deux, et l'aire découle de [[K=\\frac{ab}{2}]]." },
          { "kind": "p", "text": "C'est l'un des calculs d'aire les plus simples en géométrie, car les deux mesures perpendiculaires sont déjà en main. Il apparaît partout où un coin est d'équerre : tracés de construction, découpes de tôles, plates-bandes et croquis de bornage se réduisent tous à deux cathètes et un produit divisé par deux." }
        ]
      },
      "sec-anatomy": {
        "h2": "Qu'est-ce qu'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avant que la formule ait un sens, les étiquettes doivent être exactes. Chaque symbole ci-dessous apparaît dans le calculateur, et chacun porte une signification unique et fixe." },
          { "kind": "h3", "text": "Définition du triangle rectangle" },
          { "kind": "p", "text": "Un triangle rectangle est un polygone à trois côtés contenant exactement un angle intérieur de 90 degrés. Il a trois sommets, trois côtés et trois angles intérieurs dont la somme est de 180 degrés. L'angle droit est généralement marqué par un petit carré au sommet. Les deux côtés qui forment ce coin sont les cathètes ; le côté opposé est l'hypoténuse. Puisque [[C=90^\\circ]], il s'ensuit que [[[\\boxed{A+B=90^\\circ}]]] : les deux angles aigus sont complémentaires, donc connaître l'un détermine l'autre." },
          { "kind": "h3", "text": "Que sont les deux cathètes d'un triangle rectangle ?" },
          { "kind": "p", "text": "Les cathètes sont les deux côtés qui se rencontrent à l'angle droit. La cathète [[a]] est opposée à l'angle [[A]] ; la cathète [[b]] est opposée à l'angle [[B]]. Leur propriété caractéristique est la perpendicularité : [[a\\perp b]]. Ce seul fait rend le calcul d'aire si direct, car une paire perpendiculaire fournit déjà une base et une hauteur sans construction supplémentaire." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle de 90 degrés. C'est toujours le côté le plus long du triangle, et elle ne forme jamais l'angle droit elle-même ; elle s'étend en face de lui. Elle n'est pas requise dans la formule d'aire basée sur les cathètes. Elle devient utile quand un côté manque, puisque [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] la retrouve grâce au théorème de Pythagore, mais le calculateur d'aire ne la demande jamais." },
          { "kind": "h3", "text": "Pourquoi les deux cathètes sont-elles perpendiculaires ?" },
          { "kind": "p", "text": "Perpendiculaire signifie se rencontrer à exactement 90 degrés. Les cathètes partagent le sommet de l'angle droit, donc le coin entre elles est d'équerre par définition. Cela importe parce que l'aire a besoin d'une base multipliée par une hauteur perpendiculaire. Dans un triangle rectangle, cette paire est déjà tracée : aucune hauteur à abaisser, aucune ligne supplémentaire à construire. Le triangle fournit les deux mesures directement." },
          { "kind": "h3", "text": "Les cathètes peuvent-elles être échangées ?" },
          { "kind": "p", "text": "Oui. Comme [[a\\times b=b\\times a]], il s'ensuit que [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]. Un contrôle concret : [[\\frac{3\\times4}{2}=6]] et [[\\frac{4\\times3}{2}=6]]. Rebaptiser la cathète appelée [[a]] et celle appelée [[b]] ne change rien au triangle ni à son aire. Entrez les deux mesures dans l'un ou l'autre champ ; le calculateur renvoie le même résultat." }
        ],
        "imgAlt": "Triangle rectangle ABC : angle droit en C, cathètes a et b mises en évidence, hypoténuse c, formule K = ab/2",
        "figcaption": "Triangle ABC : les cathètes mises en évidence a et b sont les deux mesures dont le calculateur a besoin."
      },
      "sec-base-height": {
        "h2": "Pourquoi les deux cathètes sont-elles la base et la hauteur ?",
        "blocks": [
          { "kind": "p", "text": "Toute la méthode repose sur un fait géométrique : dans un triangle rectangle, la base et la hauteur perpendiculaire sont déjà tracées sous forme des deux cathètes. Comprendre pourquoi transforme la formule d'une règle apprise par cœur en quelque chose d'évident." },
          { "kind": "h3", "text": "Qu'est-ce que la base d'un triangle ?" },
          { "kind": "p", "text": "La base est le côté choisi comme référence pour le calcul d'aire. N'importe quel côté d'un triangle peut servir de base. Pour un triangle rectangle, choisir l'une des cathètes comme base est naturel, car l'autre cathète lui est déjà perpendiculaire. Le choix est une commodité : prenez une cathète comme base et la géométrie de l'angle droit fait le reste." },
          { "kind": "h3", "text": "Qu'est-ce que la hauteur perpendiculaire ?" },
          { "kind": "p", "text": "La hauteur est la distance la plus courte entre la base et le sommet opposé, mesurée perpendiculairement à la base. Quand la base est la cathète [[a]], le sommet opposé est l'extrémité lointaine de la cathète [[b]], et la cathète [[b]] elle-même est cette distance perpendiculaire. Rien ne doit être tracé ni mesuré au-delà du triangle ; la hauteur est un côté, pas une construction." },
          { "kind": "h3", "text": "Pourquoi la perpendicularité est-elle importante ?" },
          { "kind": "p", "text": "Multiplier deux longueurs de côtés produit un produit base-fois-hauteur uniquement quand les côtés sont perpendiculaires. Un côté incliné associé à une base mesure une diagonale plus longue, pas la hauteur perpendiculaire, donc le produit dépasse le véritable rectangle base-hauteur. Les cathètes d'un triangle rectangle sont perpendiculaires par définition, ce qui est exactement pourquoi leur produit est le bon point de départ. Ce calculateur exige les deux côtés qui forment l'angle droit ; toute autre paire brise la logique dont dépend la formule." },
          { "kind": "h3", "text": "L'hypoténuse peut-elle servir de base ?" },
          { "kind": "p", "text": "Un triangle peut utiliser n'importe quel côté comme base, y compris l'hypoténuse, mais la hauteur doit alors être la distance perpendiculaire entre le sommet opposé et ce côté. Cette distance n'est pas l'une des cathètes, et ce calculateur ne la mesure pas. L'hypoténuse ne peut pas simplement remplacer une cathète dans [[K=\\frac{ab}{2}]] ; cela calculerait une quantité différente et incorrecte. Ce calculateur est construit pour les deux cathètes perpendiculaires uniquement." }
        ]
      },
      "sec-formula": {
        "h2": "Pourquoi l'aire d'un triangle rectangle est-elle la moitié du produit de ses cathètes ?",
        "blocks": [
          { "kind": "p", "text": "Commencez par la règle générale : [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Pour un triangle rectangle, posez [[\\text{Base}=a]] et [[\\text{Height}=b]]. Comme les deux cathètes sont perpendiculaires, [[[\\boxed{K=\\frac{a\\times b}{2}}]]] Le reste de cette section montre d'où vient cette division par deux, pour que la division par deux soit comprise, pas seulement mémorisée." },
          { "kind": "h3", "text": "Comprendre la méthode du rectangle" },
          { "kind": "p", "text": "Dessinez un rectangle de largeur [[a]] et de hauteur [[b]]. Son aire est [[K_{\\text{rectangle}}=a\\times b]]. Tracez maintenant une diagonale d'un coin au coin opposé. La diagonale coupe le rectangle en deux triangles qui sont des copies exactes l'un de l'autre, chacun avec les cathètes [[a]] et [[b]] et un angle droit là où se trouvait le coin du rectangle. Les deux triangles ont la même aire, donc chacun possède la moitié du rectangle : [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "Pourquoi deux triangles rectangles identiques forment-ils un rectangle ?" },
          { "kind": "p", "text": "Placez deux copies du triangle de façon que leurs hypoténuses se rencontrent. Les cathètes correspondantes s'alignent : [[a]] contre [[a]], [[b]] contre [[b]]. Comme les angles aigus d'un triangle rectangle sont complémentaires ([[A+B=90^\\circ]]), les angles qui se rejoignent à chaque coin de la figure combinée totalisent 90 degrés partout. Le résultat a quatre angles droits et des côtés opposés égaux : un rectangle. Ses côtés sont exactement les deux cathètes, ce qui explique pourquoi l'aire du rectangle est [[a\\times b]] et que chaque triangle en possède la moitié." },
          { "kind": "h3", "text": "Pourquoi la division par deux est-elle nécessaire ?" },
          { "kind": "p", "text": "Prenez le rectangle de 6 par 8. Son aire est [[K=6\\times8=48]]. Chacun des deux triangles rectangles identiques occupe la moitié : [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] Omettre la division répond à une question différente : l'aire du rectangle, pas celle du triangle. La division par deux n'est pas un facteur d'ajustement ; c'est l'étape qui réduit le rectangle englobant au triangle." },
          { "kind": "h3", "text": "Preuve géométrique par les coordonnées" },
          { "kind": "p", "text": "Pour les lecteurs à l'aise avec les coordonnées, voici le même résultat obtenu par l'algèbre. Placez le sommet de l'angle droit à l'origine et notez les sommets [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]. Le triangle est la région délimitée par les deux axes de coordonnées et la droite joignant [[A]] à [[B]]. La base le long de l'axe des x a pour longueur [[a]], le côté vertical a pour longueur [[b]], et le triangle rectangle enfermé remplit exactement la moitié du rectangle de [[a]] par [[b]] que ces axes délimitent. Donc [[[\\boxed{K=\\frac{ab}{2}}]]], la même formule, atteinte sans machinerie nouvelle." }
        ],
        "imgAlt": "Rectangle de a par b coupé par une diagonale en deux triangles rectangles identiques, chacun d'aire ab/2",
        "figcaption": "Un rectangle de largeur a et de hauteur b, coupé le long de sa diagonale en deux triangles rectangles identiques."
      },
      "sec-howto": {
        "h2": "Comment utiliser le calculateur d'aire de triangle rectangle à partir des cathètes",
        "blocks": [
          { "kind": "p", "text": "Le calculateur n'a besoin que de deux entrées, saisies dans l'ordre. Les étapes ci-dessous suivent la disposition à l'écran, de l'identification des mesures jusqu'au résultat vérifié." }
        ],
        "steps": [
          "<strong>Identifiez les deux côtés qui se rencontrent à l'angle de 90 degrés.</strong> Ce sont les cathètes ; le repère de l'angle droit montre où elles se rejoignent.",
          "<strong>Vérifiez qu'aucune des mesures choisies n'est l'hypoténuse.</strong> L'hypoténuse est le côté le plus long, opposé à l'angle droit.",
          "<strong>Mesurez la première cathète.</strong> Utilisez un mètre ruban, une règle ou une échelle de dessin adaptée à l'objet.",
          "<strong>Mesurez la seconde cathète.</strong> Mesurez le long du côté lui-même, de coin à coin.",
          "<strong>Assurez-vous que les deux mesures utilisent des unités compatibles.</strong> Des mètres avec des mètres, des pieds avec des pieds, jamais mélangés.",
          "<strong>Entrez la cathète a dans le premier champ de saisie.</strong> L'une ou l'autre cathète peut passer en premier ; les étiquettes sont interchangeables.",
          "<strong>Entrez la cathète b dans le second champ de saisie.</strong> C'est l'autre côté perpendiculaire.",
          "<strong>Sélectionnez les unités de mesure appropriées.</strong> Faites correspondre l'unité à ce qui a été réellement mesuré.",
          "<strong>Cliquez sur Calculate Area.</strong> Le résultat apparaît avec la substitution affichée.",
          "<strong>Examinez le résultat calculé.</strong> Lisez l'aire et vérifiez qu'elle semble raisonnable.",
          "<strong>Vérifiez la solution mathématique pas à pas.</strong> Elle montre la formule, la substitution et le calcul.",
          "<strong>Utilisez le schéma du triangle pour vérifier les étiquettes des côtés.</strong> Confirmez que a et b se trouvent sur les côtés perpendiculaires.",
          "<strong>Vérifiez que le résultat est exprimé en unités carrées.</strong> Les unités de longueur au carré, correspondant aux entrées.",
          "<strong>Cliquez sur Reset pour commencer un nouveau calcul.</strong> Cela efface les deux champs pour un nouveau départ."
        ],
        "closingParagraphs": [
          "Le calculateur a exactement deux entrées, la cathète [[a]] et la cathète [[b]]. Il n'y a pas d'autres modes ni de champs cachés ; chaque aire de cette page vient de [[K=\\frac{ab}{2}]]."
        ]
      },
      "sec-examples": {
        "h2": "Exemples pas à pas de l'aire d'un triangle rectangle à partir de deux cathètes",
        "blocks": [
          { "kind": "p", "text": "Quatre triangles rectangles classiques montrent la méthode à des tailles croissantes. Chaque exemple substitue dans la formule, et l'hypoténuse n'apparaît que comme contrôle facultatif, jamais comme entrée." },
          { "kind": "h3", "text": "Exemple 1 : triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Donnés [[a=3]], [[b=4]]. Étape 1 : écrivez la formule, [[K=\\frac{a\\times b}{2}]]. Étape 2 : substituez, [[K=\\frac{3\\times4}{2}]]. Étape 3 : multipliez, [[K=\\frac{12}{2}]]. Réponse finale : [[[\\boxed{K=6\\text{ square units}}]]] Contrôle facultatif : [[c=\\sqrt{3^2+4^2}=5]]. L'hypoténuse confirme le triple familier mais ne joue aucun rôle dans l'aire." },
          { "kind": "h3", "text": "Exemple 2 : triangle rectangle 6-8-10" },
          { "kind": "p", "text": "Donnés [[a=6]], [[b=8]]. Alors [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Contrôle par le rectangle : le rectangle englobant de 6 par 8 a pour aire 48, et le triangle en possède exactement la moitié." },
          { "kind": "h3", "text": "Exemple 3 : triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Donnés [[a=5]], [[b=12]]. Alors [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] L'hypoténuse de 13 n'entre jamais dans le calcul ; elle ne compterait que si un côté manquait." },
          { "kind": "h3", "text": "Exemple 4 : triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Donnés [[a=8]], [[b=15]]. Alors [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Mêmes trois étapes, des nombres plus grands, une logique identique." },
          { "kind": "h3", "text": "Comparaison des exemples fondamentaux" }
        ],
        "table": {
          "headers": ["Triangle", "Cathète a", "Cathète b", "Hypoténuse (contrôle uniquement)", "Aire calculée"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applications concrètes de l'aire d'un triangle rectangle à partir de deux cathètes",
        "blocks": [
          { "kind": "p", "text": "Douze situations résolues portent la formule de la page à l'atelier, au chantier et au studio. Chacune nomme un panneau, une section, un profilé ou un modèle simplifié triangulaire, fait passer les deux entrées du calculateur dans la formule et énonce l'hypothèse derrière les nombres. Quand l'objet réel est courbe ou irrégulier, le calcul ne couvre que le triangle modélisé, et l'aire ne remplace jamais à elle seule la résistance, le coût ou la sécurité." },
          { "kind": "h3", "text": "Exemple 1 : fenêtre triangulaire en verre" },
          { "kind": "p", "text": "Une fenêtre triangulaire en verre a pour dimensions perpendiculaires [[a=3\\text{ m}]], [[b=4\\text{ m}]]. Substituez : [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Le résultat représente la surface vitrée plane avant que les dimensions du cadre soient soustraites. Hypothèse : la vitre est un vrai triangle rectangle ; la marge du cadre est traitée séparément." },
          { "kind": "h3", "text": "Exemple 2 : équerre de support en acier" },
          { "kind": "p", "text": "Une équerre de support triangulaire en acier a [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]. Alors [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] L'aire décrit la plaque plane et ne détermine pas sa capacité de charge. Hypothèse : l'équerre est découpée en triangle rectangle ; les trous de boulons et les pliages sont exclus." },
          { "kind": "h3", "text": "Exemple 3 : profil latéral de rampe triangulaire" },
          { "kind": "p", "text": "Un profil latéral de rampe simplifié a [[a=6\\text{ m}]], [[b=8\\text{ m}]]. Alors [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] C'est le profil latéral triangulaire vertical, pas la surface de marche inclinée. Hypothèse : le profil est modélisé avec un coin d'équerre à la base." },
          { "kind": "h3", "text": "Exemple 4 : support de toit triangulaire" },
          { "kind": "p", "text": "Une section de support de toit triangulaire a [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]. Alors [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] L'aire représente la section triangulaire plane, utile pour les estimations de matériaux. Hypothèse : la section est modélisée en triangle rectangle ; la géométrie complète du toit peut différer." },
          { "kind": "h3", "text": "Exemple 5 : section de jardin en triangle rectangle" },
          { "kind": "p", "text": "Un jardin contient une section en triangle rectangle avec [[a=7\\text{ m}]], [[b=24\\text{ m}]]. Alors [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Le résultat aide à estimer la surface disponible pour la plantation ou la pelouse. Hypothèse : les limites du massif sont droites et se rencontrent à angle droit." },
          { "kind": "h3", "text": "Exemple 6 : voile triangulaire en toile" },
          { "kind": "p", "text": "Un panneau de toile en triangle rectangle a [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]. Alors [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Cela représente la section de toile triangulaire plane avant les coutures et les marges de matériau. Hypothèse : la voile est modélisée à plat ; les vraies voiles se courbent sous la charge." },
          { "kind": "h3", "text": "Exemple 7 : gabarit de découpe en contreplaqué" },
          { "kind": "p", "text": "Un gabarit en contreplaqué en triangle rectangle a [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]. Alors [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Le résultat aide à estimer les besoins en matériau avant les chutes de découpe. Hypothèse : le gabarit est un vrai triangle rectangle ; le trait de scie et les chutes sont en sus." },
          { "kind": "h3", "text": "Exemple 8 : panneau de signalisation triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation triangulaire a pour dimensions perpendiculaires [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]. Alors [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Cela représente la surface plane imprimable ou peinte. Hypothèse : la face du panneau est plane et en triangle rectangle ; le matériel de fixation est exclu." },
          { "kind": "h3", "text": "Exemple 9 : section de bornage" },
          { "kind": "p", "text": "Une section de terrain simplifiée en triangle rectangle a [[a=9\\text{ m}]], [[b=40\\text{ m}]]. Alors [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] La formule calcule l'aire de la section triangulaire bornée. Hypothèse : la section est modélisée avec un coin d'équerre ; un lot irrégulier doit être subdivisé en formes plus simples." },
          { "kind": "h3", "text": "Exemple 10 : support de store triangulaire" },
          { "kind": "p", "text": "Une section de support de store en triangle rectangle a [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]. Alors [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Le résultat représente la section triangulaire plane modélisée, pas nécessairement toute la surface d'un store irrégulier. Hypothèse : la géométrie du support est simplifiée en triangle rectangle." },
          { "kind": "h3", "text": "Exemple 11 : panneau de support industriel" },
          { "kind": "p", "text": "Un panneau industriel en triangle rectangle a [[a=11\\text{ m}]], [[b=60\\text{ m}]]. Alors [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] L'aire décrit le panneau géométrique plan plutôt que sa performance structurelle. Hypothèse : le panneau est modélisé en triangle rectangle ; l'épaisseur et les fixations sont des questions distinctes." },
          { "kind": "h3", "text": "Exemple 12 : section de pignon d'entrepôt" },
          { "kind": "p", "text": "Un entrepôt a une section de pignon simplifiée en triangle rectangle avec [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]. Alors [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Le résultat aide à estimer la surface plane du pignon triangulaire, par exemple pour chiffrer le bardage. Hypothèse : le pignon est modélisé en triangle rectangle." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": ["Application pratique", "Cathète a", "Cathète b", "Hypoténuse (facultatif)", "Aire calculée", "Unité de mesure"],
          "rows": [
            ["Fenêtre en verre", "3", "4", "5", "6", "m²"],
            ["Équerre en acier", "5", "12", "13", "30", "cm²"],
            ["Profil de rampe", "6", "8", "10", "24", "m²"],
            ["Support de toit", "8", "15", "17", "60", "ft²"],
            ["Section de jardin", "7", "24", "25", "84", "m²"],
            ["Voile en toile", "9", "12", "15", "54", "ft²"],
            ["Gabarit en contreplaqué", "12", "16", "20", "96", "cm²"],
            ["Panneau de signalisation", "20", "21", "29", "210", "cm²"],
            ["Section de bornage", "9", "40", "41", "180", "m²"],
            ["Support de store", "15", "20", "25", "150", "ft²"],
            ["Panneau industriel", "11", "60", "61", "330", "m²"],
            ["Pignon d'entrepôt", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "Quel est le lien entre le théorème de Pythagore et l'aire d'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Le théorème de Pythagore affirme [[[\\boxed{a^2+b^2=c^2}]]] : les cathètes [[a]] et [[b]] déterminent l'hypoténuse [[c]]. Il répond à une question sur les longueurs des côtés, tandis que la formule d'aire mesure la surface enfermée. Les deux sont liés mais résolvent des problèmes différents, et le calcul d'aire ici ne dépend jamais du théorème." },
          { "kind": "h3", "text": "Calculer l'hypoténuse à partir des deux cathètes" },
          { "kind": "p", "text": "Avec [[a=6]] et [[b=8]], l'hypoténuse est [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]] L'aire est ensuite calculée séparément : [[K=\\frac{6\\times8}{2}=24]]. L'hypoténuse est une information supplémentaire facultative pour ce calcul d'aire, un fait utile plutôt qu'une étape requise." },
          { "kind": "h3", "text": "Le théorème de Pythagore peut-il remplacer la formule d'aire ?" },
          { "kind": "p", "text": "Non. Le théorème de Pythagore détermine les relations entre les longueurs des côtés ; la formule d'aire convertit deux côtés perpendiculaires en surface enfermée. L'un répond à « quelle longueur », l'autre à « quelle surface ». Ils coopèrent : quand une seule cathète et l'hypoténuse sont connues, le théorème retrouve d'abord la cathète manquante, puis la formule d'aire prend le relais. Aucun ne remplace l'autre." },
          { "kind": "h3", "text": "Quand le théorème de Pythagore est-il utile ?" },
          { "kind": "p", "text": "Il trouve sa place quand un côté manque ou qu'une mesure doit être vérifiée : seule une cathète et l'hypoténuse sont connues, le côté manquant doit être trouvé avant l'étape d'aire, une hypoténuse calculée doit être vérifiée, ou une mesure de chantier doit être confirmée sur site. Pour un calcul de côté manquant dédié, le calculateur de côtés de triangle rectangle gère cette étape, et son résultat peut alimenter directement la formule d'aire des cathètes." }
        ]
      },
      "sec-missing-leg": {
        "h2": "Comment trouver une cathète manquante quand l'aire du triangle est connue",
        "blocks": [
          { "kind": "p", "text": "La formule d'aire se lit dans les deux sens. Partez de [[K=\\frac{ab}{2}]]. Multipliez les deux côtés par 2 : [[2K=ab]]. Divisez par [[a]] : [[[\\boxed{b=\\frac{2K}{a}}]]] De même, [[[\\boxed{a=\\frac{2K}{b}}]]] La même relation, réarrangée, retrouve la cathète inconnue." },
          { "kind": "h3", "text": "Exemple résolu" },
          { "kind": "p", "text": "Supposons [[K=24\\text{ cm}^2]] et [[a=6\\text{ cm}]]. Alors [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] Les unités restent cohérentes : des centimètres carrés divisés par des centimètres donnent des centimètres. Cette utilisation inversée est pratique pour vérifier une aire déclarée ou retrouver une dimension à partir de plans, mais notez qu'il s'agit d'un réarrangement pédagogique, pas d'un mode de saisie supplémentaire dans le calculateur ci-dessus, qui prend toujours les deux cathètes." }
        ]
      },
      "sec-scaling": {
        "h2": "Comment la modification des deux cathètes affecte-t-elle l'aire ?",
        "blocks": [
          { "kind": "p", "text": "Comme [[K=\\frac{ab}{2}]] est un produit, étirer les cathètes étire l'aire de manière prévisible. Les schémas ci-dessous valent la peine d'être connus avant de redimensionner toute conception triangulaire." },
          { "kind": "h3", "text": "Que se passe-t-il quand une cathète double ?" },
          { "kind": "p", "text": "Gardez [[a]] fixe et doublez [[b]]. Alors [[K_1=\\frac{ab}{2}]] devient [[K_2=\\frac{a(2b)}{2}]], donc [[[\\boxed{K_2=2K_1}]]] Doubler une seule cathète double l'aire. Un contrôle concret : le triangle de 3 par 4 a [[K=6]] ; étirer une cathète à 3 par 8 donne [[K=12]]." },
          { "kind": "h3", "text": "Que se passe-t-il quand les deux cathètes doublent ?" },
          { "kind": "p", "text": "Doublez maintenant les deux : [[K_2=\\frac{(2a)(2b)}{2}]], ce qui se simplifie en [[[\\boxed{K_2=4K_1}]]] Doubler les deux dimensions perpendiculaires rend l'aire quatre fois plus grande, pas deux fois. Le triangle de 3 par 4 ([[K=6]]) mis à l'échelle à 6 par 8 donne [[K=24]], exactement quatre fois l'original." },
          { "kind": "h3", "text": "Que se passe-t-il quand les deux cathètes sont mises à l'échelle ?" },
          { "kind": "p", "text": "Multipliez chaque cathète par un facteur d'échelle [[k]] : [[K_2=\\frac{(ka)(kb)}{2}]], donc [[[\\boxed{K_2=k^2K_1}]]] L'aire croît avec le carré du facteur d'échelle. Exemple concret : mettez le triangle de 6 par 8 à l'échelle 1.5 pour obtenir 9 par 12. Alors [[K=\\frac{9\\times12}{2}=54]], et [[24\\times1.5^2=24\\times2.25=54]]. C'est pourquoi les estimations de matériaux bondissent plus vite que les dimensions linéaires : doublez chaque longueur et il faut quatre fois plus de tôle." },
          { "kind": "h3", "text": "Deux triangles rectangles différents peuvent-ils avoir la même aire ?" },
          { "kind": "p", "text": "Oui. Comparez le triangle 1, [[a=3]], [[b=4]] : [[K=\\frac{3\\times4}{2}=6]]. Triangle 2, [[a=2]], [[b=6]] : [[K=\\frac{2\\times6}{2}=6]]. Des formes différentes enferment la même aire quand le produit de leurs cathètes est égal. Un triangle court et large et un triangle grand et étroit peuvent couvrir une surface identique, ce qui compte quand on ajuste des panneaux dans des espaces différents." }
        ],
        "imgAlt": "Deux triangles rectangles, 3 par 4 et 2 par 6, montrés côte à côte avec une aire égale de 6",
        "figcaption": "Des proportions différentes, une même aire : les deux triangles rectangles enferment 6 unités carrées."
      },
      "sec-general": {
        "h2": "Pourquoi ne peut-on pas utiliser la formule des deux cathètes pour tous les triangles ?",
        "blocks": [
          { "kind": "p", "text": "La formule [[K=\\frac{ab}{2}]] fonctionne parce que les deux cathètes sont perpendiculaires. Pour un triangle quelconque, deux longueurs de côtés seules ne suffisent pas : l'angle inclus entre eux, ou la hauteur correspondante, doit aussi être connu." },
          { "kind": "p", "text": "La règle générale est [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]], où [[C]] est l'angle inclus entre les côtés [[a]] et [[b]]. Pour un triangle rectangle, [[C=90^\\circ]] et [[\\sin(90^\\circ)=1]]. Donc [[K=\\frac{ab\\times1}{2}]], ce qui est [[[\\boxed{K=\\frac{ab}{2}}]]] La formule du triangle rectangle est la formule générale avec le facteur sinus égal à 1. Pour tout autre angle, le sinus rétrécit le produit, ce qui explique pourquoi la formule des cathètes ne doit jamais être appliquée à un triangle non rectangle : elle traite silencieusement [[\\sin(C)]] comme égal à 1 alors qu'il ne l'est pas." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités lors du calcul de l'aire d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Les deux cathètes doivent partager une unité de longueur avant d'appliquer la formule. L'unité carrée dans la réponse vient de la multiplication des deux unités de longueur, donc des unités cohérentes sont ce qui garde le nombre significatif." },
          { "kind": "h3", "text": "Pourquoi le résultat utilise des unités carrées" },
          { "kind": "p", "text": "L'aire compte les carrés unitaires couvrant la surface : [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. L'unité est toujours l'unité de longueur au carré, car le produit de deux longueurs est un comptage de carrés. Déclarer une aire de 24 m est une erreur de catégorie : 24 m est une longueur, tandis que 24 m² est une surface." },
          { "kind": "h3", "text": "Convertir des unités différentes avant de calculer" },
          { "kind": "p", "text": "Prenez [[a=3\\text{ ft}]] et [[b=24\\text{ inches}]]. Convertissez d'abord : [[24\\text{ inches}=2\\text{ ft}]]. Puis [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] Sans conversion, le produit brut 72 n'a pas de signification propre : il n'est ni en pieds carrés ni en pouces carrés. Convertissez d'abord, multipliez ensuite, et l'unité de la réponse suit automatiquement." },
          { "kind": "h3", "text": "Calculer avec des mesures décimales" },
          { "kind": "p", "text": "La même formule gère les décimales sans aucun changement. Donnés [[a=3.5]] et [[b=9.2]] : [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] Nombres entiers, décimales et mesures fines d'atelier passent tous par la même multiplication suivie d'une division par deux. Gardez les décimales que la mesure justifie et laissez le calculateur gérer l'arithmétique." },
          { "kind": "h3", "text": "Pourquoi éviter l'arrondi précoce" },
          { "kind": "p", "text": "Arrondissez les entrées et l'erreur se propage par la multiplication jusque dans la réponse. Une cathète mesurée à 9.2 ne devrait pas devenir 9 avant la multiplication ; les 0.2 perdus par unité s'accumulent dans le produit. Gardez la pleine précision dans les étapes intermédiaires et n'arrondissez que le résultat final, à la précision que les mesures justifient. La précision gardée tôt est l'exactitude livrée à la fin." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul de l'aire d'un triangle rectangle à partir des cathètes",
        "blocks": [
          { "kind": "p", "text": "Presque toute réponse fausse sur ce sujet remonte à une entrée mal étiquetée plutôt qu'à un mauvais calcul. Les quinze erreurs ci-dessous sont celles qui reviennent sans cesse, chacune avec sa cause et sa correction." },
          { "kind": "h3", "text": "1. Utiliser l'hypoténuse au lieu d'une des cathètes" },
          { "kind": "p", "text": "L'hypoténuse est le côté le plus long et ne forme jamais l'angle droit. L'entrer comme une cathète gonfle le produit : par exemple, traiter 10 comme une cathète avec 8 donne 40 au lieu de 24. Correction : trouvez d'abord l'angle droit ; les deux côtés qui le touchent sont les cathètes." },
          { "kind": "h3", "text": "2. Confondre les deux cathètes avec les autres côtés" },
          { "kind": "p", "text": "Dans un dessin incliné, n'importe quel côté peut sembler une base naturelle. Les étiquettes [[a]] et [[b]] appartiennent à la paire perpendiculaire uniquement. Correction : localisez le repère du coin d'équerre avant d'attribuer les étiquettes, quelle que soit la rotation du triangle." },
          { "kind": "h3", "text": "3. Oublier que les cathètes doivent former un angle de 90 degrés" },
          { "kind": "p", "text": "Le produit divisé par deux suppose la perpendicularité. Deux côtés se rencontrant à 80 ou 100 degrés exigent plutôt la formule générale du sinus. Correction : vérifiez que le coin est d'équerre avant d'utiliser [[K=\\frac{ab}{2}]]." },
          { "kind": "h3", "text": "4. Oublier de diviser par deux" },
          { "kind": "p", "text": "Le produit [[a\\times b]] seul est l'aire du rectangle englobant, le double de celle du triangle. Correction : divisez le produit par deux ; le /2 fait partie de la formule, il n'est pas facultatif." },
          { "kind": "h3", "text": "5. Calculer l'aire du rectangle au lieu de celle du triangle" },
          { "kind": "p", "text": "Quarante-huit est une aire valide pour le rectangle de 6 par 8, mais pas pour le triangle qu'il contient. Correction : demandez-vous quelle forme la question veut, puis appliquez la division par deux uniquement pour le triangle." },
          { "kind": "h3", "text": "6. Mélanger pieds et pouces" },
          { "kind": "p", "text": "Multiplier 3 ft par 24 in donne 72 de rien de propre. Correction : convertissez les deux en une unité (24 in = 2 ft) avant de calculer." },
          { "kind": "h3", "text": "7. Mélanger centimètres et mètres" },
          { "kind": "p", "text": "Le même piège à l'échelle métrique : 2 m par 30 cm doivent d'abord devenir une unité. Correction : convertissez (30 cm = 0.3 m), puis multipliez." },
          { "kind": "h3", "text": "8. Déclarer le résultat en unités linéaires" },
          { "kind": "p", "text": "Une aire de 24 m² n'est pas 24 m. Correction : écrivez l'unité au carré avec le nombre, à chaque fois." },
          { "kind": "h3", "text": "9. N'utiliser qu'une seule cathète" },
          { "kind": "p", "text": "Une cathète est une longueur, pas une aire ; la formule a besoin de la paire. Entrer une seule mesure ne répond à rien. Correction : mesurez les deux côtés perpendiculaires." },
          { "kind": "h3", "text": "10. Traiter deux côtés quelconques d'un triangle rectangle comme perpendiculaires" },
          { "kind": "p", "text": "Seules les cathètes sont perpendiculaires. Une paire cathète-plus-hypoténuse se rencontre à un angle aigu, donc leur produit divisé par deux n'est pas l'aire. Correction : vérifiez que les deux côtés choisis touchent l'angle droit." },
          { "kind": "h3", "text": "11. Utiliser des mesures négatives ou nulles" },
          { "kind": "p", "text": "Les longueurs sont positives. Zéro réduit le triangle à une ligne sans aire, et les longueurs négatives n'ont aucun sens géométrique ici. Correction : mesurez de nouveau ; rejetez les entrées non positives." },
          { "kind": "h3", "text": "12. Arrondir les entrées décimales trop tôt" },
          { "kind": "p", "text": "Arrondir 9.2 à 9 avant de multiplier déplace la réponse de 16.1 vers le bas. Correction : gardez la pleine précision pendant le calcul et n'arrondissez que le résultat final." },
          { "kind": "h3", "text": "13. Supposer que l'hypoténuse est requise" },
          { "kind": "p", "text": "Elle ne l'est pas. [[K=\\frac{ab}{2}]] n'utilise que les cathètes, et calculer d'abord l'hypoténuse ajoute une étape qui ne change rien. Correction : sautez-la sauf si un autre calcul en a besoin." },
          { "kind": "h3", "text": "14. Confondre périmètre et aire" },
          { "kind": "p", "text": "Le périmètre additionne les trois côtés ([[a+b+c]]) ; l'aire multiplie deux cathètes et divise par deux. Pour 6-8-10, le périmètre est 24 tandis que l'aire est aussi 24, une coïncidence qui cause une vraie confusion. Correction : vérifiez si la question demande la longueur du contour ou la surface enfermée." },
          { "kind": "h3", "text": "15. Appliquer la formule du triangle rectangle à un triangle non rectangle" },
          { "kind": "p", "text": "Sans coin à 90 degrés, le produit a besoin du sinus de l'angle inclus. Utiliser [[K=\\frac{ab}{2}]] sur un triangle quelconque surestime l'aire. Correction : utilisez [[K=\\frac{ab\\sin(C)}{2}]] avec l'angle inclus réel." },
          { "kind": "h3", "text": "Faux contre correct : un exemple concret" },
          { "kind": "p", "text": "Utilisez [[a=6]], [[b=8]]. Correct : [[K=\\frac{6\\times8}{2}=24]]. Oublier incorrectement de diviser par deux : [[6\\times8=48]], qui est l'aire du rectangle correspondant, pas du triangle rectangle. Utiliser incorrectement l'hypoténuse 10 comme si elle était une cathète perpendiculaire : [[K=\\frac{10\\times8}{2}=40]], faux parce que 10 n'est pas perpendiculaire à 8. L'arithmétique semble assurée dans les trois cas ; seule la géométrie les distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que votre aire de triangle rectangle est correcte",
        "blocks": [
          { "kind": "p", "text": "Six contrôles indépendants, tous démontrés sur le triangle 6-8-10 ([[a=6]], [[b=8]], [[c=10]], [[K=24]]). L'accord entre différentes routes est la preuve la plus forte qu'une réponse est juste, dans les devoirs comme dans la mesure pratique." },
          { "kind": "h3", "text": "Méthode 1 : recalculer avec la formule principale" },
          { "kind": "p", "text": "Relancez [[K=\\frac{ab}{2}]] à neuf : [[K=\\frac{6\\times8}{2}=24]]. Un second passage avec les nombres resaisis attrape les fautes de frappe et les chiffres mal entrés." },
          { "kind": "h3", "text": "Méthode 2 : doubler le triangle pour former un rectangle" },
          { "kind": "p", "text": "Le triangle doublé est un rectangle de 6 par 8 : [[K_{\\text{rectangle}}=6\\times8=48]], donc [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. Si l'aire doublée ne correspond pas à [[a\\times b]], le calcul a dérapé quelque part." },
          { "kind": "h3", "text": "Méthode 3 : vérifier l'hypoténuse avec le théorème de Pythagore" },
          { "kind": "p", "text": "Vérifiez [[c=\\sqrt{a^2+b^2}]] : [[c=\\sqrt{36+64}=10]]. Cela contrôle l'identification des côtés derrière l'aire ; une hypoténuse fausse signifie qu'un côté a été mal étiqueté." },
          { "kind": "h3", "text": "Méthode 4 : réarranger la formule d'aire" },
          { "kind": "p", "text": "Retrouvez une entrée connue à partir de la réponse : [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. Retrouver la cathète de départ boucle la boucle et confirme l'étape de division." },
          { "kind": "h3", "text": "Méthode 5 : vérifier les unités de mesure" },
          { "kind": "p", "text": "Les deux cathètes doivent utiliser la même unité de longueur, et la réponse doit utiliser cette unité au carré. Des unités mélangées ou une unité linéaire sur la réponse signalent une erreur de configuration avant même que les nombres soient revérifiés." },
          { "kind": "h3", "text": "Méthode 6 : estimer le résultat" },
          { "kind": "p", "text": "Arrondissez à des nombres amicaux : 6 par 8 est proche de 50, divisé par deux proche de 25. Une réponse de 24 se tient juste à côté de l'estimation ; une réponse de 240 ou 2.4 ne s'y tiendrait pas. L'estimation attrape les erreurs de virgule et de division que le recalcul exact peut répéter." }
        ]
      },
      "sec-applications": {
        "h2": "L'aire d'un triangle rectangle à partir de deux cathètes en pratique",
        "blocks": [
          { "kind": "p", "text": "Le même schéma à deux entrées apparaît partout où un coin d'équerre doit être mesuré. Un vitrier lit les deux bords perpendiculaires d'une fenêtre ; un chaudronnier mesure les cathètes d'une équerre brute ; un géomètre réduit un coin de lot à deux déports perpendiculaires. Dans chaque cas, l'hypoténuse est la mesure malcommode à prendre, et cette formule ne la demande jamais." },
          { "kind": "p", "text": "Les quatre panneaux ci-dessous montrent le schéma à différentes échelles. Une fenêtre en verre (6 m²) et une section de jardin (84 m²) utilisent la géométrie 3-4-5 et 7-24-25 à l'échelle du mètre ; un support de toit (60 ft²) utilise le triangle 8-15-17 ; une plaque d'acier (30 cm²) utilise 5-12-13. Chaque panneau étiquette les deux cathètes, le repère de l'angle droit et l'aire résultante, pour que le chemin de la mesure à la réponse reste visible." }
        ],
        "imgAlt": "Quatre panneaux : fenêtre en verre 6 m2, support de toit 60 ft2, section de jardin 84 m2, plaque d'acier 30 cm2",
        "figcaption": "Quatre usages réels : une fenêtre en verre, un support de toit, une section de jardin et une plaque d'acier avec leurs aires."
      },
      "sec-faq": {
        "h2": "Questions fréquentes",
        "blocks": [
          { "kind": "p", "text": "Vous trouverez ci-dessous les réponses aux questions les plus courantes sur le calcul de l'aire d'un triangle rectangle à partir de ses deux cathètes." }
        ]
      },
      "sec-related": {
        "h2": "Explorer les calculateurs de triangles rectangles associés",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes appellent des calculateurs différents." }
        ]
      },
      "sec-conclusion": {
        "h2": "Deux mesures, un produit divisé par deux",
        "blocks": [
          { "kind": "p", "text": "Deux longueurs perpendiculaires suffisent. Multipliez-les, divisez le produit par deux, et la surface enfermée est nommée. La preuve par le rectangle montre pourquoi la division par deux est exacte plutôt que conventionnelle, le théorème de Pythagore vérifie les côtés derrière la réponse, et la formule réarrangée retrouve une cathète manquante quand l'aire est déjà connue." },
          { "kind": "p", "text": "L'habitude de travail est simple : confirmez le coin à 90 degrés, faites correspondre les unités, gardez les décimales non arrondies jusqu'à la fin, et vérifiez par le rectangle. Avec ces habitudes, [[K=\\frac{ab}{2}]] est le calcul d'aire le plus fiable en géométrie." }
        ]
      }
    }
  },
  "de": {
    "faqs": [
      {
        "question": "Wie lautet die Formel für die Fläche eines rechtwinkligen Dreiecks aus seinen Katheten?",
        "answer": "K = ab/2, wobei a und b die beiden senkrechten Katheten sind. Multiplizieren Sie die Katheten und teilen Sie durch zwei. Für a = 6 und b = 8 gilt K = (6 × 8) / 2 = 24 Quadrateinheiten. Weder Hypotenuse noch Winkel noch eine andere Messung wird benötigt."
      },
      {
        "question": "Warum multipliziert man beide Katheten und teilt durch zwei?",
        "answer": "Die beiden Katheten bilden die Seiten eines umschließenden Rechtecks mit der Fläche a × b, und die Rechteckdiagonale schneidet es in zwei gleiche rechtwinklige Dreiecke. Jedes Dreieck besitzt die Hälfte des Rechtecks, sodass die Fläche das halbierte Produkt ist. Die Multiplikation baut das Rechteck; die Division schneidet es auf das Dreieck zurück."
      },
      {
        "question": "Brauche ich die Hypotenuse, um die Fläche zu berechnen?",
        "answer": "Nein. Die Fläche kommt allein aus den beiden Katheten über K = ab/2. Die Hypotenuse, c = √(a² + b²), ist nützlich, um Seitenbezeichnungen zu prüfen oder eine fehlende Seite zurückzugewinnen, aber sie geht nie in die Flächenberechnung selbst ein."
      },
      {
        "question": "Was ist der Unterschied zwischen einer Kathete und der Hypotenuse?",
        "answer": "Die Katheten sind die beiden Seiten, die sich im rechten Winkel treffen und senkrecht aufeinander stehen. Die Hypotenuse liegt gegenüber dem rechten Winkel und ist immer die längste Seite. Der Rechner nimmt die beiden Katheten als Eingaben; die Eingabe der Hypotenuse als Kathete erzeugt eine falsche Antwort."
      },
      {
        "question": "Kann ich die Kathete a und die Kathete b vertauschen?",
        "answer": "Ja. Die Multiplikation ist kommutativ, sodass (a × b) / 2 gleich (b × a) / 2 ist. Die Eingabe von 3 und 4 in beliebiger Reihenfolge ergibt 6. Die Bezeichnungen sind eine Bequemlichkeit, um über die Seiten zu sprechen, keine Einschränkung der Berechnung."
      },
      {
        "question": "Kann ich die Fläche mit dezimalen Kathetenmaßen berechnen?",
        "answer": "Ja. Für a = 3.5 und b = 9.2 gilt K = (3.5 × 9.2) / 2 = 16.1 Quadrateinheiten. Die Methode ist für ganze Zahlen und Dezimalzahlen identisch. Bewahren Sie die volle Genauigkeit während der Berechnung und runden Sie erst die Endantwort entsprechend der Messgenauigkeit."
      },
      {
        "question": "Was passiert, wenn die beiden Katheten unterschiedliche Einheiten verwenden?",
        "answer": "Rechnen Sie vor der Berechnung in eine Einheit um. Bei a = 3 ft und b = 24 Zoll rechnen Sie 24 Zoll in 2 ft um, dann K = (3 × 2) / 2 = 3 ft². Das Multiplizieren gemischter Einheiten ergibt eine Zahl ohne saubere Bedeutung, sodass der Umrechnungsschritt Pflicht ist."
      },
      {
        "question": "Kann ich eine fehlende Kathete finden, wenn ich die Fläche kenne?",
        "answer": "Ja, indem Sie die Formel zu b = 2K/a (oder a = 2K/b) umstellen. Bei K = 24 cm² und a = 6 cm gilt b = 48/6 = 8 cm. Dies ist dieselbe Beziehung rückwärts gelesen, kein separater Rechnermodus; der Rechner selbst nimmt weiterhin die beiden Katheten."
      },
      {
        "question": "Wie hängt der Satz des Pythagoras mit der Dreiecksfläche zusammen?",
        "answer": "Er verbindet die Seitenlängen über a² + b² = c², während die Flächenformel die eingeschlossene Oberfläche misst. Verwenden Sie den Satz, um eine fehlende Seite zu finden oder eine Hypotenuse zu verifizieren, und wenden Sie dann K = ab/2 an. Bei Katheten von 6 und 8 gilt c = 10, und die Fläche bleibt in jedem Fall 24."
      },
      {
        "question": "Funktioniert die Formel für nicht rechtwinklige Dreiecke?",
        "answer": "Nein. K = ab/2 setzt voraus, dass der eingeschlossene Winkel zwischen den Seiten 90 Grad beträgt. Für andere Dreiecke verwenden Sie K = ab sin(C)/2 mit dem tatsächlichen eingeschlossenen Winkel C. Die Anwendung der Kathetenformel auf ein nicht rechtwinkliges Dreieck behandelt sin(C) als 1, obwohl er es nicht ist, und übertreibt die Fläche."
      },
      {
        "question": "Warum wird die Antwort in Quadrateinheiten ausgedrückt?",
        "answer": "Die Fläche zählt die Einheitsquadrate, die die Oberfläche bedecken: cm × cm = cm², m × m = m², ft × ft = ft². Eine lineare Einheit wie 24 m beschreibt eine Länge, keine Oberfläche. Geben Sie die Quadrateinheit immer mit der Zahl an."
      },
      {
        "question": "Können zwei verschiedene rechtwinklige Dreiecke dieselbe Fläche haben?",
        "answer": "Ja, wann immer ihre Kathetenprodukte übereinstimmen. Ein 3-mal-4-Dreieck und ein 2-mal-6-Dreieck ergeben beide K = 6. Form und Fläche sind unabhängig: Gleiche Produkte bedeuten gleiche Flächen, sodass ein hohes, schmales Dreieck genau so viel Oberfläche einschließen kann wie ein kurzes, breites."
      }
    ],
    "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
    "relatedItems": [
      "Flächenrechner für rechtwinklige Dreiecke",
      "Flächenrechner für rechtwinklige Dreiecke aus Kathete und Winkel",
      "Flächenrechner für rechtwinklige Dreiecke aus Winkel",
      "Flächenrechner für rechtwinklige Dreiecke aus Halbumfang",
      "Seitenrechner für rechtwinklige Dreiecke",
      "Umfangsrechner für rechtwinklige Dreiecke"
    ],
    "relatedIntro": "Unterschiedliche Messungen erfordern unterschiedliche Rechner.",
    "faqHeading": "Häufig gestellte Fragen",
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "Wie man die Fläche eines rechtwinkligen Dreiecks aus seinen beiden Katheten berechnet",
      "sec-anatomy": "Was ist ein rechtwinkliges Dreieck?",
      "sec-base-height": "Warum sind die beiden Katheten Grundseite und Höhe?",
      "sec-formula": "Warum ist die Fläche eines rechtwinkligen Dreiecks die Hälfte des Produkts seiner Katheten?",
      "sec-howto": "Wie man den Flächenrechner für rechtwinklige Dreiecke aus Katheten verwendet",
      "sec-examples": "Schritt-für-Schritt-Beispiele zur Fläche eines rechtwinkligen Dreiecks aus zwei Katheten",
      "sec-practical": "Anwendungen der Fläche eines rechtwinkligen Dreiecks aus zwei Katheten im Alltag",
      "sec-pythagoras": "Wie hängt der Satz des Pythagoras mit der Fläche eines rechtwinkligen Dreiecks zusammen?",
      "sec-missing-leg": "Wie man eine fehlende Kathete findet, wenn die Dreiecksfläche bekannt ist",
      "sec-scaling": "Wie wirkt sich das Ändern der beiden Katheten auf die Fläche aus?",
      "sec-general": "Warum kann man die Zwei-Katheten-Formel nicht für jedes Dreieck verwenden?",
      "sec-units": "Einheiten bei der Flächenberechnung eines rechtwinkligen Dreiecks verstehen",
      "sec-mistakes": "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus Katheten",
      "sec-verify": "Wie man prüft, ob die Fläche eines rechtwinkligen Dreiecks korrekt ist",
      "sec-applications": "Die Fläche eines rechtwinkligen Dreiecks aus zwei Katheten in der Praxis",
      "sec-faq": "Häufig gestellte Fragen",
      "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "sec-conclusion": "Zwei Messungen, ein halbiertes Produkt"
    },
    "sections": {
      "sec-intro": {
        "h2": "Wie man die Fläche eines rechtwinkligen Dreiecks aus seinen beiden Katheten berechnet",
        "blocks": [
          { "kind": "p", "text": "Nehmen Sie [[a=6]], [[b=8]]. Wenden Sie [[K=\\frac{6\\times8}{2}]] an: [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Das Ergebnis benennt die gesamte flache Oberfläche, die von den drei Seiten eingeschlossen wird: vierundzwanzig Quadrateinheiten. Genau das gibt der Flächenrechner für rechtwinklige Dreiecke aus Katheten für diese beiden Eingaben zurück." },
          { "kind": "p", "text": "Der Rechner braucht nur die beiden Katheten, also die Seiten, die sich im rechten Winkel treffen. Da diese beiden Seiten senkrecht aufeinander stehen, dient die eine als Grundseite und die andere als Höhe, sodass keine weitere Messung nötig ist. Die Hypotenuse spielt hier keine Rolle. Multiplizieren Sie die Katheten, halbieren Sie das Produkt, und die Fläche folgt aus [[K=\\frac{ab}{2}]]." },
          { "kind": "p", "text": "Dies ist eine der einfachsten Flächenberechnungen der Geometrie, weil beide senkrechten Messungen bereits vorliegen. Sie taucht überall dort auf, wo eine Ecke rechtwinklig ist: Baugrundrisse, Zuschnittpläne, Gartenbeete und Vermessungsskizzen laufen alle auf zwei Katheten und ein halbiertes Produkt hinaus." }
        ]
      },
      "sec-anatomy": {
        "h2": "Was ist ein rechtwinkliges Dreieck?",
        "blocks": [
          { "kind": "p", "text": "Bevor die Formel Sinn ergibt, müssen die Bezeichnungen exakt sein. Jedes Symbol unten erscheint im Rechner, und jedes trägt eine einzige, feste Bedeutung." },
          { "kind": "h3", "text": "Definition eines rechtwinkligen Dreiecks" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein dreiseitiges Vieleck mit genau einem Innenwinkel von 90 Grad. Es hat drei Ecken, drei Seiten und drei Innenwinkel, die sich zu 180 Grad summieren. Der rechte Winkel wird gewöhnlich mit einem kleinen Quadrat an der Ecke markiert. Die beiden Seiten, die diese Ecke bilden, sind die Katheten; die gegenüberliegende Seite ist die Hypotenuse. Da [[C=90^\\circ]] gilt, folgt [[[\\boxed{A+B=90^\\circ}]]] : Die beiden spitzen Winkel sind komplementär, sodass die Kenntnis des einen den anderen bestimmt." },
          { "kind": "h3", "text": "Was sind die beiden Katheten eines rechtwinkligen Dreiecks?" },
          { "kind": "p", "text": "Die Katheten sind die beiden Seiten, die sich im rechten Winkel treffen. Die Kathete [[a]] liegt dem Winkel [[A]] gegenüber; die Kathete [[b]] liegt dem Winkel [[B]] gegenüber. Ihre bestimmende Eigenschaft ist die Senkrechtheit: [[a\\perp b]]. Diese einzige Tatsache macht die Flächenberechnung so direkt, weil ein senkrechtes Paar bereits eine Grundseite und eine Höhe liefert, ganz ohne zusätzliche Konstruktion." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die Seite gegenüber dem 90-Grad-Winkel. Sie ist immer die längste Seite des Dreiecks und bildet selbst nie den rechten Winkel; sie spannt sich ihm gegenüber. Sie wird in der kathetenbasierten Flächenformel nicht benötigt. Nützlich wird sie, wenn eine Seite fehlt, denn [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] gewinnt sie über den Satz des Pythagoras zurück, aber der Flächenrechner fragt nie danach." },
          { "kind": "h3", "text": "Warum stehen die beiden Katheten senkrecht aufeinander?" },
          { "kind": "p", "text": "Senkrecht bedeutet, sich in genau 90 Grad zu treffen. Die Katheten teilen sich die Ecke des rechten Winkels, sodass die Ecke zwischen ihnen per Definition rechtwinklig ist. Das ist wichtig, weil die Fläche eine Grundseite mal eine senkrechte Höhe braucht. In einem rechtwinkligen Dreieck ist dieses Paar bereits gezeichnet: keine Höhe abzutragen, keine zusätzliche Linie zu konstruieren. Das Dreieck liefert beide Messungen direkt." },
          { "kind": "h3", "text": "Können die Katheten vertauscht werden?" },
          { "kind": "p", "text": "Ja. Da [[a\\times b=b\\times a]] gilt, folgt [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]. Eine konkrete Prüfung: [[\\frac{3\\times4}{2}=6]] und [[\\frac{4\\times3}{2}=6]]. Die Umbenennung, welche Kathete [[a]] und welche [[b]] heißt, ändert nichts am Dreieck oder seiner Fläche. Geben Sie die beiden Messungen in ein beliebiges Eingabefeld ein; der Rechner liefert dasselbe Ergebnis." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck ABC: rechter Winkel bei C, hervorgehobene Katheten a und b, Hypotenuse c, Formel K = ab/2",
        "figcaption": "Dreieck ABC: Die hervorgehobenen Katheten a und b sind die beiden Messungen, die der Rechner braucht."
      },
      "sec-base-height": {
        "h2": "Warum sind die beiden Katheten Grundseite und Höhe?",
        "blocks": [
          { "kind": "p", "text": "Die ganze Methode ruht auf einer geometrischen Tatsache: In einem rechtwinkligen Dreieck sind die Grundseite und die senkrechte Höhe bereits als die beiden Katheten gezeichnet. Zu verstehen, warum, verwandelt die Formel von einer auswendig gelernten Regel in etwas Selbstverständliches." },
          { "kind": "h3", "text": "Was ist die Grundseite eines Dreiecks?" },
          { "kind": "p", "text": "Die Grundseite ist die Seite, die als Bezug für die Flächenberechnung gewählt wird. Jede Seite eines Dreiecks kann als Grundseite dienen. Bei einem rechtwinkligen Dreieck ist die Wahl einer Kathete als Grundseite natürlich, weil die andere Kathete bereits senkrecht darauf steht. Die Wahl ist eine Bequemlichkeit: Wählen Sie eine Kathete als Grundseite, und die Geometrie des rechten Winkels erledigt den Rest." },
          { "kind": "h3", "text": "Was ist die senkrechte Höhe?" },
          { "kind": "p", "text": "Die Höhe ist der kürzeste Abstand von der Grundseite zum gegenüberliegenden Eckpunkt, rechtwinklig zur Grundseite gemessen. Wenn die Grundseite die Kathete [[a]] ist, ist der gegenüberliegende Eckpunkt das ferne Ende der Kathete [[b]], und die Kathete [[b]] selbst ist dieser senkrechte Abstand. Nichts muss über das Dreieck hinaus gezeichnet oder gemessen werden; die Höhe ist eine Seite, keine Konstruktion." },
          { "kind": "h3", "text": "Warum ist die Senkrechtheit wichtig?" },
          { "kind": "p", "text": "Das Multiplizieren zweier Seitenlängen ergibt nur dann ein Grundseite-mal-Höhe-Produkt, wenn die Seiten senkrecht aufeinander stehen. Eine schräge Seite zusammen mit einer Grundseite misst eine längere Diagonale, nicht die senkrechte Höhe, sodass das Produkt über das wahre Grundseite-Höhe-Rechteck hinausschießt. Die Katheten eines rechtwinkligen Dreiecks stehen per Definition senkrecht aufeinander, und genau deshalb ist ihr Produkt der richtige Ausgangspunkt. Dieser Rechner verlangt die beiden Seiten, die den rechten Winkel bilden; jede andere Paarung bricht die Logik, von der die Formel abhängt." },
          { "kind": "h3", "text": "Kann die Hypotenuse als Grundseite dienen?" },
          { "kind": "p", "text": "Ein Dreieck kann jede Seite als Grundseite verwenden, auch die Hypotenuse, aber die Höhe muss dann der senkrechte Abstand vom gegenüberliegenden Eckpunkt zu dieser Seite sein. Dieser Abstand ist keine der Katheten, und dieser Rechner misst ihn nicht. Die Hypotenuse kann in [[K=\\frac{ab}{2}]] nicht einfach eine Kathete ersetzen; das würde eine andere, falsche Größe berechnen. Dieser Rechner ist nur für die beiden senkrechten Katheten gebaut." }
        ]
      },
      "sec-formula": {
        "h2": "Warum ist die Fläche eines rechtwinkligen Dreiecks die Hälfte des Produkts seiner Katheten?",
        "blocks": [
          { "kind": "p", "text": "Beginnen Sie mit der allgemeinen Regel: [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Für ein rechtwinkliges Dreieck setzen Sie [[\\text{Base}=a]] und [[\\text{Height}=b]]. Da die beiden Katheten senkrecht aufeinander stehen, gilt [[[\\boxed{K=\\frac{a\\times b}{2}}]]] Der Rest dieses Abschnitts zeigt, woher die Halbierung kommt, damit die Division durch zwei verstanden und nicht nur gemerkt wird." },
          { "kind": "h3", "text": "Die Rechteckmethode verstehen" },
          { "kind": "p", "text": "Zeichnen Sie ein Rechteck mit der Breite [[a]] und der Höhe [[b]]. Seine Fläche ist [[K_{\\text{rectangle}}=a\\times b]]. Zeichnen Sie nun eine Diagonale von einer Ecke zur gegenüberliegenden Ecke. Die Diagonale schneidet das Rechteck in zwei Dreiecke, die exakte Kopien voneinander sind, jedes mit den Katheten [[a]] und [[b]] und einem rechten Winkel dort, wo die Rechteckecke war. Beide Dreiecke haben gleiche Fläche, sodass jedes die Hälfte des Rechtecks besitzt: [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "Warum bilden zwei gleiche rechtwinklige Dreiecke ein Rechteck?" },
          { "kind": "p", "text": "Legen Sie zwei Kopien des Dreiecks so, dass sich ihre Hypotenusen treffen. Die passenden Katheten liegen aneinander: [[a]] gegen [[a]], [[b]] gegen [[b]]. Da die spitzen Winkel eines rechtwinkligen Dreiecks komplementär sind ([[A+B=90^\\circ]]), summieren sich die Winkel, die sich an jeder Ecke der zusammengesetzten Figur treffen, rundherum zu 90 Grad. Das Ergebnis hat vier rechte Winkel und gleiche gegenüberliegende Seiten: ein Rechteck. Seine Seiten sind genau die beiden Katheten, weshalb die Rechteckfläche [[a\\times b]] beträgt und jedes Dreieck die Hälfte besitzt." },
          { "kind": "h3", "text": "Warum ist die Division durch zwei nötig?" },
          { "kind": "p", "text": "Nehmen Sie das 6-mal-8-Rechteck. Seine Fläche ist [[K=6\\times8=48]]. Jedes der beiden gleichen rechtwinkligen Dreiecke belegt die Hälfte: [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] Das Auslassen der Division beantwortet eine andere Frage: die Rechteckfläche, nicht die Dreiecksfläche. Die Division durch zwei ist kein Korrekturfaktor; sie ist der Schritt, der das umschließende Rechteck auf das Dreieck zurückschneidet." },
          { "kind": "h3", "text": "Geometrischer Beweis mit Koordinaten" },
          { "kind": "p", "text": "Für Leser, die mit Koordinaten vertraut sind, hier dasselbe Ergebnis aus der Algebra. Legen Sie die Ecke des rechten Winkels in den Ursprung und seien die Ecken [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]. Das Dreieck ist der Bereich, der von den beiden Koordinatenachsen und der Linie begrenzt wird, die [[A]] mit [[B]] verbindet. Die Grundseite entlang der x-Achse hat die Länge [[a]], die senkrechte Seite hat die Länge [[b]], und das eingeschlossene rechtwinklige Dreieck füllt genau die Hälfte des [[a]]-mal-[[b]]-Rechtecks aus, das diese Achsen markieren. Also [[[\\boxed{K=\\frac{ab}{2}}]]], dieselbe Formel, erreicht ohne neue Maschinerie." }
        ],
        "imgAlt": "Rechteck von a mal b, durch eine Diagonale in zwei gleiche rechtwinklige Dreiecke geteilt, jedes mit Fläche ab/2",
        "figcaption": "Ein Rechteck der Breite a und Höhe b, entlang seiner Diagonale in zwei gleiche rechtwinklige Dreiecke geschnitten."
      },
      "sec-howto": {
        "h2": "Wie man den Flächenrechner für rechtwinklige Dreiecke aus Katheten verwendet",
        "blocks": [
          { "kind": "p", "text": "Der Rechner braucht genau zwei Eingaben, in Reihenfolge eingegeben. Die folgenden Schritte folgen dem Bildschirmaufbau von der Identifizierung der Messungen bis zum geprüften Ergebnis." }
        ],
        "steps": [
          "<strong>Identifizieren Sie die beiden Seiten, die sich im 90-Grad-Winkel treffen.</strong> Das sind die Katheten; die Rechtwinkelmarkierung zeigt, wo sie zusammentreffen.",
          "<strong>Bestätigen Sie, dass keine der gewählten Messungen die Hypotenuse ist.</strong> Die Hypotenuse ist die längste Seite, gegenüber dem rechten Winkel.",
          "<strong>Messen Sie die erste Kathete.</strong> Verwenden Sie ein Maßband, ein Lineal oder einen Zeichnungsmaßstab, der zum Objekt passt.",
          "<strong>Messen Sie die zweite Kathete.</strong> Messen Sie entlang der Seite selbst, von Ecke zu Ecke.",
          "<strong>Stellen Sie sicher, dass beide Messungen kompatible Einheiten verwenden.</strong> Meter mit Metern, Fuß mit Fuß, niemals gemischt.",
          "<strong>Geben Sie die Kathete a in das erste Eingabefeld ein.</strong> Jede Kathete kann zuerst kommen; die Bezeichnungen sind austauschbar.",
          "<strong>Geben Sie die Kathete b in das zweite Eingabefeld ein.</strong> Das ist die andere senkrechte Seite.",
          "<strong>Wählen Sie die passenden Maßeinheiten.</strong> Passen Sie die Einheit an das an, was tatsächlich gemessen wurde.",
          "<strong>Klicken Sie auf Calculate Area.</strong> Das Ergebnis erscheint mit der gezeigten Einsetzung.",
          "<strong>Prüfen Sie das berechnete Ergebnis.</strong> Lesen Sie die Fläche und bestätigen Sie, dass sie plausibel aussieht.",
          "<strong>Prüfen Sie die mathematische Schritt-für-Schritt-Lösung.</strong> Sie zeigt die Formel, die Einsetzung und die Arithmetik.",
          "<strong>Verwenden Sie das Dreiecksdiagramm, um die Seitenbezeichnungen zu prüfen.</strong> Bestätigen Sie, dass a und b auf den senkrechten Seiten sitzen.",
          "<strong>Bestätigen Sie, dass das Ergebnis in Quadrateinheiten ausgedrückt ist.</strong> Längeneinheiten zum Quadrat, passend zu den Eingaben.",
          "<strong>Klicken Sie auf Reset, wenn Sie eine neue Berechnung beginnen.</strong> Es löscht beide Felder für einen sauberen Start."
        ],
        "closingParagraphs": [
          "Der Rechner hat genau zwei Eingaben, die Kathete [[a]] und die Kathete [[b]]. Es gibt keine weiteren Modi und keine versteckten Felder; jede Fläche auf dieser Seite kommt aus [[K=\\frac{ab}{2}]]."
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zur Fläche eines rechtwinkligen Dreiecks aus zwei Katheten",
        "blocks": [
          { "kind": "p", "text": "Vier klassische rechtwinklige Dreiecke zeigen die Methode in wachsenden Größen. Jedes Beispiel setzt in die Formel ein, und die Hypotenuse erscheint nur als optionale Prüfung, niemals als Eingabe." },
          { "kind": "h3", "text": "Beispiel 1: rechtwinkliges 3-4-5-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]]. Schritt 1: Schreiben Sie die Formel auf, [[K=\\frac{a\\times b}{2}]]. Schritt 2: Setzen Sie ein, [[K=\\frac{3\\times4}{2}]]. Schritt 3: Multiplizieren Sie, [[K=\\frac{12}{2}]]. Endantwort: [[[\\boxed{K=6\\text{ square units}}]]] Optionale Prüfung: [[c=\\sqrt{3^2+4^2}=5]]. Die Hypotenuse bestätigt das vertraute Tripel, spielt aber bei der Fläche keine Rolle." },
          { "kind": "h3", "text": "Beispiel 2: rechtwinkliges 6-8-10-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=6]], [[b=8]]. Dann [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Rechteckprüfung: Das umschließende 6-mal-8-Rechteck hat die Fläche 48, und das Dreieck besitzt genau die Hälfte davon." },
          { "kind": "h3", "text": "Beispiel 3: rechtwinkliges 5-12-13-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5]], [[b=12]]. Dann [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Die Hypotenuse von 13 geht nie in die Berechnung ein; sie würde nur zählen, wenn eine Seite fehlte." },
          { "kind": "h3", "text": "Beispiel 4: rechtwinkliges 8-15-17-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=8]], [[b=15]]. Dann [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Dieselben drei Schritte, größere Zahlen, identische Logik." },
          { "kind": "h3", "text": "Vergleich der Grundlagenbeispiele" }
        ],
        "table": {
          "headers": ["Dreieck", "Kathete a", "Kathete b", "Hypotenuse (nur Prüfung)", "Berechnete Fläche"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Anwendungen der Fläche eines rechtwinkligen Dreiecks aus zwei Katheten im Alltag",
        "blocks": [
          { "kind": "p", "text": "Zwölf durchgerechnete Situationen tragen die Formel von der Seite in die Werkstatt, auf die Baustelle und ins Studio. Jede benennt ein rechtwinklig-dreieckiges Paneel, einen Abschnitt, ein Profil oder ein vereinfachtes Modell, arbeitet die beiden Rechnereingaben durch die Formel und nennt die Annahme hinter den Zahlen. Wo das echte Objekt gekrümmt oder unregelmäßig ist, deckt die Berechnung nur das modellierte Dreieck ab, und die Fläche steht niemals allein für Festigkeit, Kosten oder Sicherheit." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiges Glasfenster" },
          { "kind": "p", "text": "Ein dreieckiges Glasfenster hat die senkrechten Maße [[a=3\\text{ m}]], [[b=4\\text{ m}]]. Einsetzen: [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Das Ergebnis stellt die flache Glasoberfläche dar, bevor die Rahmenmaße abgezogen werden. Annahme: Die Scheibe ist ein echtes rechtwinkliges Dreieck; die Rahmenzugabe wird separat behandelt." },
          { "kind": "h3", "text": "Beispiel 2: Stahlwinkelträger" },
          { "kind": "p", "text": "Ein dreieckiger Stahlwinkelträger hat [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]. Dann [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Die Fläche beschreibt die flache Platte und bestimmt nicht ihre Tragfähigkeit. Annahme: Der Winkelrohling ist als rechtwinkliges Dreieck geschnitten; Bohrlöcher und Biegungen sind ausgenommen." },
          { "kind": "h3", "text": "Beispiel 3: Dreieckiges Rampenseitenprofil" },
          { "kind": "p", "text": "Ein vereinfachtes Rampenseitenprofil hat [[a=6\\text{ m}]], [[b=8\\text{ m}]]. Dann [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Dies ist das senkrechte dreieckige Seitenprofil, nicht die schräge Lauffläche. Annahme: Das Profil wird mit einer rechtwinkligen Ecke an der Basis modelliert." },
          { "kind": "h3", "text": "Beispiel 4: Dreieckiger Dachträger" },
          { "kind": "p", "text": "Ein dreieckiger Dachträgerabschnitt hat [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]. Dann [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Die Fläche stellt den flachen dreieckigen Abschnitt dar, nützlich für Materialschätzungen. Annahme: Der Abschnitt wird als rechtwinkliges Dreieck modelliert; die volle Dachgeometrie kann abweichen." },
          { "kind": "h3", "text": "Beispiel 5: Rechtwinklig-dreieckiger Gartenabschnitt" },
          { "kind": "p", "text": "Ein Garten enthält einen rechtwinklig-dreieckigen Abschnitt mit [[a=7\\text{ m}]], [[b=24\\text{ m}]]. Dann [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Das Ergebnis hilft, die für Bepflanzung oder Rasen verfügbare Fläche zu schätzen. Annahme: Die Beetgrenzen sind gerade und treffen sich im rechten Winkel." },
          { "kind": "h3", "text": "Beispiel 6: Dreieckiges Stoffsegel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Stoffpaneel hat [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]. Dann [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Dies stellt den flachen dreieckigen Stoffabschnitt dar, vor Nähten und Materialzugaben. Annahme: Das Segel wird flach modelliert; echte Segel wölben sich unter Last." },
          { "kind": "h3", "text": "Beispiel 7: Sperrholz-Schneidschablone" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Sperrholzschablone hat [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]. Dann [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Das Ergebnis hilft, den Materialbedarf vor dem Verschnitt zu schätzen. Annahme: Die Schablone ist ein echtes rechtwinkliges Dreieck; Sägeschnitt und Abschnitte kommen hinzu." },
          { "kind": "h3", "text": "Beispiel 8: Dreieckiges Schildpaneel" },
          { "kind": "p", "text": "Ein dreieckiges Schildpaneel hat die senkrechten Maße [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]. Dann [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Dies stellt die flache bedruckbare oder lackierte Fläche dar. Annahme: Die Paneelfläche ist flach und rechtwinklig-dreieckig; Montagematerial ist ausgenommen." },
          { "kind": "h3", "text": "Beispiel 9: Vermessungsabschnitt" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinklig-dreieckiger Grundstücksabschnitt hat [[a=9\\text{ m}]], [[b=40\\text{ m}]]. Dann [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Die Formel berechnet die Fläche des vermessenen dreieckigen Abschnitts. Annahme: Der Abschnitt wird mit einer rechtwinkligen Ecke modelliert; ein unregelmäßiges Grundstück muss in einfachere Formen unterteilt werden." },
          { "kind": "h3", "text": "Beispiel 10: Dreieckiger Markisenhalter" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Markisenhalterabschnitt hat [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]. Dann [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Das Ergebnis stellt den modellierten flachen dreieckigen Abschnitt dar, nicht unbedingt die volle Oberfläche einer unregelmäßigen Markise. Annahme: Die Haltergeometrie ist zu einem rechtwinkligen Dreieck vereinfacht." },
          { "kind": "h3", "text": "Beispiel 11: Industrielles Trägerpaneel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Industriepaneel hat [[a=11\\text{ m}]], [[b=60\\text{ m}]]. Dann [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Die Fläche beschreibt das flache geometrische Paneel, nicht seine strukturelle Leistung. Annahme: Das Paneel wird als rechtwinkliges Dreieck modelliert; Dicke und Befestigungen sind separate Fragen." },
          { "kind": "h3", "text": "Beispiel 12: Lagerhallen-Giebelabschnitt" },
          { "kind": "p", "text": "Eine Lagerhalle hat einen vereinfachten rechtwinklig-dreieckigen Giebelabschnitt mit [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]. Dann [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Das Ergebnis hilft, die flache dreieckige Giebelfläche zu schätzen, etwa bei der Preisberechnung für Verkleidungen. Annahme: Der Giebel wird als rechtwinkliges Dreieck modelliert." },
          { "kind": "h3", "text": "Vergleich der Praxisbeispiele" }
        ],
        "table": {
          "headers": ["Praktische Anwendung", "Kathete a", "Kathete b", "Hypotenuse (optional)", "Berechnete Fläche", "Maßeinheit"],
          "rows": [
            ["Glasfenster", "3", "4", "5", "6", "m²"],
            ["Stahlwinkel", "5", "12", "13", "30", "cm²"],
            ["Rampenprofil", "6", "8", "10", "24", "m²"],
            ["Dachträger", "8", "15", "17", "60", "ft²"],
            ["Gartenabschnitt", "7", "24", "25", "84", "m²"],
            ["Stoffsegel", "9", "12", "15", "54", "ft²"],
            ["Sperrholzschablone", "12", "16", "20", "96", "cm²"],
            ["Schildpaneel", "20", "21", "29", "210", "cm²"],
            ["Vermessungsabschnitt", "9", "40", "41", "180", "m²"],
            ["Markisenhalter", "15", "20", "25", "150", "ft²"],
            ["Industriepaneel", "11", "60", "61", "330", "m²"],
            ["Lagerhallengiebel", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "Wie hängt der Satz des Pythagoras mit der Fläche eines rechtwinkligen Dreiecks zusammen?",
        "blocks": [
          { "kind": "p", "text": "Der Satz des Pythagoras besagt [[[\\boxed{a^2+b^2=c^2}]]] : Die Katheten [[a]] und [[b]] bestimmen die Hypotenuse [[c]]. Er beantwortet eine Frage über Seitenlängen, während die Flächenformel die eingeschlossene Oberfläche misst. Die beiden hängen zusammen, lösen aber unterschiedliche Probleme, und die Flächenberechnung hier hängt niemals vom Satz ab." },
          { "kind": "h3", "text": "Die Hypotenuse aus beiden Katheten berechnen" },
          { "kind": "p", "text": "Mit [[a=6]] und [[b=8]] ist die Hypotenuse [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]] Die Fläche wird dann separat berechnet: [[K=\\frac{6\\times8}{2}=24]]. Die Hypotenuse ist eine optionale Zusatzinformation für diese Flächenberechnung, ein nützlicher Fakt und kein erforderlicher Schritt." },
          { "kind": "h3", "text": "Kann der Satz des Pythagoras die Flächenformel ersetzen?" },
          { "kind": "p", "text": "Nein. Der Satz des Pythagoras bestimmt Beziehungen zwischen Seitenlängen; die Flächenformel wandelt zwei senkrechte Seiten in eingeschlossene Oberfläche um. Der eine beantwortet, wie lang, der andere, wie viel Oberfläche. Sie arbeiten zusammen: Wenn nur eine Kathete und die Hypotenuse bekannt sind, gewinnt der Satz zuerst die fehlende Kathete zurück, und dann übernimmt die Flächenformel. Keiner ersetzt den anderen." },
          { "kind": "h3", "text": "Wann ist der Satz des Pythagoras nützlich?" },
          { "kind": "p", "text": "Er verdient seinen Platz, wenn eine Seite fehlt oder eine Messung geprüft werden muss: Es sind nur eine Kathete und die Hypotenuse bekannt, die fehlende Seite muss vor dem Flächenschritt gefunden werden, eine berechnete Hypotenuse muss verifiziert werden oder eine Baustellenmessung muss vor Ort bestätigt werden. Für eine eigene Fehlseitenberechnung erledigt der Seitenrechner für rechtwinklige Dreiecke diesen Schritt, und sein Ergebnis kann direkt zurück in die Kathetenflächenformel fließen." }
        ]
      },
      "sec-missing-leg": {
        "h2": "Wie man eine fehlende Kathete findet, wenn die Dreiecksfläche bekannt ist",
        "blocks": [
          { "kind": "p", "text": "Die Flächenformel liest sich in beide Richtungen. Beginnen Sie mit [[K=\\frac{ab}{2}]]. Multiplizieren Sie beide Seiten mit 2: [[2K=ab]]. Dividieren Sie durch [[a]]: [[[\\boxed{b=\\frac{2K}{a}}]]] Ebenso [[[\\boxed{a=\\frac{2K}{b}}]]] Dieselbe Beziehung, umgestellt, gewinnt die unbekannte Kathete zurück." },
          { "kind": "h3", "text": "Durchgerechnetes Beispiel" },
          { "kind": "p", "text": "Angenommen [[K=24\\text{ cm}^2]] und [[a=6\\text{ cm}]]. Dann [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] Die Einheiten bleiben konsistent: Quadratzentimeter geteilt durch Zentimeter ergeben Zentimeter. Diese umgekehrte Verwendung ist praktisch, um eine angegebene Fläche zu prüfen oder eine Abmessung aus Plänen zurückzugewinnen, aber beachten Sie, dass es sich um eine didaktische Umstellung handelt, nicht um einen zusätzlichen Eingabemodus im obigen Rechner, der weiterhin die beiden Katheten entgegennimmt." }
        ]
      },
      "sec-scaling": {
        "h2": "Wie wirkt sich das Ändern der beiden Katheten auf die Fläche aus?",
        "blocks": [
          { "kind": "p", "text": "Da [[K=\\frac{ab}{2}]] ein Produkt ist, dehnt das Strecken der Katheten die Fläche auf vorhersehbare Weise. Die folgenden Muster lohnt es sich zu kennen, bevor man ein dreieckiges Design skaliert." },
          { "kind": "h3", "text": "Was passiert, wenn sich eine Kathete verdoppelt?" },
          { "kind": "p", "text": "Halten Sie [[a]] fest und verdoppeln Sie [[b]]. Dann wird [[K_1=\\frac{ab}{2}]] zu [[K_2=\\frac{a(2b)}{2}]], also [[[\\boxed{K_2=2K_1}]]] Die Verdopplung nur einer Kathete verdoppelt die Fläche. Eine konkrete Prüfung: Das 3-mal-4-Dreieck hat [[K=6]]; das Strecken einer Kathete auf 3 mal 8 ergibt [[K=12]]." },
          { "kind": "h3", "text": "Was passiert, wenn sich beide Katheten verdoppeln?" },
          { "kind": "p", "text": "Verdoppeln Sie nun beide: [[K_2=\\frac{(2a)(2b)}{2}]], was sich zu [[[\\boxed{K_2=4K_1}]]] vereinfacht. Die Verdopplung beider senkrechter Abmessungen macht die Fläche viermal so groß, nicht zweimal. Das 3-mal-4-Dreieck ([[K=6]]), skaliert auf 6 mal 8, ergibt [[K=24]], genau viermal das Original." },
          { "kind": "h3", "text": "Was passiert, wenn beide Katheten skaliert werden?" },
          { "kind": "p", "text": "Multiplizieren Sie jede Kathete mit einem Skalierungsfaktor [[k]]: [[K_2=\\frac{(ka)(kb)}{2}]], daher [[[\\boxed{K_2=k^2K_1}]]] Die Fläche wächst mit dem Quadrat des Skalierungsfaktors. Praktisches Beispiel: Skalieren Sie das 6-mal-8-Dreieck mit 1.5 auf 9 mal 12. Dann [[K=\\frac{9\\times12}{2}=54]], und [[24\\times1.5^2=24\\times2.25=54]]. Darum springen Materialschätzungen schneller als lineare Maße: Verdoppeln Sie jede Länge, und es wird viermal so viel Blech gebraucht." },
          { "kind": "h3", "text": "Können zwei verschiedene rechtwinklige Dreiecke dieselbe Fläche haben?" },
          { "kind": "p", "text": "Ja. Vergleichen Sie Dreieck 1, [[a=3]], [[b=4]]: [[K=\\frac{3\\times4}{2}=6]]. Dreieck 2, [[a=2]], [[b=6]]: [[K=\\frac{2\\times6}{2}=6]]. Unterschiedliche Formen schließen dieselbe Fläche ein, wann immer das Produkt ihrer Katheten gleich ist. Ein kurzes, breites Dreieck und ein hohes, schmales können identische Oberfläche bedecken, was beim Einpassen von Paneelen in unterschiedliche Räume zählt." }
        ],
        "imgAlt": "Zwei rechtwinklige Dreiecke, 3 mal 4 und 2 mal 6, nebeneinander dargestellt mit gleicher Fläche 6",
        "figcaption": "Unterschiedliche Proportionen, gleiche Fläche: Beide rechtwinkligen Dreiecke schließen 6 Quadrateinheiten ein."
      },
      "sec-general": {
        "h2": "Warum kann man die Zwei-Katheten-Formel nicht für jedes Dreieck verwenden?",
        "blocks": [
          { "kind": "p", "text": "Die Formel [[K=\\frac{ab}{2}]] funktioniert, weil die beiden Katheten senkrecht aufeinander stehen. Für ein allgemeines Dreieck genügen zwei Seitenlängen allein nicht: Der eingeschlossene Winkel zwischen ihnen oder die entsprechende Höhe muss ebenfalls bekannt sein." },
          { "kind": "p", "text": "Die allgemeine Regel lautet [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]], wobei [[C]] der eingeschlossene Winkel zwischen den Seiten [[a]] und [[b]] ist. Für ein rechtwinkliges Dreieck gilt [[C=90^\\circ]] und [[\\sin(90^\\circ)=1]]. Daher [[K=\\frac{ab\\times1}{2}]], also [[[\\boxed{K=\\frac{ab}{2}}]]] Die Rechtwinklig-Dreiecks-Formel ist die allgemeine Formel mit dem Sinusfaktor gleich 1. Bei jedem anderen Winkel verkleinert der Sinus das Produkt, weshalb die Kathetenformel niemals auf ein nicht rechtwinkliges Dreieck angewendet werden darf: Sie behandelt [[\\sin(C)]] stillschweigend als 1, obwohl er es nicht ist." }
        ]
      },
      "sec-units": {
        "h2": "Einheiten bei der Flächenberechnung eines rechtwinkligen Dreiecks verstehen",
        "blocks": [
          { "kind": "p", "text": "Die beiden Katheten müssen vor der Anwendung der Formel eine Längeneinheit teilen. Die Quadrateinheit in der Antwort entsteht aus der Multiplikation der beiden Längeneinheiten, sodass konsistente Einheiten das sind, was die Zahl bedeutungsvoll hält." },
          { "kind": "h3", "text": "Warum das Ergebnis Quadrateinheiten verwendet" },
          { "kind": "p", "text": "Die Fläche zählt Einheitsquadrate, die die Oberfläche bedecken: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Die Einheit ist immer die Längeneinheit zum Quadrat, weil das Produkt zweier Längen eine Zählung von Quadraten ist. Eine Fläche als 24 m anzugeben ist ein Kategorienfehler: 24 m ist eine Länge, während 24 m² eine Oberfläche ist." },
          { "kind": "h3", "text": "Verschiedene Einheiten vor der Berechnung umrechnen" },
          { "kind": "p", "text": "Nehmen Sie [[a=3\\text{ ft}]] und [[b=24\\text{ inches}]]. Rechnen Sie zuerst um: [[24\\text{ inches}=2\\text{ ft}]]. Dann [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] Ohne Umrechnung hat das rohe Produkt 72 keine saubere Bedeutung: Es ist weder Quadratfuß noch Quadratzoll. Rechnen Sie zuerst um, multiplizieren Sie danach, und die Einheit der Antwort folgt automatisch." },
          { "kind": "h3", "text": "Mit Dezimalmaßen rechnen" },
          { "kind": "p", "text": "Dieselbe Formel verarbeitet Dezimalzahlen ohne jede Änderung. Gegeben [[a=3.5]] und [[b=9.2]]: [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] Ganze Zahlen, Dezimalzahlen und feine Werkstattmaße fließen alle durch dasselbe Multiplizieren und Halbieren. Behalten Sie die Dezimalstellen bei, die die Messung hergibt, und überlassen Sie die Arithmetik dem Rechner." },
          { "kind": "h3", "text": "Warum frühes Runden vermieden werden sollte" },
          { "kind": "p", "text": "Runden Sie die Eingaben, und der Fehler fährt durch die Multiplikation in die Antwort. Eine als 9.2 gemessene Kathete sollte vor dem Multiplizieren nicht zu 9 werden; die verlorenen 0.2 pro Einheit summieren sich über das Produkt. Bewahren Sie die volle Genauigkeit durch die Zwischenschritte und runden Sie erst das Endergebnis, auf die Genauigkeit, die die Messungen rechtfertigen. Früh bewahrte Präzision ist am Ende gelieferte Genauigkeit." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus Katheten",
        "blocks": [
          { "kind": "p", "text": "Nahezu jede falsche Antwort zu diesem Thema geht auf eine falsch bezeichnete Eingabe zurück, nicht auf schlechte Arithmetik. Die fünfzehn Fehler unten sind diejenigen, die immer wieder auftreten, jeder mit seiner Ursache und seiner Abhilfe." },
          { "kind": "h3", "text": "1. Die Hypotenuse statt einer der Katheten verwenden" },
          { "kind": "p", "text": "Die Hypotenuse ist die längste Seite und bildet nie den rechten Winkel. Ihre Eingabe als Kathete bläht das Produkt auf: Beispielsweise ergibt die Behandlung von 10 als Kathete mit 8 statt 24 die 40. Abhilfe: Finden Sie zuerst den rechten Winkel; die beiden Seiten, die ihn berühren, sind die Katheten." },
          { "kind": "h3", "text": "2. Die beiden Katheten mit den anderen Seiten verwechseln" },
          { "kind": "p", "text": "In einer geneigten Zeichnung kann jede Seite wie eine natürliche Grundseite aussehen. Die Bezeichnungen [[a]] und [[b]] gehören nur zum senkrechten Paar. Abhilfe: Finden Sie die Rechtwinkelmarkierung, bevor Sie Bezeichnungen vergeben, unabhängig davon, wie das Dreieck gedreht ist." },
          { "kind": "h3", "text": "3. Vergessen, dass die Katheten einen 90-Grad-Winkel bilden müssen" },
          { "kind": "p", "text": "Das halbierte Produkt setzt Senkrechtheit voraus. Zwei Seiten, die sich in 80 oder 100 Grad treffen, brauchen stattdessen die allgemeine Sinusformel. Abhilfe: Bestätigen Sie, dass die Ecke rechtwinklig ist, bevor Sie [[K=\\frac{ab}{2}]] verwenden." },
          { "kind": "h3", "text": "4. Vergessen, durch zwei zu teilen" },
          { "kind": "p", "text": "Das Produkt [[a\\times b]] allein ist die Fläche des umschließenden Rechtecks, das Doppelte des Dreiecks. Abhilfe: Halbieren Sie das Produkt; das /2 gehört zur Formel, es ist nicht optional." },
          { "kind": "h3", "text": "5. Die Rechteckfläche statt der Dreiecksfläche berechnen" },
          { "kind": "p", "text": "Achtundvierzig ist eine gültige Fläche für das 6-mal-8-Rechteck, nur nicht für das Dreieck darin. Abhilfe: Fragen Sie, welche Form die Aufgabe will, und wenden Sie die Halbierung nur für das Dreieck an." },
          { "kind": "h3", "text": "6. Fuß und Zoll mischen" },
          { "kind": "p", "text": "3 ft mal 24 in zu multiplizieren ergibt 72 von nichts Sauberem. Abhilfe: Rechnen Sie beide in eine Einheit um (24 in = 2 ft), bevor Sie rechnen." },
          { "kind": "h3", "text": "7. Zentimeter und Meter mischen" },
          { "kind": "p", "text": "Dieselbe Falle im metrischen Maßstab: 2 m mal 30 cm müssen zuerst eine Einheit werden. Abhilfe: Rechnen Sie um (30 cm = 0.3 m), dann multiplizieren Sie." },
          { "kind": "h3", "text": "8. Das Ergebnis in linearen Einheiten angeben" },
          { "kind": "p", "text": "Eine Fläche von 24 m² ist nicht 24 m. Abhilfe: Schreiben Sie die Quadrateinheit jedes Mal mit der Zahl." },
          { "kind": "h3", "text": "9. Nur eine Kathete verwenden" },
          { "kind": "p", "text": "Eine Kathete ist eine Länge, keine Fläche; die Formel braucht das Paar. Die Eingabe einer einzigen Messung beantwortet nichts. Abhilfe: Messen Sie beide senkrechten Seiten." },
          { "kind": "h3", "text": "10. Zwei beliebige Seiten eines rechtwinkligen Dreiecks als senkrecht behandeln" },
          { "kind": "p", "text": "Nur die Katheten stehen senkrecht aufeinander. Ein Paar aus Kathete und Hypotenuse trifft sich in einem spitzen Winkel, sodass sein halbiertes Produkt nicht die Fläche ist. Abhilfe: Prüfen Sie, dass beide gewählten Seiten den rechten Winkel berühren." },
          { "kind": "h3", "text": "11. Negative oder null Messungen verwenden" },
          { "kind": "p", "text": "Längen sind positiv. Null lässt das Dreieck zu einer Linie ohne Fläche zusammenfallen, und negative Längen haben hier keine geometrische Bedeutung. Abhilfe: Messen Sie neu; weisen Sie nicht positive Eingaben zurück." },
          { "kind": "h3", "text": "12. Dezimaleingaben zu früh runden" },
          { "kind": "p", "text": "Das Runden von 9.2 auf 9 vor dem Multiplizieren verschiebt die Antwort von 16.1 nach unten. Abhilfe: Bewahren Sie die volle Genauigkeit durch die Berechnung und runden Sie erst das Endergebnis." },
          { "kind": "h3", "text": "13. Annehmen, die Hypotenuse sei erforderlich" },
          { "kind": "p", "text": "Das ist sie nicht. [[K=\\frac{ab}{2}]] verwendet nur die Katheten, und die Hypotenuse zuerst zu berechnen fügt einen Schritt hinzu, der nichts ändert. Abhilfe: Überspringen Sie sie, es sei denn, eine andere Berechnung braucht sie." },
          { "kind": "h3", "text": "14. Umfang mit Fläche verwechseln" },
          { "kind": "p", "text": "Der Umfang addiert die drei Seiten ([[a+b+c]]); die Fläche multipliziert zwei Katheten und halbiert. Bei 6-8-10 beträgt der Umfang 24, während die Fläche ebenfalls 24 ist, ein Zufall, der echte Verwirrung stiftet. Abhilfe: Prüfen Sie, ob die Frage nach der Randlänge oder der eingeschlossenen Oberfläche fragt." },
          { "kind": "h3", "text": "15. Die Rechtwinklig-Dreiecks-Formel auf ein nicht rechtwinkliges Dreieck anwenden" },
          { "kind": "p", "text": "Ohne eine 90-Grad-Ecke braucht das Produkt den Sinus des eingeschlossenen Winkels. Die Verwendung von [[K=\\frac{ab}{2}]] an einem allgemeinen Dreieck übertreibt die Fläche. Abhilfe: Verwenden Sie [[K=\\frac{ab\\sin(C)}{2}]] mit dem tatsächlichen eingeschlossenen Winkel." },
          { "kind": "h3", "text": "Falsch gegen richtig: Ein konkretes Beispiel" },
          { "kind": "p", "text": "Verwenden Sie [[a=6]], [[b=8]]. Richtig: [[K=\\frac{6\\times8}{2}=24]]. Fälschlich die Division durch zwei vergessen: [[6\\times8=48]], was die Fläche des entsprechenden Rechtecks ist, nicht des rechtwinkligen Dreiecks. Fälschlich die Hypotenuse 10 wie eine senkrechte Kathete verwendet: [[K=\\frac{10\\times8}{2}=40]], falsch, weil 10 nicht senkrecht zu 8 steht. Die Arithmetik sieht in allen drei Fällen selbstsicher aus; nur die Geometrie unterscheidet sie." }
        ]
      },
      "sec-verify": {
        "h2": "Wie man prüft, ob die Fläche eines rechtwinkligen Dreiecks korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Sechs unabhängige Prüfungen, alle am 6-8-10-Dreieck demonstriert ([[a=6]], [[b=8]], [[c=10]], [[K=24]]). Die Übereinstimmung zwischen verschiedenen Wegen ist der stärkste Beweis, dass eine Antwort stimmt, in Hausaufgaben wie in der praktischen Messung." },
          { "kind": "h3", "text": "Methode 1: Mit der Hauptformel neu berechnen" },
          { "kind": "p", "text": "Führen Sie [[K=\\frac{ab}{2}]] frisch durch: [[K=\\frac{6\\times8}{2}=24]]. Ein zweiter Durchgang mit neu eingegebenen Zahlen fängt Tippfehler und falsch eingetippte Ziffern." },
          { "kind": "h3", "text": "Methode 2: Das Dreieck verdoppeln, um ein Rechteck zu bilden" },
          { "kind": "p", "text": "Das verdoppelte Dreieck ist ein 6-mal-8-Rechteck: [[K_{\\text{rectangle}}=6\\times8=48]], also [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. Wenn die verdoppelte Fläche nicht zu [[a\\times b]] passt, ist die Arithmetik irgendwo verrutscht." },
          { "kind": "h3", "text": "Methode 3: Die Hypotenuse mit dem Satz des Pythagoras prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[c=\\sqrt{a^2+b^2}]]: [[c=\\sqrt{36+64}=10]]. Dies prüft die Seitenidentifizierung hinter der Fläche; eine falsche Hypotenuse bedeutet, dass eine Seite falsch bezeichnet wurde." },
          { "kind": "h3", "text": "Methode 4: Die Flächenformel umstellen" },
          { "kind": "p", "text": "Gewinnen Sie eine bekannte Eingabe aus der Antwort zurück: [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. Die Ausgangskathete zurückzubekommen schließt den Kreis und bestätigt den Divisionsschritt." },
          { "kind": "h3", "text": "Methode 5: Die Maßeinheiten prüfen" },
          { "kind": "p", "text": "Beide Katheten müssen dieselbe Längeneinheit verwenden, und die Antwort muss diese Einheit zum Quadrat verwenden. Gemischte Einheiten oder eine lineare Einheit in der Antwort melden einen Aufbaufehler, bevor irgendwelche Zahlen neu geprüft werden." },
          { "kind": "h3", "text": "Methode 6: Das Ergebnis abschätzen" },
          { "kind": "p", "text": "Runden Sie auf freundliche Zahlen: 6 mal 8 liegt nahe bei 50, halbiert nahe bei 25. Eine Antwort von 24 sitzt direkt neben der Schätzung; eine Antwort von 240 oder 2.4 täte das nicht. Das Schätzen fängt Komma- und Divisionsfehler, die exaktes Nachrechnen wiederholen kann." }
        ]
      },
      "sec-applications": {
        "h2": "Die Fläche eines rechtwinkligen Dreiecks aus zwei Katheten in der Praxis",
        "blocks": [
          { "kind": "p", "text": "Dasselbe Zwei-Eingaben-Muster taucht überall dort auf, wo eine rechtwinklige Ecke vermessen werden muss. Ein Glaser liest die beiden senkrechten Kanten eines Fensters ab; ein Metallbauer misst die Katheten eines Winkelrohlings; ein Vermesser reduziert eine Grundstücksecke auf zwei senkrechte Versätze. In jedem Fall ist die Hypotenuse die umständlich zu nehmende Messung, und diese Formel fragt nie danach." },
          { "kind": "p", "text": "Die vier Paneele unten zeigen das Muster in verschiedenen Maßstäben. Ein Glasfenster (6 m²) und ein Gartenabschnitt (84 m²) verwenden die 3-4-5- und 7-24-25-Geometrie im Metermaßstab; ein Dachträger (60 ft²) verwendet das 8-15-17-Dreieck; eine Stahlplatte (30 cm²) verwendet 5-12-13. Jedes Paneel beschriftet beide Katheten, die Rechtwinkelmarkierung und die resultierende Fläche, sodass der Weg von der Messung zur Antwort sichtbar bleibt." }
        ],
        "imgAlt": "Vier Paneele: Glasfenster 6 m2, Dachträger 60 ft2, Gartenabschnitt 84 m2, Stahlplatte 30 cm2",
        "figcaption": "Vier echte Verwendungen: ein Glasfenster, ein Dachträger, ein Gartenabschnitt und eine Stahlplatte mit ihren Flächen."
      },
      "sec-faq": {
        "h2": "Häufig gestellte Fragen",
        "blocks": [
          { "kind": "p", "text": "Im Folgenden finden Sie Antworten auf die häufigsten Fragen zur Berechnung der Fläche eines rechtwinkligen Dreiecks aus seinen beiden Katheten." }
        ]
      },
      "sec-related": {
        "h2": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "blocks": [
          { "kind": "p", "text": "Unterschiedliche Messungen erfordern unterschiedliche Rechner." }
        ]
      },
      "sec-conclusion": {
        "h2": "Zwei Messungen, ein halbiertes Produkt",
        "blocks": [
          { "kind": "p", "text": "Zwei senkrechte Längen genügen. Multiplizieren Sie sie, halbieren Sie das Produkt, und die eingeschlossene Oberfläche ist benannt. Der Rechteckbeweis zeigt, warum die Halbierung exakt und nicht konventionell ist, der Satz des Pythagoras prüft die Seiten hinter der Antwort, und die umgestellte Formel gewinnt eine fehlende Kathete zurück, wenn die Fläche bereits bekannt ist." },
          { "kind": "p", "text": "Die Arbeitsgewohnheit ist einfach: Bestätigen Sie die 90-Grad-Ecke, passen Sie die Einheiten an, halten Sie Dezimalzahlen bis zum Ende ungerundet, und verifizieren Sie über das Rechteck. Mit diesen Gewohnheiten ist [[K=\\frac{ab}{2}]] die verlässlichste Flächenberechnung der Geometrie." }
        ]
      }
    }
  },
  "it": {
    "faqs": [
      {
        "question": "Qual è la formula dell'area di un triangolo rettangolo dai suoi cateti?",
        "answer": "K = ab/2, dove a e b sono i due cateti perpendicolari. Moltiplicate i cateti e dividete per due. Per a = 6 e b = 8, K = (6 × 8) / 2 = 24 unità quadrate. Non servono ipotenusa, angolo o altre misure."
      },
      {
        "question": "Perché si moltiplicano entrambi i cateti e si divide per due?",
        "answer": "I due cateti formano i lati di un rettangolo circoscritto di area a × b, e la diagonale del rettangolo lo taglia in due triangoli rettangoli identici. Ciascun triangolo possiede metà del rettangolo, quindi l'area è il prodotto dimezzato. La moltiplicazione costruisce il rettangolo; la divisione lo riduce al triangolo."
      },
      {
        "question": "Serve l'ipotenusa per calcolare l'area?",
        "answer": "No. L'area deriva dai soli due cateti tramite K = ab/2. L'ipotenusa, c = √(a² + b²), è utile per verificare le etichette dei lati o recuperare un lato mancante, ma non entra mai nel calcolo dell'area in sé."
      },
      {
        "question": "Qual è la differenza tra un cateto e l'ipotenusa?",
        "answer": "I cateti sono i due lati che si incontrano all'angolo retto e sono perpendicolari tra loro. L'ipotenusa è opposta all'angolo retto ed è sempre il lato più lungo. La calcolatrice prende i due cateti come input; inserire l'ipotenusa come cateto produce una risposta sbagliata."
      },
      {
        "question": "Posso scambiare il cateto a e il cateto b?",
        "answer": "Sì. La moltiplicazione commuta, quindi (a × b) / 2 è uguale a (b × a) / 2. Inserire 3 e 4 in un ordine qualsiasi dà 6. Le etichette sono una comodità per parlare dei lati, non un vincolo sul calcolo."
      },
      {
        "question": "Posso calcolare l'area con misure decimali dei cateti?",
        "answer": "Sì. Per a = 3.5 e b = 9.2, K = (3.5 × 9.2) / 2 = 16.1 unità quadrate. Il metodo è identico per i numeri interi e i decimali. Mantenete la piena precisione durante il calcolo e arrotondate solo la risposta finale in base all'accuratezza della misura."
      },
      {
        "question": "Cosa succede se i due cateti usano unità diverse?",
        "answer": "Convertite a un'unità prima di calcolare. Con a = 3 ft e b = 24 pollici, convertite 24 pollici in 2 ft, poi K = (3 × 2) / 2 = 3 ft². Moltiplicare unità mescolate dà un numero senza un significato pulito, quindi il passo di conversione è obbligatorio."
      },
      {
        "question": "Posso trovare un cateto mancante se conosco l'area?",
        "answer": "Sì, riarrangiando la formula in b = 2K/a (o a = 2K/b). Con K = 24 cm² e a = 6 cm, b = 48/6 = 8 cm. È la stessa relazione letta al contrario, non una modalità separata della calcolatrice; la calcolatrice in sé prende comunque i due cateti."
      },
      {
        "question": "Come è legato il teorema di Pitagora all'area del triangolo?",
        "answer": "Collega le lunghezze dei lati tramite a² + b² = c², mentre la formula dell'area misura la superficie racchiusa. Usate il teorema per trovare un lato mancante o verificare un'ipotenusa, poi applicate K = ab/2. Per cateti di 6 e 8, c = 10, e l'area resta 24 in ogni caso."
      },
      {
        "question": "La formula funziona per i triangoli non rettangoli?",
        "answer": "No. K = ab/2 presuppone che l'angolo compreso tra i lati sia di 90 gradi. Per gli altri triangoli usate K = ab sin(C)/2 con l'angolo compreso reale C. Applicare la formula dei cateti a un triangolo non rettangolo tratta sin(C) come uguale a 1 quando non lo è, sovrastimando l'area."
      },
      {
        "question": "Perché la risposta è espressa in unità quadrate?",
        "answer": "L'area conta i quadrati unitari che coprono la superficie: cm × cm = cm², m × m = m², ft × ft = ft². Un'unità lineare come 24 m descrive una lunghezza, non una superficie. Riportate sempre l'unità al quadrato insieme al numero."
      },
      {
        "question": "Due triangoli rettangoli diversi possono avere la stessa area?",
        "answer": "Sì, ogni volta che i loro prodotti dei cateti coincidono. Un triangolo di 3 per 4 e un triangolo di 2 per 6 danno entrambi K = 6. Forma e area sono indipendenti: prodotti uguali significano aree uguali, quindi un triangolo alto e stretto può racchiudere esattamente tanta superficie quanto uno corto e largo."
      }
    ],
    "relatedHeading": "Esplora le calcolatrici correlate per triangoli rettangoli",
    "relatedItems": [
      "Calcolatrice dell'area del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo da cateto e angolo",
      "Calcolatrice dell'area del triangolo rettangolo da angolo",
      "Calcolatrice dell'area del triangolo rettangolo da semiperimetro",
      "Calcolatrice dei lati del triangolo rettangolo",
      "Calcolatrice del perimetro del triangolo rettangolo"
    ],
    "relatedIntro": "Misure diverse richiedono calcolatrici diverse.",
    "faqHeading": "Domande frequenti",
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo usando i suoi due cateti",
      "sec-anatomy": "Che cos'è un triangolo rettangolo?",
      "sec-base-height": "Perché i due cateti sono la base e l'altezza?",
      "sec-formula": "Perché l'area di un triangolo rettangolo è la metà del prodotto dei suoi cateti?",
      "sec-howto": "Come usare la calcolatrice dell'area del triangolo rettangolo dai cateti",
      "sec-examples": "Esempi passo passo dell'area di un triangolo rettangolo da due cateti",
      "sec-practical": "Applicazioni nel mondo reale dell'area di un triangolo rettangolo da due cateti",
      "sec-pythagoras": "Come è legato il teorema di Pitagora all'area di un triangolo rettangolo?",
      "sec-missing-leg": "Come trovare un cateto mancante quando l'area del triangolo è nota",
      "sec-scaling": "Come la modifica dei due cateti influisce sull'area?",
      "sec-general": "Perché non si può usare la formula dei due cateti per ogni triangolo?",
      "sec-units": "Capire le unità nel calcolo dell'area di un triangolo rettangolo",
      "sec-mistakes": "Errori comuni nel calcolo dell'area di un triangolo rettangolo dai cateti",
      "sec-verify": "Come verificare se l'area del vostro triangolo rettangolo è corretta",
      "sec-applications": "L'area del triangolo rettangolo da due cateti nella pratica",
      "sec-faq": "Domande frequenti",
      "sec-related": "Esplora le calcolatrici correlate per triangoli rettangoli",
      "sec-conclusion": "Due misure, un prodotto dimezzato"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare l'area di un triangolo rettangolo usando i suoi due cateti",
        "blocks": [
          { "kind": "p", "text": "Prendete [[a=6]], [[b=8]]. Applicate [[K=\\frac{6\\times8}{2}]]: [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Il risultato indica la superficie piana totale racchiusa dai tre lati: ventiquattro unità quadrate. È esattamente ciò che la calcolatrice dell'area del triangolo rettangolo dai cateti restituisce per questi due input." },
          { "kind": "p", "text": "La calcolatrice richiede solo i due cateti, i lati che si incontrano all'angolo retto. Poiché questi due lati sono perpendicolari, uno funge da base e l'altro da altezza, quindi non è necessaria nessun'altra misura. L'ipotenusa non ha alcun ruolo qui. Moltiplicate i cateti, dimezzate il prodotto, e l'area segue da [[K=\\frac{ab}{2}]]." },
          { "kind": "p", "text": "Questo è uno dei calcoli d'area più semplici della geometria, perché entrambe le misure perpendicolari sono già a disposizione. Compare ovunque un angolo sia retto: tracciati di cantiere, fogli di taglio, aiuole e schizzi di rilievo si riducono tutti a due cateti e un prodotto dimezzato." }
        ]
      },
      "sec-anatomy": {
        "h2": "Che cos'è un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Prima che la formula abbia senso, le etichette devono essere esatte. Ogni simbolo qui sotto compare nella calcolatrice, e ognuno ha un significato unico e fisso." },
          { "kind": "h3", "text": "Definizione di triangolo rettangolo" },
          { "kind": "p", "text": "Un triangolo rettangolo è un poligono a tre lati che contiene esattamente un angolo interno di 90 gradi. Ha tre vertici, tre lati e tre angoli interni la cui somma è 180 gradi. L'angolo retto è di solito segnato con un piccolo quadrato al vertice. I due lati che formano quell'angolo sono i cateti; il lato opposto è l'ipotenusa. Poiché [[C=90^\\circ]], segue che [[[\\boxed{A+B=90^\\circ}]]]: i due angoli acuti sono complementari, quindi conoscere l'uno determina l'altro." },
          { "kind": "h3", "text": "Quali sono i due cateti di un triangolo rettangolo?" },
          { "kind": "p", "text": "I cateti sono i due lati che si incontrano all'angolo retto. Il cateto [[a]] è opposto all'angolo [[A]]; il cateto [[b]] è opposto all'angolo [[B]]. La loro proprietà definitoria è la perpendicolarità: [[a\\perp b]]. Questo singolo fatto rende il calcolo dell'area così diretto, perché una coppia perpendicolare fornisce già una base e un'altezza senza alcuna costruzione aggiuntiva." },
          { "kind": "h3", "text": "Che cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo di 90 gradi. È sempre il lato più lungo del triangolo, e non forma mai l'angolo retto essa stessa; si estende di fronte a esso. Non è richiesta nella formula dell'area basata sui cateti. Diventa utile quando manca un lato, poiché [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] la recupera tramite il teorema di Pitagora, ma la calcolatrice dell'area non la chiede mai." },
          { "kind": "h3", "text": "Perché i due cateti sono perpendicolari?" },
          { "kind": "p", "text": "Perpendicolare significa incontrarsi a esattamente 90 gradi. I cateti condividono il vertice dell'angolo retto, quindi l'angolo tra loro è retto per definizione. Questo è importante perché l'area richiede una base moltiplicata per un'altezza perpendicolare. In un triangolo rettangolo quella coppia è già disegnata: nessuna altezza da abbassare, nessuna linea aggiuntiva da costruire. Il triangolo fornisce direttamente entrambe le misure." },
          { "kind": "h3", "text": "I cateti possono essere scambiati?" },
          { "kind": "p", "text": "Sì. Poiché [[a\\times b=b\\times a]], segue che [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]. Una verifica concreta: [[\\frac{3\\times4}{2}=6]] e [[\\frac{4\\times3}{2}=6]]. Ridenominare quale cateto si chiama [[a]] e quale si chiama [[b]] non cambia nulla del triangolo né della sua area. Inserite le due misure in un qualsiasi campo di input; la calcolatrice restituisce lo stesso risultato." }
        ],
        "imgAlt": "Triangolo rettangolo ABC: angolo retto in C, cateti a e b evidenziati, ipotenusa c, formula K = ab/2",
        "figcaption": "Triangolo ABC: i cateti evidenziati a e b sono le due misure di cui ha bisogno la calcolatrice."
      },
      "sec-base-height": {
        "h2": "Perché i due cateti sono la base e l'altezza?",
        "blocks": [
          { "kind": "p", "text": "L'intero metodo si basa su un fatto geometrico: in un triangolo rettangolo, la base e l'altezza perpendicolare sono già disegnate come i due cateti. Capire il perché trasforma la formula da una regola memorizzata in qualcosa di ovvio." },
          { "kind": "h3", "text": "Che cos'è la base di un triangolo?" },
          { "kind": "p", "text": "La base è il lato scelto come riferimento per il calcolo dell'area. Qualsiasi lato di un triangolo può servire da base. Per un triangolo rettangolo, scegliere un cateto come base è naturale, perché l'altro cateto è già perpendicolare a esso. La scelta è una comodità: prendete un cateto come base e la geometria dell'angolo retto fa il resto." },
          { "kind": "h3", "text": "Che cos'è l'altezza perpendicolare?" },
          { "kind": "p", "text": "L'altezza è la distanza più breve dalla base al vertice opposto, misurata perpendicolarmente alla base. Quando la base è il cateto [[a]], il vertice opposto è l'estremità lontana del cateto [[b]], e il cateto [[b]] stesso è quella distanza perpendicolare. Non bisogna disegnare né misurare nulla oltre il triangolo; l'altezza è un lato, non una costruzione." },
          { "kind": "h3", "text": "Perché la perpendicolarità è importante?" },
          { "kind": "p", "text": "Moltiplicare due lunghezze di lati produce un prodotto base-per-altezza solo quando i lati sono perpendicolari. Un lato inclinato accoppiato a una base misura una diagonale più lunga, non l'altezza perpendicolare, quindi il prodotto supera il vero rettangolo base-altezza. I cateti di un triangolo rettangolo sono perpendicolari per definizione, ed è esattamente per questo che il loro prodotto è il punto di partenza corretto. Questa calcolatrice richiede i due lati che formano l'angolo retto; qualsiasi altra coppia rompe la logica da cui dipende la formula." },
          { "kind": "h3", "text": "L'ipotenusa può essere usata come base?" },
          { "kind": "p", "text": "Un triangolo può usare qualsiasi lato come base, ipotenusa compresa, ma l'altezza deve allora essere la distanza perpendicolare dal vertice opposto a quel lato. Quella distanza non è uno dei cateti, e questa calcolatrice non la misura. L'ipotenusa non può semplicemente sostituire un cateto in [[K=\\frac{ab}{2}]]; così facendo si calcola una quantità diversa e scorretta. Questa calcolatrice è costruita solo per i due cateti perpendicolari." }
        ]
      },
      "sec-formula": {
        "h2": "Perché l'area di un triangolo rettangolo è la metà del prodotto dei suoi cateti?",
        "blocks": [
          { "kind": "p", "text": "Partite dalla regola generale: [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Per un triangolo rettangolo, ponete [[\\text{Base}=a]] e [[\\text{Height}=b]]. Poiché i due cateti sono perpendicolari, [[[\\boxed{K=\\frac{a\\times b}{2}}]]] Il resto di questa sezione mostra da dove viene quel dimezzamento, così che la divisione per due sia capita, non solo ricordata." },
          { "kind": "h3", "text": "Capire il metodo del rettangolo" },
          { "kind": "p", "text": "Disegnate un rettangolo di larghezza [[a]] e altezza [[b]]. La sua area è [[K_{\\text{rectangle}}=a\\times b]]. Ora tracciate una diagonale da un vertice al vertice opposto. La diagonale taglia il rettangolo in due triangoli che sono copie esatte l'uno dell'altro, ciascuno con cateti [[a]] e [[b]] e un angolo retto dove si trovava il vertice del rettangolo. Entrambi i triangoli hanno area uguale, quindi ciascuno possiede metà del rettangolo: [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "Perché due triangoli rettangoli identici formano un rettangolo?" },
          { "kind": "p", "text": "Disponete due copie del triangolo in modo che le loro ipotenuse si incontrino. I cateti corrispondenti si allineano: [[a]] contro [[a]], [[b]] contro [[b]]. Poiché gli angoli acuti di un triangolo rettangolo sono complementari ([[A+B=90^\\circ]]), gli angoli che si uniscono a ogni vertice della figura combinata sommano a 90 gradi tutto intorno. Il risultato ha quattro angoli retti e lati opposti uguali: un rettangolo. I suoi lati sono esattamente i due cateti, ed è per questo che l'area del rettangolo è [[a\\times b]] e ciascun triangolo ne possiede la metà." },
          { "kind": "h3", "text": "Perché la divisione per due è necessaria?" },
          { "kind": "p", "text": "Prendete il rettangolo di 6 per 8. La sua area è [[K=6\\times8=48]]. Ciascuno dei due triangoli rettangoli identici occupa la metà: [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] Saltare la divisione risponde a una domanda diversa: l'area del rettangolo, non quella del triangolo. La divisione per due non è un fattore di correzione; è il passo che riduce il rettangolo circoscritto al triangolo." },
          { "kind": "h3", "text": "Dimostrazione geometrica con le coordinate" },
          { "kind": "p", "text": "Per i lettori a loro agio con le coordinate, ecco lo stesso risultato ottenuto con l'algebra. Ponete il vertice dell'angolo retto nell'origine e siano i vertici [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]. Il triangolo è la regione delimitata dai due assi coordinati e dalla retta che unisce [[A]] a [[B]]. La base lungo l'asse x ha lunghezza [[a]], il lato verticale ha lunghezza [[b]], e il triangolo rettangolo racchiuso riempie esattamente la metà del rettangolo di [[a]] per [[b]] che quegli assi delimitano. Quindi [[[\\boxed{K=\\frac{ab}{2}}]]], la stessa formula, raggiunta senza nuovi strumenti." }
        ],
        "imgAlt": "Rettangolo di a per b diviso da una diagonale in due triangoli rettangoli identici, ciascuno di area ab/2",
        "figcaption": "Un rettangolo di larghezza a e altezza b, tagliato lungo la sua diagonale in due triangoli rettangoli identici."
      },
      "sec-howto": {
        "h2": "Come usare la calcolatrice dell'area del triangolo rettangolo dai cateti",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice richiede esattamente due input, inseriti in ordine. I passi qui sotto seguono il layout a schermo dall'identificazione delle misure fino al risultato verificato." }
        ],
        "steps": [
          "<strong>Identificate i due lati che si incontrano all'angolo di 90 gradi.</strong> Sono i cateti; il contrassegno dell'angolo retto mostra dove si uniscono.",
          "<strong>Verificate che nessuna delle misure scelte sia l'ipotenusa.</strong> L'ipotenusa è il lato più lungo, opposto all'angolo retto.",
          "<strong>Misurate il primo cateto.</strong> Usate un metro a nastro, un righello o una scala di disegno adatta all'oggetto.",
          "<strong>Misurate il secondo cateto.</strong> Misurate lungo il lato stesso, da un vertice all'altro.",
          "<strong>Assicuratevi che entrambe le misure usino unità compatibili.</strong> Metri con metri, piedi con piedi, mai mescolati.",
          "<strong>Inserite il cateto a nel primo campo di input.</strong> Un cateto qualsiasi può venire per primo; le etichette sono intercambiabili.",
          "<strong>Inserite il cateto b nel secondo campo di input.</strong> È l'altro lato perpendicolare.",
          "<strong>Selezionate le unità di misura appropriate.</strong> Fate corrispondere l'unità a ciò che è stato realmente misurato.",
          "<strong>Fate clic su Calculate Area.</strong> Il risultato appare con la sostituzione mostrata.",
          "<strong>Esaminate il risultato calcolato.</strong> Leggete l'area e verificate che sembri ragionevole.",
          "<strong>Controllate la soluzione matematica passo passo.</strong> Mostra la formula, la sostituzione e il calcolo.",
          "<strong>Usate il diagramma del triangolo per verificare le etichette dei lati.</strong> Verificate che a e b si trovino sui lati perpendicolari.",
          "<strong>Verificate che il risultato sia espresso in unità quadrate.</strong> Unità di lunghezza al quadrato, corrispondenti agli input.",
          "<strong>Fate clic su Reset quando iniziate un nuovo calcolo.</strong> Azzera entrambi i campi per un nuovo inizio."
        ],
        "closingParagraphs": [
          "La calcolatrice ha esattamente due input, il cateto [[a]] e il cateto [[b]]. Non ci sono altre modalità né campi nascosti; ogni area in questa pagina deriva da [[K=\\frac{ab}{2}]]."
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo dell'area di un triangolo rettangolo da due cateti",
        "blocks": [
          { "kind": "p", "text": "Quattro triangoli rettangoli classici mostrano il metodo a dimensioni crescenti. Ogni esempio sostituisce nella formula, e l'ipotenusa compare solo come controllo facoltativo, mai come input." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]]. Passo 1: scrivete la formula, [[K=\\frac{a\\times b}{2}]]. Passo 2: sostituite, [[K=\\frac{3\\times4}{2}]]. Passo 3: moltiplicate, [[K=\\frac{12}{2}]]. Risposta finale: [[[\\boxed{K=6\\text{ square units}}]]] Controllo facoltativo: [[c=\\sqrt{3^2+4^2}=5]]. L'ipotenusa conferma la nota terna ma non ha alcun ruolo nell'area." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 6-8-10" },
          { "kind": "p", "text": "Dati [[a=6]], [[b=8]]. Allora [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Controllo col rettangolo: il rettangolo circoscritto di 6 per 8 ha area 48, e il triangolo ne possiede esattamente la metà." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]]. Allora [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] L'ipotenusa di 13 non entra mai nel calcolo; conterebbe solo se mancasse un lato." },
          { "kind": "h3", "text": "Esempio 4: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[a=8]], [[b=15]]. Allora [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Stessi tre passi, numeri più grandi, logica identica." },
          { "kind": "h3", "text": "Confronto degli esempi fondamentali" }
        ],
        "table": {
          "headers": ["Triangolo", "Cateto a", "Cateto b", "Ipotenusa (solo controllo)", "Area calcolata"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applicazioni nel mondo reale dell'area di un triangolo rettangolo da due cateti",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni risolte portano la formula dalla pagina all'officina, al cantiere e allo studio. Ciascuna nomina un pannello, una sezione, un profilo o un modello semplificato triangolare, elabora i due input della calcolatrice nella formula e dichiara l'ipotesi dietro i numeri. Quando l'oggetto reale è curvo o irregolare, il calcolo copre solo il triangolo modellato, e l'area non rappresenta mai da sola la resistenza, il costo o la sicurezza." },
          { "kind": "h3", "text": "Esempio 1: finestra triangolare in vetro" },
          { "kind": "p", "text": "Una finestra triangolare in vetro ha dimensioni perpendicolari [[a=3\\text{ m}]], [[b=4\\text{ m}]]. Sostituite: [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Il risultato rappresenta la superficie vetrata piana prima che le dimensioni del telaio vengano sottratte. Ipotesi: il vetro è un vero triangolo rettangolo; il margine del telaio è trattato separatamente." },
          { "kind": "h3", "text": "Esempio 2: staffa di supporto in acciaio" },
          { "kind": "p", "text": "Una staffa di supporto triangolare in acciaio ha [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]. Allora [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] L'area descrive la piastra piana e non ne determina la portata. Ipotesi: la staffa è tagliata come triangolo rettangolo; fori per bulloni e piegature sono esclusi." },
          { "kind": "h3", "text": "Esempio 3: profilo laterale di rampa triangolare" },
          { "kind": "p", "text": "Un profilo laterale di rampa semplificato ha [[a=6\\text{ m}]], [[b=8\\text{ m}]]. Allora [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Questo è il profilo laterale triangolare verticale, non la superficie di calpestio inclinata. Ipotesi: il profilo è modellato con un angolo retto alla base." },
          { "kind": "h3", "text": "Esempio 4: supporto triangolare per tetto" },
          { "kind": "p", "text": "Una sezione di supporto per tetto triangolare ha [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]. Allora [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] L'area rappresenta la sezione triangolare piana, utile per le stime dei materiali. Ipotesi: la sezione è modellata come triangolo rettangolo; la geometria completa del tetto può differire." },
          { "kind": "h3", "text": "Esempio 5: sezione di giardino a triangolo rettangolo" },
          { "kind": "p", "text": "Un giardino contiene una sezione a triangolo rettangolo con [[a=7\\text{ m}]], [[b=24\\text{ m}]]. Allora [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Il risultato aiuta a stimare l'area disponibile per la piantumazione o il prato. Ipotesi: i confini dell'aiuola sono rettilinei e si incontrano ad angolo retto." },
          { "kind": "h3", "text": "Esempio 6: vela triangolare in tessuto" },
          { "kind": "p", "text": "Un pannello in tessuto a triangolo rettangolo ha [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]. Allora [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Questo rappresenta la sezione di tessuto triangolare piana prima delle cuciture e dei margini di materiale. Ipotesi: la vela è modellata piatta; le vele reali si incurvano sotto carico." },
          { "kind": "h3", "text": "Esempio 7: sagoma di taglio in compensato" },
          { "kind": "p", "text": "Una sagoma in compensato a triangolo rettangolo ha [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]. Allora [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Il risultato aiuta a stimare il fabbisogno di materiale prima degli scarti di taglio. Ipotesi: la sagoma è un vero triangolo rettangolo; il taglio della sega e gli sfridi sono extra." },
          { "kind": "h3", "text": "Esempio 8: pannello segnaletico triangolare" },
          { "kind": "p", "text": "Un pannello segnaletico triangolare ha dimensioni perpendicolari [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]. Allora [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Questo rappresenta la superficie piana stampabile o verniciabile. Ipotesi: la faccia del pannello è piana e a triangolo rettangolo; il materiale di montaggio è escluso." },
          { "kind": "h3", "text": "Esempio 9: sezione di rilievo topografico" },
          { "kind": "p", "text": "Una sezione di terreno semplificata a triangolo rettangolo ha [[a=9\\text{ m}]], [[b=40\\text{ m}]]. Allora [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] La formula calcola l'area della sezione triangolare rilevata. Ipotesi: la sezione è modellata con un angolo retto; un lotto irregolare va suddiviso in forme più semplici." },
          { "kind": "h3", "text": "Esempio 10: supporto triangolare per tendone" },
          { "kind": "p", "text": "Una sezione di supporto per tendone a triangolo rettangolo ha [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]. Allora [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Il risultato rappresenta la sezione triangolare piana modellata, non necessariamente l'intera superficie di un tendone irregolare. Ipotesi: la geometria del supporto è semplificata a triangolo rettangolo." },
          { "kind": "h3", "text": "Esempio 11: pannello di supporto industriale" },
          { "kind": "p", "text": "Un pannello industriale a triangolo rettangolo ha [[a=11\\text{ m}]], [[b=60\\text{ m}]]. Allora [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] L'area descrive il pannello geometrico piano piuttosto che la sua prestazione strutturale. Ipotesi: il pannello è modellato come triangolo rettangolo; spessore e fissaggi sono questioni separate." },
          { "kind": "h3", "text": "Esempio 12: sezione di timpano di magazzino" },
          { "kind": "p", "text": "Un magazzino ha una sezione di timpano semplificata a triangolo rettangolo con [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]. Allora [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Il risultato aiuta a stimare l'area piana del timpano triangolare, per esempio quando si prezza il rivestimento. Ipotesi: il timpano è modellato come triangolo rettangolo." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": ["Applicazione pratica", "Cateto a", "Cateto b", "Ipotenusa (facoltativa)", "Area calcolata", "Unità di misura"],
          "rows": [
            ["Finestra in vetro", "3", "4", "5", "6", "m²"],
            ["Staffa in acciaio", "5", "12", "13", "30", "cm²"],
            ["Profilo di rampa", "6", "8", "10", "24", "m²"],
            ["Supporto per tetto", "8", "15", "17", "60", "ft²"],
            ["Sezione di giardino", "7", "24", "25", "84", "m²"],
            ["Vela in tessuto", "9", "12", "15", "54", "ft²"],
            ["Sagoma in compensato", "12", "16", "20", "96", "cm²"],
            ["Pannello segnaletico", "20", "21", "29", "210", "cm²"],
            ["Sezione di rilievo", "9", "40", "41", "180", "m²"],
            ["Supporto per tendone", "15", "20", "25", "150", "ft²"],
            ["Pannello industriale", "11", "60", "61", "330", "m²"],
            ["Timpano di magazzino", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "Come è legato il teorema di Pitagora all'area di un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Il teorema di Pitagora afferma [[[\\boxed{a^2+b^2=c^2}]]]: i cateti [[a]] e [[b]] determinano l'ipotenusa [[c]]. Risponde a una domanda sulle lunghezze dei lati, mentre la formula dell'area misura la superficie racchiusa. I due sono collegati ma risolvono problemi diversi, e il calcolo dell'area qui non dipende mai dal teorema." },
          { "kind": "h3", "text": "Calcolare l'ipotenusa da entrambi i cateti" },
          { "kind": "p", "text": "Con [[a=6]] e [[b=8]], l'ipotenusa è [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]] L'area viene poi calcolata separatamente: [[K=\\frac{6\\times8}{2}=24]]. L'ipotenusa è un'informazione aggiuntiva facoltativa per questo calcolo d'area, un fatto utile piuttosto che un passo richiesto." },
          { "kind": "h3", "text": "Il teorema di Pitagora può sostituire la formula dell'area?" },
          { "kind": "p", "text": "No. Il teorema di Pitagora determina le relazioni tra le lunghezze dei lati; la formula dell'area converte due lati perpendicolari in superficie racchiusa. L'uno risponde a quanto lungo, l'altro a quanta superficie. Collaborano: quando si conoscono solo un cateto e l'ipotenusa, il teorema recupera prima il cateto mancante, e poi la formula dell'area prende il sopravvento. Nessuno dei due sostituisce l'altro." },
          { "kind": "h3", "text": "Quando è utile il teorema di Pitagora?" },
          { "kind": "p", "text": "Trova il suo posto quando manca un lato o una misura va verificata: si conoscono solo un cateto e l'ipotenusa, il lato mancante va trovato prima del passo dell'area, un'ipotenusa calcolata va verificata, o una misura di cantiere va confermata sul posto. Per un calcolo dedicato di un lato mancante, la calcolatrice dei lati del triangolo rettangolo gestisce quel passo, e il suo risultato può alimentare direttamente la formula dell'area dai cateti." }
        ]
      },
      "sec-missing-leg": {
        "h2": "Come trovare un cateto mancante quando l'area del triangolo è nota",
        "blocks": [
          { "kind": "p", "text": "La formula dell'area si legge in entrambi i sensi. Partite da [[K=\\frac{ab}{2}]]. Moltiplicate entrambi i membri per 2: [[2K=ab]]. Dividete per [[a]]: [[[\\boxed{b=\\frac{2K}{a}}]]] Analogamente, [[[\\boxed{a=\\frac{2K}{b}}]]] La stessa relazione, riarrangiata, recupera il cateto sconosciuto." },
          { "kind": "h3", "text": "Esempio svolto" },
          { "kind": "p", "text": "Supponete [[K=24\\text{ cm}^2]] e [[a=6\\text{ cm}]]. Allora [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] Le unità restano coerenti: centimetri quadrati divisi per centimetri danno centimetri. Questo uso inverso è comodo per verificare un'area dichiarata o recuperare una dimensione dai progetti, ma notate che si tratta di un riarrangiamento didattico, non di una modalità di input aggiuntiva nella calcolatrice qui sopra, che prende comunque i due cateti." }
        ]
      },
      "sec-scaling": {
        "h2": "Come la modifica dei due cateti influisce sull'area?",
        "blocks": [
          { "kind": "p", "text": "Poiché [[K=\\frac{ab}{2}]] è un prodotto, allungare i cateti allunga l'area in modi prevedibili. Vale la pena conoscere gli schemi qui sotto prima di ridimensionare qualsiasi progetto triangolare." },
          { "kind": "h3", "text": "Cosa succede quando un cateto raddoppia?" },
          { "kind": "p", "text": "Tenete [[a]] fisso e raddoppiate [[b]]. Allora [[K_1=\\frac{ab}{2}]] diventa [[K_2=\\frac{a(2b)}{2}]], quindi [[[\\boxed{K_2=2K_1}]]] Raddoppiare un solo cateto raddoppia l'area. Una verifica concreta: il triangolo di 3 per 4 ha [[K=6]]; allungare un cateto a 3 per 8 dà [[K=12]]." },
          { "kind": "h3", "text": "Cosa succede quando entrambi i cateti raddoppiano?" },
          { "kind": "p", "text": "Ora raddoppiate entrambi: [[K_2=\\frac{(2a)(2b)}{2}]], che si semplifica in [[[\\boxed{K_2=4K_1}]]] Raddoppiare entrambe le dimensioni perpendicolari rende l'area quattro volte più grande, non due. Il triangolo di 3 per 4 ([[K=6]]) ridimensionato a 6 per 8 dà [[K=24]], esattamente quattro volte l'originale." },
          { "kind": "h3", "text": "Cosa succede quando entrambi i cateti vengono ridimensionati?" },
          { "kind": "p", "text": "Moltiplicate ciascun cateto per un fattore di scala [[k]]: [[K_2=\\frac{(ka)(kb)}{2}]], quindi [[[\\boxed{K_2=k^2K_1}]]] L'area cresce con il quadrato del fattore di scala. Esempio pratico: ridimensionate il triangolo di 6 per 8 di 1.5 per ottenere 9 per 12. Allora [[K=\\frac{9\\times12}{2}=54]], e [[24\\times1.5^2=24\\times2.25=54]]. È per questo che le stime dei materiali saltano più in fretta delle dimensioni lineari: raddoppiate ogni lunghezza e servono quattro volte più lamiera." },
          { "kind": "h3", "text": "Due triangoli rettangoli diversi possono avere la stessa area?" },
          { "kind": "p", "text": "Sì. Confrontate il triangolo 1, [[a=3]], [[b=4]]: [[K=\\frac{3\\times4}{2}=6]]. Triangolo 2, [[a=2]], [[b=6]]: [[K=\\frac{2\\times6}{2}=6]]. Forme diverse racchiudono la stessa area ogni volta che il prodotto dei loro cateti è uguale. Un triangolo corto e largo e uno alto e stretto possono coprire una superficie identica, cosa che conta quando si adattano pannelli in spazi diversi." }
        ],
        "imgAlt": "Due triangoli rettangoli, 3 per 4 e 2 per 6, mostrati fianco a fianco con area uguale di 6",
        "figcaption": "Proporzioni diverse, stessa area: entrambi i triangoli rettangoli racchiudono 6 unità quadrate."
      },
      "sec-general": {
        "h2": "Perché non si può usare la formula dei due cateti per ogni triangolo?",
        "blocks": [
          { "kind": "p", "text": "La formula [[K=\\frac{ab}{2}]] funziona perché i due cateti sono perpendicolari. Per un triangolo generico, due lunghezze di lati da sole non bastano: bisogna conoscere anche l'angolo compreso tra loro, o l'altezza corrispondente." },
          { "kind": "p", "text": "La regola generale è [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]], dove [[C]] è l'angolo compreso tra i lati [[a]] e [[b]]. Per un triangolo rettangolo, [[C=90^\\circ]] e [[\\sin(90^\\circ)=1]]. Quindi [[K=\\frac{ab\\times1}{2}]], che è [[[\\boxed{K=\\frac{ab}{2}}]]] La formula del triangolo rettangolo è la formula generale con il fattore seno uguale a 1. Per qualsiasi altro angolo il seno restringe il prodotto, ed è per questo che la formula dei cateti non va mai applicata a un triangolo non rettangolo: tratta silenziosamente [[\\sin(C)]] come uguale a 1 quando non lo è." }
        ]
      },
      "sec-units": {
        "h2": "Capire le unità nel calcolo dell'area di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "I due cateti devono condividere un'unità di lunghezza prima di applicare la formula. L'unità quadrata nella risposta deriva dalla moltiplicazione delle due unità di lunghezza, quindi unità coerenti sono ciò che mantiene il numero significativo." },
          { "kind": "h3", "text": "Perché il risultato usa unità quadrate" },
          { "kind": "p", "text": "L'area conta i quadrati unitari che coprono la superficie: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. L'unità è sempre l'unità di lunghezza al quadrato, perché il prodotto di due lunghezze è un conteggio di quadrati. Dichiarare un'area di 24 m è un errore di categoria: 24 m è una lunghezza, mentre 24 m² è una superficie." },
          { "kind": "h3", "text": "Convertire unità diverse prima di calcolare" },
          { "kind": "p", "text": "Prendete [[a=3\\text{ ft}]] e [[b=24\\text{ inches}]]. Convertite prima: [[24\\text{ inches}=2\\text{ ft}]]. Poi [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] Senza conversione, il prodotto grezzo 72 non ha un significato pulito: non è né piedi quadrati né pollici quadrati. Convertite prima, moltiplicate dopo, e l'unità della risposta segue automaticamente." },
          { "kind": "h3", "text": "Calcolare con misure decimali" },
          { "kind": "p", "text": "La stessa formula gestisce i decimali senza alcun cambiamento. Dati [[a=3.5]] e [[b=9.2]]: [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] Numeri interi, decimali e misure fini di officina passano tutti attraverso la stessa moltiplicazione seguita dal dimezzamento. Tenete i decimali che la misura giustifica e lasciate che la calcolatrice gestisca l'aritmetica." },
          { "kind": "h3", "text": "Perché evitare l'arrotondamento precoce" },
          { "kind": "p", "text": "Arrotondate gli input e l'errore viaggia attraverso la moltiplicazione fino alla risposta. Un cateto misurato come 9.2 non dovrebbe diventare 9 prima di moltiplicare; gli 0.2 persi per unità si accumulano nel prodotto. Mantenete la piena precisione nei passi intermedi e arrotondate solo il risultato finale, alla precisione che le misure giustificano. La precisione conservata presto è l'accuratezza consegnata alla fine." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo dell'area di un triangolo rettangolo dai cateti",
        "blocks": [
          { "kind": "p", "text": "Quasi ogni risposta sbagliata su questo argomento risale a un input mal etichettato piuttosto che a un'aritmetica sbagliata. I quindici errori qui sotto sono quelli che compaiono continuamente, ciascuno con la sua causa e la sua correzione." },
          { "kind": "h3", "text": "1. Usare l'ipotenusa invece di uno dei cateti" },
          { "kind": "p", "text": "L'ipotenusa è il lato più lungo e non forma mai l'angolo retto. Inserirla come cateto gonfia il prodotto: per esempio, trattare 10 come cateto con 8 dà 40 invece di 24. Correzione: trovate prima l'angolo retto; i due lati che lo toccano sono i cateti." },
          { "kind": "h3", "text": "2. Confondere i due cateti con gli altri lati" },
          { "kind": "p", "text": "In un disegno inclinato, qualsiasi lato può sembrare una base naturale. Le etichette [[a]] e [[b]] appartengono solo alla coppia perpendicolare. Correzione: individuate il contrassegno dell'angolo retto prima di assegnare le etichette, comunque il triangolo sia ruotato." },
          { "kind": "h3", "text": "3. Dimenticare che i cateti devono formare un angolo di 90 gradi" },
          { "kind": "p", "text": "Il prodotto dimezzato presuppone la perpendicolarità. Due lati che si incontrano a 80 o 100 gradi richiedono invece la formula generale del seno. Correzione: verificate che l'angolo sia retto prima di usare [[K=\\frac{ab}{2}]]." },
          { "kind": "h3", "text": "4. Dimenticare di dividere per due" },
          { "kind": "p", "text": "Il prodotto [[a\\times b]] da solo è l'area del rettangolo circoscritto, il doppio di quella del triangolo. Correzione: dimezzate il prodotto; il /2 fa parte della formula, non è facoltativo." },
          { "kind": "h3", "text": "5. Calcolare l'area del rettangolo invece di quella del triangolo" },
          { "kind": "p", "text": "Quarantotto è un'area valida per il rettangolo di 6 per 8, ma non per il triangolo al suo interno. Correzione: chiedetevi quale forma richiede la domanda, poi applicate il dimezzamento solo per il triangolo." },
          { "kind": "h3", "text": "6. Mescolare piedi e pollici" },
          { "kind": "p", "text": "Moltiplicare 3 ft per 24 in dà 72 di niente di pulito. Correzione: convertite entrambi a un'unità (24 in = 2 ft) prima di calcolare." },
          { "kind": "h3", "text": "7. Mescolare centimetri e metri" },
          { "kind": "p", "text": "La stessa trappola su scala metrica: 2 m per 30 cm devono prima diventare un'unità. Correzione: convertite (30 cm = 0.3 m), poi moltiplicate." },
          { "kind": "h3", "text": "8. Riportare il risultato in unità lineari" },
          { "kind": "p", "text": "Un'area di 24 m² non è 24 m. Correzione: scrivete l'unità al quadrato con il numero, ogni volta." },
          { "kind": "h3", "text": "9. Usare un solo cateto" },
          { "kind": "p", "text": "Un cateto è una lunghezza, non un'area; la formula ha bisogno della coppia. Inserire una sola misura non risponde a nulla. Correzione: misurate entrambi i lati perpendicolari." },
          { "kind": "h3", "text": "10. Trattare due lati qualsiasi di un triangolo rettangolo come perpendicolari" },
          { "kind": "p", "text": "Solo i cateti sono perpendicolari. Una coppia cateto-più-ipotenusa si incontra a un angolo acuto, quindi il loro prodotto dimezzato non è l'area. Correzione: verificate che entrambi i lati scelti tocchino l'angolo retto." },
          { "kind": "h3", "text": "11. Usare misure negative o nulle" },
          { "kind": "p", "text": "Le lunghezze sono positive. Lo zero riduce il triangolo a una linea senza area, e le lunghezze negative non hanno qui alcun significato geometrico. Correzione: misurate di nuovo; rifiutate gli input non positivi." },
          { "kind": "h3", "text": "12. Arrotondare gli input decimali troppo presto" },
          { "kind": "p", "text": "Arrotondare 9.2 a 9 prima di moltiplicare sposta la risposta da 16.1 verso il basso. Correzione: mantenete la piena precisione durante il calcolo e arrotondate solo il risultato finale." },
          { "kind": "h3", "text": "13. Presumere che l'ipotenusa sia richiesta" },
          { "kind": "p", "text": "Non lo è. [[K=\\frac{ab}{2}]] usa solo i cateti, e calcolare prima l'ipotenusa aggiunge un passo che non cambia nulla. Correzione: saltatela a meno che un altro calcolo ne abbia bisogno." },
          { "kind": "h3", "text": "14. Confondere perimetro con area" },
          { "kind": "p", "text": "Il perimetro somma i tre lati ([[a+b+c]]); l'area moltiplica due cateti e dimezza. Per 6-8-10, il perimetro è 24 mentre l'area è anch'essa 24, una coincidenza che causa vera confusione. Correzione: verificate se la domanda chiede la lunghezza del contorno o la superficie racchiusa." },
          { "kind": "h3", "text": "15. Applicare la formula del triangolo rettangolo a un triangolo non rettangolo" },
          { "kind": "p", "text": "Senza un angolo di 90 gradi, il prodotto ha bisogno del seno dell'angolo compreso. Usare [[K=\\frac{ab}{2}]] su un triangolo generico sovrastima l'area. Correzione: usate [[K=\\frac{ab\\sin(C)}{2}]] con l'angolo compreso reale." },
          { "kind": "h3", "text": "Sbagliato contro corretto: un esempio concreto" },
          { "kind": "p", "text": "Usate [[a=6]], [[b=8]]. Corretto: [[K=\\frac{6\\times8}{2}=24]]. Dimenticare scorrettamente di dividere per due: [[6\\times8=48]], che è l'area del rettangolo corrispondente, non del triangolo rettangolo. Usare scorrettamente l'ipotenusa 10 come se fosse un cateto perpendicolare: [[K=\\frac{10\\times8}{2}=40]], sbagliato perché 10 non è perpendicolare a 8. L'aritmetica sembra sicura in tutti e tre i casi; solo la geometria li distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare se l'area del vostro triangolo rettangolo è corretta",
        "blocks": [
          { "kind": "p", "text": "Sei controlli indipendenti, tutti dimostrati sul triangolo 6-8-10 ([[a=6]], [[b=8]], [[c=10]], [[K=24]]). L'accordo tra strade diverse è la prova più forte che una risposta sia giusta, nei compiti come nella misura pratica." },
          { "kind": "h3", "text": "Metodo 1: ricalcolare con la formula principale" },
          { "kind": "p", "text": "Eseguite [[K=\\frac{ab}{2}]] da capo: [[K=\\frac{6\\times8}{2}=24]]. Un secondo passaggio con i numeri reinseriti cattura refusi e cifre digitate male." },
          { "kind": "h3", "text": "Metodo 2: raddoppiare il triangolo per formare un rettangolo" },
          { "kind": "p", "text": "Il triangolo raddoppiato è un rettangolo di 6 per 8: [[K_{\\text{rectangle}}=6\\times8=48]], quindi [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. Se l'area raddoppiata non corrisponde a [[a\\times b]], l'aritmetica è scivolata da qualche parte." },
          { "kind": "h3", "text": "Metodo 3: verificare l'ipotenusa con il teorema di Pitagora" },
          { "kind": "p", "text": "Verificate [[c=\\sqrt{a^2+b^2}]]: [[c=\\sqrt{36+64}=10]]. Questo controlla l'identificazione dei lati dietro l'area; un'ipotenusa sbagliata significa che un lato è stato mal etichettato." },
          { "kind": "h3", "text": "Metodo 4: riarrangiare la formula dell'area" },
          { "kind": "p", "text": "Recuperate un input noto dalla risposta: [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. Ritrovare il cateto di partenza chiude il cerchio e conferma il passo della divisione." },
          { "kind": "h3", "text": "Metodo 5: controllare le unità di misura" },
          { "kind": "p", "text": "Entrambi i cateti devono usare la stessa unità di lunghezza, e la risposta deve usare quell'unità al quadrato. Unità mescolate o un'unità lineare sulla risposta segnalano un errore di impostazione prima ancora che i numeri vengano ricontrollati." },
          { "kind": "h3", "text": "Metodo 6: stimare il risultato" },
          { "kind": "p", "text": "Arrotondate a numeri comodi: 6 per 8 è vicino a 50, dimezzato vicino a 25. Una risposta di 24 sta proprio accanto alla stima; una risposta di 240 o 2.4 no. La stima cattura gli errori di virgola e di divisione che il ricalcolo esatto può ripetere." }
        ]
      },
      "sec-applications": {
        "h2": "L'area del triangolo rettangolo da due cateti nella pratica",
        "blocks": [
          { "kind": "p", "text": "Lo stesso schema a due input compare ovunque un angolo retto vada misurato. Un vetraio legge i due bordi perpendicolari di una finestra; un fabbro misura i cateti di una staffa grezza; un geometra riduce un angolo di lotto a due scostamenti perpendicolari. In ogni caso l'ipotenusa è la misura scomoda da prendere, e questa formula non la chiede mai." },
          { "kind": "p", "text": "I quattro pannelli qui sotto mostrano lo schema a scale diverse. Una finestra in vetro (6 m²) e una sezione di giardino (84 m²) usano la geometria 3-4-5 e 7-24-25 su scala metrica; un supporto per tetto (60 ft²) usa il triangolo 8-15-17; una piastra in acciaio (30 cm²) usa 5-12-13. Ogni pannello etichetta entrambi i cateti, il contrassegno dell'angolo retto e l'area risultante, così che il percorso dalla misura alla risposta resti visibile." }
        ],
        "imgAlt": "Quattro pannelli: finestra in vetro 6 m2, supporto per tetto 60 ft2, sezione di giardino 84 m2, piastra in acciaio 30 cm2",
        "figcaption": "Quattro usi reali: una finestra in vetro, un supporto per tetto, una sezione di giardino e una piastra in acciaio con le loro aree."
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": [
          { "kind": "p", "text": "Qui sotto trovate le risposte alle domande più comuni sul calcolo dell'area di un triangolo rettangolo dai suoi due cateti." }
        ]
      },
      "sec-related": {
        "h2": "Esplora le calcolatrici correlate per triangoli rettangoli",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatrici diverse." }
        ]
      },
      "sec-conclusion": {
        "h2": "Due misure, un prodotto dimezzato",
        "blocks": [
          { "kind": "p", "text": "Due lunghezze perpendicolari bastano. Moltiplicatele, dimezzate il prodotto, e la superficie racchiusa è indicata. La dimostrazione col rettangolo mostra perché il dimezzamento è esatto anziché convenzionale, il teorema di Pitagora verifica i lati dietro la risposta, e la formula riarrangiata recupera un cateto mancante quando l'area è già nota." },
          { "kind": "p", "text": "L'abitudine di lavoro è semplice: confermate l'angolo di 90 gradi, fate corrispondere le unità, tenete i decimali non arrotondati fino alla fine, e verificate tramite il rettangolo. Con queste abitudini, [[K=\\frac{ab}{2}]] è il calcolo d'area più affidabile della geometria." }
        ]
      }
    }
  }
};
