// specialGuideTranslations.bes.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de Triángulos Rectángulos Especiales - Proporciones 45-45-90 y 30-60-90",
        "description": "Resuelve triángulos 45-45-90 y 30-60-90 con la Calculadora de Triángulos Rectángulos Especiales. Usa las proporciones fijas 1:1:√2 y 1:√3:2 para hallar los lados que faltan rápidamente.",
        "primaryKeyword": "Calculadora de Triángulos Rectángulos Especiales",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navegación por secciones",
      "tocItems": {
        "sec-intro": "Calculadora de Triángulos Rectángulos Especiales",
        "sec-calculate": "Calcular los lados que faltan en triángulos rectángulos especiales",
        "sec-what": "¿Qué son los triángulos rectángulos especiales?",
        "sec-types": "Los dos tipos principales de triángulos rectángulos especiales",
        "sec-454590": "Cómo entender el triángulo 45-45-90",
        "sec-derive-454590": "Cómo se deduce la proporción de lados 45-45-90",
        "sec-306090": "Cómo entender el triángulo 30-60-90",
        "sec-derive-306090": "Cómo se deduce la proporción de lados 30-60-90",
        "sec-compare": "Comparación de las proporciones de lados de los dos triángulos especiales",
        "sec-how-hyp-45": "Cómo usar la calculadora de hipotenusa 45-45-90",
        "sec-how-leg-45": "Cómo hallar un cateto a partir de la hipotenusa 45-45-90",
        "sec-how-long-30": "Cómo usar la calculadora de cateto largo 30-60-90",
        "sec-how-hyp-30": "Cómo usar la calculadora de hipotenusa 30-60-90",
        "sec-examples": "Ejemplos paso a paso para los dos tipos de triángulos especiales",
        "sec-area-perimeter": "Relaciones de área y perímetro en triángulos rectángulos especiales",
        "sec-exact": "Respuestas exactas con radicales frente a aproximaciones decimales",
        "sec-verify": "Cómo verificar los cálculos de triángulos rectángulos especiales",
        "sec-mistakes": "Errores comunes al resolver triángulos rectángulos especiales",
        "sec-applications": "Aplicaciones prácticas de los triángulos rectángulos especiales",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Calculadoras de triángulos rectángulos relacionadas",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triángulos Rectángulos Especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Resuelve triángulos 45-45-90 y 30-60-90 a partir de un solo lado conocido, usando sus proporciones fijas de lados.",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo especial es un triángulo rectángulo cuyos ángulos producen una proporción fija de lados que nunca cambia, sin importar lo grande o pequeño que sea el triángulo. Solo dos patrones de ángulos hacen esto en la geometría escolar: el triángulo 45-45-90 y el triángulo 30-60-90. La Calculadora de Triángulos Rectángulos Especiales de esta página cubre ambos tipos, así que un solo lado conocido basta para hallar todos los demás lados.",
            },
            {
              "kind": "p",
              "text": "El triángulo 45-45-90 tiene dos catetos iguales, y sus lados siguen la proporción [[a : b : c = 1 : 1 : \\sqrt{2}]]. El triángulo 30-60-90 tiene tres lados de longitudes diferentes, y sus lados siguen la proporción [[a : b : c = 1 : \\sqrt{3} : 2]]. Aquí [[a]] y [[b]] son los catetos y [[c]] es la hipotenusa, y el significado de [[a]] y [[b]] cambia según el tipo de triángulo, así que las secciones siguientes siempre indican qué tipo usan.",
            },
            {
              "kind": "p",
              "text": "Si un triángulo 45-45-90 tiene un cateto de 5 cm, el otro cateto también mide 5 cm y la hipotenusa es [[c = 5\\sqrt{2} \\approx 7.071]] cm. Si un triángulo 30-60-90 tiene un cateto corto de 5 cm, el cateto largo es [[b = 5\\sqrt{3} \\approx 8.660]] cm y la hipotenusa es [[c = 10]] cm. Los cuatro modos de calculadora de esta página realizan exactamente estos pasos, y la guía siguiente explica de dónde viene cada proporción, cómo elegir el modo correcto y cómo comprobar cada respuesta.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular los lados que faltan en triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página tiene cuatro modos, uno para cada lado que falta que suele pedirse en un problema de triángulos rectángulos especiales. Elige primero el tipo de triángulo, luego elige el lado que conoces y el lado que necesitas. La tabla siguiente enumera cada modo con su dato de entrada, su fórmula y su resultado.",
            },
          ],
          "table": {
            "headers": [
              "Modo de calculadora",
              "Dato requerido",
              "Resultado",
            ],
            "rows": [
              [
                "45-45-90: Hipotenusa",
                "Cateto a",
                "Hipotenusa c",
              ],
              [
                "45-45-90: Cateto",
                "Hipotenusa c",
                "Cateto a",
              ],
              [
                "30-60-90: Cateto largo",
                "Cateto corto a",
                "Cateto largo b",
              ],
              [
                "30-60-90: Hipotenusa",
                "Cateto corto a",
                "Hipotenusa c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "El modo 1 halla la hipotenusa de un triángulo 45-45-90 a partir de cualquiera de los catetos iguales.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "El modo 2 halla un cateto de un triángulo 45-45-90 a partir de la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "El modo 3 halla el cateto largo de un triángulo 30-60-90 a partir del cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "El modo 4 halla la hipotenusa de un triángulo 30-60-90 a partir del cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Para usar cualquier modo, confirma el tipo de triángulo a partir de sus ángulos, identifica el lado conocido, introduce una medida positiva, elige una unidad que coincida con el resto del problema y haz clic en Calcular. Usa Restablecer antes de un cálculo nuevo para que un valor antiguo no se cuele en la siguiente respuesta. Cada modo necesita una fórmula distinta porque cada modo parte de un lado conocido diferente, y los dos tipos de triángulo tienen proporciones diferentes, así que una fórmula 45-45-90 nunca pertenece a un problema 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Diagrama de flujo de los cuatro modos de la Calculadora de Triángulos Rectángulos Especiales: de cateto a hipotenusa en 45-45-90, de hipotenusa a cateto en 45-45-90, de cateto corto a cateto largo en 30-60-90, y de cateto corto a hipotenusa en 30-60-90",
            "caption": "Los cuatro modos de calculadora: cada uno parte de un lado conocido y aplica una proporción fija.",
          },
        },
        "sec-what": {
          "h2": "¿Qué son los triángulos rectángulos especiales?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo especial es un triángulo rectángulo cuyos tres ángulos están fijos en valores que obligan a sus lados a guardar una proporción única e invariable. La mayoría de los triángulos rectángulos no tienen este atajo: conocer un lado no dice nada sobre los demás hasta que también se conoce un ángulo o un segundo lado. En un triángulo rectángulo especial, los ángulos por sí solos fijan la forma, así que una sola longitud de lado fija todo el triángulo.",
            },
            {
              "kind": "p",
              "text": "El teorema de Pitágoras sigue siendo válido, y es la herramienta que produce ambas proporciones. En un triángulo 45-45-90, los dos catetos iguales hacen que el teorema se reduzca a [[2a^2 = c^2]], lo que da [[c = a\\sqrt{2}]]. En un triángulo 30-60-90, la hipotenusa es el doble del cateto corto, así que el teorema da [[b^2 = (2a)^2 - a^2 = 3a^2]], lo que da [[b = a\\sqrt{3}]]. Las deducciones completas aparecen en sus propias secciones más adelante.",
            },
            {
              "kind": "p",
              "text": "Las proporciones se mantienen iguales a cualquier tamaño porque los triángulos son semejantes dentro de su propio tipo. Un triángulo 45-45-90 con un cateto de 1 cm y uno con un cateto de 100 cm tienen la misma forma, los mismos ángulos y la misma proporción 1:1:√2. Esa independencia de la escala es lo que hace que estos triángulos sean tan útiles en geometría y trigonometría: una vez que reconoces el patrón de ángulos, puedes escribir todos los lados sin medir ni usar el seno y el coseno.",
            },
            {
              "kind": "p",
              "text": "Los triángulos 45-45-90 y 30-60-90 son dos familias diferentes, no dos nombres para la misma figura. Uno tiene dos catetos iguales y el otro tiene tres lados de longitudes diferentes. Confundirlos es el error más común de este tema, así que la siguiente sección presenta cada familia por separado antes de que la guía las compare lado a lado.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Dos triángulos rectángulos especiales lado a lado: un triángulo 45-45-90 con proporción 1:1:√2 y un triángulo 30-60-90 con proporción 1:√3:2",
            "caption": "Los dos triángulos rectángulos especiales: 45-45-90 con catetos iguales, y 30-60-90 con tres lados diferentes.",
          },
        },
        "sec-types": {
          "h2": "Los dos tipos principales de triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Ambos triángulos especiales son triángulos rectángulos, así que cada uno tiene un ángulo de 90° y una hipotenusa opuesta a él. Lo que cambia es el par de ángulos agudos, y los ángulos agudos deciden la proporción de lados. Aprende primero cada tipo por separado, y la comparación más adelante en esta guía será fácil de seguir.",
            },
            {
              "kind": "h3",
              "text": "Triángulo 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Ángulos: 45°, 45°, 90°.",
                "Dos catetos iguales, así que cualquiera de los catetos puede servir como dato conocido.",
                "La hipotenusa es igual al cateto por √2, [[c = a\\sqrt{2}]].",
                "Proporción de lados: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "También se llama triángulo rectángulo isósceles.",
              ],
            },
            {
              "kind": "h3",
              "text": "Triángulo 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Ángulos: 30°, 60°, 90°.",
                "Cateto corto [[a]] opuesto al ángulo de 30°, cateto largo [[b]] opuesto al ángulo de 60°.",
                "La hipotenusa es igual al doble del cateto corto, [[c = 2a]].",
                "El cateto largo es igual al cateto corto por √3, [[b = a\\sqrt{3}]].",
                "Proporción de lados: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Un triángulo rectángulo escaleno, ya que los tres lados difieren.",
              ],
            },
            {
              "kind": "p",
              "text": "La diferencia visual es clara una vez que sabes dónde mirar. En un triángulo 45-45-90 los dos catetos parecen tener la misma longitud, y la hipotenusa forma 45° con cada cateto. En un triángulo 30-60-90 el cateto opuesto al ángulo de 30° es visiblemente el lado más corto, el cateto opuesto al ángulo de 60° es más largo, y la hipotenusa es exactamente el doble del cateto corto. La tabla siguiente resume el contraste.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Ángulos",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Proporción de lados",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Catetos iguales",
                "Sí",
                "No",
              ],
              [
                "Lado más corto",
                "Ambos catetos",
                "Cateto corto (opuesto a 30°)",
              ],
              [
                "Lado más largo",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Fórmula de la hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Fórmula del cateto largo",
                "No aplicable",
                "a√3",
              ],
              [
                "Tipo de triángulo",
                "Rectángulo isósceles",
                "Rectángulo escaleno",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Cómo entender el triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 es un triángulo rectángulo isósceles. Sus dos ángulos agudos miden ambos 45°, así que los ángulos suman [[45° + 45° + 90° = 180°]], como debe ocurrir en todo triángulo. Como los dos ángulos agudos son iguales, los lados opuestos a ellos también son iguales, y por eso los dos catetos tienen la misma longitud.",
            },
            {
              "kind": "p",
              "text": "Llama [[a]] y [[b]] a los catetos y [[c]] a la hipotenusa. Los catetos iguales significan [[a = b]], y la proporción de lados es [[a : b : c = 1 : 1 : \\sqrt{2}]]. La hipotenusa es el lado más largo, como en todo triángulo rectángulo, y es más larga que cualquiera de los catetos por un factor de √2, aproximadamente 1.414.",
            },
            {
              "kind": "p",
              "text": "Las dos fórmulas de trabajo son la hipotenusa a partir de un cateto y el cateto a partir de la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Toma un cateto de 5 cm. El otro cateto mide 5 cm, y la hipotenusa es [[c = 5\\sqrt{2} \\approx 7.071]] cm. Los mismos pasos funcionan a cualquier tamaño: un cateto de 12 cm da una hipotenusa de [[12\\sqrt{2} \\approx 16.971]] cm, y un cateto de 1 unidad da una hipotenusa de √2 unidades. La <a href=\"/45-45-90-triangle-calculator/\">calculadora de triángulos 45-45-90</a> cubre este tipo de triángulo con todo detalle, incluidos el área y el perímetro.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Un triángulo 45-45-90 con dos catetos iguales marcados como congruentes, ángulos de 45°, 45°, 90°, e hipotenusa etiquetada como a√2",
            "caption": "Un triángulo 45-45-90: catetos iguales, ángulos agudos iguales, e hipotenusa de a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Cómo se deduce la proporción de lados 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La proporción 1:1:√2 no es una regla para memorizar a ciegas. Se deduce en pocos pasos del teorema de Pitágoras, y ver los pasos una vez hace que la proporción sea difícil de olvidar. Empieza con el hecho de que los catetos son iguales.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Aplica el teorema de Pitágoras a los catetos y a la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye [[b]] por [[a]], ya que los catetos son iguales.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina los dos términos idénticos.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Toma la raíz cuadrada positiva de ambos lados. Las longitudes son positivas, así que se descarta la raíz negativa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Con [[a = 1]] la proporción aparece directamente: catetos 1 y 1, hipotenusa √2, así que la proporción es [[1 : 1 : \\sqrt{2}]]. La misma proporción explica la diagonal de un cuadrado. Un cuadrado de lado [[a]] tiene una diagonal que lo divide en dos triángulos 45-45-90 congruentes, y la diagonal es la hipotenusa de cualquiera de ellos, así que la diagonal es igual a [[a\\sqrt{2}]]. Un cuadrado de 8 cm de lado tiene una diagonal de [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Un triángulo 45-45-90 etiquetado que muestra la deducción pitagórica a al cuadrado más a al cuadrado igual a c al cuadrado, lo que da c igual a a por raíz de 2",
              "caption": "La deducción pitagórica: los catetos iguales convierten a² + b² = c² en 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Un cuadrado de 8 cm de lado y una diagonal de 8 raíz de 2 cm, dividido en dos triángulos 45-45-90 congruentes",
              "caption": "La diagonal de un cuadrado lo divide en dos triángulos 45-45-90 congruentes.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Cómo entender el triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene tres ángulos diferentes, así que tiene tres lados de longitudes diferentes. El lado opuesto al ángulo más pequeño es el lado más corto, el lado opuesto al ángulo intermedio es el lado intermedio, y el lado opuesto al ángulo de 90° es la hipotenusa. Esa regla del lado opuesto es toda la clave para etiquetar este triángulo correctamente.",
            },
            {
              "kind": "p",
              "text": "Usa [[a]] para el cateto corto opuesto a 30°, [[b]] para el cateto largo opuesto a 60°, y [[c]] para la hipotenusa opuesta a 90°. Las dos fórmulas de trabajo son el cateto largo a partir del cateto corto y la hipotenusa a partir del cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "La proporción de lados es [[a : b : c = 1 : \\sqrt{3} : 2]], con √3 aproximadamente 1.732. Toma un cateto corto de 5 cm. El cateto largo es [[b = 5\\sqrt{3} \\approx 8.660]] cm y la hipotenusa es [[c = 10]] cm. Comprueba con el teorema de Pitágoras: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], lo que confirma que los tres lados encajan.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es siempre exactamente el doble del cateto corto, que es la comprobación más rápida de este tema. Si un problema dice que la hipotenusa mide 14 cm, el cateto corto mide 7 cm de inmediato, y el cateto largo sigue como [[7\\sqrt{3} \\approx 12.124]] cm. La <a href=\"/30-60-90-triangle-calculator/\">calculadora de triángulos 30-60-90</a> cubre este tipo de triángulo con todo detalle, incluida su deducción a partir del triángulo equilátero.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Un triángulo 30-60-90 con cateto corto a opuesto a 30 grados, cateto largo a raíz de 3 opuesto a 60 grados, e hipotenusa 2a opuesta a 90 grados",
            "caption": "Un triángulo 30-60-90: el cateto corto está opuesto a 30°, el cateto largo opuesto a 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Cómo se deduce la proporción de lados 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La proporción 1:√3:2 viene de un triángulo equilátero, y vale la pena seguir la construcción paso a paso. Empieza con un triángulo equilátero cuyo lado mide [[2a]]. Sus tres ángulos son de 60° y sus tres lados son iguales.",
            },
            {
              "kind": "p",
              "text": "Traza una altura desde un vértice hasta el lado opuesto. La altura hace tres cosas a la vez: divide el triángulo equilátero en dos triángulos rectángulos congruentes, corta la base en dos segmentos de longitud [[a]], y divide un ángulo de 60° en dos ángulos de 30°. Cada mitad es ahora un triángulo con ángulos de 30°, 60° y 90°.",
            },
            {
              "kind": "p",
              "text": "En cualquiera de las mitades, la hipotenusa es el lado original del triángulo equilátero, [[2a]], y el cateto corto es la mitad de la base, [[a]]. Llama [[b]] a la altura, que es el cateto largo. Aplica el teorema de Pitágoras al medio triángulo.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Desarrolla el cuadrado.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Simplifica.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Toma la raíz cuadrada positiva.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Con [[a = 1]] la proporción aparece: cateto corto 1, cateto largo √3, hipotenusa 2, así que la proporción es [[1 : \\sqrt{3} : 2]]. La altura de un triángulo equilátero de 10 cm de lado es por tanto [[5\\sqrt{3} \\approx 8.660]] cm, ya que la altura es el cateto largo de un triángulo 30-60-90 con cateto corto de 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Un triángulo equilátero de lado 2a dividido por una altura en dos triángulos 30-60-90 congruentes, cada uno con cateto corto a, cateto largo a raíz de 3, e hipotenusa 2a",
            "caption": "Una altura divide un triángulo equilátero en dos triángulos 30-60-90 congruentes.",
          },
        },
        "sec-compare": {
          "h2": "Comparación de las proporciones de lados de los dos triángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Las dos proporciones se parecen a simple vista, y justo por eso se confunden. Ambas contienen una raíz cuadrada y un número entero pequeño, y ambas describen un triángulo rectángulo. Pero los números están en lugares diferentes: en 1:1:√2 la raíz pertenece a la hipotenusa, mientras que en 1:√3:2 la raíz pertenece al cateto largo y la hipotenusa es el número entero 2.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Ángulos",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Proporción de lados",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Catetos iguales",
                "Sí",
                "No",
              ],
              [
                "Lado más corto",
                "Ambos catetos",
                "Cateto corto",
              ],
              [
                "Lado más largo",
                "Hipotenusa",
                "Hipotenusa",
              ],
              [
                "Fórmula de la hipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Fórmula del cateto largo",
                "No aplicable",
                "a√3",
              ],
              [
                "Tipo de triángulo",
                "Rectángulo isósceles",
                "Rectángulo escaleno",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Las fórmulas no se pueden intercambiar. Multiplicar el cateto corto de un triángulo 30-60-90 por √2 da una hipotenusa incorrecta, y duplicar un cateto 45-45-90 da una hipotenusa incorrecta. Los dos triángulos provienen de construcciones diferentes, la diagonal de un cuadrado para el 45-45-90 y la altura de un triángulo equilátero para el 30-60-90, así que sus proporciones responden a preguntas de geometría diferentes.",
            },
            {
              "kind": "p",
              "text": "Un ejemplo numérico de cada tipo muestra la diferencia. Un triángulo 45-45-90 con cateto de 5 cm tiene una hipotenusa de [[5\\sqrt{2} \\approx 7.071]] cm. Un triángulo 30-60-90 con cateto corto de 5 cm tiene una hipotenusa de 10 cm y un cateto largo de [[5\\sqrt{3} \\approx 8.660]] cm. El mismo número inicial, respuestas muy diferentes, y la única forma de distinguirlos es el patrón de ángulos.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Comparación lado a lado de la proporción 45-45-90 1:1:√2 y la proporción 30-60-90 1:√3:2 a la misma escala",
            "caption": "Ambas proporciones a la misma escala: la raíz está en la hipotenusa para el 45-45-90, y en el cateto largo para el 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Cómo usar la calculadora de hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El modo 1 es el modo más usado de esta página, y solo toma unos segundos una vez confirmado el tipo de triángulo. Sigue los pasos en orden.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirma que el triángulo es 45-45-90: ambos ángulos agudos miden 45°.",
                "Elige cualquiera de los catetos iguales como lado conocido, ya que ambos catetos tienen la misma longitud.",
                "Selecciona el modo de hipotenusa 45-45-90 en la calculadora.",
                "Introduce la longitud del cateto como un número positivo.",
                "Elige la unidad que coincida con el resto del problema.",
                "Haz clic en Calcular hipotenusa c.",
                "Lee el resultado, que es la hipotenusa en la misma unidad.",
                "Usa Restablecer antes de empezar un cálculo nuevo.",
              ],
            },
            {
              "kind": "p",
              "text": "El modo aplica la fórmula siguiente.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto de 7 cm, la hipotenusa es [[c = 7\\sqrt{2} \\approx 9.899]] cm. La fórmula solo es válida cuando ambos ángulos agudos son de 45°, así que comprueba los ángulos antes de confiar en la respuesta. Si los ángulos son de 30° y 60° en su lugar, cambia a un modo 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Cómo hallar un cateto a partir de la hipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El modo 2 funciona hacia atrás, de la hipotenusa al cateto. Divide entre √2, que es el paso que se olvida con más frecuencia. La fórmula se muestra a continuación.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "El mismo resultado puede escribirse en forma racionalizada, lo que evita una raíz en el denominador.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Para usar el modo, confirma el patrón de ángulos 45-45-90, selecciona el modo de cateto 45-45-90, introduce la hipotenusa, elige la unidad y haz clic en Calcular. Con una hipotenusa de 10 cm, el cateto es [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Ambos catetos tienen esta longitud, ya que los catetos son iguales, así que una sola respuesta describe todo el triángulo. Una comprobación rápida: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], lo que coincide con la hipotenusa al cuadrado.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Cómo usar la calculadora de cateto largo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El modo 3 halla el cateto largo a partir del cateto corto, y la única parte difícil es identificar correctamente el cateto corto. El cateto corto es el lado opuesto al ángulo de 30°, y siempre es el lado más corto del triángulo.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirma que el triángulo es 30-60-90 a partir de sus ángulos.",
                "Encuentra el lado opuesto al ángulo de 30°: ese es el cateto corto.",
                "Selecciona el modo de cateto largo 30-60-90 en la calculadora.",
                "Introduce el cateto corto como un número positivo.",
                "Elige la unidad que coincida con el resto del problema.",
                "Haz clic en Calcular cateto largo.",
                "Lee el resultado, que es el cateto largo en la misma unidad.",
              ],
            },
            {
              "kind": "p",
              "text": "El modo aplica la fórmula siguiente.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto corto de 6 cm, el cateto largo es [[b = 6\\sqrt{3} \\approx 10.392]] cm. Introducir la hipotenusa o el cateto largo por error da una respuesta incorrecta, así que etiqueta primero los lados e introduce solo el cateto corto.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Cómo usar la calculadora de hipotenusa 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El modo 4 es el modo más sencillo de la página, porque la hipotenusa de un triángulo 30-60-90 es exactamente el doble del cateto corto. No hay ninguna raíz cuadrada, lo que hace que la respuesta sea fácil de comprobar a mano.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confirma que el triángulo es 30-60-90 a partir de sus ángulos.",
                "Identifica el cateto corto, el lado opuesto al ángulo de 30°.",
                "Selecciona el modo de hipotenusa 30-60-90 en la calculadora.",
                "Introduce el cateto corto como un número positivo.",
                "Elige la unidad que coincida con el resto del problema.",
                "Haz clic en Calcular hipotenusa c.",
                "Lee el resultado, que es la hipotenusa en la misma unidad.",
              ],
            },
            {
              "kind": "p",
              "text": "El modo aplica la fórmula siguiente.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto corto de 8 cm, la hipotenusa es [[c = 16]] cm. El cateto largo del mismo triángulo es [[8\\sqrt{3} \\approx 13.856]] cm, que está entre el cateto corto y la hipotenusa, como debe ser. Si un resultado sale alguna vez más pequeño que el cateto corto, se seleccionó el modo equivocado.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Ejemplos paso a paso para los dos tipos de triángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Estos dos ejemplos resueltos hallan todos los lados de cada tipo de triángulo a partir de un solo lado conocido. El área y el perímetro aparecen aquí como cálculos manuales adicionales, no como modos de calculadora: la calculadora de esta página solo halla longitudes de lados.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Triángulo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dado un triángulo 45-45-90 con cateto [[a = 5]] cm, halla el otro cateto, la hipotenusa, el área y el perímetro.",
            },
            {
              "kind": "p",
              "text": "Los catetos son iguales, así que el otro cateto es [[b = 5]] cm. La hipotenusa sigue de la proporción.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "El área es la mitad del producto de los catetos.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "El perímetro es la suma de los tres lados.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Triángulo 30-60-90",
            },
            {
              "kind": "p",
              "text": "Dado un triángulo 30-60-90 con cateto corto [[a = 5]] cm, halla el cateto largo, la hipotenusa, el área y el perímetro.",
            },
            {
              "kind": "p",
              "text": "El cateto largo es el cateto corto por √3, y la hipotenusa es el doble del cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "El área es la mitad del producto de los catetos.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "El perímetro es la suma de los tres lados.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ambos ejemplos se comprueban con el teorema de Pitágoras. Para el primero, [[5^2 + 5^2 = 50]] y [[7.071^2 \\approx 50]]. Para el segundo, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Relaciones de área y perímetro en triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "El área y el perímetro son cálculos complementarios útiles una vez conocidos los lados, pero son relaciones manuales, no funciones de la calculadora de esta página. Las fórmulas siguientes usan las mismas etiquetas de lados que el resto de la guía, con [[a]] como el cateto conocido para el 45-45-90 y el cateto corto para el 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo 45-45-90, el área es la mitad del cuadrado de un cateto, y el perímetro es el cateto por [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Para un triángulo 30-60-90, el área es la mitad del producto de los catetos, y el perímetro es el cateto corto por [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Toma un triángulo 45-45-90 con cateto de 6 cm. Su área es [[A = \\frac{36}{2} = 18]] cm², y su perímetro es [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Toma un triángulo 30-60-90 con cateto corto de 6 cm. Su área es [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², y su perímetro es [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Mantén las unidades claras: el área siempre va en unidades cuadradas y el perímetro en unidades lineales, así que una respuesta de 18 cm para un área es un error de unidades, no un error de redondeo.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Respuestas exactas con radicales frente a aproximaciones decimales",
          "blocks": [
            {
              "kind": "p",
              "text": "Las raíces cuadradas de esta guía son números irracionales, lo que significa que sus expansiones decimales nunca terminan ni se repiten. Los dos valores que hay que conocer se muestran a continuación.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Una respuesta exacta mantiene la raíz en su lugar, como [[5\\sqrt{2}]], mientras que una respuesta decimal la sustituye por una aproximación, como [[5\\sqrt{2} \\approx 7.071]]. Las respuestas exactas se prefieren en las matemáticas escolares porque no llevan error de redondeo y muestran la estructura del problema. Un profesor puede ver de inmediato que [[5\\sqrt{2}]] viene de un triángulo 45-45-90, mientras que 7.071 podría haber venido de cualquier parte.",
            },
            {
              "kind": "p",
              "text": "Los decimales son mejores para medidas prácticas, donde una regla o una herramienta de corte necesita un número, no un símbolo. Cuando se necesita un decimal, redondea solo al final del cálculo, nunca en medio. Redondear √2 a 1.41 antes de multiplicar por 5 da 7.05, que se desvía 0.021 del verdadero 7.071, y el error crece con números mayores. Etiqueta cada decimal con el signo de aproximadamente igual, para que un lector nunca confunda [[5\\sqrt{3} \\approx 8.660]] con una igualdad exacta.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo verificar los cálculos de triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Cada respuesta de un triángulo especial puede comprobarse en menos de un minuto con tres pruebas: la proporción de lados, el teorema de Pitágoras y la suma de ángulos. Haz al menos dos de ellas antes de confiar en un resultado.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo 45-45-90, comprueba que los catetos son iguales, [[a = b]], y que los lados cumplen el teorema de Pitágoras, [[a^2 + b^2 = c^2]]. Con [[a = 5]] cm y [[c = 7.071]] cm, la comprobación es [[25 + 25 = 50]] frente a [[7.071^2 \\approx 50]], que coinciden.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo 30-60-90, comprueba que el cateto largo es el cateto corto por √3, [[b = a\\sqrt{3}]], que la hipotenusa es el doble del cateto corto, [[c = 2a]], y que [[a^2 + b^2 = c^2]]. Con [[a = 5]] cm, [[b = 8.660]] cm y [[c = 10]] cm, la comprobación es [[25 + 75 = 100 = 10^2]], que coincide.",
            },
            {
              "kind": "p",
              "text": "Verifica también la suma de ángulos: los tres ángulos deben sumar 180°. Un triángulo 45-45-90 da [[45° + 45° + 90° = 180°]], y un triángulo 30-60-90 da [[30° + 60° + 90° = 180°]]. Si la proporción, el teorema y los ángulos coinciden, la respuesta es sólida. Si alguno de ellos falla, el tipo de triángulo se identificó mal o se usó la fórmula equivocada.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores comunes al resolver triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce errores causan casi todas las respuestas incorrectas de este tema. Cada uno se enumera a continuación con el enfoque correcto, para que puedas detectar tu propio error rápidamente.",
            },
            {
              "kind": "list",
              "items": [
                "Confundir los triángulos 45-45-90 con los 30-60-90. Comprueba primero los ángulos: dos ángulos de 45° significan 45-45-90, mientras que 30° y 60° significan 30-60-90.",
                "Usar √3 en lugar de √2. La hipotenusa 45-45-90 es [[c = a\\sqrt{2}]], nunca [[a\\sqrt{3}]].",
                "Usar √2 en lugar de √3. El cateto largo 30-60-90 es [[b = a\\sqrt{3}]], nunca [[a\\sqrt{2}]].",
                "Suponer que ambos catetos son iguales en un triángulo 30-60-90. Solo el triángulo 45-45-90 tiene catetos iguales; en el 30-60-90 el cateto largo es √3 veces el cateto corto.",
                "Suponer que el cateto corto y el cateto largo son iguales. El cateto corto está opuesto a 30° y el cateto largo opuesto a 60°, así que difieren por un factor de √3.",
                "Olvidar que la hipotenusa 30-60-90 es igual al doble del cateto corto. Es [[c = 2a]], una duplicación con número entero y sin raíz cuadrada.",
                "Usar el lado de entrada equivocado. Los modos 3 y 4 necesitan ambos el cateto corto, así que introducir el cateto largo o la hipotenusa da una respuesta incorrecta.",
                "Confundir el cateto corto con la hipotenusa. La hipotenusa es el lado más largo y está opuesta al ángulo de 90°; el cateto corto es el lado más corto.",
                "Olvidar dividir entre √2 al hallar un cateto 45-45-90. El cateto es [[a = \\frac{c}{\\sqrt{2}}]], no [[a = c\\sqrt{2}]], lo que haría el cateto más largo que la hipotenusa.",
                "Olvidar multiplicar por √3 al hallar un cateto largo 30-60-90. El cateto largo es [[b = a\\sqrt{3}]], y usar [[a]] solo devuelve el cateto corto.",
                "Redondear los radicales demasiado pronto. Mantén [[\\sqrt{2}]] y [[\\sqrt{3}]] exactos en cada paso y redondea solo la respuesta final.",
                "Mezclar unidades. Un cateto en cm y una hipotenusa en mm no pueden compartir una fórmula; convierte primero y luego calcula.",
                "Confundir el área con el perímetro. El área usa unidades cuadradas y la fórmula [[A = \\frac{a^2}{2}]] para el 45-45-90, mientras que el perímetro usa unidades lineales y [[P = a(2 + \\sqrt{2})]].",
                "Aplicar las fórmulas de triángulos especiales a triángulos rectángulos arbitrarios. Las proporciones 1:1:√2 y 1:√3:2 solo funcionan para sus propios patrones de ángulos; un triángulo 20-70-90 necesita trigonometría.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones prácticas de los triángulos rectángulos especiales",
          "blocks": [
            {
              "kind": "p",
              "text": "Los triángulos rectángulos especiales aparecen dondequiera que haya cuadrados, triángulos equiláteros y ángulos estándar. La diagonal de un cuadrado es un problema 45-45-90: una mesa cuadrada de 60 cm de lado tiene una diagonal de [[60\\sqrt{2} \\approx 84.853]] cm. La altura de un triángulo equilátero es un problema 30-60-90: un letrero triangular de 40 cm de lado tiene una altura de [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "En clase, estos triángulos hacen más rápidas las tareas de geometría y los ejercicios de trigonometría, porque los ángulos estándar como 30°, 45° y 60° tienen valores exactos de seno y coseno que salen directamente de estas proporciones. En el dibujo técnico y el trazado con ángulos estándar, las escuadras de 45° y de 30-60 se construyen exactamente sobre estos triángulos, así que un delineante puede trazar una línea de 45° o de 30° conociendo de antemano las proporciones de los lados.",
            },
            {
              "kind": "p",
              "text": "Los conceptos de arquitectura y diseño usan los mismos patrones para arriostramientos diagonales, pendientes de tejado y diseños de baldosas, y la geometría de la construcción los usa para comprobaciones rápidas en obra, como confirmar que una esquina es cuadrada midiendo una diagonal estilo 3-4-5 o una diagonal 45-45-90. La modelización matemática y las demostraciones en clase también los usan, ya que las respuestas exactas con radicales mantienen visible el razonamiento en lugar de esconderlo dentro de una calculadora. Trata estos atajos como herramientas de geometría para planificar y comprobar, no como sustituto de una medición de ingeniería adecuada donde se requiere precisión.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resuelve cada problema por tu cuenta y luego comprueba la solución. Las preguntas de área y perímetro son ejercicios manuales, no modos de calculadora. Usa números diferentes a los de los ejemplos principales para que los patrones tengan que aplicarse de nuevo.",
            },
            {
              "kind": "h3",
              "text": "Problemas 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triángulo 45-45-90 tiene un cateto de 7 cm. Halla la hipotenusa. Solución: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Un triángulo 45-45-90 tiene una hipotenusa de 12 cm. Halla un cateto. Solución: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Un triángulo 45-45-90 tiene un cateto de 9 cm. Halla el área. Solución: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Un triángulo 45-45-90 tiene un cateto de 4 cm. Halla el perímetro. Solución: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Problemas 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triángulo 30-60-90 tiene un cateto corto de 7 cm. Halla el cateto largo. Solución: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Un triángulo 30-60-90 tiene un cateto corto de 9 cm. Halla la hipotenusa. Solución: [[c = 2 \\times 9 = 18]] cm.",
                "Un triángulo 30-60-90 tiene un cateto corto de 6 cm. Halla el área. Solución: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Un triángulo 30-60-90 tiene un cateto corto de 10 cm. Halla el perímetro. Solución: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras de triángulos rectángulos relacionadas",
      "relatedIntro": "Cada herramienta siguiente resuelve un tipo diferente de problema de triángulos rectángulos. Elige la que coincida con la información que ya tienes.",
      "relatedItems": [
        "Calculadora de triángulos 45-45-90",
        "Calculadora de triángulos 30-60-90",
        "Calculadora de lados de triángulos rectángulos",
        "Calculadora de razones trigonométricas",
        "Calculadora de ángulos de triángulos rectángulos",
        "Calculadora del teorema de Pitágoras",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es un triángulo rectángulo especial?",
          "answer": "Un triángulo rectángulo especial es un triángulo rectángulo cuyos ángulos fijan su proporción de lados, así que un solo lado conocido determina todos los demás lados. Los dos tipos son el triángulo 45-45-90, con proporción [[1 : 1 : \\sqrt{2}]], y el triángulo 30-60-90, con proporción [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "¿Qué triángulos rectángulos especiales cubre esta calculadora?",
          "answer": "Esta calculadora cubre el triángulo 45-45-90 y el triángulo 30-60-90, los dos triángulos rectángulos especiales usados en la geometría escolar. Tiene cuatro modos: hipotenusa 45-45-90 a partir de un cateto, cateto 45-45-90 a partir de una hipotenusa, cateto largo 30-60-90 a partir de un cateto corto, e hipotenusa 30-60-90 a partir de un cateto corto.",
        },
        {
          "question": "¿Cuál es la proporción de lados de un triángulo 45-45-90?",
          "answer": "La proporción de lados de un triángulo 45-45-90 es [[1 : 1 : \\sqrt{2}]]. Los dos catetos son iguales, y la hipotenusa es el cateto por √2, aproximadamente 1.414. Con un cateto de 5 cm, la hipotenusa es [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "¿Cuál es la proporción de lados de un triángulo 30-60-90?",
          "answer": "La proporción de lados de un triángulo 30-60-90 es [[1 : \\sqrt{3} : 2]]. El cateto corto está opuesto a 30°, el cateto largo opuesto a 60°, y la hipotenusa opuesta a 90°. Con un cateto corto de 5 cm, el cateto largo es [[5\\sqrt{3} \\approx 8.660]] cm y la hipotenusa mide 10 cm.",
        },
        {
          "question": "¿Por qué aparece √2 en un triángulo 45-45-90?",
          "answer": "La √2 viene del teorema de Pitágoras aplicado a dos catetos iguales. Con [[a = b]], el teorema da [[a^2 + a^2 = c^2]], así que [[2a^2 = c^2]] y [[c = a\\sqrt{2}]]. La raíz es el precio de convertir dos cuadrados iguales en un cuadrado de hipotenusa.",
        },
        {
          "question": "¿Por qué aparece √3 en un triángulo 30-60-90?",
          "answer": "La √3 viene de dividir un triángulo equilátero por la mitad. Una altura divide un triángulo equilátero de lado [[2a]] en dos triángulos 30-60-90, y el teorema de Pitágoras en una mitad da [[b^2 = 3a^2]], así que el cateto largo es [[b = a\\sqrt{3}]].",
        },
        {
          "question": "¿Cómo hallo la hipotenusa de un triángulo 45-45-90?",
          "answer": "Multiplica cualquiera de los catetos iguales por √2. La fórmula es [[c = a\\sqrt{2}]]. Por ejemplo, un cateto de 7 cm da una hipotenusa de [[7\\sqrt{2} \\approx 9.899]] cm. Selecciona el modo de hipotenusa 45-45-90, introduce el cateto y haz clic en Calcular.",
        },
        {
          "question": "¿Cómo hallo el cateto largo de un triángulo 30-60-90?",
          "answer": "Multiplica el cateto corto por √3. La fórmula es [[b = a\\sqrt{3}]]. Por ejemplo, un cateto corto de 6 cm da un cateto largo de [[6\\sqrt{3} \\approx 10.392]] cm. Asegúrate de introducir el cateto corto, el lado opuesto al ángulo de 30°, no la hipotenusa.",
        },
        {
          "question": "¿Puedo calcular el cateto que falta a partir de la hipotenusa?",
          "answer": "Sí, para un triángulo 45-45-90. Divide la hipotenusa entre √2, usando [[a = \\frac{c}{\\sqrt{2}}]] o la forma racionalizada [[a = \\frac{c\\sqrt{2}}{2}]]. Una hipotenusa de 10 cm da un cateto de [[5\\sqrt{2} \\approx 7.071]] cm, y ambos catetos comparten esa longitud.",
        },
        {
          "question": "¿Son semejantes todos los triángulos rectángulos especiales dentro de su propio tipo?",
          "answer": "Sí. Cada triángulo 45-45-90 tiene los mismos ángulos y la misma proporción 1:1:√2, así que dos cualesquiera son semejantes. Cada triángulo 30-60-90 comparte igualmente la proporción 1:√3:2. Un triángulo 45-45-90 nunca es semejante a un triángulo 30-60-90, porque sus ángulos difieren.",
        },
        {
          "question": "¿Cuál es la diferencia entre los dos tipos de triángulos especiales?",
          "answer": "Un triángulo 45-45-90 tiene dos catetos iguales y la proporción 1:1:√2, mientras que un triángulo 30-60-90 tiene tres lados diferentes y la proporción 1:√3:2. El primero viene de la diagonal de un cuadrado, el segundo de la altura de un triángulo equilátero, y sus fórmulas no se pueden intercambiar.",
        },
        {
          "question": "¿Cómo puedo verificar las longitudes de lados calculadas?",
          "answer": "Comprueba la proporción de lados, el teorema de Pitágoras y la suma de ángulos. Para el 45-45-90, confirma [[a = b]] y [[a^2 + b^2 = c^2]]. Para el 30-60-90, confirma [[b = a\\sqrt{3}]], [[c = 2a]] y [[a^2 + b^2 = c^2]]. Si las tres comprobaciones coinciden, la respuesta es sólida.",
        },
      ],
    },
};
