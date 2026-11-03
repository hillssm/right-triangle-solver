// areaFromSemiperimeterGuideTranslations.batch2.ts: Right Triangle Area From Semiperimeter Guide (Page 23 of 45) translations for French (fr), German (de), and Italian (it).
export const AREA_FROM_SEMIPERIMETER_TRANSLATIONS_BATCH2 = {
  "fr": {
    "faqs": [
      {
        "question": "Quelle est la formule de l'aire d'un triangle rectangle à partir du rayon inscrit et du demi-périmètre ?",
        "answer": "K = r × s, où r est le rayon inscrit (le rayon du cercle inscrit) et s le demi-périmètre (la moitié du périmètre). Multipliez les deux et le produit est l'aire, sans aucune division. Pour r = 1 et s = 6, K = 1 × 6 = 6 unités carrées. Les deux entrées doivent décrire le même triangle."
      },
      {
        "question": "Qu'est-ce que le rayon inscrit ?",
        "answer": "Le rayon inscrit est le rayon du cercle inscrit, le cercle qui tient exactement à l'intérieur du triangle en touchant ses trois côtés. Il égale la distance perpendiculaire entre le centre du cercle inscrit, où se rencontrent les trois bissectrices des angles, et n'importe quel côté. Pour un triangle rectangle de cathètes a et b et d'hypoténuse c, il existe le raccourci r = (a + b - c) / 2."
      },
      {
        "question": "Quelle est la différence entre le rayon inscrit et le rayon circonscrit ?",
        "answer": "Le rayon inscrit appartient au cercle à l'intérieur du triangle, tangent aux trois côtés ; le rayon circonscrit appartient au cercle qui passe par les trois sommets. Ils mesurent des cercles différents, donc leurs valeurs diffèrent. Pour un triangle rectangle, le rayon circonscrit est R = c/2, exactement la moitié de l'hypoténuse, tandis que le rayon inscrit est (a + b - c)/2."
      },
      {
        "question": "Comment calculer le demi-périmètre d'un triangle rectangle ?",
        "answer": "Additionnez les trois côtés et divisez par deux : s = (a + b + c) / 2. Pour un triangle 3-4-5, s = (3 + 4 + 5) / 2 = 6. Le demi-périmètre est la moitié du périmètre complet, donc saisir le périmètre entier par erreur double l'aire quand on utilise K = r × s."
      },
      {
        "question": "Comment trouver le rayon inscrit à partir des trois longueurs de côtés ?",
        "answer": "Pour un triangle rectangle, utilisez le raccourci r = (a + b - c) / 2, où a et b sont les cathètes et c l'hypoténuse. Avec les côtés 5, 12, 13 : r = (5 + 12 - 13) / 2 = 2. Ce raccourci ne s'applique qu'aux triangles rectangles ; les autres triangles ont besoin de la relation générale r = K / s."
      },
      {
        "question": "Pourquoi l'aire est-elle égale au rayon inscrit multiplié par le demi-périmètre ?",
        "answer": "En joignant le centre du cercle inscrit aux trois sommets, le triangle se divise en trois triangles plus petits, chacun ayant pour base un côté et pour hauteur r. Leurs aires sont ar/2, br/2 et cr/2. En les additionnant, on obtient r(a + b + c)/2, et comme s = (a + b + c)/2, le total est r × s."
      },
      {
        "question": "La formule fonctionne-t-elle pour tous les triangles ?",
        "answer": "Oui. Tout triangle non dégénéré possède un cercle inscrit et un centre de ce cercle, donc la décomposition en trois triangles vaut pour les triangles rectangles, acutangles et obtusangles. Le triangle rectangle est simplement plus facile parce que son rayon inscrit se déduit des côtés par r = (a + b - c) / 2. Le rayon inscrit général vient toujours de r = K / s."
      },
      {
        "question": "Le demi-périmètre est-il la même chose que le périmètre ?",
        "answer": "Non. Le demi-périmètre est exactement la moitié du périmètre : s = P/2. Pour un triangle 3-4-5, le périmètre est 12 et le demi-périmètre est 6. Saisir le périmètre complet dans K = r × s donne 1 × 12 = 12, le double de l'aire correcte de 6. Divisez le périmètre par deux avant de multiplier."
      },
      {
        "question": "Dois-je diviser la réponse finale par deux ?",
        "answer": "Non. La formule K = r × s tient déjà compte de chaque division : les moitiés issues des trois petits triangles sont absorbées dans le demi-périmètre. Diviser à nouveau après la multiplication est l'erreur la plus fréquente. Avec r = 1 et s = 6, l'aire correcte est 6, tandis que (1 × 6) / 2 = 3 est faux."
      },
      {
        "question": "Quel est le lien entre la formule de Héron et la formule du rayon inscrit ?",
        "answer": "Toutes deux calculent la même aire mais partent d'entrées différentes. La formule de Héron, K = sqrt(s(s - a)(s - b)(s - c)), a besoin des trois côtés ; K = r × s a besoin du rayon inscrit et du demi-périmètre. Pour un triangle 3-4-5, les deux donnent 6, ce qui fait de chaque formule un bon contrôle de l'autre."
      },
      {
        "question": "Puis-je utiliser des valeurs décimales pour le rayon inscrit et le demi-périmètre ?",
        "answer": "Oui. La formule traite les décimales exactement comme les nombres entiers. Avec r = 2.5 et s = 8.4, K = 2.5 × 8.4 = 21 unités carrées. Gardez la pleine précision pendant la multiplication et n'arrondissez que la réponse finale, selon la précision des mesures."
      },
      {
        "question": "Comment vérifier que mon rayon inscrit et mon demi-périmètre sont corrects ?",
        "answer": "Vérifiez que les deux sont positifs et que s est nettement plus grand que r. Si les côtés sont connus, recalculez s = (a + b + c)/2 et r = (a + b - c)/2, puis contrôlez l'aire avec K = ab/2 et la formule de Héron. L'accord entre les méthodes est une preuve solide. Des valeurs issues de triangles différents donnent un nombre qui n'est pas la vraie aire."
      }
    ],
    "relatedHeading": "Explorer les calculateurs de triangles rectangles associés",
    "relatedItems": [
      "Calculateur d'aire de triangle rectangle à partir des cathètes",
      "Calculateur de demi-périmètre de triangle rectangle",
      "Calculateur d'aire de triangle rectangle à partir de la hauteur",
      "Calculateur d'aire de triangle rectangle à partir d'un angle",
      "Calculateur de périmètre de triangle rectangle",
      "Calculateur d'aire de triangle rectangle"
    ],
    "relatedIntro": "Des mesures différentes appellent des calculateurs différents.",
    "faqHeading": "Questions fréquentes",
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer l'aire d'un triangle rectangle à partir de son rayon inscrit et de son demi-périmètre",
      "sec-right-triangle": "Qu'est-ce qu'un triangle rectangle ?",
      "sec-incircle": "Comprendre le cercle inscrit d'un triangle rectangle",
      "sec-semiperimeter": "Comprendre le demi-périmètre d'un triangle",
      "sec-formula": "Pourquoi l'aire d'un triangle est-elle égale au rayon inscrit fois le demi-périmètre ?",
      "sec-inradius": "Comment calculer le rayon inscrit d'un triangle rectangle",
      "sec-howto": "Comment utiliser le calculateur d'aire de triangle rectangle à partir du demi-périmètre",
      "sec-examples": "Exemples pas à pas de l'aire d'un triangle rectangle avec le rayon inscrit et le demi-périmètre",
      "sec-practical": "Applications concrètes de l'aire d'un triangle rectangle à partir du rayon inscrit et du demi-périmètre",
      "sec-legs-comparison": "Pourquoi la formule du rayon inscrit donne-t-elle la même aire que la formule des cathètes ?",
      "sec-heron": "Quelle est la différence entre la formule de Héron et Aire = rayon inscrit × demi-périmètre ?",
      "sec-consistency": "Comment vérifier que le rayon inscrit et le demi-périmètre sont valides",
      "sec-units": "Comment les unités de mesure influencent les calculs de rayon inscrit et de demi-périmètre",
      "sec-mistakes": "Erreurs fréquentes dans le calcul de l'aire d'un triangle rectangle à partir du demi-périmètre",
      "sec-verify": "Comment vérifier que votre aire de triangle rectangle est correcte",
      "sec-applications": "Applications pratiques de la formule du rayon inscrit et du demi-périmètre",
      "sec-related": "Explorer les calculateurs de triangles rectangles associés",
      "sec-faq": "Questions fréquentes",
      "sec-conclusion": "Deux mesures, un produit"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer l'aire d'un triangle rectangle à partir de son rayon inscrit et de son demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Prenez [[r=1]], [[s=6]]. Appliquez [[K=r\\times s]] : [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Le résultat nomme la surface plane totale enfermée par les trois côtés du triangle : six unités carrées. C'est exactement ce que le calculateur d'aire de triangle rectangle à partir du demi-périmètre renvoie pour ces deux entrées." },
          { "kind": "p", "text": "Le rayon inscrit est le rayon du cercle logé à l'intérieur du triangle, tangent aux trois côtés. Le demi-périmètre est la moitié de la longueur du contour : le total des trois côtés divisé par deux. Deux mesures suffisent parce que le rayon inscrit sert de hauteur perpendiculaire commune à trois triangles plus petits construits depuis le centre du cercle inscrit, tandis que le demi-périmètre rassemble leurs bases en un seul facteur." },
          { "kind": "p", "text": "Le raisonnement vaut pour tout triangle, car chacun possède un cercle inscrit. Le triangle rectangle ajoute un bonus : son rayon inscrit se déduit des trois côtés par une formule courte, donc r et s sont souvent déjà connus. Cette méthode brille dans les problèmes où le cercle inscrit ou le demi-périmètre est donné, puisqu'aucune cathète ni aucun angle n'a besoin d'être mesuré." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Qu'est-ce qu'un triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avant que le cercle inscrit n'entre en scène, le triangle lui-même doit être étiqueté sans erreur. Les symboles ci-dessous restent fixes dans tout le guide, et le calculateur utilise les mêmes noms." },
          { "kind": "h3", "text": "Définition d'un triangle rectangle" },
          { "kind": "p", "text": "Un triangle rectangle est un polygone à trois côtés contenant exactement un angle intérieur de 90 degrés. Il a trois sommets, trois côtés, deux angles aigus, et un angle droit généralement marqué par un petit carré. Les deux côtés qui forment l'angle droit sont les cathètes ; le côté opposé est l'hypoténuse. Puisque [[C=90^\\circ]], il s'ensuit que [[[\\boxed{A+B=90^\\circ}]]] : les deux angles aigus sont complémentaires, donc connaître l'un détermine l'autre." },
          { "kind": "h3", "text": "Comprendre les deux cathètes" },
          { "kind": "p", "text": "La cathète [[a]] est opposée à l'angle [[A]] ; la cathète [[b]] est opposée à l'angle [[B]]. Les deux cathètes se rencontrent au sommet de l'angle droit et sont perpendiculaires entre elles. Elles contribuent directement à l'aire, car chaque cathète peut servir de base pendant que l'autre sert de hauteur perpendiculaire. Pour cette page, elles alimentent aussi le rayon inscrit, puisque le raccourci [[r=\\frac{a+b-c}{2}]] est construit à partir des deux cathètes et de l'hypoténuse." },
          { "kind": "h3", "text": "Comprendre l'hypoténuse" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle de 90 degrés, toujours le côté le plus long du triangle. Elle ne forme jamais l'angle droit ; elle s'étend en face de lui. Dans la formule d'aire par les cathètes, elle ne joue aucun rôle, mais ici elle compte : l'hypoténuse entre à la fois dans le demi-périmètre [[s=\\frac{a+b+c}{2}]] et dans le raccourci du rayon inscrit [[r=\\frac{a+b-c}{2}]]. Si les deux cathètes sont connues, le théorème de Pythagore la retrouve par [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Qu'est-ce qui distingue ce triangle des autres triangles ?" },
          { "kind": "p", "text": "Le coin à 90 degrés est toute l'histoire. Il rend les cathètes perpendiculaires sans aucune construction, ce qui simplifie la formule d'aire standard, et il rend les segments de tangence du cercle inscrit près de l'angle droit égaux au rayon inscrit lui-même, ce qui simplifie la formule du rayon inscrit. Les autres triangles vérifient toujours [[K=r\\times s]], mais trouver leur rayon inscrit exige généralement l'aire d'abord. Le triangle rectangle est le seul cas où le rayon inscrit découle directement des longueurs des côtés." }
        ]
      },
      "sec-incircle": {
        "h2": "Comprendre le cercle inscrit d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le rayon inscrit n'a de sens que si le cercle inscrit est clairement visualisé. Cette section construit l'idée à partir du cercle lui-même jusqu'aux points de tangence où le rayon rencontre chaque côté." },
          { "kind": "h3", "text": "Définition d'un cercle inscrit" },
          { "kind": "p", "text": "Un cercle inscrit est un cercle placé à l'intérieur d'un triangle de façon à toucher ses trois côtés. Il se tient à l'intérieur, tangent à chaque côté en exactement un point, et il ne peut pas traverser un côté parce que la tangence le maintient en place. Tout triangle non dégénéré possède exactement un cercle inscrit : rétrécissez un cercle dans les régions des coins et il n'existe qu'une seule taille maximale qui embrasse les trois côtés. Les trois points de tangence, un par côté, sont les endroits où le rayon inscrit sera mesuré plus tard." },
          { "kind": "h3", "text": "Qu'est-ce que le centre du cercle inscrit ?" },
          { "kind": "p", "text": "Le centre du cercle inscrit, noté [[I]], est le point où se rencontrent les trois bissectrices intérieures des angles. Chaque bissectrice partage un angle de coin en deux parties égales, et tout point d'une bissectrice se trouve à égale distance perpendiculaire des deux côtés qui forment cet angle. L'intersection des trois bissectrices se trouve donc à égale distance des trois côtés, ce qui explique pourquoi elle peut servir de centre à un cercle touchant chaque côté. Le centre du cercle inscrit se trouve à l'intérieur de tout triangle valide, jamais sur un bord ni à l'extérieur." },
          { "kind": "h3", "text": "Qu'est-ce que le rayon inscrit ?" },
          { "kind": "p", "text": "Le rayon inscrit est la distance perpendiculaire entre le centre du cercle inscrit et n'importe quel côté du triangle : [[[\\boxed{r=\\text{distance from the incenter to a side}}]]]. Puisque le centre du cercle inscrit est équidistant des trois côtés, la valeur est la même quel que soit le côté choisi. Ce seul nombre est le rayon du cercle inscrit, la longueur de chacun des trois courts segments tracés du centre aux points de tangence, et la hauteur commune qui fait fonctionner la preuve d'aire dans une section ultérieure." },
          { "kind": "h3", "text": "Comprendre la relation de tangence" },
          { "kind": "p", "text": "Un rayon tracé vers un point de tangence est perpendiculaire au côté qu'il touche. Appliqué aux trois points de contact, cela donne [[r\\perp a]], [[r\\perp b]] et [[r\\perp c]]. Chaque énoncé décrit un coin différent du schéma : le rayon se terminant sur la cathète a est perpendiculaire à la cathète a, et de même pour la cathète b et l'hypoténuse. Cette perpendicularité n'est pas décorative ; c'est la propriété qui permet à chaque rayon de jouer le rôle de hauteur de l'un des trois triangles plus petits dans la preuve d'aire." },
          { "kind": "h3", "text": "Différence entre cercle inscrit et cercle circonscrit" },
          { "kind": "p", "text": "Le cercle inscrit vit à l'intérieur du triangle et touche ses trois côtés ; le cercle circonscrit passe par les trois sommets et enferme le triangle. Leurs rayons sont des mesures différentes et ne doivent jamais être échangés. Pour un triangle rectangle, le rayon circonscrit a sa propre règle simple, [[[\\boxed{R=\\frac{c}{2}}]]], parce que l'hypoténuse est un diamètre du cercle circonscrit : le milieu de l'hypoténuse est le centre du cercle circonscrit. Le rayon inscrit [[r]] est le plus petit des deux et appartient au cercle intérieur." }
        ],
        "imgAlt": "Triangle rectangle ABC avec son cercle inscrit : centre I du cercle inscrit, trois points de tangence, rayons perpendiculaires de longueur r",
        "figcaption": "Triangle ABC avec son cercle inscrit : trois rayons perpendiculaires, chacun de longueur r."
      },
      "sec-semiperimeter": {
        "h2": "Comprendre le demi-périmètre d'un triangle",
        "blocks": [
          { "kind": "p", "text": "Le demi-périmètre ressemble à une simple demi-mesure, et pourtant il porte l'essentiel du calcul d'aire. Comprendre pourquoi la géométrie revient sans cesse à la moitié du périmètre prépare le terrain pour la preuve." },
          { "kind": "h3", "text": "Définition du demi-périmètre" },
          { "kind": "p", "text": "Le demi-périmètre est exactement la moitié du périmètre total : [[[\\boxed{s=\\frac{P}{2}}]]]. Pour un triangle, cela devient [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Le périmètre [[P]] est la longueur complète du contour, la somme des trois côtés ; le demi-périmètre est cette somme divisée par deux. Les deux sont liés par [[P=2s]], et les confondre est l'erreur de saisie la plus coûteuse de cette page." },
          { "kind": "h3", "text": "Comment calculer le demi-périmètre" },
          { "kind": "p", "text": "Prenez [[a=3]], [[b=4]], [[c=5]]. Additionnez d'abord les trois côtés, puis divisez une seule fois : [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. L'addition doit précéder la division parce que le demi-périmètre divise par deux tout le contour, et non chaque côté séparément. Additionner après avoir divisé donnerait le même nombre ici, mais la formule [[s=\\frac{a+b+c}{2}]] indique le bon ordre : sommez le contour, puis divisez-le par deux." },
          { "kind": "h3", "text": "Pourquoi le demi-périmètre est-il utilisé plutôt que le périmètre complet ?" },
          { "kind": "p", "text": "Les formules d'aire des triangles produisent sans cesse des moitiés : chaque petit triangle de la preuve apporte une division par deux, et le demi-périmètre les absorbe toutes d'un coup. C'est la variable naturelle de la formule de Héron, de la relation du rayon inscrit [[r=\\frac{K}{s}]] et de la preuve qui suit. Entrer le périmètre complet doublerait au lieu le résultat, parce que [[K=r\\times P=2rs]] vaut deux fois la vraie aire. Le calculateur demande [[s]], et non [[P]], précisément pour que la multiplication n'ait besoin d'aucun ajustement ultérieur." },
          { "kind": "h3", "text": "Le demi-périmètre peut-il être plus petit que le côté le plus long ?" },
          { "kind": "p", "text": "Non. L'inégalité triangulaire exige [[a+b>c]] : les deux côtés les plus courts réunis doivent dépasser le côté le plus long, sinon le triangle ne peut pas se fermer. Ajouter [[c]] des deux côtés donne [[a+b+c>2c]], et diviser par deux donne [[\\frac{a+b+c}{2}>c]], c'est-à-dire [[s>c]]. Le demi-périmètre dépasse toujours le côté le plus long dans un triangle valide. Si un demi-périmètre annoncé est plus petit que l'hypoténuse, les entrées ne peuvent pas décrire un vrai triangle." }
        ]
      },
      "sec-formula": {
        "h2": "Pourquoi l'aire d'un triangle est-elle égale au rayon inscrit fois le demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "Commencez par la règle générale [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Joignez le centre du cercle inscrit [[I]] aux trois sommets. Le triangle se divise en trois triangles plus petits, chacun utilisant un côté d'origine comme base et le rayon inscrit comme hauteur perpendiculaire. Le reste de cette section calcule chaque morceau et les additionne, pour que [[K=r\\times s]] soit vu, et non seulement mémorisé." },
          { "kind": "h3", "text": "Aire du premier triangle plus petit" },
          { "kind": "p", "text": "Le triangle construit sur le côté [[a]] a pour base [[a]] et pour hauteur [[r]], parce que le rayon rencontre le côté [[a]] perpendiculairement à son point de tangence. Son aire est donc [[K_1=\\frac{ar}{2}]]. Rien à propos de l'angle droit n'est encore utilisé ; cette étape vaut pour le côté de n'importe quel triangle." },
          { "kind": "h3", "text": "Aire du deuxième triangle plus petit" },
          { "kind": "p", "text": "Le triangle construit sur le côté [[b]] suit le même schéma : base [[b]], hauteur perpendiculaire [[r]], aire [[K_2=\\frac{br}{2}]]. La hauteur est à nouveau le même nombre [[r]], parce que le centre du cercle inscrit est équidistant de chaque côté. Cette hauteur commune est la clé de toute la preuve." },
          { "kind": "h3", "text": "Aire du troisième triangle plus petit" },
          { "kind": "p", "text": "Le triangle construit sur le côté [[c]] complète l'ensemble : [[K_3=\\frac{cr}{2}]]. Les trois petits triangles pavent le triangle d'origine exactement, sans chevauchement ni vide : chaque point de l'original se trouve dans l'un d'eux, puisque les segments du centre du cercle inscrit aux sommets partitionnent l'intérieur." },
          { "kind": "h3", "text": "Additionner les trois aires" },
          { "kind": "p", "text": "Additionnez les morceaux : [[K=K_1+K_2+K_3]]. En substituant, on obtient [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Factorisez [[r]] dans la somme : [[K=\\frac{r(a+b+c)}{2}]]. Rappelez-vous que [[s=\\frac{a+b+c}{2}]], donc la fraction entre crochets est exactement le demi-périmètre, et [[[\\boxed{K=r\\times s}]]]. Chaque division par deux issue des trois petits triangles a été absorbée dans le demi-périmètre, ce qui explique pourquoi la multiplication finale n'a besoin d'aucune division supplémentaire." },
          { "kind": "h3", "text": "Pourquoi cette formule fonctionne-t-elle pour tout triangle ?" },
          { "kind": "p", "text": "Tout triangle non dégénéré possède un cercle inscrit et un centre de ce cercle, et la distance perpendiculaire du centre aux trois côtés est le même nombre [[r]]. La décomposition en trois triangles n'utilise rien d'autre : ni angle droit, ni longueurs de côtés particulières, ni forme spéciale. Que le triangle soit rectangle, acutangle ou obtusangle, le centre du cercle inscrit se joint aux sommets et la même algèbre aboutit à [[K=r\\times s]]. La formule est une propriété des triangles en général, ce qui explique pourquoi les manuels de géométrie la prouvent une fois et l'utilisent partout." },
          { "kind": "h3", "text": "Pourquoi cette formule est-elle particulièrement utile pour les triangles rectangles ?" },
          { "kind": "p", "text": "L'identité reste la même, mais le rayon inscrit devient facile. Dans un triangle général, le rayon inscrit se trouve généralement à partir de l'aire elle-même par [[r=\\frac{K}{s}]], ce qui est circulaire si l'aire est le but. Un triangle rectangle échappe au cercle : son rayon inscrit découle directement des côtés via [[r=\\frac{a+b-c}{2}]], démontré dans la section suivante. Cela fait de [[K=r\\times s]] une véritable méthode de travail pour les triangles rectangles plutôt qu'une définition réarrangée." }
        ],
        "imgAlt": "Triangle découpé depuis le centre I du cercle inscrit en trois triangles plus petits de hauteur r, prouvant K = r fois s",
        "figcaption": "Trois triangles plus petits partagent la hauteur r ; leurs aires s'additionnent pour donner r fois s."
      },
      "sec-inradius": {
        "h2": "Comment calculer le rayon inscrit d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Pour un triangle rectangle de cathètes [[a]] et [[b]] et d'hypoténuse [[c]], le rayon inscrit est [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Ce raccourci est propre aux triangles rectangles. La preuve ci-dessous n'utilise que la propriété des segments de tangence des cercles, et les exemples traités le montrent en action." },
          { "kind": "h3", "text": "Pourquoi la formule du rayon inscrit fonctionne-t-elle ?" },
          { "kind": "p", "text": "Les segments de tangence tracés d'un même point extérieur à un cercle ont des longueurs égales. Le cercle inscrit touche les deux cathètes, et les deux rayons vers ces points de contact rencontrent les côtés à angle droit. Avec l'angle droit au sommet, la région du coin forme un carré de côté [[r]], donc les distances du sommet de l'angle droit aux deux points de tangence des cathètes valent chacune [[r]]. Appelez le segment de tangence restant sur la cathète a [[x]] et celui restant sur la cathète b [[y]]. Les deux segments de tangence issus de chaque sommet aigu sont égaux, donc l'hypoténuse se divise en les mêmes [[x]] et [[y]]. Par conséquent [[a=r+x]], [[b=r+y]] et [[c=x+y]]. Additionnez les deux premières équations : [[a+b=2r+x+y]]. Comme [[x+y=c]], cela devient [[a+b=2r+c]], et en réarrangeant on obtient [[[\\boxed{r=\\frac{a+b-c}{2}}]]]." },
          { "kind": "h3", "text": "Exemple traité : triangle 3-4-5" },
          { "kind": "p", "text": "Donnés [[a=3]], [[b=4]], [[c=5]] : substituez dans le raccourci, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. Le cercle inscrit du triangle 3-4-5 a un rayon de 1, ce qui correspond à l'exemple d'introduction où [[r=1]] et [[s=6]] donnaient [[K=6]]." },
          { "kind": "h3", "text": "Exemple traité : triangle 5-12-13" },
          { "kind": "p", "text": "Donnés [[a=5]], [[b=12]], [[c=13]] : alors [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. Associé à [[s=\\frac{5+12+13}{2}=15]], l'aire suit comme [[K=2\\times15=30]], confirmé par la formule des cathètes [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Une formule alternative pour le rayon inscrit" },
          { "kind": "p", "text": "Le raccourci peut aussi s'écrire [[[\\boxed{r=\\frac{ab}{a+b+c}}]]]. Ce n'est pas une seconde formule sans rapport. Partez de [[K=rs]] et [[K=\\frac{ab}{2}]], donc [[rs=\\frac{ab}{2}]]. Comme [[s=\\frac{a+b+c}{2}]], la substitution donne [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], et en simplifiant les moitiés il reste [[r=\\frac{ab}{a+b+c}]]. Elle doit s'accorder avec [[r=\\frac{a+b-c}{2}]] : vérifiez avec 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], le même rayon. Algébriquement, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] pour un triangle rectangle, donc les deux formes sont identiques." },
          { "kind": "h3", "text": "Ce raccourci du rayon inscrit fonctionne-t-il pour tout triangle ?" },
          { "kind": "p", "text": "Non. La dérivation s'appuyait sur l'angle droit : le carré de coin de côté [[r]] n'existe que parce que les deux cathètes se rencontrent à 90 degrés. Pour un triangle général, le rayon inscrit doit venir de [[[\\boxed{r=\\frac{K}{s}}}]] ou d'une formule adaptée aux mesures connues, comme [[r=(s-a)\\tan\\frac{A}{2}]]. Appliquer [[r=\\frac{a+b-c}{2}]] à un triangle non rectangle calcule un nombre sans signification géométrique." }
        ],
        "imgAlt": "Les segments de tangence x et y dérivent la formule du rayon inscrit r = (a + b - c) / 2",
        "figcaption": "Des segments de tangence égaux donnent a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Comment utiliser le calculateur d'aire de triangle rectangle à partir du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Le calculateur n'a besoin que de deux entrées, saisies dans l'ordre. Les étapes ci-dessous suivent la disposition à l'écran, de l'identification des mesures jusqu'au résultat vérifié." },
          { "kind": "p", "text": "Le calculateur a exactement deux entrées, le rayon inscrit [[r]] et le demi-périmètre [[s]]. Il ne prend ni les trois côtés, ni les cathètes, ni l'hypoténuse, ni un angle. La multiplication [[K=r\\times s]] est complète telle quelle ; le résultat ne doit jamais être divisé par deux à nouveau." }
        ],
        "steps": [
          "<strong>Déterminez le rayon inscrit du triangle rectangle.</strong> C'est le rayon du cercle inscrit dans le triangle. Si les trois côtés sont connus, calculez-le avec [[r=\\frac{a+b-c}{2}]].",
          "<strong>Déterminez son demi-périmètre.</strong> Additionnez les trois côtés et divisez par deux : [[s=\\frac{a+b+c}{2}]]. C'est la moitié du périmètre complet, et non le périmètre lui-même.",
          "<strong>Assurez-vous que les deux valeurs appartiennent au même triangle.</strong> Un rayon inscrit d'un triangle et un demi-périmètre d'un autre produisent un produit sans signification.",
          "<strong>Convertissez les mesures en unités compatibles si nécessaire.</strong> Les deux longueurs doivent utiliser la même unité : des mètres avec des mètres, des centimètres avec des centimètres, jamais mélangés.",
          "<strong>Entrez le rayon inscrit r dans le premier champ de saisie.</strong> C'est la plus petite des deux valeurs dans tout triangle valide.",
          "<strong>Entrez le demi-périmètre s dans le second champ de saisie.</strong> Vérifiez que la valeur est la moitié du périmètre, et non le périmètre entier.",
          "<strong>Cliquez sur Calculate Area.</strong> Le calculateur multiplie directement les deux entrées.",
          "<strong>Examinez le résultat affiché.</strong> Lisez l'aire et confirmez qu'elle semble raisonnable pour la taille du triangle.",
          "<strong>Vérifiez la formule et les étapes de substitution.</strong> Elles montrent [[K=r\\times s]] avec les valeurs saisies.",
          "<strong>Confirmez que le résultat est exprimé en unités carrées.</strong> Des unités de longueur multipliées donnent des unités carrées : m², cm², ft², correspondant aux entrées.",
          "<strong>Utilisez Reset avant de saisir un autre calcul.</strong> Cela efface les deux champs pour un nouveau départ."
        ]
      },
      "sec-examples": {
        "h2": "Exemples pas à pas de l'aire d'un triangle rectangle avec le rayon inscrit et le demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Quatre triangles rectangles classiques montrent la chaîne complète : des côtés au demi-périmètre, des côtés au rayon inscrit, puis la multiplication unique. Dans ces exemples, r et s sont déduits des longueurs des côtés ; le calculateur lui-même accepte r et s directement." },
          { "kind": "h3", "text": "Exemple 1 : triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Donnés [[a=3]], [[b=4]], [[c=5]]. Étape 1 : calculez le demi-périmètre, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Étape 2 : calculez le rayon inscrit, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Étape 3 : calculez l'aire, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Vérifiez avec la formule des cathètes : [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Exemple 2 : triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Donnés [[a=5]], [[b=12]], [[c=13]]. Demi-périmètre : [[s=\\frac{5+12+13}{2}=15]]. Rayon inscrit : [[r=\\frac{5+12-13}{2}=2]]. Aire : [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Vérification : [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Exemple 3 : triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Donnés [[a=8]], [[b=15]], [[c=17]]. Demi-périmètre : [[s=\\frac{8+15+17}{2}=20]]. Rayon inscrit : [[r=\\frac{8+15-17}{2}=3]]. Aire : [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Vérification : [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Exemple 4 : triangle rectangle 7-24-25" },
          { "kind": "p", "text": "Donnés [[a=7]], [[b=24]], [[c=25]]. Demi-périmètre : [[s=\\frac{7+24+25}{2}=28]]. Rayon inscrit : [[r=\\frac{7+24-25}{2}=3]]. Aire : [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Vérification : [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Comparaison des exemples traités" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Triangle",
            "Cathète a",
            "Cathète b",
            "Hypoténuse c",
            "Rayon inscrit r",
            "Demi-périmètre s",
            "Aire K"
          ],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applications concrètes de l'aire d'un triangle rectangle à partir du rayon inscrit et du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Douze situations traitées portent la formule de la page à l'atelier, au chantier et au studio. Chacune nomme un panneau, une section, un profil ou un modèle simplifié de forme triangulaire rectangle, fait passer le rayon inscrit et le demi-périmètre dans la formule, et énonce l'hypothèse derrière les nombres. Ce sont des modèles triangulaires rectangles simplifiés : toute vraie fenêtre, tout vrai toit, jardin, rampe, voile ou parcelle de terrain ne forme pas un triangle rectangle exact, et un objet irrégulier doit être divisé en formes plus simples avant que la formule s'applique. L'aire décrit uniquement la surface géométrique plane ; elle n'établit jamais à elle seule la résistance structurelle, la capacité de charge ou la sécurité de construction." },
          { "kind": "h3", "text": "Exemple 1 : fenêtre triangulaire en verre" },
          { "kind": "p", "text": "Une fenêtre triangulaire en verre a pour côtés [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Demi-périmètre : [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Rayon inscrit : [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Aire : [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Le résultat représente la surface plane du vitrage triangulaire avant soustraction des marges du cadre. Hypothèse : le vitrage est un vrai triangle rectangle ; les dimensions du cadre sont traitées séparément." },
          { "kind": "h3", "text": "Exemple 2 : support en acier" },
          { "kind": "p", "text": "Une plaque de support triangulaire en acier a pour côtés [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Demi-périmètre : [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Rayon inscrit : [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Aire : [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. C'est l'aire de la plaque plane et elle n'établit pas sa résistance structurelle. Hypothèse : l'ébauche du support est découpée en triangle rectangle ; les trous de boulons et les plis sont exclus." },
          { "kind": "h3", "text": "Exemple 3 : section de support de toit" },
          { "kind": "p", "text": "Une section triangulaire rectangle de support de toit a pour côtés [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Demi-périmètre : [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Rayon inscrit : [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Aire : [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. La formule mesure la section plane du support triangulaire, utile pour estimer les matériaux. Hypothèse : la section est modélisée comme un triangle rectangle ; la géométrie complète du toit peut différer." },
          { "kind": "h3", "text": "Exemple 4 : section de jardin triangulaire" },
          { "kind": "p", "text": "Une section de jardin triangulaire rectangle simplifiée a pour côtés [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Demi-périmètre : [[s=28\\text{ m}]]. Rayon inscrit : [[r=3\\text{ m}]]. Aire : [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. L'aire aide à estimer la section d'aménagement triangulaire, par exemple pour commander du gazon ou du paillis. Hypothèse : les limites du massif sont droites et se rencontrent à angle droit." },
          { "kind": "h3", "text": "Exemple 5 : profil de rampe triangulaire" },
          { "kind": "p", "text": "Un profil latéral de rampe simplifié a pour côtés [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Demi-périmètre : [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Rayon inscrit : [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Aire : [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Cela mesure le profil latéral triangulaire, et non la surface inclinée de la rampe. Hypothèse : le profil est modélisé avec un coin carré à la base." },
          { "kind": "h3", "text": "Exemple 6 : gabarit de découpe en contreplaqué" },
          { "kind": "p", "text": "Un gabarit triangulaire rectangle en contreplaqué a pour côtés [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Demi-périmètre : [[s=24\\text{ cm}]]. Rayon inscrit : [[r=4\\text{ cm}]]. Aire : [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Le calcul estime l'aire plane du matériau avant les pertes de découpe. Hypothèse : le gabarit est un vrai triangle rectangle ; le trait de scie et les chutes s'ajoutent." },
          { "kind": "h3", "text": "Exemple 7 : panneau de signalisation triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation triangulaire a pour côtés [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Demi-périmètre : [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Rayon inscrit : [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Aire : [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Cela représente la surface plane imprimable du panneau. Hypothèse : la face du panneau est plane et triangulaire rectangle ; la quincaillerie de montage est exclue." },
          { "kind": "h3", "text": "Exemple 8 : section de terrain bornée" },
          { "kind": "p", "text": "Une section de terrain triangulaire rectangle simplifiée a pour côtés [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Demi-périmètre : [[s=45\\text{ m}]]. Rayon inscrit : [[r=4\\text{ m}]]. Aire : [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. La formule calcule l'aire de la section triangulaire bornée. Hypothèse : la section est modélisée avec un coin carré ; un terrain irrégulier doit être subdivisé en formes plus simples." },
          { "kind": "h3", "text": "Exemple 9 : voile triangulaire en tissu" },
          { "kind": "p", "text": "Un panneau de tissu triangulaire rectangle a pour côtés [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Demi-périmètre : [[s=30\\text{ ft}]]. Rayon inscrit : [[r=5\\text{ ft}]]. Aire : [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Le résultat exclut les coutures, les ourlets et les marges de tissu. Hypothèse : la voile est modélisée à plat ; les vraies voiles se courbent sous la charge." },
          { "kind": "h3", "text": "Exemple 10 : panneau industriel" },
          { "kind": "p", "text": "Un panneau industriel triangulaire rectangle a pour côtés [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Demi-périmètre : [[s=66\\text{ m}]]. Rayon inscrit : [[r=5\\text{ m}]]. Aire : [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. Le résultat décrit le panneau géométrique plan plutôt que sa performance structurelle. Hypothèse : le panneau est modélisé comme un triangle rectangle ; l'épaisseur et les fixations sont des questions séparées." },
          { "kind": "h3", "text": "Exemple 11 : section d'extrémité de toit d'entrepôt" },
          { "kind": "p", "text": "Une section d'extrémité de toit d'entrepôt simplifiée a pour côtés [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Demi-périmètre : [[s=91\\text{ ft}]]. Rayon inscrit : [[r=6\\text{ ft}]]. Aire : [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Le résultat estime la section triangulaire d'extrémité, par exemple pour chiffrer le bardage. Hypothèse : le pignon est modélisé comme un triangle rectangle." },
          { "kind": "h3", "text": "Exemple 12 : grand panneau de fabrication" },
          { "kind": "p", "text": "Un panneau de fabrication triangulaire rectangle a pour côtés [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Demi-périmètre : [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Rayon inscrit : [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Aire : [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Cette méthode calcule directement l'aire plane triangulaire du panneau à partir des mesures de son cercle et de son contour. Hypothèse : les bords du panneau sont droits et se rencontrent à angle droit." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Application pratique",
            "Cathète a",
            "Cathète b",
            "Hypoténuse c",
            "Rayon inscrit r",
            "Demi-périmètre s",
            "Aire calculée",
            "Unité de mesure"
          ],
          "rows": [
            ["Fenêtre en verre", "3", "4", "5", "1", "6", "6", "m²"],
            ["Support en acier", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Support de toit", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Section de jardin", "7", "24", "25", "3", "28", "84", "m²"],
            ["Profil de rampe", "9", "12", "15", "3", "18", "54", "m²"],
            ["Gabarit en contreplaqué", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Panneau de signalisation", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Section bornée", "9", "40", "41", "4", "45", "180", "m²"],
            ["Voile en tissu", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Panneau industriel", "11", "60", "61", "5", "66", "330", "m²"],
            ["Extrémité de toit d'entrepôt", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Panneau de fabrication", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Pourquoi la formule du rayon inscrit donne-t-elle la même aire que la formule des cathètes ?",
        "blocks": [
          { "kind": "p", "text": "Deux formules différentes, un triangle, une aire. Partez de [[K=rs]] et de l'aire standard du triangle rectangle [[K=\\frac{ab}{2}]], ce qui impose [[[\\boxed{rs=\\frac{ab}{2}}]]]. Les deux côtés mesurent la même surface enfermée avec des informations géométriques différentes : l'un lit le cercle inscrit et le contour, l'autre lit les deux cathètes perpendiculaires." },
          { "kind": "h3", "text": "Comparaison numérique avec un triangle 3-4-5" },
          { "kind": "p", "text": "Méthode du rayon inscrit : [[r=1]], [[s=6]], donc [[K=1\\times6=6]]. Méthode des cathètes : [[K=\\frac{3\\times4}{2}=6]]. Les réponses s'accordent parce que le rayon inscrit et le demi-périmètre encodent la même information de côtés que les cathètes : [[r=\\frac{a+b-c}{2}]] et [[s=\\frac{a+b+c}{2}]] sont construits à partir de [[a]], [[b]] et [[c]], donc leur produit doit reconstruire l'aire que décrivent les cathètes. Cet accord n'est pas une coïncidence ; c'est de l'algèbre." },
          { "kind": "h3", "text": "Quand la méthode du rayon inscrit est-elle plus utile ?" },
          { "kind": "p", "text": "La méthode du rayon inscrit gagne quand r et s sont déjà en main. Les problèmes de géométrie sur les cercles inscrits fournissent le rayon inscrit directement. Une preuve qui a besoin de l'aire exprimée par les mesures du cercle utilise [[K=rs]] naturellement. Les problèmes de concours fournissent souvent le demi-périmètre dans l'énoncé. Et comme contrôle croisé, calculer l'aire de deux façons indépendantes attrape les glissades arithmétiques qu'une méthode unique masquerait. Dans chaque cas, le point est la commodité des entrées : partez des mesures que vous avez." },
          { "kind": "h3", "text": "Quand la formule des cathètes est-elle plus simple ?" },
          { "kind": "p", "text": "Si les deux cathètes perpendiculaires sont déjà connues, [[K=\\frac{ab}{2}]] est généralement plus direct : une multiplication, une division par deux, aucun r ou s intermédiaire à calculer. Dériver d'abord le rayon inscrit et le demi-périmètre puis multiplier ajoute deux étapes qui ne changent rien. La méthode du demi-périmètre n'est pas toujours la route la plus facile ; c'est la meilleure route quand le cercle inscrit ou le contour est le point de départ naturel, et un détour quand les cathètes sont sous vos yeux." }
        ]
      },
      "sec-heron": {
        "h2": "Quelle est la différence entre la formule de Héron et Aire = rayon inscrit × demi-périmètre ?",
        "blocks": [
          { "kind": "p", "text": "La formule de Héron calcule l'aire à partir des trois longueurs de côtés : [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Elle exige le demi-périmètre mais pas le rayon inscrit, et elle fonctionne pour tout triangle valide. La formule du rayon inscrit [[[\\boxed{K=rs}]]] a besoin du rayon inscrit et du demi-périmètre au lieu des trois côtés. La différence porte sur les entrées, pas sur la géométrie : les deux renvoient la même aire enfermée, parce que les deux formules sont liées par [[r=\\frac{K}{s}]]. La formule de Héron est le choix naturel quand les trois côtés sont connus et qu'aucune donnée de cercle n'existe ; la formule du rayon inscrit est naturelle quand le cercle inscrit fait partie du tableau." },
          { "kind": "h3", "text": "Comparaison traitée" },
          { "kind": "p", "text": "Utilisez un triangle 3-4-5. Formule de Héron : [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Formule du rayon inscrit : [[K=1\\times6]], [[[\\boxed{K=6}]]]. Les réponses correspondent parce que l'expression de Héron se simplifie, par la même décomposition en trois triangles, en [[r\\times s]] : la racine carrée de [[s(s-a)(s-b)(s-c)]] égale [[rs]] chaque fois que r et s viennent du même triangle. Ne confondez pas les deux outils, cependant : la formule de Héron ne demande jamais le rayon inscrit, et le raccourci du rayon inscrit [[r=\\frac{a+b-c}{2}]] appartient aux triangles rectangles uniquement." }
        ]
      },
      "sec-consistency": {
        "h2": "Comment vérifier que le rayon inscrit et le demi-périmètre sont valides",
        "blocks": [
          { "kind": "p", "text": "Le calculateur accepte deux valeurs et les multiplie, mais le produit n'est l'aire d'un triangle rectangle que si les deux valeurs décrivent le même triangle. Les contrôles ci-dessous séparent les entrées valides des imposteurs." },
          { "kind": "h3", "text": "Conditions d'entrée de base" },
          { "kind": "p", "text": "Les deux entrées doivent être positives : [[r>0]] et [[s>0]]. Une longueur ne peut être ni nulle ni négative, donc une entrée non positive n'a aucune signification géométrique. Zéro réduirait le triangle à une ligne sans aire ; une valeur négative ne décrit rien du tout. Mesurez ou dérivez à nouveau toute entrée qui échoue à ce test." },
          { "kind": "h3", "text": "Le demi-périmètre doit être plus grand que le rayon inscrit" },
          { "kind": "p", "text": "Dans un triangle valide, le demi-périmètre écrase le rayon inscrit. De [[K=rs]] et [[K=\\frac{ab}{2}]] avec des cathètes positives, et de la géométrie du cercle inscrit logé dans le triangle, [[s]] est toujours nettement plus grand que [[r]] : pour le triangle 3-4-5, 6 contre 1 ; pour 5-12-13, 15 contre 2. Les valeurs doivent aussi correspondre à un ensemble valide de trois côtés, donc cette comparaison est un filtre rapide, et non toute la validation. Un rayon inscrit plus grand que le demi-périmètre ne peut venir d'aucun triangle." },
          { "kind": "h3", "text": "Contrôle de cohérence avancé pour le triangle rectangle" },
          { "kind": "p", "text": "Pour un test plus strict, un triangle rectangle doit vérifier [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], environ [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. L'idée est simple : à partir d'un r et d'un s donnés, les deux cathètes doivent être les solutions positives d'une équation du second degré construite à partir de [[a+b=s+r]] et [[ab=2rs]], et cette équation n'a de solutions réelles que si son discriminant reste positif ou nul. La condition sur le discriminant se simplifie en exactement cette borne. Vérifiez 3-4-5 : [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], valide. C'est un raffinement facultatif pour un travail soigneux, et non une partie obligatoire du calcul du débutant." },
          { "kind": "h3", "text": "Que se passe-t-il quand les entrées sont incohérentes ?" },
          { "kind": "p", "text": "Multiplier deux nombres positifs produit toujours un résultat numérique, mais cela ne prouve pas qu'ils représentent le rayon inscrit et le demi-périmètre du même triangle rectangle. Un r d'un triangle associé à un s d'un autre donne un produit sans signification géométrique, aussi net que soit le calcul. À moins que l'implémentation du calculateur n'ait été testée pour son comportement de validation, ne supposez pas qu'il contrôle la relation : effectuez vous-même les contrôles ci-dessus, recalculez r et s à partir des côtés quand les côtés sont connus, et contrôlez l'aire avec la formule des cathètes." }
        ]
      },
      "sec-units": {
        "h2": "Comment les unités de mesure influencent les calculs de rayon inscrit et de demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Le rayon inscrit et le demi-périmètre sont tous deux des longueurs, donc ils suivent les mêmes règles d'unités que toute autre mesure de longueur. L'unité carrée dans la réponse vient de la multiplication de deux unités de longueur, ce qui fait des unités cohérentes tout l'enjeu." },
          { "kind": "h3", "text": "Pourquoi les deux entrées doivent-elles utiliser des unités compatibles ?" },
          { "kind": "p", "text": "Le produit [[K=r\\times s]] multiplie une longueur par une longueur. Si r est en centimètres et s en mètres, le produit mélange les deux échelles et le nombre n'a pas de signification propre. Convertissez d'abord pour que les deux entrées partagent une unité : mètres, centimètres, millimètres, pieds, pouces ou yards, mais la même pour les deux. Le calculateur a des sélecteurs d'unités pour cette raison : réglez-les avant de saisir les nombres." },
          { "kind": "h3", "text": "Exemple traité de conversion d'unités" },
          { "kind": "p", "text": "Donnés [[r=10\\text{ cm}]] et [[s=1\\text{ m}]]. Convertissez le demi-périmètre : [[1\\text{ m}=100\\text{ cm}]]. Puis [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. Autre possibilité : convertissez le rayon inscrit, [[10\\text{ cm}=0.1\\text{ m}]], puis [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. Les deux réponses décrivent la même aire, puisque [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Convertissez d'abord, multipliez ensuite, et l'un ou l'autre chemin d'unités arrive au bon endroit." },
          { "kind": "h3", "text": "Pourquoi le résultat est-il exprimé en unités carrées ?" },
          { "kind": "p", "text": "L'aire compte les carrés unitaires couvrant la surface : [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. L'unité est toujours l'unité de longueur au carré, parce que le produit de deux longueurs est un compte de carrés. Déclarer une aire comme une longueur simple, par exemple 1000 cm, est une erreur de catégorie : 1000 cm est une longueur, tandis que 1000 cm² est une surface." },
          { "kind": "h3", "text": "Travailler avec des valeurs décimales" },
          { "kind": "p", "text": "La formule traite les décimales sans modification. Donnés [[r=2.5]] et [[s=8.4]] : [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Nombres entiers, décimales et fines mesures d'atelier passent tous par la même multiplication. Gardez la pleine précision pendant le calcul et n'arrondissez que la réponse finale selon la précision que les mesures justifient." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs fréquentes dans le calcul de l'aire d'un triangle rectangle à partir du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Presque chaque mauvaise réponse dans ce sujet remonte à une étiquette confuse plutôt qu'à un mauvais calcul. Les seize erreurs ci-dessous sont celles qui reviennent sans cesse, chacune avec sa cause et sa correction." },
          { "kind": "h3", "text": "1. Confondre le demi-périmètre avec le périmètre complet" },
          { "kind": "p", "text": "Saisir [[P=12]] là où [[s=6]] appartient double la réponse : [[1\\times12=12]] au lieu de 6. L'erreur se produit parce que le langage courant dit périmètre alors que la formule veut sa moitié. Correction : divisez toujours la somme du contour par deux avant de la saisir, et vérifiez que le s saisi est plus petit que le périmètre." },
          { "kind": "h3", "text": "2. Utiliser le rayon circonscrit au lieu du rayon inscrit" },
          { "kind": "p", "text": "Le rayon circonscrit du triangle 3-4-5 est [[R=\\frac{5}{2}=2.5]] ; l'utiliser donne [[2.5\\times6=15]], près du triple de la vraie aire. L'erreur vient du fait que les deux cercles partagent le mot rayon. Correction : confirmez que le rayon appartient au cercle à l'intérieur du triangle, tangent aux trois côtés, et non à celui qui passe par les sommets." },
          { "kind": "h3", "text": "3. Oublier de calculer correctement le demi-périmètre" },
          { "kind": "p", "text": "Additionner seulement deux côtés, ou diviser chaque côté par deux avant d'additionner, produit un s faux. Pour 3-4-5, additionner 3 + 4 et diviser donne 3,5, et [[1\\times3.5=3.5]] n'a aucun sens. Correction : sommez d'abord les trois côtés, puis divisez une seule fois : [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Diviser à nouveau le résultat final par deux" },
          { "kind": "p", "text": "Après [[K=1\\times6=6]], une division supplémentaire par deux donne 3. L'habitude vient de la formule des cathètes, où la division est explicite. Correction : rappelez-vous que les moitiés sont déjà absorbées dans le demi-périmètre ; [[K=r\\times s]] est complet." },
          { "kind": "h3", "text": "5. Utiliser la mauvaise formule du rayon inscrit pour le triangle rectangle" },
          { "kind": "p", "text": "Deviner [[r=\\frac{c-a-b}{2}]] ou [[r=\\frac{a+b}{2}]] produit un faux rayon. Pour 3-4-5, [[\\frac{5-3-4}{2}=-1]] n'est même pas une longueur. Correction : utilisez [[r=\\frac{a+b-c}{2}]] avec a et b comme cathètes et c comme hypoténuse, exactement dans cet arrangement." },
          { "kind": "h3", "text": "6. Appliquer le raccourci du rayon inscrit du triangle rectangle à un triangle ordinaire" },
          { "kind": "p", "text": "Le raccourci s'appuie sur l'angle droit, donc sur un triangle général il calcule un nombre sans signification géométrique. Correction : pour les triangles non rectangles, trouvez le rayon inscrit par [[r=\\frac{K}{s}]] ou par une formule adaptée aux mesures connues, jamais par [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Saisir le rayon inscrit et le demi-périmètre de triangles différents" },
          { "kind": "p", "text": "Prendre r = 1 d'un triangle 3-4-5 et s = 15 d'un triangle 5-12-13 donne 15, un produit qui ne décrit aucun vrai triangle. L'erreur se produit quand des valeurs sont copiées d'exemples traités différents ou de schémas différents. Correction : dérivez ou mesurez les deux entrées à partir du même triangle avant de multiplier." },
          { "kind": "h3", "text": "8. Mélanger centimètres et mètres" },
          { "kind": "p", "text": "Multiplier r = 10 cm par s = 1 m sans convertir donne 10 de rien de propre. Correction : convertissez d'abord à une unité : [[1\\text{ m}=100\\text{ cm}]], puis [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Déclarer le résultat en unités linéaires" },
          { "kind": "p", "text": "Une aire de 6 m² n'est pas 6 m. L'erreur vient généralement de la copie de l'unité d'entrée sans la mettre au carré. Correction : écrivez l'unité au carré avec le nombre à chaque fois : m², cm², ft²." },
          { "kind": "h3", "text": "10. Saisir des mesures nulles ou négatives" },
          { "kind": "p", "text": "Les longueurs sont positives. Zéro réduit le triangle à une ligne sans aire, et les longueurs négatives n'ont ici aucune signification géométrique. Correction : mesurez ou dérivez à nouveau l'entrée ; rejetez les valeurs non positives avant de calculer." },
          { "kind": "h3", "text": "11. Confondre le centre du cercle inscrit avec le centre du cercle circonscrit" },
          { "kind": "p", "text": "Le centre du cercle inscrit est le point de rencontre des bissectrices des angles ; le centre du cercle circonscrit est le point de rencontre des médiatrices des côtés. Pour un triangle rectangle, le centre du cercle circonscrit se trouve au milieu de l'hypoténuse, un point complètement différent. Les mélanger conduit à mesurer le mauvais rayon. Correction : le centre du cercle inscrit [[I]] est à l'intérieur du triangle, à égale distance des côtés, et non des sommets." },
          { "kind": "h3", "text": "12. Supposer que le cercle inscrit ne touche que deux côtés" },
          { "kind": "p", "text": "Un cercle coincé dans un coin touche deux côtés, mais ce n'est pas le cercle inscrit. Le cercle inscrit touche les trois, et la preuve d'aire a besoin des trois points de tangence. Correction : vérifiez trois points de contact, un par côté, avant de traiter un rayon comme le rayon inscrit." },
          { "kind": "h3", "text": "13. Oublier que le rayon rencontre chaque côté tangent perpendiculairement" },
          { "kind": "p", "text": "L'argument de la hauteur commune dans la preuve dépend de [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Un segment incliné du centre du cercle inscrit à un côté est plus long que r et ne peut pas servir de hauteur. Correction : mesurez le rayon inscrit le long de la perpendiculaire au côté, jamais le long d'une diagonale." },
          { "kind": "h3", "text": "14. Confondre le rayon inscrit avec le diamètre" },
          { "kind": "p", "text": "Saisir la largeur complète du cercle inscrit comme r double le rayon et double l'aire. Pour le triangle 3-4-5, saisir 2 au lieu de 1 donne [[2\\times6=12]]. Correction : le rayon inscrit va du centre à un côté, la moitié de la largeur complète du cercle." },
          { "kind": "h3", "text": "15. Utiliser la formule de Héron de façon incorrecte" },
          { "kind": "p", "text": "Les glissades courantes incluent l'oubli de la racine carrée, l'écriture de [[s(s+a)(s+b)(s+c)]] avec des signes plus, ou l'alimentation de la formule avec le périmètre complet. Pour 3-4-5, omettre la racine donne 36 au lieu de 6. Correction : [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], avec le demi-périmètre, les signes moins et la racine tous en place." },
          { "kind": "h3", "text": "16. Supposer qu'un résultat numérique prouve automatiquement que les entrées sont géométriquement cohérentes" },
          { "kind": "p", "text": "Deux nombres positifs quelconques se multiplient, donc le calculateur renvoie toujours quelque chose. Ce quelque chose n'est l'aire d'un triangle rectangle que si r et s appartiennent vraiment à un seul triangle. Correction : effectuez les contrôles de cohérence, recalculez r et s à partir des côtés quand c'est possible, et contrôlez avec la formule des cathètes avant de faire confiance au nombre." },
          { "kind": "h3", "text": "Faux contre correct : un exemple concret" },
          { "kind": "p", "text": "Utilisez [[r=1]], [[s=6]]. Correct : [[K=1\\times6=6]]. Diviser à nouveau à tort par deux : [[K=\\frac{1\\times6}{2}=3]], faux parce que la division par deux est déjà à l'intérieur du demi-périmètre. Saisir à tort le périmètre complet 12 au lieu du demi-périmètre 6 : [[K=1\\times12=12]], le double de la vraie aire. Le calcul a l'air assuré dans les trois cas ; seule la géométrie les distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier que votre aire de triangle rectangle est correcte",
        "blocks": [
          { "kind": "p", "text": "Six contrôles indépendants, tous démontrés sur le triangle 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). L'accord entre des routes différentes est la preuve la plus forte qu'une réponse est juste, dans les devoirs comme dans la mesure pratique." },
          { "kind": "h3", "text": "Méthode 1 : contrôler la formule principale" },
          { "kind": "p", "text": "Refaites [[K=r\\times s]] à neuf : [[K=1\\times6=6]]. Un second passage avec les nombres ressaisis attrape les fautes de frappe et les chiffres mal entrés." },
          { "kind": "h3", "text": "Méthode 2 : calculer le demi-périmètre à partir des trois côtés" },
          { "kind": "p", "text": "Recalculez [[s=\\frac{a+b+c}{2}]] à partir des côtés : [[s=\\frac{3+4+5}{2}=6]]. Si le s recalculé diffère de celui saisi, l'entrée était fausse et le produit doit être refait." },
          { "kind": "h3", "text": "Méthode 3 : calculer le rayon inscrit à partir du triangle rectangle" },
          { "kind": "p", "text": "Recalculez [[r=\\frac{a+b-c}{2}]] : [[r=\\frac{3+4-5}{2}=1]]. Un désaccord avec le r saisi signifie que le rayon vient d'un triangle différent ou d'une formule mal appliquée." },
          { "kind": "h3", "text": "Méthode 4 : vérifier avec la formule standard des cathètes" },
          { "kind": "p", "text": "Calculez [[K=\\frac{ab}{2}]] : [[K=\\frac{3\\times4}{2}=6]]. Cette route utilise des entrées complètement différentes, donc l'accord avec [[rs]] confirme à la fois les entrées et le calcul." },
          { "kind": "h3", "text": "Méthode 5 : vérifier avec la formule de Héron" },
          { "kind": "p", "text": "Calculez [[K=\\sqrt{s(s-a)(s-b)(s-c)}]] : [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. La formule de Héron exerce les côtés et le demi-périmètre ensemble, attrapant les erreurs d'étiquetage des côtés que les autres contrôles pourraient manquer." },
          { "kind": "h3", "text": "Méthode 6 : contrôler le théorème de Pythagore" },
          { "kind": "p", "text": "Confirmez [[a^2+b^2=c^2]] : [[3^2+4^2=9+16=25=5^2]]. Cela contrôle l'identification des côtés derrière tous les autres calculs ; une hypoténuse fausse signifie qu'un côté a été mal étiqueté et que r, s et K doivent tous être reconstruits." }
        ]
      },
      "sec-applications": {
        "h2": "Applications pratiques de la formule du rayon inscrit et du demi-périmètre",
        "blocks": [
          { "kind": "p", "text": "Le même schéma à deux entrées apparaît partout où un panneau ou une section triangulaire doit être mesuré et où les données du cercle inscrit sont le point de départ commode. Un vitrier dimensionne une fenêtre à partir de ses longueurs de bords ; un fabricant lit les cathètes d'une ébauche de support ; un géomètre réduit un coin de terrain à trois côtés droits. De ces côtés viennent le rayon inscrit et le demi-périmètre, et une multiplication nomme l'aire. Les quatre panneaux ci-dessous montrent le schéma à différentes échelles : une fenêtre en verre (6 m²), un support de toit (60 ft²), une section de jardin (84 m²) et une plaque d'acier (30 cm²), chacun étiqueté avec son rayon inscrit, son demi-périmètre et l'aire résultante." }
        ],
        "imgAlt": "Quatre panneaux : fenêtre en verre 6 m2, support de toit 60 ft2, section de jardin 84 m2, plaque d'acier 30 cm2",
        "figcaption": "Quatre usages réels : une fenêtre en verre, un support de toit, une section de jardin et une plaque d'acier."
      },
      "sec-conclusion": {
        "h2": "Deux mesures, un produit",
        "blocks": [
          { "kind": "p", "text": "Un rayon inscrit et un demi-périmètre suffisent. Multipliez-les, et la surface enfermée est nommée. La preuve en trois triangles montre pourquoi aucune division ne suit la multiplication, l'argument des segments de tangence montre pourquoi le triangle rectangle obtient son raccourci du rayon inscrit, et la formule des cathètes plus la formule de Héron se tiennent prêtes à contrôler chaque réponse." },
          { "kind": "p", "text": "L'habitude de travail est simple : confirmez que les deux entrées décrivent le même triangle, accordez les unités, gardez les décimales non arrondies jusqu'à la fin, et vérifiez par une seconde méthode. Avec ces habitudes, [[K=r\\times s]] est l'un des calculs d'aire les plus fiables de la géométrie." }
        ]
      },
      "sec-related": {
        "h2": "Explorer les calculateurs de triangles rectangles associés",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes appellent des calculateurs différents." }
        ]
      },
      "sec-faq": {
        "h2": "Questions fréquentes",
        "blocks": []
      }
    }
  },
  "de": {
    "faqs": [
      {
        "question": "Wie lautet die Formel für die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang?",
        "answer": "K = r × s, wobei r der Inkreisradius (der Radius des einbeschriebenen Kreises) und s der Halbumfang (die Hälfte des Umfangs) ist. Multiplizieren Sie beide, und das Produkt ist die Fläche, ganz ohne Divisionsschritt. Für r = 1 und s = 6 gilt K = 1 × 6 = 6 Quadrateinheiten. Beide Eingaben müssen dasselbe Dreieck beschreiben."
      },
      {
        "question": "Was ist ein Inkreisradius?",
        "answer": "Der Inkreisradius ist der Radius des Inkreises, des Kreises, der genau in ein Dreieck passt und alle drei Seiten berührt. Er entspricht dem senkrechten Abstand vom Inkreismittelpunkt, dem Schnittpunkt der drei Winkelhalbierenden, zu einer beliebigen Seite. Für ein rechtwinkliges Dreieck mit den Katheten a und b und der Hypotenuse c gibt es die Abkürzung r = (a + b - c) / 2."
      },
      {
        "question": "Was ist der Unterschied zwischen Inkreisradius und Umkreisradius?",
        "answer": "Der Inkreisradius gehört zum Kreis innerhalb des Dreiecks, der alle drei Seiten berührt; der Umkreisradius gehört zum Kreis, der durch alle drei Eckpunkte verläuft. Sie messen verschiedene Kreise, daher unterscheiden sich ihre Werte. Für ein rechtwinkliges Dreieck ist der Umkreisradius R = c/2, genau die Hälfte der Hypotenuse, während der Inkreisradius (a + b - c)/2 beträgt."
      },
      {
        "question": "Wie berechne ich den Halbumfang eines rechtwinkligen Dreiecks?",
        "answer": "Addieren Sie die drei Seiten und teilen Sie durch zwei: s = (a + b + c) / 2. Für ein 3-4-5-Dreieck gilt s = (3 + 4 + 5) / 2 = 6. Der Halbumfang ist die Hälfte des vollen Umfangs; wer versehentlich den vollen Umfang eingibt, verdoppelt die Fläche bei der Verwendung von K = r × s."
      },
      {
        "question": "Wie finde ich den Inkreisradius aus drei Seitenlängen?",
        "answer": "Für ein rechtwinkliges Dreieck verwenden Sie die Abkürzung r = (a + b - c) / 2, wobei a und b die Katheten und c die Hypotenuse sind. Mit den Seiten 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Diese Abkürzung gilt nur für rechtwinklige Dreiecke; andere Dreiecke brauchen die allgemeine Beziehung r = K / s."
      },
      {
        "question": "Warum ist die Fläche gleich Inkreisradius mal Halbumfang?",
        "answer": "Verbindet man den Inkreismittelpunkt mit den drei Eckpunkten, zerfällt das Dreieck in drei kleinere Dreiecke, jedes mit einer Seite als Grundseite und dem Inkreisradius als senkrechter Höhe. Ihre Flächen sind ar/2, br/2 und cr/2. Addiert ergibt das r(a + b + c)/2, und da s = (a + b + c)/2 ist, lautet das Ganze r × s."
      },
      {
        "question": "Funktioniert die Formel für alle Dreiecke?",
        "answer": "Ja. Jedes nicht entartete Dreieck besitzt einen Inkreis und einen Inkreismittelpunkt, sodass die Zerlegung in drei Dreiecke für rechtwinklige, spitzwinklige und stumpfwinklige Dreiecke gleichermaßen gilt. Das rechtwinklige Dreieck ist lediglich einfacher, weil sich sein Inkreisradius aus den Seiten mit r = (a + b - c) / 2 bestimmen lässt. Der allgemeine Inkreisradius kommt weiterhin aus r = K / s."
      },
      {
        "question": "Ist der Halbumfang dasselbe wie der Umfang?",
        "answer": "Nein. Der Halbumfang ist genau die Hälfte des Umfangs: s = P/2. Für ein 3-4-5-Dreieck beträgt der Umfang 12 und der Halbumfang 6. Wer den vollen Umfang in K = r × s eingibt, erhält 1 × 12 = 12, das Doppelte der korrekten Fläche von 6. Halbieren Sie den Umfang vor dem Multiplizieren."
      },
      {
        "question": "Muss ich das Endergebnis noch durch zwei teilen?",
        "answer": "Nein. Die Formel K = r × s berücksichtigt jede Division bereits: Die Halbierungen aus den drei kleineren Dreiecken sind im Halbumfang aufgegangen. Nach dem Multiplizieren noch einmal zu teilen, ist der häufigste Fehler. Mit r = 1 und s = 6 ist die korrekte Fläche 6, während (1 × 6) / 2 = 3 falsch ist."
      },
      {
        "question": "Wie hängen die Heron-Formel und die Inkreisradius-Formel zusammen?",
        "answer": "Beide berechnen dieselbe Fläche, starten aber mit unterschiedlichen Eingaben. Die Heron-Formel, K = sqrt(s(s - a)(s - b)(s - c)), braucht alle drei Seiten; K = r × s braucht stattdessen Inkreisradius und Halbumfang. Für ein 3-4-5-Dreieck liefern beide 6, wodurch jede Formel eine starke Kontrolle für die andere darstellt."
      },
      {
        "question": "Kann ich Dezimalwerte für Inkreisradius und Halbumfang verwenden?",
        "answer": "Ja. Die Formel behandelt Dezimalzahlen genau wie ganze Zahlen. Mit r = 2.5 und s = 8.4 gilt K = 2.5 × 8.4 = 21 Quadrateinheiten. Bewahren Sie die volle Genauigkeit durch die Multiplikation und runden Sie erst die Endantwort, passend zur Genauigkeit der Messungen."
      },
      {
        "question": "Wie kann ich prüfen, ob mein Inkreisradius und Halbumfang korrekt sind?",
        "answer": "Prüfen Sie, dass beide positiv sind und s deutlich größer als r ist. Wenn die Seiten bekannt sind, berechnen Sie s = (a + b + c)/2 und r = (a + b - c)/2 neu und kontrollieren Sie die Fläche mit K = ab/2 und der Heron-Formel. Übereinstimmung zwischen den Methoden ist ein starkes Indiz. Werte aus verschiedenen Dreiecken liefern eine Zahl, die nicht die wirkliche Fläche ist."
      }
    ],
    "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
    "relatedItems": [
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus den Katheten",
      "Rechner für den Halbumfang eines rechtwinkligen Dreiecks",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
      "Rechner für den Umfang eines rechtwinkligen Dreiecks",
      "Flächenrechner für rechtwinklige Dreiecke"
    ],
    "relatedIntro": "Unterschiedliche Messungen verlangen unterschiedliche Rechner.",
    "faqHeading": "Häufig gestellte Fragen",
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
      "sec-right-triangle": "Was ist ein rechtwinkliges Dreieck?",
      "sec-incircle": "Den Inkreis eines rechtwinkligen Dreiecks verstehen",
      "sec-semiperimeter": "Den Halbumfang eines Dreiecks verstehen",
      "sec-formula": "Warum ist die Fläche eines Dreiecks gleich Inkreisradius mal Halbumfang?",
      "sec-inradius": "So berechnen Sie den Inkreisradius eines rechtwinkligen Dreiecks",
      "sec-howto": "So verwenden Sie den Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang",
      "sec-examples": "Schritt-für-Schritt-Beispiele für die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
      "sec-practical": "Anwendungen aus dem Alltag für die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
      "sec-legs-comparison": "Warum liefert die Inkreisradius-Formel dieselbe Fläche wie die Katheten-Formel?",
      "sec-heron": "Was ist der Unterschied zwischen der Heron-Formel und Fläche = Inkreisradius × Halbumfang?",
      "sec-consistency": "So prüfen Sie, ob Inkreisradius und Halbumfang gültig sind",
      "sec-units": "Wie sich Maßeinheiten auf Inkreisradius- und Halbumfang-Berechnungen auswirken",
      "sec-mistakes": "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus dem Halbumfang",
      "sec-verify": "So prüfen Sie, ob Ihre Dreiecksfläche korrekt ist",
      "sec-applications": "Praktische Anwendungen der Inkreisradius-Halbumfang-Formel",
      "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufig gestellte Fragen",
      "sec-conclusion": "Zwei Messungen, ein Produkt"
    },
    "sections": {
      "sec-intro": {
        "h2": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Nehmen Sie [[r=1]], [[s=6]]. Wenden Sie [[K=r\\times s]] an: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Das Ergebnis benennt die gesamte ebene Fläche, die von den drei Seiten des Dreiecks umschlossen wird: sechs Quadrateinheiten. Genau das liefert der Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang für diese beiden Eingaben." },
          { "kind": "p", "text": "Der Inkreisradius ist der Radius des Kreises, der im Dreieck steckt und alle drei Seiten berührt. Der Halbumfang ist die Hälfte der Randlänge: die Summe der drei Seiten geteilt durch zwei. Zwei Messungen genügen, weil der Inkreisradius als gemeinsame senkrechte Höhe für drei kleinere Dreiecke dient, die vom Inkreismittelpunkt aus gebildet werden, während der Halbumfang ihre Grundseiten in einem einzigen Faktor sammelt." },
          { "kind": "p", "text": "Die Überlegung gilt für jedes Dreieck, denn jedes besitzt einen Inkreis. Das rechtwinklige Dreieck legt noch einen Bonus obenauf: Sein Inkreisradius folgt aus den drei Seiten über eine kurze Formel, sodass r und s oft schon bekannt sind. Diese Methode glänzt bei Aufgaben, in denen der Inkreis oder der Halbumfang gegeben ist, da keine Kathete und kein Winkel gemessen werden muss." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Was ist ein rechtwinkliges Dreieck?",
        "blocks": [
          { "kind": "p", "text": "Bevor der Inkreis ins Bild kommt, muss das Dreieck selbst fehlerfrei beschriftet sein. Die folgenden Symbole bleiben im gesamten Leitfaden fest, und der Rechner verwendet dieselben Namen." },
          { "kind": "h3", "text": "Definition eines rechtwinkligen Dreiecks" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein dreiseitiges Vieleck mit genau einem Innenwinkel von 90 Grad. Es hat drei Eckpunkte, drei Seiten, zwei spitze Winkel und einen rechten Winkel, der meist mit einem kleinen Quadrat markiert wird. Die beiden Seiten, die den rechten Winkel bilden, sind die Katheten; die gegenüberliegende Seite ist die Hypotenuse. Da [[C=90^\\circ]] gilt, folgt [[[\\boxed{A+B=90^\\circ}]]]: Die beiden spitzen Winkel ergänzen sich, sodass die Kenntnis des einen den anderen bestimmt." },
          { "kind": "h3", "text": "Die beiden Katheten verstehen" },
          { "kind": "p", "text": "Die Kathete [[a]] liegt dem Winkel [[A]] gegenüber; die Kathete [[b]] liegt dem Winkel [[B]] gegenüber. Die beiden Katheten treffen sich am Scheitel des rechten Winkels und stehen senkrecht aufeinander. Sie tragen direkt zur Fläche bei, weil jede Kathete als Grundseite dienen kann, während die andere als senkrechte Höhe dient. Für diese Seite speisen sie auch den Inkreisradius, denn die Abkürzung [[r=\\frac{a+b-c}{2}]] ist aus beiden Katheten und der Hypotenuse aufgebaut." },
          { "kind": "h3", "text": "Die Hypotenuse verstehen" },
          { "kind": "p", "text": "Die Hypotenuse ist die dem 90-Grad-Winkel gegenüberliegende Seite, stets die längste Seite des Dreiecks. Sie bildet niemals den rechten Winkel; sie spannt sich ihm gegenüber. In der Katheten-Flächenformel spielt sie keine Rolle, doch hier zählt sie: Die Hypotenuse fließt sowohl in den Halbumfang [[s=\\frac{a+b+c}{2}]] als auch in die Inkreisradius-Abkürzung [[r=\\frac{a+b-c}{2}]] ein. Sind beide Katheten bekannt, liefert der Satz des Pythagoras sie über [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] zurück." },
          { "kind": "h3", "text": "Was unterscheidet dieses Dreieck von anderen Dreiecken?" },
          { "kind": "p", "text": "Die 90-Grad-Ecke ist die ganze Geschichte. Sie macht die Katheten ohne jede Konstruktion senkrecht, was die Standardflächenformel vereinfacht, und sie macht die Tangentenabschnitte des Inkreises nahe dem rechten Winkel gleich dem Inkreisradius selbst, was die Inkreisradius-Formel vereinfacht. Andere Dreiecke erfüllen weiterhin [[K=r\\times s]], doch die Bestimmung ihres Inkreisradius erfordert meist zuerst die Fläche. Das rechtwinklige Dreieck ist der eine Fall, in dem der Inkreisradius direkt aus den Seitenlängen folgt." }
        ]
      },
      "sec-incircle": {
        "h2": "Den Inkreis eines rechtwinkligen Dreiecks verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Inkreisradius ergibt erst Sinn, wenn der Inkreis klar vor Augen steht. Dieser Abschnitt baut die Idee vom Kreis selbst bis zu den Berührpunkten auf, an denen der Radius jede Seite trifft." },
          { "kind": "h3", "text": "Definition eines Inkreises" },
          { "kind": "p", "text": "Ein Inkreis ist ein Kreis, der so im Inneren eines Dreiecks liegt, dass er alle drei Seiten berührt. Er sitzt im Inneren, ist an jeder Seite in genau einem Punkt tangential und kann eine Seite nicht überqueren, weil die Tangentialität ihn festhält. Jedes nicht entartete Dreieck besitzt genau einen Inkreis: Schrumpft man einen Kreis in den Eckbereichen, so gibt es genau eine größte Größe, die alle drei Seiten küsst. Die drei Berührpunkte, einer je Seite, sind die Stellen, an denen später der Inkreisradius gemessen wird." },
          { "kind": "h3", "text": "Was ist der Inkreismittelpunkt?" },
          { "kind": "p", "text": "Der Inkreismittelpunkt, bezeichnet mit [[I]], ist der Punkt, in dem sich die drei inneren Winkelhalbierenden treffen. Jede Halbierende teilt einen Eckwinkel in zwei gleiche Teile, und jeder Punkt auf einer Halbierenden hat gleichen senkrechten Abstand zu den beiden Seiten, die diesen Winkel bilden. Der Schnittpunkt aller drei Halbierenden hat daher gleichen Abstand zu allen drei Seiten, genau deshalb kann er als Mittelpunkt eines Kreises dienen, der jede Seite berührt. Der Inkreismittelpunkt liegt in jedem gültigen Dreieck innen, niemals auf einer Kante oder außen." },
          { "kind": "h3", "text": "Was ist der Inkreisradius?" },
          { "kind": "p", "text": "Der Inkreisradius ist der senkrechte Abstand vom Inkreismittelpunkt zu einer beliebigen Dreiecksseite: [[[\\boxed{r=\\text{distance from the incenter to a side}}}]]. Da der Inkreismittelpunkt von allen drei Seiten gleich weit entfernt ist, bleibt der Wert gleich, egal welche Seite gewählt wird. Diese eine Zahl ist der Radius des Inkreises, die Länge jedes der drei kurzen Segmente vom Mittelpunkt zu den Berührpunkten und die gemeinsame Höhe, die den Flächenbeweis in einem späteren Abschnitt zum Laufen bringt." },
          { "kind": "h3", "text": "Die Tangentenbeziehung verstehen" },
          { "kind": "p", "text": "Ein Radius, der zu einem Berührpunkt gezogen wird, steht senkrecht auf der berührten Seite. Auf die drei Berührpunkte angewandt ergibt das [[r\\perp a]], [[r\\perp b]] und [[r\\perp c]]. Jede Aussage beschreibt eine andere Ecke der Zeichnung: Der Radius, der auf der Kathete a endet, steht rechtwinklig auf der Kathete a, ebenso bei Kathete b und der Hypotenuse. Diese Rechtwinkligkeit ist nicht dekorativ; sie ist die Eigenschaft, die jeden Radius als Höhe eines der drei kleineren Dreiecke im Flächenbeweis wirken lässt." },
          { "kind": "h3", "text": "Unterschied zwischen Inkreis und Umkreis" },
          { "kind": "p", "text": "Der Inkreis lebt innerhalb des Dreiecks und berührt alle drei Seiten; der Umkreis verläuft durch alle drei Eckpunkte und umschließt das Dreieck. Ihre Radien sind verschiedene Messungen und dürfen niemals vertauscht werden. Für ein rechtwinkliges Dreieck hat der Umkreisradius seine eigene einfache Regel, [[[\\boxed{R=\\frac{c}{2}}]]], weil die Hypotenuse ein Durchmesser des Umkreises ist: Der Mittelpunkt der Hypotenuse ist der Umkreismittelpunkt. Der Inkreisradius [[r]] ist der kleinere der beiden und gehört zum inneren Kreis." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck ABC mit Inkreis: Inkreismittelpunkt I, drei Berührpunkte, senkrechte Radien der Länge r",
        "figcaption": "Dreieck ABC mit seinem Inkreis: drei senkrechte Radien, jeder von der Länge r."
      },
      "sec-semiperimeter": {
        "h2": "Den Halbumfang eines Dreiecks verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang sieht wie eine bloße Halbmaßnahme aus, trägt aber den größten Teil der Flächenberechnung. Zu verstehen, warum die Geometrie immer wieder zur halben Umfangslänge greift, bereitet den Boden für den Beweis." },
          { "kind": "h3", "text": "Definition des Halbumfangs" },
          { "kind": "p", "text": "Der Halbumfang ist genau die Hälfte des gesamten Umfangs: [[[\\boxed{s=\\frac{P}{2}}]]]. Für ein Dreieck wird daraus [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Der Umfang [[P]] ist die volle Randlänge, die Summe der drei Seiten; der Halbumfang ist diese halbierte Summe. Beide hängen über [[P=2s]] zusammen, und sie zu verwechseln ist der teuerste Eingabefehler auf dieser Seite." },
          { "kind": "h3", "text": "So berechnen Sie den Halbumfang" },
          { "kind": "p", "text": "Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Addieren Sie zuerst die drei Seiten und teilen Sie dann einmal: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. Die Addition muss vor der Division kommen, weil der Halbumfang den ganzen Rand halbiert, nicht jede Seite einzeln. Nach dem Teilen zu addieren ergäbe hier dieselbe Zahl, doch die Formel [[s=\\frac{a+b+c}{2}]] nennt die richtige Reihenfolge: Summieren Sie den Rand, halbieren Sie ihn dann." },
          { "kind": "h3", "text": "Warum wird der Halbumfang statt des vollen Umfangs verwendet?" },
          { "kind": "p", "text": "Dreiecksflächenformeln erzeugen ständig Hälften: Jedes kleine Dreieck im Beweis bringt eine Division durch zwei ein, und der Halbumfang schluckt alle auf einmal. Er ist die natürliche Variable der Heron-Formel, der Inkreisradius-Beziehung [[r=\\frac{K}{s}]] und des folgenden Beweises. Die Eingabe des vollen Umfangs würde das Ergebnis verdoppeln, denn [[K=r\\times P=2rs]] ist das Doppelte der wahren Fläche. Der Rechner fragt nach [[s]], nicht nach [[P]], genau damit die Multiplikation keine weitere Anpassung braucht." },
          { "kind": "h3", "text": "Kann der Halbumfang kleiner als die längste Seite sein?" },
          { "kind": "p", "text": "Nein. Die Dreiecksungleichung verlangt [[a+b>c]]: Die beiden kürzeren Seiten müssen zusammen die längste Seite übertreffen, sonst lässt sich das Dreieck nicht schließen. Addiert man [[c]] auf beiden Seiten, erhält man [[a+b+c>2c]], und Halbieren ergibt [[\\frac{a+b+c}{2}>c]], also [[s>c]]. Der Halbumfang übertrifft in einem gültigen Dreieck stets die längste Seite. Ist ein gemeldeter Halbumfang kleiner als die Hypotenuse, können die Eingaben kein echtes Dreieck beschreiben." }
        ]
      },
      "sec-formula": {
        "h2": "Warum ist die Fläche eines Dreiecks gleich Inkreisradius mal Halbumfang?",
        "blocks": [
          { "kind": "p", "text": "Beginnen Sie mit der allgemeinen Regel [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Verbinden Sie den Inkreismittelpunkt [[I]] mit allen drei Eckpunkten. Das Dreieck zerfällt in drei kleinere Dreiecke, jedes mit einer ursprünglichen Seite als Grundseite und dem Inkreisradius als senkrechter Höhe. Der Rest dieses Abschnitts berechnet jedes Stück und addiert sie, damit [[K=r\\times s]] gesehen und nicht nur auswendig gelernt wird." },
          { "kind": "h3", "text": "Fläche des ersten kleineren Dreiecks" },
          { "kind": "p", "text": "Das auf der Seite [[a]] aufgebaute Dreieck hat die Grundseite [[a]] und die Höhe [[r]], weil der Radius die Seite [[a]] an ihrem Berührpunkt senkrecht trifft. Seine Fläche ist daher [[K_1=\\frac{ar}{2}]]. Vom rechten Winkel wird hier noch nichts benutzt; dieser Schritt funktioniert für die Seite jedes Dreiecks." },
          { "kind": "h3", "text": "Fläche des zweiten kleineren Dreiecks" },
          { "kind": "p", "text": "Das auf der Seite [[b]] aufgebaute Dreieck folgt demselben Muster: Grundseite [[b]], senkrechte Höhe [[r]], Fläche [[K_2=\\frac{br}{2}]]. Die Höhe ist wieder dieselbe Zahl [[r]], weil der Inkreismittelpunkt von jeder Seite gleich weit entfernt ist. Diese gemeinsame Höhe ist der Schlüssel zum ganzen Beweis." },
          { "kind": "h3", "text": "Fläche des dritten kleineren Dreiecks" },
          { "kind": "p", "text": "Das auf der Seite [[c]] aufgebaute Dreieck vervollständigt das Set: [[K_3=\\frac{cr}{2}]]. Die drei kleineren Dreiecke pflastern das ursprüngliche Dreieck exakt, ohne Überlappung und ohne Lücke: Jeder Punkt des Originals liegt in einem von ihnen, da die Segmente vom Inkreismittelpunkt zu den Eckpunkten das Innere zerlegen." },
          { "kind": "h3", "text": "Die drei Flächen addieren" },
          { "kind": "p", "text": "Addieren Sie die Stücke: [[K=K_1+K_2+K_3]]. Einsetzen ergibt [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Klammern Sie [[r]] aus der Summe aus: [[K=\\frac{r(a+b+c)}{2}]]. Erinnern Sie sich, dass [[s=\\frac{a+b+c}{2}]] ist, also ist der eingeklammerte Bruch genau der Halbumfang, und [[[\\boxed{K=r\\times s}]]]. Jede Halbierung aus den drei kleinen Dreiecken ist im Halbumfang aufgegangen, weshalb die abschließende Multiplikation keine weitere Division braucht." },
          { "kind": "h3", "text": "Warum funktioniert diese Formel für jedes Dreieck?" },
          { "kind": "p", "text": "Jedes nicht entartete Dreieck hat einen Inkreis und einen Inkreismittelpunkt, und der senkrechte Abstand des Mittelpunkts zu allen drei Seiten ist dieselbe Zahl [[r]]. Die Zerlegung in drei Dreiecke benutzt nichts anderes: keinen rechten Winkel, keine besonderen Seitenlängen, keine spezielle Form. Ob das Dreieck rechtwinklig, spitzwinklig oder stumpfwinklig ist: Der Inkreismittelpunkt verbindet sich mit den Eckpunkten, und dieselbe Algebra landet bei [[K=r\\times s]]. Die Formel ist eine Eigenschaft von Dreiecken im Allgemeinen, weshalb Geometriebücher sie einmal beweisen und überall verwenden." },
          { "kind": "h3", "text": "Warum ist diese Formel für rechtwinklige Dreiecke besonders nützlich?" },
          { "kind": "p", "text": "Die Identität bleibt dieselbe, doch der Inkreisradius wird einfach. In einem allgemeinen Dreieck wird der Inkreisradius meist aus der Fläche selbst über [[r=\\frac{K}{s}]] gefunden, was zirkulär ist, wenn die Fläche das Ziel ist. Ein rechtwinkliges Dreieck entkommt dem Kreis: Sein Inkreisradius folgt direkt aus den Seiten über [[r=\\frac{a+b-c}{2}]], hergeleitet im nächsten Abschnitt. Das macht [[K=r\\times s]] zu einer echten Arbeitsmethode für rechtwinklige Dreiecke statt zu einer umgestellten Definition." }
        ],
        "imgAlt": "Dreieck, vom Inkreismittelpunkt I in drei kleinere Dreiecke der Höhe r zerlegt, beweist K = r mal s",
        "figcaption": "Drei kleinere Dreiecke teilen die Höhe r; ihre Flächen addieren sich zu r mal s."
      },
      "sec-inradius": {
        "h2": "So berechnen Sie den Inkreisradius eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Für ein rechtwinkliges Dreieck mit den Katheten [[a]] und [[b]] und der Hypotenuse [[c]] lautet der Inkreisradius [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Diese Abkürzung gilt nur für rechtwinklige Dreiecke. Der Beweis unten benutzt nur die Tangentensegment-Eigenschaft von Kreisen, und die durchgearbeiteten Beispiele zeigen sie in Aktion." },
          { "kind": "h3", "text": "Warum funktioniert die Inkreisradius-Formel?" },
          { "kind": "p", "text": "Tangentensegmente, die vom selben äußeren Punkt an einen Kreis gezogen werden, haben gleiche Längen. Der Inkreis berührt beide Katheten, und die beiden Radien zu diesen Berührpunkten treffen die Seiten im rechten Winkel. Zusammen mit dem rechten Winkel am Scheitel bildet die Eckregion ein Quadrat der Seitenlänge [[r]], sodass die Abstände vom Scheitel des rechten Winkels zu den beiden Katheten-Berührpunkten jeweils [[r]] betragen. Nennen Sie das verbleibende Tangentensegment auf Kathete a [[x]] und das verbleibende auf Kathete b [[y]]. Die beiden Tangentensegmente von jedem spitzen Scheitel sind gleich, also spaltet sich die Hypotenuse in dieselben [[x]] und [[y]]. Daher [[a=r+x]], [[b=r+y]] und [[c=x+y]]. Addieren Sie die ersten beiden Gleichungen: [[a+b=2r+x+y]]. Da [[x+y=c]] ist, wird daraus [[a+b=2r+c]], und Umstellen ergibt [[[\\boxed{r=\\frac{a+b-c}{2}}]]]." },
          { "kind": "h3", "text": "Durchgearbeitetes Beispiel: 3-4-5-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]]: Setzen Sie in die Abkürzung ein, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. Der Inkreis des 3-4-5-Dreiecks hat den Radius 1, was zum Einführungsbeispiel passt, in dem [[r=1]] und [[s=6]] [[K=6]] ergaben." },
          { "kind": "h3", "text": "Durchgearbeitetes Beispiel: 5-12-13-Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5]], [[b=12]], [[c=13]]: dann [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. Gepaart mit [[s=\\frac{5+12+13}{2}=15]] folgt die Fläche als [[K=2\\times15=30]], bestätigt durch die Kathetenformel [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Eine alternative Formel für den Inkreisradius" },
          { "kind": "p", "text": "Die Abkürzung lässt sich auch als [[[\\boxed{r=\\frac{ab}{a+b+c}}]]] schreiben. Das ist keine zweite, unabhängige Formel. Starten Sie mit [[K=rs]] und [[K=\\frac{ab}{2}]], also [[rs=\\frac{ab}{2}]]. Da [[s=\\frac{a+b+c}{2}]] ist, liefert Einsetzen [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], und Kürzen der Hälften lässt [[r=\\frac{ab}{a+b+c}]] übrig. Sie muss mit [[r=\\frac{a+b-c}{2}]] übereinstimmen: Prüfen Sie mit 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], derselbe Radius. Algebraisch gilt [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] für ein rechtwinkliges Dreieck, also sind die beiden Formen identisch." },
          { "kind": "h3", "text": "Funktioniert diese Inkreisradius-Abkürzung für jedes Dreieck?" },
          { "kind": "p", "text": "Nein. Die Herleitung stützte sich auf den rechten Winkel: Das Eckquadrat der Seitenlänge [[r]] existiert nur, weil sich die beiden Katheten in 90 Grad treffen. Für ein allgemeines Dreieck muss der Inkreisradius aus [[[\\boxed{r=\\frac{K}{s}}}]] oder aus einer an die bekannten Messungen angepassten Formel kommen, etwa [[r=(s-a)\\tan\\frac{A}{2}]]. [[r=\\frac{a+b-c}{2}]] auf ein nicht rechtwinkliges Dreieck anzuwenden, berechnet eine Zahl ohne geometrische Bedeutung." }
        ],
        "imgAlt": "Tangentensegmente x und y leiten die Inkreisradius-Formel r = (a + b - c) / 2 her",
        "figcaption": "Gleiche Tangentensegmente ergeben a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "So verwenden Sie den Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Der Rechner braucht genau zwei Eingaben, in der Reihenfolge eingegeben. Die folgenden Schritte folgen dem Bildschirm-Layout von der Identifizierung der Messungen bis zum geprüften Ergebnis." },
          { "kind": "p", "text": "Der Rechner hat genau zwei Eingaben, den Inkreisradius [[r]] und den Halbumfang [[s]]. Er nimmt weder die drei Seiten, noch die Katheten, noch die Hypotenuse, noch einen Winkel. Die Multiplikation [[K=r\\times s]] ist vollständig, wie gezeigt; das Ergebnis darf niemals erneut durch zwei geteilt werden." }
        ],
        "steps": [
          "<strong>Bestimmen Sie den Inkreisradius des rechtwinkligen Dreiecks.</strong> Das ist der Radius des in das Dreieck einbeschriebenen Kreises. Sind die drei Seiten bekannt, berechnen Sie ihn mit [[r=\\frac{a+b-c}{2}]].",
          "<strong>Bestimmen Sie seinen Halbumfang.</strong> Addieren Sie die drei Seiten und teilen Sie durch zwei: [[s=\\frac{a+b+c}{2}]]. Das ist die Hälfte des vollen Umfangs, nicht der Umfang selbst.",
          "<strong>Stellen Sie sicher, dass beide Werte zum selben Dreieck gehören.</strong> Ein Inkreisradius aus einem Dreieck und ein Halbumfang aus einem anderen ergeben ein bedeutungsloses Produkt.",
          "<strong>Rechnen Sie die Messungen bei Bedarf in kompatible Einheiten um.</strong> Beide Längen müssen dieselbe Einheit verwenden: Meter mit Metern, Zentimeter mit Zentimetern, niemals gemischt.",
          "<strong>Geben Sie den Inkreisradius r in das erste Eingabefeld ein.</strong> Das ist der kleinere der beiden Werte in jedem gültigen Dreieck.",
          "<strong>Geben Sie den Halbumfang s in das zweite Eingabefeld ein.</strong> Prüfen Sie doppelt, dass der Wert die Hälfte des Umfangs ist, nicht der ganze Umfang.",
          "<strong>Klicken Sie auf Calculate Area.</strong> Der Rechner multipliziert die beiden Eingaben direkt.",
          "<strong>Prüfen Sie das angezeigte Ergebnis.</strong> Lesen Sie die Fläche und bestätigen Sie, dass sie für die Dreiecksgröße vernünftig aussieht.",
          "<strong>Prüfen Sie die Formel- und Einsetzschritte.</strong> Sie zeigen [[K=r\\times s]] mit den eingegebenen Werten.",
          "<strong>Bestätigen Sie, dass das Ergebnis in Quadrateinheiten angegeben ist.</strong> Multiplizierte Längeneinheiten ergeben Quadrateinheiten: m², cm², ft², passend zu den Eingaben.",
          "<strong>Verwenden Sie Reset, bevor Sie eine weitere Berechnung eingeben.</strong> Es löscht beide Felder für einen sauberen Neustart."
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele für die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Vier klassische rechtwinklige Dreiecke zeigen die volle Kette: von den Seiten zum Halbumfang, von den Seiten zum Inkreisradius, dann die eine Multiplikation. In diesen Beispielen werden r und s aus den Seitenlängen abgeleitet; der Rechner selbst nimmt r und s direkt entgegen." },
          { "kind": "h3", "text": "Beispiel 1: 3-4-5 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3]], [[b=4]], [[c=5]]. Schritt 1: Berechnen Sie den Halbumfang, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Schritt 2: Berechnen Sie den Inkreisradius, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Schritt 3: Berechnen Sie die Fläche, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Prüfen Sie mit der Kathetenformel: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Beispiel 2: 5-12-13 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5]], [[b=12]], [[c=13]]. Halbumfang: [[s=\\frac{5+12+13}{2}=15]]. Inkreisradius: [[r=\\frac{5+12-13}{2}=2]]. Fläche: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Prüfung: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Beispiel 3: 8-15-17 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=8]], [[b=15]], [[c=17]]. Halbumfang: [[s=\\frac{8+15+17}{2}=20]]. Inkreisradius: [[r=\\frac{8+15-17}{2}=3]]. Fläche: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Prüfung: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Beispiel 4: 7-24-25 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=7]], [[b=24]], [[c=25]]. Halbumfang: [[s=\\frac{7+24+25}{2}=28]]. Inkreisradius: [[r=\\frac{7+24-25}{2}=3]]. Fläche: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Prüfung: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Vergleich der durchgearbeiteten Beispiele" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Dreieck",
            "Kathete a",
            "Kathete b",
            "Hypotenuse c",
            "Inkreisradius r",
            "Halbumfang s",
            "Fläche K"
          ],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Anwendungen aus dem Alltag für die Fläche eines rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Zwölf durchgearbeitete Situationen tragen die Formel von der Seite in die Werkstatt, auf die Baustelle und ins Studio. Jede nennt ein rechtwinkliges Dreieckspanel, einen Abschnitt, ein Profil oder ein vereinfachtes Modell, arbeitet Inkreisradius und Halbumfang durch die Formel und nennt die Annahme hinter den Zahlen. Das sind vereinfachte rechtwinklige Dreiecksmodelle: Nicht jedes echte Fenster, Dach, Garten, jede Rampe, jedes Segel oder Grundstück bildet ein exaktes rechtwinkliges Dreieck, und ein unregelmäßiges Objekt muss in einfachere Formen zerlegt werden, bevor die Formel greift. Die Fläche beschreibt nur die ebene geometrische Oberfläche; sie begründet niemals allein die statische Festigkeit, Tragfähigkeit oder Bausicherheit." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiges Glasfenster" },
          { "kind": "p", "text": "Ein dreieckiges Glasfenster hat die Seiten [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Halbumfang: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Inkreisradius: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Fläche: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Das Ergebnis steht für die ebene dreieckige Glasfläche, bevor Rahmenzugaben abgezogen werden. Annahme: Die Scheibe ist ein echtes rechtwinkliges Dreieck; die Rahmenmaße werden separat behandelt." },
          { "kind": "h3", "text": "Beispiel 2: Stahlstützplatte" },
          { "kind": "p", "text": "Eine dreieckige Stahlstützplatte hat die Seiten [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Halbumfang: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Inkreisradius: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Fläche: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Das ist die ebene Plattenfläche und begründet nicht ihre statische Festigkeit. Annahme: Der Stützrohling ist als rechtwinkliges Dreieck geschnitten; Bolzenlöcher und Biegungen sind ausgenommen." },
          { "kind": "h3", "text": "Beispiel 3: Dachstützabschnitt" },
          { "kind": "p", "text": "Ein rechtwinkliger Dachstützabschnitt hat die Seiten [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Halbumfang: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Inkreisradius: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Fläche: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. Die Formel misst den ebenen dreieckigen Stützabschnitt, nützlich für Materialschätzungen. Annahme: Der Abschnitt ist als rechtwinkliges Dreieck modelliert; die volle Dachgeometrie kann abweichen." },
          { "kind": "h3", "text": "Beispiel 4: Dreieckiger Gartenabschnitt" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinkliger Gartenabschnitt hat die Seiten [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Halbumfang: [[s=28\\text{ m}]]. Inkreisradius: [[r=3\\text{ m}]]. Fläche: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. Die Fläche hilft, den dreieckigen Landschaftsabschnitt zu schätzen, etwa beim Bestellen von Rollrasen oder Mulch. Annahme: Die Beetgrenzen sind gerade und treffen sich im rechten Winkel." },
          { "kind": "h3", "text": "Beispiel 5: Rampenseitenprofil" },
          { "kind": "p", "text": "Ein vereinfachtes Rampenseitenprofil hat die Seiten [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Halbumfang: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Inkreisradius: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Fläche: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Das misst das dreieckige Seitenprofil, nicht die geneigte Rampenfläche. Annahme: Das Profil ist mit einer rechtwinkligen Ecke an der Basis modelliert." },
          { "kind": "h3", "text": "Beispiel 6: Sperrholzschablone" },
          { "kind": "p", "text": "Eine rechtwinklige Sperrholzschablone hat die Seiten [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Halbumfang: [[s=24\\text{ cm}]]. Inkreisradius: [[r=4\\text{ cm}]]. Fläche: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Die Berechnung schätzt die ebene Materialfläche vor dem Schnittverschnitt. Annahme: Die Schablone ist ein echtes rechtwinkliges Dreieck; Sägeschnitt und Reste kommen hinzu." },
          { "kind": "h3", "text": "Beispiel 7: Dreieckiges Schildpanel" },
          { "kind": "p", "text": "Ein dreieckiges Schildpanel hat die Seiten [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Halbumfang: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Inkreisradius: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Fläche: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Das steht für die ebene bedruckbare Fläche des Panels. Annahme: Die Panelfläche ist eben und rechtwinklig-dreieckig; Montagebeschläge sind ausgenommen." },
          { "kind": "h3", "text": "Beispiel 8: Vermessungsabschnitt" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinkliger Grundstücksabschnitt hat die Seiten [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Halbumfang: [[s=45\\text{ m}]]. Inkreisradius: [[r=4\\text{ m}]]. Fläche: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. Die Formel berechnet die Fläche des vermessenen dreieckigen Abschnitts. Annahme: Der Abschnitt ist mit einer rechtwinkligen Ecke modelliert; ein unregelmäßiges Grundstück braucht die Zerlegung in einfachere Formen." },
          { "kind": "h3", "text": "Beispiel 9: Stoffsegel" },
          { "kind": "p", "text": "Ein rechtwinkliges Stoffsegelpanel hat die Seiten [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Halbumfang: [[s=30\\text{ ft}]]. Inkreisradius: [[r=5\\text{ ft}]]. Fläche: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Das Ergebnis schließt Nähte, Säume und Stoffzugaben aus. Annahme: Das Segel ist flach modelliert; echte Segel wölben sich unter Last." },
          { "kind": "h3", "text": "Beispiel 10: Industriepanel" },
          { "kind": "p", "text": "Ein rechtwinkliges Industriepanel hat die Seiten [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Halbumfang: [[s=66\\text{ m}]]. Inkreisradius: [[r=5\\text{ m}]]. Fläche: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. Das Ergebnis beschreibt das ebene geometrische Panel statt seiner statischen Leistung. Annahme: Das Panel ist als rechtwinkliges Dreieck modelliert; Dicke und Befestigungen sind separate Themen." },
          { "kind": "h3", "text": "Beispiel 11: Lagerhaus-Dachgiebelabschnitt" },
          { "kind": "p", "text": "Ein vereinfachter Lagerhaus-Dachgiebelabschnitt hat die Seiten [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Halbumfang: [[s=91\\text{ ft}]]. Inkreisradius: [[r=6\\text{ ft}]]. Fläche: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Das Ergebnis schätzt den dreieckigen Giebelabschnitt, etwa bei der Preiskalkulation für die Verkleidung. Annahme: Der Giebel ist als rechtwinkliges Dreieck modelliert." },
          { "kind": "h3", "text": "Beispiel 12: Fertigungspanel" },
          { "kind": "p", "text": "Ein rechtwinkliges Fertigungspanel hat die Seiten [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Halbumfang: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Inkreisradius: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Fläche: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Diese Methode berechnet die ebene Dreiecksfläche des Panels direkt aus seinen Kreis- und Randmessungen. Annahme: Die Panelkanten sind gerade und treffen sich im rechten Winkel." },
          { "kind": "h3", "text": "Vergleich der Praxisbeispiele" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Praktische Anwendung",
            "Kathete a",
            "Kathete b",
            "Hypotenuse c",
            "Inkreisradius r",
            "Halbumfang s",
            "Berechnete Fläche",
            "Maßeinheit"
          ],
          "rows": [
            ["Glasfenster", "3", "4", "5", "1", "6", "6", "m²"],
            ["Stahlstütze", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Dachstütze", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Gartenabschnitt", "7", "24", "25", "3", "28", "84", "m²"],
            ["Rampenprofil", "9", "12", "15", "3", "18", "54", "m²"],
            ["Sperrholzschablone", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Schildpanel", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Vermessungsabschnitt", "9", "40", "41", "4", "45", "180", "m²"],
            ["Stoffsegel", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Industriepanel", "11", "60", "61", "5", "66", "330", "m²"],
            ["Lagerhaus-Dachgiebel", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Fertigungspanel", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Warum liefert die Inkreisradius-Formel dieselbe Fläche wie die Katheten-Formel?",
        "blocks": [
          { "kind": "p", "text": "Zwei verschiedene Formeln, ein Dreieck, eine Fläche. Starten Sie mit [[K=rs]] und der Standardfläche des rechtwinkligen Dreiecks [[K=\\frac{ab}{2}]], was [[[\\boxed{rs=\\frac{ab}{2}}]]] erzwingt. Beide Seiten messen dieselbe umschlossene Fläche mit unterschiedlichen geometrischen Informationen: Die eine liest den Inkreis und den Rand, die andere die beiden senkrechten Katheten." },
          { "kind": "h3", "text": "Numerischer Vergleich an einem 3-4-5-Dreieck" },
          { "kind": "p", "text": "Inkreisradius-Methode: [[r=1]], [[s=6]], also [[K=1\\times6=6]]. Katheten-Methode: [[K=\\frac{3\\times4}{2}=6]]. Die Antworten stimmen überein, weil Inkreisradius und Halbumfang dieselbe Seiteninformation kodieren wie die Katheten: [[r=\\frac{a+b-c}{2}]] und [[s=\\frac{a+b+c}{2}]] sind aus [[a]], [[b]] und [[c]] aufgebaut, also muss ihr Produkt die Fläche rekonstruieren, die die Katheten beschreiben. Diese Übereinstimmung ist kein Zufall; sie ist Algebra." },
          { "kind": "h3", "text": "Wann ist die Inkreisradius-Methode nützlicher?" },
          { "kind": "p", "text": "Die Inkreisradius-Methode gewinnt, wenn r und s schon vorliegen. Geometrieaufgaben über Inkreise liefern den Inkreisradius direkt. Ein Beweis, der die Fläche über Kreismessungen ausgedrückt braucht, verwendet [[K=rs]] natürlicherweise. Wettbewerbsaufgaben liefern den Halbumfang oft als Teil der Aufgabenstellung. Und als Gegenkontrolle fängt die zweifache unabhängige Flächenberechnung Rechenfehler, die eine einzelne Methode verbergen würde. In jedem Fall geht es um Eingabekomfort: Starten Sie mit den Messungen, die Sie haben." },
          { "kind": "h3", "text": "Wann ist die Katheten-Formel einfacher?" },
          { "kind": "p", "text": "Sind beide senkrechten Katheten schon bekannt, ist [[K=\\frac{ab}{2}]] meist direkter: eine Multiplikation, eine Halbierung, kein r oder s dazwischen zu berechnen. Inkreisradius und Halbumfang erst herzuleiten und dann zu multiplizieren, fügt zwei Schritte hinzu, die nichts ändern. Die Halbumfang-Methode ist nicht immer der einfachste Weg; sie ist der beste Weg, wenn der Inkreis oder der Rand der natürliche Startpunkt ist, und ein Umweg, wenn die Katheten vor Ihnen liegen." }
        ]
      },
      "sec-heron": {
        "h2": "Was ist der Unterschied zwischen der Heron-Formel und Fläche = Inkreisradius × Halbumfang?",
        "blocks": [
          { "kind": "p", "text": "Die Heron-Formel berechnet die Fläche aus den drei Seitenlängen: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Sie erfordert den Halbumfang, aber nicht den Inkreisradius, und funktioniert für jedes gültige Dreieck. Die Inkreisradius-Formel [[[\\boxed{K=rs}]]] braucht stattdessen Inkreisradius und Halbumfang statt der drei Seiten. Der Unterschied liegt in den Eingaben, nicht in der Geometrie: Beide liefern dieselbe umschlossene Fläche, weil die beiden Formeln über [[r=\\frac{K}{s}]] verknüpft sind. Die Heron-Formel ist die natürliche Wahl, wenn alle drei Seiten bekannt sind und keine Kreisdaten existieren; die Inkreisradius-Formel ist natürlich, wenn der Inkreis Teil des Bildes ist." },
          { "kind": "h3", "text": "Durchgearbeiteter Vergleich" },
          { "kind": "p", "text": "Verwenden Sie ein 3-4-5-Dreieck. Heron-Formel: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Inkreisradius-Formel: [[K=1\\times6]], [[[\\boxed{K=6}]]]. Die Antworten stimmen überein, weil sich der Heron-Ausdruck über dieselbe Drei-Dreiecke-Zerlegung zu [[r\\times s]] vereinfacht: Die Quadratwurzel aus [[s(s-a)(s-b)(s-c)]] ist [[rs]], wann immer r und s vom selben Dreieck stammen. Verwechseln Sie die beiden Werkzeuge jedoch nicht: Die Heron-Formel fragt niemals nach dem Inkreisradius, und die Inkreisradius-Abkürzung [[r=\\frac{a+b-c}{2}]] gehört nur zu rechtwinkligen Dreiecken." }
        ]
      },
      "sec-consistency": {
        "h2": "So prüfen Sie, ob Inkreisradius und Halbumfang gültig sind",
        "blocks": [
          { "kind": "p", "text": "Der Rechner nimmt zwei Werte entgegen und multipliziert sie, doch das Produkt ist nur dann die Fläche eines rechtwinkligen Dreiecks, wenn beide Werte dasselbe Dreieck beschreiben. Die folgenden Prüfungen trennen gültige Eingaben von Hochstaplern." },
          { "kind": "h3", "text": "Grundlegende Eingabebedingungen" },
          { "kind": "p", "text": "Beide Eingaben müssen positiv sein: [[r>0]] und [[s>0]]. Eine Länge kann nicht null oder negativ sein, also hat ein nicht positiver Eintrag keine geometrische Bedeutung. Null würde das Dreieck zu einer Linie ohne Fläche kollabieren lassen; ein negativer Wert beschreibt gar nichts. Messen oder leiten Sie jede Eingabe neu ab, die diesen Test nicht besteht." },
          { "kind": "h3", "text": "Der Halbumfang muss größer als der Inkreisradius sein" },
          { "kind": "p", "text": "In einem gültigen Dreieck überragt der Halbumfang den Inkreisradius deutlich. Aus [[K=rs]] und [[K=\\frac{ab}{2}]] mit positiven Katheten und aus der Geometrie des im Dreieck sitzenden Inkreises ist [[s]] stets klar größer als [[r]]: für das 3-4-5-Dreieck 6 gegen 1; für 5-12-13 15 gegen 2. Die Werte müssen außerdem zu einem gültigen Satz von drei Seiten gehören, daher ist dieser Vergleich ein Schnellfilter, nicht die ganze Prüfung. Ein Inkreisradius größer als der Halbumfang kann aus keinem Dreieck stammen." },
          { "kind": "h3", "text": "Erweiterte Konsistenzprüfung für rechtwinklige Dreiecke" },
          { "kind": "p", "text": "Für einen strengeren Test muss ein rechtwinkliges Dreieck [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]] erfüllen, ungefähr [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. Die Idee ist einfach: Aus gegebenem r und s müssen die beiden Katheten die positiven Lösungen einer quadratischen Gleichung sein, die aus [[a+b=s+r]] und [[ab=2rs]] aufgebaut ist, und diese Gleichung hat nur dann reelle Lösungen, wenn ihre Diskriminante nicht negativ bleibt. Die Diskriminantenbedingung vereinfacht sich zu genau dieser Schranke. Prüfen Sie 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], gültig. Das ist eine optionale Verfeinerung für sorgfältige Arbeit, kein Pflichtteil der Anfängerrechnung." },
          { "kind": "h3", "text": "Was passiert, wenn die Eingaben inkonsistent sind?" },
          { "kind": "p", "text": "Zwei positive Zahlen zu multiplizieren liefert immer ein numerisches Ergebnis, doch das beweist nicht, dass sie Inkreisradius und Halbumfang desselben rechtwinkligen Dreiecks darstellen. Ein r aus einem Dreieck, gepaart mit einem s aus einem anderen, ergibt ein Produkt ohne geometrische Bedeutung, so sauber die Arithmetik auch aussieht. Sofern die Rechner-Implementierung nicht auf Prüfverhalten getestet wurde, nehmen Sie nicht an, dass sie die Beziehung kontrolliert: Führen Sie die obigen Prüfungen selbst durch, berechnen Sie r und s aus den Seiten neu, wenn die Seiten bekannt sind, und kontrollieren Sie die Fläche mit der Kathetenformel." }
        ]
      },
      "sec-units": {
        "h2": "Wie sich Maßeinheiten auf Inkreisradius- und Halbumfang-Berechnungen auswirken",
        "blocks": [
          { "kind": "p", "text": "Inkreisradius und Halbumfang sind beide Längen, also folgen sie denselben Einheitenregeln wie jede andere Längenmessung. Die Quadrateinheit in der Antwort kommt aus der Multiplikation zweier Längeneinheiten, was kompatible Einheiten zum ganzen Spiel macht." },
          { "kind": "h3", "text": "Warum müssen beide Eingaben kompatible Einheiten verwenden?" },
          { "kind": "p", "text": "Das Produkt [[K=r\\times s]] multipliziert eine Länge mit einer Länge. Ist r in Zentimetern und s in Metern, mischt das Produkt die beiden Maßstäbe, und die Zahl hat keine saubere Bedeutung. Rechnen Sie zuerst um, sodass beide Eingaben eine Einheit teilen: Meter, Zentimeter, Millimeter, Fuß, Zoll oder Yard, aber dieselbe für beide. Der Rechner hat aus diesem Grund Einheitenwähler: Stellen Sie sie ein, bevor Sie die Zahlen eingeben." },
          { "kind": "h3", "text": "Durchgearbeitetes Einheitenumrechnungsbeispiel" },
          { "kind": "p", "text": "Gegeben [[r=10\\text{ cm}]] und [[s=1\\text{ m}]]. Rechnen Sie den Halbumfang um: [[1\\text{ m}=100\\text{ cm}]]. Dann [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. Alternativ rechnen Sie den Inkreisradius um: [[10\\text{ cm}=0.1\\text{ m}]], dann [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. Beide Antworten beschreiben dieselbe Fläche, denn [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Rechnen Sie zuerst um, multiplizieren Sie dann, und jeder Einheitenweg landet am richtigen Ort." },
          { "kind": "h3", "text": "Warum wird das Ergebnis in Quadrateinheiten angegeben?" },
          { "kind": "p", "text": "Die Fläche zählt Einheitsquadrate, die die Oberfläche bedecken: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Die Einheit ist stets die quadrierte Längeneinheit, weil das Produkt zweier Längen eine Anzahl von Quadraten ist. Eine Fläche als einfache Länge anzugeben, etwa 1000 cm, ist ein Kategorienfehler: 1000 cm ist eine Länge, während 1000 cm² eine Fläche ist." },
          { "kind": "h3", "text": "Mit Dezimalwerten arbeiten" },
          { "kind": "p", "text": "Die Formel behandelt Dezimalzahlen ohne Änderung. Gegeben [[r=2.5]] und [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Ganze Zahlen, Dezimalzahlen und feine Werkstattmessungen fließen alle durch dieselbe Multiplikation. Bewahren Sie die volle Genauigkeit durch die Berechnung und runden Sie erst die Endantwort auf die Genauigkeit, die die Messungen rechtfertigen." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus dem Halbumfang",
        "blocks": [
          { "kind": "p", "text": "Fast jede falsche Antwort in diesem Thema geht auf eine verwechselte Bezeichnung statt auf schlechtes Rechnen zurück. Die sechzehn folgenden Fehler sind die, die immer wieder auftauchen, jeder mit Ursache und Abhilfe." },
          { "kind": "h3", "text": "1. Halbumfang mit vollem Umfang verwechseln" },
          { "kind": "p", "text": "[[P=12]] einzugeben, wo [[s=6]] hingehört, verdoppelt die Antwort: [[1\\times12=12]] statt 6. Der Fehler passiert, weil die Alltagssprache Umfang sagt, während die Formel seine Hälfte will. Abhilfe: Halbieren Sie immer zuerst die Randsumme, bevor Sie sie eingeben, und prüfen Sie, dass das eingegebene s kleiner als der Umfang ist." },
          { "kind": "h3", "text": "2. Umkreisradius statt Inkreisradius verwenden" },
          { "kind": "p", "text": "Der Umkreisradius des 3-4-5-Dreiecks ist [[R=\\frac{5}{2}=2.5]]; ihn zu verwenden ergibt [[2.5\\times6=15]], fast das Dreifache der wahren Fläche. Der Fehler kommt daher, dass beide Kreise das Wort Radius teilen. Abhilfe: Bestätigen Sie, dass der Radius zum Kreis innerhalb des Dreiecks gehört, der alle drei Seiten berührt, nicht zu dem durch die Eckpunkte." },
          { "kind": "h3", "text": "3. Vergessen, den Halbumfang korrekt zu berechnen" },
          { "kind": "p", "text": "Nur zwei Seiten zu addieren oder jede Seite vor dem Addieren durch zwei zu teilen, erzeugt ein falsches s. Für 3-4-5 ergibt das Addieren von 3 + 4 mit Division 3,5, und [[1\\times3.5=3.5]] ist bedeutungslos. Abhilfe: Summieren Sie zuerst alle drei Seiten, teilen Sie dann einmal: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Das Endergebnis erneut durch zwei teilen" },
          { "kind": "p", "text": "Nach [[K=1\\times6=6]] ergibt eine weitere Halbierung 3. Die Gewohnheit kommt aus der Kathetenformel, wo die Division explizit ist. Abhilfe: Erinnern Sie sich, dass die Hälften schon im Halbumfang aufgegangen sind; [[K=r\\times s]] ist vollständig." },
          { "kind": "h3", "text": "5. Die falsche Inkreisradius-Formel für das rechtwinklige Dreieck verwenden" },
          { "kind": "p", "text": "[[r=\\frac{c-a-b}{2}]] oder [[r=\\frac{a+b}{2}]] zu raten erzeugt einen falschen Radius. Für 3-4-5 ist [[\\frac{5-3-4}{2}=-1]] nicht einmal eine Länge. Abhilfe: Verwenden Sie [[r=\\frac{a+b-c}{2}]] mit a und b als Katheten und c als Hypotenuse, genau in dieser Anordnung." },
          { "kind": "h3", "text": "6. Die rechtwinklige Inkreisradius-Abkürzung auf ein gewöhnliches Dreieck anwenden" },
          { "kind": "p", "text": "Die Abkürzung stützt sich auf den rechten Winkel, berechnet also auf einem allgemeinen Dreieck eine Zahl ohne geometrische Bedeutung. Abhilfe: Finden Sie bei nicht rechtwinkligen Dreiecken den Inkreisradius aus [[r=\\frac{K}{s}]] oder einer an die bekannten Messungen angepassten Formel, niemals aus [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Inkreisradius und Halbumfang aus verschiedenen Dreiecken eingeben" },
          { "kind": "p", "text": "r = 1 aus einem 3-4-5-Dreieck und s = 15 aus einem 5-12-13-Dreieck zu nehmen ergibt 15, ein Produkt, das kein echtes Dreieck beschreibt. Der Fehler passiert, wenn Werte aus verschiedenen durchgearbeiteten Beispielen oder verschiedenen Zeichnungen kopiert werden. Abhilfe: Leiten Sie beide Eingaben aus demselben Dreieck ab oder messen Sie sie an ihm, bevor Sie multiplizieren." },
          { "kind": "h3", "text": "8. Zentimeter und Meter mischen" },
          { "kind": "p", "text": "r = 10 cm mit s = 1 m zu multiplizieren, ohne umzurechnen, ergibt 10 von nichts Sauberem. Abhilfe: Rechnen Sie zuerst auf eine Einheit um: [[1\\text{ m}=100\\text{ cm}]], dann [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Das Ergebnis in Längeneinheiten angeben" },
          { "kind": "p", "text": "Eine Fläche von 6 m² ist nicht 6 m. Der Fehler kommt meist daher, die Eingabeeinheit zu kopieren, ohne sie zu quadrieren. Abhilfe: Schreiben Sie die quadrierte Einheit jedes Mal mit der Zahl: m², cm², ft²." },
          { "kind": "h3", "text": "10. Null- oder Negativmessungen eingeben" },
          { "kind": "p", "text": "Längen sind positiv. Null lässt das Dreieck zu einer Linie ohne Fläche kollabieren, und negative Längen haben hier keine geometrische Bedeutung. Abhilfe: Messen oder leiten Sie die Eingabe neu ab; weisen Sie nicht positive Werte vor dem Rechnen zurück." },
          { "kind": "h3", "text": "11. Inkreismittelpunkt mit Umkreismittelpunkt verwechseln" },
          { "kind": "p", "text": "Der Inkreismittelpunkt ist der Treffpunkt der Winkelhalbierenden; der Umkreismittelpunkt ist der Treffpunkt der Mittelsenkrechten der Seiten. Für ein rechtwinkliges Dreieck sitzt der Umkreismittelpunkt im Mittelpunkt der Hypotenuse, ein völlig anderer Punkt. Sie zu verwechseln führt zum Messen des falschen Radius. Abhilfe: Der Inkreismittelpunkt [[I]] liegt im Dreieck in gleichem Abstand zu den Seiten, nicht zu den Eckpunkten." },
          { "kind": "h3", "text": "12. Annehmen, der Inkreis berühre nur zwei Seiten" },
          { "kind": "p", "text": "Ein in eine Ecke gekeilter Kreis berührt zwei Seiten, doch das ist nicht der Inkreis. Der Inkreis berührt alle drei, und der Flächenbeweis braucht alle drei Berührpunkte. Abhilfe: Prüfen Sie drei Berührpunkte, einen je Seite, bevor Sie einen Radius als Inkreisradius behandeln." },
          { "kind": "h3", "text": "13. Vergessen, dass der Radius jede berührte Seite senkrecht trifft" },
          { "kind": "p", "text": "Das Argument der gemeinsamen Höhe im Beweis hängt von [[r\\perp a]], [[r\\perp b]], [[r\\perp c]] ab. Ein schräges Segment vom Inkreismittelpunkt zu einer Seite ist länger als r und kann nicht als Höhe dienen. Abhilfe: Messen Sie den Inkreisradius entlang der Senkrechten zur Seite, niemals entlang einer Diagonalen." },
          { "kind": "h3", "text": "14. Inkreisradius mit Durchmesser verwechseln" },
          { "kind": "p", "text": "Die volle Breite des Inkreises als r einzugeben, verdoppelt den Radius und verdoppelt die Fläche. Für das 3-4-5-Dreieck ergibt die Eingabe von 2 statt 1 [[2\\times6=12]]. Abhilfe: Der Inkreisradius verläuft vom Mittelpunkt zu einer Seite, der halben vollen Breite des Kreises." },
          { "kind": "h3", "text": "15. Die Heron-Formel falsch verwenden" },
          { "kind": "p", "text": "Typische Patzer sind die vergessene Quadratwurzel, das Schreiben von [[s(s+a)(s+b)(s+c)]] mit Pluszeichen oder das Füttern der Formel mit dem vollen Umfang. Für 3-4-5 ergibt das Weglassen der Wurzel 36 statt 6. Abhilfe: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], mit Halbumfang, Minuszeichen und Wurzel alle an ihrem Platz." },
          { "kind": "h3", "text": "16. Annehmen, ein numerisches Ergebnis beweise automatisch, dass die Eingaben geometrisch konsistent sind" },
          { "kind": "p", "text": "Zwei beliebige positive Zahlen lassen sich multiplizieren, also liefert der Rechner immer etwas. Dieses Etwas ist nur dann die Fläche eines rechtwinkligen Dreiecks, wenn r und s wirklich zu einem gehören. Abhilfe: Führen Sie die Konsistenzprüfungen durch, berechnen Sie r und s aus den Seiten neu, wenn möglich, und kontrollieren Sie mit der Kathetenformel, bevor Sie der Zahl vertrauen." },
          { "kind": "h3", "text": "Falsch gegen richtig: Ein konkretes Beispiel" },
          { "kind": "p", "text": "Verwenden Sie [[r=1]], [[s=6]]. Richtig: [[K=1\\times6=6]]. Fälschlich erneut durch zwei geteilt: [[K=\\frac{1\\times6}{2}=3]], falsch, weil die Halbierung schon im Halbumfang steckt. Fälschlich den vollen Umfang 12 statt des Halbumfangs 6 eingegeben: [[K=1\\times12=12]], das Doppelte der wahren Fläche. Die Arithmetik sieht in allen drei Fällen selbstsicher aus; nur die Geometrie unterscheidet sie." }
        ]
      },
      "sec-verify": {
        "h2": "So prüfen Sie, ob Ihre Dreiecksfläche korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Sechs unabhängige Prüfungen, alle am 3-4-5-Dreieck demonstriert ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). Übereinstimmung zwischen verschiedenen Wegen ist der stärkste Beleg, dass eine Antwort stimmt, in Hausaufgaben wie in praktischer Messung." },
          { "kind": "h3", "text": "Methode 1: Die Hauptformel prüfen" },
          { "kind": "p", "text": "Rechnen Sie [[K=r\\times s]] frisch nach: [[K=1\\times6=6]]. Ein zweiter Durchgang mit neu eingegebenen Zahlen fängt Tipp- und Eingabefehler." },
          { "kind": "h3", "text": "Methode 2: Den Halbumfang aus drei Seiten berechnen" },
          { "kind": "p", "text": "Berechnen Sie [[s=\\frac{a+b+c}{2}]] aus den Seiten neu: [[s=\\frac{3+4+5}{2}=6]]. Weicht das neuberechnete s vom eingegebenen ab, war die Eingabe falsch und das Produkt muss wiederholt werden." },
          { "kind": "h3", "text": "Methode 3: Den Inkreisradius aus dem rechtwinkligen Dreieck berechnen" },
          { "kind": "p", "text": "Berechnen Sie [[r=\\frac{a+b-c}{2}]] neu: [[r=\\frac{3+4-5}{2}=1]]. Eine Abweichung vom eingegebenen r bedeutet, dass der Radius aus einem anderen Dreieck oder einer falsch angewandten Formel stammt." },
          { "kind": "h3", "text": "Methode 4: Mit der Standard-Kathetenformel prüfen" },
          { "kind": "p", "text": "Berechnen Sie [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Dieser Weg verwendet völlig andere Eingaben, sodass die Übereinstimmung mit [[rs]] sowohl die Eingaben als auch die Rechnung bestätigt." },
          { "kind": "h3", "text": "Methode 5: Mit der Heron-Formel prüfen" },
          { "kind": "p", "text": "Berechnen Sie [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Die Heron-Formel beansprucht Seiten und Halbumfang gemeinsam und fängt Seitenbezeichnungsfehler, die die anderen Prüfungen übersehen könnten." },
          { "kind": "h3", "text": "Methode 6: Den Satz des Pythagoras prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Das prüft die Seitenidentifizierung hinter jeder anderen Berechnung; eine falsche Hypotenuse bedeutet, dass eine Seite falsch bezeichnet wurde und r, s und K alle neu aufgebaut werden müssen." }
        ]
      },
      "sec-applications": {
        "h2": "Praktische Anwendungen der Inkreisradius-Halbumfang-Formel",
        "blocks": [
          { "kind": "p", "text": "Dasselbe Zwei-Eingaben-Muster taucht überall auf, wo ein Dreieckspanel oder -abschnitt zu vermessen ist und die Inkreisdaten der bequeme Startpunkt sind. Ein Glaser bemisst ein Fenster anhand seiner Kantenlängen; ein Fertiger liest die Katheten eines Stützrohlings; ein Vermesser reduziert eine Grundstücksecke auf drei gerade Seiten. Aus diesen Seiten kommen Inkreisradius und Halbumfang, und eine Multiplikation nennt die Fläche. Die vier Panels unten zeigen das Muster in verschiedenen Maßstäben: ein Glasfenster (6 m²), eine Dachstütze (60 ft²), ein Gartenabschnitt (84 m²) und eine Stahlplatte (30 cm²), jedes mit seinem Inkreisradius, seinem Halbumfang und der resultierenden Fläche beschriftet." }
        ],
        "imgAlt": "Vier Panels: Glasfenster 6 m2, Dachstütze 60 ft2, Gartenabschnitt 84 m2, Stahlplatte 30 cm2",
        "figcaption": "Vier echte Anwendungen: ein Glasfenster, eine Dachstütze, ein Gartenabschnitt und eine Stahlplatte."
      },
      "sec-conclusion": {
        "h2": "Zwei Messungen, ein Produkt",
        "blocks": [
          { "kind": "p", "text": "Ein Inkreisradius und ein Halbumfang genügen. Multiplizieren Sie sie, und die umschlossene Fläche ist benannt. Der Drei-Dreiecke-Beweis zeigt, warum der Multiplikation keine Division folgt, das Tangentensegment-Argument zeigt, warum das rechtwinklige Dreieck seine Inkreisradius-Abkürzung bekommt, und die Kathetenformel plus die Heron-Formel stehen bereit, jede Antwort zu prüfen." },
          { "kind": "p", "text": "Die Arbeitsgewohnheit ist einfach: Bestätigen Sie, dass beide Eingaben dasselbe Dreieck beschreiben, gleichen Sie die Einheiten an, lassen Sie Dezimalzahlen bis zum Ende ungerundet und prüfen Sie über eine zweite Methode nach. Mit diesen Gewohnheiten ist [[K=r\\times s]] eine der verlässlichsten Flächenberechnungen in der Geometrie." }
        ]
      },
      "sec-related": {
        "h2": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
        "blocks": [
          { "kind": "p", "text": "Unterschiedliche Messungen verlangen unterschiedliche Rechner." }
        ]
      },
      "sec-faq": {
        "h2": "Häufig gestellte Fragen",
        "blocks": []
      }
    }
  },
  "it": {
    "faqs": [
      {
        "question": "Qual è la formula dell'area di un triangolo rettangolo usando inraggio e semiperimetro?",
        "answer": "K = r × s, dove r è l'inraggio (il raggio della circonferenza inscritta) e s è il semiperimetro (metà del perimetro). Moltiplica i due e il prodotto è l'area, senza alcun passaggio di divisione. Per r = 1 e s = 6, K = 1 × 6 = 6 unità quadrate. Entrambi gli input devono descrivere lo stesso triangolo."
      },
      {
        "question": "Che cos'è un inraggio?",
        "answer": "L'inraggio è il raggio della circonferenza inscritta, il cerchio che sta esattamente dentro un triangolo e tocca tutti e tre i lati. Equivale alla distanza perpendicolare dall'incentro, dove si incontrano le tre bisettrici degli angoli, a un lato qualsiasi. Per un triangolo rettangolo con cateti a e b e ipotenusa c, esiste la scorciatoia r = (a + b - c) / 2."
      },
      {
        "question": "Qual è la differenza tra inraggio e circumraggio?",
        "answer": "L'inraggio appartiene al cerchio dentro il triangolo, tangente a tutti e tre i lati; il circumraggio appartiene al cerchio che passa per tutti e tre i vertici. Misurano cerchi diversi, quindi i loro valori differiscono. Per un triangolo rettangolo il circumraggio è R = c/2, esattamente metà dell'ipotenusa, mentre l'inraggio è (a + b - c)/2."
      },
      {
        "question": "Come calcolo il semiperimetro di un triangolo rettangolo?",
        "answer": "Somma i tre lati e dividi per due: s = (a + b + c) / 2. Per un triangolo 3-4-5, s = (3 + 4 + 5) / 2 = 6. Il semiperimetro è metà del perimetro intero, quindi inserire per errore il perimetro intero raddoppia l'area quando si usa K = r × s."
      },
      {
        "question": "Come trovo l'inraggio usando tre lunghezze dei lati?",
        "answer": "Per un triangolo rettangolo, usa la scorciatoia r = (a + b - c) / 2, dove a e b sono i cateti e c è l'ipotenusa. Con i lati 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Questa scorciatoia vale solo per i triangoli rettangoli; gli altri triangoli richiedono la relazione generale r = K / s."
      },
      {
        "question": "Perché l'area è uguale all'inraggio moltiplicato per il semiperimetro?",
        "answer": "Congiungendo l'incentro ai tre vertici, il triangolo si divide in tre triangoli più piccoli, ciascuno con base uguale a un lato e altezza uguale a r. Le loro aree sono ar/2, br/2 e cr/2. Sommandole si ottiene r(a + b + c)/2, e poiché s = (a + b + c)/2, il totale è r × s."
      },
      {
        "question": "La formula funziona per tutti i triangoli?",
        "answer": "Sì. Ogni triangolo non degenere ha una circonferenza inscritta e un incentro, quindi la scomposizione in tre triangoli vale per triangoli rettangoli, acutangoli e ottusangoli. Il triangolo rettangolo è semplicemente più facile perché il suo inraggio si ricava dai lati con r = (a + b - c) / 2. L'inraggio generale viene comunque da r = K / s."
      },
      {
        "question": "Il semiperimetro è la stessa cosa del perimetro?",
        "answer": "No. Il semiperimetro è esattamente metà del perimetro: s = P/2. Per un triangolo 3-4-5 il perimetro è 12 e il semiperimetro è 6. Inserire il perimetro intero in K = r × s dà 1 × 12 = 12, il doppio dell'area corretta di 6. Dimezza il perimetro prima di moltiplicare."
      },
      {
        "question": "Devo dividere la risposta finale per due?",
        "answer": "No. La formula K = r × s tiene già conto di ogni divisione: le metà dei tre triangoli più piccoli sono assorbite nel semiperimetro. Dividere di nuovo dopo la moltiplicazione è l'errore più comune. Con r = 1 e s = 6, l'area corretta è 6, mentre (1 × 6) / 2 = 3 è sbagliato."
      },
      {
        "question": "Qual è la relazione tra la formula di Erone e la formula dell'inraggio?",
        "answer": "Entrambe calcolano la stessa area ma partono da input diversi. La formula di Erone, K = sqrt(s(s - a)(s - b)(s - c)), richiede tutti e tre i lati; K = r × s richiede invece inraggio e semiperimetro. Per un triangolo 3-4-5 entrambe danno 6, il che rende ciascuna formula un ottimo controllo dell'altra."
      },
      {
        "question": "Posso usare valori decimali per inraggio e semiperimetro?",
        "answer": "Sì. La formula tratta i decimali esattamente come i numeri interi. Con r = 2.5 e s = 8.4, K = 2.5 × 8.4 = 21 unità quadrate. Mantieni la piena precisione durante la moltiplicazione e arrotonda solo la risposta finale, in base alla precisione delle misure."
      },
      {
        "question": "Come posso verificare se il mio inraggio e semiperimetro sono corretti?",
        "answer": "Controlla che entrambi siano positivi e che s sia chiaramente più grande di r. Se i lati sono noti, ricalcola s = (a + b + c)/2 e r = (a + b - c)/2, poi verifica l'area con K = ab/2 e la formula di Erone. La concordanza tra i metodi è una prova forte. Valori provenienti da triangoli diversi danno un numero che non è l'area reale."
      }
    ],
    "relatedHeading": "Esplora le calcolatrici correlate per triangoli rettangoli",
    "relatedItems": [
      "Calcolatrice dell'area del triangolo rettangolo dai cateti",
      "Calcolatrice del semiperimetro del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo dall'altezza",
      "Calcolatrice dell'area del triangolo rettangolo da un angolo",
      "Calcolatrice del perimetro del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo"
    ],
    "relatedIntro": "Misure diverse richiedono calcolatrici diverse.",
    "faqHeading": "Domande frequenti",
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo usando inraggio e semiperimetro",
      "sec-right-triangle": "Che cos'è un triangolo rettangolo?",
      "sec-incircle": "Comprendere la circonferenza inscritta di un triangolo rettangolo",
      "sec-semiperimeter": "Comprendere il semiperimetro di un triangolo",
      "sec-formula": "Perché l'area di un triangolo è uguale all'inraggio per il semiperimetro?",
      "sec-inradius": "Come calcolare l'inraggio di un triangolo rettangolo",
      "sec-howto": "Come usare la calcolatrice dell'area del triangolo rettangolo dal semiperimetro",
      "sec-examples": "Esempi passo passo dell'area di un triangolo rettangolo con inraggio e semiperimetro",
      "sec-practical": "Applicazioni reali dell'area di un triangolo rettangolo da inraggio e semiperimetro",
      "sec-legs-comparison": "Perché la formula dell'inraggio dà la stessa area della formula dei cateti?",
      "sec-heron": "Qual è la differenza tra la formula di Erone e Area = inraggio × semiperimetro?",
      "sec-consistency": "Come verificare che inraggio e semiperimetro siano validi",
      "sec-units": "Come le unità di misura influenzano i calcoli di inraggio e semiperimetro",
      "sec-mistakes": "Errori comuni nel calcolo dell'area di un triangolo rettangolo dal semiperimetro",
      "sec-verify": "Come verificare che l'area del triangolo rettangolo sia corretta",
      "sec-applications": "Applicazioni pratiche della formula di inraggio e semiperimetro",
      "sec-related": "Esplora le calcolatrici correlate per triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Due misure, un prodotto"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare l'area di un triangolo rettangolo usando inraggio e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Prendi [[r=1]], [[s=6]]. Applica [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Il risultato indica l'area piana totale racchiusa dai tre lati del triangolo: sei unità quadrate. È esattamente ciò che la calcolatrice dell'area del triangolo rettangolo dal semiperimetro restituisce per questi due input." },
          { "kind": "p", "text": "L'inraggio è il raggio del cerchio annidato dentro il triangolo, tangente a tutti e tre i lati. Il semiperimetro è metà della lunghezza del contorno: il totale dei tre lati diviso per due. Due misure bastano perché l'inraggio funge da altezza perpendicolare comune per tre triangoli più piccoli costruiti dall'incentro, mentre il semiperimetro raccoglie le loro basi in un unico fattore." },
          { "kind": "p", "text": "Il ragionamento funziona per ogni triangolo, perché ciascuno possiede una circonferenza inscritta. Il triangolo rettangolo aggiunge un vantaggio: il suo inraggio deriva dai tre lati tramite una formula breve, quindi r e s sono spesso già noti. Questo metodo risplende nei problemi in cui la circonferenza inscritta o il semiperimetro sono dati, poiché nessun cateto o angolo deve essere misurato." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Che cos'è un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Prima che la circonferenza inscritta entri in scena, il triangolo stesso deve essere etichettato senza errori. I simboli qui sotto restano fissi in tutta la guida, e la calcolatrice usa gli stessi nomi." },
          { "kind": "h3", "text": "Definizione di triangolo rettangolo" },
          { "kind": "p", "text": "Un triangolo rettangolo è un poligono a tre lati contenente esattamente un angolo interno di 90 gradi. Ha tre vertici, tre lati, due angoli acuti e un angolo retto di solito contrassegnato da un piccolo quadrato. I due lati che formano l'angolo retto sono i cateti; il lato opposto è l'ipotenusa. Poiché [[C=90^\\circ]], segue che [[[\\boxed{A+B=90^\\circ}]]]: i due angoli acuti sono complementari, quindi conoscere uno determina l'altro." },
          { "kind": "h3", "text": "Comprendere i due cateti" },
          { "kind": "p", "text": "Il cateto [[a]] è opposto all'angolo [[A]]; il cateto [[b]] è opposto all'angolo [[B]]. I due cateti si incontrano al vertice dell'angolo retto e sono perpendicolari tra loro. Contribuiscono direttamente all'area, perché ciascun cateto può fungere da base mentre l'altro funge da altezza perpendicolare. Per questa pagina alimentano anche l'inraggio, poiché la scorciatoia [[r=\\frac{a+b-c}{2}]] è costruita da entrambi i cateti e dall'ipotenusa." },
          { "kind": "h3", "text": "Comprendere l'ipotenusa" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo di 90 gradi, sempre il lato più lungo del triangolo. Non forma mai l'angolo retto; si estende di fronte a esso. Nella formula dell'area dai cateti non ha alcun ruolo, ma qui conta: l'ipotenusa entra sia nel semiperimetro [[s=\\frac{a+b+c}{2}]] sia nella scorciatoia dell'inraggio [[r=\\frac{a+b-c}{2}]]. Se entrambi i cateti sono noti, il teorema di Pitagora la recupera tramite [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Che cosa distingue questo triangolo dagli altri triangoli?" },
          { "kind": "p", "text": "L'angolo a 90 gradi è tutta la storia. Rende i cateti perpendicolari senza alcuna costruzione, il che semplifica la formula standard dell'area, e rende i segmenti di tangenza della circonferenza inscritta vicino all'angolo retto uguali all'inraggio stesso, il che semplifica la formula dell'inraggio. Gli altri triangoli soddisfano comunque [[K=r\\times s]], ma trovare il loro inraggio richiede di solito prima l'area. Il triangolo rettangolo è l'unico caso in cui l'inraggio deriva direttamente dalle lunghezze dei lati." }
        ]
      },
      "sec-incircle": {
        "h2": "Comprendere la circonferenza inscritta di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "L'inraggio ha senso solo una volta che la circonferenza inscritta è visualizzata chiaramente. Questa sezione costruisce l'idea dal cerchio stesso fino ai punti di tangenza in cui il raggio incontra ciascun lato." },
          { "kind": "h3", "text": "Definizione di circonferenza inscritta" },
          { "kind": "p", "text": "Una circonferenza inscritta è un cerchio posizionato dentro un triangolo in modo da toccare tutti e tre i lati. Sta all'interno, tangente a ciascun lato in esattamente un punto, e non può attraversare un lato perché la tangenza la tiene ferma. Ogni triangolo non degenere possiede esattamente una circonferenza inscritta: restringi un cerchio nelle regioni degli angoli e c'è un'unica dimensione massima che bacia tutti e tre i lati. I tre punti di tangenza, uno per lato, sono i luoghi dove più tardi verrà misurato l'inraggio." },
          { "kind": "h3", "text": "Che cos'è l'incentro?" },
          { "kind": "p", "text": "L'incentro, indicato con [[I]], è il punto in cui si incontrano le tre bisettrici interne degli angoli. Ciascuna bisettrice divide un angolo del vertice in due parti uguali, e qualsiasi punto su una bisettrice sta a uguale distanza perpendicolare dai due lati che formano quell'angolo. L'intersezione delle tre bisettrici sta quindi a uguale distanza da tutti e tre i lati, ed è esattamente per questo che può fungere da centro di un cerchio che tocca ciascun lato. L'incentro si trova dentro ogni triangolo valido, mai su un bordo o all'esterno." },
          { "kind": "h3", "text": "Che cos'è l'inraggio?" },
          { "kind": "p", "text": "L'inraggio è la distanza perpendicolare dall'incentro a un lato qualsiasi del triangolo: [[[\\boxed{r=\\text{distance from the incenter to a side}}}]]. Poiché l'incentro è equidistante da tutti e tre i lati, il valore è lo stesso qualunque lato si scelga. Quel singolo numero è il raggio della circonferenza inscritta, la lunghezza di ciascuno dei tre brevi segmenti tracciati dal centro ai punti di tangenza, e l'altezza comune che fa funzionare la dimostrazione dell'area in una sezione successiva." },
          { "kind": "h3", "text": "Comprendere la relazione di tangenza" },
          { "kind": "p", "text": "Un raggio tracciato verso un punto di tangenza è perpendicolare al lato che tocca. Applicato ai tre punti di contatto, questo dà [[r\\perp a]], [[r\\perp b]] e [[r\\perp c]]. Ciascuna affermazione descrive un angolo diverso del disegno: il raggio che termina sul cateto a sta ad angolo retto con il cateto a, e lo stesso vale per il cateto b e l'ipotenusa. Questa perpendicolarità non è decorativa; è la proprietà che permette a ciascun raggio di agire come altezza di uno dei tre triangoli più piccoli nella dimostrazione dell'area." },
          { "kind": "h3", "text": "Differenza tra circonferenza inscritta e circonferenza circoscritta" },
          { "kind": "p", "text": "La circonferenza inscritta vive dentro il triangolo e tocca tutti e tre i lati; la circonferenza circoscritta passa per tutti e tre i vertici e racchiude il triangolo. I loro raggi sono misure diverse e non devono mai essere scambiati. Per un triangolo rettangolo il circumraggio ha la sua regola semplice, [[[\\boxed{R=\\frac{c}{2}}]]], perché l'ipotenusa è un diametro della circonferenza circoscritta: il punto medio dell'ipotenusa è il circocentro. L'inraggio [[r]] è il più piccolo dei due e appartiene al cerchio interno." }
        ],
        "imgAlt": "Triangolo rettangolo ABC con circonferenza inscritta: incentro I, tre punti di tangenza, raggi perpendicolari di lunghezza r",
        "figcaption": "Triangolo ABC con la sua circonferenza inscritta: tre raggi perpendicolari, ciascuno di lunghezza r."
      },
      "sec-semiperimeter": {
        "h2": "Comprendere il semiperimetro di un triangolo",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro sembra una mera mezza misura, eppure porta la maggior parte del calcolo dell'area. Capire perché la geometria continua a ricorrere a metà perimetro prepara il terreno per la dimostrazione." },
          { "kind": "h3", "text": "Definizione di semiperimetro" },
          { "kind": "p", "text": "Il semiperimetro è esattamente metà del perimetro totale: [[[\\boxed{s=\\frac{P}{2}}]]]. Per un triangolo diventa [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Il perimetro [[P]] è la lunghezza intera del contorno, la somma dei tre lati; il semiperimetro è quella somma dimezzata. I due sono legati da [[P=2s]], e confonderli è il singolo errore di input più costoso di questa pagina." },
          { "kind": "h3", "text": "Come calcolare il semiperimetro" },
          { "kind": "p", "text": "Prendi [[a=3]], [[b=4]], [[c=5]]. Somma prima i tre lati, poi dividi una sola volta: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. L'addizione deve precedere la divisione perché il semiperimetro dimezza l'intero contorno, non ciascun lato separatamente. Sommare dopo aver diviso darebbe lo stesso numero qui, ma la formula [[s=\\frac{a+b+c}{2}]] indica l'ordine corretto: somma il contorno, poi dimezzalo." },
          { "kind": "h3", "text": "Perché si usa il semiperimetro invece del perimetro intero?" },
          { "kind": "p", "text": "Le formule dell'area dei triangoli continuano a produrre metà: ciascun piccolo triangolo nella dimostrazione contribuisce con una divisione per due, e il semiperimetro le assorbe tutte in una volta. È la variabile naturale della formula di Erone, della relazione dell'inraggio [[r=\\frac{K}{s}]] e della dimostrazione che segue. Inserire il perimetro intero raddoppierebbe il risultato, perché [[K=r\\times P=2rs]] è il doppio dell'area vera. La calcolatrice chiede [[s]], non [[P]], proprio affinché la moltiplicazione non richieda ulteriori aggiustamenti." },
          { "kind": "h3", "text": "Il semiperimetro può essere più piccolo del lato più lungo?" },
          { "kind": "p", "text": "No. La disuguaglianza triangolare richiede [[a+b>c]]: i due lati più corti insieme devono superare il lato più lungo, altrimenti il triangolo non può chiudersi. Aggiungendo [[c]] a entrambi i membri si ottiene [[a+b+c>2c]], e dimezzando si ha [[\\frac{a+b+c}{2}>c]], cioè [[s>c]]. Il semiperimetro supera sempre il lato più lungo in un triangolo valido. Se un semiperimetro dichiarato è più piccolo dell'ipotenusa, gli input non possono descrivere un triangolo reale." }
        ]
      },
      "sec-formula": {
        "h2": "Perché l'area di un triangolo è uguale all'inraggio per il semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "Parti dalla regola generale [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Congiungi l'incentro [[I]] a tutti e tre i vertici. Il triangolo si divide in tre triangoli più piccoli, ciascuno usando un lato originale come base e l'inraggio come altezza perpendicolare. Il resto di questa sezione calcola ciascun pezzo e li somma, così [[K=r\\times s]] viene visto, non solo memorizzato." },
          { "kind": "h3", "text": "Area del primo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo costruito sul lato [[a]] ha base [[a]] e altezza [[r]], perché il raggio incontra il lato [[a]] perpendicolarmente nel suo punto di tangenza. La sua area è quindi [[K_1=\\frac{ar}{2}]]. Nulla sull'angolo retto è ancora usato; questo passaggio vale per il lato di qualsiasi triangolo." },
          { "kind": "h3", "text": "Area del secondo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo costruito sul lato [[b]] segue lo stesso schema: base [[b]], altezza perpendicolare [[r]], area [[K_2=\\frac{br}{2}]]. L'altezza è di nuovo lo stesso numero [[r]], perché l'incentro è equidistante da ogni lato. Quell'altezza comune è la chiave dell'intera dimostrazione." },
          { "kind": "h3", "text": "Area del terzo triangolo più piccolo" },
          { "kind": "p", "text": "Il triangolo costruito sul lato [[c]] completa il gruppo: [[K_3=\\frac{cr}{2}]]. I tre triangoli più piccoli piastrellano il triangolo originale esattamente, senza sovrapposizioni né vuoti: ogni punto dell'originale sta in uno di essi, poiché i segmenti dall'incentro ai vertici partizionano l'interno." },
          { "kind": "h3", "text": "Sommare le tre aree" },
          { "kind": "p", "text": "Somma i pezzi: [[K=K_1+K_2+K_3]]. Sostituendo si ottiene [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Raccogli [[r]] dalla somma: [[K=\\frac{r(a+b+c)}{2}]]. Ricorda che [[s=\\frac{a+b+c}{2}]], quindi la frazione tra parentesi è esattamente il semiperimetro, e [[[\\boxed{K=r\\times s}]]]. Ogni dimezzamento dai tre piccoli triangoli è stato assorbito nel semiperimetro, ed è per questo che la moltiplicazione finale non ha bisogno di ulteriori divisioni." },
          { "kind": "h3", "text": "Perché questa formula funziona per ogni triangolo?" },
          { "kind": "p", "text": "Ogni triangolo non degenere ha una circonferenza inscritta e un incentro, e la distanza perpendicolare dell'incentro da tutti e tre i lati è lo stesso numero [[r]]. La scomposizione in tre triangoli non usa altro: nessun angolo retto, nessuna lunghezza di lati particolare, nessuna forma speciale. Che il triangolo sia rettangolo, acutangolo o ottusangolo, l'incentro si congiunge ai vertici e la stessa algebra approda a [[K=r\\times s]]. La formula è una proprietà dei triangoli in generale, ed è per questo che i libri di geometria la dimostrano una volta e la usano ovunque." },
          { "kind": "h3", "text": "Perché questa formula è particolarmente utile per i triangoli rettangoli?" },
          { "kind": "p", "text": "L'identità resta la stessa, ma l'inraggio diventa facile. In un triangolo generale l'inraggio si trova di solito dall'area stessa tramite [[r=\\frac{K}{s}]], il che è circolare se l'area è l'obiettivo. Un triangolo rettangolo sfugge al circolo: il suo inraggio deriva direttamente dai lati tramite [[r=\\frac{a+b-c}{2}]], ricavata nella sezione successiva. Questo fa di [[K=r\\times s]] un vero metodo di lavoro per i triangoli rettangoli piuttosto che una definizione riarrangiata." }
        ],
        "imgAlt": "Triangolo diviso dall'incentro I in tre triangoli più piccoli di altezza r, che dimostra K = r per s",
        "figcaption": "Tre triangoli più piccoli condividono l'altezza r; le loro aree si sommano a r per s."
      },
      "sec-inradius": {
        "h2": "Come calcolare l'inraggio di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Per un triangolo rettangolo con cateti [[a]] e [[b]] e ipotenusa [[c]], l'inraggio è [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Questa scorciatoia è specifica dei triangoli rettangoli. La dimostrazione qui sotto usa solo la proprietà dei segmenti di tangenza dei cerchi, e gli esempi svolti la mostrano in azione." },
          { "kind": "h3", "text": "Perché la formula dell'inraggio funziona?" },
          { "kind": "p", "text": "I segmenti di tangenza tracciati dallo stesso punto esterno a un cerchio hanno lunghezze uguali. La circonferenza inscritta tocca entrambi i cateti, e i due raggi verso quei punti di contatto incontrano i lati ad angolo retto. Insieme all'angolo retto al vertice, la regione dell'angolo forma un quadrato di lato [[r]], quindi le distanze dal vertice dell'angolo retto ai due punti di tangenza dei cateti sono ciascuna [[r]]. Chiama il segmento di tangenza rimanente sul cateto a [[x]] e quello rimanente sul cateto b [[y]]. I due segmenti di tangenza da ciascun vertice acuto sono uguali, quindi l'ipotenusa si divide negli stessi [[x]] e [[y]]. Perciò [[a=r+x]], [[b=r+y]] e [[c=x+y]]. Somma le prime due equazioni: [[a+b=2r+x+y]]. Poiché [[x+y=c]], questo diventa [[a+b=2r+c]], e riordinando si ottiene [[[\\boxed{r=\\frac{a+b-c}{2}}]]]." },
          { "kind": "h3", "text": "Esempio svolto: triangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]: sostituisci nella scorciatoia, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. La circonferenza inscritta del triangolo 3-4-5 ha raggio 1, il che corrisponde all'esempio introduttivo in cui [[r=1]] e [[s=6]] davano [[K=6]]." },
          { "kind": "h3", "text": "Esempio svolto: triangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]], [[c=13]]: allora [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. Abbinato a [[s=\\frac{5+12+13}{2}=15]], l'area segue come [[K=2\\times15=30]], confermata dalla formula dei cateti [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Una formula alternativa per l'inraggio" },
          { "kind": "p", "text": "La scorciatoia può anche essere scritta come [[[\\boxed{r=\\frac{ab}{a+b+c}}]]]. Questa non è una seconda formula senza legami. Parti da [[K=rs]] e [[K=\\frac{ab}{2}]], quindi [[rs=\\frac{ab}{2}]]. Poiché [[s=\\frac{a+b+c}{2}]], la sostituzione dà [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], e semplificando le metà resta [[r=\\frac{ab}{a+b+c}]]. Deve concordare con [[r=\\frac{a+b-c}{2}]]: verifica con 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], lo stesso raggio. Algebricamente, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] per un triangolo rettangolo, quindi le due forme sono identiche." },
          { "kind": "h3", "text": "Questa scorciatoia dell'inraggio funziona per ogni triangolo?" },
          { "kind": "p", "text": "No. La derivazione si appoggiava all'angolo retto: il quadrato d'angolo di lato [[r]] esiste solo perché i due cateti si incontrano a 90 gradi. Per un triangolo generale l'inraggio deve venire da [[[\\boxed{r=\\frac{K}{s}}}]] o da una formula adatta alle misure note, come [[r=(s-a)\\tan\\frac{A}{2}]]. Applicare [[r=\\frac{a+b-c}{2}]] a un triangolo non rettangolo calcola un numero senza significato geometrico." }
        ],
        "imgAlt": "I segmenti di tangenza x e y derivano la formula dell'inraggio r = (a + b - c) / 2",
        "figcaption": "Segmenti di tangenza uguali danno a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Come usare la calcolatrice dell'area del triangolo rettangolo dal semiperimetro",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice ha bisogno di esattamente due input, inseriti in ordine. I passaggi qui sotto seguono il layout sullo schermo dall'identificazione delle misure al risultato verificato." },
          { "kind": "p", "text": "La calcolatrice ha esattamente due input, l'inraggio [[r]] e il semiperimetro [[s]]. Non accetta i tre lati, i cateti, l'ipotenusa o un angolo. La moltiplicazione [[K=r\\times s]] è completa così com'è; il risultato non deve mai essere diviso di nuovo per due." }
        ],
        "steps": [
          "<strong>Determina l'inraggio del triangolo rettangolo.</strong> È il raggio del cerchio inscritto nel triangolo. Se i tre lati sono noti, calcolalo con [[r=\\frac{a+b-c}{2}]].",
          "<strong>Determina il suo semiperimetro.</strong> Somma i tre lati e dividi per due: [[s=\\frac{a+b+c}{2}]]. È metà del perimetro intero, non il perimetro stesso.",
          "<strong>Assicurati che entrambi i valori appartengano allo stesso triangolo.</strong> Un inraggio di un triangolo e un semiperimetro di un altro producono un prodotto senza significato.",
          "<strong>Converti le misure in unità compatibili se necessario.</strong> Entrambe le lunghezze devono usare la stessa unità: metri con metri, centimetri con centimetri, mai mescolate.",
          "<strong>Inserisci l'inraggio r nel primo campo di input.</strong> È il più piccolo dei due valori in qualsiasi triangolo valido.",
          "<strong>Inserisci il semiperimetro s nel secondo campo di input.</strong> Ricontrolla che il valore sia metà del perimetro, non l'intero perimetro.",
          "<strong>Fai clic su Calculate Area.</strong> La calcolatrice moltiplica direttamente i due input.",
          "<strong>Esamina il risultato visualizzato.</strong> Leggi l'area e conferma che sembri ragionevole per le dimensioni del triangolo.",
          "<strong>Controlla la formula e i passaggi di sostituzione.</strong> Mostrano [[K=r\\times s]] con i valori inseriti.",
          "<strong>Conferma che il risultato sia espresso in unità quadrate.</strong> Unità di lunghezza moltiplicate danno unità quadrate: m², cm², ft², corrispondenti agli input.",
          "<strong>Usa Reset prima di inserire un altro calcolo.</strong> Cancella entrambi i campi per un nuovo inizio."
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo dell'area di un triangolo rettangolo con inraggio e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Quattro triangoli rettangoli classici mostrano la catena completa: dai lati al semiperimetro, dai lati all'inraggio, poi l'unica moltiplicazione. In questi esempi r e s sono ricavati dalle lunghezze dei lati; la calcolatrice stessa accetta r e s direttamente." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]. Passo 1: calcola il semiperimetro, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Passo 2: calcola l'inraggio, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Passo 3: calcola l'area, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Verifica con la formula dei cateti: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]], [[c=13]]. Semiperimetro: [[s=\\frac{5+12+13}{2}=15]]. Inraggio: [[r=\\frac{5+12-13}{2}=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifica: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[a=8]], [[b=15]], [[c=17]]. Semiperimetro: [[s=\\frac{8+15+17}{2}=20]]. Inraggio: [[r=\\frac{8+15-17}{2}=3]]. Area: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Verifica: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Esempio 4: triangolo rettangolo 7-24-25" },
          { "kind": "p", "text": "Dati [[a=7]], [[b=24]], [[c=25]]. Semiperimetro: [[s=\\frac{7+24+25}{2}=28]]. Inraggio: [[r=\\frac{7+24-25}{2}=3]]. Area: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Verifica: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Confronto degli esempi svolti" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Triangolo",
            "Cateto a",
            "Cateto b",
            "Ipotenusa c",
            "Inraggio r",
            "Semiperimetro s",
            "Area K"
          ],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applicazioni reali dell'area di un triangolo rettangolo da inraggio e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni svolte portano la formula dalla pagina all'officina, al cantiere e allo studio. Ognuna nomina un pannello, una sezione, un profilo o un modello semplificato di forma triangolare rettangola, fa passare inraggio e semiperimetro attraverso la formula, e indica l'assunzione dietro i numeri. Sono modelli semplificati di triangoli rettangoli: non ogni vera finestra, tetto, giardino, rampa, vela o appezzamento forma un triangolo rettangolo esatto, e un oggetto irregolare deve essere diviso in forme più semplici prima che la formula si applichi. L'area descrive solo la superficie geometrica piana; non stabilisce mai da sola resistenza strutturale, capacità di carico o sicurezza di costruzione." },
          { "kind": "h3", "text": "Esempio 1: finestra triangolare di vetro" },
          { "kind": "p", "text": "Una finestra triangolare di vetro ha i lati [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Semiperimetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Inraggio: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Area: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Il risultato rappresenta la superficie piana del vetro triangolare prima di sottrarre i margini del telaio. Assunzione: il vetro è un vero triangolo rettangolo; le dimensioni del telaio sono trattate separatamente." },
          { "kind": "h3", "text": "Esempio 2: supporto triangolare in acciaio" },
          { "kind": "p", "text": "Una piastra di supporto triangolare in acciaio ha i lati [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Semiperimetro: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Inraggio: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. È l'area piana della piastra e non ne stabilisce la resistenza strutturale. Assunzione: il grezzo del supporto è tagliato come triangolo rettangolo; fori per bulloni e pieghe sono esclusi." },
          { "kind": "h3", "text": "Esempio 3: sezione di supporto del tetto" },
          { "kind": "p", "text": "Una sezione di supporto del tetto triangolare rettangola ha i lati [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Semiperimetro: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Inraggio: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Area: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. La formula misura la sezione piana del supporto triangolare, utile per stimare i materiali. Assunzione: la sezione è modellata come triangolo rettangolo; la geometria completa del tetto può differire." },
          { "kind": "h3", "text": "Esempio 4: sezione di giardino triangolare" },
          { "kind": "p", "text": "Una sezione di giardino semplificata triangolare rettangola ha i lati [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Semiperimetro: [[s=28\\text{ m}]]. Inraggio: [[r=3\\text{ m}]]. Area: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. L'area aiuta a stimare la sezione di verde triangolare, per esempio quando si ordina tappeto erboso o pacciame. Assunzione: i bordi dell'aiuola sono dritti e si incontrano ad angolo retto." },
          { "kind": "h3", "text": "Esempio 5: profilo laterale di rampa" },
          { "kind": "p", "text": "Un profilo laterale di rampa semplificato ha i lati [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Semiperimetro: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Inraggio: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Area: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Questo misura il profilo laterale triangolare, non la superficie inclinata della rampa. Assunzione: il profilo è modellato con un angolo squadrato alla base." },
          { "kind": "h3", "text": "Esempio 6: modello di taglio in compensato" },
          { "kind": "p", "text": "Un modello triangolare rettangolo in compensato ha i lati [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Semiperimetro: [[s=24\\text{ cm}]]. Inraggio: [[r=4\\text{ cm}]]. Area: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Il calcolo stima l'area piana del materiale prima degli scarti di taglio. Assunzione: il modello è un vero triangolo rettangolo; il taglio della sega e gli sfridi si aggiungono." },
          { "kind": "h3", "text": "Esempio 7: pannello segnaletico triangolare" },
          { "kind": "p", "text": "Un pannello segnaletico triangolare ha i lati [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Semiperimetro: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Inraggio: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Area: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Questo rappresenta la superficie piana stampabile del pannello. Assunzione: la faccia del pannello è piana e triangolare rettangola; la ferramenta di montaggio è esclusa." },
          { "kind": "h3", "text": "Esempio 8: sezione di terreno rilevata" },
          { "kind": "p", "text": "Una sezione di terreno semplificata triangolare rettangola ha i lati [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Semiperimetro: [[s=45\\text{ m}]]. Inraggio: [[r=4\\text{ m}]]. Area: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. La formula calcola l'area della sezione triangolare rilevata. Assunzione: la sezione è modellata con un angolo squadrato; un lotto irregolare va suddiviso in forme più semplici." },
          { "kind": "h3", "text": "Esempio 9: vela triangolare in tessuto" },
          { "kind": "p", "text": "Un pannello di tessuto triangolare rettangolo ha i lati [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Semiperimetro: [[s=30\\text{ ft}]]. Inraggio: [[r=5\\text{ ft}]]. Area: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Il risultato esclude cuciture, orli e margini di tessuto. Assunzione: la vela è modellata piatta; le vele vere si incurvano sotto carico." },
          { "kind": "h3", "text": "Esempio 10: pannello industriale" },
          { "kind": "p", "text": "Un pannello industriale triangolare rettangolo ha i lati [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Semiperimetro: [[s=66\\text{ m}]]. Inraggio: [[r=5\\text{ m}]]. Area: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. Il risultato descrive il pannello geometrico piano piuttosto che le sue prestazioni strutturali. Assunzione: il pannello è modellato come triangolo rettangolo; spessore e fissaggi sono questioni separate." },
          { "kind": "h3", "text": "Esempio 11: sezione di testata del tetto di un magazzino" },
          { "kind": "p", "text": "Una sezione di testata del tetto di un magazzino semplificata ha i lati [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Semiperimetro: [[s=91\\text{ ft}]]. Inraggio: [[r=6\\text{ ft}]]. Area: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Il risultato stima la sezione triangolare di testata, per esempio quando si prezza il rivestimento. Assunzione: il timpano è modellato come triangolo rettangolo." },
          { "kind": "h3", "text": "Esempio 12: pannello di fabbricazione" },
          { "kind": "p", "text": "Un pannello di fabbricazione triangolare rettangolo ha i lati [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Semiperimetro: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Inraggio: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Area: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Questo metodo calcola l'area piana triangolare del pannello direttamente dalle misure del suo cerchio e del suo contorno. Assunzione: i bordi del pannello sono dritti e si incontrano ad angolo retto." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": [
            "<tr>\n          <th class=\"border-gray-600 px-4 py-2 text-left\">Applicazione pratica",
            "Cateto a",
            "Cateto b",
            "Ipotenusa c",
            "Inraggio r",
            "Semiperimetro s",
            "Area calcolata",
            "Unità di misura"
          ],
          "rows": [
            ["Finestra di vetro", "3", "4", "5", "1", "6", "6", "m²"],
            ["Supporto in acciaio", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Supporto del tetto", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Sezione di giardino", "7", "24", "25", "3", "28", "84", "m²"],
            ["Profilo di rampa", "9", "12", "15", "3", "18", "54", "m²"],
            ["Modello in compensato", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Pannello segnaletico", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Sezione rilevata", "9", "40", "41", "4", "45", "180", "m²"],
            ["Vela in tessuto", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Pannello industriale", "11", "60", "61", "5", "66", "330", "m²"],
            ["Testata del tetto del magazzino", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Pannello di fabbricazione", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Perché la formula dell'inraggio dà la stessa area della formula dei cateti?",
        "blocks": [
          { "kind": "p", "text": "Due formule diverse, un triangolo, un'area. Parti da [[K=rs]] e dall'area standard del triangolo rettangolo [[K=\\frac{ab}{2}]], il che impone [[[\\boxed{rs=\\frac{ab}{2}}]]]. Entrambi i membri misurano la stessa superficie racchiusa usando informazioni geometriche diverse: uno legge la circonferenza inscritta e il contorno, l'altro legge i due cateti perpendicolari." },
          { "kind": "h3", "text": "Confronto numerico con un triangolo 3-4-5" },
          { "kind": "p", "text": "Metodo dell'inraggio: [[r=1]], [[s=6]], quindi [[K=1\\times6=6]]. Metodo dei cateti: [[K=\\frac{3\\times4}{2}=6]]. Le risposte concordano perché inraggio e semiperimetro codificano la stessa informazione sui lati dei cateti: [[r=\\frac{a+b-c}{2}]] e [[s=\\frac{a+b+c}{2}]] sono costruiti da [[a]], [[b]] e [[c]], quindi il loro prodotto deve ricostruire l'area descritta dai cateti. Questa concordanza non è una coincidenza; è algebra." },
          { "kind": "h3", "text": "Quando il metodo dell'inraggio è più utile?" },
          { "kind": "p", "text": "Il metodo dell'inraggio vince quando r e s sono già in mano. I problemi di geometria sulle circonferenze inscritte forniscono l'inraggio direttamente. Una dimostrazione che ha bisogno dell'area espressa tramite misure del cerchio usa [[K=rs]] naturalmente. I problemi da competizione spesso forniscono il semiperimetro come parte del testo. E come controllo incrociato, calcolare l'area in due modi indipendenti cattura scivoloni aritmetici che un unico metodo nasconderebbe. In ogni caso il punto è la comodità degli input: parti dalle misure che hai." },
          { "kind": "h3", "text": "Quando la formula dei cateti è più semplice?" },
          { "kind": "p", "text": "Se entrambi i cateti perpendicolari sono già noti, [[K=\\frac{ab}{2}]] è di solito più diretto: una moltiplicazione, un dimezzamento, nessun r o s intermedio da calcolare. Ricavare prima inraggio e semiperimetro e poi moltiplicare aggiunge due passaggi che non cambiano nulla. Il metodo del semiperimetro non è sempre la strada più facile; è la strada migliore quando la circonferenza inscritta o il contorno è il punto di partenza naturale, e una deviazione quando i cateti sono davanti ai tuoi occhi." }
        ]
      },
      "sec-heron": {
        "h2": "Qual è la differenza tra la formula di Erone e Area = inraggio × semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "La formula di Erone calcola l'area dalle tre lunghezze dei lati: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Richiede il semiperimetro ma non l'inraggio, e funziona per qualsiasi triangolo valido. La formula dell'inraggio [[[\\boxed{K=rs}]]] richiede invece l'inraggio e il semiperimetro al posto dei tre lati. La differenza è negli input, non nella geometria: entrambe restituiscono la stessa area racchiusa, perché le due formule sono legate tramite [[r=\\frac{K}{s}]]. La formula di Erone è la scelta naturale quando tutti e tre i lati sono noti e non esistono dati sul cerchio; la formula dell'inraggio è naturale quando la circonferenza inscritta fa parte del quadro." },
          { "kind": "h3", "text": "Confronto svolto" },
          { "kind": "p", "text": "Usa un triangolo 3-4-5. Formula di Erone: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Formula dell'inraggio: [[K=1\\times6]], [[[\\boxed{K=6}]]]. Le risposte corrispondono perché l'espressione di Erone si semplifica, tramite la stessa scomposizione in tre triangoli, in [[r\\times s]]: la radice quadrata di [[s(s-a)(s-b)(s-c)]] è uguale a [[rs]] ogni volta che r e s provengono dallo stesso triangolo. Non confondere però i due strumenti: la formula di Erone non chiede mai l'inraggio, e la scorciatoia dell'inraggio [[r=\\frac{a+b-c}{2}]] appartiene solo ai triangoli rettangoli." }
        ]
      },
      "sec-consistency": {
        "h2": "Come verificare che inraggio e semiperimetro siano validi",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice accetta due valori e li moltiplica, ma il prodotto è l'area di un triangolo rettangolo solo quando entrambi i valori descrivono lo stesso triangolo. I controlli qui sotto separano gli input validi dagli impostori." },
          { "kind": "h3", "text": "Condizioni di input di base" },
          { "kind": "p", "text": "Entrambi gli input devono essere positivi: [[r>0]] e [[s>0]]. Una lunghezza non può essere zero o negativa, quindi un valore non positivo non ha significato geometrico. Zero ridurrebbe il triangolo a una linea senza area; un valore negativo non descrive nulla. Rimisuura o ricava qualsiasi input che fallisce questo test." },
          { "kind": "h3", "text": "Il semiperimetro deve essere maggiore dell'inraggio" },
          { "kind": "p", "text": "In un triangolo valido il semiperimetro sovrasta l'inraggio. Da [[K=rs]] e [[K=\\frac{ab}{2}]] con cateti positivi, e dalla geometria della circonferenza inscritta contenuta nel triangolo, [[s]] è sempre chiaramente più grande di [[r]]: per il triangolo 3-4-5, 6 contro 1; per 5-12-13, 15 contro 2. I valori devono anche corrispondere a un insieme valido di tre lati, quindi questo confronto è un filtro rapido, non l'intera validazione. Un inraggio più grande del semiperimetro non può venire da nessun triangolo." },
          { "kind": "h3", "text": "Controllo di coerenza avanzato per il triangolo rettangolo" },
          { "kind": "p", "text": "Per un test più severo, un triangolo rettangolo deve soddisfare [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], circa [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. L'idea è semplice: dati r e s, i due cateti devono essere le soluzioni positive di un'equazione di secondo grado costruita da [[a+b=s+r]] e [[ab=2rs]], e quell'equazione ha soluzioni reali solo quando il suo discriminante resta non negativo. La condizione sul discriminante si semplifica in esattamente questo limite. Verifica 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], valido. Questo è un raffinamento facoltativo per un lavoro accurato, non una parte obbligatoria del calcolo del principiante." },
          { "kind": "h3", "text": "Cosa succede quando gli input sono incoerenti?" },
          { "kind": "p", "text": "Moltiplicare due numeri positivi produce sempre un risultato numerico, ma questo non prova che rappresentino l'inraggio e il semiperimetro dello stesso triangolo rettangolo. Un r di un triangolo abbinato a un s di un altro dà un prodotto senza significato geometrico, per quanto ordinata appaia l'aritmetica. A meno che l'implementazione della calcolatrice non sia stata testata per il comportamento di validazione, non dare per scontato che controlli la relazione: esegui tu stesso i controlli qui sopra, ricalcola r e s dai lati quando i lati sono noti, e verifica l'area con la formula dei cateti." }
        ]
      },
      "sec-units": {
        "h2": "Come le unità di misura influenzano i calcoli di inraggio e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "L'inraggio e il semiperimetro sono entrambi lunghezze, quindi seguono le stesse regole sulle unità di qualsiasi altra misura di lunghezza. L'unità quadrata nella risposta deriva dalla moltiplicazione di due unità di lunghezza, il che rende le unità coerenti l'intero gioco." },
          { "kind": "h3", "text": "Perché entrambi gli input devono usare unità compatibili?" },
          { "kind": "p", "text": "Il prodotto [[K=r\\times s]] moltiplica una lunghezza per una lunghezza. Se r è in centimetri e s in metri, il prodotto mescola le due scale e il numero non ha un significato pulito. Converti prima così entrambi gli input condividono un'unità: metri, centimetri, millimetri, piedi, pollici o iarde, ma la stessa per entrambi. La calcolatrice ha selettori di unità per questo motivo: impostali prima di inserire i numeri." },
          { "kind": "h3", "text": "Esempio svolto di conversione di unità" },
          { "kind": "p", "text": "Dati [[r=10\\text{ cm}]] e [[s=1\\text{ m}]]. Converti il semiperimetro: [[1\\text{ m}=100\\text{ cm}]]. Poi [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. In alternativa, converti l'inraggio: [[10\\text{ cm}=0.1\\text{ m}]], poi [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. Entrambe le risposte descrivono la stessa area, poiché [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Converti prima, moltiplica poi, e l'uno o l'altro percorso di unità arriva nel posto giusto." },
          { "kind": "h3", "text": "Perché il risultato è espresso in unità quadrate?" },
          { "kind": "p", "text": "L'area conta i quadrati unitari che coprono la superficie: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. L'unità è sempre l'unità di lunghezza al quadrato, perché il prodotto di due lunghezze è un conteggio di quadrati. Dichiarare un'area come una semplice lunghezza, per esempio 1000 cm, è un errore di categoria: 1000 cm è una lunghezza, mentre 1000 cm² è una superficie." },
          { "kind": "h3", "text": "Lavorare con valori decimali" },
          { "kind": "p", "text": "La formula gestisce i decimali senza modifiche. Dati [[r=2.5]] e [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Numeri interi, decimali e fini misure di officina passano tutti attraverso la stessa moltiplicazione. Mantieni la piena precisione durante il calcolo e arrotonda solo la risposta finale in base alla precisione giustificata dalle misure." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo dell'area di un triangolo rettangolo dal semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Quasi ogni risposta sbagliata in questo argomento risale a un'etichetta confusa piuttosto che a un cattivo calcolo. I sedici errori qui sotto sono quelli che ricompaiono continuamente, ciascuno con la sua causa e la sua correzione." },
          { "kind": "h3", "text": "1. Confondere il semiperimetro con il perimetro intero" },
          { "kind": "p", "text": "Inserire [[P=12]] dove appartiene [[s=6]] raddoppia la risposta: [[1\\times12=12]] invece di 6. L'errore accade perché il linguaggio quotidiano dice perimetro mentre la formula vuole la sua metà. Correzione: dimezza sempre la somma del contorno prima di inserirla, e controlla che l's inserito sia più piccolo del perimetro." },
          { "kind": "h3", "text": "2. Usare il circumraggio invece dell'inraggio" },
          { "kind": "p", "text": "Il circumraggio del triangolo 3-4-5 è [[R=\\frac{5}{2}=2.5]]; usarlo dà [[2.5\\times6=15]], quasi il triplo dell'area vera. L'errore deriva dal fatto che i due cerchi condividono la parola raggio. Correzione: conferma che il raggio appartenga al cerchio dentro il triangolo, tangente a tutti e tre i lati, non a quello che passa per i vertici." },
          { "kind": "h3", "text": "3. Dimenticare di calcolare correttamente il semiperimetro" },
          { "kind": "p", "text": "Sommare solo due lati, o dividere ciascun lato per due prima di sommare, produce un s sbagliato. Per 3-4-5, sommare 3 + 4 e dividere dà 3,5, e [[1\\times3.5=3.5]] non ha senso. Correzione: somma prima tutti e tre i lati, poi dividi una sola volta: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Dividere di nuovo il risultato finale per due" },
          { "kind": "p", "text": "Dopo [[K=1\\times6=6]], un ulteriore dimezzamento dà 3. L'abitudine viene dalla formula dei cateti, dove la divisione è esplicita. Correzione: ricorda che le metà sono già assorbite nel semiperimetro; [[K=r\\times s]] è completo." },
          { "kind": "h3", "text": "5. Usare la formula sbagliata dell'inraggio per il triangolo rettangolo" },
          { "kind": "p", "text": "Indovinare [[r=\\frac{c-a-b}{2}]] o [[r=\\frac{a+b}{2}]] produce un inraggio sbagliato. Per 3-4-5, [[\\frac{5-3-4}{2}=-1]] non è nemmeno una lunghezza. Correzione: usa [[r=\\frac{a+b-c}{2}]] con a e b come cateti e c come ipotenusa, esattamente in quest'ordine." },
          { "kind": "h3", "text": "6. Applicare la scorciatoia dell'inraggio del triangolo rettangolo a un triangolo ordinario" },
          { "kind": "p", "text": "La scorciatoia si appoggia sull'angolo retto, quindi su un triangolo generale calcola un numero senza significato geometrico. Correzione: per i triangoli non rettangoli trova l'inraggio da [[r=\\frac{K}{s}]] o da una formula adatta alle misure note, mai da [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Inserire inraggio e semiperimetro di triangoli diversi" },
          { "kind": "p", "text": "Prendere r = 1 da un triangolo 3-4-5 e s = 15 da un triangolo 5-12-13 dà 15, un prodotto che non descrive nessun triangolo reale. L'errore accade quando i valori sono copiati da esempi svolti diversi o da disegni diversi. Correzione: ricava o misura entrambi gli input dallo stesso triangolo prima di moltiplicare." },
          { "kind": "h3", "text": "8. Mescolare centimetri e metri" },
          { "kind": "p", "text": "Moltiplicare r = 10 cm per s = 1 m senza convertire dà 10 di niente di pulito. Correzione: converti prima a un'unità: [[1\\text{ m}=100\\text{ cm}]], poi [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Dichiarare il risultato in unità lineari" },
          { "kind": "p", "text": "Un'area di 6 m² non è 6 m. L'errore di solito deriva dal copiare l'unità di input senza elevarla al quadrato. Correzione: scrivi l'unità al quadrato con il numero ogni volta: m², cm², ft²." },
          { "kind": "h3", "text": "10. Inserire misure nulle o negative" },
          { "kind": "p", "text": "Le lunghezze sono positive. Zero riduce il triangolo a una linea senza area, e le lunghezze negative qui non hanno significato geometrico. Correzione: rimisuura o ricava l'input; rifiuta i valori non positivi prima di calcolare." },
          { "kind": "h3", "text": "11. Confondere l'incentro con il circocentro" },
          { "kind": "p", "text": "L'incentro è il punto d'incontro delle bisettrici degli angoli; il circocentro è il punto d'incontro degli assi dei lati. Per un triangolo rettangolo il circocentro sta nel punto medio dell'ipotenusa, un punto completamente diverso. Confonderli porta a misurare il raggio sbagliato. Correzione: l'incentro [[I]] è dentro il triangolo a uguale distanza dai lati, non dai vertici." },
          { "kind": "h3", "text": "12. Supporre che la circonferenza inscritta tocchi solo due lati" },
          { "kind": "p", "text": "Un cerchio incastrato in un angolo tocca due lati, ma non è la circonferenza inscritta. La circonferenza inscritta tocca tutti e tre, e la dimostrazione dell'area ha bisogno di tutti e tre i punti di tangenza. Correzione: verifica tre punti di contatto, uno per lato, prima di trattare un raggio come inraggio." },
          { "kind": "h3", "text": "13. Dimenticare che il raggio incontra ciascun lato tangente perpendicolarmente" },
          { "kind": "p", "text": "L'argomento dell'altezza comune nella dimostrazione dipende da [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Un segmento inclinato dall'incentro a un lato è più lungo di r e non può fungere da altezza. Correzione: misura l'inraggio lungo la perpendicolare al lato, mai lungo una diagonale." },
          { "kind": "h3", "text": "14. Confondere l'inraggio con il diametro" },
          { "kind": "p", "text": "Inserire la larghezza intera della circonferenza inscritta come r raddoppia il raggio e raddoppia l'area. Per il triangolo 3-4-5, inserire 2 invece di 1 dà [[2\\times6=12]]. Correzione: l'inraggio va dal centro a un lato, metà della larghezza intera del cerchio." },
          { "kind": "h3", "text": "15. Usare la formula di Erone in modo scorretto" },
          { "kind": "p", "text": "Gli scivoloni comuni includono dimenticare la radice quadrata, scrivere [[s(s+a)(s+b)(s+c)]] con segni più, o alimentare la formula con il perimetro intero. Per 3-4-5, omettere la radice dà 36 invece di 6. Correzione: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], con semiperimetro, segni meno e radice tutti al loro posto." },
          { "kind": "h3", "text": "16. Supporre che un risultato numerico dimostri automaticamente che gli input sono geometricamente coerenti" },
          { "kind": "p", "text": "Due numeri positivi qualsiasi si moltiplicano, quindi la calcolatrice restituisce sempre qualcosa. Quel qualcosa è l'area di un triangolo rettangolo solo quando r e s appartengono davvero a un solo triangolo. Correzione: esegui i controlli di coerenza, ricalcola r e s dai lati quando possibile, e verifica con la formula dei cateti prima di fidarti del numero." },
          { "kind": "h3", "text": "Sbagliato contro corretto: un esempio concreto" },
          { "kind": "p", "text": "Usa [[r=1]], [[s=6]]. Corretto: [[K=1\\times6=6]]. Dividere di nuovo a torto per due: [[K=\\frac{1\\times6}{2}=3]], sbagliato perché il dimezzamento è già dentro il semiperimetro. Inserire a torto il perimetro intero 12 invece del semiperimetro 6: [[K=1\\times12=12]], il doppio dell'area vera. L'aritmetica sembra sicura in tutti e tre i casi; solo la geometria li distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare che l'area del triangolo rettangolo sia corretta",
        "blocks": [
          { "kind": "p", "text": "Sei controlli indipendenti, tutti dimostrati sul triangolo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). La concordanza tra percorsi diversi è la prova più forte che una risposta sia giusta, nei compiti come nella misurazione pratica." },
          { "kind": "h3", "text": "Metodo 1: controlla la formula principale" },
          { "kind": "p", "text": "Rifai [[K=r\\times s]] da capo: [[K=1\\times6=6]]. Un secondo passaggio con i numeri reinseriti cattura errori di battitura e cifre mal digitate." },
          { "kind": "h3", "text": "Metodo 2: calcola il semiperimetro dai tre lati" },
          { "kind": "p", "text": "Ricalcola [[s=\\frac{a+b+c}{2}]] dai lati: [[s=\\frac{3+4+5}{2}=6]]. Se l's ricalcolato differisce da quello inserito, l'input era sbagliato e il prodotto va rifatto." },
          { "kind": "h3", "text": "Metodo 3: calcola l'inraggio dal triangolo rettangolo" },
          { "kind": "p", "text": "Ricalcola [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. Una discordanza con l'r inserito significa che il raggio viene da un triangolo diverso o da una formula applicata male." },
          { "kind": "h3", "text": "Metodo 4: verifica con la formula standard dei cateti" },
          { "kind": "p", "text": "Calcola [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Questo percorso usa input completamente diversi, quindi la concordanza con [[rs]] conferma sia gli input sia il calcolo." },
          { "kind": "h3", "text": "Metodo 5: verifica con la formula di Erone" },
          { "kind": "p", "text": "Calcola [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. La formula di Erone esercita insieme lati e semiperimetro, catturando errori di etichettatura dei lati che gli altri controlli potrebbero mancare." },
          { "kind": "h3", "text": "Metodo 6: controlla il teorema di Pitagora" },
          { "kind": "p", "text": "Conferma [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Questo controlla l'identificazione dei lati dietro ogni altro calcolo; un'ipotenusa sbagliata significa che un lato è stato etichettato male e che r, s e K vanno tutti ricostruiti." }
        ]
      },
      "sec-applications": {
        "h2": "Applicazioni pratiche della formula di inraggio e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Lo stesso schema a due input compare ovunque un pannello o una sezione triangolare va misurato e i dati della circonferenza inscritta sono il punto di partenza comodo. Un vetraio dimensiona una finestra dalle sue lunghezze dei bordi; un fabbricante legge i cateti di un grezzo di supporto; un geometra riduce un angolo di terreno a tre lati dritti. Da quei lati vengono inraggio e semiperimetro, e una moltiplicazione indica l'area. I quattro pannelli qui sotto mostrano lo schema a scale diverse: una finestra di vetro (6 m²), un supporto del tetto (60 ft²), una sezione di giardino (84 m²) e una piastra d'acciaio (30 cm²), ciascuno etichettato con il suo inraggio, il suo semiperimetro e l'area risultante." }
        ],
        "imgAlt": "Quattro pannelli: finestra di vetro 6 m2, supporto del tetto 60 ft2, sezione di giardino 84 m2, piastra d'acciaio 30 cm2",
        "figcaption": "Quattro usi reali: una finestra di vetro, un supporto del tetto, una sezione di giardino e una piastra d'acciaio."
      },
      "sec-conclusion": {
        "h2": "Due misure, un prodotto",
        "blocks": [
          { "kind": "p", "text": "Un inraggio e un semiperimetro bastano. Moltiplicali, e la superficie racchiusa è indicata. La dimostrazione in tre triangoli mostra perché nessuna divisione segue la moltiplicazione, l'argomento dei segmenti di tangenza mostra perché il triangolo rettangolo ottiene la sua scorciatoia dell'inraggio, e la formula dei cateti più la formula di Erone restano pronte a controllare ogni risposta." },
          { "kind": "p", "text": "L'abitudine di lavoro è semplice: conferma che entrambi gli input descrivano lo stesso triangolo, accorda le unità, mantieni i decimali non arrotondati fino alla fine, e verifica con un secondo metodo. Con queste abitudini, [[K=r\\times s]] è uno dei calcoli d'area più affidabili della geometria." }
        ]
      },
      "sec-related": {
        "h2": "Esplora le calcolatrici correlate per triangoli rettangoli",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatrici diverse." }
        ]
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": []
      }
    }
  }
};
