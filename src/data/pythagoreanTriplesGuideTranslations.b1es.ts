// pythagoreanTriplesGuideTranslations.bes.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora de ternas pitagóricas: comprobar y generar ternas",
        "description": "Comprueba si tres números enteros forman una terna pitagórica y genera ternas con la fórmula de Euclides. Aprende sobre ternas primitivas, escalado y ejemplos resueltos.",
        "primaryKeyword": "Calculadora de ternas pitagóricas",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navegación por secciones",
      "tocItems": {
        "sec-intro": "Calculadora de ternas pitagóricas",
        "sec-calculate": "Comprobar o generar ternas pitagóricas con la calculadora",
        "sec-what": "¿Qué es una terna pitagórica?",
        "sec-pythagorean": "Comprender el teorema de Pitágoras",
        "sec-check": "Cómo comprobar si tres números forman una terna pitagórica",
        "sec-euclid": "Cómo generar ternas pitagóricas con la fórmula de Euclides",
        "sec-proof": "Demostración matemática de la fórmula de Euclides",
        "sec-primitive": "¿Qué es una terna pitagórica primitiva?",
        "sec-nonprimitive": "¿Qué es una terna pitagórica no primitiva?",
        "sec-conditions": "Condiciones para generar ternas pitagóricas primitivas",
        "sec-difference": "Diferencia entre ternas primitivas y no primitivas",
        "sec-scaling": "Cómo generar más ternas escalando las existentes",
        "sec-examples": "Ejemplos comunes de ternas pitagóricas",
        "sec-worked": "Ejemplos resueltos paso a paso con la calculadora",
        "sec-infinite": "¿Por qué hay infinitas ternas pitagóricas?",
        "sec-recognize": "Cómo reconocer una terna pitagórica sin adivinar",
        "sec-ordinary": "Ternas pitagóricas y triángulos rectángulos ordinarios",
        "sec-mistakes": "Errores comunes al usar la calculadora de ternas pitagóricas",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de ternas pitagóricas",
          "blocks": [
            {
              "kind": "p",
              "text": "Comprueba ternas de números enteros y genera ternas nuevas con la fórmula de Euclides.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagórica es un conjunto de tres números enteros positivos que pueden ser los lados de un triángulo rectángulo. Los dos números más cortos son los catetos, el número mayor es la hipotenusa y los tres valores satisfacen el teorema de Pitágoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "La Calculadora de ternas pitagóricas hace dos trabajos. En el modo de comprobación, introduces tres números enteros y verifica si forman una terna válida. En el modo de generación, introduces dos números enteros, [[m]] y [[n]], y construye una terna nueva con la fórmula de Euclides. Comprobar y generar son tareas distintas, y esta página explica ambas, paso a paso.",
            },
            {
              "kind": "p",
              "text": "El ejemplo más conocido es [[3]], [[4]] y [[5]]. Al elevar al cuadrado y sumar los catetos se obtiene [[3^2+4^2=9+16=25]], que es igual a [[5^2]]. Como los dos lados coinciden exactamente, [[(3, 4, 5)]] es una terna válida. Una terna primitiva es aquella cuyos tres números no comparten ningún factor común mayor que [[1]]; [[3]], [[4]] y [[5]] no tienen nada en común, por lo que [[(3, 4, 5)]] es primitiva. Las secciones siguientes muestran cómo comprobar cualquier terna de números, cómo generar ternas de cualquier tamaño y cómo distinguir las ternas primitivas de las copias escaladas.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Comprobar o generar ternas pitagóricas con la calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Dos modos, una página: comprueba un conjunto de números o construye una terna nueva.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Comprobar una terna pitagórica",
            },
            {
              "kind": "p",
              "text": "Introduce las tres longitudes de los lados como [[a]], [[b]] y [[c]], con [[c]] como el valor mayor. La calculadora eleva al cuadrado [[a]] y [[b]], suma los resultados, eleva al cuadrado [[c]] y compara los dos lados de la ecuación.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Cuando ambos lados son iguales, los tres números forman una terna pitagórica válida y el resultado así lo indica. Cuando son diferentes, los números no forman una terna y el resultado muestra los dos totales distintos para que veas cuánto se desvían. Las tres entradas deben ser números enteros positivos y las tres deben usar la misma unidad.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Generar ternas pitagóricas",
            },
            {
              "kind": "p",
              "text": "Introduce dos números enteros positivos, [[m]] y [[n]], con [[m]] mayor que [[n]]. La calculadora aplica la fórmula de Euclides para producir tres longitudes de lados enteras.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "El resultado es siempre una terna válida, porque la fórmula de Euclides está construida para satisfacer el teorema de Pitágoras. Los dos catetos pueden aparecer en cualquier orden, pero [[c]] es siempre la hipotenusa. Para usar la calculadora, elige un modo, introduce números válidos, haz clic en Calcular y lee el resultado con su desarrollo paso a paso. Haz clic en Restablecer para borrar los campos y empezar de nuevo.",
            },
          ],
        },
        "sec-what": {
          "h2": "¿Qué es una terna pitagórica?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tres números enteros positivos que cumplen el teorema de Pitágoras exactamente.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagórica es un conjunto de tres números enteros positivos, escritos como [[(a, b, c)]], que satisfacen la ecuación [[a^2+b^2=c^2]]. Aquí [[a]] y [[b]] son los catetos, los dos lados que se encuentran en el ángulo recto, y [[c]] es la hipotenusa, el lado opuesto al ángulo recto y siempre el más largo de los tres.",
            },
            {
              "kind": "p",
              "text": "La ecuación debe cumplirse exactamente. Un casi acierto no es una terna: si la suma de los cuadrados de los catetos difiere del cuadrado de la hipotenusa aunque sea en una unidad, los tres números no pasan la prueba. Esa igualdad estricta es lo que hace que una terna sea útil en construcción y carpintería, donde una comprobación [[3]]-[[4]]-[[5]] marca una esquina en escuadra sin error de medición.",
            },
            {
              "kind": "p",
              "text": "Los tres números deben ser enteros y positivos. Un triángulo rectángulo con longitudes de lados decimales, como catetos [[1.5]] y [[2]] con hipotenusa [[2.5]], satisface el teorema de Pitágoras pero no es una terna pitagórica, porque la definición exige números enteros. Del mismo modo, un triángulo con un lado irracional, como catetos [[1]] y [[1]] con hipotenusa [[\\sqrt{2}]], es un triángulo rectángulo pero no una terna. La palabra terna se reserva solo para soluciones enteras positivas.",
            },
            {
              "kind": "p",
              "text": "La terna [[(3, 4, 5)]] es el primer ejemplo natural. Sus catetos son [[3]] y [[4]], su hipotenusa es [[5]] y [[9+16=25]] confirma la ecuación. El orden de los catetos no importa: [[(4, 3, 5)]] describe el mismo triángulo. Lo que importa es que los dos números menores sean los catetos y el mayor sea la hipotenusa.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Cuadrados dibujados sobre los lados 3, 4 y 5 con áreas 9, 16 y 25, que muestran que 9 más 16 es igual a 25",
            "caption": "Los cuadrados sobre los lados 3, 4 y 5 tienen áreas 9, 16 y 25. Como 9 + 16 = 25, los números 3, 4 y 5 forman una terna pitagórica.",
          },
        },
        "sec-pythagorean": {
          "h2": "Comprender el teorema de Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema detrás de cada terna: los cuadrados de los catetos suman el cuadrado de la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El teorema de Pitágoras establece que en cualquier triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados. Con catetos [[a]] y [[b]] e hipotenusa [[c]], el teorema se escribe así.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una forma clara de verlo es a través de las áreas. Dibuja un cuadrado sobre cada lado del triángulo. El cuadrado sobre el cateto [[a]] tiene área [[a^2]], el cuadrado sobre el cateto [[b]] tiene área [[b^2]] y el cuadrado sobre la hipotenusa tiene área [[c^2]]. El teorema dice que las dos primeras áreas suman la tercera. Para el triángulo [[3]]-[[4]]-[[5]], los cuadrados tienen áreas [[9]], [[16]] y [[25]], y [[9+16=25]] muestra el equilibrio directamente.",
            },
            {
              "kind": "p",
              "text": "Esa imagen de áreas también explica por qué [[3]]-[[4]]-[[5]] es un triángulo rectángulo válido. Sus longitudes de lados satisfacen el equilibrio de áreas exactamente, así que el ángulo entre los catetos debe ser un ángulo recto. Cada terna pitagórica satisface el teorema, porque una terna se define por esa ecuación. Lo contrario no es cierto: muchos triángulos rectángulos tienen longitudes de lados que no son números enteros, así que satisfacen el teorema sin ser ternas. Usa la <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> cuando un triángulo tenga lados decimales o desconocidos en lugar de ternas de números enteros.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Triángulo rectángulo ABC con catetos a igual a 3 y b igual a 4, hipotenusa c igual a 5, un marcador de ángulo recto y la fórmula a al cuadrado más b al cuadrado igual a c al cuadrado",
            "caption": "Triángulo rectángulo ABC con catetos a = 3 y b = 4 e hipotenusa c = 5. El marcador de ángulo recto está en C, y 3 al cuadrado más 4 al cuadrado es igual a 5 al cuadrado.",
          },
        },
        "sec-check": {
          "h2": "Cómo comprobar si tres números forman una terna pitagórica",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho pasos cortos convierten cualquier terna de números enteros en un sí o un no claro.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el mayor de los tres valores.",
                "Asigna el valor mayor a [[c]], la hipotenusa.",
                "Asigna los otros dos valores a [[a]] y [[b]], los catetos.",
                "Eleva [[a]] al cuadrado.",
                "Eleva [[b]] al cuadrado.",
                "Suma los dos cuadrados.",
                "Eleva [[c]] al cuadrado.",
                "Compara los dos resultados: si son iguales, la terna es válida; si son distintos, no es una terna.",
              ],
            },
            {
              "kind": "p",
              "text": "Aquí tienes un ejemplo válido. Comprueba [[7]], [[24]] y [[25]]: el valor mayor es [[25]], así que es la hipotenusa. Eleva los catetos al cuadrado y suma.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Como [[625=625]], los dos lados coinciden, así que [[(7, 24, 25)]] es una terna pitagórica válida. También es primitiva, porque [[7]], [[24]] y [[25]] no comparten ningún factor común mayor que [[1]].",
            },
            {
              "kind": "p",
              "text": "Ahora un ejemplo no válido. Comprueba [[4]], [[5]] y [[6]]: el valor mayor es [[6]], así que es la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Como [[41]] no es igual a [[36]], los valores no forman una terna pitagórica. Los mismos ocho pasos funcionan con cualquier entrada entera positiva, grande o pequeña, así que la verificación exacta nunca depende de la memoria ni de la intuición.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Flujo paso a paso para comprobar 7, 24, 25: elevar los catetos al cuadrado da 49 y 576, sumarlos da 625, elevar la hipotenusa al cuadrado da 625 y confirmar la igualdad",
            "caption": "Comprobación de 7, 24, 25 paso a paso: 49 + 576 = 625 y 25 al cuadrado = 625, así que los dos lados coinciden y la terna es válida.",
          },
        },
        "sec-euclid": {
          "h2": "Cómo generar ternas pitagóricas con la fórmula de Euclides",
          "blocks": [
            {
              "kind": "p",
              "text": "Dos números enteros pequeños entran y sale una terna completa: eso es la fórmula de Euclides.",
            },
            {
              "kind": "p",
              "text": "La fórmula de Euclides construye una terna pitagórica a partir de dos números enteros positivos, [[m]] y [[n]], con [[m]] mayor que [[n]]. El parámetro [[m]] es el número entero mayor y [[n]] es el menor, y ambos deben ser números enteros. Las tres fórmulas producen los dos catetos y la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "La condición [[m>n>0]] importa. Si [[m]] es igual a [[n]], el primer cateto se vuelve cero, que no es un lado de triángulo. Si [[m]] es menor que [[n]], el primer cateto se vuelve negativo, lo que también es imposible. Los valores decimales de [[m]] y [[n]] tampoco son válidos aquí, porque la fórmula está diseñada para parámetros enteros que producen lados enteros.",
            },
            {
              "kind": "p",
              "text": "Prueba con [[m=2]] y [[n=1]]. El primer cateto es [[a=2^2-1^2=4-1=3]], el segundo cateto es [[b=2(2)(1)=4]] y la hipotenusa es [[c=2^2+1^2=4+1=5]]. El resultado es la terna [[(3, 4, 5)]]. Observa que los catetos generados pueden aparecer en cualquier orden: la fórmula puede devolver primero el cateto mayor o el menor, pero [[c]] es siempre la hipotenusa. La siguiente sección demuestra por qué estas fórmulas siempre satisfacen el teorema de Pitágoras.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Diagrama de flujo de la fórmula de Euclides con m igual a 3 y n igual a 2 que produce 5, 12 y 13",
            "caption": "La fórmula de Euclides con m = 3 y n = 2: m al cuadrado menos n al cuadrado es 5, 2mn es 12 y m al cuadrado más n al cuadrado es 13, lo que da la terna 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Demostración matemática de la fórmula de Euclides",
          "blocks": [
            {
              "kind": "p",
              "text": "Una demostración algebraica corta muestra por qué la fórmula de Euclides nunca puede fallar.",
            },
            {
              "kind": "p",
              "text": "Empieza con las dos fórmulas de los catetos, [[a=m^2-n^2]] y [[b=2mn]], y comprueba si [[a^2+b^2]] es igual a [[c^2]] cuando [[c=m^2+n^2]]. Sustituye las fórmulas en el lado izquierdo de la ecuación pitagórica.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Desarrolla ambos cuadrados. El primer cuadrado se desarrolla como [[m^4-2m^2n^2+n^4]] y el segundo como [[4m^2n^2]], así que la suma se convierte en la siguiente expresión.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina los términos centrales: [[-2m^2n^2+4m^2n^2]] es [[+2m^2n^2]]. La expresión es ahora un cuadrado perfecto disfrazado.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Factorízala. El resultado es el cuadrado de [[m^2+n^2]], que es exactamente [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Como [[c=m^2+n^2]], el lado derecho es [[c^2]] y la demostración está completa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "El paso clave es la cancelación parcial de los términos centrales: el [[-2m^2n^2]] del primer cuadrado y el [[+4m^2n^2]] del segundo dejan exactamente el [[+2m^2n^2]] necesario para completar el cuadrado. Como esto funciona para cualquier par de enteros [[m]] y [[n]] con [[m>n>0]], cada par genera una terna pitagórica auténtica. Sin embargo, la demostración no dice nada sobre la primitividad: si el resultado es primitivo depende de las condiciones adicionales de las secciones siguientes.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "¿Qué es una terna pitagórica primitiva?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una terna primitiva es una terna en su forma más simple, sin factor compartido.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagórica primitiva es aquella cuyas tres longitudes de lados no tienen ningún factor entero positivo común mayor que [[1]]. En símbolos, el máximo común divisor de los tres lados es [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "La terna [[(3, 4, 5)]] es primitiva porque [[\\gcd(3,4,5)=1]]: ningún entero mayor que [[1]] divide a los tres números. Lo mismo vale para [[(5, 12, 13)]], [[(8, 15, 17)]] y [[(7, 24, 25)]]. Cada una de ellas es una terna base que no se puede reducir a una terna de números enteros más pequeña por división.",
            },
            {
              "kind": "p",
              "text": "Primitiva no significa que la terna sea la más pequeña posible en todos los sentidos. Solo significa que los tres valores no comparten ningún factor común distinto de [[1]]. Una terna primitiva grande como [[(20, 21, 29)]] sigue siendo primitiva, porque [[20]], [[21]] y [[29]] no tienen ningún divisor común. La tabla siguiente compara los divisores de una terna primitiva y de una copia escalada.",
            },
          ],
          "table": {
            "headers": [
              "Terna",
              "Divisores comunes",
              "¿Primitiva?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Sí",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Sí",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Sí",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "No",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "No",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Dos triángulos rectángulos, 3-4-5 y 6-8-10, que muestran que el segundo es el doble del primero y que solo el primero es primitivo",
            "caption": "El triángulo 3-4-5 es primitivo, mientras que el 6-8-10 es el doble de grande en cada lado: mcd(3, 4, 5) = 1, pero mcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "¿Qué es una terna pitagórica no primitiva?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una terna no primitiva es una copia escalada de una primitiva.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagórica no primitiva es una terna cuyos tres valores comparten un factor entero común mayor que [[1]]. Sigue siendo una terna válida, porque satisface [[a^2+b^2=c^2]] exactamente. Simplemente no está en su forma más simple.",
            },
            {
              "kind": "p",
              "text": "Empieza con la terna primitiva [[(3, 4, 5)]] y multiplica cada lado por [[2]]. El resultado es [[(6, 8, 10)]] y la comprobación sigue funcionando: [[36+64=100]]. Multiplica por [[3]] en su lugar y el resultado es [[(9, 12, 15)]], con [[81+144=225]]. Ambas ternas escaladas son válidas y ninguna es primitiva, porque la primera comparte el factor [[2]] y la segunda comparte el factor [[3]].",
            },
            {
              "kind": "p",
              "text": "Encontrar el factor común es sencillo: toma el máximo común divisor de los tres lados. Para [[(6, 8, 10)]] es [[2]]; para [[(9, 12, 15)]] es [[3]]. Dividir cada lado por ese factor recupera la terna primitiva subyacente. Así, [[(6, 8, 10)]] dividido entre [[2]] devuelve [[(3, 4, 5)]] y [[(9, 12, 15)]] dividido entre [[3]] también devuelve [[(3, 4, 5)]]. Cada terna no primitiva se reduce a exactamente una terna primitiva de esta manera.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Condiciones para generar ternas pitagóricas primitivas",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula de Euclides produce una terna primitiva solo cuando se cumplen ambas condiciones de los parámetros.",
            },
            {
              "kind": "p",
              "text": "Dos condiciones sobre [[m]] y [[n]] deciden si la fórmula de Euclides produce una terna primitiva. Ambas deben cumplirse al mismo tiempo y ninguna por sí sola basta.",
            },
            {
              "kind": "h3",
              "text": "Condición 1: Parámetros coprimos",
            },
            {
              "kind": "p",
              "text": "Los parámetros deben ser coprimos, es decir, no deben compartir ningún factor común mayor que [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Cuando [[m]] y [[n]] comparten un factor, ese factor se filtra a los tres lados generados. Por ejemplo, [[m=4]] y [[n=2]] comparten el factor [[2]] y la fórmula produce [[(12, 16, 20)]], cuyos lados comparten todos el factor [[4]]. El resultado es no primitivo.",
            },
            {
              "kind": "h3",
              "text": "Condición 2: Paridad opuesta",
            },
            {
              "kind": "p",
              "text": "Un parámetro debe ser par y el otro impar. Cuando ambos parámetros son impares, los catetos y la hipotenusa generados salen todos pares, así que la terna comparte el factor [[2]] y no puede ser primitiva. Por ejemplo, [[m=3]] y [[n=1]] son coprimos pero ambos impares, y la fórmula produce [[(8, 6, 10)]], que es la terna no primitiva [[(6, 8, 10)]] con los catetos en un orden diferente.",
            },
            {
              "kind": "p",
              "text": "Tres pares de parámetros muestran cómo funcionan las condiciones juntas. El par [[(2, 1)]] es coprimo con paridad opuesta y da la terna primitiva [[(3, 4, 5)]]. El par [[(3, 2)]] es coprimo con paridad opuesta y da la terna primitiva [[(5, 12, 13)]]. El par [[(3, 1)]] es coprimo pero ambos son impares, así que da la terna no primitiva [[(6, 8, 10)]]. La coprimalidad sin paridad opuesta no basta, y la paridad opuesta sin coprimalidad tampoco basta.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Dos ejemplos de parámetros: m igual a 3 y n igual a 2 dan la terna primitiva 5-12-13, mientras que m igual a 3 y n igual a 1 dan la terna no primitiva 6-8-10",
            "caption": "Los parámetros m = 3, n = 2 son coprimos con paridad opuesta y dan la terna primitiva 5-12-13. Los parámetros m = 3, n = 1 son ambos impares y dan la terna no primitiva 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Diferencia entre ternas primitivas y no primitivas",
          "blocks": [
            {
              "kind": "p",
              "text": "El mismo teorema, distinta forma: una tabla resume toda la distinción.",
            },
            {
              "kind": "p",
              "text": "Ambos tipos de terna satisfacen el teorema de Pitágoras exactamente, así que ambos describen triángulos rectángulos auténticos. La diferencia está solo en los factores compartidos y en cómo se produjo la terna. Una terna primitiva es un patrón base; una terna no primitiva suele ser un múltiplo de una.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "Primitiva",
              "No primitiva",
            ],
            "rows": [
              [
                "Divisor común",
                "Solo [[1]]",
                "Mayor que [[1]]",
              ],
              [
                "Longitudes de los lados",
                "No se puede reducir a una terna entera más pequeña",
                "Se puede dividir por un factor común",
              ],
              [
                "Ejemplo",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Generación",
                "[[m]] y [[n]] coprimos con paridad opuesta",
                "Otras combinaciones de parámetros o múltiplos enteros",
              ],
              [
                "Relación",
                "Terna entera base",
                "A menudo un múltiplo de una terna primitiva",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Cómo generar más ternas escalando las existentes",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplica cada lado por el mismo número entero y la terna sigue siendo válida.",
            },
            {
              "kind": "p",
              "text": "Para cualquier entero positivo [[k]], multiplicar cada lado de una terna pitagórica [[(a, b, c)]] por [[k]] da otra terna pitagórica, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "La razón es álgebra sencilla. Elevar los catetos escalados al cuadrado da [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]] y factorizar [[k^2]] da [[k^2(a^2+b^2)]]. Como la terna original satisface [[a^2+b^2=c^2]], la suma escalada es igual a [[k^2c^2]], que es [[(kc)^2]]. Por tanto, la terna escalada satisface el teorema exactamente.",
            },
            {
              "kind": "p",
              "text": "Escalar [[(3, 4, 5)]] por [[2]] da [[(6, 8, 10)]] y escalar por [[3]] da [[(9, 12, 15)]]. Escalar [[(5, 12, 13)]] por [[2]] da [[(10, 24, 26)]] y escalar [[(8, 15, 17)]] por [[3]] da [[(24, 45, 51)]]. Cada resultado es una terna válida y cada uno es no primitivo, porque el multiplicador se convierte en un factor común de los tres lados.",
            },
            {
              "kind": "p",
              "text": "Un multiplicador entero conserva las longitudes de lados enteras, por eso el escalado es una forma fiable de construir ternas nuevas. Un multiplicador real arbitrario, como [[1.5]], mantiene el triángulo como triángulo rectángulo con la misma forma, pero los lados pueden dejar de ser números enteros: [[(3, 4, 5)]] escalado por [[1.5]] da [[(4.5, 6, 7.5)]], que es un triángulo rectángulo pero no una terna pitagórica. Ten en cuenta que la propia calculadora no tiene un campo de multiplicador separado; el escalado es un cálculo manual que haces con las ternas que comprueba o genera.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "La terna 3-4-5 multiplicada por 2, 3 y 4 para dar 6-8-10, 9-12-15 y 12-16-20",
            "caption": "Escalar 3-4-5 por 2, 3 y 4 da 6-8-10, 9-12-15 y 12-16-20. Cada conjunto escalado sigue siendo una terna pitagórica válida.",
          },
        },
        "sec-examples": {
          "h2": "Ejemplos comunes de ternas pitagóricas",
          "blocks": [
            {
              "kind": "p",
              "text": "Diez ternas que vale la pena conocer de memoria, cada una verificada.",
            },
            {
              "kind": "p",
              "text": "La tabla siguiente enumera diez ternas pitagóricas conocidas. Cada fila se ha comprobado con el teorema de Pitágoras y cada fila es primitiva salvo donde se indique un múltiplo escalado. Los catetos de cada fila se pueden enumerar en cualquier orden: [[(4, 3, 5)]] es el mismo triángulo que [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Primer cateto",
              "Segundo cateto",
              "Hipotenusa",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Tres triángulos rectángulos dibujados a escala: 3-4-5, 5-12-13 y 8-15-17, que muestran formas diferentes",
            "caption": "Tres ternas primitivas dibujadas a escala: 3-4-5, 5-12-13 y 8-15-17. Cada una tiene una forma diferente y ángulos agudos diferentes.",
          },
        },
        "sec-worked": {
          "h2": "Ejemplos resueltos paso a paso con la calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho ejemplos que cubren ambos modos: cuatro comprobaciones y cuatro generaciones.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Comprobar 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Introduce [[a=3]], [[b=4]] y [[c=5]] en el modo de comprobación. Eleva los catetos al cuadrado y suma: [[3^2+4^2=9+16=25]]. Eleva la hipotenusa al cuadrado: [[5^2=25]]. Como [[25=25]], el resultado es una terna válida. Es primitiva, porque [[3]], [[4]] y [[5]] no comparten ningún factor común.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Comprobar 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Introduce [[a=5]], [[b=12]] y [[c=13]]. Los catetos dan [[5^2+12^2=25+144=169]] y la hipotenusa da [[13^2=169]]. Como [[169=169]], el resultado es una terna válida. Es primitiva, porque [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Comprobar 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Introduce [[a=6]], [[b=8]] y [[c=10]]. Los catetos dan [[6^2+8^2=36+64=100]] y la hipotenusa da [[10^2=100]]. Como [[100=100]], el resultado es una terna válida. Es no primitiva, porque los tres lados comparten el factor [[2]]; dividir entre [[2]] devuelve la terna primitiva [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Comprobar 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Introduce [[a=7]], [[b=24]] y [[c=25]]. Los catetos dan [[7^2+24^2=49+576=625]] y la hipotenusa da [[25^2=625]]. Como [[625=625]], el resultado es una terna válida. Es primitiva, porque [[7]], [[24]] y [[25]] no comparten ningún factor común.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Generar con m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Introduce [[m=2]] y [[n=1]] en el modo de generación. El primer cateto es [[a=2^2-1^2=3]], el segundo cateto es [[b=2(2)(1)=4]] y la hipotenusa es [[c=2^2+1^2=5]]. El resultado es [[(3, 4, 5)]], una terna primitiva.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Generar con m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Introduce [[m=3]] y [[n=2]]. El primer cateto es [[a=3^2-2^2=9-4=5]], el segundo cateto es [[b=2(3)(2)=12]] y la hipotenusa es [[c=3^2+2^2=13]]. El resultado es [[(5, 12, 13)]], una terna primitiva, porque [[3]] y [[2]] son coprimos con paridad opuesta.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Generar con m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Introduce [[m=4]] y [[n=1]]. Las fórmulas dan [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] y [[c=4^2+1^2=17]]. Con los catetos en orden ascendente, el resultado es [[(8, 15, 17)]]. Es primitiva, porque [[4]] y [[1]] son coprimos con paridad opuesta.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Generar con m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Introduce [[m=3]] y [[n=1]]. Las fórmulas dan [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] y [[c=3^2+1^2=10]]. Con los catetos en orden ascendente, el resultado es [[(6, 8, 10)]]. Esta terna es no primitiva: [[3]] y [[1]] son coprimos, pero ambos son impares, así que la condición de paridad opuesta falla y todos los lados salen pares. Dividir entre [[2]] devuelve la terna primitiva [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "¿Por qué hay infinitas ternas pitagóricas?",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula de Euclides nunca se queda sin entradas, así que nunca se queda sin ternas.",
            },
            {
              "kind": "p",
              "text": "La fórmula de Euclides acepta cualquier par de enteros positivos [[m]] y [[n]] con [[m]] mayor que [[n]], y hay infinitos pares así. Cada par nuevo produce una terna y los distintos pares suelen producir ternas distintas. Los pares [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] y [[(5, 2)]] dan [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] y [[(20, 21, 29)]] respectivamente, y la lista sigue: [[(5, 4)]] da [[(9, 40, 41)]] y [[(6, 1)]] da [[(12, 35, 37)]]. Los valores mayores de [[m]] siguen produciendo ternas cada vez mayores sin fin.",
            },
            {
              "kind": "p",
              "text": "Los múltiplos enteros añaden aún más. Cada terna primitiva genera toda una familia de copias escaladas: [[(3, 4, 5)]] por sí sola da [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] y así sucesivamente para siempre. Entre los pares de parámetros sin fin y los múltiplos sin fin, la oferta de ternas pitagóricas es infinita. Observa la redacción cuidadosa: no todos los pares de parámetros producen una terna primitiva, pero todos los pares producen una terna válida y las primitivas también son infinitas.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Cómo reconocer una terna pitagórica sin adivinar",
          "blocks": [
            {
              "kind": "p",
              "text": "Algunos hábitos hacen que las ternas conocidas salten a la vista antes de calcular.",
            },
            {
              "kind": "p",
              "text": "Empieza tratando el valor mayor como la hipotenusa y comparando los valores al cuadrado, exactamente como describen los pasos de comprobación. Con práctica, las ternas comunes se vuelven familiares: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] y [[7]]-[[24]]-[[25]] aparecen tan a menudo en libros de texto y exámenes que reconocerlas ahorra tiempo de verdad.",
            },
            {
              "kind": "p",
              "text": "Busca a continuación los factores comunes. Si los tres números son pares, divide entre [[2]] y mira lo que queda. El conjunto [[6]]-[[8]]-[[10]] se reconoce al instante como el doble de [[3]]-[[4]]-[[5]] una vez que se detecta el factor [[2]]. Reducir una terna no primitiva a su forma primitiva suele revelar un patrón conocido escondido detrás de números mayores.",
            },
            {
              "kind": "p",
              "text": "Cuando necesitas una terna nueva en lugar de una comprobación, la fórmula de Euclides es la vía fiable: elige valores pequeños de [[m]] y [[n]] y genera. El reconocimiento es un atajo útil, pero la verificación exacta es siempre la última palabra. Una terna que parece conocida merece igualmente la prueba de elevar al cuadrado y comparar antes de confiar en ella.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Ternas pitagóricas y triángulos rectángulos ordinarios",
          "blocks": [
            {
              "kind": "p",
              "text": "Cada terna es un triángulo rectángulo, pero la mayoría de los triángulos rectángulos no son ternas.",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo puede tener longitudes de lados enteras, decimales o irracionales. Solo la primera categoría puede formar una terna pitagórica. La terna [[(3, 4, 5)]] es un triángulo rectángulo entero y cumple los requisitos. Un triángulo con catetos [[1]] y [[1]] e hipotenusa [[\\sqrt{2}]] es un triángulo rectángulo auténtico, ya que [[1+1=2]], pero su hipotenusa es irracional, así que no es una terna. Un triángulo con lados [[3]], [[4]] y [[5.1]] no cumple la ecuación, ya que [[9+16=25]] y [[5.1^2=26.01]], así que ni siquiera es un triángulo rectángulo.",
            },
            {
              "kind": "p",
              "text": "La distinción importa en la práctica. Los constructores usan [[3]]-[[4]]-[[5]] porque los números enteros son fáciles de medir con una cinta métrica. Un triángulo con lados [[3]], [[4]] y [[5.1]] parece casi recto pero se desvía en un ángulo visible, y ninguna comprobación con números enteros lo aprobaría. El teorema de Pitágoras se aplica a todos los triángulos rectángulos, sean cuales sean sus longitudes de lados. El término terna pitagórica se refiere solo a las soluciones enteras positivas, y ese significado restringido es lo que hace especiales a las ternas.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores comunes al usar la calculadora de ternas pitagóricas",
          "blocks": [
            {
              "kind": "p",
              "text": "Quince errores, cada uno con su corrección al lado.",
            },
            {
              "kind": "list",
              "items": [
                "Introducir [[c]] como un lado menor: la hipotenusa debe ser el valor mayor, así que asigna siempre el número más grande a [[c]] antes de comprobar.",
                "Olvidar elevar los valores al cuadrado: el teorema compara cuadrados, no las longitudes de los lados en sí, así que eleva [[a]], [[b]] y [[c]] al cuadrado primero.",
                "Sumar los lados en lugar de sus cuadrados: [[a+b]] es la suma incorrecta; la comprobación necesita [[a^2+b^2]] frente a [[c^2]].",
                "Usar [[a+b=c]] en lugar de [[a^2+b^2=c^2]]: la suma simple de dos lados nunca es igual a la hipotenusa en un triángulo rectángulo.",
                "Confundir la hipotenusa con un cateto: la hipotenusa se encuentra frente al ángulo recto y es siempre el lado más largo.",
                "Usar valores decimales y esperar una terna entera: los decimales pueden formar un triángulo rectángulo, pero solo los enteros positivos forman una terna pitagórica.",
                "Introducir longitudes de lados cero o negativas: las longitudes de los lados deben ser positivas y las entradas cero o negativas se rechazan.",
                "Usar [[m]] igual a [[n]]: el primer cateto se convierte en [[m^2-n^2=0]], que no es un lado de triángulo.",
                "Usar [[m]] menor que [[n]]: el primer cateto se vuelve negativo, lo cual es imposible para una longitud de lado.",
                "Introducir valores decimales de [[m]] y [[n]]: la fórmula de Euclides necesita parámetros enteros positivos para producir lados enteros.",
                "Suponer que cada terna generada es primitiva: la generación solo garantiza una terna válida y la primitividad exige parámetros coprimos con paridad opuesta.",
                "Suponer que todas las ternas primitivas son múltiplos de [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] y [[8]]-[[15]]-[[17]] son ternas primitivas independientes, no múltiplos de [[3]]-[[4]]-[[5]].",
                "Olvidar la condición de paridad opuesta: dos parámetros impares producen una terna par y no primitiva, como muestran [[m=3]] y [[n=1]].",
                "Olvidar comprobar los factores comunes: una terna como [[(12, 16, 20)]] parece nueva hasta que el factor compartido [[4]] revela que es una [[(3, 4, 5)]] escalada.",
                "Confundir un triángulo rectángulo válido con una terna pitagórica entera: un triángulo con lados irracionales o decimales puede satisfacer el teorema sin ser una terna.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho problemas, cuatro comprobaciones y cuatro generaciones, con soluciones completas.",
            },
            {
              "kind": "list",
              "items": [
                "Comprueba si [[8]], [[15]] y [[17]] forman una terna. Respuesta: sí, primitiva. [[8^2+15^2=64+225=289=17^2]] y los tres números no comparten ningún factor común.",
                "Comprueba si [[6]], [[8]] y [[11]] forman una terna. Respuesta: no. [[6^2+8^2=36+64=100]], pero [[11^2=121]], así que los dos lados difieren.",
                "Determina si [[9]], [[12]] y [[15]] son primitivos. Respuesta: no primitiva. Los números comparten el factor [[3]] y dividir entre [[3]] da la terna primitiva [[(3, 4, 5)]].",
                "Genera una terna con [[m=2]] y [[n=1]]. Respuesta: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Genera una terna con [[m=3]] y [[n=2]]. Respuesta: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Genera una terna con [[m=4]] y [[n=1]]. Respuesta: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], con los catetos ordenados de forma ascendente.",
                "Determina si [[m=3]] y [[n=1]] producen una terna primitiva. Respuesta: no. Los parámetros son coprimos pero ambos impares, así que el resultado es la terna no primitiva [[(6, 8, 10)]].",
                "Encuentra el multiplicador común entre [[3]]-[[4]]-[[5]] y [[15]]-[[20]]-[[25]]. Respuesta: [[5]]. Cada lado de [[(3, 4, 5)]] multiplicado por [[5]] da [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea distinta con triángulos rectángulos, así que elige la herramienta que corresponda a la medida que necesitas.",
      "relatedItems": [
        "Calculadora de triángulos rectángulos",
        "Calculadora del teorema de Pitágoras",
        "Calculadora de triángulo 3-4-5",
        "Calculadora de triángulo 5-12-13",
        "Calculadora de lados de triángulo rectángulo",
        "Calculadora de triángulos rectángulos especiales",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Qué es una terna pitagórica?",
          "answer": "Una terna pitagórica es un conjunto de tres números enteros positivos, escritos como [[(a, b, c)]], que satisfacen la ecuación [[a^2+b^2=c^2]]. Los dos números menores son los catetos de un triángulo rectángulo y el mayor es la hipotenusa. El ejemplo más conocido es [[(3, 4, 5)]], ya que [[9+16=25]].",
        },
        {
          "question": "¿Cómo funciona la calculadora de ternas pitagóricas?",
          "answer": "Tiene dos modos. El modo de comprobación toma tres números enteros y verifica si se cumple [[a^2+b^2=c^2]]. El modo de generación toma dos enteros, [[m]] y [[n]], y aplica la fórmula de Euclides para construir una terna nueva. Ambos modos muestran el desarrollo paso a paso junto con el resultado.",
        },
        {
          "question": "¿Cómo puedo comprobar si tres números forman una terna pitagórica?",
          "answer": "Toma el valor mayor como la hipotenusa [[c]] y los otros dos como los catetos [[a]] y [[b]]. Eleva los tres al cuadrado, suma [[a^2+b^2]] y compara con [[c^2]]. Totales iguales significan una terna válida; totales distintos significan que los números no forman una.",
        },
        {
          "question": "¿Qué es la fórmula de Euclides?",
          "answer": "La fórmula de Euclides genera una terna pitagórica a partir de dos enteros positivos, [[m]] y [[n]], con [[m]] mayor que [[n]]. Las fórmulas son [[a=m^2-n^2]], [[b=2mn]] y [[c=m^2+n^2]]. Cada par produce una terna válida, como muestra la demostración algebraica de esta página.",
        },
        {
          "question": "¿Qué son m y n en la fórmula de la terna pitagórica?",
          "answer": "Los valores [[m]] y [[n]] son parámetros enteros positivos de la fórmula de Euclides. El valor [[m]] es el entero mayor y [[n]] es el menor, con [[m>n>0]]. Los valores mayores de [[m]] producen ternas mayores y los distintos pares producen ternas distintas.",
        },
        {
          "question": "¿Qué es una terna pitagórica primitiva?",
          "answer": "Una terna primitiva es aquella cuyas tres longitudes de lados no comparten ningún factor común mayor que [[1]], así que [[\\gcd(a,b,c)=1]]. Algunos ejemplos son [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] y [[(7, 24, 25)]]. Las ternas primitivas no se pueden reducir a una terna de números enteros más pequeña.",
        },
        {
          "question": "¿Qué es una terna pitagórica no primitiva?",
          "answer": "Una terna no primitiva es una terna válida cuyos tres lados comparten un factor común mayor que [[1]]. Por ejemplo, [[(6, 8, 10)]] es el doble de [[(3, 4, 5)]] y [[(9, 12, 15)]] es el triple de [[(3, 4, 5)]]. Dividir entre el factor común devuelve la terna primitiva subyacente.",
        },
        {
          "question": "¿Cómo sé si una terna generada es primitiva?",
          "answer": "Comprueba las dos condiciones de los parámetros: [[m]] y [[n]] deben ser coprimos, así que [[\\gcd(m,n)=1]], y deben tener paridad opuesta, es decir, uno es par y el otro es impar. Si se cumplen ambas condiciones, la terna generada es primitiva. Si falla alguna de ellas, es no primitiva.",
        },
        {
          "question": "¿Pueden los números decimales formar una terna pitagórica?",
          "answer": "No. Una terna pitagórica se define como tres enteros positivos, así que las longitudes de lados decimales nunca cumplen los requisitos. Los decimales pueden formar igualmente un triángulo rectángulo que satisface [[a^2+b^2=c^2]], como los catetos [[1.5]] y [[2]] con hipotenusa [[2.5]], pero ese triángulo no es una terna pitagórica.",
        },
        {
          "question": "¿Hay infinitas ternas pitagóricas?",
          "answer": "Sí. La fórmula de Euclides acepta infinitos pares de enteros [[(m, n)]] y cada par produce una terna. Los múltiplos enteros añaden más: cada terna primitiva genera una familia infinita de copias escaladas. La oferta de ternas nunca se agota.",
        },
        {
          "question": "¿Se puede generar cualquier terna pitagórica con la fórmula de Euclides?",
          "answer": "Sí, cada terna primitiva procede de la fórmula de Euclides con parámetros coprimos adecuados de paridad opuesta y cada terna no primitiva es un múltiplo de una primitiva. Por tanto, a cada terna pitagórica se puede llegar mediante la fórmula de Euclides más el escalado por un entero positivo.",
        },
        {
          "question": "¿Cuál es la terna pitagórica más común?",
          "answer": "La terna [[(3, 4, 5)]] es la más común y la más conocida. Es la terna primitiva más pequeña, es fácil de recordar y los constructores y carpinteros la han usado durante siglos para comprobar esquinas en escuadra. Las siguientes más conocidas son [[(5, 12, 13)]] y [[(8, 15, 17)]].",
        },
      ],
    },
};
