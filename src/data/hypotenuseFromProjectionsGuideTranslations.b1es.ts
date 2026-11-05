// hypotenuseFromProjectionsGuideTranslations.bes.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B1_ES = {
  "es": {
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-altitude": "Cómo se relacionan las proyecciones de la hipotenusa con la altura",
        "sec-applications": "Aplicaciones prácticas de los cálculos de proyecciones de la hipotenusa",
        "sec-calculate": "Calcular la hipotenusa a partir de dos proyecciones",
        "sec-compare": "Hipotenusa a partir de proyecciones frente a hipotenusa a partir de catetos",
        "sec-diagram": "Diagrama de proyección de la hipotenusa de un triángulo rectángulo explicado",
        "sec-examples": "Ejemplos resueltos de hipotenusa a partir de proyecciones",
        "sec-faq": "Preguntas frecuentes",
        "sec-formula": "Fórmula de la hipotenusa a partir de proyecciones en un triángulo rectángulo",
        "sec-how": "Cómo usar la calculadora de hipotenusa a partir de proyecciones",
        "sec-intro": "Calculadora de hipotenusa a partir de proyecciones de un triángulo rectángulo",
        "sec-legs": "Relación entre las proyecciones de la hipotenusa y los catetos del triángulo",
        "sec-manual": "Cómo calcular la hipotenusa a partir de proyecciones manualmente",
        "sec-mistakes": "Errores comunes al calcular la hipotenusa a partir de proyecciones",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-pythagoras": "Proyecciones de la hipotenusa y el teorema de Pitágoras",
        "sec-related": "Explora las calculadoras de triángulos rectángulos relacionadas",
        "sec-special": "Casos especiales y propiedades importantes",
        "sec-understanding": "Comprender la hipotenusa y sus dos segmentos",
        "sec-verify": "Cómo verificar tu cálculo de la hipotenusa",
        "sec-what": "¿Qué son las proyecciones de la hipotenusa en un triángulo rectángulo?",
        "sec-why": "¿Por qué la hipotenusa es igual a la suma de sus proyecciones?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Los dos campos de entrada aceptan las longitudes de proyección p y q, ambas medidas a lo largo de la hipotenusa. Los selectores de unidad te permiten introducir centímetros, metros, milímetros, pies o pulgadas, siempre que p y q usen unidades compatibles antes de sumarse.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Pulsa Calcular hipotenusa c para ver el resultado, y usa Restablecer para limpiar los campos y empezar un nuevo problema. Solo se aceptan longitudes positivas, porque una proyección es un segmento real de la hipotenusa, y un valor cero o negativo no puede describir uno.",
            },
            {
              "kind": "p",
              "text": "El resultado es la longitud completa de la hipotenusa c en la unidad elegida. La aritmética es una simple suma, pero las secciones siguientes explican qué significan los segmentos y cómo comprobar la respuesta a mano.",
            },
          ],
          "h2": "Calcular la hipotenusa a partir de dos proyecciones",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula es [[c = p + q]], donde c es la hipotenusa completa, p es el primer segmento de proyección, y q es el segundo. Usa la suma en lugar de la multiplicación o las raíces cuadradas porque las dos proyecciones son partes adyacentes de un mismo lado recto, y la suma de segmentos reconstruye ese lado a partir de sus partes. Piensa en medir dos trozos de una tabla y sumar las medidas para obtener la longitud total de la tabla.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Una pregunta frecuente es por qué la fórmula no promedia los dos segmentos. Promediar daría la mitad de la hipotenusa, lo cual responde a otra pregunta. La suma reconstruye el lado completo; el promedio y la media geométrica pertenecen a otras fórmulas tratadas más adelante en esta guía.",
            },
            {
              "kind": "p",
              "text": "Toma [[p = 7]] cm y [[q = 11]] cm. La sustitución da [[c = 7 + 11]], por lo que [[c = 18]] cm. La fórmula en sí es sencilla; lo importante es entender qué dos segmentos cuentan como proyecciones.",
            },
            {
              "kind": "p",
              "text": "Ambos segmentos deben usar unidades compatibles antes de sumarlos. Si p está en milímetros y q en centímetros, convierte uno de ellos primero, exactamente como te pide la calculadora de esta página.",
            },
          ],
          "h2": "Fórmula de la hipotenusa a partir de proyecciones en un triángulo rectángulo",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve pasos cortos te llevan desde un diagrama etiquetado hasta una hipotenusa verificada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Localiza la hipotenusa: el lado opuesto al ángulo recto.",
                "Encuentra el punto donde la altura desde el ángulo recto se encuentra con la hipotenusa.",
                "Identifica las dos proyecciones p y q como los segmentos a cada lado de ese punto, usando la guía de la <a href=\"/right-triangle-projection-p-calculator/\">calculadora de proyección p</a> para el primer segmento. La <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> trata el segundo segmento de la misma manera.",
                "Convierte ambas medidas a unidades compatibles si es necesario.",
                "Introduce p en el campo Proyección p y q en el campo Proyección q.",
                "Haz clic en el botón Calcular hipotenusa c.",
                "Lee el resultado de la hipotenusa en la unidad elegida.",
                "Usa Restablecer antes de empezar un nuevo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "La identificación correcta es lo más importante. Los campos esperan los dos segmentos de la propia hipotenusa, no los catetos ni la altura. Introducir el par equivocado también produce una suma, pero no será la hipotenusa.",
            },
          ],
          "h2": "Cómo usar la calculadora de hipotenusa a partir de proyecciones",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora halla la hipotenusa de un triángulo rectángulo sumando sus dos segmentos de proyección.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones p y q son las dos partes de la hipotenusa creadas cuando la altura desde el ángulo recto se encuentra con ella. Introduce ambas longitudes, y la calculadora las suma con la fórmula [[c = p + q]] para devolver la hipotenusa completa. Por ejemplo, si [[p = 4]] cm y [[q = 9]] cm, entonces [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es el lado más largo del triángulo rectángulo y se encuentra opuesta al ángulo recto. La calculadora aparece primero en esta página, seguida de la fórmula, la geometría que la respalda, ejemplos resueltos y formas de verificar tu respuesta.",
            },
            {
              "kind": "p",
              "text": "La guía es apta para estudiantes de secundaria que se encuentran con las proyecciones por primera vez, clases de geometría de bachillerato y cualquiera que compruebe la tarea. Cada fórmula se trabaja con números reales, para que puedas seguir cada paso sin detenerte a descifrar símbolos.",
            },
          ],
          "h2": "Calculadora de hipotenusa a partir de proyecciones de un triángulo rectángulo",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "El cálculo manual es una simple sustitución en [[c = p + q]]. Toma [[p = 3.6]] cm y [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sustituye los valores: [[c = 3.6 + 6.4]]. Súmalos: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Alinea los puntos decimales al sumar a mano: 3.6 más 6.4 da 10.0, y el cero final se puede quitar para obtener un limpio [[c = 10]] cm. Mantén la unidad junto a la respuesta; un número sin unidad no es una longitud completa.",
            },
            {
              "kind": "p",
              "text": "No se necesita ningún cálculo pitagórico, porque ambas longitudes de proyección ya se conocen. Para comprobar, confirma que la suma tiene sentido: 3.6 más 6.4 es claramente 10, y la hipotenusa debe ser más larga que cualquiera de las proyecciones por separado.",
            },
          ],
          "h2": "Cómo calcular la hipotenusa a partir de proyecciones manualmente",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "La hipotenusa es el lado opuesto al ángulo recto, y en cualquier triángulo rectángulo no degenerado es el lado más largo. Cuando la altura desde el vértice del ángulo recto cae perpendicular a ella, la hipotenusa se divide en dos segmentos más cortos que quedan uno junto al otro sobre la misma línea recta.",
            },
            {
              "kind": "p",
              "text": "Como ambos segmentos yacen sobre ese único lado, se comportan como dos trozos adyacentes de una regla: colocarlos juntos reconstruye el lado completo con exactitud, sin superposición y sin huecos. Por eso las proyecciones siempre suman la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Estas etiquetas coinciden con el diagrama principal de abajo. Los vértices A y B son las esquinas de los ángulos agudos, C es el vértice del ángulo recto, y D es el pie de la altura CD sobre la hipotenusa AB, con [[AD = p]] y [[DB = q]].",
            },
          ],
          "h2": "Comprender la hipotenusa y sus dos segmentos",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Primer cateto perpendicular",
              ],
              [
                "b",
                "Segundo cateto perpendicular",
              ],
              [
                "c",
                "Hipotenusa completa",
              ],
              [
                "p",
                "Primera proyección de la hipotenusa",
              ],
              [
                "q",
                "Segunda proyección de la hipotenusa",
              ],
              [
                "h",
                "Altura sobre la hipotenusa",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Empieza con un triángulo rectángulo y traza la altura desde el vértice del ángulo recto perpendicular a la hipotenusa. La altura toca la hipotenusa en un punto, llamado pie, y ese punto divide la hipotenusa en dos segmentos adyacentes. Esos dos segmentos son las proyecciones de la hipotenusa: [[p = AD]] y [[q = DB]] cuando el triángulo es ABC con su ángulo recto en C y altura CD. La <a href=\"/right-triangle-projection-calculator/\">calculadora de proyección</a> trata cada segmento por separado.",
            },
            {
              "kind": "p",
              "text": "Una proyección no es un cateto. Los catetos a y b son los dos lados que forman el ángulo recto, mientras que las proyecciones p y q yacen sobre la propia hipotenusa. Confundirlos es el error de etiquetado más común, así que pregunta siempre: ¿esta longitud está sobre la hipotenusa, o es uno de los lados alrededor del ángulo recto?",
            },
            {
              "kind": "p",
              "text": "Aquí tienes un ejemplo fácil para principiantes. Si la altura divide una hipotenusa en un segmento de 4 cm y un segmento de 9 cm, entonces [[p = 4]] cm y [[q = 9]] cm, y la hipotenusa completa es [[c = 4 + 9 = 13]] cm. La fórmula [[c = p + q]] simplemente reconstruye el lado completo a partir de sus dos partes.",
            },
            {
              "kind": "p",
              "text": "Un hábito de etiquetado rápido evita la mayoría de los errores: empieza en el vértice del ángulo recto C, traza la altura hasta la hipotenusa y marca el pie D. El segmento que toca A es p y el segmento que toca B es q. Una vez establecidas esas dos etiquetas, el resto de la guía se aplica directamente.",
            },
          ],
          "h2": "¿Qué son las proyecciones de la hipotenusa en un triángulo rectángulo?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las mismas proyecciones dan la altura mediante el teorema de la media geométrica: [[h^2 = pq]], por lo que [[h = \\sqrt{pq}]]. Con [[p = 9]] cm y [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Compara las dos fórmulas: [[c = p + q]] suma las proyecciones, mientras que [[h = \\sqrt{pq}]] toma su media geométrica. Responden a preguntas distintas. La hipotenusa es la longitud del lado completo; la altura es la altura perpendicular desde el ángulo recto hasta ese lado.",
            },
            {
              "kind": "p",
              "text": "Para problemas de altura, usa la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de proyecciones</a>, que está construida alrededor de [[h = \\sqrt{pq}]]. Mantén los dos resultados separados: en este triángulo la hipotenusa es de 25 cm mientras que la altura es solo de 12 cm.",
            },
            {
              "kind": "p",
              "text": "Aquí se aplica una comprobación de coherencia incorporada: la altura siempre es más corta que la hipotenusa. En el ejemplo resuelto, 12 cm está muy por debajo de 25 cm. Si tu altura alguna vez supera a tu hipotenusa, revisa qué fórmula usaste.",
            },
          ],
          "h2": "Cómo se relacionan las proyecciones de la hipotenusa con la altura",
          "image": {
            "alt": "Triángulo rectángulo con proyecciones 9 y 16 sobre la hipotenusa, hipotenusa 25, y altura 12 trazada perpendicular a la hipotenusa",
            "caption": "Mismas proyecciones, dos fórmulas: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b, y el lado AB es la hipotenusa c. La altura CD baja desde C perpendicular a AB y la toca en D.",
            },
            {
              "kind": "p",
              "text": "Un buen orden de lectura empieza en el vértice C: recorre el cateto a hasta A, el cateto b hasta B, y luego sigue la hipotenusa c desde A hasta B. Haz una pausa en D, el pie de la altura, para ver la división en p y q. Leer el diagrama de esta manera conecta las etiquetas con la fórmula.",
            },
            {
              "kind": "p",
              "text": "El punto D divide AB en dos partes: el segmento AD es la proyección p y el segmento DB es la proyección q. Las etiquetas están directamente sobre el diagrama para que puedas ver dónde empieza p, dónde termina q, y cómo los dos juntos abarcan todo el lado de A a B.",
            },
            {
              "kind": "p",
              "text": "Las marcas de ángulo recto en C y D confirman la geometría. La marca en C convierte AB en la hipotenusa, y la marca en D confirma que CD es la altura. El triángulo original queda ahora dividido en dos triángulos rectángulos más pequeños, ACD y CBD, que vuelven más adelante en esta guía.",
            },
          ],
          "h2": "Diagrama de proyección de la hipotenusa de un triángulo rectángulo explicado",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C; altura CD trazada perpendicular a la hipotenusa AB, dividiéndola en la proyección p (segmento AD) y la proyección q (segmento DB), con los catetos a y b etiquetados",
            "caption": "La altura CD divide la hipotenusa AB en las proyecciones p y q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, la sustitución y la respuesta final. El comentario se mantiene breve para que la aritmética quede visible.",
            },
            {
              "kind": "p",
              "text": "Todos los ejemplos mantienen las unidades coherentes desde los valores dados hasta la respuesta. Cuando las unidades difieren, el ejemplo convierte primero y lo dice explícitamente, para que puedas copiar el hábito en tu propio trabajo.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Números enteros",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 4]] cm y [[q = 9]] cm, la fórmula [[c = p + q]] da [[c = 4 + 9]], por lo que [[c = 13]] cm. Dos proyecciones enteras producen aquí una hipotenusa entera, aunque eso no está garantizado en general.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: Proyecciones iguales",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 5]] cm y [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Proyecciones iguales significan que la altura incide en el punto medio de la hipotenusa, lo cual ocurre exactamente cuando los dos catetos son iguales: un triángulo rectángulo isósceles. Como los catetos son iguales, la altura también es la mediana, por eso biseca la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Proyecciones decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 3.6]] m y [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Alinea los puntos decimales y suma como de costumbre; la unidad se mantiene en metros en todo momento.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Proyecciones desiguales",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 2]] cm y [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Las proyecciones no necesitan tener un tamaño parecido; la suma sigue reconstruyendo la hipotenusa completa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 125]] mm y [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Los valores grandes no cambian nada del método.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Unidades mixtas",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 40]] mm y [[q = 9]] cm, convierte primero: 40 mm equivalen a 4 cm. Entonces [[c = 4 + 9 = 13]] cm. Sumar antes de convertir daría un 49 sin sentido.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[p = \\frac{1}{2}]] ft y [[q = \\frac{3}{4}]] ft, escribe ambos con denominador 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, que es 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Hallar una proyección faltante",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[p = 9]] cm, resuelve [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Este paso inverso muestra que la relación funciona en ambos sentidos, aunque la calculadora de esta página suma p y q para hallar c en lugar de resolver una proyección faltante.",
            },
          ],
          "h2": "Ejemplos resueltos de hipotenusa a partir de proyecciones",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las proyecciones también determinan los catetos mediante el teorema de las proyecciones: [[a^2 = cp]] y [[b^2 = cq]]. Cada cateto es la media geométrica de la hipotenusa y su proyección adyacente, un hecho que se deriva de la semejanza de los triángulos pequeños con el original.",
            },
            {
              "kind": "p",
              "text": "Al extraer raíces cuadradas se obtiene [[a = \\sqrt{cp}]] y [[b = \\sqrt{cq}]]. Con [[p = 9]] cm y [[q = 16]] cm, primero halla [[c = 9 + 16 = 25]] cm. Entonces [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm y [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es, por tanto, la clave que desbloquea los lados restantes: una vez conocida c, cada cateto se deduce de su propia proyección. La <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> resuelve problemas similares de lados faltantes directamente.",
            },
            {
              "kind": "p",
              "text": "El emparejamiento no es arbitrario: el cateto a se apoya contra la proyección p en el triángulo pequeño ACD, que es semejante al triángulo completo, por lo que a se relaciona con c y p mientras que b se relaciona con c y q. Recordar qué cateto se empareja con qué proyección mantiene las raíces cuadradas en los segmentos correctos.",
            },
          ],
          "h2": "Relación entre las proyecciones de la hipotenusa y los catetos del triángulo",
          "image": {
            "alt": "Triángulo rectángulo con proyecciones 9 y 16 e hipotenusa 25, mostrando que el cateto a vale 15 porque a al cuadrado es igual a 25 por 9, y el cateto b vale 20 porque b al cuadrado es igual a 25 por 16",
            "caption": "Cateto a = sqrt(25 x 9) = 15; cateto b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "La razón es el postulado de la suma de segmentos: si el punto D se encuentra sobre el segmento AB entre A y B, entonces la longitud AB es igual a AD más DB. Aquí D es el pie de la altura y A y B son los extremos de la hipotenusa, por lo que [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sustituir los símbolos estándar da la fórmula directamente. En un triángulo rectángulo no degenerado, el pie de la altura siempre cae entre los extremos, por lo que el postulado siempre se aplica. No se necesita trigonometría para este paso.",
            },
            {
              "kind": "p",
              "text": "La semejanza de triángulos es la herramienta detrás de las relaciones de proyección más profundas, como [[a^2 = cp]], pero la simple suma de segmentos basta para establecer [[c = p + q]]. El diagrama de abajo muestra la misma idea sobre una sola línea recta.",
            },
            {
              "kind": "p",
              "text": "Un detalle merece énfasis: D siempre cae estrictamente entre A y B en un triángulo rectángulo genuino, nunca en un extremo ni fuera del segmento. Esa ubicación es lo que hace aplicable el postulado de la suma de segmentos, y es por lo que se rechazan las proyecciones cero o negativas.",
            },
          ],
          "h2": "¿Por qué la hipotenusa es igual a la suma de sus proyecciones?",
          "image": {
            "alt": "Segmento recto AB dividido en el punto D en el segmento AD etiquetado p y el segmento DB etiquetado q, mostrando que el segmento completo es igual a p más q",
            "caption": "Un punto entre A y B divide el segmento: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "En las aulas y la tarea, los problemas de proyecciones comprueban si los estudiantes pueden etiquetar un diagrama y aplicar [[c = p + q]] en lugar de recurrir al teorema de Pitágoras. Los ejercicios de dibujo técnico usan la misma habilidad cuando una altura divide una hipotenusa medida sobre un plano.",
            },
            {
              "kind": "p",
              "text": "Los modelos topográficos y la geometría arquitectónica a veces reducen un diseño de triángulo rectángulo a una hipotenusa cortada por una perpendicular, donde sumar los dos segmentos marcados da el vano completo. Las construcciones geométricas en papel usan la suma para fijar las aperturas del compás.",
            },
            {
              "kind": "p",
              "text": "La condición es siempre la misma: p y q deben ser partes adyacentes de una hipotenusa en un triángulo rectángulo genuino. Las distancias arbitrarias nunca califican, por tentadora que parezca la suma.",
            },
            {
              "kind": "p",
              "text": "Los profesores pueden usar la configuración de proyecciones como lección puente: repasa la suma de segmentos de cursos anteriores mientras anticipa los teoremas de semejanza que llegarán más adelante en el curso de geometría.",
            },
          ],
          "h2": "Aplicaciones prácticas de los cálculos de proyecciones de la hipotenusa",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dos caminos llevan a la hipotenusa. Cuando se conocen los segmentos de la altura, usa la suma de segmentos: [[c = p + q]]. Cuando se conocen en cambio los dos lados alrededor del ángulo recto, usa el teorema de Pitágoras: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Elige la fórmula de proyecciones cuando el problema da el pie de la altura y sus dos segmentos; elige la fórmula de los catetos cuando da los dos lados perpendiculares. En un mismo triángulo coherente, ambos caminos producen la misma c.",
            },
            {
              "kind": "p",
              "text": "Una rápida comprobación cruzada une las dos fórmulas. A partir de las proyecciones [[p = 9]] y [[q = 16]], [[c = 25]]. Los catetos son [[a = 15]] y [[b = 20]], y [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Ambos caminos llegan a la misma hipotenusa.",
            },
          ],
          "h2": "Hipotenusa a partir de proyecciones frente a hipotenusa a partir de catetos",
          "table": {
            "headers": [
              "Valores conocidos",
              "Fórmula",
              "Método",
            ],
            "rows": [
              [
                "Proyecciones p y q",
                "c = p + q",
                "Suma de segmentos",
              ],
              [
                "Catetos a y b",
                "c = √(a² + b²)",
                "Teorema de Pitágoras",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada error de abajo va seguido de su corrección.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplicar p y q en lugar de sumarlos. Con [[p = 4]] y [[q = 9]], el producto 36 no significa nada aquí; la hipotenusa es [[4 + 9 = 13]].",
                "Confundir las proyecciones con los catetos. Los catetos se encuentran en el ángulo recto; las proyecciones yacen a lo largo de la hipotenusa. Etiqueta cada longitud antes de calcular.",
                "Usar la altura como una proyección. La altura h es perpendicular a la hipotenusa, no un trozo de ella, por lo que nunca pertenece a [[c = p + q]].",
                "Mezclar unidades de medida. [[p = 40]] mm y [[q = 9]] cm deben convertirse a 4 cm y 9 cm antes de sumar; la suma sin convertir, 49, no tiene una unidad válida.",
                "Introducir longitudes negativas. Las proyecciones son positivas por definición, por lo que una entrada negativa indica un error en los datos.",
                "Confundir la hipotenusa con un cateto. La hipotenusa se encuentra opuesta al ángulo recto y es el lado más largo; un cateto nunca puede desempeñar su papel.",
                "Olvidar un segmento. Sumar solo p da una longitud parcial; la hipotenusa necesita ambas partes.",
                "Usar medidas no relacionadas. Los dos números deben ser las partes adyacentes de la misma hipotenusa, no longitudes arbitrarias del problema.",
                "Aplicar el teorema de Pitágoras a p y q. El valor [[\\sqrt{p^2 + q^2}]] no es la hipotenusa, porque p y q son colineales, no perpendiculares.",
                "Confundir [[c = p + q]] con [[h = \\sqrt{pq}]]. La suma halla la hipotenusa; la media geométrica halla la altura. Intercambiar las fórmulas intercambia las respuestas.",
              ],
            },
            {
              "kind": "p",
              "text": "Si te sorprendes a mitad de error, detente y vuelve a etiquetar el diagrama antes de recalcular. La mayoría de los errores anteriores desaparecen una vez que p y q están claramente marcados sobre la hipotenusa y todo lo demás está tachado.",
            },
          ],
          "h2": "Errores comunes al calcular la hipotenusa a partir de proyecciones",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta estos seis problemas y luego comprueba las respuestas resueltas de abajo. Ninguno de los valores repite los ejemplos resueltos.",
            },
            {
              "kind": "p",
              "text": "Resuelve cada problema en papel antes de leer su respuesta. Tapa las respuestas con la mano si es necesario; el problema de varios pasos es la mejor prueba de si los teoremas de proyección han quedado claros.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números enteros",
            },
            {
              "kind": "p",
              "text": "La altura de un triángulo rectángulo divide la hipotenusa en [[p = 12]] cm y [[q = 4]] cm. Halla c.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 2.5]] m y [[q = 7.5]] m, halla la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Proyecciones iguales",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 7]] in y [[q = 7]] in, halla c. ¿Qué tipo de triángulo es?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 200]] mm y [[q = 35]] cm, halla la hipotenusa en centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Proyección faltante",
            },
            {
              "kind": "p",
              "text": "Una hipotenusa mide [[c = 50]] cm y una proyección es [[q = 32]] cm. Halla p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Varios pasos con catetos",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 16]] cm y [[q = 9]] cm, halla c, y luego halla los catetos a y b.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[c = 7 + 7 = 14]] in. Las proyecciones iguales dan un triángulo rectángulo isósceles.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: Convierte 200 mm a 20 cm, luego [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[c = 16 + 9 = 25]] cm. Luego [[a = \\sqrt{25 \\times 16} = 20]] cm y [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las relaciones de proyección coinciden exactamente con el teorema de Pitágoras. Parte del teorema de las proyecciones: [[a^2 = cp]] y [[b^2 = cq]]. Sumar las dos ecuaciones da [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Sacar factor común c es válido porque multiplica a ambos términos. Como [[p + q = c]], la sustitución produce:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una comprobación numérica con el triángulo 9-16-25 confirma el álgebra: [[a^2 + b^2 = 225 + 400 = 625]] y [[c^2 = 25^2 = 625]]. Ambos lados coinciden, que es exactamente lo que predice la prueba factorizada.",
            },
            {
              "kind": "p",
              "text": "La prueba se cierra con elegancia: la simple suma de segmentos está en el corazón de la relación pitagórica. El diagrama de abajo muestra de dónde vienen [[a^2 = cp]] y [[b^2 = cq]]: cada triángulo pequeño comparte sus ángulos con el original, por lo que los lados correspondientes se mantienen proporcionales.",
            },
          ],
          "h2": "Proyecciones de la hipotenusa y el teorema de Pitágoras",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los dos triángulos pequeños semejantes ACD y CBD con ángulos coincidentes y lados correspondientes etiquetados",
            "caption": "Los triángulos ACD y CBD son semejantes a ABC, dando a al cuadrado igual a cp y b al cuadrado igual a cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada propiedad de abajo se deduce directamente de la suma, lo que las hace fáciles de aceptar.",
            },
            {
              "items": [
                "Proyecciones iguales: si [[p = q]], entonces [[c = 2p]]. La altura cae en el punto medio, y los dos catetos son iguales, dando un triángulo rectángulo isósceles.",
                "Proyecciones desiguales: cualquier par positivo funciona. La altura se inclina hacia la proyección más larga, y el cateto más cercano es el más corto.",
                "Proyecciones muy pequeñas: la fórmula sigue valiendo, por ejemplo [[p = 0.5]] mm y [[q = 1.5]] mm dan [[c = 2]] mm.",
                "Proyecciones muy grandes: no hay límite superior, por ejemplo [[p = 1200]] m y [[q = 800]] m dan [[c = 2000]] m.",
                "Escala: duplicar ambas proyecciones duplica la hipotenusa, ya que [[2p + 2q = 2(p + q)]].",
                "Intercambiar p y q: [[p + q = q + p]], por lo que la hipotenusa no cambia y solo las etiquetas AD y DB cambian de lugar.",
                "Proyecciones de longitud cero: [[p = 0]] significa que la altura coincide con un cateto, por lo que el triángulo es degenerado y la calculadora no lo acepta.",
                "Proyecciones negativas: las longitudes no pueden ser negativas, por lo que una entrada negativa es siempre un error en los datos.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "El diagrama compara dos triángulos con la misma hipotenusa pero distintas divisiones de proyección, mostrando cómo cambia la forma mientras la suma se mantiene fija.",
            },
          ],
          "h2": "Casos especiales y propiedades importantes",
          "image": {
            "alt": "Dos triángulos rectángulos con la misma longitud de hipotenusa 10: uno con proyecciones iguales 5 y 5, el otro con proyecciones 2 y 8",
            "caption": "Misma hipotenusa, distintas formas: p = q = 5 frente a p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tres comprobaciones rápidas detectan casi todos los errores de cálculo. La primera es el cálculo directo; las otras dos lo confirman desde ángulos distintos.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 1: Recalcula la suma de segmentos",
            },
            {
              "kind": "p",
              "text": "Suma p y q de nuevo, despacio. Con [[p = 4]] y [[q = 9]], confirma [[4 + 9 = 13]]. Un descuido aquí es la fuente más común de una respuesta incorrecta.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 2: Confirma que los catetos cumplen Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcula los catetos a partir de las proyecciones, [[a = \\sqrt{cp}]] y [[b = \\sqrt{cq}]], y luego verifica [[a^2 + b^2 = c^2]]. Para [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]], y [[225 + 400 = 625]]. Esta comprobación geométrica va más allá de la suma de la calculadora.",
            },
            {
              "kind": "h3",
              "text": "Comprobación 3: Comprueba el diagrama con sentido común",
            },
            {
              "kind": "p",
              "text": "Confirma que ambas proyecciones son positivas, que ambas yacen sobre la misma hipotenusa, y que c es más larga que cualquiera de los segmentos por separado. Si el resultado es menor que p o q, un valor se introdujo en el campo equivocado.",
            },
          ],
          "h2": "Cómo verificar tu cálculo de la hipotenusa",
        },
      },
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "answer": "La fórmula es [[c = p + q]], donde p y q son los dos segmentos de proyección de la hipotenusa. Suma las dos longitudes para obtener la hipotenusa completa. Por ejemplo, [[p = 4]] cm y [[q = 9]] cm dan [[c = 13]] cm.",
          "question": "¿Cuál es la fórmula de la hipotenusa a partir de proyecciones?",
        },
        {
          "answer": "Son los dos segmentos creados cuando la altura desde el ángulo recto se encuentra con la hipotenusa. Etiquetados como [[p = AD]] y [[q = DB]] en el triángulo ABC con altura CD, quedan uno junto al otro a lo largo de la hipotenusa y juntos la abarcan por completo.",
          "question": "¿Qué son las proyecciones de la hipotenusa?",
        },
        {
          "answer": "Por la suma de segmentos: el pie de la altura se encuentra entre los extremos de la hipotenusa, por lo que el lado completo es igual a la suma de sus partes. Sustituir los símbolos estándar convierte [[AB = AD + DB]] en [[c = p + q]]. No se necesita trigonometría.",
          "question": "¿Por qué sumamos p y q?",
        },
        {
          "answer": "No. Los catetos a y b forman el ángulo recto, mientras que las proyecciones p y q yacen a lo largo de la hipotenusa. Confundirlas es el error de etiquetado más común, así que comprueba la posición de cada longitud en el diagrama antes de calcular.",
          "question": "¿Las proyecciones son lo mismo que los catetos del triángulo?",
        },
        {
          "answer": "Sí. La altura rara vez incide en el punto medio exacto, por lo que p y q suelen ser desiguales. Cualquier par positivo es válido, y la suma sigue dando la hipotenusa. El triángulo simplemente se inclina hacia la proyección más larga.",
          "question": "¿Las proyecciones pueden tener longitudes distintas?",
        },
        {
          "answer": "La fórmula se convierte en [[c = 2p]]. La altura biseca la hipotenusa, los dos catetos son iguales, y el triángulo es un triángulo rectángulo isósceles. Geométricamente, la altura cae exactamente en el punto medio.",
          "question": "¿Qué ocurre cuando p y q son iguales?",
        },
        {
          "answer": "Sí, con una fórmula distinta: [[h = \\sqrt{pq}]], la media geométrica de las proyecciones. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de proyecciones</a> está hecha para ese cálculo. Mantenla separada de [[c = p + q]], que halla la hipotenusa.",
          "question": "¿Puedo calcular la altura usando p y q?",
        },
        {
          "answer": "Sí. Primero halla [[c = p + q]], luego usa [[a = \\sqrt{cp}]] y [[b = \\sqrt{cq}]]. Para [[p = 9]], [[q = 16]], y [[c = 25]], los catetos son 15 y 20. Son extensiones educativas más que la función principal de esta calculadora.",
          "question": "¿Puedo hallar los catetos del triángulo a partir de las proyecciones?",
        },
        {
          "answer": "No. Hallar la hipotenusa a partir de proyecciones solo necesita la suma, sin raíces cuadradas. El teorema de Pitágoras resulta útil cuando se conocen los catetos en su lugar, o al verificar un resultado a través de los catetos.",
          "question": "¿Es necesario el teorema de Pitágoras para este cálculo?",
        },
        {
          "answer": "Convierte una medida para que ambas usen la misma unidad antes de sumar. Por ejemplo, [[p = 40]] mm se convierte en 4 cm cuando [[q = 9]] cm, dando [[c = 13]] cm. Los selectores de unidad de la calculadora cumplen la misma función.",
          "question": "¿Qué pasa si p y q tienen unidades distintas?",
        },
        {
          "answer": "No. Una proyección es solo una parte de la hipotenusa, por lo que debe ser más corta que el todo. Si tu resultado muestra lo contrario, un valor se introdujo en el campo equivocado.",
          "question": "¿Una proyección puede ser más larga que la hipotenusa?",
        },
        {
          "answer": "Recalcula [[c = p + q]] despacio, luego confirma que los catetos satisfacen [[a^2 + b^2 = c^2]]. Comprueba también que ambas proyecciones son positivas y que c supera a cada una. Las tres comprobaciones llevan menos de un minuto.",
          "question": "¿Cómo puedo verificar el resultado de la hipotenusa?",
        },
      ],
      "relatedHeading": "Explora las calculadoras de triángulos rectángulos relacionadas",
      "relatedIntro": "Elige la siguiente herramienta según las medidas que conozcas. Cada calculadora de abajo maneja una tarea específica del triángulo rectángulo, desde los segmentos de proyección individuales hasta la altura y los lados del triángulo.",
      "relatedItems": [
        "Calculadora de proyección de triángulo rectángulo",
        "Calculadora de proyección p de triángulo rectángulo",
        "Calculadora de proyección q de triángulo rectángulo",
        "Calculadora de altura a partir de proyecciones de triángulo rectángulo",
        "Calculadora de lados de triángulo rectángulo",
      ],
    },
};
