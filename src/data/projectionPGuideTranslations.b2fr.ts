// projectionPGuideTranslations.bfr.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "answer": "La formule est [[p = \\frac{a^2}{c}]], où a est la cathète associée à p et c l'hypoténuse complète. Élevez d'abord la cathète a au carré, puis divisez par c. Par exemple, [[a = 6]] cm et [[c = 10]] cm donnent [[p = 3.6]] cm.",
          "question": "Quelle est la formule de la projection p ?",
        },
        {
          "answer": "La projection p est le segment de l'hypoténuse situé à côté du sommet A, créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse au point D. Dans le triangle ABC, [[p = AD]], la partie de l'hypoténuse associée à la cathète a.",
          "question": "Que représente la projection p ?",
        },
        {
          "answer": "Le carré vient des triangles semblables : le triangle ACD est semblable au triangle ABC, ce qui donne [[\\frac{p}{a} = \\frac{a}{c}]], et la cathète a apparaît dans les deux rapports. En multipliant en croix, on obtient [[a^2 = c \\times p]], donc le carré est inscrit dans la géométrie.",
          "question": "Pourquoi la cathète a est-elle élevée au carré ?",
        },
        {
          "answer": "La division isole p. Le théorème de la projection affirme que [[a^2 = c \\times p]], où p est multiplié par c, donc diviser les deux membres par c laisse p seul. La division transforme aussi une longueur au carré en une longueur ordinaire.",
          "question": "Pourquoi divise-t-on par l'hypoténuse ?",
        },
        {
          "answer": "Non. La cathète a est le côté AC, l'un des côtés qui forment l'angle droit, tandis que la projection p est le segment AD le long de l'hypoténuse. Dans le triangle 6-8-10, la cathète a mesure 6 cm et la projection p seulement 3,6 cm.",
          "question": "La projection p est-elle la même chose que la cathète a ?",
        },
        {
          "answer": "Non. La projection p n'est qu'une partie de l'hypoténuse, donc elle doit être plus petite que c. Si p égalait c, q serait nul et le triangle serait dégénéré. Un résultat supérieur à c signale toujours une erreur de saisie ou d'étiquetage.",
          "question": "La projection p peut-elle être plus grande que l'hypoténuse ?",
        },
        {
          "answer": "La projection p se trouve à côté du sommet A et s'associe à la cathète a, tandis que la projection q se trouve à côté du sommet B et s'associe à la cathète b. Ce sont les deux segments que la hauteur crée sur l'hypoténuse : [[p + q = c]].",
          "question": "Quelle est la différence entre la projection p et la projection q ?",
        },
        {
          "answer": "Non. La cathète a ne s'associe qu'à la projection p. Pour trouver q, il faut la cathète b, avec [[q = \\frac{b^2}{c}]], ou soustraire : [[q = c - p]] une fois p connu. La <a href=\"/right-triangle-projection-q-calculator/\">calculatrice de la projection q</a> trouve q à partir de b et c.",
          "question": "Puis-je calculer la projection q avec la cathète a ?",
        },
        {
          "answer": "Il faut aussi q ou c. Trouvez q avec [[q = c - p]], puis utilisez [[h = \\sqrt{p \\times q}]]. Avec [[p = 3.6]] cm et [[c = 10]] cm, [[q = 6.4]] cm et [[h = 4.8]] cm. La projection p seule ne permet pas de déterminer la hauteur.",
          "question": "Comment trouver la hauteur quand la projection p est connue ?",
        },
        {
          "answer": "Recalculez [[p = \\frac{a^2}{c}]], puis vérifiez [[p + q = c]] après avoir trouvé q par soustraction, et confirmez que p est positif et inférieur à c. Vous pouvez aussi trouver la cathète b à partir de q et vérifier [[a^2 + b^2 = c^2]].",
          "question": "Comment vérifier la projection p ?",
        },
        {
          "answer": "La hauteur tombe au milieu de l'hypoténuse, et les deux cathètes sont égales, donc le triangle est isocèle. Avec [[c = 10]] cm et [[p = q = 5]] cm, les deux cathètes valent [[\\sqrt{50}]] cm, soit environ 7,071 cm.",
          "question": "Que se passe-t-il quand p et q sont égales ?",
        },
        {
          "answer": "L'hypoténuse se trouve en face de l'angle droit, le plus grand angle du triangle, et le côté opposé au plus grand angle est toujours le plus long. Si a égalait ou dépassait c, aucun triangle rectangle de ce type ne pourrait exister.",
          "question": "Pourquoi l'hypoténuse doit-elle être plus longue que la cathète a ?",
        },
      ],
      "relatedHeading": "Découvrez les calculatrices de triangle rectangle associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche précise du triangle rectangle : choisissez l'outil qui correspond aux mesures que vous connaissez déjà.",
      "relatedItems": [
        "Calculatrice de projection d'un triangle rectangle",
        "Calculatrice de la projection q d'un triangle rectangle",
        "Calculatrice de la cathète a à partir de la projection",
        "Calculatrice de la cathète b à partir de la projection",
        "Calculatrice de l'hypoténuse à partir des projections",
        "Calculatrice de la hauteur à partir des projections",
        "Calculatrice des côtés d'un triangle rectangle",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct concerne les devoirs de géométrie et le travail en classe, où les exercices sur les projections vérifient si les élèves savent étiqueter un schéma et appliquer [[p = \\frac{a^2}{c}]] au lieu de recourir au théorème de Pythagore par habitude. Les exercices sur les triangles semblables utilisent la même configuration, puisque la démonstration elle-même est un exercice de mise en correspondance des côtés homologues.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le théorème quand un triangle rectangle doit être reconstruit à partir de mesures partielles : si un dessin donne l'hypoténuse et le pied de la hauteur, la projection manquante s'obtient sans mesurer à nouveau la figure. Les enseignants utilisent aussi cette configuration comme leçon de transition entre l'addition des segments et la similitude.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : la géométrie du triangle rectangle requise doit réellement exister. Le théorème décrit des relations géométriques exactes, et non des mesures de terrain approximatives, donc il ne remplace jamais un relevé soigneux ni une mesure professionnelle d'ingénierie.",
            },
          ],
          "h2": "Applications pratiques des calculs de projection d'un triangle rectangle",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculatrice comporte deux champs de saisie. Le premier reçoit la cathète a, le côté perpendiculaire associé à la projection p. Le second reçoit l'hypoténuse c, le côté complet opposé à l'angle droit. Les deux longueurs doivent utiliser la même unité : convertissez d'abord si une mesure est en centimètres et l'autre en mètres.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse doit être plus longue que la cathète a, puisque la cathète est un côté de l'angle droit alors que l'hypoténuse traverse tout le triangle. Si votre valeur de a est supérieure à c, vous avez probablement saisi une projection, la hauteur ou le mauvais côté.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer la projection p pour voir le résultat, et utilisez Réinitialiser pour effacer les deux champs avant un nouveau problème. Le résultat est une longueur exprimée dans l'unité saisie : une cathète de 6 cm et une hypoténuse de 10 cm donnent 3,6 cm. Le résultat est une longueur de segment le long de l'hypoténuse.",
            },
          ],
          "h2": "Calculer la projection p d'un triangle rectangle",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma principal montre le triangle ABC avec l'angle droit en C. Le côté AC est la cathète a, le côté BC est la cathète b, et le côté AB est l'hypoténuse c. La hauteur CD part de C perpendiculairement à AB et la touche en D.",
            },
            {
              "kind": "p",
              "text": "Le point D partage l'hypoténuse en deux parties : le segment AD est la projection p et le segment DB est la projection q. La cathète a et la projection p sont mises en évidence parce qu'elles forment la paire dont traite cette page. Suivez les étiquettes dans cet ordre : commencez en A, parcourez la cathète a jusqu'à C, puis la cathète b jusqu'à B, puis revenez le long de l'hypoténuse de B vers A, en vous arrêtant en D pour voir le partage en p et q.",
            },
            {
              "kind": "p",
              "text": "L'association de a avec p devient visible dans le petit triangle ACD, où la cathète a est l'hypoténuse et p est le côté situé le long de la grande hypoténuse. Comme le triangle ACD est semblable au triangle ABC, le rapport de p à a dans le petit triangle égale le rapport de a à c dans le grand.",
            },
          ],
          "h2": "Schéma de la projection p d'un triangle rectangle expliqué",
          "image": {
            "alt": "Triangle rectangle ABC avec angle droit en C, hauteur CD vers l'hypoténuse AB, cathète a et projection p mises en évidence, avec les cathètes a et b, l'hypoténuse c, les projections p et q et la hauteur h étiquetées",
            "caption": "La hauteur CD partage l'hypoténuse AB en projection p (AD) et projection q (DB), avec la cathète a (AC) mise en évidence.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Exemple 1 : nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 6]] cm et [[c = 10]] cm, la formule donne [[p = \\frac{6^2}{10} = \\frac{36}{10}]], donc [[p = 3.6]] cm. La cathète au carré, 36, est une valeur intermédiaire, et la division par l'hypoténuse la ramène à une longueur. L'autre cathète de ce triangle mesure 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : division exacte",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 8]] cm et [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. La cathète au carré se divise exactement, donc la réponse est exacte. L'autre projection ici mesure 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : résultat décimal",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 7]] cm et [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un résultat décimal est normal : la projection n'a pas besoin d'être un nombre entier même quand les deux données le sont. L'autre projection mesure 10,5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : mesures plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 12]] m et [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Des nombres plus grands ne changent rien à la méthode : élever au carré, puis diviser. L'autre projection mesure 12,8 m, ce qui s'associe à une cathète de 16 m.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : petites mesures",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 30]] mm et [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Les petites mesures fonctionnent de la même façon, et garder l'unité en millimètres tout au long évite toute conversion. L'autre projection mesure 32 mm, ce qui s'associe à une cathète de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[a = \\frac{3}{4}]] pi et [[c = \\frac{3}{2}]] pi, élevez d'abord la cathète au carré : [[a^2 = \\frac{9}{16}]] pieds carrés. Puis [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] pi. Diviser par une fraction revient à multiplier par son inverse, ce qui est l'étape que la plupart des élèves manquent avec les mesures fractionnaires.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 60]] cm et [[c = 1]] m, convertissez d'abord : 1 m vaut 100 cm. Puis [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Utiliser 1 au lieu de 100 aurait donné 3600 cm, une projection bien plus longue que l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : valeurs décimales plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 4.5]] m et [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Les données décimales exigent le même soin que les nombres entiers : élevez le décimal complet au carré, puis divisez. L'autre projection mesure 4,8 m, ce qui s'associe à une cathète de 6 m.",
            },
          ],
          "h2": "Exemples résolus de calcul de la projection p",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le théorème de la projection affirme que le carré de la cathète a égale l'hypoténuse multipliée par sa projection :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Diviser les deux membres par c isole p et donne la formule de travail de cette page :",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Le calcul se déroule en deux étapes. L'étape 1 élève la cathète a au carré, en la multipliant par elle-même. L'étape 2 divise cette longueur au carré par l'hypoténuse complète c, et le résultat est une longueur ordinaire, et non une longueur au carré.",
            },
            {
              "kind": "p",
              "text": "Les unités exigent de l'attention aux deux étapes. Si a et c sont tous deux en centimètres, alors [[a^2]] est en centimètres carrés, et la division par des centimètres redonne des centimètres. Mélanger les unités, par exemple des mètres pour a et des centimètres pour c, donne un quotient sans signification : convertissez donc dans une seule unité avant de calculer.",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 6]] cm et [[c = 10]] cm, l'étape 1 donne [[6^2 = 36]], et l'étape 2 donne [[p = \\frac{36}{10} = 3.6]] cm. Le nombre 36 ne répond à aucune question à lui seul : c'est seulement après la division qu'il devient la longueur de la projection.",
            },
          ],
          "h2": "Formule de la projection p d'un triangle rectangle",
          "image": {
            "alt": "Triangle rectangle ABC avec hauteur CD, montrant que la projection p égale la cathète a au carré divisée par l'hypoténuse c",
            "caption": "La formule de la projection : p égale a au carré divisé par c, avec le pied de la hauteur D qui partage l'hypoténuse.",
            "src": "projection-p-formula.svg",
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
                "Repérez le sommet de l'angle droit et la hauteur qui en part vers l'hypoténuse.",
                "Identifiez la cathète perpendiculaire associée à la projection p, la cathète qui touche le sommet A.",
                "Identifiez l'hypoténuse complète c, le côté opposé à l'angle droit.",
                "Confirmez que c est supérieur à a. Si ce n'est pas le cas, réétiquetez le schéma avant de continuer.",
                "Choisissez des unités compatibles et convertissez si les mesures utilisent des unités différentes.",
                "Saisissez la cathète a dans le champ Cathète a.",
                "Saisissez l'hypoténuse c dans le champ Hypoténuse c.",
                "Cliquez sur Calculer la projection p et lisez le résultat.",
                "Vérifiez le résultat : p doit être positif et inférieur à c.",
                "Utilisez Réinitialiser pour commencer un nouveau calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Saisir la cathète b au lieu de la cathète a donne une autre projection. La cathète b s'associe à q, donc la calculatrice renverrait le segment à côté du sommet B, et non celui à côté de A. Le contrôle des étiquettes de l'étape 3 est le plus important.",
            },
          ],
          "h2": "Comment utiliser la calculatrice de la projection p d'un triangle rectangle",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cette calculatrice trouve la projection p d'un triangle rectangle quand vous connaissez la cathète a et l'hypoténuse complète c. La projection p est le segment de l'hypoténuse situé à côté de la cathète a, créé lorsque la hauteur issue de l'angle droit rencontre l'hypoténuse. La formule est [[p = \\frac{a^2}{c}]], où a est la cathète perpendiculaire et c l'hypoténuse complète.",
            },
            {
              "kind": "p",
              "text": "Par exemple, avec [[a = 6]] cm et [[c = 10]] cm, le calcul est [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. La valeur 3,6 cm est la partie de l'hypoténuse associée à la cathète a, et non la cathète elle-même ni l'hypoténuse entière.",
            },
            {
              "kind": "p",
              "text": "La calculatrice se trouve en haut de cette page, suivie de la formule, d'un schéma étiqueté, d'une démonstration, d'exemples résolus et de contrôles applicables à n'importe quelle réponse.",
            },
          ],
          "h2": "Calculatrice de la projection p d'un triangle rectangle",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle possède deux côtés perpendiculaires, appelés cathètes, et un côté le plus long, appelé hypoténuse. Les deux cathètes se rencontrent à l'angle droit, et l'hypoténuse se trouve en face de cet angle. Ici, le triangle est ABC avec l'angle droit en C : la cathète a est AC, la cathète b est BC, et l'hypoténuse c est AB.",
            },
            {
              "kind": "p",
              "text": "La cathète a est l'un des deux côtés qui forment l'angle droit : c'est donc un vrai côté du triangle, et non un segment tracé à l'intérieur. La projection p repose à plat le long de l'hypoténuse, tandis que la cathète a va du sommet A au sommet de l'angle droit C.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse est toujours le côté le plus long d'un triangle rectangle non dégénéré, puisqu'elle se trouve en face du plus grand angle, l'angle droit. C'est pourquoi la formule exige [[0 < a < c]] et pourquoi la calculatrice attend une hypoténuse plus longue que la cathète.",
            },
            {
              "kind": "p",
              "text": "La position de la cathète a décide quel segment s'appelle p : la cathète a touche le sommet A, donc le segment à côté de A est p. Vérifiez toujours les étiquettes de votre propre schéma avant de choisir quelle cathète saisir.",
            },
          ],
          "h2": "Comprendre la cathète a et l'hypoténuse",
          "table": {
            "headers": [
              "Symbole",
              "Signification",
            ],
            "rows": [
              [
                "a",
                "Cathète perpendiculaire associée à p",
              ],
              [
                "b",
                "Autre cathète perpendiculaire",
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
                "Oublier d'élever la cathète a au carré : diviser a par c au lieu de a au carré par c donne 0,6 cm au lieu de 3,6 cm.",
                "Diviser c par a au carré au lieu de a au carré par c : le quotient doit être [[a^2/c]], et non [[c/a^2]]. Avec a = 6 et c = 10, l'ordre inversé donne environ 0,278, ce qui n'a aucune unité valable.",
                "Utiliser la cathète b au lieu de la cathète a : saisir b renvoie q. Avec b = 8 et c = 10, le résultat 6,4 cm est q, et non p.",
                "Confondre la projection p avec la projection q : p se trouve à côté du sommet A et q à côté du sommet B. Étiquetez les deux segments avant de calculer.",
                "Traiter p comme la cathète perpendiculaire elle-même : p est un segment de l'hypoténuse, et non le côté AC. Dans le triangle 6-8-10, la cathète a mesure 6 cm alors que p ne mesure que 3,6 cm.",
                "Saisir une valeur de a supérieure ou égale à c : un tel triangle n'existe pas, puisque l'hypoténuse est le côté le plus long.",
                "Mélanger les unités de mesure : convertissez d'abord, comme dans l'exemple 7, où 1 m est devenu 100 cm.",
                "Oublier que l'hypoténuse complète est c : utiliser une projection ou une cathète comme dénominateur fausse le résultat.",
                "Arrondir les calculs intermédiaires trop tôt : arrondir la cathète au carré avant de diviser décale la réponse.",
                "Confondre les longueurs au carré avec les longueurs ordinaires : 36 dans l'exemple 6-8-10 est une longueur au carré, tandis que 3,6 cm est la projection.",
                "Appliquer la formule à un triangle qui n'est pas rectangle : le théorème de la projection exige la hauteur issue d'un angle droit.",
                "Oublier que p n'est qu'un segment de l'hypoténuse : p plus q égale c, donc un résultat égal ou supérieur à c signale une erreur.",
              ],
            },
            {
              "kind": "p",
              "text": "Si une réponse semble fausse, arrêtez-vous et réétiquetez le schéma avant de recalculer. La plupart des erreurs ci-dessus disparaissent une fois p et q clairement marqués sur l'hypoténuse.",
            },
          ],
          "h2": "Erreurs courantes dans le calcul de la projection p",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne reprend les exemples résolus.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : nombres entiers simples",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une cathète [[a = 9]] cm et une hypoténuse [[c = 15]] cm. Trouvez la projection p.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : valeurs décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 1.5]] m et [[c = 2.5]] m, trouvez la projection p.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : mesures fractionnaires",
            },
            {
              "kind": "p",
              "text": "Avec [[a = \\frac{5}{6}]] pi et [[c = \\frac{5}{3}]] pi, trouvez p sous forme de fraction.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Une cathète mesure [[a = 80]] cm et l'hypoténuse mesure [[c = 2]] m. Trouvez p en centimètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : trouver q après avoir calculé p",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 25]] cm et une cathète [[a = 15]] cm. Trouvez p, puis q.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : exercice en plusieurs étapes avec la projection p et la hauteur h",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 25]] cm et [[a = 15]] cm, trouvez p, puis q, puis la hauteur h.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[a^2 = \\frac{25}{36}]], donc [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] pi.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : convertissez 2 m en 200 cm, puis [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, puis [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[p = 9]] cm et [[q = 16]] cm, donc [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Exercices avec réponses",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Certains problèmes demandent l'autre projection. La formule correspondante est l'image miroir de la formule de p, avec la cathète b à la place de la cathète a :",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[b = 8]] cm et [[c = 10]] cm. Alors [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Cela correspond à l'autre projection du triangle 6-8-10 des exemples précédents, où p valait 3,6 cm et où les deux projections totalisent 10 cm.",
            },
            {
              "kind": "p",
              "text": "La formule utilise b au lieu de a parce que chaque cathète s'associe à la projection située à côté de son propre sommet. La cathète b touche le sommet B, et q est le segment à côté de B. Saisir a dans cette formule renverrait p, et non q. La calculatrice de cette page n'accepte que a et c : utilisez donc la <a href=\"/right-triangle-projection-q-calculator/\">calculatrice de la projection q</a> quand vous devez trouver q à partir de b et c.",
            },
          ],
          "h2": "Comment calculer la projection q à partir de l'autre cathète",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La démonstration repose sur les triangles semblables. Tracer la hauteur CD divise le triangle ABC en deux petits triangles rectangles, ACD et CBD, et les deux sont semblables au triangle d'origine. L'un de leurs rapports de côtés donne directement le théorème de la projection.",
            },
            {
              "kind": "p",
              "text": "Concentrez-vous sur le triangle ACD et sur le triangle entier ABC. Les deux contiennent l'angle en A, et les deux contiennent un angle droit, donc leurs troisièmes angles doivent aussi correspondre. Mettre en correspondance les côtés qui occupent les mêmes positions donne la proportion :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Substituez maintenant les symboles usuels : [[AD = p]], [[AC = a]] et [[AB = c]]. La proportion devient :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "La multiplication en croix élimine les fractions. Le numérateur de gauche fois le dénominateur de droite égale le numérateur de droite fois le dénominateur de gauche, donc [[p \\times c = a \\times a]], ce qui donne :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Diviser les deux membres par c achève la démonstration et donne [[p = \\frac{a^2}{c}]]. Le même raisonnement appliqué à l'autre petit triangle, CBD, donne [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Pourquoi la formule de la projection p fonctionne-t-elle ?",
          "image": {
            "alt": "Triangle rectangle ABC d'origine à côté des petits triangles semblables ACD et CBD, montrant la proportion p sur a égale a sur c",
            "caption": "Démonstration par triangles semblables : p sur a égale a sur c, donc la multiplication en croix donne a au carré égale c fois p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Huit propriétés découlent directement de [[p = \\frac{a^2}{c}]]. Chacune sert aussi de contrôle de vraisemblance pour une nouvelle réponse.",
            },
            {
              "items": [
                "La projection p est toujours plus courte que l'hypoténuse complète dans un triangle non dégénéré, puisque p n'est qu'une partie de c.",
                "Augmenter la cathète a en gardant c fixe augmente p, parce que la cathète au carré au numérateur grandit.",
                "Augmenter c en gardant a fixe diminue p, parce que le dénominateur grandit.",
                "Si a et c sont tous deux multipliés par le même facteur positif, p est multiplié par ce facteur.",
                "Si p égale q, les deux cathètes sont égales, et le triangle est un triangle rectangle isocèle.",
                "La projection p est toujours positive dans un triangle non dégénéré valable. Des valeurs nulles ou négatives ne décrivent aucun vrai triangle.",
                "La projection p est une longueur, et non une aire. La cathète au carré n'est qu'une étape intermédiaire, et la division par c redonne des unités de longueur ordinaires.",
                "La projection p est associée précisément à la cathète a. L'utiliser avec la cathète b répond à une tout autre question.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quand la hauteur tombe au milieu de l'hypoténuse, les deux cathètes doivent correspondre, comme le montre le schéma ci-dessous.",
            },
          ],
          "h2": "Propriétés importantes de la projection p",
          "image": {
            "alt": "Deux triangles rectangles côte à côte, l'un avec des projections égales p et q de 5 et l'autre avec des projections inégales p égale 3,6 et q égale 6,4",
            "caption": "Des projections égales (p = q = 5) donnent des cathètes égales, tandis que des projections inégales (p = 3,6, q = 6,4) donnent des cathètes inégales.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
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
              "text": "Factoriser c dans le membre de droite donne [[a^2 + b^2 = c(p + q)]]. Comme [[p + q = c]], la substitution donne le résultat familier :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Une vérification numérique avec le triangle 6-8-10 le confirme : [[a^2 + b^2 = 36 + 64 = 100]] et [[c^2 = 10^2 = 100]]. Le théorème de la projection partage la relation de Pythagore en une partie par cathète, et additionner les parties la reconstruit.",
            },
            {
              "kind": "p",
              "text": "Ce partage est ce qui rend les formules de projection utiles : le théorème de Pythagore seul ne permet pas de trouver une projection à partir d'une cathète et d'une hypoténuse, parce qu'il parle des cathètes ensemble.",
            },
          ],
          "h2": "Relation entre la projection p et le théorème de Pythagore",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La projection p se relie aussi à la hauteur par une seconde relation de moyenne géométrique. La hauteur h est la moyenne géométrique des deux projections :",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Comme [[q = c - p]], la hauteur peut aussi s'écrire en n'utilisant que p et c :",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[p = 3.6]] cm et [[c = 10]] cm. Trouvez d'abord q : [[q = 10 - 3.6 = 6.4]] cm. Puis [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. La hauteur est plus courte que chaque cathète, comme elle doit l'être.",
            },
            {
              "kind": "p",
              "text": "La projection p seule ne détermine pas la hauteur : deux triangles différents peuvent partager le même p avec des hypoténuses différentes. L'hypoténuse complète, ou l'autre projection, est toujours nécessaire aussi. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculatrice de la hauteur à partir des projections</a> effectue ce calcul quand les deux projections sont connues.",
            },
          ],
          "h2": "Relation entre la projection p et la hauteur",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formule de la projection peut être réarrangée pour trouver la cathète a au lieu de p. En partant de [[a^2 = c \\times p]], prenez la racine carrée positive des deux membres :",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Vérifiez avec les nombres familiers : [[a = 6]] cm, [[c = 10]] cm et [[p = 3.6]] cm. Le produit sous la racine est [[c \\times p = 10 \\times 3.6 = 36]], et [[\\sqrt{36} = 6]] cm, ce qui est la cathète de départ.",
            },
            {
              "kind": "p",
              "text": "Le lien est la relation de moyenne géométrique : la cathète a est la moyenne géométrique de l'hypoténuse et de sa projection. C'est pourquoi la cathète apparaît au carré dans le théorème et pourquoi la racine carrée apparaît quand on résout pour la cathète. Pour les problèmes qui partent de p et c, la <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculatrice de la cathète a à partir de la projection</a> applique directement cette formule réarrangée.",
            },
          ],
          "h2": "Relation entre la projection p et la cathète a",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux projections sont les deux parties d'un même côté droit, donc elles totalisent l'hypoténuse entière :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Le réarrangement donne [[q = c - p]]. Avec [[c = 10]] cm et [[p = 3.6]] cm, la soustraction est [[q = 10 - 3.6 = 6.4]] cm. La même soustraction fonctionne dans l'autre sens : [[p = c - q]]. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculatrice de l'hypoténuse à partir des projections</a> reconstruit c à partir de p et q quand l'hypoténuse elle-même est inconnue.",
            },
            {
              "kind": "p",
              "text": "Comparer p et q renseigne sur la forme du triangle. Quand p égale q, la hauteur tombe au milieu de l'hypoténuse et les deux cathètes sont égales, donc le triangle est isocèle. Quand p est supérieur à q, la cathète a est plus longue que la cathète b, et quand q est supérieur, la cathète b est plus longue. La projection la plus longue appartient toujours à la cathète la plus longue.",
            },
            {
              "kind": "p",
              "text": "Dans le triangle 6-8-10, q vaut 6,4 cm et p vaut 3,6 cm, donc q est plus grand, et la cathète b, de 8 cm, est bien plus longue que la cathète a, de 6 cm.",
            },
          ],
          "h2": "Relation entre la projection p et la projection q",
          "image": {
            "alt": "Triangle rectangle comparant la projection p associée à la cathète a à la projection q associée à la cathète b, avec c égale 10, p égale 3,6 et q égale 6,4",
            "caption": "p utilise a (36 divisé par 10 = 3,6) et q utilise b (64 divisé par 10 = 6,4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prenez [[a = 6]] cm et [[c = 10]] cm. Les quatre étapes ci-dessous montrent le calcul complet, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[p = \\frac{a^2}{c}]].",
                "Substituez les valeurs : [[p = \\frac{6^2}{10}]].",
                "Élevez la cathète au carré : [[p = \\frac{36}{10}]].",
                "Divisez : [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 3,6 cm est le segment de l'hypoténuse situé à côté de la cathète a, et non un côté perpendiculaire ni une aire. Une courte vérification boucle la boucle : [[a^2 = 6^2 = 36]] et [[c \\times p = 10 \\times 3.6 = 36]], donc les deux membres du théorème concordent.",
            },
            {
              "kind": "p",
              "text": "Pour référence, l'autre projection est [[q = 10 - 3.6 = 6.4]] cm, la cathète b est [[b = \\sqrt{10 \\times 6.4} = 8]] cm, et la hauteur est [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, ce qui confirme le triangle rectangle familier 6-8-10.",
            },
          ],
          "h2": "Exemple étape par étape pour trouver la projection p",
          "image": {
            "alt": "Triangle rectangle avec une cathète a de 6 cm et une hypoténuse de 10 cm, résolu pour donner une projection p égale à 3,6 cm",
            "caption": "Exemple résolu : a = 6 cm et c = 10 cm donnent p = 36 divisé par 10 = 3,6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre contrôles indépendants détectent presque toutes les erreurs. Faites-en au moins un pour chaque réponse, et les quatre quand le problème compte. L'exemple ci-dessous utilise [[a = 6]] cm, [[c = 10]] cm et [[p = 3.6]] cm tout au long.",
            },
            {
              "kind": "h3",
              "text": "Méthode 1 : contrôle par le théorème de la projection",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[p = \\frac{a^2}{c}]] directement. Ici, [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, ce qui correspond à la réponse. Si le nouveau calcul diffère, c'est l'élévation au carré ou la division qui a mal tourné.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : addition des segments",
            },
            {
              "kind": "p",
              "text": "Trouvez q par soustraction : [[q = 10 - 3.6 = 6.4]] cm. Vérifiez ensuite [[p + q = 3.6 + 6.4 = 10]] cm, ce qui égale c. Une somme qui ne donne pas c signale une erreur de soustraction.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : contrôle par le théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Calculez la cathète b à partir de q : [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Vérifiez ensuite [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Ce contrôle teste tout le triangle : il détecte donc les erreurs d'étiquetage que le premier contrôle peut manquer. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculatrice de la cathète b à partir de la projection</a> effectue directement l'étape b.",
            },
            {
              "kind": "h3",
              "text": "Méthode 4 : vraisemblance géométrique",
            },
            {
              "kind": "p",
              "text": "Confirmez que p est positif, inférieur à c, exprimé dans la bonne unité, et qu'il s'agit d'un segment de l'hypoténuse plutôt que d'un côté perpendiculaire. Ici, 3,6 cm est positif, inférieur à 10 cm, en centimètres, et bien plus court que la cathète a, de 6 cm.",
            },
          ],
          "h2": "Comment vérifier votre calcul de la projection p",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tracez la hauteur depuis le sommet de l'angle droit C, perpendiculairement à l'hypoténuse AB. Elle rencontre l'hypoténuse en un point appelé pied, étiqueté D, et la partage en deux segments adjacents : AD est la projection p, et DB est la projection q.",
            },
            {
              "kind": "p",
              "text": "La projection p appartient à la cathète a parce qu'elle se trouve à côté du sommet A, le même sommet où commence la cathète a. Dans le petit triangle ACD, la cathète a est l'hypoténuse et p est l'une de ses cathètes, ce qui est le lien géométrique qui fait fonctionner le théorème de la projection. La projection q, par le même raisonnement, appartient à la cathète b, qui touche le sommet B.",
            },
            {
              "kind": "p",
              "text": "Les projections sont des longueurs le long de l'hypoténuse, mesurées dans la même unité que les autres côtés. Elles ne sont perpendiculaires à rien, et ce ne sont pas des côtés du triangle d'origine. La <a href=\"/right-triangle-projection-calculator/\">calculatrice de projection d'un triangle rectangle</a> trouve les deux projections quand les cathètes et l'hypoténuse sont connues.",
            },
            {
              "kind": "p",
              "text": "Comme p et q sont les deux parties d'un même côté droit, elles totalisent l'hypoténuse entière :",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm et [[p = 3.6]] cm, l'autre projection est [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "La projection p n'est pas la même chose que la cathète a. La cathète a est le côté AC, l'un des côtés qui forment l'angle droit, tandis que p est le segment AD le long de l'hypoténuse. Dans le triangle 6-8-10, la cathète a mesure 6 cm et la projection p seulement 3,6 cm.",
            },
          ],
          "h2": "Qu'est-ce que la projection p dans un triangle rectangle ?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le carré est là parce que le théorème de la projection est un énoncé sur une cathète au carré : il dit que le carré de la cathète a égale le produit de c et de p, [[a^2 = c \\times p]], et la formule de p est ce qu'on obtient en divisant les deux membres par c.",
            },
            {
              "kind": "p",
              "text": "La raison remonte aux triangles semblables. Dans le triangle ACD, la cathète a joue le rôle de l'hypoténuse, tandis que p est l'une de ses cathètes. Comparer le petit triangle avec le triangle entier donne la proportion [[\\frac{p}{a} = \\frac{a}{c}]], et la cathète a apparaît deux fois, une fois dans chaque rapport. La multiplication en croix place a des deux côtés, ce qui explique exactement l'apparition du carré.",
            },
            {
              "kind": "p",
              "text": "La relation de moyenne géométrique dit la même chose en d'autres mots : la cathète a est la moyenne géométrique de l'hypoténuse c et de sa projection p, ce qui signifie [[a = \\sqrt{c \\times p}]]. Élever les deux membres au carré donne [[a^2 = c \\times p]], et diviser par c isole p.",
            },
            {
              "kind": "p",
              "text": "La division est l'étape qui isole p. La multiplication dans le théorème lie p à c, et diviser par c défait ce lien. Sans le carré, la formule mélangerait une longueur avec une aire, et les unités ne fonctionneraient pas.",
            },
          ],
          "h2": "Pourquoi la cathète a est-elle élevée au carré dans la formule de la projection ?",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-applications": "Applications pratiques des calculs de projection d'un triangle rectangle",
        "sec-calculate": "Calculer la projection p d'un triangle rectangle",
        "sec-diagram": "Schéma de la projection p d'un triangle rectangle expliqué",
        "sec-examples": "Exemples résolus de calcul de la projection p",
        "sec-faq": "Questions fréquentes",
        "sec-formula": "Formule de la projection p d'un triangle rectangle",
        "sec-how-to-use": "Comment utiliser la calculatrice de la projection p d'un triangle rectangle",
        "sec-intro": "Calculatrice de la projection p d'un triangle rectangle",
        "sec-leg-a-hypotenuse": "Comprendre la cathète a et l'hypoténuse",
        "sec-mistakes": "Erreurs courantes dans le calcul de la projection p",
        "sec-practice": "Exercices avec réponses",
        "sec-projection-q": "Comment calculer la projection q à partir de l'autre cathète",
        "sec-proof": "Pourquoi la formule de la projection p fonctionne-t-elle ?",
        "sec-properties": "Propriétés importantes de la projection p",
        "sec-pythagoras": "Relation entre la projection p et le théorème de Pythagore",
        "sec-related": "Découvrez les calculatrices de triangle rectangle associées",
        "sec-relationship-altitude": "Relation entre la projection p et la hauteur",
        "sec-relationship-leg-a": "Relation entre la projection p et la cathète a",
        "sec-relationship-pq": "Relation entre la projection p et la projection q",
        "sec-step-example": "Exemple étape par étape pour trouver la projection p",
        "sec-verify": "Comment vérifier votre calcul de la projection p",
        "sec-what-projection-p": "Qu'est-ce que la projection p dans un triangle rectangle ?",
        "sec-why-squared": "Pourquoi la cathète a est-elle élevée au carré dans la formule de la projection ?",
      },
    },
};
