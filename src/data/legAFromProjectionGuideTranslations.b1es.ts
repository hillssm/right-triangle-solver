// legAFromProjectionGuideTranslations.bes.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula para hallar el cateto a a partir de la proyección p?",
          "answer": "La fórmula es [[a = \\sqrt{c \\times p}]], donde c es la hipotenusa completa y p es la proyección que corresponde al cateto a. Por ejemplo, [[c = 10]] cm y [[p = 3.6]] cm dan [[a = 6]] cm.",
        },
        {
          "question": "¿Por qué multiplicamos c por p?",
          "answer": "La multiplicación proviene de los triángulos semejantes. El triángulo ACD es semejante al triángulo ABC, lo que da [[p / a = a / c]], y al multiplicar en cruz se obtiene [[a^2 = c \\times p]]. El producto es el cuadrado del cateto, no el cateto en sí.",
        },
        {
          "question": "¿Por qué es necesaria una raíz cuadrada?",
          "answer": "Porque el producto cp es igual a a al cuadrado, no a a. La raíz cuadrada deshace el cuadrado y devuelve una longitud ordinaria. Sin ella, se informaría 36 en lugar de 6 en el ejemplo con c = 10 y p = 3.6.",
        },
        {
          "question": "¿Qué representa la proyección p?",
          "answer": "La proyección p es el segmento de la hipotenusa junto al vértice A, creado cuando la altura desde el ángulo recto corta a la hipotenusa. En el triángulo ABC con altura CD, [[p = AD]], y se encuentra a lo largo de la hipotenusa.",
        },
        {
          "question": "¿Es la proyección p lo mismo que el cateto a?",
          "answer": "No. El cateto a es el lado AC, uno de los lados que forman el ángulo recto, mientras que la proyección p es el segmento AD a lo largo de la hipotenusa. Son longitudes distintas en posiciones distintas, relacionadas solo por [[a^2 = c \\times p]].",
        },
        {
          "question": "¿Puedo usar la proyección q para hallar el cateto a?",
          "answer": "No directamente. La proyección q se empareja con el cateto b, así que al introducir q se obtiene el cateto b. Para hallar el cateto a a partir de q, primero recupera p con [[p = c - q]] y luego usa [[a = \\sqrt{c \\times p}]].",
        },
        {
          "question": "¿Qué hago si solo conozco la proyección q?",
          "answer": "Réstala de la hipotenusa: [[p = c - q]]. Con [[c = 25]] cm y [[q = 16]] cm, [[p = 9]] cm, y luego [[a = \\sqrt{25 \\times 9} = 15]] cm.",
        },
        {
          "question": "¿Puede la proyección p ser igual a la hipotenusa?",
          "answer": "No. La proyección p es solo una parte de la hipotenusa, así que debe ser menor que c. Si p fuera igual a c, q sería cero y el triángulo sería degenerado en lugar de un triángulo rectángulo auténtico.",
        },
        {
          "question": "¿Cómo verifico el cateto calculado?",
          "answer": "Eleva la respuesta al cuadrado y comprueba que sea igual a [[c \\times p]]. También puedes hallar el cateto b a partir de q y comprobar [[a^2 + b^2 = c^2]], y confirmar que p es menor que c y que el cateto a es más corto que la hipotenusa.",
        },
        {
          "question": "¿Qué ocurre cuando p y q son iguales?",
          "answer": "La altura cae en el punto medio de la hipotenusa, y los dos catetos son iguales, así que el triángulo es un triángulo rectángulo isósceles. Con [[c = 20]] cm y [[p = q = 10]] cm, ambos catetos son iguales a [[10\\sqrt{2}]] cm, aproximadamente 14.142 cm.",
        },
        {
          "question": "¿Puedo hallar el cateto b con el mismo teorema?",
          "answer": "Sí, con la fórmula espejo [[b = \\sqrt{c \\times q}]]. El cateto b se empareja con la proyección q, igual que el cateto a se empareja con p. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir de la proyección</a> está hecha para ese cálculo.",
        },
        {
          "question": "¿Está relacionado el teorema de la proyección con el teorema de Pitágoras?",
          "answer": "Sí. Al sumar las dos fórmulas de proyección se obtiene [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], ya que [[p + q = c]]. El teorema de la proyección divide la relación pitagórica en una parte por cateto.",
        },
      ],
      "relatedHeading": "Explora calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Elige la siguiente herramienta según las medidas que ya conozcas, ya que cada calculadora siguiente se encarga de una tarea específica de triángulos rectángulos.",
      "relatedItems": [
        "Calculadora de proyección de triángulo rectángulo",
        "Calculadora de proyección P de triángulo rectángulo",
        "Calculadora de proyección Q de triángulo rectángulo",
        "Calculadora de cateto B a partir de la proyección de triángulo rectángulo",
        "Calculadora de hipotenusa a partir de proyecciones de triángulo rectángulo",
        "Calculadora de altura a partir de proyecciones de triángulo rectángulo",
        "Calculadora de lados de triángulo rectángulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora halla el cateto a de un triángulo rectángulo cuando conoces la hipotenusa completa c y la proyección p que corresponde al cateto a. Introduces esas dos longitudes y devuelve la longitud real del lado del cateto a, no un valor al cuadrado ni un segmento de proyección. La fórmula es [[a = \\sqrt{c \\times p}]], donde c es la hipotenusa completa y p es el segmento de la hipotenusa junto al cateto a.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, si [[c = 10]] cm y [[p = 3.6]] cm, entonces [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. El producto 36 es solo un paso intermedio. Al tomar la raíz cuadrada vuelve a convertirse en una longitud, y esa longitud es el lado que buscas.",
            },
            {
              "kind": "p",
              "text": "La calculadora se encuentra en la parte superior de esta página, seguida de la fórmula, un diagrama etiquetado, una demostración del teorema de la proyección, ejemplos resueltos y comprobaciones que puedes aplicar a cualquier respuesta. La guía es adecuada para estudiantes de secundaria, docentes, tutores y padres que ayudan con las tareas de geometría.",
            },
          ],
          "h2": "Calculadora de cateto A a partir de la proyección de triángulo rectángulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora tiene dos campos de entrada. El primero recibe la hipotenusa c, el lado completo opuesto al ángulo recto. El segundo recibe la proyección p, el segmento de la hipotenusa que corresponde al cateto a. Ambas longitudes deben usar la misma unidad, así que convierte primero si una medida está en centímetros y la otra en metros.",
            },
            {
              "kind": "p",
              "text": "La proyección p debe ser menor que c. Esa regla forma parte de la geometría: p es solo una parte de la hipotenusa, así que nunca puede ser igual a todo el lado ni superarlo. Si tu valor de p es mayor que c, probablemente hayas introducido un cateto, la altura o la proyección equivocada.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular cateto a para ver el resultado, y usa Restablecer para borrar ambos campos antes de un problema nuevo. El resultado es una longitud en la unidad que introdujiste, así que una hipotenusa de 10 cm y una proyección de 3.6 cm devuelven 6 cm, sin ningún paso de conversión adicional.",
            },
          ],
          "h2": "Calcular el cateto A de un triángulo rectángulo a partir de la proyección",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos lados perpendiculares, llamados catetos, y un lado más largo, llamado hipotenusa. Los dos catetos se encuentran en el ángulo recto, y la hipotenusa se sitúa frente a ese ángulo. En esta guía el triángulo es ABC con el ángulo recto en C, el cateto a es el lado AC, el cateto b es el lado BC y la hipotenusa c es el lado AB.",
            },
            {
              "kind": "p",
              "text": "El cateto a es uno de los dos lados que forman el ángulo recto, así que es un lado auténtico del triángulo. No es un segmento trazado dentro del triángulo, y no es la proyección p. La proyección p se extiende a lo largo de la hipotenusa, mientras que el cateto a va desde el vértice A hasta el vértice del ángulo recto C. Mantener separados esos dos papeles es el primer paso para usar la fórmula correctamente.",
            },
            {
              "kind": "p",
              "text": "El cateto a se diferencia del cateto b solo por su posición: el cateto a toca el vértice A, y el cateto b toca el vértice B. Cada cateto tiene su propia proyección, por eso la fórmula para a usa p mientras que la fórmula para b usa q, un emparejamiento fijado por la notación.",
            },
            {
              "kind": "p",
              "text": "En cualquier triángulo rectángulo no degenerado, el cateto a es más corto que la hipotenusa. Eso da una comprobación rápida para cada respuesta: si el cateto a calculado resulta mayor que c, algo falló en los datos o en la aritmética, y las etiquetas del diagrama son el primer lugar donde mirar.",
            },
          ],
          "h2": "¿Qué es el cateto A en un triángulo rectángulo?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traza la altura desde el vértice del ángulo recto C perpendicular a la hipotenusa AB. Corta a la hipotenusa en un punto llamado pie, etiquetado D. Ese punto divide la hipotenusa en dos segmentos adyacentes, y esos segmentos son las proyecciones. El segmento AD es la proyección p, y el segmento DB es la proyección q.",
            },
            {
              "kind": "p",
              "text": "La proyección p corresponde al cateto a porque se sitúa junto al vértice A, el mismo vértice donde comienza el cateto a. En el triángulo pequeño ACD, el cateto a es la hipotenusa y p es uno de sus catetos, que es el vínculo geométrico que hace funcionar el teorema de la proyección. La proyección q, por el mismo razonamiento, corresponde al cateto b, que toca el vértice B.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones son longitudes a lo largo de la hipotenusa, medidas en la misma unidad que los demás lados. No son perpendiculares a nada, y no son lados del triángulo original. Una proyección se imagina mejor como la sombra que un cateto proyecta sobre la hipotenusa cuando la altura cae en línea recta hasta ella.",
            },
            {
              "kind": "p",
              "text": "Como p y q son las dos partes de un mismo lado recto, suman la hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Esa suma es útil por sí misma. Si conoces c y una proyección, puedes hallar la otra restando, un paso que la sección posterior sobre la otra proyección desarrolla por completo.",
            },
          ],
          "h2": "¿Qué es la proyección P en un triángulo rectángulo?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección establece que el cuadrado del cateto a es igual a la hipotenusa multiplicada por su proyección:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Al tomar la raíz cuadrada positiva de ambos lados se obtiene la fórmula de trabajo de esta página:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "El cálculo se desarrolla en dos etapas distintas. La etapa 1 multiplica la hipotenusa por la proyección, y el resultado es una longitud al cuadrado, no un lado. La etapa 2 toma la raíz cuadrada positiva, que convierte esa longitud al cuadrado de nuevo en una longitud ordinaria. Omitir la etapa 2 es el error más común con esta fórmula, y la siguiente sección explica por qué la raíz cuadrada no puede dejarse fuera.",
            },
            {
              "kind": "p",
              "text": "Las unidades exigen cuidado en ambas etapas. Si c y p están ambas en centímetros, su producto está en centímetros cuadrados, y la raíz cuadrada devuelve centímetros. Mezclar unidades, como metros para c y centímetros para p, da un producto sin sentido, así que convierte a una sola unidad antes de multiplicar. Se usa la raíz positiva porque la longitud de un lado siempre es positiva.",
            },
            {
              "kind": "p",
              "text": "Un pequeño ejemplo numérico muestra ambas etapas en acción. Con [[c = 10]] cm y [[p = 3.6]] cm, la etapa 1 da [[10 \\times 3.6 = 36]], y la etapa 2 da [[a = \\sqrt{36} = 6]] cm. El número 36 no responde por sí solo a ninguna pregunta. Solo después de la raíz cuadrada se convierte en la longitud del cateto.",
            },
          ],
          "h2": "Fórmula del cateto A de un triángulo rectángulo a partir de la proyección",
          "image": {
            "alt": "Triángulo rectángulo ABC con altura CD, que muestra que el cateto a al cuadrado es igual a la hipotenusa c multiplicada por la proyección p",
            "caption": "El teorema de la proyección: a al cuadrado es igual a c por p, así que a es igual a la raíz cuadrada de c por p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La raíz cuadrada está ahí porque la multiplicación produce una cantidad al cuadrado. El teorema no dice que el cateto a sea igual al producto de c por p. Dice que el cuadrado del cateto a es igual a ese producto. Deshacer un cuadrado exige una raíz cuadrada, igual que deshacer una duplicación exige dividir entre dos.",
            },
            {
              "kind": "p",
              "text": "Toma [[c = 10]] y [[p = 3.6]]. Su producto es 36, que es [[a^2]], el cuadrado del cateto. El cateto en sí es el número que multiplicado por sí mismo da 36, es decir, 6. Escribir [[a = 36]] afirmaría un lado de 36 unidades en un triángulo cuya hipotenusa es solo de 10, lo cual es claramente imposible.",
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
              "Ejemplo con c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "La longitud del cateto en sí",
                "6",
              ],
              [
                "a al cuadrado",
                "La longitud del cateto multiplicada por sí misma",
                "36",
              ],
              [
                "c por p",
                "El producto que el teorema iguala con a al cuadrado",
                "36",
              ],
              [
                "Raíz cuadrada de cp",
                "El paso que recupera a a partir de a al cuadrado",
                "6",
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
                "Halla la altura desde el ángulo recto y marca dónde corta a la hipotenusa.",
                "Identifica la hipotenusa completa c, el lado opuesto al ángulo recto.",
                "Identifica la proyección p, el segmento de la hipotenusa junto al vértice A, donde comienza el cateto a.",
                "Comprueba que p sea menor que c. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Convierte c y p a la misma unidad si se dieron en unidades distintas.",
                "Introduce c en el campo Hipotenusa c.",
                "Introduce p en el campo Proyección p. No introduzcas q aquí, ya que eso devolvería el cateto b.",
                "Haz clic en Calcular cateto a y lee el resultado.",
                "Usa Restablecer antes de comenzar un problema nuevo.",
              ],
            },
            {
              "kind": "p",
              "text": "La calculadora no acepta q, así que un problema que solo dé q necesita un paso adicional de resta, que se trata más abajo. Introducir q en el campo p sigue produciendo un número, pero será el cateto equivocado, así que la comprobación de etiquetas del paso 4 es la más importante.",
            },
          ],
          "h2": "Cómo usar la calculadora de cateto A de triángulo rectángulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm y [[p = 3.6]] cm. Los cuatro pasos siguientes muestran todo el procedimiento, sin omitir nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: a = sqrt(cp).",
                "Sustituye los valores: a = sqrt(10 x 3.6).",
                "Multiplica dentro de la raíz: a = sqrt(36).",
                "Toma la raíz cuadrada: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta 6 cm es el lado perpendicular real AC, no una proyección ni un área. Una breve verificación cierra el círculo: [[a^2 = 6^2 = 36]] y [[c \\times p = 10 \\times 3.6 = 36]], así que ambos lados del teorema coinciden.",
            },
            {
              "kind": "p",
              "text": "Como referencia, la otra proyección es [[q = 10 - 3.6 = 6.4]] cm, el cateto b es [[b = \\sqrt{10 \\times 6.4} = 8]] cm, y la altura es [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, lo que confirma el conocido triángulo rectángulo 6-8-10.",
            },
          ],
          "h2": "Ejemplo paso a paso para hallar el cateto A",
          "image": {
            "alt": "Triángulo rectángulo con hipotenusa de 10 cm y proyección de 3.6 cm, resuelto para dar un cateto a igual a 6 cm",
            "caption": "Ejemplo resuelto: c = 10 cm y p = 3.6 cm dan a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b, y el lado AB es la hipotenusa c. La altura CD baja desde C perpendicular a AB y la toca en D, y la marca de ángulo recto en D confirma que CD es realmente perpendicular.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en dos partes: el segmento AD es la proyección p y el segmento DB es la proyección q. El cateto a y la proyección p están destacados porque son la pareja de la que trata esta página. Recorre el diagrama en este orden para fijar las etiquetas: comienza en A, sigue por el cateto a hasta C, luego por el cateto b hasta B, y después vuelve por la hipotenusa desde B hasta A, deteniéndote en D para ver la división en q y p.",
            },
            {
              "kind": "p",
              "text": "El emparejamiento de a con p se hace visible en el triángulo pequeño ACD, donde el cateto a es la hipotenusa y p es el lado situado a lo largo de la hipotenusa grande. Como el triángulo ACD es semejante al triángulo ABC, la razón de p a a en el triángulo pequeño es igual a la razón de a a c en el grande, lo que la sección de la demostración convierte en [[a^2 = cp]].",
            },
          ],
          "h2": "Diagrama del cateto A de triángulo rectángulo a partir de la proyección, explicado",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD hasta la hipotenusa AB, cateto a y proyección p destacados, con los catetos a y b, la hipotenusa c, las proyecciones p y q, y la altura h etiquetados",
            "caption": "Triángulo principal ABC: la altura CD divide la hipotenusa AB en la proyección p (AD) y la proyección q (DB), con el cateto a (AC) destacado.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración se apoya en los triángulos semejantes. Al trazar la altura CD, el triángulo ABC queda dividido en dos triángulos rectángulos más pequeños, ACD y CBD, y ambos son semejantes al triángulo original. La semejanza significa que sus lados correspondientes mantienen la misma razón, y una de esas razones da directamente el teorema de la proyección.",
            },
            {
              "kind": "p",
              "text": "Concéntrate en el triángulo ACD y en todo el triángulo ABC. Ambos contienen el ángulo en A, y ambos contienen un ángulo recto, así que sus terceros ángulos también deben coincidir. Al emparejar los lados que ocupan las mismas posiciones se obtiene la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora sustituye los símbolos habituales: [[AD = p]], [[AC = a]] y [[AB = c]]. La proporción se convierte en:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Al multiplicar en cruz se eliminan las fracciones. El numerador izquierdo por el denominador derecho es igual al numerador derecho por el denominador izquierdo, así que [[p \\times c = a \\times a]], que es:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Al tomar la raíz cuadrada positiva de ambos lados se completa la demostración, dando [[a = \\sqrt{c \\times p}]]. El mismo argumento aplicado al otro triángulo pequeño, CBD, da [[b^2 = c \\times q]]. La semejanza hace todo el trabajo: los lados correspondientes de triángulos semejantes mantienen la proporción.",
            },
          ],
          "h2": "¿Por qué funciona el teorema de la proyección?",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los triángulos semejantes más pequeños ACD y CBD, que muestran la proporción p sobre a igual a a sobre c",
            "caption": "Demostración por triángulos semejantes: p sobre a es igual a a sobre c, así que al multiplicar en cruz se obtiene a al cuadrado igual a c por p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, la sustitución y la respuesta final. El comentario se mantiene breve para que la aritmética quede visible, y cada ejemplo mantiene sus unidades coherentes de principio a fin.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm y [[p = 4]] cm, la fórmula da [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], así que [[a \\approx 6.325]] cm. El producto 40 no es un cuadrado perfecto, así que la respuesta queda como una aproximación redondeada a tres decimales. Observa que 6.325 cm es más corto que la hipotenusa de 10 cm, como debe ser.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Resultado cuadrado perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm y [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Cuando el producto es un cuadrado perfecto, la respuesta es exacta, sin necesidad de redondeo. Este es el mismo triángulo del ejemplo paso a paso, y su otro cateto es de 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Triángulo más grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] m y [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Los números más grandes no cambian nada del método: multiplica y luego toma la raíz. La otra proyección aquí es de 16 m, que se empareja con un cateto de 20 m, formando el clásico triángulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Medidas decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12.5]] cm y [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], así que [[a \\approx 6.325]] cm. Esto coincide con el Ejemplo 1 en valor porque ambos productos son iguales a 40, un recordatorio útil de que entradas distintas pueden compartir un producto. Mantén el producto completo dentro de la raíz hasta el paso final de redondeo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Proyecciones de hipotenusa iguales",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 20]] cm y [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, así que [[a \\approx 14.142]] cm. Las proyecciones iguales significan que la altura cae en el punto medio de la hipotenusa, lo que ocurre exactamente cuando los dos catetos son iguales. El triángulo es, por tanto, un triángulo rectángulo isósceles, y el cateto b es igual al cateto a.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Medidas pequeñas",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 8]] mm y [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Las unidades pequeñas funcionan exactamente igual que las grandes, y la respuesta queda en milímetros porque ambas entradas estaban en milímetros. Reducir la escala de un problema nunca cambia los pasos.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades distintas",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 0.5]] m y [[p = 20]] cm, convierte primero: 0.5 m equivale a 50 cm. Entonces [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], así que [[a \\approx 31.623]] cm. Multiplicar 0.5 por 20 sin convertir habría dado una raíz de 10, una respuesta errónea sin ninguna unidad válida detrás.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 16]] ft y [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. El producto 64 es un cuadrado perfecto, así que la respuesta es exacta. Una rápida comprobación de tamaño es satisfactoria: 8 ft es la mitad de la hipotenusa, y el otro cateto resulta ser de aproximadamente 13.856 ft, más largo que a pero todavía más corto que 16 ft.",
            },
          ],
          "h2": "Ejemplos resueltos para hallar el cateto A a partir de la proyección",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Algunos problemas dan q en lugar de p. La calculadora de esta página no acepta q, pero eso es solo un desvío de un paso, no un callejón sin salida. Como las dos proyecciones suman la hipotenusa, resta primero para recuperar p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Toma [[c = 25]] cm y [[q = 16]] cm. Al restar se obtiene [[p = 25 - 16 = 9]] cm. Ahora se aplica la fórmula ordinaria: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Si hubieras introducido 16 directamente como p, la calculadora habría devuelto 20 cm, que es el cateto b, no el cateto a.",
            },
            {
              "kind": "p",
              "text": "La <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> puede ayudar cuando hay que hallar la propia q, y la <a href=\"/right-triangle-projection-p-calculator/\">calculadora de proyección p</a> cubre el paso inverso. En cualquier caso, la regla sigue siendo la misma: halla p primero y luego usa [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Cómo hallar el cateto A cuando se conoce la otra proyección",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un teorema relaciona tres cantidades, así que al despejarlo se halla la que falte. Las tres formas son:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente muestra cada despeje, qué halla y qué debe conocerse primero.",
            },
          ],
          "h2": "Relación entre el cateto A, la hipotenusa y la proyección P",
          "table": {
            "headers": [
              "Cantidad que falta",
              "Fórmula",
              "Valores conocidos necesarios",
            ],
            "rows": [
              [
                "Cateto a",
                "a = sqrt(cp)",
                "Hipotenusa c y proyección p",
              ],
              [
                "Hipotenusa c",
                "c = a al cuadrado / p",
                "Cateto a y proyección p",
              ],
              [
                "Proyección p",
                "p = a al cuadrado / c",
                "Cateto a e hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "El cateto b sigue la imagen espejo de la fórmula del cateto a. Donde el cateto a se empareja con la proyección p, el cateto b se empareja con la proyección q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un mismo triángulo coherente para ver ambos catetos juntos: [[c = 25]], [[p = 9]] y [[q = 16]]. Entonces [[a = \\sqrt{25 \\times 9} = 15]] y [[b = \\sqrt{25 \\times 16} = 20]]. Los dos catetos comparten la misma hipotenusa pero recurren a proyecciones distintas, por eso identificar correctamente p y q decide qué cateto obtienes.",
            },
            {
              "kind": "p",
              "text": "Los catetos también se limitan entre sí mediante el teorema de Pitágoras, tratado dos secciones más adelante: conocer un cateto y la hipotenusa determina el otro. Para problemas que parten de q en lugar de p, la <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir de la proyección</a> aplica el mismo método con el otro emparejamiento.",
            },
          ],
          "h2": "Relación entre el cateto A y el cateto B",
          "image": {
            "alt": "Triángulo rectángulo que compara la proyección p emparejada con el cateto a frente a la proyección q emparejada con el cateto b, con c igual a 25, p igual a 9 y q igual a 16",
            "caption": "Emparejados correctamente: a usa p (sqrt(25 x 9) = 15) y b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección y el teorema de Pitágoras coinciden exactamente, y el álgebra muestra por qué. Parte de las dos fórmulas de proyección:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Suma la fórmula correspondiente para el cateto b, [[b^2 = c \\times q]], para obtener:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al factorizar c en el lado derecho se obtiene [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], al sustituir se llega al resultado conocido:",
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
          "h2": "Relación entre la proyección P y el teorema de Pitágoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tres comprobaciones independientes detectan casi todos los errores. Aplica al menos una de ellas a cada respuesta, y aplica las tres cuando el problema sea importante.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comprobación del teorema de la proyección",
            },
            {
              "kind": "p",
              "text": "Eleva tu respuesta al cuadrado y compárala con el producto de c por p. Para [[c = 25]], [[p = 9]] y [[a = 15]]: [[a^2 = 225]] y [[c \\times p = 225]], así que la respuesta es correcta. Si los dos números difieren, fallaron los datos o el paso de la raíz cuadrada.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Comprobación del teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Halla el cateto b a partir de q y luego comprueba [[a^2 + b^2 = c^2]]. Con [[p = 9]], [[q = 16]] y [[c = 25]]: [[a = 15]], [[b = 20]] y [[225 + 400 = 625 = 25^2]]. Esta comprobación va más allá de la calculadora, ya que pone a prueba todo el triángulo, no solo una fórmula.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Comprobaciones de tamaño y suma",
            },
            {
              "kind": "p",
              "text": "Confirma que p sea menor que c, que [[p + q = c]] cuando se conozca q, y que el cateto a sea más corto que la hipotenusa. En el ejemplo, 9 es menor que 25, [[9 + 16 = 25]] y 15 es más corto que 25. Cualquier fallo aquí apunta a un error de etiquetado, no a un desliz aritmético.",
            },
          ],
          "h2": "Cómo verificar el cateto A calculado",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho propiedades se derivan directamente de [[a = \\sqrt{c \\times p}]] y de la geometría que hay detrás. Cada una sirve también como comprobación de sentido para una respuesta nueva.",
            },
            {
              "items": [
                "El cateto a es siempre más corto que la hipotenusa en un triángulo rectángulo no degenerado, ya que p es solo una parte de c.",
                "La proyección p es siempre menor que c, y siempre es positiva. Las proyecciones cero o negativas no describen ningún triángulo real.",
                "Aumentar p manteniendo c fija aumenta a, porque el producto dentro de la raíz crece.",
                "Aumentar c manteniendo p fija aumenta a matemáticamente, siempre que los nuevos valores sigan describiendo un triángulo real con p menor que c.",
                "Intercambiar p y q cambia qué cateto se calcula: p da el cateto a y q da el cateto b.",
                "Las proyecciones iguales producen catetos iguales. Con c = 20 y p = q = 10, ambos catetos son iguales a 10 veces la raíz cuadrada de 2, aproximadamente 14.142.",
                "El resultado es una longitud, no un área. El producto al cuadrado es solo un paso intermedio, y la raíz cuadrada devuelve las unidades de longitud ordinarias.",
                "Escalar todas las medidas por el mismo factor escala el cateto a por ese factor. Duplicar c y p duplica a, ya que el producto se cuadruplica y su raíz se duplica.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Cuando la altura cae exactamente en el punto medio de la hipotenusa, el triángulo es isósceles, y los dos catetos deben coincidir, como muestra el diagrama siguiente.",
            },
          ],
          "h2": "Propiedades importantes del cateto A a partir de la proyección",
          "image": {
            "alt": "Triángulo rectángulo isósceles con hipotenusa 20, proyecciones iguales p y q de 10, y catetos a y b cada uno igual a 10 raíz de 2",
            "caption": "Proyecciones iguales: c = 20 con p = q = 10 da a = b = 10 raíz de 2, aproximadamente 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada error siguiente va seguido de su corrección. La mayoría se deben al etiquetado, no a la aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Olvidar la raíz cuadrada: informar cp como respuesta. Con c = 10 y p = 3.6, la respuesta es 6 cm, no 36.",
                "Confundir a con a al cuadrado: 36 es a al cuadrado en ese ejemplo, mientras que 6 es el cateto. Di a cuál te refieres antes de anotar un número.",
                "Usar la proyección q en lugar de p: al introducir q se obtiene el cateto b. Con c = 25 y q = 16, el resultado 20 es el cateto b, no el cateto a.",
                "Introducir un cateto en el campo de la hipotenusa: la hipotenusa es el lado opuesto al ángulo recto y el lado más largo. Un cateto introducido como c distorsiona todos los pasos posteriores.",
                "Confundir la hipotenusa con una proyección: c es todo el lado, mientras que p es solo una parte de él. Comprueba que p sea menor que c antes de calcular.",
                "Usar p mayor o igual que c: no existe tal triángulo, ya que p forma parte de c. Revisa las etiquetas del diagrama si esto ocurre.",
                "Mezclar centímetros y metros: convierte primero, como en el Ejemplo 7, donde 0.5 m se convirtió en 50 cm antes de multiplicar por 20 cm.",
                "Usar medidas negativas: las longitudes son positivas, así que una entrada negativa indica un error en los datos, no un cateto negativo.",
                "Aplicar la fórmula a un triángulo no rectángulo: el teorema de la proyección necesita la altura desde un ángulo recto. Sin ángulo recto, no hay proyección p en este sentido.",
                "Redondear demasiado pronto: redondear el producto antes de tomar la raíz desplaza la respuesta. Mantén toda la precisión hasta el paso final.",
                "Usar la correspondencia de lados equivocada en el diagrama: emparejar p con b, o q con a, intercambia los catetos. Empareja p con el cateto que toca el vértice A.",
                "Tratar la altura como una proyección: la altura h es perpendicular a la hipotenusa, no una parte de ella, así que nunca pertenece al campo p.",
              ],
            },
            {
              "kind": "p",
              "text": "Si una respuesta parece incorrecta, detente y vuelve a etiquetar el diagrama antes de recalcular. La mayoría de los errores anteriores desaparecen una vez que p y q están claramente marcados en la hipotenusa y todo lo demás queda aparte.",
            },
          ],
          "h2": "Errores comunes al hallar el cateto A a partir de la proyección",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es el trabajo de geometría en clase y las tareas escolares, donde los problemas de proyección comprueban si los estudiantes saben etiquetar un diagrama y aplicar [[a^2 = c \\times p]] en lugar de recurrir al teorema de Pitágoras por costumbre. Los ejercicios de triángulos semejantes usan la misma configuración, ya que la propia demostración es un ejercicio de emparejamiento de lados correspondientes.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el teorema cuando hay que reconstruir un triángulo rectángulo a partir de medidas parciales: si un dibujo da la hipotenusa y el pie de la altura, el cateto que falta se obtiene sin volver a medir la figura. Los docentes también usan esta configuración como lección puente entre la suma de segmentos y la semejanza.",
            },
            {
              "kind": "p",
              "text": "Una condición limita toda aplicación: la geometría de triángulo rectángulo requerida debe existir realmente. El teorema describe relaciones geométricas exactas, no medidas aproximadas de campo, así que nunca sustituye a una topografía cuidadosa ni a una medición profesional de ingeniería. Dentro de su contexto adecuado, sin embargo, convierte dos longitudes conocidas en una tercera con una sola multiplicación y una raíz cuadrada.",
            },
          ],
          "h2": "Aplicaciones prácticas del teorema de la proyección",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos, y el último problema combina varias ideas de esta guía.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene una hipotenusa [[c = 36]] cm y una proyección [[p = 4]] cm. Halla el cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Proyección decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 26]] cm y [[p = 6.5]] cm, halla el cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hipotenusa grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 100]] cm y [[p = 64]] cm, halla el cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Una hipotenusa mide [[c = 1.2]] m y su proyección p mide 30 cm. Halla el cateto a en centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Halla p a partir de q y c primero",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene una hipotenusa [[c = 65]] cm y una proyección [[q = 49]] cm. Halla el cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Varios pasos con el cateto b y Pitágoras",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm y [[p = 18]] cm, halla el cateto a, luego halla el cateto b y comprueba el resultado con el teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: Convierte 1.2 m a 120 cm, luego [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: Primero [[p = 65 - 49 = 16]] cm, luego [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. La otra proyección es [[q = 50 - 18 = 32]] cm, así que [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Comprueba: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-intro": "Calculadora de cateto A a partir de la proyección de triángulo rectángulo",
        "sec-calculate": "Calcular el cateto A de un triángulo rectángulo a partir de la proyección",
        "sec-what-leg-a": "¿Qué es el cateto A en un triángulo rectángulo?",
        "sec-what-projection-p": "¿Qué es la proyección P en un triángulo rectángulo?",
        "sec-formula": "Fórmula del cateto A de un triángulo rectángulo a partir de la proyección",
        "sec-why-sqrt": "¿Por qué hay una raíz cuadrada en la fórmula?",
        "sec-how": "Cómo usar la calculadora de cateto A de triángulo rectángulo",
        "sec-step-example": "Ejemplo paso a paso para hallar el cateto A",
        "sec-diagram": "Diagrama del cateto A de triángulo rectángulo a partir de la proyección, explicado",
        "sec-proof": "¿Por qué funciona el teorema de la proyección?",
        "sec-examples": "Ejemplos resueltos para hallar el cateto A a partir de la proyección",
        "sec-other-projection": "Cómo hallar el cateto A cuando se conoce la otra proyección",
        "sec-relationship": "Relación entre el cateto A, la hipotenusa y la proyección P",
        "sec-leg-b": "Relación entre el cateto A y el cateto B",
        "sec-pythagoras": "Relación entre la proyección P y el teorema de Pitágoras",
        "sec-verify": "Cómo verificar el cateto A calculado",
        "sec-properties": "Propiedades importantes del cateto A a partir de la proyección",
        "sec-mistakes": "Errores comunes al hallar el cateto A a partir de la proyección",
        "sec-applications": "Aplicaciones prácticas del teorema de la proyección",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explora calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
    },
};
