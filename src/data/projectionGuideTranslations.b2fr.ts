// projectionGuideTranslations.bfr.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "answer": "Une projection est un segment de l'hypoténuse créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse. La hauteur divise l'hypoténuse en deux parties, p et q. Chaque partie est la projection d'un côté sur l'hypoténuse.",
          "question": "Qu'est-ce qu'une projection dans un triangle rectangle ?",
        },
        {
          "answer": "La projection p se trouve à côté du sommet A et appartient au côté a, tandis que la projection q se trouve à côté du sommet B et appartient au côté b. Ce sont les deux parties de la même hypoténuse, et [[p + q = c]]. Les échanger échange aussi les côtés qu'elles décrivent.",
          "question": "Quelle est la différence entre la projection p et la projection q ?",
        },
        {
          "answer": "La formule est [[p = a^2 / c]], où a est le côté a et c est l'hypoténuse complète. Élevez d'abord le côté a au carré, puis divisez par c. Avec [[a = 9]] cm et [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
          "question": "Quelle est la formule de la projection p ?",
        },
        {
          "answer": "La formule est [[q = b^2 / c]], où b est le côté b et c est l'hypoténuse complète. Élevez d'abord le côté b au carré, puis divisez par c. Avec [[b = 12]] cm et [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
          "question": "Quelle est la formule de la projection q ?",
        },
        {
          "answer": "Utilisez [[a = \\sqrt{c \\times p}]]. Multipliez l'hypoténuse c par la projection p, puis prenez la racine carrée. Avec [[c = 25]] cm et [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. La racine carrée est nécessaire car cp est égal à a au carré, et non à a.",
          "question": "Comment calculer le côté a à partir de la projection p ?",
        },
        {
          "answer": "Utilisez [[b = \\sqrt{c \\times q}]]. Multipliez l'hypoténuse c par la projection q, puis prenez la racine carrée. Avec [[c = 25]] cm et [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. La racine carrée transforme la longueur au carré en longueur de côté.",
          "question": "Comment calculer le côté b à partir de la projection q ?",
        },
        {
          "answer": "Additionnez les deux projections : [[c = p + q]]. La hauteur divise l'hypoténuse en exactement ces deux segments, donc leur somme reconstruit tout le côté. Avec [[p = 9]] cm et [[q = 16]] cm, [[c = 25]] cm.",
          "question": "Comment trouver l'hypoténuse à partir de deux projections ?",
        },
        {
          "answer": "Parce que le théorème donne le carré d'un côté, et non le côté lui-même. L'énoncé [[a^2 = c \\times p]] décrit une longueur au carré. Prendre la racine carrée annule l'élévation au carré et redonne une longueur ordinaire. L'omettre reviendrait à présenter une valeur au carré comme s'il s'agissait d'un côté.",
          "question": "Pourquoi utilise-t-on une racine carrée dans le théorème des projections ?",
        },
        {
          "answer": "Oui. La hauteur est la moyenne géométrique des deux projections : [[h = \\sqrt{p \\times q}]]. Avec [[p = 9]] cm et [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Cette page n'a pas de mode hauteur, utilisez donc la calculatrice dédiée à la hauteur à partir des projections pour cette étape.",
          "question": "Les projections permettent-elles de déterminer la hauteur ?",
        },
        {
          "answer": "Additionner les deux formules de projection donne [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Comme [[p + q = c]], cela devient [[a^2 + b^2 = c^2]]. Le théorème des projections divise la relation de Pythagore en une partie par côté.",
          "question": "Quel est le lien entre les projections et le théorème de Pythagore ?",
        },
        {
          "answer": "Choisissez le mode selon les valeurs que vous connaissez. Utilisez le segment p quand vous connaissez a et c, le segment q quand vous connaissez b et c, le côté a quand vous connaissez c et p, le côté b quand vous connaissez c et q, et la somme des projections vers c quand vous connaissez p et q.",
          "question": "Quel mode de calculatrice dois-je choisir ?",
        },
        {
          "answer": "Non. Les côtés sont les deux côtés qui forment l'angle droit, tandis que les projections sont des segments le long de l'hypoténuse. Dans la plupart des cas, une projection est plus courte que son côté, et elle repose à plat sur l'hypoténuse, et non le long du côté du triangle.",
          "question": "Les projections sont-elles identiques aux côtés d'un triangle rectangle ?",
        },
      ],
      "relatedHeading": "Découvrez les calculatrices de triangle rectangle associées",
      "relatedIntro": "Choisissez l'outil suivant selon la mesure dont vous avez besoin, car chaque calculatrice ci-dessous traite une tâche de projection précise.",
      "relatedItems": [
        "Calculatrice de projection P du triangle rectangle",
        "Calculatrice de projection Q du triangle rectangle",
        "Calculatrice du côté A à partir de la projection du triangle rectangle",
        "Calculatrice du côté B à partir de la projection du triangle rectangle",
        "Calculatrice de l'hypoténuse à partir des projections du triangle rectangle",
        "Calculatrice de la hauteur à partir des projections du triangle rectangle",
        "Calculatrice de hauteur du triangle rectangle",
      ],
      "sections": {
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Connaître les deux projections suffit à reconstruire tout le triangle. Utilisez [[p = 9]] cm et [[q = 16]] cm. D'abord, l'hypoténuse est [[c = 9 + 16 = 25]] cm. Ensuite, le côté a est [[a = \\sqrt{25 \\times 9} = 15]] cm, et le côté b est [[b = \\sqrt{25 \\times 16} = 20]] cm. La hauteur est [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Une paire de nombres donne quatre longueurs : c, a, b et h. C'est la force des relations de projection : deux segments sur l'hypoténuse portent toute la forme du triangle. Une vérification finale boucle la boucle : [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], le théorème de Pythagore confirme donc tout le triangle d'un coup.",
            },
            {
              "kind": "p",
              "text": "Gardez à l'esprit qu'il s'agit de relations mathématiques, et non de modes de calculatrice distincts. Cette page calcule une valeur par mode. Reconstruire tout le triangle signifie exécuter un mode, puis utiliser son résultat dans le suivant, ou effectuer les étapes à la main comme montré ci-dessus.",
            },
          ],
          "h2": "Comment calculer toutes les mesures principales d'un triangle rectangle",
          "image": {
            "alt": "Triangle rectangle avec projections p égale à 9 et q égale à 16, hypoténuse 25, côtés 15 et 20, et hauteur 12, montrant les six mesures sur un seul schéma",
            "caption": "Une paire de projections reconstruit le triangle : c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La hauteur est la moyenne géométrique des deux projections :",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[p = 9]] cm et [[q = 16]] cm. Le produit est [[9 \\times 16 = 144]], et la racine carrée de 144 est 12, donc [[h = 12]] cm. La hauteur est le segment perpendiculaire de l'angle droit à l'hypoténuse, et sa longueur est fixée dès que p et q sont connus. C'est la même idée de moyenne géométrique qui relie les côtés aux projections, appliquée à la hauteur à la place.",
            },
            {
              "kind": "p",
              "text": "Notez que cette page n'a pas de mode hauteur dédié. La calculatrice renvoie les projections, les côtés et l'hypoténuse, mais pas h. Pour une page qui résout la hauteur directement, utilisez la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculatrice de hauteur à partir des projections</a>, qui prend p et q et renvoie h. La <a href=\"/right-triangle-altitude-calculator/\">calculatrice de hauteur</a> couvre d'autres façons de trouver h, à partir des côtés ou de l'aire.",
            },
          ],
          "h2": "Relation entre les projections et la hauteur",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'utilisation la plus directe est le devoir de géométrie et le travail en classe, où les problèmes de projection testent si les élèves peuvent étiqueter un schéma et appliquer [[a^2 = c \\times p]] au lieu de recourir au théorème de Pythagore par habitude. Les exercices sur les triangles semblables utilisent la même configuration, puisque la preuve elle-même est un exercice de mise en correspondance des côtés correspondants.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le théorème quand un triangle rectangle doit être reconstruit à partir de mesures partielles : si un dessin donne l'hypoténuse et le pied de la hauteur, le côté manquant suit sans remesurer la forme.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : la géométrie du triangle rectangle requise doit réellement exister. Le théorème décrit des relations géométriques exactes, et non des mesures de terrain approximatives, il ne remplace donc jamais un arpentage soigneux ni une mesure technique professionnelle. Dans son cadre approprié, cependant, il transforme deux longueurs connues en une troisième avec une seule multiplication et une racine carrée.",
            },
          ],
          "h2": "Applications pratiques des relations de projection du triangle rectangle",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculatrice de cette page propose cinq modes, un pour chaque relation de projection. Chaque mode demande deux mesures connues et renvoie une valeur manquante. Vous n'avez jamais besoin de résoudre tout le triangle d'abord : choisissez le mode qui correspond à vos nombres, saisissez-les et lisez le résultat.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous est le moyen le plus rapide de choisir. Trouvez la ligne dont les mesures connues correspondent aux vôtres, et cette ligne indique le mode à utiliser. Les sections suivantes expliquent chaque mode en détail, avec un exemple résolu pour chacun.",
            },
          ],
          "h2": "Calculer les projections et les segments de l'hypoténuse d'un triangle rectangle",
          "table": {
            "headers": [
              "Mode de calculatrice",
              "Mesures connues",
              "Résultat",
            ],
            "rows": [
              [
                "Segment d'hypoténuse p",
                "Côté a et hypoténuse c",
                "Projection p",
              ],
              [
                "Segment d'hypoténuse q",
                "Côté b et hypoténuse c",
                "Projection q",
              ],
              [
                "Côté a au carré par projection",
                "Hypoténuse c et projection p",
                "Côté a",
              ],
              [
                "Côté b au carré par projection",
                "Hypoténuse c et projection q",
                "Côté b",
              ],
              [
                "Somme des projections vers c",
                "Projection p et projection q",
                "Hypoténuse c",
              ],
            ],
          },
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Choisir le mode est un exercice de correspondance : trouvez le mode qui demande les deux mesures que vous connaissez, et la calculatrice renvoie celle qui manque.",
            },
            {
              "kind": "h3",
              "text": "Mode 1 : Segment d'hypoténuse p",
            },
            {
              "kind": "p",
              "text": "Choisissez ce mode quand vous connaissez le côté a et l'hypoténuse c. La formule est [[p = a^2 / c]]. Élevez le côté a au carré, puis divisez par c. Utilisez-le quand un problème vous donne un côté et toute l'hypoténuse et demande quelle part de l'hypoténuse appartient à ce côté.",
            },
            {
              "kind": "h3",
              "text": "Mode 2 : Segment d'hypoténuse q",
            },
            {
              "kind": "p",
              "text": "Choisissez ce mode quand vous connaissez le côté b et l'hypoténuse c. La formule est [[q = b^2 / c]]. C'est l'image miroir du mode 1, avec le côté b à la place du côté a. Utilisez-le quand le côté connu est celui qui touche le sommet B.",
            },
            {
              "kind": "h3",
              "text": "Mode 3 : Côté a au carré par projection",
            },
            {
              "kind": "p",
              "text": "Choisissez ce mode quand vous connaissez l'hypoténuse c et la projection p. La formule est [[a = \\sqrt{c \\times p}]]. Multipliez d'abord, puis prenez la racine carrée. Utilisez-le quand un problème donne l'hypoténuse et le segment à côté de A et demande le côté.",
            },
            {
              "kind": "h3",
              "text": "Mode 4 : Côté b au carré par projection",
            },
            {
              "kind": "p",
              "text": "Choisissez ce mode quand vous connaissez l'hypoténuse c et la projection q. La formule est [[b = \\sqrt{c \\times q}]]. C'est l'image miroir du mode 3, avec q à la place de p. Utilisez-le quand le segment connu est celui à côté de B.",
            },
            {
              "kind": "h3",
              "text": "Mode 5 : Somme des projections vers c",
            },
            {
              "kind": "p",
              "text": "Choisissez ce mode quand vous connaissez les deux projections, p et q. La formule est [[c = p + q]], une simple addition sans élévation au carré ni racine carrée.",
            },
            {
              "kind": "p",
              "text": "Guide de décision rapide : un côté avec c donne une projection, c avec une projection donne un côté, et les deux projections ensemble donnent c. Si vos valeurs connues ne correspondent à aucune de ces paires, il vous faut d'abord une autre mesure.",
            },
          ],
          "h2": "Comment choisir le bon mode de calculatrice",
          "image": {
            "alt": "Cinq modes de calculatrice avec leurs valeurs connues et leurs résultats : segment p à partir de a et c, segment q à partir de b et c, côté a à partir de c et p, côté b à partir de c et q, et hypoténuse c à partir de p et q",
            "caption": "Cinq modes, un par paire connue : un côté avec c donne une projection, c avec une projection donne un côté, et p avec q donne c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est le côté a, le côté BC est le côté b, et le côté AB est l'hypoténuse c. La hauteur CD descend de C perpendiculairement à AB et la touche en D. Deux petits carrés marquent les angles droits : un en C, entre les côtés, et un en D, entre la hauteur et l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Le point D divise l'hypoténuse en segment AD, qui est la projection p, et segment DB, qui est la projection q. La hauteur CD est étiquetée h. Parcourez le schéma dans cet ordre pour fixer les étiquettes : commencez en A, suivez le côté a jusqu'à C, puis le côté b jusqu'à B, puis revenez le long de l'hypoténuse de B à A, en vous arrêtant en D pour voir la division en q et p.",
            },
            {
              "kind": "p",
              "text": "La hauteur crée deux petits triangles rectangles, ACD et CBD, à l'intérieur de l'original. Dans le triangle ACD, l'hypoténuse est le côté a et un côté est la projection p. Dans le triangle CBD, l'hypoténuse est le côté b et un côté est la projection q.",
            },
          ],
          "h2": "Comprendre le schéma de projection du triangle rectangle",
          "image": {
            "alt": "Triangle rectangle ABC avec angle droit en C, hauteur CD vers l'hypoténuse AB, côtés a et b, hypoténuse c, projections p et q, et hauteur h étiquetées",
            "caption": "Triangle principal ABC : la hauteur CD divise l'hypoténuse AB en projection p (AD) et projection q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple indique les valeurs données, le mode, la substitution et la réponse finale. Deux exemples couvrent chacun des cinq modes, vous pouvez donc voir chaque mode deux fois avec des nombres différents.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Trouver la projection P",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 9]] cm et [[c = 15]] cm, utilisez le mode 1, Segment d'hypoténuse p. La formule donne [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Trouver la projection P",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 12]] m et [[c = 20]] m, utilisez le mode 1. La formule donne [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. L'autre projection est de 12.8 m, et [[7.2 + 12.8 = 20]] m confirme le résultat.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Trouver la projection Q",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 12]] cm et [[c = 15]] cm, utilisez le mode 2, Segment d'hypoténuse q. La formule donne [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. C'est le même triangle que l'exemple 1, vu depuis l'autre côté.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Trouver la projection Q",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 8]] m et [[c = 10]] m, utilisez le mode 2. La formule donne [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. L'autre projection est de 3.6 m, et c'est le triangle familier 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Trouver le côté A",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[p = 9]] cm, utilisez le mode 3, Côté a au carré par projection. La formule donne [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Le produit est un carré parfait, la réponse est donc exacte, sans arrondi nécessaire.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Trouver le côté A",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[p = 4]] cm, utilisez le mode 3. La formule donne [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Le produit 40 n'est pas un carré parfait, la réponse est donc une approximation arrondie à trois décimales.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Trouver le côté B",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[q = 16]] cm, utilisez le mode 4, Côté b au carré par projection. La formule donne [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. C'est le même triangle que l'exemple 5, vu depuis l'autre projection, et les deux côtés 15 et 20 complètent le triangle 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Trouver le côté B",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[q = 6]] cm, utilisez le mode 4. La formule donne [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Le côté a correspondant mesure environ 6.325 cm, d'après l'exemple 6.",
            },
            {
              "kind": "h3",
              "text": "Exemple 9 : Trouver l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 9]] cm et [[q = 16]] cm, utilisez le mode 5, Somme des projections vers c. La formule donne [[c = 9 + 16 = 25]] cm. Ni élévation au carré ni racine carrée ne sont nécessaires, puisque les deux segments se joignent simplement pour former tout le côté.",
            },
            {
              "kind": "h3",
              "text": "Exemple 10 : Trouver l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec [[p = 3.5]] m et [[q = 6.5]] m, utilisez le mode 5. La formule donne [[c = 3.5 + 6.5 = 10]] m. Les projections décimales s'additionnent comme les nombres entiers, alignez donc les virgules décimales et additionnez.",
            },
          ],
          "h2": "Exemples résolus avec les cinq modes de calculatrice",
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cinq formules couvrent tous les modes de cette page. Les deux premières trouvent les projections à partir des côtés. Les deux suivantes retrouvent les côtés à partir des projections. La dernière reconstruit l'hypoténuse à partir de ses deux parties.",
            },
            {
              "kind": "p",
              "text": "Projection p, à partir du côté a et de l'hypoténuse :",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Projection q, à partir du côté b et de l'hypoténuse :",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Côté a, à partir de l'hypoténuse et de la projection p :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Côté b, à partir de l'hypoténuse et de la projection q :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hypoténuse, à partir des deux projections :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Trouver une projection consiste à élever un côté au carré et à diviser par l'hypoténuse. Trouver un côté consiste à multiplier l'hypoténuse par une projection et à prendre une racine carrée. Trouver l'hypoténuse consiste à additionner deux segments. La racine carrée apparaît seulement quand on retrouve un côté, car seules les formules des côtés partent d'une longueur au carré. Toutes les mesures doivent utiliser la même unité, convertissez donc avant de calculer.",
            },
          ],
          "h2": "Formules de projection du triangle rectangle expliquées",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dix courtes étapes vous mènent d'un schéma étiqueté à une réponse vérifiée. Les étapes sont les mêmes pour tous les modes ; seuls le mode choisi et les nombres saisis changent.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez les mesures connues.",
                "Ouvrez le sélecteur de mode de la calculatrice.",
                "Choisissez le mode de calcul correspondant.",
                "Saisissez la première mesure requise.",
                "Saisissez la deuxième mesure requise.",
                "Sélectionnez des unités de mesure compatibles.",
                "Cliquez sur le bouton Calculer correspondant.",
                "Lisez le résultat affiché.",
                "Vérifiez la réponse à l'aide d'une autre relation géométrique quand cela convient.",
                "Utilisez Réinitialiser avant de commencer un autre calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "L'étape 1 fait l'essentiel du travail. Étiquetez le triangle, marquez p et q sur l'hypoténuse, et notez à quel côté appartient chaque projection. Une fois les étiquettes fixées, le choix du mode découle du tableau près du haut de ce guide, et la calculatrice s'occupe de l'arithmétique. Ne décrivez pas et n'attendez pas des fonctions que la page n'a pas : elle ne calcule pas la hauteur, les angles ou l'aire automatiquement.",
            },
          ],
          "h2": "Comment utiliser la calculatrice de projection du triangle rectangle",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux projections sont les deux parties d'un même côté droit, l'hypoténuse est donc leur somme :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[p = 9]] cm et [[q = 16]] cm. L'addition donne [[c = 9 + 16 = 25]] cm. C'est le principe d'addition des segments : quand un point divise un segment en deux parties, le segment entier est égal à la somme de ses parties. Le pied de la hauteur D divise l'hypoténuse AB en AD et DB, AB est donc égal à AD plus DB.",
            },
            {
              "kind": "p",
              "text": "Ce mode est aussi la vérification la plus rapide des quatre autres modes. Chaque fois que vous calculez p et q séparément, additionnez-les et comparez avec c. Dans le triangle 9-12-15, [[p = 5.4]] cm et [[q = 9.6]] cm totalisent 15 cm, ce qui confirme les deux projections à la fois. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculatrice de l'hypoténuse à partir des projections</a> couvre ce calcul en entier quand vous en avez besoin seule.",
            },
          ],
          "h2": "Comment calculer l'hypoténuse complète à partir des projections",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Une projection dans un triangle rectangle est l'ombre qu'un côté projette sur l'hypoténuse. Abaissez la hauteur depuis le sommet de l'angle droit jusqu'à l'hypoténuse, et elle divise ce côté en deux segments, appelés p et q. Le segment p appartient au côté a, et le segment q appartient au côté b.",
            },
            {
              "kind": "p",
              "text": "Cette calculatrice de projection du triangle rectangle traite les cinq relations de projection. Elle trouve la projection p à partir du côté a, la projection q à partir du côté b, le côté a à partir de la projection p, le côté b à partir de la projection q, et l'hypoténuse complète à partir de p et q. Chaque tâche est un mode distinct, vous choisissez donc celui qui correspond aux mesures que vous connaissez déjà.",
            },
            {
              "kind": "p",
              "text": "Les deux mêmes projections peuvent aussi reconstruire tout le triangle. Par exemple, si [[p = 9]] cm et [[q = 16]] cm, alors [[c = 9 + 16 = 25]] cm, et la hauteur est [[h = \\sqrt{9 \\times 16} = 12]] cm. Ce guide explique chaque mode, présente les formules, détaille des exemples et vous apprend à vérifier chaque réponse.",
            },
          ],
          "h2": "Calculatrice de projection du triangle rectangle",
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pour retrouver le côté a, multipliez l'hypoténuse par la projection p et prenez la racine carrée :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 25]] cm et [[p = 9]] cm. Le produit est [[25 \\times 9 = 225]], et la racine carrée de 225 est 15, donc [[a = 15]] cm. Le produit 225 est une longueur au carré, et non un côté, c'est pourquoi la racine carrée ne peut pas être omise. Présenter 225 comme le côté reviendrait à affirmer un côté neuf fois plus long que l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "L'étape de la racine carrée est tout l'intérêt de ce mode. Le théorème des projections dit [[a^2 = c \\times p]], donc le produit donne le carré du côté. Annuler un carré exige une racine carrée, tout comme annuler un doublement exige de diviser par deux. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculatrice du côté a à partir de la projection</a> couvre ce calcul en entier quand vous en avez besoin seule.",
            },
          ],
          "h2": "Comment trouver le côté A à partir de la projection P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pour retrouver le côté b, multipliez l'hypoténuse par la projection q et prenez la racine carrée :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 25]] cm et [[q = 16]] cm. Le produit est [[25 \\times 16 = 400]], et la racine carrée de 400 est 20, donc [[b = 20]] cm. La méthode est l'image miroir du calcul du côté a, avec q à la place de p. L'appariement est fixé par les étiquettes du triangle, saisir p ici renverrait donc le côté a à la place.",
            },
            {
              "kind": "p",
              "text": "Vérifiez la réponse par rapport à la taille du triangle. Le côté b doit être plus court que l'hypoténuse, et 20 cm est plus court que 25 cm, le résultat passe donc le premier contrôle de bon sens. L'élever au carré donne [[20^2 = 400]], ce qui correspond à [[c \\times q = 25 \\times 16 = 400]], le théorème est donc vérifié exactement. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculatrice du côté b à partir de la projection</a> couvre ce calcul en entier quand vous en avez besoin seule.",
            },
          ],
          "h2": "Comment trouver le côté B à partir de la projection Q",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "La plupart des erreurs ci-dessous remontent à l'étiquetage, et non à l'arithmétique, étiquetez donc à nouveau le schéma avant de recalculer quand une réponse semble fausse.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondre la projection p avec la projection q : p se trouve à côté de A et appartient au côté a, tandis que q se trouve à côté de B et appartient au côté b.",
                "Associer le côté a à q au lieu de p : le côté a utilise p, donc [[a = \\sqrt{c \\times p}]]. Utiliser q renvoie le côté b, et non le côté a.",
                "Associer le côté b à p au lieu de q : le côté b utilise q, donc [[b = \\sqrt{c \\times q}]]. Utiliser p renvoie le côté a, et non le côté b.",
                "Oublier la racine carrée quand on calcule un côté : le produit cp est a au carré, et non a. Avec c = 25 et p = 9, le côté est de 15 cm, et non 225.",
                "Mélanger différentes unités de mesure : convertissez d'abord. Multiplier des mètres par des centimètres donne un produit sans signification, mettez donc les deux entrées dans une seule unité.",
                "Utiliser le mauvais mode de calculatrice : faites correspondre le mode à vos valeurs connues grâce au tableau près du haut de ce guide.",
                "Traiter p ou q comme un côté perpendiculaire : les projections reposent à plat le long de l'hypoténuse. Ce sont des segments de l'hypoténuse, et non des côtés du triangle.",
                "Oublier que c = p + q : les deux projections doivent totaliser l'hypoténuse.",
                "Utiliser des longueurs invalides ou négatives : les longueurs sont positives, une entrée négative signale donc une erreur de données, et des projections nulles ne décrivent aucun vrai triangle.",
                "Arrondir trop tôt : gardez toute la précision jusqu'à l'étape finale, puis arrondissez une seule fois.",
                "Appliquer les formules à un triangle quelconque : le théorème exige un angle droit et sa hauteur, sans eux il n'y a pas de projections p et q en ce sens.",
                "Confondre les longueurs de côtés au carré avec les longueurs de côtés réelles : 225 est a au carré, tandis que 15 est a. Dites lequel vous voulez dire avant d'écrire un nombre.",
              ],
            },
          ],
          "h2": "Erreurs fréquentes avec une calculatrice de projection du triangle rectangle",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne répète les exemples résolus, et le dernier problème combine plusieurs idées de ce guide.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Trouver la projection P",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a le côté [[a = 6]] cm et l'hypoténuse [[c = 10]] cm. Trouvez la projection p.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Trouver la projection Q",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a le côté [[b = 15]] cm et l'hypoténuse [[c = 25]] cm. Trouvez la projection q.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Trouver le côté A",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a l'hypoténuse [[c = 17]] cm et la projection [[p = 8]] cm. Trouvez le côté a.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Trouver le côté B",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a l'hypoténuse [[c = 13]] cm et la projection [[q = 9]] cm. Trouvez le côté b.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a les projections [[p = 5]] cm et [[q = 20]] cm. Trouvez l'hypoténuse c.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Théorème des projections en plusieurs étapes",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a les projections [[p = 4]] cm et [[q = 9]] cm. Trouvez l'hypoténuse, les deux côtés et la hauteur, puis vérifiez le résultat avec le théorème de Pythagore.",
            },
            {
              "kind": "h3",
              "text": "Réponses des problèmes d'entraînement",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Vérification : [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Problèmes d'entraînement avec réponses",
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "La projection p est la partie de l'hypoténuse qui appartient au côté a. La formule divise le carré du côté a par l'hypoténuse complète :",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[a = 9]] cm et [[c = 15]] cm. L'étape 1 écrit la formule, [[p = a^2 / c]]. L'étape 2 remplace les valeurs, [[p = 9^2 / 15 = 81 / 15]]. L'étape 3 divise, ce qui donne [[p = 5.4]] cm. La réponse est une longueur le long de l'hypoténuse, mesurée dans la même unité que a et c.",
            },
            {
              "kind": "p",
              "text": "Une courte vérification confirme le résultat. L'autre côté de ce triangle mesure 12 cm, sa projection est donc [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Additionner les deux projections donne [[5.4 + 9.6 = 15]] cm, ce qui est exactement c. Si vos deux projections ne totalisent pas c, l'une des entrées était fausse. La <a href=\"/right-triangle-projection-p-calculator/\">calculatrice de projection p</a> effectue ce calcul seule quand vous en avez souvent besoin.",
            },
          ],
          "h2": "Comment calculer la projection P à partir du côté A et de l'hypoténuse",
          "image": {
            "alt": "Triangle rectangle montrant le côté a au carré divisé par l'hypoténuse c donne la projection p, avec a égal à 9 cm et c égal à 15 cm donnant p égal à 5.4 cm",
            "caption": "Projection p à partir du côté a : p égale a au carré sur c, donc 81 sur 15 donne 5.4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "La projection q est la partie de l'hypoténuse qui appartient au côté b. La formule divise le carré du côté b par l'hypoténuse complète :",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[b = 12]] cm et [[c = 15]] cm. L'étape 1 écrit la formule, [[q = b^2 / c]]. L'étape 2 remplace les valeurs, [[q = 12^2 / 15 = 144 / 15]]. L'étape 3 divise, ce qui donne [[q = 9.6]] cm. La réponse est le segment à côté du sommet B, du côté opposé du pied de la hauteur par rapport à p.",
            },
            {
              "kind": "p",
              "text": "Comparez les deux projections avant de continuer. Ici p vaut 5.4 cm et q vaut 9.6 cm, donc q est plus grande, ce qui correspond au côté b plus long que le côté a. Le côté le plus long projette toujours la projection la plus longue. Si votre côté le plus long a produit la projection la plus courte, vous avez échangé p et q. La <a href=\"/right-triangle-projection-q-calculator/\">calculatrice de projection q</a> effectue ce calcul seule quand vous en avez souvent besoin.",
            },
          ],
          "h2": "Comment calculer la projection Q à partir du côté B et de l'hypoténuse",
          "image": {
            "alt": "Triangle rectangle montrant le côté b au carré divisé par l'hypoténuse c donne la projection q, avec b égal à 12 cm et c égal à 15 cm donnant q égal à 9.6 cm",
            "caption": "Projection q à partir du côté b : q égale b au carré sur c, donc 144 sur 15 donne 9.6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La preuve repose sur les triangles semblables. Tracer la hauteur CD divise le triangle ABC en deux petits triangles rectangles, ACD et CBD, et les deux sont semblables au triangle original. La similitude signifie que leurs côtés correspondants restent dans le même rapport, et l'un de ces rapports donne directement le théorème des projections.",
            },
            {
              "kind": "p",
              "text": "Commencez par le côté a. Le triangle ACD partage l'angle en A avec le triangle ABC, et les deux contiennent un angle droit, leurs troisièmes angles doivent donc aussi correspondre. Faire correspondre les côtés qui occupent les mêmes positions donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez maintenant par les symboles habituels : [[AD = p]], [[AC = a]] et [[AB = c]]. La proportion devient :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "La multiplication en croix élimine les fractions : [[p \\times c = a \\times a]], ce qui est [[a^2 = c \\times p]]. Le même raisonnement appliqué à l'autre petit triangle, CBD, donne [[b^2 = c \\times q]], puisque le triangle CBD partage l'angle en B avec tout le triangle. La similitude fait tout le travail : les côtés correspondants de triangles semblables restent proportionnels, et le théorème des projections est ce à quoi ressemble cette proportion après la multiplication en croix.",
            },
          ],
          "h2": "Pourquoi les théorèmes de projection fonctionnent-ils ?",
          "image": {
            "alt": "Triangle rectangle original ABC à côté des petits triangles semblables ACD et CBD, montrant les proportions p sur a égale a sur c et q sur b égale b sur c",
            "caption": "Preuve par triangles semblables : p sur a égale a sur c, et q sur b égale b sur c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Six propriétés découlent directement des formules de projection. Chacune sert aussi de contrôle de bon sens pour une nouvelle réponse.",
            },
            {
              "items": [
                "Des projections égales produisent des côtés égaux. Avec [[p = q = 5]] et [[c = 10]], les deux côtés sont égaux à [[\\sqrt{50} \\approx 7.071]], et le triangle est un triangle rectangle isocèle.",
                "Des projections inégales produisent des côtés inégaux : la projection la plus longue appartient au côté le plus long.",
                "Échanger p et q échange les longueurs de côtés correspondantes mais ne change pas l'hypoténuse totale, puisque [[p + q = c]] dans les deux cas.",
                "Multiplier toutes les mesures par le même facteur positif multiplie chaque résultat par ce facteur. Doubler p et q double c, a, b et h.",
                "Les projections sont toujours positives et toujours plus petites que c dans un triangle rectangle valide et non dégénéré. Une projection égale à c laisserait l'autre projection à zéro.",
                "Le côté le plus long projette toujours la projection la plus longue. Comparer les longueurs des côtés avec celles des projections est un moyen rapide de repérer une étiquette échangée.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Le schéma ci-dessous montre les deux cas avec l'hypoténuse maintenue à 10. Des projections égales la partagent également et donnent des côtés égaux, tandis que des projections inégales donnent des côtés de longueurs différentes.",
            },
          ],
          "h2": "Cas particuliers et propriétés importantes des projections",
          "image": {
            "alt": "Deux triangles rectangles avec hypoténuse 10 : l'un avec des projections p et q égales de 5 donnant des côtés égaux, et l'autre avec p égal à 2 et q égal à 8 donnant des côtés inégaux",
            "caption": "Des projections égales donnent des côtés égaux ; des projections inégales donnent des côtés inégaux, avec la même hypoténuse de 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème des projections et le théorème de Pythagore s'accordent exactement, et l'algèbre montre pourquoi. Partez des deux formules de projection :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Ajoutez la formule correspondante pour le côté b, [[b^2 = c \\times q]], pour obtenir :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Factoriser c du côté droit donne [[a^2 + b^2 = c(p + q)]]. Comme [[p + q = c]], la substitution donne le résultat familier :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Une vérification numérique avec le triangle 9-16-25 le confirme : [[a^2 + b^2 = 225 + 400 = 625]] et [[c^2 = 25^2 = 625]]. Les deux théorèmes ne sont pas rivaux. Le théorème des projections divise la relation de Pythagore en une partie par côté, et additionner les parties la reconstruit. C'est pourquoi chaque résultat de cette page peut être vérifié avec le théorème de Pythagore.",
            },
          ],
          "h2": "Relation entre les projections et le théorème de Pythagore",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un même triangle porte six parties nommées, et chacune a une position fixe. Le tableau ci-dessous énumère chaque partie avec son symbole, sa signification et sa position. Apprenez ce tableau une fois, et chaque formule de ce guide se lira clairement.",
            },
            {
              "kind": "p",
              "text": "Identifier le bon segment est important car chaque mode de calculatrice attend des entrées précises. Saisir une projection là où un côté devrait figurer, ou saisir p là où q devrait figurer, produit quand même un nombre, mais il répond à une question différente de celle que vous avez posée. Étiquetez d'abord le schéma, puis faites correspondre les étiquettes au mode.",
            },
          ],
          "h2": "Comprendre les côtés et les segments d'un triangle rectangle",
          "table": {
            "headers": [
              "Symbole",
              "Nom",
              "Position",
            ],
            "rows": [
              [
                "a",
                "Côté a (côté AC)",
                "Côté perpendiculaire touchant le sommet A",
              ],
              [
                "b",
                "Côté b (côté BC)",
                "Côté perpendiculaire touchant le sommet B",
              ],
              [
                "c",
                "Hypoténuse (côté AB)",
                "Côté le plus long, opposé à l'angle droit",
              ],
              [
                "p",
                "Projection p (segment AD)",
                "Partie de l'hypoténuse à côté du sommet A",
              ],
              [
                "q",
                "Projection q (segment DB)",
                "Partie de l'hypoténuse à côté du sommet B",
              ],
              [
                "h",
                "Hauteur (segment CD)",
                "Perpendiculaire de C à l'hypoténuse",
              ],
            ],
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre vérifications indépendantes détectent presque toutes les erreurs. Effectuez au moins l'une d'elles sur chaque réponse, et les quatre quand le problème compte. Chaque vérification utilise une relation différente, une erreur qui échappe à l'une est donc généralement détectée par une autre.",
            },
            {
              "kind": "h3",
              "text": "Vérification 1 : Addition des projections",
            },
            {
              "kind": "p",
              "text": "Confirmez que [[p + q = c]]. Avec [[p = 9]] cm, [[q = 16]] cm et [[c = 25]] cm, [[9 + 16 = 25]], les segments correspondent donc. Si la somme diffère de c, l'une des projections est fausse.",
            },
            {
              "kind": "h3",
              "text": "Vérification 2 : Théorème des projections pour le côté A",
            },
            {
              "kind": "p",
              "text": "Élevez le côté a au carré et comparez-le avec [[c \\times p]]. Avec [[a = 15]] cm, [[c = 25]] cm et [[p = 9]] cm, [[a^2 = 225]] et [[c \\times p = 225]], la réponse passe donc. Si les deux nombres diffèrent, le côté ou la projection est faux.",
            },
            {
              "kind": "h3",
              "text": "Vérification 3 : Théorème des projections pour le côté B",
            },
            {
              "kind": "p",
              "text": "Élevez le côté b au carré et comparez-le avec [[c \\times q]]. Avec [[b = 20]] cm, [[c = 25]] cm et [[q = 16]] cm, [[b^2 = 400]] et [[c \\times q = 400]], la réponse passe donc. Utilisez cette vérification chaque fois que votre réponse est un côté.",
            },
            {
              "kind": "h3",
              "text": "Vérification 4 : Théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Confirmez que [[a^2 + b^2 = c^2]]. Avec [[a = 15]] cm, [[b = 20]] cm et [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. Cette vérification teste tout le triangle d'un coup, et non une seule formule, c'est donc la plus forte des quatre.",
            },
          ],
          "h2": "Comment vérifier vos calculs de projection",
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prenez le triangle rectangle ABC, avec l'angle droit en C. Les deux côtés qui forment l'angle droit sont les côtés AC et BC. Le côté opposé à l'angle droit est l'hypoténuse AB. Tracez maintenant la hauteur depuis C directement jusqu'à l'hypoténuse, où elle la rencontre en un point appelé D. Cette hauteur est perpendiculaire à l'hypoténuse, elle rencontre donc AB à angle droit.",
            },
            {
              "kind": "p",
              "text": "Le point D divise l'hypoténuse en deux segments adjacents. Le segment à côté du sommet A, appelé AD, est la projection p. Le segment à côté du sommet B, appelé DB, est la projection q. Ensemble, ils forment toute l'hypoténuse :",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Chaque projection appartient au côté qui touche son sommet. Le côté a touche le sommet A, sa projection est donc p. Le côté b touche le sommet B, sa projection est donc q. Cet appariement ne change jamais : a va avec p, et b va avec q.",
            },
            {
              "kind": "p",
              "text": "Les projections reposent à plat le long de l'hypoténuse. Ce ne sont pas des côtés du triangle, et elles ne sont perpendiculaires à rien. Imaginez chacune comme l'ombre que son côté projette sur l'hypoténuse quand la hauteur descend directement jusqu'à elle.",
            },
          ],
          "h2": "Que sont les projections dans un triangle rectangle ?",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-all-measurements": "Comment calculer toutes les mesures principales d'un triangle rectangle",
        "sec-altitude": "Relation entre les projections et la hauteur",
        "sec-applications": "Applications pratiques des relations de projection du triangle rectangle",
        "sec-calculate": "Calculer les projections et les segments de l'hypoténuse d'un triangle rectangle",
        "sec-choose-mode": "Comment choisir le bon mode de calculatrice",
        "sec-diagram": "Comprendre le schéma de projection du triangle rectangle",
        "sec-examples": "Exemples résolus avec les cinq modes de calculatrice",
        "sec-faq": "Questions fréquemment posées",
        "sec-formulas": "Formules de projection du triangle rectangle expliquées",
        "sec-how-to-use": "Comment utiliser la calculatrice de projection du triangle rectangle",
        "sec-hypotenuse": "Comment calculer l'hypoténuse complète à partir des projections",
        "sec-intro": "Calculatrice de projection du triangle rectangle",
        "sec-leg-a": "Comment trouver le côté A à partir de la projection P",
        "sec-leg-b": "Comment trouver le côté B à partir de la projection Q",
        "sec-mistakes": "Erreurs fréquentes avec une calculatrice de projection du triangle rectangle",
        "sec-practice": "Problèmes d'entraînement avec réponses",
        "sec-projection-p": "Comment calculer la projection P à partir du côté A et de l'hypoténuse",
        "sec-projection-q": "Comment calculer la projection Q à partir du côté B et de l'hypoténuse",
        "sec-proof": "Pourquoi les théorèmes de projection fonctionnent-ils ?",
        "sec-properties": "Cas particuliers et propriétés importantes des projections",
        "sec-pythagoras": "Relation entre les projections et le théorème de Pythagore",
        "sec-related": "Découvrez les calculatrices de triangle rectangle associées",
        "sec-sides-segments": "Comprendre les côtés et les segments d'un triangle rectangle",
        "sec-verify": "Comment vérifier vos calculs de projection",
        "sec-what-projections": "Que sont les projections dans un triangle rectangle ?",
      },
    },
};
