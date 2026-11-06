// thirty6090GuideTranslations.bes.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de Triángulo 30-60-90: Lados, Área y Perímetro",
        "description": "Usa la calculadora de triángulo 30-60-90 para hallar el cateto corto, el cateto largo, la hipotenusa, el área y el perímetro a partir de un lado conocido con la razón 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-intro": "Calculadora de Triángulo 30-60-90",
        "sec-calculate": "Calcular los Lados, el Área y el Perímetro que Faltan",
        "sec-what": "¿Qué Es un Triángulo 30-60-90?",
        "sec-sides": "El Cateto Corto, el Cateto Largo y la Hipotenusa",
        "sec-ratio": "La Razón de Lados del Triángulo 30-60-90",
        "sec-why-sqrt3": "¿Por Qué Aparece la Raíz Cuadrada de 3?",
        "sec-long-leg": "Fórmula para Hallar el Cateto Largo a Partir del Cateto Corto",
        "sec-hypotenuse": "Fórmula para Hallar la Hipotenusa a Partir del Cateto Corto",
        "sec-short-leg-hyp": "Fórmula para Hallar el Cateto Corto a Partir de la Hipotenusa",
        "sec-short-leg-long": "Fórmula para Hallar el Cateto Corto a Partir del Cateto Largo",
        "sec-long-leg-hyp": "Fórmula para Hallar el Cateto Largo a Partir de la Hipotenusa",
        "sec-area": "Cómo Calcular el Área de un Triángulo 30-60-90",
        "sec-perimeter": "Cómo Calcular el Perímetro de un Triángulo 30-60-90",
        "sec-step-example": "Ejemplo Paso a Paso para Resolver un Triángulo 30-60-90",
        "sec-examples": "Ejemplos Resueltos de Cálculos con Triángulos 30-60-90",
        "sec-derive-pythagoras": "Cómo Deducir la Razón del Triángulo 30-60-90 con Pitágoras",
        "sec-equilateral": "Relación Entre los Triángulos 30-60-90 y los Triángulos Equiláteros",
        "sec-trig": "Relaciones Trigonométricas en un Triángulo 30-60-90",
        "sec-verify": "Cómo Verificar los Cálculos de un Triángulo 30-60-90",
        "sec-properties": "Propiedades Importantes de los Triángulos 30-60-90",
        "sec-mistakes": "Errores Comunes al Resolver Triángulos 30-60-90",
        "sec-applications": "Aplicaciones Prácticas de los Triángulos 30-60-90",
        "sec-practice": "Problemas de Práctica con Respuestas",
        "sec-related": "Explora las Calculadoras Relacionadas de Triángulos Rectángulos",
        "sec-faq": "Preguntas Frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Halla todos los lados que faltan, el área y el perímetro de un triángulo 30-60-90 a partir de un solo lado conocido.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 es un triángulo rectángulo cuyos tres ángulos miden 30°, 60° y 90°. Se llama triángulo rectángulo especial porque las longitudes de sus lados siempre siguen la misma razón fija, sin importar lo grande o pequeño que sea el triángulo. La calculadora de triángulo 30-60-90 de esta página usa esa razón para hallar el cateto corto, el cateto largo, la hipotenusa, el área y el perímetro a partir de una longitud de lado que tú introduces.",
            },
            {
              "kind": "p",
              "text": "En el triángulo ABC, el ángulo A mide 30°, el ángulo B mide 60° y el ángulo C mide 90°. El lado BC es el cateto corto [[a]], opuesto al ángulo de 30°. El lado AC es el cateto largo [[b]], opuesto al ángulo de 60°. El lado AB es la hipotenusa [[c]], opuesta al ángulo de 90°. Los tres lados siempre cumplen [[a : b : c = 1 : \\sqrt{3} : 2]], lo que significa que [[b = a\\sqrt{3}]] y [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Si [[a = 5]] cm, entonces [[b = 5\\sqrt{3} \\approx 8.660]] cm y [[c = 2 \\times 5 = 10]] cm. La calculadora también puede hallar el área y el perímetro a partir del mismo cateto corto, así que una sola medida basta para describir todo el triángulo. Las secciones siguientes explican la razón, los siete modos de la calculadora y las fórmulas, con ejemplos resueltos en cada paso.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular los Lados, el Área y el Perímetro que Faltan",
          "blocks": [
            {
              "kind": "p",
              "text": "Siete modos cubren todas las formas de empezar a partir de un lado conocido.",
            },
            {
              "kind": "p",
              "text": "La calculadora de esta página tiene siete modos, uno por cada medida que puede hallar. Elige el modo que coincida con el lado que conoces y la medida que necesitas. Cada modo pide una sola entrada, porque la razón fija completa todo lo demás. La tabla siguiente enumera los siete modos con la entrada que necesita cada uno y el resultado que devuelve.",
            },
            {
              "kind": "p",
              "text": "Para usar un modo, primero averigua qué lado conoces. El lado opuesto al ángulo de 30° es el cateto corto [[a]], el lado opuesto al ángulo de 60° es el cateto largo [[b]] y el lado opuesto al ángulo de 90° es la hipotenusa [[c]]. Introduce esa medida como un número positivo, elige una unidad y haz clic en el botón Calcular. El resultado aparece con el procedimiento paso a paso, para que puedas ver la fórmula y la sustitución, no solo la respuesta. Usa Restablecer para borrar los campos antes de empezar un problema nuevo.",
            },
            {
              "kind": "p",
              "text": "Los distintos modos necesitan fórmulas distintas porque cada uno parte de un lado conocido diferente. Hallar el cateto largo a partir del cateto corto multiplica por √3, mientras que hallar el cateto corto a partir de la hipotenusa divide entre 2. Los modos de área y perímetro parten del cateto corto y calculan primero los demás lados internamente, y luego aplican la fórmula del área o del perímetro. Nunca necesitas hallar los lados que faltan por tu cuenta antes de usar esos dos modos.",
            },
          ],
          "table": {
            "headers": [
              "Modo de la calculadora",
              "Entrada necesaria",
              "Resultado",
            ],
            "rows": [
              [
                "Cateto largo a partir del cateto corto",
                "Cateto corto a",
                "Cateto largo b",
              ],
              [
                "Hipotenusa a partir del cateto corto",
                "Cateto corto a",
                "Hipotenusa c",
              ],
              [
                "Cateto corto a partir de la hipotenusa",
                "Hipotenusa c",
                "Cateto corto a",
              ],
              [
                "Cateto corto a partir del cateto largo",
                "Cateto largo b",
                "Cateto corto a",
              ],
              [
                "Cateto largo a partir de la hipotenusa",
                "Hipotenusa c",
                "Cateto largo b",
              ],
              [
                "Área a partir del cateto corto",
                "Cateto corto a",
                "Área A",
              ],
              [
                "Perímetro a partir del cateto corto",
                "Cateto corto a",
                "Perímetro P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Resumen de los siete modos de la calculadora 30-60-90 que muestra la entrada conocida y el resultado calculado de cada modo",
            "caption": "Siete modos: cada uno parte de un solo lado conocido y halla una medida que falta.",
          },
        },
        "sec-what": {
          "h2": "¿Qué Es un Triángulo 30-60-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 recibe su nombre por sus tres ángulos.",
            },
            {
              "kind": "p",
              "text": "Es un triángulo rectángulo, lo que significa que uno de sus ángulos mide exactamente 90°. Los otros dos ángulos miden 30° y 60°, y el nombre enumera los tres en orden. Como el ángulo recto es fijo y los otros dos ángulos también son fijos, la forma del triángulo queda totalmente determinada: todos los triángulos 30-60-90 tienen la misma forma, y dos de ellos se diferencian solo en el tamaño.",
            },
            {
              "kind": "p",
              "text": "Se llama triángulo rectángulo especial porque las longitudes de sus lados siguen una razón fija. En la mayoría de los triángulos rectángulos, conocer un lado no te dice nada sobre los demás. En un triángulo 30-60-90, conocer un lado te dice todos, porque la razón [[1 : \\sqrt{3} : 2]] une los tres lados. Por eso la calculadora puede hallar cinco medidas a partir de una sola entrada.",
            },
            {
              "kind": "p",
              "text": "Los tres ángulos suman 180°, como deben hacerlo en todo triángulo: [[30° + 60° + 90° = 180°]]. El triángulo puede ser tan pequeño como unos pocos milímetros o tan grande como una parcela de construcción, y los ángulos se mantienen iguales mientras los lados crecen juntos. La razón también se mantiene, así que un triángulo con cateto corto de 5 cm y un triángulo con cateto corto de 5 m tienen la misma forma a distinto tamaño.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Triángulo 30-60-90 ABC rotulado con ángulos de 30, 60 y 90 grados, cateto corto a, cateto largo a por raíz cuadrada de 3 e hipotenusa 2a",
            "caption": "Triángulo ABC: ángulos de 30°, 60° y 90°, con lados a, a√3 y 2a.",
          },
        },
        "sec-sides": {
          "h2": "El Cateto Corto, el Cateto Largo y la Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Los tres lados toman su nombre de los ángulos opuestos a ellos.",
            },
            {
              "kind": "p",
              "text": "El cateto corto [[a]] es el lado opuesto al ángulo de 30°. Es el lado más corto del triángulo, porque el ángulo más pequeño siempre está opuesto al lado más corto. En el triángulo ABC es el lado BC. El cateto corto es el punto de partida natural de la mayoría de los cálculos, porque los otros dos lados son múltiplos simples de él: el cateto largo es [[a\\sqrt{3}]] y la hipotenusa es [[2a]].",
            },
            {
              "kind": "p",
              "text": "El cateto largo [[b]] es el lado opuesto al ángulo de 60°. Es más largo que el cateto corto y más corto que la hipotenusa. En el triángulo ABC es el lado AC. Su longitud es [[\\sqrt{3} \\approx 1.732]] veces el cateto corto, así que es poco menos del doble de largo. La hipotenusa [[c]] es el lado opuesto al ángulo de 90°, el lado AB, y es el lado más largo del triángulo, exactamente el doble del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Identificar los lados por sus ángulos opuestos es más fiable que juzgar por cómo está dibujado el diagrama. Un triángulo puede girarse o voltearse, así que el cateto corto puede aparecer a la izquierda, a la derecha o abajo. La regla del ángulo opuesto nunca cambia: busca el ángulo de 30°, y el lado de enfrente es el cateto corto. Busca el ángulo de 90°, marcado con un cuadrado pequeño, y el lado de enfrente es la hipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lado",
              "Ángulo opuesto",
              "Tamaño",
            ],
            "rows": [
              [
                "Cateto corto a",
                "30°",
                "El más pequeño",
              ],
              [
                "Cateto largo b",
                "60°",
                "Intermedio",
              ],
              [
                "Hipotenusa c",
                "90°",
                "El más largo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "La Razón de Lados del Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón 1:√3:2 fija cada triángulo 30-60-90.",
            },
            {
              "kind": "p",
              "text": "La razón de lados de un triángulo 30-60-90 es:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte de la razón describe un lado. El cateto corto representa una unidad, el cateto largo representa √3 unidades y la hipotenusa representa dos unidades. Escritos con el cateto corto como [[a]], los tres lados son [[a = a]], [[b = a\\sqrt{3}]] y [[c = 2a]]. Si el cateto corto mide 1 cm, el cateto largo mide √3 cm y la hipotenusa mide 2 cm. Si el cateto corto mide 10 cm, el cateto largo mide [[10\\sqrt{3}]] cm y la hipotenusa mide 20 cm.",
            },
            {
              "kind": "p",
              "text": "La razón se mantiene igual sin importar el tamaño del triángulo, porque todos los triángulos 30-60-90 son semejantes. Ampliar o reducir un triángulo multiplica todos los lados por el mismo factor, así que las proporciones entre los lados no cambian. Toma [[a = 4]] cm como ejemplo: el cateto largo es [[b = 4\\sqrt{3} \\approx 6.928]] cm y la hipotenusa es [[c = 8]] cm, y la razón [[4 : 6.928 : 8]] es la misma que [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Mantén la forma radical exacta siempre que puedas. √3 es aproximadamente 1.732, pero es un número irracional, así que ningún decimal es exactamente igual a él. Escribir [[4\\sqrt{3}]] cm es exacto, mientras que 6.928 cm es una aproximación redondeada. Usa la forma exacta en tu procedimiento y en las respuestas finales cuando la pregunta pida un valor exacto, y da el decimal solo cuando se necesite una respuesta aproximada.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Tres barras que comparan el cateto corto, el cateto largo y la hipotenusa en la razón 1 a raíz cuadrada de 3 a 2",
            "caption": "La razón fija 1:√3:2 compara el cateto corto, el cateto largo y la hipotenusa.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "¿Por Qué Aparece la Raíz Cuadrada de 3?",
          "blocks": [
            {
              "kind": "p",
              "text": "La raíz cuadrada de 3 surge al cortar un triángulo equilátero por la mitad.",
            },
            {
              "kind": "p",
              "text": "Empieza con un triángulo equilátero cuyo lado mide [[2a]]. Los tres lados son iguales y los tres ángulos miden 60°. Ahora traza una altura desde un vértice hasta el lado opuesto. La altura es la línea desde el vértice que se encuentra con el lado opuesto formando un ángulo recto.",
            },
            {
              "kind": "p",
              "text": "La altura divide la base en dos partes iguales, partiéndola en dos segmentos iguales de longitud [[a]]. También divide el triángulo equilátero en dos triángulos rectángulos congruentes. Cada triángulo pequeño tiene ángulos de 30°, 60° y 90°: el ángulo de 60° sobrevive en la base, la altura crea un ángulo de 90° donde se encuentra con la base, y el ángulo de 60° de la parte superior se divide en dos ángulos de 30°. La hipotenusa de cada triángulo pequeño es el lado del triángulo equilátero, [[2a]], y el cateto corto es la mitad de la base, [[a]].",
            },
            {
              "kind": "p",
              "text": "El cateto que queda del triángulo pequeño es la propia altura. Llámala [[b]] y aplica el teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "El 3 dentro de la raíz cuadrada viene de [[4a^2 - a^2 = 3a^2]], la diferencia entre el cuadrado de la hipotenusa y el cuadrado del cateto corto. Esa es toda la razón por la que √3 aparece en cada fórmula 30-60-90: el cateto largo es la altura de un triángulo equilátero, y Pitágoras obliga a que sea [[a\\sqrt{3}]]. La deducción también demuestra la razón de lados, porque los tres lados del triángulo pequeño son ahora [[a]], [[a\\sqrt{3}]] y [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Triángulo equilátero de lado 2a dividido por una altura en dos triángulos 30-60-90 congruentes con altura a por raíz cuadrada de 3",
            "caption": "Una altura divide un triángulo equilátero de lado 2a en dos triángulos 30-60-90.",
          },
        },
        "sec-long-leg": {
          "h2": "Fórmula para Hallar el Cateto Largo a Partir del Cateto Corto",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplica el cateto corto por √3 para obtener el cateto largo.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[b]] es el cateto largo y [[a]] es el cateto corto. La fórmula es una lectura directa de la razón de lados: el cateto largo representa √3 unidades por cada 1 unidad de cateto corto, así que el cateto largo es √3 veces el cateto corto. La multiplicación es necesaria porque la razón es una relación de escala, y √3 aparece porque el cateto largo es la altura del triángulo equilátero que genera este triángulo.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm como ejemplo:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es mayor que el cateto corto, como debe ser: √3 es aproximadamente 1.732, así que multiplicar por él aumenta la longitud. La respuesta exacta es [[5\\sqrt{3}]] cm, y 8.660 cm es la aproximación decimal. Mantén la forma exacta cuando la pregunta la pida, y redondea el decimal solo al final de tu procedimiento, nunca en medio.",
            },
            {
              "kind": "p",
              "text": "Usa este modo siempre que el cateto corto sea el lado conocido y el cateto largo sea el desconocido. En un problema de libro de texto, el cateto corto suele ser el lado opuesto al ángulo de 30°, así que comprueba el ángulo antes de multiplicar. Una comprobación rápida de sentido ayuda: el cateto largo debe salir poco menos del doble del cateto corto, ya que √3 es poco menos que 2. Si tu respuesta es más del doble del cateto corto, has multiplicado por el número equivocado.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Triángulo 30-60-90 con cateto corto de 5 cm y cateto largo rotulado como 5 por raíz cuadrada de 3, aproximadamente 8.660 cm",
            "caption": "Cateto largo a partir del cateto corto: a = 5 cm da b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para Hallar la Hipotenusa a Partir del Cateto Corto",
          "blocks": [
            {
              "kind": "p",
              "text": "Duplica el cateto corto para obtener la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[c]] es la hipotenusa y [[a]] es el cateto corto. La hipotenusa es siempre exactamente el doble del cateto corto, sin ninguna raíz cuadrada. Es la más simple de las fórmulas 30-60-90, y también la más útil para comprobaciones mentales rápidas.",
            },
            {
              "kind": "p",
              "text": "La razón se remonta al triángulo equilátero. La hipotenusa del triángulo 30-60-90 es un lado completo del triángulo equilátero, mientras que el cateto corto es la mitad de un lado, porque la altura divide la base en dos partes iguales. Un lado completo es el doble de medio lado, así que la hipotenusa es el doble del cateto corto. Usa [[a = 7]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La respuesta es exacta, sin redondeo, porque duplicar un número entero da un número entero. Si el cateto corto es un decimal, la hipotenusa sigue siendo exactamente el doble, así que [[a = 2.5]] cm da [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Este es el modo a elegir cuando un problema da el cateto corto y pide el lado más largo. Como la respuesta es una duplicación simple, también es la forma más rápida de detectar un cateto corto equivocado: si la hipotenusa del problema no es el doble de tu cateto corto, o el cateto corto está mal o el triángulo no es un triángulo 30-60-90. Comprueba los ángulos antes de confiar en la duplicación.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Triángulo 30-60-90 con cateto corto de 5 cm e hipotenusa rotulada como 2a igual a 10 cm",
            "caption": "Hipotenusa a partir del cateto corto: c = 2a, así que a = 5 cm da c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Fórmula para Hallar el Cateto Corto a Partir de la Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Divide la hipotenusa entre dos para obtener el cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[a]] es el cateto corto y [[c]] es la hipotenusa. Esta fórmula es la inversa de [[c = 2a]]: como la hipotenusa es el doble del cateto corto, el cateto corto es la mitad de la hipotenusa. Reordenar [[c = 2a]] dividiendo ambos lados entre 2 da [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 18]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La respuesta es exacta, sin raíz cuadrada y sin redondeo. Esta relación se aplica específicamente a los triángulos 30-60-90. En un triángulo rectángulo general, la hipotenusa no es el doble del cateto corto, así que no uses esta fórmula a menos que sepas que los ángulos son 30°, 60° y 90°. Si la hipotenusa es un número impar, el cateto corto es un valor con mitad, por ejemplo [[c = 15]] cm da [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Este modo es el punto de partida de la mayoría de los problemas que dan la hipotenusa. Una vez conocido el cateto corto, el cateto largo se obtiene con [[b = a\\sqrt{3}]] y el área y el perímetro se obtienen con sus propias fórmulas. Una respuesta con mitad es normal aquí y no es señal de un error, así que no redondees 7.5 cm a 8 cm: la mitad exacta es la respuesta correcta.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Fórmula para Hallar el Cateto Corto a Partir del Cateto Largo",
          "blocks": [
            {
              "kind": "p",
              "text": "Divide el cateto largo entre √3 para obtener el cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[a]] es el cateto corto y [[b]] es el cateto largo. Esta fórmula surge de reordenar [[b = a\\sqrt{3}]]: dividir ambos lados entre √3 aísla [[a]]. Dividir entre √3 invierte la multiplicación original, así que deshace exactamente lo que hizo la fórmula directa.",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Racionaliza el denominador multiplicando la parte superior e inferior por √3: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, que es aproximadamente 6.928 cm. La respuesta exacta es [[4\\sqrt{3}]] cm, y 6.928 cm es la forma decimal. El cateto corto es menor que el cateto largo, como debe ser, ya que dividir entre un número mayor que 1 reduce el valor.",
            },
            {
              "kind": "p",
              "text": "Racionalizar vale la pena porque deja la respuesta en la forma exacta estándar, un número entero por √3. Una aproximación decimal oculta esa estructura, y una fracción sin racionalizar con √3 en el denominador no es la forma que esperan las respuestas de examen. Cuando el cateto largo ya es un múltiplo de √3, la división es limpia: [[b = 9\\sqrt{3}]] cm da [[a = 9]] cm directamente.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Fórmula para Hallar el Cateto Largo a Partir de la Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplica la mitad de la hipotenusa por √3 para obtener el cateto largo.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[b]] es el cateto largo y [[c]] es la hipotenusa. Esta fórmula se construye en dos pasos. Primero halla el cateto corto con [[a = \\frac{c}{2}]], y luego halla el cateto largo con [[b = a\\sqrt{3}]]. Sustituir la primera fórmula en la segunda da [[b = \\frac{c}{2}\\sqrt{3}]], que es lo mismo que [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 16]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "El resultado está entre el cateto corto y la hipotenusa, como debería. El cateto corto aquí es [[a = 8]] cm, el cateto largo es aproximadamente 13.856 cm y la hipotenusa es 16 cm, así que [[8 < 13.856 < 16]]. Ese orden es una comprobación rápida de cualquier respuesta de esta fórmula.",
            },
            {
              "kind": "p",
              "text": "Hacer el cálculo en dos pasos es un buen hábito aunque la fórmula única haga las dos cosas a la vez. Halla primero el cateto corto, [[a = \\frac{c}{2} = 8]] cm, y luego multiplica por √3. Si la ruta en dos pasos y la fórmula única no coinciden, el error está en la aritmética, no en la fórmula, y la ruta en dos pasos muestra exactamente dónde ocurrió.",
            },
          ],
        },
        "sec-area": {
          "h2": "Cómo Calcular el Área de un Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El área solo necesita el cateto corto, porque el cateto largo se obtiene a partir de él.",
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
              "text": "Como [[b = a\\sqrt{3}]], sustituye para obtener el área solo a partir del cateto corto:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La división entre dos es necesaria porque un triángulo cubre la mitad del rectángulo formado por sus dos catetos. El área final se expresa en unidades cuadradas, como centímetros cuadrados, porque el área mide superficie, no longitud. Usa [[a = 6]] cm. Primero halla el cateto largo, [[b = 6\\sqrt{3}]] cm, y luego calcula:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "El modo de área de la calculadora acepta el cateto corto y calcula el cateto largo internamente, así que introduces solo [[a]] y la calculadora hace el resto. Si conoces el cateto largo en lugar del cateto corto, usa la <a href=\"/right-triangle-area-calculator/\">calculadora de área de triángulo rectángulo</a>, que acepta ambos catetos directamente.",
            },
            {
              "kind": "p",
              "text": "El área crece con el cuadrado del cateto corto, así que duplicar el cateto corto cuadruplica el área. Un triángulo con [[a = 12]] cm tiene cuatro veces el área del triángulo con [[a = 6]] cm, aproximadamente 124.708 cm², no el doble. Esa relación cuadrática es fácil de olvidar, así que compruébala siempre que un problema amplíe o reduzca un triángulo.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Triángulo 30-60-90 con cateto corto de 6 cm y cateto largo de 6 por raíz cuadrada de 3 cm como base y altura, área de 18 por raíz cuadrada de 3 cm cuadrados",
            "caption": "Área a partir del cateto corto: a = 6 cm da A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Cómo Calcular el Perímetro de un Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Suma los tres lados y luego saca el cateto corto como factor común.",
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
              "text": "Sustituye las relaciones especiales del triángulo, [[b = a\\sqrt{3}]] y [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Combina los términos semejantes para obtener la forma simplificada:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Los tres lados están incluidos, porque el perímetro recorre todo el contorno del triángulo: baja por el cateto corto, cruza el cateto largo y regresa por la hipotenusa. Dejar fuera cualquier lado da una distancia más corta que no es el perímetro. El perímetro es una medida lineal, no una medida de área, así que la respuesta está en unidades simples como centímetros, nunca en centímetros cuadrados.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La forma exacta es [[5(3 + \\sqrt{3})]] cm, y 23.660 cm es la forma decimal. El modo de perímetro de la calculadora acepta el cateto corto y suma los tres lados internamente. Si ya conoces los tres lados, la <a href=\"/right-triangle-perimeter-calculator/\">calculadora de perímetro de triángulo rectángulo</a> los suma directamente.",
            },
            {
              "kind": "p",
              "text": "El perímetro crece en proporción directa al cateto corto, así que duplicar el cateto corto duplica el perímetro. Un triángulo con [[a = 10]] cm tiene un perímetro de aproximadamente 47.321 cm, exactamente el doble de los 23.660 cm del triángulo con [[a = 5]] cm. Esa escala lineal es una comprobación útil: si duplicar el cateto corto no duplica tu perímetro, la aritmética salió mal en algún punto.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Triángulo 30-60-90 con los tres lados rotulados como 5 cm, 5 por raíz cuadrada de 3 cm y 10 cm, perímetro de aproximadamente 23.660 cm",
            "caption": "Perímetro a partir del cateto corto: a = 5 cm da P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Ejemplo Paso a Paso para Resolver un Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo, a = 5 cm, resuelto de principio a fin.",
            },
            {
              "kind": "p",
              "text": "Empieza con el cateto corto [[a = 5]] cm y halla todas las demás medidas del triángulo, una fórmula a la vez. Cada paso usa una fórmula de las secciones anteriores, y la tabla resumen al final recoge los resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Halla el cateto largo: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Halla la hipotenusa: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Halla el área: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] centímetros cuadrados.",
                "Halla el perímetro: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Las cuatro medidas describen el mismo triángulo. Los lados [[5]], [[8.660]] y [[10]] cumplen la razón [[1 : \\sqrt{3} : 2]] y el teorema de Pitágoras, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. El área y el perímetro son dos tipos distintos de medida de ese mismo triángulo: el área cubre su superficie, mientras que el perímetro recorre su contorno.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Valor exacto",
              "Valor aproximado",
            ],
            "rows": [
              [
                "Cateto corto a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto largo b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hipotenusa c",
                "10 cm",
                "10 cm",
              ],
              [
                "Área A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Perímetro P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Ejemplos Resueltos de Cálculos con Triángulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho ejemplos resueltos, uno por cada modo de la calculadora más un caso mayor.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Hallar el Cateto Largo",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 4]] cm. Fórmula: [[b = a\\sqrt{3}]]. Sustitución: [[b = 4\\sqrt{3}]]. Resultado: [[b \\approx 6.928]] cm. El cateto largo es aproximadamente 1.732 veces el cateto corto, así que 4 cm se convierte en unos 6.928 cm. La respuesta exacta es [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Hallar la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 9]] cm. Fórmula: [[c = 2a]]. Sustitución: [[c = 2 \\times 9]]. Resultado: [[c = 18]] cm. La hipotenusa es exactamente el doble del cateto corto, así que la respuesta no necesita redondeo. Esta es la comprobación más rápida de todo el tema: cualquier hipotenusa que no sea el doble del cateto corto indica un error.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Hallar el Cateto Corto a Partir de la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 20]] cm. Fórmula: [[a = \\frac{c}{2}]]. Sustitución: [[a = \\frac{20}{2}]]. Resultado: [[a = 10]] cm. Dividir la hipotenusa entre dos invierte la duplicación del Ejemplo 2. El cateto corto es exactamente la mitad de la hipotenusa, así que la respuesta es exacta.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Hallar el Cateto Corto a Partir del Cateto Largo",
            },
            {
              "kind": "p",
              "text": "Dado [[b = 15]] cm. Fórmula: [[a = \\frac{b}{\\sqrt{3}}]]. Sustitución: [[a = \\frac{15}{\\sqrt{3}}]]. Racionalizar da [[a = 5\\sqrt{3}]] cm, así que el resultado es [[a \\approx 8.660]] cm. Dividir entre √3 reduce el cateto largo de vuelta al cateto corto, que es lo inverso de multiplicar por √3.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Hallar el Cateto Largo a Partir de la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 12]] cm. Fórmula: [[b = \\frac{c\\sqrt{3}}{2}]]. Sustitución: [[b = \\frac{12\\sqrt{3}}{2}]]. Resultado: [[b = 6\\sqrt{3} \\approx 10.392]] cm. El cateto largo está entre el cateto corto, [[a = 6]] cm, y la hipotenusa, 12 cm, lo que confirma el orden [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Calcular el Área",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 8]] cm. Fórmula: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Sustitución: [[A = \\frac{64\\sqrt{3}}{2}]]. Resultado: [[A = 32\\sqrt{3} \\approx 55.426]] centímetros cuadrados. La respuesta exacta es [[32\\sqrt{3}]] cm², y el decimal está redondeado a tres cifras. El área está en unidades cuadradas, a diferencia de las longitudes de los lados.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Calcular el Perímetro",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 3]] cm. Fórmula: [[P = a(3 + \\sqrt{3})]]. Sustitución: [[P = 3(3 + \\sqrt{3})]]. Resultado: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Sumar los lados uno por uno da el mismo resultado: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. El perímetro está en unidades simples, no en unidades cuadradas.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Medidas Mayores",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 10]] m. Fórmula: [[b = a\\sqrt{3}]] y [[c = 2a]]. Sustitución: [[b = 10\\sqrt{3}]] m y [[c = 2 \\times 10]] m. Resultado: [[b \\approx 17.321]] m y [[c = 20]] m. La razón funciona a cualquier escala: este triángulo es el triángulo con [[a = 5]] cm duplicado, así que cada lado mide el doble y la razón [[1 : \\sqrt{3} : 2]] no cambia.",
            },
            {
              "kind": "p",
              "text": "Las respuestas exactas y las aproximaciones decimales sirven para fines distintos. La forma exacta, como [[4\\sqrt{3}]] cm, es precisa y es lo que suelen exigir las respuestas de examen. La forma decimal, como 6.928 cm, es más fácil de imaginar y de medir con una regla. Da primero la forma exacta y luego el decimal, y redondea el decimal solo en el paso final.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Cómo Deducir la Razón del Triángulo 30-60-90 con Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón se deduce de Pitágoras más un hecho: la hipotenusa es el doble del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Sea [[a]] el cateto corto, [[b]] el cateto largo y [[c]] la hipotenusa. Por la construcción del triángulo equilátero, la hipotenusa es el doble del cateto corto:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Ahora aplica el teorema de Pitágoras, que vale para todo triángulo rectángulo:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Reordena restando [[a^2]] de ambos lados:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Saca la raíz cuadrada de ambos lados. Las longitudes son positivas, así que la raíz negativa se descarta:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Los tres lados son ahora [[a]], [[a\\sqrt{3}]] y [[2a]], lo que da la razón [[a : b : c = 1 : \\sqrt{3} : 2]]. Cada fórmula de longitud de lado de esta página procede de esta relación fija: la fórmula del cateto largo la lee directamente, la fórmula de la hipotenusa es el hecho inicial, y las fórmulas del área y del perímetro sustituyen las dos expresiones de los lados. La <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> comprueba la misma relación para cualquier triángulo rectángulo.",
            },
            {
              "kind": "p",
              "text": "La demostración solo necesita dos ingredientes, y ambos son fáciles de enunciar. El primero es el hecho [[c = 2a]], que procede del triángulo equilátero. El segundo es el teorema de Pitágoras, que vale para todo triángulo rectángulo. No se supone nada más, así que la demostración muestra que la razón está forzada solo por esos dos hechos, no por un caso especial ni por una coincidencia.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Relación Entre los Triángulos 30-60-90 y los Triángulos Equiláteros",
          "blocks": [
            {
              "kind": "p",
              "text": "Todo triángulo 30-60-90 es la mitad de un triángulo equilátero.",
            },
            {
              "kind": "p",
              "text": "Un triángulo equilátero tiene tres lados iguales y tres ángulos iguales de 60°. Traza una altura desde un vértice hasta el lado opuesto, y la altura divide la base en dos mitades iguales. También divide el ángulo de 60° del vértice superior en dos ángulos de 30°. El resultado son dos triángulos rectángulos congruentes, cada uno con ángulos de 30°, 60° y 90°.",
            },
            {
              "kind": "p",
              "text": "Cada mitad conserva un lado completo del triángulo equilátero como su hipotenusa, toma medio lado como su cateto corto y usa la altura como su cateto largo. Por eso la hipotenusa es el doble del cateto corto y el cateto largo es [[a\\sqrt{3}]]. La relación con √3 aparece porque la altura de un triángulo equilátero es siempre [[\\frac{\\sqrt{3}}{2}]] veces la longitud del lado, que es el mismo hecho escrito con otras letras.",
            },
            {
              "kind": "p",
              "text": "Esta construcción es útil en geometría y trigonometría porque convierte el triángulo equilátero en una fuente de valores exactos. La altura de un triángulo equilátero de lado 10 cm es [[5\\sqrt{3} \\approx 8.660]] cm, hallada al tratar la mitad de él como un triángulo 30-60-90 con cateto corto de 5 cm. La misma construcción da los valores exactos de seno, coseno y tangente para 30° y 60°, por lo que esos valores aparecen en todas las tablas de trigonometría.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Relaciones Trigonométricas en un Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón fija da valores exactos de seno, coseno y tangente para 30° y 60°.",
            },
            {
              "kind": "p",
              "text": "Las razones trigonométricas comparan lados de un triángulo rectángulo. El seno es el lado opuesto sobre la hipotenusa, el coseno es el lado adyacente sobre la hipotenusa y la tangente es el lado opuesto sobre el adyacente. Como los lados de un triángulo 30-60-90 siempre están en la razón [[1 : \\sqrt{3} : 2]], esas comparaciones siempre dan los mismos valores, cualquiera que sea el tamaño del triángulo.",
            },
            {
              "kind": "p",
              "text": "Para el ángulo de 30°, el lado opuesto es el cateto corto [[a]] y el lado adyacente es el cateto largo [[b]], así que [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] y [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Para el ángulo de 60°, los lados opuesto y adyacente se intercambian, así que [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] y [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Fíjate en la simetría: [[\\sin 30° = \\cos 60°]] y [[\\cos 30° = \\sin 60°]], porque los dos ángulos agudos son complementarios y suman 90°. Estos valores coinciden con la razón fija de lados exactamente, lo que es una buena comprobación cruzada: si un valor de seno no coincide con la razón, uno de los dos está mal. Toma esta sección como contexto: la calculadora de esta página halla lados, área y perímetro, y no calcula funciones trigonométricas como modo.",
            },
          ],
          "table": {
            "headers": [
              "Ángulo",
              "sen",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "Cómo Verificar los Cálculos de un Triángulo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones rápidas detectan casi todos los errores.",
            },
            {
              "kind": "p",
              "text": "Haz al menos una comprobación en cada respuesta, y las cuatro cuando el problema importa. El ejemplo siguiente usa en todo momento el triángulo con [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm y [[c = 10]] cm.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Razón de Lados",
            },
            {
              "kind": "p",
              "text": "Divide el cateto largo entre el cateto corto y la hipotenusa entre el cateto corto: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] y [[\\frac{c}{a} = 2]]. Aquí [[\\frac{8.660}{5} \\approx 1.732]] y [[\\frac{10}{5} = 2]], así que la razón se cumple. Si alguna división da un valor distinto, uno de los lados está mal.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirma [[a^2 + b^2 = c^2]]. Aquí [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], así que el teorema se cumple. Esta comprobación detecta catetos intercambiados, porque usar el valor equivocado de [[b]] rompe la igualdad. La <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> ejecuta esta comprobación para cualquier terna de longitudes de lado.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Suma de Ángulos",
            },
            {
              "kind": "p",
              "text": "Confirma [[30° + 60° + 90° = 180°]]. Esta comprobación trata de la configuración del problema más que de la aritmética: si los ángulos de tu triángulo no suman 180°, o si no son 30°, 60° y 90°, las fórmulas 30-60-90 no se aplican en absoluto, y ninguna longitud de lado obtenida con ellas puede ser fiable.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Orden de los Lados",
            },
            {
              "kind": "p",
              "text": "Confirma [[a < b < c]]. Aquí [[5 < 8.660 < 10]], así que el orden se cumple. El cateto corto debe ser el lado más pequeño, el cateto largo debe estar en el medio y la hipotenusa debe ser el lado más largo. Cualquier respuesta que rompa este orden, como un cateto largo mayor que la hipotenusa, es incorrecta a simple vista.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades Importantes de los Triángulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Diez propiedades se deducen de la razón fija.",
            },
            {
              "kind": "list",
              "items": [
                "El triángulo siempre tiene ángulos de 30°, 60° y 90°, y esos ángulos siempre suman 180°.",
                "El cateto corto es opuesto al ángulo de 30°, y es el lado más pequeño del triángulo.",
                "El cateto largo es opuesto al ángulo de 60°, y su longitud está entre el cateto corto y la hipotenusa.",
                "La hipotenusa es opuesta al ángulo de 90°, y es el lado más largo del triángulo.",
                "La hipotenusa es el doble del cateto corto, [[c = 2a]], sin ninguna raíz cuadrada.",
                "El cateto largo es √3 veces el cateto corto, [[b = a\\sqrt{3}]], donde [[\\sqrt{3} \\approx 1.732]].",
                "La razón de lados [[1 : \\sqrt{3} : 2]] no depende del tamaño del triángulo, así que ampliar el triángulo deja la razón sin cambios.",
                "Todos los triángulos 30-60-90 son semejantes, porque tienen los mismos tres ángulos y las mismas proporciones de lados.",
                "El área depende del cuadrado del cateto corto, [[A = \\frac{a^2\\sqrt{3}}{2}]], así que duplicar el cateto corto cuadruplica el área.",
                "El perímetro escala directamente con el cateto corto, [[P = a(3 + \\sqrt{3})]], así que duplicar el cateto corto duplica el perímetro.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores Comunes al Resolver Triángulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce errores aparecen una y otra vez en los problemas 30-60-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir el cateto corto y el cateto largo: el cateto corto es opuesto a 30° y el cateto largo es opuesto a 60°. Identifica cada lado por su ángulo opuesto, no por cómo está girado el diagrama. Correcto: [[a]] opuesto a 30°, [[b]] opuesto a 60°.",
                "Usar √2 en lugar de √3: √2 pertenece al triángulo 45-45-90, cuya razón es [[1 : 1 : \\sqrt{2}]]. Un triángulo 30-60-90 siempre usa √3. Correcto: [[b = a\\sqrt{3}]].",
                "Multiplicar el cateto corto por 2 para hallar el cateto largo: duplicar da la hipotenusa, no el cateto largo. Para [[a = 5]] cm, duplicar da 10 cm, que es [[c]], mientras que el cateto largo es [[5\\sqrt{3} \\approx 8.660]] cm. Correcto: [[b = a\\sqrt{3}]].",
                "Usar [[a\\sqrt{3}]] como hipotenusa: la hipotenusa es [[2a]], no [[a\\sqrt{3}]]. Para [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm es el cateto largo, y la hipotenusa es 10 cm. Correcto: [[c = 2a]].",
                "Olvidar que la hipotenusa es igual a [[2a]]: a veces los estudiantes aplican Pitágoras para hallar la hipotenusa cuando duplicar bastaría. Duplicar es más rápido y exacto. Correcto: [[c = 2a]].",
                "Dividir entre 2 en lugar de entre √3 al hallar el cateto corto a partir del cateto largo: dividir [[b]] entre 2 da [[\\frac{b}{2}]], que no es el cateto corto. Para [[b = 12]] cm, dividir entre 2 da 6 cm, mientras que el cateto corto correcto es [[4\\sqrt{3} \\approx 6.928]] cm. Correcto: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Olvidar dividir entre dos al calcular el área: el área es la mitad del producto de los catetos. Usar [[A = ab]] duplica el área verdadera. Para [[a = 6]] cm, [[ab = 36\\sqrt{3}]] cm² es el doble de los [[18\\sqrt{3}]] cm² correctos. Correcto: [[A = \\frac{ab}{2}]].",
                "Sumar solo dos lados al calcular el perímetro: el perímetro necesita los tres lados. Sumar solo los dos catetos para [[a = 5]] cm da [[5 + 5\\sqrt{3} \\approx 13.660]] cm, mientras que el perímetro verdadero es de unos 23.660 cm. Correcto: [[P = a + b + c]].",
                "Confundir las respuestas exactas con las aproximaciones decimales: [[5\\sqrt{3}]] cm es exacto, mientras que 8.660 cm está redondeado. Escribir 8.660 cm como si fuera exacto pierde la precisión que conserva el radical. Correcto: da primero la forma exacta y luego el decimal.",
                "Redondear √3 demasiado pronto: usar 1.73 para √3 en medio de un cálculo desplaza cada paso posterior. Para [[a = 5]] cm, [[5 \\times 1.73 = 8.65]] cm en lugar de 8.660 cm. Correcto: mantén √3 exacto durante el procedimiento y redondea solo la respuesta final.",
                "Mezclar unidades de medida: un cateto corto en centímetros y una hipotenusa en metros no se pueden combinar directamente. Convierte todas las medidas a una unidad antes de calcular. Correcto: 0.5 m equivale a 50 cm, y luego calcula en centímetros.",
                "Aplicar las fórmulas a un triángulo con ángulos distintos: las fórmulas [[b = a\\sqrt{3}]] y [[c = 2a]] solo valen cuando los ángulos son 30°, 60° y 90°. Un triángulo rectángulo con ángulos de 40° y 50° tiene una razón distinta. Correcto: confirma primero los ángulos y luego usa las fórmulas.",
                "Confundir los lados opuestos a 30 grados y a 60 grados: el lado opuesto a 30° es el cateto corto y el lado opuesto a 60° es el cateto largo, nunca al revés. Intercambiarlos hace que el cateto largo sea más corto que el cateto corto, lo cual es imposible. Correcto: [[a]] opuesto a 30°, [[b]] opuesto a 60°.",
                "Olvidar que el área requiere unidades cuadradas: un área de 31.177 cm es incorrecta por la unidad, aunque el número sea correcto. El área mide superficie, así que son 31.177 centímetros cuadrados. Correcto: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones Prácticas de los Triángulos 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón aparece dondequiera que un ángulo de 30° o 60° se encuentra con un ángulo recto.",
            },
            {
              "kind": "p",
              "text": "El uso más común es en las tareas de geometría y los ejercicios de trigonometría, donde los problemas 30-60-90 comprueban si los estudiantes saben identificar el cateto corto, aplicar la razón y conservar respuestas radicales exactas. Los cálculos de altura de triángulos equiláteros usan la misma idea al revés: la altura de un triángulo equilátero es el cateto largo del triángulo 30-60-90 formado al cortarlo por la mitad, así que un lado de 10 cm da una altura de [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico, la arquitectura y la geometría de la construcción usan las relaciones 30-60-90 cuando un diseño exige un ángulo de 30° o 60°, como la pendiente de un tejado, una rampa o un tirante diagonal. Un constructor que conoce un lado de ese triángulo puede hallar los demás sin medirlos directamente. Las demostraciones en clase usan el triángulo para mostrar cómo una razón fija convierte una medida en una descripción completa de una forma.",
            },
            {
              "kind": "p",
              "text": "La modelización matemática usa la razón dondequiera que las relaciones entre diagonales y alturas en formas geométricas necesiten valores exactos, por ejemplo en patrones hexagonales, donde los ángulos de 60° de un hexágono regular crean triángulos 30-60-90 dentro de la forma. Estos son usos realistas de la propia geometría, no afirmaciones sobre tolerancias de ingeniería: el trabajo de diseño real añade límites de material y márgenes de seguridad más allá de los valores geométricos exactos de esta página.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Práctica con Respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resuelve los seis problemas en papel antes de leer las respuestas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Hallar el Cateto Largo a Partir del Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene un cateto corto de [[a = 6]] cm. Halla el cateto largo [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hallar la Hipotenusa a Partir del Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene un cateto corto de [[a = 11]] cm. Halla la hipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hallar el Cateto Corto a Partir de la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene una hipotenusa de [[c = 24]] cm. Halla el cateto corto [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Hallar el Cateto Largo a Partir de la Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene una hipotenusa de [[c = 14]] cm. Halla el cateto largo [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Calcular el Área a Partir del Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene un cateto corto de [[a = 9]] cm. Halla el área [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Calcular el Perímetro a Partir del Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triángulo 30-60-90 tiene un cateto corto de [[a = 7]] cm. Halla el perímetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los Problemas de Práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. La respuesta exacta es [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[c = 2a = 2 \\times 11 = 22]] cm. La hipotenusa es exactamente el doble del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. El cateto corto es exactamente la mitad de la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Comprueba el orden: el cateto corto mide 7 cm, el cateto largo mide unos 12.124 cm y la hipotenusa mide 14 cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] centímetros cuadrados. La respuesta exacta es [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Sumar los lados uno por uno da el mismo resultado: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras Relacionadas de Triángulos Rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea distinta con triángulos rectángulos, así que elige la herramienta que coincida con la medida que necesitas.",
      "relatedItems": [
        "Calculadora de Triángulo Rectángulo Especial",
        "Calculadora de Triángulo 45-45-90",
        "Calculadora de Lado de Triángulo Rectángulo",
        "Calculadora de Área de Triángulo Rectángulo",
        "Calculadora de Perímetro de Triángulo Rectángulo",
        "Calculadora del Teorema de Pitágoras",
      ],
      "faqHeading": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Qué es un triángulo 30-60-90?",
          "answer": "Un triángulo 30-60-90 es un triángulo rectángulo con ángulos de 30°, 60° y 90°. Se llama triángulo rectángulo especial porque las longitudes de sus lados siempre siguen la razón fija [[1 : \\sqrt{3} : 2]]. Conocer un lado basta para hallar todos los demás, por eso la calculadora solo necesita una entrada.",
        },
        {
          "question": "¿Cuál es la razón de lados de un triángulo 30-60-90?",
          "answer": "La razón de lados es [[a : b : c = 1 : \\sqrt{3} : 2]], donde [[a]] es el cateto corto, [[b]] es el cateto largo y [[c]] es la hipotenusa. Eso significa que [[b = a\\sqrt{3}]] y [[c = 2a]]. La razón es la misma para todos los triángulos 30-60-90, cualquiera que sea su tamaño.",
        },
        {
          "question": "¿Por qué el cateto largo se multiplica por √3?",
          "answer": "El cateto largo es la altura del triángulo equilátero que genera un triángulo 30-60-90. Cortar un triángulo equilátero de lado [[2a]] por la mitad da [[b^2 = (2a)^2 - a^2 = 3a^2]], así que [[b = a\\sqrt{3}]]. La √3 procede del teorema de Pitágoras aplicado a esa construcción.",
        },
        {
          "question": "¿Cómo hallo la hipotenusa a partir del cateto corto?",
          "answer": "Duplica el cateto corto: [[c = 2a]]. Si [[a = 7]] cm, entonces [[c = 2 \\times 7 = 14]] cm. La hipotenusa es siempre exactamente el doble del cateto corto en un triángulo 30-60-90, porque es un lado completo del triángulo equilátero mientras que el cateto corto es medio lado.",
        },
        {
          "question": "¿Cómo hallo el cateto corto a partir de la hipotenusa?",
          "answer": "Divide la hipotenusa entre dos: [[a = \\frac{c}{2}]]. Si [[c = 18]] cm, entonces [[a = \\frac{18}{2} = 9]] cm. Esto es lo inverso de duplicar el cateto corto para hallar la hipotenusa, y solo funciona para triángulos 30-60-90, donde la hipotenusa es siempre el doble del cateto corto.",
        },
        {
          "question": "¿Cómo calculo el cateto largo a partir de la hipotenusa?",
          "answer": "Usa [[b = \\frac{c\\sqrt{3}}{2}]]. Primero divide la hipotenusa entre dos para obtener el cateto corto, y luego multiplica por √3. Si [[c = 16]] cm, entonces [[b = 8\\sqrt{3} \\approx 13.856]] cm. El cateto largo está entre el cateto corto y la hipotenusa en longitud.",
        },
        {
          "question": "¿Cómo hallo el cateto corto a partir del cateto largo?",
          "answer": "Divide el cateto largo entre √3: [[a = \\frac{b}{\\sqrt{3}}]]. Si [[b = 12]] cm, entonces [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Dividir entre √3 invierte la multiplicación usada para hallar el cateto largo a partir del cateto corto.",
        },
        {
          "question": "¿Cómo calculo el área de un triángulo 30-60-90?",
          "answer": "Usa [[A = \\frac{a^2\\sqrt{3}}{2}]], donde [[a]] es el cateto corto. Si [[a = 6]] cm, entonces [[A = 18\\sqrt{3} \\approx 31.177]] centímetros cuadrados. La fórmula es la mitad del producto de los dos catetos, con el cateto largo sustituido por [[a\\sqrt{3}]]. El área siempre está en unidades cuadradas.",
        },
        {
          "question": "¿Cómo calculo el perímetro de un triángulo 30-60-90?",
          "answer": "Usa [[P = a(3 + \\sqrt{3})]], donde [[a]] es el cateto corto. Si [[a = 5]] cm, entonces [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. La fórmula suma los tres lados, [[a + a\\sqrt{3} + 2a]], y saca [[a]] como factor común. El perímetro está en unidades simples, no en unidades cuadradas.",
        },
        {
          "question": "¿Puede un triángulo 30-60-90 tener lados decimales?",
          "answer": "Sí. La razón funciona para cualquier longitud positiva, entera o decimal. Si [[a = 2.5]] cm, entonces [[b = 2.5\\sqrt{3} \\approx 4.330]] cm y [[c = 5]] cm. Los decimales no cambian nada del método: multiplica por √3 para el cateto largo y duplica para la hipotenusa, y redondea solo la respuesta final.",
        },
        {
          "question": "¿Son semejantes todos los triángulos 30-60-90?",
          "answer": "Sí. Todos los triángulos 30-60-90 tienen los mismos tres ángulos, 30°, 60° y 90°, y la misma razón de lados, [[1 : \\sqrt{3} : 2]]. Mismos ángulos más mismas proporciones significa que los triángulos son semejantes, así que solo se diferencian en el tamaño. Ampliar uno o reducirlo da otro triángulo 30-60-90.",
        },
        {
          "question": "¿Cómo puedo comprobar si las medidas de mi triángulo son correctas?",
          "answer": "Comprueba la razón, [[\\frac{b}{a} = \\sqrt{3}]] y [[\\frac{c}{a} = 2]], luego confirma [[a^2 + b^2 = c^2]] con el teorema de Pitágoras, y confirma [[a < b < c]]. Para [[a = 5]] cm, [[b \\approx 8.660]] cm y [[c = 10]] cm, las cuatro comprobaciones pasan. Si alguna comprobación falla, repite el cálculo.",
        },
      ],
    },
};
