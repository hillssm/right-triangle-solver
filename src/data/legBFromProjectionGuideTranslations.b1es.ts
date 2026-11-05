// legBFromProjectionGuideTranslations.bes.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula para hallar el cateto b a partir de la proyección q?",
          "answer": "La fórmula es [[b = \\sqrt{c \\times q}]], donde c es la hipotenusa completa y q es la proyección que pertenece al cateto b. Por ejemplo, [[c = 10]] cm y [[q = 6.4]] cm dan [[b = 8]] cm.",
        },
        {
          "question": "¿Por qué multiplicamos c por q?",
          "answer": "La multiplicación proviene de los triángulos semejantes. El triángulo CBD es semejante al triángulo ABC, lo que da [[q / b = b / c]], y al multiplicar en cruz se obtiene [[b^2 = c \\times q]]. El producto es el cuadrado del cateto, no el cateto en sí.",
        },
        {
          "question": "¿Por qué es necesaria una raíz cuadrada?",
          "answer": "Porque el producto cq es igual a b al cuadrado, no a b. La raíz cuadrada deshace el cuadrado y devuelve una longitud ordinaria. Sin ella, informarías 64 en lugar de 8 en el ejemplo con c = 10 y q = 6.4.",
        },
        {
          "question": "¿Qué representa la proyección q?",
          "answer": "La proyección q es el segmento de la hipotenusa junto al vértice B, creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa. En el triángulo ABC con altura CD, [[q = DB]], y yace sobre la hipotenusa.",
        },
        {
          "question": "¿Es la proyección q lo mismo que el cateto b?",
          "answer": "No. El cateto b es el lado BC, uno de los lados que forman el ángulo recto, mientras que la proyección q es el segmento DB a lo largo de la hipotenusa. Son longitudes diferentes en posiciones diferentes, vinculadas solo por [[b^2 = c \\times q]].",
        },
        {
          "question": "¿Por qué se usa q en lugar de p?",
          "answer": "Porque cada cateto se empareja con la proyección junto a su propio vértice. El cateto b toca el vértice B y q es el segmento junto a B. Usar p devolvería el cateto a, ya que p se empareja con el cateto que toca el vértice A.",
        },
        {
          "question": "¿Puedo hallar el cateto b si solo se conoce la proyección p?",
          "answer": "Sí. Resta p de la hipotenusa primero: [[q = c - p]]. Con [[c = 25]] cm y [[p = 9]] cm, [[q = 16]] cm, y luego [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "¿Puede la proyección q ser mayor que la hipotenusa?",
          "answer": "No. La proyección q es solo una parte de la hipotenusa, así que debe ser menor que c. Si q fuera igual a c, p sería cero y el triángulo sería degenerado en lugar de un triángulo rectángulo auténtico.",
        },
        {
          "question": "¿Cómo verifico el cateto calculado?",
          "answer": "Eleva la respuesta al cuadrado y comprueba que sea igual a [[c \\times q]]. También puedes hallar el cateto a a partir de p y comprobar [[a^2 + b^2 = c^2]], y confirmar que q es menor que c y que el cateto b es más corto que la hipotenusa.",
        },
        {
          "question": "¿Qué ocurre cuando p y q son iguales?",
          "answer": "La altura cae en el punto medio de la hipotenusa y los dos catetos son iguales, así que el triángulo es un triángulo rectángulo isósceles. Con [[c = 20]] cm y [[p = q = 10]] cm, ambos catetos son iguales a [[10\\sqrt{2}]] cm, unos 14.142 cm.",
        },
        {
          "question": "¿Puedo hallar el cateto a usando el mismo teorema?",
          "answer": "Sí, con la fórmula en imagen especular [[a = \\sqrt{c \\times p}]]. El cateto a se empareja con la proyección p, igual que el cateto b se empareja con q. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir de la proyección</a> está hecha para ese cálculo.",
        },
        {
          "question": "¿Está relacionado el teorema de la proyección con el teorema de Pitágoras?",
          "answer": "Sí. Sumar las dos fórmulas de proyección da [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], ya que [[p + q = c]]. El teorema de la proyección divide la relación pitagórica en una parte por cateto.",
        },
      ],
      "relatedHeading": "Explorar calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Elige la siguiente herramienta según las medidas que ya conoces, ya que cada calculadora siguiente se encarga de una tarea específica con triángulos rectángulos.",
      "relatedItems": [
        "Calculadora de proyección en un triángulo rectángulo",
        "Calculadora de proyección p en un triángulo rectángulo",
        "Calculadora de proyección q en un triángulo rectángulo",
        "Calculadora de cateto a a partir de la proyección en un triángulo rectángulo",
        "Calculadora de hipotenusa a partir de las proyecciones en un triángulo rectángulo",
        "Calculadora de altura a partir de las proyecciones en un triángulo rectángulo",
        "Calculadora de lados en un triángulo rectángulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora halla el cateto b de un triángulo rectángulo cuando conoces la hipotenusa completa c y la proyección q que pertenece al cateto b. Introduces esas dos longitudes y devuelve la longitud real del lado del cateto b, no un valor al cuadrado ni un segmento de proyección. La fórmula es [[b = \\sqrt{c \\times q}]], donde c es la hipotenusa completa y q es el segmento de la hipotenusa junto al cateto b.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, si [[c = 10]] cm y [[q = 6.4]] cm, entonces [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. El producto 64 es solo un paso intermedio. Tomar la raíz cuadrada lo convierte de nuevo en una longitud, y esa longitud es el lado que buscas.",
            },
            {
              "kind": "p",
              "text": "La calculadora está en la parte superior de esta página, seguida de la fórmula, un diagrama etiquetado, una demostración del teorema de la proyección, ejemplos resueltos y comprobaciones que puedes aplicar a cualquier respuesta. La guía es adecuada para estudiantes de secundaria y bachillerato, profesores, tutores y padres que ayudan con las tareas de geometría.",
            },
          ],
          "h2": "Calculadora de cateto b a partir de la proyección en un triángulo rectángulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora tiene dos campos de entrada. El primero recibe la hipotenusa c, el lado completo opuesto al ángulo recto. El segundo recibe la proyección q, el segmento de la hipotenusa que pertenece al cateto b. Ambas longitudes deben usar la misma unidad, así que convierte primero si una medida está en centímetros y la otra en metros.",
            },
            {
              "kind": "p",
              "text": "La proyección q debe ser menor que c. Esa regla está incorporada en la geometría: q es solo una parte de la hipotenusa, por lo que nunca puede igualar ni superar el lado completo. Si tu valor de q es mayor que c, probablemente has introducido un cateto, la altura o la proyección equivocada.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular cateto b para ver el resultado y usa Restablecer para borrar ambos campos antes de un problema nuevo. El resultado es una longitud en la unidad que introdujiste, así que una hipotenusa de 10 cm y una proyección de 6.4 cm devuelven 8 cm, sin ningún paso extra de conversión.",
            },
          ],
          "h2": "Calcular el cateto b a partir de la proyección en un triángulo rectángulo",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos lados perpendiculares, llamados catetos, y un lado más largo, llamado hipotenusa. Los dos catetos se encuentran en el ángulo recto, y la hipotenusa queda frente a ese ángulo. En esta guía el triángulo es ABC, con el ángulo recto en C, el cateto a es el lado AC, el cateto b es el lado BC y la hipotenusa c es el lado AB.",
            },
            {
              "kind": "p",
              "text": "El cateto b es uno de los dos lados que forman el ángulo recto, así que es un lado auténtico del triángulo. No es un segmento trazado dentro del triángulo ni es la proyección q. La proyección q yace plana sobre la hipotenusa, mientras que el cateto b va desde el vértice B hasta el vértice del ángulo recto C. Mantener separados esos dos papeles es el primer paso para usar la fórmula correctamente.",
            },
            {
              "kind": "p",
              "text": "El cateto b se diferencia del cateto a solo por su posición: el cateto b toca el vértice B y el cateto a toca el vértice A. Cada cateto tiene su propia proyección, por eso la fórmula de b usa q mientras que la fórmula de a usa p, un emparejamiento fijado por la notación.",
            },
            {
              "kind": "p",
              "text": "En cualquier triángulo rectángulo no degenerado, el cateto b es más corto que la hipotenusa. Eso da una comprobación rápida de cada respuesta: si tu cateto b calculado sale más largo que c, algo salió mal en los datos o en la aritmética, y las etiquetas del diagrama son el primer lugar donde mirar.",
            },
          ],
          "h2": "¿Qué es el cateto b en un triángulo rectángulo?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traza la altura desde el vértice del ángulo recto C, perpendicular a la hipotenusa AB. Se encuentra con la hipotenusa en un punto llamado pie, etiquetado D. Ese punto divide la hipotenusa en dos segmentos adyacentes, y esos segmentos son las proyecciones. El segmento AD es la proyección p y el segmento DB es la proyección q.",
            },
            {
              "kind": "p",
              "text": "La proyección q pertenece al cateto b porque está junto al vértice B, el mismo vértice donde comienza el cateto b. En el triángulo pequeño CBD, el cateto b es la hipotenusa y q es uno de sus catetos, que es el vínculo geométrico que hace funcionar el teorema de la proyección. La proyección p, por el mismo razonamiento, pertenece al cateto a, que toca el vértice A.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones son longitudes a lo largo de la hipotenusa, medidas en la misma unidad que los demás lados. No son perpendiculares a nada y no son lados del triángulo original. Una proyección se imagina mejor como la sombra que un cateto proyecta sobre la hipotenusa cuando la altura cae recta hasta ella.",
            },
            {
              "kind": "p",
              "text": "Como p y q son las dos partes de un solo lado recto, suman la hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Esa suma es útil por sí misma. Si conoces c y una proyección, puedes hallar la otra por resta, un paso que la sección posterior sobre la otra proyección desarrolla por completo.",
            },
          ],
          "h2": "¿Qué es la proyección q en un triángulo rectángulo?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección afirma que el cuadrado del cateto b es igual a la hipotenusa multiplicada por su proyección:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Tomar la raíz cuadrada positiva de ambos lados da la fórmula de trabajo de esta página:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "El cálculo se desarrolla en dos etapas distintas. La etapa 1 multiplica la hipotenusa por la proyección, y el resultado es una longitud al cuadrado, no un lado. La etapa 2 toma la raíz cuadrada positiva, que convierte esa longitud al cuadrado de nuevo en una longitud ordinaria. Saltarse la etapa 2 es el error más común con esta fórmula, y la siguiente sección explica por qué la raíz cuadrada no se puede omitir.",
            },
            {
              "kind": "p",
              "text": "Las unidades requieren cuidado en ambas etapas. Si c y q están en centímetros, su producto está en centímetros cuadrados y la raíz cuadrada devuelve centímetros. Mezclar unidades, como metros para c y centímetros para q, da un producto sin sentido, así que convierte a una sola unidad antes de multiplicar. Se usa la raíz positiva porque la longitud de un lado siempre es positiva.",
            },
            {
              "kind": "p",
              "text": "Un pequeño ejemplo numérico muestra ambas etapas en acción. Con [[c = 10]] cm y [[q = 6.4]] cm, la etapa 1 da [[10 \\times 6.4 = 64]] y la etapa 2 da [[b = \\sqrt{64} = 8]] cm. El número 64 no responde ninguna pregunta por sí solo. Solo después de la raíz cuadrada se convierte en la longitud del cateto.",
            },
          ],
          "h2": "Fórmula del cateto b a partir de la proyección en un triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo ABC con altura CD, que muestra que el cateto b al cuadrado es igual a la hipotenusa c multiplicada por la proyección q",
            "caption": "El teorema de la proyección: b al cuadrado es igual a c por q, así que b es igual a la raíz cuadrada de c por q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La raíz cuadrada está ahí porque la multiplicación produce una cantidad al cuadrado. El teorema no dice que el cateto b sea igual al producto de c y q. Dice que el cuadrado del cateto b es igual a ese producto. Deshacer un cuadrado requiere una raíz cuadrada, igual que deshacer una duplicación requiere dividir por la mitad.",
            },
            {
              "kind": "p",
              "text": "Toma [[c = 10]] y [[q = 6.4]]. Su producto es 64, que es [[b^2]], el cuadrado del cateto. El cateto en sí es el número que multiplicado por sí mismo da 64, que es 8. Escribir [[b = 64]] afirmaría un lado de 64 unidades en un triángulo cuya hipotenusa es solo de 10, lo cual es claramente imposible.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente mantiene separadas las tres cantidades, ya que confundirlas causa la mayoría de los errores con esta fórmula.",
            },
          ],
          "h2": "¿Por qué hay una raíz cuadrada en la fórmula?",
          "table": {
            "headers": [
              "Cantidad",
              "Significado",
              "Ejemplo con c = 10, q = 6.4",
            ],
            "rows": [
              [
                "b",
                "La longitud del cateto en sí",
                "8",
              ],
              [
                "b al cuadrado",
                "La longitud del cateto multiplicada por sí misma",
                "64",
              ],
              [
                "c por q",
                "El producto que el teorema iguala con b al cuadrado",
                "64",
              ],
              [
                "Raíz cuadrada de cq",
                "El paso que recupera b a partir de b al cuadrado",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diez pasos cortos te llevan de un diagrama etiquetado a una respuesta comprobada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Encuentra la altura desde el ángulo recto y marca dónde se encuentra con la hipotenusa.",
                "Identifica la hipotenusa completa c, el lado opuesto al ángulo recto.",
                "Identifica la proyección q, el segmento de la hipotenusa junto al vértice B, donde comienza el cateto b.",
                "Comprueba que q sea menor que c. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Convierte c y q a la misma unidad si se dieron en unidades diferentes.",
                "Introduce c en el campo Hipotenusa c.",
                "Introduce q en el campo Proyección q. No introduzcas p aquí, ya que eso devolvería el cateto a.",
                "Haz clic en Calcular cateto b y lee el resultado.",
                "Usa Restablecer antes de comenzar un problema nuevo.",
              ],
            },
            {
              "kind": "p",
              "text": "La calculadora no acepta p, así que un problema que solo dé p necesita un paso extra de resta, explicado más abajo. Introducir p en el campo q produce igualmente un número, pero será el cateto equivocado, por lo que la comprobación de etiquetas del paso 4 es lo más importante.",
            },
          ],
          "h2": "Cómo usar la calculadora de cateto b en un triángulo rectángulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm y [[q = 6.4]] cm. Los cuatro pasos siguientes muestran todo el procedimiento, sin saltarse nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: b = sqrt(cq).",
                "Sustituye los valores: b = sqrt(10 x 6.4).",
                "Multiplica dentro de la raíz: b = sqrt(64).",
                "Toma la raíz cuadrada: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta, 8 cm, es el lado perpendicular real BC, no una proyección ni un área. Una breve verificación cierra el círculo: [[b^2 = 8^2 = 64]] y [[c \\times q = 10 \\times 6.4 = 64]], así que ambos lados del teorema coinciden.",
            },
            {
              "kind": "p",
              "text": "Como referencia, la otra proyección es [[p = 10 - 6.4 = 3.6]] cm, el cateto a es [[a = \\sqrt{10 \\times 3.6} = 6]] cm y la altura es [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, lo que confirma el conocido triángulo rectángulo 6-8-10.",
            },
          ],
          "h2": "Ejemplo paso a paso para hallar el cateto b",
          "image": {
            "alt": "Triángulo rectángulo con hipotenusa de 10 cm y proyección de 6.4 cm, resuelto para dar el cateto b igual a 8 cm",
            "caption": "Ejemplo resuelto: c = 10 cm y q = 6.4 cm dan b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b y el lado AB es la hipotenusa c. La altura CD baja desde C perpendicular a AB y la toca en D, y la marca de ángulo recto en D confirma que CD es realmente perpendicular.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en dos partes: el segmento AD es la proyección p y el segmento DB es la proyección q. El cateto b y la proyección q están destacados porque son el par del que trata esta página. Recorre el diagrama en este orden para fijar las etiquetas: empieza en B, sigue por el cateto b hasta C, luego por el cateto a hasta A y vuelve por la hipotenusa desde A hasta B, deteniéndote en D para ver la división en p y q.",
            },
            {
              "kind": "p",
              "text": "El emparejamiento de b con q se hace visible en el triángulo pequeño CBD, donde el cateto b es la hipotenusa y q es el lado que yace sobre la hipotenusa grande. Como el triángulo CBD es semejante al triángulo ABC, la razón de q a b en el triángulo pequeño es igual a la razón de b a c en el grande, lo que la sección de la demostración convierte en [[b^2 = cq]].",
            },
          ],
          "h2": "Diagrama del cateto b a partir de la proyección en un triángulo rectángulo, explicado",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD hasta la hipotenusa AB, cateto b y proyección q destacados, con los catetos a y b, la hipotenusa c, las proyecciones p y q y la altura h etiquetados",
            "caption": "Triángulo principal ABC: la altura CD divide la hipotenusa AB en la proyección p (AD) y la proyección q (DB), con el cateto b (BC) destacado.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración se apoya en triángulos semejantes. Trazar la altura CD divide el triángulo ABC en dos triángulos rectángulos más pequeños, ACD y CBD, y ambos son semejantes al triángulo original. Semejanza significa que sus lados correspondientes mantienen la misma razón, y una de esas razones da directamente el teorema de la proyección.",
            },
            {
              "kind": "p",
              "text": "Concéntrate en el triángulo CBD y en todo el triángulo ABC. Ambos contienen el ángulo en B y ambos contienen un ángulo recto, así que sus terceros ángulos también deben coincidir. Igualar los lados que ocupan las mismas posiciones da la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora sustituye los símbolos estándar: [[DB = q]], [[BC = b]] y [[AB = c]]. La proporción queda así:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicar en cruz elimina las fracciones. El numerador izquierdo por el denominador derecho es igual al numerador derecho por el denominador izquierdo, así que [[q \\times c = b \\times b]], que es:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Tomar la raíz cuadrada positiva de ambos lados termina la demostración, dando [[b = \\sqrt{c \\times q}]]. El mismo argumento aplicado al otro triángulo pequeño, ACD, da [[a^2 = c \\times p]]. La semejanza hace todo el trabajo: los lados correspondientes de triángulos semejantes se mantienen proporcionales.",
            },
          ],
          "h2": "¿Por qué funciona el teorema de la proyección?",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los triángulos pequeños semejantes ACD y CBD, que muestran la proporción q sobre b igual a b sobre c",
            "caption": "Demostración por triángulos semejantes: q sobre b es igual a b sobre c, así que al multiplicar en cruz se obtiene b al cuadrado igual a c por q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, la sustitución y la respuesta final. El comentario se mantiene breve para que la aritmética quede visible, y cada ejemplo mantiene sus unidades consistentes de principio a fin.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm y [[q = 6.4]] cm, la fórmula da [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], así que [[b = 8]] cm. El producto 64 es un cuadrado perfecto, así que la respuesta es exacta, sin necesidad de redondeo. Este es el mismo triángulo del ejemplo paso a paso, y su otro cateto es de 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Resultado con cuadrado perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Cuando el producto es un cuadrado perfecto, la respuesta es exacta. La otra proyección aquí es de 16 cm, que se empareja con un cateto de 20 cm, formando el clásico triángulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Cuadrado no perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12]] cm y [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], así que [[b \\approx 7.746]] cm. El producto 60 no es un cuadrado perfecto, así que la respuesta queda como una aproximación redondeada a tres decimales. Observa que 7.746 cm es más corto que la hipotenusa de 12 cm, como debe ser.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Medidas decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12.5]] cm y [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], así que [[b \\approx 6.325]] cm. Esto coincide con el valor de la guía del cateto a, donde el mismo producto 40 apareció con los papeles de p y q intercambiados, un recordatorio útil de que entradas diferentes pueden compartir un producto. Mantén el producto completo dentro de la raíz hasta el paso final de redondeo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Triángulo más grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm y [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Los números más grandes no cambian nada del método: multiplica y luego toma la raíz. La otra proyección aquí es de 18 cm, que se empareja con un cateto de 30 cm, formando el clásico triángulo 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Proyecciones iguales",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 20]] cm y [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, así que [[b \\approx 14.142]] cm. Las proyecciones iguales significan que la altura incide en el punto medio de la hipotenusa, lo que ocurre exactamente cuando los dos catetos son iguales. El triángulo es, por tanto, un triángulo rectángulo isósceles, y el cateto a es igual al cateto b.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 0.5]] m y [[q = 20]] cm, convierte primero: 0.5 m equivale a 50 cm. Entonces [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], así que [[b \\approx 31.623]] cm. Multiplicar 0.5 por 20 sin convertir habría dado una raíz de 10, una respuesta incorrecta sin ninguna unidad válida detrás.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 16]] ft y [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. El producto 144 es un cuadrado perfecto, así que la respuesta es exacta. Una comprobación rápida pasa: 12 ft son tres cuartas partes de la hipotenusa, y el otro cateto resulta ser de unos 10.583 ft, que es más corto que b pero sigue siendo un lado real del mismo triángulo.",
            },
          ],
          "h2": "Ejemplos resueltos para hallar el cateto b a partir de la proyección",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Algunos problemas dan p en lugar de q. La calculadora de esta página no acepta p, pero eso es solo un desvío de un paso, no un callejón sin salida. Como las dos proyecciones suman la hipotenusa, resta primero para recuperar q:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Toma [[c = 25]] cm y [[p = 9]] cm. Restar da [[q = 25 - 9 = 16]] cm. Ahora se aplica la fórmula ordinaria: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Si hubieras introducido 9 directamente como q, la calculadora habría devuelto 15 cm, que es el cateto a, no el cateto b.",
            },
            {
              "kind": "p",
              "text": "La <a href=\"/right-triangle-projection-p-calculator/\">calculadora de proyección p</a> puede ayudar cuando la propia p necesita hallarse, y la <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> cubre el paso inverso. En cualquier caso, la regla sigue siendo la misma: halla q primero y luego usa [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Cómo hallar el cateto b cuando se conoce la otra proyección",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un teorema vincula tres cantidades, así que al despejarlo se halla cualquiera que falte. Las tres formas son:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente muestra cada despeje, qué halla y qué debe conocerse primero.",
            },
          ],
          "h2": "Relación entre el cateto b, la hipotenusa y la proyección q",
          "table": {
            "headers": [
              "Cantidad que falta",
              "Fórmula",
              "Valores conocidos necesarios",
            ],
            "rows": [
              [
                "Cateto b",
                "b = sqrt(cq)",
                "Hipotenusa c y proyección q",
              ],
              [
                "Hipotenusa c",
                "c = b al cuadrado / q",
                "Cateto b y proyección q",
              ],
              [
                "Proyección q",
                "q = b al cuadrado / c",
                "Cateto b e hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto a sigue la imagen especular de la fórmula del cateto b. Donde el cateto b se empareja con la proyección q, el cateto a se empareja con la proyección p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un solo triángulo consistente para ver ambos catetos juntos: [[c = 25]], [[p = 9]] y [[q = 16]]. Entonces [[a = \\sqrt{25 \\times 9} = 15]] y [[b = \\sqrt{25 \\times 16} = 20]]. Los dos catetos comparten la misma hipotenusa, pero se apoyan en proyecciones diferentes, por eso identificar p y q correctamente decide qué cateto obtienes.",
            },
            {
              "kind": "p",
              "text": "Los catetos también se limitan entre sí mediante el teorema de Pitágoras, tratado dos secciones más abajo: conocer un cateto y la hipotenusa determina el otro. Para problemas que parten de p en lugar de q, la <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir de la proyección</a> aplica el mismo método con el otro emparejamiento.",
            },
          ],
          "h2": "Relación entre el cateto b y el cateto a",
          "image": {
            "alt": "Triángulo rectángulo que compara la proyección p emparejada con el cateto a frente a la proyección q emparejada con el cateto b, con c igual a 25, p igual a 9 y q igual a 16",
            "caption": "Emparejado correctamente: a usa p (sqrt(25 x 9) = 15) y b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
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
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Suma la fórmula correspondiente del cateto a, [[a^2 = c \\times p]], para obtener:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al sacar factor común c del lado derecho se obtiene [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], la sustitución produce el resultado conocido:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una comprobación numérica con el triángulo 9-16-25 lo confirma: [[a^2 + b^2 = 225 + 400 = 625]] y [[c^2 = 25^2 = 625]]. Los dos teoremas no son rivales. El teorema de la proyección divide la relación pitagórica en una parte por cateto, y al sumar las partes se reconstruye.",
            },
          ],
          "h2": "Relación entre la proyección q y el teorema de Pitágoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tres comprobaciones independientes detectan casi todos los errores. Aplica al menos una de ellas a cada respuesta, y las tres cuando el problema importa.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comprobación con el teorema de la proyección",
            },
            {
              "kind": "p",
              "text": "Eleva tu respuesta al cuadrado y compárala con el producto de c y q. Para [[c = 25]], [[q = 16]] y [[b = 20]]: [[b^2 = 400]] y [[c \\times q = 400]], así que la respuesta pasa. Si los dos números difieren, o bien los datos o bien el paso de la raíz cuadrada salieron mal.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Comprobación con el teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Halla el cateto a a partir de p y luego comprueba [[a^2 + b^2 = c^2]]. Con [[p = 9]], [[q = 16]] y [[c = 25]]: [[a = 15]], [[b = 20]] y [[225 + 400 = 625 = 25^2]]. Esta comprobación va más allá de la calculadora, ya que pone a prueba todo el triángulo, no solo una fórmula.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Comprobaciones de tamaño y suma",
            },
            {
              "kind": "p",
              "text": "Confirma que q sea menor que c, que [[p + q = c]] cuando se conoce p y que el cateto b sea más corto que la hipotenusa. En el ejemplo, 16 es menor que 25, [[9 + 16 = 25]] y 20 es más corto que 25. Cualquier fallo aquí apunta a un error de etiquetado, no a un desliz aritmético.",
            },
          ],
          "h2": "Cómo verificar el cateto b calculado",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho propiedades se deducen directamente de [[b = \\sqrt{c \\times q}]] y de la geometría que hay detrás. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "items": [
                "El cateto b siempre es más corto que la hipotenusa en un triángulo rectángulo no degenerado, ya que q es solo una parte de c.",
                "La proyección q siempre es menor que c y siempre es positiva. Las proyecciones cero o negativas no describen ningún triángulo real.",
                "Aumentar q manteniendo c fijo aumenta b, porque el producto dentro de la raíz crece.",
                "Aumentar c manteniendo q fijo aumenta b matemáticamente, siempre que los nuevos valores sigan describiendo un triángulo real con q menor que c.",
                "Intercambiar p y q cambia qué cateto se calcula: q da el cateto b y p da el cateto a.",
                "Las proyecciones iguales producen catetos iguales. Con c = 20 y p = q = 10, ambos catetos son iguales a 10 por la raíz cuadrada de 2, unos 14.142.",
                "El resultado es una longitud, no un área. El producto al cuadrado es solo un paso intermedio, y la raíz cuadrada restaura las unidades ordinarias de longitud.",
                "Escalar todas las medidas por el mismo factor escala el cateto b por ese factor. Duplicar c y q duplica b, ya que el producto se cuadruplica y su raíz se duplica.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Cuando la altura cae exactamente en el punto medio de la hipotenusa, el triángulo es isósceles y los dos catetos deben coincidir, como muestra el diagrama siguiente.",
            },
          ],
          "h2": "Propiedades importantes del cateto b a partir de la proyección",
          "image": {
            "alt": "Triángulo rectángulo isósceles con hipotenusa 20, proyecciones iguales p y q de 10, y catetos a y b cada uno igual a 10 raíz de 2",
            "caption": "Proyecciones iguales: c = 20 con p = q = 10 da a = b = 10 raíz de 2, unos 14.142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada error siguiente va seguido de su corrección. La mayoría se remonta al etiquetado, no a la aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Olvidar la raíz cuadrada: informar cq como respuesta. Con c = 10 y q = 6.4, la respuesta es 8 cm, no 64.",
                "Confundir b con b al cuadrado: 64 es b al cuadrado en ese ejemplo, mientras que 8 es el cateto. Di cuál de los dos quieres decir antes de escribir un número.",
                "Usar la proyección p en lugar de q: introducir p devuelve el cateto a. Con c = 25 y p = 9, el resultado 15 es el cateto a, no el cateto b.",
                "Introducir un cateto en el campo de la hipotenusa: la hipotenusa es el lado opuesto al ángulo recto y el lado más largo. Un cateto introducido como c distorsiona todos los pasos posteriores.",
                "Confundir la hipotenusa con una proyección: c es el lado completo, mientras que q es solo una parte de él. Comprueba que q sea menor que c antes de calcular.",
                "Usar q mayor o igual que c: no existe tal triángulo, ya que q es parte de c. Revisa las etiquetas del diagrama si esto ocurre.",
                "Mezclar centímetros y metros: convierte primero, como en el Ejemplo 7, donde 0.5 m se convirtió en 50 cm antes de multiplicar por 20 cm.",
                "Usar medidas negativas: las longitudes son positivas, así que una entrada negativa indica un error de datos, no un cateto negativo.",
                "Aplicar la fórmula a un triángulo no rectángulo: el teorema de la proyección necesita la altura desde un ángulo recto. Sin ángulo recto, no hay proyección q en este sentido.",
                "Redondear demasiado pronto: redondear el producto antes de tomar la raíz desplaza la respuesta. Mantén la precisión completa hasta el paso final.",
                "Usar la correspondencia de lados equivocada en el diagrama: emparejar q con a, o p con b, intercambia los catetos. Empareja q con el cateto que toca el vértice B.",
                "Tratar la altura como una proyección: la altura h es perpendicular a la hipotenusa, no una parte de ella, así que nunca pertenece al campo q.",
              ],
            },
            {
              "kind": "p",
              "text": "Si una respuesta parece incorrecta, detente y vuelve a etiquetar el diagrama antes de recalcular. La mayoría de los errores anteriores desaparecen una vez que p y q están claramente marcados en la hipotenusa y todo lo demás se deja a un lado.",
            },
          ],
          "h2": "Errores comunes al hallar el cateto b a partir de la proyección",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es la tarea de geometría y el trabajo en clase, donde los problemas de proyección ponen a prueba si los estudiantes pueden etiquetar un diagrama y aplicar [[b^2 = c \\times q]] en lugar de recurrir al teorema de Pitágoras por costumbre. Los ejercicios de triángulos semejantes usan el mismo planteamiento, ya que la propia demostración es un ejercicio de emparejar lados correspondientes.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el teorema cuando un triángulo rectángulo debe reconstruirse a partir de medidas parciales: si un dibujo da la hipotenusa y el pie de la altura, el cateto que falta se obtiene sin volver a medir la figura. Los profesores también usan el planteamiento como lección puente entre la suma de segmentos y la semejanza.",
            },
            {
              "kind": "p",
              "text": "Una condición limita cada aplicación: la geometría requerida del triángulo rectángulo debe existir realmente. El teorema describe relaciones geométricas exactas, no medidas aproximadas de campo, así que nunca sustituye una medición topográfica cuidadosa ni una medición profesional de ingeniería. Dentro de su ámbito adecuado, sin embargo, convierte dos longitudes conocidas en una tercera con una sola multiplicación y una raíz cuadrada.",
            },
          ],
          "h2": "Aplicaciones prácticas del teorema de la proyección",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta resolver los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos, y el último problema combina varias ideas de esta guía.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 36]] cm y proyección [[q = 9]] cm. Halla el cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Proyección decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 26]] cm y [[q = 6.5]] cm, halla el cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hipotenusa grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 100]] cm y [[q = 36]] cm, halla el cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Una hipotenusa mide [[c = 1.5]] m y su proyección q mide 24 cm. Halla el cateto b en centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Halla q a partir de p y c primero",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 65]] cm y proyección [[p = 49]] cm. Halla el cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Varios pasos con el cateto a y Pitágoras",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm y [[q = 32]] cm, halla el cateto b, luego halla el cateto a y comprueba el resultado con el teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: Convierte 1.5 m a 150 cm, luego [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: Primero [[q = 65 - 49 = 16]] cm, luego [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. La otra proyección es [[p = 50 - 32 = 18]] cm, así que [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Comprueba: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-intro": "Calculadora de cateto b a partir de la proyección en un triángulo rectángulo",
        "sec-calculate": "Calcular el cateto b a partir de la proyección en un triángulo rectángulo",
        "sec-what-leg-b": "¿Qué es el cateto b en un triángulo rectángulo?",
        "sec-what-projection-q": "¿Qué es la proyección q en un triángulo rectángulo?",
        "sec-formula": "Fórmula del cateto b a partir de la proyección en un triángulo rectángulo",
        "sec-why-sqrt": "¿Por qué hay una raíz cuadrada en la fórmula?",
        "sec-how": "Cómo usar la calculadora de cateto b en un triángulo rectángulo",
        "sec-step-example": "Ejemplo paso a paso para hallar el cateto b",
        "sec-diagram": "Diagrama del cateto b a partir de la proyección en un triángulo rectángulo, explicado",
        "sec-proof": "¿Por qué funciona el teorema de la proyección?",
        "sec-examples": "Ejemplos resueltos para hallar el cateto b a partir de la proyección",
        "sec-other-projection": "Cómo hallar el cateto b cuando se conoce la otra proyección",
        "sec-relationship": "Relación entre el cateto b, la hipotenusa y la proyección q",
        "sec-leg-a": "Relación entre el cateto b y el cateto a",
        "sec-pythagoras": "Relación entre la proyección q y el teorema de Pitágoras",
        "sec-verify": "Cómo verificar el cateto b calculado",
        "sec-properties": "Propiedades importantes del cateto b a partir de la proyección",
        "sec-mistakes": "Errores comunes al hallar el cateto b a partir de la proyección",
        "sec-applications": "Aplicaciones prácticas del teorema de la proyección",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explorar calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
    },
};
