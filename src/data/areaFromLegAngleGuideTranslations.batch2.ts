// areaFromLegAngleGuideTranslations.batch2.ts: Right Triangle Area From Leg
// and Angle Guide (Page 21 of 45) translations for French (fr),
// German (de), and Italian (it).
export const AREA_FROM_LEG_ANGLE_TRANSLATIONS_BATCH2 = {
  "fr": {
    "faqs": [
      {
        "question": "Quelle est la formule de l'aire avec un côté et un angle ?",
        "answer": "K = bc sin(A) / 2, où b est le côté adjacent à l'angle A, c est l'hypoténuse et A est l'angle aigu entre eux. Par exemple, b = 4, c = 5 et A = 36.87° donnent K = (4 × 5 × 0.6) / 2 = 6 unités carrées. L'angle doit être saisi en degrés, et les deux côtés doivent utiliser la même unité de longueur."
      },
      {
        "question": "Pourquoi la formule utilise-t-elle le sinus ?",
        "answer": "Le sinus récupère le côté perpendiculaire manquant à partir de l'hypoténuse : comme sin(A) = a/c, multiplier donne a = c sin(A). La règle d'aire standard a besoin des deux côtés, K = ab/2, donc substituer l'expression du sinus pour a produit K = bc sin(A)/2. Le sinus est le pont entre l'hypoténuse mesurée et la hauteur non mesurée."
      },
      {
        "question": "Quel côté est adjacent à l'angle A ?",
        "answer": "Le côté b est adjacent à l'angle A : c'est l'un des deux côtés qui forment cet angle, l'autre étant l'hypoténuse c. Le côté a est opposé à l'angle A, assis en face de lui dans le triangle. Si vous changez la référence vers l'angle B, les étiquettes s'échangent : b devient le côté opposé et a devient le côté adjacent."
      },
      {
        "question": "Puis-je calculer l'aire sans connaître le côté manquant ?",
        "answer": "Oui, c'est tout l'intérêt de ce calculateur. Le sinus de l'angle A encode le rapport du côté manquant à l'hypoténuse, donc c sin(A) reconstruit le côté a sans le mesurer. Saisissez b, c et A, et la formule s'occupe du reste. Vous n'avez jamais besoin du troisième côté comme entrée séparée."
      },
      {
        "question": "Quelle est la différence entre l'angle A et l'angle B ?",
        "answer": "Ce sont les deux angles aigus du triangle rectangle, et A + B = 90°. L'angle A se trouve entre le côté b et l'hypoténuse c ; l'angle B se trouve entre le côté a et l'hypoténuse c. La formule K = bc sin(A)/2 exige spécifiquement l'angle A. Utiliser l'angle B avec les côtés b et c donne un mauvais résultat ; l'angle B s'apparie avec les côtés a et c."
      },
      {
        "question": "Le calculateur utilise-t-il des degrés ou des radians ?",
        "answer": "Des degrés. Saisir une valeur en radians produit un sinus complètement différent et une aire fausse. Convertissez d'abord les radians en degrés avec degrés = radians × 180/π ; par exemple, π/6 radians égale 30°. Vérifiez toujours l'unité d'angle avant de calculer."
      },
      {
        "question": "Puis-je utiliser n'importe quel angle avec un côté et une hypoténuse donnés ?",
        "answer": "Non. Les trois entrées doivent satisfaire b = c cos(A), donc l'angle est fixé dès que les côtés sont choisis. Pour b = 4 et c = 5, l'angle A doit valoir environ 36.87°. Saisir un angle différent décrit un autre triangle, et le résultat ne correspondra pas au triangle rectangle visé."
      },
      {
        "question": "Comment vérifier si mes mesures forment un triangle rectangle valide ?",
        "answer": "Vérifiez trois conditions : l'hypoténuse dépasse le côté (c > b > 0), l'angle est strictement entre 0° et 90°, et b = c cos(A) est vérifié. Pour plus de confiance, contrôlez a = c sin(A) et le théorème de Pythagore a² + b² = c². Si une vérification échoue, au moins une mesure ou une étiquette est fausse."
      },
      {
        "question": "Puis-je calculer l'aire si je connais les deux côtés ?",
        "answer": "Oui, et la formule plus courte K = ab/2 s'applique directement, sans angle ni sinus. Pour des côtés de 3 et 4, K = 6. Le calculateur basé sur le sinus est conçu pour le cas où un côté manque ; quand les deux côtés sont connus, la formule des côtés est plus simple et donne le résultat identique."
      },
      {
        "question": "Que se passe-t-il si je saisis le mauvais angle ?",
        "answer": "Le calculateur multiplie ce qu'il reçoit, donc un mauvais angle donne une mauvaise aire sans avertissement. Saisir l'angle B = 53.13° au lieu de A = 36.87° avec b = 4 et c = 5 donne 8 au lieu de 6. Vérifiez toujours que l'angle saisi est celui entre le côté b et l'hypoténuse."
      },
      {
        "question": "Quelle est l'aire maximale possible pour une hypoténuse fixée ?",
        "answer": "K = c²/4, atteinte quand l'angle A = 45° et que le triangle est isocèle avec des côtés c/√2. Pour une hypoténuse de 10, le plafond est de 25 unités carrées. Aucun triangle rectangle avec cette hypoténuse ne peut enfermer plus d'aire. Si votre résultat dépasse c²/4, les entrées sont incohérentes."
      },
      {
        "question": "Quelle est la différence entre la formule basée sur le sinus et la formule standard base-hauteur ?",
        "answer": "Il n'y a aucune différence mathématique : substituer sin(A) = a/c dans K = bc sin(A)/2 donne K = ab/2, la règle standard base-hauteur. La version sinus est simplement la même formule réécrite pour des données différentes. Utilisez la forme sinus quand l'hypoténuse et l'angle sont connus ; utilisez ab/2 quand les deux côtés sont connus."
      }
    ],
    "relatedHeading": "Explorez les calculateurs de triangle rectangle associés",
    "relatedItems": [
      "Calculateur d'aire du triangle rectangle",
      "Calculateur d'aire du triangle rectangle à partir des côtés",
      "Calculateur d'aire du triangle rectangle à partir de l'angle",
      "Calculateur de côté du triangle rectangle à partir de l'angle",
      "Calculateur de côté du triangle rectangle",
      "Calculateur de rapports trigonométriques du triangle rectangle"
    ],
    "relatedIntro": "Des mesures différentes appellent des calculateurs différents.",
    "faqHeading": "Questions fréquentes",
    "tocHeading": "Dans ce guide",
    "tocItems": {
      "sec-intro": "Comment calculer l'aire d'un triangle rectangle à partir d'un côté et d'un angle",
      "sec-anatomy": "Comprendre les côtés et les angles d'un triangle rectangle",
      "sec-sine": "Comprendre la fonction sinus dans les calculs sur le triangle rectangle",
      "sec-formula": "Pourquoi la formule d'aire du triangle rectangle utilise-t-elle le sinus ?",
      "sec-howto": "Comment utiliser le calculateur d'aire du triangle rectangle à partir d'un côté et d'un angle",
      "sec-consistency": "Comment vérifier si votre côté, votre hypoténuse et votre angle forment un triangle rectangle valide",
      "sec-examples": "Exemples pas à pas d'aire du triangle rectangle avec un côté et un angle",
      "sec-practical": "Applications réelles de l'aire du triangle rectangle à partir d'un côté et d'un angle",
      "sec-compare": "Pourquoi la formule basée sur le sinus donne-t-elle la même aire que la formule des côtés ?",
      "sec-angle-effect": "Comment l'angle inclus affecte-t-il l'aire du triangle rectangle ?",
      "sec-alternative": "Peut-on calculer l'aire d'un triangle rectangle avec un seul côté et son angle ?",
      "sec-units": "Comprendre les unités d'angle et les mesures dans les calculs d'aire",
      "sec-mistakes": "Erreurs courantes dans le calcul de l'aire d'un triangle rectangle à partir d'un côté et d'un angle",
      "sec-verify": "Comment vérifier si l'aire de votre triangle rectangle est correcte",
      "sec-applications": "L'aire du triangle rectangle à partir d'un côté et d'un angle en pratique",
      "sec-related": "Explorez les calculateurs de triangle rectangle associés",
      "sec-faq": "Questions fréquentes",
      "sec-conclusion": "Trois entrées portent toute l'aire"
    },
    "sections": {
      "sec-intro": {
        "h2": "Comment calculer l'aire d'un triangle rectangle à partir d'un côté et d'un angle",
        "blocks": [
          { "kind": "p", "text": "Prenez [[b=4]], [[c=5]] et [[A=36.87^\\circ]]. Appliquez [[K=\\frac{bc\\sin(A)}{2}]] : [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Le résultat nomme l'aire plane totale enfermée par les trois côtés : six unités carrées de surface. C'est exactement ce que le calculateur d'aire du triangle rectangle à partir d'un côté et d'un angle renvoie pour ces valeurs." },
          { "kind": "p", "text": "Le calculateur demande trois mesures. Le côté [[b]] se trouve à côté de l'angle [[A]] ; l'hypoténuse [[c]] est le côté le plus long, opposé à l'angle droit ; et l'angle [[A]] est l'angle aigu coincé entre eux. Comme [[\\sin(A)]] égale le rapport du côté manquant [[a]] à l'hypoténuse [[c]], la formule reconstruit la hauteur manquante sans la mesurer. Multiplier [[b]], [[c]] et [[\\sin(A)]] forme le rectangle qui les enferme ; diviser par deux le réduit au triangle." },
          { "kind": "p", "text": "Cela compte chaque fois que le troisième côté est difficile à mesurer. Un dessin peut donner l'hypoténuse et un côté, tandis qu'un rapporteur ou une étape antérieure fournit l'angle. Le sinus comble l'écart, et l'aire découle de ce qui est déjà connu." }
        ]
      },
      "sec-anatomy": {
        "h2": "Comprendre les côtés et les angles d'un triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Avant que la formule ait un sens, les étiquettes doivent être exactes. Chaque symbole ci-dessous apparaît dans le calculateur, et chacun porte une signification unique et fixe." },
          { "kind": "h3", "text": "Qu'est-ce qu'un triangle rectangle ?" },
          { "kind": "p", "text": "Un triangle rectangle est un triangle dont un angle intérieur vaut 90 degrés. Les deux côtés qui forment cet angle sont les côtés de l'angle droit, perpendiculaires entre eux ; le côté opposé à l'angle droit est l'hypoténuse. Comme les trois angles intérieurs totalisent 180 degrés, les deux angles aigus vérifient [[A+B=90^\\circ]], ce qui les rend complémentaires : en connaître un détermine l'autre." },
          { "kind": "h3", "text": "Qu'est-ce que l'hypoténuse ?" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit. C'est toujours le côté le plus long, quelle que soit la rotation ou le dessin du triangle. Le calculateur l'utilise comme côté [[c]], donc bien l'identifier est la première étape : trouvez l'angle droit, puis prenez le côté en face. Un côté de l'angle droit ne peut jamais jouer ce rôle, aussi long qu'il paraisse dans un dessin incliné." },
          { "kind": "h3", "text": "Quels sont les deux côtés de l'angle droit ?" },
          { "kind": "p", "text": "Les deux côtés de l'angle droit sont les côtés qui se rencontrent à l'angle droit, perpendiculaires l'un à l'autre. Le côté [[a]] est opposé à l'angle [[A]] ; le côté [[b]] est opposé à l'angle [[B]]. Le calculateur prend le côté [[b]], celui qui est adjacent à l'angle [[A]], comme première entrée. Ensemble, les deux côtés forment le coin où vit l'angle de 90 degrés." },
          { "kind": "h3", "text": "Comprendre l'angle A" },
          { "kind": "p", "text": "L'angle [[A]] est l'angle aigu formé par le côté [[b]] et l'hypoténuse [[c]]. C'est l'angle inclus entre les deux entrées de côté du calculateur, donc [[\\angle A=\\text{angle between }b\\text{ and }c]]. Cet appariement est fixe : partout où la formule mentionne [[A]], elle désigne le coin où le côté connu rencontre l'hypoténuse, et non le coin à l'autre extrémité du côté [[b]]." },
          { "kind": "h3", "text": "Côtés opposé et adjacent par rapport à l'angle A" },
          { "kind": "p", "text": "Placez-vous à l'angle [[A]] et regardez à travers le triangle. Le côté que vous voyez sans le toucher est le côté opposé ; le côté qui forme l'angle aux côtés de l'hypoténuse est le côté adjacent. Ces étiquettes suivent l'angle de référence, donc passer la référence de [[A]] à [[B]] échange les rôles des deux côtés." },
          { "kind": "h3", "text": "Comprendre l'angle inclus" },
          { "kind": "p", "text": "Un angle inclus est l'angle formé par deux côtés choisis. La formule d'aire multiplie [[b]] et [[c]], donc l'angle dont elle a besoin est celui qui est pris entre eux : l'angle [[A]]. L'appariement correct pour ce calculateur est [[b,\\;c,\\;A]]. Utiliser un autre angle avec les deux mêmes côtés brise l'appariement supposé par la formule, donc ne confondez pas l'angle [[A]] avec l'angle [[B]]." }
        ],
        "table": {
          "headers": ["Côté", "Relation avec l'angle A"],
          "rows": [
            ["a", "Opposé"],
            ["b", "Adjacent"],
            ["c", "Hypoténuse"]
          ]
        },
        "imgAlt": "Triangle rectangle ABC : le côté b et l'hypoténuse c mis en évidence, l'angle inclus A, le côté manquant a étiqueté",
        "figcaption": "Triangle ABC : le côté adjacent b et l'hypoténuse c mis en évidence forment l'angle inclus A ; le côté a est le côté opposé manquant."
      },
      "sec-sine": {
        "h2": "Comprendre la fonction sinus dans les calculs sur le triangle rectangle",
        "blocks": [
          { "kind": "p", "text": "Le sinus est un rapport, pas une longueur. Pour un angle aigu, [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] Dans ce triangle, cela devient [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Le rapport compare le côté en face de l'angle au côté le plus long, c'est donc un nombre pur sans unité. Pour un angle aigu, sa valeur se situe toujours entre 0 et 1, et c'est exactement ce qui permet à un côté d'en remplacer un autre." },
          { "kind": "h3", "text": "Comment le sinus aide à trouver le côté manquant" },
          { "kind": "p", "text": "Partez de [[\\sin(A)=\\frac{a}{c}]]. Multipliez les deux côtés par [[c]] : [[[\\boxed{a=c\\sin(A)}]]] L'hypoténuse redonne au rapport l'échelle d'une longueur, et cette longueur est le côté manquant. Le calculateur ne demande jamais [[a]] parce que ce seul réarrangement le récupère à partir de [[c]] et de [[A]]. Chaque étape ultérieure de la formule d'aire repose sur cette substitution." },
          { "kind": "h3", "text": "Exemple numérique" },
          { "kind": "p", "text": "Avec [[c=5]] et [[A=36.87^\\circ]] : [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Le côté manquant mesure 3 unités, ce qui complète le familier triangle 3-4-5. Une multiplication a remplacé une mesure séparée." },
          { "kind": "h3", "text": "En quoi le sinus diffère du cosinus et de la tangente" },
          { "kind": "p", "text": "Le cosinus utilise le côté adjacent : [[\\cos(A)=\\frac{b}{c}]]. La tangente utilise les deux côtés de l'angle droit : [[\\tan(A)=\\frac{a}{b}]]. Chaque rapport répond à une question différente. Le sinus est celui dont ce calculateur a besoin parce que l'inconnue est le côté opposé [[a]] et le côté connu est l'hypoténuse [[c]]. Quand les données changent, le rapport utile change avec elles, mais rien d'autre dans ce guide ne quitte la famille du sinus." }
        ]
      },
      "sec-formula": {
        "h2": "Pourquoi la formule d'aire du triangle rectangle utilise-t-elle le sinus ?",
        "blocks": [
          { "kind": "p", "text": "Partez de la règle standard : [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Pour ce triangle, la base naturelle est le côté [[b]] et la hauteur perpendiculaire est le côté [[a]], puisque les côtés de l'angle droit se rencontrent à 90 degrés. Cela donne [[K=\\frac{ab}{2}]]. Le calculateur ne demande pas [[a]], donc la formule doit le reconstruire. D'après le rapport sinus, [[a=c\\sin(A)]]. En substituant : [[K=\\frac{b(c\\sin(A))}{2}]], donc [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] La division par deux survit à la règle base-hauteur ; le facteur sinus est le côté manquant déguisé." },
          { "kind": "h3", "text": "Pourquoi la formule est-elle divisée par deux ?" },
          { "kind": "p", "text": "Un triangle de base et de hauteur perpendiculaire données remplit exactement la moitié du parallélogramme construit sur la même base et la même hauteur. Doubler n'importe quel triangle le long d'un côté complète ce parallélogramme, donc le triangle en possède la moitié de l'aire. La division par deux est de la géométrie, pas une convention, et elle s'applique quelle que soit la formule qui fournit la base et la hauteur." },
          { "kind": "h3", "text": "Comment le sinus remplace-t-il la hauteur manquante ?" },
          { "kind": "p", "text": "La hauteur perpendiculaire dans [[K=\\frac{ab}{2}]] est le côté [[a]]. Comme [[\\sin(A)=\\frac{a}{c}]], multiplier l'hypoténuse par le sinus redonne au rapport sans dimension l'échelle de la longueur [[a]]. L'utilisateur mesure [[c]] et [[A]] au lieu de [[a]], et le produit [[c\\sin(A)]] effectue la conversion silencieusement à l'intérieur de la formule." },
          { "kind": "h3", "text": "Pourquoi l'hypoténuse est-elle multipliée par le côté adjacent ?" },
          { "kind": "p", "text": "La règle générale pour tout triangle est que deux côtés et leur angle inclus déterminent l'aire. Ici, les deux côtés connus sont [[b]] et [[c]], et leur angle inclus est [[A]]. La formule multiplie exactement ces deux côtés, puis met à l'échelle par [[\\sin(A)]] et divise par deux. Tout autre appariement de côtés exigerait un angle inclus différent." },
          { "kind": "h3", "text": "Cette formule fonctionne-t-elle pour d'autres triangles ?" },
          { "kind": "p", "text": "Oui, dans sa forme générale : [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], où [[x]] et [[y]] sont deux côtés quelconques et [[\\theta]] est l'angle entre eux. La version pour triangle rectangle est cette règle avec [[x=b]], [[y=c]] et [[\\theta=A]]. Le calculateur ajoute une restriction : les trois entrées doivent aussi satisfaire les relations du triangle rectangle, comme [[b=c\\cos(A)]]. La formule générale calcule une aire pour n'importe quel couple de côtés et d'angle inclus ; ce calculateur interprète le résultat comme un triangle rectangle." }
        ],
        "imgAlt": "Triangle 3-4-5 : sin A égale 3 sur 5 récupère le côté a égal à 3, aire 6 par deux formules",
        "figcaption": "Du sinus à l'aire : sin A = 3/5 donne a = 3, donc K = bc sin A / 2 = 6 correspond à K = ab/2."
      },
      "sec-howto": {
        "h2": "Comment utiliser le calculateur d'aire du triangle rectangle à partir d'un côté et d'un angle",
        "blocks": [
          { "kind": "p", "text": "Le calculateur a besoin d'exactement trois entrées, saisies dans l'ordre. Les étapes ci-dessous suivent la disposition à l'écran, des mesures connues au résultat vérifié." }
        ],
        "steps": [
          "<strong>Identifiez le côté adjacent b.</strong> Le côté qui forme l'angle A avec l'hypoténuse.",
          "<strong>Identifiez l'hypoténuse c.</strong> Le côté le plus long, opposé à l'angle droit.",
          "<strong>Identifiez l'angle aigu inclus A.</strong> L'angle entre le côté b et l'hypoténuse c.",
          "<strong>Utilisez des unités compatibles pour les deux côtés.</strong> Des mètres avec des mètres, des pieds avec des pieds, jamais mélangés.",
          "<strong>Saisissez le côté b dans la première entrée.</strong> C'est le côté adjacent à l'angle A.",
          "<strong>Saisissez l'hypoténuse c dans la deuxième entrée.</strong> Elle doit dépasser le côté b.",
          "<strong>Saisissez l'angle A en degrés.</strong> Le calculateur attend des degrés, pas des radians.",
          "<strong>Vérifiez que l'angle se situe entre 0 et 90 degrés.</strong> Les bornes ne décrivent aucun triangle.",
          "<strong>Vérifiez que l'hypoténuse est plus longue que le côté.</strong> Si c n'est pas supérieur à b, une étiquette est fausse.",
          "<strong>Vérifiez que les trois valeurs décrivent un seul triangle rectangle.</strong> Confirmez que b égale c cos(A), au moins approximativement.",
          "<strong>Cliquez sur Calculer l'aire.</strong> Le résultat apparaît avec la substitution affichée.",
          "<strong>Examinez le résultat.</strong> Lisez l'aire et confirmez qu'elle semble raisonnable.",
          "<strong>Lisez les étapes de résolution.</strong> Elles montrent la formule, la valeur du sinus et le calcul.",
          "<strong>Vérifiez que le résultat final utilise des unités carrées.</strong> Des unités de longueur au carré, correspondant aux entrées.",
          "<strong>Utilisez Réinitialiser avant de saisir un autre problème.</strong> Cela efface les trois champs pour un nouveau départ."
        ],
        "closingParagraphs": [
          "La page propose une seule configuration de calculateur : [[b]], [[c]] et [[A]]. Il n'y a pas de second mode ; chaque aire de cette page provient de la formule du sinus ci-dessus."
        ]
      },
      "sec-consistency": {
        "h2": "Comment vérifier si votre côté, votre hypoténuse et votre angle forment un triangle rectangle valide",
        "blocks": [
          { "kind": "p", "text": "Les trois entrées ne sont pas indépendantes. Dans un triangle rectangle, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], donc [[[\\boxed{b=c\\cos(A)}]]] Fixez deux des trois valeurs et la troisième est déjà décidée. Saisir trois nombres en désaccord ne décrit pas le triangle supposé par la formule." },
          { "kind": "h3", "text": "Vérifier l'angle à partir des deux longueurs de côté" },
          { "kind": "p", "text": "Quand [[b]] et [[c]] sont connus, l'angle est imposé : [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Exemple : [[b=4]], [[c=5]] donne [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Si un rapporteur ou un calcul antérieur annonce un angle différent pour ces côtés, l'un des nombres est faux. Les côtés décident ; l'angle suit." },
          { "kind": "h3", "text": "Vérifier les longueurs de côté à partir de l'angle" },
          { "kind": "p", "text": "La vérification fonctionne aussi dans l'autre sens. Avec [[c=10]] et [[A=60^\\circ]], le côté adjacent doit être [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Saisir [[b=8]] avec la même hypoténuse et le même angle ne décrirait pas le même triangle rectangle, parce que [[10\\cos(60^\\circ)]] égale 5, pas 8. Chaque angle n'admet qu'une seule longueur de côté adjacent pour une hypoténuse fixée." },
          { "kind": "h3", "text": "Que se passe-t-il quand les entrées sont incohérentes ?" },
          { "kind": "p", "text": "La formule générale à deux côtés et angle inclus renvoie quand même un nombre pour des entrées incohérentes, parce qu'elle multiplie ce qu'elle reçoit. Mais quand [[b\\neq c\\cos(A)]], les mesures ne décrivent pas un triangle rectangle avec [[c]] comme hypoténuse et [[b]] comme côté adjacent. Une réponse numérique n'est pas la preuve d'une géométrie valide ; la vérification de cohérence l'est." },
          { "kind": "h3", "text": "Conditions d'entrée de base" },
          { "kind": "p", "text": "Des entrées valides satisfont [[c>b>0]], [[0^\\circ<A<90^\\circ]] et [[b=c\\cos(A)]]. La première garde l'hypoténuse la plus longue ; la deuxième garde l'angle aigu ; la troisième lie les trois valeurs en un seul triangle. Vérifiez les trois avant de faire confiance à l'aire." }
        ],
        "imgAlt": "Trois panneaux : 4, 5, 36.87 degrés valides ; 5, 10, 60 degrés valides ; 8, 10, 60 degrés invalides",
        "figcaption": "Des entrées valides satisfont b = c cos A ; le troisième panneau montre que 10 cos 60° = 5, différent de 8."
      },
      "sec-examples": {
        "h2": "Exemples pas à pas d'aire du triangle rectangle avec un côté et un angle",
        "blocks": [
          { "kind": "p", "text": "Quatre triangles rectangles classiques montrent la méthode à des tailles croissantes. Chaque exemple substitue dans la formule du sinus, puis vérifie le résultat avec la formule des deux côtés." },
          { "kind": "h3", "text": "Exemple 1 : triangle rectangle 3-4-5" },
          { "kind": "p", "text": "Avec [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Étape 1 : [[K=\\frac{bc\\sin(A)}{2}]]. Étape 2 : [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Étape 3 : [[\\sin(36.87^\\circ)\\approx0.6]]. Étape 4 : [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Vérification : [[a=5\\times0.6=3]], et [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Exemple 2 : triangle rectangle 5-12-13" },
          { "kind": "p", "text": "Avec [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], avec [[\\sin(A)=\\frac{5}{13}]]. Substitution : [[K=\\frac{12\\times13\\times(5/13)}{2}]]. Le 13 s'annule : [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Vérification : [[a=13\\times(5/13)=5]], et [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Exemple 3 : triangle rectangle 8-15-17" },
          { "kind": "p", "text": "Avec [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], avec [[\\sin(A)=\\frac{8}{17}]]. Alors [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Vérification : [[a=8]], et [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Exemple 4 : triangle rectangle 7-24-25" },
          { "kind": "p", "text": "Avec [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], avec [[\\sin(A)=\\frac{7}{25}]]. Alors [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Vérification : [[a=7]], et [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Comparaison des exemples fondamentaux" }
        ],
        "table": {
          "headers": ["Type de triangle", "Côté connu b", "Hypoténuse c", "Angle A", "Aire calculée"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applications réelles de l'aire du triangle rectangle à partir d'un côté et d'un angle",
        "blocks": [
          { "kind": "p", "text": "Douze situations résolues transportent la formule de la page vers l'atelier, le chantier et le studio. Chacune nomme un panneau, une section, un profil ou un modèle simplifié triangulaire rectangle, fait passer les trois entrées du calculateur dans la formule, et énonce l'hypothèse derrière les nombres. Quand l'objet réel est courbe ou irrégulier, le calcul ne couvre que le triangle modélisé." },
          { "kind": "h3", "text": "Exemple 1 : fenêtre en verre triangulaire" },
          { "kind": "p", "text": "Une fenêtre en verre triangulaire rectangle a [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Entrées du calculateur : [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Substitution : [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] C'est l'aire du verre triangulaire plat avant déduction des tolérances du cadre." },
          { "kind": "h3", "text": "Exemple 2 : panneau de support de toit" },
          { "kind": "p", "text": "Une section de support de toit triangulaire rectangle a [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Entrées : [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Alors [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Le résultat décrit la section de support triangulaire plate, pas tout le toit." },
          { "kind": "h3", "text": "Exemple 3 : profil latéral d'une rampe triangulaire" },
          { "kind": "p", "text": "Un profil de rampe triangulaire rectangle simplifié a [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Entrées : [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Alors [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] C'est le profil latéral triangulaire, pas la surface de marche inclinée." },
          { "kind": "h3", "text": "Exemple 4 : gousset en acier" },
          { "kind": "p", "text": "Une plaque de support triangulaire en acier a [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Entrées : [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Alors [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] L'aire seule n'établit ni la résistance structurelle ni la capacité de charge." },
          { "kind": "h3", "text": "Exemple 5 : section de jardin triangulaire" },
          { "kind": "p", "text": "Une section de jardin triangulaire rectangle simplifiée a [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Entrées : [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Alors [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Cela aide à estimer l'aire de la section triangulaire pour la plantation." },
          { "kind": "h3", "text": "Exemple 6 : panneau de voile triangulaire" },
          { "kind": "p", "text": "Une section de voile triangulaire rectangle a [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Entrées : [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Alors [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Les coutures et les tolérances de matériau sont exclues de ce chiffre de panneau plat." },
          { "kind": "h3", "text": "Exemple 7 : gabarit de découpe en contreplaqué" },
          { "kind": "p", "text": "Un gabarit triangulaire rectangle en contreplaqué a [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Entrées : [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Alors [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] L'aire aide à estimer le matériau plat nécessaire avant les pertes de découpe." },
          { "kind": "h3", "text": "Exemple 8 : panneau de signalisation routière triangulaire" },
          { "kind": "p", "text": "Un panneau de signalisation triangulaire rectangle a [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Entrées : [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Alors [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Cela estime l'aire de la face plate du panneau." },
          { "kind": "h3", "text": "Exemple 9 : section de terrain arpentée" },
          { "kind": "p", "text": "Une section de terrain arpentée triangulaire rectangle a [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Entrées : [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Alors [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Le résultat s'applique à la section de terrain triangulaire rectangle simplifiée." },
          { "kind": "h3", "text": "Exemple 10 : support de store triangulaire" },
          { "kind": "p", "text": "Une section de support de store triangulaire rectangle a [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Entrées : [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Alors [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] C'est la section triangulaire plate, pas tout le tissu d'un store irrégulier." },
          { "kind": "h3", "text": "Exemple 11 : coupe transversale d'un site industriel" },
          { "kind": "p", "text": "Une section de terrain industriel triangulaire rectangle simplifiée a [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Entrées : [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Alors [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Un site réel irrégulier peut nécessiter une division en plusieurs formes." },
          { "kind": "h3", "text": "Exemple 12 : section d'extrémité de toit d'entrepôt" },
          { "kind": "p", "text": "Une grande section d'extrémité de toit d'entrepôt triangulaire rectangle a [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Entrées : [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Alors [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Le résultat estime la section d'extrémité triangulaire plate." },
          { "kind": "h3", "text": "Comparaison des exemples pratiques" }
        ],
        "table": {
          "headers": ["Application pratique", "Côté a", "Côté connu b", "Hypoténuse c", "Angle A", "Aire calculée", "Unité de mesure"],
          "rows": [
            ["Fenêtre en verre", "3", "4", "5", "36.87°", "6", "m²"],
            ["Support de toit", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Profil de rampe", "6", "8", "10", "36.87°", "24", "m²"],
            ["Gousset", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Section de jardin", "7", "24", "25", "16.26°", "84", "m²"],
            ["Panneau de voile", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Gabarit en contreplaqué", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Panneau routier", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Section arpentée", "9", "40", "41", "12.68°", "180", "m²"],
            ["Support de store", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Section industrielle", "11", "60", "61", "10.39°", "330", "m²"],
            ["Extrémité de toit d'entrepôt", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Pourquoi la formule basée sur le sinus donne-t-elle la même aire que la formule des côtés ?",
        "blocks": [
          { "kind": "p", "text": "Partez de [[K=\\frac{bc\\sin(A)}{2}]] et rappelez [[\\sin(A)=\\frac{a}{c}]]. Substitution : [[K=\\frac{bc(a/c)}{2}]]. Le [[c]] s'annule, laissant [[[\\boxed{K=\\frac{ab}{2}}]]] La formule du sinus n'invente pas une nouvelle aire ; elle calcule la même aire à partir d'un ensemble différent de données, avec le côté manquant introduit en douce par le rapport sinus." },
          { "kind": "h3", "text": "Quand la formule du sinus est-elle plus utile ?" },
          { "kind": "p", "text": "Utilisez-la quand un côté est mesuré, l'hypoténuse est connue et l'angle inclus est disponible, tandis que le troisième côté n'a jamais été mesuré directement. Les mesures de terrain, les dessins à l'échelle et les données d'arpentage arrivent souvent dans exactement cette combinaison. La formule transforme ces trois nombres en une aire en une ligne, sans détour pour trouver d'abord le côté manquant." },
          { "kind": "h3", "text": "Quand la formule des côtés est-elle plus simple ?" },
          { "kind": "p", "text": "Quand les deux côtés perpendiculaires sont déjà connus, [[K=\\frac{ab}{2}]] est plus courte : pas de sinus, pas d'angle, une multiplication et une division par deux. Prenez la version sinus uniquement quand un côté manque et que l'angle peut le fournir." },
          { "kind": "h3", "text": "Comparaison numérique" },
          { "kind": "p", "text": "Sur le triangle 3-4-5, la méthode sinus donne [[K=\\frac{4\\times5\\times0.6}{2}=6]], et la méthode des côtés donne [[K=\\frac{3\\times4}{2}=6]]. Les deux chemins traversent la même géométrie, donc ils doivent concorder. Quand ce n'est pas le cas, les entrées ou le calcul sont en faute, jamais les formules." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Comment l'angle inclus affecte-t-il l'aire du triangle rectangle ?",
        "blocks": [
          { "kind": "p", "text": "Avec l'hypoténuse fixée, l'angle ne peut pas varier librement : les relations du triangle rectangle lient [[b]] et [[A]] ensemble. Traiter cette contrainte honnêtement montre exactement comment l'aire monte et descend quand [[A]] se déplace entre 0 et 90 degrés." },
          { "kind": "h3", "text": "Que se passe-t-il quand l'angle A augmente ?" },
          { "kind": "p", "text": "Avec [[c]] fixée, [[b=c\\cos(A)]] et [[a=c\\sin(A)]], donc [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. L'identité du double angle donne [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] L'aire croît quand [[A]] s'approche de 45 degrés par en dessous, culmine à 45 degrés, puis décroît vers 90 degrés. Des angles complémentaires, comme 30° et 60°, donnent la même aire parce que [[\\sin(2A)]] est symétrique autour de 45 degrés." },
          { "kind": "h3", "text": "Aire maximale pour une hypoténuse fixée" },
          { "kind": "p", "text": "Le sommet se produit à [[A=45^\\circ]], où [[\\sin(2A)=1]] : [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Là, [[a=b=\\frac{c}{\\sqrt{2}}]], donc le triangle qui maximise est isocèle. Une hypoténuse fixée ne peut enfermer plus d'aire triangulaire rectangle qu'un quart de son carré, et seule la forme isocèle l'atteint." },
          { "kind": "h3", "text": "Exemple numérique" },
          { "kind": "p", "text": "Avec [[c=10]], le plafond est [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] À [[A=45^\\circ]], les côtés valent [[10/\\sqrt{2}\\approx7.07]] chacun, et [[\\frac{7.07\\times7.07}{2}\\approx25]]. Notez que 90° n'est pas une entrée aiguë admissible : elle aplatirait le triangle en une ligne." }
        ]
      },
      "sec-alternative": {
        "h2": "Peut-on calculer l'aire d'un triangle rectangle avec un seul côté et son angle ?",
        "blocks": [
          { "kind": "p", "text": "Oui, avec la tangente au lieu du sinus. Si le côté [[b]] et l'angle [[A]] sont connus, le côté opposé découle de [[a=b\\tan(A)]]. Mettez cela dans [[K=\\frac{ab}{2}]] : [[K=\\frac{b(b\\tan(A))}{2}]], donc [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Depuis l'autre coin, [[b=a\\tan(B)]] donne [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Ce sont de véritables méthodes alternatives, utiles quand l'hypoténuse est inconnue mais qu'un côté et son angle sont en main. Ce sont des alternatives mathématiques, pas des modes supplémentaires dans le calculateur ci-dessus, qui fonctionne uniquement avec [[b]], [[c]] et [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Comprendre les unités d'angle et les mesures dans les calculs d'aire",
        "blocks": [
          { "kind": "p", "text": "L'aire hérite son unité des deux longueurs multipliées pour la former, tandis que l'angle n'apporte aucune unité. Garder les trois entrées dans des unités compatibles est ce qui rend la réponse honnête." },
          { "kind": "h3", "text": "Degrés contre radians" },
          { "kind": "p", "text": "Le calculateur attend des degrés. Convertissez avec [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] ; par exemple, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Un angle en mode radian introduit dans un champ en mode degré change silencieusement la valeur du sinus : [[\\sin(30^\\circ)=0.5]] mais [[\\sin(30\\text{ radians})\\approx-0.99]], ce qui ruinerait l'aire. Convertissez d'abord, puis saisissez." },
          { "kind": "h3", "text": "Pourquoi le sinus n'a pas d'unité" },
          { "kind": "p", "text": "Le sinus est un rapport de deux longueurs, donc les unités s'annulent : opposé sur hypoténuse est un nombre pur. Les unités carrées de la réponse proviennent entièrement de la multiplication de [[b]] par [[c]]. C'est pourquoi la comptabilité des unités de la formule est simple : assortissez les deux unités de longueur, et l'unité d'aire suit." },
          { "kind": "h3", "text": "Unités de mesure courantes" },
          { "kind": "p", "text": "Des mètres donnent des mètres carrés, des centimètres des centimètres carrés, des pieds des pieds carrés, des pouces des pouces carrés : [[\\text{m}\\times\\text{m}=\\text{m}^2]], et le même schéma vaut pour chaque unité de longueur. Des unités mélangées, comme des centimètres avec des mètres, doivent être converties en une seule unité avant d'appliquer la formule, sinon le nombre n'a pas de sens clair." },
          { "kind": "h3", "text": "Pourquoi un arrondi précoce peut affecter le résultat" },
          { "kind": "p", "text": "Gardez la pleine précision tout au long des étapes intermédiaires et n'arrondissez que la réponse finale. L'angle exact derrière 36.87° est 36.869897°, dont le sinus vaut exactement 0.6 ; arrondir l'angle d'abord déplace le sinus d'un cheveu, et ce cheveu se multiplie à travers [[b]] et [[c]] jusque dans l'aire. Petit sur un triangle, sensible sur un projet entier." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erreurs courantes dans le calcul de l'aire d'un triangle rectangle à partir d'un côté et d'un angle",
        "blocks": [
          { "kind": "p", "text": "Presque chaque mauvaise réponse dans ce sujet remonte à une entrée mal étiquetée plutôt qu'à un mauvais calcul. Les seize erreurs ci-dessous sont celles qui reviennent sans cesse, chacune avec sa cause et sa correction." },
          { "kind": "h3", "text": "1. Confondre l'hypoténuse avec un côté de l'angle droit" },
          { "kind": "p", "text": "L'hypoténuse est le côté opposé à l'angle droit et le côté le plus long ; un côté de l'angle droit rencontre l'angle droit. Les échanger introduit la mauvaise longueur dans [[c]]. Correction : trouvez d'abord l'angle droit, puis prenez le côté en face." },
          { "kind": "h3", "text": "2. Associer l'angle A au mauvais côté" },
          { "kind": "p", "text": "L'angle [[A]] se trouve entre le côté [[b]] et l'hypoténuse [[c]]. L'associer au côté [[a]] brouille la relation d'angle inclus supposée par la formule. Correction : tracez les deux côtés qui forment l'angle saisi." },
          { "kind": "h3", "text": "3. Confondre les côtés opposé et adjacent" },
          { "kind": "p", "text": "Opposé signifie en face de l'angle ; adjacent signifie qui le touche, à côté de l'hypoténuse. Les étiquettes s'inversent quand l'angle de référence change. Correction : placez-vous à l'angle [[A]] et nommez chaque côté depuis là." },
          { "kind": "h3", "text": "4. Utiliser l'angle B au lieu de l'angle A sans changer le côté correspondant" },
          { "kind": "p", "text": "L'angle [[B]] s'apparie avec les côtés [[a]] et [[c]], pas [[b]] et [[c]]. Saisir [[B]] en gardant [[b]] et [[c]] calcule une autre quantité. Correction : gardez chaque angle avec son propre appariement de côtés, ou convertissez [[B]] en [[A]] d'abord." },
          { "kind": "h3", "text": "5. Utiliser des radians quand le calculateur attend des degrés" },
          { "kind": "p", "text": "Saisir 0.6435 (radians) là où 36.87 (degrés) appartient change complètement [[\\sin(A)]]. Correction : vérifiez l'unité du calculateur, convertissez avec [[\\times\\frac{180}{\\pi}]] si besoin, puis saisissez." },
          { "kind": "h3", "text": "6. Oublier de diviser par deux" },
          { "kind": "p", "text": "Multiplier [[b\\times c\\times\\sin(A)]] donne l'aire du parallélogramme qui les enferme, le double de celle du triangle. Correction : divisez le produit par deux ; le /2 fait partie de la formule, il n'est pas optionnel." },
          { "kind": "h3", "text": "7. Oublier la fonction sinus" },
          { "kind": "p", "text": "Calculer [[\\frac{bc}{2}]] seul traite [[\\sin(A)]] comme 1, ce qui n'est vrai qu'à 90°, une entrée aiguë impossible. Correction : incluez [[\\sin(A)]] ; il porte la part du côté manquant." },
          { "kind": "h3", "text": "8. Saisir un côté plus long que l'hypoténuse" },
          { "kind": "p", "text": "Aucun côté ne peut dépasser l'hypoténuse, donc [[c\\leq b]] signifie qu'une étiquette est fausse. Correction : ré-identifiez les côtés ; la mesure la plus longue est [[c]]." },
          { "kind": "h3", "text": "9. Saisir un angle de 0 degré" },
          { "kind": "p", "text": "À 0°, [[\\sin(A)=0]] et le triangle s'aplatit en une ligne d'aire nulle. Correction : utilisez un vrai angle aigu, strictement entre 0° et 90°." },
          { "kind": "h3", "text": "10. Saisir un angle de 90 degrés comme angle aigu" },
          { "kind": "p", "text": "90° est l'angle droit [[C]], pas un angle aigu ; [[\\sin(90^\\circ)=1]] transforme la formule en [[\\frac{bc}{2}]], qui n'est pas l'aire de ce triangle. Correction : saisissez l'angle aigu entre [[b]] et [[c]]." },
          { "kind": "h3", "text": "11. Mélanger différentes unités de longueur" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] avec [[c=5\\text{ m}]] multiplie des échelles incompatibles. Correction : convertissez les deux dans une même unité (400 cm = 4 m) avant de calculer." },
          { "kind": "h3", "text": "12. Exprimer l'aire en unités linéaires" },
          { "kind": "p", "text": "Une aire de 6 m² n'est pas 6 m. Correction : écrivez l'unité au carré avec le nombre, à chaque fois." },
          { "kind": "h3", "text": "13. Arrondir l'angle trop tôt" },
          { "kind": "p", "text": "Arrondir 36.869897° à 36.87° avant de prendre le sinus décale légèrement le résultat ; arrondir à 37° le décale davantage. Correction : gardez la pleine précision jusqu'à la réponse finale." },
          { "kind": "h3", "text": "14. Supposer que les trois entrées peuvent être choisies indépendamment" },
          { "kind": "p", "text": "[[b]], [[c]] et [[A]] sont liés par [[b=c\\cos(A)]] ; choisir les trois librement surdétermine le triangle. Correction : déduisez la troisième valeur des deux autres au lieu de l'inventer." },
          { "kind": "h3", "text": "15. Utiliser un angle incohérent avec les longueurs de côté saisies" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] échoue à la vérification, puisque [[10\\cos(60^\\circ)=5\\neq8]]. La formule renvoie quand même un nombre, mais ce n'est pas l'aire de ce triangle rectangle. Correction : exécutez la vérification [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Supposer qu'un résultat numérique du calculateur représente toujours un triangle rectangle valide" },
          { "kind": "p", "text": "Le calcul réussit sur n'importe quels nombres tapés ; la géométrie, non. Correction : vérifiez avec les contrôles de cohérence et une formule indépendante avant de faire confiance à la réponse." },
          { "kind": "h3", "text": "Faux contre correct : un exemple concret" },
          { "kind": "p", "text": "Utilisez [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Correct : [[K=\\frac{4\\times5\\times0.6}{2}=6]]. En saisissant incorrectement l'angle [[B=53.13^\\circ]] avec les mêmes côtés : [[K=\\frac{4\\times5\\times0.8}{2}=8]]. L'angle [[B]] n'est pas l'angle inclus entre [[b]] et [[c]] ; son appariement de côtés propre est [[a]] et [[c]]. L'erreur est invisible dans le calcul et évidente dans la géométrie." }
        ]
      },
      "sec-verify": {
        "h2": "Comment vérifier si l'aire de votre triangle rectangle est correcte",
        "blocks": [
          { "kind": "p", "text": "Sept vérifications indépendantes, toutes démontrées sur le triangle 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). L'accord entre différentes voies est la preuve la plus forte qu'une réponse est juste." },
          { "kind": "h3", "text": "Méthode 1 : vérifier la formule principale" },
          { "kind": "p", "text": "Recalculez [[K=\\frac{bc\\sin(A)}{2}]] : [[\\frac{4\\times5\\times0.6}{2}=6]]. Un second passage attrape les fautes de frappe et les angles mal saisis." },
          { "kind": "h3", "text": "Méthode 2 : vérifier la relation du cosinus" },
          { "kind": "p", "text": "Confirmez [[b=c\\cos(A)]] : [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Un désaccord signifie que l'angle et les côtés appartiennent à des triangles différents." },
          { "kind": "h3", "text": "Méthode 3 : calculer le côté manquant" },
          { "kind": "p", "text": "Confirmez [[a=c\\sin(A)]] : [[5\\times0.6=3]]. Cela contrôle la valeur du sinus qui alimente la formule d'aire." },
          { "kind": "h3", "text": "Méthode 4 : vérifier le théorème de Pythagore" },
          { "kind": "p", "text": "Confirmez [[a^2+b^2=c^2]] : [[9+16=25]]. Un échec ici signifie que l'identification des côtés est fausse." },
          { "kind": "h3", "text": "Méthode 5 : vérifier avec les deux côtés" },
          { "kind": "p", "text": "Confirmez [[K=\\frac{ab}{2}]] : [[\\frac{3\\times4}{2}=6]]. Deux méthodes, un triangle, une réponse." },
          { "kind": "h3", "text": "Méthode 6 : vérifier les angles complémentaires" },
          { "kind": "p", "text": "Confirmez [[A+B=90^\\circ]] : [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Cela attrape un angle mesuré au mauvais coin." },
          { "kind": "h3", "text": "Méthode 7 : vérifier l'aire maximale" },
          { "kind": "p", "text": "Confirmez [[K\\leq\\frac{c^2}{4}]] : [[6\\leq\\frac{25}{4}=6.25]]. Une aire au-dessus du plafond est impossible pour l'hypoténuse donnée." }
        ]
      },
      "sec-applications": {
        "h2": "L'aire du triangle rectangle à partir d'un côté et d'un angle en pratique",
        "blocks": [
          { "kind": "p", "text": "Les trois mêmes entrées apparaissent dans des endroits qui ne mentionnent jamais la trigonométrie. Un vitrier mesure le côté et la diagonale d'une fenêtre et lit l'angle sur le cadre ; un couvreur connaît l'hypoténuse du support d'après la longueur du chevron et l'angle d'après la pente. Dans chaque cas, le côté perpendiculaire manquant est celui qu'il est maladroit d'atteindre avec un mètre, tandis que l'hypoténuse et l'angle sont à portée de main. La formule du sinus existe exactement pour cette asymétrie : elle convertit les mesures accessibles en la hauteur inaccessible, puis en l'aire." },
          { "kind": "p", "text": "Les quatre panneaux ci-dessous montrent le motif à différentes échelles. Une fenêtre en verre (6 m²) et un profil de rampe (24 m²) utilisent la géométrie 3-4-5 et 6-8-10 à l'échelle du mètre ; un support de toit (30 ft²) utilise le triangle 5-12-13 ; une section arpentée (84 m²) utilise 7-24-25. Chaque panneau étiquette le côté adjacent, l'hypoténuse, l'angle inclus et l'aire résultante, pour que le chemin de la mesure à la réponse reste visible." }
        ],
        "imgAlt": "Quatre panneaux : fenêtre en verre 6 m2, panneau de toit 30 ft2, profil de rampe 24 m2, section arpentée 84 m2",
        "figcaption": "Quatre usages réels : fenêtre, support de toit, profil de rampe et section arpentée avec leurs aires."
      },
      "sec-faq": {
        "h2": "Questions fréquentes",
        "blocks": [
          { "kind": "p", "text": "Voici les réponses aux questions les plus courantes sur l'aire à partir d'un côté et d'un angle." }
        ]
      },
      "sec-related": {
        "h2": "Explorez les calculateurs de triangle rectangle associés",
        "blocks": [
          { "kind": "p", "text": "Des mesures différentes appellent des calculateurs différents." }
        ]
      },
      "sec-conclusion": {
        "h2": "Trois entrées portent toute l'aire",
        "blocks": [
          { "kind": "p", "text": "Un côté, l'hypoténuse et l'angle entre eux s'avèrent suffisants. Le rapport sinus reconstruit le côté manquant, la division par deux convertit le rectangle qui les enferme en triangle, et les relations de cohérence permettent de contrôler chaque entrée par rapport aux autres. Rien dans la méthode n'est approximatif quand les entrées sont exactes." },
          { "kind": "p", "text": "L'habitude de travail est simple : étiquetez les côtés depuis l'angle A, gardez les unités assorties, confirmez b = c cos(A) et vérifiez la réponse par la formule des côtés. Avec ces habitudes, K = bc sin(A)/2 est aussi fiable que n'importe quel calcul d'aire en géométrie." }
        ]
      }
    }
  }
,
  "de": {
    "faqs": [
      {
        "question": "Wie lautet die Formel für den Flächeninhalt mit einer Kathete und einem Winkel?",
        "answer": "K = bc sin(A) / 2, wobei b die an den Winkel A anliegende Kathete ist, c die Hypotenuse und A der spitze Winkel zwischen ihnen. Zum Beispiel ergeben b = 4, c = 5 und A = 36.87° den Wert K = (4 × 5 × 0.6) / 2 = 6 Flächeneinheiten. Der Winkel muss in Grad eingegeben werden, und beide Seiten müssen dieselbe Längeneinheit verwenden."
      },
      {
        "question": "Warum verwendet die Formel den Sinus?",
        "answer": "Der Sinus stellt die fehlende senkrechte Kathete aus der Hypotenuse wieder her: Da sin(A) = a/c gilt, ergibt Multiplizieren a = c sin(A). Die Standardflächenregel braucht beide Katheten, K = ab/2, daher erzeugt das Einsetzen des Sinusausdrucks für a die Formel K = bc sin(A)/2. Der Sinus ist die Brücke zwischen der gemessenen Hypotenuse und der ungemessenen Höhe."
      },
      {
        "question": "Welche Seite liegt am Winkel A an?",
        "answer": "Kathete b liegt am Winkel A an: Sie ist eine der beiden Seiten, die diesen Winkel bilden, die andere ist die Hypotenuse c. Kathete a liegt dem Winkel A gegenüber, also auf der anderen Seite des Dreiecks. Wechselt man den Bezugswinkel zu B, tauschen die Bezeichnungen: b wird zur Gegenkathete und a zur Ankathete."
      },
      {
        "question": "Kann ich den Flächeninhalt ohne die fehlende Kathete berechnen?",
        "answer": "Ja, genau dafür ist dieser Rechner da. Der Sinus des Winkels A kodiert das Verhältnis der fehlenden Kathete zur Hypotenuse, also rekonstruiert c sin(A) die Kathete a ohne Messung. Geben Sie b, c und A ein, und die Formel erledigt den Rest. Die dritte Seite wird nie als separate Eingabe benötigt."
      },
      {
        "question": "Was ist der Unterschied zwischen Winkel A und Winkel B?",
        "answer": "Beide sind spitze Winkel des rechtwinkligen Dreiecks, und es gilt A + B = 90°. Winkel A liegt zwischen Kathete b und Hypotenuse c; Winkel B liegt zwischen Kathete a und Hypotenuse c. Die Formel K = bc sin(A)/2 verlangt ausdrücklich Winkel A. Winkel B mit den Seiten b und c zu verwenden liefert ein falsches Ergebnis; Winkel B gehört zu den Seiten a und c."
      },
      {
        "question": "Verwendet der Rechner Grad oder Radiant?",
        "answer": "Grad. Die Eingabe eines Radiantwerts erzeugt einen völlig anderen Sinus und einen falschen Flächeninhalt. Rechnen Sie Radiant zuerst mit Grad = Radiant × 180/π in Grad um; zum Beispiel entsprechen π/6 Radiant 30°. Prüfen Sie vor jeder Berechnung die Winkeleinheit."
      },
      {
        "question": "Kann ich einen beliebigen Winkel zu gegebener Kathete und Hypotenuse verwenden?",
        "answer": "Nein. Die drei Eingaben müssen b = c cos(A) erfüllen, daher ist der Winkel festgelegt, sobald die Seiten gewählt sind. Für b = 4 und c = 5 muss Winkel A etwa 36.87° betragen. Ein anderer Winkel beschreibt ein anderes Dreieck, und das Ergebnis passt nicht zum beabsichtigten rechtwinkligen Dreieck."
      },
      {
        "question": "Wie prüfe ich, ob meine Messungen ein gültiges rechtwinkliges Dreieck bilden?",
        "answer": "Prüfen Sie drei Bedingungen: Die Hypotenuse ist länger als die Kathete (c > b > 0), der Winkel liegt strikt zwischen 0° und 90°, und b = c cos(A) gilt. Für mehr Sicherheit prüfen Sie zusätzlich a = c sin(A) und den Satz des Pythagoras a² + b² = c². Scheitert eine Prüfung, ist mindestens eine Messung oder Bezeichnung falsch."
      },
      {
        "question": "Kann ich den Flächeninhalt berechnen, wenn ich beide Katheten kenne?",
        "answer": "Ja, und die kürzere Formel K = ab/2 gilt direkt, ohne Winkel und Sinus. Für die Katheten 3 und 4 ist K = 6. Der sinusbasierte Rechner ist für den Fall gedacht, dass eine Kathete fehlt; sind beide Katheten bekannt, ist die Kathetenformel einfacher und liefert das identische Ergebnis."
      },
      {
        "question": "Was passiert, wenn ich den falschen Winkel eingebe?",
        "answer": "Der Rechner multipliziert, was er erhält, daher liefert ein falscher Winkel ohne Warnung einen falschen Flächeninhalt. Die Eingabe von Winkel B = 53.13° statt A = 36.87° mit b = 4 und c = 5 ergibt 8 statt 6. Vergewissern Sie sich stets, dass der eingegebene Winkel der zwischen Kathete b und Hypotenuse ist."
      },
      {
        "question": "Was ist der größtmögliche Flächeninhalt bei fester Hypotenuse?",
        "answer": "K = c²/4, erreicht bei Winkel A = 45°, wenn das Dreieck gleichschenklig mit Katheten c/√2 ist. Bei einer Hypotenuse von 10 beträgt die Obergrenze 25 Flächeneinheiten. Kein rechtwinkliges Dreieck mit dieser Hypotenuse kann mehr Fläche einschließen. Übersteigt Ihr Ergebnis c²/4, sind die Eingaben inkonsistent."
      },
      {
        "question": "Was ist der Unterschied zwischen der sinusbasierten Formel und der Standardformel Grundlinie mal Höhe?",
        "answer": "Es gibt keinen mathematischen Unterschied: Setzt man sin(A) = a/c in K = bc sin(A)/2 ein, erhält man K = ab/2, die Standardregel Grundlinie mal Höhe. Die Sinusversion ist einfach dieselbe Formel, umgeschrieben für andere bekannte Größen. Verwenden Sie die Sinusform, wenn Hypotenuse und Winkel bekannt sind; verwenden Sie ab/2, wenn beide Katheten bekannt sind."
      }
    ],
    "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
    "relatedItems": [
      "Flächenrechner für rechtwinklige Dreiecke",
      "Flächenrechner für rechtwinklige Dreiecke aus Katheten",
      "Flächenrechner für rechtwinklige Dreiecke aus Winkel",
      "Seitenrechner für rechtwinklige Dreiecke aus Winkel",
      "Seitenrechner für rechtwinklige Dreiecke",
      "Rechner für trigonometrische Verhältnisse rechtwinkliger Dreiecke"
    ],
    "relatedIntro": "Unterschiedliche Messungen erfordern unterschiedliche Rechner.",
    "faqHeading": "Häufig gestellte Fragen",
    "tocHeading": "In dieser Anleitung",
    "tocItems": {
      "sec-intro": "So berechnen Sie den Flächeninhalt eines rechtwinkligen Dreiecks aus einer Kathete und einem Winkel",
      "sec-anatomy": "Die Seiten und Winkel eines rechtwinkligen Dreiecks verstehen",
      "sec-sine": "Die Sinusfunktion in Berechnungen am rechtwinkligen Dreieck verstehen",
      "sec-formula": "Warum verwendet die Flächenformel für rechtwinklige Dreiecke den Sinus?",
      "sec-howto": "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke aus Kathete und Winkel",
      "sec-consistency": "So prüfen Sie, ob Kathete, Hypotenuse und Winkel ein gültiges rechtwinkliges Dreieck bilden",
      "sec-examples": "Schritt-für-Schritt-Beispiele zum Flächeninhalt rechtwinkliger Dreiecke aus Kathete und Winkel",
      "sec-practical": "Praktische Anwendungen des Flächeninhalts rechtwinkliger Dreiecke aus Kathete und Winkel",
      "sec-compare": "Warum liefert die sinusbasierte Formel denselben Flächeninhalt wie die Kathetenformel?",
      "sec-angle-effect": "Wie beeinflusst der eingeschlossene Winkel den Flächeninhalt des rechtwinkligen Dreiecks?",
      "sec-alternative": "Kann man den Flächeninhalt eines rechtwinkligen Dreiecks mit einer Kathete und ihrem Winkel berechnen?",
      "sec-units": "Winkeleinheiten und Messungen in Flächenberechnungen verstehen",
      "sec-mistakes": "Häufige Fehler bei der Flächenberechnung rechtwinkliger Dreiecke aus Kathete und Winkel",
      "sec-verify": "So prüfen Sie, ob Ihr Flächeninhalt des rechtwinkligen Dreiecks korrekt ist",
      "sec-applications": "Der Flächeninhalt rechtwinkliger Dreiecke aus Kathete und Winkel in der Praxis",
      "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufig gestellte Fragen",
      "sec-conclusion": "Drei Eingaben tragen den ganzen Flächeninhalt"
    },
    "sections": {
      "sec-intro": {
        "h2": "So berechnen Sie den Flächeninhalt eines rechtwinkligen Dreiecks aus einer Kathete und einem Winkel",
        "blocks": [
          { "kind": "p", "text": "Nehmen Sie [[b=4]], [[c=5]] und [[A=36.87^\\circ]]. Wenden Sie [[K=\\frac{bc\\sin(A)}{2}]] an: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Das Ergebnis benennt die gesamte ebene Fläche, die von den drei Seiten eingeschlossen wird: sechs Flächeneinheiten. Genau das gibt der Flächenrechner für rechtwinklige Dreiecke aus Kathete und Winkel für diese Eingaben zurück." },
          { "kind": "p", "text": "Der Rechner verlangt drei Messungen. Kathete [[b]] liegt neben Winkel [[A]]; die Hypotenuse [[c]] ist die längste Seite, gegenüber dem rechten Winkel; und Winkel [[A]] ist der spitze Winkel, der zwischen ihnen eingeklemmt ist. Da [[\\sin(A)]] dem Verhältnis der fehlenden Kathete [[a]] zur Hypotenuse [[c]] entspricht, baut die Formel die fehlende Höhe wieder auf, ohne sie zu messen. Die Multiplikation von [[b]], [[c]] und [[\\sin(A)]] bildet das umschließende Rechteck; die Division durch zwei stutzt es zum Dreieck." },
          { "kind": "p", "text": "Das ist wichtig, wann immer die dritte Seite schwer zu messen ist. Eine Zeichnung liefert vielleicht die Hypotenuse und eine Kathete, während ein Winkelmesser oder ein früherer Schritt den Winkel liefert. Der Sinus schließt die Lücke, sodass der Flächeninhalt aus dem folgt, was bereits bekannt ist." }
        ]
      },
      "sec-anatomy": {
        "h2": "Die Seiten und Winkel eines rechtwinkligen Dreiecks verstehen",
        "blocks": [
          { "kind": "p", "text": "Bevor die Formel Sinn ergibt, müssen die Bezeichnungen exakt sein. Jedes Symbol unten erscheint im Rechner, und jedes trägt eine einzige, feste Bedeutung." },
          { "kind": "h3", "text": "Was ist ein rechtwinkliges Dreieck?" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein Dreieck mit einem Innenwinkel von 90 Grad. Die beiden Seiten, die diesen Winkel bilden, sind die Katheten, senkrecht zueinander; die Seite gegenüber dem rechten Winkel ist die Hypotenuse. Da die drei Innenwinkel zusammen 180 Grad ergeben, erfüllen die beiden spitzen Winkel [[A+B=90^\\circ]], was sie komplementär macht: Wer einen kennt, kennt den anderen." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel. Sie ist immer die längste Seite, egal wie das Dreieck gedreht oder gezeichnet ist. Der Rechner verwendet sie als Seite [[c]], daher ist ihre korrekte Bestimmung der erste Schritt: Finden Sie den rechten Winkel und nehmen Sie dann die Seite ihm gegenüber. Eine Kathete kann diese Rolle niemals spielen, wie lang sie in einer geneigten Zeichnung auch aussieht." },
          { "kind": "h3", "text": "Was sind die beiden Katheten?" },
          { "kind": "p", "text": "Die beiden Katheten sind die Seiten, die sich im rechten Winkel treffen, senkrecht zueinander. Kathete [[a]] liegt gegenüber Winkel [[A]]; Kathete [[b]] liegt gegenüber Winkel [[B]]. Der Rechner nimmt Kathete [[b]], die an Winkel [[A]] anliegende, als erste Eingabe. Zusammen bilden die Katheten die Ecke, in der der 90-Grad-Winkel lebt." },
          { "kind": "h3", "text": "Winkel A verstehen" },
          { "kind": "p", "text": "Winkel [[A]] ist der spitze Winkel, der von Kathete [[b]] und Hypotenuse [[c]] gebildet wird. Er ist der eingeschlossene Winkel zwischen den beiden Seiteneingaben des Rechners, also [[\\angle A=\\text{angle between }b\\text{ and }c]]. Diese Zuordnung ist fest: Wo immer die Formel [[A]] erwähnt, meint sie die Ecke, in der die bekannte Kathete auf die Hypotenuse trifft, nicht die Ecke am fernen Ende von Kathete [[b]]." },
          { "kind": "h3", "text": "Gegenkathete und Ankathete bezogen auf Winkel A" },
          { "kind": "p", "text": "Stellen Sie sich an Winkel [[A]] und blicken Sie durch das Dreieck. Die Seite, der Sie gegenüberstehen, ohne sie zu berühren, ist die Gegenkathete; die Seite, die den Winkel neben der Hypotenuse bildet, ist die Ankathete. Diese Bezeichnungen folgen dem Bezugswinkel, daher vertauscht der Wechsel des Bezugs von [[A]] zu [[B]], welche Kathete welche ist." },
          { "kind": "h3", "text": "Den eingeschlossenen Winkel verstehen" },
          { "kind": "p", "text": "Ein eingeschlossener Winkel ist der Winkel, der von zwei gewählten Seiten gebildet wird. Die Flächenformel multipliziert [[b]] und [[c]], daher braucht sie den Winkel, der zwischen ihnen eingeschlossen ist: Winkel [[A]]. Die korrekte Zuordnung für diesen Rechner ist [[b,\\;c,\\;A]]. Die Verwendung eines anderen Winkels mit denselben zwei Seiten bricht die Zuordnung, die die Formel voraussetzt; verwechseln Sie also nicht Winkel [[A]] mit Winkel [[B]]." }
        ],
        "table": {
          "headers": ["Seite", "Beziehung zu Winkel A"],
          "rows": [
            ["a", "Gegenkathete"],
            ["b", "Ankathete"],
            ["c", "Hypotenuse"]
          ]
        },
        "imgAlt": "Rechtwinkliges Dreieck ABC: Kathete b und Hypotenuse c hervorgehoben, eingeschlossener Winkel A, fehlende Kathete a beschriftet",
        "figcaption": "Dreieck ABC: Die hervorgehobene anliegende Kathete b und die Hypotenuse c bilden den eingeschlossenen Winkel A; Seite a ist die fehlende Gegenkathete."
      },
      "sec-sine": {
        "h2": "Die Sinusfunktion in Berechnungen am rechtwinkligen Dreieck verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Sinus ist ein Verhältnis, keine Länge. Für einen spitzen Winkel gilt [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] In diesem Dreieck wird daraus [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Das Verhältnis vergleicht die dem Winkel gegenüberliegende Seite mit der längsten Seite, ist also eine reine Zahl ohne Einheit. Für einen spitzen Winkel liegt sein Wert immer zwischen 0 und 1, und genau das lässt eine Seite für eine andere einspringen." },
          { "kind": "h3", "text": "Wie der Sinus hilft, die fehlende Kathete zu finden" },
          { "kind": "p", "text": "Beginnen Sie mit [[\\sin(A)=\\frac{a}{c}]]. Multiplizieren Sie beide Seiten mit [[c]]: [[[\\boxed{a=c\\sin(A)}]]] Die Hypotenuse skaliert das Verhältnis wieder zu einer Länge hoch, und diese Länge ist die fehlende Kathete. Der Rechner fragt nie nach [[a]], weil diese eine Umstellung es aus [[c]] und [[A]] zurückgewinnt. Jeder spätere Schritt der Flächenformel ruht auf dieser Substitution." },
          { "kind": "h3", "text": "Zahlenbeispiel" },
          { "kind": "p", "text": "Gegeben [[c=5]] und [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Die fehlende Kathete ist 3 Einheiten lang, was das bekannte 3-4-5-Dreieck vervollständigt. Eine Multiplikation ersetzte eine separate Messung." },
          { "kind": "h3", "text": "Wie sich der Sinus von Kosinus und Tangens unterscheidet" },
          { "kind": "p", "text": "Der Kosinus verwendet die Ankathete: [[\\cos(A)=\\frac{b}{c}]]. Der Tangens verwendet die beiden Katheten: [[\\tan(A)=\\frac{a}{b}]]. Jedes Verhältnis beantwortet eine andere Frage. Der Sinus ist das, was dieser Rechner braucht, weil die Unbekannte die Gegenkathete [[a]] und die bekannte Seite die Hypotenuse [[c]] ist. Wenn sich die bekannten Größen ändern, ändert sich das nützliche Verhältnis mit ihnen, aber nichts anderes in dieser Anleitung verlässt die Sinusfamilie." }
        ]
      },
      "sec-formula": {
        "h2": "Warum verwendet die Flächenformel für rechtwinklige Dreiecke den Sinus?",
        "blocks": [
          { "kind": "p", "text": "Beginnen Sie mit der Standardregel: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Für dieses Dreieck ist die natürliche Grundlinie Kathete [[b]] und die senkrechte Höhe Kathete [[a]], da die Katheten im 90-Grad-Winkel aufeinandertreffen. Das ergibt [[K=\\frac{ab}{2}]]. Der Rechner fragt nicht nach [[a]], daher muss die Formel es wieder aufbauen. Aus dem Sinusverhältnis gilt [[a=c\\sin(A)]]. Einsetzen: [[K=\\frac{b(c\\sin(A))}{2}]], also [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Die Division durch zwei überlebt aus der Grundlinie-Höhe-Regel; der Sinusfaktor ist die fehlende Kathete in Verkleidung." },
          { "kind": "h3", "text": "Warum wird die Formel durch zwei geteilt?" },
          { "kind": "p", "text": "Ein Dreieck mit gegebener Grundlinie und senkrechter Höhe füllt genau die Hälfte des Parallelogramms, das auf derselben Grundlinie und Höhe errichtet ist. Die Verdopplung eines beliebigen Dreiecks entlang einer Seite vervollständigt dieses Parallelogramm, daher besitzt das Dreieck die Hälfte seiner Fläche. Die Division durch zwei ist Geometrie, keine Konvention, und sie gilt, egal welche Formel Grundlinie und Höhe liefert." },
          { "kind": "h3", "text": "Wie ersetzt der Sinus die fehlende Höhe?" },
          { "kind": "p", "text": "Die senkrechte Höhe in [[K=\\frac{ab}{2}]] ist Kathete [[a]]. Da [[\\sin(A)=\\frac{a}{c}]] gilt, dehnt die Multiplikation der Hypotenuse mit dem Sinus das dimensionslose Verhältnis wieder zur Länge [[a]]. Der Benutzer misst [[c]] und [[A]] statt [[a]], und das Produkt [[c\\sin(A)]] führt die Umwandlung lautlos innerhalb der Formel durch." },
          { "kind": "h3", "text": "Warum wird die Hypotenuse mit der anliegenden Kathete multipliziert?" },
          { "kind": "p", "text": "Die allgemeine Regel für jedes Dreieck lautet, dass zwei Seiten und ihr eingeschlossener Winkel die Fläche bestimmen. Hier sind die beiden bekannten Seiten [[b]] und [[c]], und ihr eingeschlossener Winkel ist [[A]]. Die Formel multipliziert genau diese beiden Seiten, skaliert dann mit [[\\sin(A)]] und halbiert. Jede andere Seitenpaarung würde einen anderen eingeschlossenen Winkel verlangen." },
          { "kind": "h3", "text": "Funktioniert diese Formel auch für andere Dreiecke?" },
          { "kind": "p", "text": "Ja, in ihrer allgemeinen Form: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], wobei [[x]] und [[y]] zwei beliebige Seiten sind und [[\\theta]] der Winkel zwischen ihnen. Die rechtwinklige Version ist diese Regel mit [[x=b]], [[y=c]] und [[\\theta=A]]. Der Rechner fügt eine Einschränkung hinzu: Die drei Eingaben müssen auch die rechtwinkligen Beziehungen erfüllen, etwa [[b=c\\cos(A)]]. Die allgemeine Formel berechnet eine Fläche für jedes Paar aus eingeschlossenem Winkel; dieser Rechner interpretiert das Ergebnis als rechtwinkliges Dreieck." }
        ],
        "imgAlt": "3-4-5-Dreieck: sin A gleich 3 durch 5 stellt Kathete a gleich 3 wieder her, Fläche 6 nach zwei Formeln",
        "figcaption": "Vom Sinus zur Fläche: sin A = 3/5 ergibt a = 3, also stimmt K = bc sin A / 2 = 6 mit K = ab/2 überein."
      },
      "sec-howto": {
        "h2": "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke aus Kathete und Winkel",
        "blocks": [
          { "kind": "p", "text": "Der Rechner benötigt genau drei Eingaben, in Reihenfolge eingegeben. Die Schritte unten folgen dem Bildschirmaufbau, von bekannten Messungen bis zum geprüften Ergebnis." }
        ],
        "steps": [
          "<strong>Bestimmen Sie die anliegende Kathete b.</strong> Die Kathete, die zusammen mit der Hypotenuse den Winkel A bildet.",
          "<strong>Bestimmen Sie die Hypotenuse c.</strong> Die längste Seite, gegenüber dem rechten Winkel.",
          "<strong>Bestimmen Sie den eingeschlossenen spitzen Winkel A.</strong> Der Winkel zwischen Kathete b und Hypotenuse c.",
          "<strong>Verwenden Sie passende Einheiten für beide Seiten.</strong> Meter mit Metern, Fuß mit Fuß, niemals gemischt.",
          "<strong>Geben Sie Kathete b in das erste Eingabefeld ein.</strong> Dies ist die an Winkel A anliegende Kathete.",
          "<strong>Geben Sie Hypotenuse c in das zweite Eingabefeld ein.</strong> Sie muss länger als Kathete b sein.",
          "<strong>Geben Sie Winkel A in Grad ein.</strong> Der Rechner erwartet Grad, nicht Radiant.",
          "<strong>Prüfen Sie, dass der Winkel zwischen 0 und 90 Grad liegt.</strong> Die Endpunkte beschreiben kein Dreieck.",
          "<strong>Vergewissern Sie sich, dass die Hypotenuse länger als die Kathete ist.</strong> Ist c nicht größer als b, ist eine Bezeichnung falsch.",
          "<strong>Prüfen Sie, dass die drei Werte ein rechtwinkliges Dreieck beschreiben.</strong> Bestätigen Sie, dass b gleich c cos(A) ist, zumindest näherungsweise.",
          "<strong>Klicken Sie auf Fläche berechnen.</strong> Das Ergebnis erscheint mit der gezeigten Substitution.",
          "<strong>Prüfen Sie das Ergebnis.</strong> Lesen Sie den Flächeninhalt und vergewissern Sie sich, dass er plausibel aussieht.",
          "<strong>Lesen Sie die Lösungsschritte.</strong> Sie zeigen die Formel, den Sinuswert und die Rechnung.",
          "<strong>Prüfen Sie, dass das Endergebnis Flächeneinheiten verwendet.</strong> Längeneinheiten zum Quadrat, passend zu den Eingaben.",
          "<strong>Verwenden Sie Zurücksetzen, bevor Sie eine weitere Aufgabe eingeben.</strong> Es löscht alle drei Felder für einen sauberen Start."
        ],
        "closingParagraphs": [
          "Die Seite bietet eine Rechnerkonfiguration: [[b]], [[c]] und [[A]]. Es gibt keinen zweiten Modus; jeder Flächeninhalt auf dieser Seite stammt aus der obigen Sinusformel."
        ]
      },
      "sec-consistency": {
        "h2": "So prüfen Sie, ob Kathete, Hypotenuse und Winkel ein gültiges rechtwinkliges Dreieck bilden",
        "blocks": [
          { "kind": "p", "text": "Die drei Eingaben sind nicht unabhängig. In einem rechtwinkligen Dreieck gilt [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], also [[[\\boxed{b=c\\cos(A)}]]] Legen Sie zwei der drei Werte fest, und der dritte ist bereits entschieden. Die Eingabe von drei Zahlen, die nicht zusammenpassen, beschreibt nicht das Dreieck, das die Formel voraussetzt." },
          { "kind": "h3", "text": "Den Winkel aus den beiden Seitenlängen prüfen" },
          { "kind": "p", "text": "Wenn [[b]] und [[c]] bekannt sind, ist der Winkel erzwungen: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Beispiel: [[b=4]], [[c=5]] ergibt [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Meldet ein Winkelmesser oder eine frühere Berechnung einen anderen Winkel für diese Seiten, ist eine der Zahlen falsch. Die Seiten entscheiden; der Winkel folgt." },
          { "kind": "h3", "text": "Die Seitenlängen aus dem Winkel prüfen" },
          { "kind": "p", "text": "Die Prüfung läuft auch andersherum. Gegeben [[c=10]] und [[A=60^\\circ]], muss die Ankathete [[b=10\\cos(60^\\circ)]] sein, [[[\\boxed{b=5}]]] Die Eingabe von [[b=8]] bei derselben Hypotenuse und demselben Winkel würde nicht dasselbe rechtwinklige Dreieck beschreiben, weil [[10\\cos(60^\\circ)]] gleich 5 ist, nicht 8. Jeder Winkel lässt bei fester Hypotenuse genau eine Ankathetenlänge zu." },
          { "kind": "h3", "text": "Was passiert, wenn die Eingaben inkonsistent sind?" },
          { "kind": "p", "text": "Die allgemeine Formel für zwei Seiten und eingeschlossenen Winkel gibt auch für inkonsistente Eingaben eine Zahl zurück, weil sie multipliziert, was sie erhält. Aber wenn [[b\\neq c\\cos(A)]] gilt, beschreiben die Messungen kein rechtwinkliges Dreieck mit [[c]] als Hypotenuse und [[b]] als Ankathete. Eine numerische Antwort ist kein Beweis gültiger Geometrie; die Konsistenzprüfung ist es." },
          { "kind": "h3", "text": "Grundlegende Eingabebedingungen" },
          { "kind": "p", "text": "Gültige Eingaben erfüllen [[c>b>0]], [[0^\\circ<A<90^\\circ]] und [[b=c\\cos(A)]]. Die erste hält die Hypotenuse am längsten; die zweite hält den Winkel spitz; die dritte bindet die drei Werte zu einem Dreieck. Prüfen Sie alle drei, bevor Sie dem Flächeninhalt vertrauen." }
        ],
        "imgAlt": "Drei Felder: gültig 4, 5, 36.87 Grad; gültig 5, 10, 60 Grad; ungültig 8, 10, 60 Grad",
        "figcaption": "Gültige Eingaben erfüllen b = c cos A; das dritte Feld zeigt 10 cos 60° = 5, ungleich 8."
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zum Flächeninhalt rechtwinkliger Dreiecke aus Kathete und Winkel",
        "blocks": [
          { "kind": "p", "text": "Vier klassische rechtwinklige Dreiecke zeigen die Methode in wachsenden Größen. Jedes Beispiel setzt in die Sinusformel ein und prüft das Ergebnis dann mit der Zwei-Katheten-Formel." },
          { "kind": "h3", "text": "Beispiel 1: 3-4-5-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Schritt 1: [[K=\\frac{bc\\sin(A)}{2}]]. Schritt 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Schritt 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Schritt 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Prüfung: [[a=5\\times0.6=3]], und [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Beispiel 2: 5-12-13-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], mit [[\\sin(A)=\\frac{5}{13}]]. Einsetzen: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. Die 13 kürzt sich: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Prüfung: [[a=13\\times(5/13)=5]], und [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Beispiel 3: 8-15-17-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], mit [[\\sin(A)=\\frac{8}{17}]]. Dann [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Prüfung: [[a=8]], und [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Beispiel 4: 7-24-25-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], mit [[\\sin(A)=\\frac{7}{25}]]. Dann [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Prüfung: [[a=7]], und [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Vergleich der Grundlagenbeispiele" }
        ],
        "table": {
          "headers": ["Dreieckstyp", "Bekannte Kathete b", "Hypotenuse c", "Winkel A", "Berechneter Flächeninhalt"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Praktische Anwendungen des Flächeninhalts rechtwinkliger Dreiecke aus Kathete und Winkel",
        "blocks": [
          { "kind": "p", "text": "Zwölf gelöste Situationen tragen die Formel von der Seite in die Werkstatt, auf die Baustelle und ins Atelier. Jede benennt ein rechtwinkliges Dreieckspanel, einen Abschnitt, ein Profil oder ein vereinfachtes Modell, rechnet die drei Rechnereingaben durch die Formel und nennt die Annahme hinter den Zahlen. Wo das reale Objekt gekrümmt oder unregelmäßig ist, deckt die Berechnung nur das modellierte Dreieck ab." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiges Glasfenster" },
          { "kind": "p", "text": "Ein rechtwinkliges dreieckiges Glasfenster hat [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Rechnereingaben: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Einsetzen: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Dies ist die ebene dreieckige Glasfläche vor Abzug der Rahmenzugaben." },
          { "kind": "h3", "text": "Beispiel 2: Dachstützpanel" },
          { "kind": "p", "text": "Ein rechtwinkliger dreieckiger Dachstützabschnitt hat [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Eingaben: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Dann [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Das Ergebnis beschreibt den ebenen dreieckigen Stützabschnitt, nicht das ganze Dach." },
          { "kind": "h3", "text": "Beispiel 3: Dreieckiges Rampenseitenprofil" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinkliges dreieckiges Rampenprofil hat [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Eingaben: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Dann [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Dies ist das dreieckige Seitenprofil, nicht die geneigte Lauffläche." },
          { "kind": "h3", "text": "Beispiel 4: Stahlknotenblech" },
          { "kind": "p", "text": "Eine dreieckige Stahlstützplatte hat [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Eingaben: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Dann [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] Die Fläche allein belegt keine statische Festigkeit oder Tragfähigkeit." },
          { "kind": "h3", "text": "Beispiel 5: Dreieckiger Gartenabschnitt" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinkliger dreieckiger Gartenabschnitt hat [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Eingaben: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Dann [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Das hilft, die Fläche des dreieckigen Abschnitts für die Bepflanzung zu schätzen." },
          { "kind": "h3", "text": "Beispiel 6: Dreieckiges Segelpanel" },
          { "kind": "p", "text": "Ein rechtwinkliger dreieckiger Segelabschnitt hat [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Eingaben: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Dann [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Nähte und Materialzugaben sind in dieser ebenen Panelzahl nicht enthalten." },
          { "kind": "h3", "text": "Beispiel 7: Sperrholz-Zuschnittschablone" },
          { "kind": "p", "text": "Eine rechtwinklige dreieckige Sperrholzschablone hat [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Eingaben: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Dann [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Die Fläche hilft, den ebenen Materialbedarf vor dem Verschnitt zu schätzen." },
          { "kind": "h3", "text": "Beispiel 8: Dreieckiges Straßenschild" },
          { "kind": "p", "text": "Ein rechtwinkliges dreieckiges Schildpanel hat [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Eingaben: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Dann [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Das schätzt die ebene Schildfläche." },
          { "kind": "h3", "text": "Beispiel 9: Vermessener Geländeabschnitt" },
          { "kind": "p", "text": "Ein rechtwinkliger dreieckiger vermessener Abschnitt hat [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Eingaben: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Dann [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Das Ergebnis gilt für den vereinfachten rechtwinklig-dreieckigen Geländeabschnitt." },
          { "kind": "h3", "text": "Beispiel 10: Dreieckige Markisenstütze" },
          { "kind": "p", "text": "Ein rechtwinkliger dreieckiger Markisenstützabschnitt hat [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Eingaben: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Dann [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Dies ist der ebene dreieckige Abschnitt, nicht das gesamte Tuch einer unregelmäßigen Markise." },
          { "kind": "h3", "text": "Beispiel 11: Industriegelände-Querschnitt" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinkliger dreieckiger Industriegeländeabschnitt hat [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Eingaben: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Dann [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Ein reales unregelmäßiges Gelände muss eventuell in mehrere Formen zerlegt werden." },
          { "kind": "h3", "text": "Beispiel 12: Lagerhallen-Dachendabschnitt" },
          { "kind": "p", "text": "Ein großer rechtwinkliger dreieckiger Lagerhallen-Dachendabschnitt hat [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Eingaben: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Dann [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Das Ergebnis schätzt den ebenen dreieckigen Endabschnitt." },
          { "kind": "h3", "text": "Vergleich der Praxisbeispiele" }
        ],
        "table": {
          "headers": ["Praktische Anwendung", "Kathete a", "Bekannte Kathete b", "Hypotenuse c", "Winkel A", "Berechneter Flächeninhalt", "Maßeinheit"],
          "rows": [
            ["Glasfenster", "3", "4", "5", "36.87°", "6", "m²"],
            ["Dachstütze", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Rampenprofil", "6", "8", "10", "36.87°", "24", "m²"],
            ["Knotenblech", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Gartenabschnitt", "7", "24", "25", "16.26°", "84", "m²"],
            ["Segelpanel", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Sperrholzschablone", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Straßenschild", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Vermessungsabschnitt", "9", "40", "41", "12.68°", "180", "m²"],
            ["Markisenstütze", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Industrieabschnitt", "11", "60", "61", "10.39°", "330", "m²"],
            ["Lagerhallen-Dachende", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Warum liefert die sinusbasierte Formel denselben Flächeninhalt wie die Kathetenformel?",
        "blocks": [
          { "kind": "p", "text": "Beginnen Sie mit [[K=\\frac{bc\\sin(A)}{2}]] und erinnern Sie sich an [[\\sin(A)=\\frac{a}{c}]]. Einsetzen: [[K=\\frac{bc(a/c)}{2}]]. Das [[c]] kürzt sich, übrig bleibt [[[\\boxed{K=\\frac{ab}{2}}]]] Die Sinusformel erfindet keinen neuen Flächeninhalt; sie berechnet denselben Flächeninhalt aus anderen bekannten Größen, wobei die fehlende Kathete durch das Sinusverhältnis eingeschmuggelt wird." },
          { "kind": "h3", "text": "Wann ist die Sinusformel nützlicher?" },
          { "kind": "p", "text": "Verwenden Sie sie, wenn eine Kathete gemessen ist, die Hypotenuse bekannt ist und der eingeschlossene Winkel vorliegt, während die dritte Seite nie direkt gemessen wurde. Feldmessungen, maßstäbliche Zeichnungen und Vermessungsdaten kommen oft in genau dieser Kombination. Die Formel verwandelt diese drei Zahlen in einer Zeile in einen Flächeninhalt, ohne Umweg über die fehlende Kathete." },
          { "kind": "h3", "text": "Wann ist die Kathetenformel einfacher?" },
          { "kind": "p", "text": "Wenn beide senkrechten Katheten bereits bekannt sind, ist [[K=\\frac{ab}{2}]] kürzer: kein Sinus, kein Winkel, eine Multiplikation und eine Halbierung. Greifen Sie nur dann zur Sinusversion, wenn eine Kathete fehlt und der Winkel sie liefern kann." },
          { "kind": "h3", "text": "Numerischer Vergleich" },
          { "kind": "p", "text": "Am 3-4-5-Dreieck liefert die Sinusmethode [[K=\\frac{4\\times5\\times0.6}{2}=6]], und die Kathetenmethode liefert [[K=\\frac{3\\times4}{2}=6]]. Beide Wege durchlaufen dieselbe Geometrie, müssen also übereinstimmen. Wenn sie es nicht tun, sind die Eingaben oder die Rechnung schuld, niemals die Formeln." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Wie beeinflusst der eingeschlossene Winkel den Flächeninhalt des rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "p", "text": "Bei fester Hypotenuse kann sich der Winkel nicht frei ändern: Die rechtwinkligen Beziehungen binden [[b]] und [[A]] aneinander. Diese Einschränkung ehrlich zu behandeln zeigt genau, wie der Flächeninhalt steigt und fällt, wenn sich [[A]] zwischen 0 und 90 Grad bewegt." },
          { "kind": "h3", "text": "Was passiert, wenn Winkel A zunimmt?" },
          { "kind": "p", "text": "Bei festem [[c]] gilt [[b=c\\cos(A)]] und [[a=c\\sin(A)]], also [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Die Doppelwinkelidentität ergibt [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] Der Flächeninhalt wächst, wenn sich [[A]] von unten 45 Grad nähert, erreicht bei 45 Grad seinen Höhepunkt und fällt dann Richtung 90 Grad. Komplementäre Winkel wie 30° und 60° geben denselben Flächeninhalt, weil [[\\sin(2A)]] symmetrisch um 45 Grad ist." },
          { "kind": "h3", "text": "Maximaler Flächeninhalt bei fester Hypotenuse" },
          { "kind": "p", "text": "Der Gipfel liegt bei [[A=45^\\circ]], wo [[\\sin(2A)=1]] gilt: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Dort ist [[a=b=\\frac{c}{\\sqrt{2}}]], daher ist das maximierende Dreieck gleichschenklig. Eine feste Hypotenuse kann nicht mehr rechtwinklige Dreiecksfläche einschließen als ein Viertel ihres Quadrats, und nur die gleichschenklige Form erreicht es." },
          { "kind": "h3", "text": "Zahlenbeispiel" },
          { "kind": "p", "text": "Gegeben [[c=10]], ist die Obergrenze [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] Bei [[A=45^\\circ]] betragen die Katheten jeweils [[10/\\sqrt{2}\\approx7.07]], und [[\\frac{7.07\\times7.07}{2}\\approx25]]. Beachten Sie, dass 90° keine zulässige spitze Eingabe ist: Sie würde das Dreieck zu einer Linie zusammenfallen lassen." }
        ]
      },
      "sec-alternative": {
        "h2": "Kann man den Flächeninhalt eines rechtwinkligen Dreiecks mit einer Kathete und ihrem Winkel berechnen?",
        "blocks": [
          { "kind": "p", "text": "Ja, mit dem Tangens statt dem Sinus. Sind Kathete [[b]] und Winkel [[A]] bekannt, folgt die Gegenkathete aus [[a=b\\tan(A)]]. Setzen Sie das in [[K=\\frac{ab}{2}]] ein: [[K=\\frac{b(b\\tan(A))}{2}]], also [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Von der anderen Ecke aus ergibt [[b=a\\tan(B)]] die Formel [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Dies sind echte alternative Methoden, nützlich, wenn die Hypotenuse unbekannt ist, aber eine Kathete und ihr Winkel vorliegen. Es sind mathematische Alternativen, keine zusätzlichen Modi im obigen Rechner, der nur mit [[b]], [[c]] und [[A]] arbeitet." }
        ]
      },
      "sec-units": {
        "h2": "Winkeleinheiten und Messungen in Flächenberechnungen verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Flächeninhalt erbt seine Einheit von den beiden Längen, die zu seiner Bildung multipliziert werden, während der Winkel überhaupt keine Einheit beisteuert. Die drei Eingaben in kompatiblen Einheiten zu halten, macht die Antwort ehrlich." },
          { "kind": "h3", "text": "Grad gegen Radiant" },
          { "kind": "p", "text": "Der Rechner erwartet Grad. Rechnen Sie mit [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] um; zum Beispiel [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Ein im Radiantmodus eingegebener Winkel in einem Gradfeld ändert den Sinuswert lautlos: [[\\sin(30^\\circ)=0.5]], aber [[\\sin(30\\text{ radians})\\approx-0.99]], was den Flächeninhalt ruinieren würde. Rechnen Sie zuerst um, dann geben Sie ein." },
          { "kind": "h3", "text": "Warum der Sinus keine Einheit hat" },
          { "kind": "p", "text": "Der Sinus ist ein Verhältnis zweier Längen, daher kürzen sich die Einheiten: Gegenkathete durch Hypotenuse ist eine reine Zahl. Die Quadrateinheiten in der Antwort stammen vollständig aus der Multiplikation von [[b]] mit [[c]]. Darum ist die Einheitenbuchhaltung der Formel einfach: Passen Sie die beiden Längeneinheiten an, und die Flächeneinheit folgt." },
          { "kind": "h3", "text": "Gängige Maßeinheiten" },
          { "kind": "p", "text": "Meter ergeben Quadratmeter, Zentimeter ergeben Quadratzentimeter, Fuß ergeben Quadratfuß, Zoll ergeben Quadratzoll: [[\\text{m}\\times\\text{m}=\\text{m}^2]], und dasselbe Muster gilt für jede Längeneinheit. Gemischte Einheiten wie Zentimeter mit Metern müssen vor Anwendung der Formel in eine Einheit umgerechnet werden, sonst hat die Zahl keine saubere Bedeutung." },
          { "kind": "h3", "text": "Warum frühes Runden das Ergebnis beeinflussen kann" },
          { "kind": "p", "text": "Behalten Sie die volle Genauigkeit durch die Zwischenschritte und runden Sie erst die endgültige Antwort. Der exakte Winkel hinter 36.87° ist 36.869897°, dessen Sinus exakt 0.6 ist; das vorherige Runden des Winkels verschiebt den Sinus um ein Haar, und dieses Haar multipliziert sich durch [[b]] und [[c]] in den Flächeninhalt. Klein bei einem Dreieck, spürbar über ein ganzes Projekt." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Flächenberechnung rechtwinkliger Dreiecke aus Kathete und Winkel",
        "blocks": [
          { "kind": "p", "text": "Fast jede falsche Antwort in diesem Thema geht auf eine falsch bezeichnete Eingabe zurück, nicht auf schlechte Rechnung. Die sechzehn Fehler unten sind die, die immer wieder auftauchen, jeder mit Ursache und Lösung." },
          { "kind": "h3", "text": "1. Die Hypotenuse mit einer senkrechten Kathete verwechseln" },
          { "kind": "p", "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel und die längste Seite; eine Kathete trifft auf den rechten Winkel. Ihr Vertauschen speist die falsche Länge in [[c]] ein. Lösung: Finden Sie zuerst den rechten Winkel und nehmen Sie dann die Seite ihm gegenüber." },
          { "kind": "h3", "text": "2. Winkel A mit der falschen Kathete paaren" },
          { "kind": "p", "text": "Winkel [[A]] liegt zwischen Kathete [[b]] und Hypotenuse [[c]]. Ihn mit Kathete [[a]] zu paaren, verwirrt die Eingeschlossen-Winkel-Beziehung, die die Formel voraussetzt. Lösung: Verfolgen Sie die beiden Seiten, die den eingegebenen Winkel bilden." },
          { "kind": "h3", "text": "3. Gegenkathete und Ankathete verwechseln" },
          { "kind": "p", "text": "Gegenüber bedeutet dem Winkel gegenüber; anliegend bedeutet ihn berührend, neben der Hypotenuse. Die Bezeichnungen kehren sich um, wenn sich der Bezugswinkel ändert. Lösung: Stellen Sie sich an Winkel [[A]] und benennen Sie jede Seite von dort aus." },
          { "kind": "h3", "text": "4. Winkel B statt Winkel A verwenden, ohne die zugehörige Seite zu ändern" },
          { "kind": "p", "text": "Winkel [[B]] paart sich mit den Seiten [[a]] und [[c]], nicht [[b]] und [[c]]. Die Eingabe von [[B]] bei Beibehaltung von [[b]] und [[c]] berechnet eine andere Größe. Lösung: Halten Sie jeden Winkel bei seiner eigenen Seitenpaarung, oder rechnen Sie [[B]] zuerst in [[A]] um." },
          { "kind": "h3", "text": "5. Radiant verwenden, obwohl der Rechner Grad erwartet" },
          { "kind": "p", "text": "Die Eingabe von 0.6435 (Radiant), wo 36.87 (Grad) hingehört, ändert [[\\sin(A)]] vollständig. Lösung: Prüfen Sie die Einheit des Rechners, rechnen Sie bei Bedarf mit [[\\times\\frac{180}{\\pi}]] um, dann geben Sie ein." },
          { "kind": "h3", "text": "6. Das Teilen durch zwei vergessen" },
          { "kind": "p", "text": "Die Multiplikation [[b\\times c\\times\\sin(A)]] ergibt die Fläche des umschließenden Parallelogramms, das Doppelte des Dreiecks. Lösung: Halbieren Sie das Produkt; das /2 ist Teil der Formel, nicht optional." },
          { "kind": "h3", "text": "7. Die Sinusfunktion vergessen" },
          { "kind": "p", "text": "Allein [[\\frac{bc}{2}]] zu berechnen behandelt [[\\sin(A)]] als 1, was nur bei 90° gilt, einer unmöglichen spitzen Eingabe. Lösung: Schließen Sie [[\\sin(A)]] ein; es trägt den Anteil der fehlenden Kathete." },
          { "kind": "h3", "text": "8. Eine Kathete eingeben, die länger als die Hypotenuse ist" },
          { "kind": "p", "text": "Keine Kathete kann die Hypotenuse übertreffen, daher bedeutet [[c\\leq b]], dass eine Bezeichnung falsch ist. Lösung: Bestimmen Sie die Seiten neu; die längste Messung ist [[c]]." },
          { "kind": "h3", "text": "9. Einen Winkel von 0 Grad eingeben" },
          { "kind": "p", "text": "Bei 0° ist [[\\sin(A)=0]] und das Dreieck kollabiert zu einer Linie mit Flächeninhalt null. Lösung: Verwenden Sie einen echten spitzen Winkel, strikt zwischen 0° und 90°." },
          { "kind": "h3", "text": "10. Einen Winkel von 90 Grad als spitzen Winkel eingeben" },
          { "kind": "p", "text": "90° ist der rechte Winkel [[C]], kein spitzer Winkel; [[\\sin(90^\\circ)=1]] verwandelt die Formel in [[\\frac{bc}{2}]], was nicht der Flächeninhalt dieses Dreiecks ist. Lösung: Geben Sie den spitzen Winkel zwischen [[b]] und [[c]] ein." },
          { "kind": "h3", "text": "11. Verschiedene Längeneinheiten mischen" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] mit [[c=5\\text{ m}]] multipliziert inkompatible Maßstäbe. Lösung: Rechnen Sie beide vor der Berechnung in eine Einheit um (400 cm = 4 m)." },
          { "kind": "h3", "text": "12. Den Flächeninhalt in linearen Einheiten angeben" },
          { "kind": "p", "text": "Ein Flächeninhalt von 6 m² ist nicht 6 m. Lösung: Schreiben Sie die Quadrateinheit bei der Zahl, jedes Mal." },
          { "kind": "h3", "text": "13. Den Winkel zu früh runden" },
          { "kind": "p", "text": "Das Runden von 36.869897° auf 36.87° vor dem Sinus verschiebt das Ergebnis leicht; das Runden auf 37° verschiebt es stärker. Lösung: Behalten Sie die volle Genauigkeit bis zur endgültigen Antwort." },
          { "kind": "h3", "text": "14. Annehmen, dass die drei Eingaben unabhängig gewählt werden können" },
          { "kind": "p", "text": "[[b]], [[c]] und [[A]] sind durch [[b=c\\cos(A)]] verknüpft; alle drei frei zu wählen überbestimmt das Dreieck. Lösung: Leiten Sie den dritten Wert aus den beiden anderen ab, statt ihn zu erfinden." },
          { "kind": "h3", "text": "15. Einen Winkel verwenden, der nicht zu den eingegebenen Seitenlängen passt" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] besteht die Prüfung nicht, da [[10\\cos(60^\\circ)=5\\neq8]]. Die Formel gibt trotzdem eine Zahl zurück, aber es ist nicht der Flächeninhalt dieses rechtwinkligen Dreiecks. Lösung: Führen Sie die Prüfung [[b=c\\cos(A)]] durch." },
          { "kind": "h3", "text": "16. Annehmen, dass ein numerisches Rechnerergebnis immer ein gültiges rechtwinkliges Dreieck darstellt" },
          { "kind": "p", "text": "Die Arithmetik gelingt mit allen eingetippten Zahlen; die Geometrie nicht. Lösung: Prüfen Sie mit den Konsistenzprüfungen und einer unabhängigen Formel, bevor Sie der Antwort vertrauen." },
          { "kind": "h3", "text": "Falsch gegen richtig: Ein konkretes Beispiel" },
          { "kind": "p", "text": "Verwenden Sie [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Richtig: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Bei falscher Eingabe von Winkel [[B=53.13^\\circ]] mit denselben Seiten: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Winkel [[B]] ist nicht der eingeschlossene Winkel zwischen [[b]] und [[c]]; seine eigene Seitenpaarung ist [[a]] und [[c]]. Der Fehler ist in der Rechnung unsichtbar und in der Geometrie offensichtlich." }
        ]
      },
      "sec-verify": {
        "h2": "So prüfen Sie, ob Ihr Flächeninhalt des rechtwinkligen Dreiecks korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Sieben unabhängige Prüfungen, alle am 3-4-5-Dreieck demonstriert ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Die Übereinstimmung verschiedener Wege ist der stärkste Beweis, dass eine Antwort richtig ist." },
          { "kind": "h3", "text": "Methode 1: Die Hauptformel prüfen" },
          { "kind": "p", "text": "Berechnen Sie [[K=\\frac{bc\\sin(A)}{2}]] neu: [[\\frac{4\\times5\\times0.6}{2}=6]]. Ein zweiter Durchgang fängt Tippfehler und falsch eingegebene Winkel." },
          { "kind": "h3", "text": "Methode 2: Die Kosinusbeziehung prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Eine Abweichung bedeutet, dass Winkel und Seiten zu verschiedenen Dreiecken gehören." },
          { "kind": "h3", "text": "Methode 3: Die fehlende Kathete berechnen" },
          { "kind": "p", "text": "Bestätigen Sie [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Das prüft den Sinuswert, der die Flächenformel speist." },
          { "kind": "h3", "text": "Methode 4: Den Satz des Pythagoras prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[a^2+b^2=c^2]]: [[9+16=25]]. Ein Scheitern hier bedeutet, dass die Seitenbestimmung falsch ist." },
          { "kind": "h3", "text": "Methode 5: Mit den zwei Katheten prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Zwei Methoden, ein Dreieck, eine Antwort." },
          { "kind": "h3", "text": "Methode 6: Die komplementären Winkel prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Das fängt einen Winkel, der an der falschen Ecke gemessen wurde." },
          { "kind": "h3", "text": "Methode 7: Den maximalen Flächeninhalt prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Ein Flächeninhalt über der Obergrenze ist für die gegebene Hypotenuse unmöglich." }
        ]
      },
      "sec-applications": {
        "h2": "Der Flächeninhalt rechtwinkliger Dreiecke aus Kathete und Winkel in der Praxis",
        "blocks": [
          { "kind": "p", "text": "Dieselben drei Eingaben tauchen an Orten auf, die niemals Trigonometrie erwähnen. Ein Glaser misst Kathete und Diagonale eines Fensters und liest den Winkel am Rahmen ab; ein Dachdecker kennt die Hypotenuse der Stütze aus der Sparrenlänge und den Winkel aus der Dachneigung. In jedem Fall ist die fehlende senkrechte Seite diejenige, die mit dem Bandmaß schwer zu erreichen ist, während Hypotenuse und Winkel griffbereit sind. Die Sinusformel existiert genau für diese Asymmetrie: Sie wandelt die zugänglichen Messungen in die unzugängliche Höhe und dann in den Flächeninhalt um." },
          { "kind": "p", "text": "Die vier Felder unten zeigen das Muster in verschiedenen Maßstäben. Ein Glasfenster (6 m²) und ein Rampenprofil (24 m²) verwenden 3-4-5- und 6-8-10-Geometrie im Metermaßstab; eine Dachstütze (30 ft²) verwendet das 5-12-13-Dreieck; ein vermessener Abschnitt (84 m²) verwendet 7-24-25. Jedes Feld beschriftet die Ankathete, die Hypotenuse, den eingeschlossenen Winkel und den resultierenden Flächeninhalt, sodass der Weg von der Messung zur Antwort sichtbar bleibt." }
        ],
        "imgAlt": "Vier Felder: Glasfenster 6 m2, Dachpanel 30 ft2, Rampenprofil 24 m2, Vermessungsabschnitt 84 m2",
        "figcaption": "Vier reale Anwendungen: Fenster, Dachstütze, Rampenprofil und vermessener Abschnitt mit ihren Flächeninhalten."
      },
      "sec-faq": {
        "h2": "Häufig gestellte Fragen",
        "blocks": [
          { "kind": "p", "text": "Hier finden Sie Antworten auf die häufigsten Fragen zum Flächeninhalt aus Kathete und Winkel." }
        ]
      },
      "sec-related": {
        "h2": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
        "blocks": [
          { "kind": "p", "text": "Unterschiedliche Messungen erfordern unterschiedliche Rechner." }
        ]
      },
      "sec-conclusion": {
        "h2": "Drei Eingaben tragen den ganzen Flächeninhalt",
        "blocks": [
          { "kind": "p", "text": "Eine Kathete, die Hypotenuse und der Winkel zwischen ihnen erweisen sich als ausreichend. Das Sinusverhältnis baut die fehlende Kathete wieder auf, die Halbierung verwandelt das umschließende Rechteck in das Dreieck, und die Konsistenzbeziehungen lassen jede Eingabe gegen die anderen prüfen. Nichts an der Methode ist näherungsweise, wenn die Eingaben exakt sind." },
          { "kind": "p", "text": "Die Arbeitsgewohnheit ist einfach: Bezeichnen Sie die Seiten von Winkel A aus, halten Sie die Einheiten passend, bestätigen Sie b = c cos(A) und prüfen Sie die Antwort über die Kathetenformel. Mit diesen Gewohnheiten ist K = bc sin(A)/2 so verlässlich wie jede Flächenberechnung in der Geometrie." }
        ]
      }
    }
  }
,
  "it": {
    "faqs": [
      {
        "question": "Qual è la formula dell'area con un cateto e un angolo?",
        "answer": "K = bc sin(A) / 2, dove b è il cateto adiacente all'angolo A, c è l'ipotenusa e A è l'angolo acuto compreso tra essi. Per esempio, b = 4, c = 5 e A = 36.87° danno K = (4 × 5 × 0.6) / 2 = 6 unità quadrate. L'angolo va inserito in gradi, ed entrambi i lati devono usare la stessa unità di lunghezza."
      },
      {
        "question": "Perché la formula usa il seno?",
        "answer": "Il seno recupera il cateto perpendicolare mancante dall'ipotenusa: poiché sin(A) = a/c, moltiplicando si ottiene a = c sin(A). La regola standard dell'area richiede entrambi i cateti, K = ab/2, quindi sostituendo l'espressione del seno per a si ottiene K = bc sin(A)/2. Il seno è il ponte tra l'ipotenusa misurata e l'altezza non misurata."
      },
      {
        "question": "Quale lato è adiacente all'angolo A?",
        "answer": "Il cateto b è adiacente all'angolo A: è uno dei due lati che formano quell'angolo, l'altro è l'ipotenusa c. Il cateto a è opposto all'angolo A, situato di fronte ad esso nel triangolo. Se si cambia il riferimento all'angolo B, le etichette si scambiano: b diventa il lato opposto e a diventa il lato adiacente."
      },
      {
        "question": "Posso calcolare l'area senza conoscere il cateto mancante?",
        "answer": "Sì, è proprio lo scopo di questa calcolatrice. Il seno dell'angolo A codifica il rapporto tra il cateto mancante e l'ipotenusa, quindi c sin(A) ricostruisce il cateto a senza misurarlo. Inserisci b, c e A, e la formula fa il resto. Non serve mai il terzo lato come input separato."
      },
      {
        "question": "Qual è la differenza tra l'angolo A e l'angolo B?",
        "answer": "Sono entrambi angoli acuti del triangolo rettangolo, e A + B = 90°. L'angolo A si trova tra il cateto b e l'ipotenusa c; l'angolo B si trova tra il cateto a e l'ipotenusa c. La formula K = bc sin(A)/2 richiede specificamente l'angolo A. Usare l'angolo B con i lati b e c dà un risultato sbagliato; l'angolo B si abbina ai lati a e c."
      },
      {
        "question": "La calcolatrice usa gradi o radianti?",
        "answer": "Gradi. Inserire un valore in radianti produce un seno completamente diverso e un'area sbagliata. Converti prima i radianti in gradi con gradi = radianti × 180/π; per esempio, π/6 radianti equivalgono a 30°. Verifica sempre l'unità dell'angolo prima di calcolare."
      },
      {
        "question": "Posso usare un angolo qualsiasi con un dato cateto e ipotenusa?",
        "answer": "No. I tre input devono soddisfare b = c cos(A), quindi l'angolo è fissato una volta scelti i lati. Per b = 4 e c = 5, l'angolo A deve essere circa 36.87°. Inserire un angolo diverso descrive un altro triangolo, e il risultato non corrisponderà al triangolo rettangolo voluto."
      },
      {
        "question": "Come verifico se le mie misure formano un triangolo rettangolo valido?",
        "answer": "Verifica tre condizioni: l'ipotenusa supera il cateto (c > b > 0), l'angolo è strettamente tra 0° e 90°, e vale b = c cos(A). Per maggiore sicurezza, controlla a = c sin(A) e il teorema di Pitagora a² + b² = c². Se una verifica fallisce, almeno una misura o un'etichetta è sbagliata."
      },
      {
        "question": "Posso calcolare l'area se conosco entrambi i cateti?",
        "answer": "Sì, e la formula più corta K = ab/2 si applica direttamente, senza angolo né seno. Per cateti 3 e 4, K = 6. La calcolatrice basata sul seno è pensata per il caso in cui manca un cateto; quando entrambi i cateti sono noti, la formula dei cateti è più semplice e dà il risultato identico."
      },
      {
        "question": "Cosa succede se inserisco l'angolo sbagliato?",
        "answer": "La calcolatrice moltiplica ciò che riceve, quindi un angolo sbagliato produce un'area sbagliata senza avvisi. Inserire l'angolo B = 53.13° invece di A = 36.87° con b = 4 e c = 5 dà 8 invece di 6. Verifica sempre che l'angolo inserito sia quello tra il cateto b e l'ipotenusa."
      },
      {
        "question": "Qual è l'area massima possibile per un'ipotenusa fissa?",
        "answer": "K = c²/4, raggiunta quando l'angolo A = 45° e il triangolo è isoscele con cateti c/√2. Per un'ipotenusa di 10, il limite è 25 unità quadrate. Nessun triangolo rettangolo con quell'ipotenusa può racchiudere più area. Se il tuo risultato supera c²/4, gli input sono incoerenti."
      },
      {
        "question": "Qual è la differenza tra la formula basata sul seno e la formula standard base per altezza?",
        "answer": "Non c'è alcuna differenza matematica: sostituendo sin(A) = a/c in K = bc sin(A)/2 si ottiene K = ab/2, la regola standard base per altezza. La versione con il seno è semplicemente la stessa formula riscritta per dati diversi. Usa la forma con il seno quando ipotenusa e angolo sono noti; usa ab/2 quando entrambi i cateti sono noti."
      }
    ],
    "relatedHeading": "Esplora le calcolatrici correlate per triangoli rettangoli",
    "relatedItems": [
      "Calcolatrice dell'area del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo dai cateti",
      "Calcolatrice dell'area del triangolo rettangolo dall'angolo",
      "Calcolatrice del lato del triangolo rettangolo dall'angolo",
      "Calcolatrice del lato del triangolo rettangolo",
      "Calcolatrice dei rapporti trigonometrici del triangolo rettangolo"
    ],
    "relatedIntro": "Misure diverse richiedono calcolatrici diverse.",
    "faqHeading": "Domande frequenti",
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo usando un cateto e un angolo",
      "sec-anatomy": "Comprendere i lati e gli angoli di un triangolo rettangolo",
      "sec-sine": "Comprendere la funzione seno nei calcoli sul triangolo rettangolo",
      "sec-formula": "Perché la formula dell'area del triangolo rettangolo usa il seno?",
      "sec-howto": "Come usare la calcolatrice dell'area del triangolo rettangolo da cateto e angolo",
      "sec-consistency": "Come verificare se cateto, ipotenusa e angolo formano un triangolo rettangolo valido",
      "sec-examples": "Esempi passo passo dell'area del triangolo rettangolo usando un cateto e un angolo",
      "sec-practical": "Applicazioni reali dell'area del triangolo rettangolo da cateto e angolo",
      "sec-compare": "Perché la formula basata sul seno produce la stessa area della formula dei cateti?",
      "sec-angle-effect": "In che modo l'angolo compreso influisce sull'area del triangolo rettangolo?",
      "sec-alternative": "Si può calcolare l'area del triangolo rettangolo usando un cateto e il suo angolo?",
      "sec-units": "Comprendere le unità di angolo e le misure nei calcoli di area",
      "sec-mistakes": "Errori comuni nel calcolo dell'area del triangolo rettangolo da un cateto e un angolo",
      "sec-verify": "Come verificare se l'area del tuo triangolo rettangolo è corretta",
      "sec-applications": "L'area del triangolo rettangolo da cateto e angolo in pratica",
      "sec-related": "Esplora le calcolatrici correlate per triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Tre input portano l'intera area"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare l'area di un triangolo rettangolo usando un cateto e un angolo",
        "blocks": [
          { "kind": "p", "text": "Prendi [[b=4]], [[c=5]] e [[A=36.87^\\circ]]. Applica [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Il risultato indica l'area piana totale racchiusa dai tre lati: sei unità quadrate di superficie. È esattamente ciò che la calcolatrice dell'area del triangolo rettangolo da cateto e angolo restituisce per questi input." },
          { "kind": "p", "text": "La calcolatrice richiede tre misure. Il cateto [[b]] si trova accanto all'angolo [[A]]; l'ipotenusa [[c]] è il lato più lungo, opposto all'angolo retto; e l'angolo [[A]] è l'angolo acuto stretto tra essi. Poiché [[\\sin(A)]] è uguale al rapporto tra il cateto mancante [[a]] e l'ipotenusa [[c]], la formula ricostruisce l'altezza mancante senza misurarla. Moltiplicando [[b]], [[c]] e [[\\sin(A)]] si forma il rettangolo che li racchiude; dividendo per due lo si riduce al triangolo." },
          { "kind": "p", "text": "Questo conta ogni volta che il terzo lato è scomodo da misurare. Un disegno può dare l'ipotenusa e un cateto, mentre un goniometro o un passaggio precedente fornisce l'angolo. Il seno colma il divario, così l'area segue da ciò che è già noto." }
        ]
      },
      "sec-anatomy": {
        "h2": "Comprendere i lati e gli angoli di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Prima che la formula abbia senso, le etichette devono essere esatte. Ogni simbolo qui sotto appare nella calcolatrice, e ciascuno ha un significato unico e fisso." },
          { "kind": "h3", "text": "Cos'è un triangolo rettangolo?" },
          { "kind": "p", "text": "Un triangolo rettangolo è un triangolo con un angolo interno uguale a 90 gradi. I due lati che formano quell'angolo sono i cateti, perpendicolari tra loro; il lato opposto all'angolo retto è l'ipotenusa. Poiché i tre angoli interni sommano a 180 gradi, i due angoli acuti soddisfano [[A+B=90^\\circ]], il che li rende complementari: conoscerne uno determina l'altro." },
          { "kind": "h3", "text": "Cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto. È sempre il lato più lungo, comunque il triangolo sia ruotato o disegnato. La calcolatrice la usa come lato [[c]], quindi identificarla correttamente è il primo passo: trova l'angolo retto, poi prendi il lato di fronte. Un cateto non può mai svolgere questo ruolo, per quanto lungo appaia in un disegno inclinato." },
          { "kind": "h3", "text": "Quali sono i due cateti?" },
          { "kind": "p", "text": "I due cateti sono i lati che si incontrano all'angolo retto, perpendicolari tra loro. Il cateto [[a]] è opposto all'angolo [[A]]; il cateto [[b]] è opposto all'angolo [[B]]. La calcolatrice prende il cateto [[b]], quello adiacente all'angolo [[A]], come primo input. Insieme i cateti formano l'angolo dove vive l'angolo di 90 gradi." },
          { "kind": "h3", "text": "Comprendere l'angolo A" },
          { "kind": "p", "text": "L'angolo [[A]] è l'angolo acuto formato dal cateto [[b]] e dall'ipotenusa [[c]]. È l'angolo compreso tra i due input di lato della calcolatrice, quindi [[\\angle A=\\text{angle between }b\\text{ and }c]]. Questo abbinamento è fisso: ovunque la formula menzioni [[A]], intende l'angolo dove il cateto noto incontra l'ipotenusa, non l'angolo all'estremità lontana del cateto [[b]]." },
          { "kind": "h3", "text": "Lati opposto e adiacente rispetto all'angolo A" },
          { "kind": "p", "text": "Mettiti all'angolo [[A]] e guarda attraverso il triangolo. Il lato che vedi senza toccarlo è il lato opposto; il lato che forma l'angolo accanto all'ipotenusa è il lato adiacente. Queste etichette seguono l'angolo di riferimento, quindi passare il riferimento da [[A]] a [[B]] scambia quale cateto è quale." },
          { "kind": "h3", "text": "Comprendere l'angolo compreso" },
          { "kind": "p", "text": "Un angolo compreso è l'angolo formato da due lati scelti. La formula dell'area moltiplica [[b]] e [[c]], quindi l'angolo di cui ha bisogno è quello intrappolato tra essi: l'angolo [[A]]. L'abbinamento corretto per questa calcolatrice è [[b,\\;c,\\;A]]. Usare un altro angolo con gli stessi due lati rompe l'abbinamento assunto dalla formula, quindi non confondere l'angolo [[A]] con l'angolo [[B]]." }
        ],
        "table": {
          "headers": ["Lato", "Relazione con l'angolo A"],
          "rows": [
            ["a", "Opposto"],
            ["b", "Adiacente"],
            ["c", "Ipotenusa"]
          ]
        },
        "imgAlt": "Triangolo rettangolo ABC: cateto b e ipotenusa c evidenziati, angolo compreso A, cateto mancante a etichettato",
        "figcaption": "Triangolo ABC: il cateto adiacente b e l'ipotenusa c evidenziati formano l'angolo compreso A; il lato a è il cateto opposto mancante."
      },
      "sec-sine": {
        "h2": "Comprendere la funzione seno nei calcoli sul triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Il seno è un rapporto, non una lunghezza. Per un angolo acuto, [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] In questo triangolo diventa [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Il rapporto confronta il lato di fronte all'angolo con il lato più lungo, quindi è un numero puro senza unità. Per un angolo acuto il suo valore è sempre tra 0 e 1, ed è esattamente ciò che permette a un lato di sostituirne un altro." },
          { "kind": "h3", "text": "Come il seno aiuta a trovare il cateto mancante" },
          { "kind": "p", "text": "Parti da [[\\sin(A)=\\frac{a}{c}]]. Moltiplica entrambi i membri per [[c]]: [[[\\boxed{a=c\\sin(A)}]]] L'ipotenusa riporta il rapporto alla scala di una lunghezza, e quella lunghezza è il cateto mancante. La calcolatrice non chiede mai [[a]] perché questa singola trasformazione lo recupera da [[c]] e [[A]]. Ogni passaggio successivo della formula dell'area poggia su questa sostituzione." },
          { "kind": "h3", "text": "Esempio numerico" },
          { "kind": "p", "text": "Dati [[c=5]] e [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Il cateto mancante è lungo 3 unità, il che completa il familiare triangolo 3-4-5. Una moltiplicazione ha sostituito una misura separata." },
          { "kind": "h3", "text": "In cosa il seno differisce da coseno e tangente" },
          { "kind": "p", "text": "Il coseno usa il lato adiacente: [[\\cos(A)=\\frac{b}{c}]]. La tangente usa i due cateti: [[\\tan(A)=\\frac{a}{b}]]. Ogni rapporto risponde a una domanda diversa. Il seno è quello di cui ha bisogno questa calcolatrice perché l'incognita è il cateto opposto [[a]] e il lato noto è l'ipotenusa [[c]]. Quando i dati cambiano, il rapporto utile cambia con essi, ma nient'altro in questa guida lascia la famiglia del seno." }
        ]
      },
      "sec-formula": {
        "h2": "Perché la formula dell'area del triangolo rettangolo usa il seno?",
        "blocks": [
          { "kind": "p", "text": "Parti dalla regola standard: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Per questo triangolo la base naturale è il cateto [[b]] e l'altezza perpendicolare è il cateto [[a]], poiché i cateti si incontrano a 90 gradi. Questo dà [[K=\\frac{ab}{2}]]. La calcolatrice non chiede [[a]], quindi la formula deve ricostruirlo. Dal rapporto del seno, [[a=c\\sin(A)]]. Sostituendo: [[K=\\frac{b(c\\sin(A))}{2}]], quindi [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] La divisione per due sopravvive dalla regola base-altezza; il fattore seno è il cateto mancante sotto mentite spoglie." },
          { "kind": "h3", "text": "Perché la formula è divisa per due?" },
          { "kind": "p", "text": "Un triangolo con data base e altezza perpendicolare riempie esattamente metà del parallelogramma costruito sulla stessa base e altezza. Raddoppiare un qualsiasi triangolo lungo un lato completa quel parallelogramma, quindi il triangolo ne possiede metà dell'area. La divisione per due è geometria, non una convenzione, e si applica qualunque sia la formula che fornisce base e altezza." },
          { "kind": "h3", "text": "Come il seno sostituisce l'altezza mancante?" },
          { "kind": "p", "text": "L'altezza perpendicolare in [[K=\\frac{ab}{2}]] è il cateto [[a]]. Poiché [[\\sin(A)=\\frac{a}{c}]], moltiplicare l'ipotenusa per il seno riporta il rapporto adimensionale alla lunghezza [[a]]. L'utente misura [[c]] e [[A]] invece di [[a]], e il prodotto [[c\\sin(A)]] esegue la conversione silenziosamente dentro la formula." },
          { "kind": "h3", "text": "Perché l'ipotenusa è moltiplicata per il cateto adiacente?" },
          { "kind": "p", "text": "La regola generale per qualsiasi triangolo è che due lati e il loro angolo compreso determinano l'area. Qui i due lati noti sono [[b]] e [[c]], e il loro angolo compreso è [[A]]. La formula moltiplica esattamente quei due lati, poi scala per [[\\sin(A)]] e dimezza. Qualsiasi altro abbinamento di lati richiederebbe un angolo compreso diverso." },
          { "kind": "h3", "text": "Questa formula funziona per altri triangoli?" },
          { "kind": "p", "text": "Sì, nella sua forma generale: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], dove [[x]] e [[y]] sono due lati qualsiasi e [[\\theta]] è l'angolo tra essi. La versione per il triangolo rettangolo è quella regola con [[x=b]], [[y=c]] e [[\\theta=A]]. La calcolatrice aggiunge una restrizione: i tre input devono anche soddisfare le relazioni del triangolo rettangolo, come [[b=c\\cos(A)]]. La formula generale calcola un'area per qualsiasi coppia di lati e angolo compreso; questa calcolatrice interpreta il risultato come un triangolo rettangolo." }
        ],
        "imgAlt": "Triangolo 3-4-5: sin A uguale a 3 su 5 recupera il cateto a uguale a 3, area 6 con due formule",
        "figcaption": "Dal seno all'area: sin A = 3/5 dà a = 3, quindi K = bc sin A / 2 = 6 coincide con K = ab/2."
      },
      "sec-howto": {
        "h2": "Come usare la calcolatrice dell'area del triangolo rettangolo da cateto e angolo",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice richiede esattamente tre input, inseriti in ordine. I passaggi seguenti seguono il layout a schermo, dalle misure note al risultato verificato." }
        ],
        "steps": [
          "<strong>Identifica il cateto adiacente b.</strong> Il cateto che forma l'angolo A insieme all'ipotenusa.",
          "<strong>Identifica l'ipotenusa c.</strong> Il lato più lungo, opposto all'angolo retto.",
          "<strong>Identifica l'angolo acuto compreso A.</strong> L'angolo tra il cateto b e l'ipotenusa c.",
          "<strong>Usa unità compatibili per entrambi i lati.</strong> Metri con metri, piedi con piedi, mai mescolate.",
          "<strong>Inserisci il cateto b nel primo input.</strong> È il cateto adiacente all'angolo A.",
          "<strong>Inserisci l'ipotenusa c nel secondo input.</strong> Deve superare il cateto b.",
          "<strong>Inserisci l'angolo A in gradi.</strong> La calcolatrice si aspetta gradi, non radianti.",
          "<strong>Verifica che l'angolo sia tra 0 e 90 gradi.</strong> Gli estremi non descrivono alcun triangolo.",
          "<strong>Verifica che l'ipotenusa sia più lunga del cateto.</strong> Se c non è maggiore di b, un'etichetta è sbagliata.",
          "<strong>Verifica che i tre valori descrivano un unico triangolo rettangolo.</strong> Conferma che b sia uguale a c cos(A), almeno approssimativamente.",
          "<strong>Fai clic su Calcola area.</strong> Il risultato appare con la sostituzione mostrata.",
          "<strong>Esamina il risultato.</strong> Leggi l'area e conferma che sembri ragionevole.",
          "<strong>Leggi i passaggi della soluzione.</strong> Mostrano la formula, il valore del seno e il calcolo.",
          "<strong>Verifica che il risultato finale usi unità quadrate.</strong> Unità di lunghezza al quadrato, in accordo con gli input.",
          "<strong>Usa Reimposta prima di inserire un altro problema.</strong> Azzera tutti e tre i campi per un nuovo inizio."
        ],
        "closingParagraphs": [
          "La pagina offre una configurazione di calcolatrice: [[b]], [[c]] e [[A]]. Non c'è una seconda modalità; ogni area in questa pagina deriva dalla formula del seno sopra."
        ]
      },
      "sec-consistency": {
        "h2": "Come verificare se cateto, ipotenusa e angolo formano un triangolo rettangolo valido",
        "blocks": [
          { "kind": "p", "text": "I tre input non sono indipendenti. In un triangolo rettangolo, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], quindi [[[\\boxed{b=c\\cos(A)}]]] Fissa due dei tre valori e il terzo è già deciso. Inserire tre numeri in disaccordo non descrive il triangolo assunto dalla formula." },
          { "kind": "h3", "text": "Verificare l'angolo dalle due lunghezze dei lati" },
          { "kind": "p", "text": "Quando [[b]] e [[c]] sono noti, l'angolo è forzato: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Esempio: [[b=4]], [[c=5]] dà [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Se un goniometro o un calcolo precedente riporta un angolo diverso per questi lati, uno dei numeri è sbagliato. I lati decidono; l'angolo segue." },
          { "kind": "h3", "text": "Verificare le lunghezze dei lati dall'angolo" },
          { "kind": "p", "text": "La verifica funziona anche al contrario. Dati [[c=10]] e [[A=60^\\circ]], il cateto adiacente deve essere [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Inserire [[b=8]] con la stessa ipotenusa e lo stesso angolo non descriverebbe lo stesso triangolo rettangolo, perché [[10\\cos(60^\\circ)]] è uguale a 5, non a 8. Ogni angolo ammette esattamente una lunghezza di cateto adiacente per un'ipotenusa fissa." },
          { "kind": "h3", "text": "Cosa succede quando gli input sono incoerenti?" },
          { "kind": "p", "text": "La formula generale a due lati e angolo compreso restituisce comunque un numero per input incoerenti, perché moltiplica ciò che riceve. Ma quando [[b\\neq c\\cos(A)]], le misure non descrivono un triangolo rettangolo con [[c]] come ipotenusa e [[b]] come cateto adiacente. Una risposta numerica non è prova di geometria valida; la verifica di coerenza lo è." },
          { "kind": "h3", "text": "Condizioni di input di base" },
          { "kind": "p", "text": "Input validi soddisfano [[c>b>0]], [[0^\\circ<A<90^\\circ]] e [[b=c\\cos(A)]]. La prima mantiene l'ipotenusa più lunga; la seconda mantiene l'angolo acuto; la terza lega i tre valori in un unico triangolo. Verifica tutte e tre prima di fidarti dell'area." }
        ],
        "imgAlt": "Tre pannelli: validi 4, 5, 36.87 gradi; validi 5, 10, 60 gradi; non validi 8, 10, 60 gradi",
        "figcaption": "Input validi soddisfano b = c cos A; il terzo pannello mostra 10 cos 60° = 5 diverso da 8."
      },
      "sec-examples": {
        "h2": "Esempi passo passo dell'area del triangolo rettangolo usando un cateto e un angolo",
        "blocks": [
          { "kind": "p", "text": "Quattro triangoli rettangoli classici mostrano il metodo a dimensioni crescenti. Ogni esempio sostituisce nella formula del seno e poi verifica il risultato con la formula dei due cateti." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Passo 1: [[K=\\frac{bc\\sin(A)}{2}]]. Passo 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Passo 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Passo 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Verifica: [[a=5\\times0.6=3]], e [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], con [[\\sin(A)=\\frac{5}{13}]]. Sostituzione: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. Il 13 si semplifica: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Verifica: [[a=13\\times(5/13)=5]], e [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], con [[\\sin(A)=\\frac{8}{17}]]. Allora [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Verifica: [[a=8]], e [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Esempio 4: triangolo rettangolo 7-24-25" },
          { "kind": "p", "text": "Dati [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], con [[\\sin(A)=\\frac{7}{25}]]. Allora [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Verifica: [[a=7]], e [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Confronto degli esempi fondamentali" }
        ],
        "table": {
          "headers": ["Tipo di triangolo", "Cateto noto b", "Ipotenusa c", "Angolo A", "Area calcolata"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applicazioni reali dell'area del triangolo rettangolo da cateto e angolo",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni risolte portano la formula dalla pagina all'officina, al cantiere e allo studio. Ognuna nomina un pannello, una sezione, un profilo o un modello semplificato triangolare rettangolo, elabora i tre input della calcolatrice nella formula e dichiara l'ipotesi dietro i numeri. Quando l'oggetto reale è curvo o irregolare, il calcolo copre solo il triangolo modellato." },
          { "kind": "h3", "text": "Esempio 1: finestra in vetro triangolare" },
          { "kind": "p", "text": "Una finestra in vetro triangolare rettangola ha [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Input della calcolatrice: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Sostituzione: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Questa è l'area del vetro triangolare piano prima di sottrarre le tolleranze del telaio." },
          { "kind": "h3", "text": "Esempio 2: pannello di supporto del tetto" },
          { "kind": "p", "text": "Una sezione di supporto del tetto triangolare rettangola ha [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Input: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Allora [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Il risultato descrive la sezione di supporto triangolare piana, non l'intero tetto." },
          { "kind": "h3", "text": "Esempio 3: profilo laterale di rampa triangolare" },
          { "kind": "p", "text": "Un profilo di rampa triangolare rettangolo semplificato ha [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Input: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Allora [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Questo è il profilo laterale triangolare, non la superficie di camminamento inclinata." },
          { "kind": "h3", "text": "Esempio 4: piastra di rinforzo in acciaio" },
          { "kind": "p", "text": "Una piastra di supporto triangolare in acciaio ha [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Input: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Allora [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] La sola area non stabilisce resistenza strutturale o capacità di carico." },
          { "kind": "h3", "text": "Esempio 5: sezione di giardino triangolare" },
          { "kind": "p", "text": "Una sezione di giardino triangolare rettangola semplificata ha [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Input: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Allora [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Questo aiuta a stimare l'area della sezione triangolare per la piantumazione." },
          { "kind": "h3", "text": "Esempio 6: pannello di vela triangolare" },
          { "kind": "p", "text": "Una sezione di vela triangolare rettangola ha [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Input: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Allora [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Cuciture e tolleranze di materiale sono escluse da questa cifra di pannello piano." },
          { "kind": "h3", "text": "Esempio 7: sagoma di taglio in compensato" },
          { "kind": "p", "text": "Una sagoma triangolare rettangola in compensato ha [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Input: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Allora [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] L'area aiuta a stimare il materiale piano necessario prima degli scarti di taglio." },
          { "kind": "h3", "text": "Esempio 8: segnale stradale triangolare" },
          { "kind": "p", "text": "Un pannello di segnale triangolare rettangolo ha [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Input: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Allora [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Questo stima l'area della faccia piana del segnale." },
          { "kind": "h3", "text": "Esempio 9: sezione di terreno rilevata" },
          { "kind": "p", "text": "Una sezione di terreno rilevata triangolare rettangola ha [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Input: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Allora [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Il risultato si applica alla sezione di terreno triangolare rettangola semplificata." },
          { "kind": "h3", "text": "Esempio 10: supporto di tenda triangolare" },
          { "kind": "p", "text": "Una sezione di supporto di tenda triangolare rettangola ha [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Input: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Allora [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Questa è la sezione triangolare piana, non l'intero tessuto di una tenda irregolare." },
          { "kind": "h3", "text": "Esempio 11: sezione trasversale di sito industriale" },
          { "kind": "p", "text": "Una sezione di terreno industriale triangolare rettangola semplificata ha [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Input: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Allora [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Un sito reale irregolare può richiedere la divisione in più forme." },
          { "kind": "h3", "text": "Esempio 12: sezione terminale del tetto di magazzino" },
          { "kind": "p", "text": "Una grande sezione terminale del tetto di magazzino triangolare rettangola ha [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Input: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Allora [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Il risultato stima la sezione terminale triangolare piana." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": ["Applicazione pratica", "Cateto a", "Cateto noto b", "Ipotenusa c", "Angolo A", "Area calcolata", "Unità di misura"],
          "rows": [
            ["Finestra in vetro", "3", "4", "5", "36.87°", "6", "m²"],
            ["Supporto del tetto", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Profilo di rampa", "6", "8", "10", "36.87°", "24", "m²"],
            ["Piastra di rinforzo", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Sezione di giardino", "7", "24", "25", "16.26°", "84", "m²"],
            ["Pannello di vela", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Sagoma in compensato", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Segnale stradale", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Sezione rilevata", "9", "40", "41", "12.68°", "180", "m²"],
            ["Supporto di tenda", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Sezione industriale", "11", "60", "61", "10.39°", "330", "m²"],
            ["Terminale del tetto di magazzino", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Perché la formula basata sul seno produce la stessa area della formula dei cateti?",
        "blocks": [
          { "kind": "p", "text": "Parti da [[K=\\frac{bc\\sin(A)}{2}]] e ricorda [[\\sin(A)=\\frac{a}{c}]]. Sostituzione: [[K=\\frac{bc(a/c)}{2}]]. Il [[c]] si semplifica, lasciando [[[\\boxed{K=\\frac{ab}{2}}]]] La formula del seno non inventa una nuova area; calcola la stessa area da un diverso insieme di dati, con il cateto mancante introdotto di nascosto dal rapporto del seno." },
          { "kind": "h3", "text": "Quando la formula del seno è più utile?" },
          { "kind": "p", "text": "Usala quando un cateto è misurato, l'ipotenusa è nota e l'angolo compreso è disponibile, mentre il terzo lato non è mai stato misurato direttamente. Misure sul campo, disegni in scala e dati di rilievo arrivano spesso in esattamente questa combinazione. La formula trasforma questi tre numeri in un'area in una riga, senza deviazioni per trovare prima il cateto mancante." },
          { "kind": "h3", "text": "Quando la formula dei cateti è più semplice?" },
          { "kind": "p", "text": "Quando entrambi i cateti perpendicolari sono già noti, [[K=\\frac{ab}{2}]] è più corta: niente seno, niente angolo, una moltiplicazione e un dimezzamento. Prendi la versione con il seno solo quando manca un cateto e l'angolo può fornirlo." },
          { "kind": "h3", "text": "Confronto numerico" },
          { "kind": "p", "text": "Sul triangolo 3-4-5, il metodo del seno dà [[K=\\frac{4\\times5\\times0.6}{2}=6]], e il metodo dei cateti dà [[K=\\frac{3\\times4}{2}=6]]. Entrambe le strade attraversano la stessa geometria, quindi devono concordare. Quando non lo fanno, gli input o il calcolo sono in errore, mai le formule." }
        ]
      },
      "sec-angle-effect": {
        "h2": "In che modo l'angolo compreso influisce sull'area del triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Con l'ipotenusa fissa, l'angolo non può cambiare liberamente: le relazioni del triangolo rettangolo legano [[b]] e [[A]] insieme. Trattare onestamente quel vincolo mostra esattamente come l'area sale e scende mentre [[A]] si muove tra 0 e 90 gradi." },
          { "kind": "h3", "text": "Cosa succede quando l'angolo A aumenta?" },
          { "kind": "p", "text": "Con [[c]] fissa, [[b=c\\cos(A)]] e [[a=c\\sin(A)]], quindi [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. L'identità dell'angolo doppio dà [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] L'area cresce mentre [[A]] si avvicina a 45 gradi dal basso, raggiunge il picco a 45 gradi, poi cala verso 90 gradi. Angoli complementari, come 30° e 60°, danno la stessa area perché [[\\sin(2A)]] è simmetrico attorno a 45 gradi." },
          { "kind": "h3", "text": "Area massima per un'ipotenusa fissa" },
          { "kind": "p", "text": "Il picco si verifica a [[A=45^\\circ]], dove [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Lì [[a=b=\\frac{c}{\\sqrt{2}}]], quindi il triangolo che massimizza è isoscele. Un'ipotenusa fissa non può racchiudere più area triangolare rettangola di un quarto del suo quadrato, e solo la forma isoscele la raggiunge." },
          { "kind": "h3", "text": "Esempio numerico" },
          { "kind": "p", "text": "Data [[c=10]], il limite è [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] A [[A=45^\\circ]] i cateti sono [[10/\\sqrt{2}\\approx7.07]] ciascuno, e [[\\frac{7.07\\times7.07}{2}\\approx25]]. Nota che 90° non è un input acuto ammissibile: appiattirebbe il triangolo in una linea." }
        ]
      },
      "sec-alternative": {
        "h2": "Si può calcolare l'area del triangolo rettangolo usando un cateto e il suo angolo?",
        "blocks": [
          { "kind": "p", "text": "Sì, con la tangente invece del seno. Se il cateto [[b]] e l'angolo [[A]] sono noti, il cateto opposto segue da [[a=b\\tan(A)]]. Mettilo in [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], quindi [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Dall'altro angolo, [[b=a\\tan(B)]] dà [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Questi sono veri metodi alternativi, utili quando l'ipotenusa è sconosciuta ma un cateto e il suo angolo sono a portata di mano. Sono alternative matematiche, non modalità extra nella calcolatrice sopra, che funziona solo con [[b]], [[c]] e [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Comprendere le unità di angolo e le misure nei calcoli di area",
        "blocks": [
          { "kind": "p", "text": "L'area eredita la sua unità dalle due lunghezze moltiplicate per formarla, mentre l'angolo non contribuisce alcuna unità. Mantenere i tre input in unità compatibili è ciò che rende onesta la risposta." },
          { "kind": "h3", "text": "Gradi contro radianti" },
          { "kind": "p", "text": "La calcolatrice si aspetta gradi. Converti con [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; per esempio, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Un angolo in modalità radianti inserito in un campo in modalità gradi cambia silenziosamente il valore del seno: [[\\sin(30^\\circ)=0.5]] ma [[\\sin(30\\text{ radians})\\approx-0.99]], il che rovinerebbe l'area. Converti prima, poi inserisci." },
          { "kind": "h3", "text": "Perché il seno non ha unità" },
          { "kind": "p", "text": "Il seno è un rapporto di due lunghezze, quindi le unità si semplificano: opposto su ipotenusa è un numero puro. Le unità quadrate nella risposta provengono interamente dalla moltiplicazione di [[b]] per [[c]]. Per questo la contabilità delle unità della formula è semplice: abbina le due unità di lunghezza, e l'unità di area segue." },
          { "kind": "h3", "text": "Unità di misura comuni" },
          { "kind": "p", "text": "I metri danno metri quadrati, i centimetri danno centimetri quadrati, i piedi danno piedi quadrati, i pollici danno pollici quadrati: [[\\text{m}\\times\\text{m}=\\text{m}^2]], e lo stesso schema vale per ogni unità di lunghezza. Unità mescolate, come centimetri con metri, devono essere convertite in un'unica unità prima di applicare la formula, altrimenti il numero non ha un significato pulito." },
          { "kind": "h3", "text": "Perché l'arrotondamento anticipato può influire sul risultato" },
          { "kind": "p", "text": "Mantieni la piena precisione nei passaggi intermedi e arrotonda solo la risposta finale. L'angolo esatto dietro 36.87° è 36.869897°, il cui seno è esattamente 0.6; arrotondare prima l'angolo sposta il seno di un pelo, e quel pelo si moltiplica attraverso [[b]] e [[c]] fino all'area. Piccolo su un triangolo, evidente su un intero progetto." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo dell'area del triangolo rettangolo da un cateto e un angolo",
        "blocks": [
          { "kind": "p", "text": "Quasi ogni risposta sbagliata in questo argomento risale a un input etichettato male piuttosto che a un cattivo calcolo. I sedici errori qui sotto sono quelli che ricompaiono di continuo, ciascuno con la sua causa e la sua correzione." },
          { "kind": "h3", "text": "1. Confondere l'ipotenusa con un cateto perpendicolare" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto e il lato più lungo; un cateto incontra l'angolo retto. Scambiarli introduce la lunghezza sbagliata in [[c]]. Correzione: trova prima l'angolo retto, poi prendi il lato di fronte." },
          { "kind": "h3", "text": "2. Abbinare l'angolo A al cateto sbagliato" },
          { "kind": "p", "text": "L'angolo [[A]] si trova tra il cateto [[b]] e l'ipotenusa [[c]]. Abbinarlo al cateto [[a]] confonde la relazione di angolo compreso assunta dalla formula. Correzione: traccia i due lati che formano l'angolo inserito." },
          { "kind": "h3", "text": "3. Confondere i lati opposto e adiacente" },
          { "kind": "p", "text": "Opposto significa di fronte all'angolo; adiacente significa che lo tocca, accanto all'ipotenusa. Le etichette si invertono quando cambia l'angolo di riferimento. Correzione: mettiti all'angolo [[A]] e nomina ogni lato da lì." },
          { "kind": "h3", "text": "4. Usare l'angolo B invece dell'angolo A senza cambiare il lato corrispondente" },
          { "kind": "p", "text": "L'angolo [[B]] si abbina ai lati [[a]] e [[c]], non [[b]] e [[c]]. Inserire [[B]] mantenendo [[b]] e [[c]] calcola una quantità diversa. Correzione: mantieni ogni angolo con il proprio abbinamento di lati, o converti [[B]] in [[A]] prima." },
          { "kind": "h3", "text": "5. Usare radianti quando la calcolatrice si aspetta gradi" },
          { "kind": "p", "text": "Inserire 0.6435 (radianti) dove appartiene 36.87 (gradi) cambia completamente [[\\sin(A)]]. Correzione: controlla l'unità della calcolatrice, converti con [[\\times\\frac{180}{\\pi}]] se serve, poi inserisci." },
          { "kind": "h3", "text": "6. Dimenticare di dividere per due" },
          { "kind": "p", "text": "Moltiplicare [[b\\times c\\times\\sin(A)]] dà l'area del parallelogramma che li racchiude, il doppio del triangolo. Correzione: dimezza il prodotto; il /2 fa parte della formula, non è opzionale." },
          { "kind": "h3", "text": "7. Dimenticare la funzione seno" },
          { "kind": "p", "text": "Calcolare [[\\frac{bc}{2}]] da solo tratta [[\\sin(A)]] come 1, il che vale solo a 90°, un input acuto impossibile. Correzione: includi [[\\sin(A)]]; porta la quota del cateto mancante." },
          { "kind": "h3", "text": "8. Inserire un cateto più lungo dell'ipotenusa" },
          { "kind": "p", "text": "Nessun cateto può superare l'ipotenusa, quindi [[c\\leq b]] significa che un'etichetta è sbagliata. Correzione: identifica di nuovo i lati; la misura più lunga è [[c]]." },
          { "kind": "h3", "text": "9. Inserire un angolo di 0 gradi" },
          { "kind": "p", "text": "A 0°, [[\\sin(A)=0]] e il triangolo collassa in una linea con area zero. Correzione: usa un vero angolo acuto, strettamente tra 0° e 90°." },
          { "kind": "h3", "text": "10. Inserire un angolo di 90 gradi come angolo acuto" },
          { "kind": "p", "text": "90° è l'angolo retto [[C]], non un angolo acuto; [[\\sin(90^\\circ)=1]] trasforma la formula in [[\\frac{bc}{2}]], che non è l'area di questo triangolo. Correzione: inserisci l'angolo acuto tra [[b]] e [[c]]." },
          { "kind": "h3", "text": "11. Mescolare diverse unità di lunghezza" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] con [[c=5\\text{ m}]] moltiplica scale incompatibili. Correzione: converti entrambi in un'unica unità (400 cm = 4 m) prima di calcolare." },
          { "kind": "h3", "text": "12. Riportare l'area in unità lineari" },
          { "kind": "p", "text": "Un'area di 6 m² non è 6 m. Correzione: scrivi l'unità al quadrato con il numero, ogni volta." },
          { "kind": "h3", "text": "13. Arrotondare l'angolo troppo presto" },
          { "kind": "p", "text": "Arrotondare 36.869897° a 36.87° prima di prendere il seno sposta leggermente il risultato; arrotondare a 37° lo sposta di più. Correzione: mantieni la piena precisione fino alla risposta finale." },
          { "kind": "h3", "text": "14. Supporre che i tre input possano essere scelti indipendentemente" },
          { "kind": "p", "text": "[[b]], [[c]] e [[A]] sono legati da [[b=c\\cos(A)]]; scegliere tutti e tre liberamente sovradetermina il triangolo. Correzione: ricava il terzo valore dagli altri due invece di inventarlo." },
          { "kind": "h3", "text": "15. Usare un angolo incoerente con le lunghezze dei lati inserite" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] fallisce la verifica, poiché [[10\\cos(60^\\circ)=5\\neq8]]. La formula restituisce comunque un numero, ma non è l'area di questo triangolo rettangolo. Correzione: esegui la verifica [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Supporre che un risultato numerico della calcolatrice rappresenti sempre un triangolo rettangolo valido" },
          { "kind": "p", "text": "L'aritmetica riesce su qualsiasi numero digitato; la geometria no. Correzione: verifica con i controlli di coerenza e una formula indipendente prima di fidarti della risposta." },
          { "kind": "h3", "text": "Sbagliato contro corretto: un esempio concreto" },
          { "kind": "p", "text": "Usa [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Corretto: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Inserendo in modo errato l'angolo [[B=53.13^\\circ]] con gli stessi lati: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. L'angolo [[B]] non è l'angolo compreso tra [[b]] e [[c]]; il suo corretto abbinamento di lati è [[a]] e [[c]]. L'errore è invisibile nel calcolo ed evidente nella geometria." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare se l'area del tuo triangolo rettangolo è corretta",
        "blocks": [
          { "kind": "p", "text": "Sette verifiche indipendenti, tutte dimostrate sul triangolo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). L'accordo tra strade diverse è la prova più forte che una risposta sia giusta." },
          { "kind": "h3", "text": "Metodo 1: verifica la formula principale" },
          { "kind": "p", "text": "Ricalcola [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Un secondo passaggio cattura refusi e angoli digitati male." },
          { "kind": "h3", "text": "Metodo 2: verifica la relazione del coseno" },
          { "kind": "p", "text": "Conferma [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Una discordanza significa che l'angolo e i lati appartengono a triangoli diversi." },
          { "kind": "h3", "text": "Metodo 3: calcola il cateto mancante" },
          { "kind": "p", "text": "Conferma [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Questo controlla il valore del seno che alimenta la formula dell'area." },
          { "kind": "h3", "text": "Metodo 4: verifica il teorema di Pitagora" },
          { "kind": "p", "text": "Conferma [[a^2+b^2=c^2]]: [[9+16=25]]. Un fallimento qui significa che l'identificazione dei lati è sbagliata." },
          { "kind": "h3", "text": "Metodo 5: verifica usando i due cateti" },
          { "kind": "p", "text": "Conferma [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Due metodi, un triangolo, una risposta." },
          { "kind": "h3", "text": "Metodo 6: verifica gli angoli complementari" },
          { "kind": "p", "text": "Conferma [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Questo cattura un angolo misurato all'angolo sbagliato." },
          { "kind": "h3", "text": "Metodo 7: verifica l'area massima" },
          { "kind": "p", "text": "Conferma [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Un'area sopra il limite è impossibile per l'ipotenusa data." }
        ]
      },
      "sec-applications": {
        "h2": "L'area del triangolo rettangolo da cateto e angolo in pratica",
        "blocks": [
          { "kind": "p", "text": "Gli stessi tre input compaiono in luoghi che non menzionano mai la trigonometria. Un vetraio misura il cateto e la diagonale di una finestra e legge l'angolo sul telaio; un conciatetti conosce l'ipotenusa del supporto dalla lunghezza della trave e l'angolo dalla pendenza. In ogni caso il lato perpendicolare mancante è quello scomodo da raggiungere con il metro, mentre ipotenusa e angolo sono a portata di mano. La formula del seno esiste esattamente per questa asimmetria: converte le misure accessibili nell'altezza inaccessibile e poi nell'area." },
          { "kind": "p", "text": "I quattro pannelli qui sotto mostrano lo schema a diverse scale. Una finestra in vetro (6 m²) e un profilo di rampa (24 m²) usano la geometria 3-4-5 e 6-8-10 in scala metrica; un supporto del tetto (30 ft²) usa il triangolo 5-12-13; una sezione rilevata (84 m²) usa 7-24-25. Ogni pannello etichetta il cateto adiacente, l'ipotenusa, l'angolo compreso e l'area risultante, così il percorso dalla misura alla risposta resta visibile." }
        ],
        "imgAlt": "Quattro pannelli: finestra in vetro 6 m2, pannello del tetto 30 ft2, profilo di rampa 24 m2, sezione rilevata 84 m2",
        "figcaption": "Quattro usi reali: finestra, supporto del tetto, profilo di rampa e sezione rilevata con le loro aree."
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": [
          { "kind": "p", "text": "Ecco le risposte alle domande più comuni sull'area da cateto e angolo." }
        ]
      },
      "sec-related": {
        "h2": "Esplora le calcolatrici correlate per triangoli rettangoli",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatrici diverse." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tre input portano l'intera area",
        "blocks": [
          { "kind": "p", "text": "Un cateto, l'ipotenusa e l'angolo tra essi si rivelano sufficienti. Il rapporto del seno ricostruisce il cateto mancante, il dimezzamento converte il rettangolo che li racchiude nel triangolo, e le relazioni di coerenza permettono di controllare ogni input rispetto agli altri. Nulla nel metodo è approssimativo quando gli input sono esatti." },
          { "kind": "p", "text": "L'abitudine di lavoro è semplice: etichetta i lati dall'angolo A, mantieni le unità abbinate, conferma b = c cos(A) e verifica la risposta con la formula dei cateti. Con queste abitudini, K = bc sin(A)/2 è affidabile come qualsiasi calcolo di area in geometria." }
        ]
      }
    }
  }
};
