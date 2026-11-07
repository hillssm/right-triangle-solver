// fiveTwelveThirteenGuideTranslations.bes.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de triángulo 5-12-13: escala lados, área y perímetro",
        "description": "Escala un triángulo 5-12-13: introduce un factor de escala positivo k para hallar los lados 5k, 12k y 13k, además del área 30k al cuadrado y el perímetro 30k.",
        "primaryKeyword": "Calculadora de triángulo 5-12-13",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Navegación por secciones",
      "tocItems": {
        "sec-intro": "Calculadora de triángulo 5-12-13",
        "sec-calculate": "Escala un triángulo 5-12-13 y calcula sus medidas",
        "sec-what": "¿Qué es un triángulo 5-12-13?",
        "sec-pythagorean": "¿Por qué 5-12-13 es una terna pitagórica?",
        "sec-sides": "Los tres lados de un triángulo 5-12-13",
        "sec-ratio": "La proporción de lados 5-12-13",
        "sec-scale-factor": "¿Qué es el factor de escala en un triángulo 5-12-13?",
        "sec-leg-a": "Fórmula para calcular el cateto menor",
        "sec-leg-b": "Fórmula para calcular el cateto mayor",
        "sec-hypotenuse": "Fórmula para calcular la hipotenusa",
        "sec-area": "Cómo calcular el área de un triángulo 5-12-13 escalado",
        "sec-perimeter": "Cómo calcular el perímetro de un triángulo 5-12-13 escalado",
        "sec-find-k": "Cómo hallar el factor de escala a partir de un lado conocido",
        "sec-step-example": "Ejemplo paso a paso de cómo escalar un triángulo 5-12-13",
        "sec-examples": "Ejemplos resueltos con distintos factores de escala",
        "sec-right-angle": "¿Por qué el triángulo 5-12-13 siempre conserva el ángulo de 90 grados?",
        "sec-euclid": "¿Cómo se genera la terna 5-12-13 con la fórmula de Euclides?",
        "sec-applications": "Aplicaciones del triángulo 5-12-13 en geometría y medición",
        "sec-vs-triples": "Diferencia entre 5-12-13 y otras ternas pitagóricas",
        "sec-vs-special": "Diferencia entre los triángulos 5-12-13, 45-45-90 y 30-60-90",
        "sec-mistakes": "Errores comunes al usar la calculadora de triángulo 5-12-13",
        "sec-verify": "Cómo verificar un triángulo 5-12-13 escalado",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de triángulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Escala un triángulo 5-12-13 y halla sus lados, su área y su perímetro.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 5-12-13 es un triángulo rectángulo cuyos lados siguen la proporción [[5 : 12 : 13]]. Es una terna pitagórica, porque sus lados de números enteros cumplen el teorema de Pitágoras: [[5^2 + 12^2 = 13^2]], ya que [[25 + 144 = 169]]. El lado de longitud 13 es la hipotenusa, y los lados de longitud 5 y 12 son los catetos que se encuentran en el ángulo recto.",
            },
            {
              "kind": "p",
              "text": "La calculadora escala ese triángulo con un factor de escala positivo [[k]], de modo que los lados escalados son [[a = 5k]], [[b = 12k]] y [[c = 13k]]. También calcula el área, [[A = 30k^2]], y el perímetro, [[P = 30k]], así que una sola entrada da los cinco resultados. Usa la <a href=\"/right-triangle-calculator/\">calculadora de triángulos rectángulos</a> para un triángulo rectángulo general.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, con [[k = 2]] los lados se convierten en [[a = 10]], [[b = 24]] y [[c = 26]], el área es [[A = 120]] unidades cuadradas y el perímetro es [[P = 60]] unidades.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Escala un triángulo 5-12-13 y calcula sus medidas",
          "blocks": [
            {
              "kind": "p",
              "text": "Una entrada, cinco resultados: introduce k y lee el triángulo escalado.",
            },
            {
              "kind": "p",
              "text": "La calculadora tiene un único modo, Escalar triángulo 5-12-13. Introduce un factor de escala positivo [[k]] en el cuadro de entrada y pulsa Calcular. La herramienta multiplica 5, 12 y 13 por [[k]] y luego calcula el área y el perímetro a partir de los lados escalados. Pulsa Restablecer para borrar la entrada y empezar de nuevo.",
            },
            {
              "kind": "p",
              "text": "El factor de escala es el número que estira o encoge el triángulo original. Con [[k = 1]] obtienes el triángulo original 5, 12, 13. Con [[k]] mayor que 1 el triángulo crece, y con [[k]] entre 0 y 1 se encoge, pero la forma nunca cambia.",
            },
            {
              "kind": "p",
              "text": "Todos los resultados proceden del mismo [[k]], así que las cinco salidas siempre concuerdan entre sí. Si [[k]] es cero o negativo, la calculadora no lo aceptará, porque cero da una figura degenerada y los valores negativos no pueden describir longitudes de lados.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Fórmula",
              "Resultado",
            ],
            "rows": [
              [
                "Cateto menor",
                "5k",
                "Lado escalado a",
              ],
              [
                "Cateto mayor",
                "12k",
                "Lado escalado b",
              ],
              [
                "Hipotenusa",
                "13k",
                "Lado escalado c",
              ],
              [
                "Área",
                "30k²",
                "Área del triángulo",
              ],
              [
                "Perímetro",
                "30k",
                "Perímetro del triángulo",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "¿Qué es un triángulo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo con lados de números enteros en la proporción 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 5-12-13 es un triángulo rectángulo cuyos tres lados miden 5, 12 y 13 unidades, o cualquier conjunto de longitudes en la misma proporción. El lado más largo, 13, es la hipotenusa y está opuesto al ángulo de 90 grados. Los lados de longitud 5 y 12 son los catetos, y se encuentran en el ángulo recto.",
            },
            {
              "kind": "p",
              "text": "Se llama terna pitagórica porque los tres números enteros cumplen [[5^2 + 12^2 = 13^2]]. Esa única comprobación es lo que convierte al triángulo en un triángulo rectángulo, no un dibujo ni una medición. Escala los lados por cualquier factor positivo y la proporción se mantiene en 5:12:13, así que el triángulo ampliado o reducido sigue siendo un triángulo rectángulo con la misma forma.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Triángulo rectángulo 5-12-13 ABC etiquetado, con el cateto menor a igual a 5, el cateto mayor b igual a 12, la hipotenusa c igual a 13 y un marcador de ángulo recto",
            "caption": "Triángulo ABC: los catetos a = 5 y b = 12 se encuentran en el ángulo recto, y la hipotenusa es c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "¿Por qué 5-12-13 es una terna pitagórica?",
          "blocks": [
            {
              "kind": "p",
              "text": "Los cuadrados de los catetos suman el cuadrado de la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "Los dos lados coinciden, así que la ecuación se cumple exactamente. Ese es el teorema de Pitágoras en acción: cuando los cuadrados de los dos lados más cortos suman el cuadrado del lado más largo, el ángulo opuesto al lado más largo debe ser un ángulo recto.",
            },
            {
              "kind": "p",
              "text": "El número 13 tiene que ser la hipotenusa porque es el lado más largo, y la hipotenusa siempre está opuesta al ángulo de 90 grados. Los números 5 y 12 son los catetos. Como 5, 12 y 13 son números enteros, la terna resulta práctica para tareas, exámenes y trabajos de medición donde importan las respuestas exactas.",
            },
            {
              "kind": "p",
              "text": "Esta comprobación es el recíproco del teorema de Pitágoras: el teorema dice que un triángulo rectángulo cumple [[a^2 + b^2 = c^2]], y el recíproco dice que cualquier triángulo cuyos lados cumplan la ecuación debe contener un ángulo recto. La mayoría de los triángulos rectángulos no tienen todos los lados de números enteros, y eso es lo que hace especial a una terna.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Diagrama del teorema de Pitágoras para un triángulo 5-12-13 que muestra que 25 más 144 es igual a 169",
            "caption": "25 + 144 = 169, así que el ángulo opuesto a 13 mide 90 grados.",
          },
        },
        "sec-sides": {
          "h2": "Los tres lados de un triángulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Tres lados, tres funciones: dos catetos y una hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El cateto menor [[a]] mide 5 en el triángulo básico. Está opuesto al ángulo agudo menor, de unos 22.62 grados, y es el lado que la mayoría de los estudiantes detecta primero porque es el más corto de los tres.",
            },
            {
              "kind": "p",
              "text": "El cateto mayor [[b]] mide 12 en el triángulo básico. Está opuesto al ángulo agudo mayor, de unos 67.38 grados. La hipotenusa [[c]] mide 13, el lado más largo, y está opuesta al ángulo de 90 grados. Cuando el triángulo se escala por [[k]], las etiquetas se mantienen en el mismo orden: [[a = 5k]], [[b = 12k]] y [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Longitud en el triángulo básico",
              "Posición",
            ],
            "rows": [
              [
                "Cateto menor a",
                "5",
                "Opuesto al ángulo de 22.62°",
              ],
              [
                "Cateto mayor b",
                "12",
                "Opuesto al ángulo de 67.38°",
              ],
              [
                "Hipotenusa c",
                "13",
                "Opuesto al ángulo de 90°",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "La proporción de lados 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "La proporción 5:12:13 nunca cambia, por muy grande que se haga el triángulo.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "El cateto menor representa 5 unidades proporcionales, el cateto mayor 12 y la hipotenusa 13.",
            },
            {
              "kind": "p",
              "text": "Escalar multiplica cada parte por el mismo [[k]], así que la proporción se convierte en [[[5k : 12k : 13k]]] con la misma forma subyacente. Los conjuntos 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52; y 25, 60, 65 describen todos el mismo triángulo a distintos tamaños, porque cada conjunto es la proporción básica multiplicada por 1, 2, 3, 4 y 5.",
            },
            {
              "kind": "p",
              "text": "Por eso la proporción es la verdadera identidad del triángulo. Dos triángulos con la misma proporción son semejantes: mismos ángulos, misma forma, distinto tamaño.",
            },
            {
              "kind": "p",
              "text": "Para comprobar un conjunto de medidas, divide los tres números por su máximo común divisor y comprueba si queda 5, 12, 13. Para 10, 24, 26 el divisor es 2, y al dividir se obtiene 5, 12, 13. Para 15, 36, 39 el divisor es 3, y al dividir se obtiene la misma terna. Si la división deja otros tres números, el conjunto no es un triángulo 5-12-13.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Tres triángulos semejantes etiquetados 5-12-13, 10-24-26 y 15-36-39 en tamaños crecientes",
            "caption": "Mismas proporciones, mismos ángulos: k = 1, k = 2 y k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "¿Qué es el factor de escala en un triángulo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "k es el multiplicador que fija el tamaño del triángulo.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Un factor de escala multiplica las tres longitudes originales de los lados por el mismo número positivo.",
            },
            {
              "kind": "p",
              "text": "Con [[k = 1]] obtienes el triángulo original. Con [[k]] mayor que 1 el triángulo crece, y con [[k]] entre 0 y 1 se encoge. El factor de escala cambia el tamaño, no la forma: todos los ángulos se mantienen iguales y todos los lados se mantienen en proporción.",
            },
            {
              "kind": "p",
              "text": "El mismo factor debe aplicarse a los tres lados. Escalar solo uno o dos lados rompe la proporción, rompe la comprobación pitagórica y el resultado ya no es un triángulo 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Un factor de escala también puede leerse como una proporción de lados correspondientes: divide un lado del triángulo nuevo por el lado correspondiente del original, y la respuesta es [[k]]. Por ejemplo, un cateto mayor de 36 frente al original de 12 da [[k = 36 / 12 = 3]]. Ese es el mismo [[k]] que pide la calculadora, hallado a partir de una medición en lugar de elegido de antemano.",
            },
          ],
          "table": {
            "headers": [
              "Factor de escala",
              "Efecto",
              "Lados de ejemplo",
            ],
            "rows": [
              [
                "k = 1",
                "Triángulo original",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Duplicado",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Reducido a la mitad",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Diez veces más grande",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Triángulo 5-12-13 escalado con k igual a 2, que muestra los lados a igual a 10, b igual a 24 y c igual a 26",
            "caption": "Con k = 2, los lados se convierten en 10, 24 y 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Fórmula para calcular el cateto menor",
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto menor es cinco veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "El cateto menor mide 20 unidades de longitud. Es el lado más pequeño con cualquier factor de escala, porque 5 es el número más pequeño de la proporción.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Fórmula para calcular el cateto mayor",
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto mayor es doce veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "El cateto mayor mide 48 unidades de longitud. Es más largo que el cateto menor porque 12 es mayor que 5, pero sigue siendo más corto que la hipotenusa con cualquier factor de escala positivo.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para calcular la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "La hipotenusa es trece veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "La hipotenusa mide 52 unidades de longitud. Se mantiene como el lado más largo con cualquier factor de escala positivo, porque 13 es el número más grande de la proporción y la hipotenusa siempre está opuesta al ángulo recto.",
            },
          ],
        },
        "sec-area": {
          "h2": "Cómo calcular el área de un triángulo 5-12-13 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "La mitad del producto de los dos catetos da el área.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye los lados escalados: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifica: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "Los dos catetos son la base y la altura, porque se encuentran en el ángulo recto. Reducir su producto a la mitad da el área del triángulo. El factor de escala va al cuadrado, así que duplicar [[k]] hace el área cuatro veces más grande. El área se mide en unidades cuadradas.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]: [[[A = 30(3^2) = 270]]] unidades cuadradas.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa nunca entra en la fórmula del área, porque el área de un triángulo rectángulo procede de sus dos catetos. Como comprobación con [[k = 2]], los catetos son 10 y 24, así que [[A = (10 \\times 24) / 2 = 120]] unidades cuadradas, lo que coincide con [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Diagrama del área de un triángulo 5-12-13 escalado con base 5k, altura 12k y área 30k al cuadrado",
            "caption": "Con k = 2, el área es 120 unidades cuadradas.",
          },
        },
        "sec-perimeter": {
          "h2": "Cómo calcular el perímetro de un triángulo 5-12-13 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "Suma los tres lados escalados para obtener el perímetro.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Cada lado cuenta, así que suma los tres. El perímetro crece en proporción directa a [[k]]: duplicar el factor de escala duplica el perímetro. El perímetro se mide en unidades lineales, no en unidades cuadradas.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]: [[[P = 30 \\times 3 = 90]]] unidades.",
            },
            {
              "kind": "p",
              "text": "Como comprobación con [[k = 2]], suma los lados escalados directamente: [[P = 10 + 24 + 26 = 60]] unidades, lo que coincide con [[P = 30 \\times 2 = 60]]. El perímetro responde a una pregunta distinta del área: mide la distancia alrededor del triángulo, no el espacio dentro de él.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Diagrama del perímetro de un triángulo 5-12-13 escalado con lados 5k, 12k y 13k que suman 30k",
            "caption": "Con k = 2, el perímetro es 60 unidades.",
          },
        },
        "sec-find-k": {
          "h2": "Cómo hallar el factor de escala a partir de un lado conocido",
          "blocks": [
            {
              "kind": "p",
              "text": "Divide un lado conocido por su número de la proporción para hallar k a mano.",
            },
            {
              "kind": "p",
              "text": "La calculadora toma [[k]] directamente, pero puedes calcular [[k]] tú mismo cuando ya conoces un lado. Divide el lado conocido por el número correspondiente de la proporción 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Si se conoce el cateto menor: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Si se conoce el cateto mayor: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Si se conoce la hipotenusa: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Ejemplo 1: con [[a = 20]], [[k = 20 / 5 = 4]]. Ejemplo 2: con [[b = 36]], [[k = 36 / 12 = 3]]. Ejemplo 3: con [[c = 65]], [[k = 65 / 13 = 5]]. Introduce la k que hallaste en la calculadora para obtener los otros lados, el área y el perímetro.",
            },
            {
              "kind": "p",
              "text": "A veces [[k]] no es un número entero. Con [[b = 30]], por ejemplo, [[k = 30 / 12 = 2.5]], y los otros lados son [[a = 5 \\times 2.5 = 12.5]] y [[c = 13 \\times 2.5 = 32.5]]. Cuando calculas [[k]] a partir de dos lados conocidos distintos, ambas respuestas deben coincidir; si no coinciden, las medidas no forman un triángulo 5-12-13.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Ejemplo paso a paso de cómo escalar un triángulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Factor de escala k = 2, resuelto de principio a fin.",
            },
            {
              "kind": "p",
              "text": "Empieza con [[k = 2]] y halla cada medida del triángulo escalado, una fórmula cada vez. Cada paso usa una fórmula de las secciones anteriores, y la tabla resumen del final recoge los resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Halla el cateto menor: [[a = 5k = 5 \\times 2 = 10]].",
                "Halla el cateto mayor: [[b = 12k = 12 \\times 2 = 24]].",
                "Halla la hipotenusa: [[c = 13k = 13 \\times 2 = 26]].",
                "Halla el área: [[A = 30k^2 = 30 \\times 4 = 120]] unidades cuadradas.",
                "Halla el perímetro: [[P = 30k = 30 \\times 2 = 60]] unidades.",
              ],
            },
            {
              "kind": "p",
              "text": "El nuevo triángulo conserva las proporciones originales 5:12:13: 10, 24 y 26 son todos el doble de 5, 12 y 13. Comprueba el ángulo recto con Pitágoras: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Valor",
            ],
            "rows": [
              [
                "Cateto menor a",
                "10",
              ],
              [
                "Cateto mayor b",
                "24",
              ],
              [
                "Hipotenusa c",
                "26",
              ],
              [
                "Área A",
                "120 unidades cuadradas",
              ],
              [
                "Perímetro P",
                "60 unidades",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos con distintos factores de escala",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho ejemplos resueltos, desde el triángulo original hasta k = 10.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: triángulo original, k = 1",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1]]. Lados: [[a = 5]], [[b = 12]], [[c = 13]]. Área: [[A = 30(1^2) = 30]] unidades cuadradas. Perímetro: [[P = 30(1) = 30]] unidades. Este es el triángulo original, la versión más pequeña de la terna en números enteros.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: factor de escala de 2",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 2]]. Lados: [[a = 10]], [[b = 24]], [[c = 26]]. Área: [[A = 30(2^2) = 120]] unidades cuadradas. Perímetro: [[P = 30(2) = 60]] unidades. Duplicar el factor de escala duplica cada lado y el perímetro, pero el área crece cuatro veces.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: factor de escala de 3",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 3]]. Lados: [[a = 15]], [[b = 36]], [[c = 39]]. Área: [[A = 30(3^2) = 270]] unidades cuadradas. Perímetro: [[P = 30(3) = 90]] unidades. Triplicar los lados triplica el perímetro, mientras que el área se multiplica por nueve respecto a la original.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: factor de escala de 4",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 4]]. Lados: [[a = 20]], [[b = 48]], [[c = 52]]. Área: [[A = 30(4^2) = 480]] unidades cuadradas. Perímetro: [[P = 30(4) = 120]] unidades. Cada lado es cuatro veces el original, y el área es dieciséis veces la original.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: factor de escala de 0.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 0.5]]. Lados: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Área: [[A = 30(0.5^2) = 7.5]] unidades cuadradas. Perímetro: [[P = 30(0.5) = 15]] unidades. Reducir el triángulo a la mitad reduce a la mitad los lados y el perímetro, mientras que el área baja a una cuarta parte.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: factor de escala de 1.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1.5]]. Lados: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Área: [[A = 30(1.5^2) = 67.5]] unidades cuadradas. Perímetro: [[P = 30(1.5) = 45]] unidades. Un factor de escala decimal funciona igual: multiplica cada lado por 1.5.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: factor de escala de 5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 5]]. Lados: [[a = 25]], [[b = 60]], [[c = 65]]. Área: [[A = 30(5^2) = 750]] unidades cuadradas. Perímetro: [[P = 30(5) = 150]] unidades. Un factor de escala de 5 da un triángulo mucho más grande, útil para trabajos de trazado donde el 5, 12, 13 básico es demasiado pequeño.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: factor de escala de 10",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 10]]. Lados: [[a = 50]], [[b = 120]], [[c = 130]]. Área: [[A = 30(10^2) = 3000]] unidades cuadradas. Perímetro: [[P = 30(10) = 300]] unidades. Con este tamaño los números se mantienen exactos, que es una ventaja de trabajar con una terna de números enteros.",
            },
            {
              "kind": "p",
              "text": "En los ocho ejemplos se mantiene el patrón: los lados y el perímetro crecen con [[k]], el área crece con [[k]] al cuadrado y la proporción 5:12:13 nunca cambia.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "¿Por qué el triángulo 5-12-13 siempre conserva el ángulo de 90 grados?",
          "blocks": [
            {
              "kind": "p",
              "text": "Escalar no puede romper la comprobación pitagórica.",
            },
            {
              "kind": "p",
              "text": "Los lados escalados son [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Aplica Pitágoras: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Desarrolla: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambos lados coinciden para todo [[k]] positivo, porque el factor [[k^2]] es común a los tres términos. Escalar estira el triángulo sin cambiar sus ángulos, así que el ángulo de 90 grados sobrevive a cualquier tamaño. Esa es la misma idea que los triángulos semejantes: misma forma, distinto tamaño.",
            },
            {
              "kind": "p",
              "text": "Los ángulos nunca cambian con la escala. Con cualquier [[k]] positivo los ángulos agudos se mantienen en unos 22.62 y 67.38 grados, porque el seno del ángulo menor es siempre [[5 / 13]] y el seno del ángulo mayor es siempre [[12 / 13]]. Solo se mueven las longitudes de los lados, y todas se mueven juntas.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Diagrama de ángulos de un triángulo 5-12-13 que muestra el ángulo de 90 grados y los ángulos agudos de unos 22.62 y 67.38 grados",
            "caption": "Los ángulos agudos son unos 22.62 y 67.38 grados, y suman 90 grados.",
          },
        },
        "sec-euclid": {
          "h2": "¿Cómo se genera la terna 5-12-13 con la fórmula de Euclides?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dos números pequeños, m = 3 y n = 2, generan toda la terna.",
            },
            {
              "kind": "p",
              "text": "La fórmula de Euclides construye ternas pitagóricas primitivas a partir de dos enteros positivos [[m]] y [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[m = 3]] y [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es la proporción enmarcada [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "La fórmula funciona cuando [[m]] es mayor que [[n]], los dos números no comparten ningún factor común y uno es par mientras el otro es impar. Esas condiciones dan una terna primitiva, una que no puede reducirse a una terna menor de números enteros. La fórmula de Euclides es un extra avanzado: la calculadora en sí solo necesita [[k]], pero la fórmula muestra de dónde proceden 5, 12 y 13.",
            },
            {
              "kind": "p",
              "text": "Otras elecciones de [[m]] y [[n]] generan otras ternas. Con [[m = 2]] y [[n = 1]] la fórmula da 3, 4 y 5. Con [[m = 4]] y [[n = 1]] da 15, 8 y 17, que es la terna 8-15-17 en otro orden. La terna 5-12-13 es el miembro de esta familia que procede de [[m = 3]] y [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Diagrama de flujo de la fórmula de Euclides con m igual a 3 y n igual a 2 que produce 5, 12 y 13",
            "caption": "m = 3 y n = 2 dan a = 5, b = 12 y c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Aplicaciones del triángulo 5-12-13 en geometría y medición",
          "blocks": [
            {
              "kind": "p",
              "text": "Un ángulo recto de números enteros es útil dondequiera que importen las esquinas exactas.",
            },
            {
              "kind": "p",
              "text": "En las tareas y la práctica de exámenes de geometría, la terna permite comprobar ángulos rectos rápidamente sin transportador: si tres longitudes encajan en 5:12:13, el ángulo entre los dos lados más cortos mide 90 grados. Los profesores la usan para ejercicios del teorema de Pitágoras, problemas de semejanza de triángulos y trabajos de dibujo a escala.",
            },
            {
              "kind": "p",
              "text": "Los constructores y carpinteros usan versiones escaladas para trazar esquinas cuadradas: marca 5 unidades a lo largo de un borde y 12 a lo largo del otro, y la diagonal debe medir 13. Los topógrafos y el trabajo de dibujo técnico se basan en la misma idea a escalas mayores, con 10, 24, 26 o 25, 60, 65 cuando el triángulo básico es demasiado pequeño.",
            },
            {
              "kind": "p",
              "text": "La proporción también ayuda en la modelización matemática y en las demostraciones en clase, donde los números enteros exactos mantienen la aritmética limpia. Para la construcción real, la precisión de las mediciones y las condiciones del lugar siguen importando, y esta proporción no sustituye la topografía profesional ni las normas de construcción.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Diferencia entre 5-12-13 y otras ternas pitagóricas",
          "blocks": [
            {
              "kind": "p",
              "text": "Toda terna primitiva es un triángulo rectángulo, pero cada una tiene su propia forma.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente compara cinco ternas primitivas conocidas. Todas cumplen el teorema de Pitágoras, pero sus proporciones de lados y sus ángulos agudos difieren, así que cada una crea un triángulo de forma distinta. Escalar una terna produce triángulos semejantes, nunca una terna distinta: 10, 24, 26 es un 5-12-13 escalado, mientras que 3, 4, 5 es una forma totalmente distinta.",
            },
            {
              "kind": "p",
              "text": "El triángulo 5-12-13 es más largo y estrecho que el triángulo 3-4-5: su cateto mayor es más del doble que su cateto menor, mientras que el 3-4-5 está más cerca del cuadrado. Esa diferencia se nota en los ángulos, con 22.62 y 67.38 grados aquí frente a 36.87 y 53.13 grados para el 3-4-5. Más información en la página de la <a href=\"/pythagorean-triples-calculator/\">calculadora de ternas pitagóricas</a>.",
            },
            {
              "kind": "p",
              "text": "Solo las ternas de la tabla son primitivas, es decir, sus tres números no comparten ningún divisor común mayor que 1. Una terna escalada como 6, 8, 10 o 10, 24, 26 no es primitiva, porque los tres números se dividen por 2. Las ternas primitivas son los miembros básicos de cada familia, y todos los demás miembros son copias escaladas de una de ellas.",
            },
          ],
          "table": {
            "headers": [
              "Terna pitagórica",
              "Proporción de lados",
              "Hipotenusa",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Diferencia entre los triángulos 5-12-13, 45-45-90 y 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El 5-12-13 tiene sus propios ángulos, no los ángulos estándar de los triángulos especiales.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 5-12-13 no es un triángulo 45-45-90 ni un triángulo 30-60-90. Sus ángulos agudos son unos 22.62 y 67.38 grados, y sus catetos son desiguales, así que pertenece a la familia de las ternas pitagóricas y no a ninguna de las dos familias de ángulos especiales.",
            },
            {
              "kind": "p",
              "text": "Usa la <a href=\"/45-45-90-triangle-calculator/\">calculadora de triángulo 45-45-90</a> para triángulos rectángulos isósceles y la <a href=\"/30-60-90-triangle-calculator/\">calculadora de triángulo 30-60-90</a> para la familia 30-60-90. La página 5-12-13 es la herramienta adecuada cuando los lados siguen la proporción 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Para saber a qué familia pertenece un triángulo rectángulo, comprueba sus ángulos o su proporción de lados. Catetos iguales y ángulos de 45 grados significan 45-45-90. Ángulos de 30 y 60 grados significan 30-60-90. Lados en la proporción 5:12:13, con ángulos cercanos a 22.62 y 67.38 grados, significan un triángulo 5-12-13. Las tres familias nunca se solapan.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Proporción de lados",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Ángulos",
                "22.62°, 67.38°, 90° aproximadamente",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Catetos iguales",
                "No",
                "Sí",
                "No",
              ],
              [
                "Propiedad principal",
                "Terna pitagórica",
                "Triángulo rectángulo isósceles",
                "Proporción de ángulos especiales",
              ],
              [
                "Hipotenusa",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Errores comunes al usar la calculadora de triángulo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce errores aparecen una y otra vez en los problemas de 5-12-13.",
            },
            {
              "kind": "steps",
              "steps": [
                "Tratar 13 como un cateto en lugar de la hipotenusa: 13 es el lado más largo y está opuesto al ángulo de 90 grados. [[c = 13k]] es siempre la hipotenusa.",
                "Confundir el cateto menor con el cateto mayor: [[a = 5k]] es el cateto menor y [[b = 12k]] es el cateto mayor. Mantén las etiquetas en orden.",
                "Escalar solo uno o dos lados: escalar solo los catetos rompe la proporción y el ángulo recto. Aplica el mismo [[k]] a todos los lados.",
                "Confundir el factor de escala con la longitud de un lado: [[k]] es el multiplicador, no un lado. Con [[k = 2]] los lados son 10, 24 y 26.",
                "Usar cero como factor de escala válido: [[k = 0]] hace que los tres lados sean cero, una figura degenerada, no un triángulo. [[k]] debe ser mayor que cero.",
                "Introducir un factor de escala negativo: un [[k]] negativo da longitudes de lado negativas, que no pueden describir un triángulo. Introduce solo un [[k]] positivo.",
                "Olvidar elevar k al cuadrado en la fórmula del área: el área crece con [[k]] al cuadrado. Con [[k = 3]] el área es [[A = 30 \\times 9 = 270]], no 90.",
                "Confundir área y perímetro: el área se mide en unidades cuadradas y usa [[A = 30k^2]], mientras que el perímetro se mide en unidades lineales y usa [[P = 30k]].",
                "Sumar solo dos lados al calcular el perímetro: el perímetro incluye los tres lados, así que [[P = 5k + 12k + 13k = 30k]].",
                "Mezclar unidades de medida: usa una sola unidad para los tres lados. Si los catetos están en centímetros, el área sale en centímetros cuadrados y el perímetro en centímetros.",
                "Suponer que solo 5, 12 y 13 funcionan: cualquier conjunto escalado como 10, 24, 26 o 15, 36, 39 sigue siendo un triángulo 5-12-13, porque la proporción es la misma.",
                "Suponer que todo triángulo rectángulo sigue la proporción 5:12:13: la mayoría de los triángulos rectángulos tienen otras longitudes de lados. La proporción se aplica solo cuando los lados encajan en 5:12:13.",
                "Confundir las ternas 5-12-13 y 3-4-5: 3, 4, 5 y 5, 12, 13 son ternas distintas con ángulos distintos. Comprueba la proporción antes de elegir una fórmula.",
                "Redondear las medidas sin necesidad: la terna da números enteros exactos, así que mantenlos exactos. Redondea solo cuando un factor de escala como 1.5 obligue a usar un decimal, y dilo.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo verificar un triángulo 5-12-13 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones rápidas confirman un triángulo 5-12-13 escalado.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: proporción de lados",
            },
            {
              "kind": "p",
              "text": "Los lados deben encajar en [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Los catetos deben cumplir [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: consistencia del factor de escala",
            },
            {
              "kind": "p",
              "text": "Cada lado dividido por su número de la proporción debe dar el mismo [[k]]: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: orden de los lados",
            },
            {
              "kind": "p",
              "text": "Los lados deben ir del más corto al más largo: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Usa 10, 24, 26 como ejemplo. La proporción es 10:24:26, que se reduce a 5:12:13, y la comprobación pitagórica da [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. La comprobación del factor de escala da [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Las cuatro comprobaciones se cumplen, así que las medidas forman un triángulo 5-12-13 escalado.",
            },
            {
              "kind": "p",
              "text": "Si alguna comprobación falla, vuelve a medir o a revisar la aritmética antes de confiar en los números. Una comprobación de la proporción fallida suele significar que un lado se escaló con un factor distinto, y una comprobación pitagórica fallida suele significar que el lado más largo se confundió con un cateto. Corrige el lado que rompe el patrón y vuelve a hacer las cuatro comprobaciones.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resuelve los ocho problemas en papel antes de leer las respuestas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: escalar con k = 2",
            },
            {
              "kind": "p",
              "text": "Escala un triángulo 5-12-13 con [[k = 2]]. Halla las tres longitudes de los lados, el área y el perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: escalar con k = 4",
            },
            {
              "kind": "p",
              "text": "Escala un triángulo 5-12-13 con [[k = 4]]. Halla las tres longitudes de los lados, el área y el perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: área con k = 3",
            },
            {
              "kind": "p",
              "text": "Halla el área de un triángulo 5-12-13 escalado con [[k = 3]], en unidades cuadradas.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: perímetro con k = 5",
            },
            {
              "kind": "p",
              "text": "Halla el perímetro de un triángulo 5-12-13 escalado con [[k = 5]], en unidades.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: hallar k a partir del cateto menor",
            },
            {
              "kind": "p",
              "text": "El cateto menor de un triángulo 5-12-13 escalado es 25. Halla el factor de escala [[k]] y luego los otros dos lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: hallar k a partir del cateto mayor",
            },
            {
              "kind": "p",
              "text": "El cateto mayor de un triángulo 5-12-13 escalado es 48. Halla el factor de escala [[k]] y luego los otros dos lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: hallar k a partir de la hipotenusa",
            },
            {
              "kind": "p",
              "text": "La hipotenusa de un triángulo 5-12-13 escalado es 78. Halla el factor de escala [[k]] y luego los dos catetos.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: verificar 15, 36 y 39",
            },
            {
              "kind": "p",
              "text": "¿Las longitudes de los lados 15, 36 y 39 forman un triángulo 5-12-13 escalado? Comprueba la proporción y el teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respuestas",
            },
            {
              "kind": "p",
              "text": "1. Lados 10, 24, 26; área 120 unidades cuadradas; perímetro 60 unidades.",
            },
            {
              "kind": "p",
              "text": "2. Lados 20, 48, 52; área 480 unidades cuadradas; perímetro 120 unidades.",
            },
            {
              "kind": "p",
              "text": "3. Área [[A = 30 \\times 9 = 270]] unidades cuadradas.",
            },
            {
              "kind": "p",
              "text": "4. Perímetro [[P = 30 \\times 5 = 150]] unidades.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; el cateto mayor es 60 y la hipotenusa es 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; el cateto menor es 20 y la hipotenusa es 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; el cateto menor es 30 y el cateto mayor es 72.",
            },
            {
              "kind": "p",
              "text": "8. Sí: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], y 15:36:39 se reduce a 5:12:13, así que [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea distinta de triángulos rectángulos, así que elige la herramienta que corresponda a la medida que necesitas.",
      "relatedItems": [
        "Calculadora de ternas pitagóricas",
        "Calculadora de triángulo 3-4-5",
        "Calculadora de lados de triángulo rectángulo",
        "Calculadora del teorema de Pitágoras",
        "Calculadora de área de triángulo rectángulo",
        "Calculadora de perímetro de triángulo rectángulo",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es un triángulo 5-12-13?",
          "answer": "Un triángulo 5-12-13 es un triángulo rectángulo con lados de longitud 5, 12 y 13, o cualquier conjunto escalado en la misma proporción. El lado de longitud 13 es la hipotenusa, y los lados de longitud 5 y 12 son los catetos que se encuentran en el ángulo recto.",
        },
        {
          "question": "¿Por qué 5-12-13 es un triángulo rectángulo?",
          "answer": "Porque sus lados cumplen el teorema de Pitágoras: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Cuando los cuadrados de los dos lados más cortos suman el cuadrado del lado más largo, el ángulo opuesto a ese lado mide 90 grados.",
        },
        {
          "question": "¿Cuál es la proporción de lados del triángulo 5-12-13?",
          "answer": "La proporción es 5:12:13: el cateto menor es 5 partes, el cateto mayor es 12 partes y la hipotenusa es 13 partes. Escalar multiplica cada parte por el mismo factor [[k]], así que la proporción nunca cambia.",
        },
        {
          "question": "¿Cómo funciona la calculadora de triángulo 5-12-13?",
          "answer": "Introduce un factor de escala positivo [[k]] y pulsa Calcular. La calculadora devuelve los lados escalados [[a = 5k]], [[b = 12k]] y [[c = 13k]], además del área [[A = 30k^2]] y el perímetro [[P = 30k]].",
        },
        {
          "question": "¿Qué es el factor de escala en un triángulo 5-12-13?",
          "answer": "El factor de escala [[k]] es el número que multiplica los tres lados del triángulo básico. Con [[k = 1]] obtienes el triángulo original; los valores mayores lo amplían y los valores entre 0 y 1 lo encogen.",
        },
        {
          "question": "¿Cómo calculo los lados de un triángulo 5-12-13 escalado?",
          "answer": "Multiplica cada lado básico por [[k]]: el cateto menor es [[a = 5k]], el cateto mayor es [[b = 12k]] y la hipotenusa es [[c = 13k]]. Para [[k = 4]] los lados son 20, 48 y 52.",
        },
        {
          "question": "¿Cómo calculo su área?",
          "answer": "Usa [[A = 30k^2]]. El área procede de la mitad del producto de los catetos, [[A = (5k)(12k) / 2]]. Con [[k = 3]] el área es 270 unidades cuadradas.",
        },
        {
          "question": "¿Cómo calculo su perímetro?",
          "answer": "Usa [[P = 30k]]. Suma los tres lados escalados: [[P = 5k + 12k + 13k]]. Con [[k = 3]] el perímetro es 90 unidades.",
        },
        {
          "question": "¿Puedo usar 10-24-26 en lugar de 5-12-13?",
          "answer": "Sí. El conjunto 10, 24, 26 es el triángulo 5-12-13 escalado por [[k = 2]], así que tiene la misma forma y los mismos ángulos. Cualquier múltiplo de 5, 12 y 13 funciona igual.",
        },
        {
          "question": "¿Cómo se genera la terna 5-12-13?",
          "answer": "La fórmula de Euclides con [[m = 3]] y [[n = 2]] da [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] y [[c = 3^2 + 2^2 = 13]]. Los valores 3 y 2 son coprimos y tienen paridad opuesta, así que la terna es primitiva.",
        },
        {
          "question": "¿Cuál es la diferencia entre 3-4-5 y 5-12-13?",
          "answer": "Ambas son ternas pitagóricas primitivas, pero sus proporciones difieren: 3-4-5 tiene ángulos de unos 36.87 y 53.13 grados, mientras que 5-12-13 tiene ángulos de unos 22.62 y 67.38 grados. Cada terna forma un triángulo de forma distinta.",
        },
        {
          "question": "¿Todo triángulo 5-12-13 escalado es un triángulo rectángulo?",
          "answer": "Sí. Para todo [[k]] positivo los lados escalados cumplen [[(5k)^2 + (12k)^2 = (13k)^2]], así que el teorema de Pitágoras se cumple y el ángulo opuesto al lado más largo se mantiene en 90 grados.",
        },
      ],
    },
};
