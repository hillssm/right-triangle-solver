// areaFromSemiperimeterGuideTranslations.b1es.ts: Right Triangle Area From Semiperimeter Guide (Page 23 of 45) translation for Spanish (es).
export const B1_ES = {
  "es": {
    "faqs": [
      {
        "question": "¿Cuál es la fórmula del área de un triángulo rectángulo usando el inradio y el semiperímetro?",
        "answer": "K = r × s, donde r es el inradio (el radio del círculo inscrito) y s es el semiperímetro (la mitad del perímetro). Multiplica los dos y el producto es el área, sin ningún paso de división. Para r = 1 y s = 6, K = 1 × 6 = 6 unidades cuadradas. Ambas entradas deben describir el mismo triángulo."
      },
      {
        "question": "¿Qué es un inradio?",
        "answer": "El inradio es el radio del círculo inscrito, el círculo que cabe exactamente dentro de un triángulo y toca los tres lados. Es igual a la distancia perpendicular desde el incentro, donde se encuentran las tres bisectrices, hasta cualquier lado. Para un triángulo rectángulo con catetos a y b e hipotenusa c, tiene el atajo r = (a + b - c) / 2."
      },
      {
        "question": "¿Cuál es la diferencia entre el inradio y el circunradio?",
        "answer": "El inradio pertenece al círculo dentro del triángulo, que toca los tres lados; el circunradio pertenece al círculo que pasa por los tres vértices. Miden círculos distintos, así que sus valores difieren. Para un triángulo rectángulo el circunradio es R = c/2, exactamente la mitad de la hipotenusa, mientras que el inradio es (a + b - c)/2."
      },
      {
        "question": "¿Cómo calculo el semiperímetro de un triángulo rectángulo?",
        "answer": "Suma los tres lados y divide entre dos: s = (a + b + c) / 2. Para un triángulo 3-4-5, s = (3 + 4 + 5) / 2 = 6. El semiperímetro es la mitad del perímetro completo, así que introducir el perímetro completo por error duplica el área al usar K = r × s."
      },
      {
        "question": "¿Cómo hallo el inradio usando las tres longitudes de lado?",
        "answer": "Para un triángulo rectángulo, usa el atajo r = (a + b - c) / 2, donde a y b son los catetos y c es la hipotenusa. Con lados 5, 12, 13: r = (5 + 12 - 13) / 2 = 2. Este atajo solo vale para triángulos rectángulos; otros triángulos necesitan la relación general r = K / s."
      },
      {
        "question": "¿Por qué el área es igual al inradio multiplicado por el semiperímetro?",
        "answer": "Unir el incentro con los tres vértices divide el triángulo en tres triángulos menores, cada uno con base igual a un lado y altura igual a r. Sus áreas son ar/2, br/2 y cr/2. Al sumarlas se obtiene r(a + b + c)/2, y como s = (a + b + c)/2, el total es r × s."
      },
      {
        "question": "¿Funciona la fórmula para todos los triángulos?",
        "answer": "Sí. Todo triángulo no degenerado tiene un círculo inscrito y un incentro, así que la descomposición en tres triángulos vale para triángulos rectángulos, acutángulos y obtusángulos por igual. El triángulo rectángulo es simplemente más fácil porque su inradio se puede hallar a partir de los lados con r = (a + b - c) / 2. El inradio general sigue saliendo de r = K / s."
      },
      {
        "question": "¿El semiperímetro es lo mismo que el perímetro?",
        "answer": "No. El semiperímetro es exactamente la mitad del perímetro: s = P/2. Para un triángulo 3-4-5 el perímetro es 12 y el semiperímetro es 6. Introducir el perímetro completo en K = r × s da 1 × 12 = 12, el doble del área correcta de 6. Divide el perímetro a la mitad antes de multiplicar."
      },
      {
        "question": "¿Tengo que dividir la respuesta final entre dos?",
        "answer": "No. La fórmula K = r × s ya tiene en cuenta cada división: las mitades de los tres triángulos menores quedan absorbidas en el semiperímetro. Volver a dividir después de multiplicar es el error más común. Con r = 1 y s = 6, el área correcta es 6, mientras que (1 × 6) / 2 = 3 es incorrecto."
      },
      {
        "question": "¿Cuál es la relación entre la fórmula de Herón y la fórmula del inradio?",
        "answer": "Ambas calculan la misma área pero parten de entradas distintas. La fórmula de Herón, K = sqrt(s(s - a)(s - b)(s - c)), necesita los tres lados; K = r × s necesita el inradio y el semiperímetro. Para un triángulo 3-4-5 ambas dan 6, lo que convierte una fórmula en una buena comprobación de la otra."
      },
      {
        "question": "¿Puedo usar valores decimales para el inradio y el semiperímetro?",
        "answer": "Sí. La fórmula maneja los decimales exactamente igual que los números enteros. Con r = 2.5 y s = 8.4, K = 2.5 × 8.4 = 21 unidades cuadradas. Mantén toda la precisión durante la multiplicación y redondea solo la respuesta final, según la exactitud de las mediciones."
      },
      {
        "question": "¿Cómo puedo verificar si mi inradio y mi semiperímetro son correctos?",
        "answer": "Comprueba que ambos sean positivos y que s sea claramente mayor que r. Si se conocen los lados, vuelve a calcular s = (a + b + c)/2 y r = (a + b - c)/2, y luego verifica el área con K = ab/2 y la fórmula de Herón. La coincidencia entre métodos es una prueba sólida. Valores de triángulos distintos dan un número que no es el área real."
      }
    ],
    "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
    "relatedItems": [
      "Calculadora del área del triángulo rectángulo a partir de los catetos",
      "Calculadora del semiperímetro del triángulo rectángulo",
      "Calculadora del área del triángulo rectángulo a partir de la altura",
      "Calculadora del área del triángulo rectángulo a partir del ángulo",
      "Calculadora del perímetro del triángulo rectángulo",
      "Calculadora del área del triángulo rectángulo"
    ],
    "relatedIntro": "Distintas medidas requieren distintas calculadoras.",
    "faqHeading": "Preguntas frecuentes",
    "tocHeading": "En esta guía",
    "tocItems": {
      "sec-intro": "Cómo calcular el área de un triángulo rectángulo usando su inradio y su semiperímetro",
      "sec-right-triangle": "¿Qué es un triángulo rectángulo?",
      "sec-incircle": "El círculo inscrito de un triángulo rectángulo",
      "sec-semiperimeter": "El semiperímetro de un triángulo",
      "sec-formula": "Por qué el área de un triángulo es igual al inradio por el semiperímetro",
      "sec-inradius": "Cómo calcular el inradio de un triángulo rectángulo",
      "sec-howto": "Cómo usar la calculadora del área del triángulo rectángulo a partir del semiperímetro",
      "sec-examples": "Ejemplos paso a paso del área del triángulo rectángulo usando el inradio y el semiperímetro",
      "sec-practical": "Aplicaciones reales del área del triángulo rectángulo a partir del inradio y el semiperímetro",
      "sec-legs-comparison": "Por qué la fórmula del inradio da la misma área que la fórmula de los catetos",
      "sec-heron": "Cuál es la diferencia entre la fórmula de Herón y el área = inradio × semiperímetro",
      "sec-consistency": "Cómo comprobar si el inradio y el semiperímetro son válidos",
      "sec-units": "Cómo afectan las unidades de medida a los cálculos del inradio y el semiperímetro",
      "sec-mistakes": "Errores comunes al calcular el área del triángulo rectángulo a partir del semiperímetro",
      "sec-verify": "Cómo comprobar si el área de tu triángulo rectángulo es correcta",
      "sec-applications": "Aplicaciones prácticas de la fórmula del inradio y el semiperímetro",
      "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "sec-faq": "Preguntas frecuentes",
      "sec-conclusion": "Dos mediciones, un producto"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cómo calcular el área de un triángulo rectángulo usando su inradio y su semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Toma [[r=1]], [[s=6]]. Aplica [[K=r\\times s]]: [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. El resultado nombra el área plana total encerrada por los tres lados del triángulo: seis unidades cuadradas. Esto es exactamente lo que devuelve la Calculadora del área del triángulo rectángulo a partir del semiperímetro para estas dos entradas." },
          { "kind": "p", "text": "El inradio es el radio del círculo metido dentro del triángulo, tocando los tres lados. El semiperímetro es la mitad de la longitud del contorno: el total de los tres lados dividido entre dos. Dos mediciones bastan porque el inradio sirve como altura perpendicular compartida de tres triángulos menores construidos desde el incentro, mientras que el semiperímetro reúne sus bases en un solo factor." },
          { "kind": "p", "text": "El razonamiento funciona para todo triángulo, porque cada uno tiene su círculo inscrito. El triángulo rectángulo añade una ventaja: su inradio se deduce de los tres lados mediante una fórmula corta, así que r y s suelen conocerse ya. Este método brilla en problemas donde el círculo inscrito o el semiperímetro están dados, ya que no hace falta medir ningún cateto ni ningún ángulo." }
        ]
      },
      "sec-right-triangle": {
        "h2": "¿Qué es un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de que el círculo inscrito entre en escena, el triángulo mismo debe etiquetarse sin error. Los símbolos de abajo quedan fijos en toda la guía, y la calculadora usa los mismos nombres." },
          { "kind": "h3", "text": "Definición de un triángulo rectángulo" },
          { "kind": "p", "text": "Un triángulo rectángulo es un polígono de tres lados que contiene exactamente un ángulo interior de 90 grados. Tiene tres vértices, tres lados, dos ángulos agudos y un ángulo recto que suele marcarse con un pequeño cuadrado. Los dos lados que forman el ángulo recto son los catetos; el lado opuesto es la hipotenusa. Como [[C=90^\\circ]], se deduce que [[[\\boxed{A+B=90^\\circ}]]]: los dos ángulos agudos son complementarios, así que conocer uno determina el otro." },
          { "kind": "h3", "text": "Los dos catetos" },
          { "kind": "p", "text": "El cateto [[a]] está opuesto al ángulo [[A]]; el cateto [[b]] está opuesto al ángulo [[B]]. Los dos catetos se encuentran en el vértice del ángulo recto y son perpendiculares entre sí. Contribuyen directamente al área, porque cada cateto puede servir de base mientras el otro sirve de altura perpendicular. En esta página también alimentan el inradio, ya que el atajo [[r=\\frac{a+b-c}{2}]] se construye con ambos catetos y la hipotenusa." },
          { "kind": "h3", "text": "La hipotenusa" },
          { "kind": "p", "text": "La hipotenusa es el lado opuesto al ángulo de 90 grados, siempre el lado más largo del triángulo. Nunca forma el ángulo recto; se extiende frente a él. En la fórmula del área por catetos no juega ningún papel, pero aquí sí importa: la hipotenusa entra tanto en el semiperímetro [[s=\\frac{a+b+c}{2}]] como en el atajo del inradio [[r=\\frac{a+b-c}{2}]]. Si se conocen ambos catetos, el teorema de Pitágoras la recupera mediante [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "¿Qué diferencia a este triángulo de los demás?" },
          { "kind": "p", "text": "La esquina de 90 grados lo explica todo. Hace que los catetos sean perpendiculares sin ninguna construcción, lo que simplifica la fórmula estándar del área, y hace que los segmentos tangentes del círculo inscrito cerca del ángulo recto sean iguales al propio inradio, lo que simplifica la fórmula del inradio. Otros triángulos también cumplen [[K=r\\times s]], pero hallar su inradio suele requerir conocer primero el área. El triángulo rectángulo es el único caso en que el inradio se deduce directamente de las longitudes de los lados." }
        ]
      },
      "sec-incircle": {
        "h2": "El círculo inscrito de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "El inradio solo tiene sentido una vez que el círculo inscrito se visualiza con claridad. Esta sección construye la idea desde el propio círculo hasta los puntos de tangencia donde el radio se encuentra con cada lado." },
          { "kind": "h3", "text": "Definición de un círculo inscrito" },
          { "kind": "p", "text": "Un círculo inscrito es un círculo situado dentro de un triángulo de modo que toca los tres lados. Está en el interior, tangente a cada lado en exactamente un punto, y no puede cruzar un lado porque la tangencia lo fija en su lugar. Todo triángulo no degenerado tiene exactamente un círculo inscrito: encoge un círculo dentro de las regiones de las esquinas y hay un único tamaño máximo que besa los tres lados. Los tres puntos de tangencia, uno por lado, son los lugares donde más adelante se medirá el inradio." },
          { "kind": "h3", "text": "¿Qué es el incentro?" },
          { "kind": "p", "text": "El incentro, etiquetado [[I]], es el punto donde se encuentran las tres bisectrices interiores. Cada bisectriz divide un ángulo de esquina en dos partes iguales, y cualquier punto de una bisectriz está a igual distancia perpendicular de los dos lados que forman ese ángulo. La intersección de las tres bisectrices está, por tanto, a igual distancia de los tres lados, que es exactamente por lo que puede servir como centro de un círculo que toca cada lado. El incentro está dentro de todo triángulo válido, nunca en un borde ni fuera." },
          { "kind": "h3", "text": "¿Qué es el inradio?" },
          { "kind": "p", "text": "El inradio es la distancia perpendicular desde el incentro hasta cualquier lado del triángulo: [[[\\boxed{r=\\text{distance from the incenter to a side}}]]]. Porque el incentro es equidistante de los tres lados, el valor es el mismo sin importar el lado elegido. Ese único número es el radio del círculo inscrito, la longitud de cada uno de los tres segmentos cortos trazados desde el centro hasta los puntos de tangencia, y la altura compartida que hace funcionar la demostración del área en una sección posterior." },
          { "kind": "h3", "text": "La relación de tangencia" },
          { "kind": "p", "text": "Un radio trazado hasta un punto de tangencia es perpendicular al lado que toca. Aplicado a los tres puntos de contacto, esto da [[r\\perp a]], [[r\\perp b]] y [[r\\perp c]]. Cada afirmación describe una esquina distinta del diagrama: el radio que termina en el cateto a forma ángulo recto con el cateto a, y lo mismo para el cateto b y la hipotenusa. Esta perpendicularidad no es decorativa; es la propiedad que permite que cada radio actúe como la altura de uno de los tres triángulos menores en la demostración del área." },
          { "kind": "h3", "text": "Diferencia entre el círculo inscrito y el círculo circunscrito" },
          { "kind": "p", "text": "El círculo inscrito vive dentro del triángulo y toca los tres lados; el círculo circunscrito pasa por los tres vértices y encierra el triángulo. Sus radios son medidas distintas y nunca deben intercambiarse. Para un triángulo rectángulo el circunradio tiene su propia regla sencilla, [[[\\boxed{R=\\frac{c}{2}}]]], porque la hipotenusa es un diámetro del círculo circunscrito: el punto medio de la hipotenusa es el circuncentro. El inradio [[r]] es el menor de los dos y pertenece al círculo interior." }
        ],
        "imgAlt": "Triángulo rectángulo ABC con su círculo inscrito: incentro I, tres puntos de tangencia, radios perpendiculares de longitud r",
        "figcaption": "Triángulo ABC con su círculo inscrito: tres radios perpendiculares, cada uno de longitud r."
      },
      "sec-semiperimeter": {
        "h2": "El semiperímetro de un triángulo",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro parece una simple medida a la mitad, pero carga con la mayor parte del cálculo del área. Comprender por qué la geometría recurre una y otra vez a la mitad del perímetro prepara el terreno para la demostración." },
          { "kind": "h3", "text": "Definición de semiperímetro" },
          { "kind": "p", "text": "El semiperímetro es exactamente la mitad del perímetro total: [[[\\boxed{s=\\frac{P}{2}}]]]. Para un triángulo esto se convierte en [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. El perímetro [[P]] es la longitud completa del contorno, la suma de los tres lados; el semiperímetro es esa suma dividida a la mitad. Ambos se relacionan mediante [[P=2s]], y confundirlos es el error de entrada más caro de esta página." },
          { "kind": "h3", "text": "Cómo calcular el semiperímetro" },
          { "kind": "p", "text": "Toma [[a=3]], [[b=4]], [[c=5]]. Suma primero los tres lados y luego divide una vez: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6}]]]. La suma debe ir antes de la división porque el semiperímetro divide a la mitad todo el contorno, no cada lado por separado. Sumar después de dividir daría aquí el mismo número, pero la fórmula [[s=\\frac{a+b+c}{2}]] establece el orden correcto: suma el contorno y luego divídelo a la mitad." },
          { "kind": "h3", "text": "¿Por qué se usa el semiperímetro en lugar del perímetro completo?" },
          { "kind": "p", "text": "Las fórmulas del área de triángulos siguen produciendo mitades: cada triángulo pequeño de la demostración aporta una división entre dos, y el semiperímetro las absorbe todas de una vez. Es la variable natural de la fórmula de Herón, de la relación del inradio [[r=\\frac{K}{s}]] y de la demostración que sigue. Introducir el perímetro completo duplicaría el resultado, porque [[K=r\\times P=2rs]] es el doble del área verdadera. La calculadora pide [[s]], no [[P]], precisamente para que la multiplicación no necesite ningún ajuste posterior." },
          { "kind": "h3", "text": "¿Puede el semiperímetro ser menor que el lado más largo?" },
          { "kind": "p", "text": "No. La desigualdad triangular exige [[a+b>c]]: los dos lados más cortos juntos deben superar al lado más largo, o el triángulo no puede cerrarse. Sumar [[c]] a ambos lados da [[a+b+c>2c]], y dividir a la mitad da [[\\frac{a+b+c}{2}>c]], que es [[s>c]]. El semiperímetro siempre supera al lado más largo en un triángulo válido. Si un semiperímetro informado es menor que la hipotenusa, las entradas no pueden describir un triángulo real." }
        ]
      },
      "sec-formula": {
        "h2": "Por qué el área de un triángulo es igual al inradio por el semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Empieza con la regla general [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Une el incentro [[I]] con los tres vértices. El triángulo se divide en tres triángulos menores, cada uno usando un lado original como base y el inradio como altura perpendicular. El resto de esta sección calcula cada parte y las suma, para que [[K=r\\times s]] se vea, no solo se memorice." },
          { "kind": "h3", "text": "Área del primer triángulo menor" },
          { "kind": "p", "text": "El triángulo construido sobre el lado [[a]] tiene base [[a]] y altura [[r]], porque el radio se encuentra con el lado [[a]] perpendicularmente en su punto de tangencia. Su área es, por tanto, [[K_1=\\frac{ar}{2}]]. Nada del ángulo recto se usa todavía; este paso funciona para el lado de cualquier triángulo." },
          { "kind": "h3", "text": "Área del segundo triángulo menor" },
          { "kind": "p", "text": "El triángulo construido sobre el lado [[b]] sigue el mismo patrón: base [[b]], altura perpendicular [[r]], área [[K_2=\\frac{br}{2}]]. La altura es de nuevo el mismo número [[r]], porque el incentro es equidistante de cada lado. Esa altura compartida es la clave de toda la demostración." },
          { "kind": "h3", "text": "Área del tercer triángulo menor" },
          { "kind": "p", "text": "El triángulo construido sobre el lado [[c]] completa el conjunto: [[K_3=\\frac{cr}{2}]]. Los tres triángulos menores recubren el triángulo original exactamente, sin solapamiento ni huecos: cada punto del original está en uno de ellos, ya que los segmentos del incentro a los vértices particionan el interior." },
          { "kind": "h3", "text": "Sumar las tres áreas" },
          { "kind": "p", "text": "Suma las partes: [[K=K_1+K_2+K_3]]. Al sustituir se obtiene [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Factoriza [[r]] de la suma: [[K=\\frac{r(a+b+c)}{2}]]. Recuerda que [[s=\\frac{a+b+c}{2}]], así que la fracción entre corchetes es exactamente el semiperímetro, y [[[\\boxed{K=r\\times s}]]]. Cada división a la mitad de los tres triángulos pequeños ha quedado absorbida en el semiperímetro, por eso la multiplicación final no necesita más divisiones." },
          { "kind": "h3", "text": "¿Por qué funciona esta fórmula para todo triángulo?" },
          { "kind": "p", "text": "Todo triángulo no degenerado tiene un círculo inscrito y un incentro, y la distancia perpendicular del incentro a los tres lados es el mismo número [[r]]. La descomposición en tres triángulos no usa nada más: ni ángulo recto, ni longitudes de lado particulares, ni forma especial. Sea el triángulo rectángulo, acutángulo u obtusángulo, el incentro se une a los vértices y la misma álgebra llega a [[K=r\\times s]]. La fórmula es una propiedad de los triángulos en general, por eso los libros de geometría la demuestran una vez y la usan en todas partes." },
          { "kind": "h3", "text": "¿Por qué es esta fórmula especialmente útil para triángulos rectángulos?" },
          { "kind": "p", "text": "La identidad sigue siendo la misma, pero el inradio se vuelve fácil. En un triángulo general el inradio suele hallarse a partir de la propia área mediante [[r=\\frac{K}{s}]], lo que es circular si el área es el objetivo. Un triángulo rectángulo escapa del círculo: su inradio se deduce directamente de los lados vía [[r=\\frac{a+b-c}{2}]], deducida en la siguiente sección. Eso convierte [[K=r\\times s]] en un método de trabajo genuino para triángulos rectángulos en lugar de una definición reordenada." }
        ],
        "imgAlt": "Triángulo dividido desde el incentro I en tres triángulos menores de altura r, lo que demuestra K = r por s",
        "figcaption": "Tres triángulos menores comparten la altura r; sus áreas suman r por s."
      },
      "sec-inradius": {
        "h2": "Cómo calcular el inradio de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Para un triángulo rectángulo con catetos [[a]] y [[b]] e hipotenusa [[c]], el inradio es [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Este atajo es específico de los triángulos rectángulos. La demostración de abajo usa solo la propiedad de los segmentos tangentes de los círculos, y los ejemplos resueltos lo muestran en acción." },
          { "kind": "h3", "text": "¿Por qué funciona la fórmula del inradio?" },
          { "kind": "p", "text": "Los segmentos tangentes trazados desde el mismo punto exterior hasta un círculo tienen longitudes iguales. El círculo inscrito toca ambos catetos, y los dos radios hasta esos puntos de contacto se encuentran con los lados en ángulo recto. Junto con el ángulo recto en el vértice, la región de la esquina forma un cuadrado de lado [[r]], así que las distancias desde el vértice del ángulo recto hasta los dos puntos de tangencia de los catetos son cada una [[r]]. Llama [[x]] al segmento tangente restante en el cateto a e [[y]] al restante en el cateto b. Los dos segmentos tangentes desde cada vértice agudo son iguales, así que la hipotenusa se divide en los mismos [[x]] e [[y]]. Por tanto [[a=r+x]], [[b=r+y]] y [[c=x+y]]. Suma las dos primeras ecuaciones: [[a+b=2r+x+y]]. Como [[x+y=c]], esto se convierte en [[a+b=2r+c]], y al despejar se obtiene [[[\\boxed{r=\\frac{a+b-c}{2}}]]]." },
          { "kind": "h3", "text": "Ejemplo resuelto: triángulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]: sustituye en el atajo, [[r=\\frac{3+4-5}{2}]], [[r=\\frac{2}{2}]], [[[\\boxed{r=1}]]]. El círculo inscrito del triángulo 3-4-5 tiene radio 1, lo que coincide con el ejemplo de la introducción donde [[r=1]] y [[s=6]] daban [[K=6]]." },
          { "kind": "h3", "text": "Ejemplo resuelto: triángulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]: entonces [[r=\\frac{5+12-13}{2}]], [[r=\\frac{4}{2}]], [[[\\boxed{r=2}]]]. Junto con [[s=\\frac{5+12+13}{2}=15]], el área sigue como [[K=2\\times15=30]], confirmada por la fórmula de los catetos [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Una fórmula alternativa para el inradio" },
          { "kind": "p", "text": "El atajo también puede escribirse como [[[\\boxed{r=\\frac{ab}{a+b+c}}]]]. Esta no es una segunda fórmula sin relación. Parte de [[K=rs]] y [[K=\\frac{ab}{2}]], así que [[rs=\\frac{ab}{2}]]. Como [[s=\\frac{a+b+c}{2}]], la sustitución da [[r\\frac{a+b+c}{2}=\\frac{ab}{2}]], y al cancelar las mitades queda [[r=\\frac{ab}{a+b+c}]]. Debe coincidir con [[r=\\frac{a+b-c}{2}]]: comprueba con 3-4-5, [[\\frac{3\\times4}{3+4+5}=\\frac{12}{12}=1]], el mismo radio. Algebraicamente, [[(a+b-c)(a+b+c)=(a+b)^2-c^2=2ab]] para un triángulo rectángulo, así que las dos formas son idénticas." },
          { "kind": "h3", "text": "¿Funciona este atajo del inradio para todo triángulo?" },
          { "kind": "p", "text": "No. La deducción se apoyó en el ángulo recto: el cuadrado de esquina de lado [[r]] solo existe porque los dos catetos se encuentran a 90 grados. Para un triángulo general el inradio debe salir de [[[\\boxed{r=\\frac{K}{s}}]]] o de una fórmula acorde a las mediciones conocidas, como [[r=(s-a)\\tan\\frac{A}{2}]]. Aplicar [[r=\\frac{a+b-c}{2}]] a un triángulo no rectángulo calcula un número sin significado geométrico." }
        ],
        "imgAlt": "Los segmentos tangentes x e y deducen la fórmula del inradio r = (a + b - c) / 2",
        "figcaption": "Segmentos tangentes iguales dan a = r + x, b = r + y, c = x + y."
      },
      "sec-howto": {
        "h2": "Cómo usar la calculadora del área del triángulo rectángulo a partir del semiperímetro",
        "blocks": [
          { "kind": "p", "text": "La calculadora necesita exactamente dos entradas, introducidas en orden. Los pasos de abajo siguen el diseño en pantalla desde la identificación de las mediciones hasta un resultado comprobado." }
        ],
        "steps": [
          "<strong>Determina el inradio del triángulo rectángulo.</strong> Es el radio del círculo inscrito en el triángulo. Si se conocen los tres lados, calcúlalo con [[r=\\frac{a+b-c}{2}]].",
          "<strong>Determina su semiperímetro.</strong> Suma los tres lados y divide entre dos: [[s=\\frac{a+b+c}{2}]]. Es la mitad del perímetro completo, no el perímetro en sí.",
          "<strong>Asegúrate de que ambos valores pertenezcan al mismo triángulo.</strong> Un inradio de un triángulo y un semiperímetro de otro producen un producto sin sentido.",
          "<strong>Convierte las mediciones a unidades compatibles si es necesario.</strong> Ambas longitudes deben usar la misma unidad: metros con metros, centímetros con centímetros, nunca mezcladas.",
          "<strong>Introduce el inradio r en el primer campo de entrada.</strong> Es el menor de los dos valores en cualquier triángulo válido.",
          "<strong>Introduce el semiperímetro s en el segundo campo de entrada.</strong> Comprueba dos veces que el valor sea la mitad del perímetro, no el perímetro completo.",
          "<strong>Haz clic en \"Calculate Area\".</strong> La calculadora multiplica las dos entradas directamente.",
          "<strong>Revisa el resultado mostrado.</strong> Lee el área y confirma que parezca razonable para el tamaño del triángulo.",
          "<strong>Comprueba los pasos de fórmula y sustitución.</strong> Muestran [[K=r\\times s]] con los valores introducidos ya sustituidos.",
          "<strong>Confirma que el resultado esté expresado en unidades cuadradas.</strong> Las unidades de longitud multiplicadas dan unidades cuadradas: m², cm², ft², según las entradas.",
          "<strong>Usa \"Reset\" antes de introducir otro cálculo.</strong> Borra ambos campos para empezar de cero."
        ],
        "closingParagraphs": [
          "La calculadora tiene exactamente dos entradas, el inradio [[r]] y el semiperímetro [[s]]. No admite los tres lados, los catetos, la hipotenusa ni un ángulo. La multiplicación [[K=r\\times s]] está completa tal como se muestra; el resultado nunca debe dividirse de nuevo entre dos."
        ]
      },
      "sec-examples": {
        "h2": "Ejemplos paso a paso del área del triángulo rectángulo usando el inradio y el semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Cuatro triángulos rectángulos clásicos muestran la cadena completa: de los lados al semiperímetro, de los lados al inradio, y luego la única multiplicación. En estos ejemplos r y s se deducen de las longitudes de los lados; la calculadora acepta r y s directamente." },
          { "kind": "h3", "text": "Ejemplo 1: triángulo rectángulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. Paso 1: calcula el semiperímetro, [[s=\\frac{3+4+5}{2}]], [[s=6]]. Paso 2: calcula el inradio, [[r=\\frac{3+4-5}{2}]], [[r=1]]. Paso 3: calcula el área, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Verifica con la fórmula de los catetos: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Ejemplo 2: triángulo rectángulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]. Semiperímetro: [[s=\\frac{5+12+13}{2}=15]]. Inradio: [[r=\\frac{5+12-13}{2}=2]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifica: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Ejemplo 3: triángulo rectángulo 8-15-17" },
          { "kind": "p", "text": "Dados [[a=8]], [[b=15]], [[c=17]]. Semiperímetro: [[s=\\frac{8+15+17}{2}=20]]. Inradio: [[r=\\frac{8+15-17}{2}=3]]. Área: [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Verifica: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Ejemplo 4: triángulo rectángulo 7-24-25" },
          { "kind": "p", "text": "Dados [[a=7]], [[b=24]], [[c=25]]. Semiperímetro: [[s=\\frac{7+24+25}{2}=28]]. Inradio: [[r=\\frac{7+24-25}{2}=3]]. Área: [[K=3\\times28]], [[[\\boxed{K=84\\text{ square units}}]]]. Verifica: [[K=\\frac{7\\times24}{2}=84]]." },
          { "kind": "h3", "text": "Comparación de los ejemplos resueltos" }
        ],
        "table": {
          "headers": ["Triángulo", "Cateto a", "Cateto b", "Hipotenusa c", "Inradio r", "Semiperímetro s", "Área K"],
          "rows": [
            ["3-4-5", "3", "4", "5", "1", "6", "6"],
            ["5-12-13", "5", "12", "13", "2", "15", "30"],
            ["8-15-17", "8", "15", "17", "3", "20", "60"],
            ["7-24-25", "7", "24", "25", "3", "28", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplicaciones reales del área del triángulo rectángulo a partir del inradio y el semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Doce situaciones resueltas llevan la fórmula de la página al taller, a la obra y al estudio. Cada una nombra un panel, una sección, un perfil o un modelo simplificado de forma triangular rectángula, trabaja el inradio y el semiperímetro con la fórmula, y expone la suposición detrás de los números. Son modelos simplificados de triángulo rectángulo: no toda ventana, tejado, jardín, rampa, vela o parcela real forma un triángulo rectángulo exacto, y un objeto irregular debe dividirse en formas más simples antes de aplicar la fórmula. El área describe solo la superficie geométrica plana; nunca establece por sí sola la resistencia estructural, la capacidad de carga ni la seguridad de la construcción." },
          { "kind": "h3", "text": "Ejemplo 1: ventana triangular de vidrio" },
          { "kind": "p", "text": "Una ventana triangular de vidrio tiene lados [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Semiperímetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Inradio: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Área: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. El resultado representa la superficie plana del vidrio triangular antes de restar los márgenes del marco. Suposición: el cristal es un verdadero triángulo rectángulo; las dimensiones del marco se tratan por separado." },
          { "kind": "h3", "text": "Ejemplo 2: soporte de acero" },
          { "kind": "p", "text": "Una placa triangular de soporte de acero tiene lados [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Semiperímetro: [[s=\\frac{5+12+13}{2}=15\\text{ cm}]]. Inradio: [[r=\\frac{5+12-13}{2}=2\\text{ cm}]]. Área: [[K=2\\times15]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Es el área plana de la placa y no establece su resistencia estructural. Suposición: la pieza del soporte se corta como triángulo rectángulo; los agujeros para tornillos y los dobleces quedan excluidos." },
          { "kind": "h3", "text": "Ejemplo 3: sección de soporte del tejado" },
          { "kind": "p", "text": "Una sección de soporte del tejado en triángulo rectángulo tiene lados [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Semiperímetro: [[s=\\frac{8+15+17}{2}=20\\text{ ft}]]. Inradio: [[r=\\frac{8+15-17}{2}=3\\text{ ft}]]. Área: [[K=3\\times20]], [[[\\boxed{K=60\\text{ ft}^2}]]]. La fórmula mide la sección plana triangular del soporte, útil para estimar materiales. Suposición: la sección se modela como triángulo rectángulo; la geometría completa del tejado puede diferir." },
          { "kind": "h3", "text": "Ejemplo 4: sección triangular del jardín" },
          { "kind": "p", "text": "Una sección simplificada del jardín en triángulo rectángulo tiene lados [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Semiperímetro: [[s=28\\text{ m}]]. Inradio: [[r=3\\text{ m}]]. Área: [[K=3\\times28]], [[[\\boxed{K=84\\text{ m}^2}]]]. El área ayuda a estimar la sección triangular del jardín, por ejemplo al pedir césped o mantillo. Suposición: los bordes del parterre son rectos y se encuentran en ángulo recto." },
          { "kind": "h3", "text": "Ejemplo 5: perfil triangular de rampa" },
          { "kind": "p", "text": "Un perfil lateral simplificado de rampa tiene lados [[a=9\\text{ m}]], [[b=12\\text{ m}]], [[c=15\\text{ m}]]. Semiperímetro: [[s=\\frac{9+12+15}{2}=18\\text{ m}]]. Inradio: [[r=\\frac{9+12-15}{2}=3\\text{ m}]]. Área: [[K=3\\times18]], [[[\\boxed{K=54\\text{ m}^2}]]]. Esto mide el perfil triangular lateral, no la superficie inclinada de la rampa. Suposición: el perfil se modela con una esquina cuadrada en la base." },
          { "kind": "h3", "text": "Ejemplo 6: plantilla de corte de madera contrachapada" },
          { "kind": "p", "text": "Una plantilla triangular rectángula de madera contrachapada tiene lados [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Semiperímetro: [[s=24\\text{ cm}]]. Inradio: [[r=4\\text{ cm}]]. Área: [[K=4\\times24]], [[[\\boxed{K=96\\text{ cm}^2}]]]. El cálculo estima el área plana del material antes del desperdicio de corte. Suposición: la plantilla es un verdadero triángulo rectángulo; el ancho del corte de la sierra y los recortes son aparte." },
          { "kind": "h3", "text": "Ejemplo 7: panel triangular de señalización" },
          { "kind": "p", "text": "Un panel triangular de señalización tiene lados [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Semiperímetro: [[s=\\frac{20+21+29}{2}=35\\text{ cm}]]. Inradio: [[r=\\frac{20+21-29}{2}=6\\text{ cm}]]. Área: [[K=6\\times35]], [[[\\boxed{K=210\\text{ cm}^2}]]]. Esto representa la superficie plana imprimible del panel. Suposición: la cara del panel es plana y triangular rectángula; los herrajes de montaje quedan excluidos." },
          { "kind": "h3", "text": "Ejemplo 8: sección de medición topográfica" },
          { "kind": "p", "text": "Una sección simplificada de terreno en triángulo rectángulo tiene lados [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Semiperímetro: [[s=45\\text{ m}]]. Inradio: [[r=4\\text{ m}]]. Área: [[K=4\\times45]], [[[\\boxed{K=180\\text{ m}^2}]]]. La fórmula calcula el área de la sección triangular medida. Suposición: la sección se modela con una esquina cuadrada; una parcela irregular necesita subdividirse en formas más simples." },
          { "kind": "h3", "text": "Ejemplo 9: vela triangular de tela" },
          { "kind": "p", "text": "Un panel de tela triangular rectángulo tiene lados [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Semiperímetro: [[s=30\\text{ ft}]]. Inradio: [[r=5\\text{ ft}]]. Área: [[K=5\\times30]], [[[\\boxed{K=150\\text{ ft}^2}]]]. El resultado excluye costuras, dobladillos y márgenes de material. Suposición: la vela se modela plana; las velas reales se curvan bajo carga." },
          { "kind": "h3", "text": "Ejemplo 10: panel industrial de soporte" },
          { "kind": "p", "text": "Un panel industrial triangular rectángulo tiene lados [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Semiperímetro: [[s=66\\text{ m}]]. Inradio: [[r=5\\text{ m}]]. Área: [[K=5\\times66]], [[[\\boxed{K=330\\text{ m}^2}]]]. El resultado describe el panel geométrico plano, no su comportamiento estructural. Suposición: el panel se modela como triángulo rectángulo; el grosor y las fijaciones son cuestiones aparte." },
          { "kind": "h3", "text": "Ejemplo 11: sección del extremo del tejado del almacén" },
          { "kind": "p", "text": "Una sección simplificada del extremo del tejado de un almacén tiene lados [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Semiperímetro: [[s=91\\text{ ft}]]. Inradio: [[r=6\\text{ ft}]]. Área: [[K=6\\times91]], [[[\\boxed{K=546\\text{ ft}^2}]]]. El resultado estima la sección triangular del extremo, por ejemplo al presupuestar el revestimiento. Suposición: el hastial se modela como triángulo rectángulo." },
          { "kind": "h3", "text": "Ejemplo 12: panel grande de fabricación" },
          { "kind": "p", "text": "Un panel de fabricación triangular rectángulo tiene lados [[a=28\\text{ cm}]], [[b=45\\text{ cm}]], [[c=53\\text{ cm}]]. Semiperímetro: [[s=\\frac{28+45+53}{2}=63\\text{ cm}]]. Inradio: [[r=\\frac{28+45-53}{2}=10\\text{ cm}]]. Área: [[K=10\\times63]], [[[\\boxed{K=630\\text{ cm}^2}]]]. Este método calcula el área triangular plana del panel directamente a partir de sus mediciones de círculo y contorno. Suposición: los bordes del panel son rectos y se encuentran en ángulo recto." },
          { "kind": "h3", "text": "Comparación de los ejemplos prácticos" }
        ],
        "table": {
          "headers": ["Aplicación práctica", "Cateto a", "Cateto b", "Hipotenusa c", "Inradio r", "Semiperímetro s", "Área calculada", "Unidad de medida"],
          "rows": [
            ["Ventana de vidrio", "3", "4", "5", "1", "6", "6", "m²"],
            ["Soporte de acero", "5", "12", "13", "2", "15", "30", "cm²"],
            ["Sección del tejado", "8", "15", "17", "3", "20", "60", "ft²"],
            ["Sección del jardín", "7", "24", "25", "3", "28", "84", "m²"],
            ["Perfil de rampa", "9", "12", "15", "3", "18", "54", "m²"],
            ["Plantilla de contrachapado", "12", "16", "20", "4", "24", "96", "cm²"],
            ["Panel de señalización", "20", "21", "29", "6", "35", "210", "cm²"],
            ["Sección topográfica", "9", "40", "41", "4", "45", "180", "m²"],
            ["Vela de tela", "15", "20", "25", "5", "30", "150", "ft²"],
            ["Panel industrial", "11", "60", "61", "5", "66", "330", "m²"],
            ["Extremo del tejado", "13", "84", "85", "6", "91", "546", "ft²"],
            ["Panel de fabricación", "28", "45", "53", "10", "63", "630", "cm²"]
          ]
        }
      },
      "sec-legs-comparison": {
        "h2": "Por qué la fórmula del inradio da la misma área que la fórmula de los catetos",
        "blocks": [
          { "kind": "p", "text": "Dos fórmulas distintas, un triángulo, un área. Empieza con [[K=rs]] y el área estándar del triángulo rectángulo [[K=\\frac{ab}{2}]], lo que obliga a [[[\\boxed{rs=\\frac{ab}{2}}]]]. Ambos lados miden la misma superficie encerrada usando distinta información geométrica: uno lee el círculo inscrito y el contorno, el otro lee los dos catetos perpendiculares." },
          { "kind": "h3", "text": "Comparación numérica con un triángulo 3-4-5" },
          { "kind": "p", "text": "Método del inradio: [[r=1]], [[s=6]], así que [[K=1\\times6=6]]. Método de los catetos: [[K=\\frac{3\\times4}{2}=6]]. Las respuestas coinciden porque el inradio y el semiperímetro codifican la misma información de lados que los catetos: [[r=\\frac{a+b-c}{2}]] y [[s=\\frac{a+b+c}{2}]] se construyen con [[a]], [[b]] y [[c]], así que su producto debe reconstruir el área que describen los catetos. La coincidencia aquí no es casualidad; es álgebra." },
          { "kind": "h3", "text": "¿Cuándo es más útil el método del inradio?" },
          { "kind": "p", "text": "El método del inradio gana cuando r y s ya están a mano. Los problemas de geometría sobre círculos inscritos entregan el inradio directamente. Una demostración que necesita el área expresada con mediciones del círculo usa [[K=rs]] de forma natural. Los problemas de competición suelen incluir el semiperímetro como parte del enunciado. Y como comprobación cruzada, calcular el área de dos formas independientes detecta errores aritméticos que un solo método ocultaría. En cada caso el punto es la comodidad de las entradas: empieza desde las mediciones que tengas." },
          { "kind": "h3", "text": "¿Cuándo es más sencilla la fórmula de los catetos?" },
          { "kind": "p", "text": "Si ya se conocen ambos catetos perpendiculares, [[K=\\frac{ab}{2}]] suele ser más directo: una multiplicación, una división a la mitad, sin r ni s intermedios que calcular. Deducir primero el inradio y el semiperímetro y luego multiplicar añade dos pasos que no cambian nada. El método del semiperímetro no siempre es el camino más fácil; es el mejor camino cuando el círculo inscrito o el contorno son el punto de partida natural, y un rodeo cuando los catetos están delante de ti." }
        ]
      },
      "sec-heron": {
        "h2": "Cuál es la diferencia entre la fórmula de Herón y el área = inradio × semiperímetro",
        "blocks": [
          { "kind": "p", "text": "La fórmula de Herón calcula el área a partir de las tres longitudes de lado: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Requiere el semiperímetro pero no el inradio, y funciona para cualquier triángulo válido. La fórmula del inradio [[[\\boxed{K=rs}]]] necesita en cambio el inradio y el semiperímetro en lugar de los tres lados. La diferencia es de entradas, no de geometría: ambas devuelven la misma área encerrada, porque las dos fórmulas están ligadas mediante [[r=\\frac{K}{s}]]. La fórmula de Herón es la elección natural cuando se conocen los tres lados y no hay datos del círculo; la fórmula del inradio es natural cuando el círculo inscrito forma parte del cuadro." },
          { "kind": "h3", "text": "Comparación resuelta" },
          { "kind": "p", "text": "Usa un triángulo 3-4-5. Fórmula de Herón: [[s=6]], [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Fórmula del inradio: [[K=1\\times6]], [[[\\boxed{K=6}]]]. Las respuestas coinciden porque la expresión de Herón se simplifica, mediante la misma descomposición en tres triángulos, a [[r\\times s]]: la raíz cuadrada de [[s(s-a)(s-b)(s-c)]] es igual a [[rs]] siempre que r y s vengan del mismo triángulo. No confundas las dos herramientas, eso sí: la fórmula de Herón nunca pide el inradio, y el atajo del inradio [[r=\\frac{a+b-c}{2}]] pertenece solo a los triángulos rectángulos." }
        ]
      },
      "sec-consistency": {
        "h2": "Cómo comprobar si el inradio y el semiperímetro son válidos",
        "blocks": [
          { "kind": "p", "text": "La calculadora acepta dos valores y los multiplica, pero el producto es el área de un triángulo rectángulo solo cuando ambos valores describen el mismo triángulo. Las comprobaciones de abajo separan las entradas válidas de las impostoras." },
          { "kind": "h3", "text": "Condiciones básicas de entrada" },
          { "kind": "p", "text": "Ambas entradas deben ser positivas: [[r>0]] y [[s>0]]. Una longitud no puede ser cero ni negativa, así que una entrada no positiva no tiene significado geométrico. El cero colapsaría el triángulo a una línea sin área; un valor negativo no describe nada. Vuelve a medir o a deducir cualquier entrada que no pase esta prueba." },
          { "kind": "h3", "text": "El semiperímetro debe ser mayor que el inradio" },
          { "kind": "p", "text": "En un triángulo válido el semiperímetro deja muy atrás al inradio. De [[K=rs]] y [[K=\\frac{ab}{2}]] con catetos positivos, y de la geometría del círculo inscrito encajado dentro del triángulo, [[s]] es siempre claramente mayor que [[r]]: para el triángulo 3-4-5, 6 contra 1; para el 5-12-13, 15 contra 2. Los valores también deben corresponder a un conjunto válido de tres lados, así que esta comparación es un filtro rápido, no toda la validación. Un inradio mayor que el semiperímetro no puede venir de ningún triángulo." },
          { "kind": "h3", "text": "Comprobación avanzada de coherencia para el triángulo rectángulo" },
          { "kind": "p", "text": "Para una prueba más estricta, un triángulo rectángulo debe cumplir [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt{2}}]]], aproximadamente [[[\\boxed{\\frac{r}{s}\\leq0.1716}]]]. La idea es sencilla: dados r y s, los dos catetos deben ser las soluciones positivas de una ecuación cuadrática construida a partir de [[a+b=s+r]] y [[ab=2rs]], y esa cuadrática solo tiene soluciones reales cuando su discriminante se mantiene no negativo. La condición del discriminante se simplifica hasta exactamente esta cota. Comprueba el 3-4-5: [[\\frac{1}{6}\\approx0.1667\\leq0.1716]], válido. Esto es un refinamiento opcional para un trabajo cuidadoso, no una parte obligatoria del cálculo del principiante." },
          { "kind": "h3", "text": "¿Qué pasa cuando las entradas son incoherentes?" },
          { "kind": "p", "text": "Multiplicar dos números positivos siempre produce un resultado numérico, pero eso no demuestra que representen el inradio y el semiperímetro del mismo triángulo rectángulo. Un r de un triángulo emparejado con un s de otro produce un producto sin significado geométrico, por muy ordenada que parezca la aritmética. A menos que se haya probado el comportamiento de validación de la implementación de la calculadora, no des por hecho que comprueba la relación: haz tú mismo las comprobaciones de arriba, vuelve a calcular r y s a partir de los lados cuando se conozcan, y verifica el área con la fórmula de los catetos." }
        ]
      },
      "sec-units": {
        "h2": "Cómo afectan las unidades de medida a los cálculos del inradio y el semiperímetro",
        "blocks": [
          { "kind": "p", "text": "El inradio y el semiperímetro son ambas longitudes, así que siguen las mismas reglas de unidades que cualquier otra medición de longitud. La unidad cuadrada de la respuesta viene de multiplicar dos unidades de longitud, lo que convierte las unidades coherentes en todo el juego." },
          { "kind": "h3", "text": "¿Por qué deben usar unidades compatibles ambas entradas?" },
          { "kind": "p", "text": "El producto [[K=r\\times s]] multiplica una longitud por una longitud. Si r está en centímetros y s en metros, el producto mezcla las dos escalas y el número no tiene un significado limpio. Convierte primero para que ambas entradas compartan una unidad: metros, centímetros, milímetros, pies, pulgadas o yardas, pero la misma para ambas. La calculadora tiene selectores de unidad por esta razón: ajústalos antes de introducir los números." },
          { "kind": "h3", "text": "Ejemplo resuelto de conversión de unidades" },
          { "kind": "p", "text": "Dados [[r=10\\text{ cm}]] y [[s=1\\text{ m}]]. Convierte el semiperímetro: [[1\\text{ m}=100\\text{ cm}]]. Entonces [[K=10\\times100]], [[[\\boxed{K=1000\\text{ cm}^2}]]]. Como alternativa, convierte el inradio: [[10\\text{ cm}=0.1\\text{ m}]], entonces [[K=0.1\\times1]], [[[\\boxed{K=0.1\\text{ m}^2}]]]. Ambas respuestas describen la misma área, ya que [[0.1\\text{ m}^2=1000\\text{ cm}^2]]. Convierte primero, multiplica después, y cualquier camino de unidades llega al lugar correcto." },
          { "kind": "h3", "text": "¿Por qué el resultado se expresa en unidades cuadradas?" },
          { "kind": "p", "text": "El área cuenta los cuadrados unitarios que cubren la superficie: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. La unidad es siempre la unidad de longitud al cuadrado, porque el producto de dos longitudes es un conteo de cuadrados. Informar un área como una longitud simple, como 1000 cm, es un error de categoría: 1000 cm es una longitud, mientras que 1000 cm² es una superficie." },
          { "kind": "h3", "text": "Trabajar con valores decimales" },
          { "kind": "p", "text": "La fórmula maneja los decimales sin modificación. Dados [[r=2.5]] y [[s=8.4]]: [[K=2.5\\times8.4]], [[[\\boxed{K=21\\text{ square units}}]]]. Los números enteros, los decimales y las mediciones finas de taller fluyen todos por la misma multiplicación. Mantén toda la precisión durante el cálculo y redondea solo la respuesta final a la exactitud que justifiquen las mediciones." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errores comunes al calcular el área del triángulo rectángulo a partir del semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Casi toda respuesta incorrecta en este tema se remonta a una etiqueta confundida más que a una mala aritmética. Los dieciséis errores de abajo son los que aparecen una y otra vez, cada uno con su causa y su solución." },
          { "kind": "h3", "text": "1. Confundir el semiperímetro con el perímetro completo" },
          { "kind": "p", "text": "Introducir [[P=12]] donde [[s=6]] corresponde duplica la respuesta: [[1\\times12=12]] en lugar de 6. El error ocurre porque el lenguaje cotidiano dice perímetro mientras la fórmula quiere su mitad. Solución: divide siempre a la mitad la suma del contorno antes de introducirla, y comprueba que la s introducida sea menor que el perímetro." },
          { "kind": "h3", "text": "2. Usar el circunradio en lugar del inradio" },
          { "kind": "p", "text": "El circunradio del triángulo 3-4-5 es [[R=\\frac{5}{2}=2.5]]; usarlo da [[2.5\\times6=15]], casi el triple del área verdadera. El error viene de que los dos círculos comparten la palabra radio. Solución: confirma que el radio pertenece al círculo dentro del triángulo, que toca los tres lados, no al que pasa por los vértices." },
          { "kind": "h3", "text": "3. No calcular bien el semiperímetro" },
          { "kind": "p", "text": "Sumar solo dos lados, o dividir cada lado entre dos antes de sumar, produce una s incorrecta. Para el 3-4-5, sumar 3 + 4 y dividir da 3.5, y [[1\\times3.5=3.5]] no significa nada. Solución: suma primero los tres lados y luego divide una vez: [[s=\\frac{a+b+c}{2}]]." },
          { "kind": "h3", "text": "4. Dividir el resultado final de nuevo entre dos" },
          { "kind": "p", "text": "Después de [[K=1\\times6=6]], una división extra a la mitad da 3. El hábito viene de la fórmula de los catetos, donde la división es explícita. Solución: recuerda que las mitades ya están absorbidas en el semiperímetro; [[K=r\\times s]] está completo." },
          { "kind": "h3", "text": "5. Usar la fórmula incorrecta del inradio del triángulo rectángulo" },
          { "kind": "p", "text": "Adivinar [[r=\\frac{c-a-b}{2}]] o [[r=\\frac{a+b}{2}]] produce un radio incorrecto. Para el 3-4-5, [[\\frac{5-3-4}{2}=-1]] ni siquiera es una longitud. Solución: usa [[r=\\frac{a+b-c}{2}]] con a y b como catetos y c como hipotenusa, exactamente en ese orden." },
          { "kind": "h3", "text": "6. Aplicar el atajo del inradio del triángulo rectángulo a un triángulo ordinario" },
          { "kind": "p", "text": "El atajo se apoya en el ángulo recto, así que en un triángulo general calcula un número sin significado geométrico. Solución: para triángulos no rectángulos halla el inradio a partir de [[r=\\frac{K}{s}]] o de una fórmula acorde a las mediciones conocidas, nunca desde [[r=\\frac{a+b-c}{2}]]." },
          { "kind": "h3", "text": "7. Introducir el inradio y el semiperímetro de triángulos distintos" },
          { "kind": "p", "text": "Tomar r = 1 de un triángulo 3-4-5 y s = 15 de un triángulo 5-12-13 da 15, un producto que no describe ningún triángulo real. El error ocurre cuando los valores se copian de distintos ejemplos resueltos o de distintos dibujos. Solución: deduce o mide ambas entradas del mismo triángulo antes de multiplicar." },
          { "kind": "h3", "text": "8. Mezclar centímetros y metros" },
          { "kind": "p", "text": "Multiplicar r = 10 cm por s = 1 m sin convertir da 10 de nada limpio. Solución: convierte primero a una unidad: [[1\\text{ m}=100\\text{ cm}]], luego [[K=10\\times100=1000\\text{ cm}^2]]." },
          { "kind": "h3", "text": "9. Informar el resultado en unidades lineales" },
          { "kind": "p", "text": "Un área de 6 m² no es 6 m. El error suele venir de copiar la unidad de entrada sin elevarla al cuadrado. Solución: escribe la unidad al cuadrado junto al número cada vez: m², cm², ft²." },
          { "kind": "h3", "text": "10. Introducir mediciones cero o negativas" },
          { "kind": "p", "text": "Las longitudes son positivas. El cero colapsa el triángulo a una línea sin área, y las longitudes negativas no tienen significado geométrico aquí. Solución: vuelve a medir o a deducir la entrada; rechaza los valores no positivos antes de calcular." },
          { "kind": "h3", "text": "11. Confundir el incentro con el circuncentro" },
          { "kind": "p", "text": "El incentro es el punto de encuentro de las bisectrices; el circuncentro es el punto de encuentro de las mediatrices de los lados. Para un triángulo rectángulo el circuncentro está en el punto medio de la hipotenusa, un punto completamente distinto. Confundirlos lleva a medir el radio incorrecto. Solución: el incentro [[I]] está dentro del triángulo a igual distancia de los lados, no de los vértices." },
          { "kind": "h3", "text": "12. Suponer que el círculo inscrito toca solo dos lados" },
          { "kind": "p", "text": "Un círculo encajado en una esquina toca dos lados, pero ese no es el círculo inscrito. El círculo inscrito toca los tres, y la demostración del área necesita los tres puntos de tangencia. Solución: verifica tres puntos de contacto, uno por lado, antes de tratar un radio como el inradio." },
          { "kind": "h3", "text": "13. Olvidar que el radio se encuentra con cada lado tangente perpendicularmente" },
          { "kind": "p", "text": "El argumento de la altura compartida en la demostración depende de [[r\\perp a]], [[r\\perp b]], [[r\\perp c]]. Un segmento inclinado desde el incentro hasta un lado es más largo que r y no puede servir de altura. Solución: mide el inradio a lo largo de la perpendicular al lado, nunca en diagonal." },
          { "kind": "h3", "text": "14. Confundir el inradio con el diámetro" },
          { "kind": "p", "text": "Introducir el ancho completo del círculo inscrito como r duplica el radio y duplica el área. Para el triángulo 3-4-5, introducir 2 en lugar de 1 da [[2\\times6=12]]. Solución: el inradio va del centro a un lado, la mitad del ancho completo del círculo." },
          { "kind": "h3", "text": "15. Usar mal la fórmula de Herón" },
          { "kind": "p", "text": "Los deslices comunes incluyen olvidar la raíz cuadrada, escribir [[s(s+a)(s+b)(s+c)]] con signos más, o introducir el perímetro completo en la fórmula. Para el 3-4-5, omitir la raíz da 36 en lugar de 6. Solución: [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], con el semiperímetro, los signos menos y la raíz en su lugar." },
          { "kind": "h3", "text": "16. Suponer que un resultado numérico demuestra automáticamente que las entradas son geométricamente coherentes" },
          { "kind": "p", "text": "Dos números positivos cualesquiera se multiplican, así que la calculadora siempre devuelve algo. Ese algo es el área de un triángulo rectángulo solo cuando r y s pertenecen de verdad a uno. Solución: haz las comprobaciones de coherencia, vuelve a calcular r y s a partir de los lados cuando sea posible, y verifica con la fórmula de los catetos antes de confiar en el número." },
          { "kind": "h3", "text": "Incorrecto frente a correcto: un ejemplo concreto" },
          { "kind": "p", "text": "Usa [[r=1]], [[s=6]]. Correcto: [[K=1\\times6=6]]. Dividir de nuevo entre dos por error: [[K=\\frac{1\\times6}{2}=3]], incorrecto porque la división a la mitad ya está dentro del semiperímetro. Introducir por error el perímetro completo 12 en lugar del semiperímetro 6: [[K=1\\times12=12]], el doble del área verdadera. La aritmética parece segura en los tres casos; solo la geometría los distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Cómo comprobar si el área de tu triángulo rectángulo es correcta",
        "blocks": [
          { "kind": "p", "text": "Seis comprobaciones independientes, todas demostradas en el triángulo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[r=1]], [[s=6]], [[K=6]]). La coincidencia entre rutas distintas es la prueba más sólida de que una respuesta es correcta, en la tarea y en la medición práctica por igual." },
          { "kind": "h3", "text": "Método 1: comprueba la fórmula principal" },
          { "kind": "p", "text": "Ejecuta [[K=r\\times s]] de nuevo: [[K=1\\times6=6]]. Una segunda pasada con los números reintroducidos detecta erratas y dígitos mal tecleados." },
          { "kind": "h3", "text": "Método 2: calcula el semiperímetro a partir de los tres lados" },
          { "kind": "p", "text": "Vuelve a calcular [[s=\\frac{a+b+c}{2}]] desde los lados: [[s=\\frac{3+4+5}{2}=6]]. Si la s recalculada difiere de la introducida, la entrada estaba mal y el producto debe repetirse." },
          { "kind": "h3", "text": "Método 3: calcula el inradio a partir del triángulo rectángulo" },
          { "kind": "p", "text": "Vuelve a calcular [[r=\\frac{a+b-c}{2}]]: [[r=\\frac{3+4-5}{2}=1]]. Una discrepancia con el r introducido significa que el radio venía de otro triángulo o de una fórmula mal aplicada." },
          { "kind": "h3", "text": "Método 4: verifica con la fórmula estándar de los catetos" },
          { "kind": "p", "text": "Calcula [[K=\\frac{ab}{2}]]: [[K=\\frac{3\\times4}{2}=6]]. Esta ruta usa entradas completamente distintas, así que la coincidencia con [[rs]] confirma tanto las entradas como la aritmética." },
          { "kind": "h3", "text": "Método 5: verifica con la fórmula de Herón" },
          { "kind": "p", "text": "Calcula [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. La fórmula de Herón ejercita juntos los lados y el semiperímetro, detectando errores de etiquetado de lados que las otras comprobaciones podrían pasar por alto." },
          { "kind": "h3", "text": "Método 6: comprueba el teorema de Pitágoras" },
          { "kind": "p", "text": "Confirma [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Esto comprueba la identificación de lados detrás de cada otro cálculo; una hipotenusa incorrecta significa que un lado se etiquetó mal y que r, s y K deben reconstruirse." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicaciones prácticas de la fórmula del inradio y el semiperímetro",
        "blocks": [
          { "kind": "p", "text": "El mismo patrón de dos entradas aparece dondequiera que un panel o una sección triangular necesite medirse y los datos del círculo inscrito sean el punto de partida conveniente. Un vidriero dimensiona una ventana a partir de sus longitudes de borde; un fabricante lee los catetos de una pieza de soporte; un topógrafo reduce una esquina de parcela a tres lados rectos. De esos lados salen el inradio y el semiperímetro, y una multiplicación nombra el área. Los cuatro paneles de abajo muestran el patrón a distintas escalas: una ventana de vidrio (6 m²), un soporte del tejado (60 ft²), una sección del jardín (84 m²) y una placa de acero (30 cm²), cada uno etiquetado con su inradio, su semiperímetro y el área resultante." }
        ],
        "imgAlt": "Cuatro paneles: ventana de vidrio 6 m2, soporte del tejado 60 ft2, sección del jardín 84 m2, placa de acero 30 cm2",
        "figcaption": "Cuatro usos reales: una ventana de vidrio, un soporte del tejado, una sección del jardín y una placa de acero."
      },
      "sec-conclusion": {
        "h2": "Dos mediciones, un producto",
        "blocks": [
          { "kind": "p", "text": "Un inradio y un semiperímetro bastan. Multiplícalos y la superficie encerrada queda nombrada. La demostración de los tres triángulos muestra por qué no sigue ninguna división a la multiplicación, el argumento de los segmentos tangentes muestra por qué el triángulo rectángulo obtiene su atajo del inradio, y la fórmula de los catetos más la fórmula de Herón están listas para comprobar cada respuesta." },
          { "kind": "p", "text": "El hábito de trabajo es sencillo: confirma que ambas entradas describan el mismo triángulo, iguala las unidades, mantén los decimales sin redondear hasta el final y verifica con un segundo método. Con esos hábitos, [[K=r\\times s]] es uno de los cálculos de área más fiables de la geometría." }
        ]
      },
      "sec-related": {
        "h2": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "blocks": [
          { "kind": "p", "text": "Distintas medidas requieren distintas calculadoras." }
        ]
      },
      "sec-faq": {
        "h2": "Preguntas frecuentes",
        "blocks": []
      }
    }
  }
};
