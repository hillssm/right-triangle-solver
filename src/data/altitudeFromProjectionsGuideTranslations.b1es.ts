// altitudeFromProjectionsGuideTranslations.bes.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B1_ES = {
  "es": {
      "tocHeading": "Navegación de secciones",
      "tocItems": {
        "sec-intro": "Calcular la altura de un triángulo rectángulo a partir de las proyecciones",
        "sec-altitude": "¿Qué es la altura de un triángulo rectángulo?",
        "sec-projections": "¿Qué son las proyecciones en un triángulo rectángulo?",
        "sec-formula": "Fórmula de la altura del triángulo rectángulo a partir de las proyecciones",
        "sec-steps": "Cómo calcular la altura a partir de las proyecciones paso a paso",
        "sec-diagram": "Diagrama de la altura del triángulo rectángulo explicado",
        "sec-proof": "¿Por qué funciona la fórmula de la altura? Demostración con triángulos semejantes",
        "sec-examples": "Ejemplos resueltos de altura a partir de proyecciones",
        "sec-verify": "Cómo comprobar tu cálculo de la altura",
        "sec-relationships": "Relación entre la altura, la hipotenusa y los catetos del triángulo",
        "sec-geomean": "Teorema de la media geométrica y la altura del triángulo rectángulo",
        "sec-special": "Casos especiales y propiedades importantes",
        "sec-mistakes": "Errores comunes al hallar la altura a partir de las proyecciones",
        "sec-applications": "Aplicaciones prácticas del teorema de la altura",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-related": "Explora las calculadoras de triángulos rectángulos relacionadas",
        "sec-faq": "Preguntas frecuentes",
        "sec-conclusion": "Una raíz cuadrada, comprensión total",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcular la altura de un triángulo rectángulo a partir de las proyecciones",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplica las dos proyecciones sobre la hipotenusa y luego calcula la raíz cuadrada.",
            },
            {
              "kind": "p",
              "text": "La calculadora de la altura del triángulo rectángulo a partir de las proyecciones halla la altura de un triángulo rectángulo a partir de las dos proyecciones, [[p]] y [[q]], que la altura corta en la hipotenusa. No se necesitan catetos ni ángulos. Introduce la proyección [[p]] y la proyección [[q]] en la misma unidad, y la calculadora devuelve la altura [[h]] con el teorema de la altura:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "La fórmula funciona porque al trazar la altura desde el vértice del ángulo recto se crean dos triángulos más pequeños que son semejantes entre sí. La semejanza obliga a que la altura sea la media geométrica de las dos proyecciones. Como ejemplo rápido, si [[p=9\\text{ cm}]] y [[q=16\\text{ cm}]], multiplica [[9]] por [[16]] para obtener [[144]] y luego calcula la raíz cuadrada para obtener una altura de [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Escribe el primer segmento de la hipotenusa en el campo Proyección [[p]] y el segundo en el campo Proyección [[q]], manteniendo ambos en la misma unidad. Pulsa Calcular para ver la altura, y Restablecer borra los campos para un nuevo problema. El resultado lleva la misma unidad que las entradas. Si en cambio conoces los catetos del triángulo, prueba la <a href=\"/right-triangle-altitude-calculator/\">calculadora de altura</a> diseñada para ese caso.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "¿Qué es la altura de un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "La altura de un triángulo rectángulo es el segmento perpendicular trazado desde el vértice del ángulo recto hasta la hipotenusa. Su longitud mide la distancia más corta desde ese vértice hasta la hipotenusa, porque una perpendicular es siempre el camino más corto desde un punto hasta una recta.",
            },
            {
              "kind": "p",
              "text": "Al trazar la altura, esta cae sobre la hipotenusa en un punto llamado pie de la altura, que suele etiquetarse D. Desde D, la altura se eleva exactamente 90 grados hasta llegar al vértice del ángulo recto C. Este encuentro en ángulo recto es lo que convierte a CD en la altura y no en un segmento más.",
            },
            {
              "kind": "p",
              "text": "Los principiantes a veces confunden la altura con uno de los catetos. Los catetos, AC y BC, se encuentran en el ángulo recto y forman los lados exteriores del triángulo. La altura CD corre dentro del triángulo desde el vértice C hasta el lado AB. Es un tercer segmento distinto, con su propia longitud [[h]], y solo existe una vez que la altura se ha trazado de verdad.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa puede servir como base porque cualquier lado puede ser base una vez que se traza la altura correspondiente, lo que permite escribir el área como la mitad por la hipotenusa por esta altura. Trazar la altura también divide el triángulo en dos triángulos rectángulos más pequeños, ACD y CBD, que contienen las relaciones de semejanza detrás de cada fórmula de esta página.",
            },
          ],
        },
        "sec-projections": {
          "h2": "¿Qué son las proyecciones en un triángulo rectángulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Cuando la altura CD encuentra a la hipotenusa AB, el pie D divide AB en dos segmentos más pequeños: AD, llamado [[p]], y DB, llamado [[q]]. Estos dos segmentos son las proyecciones de los catetos sobre la hipotenusa. Cada uno es la sombra que un cateto proyecta sobre la hipotenusa cuando la luz brilla en línea recta a lo largo de la altura.",
            },
            {
              "kind": "p",
              "text": "La proyección [[p]] está junto al cateto AC, y la proyección [[q]] junto al cateto BC. Como son las dos partes de la hipotenusa, suman exactamente:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[c]] es la hipotenusa completa. Esta relación de suma ayuda a comprobar respuestas y a recuperar una proyección faltante cuando se conocen la hipotenusa y una proyección. Si necesitas el cálculo inverso, hallar las proyecciones a partir de las longitudes de los lados, la <a href=\"/right-triangle-projection-calculator/\">calculadora de proyección</a> resuelve esa dirección.",
            },
            {
              "kind": "p",
              "text": "Ambas proyecciones deben ser longitudes positivas. Un valor cero o negativo no describe ningún triángulo real, solo una figura degenerada. Y las proyecciones no son los catetos: los catetos AC y BC se inclinan hacia los lados, mientras que [[p]] y [[q]] yacen planos sobre la hipotenusa. Confundirlos es uno de los errores más comunes de los estudiantes.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Significado",
            ],
            "rows": [
              [
                "[[p]]",
                "Primer segmento de la hipotenusa",
              ],
              [
                "[[q]]",
                "Segundo segmento de la hipotenusa",
              ],
              [
                "[[h]]",
                "Altura perpendicular",
              ],
              [
                "[[c]]",
                "Hipotenusa completa",
              ],
              [
                "[[a]]",
                "Primer cateto del triángulo",
              ],
              [
                "[[b]]",
                "Segundo cateto del triángulo",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Fórmula de la altura del triángulo rectángulo a partir de las proyecciones",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la altura afirma:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al extraer la raíz cuadrada positiva de ambos lados se obtiene la fórmula de trabajo:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Cada símbolo tiene un significado fijo. La letra [[h]] representa la altura sobre la hipotenusa, la cantidad que quieres. Las letras [[p]] y [[q]] representan las dos proyecciones sobre la hipotenusa, las cantidades que introduces. La multiplicación une las proyecciones, y la raíz cuadrada deshace ese producto para devolver una longitud.",
            },
            {
              "kind": "p",
              "text": "La multiplicación aparece porque la semejanza entre los dos triángulos pequeños produce la proporción [[\\frac{h}{p}=\\frac{q}{h}]]. Al multiplicar en cruz esa proporción se obtiene [[h^2=p\\times q]]. La raíz cuadrada aparece porque [[h]] es una longitud, y solo la raíz positiva de [[h^2]] nombra una distancia real.",
            },
            {
              "kind": "p",
              "text": "Las unidades merecen atención. Si [[p]] y [[q]] se miden ambas en centímetros, su producto vive en centímetros cuadrados, lo cual es correcto para un paso intermedio de tipo área. Al extraer la raíz cuadrada, los centímetros cuadrados vuelven a ser centímetros planos para la altura final. Por eso las dos entradas deben compartir la misma unidad: mezclar unidades corrompería el producto y la respuesta. Una forma compacta de recordar la fórmula es que la altura es la media geométrica de las dos proyecciones, ya que la media geométrica de dos números es la raíz cuadrada de su producto.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Cómo calcular la altura a partir de las proyecciones paso a paso",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Identifica las dos proyecciones sobre la hipotenusa. Busca los segmentos en los que el pie de la altura divide la hipotenusa, y etiqueta el que está junto al cateto AC como [[p]] y el que está junto al cateto BC como [[q]].",
                "Confirma que ambas medidas usan la misma unidad. Si una está en milímetros y la otra en centímetros, convierte una de ellas antes de tocar la fórmula.",
                "Multiplica [[p]] y [[q]]. El producto [[h^2]] es un valor intermedio de tipo área, así que su unidad es el cuadrado de la unidad de entrada.",
                "Extrae la raíz cuadrada positiva del producto. La raíz negativa se descarta porque una longitud no puede ser negativa.",
                "Escribe la respuesta final con su unidad. Un número sin unidad invita a errores posteriores, sobre todo cuando alimenta un cálculo más largo.",
                "Comprueba que la respuesta sea razonable. La altura siempre queda entre las dos proyecciones, y nunca puede superar la mitad de la hipotenusa.",
              ],
            },
            {
              "kind": "p",
              "text": "Aquí está el método aplicado a un ejemplo completo. Supón que [[p=4\\text{ cm}]] y [[q=9\\text{ cm}]]. Primero multiplica: [[4\\times 9=36]], así que [[h^2=36\\text{ cm}^2]]. Luego extrae la raíz cuadrada positiva:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es [[6\\text{ cm}]]. Como comprobación rápida, [[6]] queda entre las proyecciones [[4]] y [[9]], coincidiendo con el comportamiento de media geométrica que se describe más adelante en esta guía.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagrama de la altura del triángulo rectángulo explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "El triángulo ABC tiene su ángulo recto en C. Desde C, la altura CD cae perpendicular a la hipotenusa AB, encontrándola en el pie D. El segmento AD se etiqueta [[p]], DB se etiqueta [[q]] y CD se etiqueta [[h]], mientras que la hipotenusa AB es [[c]] y los catetos AC y BC son [[a]] y [[b]].",
            },
            {
              "kind": "p",
              "text": "Dos cuadrados pequeños marcan los dos ángulos rectos: uno en C dentro del triángulo original, y otro en D donde la altura encuentra la hipotenusa. La altura CD aparece como un segmento interior limpio, visualmente distinto de los dos catetos que forman el marco exterior del triángulo.",
            },
            {
              "kind": "p",
              "text": "La altura divide ABC en dos triángulos rectángulos más pequeños, ACD y CBD, que son semejantes entre sí y al triángulo original. En los problemas de libros de texto, las proyecciones suelen describirse como los dos segmentos de la hipotenusa, o simplemente como los números situados a cada lado del pie de la altura. Etiquétalas [[p]] y [[q]] antes de calcular nada.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD a la hipotenusa AB, proyecciones AD = [[p]] y DB = [[q]], altura CD = [[h]]",
            "caption": "La altura CD divide la hipotenusa AB en las proyecciones [[p]] y [[q]]; [[h]] es la media geométrica de [[p]] y [[q]].",
          },
        },
        "sec-proof": {
          "h2": "¿Por qué funciona la fórmula de la altura? Demostración con triángulos semejantes",
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la altura no es una regla para memorizar a ciegas. Se deduce de la semejanza de los dos triángulos que la altura crea.",
            },
            {
              "kind": "p",
              "text": "En el triángulo ACD, los ángulos agudos en A y C suman 90 grados, y en el triángulo grande ABC, los ángulos A y B también suman 90 grados. Así, el ángulo en C dentro de ACD es igual al ángulo B, y el ángulo en A es igual al ángulo en C dentro de CBD. Los dos triángulos pequeños comparten los tres ángulos, lo que los hace semejantes.",
            },
            {
              "kind": "p",
              "text": "La semejanza significa que los lados correspondientes mantienen la misma razón. En el triángulo ACD, el lado opuesto al ángulo A es la altura [[h]]. En el triángulo CBD, el lado opuesto al ángulo igual en C es la proyección [[q]]. La otra pareja correspondiente es la proyección [[p]] (opuesta al segundo ángulo agudo en ACD) sobre la altura [[h]] (opuesta al ángulo correspondiente en CBD). Al igualarlas se obtiene la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Al multiplicar en cruz, la proporción se convierte en:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al extraer la raíz cuadrada de ambos lados se obtiene [[h=\\sqrt{p\\times q}]]. La ecuación [[h^2=p\\times q]] tiene dos raíces algebraicas, positiva y negativa, pero una longitud es una cantidad positiva, así que solo la raíz positiva describe la altura.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Los dos triángulos rectángulos más pequeños ACD y CBD con lados correspondientes etiquetados para mostrar [[\\frac{h}{p}=\\frac{q}{h}]]",
            "caption": "Los triángulos ACD y CBD son semejantes, así que [[\\frac{h}{p}=\\frac{q}{h}]] y [[h]] al cuadrado es igual a [[p]] por [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Ejemplos resueltos de altura a partir de proyecciones",
          "blocks": [
            {
              "kind": "h3",
              "text": "Ejemplo 1: Números enteros simples",
            },
            {
              "kind": "p",
              "text": "Dados [[p=4\\text{ cm}]] y [[q=9\\text{ cm}]], sustituye en la fórmula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es [[6\\text{ cm}]], un número entero porque [[36]] es un cuadrado perfecto.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Proyecciones iguales",
            },
            {
              "kind": "p",
              "text": "Dados [[p=5\\text{ cm}]] y [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Cuando las proyecciones son iguales, la altura es igual a cada proyección: el caso del triángulo rectángulo isósceles, donde la altura es exactamente la mitad de la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Proyecciones decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[p=3.6\\text{ m}]] y [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Los decimales no cambian nada: [[23.04]] es un cuadrado perfecto, así que la altura es exactamente [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Proyecciones desiguales",
            },
            {
              "kind": "p",
              "text": "Dados [[p=2\\text{ cm}]] y [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La altura es [[6\\text{ cm}]], no [[10\\text{ cm}]]. Promediar da la media aritmética, [[10]], pero la altura es la media geométrica, que es menor para entradas desiguales.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Cuadrado no perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[p=5\\text{ cm}]] y [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Aquí [[35]] no es un cuadrado perfecto, así que la respuesta exacta es [[\\sqrt{35}\\text{ cm}]]. Usa la aproximación [[5.916\\text{ cm}]] para el trabajo práctico, pero conserva la forma exacta cuando la respuesta alimente más cálculos.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Unidades de entrada distintas",
            },
            {
              "kind": "p",
              "text": "Dados [[p=40\\text{ mm}]] y [[q=9\\text{ cm}]]. Las unidades difieren, así que convierte primero: [[40\\text{ mm}=4\\text{ cm}]]. Entonces:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertir primero es lo único seguro: introducir [[40]] y [[9]] directamente da [[\\sqrt{40\\times 9}=\\sqrt{360}]], un número erróneo y sin unidad.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Cómo comprobar tu cálculo de la altura",
          "blocks": [
            {
              "kind": "h3",
              "text": "Método 1: Comprobación con la media geométrica",
            },
            {
              "kind": "p",
              "text": "Eleva tu altura al cuadrado y compárala con el producto de las proyecciones. Los dos valores deben coincidir. Para [[p=4]] y [[q=9]] con [[h=6]]: [[6^2=36]] y [[4\\times 9=36]]. La coincidencia confirma la aritmética.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Relaciones entre hipotenusa y catetos",
            },
            {
              "kind": "p",
              "text": "Reconstruye todo el triángulo y contrasta con una segunda fórmula. Primero suma las proyecciones: [[c=4+9=13]]. Luego recupera los catetos con las relaciones proyección-cateto: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] y [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Ahora verifica con [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], que coincide. Una <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> mantiene ordenada la aritmética de los catetos mientras compruebas.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Relación con el área del triángulo",
            },
            {
              "kind": "p",
              "text": "El mismo triángulo tiene dos expresiones para su área. Con los catetos: Área = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Con la hipotenusa y la altura: Área = [[(c\\times h)/2=(13\\times 6)/2=39]]. Ambas expresiones coinciden, lo que confirma de forma independiente que [[h=6]]. La herramienta <a href=\"/right-triangle-area-from-altitude-calculator/\">área a partir de la altura</a> se basa en esta misma relación.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Relación entre la altura, la hipotenusa y los catetos del triángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco fórmulas enlazan las seis partes etiquetadas. La tabla siguiente resume qué halla cada una y qué necesita.",
            },
            {
              "kind": "p",
              "text": "Las primeras cuatro fórmulas necesitan al menos una proyección. Provienen de los triángulos semejantes que la altura crea, así que solo se aplican cuando la altura se traza desde el vértice del ángulo recto. La quinta fórmula, [[h=ab/c]], no necesita ninguna proyección: proviene de igualar las dos expresiones del área, y funciona siempre que se conozcan los catetos y la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Esta es la diferencia práctica entre las dos calculadoras de altura de este sitio. Cuando conoces las proyecciones, el teorema de la altura da [[h]] directamente en un paso. Cuando conoces los lados, <a href=\"/right-triangle-altitude-from-sides-calculator/\">hallar la altura a partir de los lados</a> usa la ruta del área. Elige la herramienta que coincida con tus datos.",
            },
            {
              "kind": "p",
              "text": "Otra lectura útil de [[a^2=p\\times c]]: cada cateto es la media geométrica de la hipotenusa y su proyección adyacente, igual que la altura es la media geométrica de las dos proyecciones.",
            },
          ],
          "table": {
            "headers": [
              "Fórmula",
              "Halla",
              "Necesita",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "La hipotenusa",
                "Ambas proyecciones",
              ],
              [
                "[[h^2=p\\times q]]",
                "La altura",
                "Ambas proyecciones",
              ],
              [
                "[[a^2=p\\times c]]",
                "El cateto junto a la proyección [[p]]",
                "La proyección [[p]] y la hipotenusa",
              ],
              [
                "[[b^2=q\\times c]]",
                "El cateto junto a la proyección [[q]]",
                "La proyección [[q]] y la hipotenusa",
              ],
              [
                "[[h=ab/c]]",
                "La altura",
                "Ambos catetos y la hipotenusa",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Teorema de la media geométrica y la altura del triángulo rectángulo",
          "blocks": [
            {
              "kind": "p",
              "text": "La media geométrica de dos números positivos es la raíz cuadrada de su producto. Para [[p]] y [[q]] es [[\\sqrt{p\\times q}]], que es exactamente la fórmula de la altura. Así que decir que la altura es la media geométrica de las proyecciones es solo reformular el teorema con otras palabras.",
            },
            {
              "kind": "p",
              "text": "La media aritmética es el promedio familiar: [[(p+q)/2]]. Para [[p=4]] y [[q=9]], la media geométrica es [[\\sqrt{36}=6]] mientras que la media aritmética es [[13/2=6.5]]. La altura es igual a [[6]], no a [[6.5]], porque la proporción de triángulos semejantes obliga a una relación multiplicativa, no aditiva.",
            },
            {
              "kind": "p",
              "text": "La media geométrica nunca supera la media aritmética para entradas positivas, con igualdad solo cuando [[p=q]]. Por eso la altura es mayor, en relación con la hipotenusa, cuando las proyecciones son iguales. Un rectángulo de [[4]] por [[9]] y un cuadrado de [[6]] por [[6]] tienen la misma área, [[36]], que es la misma idea dibujada como figuras: la altura es el lado del cuadrado cuya área es igual a la del rectángulo.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Rectángulo de [[4]] por [[9]] y cuadrado de [[6]] por [[6]] con igual área, más una recta numérica que compara la media geométrica [[6]] y la media aritmética [[6.5]]",
            "caption": "Para [[p=4]] y [[q=9]], la media geométrica [[6]] (la altura) queda por debajo de la media aritmética [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Casos especiales y propiedades importantes",
          "blocks": [
            {
              "kind": "h3",
              "text": "Proyecciones iguales",
            },
            {
              "kind": "p",
              "text": "Cuando [[p=q]], la altura es igual a ese valor común: [[h=\\sqrt{p\\times p}=p]]. El pie de la altura cae en el punto medio de la hipotenusa, los catetos son iguales, y el triángulo es un triángulo rectángulo isósceles con ángulos agudos de 45 grados, lo que da la altura máxima para una hipotenusa fija.",
            },
            {
              "kind": "h3",
              "text": "Proyecciones muy desiguales",
            },
            {
              "kind": "p",
              "text": "Cuando [[p]] es minúscula y [[q]] es enorme, la altura se mantiene modesta: [[p=1]] y [[q=100]] dan [[h=10]], muy por debajo del punto medio de las proyecciones. La media geométrica pondera más la entrada pequeña de lo que lo haría un promedio.",
            },
            {
              "kind": "h3",
              "text": "Hipotenusa fija",
            },
            {
              "kind": "p",
              "text": "Mantén constante la hipotenusa [[c=p+q]] y varía el reparto. El producto [[p\\times q]], y por tanto la altura, alcanza su máximo cuando el reparto es igual. Algebraicamente, [[h\\le\\frac{p+q}{2}]], con igualdad exactamente cuando [[p=q]]. En términos sencillos, ninguna altura puede superar la mitad de su hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Proyecciones cero",
            },
            {
              "kind": "p",
              "text": "Poner [[p=0]] da [[h=0]]: el pie de la altura coincide con el vértice A, el triángulo colapsa en un segmento, y no queda ningún triángulo genuino. Trata las proyecciones cero como degeneradas, no como entrada válida para la calculadora.",
            },
            {
              "kind": "h3",
              "text": "Proyecciones negativas",
            },
            {
              "kind": "p",
              "text": "Una proyección es una longitud, y las longitudes no pueden ser negativas. Una entrada negativa no tiene significado geométrico y no produce ninguna altura válida; el error está antes, en cómo se midió el segmento.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dos triángulos rectángulos con la misma hipotenusa pero repartos de proyecciones distintos que muestran alturas diferentes",
            "caption": "Misma hipotenusa, repartos distintos: las proyecciones iguales dan la altura más alta.",
          },
        },
        "sec-mistakes": {
          "h2": "Errores comunes al hallar la altura a partir de las proyecciones",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Sumar las proyecciones en vez de multiplicarlas. La proporción de triángulos semejantes exige un producto: con [[p=4]] y [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] es erróneo, mientras que [[\\sqrt{4\\times 9}=6]] es correcto.",
                "Olvidar la raíz cuadrada. Detenerse en [[h^2=36]] deja un número de tipo área donde pertenece una longitud. Extrae siempre la raíz cuadrada positiva para terminar.",
                "Confundir las proyecciones con los catetos. Los catetos se inclinan fuera de la hipotenusa mientras [[p]] y [[q]] yacen planos sobre ella; solo los segmentos de la hipotenusa pertenecen al teorema de la altura.",
                "Mezclar unidades sin convertir. Con [[p=40\\text{ mm}]] y [[q=9\\text{ cm}]], convierte primero ([[40\\text{ mm}=4\\text{ cm}]]) y luego calcula [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Introducir medidas negativas. Una proyección negativa no tiene sentido y puede producir resultados imaginarios. Confirma que tanto [[p]] como [[q]] sean positivas antes de calcular.",
                "Arrastrar [[h^2]] como si fuera [[h]] en soluciones largas. Mantén las etiquetas claras: [[h^2=36]] es el paso al cuadrado, [[h=6]] es la altura.",
                "Redondear demasiado pronto. Conserva las formas exactas como [[\\sqrt{35}]] el mayor tiempo posible y redondea solo la respuesta final.",
                "Aplicar la fórmula a un triángulo no rectángulo. La proporción [[\\frac{h}{p}=\\frac{q}{h}]] necesita el ángulo recto en C; sin él, el argumento de semejanza colapsa y la fórmula no se cumple.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicaciones prácticas del teorema de la altura",
          "blocks": [
            {
              "kind": "p",
              "text": "Las clases de geometría usan este teorema constantemente. Los problemas de altura prueban si los estudiantes pueden detectar las proyecciones, elegir la fórmula correcta y verificar con el teorema de Pitágoras, y los ejercicios de los libros de texto suelen entregar las proyecciones como simples números en un diagrama etiquetado.",
            },
            {
              "kind": "p",
              "text": "En problemas de geometría de tipo construcción, el teorema completa un triángulo rectángulo cuando solo se conocen medidas parciales. Al diseñar una cercha triangular puede que primero se fijen los segmentos de la hipotenusa, con la altura determinando la altura del vértice, y las demostraciones de semejanza usan directamente la misma proporción [[\\frac{h}{p}=\\frac{q}{h}]].",
            },
            {
              "kind": "p",
              "text": "Los bocetos de topografía e ingeniería a veces modelan una línea de visión como la altura de un triángulo rectángulo, con las proyecciones leídas sobre una línea base. Dos distancias arbitrarias del terreno no determinan una altura por sí solas; la geometría del triángulo rectángulo debe cumplirse de verdad antes de que el teorema se aplique.",
            },
            {
              "kind": "p",
              "text": "Los planos arquitectónicos de hastiales o techos de lámina plegada usan las mismas relaciones para recuperar una dimensión faltante, siempre que el ángulo recto esté realmente ahí.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de práctica con respuestas",
          "blocks": [
            {
              "kind": "h3",
              "text": "Problema 1: Principiante",
            },
            {
              "kind": "p",
              "text": "Las proyecciones de un triángulo rectángulo son [[p=25\\text{ cm}]] y [[q=16\\text{ cm}]]. Halla la altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Principiante-intermedio",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene proyecciones [[p=12\\text{ m}]] y [[q=27\\text{ m}]]. Halla la altura a la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Intermedio",
            },
            {
              "kind": "p",
              "text": "El pie de la altura divide la hipotenusa en segmentos de [[7\\text{ in}]] y [[28\\text{ in}]]. ¿Cuál es la altura?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Decimales",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene proyecciones [[p=2.5\\text{ ft}]] y [[q=14.4\\text{ ft}]]. Calcula la altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Aplicación",
            },
            {
              "kind": "p",
              "text": "Una cercha de techo en triángulo rectángulo tiene una viga de atado como hipotenusa. El pie de la altura divide la viga de atado en segmentos de [[3.2\\text{ m}]] y [[12.8\\text{ m}]]. Halla la altura de la cercha en la altura.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Una raíz cuadrada, comprensión total",
          "blocks": [
            {
              "kind": "p",
              "text": "Una raíz cuadrada captura toda la idea: la altura de un triángulo rectángulo es la media geométrica de las dos proyecciones sobre su hipotenusa. Multiplica [[p]] y [[q]], extrae la raíz cuadrada positiva y mantén las unidades coherentes, y la respuesta está en tu mano.",
            },
            {
              "kind": "p",
              "text": "Detrás de ese corto cálculo hay una pieza limpia de geometría. La altura crea dos triángulos semejantes, la semejanza da la proporción, y la proporción da la fórmula. Cuando puedes ver esa cadena, comprobar respuestas, evitar errores y reconocer proyecciones en nuevos problemas se vuelve rutina.",
            },
          ],
        },
      },
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "question": "¿Cuál es la fórmula de la altura a partir de las proyecciones?",
          "answer": "La fórmula es [[h=\\sqrt{p\\times q}]], donde [[h]] es la altura a la hipotenusa y [[p]] y [[q]] son las dos proyecciones. Ambas proyecciones deben ser longitudes positivas medidas en la misma unidad. Multiplícalas y luego extrae la raíz cuadrada positiva. El resultado es la altura en la misma unidad que las entradas.",
        },
        {
          "question": "¿Qué son las proyecciones sobre la hipotenusa?",
          "answer": "Las proyecciones son los dos segmentos en los que el pie de la altura divide la hipotenusa. En el triángulo ABC con el ángulo recto en C y la altura CD, el segmento AD es la proyección [[p]] y DB es la proyección [[q]]. Juntas forman la hipotenusa completa, así que [[p+q=c]]. Son segmentos planos sobre la hipotenusa, no los catetos del triángulo.",
        },
        {
          "question": "¿Por qué la altura es la media geométrica de dos proyecciones?",
          "answer": "Porque la altura crea dos triángulos semejantes. En los triángulos ACD y CBD, los lados correspondientes dan la proporción [[\\frac{h}{p}=\\frac{q}{h}]]. Al multiplicar en cruz se obtiene [[h^2=p\\times q]], así que [[h=\\sqrt{p\\times q}]]. Como la media geométrica de dos números es la raíz cuadrada de su producto, la altura es exactamente la media geométrica de [[p]] y [[q]].",
        },
        {
          "question": "¿Puedo hallar la altura sin conocer los catetos del triángulo?",
          "answer": "Sí. El teorema de la altura solo necesita las dos proyecciones, así que los catetos son una entrada innecesaria. Introduce [[p]] y [[q]] en la calculadora y devuelve [[h]] directamente. Esta es la ruta más rápida cuando un diagrama o el enunciado del problema da los segmentos de la hipotenusa. Si en cambio conoces los catetos, se aplica una fórmula distinta, [[h=ab/c]].",
        },
        {
          "question": "¿Pueden las dos proyecciones tener longitudes distintas?",
          "answer": "Sí, y normalmente las tienen. Las proyecciones son dos longitudes positivas cualesquiera, iguales o desiguales, y la fórmula maneja ambas. Con [[p=2]] y [[q=18]] la altura es [[6]], situada entre los dos valores. Las proyecciones iguales son simplemente el caso especial que produce un triángulo rectángulo isósceles.",
        },
        {
          "question": "¿Qué ocurre cuando ambas proyecciones son iguales?",
          "answer": "Cuando [[p=q]], la altura es igual a ese valor común, ya que [[\\sqrt{p\\times p}=p]]. El pie de la altura cae en el punto medio de la hipotenusa, y el triángulo se convierte en un triángulo rectángulo isósceles con dos catetos iguales y ángulos agudos de [[45^\\circ]]. Para una hipotenusa fija, este reparto también da la altura más alta posible.",
        },
        {
          "question": "¿Puede la altura ser mayor que alguna de las proyecciones?",
          "answer": "Puede superar la proyección menor. Con [[p=2]] y [[q=18]], la altura es [[6]], que es mayor que [[p=2]]. La media geométrica siempre queda entre las dos entradas, así que la altura cae entre [[p]] y [[q]]. Nunca puede superar la proyección mayor, y nunca puede superar la mitad de la hipotenusa.",
        },
        {
          "question": "¿Qué pasa si las proyecciones usan unidades distintas?",
          "answer": "Convierte una de ellas para que ambas compartan una unidad antes de calcular. Por ejemplo, cambia [[40\\text{ mm}]] a [[4\\text{ cm}]] cuando la otra proyección es [[9\\text{ cm}]], y luego calcula [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mezclar unidades sin convertir corrompe el producto. La calculadora asume unidades coincidentes, así que uniformiza primero.",
        },
        {
          "question": "¿Puede la altura ser mayor que la mitad de la hipotenusa?",
          "answer": "No. Para cualesquiera [[p]] y [[q]] positivas, la media geométrica nunca supera la media aritmética, así que [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. La altura es exactamente igual a la mitad de la hipotenusa solo cuando [[p=q]]. Cualquier resultado de la calculadora mayor que la mitad de la hipotenusa indica un error de entrada o de aritmética.",
        },
        {
          "question": "¿Cómo compruebo mi cálculo de la altura?",
          "answer": "Eleva la altura al cuadrado y confirma que es igual a [[p\\times q]]. Para una comprobación más profunda, reconstruye el triángulo: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], y luego verifica [[h=ab/c]]. También puedes comparar las dos expresiones del área, [[(a\\times b)/2]] y [[(c\\times h)/2]], que deben coincidir. Si las tres comprobaciones pasan, la respuesta es sólida.",
        },
        {
          "question": "¿Está relacionado el teorema de la altura con el teorema de Pitágoras?",
          "answer": "Describen el mismo triángulo rectángulo desde ángulos distintos. El teorema de la altura proviene de la semejanza, mientras que el teorema de Pitágoras relaciona los tres lados: [[a^2+b^2=c^2]]. Se refuerzan mutuamente: con [[p=4]] y [[q=9]], los catetos [[\\sqrt{52}]] y [[\\sqrt{117}]] satisfacen [[52+117=169=13^2]], confirmando el triángulo que describe el teorema de la altura.",
        },
        {
          "question": "¿Puedo usar esta fórmula para un triángulo no rectángulo?",
          "answer": "No. La proporción [[\\frac{h}{p}=\\frac{q}{h}]] depende de los triángulos semejantes que crea una altura trazada desde un vértice de ángulo recto. Sin ese ángulo recto, el argumento de semejanza falla y [[h^2=p\\times q]] no se cumple. Para triángulos generales, usa fórmulas de altura basadas en el área o trigonométricas adecuadas a los datos dados.",
        },
      ],
      "relatedHeading": "Explora las calculadoras de triángulos rectángulos relacionadas",
      "relatedIntro": "Estas herramientas resuelven los cálculos vecinos: hallar proyecciones, hallar la altura a partir de las longitudes de los lados, y convertir una altura en un área. Cada una combina naturalmente con el teorema de la altura de esta página.",
      "relatedItems": [
        "Calculadora de altura del triángulo rectángulo",
        "Calculadora de altura del triángulo rectángulo a partir de los lados",
        "Calculadora de proyección del triángulo rectángulo",
        "Calculadora de área del triángulo rectángulo a partir de la altura",
        "Calculadora de lados del triángulo rectángulo",
      ],
    },
};
