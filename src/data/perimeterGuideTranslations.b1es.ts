// perimeterGuideTranslations.b1es.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Spanish (es).
export const B1_ES = {
  "es": {
    "tocHeading": "Navegación por secciones",
    "tocItems": {
      "sec-intro": "Cómo calcular el perímetro de un triángulo rectángulo",
      "sec-geometry": "¿Qué es un triángulo rectángulo?",
      "sec-definition": "¿Qué es el perímetro de un triángulo rectángulo?",
      "sec-howto": "Cómo hallar el perímetro de un triángulo rectángulo",
      "sec-examples": "Ejemplos paso a paso del perímetro de un triángulo rectángulo",
      "sec-missing": "Cómo calcular el perímetro de un triángulo rectángulo con un lado desconocido",
      "sec-applications": "Aplicaciones reales del perímetro de un triángulo rectángulo",
      "sec-properties": "Propiedades especiales del perímetro de un triángulo rectángulo",
      "sec-vs-area": "¿Cuál es la diferencia entre perímetro y área?",
      "sec-semiperimeter": "¿Cuál es la relación entre perímetro y semiperímetro?",
      "sec-units": "Las unidades de medida en los cálculos del perímetro de un triángulo rectángulo",
      "sec-mistakes": "Errores comunes al calcular el perímetro de un triángulo rectángulo",
      "sec-verify": "Cómo comprobar si el perímetro de un triángulo rectángulo es correcto",
      "sec-related": "Explora calculadoras relacionadas de triángulos rectángulos",
      "sec-faq": "Preguntas frecuentes",
      "sec-conclusion": "Conclusión"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cómo calcular el perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Toma un triángulo rectángulo con lados [[a=3]], [[b=4]] y [[c=5]]. Su perímetro es [[P=3+4+5]], o [[[\\boxed{P=12\\text{ units}}]]]. El número 12 indica la distancia completa alrededor del contorno triangular: recorre los tres lados y habrás viajado 12 unidades." },
          { "kind": "p", "text": "Esta calculadora hace exactamente esa suma para cualquier triángulo rectángulo. Introduces los dos catetos y la hipotenusa, y devuelve la longitud total del contorno con el trabajo paso a paso y un diagrama en vivo. Se necesitan las tres longitudes de lado porque el contorno tiene tres aristas, y la hipotenusa debe incluirse: es una de esas tres aristas aunque nunca toque el ángulo recto. Los dos catetos forman la esquina cuadrada, y la hipotenusa se extiende frente a ella para cerrar la figura." },
          { "kind": "p", "text": "El perímetro es una medida lineal, no una medida de área. Responde a «¿cuánto borde necesito?» en lugar de «¿cuánta superficie hay dentro?». Esa distinción lo convierte en el número adecuado siempre que estimes cercas, molduras, marcos, alambre, cuerda o bordes de tela alrededor de una forma triangular rectángula." }
        ]
      },
      "sec-geometry": {
        "h2": "¿Qué es un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de empezar cualquier suma, los tres lados deben etiquetarse correctamente. Los símbolos de abajo se mantienen fijos en toda la guía, y la calculadora usa los mismos nombres." },
          { "kind": "h3", "text": "Definición de un triángulo rectángulo" },
          { "kind": "p", "text": "Un triángulo rectángulo es un triángulo que contiene un ángulo interior que mide exactamente 90 grados. Tiene tres vértices, tres lados, dos ángulos agudos y un ángulo recto, que suele marcarse con un pequeño cuadrado. Los dos lados que forman el ángulo recto son los catetos; el lado opuesto al ángulo recto es la hipotenusa. Como los ángulos de cualquier triángulo suman 180 grados, [[A+B+C=180^\\circ]], y con [[C=90^\\circ]] se deduce que [[[\\boxed{A+B=90^\\circ}]]]: los dos ángulos agudos son complementarios, así que conocer uno determina el otro. La suma de ángulos importa al identificar un triángulo rectángulo porque es la prueba que las longitudes de los lados deben pasar: solo una esquina genuina de 90 grados produce la relación entre lados de la que depende el resto de esta guía." },
          { "kind": "h3", "text": "¿Qué son los dos catetos?" },
          { "kind": "p", "text": "El cateto [[a]] y el cateto [[b]] son los dos lados que se encuentran en el vértice del ángulo recto, perpendiculares entre sí. Cualquiera de los dos puede dibujarse horizontal o vertical según la orientación del triángulo; lo que los define es la esquina de 90 grados que forman, no su dirección en la página. Se diferencian de la hipotenusa en posición y en longitud: cada cateto toca el ángulo recto, y cada cateto es más corto que la hipotenusa. En el trabajo de perímetro su papel es sencillo: ambos son bordes del contorno, así que ambos entran en la suma." },
          { "kind": "h3", "text": "¿Qué es la hipotenusa?" },
          { "kind": "p", "text": "La hipotenusa es el lado opuesto al ángulo recto, siempre el lado más largo del triángulo. Nunca forma el ángulo recto; se extiende frente a él, uniendo los extremos lejanos de los dos catetos. Se diferencia de los catetos tanto en posición como en longitud: los catetos se encuentran a 90 grados, mientras que la hipotenusa se encuentra con cada cateto en un ángulo agudo. Completa el contorno triangular, por eso debe incluirse en los cálculos del perímetro. Cuando se conocen ambos catetos, el teorema de Pitágoras la recupera: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Cómo identificar las etiquetas correctas de los lados" },
          { "kind": "p", "text": "[[a]] y [[b]] son los dos lados que se encuentran a 90 grados, y [[c]] es el opuesto al ángulo recto. En un triángulo rectángulo no degenerado [[c]] es el lado más largo. La marca del ángulo recto indica qué lado es [[c]]: es el que no toca ese vértice. Una rápida comprobación de orden ayuda: ordena los tres números, y el mayor debe desempeñar el papel de [[c]]. Si el lado mayor no queda opuesto a la esquina cuadrada, las etiquetas están mal, y todo cálculo construido sobre ellas también estará mal." },
          { "kind": "h3", "text": "¿La fórmula del perímetro solo funciona para triángulos rectángulos?" },
          { "kind": "p", "text": "Hay aquí una distinción matemática importante. La fórmula [[P=a+b+c]] funciona para todo triángulo, rectángulo o no: el contorno de tres lados se suma siempre igual. Lo que la condición del ángulo recto añade es la relación especial [[a^2+b^2=c^2]], que sirve para hallar lados desconocidos y para comprobar si las medidas describen un triángulo rectángulo. La fórmula del perímetro es universal; la relación pitagórica es el extra del triángulo rectángulo." }
        ],
        "imgAlt": "Triángulo rectángulo ABC con catetos a y b, hipotenusa c, ángulo recto en C y contorno del perímetro resaltado",
        "figcaption": "Triángulo ABC: los catetos a y b se encuentran en el ángulo recto C, la hipotenusa c cierra el contorno, y P = a + b + c recorre los tres lados."
      },
      "sec-definition": {
        "h2": "¿Qué es el perímetro de un triángulo rectángulo?",
        "blocks": [
          { "kind": "h3", "text": "Definición de perímetro" },
          { "kind": "p", "text": "El perímetro es la distancia total alrededor del contorno exterior de una figura bidimensional. Para un triángulo es la suma de sus tres longitudes de lado: [[[\\boxed{P=a+b+c}]]]. Los tres lados deben incluirse porque el contorno no está completo hasta contar cada arista. Dejar uno fuera no da un perímetro más corto; da una cantidad distinta y errónea." },
          { "kind": "h3", "text": "¿Por qué la hipotenusa cuenta para el perímetro?" },
          { "kind": "p", "text": "El perímetro mide el contorno exterior completo, y la hipotenusa no es una medida opcional ni interior. Es una de las tres aristas exteriores. Toma [[a=3]], [[b=4]], [[c=5]]. El cálculo incorrecto [[3+4=7]] cuenta solo los dos catetos, los lados de la esquina cuadrada. El cálculo correcto [[3+4+5=12]] recorre el triángulo completo y vuelve al inicio. El valor 7 es la longitud combinada de los dos catetos, no el perímetro completo, porque el camino desde el extremo del cateto [[b]] de vuelta al inicio del cateto [[a]] corre a lo largo de la hipotenusa." },
          { "kind": "h3", "text": "¿Cómo funciona la fórmula del perímetro?" },
          { "kind": "p", "text": "La fórmula se divide en tres partes. Primer lado: [[a]]. Segundo lado: [[b]]. Tercer lado: [[c]]. Combinados: [[P=a+b+c]]. La suma basta porque el perímetro es un total de longitudes, y las longitudes a lo largo de un mismo camino simplemente se suman. No se necesita división, ni cuadrados, ni trigonometría: la fórmula es el uso más sencillo posible de la definición de contorno." },
          { "kind": "h3", "text": "¿Qué representa el perímetro en la vida real?" },
          { "kind": "p", "text": "El perímetro es la longitud total del contorno: el material necesario para rodear un objeto una vez. Eso lo convierte en el número detrás de las medidas de bordes, las dimensiones de marcos, las longitudes de ribetes, las necesidades de cercado, las molduras y zócalos, y las longitudes de cuerda y alambre. Medir el contorno exterior es un trabajo distinto de medir la superficie encerrada dentro del triángulo. Cercar un jardín triangular necesita el perímetro; cubrir el mismo jardín con césped necesita el área. Confundirlos compra el material equivocado." }
        ]
      },
      "sec-howto": {
        "h2": "Cómo hallar el perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "El cálculo sigue una secuencia clara. Cada paso tiene un propósito: identificar, comprobar, sustituir, sumar y verificar. El triángulo 3-4-5 demuestra cada paso." },
          { "kind": "p", "text": "<strong>Paso 1: identifica los tres lados.</strong> Reúne las medidas [[a=3]], [[b=4]], [[c=5]]. Este paso recoge los datos brutos antes de cualquier cálculo." },
          { "kind": "p", "text": "<strong>Paso 2: identifica los dos catetos perpendiculares.</strong> Confirma que 3 y 4 son los catetos, los lados que forman la esquina de 90 grados. Esto asigna a [[a]] y [[b]] sus papeles correctos." },
          { "kind": "p", "text": "<strong>Paso 3: identifica la hipotenusa opuesta al ángulo recto.</strong> Confirma que 5 es la hipotenusa: es el lado más largo y queda opuesto a la esquina cuadrada. Esto evita el error de etiquetado más común." },
          { "kind": "p", "text": "<strong>Paso 4: confirma que las tres medidas usan unidades compatibles.</strong> Las tres están aquí en unidades simples, así que no se necesita conversión. Este paso protege contra sumar metros con pies." },
          { "kind": "p", "text": "<strong>Paso 5: escribe la fórmula.</strong> [[P=a+b+c]]. Escribirla mantiene visible la estructura mientras se sustituye." },
          { "kind": "p", "text": "<strong>Paso 6: sustituye las medidas conocidas.</strong> [[P=3+4+5]]. Cada símbolo se reemplaza por su número." },
          { "kind": "p", "text": "<strong>Paso 7: suma los tres valores.</strong> [[P=12]]. Una suma es toda la aritmética." },
          { "kind": "p", "text": "<strong>Paso 8: adjunta la unidad de medida lineal correcta.</strong> [[[\\boxed{P=12\\text{ units}}]]]. El perímetro es una longitud, así que lleva unidades lineales, nunca unidades cuadradas." },
          { "kind": "p", "text": "<strong>Paso 9: verifica el resultado.</strong> Comprueba [[3^2+4^2=5^2]]: [[9+16=25]]. Los lados satisfacen el teorema de Pitágoras, así que el triángulo es genuinamente rectángulo y el perímetro es fiable." },
          { "kind": "h3", "text": "¿Por qué es importante identificar los lados correctamente?" },
          { "kind": "p", "text": "Un etiquetado incorrecto afecta a todo lo que sigue. La verificación matemática falla cuando la hipotenusa está mal etiquetada, porque la comprobación pitagórica espera que [[c]] sea el lado más largo. Los cálculos de lados desconocidos usan fórmulas distintas para un cateto desconocido que para una hipotenusa desconocida, así que una etiqueta intercambiada aplica la fórmula equivocada. Las entradas de la calculadora están asociadas a [[a]], [[b]] y [[c]], así que valores intercambiados producen una respuesta de aspecto plausible pero errónea. La visualización en vivo del triángulo también se verá distorsionada cuando un valor de cateto ocupe la casilla de la hipotenusa. Acertar con las etiquetas una vez protege cada paso posterior." },
          { "kind": "h3", "text": "¿Puedo calcular el perímetro sin conocer la hipotenusa?" },
          { "kind": "p", "text": "Sí, con un paso extra primero. Si se conocen ambos catetos, la hipotenusa se halla con el teorema de Pitágoras: [[c=\\sqrt{a^2+b^2}]]. Una vez conocida [[c]], el perímetro se obtiene por suma ordinaria. Esto no implica que la calculadora de perímetro existente acepte solo dos lados: la calculadora necesita las tres entradas, así que el lado desconocido debe calcularse a mano (o con la calculadora de lados) antes de introducir los valores." }
        ]
      },
      "sec-examples": {
        "h2": "Ejemplos paso a paso del perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Los cuatro ejemplos de abajo conservan los casos resueltos existentes y amplían sus explicaciones. Cada uno sustituye, suma y luego verifica mediante el teorema de Pitágoras." },
          { "kind": "h3", "text": "Ejemplo 1: triángulo rectángulo 3-4-5" },
          { "kind": "p", "text": "Datos: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Fórmula: [[P=a+b+c]]" },
          { "kind": "p", "text": "Sustituye: [[P=3+4+5]]" },
          { "kind": "p", "text": "Suma: [[P=12]]" },
          { "kind": "p", "text": "Respuesta final: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[3^2+4^2=5^2]], que es [[9+16=25]]. Las medidas satisfacen el teorema de Pitágoras, así que forman un triángulo rectángulo: los dos cuadrados pequeños construidos sobre los catetos llenan exactamente el cuadrado construido sobre la hipotenusa." },
          { "kind": "h3", "text": "Ejemplo 2: triángulo rectángulo 5-12-13" },
          { "kind": "p", "text": "Datos: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Sustituye: [[P=5+12+13]]" },
          { "kind": "p", "text": "Respuesta final: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[5^2+12^2=13^2]], que es [[25+144=169]]. La igualdad confirma un triángulo rectángulo válido." },
          { "kind": "h3", "text": "Ejemplo 3: triángulo rectángulo 8-15-17" },
          { "kind": "p", "text": "Datos: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Sustituye: [[P=8+15+17]]" },
          { "kind": "p", "text": "Respuesta final: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[8^2+15^2=17^2]], que es [[64+225=289]]. De nuevo los cuadrados se equilibran, confirmando el ángulo recto." },
          { "kind": "h3", "text": "Ejemplo 4: longitudes de lado decimales" },
          { "kind": "p", "text": "Datos: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Sustituye: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Respuesta final: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[2.5^2+6^2=6.5^2]], que es [[6.25+36=42.25]]. Los valores decimales no cambian la fórmula: la suma funciona igual para números enteros y decimales, y la aritmética de verificación es idéntica." }
        ],
        "table": {
          "headers": ["Triángulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Verificación"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["La tabla muestra cómo distintas longitudes de lado producen distintas medidas del contorno mientras el mismo ritmo de dos pasos, sumar y luego verificar, permanece inalterado."]
      },
      "sec-missing": {
        "h2": "Cómo calcular el perímetro de un triángulo rectángulo con un lado desconocido",
        "blocks": [
          { "kind": "p", "text": "La calculadora de perímetro existente requiere las tres longitudes de lado. Si un lado es desconocido, calcúlalo primero con el teorema de Pitágoras y luego suma. Los tres casos de abajo cubren todas las posibilidades." },
          { "kind": "h3", "text": "Caso 1: hallar la hipotenusa desconocida" },
          { "kind": "p", "text": "Cuando se conocen ambos catetos: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Ejemplo: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Ahora calcula: [[P=6+8+10]], así que [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 2: hallar un cateto desconocido" },
          { "kind": "p", "text": "Cuando se conocen la hipotenusa [[c]] y el cateto [[a]]: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Ejemplo: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Ahora calcula: [[P=5+12+13]], así que [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 3: hallar el otro cateto desconocido" },
          { "kind": "p", "text": "Cuando se conocen la hipotenusa [[c]] y el cateto [[b]]: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Ejemplo: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Ahora calcula: [[P=8+15+17]], así que [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "¿Por qué debes hallar primero el lado desconocido?" },
          { "kind": "p", "text": "El perímetro representa el contorno completo. Ignorar un lado desconocido produce un resultado incompleto: dos lados conocidos dan un camino parcial, no el perímetro. Estos cálculos de lados desconocidos son métodos matemáticos de apoyo, no modos adicionales en la calculadora de perímetro existente. Cuando solo conoces dos lados, la Calculadora de lados de triángulos rectángulos recupera el tercero, y entonces la calculadora de perímetro termina el trabajo." }
        ],
        "imgAlt": "Triángulo rectángulo con catetos 6 y 8, hipotenusa hallada como 10 por Pitágoras y luego perímetro 24",
        "figcaption": "Los catetos 6 y 8 dan c = 10 por el teorema de Pitágoras, luego P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Aplicaciones reales del perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Siguen doce ejemplos realistas, totalmente resueltos. Cada uno nombra una situación, da tres medidas de lado, muestra la suma y explica qué ayuda a estimar el resultado. Trata cada uno como un modelo geométrico simplificado de triángulo rectángulo: los objetos reales rara vez son triángulos perfectos, así que las tolerancias de material, el desperdicio de corte y la verificación de la construcción quedan fuera del propio número del perímetro." },
          { "kind": "h3", "text": "Ejemplo 1: marco de ventana de vidrio triangular" },
          { "kind": "p", "text": "Un marco de ventana triangular tiene [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Entonces [[P=3+4+5]], así que [[[\\boxed{P=12\\text{ m}}]]]. Los 12 metros representan la longitud total alrededor del contorno triangular de la ventana, la longitud de perfil de marco a cortar. Las juntas del marco y las tolerancias de corte pueden requerir material adicional más allá de los 12 metros." },
          { "kind": "h3", "text": "Ejemplo 2: moldura del borde del tejado" },
          { "kind": "p", "text": "Una sección de tejado triangular rectángula tiene [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Entonces [[P=6+8+10]], así que [[[\\boxed{P=24\\text{ ft}}]]]. El perímetro estima la moldura alrededor del contorno triangular del extremo del tejado. Las esquinas y el solape en los aleros se suman a la longitud de compra." },
          { "kind": "h3", "text": "Ejemplo 3: cerca de jardín triangular" },
          { "kind": "p", "text": "Una sección de jardín triangular tiene [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Entonces [[P=5+12+13]], así que [[[\\boxed{P=30\\text{ m}}]]]. La longitud total del contorno estima la cerca necesaria alrededor del jardín. Puertas, postes, solapes y tolerancias de instalación se cuentan por separado de los 30 metros de línea de cerca." },
          { "kind": "h3", "text": "Ejemplo 4: escuadra de acero de soporte" },
          { "kind": "p", "text": "Una escuadra metálica triangular rectángula tiene [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Entonces [[P=8+15+17]], así que [[[\\boxed{P=40\\text{ cm}}]]]. El perímetro describe el borde exterior de la escuadra y ayuda a estimar el material protector de borde. No determina la resistencia estructural, que depende del grosor, la aleación y las trayectorias de carga más que de la longitud del borde." },
          { "kind": "h3", "text": "Ejemplo 5: pancarta de tela triangular" },
          { "kind": "p", "text": "Una pancarta de tela tiene [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Entonces [[P=9+12+15]], así que [[[\\boxed{P=36\\text{ ft}}]]]. El perímetro estima la longitud total de borde que requiere dobladillo o ribete. La tela adicional para costuras y pliegues queda excluida de los 36 pies." },
          { "kind": "h3", "text": "Ejemplo 6: marco de señal triangular" },
          { "kind": "p", "text": "Un panel de señal triangular rectángulo tiene [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Entonces [[P=12+16+20]], así que [[[\\boxed{P=48\\text{ in}}]]]. El perímetro estima el marco o el borde decorativo alrededor del panel." },
          { "kind": "h3", "text": "Ejemplo 7: borde de jardinería" },
          { "kind": "p", "text": "Una sección de jardinería triangular rectángula tiene [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Entonces [[P=7+24+25]], así que [[[\\boxed{P=56\\text{ m}}]]]. Este resultado estima la longitud completa de borde de jardinería para la sección, antes del desperdicio y el solape de juntas." },
          { "kind": "h3", "text": "Ejemplo 8: marco de soporte de panel solar" },
          { "kind": "p", "text": "Un pequeño marco de soporte triangular rectángulo tiene [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Entonces [[P=9+40+41]], así que [[[\\boxed{P=90\\text{ cm}}]]]. El perímetro describe el contorno triangular completo del marco." },
          { "kind": "h3", "text": "Ejemplo 9: borde de toldo triangular" },
          { "kind": "p", "text": "Una sección de toldo triangular rectángula tiene [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Entonces [[P=15+20+25]], así que [[[\\boxed{P=60\\text{ ft}}]]]. El perímetro estima el material de borde necesario alrededor de la tela, excluidos los herrajes de fijación." },
          { "kind": "h3", "text": "Ejemplo 10: moldura del extremo del tejado del almacén" },
          { "kind": "p", "text": "Una sección simplificada del extremo del tejado de un almacén tiene [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Entonces [[P=11+60+61]], así que [[[\\boxed{P=132\\text{ ft}}]]]. El perímetro total representa las tres aristas exteriores de la sección triangular modelada." },
          { "kind": "h3", "text": "Ejemplo 11: panel industrial de fabricación" },
          { "kind": "p", "text": "Un panel de fabricación triangular rectángulo tiene [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Entonces [[P=13+84+85]], así que [[[\\boxed{P=182\\text{ cm}}]]]. El resultado ayuda a estimar perfiles protectores de borde o material de ribete para el panel." },
          { "kind": "h3", "text": "Ejemplo 12: cartela de soporte de madera contrachapada" },
          { "kind": "p", "text": "Una placa de soporte triangular rectángula de madera contrachapada tiene [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Entonces [[P=28+45+53]], así que [[[\\boxed{P=126\\text{ cm}}]]]. El perímetro representa el borde exterior completo de la placa de contrachapado." }
        ],
        "table": {
          "headers": ["Aplicación práctica", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Unidad de medida"],
          "rows": [
            ["Marco de ventana de vidrio triangular", "3", "4", "5", "12", "m"],
            ["Moldura del borde del tejado", "6", "8", "10", "24", "ft"],
            ["Cerca de jardín triangular", "5", "12", "13", "30", "m"],
            ["Escuadra de acero de soporte", "8", "15", "17", "40", "cm"],
            ["Pancarta de tela triangular", "9", "12", "15", "36", "ft"],
            ["Marco de señal triangular", "12", "16", "20", "48", "in"],
            ["Borde de jardinería", "7", "24", "25", "56", "m"],
            ["Marco de soporte de panel solar", "9", "40", "41", "90", "cm"],
            ["Borde de toldo triangular", "15", "20", "25", "60", "ft"],
            ["Moldura del extremo del tejado del almacén", "11", "60", "61", "132", "ft"],
            ["Panel industrial de fabricación", "13", "84", "85", "182", "cm"],
            ["Cartela de soporte de contrachapado", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Recuerda los límites prácticos: pueden necesitarse tolerancias de material, el desperdicio de corte no está incluido, las juntas del marco pueden añadir requisitos de material, las puertas y aberturas afectan las cantidades de cercado, las medidas reales de construcción deben verificarse, y el perímetro por sí solo no determina la resistencia estructural ni la capacidad de carga."],
        "imgAlt": "Cuatro ejemplos reales de perímetro: ventana, tejado, jardín y escuadra de acero",
        "figcaption": "Ventana, tejado, jardín y escuadra: cada panel traza el contorno triangular y su perímetro."
      },
      "sec-properties": {
        "h2": "Propiedades especiales del perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Más allá de la simple suma, el perímetro de un triángulo rectángulo obedece varias desigualdades estrictas. Sirven también como rápidas comprobaciones de cordura de cualquier resultado calculado." },
          { "kind": "h3", "text": "El perímetro es mayor que el doble de la hipotenusa" },
          { "kind": "p", "text": "Para todo triángulo válido, la desigualdad triangular da [[a+b>c]]. Suma [[c]] a ambos lados: [[a+b+c>2c]]. Por tanto [[[\\boxed{P>2c}]]]. En lenguaje llano: los dos catetos juntos siempre son más largos que la hipotenusa, así que sumar la hipotenusa a ambos lados mantiene la desigualdad apuntando en la misma dirección. Para el triángulo 3-4-5, [[P=12]] y [[2c=10]], y 12 es en efecto mayor que 10." },
          { "kind": "h3", "text": "El perímetro es menor que el triple de la hipotenusa" },
          { "kind": "p", "text": "Como la hipotenusa es más larga que cualquiera de los catetos, [[a<c]] y [[b<c]]. Por tanto [[a+b<2c]]. Sumar [[c]] da [[[\\boxed{P<3c}]]]. Esta es una comprobación rápida útil: cualquier perímetro declarado igual o mayor que tres veces la hipotenusa no puede pertenecer a un triángulo rectángulo válido. Para el triángulo 3-4-5, [[3c=15]], y 12 está cómodamente por debajo." },
          { "kind": "h3", "text": "Perímetro de un triángulo 45-45-90" },
          { "kind": "p", "text": "En un triángulo 45-45-90 ambos catetos tienen la misma longitud. Sea cada cateto igual a [[k]]. La hipotenusa es [[c=k\\sqrt{2}]]. Por tanto [[P=k+k+k\\sqrt{2}]], o [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Con [[k=5]], el perímetro es [[5(2+\\sqrt{2})\\approx17.07]]: dos catetos de 5 más una hipotenusa de unos 7,07." },
          { "kind": "h3", "text": "Perímetro de un triángulo 30-60-90" },
          { "kind": "p", "text": "Si el cateto más corto es [[k]], entonces el cateto más largo es [[k\\sqrt{3}]] y la hipotenusa es [[2k]]. Por tanto [[P=k+k\\sqrt{3}+2k]], o [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Con [[k=4]], los lados son 4, unos 6,93 y 8, lo que da un perímetro de unos 18,93." },
          { "kind": "h3", "text": "¿Qué triángulo rectángulo tiene el mayor perímetro para una hipotenusa fija?" },
          { "kind": "p", "text": "Intuitivamente, cuando la hipotenusa se mantiene fija, el perímetro crece a medida que los dos catetos crecen juntos, y es mayor cuando ningún cateto queda rezagado: cuando ambos catetos son iguales. Ese es el triángulo 45-45-90. El enunciado preciso usa la desigualdad [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Como [[a^2+b^2=c^2]], se deduce que [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], con igualdad exactamente cuando [[a=b]]. Así que entre todos los triángulos rectángulos que comparten una hipotenusa, el triángulo rectángulo isósceles gana el concurso del perímetro." }
        ]
      },
      "sec-vs-area": {
        "h2": "¿Cuál es la diferencia entre perímetro y área?",
        "blocks": [
          { "kind": "p", "text": "El perímetro y el área describen ambos un triángulo, pero responden a preguntas distintas. Esta sección traza la línea con cuidado." },
          { "kind": "h3", "text": "El perímetro mide el contorno exterior" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mide la distancia total alrededor del triángulo. Sus unidades son lineales: metros, centímetros, milímetros, pies, pulgadas. Indica cuánto material traza el borde." },
          { "kind": "h3", "text": "El área mide la superficie encerrada" },
          { "kind": "p", "text": "Para un triángulo rectángulo, [[[\\boxed{K=\\frac{ab}{2}}]]]. Los dos catetos perpendiculares sirven de base y altura, así que la hipotenusa no aparece en la fórmula. El área usa unidades cuadradas: metros cuadrados, centímetros cuadrados, pies cuadrados, pulgadas cuadradas. Indica cuánta superficie hay dentro del contorno." },
          { "kind": "h3", "text": "Comparación resuelta con un triángulo 3-4-5" },
          { "kind": "p", "text": "Perímetro: [[P=3+4+5]], así que [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Área: [[K=\\frac{3\\times4}{2}]], así que [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Los números 12 y 6 describen propiedades completamente distintas del mismo triángulo: uno es el paseo a su alrededor, el otro es el terreno que cubre." },
          { "kind": "h3", "text": "¿Pueden dos triángulos rectángulos tener el mismo perímetro pero distintas áreas?" },
          { "kind": "p", "text": "Sí. El perímetro por sí solo no determina el área de forma única; la forma y las proporciones del triángulo afectan su área encerrada. Un triángulo 3-4-5 tiene perímetro 12 y área 6. Un triángulo 45-45-90 también puede tener perímetro 12: de [[P=k(2+\\sqrt{2})=12]], el cateto es [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], y su área es [[K=\\frac{k^2}{2}\\approx6.18]] unidades cuadradas, ligeramente mayor que 6. Misma longitud de contorno, distinto interior: la forma isósceles encierra un poco más." }
        ],
        "imgAlt": "Triángulo 3-4-5 con contorno resaltado, P igual a 12, e interior sombreado con área K igual a 6",
        "figcaption": "El borde resaltado es el perímetro; el interior sombreado es el área. Dos medidas distintas."
      },
      "sec-semiperimeter": {
        "h2": "¿Cuál es la relación entre perímetro y semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro es la mitad del perímetro completo: [[[\\boxed{s=\\frac{P}{2}}]]]. Para un triángulo rectángulo es [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. En esta página sigue siendo una medida de apoyo, no un segundo tema principal." },
          { "kind": "h3", "text": "Ejemplo numérico" },
          { "kind": "p", "text": "Usa [[a=3,\\;b=4,\\;c=5]]. El perímetro es [[P=12]], así que el semiperímetro es [[s=\\frac{12}{2}=6]]. Ambos son medidas lineales en las mismas unidades; uno es simplemente la mitad del otro." },
          { "kind": "h3", "text": "¿Para qué sirve el semiperímetro?" },
          { "kind": "p", "text": "El semiperímetro es una medida intermedia importante en la geometría de triángulos. Aparece en la fórmula de Herón para el área, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], y en la relación del inradio [[K=rs]], y simplifica varias demostraciones de geometría avanzada. Siempre que una fórmula pida [[s]], calcula primero el perímetro y divídelo a la mitad. Para una herramienta dedicada, usa la Calculadora de semiperímetro de triángulos rectángulos." }
        ]
      },
      "sec-units": {
        "h2": "Las unidades de medida en los cálculos del perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "El perímetro funciona en cualquier unidad de longitud: metros, centímetros, milímetros, kilómetros, pies, pulgadas, yardas o millas. El número cambia con la unidad, pero el triángulo no." },
          { "kind": "h3", "text": "¿Por qué las tres medidas de lado deben usar unidades compatibles?" },
          { "kind": "p", "text": "El perímetro se calcula mediante suma, y la suma solo tiene sentido entre cantidades semejantes. Sumar 3 pies a 48 pulgadas sin conversión mezcla dos escalas y produce un total sin sentido. Convierte cada lado a una unidad común primero, y luego suma." },
          { "kind": "h3", "text": "Ejemplo resuelto de conversión de unidades" },
          { "kind": "p", "text": "Dados [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convierte pulgadas a pies: [[48\\text{ inches}=4\\text{ ft}]]. Ahora los tres lados están en pies, así que [[P=3+4+5]] y [[[\\boxed{P=12\\text{ ft}}]]]. La conversión debe ocurrir antes de la suma, no después." },
          { "kind": "h3", "text": "Cómo ayudan los selectores de unidad de la calculadora" },
          { "kind": "p", "text": "Cada una de las tres entradas de esta página lleva su propio selector de unidad. Cuando eliges distintas unidades para distintos lados, la calculadora convierte cada entrada a la unidad común automáticamente antes de sumar: lee la unidad elegida para el primer lado y escala los otros dos para igualarla, usando razones de longitud exactas (1 pulgada = 0,0254 m, 1 pie = 0,3048 m, etc.). El resultado se informa en esa unidad común. Puedes seguir convirtiendo a mano como se mostró arriba, pero los selectores eliminan la aritmética." },
          { "kind": "h3", "text": "Trabajar con medidas decimales" },
          { "kind": "p", "text": "Usa [[a=2.5,\\;b=6,\\;c=6.5]]. Entonces [[P=2.5+6+6.5]], así que [[[\\boxed{P=15\\text{ units}}]]]. Los valores decimales se suman exactamente igual que los números enteros; los puntos decimales simplemente se alinean en la suma." },
          { "kind": "h3", "text": "Trabajar con longitudes de lado irracionales" },
          { "kind": "p", "text": "Toma un triángulo con [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Entonces [[P=1+1+\\sqrt{2}]], así que [[[\\boxed{P=2+\\sqrt{2}}]]], aproximadamente [[P\\approx3.4142]]. Mantener la forma radical exacta es útil en problemas matemáticos porque conserva la precisión completa; la aproximación decimal es para el informe final." },
          { "kind": "h3", "text": "¿Por qué debes evitar redondear demasiado pronto?" },
          { "kind": "p", "text": "El redondeo prematuro introduce pequeños errores que la suma final conserva. Si un lado es irracional, como [[\\sqrt{2}]], redondearlo a 1,41 antes de sumar recorta parte de la longitud verdadera, y con varios lados así el error se acumula. Mantén la precisión completa durante los cálculos intermedios y redondea solo el resultado final a la exactitud que el problema requiera." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errores comunes al calcular el perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Dieciséis errores explican casi todos los perímetros erróneos. Cada uno se explica con su causa y el enfoque correcto." },
          { "kind": "p", "text": "<strong>1. Olvidar incluir la hipotenusa.</strong> El error más común: sumar los dos catetos y detenerse. Con 3-4-5 esto da 7 en lugar de 12. Suma siempre los tres lados." },
          { "kind": "p", "text": "<strong>2. Usar solo los dos catetos.</strong> Misma causa raíz que arriba, a menudo por leer mal el problema. El contorno tiene tres aristas; cuenta tres." },
          { "kind": "p", "text": "<strong>3. Confundir perímetro con área.</strong> El perímetro es [[a+b+c]] en unidades lineales; el área es [[ab/2]] en unidades cuadradas. Lee la pregunta: «alrededor» significa perímetro, «dentro» significa área." },
          { "kind": "p", "text": "<strong>4. Introducir la hipotenusa como cateto.</strong> Poner el valor más largo en un campo de cateto rompe la geometría. La casilla de la hipotenusa debe contener el lado más largo." },
          { "kind": "p", "text": "<strong>5. Elegir el lado equivocado como hipotenusa.</strong> Si 4 se introduce como [[c]] mientras 5 queda en un campo de cateto, cada comprobación falla. Ordena primero los valores: el mayor es [[c]]." },
          { "kind": "p", "text": "<strong>6. Usar medidas que no forman un triángulo rectángulo.</strong> Comprueba [[a^2+b^2=c^2]] antes de confiar en la etiqueta «triángulo rectángulo». Si falla, la fórmula del perímetro sigue sumando, pero el triángulo no es rectángulo." },
          { "kind": "p", "text": "<strong>7. Mezclar centímetros y metros.</strong> Sumar 3 m a 40 cm no da 43 de nada. Convierte a una unidad primero." },
          { "kind": "p", "text": "<strong>8. Mezclar pies y pulgadas.</strong> La trampa imperial clásica. Convierte pulgadas a pies (divide entre 12) antes de sumar, o deja que los selectores de unidad lo hagan." },
          { "kind": "p", "text": "<strong>9. Informar el perímetro en unidades cuadradas.</strong> Un perímetro de 12 cm cuadrados es un error de categoría: el paseo alrededor de un triángulo es una longitud, medida en cm, m, ft o in." },
          { "kind": "p", "text": "<strong>10. Redondear las medidas demasiado pronto.</strong> Redondear [[\\sqrt{2}]] a 1,4 antes de sumar acumula error. Redondea solo la respuesta final." },
          { "kind": "p", "text": "<strong>11. Olvidar calcular un lado desconocido.</strong> Dos lados conocidos no son un perímetro. Recupera el tercero con el teorema de Pitágoras primero, y luego suma." },
          { "kind": "p", "text": "<strong>12. Usar mal el teorema de Pitágoras.</strong> La forma de la hipotenusa suma cuadrados ([[c=\\sqrt{a^2+b^2}]]); la forma del cateto resta ([[b=\\sqrt{c^2-a^2}]]). Intercambiarlas inventa un lado que no existe." },
          { "kind": "p", "text": "<strong>13. Introducir longitudes de lado negativas o cero.</strong> Las longitudes son positivas. Una entrada cero o negativa no describe ningún triángulo, y la calculadora la rechaza con razón." },
          { "kind": "p", "text": "<strong>14. Ignorar la desigualdad triangular.</strong> Si [[a+b\\leq c]], las tres longitudes no pueden formar ningún triángulo. Compruébalo antes de calcular." },
          { "kind": "p", "text": "<strong>15. Suponer que el semiperímetro es el perímetro completo.</strong> Dividir la suma entre 2 da [[s]], no [[P]]. Para 3-4-5, [[(3+4+5)/2=6]] es el semiperímetro; el perímetro es 12." },
          { "kind": "p", "text": "<strong>16. Suponer que el perímetro por sí solo determina el área del triángulo.</strong> Como mostró la comparación 3-4-5 frente a 45-45-90, perímetros iguales pueden esconder áreas distintas. El perímetro fija el contorno, no el interior." },
          { "kind": "p", "text": "<strong>Erróneo frente a correcto, lado a lado.</strong> Dados [[a=3,\\;b=4,\\;c=5]]: lo incorrecto es [[P=3+4=7]], que omite la hipotenusa y mide solo los dos catetos. Lo correcto es [[P=3+4+5=12]]. Y [[(3+4+5)/2=6]] es el semiperímetro, una cantidad distinta con sus propios usos, no el perímetro completo." }
        ]
      },
      "sec-verify": {
        "h2": "Cómo comprobar si el perímetro de un triángulo rectángulo es correcto",
        "blocks": [
          { "kind": "p", "text": "Siete comprobaciones independientes detectan casi todos los errores. El triángulo 3-4-5 demuestra cada una. Las comprobaciones independientes importan porque fallan de formas distintas: cuando dos métodos no relacionados coinciden, la respuesta se ha ganado la confianza, ya vaya a una tarea, a un dibujo técnico o a un plan de materiales." },
          { "kind": "p", "text": "<strong>Método 1: suma de nuevo los tres lados.</strong> Recalcula [[P=a+b+c]] desde cero: [[3+4+5=12]]. Una segunda pasada detecta errores de tecleado y de aritmética." },
          { "kind": "p", "text": "<strong>Método 2: verifica la relación pitagórica.</strong> Comprueba [[a^2+b^2=c^2]]: [[9+16=25]]. Esto confirma que los lados forman un triángulo rectángulo, lo que valida las etiquetas de lado de las que depende el perímetro." },
          { "kind": "p", "text": "<strong>Método 3: comprueba la hipotenusa.</strong> Confirma [[c>a]] y [[c>b]]: 5 es mayor que 3 y mayor que 4. Si la supuesta hipotenusa no es el lado más largo, las etiquetas están mal." },
          { "kind": "p", "text": "<strong>Método 4: comprueba la desigualdad triangular.</strong> Confirma [[a+b>c]]: [[3+4=7>5]]. La suma de dos lados cualesquiera debe superar al tercero, o no existe ningún triángulo." },
          { "kind": "p", "text": "<strong>Método 5: comprueba los límites del perímetro.</strong> Confirma [[2c<P<3c]]: [[10<12<15]]. Estos límites son comprobaciones mentales rápidas para cualquier triángulo rectángulo válido." },
          { "kind": "p", "text": "<strong>Método 6: comprueba las unidades de medida.</strong> Confirma que las tres entradas comparten una unidad. Las unidades mezcladas invalidan la suma aunque la aritmética sea perfecta." },
          { "kind": "p", "text": "<strong>Método 7: compara el resultado con la visualización en vivo.</strong> El diagrama existente de esta página redibuja el triángulo a partir de tus entradas. Si un lado se etiquetó mal o un valor se tecleó mal, la imagen se ve mal: una hipotenusa más corta que un cateto, o una forma que no se cierra. Confía en la imagen cuando no esté de acuerdo con el número, y luego busca el error de entrada." }
        ]
      },
      "sec-related": {
        "h2": "Explora calculadoras relacionadas de triángulos rectángulos",
        "blocks": [
          { "kind": "p", "text": "Cada una de estas herramientas extiende el cálculo del perímetro en una dirección: lados desconocidos, semiperímetros, superficies, medidas combinadas o el teorema detrás de todo." }
        ]
      },
      "sec-faq": {
        "h2": "Preguntas frecuentes",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Tres lados, un contorno, sin atajos",
        "blocks": [
          { "kind": "p", "text": "El perímetro de un triángulo rectángulo es la idea más sencilla de esta página y la más fácil de equivocarse por omisión. La fórmula pide tres números porque el contorno tiene tres aristas, y la hipotenusa se gana su lugar en la suma como la arista que cierra la figura. Todo lo demás, el método paso a paso, la recuperación de lados desconocidos, las desigualdades, las comprobaciones de verificación, existe para proteger esa única suma de los pequeños errores de etiquetado y de unidades que producen respuestas erróneas de aspecto plausible." },
          { "kind": "p", "text": "Usa la calculadora de esta página siempre que los tres lados estén medidos, recupera un lado desconocido mediante el teorema de Pitágoras cuando no lo estén, y comprueba el resultado contra los límites 2c < P < 3c antes de que el número entre en un pedido de material. Cuando la pregunta gire hacia la superficie dentro del contorno, la calculadora de área está esperando; cuando gire hacia la mitad del contorno para una fórmula más profunda, la calculadora de semiperímetro toma el relevo." }
        ]
      }
    },
    "relatedHeading": "Explora calculadoras relacionadas de triángulos rectángulos",
    "relatedIntro": "Cada una de estas herramientas extiende el cálculo del perímetro en una dirección: lados desconocidos, semiperímetros, superficies, medidas combinadas o el teorema detrás de todo.",
    "relatedItems": [
      "Calculadora de medidas de triángulos rectángulos",
      "Calculadora de semiperímetro de triángulos rectángulos",
      "Calculadora de lados de triángulos rectángulos",
      "Calculadora de área de triángulos rectángulos",
      "Calculadora del teorema de Pitágoras"
    ],
    "faqHeading": "Preguntas frecuentes",
    "faqs": [
      {
        "question": "¿Cuál es la fórmula del perímetro de un triángulo rectángulo?",
        "answer": "La fórmula es P = a + b + c, donde a y b son los dos catetos que forman el ángulo de 90 grados y c es la hipotenusa, el lado más largo. Suma las tres longitudes de lado; el resultado es la longitud total del contorno en unidades lineales."
      },
      {
        "question": "¿Cómo calculo el perímetro de un triángulo rectángulo?",
        "answer": "Identifica los dos catetos y la hipotenusa, confirma que los tres usan la misma unidad, sustituye en P = a + b + c y suma. Para un triángulo 3-4-5: P = 3 + 4 + 5 = 12 unidades. La calculadora de esta página realiza los mismos pasos y muestra su trabajo."
      },
      {
        "question": "¿Por qué debo incluir la hipotenusa?",
        "answer": "La hipotenusa es una de las tres aristas exteriores del triángulo, así que el contorno queda incompleto sin ella. Sumar solo los dos catetos de un triángulo 3-4-5 da 7, que es la longitud combinada de los catetos, no el perímetro. El recorrido completo alrededor del triángulo es 3 + 4 + 5 = 12."
      },
      {
        "question": "¿Puedo calcular el perímetro si falta un lado?",
        "answer": "Sí, pero recupera primero el lado desconocido con el teorema de Pitágoras. Con catetos 6 y 8, la hipotenusa es √(36 + 64) = 10, así que el perímetro es 6 + 8 + 10 = 24. Con hipotenusa 13 y cateto 5, el cateto desconocido es √(169 - 25) = 12, así que el perímetro es 30."
      },
      {
        "question": "¿Cómo hallo la hipotenusa antes de calcular el perímetro?",
        "answer": "Usa c = √(a² + b²) cuando se conocen ambos catetos. Para catetos 6 y 8: c = √(36 + 64) = √100 = 10. Una vez conocida la hipotenusa, suma los tres lados para obtener el perímetro."
      },
      {
        "question": "¿La fórmula del perímetro es distinta para un triángulo rectángulo?",
        "answer": "No. P = a + b + c funciona para todo triángulo. Lo especial del triángulo rectángulo es la relación pitagórica a² + b² = c², que permite hallar un lado desconocido o verificar que las medidas forman genuinamente un triángulo rectángulo."
      },
      {
        "question": "¿Cuál es el perímetro de un triángulo rectángulo 3-4-5?",
        "answer": "El perímetro es 3 + 4 + 5 = 12 unidades. Los lados satisfacen 9 + 16 = 25, lo que confirma el ángulo recto. Las versiones escaladas como 6-8-10 o 9-12-15 conservan la misma forma con perímetros proporcionalmente mayores."
      },
      {
        "question": "¿Cómo verifico que tres lados forman un triángulo rectángulo?",
        "answer": "Comprueba que a² + b² = c² tomando c como el lado más largo. Para 3, 4, 5: 9 + 16 = 25, así que el triángulo es rectángulo. Si la igualdad falla, la fórmula del perímetro sigue sumando, pero el triángulo no es un triángulo rectángulo."
      },
      {
        "question": "¿Cuál es la diferencia entre perímetro y área?",
        "answer": "El perímetro (P = a + b + c) mide la distancia total alrededor del triángulo en unidades lineales como metros o pies. El área (K = ab/2) mide la superficie dentro del triángulo en unidades cuadradas como metros cuadrados. Para un triángulo 3-4-5 el perímetro es 12 unidades y el área es 6 unidades cuadradas."
      },
      {
        "question": "¿La calculadora de perímetro admite valores decimales?",
        "answer": "Sí. Las longitudes de lado decimales funcionan exactamente igual que los números enteros: para a = 2,5, b = 6, c = 6,5, el perímetro es 2,5 + 6 + 6,5 = 15 unidades. Mantén la precisión completa durante el cálculo y redondea solo la respuesta final."
      },
      {
        "question": "¿Qué unidades debo usar para el perímetro?",
        "answer": "Cualquier unidad de longitud sirve: metros, centímetros, milímetros, pies, pulgadas, yardas o millas. Los tres lados deben compartir la misma unidad antes de sumar. La calculadora convierte cada entrada a una unidad común automáticamente mediante sus selectores de unidad por entrada."
      },
      {
        "question": "¿Cuál es la relación entre perímetro y semiperímetro?",
        "answer": "El semiperímetro es exactamente la mitad del perímetro: s = P/2. Para un triángulo 3-4-5, P = 12 y s = 6. El semiperímetro aparece en fórmulas avanzadas como la fórmula de Herón para el área y la relación del inradio K = rs."
      }
    ]
  }
};
