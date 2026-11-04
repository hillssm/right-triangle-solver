// altitudeFromSidesGuideTranslations.bes.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B1_ES = {
  "es": {
      "tocHeading": "Navegación de secciones",
      "tocItems": {
        "sec-intro": "Calculadora de Altura de Triángulo Rectángulo a Partir de los Lados",
        "sec-calculate": "Calcular la Altura de un Triángulo Rectángulo a Partir de los Lados",
        "sec-altitude": "¿Qué Es la Altura de un Triángulo Rectángulo?",
        "sec-sides": "Comprender los Lados de un Triángulo Rectángulo",
        "sec-formula": "Fórmula de la Altura de un Triángulo Rectángulo a Partir de los Lados",
        "sec-use": "Cómo Usar la Calculadora de Altura de Triángulo Rectángulo a Partir de los Lados",
        "sec-manual": "Cálculo de la Altura Paso a Paso Sin Calculadora",
        "sec-diagram": "Explicación del Diagrama de la Altura del Triángulo Rectángulo",
        "sec-proof": "¿Por Qué Funciona la Fórmula de la Altura?",
        "sec-examples": "Ejemplos Resueltos de Altura de Triángulo Rectángulo a Partir de los Lados",
        "sec-two-sides": "Cómo Hallar la Altura Cuando Solo Se Conocen Dos Lados",
        "sec-verify": "Cómo Verificar tu Cálculo de la Altura",
        "sec-vs-projections": "Altura a Partir de los Lados frente a Altura a Partir de las Proyecciones",
        "sec-area-rel": "Relación Entre la Altura, el Área y la Hipotenusa",
        "sec-properties": "Propiedades Especiales de la Altura sobre la Hipotenusa",
        "sec-mistakes": "Errores Comunes al Calcular la Altura de un Triángulo Rectángulo",
        "sec-applications": "Usos Prácticos de los Cálculos de Altura de Triángulos Rectángulos",
        "sec-practice": "Problemas de Práctica con Soluciones",
        "sec-related": "Explorar Calculadoras Relacionadas de Triángulos Rectángulos",
        "sec-faq": "Preguntas Frecuentes",
        "sec-conclusion": "Calculadoras Relacionadas de Triángulos Rectángulos",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Altura de Triángulo Rectángulo a Partir de los Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Introduce los dos catetos y la hipotenusa para hallar la altura en segundos.",
            },
            {
              "kind": "p",
              "text": "Esta calculadora halla la altura de un triángulo rectángulo: la distancia perpendicular desde el vértice del ángulo recto hasta la hipotenusa. Introduce los dos catetos, [[a]] y [[b]], y la hipotenusa [[c]], y devuelve [[h]] usando [[h=\\frac{ab}{c}]]. El resultado sale en la misma unidad que tus entradas.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, un triángulo con catetos de 3 cm y 4 cm e hipotenusa de 5 cm da [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Observa que 2.4 cm es más corto que cualquiera de los catetos, lo cual siempre es cierto para la altura sobre la hipotenusa.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular la Altura de un Triángulo Rectángulo a Partir de los Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora recibe tres medidas. El cateto a es el primer lado perpendicular, el cateto b es el segundo lado perpendicular y la hipotenusa c es el lado más largo, opuesto al ángulo recto. Las tres deben usar la misma unidad, así que convierte los metros a centímetros o los pies a pulgadas antes de escribir.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular Altura h para ver el resultado con su sustitución, y usa Restablecer para borrar los campos antes del siguiente problema. La calculadora responde con la fórmula compacta:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Si solo conoces dos lados, recupera el tercero con el teorema de Pitágoras primero, o prueba la <a href=\"/right-triangle-altitude-calculator/\">calculadora de altura</a> general para un punto de partida diferente.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "¿Qué Es la Altura de un Triángulo Rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una altura es la distancia perpendicular desde un vértice hasta el lado opuesto. En esta página siempre cae desde el vértice del ángulo recto directamente hasta la hipotenusa, encontrándola en ángulo recto. La hipotenusa es la base porque es el único lado opuesto al ángulo recto, y el segmento cae dentro del triángulo.",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene tres alturas, pero dos de ellas son triviales: el cateto [[a]] es la altura sobre la base [[b]], y el cateto [[b]] es la altura sobre la base [[a]], ya que los catetos ya son perpendiculares. La interesante es la tercera altura, la correspondiente a la hipotenusa, porque es un segmento interior realmente nuevo y es más corta que cualquiera de los catetos.",
            },
            {
              "kind": "p",
              "text": "Esa tercera altura es lo que esta calculadora halla, y es lo que los libros de texto suelen querer decir cuando piden la altura de un triángulo rectángulo.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Comprender los Lados de un Triángulo Rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Las etiquetas correctas hacen que la fórmula funcione. Los catetos [[a]] y [[b]] son los dos lados perpendiculares que se encuentran en el ángulo recto. La hipotenusa [[c]] es el lado más largo, opuesto al ángulo recto. La altura [[h]] no es un lado en absoluto, sino la caída perpendicular desde el vértice del ángulo recto hasta la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Identifica siempre la hipotenusa primero: es la más larga de tus tres longitudes. En un triángulo 3-4-5, el 5 debe ser [[c]], y una comprobación rápida [[3^2+4^2=5^2]] confirma las etiquetas. Etiquetar el 5 como cateto dividiría entre el lado equivocado y arruinaría la respuesta.",
            },
          ],
          "table": {
            "headers": [
              "Variable",
              "Definición",
              "Papel en el cálculo",
            ],
            "rows": [
              [
                "a",
                "Primer cateto perpendicular",
                "Se multiplica por b en el numerador",
              ],
              [
                "b",
                "Segundo cateto perpendicular",
                "Se multiplica por a en el numerador",
              ],
              [
                "c",
                "Hipotenusa, lado más largo",
                "Divide a ab en el denominador",
              ],
              [
                "h",
                "Altura sobre la hipotenusa",
                "El resultado de la fórmula",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Fórmula de la Altura de un Triángulo Rectángulo a Partir de los Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula es corta y fácil de memorizar:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Los catetos se multiplican porque su producto está ligado al área: el área es la mitad de [[ab]], así que [[ab]] es el doble del área. Dividir entre la hipotenusa aísla entonces [[h]], ya que la misma área también es la mitad de [[ch]]. El resultado es una longitud ordinaria, por eso las tres entradas deben compartir una unidad.",
            },
            {
              "kind": "p",
              "text": "Prueba un triángulo 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geométricamente, 4.8 cm es el camino más corto desde el vértice del ángulo recto hasta la hipotenusa. (La demostración completa aparece en la sección de demostración más abajo.)",
            },
            {
              "kind": "p",
              "text": "Un hábito útil es comprobar las unidades antes de sustituir. Si [[a]] es 60 mm, [[b]] es 8 cm y [[c]] es 100 mm, convierte primero a una unidad: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], que es el mismo triángulo 6-8-10 y da el mismo [[4.8\\text{ cm}]]. La fórmula nunca repara las unidades mixtas por ti, así que esta única comprobación evita los errores más vergonzosos.",
            },
          ],
        },
        "sec-use": {
          "h2": "Cómo Usar la Calculadora de Altura de Triángulo Rectángulo a Partir de los Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Sigue estos ocho pasos para un resultado limpio cada vez.",
            },
            {
              "kind": "steps",
              "steps": [
                "Encuentra el ángulo recto, la esquina donde dos lados se encuentran en ángulo recto, a menudo marcada con un cuadradito. Sin un ángulo recto confirmado, esta fórmula no se aplica.",
                "Localiza los dos catetos perpendiculares que forman esa esquina; llámalos a y b en cualquier orden, ya que la fórmula los trata de forma simétrica.",
                "Identifica la hipotenusa: el lado opuesto al ángulo recto y el más largo de los tres. Confirma que es más larga que ambos catetos.",
                "Convierte las tres medidas a la misma unidad antes de escribir nada. Las unidades mixtas son el error de entrada más común.",
                "Introduce a, b y c en sus campos correspondientes.",
                "Haz clic en el botón Calcular Altura h para multiplicar los catetos, dividir entre la hipotenusa y mostrar la altura.",
                "Lee el resultado y comprueba que los números sustituidos coincidan con lo que querías introducir.",
                "Usa Restablecer para borrar las entradas antes del siguiente problema, de modo que los valores antiguos no puedan corromper la nueva respuesta.",
              ],
            },
            {
              "kind": "p",
              "text": "Antes de confiar en una respuesta, haz una comprobación pitagórica: [[a^2+b^2]] debe ser igual a [[c^2]]. Un pequeño redondeo de medición está bien, pero una gran discrepancia significa que los lados no forman un triángulo rectángulo.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Cálculo de la Altura Paso a Paso Sin Calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Puedes hallar la altura a mano en cinco pasos cortos. Toma [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]], y primero confirma que el triángulo es válido: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Paso 1, escribe la fórmula: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Paso 2, sustituye: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Paso 3, multiplica los catetos: [[9 \\times 12=108]], así que [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Paso 4, divide: [[108 \\div 15=7.2]], así que [[h=7.2\\text{ cm}]]. Paso 5, verifica con el área. Con los catetos, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; con la hipotenusa y la altura, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Ambas áreas coinciden porque describen el mismo triángulo. Los catetos dan un par base-altura y la hipotenusa da otro, pero la región encerrada es idéntica. Las áreas coincidentes confirman la altura.",
            },
            {
              "kind": "p",
              "text": "¿Por qué funciona tan bien la comprobación del área? Porque la propia fórmula de la altura surge de igualar las dos expresiones del área, así que verificar a través del área cierra el círculo: cualquier desliz aritmético en la multiplicación o la división haría que las dos áreas discreparan. Cuando coinciden, tanto el uso de la fórmula como la aritmética quedan confirmados de un golpe.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Explicación del Diagrama de la Altura del Triángulo Rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Etiqueta el triángulo ABC con el ángulo recto en C. Entonces AC es el cateto [[a]], BC es el cateto [[b]] y AB es la hipotenusa [[c]]. El punto D está sobre AB, y el segmento CD se encuentra con AB en ángulo recto; CD es la altura [[h]]. Pequeñas marcas cuadradas en C y D muestran ambos ángulos rectos.",
            },
            {
              "kind": "p",
              "text": "La altura CD divide el triángulo grande en dos triángulos rectángulos más pequeños, ACD y BCD, cada uno con su ángulo recto en D. Ambos son semejantes al triángulo original ABC y entre sí, un hecho en el que se apoyan las secciones de demostración y proyecciones.",
            },
            {
              "kind": "p",
              "text": "Cuando dibujes tu propia versión, empieza con el ángulo recto en C, dibuja los catetos y luego conecta sus extremos libres para formar la hipotenusa. Traza la altura al final, comprobando que se encuentre con la hipotenusa en ángulo recto. Etiquetar en el orden a, b, c, h mantiene organizado cada cálculo posterior.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triángulo ABC con ángulo recto en C, altura CD trazada hasta la hipotenusa AB; AC es igual a a, BC es igual a b, AB es igual a c, CD es igual a h",
            "caption": "La altura CD cae desde el ángulo recto C hasta la hipotenusa AB; h es igual a (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "¿Por Qué Funciona la Fórmula de la Altura?",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula se deduce del área de un triángulo. El área es la mitad de la base por la altura, y un triángulo rectángulo ofrece dos cómodos pares base-altura. Con los catetos como base y altura:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Con la hipotenusa como base y la altura como medida vertical:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ambas expresiones describen el mismo triángulo, así que iguálalas:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplica por 2 y luego divide entre [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Un triángulo puede medirse con diferentes pares base-altura mientras su área permanece fija, así que igualar las dos expresiones es legítimo y el álgebra aísla [[h]]. El diagrama muestra el mismo triángulo dos veces, una con base [[a]] y altura [[b]], otra con base [[c]] y altura [[h]].",
            },
            {
              "kind": "p",
              "text": "La demostración también explica por qué la altura siempre es más corta que los catetos. Como [[c]] es el lado más largo, dividir [[ab]] entre el mayor de las tres longitudes debe producir un valor menor que cualquiera de los catetos por separado. Cada fórmula posterior de esta página, desde las proyecciones hasta los triángulos semejantes, es una variación de esta única idea del área.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "El mismo triángulo rectángulo dibujado dos veces: primero con base a y altura b, luego con base c y altura h",
            "caption": "Mismo triángulo, dos pares base-altura: el área es igual a ab/2 y a ch/2, así que h es igual a ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Ejemplos Resueltos de Altura de Triángulo Rectángulo a Partir de los Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Los siete ejemplos siguientes van de las clásicas ternas de números enteros a decimales, catetos iguales y unidades mixtas. Cada uno sigue el mismo ritmo: indica lo que se da, sustituye en la fórmula, simplifica y termina con la unidad. Leerlos en orden crea el hábito de comprobar las unidades y la razonabilidad antes de confiar en cualquier respuesta.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Triángulo Clásico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dados [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es [[2.4\\text{ cm}]]. Este ejemplo de referencia vale la pena memorizarlo, ya que 3-4-5 es la terna pitagórica más común y 2.4 es un decimal ordenado.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Triángulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "La altura exacta es [[60/13]] metros, unos 4.615 m. Conserva la fracción cuando la precisión importe, ya que redondear pronto traslada el error al trabajo posterior.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Triángulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es de unos [[7.059\\text{ cm}]]. Intercambiar los catetos a 15 y 8 da el producto idéntico, lo que confirma que la fórmula trata los catetos de forma simétrica.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Catetos Iguales y el Triángulo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dados [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Los catetos iguales forman un triángulo 45-45-90, y la altura lo divide en dos mitades congruentes. La forma exacta [[5\\sqrt{2}]] cm supera al decimal en el trabajo teórico.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas Decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es [[1.2\\text{ m}]]. Los decimales no necesitan tratamiento especial: multiplica y divide como de costumbre, manteniendo la misma unidad en la respuesta.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Unidades Mixtas que Deben Coincidir Primero",
            },
            {
              "kind": "p",
              "text": "Dados [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], convierte primero a centímetros: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertir primero da un limpio [[24\\text{ cm}]]. Los metros sin convertir habrían inflado la respuesta por un factor de 100.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Triángulo Más Grande 20-21-29",
            },
            {
              "kind": "p",
              "text": "Dados [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es de unos [[14.483\\text{ ft}]], cómodamente por debajo del cateto más corto de 20 ft, como siempre ocurre con la altura sobre la hipotenusa.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Triángulo rectángulo con catetos 3 y 4, hipotenusa 5 y altura 2.4 trazada hasta la hipotenusa",
            "caption": "Un triángulo 3-4-5 dibujado a escala: la altura h es igual a (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-two-sides": {
          "h2": "Cómo Hallar la Altura Cuando Solo Se Conocen Dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora en vivo pide los tres lados, pero dos lados bastan para recuperar el tercero con el teorema de Pitágoras. Hay dos casos, según qué lados conozcas, y ambos terminan con la familiar fórmula de la altura.",
            },
            {
              "kind": "p",
              "text": "La lógica es la misma en ambos casos: el teorema de Pitágoras restaura el lado faltante y la fórmula de la altura hace el resto. El caso 1 suma los catetos bajo una raíz cuadrada para hallar la hipotenusa, mientras que el caso 2 resta para recuperar un cateto. Ten en cuenta que el caso 2 solo funciona cuando el lado conocido es realmente la hipotenusa; si [[a>c]], la raíz cuadrada da negativo y ese triángulo no existe.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: Se Conocen Ambos Catetos",
            },
            {
              "kind": "p",
              "text": "Toma [[a=7]] y [[b=24]]. Halla primero la hipotenusa: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Luego la altura sigue: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Caso 2: Se Conocen un Cateto y la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Toma [[a=8]] y [[c=10]]. Recupera el cateto faltante con el teorema de Pitágoras despejado: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Entonces la altura es: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Trátalos como alternativas educativas, ya que la calculadora espera tres medidas. Una <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> dedicada puede recuperar la longitud faltante antes de continuar aquí.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo Verificar tu Cálculo de la Altura",
          "blocks": [
            {
              "kind": "p",
              "text": "Tres comprobaciones independientes confirman una respuesta de altura. Las tres siguientes usan el triángulo 3-4-5, donde la altura es 2.4. Usa al menos una de ellas siempre que una respuesta vaya a alimentar trabajo posterior, ya que una altura errónea corrompe silenciosamente todo lo que se construya sobre ella.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comparación de Áreas",
            },
            {
              "kind": "p",
              "text": "Calcula el área de ambas formas y exige que coincidan. Con los catetos: [[[A=\\frac{3 \\times 4}{2}=6]]] Con la hipotenusa y la altura: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Las áreas coincidentes confirman la propia altura.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Proyecciones de la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Divide la hipotenusa en las proyecciones de los catetos [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] y [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. La altura es su media geométrica: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Recuperar 2.4 con una fórmula diferente es una prueba sólida.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Comprobación Pitagórica",
            },
            {
              "kind": "p",
              "text": "Confirma que los lados forman un triángulo rectángulo: [[[3^2+4^2=9+16=25=5^2]]] Esto valida las longitudes de los lados, no la altura. Ejecútala primero cuando un problema te entregue los lados, y luego usa la comprobación del área o de las proyecciones para validar la altura.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Altura a Partir de los Lados frente a Altura a Partir de las Proyecciones",
          "blocks": [
            {
              "kind": "p",
              "text": "La altura puede hallarse de dos maneras. El método de los lados de esta página es [[h=\\frac{ab}{c}]], partiendo de las tres longitudes de los lados. El método de las proyecciones es [[h=\\sqrt{pq}]], partiendo de los dos segmentos en que la altura divide la hipotenusa. Ambos describen el mismo segmento y siempre coinciden para el mismo triángulo; la elección depende de qué medidas tengas. Para la segunda ruta, consulta la página de la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de proyecciones</a>.",
            },
          ],
          "table": {
            "headers": [
              "Método",
              "Entradas necesarias",
              "Fórmula",
              "Mejor caso de uso",
            ],
            "rows": [
              [
                "Altura a partir de los lados",
                "Catetos a y b, hipotenusa c",
                "h = ab / c",
                "Se conocen las longitudes de los lados; no se necesitan raíces cuadradas",
              ],
              [
                "Altura a partir de las proyecciones",
                "Segmentos de hipotenusa p y q",
                "h = raíz cuadrada de (p por q)",
                "La base de la altura divide la hipotenusa en partes conocidas",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Triángulo rectángulo con altura h que muestra las proyecciones p y q y los dos triángulos semejantes más pequeños",
            "caption": "La altura divide la hipotenusa en p y q; la fórmula de los lados y la fórmula de las proyecciones dan la misma h.",
          },
        },
        "sec-area-rel": {
          "h2": "Relación Entre la Altura, el Área y la Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "La altura, el área y la hipotenusa se enlazan a través de dos expresiones para una misma área. Con los catetos: [[[A=\\frac{ab}{2}]]] Con la hipotenusa y la altura: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Despejar [[h]] en la segunda expresión da una útil reordenación: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Esto ofrece una segunda ruta cuando el área se conoce directamente. Para un triángulo con área [[54\\text{ cm}^2]] e hipotenusa [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], la misma respuesta que dio la fórmula de los lados para el triángulo 9-12-15. Si necesitas el área primero, una <a href=\"/right-triangle-area-calculator/\">calculadora de área</a> se encarga de ese paso, y la <a href=\"/right-triangle-area-from-altitude-calculator/\">calculadora de área a partir de la altura</a> invierte el cálculo una vez conocida [[h]].",
            },
            {
              "kind": "p",
              "text": "Esta ruta brilla cuando un problema indica el área directamente, como hacen muchas preguntas de los libros de texto, o cuando el área se calculó en una parte anterior. En lugar de buscar los catetos individuales, divides el doble del área entre la hipotenusa y terminas en una línea. Es la misma altura que da la fórmula de los lados, alcanzada desde un punto de partida diferente.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades Especiales de la Altura sobre la Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "La altura sobre la hipotenusa es siempre más corta que cualquiera de los catetos y más corta que la propia hipotenusa, ya que [[h=ab/c]] queda por debajo de [[a]] siempre que [[b<c]]. Los catetos iguales dan un triángulo simétrico 45-45-90 en el que la altura biseca la hipotenusa. Para una hipotenusa fija, la altura es máxima cuando los catetos son iguales: con hipotenusa 10, el triángulo 45-45-90 da [[h=5]] mientras que el triángulo 6-8-10 da solo 4.8.",
            },
            {
              "kind": "p",
              "text": "Ninguna división de la misma hipotenusa supera ese máximo, que es la desigualdad [[h \\le \\frac{c}{2}]], con igualdad solo en el caso 45-45-90. El escalado también se comporta de forma sencilla: duplicar cada lado duplica la altura, así que 3-4-5 con 2.4 se convierte en 6-8-10 con 4.8. Por último, la altura divide el triángulo en dos triángulos más pequeños semejantes al original, por lo que las relaciones de proyecciones y de área coinciden todas.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dos triángulos rectángulos que comparten una hipotenusa de 10: un triángulo 45-45-90 con altura 5 y un triángulo 6-8-10 con altura 4.8",
            "caption": "Misma hipotenusa 10: los catetos iguales dan la altura más alta, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Errores Comunes al Calcular la Altura de un Triángulo Rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Evita estos nueve errores y casi todos los cálculos de altura saldrán bien.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir la hipotenusa con un cateto. Solución: elige primero el lado más largo como c; en un triángulo 3-4-5, el 5 debe ser c.",
                "Multiplicar los tres lados. Calcular abc no tiene significado geométrico aquí. Solución: multiplica solo los catetos y luego divide entre la hipotenusa.",
                "Olvidar dividir entre c. Detenerse en ab deja el doble del área, no una longitud. Solución: termina siempre con la división.",
                "Mezclar unidades. Introducir a en centímetros y c en metros corrompe la división en silencio. Solución: convierte todo a una unidad primero.",
                "Usar lados que no forman un triángulo rectángulo. La fórmula supone un ángulo recto, así que 2, 3, 4 da sinsentido. Solución: comprueba primero a^2 + b^2 = c^2.",
                "Confundir la altura con uno de los catetos. Los libros de texto que piden la altura suelen querer decir la correspondiente a la hipotenusa. Solución: confirma qué altura pide la pregunta.",
                "Redondear valores intermedios demasiado pronto. Redondear 60/13 a 4.6 a mitad del cálculo introduce error. Solución: redondea solo la respuesta final.",
                "Usar mal una fórmula de área. Escribir Área = c por h sin la mitad duplica la respuesta. Solución: usa Área = ch/2 al despejar h.",
                "Confundir la altura sobre la hipotenusa con la altura relativa a un cateto. Son segmentos diferentes. Solución: la altura sobre la hipotenusa es el segmento interior más corto h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Usos Prácticos de los Cálculos de Altura de Triángulos Rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Los estudiantes se encuentran con esta altura en tareas de geometría sobre área, semejanza y media geométrica, mientras que los profesores la usan para conectar el teorema de Pitágoras con las fórmulas de área en una sola imagen, ya que un solo diagrama contiene tanto [[ab/2]] como [[ch/2]]. Los delineantes y diseñadores la usan cuando un panel triangular o un soporte debe acotarse desde su altura, y los diseños de arriostramiento triangular a veces necesitan la distancia transversal más corta entre una unión y un miembro.",
            },
            {
              "kind": "p",
              "text": "Los topógrafos que trabajan con líneas de visión de triángulo rectángulo usan la misma relación para contrastar las distancias calculadas con las medidas. Trata estos casos como modelos matemáticos con medidas idealizadas: el trabajo real de ingeniería o construcción necesita métodos de medición adecuados, supuestos de diseño declarados y normas profesionales antes de confiar en la obra en cualquier resultado de una fórmula.",
            },
            {
              "kind": "p",
              "text": "En el aula, la altura también sirve como tema puente: une el teorema de Pitágoras, las fórmulas de área y los triángulos semejantes en una sola figura. Un diagrama bien dibujado puede sostener toda una lección, por eso esta construcción aparece tan a menudo en los libros de texto.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Práctica con Soluciones",
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta cada problema por tu cuenta y luego comprueba las respuestas resueltas a continuación.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números Enteros Básicos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos de 6 cm y 8 cm e hipotenusa de 10 cm. Halla la altura sobre la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Terna Pitagórica",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos de 12 m y 16 m e hipotenusa de 20 m. Halla la altura sobre la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas Decimales",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos de 4.5 in y 6 in e hipotenusa de 7.5 in. Halla la altura sobre la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Catetos Iguales",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos catetos iguales de 14 ft cada uno. Halla la hipotenusa y luego la altura sobre la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Conversión de Unidades",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene lados de 2.4 m, 70 cm y 2.5 m. Convierte primero las unidades y luego halla la altura sobre la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los Problemas de Práctica",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. El patrón 3-4-5 escalado da un decimal limpio.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] confirma la terna, luego [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Los decimales se dividen con limpieza cuando la terna es consistente.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], luego [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], exactamente la mitad de la hipotenusa como se espera en 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. En centímetros: [[a=240]], [[b=70]], [[c=250]], y [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] cuadra. Luego [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculadoras Relacionadas de Triángulos Rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Con la fórmula de la altura en la mano, elige la siguiente herramienta según lo que conozcas. Si conoces los segmentos de la hipotenusa en lugar de los lados, dirígete a la calculadora de proyecciones. Si conoces la altura y quieres el área, la herramienta de <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">área a partir de la hipotenusa y la altura</a> invierte el cálculo de la sección del área. Las cinco calculadoras relacionadas siguientes cubren cada cálculo vecino. Empieza con la herramienta que coincida con las medidas que ya tienes, y deja que cada resultado compruebe el siguiente.",
            },
          ],
        },
      },
      "faqHeading": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula de la altura a partir de tres lados?",
          "answer": "La fórmula es [[h=\\frac{ab}{c}]], donde [[a]] y [[b]] son los dos catetos perpendiculares y [[c]] es la hipotenusa. Multiplica los catetos y luego divide entre la hipotenusa. El resultado es una longitud en la misma unidad que los lados que introdujiste.",
        },
        {
          "question": "¿Cómo se halla la altura de un triángulo rectángulo?",
          "answer": "Identifica el ángulo recto, etiqueta los dos catetos [[a]] y [[b]] y la hipotenusa [[c]], asegurándote de que todas las unidades coincidan. Luego calcula [[h=\\frac{ab}{c}]]. Para un triángulo 3-4-5 esto da [[h=\\frac{12}{5}=2.4]], un segmento más corto que cualquiera de los catetos.",
        },
        {
          "question": "¿Por qué la hipotenusa está en el denominador?",
          "answer": "Viene de la demostración del área. El área es igual a [[ab/2]] usando los catetos y a [[ch/2]] usando la hipotenusa como base. Igualar ambas da [[ab=ch]], y despejar [[h]] coloca [[c]] en el denominador. Cuanto más larga es la hipotenusa, más corta es la altura para un área dada.",
        },
        {
          "question": "¿Puedo calcular la altura con solo dos lados?",
          "answer": "Sí, con un paso extra. Si conoces ambos catetos, halla primero la hipotenusa con [[c=\\sqrt{a^2+b^2}]]. Si conoces un cateto y la hipotenusa, halla el otro cateto con [[b=\\sqrt{c^2-a^2}]]. Luego usa [[h=\\frac{ab}{c}]] como de costumbre.",
        },
        {
          "question": "¿La altura sobre la hipotenusa es lo mismo que la altura sobre un cateto?",
          "answer": "No: depende de qué base se elija. La altura suele significar la distancia perpendicular hasta una base elegida, así que la altura sobre la hipotenusa es la altura cuando la base es la hipotenusa. Si se elige un cateto como base, la altura es el otro cateto, un segmento totalmente diferente.",
        },
        {
          "question": "¿La altura es siempre más corta que los catetos?",
          "answer": "Sí, la altura sobre la hipotenusa es siempre más corta que cualquiera de los catetos del mismo triángulo. Es el segmento más corto desde el vértice del ángulo recto hasta la hipotenusa, mientras que cada cateto es un camino más largo hasta el mismo lado. También es más corta que la propia hipotenusa.",
        },
        {
          "question": "¿Puedo usar esta fórmula para cualquier triángulo?",
          "answer": "No, solo para triángulos rectángulos. La deducción depende de que los catetos sean perpendiculares, lo que da el área como [[ab/2]]. Para un triángulo acutángulo u obtusángulo, halla la altura con la fórmula general del área o con trigonometría. Confirma siempre primero el ángulo recto.",
        },
        {
          "question": "¿Qué pasa si mis lados no cumplen el teorema de Pitágoras?",
          "answer": "Entonces no forman un triángulo rectángulo y la fórmula no se aplica. Vuelve a medir los lados o revisa las etiquetas, ya que el lado más largo debe ser la hipotenusa. Pequeñas diferencias de redondeo están bien, pero una gran discrepancia significa que el triángulo no es rectángulo.",
        },
        {
          "question": "¿Cómo hallo la altura de un triángulo 3-4-5?",
          "answer": "Multiplica los catetos y divide entre la hipotenusa: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (o la unidad que usen tus lados). El triángulo 3-4-5 es el ejemplo clásico resuelto porque sus tres lados son números enteros.",
        },
        {
          "question": "¿Cuál es la altura de un triángulo 5-12-13?",
          "answer": "Es [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], en la unidad de los lados. Conserva la fracción exacta [[60/13]] cuando necesites precisión total, y redondea a 4.615 solo para la respuesta final informada.",
        },
        {
          "question": "¿Cómo se relaciona la altura con el área?",
          "answer": "El área puede escribirse de dos formas: [[A=\\frac{ab}{2}]] y [[A=\\frac{ch}{2}]]. Despejar la segunda da [[h=\\frac{2A}{c}]], así que conocer el área y la hipotenusa es otra ruta hacia la misma altura. Ambas formas describen el triángulo idéntico.",
        },
        {
          "question": "¿Cuál es la diferencia entre la altura a partir de los lados y la altura a partir de las proyecciones?",
          "answer": "La altura a partir de los lados usa [[h=\\frac{ab}{c}]] con las tres longitudes de los lados. La altura a partir de las proyecciones usa [[h=\\sqrt{pq}]] con los dos segmentos de la hipotenusa. Ambas hallan el mismo segmento; la elección depende de qué medidas tengas.",
        },
      ],
      "relatedHeading": "Explorar Calculadoras Relacionadas de Triángulos Rectángulos",
      "relatedIntro": "Elige la calculadora que coincida con las medidas que ya tienes.",
      "relatedItems": [
        "Calculadora de Altura de Triángulo Rectángulo",
        "Calculadora de Altura de Triángulo Rectángulo a Partir de Proyecciones",
        "Calculadora de Proyección de Triángulo Rectángulo",
        "Calculadora de Área de Triángulo Rectángulo",
        "Calculadora de Área de Triángulo Rectángulo a Partir de la Altura",
      ],
    },
};
