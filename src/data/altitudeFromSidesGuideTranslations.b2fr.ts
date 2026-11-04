// altitudeFromSidesGuideTranslations.bfr.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B2_FR = {
  "fr": {
      "tocHeading": "Navigation des sections",
      "tocItems": {
        "sec-intro": "Calculateur de hauteur d'un triangle rectangle à partir des côtés",
        "sec-calculate": "Calculer la hauteur d'un triangle rectangle à partir des longueurs des côtés",
        "sec-altitude": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
        "sec-sides": "Comprendre les côtés d'un triangle rectangle",
        "sec-formula": "Formule de la hauteur d'un triangle rectangle à partir des côtés",
        "sec-use": "Comment utiliser le calculateur de hauteur d'un triangle rectangle à partir des côtés",
        "sec-manual": "Calcul de la hauteur étape par étape sans calculateur",
        "sec-diagram": "Schéma de la hauteur d'un triangle rectangle expliqué",
        "sec-proof": "Pourquoi la formule de la hauteur fonctionne-t-elle ?",
        "sec-examples": "Exemples résolus de hauteur d'un triangle rectangle à partir des côtés",
        "sec-two-sides": "Comment trouver la hauteur quand seuls deux côtés sont connus",
        "sec-verify": "Comment vérifier votre calcul de hauteur",
        "sec-vs-projections": "Hauteur à partir des côtés ou hauteur à partir des projections",
        "sec-area-rel": "Relation entre la hauteur, l'aire et l'hypoténuse",
        "sec-properties": "Propriétés particulières de la hauteur relative à l'hypoténuse",
        "sec-mistakes": "Erreurs fréquentes lors du calcul de la hauteur d'un triangle rectangle",
        "sec-applications": "Applications pratiques des calculs de hauteur d'un triangle rectangle",
        "sec-practice": "Exercices d'entraînement avec réponses",
        "sec-related": "Découvrez les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquentes",
        "sec-conclusion": "Calculateurs de triangle rectangle associés",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de hauteur d'un triangle rectangle à partir des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "Saisissez les deux côtés de l'angle droit et l'hypoténuse pour trouver la hauteur en quelques secondes.",
            },
            {
              "kind": "p",
              "text": "Ce calculateur trouve la hauteur d'un triangle rectangle : la distance perpendiculaire entre le sommet de l'angle droit et l'hypoténuse. Saisissez les deux côtés de l'angle droit, [[a]] et [[b]], ainsi que l'hypoténuse [[c]], et il renvoie [[h]] grâce à [[h=\\frac{ab}{c}]]. La réponse est exprimée dans la même unité que vos entrées.",
            },
            {
              "kind": "p",
              "text": "Par exemple, un triangle dont les côtés de l'angle droit mesurent 3 cm et 4 cm et dont l'hypoténuse mesure 5 cm donne [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Notez que 2.4 cm est plus court que chaque côté de l'angle droit, ce qui est toujours vrai pour la hauteur relative à l'hypoténuse.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer la hauteur d'un triangle rectangle à partir des longueurs des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur prend trois mesures. Le côté a est le premier côté perpendiculaire, le côté b est le second côté perpendiculaire, et l'hypoténuse c est le côté le plus long, opposé à l'angle droit. Les trois doivent utiliser la même unité, donc convertissez les mètres en centimètres ou les pieds en pouces avant de saisir.",
            },
            {
              "kind": "p",
              "text": "Cliquez sur Calculer la hauteur h pour voir le résultat avec sa substitution, et utilisez Réinitialiser pour effacer les champs avant le problème suivant. Le calculateur répond avec la formule compacte :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Si vous ne connaissez que deux côtés, retrouvez d'abord le troisième avec le théorème de Pythagore, ou essayez le <a href=\"/right-triangle-altitude-calculator/\">calculateur de hauteur</a> général pour un autre point de départ.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Qu'est-ce que la hauteur d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Une hauteur est la distance perpendiculaire entre un sommet et le côté opposé. Sur cette page, elle descend toujours du sommet de l'angle droit droit vers l'hypoténuse, qu'elle rencontre à angle droit. L'hypoténuse sert de base car c'est le seul côté opposé à l'angle droit, et le segment atterrit à l'intérieur du triangle.",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a trois hauteurs, mais deux d'entre elles sont évidentes : le côté [[a]] est la hauteur relative à la base [[b]], et le côté [[b]] est la hauteur relative à la base [[a]], car les côtés de l'angle droit sont déjà perpendiculaires. La hauteur intéressante est la troisième, relative à l'hypoténuse, car c'est un segment intérieur vraiment nouveau et plus court que chaque côté de l'angle droit.",
            },
            {
              "kind": "p",
              "text": "Cette troisième hauteur est ce que ce calculateur trouve, et c'est ce que les manuels désignent généralement quand ils demandent la hauteur d'un triangle rectangle.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Comprendre les côtés d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Des étiquettes correctes font fonctionner la formule. Les côtés de l'angle droit [[a]] et [[b]] sont les deux côtés perpendiculaires qui se rencontrent à l'angle droit. L'hypoténuse [[c]] est le côté le plus long, opposé à l'angle droit. La hauteur [[h]] n'est pas un côté du tout, mais la descente perpendiculaire du sommet de l'angle droit vers l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Identifiez toujours l'hypoténuse en premier : c'est la plus longue de vos trois longueurs. Dans un triangle 3-4-5, 5 doit être [[c]], et une vérification rapide [[3^2+4^2=5^2]] confirme l'étiquetage. Étiqueter 5 comme un côté de l'angle droit ferait diviser par le mauvais côté et fausserait la réponse.",
            },
          ],
          "table": {
            "headers": [
              "Variable",
              "Définition",
              "Rôle dans le calcul",
            ],
            "rows": [
              [
                "a",
                "Premier côté perpendiculaire",
                "Multiplié par b au numérateur",
              ],
              [
                "b",
                "Second côté perpendiculaire",
                "Multiplié par a au numérateur",
              ],
              [
                "c",
                "Hypoténuse, côté le plus long",
                "Divise ab au dénominateur",
              ],
              [
                "h",
                "Hauteur relative à l'hypoténuse",
                "Le résultat de la formule",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formule de la hauteur d'un triangle rectangle à partir des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule est courte et facile à mémoriser :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Les côtés de l'angle droit sont multipliés car leur produit est lié à l'aire : l'aire vaut la moitié de [[ab]], donc [[ab]] vaut deux fois l'aire. Diviser par l'hypoténuse isole alors [[h]], puisque la même aire vaut aussi la moitié de [[ch]]. Le résultat est une longueur ordinaire, c'est pourquoi les trois entrées doivent partager une même unité.",
            },
            {
              "kind": "p",
              "text": "Essayez un triangle 6-8-10 : [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Géométriquement, 4.8 cm est le chemin le plus court du sommet de l'angle droit à l'hypoténuse. (La démonstration complète figure dans la section de démonstration ci-dessous.)",
            },
            {
              "kind": "p",
              "text": "Une bonne habitude consiste à vérifier les unités avant de substituer. Si [[a]] vaut 60 mm, [[b]] vaut 8 cm, et [[c]] vaut 100 mm, convertissez d'abord vers une seule unité : [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], ce qui est le même triangle 6-8-10 et donne le même [[4.8\\text{ cm}]]. La formule ne répare jamais les unités mélangées à votre place, donc cette seule vérification évite les erreurs les plus embarrassantes.",
            },
          ],
        },
        "sec-use": {
          "h2": "Comment utiliser le calculateur de hauteur d'un triangle rectangle à partir des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "Suivez ces huit étapes pour un résultat net à chaque fois.",
            },
            {
              "kind": "steps",
              "steps": [
                "Repérez l'angle droit, le coin où deux côtés se rencontrent à angle droit, souvent marqué d'un petit carré. Sans angle droit confirmé, cette formule ne s'applique pas.",
                "Repérez les deux côtés perpendiculaires qui forment ce coin ; appelez-les a et b dans l'ordre que vous voulez, car la formule les traite symétriquement.",
                "Identifiez l'hypoténuse : le côté opposé à l'angle droit et le plus long des trois. Vérifiez qu'il est plus long que les deux côtés de l'angle droit.",
                "Convertissez les trois mesures vers la même unité avant de saisir quoi que ce soit. Les unités mélangées sont l'erreur de saisie la plus fréquente.",
                "Saisissez a, b et c dans leurs champs respectifs.",
                "Cliquez sur le bouton Calculer la hauteur h pour multiplier les côtés, diviser par l'hypoténuse et afficher la hauteur.",
                "Lisez le résultat et vérifiez que les nombres substitués correspondent à ce que vous vouliez saisir.",
                "Utilisez Réinitialiser pour effacer les entrées avant le problème suivant, afin que les anciennes valeurs ne puissent pas fausser la nouvelle réponse.",
              ],
            },
            {
              "kind": "p",
              "text": "Avant de faire confiance à une réponse, effectuez une vérification pythagoricienne : [[a^2+b^2]] devrait être égal à [[c^2]]. Un petit arrondi de mesure est acceptable, mais un écart important signifie que les côtés ne forment pas un triangle rectangle.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Calcul de la hauteur étape par étape sans calculateur",
          "blocks": [
            {
              "kind": "p",
              "text": "Vous pouvez trouver la hauteur à la main en cinq étapes courtes. Prenez [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]], et vérifiez d'abord que le triangle est valide : [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Étape 1, écrivez la formule : [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Étape 2, substituez : [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Étape 3, multipliez les côtés de l'angle droit : [[9 \\times 12=108]], donc [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Étape 4, divisez : [[108 \\div 15=7.2]], donc [[h=7.2\\text{ cm}]]. Étape 5, vérifiez avec l'aire. À partir des côtés de l'angle droit, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]] ; à partir de l'hypoténuse et de la hauteur, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Les deux aires concordent car elles décrivent le même triangle. Les côtés de l'angle droit donnent un couple base-hauteur et l'hypoténuse en donne un autre, mais la région enfermée est identique. Des aires concordantes confirment la hauteur.",
            },
            {
              "kind": "p",
              "text": "Pourquoi la vérification par l'aire fonctionne-t-elle si bien ? Parce que la formule de la hauteur elle-même vient de l'égalisation des deux expressions d'aire, vérifier par l'aire boucle la boucle : toute erreur de calcul dans la multiplication ou la division ferait diverger les deux aires. Quand elles concordent, l'utilisation de la formule et le calcul sont confirmés d'un seul coup.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Schéma de la hauteur d'un triangle rectangle expliqué",
          "blocks": [
            {
              "kind": "p",
              "text": "Étiquetez le triangle ABC avec l'angle droit en C. Alors AC est le côté [[a]], BC est le côté [[b]], et AB est l'hypoténuse [[c]]. Le point D se trouve sur AB, et le segment CD rencontre AB à angle droit ; CD est la hauteur [[h]]. De petits carrés en C et en D indiquent les deux angles droits.",
            },
            {
              "kind": "p",
              "text": "La hauteur CD divise le grand triangle en deux triangles rectangles plus petits, ACD et BCD, chacun avec son angle droit en D. Les deux sont semblables au triangle d'origine ABC et semblables entre eux, un fait sur lequel les sections de démonstration et de projections s'appuient.",
            },
            {
              "kind": "p",
              "text": "Quand vous dessinez votre propre version, commencez par l'angle droit en C, tracez les côtés de l'angle droit, puis reliez leurs extrémités libres pour l'hypoténuse. Abaissez la hauteur en dernier, en vérifiant qu'elle rencontre l'hypoténuse à angle droit. Étiqueter dans l'ordre a, b, c, h garde chaque calcul ultérieur bien organisé.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangle ABC avec angle droit en C, hauteur CD tracée vers l'hypoténuse AB ; AC égale a, BC égale b, AB égale c, CD égale h",
            "caption": "La hauteur CD descend de l'angle droit C vers l'hypoténuse AB ; h égale (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Pourquoi la formule de la hauteur fonctionne-t-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule découle de l'aire d'un triangle. L'aire vaut la moitié de la base fois la hauteur, et un triangle rectangle offre deux couples base-hauteur pratiques. Avec les côtés de l'angle droit comme base et hauteur :",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Avec l'hypoténuse comme base et la hauteur comme hauteur :",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Les deux expressions décrivent le même triangle, égalisez-les donc :",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multipliez par 2, puis divisez par [[c]] :",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Un triangle peut être mesuré avec différents couples base-hauteur pendant que son aire reste fixe, donc égaliser les deux expressions est légitime et l'algèbre isole [[h]]. Le schéma montre le même triangle deux fois, une fois avec la base [[a]] et la hauteur [[b]], une fois avec la base [[c]] et la hauteur [[h]].",
            },
            {
              "kind": "p",
              "text": "La démonstration explique aussi pourquoi la hauteur est toujours plus courte que les côtés de l'angle droit. Puisque [[c]] est le côté le plus long, diviser [[ab]] par la plus grande des trois longueurs doit produire une valeur plus petite que chaque côté de l'angle droit pris seul. Chaque formule ultérieure de cette page, des projections aux triangles semblables, est une variation sur cette seule idée d'aire.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Le même triangle rectangle dessiné deux fois : d'abord avec la base a et la hauteur b, puis avec la base c et la hauteur h",
            "caption": "Même triangle, deux couples base-hauteur : l'aire vaut ab/2 et ch/2, donc h vaut ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Exemples résolus de hauteur d'un triangle rectangle à partir des côtés",
          "blocks": [
            {
              "kind": "p",
              "text": "Les sept exemples ci-dessous vont des triplets classiques en nombres entiers aux décimales, aux côtés égaux et aux unités mélangées. Chacun suit le même rythme : énoncez les données, substituez dans la formule, simplifiez et terminez avec l'unité. Les lire dans l'ordre développe l'habitude de vérifier les unités et la plausibilité avant de faire confiance à une réponse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Triangle classique 3-4-5",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est [[2.4\\text{ cm}]]. Cet exemple de référence mérite d'être mémorisé, car 3-4-5 est le triplet pythagoricien le plus courant et 2.4 est un décimal net.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Triangle 5-12-13",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur exacte est [[60/13]] mètres, environ 4.615 m. Gardez la fraction quand la précision compte, car arrondir tôt propage l'erreur dans la suite du travail.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Triangle 8-15-17",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est d'environ [[7.059\\text{ cm}]]. Échanger les côtés en 15 et 8 donne le produit identique, ce qui confirme que la formule traite les côtés symétriquement.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Côtés égaux et triangle 45-45-90",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Des côtés égaux forment un triangle 45-45-90, et la hauteur le divise en deux moitiés congruentes. La forme exacte [[5\\sqrt{2}]] cm bat le décimal dans le travail théorique.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est [[1.2\\text{ m}]]. Les décimales ne demandent aucun traitement spécial : multipliez et divisez comme d'habitude, en gardant la même unité sur la réponse.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Unités mélangées à harmoniser d'abord",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], convertissez d'abord en centimètres : [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertir d'abord donne un net [[24\\text{ cm}]]. Des mètres non convertis auraient gonflé la réponse d'un facteur 100.",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Triangle plus grand 20-21-29",
            },
            {
              "kind": "p",
              "text": "Étant donné [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]] :",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "La hauteur est d'environ [[14.483\\text{ ft}]], confortablement sous le côté le plus court de 20 ft, comme l'est toujours la hauteur relative à l'hypoténuse.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Triangle rectangle avec des côtés de l'angle droit de 3 et 4, une hypoténuse de 5, et une hauteur de 2.4 tracée vers l'hypoténuse",
            "caption": "Un triangle 3-4-5 dessiné à l'échelle : la hauteur h égale (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-two-sides": {
          "h2": "Comment trouver la hauteur quand seuls deux côtés sont connus",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur en ligne demande les trois côtés, mais deux côtés suffisent à retrouver le troisième avec le théorème de Pythagore. Il y a deux cas, selon les côtés que vous connaissez, et les deux se terminent avec la formule familière de la hauteur.",
            },
            {
              "kind": "p",
              "text": "La logique est la même dans les deux cas : le théorème de Pythagore restaure le côté manquant, et la formule de la hauteur fait le reste. Le cas 1 additionne les côtés sous une racine carrée pour trouver l'hypoténuse, tandis que le cas 2 soustrait pour retrouver un côté. Notez que le cas 2 ne fonctionne que quand le côté connu est vraiment l'hypoténuse ; si [[a>c]], la racine carrée devient négative et un tel triangle n'existe pas.",
            },
            {
              "kind": "h3",
              "text": "Cas 1 : Les deux côtés connus",
            },
            {
              "kind": "p",
              "text": "Prenez [[a=7]] et [[b=24]]. Trouvez d'abord l'hypoténuse : [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Puis la hauteur suit : [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Cas 2 : Un côté et l'hypoténuse connus",
            },
            {
              "kind": "p",
              "text": "Prenez [[a=8]] et [[c=10]]. Retrouvez le côté manquant avec le théorème de Pythagore réarrangé : [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Puis la hauteur est : [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Considérez-les comme des alternatives pédagogiques, car le calculateur attend trois mesures. Un <a href=\"/right-triangle-side-calculator/\">calculateur de côtés</a> dédié peut retrouver la longueur manquante avant que vous continuiez ici.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Comment vérifier votre calcul de hauteur",
          "blocks": [
            {
              "kind": "p",
              "text": "Trois vérifications indépendantes confirment une réponse de hauteur. Les trois ci-dessous utilisent le triangle 3-4-5, où la hauteur vaut 2.4. Utilisez-en au moins une chaque fois qu'une réponse alimentera la suite du travail, car une hauteur fausse corrompt silencieusement tout ce qui est construit dessus.",
            },
            {
              "kind": "h3",
              "text": "Méthode 1 : Comparaison des aires",
            },
            {
              "kind": "p",
              "text": "Calculez l'aire des deux façons et exigez la concordance. À partir des côtés de l'angle droit : [[[A=\\frac{3 \\times 4}{2}=6]]] À partir de l'hypoténuse et de la hauteur : [[[A=\\frac{5 \\times 2.4}{2}=6]]] Des aires concordantes confirment la hauteur elle-même.",
            },
            {
              "kind": "h3",
              "text": "Méthode 2 : Projections sur l'hypoténuse",
            },
            {
              "kind": "p",
              "text": "Divisez l'hypoténuse en projections des côtés [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] et [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. La hauteur est leur moyenne géométrique : [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Retrouver 2.4 à partir d'une formule différente est une preuve solide.",
            },
            {
              "kind": "h3",
              "text": "Méthode 3 : Vérification pythagoricienne",
            },
            {
              "kind": "p",
              "text": "Vérifiez que les côtés forment un triangle rectangle : [[[3^2+4^2=9+16=25=5^2]]] Cela valide les longueurs des côtés, pas la hauteur. Effectuez-la d'abord quand un problème vous donne les côtés, puis utilisez la vérification par l'aire ou les projections pour valider la hauteur.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Hauteur à partir des côtés ou hauteur à partir des projections",
          "blocks": [
            {
              "kind": "p",
              "text": "La hauteur peut être trouvée de deux façons. La méthode par les côtés de cette page est [[h=\\frac{ab}{c}]], en partant des trois longueurs de côtés. La méthode par les projections est [[h=\\sqrt{pq}]], en partant des deux segments en lesquels la hauteur divise l'hypoténuse. Les deux décrivent le même segment et concordent toujours pour le même triangle ; le choix dépend des mesures dont vous disposez. Pour la seconde voie, consultez la page du <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculateur de hauteur à partir des projections</a>.",
            },
          ],
          "table": {
            "headers": [
              "Méthode",
              "Entrées requises",
              "Formule",
              "Cas d'utilisation idéal",
            ],
            "rows": [
              [
                "Hauteur à partir des côtés",
                "Côtés a et b, hypoténuse c",
                "h = ab / c",
                "Les longueurs des côtés sont connues ; aucune racine carrée nécessaire",
              ],
              [
                "Hauteur à partir des projections",
                "Segments d'hypoténuse p et q",
                "h = racine carrée de (p fois q)",
                "Le pied de la hauteur divise l'hypoténuse en parties connues",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Triangle rectangle avec la hauteur h montrant les projections p et q et les deux triangles semblables plus petits",
            "caption": "La hauteur divise l'hypoténuse en p et q ; la formule par les côtés et la formule par les projections donnent le même h.",
          },
        },
        "sec-area-rel": {
          "h2": "Relation entre la hauteur, l'aire et l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "La hauteur, l'aire et l'hypoténuse se relient par deux expressions d'une même aire. À partir des côtés de l'angle droit : [[[A=\\frac{ab}{2}]]] À partir de l'hypoténuse et de la hauteur : [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Résoudre la seconde expression pour [[h]] donne un réarrangement pratique : [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cela offre une seconde voie quand l'aire est connue directement. Pour un triangle d'aire [[54\\text{ cm}^2]] et d'hypoténuse [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], la même réponse que la formule par les côtés a donnée pour le triangle 9-12-15. Si vous avez besoin de l'aire d'abord, un <a href=\"/right-triangle-area-calculator/\">calculateur d'aire</a> traite cette étape, et le <a href=\"/right-triangle-area-from-altitude-calculator/\">calculateur d'aire à partir de la hauteur</a> inverse le calcul une fois que [[h]] est connue.",
            },
            {
              "kind": "p",
              "text": "Cette voie brille quand un problème énonce l'aire directement, comme le font beaucoup de questions de manuels, ou quand l'aire a été calculée dans une partie précédente. Au lieu de chercher les côtés individuels, vous divisez deux fois l'aire par l'hypoténuse et terminez en une ligne. C'est la même hauteur que donne la formule par les côtés, atteinte depuis un autre point de départ.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés particulières de la hauteur relative à l'hypoténuse",
          "blocks": [
            {
              "kind": "p",
              "text": "La hauteur relative à l'hypoténuse est toujours plus courte que chaque côté de l'angle droit et plus courte que l'hypoténuse elle-même, puisque [[h=ab/c]] tombe sous [[a]] dès que [[b<c]]. Des côtés égaux donnent un triangle 45-45-90 symétrique dans lequel la hauteur coupe l'hypoténuse en deux. Pour une hypoténuse fixée, la hauteur est la plus grande quand les côtés sont égaux : avec une hypoténuse de 10, le triangle 45-45-90 donne [[h=5]] tandis que le triangle 6-8-10 ne donne que 4.8.",
            },
            {
              "kind": "p",
              "text": "Aucune répartition de la même hypoténuse ne bat ce maximum, qui est l'inégalité [[h \\le \\frac{c}{2}]], avec égalité seulement dans le cas 45-45-90. La mise à l'échelle se comporte aussi simplement : doubler chaque côté double la hauteur, donc 3-4-5 à 2.4 devient 6-8-10 à 4.8. Enfin, la hauteur divise le triangle en deux triangles plus petits semblables à l'original, c'est pourquoi les relations de projections et d'aire concordent toutes.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Deux triangles rectangles partageant une hypoténuse de 10 : un triangle 45-45-90 avec une hauteur de 5 et un triangle 6-8-10 avec une hauteur de 4.8",
            "caption": "Même hypoténuse 10 : des côtés égaux donnent la plus grande hauteur, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes lors du calcul de la hauteur d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Évitez ces neuf erreurs et presque chaque calcul de hauteur se déroule sans accroc.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondre l'hypoténuse avec un côté de l'angle droit. Correction : choisissez d'abord le côté le plus long comme c ; dans un triangle 3-4-5, 5 doit être c.",
                "Multiplier les trois côtés. Calculer abc n'a aucun sens géométrique ici. Correction : multipliez seulement les côtés de l'angle droit, puis divisez par l'hypoténuse.",
                "Oublier de diviser par c. S'arrêter à ab laisse deux fois l'aire, pas une longueur. Correction : terminez toujours par la division.",
                "Mélanger les unités. Saisir a en centimètres et c en mètres corrompt la division silencieusement. Correction : convertissez d'abord tout vers une seule unité.",
                "Utiliser des côtés qui ne forment pas un triangle rectangle. La formule suppose un angle droit, donc 2, 3, 4 donne un non-sens. Correction : vérifiez d'abord que a^2 + b^2 = c^2.",
                "Confondre la hauteur avec l'un des côtés de l'angle droit. Les manuels qui demandent la hauteur désignent généralement celle relative à l'hypoténuse. Correction : confirmez quelle hauteur la question demande.",
                "Arrondir les valeurs intermédiaires trop tôt. Arrondir 60/13 à 4.6 en cours de calcul injecte de l'erreur. Correction : n'arrondissez que la réponse finale.",
                "Utiliser incorrectement une formule d'aire. Écrire Aire = c fois h sans la moitié double la réponse. Correction : utilisez Aire = ch/2 quand vous résolvez pour h.",
                "Confondre la hauteur relative à l'hypoténuse avec la hauteur relative à un côté de l'angle droit. Ce sont des segments différents. Correction : la hauteur relative à l'hypoténuse est le segment intérieur le plus court h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques des calculs de hauteur d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Les élèves rencontrent cette hauteur dans les devoirs de géométrie sur l'aire, la similitude et la moyenne géométrique, tandis que les enseignants l'utilisent pour relier le théorème de Pythagore aux formules d'aire en une seule figure, car un seul schéma porte à la fois [[ab/2]] et [[ch/2]]. Les dessinateurs et designers l'utilisent quand un panneau ou un support triangulaire doit être dimensionné à partir de sa hauteur, et les plans de contreventement triangulaire ont parfois besoin de la plus courte distance transversale entre un nœud et un élément.",
            },
            {
              "kind": "p",
              "text": "Les géomètres qui travaillent avec des lignes de visée en triangle rectangle utilisent la même relation pour vérifier les distances calculées par rapport aux distances mesurées. Considérez-les comme des modèles mathématiques avec des mesures idéalisées : un vrai travail d'ingénierie ou de construction exige des méthodes de mesure adaptées, des hypothèses de conception énoncées et des normes professionnelles avant qu'un résultat de formule soit fiable sur le chantier.",
            },
            {
              "kind": "p",
              "text": "En classe, la hauteur sert aussi de sujet passerelle : elle relie le théorème de Pythagore, les formules d'aire et les triangles semblables dans une seule figure. Un seul schéma bien dessiné peut porter toute une leçon, c'est pourquoi cette construction apparaît si souvent dans les manuels.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices d'entraînement avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez chaque problème par vous-même, puis vérifiez les réponses détaillées ci-dessous.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombres entiers de base",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit de 6 cm et 8 cm et une hypoténuse de 10 cm. Trouvez la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Triplet pythagoricien",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit de 12 m et 16 m et une hypoténuse de 20 m. Trouvez la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit de 4.5 in et 6 in et une hypoténuse de 7.5 in. Trouvez la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Côtés égaux",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a deux côtés égaux de 14 ft chacun. Trouvez l'hypoténuse puis la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de 2.4 m, 70 cm et 2.5 m. Convertissez d'abord les unités, puis trouvez la hauteur relative à l'hypoténuse.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices d'entraînement",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Le motif 3-4-5 mis à l'échelle donne un décimal net.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] confirme le triplet, puis [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Les décimales se divisent proprement quand le triplet est cohérent.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], puis [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], exactement la moitié de l'hypoténuse comme attendu pour un 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. En centimètres : [[a=240]], [[b=70]], [[c=250]], et [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] se vérifie. Puis [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculateurs de triangle rectangle associés",
          "blocks": [
            {
              "kind": "p",
              "text": "Avec la formule de la hauteur en main, choisissez l'outil suivant selon ce que vous connaissez. Si vous connaissez les segments de l'hypoténuse au lieu des côtés, dirigez-vous vers le calculateur de projections. Si vous connaissez la hauteur et voulez l'aire, l'outil <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">aire à partir de l'hypoténuse et de la hauteur</a> inverse le calcul de la section sur l'aire. Les cinq calculateurs associés ci-dessous couvrent chaque calcul voisin. Commencez par l'outil qui correspond aux mesures dont vous disposez déjà, et laissez chaque résultat vérifier le suivant.",
            },
          ],
        },
      },
      "faqHeading": "Questions fréquentes",
      "faqs": [
        {
          "question": "Quelle est la formule de la hauteur à partir de trois côtés ?",
          "answer": "La formule est [[h=\\frac{ab}{c}]], où [[a]] et [[b]] sont les deux côtés perpendiculaires de l'angle droit et [[c]] est l'hypoténuse. Multipliez les côtés de l'angle droit, puis divisez par l'hypoténuse. Le résultat est une longueur dans la même unité que les côtés saisis.",
        },
        {
          "question": "Comment trouver la hauteur d'un triangle rectangle ?",
          "answer": "Identifiez l'angle droit, étiquetez les deux côtés de l'angle droit [[a]] et [[b]] ainsi que l'hypoténuse [[c]], en vous assurant que toutes les unités correspondent. Puis calculez [[h=\\frac{ab}{c}]]. Pour un triangle 3-4-5 cela donne [[h=\\frac{12}{5}=2.4]], un segment plus court que chaque côté de l'angle droit.",
        },
        {
          "question": "Pourquoi l'hypoténuse est-elle au dénominateur ?",
          "answer": "Cela vient de la démonstration par l'aire. L'aire vaut [[ab/2]] en utilisant les côtés de l'angle droit et [[ch/2]] en utilisant l'hypoténuse comme base. Égaliser les deux donne [[ab=ch]], et résoudre pour [[h]] met [[c]] au dénominateur. Plus l'hypoténuse est longue, plus la hauteur est courte pour une aire donnée.",
        },
        {
          "question": "Puis-je calculer la hauteur avec seulement deux côtés ?",
          "answer": "Oui, avec une étape supplémentaire. Si vous connaissez les deux côtés de l'angle droit, trouvez l'hypoténuse avec [[c=\\sqrt{a^2+b^2}]] d'abord. Si vous connaissez un côté de l'angle droit et l'hypoténuse, trouvez l'autre côté avec [[b=\\sqrt{c^2-a^2}]]. Puis utilisez [[h=\\frac{ab}{c}]] comme d'habitude.",
        },
        {
          "question": "La hauteur d'un triangle rectangle est-elle toujours celle relative à l'hypoténuse ?",
          "answer": "Cela dépend de la hauteur dont on parle. La hauteur désigne généralement la distance perpendiculaire à une base choisie, donc la hauteur relative à l'hypoténuse est la hauteur quand l'hypoténuse est la base. Si un côté de l'angle droit est choisi comme base, la hauteur est l'autre côté, un segment entièrement différent.",
        },
        {
          "question": "La hauteur est-elle toujours plus courte que les côtés de l'angle droit ?",
          "answer": "Oui, la hauteur relative à l'hypoténuse est toujours plus courte que chaque côté de l'angle droit du même triangle. C'est le segment le plus court entre le sommet de l'angle droit et l'hypoténuse, tandis que chaque côté de l'angle droit est un chemin plus long vers le même côté. Elle est aussi plus courte que l'hypoténuse elle-même.",
        },
        {
          "question": "Puis-je utiliser cette formule pour n'importe quel triangle ?",
          "answer": "Non, seulement pour les triangles rectangles. La dérivation dépend de la perpendicularité des côtés de l'angle droit, ce qui donne l'aire comme [[ab/2]]. Pour un triangle acutangle ou obtusangle, trouvez plutôt la hauteur avec la formule d'aire générale ou la trigonométrie. Confirmez toujours l'angle droit d'abord.",
        },
        {
          "question": "Que faire si mes longueurs de côtés ne vérifient pas le théorème de Pythagore ?",
          "answer": "Alors elles ne forment pas un triangle rectangle et la formule ne s'applique pas. Remesurez les côtés ou revérifiez l'étiquetage, car le côté le plus long doit être l'hypoténuse. De petites différences d'arrondi sont acceptables, mais un écart important signifie que le triangle n'est pas rectangle.",
        },
        {
          "question": "Comment trouver la hauteur d'un triangle 3-4-5 ?",
          "answer": "Multipliez les côtés de l'angle droit et divisez par l'hypoténuse : [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (ou quelle que soit l'unité de vos côtés). Le triangle 3-4-5 est l'exemple résolu classique car ses trois côtés sont des nombres entiers.",
        },
        {
          "question": "Quelle est la hauteur d'un triangle 5-12-13 ?",
          "answer": "C'est [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], dans l'unité des côtés. Gardez la fraction exacte [[60/13]] quand vous avez besoin d'une précision totale, et arrondissez à 4.615 seulement pour la réponse finale rapportée.",
        },
        {
          "question": "Quel est le lien entre la hauteur et l'aire ?",
          "answer": "L'aire peut s'écrire de deux façons : [[A=\\frac{ab}{2}]] et [[A=\\frac{ch}{2}]]. Réarranger la seconde donne [[h=\\frac{2A}{c}]], donc connaître l'aire et l'hypoténuse est une autre voie vers la même hauteur. Les deux formes décrivent le triangle identique.",
        },
        {
          "question": "Quelle est la différence entre la hauteur à partir des côtés et la hauteur à partir des projections ?",
          "answer": "La hauteur à partir des côtés utilise [[h=\\frac{ab}{c}]] avec les trois longueurs de côtés. La hauteur à partir des projections utilise [[h=\\sqrt{pq}]] avec les deux segments de l'hypoténuse. Les deux trouvent le même segment ; le choix dépend des mesures dont vous disposez.",
        },
      ],
      "relatedHeading": "Découvrez les calculateurs de triangle rectangle associés",
      "relatedIntro": "Choisissez le calculateur qui correspond aux mesures dont vous disposez déjà.",
      "relatedItems": [
        "Calculateur de hauteur de triangle rectangle",
        "Calculateur de hauteur de triangle rectangle à partir des projections",
        "Calculateur de projections de triangle rectangle",
        "Calculateur d'aire de triangle rectangle",
        "Calculateur d'aire de triangle rectangle à partir de la hauteur",
      ],
    },
};
