// fortyFiveGuideTranslations.bes.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de Triángulo 45-45-90: hipotenusa, cateto, área y perímetro",
        "description": "Halla la hipotenusa, el cateto que falta, el área y el perímetro de un triángulo 45-45-90 a partir de un cateto conocido, con la razón fija 1:1:√2 y respuestas exactas con radicales.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Navegación por secciones",
      "tocItems": {
        "sec-intro": "Calculadora de Triángulo 45-45-90",
        "sec-calculate": "Calcular la hipotenusa, el cateto, el área o el perímetro",
        "sec-what": "¿Qué es un triángulo 45-45-90?",
        "sec-isosceles": "¿Por qué se llama triángulo rectángulo isósceles?",
        "sec-legs": "Los dos catetos iguales y la hipotenusa",
        "sec-ratio": "La razón de lados del triángulo 45-45-90",
        "sec-why-sqrt2": "¿Por qué aparece la raíz cuadrada de 2?",
        "sec-hypotenuse": "Fórmula para hallar la hipotenusa a partir de un cateto",
        "sec-leg-hyp": "Fórmula para hallar un cateto a partir de la hipotenusa",
        "sec-area": "Cómo calcular el área de un triángulo 45-45-90",
        "sec-perimeter": "Cómo calcular el perímetro de un triángulo 45-45-90",
        "sec-square": "Cómo la diagonal de un cuadrado crea un triángulo 45-45-90",
        "sec-step-example": "Ejemplo paso a paso para resolver un triángulo 45-45-90",
        "sec-examples": "Ejemplos resueltos de cálculos con triángulos 45-45-90",
        "sec-exact": "Respuestas exactas frente a aproximaciones decimales",
        "sec-verify": "Cómo comprobar los cálculos de un triángulo 45-45-90",
        "sec-properties": "Propiedades importantes de los triángulos 45-45-90",
        "sec-vs-3060": "Diferencia entre los triángulos 45-45-90 y 30-60-90",
        "sec-mistakes": "Errores comunes al resolver triángulos 45-45-90",
        "sec-applications": "Aplicaciones prácticas de los triángulos 45-45-90",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Halla la hipotenusa, el cateto que falta, el área y el perímetro de un triángulo 45-45-90 a partir de un solo lado conocido.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 es un triángulo rectángulo cuyos tres ángulos miden 45°, 45° y 90°. Se llama triángulo rectángulo isósceles porque sus dos catetos tienen la misma longitud, y se llama triángulo rectángulo especial porque sus lados siempre siguen la misma razón fija, sin importar lo grande o pequeño que sea el triángulo. La calculadora de triángulo 45-45-90 de esta página usa esa razón para hallar la hipotenusa, el cateto que falta, el área y el perímetro a partir de una sola longitud de lado que tú introduces.",
            },
            {
              "kind": "p",
              "text": "En el triángulo ABC, el ángulo A mide 45°, el ángulo B mide 45° y el ángulo C mide 90°. El lado BC es el primer cateto [[a]], el lado AC es el segundo cateto [[b]] y el lado AB es la hipotenusa [[c]]. Como los dos ángulos agudos son iguales, los dos catetos son iguales, [[a = b]], y los tres lados siempre cumplen la razón [[a : b : c = 1 : 1 : \\sqrt{2}]], lo que significa [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Si [[a = 5]] cm, entonces el segundo cateto es [[b = 5]] cm, la hipotenusa es [[c = 5\\sqrt{2} \\approx 7.071]] cm y el área es [[A = \\frac{25}{2} = 12.5]] cm². La calculadora también puede hallar el perímetro a partir del mismo cateto, así que una sola medida basta para describir todo el triángulo. Las secciones siguientes explican la razón, los cuatro modos de la calculadora y las fórmulas, con ejemplos resueltos en cada paso.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular la hipotenusa, el cateto, el área o el perímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro modos cubren todas las formas de empezar desde un solo lado conocido.",
            },
            {
              "kind": "p",
              "text": "La calculadora de esta página tiene cuatro modos, uno para cada medida que puede hallar. Elige el modo que coincida con el lado que conoces y la medida que necesitas. Cada modo pide una sola entrada, porque la razón fija completa todo lo demás. La tabla siguiente enumera los cuatro modos con la entrada que necesita cada uno y el resultado que devuelve.",
            },
            {
              "kind": "p",
              "text": "Para usar un modo, primero determina qué lado conoces. El lado opuesto a un ángulo de 45° es un cateto, y cualquiera de los catetos puede servir como [[a]], porque los catetos son iguales. El lado opuesto al ángulo de 90° es la hipotenusa [[c]]. Introduce esa medida como un número positivo, elige una unidad y haz clic en el botón Calcular. El resultado aparece con el trabajo paso a paso, así puedes ver la fórmula y la sustitución, no solo la respuesta. Usa Restablecer para borrar los campos antes de empezar un problema nuevo.",
            },
            {
              "kind": "p",
              "text": "Los distintos modos necesitan fórmulas distintas porque cada uno parte de un lado conocido diferente. Hallar la hipotenusa a partir de un cateto multiplica por √2, mientras que hallar un cateto a partir de la hipotenusa divide entre √2. El modo de área eleva el cateto al cuadrado y divide el resultado entre dos, y el modo de perímetro suma los tres lados. Nunca necesitas hallar los lados que faltan por tu cuenta antes de usar los modos de área o perímetro, porque la calculadora los halla internamente primero.",
            },
            {
              "kind": "p",
              "text": "Las cuatro fórmulas son [[c = a\\sqrt{2}]] para la hipotenusa, [[a = \\frac{c}{\\sqrt{2}}]] para un cateto, [[A = \\frac{a^2}{2}]] para el área y [[P = a(2 + \\sqrt{2})]] para el perímetro. Mantén las mismas unidades durante todo el cálculo: un cateto introducido en centímetros da una hipotenusa en centímetros y un área en centímetros cuadrados. La calculadora no halla el circunradio, el inradio ni medidas de triángulos que no sean 45-45-90, así que confirma los ángulos antes de usarla.",
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
                "Hallar la hipotenusa a partir del cateto",
                "Cateto a",
                "Hipotenusa c",
              ],
              [
                "Hallar el cateto a partir de la hipotenusa",
                "Hipotenusa c",
                "Cateto a",
              ],
              [
                "Hallar el área a partir del cateto",
                "Cateto a",
                "Área A",
              ],
              [
                "Hallar el perímetro a partir del cateto",
                "Cateto a",
                "Perímetro P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "¿Qué es un triángulo 45-45-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 recibe su nombre por sus tres ángulos.",
            },
            {
              "kind": "p",
              "text": "Es un triángulo rectángulo, lo que significa que uno de sus ángulos mide exactamente 90°. Los otros dos ángulos miden 45° cada uno, y el nombre enumera los tres ángulos en orden. Como el ángulo recto es fijo y los otros dos ángulos también son fijos, la forma del triángulo queda totalmente determinada: todos los triángulos 45-45-90 tienen la misma forma, y dos de estos triángulos solo se diferencian en el tamaño.",
            },
            {
              "kind": "p",
              "text": "Se llama triángulo rectángulo especial porque las longitudes de sus lados siguen una razón fija. En la mayoría de los triángulos rectángulos, conocer un lado no dice nada sobre los demás. En un triángulo 45-45-90, conocer un lado dice todo sobre los demás, porque la razón [[1 : 1 : \\sqrt{2}]] une los tres lados. Por eso la calculadora puede hallar la hipotenusa, el área y el perímetro a partir de una sola entrada.",
            },
            {
              "kind": "p",
              "text": "Los tres ángulos suman 180°, como deben sumar en todo triángulo:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es el lado más largo, porque se encuentra frente al ángulo mayor, el ángulo de 90°. Los dos catetos son iguales, porque se encuentran frente a ángulos iguales. El triángulo puede ser tan pequeño como unos pocos milímetros o tan grande como un terreno para construir, y los ángulos se mantienen iguales mientras los lados crecen juntos. La razón también se mantiene, así que un triángulo con cateto de 5 cm y un triángulo con cateto de 5 m tienen la misma forma a tamaños distintos.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Triángulo 45-45-90 ABC etiquetado, con ángulos de 45, 45 y 90 grados, catetos iguales a y b, e hipotenusa c",
            "caption": "Triángulo ABC: ángulos de 45°, 45° y 90°, con catetos iguales a y b e hipotenusa c.",
          },
        },
        "sec-isosceles": {
          "h2": "¿Por qué se llama triángulo rectángulo isósceles?",
          "blocks": [
            {
              "kind": "p",
              "text": "El nombre tiene dos partes, y cada parte describe un hecho.",
            },
            {
              "kind": "p",
              "text": "Isósceles significa un triángulo con dos lados iguales. En un triángulo 45-45-90, los dos lados iguales son los catetos [[a]] y [[b]]. Triángulo rectángulo significa un triángulo con un ángulo de 90°. Al juntar las dos palabras, el nombre dice exactamente lo que es el triángulo: un triángulo rectángulo con dos lados iguales.",
            },
            {
              "kind": "p",
              "text": "Los catetos iguales se deducen de los ángulos iguales. En cualquier triángulo, los ángulos iguales se encuentran frente a lados iguales. Aquí los dos ángulos agudos miden 45° cada uno, así que los lados opuestos a ellos deben ser iguales. El lado opuesto al ángulo A es [[a]], y el lado opuesto al ángulo B es [[b]], así que [[a = b]]. Esto no es casualidad de un dibujo: vale para todos los triángulos 45-45-90, porque los ángulos siempre son los mismos.",
            },
            {
              "kind": "p",
              "text": "El triángulo es simétrico respecto a la altura trazada desde el vértice del ángulo recto hasta la hipotenusa. Esa altura corta la hipotenusa en su punto medio y en ángulo recto, y divide el triángulo grande en dos triángulos más pequeños que son congruentes entre sí. Cada triángulo pequeño tiene ángulos de 45°, 45° y 90°, así que cada uno es en sí mismo un triángulo 45-45-90, a la mitad de la escala. Esa simetría es otra forma de ver por qué los dos catetos deben coincidir: un pliegue a lo largo de la altura hace coincidir un cateto con el otro.",
            },
            {
              "kind": "p",
              "text": "La altura desde el vértice del ángulo recto hasta la hipotenusa también tiene una longitud útil: es igual a la mitad de la hipotenusa. Para un triángulo con hipotenusa [[c]], la altura es [[\\frac{c}{2}]]. Este dato es útil cuando un problema pide la altura del triángulo medida desde la hipotenusa, y es una consecuencia más de la simetría de la figura.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Los dos catetos iguales y la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dos catetos se encuentran en el ángulo recto, y la hipotenusa queda frente a él.",
            },
            {
              "kind": "p",
              "text": "El cateto [[a]] es un lado perpendicular, el lado BC del triángulo ABC. El cateto [[b]] es el otro lado perpendicular, el lado AC. Los dos catetos se encuentran en el vértice C, donde forman el ángulo de 90°, así que son perpendiculares entre sí. Cualquiera de los catetos puede servir como base del triángulo, con el otro cateto como altura, por eso la fórmula del área puede usar los dos catetos directamente.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa [[c]] es el lado AB, opuesto al ángulo de 90°. Es el lado más largo del triángulo, porque el ángulo mayor siempre se encuentra frente al lado más largo. También es el único lado que no es un cateto, así que nunca debe confundirse con ninguno de los catetos. Los dos catetos son iguales, pero la hipotenusa no es igual a ellos: es √2 veces cualquiera de los catetos, unas 1.414 veces más larga.",
            },
            {
              "kind": "p",
              "text": "Como los catetos son iguales, cualquiera de ellos puede usarse como el cateto conocido en la calculadora. Si un problema da el cateto [[b]] en lugar del cateto [[a]], introduce ese valor como el cateto: el resultado es el mismo, ya que [[a = b]]. La misma libertad no se aplica a la hipotenusa, que necesita su propio modo. Identificar la hipotenusa es sencillo en cualquier dibujo: busca el cuadradito que marca el ángulo recto, y el lado frente a él es la hipotenusa.",
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
                "Cateto a (BC)",
                "45°",
                "a",
              ],
              [
                "Cateto b (AC)",
                "45°",
                "a, igual al cateto a",
              ],
              [
                "Hipotenusa c (AB)",
                "90°",
                "a√2, el lado más largo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "La razón de lados del triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón 1:1:√2 fija todos los triángulos 45-45-90.",
            },
            {
              "kind": "p",
              "text": "La razón de lados de un triángulo 45-45-90 es:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Cada parte de la razón describe un lado. El primer cateto representa una unidad, el segundo cateto también representa una unidad y la hipotenusa representa √2 unidades. Escritos con el cateto como [[a]], los tres lados son [[a = a]], [[b = a]] y [[c = a\\sqrt{2}]]. Si el cateto mide 1 cm, el otro cateto mide 1 cm y la hipotenusa mide √2 cm. Si el cateto mide 10 cm, el otro cateto mide 10 cm y la hipotenusa mide [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "La razón se mantiene igual sin importar el tamaño del triángulo, porque todos los triángulos 45-45-90 son semejantes. Ampliar o reducir un triángulo multiplica todos los lados por el mismo factor, así que las proporciones entre los lados no cambian. Toma [[a = 4]] cm como ejemplo: el segundo cateto es [[b = 4]] cm y la hipotenusa es [[c = 4\\sqrt{2} \\approx 5.657]] cm, y la razón [[4 : 4 : 5.657]] es la misma que [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "El valor de √2 es aproximadamente 1.41421356. Es un número irracional, así que su expansión decimal nunca termina y nunca se repite, y ningún decimal es exactamente igual a él. Mantén la forma exacta con radical siempre que puedas: escribir [[4\\sqrt{2}]] cm es exacto, mientras que 5.657 cm es una aproximación redondeada. Usa la forma exacta en tu trabajo y en las respuestas finales cuando la pregunta pida un valor exacto, y da el decimal solo cuando se necesite una respuesta aproximada.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Tres barras que comparan los dos catetos iguales y la hipotenusa en la razón 1 a 1 a raíz cuadrada de 2",
            "caption": "La razón fija 1:1:√2 compara los dos catetos iguales con la hipotenusa.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "¿Por qué aparece la raíz cuadrada de 2?",
          "blocks": [
            {
              "kind": "p",
              "text": "La raíz cuadrada de 2 viene directamente del teorema de Pitágoras.",
            },
            {
              "kind": "p",
              "text": "Empieza con los catetos iguales, [[a = b]], y aplica el teorema de Pitágoras, que vale para todo triángulo rectángulo:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye los catetos iguales, reemplazando [[b]] por [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina los dos términos idénticos:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Toma la raíz cuadrada positiva de ambos lados. Las longitudes de los lados son positivas, así que la raíz negativa se descarta:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Esa es toda la razón por la que aparece √2: dos cuadrados iguales suman el doble de un cuadrado, y la raíz cuadrada de 2 es el número que deshace esa duplicación. Esta es una relación especial, no un atajo aproximado. Se deduce de los catetos iguales más Pitágoras, y vale para todos los triángulos 45-45-90 sin excepción.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm como comprobación numérica:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "El paso de √50 a [[5\\sqrt{2}]] funciona porque [[50 = 25 \\times 2]], y la raíz cuadrada de 25 es 5. Simplificar el radical de esta forma mantiene la respuesta exacta y hace visible el patrón: la hipotenusa siempre es el cateto por √2, cualquiera que sea la longitud del cateto.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Derivación pitagórica que muestra a al cuadrado más a al cuadrado igual a c al cuadrado, lo que lleva a c igual a a por raíz cuadrada de 2",
            "caption": "De a² + a² = c², la hipotenusa debe ser a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Fórmula para hallar la hipotenusa a partir de un cateto",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplica cualquiera de los catetos por √2 para obtener la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[c]] es la hipotenusa y [[a]] es cualquiera de los catetos. La fórmula es una lectura directa de la razón de lados: la hipotenusa representa √2 unidades por cada 1 unidad de cateto, así que la hipotenusa es √2 veces el cateto. La multiplicación es necesaria porque la razón es una relación de escala, y √2 aparece porque Pitágoras obliga a que la hipotenusa sea esa cantidad más larga que un cateto.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es más largo que cualquiera de los catetos, como debe ser: √2 es aproximadamente 1.414, así que multiplicar por él aumenta la longitud. La respuesta exacta es [[5\\sqrt{2}]] cm, y 7.071 cm es la aproximación decimal. Mantén la forma exacta cuando la pregunta la pida, y redondea el decimal solo al final de tu trabajo, nunca en medio.",
            },
            {
              "kind": "p",
              "text": "Usa este modo siempre que un cateto sea el lado conocido y la hipotenusa sea el lado desconocido. Como los catetos son iguales, no importa cuál cateto dé el problema: introdúcelo como [[a]] y la fórmula da la misma hipotenusa. Una comprobación rápida ayuda: la hipotenusa debe salir unas 1.414 veces el cateto. Si tu respuesta es el doble del cateto, o solo un poco más larga que el cateto, has usado el multiplicador equivocado.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Triángulo 45-45-90 con cateto de 5 cm e hipotenusa etiquetada como 5 por raíz cuadrada de 2, unos 7.071 cm",
            "caption": "Hipotenusa a partir de un cateto: a = 5 cm da c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Fórmula para hallar un cateto a partir de la hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Divide la hipotenusa entre √2 para obtener un cateto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[a]] es cualquiera de los catetos y [[c]] es la hipotenusa. Esta fórmula viene de despejar [[c = a\\sqrt{2}]]: dividir ambos lados entre √2 aísla [[a]]. Dividir entre √2 invierte la multiplicación original, así que deshace exactamente lo que hizo la fórmula directa. El otro cateto tiene la misma longitud, así que un solo cálculo da los dos catetos a la vez.",
            },
            {
              "kind": "p",
              "text": "La forma racionalizada suele ser más fácil de manejar:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Viene de multiplicar la parte superior e inferior de [[\\frac{c}{\\sqrt{2}}]] por √2. El denominador se convierte en [[\\sqrt{2} \\times \\sqrt{2} = 2]], y el numerador se convierte en [[c\\sqrt{2}]]. Las dos formas dan el mismo valor, pero la forma racionalizada no tiene raíz cuadrada en el denominador, que es la forma que esperan las respuestas de examen.",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ambos catetos miden [[5\\sqrt{2}]] cm, unos 7.071 cm cada uno. El cateto es más corto que la hipotenusa, como debe ser, ya que dividir entre un número mayor que 1 reduce el valor. Si tu respuesta sale más larga que la hipotenusa, has multiplicado en lugar de dividir, o has dividido entre el número equivocado.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Triángulo 45-45-90 con hipotenusa de 10 cm y cada cateto etiquetado como 5 por raíz cuadrada de 2, unos 7.071 cm",
            "caption": "Cateto a partir de la hipotenusa: c = 10 cm da a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Cómo calcular el área de un triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "El área solo necesita un cateto, porque los catetos son iguales.",
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
              "text": "Como [[a = b]], sustituye para obtener el área a partir de un solo cateto:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La división entre dos es necesaria porque un triángulo cubre la mitad del rectángulo formado por sus dos catetos. El área final se expresa en unidades cuadradas, como centímetros cuadrados, porque el área mide superficie, no longitud. Un cuadrado de lado [[a]] tiene área [[a^2]], y el triángulo es exactamente la mitad de ese cuadrado, que es otra forma de ver por qué la fórmula es [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "El modo de área de la calculadora acepta el cateto y calcula el área directamente, así que solo introduces [[a]]. Si conoces la hipotenusa en lugar del cateto, halla primero el cateto con [[a = \\frac{c}{\\sqrt{2}}]], y luego usa [[A = \\frac{a^2}{2}]]. También hay un atajo solo a partir de la hipotenusa: [[A = \\frac{c^2}{4}]], que da el mismo resultado. Para [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "El área crece con el cuadrado del cateto, así que duplicar el cateto cuadruplica el área. Un triángulo con [[a = 12]] cm tiene cuatro veces el área del triángulo de [[a = 6]] cm, 72 cm² en lugar de 18 cm², no el doble. Esa relación cuadrática es fácil de olvidar, así que compruébala siempre que un problema amplíe o reduzca un triángulo.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Triángulo 45-45-90 con cateto de 6 cm, hipotenusa de 6 por raíz cuadrada de 2 cm, área de 18 cm cuadrados y perímetro de unos 20.485 cm",
            "caption": "Área y perímetro a partir del cateto: a = 6 cm da A = 18 cm² y P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Cómo calcular el perímetro de un triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Suma los tres lados y luego saca el cateto como factor común.",
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
              "text": "Como [[a = b]] y [[c = a\\sqrt{2}]], sustituye esas relaciones:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Saca [[a]] como factor común para obtener la forma simplificada:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Las tres longitudes de los lados están incluidas, porque el perímetro recorre todo el contorno del triángulo: baja por un cateto, cruza por el otro cateto y vuelve por la hipotenusa. Dejar fuera cualquier lado da una distancia más corta que no es el perímetro. El perímetro es una medida lineal, no una medida de área, así que la respuesta va en unidades simples como centímetros, nunca en centímetros cuadrados.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La forma exacta es [[10 + 5\\sqrt{2}]] cm, y 17.071 cm es la forma decimal. El modo de perímetro de la calculadora acepta el cateto y suma los tres lados internamente. También hay un atajo solo a partir de la hipotenusa: [[P = c(1 + \\sqrt{2})]]. Para [[c = 10]] cm, eso da [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. El perímetro crece en proporción directa al cateto, así que duplicar el cateto duplica el perímetro.",
            },
          ],
        },
        "sec-square": {
          "h2": "Cómo la diagonal de un cuadrado crea un triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Una diagonal corta un cuadrado en dos triángulos 45-45-90 idénticos.",
            },
            {
              "kind": "p",
              "text": "Un cuadrado tiene cuatro lados iguales y cuatro esquinas de 90°. Traza una diagonal a través de él, de una esquina a la esquina opuesta, y el cuadrado se divide en dos triángulos. Cada triángulo tiene dos lados que son lados del cuadrado, así que esos dos lados son iguales, y el ángulo entre ellos es una esquina del cuadrado, de 90°. La diagonal es el tercer lado, opuesto a ese ángulo recto, así que es la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "La diagonal también divide en dos partes iguales los dos ángulos de las esquinas por los que pasa. Cada esquina del cuadrado mide 90°, y la diagonal la divide en dos ángulos de 45°. Eso da a cada triángulo ángulos de 45°, 45° y 90°, que es exactamente un triángulo 45-45-90. Los dos triángulos son congruentes: tienen las mismas longitudes de lado y los mismos ángulos, porque comparten la diagonal y cada uno toma dos lados del mismo cuadrado.",
            },
            {
              "kind": "p",
              "text": "Usa un cuadrado con longitud de lado [[a]]. La diagonal [[d]] es la hipotenusa del triángulo, así que Pitágoras da:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un cuadrado de lado 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Por eso los cálculos de la diagonal de un cuadrado siempre usan la misma relación con √2. Siempre que necesites la diagonal de un cuadrado, multiplica el lado por √2; siempre que conozcas la diagonal y necesites el lado, divídela entre √2. La misma regla se aplica a las baldosas cuadradas, los marcos de fotos cuadrados, las parcelas cuadradas de terreno y cualquier otra forma cuadrada, porque todos los cuadrados se dividen de la misma forma.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Cuadrado de lado 8 cm dividido por una diagonal en dos triángulos 45-45-90 congruentes, diagonal de unos 11.314 cm",
            "caption": "La diagonal de un cuadrado de lado 8 cm es d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Ejemplo paso a paso para resolver un triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo, a = 5 cm, resuelto de principio a fin.",
            },
            {
              "kind": "p",
              "text": "Empieza con el cateto [[a = 5]] cm y halla todas las demás medidas del triángulo, una fórmula a la vez. Cada paso usa una fórmula de las secciones anteriores, y la tabla resumen al final reúne los resultados.",
            },
            {
              "kind": "steps",
              "steps": [
                "Halla el segundo cateto: los catetos son iguales, así que [[b = 5]] cm.",
                "Halla la hipotenusa: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Halla el área: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] centímetros cuadrados.",
                "Halla el perímetro: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Las cuatro medidas describen el mismo triángulo. Los lados [[5]], [[5]] y [[7.071]] cumplen la razón [[1 : 1 : \\sqrt{2}]] y el teorema de Pitágoras, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. El área y el perímetro son dos tipos distintos de medida de ese mismo triángulo: el área cubre su superficie, mientras que el perímetro recorre su contorno. Si cambias el cateto, todos los demás valores cambian con él, pero la razón entre los lados nunca cambia.",
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
                "Cateto a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hipotenusa c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Área A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Perímetro P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos de cálculos con triángulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho ejemplos resueltos, que cubren cada modo de la calculadora y una diagonal de cuadrado.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Hallar la hipotenusa a partir de un cateto",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 4]] cm. Fórmula: [[c = a\\sqrt{2}]]. Sustitución: [[c = 4\\sqrt{2}]]. Respuesta exacta: [[4\\sqrt{2}]] cm. Aproximación decimal: [[c \\approx 5.657]] cm. La hipotenusa es unas 1.414 veces el cateto, así que 4 cm se convierten en unos 5.657 cm. Mantén la forma exacta [[4\\sqrt{2}]] cm cuando la pregunta pida un valor exacto.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Hallar la hipotenusa a partir de un cateto mayor",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 8]] cm. Fórmula: [[c = a\\sqrt{2}]]. Sustitución: [[c = 8\\sqrt{2}]]. Respuesta exacta: [[8\\sqrt{2}]] cm. Aproximación decimal: [[c \\approx 11.314]] cm. Este es el mismo cálculo del Ejemplo 1 al doble de escala, y la respuesta es exactamente el doble de grande, lo que confirma la escala lineal de las longitudes de los lados. El mismo valor es la diagonal de un cuadrado de lado 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Hallar un cateto a partir de la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 12]] cm. Fórmula: [[a = \\frac{c}{\\sqrt{2}}]]. Sustitución: [[a = \\frac{12}{\\sqrt{2}}]]. Al racionalizar se obtiene [[a = 6\\sqrt{2}]] cm. Aproximación decimal: [[a \\approx 8.485]] cm. Ambos catetos miden [[6\\sqrt{2}]] cm, porque los catetos son iguales. El cateto es más corto que la hipotenusa, como debe ser.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Hallar un cateto a partir de una hipotenusa mayor",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 20]] cm. Fórmula: [[a = \\frac{c\\sqrt{2}}{2}]]. Sustitución: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Aproximación decimal: [[a \\approx 14.142]] cm. Ambos catetos miden [[10\\sqrt{2}]] cm. Una comprobación rápida: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, lo que devuelve la hipotenusa dada.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Calcular el área",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 7]] cm. Fórmula: [[A = \\frac{a^2}{2}]]. Sustitución: [[A = \\frac{49}{2}]]. Resultado: [[A = 24.5]] cm². El área es exacta, sin raíz cuadrada ni redondeo, porque [[7^2 = 49]] se divide entre dos sin resto. El área va en unidades cuadradas, a diferencia de las longitudes de los lados, así que la unidad es cm², no cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Calcular el perímetro",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 6]] cm. Fórmula: [[P = a(2 + \\sqrt{2})]]. Sustitución: [[P = 6(2 + \\sqrt{2})]]. Respuesta exacta: [[P = 12 + 6\\sqrt{2}]] cm. Aproximación decimal: [[P \\approx 20.485]] cm. Sumar los lados uno por uno da el mismo resultado: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. El perímetro va en unidades simples, no en unidades cuadradas.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Hallar la diagonal de un cuadrado",
            },
            {
              "kind": "p",
              "text": "Dado un cuadrado de lado 10 m. Fórmula: [[d = a\\sqrt{2}]]. Sustitución: [[d = 10\\sqrt{2}]] m. Respuesta exacta: [[10\\sqrt{2}]] m. Aproximación decimal: [[d \\approx 14.142]] m. La diagonal divide el cuadrado en dos triángulos 45-45-90, cada uno con catetos de 10 m e hipotenusa [[10\\sqrt{2}]] m. Esta es la misma fórmula que hallar una hipotenusa a partir de un cateto, porque la diagonal es la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Hallar la hipotenusa a partir de un cateto decimal",
            },
            {
              "kind": "p",
              "text": "Dado [[a = 2.5]] cm. Fórmula: [[c = a\\sqrt{2}]]. Sustitución: [[c = 2.5\\sqrt{2}]]. Respuesta exacta: [[2.5\\sqrt{2}]] cm. Aproximación decimal: [[c \\approx 3.536]] cm. Las entradas decimales funcionan exactamente igual que las entradas de números enteros: multiplica por √2, mantén primero la forma exacta y redondea el decimal solo en el paso final. El segundo cateto también mide 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "Las respuestas exactas y las aproximaciones decimales sirven para fines distintos. La forma exacta, como [[4\\sqrt{2}]] cm, es precisa y es lo que suelen exigir las respuestas de examen. La forma decimal, como 5.657 cm, es más fácil de imaginar y de medir con una regla. Da primero la forma exacta y luego el decimal, y redondea el decimal solo en el paso final.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Respuestas exactas frente a aproximaciones decimales",
          "blocks": [
            {
              "kind": "p",
              "text": "Una respuesta exacta mantiene √2; una respuesta decimal la redondea.",
            },
            {
              "kind": "p",
              "text": "Compara la respuesta exacta [[5\\sqrt{2}]] cm con la aproximación decimal 7.071 cm. La primera es exacta: expresa la longitud con precisión, usando el símbolo √2 para representar el número irracional cuyo cuadrado es 2. La segunda está redondeada: expresa la longitud con tres decimales, lo que está cerca del valor verdadero pero no es igual a él. La diferencia es pequeña, unos 0.00007 cm, pero es real, y importa en las demostraciones y en cálculos posteriores.",
            },
            {
              "kind": "p",
              "text": "El número √2 es irracional, lo que significa que no puede escribirse como fracción de dos números enteros, y su expansión decimal nunca termina y nunca se repite. Empieza por 1.41421356 y continúa sin fin. Cualquier decimal que escribas para él, por largo que sea, es una aproximación. Por eso la notación exacta con radical es preferible en las demostraciones matemáticas y en las respuestas de examen que piden un valor exacto: el radical conserva toda la precisión que pierde un decimal.",
            },
            {
              "kind": "p",
              "text": "Una aproximación decimal es más práctica cuando necesitas medir, cortar o construir algo. Una regla no puede medir [[5\\sqrt{2}]] cm directamente, pero sí puede medir 7.071 cm. Un carpintero que corta un tirante diagonal necesita el decimal, mientras que un estudiante que demuestra un teorema necesita la forma exacta. Usa cada forma donde corresponda, y etiqueta los decimales como aproximados para que nadie los confunda con valores exactos.",
            },
            {
              "kind": "p",
              "text": "El redondeo debe hacerse al final de un cálculo, no en medio. Si reemplazas √2 por 1.41 al principio y luego multiplicas, todos los pasos posteriores arrastran ese error. Para [[a = 5]] cm, usar 1.41 da [[c = 7.05]] cm, mientras que la aproximación correcta es 7.071 cm. Mantén √2 exacto durante el trabajo, en la forma [[5\\sqrt{2}]], y redondea solo la respuesta final. Nunca presentes un decimal redondeado como si fuera exacto.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo comprobar los cálculos de un triángulo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones rápidas detectan casi todos los errores.",
            },
            {
              "kind": "p",
              "text": "Haz al menos una comprobación en cada respuesta, y las cuatro cuando el problema lo merezca. El ejemplo siguiente usa en todo momento el triángulo con [[a = 5]] cm, [[b = 5]] cm y [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Catetos iguales",
            },
            {
              "kind": "p",
              "text": "Confirma [[a = b]]. Aquí ambos catetos miden 5 cm, así que la comprobación pasa. Si tus dos catetos difieren, uno de ellos está mal, o el triángulo no es un triángulo 45-45-90 en absoluto. Esta es la comprobación más rápida de todas, porque no necesita aritmética: los dos catetos deben coincidir exactamente.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Razón de lados",
            },
            {
              "kind": "p",
              "text": "Divide la hipotenusa entre un cateto: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Aquí [[\\frac{7.071}{5} \\approx 1.414]], así que la razón se cumple. Si la división da 2, has usado por error la duplicación del triángulo 30-60-90. Si da unos 1.732, has usado √3 por error. La razón [[\\frac{c}{a}]] debe ser √2, y nada más.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirma [[a^2 + b^2 = c^2]]. Aquí [[5^2 + 5^2 = 25 + 25 = 50]], y [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], así que el teorema se cumple. Esta comprobación detecta catetos intercambiados y multiplicadores equivocados, porque usar un valor incorrecto para cualquier lado rompe la igualdad. La <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> realiza esta comprobación para cualquier terna de longitudes de lado.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Suma de ángulos",
            },
            {
              "kind": "p",
              "text": "Confirma [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Esta comprobación trata de la configuración del problema más que de la aritmética: si los ángulos de tu triángulo no suman 180°, o si no son 45°, 45° y 90°, las fórmulas 45-45-90 no se aplican en absoluto, y ninguna longitud de lado obtenida con ellas puede ser fiable. Confirma primero los ángulos y luego confía en los lados.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades importantes de los triángulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Diez propiedades se deducen de la razón fija.",
            },
            {
              "kind": "list",
              "items": [
                "El triángulo siempre tiene ángulos de 45°, 45° y 90°, y esos ángulos siempre suman 180°.",
                "Ambos catetos son iguales, [[a = b]], porque se encuentran frente a ángulos iguales de 45°.",
                "La hipotenusa es el lado más largo, porque se encuentra frente al ángulo de 90°.",
                "La hipotenusa es √2 veces cualquiera de los catetos, [[c = a\\sqrt{2}]], donde [[\\sqrt{2} \\approx 1.41421356]].",
                "Todos los triángulos 45-45-90 son semejantes, porque tienen los mismos tres ángulos y las mismas proporciones de lados.",
                "La razón de lados [[1 : 1 : \\sqrt{2}]] es independiente del tamaño del triángulo, así que ampliar el triángulo deja la razón sin cambios.",
                "La altura a la hipotenusa divide el triángulo en dos triángulos 45-45-90 más pequeños y congruentes.",
                "La altura a la hipotenusa es igual a la mitad de la hipotenusa, [[\\frac{c}{2}]].",
                "El área es la mitad del cuadrado de un cateto, [[A = \\frac{a^2}{2}]], así que duplicar el cateto cuadruplica el área.",
                "El perímetro es [[P = a(2 + \\sqrt{2})]], así que duplicar el cateto duplica el perímetro.",
              ],
            },
            {
              "kind": "p",
              "text": "Cada propiedad se deduce de los ángulos y de la razón, no de un solo ejemplo. Los ángulos iguales obligan a que los catetos sean iguales, los catetos iguales más Pitágoras obligan a que la hipotenusa sea √2, y la hipotenusa √2 obliga a las fórmulas de área y perímetro. Una vez que aceptas los tres ángulos, todo lo demás queda fijo, por eso un solo lado conocido basta para describir todo el triángulo.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Diferencia entre los triángulos 45-45-90 y 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Los dos triángulos especiales se parecen, pero sus razones nunca se mezclan.",
            },
            {
              "kind": "p",
              "text": "Ambos son triángulos rectángulos especiales, y ambos permiten hallar todos los lados a partir de un solo lado conocido. La diferencia está en los ángulos: un triángulo 45-45-90 tiene dos ángulos agudos iguales, mientras que un triángulo 30-60-90 tiene dos ángulos agudos distintos. Esa sola diferencia cambia por completo la razón de lados, así que las fórmulas de un triángulo dan respuestas incorrectas para el otro.",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 es isósceles, con dos catetos iguales, mientras que un triángulo 30-60-90 es escaleno, sin lados iguales. En un triángulo 45-45-90 la hipotenusa es √2 veces un cateto, mientras que en un triángulo 30-60-90 la hipotenusa es el doble del cateto corto. El cateto largo de un triángulo 30-60-90 es √3 veces el cateto corto, y no hay un lado equivalente en un triángulo 45-45-90, porque sus dos catetos tienen la misma longitud. Para un tratamiento completo del otro triángulo, consulta la <a href=\"/30-60-90-triangle-calculator/\">calculadora de triángulo 30-60-90</a>, que usa la razón 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Las fórmulas no pueden intercambiarse. Usar [[c = 2a]] en un triángulo 45-45-90 con [[a = 5]] cm da 10 cm, mientras que la hipotenusa correcta es unos 7.071 cm. Usar [[c = a\\sqrt{2}]] en un triángulo 30-60-90 con cateto corto de 5 cm da unos 7.071 cm, mientras que la hipotenusa correcta es 10 cm. Confirma siempre los ángulos antes de elegir una fórmula: ángulos agudos iguales significan 45-45-90, y ángulos de 30° y 60° significan 30-60-90.",
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
                "Razón de lados",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Lados iguales",
                "Dos catetos iguales",
                "Ningún cateto igual",
              ],
              [
                "Hipotenusa",
                "Cateto × √2",
                "Cateto corto × 2",
              ],
              [
                "Cateto largo",
                "Igual al cateto corto",
                "Cateto corto × √3",
              ],
              [
                "Tipo de triángulo",
                "Rectángulo isósceles",
                "Rectángulo escaleno",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Dos triángulos rectángulos especiales uno junto al otro, un triángulo 45-45-90 con razón 1 a 1 a raíz cuadrada de 2 y un triángulo 30-60-90 con razón 1 a raíz cuadrada de 3 a 2",
            "caption": "El 45-45-90 usa 1:1:√2; el 30-60-90 usa 1:√3:2. Las razones nunca deben intercambiarse.",
          },
        },
        "sec-mistakes": {
          "h2": "Errores comunes al resolver triángulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce errores aparecen una y otra vez en los problemas 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Suponer que la hipotenusa es el doble del cateto: duplicar pertenece al triángulo 30-60-90. Para [[a = 5]] cm, duplicar da 10 cm, mientras que la hipotenusa correcta es [[5\\sqrt{2} \\approx 7.071]] cm. Correcto: [[c = a\\sqrt{2}]].",
                "Usar √3 en lugar de √2: √3 pertenece al triángulo 30-60-90, cuya razón es [[1 : \\sqrt{3} : 2]]. Un triángulo 45-45-90 siempre usa √2. Correcto: [[c = a\\sqrt{2}]].",
                "Olvidar que ambos catetos son iguales: los dos catetos siempre tienen la misma longitud, así que si un problema da un cateto, el otro cateto ya se conoce. Para [[a = 5]] cm, [[b = 5]] cm, no una incógnita nueva. Correcto: [[a = b]].",
                "Tratar la hipotenusa como uno de los catetos: la hipotenusa es el lado opuesto al ángulo de 90°, y es más larga que cualquiera de los catetos. Usarla como cateto en la fórmula del área da un área incorrecta. Correcto: identifica primero la hipotenusa por la marca del ángulo recto.",
                "Usar [[c = a\\sqrt{3}]]: esto mezcla los dos triángulos especiales. Para [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm no es ni la hipotenusa ni un cateto de este triángulo. Correcto: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Dividir la hipotenusa entre 2 en lugar de entre √2: dividir entre dos da el cateto corto del triángulo 30-60-90, no el cateto del triángulo 45-45-90. Para [[c = 10]] cm, dividir entre dos da 5 cm, mientras que el cateto correcto es [[5\\sqrt{2} \\approx 7.071]] cm. Correcto: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Olvidar elevar el cateto al cuadrado al calcular el área: el área necesita [[a^2]], no [[a]]. Usar [[A = \\frac{a}{2}]] para [[a = 6]] cm da 3 cm², mientras que el área correcta es [[\\frac{36}{2} = 18]] cm². Correcto: [[A = \\frac{a^2}{2}]].",
                "Sumar solo los dos catetos al calcular el perímetro: el perímetro necesita los tres lados. Sumar solo los dos catetos para [[a = 5]] cm da 10 cm, mientras que el perímetro verdadero es unos 17.071 cm. Correcto: [[P = a + b + c]].",
                "Confundir las respuestas exactas con las aproximaciones decimales: [[5\\sqrt{2}]] cm es exacto, mientras que 7.071 cm está redondeado. Escribir 7.071 cm como si fuera exacto pierde la precisión que mantiene el radical. Correcto: da primero la forma exacta y luego el decimal.",
                "Redondear √2 demasiado pronto: usar 1.41 para √2 en medio de un cálculo desplaza todos los pasos posteriores. Para [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm en lugar de 7.071 cm. Correcto: mantén √2 exacto durante el trabajo y redondea solo la respuesta final.",
                "Mezclar unidades de medida: un cateto en centímetros y una hipotenusa en metros no pueden combinarse directamente. Convierte todas las medidas a una sola unidad antes de calcular. Correcto: 0.5 m equivale a 50 cm; luego calcula en centímetros.",
                "Confundir las razones del triángulo 45-45-90 y del triángulo 30-60-90: las razones [[1 : 1 : \\sqrt{2}]] y [[1 : \\sqrt{3} : 2]] pertenecen a triángulos distintos. Intercambiarlas da una hipotenusa incorrecta por un amplio margen. Correcto: confirma los ángulos y luego elige la razón que les corresponda.",
                "Olvidar que el área necesita unidades cuadradas: un área de 18 cm es incorrecta por la unidad, aunque el número sea correcto. El área mide superficie, así que son 18 centímetros cuadrados. Correcto: [[A = 18]] cm².",
                "Usar las fórmulas para un triángulo rectángulo cualquiera: las fórmulas [[c = a\\sqrt{2}]] y [[A = \\frac{a^2}{2}]] solo valen cuando los ángulos son 45°, 45° y 90°. Un triángulo rectángulo con ángulos de 40° y 50° tiene una razón distinta. Correcto: confirma primero los ángulos y luego usa las fórmulas.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones prácticas de los triángulos 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La razón aparece dondequiera que un cuadrado se corte por la mitad.",
            },
            {
              "kind": "p",
              "text": "El uso más común es hallar la diagonal de un cuadrado. Una baldosa cuadrada de lado 30 cm tiene una diagonal de [[30\\sqrt{2} \\approx 42.426]] cm, que es la longitud por la que hay que cortar cuando una baldosa debe dividirse de esquina a esquina. Un marco de fotos cuadrado, una mesa cuadrada y una parcela cuadrada de terreno usan el mismo cálculo, porque todos los cuadrados se dividen en dos triángulos 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Los deberes de geometría y los ejercicios de trigonometría usan problemas 45-45-90 para comprobar si los estudiantes pueden identificar los catetos iguales, aplicar la razón y mantener respuestas exactas con radicales. Un estudiante que conoce un lado de ese triángulo puede hallar los demás sin medir, que es el sentido de la razón. Las demostraciones en clase usan el triángulo para mostrar cómo una razón fija convierte una medida en una descripción completa de una figura, y cómo cortar un cuadrado por la mitad produce el triángulo.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico, los planos de arquitectura y la geometría de la construcción usan relaciones 45-45-90 cuando un diseño exige un ángulo de 45°, como un tirante diagonal, un patrón de base cuadrada o una esquina cortada a 45°. Un constructor que conoce un lado de ese triángulo puede hallar la distancia diagonal sin medirla directamente. El trabajo en el plano de coordenadas usa la misma idea: un desplazamiento de 5 unidades a la derecha y 5 unidades hacia arriba cubre una distancia diagonal de [[5\\sqrt{2} \\approx 7.071]] unidades. Estos son usos realistas de la geometría en sí, no afirmaciones sobre tolerancias de ingeniería: el trabajo real de diseño añade límites de material y márgenes de seguridad más allá de los valores geométricos exactos de esta página.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Resuelve los seis problemas en papel antes de leer las respuestas.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Hallar la hipotenusa a partir de un cateto",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 tiene un cateto de [[a = 9]] cm. Halla la hipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hallar un cateto a partir de la hipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 tiene una hipotenusa de [[c = 14]] cm. Halla el cateto [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcular el área",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 tiene un cateto de [[a = 10]] cm. Halla el área [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Calcular el perímetro",
            },
            {
              "kind": "p",
              "text": "Un triángulo 45-45-90 tiene un cateto de [[a = 3]] cm. Halla el perímetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Hallar la diagonal de un cuadrado",
            },
            {
              "kind": "p",
              "text": "Un cuadrado tiene un lado de 12 cm. Halla la longitud de su diagonal.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Comprobar un triángulo 45-45-90 propuesto",
            },
            {
              "kind": "p",
              "text": "Un triángulo tiene catetos de 6 cm y 6 cm y una hipotenusa de [[6\\sqrt{2}]] cm. Usa el teorema de Pitágoras para comprobar que estas longitudes de lado forman un triángulo 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. La respuesta exacta es [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Ambos catetos miden [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². El área es exacta, sin redondeo.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Sumar los lados uno por uno da el mismo resultado: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. La diagonal es la hipotenusa del triángulo 45-45-90 formado al cortar el cuadrado por la mitad.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[a^2 + b^2 = 36 + 36 = 72]], y [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Los dos lados coinciden, y los catetos son iguales, así que el triángulo es un triángulo 45-45-90 con hipotenusa de unos 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea distinta con triángulos rectángulos, así que elige la herramienta que coincida con la medida que necesitas.",
      "relatedItems": [
        "Calculadora de Triángulo Rectángulo Especial",
        "Calculadora de Triángulo 30-60-90",
        "Calculadora de Lados de Triángulo Rectángulo",
        "Calculadora de Área de Triángulo Rectángulo",
        "Calculadora de Perímetro de Triángulo Rectángulo",
        "Calculadora del Teorema de Pitágoras",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es un triángulo 45-45-90?",
          "answer": "Un triángulo 45-45-90 es un triángulo rectángulo con ángulos de 45°, 45° y 90°. Se llama triángulo rectángulo isósceles porque sus dos catetos son iguales. Sus lados siempre siguen la razón fija [[1 : 1 : \\sqrt{2}]], así que conocer un lado basta para hallar todos los demás.",
        },
        {
          "question": "¿Cuál es la razón de lados de un triángulo 45-45-90?",
          "answer": "La razón de lados es [[a : b : c = 1 : 1 : \\sqrt{2}]], donde [[a]] y [[b]] son los catetos iguales y [[c]] es la hipotenusa. Eso significa [[b = a]] y [[c = a\\sqrt{2}]]. La razón es la misma para todos los triángulos 45-45-90, cualquiera que sea su tamaño.",
        },
        {
          "question": "¿Por qué ambos catetos son iguales?",
          "answer": "Los dos ángulos agudos miden 45° cada uno, y en cualquier triángulo los ángulos iguales se encuentran frente a lados iguales. El lado opuesto al ángulo A es el cateto [[a]], y el lado opuesto al ángulo B es el cateto [[b]], así que [[a = b]]. El triángulo también es simétrico respecto a la altura desde el ángulo recto hasta la hipotenusa.",
        },
        {
          "question": "¿Por qué la hipotenusa se multiplica por √2?",
          "answer": "El teorema de Pitágoras da [[a^2 + a^2 = c^2]], que se simplifica a [[2a^2 = c^2]]. Al tomar la raíz cuadrada se obtiene [[c = a\\sqrt{2}]]. El √2 aparece porque dos cuadrados iguales suman el doble de un cuadrado, así que la hipotenusa debe ser √2 veces un cateto.",
        },
        {
          "question": "¿Cómo hallo la hipotenusa a partir de un cateto?",
          "answer": "Multiplica el cateto por √2 usando [[c = a\\sqrt{2}]]. Para [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. Cualquiera de los catetos sirve, porque los catetos son iguales. Mantén la forma exacta [[5\\sqrt{2}]] cm cuando la pregunta pida un valor exacto.",
        },
        {
          "question": "¿Cómo hallo un cateto a partir de la hipotenusa?",
          "answer": "Divide la hipotenusa entre √2 usando [[a = \\frac{c}{\\sqrt{2}}]], o usa la forma racionalizada [[a = \\frac{c\\sqrt{2}}{2}]]. Para [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Ambos catetos tienen esta misma longitud, porque los catetos son iguales.",
        },
        {
          "question": "¿Cómo calculo el área de un triángulo 45-45-90?",
          "answer": "Usa [[A = \\frac{a^2}{2}]], donde [[a]] es un cateto. Los dos catetos actúan como base y altura, y el triángulo cubre la mitad del cuadrado formado por ellos. Para [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². El área siempre va en unidades cuadradas.",
        },
        {
          "question": "¿Cómo calculo su perímetro?",
          "answer": "Suma los tres lados con [[P = a + b + c]], que se simplifica a [[P = a(2 + \\sqrt{2})]]. Para [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. El perímetro es una medida lineal, así que la respuesta va en unidades simples, no en unidades cuadradas.",
        },
        {
          "question": "¿Por qué la diagonal de un cuadrado crea un triángulo 45-45-90?",
          "answer": "Una diagonal divide un cuadrado en dos triángulos, cada uno con dos lados del cuadrado y un ángulo de esquina de 90°. La diagonal también divide dos ángulos de esquina en 45° cada uno. Cada triángulo tiene, por tanto, ángulos de 45°, 45° y 90°, y su hipotenusa es la diagonal, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "¿Es √2 un número exacto o una aproximación?",
          "answer": "El símbolo √2 representa un número irracional exacto cuyo cuadrado es 2, pero su expansión decimal nunca termina, y empieza por 1.41421356. Cualquier decimal que escribas para él es una aproximación. Mantén la forma con radical en las respuestas exactas, y usa un decimal solo cuando se necesite un valor medido o redondeado.",
        },
        {
          "question": "¿Son semejantes todos los triángulos 45-45-90?",
          "answer": "Sí. Todos los triángulos 45-45-90 tienen los mismos tres ángulos, 45°, 45° y 90°, y la misma razón de lados [[1 : 1 : \\sqrt{2}]]. Dos de estos triángulos solo se diferencian en el tamaño, nunca en la forma. Ampliar o reducir uno multiplica todos los lados por el mismo factor, así que las proporciones se mantienen fijas.",
        },
        {
          "question": "¿Cuál es la diferencia entre los triángulos 45-45-90 y 30-60-90?",
          "answer": "Un triángulo 45-45-90 tiene ángulos de 45°, 45° y 90°, catetos iguales y razón [[1 : 1 : \\sqrt{2}]]. Un triángulo 30-60-90 tiene ángulos de 30°, 60° y 90°, ningún lado igual y razón [[1 : \\sqrt{3} : 2]]. Sus fórmulas no pueden intercambiarse, así que confirma siempre primero los ángulos.",
        },
      ],
    },
};
