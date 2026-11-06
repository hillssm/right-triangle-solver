// radiusGuideTranslations.bes.ts: Right Triangle Radius
// Guide (Page 37 of 45) translation.
export const RADIUS_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "answer": "La fórmula es [[r = \\frac{a + b - c}{2}]], donde a y b son los dos catetos y c es la hipotenusa. Suma los catetos, resta la hipotenusa y divide entre 2. Para un triángulo 6-8-10, [[r = \\frac{6 + 8 - 10}{2} = 2]] cm.",
          "question": "¿Cuál es la fórmula del inradio de un triángulo rectángulo?",
        },
        {
          "answer": "La fórmula es [[R = \\frac{c}{2}]], donde c es la hipotenusa completa. La hipotenusa es el diámetro del círculo circunscrito, así que la mitad de ella es el radio. Para una hipotenusa de 10 cm, [[R = \\frac{10}{2} = 5]] cm.",
          "question": "¿Cuál es la fórmula del circunradio de un triángulo rectángulo?",
        },
        {
          "answer": "El inradio es el radio del círculo inscrito, el círculo dentro del triángulo que toca los tres lados. El circunradio es el radio del círculo circunscrito, el círculo alrededor del triángulo que pasa por los tres vértices. En un triángulo 6-8-10, [[r = 2]] cm y [[R = 5]] cm.",
          "question": "¿Cuál es la diferencia entre inradio y circunradio?",
        },
        {
          "answer": "Necesitas las tres longitudes de los lados: el cateto a, el cateto b y la hipotenusa c. La fórmula [[r = \\frac{a + b - c}{2}]] usa cada lado una vez, así que ningún lado puede quedar fuera. Las tres longitudes también deben formar un triángulo rectángulo válido.",
          "question": "¿Qué medidas se necesitan para calcular el inradio?",
        },
        {
          "answer": "En un triángulo rectángulo, la hipotenusa es el diámetro del círculo circunscrito, así que el circunradio es simplemente la mitad de la hipotenusa, [[R = \\frac{c}{2}]]. Los catetos no intervienen en el cálculo, por eso basta una medida.",
          "question": "¿Por qué el circunradio solo necesita la hipotenusa?",
        },
        {
          "answer": "El incentro se encuentra dentro del triángulo, en el punto donde se encuentran las tres bisectrices de los ángulos. Es el centro del círculo inscrito y se encuentra a la misma distancia, el inradio r, de cada uno de los tres lados.",
          "question": "¿Dónde se encuentra el incentro?",
        },
        {
          "answer": "En un triángulo rectángulo, el circuncentro se encuentra en el punto medio de la hipotenusa. Ese punto está a la misma distancia, el circunradio R, de los tres vértices, por eso el círculo circunscrito pasa por cada uno de ellos.",
          "question": "¿Dónde se encuentra el circuncentro?",
        },
        {
          "answer": "No. Para un triángulo rectángulo válido no degenerado, el circunradio siempre es mayor que el inradio. En el triángulo 6-8-10, [[R = 5]] cm es más del doble que [[r = 2]] cm. Si tus números dicen lo contrario, revisa tus datos y las etiquetas.",
          "question": "¿El inradio puede ser mayor que el circunradio?",
        },
        {
          "answer": "Sí, pero solo en los triángulos rectángulos. El ángulo en un semicírculo es un ángulo recto, así que el vértice del ángulo recto se encuentra sobre el círculo que tiene la hipotenusa como diámetro. Este es el teorema de Tales, y no se cumple en triángulos que no son rectángulos.",
          "question": "¿La hipotenusa es el diámetro del círculo circunscrito?",
        },
        {
          "answer": "Vuelve a calcular [[r = \\frac{a + b - c}{2}]] a partir de las longitudes originales de los lados, luego comprueba la misma respuesta con [[r = \\frac{Area}{s}]], usando [[Area = \\frac{ab}{2}]] y [[s = \\frac{a + b + c}{2}]]. Ambas rutas deben dar el mismo valor.",
          "question": "¿Cómo puedo verificar mi resultado del inradio?",
        },
        {
          "answer": "Sí. Primero halla el área con [[Area = \\frac{ab}{2}]] y el semiperímetro con [[s = \\frac{a + b + c}{2}]], luego divide: [[r = \\frac{Area}{s}]]. Para el triángulo 6-8-10, [[r = \\frac{24}{12} = 2]] cm.",
          "question": "¿Puedo calcular el inradio usando el área y el semiperímetro?",
        },
        {
          "answer": "Miden círculos diferentes. El inradio proviene de un círculo apretado dentro del triángulo, así que depende de cómo los tres lados lo rodean. El circunradio proviene de un círculo que pasa por los tres vértices, y para un triángulo rectángulo la hipotenusa por sí sola fija ese círculo como su diámetro.",
          "question": "¿Por qué la fórmula del inradio es diferente de la fórmula del circunradio?",
        },
      ],
      "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea específica de triángulos rectángulos, así que elige la herramienta que coincida con las medidas que ya conoces.",
      "relatedItems": [
        "Calculadora de inradio de triángulo rectángulo",
        "Calculadora de circunradio de triángulo rectángulo",
        "Calculadora de área de triángulo rectángulo",
        "Calculadora de lados de triángulo rectángulo",
        "Calculadora de perímetro y semiperímetro de triángulo rectángulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos círculos importantes asociados con él: el círculo inscrito, que se encuentra dentro del triángulo y toca los tres lados, y el círculo circunscrito, que se encuentra alrededor del triángulo y pasa por los tres vértices. Esta calculadora halla el radio de cada círculo, usando un modo distinto para cada uno.",
            },
            {
              "kind": "p",
              "text": "El inradio es [[r = \\frac{a + b - c}{2}]], donde a y b son los catetos y c es la hipotenusa. El circunradio es [[R = \\frac{c}{2}]], que solo necesita la hipotenusa. Las fórmulas difieren porque describen círculos diferentes.",
            },
            {
              "kind": "p",
              "text": "Toma un triángulo rectángulo 6-8-10 con [[a = 6]] cm, [[b = 8]] cm y [[c = 10]] cm. El inradio es [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, y el circunradio es [[R = \\frac{10}{2} = 5]] cm. El círculo inscrito es un círculo pequeño de radio 2 cm encajado dentro del triángulo, mientras que el círculo circunscrito es un círculo mucho más grande de radio 5 cm que pasa por los vértices.",
            },
            {
              "kind": "p",
              "text": "La calculadora mantiene los dos modos separados porque necesitan medidas diferentes: el modo de inradio necesita las tres longitudes de los lados, mientras que el modo de circunradio solo necesita la hipotenusa. Elige el modo que coincida con las medidas que tienes.",
            },
          ],
          "h2": "Calculadora de radios de triángulo rectángulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta página ofrece dos modos de calculadora. El modo 1 halla el inradio, el radio del círculo dentro del triángulo. El modo 2 halla el circunradio, el radio del círculo alrededor del triángulo.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Calculadora de inradio",
            },
            {
              "kind": "p",
              "text": "El modo de inradio necesita tres datos: el cateto a, el cateto b y la hipotenusa c. Usa [[r = \\frac{a + b - c}{2}]]. Elígelo cuando conozcas las tres longitudes de los lados y quieras el radio del círculo inscrito.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Calculadora de circunradio",
            },
            {
              "kind": "p",
              "text": "El modo de circunradio necesita un solo dato: la hipotenusa c. Usa [[R = \\frac{c}{2}]]. Elígelo cuando conozcas la hipotenusa y quieras el radio del círculo circunscrito.",
            },
            {
              "kind": "p",
              "text": "Antes de calcular, comprueba que todas las medidas usen la misma unidad, así que convierte primero si no es así. Luego selecciona el modo, introduce las medidas, haz clic en el botón Calcular de ese modo y lee el resultado en la unidad que introdujiste. Usa Restablecer para borrar los campos antes de un nuevo problema.",
            },
            {
              "kind": "p",
              "text": "La página no calcula ángulos, lados que faltan, área ni perímetro directamente; las calculadoras relacionadas al pie de la página se encargan de eso. Si solo conoces la hipotenusa, puedes hallar el circunradio, pero no el inradio.",
            },
          ],
          "h2": "Calcular el inradio o el circunradio de un triángulo rectángulo",
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "El inradio es el radio del círculo inscrito, el círculo más grande que cabe dentro de un triángulo. Toca cada uno de los tres lados en exactamente un punto, y es la distancia desde el centro del círculo hasta cualquier lado, medida en ángulo recto con el lado.",
            },
            {
              "kind": "p",
              "text": "El centro del círculo inscrito se llama incentro, etiquetado I, el punto donde se encuentran las tres bisectrices de los ángulos. Como se encuentra en cada bisectriz, está a la misma distancia de los tres lados, y esa distancia común es el inradio r, medido perpendicular a cada lado.",
            },
            {
              "kind": "p",
              "text": "En un triángulo rectángulo, el incentro siempre se encuentra dentro del triángulo, cerca del ángulo recto. Para el triángulo 6-8-10, el inradio es [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, así que el círculo inscrito es un círculo de radio 2 cm centrado en I.",
            },
            {
              "kind": "p",
              "text": "Un error común es medir el inradio desde el incentro hasta un vértice. Esa distancia es mayor que r y no es un radio del círculo inscrito: el inradio siempre termina en un lado, nunca en un vértice.",
            },
          ],
          "h2": "¿Qué es el inradio de un triángulo rectángulo?",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, círculo inscrito dentro que toca los tres lados, incentro I, e inradio r mostrado perpendicular a un lado",
            "caption": "El círculo inscrito toca los tres lados desde dentro, con centro I y radio r = 2 cm en el triángulo 6-8-10.",
            "src": "radius-incircle.svg",
          },
        },
        "sec-what-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "El circunradio es el radio del círculo circunscrito, el círculo que pasa por los tres vértices de un triángulo. Cada vértice se encuentra exactamente sobre el círculo, así que la distancia desde el centro hasta cualquier vértice es la misma, y esa distancia es el circunradio R.",
            },
            {
              "kind": "p",
              "text": "El centro del círculo circunscrito se llama circuncentro, etiquetado O, el punto donde se encuentran las mediatrices de los tres lados. Al encontrarse en cada mediatriz, O está a la misma distancia de los tres vértices.",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene un circuncentro especial: se encuentra en el punto medio de la hipotenusa. La hipotenusa es el diámetro del círculo circunscrito, así que la mitad de ella es el circunradio: [[R = \\frac{c}{2}]]. Para el triángulo 6-8-10, [[R = \\frac{10}{2} = 5]] cm, y el circuncentro O se encuentra en el punto medio de la hipotenusa de 10 cm.",
            },
            {
              "kind": "p",
              "text": "El circunradio se mide desde el circuncentro hasta cualquier vértice, nunca hasta un lado. En un triángulo rectángulo, el vértice del ángulo recto también se encuentra sobre el círculo circunscrito: el círculo alrededor del triángulo pasa también por la esquina del ángulo recto.",
            },
          ],
          "h2": "¿Qué es el circunradio de un triángulo rectángulo?",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, círculo circunscrito que pasa por los tres vértices, circuncentro O en el punto medio de la hipotenusa AB, y circunradio R",
            "caption": "El círculo circunscrito pasa por los tres vértices, con centro O en el punto medio de la hipotenusa y R = 5 cm.",
            "src": "radius-circumcircle.svg",
          },
        },
        "sec-difference": {
          "blocks": [
            {
              "kind": "p",
              "text": "Los dos radios describen dos círculos diferentes. El círculo inscrito está apretado dentro del triángulo y toca los lados, mientras que el círculo circunscrito envuelve el triángulo y pasa por los vértices. Un círculo es pequeño y está dentro, el otro es grande y está fuera, y sus centros se encuentran en lugares diferentes.",
            },
            {
              "kind": "p",
              "text": "Los centros también difieren. El incentro es el punto de encuentro de las bisectrices de los ángulos y se encuentra dentro del triángulo, cerca del ángulo recto. El circuncentro es el punto de encuentro de las mediatrices y se encuentra en el punto medio de la hipotenusa, en el borde del triángulo.",
            },
            {
              "kind": "p",
              "text": "Las entradas también difieren: el inradio necesita los tres lados, porque el círculo inscrito se forma por cómo los tres lados lo rodean, mientras que el circunradio solo necesita la hipotenusa, porque la hipotenusa por sí sola fija el círculo circunscrito como su diámetro. En el triángulo 6-8-10, [[r = 2]] cm y [[R = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente pone la comparación en un solo lugar. Lee a lo largo de cualquier fila para ver cómo se presenta la misma característica en cada círculo, y úsala como comprobación rápida cuando un problema mencione un radio sin decir cuál es.",
            },
          ],
          "h2": "Diferencia entre inradio y circunradio",
          "image": {
            "alt": "Triángulo rectángulo 6-8-10 que muestra el círculo inscrito pequeño dentro con radio 2 cm y el círculo circunscrito más grande alrededor con radio 5 cm, con el incentro I y el circuncentro O etiquetados",
            "caption": "El mismo triángulo, dos círculos: el círculo inscrito (r = 2 cm) dentro y el círculo circunscrito (R = 5 cm) alrededor.",
            "src": "radius-vs.svg",
          },
          "table": {
            "headers": [
              "Característica",
              "Inradio r",
              "Circunradio R",
            ],
            "rows": [
              [
                "Círculo",
                "Círculo inscrito",
                "Círculo circunscrito",
              ],
              [
                "Posición",
                "Dentro del triángulo",
                "Alrededor del triángulo",
              ],
              [
                "Contacto",
                "Tangente a los tres lados",
                "Pasa por los tres vértices",
              ],
              [
                "Centro",
                "Incentro",
                "Circuncentro",
              ],
              [
                "Fórmula",
                "(a + b - c) / 2",
                "c / 2",
              ],
              [
                "Datos necesarios",
                "a, b, c",
                "c",
              ],
              [
                "Medición",
                "Del centro a un lado",
                "Del centro a un vértice",
              ],
            ],
          },
        },
        "sec-inradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula del inradio para un triángulo rectángulo es:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a + b - c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí a es el primer cateto, b es el segundo cateto y c es la hipotenusa, el lado opuesto al ángulo recto. La fórmula necesita las tres longitudes de los lados, porque el círculo inscrito toca los tres lados y su tamaño depende de todos ellos. Si falta un lado, la respuesta no tiene sentido.",
            },
            {
              "kind": "p",
              "text": "Trabájala paso a paso con el triángulo 6-8-10. Suma los catetos: [[6 + 8 = 14]]. Resta la hipotenusa: [[14 - 10 = 4]]. Divide entre 2: [[r = \\frac{4}{2} = 2]] cm. El resultado lleva la misma unidad que las longitudes de los lados, centímetros aquí.",
            },
            {
              "kind": "p",
              "text": "El mismo valor se obtiene por una ruta de área: [[r = \\frac{Area}{s}]], donde [[s = \\frac{a + b + c}{2}]]. Para el triángulo 6-8-10, el área es 24 cm² y el semiperímetro es 12 cm, así que [[r = \\frac{24}{12} = 2]] cm. La <a href=\"/right-triangle-area-calculator/\">calculadora de área de triángulo rectángulo</a> halla el área cuando la necesites para esta comprobación.",
            },
            {
              "kind": "p",
              "text": "Una tercera forma, [[r = \\frac{ab}{a + b + c}]], es la misma fórmula con otra presentación. Es la forma de área con [[Area = \\frac{ab}{2}]] y [[s = \\frac{a + b + c}{2}]] sustituidas, y la sección de demostración siguiente muestra cómo se simplifica de nuevo a [[r = \\frac{a + b - c}{2}]].",
            },
          ],
          "h2": "Fórmula del inradio de un triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo con catetos a y b e hipotenusa c etiquetados, que muestra la fórmula del inradio r igual a a más b menos c sobre 2",
            "caption": "Fórmula del inradio: r = (a + b - c) / 2, usando las tres longitudes de los lados del triángulo.",
            "src": "radius-inradius-formula.svg",
          },
        },
        "sec-why-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración empieza en el incentro I. Como I está a la misma distancia r de los tres lados, el triángulo puede dividirse en tres triángulos más pequeños, cada uno con I como un vértice y un lado del triángulo grande como base.",
            },
            {
              "kind": "p",
              "text": "Cada triángulo pequeño tiene altura r, así que su área es la mitad de su base por r. Las tres áreas son [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] y [[\\frac{rc}{2}]]. Al sumarlas se obtiene el área de todo el triángulo:",
            },
            {
              "kind": "p",
              "text": "[[[Area = \\frac{ra}{2} + \\frac{rb}{2} + \\frac{rc}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Al sacar factor común r se obtiene [[Area = \\frac{r(a + b + c)}{2}]]. Como el semiperímetro es [[s = \\frac{a + b + c}{2}]], esto se convierte en la relación sencilla:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Al despejar se obtiene [[r = \\frac{Area}{s}]]. Para un triángulo rectángulo, [[Area = \\frac{ab}{2}]], así que [[r = \\frac{ab}{a + b + c}]]. El teorema de Pitágoras termina el trabajo: como [[a^2 + b^2 = c^2]], [[(a + b)^2 - c^2 = 2ab]], así que [[\\frac{ab}{a + b + c} = \\frac{a + b - c}{2}]]. Ambas formas son el mismo hecho, visto desde dos lados.",
            },
          ],
          "h2": "¿Por qué funciona la fórmula del inradio?",
        },
        "sec-circumradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula del circunradio para un triángulo rectángulo es:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí R es el circunradio y c es la hipotenusa completa. La fórmula tiene un solo dato porque la hipotenusa por sí sola determina el círculo circunscrito: es el diámetro de ese círculo, y un radio es la mitad de un diámetro.",
            },
            {
              "kind": "p",
              "text": "El desarrollo es el más corto de esta guía. Con [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. El circuncentro O se encuentra en el punto medio de la hipotenusa, a 5 cm de cada vértice.",
            },
            {
              "kind": "p",
              "text": "La forma de diámetro dice lo mismo al revés: [[c = 2R]]. Si conoces el circunradio y necesitas la hipotenusa, duplícalo. Un circunradio de 5 cm significa una hipotenusa de 10 cm, y un circunradio de 6.5 cm significa una hipotenusa de 13 cm.",
            },
            {
              "kind": "p",
              "text": "Este atajo pertenece solo a los triángulos rectángulos. En un triángulo sin ángulo recto, el circunradio depende de los tres lados, así que nunca lleves [[R = \\frac{c}{2}]] a uno de ellos. La <a href=\"/right-triangle-circumradius-calculator/\">calculadora de circunradio de triángulo rectángulo</a> dedicada cubre este cálculo con todo detalle.",
            },
          ],
          "h2": "Fórmula del circunradio de un triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo con hipotenusa c mostrada como el diámetro del círculo circunscrito, su punto medio O marcado, y la fórmula R igual a c sobre 2",
            "caption": "Fórmula del circunradio: R = c / 2, con la hipotenusa como el diámetro del círculo circunscrito.",
            "src": "radius-circumradius-formula.svg",
          },
        },
        "sec-why-diameter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Toma el triángulo ABC con el ángulo recto en C, y sea O el punto medio de la hipotenusa AB. La afirmación es que O es el circuncentro, a la misma distancia de A, B y C. Por construcción, [[AO = BO]], ya que O es el punto medio, así que la única distancia que falta comprobar es CO.",
            },
            {
              "kind": "p",
              "text": "Traza la mediana desde C hasta el punto medio O. En un triángulo rectángulo esta mediana es exactamente la mitad de la hipotenusa, así que [[CO = \\frac{AB}{2}]], lo que hace [[AO = BO = CO]]. Por tanto, O es equidistante de los tres vértices y es el circuncentro.",
            },
            {
              "kind": "p",
              "text": "Como AB pasa por O y sus dos extremos se encuentran sobre el círculo circunscrito, AB es un diámetro de ese círculo. Un diámetro es el doble de un radio, así que [[AB = 2R]], que es lo mismo que [[R = \\frac{c}{2}]]. La hipotenusa gana su papel de diámetro gracias al ángulo recto, no solo por su longitud.",
            },
            {
              "kind": "p",
              "text": "El teorema de Tales afirma la misma idea en la dirección contraria: cualquier ángulo inscrito en un semicírculo es un ángulo recto, así que la hipotenusa de un triángulo rectángulo debe ser el diámetro del círculo que pasa por sus vértices. El diagrama siguiente muestra ambos centros a la vez: el incentro I dentro del triángulo y el circuncentro O en el punto medio de la hipotenusa.",
            },
          ],
          "h2": "¿Por qué la hipotenusa es el diámetro del círculo circunscrito?",
          "image": {
            "alt": "Triángulo rectángulo que muestra el incentro I dentro del triángulo donde se encuentran las bisectrices de los ángulos y el circuncentro O en el punto medio de la hipotenusa donde se encuentran las mediatrices",
            "caption": "Dos centros diferentes: I es el punto de encuentro de las bisectrices de los ángulos, O es el punto de encuentro de las mediatrices.",
            "src": "radius-centers.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sigue la lista para el modo que necesites. Ambas empiezan etiquetando el triángulo correctamente, porque un cateto y una hipotenusa intercambiados son la causa más común de una respuesta incorrecta.",
            },
            {
              "kind": "h3",
              "text": "Uso del modo de inradio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el cateto a, el primer lado que forma el ángulo recto.",
                "Identifica el cateto b, el segundo lado que forma el ángulo recto.",
                "Identifica la hipotenusa c, el lado opuesto al ángulo recto y el lado más largo.",
                "Selecciona el modo Calculadora de inradio.",
                "Introduce las tres longitudes de los lados en la misma unidad.",
                "Selecciona la unidad que coincida con tus medidas.",
                "Haz clic en Calcular inradio r.",
                "Revisa el resultado y comprueba que sea positivo y menor que cualquiera de los catetos.",
                "Usa Restablecer al empezar otro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Antes de hacer clic en Calcular, confirma que las tres longitudes pueden formar un triángulo rectángulo: la hipotenusa debe ser mayor que cualquiera de los catetos, y [[a^2 + b^2]] debe ser igual a [[c^2]].",
            },
            {
              "kind": "h3",
              "text": "Uso del modo de circunradio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica la hipotenusa c, el lado opuesto al ángulo recto.",
                "Selecciona el modo Calculadora de circunradio.",
                "Introduce c en la unidad de tu elección.",
                "Selecciona la unidad que coincida con tu medida.",
                "Haz clic en Calcular circunradio R.",
                "Revisa el resultado, que debe ser exactamente la mitad de la hipotenusa.",
                "Usa Restablecer para un nuevo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "El modo de circunradio necesita una sola medida porque la hipotenusa es el diámetro del círculo circunscrito. No introduzcas un cateto aquí: es más corto que la hipotenusa, así que el resultado sería la mitad de la longitud equivocada.",
            },
          ],
          "h2": "Cómo usar la calculadora de radios de triángulo rectángulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa el triángulo rectángulo 6-8-10 con [[a = 6]] cm, [[b = 8]] cm y [[c = 10]] cm. Las dos partes siguientes hallan cada radio por turno, y luego comparan los resultados.",
            },
            {
              "kind": "h3",
              "text": "Parte 1: Calcular el inradio",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[r = \\frac{a + b - c}{2}]].",
                "Sustituye los valores: [[r = \\frac{6 + 8 - 10}{2}]].",
                "Suma y resta: [[r = \\frac{4}{2}]].",
                "Divide: [[r = 2]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "El círculo inscrito tiene un radio de 2 cm. Su centro I se encuentra a 2 cm de cada lado, y el círculo toca los dos catetos y la hipotenusa desde dentro del triángulo.",
            },
            {
              "kind": "h3",
              "text": "Parte 2: Calcular el circunradio",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[R = \\frac{c}{2}]].",
                "Sustituye el valor: [[R = \\frac{10}{2}]].",
                "Divide: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "El círculo circunscrito tiene un radio de 5 cm. Su centro O es el punto medio de la hipotenusa, y el círculo pasa por los tres vértices. Al comparar los dos resultados, el circunradio es dos veces y media el inradio, lo cual es normal: el círculo alrededor del triángulo es mucho más grande que el círculo dentro de él.",
            },
            {
              "kind": "p",
              "text": "Una comprobación rápida: el área es 24 cm² y el semiperímetro es 12 cm, así que [[r = \\frac{24}{12} = 2]] cm, que coincide con la Parte 1, y [[2R = 2 \\times 5 = 10]] cm, que coincide con c.",
            },
          ],
          "h2": "Ejemplo paso a paso: cálculo de ambos radios",
          "image": {
            "alt": "Triángulo rectángulo 6-8-10 con lados de 6, 8 y 10 cm, inradio de 2 cm, circunradio de 5 cm, área de 24 centímetros cuadrados y semiperímetro de 12 cm",
            "caption": "Ejemplo completo 6-8-10: a = 6, b = 8, c = 10, r = 2, R = 5, área 24 cm², s = 12 cm.",
            "src": "radius-complete-example.svg",
          },
        },
        "sec-examples-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, la sustitución y la respuesta final, y todos los ejemplos mantienen sus unidades coherentes de principio a fin. Los seis triángulos son triángulos rectángulos válidos, comprobados con el teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Triángulo básico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 3]] cm, [[b = 4]] cm y [[c = 5]] cm, [[r = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1]] cm. Comprobación: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Triángulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 5]] cm, [[b = 12]] cm y [[c = 13]] cm, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Comprobación: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Triángulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]] cm, [[b = 15]] cm y [[c = 17]] cm, [[r = \\frac{8 + 15 - 17}{2} = \\frac{6}{2} = 3]] cm. Comprobación: [[8^2 + 15^2 = 64 + 225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Medidas decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7.5]] cm, [[b = 10]] cm y [[c = 12.5]] cm, [[r = \\frac{7.5 + 10 - 12.5}{2} = \\frac{5}{2} = 2.5]] cm. Este es el triángulo 6-8-10 ampliado por 1.25, así que su inradio se amplía de la misma manera. Comprobación: [[7.5^2 + 10^2 = 56.25 + 100 = 156.25 = 12.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]] m, [[b = 12]] m y [[c = 15]] m, [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] m. Este es el triángulo 3-4-5 ampliado por 3. Comprobación: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 0.09]] m, [[b = 0.12]] m y [[c = 0.15]] m, convierte primero a centímetros: 9 cm, 12 cm y 15 cm. Luego [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] cm. Comprobación: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
          ],
          "h2": "Ejemplos resueltos de cálculo del inradio",
        },
        "sec-examples-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo de circunradio solo necesita la hipotenusa, así que cada uno es una sola división entre 2. La variedad proviene de las unidades y del tamaño de los números, no del método, que nunca cambia.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Hipotenusa de 10 cm",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. Este es el circunradio del triángulo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Hipotenusa de 13 cm",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Este es el circunradio del triángulo 5-12-13.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Hipotenusa de 24 m",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Hipotenusa de 7.5 cm",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. La comprobación del diámetro funciona al revés: [[2 \\times 3.75 = 7.5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Hipotenusa de 180 mm",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm, que son 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Hipotenusa de 1.2 m",
            },
            {
              "kind": "p",
              "text": "Dada [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m, que son 60 cm.",
            },
          ],
          "h2": "Ejemplos resueltos de cálculo del circunradio",
        },
        "sec-validity": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una respuesta de radio solo es tan buena como el triángulo que hay detrás, así que comprueba las medidas antes de calcular. Para un triángulo rectángulo, los lados deben satisfacer el teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "La hipotenusa también debe ser el lado más largo, así que [[c > a]] y [[c > b]]. Un cateto más largo que la hipotenusa no puede pertenecer a ningún triángulo rectángulo, y una hipotenusa más corta que un cateto significa que los lados se etiquetaron mal.",
            },
            {
              "kind": "p",
              "text": "Comprueba el triángulo 3-4-5: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]], así que los lados coinciden, y el inradio sale positivo: [[r = \\frac{3 + 4 - 5}{2} = 1]] cm. Un triángulo rectángulo válido no degenerado siempre da un inradio positivo, porque los catetos juntos son más largos que la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Las medidas inválidas se delatan en la fórmula del inradio. Si los catetos suman menos que la hipotenusa, r sale negativo, lo que no describe ningún círculo real, y si suman exactamente la hipotenusa, r es cero y el triángulo es plano. Cualquiera de los dos resultados significa que los datos son incorrectos. La <a href=\"/right-triangle-side-calculator/\">calculadora de lados de triángulo rectángulo</a> puede reconstruir un lado que falte a partir de medidas válidas.",
            },
          ],
          "h2": "Cómo comprobar si las medidas de tu triángulo rectángulo son válidas",
        },
        "sec-area-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "El inradio, el área y el semiperímetro de un triángulo están unidos por una sola relación, y funciona para cualquier triángulo, no solo para los triángulos rectángulos:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "El área mide cuánta superficie cubre el triángulo, el semiperímetro mide la mitad de su contorno, y su cociente es el radio del círculo que cabe dentro.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo, [[Area = \\frac{ab}{2}]], ya que los dos catetos son la base y la altura, y el circunradio se une mediante [[c = 2R]]. En el triángulo 6-8-10, el área es 24 cm², el semiperímetro es 12 cm, [[r = \\frac{24}{12} = 2]] cm y [[R = \\frac{10}{2} = 5]] cm. La altura sobre la hipotenusa sigue el mismo patrón: [[h = \\frac{ab}{c}]], que da [[h = \\frac{48}{10} = 4.8]] cm aquí.",
            },
            {
              "kind": "p",
              "text": "Los dos radios describen aspectos diferentes del mismo triángulo: el inradio depende del área y del perímetro juntos, mientras que el circunradio depende solo de la hipotenusa. Ninguno de los dos puede hallarse solo a partir del área.",
            },
          ],
          "h2": "Relación entre el inradio, el circunradio y el área del triángulo",
        },
        "sec-perimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "El perímetro de un triángulo rectángulo es [[P = a + b + c]], y el semiperímetro es la mitad de eso, [[s = \\frac{a + b + c}{2}]]. El inradio puede escribirse como [[r = \\frac{Area}{s}]], así que para un área fija, un semiperímetro mayor significa un inradio menor.",
            },
            {
              "kind": "p",
              "text": "Usa el triángulo 6-8-10: el perímetro es 24 cm, el semiperímetro es 12 cm, y con un área de 24 cm², [[r = \\frac{24}{12} = 2]] cm. Compara el triángulo 3-4-5: su perímetro es 12 cm, su semiperímetro es 6 cm, su área es 6 cm² y [[r = \\frac{6}{6} = 1]] cm.",
            },
            {
              "kind": "p",
              "text": "El perímetro por sí solo no puede determinar el inradio: dos triángulos pueden compartir un perímetro de 24 cm y tener áreas e inradios diferentes. No confundas el semiperímetro con el perímetro: usar P donde corresponde s reduciría la respuesta a la mitad. La <a href=\"/right-triangle-perimeter-semiperimeter-calculator/\">calculadora de perímetro y semiperímetro de triángulo rectángulo</a> halla ambos valores cuando los necesites.",
            },
          ],
          "h2": "Relación entre el inradio y el perímetro",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve propiedades se deducen directamente de las dos fórmulas. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "items": [
                "El inradio es siempre positivo en un triángulo válido no degenerado, porque los dos catetos juntos son más largos que la hipotenusa, así que [[a + b - c > 0]].",
                "El incentro se encuentra dentro del triángulo, en el punto de encuentro de las tres bisectrices de los ángulos.",
                "El inradio es perpendicular a cada lado en el punto de tangencia, ya que un radio hasta una tangente la encuentra en ángulo recto.",
                "El circuncentro se encuentra en el punto medio de la hipotenusa en un triángulo rectángulo, y en ningún otro lugar.",
                "El circunradio es exactamente la mitad de la hipotenusa, [[R = \\frac{c}{2}]], en todos los triángulos rectángulos.",
                "El círculo circunscrito pasa por los tres vértices, incluido el vértice del ángulo recto.",
                "El círculo inscrito es tangente a los tres lados y toca cada lado en exactamente un punto.",
                "El circunradio es mayor que el inradio en un triángulo rectángulo no degenerado, así que [[R > r]] siempre se cumple aquí.",
                "Los dos cálculos de radio necesitan medidas de entrada diferentes: el inradio necesita los tres lados, mientras que el circunradio solo necesita la hipotenusa.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "La última propiedad es la que los estudiantes olvidan con más frecuencia: cuando un problema solo da la hipotenusa, el circunradio está al alcance y el inradio no.",
            },
          ],
          "h2": "Propiedades importantes de los radios de triángulos rectángulos",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada error siguiente va seguido de su corrección. La mayoría se debe a confundir los dos círculos, no a la aritmética.",
            },
            {
              "items": [
                "Confundir el inradio con el circunradio: r pertenece al círculo dentro del triángulo, R al círculo alrededor de él. En el triángulo 6-8-10, r es 2 cm y R es 5 cm.",
                "Usar [[R = \\frac{c}{2}]] para calcular el inradio: dividir la hipotenusa entre dos da el circunradio, no r.",
                "Usar [[r = \\frac{a + b - c}{2}]] para calcular el circunradio: da un número menor que no tiene nada que ver con el círculo que pasa por los vértices.",
                "Introducir un cateto en lugar de la hipotenusa en el modo de circunradio: un cateto es más corto que la hipotenusa, así que dividirlo entre dos da la mitad de la longitud equivocada.",
                "Olvidar dividir entre dos en la fórmula del inradio: [[a + b - c]] por sí solo es el doble del inradio. En el triángulo 6-8-10, la suma es 4, pero r es 2.",
                "Olvidar dividir entre dos en la fórmula del circunradio: la hipotenusa completa es el diámetro, no el radio. Con c = 10 cm, R es 5 cm, no 10 cm.",
                "Introducir un triángulo inválido: si [[a^2 + b^2]] no es igual a [[c^2]], los lados no forman ningún triángulo rectángulo.",
                "Mezclar unidades: centímetros para un lado y metros para otro dan una resta sin sentido. Convierte todo a una unidad primero.",
                "Confundir el incentro con el circuncentro: el incentro está dentro del triángulo, el circuncentro está en el punto medio de la hipotenusa.",
                "Suponer que el círculo inscrito pasa por los vértices: el círculo inscrito toca los lados, y sus puntos nunca llegan a un vértice.",
                "Suponer que el círculo circunscrito toca los tres lados: el círculo circunscrito pasa por los vértices, y no toca ningún lado a lo largo de su longitud.",
                "Redondear demasiado pronto: mantén la precisión completa hasta el último paso, ya que redondear un valor intermedio desplaza la respuesta.",
                "Confundir el radio con el diámetro: el diámetro es el doble del radio, así que un circunradio de 5 cm significa un diámetro de 10 cm, que es la hipotenusa.",
                "Usar el modo de calculadora equivocado: el modo de inradio necesita tres datos y el modo de circunradio necesita uno. Elige el modo que coincida con las medidas que tienes.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Si una respuesta parece incorrecta, comprueba primero el modo, luego las etiquetas y luego las unidades. La mayoría de los errores anteriores desaparecen una vez seleccionado el modo correcto y bien identificada la hipotenusa.",
            },
          ],
          "h2": "Errores comunes al calcular el inradio y el circunradio",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es la tarea de geometría y el trabajo en clase, donde los problemas de radios ponen a prueba si los estudiantes pueden distinguir el círculo inscrito del círculo circunscrito y elegir la fórmula correcta para cada uno. Los docentes usan el triángulo 6-8-10 porque ambos radios salen como números enteros.",
            },
            {
              "kind": "p",
              "text": "La construcción de círculos es un segundo uso: dibujar un círculo inscrito necesita el incentro y el inradio, mientras que dibujar un círculo circunscrito necesita el circuncentro y el circunradio. El dibujo técnico usa las mismas ideas cuando una forma triangular debe encajarse con un agujero circular o colocarse dentro de un marco circular.",
            },
            {
              "kind": "p",
              "text": "Las demostraciones matemáticas usan ambos radios como pasos intermedios: [[Area = rs]] conecta el área, el perímetro y el inradio en una sola línea, y el teorema de Tales conecta el ángulo recto con el diámetro del círculo circunscrito. El modelado geométrico usa las mismas relaciones para calcular holguras, como qué tamaño debe tener una pieza circular para encerrar una pieza triangular.",
            },
            {
              "kind": "p",
              "text": "Una condición limita todas las aplicaciones: estas fórmulas describen triángulos y círculos ideales, no medidas aproximadas de campo, así que el trabajo de diseño práctico puede necesitar tolerancias adicionales más allá del radio solo.",
            },
          ],
          "h2": "Aplicaciones prácticas de los radios de triángulos",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta resolver los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos, y todos los triángulos son válidos.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Hallar el inradio",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos [[a = 5]] cm y [[b = 12]] cm e hipotenusa [[c = 13]] cm. Halla el inradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hallar el circunradio",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 26]] cm. Halla el circunradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcular ambos radios",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene [[a = 9]] cm, [[b = 40]] cm y [[c = 41]] cm. Halla tanto el inradio como el circunradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Verificar la validez del triángulo",
            },
            {
              "kind": "p",
              "text": "Se dice que un triángulo tiene lados de 7 cm, 24 cm y 25 cm. Comprueba con el teorema de Pitágoras que es un triángulo rectángulo, luego halla su inradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Inradio a partir del área y el semiperímetro",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos de 8 cm y 15 cm. Halla su área y su semiperímetro, luego usa [[r = \\frac{Area}{s}]] para hallar el inradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Identificar el modo correcto",
            },
            {
              "kind": "p",
              "text": "Solo sabes que la hipotenusa de un triángulo rectángulo es 18 cm. ¿Qué modo de calculadora puedes usar, qué radio puedes hallar y cuál es su valor? Explica por qué el otro radio no puede hallarse solo con esta información.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[R = \\frac{26}{2} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4]] cm y [[R = \\frac{41}{2} = 20.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[7^2 + 24^2 = 49 + 576 = 625 = 25^2]], así que es un triángulo rectángulo, y [[r = \\frac{7 + 24 - 25}{2} = \\frac{6}{2} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[Area = \\frac{8 \\times 15}{2} = 60]] cm², [[c = 17]] cm, [[s = \\frac{8 + 15 + 17}{2} = 20]] cm, así que [[r = \\frac{60}{20} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: Usa el modo de circunradio: [[R = \\frac{18}{2} = 9]] cm. El inradio no puede hallarse, porque [[r = \\frac{a + b - c}{2}]] necesita ambos catetos, y muchos triángulos rectángulos comparten una hipotenusa de 18 cm.",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-applications": "Aplicaciones prácticas de los radios de triángulos",
        "sec-area-relation": "Relación entre el inradio, el circunradio y el área del triángulo",
        "sec-calculate": "Calcular el inradio o el circunradio de un triángulo rectángulo",
        "sec-circumradius-formula": "Fórmula del circunradio de un triángulo rectángulo",
        "sec-difference": "Diferencia entre inradio y circunradio",
        "sec-examples-circumradius": "Ejemplos resueltos de cálculo del circunradio",
        "sec-examples-inradius": "Ejemplos resueltos de cálculo del inradio",
        "sec-faq": "Preguntas frecuentes",
        "sec-how-to-use": "Cómo usar la calculadora de radios de triángulo rectángulo",
        "sec-inradius-formula": "Fórmula del inradio de un triángulo rectángulo",
        "sec-intro": "Calculadora de radios de triángulo rectángulo",
        "sec-mistakes": "Errores comunes al calcular el inradio y el circunradio",
        "sec-perimeter-relation": "Relación entre el inradio y el perímetro",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-properties": "Propiedades importantes de los radios de triángulos rectángulos",
        "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "sec-step-example": "Ejemplo paso a paso: cálculo de ambos radios",
        "sec-validity": "Cómo comprobar si las medidas de tu triángulo rectángulo son válidas",
        "sec-what-circumradius": "¿Qué es el circunradio de un triángulo rectángulo?",
        "sec-what-inradius": "¿Qué es el inradio de un triángulo rectángulo?",
        "sec-why-diameter": "¿Por qué la hipotenusa es el diámetro del círculo circunscrito?",
        "sec-why-inradius": "¿Por qué funciona la fórmula del inradio?",
      },
    },
};
