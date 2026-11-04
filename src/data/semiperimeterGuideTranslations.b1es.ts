// semiperimeterGuideTranslations.b1es.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Spanish (es).
export const B1_ES = {
  "es": {
    "tocHeading": "Navegación por secciones",
    "tocItems": {
      "sec-intro": "Cómo calcular el semiperímetro de un triángulo rectángulo",
      "sec-geometry": "¿Qué es un triángulo rectángulo?",
      "sec-meaning": "¿Qué es el semiperímetro de un triángulo rectángulo?",
      "sec-formula": "Fórmula del semiperímetro del triángulo rectángulo",
      "sec-calculator": "Cómo usar la calculadora del semiperímetro del triángulo rectángulo",
      "sec-examples": "Ejemplos paso a paso del semiperímetro del triángulo rectángulo",
      "sec-practical": "Aplicaciones reales del semiperímetro del triángulo rectángulo",
      "sec-inradius": "¿Cómo se relaciona el semiperímetro con el inradio del triángulo rectángulo?",
      "sec-heron": "¿Cómo se usa el semiperímetro en la fórmula de Herón?",
      "sec-vs-perimeter": "¿Cuál es la diferencia entre perímetro y semiperímetro?",
      "sec-missing-side": "Cómo calcular el semiperímetro cuando falta un lado",
      "sec-properties": "Propiedades importantes del semiperímetro del triángulo rectángulo",
      "sec-units": "Las unidades de medida en los cálculos del semiperímetro",
      "sec-mistakes": "Errores comunes al calcular el semiperímetro del triángulo rectángulo",
      "sec-verify": "Cómo comprobar si tu respuesta del semiperímetro es correcta",
      "sec-related": "Explora las calculadoras relacionadas de triángulos rectángulos",
      "sec-faq": "Preguntas frecuentes",
      "sec-conclusion": "La mitad del contorno, la comprensión completa"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cómo calcular el semiperímetro de un triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Suma los tres lados de un triángulo rectángulo y luego divide el total entre dos." },
          { "kind": "p", "text": "Ese es todo el cálculo, y esta calculadora lo realiza para cualquier triángulo rectángulo una vez que introduces los dos catetos y la hipotenusa. Se necesitan tres medidas de lados porque el triángulo tiene tres bordes, y la hipotenusa debe incluirse: es uno de esos tres bordes aunque nunca toque el ángulo recto. El total se divide entre dos porque el semiperímetro se define como exactamente la mitad del perímetro completo, una cantidad que aparece una y otra vez en la geometría de triángulos." },
          { "kind": "p", "text": "Un ejemplo rápido muestra la idea. Dado [[a=3]], [[b=4]] y [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "El perímetro completo es 12 unidades, así que su semiperímetro es 6 unidades. Observa que el semiperímetro es una medida lineal, no una medida de área: es una longitud, expresada en metros, pies o unidades simples, nunca en unidades cuadradas. Resulta útil siempre que una fórmula pida la mitad del perímetro, lo que ocurre en la fórmula de Herón para el área, en la relación del inradio y en varias demostraciones geométricas donde el perímetro completo solo estorbaría." }
        ]
      },
      "sec-geometry": {
        "h2": "¿Qué es un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de que ocurra cualquier división entre dos, los tres lados deben estar etiquetados correctamente. Los símbolos siguientes se mantienen fijos en toda la guía, y la calculadora usa los mismos nombres." },
          { "kind": "h3", "text": "Definición de triángulo rectángulo" },
          { "kind": "p", "text": "Un triángulo rectángulo es un triángulo que contiene un ángulo interior que mide exactamente 90 grados. Tiene tres vértices, tres lados, dos ángulos agudos y un ángulo recto, normalmente marcado con un pequeño cuadrado. Los dos lados que forman el ángulo recto son los catetos; el lado opuesto al ángulo recto es la hipotenusa. Como los ángulos de cualquier triángulo suman 180 grados, [[A+B+C=180^\\circ]], y con [[C=90^\\circ]] se deduce que [[[\\boxed{A+B=90^\\circ}]]]: los dos ángulos agudos son complementarios, así que conocer uno determina el otro. Entender bien esta imagen importa porque la fórmula del semiperímetro trata cada lado como un borde del contorno, y un lado mal etiquetado corrompe el total antes de que empiece la división." },
          { "kind": "h3", "text": "¿Cuáles son los dos catetos?" },
          { "kind": "p", "text": "El cateto [[a]] y el cateto [[b]] son los dos lados que se encuentran en el vértice del ángulo recto, perpendiculares entre sí. Cualquiera de los dos puede dibujarse horizontal o vertical según la orientación del triángulo; lo que los define es la esquina de 90 grados que forman, no su dirección en la página. Se diferencian de la hipotenusa en posición y en longitud: cada cateto toca el ángulo recto, y cada cateto es más corto que la hipotenusa. En el trabajo con el semiperímetro su papel es simple: ambos son bordes del contorno, así que ambos entran en la suma que se divide a la mitad." },
          { "kind": "h3", "text": "¿Qué es la hipotenusa?" },
          { "kind": "p", "text": "La hipotenusa es el lado opuesto al ángulo recto, siempre el lado más largo del triángulo. Nunca forma el ángulo recto; lo cruza por enfrente, uniendo los extremos lejanos de los dos catetos. Se diferencia de los catetos tanto en posición como en longitud: los catetos se encuentran a 90 grados, mientras que la hipotenusa se encuentra con cada cateto en un ángulo agudo. Completa el contorno triangular, por eso debe incluirse en el cálculo del semiperímetro. Cuando se conocen ambos catetos, el teorema de Pitágoras la recupera: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Cómo identificar las etiquetas correctas de los lados" },
          { "kind": "p", "text": "[[a]] y [[b]] son los dos lados que se encuentran a 90 grados, y [[c]] está opuesta al ángulo recto. En un triángulo rectángulo no degenerado, [[c]] es el lado más largo. La marca del ángulo recto te dice qué lado es [[c]]: es el que no toca ese vértice. Una comprobación rápida de orden ayuda: ordena los tres números, y el mayor debe desempeñar el papel de [[c]]. Si el lado mayor no queda opuesto a la esquina cuadrada, las etiquetas están mal, y el semiperímetro construido sobre ellas también estará mal." },
          { "kind": "h3", "text": "¿Por qué el semiperímetro depende de los tres lados?" },
          { "kind": "p", "text": "El semiperímetro se deriva del perímetro completo, y el perímetro completo cuenta cada borde del contorno. Aunque [[a]] y [[b]] sean perpendiculares, la hipotenusa sigue siendo parte del contorno exterior del triángulo: es el borde que cierra la figura. Excluir [[c]] no da un semiperímetro más corto; da una cantidad distinta y errónea. Para [[a=3]], [[b=4]], [[c=5]], omitir la hipotenusa produce [[(3+4)/2=3.5]], mientras que el verdadero semiperímetro es [[(3+4+5)/2=6]]. Las 2.5 unidades que faltan son la parte de la hipotenusa, y ninguna fórmula correcta puede saltársela." }
        ],
        "imgAlt": "Triángulo rectángulo ABC con catetos a y b, hipotenusa c, ángulo recto en C; muestra P = a+b+c y s = (a+b+c)/2",
        "figcaption": "Triángulo ABC: los catetos a y b se encuentran en el ángulo recto C, la hipotenusa c cierra el contorno, y s = (a + b + c) / 2 es la mitad del perímetro."
      },
      "sec-meaning": {
        "h2": "¿Qué es el semiperímetro de un triángulo rectángulo?",
        "blocks": [
          { "kind": "h3", "text": "Definición de semiperímetro" },
          { "kind": "p", "text": "El semiperímetro es exactamente la mitad del perímetro completo de un triángulo. Si [[P]] es la distancia completa alrededor del triángulo, entonces el semiperímetro [[s]] es [[[\\boxed{s=\\frac{P}{2}}]]]. Para un triángulo rectángulo, el perímetro completo es [[P=a+b+c]], así que la definición se convierte en [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Las tres longitudes de los lados se suman antes de la división: la suma recoge todo el contorno, y la división entre dos lo reduce a la mitad. Nada queda fuera y nada se cuenta dos veces." },
          { "kind": "h3", "text": "¿Por qué se llama semiperímetro?" },
          { "kind": "p", "text": "El nombre se explica solo cuando se divide en partes. <em>Semi</em> significa mitad, y <em>perímetro</em> significa la longitud completa del contorno. Juntos, semiperímetro significa la mitad del perímetro. La letra [[s]] es el símbolo matemático estándar, y aparece en muchas fórmulas de triángulos precisamente porque las longitudes de contorno divididas a la mitad aparecen con mucha frecuencia. Cuando una fórmula pide [[s]], está pidiendo este único número: la mitad de [[a+b+c]]." },
          { "kind": "h3", "text": "¿Representa el semiperímetro un recorrido físico de medio contorno?" },
          { "kind": "p", "text": "Este es un punto sutil que conviene entender bien. El semiperímetro es la mitad del total numérico de las tres longitudes de los lados, pero no describe necesariamente una ruta física continua que cubra la mitad del contorno del triángulo. Caminar 6 unidades a lo largo de los bordes de un triángulo 3-4-5, por ejemplo, podría significar caminar los dos catetos (3 + 4 = 7 ya es demasiado) o un cateto más parte de la hipotenusa; no existe un único camino natural de medio recorrido. El semiperímetro es ante todo una medida geométrica derivada, un valor intermedio conveniente que usan las fórmulas, más que una distancia que se mediría a pasos sobre el terreno." },
          { "kind": "h3", "text": "¿El semiperímetro es una longitud o un área?" },
          { "kind": "p", "text": "El semiperímetro es una medida unidimensional: una longitud. Si las longitudes de los lados están en metros, [[s]] está en metros; en centímetros, en centímetros; en pies, en pies; en pulgadas, en pulgadas. Nunca debe expresarse en unidades cuadradas. La división entre dos cambia el tamaño del número, no su dimensión: dividir una longitud a la mitad sigue dejando una longitud. Confundir [[s]] con un área es uno de los errores más comunes de principiantes, y mantener las unidades en orden es la forma más simple de evitarlo." },
          { "kind": "h3", "text": "¿El semiperímetro es siempre mayor que el lado más largo?" },
          { "kind": "p", "text": "Sí, para todo triángulo válido no degenerado, y la desigualdad triangular muestra por qué. Todo triángulo satisface [[a+b>c]]: los dos lados más cortos juntos superan al más largo. Suma [[c]] a ambos lados y se deduce [[a+b+c>2c]]; divide entre dos y el resultado es [[[\\boxed{s>c}]]]. Para un triángulo rectángulo, esto significa que el semiperímetro siempre es mayor que la hipotenusa. Para el 3-4-5, [[s=6]] supera a [[c=5]]. Esto sirve como una práctica comprobación de cordura: si tu semiperímetro calculado es menor que la hipotenusa, las etiquetas de los lados o la aritmética están mal." }
        ]
      },
      "sec-formula": {
        "h2": "Fórmula del semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Se usan dos formas de la misma fórmula, según lo que se conozca. La forma compacta parte del perímetro completo:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "La forma desarrollada parte de los tres lados:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Qué significa cada variable" },
          { "kind": "p", "text": "[[s]] es el semiperímetro, la respuesta que se está calculando. [[P]] es el perímetro completo, la longitud total del contorno. [[a]] es el primer cateto y [[b]] el segundo cateto, los dos lados perpendiculares. [[c]] es la hipotenusa, el lado más largo, opuesta al ángulo recto. Nunca intercambies [[P]] y [[s]]: una es todo el contorno, la otra es su mitad." },
          { "kind": "h3", "text": "¿Por qué dividimos entre dos?" },
          { "kind": "p", "text": "La división es lo que convierte la cantidad en un <em>semi</em>perímetro en lugar de un perímetro. Toma [[a=3]], [[b=4]], [[c=5]]. Primero calcula el perímetro completo: [[P=3+4+5]], así que [[P=12]]. Luego divide entre dos: [[s=12/2]], lo que da [[[\\boxed{s=6}]]]. Matemáticamente, la división reescala el total del contorno al valor mitad que esperan fórmulas como la de Herón. Omitirla responde a otra pregunta: el perímetro completo, no el semiperímetro." },
          { "kind": "h3", "text": "¿Por qué no podemos usar solo los dos catetos?" },
          { "kind": "p", "text": "Porque los catetos solos no son todo el contorno. El enfoque incorrecto [[s=(3+4)/2]] da 3.5, un número sin significado geométrico para este triángulo: ignora la hipotenusa, que es un borde real de la figura. El enfoque correcto suma primero los tres lados: [[s=(3+4+5)/2]], lo que da [[[\\boxed{s=6}]]]. Un atajo tentador es dividir cada lado a la mitad y luego sumar, [[1.5+2+2.5=6]]: la aritmética funciona aquí por casualidad porque la división se distribuye sobre la suma, pero oscurece la estructura de la fórmula e invita a errores. Suma primero, luego divide una sola vez." },
          { "kind": "h3", "text": "¿Cómo se relacionan el perímetro y el semiperímetro?" },
          { "kind": "p", "text": "Son la misma medida a dos escalas. Duplicar el semiperímetro recupera el perímetro, y dividir el perímetro a la mitad recupera el semiperímetro:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Cualquiera de los dos valores puede recuperarse cuando se conoce el otro. Si un problema indica que el perímetro es 30, el semiperímetro es inmediatamente 15; si un cálculo produce [[s=20]], el perímetro completo es 40. Esta relación de doble sentido también es una herramienta de verificación: después de calcular [[s]] a partir de los lados, duplicarlo debe reproducir la suma de los lados." }
        ]
      },
      "sec-calculator": {
        "h2": "Cómo usar la calculadora del semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "La calculadora de esta página tiene un solo trabajo: toma las tres longitudes de los lados de un triángulo rectángulo y devuelve el semiperímetro, mostrando cada paso del trabajo. Los pasos siguientes coinciden exactamente con la interfaz existente." },
          { "kind": "p", "text": "<strong>Paso 1: Localiza la calculadora del semiperímetro.</strong> Está cerca de la parte superior de la página, debajo del encabezado H1, con tres campos etiquetados." },
          { "kind": "p", "text": "<strong>Paso 2: Identifica el cateto a.</strong> Elige uno de los dos lados que forman el ángulo recto. Cualquiera de los lados perpendiculares puede ser [[a]]." },
          { "kind": "p", "text": "<strong>Paso 3: Identifica el cateto b.</strong> El otro lado perpendicular se convierte en [[b]]." },
          { "kind": "p", "text": "<strong>Paso 4: Identifica la hipotenusa c.</strong> El lado más largo, opuesto al ángulo recto, es [[c]]. Ordenar las tres medidas y colocar la mayor en este campo evita el error de entrada más común." },
          { "kind": "p", "text": "<strong>Paso 5: Introduce el primer cateto.</strong> Escribe el valor de [[a]] en el campo Cateto a." },
          { "kind": "p", "text": "<strong>Paso 6: Introduce el segundo cateto.</strong> Escribe el valor de [[b]] en el campo Cateto b." },
          { "kind": "p", "text": "<strong>Paso 7: Introduce la hipotenusa.</strong> Escribe el valor de [[c]] en el campo Hipotenusa c." },
          { "kind": "p", "text": "<strong>Paso 8: Selecciona las unidades de medida adecuadas.</strong> Cada campo tiene su propio selector de unidades. Los tres lados deben usar unidades compatibles antes de sumarse; mezclar metros con centímetros corrompe la suma." },
          { "kind": "p", "text": "<strong>Paso 9: Haz clic en Calcular semiperímetro.</strong> La herramienta suma los tres lados y divide el total entre dos." },
          { "kind": "p", "text": "<strong>Paso 10: Revisa el semiperímetro mostrado.</strong> El resultado aparece con su unidad, por ejemplo [[[\\boxed{s=6\\text{ units}}]]] para el triángulo 3-4-5." },
          { "kind": "p", "text": "<strong>Paso 11: Comprueba los pasos de la solución.</strong> La calculadora muestra la sustitución y la división, para que puedas seguir la aritmética línea por línea." },
          { "kind": "p", "text": "<strong>Paso 12: Verifica que el resultado sea la mitad del perímetro completo.</strong> Duplica el resultado: para el 3-4-5, [[2\\times6=12]], que coincide con [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Paso 13: Usa Restablecer al empezar un cálculo nuevo.</strong> El botón Restablecer borra los tres campos para que el siguiente triángulo parta de un estado limpio." },
          { "kind": "h3", "text": "¿Qué representa cada campo?" },
          { "kind": "p", "text": "Los tres campos corresponden a los tres bordes del contorno. Cateto a y Cateto b aceptan los dos lados perpendiculares; Hipotenusa c acepta el lado más largo. La calculadora suma exactamente lo que introduces y divide el total a la mitad, así que el papel de cada campo es fijo: intercambiar un valor de cateto al campo de la hipotenusa cambia la suma y produce un semiperímetro erróneo." },
          { "kind": "h3", "text": "¿Por qué son importantes las unidades de medida?" },
          { "kind": "p", "text": "El semiperímetro se calcula sumando tres longitudes, y la suma requiere unidades compatibles. Sumar 3 metros a 40 centímetros sin conversión da un total sin sentido. El selector de unidades de cada campo te permite declarar la unidad que escribiste; elige selectores que describan las medidas reales para que la suma combine valores comparables." },
          { "kind": "h3", "text": "Cómo entender la pantalla del resultado" },
          { "kind": "p", "text": "La pantalla del resultado muestra el semiperímetro con su unidad lineal. Detrás, la calculadora realizó exactamente dos operaciones: sumó los tres lados y luego dividió el total entre dos. No interviene ningún otro cálculo, y la herramienta no calcula el área ni el inradio por sí sola; esas fórmulas son explicaciones de apoyo en esta guía, no salidas adicionales de la calculadora." },
          { "kind": "h3", "text": "Cómo entender los pasos de la solución" },
          { "kind": "p", "text": "El panel de pasos de la solución repite el cálculo: los valores de los lados introducidos, su total, la división entre dos y el resultado final. Este trabajo visible es la forma más rápida de detectar un error de escritura: si un paso muestra 4 donde querías escribir 40, el error es obvio antes de que la respuesta se use en otro lugar." }
        ]
      },
      "sec-examples": {
        "h2": "Ejemplos paso a paso del semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Los cuatro ejemplos siguientes mantienen los casos resueltos existentes y amplían sus explicaciones. Cada uno sustituye los tres lados, los suma, divide entre dos y luego verifica la respuesta." },
          { "kind": "h3", "text": "Ejemplo 1: Triángulo rectángulo 3-4-5" },
          { "kind": "p", "text": "Dado [[a=3,\\;b=4,\\;c=5]], la fórmula es [[s=\\frac{a+b+c}{2}]]. Sustituye: [[s=\\frac{3+4+5}{2}]]. Suma: [[s=\\frac{12}{2}]]. El resultado final es [[[\\boxed{s=6\\text{ units}}]]]. Verificación: [[P=2s=12]], que coincide con la suma directa [[3+4+5]]. El resultado es correcto porque cada borde del contorno se contó exactamente una vez antes de la división." },
          { "kind": "h3", "text": "Ejemplo 2: Triángulo rectángulo 5-12-13" },
          { "kind": "p", "text": "Dado [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], así que [[s=\\frac{30}{2}]], lo que da [[[\\boxed{s=15\\text{ units}}]]]. El perímetro completo es 30, y la mitad de 30 es 15. Como comprobación, [[5^2+12^2=13^2]] confirma el ángulo recto, así que las etiquetas de los lados son fiables." },
          { "kind": "h3", "text": "Ejemplo 3: Triángulo rectángulo 8-15-17" },
          { "kind": "p", "text": "Dado [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], así que [[s=\\frac{40}{2}]], lo que da [[[\\boxed{s=20\\text{ units}}]]]. Observa el patrón en los ejemplos: a medida que el triángulo crece, el semiperímetro crece al ritmo de los lados, siempre exactamente la mitad del perímetro." },
          { "kind": "h3", "text": "Ejemplo 4: Medidas de lados decimales" },
          { "kind": "p", "text": "Dado [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], así que [[s=\\frac{15}{2}]], lo que da [[[\\boxed{s=7.5\\text{ units}}]]]. Los valores decimales no cambian la fórmula: se aplica la misma secuencia de sumar y luego dividir. La comprobación pitagórica [[2.5^2+6^2=6.5^2]] confirma que estos lados forman genuinamente un triángulo rectángulo." }
        ],
        "imgAlt": "Triángulo 3-4-5 con pasos de cálculo: suma los lados para obtener 12, divide entre 2, el semiperímetro s es 6",
        "figcaption": "Suma los tres lados para obtener P = 12 y luego divide entre 2: el semiperímetro s = 6.",
        "table": {
          "headers": ["Triángulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro completo P", "Semiperímetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["La tabla muestra el patrón con claridad: cuando las tres dimensiones aumentan, el semiperímetro aumenta en proporción, manteniéndose siempre en exactamente la mitad del perímetro completo. Comparar las filas también revela que los triángulos semejantes escalan juntos; duplica cada lado y el semiperímetro también se duplica."]
      },
      "sec-practical": {
        "h2": "Aplicaciones reales del semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Una advertencia antes de los ejemplos: el semiperímetro no es normalmente la cantidad que se usa para comprar la mitad del borde o de la valla alrededor de un objeto triangular. Su verdadero papel es el de una medida geométrica intermedia, el peldaño hacia el inradio, las comprobaciones de área y los cálculos de diseño. Cada ejemplo siguiente es un modelo geométrico simplificado de triángulo rectángulo, y cada uno calcula el semiperímetro junto con el perímetro completo, el área y el inradio para que las relaciones sigan visibles." },
          { "kind": "h3", "text": "Ejemplo 1: Ventana triangular con un adorno circular decorativo" },
          { "kind": "p", "text": "Un modelo de ventana triangular tiene [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Semiperímetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; perímetro completo [[P=12\\text{ m}]]. Área [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] e inradio [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. El semiperímetro es lo que hace computable el inradio: convierte tres longitudes de lados en el único número que vincula el área con el radio del círculo tangente a los tres lados del modelo triangular idealizado." },
          { "kind": "h3", "text": "Ejemplo 2: Soporte metálico con un hueco circular" },
          { "kind": "p", "text": "Un soporte de triángulo rectángulo tiene [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Entonces [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] y [[P=30\\text{ cm}]]. El área [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] da un inradio [[r=\\frac{30}{15}=2\\text{ cm}]]. Este valor describe el radio del círculo inscrito en el triángulo idealizado y puede orientar estudios geométricos de holgura para un recorte circular. Por sí solo, no determina la seguridad estructural." },
          { "kind": "h3", "text": "Ejemplo 3: Hastial de tejado con un diseño de ventilación circular" },
          { "kind": "p", "text": "Un modelo simplificado de extremo de tejado en triángulo rectángulo tiene [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Semiperímetro [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; perímetro [[P=24\\text{ ft}]]. Área [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] e inradio [[r=\\frac{24}{12}=2\\text{ ft}]]. El semiperímetro convierte las tres longitudes de borde del hastial en el radio del círculo inscrito del modelo simplificado. La instalación real de la ventilación necesita medidas separadas de construcción y holgura más allá de esta geometría." },
          { "kind": "h3", "text": "Ejemplo 4: Diseño de jardín triangular" },
          { "kind": "p", "text": "Un modelo de jardín en triángulo rectángulo tiene [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Entonces [[s=\\frac{7+24+25}{2}=28\\text{ m}]] y [[P=56\\text{ m}]]. El área [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] produce un inradio [[r=\\frac{84}{28}=3\\text{ m}]]. El círculo inscrito es el círculo más grande que cabe dentro del triángulo idealizado tocando los tres lados, útil para colocar un macizo o una fuente circular en la fase de diseño." },
          { "kind": "h3", "text": "Ejemplo 5: Panel triangular de fabricación CNC" },
          { "kind": "p", "text": "Un panel triangular tiene [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Semiperímetro [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; perímetro [[P=40\\text{ cm}]]. Área [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] e inradio [[r=\\frac{60}{20}=3\\text{ cm}]]. El semiperímetro y el inradio sirven aquí como valores geométricos de referencia en el modelado CAD, por ejemplo al posicionar un elemento circular respecto a los bordes del panel." },
          { "kind": "h3", "text": "Ejemplo 6: Letrero triangular con un emblema circular" },
          { "kind": "p", "text": "Un panel de letrero tiene [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Entonces [[s=\\frac{9+12+15}{2}=18\\text{ in}]] y [[P=36\\text{ in}]]. El área [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] da un inradio [[r=\\frac{54}{18}=3\\text{ in}]]. El inradio ofrece una referencia matemática para el emblema circular inscrito máximo, sujeta a los márgenes reales y las restricciones de montaje del letrero real." },
          { "kind": "h3", "text": "Ejemplo 7: Placa triangular industrial" },
          { "kind": "p", "text": "Una placa en triángulo rectángulo tiene [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Semiperímetro [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; perímetro [[P=90\\text{ cm}]]. Área [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] e inradio [[r=\\frac{180}{45}=4\\text{ cm}]]. El semiperímetro apoya los cálculos geométricos de un panel industrial idealizado, como dimensionar un resalte circular que debe mantenerse alejado de los tres bordes." },
          { "kind": "h3", "text": "Ejemplo 8: Diseño de vitral triangular" },
          { "kind": "p", "text": "Una sección de vidrio en triángulo rectángulo tiene [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Entonces [[s=\\frac{12+16+20}{2}=24\\text{ in}]] y [[P=48\\text{ in}]]. El área [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] produce un inradio [[r=\\frac{96}{24}=4\\text{ in}]]. La relación es directa: el semiperímetro divide el contorno a la mitad, y dividir el área entre ese medio contorno da el radio del círculo inscrito para el trazado del diseño." },
          { "kind": "h3", "text": "Ejemplo 9: Parcela triangular medida por topografía" },
          { "kind": "p", "text": "Un modelo simplificado de parcela en triángulo rectángulo tiene [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Semiperímetro [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; perímetro [[P=70\\text{ m}]]. Área [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] e inradio [[r=\\frac{210}{35}=6\\text{ m}]]. En un modelo simplificado de agrimensura, el semiperímetro sirve como entrada compacta para las comprobaciones de área e inradio, por ejemplo al verificar un área de parcela calculada con la fórmula de Herón." },
          { "kind": "h3", "text": "Ejemplo 10: Marco triangular arquitectónico" },
          { "kind": "p", "text": "Un marco arquitectónico en triángulo rectángulo tiene [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Entonces [[s=\\frac{12+35+37}{2}=42\\text{ m}]] y [[P=84\\text{ m}]]. El área [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] da un inradio [[r=\\frac{210}{42}=5\\text{ m}]]. Este valor puede apoyar el modelado matemático de un elemento circular dentro del marco triangular, como una ventana redonda centrada en el incentro." },
          { "kind": "h3", "text": "Ejemplo 11: Diseño de suelo triangular grande" },
          { "kind": "p", "text": "Una sección de suelo en triángulo rectángulo tiene [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Semiperímetro [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; perímetro [[P=126\\text{ m}]]. Área [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] e inradio [[r=\\frac{630}{63}=10\\text{ m}]]. Aquí el semiperímetro conecta las medidas de los lados con la geometría del círculo inscrito del modelo: un número tiende un puente entre el contorno y el círculo más grande que cabe." },
          { "kind": "h3", "text": "Ejemplo 12: Placa triangular industrial de soporte" },
          { "kind": "p", "text": "Una placa grande en triángulo rectángulo tiene [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Entonces [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] y [[P=154\\text{ cm}]]. El área [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] produce un inradio [[r=\\frac{924}{77}=12\\text{ cm}]]. Estas medidas alimentan un modelo geométrico para un accesorio circular o un elemento de diseño interno, con el semiperímetro como el valor intermedio que permite calcular el inradio." }
        ],
        "table": {
          "headers": ["Aplicación práctica", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Semiperímetro s", "Área K", "Inradio r", "Unidad"],
          "rows": [
            ["Ventana triangular", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Soporte metálico", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Ventilación de hastial", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Diseño de jardín", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Panel CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Emblema de letrero", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Placa industrial", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Vitral", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Parcela medida", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Marco arquitectónico", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Diseño de suelo", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Placa de soporte", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Algunas advertencias se aplican a cada fila anterior. Cada aplicación es un modelo geométrico simplificado, no una especificación de construcción: las dimensiones reales necesitan verificación separada, la resistencia estructural no puede leerse a partir del semiperímetro, y las aberturas circulares reales pueden necesitar holguras adicionales de fabricación. El semiperímetro es un valor intermedio matemático, el inradio es el radio del círculo inscrito, y el círculo inscrito toca los tres lados."]
      },
      "sec-inradius": {
        "h2": "¿Cómo se relaciona el semiperímetro con el inradio de un triángulo rectángulo?",
        "blocks": [
          { "kind": "p", "text": "Esta es una de las secciones más importantes del artículo, porque el inradio es la razón principal por la que el semiperímetro existe como cantidad con nombre. El círculo inscrito es el círculo más grande que cabe dentro de un triángulo tocando los tres lados, y su radio se llama inradio, representado por [[r]]." },
          { "kind": "h3", "text": "Relación entre área y semiperímetro" },
          { "kind": "p", "text": "Para cualquier triángulo, el área, el inradio y el semiperímetro están vinculados por una sola fórmula compacta:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "donde [[K]] es el área del triángulo, [[r]] es el inradio y [[s]] es el semiperímetro. Reordenada, despeja el inradio:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Conocer el semiperímetro y el área, por tanto, permite calcular el inradio directamente: divide el área entre el semiperímetro. Este es el beneficio práctico del semiperímetro. Comprime tres longitudes de lados en un número que, junto con el área, revela el círculo inscrito." },
          { "kind": "h3", "text": "Fórmula especial del inradio para triángulos rectángulos" },
          { "kind": "p", "text": "Para un triángulo rectángulo, el área es [[K=\\frac{ab}{2}]] y el semiperímetro es [[s=\\frac{a+b+c}{2}]]. Sustituir ambos en [[r=\\frac{K}{s}]] da:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Simplificando:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "También existe una fórmula equivalente para el triángulo rectángulo que evita el área por completo:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Estas dos expresiones son equivalentes para un triángulo rectángulo gracias a la relación pitagórica: el álgebra colapsa una vez que se aplica [[a^2+b^2=c^2]]. Cualquiera de las dos formas da el mismo inradio; la segunda suele ser más rápida a mano." },
          { "kind": "h3", "text": "Ejemplo 3-4-5 completamente resuelto" },
          { "kind": "p", "text": "Dado [[a=3,\\;b=4,\\;c=5]]: semiperímetro [[s=\\frac{3+4+5}{2}=6]], área [[K=\\frac{3\\times4}{2}=6]], inradio [[r=\\frac{6}{6}]], así que [[[\\boxed{r=1}]]]. Verifica con el atajo: [[r=\\frac{3+4-5}{2}]], lo que da [[[\\boxed{r=1}]]]. Ambos métodos producen la misma respuesta porque son la misma matemática escrita de dos formas: una pasa por el área, la otra la cancela algebraicamente." },
          { "kind": "h3", "text": "¿Por qué es importante el semiperímetro para los cálculos del círculo inscrito?" },
          { "kind": "p", "text": "El semiperímetro es el puente entre el contorno del triángulo y su círculo inscrito. Los diseñadores lo usan al dimensionar holguras circulares dentro de piezas triangulares, al colocar elementos circulares inscritos en el diseño geométrico, al acotar diagramas de ingeniería y al trabajar en demostraciones matemáticas que relacionan el área con el radio. El inradio también conecta de vuelta con la verificación del área: si [[K]], [[r]] y [[s]] no satisfacen [[K=rs]], algo en la cadena está mal. Esta calculadora no calcula el inradio automáticamente; suministra el semiperímetro, y las fórmulas anteriores lo toman desde ahí." }
        ],
        "imgAlt": "Triángulo rectángulo 3-4-5 con círculo inscrito de radio 1; semiperímetro s = 6, área K = 6, r = K/s",
        "figcaption": "El círculo inscrito toca los tres lados; con s = 6 y K = 6, el inradio r = K / s = 1."
      },
      "sec-heron": {
        "h2": "¿Cómo se usa el semiperímetro en la fórmula de Herón?",
        "blocks": [
          { "kind": "p", "text": "La fórmula de Herón calcula el área de un triángulo a partir de las longitudes de sus tres lados, sin requerir una altura suministrada por separado. El semiperímetro es su ingrediente central: la fórmula se escribe en términos de [[s]] y de las diferencias entre [[s]] y cada lado." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Aquí [[K]] es el área del triángulo, [[s]] es el semiperímetro, y [[a]], [[b]], [[c]] son las tres longitudes de los lados." },
          { "kind": "h3", "text": "¿Por qué la fórmula de Herón usa el semiperímetro?" },
          { "kind": "p", "text": "El semiperímetro se calcula primero porque centra la expresión: cada factor [[s-a]], [[s-b]], [[s-c]] mide cuánto excede el medio perímetro a un lado. Multiplicar esos tres excesos por el propio [[s]] y tomar la raíz cuadrada convierte la información del contorno en área. La fórmula funciona para cualquier triángulo válido, no solo para triángulos rectángulos, por eso el semiperímetro se gana su lugar como herramienta geométrica general y no como una curiosidad del triángulo rectángulo." },
          { "kind": "h3", "text": "Ejemplo 3-4-5 completamente resuelto" },
          { "kind": "p", "text": "Dado [[a=3,\\;b=4,\\;c=5]], calcula primero el semiperímetro: [[s=\\frac{3+4+5}{2}=6]]. Sustituye en la fórmula de Herón: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Simplifica: [[K=\\sqrt{6\\times3\\times2\\times1}]], luego [[K=\\sqrt{36}]], lo que da [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "h3", "text": "Verifica el resultado con la fórmula del área del triángulo rectángulo" },
          { "kind": "p", "text": "La fórmula directa del área del triángulo rectángulo es [[K=\\frac{ab}{2}]]. Sustituyendo: [[K=\\frac{3\\times4}{2}]], lo que da [[[\\boxed{K=6\\text{ square units}}]]]. Ambas fórmulas producen la misma área, que es exactamente el punto: la fórmula de Herón, construida sobre el semiperímetro, confirma de forma independiente el cálculo más simple." },
          { "kind": "h3", "text": "¿Para qué sirve esto?" },
          { "kind": "p", "text": "Los triángulos rectángulos tienen una fórmula directa del área más simple, así que la fórmula de Herón rara vez es la ruta más rápida al área. Su valor está en comprobar los cálculos de área, en entender cómo las longitudes de los lados por sí solas determinan el área, en resolver problemas basados en longitudes de lados donde no se da ninguna altura, y en verificar soluciones matemáticas por un camino independiente. Siempre que dos fórmulas no relacionadas coinciden en el área, la confianza en la respuesta aumenta notablemente." }
        ],
        "imgAlt": "Fórmula de Herón aplicada a un triángulo 3-4-5: el semiperímetro 6 da área 6, verificada con K = ab/2",
        "figcaption": "Cinco pasos: lados, semiperímetro s = 6, sustitución de Herón, área K = 6, comprobación con K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "¿Cuál es la diferencia entre perímetro y semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "Las dos cantidades describen el mismo contorno a escalas distintas, y confundirlas es uno de los errores más frecuentes en el trabajo con triángulos. Esta sección traza la línea con claridad." },
          { "kind": "h3", "text": "El perímetro mide todo el contorno" },
          { "kind": "p", "text": "El perímetro es la longitud total alrededor del triángulo:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Representa el recorrido completo alrededor de los tres bordes. Para el triángulo 3-4-5, [[P=12]] unidades." },
          { "kind": "h3", "text": "El semiperímetro es la mitad del total" },
          { "kind": "p", "text": "El semiperímetro es la mitad del perímetro numérico:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Para el mismo triángulo 3-4-5, [[s=6]] unidades. Mismo triángulo, mismo contorno, pero el número se divide a la mitad porque las fórmulas que lo consumen, la fórmula de Herón y la relación del inradio, están escritas para el valor mitad." },
          { "kind": "h3", "text": "Comparación numérica" },
          { "kind": "p", "text": "Usa un triángulo rectángulo 6-8-10. Perímetro: [[P=6+8+10]], así que [[[\\boxed{P=24}]]]. Semiperímetro: [[s=\\frac{24}{2}]], así que [[[\\boxed{s=12}]]]. El perímetro responde «¿cuánto mide todo el contorno?»; el semiperímetro responde «¿cuál es el valor de medio contorno que necesita mi fórmula?»" },
          { "kind": "h3", "text": "¿Cuándo debes usar cada medida?" },
          { "kind": "p", "text": "Usa el perímetro cuando el trabajo concierna a la longitud completa del contorno: enmarcar una figura triangular, cercar una parcela triangular, estimar materiales de borde o medir molduras. Usa el semiperímetro cuando el trabajo sea matemático: la fórmula de Herón, cálculos del inradio, relaciones área-radio, demostraciones geométricas avanzadas o verificación independiente de un resultado de área. La regla práctica es simple: el trabajo físico de contornos toma [[P]]; el trabajo de fórmulas toma [[s]]." },
          { "kind": "h3", "text": "¿El semiperímetro es la mitad del área?" },
          { "kind": "p", "text": "No, y esta confusión necesita una corrección firme. El semiperímetro es una medida lineal: para el 3-4-5 es 6 unidades. El área es una medida bidimensional: para el 3-4-5 es 6 unidades cuadradas. Los números coinciden aquí por casualidad, pero las cantidades difieren en naturaleza. Dividir una longitud a la mitad nunca produce un área, igual que dividir un perímetro a la mitad nunca produce una superficie." }
        ],
        "table": {
          "headers": ["Medida", "Símbolo", "Fórmula", "Significado", "Unidad", "Aplicación común"],
          "rows": [
            ["Perímetro", "[[P]]", "[[P=a+b+c]]", "Longitud completa del contorno", "Lineal (m, ft, in)", "Vallas, marcos, molduras"],
            ["Semiperímetro", "[[s]]", "[[s=(a+b+c)/2]]", "Mitad de la longitud del contorno", "Lineal (m, ft, in)", "Fórmula de Herón, inradio"],
            ["Área", "[[K]]", "[[K=ab/2]]", "Superficie encerrada", "Cuadrada (m², ft², in²)", "Cobertura de superficies, material"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Cómo calcular el semiperímetro cuando falta un lado",
        "blocks": [
          { "kind": "p", "text": "La calculadora de esta página requiere las tres longitudes de los lados: no puede dividir a la mitad un total que no puede sumar. Si un lado es desconocido, calcúlalo primero con el teorema de Pitágoras y luego continúa con el semiperímetro como de costumbre." },
          { "kind": "h3", "text": "Hallar la hipotenusa" },
          { "kind": "p", "text": "Cuando se conocen ambos catetos, usa [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Ejemplo: [[a=6]], [[b=8]]. Entonces [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], lo que da [[[\\boxed{c=10}]]]. Ahora el semiperímetro sigue: [[s=\\frac{6+8+10}{2}]], así que [[[\\boxed{s=12}]]]." },
          { "kind": "h3", "text": "Hallar un cateto desconocido" },
          { "kind": "p", "text": "Cuando se conocen la hipotenusa y un cateto, usa [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Ejemplo: [[c=13]], [[b=12]]. Entonces [[a=\\sqrt{169-144}]], lo que da [[[\\boxed{a=5}]]]. Luego [[s=\\frac{5+12+13}{2}]], así que [[[\\boxed{s=15}]]]." },
          { "kind": "h3", "text": "¿Por qué debe hallarse primero el lado desconocido?" },
          { "kind": "p", "text": "El semiperímetro requiere el total completo de los tres lados, y un lado desconocido no puede simplemente ignorarse ni tratarse como cero. La forma de la hipotenusa de Pitágoras suma cuadrados; la forma del cateto los resta; aplicar la equivocada inventa un lado que no existe. Una vez recuperado el lado desconocido, la <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">calculadora de lados del triángulo rectángulo</a> puede verificar el valor, y el cálculo del semiperímetro avanza sobre terreno sólido. Estos pasos de lados desconocidos son métodos educativos de apoyo, no campos adicionales en la calculadora existente." }
        ]
      },
      "sec-properties": {
        "h2": "Propiedades importantes del semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro se comporta de forma predecible. Estas propiedades sirven también como comprobaciones mentales rápidas y como herramientas de razonamiento geométrico." },
          { "kind": "h3", "text": "El semiperímetro es mayor que la hipotenusa" },
          { "kind": "p", "text": "Para todo triángulo válido, [[a+b>c]]. Sumar [[c]] a ambos lados da [[a+b+c>2c]], y dividir entre dos produce [[[\\boxed{s>c}]]]. El semiperímetro siempre supera al lado más largo. Si un cálculo devuelve un [[s]] menor que [[c]], las etiquetas o la aritmética están mal." },
          { "kind": "h3", "text": "El semiperímetro es menor que la suma de los catetos" },
          { "kind": "p", "text": "La desigualdad triangular también da [[c<a+b]]. Sumar [[a+b]] a ambos lados produce [[a+b+c<2(a+b)]], y dividir a la mitad da [[[\\boxed{s<a+b}]]]. Así, el semiperímetro queda estrictamente entre la hipotenusa y la suma de los catetos: [[c<s<a+b]]. Para el 3-4-5: [[5<6<7]]. Este encaje es una comprobación rápida de plausibilidad para cualquier respuesta." },
          { "kind": "h3", "text": "Duplicar cada lado duplica el semiperímetro" },
          { "kind": "p", "text": "Escala el triángulo 3-4-5 por dos: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] da los lados 6, 8, 10. Entonces [[s_2=\\frac{2a+2b+2c}{2}]], así que [[[\\boxed{s_2=2s}]]]. Numéricamente, [[s_2=12=2\\times6]]. El semiperímetro es una medida lineal, así que el escalado uniforme lo escala por el mismo factor." },
          { "kind": "h3", "text": "Triplicar cada lado triplica el semiperímetro" },
          { "kind": "p", "text": "La misma linealidad vale para cualquier factor de escala. Triplica cada lado y la suma se triplica; dividir la suma triplicada a la mitad da tres veces el semiperímetro original: [[[\\boxed{s_2=3s}]]]. En general, escalar todos los lados por [[k]] escala [[s]] por [[k]]. Por eso los triángulos semejantes tienen semiperímetros proporcionales." },
          { "kind": "h3", "text": "¿Qué pasa cuando cambia solo un lado?" },
          { "kind": "p", "text": "Cambiar un lado manteniendo fijos los otros dos cambia el semiperímetro numérico en la mitad del cambio de longitud del lado, porque solo se mueve un término de la suma. Pero hay un matiz: las medidas resultantes deben seguir describiendo un triángulo válido y, para esta página, un triángulo rectángulo. Alargar la hipotenusa de un triángulo 3-4-5 a 6, por ejemplo, rompe [[a^2+b^2=c^2]], así que los nuevos números ya no describen un triángulo rectángulo. Si ajustas un lado de un triángulo rectángulo, los demás deben ajustarse para preservar el ángulo recto." },
          { "kind": "h3", "text": "Semiperímetro de un triángulo 45-45-90" },
          { "kind": "p", "text": "Iguala ambos catetos a [[k]]. La hipotenusa es [[c=k\\sqrt{2}]], así que el semiperímetro es [[s=\\frac{k+k+k\\sqrt{2}}{2}]], que se simplifica a [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]]. Los catetos iguales contribuyen simétricamente, y la hipotenusa irracional deja su marca en el resultado: para [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Semiperímetro de un triángulo 30-60-90" },
          { "kind": "p", "text": "Si el cateto más corto es [[k]], los lados son [[k]], [[k\\sqrt{3}]] y [[2k]]. Por tanto [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], lo que da [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]]. Numéricamente, con [[k=2]] los lados son 2, [[2\\sqrt{3}\\approx3.464]] y 4, así que [[s\\approx4.732]]. La forma radical exacta es preferible aquí: conserva la precisión completa para cualquier cálculo posterior de Herón o del inradio." }
        ]
      },
      "sec-units": {
        "h2": "Las unidades de medida en los cálculos del semiperímetro",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro funciona en cualquier unidad de longitud, metros, centímetros, milímetros, kilómetros, pies, pulgadas, yardas o millas, porque es solo una suma de longitudes dividida a la mitad. La unidad de la respuesta siempre coincide con la unidad de los datos. La única regla estricta es la coherencia: cada lado debe expresarse en la misma unidad antes de la suma." },
          { "kind": "h3", "text": "¿Por qué las tres medidas de los lados deben usar unidades compatibles?" },
          { "kind": "p", "text": "El semiperímetro se calcula sumando tres longitudes, y las longitudes en unidades distintas no se suman directamente. Sumar 3 metros a 40 centímetros como si ambos fueran números simples da 43 de nada significativo. La suma solo es válida cuando cada término comparte una unidad, así que la conversión viene antes de la suma, nunca después." },
          { "kind": "h3", "text": "Ejemplo resuelto de conversión de unidades" },
          { "kind": "p", "text": "Dado [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Convierte primero las pulgadas a pies: [[48\\text{ inches}=4\\text{ ft}]]. Ahora los tres lados están en pies: [[s=\\frac{3+4+5}{2}]], lo que da [[[\\boxed{s=6\\text{ ft}}]]]. Las medidas deben convertirse antes de la suma porque la fórmula suma números sin más; no puede saber que 48 significaba pulgadas a menos que lo conviertas." },
          { "kind": "h3", "text": "¿Cómo ayudan los selectores de unidades de la calculadora?" },
          { "kind": "p", "text": "Cada campo de esta página tiene su propio selector de unidad de medida, que te permite declarar la unidad del número que escribiste. Ajusta cada selector a la unidad real de su campo para que la herramienta combine los valores sobre una base coherente. No supongas funciones de conversión más allá de lo que muestra la interfaz: los selectores describen tus datos, y el semiperímetro se calcula a partir de los valores tal como se introdujeron." },
          { "kind": "h3", "text": "Trabajar con medidas de lados decimales" },
          { "kind": "p", "text": "Los decimales siguen la misma fórmula. Con [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], así que [[s=\\frac{15}{2}]], lo que da [[[\\boxed{s=7.5\\text{ units}}]]]. Mantén la precisión decimal completa durante la suma y la división; redondea solo la respuesta final mostrada, y solo si el problema lo pide." },
          { "kind": "h3", "text": "Trabajar con longitudes de lados irracionales" },
          { "kind": "p", "text": "Algunos triángulos rectángulos tienen lados irracionales, y la fórmula los trata igual. Toma un triángulo 45-45-90 con [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], lo que da la forma exacta [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], aproximadamente [[s\\approx1.7071]]. La notación radical exacta es valiosa en matemáticas porque preserva la precisión completa: cualquier uso posterior de [[s]] en la fórmula de Herón o en un cálculo del inradio parte del valor verdadero, no de uno redondeado." },
          { "kind": "h3", "text": "¿Por qué debes evitar redondear demasiado pronto?" },
          { "kind": "p", "text": "El redondeo prematuro inyecta error en cada cálculo posterior, y el semiperímetro suele ser un valor intermedio, no la respuesta final. Redondear [[s]] a dos decimales antes de introducirlo en la fórmula de Herón, donde aparece cuatro veces, agrava el error de forma notable. Mantén precisión suficiente durante los pasos intermedios: lleva el decimal completo o el radical exacto, y redondea una sola vez, al final, a la precisión que requiera el problema." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errores comunes al calcular el semiperímetro del triángulo rectángulo",
        "blocks": [
          { "kind": "p", "text": "Dieciséis errores explican casi todos los semiperímetros erróneos. Cada uno se explica con qué sale mal, por qué ocurre y el enfoque correcto." },
          { "kind": "p", "text": "<strong>1. Olvidar dividir el total entre dos.</strong> Sumar 3 + 4 + 5 = 12 y detenerse da el perímetro, no el semiperímetro. Termina siempre con la división: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Dividir cada lado antes de entender la fórmula.</strong> Dividir los lados a la mitad individualmente y luego sumar funciona aritméticamente pero oculta la estructura de la fórmula. Suma primero, divide una vez: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Olvidar incluir la hipotenusa.</strong> La hipotenusa es un borde del contorno. Omitirla en un triángulo 3-4-5 da [[(3+4)/2=3.5]] en lugar de 6." },
          { "kind": "p", "text": "<strong>4. Usar solo los dos catetos perpendiculares.</strong> El mismo error anterior con otro disfraz. Los catetos solos no son todo el contorno; la hipotenusa cierra la figura y debe contarse." },
          { "kind": "p", "text": "<strong>5. Confundir el semiperímetro con el perímetro completo.</strong> Informar 12 para un triángulo 3-4-5 responde «¿cuánto vale P?» cuando la pregunta pedía s. Recuerda: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Confundir el semiperímetro con el área.</strong> Para el 3-4-5 ambos valen 6 numéricamente, lo que invita a la confusión. Difieren en naturaleza: 6 unidades de longitud frente a 6 unidades cuadradas de superficie." },
          { "kind": "p", "text": "<strong>7. Informar el resultado en unidades cuadradas.</strong> Un semiperímetro de 6 cm cuadrados es un error de categoría. Dividir una longitud a la mitad deja una longitud: 6 cm, no 6 cm²." },
          { "kind": "p", "text": "<strong>8. Usar una hipotenusa incorrecta.</strong> Si el valor de la hipotenusa está mal, la suma está mal y el semiperímetro también. Verifica [[c=\\sqrt{a^2+b^2}]] cuando la hipotenusa se calculó en lugar de medirse." },
          { "kind": "p", "text": "<strong>9. Introducir medidas que no forman un triángulo rectángulo.</strong> Comprueba [[a^2+b^2=c^2]] antes de confiar en la etiqueta «triángulo rectángulo». La suma sigue funcionando, pero el significado geométrico cambia." },
          { "kind": "p", "text": "<strong>10. Mezclar centímetros y metros.</strong> Sumar 3 m a 40 cm no da 43 de nada. Convierte primero a una unidad." },
          { "kind": "p", "text": "<strong>11. Mezclar pies y pulgadas.</strong> La trampa clásica del sistema imperial. Convierte las pulgadas a pies (divide entre 12) antes de sumar, o ajusta los selectores de unidades para que coincidan." },
          { "kind": "p", "text": "<strong>12. Redondear demasiado pronto.</strong> Redondear [[\\sqrt{2}]] a 1.4 antes de sumar acumula error. Redondea solo la respuesta final." },
          { "kind": "p", "text": "<strong>13. Usar un lado desconocido sin calcularlo.</strong> Dos lados conocidos no son un semiperímetro. Recupera el tercero primero con el teorema de Pitágoras, luego suma y divide a la mitad." },
          { "kind": "p", "text": "<strong>14. Aplicar mal la fórmula de Herón.</strong> Los factores son [[s-a]], [[s-b]] y [[s-c]]: cada lado se resta del semiperímetro, no de otro lado. Confundir las restas rompe el área." },
          { "kind": "p", "text": "<strong>15. Confundir el inradio con el circunradio.</strong> El inradio [[r=K/s]] toca los tres lados desde dentro; el circunradio pasa por los vértices y vale [[c/2]] para un triángulo rectángulo. Círculos distintos, fórmulas distintas." },
          { "kind": "p", "text": "<strong>16. Suponer que el semiperímetro describe un recorrido físico de medio contorno.</strong> Es la mitad del total numérico, no una ruta marcada de medio recorrido alrededor del triángulo. Trátalo como el valor intermedio derivado que es." },
          { "kind": "p", "text": "<strong>Incorrecto frente a correcto, lado a lado.</strong> Dado [[a=3,\\;b=4,\\;c=5]]: incorrecto es [[s=3+4+5=12]], que omite la división e informa el perímetro completo. También es incorrecto [[s=(3+4)/2=3.5]], que omite la hipotenusa. Correcto es [[s=\\frac{3+4+5}{2}]], lo que da [[[\\boxed{s=6}]]]." }
        ]
      },
      "sec-verify": {
        "h2": "Cómo comprobar si tu respuesta del semiperímetro es correcta",
        "blocks": [
          { "kind": "p", "text": "Ocho comprobaciones independientes detectan casi todos los errores. El triángulo 3-4-5 demuestra cada una. Las comprobaciones independientes importan porque fallan de formas distintas: cuando métodos no relacionados coinciden, la respuesta se ha ganado la confianza." },
          { "kind": "p", "text": "<strong>Método 1: Duplica el semiperímetro.</strong> [[[\\boxed{P=2s}]]] debe igualar el perímetro completo: [[2\\times6=12=3+4+5]]. Si duplicar no reproduce la suma de los lados, la división o la suma salieron mal." },
          { "kind": "p", "text": "<strong>Método 2: Recalcula a partir de los tres lados.</strong> Vuelve a calcular [[s=\\frac{a+b+c}{2}]] desde cero: [[(3+4+5)/2=6]]. Una segunda pasada detecta errores de escritura y de aritmética." },
          { "kind": "p", "text": "<strong>Método 3: Verifica la relación pitagórica.</strong> Comprueba [[a^2+b^2=c^2]]: [[9+16=25]]. Esto confirma que los lados forman un triángulo rectángulo, lo que valida las etiquetas de los lados de las que depende el semiperímetro." },
          { "kind": "p", "text": "<strong>Método 4: Comprueba la hipotenusa.</strong> Confirma [[c>a]] y [[c>b]]: 5 es mayor que 3 y mayor que 4. Si la supuesta hipotenusa no es el lado más largo, las etiquetas están mal." },
          { "kind": "p", "text": "<strong>Método 5: Comprueba la desigualdad triangular.</strong> Confirma [[a+b>c]]: [[3+4=7>5]]. La suma de los catetos debe superar a la hipotenusa, o no existe ningún triángulo." },
          { "kind": "p", "text": "<strong>Método 6: Verifica la cota del semiperímetro.</strong> [[[\\boxed{s>c}]]] debe cumplirse: [[6>5]]. Esta sola desigualdad detecta un número sorprendente de errores de etiquetado." },
          { "kind": "p", "text": "<strong>Método 7: Comprueba las unidades.</strong> Confirma que las tres longitudes de los lados usan unidades compatibles y que el resultado es una medida lineal. Las unidades mezcladas invalidan la suma aunque la aritmética sea perfecta." },
          { "kind": "p", "text": "<strong>Método 8: Compara con los pasos de la solución de la calculadora.</strong> El resultado mostrado y los pasos del cálculo ayudan a identificar errores: si un paso muestra un lado mal escrito o una división omitida, el error es visible antes de que se use la respuesta." }
        ]
      },
      "sec-conclusion": {
        "h2": "La mitad del contorno, la comprensión completa",
        "blocks": [
          { "kind": "p", "text": "El semiperímetro de un triángulo rectángulo es una idea pequeña con largo alcance. Una suma y una división producen un número que permite calcular el inradio, potencia la fórmula de Herón y afina la verificación del área. La fórmula pide tres lados porque el contorno tiene tres bordes, y la hipotenusa se gana su lugar en la suma como el borde que cierra la figura. Todo lo demás en esta guía, los ejemplos resueltos, las doce aplicaciones, las propiedades, las conversiones de unidades, los dieciséis errores, las ocho comprobaciones de verificación, existe para proteger ese total dividido a la mitad de los pequeños errores de etiquetado y de unidades que producen respuestas erróneas con apariencia plausible." },
          { "kind": "p", "text": "Usa la calculadora de esta página siempre que los tres lados estén medidos, recupera un lado desconocido mediante el teorema de Pitágoras cuando no lo estén, y comprueba el resultado con las cotas c < s < a + b antes de que el número entre en un dibujo o un modelo. Cuando la pregunta gire hacia la superficie dentro del contorno, la fórmula de Herón y la calculadora de área están esperando; cuando gire hacia el círculo dentro del triángulo, el inradio está a una división de distancia." }
        ]
      }
    },
    "relatedHeading": "Explora las calculadoras relacionadas de triángulos rectángulos",
    "relatedIntro": "Cada una de estas herramientas extiende el cálculo del semiperímetro en una dirección: el contorno completo, la superficie, la ruta del área desde el semiperímetro, el círculo inscrito o los lados desconocidos que están detrás de todo.",
    "relatedItems": [
      "Calculadora del perímetro del triángulo rectángulo",
      "Calculadora del área del triángulo rectángulo",
      "Calculadora del área del triángulo rectángulo a partir del semiperímetro",
      "Calculadora del inradio del triángulo rectángulo",
      "Calculadora de lados del triángulo rectángulo"
    ],
    "faqHeading": "Preguntas frecuentes",
    "faqs": [
      {
        "question": "¿Cuál es la fórmula del semiperímetro de un triángulo rectángulo?",
        "answer": "La fórmula es s = (a + b + c) / 2, donde a y b son los dos catetos que forman el ángulo de 90 grados y c es la hipotenusa, el lado más largo. Suma las tres longitudes de los lados y luego divide el total entre dos. De forma equivalente, s = P / 2, donde P es el perímetro completo."
      },
      {
        "question": "¿Qué significa semiperímetro?",
        "answer": "Semiperímetro significa la mitad del perímetro. Semi significa mitad y perímetro significa la longitud completa del contorno, así que el semiperímetro es exactamente la mitad de la distancia total alrededor del triángulo. Es una medida geométrica derivada que se usa como valor intermedio en muchas fórmulas de triángulos."
      },
      {
        "question": "¿Por qué el semiperímetro es la mitad del perímetro?",
        "answer": "Esa es su definición: el semiperímetro se construye tomando el perímetro completo y dividiéndolo entre dos. El valor mitad resulta ser la cantidad para la que están escritas fórmulas como la fórmula de Herón y la relación del inradio K = rs, por eso se ganó su propio nombre y símbolo, s."
      },
      {
        "question": "¿Necesito los tres lados para calcular el semiperímetro?",
        "answer": "Sí. El semiperímetro es la mitad de la suma de las tres longitudes de los lados, así que cada lado debe conocerse, incluida la hipotenusa. Si falta un lado, recupéralo primero con el teorema de Pitágoras: c = √(a² + b²) para una hipotenusa desconocida, o a = √(c² − b²) para un cateto desconocido."
      },
      {
        "question": "¿Cuál es la diferencia entre perímetro y semiperímetro?",
        "answer": "El perímetro P = a + b + c es la longitud completa del contorno, mientras que el semiperímetro s = (a + b + c) / 2 es su mitad. Usa el perímetro para el trabajo físico de contornos, como cercar o enmarcar, y el semiperímetro para el trabajo de fórmulas, como la fórmula de Herón, los cálculos del inradio y las demostraciones geométricas. Para un triángulo 3-4-5, P = 12 y s = 6."
      },
      {
        "question": "¿El semiperímetro se mide en unidades cuadradas?",
        "answer": "No. El semiperímetro es una medida de longitud unidimensional, así que usa unidades lineales: metros, centímetros, pies o pulgadas, iguales que las longitudes de los lados. Las unidades cuadradas pertenecen al área. Informar un semiperímetro de 6 cm² es un error de categoría; la unidad correcta es 6 cm."
      },
      {
        "question": "¿Cuál es el semiperímetro de un triángulo rectángulo 3-4-5?",
        "answer": "Suma los lados: 3 + 4 + 5 = 12, y luego divide entre dos: s = 6 unidades. El perímetro completo es 12 unidades. Los lados satisfacen 3² + 4² = 5², lo que confirma el ángulo recto, y el semiperímetro 6 supera a la hipotenusa 5, como debe ocurrir en todo triángulo válido."
      },
      {
        "question": "¿Por qué se usa el semiperímetro en la fórmula de Herón?",
        "answer": "La fórmula de Herón, K = √(s(s − a)(s − b)(s − c)), calcula el área solo a partir de las longitudes de los lados, y está escrita en términos del semiperímetro s y de las diferencias s − a, s − b, s − c. Calcular primero s centra la expresión y la mantiene compacta. Para el 3-4-5, s = 6 da K = √(6 × 3 × 2 × 1) = 6 unidades cuadradas."
      },
      {
        "question": "¿Cómo se relaciona el semiperímetro con el inradio?",
        "answer": "El área, el inradio y el semiperímetro satisfacen K = rs, así que r = K / s. Para un triángulo rectángulo esto se simplifica a r = (a + b − c) / 2. Para el 3-4-5: s = 6, K = 6, así que r = 1. El semiperímetro es el puente que convierte tres longitudes de lados en el radio del círculo inscrito."
      },
      {
        "question": "¿Puedo calcular el semiperímetro si falta un lado?",
        "answer": "Sí, pero halla primero el lado desconocido. Con los catetos 6 y 8, la hipotenusa es √(36 + 64) = 10, así que s = (6 + 8 + 10) / 2 = 12. Con la hipotenusa 13 y el cateto 12, el cateto desconocido es √(169 − 144) = 5, así que s = (5 + 12 + 13) / 2 = 15. La calculadora de esta página necesita los tres lados introducidos."
      },
      {
        "question": "¿Cómo puedo verificar mi respuesta del semiperímetro?",
        "answer": "Duplícala: 2s debe igualar el perímetro completo a + b + c. Comprueba que s supere a la hipotenusa (s > c) y quede por debajo de la suma de los catetos (s < a + b). Confirma la relación pitagórica a² + b² = c², verifica que los tres lados compartan una unidad y compara con los pasos de la solución de la calculadora."
      },
      {
        "question": "¿Se puede usar el semiperímetro para calcular el área del triángulo?",
        "answer": "Sí, mediante la fórmula de Herón: K = √(s(s − a)(s − b)(s − c)). Es una comprobación independiente de la fórmula directa del triángulo rectángulo K = ab / 2. Para el 3-4-5 ambas dan 6 unidades cuadradas. La fórmula de Herón es más valiosa cuando no se conoce ninguna altura o cuando quieres una segunda computación no relacionada que confirme el área."
      }
    ]
  }
};
