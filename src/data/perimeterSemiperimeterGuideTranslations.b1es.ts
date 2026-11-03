// perimeterSemiperimeterGuideTranslations.b1es.ts: Right Triangle Perimeter and Semiperimeter Guide (Page 24 of 45) translation for Spanish (es).
export const B1_ES = {
  "es": {
    "tocHeading": "En esta guía",
    "tocItems": {
      "sec-intro": "Cómo calcular el perímetro y el semiperímetro de un triángulo rectángulo",
      "sec-right-triangle": "¿Qué es un triángulo rectángulo?",
      "sec-perimeter": "¿Qué es el perímetro de un triángulo rectángulo?",
      "sec-semiperimeter": "¿Qué es el semiperímetro de un triángulo rectángulo?",
      "sec-difference": "Perímetro y semiperímetro: ¿cuál es la diferencia?",
      "sec-modes": "Cómo entender los dos modos de la calculadora",
      "sec-howto": "Cómo usar la calculadora de perímetro y semiperímetro de un triángulo rectángulo",
      "sec-examples": "Ejemplos paso a paso de perímetro y semiperímetro de un triángulo rectángulo",
      "sec-practical": "Aplicaciones reales del perímetro y el semiperímetro de un triángulo rectángulo",
      "sec-missing-side": "Cómo calcular el perímetro cuando falta un lado",
      "sec-pythagoras": "¿Qué relación hay entre el teorema de Pitágoras y el perímetro de un triángulo rectángulo?",
      "sec-advanced": "¿Cómo se usa el semiperímetro en otras fórmulas de triángulos?",
      "sec-perimeter-area": "¿Cuál es la diferencia entre perímetro y área?",
      "sec-units": "Cómo entender las unidades de medida en los cálculos de perímetro y semiperímetro",
      "sec-scaling": "¿Cómo afectan los cambios en las longitudes de los lados al perímetro y al semiperímetro?",
      "sec-applications": "Aplicaciones prácticas del perímetro de un triángulo rectángulo",
      "sec-mistakes": "Errores comunes al calcular el perímetro y el semiperímetro de un triángulo rectángulo",
      "sec-verify": "Cómo comprobar que el perímetro de tu triángulo rectángulo es correcto",
      "sec-related": "Explora calculadoras relacionadas de triángulos rectángulos",
      "sec-faq": "Preguntas frecuentes",
      "sec-conclusion": "Un contorno, dos medidas útiles"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cómo calcular el perímetro y el semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Toma [[a=3]], [[b=4]], [[c=5]]. El perímetro es [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. El semiperímetro es [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Esto es exactamente lo que la calculadora de perímetro y semiperímetro de triángulos rectángulos devuelve para esas tres entradas." },
          { "kind": "p", "text": "El perímetro describe el contorno completo del triángulo: la longitud total que recorrerías si caminaras por los tres lados y volvieras al punto de partida. El semiperímetro es la mitad de ese total numérico. Ambas son longitudes, medidas en unidades como metros, centímetros, pies o pulgadas. Ninguna de las dos es un área, y ninguna se expresa en unidades cuadradas." },
          { "kind": "p", "text": "Se necesitan tres medidas de lados porque el contorno tiene tres aristas, y la hipotenusa debe incluirse: es una de las tres aristas aunque nunca toque el ángulo recto. El semiperímetro es la mitad del perímetro porque varias fórmulas avanzadas, como la fórmula de Herón y la relación del inradio, se construyen sobre la mitad del contorno en lugar del total. Estos dos cálculos son útiles siempre que haya que medir un contorno triangular: bordear un jardín, enmarcar un cuadro o introducir una longitud en la siguiente fórmula de un problema más largo." }
        ]
      },
      "sec-right-triangle": {
        "h2": "¿Qué es un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de que empiece cualquier suma, los tres lados deben etiquetarse sin error. Los símbolos siguientes permanecen fijos a lo largo de toda la guía, y la calculadora usa los mismos nombres." },
          { "kind": "h3", "text": "Definición de triángulo rectángulo" },
          { "kind": "p", "text": "Un triángulo rectángulo es un polígono de tres lados que contiene exactamente un ángulo interior de 90 grados. Tiene tres vértices, tres lados, dos ángulos agudos y un ángulo recto, normalmente marcado con un pequeño cuadrado. Los dos lados que forman el ángulo recto son los catetos; el lado opuesto es la hipotenusa. Como los ángulos de cualquier triángulo suman 180 grados, [[A+B+C=180^\\circ]], y con [[C=90^\\circ]] se deduce que [[[\\boxed{A+B=90^\\circ}]]]: los dos ángulos agudos son complementarios, así que conocer uno determina el otro." },
          { "kind": "h3", "text": "¿Qué son los dos catetos?" },
          { "kind": "p", "text": "El cateto [[a]] se encuentra frente al ángulo [[A]]; el cateto [[b]] se encuentra frente al ángulo [[B]]. Los dos catetos se encuentran en el vértice del ángulo recto y son perpendiculares entre sí: cada uno forma 90 grados con el otro. Forman la esquina cuadrada del triángulo, el tipo de arista que medirías a lo largo de la esquina de una pared o del borde de una mesa. En el trabajo con perímetros, su papel es sencillo: ambas son aristas del contorno, así que ambas entran en la suma." },
          { "kind": "h3", "text": "¿Qué es la hipotenusa?" },
          { "kind": "p", "text": "La hipotenusa es el lado opuesto al ángulo recto, siempre el lado más largo del triángulo. Nunca forma el ángulo recto; se extiende frente a él, uniendo los extremos alejados de los dos catetos. Se diferencia de los catetos en posición y en longitud: los catetos se encuentran a 90 grados, mientras que la hipotenusa se encuentra con cada cateto en un ángulo agudo. Debe incluirse al calcular el perímetro completo, porque el contorno no está completo hasta contar las tres aristas. Si se conocen ambos catetos, el teorema de Pitágoras la recupera mediante [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "¿Por qué es importante el ángulo recto?" },
          { "kind": "p", "text": "El ángulo recto es lo que hace que el triángulo sea un triángulo rectángulo, y todo lo demás se deriva de él. Identifica la forma en un dibujo o en la obra: encuentra la esquina cuadrada y el etiquetado de los lados encaja. Es la condición que el teorema de Pitágoras necesita antes de poder aplicarse. En las mediciones de construcción y los dibujos de ingeniería, el ángulo recto es la referencia contra la que todo se escuadra: paredes, marcos y soportes se verifican con él. Para la verificación, el ángulo recto es la promesa que las tres longitudes de lado deben cumplir mediante [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "¿Cómo puedes identificar las etiquetas correctas de los lados?" },
          { "kind": "p", "text": "[[a]] y [[b]] son los catetos, [[c]] es la hipotenusa, y en un triángulo rectángulo no degenerado [[c]] es el lado más largo. El ángulo recto se encuentra frente a [[c]], así que el vértice que lleva la marca cuadrada te dice qué lado es [[c]]: es el que no toca ese vértice. Una rápida comprobación de orden ayuda: ordena los tres números, y el mayor debe desempeñar el papel de [[c]]. Si el lado mayor no está frente a la esquina cuadrada, las etiquetas están mal, y todo cálculo construido sobre ellas también estará mal." }
        ],
        "imgAlt": "Triángulo rectángulo ABC con catetos a y b, hipotenusa c, marca de ángulo recto y fórmulas P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Triángulo ABC con catetos a y b, hipotenusa c y las dos fórmulas del contorno."
      },
      "sec-perimeter": {
        "h2": "¿Qué es el perímetro de un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "El perímetro es la distancia total alrededor del contorno exterior de una forma bidimensional. Para un triángulo es la suma de las longitudes de sus tres lados, [[[\\boxed{P=a+b+c}]]], y todos los lados deben incluirse porque todos forman parte del contorno. Deja uno fuera y el resultado no es un perímetro; es un recorrido parcial." },
          { "kind": "h3", "text": "¿Por qué la hipotenusa cuenta para el perímetro?" },
          { "kind": "p", "text": "El perímetro mide el contorno exterior completo, no solo los dos lados perpendiculares. Aunque la hipotenusa se encuentre frente al ángulo recto, sigue siendo una de las tres aristas del contorno: recorre el triángulo y recorrerás la hipotenusa también. Dejarla fuera mide dos lados de un camino roto, no el contorno de un triángulo cerrado. La fórmula tiene tres términos porque la forma tiene tres aristas; ninguna arista es opcional, da igual cómo esté orientado el triángulo en la página o en el terreno." },
          { "kind": "h3", "text": "Cómo calcular el perímetro paso a paso" },
          { "kind": "p", "text": "Usa [[a=3]], [[b=4]], [[c=5]]. Sustituye en la fórmula: [[P=3+4+5]]. Suma las dos primeras longitudes: [[P=7+5]]. Resultado final: [[[\\boxed{P=12\\text{ units}}]]]. Físicamente, 12 unidades es la longitud de una cinta extendida a lo largo de las tres aristas de extremo a extremo: el contorno completo del triángulo expresado como una longitud continua." },
          { "kind": "h3", "text": "¿Qué te dice el perímetro en el trabajo práctico?" },
          { "kind": "p", "text": "Responde una pregunta en muchos oficios: ¿cuánto material consume el contorno? Eso incluye materiales de borde, molduras de ventanas, bordes de vallas, tiras protectoras, marcos decorativos, rutas de cables, bordes de tela y perfiles metálicos de arista. En cada caso, el perímetro es el número que se lleva al proveedor. Describe la longitud del contorno completo del triángulo, no la cantidad de superficie que hay dentro: 12 metros de moldura no dicen nada sobre el área que cubre la ventana, y nunca fue su intención." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "¿Qué es el semiperímetro de un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro es exactamente la mitad del perímetro total del triángulo: [[[\\boxed{s=\\frac{P}{2}}]]]. Como [[P=a+b+c]], se deduce que [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. La suma va antes de la división porque el semiperímetro divide por la mitad todo el contorno, no cada lado por separado. Dividir primero cada lado y luego sumar daría el mismo número aquí, pero la fórmula expresa el orden correcto de las ideas: suma el contorno, luego divídelo por la mitad." },
          { "kind": "h3", "text": "Cómo calcular el semiperímetro paso a paso" },
          { "kind": "p", "text": "Usa [[a=3]], [[b=4]], [[c=5]]. Suma los tres lados: [[s=\\frac{3+4+5}{2}]]. Simplifica el total: [[s=\\frac{12}{2}]]. Resultado final: [[[\\boxed{s=6\\text{ units}}]]]. El semiperímetro es una medida geométrica derivada que se usa en varias fórmulas importantes de triángulos; rara vez describe algo que medirías directamente con una cinta, por eso la calculadora lo calcula por ti." },
          { "kind": "h3", "text": "¿Por qué se usa el semiperímetro en geometría?" },
          { "kind": "p", "text": "Es la variable natural de la fórmula de Herón, de la relación del inradio [[K=rs]] y de la geometría del círculo inscrito en general. Las fórmulas de área de triángulos siguen produciendo mitades, y el semiperímetro las absorbe todas de una vez, por eso las demostraciones y las fórmulas avanzadas lo prefieren al perímetro total. Cuando una fórmula pide [[s]], introducir [[P]] en su lugar duplica o distorsiona el resultado de otra manera, así que vale la pena mantener la distinción clara desde el principio." },
          { "kind": "h3", "text": "¿Es el semiperímetro la mitad física del contorno?" },
          { "kind": "p", "text": "No necesariamente. El semiperímetro es la mitad del perímetro numérico: 6 unidades cuando el perímetro es 12. No describe necesariamente un camino físico continuo que cubra la mitad del contorno del triángulo. No existe un único recorrido a lo largo de las aristas que sea el semiperímetro de la misma forma que el perímetro es el recorrido completo: la mitad es un número, no una ruta. Tratar [[s]] como un medio camino físico lleva a confusión; trátalo como la mitad del total, el valor que las fórmulas necesitan." },
          { "kind": "h3", "text": "¿Puede el semiperímetro ser menor que el lado más largo?" },
          { "kind": "p", "text": "No. La desigualdad triangular exige [[a+b>c]]: los dos lados más cortos juntos deben superar al lado más largo, o el triángulo no puede cerrarse. Sumando [[c]] a ambos lados se obtiene [[a+b+c>2c]], y dividiendo por la mitad se obtiene [[[\\boxed{s>c}]]]. Para un triángulo válido no degenerado, el semiperímetro es mayor que el lado más largo. Esta es una comprobación matemática útil: si un semiperímetro dado es menor que la hipotenusa, las medidas no pueden formar un triángulo real." }
        ]
      },
      "sec-difference": {
        "h2": "Perímetro y semiperímetro: ¿cuál es la diferencia?",
        "blocks": [
          { "kind": "p", "text": "Perímetro: la longitud total alrededor del triángulo, [[P=a+b+c]]. Semiperímetro: la mitad del perímetro total, [[s=\\frac{a+b+c}{2}]]. Los mismos tres lados, cantidades geométricas diferentes: uno es el todo, el otro es la mitad. Se relacionan mediante [[s=\\frac{P}{2}]] y [[P=2s]], y la calculadora nunca usa los dos símbolos de forma intercambiable." },
          { "kind": "h3", "text": "Comparación numérica" },
          { "kind": "p", "text": "Usa un triángulo rectángulo 6-8-10. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]]. Los dos números difieren por un factor de dos, siempre: [[s=\\frac{P}{2}]] y [[P=2s]]. La diferencia no es una forma distinta ni un triángulo distinto; es el mismo contorno contado una vez frente a contado como mitad." },
          { "kind": "h3", "text": "¿Qué medida debes usar?" },
          { "kind": "p", "text": "Usa el perímetro para cercar, enmarcar, rematar, proteger con vallas y estimar material alrededor de un objeto: cualquier trabajo en el que la pregunta sea cuánto material consume el contorno. Usa el semiperímetro para la fórmula de Herón, las relaciones del inradio, los cálculos del círculo inscrito y los problemas de geometría con longitudes de lados de triángulos: cualquier trabajo en el que una fórmula pida la mitad del contorno como entrada. La elección la determina la tarea, no la preferencia: una estimación de molduras quiere [[P]], una demostración de área quiere [[s]]." },
          { "kind": "h3", "text": "¿Mide el semiperímetro la mitad del área del triángulo?" },
          { "kind": "p", "text": "No. Tanto el perímetro como el semiperímetro son medidas lineales: longitudes, expresadas en metros o pies, nunca en metros cuadrados. El área mide la superficie bidimensional delimitada por el triángulo y usa unidades cuadradas. Dividir una longitud por la mitad sigue dando una longitud. La advertencia merece repetirse porque los nombres parecen relacionados: el semiperímetro es la mitad del perímetro, no la mitad del área, y ninguna división de un contorno puede producir una superficie." }
        ],
        "imgAlt": "Triángulo 6-8-10: barra de perímetro de 24 unidades dividida por la mitad en una barra de semiperímetro de 12 unidades",
        "figcaption": "P = 24 dividido por la mitad en s = 12: el contorno completo, después la mitad de él."
      },
      "sec-modes": {
        "h2": "Cómo entender los dos modos de la calculadora",
        "blocks": [
          { "kind": "p", "text": "La calculadora mantiene los dos cálculos en dos modos separados porque responden a preguntas diferentes a partir de las mismas tres entradas. Elegir el modo es elegir qué pregunta se está haciendo." },
          { "kind": "h3", "text": "Modo de calculadora de perímetro" },
          { "kind": "p", "text": "Este modo calcula la longitud total del contorno. Entradas: cateto [[a]], cateto [[b]], hipotenusa [[c]]. Fórmula: [[P=a+b+c]]. Salida: perímetro [[P]]. El resultado es útil para estimar la longitud total de material necesaria alrededor de un contorno triangular: el número que llevas al proveedor cuando el trabajo es remate, moldura o marco." },
          { "kind": "h3", "text": "Modo de calculadora de semiperímetro" },
          { "kind": "p", "text": "Este modo calcula la mitad del perímetro total. Entradas: cateto [[a]], cateto [[b]], hipotenusa [[c]]. Fórmula: [[s=\\frac{a+b+c}{2}]]. Salida: semiperímetro [[s]]. El resultado es útil como valor intermedio en cálculos avanzados de triángulos: el número que introduces en la fórmula de Herón o en la relación del inradio cuando el problema continúa más allá del contorno." },
          { "kind": "h3", "text": "¿Por qué hay dos modos separados?" },
          { "kind": "p", "text": "Ambos cálculos usan las mismas tres medidas de lados, pero devuelven cantidades geométricas diferentes, y confundirlos es uno de los errores más comunes en este tema. Dos modos etiquetados mantienen la intención explícita: el botón dice Calculate Perimeter o Calculate Semiperimeter, y el resultado se etiqueta [[P]] o [[s]]. Los dos modos ahorran a los usuarios cálculos manuales manteniendo las dos respuestas imposibles de confundir. No describas el modo de semiperímetro como una calculadora de área: su salida es una longitud, y sigue siendo una longitud." }
        ]
      },
      "sec-howto": {
        "h2": "Cómo usar la calculadora de perímetro y semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Los pasos siguientes siguen el diseño en pantalla de cada modo, desde identificar las medidas hasta un resultado verificado. Los dos modos comparten las mismas tres entradas y difieren solo en el cálculo final." },
          { "kind": "h3", "text": "Modo perímetro" },
          { "kind": "steps", "steps": [
            "<strong>Selecciona el modo Perimeter.</strong> Esto indica a la calculadora que el objetivo es la longitud total del contorno.",
            "<strong>Identifica el cateto a.</strong> Es uno de los dos lados que forman el ángulo recto.",
            "<strong>Identifica el cateto b.</strong> Es el otro lado que forma el ángulo recto.",
            "<strong>Identifica la hipotenusa c.</strong> Es el lado más largo, opuesto al ángulo recto.",
            "<strong>Introduce el cateto a.</strong> Escribe la longitud medida en el primer campo.",
            "<strong>Introduce el cateto b.</strong> Escribe la longitud medida en el segundo campo.",
            "<strong>Introduce la hipotenusa c.</strong> Escribe la longitud medida en el tercer campo.",
            "<strong>Selecciona las unidades apropiadas.</strong> Los tres lados deben compartir una unidad antes de que la suma tenga sentido.",
            "<strong>Haz clic en Calculate Perimeter.</strong> La calculadora suma los tres lados.",
            "<strong>Revisa el resultado.</strong> Confirma que el perímetro supera al lado más largo.",
            "<strong>Comprueba los pasos de solución mostrados.</strong> Muestran [[P=a+b+c]] con los valores introducidos rellenados.",
            "<strong>Verifica que la salida use una unidad de medida lineal.</strong> Metros, centímetros, pies o pulgadas: nunca una unidad cuadrada."
          ] },
          { "kind": "h3", "text": "Modo semiperímetro" },
          { "kind": "steps", "steps": [
            "<strong>Selecciona el modo Semiperimeter.</strong> Esto indica a la calculadora que el objetivo es la mitad del contorno.",
            "<strong>Introduce el cateto a.</strong> La misma identificación que en el modo de perímetro.",
            "<strong>Introduce el cateto b.</strong> El segundo lado que forma el ángulo recto.",
            "<strong>Introduce la hipotenusa c.</strong> El lado más largo, opuesto al ángulo recto.",
            "<strong>Selecciona unidades de medida compatibles.</strong> Una unidad para los tres lados.",
            "<strong>Haz clic en Calculate Semiperimeter.</strong> La calculadora suma los tres lados y divide el total por la mitad.",
            "<strong>Revisa el resultado.</strong> Debe ser claramente menor que el perímetro.",
            "<strong>Verifica que el resultado sea exactamente la mitad del perímetro.</strong> Compara [[s=\\frac{P}{2}]] con la salida del modo de perímetro.",
            "<strong>Comprueba los pasos de solución y la visualización en vivo.</strong> Los pasos muestran la suma y la división por la mitad; el dibujo muestra el triángulo del que salieron esos números.",
            "<strong>Usa Reset al empezar un nuevo cálculo.</strong> Limpia los tres campos para empezar de cero."
          ] },
          { "kind": "p", "text": "La visualización en vivo dibuja el triángulo a partir de los lados introducidos, lo que ayuda a detectar una hipotenusa mal etiquetada antes de confiar en los números. El diagrama de la fórmula muestra dónde queda cada lado en [[P=a+b+c]] o [[s=\\frac{a+b+c}{2}]]. Ninguno de los modos acepta dos lados: la calculadora necesita las tres longitudes del contorno, así que un lado que falte debe encontrarse primero, como explica la sección del lado que falta." }
        ]
      },
      "sec-examples": {
        "h2": "Ejemplos paso a paso de perímetro y semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Cuatro ternas pitagóricas conocidas muestran el cálculo completo para ambas medidas. Cada una suma los tres lados para el perímetro, luego divide el total por la mitad para el semiperímetro. La aritmética se muestra deliberadamente al completo para que el patrón sea inconfundible." },
          { "kind": "h3", "text": "Ejemplo 1: Triángulo rectángulo 3-4-5" },
          { "kind": "p", "text": "Datos [[a=3]], [[b=4]], [[c=5]]. Calcula el perímetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Calcula el semiperímetro: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Ambos resultados son correctos porque el perímetro cuenta cada arista del contorno una vez, y el semiperímetro es exactamente la mitad de esa cuenta." },
          { "kind": "h3", "text": "Ejemplo 2: Triángulo rectángulo 6-8-10" },
          { "kind": "p", "text": "Datos [[a=6]], [[b=8]], [[c=10]]. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]]. Duplicar los tres lados duplica ambas medidas: 24 es el doble de 12, y 12 es el doble de 6. Escalar el triángulo escala sus medidas de contorno en el mismo factor." },
          { "kind": "h3", "text": "Ejemplo 3: Triángulo rectángulo 5-12-13" },
          { "kind": "p", "text": "Datos [[a=5]], [[b=12]], [[c=13]]. Perímetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]]. Semiperímetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]]. Observa que 15 supera a la hipotenusa 13, como exige la comprobación de la desigualdad triangular." },
          { "kind": "h3", "text": "Ejemplo 4: Triángulo rectángulo 8-15-17" },
          { "kind": "p", "text": "Datos [[a=8]], [[b=15]], [[c=17]]. Perímetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]]. Semiperímetro: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]]. De nuevo el semiperímetro supera al lado más largo: 20 frente a 17." },
          { "kind": "h3", "text": "Comparación de los ejemplos fundamentales" },
          { "kind": "p", "text": "A medida que aumentan las dimensiones del triángulo, tanto [[P]] como [[s]] crecen junto con los lados. La tabla muestra dos patrones a la vez: el perímetro de cada fila es la suma simple de sus tres lados, y el perímetro de cada fila es exactamente el doble de su semiperímetro. Las filas 3-4-5 y 6-8-10 también muestran la escala directamente: cada lado duplicado, ambas medidas de contorno duplicadas." }
        ],
        "table": {
          "headers": ["Triángulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplicaciones reales del perímetro y el semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Doce situaciones resueltas llevan las dos fórmulas de la página al taller y a la obra. Cada una nombra un objeto o modelo triangular rectángulo simplificado, resuelve el perímetro y el semiperímetro con las fórmulas y declara la lectura práctica del resultado. Estos son modelos simplificados: no toda ventana, tejado, jardín, toldo, panel o estructura de soporte real forma un triángulo rectángulo exacto, y un objeto irregular debe dividirse en formas más simples antes de que las fórmulas se apliquen. Puede necesitarse margen de material, el desperdicio de corte no está incluido, los contornos curvos exigen cálculos diferentes, la resistencia estructural no puede determinarse solo con el perímetro, y las medidas reales de construcción deben verificarse antes de comprar materiales." },
          { "kind": "h3", "text": "Ejemplo 1: Marco de ventana de vidrio triangular" },
          { "kind": "p", "text": "Una ventana triangular rectángula tiene [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Perímetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]]. Semiperímetro: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]]. Doce metros es la longitud total alrededor del contorno triangular de la ventana: el material de marco a pedir antes de los márgenes de inglete y el desperdicio." },
          { "kind": "h3", "text": "Ejemplo 2: Remate de borde de tejado" },
          { "kind": "p", "text": "Una sección triangular de extremo de tejado tiene [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Perímetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]]. Semiperímetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]]. El perímetro estima la longitud del remate alrededor del contorno triangular del extremo del tejado." },
          { "kind": "h3", "text": "Ejemplo 3: Borde de jardín" },
          { "kind": "p", "text": "Una sección triangular rectángula de jardín tiene [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Perímetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]]. Semiperímetro: [[s=15\\text{ m}]]. El perímetro estima la longitud total del borde del jardín alrededor de la sección." },
          { "kind": "h3", "text": "Ejemplo 4: Soporte metálico de acero" },
          { "kind": "p", "text": "Un soporte metálico triangular tiene [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Perímetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=20\\text{ cm}}]]]. El perímetro describe el borde exterior del soporte, útil al especificar el acabado del borde." },
          { "kind": "h3", "text": "Ejemplo 5: Panel de tela triangular" },
          { "kind": "p", "text": "Un panel de tela triangular rectángulo tiene [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Perímetro: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=18\\text{ ft}}]]]. El perímetro estima la longitud del borde antes de añadir los márgenes de costura." },
          { "kind": "h3", "text": "Ejemplo 6: Marco de placa triangular" },
          { "kind": "p", "text": "Una placa tiene forma triangular rectángula con [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Perímetro: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=24\\text{ cm}}]]]. El perímetro total estima el material de marco para la placa." },
          { "kind": "h3", "text": "Ejemplo 7: Contorno de paisajismo" },
          { "kind": "p", "text": "Una sección triangular rectángula de paisajismo tiene [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Perímetro: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=28\\text{ m}}]]]. El perímetro estima el material de borde alrededor de la sección." },
          { "kind": "h3", "text": "Ejemplo 8: Soporte triangular de panel solar" },
          { "kind": "p", "text": "Una estructura triangular simplificada de soporte tiene [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Perímetro: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=45\\text{ m}}]]]. Estas son las longitudes de los tres lados de la estructura triangular modelada, el punto de partida para dimensionar los miembros." },
          { "kind": "h3", "text": "Ejemplo 9: Borde de toldo triangular" },
          { "kind": "p", "text": "Una sección triangular rectángula de toldo tiene [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Perímetro: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=30\\text{ ft}}]]]. El perímetro estima el material de borde para el borde del toldo." },
          { "kind": "h3", "text": "Ejemplo 10: Estructura de extremo de tejado de almacén" },
          { "kind": "p", "text": "Una estructura simplificada triangular rectángula de extremo de tejado tiene [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Perímetro: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=66\\text{ m}}]]]. El resultado representa el contorno completo de la sección triangular." },
          { "kind": "h3", "text": "Ejemplo 11: Panel triangular de fabricación" },
          { "kind": "p", "text": "Un panel industrial triangular rectángulo tiene [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Perímetro: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]]. Semiperímetro: [[[\\boxed{s=91\\text{ cm}}]]]. El perímetro estima los perfiles de protección de borde para el panel." },
          { "kind": "h3", "text": "Ejemplo 12: Gran estructura triangular de soporte" },
          { "kind": "p", "text": "Una estructura triangular rectángula de soporte tiene [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Perímetro: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]]. Semiperímetro: [[[\\boxed{s=63\\text{ m}}]]]. Estas medidas sirven como entradas geométricas para cálculos posteriores de ingeniería." },
          { "kind": "h3", "text": "Comparación de los ejemplos prácticos" }
        ],
        "table": {
          "headers": ["Aplicación práctica", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s", "Unidad de medida"],
          "rows": [
            ["Marco de ventana de vidrio", "3", "4", "5", "12", "6", "m"],
            ["Remate de borde de tejado", "6", "8", "10", "24", "12", "ft"],
            ["Borde de jardín", "5", "12", "13", "30", "15", "m"],
            ["Soporte de acero", "8", "15", "17", "40", "20", "cm"],
            ["Panel de tela", "9", "12", "15", "36", "18", "ft"],
            ["Marco de placa", "12", "16", "20", "48", "24", "cm"],
            ["Contorno de paisajismo", "7", "24", "25", "56", "28", "m"],
            ["Soporte de panel solar", "9", "40", "41", "90", "45", "m"],
            ["Borde de toldo", "15", "20", "25", "60", "30", "ft"],
            ["Extremo de tejado de almacén", "11", "60", "61", "132", "66", "m"],
            ["Panel de fabricación", "13", "84", "85", "182", "91", "cm"],
            ["Estructura de soporte", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cómo calcular el perímetro cuando falta un lado",
        "blocks": [
          { "kind": "p", "text": "La calculadora de esta página exige las tres longitudes de lado. Si un lado es desconocido, calcúlalo primero con el teorema de Pitágoras. El perímetro no puede completarse a partir de dos lados: dos longitudes describen una esquina abierta, no un contorno cerrado." },
          { "kind": "h3", "text": "Cómo encontrar la hipotenusa cuando se conocen ambos catetos" },
          { "kind": "p", "text": "Usa el teorema de Pitágoras en su forma de hipotenusa: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Ejemplo: [[a=6]], [[b=8]]. Entonces [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]]. Ahora se puede calcular el perímetro: [[P=6+8+10]], [[[\\boxed{P=24}]]], con [[s=12]] obtenido de la división por la mitad." },
          { "kind": "h3", "text": "Cómo encontrar un cateto que falta cuando se conoce la hipotenusa" },
          { "kind": "p", "text": "Reordena [[a^2+b^2=c^2]] para aislar el cateto desconocido: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Ejemplo: [[c=13]], [[b=12]]. Entonces [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]]. El perímetro sigue: [[P=5+12+13=30]], [[s=15]]. La resta dentro de la raíz es la firma de un cateto que falta; una hipotenusa que falta siempre suma." },
          { "kind": "h3", "text": "¿Por qué el lado que falta debe calcularse primero?" },
          { "kind": "p", "text": "El perímetro exige las tres longitudes del contorno. Un lado que falta no puede simplemente ignorarse ni estimarse sin justificación: dos lados no delimitan un triángulo, y un tercer lado adivinado convierte el total en ficción. Si solo se conocen dos lados, la <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">calculadora de cateto de triángulo rectángulo</a> encuentra el tercero antes de que la calculadora de esta página tome el relevo. Observa que este es un método educativo, no un modo de entrada adicional en la calculadora existente: los modos de perímetro y semiperímetro siguen recibiendo tres lados cada uno." }
        ],
        "imgAlt": "Triángulo rectángulo con catetos 6 y 8, hipotenusa desconocida resuelta como 10, dando perímetro 24",
        "figcaption": "Catetos 6 y 8 dan c = 10, entonces P = 24 y s = 12."
      },
      "sec-pythagoras": {
        "h2": "¿Qué relación hay entre el teorema de Pitágoras y el perímetro de un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "El teorema afirma [[[\\boxed{a^2+b^2=c^2}]]]. Establece la relación entre los dos catetos y la hipotenusa: la esquina cuadrada fuerza a las tres longitudes a ese equilibrio exacto. En el trabajo con perímetros, el teorema es el puente entre un conjunto incompleto de medidas y el contorno completo." },
          { "kind": "h3", "text": "¿Por qué importa para el perímetro?" },
          { "kind": "p", "text": "Si se conocen los dos catetos, la hipotenusa puede calcularse antes de encontrar el perímetro completo. Sin el teorema, un lado que falte bloquearía por completo el cálculo; con él, dos lados conocidos bastan para recuperar el tercero y concluir la suma. El teorema también funciona en la otra dirección: una hipotenusa conocida y un cateto conocido recuperan el otro cateto. De cualquier forma, transforma un problema de dos lados en un perímetro de tres lados." },
          { "kind": "h3", "text": "Ejemplo resuelto" },
          { "kind": "p", "text": "Datos [[a=5]], [[b=12]]. Encuentra [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]]. Calcula el perímetro: [[P=5+12+13]], [[[\\boxed{P=30}]]]. Calcula el semiperímetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]]. Un teorema, una suma, una división por la mitad: la cadena completa desde dos catetos hasta ambas medidas del contorno." },
          { "kind": "h3", "text": "¿Cómo verificar un triángulo rectángulo?" },
          { "kind": "p", "text": "Las tres medidas deben satisfacer [[a^2+b^2=c^2]], con la hipotenusa como el lado más largo. Comprueba también la desigualdad triangular: para cualquier triángulo válido, [[a+b>c]], [[a+c>b]] y [[b+c>a]]. Estas condiciones importan al comprobar medidas: una verificación pitagórica fallida significa que el triángulo no es rectángulo, o que un lado se etiquetó mal; una desigualdad triangular fallida significa que las tres longitudes no pueden formar triángulo alguno. Ejecuta ambas comprobaciones antes de confiar en un perímetro construido a partir de medidas de campo." }
        ]
      },
      "sec-advanced": {
        "h2": "¿Cómo se usa el semiperímetro en otras fórmulas de triángulos?",
        "blocks": [
          { "kind": "p", "text": "Esta sección da al semiperímetro su profundidad matemática sin convertir la página en el tutorial de otra calculadora. El semiperímetro es más que la mitad de un perímetro: es la cantidad que conecta las longitudes de los lados con el área y la geometría del círculo, y las fórmulas siguientes son donde muestra su valor." },
          { "kind": "h3", "text": "Relación entre semiperímetro e inradio" },
          { "kind": "p", "text": "El área de cualquier triángulo no degenerado es igual a su inradio por su semiperímetro: [[[\\boxed{K=rs}]]], donde [[K]] es el área, [[r]] el inradio y [[s]] el semiperímetro. Esta relación funciona para todos los triángulos no degenerados, no solo los rectángulos. Para un triángulo rectángulo, el inradio también puede calcularse a partir de los lados usando [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Toma el triángulo 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], entonces [[K=1\\times6]], [[[\\boxed{K=6}]]]. El semiperímetro es una medida intermedia importante en este cálculo: lleva la información del contorno mientras el inradio lleva la información del círculo." },
          { "kind": "h3", "text": "Relación con la fórmula de Herón" },
          { "kind": "p", "text": "La fórmula de Herón calcula el área a partir de los tres lados y el semiperímetro: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Usa las tres longitudes de lado, usa el semiperímetro, calcula el área del triángulo y funciona para cualquier triángulo válido. Usa el triángulo 3-4-5 con [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]]. El semiperímetro aparece cuatro veces dentro de la raíz, lo que muestra lo central que es: la fórmula de Herón ni siquiera puede escribirse sin él." },
          { "kind": "h3", "text": "¿Por qué el semiperímetro es una medida fundamental?" },
          { "kind": "p", "text": "Es más que la mitad de un perímetro. Es una cantidad matemática útil que conecta las longitudes de los lados con el área y la geometría del círculo: la relación del inradio lo trata como el compañero natural de [[r]], y la fórmula de Herón construye toda el área sobre él. Siempre que una fórmula necesita el contorno destilado en un único número conveniente, [[s]] es ese número. Esta página no se convierte en un tutorial completo de la fórmula de Herón ni del inradio; registra la conexión para que la salida del modo de semiperímetro tenga a dónde ir después." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "¿Cuál es la diferencia entre perímetro y área?",
        "blocks": [
          { "kind": "p", "text": "Una de las confusiones más persistentes en geometría es mezclar el contorno con la superficie. Perímetro y área comparten el mismo triángulo, pero miden cosas distintas, en unidades distintas, respondiendo a preguntas distintas." },
          { "kind": "h3", "text": "El perímetro mide el contorno" },
          { "kind": "p", "text": "[[P=a+b+c]]. Mide la longitud total alrededor del triángulo: el remate, la moldura, la línea de la valla. Las unidades son lineales: metros, centímetros, pies, pulgadas. Es unidimensional, una longitud y nada más." },
          { "kind": "h3", "text": "El área mide la superficie delimitada" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]]. Mide la región plana bidimensional dentro del triángulo rectángulo: el vidrio en la ventana, el césped en la sección del jardín. Las unidades son cuadradas: metros cuadrados, centímetros cuadrados, pies cuadrados, pulgadas cuadradas. Es bidimensional, una cuenta de superficie y nada más." },
          { "kind": "h3", "text": "¿Pueden dos triángulos tener el mismo perímetro pero áreas distintas?" },
          { "kind": "p", "text": "Sí. Triángulo 1: [[a=5]], [[b=12]], [[c=13]]. Entonces [[P=5+12+13=30]] y [[K=\\frac{5\\times12}{2}=30]]. Triángulo 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Comprueba el ángulo recto: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], así que es un triángulo rectángulo genuino. Su perímetro es [[P=7.5+10+12.5=30]], los mismos 30, pero su área es [[K=\\frac{7.5\\times10}{2}=37.5]], claramente distinta. Perímetro igual no significa automáticamente área igual: la longitud del contorno fija el remate total, pero la forma del triángulo decide cuánta superficie delimita ese remate." },
          { "kind": "h3", "text": "¿Por qué nunca debes expresar el perímetro en unidades cuadradas?" },
          { "kind": "p", "text": "Un perímetro es una longitud unidimensional; las unidades cuadradas describen una superficie bidimensional. Informar 12 m² para un perímetro afirma una superficie donde solo se midió un contorno, y quien lea el número imaginará lo incorrecto. Mantén las unidades honestas: longitudes en m, cm, ft, in; áreas en m², cm², ft², in². La unidad forma parte de la respuesta, y la unidad incorrecta convierte una respuesta correcta en incorrecta." }
        ]
      },
      "sec-units": {
        "h2": "Cómo entender las unidades de medida en los cálculos de perímetro y semiperímetro",
        "blocks": [
          { "kind": "p", "text": "Metros, centímetros, milímetros, kilómetros, pies, pulgadas, yardas, millas: las unidades de longitud vienen en muchos tamaños, y la fórmula del perímetro acepta cualquiera de ellas. La única regla es la concordancia: los tres lados deben hablar la misma unidad antes de sumarse." },
          { "kind": "h3", "text": "¿Por qué las tres longitudes de lado deben usar unidades compatibles?" },
          { "kind": "p", "text": "El perímetro es una suma de longitudes. Sumar 3 pies a 48 pulgadas sin convertir mezcla dos escalas, y el total no tiene un significado limpio: ¿56 de qué? Antes de sumar medidas, conviértelas a una unidad común. Los selectores de unidad de la calculadora existen exactamente para este paso, y el ejemplo resuelto siguiente muestra a la conversión haciendo su trabajo silencioso y esencial." },
          { "kind": "h3", "text": "Ejemplo resuelto de conversión de unidades" },
          { "kind": "p", "text": "Datos [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convierte el lado del medio: [[48\\text{ inches}=4\\text{ ft}]]. Entonces [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]]. Semiperímetro: [[[\\boxed{s=6\\text{ ft}}]]]. Observa que la terna convertida es la conocida 3-4-5, lo que confirma la conversión de forma independiente: si las pulgadas se hubieran sumado sin más, el perímetro habría sido 56 de nada coherente." },
          { "kind": "h3", "text": "Cómo calcular con medidas decimales de lados" },
          { "kind": "p", "text": "Usa [[a=2.5]], [[b=6]], [[c=6.5]]. Primero confirma el ángulo recto: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Calcula el perímetro: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]]. Después el semiperímetro: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]]. Los decimales fluyen por la misma suma y división por la mitad que los números enteros; las fórmulas nunca exigen enteros, y las medidas de taller rara vez lo son." },
          { "kind": "h3", "text": "¿Por qué debes evitar redondear demasiado pronto?" },
          { "kind": "p", "text": "Los cálculos de medida pueden contener valores decimales, y cada redondeo intermedio inyecta error que los pasos posteriores no pueden eliminar. Mantén suficiente precisión en los pasos intermedios y redondea solo la respuesta final según la exactitud de medida requerida. Redondear 2.5 a 3 a mitad del cálculo corrompería tanto [[P]] como [[s]]; la calculadora mantiene precisión total hasta el final, y los cálculos a mano deben hacer lo mismo." }
        ]
      },
      "sec-scaling": {
        "h2": "¿Cómo afectan los cambios en las longitudes de los lados al perímetro y al semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "El perímetro es una medida lineal, así que escala linealmente con el triángulo: estira cada lado por algún factor y el contorno se estira exactamente en ese factor. El semiperímetro lo acompaña, ya que siempre es la mitad del perímetro." },
          { "kind": "h3", "text": "¿Qué pasa cuando cada lado se duplica?" },
          { "kind": "p", "text": "Empieza desde [[P=a+b+c]]. Si cada lado se duplica, el nuevo perímetro es [[P_2=2a+2b+2c]], que se factoriza en [[P_2=2(a+b+c)]]. Por tanto [[[\\boxed{P_2=2P}]]]. El semiperímetro también se duplica, ya que dividir por la mitad un total duplicado sigue duplicando la mitad. El par 3-4-5 a 6-8-10 lo muestra en números: 12 se convierte en 24, y 6 se convierte en 12." },
          { "kind": "h3", "text": "¿Qué pasa cuando cada lado se triplica?" },
          { "kind": "p", "text": "La misma álgebra con factor tres da [[[\\boxed{P_2=3P}]]] y [[[\\boxed{s_2=3s}]]]. La relación de escala lineal vale para cualquier factor de escala [[k]]: multiplica cada lado por [[k]] y ambas medidas del contorno se multiplican por [[k]]. Por eso los dibujos a escala se comportan tan bien: mide el dibujo, multiplica por el factor de escala, y el perímetro real está listo." },
          { "kind": "h3", "text": "¿Qué pasa cuando solo cambia un lado?" },
          { "kind": "p", "text": "Aumentar un lado manteniendo los otros dos fijos cambia el perímetro en la misma cantidad: suma 2 unidades a un lado y [[P]] crece exactamente 2, porque el perímetro es una suma simple. Pero en un triángulo rectángulo las longitudes de los lados están ligadas por el teorema de Pitágoras, así que cambios arbitrarios de lado pueden no preservar la condición del ángulo recto. Alargar un cateto sin ajustar la hipotenusa rompe [[a^2+b^2=c^2]], y la forma deja de ser rectángula: la fórmula del perímetro sigue sumando tres números, pero ya no describen un triángulo rectángulo." },
          { "kind": "h3", "text": "Cómo comparar dos triángulos rectángulos" },
          { "kind": "p", "text": "Coloca 3-4-5 junto a 6-8-10. Longitudes de lados: cada lado duplicado, factor de escala 2. Perímetro: 12 frente a 24. Semiperímetro: 6 frente a 12. Duplicar todas las longitudes de lados duplica ambas medidas del contorno, exactamente como predice el álgebra. La comparación también funciona en la otra dirección: si los perímetros de dos triángulos están en razón 2:1 y ambos son rectángulos, sus lados están en esa razón también." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicaciones prácticas del perímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "El mismo patrón de dos pasos, sumar y luego dividir por la mitad, aparece dondequiera que un contorno triangular necesite medirse y una fórmula necesite su mitad. Un vidriero totaliza un marco de ventana a partir de sus longitudes de borde; un techador totaliza el remate alrededor de un hastial; un paisajista totaliza el borde alrededor de un parterre; un fabricante totaliza el perfil de arista alrededor de un panel. De los tres lados salen el perímetro para el pedido de material y el semiperímetro para cualquier geometría posterior. Los cuatro paneles siguientes muestran el patrón en escalas diferentes: un marco de ventana (12 m), remate de borde de tejado (24 ft), un borde de jardín (56 m) y una estructura de acero de soporte (40 cm), cada uno etiquetado con su perímetro y su semiperímetro." }
        ],
        "imgAlt": "Cuatro paneles: marco de ventana 12 m, remate de tejado 24 ft, borde de jardín 56 m, estructura de acero 40 cm de perímetros",
        "figcaption": "Cuatro usos reales: un marco de ventana, remate de borde de tejado, un borde de jardín y una estructura de acero."
      },
      "sec-mistakes": {
        "h2": "Errores comunes al calcular el perímetro y el semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Casi toda respuesta incorrecta en este tema se debe a un lado omitido o una etiqueta confundida, y no a mala aritmética. Los dieciséis errores siguientes son los que aparecen una y otra vez, cada uno con su causa y su corrección." },
          { "kind": "h3", "text": "1. Olvidar incluir la hipotenusa" },
          { "kind": "p", "text": "Usar [[P=a+b]] en el triángulo 3-4-5 da 7, no 12. El error ocurre porque la hipotenusa nunca toca el ángulo recto, así que parece separada del triángulo propiamente dicho. Corrección: el contorno tiene tres aristas; cuenta las tres, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Confundir el perímetro con el semiperímetro" },
          { "kind": "p", "text": "Introducir 6 donde va 12, o al revés, divide por la mitad o duplica la estimación de material. El error viene de que los dos valores comparten los mismos tres lados. Corrección: etiqueta todo resultado [[P]] o [[s]], y comprueba [[s=\\frac{P}{2}]] antes de seguir adelante." },
          { "kind": "h3", "text": "3. Dividir el perímetro entre dos al calcular el perímetro" },
          { "kind": "p", "text": "Calcular [[\\frac{3+4+5}{2}=6]] y llamarlo perímetro subestima el contorno a la mitad. El error es ejecutar la fórmula del semiperímetro por hábito. Corrección: [[P=a+b+c]] no tiene división; la división por la mitad pertenece solo a [[s]]." },
          { "kind": "h3", "text": "4. Olvidar dividir entre dos al calcular el semiperímetro" },
          { "kind": "p", "text": "Informar [[s=12]] para el triángulo 3-4-5 alimenta la fórmula de Herón con un [[s]] duplicado y corrompe el área. Corrección: [[s=\\frac{a+b+c}{2}]] siempre termina con la división por la mitad; sin ella, el número es el perímetro." },
          { "kind": "h3", "text": "5. Usar el lado equivocado como hipotenusa" },
          { "kind": "p", "text": "Tratar un cateto como [[c]], por ejemplo introduciendo a=5, b=4, c=3, desordena toda fórmula posterior. El error suele venir de leer los lados en el orden equivocado. Corrección: [[c]] es el lado más largo, opuesto al ángulo recto; ordena los tres números y asigna [[c]] al mayor." },
          { "kind": "h3", "text": "6. Introducir medidas que no forman un triángulo rectángulo" },
          { "kind": "p", "text": "Los lados 2, 3, 4 dan [[P=9]] aritméticamente, pero [[2^2+3^2=13\\neq16]], así que no existe ángulo recto y las fórmulas de la página descansan sobre una premisa falsa. Corrección: verifica [[a^2+b^2=c^2]] antes de calcular." },
          { "kind": "h3", "text": "7. Mezclar centímetros y metros" },
          { "kind": "p", "text": "Sumar 3 m, 40 cm y 5 m como [[3+40+5=48]] produce 48 de nada. Corrección: convierte a una unidad primero: [[40\\text{ cm}=0.4\\text{ m}]], después [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mezclar pies y pulgadas" },
          { "kind": "p", "text": "Sumar 3 ft, 48 in y 5 ft como 56 repite el mismo error de escala en unidades imperiales. Corrección: [[48\\text{ in}=4\\text{ ft}]], después [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Informar el perímetro en unidades cuadradas" },
          { "kind": "p", "text": "Escribir [[P=12\\text{ m}^2]]. El error suele venir de copiar una unidad de área por hábito tras resolver problemas de área. Corrección: los perímetros son longitudes, así que [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Informar el semiperímetro como un área" },
          { "kind": "p", "text": "Tratar [[s=6]] como 6 unidades cuadradas. El semiperímetro es una longitud, la mitad de un contorno, no una superficie. Corrección: [[s=6]] unidades de longitud, punto final." },
          { "kind": "h3", "text": "11. Redondear demasiado pronto" },
          { "kind": "p", "text": "Redondear 2.5 a 3 antes de sumar da [[3+6+6.5=15.5]] en lugar de los verdaderos 15. El error parece inofensivo porque el redondeo parece pequeño. Corrección: mantén precisión total durante el cálculo y redondea solo la respuesta final." },
          { "kind": "h3", "text": "12. Usar solo dos lados en la calculadora existente" },
          { "kind": "p", "text": "Introducir [[a=3]], [[b=4]] y ningún [[c]] deja el contorno abierto. La calculadora necesita las tres longitudes porque un perímetro es un total cerrado. Corrección: encuentra primero el lado que falta con el teorema de Pitágoras, luego calcula." },
          { "kind": "h3", "text": "13. Ignorar la desigualdad triangular" },
          { "kind": "p", "text": "Los lados 2, 3, 10 dan [[P=15]] aritméticamente, pero [[2+3<10]], así que ningún triángulo existe. Corrección: comprueba [[a+b>c]] antes de confiar en cualquier resultado construido a partir de los tres números." },
          { "kind": "h3", "text": "14. Suponer que el semiperímetro es un camino físico de medio contorno" },
          { "kind": "p", "text": "Buscar la caminata de 6 unidades a lo largo de las aristas 3-4-5. Ningún medio camino continuo único equivale a [[s]] en general; [[s]] es la mitad del total numérico. Corrección: trata [[s]] como un número para fórmulas, no una ruta que recorrer." },
          { "kind": "h3", "text": "15. Confundir el perímetro con la suma solo de los catetos perpendiculares" },
          { "kind": "p", "text": "Calcular [[a+b=7]] y parar, como si la hipotenusa fuera decoración interna. Corrección: la hipotenusa es una arista del contorno; [[P=a+b+c]], los tres términos, siempre." },
          { "kind": "h3", "text": "16. Suponer que el perímetro por sí solo determina el área del triángulo" },
          { "kind": "p", "text": "Creer que [[P=30]] fija [[K]]. El triángulo 5-12-13 ([[K=30]]) y el triángulo 7.5-10-12.5 ([[K=37.5]]) comparten [[P=30]] con áreas distintas. Corrección: el área necesita más que el total del contorno; usa los catetos o la fórmula de Herón." },
          { "kind": "h3", "text": "Incorrecto frente a correcto: un ejemplo concreto" },
          { "kind": "p", "text": "Datos [[a=3]], [[b=4]], [[c=5]]. Perímetro correcto: [[P=3+4+5=12]]. Omitir incorrectamente la hipotenusa: [[3+4=7]]. Siete no es el perímetro completo porque la tercera arista del contorno nunca se contó. Semiperímetro correcto: [[s=\\frac{12}{2}=6]]. Seis no es la longitud total del contorno: es la mitad de él, el valor que fórmulas como la de Herón necesitan. La aritmética parece segura en los tres casos; solo la geometría los distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Cómo comprobar que el perímetro de tu triángulo rectángulo es correcto",
        "blocks": [
          { "kind": "p", "text": "Siete comprobaciones independientes, todas demostradas en el triángulo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). La concordancia entre rutas distintas es la evidencia más fuerte de que una respuesta es correcta, tanto en los deberes como en la medición práctica." },
          { "kind": "h3", "text": "Método 1: Suma los tres lados de nuevo" },
          { "kind": "p", "text": "Ejecuta [[P=a+b+c]] desde cero: [[P=3+4+5=12]]. Una segunda pasada con los números reescritos detecta errores de escritura y dígitos intercambiados que una sola pasada oculta." },
          { "kind": "h3", "text": "Método 2: Divide el perímetro entre dos" },
          { "kind": "p", "text": "Calcula [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Si la división por la mitad no coincide con la salida del modo de semiperímetro, uno de los dos cálculos salió mal y ambos merecen una segunda mirada." },
          { "kind": "h3", "text": "Método 3: Duplica el semiperímetro" },
          { "kind": "p", "text": "Comprueba [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Este es el inverso del Método 2 y detecta la misma clase de error desde la otra dirección: un [[s]] erróneo falla aquí incluso cuando la suma original parecía buena." },
          { "kind": "h3", "text": "Método 4: Comprueba la relación pitagórica" },
          { "kind": "p", "text": "Confirma [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Esto verifica la identificación de los lados detrás de todo otro cálculo; una hipotenusa errónea significa que un lado se etiquetó mal, y [[P]] y [[s]] deben reconstruirse." },
          { "kind": "h3", "text": "Método 5: Comprueba la desigualdad triangular" },
          { "kind": "p", "text": "Confirma [[a+b>c]]: [[3+4=7>5]]. Las tres longitudes deben ser capaces de formar un triángulo antes de que la comprobación del ángulo recto signifique algo. Un fallo aquí te devuelve a las medidas, no a la aritmética." },
          { "kind": "h3", "text": "Método 6: Comprueba las unidades de medida" },
          { "kind": "p", "text": "Confirma que los tres lados usan unidades compatibles. Las unidades mixtas son el error más silencioso de este tema: la aritmética parece limpia mientras la escala está mal. Relee el selector de unidad de cada entrada antes de confiar en el total." },
          { "kind": "h3", "text": "Método 7: Compara con la visualización en vivo" },
          { "kind": "p", "text": "La calculadora dibuja el triángulo a partir de los lados introducidos. Si el dibujo no se parece en nada al objeto medido, un lado se asignó mal: el lado introducido más largo debe quedar frente a la esquina cuadrada. La figura es un testigo independiente, y merece una mirada antes de que los números entren en un pedido o un informe." }
        ]
      },
      "sec-related": {
        "h2": "Explora calculadoras relacionadas de triángulos rectángulos",
        "blocks": [
          { "kind": "p", "text": "Cada medida pide su propia calculadora." }
        ]
      },
      "sec-faq": {
        "h2": "Preguntas frecuentes",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Un contorno, dos medidas útiles",
        "blocks": [
          { "kind": "p", "text": "El perímetro totaliza el contorno; el semiperímetro divide ese total por la mitad para las fórmulas que lo necesitan. El triángulo 3-4-5 lleva toda la historia en miniatura: [[P=12]] unidades de contorno para el pedido de material, [[s=6]] unidades listas para la fórmula de Herón o la relación del inradio. Una suma y una división por la mitad cubren los dos trabajos." },
          { "kind": "p", "text": "El hábito de trabajo es sencillo: etiqueta la hipotenusa correctamente, incluye los tres lados, iguala las unidades, mantén los decimales sin redondear hasta el final y verifica con un segundo método. Con estos hábitos, [[P=a+b+c]] y [[s=\\frac{a+b+c}{2}]] son dos de las medidas más fiables de la geometría." }
        ]
      }
    },
    "relatedHeading": "Explora calculadoras relacionadas de triángulos rectángulos",
    "relatedIntro": "Cada medida pide su propia calculadora.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Calculadora de perímetro de triángulo rectángulo" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Calculadora de semiperímetro de triángulo rectángulo" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Calculadora de área de triángulo rectángulo a partir del semiperímetro" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Calculadora de área de triángulo rectángulo a partir de los catetos" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Calculadora del teorema de Pitágoras" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Calculadora de cateto que falta de triángulo rectángulo" }
    ],
    "faqHeading": "Preguntas frecuentes",
    "faqs": [
      {
        "question": "¿Cuál es la fórmula del perímetro de un triángulo rectángulo?",
        "answer": "P = a + b + c, donde a y b son los dos catetos y c es la hipotenusa. Suma las tres longitudes de lado; el total es la longitud completa del contorno en unidades lineales. Para un triángulo 3-4-5, P = 3 + 4 + 5 = 12 unidades. Todo lado debe incluirse, incluida la hipotenusa, porque es una de las tres aristas del contorno."
      },
      {
        "question": "¿Cuál es la fórmula del semiperímetro de un triángulo rectángulo?",
        "answer": "s = (a + b + c) / 2, exactamente la mitad del perímetro, equivalentemente s = P / 2. Suma primero los tres lados, luego divide una vez. Para un triángulo 3-4-5, s = (3 + 4 + 5) / 2 = 6 unidades. Es una longitud, no un área, y es la entrada que fórmulas como la de Herón esperan."
      },
      {
        "question": "¿Cuál es la diferencia entre perímetro y semiperímetro?",
        "answer": "El perímetro es el contorno entero, P = a + b + c; el semiperímetro es su mitad, s = P / 2. Para un triángulo 6-8-10, P = 24 y s = 12. Usa P para estimaciones de material alrededor de un contorno y s como entrada de fórmulas avanzadas de geometría. Los dos difieren exactamente por un factor de dos, siempre."
      },
      {
        "question": "¿Por qué la hipotenusa se incluye en el perímetro?",
        "answer": "Porque el perímetro mide el contorno exterior completo, y la hipotenusa es una de sus tres aristas. Recorrer el triángulo significa recorrer la hipotenusa también. Omitirla mide un camino abierto, no un contorno cerrado. Para 3-4-5, dejar fuera el 5 da 7, que no es el perímetro de ningún triángulo con esos lados."
      },
      {
        "question": "¿Puedo calcular el perímetro si falta un lado?",
        "answer": "No directamente: la fórmula necesita las tres longitudes del contorno. Encuentra primero el lado que falta con el teorema de Pitágoras: c = sqrt(a^2 + b^2) para una hipotenusa que falta, o a = sqrt(c^2 - b^2) para un cateto que falta. Con a = 6 y b = 8, c = 10, así que P = 6 + 8 + 10 = 24. La calculadora de esta página exige los tres lados."
      },
      {
        "question": "¿Cómo encuentro la hipotenusa antes de calcular el perímetro?",
        "answer": "Usa c = sqrt(a^2 + b^2) con los dos catetos conocidos. Para a = 5 y b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Después suma los tres lados: P = 5 + 12 + 13 = 30. Confirma que el resultado es el lado más largo; si no lo es, los catetos se etiquetaron mal."
      },
      {
        "question": "¿Por qué el semiperímetro es útil en geometría?",
        "answer": "Es la variable natural de la fórmula de Herón, K = sqrt(s(s - a)(s - b)(s - c)), y de la relación del inradio K = r × s. Las fórmulas de área siguen produciendo mitades, y el semiperímetro las absorbe en un número conveniente. Para 3-4-5, s = 6 alimenta ambas fórmulas y ambas devuelven K = 6. Conecta las longitudes de los lados con el área y la geometría del círculo."
      },
      {
        "question": "¿Es el semiperímetro la mitad del área del triángulo?",
        "answer": "No. El semiperímetro es la mitad del perímetro, una longitud medida en unidades como metros o pies. El área es una superficie bidimensional medida en unidades cuadradas. Para el triángulo 3-4-5, s = 6 unidades mientras el área es 6 unidades cuadradas; los números coincidentes son una coincidencia de este triángulo en particular, no una regla."
      },
      {
        "question": "¿Qué unidades debo usar para el perímetro?",
        "answer": "Cualquier unidad lineal, siempre que los tres lados la compartan: metros, centímetros, milímetros, kilómetros, pies, pulgadas, yardas o millas. Convierte antes de sumar: 3 ft, 48 in, 5 ft se convierten en 3 ft, 4 ft, 5 ft, dando P = 12 ft. Nunca informes un perímetro en unidades cuadradas; es una longitud, no una superficie."
      },
      {
        "question": "¿Puedo calcular el perímetro usando medidas decimales?",
        "answer": "Sí. Las fórmulas tratan los decimales exactamente como los números enteros. Con a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 unidades y s = 15 / 2 = 7.5 unidades. Mantén precisión total durante la suma y redondea solo la respuesta final a la exactitud que las medidas justifiquen."
      },
      {
        "question": "¿Cómo compruebo si tres lados forman un triángulo rectángulo válido?",
        "answer": "Confirma la relación pitagórica a^2 + b^2 = c^2 con c como el lado más largo, y confirma la desigualdad triangular a + b > c. Para 3, 4, 5: 9 + 16 = 25 y 3 + 4 > 5, así que el triángulo es válido y rectángulo. Fallar en cualquier prueba significa que las medidas deben comprobarse de nuevo antes de confiar en cualquier perímetro."
      },
      {
        "question": "¿Cuál es la relación entre semiperímetro, inradio y la fórmula de Herón?",
        "answer": "El semiperímetro alimenta a ambas: K = r × s lo liga al inradio, y K = sqrt(s(s - a)(s - b)(s - c)) es la fórmula de Herón construida sobre él. Para un triángulo rectángulo, el inradio también se deriva de los lados como r = (a + b - c) / 2. Con 3-4-5, s = 6 y r = 1, así que K = 1 × 6 = 6, igualando el resultado de Herón."
      }
    ]
  }
};
