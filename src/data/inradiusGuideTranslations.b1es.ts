// inradiusGuideTranslations.bes.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B1_ES = {
  "es": {
      "meta": {
        "title": "Calculadora del inradio de un triángulo rectángulo: halla r a partir de los lados",
        "description": "Usa la calculadora del inradio de un triángulo rectángulo para hallar r a partir de los catetos a y b y la hipotenusa c, con la fórmula, un ejemplo resuelto 6-8-10 y comprobaciones paso a paso.",
        "primaryKeyword": "Calculadora del inradio de un triángulo rectángulo",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-intro": "Calculadora del inradio de un triángulo rectángulo",
        "sec-calculate": "Cómo calcular el inradio de un triángulo rectángulo",
        "sec-what-inradius": "¿Qué es el inradio de un triángulo rectángulo?",
        "sec-incircle": "¿Qué es un incírculo en la geometría del triángulo rectángulo?",
        "sec-incenter": "El incentro de un triángulo rectángulo",
        "sec-formula": "Fórmula del inradio de un triángulo rectángulo",
        "sec-why-formula-works": "¿Por qué funciona la fórmula del inradio de un triángulo rectángulo?",
        "sec-how-to-use": "Cómo usar la calculadora del inradio de un triángulo rectángulo",
        "sec-step-example": "Ejemplo paso a paso para hallar el inradio",
        "sec-diagram": "Diagrama del incírculo de un triángulo rectángulo explicado",
        "sec-area-semiperimeter": "Cómo calcular el inradio con el área y el semiperímetro",
        "sec-semiperimeter-relation": "Relación entre el inradio y el semiperímetro",
        "sec-examples": "Ejemplos resueltos de cálculo del inradio de un triángulo rectángulo",
        "sec-legs-known": "Cómo calcular el inradio cuando solo se conocen los dos catetos",
        "sec-vs-circumradius": "Relación entre el inradio y el circunradio",
        "sec-verify": "Cómo verificar el cálculo del inradio",
        "sec-properties": "Propiedades importantes del inradio en un triángulo rectángulo",
        "sec-mistakes": "Errores comunes al calcular el inradio",
        "sec-applications": "Aplicaciones prácticas del inradio de un triángulo rectángulo",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explora calculadoras relacionadas de triángulos rectángulos",
        "sec-faq": "Preguntas frecuentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora del inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Halla el inradio de un triángulo rectángulo a partir de sus dos catetos y su hipotenusa.",
            },
            {
              "kind": "p",
              "text": "El inradio es el radio del incírculo, el círculo que cabe dentro del triángulo y toca los tres lados. La calculadora necesita tres números: el cateto [[a]], el cateto [[b]] y la hipotenusa [[c]], donde [[a]] y [[b]] son los lados que forman el ángulo recto y [[c]] es el lado opuesto a él. La fórmula es [[r = \\frac{a+b-c}{2}]], donde [[r]] es el inradio. Suma los dos catetos, resta la hipotenusa y divide el resultado entre dos.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, un triángulo 6-8-10 da [[r = \\frac{6+8-10}{2} = 2]]. Ese 2 es el radio del círculo dentro del triángulo, medido en la misma unidad que los lados. El círculo toca cada lado en exactamente un punto, y su centro, el incentro, está a la misma distancia de los tres lados.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Cómo calcular el inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página tiene tres campos de entrada, uno para cada lado del triángulo, y un resultado. Introduce las tres longitudes de los lados, todas en la misma unidad, y luego haz clic en Calcular el inradio r. El resultado es una longitud, el radio del incírculo, expresada en esa misma unidad.",
            },
            {
              "kind": "p",
              "text": "El cateto a es el primer lado que forma el ángulo recto, y el cateto b es el segundo. No importa a qué cateto llames [[a]] y a cuál [[b]], porque la fórmula los suma. La hipotenusa [[c]] es el lado opuesto al ángulo recto, y debe ser el lado más largo del triángulo. Si el número introducido para [[c]] es más corto que un cateto, las tres longitudes no pueden formar un triángulo rectángulo, y el resultado no será significativo.",
            },
            {
              "kind": "p",
              "text": "Mantén las mismas unidades en los tres campos. Si [[a]] y [[b]] están en centímetros, [[c]] también debe estar en centímetros, y la respuesta saldrá en centímetros. Lee la respuesta como un radio, no como un diámetro: un radio va desde el centro del círculo hasta su borde, mientras que un diámetro lo cruza de lado a lado. Usa Restablecer para limpiar los campos antes de empezar un nuevo problema.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "¿Qué es el inradio de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "El inradio de un triángulo rectángulo es el radio de su incírculo, el círculo más grande que cabe dentro del triángulo. Imagina el triángulo ABC con el ángulo recto en C, el cateto AC llamado [[a]], el cateto BC llamado [[b]] y la hipotenusa AB llamada [[c]]. Ahora dibuja el círculo más grande que puedas dentro de ese triángulo sin cruzar ningún lado. Ese círculo toca los tres lados, y su radio es el inradio, escrito [[r]].",
            },
            {
              "kind": "p",
              "text": "El centro del incírculo se llama incentro, escrito [[I]]. El incentro está a la misma distancia perpendicular de los tres lados, y esa distancia es [[r]]. Cada radio trazado desde [[I]] hasta un lado se encuentra con ese lado en ángulo recto, por eso el círculo apenas toca el lado en lugar de cruzarlo. El incírculo permanece dentro del triángulo porque cada punto del círculo está a distancia [[r]] o menos de [[I]], y el propio [[I]] está dentro del triángulo.",
            },
            {
              "kind": "p",
              "text": "Un ejemplo pequeño hace la idea concreta. En un triángulo 3-4-5, el inradio es [[r = \\frac{3+4-5}{2} = 1]]. El incírculo tiene un radio de 1 unidad, así que su centro está a 1 unidad de cada lado. La <a href=\"/right-triangle-radius-calculator/\">calculadora del radio de un triángulo rectángulo</a> cubre ambos radios de un triángulo rectángulo en una página, si quieres comparar el incírculo con el círculo que pasa por los vértices.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Triángulo rectángulo ABC con el incírculo dentro de él, centro I y radio r tocando los tres lados",
            "caption": "El triángulo ABC con su incírculo: el centro I está a distancia r de cada lado.",
          },
        },
        "sec-incircle": {
          "h2": "¿Qué es un incírculo en la geometría del triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un incírculo es un círculo trazado por completo dentro de un triángulo de modo que toca, o es tangente a, los tres lados. Cada lado del triángulo es una recta tangente al círculo: se encuentra con el círculo en exactamente un punto y no lo atraviesa. Esos tres puntos de encuentro se llaman puntos de tangencia, uno en cada lado.",
            },
            {
              "kind": "p",
              "text": "El radio trazado desde el incentro hasta un punto de tangencia es siempre perpendicular a ese lado. Este es un hecho general sobre los círculos: un radio hasta un punto de tangencia se encuentra con la recta tangente en ángulo recto. Como el incentro está a la misma distancia de los tres lados, los tres radios hasta los tres puntos de tangencia tienen todos la misma longitud [[r]], así que un solo círculo encaja con los tres lados a la vez.",
            },
            {
              "kind": "p",
              "text": "Cada triángulo tiene exactamente un incírculo. Las tres bisectrices de los ángulos de un triángulo se encuentran en un punto, el incentro, y la distancia desde ese punto hasta los lados fija el radio. Un segundo círculo diferente no podría tocar los tres lados desde dentro, porque su centro también tendría que estar a la misma distancia de los tres lados, y solo el incentro tiene esa propiedad. Observa que el incírculo no es el círculo que pasa por los vértices: toca los lados desde dentro y nunca llega a un vértice.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Incírculo que toca los tres lados de un triángulo rectángulo en tres puntos de tangencia con radios perpendiculares",
            "caption": "Tres puntos de tangencia: cada radio se encuentra con su lado a 90 grados.",
          },
        },
        "sec-incenter": {
          "h2": "El incentro de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "El incentro de un triángulo es el punto donde se encuentran sus tres bisectrices internas de los ángulos. Una bisectriz de un ángulo es una recta que divide el ángulo en dos mitades iguales. Traza la bisectriz del ángulo A, la bisectriz del ángulo B y la bisectriz del ángulo C, y las tres se cruzan en un solo punto. Ese punto es el incentro [[I]], y es el centro del incírculo.",
            },
            {
              "kind": "p",
              "text": "El incentro está a la misma distancia de los tres lados por cómo se comportan las bisectrices de los ángulos. Cada punto de la bisectriz de un ángulo está a la misma distancia de los dos lados que forman ese ángulo. Un punto que está en dos bisectrices a la vez está por tanto a la misma distancia de los tres lados, y el incentro se encuentra en las tres bisectrices. Esa distancia común es el inradio [[r]], así que el círculo con centro en [[I]] y radio [[r]] toca cada lado.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo con el ángulo recto en C, el incentro se encuentra sobre la bisectriz del ángulo de 90 grados, que cruza en diagonal la esquina en C a 45 grados de cada cateto. El incentro siempre se encuentra dentro del triángulo, nunca sobre un lado ni fuera de él, porque las tres bisectrices se encuentran en el interior. Por eso el incírculo cabe dentro del triángulo en lugar de desbordarse.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Triángulo rectángulo con las tres bisectrices internas de los ángulos que se encuentran en el incentro I",
            "caption": "Las tres bisectrices de los ángulos se encuentran en I, el incentro, a distancia r de cada lado.",
          },
        },
        "sec-formula": {
          "h2": "Fórmula del inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula del inradio de un triángulo rectángulo es lo bastante corta para recordarla de un vistazo:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[r]] es el inradio, [[a]] es el primer cateto, [[b]] es el segundo cateto y [[c]] es la hipotenusa. La fórmula funciona en tres etapas, y cada etapa tiene un significado claro.",
            },
            {
              "kind": "p",
              "text": "Etapa 1: suma los dos catetos, [[a+b]]. Esta longitud combinada es siempre mayor que la hipotenusa, porque los dos catetos juntos se extienden más que la recta que cruza. Etapa 2: resta la hipotenusa, [[a+b-c]]. Esto deja la cantidad en que los catetos superan a la hipotenusa. Etapa 3: divide entre dos, [[r = \\frac{a+b-c}{2}]]. La división convierte esa longitud restante en el radio del incírculo, y la sección de demostración siguiente muestra por qué dividir entre dos es exactamente lo correcto.",
            },
            {
              "kind": "p",
              "text": "Toma el triángulo 6-8-10: [[a+b = 14]], luego [[14-10 = 4]], luego [[\\frac{4}{2} = 2]], así que [[r = 2]]. La fórmula es específica de los triángulos rectángulos. Para un triángulo que no es rectángulo, el inradio sigue siendo igual al área dividida entre el semiperímetro, [[r = \\frac{A}{s}]], pero el atajo [[r = \\frac{a+b-c}{2}]] no se aplica, porque su demostración depende del ángulo recto.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Triángulo rectángulo etiquetado con los catetos a y b, la hipotenusa c, el incentro I y el inradio r junto a la fórmula r igual a a más b menos c entre 2",
            "caption": "La fórmula usa los tres lados: suma los catetos, resta la hipotenusa y divide entre dos.",
          },
        },
        "sec-why-formula-works": {
          "h2": "¿Por qué funciona la fórmula del inradio de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula proviene de un hecho sencillo sobre las tangentes: los dos segmentos tangentes trazados desde el mismo punto exterior a un círculo hasta ese círculo tienen longitudes iguales. Cada vértice del triángulo se encuentra fuera del incírculo, y los dos lados que se encuentran en ese vértice son ambos tangentes al círculo. Así que los dos segmentos tangentes desde cada vértice son iguales.",
            },
            {
              "kind": "p",
              "text": "Empieza en el vértice del ángulo recto C. Los dos lados que se encuentran en C son los catetos, y el incírculo toca cada cateto en un punto que está a distancia [[r]] de C a lo largo del lado. Esto se debe a que los dos radios desde el incentro hasta los catetos, junto con los dos segmentos cortos a lo largo de los catetos, forman un cuadrado de lado [[r]] en la esquina C. Así que el segmento tangente desde C a lo largo de cualquier cateto tiene longitud [[r]].",
            },
            {
              "kind": "p",
              "text": "Ahora mira los otros dos vértices. Sea [[x]] la longitud tangente desde el vértice A a lo largo de los lados, y sea [[y]] la longitud tangente desde el vértice B. En el vértice A, una tangente corre a lo largo del cateto [[a]] hacia C y la otra corre a lo largo de la hipotenusa hacia B, así que ambas tienen longitud [[x]]. En el vértice B, ambas tangentes tienen longitud [[y]]. Las longitudes de los lados se forman entonces a partir de estas piezas:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Suma las dos primeras ecuaciones: [[a+b = 2r+x+y]]. Como [[x+y = c]], esto se convierte en [[a+b = 2r+c]]. Al reordenar se obtiene [[2r = a+b-c]], y al dividir entre dos se obtiene la fórmula, [[r = \\frac{a+b-c}{2}]]. Cada paso se deduce de las longitudes tangentes iguales, así que la fórmula no es un truco para memorizar, es un resultado directo de cómo el incírculo toca los lados.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Cómo usar la calculadora del inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Catorce pasos cortos te llevan desde un triángulo etiquetado hasta una respuesta comprobada. Los pasos en orden son:",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Localiza el vértice del ángulo recto, normalmente marcado con un pequeño cuadrado, y llámalo C.",
                "Identifica el primer cateto perpendicular a, uno de los dos lados que forman el ángulo recto.",
                "Identifica el segundo cateto perpendicular b, el otro lado que forma el ángulo recto.",
                "Identifica la hipotenusa completa c, el lado opuesto al ángulo recto.",
                "Confirma que c es el lado más largo. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Comprueba que los tres lados satisfacen el teorema de Pitágoras, [[a^2+b^2 = c^2]].",
                "Selecciona unidades de medida compatibles y convierte cualquier medida que use una unidad diferente.",
                "Introduce el cateto a en el campo Cateto a.",
                "Introduce el cateto b en el campo Cateto b.",
                "Introduce la hipotenusa c en el campo Hipotenusa c.",
                "Haz clic en Calcular el inradio r y lee el resultado.",
                "Comprueba el resultado: debe ser positivo, estar en la misma unidad que los lados y ser menor que cualquiera de los catetos.",
                "Usa Restablecer cuando empieces otro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Introducir el lado equivocado como [[c]] es el error que causa más problemas. Si se introduce un cateto en el campo de la hipotenusa, la fórmula resta un cateto en lugar de la hipotenusa, y la respuesta es demasiado grande. Comprueba siempre que el valor del campo de la hipotenusa sea el mayor de los tres antes de hacer clic en Calcular.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Ejemplo paso a paso para hallar el inradio",
          "blocks": [
            {
              "kind": "p",
              "text": "Usa el ejemplo de la parte superior de la página, [[a = 6]], [[b = 8]] y [[c = 10]]. Los cinco pasos siguientes muestran todo el desarrollo, sin saltar nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[r = \\frac{a+b-c}{2}]].",
                "Sustituye los valores: [[r = \\frac{6+8-10}{2}]].",
                "Suma los catetos: [[r = \\frac{14-10}{2}]].",
                "Resta la hipotenusa: [[r = \\frac{4}{2}]].",
                "Divide: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta 2 significa que el incírculo tiene un radio de 2 unidades, en la misma unidad que los lados. Su centro está a 2 unidades de cada lado, y el círculo toca cada lado en exactamente un punto.",
            },
            {
              "kind": "p",
              "text": "Verifica que las medidas forman un triángulo rectángulo antes de confiar en la respuesta: [[6^2+8^2 = 36+64 = 100 = 10^2]], así que el teorema de Pitágoras se cumple y el triángulo es realmente rectángulo. Una segunda comprobación usa el área y el semiperímetro, [[A = \\frac{6 \\times 8}{2} = 24]] y [[s = \\frac{6+8+10}{2} = 12]], dando [[r = \\frac{24}{12} = 2]], la misma respuesta por un camino diferente.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Ejemplo resuelto con a igual a 6, b igual a 8, c igual a 10 e inradio r igual a 2, incírculo que toca los tres lados",
            "caption": "Ejemplo resuelto: a = 6, b = 8, c = 10 da r = 2, comprobado por área y semiperímetro.",
          },
        },
        "sec-diagram": {
          "h2": "Diagrama del incírculo de un triángulo rectángulo explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto [[a]], el lado BC es el cateto [[b]] y el lado AB es la hipotenusa [[c]]. El punto [[I]] marca el incentro dentro del triángulo, y un círculo con centro en [[I]] toca los tres lados.",
            },
            {
              "kind": "p",
              "text": "Lee el diagrama en este orden. Empieza en A, sigue por el cateto [[a]] hasta C, luego por el cateto [[b]] hasta B, y vuelve por la hipotenusa desde B hasta A. El incírculo se encuentra dentro de este contorno, tocando el cateto [[a]] en un punto, el cateto [[b]] en un segundo punto y la hipotenusa en un tercer punto. Desde [[I]], tres segmentos cortos llegan hasta esos tres puntos, y cada uno es un radio de longitud [[r]].",
            },
            {
              "kind": "p",
              "text": "Cada radio se encuentra con su lado en ángulo recto, que es la marca de una tangente: el lado apenas roza el círculo en ese punto en lugar de cruzarlo. Los tres radios tienen la misma longitud, por eso un círculo puede tocar los tres lados a la vez. El círculo no pasa por ningún vértice: los vértices se encuentran fuera del círculo, y los segmentos tangentes desde cada vértice hasta el círculo son las longitudes [[r]], [[x]] e [[y]] usadas en la demostración anterior.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Cómo calcular el inradio con el área y el semiperímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Hay una segunda forma de hallar el inradio, usando el área y el semiperímetro del triángulo:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[A]] es el área del triángulo y [[s]] es el semiperímetro, la mitad del perímetro. Para un triángulo rectángulo, el área es la mitad del producto de los catetos, [[A = \\frac{ab}{2}]], porque los dos catetos actúan como base y altura. El semiperímetro es [[s = \\frac{a+b+c}{2}]]. La <a href=\"/right-triangle-area-calculator/\">calculadora del área de un triángulo rectángulo</a> halla [[A]] a partir de los dos catetos, y la <a href=\"/right-triangle-semiperimeter-calculator/\">calculadora del semiperímetro de un triángulo rectángulo</a> halla [[s]] a partir de los tres lados.",
            },
            {
              "kind": "p",
              "text": "Al sustituir las expresiones del triángulo rectángulo se obtiene [[r = \\frac{ab/2}{(a+b+c)/2}]], y las mitades se cancelan para dejar [[r = \\frac{ab}{a+b+c}]]. Esta es la fórmula equivalente en longitudes de lados del principio de la guía, y da la misma respuesta que [[r = \\frac{a+b-c}{2}]] para cada triángulo rectángulo válido, porque las dos expresiones son iguales siempre que [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Usa el triángulo 6-8-10 para ver que ambos caminos coinciden. El área es [[A = \\frac{6 \\times 8}{2} = 24]], y el semiperímetro es [[s = \\frac{6+8+10}{2} = 12]], así que [[r = \\frac{24}{12} = 2]]. La fórmula estándar da el mismo resultado, [[r = \\frac{6+8-10}{2} = 2]]. La calculadora de esta página usa la fórmula de los tres lados, y la ruta del área es una comprobación independiente útil.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Triángulo rectángulo dividido en tres triángulos más pequeños que comparten el incentro, mostrando que el área es igual a r por s",
            "caption": "Tres triángulos que comparten I: sus áreas suman A = r por s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Relación entre el inradio y el semiperímetro",
          "blocks": [
            {
              "kind": "p",
              "text": "El semiperímetro [[s]] es la mitad del perímetro del triángulo:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Se llama semiperímetro porque semi significa mitad: el perímetro completo es [[P = a+b+c]], y el semiperímetro es la mitad de eso. No confundas los dos. El perímetro es la longitud total alrededor del triángulo, mientras que el semiperímetro es un valor auxiliar más corto que aparece en las fórmulas de área y en la fórmula del inradio [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "El semiperímetro por sí solo no puede determinar el inradio, porque la fórmula [[r = \\frac{A}{s}]] también necesita el área [[A]]. Dos triángulos pueden compartir el mismo semiperímetro y tener áreas diferentes, y entonces sus inradios también difieren. El área lleva la información sobre la forma que el semiperímetro deja fuera. Para el triángulo 6-8-10, [[s = 12]] y [[A = 24]], así que [[r = \\frac{24}{12} = 2]]. Un triángulo diferente con [[s = 12]] pero un área menor tendría un inradio menor.",
            },
            {
              "kind": "p",
              "text": "Hay una forma elegante de ver por qué [[A = rs]] se cumple. Une el incentro [[I]] con los tres vértices, dividiendo el triángulo en tres triángulos más pequeños. Cada triángulo pequeño tiene altura [[r]] y una base igual a un lado del triángulo grande, así que sus áreas son [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] y [[\\frac{rc}{2}]]. Al sumarlas se obtiene [[A = \\frac{r(a+b+c)}{2} = r \\times s]], ya que [[s = \\frac{a+b+c}{2}]]. Al dividir entre [[s]] se obtiene [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos de cálculo del inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Ejemplo 1: Triángulo 3-4-5 básico",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 3]], [[b = 4]] y [[c = 5]], la fórmula da [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. El incírculo tiene un radio de 1 unidad. Comprueba primero el triángulo: [[3^2+4^2 = 9+16 = 25 = 5^2]], así que es un triángulo rectángulo válido.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Triángulo 6-8-10 ya visto",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 6]], [[b = 8]] y [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. El incírculo tiene un radio de 2 unidades, el doble del radio del triángulo 3-4-5, porque este triángulo es el triángulo 3-4-5 ampliado por un factor de 2. Comprobación: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Triángulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 5]], [[b = 12]] y [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. El inradio es de 2 unidades, el mismo que el del triángulo 6-8-10, aunque el triángulo es más grande y tiene otra forma. Comprobación: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Triángulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]], [[b = 15]] y [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. El incírculo tiene un radio de 3 unidades. Comprobación: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]], [[b = 12]] y [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Este es el triángulo 3-4-5 ampliado por 3, así que el inradio es 3 veces el inradio 1 del triángulo 3-4-5. Comprobación: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Medidas decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 4.5]], [[b = 6]] y [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. El inradio es de 1.5 unidades. Los decimales no cambian nada del método: suma, resta, divide entre dos. Comprobación: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 30]] cm, [[b = 40]] cm y [[c = 0.5]] m, convierte primero la hipotenusa: 0.5 m equivalen a 50 cm, porque 1 m son 100 cm. Ahora los tres lados usan centímetros, así que [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Comprobación: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mezclar metros y centímetros sin convertir daría una respuesta incorrecta, así que convierte siempre primero.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Valores decimales mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7.2]], [[b = 9.6]] y [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. El inradio es de 2.4 unidades. Este es el triángulo 3-4-5 ampliado por 2.4, así que el inradio es 2.4 veces el inradio 1 del triángulo 3-4-5. Comprobación: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Cómo calcular el inradio cuando solo se conocen los dos catetos",
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora de esta página requiere las tres longitudes de los lados, así que no puede funcionar solo con los dos catetos. Si solo se conocen [[a]] y [[b]], halla primero la hipotenusa con el teorema de Pitágoras y luego usa la fórmula del inradio. Los dos pasos son:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] y [[b = 8]]. Primero calcula la hipotenusa: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Luego calcula el inradio: [[r = \\frac{6+8-10}{2} = 2]]. La <a href=\"/right-triangle-side-calculator/\">calculadora de lados de un triángulo rectángulo</a> halla la hipotenusa que falta a partir de dos catetos, que es el mismo primer paso usado aquí, y la <a href=\"/pythagorean-theorem-calculator/\">calculadora del teorema de Pitágoras</a> hace el mismo cálculo directamente. No te saltes el primer paso: introducir un cateto en el campo de la hipotenusa da un inradio incorrecto, como muestra la sección de errores siguiente.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Relación entre el inradio y el circunradio",
          "blocks": [
            {
              "kind": "p",
              "text": "El inradio [[r]] y el circunradio [[R]] son los dos radios de un triángulo rectángulo, y describen dos círculos diferentes. El inradio es el radio del incírculo, el círculo dentro del triángulo que toca los tres lados. El circunradio es el radio del circuncírculo, el círculo fuera del triángulo que pasa por los tres vértices. Un círculo se encuentra dentro del triángulo, el otro lo rodea.",
            },
            {
              "kind": "p",
              "text": "Para un triángulo rectángulo, el circunradio es [[R = \\frac{c}{2}]], porque la hipotenusa es el diámetro del circuncírculo. El inradio es [[r = \\frac{a+b-c}{2}]], que necesita los tres lados, porque lo bien que encaja el incírculo depende de la forma del triángulo, no solo de su lado más largo. Usa el triángulo 6-8-10 para ver la diferencia en números: [[r = 2]] y [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Los centros también difieren. El incentro se encuentra dentro del triángulo, donde se cortan las bisectrices de los ángulos, a distancia [[r]] de cada lado. El circuncentro se encuentra en el punto medio de la hipotenusa, en el borde del triángulo, a distancia [[R]] de cada vértice. Para problemas sobre el circuncírculo, usa la <a href=\"/right-triangle-circumradius-calculator/\">calculadora del circunradio de un triángulo rectángulo</a>, que aplica [[R = \\frac{c}{2}]] directamente.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "Inradio r",
              "Circunradio R",
            ],
            "rows": [
              [
                "Círculo",
                "Incírculo",
                "Circuncírculo",
              ],
              [
                "Posición",
                "Dentro del triángulo",
                "Alrededor del triángulo",
              ],
              [
                "Contacto",
                "Tangente a los lados",
                "Pasa por los vértices",
              ],
              [
                "Fórmula del triángulo rectángulo",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Centro",
                "Incentro",
                "Circuncentro",
              ],
              [
                "Valor 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Triángulo rectángulo con el pequeño incírculo dentro de él y el gran circuncírculo que pasa por sus vértices, triángulo 6-8-10",
            "caption": "Incírculo (r = 2) dentro del triángulo, circuncírculo (R = 5) alrededor de él, triángulo 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "Cómo verificar el cálculo del inradio",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones independientes detectan casi todos los errores. Aplica al menos una en cada respuesta, y las cuatro cuando el problema importa. El ejemplo siguiente usa el triángulo 6-8-10, con [[r = 2]], en todo momento.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Fórmula original",
            },
            {
              "kind": "p",
              "text": "Vuelve a calcular con [[r = \\frac{a+b-c}{2}]] desde cero, sin mirar tu primer desarrollo. Aquí [[r = \\frac{6+8-10}{2} = 2]]. Un cálculo nuevo detecta errores del primero, sobre todo una resta hecha en el orden incorrecto.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Área y semiperímetro",
            },
            {
              "kind": "p",
              "text": "Verifica con [[r = \\frac{A}{s}]]. Aquí [[A = \\frac{6 \\times 8}{2} = 24]] y [[s = \\frac{6+8+10}{2} = 12]], así que [[r = \\frac{24}{12} = 2]]. Esta ruta usa multiplicación y división en lugar de suma y resta, así que detecta una clase diferente de error.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Verifica [[a^2+b^2 = c^2]]. Aquí [[6^2+8^2 = 36+64 = 100 = 10^2]], así que los tres lados forman un triángulo rectángulo genuino. Si esta comprobación falla, la fórmula del inradio no se aplica en absoluto, y ningún valor de [[r]] obtenido con ella puede ser fiable.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 4: Razonabilidad geométrica",
            },
            {
              "kind": "p",
              "text": "Confirma que [[r]] es positivo, menor que cualquiera de los catetos y está en la unidad correcta. Aquí 2 es positivo y menor que 6 y que 8, y la unidad coincide con la de los lados. El círculo debe caber dentro del triángulo, así que un inradio mayor que el cateto más corto es imposible e indica un error, normalmente un cateto introducido como hipotenusa.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propiedades importantes del inradio en un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve propiedades se deducen directamente de la fórmula y de la geometría del incírculo. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "kind": "list",
              "items": [
                "El inradio siempre es positivo para un triángulo válido y no degenerado, porque [[a+b]] siempre es mayor que [[c]].",
                "El incentro se encuentra dentro del triángulo, donde se cortan las tres bisectrices de los ángulos.",
                "El inradio es la distancia perpendicular más corta desde el incentro hasta cada lado, y las tres distancias son iguales a [[r]].",
                "El incírculo toca los tres lados, un punto de tangencia en cada lado.",
                "Los segmentos tangentes desde el mismo punto exterior tienen longitudes iguales, que es el hecho del que se deduce la fórmula.",
                "Aumentar la escala general del triángulo aumenta el inradio en el mismo factor de escala: duplicar cada lado duplica [[r]], y triplicar cada lado triplica [[r]].",
                "El inradio no es lo mismo que el circunradio. En un triángulo 6-8-10, [[r = 2]] mientras que [[R = 5]].",
                "El inradio depende de la forma del triángulo además de su tamaño: un triángulo 5-12-13 y un triángulo 6-8-10 tienen ambos [[r = 2]], aunque sus lados difieren.",
                "El inradio se puede calcular a partir de las longitudes de los lados con [[r = \\frac{a+b-c}{2}]] o a partir del área y el semiperímetro con [[r = \\frac{A}{s}]], y ambas rutas dan la misma respuesta.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errores comunes al calcular el inradio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Usar la fórmula del circunradio en lugar de la fórmula del inradio: [[R = \\frac{c}{2}]] da 5 para un triángulo 6-8-10, mientras que el inradio es 2. Las dos fórmulas responden a preguntas diferentes.",
                "Introducir c como un cateto en lugar de como la hipotenusa: si se introduce 8 como c y 10 como b, la fórmula da [[\\frac{6+10-8}{2} = 4]], no 2. Pon siempre el lado más largo en el campo de la hipotenusa.",
                "Olvidar restar c: sumar los catetos y dividir entre dos, [[\\frac{6+8}{2} = 7]], da un número mucho mayor que el verdadero inradio de 2.",
                "Olvidar dividir entre dos: [[6+8-10 = 4]] es el doble del inradio. La división entre dos forma parte de la fórmula, no es un paso final opcional.",
                "Introducir medidas de lados no válidas: los lados 3, 4 y 6 no satisfacen [[3^2+4^2 = 6^2]], ya que 25 no es igual a 36, así que la fórmula del inradio no se aplica a ellos.",
                "Ignorar la relación pitagórica: cualquier terna de longitudes se puede introducir en la fórmula, pero solo un triángulo rectángulo genuino da un inradio significativo. Comprueba [[a^2+b^2 = c^2]] primero.",
                "Mezclar unidades de medida: catetos en centímetros e hipotenusa en metros producen una respuesta incorrecta. Convierte cada medida a una unidad antes de calcular.",
                "Confundir el inradio con el diámetro: el inradio es la distancia desde el centro hasta el borde. El diámetro del incírculo es el doble del inradio, así que para un triángulo 6-8-10 es 4, no 2.",
                "Confundir el incentro con el circuncentro: el incentro está dentro del triángulo donde se cortan las bisectrices de los ángulos, mientras que el circuncentro es el punto medio de la hipotenusa. Son puntos diferentes.",
                "Suponer que el incírculo pasa por los vértices del triángulo: el incírculo toca los lados y nunca llega a un vértice. El círculo que pasa por los vértices es el circuncírculo.",
                "Suponer que el radio se mide a lo largo de un lado en lugar de perpendicular a él: el inradio es la distancia perpendicular desde el incentro hasta un lado, que es la distancia más corta hasta ese lado.",
                "Redondear los cálculos intermedios demasiado pronto: mantén la precisión completa durante la suma y la resta, y redondea solo la respuesta final. Redondear pronto desplaza el resultado.",
                "Usar solo dos longitudes de lados sin calcular primero la hipotenusa: la fórmula necesita los tres lados. Halla [[c]] con el teorema de Pitágoras antes de usarla.",
                "Confundir el perímetro con el semiperímetro: el semiperímetro es la mitad del perímetro, [[s = \\frac{a+b+c}{2}]]. Usar el perímetro completo en [[r = \\frac{A}{s}]] reduce la respuesta correcta a la mitad.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones prácticas del inradio de un triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es el trabajo de geometría en clase y las tareas escolares, donde los problemas de inradio ponen a prueba si los estudiantes pueden identificar la hipotenusa, aplicar [[r = \\frac{a+b-c}{2}]] y comprobar el resultado con el área y el semiperímetro. Los ejercicios de construcción de círculos usan la misma idea: dado un triángulo rectángulo, dibuja su incírculo hallando el incentro donde se cortan las bisectrices de los ángulos y ajustando un compás al inradio.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el incírculo cuando un círculo debe caber exactamente dentro de un marco triangular o cuando una esquina redondeada debe tocar dos bordes de una forma. El modelado geométrico y la geometría de coordenadas usan el incentro como el punto dentro de un triángulo que está a la misma distancia de los tres lados, que es el centro natural para una forma inscrita.",
            },
            {
              "kind": "p",
              "text": "Los profesores usan el tema como lección puente entre los triángulos y los círculos, porque el incírculo es uno de los primeros lugares donde las dos materias se encuentran. Las longitudes tangentes, las bisectrices de los ángulos, el área y el semiperímetro aparecen todos en una sola imagen, así que el inradio es una forma compacta de repasarlos juntos. Los proyectos de diseño reales que necesitan un círculo inscrito también necesitan tolerancias y límites de material más allá de esta página, así que trata el resultado como el valor geométrico exacto y añade los márgenes prácticos por separado.",
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
              "text": "Un triángulo rectángulo tiene catetos [[a = 20]] cm y [[b = 21]] cm e hipotenusa [[c = 29]] cm. Halla el inradio [[r]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Medida decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 10.5]] m, [[b = 14]] m y [[c = 17.5]] m, halla el inradio [[r]] en metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos [[a = 1.5]] m y [[b = 2]] m e hipotenusa [[c = 250]] cm. Halla el inradio en metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Halla la hipotenusa a partir de dos catetos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos [[a = 12]] cm y [[b = 16]] cm. Halla primero la hipotenusa y luego el inradio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Área y semiperímetro",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene catetos [[a = 15]] cm y [[b = 20]] cm e hipotenusa [[c = 25]] cm. Halla el área y el semiperímetro, luego halla el inradio con [[r = \\frac{A}{s}]], y confírmalo con la fórmula de los tres lados.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Identifica un triángulo rectángulo no válido",
            },
            {
              "kind": "p",
              "text": "A un estudiante le dan [[a = 7]] cm, [[b = 10]] cm y [[c = 12]] cm y le piden el inradio. Muestra por qué estos lados no forman un triángulo rectángulo, y explica qué debe hacer el estudiante en lugar de aplicar la fórmula.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Comprobación: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Comprobación: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: Convierte la hipotenusa: 250 cm equivalen a 2.5 m. Luego [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, que son 50 cm. Comprobación: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, luego [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[A = \\frac{15 \\times 20}{2} = 150]] centímetros cuadrados y [[s = \\frac{15+20+25}{2} = 30]] cm, así que [[r = \\frac{150}{30} = 5]] cm. La fórmula de los tres lados coincide: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[7^2+10^2 = 49+100 = 149]], mientras que [[12^2 = 144]], así que [[a^2+b^2]] no es igual a [[c^2]] y el triángulo no es rectángulo. El estudiante no debe aplicar la fórmula del inradio: primero debe volver a comprobar las medidas, y si son correctas, usar la fórmula general [[r = \\frac{A}{s}]] para un triángulo no rectángulo.",
            },
          ],
        },
      },
      "relatedHeading": "Explora calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea específica de triángulos rectángulos, así que elige la herramienta que corresponda a la medida que necesitas hallar.",
      "relatedItems": [
        "Calculadora del radio de un triángulo rectángulo",
        "Calculadora del circunradio de un triángulo rectángulo",
        "Calculadora del área de un triángulo rectángulo",
        "Calculadora del semiperímetro de un triángulo rectángulo",
        "Calculadora de lados de un triángulo rectángulo",
      ],
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula del inradio de un triángulo rectángulo?",
          "answer": "La fórmula es [[r = \\frac{a+b-c}{2}]], donde [[a]] y [[b]] son los catetos, [[c]] es la hipotenusa y [[r]] es el inradio. Suma los dos catetos, resta la hipotenusa y divide entre dos. Por ejemplo, un triángulo 6-8-10 da un inradio de 2.",
        },
        {
          "question": "¿Qué representa el inradio?",
          "answer": "El inradio es el radio del incírculo, el círculo que cabe dentro del triángulo y toca los tres lados. Es la distancia perpendicular desde el incentro hasta cualquier lado. En un triángulo 6-8-10, el inradio es 2, así que el incírculo tiene un radio de 2 unidades.",
        },
        {
          "question": "¿Qué es un incírculo?",
          "answer": "Un incírculo es un círculo trazado por completo dentro de un triángulo de modo que toca los tres lados, un punto de tangencia en cada lado. Cada triángulo tiene exactamente un incírculo. Es diferente del circuncírculo, que pasa por los tres vértices en su lugar.",
        },
        {
          "question": "¿Dónde se encuentra el incentro?",
          "answer": "El incentro es el punto donde se encuentran las tres bisectrices internas de los ángulos del triángulo. Siempre se encuentra dentro del triángulo. En un triángulo rectángulo con el ángulo recto en C, se encuentra sobre la bisectriz del ángulo de 90 grados, a distancia [[r]] de cada lado.",
        },
        {
          "question": "¿Por qué la fórmula del inradio resta la hipotenusa?",
          "answer": "Los segmentos tangentes desde el vértice del ángulo recto tienen longitud [[r]], así que los catetos son [[a = r+x]] y [[b = r+y]] mientras que la hipotenusa es [[c = x+y]]. Sumar los catetos da [[a+b = 2r+c]], así que restar [[c]] deja [[2r]]. La resta elimina las longitudes tangentes compartidas y aísla el inradio.",
        },
        {
          "question": "¿Por qué dividimos entre dos?",
          "answer": "Sumar los dos catetos cuenta el inradio dos veces, una en cada cateto, porque cada cateto contiene un segmento tangente de longitud [[r]] desde el vértice del ángulo recto. La suma [[a+b-c]] por tanto es igual a [[2r]], no a [[r]], así que dividir entre dos da el inradio único.",
        },
        {
          "question": "¿Puedo calcular el inradio usando solo los dos catetos?",
          "answer": "No directamente, porque la fórmula también necesita la hipotenusa. Primero halla la hipotenusa con [[c = \\sqrt{a^2+b^2}]], luego usa [[r = \\frac{a+b-c}{2}]]. Para los catetos 6 y 8, la hipotenusa es 10 y el inradio es 2. Usa la calculadora de lados para hallar una hipotenusa que falta.",
        },
        {
          "question": "¿Puedo calcular el inradio usando el área y el semiperímetro?",
          "answer": "Sí. La fórmula es [[r = \\frac{A}{s}]], donde [[A]] es el área y [[s]] es el semiperímetro. Para un triángulo rectángulo, [[A = \\frac{ab}{2}]] y [[s = \\frac{a+b+c}{2}]]. Para un triángulo 6-8-10, [[A = 24]] y [[s = 12]], así que [[r = 2]]. La calculadora de esta página usa la fórmula de los tres lados, así que trata la ruta del área como una comprobación independiente.",
        },
        {
          "question": "¿El inradio es lo mismo que el circunradio?",
          "answer": "No. El inradio es el radio del círculo dentro del triángulo que toca sus lados, [[r = \\frac{a+b-c}{2}]], mientras que el circunradio es el radio del círculo que pasa por los vértices, [[R = \\frac{c}{2}]]. En un triángulo 6-8-10 son 2 y 5.",
        },
        {
          "question": "¿Puede el inradio ser mayor que el cateto más corto de un triángulo?",
          "answer": "No. El inradio siempre es menor que cualquiera de los catetos, porque el incírculo debe caber dentro del triángulo. En un triángulo 3-4-5, el inradio es 1, menor que el cateto más corto de 3. Una respuesta mayor que el cateto más corto indica un error, normalmente un cateto introducido como hipotenusa.",
        },
        {
          "question": "¿Por qué la hipotenusa debe ser el lado más largo?",
          "answer": "La hipotenusa está opuesta al ángulo recto, el ángulo mayor del triángulo, y el lado más largo siempre está opuesto al ángulo mayor. El teorema de Pitágoras también lo impone: [[c^2 = a^2+b^2]] es mayor que [[a^2]] o [[b^2]] por sí solos, así que [[c]] es mayor que [[a]] y mayor que [[b]].",
        },
        {
          "question": "¿Cómo puedo comprobar si mi cálculo del inradio es correcto?",
          "answer": "Vuelve a calcular con la fórmula original, luego comprueba con el área y el semiperímetro, [[r = \\frac{A}{s}]], y confirma [[a^2+b^2 = c^2]] para los lados. Confirma también que la respuesta es positiva, menor que cualquiera de los catetos y está en la misma unidad que los lados. Si las cuatro comprobaciones coinciden, la respuesta es correcta.",
        },
      ],
    },
};
