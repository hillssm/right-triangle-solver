// projectionQGuideTranslations.bes.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "answer": "La fórmula es [[q = \\frac{b^2}{c}]], donde b es el cateto asociado con q y c es la hipotenusa completa. Eleva al cuadrado el cateto b primero y luego divide entre c. Por ejemplo, [[b = 8]] cm y [[c = 10]] cm dan [[q = 6.4]] cm.",
          "question": "¿Cuál es la fórmula de la proyección q?",
        },
        {
          "answer": "La proyección q es el segmento de la hipotenusa junto al vértice B, creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa en el punto D. En el triángulo ABC, [[q = DB]], la parte de la hipotenusa asociada con el cateto b.",
          "question": "¿Qué representa la proyección q?",
        },
        {
          "answer": "El cuadrado proviene de los triángulos semejantes: el triángulo CBD es semejante al triángulo ABC, lo que da [[\\frac{q}{b} = \\frac{b}{c}]], y el cateto b aparece en ambas razones. Al multiplicar en cruz se obtiene [[b^2 = c \\times q]], así que el cuadrado está integrado en la geometría.",
          "question": "¿Por qué se eleva al cuadrado el cateto b?",
        },
        {
          "answer": "La división despeja q. El teorema de la proyección establece [[b^2 = c \\times q]], donde q está multiplicada por c, así que dividir ambos lados entre c deja q sola. La división también convierte la longitud al cuadrado en una longitud ordinaria.",
          "question": "¿Por qué dividimos entre la hipotenusa?",
        },
        {
          "answer": "No. El cateto b es el lado BC, uno de los lados que forman el ángulo recto, mientras que la proyección q es el segmento DB sobre la hipotenusa. En el triángulo 6-8-10, el cateto b mide 8 cm y la proyección q solo mide 6.4 cm.",
          "question": "¿La proyección q es lo mismo que el cateto b?",
        },
        {
          "answer": "La proyección q se encuentra junto al vértice B y se empareja con el cateto b, mientras que la proyección p se encuentra junto al vértice A y se empareja con el cateto a. Son los dos segmentos que la altura crea sobre la hipotenusa: [[p + q = c]].",
          "question": "¿Por qué q está asociada con el cateto b y no con el cateto a?",
        },
        {
          "answer": "La proyección p se encuentra junto al vértice A y se empareja con el cateto a, mientras que la proyección q se encuentra junto al vértice B y se empareja con el cateto b. Son los dos segmentos que la altura crea sobre la hipotenusa: [[p + q = c]]. En el triángulo 6-8-10, p mide 3.6 cm y q mide 6.4 cm, así que q es el segmento más largo.",
          "question": "¿Cuál es la diferencia entre la proyección p y la proyección q?",
        },
        {
          "answer": "Sí. Resta q de la hipotenusa: [[p = c - q]]. Con [[c = 10]] cm y [[q = 6.4]] cm, [[p = 3.6]] cm. También puedes hallar p directamente a partir del cateto a con [[p = \\frac{a^2}{c}]].",
          "question": "¿Puedo calcular la proyección p si ya conozco q?",
        },
        {
          "answer": "No. La proyección q es solo una parte de la hipotenusa, así que debe ser menor que c. Si q fuera igual a c, p sería cero y el triángulo sería degenerado. Un resultado mayor que c siempre indica un error de entrada o de etiquetado.",
          "question": "¿La proyección q puede ser mayor que la hipotenusa?",
        },
        {
          "answer": "También necesitas p o c. Halla p con [[p = c - q]] y luego usa [[h = \\sqrt{p \\times q}]]. Con [[q = 6.4]] cm y [[c = 10]] cm, [[p = 3.6]] cm y [[h = 4.8]] cm. Solo con la proyección q no se puede determinar la altura.",
          "question": "¿Cómo hallo la altura cuando se conoce q?",
        },
        {
          "answer": "Vuelve a calcular [[q = \\frac{b^2}{c}]], luego comprueba [[p + q = c]] tras hallar p por resta, y confirma que q sea positiva y menor que c. También puedes hallar el cateto a a partir de p y comprobar [[a^2 + b^2 = c^2]].",
          "question": "¿Cómo puedo verificar un cálculo de la proyección q?",
        },
        {
          "answer": "La altura cae en el punto medio de la hipotenusa y los dos catetos son iguales, así que el triángulo es isósceles. Con [[c = 10]] cm y [[p = q = 5]] cm, ambos catetos son iguales a [[\\sqrt{50}]] cm, unos 7.071 cm.",
          "question": "¿Qué sucede cuando p y q son iguales?",
        },
      ],
      "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea específica de triángulos rectángulos, así que elige la herramienta que coincida con las medidas que ya conoces.",
      "relatedItems": [
        "Calculadora de proyección de triángulo rectángulo",
        "Calculadora de proyección P de triángulo rectángulo",
        "Calculadora de cateto B a partir de la proyección de triángulo rectángulo",
        "Calculadora de hipotenusa a partir de las proyecciones de triángulo rectángulo",
        "Calculadora de altura a partir de las proyecciones de triángulo rectángulo",
        "Calculadora de lados de triángulo rectángulo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es la tarea de geometría y el trabajo en clase, donde los problemas de proyección ponen a prueba si los estudiantes pueden etiquetar un diagrama y aplicar [[q = \\frac{b^2}{c}]] en lugar de recurrir al teorema de Pitágoras por costumbre. Los ejercicios de triángulos semejantes usan la misma configuración, ya que la propia demostración es un ejercicio de correspondencia de lados.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el teorema cuando un triángulo rectángulo debe reconstruirse a partir de medidas parciales: si un dibujo da la hipotenusa y el pie de la altura, la proyección que falta se obtiene sin volver a medir la figura. Los docentes también usan esta configuración como lección puente entre la suma de segmentos y la semejanza.",
            },
            {
              "kind": "p",
              "text": "Una condición limita todas las aplicaciones: la geometría requerida del triángulo rectángulo debe existir realmente. El teorema describe relaciones geométricas exactas, no medidas aproximadas de campo, así que nunca sustituye una medición topográfica cuidadosa ni una medición profesional de ingeniería.",
            },
          ],
          "h2": "Aplicaciones prácticas de los cálculos de proyección de triángulos rectángulos",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora tiene dos campos de entrada. El primero recibe el cateto b, el lado perpendicular asociado con la proyección q. El segundo recibe la hipotenusa c, el lado completo opuesto al ángulo recto. Ambas longitudes deben usar la misma unidad, así que convierte primero si una medida está en centímetros y la otra en metros.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa debe ser mayor que el cateto b, ya que un cateto es un lado del ángulo recto mientras que la hipotenusa abarca todo el triángulo. Si tu valor de b es mayor que c, probablemente hayas introducido una proyección, la altura o el lado equivocado.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular proyección q para ver el resultado y usa Restablecer para borrar ambos campos antes de un nuevo problema. El resultado es una longitud en la unidad que introdujiste, así que un cateto de 8 cm y una hipotenusa de 10 cm devuelven 6.4 cm. El resultado es una longitud de segmento sobre la hipotenusa.",
            },
          ],
          "h2": "Calcular la proyección Q de un triángulo rectángulo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b y el lado AB es la hipotenusa c. La altura CD baja desde C perpendicular a AB y la toca en D.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en dos partes: el segmento AD es la proyección p y el segmento DB es la proyección q. El cateto b y la proyección q están resaltados porque son el par del que trata esta página. Sigue las etiquetas en este orden: empieza en B, recorre el cateto b hasta C, luego el cateto a hasta A y vuelve por la hipotenusa desde A hasta B, deteniéndote en D para ver la división en p y q.",
            },
            {
              "kind": "p",
              "text": "El emparejamiento de b con q se hace visible en el triángulo pequeño CBD, donde el cateto b es la hipotenusa y q es el lado que se encuentra sobre la hipotenusa grande. Como el triángulo CBD es semejante al triángulo ABC, la razón de q a b en el triángulo pequeño es igual a la razón de b a c en el grande.",
            },
          ],
          "h2": "Diagrama de la proyección Q de un triángulo rectángulo explicado",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD hasta la hipotenusa AB, cateto b y proyección q resaltados, con los catetos a y b, la hipotenusa c, las proyecciones p y q y la altura h etiquetados",
            "caption": "La altura CD divide la hipotenusa AB en la proyección p (AD) y la proyección q (DB), con el cateto b (BC) resaltado.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada ejemplo indica los valores dados, la sustitución y la respuesta final, y todos los ejemplos mantienen sus unidades coherentes de principio a fin.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 8]] cm y [[c = 10]] cm, la fórmula da [[q = \\frac{8^2}{10} = \\frac{64}{10}]], así que [[q = 6.4]] cm. El cateto al cuadrado, 64, es un valor intermedio, y dividir entre la hipotenusa lo convierte de nuevo en una longitud. El otro cateto de este triángulo mide 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: División con cuadrado perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 12]] cm y [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. El cateto al cuadrado se divide de forma exacta, así que la respuesta es exacta. La otra proyección aquí mide 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Resultado decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 7]] cm y [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un resultado decimal es normal: la proyección no tiene por qué ser un número entero aunque ambas entradas lo sean. La otra proyección mide 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Medidas mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 15]] m y [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Los números mayores no cambian nada del método: eleva al cuadrado y luego divide. La otra proyección mide 16 m, que se empareja con un cateto de 20 m.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas pequeñas",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 30]] mm y [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Las medidas pequeñas funcionan igual, y mantener la unidad en milímetros durante todo el cálculo evita cualquier conversión. La otra proyección mide 32 mm, que se empareja con un cateto de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[b = \\frac{3}{4}]] ft y [[c = \\frac{3}{2}]] ft, eleva al cuadrado el cateto primero: [[b^2 = \\frac{9}{16}]] pies cuadrados. Luego [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividir entre una fracción significa multiplicar por su recíproco, que es el paso que la mayoría de los estudiantes pasan por alto con las medidas fraccionarias.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 80]] cm y [[c = 1]] m, convierte primero: 1 m equivale a 100 cm. Luego [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Usar 1 en lugar de 100 habría dado 6400 cm, una proyección mucho más larga que la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Valores decimales mayores",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 4.5]] m y [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Las entradas decimales necesitan el mismo cuidado que los números enteros: eleva al cuadrado el decimal completo y luego divide. La otra proyección mide 4.8 m, que se empareja con un cateto de 6 m.",
            },
          ],
          "h2": "Ejemplos resueltos de cálculo de la proyección Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección establece que el cuadrado del cateto b es igual a la hipotenusa multiplicada por su proyección:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividir ambos lados entre c despeja q y da la fórmula de trabajo de esta página:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "El cálculo se desarrolla en dos etapas. En la etapa 1 se eleva al cuadrado el cateto b, multiplicándolo por sí mismo. En la etapa 2 se divide esa longitud al cuadrado entre la hipotenusa completa c, y el resultado es una longitud ordinaria, no una longitud al cuadrado.",
            },
            {
              "kind": "p",
              "text": "Las unidades necesitan cuidado en ambas etapas. Si b y c están en centímetros, entonces [[b^2]] está en centímetros cuadrados, y dividir entre centímetros devuelve centímetros. Mezclar unidades, como metros para b y centímetros para c, da un cociente sin sentido, así que convierte a una sola unidad antes de calcular.",
            },
            {
              "kind": "p",
              "text": "Con [[b = 8]] cm y [[c = 10]] cm, la etapa 1 da [[8^2 = 64]] y la etapa 2 da [[q = \\frac{64}{10} = 6.4]] cm. El número 64 no responde por sí solo a ninguna pregunta: solo después de la división se convierte en la longitud de la proyección.",
            },
          ],
          "h2": "Fórmula de la proyección Q de un triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo ABC con altura CD, que muestra que la proyección q es igual al cateto b al cuadrado dividido entre la hipotenusa c",
            "caption": "La fórmula de la proyección: q es igual a b al cuadrado dividido entre c, con el pie de la altura D dividiendo la hipotenusa.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Once pasos breves te llevan de un diagrama etiquetado a una respuesta comprobada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Localiza el vértice del ángulo recto y la altura desde él hasta la hipotenusa.",
                "Identifica el cateto perpendicular asociado con la proyección q, el cateto que toca el vértice B.",
                "Identifica la hipotenusa completa c, el lado opuesto al ángulo recto.",
                "Confirma que c es mayor que b. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Elige unidades compatibles y convierte si las medidas usan unidades diferentes.",
                "Introduce el cateto b en el campo Cateto b.",
                "Introduce la hipotenusa c en el campo Hipotenusa c.",
                "Haz clic en Calcular proyección q y lee el resultado.",
                "Comprueba el resultado: q debe ser positiva y menor que c.",
                "Usa Restablecer cuando empieces un nuevo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Introducir el cateto a en lugar del cateto b produce una proyección diferente. El cateto a se empareja con p, así que la calculadora devolvería el segmento junto al vértice A, no el que está junto a B. La comprobación de etiquetas del paso 3 es la más importante.",
            },
          ],
          "h2": "Cómo usar la calculadora de proyección Q de triángulo rectángulo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora halla la proyección q de un triángulo rectángulo cuando conoces el cateto b y la hipotenusa completa c. La proyección q es el segmento de la hipotenusa que se encuentra junto al cateto b, creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa. La fórmula es [[q = \\frac{b^2}{c}]], donde b es el cateto perpendicular y c es la hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, con [[b = 8]] cm y [[c = 10]] cm, el cálculo es [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. El valor 6.4 cm es la parte de la hipotenusa asociada con el cateto b, no el cateto mismo ni toda la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "La calculadora se encuentra en la parte superior de esta página, seguida de la fórmula, un diagrama etiquetado, una demostración, ejemplos resueltos y comprobaciones que puedes aplicar a cualquier respuesta.",
            },
          ],
          "h2": "Calculadora de proyección Q de triángulo rectángulo",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos lados perpendiculares, llamados catetos, y un lado más largo, llamado hipotenusa. Los dos catetos se encuentran en el ángulo recto y la hipotenusa se encuentra opuesta a ese ángulo. Aquí el triángulo es ABC con el ángulo recto en C: el cateto a es AC, el cateto b es BC y la hipotenusa c es AB.",
            },
            {
              "kind": "p",
              "text": "El cateto b es uno de los dos lados que forman el ángulo recto, así que es un lado genuino del triángulo, no un segmento trazado en su interior. La proyección q se encuentra plana sobre la hipotenusa, mientras que el cateto b va desde el vértice B hasta el vértice del ángulo recto C.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es siempre el lado más largo en un triángulo rectángulo no degenerado, ya que se encuentra opuesta al ángulo mayor, el ángulo recto. Por eso la fórmula exige [[0 < b < c]] y por eso la calculadora espera una hipotenusa mayor que el cateto.",
            },
            {
              "kind": "p",
              "text": "La posición del cateto b decide qué segmento se llama q: el cateto b toca el vértice B, así que el segmento junto a B es q. Comprueba siempre las etiquetas de tu propio diagrama antes de elegir qué cateto introducir.",
            },
          ],
          "h2": "Comprender el cateto B y la hipotenusa",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Otro cateto perpendicular",
              ],
              [
                "b",
                "Cateto asociado con q",
              ],
              [
                "c",
                "Hipotenusa completa",
              ],
              [
                "p",
                "Proyección asociada con a",
              ],
              [
                "q",
                "Proyección asociada con b",
              ],
              [
                "h",
                "Altura hasta la hipotenusa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada error siguiente va seguido de su corrección. La mayoría se debe al etiquetado, no a la aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Usar el cateto a en lugar del cateto b: introducir a devuelve p. Con a = 6 y c = 10, el resultado 3.6 cm es p, no q.",
                "Olvidar elevar al cuadrado el cateto b: dividir b entre c en lugar de b al cuadrado entre c da 0.8 cm en lugar de 6.4 cm.",
                "Dividir c entre b al cuadrado en lugar de b al cuadrado entre c: el cociente debe ser [[b^2/c]], no [[c/b^2]]. Con b = 8 y c = 10, el orden equivocado da aproximadamente 0.156, que no tiene ninguna unidad válida.",
                "Confundir la proyección p con la proyección q: q se encuentra junto al vértice B y p junto al vértice A. Etiqueta ambos segmentos antes de calcular.",
                "Tratar q como el cateto perpendicular real: q es un segmento de la hipotenusa, no el lado BC. En el triángulo 6-8-10, el cateto b mide 8 cm mientras que q solo mide 6.4 cm.",
                "Introducir un valor de cateto mayor o igual que c: no existe ese triángulo, ya que la hipotenusa es el lado más largo.",
                "Mezclar centímetros y metros: convierte primero, como en el Ejemplo 7, donde 1 m se convirtió en 100 cm.",
                "Olvidar que c representa la hipotenusa completa: usar una proyección o un cateto como denominador distorsiona el resultado.",
                "Redondear los cálculos intermedios demasiado pronto: redondear el cateto al cuadrado antes de dividir cambia la respuesta.",
                "Confundir b con b al cuadrado: 64 en el ejemplo 6-8-10 es una longitud al cuadrado, mientras que 6.4 cm es la proyección.",
                "Aplicar la fórmula a un triángulo que no es rectángulo: el teorema de la proyección necesita la altura desde un ángulo recto.",
                "Tratar q como toda la hipotenusa: q más p es igual a c, así que un resultado de c o más indica un error.",
              ],
            },
            {
              "kind": "p",
              "text": "Si una respuesta parece incorrecta, detente y vuelve a etiquetar el diagrama antes de volver a calcular. La mayoría de los errores anteriores desaparecen una vez que p y q están claramente marcados sobre la hipotenusa.",
            },
          ],
          "h2": "Errores comunes al calcular la proyección Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Intenta resolver los seis problemas en papel antes de leer las respuestas. Ninguno de los valores repite los ejemplos resueltos.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números enteros básicos",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene el cateto [[b = 9]] cm y la hipotenusa [[c = 15]] cm. Halla la proyección q.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valores decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 1.5]] m y [[c = 2.5]] m, halla la proyección q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[b = \\frac{5}{6}]] ft y [[c = \\frac{5}{3}]] ft, halla q como fracción.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Un cateto mide [[b = 80]] cm y la hipotenusa mide [[c = 2]] m. Halla q en centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Halla p después de calcular q",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene la hipotenusa [[c = 25]] cm y el cateto [[b = 15]] cm. Halla q y luego p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Varios pasos con la proyección q y la altura h",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[b = 15]] cm, halla q, luego p y luego la altura h.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[b^2 = \\frac{25}{36}]], así que [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: Convierte 2 m a 200 cm, luego [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, luego [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[q = 9]] cm y [[p = 16]] cm, así que [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración se basa en los triángulos semejantes. Trazar la altura CD divide el triángulo ABC en dos triángulos rectángulos más pequeños, ACD y CBD, y ambos son semejantes al triángulo original. Una de las razones de sus lados da directamente el teorema de la proyección.",
            },
            {
              "kind": "p",
              "text": "Concéntrate en el triángulo CBD y en todo el triángulo ABC. Ambos contienen el ángulo en B y ambos contienen un ángulo recto, así que sus terceros ángulos también deben coincidir. Al hacer corresponder los lados que ocupan las mismas posiciones se obtiene la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora sustituye los símbolos estándar: [[DB = q]], [[BC = b]] y [[AB = c]]. La proporción queda así:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Al multiplicar en cruz se eliminan las fracciones. El numerador izquierdo por el denominador derecho es igual al numerador derecho por el denominador izquierdo, así que [[q \\times c = b \\times b]], que es:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividir ambos lados entre c termina la demostración y da [[q = \\frac{b^2}{c}]]. El mismo argumento aplicado al otro triángulo pequeño, ACD, da [[a^2 = c \\times p]].",
            },
          ],
          "h2": "¿Por qué funciona la fórmula de la proyección Q?",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los triángulos semejantes más pequeños ACD y CBD, que muestran la proporción q sobre b igual a b sobre c",
            "caption": "Demostración por triángulos semejantes: q sobre b es igual a b sobre c, así que al multiplicar en cruz se obtiene b al cuadrado igual a c por q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nueve propiedades se deducen directamente de [[q = \\frac{b^2}{c}]]. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "items": [
                "La proyección q es siempre más corta que la hipotenusa completa en un triángulo no degenerado, ya que q es solo una parte de c.",
                "Aumentar el cateto b manteniendo c fija aumenta q, porque el cateto al cuadrado del numerador crece.",
                "Aumentar c manteniendo b fija disminuye q, porque el denominador crece.",
                "Si b y c se multiplican por el mismo factor positivo, q se multiplica por ese factor.",
                "Si p es igual a q, ambos catetos perpendiculares son iguales y el triángulo es un triángulo rectángulo isósceles.",
                "La proyección q es siempre positiva en un triángulo válido no degenerado. Los valores cero o negativos no describen ningún triángulo real.",
                "La proyección q es una longitud, no un área. El cateto al cuadrado es solo un paso intermedio, y dividir entre c restablece las unidades ordinarias de longitud.",
                "La proyección q está asociada específicamente con el cateto b. Usarla con el cateto a responde a una pregunta completamente diferente.",
                "Intercambiar p y q cambia qué cateto está asociado con cada proyección, así que las etiquetas deben mantenerse emparejadas con sus vértices.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Cuando la altura cae en el punto medio de la hipotenusa, los dos catetos deben coincidir, como muestra el diagrama siguiente.",
            },
          ],
          "h2": "Propiedades importantes de la proyección Q",
          "image": {
            "alt": "Dos triángulos rectángulos uno al lado del otro, uno con proyecciones iguales p y q de 5 y otro con proyecciones desiguales p igual a 3.6 y q igual a 6.4",
            "caption": "Las proyecciones iguales (p = q = 5) dan catetos iguales, mientras que las proyecciones desiguales (p = 3.6, q = 6.4) dan catetos desiguales.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Algunos problemas piden la otra proyección. La fórmula correspondiente es la imagen especular de la fórmula de q, con el cateto a en lugar del cateto b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm y [[c = 10]] cm. Entonces [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Eso coincide con la otra proyección del triángulo 6-8-10 de los ejemplos anteriores, donde q era 6.4 cm y las dos proyecciones suman 10 cm.",
            },
            {
              "kind": "p",
              "text": "La fórmula usa a en lugar de b porque cada cateto se empareja con la proyección junto a su propio vértice. El cateto a toca el vértice A y p es el segmento junto a A. Introducir b en esta fórmula devolvería q, no p. La calculadora de esta página solo acepta b y c, así que usa la <a href=\"/right-triangle-projection-p-calculator/\">calculadora de proyección p</a> cuando necesites hallar p a partir de a y c.",
            },
          ],
          "h2": "Cómo calcular la proyección P a partir del otro cateto",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección y el teorema de Pitágoras coinciden exactamente, y el álgebra muestra por qué. Empieza con las dos fórmulas de proyección, [[a^2 = c \\times p]] y [[b^2 = c \\times q]], y súmalas:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Al sacar factor común c del lado derecho se obtiene [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], la sustitución da el resultado conocido:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una comprobación numérica con el triángulo 6-8-10 lo confirma: [[a^2 + b^2 = 36 + 64 = 100]] y [[c^2 = 10^2 = 100]]. El teorema de la proyección divide la relación pitagórica en una parte por cateto, y al sumar las partes se reconstruye.",
            },
            {
              "kind": "p",
              "text": "Esa división es lo que hace útiles las fórmulas de proyección: el teorema de Pitágoras por sí solo no puede hallar una proyección a partir de un cateto y una hipotenusa, porque habla de los catetos juntos.",
            },
          ],
          "h2": "Relación entre la proyección Q y el teorema de Pitágoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proyección q también se conecta con la altura mediante una segunda relación de media geométrica. La altura h es la media geométrica de las dos proyecciones:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Como [[p = c - q]], la altura también puede escribirse usando solo q y c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[q = 6.4]] cm y [[c = 10]] cm. Primero halla p: [[p = 10 - 6.4 = 3.6]] cm. Luego [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. La altura es más corta que cualquiera de los catetos, como debe ser.",
            },
            {
              "kind": "p",
              "text": "Solo la proyección q no determina la altura: dos triángulos diferentes pueden compartir la misma q con hipotenusas diferentes. Siempre se necesita también la hipotenusa completa o la otra proyección. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de las proyecciones</a> realiza ese cálculo cuando se conocen ambas proyecciones.",
            },
          ],
          "h2": "Relación entre la proyección Q y la altura",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula de la proyección puede reordenarse para hallar el cateto b en lugar de q. Partiendo de [[b^2 = c \\times q]], toma la raíz cuadrada positiva de ambos lados:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Compruébalo con los números conocidos: [[b = 8]] cm, [[c = 10]] cm y [[q = 6.4]] cm. El producto dentro de la raíz es [[c \\times q = 10 \\times 6.4 = 64]] y [[\\sqrt{64} = 8]] cm, que es el cateto con el que empezamos.",
            },
            {
              "kind": "p",
              "text": "La conexión es la relación de media geométrica: el cateto b es la media geométrica de la hipotenusa y su proyección. Por eso el cateto aparece al cuadrado en el teorema y por eso aparece la raíz cuadrada al resolver para el cateto. Para los problemas que parten de q y c, la <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir de la proyección</a> ejecuta directamente esta fórmula reordenada.",
            },
          ],
          "h2": "Relación entre la proyección Q y el cateto B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las dos proyecciones son las dos partes de un solo lado recto, así que suman toda la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Al reordenar se obtiene [[p = c - q]]. Con [[c = 10]] cm y [[q = 6.4]] cm, la resta es [[p = 10 - 6.4 = 3.6]] cm. La misma resta funciona al revés: [[q = c - p]]. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir de las proyecciones</a> reconstruye c a partir de p y q cuando la hipotenusa misma es desconocida.",
            },
            {
              "kind": "p",
              "text": "Comparar p y q te dice cómo es la forma del triángulo. Cuando q es igual a p, la altura cae en el punto medio de la hipotenusa y los dos catetos son iguales, así que el triángulo es isósceles. Cuando q es mayor que p, el cateto b es más largo que el cateto a, y cuando p es mayor, el cateto a es más largo. La proyección más larga siempre pertenece al cateto más largo.",
            },
            {
              "kind": "p",
              "text": "En el triángulo 6-8-10, q mide 6.4 cm y p mide 3.6 cm, así que q es mayor y el cateto b, con 8 cm, es efectivamente más largo que el cateto a, con 6 cm.",
            },
          ],
          "h2": "Relación entre la proyección P y la proyección Q",
          "image": {
            "alt": "Triángulo rectángulo que compara la proyección q emparejada con el cateto b frente a la proyección p emparejada con el cateto a, con c igual a 10, q igual a 6.4 y p igual a 3.6",
            "caption": "q usa b (64 dividido entre 10 = 6.4) y p usa a (36 dividido entre 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[b = 8]] cm y [[c = 10]] cm. Los cuatro pasos siguientes muestran todo el desarrollo, sin saltarse nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[q = \\frac{b^2}{c}]].",
                "Sustituye los valores: [[q = \\frac{8^2}{10}]].",
                "Eleva al cuadrado el cateto: [[q = \\frac{64}{10}]].",
                "Divide: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta 6.4 cm es el segmento de la hipotenusa junto al cateto b, no un lado perpendicular ni un área. Una breve verificación cierra el círculo: [[b^2 = 8^2 = 64]] y [[c \\times q = 10 \\times 6.4 = 64]], así que ambos lados del teorema coinciden.",
            },
            {
              "kind": "p",
              "text": "Como referencia, la otra proyección es [[p = 10 - 6.4 = 3.6]] cm, el cateto a es [[a = \\sqrt{10 \\times 3.6} = 6]] cm y la altura es [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, lo que confirma el conocido triángulo rectángulo 6-8-10.",
            },
          ],
          "h2": "Ejemplo paso a paso para hallar la proyección Q",
          "image": {
            "alt": "Triángulo rectángulo con cateto b de 8 cm e hipotenusa de 10 cm, resuelto para dar una proyección q igual a 6.4 cm",
            "caption": "Ejemplo resuelto: b = 8 cm y c = 10 cm dan q = 64 dividido entre 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones independientes detectan casi todos los errores. Aplica al menos una a cada respuesta y las cuatro cuando el problema sea importante. El ejemplo siguiente usa [[b = 8]] cm, [[c = 10]] cm y [[q = 6.4]] cm en todo momento.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comprobación del teorema de la proyección",
            },
            {
              "kind": "p",
              "text": "Verifica [[q = \\frac{b^2}{c}]] directamente. Aquí [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, que coincide con la respuesta. Si el nuevo cálculo difiere, el error estuvo en elevar al cuadrado o en dividir.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Suma de segmentos",
            },
            {
              "kind": "p",
              "text": "Halla p por resta: [[p = 10 - 6.4 = 3.6]] cm. Luego comprueba [[p + q = 3.6 + 6.4 = 10]] cm, que es igual a c. Una suma que no llegue a c indica un desliz en la resta.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Comprobación del teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcula el cateto a a partir de p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Luego comprueba [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Esta comprobación pone a prueba todo el triángulo, así que detecta errores de etiquetado que la primera comprobación puede pasar por alto. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir de la proyección</a> ejecuta directamente el paso de a.",
            },
            {
              "kind": "h3",
              "text": "Método 4: Razonabilidad geométrica",
            },
            {
              "kind": "p",
              "text": "Confirma que q sea positiva, menor que c, esté en la unidad correcta y sea un segmento de la hipotenusa y no un lado perpendicular. Aquí 6.4 cm es positiva, menor que 10 cm, está en centímetros y es más corta que el cateto b, que mide 8 cm.",
            },
          ],
          "h2": "Cómo verificar tu cálculo de la proyección Q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traza la altura desde el vértice del ángulo recto C perpendicular a la hipotenusa AB. Se encuentra con la hipotenusa en un punto llamado pie, etiquetado D, y la divide en dos segmentos adyacentes: AD es la proyección p y DB es la proyección q.",
            },
            {
              "kind": "p",
              "text": "La proyección q pertenece al cateto b porque se encuentra junto al vértice B, el mismo vértice donde empieza el cateto b. En el triángulo pequeño CBD, el cateto b es la hipotenusa y q es uno de sus catetos, que es el vínculo geométrico que hace funcionar el teorema de la proyección. La proyección p, por el mismo razonamiento, pertenece al cateto a, que toca el vértice A.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones son longitudes sobre la hipotenusa, medidas en la misma unidad que los demás lados. No son perpendiculares a nada y no son lados del triángulo original. La <a href=\"/right-triangle-projection-calculator/\">calculadora de proyección de triángulo rectángulo</a> halla ambas proyecciones cuando se conocen los catetos y la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Como p y q son las dos partes de un solo lado recto, suman toda la hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Con [[c = 10]] cm y [[q = 6.4]] cm, la otra proyección es [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "La proyección q no es lo mismo que el cateto b. El cateto b es el lado BC, uno de los lados que forman el ángulo recto, mientras que q es el segmento DB sobre la hipotenusa. En el triángulo 6-8-10, el cateto b mide 8 cm y la proyección q solo mide 6.4 cm.",
            },
          ],
          "h2": "¿Qué es la proyección Q en un triángulo rectángulo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "El cuadrado está ahí porque el teorema de la proyección es una afirmación sobre un cateto al cuadrado: dice que el cuadrado del cateto b es igual al producto de c y q, [[b^2 = c \\times q]], y la fórmula de q es lo que se obtiene al dividir ambos lados entre c.",
            },
            {
              "kind": "p",
              "text": "La razón se remonta a los triángulos semejantes. En el triángulo CBD, el cateto b desempeña el papel de la hipotenusa, mientras que q es uno de sus catetos. Comparar el triángulo pequeño con el triángulo completo da la proporción [[\\frac{q}{b} = \\frac{b}{c}]] y el cateto b aparece dos veces, una en cada razón. Al multiplicar en cruz, b queda en ambos lados, que es exactamente por qué aparece el cuadrado.",
            },
            {
              "kind": "p",
              "text": "La relación de media geométrica dice lo mismo con otras palabras: el cateto b es la media geométrica de la hipotenusa c y su proyección q, es decir, [[b = \\sqrt{c \\times q}]]. Al elevar ambos lados al cuadrado se obtiene [[b^2 = c \\times q]] y al dividir entre c se despeja q.",
            },
            {
              "kind": "p",
              "text": "La división es el paso que despeja q. La multiplicación en el teorema une q con c, y dividir entre c deshace esa unión. Sin el cuadrado, la fórmula mezclaría una longitud con un área y las unidades no cuadrarían.",
            },
          ],
          "h2": "¿Por qué se eleva al cuadrado el cateto B en la fórmula de la proyección?",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-applications": "Aplicaciones prácticas de los cálculos de proyección de triángulos rectángulos",
        "sec-calculate": "Calcular la proyección Q de un triángulo rectángulo",
        "sec-diagram": "Diagrama de la proyección Q de un triángulo rectángulo explicado",
        "sec-examples": "Ejemplos resueltos de cálculo de la proyección Q",
        "sec-faq": "Preguntas frecuentes",
        "sec-formula": "Fórmula de la proyección Q de un triángulo rectángulo",
        "sec-how-to-use": "Cómo usar la calculadora de proyección Q de triángulo rectángulo",
        "sec-intro": "Calculadora de proyección Q de triángulo rectángulo",
        "sec-leg-b-hypotenuse": "Comprender el cateto B y la hipotenusa",
        "sec-mistakes": "Errores comunes al calcular la proyección Q",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-projection-p": "Cómo calcular la proyección P a partir del otro cateto",
        "sec-proof": "¿Por qué funciona la fórmula de la proyección Q?",
        "sec-properties": "Propiedades importantes de la proyección Q",
        "sec-pythagoras": "Relación entre la proyección Q y el teorema de Pitágoras",
        "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "sec-relationship-altitude": "Relación entre la proyección Q y la altura",
        "sec-relationship-leg-b": "Relación entre la proyección Q y el cateto B",
        "sec-relationship-pq": "Relación entre la proyección P y la proyección Q",
        "sec-step-example": "Ejemplo paso a paso para hallar la proyección Q",
        "sec-verify": "Cómo verificar tu cálculo de la proyección Q",
        "sec-what-projection-q": "¿Qué es la proyección Q en un triángulo rectángulo?",
        "sec-why-squared": "¿Por qué se eleva al cuadrado el cateto B en la fórmula de la proyección?",
      },
    },
};
