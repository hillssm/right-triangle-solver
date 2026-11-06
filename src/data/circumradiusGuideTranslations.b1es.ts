// circumradiusGuideTranslations.bes.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B1_ES = {
  "es": {
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-intro": "Calculadora del circunradio de un triángulo rectángulo",
        "sec-calculate": "Cómo calcular el circunradio de un triángulo rectángulo",
        "sec-what-circumradius": "¿Qué es el circunradio de un triángulo rectángulo?",
        "sec-circumcircle": "¿Qué es un circuncírculo en la geometría del triángulo rectángulo?",
        "sec-formula": "Fórmula del circunradio de un triángulo rectángulo",
        "sec-why-diameter": "¿Por qué la hipotenusa es el diámetro del circuncírculo?",
        "sec-circumcenter": "¿Qué es el circuncentro de un triángulo rectángulo?",
        "sec-how-to-use": "Cómo usar la calculadora del circunradio de un triángulo rectángulo",
        "sec-step-example": "Ejemplo paso a paso para hallar el circunradio",
        "sec-diagram": "Diagrama del circuncírculo de un triángulo rectángulo explicado",
        "sec-proof": "¿Por qué funciona la fórmula del circunradio?",
        "sec-thales": "El teorema de Tales y el circuncírculo",
        "sec-examples": "Ejemplos resueltos de cálculo del circunradio de un triángulo rectángulo",
        "sec-legs-known": "Cómo hallar el circunradio cuando se conocen los dos catetos",
        "sec-diameter": "Relación entre el circunradio y el diámetro",
        "sec-vs-inradius": "Circunradio frente a inradio de un triángulo rectángulo",
        "sec-pythagoras": "Relación entre el circunradio y el teorema de Pitágoras",
        "sec-verify": "Cómo verificar el cálculo del circunradio",
        "sec-properties": "Propiedades importantes del circunradio en triángulos rectángulos",
        "sec-mistakes": "Errores comunes al calcular el circunradio",
        "sec-applications": "Aplicaciones prácticas del circunradio",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explora calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora del circunradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Halla el circunradio de un triángulo rectángulo con una sola división: divide la hipotenusa entre dos.",
            },
            {
              "kind": "p",
              "text": "El circunradio es el radio del círculo que pasa por los tres vértices del triángulo, llamado circuncírculo. La hipotenusa c es el lado opuesto al ángulo recto, y es la única medida que necesita esta calculadora, porque la hipotenusa también es el diámetro del circuncírculo. La fórmula es [[R = \\frac{c}{2}]], donde [[R]] es el circunradio y [[c]] es la hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, si [[c = 10]] cm, entonces [[R = \\frac{10}{2} = 5]] cm. Esos 5 cm son la distancia desde el centro del circuncírculo hasta cada vértice del triángulo. La misma distancia llega al vértice A, al vértice B y al vértice C, y eso es justamente lo que hace que el círculo pase por los tres.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Cómo calcular el circunradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página tiene un solo campo de entrada, para la hipotenusa c. La hipotenusa es el lado opuesto al ángulo recto, y también es el lado más largo del triángulo. Mídela de un extremo al otro, en la unidad que estés usando, e introduce ese único número.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa por sí sola basta, porque el circunradio no depende de nada más. Por eso la calculadora no necesita una segunda ni una tercera entrada.",
            },
            {
              "kind": "p",
              "text": "Introduce una longitud positiva. Una hipotenusa de cero o un número negativo no describe ningún triángulo real, y la calculadora no tendría nada sensato que dividir entre dos. Mantén la unidad coherente con tu problema: si c está en centímetros, la respuesta está en centímetros, y si c está en metros, la respuesta está en metros.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular el circunradio R para ver el resultado, y usa Restablecer para limpiar el campo antes de un nuevo problema. Lee la respuesta como un radio, no como un diámetro. Si la calculadora muestra 5 cm para una hipotenusa de 10 cm, el círculo completo mide 10 cm de lado a lado, y 5 cm es la distancia desde su centro hasta su borde.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "¿Qué es el circunradio de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "El circunradio de un triángulo rectángulo es el radio de su circuncírculo, el círculo trazado por los tres vértices. Toma el triángulo ABC con el ángulo recto en C. Traza un círculo que pase exactamente por A, B y C. La distancia desde el centro de ese círculo hasta cualquiera de los tres vértices es el circunradio, escrito [[R]].",
            },
            {
              "kind": "p",
              "text": "El centro del círculo se llama circuncentro, escrito [[O]]. En un triángulo rectángulo, [[O]] se encuentra en el punto medio de la hipotenusa AB. Como [[O]] es el centro, las distancias desde [[O]] hasta los tres vértices son todas iguales, así que [[AO = BO = CO = R]]. Un solo número, [[R]], describe las tres distancias a la vez.",
            },
            {
              "kind": "p",
              "text": "Un ejemplo sencillo lo deja claro. En un triángulo de 6-8-10, la hipotenusa es 10 cm, así que el circunradio es 5 cm. El centro está a 5 cm de A, a 5 cm de B y a 5 cm de C. Los catetos, de 6 cm y 8 cm, son lados del triángulo, no radios, y ninguno de ellos es igual al circunradio en este caso.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Triángulo rectángulo ABC dentro de su circuncírculo con el centro O en el punto medio de la hipotenusa AB",
            "caption": "El triángulo ABC dentro de su circuncírculo: O es el centro, y AO, BO y CO son cada uno iguales a R.",
          },
        },
        "sec-circumcircle": {
          "h2": "¿Qué es un circuncírculo en la geometría del triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un circuncírculo es un círculo que pasa por cada vértice de un polígono. Para un triángulo, eso significa que el círculo pasa por las tres esquinas y no se le exige nada más. Cada triángulo tiene exactamente un circuncírculo, porque tres puntos no colineales determinan un solo círculo.",
            },
            {
              "kind": "p",
              "text": "En un triángulo rectángulo, el circuncírculo tiene una forma especial. El triángulo encaja dentro del círculo con su hipotenusa extendida en línea recta por el medio, desde un lado del círculo hasta el otro. El tercer vértice, el vértice del ángulo recto C, se encuentra sobre el círculo entre ellos. Ninguna parte del triángulo sobresale más allá del círculo, y el círculo es el más pequeño que puede pasar por los tres vértices.",
            },
            {
              "kind": "p",
              "text": "El circuncírculo es diferente del incírculo. El incírculo se encuentra dentro del triángulo y toca los tres lados desde dentro. El circuncírculo rodea el triángulo y lo toca solo en los tres vértices. Confundir los dos círculos es la fuente más común de confusión en esta página, y la sección de comparación siguiente los coloca lado a lado.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Fórmula del circunradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula del circunradio de un triángulo rectángulo es lo bastante corta para recordarla de un vistazo:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[R]] es el circunradio, el radio del circuncírculo, y [[c]] es la hipotenusa completa, el lado opuesto al ángulo recto. La fórmula dice: toma la hipotenusa y divídela entre dos.",
            },
            {
              "kind": "p",
              "text": "El cálculo tiene dos pasos. Primero, identifica la hipotenusa correctamente. Es el lado opuesto al ángulo recto, y siempre es el lado más largo. Segundo, divide su longitud entre dos. No hay que elevar al cuadrado, ni hallar una raíz cuadrada, ni buscar antes una segunda medida, siempre que la hipotenusa ya se conozca.",
            },
            {
              "kind": "p",
              "text": "La razón por la que funciona la división es que la hipotenusa es el diámetro del circuncírculo. Un radio siempre es la mitad de un diámetro, así que [[R = \\frac{D}{2}]], donde [[D]] es el diámetro. En un triángulo rectángulo [[D = c]], así que al sustituir se obtiene [[R = \\frac{c}{2}]]. La fórmula es en realidad la conocida relación entre radio y diámetro, aplicada a un diámetro que resulta ser un lado del triángulo.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo general, uno que no sea necesariamente rectángulo, el circunradio sigue la fórmula [[R = \\frac{abc}{4A}]], donde [[a]], [[b]] y [[c]] son los tres lados y [[A]] es el área del triángulo. Para un triángulo rectángulo se simplifica a [[R = \\frac{c}{2}]], porque el área es [[A = \\frac{ab}{2}]]. Usa la fórmula general solo para triángulos que no sean rectángulos.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "¿Por qué la hipotenusa es el diámetro del circuncírculo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Esta es la idea en torno a la que gira toda la página, así que merece una mirada atenta. Toma el triángulo rectángulo ABC con el ángulo recto en C, y sea [[O]] el punto medio de la hipotenusa AB. La afirmación es que [[O]] está a la misma distancia de los tres vértices, lo que lo convierte en el centro del circuncírculo, y que AB, al pasar por [[O]] con ambos extremos sobre el círculo, es un diámetro.",
            },
            {
              "kind": "p",
              "text": "El dato clave es la propiedad del punto medio de un triángulo rectángulo: el punto medio de la hipotenusa está a la misma distancia de los tres vértices. En símbolos, [[OA = OB = OC]]. Como [[O]] es el punto medio de AB, [[OA]] y [[OB]] son cada uno la mitad de la hipotenusa, así que [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "¿Por qué [[OC]] es igual a la mitad de la hipotenusa? Una forma de verlo es completar el rectángulo. Traza una copia del triángulo ABC girada media vuelta alrededor de [[O]], de modo que los dos triángulos juntos formen un rectángulo con AB como una diagonal. Las diagonales de un rectángulo son iguales y se bisecan entre sí, así que [[OC = \\frac{c}{2}]] también.",
            },
            {
              "kind": "p",
              "text": "Una vez establecido que [[OA = OB = OC]], el resto sigue. Un círculo con centro en [[O]] y radio [[\\frac{c}{2}]] pasa por A, B y C, así que es el circuncírculo, [[O]] es el circuncentro y [[\\frac{c}{2}]] es el circunradio. Como A y B son extremos opuestos de una recta que pasa por el centro, AB es un diámetro, así que [[AB = 2R]], lo que es [[c = 2R]] y por tanto [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "La hipotenusa AB mostrada como el diámetro del circuncírculo con AO y OB iguales a R",
            "caption": "La hipotenusa AB es el diámetro: AO y OB son cada uno iguales a R, y AB es igual a 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "¿Qué es el circuncentro de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "El circuncentro de un triángulo es el punto que está a la misma distancia de los tres vértices, y es el centro del circuncírculo. Se encuentra donde se cortan las mediatrices de los lados.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo, las mediatrices se cortan en un punto que puedes hallar sin trazarlas: el punto medio de la hipotenusa. Biseca AB y tendrás el circuncentro [[O]]. Bisecar cualquiera de los catetos da una recta que pasa por el mismo punto, lo que sirve como comprobación cuando construyes el centro con compás y regla.",
            },
            {
              "kind": "p",
              "text": "El circuncentro se encuentra sobre la propia hipotenusa, exactamente a mitad de camino. Esa es la característica especial de los triángulos rectángulos. En un triángulo acutángulo, los tres ángulos son menores de 90 grados y el circuncentro cae dentro del triángulo. El triángulo rectángulo es el caso límite, con el centro situado en el borde del triángulo, sobre su lado más largo.",
            },
            {
              "kind": "p",
              "text": "El circuncentro no es el vértice del ángulo recto. El vértice C es un punto del círculo, a distancia [[R]] de [[O]], mientras que [[O]] es el centro. Confundir los dos es un error común, porque C es la esquina más llamativa del triángulo. Recuerda que el centro debe estar a la misma distancia de A, B y C, y C no está a la misma distancia de A y de B a menos que el triángulo sea isósceles de una forma particular, así que C no puede ser el centro en general.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "El circuncentro O en el punto medio de la hipotenusa, a la misma distancia de los tres vértices",
            "caption": "O es el punto medio de AB, con OA, OB y OC todos iguales a R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Cómo usar la calculadora del circunradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve pasos cortos te llevan desde un triángulo etiquetado hasta una respuesta comprobada. Los catetos no se necesitan en ningún momento, porque la hipotenusa por sí sola determina el circunradio.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Localiza el ángulo recto, normalmente marcado con un pequeño cuadrado en el vértice C.",
                "Identifica el lado opuesto al ángulo recto; ese lado es la hipotenusa c.",
                "Confirma que este lado es el lado más largo del triángulo. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Elige la unidad adecuada y convierte todas las medidas para que usen esa unidad.",
                "Introduce la longitud de la hipotenusa en el campo Hipotenusa c.",
                "Haz clic en Calcular el circunradio R y lee el resultado.",
                "Comprueba el resultado: debe ser positivo, estar en la misma unidad que c y ser exactamente la mitad de c.",
                "Usa Restablecer cuando empieces otro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Si tu problema da los dos catetos en lugar de la hipotenusa, halla primero c con el teorema de Pitágoras, [[c = \\sqrt{a^2 + b^2}]], y luego introduce ese valor. La <a href=\"/right-triangle-side-calculator/\">calculadora de lados de un triángulo rectángulo</a> puede hallar la hipotenusa que falta, y la sección sobre los catetos siguiente desarrolla un ejemplo completo.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Ejemplo paso a paso para hallar el circunradio",
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm. Los tres pasos siguientes muestran todo el desarrollo, sin saltar nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[R = \\frac{c}{2}]].",
                "Sustituye el valor conocido: [[R = \\frac{10}{2}]].",
                "Divide: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta 5 cm significa que el circuncírculo tiene un radio de 5 cm. Su centro, el punto medio de la hipotenusa, está a 5 cm de cada vértice del triángulo, y el círculo pasa por los tres vértices. El diámetro del círculo es 10 cm, igual que la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Verifica la respuesta con la relación del diámetro, [[2R = c]]. Duplicar el radio da [[2 \\times 5 = 10]] cm, lo que coincide exactamente con la hipotenusa. Si duplicar tu respuesta no devuelve la hipotenusa con la que empezaste, la división salió mal en algún punto, y la comprobación lo detecta de inmediato.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Ejemplo resuelto con hipotenusa de 10 cm y circunradio de 5 cm dentro del circuncírculo",
            "caption": "Ejemplo resuelto: c = 10 cm da R = 5 cm, y 2 por 5 cm es igual a 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Diagrama del circuncírculo de un triángulo rectángulo explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b, y el lado AB es la hipotenusa c. El punto [[O]] marca el punto medio de AB, y un círculo con centro en [[O]] pasa por A, B y C.",
            },
            {
              "kind": "p",
              "text": "Lee el diagrama en este orden. Empieza en A, sigue por el cateto a hasta C, luego por el cateto b hasta B, y vuelve por la hipotenusa desde B hasta A, pasando por [[O]] en el camino. Los segmentos desde [[O]] hasta A, B y C son todos radios, cada uno etiquetado [[R]].",
            },
            {
              "kind": "p",
              "text": "El segmento AB pasa por el centro [[O]] y tiene ambos extremos sobre el círculo, que es la definición de un diámetro. Por eso AB se dibuja como una recta que cruza el centro del círculo, y no como una cuerda desplazada hacia un lado. El ángulo recto en C se encuentra sobre el propio círculo, que es la imagen que describe el teorema de Tales.",
            },
          ],
        },
        "sec-proof": {
          "h2": "¿Por qué funciona la fórmula del circunradio?",
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración usa el punto medio de la hipotenusa y el hecho de que está a la misma distancia de los tres vértices. Sea [[M]] el punto medio de AB en el triángulo rectángulo ABC, con el ángulo recto en C. Entonces [[AM = BM = \\frac{c}{2}]] por la definición de punto medio. El paso que necesita demostración es [[MA = MB = MC]], la afirmación de que la tercera distancia coincide con las dos primeras.",
            },
            {
              "kind": "p",
              "text": "Una forma clara de demostrarlo es prolongar la mediana CM hasta un punto D de modo que [[MD = MC]], y unir D con A y B. El cuadrilátero ACBD tiene las diagonales AB y CD que se bisecan entre sí en [[M]], así que es un paralelogramo. Su ángulo en C es un ángulo recto, y un paralelogramo con un ángulo recto es un rectángulo, así que ACBD es un rectángulo.",
            },
            {
              "kind": "p",
              "text": "Las diagonales de un rectángulo son iguales, así que [[CD = AB = c]]. Como [[M]] biseca CD, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Eso coincide con [[MA]] y [[MB]], así que [[MA = MB = MC = \\frac{c}{2}]]. El punto [[M]] está a la misma distancia de A, B y C, lo que lo convierte en el circuncentro, y la distancia común [[\\frac{c}{2}]] es el circunradio. Por tanto [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "El teorema de Tales y el circuncírculo",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de Tales afirma que un ángulo subtendido por un diámetro en un punto del círculo es un ángulo recto. En la imagen, AB es un diámetro de un círculo y C es cualquier punto del círculo distinto de A o B. Entonces el ángulo ACB mide 90 grados. El teorema lleva el nombre de Tales de Mileto, a quien se atribuye la primera demostración conocida.",
            },
            {
              "kind": "p",
              "text": "El recíproco es lo que usa esta página: si un triángulo tiene un ángulo recto, su hipotenusa puede tratarse como el diámetro de un círculo que pasa por los tres vértices. Toma el triángulo ABC con el ángulo C igual a 90 grados. El recíproco dice que C se encuentra sobre el círculo con diámetro AB, así que ese círculo es el circuncírculo del triángulo, y su radio es la mitad de AB.",
            },
            {
              "kind": "p",
              "text": "Las dos direcciones juntas dan una prueba completa. Un punto C sobre el círculo con diámetro AB siempre da un ángulo recto en C, y un ángulo recto en C siempre coloca a C sobre ese círculo.",
            },
            {
              "kind": "p",
              "text": "El teorema también explica la posición del circuncentro. El centro del círculo es el punto medio de su diámetro, y el diámetro es la hipotenusa, así que el centro es el punto medio de la hipotenusa. No hace falta saber nada más sobre el triángulo. Por eso la calculadora pide un solo número.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagrama del teorema de Tales con el diámetro AB y el punto C sobre el círculo formando un ángulo recto",
            "caption": "Teorema de Tales: AB es el diámetro, C está sobre el círculo y el ángulo C mide 90 grados.",
          },
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos de cálculo del circunradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Ejemplo 1: Número entero básico",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 10]] cm, la fórmula da [[R = \\frac{10}{2} = 5]] cm. El circuncírculo tiene un diámetro de 10 cm y un radio de 5 cm, y su centro es el punto medio de la hipotenusa, a 5 cm de cada vértice.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Medida mayor",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Los números mayores no cambian nada del método: divide la hipotenusa entre dos y conserva la unidad. Un círculo de 24 m de lado a lado tiene un radio de 12 m.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Medida decimal",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Una hipotenusa decimal da un circunradio decimal, lo cual es normal. Compruébalo duplicando: [[2 \\times 3.75 = 7.5]] cm, lo que devuelve la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Hipotenusa impar",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Un número entero impar dividido entre dos da un número que termina en .5. Este es el triángulo 5-12-13, cuyos catetos son 5 cm y 12 cm, ya que [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medida en milímetros",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Las unidades pequeñas funcionan igual, y mantener la unidad en milímetros en todo momento evita cualquier conversión. En centímetros, la misma respuesta es 9 cm, ya que 90 mm equivalen a 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Medida fraccionaria",
            },
            {
              "kind": "p",
              "text": "Dado [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, que es 3.75 ft. Dividir entre 2 significa multiplicar el denominador por 2, así que el denominador crece de 2 a 4. La forma decimal, 3.75 ft, es la misma respuesta escrita de otra manera.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Al convertir a centímetros, 0.6 m equivalen a 60 cm, porque 1 m son 100 cm. Cualquiera de las dos unidades es correcta, pero la respuesta debe indicar cuál usa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Medida decimal grande",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Duplicar 62.8 devuelve 125.6, lo que confirma la división.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Cómo hallar el circunradio cuando se conocen los dos catetos",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página pide la hipotenusa, pero muchos problemas dan los dos catetos. En ese caso, halla primero la hipotenusa con el teorema de Pitágoras y luego divídela entre dos. Los dos pasos se combinan en una sola fórmula, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], donde [[a]] y [[b]] son los catetos.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm y [[b = 8]] cm. Primero eleva ambos catetos al cuadrado y suma: [[a^2 + b^2 = 36 + 64 = 100]]. Luego halla la raíz cuadrada para obtener la hipotenusa: [[c = \\sqrt{100} = 10]] cm. Después divídela entre dos: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "La <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> halla una hipotenusa desconocida a partir de dos catetos, que es el mismo primer paso usado aquí. La <a href=\"/right-triangle-area-calculator/\">calculadora del área de un triángulo rectángulo</a> usa los mismos dos catetos de otra manera, calculando [[A = \\frac{ab}{2}]], que son 24 centímetros cuadrados para el triángulo 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Relación entre el circunradio y el diámetro",
          "blocks": [
            {
              "kind": "p",
              "text": "El radio y el diámetro describen el mismo círculo de dos maneras. El diámetro [[D]] es la distancia en línea recta a través del círculo por su centro, y el radio [[R]] es la distancia desde el centro hasta el borde, así que [[D = 2R]] y [[R = \\frac{D}{2}]]. Duplicar un radio da el diámetro, y dividir un diámetro entre dos da el radio.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo, el diámetro tiene una segunda identidad: es igual a la hipotenusa. La hipotenusa se extiende por el circuncírculo de un lado a otro, por el centro, así que [[D = c]]. Al combinar las dos relaciones se obtiene [[c = 2R]] y [[R = \\frac{c}{2}]], que es la fórmula en la que se basa esta página.",
            },
            {
              "kind": "p",
              "text": "Un ejemplo numérico mantiene claras las tres longitudes. En un triángulo con [[c = 18]] cm, el diámetro es [[D = 18]] cm y el circunradio es [[R = 9]] cm. La hipotenusa, 18 cm, y el diámetro, 18 cm, son la misma recta medida en dos papeles, mientras que el radio, 9 cm, es la mitad de esa recta.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Circunradio frente a inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "El circunradio y el inradio son los dos radios de un triángulo rectángulo, y describen dos círculos diferentes. El circunradio [[R]] es el radio del circuncírculo, que pasa por los tres vértices. El inradio [[r]] es el radio del incírculo, que se encuentra dentro del triángulo y toca los tres lados. Un círculo rodea el triángulo, el otro se encuentra dentro de él.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo, el circunradio es [[R = \\frac{c}{2}]], mientras que el inradio es [[r = \\frac{a + b - c}{2}]], donde [[a]] y [[b]] son los catetos y [[c]] es la hipotenusa. El circunradio necesita solo la hipotenusa; el inradio necesita los tres lados, porque lo bien que encaja el incírculo depende de la forma del triángulo, no solo de su lado más largo.",
            },
            {
              "kind": "p",
              "text": "Los centros también difieren. El circuncentro es el punto medio de la hipotenusa, en el borde del triángulo. El incentro está dentro del triángulo, donde se cortan las bisectrices de los ángulos, a distancia [[r]] de cada lado.",
            },
            {
              "kind": "p",
              "text": "Usa el triángulo 6-8-10 para ver la diferencia en números. El circunradio es [[R = \\frac{10}{2} = 5]] cm, y el inradio es [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Para problemas sobre el incírculo, usa la <a href=\"/right-triangle-inradius-calculator/\">calculadora del inradio de un triángulo rectángulo</a>, que aplica [[r = \\frac{a + b - c}{2}]] directamente. La <a href=\"/right-triangle-radius-calculator/\">calculadora del radio de un triángulo rectángulo</a> cubre ambos radios en una página cuando necesitas compararlos.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "Circunradio R",
              "Inradio r",
            ],
            "rows": [
              [
                "Círculo",
                "Circuncírculo",
                "Incírculo",
              ],
              [
                "Posición",
                "Alrededor del triángulo",
                "Dentro del triángulo",
              ],
              [
                "Contacto",
                "Pasa por los vértices",
                "Tangente a los lados",
              ],
              [
                "Fórmula del triángulo rectángulo",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Centro",
                "Circuncentro",
                "Incentro",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "El circuncírculo que pasa por los vértices junto al incírculo que toca los lados, triángulo 6-8-10",
            "caption": "Circuncírculo (R = 5 cm) alrededor del triángulo, incírculo (r = 2 cm) dentro de él, triángulo 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Relación entre el circunradio y el teorema de Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de Pitágoras afirma que en un triángulo rectángulo, [[a^2 + b^2 = c^2]], donde [[a]] y [[b]] son los catetos y [[c]] es la hipotenusa. Es el vínculo entre los catetos y la hipotenusa, y a través de la hipotenusa también es un vínculo con el circunradio.",
            },
            {
              "kind": "p",
              "text": "Como [[R = \\frac{c}{2}]], y el teorema da [[c = \\sqrt{a^2 + b^2}]], al sustituir se obtiene [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Esa fórmula combinada halla el circunradio a partir de los dos catetos en un solo paso, sin escribir la hipotenusa por separado. Es el mismo cálculo en dos pasos de la sección sobre los catetos, escrito como una sola expresión.",
            },
            {
              "kind": "p",
              "text": "Compruébalo con el triángulo 6-8-10. Los catetos dan [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm para la hipotenusa, y dividir entre dos da [[R = 5]] cm. El teorema de Pitágoras proporciona la hipotenusa, y la fórmula del circunradio la divide entre dos.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo verificar el cálculo del circunradio",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones independientes detectan casi todos los errores. Aplica al menos una en cada respuesta, y las cuatro cuando el problema importa. El ejemplo siguiente usa el triángulo 6-8-10, con [[c = 10]] cm y [[R = 5]] cm, en todo momento.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Relación del diámetro",
            },
            {
              "kind": "p",
              "text": "Duplica el circunradio y compáralo con la hipotenusa: [[2R = c]]. Aquí [[2 \\times 5 = 10]] cm, lo que coincide exactamente con c. Si duplicar tu respuesta no devuelve la hipotenusa, la división entre dos salió mal.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Relación del punto medio",
            },
            {
              "kind": "p",
              "text": "El circuncentro debe estar a mitad de camino a lo largo de la hipotenusa. Mide desde cualquiera de los extremos de la hipotenusa hasta el centro: cada mitad debe ser igual a [[R]]. Aquí cada mitad es 5 cm, lo que coincide con el circunradio. Un centro que no está en el punto medio no es el circuncentro.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Distancias iguales",
            },
            {
              "kind": "p",
              "text": "Verifica [[OA = OB = OC = R]]. El centro debe estar a la misma distancia de los tres vértices. En el triángulo 6-8-10, cada distancia es 5 cm. Si la distancia al vértice del ángulo recto difiere de la distancia a los extremos de la hipotenusa, el centro o el radio están mal.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Cuando se conocen los catetos, verifica [[a^2 + b^2 = c^2]] y compara la hipotenusa resultante con [[2R]]. Aquí [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], así que [[c = 10]] cm, y [[2R = 10]] cm coincide. Esta comprobación pone a prueba todo el triángulo, así que detecta errores de etiquetado que la primera comprobación puede pasar por alto.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades importantes del circunradio en triángulos rectángulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve propiedades se deducen directamente de [[R = \\frac{c}{2}]]. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "kind": "list",
              "items": [
                "El circunradio es exactamente la mitad de la hipotenusa, [[R = \\frac{c}{2}]], sin ninguna aproximación.",
                "La hipotenusa es el diámetro del circuncírculo, así que [[D = c]] y [[c = 2R]].",
                "El circuncentro se encuentra en el punto medio de la hipotenusa, sobre el lado más largo del triángulo.",
                "El circunradio siempre es positivo para un triángulo no degenerado, ya que la hipotenusa es una longitud positiva.",
                "El circunradio es igual a la mitad de la hipotenusa, y como la hipotenusa es el lado más largo, el circunradio es menor que la hipotenusa. Que sea mayor o menor que un cateto dado depende del triángulo: en un triángulo 6-8-10, [[R = 5]] cm es menor que el cateto de 8 cm, mientras que en un triángulo 5-12-13, [[R = 6.5]] cm es mayor que el cateto de 5 cm.",
                "Aumentar la hipotenusa aumenta el circunradio de forma proporcional, porque [[R]] es la mitad de [[c]].",
                "Duplicar la hipotenusa duplica el circunradio: si [[c]] se convierte en [[2c]], entonces [[R]] se convierte en [[c]].",
                "Los catetos no se necesitan cuando la hipotenusa ya se conoce; la fórmula usa solo [[c]].",
                "Los tres vértices están a la misma distancia del circuncentro, con [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores comunes al calcular el circunradio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Introducir un cateto en lugar de la hipotenusa: dividir un cateto entre dos da la mitad de un cateto, no el circunradio. En un triángulo 6-8-10, dividir 6 cm entre dos da 3 cm, mientras que el verdadero circunradio es 5 cm.",
                "Olvidar dividir entre dos: presentar la hipotenusa como respuesta da el diámetro, no el radio. Con [[c = 10]] cm, la respuesta es 5 cm, no 10 cm.",
                "Tratar la hipotenusa como el radio: este es el mismo error desde la dirección opuesta. La hipotenusa abarca todo el ancho del círculo, así que es el diámetro, y el radio es la mitad de ella.",
                "Confundir el circunradio con el inradio: el inradio de un triángulo 6-8-10 es 2 cm, mientras que el circunradio es 5 cm. Los dos círculos son diferentes, y sus fórmulas también son diferentes.",
                "Confundir el circuncentro con el vértice del ángulo recto: el circuncentro es el punto medio de la hipotenusa, no el vértice C. El vértice C es un punto del círculo, a distancia [[R]] del centro.",
                "Suponer que el centro siempre está dentro de un triángulo: en un triángulo rectángulo el circuncentro se encuentra sobre la hipotenusa, y en un triángulo obtusángulo se encuentra fuera.",
                "Usar la fórmula en un triángulo cualquiera: [[R = \\frac{c}{2}]] solo vale para triángulos rectángulos. Para un triángulo general, usa [[R = \\frac{abc}{4A}]], donde [[A]] es el área.",
                "Mezclar unidades de medida: una hipotenusa en metros y una respuesta expresada en centímetros difieren en un factor de 100. Convierte primero y luego divide entre dos.",
                "Usar valores de hipotenusa cero o negativos: una longitud no puede ser cero ni negativa en un triángulo real. Una entrada cero o negativa significa que la medida está mal.",
                "Confundir el diámetro y el radio: el diámetro es el doble del radio. Si tu respuesta es el doble del valor esperado, probablemente presentaste [[D]] en lugar de [[R]].",
                "Suponer que el circuncírculo toca los tres lados: el circuncírculo pasa por los vértices y toca el triángulo solo en esos tres puntos. El círculo que toca los lados es el incírculo.",
                "Olvidar que el círculo pasa por los tres vértices: los tres deben estar sobre él, que es exactamente lo que garantiza [[OA = OB = OC]].",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones prácticas del circunradio",
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es el trabajo de geometría en clase y las tareas escolares, donde los problemas de circunradio ponen a prueba si los estudiantes pueden identificar la hipotenusa y aplicar [[R = \\frac{c}{2}]] en lugar de recurrir a una fórmula más complicada. Los ejercicios de construcción de círculos usan la misma idea: dado un triángulo rectángulo, traza su circuncírculo dividiendo la hipotenusa entre dos y ajustando un compás a ese radio.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa la relación cuando un triángulo rectángulo debe colocarse dentro de un marco circular o cuando un arco circular debe pasar por tres puntos dados. El modelado geométrico y la geometría de coordenadas usan el mismo hecho para colocar el circuncentro de un triángulo en el punto medio de su hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Los profesores usan el tema como lección puente entre los triángulos y los círculos, porque es uno de los primeros lugares donde las dos materias se encuentran. El teorema de Tales, la propiedad del punto medio y la relación entre radio y diámetro aparecen todos en una sola imagen, así que el circunradio es una forma compacta de repasarlos juntos.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta resolver los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos, y cada solución está desarrollada por completo más abajo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Número entero básico",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 26]] cm. Halla el circunradio [[R]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hipotenusa decimal",
            },
            {
              "kind": "p",
              "text": "Dado [[c = 9.4]] m, halla el circunradio [[R]] en metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medida fraccionaria",
            },
            {
              "kind": "p",
              "text": "Dado [[c = \\frac{9}{4}]] ft, halla [[R]] como fracción y luego como decimal.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 240]] cm. Halla el circunradio en metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Halla la hipotenusa a partir de dos catetos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos [[a = 9]] cm y [[b = 12]] cm. Halla la hipotenusa y luego el circunradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: ¿Circunradio o inradio?",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos de 5 cm y 12 cm e hipotenusa de 13 cm. Halla tanto el circunradio [[R]] como el inradio [[r]], e indica a qué círculo pertenece cada uno.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[R = \\frac{26}{2} = 13]] cm. Comprobación: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[R = \\frac{9.4}{2} = 4.7]] m. Comprobación: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, que es 1.125 ft. Dividir entre 2 duplica el denominador de 4 a 8.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[R = \\frac{240}{2} = 120]] cm, y 120 cm equivalen a 1.2 m, ya que 100 cm son 1 m.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, luego [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: El circunradio pertenece al circuncírculo, [[R = \\frac{13}{2} = 6.5]] cm, y el inradio pertenece al incírculo, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. El circuncírculo pasa por los vértices; el incírculo toca los lados.",
            },
          ],
        },
      },
      "relatedHeading": "Explora calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea específica de triángulos rectángulos, así que elige la herramienta que corresponda a la medida que necesitas hallar.",
      "relatedItems": [
        "Calculadora del radio de un triángulo rectángulo",
        "Calculadora del inradio de un triángulo rectángulo",
        "Calculadora de lados de un triángulo rectángulo",
        "Calculadora del área de un triángulo rectángulo",
        "Calculadora del teorema de Pitágoras",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula del circunradio de un triángulo rectángulo?",
          "answer": "La fórmula es [[R = \\frac{c}{2}]], donde [[R]] es el circunradio y [[c]] es la hipotenusa. Identifica el lado opuesto al ángulo recto y luego divide su longitud entre dos. Por ejemplo, una hipotenusa de 10 cm da un circunradio de 5 cm.",
        },
        {
          "question": "¿Por qué la hipotenusa es el diámetro del circuncírculo?",
          "answer": "El punto medio de la hipotenusa está a la misma distancia de los tres vértices, así que es el circuncentro. La hipotenusa pasa por ese centro con ambos extremos sobre el círculo, que es la definición de un diámetro. Dividirla entre dos, por tanto, da el radio.",
        },
        {
          "question": "¿Dónde está el circuncentro de un triángulo rectángulo?",
          "answer": "El circuncentro se encuentra en el punto medio de la hipotenusa, sobre el lado más largo del triángulo. Está a la misma distancia de los tres vértices, con [[AO = BO = CO = R]]. No es el vértice del ángulo recto, que es un punto del círculo.",
        },
        {
          "question": "¿Qué significa circunradio?",
          "answer": "Circunradio significa el radio del circuncírculo, el círculo que pasa por los tres vértices del triángulo. Es la distancia desde el circuncentro hasta cualquier vértice. En un triángulo rectángulo es igual a la mitad de la hipotenusa.",
        },
        {
          "question": "¿Necesito ambos catetos para calcular el circunradio?",
          "answer": "No. La hipotenusa por sí sola basta, porque [[R = \\frac{c}{2}]]. Los catetos solo se necesitan cuando se desconoce la hipotenusa, en cuyo caso halla primero esa hipotenusa con [[c = \\sqrt{a^2 + b^2}]] y luego divídela entre dos. Por eso esta calculadora pide un solo valor, y eso mantiene cada cálculo corto y sencillo.",
        },
        {
          "question": "¿El circunradio es la mitad de la hipotenusa?",
          "answer": "Sí, siempre, para un triángulo rectángulo. La hipotenusa es el diámetro del circuncírculo, y un radio es la mitad de un diámetro, así que [[R = \\frac{c}{2}]]. Duplicar el circunradio siempre devuelve la hipotenusa. Por ejemplo, una hipotenusa de 14 cm da un circunradio de 7 cm, y duplicar 7 cm devuelve 14 cm.",
        },
        {
          "question": "¿El circunradio es lo mismo que el inradio?",
          "answer": "No. El circunradio es el radio del círculo que pasa por los vértices, [[R = \\frac{c}{2}]], mientras que el inradio es el radio del círculo dentro del triángulo que toca sus lados, [[r = \\frac{a + b - c}{2}]]. En un triángulo 6-8-10 son 5 cm y 2 cm.",
        },
        {
          "question": "¿Puede el circuncentro estar fuera de un triángulo?",
          "answer": "Sí, para un triángulo obtusángulo el circuncentro se encuentra fuera. Para un triángulo acutángulo se encuentra dentro. Un triángulo rectángulo es el caso límite: su circuncentro se encuentra sobre la hipotenusa, exactamente en su punto medio. Así que el centro nunca está dentro de la región triangular de un triángulo rectángulo, pero tampoco está nunca fuera del triángulo.",
        },
        {
          "question": "¿Cómo se relaciona el teorema de Tales con el circunradio?",
          "answer": "El teorema de Tales dice que un ángulo subtendido por un diámetro es un ángulo recto, y su recíproco dice que la hipotenusa de un triángulo rectángulo es un diámetro. Eso convierte el punto medio de la hipotenusa en el centro y la mitad de la hipotenusa en el radio.",
        },
        {
          "question": "¿Puedo hallar el circunradio usando los dos catetos?",
          "answer": "Sí. Primero halla la hipotenusa con [[c = \\sqrt{a^2 + b^2}]], luego divídela entre dos: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Para los catetos de 6 cm y 8 cm, la hipotenusa es 10 cm y el circunradio es 5 cm. Usa los mismos dos pasos para cualquier par de catetos, y comprueba el resultado con la prueba del diámetro.",
        },
        {
          "question": "¿Qué pasa si la hipotenusa se duplica?",
          "answer": "El circunradio también se duplica, porque [[R]] es la mitad de [[c]]. Si una hipotenusa de 10 cm da [[R = 5]] cm, una hipotenusa de 20 cm da [[R = 10]] cm. La relación es directamente proporcional, así que triplicar la hipotenusa también triplica el circunradio.",
        },
        {
          "question": "¿El circuncírculo pasa por los tres vértices?",
          "answer": "Sí. Esa es la definición de un circuncírculo: un círculo que pasa por cada vértice del triángulo. En un triángulo rectángulo, el centro es el punto medio de la hipotenusa y cada vértice está exactamente a [[R]] de él.",
        },
      ],
    },
};
