// perimeterGuideTranslations.b2fr.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for French (fr).
export const B2_FR = {
  "fr": {
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer le périmètre d'un triangle rectangle",
      "sec-geometry": "Qu'est-ce qu'un triangle rectangle ?",
      "sec-definition": "Qu'est-ce que le périmètre d'un triangle rectangle ?",
      "sec-howto": "Comment trouver le périmètre d'un triangle rectangle",
      "sec-examples": "Exemples détaillés du périmètre d'un triangle rectangle",
      "sec-missing": "Comment calculer le périmètre d'un triangle rectangle avec un côté manquant",
      "sec-applications": "Applications concrètes du périmètre d'un triangle rectangle",
      "sec-properties": "Propriétés particulières du périmètre d'un triangle rectangle",
      "sec-vs-area": "Quelle est la différence entre le périmètre et l'aire ?",
      "sec-semiperimeter": "Quelle est la relation entre le périmètre et le demi-périmètre ?",
      "sec-units": "Comprendre les unités de mesure dans les calculs de périmètre de triangle rectangle",
      "sec-mistakes": "Erreurs fréquentes dans le calcul du périmètre d'un triangle rectangle",
      "sec-verify": "Comment vérifier que le périmètre de votre triangle rectangle est correct",
      "sec-related": "Explorer les calculateurs de triangle rectangle associés",
      "sec-faq": "Questions fréquentes",
      "sec-conclusion": "Conclusion"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer le périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Prenons un triangle rectangle de côtés [[a=3]], [[b=4]] et [[c=5]]. Son périmètre est [[P=3+4+5]], soit [[[\\boxed{P=12\\text{ units}}]]]. Le nombre 12 donne la distance complète autour du contour triangulaire : parcourez les trois arêtes et vous avez voyagé 12 unités." },
          { "kind": "p", "text": "Cette calculatrice effectue exactement cette addition pour n'importe quel triangle rectangle. Vous entrez les deux cathètes et l'hypoténuse, et elle renvoie la longueur totale du contour avec le détail étape par étape et un schéma interactif. Trois longueurs de côtés sont nécessaires parce que le contour a trois arêtes, et l'hypoténuse doit être incluse : c'est l'une de ces trois arêtes même si elle ne touche jamais l'angle droit. Les deux cathètes forment le coin carré, et l'hypoténuse s'étend en face de lui pour fermer la forme." },
          { "kind": "p", "text": "Le périmètre est une mesure linéaire, pas une mesure d'aire. Il répond à « de quelle bordure ai-je besoin ? » plutôt qu'à « quelle surface y a-t-il à l'intérieur ? ». Cette distinction en fait le bon nombre chaque fois que vous estimez une clôture, une bordure, des cadres, du fil, de la corde ou des bordures de tissu autour d'une forme triangulaire rectangle." }
        ]
      },
      "sec-geometry": {
        "h2": "Qu'est-ce qu'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avant de commencer toute addition, les trois côtés doivent être nommés sans erreur. Les symboles ci-dessous restent fixes dans tout le guide, et la calculatrice utilise les mêmes noms." },
          { "kind": "h3", "text": "Définition d'un triangle rectangle" },
          { "kind": "p", "text": "Un triangle rectangle est un triangle contenant un angle intérieur mesurant exactement 90 degrés. Il a trois sommets, trois côtés, deux angles aigus et un angle droit, généralement marqué d'un petit carré. Les deux côtés qui forment l'angle droit sont les cathètes ; le côté opposé à l'angle droit est l'hypoténuse. Comme les angles de tout triangle totalisent 180 degrés, [[A+B+C=180^\\circ]], et avec [[C=90^\\circ]] il vient [[[\\boxed{A+B=90^\\circ}]]] : les deux angles aigus sont complémentaires, donc en connaître un détermine l'autre. La somme des angles compte pour identifier un triangle rectangle parce que c'est le test que les longueurs des côtés doivent passer : seul un véritable coin de 90 degrés produit la relation entre les côtés dont dépend le reste de ce guide." },
          { "kind": "h3", "text": "Que sont les deux cathètes ?" },
          { "kind": "p", "text": "La cathète [[a]] et la cathète [[b]] sont les deux côtés qui se rencontrent au sommet de l'angle droit, perpendiculaires entre eux. L'une ou l'autre peut être dessinée horizontale ou verticale selon l'orientation du triangle ; ce qui les définit, c'est le coin de 90 degrés qu'elles forment, pas leur direction sur la page. Elles diffèrent de l'hypoténuse par leur position et leur longueur : chaque cathète touche l'angle droit, et chaque cathète est plus courte que l'hypoténuse. Dans le travail sur le périmètre, leur rôle est simple : ce sont toutes deux des arêtes du contour, donc toutes deux entrent dans la somme." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit, toujours le côté le plus long du triangle. Elle ne forme jamais l'angle droit ; elle s'étend en face de lui, reliant les extrémités éloignées des deux cathètes. Elle diffère des cathètes par sa position et sa longueur : les cathètes se rencontrent à 90 degrés, tandis que l'hypoténuse rencontre chaque cathète selon un angle aigu. Elle complète le contour triangulaire, et c'est pourquoi elle doit être incluse dans les calculs de périmètre. Quand les deux cathètes sont connues, le théorème de Pythagore la retrouve : [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Comment identifier correctement les noms des côtés" },
          { "kind": "p", "text": "[[a]] et [[b]] sont les deux côtés qui se rencontrent à 90 degrés, et [[c]] est opposée à l'angle droit. Dans un triangle rectangle non dégénéré, [[c]] est le côté le plus long. Le marqueur d'angle droit indique quel côté est [[c]] : c'est celui qui ne touche pas ce sommet. Un rapide contrôle d'ordre aide : triez les trois nombres, et le plus grand doit jouer le rôle de [[c]]. Si le côté le plus long n'est pas opposé au coin carré, les noms sont faux, et tout calcul construit dessus sera faux aussi." },
          { "kind": "h3", "text": "La formule du périmètre fonctionne-t-elle seulement pour les triangles rectangles ?" },
          { "kind": "p", "text": "Il y a ici une distinction mathématique importante. La formule [[P=a+b+c]] fonctionne pour tout triangle, rectangle ou non : tout contour à trois côtés s'additionne de la même façon. Ce que la condition d'angle droit ajoute, c'est la relation particulière [[a^2+b^2=c^2]], utile pour trouver les côtés manquants et pour vérifier si les mesures décrivent bien un triangle rectangle. La formule du périmètre est universelle ; la relation pythagoricienne est le bonus du triangle rectangle." }
        ],
        "imgAlt": "Triangle rectangle ABC : cathètes a et b, hypoténuse c, angle droit en C, contour du périmètre mis en évidence",
        "figcaption": "Triangle ABC : les cathètes a et b se rencontrent à l'angle droit C, l'hypoténuse c ferme le contour, et P = a + b + c parcourt les trois arêtes."
      },
      "sec-definition": {
        "h2": "Qu'est-ce que le périmètre d'un triangle rectangle ?",
        "blocks": [
          { "kind": "h3", "text": "Définition du périmètre" },
          { "kind": "p", "text": "Le périmètre est la distance totale autour du contour extérieur d'une forme bidimensionnelle. Pour un triangle, c'est la somme des longueurs de ses trois côtés : [[[\\boxed{P=a+b+c}]]]. Les trois côtés doivent être inclus parce que le contour n'est pas complet tant que chaque arête n'a pas été comptée. En oublier un ne donne pas un périmètre plus court ; cela donne une quantité différente et fausse." },
          { "kind": "h3", "text": "Pourquoi l'hypoténuse compte-t-elle dans le périmètre ?" },
          { "kind": "p", "text": "Le périmètre mesure le contour extérieur complet, et l'hypoténuse n'est pas une mesure facultative ni intérieure. C'est l'une des trois arêtes extérieures. Prenons [[a=3]], [[b=4]], [[c=5]]. Le calcul incorrect [[3+4=7]] ne compte que les deux cathètes, les côtés du coin carré. Le calcul correct [[3+4+5=12]] parcourt le triangle entier et revient au point de départ. La valeur 7 est la longueur combinée des deux cathètes, pas le périmètre complet, parce que le chemin de l'extrémité de la cathète [[b]] jusqu'au début de la cathète [[a]] passe le long de l'hypoténuse." },
          { "kind": "h3", "text": "Comment fonctionne la formule du périmètre ?" },
          { "kind": "p", "text": "La formule se décompose en trois parties. Premier côté : [[a]]. Deuxième côté : [[b]]. Troisième côté : [[c]]. Combinés : [[P=a+b+c]]. L'addition suffit parce que le périmètre est un total de longueurs, et les longueurs le long d'un même chemin s'additionnent simplement. Aucune division requise, aucun carré, aucune trigonométrie : la formule est l'utilisation la plus simple possible de la définition du contour." },
          { "kind": "h3", "text": "Que représente le périmètre dans la vie réelle ?" },
          { "kind": "p", "text": "Le périmètre est la longueur totale du contour : le matériau nécessaire pour faire une fois le tour d'un objet. C'est donc le nombre qui se cache derrière les mesures de bords, les dimensions de cadres, les longueurs de bordures, les besoins en clôture, les garnitures et moulures, et les longueurs de corde et de fil. Mesurer le contour extérieur est un travail différent de mesurer la surface enfermée dans le triangle. Clôturer un jardin triangulaire exige le périmètre ; recouvrir le même jardin de gazon exige l'aire. Confondre les deux fait acheter le mauvais matériau." }
        ]
      },
      "sec-howto": {
        "h2": "Comment trouver le périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le calcul suit une séquence claire. Chaque étape a un but : identifier, vérifier, substituer, additionner et contrôler. Le triangle 3-4-5 illustre chaque étape." },
          { "kind": "p", "text": "<strong>Étape 1 : Identifiez les trois côtés.</strong> Rassemblez les mesures [[a=3]], [[b=4]], [[c=5]]. Cette étape collecte les données brutes avant tout calcul." },
          { "kind": "p", "text": "<strong>Étape 2 : Identifiez les deux cathètes perpendiculaires.</strong> Confirmez que 3 et 4 sont les cathètes, les côtés formant le coin de 90 degrés. Cela attribue à [[a]] et [[b]] leurs rôles corrects." },
          { "kind": "p", "text": "<strong>Étape 3 : Identifiez l'hypoténuse opposée à l'angle droit.</strong> Confirmez que 5 est l'hypoténuse : c'est le côté le plus long et il est opposé au coin carré. Cela évite l'erreur de nommage la plus fréquente." },
          { "kind": "p", "text": "<strong>Étape 4 : Confirmez que les trois mesures utilisent des unités compatibles.</strong> Les trois sont ici de simples unités, donc aucune conversion n'est nécessaire. Cette étape protège contre l'addition de mètres et de pieds." },
          { "kind": "p", "text": "<strong>Étape 5 : Écrivez la formule.</strong> [[P=a+b+c]]. L'écrire garde la structure visible pendant la substitution." },
          { "kind": "p", "text": "<strong>Étape 6 : Substituez les mesures connues.</strong> [[P=3+4+5]]. Chaque symbole est remplacé par son nombre." },
          { "kind": "p", "text": "<strong>Étape 7 : Additionnez les trois valeurs.</strong> [[P=12]]. Une addition est tout le calcul." },
          { "kind": "p", "text": "<strong>Étape 8 : Attachez la bonne unité de mesure linéaire.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Le périmètre est une longueur, donc il prend des unités linéaires, jamais des unités carrées." },
          { "kind": "p", "text": "<strong>Étape 9 : Vérifiez le résultat.</strong> Contrôlez [[3^2+4^2=5^2]] : [[9+16=25]]. Les côtés satisfont le théorème de Pythagore, donc le triangle est bien rectangle et le périmètre est fiable." },
          { "kind": "h3", "text": "Pourquoi est-il important d'identifier correctement les côtés ?" },
          { "kind": "p", "text": "Un mauvais nommage affecte tout ce qui suit. La vérification mathématique échoue quand l'hypoténuse est mal nommée, parce que le contrôle pythagoricien attend que [[c]] soit le côté le plus long. Les calculs de côté manquant utilisent des formules différentes pour une cathète manquante et pour une hypoténuse manquante, donc un nom interverti applique la mauvaise. Les entrées de la calculatrice sont associées à [[a]], [[b]] et [[c]], donc des valeurs interverties produisent une réponse d'allure plausible mais fausse. La visualisation interactive du triangle paraîtra aussi déformée quand une valeur de cathète occupe la case de l'hypoténuse. Bien nommer une fois protège chaque étape suivante." },
          { "kind": "h3", "text": "Puis-je calculer le périmètre sans connaître l'hypoténuse ?" },
          { "kind": "p", "text": "Oui, avec d'abord une étape supplémentaire. Si les deux cathètes sont connues, l'hypoténuse peut être trouvée avec le théorème de Pythagore : [[c=\\sqrt{a^2+b^2}]]. Une fois [[c]] connue, le périmètre suit par une simple addition. Cela ne signifie pas que la calculatrice de périmètre existante accepte seulement deux côtés : la calculatrice a besoin des trois entrées, donc le côté manquant doit être calculé à la main (ou avec la calculatrice de côté) avant de saisir les valeurs." }
        ]
      },
      "sec-examples": {
        "h2": "Exemples détaillés du périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Les quatre exemples ci-dessous conservent les cas résolus existants et étoffent leurs explications. Chacun substitue, additionne, puis vérifie par le théorème de Pythagore." },
          { "kind": "h3", "text": "Exemple 1 : Triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Donnés : [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formule : [[P=a+b+c]]" },
          { "kind": "p", "text": "Substitution : [[P=3+4+5]]" },
          { "kind": "p", "text": "Addition : [[P=12]]" },
          { "kind": "p", "text": "Réponse finale : [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Vérification : [[3^2+4^2=5^2]], soit [[9+16=25]]. Les mesures satisfont le théorème de Pythagore, donc elles forment un triangle rectangle : les deux petits carrés construits sur les cathètes remplissent exactement le carré construit sur l'hypoténuse." },
          { "kind": "h3", "text": "Exemple 2 : Triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Donnés : [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Substitution : [[P=5+12+13]]" },
          { "kind": "p", "text": "Réponse finale : [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Vérification : [[5^2+12^2=13^2]], soit [[25+144=169]]. L'égalité confirme un triangle rectangle valide." },
          { "kind": "h3", "text": "Exemple 3 : Triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Donnés : [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Substitution : [[P=8+15+17]]" },
          { "kind": "p", "text": "Réponse finale : [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Vérification : [[8^2+15^2=17^2]], soit [[64+225=289]]. Là encore les carrés s'équilibrent, confirmant l'angle droit." },
          { "kind": "h3", "text": "Exemple 4 : Longueurs de côtés décimales" },
          { "kind": "p", "text": "Donnés : [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Substitution : [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Réponse finale : [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Vérification : [[2.5^2+6^2=6.5^2]], soit [[6.25+36=42.25]]. Les valeurs décimales ne changent pas la formule : l'addition fonctionne de la même façon pour les nombres entiers et les décimaux, et le calcul de vérification est identique." }
        ],
        "table": {
          "headers": ["Triangle", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre P", "Vérification"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Le tableau montre comment différentes longueurs de côtés produisent différentes mesures de contour tandis que le même rythme en deux temps, additionner puis vérifier, reste inchangé."]
      },
      "sec-missing": {
        "h2": "Comment calculer le périmètre d'un triangle rectangle avec un côté manquant",
        "blocks": [
          { "kind": "p", "text": "La calculatrice de périmètre existante exige les trois longueurs de côtés. Si un côté est inconnu, calculez-le d'abord avec le théorème de Pythagore, puis additionnez. Les trois cas ci-dessous couvrent toutes les possibilités." },
          { "kind": "h3", "text": "Cas 1 : Trouver l'hypoténuse manquante" },
          { "kind": "p", "text": "Quand les deux cathètes sont connues : [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Exemple : [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Calculez maintenant : [[P=6+8+10]], donc [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Cas 2 : Trouver une cathète manquante" },
          { "kind": "p", "text": "Quand l'hypoténuse [[c]] et la cathète [[a]] sont connues : [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Exemple : [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Calculez maintenant : [[P=5+12+13]], donc [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Cas 3 : Trouver l'autre cathète manquante" },
          { "kind": "p", "text": "Quand l'hypoténuse [[c]] et la cathète [[b]] sont connues : [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Exemple : [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Calculez maintenant : [[P=8+15+17]], donc [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Pourquoi faut-il d'abord trouver le côté manquant ?" },
          { "kind": "p", "text": "Le périmètre représente le contour complet. Ignorer un côté inconnu produit un résultat incomplet : deux côtés connus donnent un chemin partiel, pas le périmètre. Ces calculs de côté manquant sont des méthodes mathématiques d'appui, pas des modes supplémentaires de la calculatrice de périmètre existante. Quand vous ne connaissez que deux côtés, le calculateur de côté de triangle rectangle retrouve le troisième, puis la calculatrice de périmètre termine le travail." }
        ],
        "imgAlt": "Triangle rectangle de cathètes 6 et 8, hypoténuse 10 par Pythagore, puis périmètre 24",
        "figcaption": "Les cathètes 6 et 8 donnent c = 10 par le théorème de Pythagore, puis P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Applications concrètes du périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Douze exemples réalistes entièrement résolus suivent. Chacun nomme une situation, donne trois mesures de côtés, montre l'addition et explique ce que le résultat aide à estimer. Traitez chacun comme un modèle géométrique triangulaire rectangle simplifié : les objets réels sont rarement des triangles parfaits, donc les marges de matériau, les chutes de découpe et la vérification de construction se situent hors du nombre du périmètre lui-même." },
          { "kind": "h3", "text": "Exemple 1 : Cadre de fenêtre vitrée triangulaire" },
          { "kind": "p", "text": "Un cadre de fenêtre triangulaire a [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Alors [[P=3+4+5]], donc [[[\\boxed{P=12\\text{ m}}]]]. Les 12 mètres représentent la longueur totale autour du contour triangulaire de la fenêtre, la longueur de profilé de cadre à découper. Les joints du cadre et les marges de découpe peuvent exiger du matériau supplémentaire au-delà des 12 mètres." },
          { "kind": "h3", "text": "Exemple 2 : Bordure de rive de toit" },
          { "kind": "p", "text": "Une section de toit triangulaire rectangle a [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Alors [[P=6+8+10]], donc [[[\\boxed{P=24\\text{ ft}}]]]. Le périmètre estime la bordure autour du contour triangulaire de l'extrémité du toit. Les coins et le chevauchement à l'avant-toit s'ajoutent à la longueur à acheter." },
          { "kind": "h3", "text": "Exemple 3 : Clôture de jardin triangulaire" },
          { "kind": "p", "text": "Une section de jardin triangulaire a [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Alors [[P=5+12+13]], donc [[[\\boxed{P=30\\text{ m}}]]]. La longueur totale du contour estime la clôture nécessaire autour du jardin. Les portails, les poteaux, les chevauchements et les marges d'installation se comptent séparément des 30 mètres de ligne de clôture." },
          { "kind": "h3", "text": "Exemple 4 : Support en acier" },
          { "kind": "p", "text": "Un support métallique triangulaire rectangle a [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Alors [[P=8+15+17]], donc [[[\\boxed{P=40\\text{ cm}}]]]. Le périmètre décrit le bord extérieur du support et aide à estimer le matériau de protection des chants. Il ne détermine pas la résistance structurelle, qui dépend de l'épaisseur, de l'alliage et des chemins de charge plutôt que de la longueur du bord." },
          { "kind": "h3", "text": "Exemple 5 : Bannière en tissu triangulaire" },
          { "kind": "p", "text": "Une bannière en tissu a [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Alors [[P=9+12+15]], donc [[[\\boxed{P=36\\text{ ft}}]]]. Le périmètre estime la longueur totale de bord nécessitant un ourlet ou un biais. Le tissu supplémentaire pour les coutures et les plis est exclu des 36 pieds." },
          { "kind": "h3", "text": "Exemple 6 : Cadre de signalisation triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation triangulaire rectangle a [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Alors [[P=12+16+20]], donc [[[\\boxed{P=48\\text{ in}}]]]. Le périmètre estime le cadre ou la bordure décorative autour du panneau." },
          { "kind": "h3", "text": "Exemple 7 : Bordure d'aménagement paysager" },
          { "kind": "p", "text": "Une section d'aménagement paysager triangulaire rectangle a [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Alors [[P=7+24+25]], donc [[[\\boxed{P=56\\text{ m}}]]]. Ce résultat estime la longueur complète de bordure d'aménagement pour la section, avant les chutes et le chevauchement des joints." },
          { "kind": "h3", "text": "Exemple 8 : Cadre de support de panneau solaire" },
          { "kind": "p", "text": "Un petit cadre de support triangulaire rectangle a [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Alors [[P=9+40+41]], donc [[[\\boxed{P=90\\text{ cm}}]]]. Le périmètre décrit le contour triangulaire complet du cadre." },
          { "kind": "h3", "text": "Exemple 9 : Bordure de store triangulaire" },
          { "kind": "p", "text": "Une section de store triangulaire rectangle a [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Alors [[P=15+20+25]], donc [[[\\boxed{P=60\\text{ ft}}]]]. Le périmètre estime le matériau de bordure nécessaire autour de la toile, hors quincaillerie de fixation." },
          { "kind": "h3", "text": "Exemple 10 : Bordure de rive d'entrepôt" },
          { "kind": "p", "text": "Une section d'extrémité de toit d'entrepôt simplifiée a [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Alors [[P=11+60+61]], donc [[[\\boxed{P=132\\text{ ft}}]]]. Le périmètre total représente les trois arêtes extérieures de la section triangulaire modélisée." },
          { "kind": "h3", "text": "Exemple 11 : Panneau de fabrication industriel" },
          { "kind": "p", "text": "Un panneau de fabrication triangulaire rectangle a [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Alors [[P=13+84+85]], donc [[[\\boxed{P=182\\text{ cm}}]]]. Le résultat aide à estimer les profilés de protection des chants ou le matériau de bordure pour le panneau." },
          { "kind": "h3", "text": "Exemple 12 : Gousset de support en contreplaqué" },
          { "kind": "p", "text": "Une plaque de support en contreplaqué triangulaire rectangle a [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Alors [[P=28+45+53]], donc [[[\\boxed{P=126\\text{ cm}}]]]. Le périmètre représente le bord extérieur complet de la plaque de contreplaqué." }
        ],
        "table": {
          "headers": ["Application pratique", "Cathète a", "Cathète b", "Hypoténuse c", "Périmètre P", "Unité"],
          "rows": [
            ["Cadre de fenêtre vitrée triangulaire", "3", "4", "5", "12", "m"],
            ["Bordure de rive de toit", "6", "8", "10", "24", "ft"],
            ["Clôture de jardin triangulaire", "5", "12", "13", "30", "m"],
            ["Support en acier", "8", "15", "17", "40", "cm"],
            ["Bannière en tissu triangulaire", "9", "12", "15", "36", "ft"],
            ["Cadre de signalisation triangulaire", "12", "16", "20", "48", "in"],
            ["Bordure d'aménagement paysager", "7", "24", "25", "56", "m"],
            ["Cadre de support de panneau solaire", "9", "40", "41", "90", "cm"],
            ["Bordure de store triangulaire", "15", "20", "25", "60", "ft"],
            ["Bordure de rive d'entrepôt", "11", "60", "61", "132", "ft"],
            ["Panneau de fabrication industriel", "13", "84", "85", "182", "cm"],
            ["Gousset de support en contreplaqué", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["N'oubliez pas les limites pratiques : des marges de matériau peuvent être nécessaires, les chutes de découpe ne sont pas incluses, les joints de cadre peuvent ajouter des besoins en matériau, les portails et les ouvertures affectent les quantités de clôture, les mesures réelles de construction doivent être vérifiées, et le seul périmètre ne détermine ni la résistance structurelle ni la capacité de charge."],
        "imgAlt": "Quatre exemples de périmètre : fenêtre, toit, jardin et support en acier",
        "figcaption": "Fenêtre, toit, jardin et support : chaque panneau trace le contour triangulaire et son périmètre."
      },
      "sec-properties": {
        "h2": "Propriétés particulières du périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Au-delà de la simple addition, le périmètre d'un triangle rectangle obéit à plusieurs inégalités strictes. Elles servent aussi de contrôles rapides de bon sens pour tout résultat calculé." },
          { "kind": "h3", "text": "Le périmètre est supérieur au double de l'hypoténuse" },
          { "kind": "p", "text": "Pour tout triangle valide, l'inégalité triangulaire donne [[a+b>c]]. Ajoutez [[c]] des deux côtés : [[a+b+c>2c]]. Donc [[[\\boxed{P>2c}]]]. En langage simple : les deux cathètes réunies sont toujours plus longues que l'hypoténuse, donc ajouter l'hypoténuse des deux côtés garde l'inégalité dans le même sens. Pour le triangle 3-4-5, [[P=12]] et [[2c=10]], et 12 est bien supérieur à 10." },
          { "kind": "h3", "text": "Le périmètre est inférieur au triple de l'hypoténuse" },
          { "kind": "p", "text": "Comme l'hypoténuse est plus longue que chaque cathète, [[a<c]] et [[b<c]]. Donc [[a+b<2c]]. Ajouter [[c]] donne [[[\\boxed{P<3c}]]]. C'est un contrôle rapide utile : tout périmètre annoncé égal ou supérieur à trois fois l'hypoténuse ne peut appartenir à un triangle rectangle valide. Pour le triangle 3-4-5, [[3c=15]], et 12 est nettement en dessous." },
          { "kind": "h3", "text": "Périmètre d'un triangle 45-45-90" },
          { "kind": "p", "text": "Dans un triangle 45-45-90, les deux cathètes ont la même longueur. Soit [[k]] chaque cathète. L'hypoténuse est [[c=k\\sqrt{2}]]. Donc [[P=k+k+k\\sqrt{2}]], soit [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Avec [[k=5]], le périmètre est [[5(2+\\sqrt{2})\\approx17.07]] : deux cathètes de 5 plus une hypoténuse d'environ 7,07." },
          { "kind": "h3", "text": "Périmètre d'un triangle 30-60-90" },
          { "kind": "p", "text": "Si la cathète la plus courte est [[k]], alors la cathète la plus longue est [[k\\sqrt{3}]] et l'hypoténuse est [[2k]]. Donc [[P=k+k\\sqrt{3}+2k]], soit [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Avec [[k=4]], les côtés sont 4, environ 6,93 et 8, ce qui donne un périmètre d'environ 18,93." },
          { "kind": "h3", "text": "Quel triangle rectangle a le plus grand périmètre pour une hypoténuse fixée ?" },
          { "kind": "p", "text": "Intuitivement, quand l'hypoténuse reste fixée, le périmètre grandit à mesure que les deux cathètes grandissent ensemble, et il est le plus grand quand aucune cathète n'est sacrifiée : quand les deux cathètes sont égales. C'est le triangle 45-45-90. L'énoncé précis utilise l'inégalité [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Comme [[a^2+b^2=c^2]], il vient [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], avec égalité exactement quand [[a=b]]. Donc parmi tous les triangles rectangles partageant une même hypoténuse, le triangle rectangle isocèle remporte le concours du périmètre." }
        ]
      },
      "sec-vs-area": {
        "h2": "Quelle est la différence entre le périmètre et l'aire ?",
        "blocks": [
          { "kind": "p", "text": "Le périmètre et l'aire décrivent tous deux un triangle, mais ils répondent à des questions différentes. Cette section trace la ligne avec soin." },
          { "kind": "h3", "text": "Le périmètre mesure le contour extérieur" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mesure la distance totale autour du triangle. Ses unités sont linéaires : mètres, centimètres, millimètres, pieds, pouces. Elle indique la quantité de matériau qui trace le bord." },
          { "kind": "h3", "text": "L'aire mesure la surface enfermée" },
          { "kind": "p", "text": "Pour un triangle rectangle, [[[\\boxed{K=\\frac{ab}{2}}]]]. Les deux cathètes perpendiculaires servent de base et de hauteur, donc aucune hypoténuse n'apparaît dans la formule. L'aire utilise des unités carrées : mètres carrés, centimètres carrés, pieds carrés, pouces carrés. Elle indique la surface qui se trouve à l'intérieur du contour." },
          { "kind": "h3", "text": "Comparaison résolue avec un triangle 3-4-5" },
          { "kind": "p", "text": "Périmètre : [[P=3+4+5]], donc [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Aire : [[K=\\frac{3\\times4}{2}]], donc [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Les nombres 12 et 6 décrivent des propriétés complètement différentes du même triangle : l'un est la promenade autour, l'autre est le terrain qu'il couvre." },
          { "kind": "h3", "text": "Deux triangles rectangles peuvent-ils avoir le même périmètre mais des aires différentes ?" },
          { "kind": "p", "text": "Oui. Le seul périmètre ne détermine pas l'aire de façon unique ; la forme et les proportions du triangle affectent sa surface enfermée. Un triangle 3-4-5 a un périmètre de 12 et une aire de 6. Un triangle 45-45-90 peut aussi avoir un périmètre de 12 : d'après [[P=k(2+\\sqrt{2})=12]], la cathète est [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], et son aire est [[K=\\frac{k^2}{2}\\approx6.18]] unités carrées, légèrement supérieure à 6. Même longueur de contour, intérieur différent : la forme isocèle enferme un peu plus." }
        ],
        "imgAlt": "Triangle 3-4-5 avec contour P = 12 mis en évidence et aire intérieure K = 6 ombrée",
        "figcaption": "Le bord mis en évidence est le périmètre ; l'intérieur ombré est l'aire. Deux mesures différentes."
      },
      "sec-semiperimeter": {
        "h2": "Quelle est la relation entre le périmètre et le demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre est la moitié du périmètre complet : [[[\\boxed{s=\\frac{P}{2}}]]]. Pour un triangle rectangle, c'est [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Il reste une mesure d'appui sur cette page, pas un second sujet principal." },
          { "kind": "h3", "text": "Exemple numérique" },
          { "kind": "p", "text": "Prenons [[a=3,\\;b=4,\\;c=5]]. Le périmètre est [[P=12]], donc le demi-périmètre est [[s=\\frac{12}{2}=6]]. Les deux sont des mesures linéaires dans les mêmes unités ; l'un est simplement la moitié de l'autre." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre est-il utile ?" },
          { "kind": "p", "text": "Le demi-périmètre est une mesure intermédiaire importante en géométrie du triangle. Il apparaît dans la formule de Héron pour l'aire, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], et dans la relation du rayon inscrit [[K=rs]], et il simplifie plusieurs démonstrations de géométrie avancée. Chaque fois qu'une formule demande [[s]], calculez d'abord le périmètre puis divisez-le par deux. Pour un outil dédié, utilisez le calculateur de demi-périmètre de triangle rectangle." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités de mesure dans les calculs de périmètre de triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le périmètre fonctionne dans n'importe quelle unité de longueur : mètres, centimètres, millimètres, kilomètres, pieds, pouces, yards ou miles. Le nombre change avec l'unité, mais le triangle ne change pas." },
          { "kind": "h3", "text": "Pourquoi les trois mesures de côtés doivent-elles utiliser des unités compatibles ?" },
          { "kind": "p", "text": "Le périmètre se calcule par addition, et l'addition n'a de sens qu'entre quantités semblables. Ajouter 3 pieds à 48 pouces sans conversion mélange deux échelles et produit un total sans signification. Convertissez d'abord chaque côté en une unité commune, puis additionnez." },
          { "kind": "h3", "text": "Exemple résolu de conversion d'unités" },
          { "kind": "p", "text": "Donnés [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convertissez les pouces en pieds : [[48\\text{ inches}=4\\text{ ft}]]. Les trois côtés sont maintenant en pieds, donc [[P=3+4+5]] et [[[\\boxed{P=12\\text{ ft}}]]]. La conversion doit avoir lieu avant l'addition, pas après." },
          { "kind": "h3", "text": "Comment les sélecteurs d'unités de la calculatrice aident" },
          { "kind": "p", "text": "Chacune des trois entrées de cette page porte son propre sélecteur d'unité. Quand vous choisissez des unités différentes pour des côtés différents, la calculatrice convertit chaque entrée dans l'unité commune automatiquement avant d'additionner : elle lit l'unité choisie pour le premier côté et met les deux autres à l'échelle pour correspondre, en utilisant des rapports de longueur exacts (1 pouce = 0,0254 m, 1 pied = 0,3048 m, et ainsi de suite). Le résultat est indiqué dans cette unité commune. Vous pouvez toujours convertir à la main comme montré ci-dessus, mais les sélecteurs suppriment le calcul." },
          { "kind": "h3", "text": "Travailler avec des mesures décimales" },
          { "kind": "p", "text": "Prenons [[a=2.5,\\;b=6,\\;c=6.5]]. Alors [[P=2.5+6+6.5]], donc [[[\\boxed{P=15\\text{ units}}]]]. Les valeurs décimales s'additionnent exactement comme les nombres entiers ; les virgules décimales s'alignent simplement dans la somme." },
          { "kind": "h3", "text": "Travailler avec des longueurs de côtés irrationnelles" },
          { "kind": "p", "text": "Prenons un triangle avec [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Alors [[P=1+1+\\sqrt{2}]], donc [[[\\boxed{P=2+\\sqrt{2}}]]], environ [[P\\approx3.4142]]. Garder la forme radicale exacte est utile dans les problèmes mathématiques parce qu'elle préserve toute la précision ; l'approximation décimale sert au compte rendu final." },
          { "kind": "h3", "text": "Pourquoi faut-il éviter d'arrondir trop tôt ?" },
          { "kind": "p", "text": "Arrondir prématurément injecte de petites erreurs que l'addition finale conserve ensuite. Si un côté est irrationnel, comme [[\\sqrt{2}]], l'arrondir à 1,41 avant d'additionner rogne une partie de la vraie longueur, et avec plusieurs côtés de ce type l'erreur s'accumule. Gardez toute la précision pendant les calculs intermédiaires et n'arrondissez que le résultat final à l'exactitude que le problème exige." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul du périmètre d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Seize erreurs expliquent presque tous les périmètres faux. Chacune est expliquée avec sa cause et la bonne approche." },
          { "kind": "p", "text": "<strong>1. Oublier d'inclure l'hypoténuse.</strong> L'erreur la plus fréquente : additionner les deux cathètes et s'arrêter. Avec 3-4-5 cela donne 7 au lieu de 12. Additionnez toujours les trois côtés." },
          { "kind": "p", "text": "<strong>2. N'utiliser que les deux cathètes.</strong> Même cause racine que ci-dessus, souvent due à une mauvaise lecture de l'énoncé. Le contour a trois arêtes ; comptez-en trois." },
          { "kind": "p", "text": "<strong>3. Confondre le périmètre avec l'aire.</strong> Le périmètre est [[a+b+c]] en unités linéaires ; l'aire est [[ab/2]] en unités carrées. Lisez la question : « autour » signifie périmètre, « à l'intérieur » signifie aire." },
          { "kind": "p", "text": "<strong>4. Saisir l'hypoténuse comme une cathète.</strong> Mettre la plus grande valeur dans un champ de cathète casse la géométrie. La case de l'hypoténuse doit contenir le côté le plus long." },
          { "kind": "p", "text": "<strong>5. Choisir le mauvais côté comme hypoténuse.</strong> Si 4 est saisi comme [[c]] tandis que 5 est dans un champ de cathète, chaque contrôle échoue. Triez d'abord les valeurs : la plus grande est [[c]]." },
          { "kind": "p", "text": "<strong>6. Utiliser des mesures qui ne forment pas un triangle rectangle.</strong> Testez [[a^2+b^2=c^2]] avant de faire confiance à l'étiquette « triangle rectangle ». Si le test échoue, la formule du périmètre additionne toujours, mais le triangle n'est pas rectangle." },
          { "kind": "p", "text": "<strong>7. Mélanger centimètres et mètres.</strong> Ajouter 3 m à 40 cm ne donne ni 43 de quoi que ce soit. Convertissez d'abord en une seule unité." },
          { "kind": "p", "text": "<strong>8. Mélanger pieds et pouces.</strong> Le piège impérial classique. Convertissez les pouces en pieds (divisez par 12) avant d'additionner, ou laissez les sélecteurs d'unités le faire." },
          { "kind": "p", "text": "<strong>9. Indiquer le périmètre en unités carrées.</strong> Un périmètre de 12 cm carrés est une erreur de catégorie : le tour d'un triangle est une longueur, mesurée en cm, m, ft ou in." },
          { "kind": "p", "text": "<strong>10. Arrondir les mesures trop tôt.</strong> Arrondir [[\\sqrt{2}]] à 1,4 avant d'additionner accumule l'erreur. N'arrondissez que la réponse finale." },
          { "kind": "p", "text": "<strong>11. Oublier de calculer un côté manquant.</strong> Deux côtés connus ne font pas un périmètre. Retrouvez d'abord le troisième avec le théorème de Pythagore, puis additionnez." },
          { "kind": "p", "text": "<strong>12. Mal utiliser le théorème de Pythagore.</strong> La forme hypoténuse additionne les carrés ([[c=\\sqrt{a^2+b^2}]]) ; la forme cathète soustrait ([[b=\\sqrt{c^2-a^2}]]). Les intervertir invente un côté qui n'existe pas." },
          { "kind": "p", "text": "<strong>13. Saisir des longueurs de côtés négatives ou nulles.</strong> Les longueurs sont positives. Une entrée nulle ou négative ne décrit aucun triangle, et la calculatrice la refuse à juste titre." },
          { "kind": "p", "text": "<strong>14. Ignorer l'inégalité triangulaire.</strong> Si [[a+b\\leq c]], les trois longueurs ne peuvent pas former un triangle du tout. Vérifiez avant de calculer." },
          { "kind": "p", "text": "<strong>15. Prendre le demi-périmètre pour le périmètre complet.</strong> Diviser la somme par 2 donne [[s]], pas [[P]]. Pour 3-4-5, [[(3+4+5)/2=6]] est le demi-périmètre ; le périmètre est 12." },
          { "kind": "p", "text": "<strong>16. Supposer que le seul périmètre détermine l'aire du triangle.</strong> Comme l'a montré la comparaison 3-4-5 contre 45-45-90, des périmètres égaux peuvent cacher des aires différentes. Le périmètre fixe le contour, pas l'intérieur." },
          { "kind": "p", "text": "<strong>Faux contre juste, côte à côte.</strong> Donnés [[a=3,\\;b=4,\\;c=5]] : incorrect est [[P=3+4=7]], qui omet l'hypoténuse et ne mesure que les deux cathètes. Correct est [[P=3+4+5=12]]. Et [[(3+4+5)/2=6]] est le demi-périmètre, une quantité différente avec ses propres usages, pas le périmètre complet." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que le périmètre de votre triangle rectangle est correct",
        "blocks": [
          { "kind": "p", "text": "Sept contrôles indépendants attrapent presque toutes les erreurs. Le triangle 3-4-5 illustre chacun. Les contrôles indépendants comptent parce qu'ils échouent de façons différentes : quand deux méthodes sans rapport s'accordent, la réponse a gagné sa confiance, qu'elle serve pour un devoir, des dessins techniques ou la planification de matériaux." },
          { "kind": "p", "text": "<strong>Méthode 1 : Additionnez à nouveau les trois côtés.</strong> Recalculez [[P=a+b+c]] depuis zéro : [[3+4+5=12]]. Un second passage attrape les fautes de frappe et les erreurs de calcul." },
          { "kind": "p", "text": "<strong>Méthode 2 : Vérifiez la relation pythagoricienne.</strong> Contrôlez [[a^2+b^2=c^2]] : [[9+16=25]]. Cela confirme que les côtés forment un triangle rectangle, ce qui valide les noms de côtés dont dépend le périmètre." },
          { "kind": "p", "text": "<strong>Méthode 3 : Contrôlez l'hypoténuse.</strong> Confirmez [[c>a]] et [[c>b]] : 5 est supérieur à 3 et supérieur à 4. Si la prétendue hypoténuse n'est pas le côté le plus long, les noms sont faux." },
          { "kind": "p", "text": "<strong>Méthode 4 : Contrôlez l'inégalité triangulaire.</strong> Confirmez [[a+b>c]] : [[3+4=7>5]]. La somme de deux côtés quelconques doit dépasser le troisième, sinon aucun triangle n'existe." },
          { "kind": "p", "text": "<strong>Méthode 5 : Contrôlez les bornes du périmètre.</strong> Confirmez [[2c<P<3c]] : [[10<12<15]]. Ces bornes sont des contrôles mentaux rapides pour tout triangle rectangle valide." },
          { "kind": "p", "text": "<strong>Méthode 6 : Contrôlez les unités de mesure.</strong> Confirmez que les trois entrées partagent une même unité. Des unités mélangées invalident la somme même quand le calcul est parfait." },
          { "kind": "p", "text": "<strong>Méthode 7 : Comparez le résultat avec la visualisation interactive.</strong> Le schéma existant de cette page redessine le triangle à partir de vos entrées. Si un côté a été mal nommé ou une valeur mal tapée, l'image paraît fausse : une hypoténuse plus courte qu'une cathète, ou une forme qui ne se ferme pas. Faites confiance à l'image quand elle contredit le nombre, puis trouvez l'erreur de saisie." }
        ]
      },
      "sec-conclusion": {
        "h2": "Trois côtés, un contour, pas de raccourci",
        "blocks": [
          { "kind": "p", "text": "Le périmètre d'un triangle rectangle est l'idée la plus simple de cette page et la plus facile à rater par omission. La formule demande trois nombres parce que le contour a trois arêtes, et l'hypoténuse gagne sa place dans la somme comme l'arête qui ferme la forme. Tout le reste, la méthode étape par étape, la récupération du côté manquant, les inégalités, les contrôles de vérification, existe pour protéger cette unique addition contre les petites erreurs de nommage et d'unités qui produisent des réponses fausses d'allure plausible." },
          { "kind": "p", "text": "Utilisez la calculatrice de cette page chaque fois que les trois côtés sont mesurés, retrouvez un côté manquant par le théorème de Pythagore quand ce n'est pas le cas, et contrôlez le résultat contre les bornes 2c < P < 3c avant que le nombre entre dans une commande de matériaux. Quand la question porte sur la surface à l'intérieur du contour, la calculatrice d'aire attend ; quand elle porte sur la moitié du contour pour une formule plus profonde, la calculatrice de demi-périmètre prend le relais." }
        ]
      }
    },
    "relatedHeading": "Explorer les calculateurs de triangle rectangle associés",
    "relatedIntro": "Chacun de ces outils prolonge le calcul du périmètre dans une direction : côtés manquants, demi-périmètres, surfaces, mesures combinées, ou le théorème derrière tout cela.",
    "relatedItems": [
      "Calculateur de mesures de triangle rectangle",
      "Calculateur de demi-périmètre de triangle rectangle",
      "Calculateur de côté de triangle rectangle",
      "Calculateur d'aire de triangle rectangle",
      "Calculateur du théorème de Pythagore"
    ],
    "faqHeading": "Questions fréquentes",
    "faqs": [
      {
        "question": "Quelle est la formule du périmètre d'un triangle rectangle ?",
        "answer": "La formule est P = a + b + c, où a et b sont les deux cathètes formant l'angle de 90 degrés et c est l'hypoténuse, le côté le plus long. Additionnez les trois longueurs de côtés ; le résultat est la longueur totale du contour en unités linéaires."
      },
      {
        "question": "Comment calculer le périmètre d'un triangle rectangle ?",
        "answer": "Identifiez les deux cathètes et l'hypoténuse, confirmez que les trois utilisent la même unité, substituez dans P = a + b + c, et additionnez. Pour un triangle 3-4-5 : P = 3 + 4 + 5 = 12 unités. La calculatrice de cette page effectue les mêmes étapes et montre son travail."
      },
      {
        "question": "Pourquoi faut-il inclure l'hypoténuse ?",
        "answer": "L'hypoténuse est l'une des trois arêtes extérieures du triangle, donc le contour est incomplet sans elle. N'additionner que les deux cathètes d'un triangle 3-4-5 donne 7, qui est la longueur combinée des cathètes, pas le périmètre. Le tour complet du triangle est 3 + 4 + 5 = 12."
      },
      {
        "question": "Puis-je calculer le périmètre si un côté est manquant ?",
        "answer": "Oui, mais retrouvez d'abord le côté manquant avec le théorème de Pythagore. Avec des cathètes de 6 et 8, l'hypoténuse vaut sqrt(36 + 64) = 10, donc le périmètre est 6 + 8 + 10 = 24. Avec une hypoténuse de 13 et une cathète de 5, la cathète manquante vaut sqrt(169 - 25) = 12, donc le périmètre est 30."
      },
      {
        "question": "Comment trouver l'hypoténuse avant de calculer le périmètre ?",
        "answer": "Utilisez c = sqrt(a^2 + b^2) quand les deux cathètes sont connues. Pour des cathètes de 6 et 8 : c = sqrt(36 + 64) = sqrt(100) = 10. Une fois l'hypoténuse connue, additionnez les trois côtés pour obtenir le périmètre."
      },
      {
        "question": "La formule du périmètre est-elle différente pour un triangle rectangle ?",
        "answer": "Non. P = a + b + c fonctionne pour tout triangle. Ce qui est particulier au triangle rectangle, c'est la relation pythagoricienne a^2 + b^2 = c^2, qui permet de trouver un côté manquant ou de vérifier que les mesures forment bien un triangle rectangle."
      },
      {
        "question": "Quel est le périmètre d'un triangle rectangle 3-4-5 ?",
        "answer": "Le périmètre est 3 + 4 + 5 = 12 unités. Les côtés satisfont 9 + 16 = 25, confirmant l'angle droit. Les versions mises à l'échelle comme 6-8-10 ou 9-12-15 gardent la même forme avec des périmètres proportionnellement plus grands."
      },
      {
        "question": "Comment vérifier que trois côtés forment un triangle rectangle ?",
        "answer": "Vérifiez que a^2 + b^2 = c^2 avec c comme côté le plus long. Pour 3, 4, 5 : 9 + 16 = 25, donc le triangle est rectangle. Si l'égalité échoue, la formule du périmètre additionne toujours, mais le triangle n'est pas un triangle rectangle."
      },
      {
        "question": "Quelle est la différence entre le périmètre et l'aire ?",
        "answer": "Le périmètre (P = a + b + c) mesure la distance totale autour du triangle en unités linéaires comme les mètres ou les pieds. L'aire (K = ab/2) mesure la surface à l'intérieur du triangle en unités carrées comme les mètres carrés. Pour un triangle 3-4-5, le périmètre est de 12 unités et l'aire est de 6 unités carrées."
      },
      {
        "question": "La calculatrice de périmètre accepte-t-elle les valeurs décimales ?",
        "answer": "Oui. Les longueurs de côtés décimales fonctionnent exactement comme les nombres entiers : pour a = 2.5, b = 6, c = 6.5, le périmètre est 2.5 + 6 + 6.5 = 15 unités. Gardez toute la précision pendant le calcul et n'arrondissez que la réponse finale."
      },
      {
        "question": "Quelles unités faut-il utiliser pour le périmètre ?",
        "answer": "N'importe quelle unité de longueur convient : mètres, centimètres, millimètres, pieds, pouces, yards ou miles. Les trois côtés doivent partager la même unité avant d'additionner. La calculatrice convertit chaque entrée en une unité commune automatiquement grâce à ses sélecteurs d'unités par entrée."
      },
      {
        "question": "Quelle est la relation entre le périmètre et le demi-périmètre ?",
        "answer": "Le demi-périmètre est exactement la moitié du périmètre : s = P/2. Pour un triangle 3-4-5, P = 12 et s = 6. Le demi-périmètre apparaît dans des formules avancées comme la formule de Héron pour l'aire et la relation du rayon inscrit K = rs."
      }
    ]
  }
};
