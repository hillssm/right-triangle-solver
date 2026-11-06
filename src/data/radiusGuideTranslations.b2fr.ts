// radiusGuideTranslations.bfr.ts: Right Triangle Radius
// Guide (Page 37 of 45) translation.
export const RADIUS_B2_FR = {
  "fr": {
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "answer": "La formule est [[r = \\frac{a + b - c}{2}]], où a et b sont les deux cathètes et c est l'hypoténuse. Additionnez les cathètes, soustrayez l'hypoténuse et divisez par 2. Pour un triangle 6-8-10, [[r = \\frac{6 + 8 - 10}{2} = 2]] cm.",
          "question": "Quelle est la formule du rayon inscrit d'un triangle rectangle ?",
        },
        {
          "answer": "La formule est [[R = \\frac{c}{2}]], où c est l'hypoténuse complète. L'hypoténuse est le diamètre du cercle circonscrit, donc sa moitié est le rayon. Pour une hypoténuse de 10 cm, [[R = \\frac{10}{2} = 5]] cm.",
          "question": "Quelle est la formule du rayon circonscrit d'un triangle rectangle ?",
        },
        {
          "answer": "Le rayon inscrit est le rayon du cercle inscrit, le cercle à l'intérieur du triangle qui touche les trois côtés. Le rayon circonscrit est le rayon du cercle circonscrit, le cercle autour du triangle qui passe par les trois sommets. Dans un triangle 6-8-10, [[r = 2]] cm et [[R = 5]] cm.",
          "question": "Quelle est la différence entre le rayon inscrit et le rayon circonscrit ?",
        },
        {
          "answer": "Il faut les trois longueurs des côtés : la cathète a, la cathète b et l'hypoténuse c. La formule [[r = \\frac{a + b - c}{2}]] utilise chaque côté une fois, donc aucun côté ne peut être omis. Les trois longueurs doivent aussi former un triangle rectangle valable.",
          "question": "Quelles mesures faut-il pour calculer le rayon inscrit ?",
        },
        {
          "answer": "Dans un triangle rectangle, l'hypoténuse est le diamètre du cercle circonscrit, donc le rayon circonscrit est simplement la moitié de l'hypoténuse, [[R = \\frac{c}{2}]]. Les cathètes n'entrent pas du tout dans le calcul, c'est pourquoi une seule mesure suffit.",
          "question": "Pourquoi le rayon circonscrit ne demande-t-il que l'hypoténuse ?",
        },
        {
          "answer": "Le centre du cercle inscrit se trouve à l'intérieur du triangle, au point où les trois bissectrices se rencontrent. C'est le centre du cercle inscrit et il se trouve à la même distance, le rayon inscrit r, de chacun des trois côtés.",
          "question": "Où se trouve le centre du cercle inscrit ?",
        },
        {
          "answer": "Dans un triangle rectangle, le centre du cercle circonscrit se trouve au milieu de l'hypoténuse. Ce point est à la même distance, le rayon circonscrit R, des trois sommets, c'est pourquoi le cercle circonscrit passe par chacun d'eux.",
          "question": "Où se trouve le centre du cercle circonscrit ?",
        },
        {
          "answer": "Non. Pour un triangle rectangle non dégénéré valable, le rayon circonscrit est toujours plus grand que le rayon inscrit. Dans le triangle 6-8-10, [[R = 5]] cm est plus du double de [[r = 2]] cm. Si vos nombres disent le contraire, vérifiez vos données et vos étiquettes.",
          "question": "Le rayon inscrit peut-il être plus grand que le rayon circonscrit ?",
        },
        {
          "answer": "Oui, mais seulement pour les triangles rectangles. L'angle dans un demi-cercle est un angle droit, donc le sommet de l'angle droit se trouve sur le cercle dont l'hypoténuse est le diamètre. C'est le théorème de Thalès, et il ne vaut pas pour les triangles qui ne sont pas rectangles.",
          "question": "L'hypoténuse est-elle le diamètre du cercle circonscrit ?",
        },
        {
          "answer": "Recalculez [[r = \\frac{a + b - c}{2}]] à partir des longueurs des côtés d'origine, puis vérifiez la même réponse avec [[r = \\frac{Area}{s}]], en utilisant [[Area = \\frac{ab}{2}]] et [[s = \\frac{a + b + c}{2}]]. Les deux méthodes doivent donner la même valeur.",
          "question": "Comment puis-je vérifier mon résultat de rayon inscrit ?",
        },
        {
          "answer": "Oui. Trouvez d'abord l'aire avec [[Area = \\frac{ab}{2}]] et le demi-périmètre avec [[s = \\frac{a + b + c}{2}]], puis divisez : [[r = \\frac{Area}{s}]]. Pour le triangle 6-8-10, [[r = \\frac{24}{12} = 2]] cm.",
          "question": "Puis-je calculer le rayon inscrit avec l'aire et le demi-périmètre ?",
        },
        {
          "answer": "Elles mesurent des cercles différents. Le rayon inscrit vient d'un cercle serré à l'intérieur du triangle, il dépend donc de la façon dont les trois côtés se referment autour de lui. Le rayon circonscrit vient d'un cercle qui passe par les trois sommets, et pour un triangle rectangle, l'hypoténuse seule fixe ce cercle comme son diamètre.",
          "question": "Pourquoi la formule du rayon inscrit diffère-t-elle de celle du rayon circonscrit ?",
        },
      ],
      "relatedHeading": "Découvrir les calculatrices de triangles rectangles associées",
      "relatedIntro": "Chaque calculatrice ci-dessous traite une tâche précise sur le triangle rectangle, alors choisissez l'outil qui correspond aux mesures que vous connaissez déjà.",
      "relatedItems": [
        "Calculatrice de rayon inscrit d'un triangle rectangle",
        "Calculatrice de rayon circonscrit d'un triangle rectangle",
        "Calculatrice d'aire d'un triangle rectangle",
        "Calculatrice de côtés d'un triangle rectangle",
        "Calculatrice de périmètre et de demi-périmètre d'un triangle rectangle",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangle rectangle possède deux cercles importants qui lui sont associés : le cercle inscrit, qui se trouve à l'intérieur du triangle et touche les trois côtés, et le cercle circonscrit, qui se trouve autour du triangle et passe par les trois sommets. Cette calculatrice trouve le rayon de chaque cercle, avec un mode distinct pour chacun.",
            },
            {
              "kind": "p",
              "text": "Le rayon inscrit est [[r = \\frac{a + b - c}{2}]], où a et b sont les cathètes et c est l'hypoténuse. Le rayon circonscrit est [[R = \\frac{c}{2}]], qui ne demande que l'hypoténuse. Les formules diffèrent parce qu'elles décrivent des cercles différents.",
            },
            {
              "kind": "p",
              "text": "Prenez un triangle rectangle 6-8-10 avec [[a = 6]] cm, [[b = 8]] cm et [[c = 10]] cm. Le rayon inscrit est [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, et le rayon circonscrit est [[R = \\frac{10}{2} = 5]] cm. Le cercle inscrit est un petit cercle de rayon 2 cm niché à l'intérieur du triangle, tandis que le cercle circonscrit est un cercle beaucoup plus grand de rayon 5 cm qui passe par les sommets.",
            },
            {
              "kind": "p",
              "text": "La calculatrice garde les deux modes séparés parce qu'ils demandent des mesures différentes : le mode rayon inscrit demande les trois longueurs des côtés, tandis que le mode rayon circonscrit ne demande que l'hypoténuse. Choisissez le mode qui correspond aux mesures dont vous disposez.",
            },
          ],
          "h2": "Calculatrice de rayon d'un triangle rectangle",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cette page propose deux modes de calculatrice. Le mode 1 trouve le rayon inscrit, le rayon du cercle à l'intérieur du triangle. Le mode 2 trouve le rayon circonscrit, le rayon du cercle autour du triangle.",
            },
            {
              "kind": "h3",
              "text": "Mode 1 : Calculatrice de rayon inscrit",
            },
            {
              "kind": "p",
              "text": "Le mode rayon inscrit demande trois données : la cathète a, la cathète b et l'hypoténuse c. Il utilise [[r = \\frac{a + b - c}{2}]]. Choisissez-le lorsque vous connaissez les trois longueurs des côtés et que vous voulez le rayon du cercle inscrit.",
            },
            {
              "kind": "h3",
              "text": "Mode 2 : Calculatrice de rayon circonscrit",
            },
            {
              "kind": "p",
              "text": "Le mode rayon circonscrit ne demande qu'une seule donnée : l'hypoténuse c. Il utilise [[R = \\frac{c}{2}]]. Choisissez-le lorsque vous connaissez l'hypoténuse et que vous voulez le rayon du cercle circonscrit.",
            },
            {
              "kind": "p",
              "text": "Avant de calculer, vérifiez que toutes les mesures utilisent la même unité, convertissez donc d'abord si ce n'est pas le cas. Puis sélectionnez le mode, saisissez les mesures, cliquez sur le bouton Calculer de ce mode et lisez le résultat dans l'unité saisie. Utilisez Réinitialiser pour effacer les champs avant un nouveau problème.",
            },
            {
              "kind": "p",
              "text": "La page ne calcule pas directement les angles, les côtés manquants, l'aire ou le périmètre ; les calculatrices associées au bas de la page s'en chargent. Si vous ne connaissez que l'hypoténuse, vous pouvez trouver le rayon circonscrit, mais pas le rayon inscrit.",
            },
          ],
          "h2": "Calculer le rayon inscrit ou le rayon circonscrit d'un triangle rectangle",
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon inscrit est le rayon du cercle inscrit, le plus grand cercle qui tient à l'intérieur d'un triangle. Il touche chacun des trois côtés en exactement un point, et c'est la distance du centre du cercle à n'importe quel côté, mesurée à angle droit par rapport au côté.",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle inscrit s'appelle le centre du cercle inscrit, étiqueté I, le point où les trois bissectrices se rencontrent. Comme il se trouve sur chaque bissectrice, il est à la même distance des trois côtés, et cette distance commune est le rayon inscrit r, mesurée perpendiculairement à chaque côté.",
            },
            {
              "kind": "p",
              "text": "Dans un triangle rectangle, le centre du cercle inscrit se trouve toujours à l'intérieur du triangle, près de l'angle droit. Pour le triangle 6-8-10, le rayon inscrit est [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, donc le cercle inscrit est un cercle de rayon 2 cm centré en I.",
            },
            {
              "kind": "p",
              "text": "Une erreur fréquente consiste à mesurer le rayon inscrit du centre du cercle inscrit jusqu'à un sommet. Cette distance est plus longue que r et n'est pas un rayon du cercle inscrit : le rayon inscrit se termine toujours sur un côté, jamais sur un sommet.",
            },
          ],
          "h2": "Qu'est-ce que le rayon inscrit d'un triangle rectangle ?",
          "image": {
            "alt": "Triangle rectangle ABC avec angle droit en C, cercle inscrit à l'intérieur touchant les trois côtés, centre du cercle inscrit I, et rayon inscrit r montré perpendiculairement à un côté",
            "caption": "Le cercle inscrit touche les trois côtés depuis l'intérieur, avec le centre I et le rayon r = 2 cm dans le triangle 6-8-10.",
            "src": "radius-incircle.svg",
          },
        },
        "sec-what-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon circonscrit est le rayon du cercle circonscrit, le cercle qui passe par les trois sommets d'un triangle. Chaque sommet se trouve exactement sur le cercle, donc la distance du centre à n'importe quel sommet est la même, et cette distance est le rayon circonscrit R.",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle circonscrit s'appelle le centre du cercle circonscrit, étiqueté O, le point où les médiatrices des trois côtés se rencontrent. Se trouver sur chaque médiatrice rend O à la même distance des trois sommets.",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle possède un centre du cercle circonscrit particulier : il se trouve au milieu de l'hypoténuse. L'hypoténuse est le diamètre du cercle circonscrit, donc sa moitié est le rayon circonscrit : [[R = \\frac{c}{2}]]. Pour le triangle 6-8-10, [[R = \\frac{10}{2} = 5]] cm, et le centre du cercle circonscrit O se trouve au milieu de l'hypoténuse de 10 cm.",
            },
            {
              "kind": "p",
              "text": "Le rayon circonscrit se mesure du centre du cercle circonscrit jusqu'à n'importe quel sommet, jamais jusqu'à un côté. Dans un triangle rectangle, le sommet de l'angle droit se trouve aussi sur le cercle circonscrit : le cercle autour du triangle passe aussi par le coin avec l'angle droit.",
            },
          ],
          "h2": "Qu'est-ce que le rayon circonscrit d'un triangle rectangle ?",
          "image": {
            "alt": "Triangle rectangle ABC avec angle droit en C, cercle circonscrit passant par les trois sommets, centre du cercle circonscrit O au milieu de l'hypoténuse AB, et rayon circonscrit R",
            "caption": "Le cercle circonscrit passe par les trois sommets, avec le centre O au milieu de l'hypoténuse et R = 5 cm.",
            "src": "radius-circumcircle.svg",
          },
        },
        "sec-difference": {
          "blocks": [
            {
              "kind": "p",
              "text": "Les deux rayons décrivent deux cercles différents. Le cercle inscrit est serré à l'intérieur du triangle et touche les côtés, tandis que le cercle circonscrit enveloppe le triangle et passe par les sommets. Un cercle est petit et à l'intérieur, l'autre est grand et à l'extérieur, et leurs centres se trouvent à des endroits différents.",
            },
            {
              "kind": "p",
              "text": "Les centres diffèrent aussi. Le centre du cercle inscrit est le point de rencontre des bissectrices et se trouve à l'intérieur du triangle, près de l'angle droit. Le centre du cercle circonscrit est le point de rencontre des médiatrices et se trouve au milieu de l'hypoténuse, sur le bord du triangle.",
            },
            {
              "kind": "p",
              "text": "Les données diffèrent aussi : le rayon inscrit demande les trois côtés, parce que le cercle inscrit est façonné par la manière dont les trois côtés se referment autour de lui, tandis que le rayon circonscrit ne demande que l'hypoténuse, parce que l'hypoténuse seule fixe le cercle circonscrit comme son diamètre. Dans le triangle 6-8-10, [[r = 2]] cm et [[R = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Le tableau ci-dessous rassemble la comparaison en un seul endroit. Lisez chaque ligne pour voir comment la même caractéristique se présente pour chaque cercle, et utilisez-le comme contrôle rapide chaque fois qu'un problème mentionne un rayon sans dire lequel.",
            },
          ],
          "h2": "Différence entre le rayon inscrit et le rayon circonscrit",
          "image": {
            "alt": "Triangle rectangle 6-8-10 montrant le petit cercle inscrit à l'intérieur avec un rayon de 2 cm et le plus grand cercle circonscrit autour avec un rayon de 5 cm, avec le centre du cercle inscrit I et le centre du cercle circonscrit O étiquetés",
            "caption": "Même triangle, deux cercles : le cercle inscrit (r = 2 cm) à l'intérieur et le cercle circonscrit (R = 5 cm) autour.",
            "src": "radius-vs.svg",
          },
          "table": {
            "headers": [
              "Caractéristique",
              "Rayon inscrit r",
              "Rayon circonscrit R",
            ],
            "rows": [
              [
                "Cercle",
                "Cercle inscrit",
                "Cercle circonscrit",
              ],
              [
                "Position",
                "À l'intérieur du triangle",
                "Autour du triangle",
              ],
              [
                "Contact",
                "Tangent aux trois côtés",
                "Passe par les trois sommets",
              ],
              [
                "Centre",
                "Centre du cercle inscrit",
                "Centre du cercle circonscrit",
              ],
              [
                "Formule",
                "(a + b - c) / 2",
                "c / 2",
              ],
              [
                "Données requises",
                "a, b, c",
                "c",
              ],
              [
                "Mesure",
                "Du centre à un côté",
                "Du centre à un sommet",
              ],
            ],
          },
        },
        "sec-inradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formule du rayon inscrit d'un triangle rectangle est :",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a + b - c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici a est la première cathète, b est la deuxième cathète et c est l'hypoténuse, le côté opposé à l'angle droit. La formule demande les trois longueurs des côtés, parce que le cercle inscrit touche les trois côtés et que sa taille dépend de tous. Omettez un côté et la réponse n'a aucun sens.",
            },
            {
              "kind": "p",
              "text": "Procédez étape par étape avec le triangle 6-8-10. Additionnez les cathètes : [[6 + 8 = 14]]. Soustrayez l'hypoténuse : [[14 - 10 = 4]]. Divisez par 2 : [[r = \\frac{4}{2} = 2]] cm. Le résultat porte la même unité que les longueurs des côtés, des centimètres ici.",
            },
            {
              "kind": "p",
              "text": "La même valeur vient d'une méthode par l'aire : [[r = \\frac{Area}{s}]], où [[s = \\frac{a + b + c}{2}]]. Pour le triangle 6-8-10, l'aire est de 24 cm² et le demi-périmètre est de 12 cm, donc [[r = \\frac{24}{12} = 2]] cm. La <a href=\"/right-triangle-area-calculator/\">calculatrice d'aire d'un triangle rectangle</a> trouve l'aire lorsque vous en avez besoin pour cette vérification.",
            },
            {
              "kind": "p",
              "text": "Une troisième forme, [[r = \\frac{ab}{a + b + c}]], est la même formule sous un autre habillage. C'est la forme par l'aire avec [[Area = \\frac{ab}{2}]] et [[s = \\frac{a + b + c}{2}]] substituées, et la section de preuve ci-dessous montre comment elle se simplifie pour revenir à [[r = \\frac{a + b - c}{2}]].",
            },
          ],
          "h2": "Formule du rayon inscrit d'un triangle rectangle",
          "image": {
            "alt": "Triangle rectangle avec les cathètes a et b et l'hypoténuse c étiquetées, montrant la formule du rayon inscrit r égale à a plus b moins c sur 2",
            "caption": "Formule du rayon inscrit : r = (a + b - c) / 2, en utilisant les trois longueurs des côtés du triangle.",
            "src": "radius-inradius-formula.svg",
          },
        },
        "sec-why-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "La preuve commence au centre du cercle inscrit I. Comme I est à la même distance r des trois côtés, le triangle peut être divisé en trois petits triangles, chacun avec I comme sommet et un côté du grand triangle comme base.",
            },
            {
              "kind": "p",
              "text": "Chaque petit triangle a une hauteur r, donc son aire est la moitié de sa base fois r. Les trois aires sont [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] et [[\\frac{rc}{2}]]. Les additionner donne l'aire du triangle entier :",
            },
            {
              "kind": "p",
              "text": "[[[Area = \\frac{ra}{2} + \\frac{rb}{2} + \\frac{rc}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Factoriser r donne [[Area = \\frac{r(a + b + c)}{2}]]. Comme le demi-périmètre est [[s = \\frac{a + b + c}{2}]], cela devient la relation nette :",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Réarranger donne [[r = \\frac{Area}{s}]]. Pour un triangle rectangle, [[Area = \\frac{ab}{2}]], donc [[r = \\frac{ab}{a + b + c}]]. Le théorème de Pythagore termine le travail : comme [[a^2 + b^2 = c^2]], [[(a + b)^2 - c^2 = 2ab]], donc [[\\frac{ab}{a + b + c} = \\frac{a + b - c}{2}]]. Les deux formes sont le même fait, vu de deux côtés.",
            },
          ],
          "h2": "Pourquoi la formule du rayon inscrit fonctionne-t-elle ?",
        },
        "sec-circumradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formule du rayon circonscrit d'un triangle rectangle est :",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici R est le rayon circonscrit et c est l'hypoténuse complète. La formule n'a qu'une seule donnée parce que l'hypoténuse seule détermine le cercle circonscrit : c'est le diamètre de ce cercle, et un rayon est la moitié d'un diamètre.",
            },
            {
              "kind": "p",
              "text": "Le calcul est le plus court de ce guide. Avec [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. Le centre du cercle circonscrit O se trouve au milieu de l'hypoténuse, à 5 cm de chaque sommet.",
            },
            {
              "kind": "p",
              "text": "La forme par le diamètre dit la même chose à l'envers : [[c = 2R]]. Si vous connaissez le rayon circonscrit et que vous devez trouver l'hypoténuse, doublez-le. Un rayon circonscrit de 5 cm signifie une hypoténuse de 10 cm, et un rayon circonscrit de 6.5 cm signifie une hypoténuse de 13 cm.",
            },
            {
              "kind": "p",
              "text": "Ce raccourci appartient aux triangles rectangles seulement. Dans un triangle sans angle droit, le rayon circonscrit dépend des trois côtés, ne transportez donc jamais [[R = \\frac{c}{2}]] dans un tel triangle. La <a href=\"/right-triangle-circumradius-calculator/\">calculatrice de rayon circonscrit d'un triangle rectangle</a> couvre ce calcul en détail.",
            },
          ],
          "h2": "Formule du rayon circonscrit d'un triangle rectangle",
          "image": {
            "alt": "Triangle rectangle avec l'hypoténuse c montrée comme le diamètre du cercle circonscrit, son milieu O marqué, et la formule R égale à c sur 2",
            "caption": "Formule du rayon circonscrit : R = c / 2, avec l'hypoténuse comme diamètre du cercle circonscrit.",
            "src": "radius-circumradius-formula.svg",
          },
        },
        "sec-why-diameter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prenez le triangle ABC avec l'angle droit en C, et soit O le milieu de l'hypoténuse AB. L'affirmation est que O est le centre du cercle circonscrit, à la même distance de A, B et C. Par construction, [[AO = BO]], puisque O est le milieu, donc la seule distance à vérifier est CO.",
            },
            {
              "kind": "p",
              "text": "Tracez la médiane de C au milieu O. Dans un triangle rectangle, cette médiane vaut exactement la moitié de l'hypoténuse, donc [[CO = \\frac{AB}{2}]], ce qui donne [[AO = BO = CO]]. Donc O est à égale distance des trois sommets et est le centre du cercle circonscrit.",
            },
            {
              "kind": "p",
              "text": "Comme AB passe par O et que ses deux extrémités se trouvent sur le cercle circonscrit, AB est un diamètre de ce cercle. Un diamètre vaut deux fois un rayon, donc [[AB = 2R]], ce qui est la même chose que [[R = \\frac{c}{2}]]. L'hypoténuse gagne son rôle de diamètre grâce à l'angle droit, et non grâce à sa longueur seule.",
            },
            {
              "kind": "p",
              "text": "Le théorème de Thalès énonce la même idée dans l'autre sens : tout angle inscrit dans un demi-cercle est un angle droit, donc l'hypoténuse d'un triangle rectangle doit être le diamètre du cercle qui passe par ses sommets. Le schéma ci-dessous montre les deux centres à la fois : le centre du cercle inscrit I à l'intérieur du triangle et le centre du cercle circonscrit O au milieu de l'hypoténuse.",
            },
          ],
          "h2": "Pourquoi l'hypoténuse est-elle le diamètre du cercle circonscrit ?",
          "image": {
            "alt": "Triangle rectangle montrant le centre du cercle inscrit I à l'intérieur du triangle où les bissectrices se rencontrent et le centre du cercle circonscrit O au milieu de l'hypoténuse où les médiatrices se rencontrent",
            "caption": "Deux centres différents : I est le point de rencontre des bissectrices, O est le point de rencontre des médiatrices.",
            "src": "radius-centers.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Suivez la liste pour le mode dont vous avez besoin. Les deux commencent par étiqueter le triangle correctement, parce qu'une cathète et une hypoténuse échangées sont la cause la plus fréquente d'une mauvaise réponse.",
            },
            {
              "kind": "h3",
              "text": "Utiliser le mode rayon inscrit",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez la cathète a, le premier côté qui forme l'angle droit.",
                "Identifiez la cathète b, le deuxième côté qui forme l'angle droit.",
                "Identifiez l'hypoténuse c, le côté opposé à l'angle droit et le côté le plus long.",
                "Sélectionnez le mode Calculatrice de rayon inscrit.",
                "Saisissez les trois longueurs des côtés dans la même unité.",
                "Sélectionnez l'unité qui correspond à vos mesures.",
                "Cliquez sur Calculer le rayon inscrit r.",
                "Vérifiez le résultat et assurez-vous qu'il est positif et plus petit que chaque cathète.",
                "Utilisez Réinitialiser pour commencer un autre calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Avant de cliquer sur Calculer, confirmez que les trois longueurs peuvent former un triangle rectangle : l'hypoténuse doit être plus longue que chaque cathète, et [[a^2 + b^2]] doit être égal à [[c^2]].",
            },
            {
              "kind": "h3",
              "text": "Utiliser le mode rayon circonscrit",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez l'hypoténuse c, le côté opposé à l'angle droit.",
                "Sélectionnez le mode Calculatrice de rayon circonscrit.",
                "Saisissez c dans l'unité de votre choix.",
                "Sélectionnez l'unité qui correspond à votre mesure.",
                "Cliquez sur Calculer le rayon circonscrit R.",
                "Vérifiez le résultat, qui doit être exactement la moitié de l'hypoténuse.",
                "Utilisez Réinitialiser pour un nouveau calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Le mode rayon circonscrit ne demande qu'une seule mesure parce que l'hypoténuse est le diamètre du cercle circonscrit. Ne saisissez pas une cathète ici : elle est plus courte que l'hypoténuse, donc le résultat serait la moitié de la mauvaise longueur.",
            },
          ],
          "h2": "Comment utiliser la calculatrice de rayon d'un triangle rectangle",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Utilisez le triangle rectangle 6-8-10 avec [[a = 6]] cm, [[b = 8]] cm et [[c = 10]] cm. Les deux parties ci-dessous trouvent chaque rayon à tour de rôle, puis comparent les résultats.",
            },
            {
              "kind": "h3",
              "text": "Partie 1 : Calculer le rayon inscrit",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[r = \\frac{a + b - c}{2}]].",
                "Substituez les valeurs : [[r = \\frac{6 + 8 - 10}{2}]].",
                "Additionnez et soustrayez : [[r = \\frac{4}{2}]].",
                "Divisez : [[r = 2]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Le cercle inscrit a un rayon de 2 cm. Son centre I se trouve à 2 cm de chaque côté, et le cercle touche les deux cathètes et l'hypoténuse depuis l'intérieur du triangle.",
            },
            {
              "kind": "h3",
              "text": "Partie 2 : Calculer le rayon circonscrit",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[R = \\frac{c}{2}]].",
                "Substituez la valeur : [[R = \\frac{10}{2}]].",
                "Divisez : [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Le cercle circonscrit a un rayon de 5 cm. Son centre O est le milieu de l'hypoténuse, et le cercle passe par les trois sommets. En comparant les deux résultats, le rayon circonscrit est deux fois et demie le rayon inscrit, ce qui est normal : le cercle autour du triangle est beaucoup plus grand que le cercle à l'intérieur.",
            },
            {
              "kind": "p",
              "text": "Une courte vérification croisée : l'aire est de 24 cm² et le demi-périmètre est de 12 cm, donc [[r = \\frac{24}{12} = 2]] cm, ce qui correspond à la partie 1, et [[2R = 2 \\times 5 = 10]] cm, ce qui correspond à c.",
            },
          ],
          "h2": "Exemple étape par étape : calculer les deux rayons",
          "image": {
            "alt": "Triangle rectangle 6-8-10 avec des côtés de 6, 8 et 10 cm, un rayon inscrit de 2 cm, un rayon circonscrit de 5 cm, une aire de 24 centimètres carrés et un demi-périmètre de 12 cm",
            "caption": "Exemple complet 6-8-10 : a = 6, b = 8, c = 10, r = 2, R = 5, aire 24 cm², s = 12 cm.",
            "src": "radius-complete-example.svg",
          },
        },
        "sec-examples-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple indique les valeurs données, la substitution et la réponse finale, et chaque exemple garde ses unités cohérentes du début à la fin. Les six triangles sont tous des triangles rectangles valables, vérifiés avec le théorème de Pythagore.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Triangle simple 3-4-5",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 3]] cm, [[b = 4]] cm et [[c = 5]] cm, [[r = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1]] cm. Vérification : [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Triangle 5-12-13",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 5]] cm, [[b = 12]] cm et [[c = 13]] cm, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Vérification : [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Triangle 8-15-17",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 8]] cm, [[b = 15]] cm et [[c = 17]] cm, [[r = \\frac{8 + 15 - 17}{2} = \\frac{6}{2} = 3]] cm. Vérification : [[8^2 + 15^2 = 64 + 225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 7.5]] cm, [[b = 10]] cm et [[c = 12.5]] cm, [[r = \\frac{7.5 + 10 - 12.5}{2} = \\frac{5}{2} = 2.5]] cm. C'est le triangle 6-8-10 multiplié par 1.25, donc son rayon inscrit est multiplié de la même façon. Vérification : [[7.5^2 + 10^2 = 56.25 + 100 = 156.25 = 12.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Mesures plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 9]] m, [[b = 12]] m et [[c = 15]] m, [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] m. C'est le triangle 3-4-5 multiplié par 3. Vérification : [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 0.09]] m, [[b = 0.12]] m et [[c = 0.15]] m, convertissez d'abord en centimètres : 9 cm, 12 cm et 15 cm. Puis [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] cm. Vérification : [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
          ],
          "h2": "Exemples résolus de calcul du rayon inscrit",
        },
        "sec-examples-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque exemple de rayon circonscrit ne demande que l'hypoténuse, donc chacun est une seule division par 2. La variété vient des unités et de la taille des nombres, et non de la méthode, qui ne change jamais.",
            },
            {
              "kind": "h3",
              "text": "Exemple 1 : Hypoténuse de 10 cm",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. C'est le rayon circonscrit du triangle 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Hypoténuse de 13 cm",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. C'est le rayon circonscrit du triangle 5-12-13.",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Hypoténuse de 24 m",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m.",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Hypoténuse de 7.5 cm",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. La vérification par le diamètre fonctionne à l'envers : [[2 \\times 3.75 = 7.5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Hypoténuse de 180 mm",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm, soit 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Hypoténuse de 1.2 m",
            },
            {
              "kind": "p",
              "text": "Avec [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m, soit 60 cm.",
            },
          ],
          "h2": "Exemples résolus de calcul du rayon circonscrit",
        },
        "sec-validity": {
          "blocks": [
            {
              "kind": "p",
              "text": "Une réponse de rayon ne vaut que ce que vaut le triangle derrière elle, vérifiez donc les mesures avant de calculer. Pour un triangle rectangle, les côtés doivent satisfaire le théorème de Pythagore :",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "L'hypoténuse doit aussi être le côté le plus long, donc [[c > a]] et [[c > b]]. Une cathète plus longue que l'hypoténuse ne peut appartenir à aucun triangle rectangle, et une hypoténuse plus courte qu'une cathète signifie que les côtés ont été mal étiquetés.",
            },
            {
              "kind": "p",
              "text": "Vérifiez le triangle 3-4-5 : [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]], donc les côtés concordent, et le rayon inscrit est positif : [[r = \\frac{3 + 4 - 5}{2} = 1]] cm. Un triangle rectangle non dégénéré valable donne toujours un rayon inscrit positif, parce que les cathètes réunies sont plus longues que l'hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Des mesures invalides se trahissent dans la formule du rayon inscrit. Si les cathètes totalisent moins que l'hypoténuse, r devient négatif, ce qui ne décrit aucun vrai cercle, et si elles totalisent exactement l'hypoténuse, r est nul et le triangle est plat. L'un ou l'autre résultat signifie que les données sont fausses. La <a href=\"/right-triangle-side-calculator/\">calculatrice de côtés d'un triangle rectangle</a> peut reconstruire un côté manquant à partir de mesures valables.",
            },
          ],
          "h2": "Comment vérifier si les mesures de votre triangle rectangle sont valables",
        },
        "sec-area-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon inscrit, l'aire et le demi-périmètre d'un triangle sont liés par une seule relation, qui vaut pour n'importe quel triangle, et pas seulement pour les triangles rectangles :",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "L'aire mesure la surface que couvre le triangle, le demi-périmètre mesure la moitié de son contour, et leur rapport est le rayon du cercle qui tient à l'intérieur.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle, [[Area = \\frac{ab}{2}]], puisque les deux cathètes sont la base et la hauteur, et le rayon circonscrit se joint par [[c = 2R]]. Dans le triangle 6-8-10, l'aire est de 24 cm², le demi-périmètre est de 12 cm, [[r = \\frac{24}{12} = 2]] cm et [[R = \\frac{10}{2} = 5]] cm. La hauteur vers l'hypoténuse suit le même modèle : [[h = \\frac{ab}{c}]], ce qui donne [[h = \\frac{48}{10} = 4.8]] cm ici.",
            },
            {
              "kind": "p",
              "text": "Les deux rayons décrivent des aspects différents du même triangle : le rayon inscrit dépend de l'aire et du périmètre ensemble, tandis que le rayon circonscrit dépend de l'hypoténuse seule. Aucun des deux ne peut être trouvé à partir de l'aire seule.",
            },
          ],
          "h2": "Relation entre le rayon inscrit, le rayon circonscrit et l'aire du triangle",
        },
        "sec-perimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le périmètre d'un triangle rectangle est [[P = a + b + c]], et le demi-périmètre est la moitié de cela, [[s = \\frac{a + b + c}{2}]]. Le rayon inscrit peut s'écrire [[r = \\frac{Area}{s}]], donc pour une aire fixe, un demi-périmètre plus grand signifie un rayon inscrit plus petit.",
            },
            {
              "kind": "p",
              "text": "Utilisez le triangle 6-8-10 : le périmètre est de 24 cm, le demi-périmètre est de 12 cm, et avec une aire de 24 cm², [[r = \\frac{24}{12} = 2]] cm. Comparez avec le triangle 3-4-5 : son périmètre est de 12 cm, son demi-périmètre est de 6 cm, son aire est de 6 cm², et [[r = \\frac{6}{6} = 1]] cm.",
            },
            {
              "kind": "p",
              "text": "Le périmètre seul ne peut pas déterminer le rayon inscrit : deux triangles peuvent partager un périmètre de 24 cm et avoir des aires et des rayons inscrits différents. Ne confondez pas le demi-périmètre avec le périmètre : utiliser P là où s appartient diviserait la réponse par deux. La <a href=\"/right-triangle-perimeter-semiperimeter-calculator/\">calculatrice de périmètre et de demi-périmètre d'un triangle rectangle</a> trouve les deux valeurs lorsque vous en avez besoin.",
            },
          ],
          "h2": "Relation entre le rayon inscrit et le périmètre",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf propriétés découlent directement des deux formules. Chacune sert aussi de contrôle de vraisemblance pour une nouvelle réponse.",
            },
            {
              "kind": "list",
              "items": [
                "Le rayon inscrit est toujours positif dans un triangle non dégénéré valable, parce que les deux cathètes réunies sont plus longues que l'hypoténuse, donc [[a + b - c > 0]].",
                "Le centre du cercle inscrit se trouve à l'intérieur du triangle, au point de rencontre des trois bissectrices.",
                "Le rayon inscrit est perpendiculaire à chaque côté au point de tangence, puisqu'un rayon vers une tangente la rencontre à angle droit.",
                "Le centre du cercle circonscrit se trouve au milieu de l'hypoténuse dans un triangle rectangle, et nulle part ailleurs.",
                "Le rayon circonscrit vaut exactement la moitié de l'hypoténuse, [[R = \\frac{c}{2}]], dans chaque triangle rectangle.",
                "Le cercle circonscrit passe par les trois sommets, y compris le sommet de l'angle droit.",
                "Le cercle inscrit est tangent aux trois côtés et touche chaque côté en exactement un point.",
                "Le rayon circonscrit est plus grand que le rayon inscrit pour un triangle rectangle non dégénéré, donc [[R > r]] vaut toujours ici.",
                "Les deux calculs de rayon demandent des mesures différentes : le rayon inscrit demande les trois côtés, tandis que le rayon circonscrit ne demande que l'hypoténuse.",
              ],
            },
            {
              "kind": "p",
              "text": "La dernière propriété est celle que les élèves oublient le plus souvent : lorsqu'un problème ne donne que l'hypoténuse, le rayon circonscrit est à portée et le rayon inscrit ne l'est pas.",
            },
          ],
          "h2": "Propriétés importantes des rayons d'un triangle rectangle",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Chaque erreur ci-dessous est suivie de sa correction. La plupart remontent à la confusion entre les deux cercles, et non au calcul.",
            },
            {
              "kind": "list",
              "items": [
                "Confondre le rayon inscrit et le rayon circonscrit : r appartient au cercle à l'intérieur du triangle, R au cercle autour de lui. Dans le triangle 6-8-10, r vaut 2 cm et R 5 cm.",
                "Utiliser [[R = \\frac{c}{2}]] pour calculer le rayon inscrit : diviser l'hypoténuse par deux donne le rayon circonscrit, et non r.",
                "Utiliser [[r = \\frac{a + b - c}{2}]] pour calculer le rayon circonscrit : cela donne un nombre plus petit qui n'a rien à voir avec le cercle qui passe par les sommets.",
                "Saisir une cathète au lieu de l'hypoténuse en mode rayon circonscrit : une cathète est plus courte que l'hypoténuse, donc la diviser par deux donne la moitié de la mauvaise longueur.",
                "Oublier de diviser par deux dans la formule du rayon inscrit : [[a + b - c]] seul vaut deux fois le rayon inscrit. Dans le triangle 6-8-10, la somme est 4, mais r vaut 2.",
                "Oublier de diviser par deux dans la formule du rayon circonscrit : l'hypoténuse complète est le diamètre, et non le rayon. Avec c = 10 cm, R vaut 5 cm, et non 10 cm.",
                "Saisir un triangle invalide : si [[a^2 + b^2]] n'est pas égal à [[c^2]], les côtés ne forment aucun triangle rectangle.",
                "Mélanger les unités : des centimètres pour un côté et des mètres pour un autre donnent une soustraction sans signification. Convertissez tout dans une seule unité d'abord.",
                "Confondre le centre du cercle inscrit et le centre du cercle circonscrit : le centre du cercle inscrit est à l'intérieur du triangle, le centre du cercle circonscrit est au milieu de l'hypoténuse.",
                "Supposer que le cercle inscrit passe par les sommets : le cercle inscrit touche les côtés, et ses points n'atteignent jamais un sommet.",
                "Supposer que le cercle circonscrit touche les trois côtés : le cercle circonscrit passe par les sommets, et il ne touche aucun côté sur sa longueur.",
                "Arrondir trop tôt : gardez la pleine précision jusqu'à la dernière étape, puisque arrondir une valeur intermédiaire déplace la réponse.",
                "Confondre le rayon et le diamètre : le diamètre vaut deux fois le rayon, donc un rayon circonscrit de 5 cm signifie un diamètre de 10 cm, qui est l'hypoténuse.",
                "Utiliser le mauvais mode de calculatrice : le mode rayon inscrit demande trois données et le mode rayon circonscrit en demande une. Choisissez le mode qui correspond aux mesures dont vous disposez.",
              ],
            },
            {
              "kind": "p",
              "text": "Si une réponse semble fausse, vérifiez d'abord le mode, puis les étiquettes, puis les unités. La plupart des erreurs ci-dessus disparaissent une fois que le bon mode est sélectionné et que l'hypoténuse est correctement identifiée.",
            },
          ],
          "h2": "Erreurs fréquentes lors du calcul du rayon inscrit et du rayon circonscrit",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le travail de géométrie à l'école et en classe, où les problèmes de rayon vérifient si les élèves savent distinguer le cercle inscrit du cercle circonscrit et choisir la bonne formule pour chacun. Les enseignants utilisent le triangle 6-8-10 parce que les deux rayons sont des nombres entiers.",
            },
            {
              "kind": "p",
              "text": "La construction de cercles est un deuxième usage : tracer un cercle inscrit demande le centre du cercle inscrit et le rayon inscrit, tandis que tracer un cercle circonscrit demande le centre du cercle circonscrit et le rayon circonscrit. Le dessin technique utilise les mêmes idées chaque fois qu'une forme triangulaire doit être munie d'un trou circulaire ou placée à l'intérieur d'un cadre circulaire.",
            },
            {
              "kind": "p",
              "text": "Les preuves mathématiques utilisent les deux rayons comme tremplins : [[Area = rs]] relie l'aire, le périmètre et le rayon inscrit en une seule ligne, et le théorème de Thalès relie l'angle droit au diamètre du cercle circonscrit. La modélisation géométrique utilise les mêmes relations pour calculer les jeux, par exemple la taille que doit avoir une pièce circulaire pour enfermer une pièce triangulaire.",
            },
            {
              "kind": "p",
              "text": "Une condition limite chaque application : ces formules décrivent des triangles et des cercles idéaux, et non des mesures de terrain approximatives, donc le travail de conception pratique peut demander des tolérances supplémentaires au-delà du seul rayon.",
            },
          ],
          "h2": "Applications pratiques des rayons d'un triangle",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune des valeurs ne reprend les exemples résolus, et chaque triangle est valable.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Trouver le rayon inscrit",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des cathètes [[a = 5]] cm et [[b = 12]] cm et une hypoténuse [[c = 13]] cm. Trouvez le rayon inscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Trouver le rayon circonscrit",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a une hypoténuse [[c = 26]] cm. Trouvez le rayon circonscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Calculer les deux rayons",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a [[a = 9]] cm, [[b = 40]] cm et [[c = 41]] cm. Trouvez à la fois le rayon inscrit et le rayon circonscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Vérifier la validité du triangle",
            },
            {
              "kind": "p",
              "text": "On dit qu'un triangle a des côtés de 7 cm, 24 cm et 25 cm. Vérifiez avec le théorème de Pythagore que c'est un triangle rectangle, puis trouvez son rayon inscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Rayon inscrit à partir de l'aire et du demi-périmètre",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des cathètes de 8 cm et 15 cm. Trouvez son aire et son demi-périmètre, puis utilisez [[r = \\frac{Area}{s}]] pour trouver le rayon inscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Identifier le bon mode",
            },
            {
              "kind": "p",
              "text": "Vous savez seulement que l'hypoténuse d'un triangle rectangle mesure 18 cm. Quel mode de calculatrice pouvez-vous utiliser, quel rayon pouvez-vous trouver, et quelle est sa valeur ? Expliquez pourquoi l'autre rayon ne peut pas être trouvé à partir de cette seule information.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[R = \\frac{26}{2} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : [[r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4]] cm et [[R = \\frac{41}{2} = 20.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[7^2 + 24^2 = 49 + 576 = 625 = 25^2]], donc c'est un triangle rectangle, et [[r = \\frac{7 + 24 - 25}{2} = \\frac{6}{2} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[Area = \\frac{8 \\times 15}{2} = 60]] cm², [[c = 17]] cm, [[s = \\frac{8 + 15 + 17}{2} = 20]] cm, donc [[r = \\frac{60}{20} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : Utilisez le mode rayon circonscrit : [[R = \\frac{18}{2} = 9]] cm. Le rayon inscrit ne peut pas être trouvé, parce que [[r = \\frac{a + b - c}{2}]] demande les deux cathètes, et beaucoup de triangles rectangles partagent une hypoténuse de 18 cm.",
            },
          ],
          "h2": "Exercices avec réponses",
        },
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-applications": "Applications pratiques des rayons d'un triangle",
        "sec-area-relation": "Relation entre le rayon inscrit, le rayon circonscrit et l'aire du triangle",
        "sec-calculate": "Calculer le rayon inscrit ou le rayon circonscrit d'un triangle rectangle",
        "sec-circumradius-formula": "Formule du rayon circonscrit d'un triangle rectangle",
        "sec-difference": "Différence entre le rayon inscrit et le rayon circonscrit",
        "sec-examples-circumradius": "Exemples résolus de calcul du rayon circonscrit",
        "sec-examples-inradius": "Exemples résolus de calcul du rayon inscrit",
        "sec-faq": "Questions fréquemment posées",
        "sec-how-to-use": "Comment utiliser la calculatrice de rayon d'un triangle rectangle",
        "sec-intro": "Calculatrice de rayon d'un triangle rectangle",
        "sec-mistakes": "Erreurs fréquentes lors du calcul du rayon inscrit et du rayon circonscrit",
        "sec-perimeter-relation": "Relation entre le rayon inscrit et le périmètre",
        "sec-practice": "Exercices avec réponses",
        "sec-properties": "Propriétés importantes des rayons d'un triangle rectangle",
        "sec-related": "Découvrir les calculatrices de triangles rectangles associées",
        "sec-step-example": "Exemple étape par étape : calculer les deux rayons",
        "sec-validity": "Comment vérifier si les mesures de votre triangle rectangle sont valables",
        "sec-what-circumradius": "Qu'est-ce que le rayon circonscrit d'un triangle rectangle ?",
        "sec-what-inradius": "Qu'est-ce que le rayon inscrit d'un triangle rectangle ?",
        "sec-why-diameter": "Pourquoi l'hypoténuse est-elle le diamètre du cercle circonscrit ?",
        "sec-why-inradius": "Pourquoi la formule du rayon inscrit fonctionne-t-elle ?",
        "sec-inradius-formula": "Formule du rayon inscrit d'un triangle rectangle",
      },
    },
};
