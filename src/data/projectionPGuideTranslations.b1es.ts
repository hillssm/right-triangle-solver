// projectionPGuideTranslations.bes.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B1_ES = {
  "es": {
      "faqHeading": "Preguntas frecuentes",
      "faqs": [
        {
          "answer": "La fórmula es [[p = \\frac{a^2}{c}]], donde a es el cateto asociado a p y c es la hipotenusa completa. Primero eleva el cateto a al cuadrado y luego divide entre c. Por ejemplo, [[a = 6]] cm y [[c = 10]] cm dan [[p = 3.6]] cm.",
          "question": "¿Cuál es la fórmula de la proyección p?",
        },
        {
          "answer": "La proyección p es el segmento de la hipotenusa junto al vértice A, creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa en el punto D. En el triángulo ABC, [[p = AD]], la porción de la hipotenusa asociada al cateto a.",
          "question": "¿Qué representa la proyección p?",
        },
        {
          "answer": "El cuadrado proviene de los triángulos semejantes: el triángulo ACD es semejante al triángulo ABC, lo que da [[\\frac{p}{a} = \\frac{a}{c}]], y el cateto a aparece en ambas razones. Al multiplicar en cruz se obtiene [[a^2 = c \\times p]], así que el cuadrado forma parte de la geometría.",
          "question": "¿Por qué se eleva el cateto a al cuadrado?",
        },
        {
          "answer": "La división despeja p. El teorema de la proyección establece que [[a^2 = c \\times p]], donde p está multiplicada por c, así que dividir ambos lados entre c deja p sola. La división también convierte la longitud al cuadrado en una longitud ordinaria.",
          "question": "¿Por qué dividimos entre la hipotenusa?",
        },
        {
          "answer": "No. El cateto a es el lado AC, uno de los lados que forman el ángulo recto, mientras que la proyección p es el segmento AD sobre la hipotenusa. En el triángulo 6-8-10, el cateto a mide 6 cm y la proyección p solo 3,6 cm.",
          "question": "¿La proyección p es lo mismo que el cateto a?",
        },
        {
          "answer": "No. La proyección p es solo una parte de la hipotenusa, así que debe ser menor que c. Si p fuera igual a c, q sería cero y el triángulo sería degenerado. Un resultado mayor que c siempre indica un error de entrada o de etiquetado.",
          "question": "¿La proyección p puede ser mayor que la hipotenusa?",
        },
        {
          "answer": "La proyección p está junto al vértice A y se empareja con el cateto a, mientras que la proyección q está junto al vértice B y se empareja con el cateto b. Son los dos segmentos que la altura crea sobre la hipotenusa: [[p + q = c]].",
          "question": "¿Cuál es la diferencia entre la proyección p y la proyección q?",
        },
        {
          "answer": "No. El cateto a se empareja solo con la proyección p. Para hallar q necesitas el cateto b, usando [[q = \\frac{b^2}{c}]], o restar: [[q = c - p]] una vez conocida p. La <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> halla q a partir de b y c.",
          "question": "¿Puedo calcular la proyección q usando el cateto a?",
        },
        {
          "answer": "También necesitas q o c. Halla q con [[q = c - p]] y luego usa [[h = \\sqrt{p \\times q}]]. Con [[p = 3.6]] cm y [[c = 10]] cm, [[q = 6.4]] cm y [[h = 4.8]] cm. Solo con la proyección p no se puede determinar la altura.",
          "question": "¿Cómo hallo la altura cuando se conoce la proyección p?",
        },
        {
          "answer": "Vuelve a calcular [[p = \\frac{a^2}{c}]], luego comprueba [[p + q = c]] después de hallar q por resta, y confirma que p es positiva y menor que c. También puedes hallar el cateto b a partir de q y comprobar [[a^2 + b^2 = c^2]].",
          "question": "¿Cómo puedo verificar la proyección p?",
        },
        {
          "answer": "La altura cae en el punto medio de la hipotenusa y los dos catetos son iguales, así que el triángulo es isósceles. Con [[c = 10]] cm y [[p = q = 5]] cm, ambos catetos miden [[\\sqrt{50}]] cm, unos 7,071 cm.",
          "question": "¿Qué ocurre cuando p y q son iguales?",
        },
        {
          "answer": "La hipotenusa se encuentra opuesta al ángulo recto, el ángulo mayor del triángulo, y el lado opuesto al ángulo mayor es siempre el lado más largo. Si a fuera igual o mayor que c, no podría existir ese triángulo rectángulo.",
          "question": "¿Por qué la hipotenusa debe ser más larga que el cateto a?",
        },
      ],
      "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "relatedIntro": "Cada calculadora siguiente se encarga de una tarea concreta del triángulo rectángulo, así que elige la herramienta que coincida con las medidas que ya conoces.",
      "relatedItems": [
        "Calculadora de proyección del triángulo rectángulo",
        "Calculadora de proyección q del triángulo rectángulo",
        "Calculadora de cateto a a partir de la proyección del triángulo rectángulo",
        "Calculadora de cateto b a partir de la proyección del triángulo rectángulo",
        "Calculadora de hipotenusa a partir de las proyecciones del triángulo rectángulo",
        "Calculadora de altura a partir de las proyecciones del triángulo rectángulo",
        "Calculadora de lados del triángulo rectángulo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "El uso más directo es la tarea de geometría y el trabajo en clase, donde los problemas de proyección ponen a prueba si los estudiantes saben etiquetar un diagrama y aplicar [[p = \\frac{a^2}{c}]] en lugar de recurrir al teorema de Pitágoras por costumbre. Los ejercicios de triángulos semejantes usan la misma configuración, ya que la demostración en sí es un ejercicio de emparejar lados correspondientes.",
            },
            {
              "kind": "p",
              "text": "El dibujo técnico usa el teorema cuando hay que reconstruir un triángulo rectángulo a partir de medidas parciales: si un dibujo da la hipotenusa y el pie de la altura, la proyección que falta se obtiene sin volver a medir la figura. Los profesores también usan esta configuración como lección puente entre la suma de segmentos y la semejanza.",
            },
            {
              "kind": "p",
              "text": "Una condición limita todas las aplicaciones: la geometría del triángulo rectángulo requerida debe existir de verdad. El teorema describe relaciones geométricas exactas, no medidas aproximadas de campo, así que nunca sustituye a una medición topográfica cuidadosa ni a una medición profesional de ingeniería.",
            },
          ],
          "h2": "Aplicaciones prácticas de los cálculos de proyección del triángulo rectángulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calculadora tiene dos campos de entrada. El primero recibe el cateto a, el lado perpendicular asociado a la proyección p. El segundo recibe la hipotenusa c, el lado completo opuesto al ángulo recto. Ambas longitudes deben usar la misma unidad, así que convierte primero si una medida está en centímetros y la otra en metros.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa debe ser más larga que el cateto a, ya que un cateto es un lado del ángulo recto mientras que la hipotenusa abarca todo el triángulo. Si tu valor de a es mayor que c, probablemente hayas introducido una proyección, la altura o el lado equivocado.",
            },
            {
              "kind": "p",
              "text": "Haz clic en Calcular proyección p para ver el resultado y usa Restablecer para borrar ambos campos antes de un problema nuevo. El resultado es una longitud en la unidad que introdujiste, así que un cateto de 6 cm y una hipotenusa de 10 cm devuelven 3,6 cm. El resultado es una longitud de segmento sobre la hipotenusa.",
            },
          ],
          "h2": "Calcular la proyección p del triángulo rectángulo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "El diagrama principal muestra el triángulo ABC con el ángulo recto en C. El lado AC es el cateto a, el lado BC es el cateto b y el lado AB es la hipotenusa c. La altura CD baja desde C perpendicular a AB y la toca en D.",
            },
            {
              "kind": "p",
              "text": "El punto D divide la hipotenusa en dos partes: el segmento AD es la proyección p y el segmento DB es la proyección q. El cateto a y la proyección p están resaltados porque son el par del que trata esta página. Sigue las etiquetas en este orden: empieza en A, recorre el cateto a hasta C, luego el cateto b hasta B y vuelve por la hipotenusa de B a A, deteniéndote en D para ver la división en p y q.",
            },
            {
              "kind": "p",
              "text": "El emparejamiento de a con p se hace visible en el triángulo pequeño ACD, donde el cateto a es la hipotenusa y p es el lado que se encuentra sobre la hipotenusa grande. Como el triángulo ACD es semejante al triángulo ABC, la razón de p a a en el triángulo pequeño es igual a la razón de a a c en el grande.",
            },
          ],
          "h2": "Diagrama de la proyección p del triángulo rectángulo explicado",
          "image": {
            "alt": "Triángulo rectángulo ABC con ángulo recto en C, altura CD hasta la hipotenusa AB, cateto a y proyección p resaltados, con los catetos a y b, la hipotenusa c, las proyecciones p y q y la altura h etiquetados",
            "caption": "La altura CD divide la hipotenusa AB en la proyección p (AD) y la proyección q (DB), con el cateto a (AC) resaltado.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Dados [[a = 6]] cm y [[c = 10]] cm, la fórmula da [[p = \\frac{6^2}{10} = \\frac{36}{10}]], así que [[p = 3.6]] cm. El cateto al cuadrado, 36, es un valor intermedio, y dividir entre la hipotenusa lo convierte de nuevo en una longitud. El otro cateto de este triángulo mide 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 2: División con cuadrado perfecto",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]] cm y [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. El cateto al cuadrado se divide de forma exacta, así que la respuesta es exacta. La otra proyección aquí mide 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 3: Resultado decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7]] cm y [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un resultado decimal es normal: la proyección no tiene por qué ser un número entero aunque ambas entradas lo sean. La otra proyección mide 10,5 cm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 4: Medidas más grandes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 12]] m y [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Los números más grandes no cambian nada del método: elevar al cuadrado y luego dividir. La otra proyección mide 12,8 m, que se empareja con un cateto de 16 m.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 5: Medidas pequeñas",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 30]] mm y [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Las medidas pequeñas funcionan igual, y mantener la unidad en milímetros durante todo el cálculo evita cualquier conversión. La otra proyección mide 32 mm, que se empareja con un cateto de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 6: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[a = \\frac{3}{4}]] ft y [[c = \\frac{3}{2}]] ft, eleva primero el cateto al cuadrado: [[a^2 = \\frac{9}{16}]] pies cuadrados. Luego [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividir entre una fracción significa multiplicar por su recíproco, que es el paso que más estudiantes pasan por alto con medidas fraccionarias.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 7: Unidades diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 60]] cm y [[c = 1]] m, convierte primero: 1 m equivale a 100 cm. Luego [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Usar 1 en lugar de 100 habría dado 3600 cm, una proyección mucho más larga que la hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Ejemplo 8: Valores decimales más grandes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 4.5]] m y [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Las entradas decimales necesitan el mismo cuidado que los números enteros: eleva al cuadrado el decimal completo y luego divide. La otra proyección mide 4,8 m, que se empareja con un cateto de 6 m.",
            },
          ],
          "h2": "Ejemplos resueltos de cálculo de la proyección p",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "El teorema de la proyección establece que el cuadrado del cateto a es igual a la hipotenusa multiplicada por su proyección:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividir ambos lados entre c despeja p y da la fórmula de trabajo de esta página:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "El cálculo se desarrolla en dos etapas. La etapa 1 eleva el cateto a al cuadrado, multiplicándolo por sí mismo. La etapa 2 divide esa longitud al cuadrado entre la hipotenusa completa c, y el resultado es una longitud ordinaria, no una longitud al cuadrado.",
            },
            {
              "kind": "p",
              "text": "Las unidades necesitan cuidado en ambas etapas. Si a y c están ambas en centímetros, entonces [[a^2]] está en centímetros cuadrados, y dividir entre centímetros devuelve centímetros. Mezclar unidades, como metros para a y centímetros para c, da un cociente sin sentido, así que convierte a una sola unidad antes de calcular.",
            },
            {
              "kind": "p",
              "text": "Con [[a = 6]] cm y [[c = 10]] cm, la etapa 1 da [[6^2 = 36]], y la etapa 2 da [[p = \\frac{36}{10} = 3.6]] cm. El número 36 no responde por sí solo a ninguna pregunta: solo después de la división se convierte en la longitud de la proyección.",
            },
          ],
          "h2": "Fórmula de la proyección p del triángulo rectángulo",
          "image": {
            "alt": "Triángulo rectángulo ABC con altura CD, que muestra que la proyección p es igual al cateto a al cuadrado dividido entre la hipotenusa c",
            "caption": "La fórmula de la proyección: p es igual a a al cuadrado dividido entre c, con el pie de la altura D dividiendo la hipotenusa.",
            "src": "projection-p-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Once pasos cortos te llevan de un diagrama etiquetado a una respuesta comprobada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica el triángulo rectángulo de tu problema y confirma que tiene un ángulo recto.",
                "Localiza el vértice del ángulo recto y la altura desde él hasta la hipotenusa.",
                "Identifica el cateto perpendicular asociado a la proyección p, el cateto que toca el vértice A.",
                "Identifica la hipotenusa completa c, el lado opuesto al ángulo recto.",
                "Confirma que c es mayor que a. Si no lo es, vuelve a etiquetar el diagrama antes de continuar.",
                "Elige unidades compatibles y convierte si las medidas usan unidades diferentes.",
                "Introduce el cateto a en el campo Cateto a.",
                "Introduce la hipotenusa c en el campo Hipotenusa c.",
                "Haz clic en Calcular proyección p y lee el resultado.",
                "Comprueba el resultado: p debe ser positiva y menor que c.",
                "Usa Restablecer cuando empieces un cálculo nuevo.",
              ],
            },
            {
              "kind": "p",
              "text": "Introducir el cateto b en lugar del cateto a produce una proyección diferente. El cateto b se empareja con q, así que la calculadora devolvería el segmento junto al vértice B, no el junto a A. La comprobación de etiquetas del paso 3 es la más importante.",
            },
          ],
          "h2": "Cómo usar la calculadora de proyección p del triángulo rectángulo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora halla la proyección p de un triángulo rectángulo cuando conoces el cateto a y la hipotenusa completa c. La proyección p es el segmento de la hipotenusa que se encuentra junto al cateto a, creado cuando la altura desde el ángulo recto se encuentra con la hipotenusa. La fórmula es [[p = \\frac{a^2}{c}]], donde a es el cateto perpendicular y c es la hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por ejemplo, con [[a = 6]] cm y [[c = 10]] cm, el cálculo es [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. El valor 3,6 cm es la porción de la hipotenusa asociada al cateto a, no el cateto en sí ni toda la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "La calculadora está en la parte superior de esta página, seguida de la fórmula, un diagrama etiquetado, una demostración, ejemplos resueltos y comprobaciones que puedes aplicar a cualquier respuesta.",
            },
          ],
          "h2": "Calculadora de proyección p del triángulo rectángulo",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene dos lados perpendiculares, llamados catetos, y un lado más largo, llamado hipotenusa. Los dos catetos se encuentran en el ángulo recto, y la hipotenusa se encuentra opuesta a ese ángulo. Aquí el triángulo es ABC con el ángulo recto en C: el cateto a es AC, el cateto b es BC y la hipotenusa c es AB.",
            },
            {
              "kind": "p",
              "text": "El cateto a es uno de los dos lados que forman el ángulo recto, así que es un lado genuino del triángulo, no un segmento trazado dentro de él. La proyección p se encuentra plana sobre la hipotenusa, mientras que el cateto a va desde el vértice A hasta el vértice del ángulo recto C.",
            },
            {
              "kind": "p",
              "text": "La hipotenusa es siempre el lado más largo en un triángulo rectángulo no degenerado, ya que se encuentra opuesta al ángulo mayor, el ángulo recto. Por eso la fórmula exige [[0 < a < c]] y por eso la calculadora espera una hipotenusa más larga que el cateto.",
            },
            {
              "kind": "p",
              "text": "La posición del cateto a decide qué segmento se llama p: el cateto a toca el vértice A, así que el segmento junto a A es p. Comprueba siempre las etiquetas de tu propio diagrama antes de elegir qué cateto introducir.",
            },
          ],
          "h2": "Comprender el cateto a y la hipotenusa",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Cateto perpendicular asociado a p",
              ],
              [
                "b",
                "Otro cateto perpendicular",
              ],
              [
                "c",
                "Hipotenusa completa",
              ],
              [
                "p",
                "Proyección asociada a a",
              ],
              [
                "q",
                "Proyección asociada a b",
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
              "text": "Cada error siguiente va acompañado de su corrección. La mayoría se debe al etiquetado, no a la aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Olvidar elevar el cateto a al cuadrado: dividir a entre c en lugar de a al cuadrado entre c da 0,6 cm en lugar de 3,6 cm.",
                "Dividir c entre a al cuadrado en lugar de a al cuadrado entre c: el cociente debe ser [[a^2/c]], no [[c/a^2]]. Con a = 6 y c = 10, el orden equivocado da unos 0,278, que no tiene ninguna unidad válida.",
                "Usar el cateto b en lugar del cateto a: introducir b devuelve q. Con b = 8 y c = 10, el resultado 6,4 cm es q, no p.",
                "Confundir la proyección p con la proyección q: p está junto al vértice A y q junto al vértice B. Etiqueta ambos segmentos antes de calcular.",
                "Tratar p como el cateto perpendicular real: p es un segmento de la hipotenusa, no el lado AC. En el triángulo 6-8-10, el cateto a mide 6 cm mientras que p solo mide 3,6 cm.",
                "Introducir un valor de a mayor o igual que c: no existe ese triángulo, ya que la hipotenusa es el lado más largo.",
                "Mezclar unidades de medida: convierte primero, como en el Ejemplo 7, donde 1 m se convirtió en 100 cm.",
                "Olvidar que la hipotenusa completa es c: usar una proyección o un cateto como denominador distorsiona el resultado.",
                "Redondear los cálculos intermedios demasiado pronto: redondear el cateto al cuadrado antes de dividir desplaza la respuesta.",
                "Confundir longitudes al cuadrado con longitudes ordinarias: 36 en el ejemplo 6-8-10 es una longitud al cuadrado, mientras que 3,6 cm es la proyección.",
                "Aplicar la fórmula a un triángulo que no es rectángulo: el teorema de la proyección necesita la altura desde un ángulo recto.",
                "Olvidar que p es solo un segmento de la hipotenusa: p más q es igual a c, así que un resultado igual o mayor que c indica un error.",
              ],
            },
            {
              "kind": "p",
              "text": "Si una respuesta parece incorrecta, detente y vuelve a etiquetar el diagrama antes de recalcular. La mayoría de los errores anteriores desaparece una vez que p y q están claramente marcados sobre la hipotenusa.",
            },
          ],
          "h2": "Errores comunes al calcular la proyección p",
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
              "text": "Un triángulo rectángulo tiene el cateto [[a = 9]] cm y la hipotenusa [[c = 15]] cm. Halla la proyección p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valores decimales",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 1.5]] m y [[c = 2.5]] m, halla la proyección p.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas fraccionarias",
            },
            {
              "kind": "p",
              "text": "Dados [[a = \\frac{5}{6}]] ft y [[c = \\frac{5}{3}]] ft, halla p como fracción.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversión de unidades",
            },
            {
              "kind": "p",
              "text": "Un cateto mide [[a = 80]] cm y la hipotenusa mide [[c = 2]] m. Halla p en centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Hallar q después de calcular p",
            },
            {
              "kind": "p",
              "text": "Un triángulo rectángulo tiene hipotenusa [[c = 25]] cm y cateto [[a = 15]] cm. Halla p y luego q.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Varios pasos con la proyección p y la altura h",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm y [[a = 15]] cm, halla p, luego q y luego la altura h.",
            },
            {
              "kind": "h3",
              "text": "Respuestas de los problemas de práctica",
            },
            {
              "kind": "p",
              "text": "Respuesta 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Respuesta 3: [[a^2 = \\frac{25}{36}]], así que [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Respuesta 4: Convierte 2 m a 200 cm y luego [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, luego [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Respuesta 6: [[p = 9]] cm y [[q = 16]] cm, así que [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemas de práctica con respuestas",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Algunos problemas piden la otra proyección. La fórmula correspondiente es la imagen especular de la fórmula de p, con el cateto b en lugar del cateto a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 8]] cm y [[c = 10]] cm. Entonces [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Eso coincide con la otra proyección del triángulo 6-8-10 de los ejemplos anteriores, donde p era 3,6 cm y las dos proyecciones suman 10 cm.",
            },
            {
              "kind": "p",
              "text": "La fórmula usa b en lugar de a porque cada cateto se empareja con la proyección junto a su propio vértice. El cateto b toca el vértice B, y q es el segmento junto a B. Introducir a en esta fórmula devolvería p, no q. La calculadora de esta página acepta solo a y c, así que usa la <a href=\"/right-triangle-projection-q-calculator/\">calculadora de proyección q</a> cuando necesites hallar q a partir de b y c.",
            },
          ],
          "h2": "Cómo calcular la proyección q a partir del otro cateto",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La demostración se apoya en los triángulos semejantes. Trazar la altura CD divide el triángulo ABC en dos triángulos rectángulos más pequeños, ACD y CBD, y ambos son semejantes al triángulo original. Una de las razones de sus lados da el teorema de la proyección directamente.",
            },
            {
              "kind": "p",
              "text": "Concéntrate en el triángulo ACD y en todo el triángulo ABC. Ambos contienen el ángulo en A y ambos contienen un ángulo recto, así que sus terceros ángulos también deben coincidir. Emparejar los lados que ocupan las mismas posiciones da la proporción:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ahora sustituye los símbolos estándar: [[AD = p]], [[AC = a]] y [[AB = c]]. La proporción queda así:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicar en cruz elimina las fracciones. El numerador izquierdo por el denominador derecho es igual al numerador derecho por el denominador izquierdo, así que [[p \\times c = a \\times a]], que es:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividir ambos lados entre c termina la demostración y da [[p = \\frac{a^2}{c}]]. El mismo argumento aplicado al otro triángulo pequeño, CBD, da [[b^2 = c \\times q]].",
            },
          ],
          "h2": "¿Por qué funciona la fórmula de la proyección p?",
          "image": {
            "alt": "Triángulo rectángulo original ABC junto a los triángulos semejantes más pequeños ACD y CBD, que muestran que la proporción p sobre a es igual a a sobre c",
            "caption": "Demostración por triángulos semejantes: p sobre a es igual a a sobre c, así que multiplicar en cruz da a al cuadrado igual a c por p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ocho propiedades se deducen directamente de [[p = \\frac{a^2}{c}]]. Cada una sirve también como comprobación rápida de una respuesta nueva.",
            },
            {
              "items": [
                "La proyección p siempre es más corta que la hipotenusa completa en un triángulo no degenerado, ya que p es solo parte de c.",
                "Aumentar el cateto a manteniendo c fijo aumenta p, porque el cateto al cuadrado del numerador crece.",
                "Aumentar c manteniendo a fijo disminuye p, porque el denominador crece.",
                "Si a y c se multiplican ambos por el mismo factor positivo, p se multiplica por ese factor.",
                "Si p es igual a q, ambos catetos son iguales y el triángulo es un triángulo rectángulo isósceles.",
                "La proyección p siempre es positiva en un triángulo válido no degenerado. Valores cero o negativos no describen ningún triángulo real.",
                "La proyección p es una longitud, no un área. El cateto al cuadrado es solo un paso intermedio, y dividir entre c devuelve las unidades de longitud ordinarias.",
                "La proyección p está asociada específicamente al cateto a. Usarla con el cateto b responde a una pregunta completamente diferente.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Cuando la altura cae en el punto medio de la hipotenusa, los dos catetos deben coincidir, como muestra el diagrama siguiente.",
            },
          ],
          "h2": "Propiedades importantes de la proyección p",
          "image": {
            "alt": "Dos triángulos rectángulos lado a lado, uno con proyecciones iguales p y q de 5 y otro con proyecciones desiguales p igual a 3,6 y q igual a 6,4",
            "caption": "Proyecciones iguales (p = q = 5) dan catetos iguales, mientras que proyecciones desiguales (p = 3,6, q = 6,4) dan catetos desiguales.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
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
              "text": "Sacar factor común c en el lado derecho da [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], la sustitución produce el resultado familiar:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una comprobación numérica con el triángulo 6-8-10 lo confirma: [[a^2 + b^2 = 36 + 64 = 100]] y [[c^2 = 10^2 = 100]]. El teorema de la proyección divide la relación pitagórica en una parte por cateto, y sumar las partes la reconstruye.",
            },
            {
              "kind": "p",
              "text": "Esa división es lo que hace útiles las fórmulas de proyección: el teorema de Pitágoras por sí solo no puede hallar una proyección a partir de un cateto y una hipotenusa, porque habla de los catetos juntos.",
            },
          ],
          "h2": "Relación entre la proyección p y el teorema de Pitágoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proyección p también se conecta con la altura mediante una segunda relación de media geométrica. La altura h es la media geométrica de las dos proyecciones:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Como [[q = c - p]], la altura también se puede escribir usando solo p y c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 3.6]] cm y [[c = 10]] cm. Primero halla q: [[q = 10 - 3.6 = 6.4]] cm. Luego [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. La altura es más corta que cualquiera de los catetos, como debe ser.",
            },
            {
              "kind": "p",
              "text": "La proyección p por sí sola no determina la altura: dos triángulos diferentes pueden compartir la misma p con hipotenusas diferentes. Siempre se necesita también la hipotenusa completa o la otra proyección. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir de las proyecciones</a> se encarga de ese cálculo cuando se conocen ambas proyecciones.",
            },
          ],
          "h2": "Relación entre la proyección p y la altura",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "La fórmula de la proyección se puede reordenar para hallar el cateto a en lugar de p. Partiendo de [[a^2 = c \\times p]], toma la raíz cuadrada positiva de ambos lados:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Compruébalo con los números conocidos: [[a = 6]] cm, [[c = 10]] cm y [[p = 3.6]] cm. El producto dentro de la raíz es [[c \\times p = 10 \\times 3.6 = 36]], y [[\\sqrt{36} = 6]] cm, que es el cateto con el que empezamos.",
            },
            {
              "kind": "p",
              "text": "La conexión es la relación de media geométrica: el cateto a es la media geométrica de la hipotenusa y su proyección. Por eso el cateto aparece al cuadrado en el teorema y por eso aparece la raíz cuadrada al despejar el cateto. Para problemas que parten de p y c, la <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir de la proyección</a> ejecuta directamente esta fórmula reordenada.",
            },
          ],
          "h2": "Relación entre la proyección p y el cateto a",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Las dos proyecciones son las dos partes de un solo lado recto, así que suman la hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Reordenar da [[q = c - p]]. Con [[c = 10]] cm y [[p = 3.6]] cm, la resta es [[q = 10 - 3.6 = 6.4]] cm. La misma resta funciona al revés: [[p = c - q]]. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir de las proyecciones</a> reconstruye c a partir de p y q cuando la hipotenusa en sí se desconoce.",
            },
            {
              "kind": "p",
              "text": "Comparar p y q dice mucho sobre la forma del triángulo. Cuando p es igual a q, la altura cae en el punto medio de la hipotenusa y los dos catetos son iguales, así que el triángulo es isósceles. Cuando p es mayor que q, el cateto a es más largo que el cateto b, y cuando q es mayor, el cateto b es más largo. La proyección más larga siempre pertenece al cateto más largo.",
            },
            {
              "kind": "p",
              "text": "En el triángulo 6-8-10, q mide 6,4 cm y p mide 3,6 cm, así que q es mayor, y el cateto b, de 8 cm, es efectivamente más largo que el cateto a, de 6 cm.",
            },
          ],
          "h2": "Relación entre la proyección p y la proyección q",
          "image": {
            "alt": "Triángulo rectángulo que compara la proyección p emparejada con el cateto a frente a la proyección q emparejada con el cateto b, con c igual a 10, p igual a 3,6 y q igual a 6,4",
            "caption": "p usa a (36 dividido entre 10 = 3,6) y q usa b (64 dividido entre 10 = 6,4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm y [[c = 10]] cm. Los cuatro pasos siguientes muestran todo el trabajo, sin saltarse nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escribe la fórmula: [[p = \\frac{a^2}{c}]].",
                "Sustituye los valores: [[p = \\frac{6^2}{10}]].",
                "Eleva el cateto al cuadrado: [[p = \\frac{36}{10}]].",
                "Divide: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La respuesta 3,6 cm es el segmento de la hipotenusa junto al cateto a, no un lado perpendicular ni un área. Una breve verificación cierra el círculo: [[a^2 = 6^2 = 36]] y [[c \\times p = 10 \\times 3.6 = 36]], así que ambos lados del teorema coinciden.",
            },
            {
              "kind": "p",
              "text": "Como referencia, la otra proyección es [[q = 10 - 3.6 = 6.4]] cm, el cateto b es [[b = \\sqrt{10 \\times 6.4} = 8]] cm y la altura es [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, lo que confirma el conocido triángulo rectángulo 6-8-10.",
            },
          ],
          "h2": "Ejemplo paso a paso para hallar la proyección p",
          "image": {
            "alt": "Triángulo rectángulo con cateto a de 6 cm e hipotenusa de 10 cm, resuelto para dar la proyección p igual a 3,6 cm",
            "caption": "Ejemplo resuelto: a = 6 cm y c = 10 cm dan p = 36 dividido entre 10 = 3,6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cuatro comprobaciones independientes detectan casi todos los errores. Aplica al menos una a cada respuesta, y las cuatro cuando el problema importa. El ejemplo siguiente usa [[a = 6]] cm, [[c = 10]] cm y [[p = 3.6]] cm en todo momento.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Comprobación del teorema de la proyección",
            },
            {
              "kind": "p",
              "text": "Verifica [[p = \\frac{a^2}{c}]] directamente. Aquí [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, que coincide con la respuesta. Si el nuevo cálculo difiere, el error estuvo en elevar al cuadrado o en dividir.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Suma de segmentos",
            },
            {
              "kind": "p",
              "text": "Halla q por resta: [[q = 10 - 3.6 = 6.4]] cm. Luego comprueba [[p + q = 3.6 + 6.4 = 10]] cm, que es igual a c. Una suma que no llega a c indica un desliz en la resta.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Comprobación del teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcula el cateto b a partir de q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Luego comprueba [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Esta comprobación pone a prueba todo el triángulo, así que detecta errores de etiquetado que la primera comprobación puede pasar por alto. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir de la proyección</a> ejecuta directamente el paso de b.",
            },
            {
              "kind": "h3",
              "text": "Método 4: Razonabilidad geométrica",
            },
            {
              "kind": "p",
              "text": "Confirma que p es positiva, menor que c, está en la unidad correcta y es un segmento de la hipotenusa y no un lado perpendicular. Aquí 3,6 cm es positiva, menor que 10 cm, está en centímetros y es mucho más corta que el cateto a, de 6 cm.",
            },
          ],
          "h2": "Cómo verificar tu cálculo de la proyección p",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traza la altura desde el vértice del ángulo recto C perpendicular a la hipotenusa AB. Se encuentra con la hipotenusa en un punto llamado pie, etiquetado D, y la divide en dos segmentos adyacentes: AD es la proyección p y DB es la proyección q.",
            },
            {
              "kind": "p",
              "text": "La proyección p pertenece al cateto a porque se encuentra junto al vértice A, el mismo vértice donde empieza el cateto a. En el triángulo pequeño ACD, el cateto a es la hipotenusa y p es uno de sus catetos, que es el vínculo geométrico que hace funcionar el teorema de la proyección. La proyección q, por el mismo razonamiento, pertenece al cateto b, que toca el vértice B.",
            },
            {
              "kind": "p",
              "text": "Las proyecciones son longitudes sobre la hipotenusa, medidas en la misma unidad que los demás lados. No son perpendiculares a nada y no son lados del triángulo original. La <a href=\"/right-triangle-projection-calculator/\">calculadora de proyección del triángulo rectángulo</a> halla ambas proyecciones cuando se conocen los catetos y la hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Como p y q son las dos partes de un solo lado recto, suman la hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Con [[c = 10]] cm y [[p = 3.6]] cm, la otra proyección es [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "La proyección p no es lo mismo que el cateto a. El cateto a es el lado AC, uno de los lados que forman el ángulo recto, mientras que p es el segmento AD sobre la hipotenusa. En el triángulo 6-8-10, el cateto a mide 6 cm y la proyección p solo 3,6 cm.",
            },
          ],
          "h2": "¿Qué es la proyección p en un triángulo rectángulo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "El cuadrado está ahí porque el teorema de la proyección es una afirmación sobre un cateto al cuadrado: dice que el cuadrado del cateto a es igual al producto de c por p, [[a^2 = c \\times p]], y la fórmula de p es lo que se obtiene al dividir ambos lados entre c.",
            },
            {
              "kind": "p",
              "text": "La razón se remonta a los triángulos semejantes. En el triángulo ACD, el cateto a desempeña el papel de la hipotenusa, mientras que p es uno de sus catetos. Comparar el triángulo pequeño con el triángulo completo da la proporción [[\\frac{p}{a} = \\frac{a}{c}]], y el cateto a aparece dos veces, una en cada razón. Multiplicar en cruz pone a en ambos lados, que es exactamente por qué aparece el cuadrado.",
            },
            {
              "kind": "p",
              "text": "La relación de media geométrica dice lo mismo con otras palabras: el cateto a es la media geométrica de la hipotenusa c y su proyección p, es decir, [[a = \\sqrt{c \\times p}]]. Elevar ambos lados al cuadrado da [[a^2 = c \\times p]], y dividir entre c despeja p.",
            },
            {
              "kind": "p",
              "text": "La división es el paso que despeja p. La multiplicación en el teorema une p a c, y dividir entre c deshace esa unión. Sin el cuadrado, la fórmula mezclaría una longitud con un área y las unidades no cuadrarían.",
            },
          ],
          "h2": "¿Por qué se eleva el cateto a al cuadrado en la fórmula de la proyección?",
        },
      },
      "tocHeading": "Contenido de la guía",
      "tocItems": {
        "sec-applications": "Aplicaciones prácticas de los cálculos de proyección del triángulo rectángulo",
        "sec-calculate": "Calcular la proyección p del triángulo rectángulo",
        "sec-diagram": "Diagrama de la proyección p del triángulo rectángulo explicado",
        "sec-examples": "Ejemplos resueltos de cálculo de la proyección p",
        "sec-faq": "Preguntas frecuentes",
        "sec-formula": "Fórmula de la proyección p del triángulo rectángulo",
        "sec-how-to-use": "Cómo usar la calculadora de proyección p del triángulo rectángulo",
        "sec-intro": "Calculadora de proyección p del triángulo rectángulo",
        "sec-leg-a-hypotenuse": "Comprender el cateto a y la hipotenusa",
        "sec-mistakes": "Errores comunes al calcular la proyección p",
        "sec-practice": "Problemas de práctica con respuestas",
        "sec-projection-q": "Cómo calcular la proyección q a partir del otro cateto",
        "sec-proof": "¿Por qué funciona la fórmula de la proyección p?",
        "sec-properties": "Propiedades importantes de la proyección p",
        "sec-pythagoras": "Relación entre la proyección p y el teorema de Pitágoras",
        "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
        "sec-relationship-altitude": "Relación entre la proyección p y la altura",
        "sec-relationship-leg-a": "Relación entre la proyección p y el cateto a",
        "sec-relationship-pq": "Relación entre la proyección p y la proyección q",
        "sec-step-example": "Ejemplo paso a paso para hallar la proyección p",
        "sec-verify": "Cómo verificar tu cálculo de la proyección p",
        "sec-what-projection-p": "¿Qué es la proyección p en un triángulo rectángulo?",
        "sec-why-squared": "¿Por qué se eleva el cateto a al cuadrado en la fórmula de la proyección?",
      },
    },
};
