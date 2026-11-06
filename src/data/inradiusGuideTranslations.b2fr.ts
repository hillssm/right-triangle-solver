// inradiusGuideTranslations.bfr.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B2_FR = {
  "fr": {
      "meta": {
        "title": "Calculateur de rayon inscrit d'un triangle rectangle - Trouver r à partir des côtés",
        "description": "Utilisez le calculateur de rayon inscrit d'un triangle rectangle pour trouver r à partir des côtés a et b de l'angle droit et de l'hypoténuse c, avec la formule, un exemple détaillé 6-8-10 et des vérifications étape par étape.",
        "primaryKeyword": "Calculateur de rayon inscrit d'un triangle rectangle",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Contenu du guide",
      "tocItems": {
        "sec-intro": "Calculateur de rayon inscrit d'un triangle rectangle",
        "sec-calculate": "Calculer le rayon inscrit d'un triangle rectangle",
        "sec-what-inradius": "Qu'est-ce que le rayon inscrit d'un triangle rectangle ?",
        "sec-incircle": "Qu'est-ce qu'un cercle inscrit en géométrie du triangle rectangle ?",
        "sec-incenter": "Comprendre le centre du cercle inscrit d'un triangle rectangle",
        "sec-formula": "Formule du rayon inscrit d'un triangle rectangle",
        "sec-why-formula-works": "Pourquoi la formule du rayon inscrit d'un triangle rectangle fonctionne-t-elle ?",
        "sec-how-to-use": "Comment utiliser le calculateur de rayon inscrit d'un triangle rectangle",
        "sec-step-example": "Exemple étape par étape pour trouver le rayon inscrit",
        "sec-diagram": "Schéma du cercle inscrit d'un triangle rectangle expliqué",
        "sec-area-semiperimeter": "Comment calculer le rayon inscrit en utilisant l'aire et le demi-périmètre",
        "sec-semiperimeter-relation": "Relation entre le rayon inscrit et le demi-périmètre",
        "sec-examples": "Exemples détaillés de calcul du rayon inscrit d'un triangle rectangle",
        "sec-legs-known": "Comment calculer le rayon inscrit quand seuls les deux côtés de l'angle droit sont connus",
        "sec-vs-circumradius": "Relation entre le rayon inscrit et le rayon circonscrit",
        "sec-verify": "Comment vérifier votre calcul de rayon inscrit",
        "sec-properties": "Propriétés importantes du rayon inscrit dans les triangles rectangles",
        "sec-mistakes": "Erreurs fréquentes lors du calcul du rayon inscrit",
        "sec-applications": "Applications pratiques du rayon inscrit d'un triangle rectangle",
        "sec-practice": "Exercices avec réponses",
        "sec-related": "Découvrir les calculateurs de triangle rectangle associés",
        "sec-faq": "Questions fréquemment posées",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculateur de rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Trouvez le rayon inscrit d'un triangle rectangle à partir de ses deux côtés de l'angle droit et de son hypoténuse.",
            },
            {
              "kind": "p",
              "text": "Le rayon inscrit est le rayon du cercle inscrit, le cercle qui tient à l'intérieur du triangle et touche les trois côtés. Le calculateur a besoin de trois nombres : le côté de l'angle droit [[a]], le côté de l'angle droit [[b]] et l'hypoténuse [[c]], où [[a]] et [[b]] sont les côtés qui forment l'angle droit et [[c]] est le côté opposé à celui-ci. La formule est [[r = \\frac{a+b-c}{2}]], où [[r]] est le rayon inscrit. Elle additionne les deux côtés de l'angle droit, soustrait l'hypoténuse et divise le résultat par deux.",
            },
            {
              "kind": "p",
              "text": "Par exemple, un triangle 6-8-10 donne [[r = \\frac{6+8-10}{2} = 2]]. Ce 2 est le rayon du cercle à l'intérieur du triangle, mesuré dans la même unité que les côtés. Le cercle touche chaque côté en exactement un point, et son centre, le centre du cercle inscrit, se trouve à la même distance des trois côtés.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calculer le rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur de cette page comporte trois champs de saisie, un pour chaque côté du triangle, et un seul résultat. Saisissez les trois longueurs des côtés, toutes dans la même unité, puis cliquez sur Calculer le rayon inscrit r. Le résultat est une longueur, le rayon du cercle inscrit, donnée dans cette même unité.",
            },
            {
              "kind": "p",
              "text": "Le côté a est le premier côté qui forme l'angle droit, et le côté b est le second. Peu importe lequel des deux côtés vous appelez [[a]] et lequel vous appelez [[b]], car la formule les additionne. L'hypoténuse [[c]] est le côté opposé à l'angle droit, et elle doit être le côté le plus long du triangle. Si le nombre saisi pour [[c]] est plus court qu'un côté de l'angle droit, les trois longueurs ne peuvent pas former un triangle rectangle, et le résultat n'aura aucun sens.",
            },
            {
              "kind": "p",
              "text": "Gardez les mêmes unités dans les trois champs. Si [[a]] et [[b]] sont en centimètres, [[c]] doit aussi être en centimètres, et la réponse est en centimètres. Lisez la réponse comme un rayon, et non comme un diamètre : un rayon va du centre du cercle à son bord, tandis qu'un diamètre traverse tout le cercle. Utilisez Réinitialiser pour effacer les champs avant de commencer un nouveau problème.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "Qu'est-ce que le rayon inscrit d'un triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon inscrit d'un triangle rectangle est le rayon de son cercle inscrit, le plus grand cercle qui tient à l'intérieur du triangle. Imaginez le triangle ABC avec l'angle droit en C, le côté AC appelé [[a]], le côté BC appelé [[b]] et l'hypoténuse AB appelée [[c]]. Tracez maintenant le plus grand cercle possible à l'intérieur de ce triangle sans traverser aucun côté. Ce cercle touche les trois côtés, et son rayon est le rayon inscrit, noté [[r]].",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle inscrit s'appelle le centre du cercle inscrit, noté [[I]]. Le centre du cercle inscrit se trouve à la même distance perpendiculaire des trois côtés, et cette distance est [[r]]. Chaque rayon tracé de [[I]] vers un côté rencontre ce côté à angle droit, ce qui explique pourquoi le cercle ne fait que toucher le côté au lieu de le traverser. Le cercle inscrit reste à l'intérieur du triangle, car chaque point du cercle est à une distance de [[r]] ou moins de [[I]], et [[I]] lui-même est à l'intérieur du triangle.",
            },
            {
              "kind": "p",
              "text": "Un petit exemple rend la notion concrète. Dans un triangle 3-4-5, le rayon inscrit est [[r = \\frac{3+4-5}{2} = 1]]. Le cercle inscrit a un rayon de 1 unité, donc son centre se trouve à 1 unité de chaque côté. Le <a href=\"/right-triangle-radius-calculator/\">calculateur de rayon d'un triangle rectangle</a> couvre les deux rayons d'un triangle rectangle sur une seule page, si vous voulez comparer le cercle inscrit avec le cercle qui passe par les sommets.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Triangle rectangle ABC avec le cercle inscrit à l'intérieur, centre I et rayon r touchant les trois côtés",
            "caption": "Triangle ABC avec son cercle inscrit : le centre I se trouve à distance r de chaque côté.",
          },
        },
        "sec-incircle": {
          "h2": "Qu'est-ce qu'un cercle inscrit en géométrie du triangle rectangle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un cercle inscrit est un cercle tracé entièrement à l'intérieur d'un triangle de sorte qu'il touche, ou est tangent à, les trois côtés. Chaque côté du triangle est une tangente au cercle : il rencontre le cercle en exactement un point et ne le traverse pas. Ces trois points de rencontre s'appellent les points de tangence, un sur chaque côté.",
            },
            {
              "kind": "p",
              "text": "Le rayon tracé du centre du cercle inscrit vers un point de tangence est toujours perpendiculaire à ce côté. C'est un fait général sur les cercles : un rayon vers un point de tangence rencontre la tangente à angle droit. Comme le centre du cercle inscrit est à la même distance des trois côtés, les trois rayons vers les trois points de tangence ont tous la même longueur [[r]], donc un seul cercle s'ajuste aux trois côtés à la fois.",
            },
            {
              "kind": "p",
              "text": "Chaque triangle possède exactement un cercle inscrit. Les trois bissectrices des angles d'un triangle se rencontrent en un point, le centre du cercle inscrit, et la distance de ce point aux côtés fixe le rayon. Un second cercle différent ne pourrait pas toucher les trois côtés de l'intérieur, car son centre devrait aussi être à égale distance des trois côtés, et seul le centre du cercle inscrit possède cette propriété. Notez que le cercle inscrit n'est pas le cercle qui passe par les sommets : il touche les côtés de l'intérieur et n'atteint jamais un sommet.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Cercle inscrit touchant les trois côtés d'un triangle rectangle en trois points de tangence avec des rayons perpendiculaires",
            "caption": "Trois points de tangence : chaque rayon rencontre son côté à 90 degrés.",
          },
        },
        "sec-incenter": {
          "h2": "Comprendre le centre du cercle inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Le centre du cercle inscrit d'un triangle est le point où ses trois bissectrices intérieures se rencontrent. Une bissectrice est une droite qui partage un angle en deux moitiés égales. Tracez la bissectrice de l'angle A, la bissectrice de l'angle B et la bissectrice de l'angle C, et les trois se croisent en un seul point. Ce point est le centre du cercle inscrit [[I]], et c'est le centre du cercle inscrit.",
            },
            {
              "kind": "p",
              "text": "Le centre du cercle inscrit est à égale distance des trois côtés grâce au comportement des bissectrices. Chaque point de la bissectrice d'un angle est à la même distance des deux côtés qui forment cet angle. Un point situé sur deux bissectrices à la fois est donc à la même distance des trois côtés, et le centre du cercle inscrit se trouve sur les trois bissectrices. Cette distance commune est le rayon inscrit [[r]], donc le cercle centré en [[I]] de rayon [[r]] touche chaque côté.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle dont l'angle droit est en C, le centre du cercle inscrit se trouve le long de la bissectrice de l'angle de 90 degrés, qui traverse le coin en C en diagonale à 45 degrés de chaque côté de l'angle droit. Le centre du cercle inscrit se trouve toujours à l'intérieur du triangle, jamais sur un côté ni à l'extérieur, car les trois bissectrices se rencontrent à l'intérieur. C'est pourquoi le cercle inscrit tient à l'intérieur du triangle au lieu d'en déborder.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Triangle rectangle avec les trois bissectrices intérieures se rencontrant au centre du cercle inscrit I",
            "caption": "Les trois bissectrices se rencontrent en I, le centre du cercle inscrit, à distance r de chaque côté.",
          },
        },
        "sec-formula": {
          "h2": "Formule du rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule du rayon inscrit d'un triangle rectangle est assez courte pour être retenue d'un coup d'œil :",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[r]] est le rayon inscrit, [[a]] est le premier côté de l'angle droit, [[b]] est le second côté de l'angle droit et [[c]] est l'hypoténuse. La formule fonctionne en trois étapes, et chaque étape a un sens clair.",
            },
            {
              "kind": "p",
              "text": "Étape 1 : additionnez les deux côtés de l'angle droit, [[a+b]]. Cette longueur combinée est toujours plus longue que l'hypoténuse, car les deux côtés de l'angle droit réunis s'étendent plus loin que la ligne droite qui les relie. Étape 2 : soustrayez l'hypoténuse, [[a+b-c]]. Il reste la quantité dont les côtés de l'angle droit dépassent l'hypoténuse. Étape 3 : divisez par deux, [[r = \\frac{a+b-c}{2}]]. La division transforme cette longueur restante en rayon du cercle inscrit, et la section de démonstration ci-dessous montre pourquoi diviser par deux est exactement juste.",
            },
            {
              "kind": "p",
              "text": "Prenez le triangle 6-8-10 : [[a+b = 14]], puis [[14-10 = 4]], puis [[\\frac{4}{2} = 2]], donc [[r = 2]]. La formule est propre aux triangles rectangles. Pour un triangle qui n'est pas rectangle, le rayon inscrit vaut toujours l'aire divisée par le demi-périmètre, [[r = \\frac{A}{s}]], mais le raccourci [[r = \\frac{a+b-c}{2}]] ne s'applique pas, car sa preuve dépend de l'angle droit.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Triangle rectangle étiqueté avec les côtés a et b de l'angle droit, l'hypoténuse c, le centre du cercle inscrit I et le rayon inscrit r à côté de la formule r égale a plus b moins c sur 2",
            "caption": "La formule utilise les trois côtés : additionnez les côtés de l'angle droit, soustrayez l'hypoténuse, divisez par deux.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Pourquoi la formule du rayon inscrit d'un triangle rectangle fonctionne-t-elle ?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formule vient d'un fait simple sur les tangentes : les deux segments de tangente tracés depuis un même point extérieur à un cercle vers ce cercle ont des longueurs égales. Chaque sommet du triangle se trouve à l'extérieur du cercle inscrit, et les deux côtés qui se rencontrent à ce sommet sont tous deux tangents au cercle. Les deux segments de tangente issus de chaque sommet sont donc égaux.",
            },
            {
              "kind": "p",
              "text": "Commencez au sommet C de l'angle droit. Les deux côtés qui se rencontrent en C sont les côtés de l'angle droit, et le cercle inscrit touche chaque côté de l'angle droit en un point situé à distance [[r]] de C le long du côté. C'est parce que les deux rayons du centre du cercle inscrit vers les côtés de l'angle droit, avec les deux courts segments le long de ces côtés, forment un carré de côté [[r]] au coin C. Le segment de tangente issu de C le long de chaque côté de l'angle droit a donc une longueur de [[r]].",
            },
            {
              "kind": "p",
              "text": "Regardez maintenant les deux autres sommets. Soit [[x]] la longueur de tangente issue du sommet A le long des côtés, et soit [[y]] la longueur de tangente issue du sommet B. Au sommet A, une tangente court le long du côté [[a]] vers C et l'autre court le long de l'hypoténuse vers B, donc les deux ont une longueur [[x]]. Au sommet B, les deux tangentes ont une longueur [[y]]. Les longueurs des côtés sont alors construites à partir de ces morceaux :",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Additionnez les deux premières équations : [[a+b = 2r+x+y]]. Comme [[x+y = c]], cela devient [[a+b = 2r+c]]. En réarrangeant, on obtient [[2r = a+b-c]], et en divisant par deux on obtient la formule, [[r = \\frac{a+b-c}{2}]]. Chaque étape découle de l'égalité des longueurs de tangente, donc la formule n'est pas un truc à apprendre par cœur, c'est un résultat direct de la façon dont le cercle inscrit touche les côtés.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Comment utiliser le calculateur de rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatorze courtes étapes vous mènent d'un triangle étiqueté à une réponse vérifiée. Les étapes dans l'ordre sont :",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifiez le triangle rectangle de votre problème et vérifiez qu'il possède un angle droit.",
                "Repérez le sommet de l'angle droit, généralement marqué par un petit carré, et appelez-le C.",
                "Identifiez le premier côté a de l'angle droit, l'un des deux côtés qui forment l'angle droit.",
                "Identifiez le second côté b de l'angle droit, l'autre côté qui forme l'angle droit.",
                "Identifiez l'hypoténuse c complète, le côté opposé à l'angle droit.",
                "Vérifiez que c est le côté le plus long. Si ce n'est pas le cas, réétiquetez le schéma avant de continuer.",
                "Vérifiez que les trois côtés satisfont le théorème de Pythagore, [[a^2+b^2 = c^2]].",
                "Choisissez des unités de mesure compatibles et convertissez toute mesure qui utilise une autre unité.",
                "Saisissez le côté a dans le champ Côté a de l'angle droit.",
                "Saisissez le côté b dans le champ Côté b de l'angle droit.",
                "Saisissez l'hypoténuse c dans le champ Hypoténuse c.",
                "Cliquez sur Calculer le rayon inscrit r et lisez le résultat.",
                "Vérifiez le résultat : il doit être positif, dans la même unité que les côtés, et plus petit que chaque côté de l'angle droit.",
                "Utilisez Réinitialiser quand vous commencez un autre calcul.",
              ],
            },
            {
              "kind": "p",
              "text": "Saisir le mauvais côté comme [[c]] est l'erreur qui cause le plus de problèmes. Si un côté de l'angle droit est saisi dans le champ de l'hypoténuse, la formule soustrait un côté de l'angle droit au lieu de l'hypoténuse, et la réponse est trop grande. Vérifiez toujours que la valeur dans le champ de l'hypoténuse est la plus longue des trois avant de cliquer sur Calculer.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemple étape par étape pour trouver le rayon inscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Prenez l'exemple du haut de la page, [[a = 6]], [[b = 8]] et [[c = 10]]. Les cinq étapes ci-dessous montrent tout le calcul, sans rien sauter.",
            },
            {
              "kind": "steps",
              "steps": [
                "Écrivez la formule : [[r = \\frac{a+b-c}{2}]].",
                "Remplacez par les valeurs : [[r = \\frac{6+8-10}{2}]].",
                "Additionnez les côtés de l'angle droit : [[r = \\frac{14-10}{2}]].",
                "Soustrayez l'hypoténuse : [[r = \\frac{4}{2}]].",
                "Divisez : [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "La réponse 2 signifie que le cercle inscrit a un rayon de 2 unités, dans la même unité que les côtés. Son centre se trouve à 2 unités de chaque côté, et le cercle touche chaque côté en exactement un point.",
            },
            {
              "kind": "p",
              "text": "Vérifiez que les mesures forment un triangle rectangle avant de faire confiance à la réponse : [[6^2+8^2 = 36+64 = 100 = 10^2]], donc le théorème de Pythagore est vérifié et le triangle est bien rectangle. Un second contrôle utilise l'aire et le demi-périmètre, [[A = \\frac{6 \\times 8}{2} = 24]] et [[s = \\frac{6+8+10}{2} = 12]], ce qui donne [[r = \\frac{24}{12} = 2]], la même réponse par un autre chemin.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Exemple détaillé avec a égal à 6, b égal à 8, c égal à 10 et le rayon inscrit r égal à 2, cercle inscrit touchant les trois côtés",
            "caption": "Exemple détaillé : a = 6, b = 8, c = 10 donnent r = 2, vérifié par l'aire et le demi-périmètre.",
          },
        },
        "sec-diagram": {
          "h2": "Schéma du cercle inscrit d'un triangle rectangle expliqué",
          "blocks": [
            {
              "kind": "p",
              "text": "Le schéma montre le triangle ABC avec l'angle droit en C. Le côté AC est le côté [[a]] de l'angle droit, le côté BC est le côté [[b]] de l'angle droit et le côté AB est l'hypoténuse [[c]]. Le point [[I]] marque le centre du cercle inscrit à l'intérieur du triangle, et un cercle centré en [[I]] touche les trois côtés.",
            },
            {
              "kind": "p",
              "text": "Lisez le schéma dans cet ordre. Partez de A, suivez le côté [[a]] de l'angle droit jusqu'à C, puis le côté [[b]] de l'angle droit jusqu'à B, puis revenez le long de l'hypoténuse de B à A. Le cercle inscrit se trouve à l'intérieur de cette frontière, touchant le côté [[a]] en un point, le côté [[b]] en un second point et l'hypoténuse en un troisième point. Depuis [[I]], trois courts segments courent vers ces trois points, et chacun est un rayon de longueur [[r]].",
            },
            {
              "kind": "p",
              "text": "Chaque rayon rencontre son côté à angle droit, ce qui est la marque d'une tangente : le côté ne fait qu'effleurer le cercle en ce point au lieu de le traverser. Les trois rayons ont la même longueur, ce qui explique pourquoi un seul cercle peut toucher les trois côtés à la fois. Le cercle ne passe par aucun sommet : les sommets se trouvent à l'extérieur du cercle, et les segments de tangente de chaque sommet au cercle sont les longueurs [[r]], [[x]] et [[y]] utilisées dans la démonstration ci-dessus.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Comment calculer le rayon inscrit en utilisant l'aire et le demi-périmètre",
          "blocks": [
            {
              "kind": "p",
              "text": "Il existe une seconde façon de trouver le rayon inscrit, en utilisant l'aire et le demi-périmètre du triangle :",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Ici, [[A]] est l'aire du triangle et [[s]] est le demi-périmètre, la moitié du périmètre. Pour un triangle rectangle, l'aire est la moitié du produit des côtés de l'angle droit, [[A = \\frac{ab}{2}]], car les deux côtés de l'angle droit jouent le rôle de base et de hauteur. Le demi-périmètre est [[s = \\frac{a+b+c}{2}]]. Le <a href=\"/right-triangle-area-calculator/\">calculateur d'aire de triangle rectangle</a> trouve [[A]] à partir des deux côtés de l'angle droit, et le <a href=\"/right-triangle-semiperimeter-calculator/\">calculateur de demi-périmètre de triangle rectangle</a> trouve [[s]] à partir des trois côtés.",
            },
            {
              "kind": "p",
              "text": "En remplaçant par les expressions du triangle rectangle, on obtient [[r = \\frac{ab/2}{(a+b+c)/2}]], et les moitiés s'annulent pour laisser [[r = \\frac{ab}{a+b+c}]]. C'est la formule équivalente en longueurs de côtés du début du guide, et elle donne la même réponse que [[r = \\frac{a+b-c}{2}]] pour chaque triangle rectangle valide, car les deux expressions sont égales dès que [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Utilisez le triangle 6-8-10 pour voir que les deux chemins concordent. L'aire est [[A = \\frac{6 \\times 8}{2} = 24]], et le demi-périmètre est [[s = \\frac{6+8+10}{2} = 12]], donc [[r = \\frac{24}{12} = 2]]. La formule standard donne le même résultat, [[r = \\frac{6+8-10}{2} = 2]]. Le calculateur de cette page utilise la formule à trois côtés, et la voie par l'aire est un contrôle indépendant utile.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Triangle rectangle divisé en trois petits triangles partageant le centre du cercle inscrit, montrant que l'aire est égale à r fois s",
            "caption": "Trois triangles partageant I : leurs aires s'additionnent pour donner A = r fois s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Relation entre le rayon inscrit et le demi-périmètre",
          "blocks": [
            {
              "kind": "p",
              "text": "Le demi-périmètre [[s]] est la moitié du périmètre du triangle :",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "On l'appelle demi-périmètre parce que demi signifie moitié : le périmètre complet est [[P = a+b+c]], et le demi-périmètre en est la moitié. Ne confondez pas les deux. Le périmètre est la longueur totale autour du triangle, tandis que le demi-périmètre est une valeur auxiliaire plus courte qui apparaît dans les formules d'aire et dans la formule du rayon inscrit [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Le demi-périmètre seul ne peut pas déterminer le rayon inscrit, car la formule [[r = \\frac{A}{s}]] a aussi besoin de l'aire [[A]]. Deux triangles peuvent partager le même demi-périmètre et avoir des aires différentes, et leurs rayons inscrits diffèrent alors aussi. L'aire porte l'information sur la forme que le demi-périmètre laisse de côté. Pour le triangle 6-8-10, [[s = 12]] et [[A = 24]], donc [[r = \\frac{24}{12} = 2]]. Un triangle différent avec [[s = 12]] mais une aire plus petite aurait un rayon inscrit plus petit.",
            },
            {
              "kind": "p",
              "text": "Il existe une façon élégante de voir pourquoi [[A = rs]] est vrai. Joignez le centre du cercle inscrit [[I]] aux trois sommets, ce qui divise le triangle en trois petits triangles. Chaque petit triangle a une hauteur [[r]] et une base égale à un côté du grand triangle, donc leurs aires sont [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] et [[\\frac{rc}{2}]]. En les additionnant, on obtient [[A = \\frac{r(a+b+c)}{2} = r \\times s]], puisque [[s = \\frac{a+b+c}{2}]]. En divisant par [[s]], on obtient [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Exemples détaillés de calcul du rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemple 1 : Triangle 3-4-5 de base",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 3]], [[b = 4]] et [[c = 5]], la formule donne [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Le cercle inscrit a un rayon de 1 unité. Vérifiez d'abord le triangle : [[3^2+4^2 = 9+16 = 25 = 5^2]], donc c'est un triangle rectangle valide.",
            },
            {
              "kind": "h3",
              "text": "Exemple 2 : Triangle 6-8-10",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 6]], [[b = 8]] et [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Le cercle inscrit a un rayon de 2 unités, soit le double du rayon du triangle 3-4-5, car ce triangle est le triangle 3-4-5 agrandi d'un facteur 2. Vérification : [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 3 : Triangle 5-12-13",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 5]], [[b = 12]] et [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Le rayon inscrit est de 2 unités, le même que pour le triangle 6-8-10, même si le triangle est plus grand et de forme différente. Vérification : [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 4 : Triangle 8-15-17",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 8]], [[b = 15]] et [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Le cercle inscrit a un rayon de 3 unités. Vérification : [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 5 : Mesures plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 9]], [[b = 12]] et [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. C'est le triangle 3-4-5 agrandi par 3, donc le rayon inscrit est 3 fois le rayon inscrit de 1 du triangle 3-4-5. Vérification : [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 6 : Mesures décimales",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 4.5]], [[b = 6]] et [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Le rayon inscrit est de 1,5 unité. Les décimales ne changent rien à la méthode : additionnez, soustrayez, divisez par deux. Vérification : [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemple 7 : Unités différentes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 30]] cm, [[b = 40]] cm et [[c = 0.5]] m, convertissez d'abord l'hypoténuse : 0,5 m égale 50 cm, car 1 m vaut 100 cm. Maintenant les trois côtés utilisent les centimètres, donc [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Vérification : [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mélanger les mètres et les centimètres sans convertir donnerait une mauvaise réponse, donc convertissez toujours d'abord.",
            },
            {
              "kind": "h3",
              "text": "Exemple 8 : Valeurs décimales plus grandes",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 7.2]], [[b = 9.6]] et [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Le rayon inscrit est de 2,4 unités. C'est le triangle 3-4-5 agrandi par 2,4, donc le rayon inscrit est 2,4 fois le rayon inscrit de 1 du triangle 3-4-5. Vérification : [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Comment calculer le rayon inscrit quand seuls les deux côtés de l'angle droit sont connus",
          "blocks": [
            {
              "kind": "p",
              "text": "Le calculateur de cette page exige les trois longueurs de côtés, donc il ne peut pas fonctionner avec les deux côtés de l'angle droit seuls. Si seuls [[a]] et [[b]] sont connus, trouvez d'abord l'hypoténuse avec le théorème de Pythagore, puis utilisez la formule du rayon inscrit. Les deux étapes sont :",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Prenez [[a = 6]] et [[b = 8]]. Calculez d'abord l'hypoténuse : [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Puis calculez le rayon inscrit : [[r = \\frac{6+8-10}{2} = 2]]. Le <a href=\"/right-triangle-side-calculator/\">calculateur de côté de triangle rectangle</a> trouve l'hypoténuse manquante à partir de deux côtés de l'angle droit, ce qui est la même première étape que celle utilisée ici, et le <a href=\"/pythagorean-theorem-calculator/\">calculateur du théorème de Pythagore</a> fait le même calcul directement. Ne sautez pas la première étape : saisir un côté de l'angle droit dans le champ de l'hypoténuse donne un rayon inscrit faux, comme le montre la section des erreurs ci-dessous.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Relation entre le rayon inscrit et le rayon circonscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Le rayon inscrit [[r]] et le rayon circonscrit [[R]] sont les deux rayons d'un triangle rectangle, et ils décrivent deux cercles différents. Le rayon inscrit est le rayon du cercle inscrit, le cercle à l'intérieur du triangle qui touche les trois côtés. Le rayon circonscrit est le rayon du cercle circonscrit, le cercle à l'extérieur du triangle qui passe par les trois sommets. Un cercle se trouve à l'intérieur du triangle, l'autre l'entoure.",
            },
            {
              "kind": "p",
              "text": "Pour un triangle rectangle, le rayon circonscrit est [[R = \\frac{c}{2}]], car l'hypoténuse est le diamètre du cercle circonscrit. Le rayon inscrit est [[r = \\frac{a+b-c}{2}]], qui a besoin des trois côtés, car la façon dont le cercle inscrit s'ajuste dépend de la forme du triangle, et non seulement de son côté le plus long. Utilisez le triangle 6-8-10 pour voir la différence en chiffres : [[r = 2]] et [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Les centres diffèrent aussi. Le centre du cercle inscrit se trouve à l'intérieur du triangle, là où se rencontrent les bissectrices des angles, à distance [[r]] de chaque côté. Le centre du cercle circonscrit se trouve au milieu de l'hypoténuse, sur le bord du triangle, à distance [[R]] de chaque sommet. Pour les problèmes sur le cercle circonscrit, utilisez le <a href=\"/right-triangle-circumradius-calculator/\">calculateur de rayon circonscrit d'un triangle rectangle</a>, qui applique directement [[R = \\frac{c}{2}]].",
            },
          ],
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
                "Tangent aux côtés",
                "Passe par les sommets",
              ],
              [
                "Formule pour le triangle rectangle",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Centre",
                "Centre du cercle inscrit",
                "Centre du cercle circonscrit",
              ],
              [
                "Valeur pour 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Triangle rectangle avec le petit cercle inscrit à l'intérieur et le grand cercle circonscrit passant par ses sommets, triangle 6-8-10",
            "caption": "Cercle inscrit (r = 2) à l'intérieur du triangle, cercle circonscrit (R = 5) autour de lui, triangle 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "Comment vérifier votre calcul de rayon inscrit",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatre contrôles indépendants repèrent presque toutes les erreurs. Faites-en au moins un pour chaque réponse, et les quatre quand le problème compte. L'exemple ci-dessous utilise le triangle 6-8-10, avec [[r = 2]], tout au long.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 1 : Formule d'origine",
            },
            {
              "kind": "p",
              "text": "Recalculez avec [[r = \\frac{a+b-c}{2}]] depuis le début, sans regarder votre premier calcul. Ici, [[r = \\frac{6+8-10}{2} = 2]]. Un nouveau calcul repère les fautes du premier, surtout une soustraction faite dans le mauvais ordre.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 2 : Aire et demi-périmètre",
            },
            {
              "kind": "p",
              "text": "Vérifiez avec [[r = \\frac{A}{s}]]. Ici, [[A = \\frac{6 \\times 8}{2} = 24]] et [[s = \\frac{6+8+10}{2} = 12]], donc [[r = \\frac{24}{12} = 2]]. Cette voie utilise la multiplication et la division au lieu de l'addition et de la soustraction, donc elle repère une autre classe d'erreurs.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 3 : Théorème de Pythagore",
            },
            {
              "kind": "p",
              "text": "Vérifiez [[a^2+b^2 = c^2]]. Ici, [[6^2+8^2 = 36+64 = 100 = 10^2]], donc les trois côtés forment un vrai triangle rectangle. Si ce contrôle échoue, la formule du rayon inscrit ne s'applique pas du tout, et aucune valeur de [[r]] tirée d'elle ne peut être fiable.",
            },
            {
              "kind": "h3",
              "text": "Contrôle 4 : Cohérence géométrique",
            },
            {
              "kind": "p",
              "text": "Vérifiez que [[r]] est positif, plus petit que chaque côté de l'angle droit, et dans la bonne unité. Ici, 2 est positif et plus petit que 6 et 8, et l'unité correspond aux côtés. Le cercle doit tenir à l'intérieur du triangle, donc un rayon inscrit plus grand que le côté de l'angle droit le plus court est impossible et signale une erreur, généralement un côté de l'angle droit saisi comme hypoténuse.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriétés importantes du rayon inscrit dans les triangles rectangles",
          "blocks": [
            {
              "kind": "p",
              "text": "Neuf propriétés découlent directement de la formule et de la géométrie du cercle inscrit. Chacune sert aussi de contrôle de bon sens pour une nouvelle réponse.",
            },
            {
              "kind": "list",
              "items": [
                "Le rayon inscrit est toujours positif pour un triangle valide et non dégénéré, car [[a+b]] est toujours supérieur à [[c]].",
                "Le centre du cercle inscrit se trouve à l'intérieur du triangle, là où se rencontrent les trois bissectrices des angles.",
                "Le rayon inscrit est la plus courte distance perpendiculaire du centre du cercle inscrit à chaque côté, et les trois distances sont égales à [[r]].",
                "Le cercle inscrit touche les trois côtés, un point de tangence sur chaque côté.",
                "Les segments de tangente issus d'un même point extérieur ont des longueurs égales, ce qui est le fait dont la formule est tirée.",
                "Augmenter l'échelle globale du triangle augmente le rayon inscrit du même facteur : doubler chaque côté double [[r]], et tripler chaque côté triple [[r]].",
                "Le rayon inscrit n'est pas le même que le rayon circonscrit. Dans un triangle 6-8-10, [[r = 2]] tandis que [[R = 5]].",
                "Le rayon inscrit dépend de la forme du triangle aussi bien que de sa taille : un triangle 5-12-13 et un triangle 6-8-10 ont tous deux [[r = 2]], même si leurs côtés diffèrent.",
                "Le rayon inscrit peut être calculé à partir des longueurs des côtés avec [[r = \\frac{a+b-c}{2}]] ou à partir de l'aire et du demi-périmètre avec [[r = \\frac{A}{s}]], et les deux voies donnent la même réponse.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erreurs fréquentes lors du calcul du rayon inscrit",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Utiliser la formule du rayon circonscrit au lieu de celle du rayon inscrit : [[R = \\frac{c}{2}]] donne 5 pour un triangle 6-8-10, alors que le rayon inscrit est de 2. Les deux formules répondent à des questions différentes.",
                "Saisir c comme un côté de l'angle droit plutôt que comme l'hypoténuse : si 8 est saisi comme c et 10 comme b, la formule donne [[\\frac{6+10-8}{2} = 4]], et non 2. Mettez toujours le côté le plus long dans le champ de l'hypoténuse.",
                "Oublier de soustraire c : additionner les côtés de l'angle droit et diviser par deux, [[\\frac{6+8}{2} = 7]], donne un nombre bien plus grand que le vrai rayon inscrit de 2.",
                "Oublier de diviser par deux : [[6+8-10 = 4]] vaut le double du rayon inscrit. La division par deux fait partie de la formule, ce n'est pas une dernière étape facultative.",
                "Saisir des mesures de côtés invalides : les côtés 3, 4 et 6 ne satisfont pas [[3^2+4^2 = 6^2]], puisque 25 n'est pas égal à 36, donc la formule du rayon inscrit ne s'applique pas à eux.",
                "Ignorer la relation de Pythagore : n'importe quelles trois longueurs peuvent être entrées dans la formule, mais seul un vrai triangle rectangle donne un rayon inscrit qui a du sens. Vérifiez d'abord [[a^2+b^2 = c^2]].",
                "Mélanger les unités de mesure : des côtés de l'angle droit en centimètres et une hypoténuse en mètres produisent une mauvaise réponse. Convertissez chaque mesure dans une seule unité avant de calculer.",
                "Confondre le rayon inscrit et le diamètre : le rayon inscrit est la distance du centre au bord. Le diamètre du cercle inscrit vaut le double du rayon inscrit, donc pour un triangle 6-8-10, il est de 4, et non de 2.",
                "Confondre le centre du cercle inscrit et le centre du cercle circonscrit : le centre du cercle inscrit est à l'intérieur du triangle, là où se rencontrent les bissectrices des angles, tandis que le centre du cercle circonscrit est le milieu de l'hypoténuse. Ce sont des points différents.",
                "Supposer que le cercle inscrit passe par les sommets du triangle : le cercle inscrit touche les côtés et n'atteint jamais un sommet. Le cercle qui passe par les sommets est le cercle circonscrit.",
                "Supposer que le rayon est mesuré le long d'un côté plutôt que perpendiculairement à celui-ci : le rayon inscrit est la distance perpendiculaire du centre du cercle inscrit à un côté, qui est la plus courte distance jusqu'à ce côté.",
                "Arrondir les calculs intermédiaires trop tôt : gardez toute la précision pendant l'addition et la soustraction, et arrondissez seulement la réponse finale. Un arrondi précoce déplace le résultat.",
                "Utiliser seulement deux longueurs de côtés sans calculer l'hypoténuse d'abord : la formule a besoin des trois côtés. Trouvez [[c]] avec le théorème de Pythagore avant de l'utiliser.",
                "Confondre le périmètre et le demi-périmètre : le demi-périmètre est la moitié du périmètre, [[s = \\frac{a+b+c}{2}]]. Utiliser le périmètre complet dans [[r = \\frac{A}{s}]] divise la bonne réponse par deux.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applications pratiques du rayon inscrit d'un triangle rectangle",
          "blocks": [
            {
              "kind": "p",
              "text": "L'usage le plus direct est le travail de géométrie à la maison et en classe, où les problèmes de rayon inscrit vérifient si les élèves savent identifier l'hypoténuse, appliquer [[r = \\frac{a+b-c}{2}]] et vérifier le résultat avec l'aire et le demi-périmètre. Les exercices de construction de cercles utilisent la même idée : à partir d'un triangle rectangle, tracez son cercle inscrit en trouvant le centre du cercle inscrit, là où se rencontrent les bissectrices des angles, et en réglant un compas sur le rayon inscrit.",
            },
            {
              "kind": "p",
              "text": "Le dessin technique utilise le cercle inscrit quand un cercle doit tenir exactement à l'intérieur d'un cadre triangulaire ou quand un coin arrondi doit toucher deux bords d'une forme. La modélisation géométrique et la géométrie analytique utilisent le centre du cercle inscrit comme le point à l'intérieur d'un triangle qui est à égale distance des trois côtés, ce qui est le centre naturel pour une forme inscrite.",
            },
            {
              "kind": "p",
              "text": "Les enseignants utilisent ce sujet comme leçon de transition entre les triangles et les cercles, car le cercle inscrit est l'un des premiers endroits où les deux sujets se rencontrent. Les longueurs de tangente, les bissectrices des angles, l'aire et le demi-périmètre apparaissent tous dans une seule figure, donc le rayon inscrit est un moyen compact de les revoir ensemble. Les vrais projets de conception qui ont besoin d'un cercle inscrit ont aussi besoin de tolérances et de limites de matériau au-delà de cette page, donc traitez le résultat comme la valeur géométrique exacte et ajoutez les marges pratiques séparément.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercices avec réponses",
          "blocks": [
            {
              "kind": "p",
              "text": "Essayez les six problèmes sur papier avant de lire les réponses. Aucune valeur ne reprend les exemples détaillés, et chaque solution est expliquée en entier ci-dessous.",
            },
            {
              "kind": "h3",
              "text": "Problème 1 : Nombre entier simple",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit [[a = 20]] cm et [[b = 21]] cm et une hypoténuse [[c = 29]] cm. Trouvez le rayon inscrit [[r]].",
            },
            {
              "kind": "h3",
              "text": "Problème 2 : Mesure décimale",
            },
            {
              "kind": "p",
              "text": "Avec [[a = 10.5]] m, [[b = 14]] m et [[c = 17.5]] m, trouvez le rayon inscrit [[r]] en mètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 3 : Conversion d'unités",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit [[a = 1.5]] m et [[b = 2]] m et une hypoténuse [[c = 250]] cm. Trouvez le rayon inscrit en mètres.",
            },
            {
              "kind": "h3",
              "text": "Problème 4 : Trouver l'hypoténuse à partir de deux côtés de l'angle droit",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit [[a = 12]] cm et [[b = 16]] cm. Trouvez d'abord l'hypoténuse, puis le rayon inscrit.",
            },
            {
              "kind": "h3",
              "text": "Problème 5 : Aire et demi-périmètre",
            },
            {
              "kind": "p",
              "text": "Un triangle rectangle a des côtés de l'angle droit [[a = 15]] cm et [[b = 20]] cm et une hypoténuse [[c = 25]] cm. Trouvez l'aire et le demi-périmètre, puis trouvez le rayon inscrit avec [[r = \\frac{A}{s}]], et confirmez-le avec la formule à trois côtés.",
            },
            {
              "kind": "h3",
              "text": "Problème 6 : Identifier un triangle rectangle invalide",
            },
            {
              "kind": "p",
              "text": "Un élève reçoit [[a = 7]] cm, [[b = 10]] cm et [[c = 12]] cm et on lui demande le rayon inscrit. Montrez pourquoi ces côtés ne forment pas un triangle rectangle, et expliquez ce que l'élève doit faire au lieu d'appliquer la formule.",
            },
            {
              "kind": "h3",
              "text": "Réponses des exercices",
            },
            {
              "kind": "p",
              "text": "Réponse 1 : [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Vérification : [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Réponse 2 : [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Vérification : [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Réponse 3 : Convertissez l'hypoténuse : 250 cm égalent 2,5 m. Puis [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, soit 50 cm. Vérification : [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Réponse 4 : [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, puis [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 5 : [[A = \\frac{15 \\times 20}{2} = 150]] centimètres carrés et [[s = \\frac{15+20+25}{2} = 30]] cm, donc [[r = \\frac{150}{30} = 5]] cm. La formule à trois côtés est d'accord : [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Réponse 6 : [[7^2+10^2 = 49+100 = 149]], tandis que [[12^2 = 144]], donc [[a^2+b^2]] n'est pas égal à [[c^2]] et le triangle n'est pas rectangle. L'élève ne doit pas appliquer la formule du rayon inscrit : vérifiez d'abord les mesures, et si elles sont correctes, utilisez la formule générale [[r = \\frac{A}{s}]] pour un triangle non rectangle à la place.",
            },
          ],
        },
      },
      "relatedHeading": "Découvrir les calculateurs de triangle rectangle associés",
      "relatedIntro": "Chaque calculateur ci-dessous traite une tâche précise du triangle rectangle, choisissez donc l'outil qui correspond à la mesure que vous devez trouver.",
      "relatedItems": [
        "Calculateur de rayon d'un triangle rectangle",
        "Calculateur de rayon circonscrit d'un triangle rectangle",
        "Calculateur d'aire de triangle rectangle",
        "Calculateur de demi-périmètre de triangle rectangle",
        "Calculateur de côté de triangle rectangle",
      ],
      "faqHeading": "Questions fréquemment posées",
      "faqs": [
        {
          "question": "Quelle est la formule du rayon inscrit d'un triangle rectangle ?",
          "answer": "La formule est [[r = \\frac{a+b-c}{2}]], où [[a]] et [[b]] sont les côtés de l'angle droit, [[c]] est l'hypoténuse et [[r]] est le rayon inscrit. Additionnez les deux côtés de l'angle droit, soustrayez l'hypoténuse et divisez par deux. Par exemple, un triangle 6-8-10 donne un rayon inscrit de 2.",
        },
        {
          "question": "Que représente le rayon inscrit ?",
          "answer": "Le rayon inscrit est le rayon du cercle inscrit, le cercle qui tient à l'intérieur du triangle et touche les trois côtés. C'est la distance perpendiculaire du centre du cercle inscrit à n'importe quel côté. Dans un triangle 6-8-10, le rayon inscrit est de 2, donc le cercle inscrit a un rayon de 2 unités.",
        },
        {
          "question": "Qu'est-ce qu'un cercle inscrit ?",
          "answer": "Un cercle inscrit est un cercle tracé entièrement à l'intérieur d'un triangle de sorte qu'il touche les trois côtés, un point de tangence sur chaque côté. Chaque triangle possède exactement un cercle inscrit. Il est différent du cercle circonscrit, qui passe par les trois sommets à la place.",
        },
        {
          "question": "Où se trouve le centre du cercle inscrit ?",
          "answer": "Le centre du cercle inscrit est le point où se rencontrent les trois bissectrices intérieures du triangle. Il se trouve toujours à l'intérieur du triangle. Dans un triangle rectangle dont l'angle droit est en C, il se trouve le long de la bissectrice de l'angle de 90 degrés, à distance [[r]] de chaque côté.",
        },
        {
          "question": "Pourquoi la formule du rayon inscrit soustrait-elle l'hypoténuse ?",
          "answer": "Les segments de tangente issus du sommet de l'angle droit ont une longueur [[r]], donc les côtés de l'angle droit sont [[a = r+x]] et [[b = r+y]] tandis que l'hypoténuse est [[c = x+y]]. Additionner les côtés de l'angle droit donne [[a+b = 2r+c]], donc soustraire [[c]] laisse [[2r]]. La soustraction élimine les longueurs de tangente partagées et isole le rayon inscrit.",
        },
        {
          "question": "Pourquoi divise-t-on par deux ?",
          "answer": "Additionner les deux côtés de l'angle droit compte le rayon inscrit deux fois, une fois dans chaque côté, car chaque côté de l'angle droit contient un segment de tangente de longueur [[r]] issu du sommet de l'angle droit. La somme [[a+b-c]] vaut donc [[2r]], et non [[r]], donc diviser par deux donne le rayon inscrit unique.",
        },
        {
          "question": "Puis-je calculer le rayon inscrit en utilisant seulement les deux côtés de l'angle droit ?",
          "answer": "Pas directement, car la formule a aussi besoin de l'hypoténuse. Trouvez d'abord l'hypoténuse avec [[c = \\sqrt{a^2+b^2}]], puis utilisez [[r = \\frac{a+b-c}{2}]]. Pour des côtés de 6 et 8, l'hypoténuse est de 10 et le rayon inscrit est de 2. Utilisez le calculateur de côté pour trouver une hypoténuse manquante.",
        },
        {
          "question": "Puis-je calculer le rayon inscrit en utilisant l'aire et le demi-périmètre ?",
          "answer": "Oui. La formule est [[r = \\frac{A}{s}]], où [[A]] est l'aire et [[s]] est le demi-périmètre. Pour un triangle rectangle, [[A = \\frac{ab}{2}]] et [[s = \\frac{a+b+c}{2}]]. Pour un triangle 6-8-10, [[A = 24]] et [[s = 12]], donc [[r = 2]]. Le calculateur de cette page utilise la formule à trois côtés, donc traitez la voie par l'aire comme un contrôle indépendant.",
        },
        {
          "question": "Le rayon inscrit est-il le même que le rayon circonscrit ?",
          "answer": "Non. Le rayon inscrit est le rayon du cercle à l'intérieur du triangle qui touche ses côtés, [[r = \\frac{a+b-c}{2}]], tandis que le rayon circonscrit est le rayon du cercle qui passe par les sommets, [[R = \\frac{c}{2}]]. Dans un triangle 6-8-10, ils valent 2 et 5.",
        },
        {
          "question": "Le rayon inscrit peut-il être plus grand que le côté de l'angle droit le plus court d'un triangle ?",
          "answer": "Non. Le rayon inscrit est toujours plus petit que chaque côté de l'angle droit, car le cercle inscrit doit tenir à l'intérieur du triangle. Dans un triangle 3-4-5, le rayon inscrit est de 1, plus petit que le côté de l'angle droit le plus court, qui est de 3. Une réponse plus grande que le côté de l'angle droit le plus court signale une erreur, généralement un côté de l'angle droit saisi comme hypoténuse.",
        },
        {
          "question": "Pourquoi l'hypoténuse doit-elle être le côté le plus long ?",
          "answer": "L'hypoténuse est opposée à l'angle droit, le plus grand angle du triangle, et le côté le plus long se trouve toujours en face du plus grand angle. Le théorème de Pythagore l'impose aussi : [[c^2 = a^2+b^2]] est plus grand que [[a^2]] ou [[b^2]] seul, donc [[c]] est plus long que [[a]] et plus long que [[b]].",
        },
        {
          "question": "Comment puis-je vérifier si mon calcul de rayon inscrit est correct ?",
          "answer": "Recalculez avec la formule d'origine, puis vérifiez avec l'aire et le demi-périmètre, [[r = \\frac{A}{s}]], et confirmez [[a^2+b^2 = c^2]] pour les côtés. Vérifiez aussi que la réponse est positive, plus petite que chaque côté de l'angle droit, et dans la même unité que les côtés. Si les quatre contrôles concordent, la réponse est solide.",
        },
      ],
    },
};
