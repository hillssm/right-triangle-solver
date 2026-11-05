// projectionGuideTranslations.bes.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "answer": "Una proyección es un segmento de la hipotenusa creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa. La altura divide la hipotenusa en dos partes, p y q. Cada parte es la proyección de un cateto sobre la hipotenusa.",
          "question": "¿Qué es una proyección en un triángulo rectángulo?",
        },
        {
          "answer": "La proyección p está junto al vértice A y pertenece al cateto a, mientras que la proyección q está junto al vértice B y pertenece al cateto b. Son las dos partes de la misma hipotenusa, y [[p + q = c]]. Si se intercambian, también se intercambian los catetos que describen.",
          "question": "¿Cuál es la diferencia entre la proyección p y la proyección q?",
        },
        {
          "answer": "La fórmula es [[p = a^2 / c]], donde a es el cateto a y c es la hipotenusa completa. Primero eleva al cuadrado el cateto a y luego divide entre c. Con [[a = 9]] cm y [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
          "question": "¿Cuál es la fórmula de la proyección p?",
        },
        {
          "answer": "La fórmula es [[q = b^2 / c]], donde b es el cateto b y c es la hipotenusa completa. Primero eleva al cuadrado el cateto b y luego divide entre c. Con [[b = 12]] cm y [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
          "question": "¿Cuál es la fórmula de la proyección q?",
        },
        {
          "answer": "Usa [[a = \\sqrt{c \\times p}]]. Multiplica la hipotenusa c por la proyección p y luego calcula la raíz cuadrada. Con [[c = 25]] cm y [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. La raíz cuadrada es necesaria porque cp es igual a a al cuadrado, no a a.",
          "question": "¿Cómo calculo el cateto a a partir de la proyección p?",
        },
        {
          "answer": "Usa [[b = \\sqrt{c \\times q}]]. Multiplica la hipotenusa c por la proyección q y luego calcula la raíz cuadrada. Con [[c = 25]] cm y [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. La raíz cuadrada convierte la longitud al cuadrado de nuevo en una longitud de lado.",
          "question": "¿Cómo calculo el cateto b a partir de la proyección q?",
        },
        {
          "answer": "Suma las dos proyecciones: [[c = p + q]]. La altura divide la hipotenusa exactamente en esos dos segmentos, por lo que su suma reconstruye el lado completo. Con [[p = 9]] cm y [[q = 16]] cm, [[c = 25]] cm.",
          "question": "¿Cómo hallo la hipotenusa a partir de dos proyecciones?",
        },
        {
          "answer": "Porque el teorema da el cuadrado de un cateto, no el cateto en sí. La afirmación [[a^2 = c \\times p]] describe una longitud al cuadrado. Calcular la raíz cuadrada deshace el cuadrado y devuelve una longitud ordinaria. Si se omite, se presenta un valor al cuadrado como si fuera un lado.",
          "question": "¿Por qué usamos una raíz cuadrada en el teorema de la proyección?",
        },
        {
          "answer": "Sí. La altura es la media geométrica de las dos proyecciones: [[h = \\sqrt{p \\times q}]]. Con [[p = 9]] cm y [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Esta página no tiene modo de altura, así que usa la calculadora dedicada de altura a partir de proyecciones para ese paso.",
          "question": "¿Pueden las proyecciones determinar la altura?",
        },
        {
          "answer": "Al sumar las dos fórmulas de proyección se obtiene [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Como [[p + q = c]], esto se convierte en [[a^2 + b^2 = c^2]]. El teorema de la proyección divide la relación pitagórica en una parte por cateto.",
          "question": "¿Cómo se relacionan las proyecciones con el teorema de Pitágoras?",
        },
        {
          "answer": "Elige el modo según los valores que conozcas. Usa el segmento p cuando conozcas a y c, el segmento q cuando conozcas b y c, el cateto a cuando conozcas c y p, el cateto b cuando conozcas c y q, y la suma de proyecciones para c cuando conozcas p y q.",
          "question": "¿Qué modo de calculadora debo elegir?",
        },
        {
          "answer": "No. Los catetos son los dos lados que forman el ángulo recto, mientras que las proyecciones son segmentos a lo largo de la hipotenusa. Una proyección suele ser más corta que su cateto y se encuentra sobre la hipotenusa, no a lo largo del lado del triángulo.",
          "question": "¿Son las proyecciones lo mismo que los catetos de un triángulo rectángulo?",
        },
      ],
      "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Elige la siguiente herramienta según la medida que necesites, ya que cada calculadora siguiente se encarga de una tarea específica de proyección.",
      "relatedItems": [
        "Calculadora de proyección P de triángulo rectángulo",
        "Calculadora de proyección Q de triángulo rectángulo",
        "Calculadora de cateto A a partir de proyección de triángulo rectángulo",
        "Calculadora de cateto B a partir de proyección de triángulo rectángulo",
        "Calculadora de hipotenusa a partir de proyecciones de triángulo rectángulo",
        "Calculadora de altura a partir de proyecciones de triángulo rectángulo",
        "Calculadora de altura de triángulo rectángulo",
      ],
      "sections": {
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Conocer las dos proyecciones basta para reconstruir todo el triángulo. Usa [[p = 9]] cm y [[q = 16]] cm. Primero, la hipotenusa es [[c = 9 + 16 = 25]] cm. Luego el cateto a es [[a = \\sqrt{25 \\times 9} = 15]] cm, y el cateto b es [[b = \\sqrt{25 \\times 16} = 20]] cm. La altura es [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Un par de números produce cuatro longitudes: c, a, b y h. Ese es el poder de las relaciones de proyección: dos segmentos de la hipotenusa contienen toda la forma del triángulo. Una comprobación final cierra el círculo: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], así que el teorema de Pitágoras confirma todo el triángulo a la vez.",
            },
            {
              "kind": "p",
              "text": "Ten en cuenta que estas son relaciones matemáticas, no modos independientes de calculadora. Esta página calcula un valor por modo. Reconstruir todo el triángulo significa ejecutar un modo y luego usar su resultado en el siguiente, o trabajar los pasos a mano como se muestra arriba.",
            },
          ],
          "h2": "Cómo calcular todas las medidas principales de un triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo con proyecciones p igual a 9 y q igual a 16, hipotenusa 25, catetos 15 y 20, y altura 12, que muestra las seis medidas en un diagrama",
            "caption": "Un par de proyecciones reconstruye el triángulo: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La altura es la media geométrica de las dos proyecciones:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 9]] cm y [[q = 16]] cm. El producto es [[9 \\times 16 = 144]], y la raíz cuadrada de 144 es 12, así que [[h = 12]] cm. La altura es el segmento perpendicular desde el ángulo recto hasta la hipotenusa, y su longitud queda fijada una vez que se conocen p y q. Esta es la misma idea de media geométrica que relaciona los catetos con las proyecciones, aplicada a la altura.",
            },
            {
              "kind": "p",
              "text": "Ten en cuenta que esta página no tiene un modo dedicado a la altura. La calculadora devuelve proyecciones, catetos y la hipotenusa, pero no h. Para una página que resuelva la altura directamente, usa la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de proyecciones</a>, que toma p y q y devuelve h. La <a href=\"/right-triangle-altitude-calculator/\">calculadora de altura</a> cubre otras formas de hallar h, a partir de los catetos o del área.",
            },
          ],
          "h2": "Relación entre las proyecciones y la altura",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es la tarea de geometría y el trabajo en clase, donde los problemas de proyección comprueban si los estudiantes pueden etiquetar un diagrama y aplicar [[a^2 = c \\times p]] en lugar de recurrir al teorema de Pitágoras por costumbre. Los ejercicios de triángulos semejantes usan la misma configuración, ya que la propia demostración es un ejercicio de correspondencia de lados.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el teorema cuando hay que reconstruir un triángulo rectángulo a partir de medidas parciales: si un dibujo da la hipotenusa y el pie de la altura, el cateto que falta se obtiene sin volver a medir la figura.",
            },
            {
              "kind": "p",
              "text": "Una condición limita todas las aplicaciones: la geometría de triángulo rectángulo requerida debe existir realmente. El teorema describe relaciones geométricas exactas, no medidas aproximadas de campo, así que nunca sustituye una medición topográfica cuidadosa ni una medición profesional de ingeniería. Dentro de su contexto adecuado, sin embargo, convierte dos longitudes conocidas en una tercera con una sola multiplicación y una raíz cuadrada.",
            },
          ],
          "h2": "Aplicaciones prácticas de las relaciones de proyección de triángulo rectángulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página ofrece cinco modos, uno por cada relación de proyección. Cada modo pide dos medidas conocidas y devuelve un valor desconocido. Nunca necesitas resolver todo el triángulo primero: elige el modo que coincida con tus números, introdúcelos y lee el resultado.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente es la forma más rápida de elegir. Busca la fila cuyas medidas conocidas coincidan con las tuyas, y esa fila indica el modo que debes usar. Las secciones siguientes explican cada modo en detalle, con un ejemplo resuelto para cada uno.",
            },
          ],
          "h2": "Calcular proyecciones e hipotenusa en un triángulo rectángulo",
          "table": {
            "headers": [
              "Modo de calculadora",
              "Medidas conocidas",
              "Resultado",
            ],
            "rows": [
              [
                "Segmento de hipotenusa p",
                "Cateto a e hipotenusa c",
                "Proyección p",
              ],
              [
                "Segmento de hipotenusa q",
                "Cateto b e hipotenusa c",
                "Proyección q",
              ],
              [
                "Cateto a a partir de proyección",
                "Hipotenusa c y proyección p",
                "Cateto a",
              ],
              [
                "Cateto b a partir de proyección",
                "Hipotenusa c y proyección q",
                "Cateto b",
              ],
              [
                "Suma de proyecciones para c",
                "Proyección p y proyección q",
                "Hipotenusa c",
              ],
            ],
          },
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Elegir el modo es un ejercicio de correspondencia: busca el modo que pida las dos medidas que conoces, y la calculadora devolverá la que falta.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Segmento de hipotenusa p",
            },
            {
              "kind": "p",
              "text": "Elige este modo cuando conozcas el cateto a y la hipotenusa c. La fórmula es [[p = a^2 / c]]. Eleva al cuadrado el cateto a y luego divide entre c. Úsalo cuando un problema te dé un cateto y toda la hipotenusa y pregunte qué parte de la hipotenusa pertenece a ese cateto.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Segmento de hipotenusa q",
            },
            {
              "kind": "p",
              "text": "Elige este modo cuando conozcas el cateto b y la hipotenusa c. La fórmula es [[q = b^2 / c]]. Es la imagen especular del modo 1, con el cateto b en lugar del cateto a. Úsalo cuando el cateto conocido sea el que toca el vértice B.",
            },
            {
              "kind": "h3",
              "text": "Modo 3: Cateto a a partir de proyección",
            },
            {
              "kind": "p",
              "text": "Elige este modo cuando conozcas la hipotenusa c y la proyección p. La fórmula es [[a = \\sqrt{c \\times p}]]. Multiplica primero y luego calcula la raíz cuadrada. Úsalo cuando un problema dé la hipotenusa y el segmento junto a A y pida el cateto.",
            },
            {
              "kind": "h3",
              "text": "Modo 4: Cateto b a partir de proyección",
            },
            {
              "kind": "p",
              "text": "Elige este modo cuando conozcas la hipotenusa c y la proyección q. La fórmula es [[b = \\sqrt{c \\times q}]]. Es la imagen especular del modo 3, con q en lugar de p. Úsalo cuando el segmento conocido sea el que está junto a B.",
            },
            {
              "kind": "h3",
              "text": "Modo 5: Suma de proyecciones para c",
            },
            {
              "kind": "p",
              "text": "Elige este modo cuando conozcas ambas proyecciones, p y q. La fórmula es [[c = p + q]], una suma sencilla sin elevar al cuadrado y sin raíz cuadrada.",
            },
            {
              "kind": "p",
              "text": "Guía rápida de decisión: un cateto con c da una proyección, c con una proyección da un cateto, y ambas proyecciones juntas dan c. Si tus valores conocidos no coinciden con ninguno de estos pares, necesitas primero otra medida.",
            },
          ],
          "h2": "Cómo elegir el modo correcto de calculadora",
          "image": {
            "alt": "Cinco modos de calculadora con sus valores conocidos y resultados: segmento p a partir de a y c, segmento q a partir de b y c, cateto a a partir de c y p, cateto b a partir de c y q, e hipotenusa c a partir de p y q",
            "caption": "Cinco modos, uno por cada par conocido: un cateto con c da una proyección, c con una proyección da un cateto, y p con q dan c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b, y el lado AB es la hipotenusa c. La altura CD cae desde C perpendicular a AB y la toca en D. Dos cuadrados pequeños marcan los ángulos rectos: uno en C, entre los catetos, y uno en D, entre la altura y la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en el segmento AD, que es la proyección p, y el segmento DB, que es la proyección q. La altura CD se etiqueta como h. Recorre el diagrama en este orden para fijar las etiquetas: empieza en A, sigue por el cateto a hasta C, luego por el cateto b hasta B, y vuelve por la hipotenusa desde B hasta A, deteniéndote en D para ver la división en q y p.",
            },
            {
              "kind": "p",
              "text": "La altura crea dos triángulos rectángulos más pequeños, ACD y CBD, dentro del original. En el triángulo ACD, la hipotenusa es el cateto a y un cateto es la proyección p. En el triángulo CBD, la hipotenusa es el cateto b y un cateto es la proyección q.",
            },
          ],
          "h2": "Comprender el diagrama de proyección de triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD hasta la hipotenusa AB, catetos a y b, hipotenusa c, proyecciones p y q, y altura h etiquetadas",
            "caption": "Triángulo principal ABC: la altura CD divide la hipotenusa AB en la proyección p (AD) y la proyección q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, el modo, la sustitución y la respuesta final. Dos ejemplos cubren cada uno de los cinco modos, así que puedes ver cada modo dos veces con números distintos.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Hallar la proyección P",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]] cm y [[c = 15]] cm, usa el modo 1, Segmento de hipotenusa p. La fórmula da [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Hallar la proyección P",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 12]] m y [[c = 20]] m, usa el modo 1. La fórmula da [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. La otra proyección es 12.8 m, y [[7.2 + 12.8 = 20]] m confirma el resultado.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Hallar la proyección Q",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 12]] cm y [[c = 15]] cm, usa el modo 2, Segmento de hipotenusa q. La fórmula da [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Este es el mismo triángulo del ejemplo 1, visto desde el otro cateto.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Hallar la proyección Q",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 8]] m y [[c = 10]] m, usa el modo 2. La fórmula da [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. La otra proyección es 3.6 m, y este es el conocido triángulo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Hallar el cateto A",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[p = 9]] cm, usa el modo 3, Cateto a a partir de proyección. La fórmula da [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. El producto es un cuadrado perfecto, así que la respuesta es exacta, sin necesidad de redondeo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Hallar el cateto A",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm y [[p = 4]] cm, usa el modo 3. La fórmula da [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. El producto 40 no es un cuadrado perfecto, así que la respuesta es una aproximación redondeada a tres decimales.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Hallar el cateto B",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[q = 16]] cm, usa el modo 4, Cateto b a partir de proyección. La fórmula da [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Este es el mismo triángulo del ejemplo 5, visto desde la otra proyección, y los dos catetos 15 y 20 completan el triángulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Hallar el cateto B",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm y [[q = 6]] cm, usa el modo 4. La fórmula da [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. El cateto a correspondiente es de unos 6.325 cm, del ejemplo 6.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 9: Hallar la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 9]] cm y [[q = 16]] cm, usa el modo 5, Suma de proyecciones para c. La fórmula da [[c = 9 + 16 = 25]] cm. No hacen falta ni elevar al cuadrado ni calcular una raíz cuadrada, ya que los dos segmentos simplemente se unen en el lado completo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 10: Hallar la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 3.5]] m y [[q = 6.5]] m, usa el modo 5. La fórmula da [[c = 3.5 + 6.5 = 10]] m. Las proyecciones decimales se suman igual que los números enteros, así que alinea los puntos decimales y suma.",
            },
          ],
          "h2": "Ejemplos resueltos con los cinco modos de calculadora",
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco fórmulas cubren todos los modos de esta página. Las dos primeras hallan proyecciones a partir de catetos. Las dos siguientes recuperan catetos a partir de proyecciones. La última reconstruye la hipotenusa a partir de sus dos partes.",
            },
            {
              "kind": "p",
              "text": "Proyección p, a partir del cateto a y la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Proyección q, a partir del cateto b y la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto a, a partir de la hipotenusa y la proyección p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto b, a partir de la hipotenusa y la proyección q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hipotenusa, a partir de ambas proyecciones:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Hallar una proyección significa elevar al cuadrado un cateto y dividir entre la hipotenusa. Hallar un cateto significa multiplicar la hipotenusa por una proyección y calcular una raíz cuadrada. Hallar la hipotenusa significa sumar dos segmentos. La raíz cuadrada aparece solo al recuperar un cateto, porque solo las fórmulas de los catetos parten de una longitud al cuadrado. Todas las medidas deben usar la misma unidad, así que convierte antes de calcular.",
            },
          ],
          "h2": "Fórmulas de proyección de triángulo rectángulo explicadas",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diez pasos cortos te llevan desde un diagrama etiquetado hasta una respuesta comprobada. Los pasos son los mismos para todos los modos; solo cambian el modo que elijas y los números que introduzcas.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica qué medidas son conocidas.",
                "Abre el selector de modo de la calculadora.",
                "Elige el modo de cálculo que corresponda.",
                "Introduce la primera medida requerida.",
                "Introduce la segunda medida requerida.",
                "Selecciona unidades de medida compatibles.",
                "Haz clic en el botón Calcular correspondiente.",
                "Lee el resultado mostrado.",
                "Comprueba la respuesta con otra relación geométrica cuando sea adecuado.",
                "Usa Restablecer antes de empezar otro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "El paso 1 hace la mayor parte del trabajo. Etiqueta el triángulo, marca p y q en la hipotenusa y anota a qué cateto pertenece cada proyección. Con las etiquetas claras, la elección del modo se deduce de la tabla cerca del inicio de esta guía, y la calculadora se encarga de la aritmética. No describas ni esperes funciones que la página no tiene: no calcula la altura, los ángulos ni el área automáticamente.",
            },
          ],
          "h2": "Cómo usar la calculadora de proyección de triángulo rectángulo",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las dos proyecciones son las dos partes de un mismo lado recto, así que la hipotenusa es su suma:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 9]] cm y [[q = 16]] cm. Al sumar se obtiene [[c = 9 + 16 = 25]] cm. Este es el principio de suma de segmentos: cuando un punto divide un segmento en dos partes, todo el segmento es igual a la suma de sus partes. El pie de la altura D divide la hipotenusa AB en AD y DB, así que AB es igual a AD más DB.",
            },
            {
              "kind": "p",
              "text": "Este modo también es la comprobación más rápida de los otros cuatro modos. Siempre que calcules p y q por separado, súmalos y compáralos con c. En el triángulo 9-12-15, [[p = 5.4]] cm y [[q = 9.6]] cm suman 15 cm, lo que confirma ambas proyecciones a la vez. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir de proyecciones</a> cubre este cálculo en detalle cuando la necesitas por sí sola.",
            },
          ],
          "h2": "Cómo calcular la hipotenusa completa a partir de las proyecciones",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una proyección en un triángulo rectángulo es la sombra que un cateto proyecta sobre la hipotenusa. Traza la altura desde el vértice del ángulo recto hasta la hipotenusa y la dividirá en dos segmentos, llamados p y q. El segmento p pertenece al cateto a, y el segmento q pertenece al cateto b.",
            },
            {
              "kind": "p",
              "text": "Esta calculadora de proyección de triángulo rectángulo trabaja con las cinco relaciones de proyección. Halla la proyección p a partir del cateto a, la proyección q a partir del cateto b, el cateto a a partir de la proyección p, el cateto b a partir de la proyección q, y la hipotenusa completa a partir de p y q. Cada tarea es un modo independiente, así que elige el que coincida con las medidas que ya conoces.",
            },
            {
              "kind": "p",
              "text": "Las mismas dos proyecciones también pueden reconstruir todo el triángulo. Por ejemplo, si [[p = 9]] cm y [[q = 16]] cm, entonces [[c = 9 + 16 = 25]] cm, y la altura es [[h = \\sqrt{9 \\times 16} = 12]] cm. Esta guía explica cada modo, muestra las fórmulas, desarrolla ejemplos y te enseña a comprobar cada respuesta.",
            },
          ],
          "h2": "Calculadora de proyección de triángulo rectángulo",
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Para recuperar el cateto a, multiplica la hipotenusa por la proyección p y calcula la raíz cuadrada:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 25]] cm y [[p = 9]] cm. El producto es [[25 \\times 9 = 225]], y la raíz cuadrada de 225 es 15, así que [[a = 15]] cm. El producto 225 es una longitud al cuadrado, no un lado, por lo que la raíz cuadrada no se puede omitir. Presentar 225 como el cateto afirmaría un lado nueve veces más largo que la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El paso de la raíz cuadrada es el punto central de este modo. El teorema de la proyección dice [[a^2 = c \\times p]], así que el producto da el cuadrado del cateto. Deshacer un cuadrado necesita una raíz cuadrada, igual que deshacer una duplicación necesita dividir entre dos. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir de proyección</a> cubre este cálculo en detalle cuando la necesitas por sí sola.",
            },
          ],
          "h2": "Cómo hallar el cateto A a partir de la proyección P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Para recuperar el cateto b, multiplica la hipotenusa por la proyección q y calcula la raíz cuadrada:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 25]] cm y [[q = 16]] cm. El producto es [[25 \\times 16 = 400]], y la raíz cuadrada de 400 es 20, así que [[b = 20]] cm. El método es la imagen especular del cálculo del cateto a, con q en lugar de p. La correspondencia está fijada por las etiquetas del triángulo, así que introducir p aquí devolvería el cateto a.",
            },
            {
              "kind": "p",
              "text": "Comprueba la respuesta con el tamaño del triángulo. El cateto b debe ser más corto que la hipotenusa, y 20 cm es más corto que 25 cm, así que el resultado pasa la primera comprobación de sentido. Al elevarlo al cuadrado se obtiene [[20^2 = 400]], que coincide con [[c \\times q = 25 \\times 16 = 400]], así que el teorema se cumple exactamente. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir de proyección</a> cubre este cálculo en detalle cuando la necesitas por sí sola.",
            },
          ],
          "h2": "Cómo hallar el cateto B a partir de la proyección Q",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "La mayoría de los errores siguientes se deben al etiquetado, no a la aritmética, así que vuelve a etiquetar el diagrama antes de recalcular cuando una respuesta parezca incorrecta.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir la proyección p con la proyección q: p está junto a A y pertenece al cateto a, mientras que q está junto a B y pertenece al cateto b.",
                "Emparejar el cateto a con q en lugar de p: el cateto a usa p, así que [[a = \\sqrt{c \\times p}]]. Usar q devuelve el cateto b, no el cateto a.",
                "Emparejar el cateto b con p en lugar de q: el cateto b usa q, así que [[b = \\sqrt{c \\times q}]]. Usar p devuelve el cateto a, no el cateto b.",
                "Olvidar la raíz cuadrada al calcular un cateto: el producto cp es a al cuadrado, no a. Con c = 25 y p = 9, el cateto es 15 cm, no 225.",
                "Mezclar unidades de medida distintas: convierte primero. Multiplicar metros por centímetros da un producto sin sentido, así que pon ambas entradas en una misma unidad.",
                "Usar el modo de calculadora incorrecto: haz coincidir el modo con tus valores conocidos usando la tabla cerca del inicio de esta guía.",
                "Tratar p o q como un cateto perpendicular: las proyecciones se encuentran sobre la hipotenusa. Son segmentos de la hipotenusa, no lados del triángulo.",
                "Olvidar que c = p + q: las dos proyecciones deben sumar la hipotenusa.",
                "Usar longitudes no válidas o negativas: las longitudes son positivas, así que una entrada negativa indica un error en los datos, y unas proyecciones cero no describen ningún triángulo real.",
                "Redondear demasiado pronto: mantén la precisión completa hasta el paso final y luego redondea una sola vez.",
                "Aplicar las fórmulas a un triángulo cualquiera: el teorema necesita un ángulo recto y su altura, así que sin ellos no hay proyecciones p y q en este sentido.",
                "Confundir longitudes al cuadrado con longitudes reales de los lados: 225 es a al cuadrado, mientras que 15 es a. Di a cuál te refieres antes de escribir un número.",
              ],
            },
          ],
          "h2": "Errores comunes al usar una calculadora de proyección de triángulo rectángulo",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta resolver los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos, y el último problema combina varias ideas de esta guía.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Hallar la proyección P",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene el cateto [[a = 6]] cm y la hipotenusa [[c = 10]] cm. Halla la proyección p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hallar la proyección Q",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene el cateto [[b = 15]] cm y la hipotenusa [[c = 25]] cm. Halla la proyección q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hallar el cateto A",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene la hipotenusa [[c = 17]] cm y la proyección [[p = 8]] cm. Halla el cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Hallar el cateto B",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene la hipotenusa [[c = 13]] cm y la proyección [[q = 9]] cm. Halla el cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Hallar la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene las proyecciones [[p = 5]] cm y [[q = 20]] cm. Halla la hipotenusa c.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Teorema de la proyección en varios pasos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene las proyecciones [[p = 4]] cm y [[q = 9]] cm. Halla la hipotenusa, ambos catetos y la altura, y luego comprueba el resultado con el teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Comprobación: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proyección p es la parte de la hipotenusa que pertenece al cateto a. La fórmula divide el cuadrado del cateto a entre toda la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 9]] cm y [[c = 15]] cm. El paso 1 escribe la fórmula, [[p = a^2 / c]]. El paso 2 sustituye los valores, [[p = 9^2 / 15 = 81 / 15]]. El paso 3 divide y da [[p = 5.4]] cm. La respuesta es una longitud a lo largo de la hipotenusa, medida en la misma unidad que a y c.",
            },
            {
              "kind": "p",
              "text": "Una comprobación breve confirma el resultado. El otro cateto de este triángulo mide 12 cm, así que su proyección es [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Al sumar las dos proyecciones se obtiene [[5.4 + 9.6 = 15]] cm, que es exactamente c. Si tus dos proyecciones no suman c, una de las entradas era incorrecta. La <a href=\"/right-triangle-projection-p-calculator/\">calculadora de proyección p</a> realiza este cálculo por sí sola cuando la necesitas a menudo.",
            },
          ],
          "h2": "Cómo calcular la proyección P a partir del cateto A y la hipotenusa",
          "image": {
            "alt": "Triángulo rectángulo que muestra el cateto a al cuadrado dividido entre la hipotenusa c da la proyección p, con a igual a 9 cm y c igual a 15 cm, lo que da p igual a 5.4 cm",
            "caption": "Proyección p a partir del cateto a: p es igual a a al cuadrado entre c, así que 81 entre 15 da 5.4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proyección q es la parte de la hipotenusa que pertenece al cateto b. La fórmula divide el cuadrado del cateto b entre toda la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 12]] cm y [[c = 15]] cm. El paso 1 escribe la fórmula, [[q = b^2 / c]]. El paso 2 sustituye los valores, [[q = 12^2 / 15 = 144 / 15]]. El paso 3 divide y da [[q = 9.6]] cm. La respuesta es el segmento junto al vértice B, en el lado opuesto del pie de la altura respecto a p.",
            },
            {
              "kind": "p",
              "text": "Compara las dos proyecciones antes de seguir. Aquí p es 5.4 cm y q es 9.6 cm, así que q es mayor, lo que coincide con que el cateto b es más largo que el cateto a. El cateto más largo siempre proyecta la proyección más larga. Si tu cateto más largo produjo la proyección más corta, intercambiaste p y q. La <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> realiza este cálculo por sí sola cuando la necesitas a menudo.",
            },
          ],
          "h2": "Cómo calcular la proyección Q a partir del cateto B y la hipotenusa",
          "image": {
            "alt": "Triángulo rectángulo que muestra el cateto b al cuadrado dividido entre la hipotenusa c da la proyección q, con b igual a 12 cm y c igual a 15 cm, lo que da q igual a 9.6 cm",
            "caption": "Proyección q a partir del cateto b: q es igual a b al cuadrado entre c, así que 144 entre 15 da 9.6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración se basa en triángulos semejantes. Al trazar la altura CD, el triángulo ABC se divide en dos triángulos rectángulos más pequeños, ACD y CBD, y ambos son semejantes al triángulo original. La semejanza significa que sus lados correspondientes mantienen la misma proporción, y una de esas proporciones da directamente el teorema de la proyección.",
            },
            {
              "kind": "p",
              "text": "Empieza con el cateto a. El triángulo ACD comparte el ángulo en A con el triángulo ABC, y ambos contienen un ángulo recto, así que sus terceros ángulos también deben coincidir. Al hacer coincidir los lados que ocupan las mismas posiciones se obtiene la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora sustituye los símbolos estándar: [[AD = p]], [[AC = a]] y [[AB = c]]. La proporción queda así:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Al multiplicar en cruz se eliminan las fracciones: [[p \\times c = a \\times a]], que es [[a^2 = c \\times p]]. El mismo argumento aplicado al otro triángulo pequeño, CBD, da [[b^2 = c \\times q]], ya que el triángulo CBD comparte el ángulo en B con todo el triángulo. La semejanza hace todo el trabajo: los lados correspondientes de triángulos semejantes se mantienen proporcionales, y el teorema de la proyección es lo que esa proporción muestra después de multiplicar en cruz.",
            },
          ],
          "h2": "¿Por qué funcionan los teoremas de proyección?",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los triángulos semejantes más pequeños ACD y CBD, que muestran las proporciones p entre a igual a a entre c y q entre b igual a b entre c",
            "caption": "Demostración por triángulos semejantes: p entre a es igual a a entre c, y q entre b es igual a b entre c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Seis propiedades se deducen directamente de las fórmulas de proyección. Cada una sirve también como comprobación de sentido para una respuesta nueva.",
            },
            {
              "items": [
                "Proyecciones iguales producen catetos iguales. Con [[p = q = 5]] y [[c = 10]], ambos catetos son iguales a [[\\sqrt{50} \\approx 7.071]], y el triángulo es un triángulo rectángulo isósceles.",
                "Proyecciones desiguales producen catetos desiguales: la proyección más larga pertenece al cateto más largo.",
                "Intercambiar p y q intercambia las longitudes de los catetos correspondientes, pero no cambia la hipotenusa total, ya que [[p + q = c]] en cualquier caso.",
                "Escalar todas las medidas por el mismo factor positivo escala cada resultado por ese factor. Duplicar p y q duplica c, a, b y h.",
                "Las proyecciones siempre son positivas y siempre menores que c en un triángulo rectángulo válido y no degenerado. Una proyección igual a c dejaría la otra proyección en cero.",
                "El cateto más largo siempre proyecta la proyección más larga. Comparar las longitudes de los catetos con las de las proyecciones es una forma rápida de detectar una etiqueta intercambiada.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "El diagrama siguiente muestra ambos casos con la hipotenusa mantenida en 10. Las proyecciones iguales la dividen por la mitad y dan catetos iguales, mientras que las proyecciones desiguales dan catetos de longitudes distintas.",
            },
          ],
          "h2": "Casos especiales y propiedades importantes de la proyección",
          "image": {
            "alt": "Dos triángulos rectángulos con hipotenusa 10: uno con proyecciones p y q iguales de 5 que dan catetos iguales, y otro con p igual a 2 y q igual a 8 que dan catetos desiguales",
            "caption": "Las proyecciones iguales dan catetos iguales; las proyecciones desiguales dan catetos desiguales, con la misma hipotenusa de 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección y el teorema de Pitágoras coinciden exactamente, y el álgebra muestra por qué. Empieza con las dos fórmulas de proyección:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Suma la fórmula correspondiente del cateto b, [[b^2 = c \\times q]], para obtener:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al sacar factor común c en el lado derecho se obtiene [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], la sustitución produce el resultado conocido:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una comprobación numérica con el triángulo 9-16-25 lo confirma: [[a^2 + b^2 = 225 + 400 = 625]] y [[c^2 = 25^2 = 625]]. Los dos teoremas no son rivales. El teorema de la proyección divide la relación pitagórica en una parte por cateto, y al sumar las partes se reconstruye. Por eso cada resultado de esta página se puede comprobar con el teorema de Pitágoras.",
            },
          ],
          "h2": "Relación entre las proyecciones y el teorema de Pitágoras",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo tiene seis partes con nombre, y cada una tiene una posición fija. La tabla siguiente enumera cada parte con su símbolo, su significado y su posición. Aprende esta tabla una vez, y cada fórmula de esta guía se leerá con claridad.",
            },
            {
              "kind": "p",
              "text": "Identificar el segmento correcto es importante porque cada modo de calculadora espera entradas específicas. Introducir una proyección donde corresponde un cateto, o introducir p donde corresponde q, sigue produciendo un número, pero responde a una pregunta distinta de la que hiciste. Etiqueta primero el diagrama y luego haz coincidir las etiquetas con el modo.",
            },
          ],
          "h2": "Comprender los lados y segmentos de un triángulo rectángulo",
          "table": {
            "headers": [
              "Símbolo",
              "Nombre",
              "Posición",
            ],
            "rows": [
              [
                "a",
                "Cateto a (lado AC)",
                "Lado perpendicular que toca el vértice A",
              ],
              [
                "b",
                "Cateto b (lado BC)",
                "Lado perpendicular que toca el vértice B",
              ],
              [
                "c",
                "Hipotenusa (lado AB)",
                "Lado más largo, opuesto al ángulo recto",
              ],
              [
                "p",
                "Proyección p (segmento AD)",
                "Parte de la hipotenusa junto al vértice A",
              ],
              [
                "q",
                "Proyección q (segmento DB)",
                "Parte de la hipotenusa junto al vértice B",
              ],
              [
                "h",
                "Altura (segmento CD)",
                "Perpendicular desde C hasta la hipotenusa",
              ],
            ],
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones independientes detectan casi todos los errores. Realiza al menos una de ellas en cada respuesta, y las cuatro cuando el problema sea importante. Cada comprobación usa una relación distinta, así que un error que pase desapercibido en una suele detectarse en otra.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Suma de proyecciones",
            },
            {
              "kind": "p",
              "text": "Confirma que [[p + q = c]]. Con [[p = 9]] cm, [[q = 16]] cm y [[c = 25]] cm, [[9 + 16 = 25]], así que los segmentos encajan. Si la suma difiere de c, una de las proyecciones es incorrecta.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Teorema de la proyección para el cateto A",
            },
            {
              "kind": "p",
              "text": "Eleva al cuadrado el cateto a y compáralo con [[c \\times p]]. Con [[a = 15]] cm, [[c = 25]] cm y [[p = 9]] cm, [[a^2 = 225]] y [[c \\times p = 225]], así que la respuesta es correcta. Si los dos números difieren, el cateto o la proyección son incorrectos.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Teorema de la proyección para el cateto B",
            },
            {
              "kind": "p",
              "text": "Eleva al cuadrado el cateto b y compáralo con [[c \\times q]]. Con [[b = 20]] cm, [[c = 25]] cm y [[q = 16]] cm, [[b^2 = 400]] y [[c \\times q = 400]], así que la respuesta es correcta. Usa esta comprobación siempre que tu respuesta sea un cateto.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirma que [[a^2 + b^2 = c^2]]. Con [[a = 15]] cm, [[b = 20]] cm y [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. Esta comprobación evalúa todo el triángulo a la vez, no solo una fórmula, así que es la más fuerte de las cuatro.",
            },
          ],
          "h2": "Cómo verificar tus cálculos de proyección",
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Toma el triángulo rectángulo ABC, con el ángulo recto en C. Los dos lados que forman el ángulo recto son los catetos, AC y BC. El lado opuesto al ángulo recto es la hipotenusa, AB. Ahora traza la altura desde C directamente hasta la hipotenusa, donde se encuentra con ella en un punto llamado D. Esa altura es perpendicular a la hipotenusa, así que se encuentra con AB en ángulo recto.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en dos segmentos adyacentes. El segmento junto al vértice A, llamado AD, es la proyección p. El segmento junto al vértice B, llamado DB, es la proyección q. Juntos forman toda la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Cada proyección pertenece al cateto que toca su vértice. El cateto a toca el vértice A, así que su proyección es p. El cateto b toca el vértice B, así que su proyección es q. Esta correspondencia nunca cambia: a va con p, y b va con q.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones se encuentran sobre la hipotenusa. No son lados del triángulo ni son perpendiculares a nada. Imagina cada una como la sombra que su cateto proyecta sobre la hipotenusa cuando la altura cae directamente sobre ella.",
            },
          ],
          "h2": "¿Qué son las proyecciones en un triángulo rectángulo?",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-all-measurements": "Cómo calcular todas las medidas principales de un triángulo rectángulo",
        "sec-altitude": "Relación entre las proyecciones y la altura",
        "sec-applications": "Aplicaciones prácticas de las relaciones de proyección de triángulo rectángulo",
        "sec-calculate": "Calcular proyecciones e hipotenusa en un triángulo rectángulo",
        "sec-choose-mode": "Cómo elegir el modo correcto de calculadora",
        "sec-diagram": "Comprender el diagrama de proyección de triángulo rectángulo",
        "sec-examples": "Ejemplos resueltos con los cinco modos de calculadora",
        "sec-faq": "Preguntas frecuentes",
        "sec-formulas": "Fórmulas de proyección de triángulo rectángulo explicadas",
        "sec-how-to-use": "Cómo usar la calculadora de proyección de triángulo rectángulo",
        "sec-hypotenuse": "Cómo calcular la hipotenusa completa a partir de las proyecciones",
        "sec-intro": "Calculadora de proyección de triángulo rectángulo",
        "sec-leg-a": "Cómo hallar el cateto A a partir de la proyección P",
        "sec-leg-b": "Cómo hallar el cateto B a partir de la proyección Q",
        "sec-mistakes": "Errores comunes al usar una calculadora de proyección de triángulo rectángulo",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-projection-p": "Cómo calcular la proyección P a partir del cateto A y la hipotenusa",
        "sec-projection-q": "Cómo calcular la proyección Q a partir del cateto B y la hipotenusa",
        "sec-proof": "¿Por qué funcionan los teoremas de proyección?",
        "sec-properties": "Casos especiales y propiedades importantes de la proyección",
        "sec-pythagoras": "Relación entre las proyecciones y el teorema de Pitágoras",
        "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "sec-sides-segments": "Comprender los lados y segmentos de un triángulo rectángulo",
        "sec-verify": "Cómo verificar tus cálculos de proyección",
        "sec-what-projections": "¿Qué son las proyecciones en un triángulo rectángulo?",
      },
    },
};
