// specialGuideTranslations.bfr.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculateur de triangle rectangle spécial : rapports 45-45-90 et 30-60-90",
        "description": "Résolvez les triangles 45-45-90 et 30-60-90 avec le calculateur de triangle rectangle spécial. Utilisez les rapports fixes 1:1:√2 et 1:√3:2 pour trouver rapidement les côtés manquants.",
        "primaryKeyword": "Calculateur de triangle rectangle spécial",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculateur de triangle rectangle spécial",
        "sec-calculate": "Calculer les côtés manquants des triangles rectangles spéciaux",
        "sec-what": "Que sont les triangles rectangles spéciaux ?",
        "sec-types": "Les deux principaux types de triangles rectangles spéciaux",
        "sec-454590": "Comprendre le triangle 45-45-90",
        "sec-derive-454590": "Dériver le rapport des côtés du triangle 45-45-90",
        "sec-306090": "Comprendre le triangle 30-60-90",
        "sec-derive-306090": "Dériver le rapport des côtés du triangle 30-60-90",
        "sec-compare": "Comparer les rapports des côtés des deux triangles spéciaux",
        "sec-how-hyp-45": "Comment utiliser le calculateur d'hypoténuse 45-45-90",
        "sec-how-leg-45": "Comment trouver un côté à partir de l'hypoténuse 45-45-90",
        "sec-how-long-30": "Comment utiliser le calculateur de côté long 30-60-90",
        "sec-how-hyp-30": "Comment utiliser le calculateur d'hypoténuse 30-60-90",
        "sec-examples": "Exemples détaillés pour les deux types de triangles spéciaux",
        "sec-area-perimeter": "Relations d'aire et de périmètre dans les triangles rectangles spéciaux",
        "sec-exact": "Réponses exactes avec radicaux ou approximations décimales",
        "sec-verify": "Comment vérifier les calculs de triangles rectangles spéciaux",
        "sec-mistakes": "Erreurs fréquentes dans la résolution des triangles rectangles spéciaux",
        "sec-applications": "Applications pratiques des triangles rectangles spéciaux",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Calculateurs de triangles rectangles associés",
        "sec-faq": "Questions fréquemment posées",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de triangle rectangle spécial",
          "blocks": [
            {
              "kind": "p",
              "text": "Résolvez les triangles 45-45-90 et 30-60-90 à partir d'un seul côté connu, en utilisant leurs rapports de côtés fixes.",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle spécial est un triangle rectangle dont les angles produisent un rapport de côtés fixe qui ne change jamais, quelle que soit la taille du triangle. Seuls deux modèles d'angles le font en géométrie scolaire : le triangle 45-45-90 et le triangle 30-60-90. Le calculateur de triangle rectangle spécial de cette page couvre les deux types, donc un seul côté connu suffit pour trouver tous les autres côtés.",
            },
            {
              "kind": "p",
              "text": "Le triangle 45-45-90 a deux côtés égaux, et ses côtés suivent le rapport [[a : b : c = 1 : 1 : \\sqrt{2}]]. Le triangle 30-60-90 a trois côtés de longueurs différentes, et ses côtés suivent le rapport [[a : b : c = 1 : \\sqrt{3} : 2]]. Ici [[a]] et [[b]] sont les côtés et [[c]] est l'hypoténuse, et la signification de [[a]] et [[b]] change selon le type de triangle, donc les sections ci-dessous précisent toujours le type utilisé.",
            },
            {
              "kind": "p",
              "text": "Si un triangle 45-45-90 a un côté de 5 cm, l'autre côté mesure aussi 5 cm et l'hypoténuse est [[c = 5\\sqrt{2} \\approx 7.071]] cm. Si un triangle 30-60-90 a un côté court de 5 cm, le côté long est [[b = 5\\sqrt{3} \\approx 8.660]] cm et l'hypoténuse est [[c = 10]] cm. Les quatre modes du calculateur de cette page effectuent exactement ces étapes, et le guide ci-dessous explique d'où vient chaque rapport, comment choisir le bon mode et comment vérifier chaque réponse.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer les côtés manquants des triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur de cette page comporte quatre modes, un pour chaque côté manquant qu'un problème de triangle rectangle spécial demande habituellement. Choisissez d'abord le type de triangle, puis le côté que vous connaissez et celui dont vous avez besoin. Le tableau ci-dessous présente chaque mode avec son entrée, sa formule et son résultat.",
            },
          ],
          "table": {
            "headers": [
              "Mode du calculateur",
              "Entrée requise",
              "Résultat",
            ],
            "rows": [
              [
                "45-45-90 : Hypoténuse",
                "Côté a",
                "Hypoténuse c",
              ],
              [
                "45-45-90 : Côté",
                "Hypoténuse c",
                "Côté a",
              ],
              [
                "30-60-90 : Côté long",
                "Côté court a",
                "Côté long b",
              ],
              [
                "30-60-90 : Hypoténuse",
                "Côté court a",
                "Hypoténuse c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Le mode 1 trouve l'hypoténuse d'un triangle 45-45-90 à partir de l'un ou l'autre des côtés égaux.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Le mode 2 trouve un côté d'un triangle 45-45-90 à partir de l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Le mode 3 trouve le côté long d'un triangle 30-60-90 à partir du côté court.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Le mode 4 trouve l'hypoténuse d'un triangle 30-60-90 à partir du côté court.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Pour utiliser un mode, confirmez le type de triangle à partir de ses angles, identifiez le côté connu, saisissez une mesure positive, choisissez une unité qui correspond au reste du problème, puis cliquez sur Calculer. Utilisez Réinitialiser avant un nouveau calcul, pour qu'une ancienne valeur ne puisse pas se glisser dans la réponse suivante. Chaque mode nécessite une formule différente parce que chaque mode part d'un côté connu différent, et les deux types de triangles ont des rapports différents, donc une formule 45-45-90 ne convient jamais à un problème 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Schéma des quatre modes du calculateur de triangle rectangle spécial : côté 45-45-90 vers hypoténuse, hypoténuse 45-45-90 vers côté, côté court 30-60-90 vers côté long, et côté court 30-60-90 vers hypoténuse",
            "caption": "Les quatre modes du calculateur : chacun part d'un côté connu et applique un rapport fixe.",
          },
        },
        "sec-what": {
          "h2": "Que sont les triangles rectangles spéciaux ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle spécial est un triangle rectangle dont les trois angles sont fixés à des valeurs qui imposent à ses côtés un rapport unique et invariable. La plupart des triangles rectangles n'offrent pas un tel raccourci : connaître un côté ne dit rien des autres tant qu'on ne connaît pas aussi un angle ou un deuxième côté. Dans un triangle rectangle spécial, les angles seuls fixent la forme, donc une seule longueur de côté fixe tout le triangle.",
            },
            {
              "kind": "p",
              "text": "Le théorème de Pythagore s'applique toujours, et c'est l'outil qui produit les deux rapports. Dans un triangle 45-45-90, les deux côtés égaux font que le théorème se réduit à [[2a^2 = c^2]], ce qui donne [[c = a\\sqrt{2}]]. Dans un triangle 30-60-90, l'hypoténuse vaut deux fois le côté court, donc le théorème donne [[b^2 = (2a)^2 - a^2 = 3a^2]], ce qui donne [[b = a\\sqrt{3}]]. Les dérivations complètes figurent dans leurs propres sections ci-dessous.",
            },
            {
              "kind": "p",
              "text": "Les rapports restent les mêmes à toutes les tailles parce que les triangles sont semblables au sein de leur propre type. Un triangle 45-45-90 avec un côté de 1 cm et un autre avec un côté de 100 cm ont la même forme, les mêmes angles et le même rapport 1:1:√2. Cette indépendance vis-à-vis de l'échelle rend ces triangles si utiles en géométrie et en trigonométrie : une fois le modèle d'angles reconnu, on peut écrire chaque côté sans mesurer ni utiliser le sinus et le cosinus.",
            },
            {
              "kind": "p",
              "text": "Les triangles 45-45-90 et 30-60-90 sont deux familles différentes, et non deux noms pour la même forme. L'un a deux côtés égaux et l'autre a trois côtés de longueurs différentes. Les confondre est l'erreur la plus fréquente dans ce sujet, donc la section suivante présente chaque famille séparément avant que le guide ne les compare côte à côte.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Deux triangles rectangles spéciaux côte à côte : un triangle 45-45-90 avec le rapport 1:1:√2 et un triangle 30-60-90 avec le rapport 1:√3:2",
            "caption": "Les deux triangles rectangles spéciaux : 45-45-90 avec des côtés égaux, et 30-60-90 avec trois côtés différents.",
          },
        },
        "sec-types": {
          "h2": "Les deux principaux types de triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux triangles spéciaux sont des triangles rectangles, donc chacun a un angle de 90° et une hypoténuse opposée à cet angle. Ce qui diffère, c'est la paire d'angles aigus, et ce sont les angles aigus qui décident du rapport des côtés. Apprenez d'abord chaque type séparément, et la comparaison plus loin dans ce guide sera facile à suivre.",
            },
            {
              "kind": "h3",
              "text": "Triangle 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Angles : 45°, 45°, 90°.",
                "Deux côtés égaux, donc l'un ou l'autre côté peut servir d'entrée connue.",
                "L'hypoténuse vaut le côté multiplié par √2, [[c = a\\sqrt{2}]].",
                "Rapport des côtés : [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Aussi appelé triangle rectangle isocèle.",
              ],
            },
            {
              "kind": "h3",
              "text": "Triangle 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Angles : 30°, 60°, 90°.",
                "Côté court [[a]] opposé à l'angle de 30°, côté long [[b]] opposé à l'angle de 60°.",
                "L'hypoténuse vaut deux fois le côté court, [[c = 2a]].",
                "Le côté long vaut le côté court multiplié par √3, [[b = a\\sqrt{3}]].",
                "Rapport des côtés : [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Un triangle rectangle scalène, puisque les trois côtés diffèrent.",
              ],
            },
            {
              "kind": "p",
              "text": "La différence visuelle est claire une fois qu'on sait où regarder. Dans un triangle 45-45-90, les deux côtés semblent de même longueur, et l'hypoténuse forme un angle de 45° avec chaque côté. Dans un triangle 30-60-90, le côté opposé à l'angle de 30° est visiblement le côté le plus court, le côté opposé à l'angle de 60° est plus long, et l'hypoténuse vaut exactement deux fois le côté court. Le tableau ci-dessous résume le contraste.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Angles",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rapport des côtés",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Côtés égaux",
                "Oui",
                "Non",
              ],
              [
                "Côté le plus court",
                "Les deux côtés",
                "Côté court (opposé à 30°)",
              ],
              [
                "Côté le plus long",
                "Hypoténuse",
                "Hypoténuse",
              ],
              [
                "Formule de l'hypoténuse",
                "a√2",
                "2a",
              ],
              [
                "Formule du côté long",
                "Sans objet",
                "a√3",
              ],
              [
                "Type de triangle",
                "Triangle rectangle isocèle",
                "Triangle rectangle scalène",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Comprendre le triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle 45-45-90 est un triangle rectangle isocèle. Ses deux angles aigus mesurent tous les deux 45°, donc les angles totalisent [[45° + 45° + 90° = 180°]], comme pour tout triangle. Parce que les deux angles aigus sont égaux, les côtés opposés sont égaux aussi, et c'est pourquoi les deux côtés ont la même longueur.",
            },
            {
              "kind": "p",
              "text": "Appelons les côtés [[a]] et [[b]] et l'hypoténuse [[c]]. Des côtés égaux signifient [[a = b]], et le rapport des côtés est [[a : b : c = 1 : 1 : \\sqrt{2}]]. L'hypoténuse est le côté le plus long, comme dans tout triangle rectangle, et elle est plus longue que chaque côté d'un facteur √2, soit environ 1,414.",
            },
            {
              "kind": "p",
              "text": "Les deux formules utiles sont l'hypoténuse à partir d'un côté et le côté à partir de l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Prenons un côté de 5 cm. L'autre côté mesure 5 cm, et l'hypoténuse est [[c = 5\\sqrt{2} \\approx 7.071]] cm. Les mêmes étapes fonctionnent à toutes les tailles : un côté de 12 cm donne une hypoténuse de [[12\\sqrt{2} \\approx 16.971]] cm, et un côté de 1 unité donne une hypoténuse de √2 unités. Le <a href=\"/45-45-90-triangle-calculator/\">calculateur de triangle 45-45-90</a> couvre ce type de triangle en détail, y compris l'aire et le périmètre.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Un triangle 45-45-90 avec deux côtés égaux marqués congruents, des angles de 45°, 45°, 90°, et une hypoténuse étiquetée a√2",
            "caption": "Un triangle 45-45-90 : côtés égaux, angles aigus égaux, et une hypoténuse de a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Dériver le rapport des côtés du triangle 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 1:1:√2 n'est pas une règle à mémoriser aveuglément. Il découle en quelques étapes du théorème de Pythagore, et voir ces étapes une fois rend le rapport difficile à oublier. Commençons par le fait que les côtés sont égaux.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Appliquons le théorème de Pythagore aux côtés et à l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Remplaçons [[b]] par [[a]], puisque les côtés sont égaux.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combinons les deux termes identiques.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Prenons la racine carrée positive des deux côtés. Les longueurs sont positives, donc la racine négative est écartée.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Posons [[a = 1]] et le rapport apparaît directement : côtés 1 et 1, hypoténuse √2, donc le rapport est [[1 : 1 : \\sqrt{2}]]. Le même rapport explique la diagonale d'un carré. Un carré de côté [[a]] a une diagonale qui le divise en deux triangles 45-45-90 congruents, et la diagonale est l'hypoténuse de l'un ou l'autre, donc la diagonale vaut [[a\\sqrt{2}]]. Un carré de 8 cm de côté a une diagonale de [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Un triangle 45-45-90 étiqueté montrant la dérivation de Pythagore a au carré plus a au carré égale c au carré, donnant c égale a fois racine de 2",
              "caption": "La dérivation de Pythagore : des côtés égaux transforment a² + b² = c² en 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Un carré de 8 cm de côté et une diagonale de 8 racine de 2 cm, divisé en deux triangles 45-45-90 congruents",
              "caption": "Une diagonale de carré divise le carré en deux triangles 45-45-90 congruents.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Comprendre le triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle 30-60-90 a trois angles différents, donc trois côtés de longueurs différentes. Le côté opposé au plus petit angle est le côté le plus court, le côté opposé à l'angle moyen est le côté moyen, et le côté opposé à l'angle de 90° est l'hypoténuse. Cette règle du côté opposé est toute la clé pour étiqueter ce triangle correctement.",
            },
            {
              "kind": "p",
              "text": "Utilisons [[a]] pour le côté court opposé à 30°, [[b]] pour le côté long opposé à 60°, et [[c]] pour l'hypoténuse opposée à 90°. Les deux formules utiles sont le côté long à partir du côté court et l'hypoténuse à partir du côté court.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Le rapport des côtés est [[a : b : c = 1 : \\sqrt{3} : 2]], avec √3 valant environ 1,732. Prenons un côté court de 5 cm. Le côté long est [[b = 5\\sqrt{3} \\approx 8.660]] cm et l'hypoténuse est [[c = 10]] cm. Vérifions avec le théorème de Pythagore : [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], ce qui confirme que les trois côtés s'assemblent bien.",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse vaut toujours exactement deux fois le côté court, ce qui est la vérification la plus rapide dans ce sujet. Si un problème indique une hypoténuse de 14 cm, le côté court vaut 7 cm immédiatement, et le côté long suit comme [[7\\sqrt{3} \\approx 12.124]] cm. Le <a href=\"/30-60-90-triangle-calculator/\">calculateur de triangle 30-60-90</a> couvre ce type de triangle en détail, y compris sa dérivation à partir du triangle équilatéral.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Un triangle 30-60-90 avec le côté court a opposé à 30 degrés, le côté long a racine de 3 opposé à 60 degrés, et l'hypoténuse 2a opposée à 90 degrés",
            "caption": "Un triangle 30-60-90 : le côté court se trouve opposé à 30°, le côté long opposé à 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Dériver le rapport des côtés du triangle 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rapport 1:√3:2 vient d'un triangle équilatéral, et la construction vaut la peine d'être suivie étape par étape. Commençons par un triangle équilatéral dont le côté mesure [[2a]]. Ses trois angles mesurent 60° et ses trois côtés sont égaux.",
            },
            {
              "kind": "p",
              "text": "Traçons une hauteur depuis un sommet vers le côté opposé. La hauteur fait trois choses à la fois : elle divise le triangle équilatéral en deux triangles rectangles congruents, elle coupe la base en deux segments de longueur [[a]], et elle divise un angle de 60° en deux angles de 30°. Chaque moitié est maintenant un triangle avec des angles de 30°, 60° et 90°.",
            },
            {
              "kind": "p",
              "text": "Dans l'une ou l'autre moitié, l'hypoténuse est le côté équilatéral d'origine, [[2a]], et le côté court est la demi-base, [[a]]. Appelons la hauteur, qui est le côté long, [[b]]. Appliquons le théorème de Pythagore au demi-triangle.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Développons le carré.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Simplifions.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Prenons la racine carrée positive.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Posons [[a = 1]] et le rapport apparaît : côté court 1, côté long √3, hypoténuse 2, donc le rapport est [[1 : \\sqrt{3} : 2]]. La hauteur d'un triangle équilatéral de 10 cm de côté est donc [[5\\sqrt{3} \\approx 8.660]] cm, puisque la hauteur est le côté long d'un triangle 30-60-90 avec un côté court de 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Un triangle équilatéral de côté 2a divisé par une hauteur en deux triangles 30-60-90 congruents, chacun avec un côté court a, un côté long a racine de 3, et une hypoténuse 2a",
            "caption": "Une hauteur divise un triangle équilatéral en deux triangles 30-60-90 congruents.",
          },
        },
        "sec-compare": {
          "h2": "Comparer les rapports des côtés des deux triangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux rapports se ressemblent au premier coup d'œil, et c'est exactement pour cela qu'on les confond. Les deux contiennent une racine carrée et un petit nombre entier, et les deux décrivent un triangle rectangle. Mais les nombres ne sont pas aux mêmes places : dans 1:1:√2 la racine appartient à l'hypoténuse, tandis que dans 1:√3:2 la racine appartient au côté long et l'hypoténuse est le nombre entier 2.",
            },
          ],
          "table": {
            "headers": [
              "Caractéristique",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Angles",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rapport des côtés",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Côtés égaux",
                "Oui",
                "Non",
              ],
              [
                "Côté le plus court",
                "Les deux côtés",
                "Côté court",
              ],
              [
                "Côté le plus long",
                "Hypoténuse",
                "Hypoténuse",
              ],
              [
                "Formule de l'hypoténuse",
                "a√2",
                "2a",
              ],
              [
                "Formule du côté long",
                "Sans objet",
                "a√3",
              ],
              [
                "Type de triangle",
                "Triangle rectangle isocèle",
                "Triangle rectangle scalène",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Les formules ne peuvent pas être interchangées. Multiplier un côté court 30-60-90 par √2 donne une hypoténuse fausse, et doubler un côté 45-45-90 donne une hypoténuse fausse. Les deux triangles proviennent de constructions différentes, une diagonale de carré pour le 45-45-90 et une hauteur de triangle équilatéral pour le 30-60-90, donc leurs rapports répondent à des questions de géométrie différentes.",
            },
            {
              "kind": "p",
              "text": "Un exemple numérique pour chaque type montre l'écart. Un triangle 45-45-90 avec un côté de 5 cm a une hypoténuse de [[5\\sqrt{2} \\approx 7.071]] cm. Un triangle 30-60-90 avec un côté court de 5 cm a une hypoténuse de 10 cm et un côté long de [[5\\sqrt{3} \\approx 8.660]] cm. Même nombre de départ, des réponses très différentes, et la seule façon de les distinguer est le modèle d'angles.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Comparaison côte à côte du rapport 45-45-90 1:1:√2 et du rapport 30-60-90 1:√3:2 à la même échelle",
            "caption": "Les deux rapports à la même échelle : la racine se trouve sur l'hypoténuse pour le 45-45-90, sur le côté long pour le 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Comment utiliser le calculateur d'hypoténuse 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le mode 1 est le mode le plus utilisé de cette page, et il ne prend que quelques secondes une fois le type de triangle confirmé. Suivez les étapes dans l'ordre.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirmez que le triangle est 45-45-90 : les deux angles aigus mesurent 45°.",
                "Choisissez l'un ou l'autre côté égal comme côté connu, puisque les deux côtés ont la même longueur.",
                "Sélectionnez le mode d'hypoténuse 45-45-90 dans le calculateur.",
                "Saisissez la longueur du côté sous forme de nombre positif.",
                "Choisissez l'unité qui correspond au reste du problème.",
                "Cliquez sur Calculer l'hypoténuse c.",
                "Lisez le résultat, qui est l'hypoténuse dans la même unité.",
                "Utilisez Réinitialiser avant de commencer un nouveau calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Le mode applique la formule ci-dessous.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Avec un côté de 7 cm, l'hypoténuse est [[c = 7\\sqrt{2} \\approx 9.899]] cm. La formule n'est valable que lorsque les deux angles aigus mesurent 45°, donc vérifiez les angles avant de faire confiance à la réponse. Si les angles sont plutôt de 30° et 60°, passez à un mode 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Comment trouver un côté à partir de l'hypoténuse 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le mode 2 fonctionne à rebours, de l'hypoténuse vers un côté. Il divise par √2, ce qui est l'étape le plus souvent oubliée. La formule est indiquée ci-dessous.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Le même résultat peut s'écrire sous forme rationalisée, ce qui évite une racine au dénominateur.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Pour utiliser le mode, confirmez le modèle d'angles 45-45-90, sélectionnez le mode de côté 45-45-90, saisissez l'hypoténuse, choisissez l'unité, puis cliquez sur Calculer. Avec une hypoténuse de 10 cm, le côté est [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Les deux côtés ont cette longueur, puisque les côtés sont égaux, donc la seule réponse décrit tout le triangle. Une vérification rapide : [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], ce qui correspond au carré de l'hypoténuse.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Comment utiliser le calculateur de côté long 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le mode 3 trouve le côté long à partir du côté court, et la seule difficulté est d'identifier correctement le côté court. Le côté court est le côté opposé à l'angle de 30°, et c'est toujours le côté le plus court du triangle.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirmez que le triangle est 30-60-90 à partir de ses angles.",
                "Trouvez le côté opposé à l'angle de 30° : c'est le côté court.",
                "Sélectionnez le mode de côté long 30-60-90 dans le calculateur.",
                "Saisissez le côté court sous forme de nombre positif.",
                "Choisissez l'unité qui correspond au reste du problème.",
                "Cliquez sur Calculer le côté long.",
                "Lisez le résultat, qui est le côté long dans la même unité.",
              ],
            },
            {
              "kind": "p",
              "text": "Le mode applique la formule ci-dessous.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Avec un côté court de 6 cm, le côté long est [[b = 6\\sqrt{3} \\approx 10.392]] cm. Saisir l'hypoténuse ou le côté long par erreur donne une réponse fausse, donc étiquetez d'abord les côtés et saisissez uniquement le côté court.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Comment utiliser le calculateur d'hypoténuse 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Le mode 4 est le mode le plus simple de la page, parce que l'hypoténuse d'un triangle 30-60-90 vaut exactement deux fois le côté court. Il n'y a pas de racine carrée, ce qui rend la réponse facile à vérifier à la main.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirmez que le triangle est 30-60-90 à partir de ses angles.",
                "Identifiez le côté court, le côté opposé à l'angle de 30°.",
                "Sélectionnez le mode d'hypoténuse 30-60-90 dans le calculateur.",
                "Saisissez le côté court sous forme de nombre positif.",
                "Choisissez l'unité qui correspond au reste du problème.",
                "Cliquez sur Calculer l'hypoténuse c.",
                "Lisez le résultat, qui est l'hypoténuse dans la même unité.",
              ],
            },
            {
              "kind": "p",
              "text": "Le mode applique la formule ci-dessous.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Avec un côté court de 8 cm, l'hypoténuse est [[c = 16]] cm. Le côté long du même triangle est [[8\\sqrt{3} \\approx 13.856]] cm, ce qui se situe entre le côté court et l'hypoténuse, comme il se doit. Si un résultat est plus petit que le côté court, le mauvais mode a été sélectionné.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Exemples détaillés pour les deux types de triangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Ces deux exemples résolus trouvent chaque côté de chaque type de triangle à partir d'un seul côté connu. L'aire et le périmètre apparaissent ici comme des calculs manuels supplémentaires, et non comme des modes du calculateur : le calculateur de cette page trouve uniquement les longueurs des côtés.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Triangle 45-45-90",
            },
            {
              "kind": "p",
              "text": "Soit un triangle 45-45-90 avec un côté [[a = 5]] cm, trouvez l'autre côté, l'hypoténuse, l'aire et le périmètre.",
            },
            {
              "kind": "p",
              "text": "Les côtés sont égaux, donc l'autre côté est [[b = 5]] cm. L'hypoténuse découle du rapport.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "L'aire est la moitié du produit des côtés.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Le périmètre est la somme des trois côtés.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Triangle 30-60-90",
            },
            {
              "kind": "p",
              "text": "Soit un triangle 30-60-90 avec un côté court [[a = 5]] cm, trouvez le côté long, l'hypoténuse, l'aire et le périmètre.",
            },
            {
              "kind": "p",
              "text": "Le côté long est le côté court multiplié par √3, et l'hypoténuse vaut deux fois le côté court.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "L'aire est la moitié du produit des côtés.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Le périmètre est la somme des trois côtés.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Les deux exemples se vérifient avec le théorème de Pythagore. Pour le premier, [[5^2 + 5^2 = 50]] et [[7.071^2 \\approx 50]]. Pour le second, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Relations d'aire et de périmètre dans les triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "L'aire et le périmètre sont des calculs de suivi utiles une fois les côtés connus, mais ce sont des relations manuelles, et non des fonctions du calculateur de cette page. Les formules ci-dessous utilisent les mêmes étiquettes de côtés que le reste du guide, avec [[a]] comme côté connu pour le 45-45-90 et comme côté court pour le 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle 45-45-90, l'aire est la moitié du carré d'un côté, et le périmètre est le côté multiplié par [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Pour un triangle 30-60-90, l'aire est la moitié du produit des côtés, et le périmètre est le côté court multiplié par [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Prenons un triangle 45-45-90 avec un côté de 6 cm. Son aire est [[A = \\frac{36}{2} = 18]] cm², et son périmètre est [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Prenons un triangle 30-60-90 avec un côté court de 6 cm. Son aire est [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², et son périmètre est [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Gardez les unités en ordre : l'aire est toujours en unités carrées et le périmètre en unités linéaires, donc une réponse de 18 cm pour une aire est une erreur d'unité, et non une erreur d'arrondi.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Réponses exactes avec radicaux ou approximations décimales",
          "blocks": [
            {
              "kind": "p",
              "text": "Les racines carrées de ce guide sont des nombres irrationnels, ce qui signifie que leurs développements décimaux ne se terminent jamais et ne se répètent jamais. Les deux valeurs à connaître sont indiquées ci-dessous.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Une réponse exacte garde la racine en place, comme [[5\\sqrt{2}]], tandis qu'une réponse décimale la remplace par une approximation, comme [[5\\sqrt{2} \\approx 7.071]]. Les réponses exactes sont préférées en mathématiques scolaires parce qu'elles ne comportent aucune erreur d'arrondi et qu'elles montrent la structure du problème. Un enseignant voit immédiatement que [[5\\sqrt{2}]] vient d'un triangle 45-45-90, alors que 7.071 aurait pu venir de n'importe où.",
            },
            {
              "kind": "p",
              "text": "Les décimales conviennent mieux aux mesures pratiques, où une règle ou un outil de coupe a besoin d'un nombre, et non d'un symbole. Quand une décimale est nécessaire, arrondissez seulement à la fin du calcul, jamais au milieu. Arrondir √2 à 1,41 avant de multiplier par 5 donne 7,05, ce qui s'écarte de 0,021 du vrai 7,071, et l'erreur grandit avec des nombres plus grands. Étiquetez chaque décimale avec le signe approximativement égal, pour qu'un lecteur ne confonde jamais [[5\\sqrt{3} \\approx 8.660]] avec une égalité exacte.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier les calculs de triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque réponse de triangle spécial peut être vérifiée en moins d'une minute avec trois tests : le rapport des côtés, le théorème de Pythagore et la somme des angles. Effectuez au moins deux de ces tests avant de faire confiance à un résultat.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle 45-45-90, vérifiez que les côtés sont égaux, [[a = b]], et que les côtés satisfont le théorème de Pythagore, [[a^2 + b^2 = c^2]]. Avec [[a = 5]] cm et [[c = 7.071]] cm, la vérification est [[25 + 25 = 50]] contre [[7.071^2 \\approx 50]], ce qui concorde.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle 30-60-90, vérifiez que le côté long est le côté court multiplié par √3, [[b = a\\sqrt{3}]], que l'hypoténuse vaut deux fois le côté court, [[c = 2a]], et que [[a^2 + b^2 = c^2]]. Avec [[a = 5]] cm, [[b = 8.660]] cm et [[c = 10]] cm, la vérification est [[25 + 75 = 100 = 10^2]], ce qui concorde.",
            },
            {
              "kind": "p",
              "text": "Vérifiez aussi la somme des angles : les trois angles doivent totaliser 180°. Un triangle 45-45-90 donne [[45° + 45° + 90° = 180°]], et un triangle 30-60-90 donne [[30° + 60° + 90° = 180°]]. Si le rapport, le théorème et les angles concordent tous, la réponse est solide. Si l'un d'eux échoue, le type de triangle a été mal identifié ou la mauvaise formule a été utilisée.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes dans la résolution des triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze erreurs causent presque toutes les réponses fausses dans ce sujet. Chacune est listée ci-dessous avec l'approche correcte, pour que vous puissiez repérer votre propre erreur rapidement.",
            },
            {
              "kind": "list",
              "items": [
                "Confondre les triangles 45-45-90 et 30-60-90. Vérifiez d'abord les angles : deux angles de 45° signifient 45-45-90, tandis que 30° et 60° signifient 30-60-90.",
                "Utiliser √3 au lieu de √2. L'hypoténuse 45-45-90 est [[c = a\\sqrt{2}]], jamais [[a\\sqrt{3}]].",
                "Utiliser √2 au lieu de √3. Le côté long 30-60-90 est [[b = a\\sqrt{3}]], jamais [[a\\sqrt{2}]].",
                "Supposer que les deux côtés sont égaux dans un triangle 30-60-90. Seul le triangle 45-45-90 a des côtés égaux ; dans un 30-60-90, le côté long vaut √3 fois le côté court.",
                "Supposer que le côté court et le côté long sont égaux. Le côté court se trouve opposé à 30° et le côté long opposé à 60°, donc ils diffèrent d'un facteur √3.",
                "Oublier que l'hypoténuse 30-60-90 vaut deux fois le côté court. C'est [[c = 2a]], un doublement entier sans racine carrée.",
                "Utiliser le mauvais côté d'entrée. Les modes 3 et 4 ont tous les deux besoin du côté court, donc saisir le côté long ou l'hypoténuse donne une réponse fausse.",
                "Confondre le côté court avec l'hypoténuse. L'hypoténuse est le côté le plus long et se trouve opposée à l'angle de 90° ; le côté court est le côté le plus court.",
                "Oublier de diviser par √2 quand on cherche un côté 45-45-90. Le côté est [[a = \\frac{c}{\\sqrt{2}}]], et non [[a = c\\sqrt{2}]], ce qui rendrait le côté plus long que l'hypoténuse.",
                "Oublier de multiplier par √3 quand on cherche un côté long 30-60-90. Le côté long est [[b = a\\sqrt{3}]], et utiliser [[a]] seul redonne le côté court.",
                "Arrondir les radicaux trop tôt. Gardez [[\\sqrt{2}]] et [[\\sqrt{3}]] exacts à chaque étape et arrondissez seulement la réponse finale.",
                "Mélanger les unités. Un côté en cm et une hypoténuse en mm ne peuvent pas partager une même formule ; convertissez d'abord, puis calculez.",
                "Confondre l'aire et le périmètre. L'aire utilise des unités carrées et la formule [[A = \\frac{a^2}{2}]] pour le 45-45-90, tandis que le périmètre utilise des unités linéaires et [[P = a(2 + \\sqrt{2})]].",
                "Appliquer les formules des triangles spéciaux à des triangles rectangles quelconques. Les rapports 1:1:√2 et 1:√3:2 ne fonctionnent que pour leurs propres modèles d'angles ; un triangle 20-70-90 nécessite la trigonométrie.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques des triangles rectangles spéciaux",
          "blocks": [
            {
              "kind": "p",
              "text": "Les triangles rectangles spéciaux apparaissent partout où se trouvent des carrés, des triangles équilatéraux et des angles standards. Une diagonale de carré est un problème 45-45-90 : un plateau de table carré de 60 cm de côté a une diagonale de [[60\\sqrt{2} \\approx 84.853]] cm. Une hauteur de triangle équilatéral est un problème 30-60-90 : un panneau triangulaire de 40 cm de côté a une hauteur de [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "En classe, ces triangles rendent les devoirs de géométrie et les exercices de trigonométrie plus rapides, parce que les angles standards comme 30°, 45° et 60° ont des valeurs exactes de sinus et de cosinus qui viennent directement de ces rapports. En dessin technique et en traçage aux angles standards, les équerres à 45° et à 30-60 sont construites sur exactement ces triangles, donc un dessinateur peut tracer une ligne à 45° ou à 30° en connaissant d'avance les proportions des côtés.",
            },
            {
              "kind": "p",
              "text": "Les concepts d'architecture et de design utilisent les mêmes modèles pour les contreventements diagonaux, les pentes de toit et les dispositions de carreaux, et la géométrie de construction les utilise pour des vérifications rapides sur site, comme confirmer qu'un angle est droit en mesurant une diagonale de type 3-4-5 ou une diagonale 45-45-90. La modélisation mathématique et les démonstrations en classe les utilisent aussi, puisque les réponses exactes avec radicaux gardent le raisonnement visible au lieu de le cacher dans un calculateur. Considérez-les comme des raccourcis de géométrie pour planifier et vérifier, et non comme un substitut à une mesure d'ingénierie appropriée là où la précision est requise.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Résolvez chaque problème par vous-même, puis vérifiez la solution. Les questions d'aire et de périmètre sont des exercices manuels, et non des modes du calculateur. Utilisez des nombres différents de ceux des exemples principaux, pour que les modèles doivent être appliqués à nouveau.",
            },
            {
              "kind": "h3",
              "text": "Problèmes 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triangle 45-45-90 a un côté de 7 cm. Trouvez l'hypoténuse. Solution : [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Un triangle 45-45-90 a une hypoténuse de 12 cm. Trouvez un côté. Solution : [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Un triangle 45-45-90 a un côté de 9 cm. Trouvez l'aire. Solution : [[A = \\frac{81}{2} = 40.5]] cm².",
                "Un triangle 45-45-90 a un côté de 4 cm. Trouvez le périmètre. Solution : [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Problèmes 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triangle 30-60-90 a un côté court de 7 cm. Trouvez le côté long. Solution : [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Un triangle 30-60-90 a un côté court de 9 cm. Trouvez l'hypoténuse. Solution : [[c = 2 \\times 9 = 18]] cm.",
                "Un triangle 30-60-90 a un côté court de 6 cm. Trouvez l'aire. Solution : [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Un triangle 30-60-90 a un côté court de 10 cm. Trouvez le périmètre. Solution : [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculateurs de triangles rectangles associés",
      "relatedIntro": "Chaque outil ci-dessous résout un type différent de problème de triangle rectangle. Choisissez celui qui correspond aux informations dont vous disposez déjà.",
      "relatedItems": [
        "Calculateur de triangle 45-45-90",
        "Calculateur de triangle 30-60-90",
        "Calculateur de côtés de triangle rectangle",
        "Calculateur de rapports trigonométriques",
        "Calculateur d'angles de triangle rectangle",
        "Calculateur du théorème de Pythagore",
      ],
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "question": "Qu'est-ce qu'un triangle rectangle spécial ?",
          "answer": "Un triangle rectangle spécial est un triangle rectangle dont les angles fixent son rapport de côtés, donc un seul côté connu détermine tous les autres côtés. Les deux types sont le triangle 45-45-90, avec le rapport [[1 : 1 : \\sqrt{2}]], et le triangle 30-60-90, avec le rapport [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Quels triangles rectangles spéciaux ce calculateur couvre-t-il ?",
          "answer": "Ce calculateur couvre le triangle 45-45-90 et le triangle 30-60-90, les deux triangles rectangles spéciaux utilisés en géométrie scolaire. Il comporte quatre modes : hypoténuse 45-45-90 à partir d'un côté, côté 45-45-90 à partir d'une hypoténuse, côté long 30-60-90 à partir d'un côté court, et hypoténuse 30-60-90 à partir d'un côté court.",
        },
        {
          "question": "Quel est le rapport des côtés d'un triangle 45-45-90 ?",
          "answer": "Le rapport des côtés d'un triangle 45-45-90 est [[1 : 1 : \\sqrt{2}]]. Les deux côtés sont égaux, et l'hypoténuse est le côté multiplié par √2, soit environ 1,414. Avec un côté de 5 cm, l'hypoténuse est [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Quel est le rapport des côtés d'un triangle 30-60-90 ?",
          "answer": "Le rapport des côtés d'un triangle 30-60-90 est [[1 : \\sqrt{3} : 2]]. Le côté court se trouve opposé à 30°, le côté long opposé à 60°, et l'hypoténuse opposée à 90°. Avec un côté court de 5 cm, le côté long est [[5\\sqrt{3} \\approx 8.660]] cm et l'hypoténuse est de 10 cm.",
        },
        {
          "question": "Pourquoi √2 apparaît-il dans un triangle 45-45-90 ?",
          "answer": "Le √2 vient du théorème de Pythagore appliqué à deux côtés égaux. Avec [[a = b]], le théorème donne [[a^2 + a^2 = c^2]], donc [[2a^2 = c^2]] et [[c = a\\sqrt{2}]]. La racine est le prix à payer pour transformer deux carrés égaux en un seul carré d'hypoténuse.",
        },
        {
          "question": "Pourquoi √3 apparaît-il dans un triangle 30-60-90 ?",
          "answer": "Le √3 vient de la division d'un triangle équilatéral en deux moitiés. Une hauteur divise un triangle équilatéral de côté [[2a]] en deux triangles 30-60-90, et le théorème de Pythagore sur une moitié donne [[b^2 = 3a^2]], donc le côté long est [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Comment trouver l'hypoténuse d'un triangle 45-45-90 ?",
          "answer": "Multipliez l'un ou l'autre côté égal par √2. La formule est [[c = a\\sqrt{2}]]. Par exemple, un côté de 7 cm donne une hypoténuse de [[7\\sqrt{2} \\approx 9.899]] cm. Sélectionnez le mode d'hypoténuse 45-45-90, saisissez le côté, puis cliquez sur Calculer.",
        },
        {
          "question": "Comment trouver le côté long d'un triangle 30-60-90 ?",
          "answer": "Multipliez le côté court par √3. La formule est [[b = a\\sqrt{3}]]. Par exemple, un côté court de 6 cm donne un côté long de [[6\\sqrt{3} \\approx 10.392]] cm. Assurez-vous de saisir le côté court, le côté opposé à l'angle de 30°, et non l'hypoténuse.",
        },
        {
          "question": "Peut-on calculer le côté manquant à partir de l'hypoténuse ?",
          "answer": "Oui, pour un triangle 45-45-90. Divisez l'hypoténuse par √2, en utilisant [[a = \\frac{c}{\\sqrt{2}}]] ou la forme rationalisée [[a = \\frac{c\\sqrt{2}}{2}]]. Une hypoténuse de 10 cm donne un côté de [[5\\sqrt{2} \\approx 7.071]] cm, et les deux côtés partagent cette longueur.",
        },
        {
          "question": "Tous les triangles rectangles spéciaux sont-ils semblables au sein de leur propre type ?",
          "answer": "Oui. Chaque triangle 45-45-90 a les mêmes angles et le même rapport 1:1:√2, donc deux triangles quelconques de ce type sont semblables. Chaque triangle 30-60-90 partage également le rapport 1:√3:2. Un triangle 45-45-90 n'est jamais semblable à un triangle 30-60-90, parce que leurs angles diffèrent.",
        },
        {
          "question": "Quelle est la différence entre les deux types de triangles spéciaux ?",
          "answer": "Un triangle 45-45-90 a deux côtés égaux et le rapport 1:1:√2, tandis qu'un triangle 30-60-90 a trois côtés différents et le rapport 1:√3:2. Le premier vient d'une diagonale de carré, le second d'une hauteur de triangle équilatéral, et leurs formules ne peuvent pas être interchangées.",
        },
        {
          "question": "Comment puis-je vérifier les longueurs de côtés calculées ?",
          "answer": "Vérifiez le rapport des côtés, le théorème de Pythagore et la somme des angles. Pour le 45-45-90, confirmez [[a = b]] et [[a^2 + b^2 = c^2]]. Pour le 30-60-90, confirmez [[b = a\\sqrt{3}]], [[c = 2a]] et [[a^2 + b^2 = c^2]]. Si les trois vérifications concordent, la réponse est solide.",
        },
      ],
    },
};
