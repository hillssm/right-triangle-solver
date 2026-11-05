// legAFromProjectionGuideTranslations.bfr.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "answer": "La formule est [[a = \\sqrt{c \\times p}]], où c est l'hypoténuse complète et p est la projection qui appartient au côté a. Par exemple, [[c = 10]] cm et [[p = 3.6]] cm donnent [[a = 6]] cm.",
          "question": "Quelle est la formule pour trouver le côté a à partir de la projection p ?",
        },
        {
          "answer": "La multiplication vient des triangles semblables. Le triangle ACD est semblable au triangle ABC, ce qui donne [[p / a = a / c]], et le produit en croix donne [[a^2 = c \\times p]]. Le produit est le carré du côté, et non le côté lui-même.",
          "question": "Pourquoi multiplie-t-on c et p ?",
        },
        {
          "answer": "Parce que le produit cp est égal à a au carré, et non à a. La racine carrée défait la mise au carré et redonne une longueur ordinaire. Sans elle, on annoncerait 36 au lieu de 6 dans l'exemple avec c = 10 et p = 3.6.",
          "question": "Pourquoi une racine carrée est-elle nécessaire ?",
        },
        {
          "answer": "La projection p est le segment de l'hypoténuse situé à côté du sommet A, créé quand la hauteur issue de l'angle droit rencontre l'hypoténuse. Dans le triangle ABC avec la hauteur CD, [[p = AD]], et elle se trouve le long de l'hypoténuse.",
          "question": "Que représente la projection p ?",
        },
        {
          "answer": "Non. Le côté a est le côté AC, l'un des côtés qui forment l'angle droit, tandis que la projection p est le segment AD le long de l'hypoténuse. Ce sont des longueurs différentes, à des positions différentes, liées seulement par [[a^2 = c \\times p]].",
          "question": "La projection p est-elle la même chose que le côté a ?",
        },
        {
          "answer": "Pas directement. La projection q est associée au côté b, donc en entrant q on obtient le côté b. Pour trouver le côté a à partir de q, il faut d'abord retrouver p avec [[p = c - q]], puis utiliser [[a = \\sqrt{c \\times p}]].",
          "question": "Peut-on utiliser la projection q pour trouver le côté a ?",
        },
        {
          "answer": "Soustrayez-la de l'hypoténuse : [[p = c - q]]. Avec [[c = 25]] cm et [[q = 16]] cm, [[p = 9]] cm, puis [[a = \\sqrt{25 \\times 9} = 15]] cm.",
          "question": "Que faire si je ne connais que la projection q ?",
        },
        {
          "answer": "Non. La projection p n'est qu'une partie de l'hypoténuse, donc elle doit être plus petite que c. Si p était égale à c, q serait nulle et le triangle serait dégénéré plutôt qu'un vrai triangle rectangle.",
          "question": "La projection p peut-elle être égale à l'hypoténuse ?",
        },
        {
          "answer": "Mettez la réponse au carré et vérifiez qu'elle est égale à [[c \\times p]]. Vous pouvez aussi trouver le côté b à partir de q et vérifier [[a^2 + b^2 = c^2]], et confirmer que p est plus petite que c et que le côté a est plus court que l'hypoténuse.",
          "question": "Comment vérifier le côté calculé ?",
        },
        {
          "answer": "La hauteur tombe au milieu de l'hypoténuse, et les deux côtés sont égaux, donc le triangle est un triangle rectangle isocèle. Avec [[c = 20]] cm et [[p = q = 10]] cm, les deux côtés sont égaux à [[10\\sqrt{2}]] cm, soit environ 14.142 cm.",
          "question": "Que se passe-t-il quand p et q sont égales ?",
        },
        {
          "answer": "Oui, avec la formule symétrique [[b = \\sqrt{c \\times q}]]. Le côté b est associé à la projection q, tout comme le côté a est associé à p. Le <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculateur de côté b à partir de la projection</a> est conçu pour ce calcul.",
          "question": "Peut-on trouver le côté b avec le même théorème ?",
        },
        {
          "answer": "Oui. En additionnant les deux formules de projection, on obtient [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], puisque [[p + q = c]]. Le théorème de projection divise la relation de Pythagore en une partie par côté.",
          "question": "Le théorème de projection est-il lié au théorème de Pythagore ?",
        },
      ],
      "relatedHeading": "Découvrir les calculateurs de triangle rectangle associés",
      "relatedIntro": "Choisissez l'outil suivant en fonction des mesures que vous connaissez déjà, car chaque calculateur ci-dessous traite une tâche précise sur le triangle rectangle.",
      "relatedItems": [
        "Calculateur de projection d'un triangle rectangle",
        "Calculateur de projection p d'un triangle rectangle",
        "Calculateur de projection q d'un triangle rectangle",
        "Calculateur de côté b à partir de la projection d'un triangle rectangle",
        "Calculateur d'hypoténuse à partir des projections d'un triangle rectangle",
        "Calculateur de hauteur à partir des projections d'un triangle rectangle",
        "Calculateur de côté d'un triangle rectangle",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ce calculateur trouve le côté a d'un triangle rectangle quand on connaît l'hypoténuse complète c et la projection p qui appartient au côté a. Vous entrez ces deux longueurs, et il renvoie la longueur réelle du côté a, et non une valeur au carré ni un segment de projection. La formule est [[a = \\sqrt{c \\times p}]], où c est l'hypoténuse complète et p est le segment de l'hypoténuse situé à côté du côté a.",
            },
            {
              "kind": "p",
              "text": "Par exemple, si [[c = 10]] cm et [[p = 3.6]] cm, alors [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Le produit 36 n'est qu'une étape intermédiaire. Prendre la racine carrée le transforme de nouveau en longueur, et cette longueur est le côté que vous cherchez.",
            },
            {
              "kind": "p",
              "text": "Le calculateur se trouve en haut de cette page, suivi de la formule, d'un schéma légendé, d'une preuve du théorème de projection, d'exemples détaillés et de vérifications que vous pouvez appliquer à n'importe quelle réponse. Le guide convient aux élèves de collège et de lycée, aux enseignants, aux tuteurs et aux parents qui aident aux devoirs de géométrie.",
            },
          ],
          "h2": "Calculateur de côté a d'un triangle rectangle à partir de la projection",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur possède deux champs de saisie. Le premier reçoit l'hypoténuse c, le côté complet opposé à l'angle droit. Le second reçoit la projection p, le segment de l'hypoténuse qui appartient au côté a. Les deux longueurs doivent utiliser la même unité, donc convertissez d'abord si une mesure est en centimètres et l'autre en mètres.",
            },
            {
              "kind": "p",
              "text": "La projection p doit être plus petite que c. Cette règle est inscrite dans la géométrie : p n'est qu'une partie de l'hypoténuse, donc elle ne peut jamais être égale au côté entier ni le dépasser. Si votre valeur de p est plus grande que c, vous avez probablement entré un côté, la hauteur, ou la mauvaise projection.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer le côté a pour voir le résultat, et utilisez Réinitialiser pour effacer les deux champs avant un nouveau problème. Le résultat est une longueur dans l'unité que vous avez entrée, donc une hypoténuse de 10 cm et une projection de 3.6 cm donnent 6 cm, sans aucune étape de conversion supplémentaire.",
            },
          ],
          "h2": "Calculer le côté a d'un triangle rectangle à partir de la projection",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle possède deux côtés perpendiculaires, appelés côtés de l'angle droit, et un côté le plus long, appelé hypoténuse. Les deux côtés se rencontrent à l'angle droit, et l'hypoténuse se trouve en face de cet angle. Dans ce guide, le triangle est ABC avec l'angle droit en C, le côté a est le côté AC, le côté b est le côté BC, et l'hypoténuse c est le côté AB.",
            },
            {
              "kind": "p",
              "text": "Le côté a est l'un des deux côtés qui forment l'angle droit, donc c'est un vrai côté du triangle. Ce n'est pas un segment tracé à l'intérieur du triangle, et ce n'est pas la projection p. La projection p repose à plat le long de l'hypoténuse, tandis que le côté a va du sommet A au sommet C de l'angle droit. Bien distinguer ces deux rôles est la première étape pour utiliser la formule correctement.",
            },
            {
              "kind": "p",
              "text": "Le côté a ne diffère du côté b que par sa position : le côté a touche le sommet A, et le côté b touche le sommet B. Chaque côté possède sa propre projection, ce qui explique pourquoi la formule pour a utilise p alors que la formule pour b utilise q, un appariement fixé par les notations.",
            },
            {
              "kind": "p",
              "text": "Dans tout triangle rectangle non dégénéré, le côté a est plus court que l'hypoténuse. Cela donne un contrôle rapide pour chaque réponse : si votre côté a calculé ressort plus long que c, quelque chose a mal tourné dans les données ou dans le calcul, et les étiquettes du schéma sont le premier endroit à regarder.",
            },
          ],
          "h2": "Qu'est-ce que le côté a dans un triangle rectangle ?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tracez la hauteur issue du sommet C de l'angle droit, perpendiculaire à l'hypoténuse AB. Elle rencontre l'hypoténuse en un point appelé pied, noté D. Ce point partage l'hypoténuse en deux segments adjacents, et ces segments sont les projections. Le segment AD est la projection p, et le segment DB est la projection q.",
            },
            {
              "kind": "p",
              "text": "La projection p appartient au côté a parce qu'elle se trouve à côté du sommet A, le même sommet où commence le côté a. Dans le petit triangle ACD, le côté a est l'hypoténuse et p est l'un de ses côtés, ce qui est le lien géométrique qui fait fonctionner le théorème de projection. La projection q, par le même raisonnement, appartient au côté b, qui touche le sommet B.",
            },
            {
              "kind": "p",
              "text": "Les projections sont des longueurs le long de l'hypoténuse, mesurées dans la même unité que les autres côtés. Elles ne sont perpendiculaires à rien, et elles ne sont pas des côtés du triangle d'origine. On peut se représenter une projection comme l'ombre qu'un côté projette sur l'hypoténuse quand la hauteur tombe droit dessus.",
            },
            {
              "kind": "p",
              "text": "Comme p et q sont les deux parties d'un même côté droit, elles s'ajoutent pour donner l'hypoténuse entière :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Cette addition est utile en elle-même. Si vous connaissez c et une projection, vous pouvez trouver l'autre par soustraction, une étape que la section suivante sur l'autre projection détaille entièrement.",
            },
          ],
          "h2": "Qu'est-ce que la projection p dans un triangle rectangle ?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de projection affirme que le carré du côté a est égal à l'hypoténuse multipliée par sa projection :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "En prenant la racine carrée positive des deux membres, on obtient la formule de travail pour cette page :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Le calcul se déroule en deux étapes distinctes. L'étape 1 multiplie l'hypoténuse par la projection, et le résultat est une longueur au carré, et non un côté. L'étape 2 prend la racine carrée positive, qui convertit cette longueur au carré en une longueur ordinaire. Sauter l'étape 2 est l'erreur la plus fréquente avec cette formule, et la section suivante explique pourquoi la racine carrée ne peut pas être omise.",
            },
            {
              "kind": "p",
              "text": "Les unités demandent de l'attention aux deux étapes. Si c et p sont tous les deux en centimètres, leur produit est en centimètres carrés, et la racine carrée redonne des centimètres. Mélanger les unités, par exemple des mètres pour c et des centimètres pour p, donne un produit sans sens, donc convertissez dans une seule unité avant de multiplier. On utilise la racine positive parce qu'une longueur de côté est toujours positive.",
            },
            {
              "kind": "p",
              "text": "Un petit exemple numérique montre les deux étapes en action. Avec [[c = 10]] cm et [[p = 3.6]] cm, l'étape 1 donne [[10 \\times 3.6 = 36]], et l'étape 2 donne [[a = \\sqrt{36} = 6]] cm. Le nombre 36 ne répond à aucune question à lui seul. C'est seulement après la racine carrée qu'il devient la longueur du côté.",
            },
          ],
          "h2": "Formule du côté a d'un triangle rectangle à partir de la projection",
          "image": {
            "alt": "Triangle rectangle ABC avec la hauteur CD, montrant que le côté a au carré est égal à l'hypoténuse c multipliée par la projection p",
            "caption": "Le théorème de projection : a au carré est égal à c fois p, donc a est égal à la racine carrée de c fois p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La racine carrée est là parce que la multiplication produit une quantité au carré. Le théorème ne dit pas que le côté a est égal au produit de c et p. Il dit que le carré du côté a est égal à ce produit. Défaire un carré exige une racine carrée, tout comme défaire un doublement exige de diviser par deux.",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 10]] et [[p = 3.6]]. Leur produit est 36, ce qui est [[a^2]], le carré du côté. Le côté lui-même est le nombre qui, multiplié par lui-même, donne 36, c'est-à-dire 6. Écrire [[a = 36]] reviendrait à affirmer un côté de 36 unités dans un triangle dont l'hypoténuse n'est que de 10, ce qui est manifestement impossible.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous garde les trois grandeurs séparées, car les confondre cause la plupart des erreurs avec cette formule.",
            },
          ],
          "h2": "Pourquoi y a-t-il une racine carrée dans la formule ?",
          "table": {
            "headers": [
              "Grandeur",
              "Signification",
              "Exemple avec c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "La longueur du côté elle-même",
                "6",
              ],
              [
                "a au carré",
                "La longueur du côté multipliée par elle-même",
                "36",
              ],
              [
                "c fois p",
                "Le produit que le théorème assimile à a au carré",
                "36",
              ],
              [
                "Racine carrée de cp",
                "L'étape qui retrouve a à partir de a au carré",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dix courtes étapes vous mènent d'un schéma légendé à une réponse vérifiée.",
            },
            {
              "kind": "steps",
              "steps": [
                "Repérez le triangle rectangle de votre problème et confirmez qu'il possède un angle droit.",
                "Trouvez la hauteur issue de l'angle droit et marquez l'endroit où elle rencontre l'hypoténuse.",
                "Repérez l'hypoténuse complète c, le côté opposé à l'angle droit.",
                "Repérez la projection p, le segment de l'hypoténuse situé à côté du sommet A, où commence le côté a.",
                "Vérifiez que p est plus petite que c. Si ce n'est pas le cas, relégendez le schéma avant de continuer.",
                "Convertissez c et p dans la même unité si elles ont été données dans des unités différentes.",
                "Entrez c dans le champ Hypoténuse c.",
                "Entrez p dans le champ Projection p. N'entrez pas q ici, car cela donnerait le côté b à la place.",
                "Cliquez sur Calculer le côté a et lisez le résultat.",
                "Utilisez Réinitialiser avant de commencer un nouveau problème.",
              ],
            },
            {
              "kind": "p",
              "text": "Le calculateur n'accepte pas q, donc un problème qui ne donne que q demande une étape de soustraction supplémentaire, traitée ci-dessous. Entrer q dans le champ p produit quand même un nombre, mais ce sera le mauvais côté, donc le contrôle des étiquettes de l'étape 4 compte le plus.",
            },
          ],
          "h2": "Comment utiliser le calculateur de côté a d'un triangle rectangle",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Utilisez [[c = 10]] cm et [[p = 3.6]] cm. Les quatre étapes ci-dessous montrent le calcul complet, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrire la formule : a = sqrt(cp).",
                "Remplacer les valeurs : a = sqrt(10 x 3.6).",
                "Multiplier sous la racine : a = sqrt(36).",
                "Prendre la racine carrée : a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 6 cm est le vrai côté perpendiculaire AC, et non une projection ni une aire. Une courte vérification boucle le raisonnement : [[a^2 = 6^2 = 36]] et [[c \\times p = 10 \\times 3.6 = 36]], donc les deux membres du théorème concordent.",
            },
            {
              "kind": "p",
              "text": "Pour référence, l'autre projection est [[q = 10 - 3.6 = 6.4]] cm, le côté b est [[b = \\sqrt{10 \\times 6.4} = 8]] cm, et la hauteur est [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, ce qui confirme le triangle rectangle familier 6-8-10.",
            },
          ],
          "h2": "Exemple pas à pas pour trouver le côté a",
          "image": {
            "alt": "Triangle rectangle avec une hypoténuse de 10 cm et une projection de 3.6 cm, résolu pour donner un côté a égal à 6 cm",
            "caption": "Exemple détaillé : c = 10 cm et p = 3.6 cm donnent a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est le côté a, le côté BC est le côté b, et le côté AB est l'hypoténuse c. La hauteur CD descend de C perpendiculairement à AB et la touche en D, et le marqueur d'angle droit en D confirme que CD est vraiment perpendiculaire.",
            },
            {
              "kind": "p",
              "text": "Le point D partage l'hypoténuse en deux parties : le segment AD est la projection p et le segment DB est la projection q. Le côté a et la projection p sont mis en évidence parce qu'ils forment le couple dont traite cette page. Suivez le schéma dans cet ordre pour fixer les étiquettes : partez de A, suivez le côté a jusqu'à C, puis le côté b jusqu'à B, puis revenez le long de l'hypoténuse de B vers A, en vous arrêtant en D pour voir la division en q et p.",
            },
            {
              "kind": "p",
              "text": "L'appariement de a avec p devient visible dans le petit triangle ACD, où le côté a est l'hypoténuse et p est le côté situé le long de la grande hypoténuse. Comme le triangle ACD est semblable au triangle ABC, le rapport de p à a dans le petit triangle est égal au rapport de a à c dans le grand, ce que la section de preuve transforme en [[a^2 = cp]].",
            },
          ],
          "h2": "Schéma du côté a d'un triangle rectangle à partir de la projection expliqué",
          "image": {
            "alt": "Triangle rectangle ABC avec l'angle droit en C, la hauteur CD vers l'hypoténuse AB, le côté a et la projection p mis en évidence, avec les côtés a et b, l'hypoténuse c, les projections p et q, et la hauteur h légendés",
            "caption": "Triangle principal ABC : la hauteur CD divise l'hypoténuse AB en projection p (AD) et projection q (DB), avec le côté a (AC) mis en évidence.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La preuve repose sur les triangles semblables. Tracer la hauteur CD divise le triangle ABC en deux petits triangles rectangles, ACD et CBD, et tous les deux sont semblables au triangle d'origine. La similitude signifie que leurs côtés correspondants restent dans le même rapport, et l'un de ces rapports donne directement le théorème de projection.",
            },
            {
              "kind": "p",
              "text": "Concentrez-vous sur le triangle ACD et sur le triangle entier ABC. Tous les deux contiennent l'angle en A, et tous les deux contiennent un angle droit, donc leurs troisièmes angles doivent aussi correspondre. Faire correspondre les côtés qui occupent les mêmes positions donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez maintenant par les notations usuelles : [[AD = p]], [[AC = a]] et [[AB = c]]. La proportion devient :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Le produit en croix élimine les fractions. Le numérateur de gauche fois le dénominateur de droite est égal au numérateur de droite fois le dénominateur de gauche, donc [[p \\times c = a \\times a]], ce qui donne :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Prendre la racine carrée positive des deux membres achève la preuve, en donnant [[a = \\sqrt{c \\times p}]]. Le même raisonnement appliqué à l'autre petit triangle, CBD, donne [[b^2 = c \\times q]]. La similitude fait tout le travail : les côtés correspondants de triangles semblables restent proportionnels.",
            },
          ],
          "h2": "Pourquoi le théorème de projection fonctionne-t-il ?",
          "image": {
            "alt": "Triangle rectangle d'origine ABC à côté des petits triangles semblables ACD et CBD, montrant la proportion p sur a égale à a sur c",
            "caption": "Preuve par triangles semblables : p sur a est égal à a sur c, donc le produit en croix donne a au carré égal à c fois p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple énonce les valeurs données, la substitution et la réponse finale. Le commentaire reste court pour que le calcul reste visible, et chaque exemple garde ses unités cohérentes du début à la fin.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[p = 4]] cm, la formule donne [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], donc [[a \\approx 6.325]] cm. Le produit 40 n'est pas un carré parfait, donc la réponse reste une approximation arrondie à trois décimales. Notez que 6.325 cm est plus court que l'hypoténuse de 10 cm, comme cela doit être le cas.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Résultat carré parfait",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Quand le produit est un carré parfait, la réponse est exacte, sans aucun arrondi nécessaire. C'est le même triangle que dans l'exemple pas à pas, et son autre côté est de 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Triangle plus grand",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] m et [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Des nombres plus grands ne changent rien à la méthode : multipliez, puis prenez la racine. L'autre projection ici est de 16 m, ce qui s'associe à un côté de 20 m, formant le triangle classique 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 12.5]] cm et [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], donc [[a \\approx 6.325]] cm. Cela correspond à l'exemple 1 en valeur parce que les deux produits sont égaux à 40, un rappel utile que des données différentes peuvent partager un produit. Gardez le produit complet sous la racine jusqu'à l'étape d'arrondi finale.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Projections égales sur l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 20]] cm et [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, donc [[a \\approx 14.142]] cm. Des projections égales signifient que la hauteur frappe le milieu de l'hypoténuse, ce qui se produit exactement quand les deux côtés sont égaux. Le triangle est donc un triangle rectangle isocèle, et le côté b est égal au côté a.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Petites mesures",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 8]] mm et [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Les petites unités fonctionnent exactement comme les grandes, et la réponse reste en millimètres parce que les deux données étaient en millimètres. Réduire un problème à l'échelle ne change jamais les étapes.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 0.5]] m et [[p = 20]] cm, convertissez d'abord : 0.5 m est égal à 50 cm. Ensuite [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], donc [[a \\approx 31.623]] cm. Multiplier 0.5 par 20 sans convertir aurait donné une racine de 10, une réponse fausse sans aucune unité valable derrière elle.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 16]] ft et [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Le produit 64 est un carré parfait, donc la réponse est exacte. Un rapide contrôle de vraisemblance passe : 8 ft est la moitié de l'hypoténuse, et l'autre côté vaut environ 13.856 ft, ce qui est plus long que a mais toujours plus court que 16 ft.",
            },
          ],
          "h2": "Exemples détaillés pour trouver le côté a à partir de la projection",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Certains problèmes donnent q au lieu de p. Le calculateur de cette page n'accepte pas q, mais ce n'est qu'un détour d'une étape, et non une impasse. Comme les deux projections s'ajoutent pour donner l'hypoténuse, soustrayez pour retrouver p d'abord :",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 25]] cm et [[q = 16]] cm. La soustraction donne [[p = 25 - 16 = 9]] cm. La formule ordinaire s'applique alors : [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Si vous aviez entré 16 directement comme p, le calculateur aurait renvoyé 20 cm, ce qui est le côté b, et non le côté a.",
            },
            {
              "kind": "p",
              "text": "Le <a href=\"/right-triangle-projection-q-calculator/\">calculateur de projection q</a> peut aider quand q elle-même doit être trouvée, et le <a href=\"/right-triangle-projection-p-calculator/\">calculateur de projection p</a> couvre l'étape inverse. Dans tous les cas, la règle reste la même : trouvez p d'abord, puis utilisez [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Comment trouver le côté a quand l'autre projection est connue",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un seul théorème relie trois grandeurs, donc en le réarrangeant on trouve celle qui manque. Les trois formes sont :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous montre chaque réarrangement, ce qu'il trouve, et ce qui doit être connu d'abord.",
            },
          ],
          "h2": "Relation entre le côté a, l'hypoténuse et la projection p",
          "table": {
            "headers": [
              "Grandeur manquante",
              "Formule",
              "Valeurs connues nécessaires",
            ],
            "rows": [
              [
                "Côté a",
                "a = sqrt(cp)",
                "Hypoténuse c et projection p",
              ],
              [
                "Hypoténuse c",
                "c = a au carré / p",
                "Côté a et projection p",
              ],
              [
                "Projection p",
                "p = a au carré / c",
                "Côté a et hypoténuse c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le côté b suit l'image miroir de la formule du côté a. Là où le côté a est associé à la projection p, le côté b est associé à la projection q :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez un seul triangle cohérent pour voir les deux côtés ensemble : [[c = 25]], [[p = 9]] et [[q = 16]]. Alors [[a = \\sqrt{25 \\times 9} = 15]] et [[b = \\sqrt{25 \\times 16} = 20]]. Les deux côtés partagent la même hypoténuse mais s'appuient sur des projections différentes, ce qui explique pourquoi bien identifier p et q décide quel côté vous obtenez.",
            },
            {
              "kind": "p",
              "text": "Les côtés se contraignent aussi mutuellement par le théorème de Pythagore, traité deux sections plus loin : connaître un côté et l'hypoténuse détermine l'autre. Pour les problèmes qui partent de q plutôt que de p, le <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculateur de côté b à partir de la projection</a> applique la même méthode avec l'autre appariement.",
            },
          ],
          "h2": "Relation entre le côté a et le côté b",
          "image": {
            "alt": "Triangle rectangle comparant la projection p associée au côté a à la projection q associée au côté b, avec c égal à 25, p égal à 9 et q égal à 16",
            "caption": "Appariement correct : a utilise p (sqrt(25 x 9) = 15) et b utilise q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de projection et le théorème de Pythagore concordent exactement, et l'algèbre montre pourquoi. Partez des deux formules de projection :",
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
              "text": "En factorisant c dans le membre de droite, on obtient [[a^2 + b^2 = c(p + q)]]. Comme [[p + q = c]], la substitution donne le résultat familier :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Une vérification numérique avec le triangle 9-16-25 le confirme : [[a^2 + b^2 = 225 + 400 = 625]] et [[c^2 = 25^2 = 625]]. Les deux théorèmes ne sont pas rivaux. Le théorème de projection divise la relation de Pythagore en une partie par côté, et additionner les parties la reconstruit.",
            },
          ],
          "h2": "Relation entre la projection p et le théorème de Pythagore",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trois vérifications indépendantes attrapent presque toutes les erreurs. Appliquez au moins l'une d'elles à chaque réponse, et appliquez les trois quand le problème compte.",
            },
            {
              "kind": "h3",
              "text": "Méthode 1 : Vérification par le théorème de projection",
            },
            {
              "kind": "p",
              "text": "Mettez votre réponse au carré et comparez-la au produit de c et p. Pour [[c = 25]], [[p = 9]] et [[a = 15]] : [[a^2 = 225]] et [[c \\times p = 225]], donc la réponse passe. Si les deux nombres diffèrent, soit les données, soit l'étape de la racine carrée a mal tourné.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : Vérification par le théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Trouvez le côté b à partir de q, puis vérifiez [[a^2 + b^2 = c^2]]. Avec [[p = 9]], [[q = 16]] et [[c = 25]] : [[a = 15]], [[b = 20]] et [[225 + 400 = 625 = 25^2]]. Cette vérification va au-delà du calculateur, car elle teste le triangle entier, et non la seule formule.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : Vérifications de taille et d'addition",
            },
            {
              "kind": "p",
              "text": "Confirmez que p est plus petite que c, que [[p + q = c]] quand q est connue, et que le côté a est plus court que l'hypoténuse. Dans l'exemple, 9 est plus petit que 25, [[9 + 16 = 25]], et 15 est plus court que 25. Tout échec ici signale une erreur d'étiquetage, et non une faute de calcul.",
            },
          ],
          "h2": "Comment vérifier le côté a calculé",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huit propriétés découlent directement de [[a = \\sqrt{c \\times p}]] et de la géométrie qui la sous-tend. Chacune sert aussi de contrôle de vraisemblance pour une nouvelle réponse.",
            },
            {
              "items": [
                "Le côté a est toujours plus court que l'hypoténuse dans un triangle rectangle non dégénéré, puisque p n'est qu'une partie de c.",
                "La projection p est toujours plus petite que c, et elle est toujours positive. Des projections nulles ou négatives ne décrivent aucun vrai triangle.",
                "Augmenter p en gardant c fixe augmente a, parce que le produit sous la racine grandit.",
                "Augmenter c en gardant p fixe augmente a mathématiquement, à condition que les nouvelles valeurs décrivent toujours un vrai triangle avec p plus petite que c.",
                "Échanger p et q change le côté calculé : p donne le côté a et q donne le côté b.",
                "Des projections égales donnent des côtés égaux. Avec c = 20 et p = q = 10, les deux côtés sont égaux à 10 fois la racine carrée de 2, soit environ 14.142.",
                "Le résultat est une longueur, et non une aire. Le produit au carré n'est qu'une étape intermédiaire, et la racine carrée restaure les unités de longueur ordinaires.",
                "Multiplier toutes les mesures par le même facteur multiplie le côté a par ce facteur. Doubler c et p double a, puisque le produit quadruple et sa racine double.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quand la hauteur tombe exactement au milieu de l'hypoténuse, le triangle est isocèle, et les deux côtés doivent correspondre, comme le montre le schéma ci-dessous.",
            },
          ],
          "h2": "Propriétés importantes du côté a à partir de la projection",
          "image": {
            "alt": "Triangle rectangle isocèle avec une hypoténuse de 20, des projections p et q égales à 10, et des côtés a et b chacun égaux à 10 racine de 2",
            "caption": "Projections égales : c = 20 avec p = q = 10 donne a = b = 10 racine de 2, soit environ 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque erreur ci-dessous est suivie de sa correction. La plupart d'entre elles remontent aux étiquettes, et non au calcul.",
            },
            {
              "kind": "steps",
              "steps": [
                "Oublier la racine carrée : annoncer cp comme réponse. Avec c = 10 et p = 3.6, la réponse est 6 cm, et non 36.",
                "Confondre a avec a au carré : 36 est a au carré dans cet exemple, tandis que 6 est le côté. Précisez lequel vous voulez dire avant d'écrire un nombre.",
                "Utiliser la projection q au lieu de p : entrer q renvoie le côté b. Avec c = 25 et q = 16, le résultat 20 est le côté b, et non le côté a.",
                "Entrer un côté dans le champ de l'hypoténuse : l'hypoténuse est le côté opposé à l'angle droit et le côté le plus long. Un côté entré comme c fausse toutes les étapes suivantes.",
                "Confondre l'hypoténuse avec une projection : c est le côté entier, tandis que p n'en est qu'une partie. Vérifiez que p est plus petite que c avant de calculer.",
                "Utiliser p supérieure ou égale à c : aucun triangle de ce type n'existe, puisque p fait partie de c. Revérifiez les étiquettes du schéma si cela se produit.",
                "Mélanger centimètres et mètres : convertissez d'abord, comme dans l'exemple 7, où 0.5 m est devenu 50 cm avant d'être multiplié par 20 cm.",
                "Utiliser des mesures négatives : les longueurs sont positives, donc une donnée négative signale une erreur de données, et non un côté négatif.",
                "Appliquer la formule à un triangle non rectangle : le théorème de projection exige la hauteur issue d'un angle droit. Sans angle droit, il n'y a pas de projection p en ce sens.",
                "Arrondir trop tôt : arrondir le produit avant de prendre la racine décale la réponse. Gardez la pleine précision jusqu'à l'étape finale.",
                "Utiliser la mauvaise correspondance des côtés dans le schéma : associer p à b, ou q à a, échange les côtés. Associez p au côté qui touche le sommet A.",
                "Traiter la hauteur comme une projection : la hauteur h est perpendiculaire à l'hypoténuse, et non une partie de celle-ci, donc elle n'a jamais sa place dans le champ p.",
              ],
            },
            {
              "kind": "p",
              "text": "Si une réponse semble fausse, arrêtez-vous et relégendez le schéma avant de recalculer. La plupart des erreurs ci-dessus disparaissent une fois que p et q sont clairement marqués sur l'hypoténuse et que tout le reste est mis de côté.",
            },
          ],
          "h2": "Erreurs fréquentes quand on cherche le côté a à partir de la projection",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le devoir de géométrie et le travail en classe, où les problèmes de projection testent si les élèves savent légender un schéma et appliquer [[a^2 = c \\times p]] au lieu de recourir au théorème de Pythagore par habitude. Les exercices de triangles semblables utilisent la même configuration, puisque la preuve elle-même est un exercice de mise en correspondance des côtés correspondants.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le théorème quand un triangle rectangle doit être reconstruit à partir de mesures partielles : si un dessin donne l'hypoténuse et le pied de la hauteur, le côté manquant suit sans remesurer la figure. Les enseignants utilisent aussi cette configuration comme leçon passerelle entre l'addition de segments et la similitude.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : la géométrie requise du triangle rectangle doit réellement exister. Le théorème décrit des relations géométriques exactes, et non des mesures de terrain approximatives, donc il ne remplace jamais un relevé soigneux ni une mesure d'ingénierie professionnelle. Dans son cadre propre, en revanche, il transforme deux longueurs connues en une troisième avec une seule multiplication et une racine carrée.",
            },
          ],
          "h2": "Applications pratiques du théorème de projection",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne reprend les exemples détaillés, et le dernier problème combine plusieurs idées de ce guide.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 36]] cm et une projection [[p = 4]] cm. Trouvez le côté a.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Projection décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 26]] cm et [[p = 6.5]] cm, trouvez le côté a.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Grande hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 100]] cm et [[p = 64]] cm, trouvez le côté a.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Une hypoténuse mesure [[c = 1.2]] m et sa projection p mesure 30 cm. Trouvez le côté a en centimètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver p à partir de q et c d'abord",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 65]] cm et une projection [[q = 49]] cm. Trouvez le côté a.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : En plusieurs étapes avec le côté b et Pythagore",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 50]] cm et [[p = 18]] cm, trouvez le côté a, puis trouvez le côté b et vérifiez le résultat avec le théorème de Pythagore.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices d'entraînement",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : Convertissez 1.2 m en 120 cm, puis [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : D'abord [[p = 65 - 49 = 16]] cm, puis [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. L'autre projection est [[q = 50 - 18 = 32]] cm, donc [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Vérification : [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Exercices d'entraînement avec réponses",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-intro": "Calculateur de côté a d'un triangle rectangle à partir de la projection",
        "sec-calculate": "Calculer le côté a d'un triangle rectangle à partir de la projection",
        "sec-what-leg-a": "Qu'est-ce que le côté a dans un triangle rectangle ?",
        "sec-what-projection-p": "Qu'est-ce que la projection p dans un triangle rectangle ?",
        "sec-formula": "Formule du côté a d'un triangle rectangle à partir de la projection",
        "sec-why-sqrt": "Pourquoi y a-t-il une racine carrée dans la formule ?",
        "sec-how": "Comment utiliser le calculateur de côté a d'un triangle rectangle",
        "sec-step-example": "Exemple pas à pas pour trouver le côté a",
        "sec-diagram": "Schéma du côté a d'un triangle rectangle à partir de la projection expliqué",
        "sec-proof": "Pourquoi le théorème de projection fonctionne-t-il ?",
        "sec-examples": "Exemples détaillés pour trouver le côté a à partir de la projection",
        "sec-other-projection": "Comment trouver le côté a quand l'autre projection est connue",
        "sec-relationship": "Relation entre le côté a, l'hypoténuse et la projection p",
        "sec-leg-b": "Relation entre le côté a et le côté b",
        "sec-pythagoras": "Relation entre la projection p et le théorème de Pythagore",
        "sec-verify": "Comment vérifier le côté a calculé",
        "sec-properties": "Propriétés importantes du côté a à partir de la projection",
        "sec-mistakes": "Erreurs fréquentes quand on cherche le côté a à partir de la projection",
        "sec-applications": "Applications pratiques du théorème de projection",
        "sec-practice": "Exercices d'entraînement avec réponses",
        "sec-related": "Découvrir les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquemment posées",
      },
    },
};
