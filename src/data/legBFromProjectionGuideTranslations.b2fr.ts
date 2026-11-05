// legBFromProjectionGuideTranslations.bfr.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "question": "Quelle est la formule pour trouver la jambe b à partir de la projection q ?",
          "answer": "La formule est [[b = \\sqrt{c \\times q}]], où c est l'hypoténuse complète et q est la projection qui appartient à la jambe b. Par exemple, [[c = 10]] cm et [[q = 6.4]] cm donnent [[b = 8]] cm.",
        },
        {
          "question": "Pourquoi multiplie-t-on c par q ?",
          "answer": "La multiplication vient des triangles semblables. Le triangle CBD est semblable au triangle ABC, ce qui donne [[q / b = b / c]], et le produit en croix donne [[b^2 = c \\times q]]. Le produit est le carré de la jambe, et non la jambe elle-même.",
        },
        {
          "question": "Pourquoi une racine carrée est-elle nécessaire ?",
          "answer": "Parce que le produit cq est égal à b au carré, et non à b. La racine carrée annule l'élévation au carré et redonne une longueur ordinaire. Sans elle, vous indiqueriez 64 au lieu de 8 dans l'exemple avec c = 10 et q = 6,4.",
        },
        {
          "question": "Que représente la projection q ?",
          "answer": "La projection q est le segment de l'hypoténuse situé à côté du sommet B, créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse. Dans le triangle ABC avec la hauteur CD, [[q = DB]], et elle se trouve le long de l'hypoténuse.",
        },
        {
          "question": "La projection q est-elle la même chose que la jambe b ?",
          "answer": "Non. La jambe b est le côté BC, l'un des côtés qui forment l'angle droit, tandis que la projection q est le segment DB le long de l'hypoténuse. Ce sont des longueurs différentes, à des positions différentes, liées seulement par [[b^2 = c \\times q]].",
        },
        {
          "question": "Pourquoi utilise-t-on q plutôt que p ?",
          "answer": "Parce que chaque jambe est associée à la projection située à côté de son propre sommet. La jambe b touche le sommet B, et q est le segment situé à côté de B. Utiliser p donnerait la jambe a à la place, puisque p est associée à la jambe qui touche le sommet A.",
        },
        {
          "question": "Puis-je trouver la jambe b si seule la projection p est connue ?",
          "answer": "Oui. Soustrayez d'abord p de l'hypoténuse : [[q = c - p]]. Avec [[c = 25]] cm et [[p = 9]] cm, [[q = 16]] cm, puis [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "La projection q peut-elle être plus grande que l'hypoténuse ?",
          "answer": "Non. La projection q n'est qu'une partie de l'hypoténuse, elle doit donc être plus petite que c. Si q était égale à c, p serait nulle et le triangle serait dégénéré plutôt qu'un vrai triangle rectangle.",
        },
        {
          "question": "Comment vérifier la jambe calculée ?",
          "answer": "Mettez la réponse au carré et vérifiez qu'elle est égale à [[c \\times q]]. Vous pouvez aussi trouver la jambe a à partir de p et vérifier [[a^2 + b^2 = c^2]], puis confirmer que q est plus petite que c et que la jambe b est plus courte que l'hypoténuse.",
        },
        {
          "question": "Que se passe-t-il quand p et q sont égales ?",
          "answer": "La hauteur tombe au milieu de l'hypoténuse, et les deux jambes sont égales, le triangle est donc un triangle rectangle isocèle. Avec [[c = 20]] cm et [[p = q = 10]] cm, les deux jambes valent [[10\\sqrt{2}]] cm, soit environ 14,142 cm.",
        },
        {
          "question": "Puis-je trouver la jambe a avec le même théorème ?",
          "answer": "Oui, avec la formule symétrique [[a = \\sqrt{c \\times p}]]. La jambe a est associée à la projection p, tout comme la jambe b est associée à q. Le <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculateur de la jambe a à partir de la projection</a> est conçu pour ce calcul.",
        },
        {
          "question": "Le théorème de projection est-il lié au théorème de Pythagore ?",
          "answer": "Oui. En additionnant les deux formules de projection, on obtient [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], puisque [[p + q = c]]. Le théorème de projection divise la relation de Pythagore en une partie par jambe.",
        },
      ],
      "relatedHeading": "Découvrez les calculateurs de triangles rectangles associés",
      "relatedIntro": "Choisissez l'outil suivant selon les mesures que vous connaissez déjà, puisque chaque calculateur ci-dessous traite une tâche précise sur le triangle rectangle.",
      "relatedItems": [
        "Calculateur de projection d'un triangle rectangle",
        "Calculateur de projection P d'un triangle rectangle",
        "Calculateur de projection Q d'un triangle rectangle",
        "Calculateur de la jambe A d'un triangle rectangle à partir de la projection",
        "Calculateur de l'hypoténuse d'un triangle rectangle à partir des projections",
        "Calculateur de la hauteur d'un triangle rectangle à partir des projections",
        "Calculateur de côté d'un triangle rectangle",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ce calculateur trouve la jambe b d'un triangle rectangle quand vous connaissez l'hypoténuse complète c et la projection q qui appartient à la jambe b. Vous saisissez ces deux longueurs, et il renvoie la longueur réelle du côté b, et non une valeur au carré ni un segment de projection. La formule est [[b = \\sqrt{c \\times q}]], où c est l'hypoténuse complète et q est le segment de l'hypoténuse situé à côté de la jambe b.",
            },
            {
              "kind": "p",
              "text": "Par exemple, si [[c = 10]] cm et [[q = 6.4]] cm, alors [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Le produit 64 n'est qu'une étape intermédiaire. Prendre la racine carrée le transforme de nouveau en longueur, et cette longueur est le côté que vous cherchez.",
            },
            {
              "kind": "p",
              "text": "Le calculateur se trouve en haut de cette page, suivi de la formule, d'un schéma légendé, d'une démonstration du théorème de projection, d'exemples résolus et de vérifications que vous pouvez appliquer à n'importe quelle réponse. Ce guide convient aux élèves du collège et du lycée, aux enseignants, aux tuteurs et aux parents qui aident aux devoirs de géométrie.",
            },
          ],
          "h2": "Calculateur de la jambe b d'un triangle rectangle à partir de la projection",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur comporte deux champs de saisie. Le premier reçoit l'hypoténuse c, le côté complet opposé à l'angle droit. Le second reçoit la projection q, le segment de l'hypoténuse qui appartient à la jambe b. Les deux longueurs doivent utiliser la même unité, convertissez donc d'abord si une mesure est en centimètres et l'autre en mètres.",
            },
            {
              "kind": "p",
              "text": "La projection q doit être plus petite que c. Cette règle est inscrite dans la géométrie : q n'est qu'une partie de l'hypoténuse, elle ne peut donc jamais être égale à tout le côté ni le dépasser. Si votre valeur de q est plus grande que c, vous avez probablement saisi une jambe, la hauteur ou la mauvaise projection.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer la jambe b pour voir le résultat, et utilisez Réinitialiser pour effacer les deux champs avant un nouveau problème. Le résultat est une longueur dans l'unité saisie, ainsi une hypoténuse de 10 cm et une projection de 6,4 cm donnent 8 cm, sans aucune conversion supplémentaire.",
            },
          ],
          "h2": "Calculer la jambe b d'un triangle rectangle à partir de la projection",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle possède deux côtés perpendiculaires, appelés jambes, et un côté le plus long, appelé hypoténuse. Les deux jambes se rencontrent à l'angle droit, et l'hypoténuse se trouve en face de cet angle. Dans ce guide, le triangle est ABC avec l'angle droit en C, la jambe a est le côté AC, la jambe b est le côté BC, et l'hypoténuse c est le côté AB.",
            },
            {
              "kind": "p",
              "text": "La jambe b est l'un des deux côtés qui forment l'angle droit, c'est donc un vrai côté du triangle. Ce n'est pas un segment tracé à l'intérieur du triangle, et ce n'est pas la projection q. La projection q se trouve à plat le long de l'hypoténuse, tandis que la jambe b va du sommet B au sommet de l'angle droit C. Garder ces deux rôles bien distincts est la première étape pour utiliser la formule correctement.",
            },
            {
              "kind": "p",
              "text": "La jambe b ne diffère de la jambe a que par sa position : la jambe b touche le sommet B, et la jambe a touche le sommet A. Chaque jambe possède sa propre projection, c'est pourquoi la formule de b utilise q tandis que la formule de a utilise p, un appariement fixé par l'étiquetage.",
            },
            {
              "kind": "p",
              "text": "Dans tout triangle rectangle non dégénéré, la jambe b est plus courte que l'hypoténuse. Cela donne une vérification rapide pour chaque réponse : si la jambe b calculée est plus longue que c, quelque chose a mal tourné dans les données ou le calcul, et les étiquettes du schéma sont le premier endroit à regarder.",
            },
          ],
          "h2": "Qu'est-ce que la jambe b dans un triangle rectangle ?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tracez la hauteur issue du sommet de l'angle droit C, perpendiculaire à l'hypoténuse AB. Elle rencontre l'hypoténuse en un point appelé pied, noté D. Ce point divise l'hypoténuse en deux segments adjacents, et ces segments sont les projections. Le segment AD est la projection p, et le segment DB est la projection q.",
            },
            {
              "kind": "p",
              "text": "La projection q appartient à la jambe b parce qu'elle se trouve à côté du sommet B, le sommet même où commence la jambe b. Dans le petit triangle CBD, la jambe b est l'hypoténuse et q est l'une de ses jambes, et c'est ce lien géométrique qui fait fonctionner le théorème de projection. La projection p, par le même raisonnement, appartient à la jambe a, qui touche le sommet A.",
            },
            {
              "kind": "p",
              "text": "Les projections sont des longueurs le long de l'hypoténuse, mesurées dans la même unité que les autres côtés. Elles ne sont perpendiculaires à rien, et ce ne sont pas des côtés du triangle d'origine. On peut imaginer une projection comme l'ombre qu'une jambe projette sur l'hypoténuse quand la hauteur tombe droit dessus.",
            },
            {
              "kind": "p",
              "text": "Comme p et q sont les deux parties d'un même côté droit, elles s'additionnent pour donner toute l'hypoténuse :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Cette addition est utile en elle-même. Si vous connaissez c et une projection, vous pouvez trouver l'autre par soustraction, une étape que la section suivante sur l'autre projection présente en détail.",
            },
          ],
          "h2": "Qu'est-ce que la projection q dans un triangle rectangle ?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de projection affirme que le carré de la jambe b est égal à l'hypoténuse multipliée par sa projection :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendre la racine carrée positive des deux côtés donne la formule de travail de cette page :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Le calcul se déroule en deux étapes distinctes. L'étape 1 multiplie l'hypoténuse par la projection, et le résultat est une longueur au carré, et non un côté. L'étape 2 prend la racine carrée positive, qui convertit cette longueur au carré en une longueur ordinaire. Omettre l'étape 2 est la plus fréquente des erreurs avec cette formule, et la section suivante explique pourquoi la racine carrée ne peut pas être laissée de côté.",
            },
            {
              "kind": "p",
              "text": "Les unités demandent de l'attention aux deux étapes. Si c et q sont tous deux en centimètres, leur produit est en centimètres carrés, et la racine carrée redonne des centimètres. Mélanger les unités, par exemple des mètres pour c et des centimètres pour q, donne un produit sans signification, convertissez donc vers une seule unité avant de multiplier. On utilise la racine positive parce qu'une longueur de côté est toujours positive.",
            },
            {
              "kind": "p",
              "text": "Un petit exemple numérique montre les deux étapes en action. Avec [[c = 10]] cm et [[q = 6.4]] cm, l'étape 1 donne [[10 \\times 6.4 = 64]], et l'étape 2 donne [[b = \\sqrt{64} = 8]] cm. Le nombre 64 ne répond à aucune question à lui seul. C'est seulement après la racine carrée qu'il devient la longueur de la jambe.",
            },
          ],
          "h2": "Formule de la jambe b d'un triangle rectangle à partir de la projection",
          "image": {
            "alt": "Triangle rectangle ABC avec la hauteur CD, montrant que le carré de la jambe b est égal à l'hypoténuse c multipliée par la projection q",
            "caption": "Le théorème de projection : b au carré est égal à c fois q, donc b est égal à la racine carrée de c fois q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La racine carrée est là parce que la multiplication produit une quantité au carré. Le théorème ne dit pas que la jambe b est égale au produit de c et q. Il dit que le carré de la jambe b est égal à ce produit. Annuler un carré exige une racine carrée, tout comme annuler un doublement exige de diviser par deux.",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 10]] et [[q = 6.4]]. Leur produit est 64, ce qui est [[b^2]], le carré de la jambe. La jambe elle-même est le nombre qui, multiplié par lui-même, donne 64, c'est-à-dire 8. Écrire [[b = 64]] reviendrait à affirmer un côté de 64 unités dans un triangle dont l'hypoténuse n'est que de 10, ce qui est manifestement impossible.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous distingue les trois quantités, puisque les confondre cause la plupart des erreurs avec cette formule.",
            },
          ],
          "h2": "Pourquoi y a-t-il une racine carrée dans la formule ?",
          "table": {
            "headers": [
              "Quantité",
              "Signification",
              "Exemple avec c = 10, q = 6,4",
            ],
            "rows": [
              [
                "[[b]]",
                "La longueur de la jambe elle-même",
                "8",
              ],
              [
                "[[b^2]]",
                "La longueur de la jambe multipliée par elle-même",
                "64",
              ],
              [
                "[[c \\times q]]",
                "Le produit que le théorème égalise avec [[b^2]]",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "L'étape qui retrouve b à partir de [[b^2]]",
                "8",
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
                "Identifiez le triangle rectangle de votre problème et confirmez qu'il possède un angle droit.",
                "Trouvez la hauteur issue de l'angle droit et marquez l'endroit où elle rencontre l'hypoténuse.",
                "Identifiez l'hypoténuse complète c, le côté opposé à l'angle droit.",
                "Identifiez la projection q, le segment de l'hypoténuse situé à côté du sommet B, où commence la jambe b.",
                "Vérifiez que q est plus petite que c. Si ce n'est pas le cas, réétiquetez le schéma avant de continuer.",
                "Convertissez c et q dans la même unité si elles ont été données dans des unités différentes.",
                "Saisissez c dans le champ Hypoténuse c.",
                "Saisissez q dans le champ Projection q. Ne saisissez pas p ici, puisque cela donnerait la jambe a à la place.",
                "Cliquez sur Calculer la jambe b et lisez le résultat.",
                "Utilisez Réinitialiser avant de commencer un nouveau problème.",
              ],
            },
            {
              "kind": "p",
              "text": "Le calculateur n'accepte pas p, donc un problème qui ne donne que p demande une soustraction supplémentaire, présentée plus loin. Saisir p dans le champ q produit quand même un nombre, mais ce sera la mauvaise jambe, donc la vérification des étiquettes de l'étape 4 est la plus importante.",
            },
          ],
          "h2": "Comment utiliser le calculateur de la jambe b d'un triangle rectangle",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Utilisez [[c = 10]] cm et [[q = 6.4]] cm. Les quatre étapes ci-dessous montrent tout le calcul, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : b = sqrt(cq).",
                "Remplacez les valeurs : b = sqrt(10 x 6,4).",
                "Multipliez sous la racine : b = sqrt(64).",
                "Prenez la racine carrée : b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 8 cm est le vrai côté perpendiculaire BC, et non une projection ni une aire. Une courte vérification boucle le calcul : [[b^2 = 8^2 = 64]] et [[c \\times q = 10 \\times 6.4 = 64]], les deux côtés du théorème sont donc d'accord.",
            },
            {
              "kind": "p",
              "text": "À titre de référence, l'autre projection est [[p = 10 - 6.4 = 3.6]] cm, la jambe a est [[a = \\sqrt{10 \\times 3.6} = 6]] cm, et la hauteur est [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, ce qui confirme le triangle rectangle familier 6-8-10.",
            },
          ],
          "h2": "Exemple pas à pas pour trouver la jambe b",
          "image": {
            "alt": "Triangle rectangle avec une hypoténuse de 10 cm et une projection de 6,4 cm, résolu pour donner une jambe b égale à 8 cm",
            "caption": "Exemple résolu : c = 10 cm et q = 6,4 cm donnent b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est la jambe a, le côté BC est la jambe b, et le côté AB est l'hypoténuse c. La hauteur CD tombe de C perpendiculairement sur AB et la touche en D, et le marqueur d'angle droit en D confirme que CD est vraiment perpendiculaire.",
            },
            {
              "kind": "p",
              "text": "Le point D divise l'hypoténuse en deux parties : le segment AD est la projection p et le segment DB est la projection q. La jambe b et la projection q sont mises en évidence parce qu'elles forment la paire dont traite cette page. Parcourez le schéma dans cet ordre pour fixer les étiquettes : commencez en B, suivez la jambe b jusqu'à C, puis la jambe a jusqu'à A, puis revenez le long de l'hypoténuse de A à B, en vous arrêtant en D pour voir la division en p et q.",
            },
            {
              "kind": "p",
              "text": "L'appariement de b avec q devient visible dans le petit triangle CBD, où la jambe b est l'hypoténuse et q est le côté situé le long de la grande hypoténuse. Comme le triangle CBD est semblable au triangle ABC, le rapport de q à b dans le petit triangle est égal au rapport de b à c dans le grand, ce que la section de démonstration transforme en [[b^2 = cq]].",
            },
          ],
          "h2": "Schéma de la jambe b d'un triangle rectangle à partir de la projection expliqué",
          "image": {
            "alt": "Triangle rectangle ABC avec un angle droit en C, hauteur CD vers l'hypoténuse AB, jambe b et projection q mises en évidence, avec les jambes a et b, l'hypoténuse c, les projections p et q, et la hauteur h étiquetées",
            "caption": "Triangle principal ABC : la hauteur CD divise l'hypoténuse AB en projection p (AD) et projection q (DB), avec la jambe b (BC) mise en évidence.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La démonstration repose sur les triangles semblables. Tracer la hauteur CD divise le triangle ABC en deux petits triangles rectangles, ACD et CBD, et les deux sont semblables au triangle d'origine. La similitude signifie que leurs côtés correspondants restent dans le même rapport, et l'un de ces rapports donne directement le théorème de projection.",
            },
            {
              "kind": "p",
              "text": "Concentrez-vous sur le triangle CBD et sur tout le triangle ABC. Les deux contiennent l'angle en B, et les deux contiennent un angle droit, leurs troisièmes angles doivent donc aussi correspondre. Faire correspondre les côtés qui occupent les mêmes positions donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Remplacez maintenant par les symboles habituels : [[DB = q]], [[BC = b]] et [[AB = c]]. La proportion devient :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Le produit en croix élimine les fractions. Le numérateur de gauche fois le dénominateur de droite est égal au numérateur de droite fois le dénominateur de gauche, donc [[q \\times c = b \\times b]], ce qui donne :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendre la racine carrée positive des deux côtés termine la démonstration et donne [[b = \\sqrt{c \\times q}]]. Le même raisonnement appliqué à l'autre petit triangle, ACD, donne [[a^2 = c \\times p]]. La similitude fait tout le travail : les côtés correspondants de triangles semblables restent proportionnels.",
            },
          ],
          "h2": "Pourquoi le théorème de projection fonctionne-t-il ?",
          "image": {
            "alt": "Triangle rectangle ABC d'origine à côté des petits triangles semblables ACD et CBD, montrant que la proportion q sur b est égale à b sur c",
            "caption": "Démonstration par triangles semblables : q sur b est égal à b sur c, donc le produit en croix donne b au carré égal à c fois q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple indique les valeurs données, la substitution et la réponse finale. Le commentaire reste court pour que le calcul reste visible, et chaque exemple garde ses unités cohérentes du début à la fin.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[q = 6.4]] cm, la formule donne [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], donc [[b = 8]] cm. Le produit 64 est un carré parfait, la réponse est donc exacte, sans arrondi nécessaire. C'est le même triangle que dans l'exemple pas à pas, et son autre jambe mesure 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Résultat en carré parfait",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Quand le produit est un carré parfait, la réponse est exacte. L'autre projection ici est de 16 cm, associée à une jambe de 20 cm, ce qui forme le triangle classique 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Carré non parfait",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 12]] cm et [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], donc [[b \\approx 7.746]] cm. Le produit 60 n'est pas un carré parfait, la réponse reste donc une approximation arrondie à trois décimales. Notez que 7,746 cm est plus court que l'hypoténuse de 12 cm, comme il se doit.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 12.5]] cm et [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], donc [[b \\approx 6.325]] cm. Cela correspond à la valeur du guide de la jambe a, où le même produit 40 apparaissait avec les rôles de p et q inversés, un rappel utile que des données différentes peuvent partager un produit. Gardez le produit complet sous la racine jusqu'à l'étape finale d'arrondi.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Grand triangle",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 50]] cm et [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Des nombres plus grands ne changent rien à la méthode : multipliez, puis prenez la racine. L'autre projection ici est de 18 cm, associée à une jambe de 30 cm, ce qui forme le triangle classique 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Projections égales",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 20]] cm et [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, donc [[b \\approx 14.142]] cm. Des projections égales signifient que la hauteur frappe le milieu de l'hypoténuse, ce qui se produit exactement quand les deux jambes sont égales. Le triangle est donc un triangle rectangle isocèle, et la jambe a est égale à la jambe b.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 0.5]] m et [[q = 20]] cm, convertissez d'abord : 0,5 m équivaut à 50 cm. Puis [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], donc [[b \\approx 31.623]] cm. Multiplier 0,5 par 20 sans convertir aurait donné une racine de 10, une réponse fausse sans aucune unité valable derrière elle.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 16]] pieds et [[q = 9]] pieds, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] pieds. Le produit 144 est un carré parfait, la réponse est donc exacte. Une courte vérification passe : 12 pieds représentent les trois quarts de l'hypoténuse, et l'autre jambe vaut environ 10,583 pieds, plus courte que b mais toujours un vrai côté du même triangle.",
            },
          ],
          "h2": "Exemples résolus pour trouver la jambe b à partir de la projection",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Certains problèmes donnent p au lieu de q. Le calculateur de cette page n'accepte pas p, mais ce n'est qu'un détour d'une étape, et non une impasse. Comme les deux projections s'additionnent pour donner l'hypoténuse, soustrayez d'abord pour retrouver q :",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[c = 25]] cm et [[p = 9]] cm. La soustraction donne [[q = 25 - 9 = 16]] cm. La formule ordinaire s'applique alors : [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Si vous aviez saisi 9 directement comme q, le calculateur aurait renvoyé 15 cm, c'est-à-dire la jambe a, et non la jambe b.",
            },
            {
              "kind": "p",
              "text": "Le <a href=\"/right-triangle-projection-p-calculator/\">calculateur de projection p</a> peut aider quand p elle-même doit être trouvée, et le <a href=\"/right-triangle-projection-q-calculator/\">calculateur de projection q</a> couvre l'étape inverse. Dans tous les cas, la règle reste la même : trouvez d'abord q, puis utilisez [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Comment trouver la jambe b quand l'autre projection est connue",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un seul théorème relie trois quantités, donc le réarranger permet de trouver celle qui manque. Les trois formes sont :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous montre chaque réarrangement, ce qu'il trouve et ce qui doit être connu d'abord.",
            },
          ],
          "h2": "Relation entre la jambe b, l'hypoténuse et la projection q",
          "table": {
            "headers": [
              "Quantité manquante",
              "Formule",
              "Valeurs connues nécessaires",
            ],
            "rows": [
              [
                "Jambe b",
                "[[b = \\sqrt{c \\times q}]]",
                "Hypoténuse c et projection q",
              ],
              [
                "Hypoténuse c",
                "[[c = \frac{b^2}{q}]]",
                "Jambe b et projection q",
              ],
              [
                "Projection q",
                "[[q = \frac{b^2}{c}]]",
                "Jambe b et hypoténuse c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "La jambe a suit l'image miroir de la formule de la jambe b. Là où la jambe b est associée à la projection q, la jambe a est associée à la projection p :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez un seul triangle cohérent pour voir les deux jambes ensemble : [[c = 25]], [[p = 9]] et [[q = 16]]. Alors [[a = \\sqrt{25 \\times 9} = 15]] et [[b = \\sqrt{25 \\times 16} = 20]]. Les deux jambes partagent la même hypoténuse mais s'appuient sur des projections différentes, c'est pourquoi identifier correctement p et q décide quelle jambe vous obtenez.",
            },
            {
              "kind": "p",
              "text": "Les jambes se contraignent aussi mutuellement par le théorème de Pythagore, présenté deux sections plus loin : connaître une jambe et l'hypoténuse détermine l'autre. Pour les problèmes qui partent de p plutôt que de q, le <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculateur de la jambe a à partir de la projection</a> applique la même méthode avec l'autre appariement.",
            },
          ],
          "h2": "Relation entre la jambe b et la jambe a",
          "image": {
            "alt": "Triangle rectangle comparant la projection p associée à la jambe a et la projection q associée à la jambe b, avec c égal à 25, p égal à 9 et q égal à 16",
            "caption": "Appariement correct : a utilise p (sqrt(25 x 9) = 15) et b utilise q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de projection et le théorème de Pythagore s'accordent exactement, et l'algèbre montre pourquoi. Partez des deux formules de projection :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Ajoutez la formule correspondante pour la jambe a, [[a^2 = c \\times p]], pour obtenir :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Mettre c en facteur à droite donne [[a^2 + b^2 = c(p + q)]]. Comme [[p + q = c]], la substitution donne le résultat familier :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Une vérification numérique avec le triangle 9-16-25 le confirme : [[a^2 + b^2 = 225 + 400 = 625]] et [[c^2 = 25^2 = 625]]. Les deux théorèmes ne sont pas rivaux. Le théorème de projection divise la relation de Pythagore en une partie par jambe, et additionner les parties la reconstruit.",
            },
          ],
          "h2": "Relation entre la projection q et le théorème de Pythagore",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trois vérifications indépendantes détectent presque toutes les erreurs. Appliquez-en au moins une à chaque réponse, et les trois quand le problème compte.",
            },
            {
              "kind": "h3",
              "text": "Méthode 1 : Vérification par le théorème de projection",
            },
            {
              "kind": "p",
              "text": "Mettez votre réponse au carré et comparez-la au produit de c et q. Pour [[c = 25]], [[q = 16]] et [[b = 20]] : [[b^2 = 400]] et [[c \\times q = 400]], la réponse passe donc. Si les deux nombres diffèrent, les données ou l'étape de la racine carrée ont mal tourné.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : Vérification par le théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Trouvez la jambe a à partir de p, puis vérifiez [[a^2 + b^2 = c^2]]. Avec [[p = 9]], [[q = 16]] et [[c = 25]] : [[a = 15]], [[b = 20]] et [[225 + 400 = 625 = 25^2]]. Cette vérification va au-delà du calculateur, puisqu'elle teste tout le triangle, et non une seule formule.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : Vérifications de taille et d'addition",
            },
            {
              "kind": "p",
              "text": "Confirmez que q est plus petite que c, que [[p + q = c]] quand p est connue, et que la jambe b est plus courte que l'hypoténuse. Dans l'exemple, 16 est plus petit que 25, [[9 + 16 = 25]], et 20 est plus court que 25. Tout échec ici indique une erreur d'étiquetage, et non une faute de calcul.",
            },
          ],
          "h2": "Comment vérifier la jambe b calculée",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huit propriétés découlent directement de [[b = \\sqrt{c \\times q}]] et de la géométrie qui la sous-tend. Chacune sert aussi de vérification de bon sens pour une nouvelle réponse.",
            },
            {
              "items": [
                "La jambe b est toujours plus courte que l'hypoténuse dans un triangle rectangle non dégénéré, puisque q n'est qu'une partie de c.",
                "La projection q est toujours plus petite que c, et elle est toujours positive. Des projections nulles ou négatives ne décrivent aucun vrai triangle.",
                "Augmenter q en gardant c fixe augmente b, parce que le produit sous la racine grandit.",
                "Augmenter c en gardant q fixe augmente b mathématiquement, à condition que les nouvelles valeurs décrivent toujours un vrai triangle avec q plus petite que c.",
                "Échanger p et q change la jambe calculée : q donne la jambe b et p donne la jambe a.",
                "Des projections égales produisent des jambes égales. Avec c = 20 et p = q = 10, les deux jambes valent 10 fois la racine carrée de 2, soit environ 14,142.",
                "Le résultat est une longueur, et non une aire. Le produit au carré n'est qu'une étape intermédiaire, et la racine carrée restaure les unités de longueur ordinaires.",
                "Multiplier toutes les mesures par le même facteur multiplie la jambe b par ce facteur. Doubler c et q double b, puisque le produit quadruple et sa racine double.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quand la hauteur tombe exactement au milieu de l'hypoténuse, le triangle est isocèle, et les deux jambes doivent correspondre, comme le montre le schéma ci-dessous.",
            },
          ],
          "h2": "Propriétés importantes de la jambe b à partir de la projection",
          "image": {
            "alt": "Triangle rectangle isocèle avec une hypoténuse de 20, des projections p et q égales de 10, et des jambes a et b chacune égales à 10 racine 2",
            "caption": "Projections égales : c = 20 avec p = q = 10 donne a = b = 10 racine 2, soit environ 14,142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque erreur ci-dessous est suivie de sa correction. La plupart remontent à l'étiquetage, et non au calcul.",
            },
            {
              "kind": "steps",
              "steps": [
                "Oublier la racine carrée : indiquer cq comme réponse. Avec c = 10 et q = 6,4, la réponse est 8 cm, et non 64.",
                "Confondre b et b au carré : 64 est b au carré dans cet exemple, tandis que 8 est la jambe. Dites lequel vous voulez dire avant d'écrire un nombre.",
                "Utiliser la projection p au lieu de q : saisir p renvoie la jambe a. Avec c = 25 et p = 9, le résultat 15 est la jambe a, et non la jambe b.",
                "Saisir une jambe dans le champ de l'hypoténuse : l'hypoténuse est le côté opposé à l'angle droit et le côté le plus long. Une jambe saisie comme c fausse toutes les étapes suivantes.",
                "Confondre l'hypoténuse et une projection : c est tout le côté, tandis que q n'en est qu'une partie. Vérifiez que q est plus petite que c avant de calculer.",
                "Utiliser q supérieure ou égale à c : un tel triangle n'existe pas, puisque q fait partie de c. Revérifiez les étiquettes du schéma si cela se produit.",
                "Mélanger centimètres et mètres : convertissez d'abord, comme dans l'exemple 7, où 0,5 m est devenu 50 cm avant d'être multiplié par 20 cm.",
                "Utiliser des mesures négatives : les longueurs sont positives, une entrée négative signale donc une erreur de données, et non une jambe négative.",
                "Appliquer la formule à un triangle non rectangle : le théorème de projection exige la hauteur issue d'un angle droit. Sans angle droit, il n'y a pas de projection q en ce sens.",
                "Arrondir trop tôt : arrondir le produit avant de prendre la racine déplace la réponse. Gardez toute la précision jusqu'à l'étape finale.",
                "Utiliser la mauvaise correspondance des côtés dans le schéma : associer q à a, ou p à b, échange les jambes. Associez q à la jambe qui touche le sommet B.",
                "Traiter la hauteur comme une projection : la hauteur h est perpendiculaire à l'hypoténuse, et non un morceau de celle-ci, elle n'a donc jamais sa place dans le champ q.",
              ],
            },
            {
              "kind": "p",
              "text": "Si une réponse semble fausse, arrêtez-vous et réétiquetez le schéma avant de recalculer. La plupart des erreurs ci-dessus disparaissent une fois que p et q sont clairement marqués sur l'hypoténuse et que tout le reste est mis de côté.",
            },
          ],
          "h2": "Erreurs fréquentes lors du calcul de la jambe b à partir de la projection",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le devoir de géométrie et le travail en classe, où les problèmes de projection testent si les élèves savent étiqueter un schéma et appliquer [[b^2 = c \\times q]] au lieu de recourir au théorème de Pythagore par habitude. Les exercices sur les triangles semblables utilisent le même montage, puisque la démonstration elle-même est un exercice de mise en correspondance des côtés.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le théorème quand un triangle rectangle doit être reconstruit à partir de mesures partielles : si un dessin donne l'hypoténuse et le pied de la hauteur, la jambe manquante suit sans remesurer la figure. Les enseignants utilisent aussi ce montage comme leçon de transition entre l'addition de segments et la similitude.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : la géométrie du triangle rectangle requise doit vraiment exister. Le théorème décrit des relations géométriques exactes, et non des mesures de terrain approximatives, il ne remplace donc jamais un levé soigneux ni une mesure technique professionnelle. Dans son cadre propre, il transforme pourtant deux longueurs connues en une troisième avec une seule multiplication et une racine carrée.",
            },
          ],
          "h2": "Applications pratiques du théorème de projection",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne répète les exemples résolus, et le dernier problème combine plusieurs idées de ce guide.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 36]] cm et une projection [[q = 9]] cm. Trouvez la jambe b.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Projection décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 26]] cm et [[q = 6.5]] cm, trouvez la jambe b.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Grande hypoténuse",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 100]] cm et [[q = 36]] cm, trouvez la jambe b.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Une hypoténuse mesure [[c = 1.5]] m et sa projection q mesure 24 cm. Trouvez la jambe b en centimètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver d'abord q à partir de p et c",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 65]] cm et une projection [[p = 49]] cm. Trouvez la jambe b.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Plusieurs étapes avec la jambe a et Pythagore",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 50]] cm et [[q = 32]] cm, trouvez la jambe b, puis trouvez la jambe a et vérifiez le résultat avec le théorème de Pythagore.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : Convertissez 1,5 m en 150 cm, puis [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : D'abord [[q = 65 - 49 = 16]] cm, puis [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. L'autre projection est [[p = 50 - 32 = 18]] cm, donc [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Vérification : [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Exercices avec réponses",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-intro": "Calculateur de la jambe b d'un triangle rectangle à partir de la projection",
        "sec-calculate": "Calculer la jambe b d'un triangle rectangle à partir de la projection",
        "sec-what-leg-b": "Qu'est-ce que la jambe b dans un triangle rectangle ?",
        "sec-what-projection-q": "Qu'est-ce que la projection q dans un triangle rectangle ?",
        "sec-formula": "Formule de la jambe b d'un triangle rectangle à partir de la projection",
        "sec-why-sqrt": "Pourquoi y a-t-il une racine carrée dans la formule ?",
        "sec-how": "Comment utiliser le calculateur de la jambe b d'un triangle rectangle",
        "sec-step-example": "Exemple pas à pas pour trouver la jambe b",
        "sec-diagram": "Schéma de la jambe b d'un triangle rectangle à partir de la projection expliqué",
        "sec-proof": "Pourquoi le théorème de projection fonctionne-t-il ?",
        "sec-examples": "Exemples résolus pour trouver la jambe b à partir de la projection",
        "sec-other-projection": "Comment trouver la jambe b quand l'autre projection est connue",
        "sec-relationship": "Relation entre la jambe b, l'hypoténuse et la projection q",
        "sec-leg-a": "Relation entre la jambe b et la jambe a",
        "sec-pythagoras": "Relation entre la projection q et le théorème de Pythagore",
        "sec-verify": "Comment vérifier la jambe b calculée",
        "sec-properties": "Propriétés importantes de la jambe b à partir de la projection",
        "sec-mistakes": "Erreurs fréquentes lors du calcul de la jambe b à partir de la projection",
        "sec-applications": "Applications pratiques du théorème de projection",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Découvrez les calculateurs de triangles rectangles associés",
        "sec-faq": "Questions fréquemment posées",
      },
    },
};
