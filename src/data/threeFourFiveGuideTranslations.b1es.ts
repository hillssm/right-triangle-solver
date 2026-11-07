// threeFourFiveGuideTranslations.bes.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de Triángulo 3-4-5: escala lados, área y perímetro",
        "description": "Escala un triángulo 3-4-5 con esta calculadora: introduce un factor de escala positivo k para hallar los lados 3k, 4k y 5k, además del área 6k al cuadrado y el perímetro 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
      },
      "tocHeading": "Navegación por secciones",
      "tocItems": {
        "sec-intro": "Calculadora de Triángulo 3-4-5",
        "sec-calculate": "Escalar un triángulo 3-4-5 y calcular sus medidas",
        "sec-what": "¿Qué es un triángulo 3-4-5?",
        "sec-pythagorean": "¿Por qué 3-4-5 es una terna pitagórica?",
        "sec-sides": "Los tres lados de un triángulo 3-4-5",
        "sec-ratio": "La razón de lados 3-4-5",
        "sec-scale-factor": "¿Qué es el factor de escala en un triángulo 3-4-5?",
        "sec-leg-a": "Fórmula para calcular el primer cateto",
        "sec-leg-b": "Fórmula para calcular el segundo cateto",
        "sec-hypotenuse": "Fórmula para calcular la hipotenusa",
        "sec-area": "Cómo calcular el área de un triángulo 3-4-5 escalado",
        "sec-perimeter": "Cómo calcular el perímetro de un triángulo 3-4-5 escalado",
        "sec-find-k": "Cómo hallar el factor de escala a partir de un lado conocido",
        "sec-step-example": "Ejemplo paso a paso de cómo escalar un triángulo 3-4-5",
        "sec-examples": "Ejemplos resueltos con distintos factores de escala",
        "sec-right-angle": "¿Por qué el triángulo 3-4-5 mantiene siempre un ángulo de 90 grados?",
        "sec-construction": "Cómo usar la regla 3-4-5 para comprobar una esquina en escuadra",
        "sec-applications": "Aplicaciones del triángulo 3-4-5 en la construcción",
        "sec-similar": "Relación entre los triángulos semejantes y la razón 3-4-5",
        "sec-vs-special": "Diferencia entre los triángulos 3-4-5, 45-45-90 y 30-60-90",
        "sec-mistakes": "Errores comunes al usar la calculadora de triángulo 3-4-5",
        "sec-verify": "Cómo verificar un triángulo 3-4-5 escalado",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triángulo 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Escala un triángulo 3-4-5 y halla sus lados, su área y su perímetro.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 es un triángulo rectángulo cuyos lados siguen la razón [[3 : 4 : 5]]. Es la terna pitagórica más famosa, porque sus lados de números enteros cumplen el teorema de Pitágoras: [[3^2 + 4^2 = 5^2]], ya que [[9 + 16 = 25]]. El lado de longitud 5 es la hipotenusa, y los lados de longitud 3 y 4 son los catetos.",
            },
            {
              "kind": "p",
              "text": "La calculadora escala ese triángulo con un factor de escala positivo [[k]], así que los lados escalados son [[a = 3k]], [[b = 4k]] y [[c = 5k]]. También calcula el área, [[A = 6k^2]], y el perímetro, [[P = 12k]], así que una sola entrada da los cinco resultados. Usa la <a href=\"/right-triangle-calculator/\">calculadora de triángulos rectángulos</a> para un triángulo rectángulo general.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, con [[k = 2]] los lados se convierten en [[a = 6]], [[b = 8]] y [[c = 10]], el área es [[A = 24]] unidades cuadradas y el perímetro es [[P = 24]] unidades.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Escalar un triángulo 3-4-5 y calcular sus medidas",
          "blocks": [
            {
              "kind": "p",
              "text": "Un modo, una entrada y cinco resultados.",
            },
            {
              "kind": "p",
              "text": "La calculadora tiene un solo modo: escalar un triángulo 3-4-5. Introduce un factor de escala positivo [[k]] y pulsa Calcular, y te devuelve las tres longitudes de los lados escalados, el área y el perímetro. La tabla siguiente muestra cada medida con su fórmula.",
            },
            {
              "kind": "p",
              "text": "El factor de escala [[k]] multiplica cada lado original. Con [[k = 1]] obtienes el triángulo 3-4-5 original. Un valor mayor que 1 lo agranda, y un valor entre 0 y 1 lo reduce. La calculadora pide [[k]] porque la razón fija la forma: una vez conocido [[k]], todas las medidas se deducen.",
            },
            {
              "kind": "p",
              "text": "Introduce solo un número positivo. Si [[k = 0]], los tres lados se hacen cero, lo que es una figura degenerada y no un triángulo, y un [[k]] negativo no puede dar longitudes de lado válidas. Después de calcular, usa Restablecer para borrar el campo antes de empezar un problema nuevo.",
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
                "Primer cateto",
                "3k",
                "Lado escalado a",
              ],
              [
                "Segundo cateto",
                "4k",
                "Lado escalado b",
              ],
              [
                "Hipotenusa",
                "5k",
                "Lado escalado c",
              ],
              [
                "Área",
                "6k²",
                "Área del triángulo",
              ],
              [
                "Perímetro",
                "12k",
                "Perímetro del triángulo",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "¿Qué es un triángulo 3-4-5?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 recibe su nombre por las longitudes de sus tres lados.",
            },
            {
              "kind": "p",
              "text": "Es un triángulo rectángulo cuyos lados siguen la razón [[3 : 4 : 5]]. El lado más largo, 5, es la hipotenusa, y se encuentra frente al ángulo de 90 grados. Los otros dos lados, 3 y 4, son los catetos, y se encuentran en el ángulo recto. En el triángulo ABC, el ángulo C mide 90°, el lado [[a]] es el cateto más corto, de longitud 3, el lado [[b]] es el cateto más largo, de longitud 4, y el lado [[c]] es la hipotenusa, de longitud 5.",
            },
            {
              "kind": "p",
              "text": "Se llama terna pitagórica porque 3, 4 y 5 son números enteros que cumplen [[a^2 + b^2 = c^2]]. Esa propiedad de números enteros hace que el triángulo sea útil: constructores, profesores y estudiantes pueden comprobar un ángulo recto con medidas ordinarias de números enteros, sin raíces cuadradas ni decimales. Es la terna pitagórica más pequeña, y cada copia escalada, como 6-8-10, también lo es.",
            },
          ],
          "image": {
            "src": "three-four-five-main.svg",
            "alt": "Triángulo rectángulo 3-4-5 ABC etiquetado, con el cateto más corto a igual a 3, el cateto más largo b igual a 4, la hipotenusa c igual a 5 y un marcador de ángulo recto",
            "caption": "Triángulo ABC: los catetos a = 3 y b = 4 se encuentran en el ángulo recto, y la hipotenusa es c = 5.",
          },
        },
        "sec-pythagorean": {
          "h2": "¿Por qué 3-4-5 es una terna pitagórica?",
          "blocks": [
            {
              "kind": "p",
              "text": "Los números 3, 4 y 5 cumplen el teorema de Pitágoras de forma exacta.",
            },
            {
              "kind": "p",
              "text": "El teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye las longitudes de los lados 3-4-5:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Calcula cada cuadrado:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Ambos lados son iguales a 25, así que la ecuación se cumple. Una terna pitagórica es un conjunto de tres números enteros que cumple esta ecuación, y 3-4-5 es la más pequeña. La igualdad también funciona al revés: si un triángulo tiene lados de longitud 3, 4 y 5, el ángulo opuesto al lado de longitud 5 debe medir 90°.",
            },
            {
              "kind": "p",
              "text": "El lado de longitud 5 debe ser la hipotenusa porque es el lado más largo. Los lados de longitud 3 y 4 deben ser los catetos, porque se encuentran en el ángulo recto. La <a href=\"/pythagorean-triples-calculator/\">calculadora de ternas pitagóricas</a> muestra otras ternas de números enteros, incluida 5-12-13, una terna distinta.",
            },
          ],
          "image": {
            "src": "three-four-five-pythagoras.svg",
            "alt": "Diagrama pitagórico del triángulo 3-4-5 que muestra 3 al cuadrado más 4 al cuadrado igual a 5 al cuadrado, con 9 más 16 igual a 25",
            "caption": "3² + 4² = 5², ya que 9 + 16 = 25, así que 3-4-5 es una terna pitagórica.",
          },
        },
        "sec-sides": {
          "h2": "Los tres lados de un triángulo 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Dos catetos se encuentran en el ángulo recto, y la hipotenusa queda frente a él.",
            },
            {
              "kind": "p",
              "text": "El cateto más corto [[a]] tiene longitud 3 en el triángulo básico. Es el lado BC del triángulo ABC, y se encuentra frente al ángulo A, de unos 36.87°. El cateto más largo [[b]] tiene longitud 4, es el lado AC, y se encuentra frente al ángulo B, de unos 53.13°. Los dos catetos se encuentran en el vértice C, donde forman el ángulo de 90°.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa [[c]] tiene longitud 5, es el lado AB, y se encuentra frente al ángulo de 90°. Es el lado más largo, porque el ángulo mayor siempre queda frente al lado más largo. Cuando el triángulo se escala, los papeles nunca cambian: [[a]] sigue siendo el cateto más corto, [[b]] sigue siendo el cateto más largo y [[c]] sigue siendo la hipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Ángulo opuesto",
              "Longitud",
            ],
            "rows": [
              [
                "Cateto más corto a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Cateto más largo b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Hipotenusa c (AB)",
                "90°",
                "5, el lado más largo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "La razón de lados 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón 3:4:5 fija la forma de cada triángulo 3-4-5.",
            },
            {
              "kind": "p",
              "text": "La razón de lados de un triángulo 3-4-5 es:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte de la razón describe un lado. El cateto más corto representa 3 unidades proporcionales, el cateto más largo representa 4 unidades proporcionales y la hipotenusa representa 5 unidades proporcionales. Escrito con el factor de escala [[k]], los tres lados son [[a = 3k]], [[b = 4k]] y [[c = 5k]], así que la razón en forma escalada es [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "La razón no cambia cuando el triángulo se agranda o se reduce, porque multiplicar los tres lados por el mismo número deja sus proporciones intactas. Los conjuntos 3, 4, 5 y 6, 8, 10 y 9, 12, 15 y 15, 20, 25 representan todos la misma forma de triángulo en tamaños distintos.",
            },
          ],
          "image": {
            "src": "three-four-five-scaled.svg",
            "alt": "Tres triángulos 3-4-5 semejantes de distintos tamaños etiquetados 3-4-5, 6-8-10 y 9-12-15 con las mismas proporciones",
            "caption": "3-4-5, 6-8-10 y 9-12-15 tienen la misma forma y la misma razón 3:4:5.",
          },
        },
        "sec-scale-factor": {
          "h2": "¿Qué es el factor de escala en un triángulo 3-4-5?",
          "blocks": [
            {
              "kind": "p",
              "text": "El factor de escala multiplica cada lado por el mismo número.",
            },
            {
              "kind": "p",
              "text": "Un factor de escala [[k]] multiplica las tres longitudes originales por el mismo número positivo. Los lados escalados son:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Con [[k = 1]] obtienes el triángulo original, 3, 4, 5. Un valor de [[k]] mayor que 1 lo agranda, y un valor entre 0 y 1 lo reduce; por ejemplo, [[k = 0.5]] da 1.5, 2, 2.5. El factor de escala debe ser positivo: cero no da ningún triángulo, y un valor negativo no puede dar longitudes de lado válidas.",
            },
            {
              "kind": "p",
              "text": "El factor de escala cambia el tamaño, no la forma. Todas las longitudes correspondientes se mantienen proporcionales, los ángulos se mantienen iguales y la razón sigue siendo 3:4:5. La tabla siguiente muestra cómo cambian los lados, el área y el perímetro con [[k]]: el perímetro crece con [[k]] mientras que el área crece con [[k]] al cuadrado.",
            },
          ],
          "table": {
            "headers": [
              "Factor de escala k",
              "Lados",
              "Área",
              "Perímetro",
            ],
            "rows": [
              [
                "0.5",
                "1.5, 2, 2.5",
                "1.5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-scale-factor.svg",
            "alt": "Triángulo 3-4-5 escalado con factor de escala k igual a 2, con los lados etiquetados a igual a 6, b igual a 8 y c igual a 10",
            "caption": "Con k = 2, los lados son a = 6, b = 8 y c = 10.",
          },
        },
        "sec-leg-a": {
          "h2": "Fórmula para calcular el primer cateto",
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto más corto es tres veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[a]] es el cateto más corto y [[k]] es el factor de escala. La fórmula es una lectura directa de la razón: el cateto más corto representa 3 unidades por cada unidad de [[k]], así que multiplicar 3 por [[k]] da la longitud escalada. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es una longitud de lado escalada, no un ángulo ni un factor de escala. Siempre es más corto que los otros dos lados, porque 3 es la parte más pequeña de la razón 3:4:5, y sigue siendo el cateto más corto con cualquier factor de escala positivo.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Fórmula para calcular el segundo cateto",
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto más largo es cuatro veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[b]] es el cateto más largo y [[k]] es el factor de escala. El cateto más largo representa 4 unidades por cada unidad de [[k]], así que multiplicar 4 por [[k]] da la longitud escalada. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Este lado sigue siendo más largo que el primer cateto con cualquier factor de escala positivo, porque 4 es mayor que 3 y ambos lados se multiplican por el mismo [[k]]. También sigue siendo más corto que la hipotenusa, porque 4 es menor que 5. Mantén los dos catetos en el orden correcto: [[a]] es el lado 3 y [[b]] es el lado 4.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para calcular la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "La hipotenusa es cinco veces el factor de escala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[c]] es la hipotenusa y [[k]] es el factor de escala. La hipotenusa representa 5 unidades por cada unidad de [[k]], así que multiplicar 5 por [[k]] da la longitud escalada. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "La hipotenusa sigue siendo el lado más largo con cualquier factor de escala positivo, porque 5 es la parte mayor de la razón. Compruébala con los catetos: con [[k = 4]] los lados son 12, 16 y 20, y [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], así que el teorema de Pitágoras confirma el resultado.",
            },
          ],
        },
        "sec-area": {
          "h2": "Cómo calcular el área de un triángulo 3-4-5 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "El área usa los dos catetos, y el factor de escala va al cuadrado.",
            },
            {
              "kind": "p",
              "text": "El área de cualquier triángulo rectángulo es la mitad del producto de sus dos catetos, porque los catetos actúan como la base y la altura perpendicular:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye los catetos escalados, [[a = 3k]] y [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Simplifica:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "La división entre dos es necesaria porque un triángulo cubre la mitad del rectángulo formado por sus dos catetos. El factor [[k]] va al cuadrado porque ambos catetos llevan un factor de [[k]]. El área se mide en unidades cuadradas. Duplicar el factor de escala cuadruplica el área: con [[k = 2]] el área es 24 unidades cuadradas, cuatro veces las 6 unidades cuadradas con [[k = 1]]. Para un triángulo rectángulo general, usa la <a href=\"/right-triangle-area-calculator/\">calculadora de área de triángulos rectángulos</a>.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-area.svg",
            "alt": "Diagrama del área de un triángulo 3-4-5 con base 3k, altura 4k y área 6k al cuadrado, que muestra que k igual a 2 da 24 unidades cuadradas",
            "caption": "Área a partir de la base 3k y la altura 4k: A = 6k², y k = 2 da 24 unidades cuadradas.",
          },
        },
        "sec-perimeter": {
          "h2": "Cómo calcular el perímetro de un triángulo 3-4-5 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "Suma los tres lados, y el perímetro escala con k.",
            },
            {
              "kind": "p",
              "text": "El perímetro es la longitud total alrededor del triángulo:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye los lados escalados:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Simplifica:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Hay que sumar los tres lados, porque el perímetro recorre todo el contorno. Dejar fuera cualquier lado da una distancia más corta que no es el perímetro. El perímetro escala directamente con [[k]], así que duplicar [[k]] duplica el perímetro, a diferencia del área, que se cuadruplica. El perímetro va en unidades lineales, nunca en unidades cuadradas. Para un triángulo rectángulo general, usa la <a href=\"/right-triangle-perimeter-calculator/\">calculadora de perímetro de triángulos rectángulos</a>.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-perimeter.svg",
            "alt": "Diagrama del perímetro de un triángulo 3-4-5 que muestra P igual a 3k más 4k más 5k igual a 12k, con k igual a 2 que da 24 unidades",
            "caption": "Perímetro: P = 3k + 4k + 5k = 12k, y k = 2 da 24 unidades.",
          },
        },
        "sec-find-k": {
          "h2": "Cómo hallar el factor de escala a partir de un lado conocido",
          "blocks": [
            {
              "kind": "p",
              "text": "Divide un lado conocido entre su parte de la razón.",
            },
            {
              "kind": "p",
              "text": "La calculadora acepta [[k]] directamente, así que estas ecuaciones son cálculos manuales que te ayudan a hallar [[k]] cuando ya conoces un lado. Divide el lado conocido entre el número que ese lado representa en la razón 3:4:5. Si se conoce el cateto más corto:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Si se conoce el cateto más largo:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Si se conoce la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Tres ejemplos cortos: el cateto más corto [[a = 12]] da [[k = 12 / 3 = 4]]; el cateto más largo [[b = 20]] da [[k = 20 / 4 = 5]]; la hipotenusa [[c = 30]] da [[k = 30 / 5 = 6]]. Una vez que tengas [[k]], introdúcelo en la calculadora. La calculadora por sí misma no acepta una longitud de lado para hallar [[k]].",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Ejemplo paso a paso de cómo escalar un triángulo 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Factor de escala k = 2, resuelto de principio a fin.",
            },
            {
              "kind": "p",
              "text": "Empieza con [[k = 2]] y halla cada medida del triángulo escalado, una fórmula a la vez. Cada paso usa una fórmula de las secciones anteriores, y la tabla resumen del final reúne los resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Halla el primer cateto: [[a = 3k = 3 \\times 2 = 6]].",
                "Halla el segundo cateto: [[b = 4k = 4 \\times 2 = 8]].",
                "Halla la hipotenusa: [[c = 5k = 5 \\times 2 = 10]].",
                "Halla el área: [[A = 6k^2 = 6 \\times 4 = 24]] unidades cuadradas.",
                "Halla el perímetro: [[P = 12k = 12 \\times 2 = 24]] unidades.",
              ],
            },
            {
              "kind": "p",
              "text": "El triángulo nuevo mantiene las proporciones originales 3:4:5: 6, 8 y 10 son todos el doble de 3, 4 y 5. Comprueba el ángulo recto con Pitágoras: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. El área y el perímetro coinciden en el número 24 aquí, pero miden cosas distintas.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Valor",
            ],
            "rows": [
              [
                "Primer cateto a",
                "6",
              ],
              [
                "Segundo cateto b",
                "8",
              ],
              [
                "Hipotenusa c",
                "10",
              ],
              [
                "Área A",
                "24 unidades cuadradas",
              ],
              [
                "Perímetro P",
                "24 unidades",
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
              "text": "Ejemplo 1: Triángulo original, k = 1",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1]]. Lados: [[a = 3]], [[b = 4]], [[c = 5]]. Área: [[A = 6(1^2) = 6]] unidades cuadradas. Perímetro: [[P = 12(1) = 12]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Factor de escala de 2",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 2]]. Lados: [[a = 6]], [[b = 8]], [[c = 10]]. Área: [[A = 6(2^2) = 24]] unidades cuadradas. Perímetro: [[P = 12(2) = 24]] unidades. Duplicar [[k]] duplica los lados y el perímetro, y cuadruplica el área.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Factor de escala de 3",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 3]]. Lados: [[a = 9]], [[b = 12]], [[c = 15]]. Área: [[A = 6(3^2) = 54]] unidades cuadradas. Perímetro: [[P = 12(3) = 36]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Factor de escala de 5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 5]]. Lados: [[a = 15]], [[b = 20]], [[c = 25]]. Área: [[A = 6(5^2) = 150]] unidades cuadradas. Perímetro: [[P = 12(5) = 60]] unidades. Este triángulo 15-20-25 es un tamaño habitual en el trazado de obras.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Factor de escala de 0.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 0.5]]. Lados: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Área: [[A = 6(0.5^2) = 1.5]] unidades cuadradas. Perímetro: [[P = 12(0.5) = 6]] unidades. Un factor de escala menor que 1 reduce el triángulo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Factor de escala de 1.5",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 1.5]]. Lados: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Área: [[A = 6(1.5^2) = 13.5]] unidades cuadradas. Perímetro: [[P = 12(1.5) = 18]] unidades. Los factores de escala decimales funcionan exactamente igual que los de números enteros.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Factor de escala de 4",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 4]]. Lados: [[a = 12]], [[b = 16]], [[c = 20]]. Área: [[A = 6(4^2) = 96]] unidades cuadradas. Perímetro: [[P = 12(4) = 48]] unidades.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Factor de escala de 10",
            },
            {
              "kind": "p",
              "text": "Dado [[k = 10]]. Lados: [[a = 30]], [[b = 40]], [[c = 50]]. Área: [[A = 6(10^2) = 600]] unidades cuadradas. Perímetro: [[P = 12(10) = 120]] unidades. El área ha crecido por un factor de 100, mientras que los lados han crecido por un factor de 10.",
            },
            {
              "kind": "p",
              "text": "En los ocho ejemplos, el patrón nunca cambia: los lados crecen con [[k]], el perímetro crece con [[k]] y el área crece con [[k]] al cuadrado.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "¿Por qué el triángulo 3-4-5 mantiene siempre un ángulo de 90 grados?",
          "blocks": [
            {
              "kind": "p",
              "text": "Escalar nunca rompe la relación pitagórica.",
            },
            {
              "kind": "p",
              "text": "Los lados escalados son [[3k]], [[4k]] y [[5k]]. Aplícales el teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Desarrolla cada cuadrado:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Ambos lados son iguales a [[25k^2]], así que la relación se cumple para todo [[k]] positivo. El factor [[k^2]] aparece en ambos lados, y por eso escalar no puede cambiar el ángulo. Los dos ángulos agudos se mantienen en unos 36.87° y 53.13°, y su suma sigue siendo 90°, así que el tercer ángulo se mantiene en exactamente 90°.",
            },
            {
              "kind": "p",
              "text": "Esta es la misma idea que la semejanza: cada triángulo 3-4-5 escalado es semejante al original, con ángulos correspondientes iguales y lados proporcionales. Un triángulo de lados 6, 8, 10 tiene los mismos ángulos que uno de lados 3, 4, 5.",
            },
          ],
        },
        "sec-construction": {
          "h2": "Cómo usar la regla 3-4-5 para comprobar una esquina en escuadra",
          "blocks": [
            {
              "kind": "p",
              "text": "Marca 3, mide 4 y comprueba que la diagonal sea 5.",
            },
            {
              "kind": "p",
              "text": "Los constructores usan el método 3-4-5 para comprobar un ángulo de 90 grados sin una escuadra. Empieza en la esquina y marca 3 unidades en un lado, luego marca 4 unidades en el lado contiguo. Mide la distancia entre los dos extremos marcados: si es de 5 unidades, el ángulo mide 90 grados, según la precisión de la medición.",
            },
            {
              "kind": "p",
              "text": "Un ejemplo práctico usa pies: 3 pies en una dirección, 4 pies en la dirección contigua y una diagonal de 5 pies. La comprobación es [[3^2 + 4^2 = 5^2]], ya que [[9 + 16 = 25]]. Si la diagonal mide más de 5 pies, la esquina es más abierta que 90 grados; si mide menos, es más cerrada.",
            },
            {
              "kind": "p",
              "text": "Los múltiplos mayores funcionan mejor en trazados grandes, porque una base más larga hace que un pequeño error de marcado sea una parte menor de la medición. Usa 6-8-10, 9-12-15, 12-16-20 o 15-20-25 pies, con la misma unidad en las tres medidas.",
            },
            {
              "kind": "p",
              "text": "El método comprueba la relación del ángulo recto cuando las medidas son precisas. Los errores, las superficies irregulares, la comba de la cinta y las imprecisiones de marcado pueden afectar el resultado, así que no afirmes que garantiza una precisión perfecta en la obra. Mantén la cinta nivelada y tensa, y repite la comprobación desde la otra esquina cuando el trazado lo permita.",
            },
          ],
          "image": {
            "src": "three-four-five-construction.svg",
            "alt": "Trazado de obra que muestra una esquina con 3 pies marcados en una dirección, 4 pies en la dirección contigua y una diagonal de 5 pies con un marcador de ángulo recto",
            "caption": "Marca 3 pies en un sentido y 4 pies en el otro: una diagonal de 5 pies significa una esquina en escuadra.",
          },
        },
        "sec-applications": {
          "h2": "Aplicaciones del triángulo 3-4-5 en la construcción",
          "blocks": [
            {
              "kind": "p",
              "text": "La regla 3-4-5 aparece dondequiera que importe una esquina en escuadra.",
            },
            {
              "kind": "p",
              "text": "Comprobar las esquinas en ángulo recto es el uso principal: un constructor marca 3 y 4 unidades desde una esquina y comprueba la diagonal de 5 unidades antes de fijar un marco en su sitio. El trazado de cimientos usa la misma comprobación en cada esquina, para que las paredes empiecen en escuadra.",
            },
            {
              "kind": "p",
              "text": "El replanteo de planos de planta, la comprobación de habitaciones cuadradas, la construcción de terrazas, la instalación de patios y la colocación de baldosas dependen de esquinas en escuadra, y el método sirve para cada una de ellas a la escala que convenga al trabajo. El trazado de vallas, la carpintería, el paisajismo y la topografía usan la misma comprobación para los ángulos rectos.",
            },
            {
              "kind": "p",
              "text": "Usa medidas realistas para el trabajo, como 3-4-5 pies para un marco pequeño o 9-12-15 pies para la esquina de unos cimientos. El método es una comprobación práctica, no un sustituto de la topografía profesional ni de los requisitos de la obra.",
            },
          ],
        },
        "sec-similar": {
          "h2": "Relación entre los triángulos semejantes y la razón 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Cada triángulo 3-4-5 escalado es semejante al original.",
            },
            {
              "kind": "p",
              "text": "Los triángulos semejantes tienen la misma forma pero distinto tamaño: sus ángulos correspondientes son iguales y sus lados correspondientes son proporcionales. Los triángulos 3-4-5 y 6-8-10 tienen ángulos idénticos, de unos 36.87°, 53.13° y 90°, y cada lado del segundo es exactamente el doble del lado correspondiente del primero.",
            },
            {
              "kind": "p",
              "text": "El factor de escala cambia el tamaño mientras la forma se mantiene. Todas las razones de lados se mantienen en 3:4:5, así que [[a : b : c = 3 : 4 : 5]] se cumple para el original y para cada copia escalada. Por eso la calculadora puede describir cualquier triángulo 3-4-5 escalado con un solo número, [[k]].",
            },
          ],
        },
        "sec-vs-special": {
          "h2": "Diferencia entre los triángulos 3-4-5, 45-45-90 y 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Tres triángulos rectángulos, tres razones de lados distintas.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 no es automáticamente un triángulo 45-45-90 ni un triángulo 30-60-90. Los tres son triángulos rectángulos, pero sus ángulos y razones de lados difieren, así que sus fórmulas no se pueden intercambiar. El triángulo 3-4-5 tiene catetos desiguales y lados de números enteros, el triángulo 45-45-90 es isósceles con una hipotenusa de [[a\\sqrt{2}]], y el triángulo 30-60-90 tiene una hipotenusa que es el doble de su cateto corto. La <a href=\"/special-right-triangle-calculator/\">calculadora de triángulos rectángulos especiales</a> cubre los casos 45-45-90 y 30-60-90, mientras que la <a href=\"/5-12-13-triangle-calculator/\">calculadora de triángulo 5-12-13</a> cubre otra terna pitagórica distinta.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente compara los tres triángulos lado a lado. Confirma primero los ángulos y luego elige la razón que les corresponda: la razón equivocada da una hipotenusa equivocada y un área equivocada.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Razón de lados",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Ángulos",
                "36.87°, 53.13°, 90°",
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
                "Hipotenusa",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Propiedad principal",
                "Terna pitagórica",
                "Triángulo rectángulo isósceles",
                "Razón de ángulos especiales",
              ],
              [
                "Enfoque de la calculadora",
                "Escalado",
                "Cálculos de triángulos especiales",
                "Cálculos de triángulos especiales",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-triples.svg",
            "alt": "Comparación de las ternas pitagóricas 3-4-5, 6-8-10 y 5-12-13, que muestra que 6-8-10 es un 3-4-5 escalado mientras que 5-12-13 es otra terna distinta",
            "caption": "6-8-10 es un 3-4-5 escalado, mientras que 5-12-13 es otra terna pitagórica distinta.",
          },
        },
        "sec-mistakes": {
          "h2": "Errores comunes al usar la calculadora de triángulo 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce errores aparecen una y otra vez en los problemas 3-4-5.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplicar solo un lado por el factor de escala: con [[k = 2]] los lados son 6, 8 y 10, no 6, 4 y 5. Escala los tres lados por el mismo [[k]].",
                "Olvidar escalar los tres lados por igual: escalar solo los catetos rompe la razón y el ángulo recto. Aplica el mismo [[k]] a cada lado.",
                "Tratar el 5 como un cateto en lugar de la hipotenusa: 5 es el lado más largo y queda frente al ángulo de 90°. [[c = 5k]] es siempre la hipotenusa.",
                "Confundir el factor de escala con una longitud de lado: [[k]] es el multiplicador, no un lado. Con [[k = 2]] los lados son 6, 8 y 10.",
                "Usar cero como factor de escala válido: [[k = 0]] hace que los tres lados sean cero, una figura degenerada, no un triángulo. [[k]] debe ser mayor que cero.",
                "Introducir un factor de escala negativo: un [[k]] negativo da longitudes de lado negativas, que no pueden describir un triángulo. Introduce solo un [[k]] positivo.",
                "Olvidar elevar k al cuadrado en la fórmula del área: el área crece con [[k]] al cuadrado. Con [[k = 3]], [[A = 6 \\times 9 = 54]], no 18.",
                "Confundir el área con el perímetro: el área va en unidades cuadradas y el perímetro en unidades lineales. Con [[k = 2]] ambos son 24, pero miden cosas distintas.",
                "Sumar solo dos lados al calcular el perímetro: con [[k = 2]], [[6 + 8 = 14]] deja fuera la hipotenusa. Suma los tres lados.",
                "Mezclar unidades de medida: un cateto en pies y una diagonal en pulgadas no se pueden combinar directamente. Convierte todas las medidas a una sola unidad primero.",
                "Suponer que solo 3, 4 y 5 funcionan: cualquier copia escalada, como 6-8-10 o 9-12-15, es un triángulo 3-4-5 válido.",
                "Suponer que todo triángulo rectángulo sigue la razón 3:4:5: la mayoría de los triángulos rectángulos tienen otras razones. Confirma la razón antes de usar las fórmulas.",
                "Confundir un triángulo 3-4-5 con un triángulo 45-45-90: un triángulo 3-4-5 tiene ángulos de unos 36.87° y 53.13°, no dos ángulos de 45°.",
                "Redondear las medidas sin necesidad: redondear pronto traslada los errores a los pasos siguientes. Redondea solo la respuesta final.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo verificar un triángulo 3-4-5 escalado",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones rápidas detectan casi todos los errores.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Razón de lados",
            },
            {
              "kind": "p",
              "text": "Confirma [[a : b : c = 3 : 4 : 5]]. Aquí [[6 : 8 : 10]] se divide entre 2 y da [[3 : 4 : 5]], así que la comprobación pasa. Si los lados no se reducen a 3:4:5, no son un triángulo 3-4-5 escalado.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirma [[a^2 + b^2 = c^2]]. Aquí [[6^2 + 8^2 = 36 + 64 = 100]], y [[10^2 = 100]], así que el teorema se cumple. Un valor erróneo en cualquier lado rompe esta igualdad.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Coherencia del factor de escala",
            },
            {
              "kind": "p",
              "text": "Confirma [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Aquí cada división da 2, así que [[k = 2]] a partir de los tres lados. Si las tres divisiones difieren, al menos un lado está mal.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Orden de los lados",
            },
            {
              "kind": "p",
              "text": "Confirma [[a < b < c]]. Aquí [[6 < 8 < 10]], así que el orden se cumple. Si la supuesta hipotenusa no es el lado más largo, las etiquetas están mezcladas.",
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
              "text": "Problema 1: Escalar con k = 2",
            },
            {
              "kind": "p",
              "text": "Escala un triángulo 3-4-5 con [[k = 2]]. Halla las tres longitudes de los lados, el área y el perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Escalar con k = 4",
            },
            {
              "kind": "p",
              "text": "Escala un triángulo 3-4-5 con [[k = 4]]. Halla las tres longitudes de los lados, el área y el perímetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Área con k = 3",
            },
            {
              "kind": "p",
              "text": "Halla el área de un triángulo 3-4-5 escalado con [[k = 3]], en unidades cuadradas.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Perímetro con k = 5",
            },
            {
              "kind": "p",
              "text": "Halla el perímetro de un triángulo 3-4-5 escalado con [[k = 5]], en unidades.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Hallar k a partir de a = 15",
            },
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 escalado tiene un cateto más corto de 15. Halla [[k]] y los otros dos lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Hallar k a partir de b = 24",
            },
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 escalado tiene un cateto más largo de 24. Halla [[k]] y los otros dos lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: Hallar k a partir de c = 35",
            },
            {
              "kind": "p",
              "text": "Un triángulo 3-4-5 escalado tiene una hipotenusa de 35. Halla [[k]] y los dos catetos.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: Verificar 12, 16 y 20",
            },
            {
              "kind": "p",
              "text": "Comprueba si 12, 16 y 20 forman un triángulo 3-4-5 escalado, con el teorema de Pitágoras y la razón de lados. Si es así, indica el factor de escala.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] unidades cuadradas, [[P = 24]] unidades.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] unidades cuadradas, [[P = 48]] unidades.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[A = 6(3^2) = 54]] unidades cuadradas.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[P = 12(5) = 60]] unidades.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[k = 15 / 3 = 5]], así que [[b = 20]] y [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[k = 24 / 4 = 6]], así que [[a = 18]] y [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 7: [[k = 35 / 5 = 7]], así que [[a = 21]] y [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], y [[12 : 16 : 20]] se divide entre 4 y da [[3 : 4 : 5]], así que sí, con [[k = 4]].",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente trata una tarea distinta con triángulos rectángulos, así que elige la herramienta que corresponda a la medida que necesitas.",
      "relatedItems": [
        "Calculadora de triángulos rectángulos",
        "Calculadora de ternas pitagóricas",
        "Calculadora de triángulo 5-12-13",
        "Calculadora de triángulos rectángulos especiales",
        "Calculadora de área de triángulos rectángulos",
        "Calculadora de perímetro de triángulos rectángulos",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es un triángulo 3-4-5?",
          "answer": "Un triángulo 3-4-5 es un triángulo rectángulo cuyos lados siguen la razón [[3 : 4 : 5]]. Los lados de longitud 3 y 4 son los catetos, que se encuentran en el ángulo de 90 grados, y el lado de longitud 5 es la hipotenusa. Es la terna pitagórica más pequeña.",
        },
        {
          "question": "¿Por qué un triángulo 3-4-5 forma un ángulo recto?",
          "answer": "Sus lados cumplen el teorema de Pitágoras: [[3^2 + 4^2 = 5^2]], ya que [[9 + 16 = 25]]. Esa igualdad solo se cumple en los triángulos rectángulos, así que el ángulo opuesto al lado de longitud 5 debe medir 90 grados. Escalar mantiene la igualdad, así que cada copia escalada mantiene el ángulo recto.",
        },
        {
          "question": "¿Qué es la regla del triángulo 3-4-5?",
          "answer": "La regla dice que las longitudes de lado en la razón [[3 : 4 : 5]] siempre forman un triángulo rectángulo. Los constructores la usan para comprobar esquinas en escuadra: marca 3 unidades en un sentido, 4 unidades en el otro, y si la diagonal mide 5 unidades, la esquina está en escuadra, según la precisión de la medición.",
        },
        {
          "question": "¿Cómo funciona la calculadora de triángulo 3-4-5?",
          "answer": "Introduce un factor de escala positivo [[k]] y pulsa Calcular. La calculadora multiplica los lados originales por [[k]] para dar [[a = 3k]], [[b = 4k]] y [[c = 5k]], y luego calcula el área [[A = 6k^2]] y el perímetro [[P = 12k]]. Usa Restablecer para borrar el campo.",
        },
        {
          "question": "¿Qué es el factor de escala en un triángulo 3-4-5?",
          "answer": "El factor de escala [[k]] es el número que multiplica las tres longitudes originales por la misma cantidad. Con [[k = 1]] obtienes el triángulo original, un [[k]] mayor lo agranda y un [[k]] entre 0 y 1 lo reduce. La forma y los ángulos se mantienen.",
        },
        {
          "question": "¿Cómo calculo los lados de un triángulo 3-4-5 escalado?",
          "answer": "Multiplica cada parte de la razón por [[k]]: [[a = 3k]], [[b = 4k]] y [[c = 5k]]. Con [[k = 2]] los lados son 6, 8 y 10. Cada lado debe usar el mismo [[k]], o la razón se rompe y el triángulo pierde su ángulo recto.",
        },
        {
          "question": "¿Cómo calculo su área?",
          "answer": "Usa los catetos en [[A = \\frac{ab}{2}]], que se simplifica a [[A = 6k^2]] para un triángulo 3-4-5 escalado. Con [[k = 3]], [[A = 6 \\times 9 = 54]] unidades cuadradas. El área siempre va en unidades cuadradas, y crece con el cuadrado de [[k]].",
        },
        {
          "question": "¿Cómo calculo su perímetro?",
          "answer": "Suma los tres lados con [[P = a + b + c]], que se simplifica a [[P = 12k]]. Con [[k = 3]], [[P = 36]] unidades. El perímetro crece directamente con [[k]], así que duplicar [[k]] duplica el perímetro. La respuesta va en unidades lineales, no en unidades cuadradas.",
        },
        {
          "question": "¿Puedo usar 6-8-10 en lugar de 3-4-5?",
          "answer": "Sí. Los lados 6, 8 y 10 son el triángulo 3-4-5 escalado por [[k = 2]], así que forman la misma forma con los mismos ángulos y el mismo ángulo recto. Cualquier copia escalada, como 9-12-15 o 15-20-25, funciona de la misma manera.",
        },
        {
          "question": "¿Cómo usan los constructores la regla 3-4-5?",
          "answer": "Un constructor marca 3 pies en un lado desde una esquina y 4 pies en el lado contiguo, y luego mide la diagonal entre las marcas. Si marca 5 pies, la esquina está en escuadra. Los múltiplos mayores, como 6-8-10 o 9-12-15 pies, convienen a trazados más grandes.",
        },
        {
          "question": "¿Puede el factor de escala ser un decimal?",
          "answer": "Sí, cualquier valor real positivo de [[k]] da un triángulo 3-4-5 escalado válido. Con [[k = 0.5]] los lados son 1.5, 2 y 2.5, y con [[k = 1.5]] son 4.5, 6 y 7.5. El cero y los valores negativos no dan triángulos válidos.",
        },
        {
          "question": "¿Todo triángulo 3-4-5 es una terna pitagórica?",
          "answer": "Sí, todo triángulo 3-4-5 escalado con un factor de escala de número entero es una terna pitagórica, porque sus lados son números enteros que cumplen [[a^2 + b^2 = c^2]]. Con un factor de escala decimal, los lados siguen cumpliendo el teorema. La terna 5-12-13 es otra terna pitagórica distinta.",
        },
      ],
    },
};
