// projectionQGuideTranslations.bfr.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "answer": "La formule est [[q = \\frac{b^2}{c}]], où b est la cathète associée à q et c est l'hypoténuse complète. Élevez d'abord la cathète b au carré, puis divisez par c. Par exemple, [[b = 8]] cm et [[c = 10]] cm donnent [[q = 6.4]] cm.",
          "question": "Quelle est la formule de la projection q ?",
        },
        {
          "answer": "La projection q est le segment de l'hypoténuse situé à côté du sommet B, créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse au point D. Dans le triangle ABC, [[q = DB]], la partie de l'hypoténuse associée à la cathète b.",
          "question": "Que représente la projection q ?",
        },
        {
          "answer": "Le carré vient des triangles semblables : le triangle CBD est semblable au triangle ABC, ce qui donne [[\\frac{q}{b} = \\frac{b}{c}]], et la cathète b apparaît dans les deux rapports. En multipliant en croix, on obtient [[b^2 = c \\times q]], donc le carré est inscrit dans la géométrie.",
          "question": "Pourquoi la cathète b est-elle au carré ?",
        },
        {
          "answer": "La division isole q. Le théorème de la projection affirme [[b^2 = c \\times q]], où q est multiplié par c, donc diviser les deux membres par c laisse q seul. La division transforme aussi la longueur au carré en une longueur ordinaire.",
          "question": "Pourquoi divise-t-on par l'hypoténuse ?",
        },
        {
          "answer": "Non. La cathète b est le côté BC, l'un des côtés qui forment l'angle droit, tandis que la projection q est le segment DB le long de l'hypoténuse. Dans le triangle 6-8-10, la cathète b mesure 8 cm et la projection q seulement 6.4 cm.",
          "question": "La projection q est-elle la même chose que la cathète b ?",
        },
        {
          "answer": "La projection q se trouve à côté du sommet B et s'associe à la cathète b, tandis que la projection p se trouve à côté du sommet A et s'associe à la cathète a. Ce sont les deux segments que la hauteur crée sur l'hypoténuse : [[p + q = c]].",
          "question": "Pourquoi q est-elle associée à la cathète b plutôt qu'à la cathète a ?",
        },
        {
          "answer": "La projection p, à côté du sommet A, s'associe à la cathète a, et la projection q, à côté du sommet B, s'associe à la cathète b. Ce sont les deux segments créés par la hauteur sur l'hypoténuse : [[p + q = c]]. Dans le triangle 6-8-10, p vaut 3.6 cm et q 6.4 cm, donc q est le plus long segment.",
          "question": "Quelle est la différence entre la projection p et la projection q ?",
        },
        {
          "answer": "Oui. Soustrayez q de l'hypoténuse : [[p = c - q]]. Avec [[c = 10]] cm et [[q = 6.4]] cm, [[p = 3.6]] cm. Vous pouvez aussi trouver p directement à partir de la cathète a avec [[p = \\frac{a^2}{c}]].",
          "question": "Puis-je calculer la projection p si je connais déjà q ?",
        },
        {
          "answer": "Non. La projection q n'est qu'une partie de l'hypoténuse, elle doit donc être plus petite que c. Si q était égale à c, p serait nulle et le triangle serait dégénéré. Un résultat supérieur à c signale toujours une erreur de saisie ou d'étiquetage.",
          "question": "La projection q peut-elle être plus grande que l'hypoténuse ?",
        },
        {
          "answer": "Il faut aussi connaître p ou c. Trouvez p avec [[p = c - q]], puis utilisez [[h = \\sqrt{p \\times q}]]. Avec [[q = 6.4]] cm et [[c = 10]] cm, [[p = 3.6]] cm et [[h = 4.8]] cm. La projection q seule ne permet pas de déterminer la hauteur.",
          "question": "Comment trouver la hauteur lorsque q est connue ?",
        },
        {
          "answer": "Recalculez [[q = \\frac{b^2}{c}]], puis vérifiez [[p + q = c]] après avoir trouvé p par soustraction, et confirmez que q est positive et plus petite que c. Vous pouvez aussi trouver la cathète a à partir de p et vérifier [[a^2 + b^2 = c^2]].",
          "question": "Comment puis-je vérifier un calcul de projection q ?",
        },
        {
          "answer": "La hauteur tombe au milieu de l'hypoténuse, et les deux cathètes sont égales, donc le triangle est isocèle. Avec [[c = 10]] cm et [[p = q = 5]] cm, les deux cathètes sont égales à [[\\sqrt{50}]] cm, soit environ 7.071 cm.",
          "question": "Que se passe-t-il lorsque p et q sont égales ?",
        },
      ],
      "relatedHeading": "Découvrir les calculatrices de triangles rectangles associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche précise sur le triangle rectangle, alors choisissez l'outil qui correspond aux mesures que vous connaissez déjà.",
      "relatedItems": [
        "Calculatrice de projection d'un triangle rectangle",
        "Calculatrice de projection P d'un triangle rectangle",
        "Calculatrice de cathète B à partir de la projection d'un triangle rectangle",
        "Calculatrice d'hypoténuse à partir des projections d'un triangle rectangle",
        "Calculatrice de hauteur à partir des projections d'un triangle rectangle",
        "Calculatrice de côtés d'un triangle rectangle",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le travail de géométrie à l'école et en classe, où les problèmes de projection vérifient si les élèves savent étiqueter un schéma et appliquer [[q = \\frac{b^2}{c}]] au lieu de recourir au théorème de Pythagore par habitude. Les exercices sur les triangles semblables utilisent la même configuration, puisque la preuve elle-même est un exercice de mise en correspondance des côtés correspondants.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le théorème lorsqu'un triangle rectangle doit être reconstruit à partir de mesures partielles : si un dessin donne l'hypoténuse et le pied de la hauteur, la projection manquante suit sans mesurer de nouveau la figure. Les enseignants utilisent aussi cette configuration comme leçon de transition entre l'addition des segments et la similitude.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : la géométrie du triangle rectangle requise doit réellement exister. Le théorème décrit des relations géométriques exactes, et non des mesures de terrain approximatives, il ne remplace donc jamais un relevé soigneux ni une mesure professionnelle en ingénierie.",
            },
          ],
          "h2": "Applications pratiques des calculs de projection dans un triangle rectangle",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculatrice possède deux champs de saisie. Le premier reçoit la cathète b, le côté perpendiculaire associé à la projection q. Le second reçoit l'hypoténuse c, le côté complet opposé à l'angle droit. Les deux longueurs doivent utiliser la même unité, convertissez donc d'abord si une mesure est en centimètres et l'autre en mètres.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse doit être plus longue que la cathète b, puisqu'une cathète est un côté de l'angle droit tandis que l'hypoténuse traverse tout le triangle. Si votre valeur de b est supérieure à c, vous avez probablement saisi une projection, la hauteur ou le mauvais côté.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer la projection q pour voir le résultat, et utilisez Réinitialiser pour effacer les deux champs avant un nouveau problème. Le résultat est une longueur dans l'unité saisie, donc une cathète de 8 cm et une hypoténuse de 10 cm donnent 6.4 cm. Le résultat est une longueur de segment le long de l'hypoténuse.",
            },
          ],
          "h2": "Calculer la projection Q d'un triangle rectangle",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est la cathète a, le côté BC est la cathète b, et le côté AB est l'hypoténuse c. La hauteur CD descend de C perpendiculairement à AB et la touche en D.",
            },
            {
              "kind": "p",
              "text": "Le point D divise l'hypoténuse en deux parties : le segment AD est la projection p et le segment DB est la projection q. La cathète b et la projection q sont mises en évidence parce qu'elles forment le couple dont traite cette page. Suivez les étiquettes dans cet ordre : commencez en B, parcourez la cathète b jusqu'à C, puis la cathète a jusqu'à A, puis revenez le long de l'hypoténuse de A à B, en vous arrêtant en D pour voir la division en p et q.",
            },
            {
              "kind": "p",
              "text": "L'association de b avec q devient visible dans le petit triangle CBD, où la cathète b est l'hypoténuse et q est le côté situé le long de la grande hypoténuse. Comme le triangle CBD est semblable au triangle ABC, le rapport de q à b dans le petit triangle est égal au rapport de b à c dans le grand.",
            },
          ],
          "h2": "Schéma de la projection Q d'un triangle rectangle expliqué",
          "image": {
            "alt": "Triangle rectangle ABC avec angle droit en C, hauteur CD vers l'hypoténuse AB, cathète b et projection q mises en évidence, avec les cathètes a et b, l'hypoténuse c, les projections p et q et la hauteur h étiquetées",
            "caption": "La hauteur CD divise l'hypoténuse AB en projection p (AD) et projection q (DB), avec la cathète b (BC) mise en évidence.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple indique les valeurs données, la substitution et la réponse finale, et chaque exemple garde ses unités cohérentes du début à la fin.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 8]] cm et [[c = 10]] cm, la formule donne [[q = \\frac{8^2}{10} = \\frac{64}{10}]], donc [[q = 6.4]] cm. La cathète au carré 64 est une valeur intermédiaire, et la division par l'hypoténuse la ramène à une longueur. L'autre cathète de ce triangle mesure 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Division exacte",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 12]] cm et [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. La cathète au carré se divise exactement, donc la réponse est exacte. L'autre projection ici est de 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Résultat décimal",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 7]] cm et [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un résultat décimal est normal : la projection n'a pas besoin d'être un nombre entier même lorsque les deux données le sont. L'autre projection est de 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Mesures plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 15]] m et [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Des nombres plus grands ne changent rien à la méthode : élever au carré, puis diviser. L'autre projection est de 16 m, qui s'associe à une cathète de 20 m.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Petites mesures",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 30]] mm et [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Les petites mesures fonctionnent de la même façon, et garder l'unité en millimètres tout au long évite toute conversion. L'autre projection est de 32 mm, qui s'associe à une cathète de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[b = \\frac{3}{4}]] ft et [[c = \\frac{3}{2}]] ft, élevez d'abord la cathète au carré : [[b^2 = \\frac{9}{16}]] pieds carrés. Puis [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Diviser par une fraction revient à multiplier par son inverse, c'est l'étape que la plupart des élèves manquent avec les mesures fractionnaires.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 80]] cm et [[c = 1]] m, convertissez d'abord : 1 m vaut 100 cm. Puis [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Utiliser 1 au lieu de 100 aurait donné 6400 cm, une projection bien plus longue que l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Valeurs décimales plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 4.5]] m et [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Les données décimales exigent le même soin que les nombres entiers : élever au carré le décimal complet, puis diviser. L'autre projection est de 4.8 m, qui s'associe à une cathète de 6 m.",
            },
          ],
          "h2": "Exemples résolus de calcul de la projection Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la projection affirme que le carré de la cathète b est égal à l'hypoténuse multipliée par sa projection :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Diviser les deux membres par c isole q et donne la formule de travail de cette page :",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Le calcul se déroule en deux étapes. L'étape 1 élève la cathète b au carré, en la multipliant par elle-même. L'étape 2 divise cette longueur au carré par l'hypoténuse complète c, et le résultat est une longueur ordinaire, et non une longueur au carré.",
            },
            {
              "kind": "p",
              "text": "Les unités exigent de l'attention aux deux étapes. Si b et c sont tous deux en centimètres, alors [[b^2]] est en centimètres carrés, et la division par des centimètres donne des centimètres. Mélanger les unités, par exemple des mètres pour b et des centimètres pour c, donne un quotient sans signification, convertissez donc vers une seule unité avant de calculer.",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 8]] cm et [[c = 10]] cm, l'étape 1 donne [[8^2 = 64]], et l'étape 2 donne [[q = \\frac{64}{10} = 6.4]] cm. Le nombre 64 ne répond à aucune question à lui seul : c'est seulement après la division qu'il devient la longueur de la projection.",
            },
          ],
          "h2": "Formule de la projection Q d'un triangle rectangle",
          "image": {
            "alt": "Triangle rectangle ABC avec hauteur CD, montrant que la projection q est égale à la cathète b au carré divisée par l'hypoténuse c",
            "caption": "La formule de projection : q est égale à b au carré divisé par c, avec le pied D de la hauteur qui divise l'hypoténuse.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Onze courtes étapes vous mènent d'un schéma étiqueté à une réponse vérifiée.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez le triangle rectangle de votre problème et confirmez qu'il possède un angle droit.",
                "Repérez le sommet de l'angle droit et la hauteur issue de ce sommet vers l'hypoténuse.",
                "Identifiez la cathète perpendiculaire associée à la projection q, la cathète qui touche le sommet B.",
                "Identifiez l'hypoténuse complète c, le côté opposé à l'angle droit.",
                "Confirmez que c est supérieure à b. Si ce n'est pas le cas, réétiquetez le schéma avant de continuer.",
                "Choisissez des unités compatibles et convertissez si les mesures utilisent des unités différentes.",
                "Saisissez la cathète b dans le champ Cathète b.",
                "Saisissez l'hypoténuse c dans le champ Hypoténuse c.",
                "Cliquez sur Calculer la projection q et lisez le résultat.",
                "Vérifiez le résultat : q doit être positive et plus petite que c.",
                "Utilisez Réinitialiser pour commencer un nouveau calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Saisir la cathète a au lieu de la cathète b donne une autre projection. La cathète a s'associe à p, donc la calculatrice renverrait le segment situé à côté du sommet A, et non celui situé à côté de B. La vérification des étiquettes de l'étape 3 est la plus importante.",
            },
          ],
          "h2": "Comment utiliser la calculatrice de projection Q d'un triangle rectangle",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cette calculatrice trouve la projection q d'un triangle rectangle lorsque vous connaissez la cathète b et l'hypoténuse complète c. La projection q est le segment de l'hypoténuse qui se trouve à côté de la cathète b, créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse. La formule est [[q = \\frac{b^2}{c}]], où b est la cathète perpendiculaire et c est l'hypoténuse complète.",
            },
            {
              "kind": "p",
              "text": "Par exemple, avec [[b = 8]] cm et [[c = 10]] cm, le calcul est [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. La valeur 6.4 cm est la partie de l'hypoténuse associée à la cathète b, et non la cathète elle-même ni l'hypoténuse entière.",
            },
            {
              "kind": "p",
              "text": "La calculatrice se trouve en haut de cette page, suivie de la formule, d'un schéma étiqueté, d'une preuve, d'exemples résolus et de vérifications que vous pouvez appliquer à n'importe quelle réponse.",
            },
          ],
          "h2": "Calculatrice de projection Q d'un triangle rectangle",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle possède deux côtés perpendiculaires, appelés cathètes, et un côté le plus long, appelé hypoténuse. Les deux cathètes se rencontrent à l'angle droit, et l'hypoténuse se trouve en face de cet angle. Ici, le triangle est ABC avec l'angle droit en C : la cathète a est AC, la cathète b est BC, et l'hypoténuse c est AB.",
            },
            {
              "kind": "p",
              "text": "La cathète b est l'un des deux côtés qui forment l'angle droit, c'est donc un vrai côté du triangle, et non un segment tracé à l'intérieur. La projection q se trouve à plat le long de l'hypoténuse, tandis que la cathète b va du sommet B au sommet de l'angle droit C.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse est toujours le côté le plus long dans un triangle rectangle non dégénéré, puisqu'elle se trouve en face du plus grand angle, l'angle droit. C'est pourquoi la formule exige [[0 < b < c]] et pourquoi la calculatrice attend une hypoténuse plus longue que la cathète.",
            },
            {
              "kind": "p",
              "text": "La position de la cathète b décide quel segment est appelé q : la cathète b touche le sommet B, donc le segment situé à côté de B est q. Vérifiez toujours les étiquettes de votre propre schéma avant de choisir quelle cathète saisir.",
            },
          ],
          "h2": "Comprendre la cathète B et l'hypoténuse",
          "table": {
            "headers": [
              "Symbole",
              "Signification",
            ],
            "rows": [
              [
                "a",
                "Autre cathète perpendiculaire",
              ],
              [
                "b",
                "Cathète associée à q",
              ],
              [
                "c",
                "Hypoténuse complète",
              ],
              [
                "p",
                "Projection associée à a",
              ],
              [
                "q",
                "Projection associée à b",
              ],
              [
                "h",
                "Hauteur vers l'hypoténuse",
              ],
            ],
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
                "Utiliser la cathète a au lieu de la cathète b : saisir a donne p. Avec a = 6 et c = 10, le résultat 3.6 cm est p, et non q.",
                "Oublier d'élever la cathète b au carré : diviser b par c au lieu de b au carré par c donne 0.8 cm au lieu de 6.4 cm.",
                "Diviser c par b au carré au lieu de b au carré par c : le quotient doit être [[b^2/c]], et non [[c/b^2]]. Avec b = 8 et c = 10, l'ordre inversé donne environ 0.156, qui n'a aucune unité valable.",
                "Confondre la projection p avec la projection q : q se trouve à côté du sommet B et p à côté du sommet A. Étiquetez les deux segments avant de calculer.",
                "Traiter q comme la vraie cathète perpendiculaire : q est un segment de l'hypoténuse, et non le côté BC. Dans le triangle 6-8-10, la cathète b mesure 8 cm tandis que q ne mesure que 6.4 cm.",
                "Saisir une valeur de cathète supérieure ou égale à c : un tel triangle n'existe pas, puisque l'hypoténuse est le côté le plus long.",
                "Mélanger centimètres et mètres : convertissez d'abord, comme dans l'exemple 7, où 1 m est devenu 100 cm.",
                "Oublier que c représente l'hypoténuse complète : utiliser une projection ou une cathète comme dénominateur fausse le résultat.",
                "Arrondir les calculs intermédiaires trop tôt : arrondir la cathète au carré avant de diviser déplace la réponse.",
                "Confondre b et b au carré : 64 dans l'exemple 6-8-10 est une longueur au carré, tandis que 6.4 cm est la projection.",
                "Appliquer la formule à un triangle qui n'est pas rectangle : le théorème de la projection exige la hauteur issue d'un angle droit.",
                "Traiter q comme l'hypoténuse entière : q plus p égale c, donc un résultat égal ou supérieur à c signale une erreur.",
              ],
            },
            {
              "kind": "p",
              "text": "Si une réponse semble fausse, arrêtez-vous et réétiquetez le schéma avant de recalculer. La plupart des erreurs ci-dessus disparaissent une fois que p et q sont clairement marqués sur l'hypoténuse.",
            },
          ],
          "h2": "Erreurs fréquentes lors du calcul de la projection Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne reprend les exemples résolus.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une cathète [[b = 9]] cm et une hypoténuse [[c = 15]] cm. Trouvez la projection q.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Valeurs décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[b = 1.5]] m et [[c = 2.5]] m, trouvez la projection q.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[b = \\frac{5}{6}]] ft et [[c = \\frac{5}{3}]] ft, trouvez q sous forme de fraction.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Une cathète mesure [[b = 80]] cm et l'hypoténuse mesure [[c = 2]] m. Trouvez q en centimètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Trouver p après avoir calculé q",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 25]] cm et une cathète [[b = 15]] cm. Trouvez q, puis p.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Plusieurs étapes avec la projection q et la hauteur h",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[b = 15]] cm, trouvez q, puis p, puis la hauteur h.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[b^2 = \\frac{25}{36}]], donc [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : Convertissez 2 m en 200 cm, puis [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, puis [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[q = 9]] cm et [[p = 16]] cm, donc [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Exercices avec réponses",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La preuve repose sur les triangles semblables. Tracer la hauteur CD divise le triangle ABC en deux petits triangles rectangles, ACD et CBD, et les deux sont semblables au triangle original. L'un de leurs rapports de côtés donne directement le théorème de la projection.",
            },
            {
              "kind": "p",
              "text": "Concentrez-vous sur le triangle CBD et sur le triangle entier ABC. Les deux contiennent l'angle en B, et les deux contiennent un angle droit, donc leurs troisièmes angles doivent aussi correspondre. Faire correspondre les côtés qui occupent les mêmes positions donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Substituez maintenant les symboles usuels : [[DB = q]], [[BC = b]] et [[AB = c]]. La proportion devient :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "La multiplication en croix élimine les fractions. Le numérateur de gauche fois le dénominateur de droite est égal au numérateur de droite fois le dénominateur de gauche, donc [[q \\times c = b \\times b]], ce qui donne :",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Diviser les deux membres par c termine la preuve et donne [[q = \\frac{b^2}{c}]]. Le même raisonnement appliqué à l'autre petit triangle, ACD, donne [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Pourquoi la formule de la projection Q fonctionne-t-elle ?",
          "image": {
            "alt": "Triangle rectangle original ABC à côté des petits triangles semblables ACD et CBD, montrant que la proportion q sur b est égale à b sur c",
            "caption": "Preuve par triangles semblables : q sur b est égal à b sur c, donc la multiplication en croix donne b au carré égal à c fois q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf propriétés découlent directement de [[q = \\frac{b^2}{c}]]. Chacune sert aussi de contrôle de vraisemblance pour une nouvelle réponse.",
            },
            {
              "items": [
                "La projection q est toujours plus courte que l'hypoténuse complète dans un triangle non dégénéré, puisque q n'est qu'une partie de c.",
                "Augmenter la cathète b en gardant c fixe augmente q, parce que la cathète au carré au numérateur grandit.",
                "Augmenter c en gardant b fixe diminue q, parce que le dénominateur grandit.",
                "Si b et c sont tous deux multipliés par le même facteur positif, q est multipliée par ce facteur.",
                "Si p est égale à q, les deux cathètes perpendiculaires sont égales, et le triangle est un triangle rectangle isocèle.",
                "La projection q est toujours positive dans un triangle non dégénéré valable. Des valeurs nulles ou négatives ne décrivent aucun vrai triangle.",
                "La projection q est une longueur, et non une aire. La cathète au carré n'est qu'une étape intermédiaire, et la division par c redonne des unités de longueur ordinaires.",
                "La projection q est associée spécifiquement à la cathète b. L'utiliser avec la cathète a répond à une tout autre question.",
                "Échanger p et q change quelle cathète est associée à chaque projection, donc les étiquettes doivent rester associées à leurs sommets.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Lorsque la hauteur tombe au milieu de l'hypoténuse, les deux cathètes doivent correspondre, comme le montre le schéma ci-dessous.",
            },
          ],
          "h2": "Propriétés importantes de la projection Q",
          "image": {
            "alt": "Deux triangles rectangles côte à côte, l'un avec des projections égales p et q de 5 et l'autre avec des projections inégales p égale à 3.6 et q égale à 6.4",
            "caption": "Des projections égales (p = q = 5) donnent des cathètes égales, tandis que des projections inégales (p = 3.6, q = 6.4) donnent des cathètes inégales.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Certains problèmes demandent l'autre projection. La formule correspondante est l'image miroir de la formule de q, avec la cathète a à la place de la cathète b :",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[a = 6]] cm et [[c = 10]] cm. Alors [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Cela correspond à l'autre projection du triangle 6-8-10 des exemples précédents, où q était de 6.4 cm et où les deux projections totalisent 10 cm.",
            },
            {
              "kind": "p",
              "text": "La formule utilise a au lieu de b parce que chaque cathète s'associe à la projection située à côté de son propre sommet. La cathète a touche le sommet A, et p est le segment situé à côté de A. Saisir b dans cette formule donnerait q, et non p. La calculatrice de cette page accepte seulement b et c, utilisez donc la <a href=\"/right-triangle-projection-p-calculator/\">calculatrice de projection p</a> lorsque vous devez trouver p à partir de a et c.",
            },
          ],
          "h2": "Comment calculer la projection P à partir de l'autre cathète",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la projection et le théorème de Pythagore concordent exactement, et l'algèbre montre pourquoi. Partez des deux formules de projection, [[a^2 = c \\times p]] et [[b^2 = c \\times q]], et additionnez-les :",
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
              "text": "Une vérification numérique avec le triangle 6-8-10 le confirme : [[a^2 + b^2 = 36 + 64 = 100]] et [[c^2 = 10^2 = 100]]. Le théorème de la projection divise la relation de Pythagore en une partie par cathète, et additionner les parties la reconstruit.",
            },
            {
              "kind": "p",
              "text": "Cette division est ce qui rend les formules de projection utiles : le théorème de Pythagore seul ne peut pas trouver une projection à partir d'une cathète et d'une hypoténuse, parce qu'il parle des cathètes ensemble.",
            },
          ],
          "h2": "Relation entre la projection Q et le théorème de Pythagore",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La projection q se relie aussi à la hauteur par une seconde relation de moyenne géométrique. La hauteur h est la moyenne géométrique des deux projections :",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[p = c - q]], la hauteur peut aussi s'écrire en utilisant seulement q et c :",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Utilisez [[q = 6.4]] cm et [[c = 10]] cm. Trouvez d'abord p : [[p = 10 - 6.4 = 3.6]] cm. Puis [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. La hauteur est plus courte que chaque cathète, comme elle doit l'être.",
            },
            {
              "kind": "p",
              "text": "La projection q seule ne détermine pas la hauteur : deux triangles différents peuvent partager le même q avec des hypoténuses différentes. L'hypoténuse complète, ou l'autre projection, est toujours nécessaire aussi. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculatrice de hauteur à partir des projections</a> effectue ce calcul lorsque les deux projections sont connues.",
            },
          ],
          "h2": "Relation entre la projection Q et la hauteur",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formule de projection peut être réarrangée pour trouver la cathète b au lieu de q. En partant de [[b^2 = c \\times q]], prenez la racine carrée positive des deux membres :",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Vérifiez avec les nombres familiers : [[b = 8]] cm, [[c = 10]] cm et [[q = 6.4]] cm. Le produit sous la racine est [[c \\times q = 10 \\times 6.4 = 64]], et [[\\sqrt{64} = 8]] cm, ce qui est la cathète de départ.",
            },
            {
              "kind": "p",
              "text": "Le lien est la relation de moyenne géométrique : la cathète b est la moyenne géométrique de l'hypoténuse et de sa projection. C'est pourquoi la cathète apparaît au carré dans le théorème et pourquoi la racine carrée apparaît lorsqu'on résout pour la cathète. Pour les problèmes qui partent de q et c, la <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculatrice de cathète b à partir de la projection</a> applique directement cette formule réarrangée.",
            },
          ],
          "h2": "Relation entre la projection Q et la cathète B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux projections sont les deux parties d'un même côté droit, elles totalisent donc l'hypoténuse entière :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "En réarrangeant, on obtient [[p = c - q]]. Avec [[c = 10]] cm et [[q = 6.4]] cm, la soustraction est [[p = 10 - 6.4 = 3.6]] cm. La même soustraction fonctionne dans l'autre sens : [[q = c - p]]. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculatrice d'hypoténuse à partir des projections</a> reconstruit c à partir de p et q lorsque l'hypoténuse elle-même est inconnue.",
            },
            {
              "kind": "p",
              "text": "Comparer p et q renseigne sur la forme du triangle. Lorsque q est égale à p, la hauteur tombe au milieu de l'hypoténuse et les deux cathètes sont égales, donc le triangle est isocèle. Lorsque q est plus grande que p, la cathète b est plus longue que la cathète a, et lorsque p est plus grande, la cathète a est plus longue. La projection la plus longue appartient toujours à la cathète la plus longue.",
            },
            {
              "kind": "p",
              "text": "Dans le triangle 6-8-10, q est de 6.4 cm et p de 3.6 cm, donc q est plus grande, et la cathète b de 8 cm est bien plus longue que la cathète a de 6 cm.",
            },
          ],
          "h2": "Relation entre la projection P et la projection Q",
          "image": {
            "alt": "Triangle rectangle comparant la projection q associée à la cathète b à la projection p associée à la cathète a, avec c égale à 10, q égale à 6.4 et p égale à 3.6",
            "caption": "q utilise b (64 divisé par 10 = 6.4) et p utilise a (36 divisé par 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Utilisez [[b = 8]] cm et [[c = 10]] cm. Les quatre étapes ci-dessous montrent tout le travail, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[q = \\frac{b^2}{c}]].",
                "Substituez les valeurs : [[q = \\frac{8^2}{10}]].",
                "Élevez la cathète au carré : [[q = \\frac{64}{10}]].",
                "Divisez : [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 6.4 cm est le segment de l'hypoténuse situé à côté de la cathète b, et non un côté perpendiculaire ni une aire. Une courte vérification boucle le raisonnement : [[b^2 = 8^2 = 64]] et [[c \\times q = 10 \\times 6.4 = 64]], donc les deux membres du théorème concordent.",
            },
            {
              "kind": "p",
              "text": "Pour référence, l'autre projection est [[p = 10 - 6.4 = 3.6]] cm, la cathète a est [[a = \\sqrt{10 \\times 3.6} = 6]] cm, et la hauteur est [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, ce qui confirme le triangle rectangle familier 6-8-10.",
            },
          ],
          "h2": "Exemple étape par étape pour trouver la projection Q",
          "image": {
            "alt": "Triangle rectangle avec cathète b de 8 cm et hypoténuse de 10 cm, résolu pour donner une projection q égale à 6.4 cm",
            "caption": "Exemple résolu : b = 8 cm et c = 10 cm donnent q = 64 divisé par 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre vérifications indépendantes détectent presque chaque erreur. Appliquez-en au moins une à chaque réponse, et les quatre lorsque le problème compte. L'exemple ci-dessous utilise [[b = 8]] cm, [[c = 10]] cm et [[q = 6.4]] cm tout au long.",
            },
            {
              "kind": "h3",
              "text": "Méthode 1 : Vérification par le théorème de la projection",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[q = \\frac{b^2}{c}]] directement. Ici [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, ce qui correspond à la réponse. Si le nouveau calcul diffère, c'est l'élévation au carré ou la division qui a échoué.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : Addition des segments",
            },
            {
              "kind": "p",
              "text": "Trouvez p par soustraction : [[p = 10 - 6.4 = 3.6]] cm. Puis vérifiez [[p + q = 3.6 + 6.4 = 10]] cm, ce qui est égal à c. Une somme qui manque c indique une erreur de soustraction.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : Vérification par le théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Calculez la cathète a à partir de p : [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Puis vérifiez [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Cette vérification teste tout le triangle, elle détecte donc les erreurs d'étiquetage que la première vérification peut manquer. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculatrice de cathète a à partir de la projection</a> effectue directement l'étape de a.",
            },
            {
              "kind": "h3",
              "text": "Méthode 4 : Vraisemblance géométrique",
            },
            {
              "kind": "p",
              "text": "Confirmez que q est positive, plus petite que c, dans la bonne unité, et qu'il s'agit d'un segment de l'hypoténuse plutôt que d'un côté perpendiculaire. Ici, 6.4 cm est positive, plus petite que 10 cm, en centimètres, et plus courte que la cathète b de 8 cm.",
            },
          ],
          "h2": "Comment vérifier votre calcul de la projection Q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tracez la hauteur depuis le sommet de l'angle droit C perpendiculairement à l'hypoténuse AB. Elle rencontre l'hypoténuse en un point appelé pied, étiqueté D, et la divise en deux segments adjacents : AD est la projection p, et DB est la projection q.",
            },
            {
              "kind": "p",
              "text": "La projection q appartient à la cathète b parce qu'elle se trouve à côté du sommet B, le même sommet où commence la cathète b. Dans le petit triangle CBD, la cathète b est l'hypoténuse et q est l'une de ses cathètes, ce qui est le lien géométrique qui fait fonctionner le théorème de la projection. La projection p, par le même raisonnement, appartient à la cathète a, qui touche le sommet A.",
            },
            {
              "kind": "p",
              "text": "Les projections sont des longueurs le long de l'hypoténuse, mesurées dans la même unité que les autres côtés. Elles ne sont perpendiculaires à rien, et ce ne sont pas des côtés du triangle original. La <a href=\"/right-triangle-projection-calculator/\">calculatrice de projection d'un triangle rectangle</a> trouve les deux projections lorsque les cathètes et l'hypoténuse sont connues.",
            },
            {
              "kind": "p",
              "text": "Comme p et q sont les deux parties d'un même côté droit, elles totalisent l'hypoténuse entière :",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[q = 6.4]] cm, l'autre projection est [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "La projection q n'est pas la même chose que la cathète b. La cathète b est le côté BC, l'un des côtés qui forment l'angle droit, tandis que q est le segment DB le long de l'hypoténuse. Dans le triangle 6-8-10, la cathète b mesure 8 cm et la projection q seulement 6.4 cm.",
            },
          ],
          "h2": "Qu'est-ce que la projection Q dans un triangle rectangle ?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le carré est là parce que le théorème de la projection est un énoncé sur une cathète au carré : il dit que le carré de la cathète b est égal au produit de c et de q, [[b^2 = c \\times q]], et la formule de q est ce que l'on obtient en divisant les deux membres par c.",
            },
            {
              "kind": "p",
              "text": "La raison remonte aux triangles semblables. Dans le triangle CBD, la cathète b joue le rôle de l'hypoténuse, tandis que q est l'une de ses cathètes. Comparer le petit triangle avec le triangle entier donne la proportion [[\\frac{q}{b} = \\frac{b}{c}]], et la cathète b apparaît deux fois, une fois dans chaque rapport. La multiplication en croix place b des deux côtés, ce qui est exactement pourquoi le carré apparaît.",
            },
            {
              "kind": "p",
              "text": "La relation de moyenne géométrique dit la même chose en d'autres mots : la cathète b est la moyenne géométrique de l'hypoténuse c et de sa projection q, ce qui signifie [[b = \\sqrt{c \\times q}]]. Élever les deux membres au carré donne [[b^2 = c \\times q]], et diviser par c isole q.",
            },
            {
              "kind": "p",
              "text": "La division est l'étape qui isole q. La multiplication dans le théorème lie q à c, et diviser par c défait ce lien. Sans le carré, la formule mélangerait une longueur avec une aire, et les unités ne fonctionneraient pas.",
            },
          ],
          "h2": "Pourquoi la cathète B est-elle au carré dans la formule de projection ?",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-applications": "Applications pratiques des calculs de projection dans un triangle rectangle",
        "sec-calculate": "Calculer la projection Q d'un triangle rectangle",
        "sec-diagram": "Schéma de la projection Q d'un triangle rectangle expliqué",
        "sec-examples": "Exemples résolus de calcul de la projection Q",
        "sec-faq": "Questions fréquemment posées",
        "sec-formula": "Formule de la projection Q d'un triangle rectangle",
        "sec-how-to-use": "Comment utiliser la calculatrice de projection Q d'un triangle rectangle",
        "sec-intro": "Calculatrice de projection Q d'un triangle rectangle",
        "sec-leg-b-hypotenuse": "Comprendre la cathète B et l'hypoténuse",
        "sec-mistakes": "Erreurs fréquentes lors du calcul de la projection Q",
        "sec-practice": "Exercices avec réponses",
        "sec-projection-p": "Comment calculer la projection P à partir de l'autre cathète",
        "sec-proof": "Pourquoi la formule de la projection Q fonctionne-t-elle ?",
        "sec-properties": "Propriétés importantes de la projection Q",
        "sec-pythagoras": "Relation entre la projection Q et le théorème de Pythagore",
        "sec-related": "Découvrir les calculatrices de triangles rectangles associées",
        "sec-relationship-altitude": "Relation entre la projection Q et la hauteur",
        "sec-relationship-leg-b": "Relation entre la projection Q et la cathète B",
        "sec-relationship-pq": "Relation entre la projection P et la projection Q",
        "sec-step-example": "Exemple étape par étape pour trouver la projection Q",
        "sec-verify": "Comment vérifier votre calcul de la projection Q",
        "sec-what-projection-q": "Qu'est-ce que la projection Q dans un triangle rectangle ?",
        "sec-why-squared": "Pourquoi la cathète B est-elle au carré dans la formule de projection ?",
      },
    },
};
