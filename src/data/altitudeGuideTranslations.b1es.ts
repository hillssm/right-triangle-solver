// altitudeGuideTranslations.bes.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B1_ES = {
  "es": {
      "tocHeading": "Navegación de secciones",
      "tocItems": {
        "sec-intro": "Calculadora de altura de triángulos rectángulos",
        "sec-calculate": "Calcular la altura de un triángulo rectángulo",
        "sec-what": "¿Qué es la altura de un triángulo rectángulo?",
        "sec-diagram": "Diagrama de la altura del triángulo rectángulo explicado",
        "sec-formulas": "Fórmulas de la altura del triángulo rectángulo explicadas",
        "sec-how": "Cómo usar la calculadora de altura de triángulos rectángulos",
        "sec-method1": "Método 1: hallar la altura del triángulo rectángulo a partir de los lados",
        "sec-method2": "Método 2: hallar la altura a partir de las proyecciones sobre la hipotenusa",
        "sec-two-sides": "Cómo hallar la altura cuando solo se conocen dos lados",
        "sec-why": "¿Por qué funciona la fórmula de la altura del triángulo rectángulo?",
        "sec-proof": "Demostración del teorema de la altura con triángulos semejantes",
        "sec-examples": "Ejemplos resueltos de la altura del triángulo rectángulo",
        "sec-area": "Relación entre la altura y el área del triángulo",
        "sec-geomean": "Media geométrica y proyecciones sobre la hipotenusa",
        "sec-properties": "Propiedades importantes de la altura del triángulo rectángulo",
        "sec-verify": "Cómo comprobar si tu respuesta de altura es correcta",
        "sec-mistakes": "Errores comunes al calcular la altura",
        "sec-applications": "Aplicaciones de la altura del triángulo rectángulo en el mundo real",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
        "sec-conclusion": "Calculadoras relacionadas de triángulos rectángulos",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de altura de triángulos rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Esta guía muestra dos formas de hallar la altura de un triángulo rectángulo, con ejemplos resueltos para cada una.",
            },
            {
              "kind": "p",
              "text": "La altura es el segmento perpendicular trazado desde el vértice del ángulo recto hasta la hipotenusa. La calculadora de altura de triángulos rectángulos halla esta longitud usando las tres longitudes de los lados o las dos proyecciones sobre la hipotenusa. Elige el modo que corresponda a lo que conoces, introduce tus medidas y la calculadora devuelve la altura en la misma unidad.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "La primera fórmula usa los dos catetos [[a]] y [[b]] con la hipotenusa [[c]]. La segunda usa las proyecciones [[p]] y [[q]], los dos segmentos que la altura corta sobre la hipotenusa. Ambas fórmulas hallan la misma altura perpendicular; simplemente parten de medidas conocidas distintas.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular la altura de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora junto a esta guía ofrece dos modos, y elegir el correcto es la única configuración que necesitas. Cada modo pide medidas distintas y aplica una fórmula distinta, así que lee primero la tabla y ajusta el modo a tus valores conocidos.",
            },
            {
              "kind": "p",
              "text": "El modo 1, Altura hacia la hipotenusa, acepta el cateto a, el cateto b y la hipotenusa c. Calcula la altura con [[h=\\frac{ab}{c}]], que divide el producto de los dos catetos entre la hipotenusa. El modo 2, Altura al cuadrado, acepta la proyección p y la proyección q, las dos partes de la hipotenusa, y aplica [[h=\\sqrt{pq}]], la media geométrica de las proyecciones.",
            },
            {
              "kind": "p",
              "text": "Todas las medidas deben compartir unidades compatibles: centímetros con centímetros, metros con metros. El resultado llega en la unidad de longitud común de tus entradas. Usa el botón Restablecer para borrar los campos antes de empezar un problema nuevo.",
            },
          ],
          "table": {
            "headers": [
              "Medidas conocidas",
              "Modo de la calculadora",
              "Fórmula",
            ],
            "rows": [
              [
                "Catetos a, b e hipotenusa c",
                "Altura hacia la hipotenusa",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Proyecciones p y q sobre la hipotenusa",
                "Altura al cuadrado",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "¿Qué es la altura de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una altura es un segmento perpendicular trazado desde un vértice de un triángulo hasta la recta que contiene el lado opuesto. En un triángulo rectángulo, la altura más útil parte del vértice del ángulo recto y llega a la hipotenusa en ángulo recto. El punto donde cae se llama pie de la altura, y la hipotenusa es la base natural para este par base-altura.",
            },
            {
              "kind": "p",
              "text": "Todo triángulo tiene tres alturas, y el triángulo rectángulo no es la excepción. Dos de ellas coinciden con los catetos: si tomas un cateto como base, el otro cateto ya es perpendicular a él, así que sirve como altura. La tercera altura va del vértice del ángulo recto a la hipotenusa y queda dentro del triángulo. Esta página calcula esa tercera, la única altura que requiere un cálculo real.",
            },
            {
              "kind": "p",
              "text": "Como llega a la hipotenusa en ángulo recto, esta altura divide el triángulo original en dos triángulos rectángulos más pequeños. Esos dos triángulos son semejantes entre sí y con el original, y por eso la altura crea las elegantes relaciones de media geométrica que se exploran más adelante en esta guía.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagrama de la altura del triángulo rectángulo explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama siguiente muestra el triángulo ABC con el ángulo recto en C. Los lados AC y BC se encuentran en el ángulo recto, así que AB está frente al ángulo recto y debe ser la hipotenusa. La altura CD va de C al lado AB, llegando a D con una marca de ángulo recto que muestra la relación perpendicular.",
            },
            {
              "kind": "p",
              "text": "Cada lado tiene una etiqueta estándar: AC = a, BC = b, AB = c, y la altura CD = h. La altura divide la hipotenusa en dos proyecciones, AD = p y DB = q, de modo que c = p + q. Observa que p queda junto al cateto a y q junto al cateto b, un patrón que importa para la demostración por semejanza más adelante.",
            },
            {
              "kind": "p",
              "text": "Leer el diagrama de izquierda a derecha cuenta toda la historia: un triángulo rectángulo, una altura que baja a la hipotenusa, dos segmentos de proyección, y el triángulo original dividido en dos triángulos rectángulos más pequeños, ACD y CBD, que comparten la altura como lado común.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triángulo ABC con ángulo recto en C; altura CD trazada a la hipotenusa AB, con AC igual a a, BC igual a b, AB igual a c, CD igual a h, AD igual a p, DB igual a q",
            "caption": "La altura CD baja desde el ángulo recto C perpendicular a la hipotenusa AB, dividiéndola en las proyecciones p y q.",
          },
        },
        "sec-formulas": {
          "h2": "Fórmulas de la altura del triángulo rectángulo explicadas",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro fórmulas hallan la misma altura, y cada una parte de medidas conocidas distintas. La calculadora en vivo implementa las dos primeras directamente; las otras dos son métodos manuales que puedes usar cuando tus medidas están incompletas o cuando quieres verificar un resultado de otra forma.",
            },
            {
              "kind": "p",
              "text": "La fórmula de los lados [[h=\\frac{ab}{c}]] necesita ambos catetos y la hipotenusa. La fórmula de las proyecciones [[h=\\sqrt{pq}]] solo necesita los dos segmentos de la hipotenusa, y equivale al teorema de la altura [[h^2=pq]]. Cuando conoces los catetos pero no la hipotenusa, sustituye [[c=\\sqrt{a^2+b^2}]] para obtener [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Cuando conoces el área A y la hipotenusa c, usa [[h=\\frac{2A}{c}]], que sale directamente de la fórmula del área con la hipotenusa como base.",
            },
            {
              "kind": "p",
              "text": "Nunca las trates como cuatro modos de la calculadora. La calculadora mantiene exactamente dos modos: Altura hacia la hipotenusa y Altura al cuadrado. Las fórmulas restantes son ayudas para el cálculo manual, para deducir una medida faltante antes de introducirla en la calculadora, o para comprobar dos veces una respuesta que la calculadora produjo.",
            },
          ],
          "table": {
            "headers": [
              "Fórmula",
              "Entradas necesarias",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Catetos a, b e hipotenusa c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Proyecciones p y q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Ambos catetos a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Área A e hipotenusa c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Cómo usar la calculadora de altura de triángulos rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Sigue estos pasos en orden y la calculadora hace el resto. Todo el proceso toma menos de un minuto una vez que sabes qué medidas tienes.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica tus medidas conocidas: ¿son tres longitudes de lados o las dos proyecciones sobre la hipotenusa?",
                "Selecciona el modo de la calculadora que corresponda: Altura hacia la hipotenusa para tres lados, Altura al cuadrado para dos proyecciones.",
                "Introduce medidas positivas en unidades compatibles, convirtiendo primero si llegan en unidades mixtas.",
                "Comprueba que las medidas describan un triángulo rectángulo válido, con los catetos cumpliendo el teorema de Pitágoras.",
                "Haz clic en el botón Calcular para ejecutar el modo seleccionado.",
                "Lee el resultado de la altura en la unidad común de tus entradas.",
                "Verifica la respuesta con uno de los métodos de comprobación de esta guía si el problema importa.",
                "Haz clic en Restablecer antes de introducir un problema nuevo para que los valores viejos nunca se mezclen con los nuevos.",
              ],
            },
            {
              "kind": "p",
              "text": "La elección del modo es el paso que más importa. Si conoces los catetos a y b más la hipotenusa c, el modo Altura hacia la hipotenusa encaja. Si solo sabes cómo se divide la hipotenusa en p y q, elige Altura al cuadrado. El modo equivocado rechaza entradas válidas, así que ajustar el modo a las medidas evita frustración.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Método 1: hallar la altura del triángulo rectángulo a partir de los lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuando se conocen las tres longitudes de los lados, la altura sale de una sola división. La fórmula [[h=\\frac{ab}{c}]] multiplica los dos catetos y divide entre la hipotenusa, y cada símbolo tiene un significado fijo: a y b son los catetos perpendiculares, c es la hipotenusa y h es la altura hacia la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El clásico triángulo 3-4-5 muestra cada paso. Dado a = 3 cm, b = 4 cm y c = 5 cm, sustituye en la fórmula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica primero los catetos: 3 × 4 = 12. Luego divide entre la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es h = 2.4 cm. Observa que 2.4 es más corto que ambos catetos, lo cual siempre ocurre con la altura hacia la hipotenusa, y la sección de demostración explica más adelante por qué la división entre c es geométricamente natural.",
            },
            {
              "kind": "p",
              "text": "Usa este método siempre que se conozcan los tres lados o se puedan medir directamente. Para una herramienta dedicada que solo maneja entradas de lados, prueba la <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculadora de altura desde los lados</a>, que recorre la misma fórmula con más profundidad.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Triángulo rectángulo con catetos 3 y 4, hipotenusa 5, altura 2.4 trazada perpendicular a la hipotenusa",
            "caption": "Un triángulo 3-4-5: la altura h es igual a (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-method2": {
          "h2": "Método 2: hallar la altura a partir de las proyecciones sobre la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuando la hipotenusa ya está dividida en sus dos proyecciones, el teorema de la altura da un atajo. El teorema afirma [[h^2=pq]], así que la altura es la raíz cuadrada del producto de las dos proyecciones:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Toma p = 9 cm y q = 16 cm. Eleva primero la relación al cuadrado:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica: 9 × 16 = 144, así que [[h^2=144]]. Ahora toma la raíz cuadrada:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es h = 12 cm. Esto dice que la altura es la media geométrica de las dos proyecciones: queda entre ellas en tamaño, más cerca de su promedio que de cualquiera de los extremos, un significado que se explica con más detalle en la sección de media geométrica.",
            },
            {
              "kind": "p",
              "text": "Recuerda que p y q son segmentos de la hipotenusa, no los catetos del triángulo. Un error común es introducir longitudes de catetos como proyecciones, lo que produce una respuesta errónea. Para una herramienta construida solo en torno a este método, consulta la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura desde las proyecciones</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Triángulo rectángulo con altura h que divide la hipotenusa en proyecciones p = 9 y q = 16, altura h = 12",
            "caption": "La altura es la media geométrica de las proyecciones: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Cómo hallar la altura cuando solo se conocen dos lados",
          "blocks": [
            {
              "kind": "p",
              "text": "A veces falta el tercer lado, pero el teorema de Pitágoras lo recupera en un paso. El método de recuperación depende de qué dos lados conozcas, así que trata cada caso por separado.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: se conocen ambos catetos",
            },
            {
              "kind": "p",
              "text": "Dado a = 6 cm y b = 8 cm, halla primero la hipotenusa con [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Ahora se conocen los tres lados, así que aplica la fórmula de los lados: h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. La hipotenusa faltante era el único obstáculo, y la altura sigue directamente.",
            },
            {
              "kind": "h3",
              "text": "Caso 2: se conocen un cateto y la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado a = 5 cm y c = 13 cm, despeja el cateto faltante con [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Con b = 12 cm recuperado, la altura es h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. Estas son deducciones manuales para hallar primero las medidas necesarias; la calculadora en sí pide entradas completas, así que haz este trabajo previo en papel antes de introducir valores.",
            },
            {
              "kind": "p",
              "text": "Si necesitas con frecuencia el lado faltante en sí, la <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> lo halla directamente antes de que pases a la altura.",
            },
          ],
        },
        "sec-why": {
          "h2": "¿Por qué funciona la fórmula de la altura del triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula funciona porque un triángulo se puede medir con dos pares base-altura distintos, y el área sigue siendo la misma de cualquier forma. Este argumento del área es la demostración honesta más corta de [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Primero, usa los catetos como par base-altura. Como los catetos son perpendiculares, el área es simplemente la mitad de su producto:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora usa la hipotenusa como base y la altura como la altura correspondiente. El mismo triángulo tiene la misma área:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dos expresiones para una misma área, así que iguálalas:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica ambos lados por 2 para eliminar las fracciones, obteniendo ab = ch. Divide ambos lados entre c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cada paso es aritmética reversible, así que la división entre la hipotenusa no es un truco; es el precio algebraico de cambiar del par base-altura de los catetos al par base-altura de la hipotenusa mientras el área permanece fija.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "El mismo triángulo rectángulo dibujado dos veces: primero con base a y altura b, luego con base c y altura h",
            "caption": "Mismo triángulo, dos pares base-altura: el área es igual a ab/2 y ch/2, así que h es igual a ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Demostración del teorema de la altura con triángulos semejantes",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula de las proyecciones [[h=\\sqrt{pq}]] viene de la semejanza. Mantén la notación coherente: el triángulo ABC tiene ángulo recto en C, D está sobre AB, CD es perpendicular a AB, AD = p, DB = q y CD = h.",
            },
            {
              "kind": "p",
              "text": "La altura divide ABC en dos triángulos rectángulos más pequeños, ACD y CBD. El ángulo en A es compartido entre ABC y ACD, así que esos dos son semejantes; del mismo modo, el ángulo en B es compartido entre ABC y CBD. Como ambos triángulos pequeños son semejantes al original, son semejantes entre sí: el triángulo ACD es semejante al triángulo CBD.",
            },
            {
              "kind": "p",
              "text": "Escribe la semejanza como una proporción de lados correspondientes. El cateto corto de ACD es p y el cateto largo es h; en CBD el cateto corto es h y el cateto largo es q. Al emparejarlos se obtiene:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica en cruz: h × h = p × q, así que h² = pq. Toma la raíz cuadrada:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Solo se usa la raíz positiva porque las longitudes de los lados son positivas. Una raíz negativa no tiene significado geométrico aquí. La idea clave es que la altura es la media proporcional entre los dos segmentos de la hipotenusa, que es exactamente lo que es una media geométrica.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Triángulo rectángulo original ABC con altura CD, junto a los dos triángulos semejantes más pequeños ACD y CBD con lados correspondientes etiquetados",
            "caption": "Los triángulos ACD y CBD son semejantes: p/h = h/q, así que h al cuadrado es igual a p por q.",
          },
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos de la altura del triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Siete ejemplos cubren ambos modos de la calculadora, la conversión de unidades y las medidas decimales. Cada uno muestra los valores dados, la fórmula elegida, la sustitución y la respuesta final.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: el clásico triángulo 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dado a = 3 cm, b = 4 cm, c = 5 cm. Usa [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. La altura es más corta que cualquiera de los catetos, como siempre.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: triángulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dado a = 5 m, b = 12 m, c = 13 m. Usa [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Mantén la fracción hasta el último paso para obtener un decimal limpio.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: triángulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dado a = 8 cm, b = 15 cm, c = 17 cm. Usa [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Catetos más grandes aún dan una altura menor que ambos.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: proyecciones iguales sobre la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado p = 5 cm y q = 5 cm. Usa [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Las proyecciones iguales significan que la altura es lo más alta posible para esa hipotenusa, y el triángulo es un triángulo rectángulo isósceles: cada cateto mide 5√2 cm, aproximadamente 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: proyecciones desiguales sobre la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado p = 4 cm y q = 25 cm. Usa [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Observa cómo la altura de 10 queda entre las dos proyecciones, 4 y 25, que es la marca distintiva de la media geométrica.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: medidas decimales",
            },
            {
              "kind": "p",
              "text": "Dado a = 1.5 m, b = 2 m, c = 2.5 m. Usa [[h=\\frac{ab}{c}]]: h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. Los decimales funcionan exactamente como los números enteros siempre que cada valor use la misma unidad.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: distintas unidades de medida",
            },
            {
              "kind": "p",
              "text": "Dado a = 30 cm, b = 0.4 m, c = 0.5 m. Convierte todo a centímetros primero: b = 40 cm, c = 50 cm. Luego h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Convertir antes de sustituir evita el error de unidades más común.",
            },
          ],
        },
        "sec-area": {
          "h2": "Relación entre la altura y el área del triángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "El área y la altura se determinan mutuamente una vez que se conoce la hipotenusa. Con la hipotenusa como base, el área A = ch/2, así que despejar la altura da [[h=\\frac{2A}{c}]]. Esta es una ruta genuinamente distinta: se salta los catetos por completo.",
            },
            {
              "kind": "p",
              "text": "Supón que un problema indica el área A = 54 cm² y la hipotenusa c = 15 cm. Sustituye:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica el numerador: 2 × 54 = 108. Luego divide: h = 108 / 15 = 7.2 cm. La altura se obtiene sin conocer los catetos individuales.",
            },
            {
              "kind": "p",
              "text": "Esta ruta es útil cuando el área se da directamente, por ejemplo en problemas de enunciado sobre terrenos o materiales. También sirve como herramienta de verificación: calcula la altura desde los lados y luego confirma que 2A/c da el mismo valor. La <a href=\"/right-triangle-area-calculator/\">calculadora de área</a> halla el área a partir de las medidas que un problema proporcione.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Media geométrica y proyecciones sobre la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la altura dice que la altura es la media geométrica de las dos proyecciones, y la media geométrica es un tipo específico de promedio. Toma p = 4 y q = 9. Su media geométrica es √(4 × 9) = √36 = 6, así que un triángulo con esas proyecciones tiene altura 6.",
            },
            {
              "kind": "p",
              "text": "Compáralo con la media aritmética ordinaria: (4 + 9) / 2 = 6.5. Los dos promedios difieren, y solo 6 es la altura correcta. La media aritmética promedia sumando, mientras que la media geométrica promedia multiplicando, lo cual conviene a longitudes que escalan juntas en lugar de sumarse.",
            },
            {
              "kind": "p",
              "text": "Geométricamente, la relación de media proporcional h² = pq significa que la altura se relaciona con cada proyección del mismo modo en que las proyecciones se relacionan entre sí. Esta simetría es lo que hace semejantes a los dos triángulos pequeños, y es por lo que la altura siempre queda entre las dos proyecciones en tamaño, nunca igual a la media aritmética a menos que p sea igual a q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades importantes de la altura del triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Siete propiedades describen la altura hacia la hipotenusa. Juntas dan una intuición fiable de qué valores de altura son posibles y cómo se comportan.",
            },
            {
              "kind": "list",
              "items": [
                "La altura hacia la hipotenusa es perpendicular a ella, así que es la distancia más corta desde el vértice del ángulo recto hasta la hipotenusa.",
                "La altura divide el triángulo en dos triángulos más pequeños, cada uno semejante al original y entre sí.",
                "La altura es más corta que ambos catetos; ningún cateto puede ser el camino más corto hacia la hipotenusa.",
                "La altura es más corta que la propia hipotenusa, ya que un segmento perpendicular es la ruta más corta.",
                "La altura es la media geométrica de las dos proyecciones sobre la hipotenusa, [[h=\\sqrt{pq}]].",
                "Para una hipotenusa fija, la altura es máxima cuando las dos proyecciones son iguales, lo cual ocurre cuando los dos catetos son iguales.",
                "Escalar cada longitud de lado por el mismo factor escala la altura por ese factor; duplica el triángulo, duplica la altura.",
              ],
            },
            {
              "kind": "p",
              "text": "La sexta propiedad tiene una cota precisa: la altura nunca puede superar la mitad de la hipotenusa, [[h \\leq \\frac{c}{2}]], con igualdad solo cuando los catetos son iguales. Un triángulo 45-45-90 con hipotenusa 10 tiene altura exactamente 5, el máximo; un triángulo 6-8-10 con la misma hipotenusa solo alcanza 4.8, como muestra el diagrama.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dos triángulos rectángulos que comparten una hipotenusa de 10: un triángulo 45-45-90 con altura 5 y un triángulo estilo 6-8-10 con altura 4",
            "caption": "Misma hipotenusa 10: las proyecciones iguales dan la altura más alta, 5.",
          },
        },
        "sec-verify": {
          "h2": "Cómo comprobar si tu respuesta de altura es correcta",
          "blocks": [
            {
              "kind": "p",
              "text": "Tres comprobaciones independientes detectan errores de cálculo. Usa al menos una de ellas siempre que una respuesta de altura importe.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: área del triángulo",
            },
            {
              "kind": "p",
              "text": "Compara ab/2 con ch/2 usando tu altura. Para el triángulo 3-4-5 con h = 2.4: ab/2 = (3 × 4)/2 = 6, y ch/2 = (5 × 2.4)/2 = 6. Las áreas coincidentes confirman que la altura encaja con los lados.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: media geométrica",
            },
            {
              "kind": "p",
              "text": "Verifica [[h^2=pq]] cuando se conozcan las proyecciones. Con p = 9 y q = 16: h² = 12² = 144, y pq = 9 × 16 = 144. La igualdad significa que la altura es coherente con cómo se divide la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirma [[a^2+b^2=c^2]] para los lados dados: 9 + 16 = 25 en el caso 3-4-5. Esta comprobación valida las longitudes de los lados, no la altura directamente, pero una entrada de lado errónea es la razón más común por la que una respuesta de altura falla las otras dos comprobaciones.",
            },
            {
              "kind": "p",
              "text": "Haz cada comprobación en unidades coherentes. Mezclar centímetros con metros rompe la comprobación del área en silencio, así que convierte primero y verifica después.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores comunes al calcular la altura",
          "blocks": [
            {
              "kind": "p",
              "text": "Diez errores aparecen una y otra vez. Cada uno es fácil de detectar una vez que conoces su firma.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir la altura con un cateto. La altura llega a la hipotenusa en ángulo recto; un cateto llega al otro cateto en el ángulo recto. En un triángulo 3-4-5, h = 2.4, no 3 ni 4.",
                "Elegir el modo equivocado de la calculadora. Introducir catetos y una hipotenusa en el modo Altura al cuadrado, que espera proyecciones, produce sinsentidos. Ajusta el modo a las medidas.",
                "Confundir las proyecciones con los catetos. Introducir a = 3 y b = 4 como p y q calcula √(12) ≈ 3.46, que no es la altura. Las proyecciones son segmentos de la hipotenusa.",
                "Usar la hipotenusa equivocada. Dividir ab entre un cateto en lugar de la hipotenusa, p. ej. 12/4 = 3, exagera la altura. El divisor debe ser el lado más largo, c.",
                "Olvidar la raíz cuadrada en la fórmula de las proyecciones. Detenerse en h² = 144 da 144 como altura; la respuesta real es h = 12.",
                "Mezclar centímetros y metros. Con a = 30 cm y c = 0.5 m, sustituir 0.5 directamente da una altura errónea. Convierte primero: 50 cm.",
                "Introducir longitudes de lados no válidas. Lados como 2, 3, 10 no cumplen el teorema de Pitágoras, así que no existe ningún triángulo rectángulo y ninguna altura está definida.",
                "Redondear demasiado pronto. Redondear 60/13 a 4.6 antes de un paso posterior arrastra el error. Mantén la fracción y redondea solo la respuesta final.",
                "Tratar h² como la altura final. Si un cálculo termina con h² = 36, la altura es 6, no 36.",
                "Aplicar fórmulas de triángulos rectángulos a un triángulo arbitrario. Las fórmulas de aquí necesitan un ángulo recto; para otros triángulos, las relaciones de la altura difieren.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones de la altura del triángulo rectángulo en el mundo real",
          "blocks": [
            {
              "kind": "p",
              "text": "Los cálculos de altura respaldan cualquier trabajo construido sobre la geometría del triángulo rectángulo. En la enseñanza de la geometría, el teorema de la altura da a los estudiantes una primera muestra de demostraciones por semejanza y medias geométricas. El dibujo técnico y el diseño geométrico usan la altura para situar perpendiculares al trazar paneles triangulares o formas de soportes.",
            },
            {
              "kind": "p",
              "text": "La geometría topográfica usa relaciones de triángulos rectángulos al mapear parcelas con desplazamientos perpendiculares, y los modelos de planificación de construcción las usan cuando un marco triangular rectángulo debe encontrarse con un muro en ángulo recto. Los cálculos de área van en sentido contrario: desde una altura y una hipotenusa conocidas, [[h=\\frac{2A}{c}]] recupera la altura sin medir los catetos.",
            },
            {
              "kind": "p",
              "text": "Estos son bocetos geométricos hipotéticos, no procedimientos de ingeniería. El trabajo topográfico y estructural real requiere medidas adecuadas, supuestos de diseño y estándares profesionales; el teorema de la altura describe la geometría, nunca reemplaza los métodos profesionales.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco problemas usan valores no vistos en los ejemplos principales. Resuelve cada uno y luego comprueba las respuestas abajo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: nivel inicial con lados",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos a = 9 cm y b = 40 cm con hipotenusa c = 41 cm. Halla la altura hacia la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: nivel inicial con proyecciones",
            },
            {
              "kind": "p",
              "text": "La altura de un triángulo rectángulo divide la hipotenusa en p = 16 m y q = 36 m. Halla la altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: medidas decimales",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene a = 0.6 m, b = 0.8 m, c = 1.0 m. Halla la altura hacia la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: lado faltante",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene cateto a = 7 in e hipotenusa c = 25 in. Halla la altura hacia la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: área de un parterre",
            },
            {
              "kind": "p",
              "text": "Un parterre triangular rectángulo tiene área A = 96 m² e hipotenusa 20 m. Halla la altura hacia la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Problema 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Primero confirma los lados: 9² + 40² = 81 + 1600 = 1681 = 41², así que el triángulo es válido.",
            },
            {
              "kind": "p",
              "text": "Problema 2: h = √(16 × 36) = √576 = 24 m. La altura queda entre las dos proyecciones, como debe hacerlo la media geométrica.",
            },
            {
              "kind": "p",
              "text": "Problema 3: h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. Los decimales necesitan el mismo tratamiento que los números enteros.",
            },
            {
              "kind": "p",
              "text": "Problema 4: recupera el cateto faltante: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Luego h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Problema 5: usa la ruta del área: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. No se necesitaron medidas de catetos.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculadoras relacionadas de triángulos rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Esta guía cubrió ambos modos de altura: longitudes de lados y proyecciones sobre la hipotenusa. Si ya sabes qué medidas tienes, las herramientas especializadas profundizan más: la <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculadora de altura desde los lados</a> y la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura desde las proyecciones</a>. La <a href=\"/right-triangle-projection-calculator/\">calculadora de proyecciones</a> halla p y q por sí mismas cuando solo se conocen los lados.",
            },
          ],
        },
      },
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es la altura de un triángulo rectángulo?",
          "answer": "La altura hacia la hipotenusa es el segmento perpendicular desde el vértice del ángulo recto hasta la hipotenusa. Es la tercera altura del triángulo rectángulo, distinta de los dos catetos, y divide la hipotenusa en las proyecciones p y q.",
        },
        {
          "question": "¿Cómo calculo la altura de un triángulo rectángulo?",
          "answer": "Usa la fórmula de los lados [[h=\\frac{ab}{c}]] cuando se conozcan los catetos y la hipotenusa, o la fórmula de las proyecciones [[h=\\sqrt{pq}]] cuando se conozcan los segmentos de la hipotenusa. La calculadora aplica el modo que corresponda a tus medidas.",
        },
        {
          "question": "¿Cuál es la fórmula de la altura con tres lados?",
          "answer": "Con los catetos a y b y la hipotenusa c, la altura es [[h=\\frac{ab}{c}]]. Multiplica los dos catetos y divide entre la hipotenusa. Para un triángulo 3-4-5, h = (3 × 4) / 5 = 2.4.",
        },
        {
          "question": "¿Cómo calculo la altura a partir de las proyecciones?",
          "answer": "El teorema de la altura afirma [[h^2=pq]], así que toma la raíz cuadrada: [[h=\\sqrt{pq}]]. Para p = 9 y q = 16, h = √(9 × 16) = √144 = 12. Las proyecciones son segmentos de la hipotenusa, no los catetos.",
        },
        {
          "question": "¿Puedo calcular la altura con solo dos lados?",
          "answer": "Sí, recuperando primero el tercer lado. Con ambos catetos, halla [[c=\\sqrt{a^2+b^2}]]; con un cateto y la hipotenusa, halla [[b=\\sqrt{c^2-a^2}]]. Luego aplica [[h=\\frac{ab}{c}]] como de costumbre.",
        },
        {
          "question": "¿La altura es lo mismo que la elevación?",
          "answer": "En los triángulos rectángulos los términos suelen solaparse, pero altura tiene el significado preciso de un segmento perpendicular desde un vértice hasta el lado opuesto. En esta página, altura siempre significa la perpendicular desde el vértice del ángulo recto hasta la hipotenusa.",
        },
        {
          "question": "¿La altura es siempre más corta que la hipotenusa?",
          "answer": "Sí. La altura es la distancia más corta desde el vértice del ángulo recto hasta la hipotenusa, y la hipotenusa es más larga que cualquier segmento así. También es más corta que ambos catetos.",
        },
        {
          "question": "¿Puede la altura ser igual a una proyección sobre la hipotenusa?",
          "answer": "Sí, cuando las proyecciones son iguales. Si p = q, entonces [[h=\\sqrt{p \\times p}=p]], así que la altura es igual a cada proyección. Esto ocurre en los triángulos rectángulos isósceles, donde la altura también es la mitad de la hipotenusa.",
        },
        {
          "question": "¿Cómo se relaciona el teorema de la media geométrica con la altura?",
          "answer": "El teorema de la media geométrica es otro nombre para el teorema de la altura: [[h=\\sqrt{pq}]] dice que la altura es la media geométrica de las proyecciones sobre la hipotenusa. La semejanza de los dos triángulos pequeños lo demuestra.",
        },
        {
          "question": "¿Cómo compruebo mi cálculo de altura?",
          "answer": "Compara las dos fórmulas del área ab/2 y ch/2; deben coincidir. Si se conocen las proyecciones, confirma [[h^2=pq]]. También verifica [[a^2+b^2=c^2]] para confirmar que los lados describen un triángulo rectángulo válido.",
        },
        {
          "question": "¿Puedo usar esta calculadora para un triángulo no rectángulo?",
          "answer": "No. Ambas fórmulas requieren un ángulo recto: el argumento del área necesita catetos perpendiculares, y el teorema de la altura necesita la semejanza del ángulo recto. Para otros triángulos, las relaciones de la altura son distintas.",
        },
        {
          "question": "¿Qué modo de la calculadora debo elegir?",
          "answer": "Elige Altura hacia la hipotenusa cuando conozcas los dos catetos y la hipotenusa. Elige Altura al cuadrado cuando conozcas las dos proyecciones sobre la hipotenusa p y q. Ajustar el modo a tus medidas conocidas es la única configuración que importa.",
        },
      ],
      "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Elige la herramienta que corresponda a las medidas que ya conoces.",
      "relatedItems": [
        "Calculadora de altura del triángulo rectángulo desde los lados",
        "Calculadora de altura del triángulo rectángulo desde las proyecciones",
        "Calculadora de área del triángulo rectángulo",
        "Calculadora de lados del triángulo rectángulo",
        "Calculadora de proyecciones del triángulo rectángulo",
      ],
    },
};
