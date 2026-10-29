export const SINE_TRANSLATIONS_BATCH2 = {
  "pt":   {
    "extraSections": [
      {
        "h2": "Como Encontrar o Lado Oposto Usando o Seno",
        "paragraphs": [
          "Uma escada de 5 m está encostada em uma parede formando um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de 65 graus com o solo. Você conhece o comprimento da escada e o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a>, mas a que altura ela alcança? Essa altura vertical é o cateto oposto de um triângulo retângulo, e o seno a encontra diretamente. Uma <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> de <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> por seno recebe a hipotenusa e um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> agudo como entradas e retorna o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto, sem precisar de tabelas trigonométricas manuais.",
          "Este guia explica a fórmula do seno desde os fundamentos: o que o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto significa, por que o seno usa a hipotenusa, como identificar os lados corretos em qualquer orientação de diagrama e como aplicar o resultado a medições reais. A fórmula é a = c × sin(A), onde a é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A, c é a hipotenusa e A é medido em graus. Diferentemente de uma <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> pitagórica que precisa de dois lados, esta ferramenta funciona quando você conhece um <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> e um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a>."
        ]
      },
      {
        "h2": "Entendendo o Lado Oposto e a Hipotenusa",
        "paragraphs": [],
        "customHtml": "<h3>O Que É um Triângulo Retângulo?</h3>\n<p>Um triângulo retângulo contém um ângulo que mede exatamente 90 graus. Os outros dois ângulos são agudos (cada um menor que 90 graus) e complementares, ou seja, somam 90 graus. Se o ângulo A é 36.87 graus, o outro ângulo agudo B deve ser 53.13 graus. Os cálculos com seno exigem essa estrutura de ângulo reto porque as definições das razões dependem da relação perpendicular entre os catetos.</p>\n<h3>O Que É a Hipotenusa?</h3>\n<p>A hipotenusa fica oposta ao ângulo reto e é sempre o lado mais longo. Ela é rotulada como c por convenção. Para encontrá-la em um diagrama rotacionado, procure o lado que não toca o marcador de ângulo reto. Nesta calculadora, você insere a hipotenusa como valor conhecido.</p>\n<h3>O Que É o Lado Oposto?</h3>\n<p>O lado oposto é o cateto diretamente oposto ao ângulo de referência A. Para o ângulo A, o lado a é oposto e o lado b é adjacente. Se você mudar sua referência para o ângulo B, os rótulos se invertem: o lado b se torna oposto e o lado a se torna adjacente. A hipotenusa nunca muda; ela é sempre c, oposta ao ângulo de 90 graus.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"Triângulo retângulo com o ângulo A no canto inferior esquerdo, cateto oposto a, cateto adjacente b e hipotenusa c rotulados\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomia do seno: ângulo A no canto inferior esquerdo, cateto oposto a vertical, cateto adjacente b ao longo da base, hipotenusa c oposta ao ângulo reto.</figcaption>\n</figure>"
      },
      {
        "h2": "O Que É Seno em um Triângulo Retângulo?",
        "paragraphs": [],
        "customHtml": "<p>O seno expressa uma razão simples: para um dado ângulo agudo, o cateto oposto dividido pela hipotenusa sempre resulta no mesmo número. Esse número é sin(A). Se o ângulo A é 30 graus, sin(30°) = 0.5, o que significa que o lado oposto é exatamente metade da hipotenusa, não importa quão grande ou pequeno seja o triângulo.</p>\n<p>A razão não tem unidades porque as unidades se cancelam: metros divididos por metros deixam um número puro. Para encontrar o lado oposto, reordene a razão. Comece com sin(A) = a / c. Multiplique ambos os lados por c. O c no denominador se cancela, restando <strong>a = c × sin(A)</strong>. A fórmula multiplica a hipotenusa conhecida pelo seno do ângulo conhecido.</p>\n<p>Para qualquer ângulo agudo válido (entre 0 e 90 graus), sin(A) está entre 0 e 1. Isso garante que o cateto oposto seja mais curto que a hipotenusa, o que corresponde à geometria: nenhum cateto pode exceder a hipotenusa.</p>\n<h3>Entendendo SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA é um recurso mnemônico para as três razões básicas. SOH: Seno = Oposto / Hipotenusa. CAH: Cosseno = Adjacente / Hipotenusa. TOA: Tangente = Oposto / Adjacente. Para esta página, concentre-se em SOH. O mnemônico ajuda você a escolher a razão certa, mas você ainda precisa identificar corretamente qual lado é oposto ao seu ângulo de referência.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"Triângulo retângulo destacando o cateto oposto a e a hipotenusa c com sin(A) igual a a dividido por c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">A razão seno: divida o cateto oposto a destacado pela hipotenusa c destacada para obter sin(A).</figcaption>\n</figure>"
      },
      {
        "h2": "Como Usar a Calculadora de Lado por Seno do Triângulo Retângulo",
        "paragraphs": [
          "Siga estas etapas para obter um resultado preciso."
        ],
        "listTitle": "Etapas:",
        "listItems": [
          "Identifique o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto no seu triângulo. Confirme que um canto mede 90 graus.",
          "Identifique o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> agudo conhecido A. Certifique-se de que não é o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
          "Localize a hipotenusa c. Ela é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto, sempre o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> mais longo.",
          "Identifique o cateto oposto a. Ele fica diretamente oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A.",
          "Digite o comprimento da hipotenusa c no primeiro campo de entrada.",
          "Digite o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A em graus no segundo campo.",
          "Selecione a unidade de medida que corresponde à sua entrada de hipotenusa.",
          "Pressione Calcular. O resultado mostra o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto a com as etapas da solução.",
          "Revise as etapas para confirmar que a fórmula e a substituição correspondem ao seu problema.",
          "Verifique se a é mais curto que c. Se não for, verifique qual lado você inseriu como hipotenusa."
        ]
      },
      {
        "h2": "Como Calcular o Lado Oposto Usando o Seno",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>Exemplo 1: Um Triângulo Retângulo Básico 3-4-5</h3>\n<p><strong>Dados:</strong> c = 5 cm, A = 36.87°. <strong>Encontre:</strong> a.</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 5 × sin(36.87°)</p>\n<p><strong>Cálculo:</strong> sin(36.87°) ≈ 0.6, então a ≈ 5 × 0.6 = 3</p>\n<p><strong>Resposta:</strong> <strong>a = 3 cm</strong></p>\n<p>O triângulo 3-4-5 é o triângulo retângulo mais familiar. Aqui o lado oposto resulta em exatamente 3 cm porque sin(36.87°) é 0.6 com a precisão mostrada.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 2: Um Ângulo Especial de 30 Graus</h3>\n<p><strong>Dados:</strong> c = 10 m, A = 30°. <strong>Encontre:</strong> a.</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 10 × sin(30°)</p>\n<p><strong>Cálculo:</strong> sin(30°) = 0.5 exatamente, então a = 10 × 0.5 = 5</p>\n<p><strong>Resposta:</strong> <strong>a = 5 m</strong></p>\n<p>Com 30 graus, o lado oposto é exatamente metade da hipotenusa. Ângulos especiais como 30°, 45° e 60° têm valores de seno limpos que valem a pena lembrar.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 3: Uma Medida Decimal</h3>\n<p><strong>Dados:</strong> c = 12 ft, A = 60°. <strong>Encontre:</strong> a.</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 12 × sin(60°)</p>\n<p><strong>Cálculo:</strong> sin(60°) ≈ 0.8660254, então a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>Mantenha precisão total no valor do seno durante o cálculo e arredonde apenas a resposta final. Arredondar sin(60°) para 0.87 no início daria 10.44 ft, um erro pequeno, mas evitável.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 4: Um Ângulo Íngreme</h3>\n<p><strong>Dados:</strong> c = 7.5 m, A = 42°. <strong>Encontre:</strong> a.</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 7.5 × sin(42°)</p>\n<p><strong>Cálculo:</strong> sin(42°) ≈ 0.6691306, então a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>À medida que o ângulo cresce em direção a 90 graus, o lado oposto se aproxima do comprimento total da hipotenusa. Em 42°, ele já é cerca de 67% da hipotenusa.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"Cálculo de seno passo a passo: hipotenusa de 10 m, ângulo de 30 graus, lado oposto igual a 5 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Solução resolvida: a = 10 × sin(30°) = 5 m, com cada etapa de substituição mostrada.</figcaption>\n</figure>"
      },
      {
        "h2": "Exemplos Reais de Cálculos com Seno",
        "paragraphs": [
          "Estes exemplos mostram como a fórmula do seno resolve problemas práticos de medição. Em cada caso, o comprimento inclinado ou diagonal conhecido é a hipotenusa, e a distância vertical desejada é o cateto oposto."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>Exemplo 5: Encontrando a Altura que uma Escada Alcança</h3>\n<p><strong>Dados:</strong> Uma escada de 5 m encostada a 65° do solo. <strong>Encontre:</strong> a altura que ela alcança (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 5 × sin(65°)</p>\n<p><strong>Cálculo:</strong> sin(65°) ≈ 0.9063078, então a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>A escada é a hipotenusa e a altura da parede é oposta ao ângulo do solo. Note que apenas essa altura não diz se a escada está posicionada com segurança.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 6: A Subida de uma Rampa Suave</h3>\n<p><strong>Dados:</strong> Uma rampa tem 8 m de comprimento com uma inclinação de 6°. <strong>Encontre:</strong> a elevação vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 8 × sin(6°)</p>\n<p><strong>Cálculo:</strong> sin(6°) ≈ 0.1045285, então a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Ângulos pequenos geram subidas pequenas. Com 6 graus, a rampa sobe menos de um metro ao longo de seus 8 m de comprimento.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 7: Uma Corda Curta a 30 Graus</h3>\n<p><strong>Dados:</strong> Uma corda de 4.5 m pende a 30° da horizontal. <strong>Encontre:</strong> a queda vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 4.5 × sin(30°)</p>\n<p><strong>Cálculo:</strong> sin(30°) = 0.5, então a = 4.5 × 0.5 = 2.25</p>\n<p><strong>Resposta:</strong> <strong>a = 2.25 m</strong></p>\n<p>O ângulo especial de 30 graus torna isso exato: o componente vertical é precisamente metade do comprimento da corda.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 8: Um Cabo com 20 Metros de Extensão</h3>\n<p><strong>Dados:</strong> Um cabo de 20 m de comprimento cede a 55°. <strong>Encontre:</strong> o componente vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 20 × sin(55°)</p>\n<p><strong>Cálculo:</strong> sin(55°) ≈ 0.8191520, então a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>Ângulos mais íngremes aproximam o lado oposto da hipotenusa. Em 55°, o componente vertical é cerca de 82% do comprimento do cabo.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 9: Uma Rampa Longa com Inclinação Suave</h3>\n<p><strong>Dados:</strong> Uma rampa de 150 m sobe a 12°. <strong>Encontre:</strong> a elevação total (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 150 × sin(12°)</p>\n<p><strong>Cálculo:</strong> sin(12°) ≈ 0.2079117, então a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>Mesmo uma inclinação suave de 12 graus produz uma elevação de 31 m em 150 m de rampa. Rampas longas acumulam altura rapidamente.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 10: Uma Linha de Visada de Topografia</h3>\n<p><strong>Dados:</strong> Uma linha de visada de 40 m está inclinada 50° acima da horizontal. <strong>Encontre:</strong> a diferença de elevação (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 40 × sin(50°)</p>\n<p><strong>Cálculo:</strong> sin(50°) ≈ 0.7660444, então a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>Os topógrafos usam isso para converter uma distância inclinada medida e um ângulo em uma mudança vertical de elevação.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 11: Um Elo Mecânico em Milímetros</h3>\n<p><strong>Dados:</strong> Um elo de 850 mm de comprimento está a 25°. <strong>Encontre:</strong> sua projeção vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 850 × sin(25°)</p>\n<p><strong>Cálculo:</strong> sin(25°) ≈ 0.4226183, então a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>A fórmula funciona de forma idêntica em milímetros. Mantenha o decimal extra durante o cálculo: 359.2255 arredonda para 359.23, não para 359.30.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 12: A Elevação de uma Caibra de Telhado</h3>\n<p><strong>Dados:</strong> Um caibro de 18 m de comprimento está inclinado a 35°. <strong>Encontre:</strong> a elevação vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 18 × sin(35°)</p>\n<p><strong>Cálculo:</strong> sin(35°) ≈ 0.5735764, então a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>Os telhadores medem o caibro (hipotenusa) e o ângulo de inclinação, depois usam o seno para descobrir a que altura o pico do telhado fica acima do apoio na parede.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 13: Uma Longa Queda de Tirolesa</h3>\n<p><strong>Dados:</strong> Uma tirolesa de 250 m desce a 18°. <strong>Encontre:</strong> a queda total (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 250 × sin(18°)</p>\n<p><strong>Cálculo:</strong> sin(18°) ≈ 0.3090170, então a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>O cabo da tirolesa é a hipotenusa; a queda é o cateto oposto. Este é um modelo simplificado em linha reta do passeio.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 14: Uma Tábua Curta em Ângulo Suave</h3>\n<p><strong>Dados:</strong> Uma tábua de 6 m inclina-se a 8°. <strong>Encontre:</strong> a altura da extremidade elevada (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 6 × sin(8°)</p>\n<p><strong>Cálculo:</strong> sin(8°) ≈ 0.1391731, então a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Com 8 graus, a extremidade elevada fica a menos de um metro de altura. Ângulos suaves são úteis quando você precisa de uma elevação delicada.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 15: Uma Força Decomposta em Componentes</h3>\n<p><strong>Dados:</strong> Uma força de 100 N puxa a 30° acima da horizontal. <strong>Encontre:</strong> o componente vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 100 × sin(30°)</p>\n<p><strong>Cálculo:</strong> sin(30°) = 0.5, então a = 100 × 0.5 = 50</p>\n<p><strong>Resposta:</strong> <strong>a = 50 N</strong></p>\n<p>Na física, o vetor de força é a hipotenusa e seu componente vertical é o cateto oposto. A mesma fórmula de seno se aplica a forças, velocidades e qualquer outra grandeza vetorial.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 16: Um Braço de Suporte de Toldo Curto</h3>\n<p><strong>Dados:</strong> Um braço de suporte de 3.2 ft forma um ângulo de 48°. <strong>Encontre:</strong> o alcance vertical (a).</p>\n<p><strong>Fórmula:</strong> a = c × sin(A)</p>\n<p><strong>Substituição:</strong> a = 3.2 × sin(48°)</p>\n<p><strong>Cálculo:</strong> sin(48°) ≈ 0.7431448, então a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>Resposta:</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>Projetos em pequena escala usam a mesma matemática. O braço de suporte é a hipotenusa; o alcance vertical é o que a fórmula do seno retorna.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"Dois exemplos práticos de seno: altura da escada de 4.53 m e elevação da rampa de 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Uso prático do seno: uma escada de 5 m a 65° alcança cerca de 4.53 m de altura; uma rampa de 150 m a 12° sobe cerca de 31.19 m.</figcaption>\n</figure>"
      },
      {
        "h2": "Seno vs Cosseno vs Tangente: Qual Usar",
        "paragraphs": [],
        "customHtml": "<p>Três razões podem encontrar um lado a partir de um ângulo e da hipotenusa, mas cada uma encontra um lado diferente. Escolher a errada é o erro mais comum nessas páginas.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Conhecido</th><th class=\"border px-4 py-2 text-left\">Desejado</th><th class=\"border px-4 py-2 text-left\">Usar</th><th class=\"border px-4 py-2 text-left\">Fórmula</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">lado oposto a</td><td class=\"border px-4 py-2\">seno</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">lado adjacente b</td><td class=\"border px-4 py-2\">cosseno</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">lado oposto a</td><td class=\"border px-4 py-2\">tangente</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>Use o seno quando a hipotenusa for conhecida e você precisar do lado oposto ao ângulo. Use o cosseno quando precisar do lado ao lado do ângulo. Use a tangente quando a hipotenusa for desconhecida, mas o cateto adjacente for conhecido. Se você tem o ângulo e precisa da hipotenusa, reordene: c = a / sin(A).</p>"
      },
      {
        "h2": "Como o Ângulo Altera o Lado Oposto",
        "paragraphs": [],
        "customHtml": "<p>Para uma hipotenusa fixa, um ângulo maior produz um lado oposto maior. A relação não é linear: o seno cresce rapidamente no início e depois se achata à medida que o ângulo se aproxima de 90 graus.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Ângulo A (c = 10 m)</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">Lado oposto a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>Dobrar o ângulo não dobra o lado. Passar de 30° para 60° aumenta o lado oposto de 5.00 m para 8.66 m, um fator de cerca de 1.73, não 2. É por isso que você não pode estimar resultados de seno por proporção simples; sempre calcule sin(A) diretamente.</p>"
      },
      {
        "h2": "Graus, Unidades e Arredondamento",
        "paragraphs": [
          "Esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> espera o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A em graus. Se seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> estiver em radianos, converta primeiro: graus = radianos × (180 / π). Um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de 0.5 radianos é cerca de 28.65 graus.",
          "A hipotenusa e o resultado compartilham a mesma unidade. Insira c em metros e a sai em metros; insira c em pés e a sai em pés. Nunca misture unidades: uma hipotenusa em metros com expectativa de polegadas exige uma conversão antes ou depois do cálculo.",
          "Mantenha precisão total durante a multiplicação pelo seno e arredonde apenas a resposta final. Para trabalhos de construção, arredondar para o milímetro mais próximo ou para o dezesseis avos de polegada mais próximo geralmente é suficiente; para trabalhos escolares, duas casas decimais é o padrão. Relatar seis decimais a partir de um ângulo medido aproximadamente implica uma precisão que você não tem."
        ]
      },
      {
        "h2": "Erros Comuns em Cálculos com Seno",
        "paragraphs": [
          "Estes são os erros que aparecem com mais frequência. Cada um tem uma correção simples."
        ],
        "listTitle": "12 erros a evitar:",
        "listItems": [
          "Usar o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> adjacente como hipotenusa. A hipotenusa é sempre oposta ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto e é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> mais longo.",
          "Usar o cosseno em vez do seno. O cosseno retorna o cateto adjacente, não o cateto oposto que você quer aqui.",
          "Inserir o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A em radianos. Esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> espera graus; 0.5 radianos inseridos como 0.5 graus dão uma resposta extremamente errada.",
          "Medir o ângulo a partir do vértice errado. O lado oposto é definido em relação ao ângulo A especificamente.",
          "Esperar um resultado maior que a hipotenusa. Como sin(A) é no máximo 1, a nunca pode exceder c.",
          "Inserir o cateto conhecido como c quando ele é na verdade um cateto. Verifique novamente se sua entrada de hipotenusa é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto.",
          "Arredondar sin(A) antes de multiplicar. Arredonde apenas a resposta final para evitar o acúmulo de erro.",
          "Misturar unidades entre as entradas e as expectativas, como inserir metros, mas ler o resultado como pés.",
          "Usar o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> B em vez do <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A. Se seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> conhecido estiver no outro vértice agudo, os rótulos de oposto e adjacente se invertem.",
          "Esquecer que o ângulo deve ser agudo (entre 0 e 90 graus). Uma entrada de 90 graus colapsa o triângulo.",
          "Confundir seno com seno inverso. Esta página calcula um lado a partir de um ângulo; a função inversa calcula um ângulo a partir dos lados.",
          "Confiar em uma medição aproximada de campo até seis decimais. Adapte a precisão relatada à precisão da sua medição."
        ]
      },
      {
        "h2": "Como Verificar Sua Resposta",
        "paragraphs": [],
        "customHtml": "<p>Três verificações independentes confirmam um resultado de seno. Use pelo menos uma antes de confiar na resposta.</p>\n<h3>Método 1: Verifique a razão</h3>\n<p>Divida o resultado pela hipotenusa e compare com sin(A). Para o Exemplo 1: 3 / 5 = 0.6, e sin(36.87°) ≈ 0.6. Eles coincidem.</p>\n<h3>Método 2: Verifique com Pitágoras</h3>\n<p>Encontre o cateto adjacente com b = √(c² − a²), depois verifique se a² + b² = c². Para o Exemplo 1: b = √(25 − 9) = 4, e 9 + 16 = 25.</p>\n<h3>Método 3: Verifique o ângulo complementar</h3>\n<p>Calcule o ângulo B = 90° − A, depois verifique com o cosseno: b deve ser igual a c × cos(A). Para o Exemplo 1: 5 × cos(36.87°) ≈ 5 × 0.8 = 4, igual ao b encontrado acima.</p>"
      },
      {
        "h2": "Conclusão",
        "paragraphs": [
          "A fórmula do seno a = c × sin(A) transforma uma hipotenusa e um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> conhecidos no <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto em uma multiplicação. Identifique a hipotenusa, confirme que seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> está em graus e é agudo, multiplique e verifique se o resultado é menor que a hipotenusa.",
          "Para o problema inverso, encontrar um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> a partir de lados conhecidos, use a <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">Calculadora de Ângulo por Seno do Triângulo Retângulo</a>. Para o cateto adjacente, use a <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">Calculadora de Lado por Cosseno do Triângulo Retângulo</a>."
        ]
      }
    ],
    "faqs": [
      {
        "question": "O que a = c × sin(A) calcula?",
        "answer": "Ela calcula o comprimento do <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto a em um triângulo retângulo. Você precisa da hipotenusa c e de um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> agudo A para usar esta fórmula."
      },
      {
        "question": "Por que uso o seno em vez do cosseno aqui?",
        "answer": "O seno relaciona o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto à hipotenusa. O cosseno relaciona o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> adjacente à hipotenusa. Como esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> encontra o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto, o seno é a função correta."
      },
      {
        "question": "O resultado pode ser maior que a hipotenusa?",
        "answer": "Não. O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto é sempre menor que a hipotenusa em um triângulo retângulo. Se seu resultado for maior, uma das entradas está errada."
      },
      {
        "question": "E se meu ângulo for exatamente 90 graus?",
        "answer": "Uma entrada de 90 graus não é válida aqui. Em um triângulo retângulo, os dois ângulos agudos devem estar cada um entre 0 e 90 graus. O <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de 90 graus já está fixado no vértice do <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto."
      },
      {
        "question": "O ângulo precisa estar em graus?",
        "answer": "Sim. Esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> espera o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A em graus. Se seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> estiver em radianos, converta-o para graus primeiro multiplicando por 180 e dividindo por pi."
      },
      {
        "question": "Qual a diferença em relação à calculadora de cosseno?",
        "answer": "A <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> de seno encontra o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A (a = c × sin(A)). A <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">calculadora de cosseno</a> encontra o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> adjacente ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A (b = c × cos(A)). Mesmas entradas, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> de saída diferente."
      },
      {
        "question": "Posso usar isso para vetores de força na física?",
        "answer": "Sim. Um vetor é a hipotenusa e seu componente vertical é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto. Uma força de 100 N a 30° acima da horizontal tem um componente vertical de 100 × sin(30°) = 50 N."
      },
      {
        "question": "Quais unidades devo usar?",
        "answer": "Qualquer unidade de comprimento consistente funciona: metros, pés, polegadas, milímetros. O resultado usa a mesma unidade da hipotenusa que você inserir. Não misture unidades dentro de um cálculo."
      },
      {
        "question": "Por que minha resposta é um pouco diferente da do livro?",
        "answer": "Pequenas diferenças vêm do arredondamento do valor do seno em diferentes etapas. Mantenha precisão total durante a multiplicação e arredonde apenas a resposta final para corresponder ao arredondamento do livro."
      },
      {
        "question": "O ângulo pode ser maior que 90 graus?",
        "answer": "Não. O ângulo A deve ser agudo (entre 0 e 90 graus) para esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a>. Ângulos obtusos não ocorrem como <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de referência em um triângulo retângulo."
      },
      {
        "question": "Como encontro a hipotenusa se conheço o lado oposto e o ângulo?",
        "answer": "Reordene a fórmula: c = a / sin(A). Se a = 3 e A = 36.87°, então c = 3 / 0.6 = 5."
      },
      {
        "question": "O seno funciona quando o triângulo está rotacionado ou espelhado?",
        "answer": "Sim. A rotação não muda qual <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> é oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A. Identifique sempre primeiro o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> oposto ao seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de referência e depois aplique a = c × sin(A)."
      }
    ]
  },
  "bn":   {
    "extraSections": [
      {
        "h2": "সাইন ব্যবহার করে বিপরীত বাহু কীভাবে বের করবেন",
        "paragraphs": [
          "একটি 5 m মই দেয়ালের গায়ে হেলান দিয়ে মাটির সাথে 65-ডিগ্রি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> তৈরি করেছে। আপনি মইয়ের দৈর্ঘ্য এবং <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> জানেন, কিন্তু এটি কত উঁচুতে পৌঁছায়? সেই উল্লম্ব উচ্চতাই একটি সমকোণী ত্রিভুজের বিপরীত বাহু, এবং সাইন তা সরাসরি নির্ণয় করে। একটি সাইন <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> অতিভুজ এবং একটি সূক্ষ্ম <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> ইনপুট হিসেবে নেয় এবং বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>টি ফিরিয়ে দেয়, হাতে-করা ত্রিকোণমিতি সারণি ছাড়াই।",
          "এই নির্দেশিকায় সাইন সূত্রটি মূল ভিত্তি থেকে ব্যাখ্যা করা হয়েছে: বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বলতে কী বোঝায়, সাইন কেন অতিভুজ ব্যবহার করে, যেকোনো চিত্রের অবস্থানে সঠিক বাহুগুলো কীভাবে চিনবেন, এবং ফলাফলটি বাস্তব পরিমাপে কীভাবে প্রয়োগ করবেন। সূত্রটি হলো a = c × sin(A), যেখানে a হলো <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> (<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর বিপরীতে), c হলো অতিভুজ, এবং A ডিগ্রিতে পরিমাপ করা হয়। পিথাগোরীয় <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a>-এর মতো দুটি বাহুর প্রয়োজন হয় না; এই সরঞ্জামটি তখনও কাজ করে যখন আপনি একটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> এবং একটি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> জানেন।"
        ]
      },
      {
        "h2": "বিপরীত বাহু এবং অতিভুজ বোঝা",
        "paragraphs": [],
        "customHtml": "<h3>সমকোণী ত্রিভুজ কী?</h3>\n<p>একটি সমকোণী ত্রিভুজে একটি কোণ থাকে যার পরিমাপ ঠিক 90 ডিগ্রি। বাকি দুটি কোণ সূক্ষ্ম (প্রতিটি 90 ডিগ্রির কম) এবং পূরক, অর্থাৎ এদের যোগফল 90 ডিগ্রি। যদি কোণ A 36.87 ডিগ্রি হয়, তাহলে অপর সূক্ষ্মকোণ B অবশ্যই 53.13 ডিগ্রি হবে। সাইন গণনার জন্য এই সমকোণী কাঠামো প্রয়োজন, কারণ অনুপাতের সংজ্ঞাগুলো বাহুগুলোর লম্ব সম্পর্কের উপর নির্ভর করে।</p>\n<h3>অতিভুজ কী?</h3>\n<p>অতিভুজ সমকোণের বিপরীতে থাকে এবং সর্বদা দীর্ঘতম বাহু হয়। প্রথা অনুযায়ী একে c দিয়ে চিহ্নিত করা হয়। ঘোরানো চিত্রে এটি খুঁজতে, সেই বাহুটি দেখুন যা সমকোণের চিহ্ন স্পর্শ করে না। এই ক্যালকুলেটরে আপনি অতিভুজকে একটি পরিচিত মান হিসেবে প্রবেশ করান।</p>\n<h3>বিপরীত বাহু কী?</h3>\n<p>বিপরীত বাহু হলো প্রসঙ্গ কোণ A-এর ঠিক বিপরীতে থাকা বাহু। কোণ A-এর জন্য, বাহু a বিপরীত এবং বাহু b সন্নিহিত। যদি আপনি আপনার প্রসঙ্গ কোণ B-তে বদলে ফেলেন, তাহলে চিহ্নগুলো বদলে যায়: বাহু b বিপরীত হয় এবং বাহু a সন্নিহিত হয়। অতিভুজ কখনো বদলায় না; এটি সর্বদা c, 90-ডিগ্রি কোণের বিপরীতে।</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"সমকোণী ত্রিভুজ যার নিচে-বামে কোণ A, বিপরীত বাহু a, সন্নিহিত বাহু b, এবং অতিভুজ c চিহ্নিত\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">সাইনের জন্য গঠন: নিচে-বামে কোণ A, বিপরীত বাহু a উল্লম্ব, সন্নিহিত বাহু b ভূমি বরাবর, সমকোণের বিপরীতে অতিভুজ c।</figcaption>\n</figure>"
      },
      {
        "h2": "সমকোণী ত্রিভুজে সাইন কী?",
        "paragraphs": [],
        "customHtml": "<p>সাইন একটি সরল অনুপাত প্রকাশ করে: একটি নির্দিষ্ট সূক্ষ্মকোণের জন্য, বিপরীত বাহুকে অতিভুজ দিয়ে ভাগ করলে সর্বদা একই সংখ্যা পাওয়া যায়। সেই সংখ্যাই sin(A)। যদি কোণ A 30 ডিগ্রি হয়, sin(30°) = 0.5, যার অর্থ ত্রিভুজ যত বড় বা ছোটই হোক না কেন, বিপরীত বাহু অতিভুজের ঠিক অর্ধেক।</p>\n<p>এই অনুপাতের কোনো একক নেই, কারণ এককগুলো বাতিল হয়ে যায়: মিটারকে মিটার দিয়ে ভাগ করলে একটি বিশুদ্ধ সংখ্যা থাকে। বিপরীত বাহু বের করতে অনুপাতটি পুনর্বিন্যাস করুন। sin(A) = a / c দিয়ে শুরু করুন। উভয় পক্ষকে c দিয়ে গুণ করুন। হরে থাকা c বাতিল হয়ে যায়, থাকে <strong>a = c × sin(A)</strong>। সূত্রটি পরিচিত অতিভুজকে পরিচিত কোণের সাইন দিয়ে গুণ করে।</p>\n<p>যেকোনো বৈধ সূক্ষ্মকোণের (0 থেকে 90 ডিগ্রির মধ্যে) জন্য sin(A) 0 থেকে 1-এর মধ্যে থাকে। এটি নিশ্চিত করে যে বিপরীত বাহু অতিভুজের চেয়ে ছোট, যা জ্যামিতির সাথে সামঞ্জস্যপূর্ণ: কোনো বাহু অতিভুজকে ছাড়িয়ে যেতে পারে না।</p>\n<h3>SOH-CAH-TOA বোঝা</h3>\n<p>SOH-CAH-TOA হলো তিনটি মৌলিক অনুপাত মনে রাখার একটি কৌশল। SOH: Sine = Opposite / Hypotenuse (সাইন = বিপরীত বাহু / অতিভুজ)। CAH: Cosine = Adjacent / Hypotenuse (কোসাইন = সন্নিহিত বাহু / অতিভুজ)। TOA: Tangent = Opposite / Adjacent (ট্যানজেন্ট = বিপরীত বাহু / সন্নিহিত বাহু)। এই পৃষ্ঠার জন্য SOH-এ মনোযোগ দিন। এই স্মরণসূত্রটি আপনাকে সঠিক অনুপাত বেছে নিতে সাহায্য করে, কিন্তু আপনার প্রসঙ্গ কোণের বিপরীতে কোন বাহুটি তা সঠিকভাবে চিহ্নিত করা এখনও প্রয়োজন।</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"সমকোণী ত্রিভুজ যেখানে বিপরীত বাহু a এবং অতিভুজ c হাইলাইট করা, sin(A) হলো a ভাগ c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">সাইন অনুপাত: sin(A) পেতে হাইলাইট করা বিপরীত বাহু a-কে হাইলাইট করা অতিভুজ c দিয়ে ভাগ করুন।</figcaption>\n</figure>"
      },
      {
        "h2": "সমকোণী ত্রিভুজের সাইন থেকে বাহু ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "paragraphs": [
          "সঠিক ফলাফল পেতে এই ধাপগুলো অনুসরণ করুন।"
        ],
        "listTitle": "ধাপসমূহ:",
        "listItems": [
          "আপনার ত্রিভুজে সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>টি চিহ্নিত করুন। নিশ্চিত করুন একটি কোণ 90 ডিগ্রি পরিমাপ করে।",
          "পরিচিত সূক্ষ্ম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A চিহ্নিত করুন। নিশ্চিত করুন এটি সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> নয়।",
          "অতিভুজ c খুঁজুন। এটি <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>, যা সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>ের বিপরীতে থাকে, সর্বদা দীর্ঘতম <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>।",
          "বিপরীত বাহু a চিহ্নিত করুন। এটি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর ঠিক বিপরীতে থাকে।",
          "প্রথম ইনপুট ক্ষেত্রে অতিভুজের দৈর্ঘ্য c প্রবেশ করান।",
          "দ্বিতীয় ক্ষেত্রে ডিগ্রিতে <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A প্রবেশ করান।",
          "আপনার অতিভুজ ইনপুটের সাথে মিলে এমন পরিমাপের এককটি নির্বাচন করুন।",
          "Calculate চাপুন। ফলাফলে সমাধানের ধাপসহ বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> a দেখানো হবে।",
          "ধাপগুলো পর্যালোচনা করুন যাতে নিশ্চিত হন সূত্র এবং প্রতিস্থাপন আপনার সমস্যার সাথে মিলছে।",
          "পরীক্ষা করুন যে a, c-এর চেয়ে ছোট। না হলে, অতিভুজ হিসেবে কোন বাহুটি প্রবেশ করিয়েছেন তা আবার পরীক্ষা করুন।"
        ]
      },
      {
        "h2": "সাইন ব্যবহার করে বিপরীত বাহু কীভাবে গণনা করবেন",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>উদাহরণ 1: একটি মৌলিক 3-4-5 সমকোণী ত্রিভুজ</h3>\n<p><strong>দেওয়া আছে:</strong> c = 5 cm, A = 36.87°। <strong>বের করুন:</strong> a।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 5 × sin(36.87°)</p>\n<p><strong>গণনা:</strong> sin(36.87°) ≈ 0.6, তাই a ≈ 5 × 0.6 = 3</p>\n<p><strong>উত্তর:</strong> <strong>a = 3 cm</strong></p>\n<p>3-4-5 ত্রিভুজটি সবচেয়ে পরিচিত সমকোণী ত্রিভুজ। এখানে বিপরীত বাহু ঠিক 3 cm হয়, কারণ দেখানো নির্ভুলতায় sin(36.87°) হলো 0.6।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 2: একটি বিশেষ 30-ডিগ্রি কোণ</h3>\n<p><strong>দেওয়া আছে:</strong> c = 10 m, A = 30°। <strong>বের করুন:</strong> a।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 10 × sin(30°)</p>\n<p><strong>গণনা:</strong> sin(30°) = 0.5 ঠিকঠাক, তাই a = 10 × 0.5 = 5</p>\n<p><strong>উত্তর:</strong> <strong>a = 5 m</strong></p>\n<p>30 ডিগ্রিতে বিপরীত বাহু অতিভুজের ঠিক অর্ধেক হয়। 30°, 45° এবং 60°-এর মতো বিশেষ কোণগুলো মনে রাখার মতো পরিষ্কার সাইন মান দেয়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 3: একটি দশমিক পরিমাপ</h3>\n<p><strong>দেওয়া আছে:</strong> c = 12 ft, A = 60°। <strong>বের করুন:</strong> a।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 12 × sin(60°)</p>\n<p><strong>গণনা:</strong> sin(60°) ≈ 0.8660254, তাই a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>গণনার সময় সাইন মানের পূর্ণ নির্ভুলতা ধরে রাখুন এবং কেবল চূড়ান্ত উত্তরটি গোল করুন। আগেই sin(60°)-কে 0.87-এ গোল করলে 10.44 ft পাওয়া যেত, একটি ছোট কিন্তু এড়ানো যায় এমন ভুল।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 4: একটি খাড়া কোণ</h3>\n<p><strong>দেওয়া আছে:</strong> c = 7.5 m, A = 42°। <strong>বের করুন:</strong> a।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 7.5 × sin(42°)</p>\n<p><strong>গণনা:</strong> sin(42°) ≈ 0.6691306, তাই a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>কোণ 90 ডিগ্রির দিকে বাড়লে, বিপরীত বাহু পূর্ণ অতিভুজের দৈর্ঘ্যের কাছাকাছি আসে। 42°-এ এটি ইতিমধ্যে অতিভুজের প্রায় 67%।</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"ধাপে-ধাপে সাইন গণনা: 10 m অতিভুজ, 30 ডিগ্রি কোণ, বিপরীত বাহু 5 m-এর সমান\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">সমাধানকৃত সমস্যা: a = 10 × sin(30°) = 5 m, প্রতিটি প্রতিস্থাপন ধাপ দেখানো হয়েছে।</figcaption>\n</figure>"
      },
      {
        "h2": "সাইন গণনার বাস্তব-জীবনের উদাহরণ",
        "paragraphs": [
          "এই উদাহরণগুলো দেখায় কীভাবে সাইন সূত্র ব্যবহারিক পরিমাপ সমস্যা সমাধান করে। প্রতিটি ক্ষেত্রে, পরিচিত ঢালু বা কর্ণাকৃতি দৈর্ঘ্যটিই অতিভুজ, এবং কাঙ্ক্ষিত উল্লম্ব দূরত্বটিই বিপরীত বাহু।"
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>উদাহরণ 5: মই কত উঁচুতে পৌঁছায় তা বের করা</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 5 m মই মাটির সাথে 65° কোণে হেলান দিয়ে আছে। <strong>বের করুন:</strong> এটি যে উচ্চতায় পৌঁছায় (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 5 × sin(65°)</p>\n<p><strong>গণনা:</strong> sin(65°) ≈ 0.9063078, তাই a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>মইটিই অতিভুজ এবং দেয়ালের উচ্চতা মাটির কোণের বিপরীতে। মনে রাখবেন এই উচ্চতা একাই বলে দেয় না যে মইটি নিরাপদে স্থাপন করা হয়েছে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 6: একটি অগভীর র‍্যাম্পের উত্থান</h3>\n<p><strong>দেওয়া আছে:</strong> একটি র‍্যাম্প 8 m লম্বা এবং 6° ঢালযুক্ত। <strong>বের করুন:</strong> উল্লম্ব উত্থান (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 8 × sin(6°)</p>\n<p><strong>গণনা:</strong> sin(6°) ≈ 0.1045285, তাই a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>ছোট কোণ ছোট উত্থান দেয়। 6 ডিগ্রিতে র‍্যাম্পটি তার 8 m দৈর্ঘ্যে এক মিটারেরও কম ওঠে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 7: 30 ডিগ্রিতে একটি ছোট দড়ি</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 4.5 m দড়ি অনুভূমিক থেকে 30° কোণে ঝুলছে। <strong>বের করুন:</strong> উল্লম্ব পতন (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 4.5 × sin(30°)</p>\n<p><strong>গণনা:</strong> sin(30°) = 0.5, তাই a = 4.5 × 0.5 = 2.25</p>\n<p><strong>উত্তর:</strong> <strong>a = 2.25 m</strong></p>\n<p>30-ডিগ্রি বিশেষ কোণ এটিকে নিখুঁত করে: উল্লম্ব উপাদান দড়ির দৈর্ঘ্যের ঠিক অর্ধেক।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 8: 20 মিটার বিস্তৃত একটি তার</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 20 m লম্বা তার 55° কোণে ঝুলে আছে। <strong>বের করুন:</strong> উল্লম্ব উপাদান (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 20 × sin(55°)</p>\n<p><strong>গণনা:</strong> sin(55°) ≈ 0.8191520, তাই a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>খাড়া কোণ বিপরীত বাহুকে অতিভুজের কাছাকাছি ঠেলে দেয়। 55°-এ উল্লম্ব উপাদান তারের দৈর্ঘ্যের প্রায় 82%।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 9: মৃদু ঢালে একটি লম্বা র‍্যাম্প</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 150 m র‍্যাম্প 12° কোণে ওঠে। <strong>বের করুন:</strong> মোট উত্থান (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 150 × sin(12°)</p>\n<p><strong>গণনা:</strong> sin(12°) ≈ 0.2079117, তাই a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>এমনকি 12-ডিগ্রি মৃদু ঢালও 150 m র‍্যাম্পে 31 m উত্থান তৈরি করে। লম্বা র‍্যাম্প দ্রুত উচ্চতা অর্জন করে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 10: জরিপের দৃষ্টিরেখা</h3>\n<p><strong>দেওয়া আছে:</strong> 40 m দৃষ্টিরেখা অনুভূমিকের উপরে 50° কোণে আছে। <strong>বের করুন:</strong> উচ্চতার পার্থক্য (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 40 × sin(50°)</p>\n<p><strong>গণনা:</strong> sin(50°) ≈ 0.7660444, তাই a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>জরিপকারীরা পরিমাপকৃত ঢালের দূরত্ব এবং কোণকে উল্লম্ব উচ্চতার পরিবর্তনে রূপান্তর করতে এটি ব্যবহার করেন।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 11: মিলিমিটারে একটি যান্ত্রিক সংযোগ</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 850 mm লম্বা সংযোগ 25° কোণে আছে। <strong>বের করুন:</strong> এর উল্লম্ব অভিক্ষেপ (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 850 × sin(25°)</p>\n<p><strong>গণনা:</strong> sin(25°) ≈ 0.4226183, তাই a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>সূত্রটি মিলিমিটারেও একইভাবে কাজ করে। গণনার সময় অতিরিক্ত দশমিক ধরে রাখুন: 359.2255 গোল হয়ে 359.23 হয়, 359.30 নয়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 12: ছাদের কড়ির উত্থান</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 18 m লম্বা কড়ি 35° ঢালে স্থাপন করা হয়েছে। <strong>বের করুন:</strong> উল্লম্ব উত্থান (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 18 × sin(35°)</p>\n<p><strong>গণনা:</strong> sin(35°) ≈ 0.5735764, তাই a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>ছাদমিস্ত্রিরা কড়ি (অতিভুজ) এবং ঢালের কোণ পরিমাপ করেন, তারপর দেয়াল-প্লেটের উপরে ছাদের শীর্ষ কত উঁচু তা বের করতে সাইন ব্যবহার করেন।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 13: একটি লম্বা জিপলাইনের পতন</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 250 m জিপলাইন 18° কোণে নামে। <strong>বের করুন:</strong> মোট পতন (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 250 × sin(18°)</p>\n<p><strong>গণনা:</strong> sin(18°) ≈ 0.3090170, তাই a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>জিপলাইনের তারটিই অতিভুজ; পতনটি বিপরীত বাহু। এটি রাইডের একটি সরলীকৃত সরলরেখা মডেল।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 14: অগভীর কোণে একটি ছোট তক্তা</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 6 m তক্তা 8° কোণে হেলানো। <strong>বের করুন:</strong> উঁচু প্রান্তের উচ্চতা (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 6 × sin(8°)</p>\n<p><strong>গণনা:</strong> sin(8°) ≈ 0.1391731, তাই a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>8 ডিগ্রিতে উঁচু প্রান্তটি এক মিটারের নিচে থাকে। যখন আপনার মৃদু উত্তোলন প্রয়োজন তখন অগভীর কোণ উপযোগী।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 15: একটি বলকে উপাদানে ভাঙা</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 100 N বল অনুভূমিকের উপরে 30° কোণে টানে। <strong>বের করুন:</strong> উল্লম্ব উপাদান (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 100 × sin(30°)</p>\n<p><strong>গণনা:</strong> sin(30°) = 0.5, তাই a = 100 × 0.5 = 50</p>\n<p><strong>উত্তর:</strong> <strong>a = 50 N</strong></p>\n<p>পদার্থবিজ্ঞানে, বল ভেক্টরটিই অতিভুজ এবং এর উল্লম্ব উপাদানটিই বিপরীত বাহু। একই সাইন সূত্র বল, বেগ এবং অন্য যেকোনো ভেক্টর রাশির ক্ষেত্রে প্রযোজ্য।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 16: একটি ছোট ছাউনি-সমর্থন</h3>\n<p><strong>দেওয়া আছে:</strong> একটি 3.2 ft সমর্থন বাহু 48° কোণে আছে। <strong>বের করুন:</strong> উল্লম্ব নাগাল (a)।</p>\n<p><strong>সূত্র:</strong> a = c × sin(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> a = 3.2 × sin(48°)</p>\n<p><strong>গণনা:</strong> sin(48°) ≈ 0.7431448, তাই a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>উত্তর:</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>ছোট আকারের প্রকল্পে একই গণিত ব্যবহৃত হয়। সমর্থন বাহুটিই অতিভুজ; উল্লম্ব নাগালই সাইন সূত্র ফিরিয়ে দেয়।</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"দুটি ব্যবহারিক সাইন উদাহরণ: মইয়ের উচ্চতা 4.53 m এবং র‍্যাম্পের উত্থান 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">সাইনের ব্যবহারিক প্রয়োগ: 65° কোণে একটি 5 m মই প্রায় 4.53 m উঁচুতে পৌঁছায়; 12° কোণে একটি 150 m র‍্যাম্প প্রায় 31.19 m ওঠে।</figcaption>\n</figure>"
      },
      {
        "h2": "সাইন বনাম কোসাইন বনাম ট্যানজেন্ট: কোনটি ব্যবহার করবেন",
        "paragraphs": [],
        "customHtml": "<p>তিনটি অনুপাতই একটি কোণ এবং অতিভুজ থেকে একটি বাহু বের করতে পারে, কিন্তু প্রতিটি ভিন্ন বাহু বের করে। ভুলটি বেছে নেওয়া এই পৃষ্ঠাগুলোতে সবচেয়ে সাধারণ ভুল।</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">পরিচিত</th><th class=\"border px-4 py-2 text-left\">কাঙ্ক্ষিত</th><th class=\"border px-4 py-2 text-left\">ব্যবহার করুন</th><th class=\"border px-4 py-2 text-left\">সূত্র</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">বিপরীত বাহু a</td><td class=\"border px-4 py-2\">সাইন</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">সন্নিহিত বাহু b</td><td class=\"border px-4 py-2\">কোসাইন</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">বিপরীত বাহু a</td><td class=\"border px-4 py-2\">ট্যানজেন্ট</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>অতিভুজ পরিচিত হলে এবং কোণের বিপরীতে থাকা বাহুটি প্রয়োজন হলে সাইন ব্যবহার করুন। কোণের পাশের বাহুটি প্রয়োজন হলে কোসাইন ব্যবহার করুন। অতিভুজ অজানা কিন্তু সন্নিহিত বাহু পরিচিত হলে ট্যানজেন্ট ব্যবহার করুন। যদি আপনার কোণ থাকে এবং পরিবর্তে অতিভুজ প্রয়োজন হয়, পুনর্বিন্যাস করুন: c = a / sin(A)।</p>"
      },
      {
        "h2": "কোণ কীভাবে বিপরীত বাহুকে বদলে দেয়",
        "paragraphs": [],
        "customHtml": "<p>একটি নির্দিষ্ট অতিভুজের জন্য, বড় কোণ বড় বিপরীত বাহু তৈরি করে। সম্পর্কটি রৈখিক নয়: সাইন প্রথমে দ্রুত বাড়ে, তারপর কোণ 90 ডিগ্রির কাছাকাছি এলে সমতল হয়ে যায়।</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">কোণ A (c = 10 m)</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">বিপরীত বাহু a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>কোণ দ্বিগুণ করলে বাহু দ্বিগুণ হয় না। 30° থেকে 60°-এ যাওয়া বিপরীত বাহুকে 5.00 m থেকে 8.66 m-এ বাড়ায়, প্রায় 1.73 গুণ, 2 গুণ নয়। এই কারণেই আপনি সরল অনুপাত দিয়ে সাইনের ফলাফল অনুমান করতে পারবেন না; সর্বদা sin(A) সরাসরি গণনা করুন।</p>"
      },
      {
        "h2": "ডিগ্রি, একক এবং গোল করা",
        "paragraphs": [
          "এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A ডিগ্রিতে আশা করে। যদি আপনার <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> রেডিয়ানে থাকে, আগে রূপান্তর করুন: degrees = radians × (180 / π)। একটি 0.5-রেডিয়ান <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> প্রায় 28.65 ডিগ্রি।",
          "অতিভুজ এবং ফলাফল একই একক ভাগ করে। c মিটারে প্রবেশ করালে a মিটারে আসে; c ফুটে প্রবেশ করালে a ফুটে আসে। কখনো একক মেশাবেন না: মিটারে অতিভুজ নিয়ে ইঞ্চিতে আশা করলে গণনার আগে বা পরে রূপান্তর প্রয়োজন।",
          "সাইন গুণন পর্যন্ত পূর্ণ নির্ভুলতা ধরে রাখুন এবং কেবল চূড়ান্ত উত্তরটি গোল করুন। নির্মাণকাজের জন্য, নিকটতম মিলিমিটার বা ইঞ্চির ষোড়শাংশে গোল করা সাধারণত যথেষ্ট; শ্রেণিকক্ষের কাজের জন্য, দুটি দশমিক স্থান মানক। মোটামুটি পরিমাপ করা কোণ থেকে ছয়টি দশমিক রিপোর্ট করা এমন নির্ভুলতার ইঙ্গিত দেয় যা আপনার নেই।"
        ]
      },
      {
        "h2": "সাধারণ সাইন গণনার ভুল",
        "paragraphs": [
          "এগুলোই সবচেয়ে বেশি দেখা যায় এমন ভুল। প্রতিটির একটি সহজ সমাধান আছে।"
        ],
        "listTitle": "এড়ানোর মতো 12টি ভুল:",
        "listItems": [
          "সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>কে অতিভুজ হিসেবে ব্যবহার করা। অতিভুজ সর্বদা সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>ের বিপরীতে থাকে এবং দীর্ঘতম <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> হয়।",
          "সাইনের পরিবর্তে কোসাইন ব্যবহার করা। কোসাইন সন্নিহিত বাহু ফিরিয়ে দেয়, আপনি এখানে যে বিপরীত বাহু চান তা নয়।",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A রেডিয়ানে প্রবেশ করানো। এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> ডিগ্রি আশা করে; 0.5 রেডিয়ান 0.5 ডিগ্রি হিসেবে প্রবেশ করালে মারাত্মক ভুল উত্তর পাওয়া যায়।",
          "ভুল শীর্ষবিন্দু থেকে কোণ পরিমাপ করা। বিপরীত বাহু বিশেষভাবে কোণ A-এর সাপেক্ষে সংজ্ঞায়িত।",
          "অতিভুজের চেয়ে দীর্ঘ ফলাফল আশা করা। যেহেতু sin(A) সর্বাধিক 1, a কখনো c-কে ছাড়াতে পারে না।",
          "পরিচিত বাহুকে c হিসেবে প্রবেশ করানো যখন এটি আসলে একটি বাহু। দুবার পরীক্ষা করুন যে আপনার অতিভুজ ইনপুট সেই <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> যা সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>ের বিপরীতে।",
          "গুণ করার আগে sin(A) গোল করা। চক্রবৃদ্ধি ভুল এড়াতে কেবল চূড়ান্ত উত্তরটি গোল করুন।",
          "ইনপুট এবং প্রত্যাশার মধ্যে একক মেশানো, যেমন মিটার প্রবেশ করিয়ে ফলাফল ফুট হিসেবে পড়া।",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> B-এর পরিবর্তে <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A ব্যবহার করা। যদি আপনার পরিচিত <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> অন্য সূক্ষ্ম শীর্ষবিন্দুতে থাকে, তাহলে বিপরীত এবং সন্নিহিত চিহ্নগুলো বদলে যায়।",
          "ভুলে যাওয়া যে কোণটি সূক্ষ্ম হতে হবে (0 থেকে 90 ডিগ্রির মধ্যে)। 90-ডিগ্রি ইনপুট ত্রিভুজটিকে ভেঙে দেয়।",
          "সাইনকে বিপরীত সাইনের সাথে গুলিয়ে ফেলা। এই পৃষ্ঠা একটি কোণ থেকে একটি বাহু গণনা করে; বিপরীত ফাংশন বাহুগুলো থেকে একটি কোণ গণনা করে।",
          "মোটামুটি মাঠ-পরিমাপকে ছয় দশমিক পর্যন্ত বিশ্বাস করা। আপনার রিপোর্ট করা নির্ভুলতা আপনার পরিমাপের নির্ভুলতার সাথে মিলান।"
        ]
      },
      {
        "h2": "আপনার উত্তর কীভাবে যাচাই করবেন",
        "paragraphs": [],
        "customHtml": "<p>তিনটি স্বাধীন পরীক্ষা একটি সাইন ফলাফল নিশ্চিত করে। উত্তরটি বিশ্বাস করার আগে অন্তত একটি ব্যবহার করুন।</p>\n<h3>পদ্ধতি 1: অনুপাত পরীক্ষা করুন</h3>\n<p>ফলাফলকে অতিভুজ দিয়ে ভাগ করুন এবং sin(A)-এর সাথে তুলনা করুন। উদাহরণ 1-এর জন্য: 3 / 5 = 0.6, এবং sin(36.87°) ≈ 0.6। এগুলো মিলে যায়।</p>\n<h3>পদ্ধতি 2: পিথাগোরাস দিয়ে পরীক্ষা করুন</h3>\n<p>b = √(c² − a²) দিয়ে সন্নিহিত বাহু বের করুন, তারপর a² + b² = c² যাচাই করুন। উদাহরণ 1-এর জন্য: b = √(25 − 9) = 4, এবং 9 + 16 = 25।</p>\n<h3>পদ্ধতি 3: পূরক কোণ পরীক্ষা করুন</h3>\n<p>কোণ B = 90° − A গণনা করুন, তারপর কোসাইন দিয়ে যাচাই করুন: b হওয়া উচিত c × cos(A)-এর সমান। উদাহরণ 1-এর জন্য: 5 × cos(36.87°) ≈ 5 × 0.8 = 4, যা উপরে পাওয়া b-এর সাথে মেলে।</p>"
      },
      {
        "h2": "উপসংহার",
        "paragraphs": [
          "সাইন সূত্র a = c × sin(A) একটি পরিচিত অতিভুজ এবং <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>কে একটি গুণনেই বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>তে রূপান্তর করে। অতিভুজ চিহ্নিত করুন, নিশ্চিত করুন আপনার <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> ডিগ্রিতে এবং সূক্ষ্ম, গুণ করুন, এবং পরীক্ষা করুন ফলাফল অতিভুজের চেয়ে ছোট।",
          "বিপরীত সমস্যার জন্য, পরিচিত বাহুগুলো থেকে একটি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> বের করতে, <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">সমকোণী ত্রিভুজ কোণ সাইন থেকে ক্যালকুলেটর</a> ব্যবহার করুন। সন্নিহিত বাহুর জন্য, <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">সমকোণী ত্রিভুজ বাহু কোসাইন থেকে ক্যালকুলেটর</a> ব্যবহার করুন।"
        ]
      }
    ],
    "faqs": [
      {
        "question": "a = c × sin(A) কী গণনা করে?",
        "answer": "এটি একটি সমকোণী ত্রিভুজে বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> a-এর দৈর্ঘ্য গণনা করে। এই সূত্রটি ব্যবহার করতে আপনার অতিভুজ c এবং একটি সূক্ষ্ম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A প্রয়োজন।"
      },
      {
        "question": "এখানে কোসাইনের পরিবর্তে সাইন কেন ব্যবহার করব?",
        "answer": "সাইন বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>কে অতিভুজের সাথে সম্পর্কিত করে। কোসাইন সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>কে অতিভুজের সাথে সম্পর্কিত করে। যেহেতু এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বের করে, সাইনই সঠিক ফাংশন।"
      },
      {
        "question": "ফলাফল কি অতিভুজের চেয়ে বড় হতে পারে?",
        "answer": "না। সমকোণী ত্রিভুজে বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> সর্বদা অতিভুজের চেয়ে ছোট। আপনার ফলাফল বড় হলে, ইনপুটগুলোর একটি ভুল।"
      },
      {
        "question": "আমার কোণ ঠিক 90 ডিগ্রি হলে কী হবে?",
        "answer": "90-ডিগ্রি ইনপুট এখানে বৈধ নয়। সমকোণী ত্রিভুজে দুটি সূক্ষ্মকোণের প্রতিটি 0 থেকে 90 ডিগ্রির মধ্যে থাকতে হবে। 90-ডিগ্রি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>টি ইতিমধ্যে সম<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> শীর্ষবিন্দুতে নির্ধারিত।"
      },
      {
        "question": "কোণ কি ডিগ্রিতে হতে হবে?",
        "answer": "হ্যাঁ। এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A ডিগ্রিতে আশা করে। আপনার <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> রেডিয়ানে থাকলে, প্রথমে 180 দিয়ে গুণ করে এবং pi দিয়ে ভাগ করে ডিগ্রিতে রূপান্তর করুন।"
      },
      {
        "question": "এটি কোসাইন ক্যালকুলেটর থেকে কীভাবে আলাদা?",
        "answer": "সাইন <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বের করে যা <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর বিপরীতে থাকে (a = c × sin(A))। <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">কোসাইন ক্যালকুলেটর</a> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> বের করে যা <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর সন্নিহিত (b = c × cos(A))। একই ইনপুট, ভিন্ন আউটপুট <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>।"
      },
      {
        "question": "পদার্থবিজ্ঞানে বল ভেক্টরের জন্য কি এটি ব্যবহার করতে পারি?",
        "answer": "হ্যাঁ। একটি ভেক্টরই অতিভুজ এবং এর উল্লম্ব উপাদানটিই বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>। অনুভূমিকের উপরে 30° কোণে একটি 100 N বলের উল্লম্ব উপাদান 100 × sin(30°) = 50 N।"
      },
      {
        "question": "কোন একক ব্যবহার করা উচিত?",
        "answer": "যেকোনো সামঞ্জস্যপূর্ণ দৈর্ঘ্যের একক চলে: মিটার, ফুট, ইঞ্চি, মিলিমিটার। ফলাফল আপনি যে অতিভুজ প্রবেশ করিয়েছেন তার একই একক ব্যবহার করে। একটি গণনার মধ্যে একক মেশাবেন না।"
      },
      {
        "question": "আমার উত্তর পাঠ্যবইয়ের চেয়ে সামান্য ভিন্ন কেন?",
        "answer": "ছোট পার্থক্য বিভিন্ন পর্যায়ে সাইন মান গোল করা থেকে আসে। গুণনের সময় পূর্ণ নির্ভুলতা ধরে রাখুন এবং পাঠ্যবইয়ের গোল করার সাথে মেলাতে কেবল চূড়ান্ত উত্তরটি গোল করুন।"
      },
      {
        "question": "কোণ কি 90 ডিগ্রির বেশি হতে পারে?",
        "answer": "না। এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a>-এর জন্য <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A সূক্ষ্ম হতে হবে (0 থেকে 90 ডিগ্রির মধ্যে)। সমকোণী ত্রিভুজে প্রসঙ্গ কোণ হিসেবে স্থূলকোণ ঘটে না।"
      },
      {
        "question": "বিপরীত বাহু এবং কোণ জানা থাকলে অতিভুজ কীভাবে বের করব?",
        "answer": "সূত্রটি পুনর্বিন্যাস করুন: c = a / sin(A)। যদি a = 3 এবং A = 36.87° হয়, তাহলে c = 3 / 0.6 = 5।"
      },
      {
        "question": "ত্রিভুজ ঘোরানো বা উল্টানো হলে কি সাইন কাজ করে?",
        "answer": "হ্যাঁ। ঘূর্ণন বদলায় না কোন <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>টি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর বিপরীতে। সর্বদা প্রথমে সেই <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>টি চিহ্নিত করুন যা আপনার প্রসঙ্গ <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a>ের বিপরীতে থাকে, তারপর a = c × sin(A) প্রয়োগ করুন।"
      }
    ]
  },
  "ja":   {
    "extraSections": [
      {
        "h2": "サインを使って対辺を求める方法",
        "paragraphs": [
          "5 m のはしごが地面に対して 65 度の<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>で壁に立てかけられています。はしごの長さと<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>は分かりますが、どの高さまで届くでしょうか。その垂直の高さが直角三角形の対辺であり、サインで直接求められます。サインの<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a><a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は斜辺と1つの鋭<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を入力として受け取り、対辺を返します。三角関数表を手で調べる必要はありません。",
          "このガイドでは、サインの公式を基礎から説明します。対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>の意味、サインが斜辺を使う理由、あらゆる向きの図で正しい辺を特定する方法、そして結果を実際の測定に応用する方法です。公式は a = c × sin(A) で、a は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aの向かい側の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>、c は斜辺、A は度数で測定されます。2つの辺を必要とするピタゴラスの定理の<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>とは異なり、このツールは1つの<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>と1つの<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>が分かれば動作します。"
        ]
      },
      {
        "customHtml": "<h3>直角三角形とは？</h3>\n<p>直角三角形は、1つの角が正確に90度である三角形です。残りの2つの角は鋭角（それぞれ90度未満）で、互いに余角の関係にあり、合計すると90度になります。角Aが36.87度の場合、もう一方の鋭角Bは53.13度になる必要があります。サインの計算にはこの直角の構造が必要です。比率の定義は、2辺の垂直な関係に基づいているからです。</p>\n<h3>斜辺とは？</h3>\n<p>斜辺は直角の向かい側にあり、常に最も長い辺です。慣例により c と表されます。回転した図で見つけるには、直角の目印に触れていない辺を探します。この計算機では、斜辺を既知の値として入力します。</p>\n<h3>対辺とは？</h3>\n<p>対辺は、基準角Aの真向かいにある辺です。角Aに対して、辺aが対辺、辺bが隣辺です。基準を角Bに切り替えると、ラベルが入れ替わります。辺bが対辺、辺aが隣辺になります。斜辺は変わりません。常に c であり、90度の角の向かい側にあります。</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"左下に角A、対辺a、隣辺b、斜辺cとラベル付けされた直角三角形\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">サインのための各部の名称：左下の角A、垂直方向の対辺 a、底辺に沿った隣辺 b、直角の向かい側の斜辺 c。</figcaption>\n</figure>",
        "h2": "対辺と斜辺を理解する",
        "paragraphs": []
      },
      {
        "customHtml": "<p>サインはシンプルな比率を表します。鋭角が与えられたとき、対辺を斜辺で割ると、常に同じ数になります。その数が sin(A) です。角Aが30度の場合、sin(30°) = 0.5 となり、三角形の大小にかかわらず、対辺は斜辺のちょうど半分であるという意味です。</p>\n<p>この比率に単位はありません。単位が打ち消されるからです。メートルをメートルで割ると、純粋な数だけが残ります。対辺を求めるには、比率を変形します。sin(A) = a / c から始めます。両辺に c を掛けます。分母の c が打ち消され、<strong>a = c × sin(A)</strong> が残ります。この公式は、既知の斜辺に既知の角のサインを掛けます。</p>\n<p>有効な鋭角（0度から90度の間）であれば、sin(A) は 0 から 1 の間に収まります。これにより、対辺は斜辺より短いことが保証されます。これは幾何学的な事実と一致します。辺が斜辺を超えることはありません。</p>\n<h3>SOH-CAH-TOA を理解する</h3>\n<p>SOH-CAH-TOA は3つの基本的な比率を覚えるための語呂合わせです。SOH：サイン = 対辺 / 斜辺。CAH：コサイン = 隣辺 / 斜辺。TOA：タンジェント = 対辺 / 隣辺。このページでは SOH に注目します。この覚え方は正しい比率の選択に役立ちますが、基準角に対する対辺がどれかを正しく特定する必要があります。</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"対辺aと斜辺cを強調表示した直角三角形。sin(A) は a を c で割ったもの\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">サインの比率：強調表示された対辺 a を強調表示された斜辺 c で割ると sin(A) になります。</figcaption>\n</figure>",
        "h2": "直角三角形におけるサインとは？",
        "paragraphs": []
      },
      {
        "h2": "サインから辺を求める直角三角形計算機の使い方",
        "listItems": [
          "三角形の直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を確認します。1つの角が90度であることを確かめます。",
          "既知の鋭<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aを確認します。直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>ではないことを確かめます。",
          "斜辺 c を特定します。直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かい側の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>であり、常に最も長い<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>です。",
          "対辺 a を特定します。<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aの真向かいにあります。",
          "斜辺の長さ c を最初の入力欄に入力します。",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aを度数で2番目の入力欄に入力します。",
          "斜辺の入力に合わせた測定単位を選択します。",
          "「計算」を押します。結果として、解法の手順とともに対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> a が表示されます。",
          "手順を確認し、公式と代入が自分の問題と一致していることを確かめます。",
          "a が c より短いことを確認します。そうでない場合、斜辺として入力した辺を再確認します。"
        ],
        "listTitle": "手順：",
        "paragraphs": [
          "正確な結果を得るには、次の手順に従ってください。"
        ]
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>例1：基本的な 3-4-5 の直角三角形</h3>\n<p><strong>与えられた値：</strong> c = 5 cm、A = 36.87°。<strong>求めるもの：</strong> a。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 5 × sin(36.87°)</p>\n<p><strong>計算：</strong> sin(36.87°) ≈ 0.6 なので、a ≈ 5 × 0.6 = 3</p>\n<p><strong>答え：</strong> <strong>a = 3 cm</strong></p>\n<p>3-4-5 の三角形は最も馴染み深い直角三角形です。表示された精度では sin(36.87°) が 0.6 であるため、対辺はちょうど 3 cm になります。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例2：30度の特別な角</h3>\n<p><strong>与えられた値：</strong> c = 10 m、A = 30°。<strong>求めるもの：</strong> a。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 10 × sin(30°)</p>\n<p><strong>計算：</strong> sin(30°) = 0.5（ちょうど）なので、a = 10 × 0.5 = 5</p>\n<p><strong>答え：</strong> <strong>a = 5 m</strong></p>\n<p>30度では対辺は斜辺のちょうど半分になります。30°、45°、60°のような特別な角は、覚えておく価値のあるきれいなサイン値を与えます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例3：小数を含む測定値</h3>\n<p><strong>与えられた値：</strong> c = 12 ft、A = 60°。<strong>求めるもの：</strong> a。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 12 × sin(60°)</p>\n<p><strong>計算：</strong> sin(60°) ≈ 0.8660254 なので、a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>答え：</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>計算中はサイン値を完全な精度で保持し、丸めるのは最終的な答えだけにします。sin(60°) を早めに 0.87 に丸めると 10.44 ft になり、小さいながらも避けられる誤差が生じます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例4：急な角度</h3>\n<p><strong>与えられた値：</strong> c = 7.5 m、A = 42°。<strong>求めるもの：</strong> a。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 7.5 × sin(42°)</p>\n<p><strong>計算：</strong> sin(42°) ≈ 0.6691306 なので、a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>答え：</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>角度が90度に近づくにつれ、対辺は斜辺の全長に近づきます。42°ではすでに斜辺の約67%になっています。</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"サイン計算のステップバイステップ：斜辺 10 m、角度 30 度、対辺は 5 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">計算例：a = 10 × sin(30°) = 5 m。各代入ステップを示しています。</figcaption>\n</figure>",
        "h2": "サインを使って対辺を計算する方法",
        "paragraphs": []
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>例5：はしごが届く高さを求める</h3>\n<p><strong>与えられた値：</strong> 5 m のはしごが地面に対して 65° で傾いています。<strong>求めるもの：</strong> 届く高さ (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 5 × sin(65°)</p>\n<p><strong>計算：</strong> sin(65°) ≈ 0.9063078 なので、a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>答え：</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>はしごが斜辺、壁の高さが地面の角に対する対辺です。ただし、この高さだけでは、はしごが安全に設置されているかどうかは分からないことに注意してください。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例6：緩やかなスロープの上り</h3>\n<p><strong>与えられた値：</strong> 8 m のスロープが 6° の傾斜です。<strong>求めるもの：</strong> 垂直方向の上り (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 8 × sin(6°)</p>\n<p><strong>計算：</strong> sin(6°) ≈ 0.1045285 なので、a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>答え：</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>小さな角度では上りも小さくなります。6度では、スロープは 8 m の長さに対して 1 m 未満しか上りません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例7：30度の短いロープ</h3>\n<p><strong>与えられた値：</strong> 4.5 m のロープが水平から 30° で吊られています。<strong>求めるもの：</strong> 垂直方向の落差 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 4.5 × sin(30°)</p>\n<p><strong>計算：</strong> sin(30°) = 0.5 なので、a = 4.5 × 0.5 = 2.25</p>\n<p><strong>答え：</strong> <strong>a = 2.25 m</strong></p>\n<p>30度の特別な角により、この計算は正確です。垂直成分はロープの長さのちょうど半分です。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例8：20メートルのケーブル</h3>\n<p><strong>与えられた値：</strong> 20 m のケーブルが 55° で垂れています。<strong>求めるもの：</strong> 垂直成分 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 20 × sin(55°)</p>\n<p><strong>計算：</strong> sin(55°) ≈ 0.8191520 なので、a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>答え：</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>角度が急になるほど、対辺は斜辺に近づきます。55°では垂直成分はケーブル長の約82%です。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例9：緩やかな傾斜の長いスロープ</h3>\n<p><strong>与えられた値：</strong> 150 m のスロープが 12° で上っています。<strong>求めるもの：</strong> 全体の上り (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 150 × sin(12°)</p>\n<p><strong>計算：</strong> sin(12°) ≈ 0.2079117 なので、a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>答え：</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>緩やかな12度の傾斜でも、150 m のスロープでは 31 m の上りが生じます。長いスロープは高さをぐんぐん稼ぎます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例10：測量の視線</h3>\n<p><strong>与えられた値：</strong> 40 m の視線が水平から 50° 上向きです。<strong>求めるもの：</strong> 標高差 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 40 × sin(50°)</p>\n<p><strong>計算：</strong> sin(50°) ≈ 0.7660444 なので、a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>答え：</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>測量士はこれを使って、測定した斜距離と角度から垂直方向の標高差に変換します。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例11：ミリメートル単位の機械リンク</h3>\n<p><strong>与えられた値：</strong> 850 mm のリンクが 25° です。<strong>求めるもの：</strong> 垂直方向の投影 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 850 × sin(25°)</p>\n<p><strong>計算：</strong> sin(25°) ≈ 0.4226183 なので、a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>答え：</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>この公式はミリメートルでも同様に使えます。計算中は余分な桁を保持してください。359.2255 は 359.30 ではなく 359.23 に丸めます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例12：屋根の垂木の上り</h3>\n<p><strong>与えられた値：</strong> 18 m の垂木が 35° の勾配です。<strong>求めるもの：</strong> 垂直方向の上り (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 18 × sin(35°)</p>\n<p><strong>計算：</strong> sin(35°) ≈ 0.5735764 なので、a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>答え：</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>大工は垂木（斜辺）と勾配角度を測り、サインを使って屋根の頂点が壁板の上にどれだけの高さにあるかを求めます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例13：長いジップラインの落差</h3>\n<p><strong>与えられた値：</strong> 250 m のジップラインが 18° で下降します。<strong>求めるもの：</strong> 全体の落差 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 250 × sin(18°)</p>\n<p><strong>計算：</strong> sin(18°) ≈ 0.3090170 なので、a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>答え：</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>ジップラインのケーブルが斜辺、落差が対辺です。これはライドの簡略化された直線モデルです。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例14：緩やかな角度の短い板</h3>\n<p><strong>与えられた値：</strong> 6 m の板が 8° で傾いています。<strong>求めるもの：</strong> 持ち上げられた端の高さ (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 6 × sin(8°)</p>\n<p><strong>計算：</strong> sin(8°) ≈ 0.1391731 なので、a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>答え：</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>8度では持ち上げられた端は 1 m 未満の高さに収まります。緩やかな持ち上げが必要な場合に小さな角度は便利です。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例15：力の成分分解</h3>\n<p><strong>与えられた値：</strong> 100 N の力が水平から 30° 上向きに引いています。<strong>求めるもの：</strong> 垂直成分 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 100 × sin(30°)</p>\n<p><strong>計算：</strong> sin(30°) = 0.5 なので、a = 100 × 0.5 = 50</p>\n<p><strong>答え：</strong> <strong>a = 50 N</strong></p>\n<p>物理学では、力のベクトルが斜辺、その垂直成分が対辺です。同じサインの公式は、力や速度、その他のあらゆるベクトル量に適用できます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例16：短いオーニング支柱</h3>\n<p><strong>与えられた値：</strong> 3.2 ft の支持アームが 48° の角度です。<strong>求めるもの：</strong> 垂直方向の到達 (a)。</p>\n<p><strong>公式：</strong> a = c × sin(A)</p>\n<p><strong>代入：</strong> a = 3.2 × sin(48°)</p>\n<p><strong>計算：</strong> sin(48°) ≈ 0.7431448 なので、a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>答え：</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>小規模なプロジェクトでも同じ数学を使います。支持アームが斜辺、垂直方向の到達がサインの公式で求まるものです。</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"実用的なサインの例2つ：はしごの高さ 4.53 m とスロープの上り 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">実用的なサインの使い方：65°の 5 m のはしごは約 4.53 m の高さに届き、12°の 150 m のスロープは約 31.19 m 上ります。</figcaption>\n</figure>",
        "h2": "サイン計算の実生活での例",
        "paragraphs": [
          "これらの例は、サインの公式が実際の測定問題をどのように解決するかを示します。各場合において、既知の斜めまたは対角線の長さが斜辺であり、求めたい垂直距離が対辺です。"
        ]
      },
      {
        "customHtml": "<p>3つの比率で角度と斜辺から辺を求められますが、それぞれ求まる辺が異なります。間違った比率を選ぶことは、これらのページで最も多い誤りです。</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">既知</th><th class=\"border px-4 py-2 text-left\">求めるもの</th><th class=\"border px-4 py-2 text-left\">使うもの</th><th class=\"border px-4 py-2 text-left\">公式</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">対辺 a</td><td class=\"border px-4 py-2\">サイン</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">隣辺 b</td><td class=\"border px-4 py-2\">コサイン</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">対辺 a</td><td class=\"border px-4 py-2\">タンジェント</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>斜辺が既知で角の向かい側の辺が必要な場合はサインを使います。角に隣接した辺が必要な場合はコサインを使います。斜辺が未知で隣辺が既知の場合はタンジェントを使います。角度があり斜辺を求めたい場合は、変形して c = a / sin(A) を使います。</p>",
        "h2": "サイン・コサイン・タンジェント：どれを使うか",
        "paragraphs": []
      },
      {
        "customHtml": "<p>斜辺が固定の場合、角度が大きいほど対辺も大きくなります。この関係は直線的ではありません。サインは最初は急速に増加しますが、角度が90度に近づくにつれて平坦になります。</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">角度 A（c = 10 m）</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">対辺 a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>角度を2倍にしても辺は2倍になりません。30°から60°にすると、対辺は 5.00 m から 8.66 m に増えます。約 1.73 倍であり、2倍ではありません。このため、単純な比例でサインの結果を見積もることはできません。sin(A) は必ず直接計算してください。</p>",
        "h2": "角度の変化が対辺に与える影響",
        "paragraphs": []
      },
      {
        "h2": "度数・単位・丸め",
        "paragraphs": [
          "この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aを度数で受け付けます。<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>がラジアンの場合は、先に変換してください。度数 = ラジアン × (180 / π)。0.5ラジアンの<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>は約28.65度です。",
          "斜辺と結果は同じ単位を共有します。c をメートルで入力すれば a もメートルで出ます。c をフィートで入力すれば a もフィートで出ます。単位を混ぜないでください。斜辺をメートルで入力してインチを期待する場合は、計算の前後に変換が必要です。",
          "サインの掛け算までは完全な精度を保ち、丸めるのは最終的な答えだけにします。建設作業では、最も近いミリメートルまたは16分の1インチへの丸めで通常は十分です。学校の授業では、小数点以下2桁が標準です。おおまかに測定した角度から6桁の小数を報告することは、実際にはない精度をほのめかします。"
        ]
      },
      {
        "h2": "よくあるサイン計算の間違い",
        "listItems": [
          "隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を斜辺として使う。斜辺は常に直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かい側にあり、最も長い<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>です。",
          "サインの代わりにコサインを使う。コサインはここで求めたい対辺ではなく、隣辺を返します。",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aをラジアンで入力する。この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は度数を期待します。0.5ラジアンを0.5度として入力すると、とんでもなく間違った答えになります。",
          "角度を間違った頂点から測る。対辺は角Aに対して定義されます。",
          "斜辺より長い結果を期待する。sin(A) は最大で1なので、a が c を超えることはありません。",
          "実際は辺であるのに既知の辺を c として入力する。斜辺の入力が直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かい側の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>であることを再確認してください。",
          "掛け算の前に sin(A) を丸める。誤差の蓄積を避けるため、最終的な答えだけを丸めてください。",
          "入力と期待の間で単位を混ぜる。メートルで入力して結果をフィートとして読むなど。",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aの代わりに<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Bを使う。既知の<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>がもう一方の鋭角の頂点にある場合、対辺と隣辺のラベルが入れ替わります。",
          "角が鋭角（0度から90度の間）でなければならないことを忘れる。90度の入力では三角形がつぶれます。",
          "サインと逆サインを混同する。このページは角度から辺を計算します。逆関数は辺から角度を計算します。",
          "おおまかな現場測定を小数点以下6桁で信じる。報告する精度は測定の精度に合わせてください。"
        ],
        "listTitle": "避けるべき12の間違い：",
        "paragraphs": [
          "最もよく見られる誤りです。それぞれに簡単な対策があります。"
        ]
      },
      {
        "customHtml": "<p>3つの独立したチェックでサインの結果を確認できます。答えを信じる前に、少なくとも1つを使ってください。</p>\n<h3>方法1：比率を確認する</h3>\n<p>結果を斜辺で割り、sin(A) と比較します。例1の場合：3 / 5 = 0.6 であり、sin(36.87°) ≈ 0.6 です。一致します。</p>\n<h3>方法2：ピタゴラスの定理で確認する</h3>\n<p>隣辺を b = √(c² − a²) で求め、a² + b² = c² を検証します。例1の場合：b = √(25 − 9) = 4、9 + 16 = 25 です。</p>\n<h3>方法3：余角で確認する</h3>\n<p>角B = 90° − A を計算し、コサインで検証します。b は c × cos(A) に等しいはずです。例1の場合：5 × cos(36.87°) ≈ 5 × 0.8 = 4 であり、上で求めた b と一致します。</p>",
        "h2": "答えを検証する方法",
        "paragraphs": []
      },
      {
        "h2": "まとめ",
        "paragraphs": [
          "サインの公式 a = c × sin(A) は、既知の斜辺と<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を1回の掛け算で対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>に変換します。斜辺を特定し、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>が度数で鋭角であることを確認し、掛け算をして、結果が斜辺より短いことを確認してください。",
          "逆の問題、既知の辺から<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>を求める場合は、<a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">サインから角度を求める直角三角形計算機</a>を使ってください。隣辺については、<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">コサインから辺を求める直角三角形計算機</a>を使ってください。"
        ]
      }
    ],
    "faqs": [
      {
        "answer": "直角三角形の対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> a の長さを計算します。この公式を使うには、斜辺 c と鋭<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aが必要です。",
        "question": "a = c × sin(A) は何を計算しますか？"
      },
      {
        "answer": "サインは対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を斜辺に関係付けます。コサインは隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を斜辺に関係付けます。この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を求めるため、サインが正しい関数です。",
        "question": "なぜここではコサインではなくサインを使うのですか？"
      },
      {
        "answer": "ありません。直角三角形では対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は常に斜辺より短いです。結果が大きい場合、入力のどちらかが間違っています。",
        "question": "結果が斜辺より大きくなることはありますか？"
      },
      {
        "answer": "90度の入力はここでは有効ではありません。直角三角形では、2つの鋭角はそれぞれ0度から90度の間でなければなりません。90度の<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>は、直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の頂点にすでに固定されています。",
        "question": "角度がちょうど90度の場合はどうなりますか？"
      },
      {
        "answer": "はい。この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aを度数で期待します。<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>がラジアンの場合は、180を掛けてπで割ることで、先に度数に変換してください。",
        "question": "角度は度数でなければなりませんか？"
      },
      {
        "answer": "サインの<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aの対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を求めます（a = c × sin(A)）。<a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">コサイン計算機</a>は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aの隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を求めます（b = c × cos(A)）。同じ入力で、出力される<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>が異なります。",
        "question": "コサイン計算機との違いは何ですか？"
      },
      {
        "answer": "はい。ベクトルが斜辺、その垂直成分が対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>です。水平から30°上向きの 100 N の力の垂直成分は、100 × sin(30°) = 50 N です。",
        "question": "物理学の力のベクトルに使えますか？"
      },
      {
        "answer": "一貫した長さの単位なら何でも使えます。メートル、フィート、インチ、ミリメートル。結果は、入力した斜辺と同じ単位になります。1回の計算の中で単位を混ぜないでください。",
        "question": "どの単位を使うべきですか？"
      },
      {
        "answer": "小さな違いは、サイン値をどの段階で丸めるかによって生じます。掛け算の間は完全な精度を保ち、教科書の丸めに合わせて最終的な答えだけを丸めてください。",
        "question": "なぜ教科書と答えが少し違うのですか？"
      },
      {
        "answer": "いいえ。角Aはこの<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>では鋭角（0度から90度の間）でなければなりません。直角三角形では、基準<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>として鈍角は現れません。",
        "question": "角度は90度より大きくできますか？"
      },
      {
        "answer": "公式を変形します。c = a / sin(A)。a = 3、A = 36.87° の場合、c = 3 / 0.6 = 5 です。",
        "question": "対辺と角度が分かっている場合、斜辺をどう求めますか？"
      },
      {
        "answer": "はい。回転しても、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>Aに対する対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>がどの<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>かは変わりません。まず基準<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かい側の<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を特定し、次に a = c × sin(A) を適用してください。",
        "question": "三角形が回転または反転している場合でもサインは使えますか？"
      }
    ]
  },
  "ko":   {
    "extraSections": [
      {
        "h2": "사인으로 대변 구하는 방법",
        "paragraphs": [
          "5m 사다리가 지면에 대해 65도 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>를 이루며 벽에 기대어 있습니다. 사다리 길이와 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>를 알지만, 사다리가 닿는 높이는 얼마일까요? 그 수직 높이는 직각삼각형의 대변으로, 사인을 이용해 직접 구할 수 있습니다. 사인 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 빗변과 하나의 예각을 입력으로 받아 대벽을 반환하며, 삼각함수표를 직접 찾을 필요가 없습니다.",
          "이 가이드에서는 사인 공식을 기본 원리부터 설명합니다. 대변이 무엇인지, 왜 사인이 빗변을 사용하는지, 삼각형의 방향에 관계없이 올바른 변을 식별하는 방법, 그리고 결과를 실제 측정에 적용하는 방법까지 다룹니다. 공식은 a = c × sin(A)이며, 여기서 a는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A의 대변, c는 빗변, A는 도 단위로 측정한 각도입니다. 두 변을 알아야 하는 피타고라스 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>와 달리, 이 도구는 한 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>와 한 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>만 알면 동작합니다."
        ]
      },
      {
        "h2": "대변과 빗변 이해하기",
        "paragraphs": [],
        "customHtml": "<h3>직각삼각형이란?</h3>\n<p>직각삼각형은 정확히 90도인 각 하나를 포함합니다. 나머지 두 각은 예각(각각 90도 미만)이며 서로 여각 관계로, 합이 90도가 됩니다. 각도 A가 36.87도라면 다른 예각 B는 53.13도여야 합니다. 사인 계산에는 이 직각 구조가 필요합니다. 비율의 정의가 두 변 사이의 수직 관계에 의존하기 때문입니다.</p>\n<h3>빗변이란?</h3>\n<p>빗변은 직각의 반대쪽에 있으며 항상 가장 긴 변입니다. 관례상 c로 표시합니다. 회전된 도형에서 찾으려면 직각 표시와 닿지 않는 변을 찾으세요. 이 계산기에서는 빗변을 알려진 값으로 입력합니다.</p>\n<h3>대변이란?</h3>\n<p>대변은 기준 각도 A의 정반대편에 있는 변입니다. 각도 A에 대해 변 a가 대변이고 변 b가 이웃변입니다. 기준을 각도 B로 바꾸면 표시가 바뀝니다. 변 b가 대변이 되고 변 a가 이웃변이 됩니다. 빗변은 변하지 않으며, 항상 c로 90도 각도의 반대쪽에 있습니다.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"왼쪽 아래에 각도 A가 있고 대변 a, 이웃변 b, 빗변 c가 표시된 직각삼각형\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">사인을 위한 삼각형 구조: 왼쪽 아래의 각도 A, 수직인 대변 a, 밑변을 이루는 이웃변 b, 직각 반대편의 빗변 c.</figcaption>\n</figure>"
      },
      {
        "h2": "직각삼각형에서 사인이란?",
        "paragraphs": [],
        "customHtml": "<p>사인은 간단한 비율을 나타냅니다. 주어진 예각에 대해 대변을 빗변으로 나누면 삼각형의 크기에 관계없이 항상 같은 수가 나옵니다. 그 수가 sin(A)입니다. 각도 A가 30도라면 sin(30°) = 0.5이며, 이는 대벽이 삼각형이 크든 작든 빗변의 정확히 절반이라는 뜻입니다.</p>\n<p>이 비율에는 단위가 없습니다. 단위가 서로 상쇄되기 때문입니다. 미터를 미터로 나누면 순수한 수가 남습니다. 대벽을 구하려면 비율을 변형하세요. sin(A) = a / c에서 시작합니다. 양변에 c를 곱합니다. 분모의 c가 상쇄되어 <strong>a = c × sin(A)</strong>가 남습니다. 이 공식은 알려진 빗변에 알려진 각도의 사인값을 곱합니다.</p>\n<p>유효한 예각(0도에서 90도 사이)에 대해 sin(A)는 0과 1 사이의 값입니다. 따라서 대벽이 빗변보다 짧다는 것이 보장되며, 이는 기하학과 일치합니다. 어떤 변도 빗변을 초과할 수 없습니다.</p>\n<h3>SOH-CAH-TOA 이해하기</h3>\n<p>SOH-CAH-TOA는 세 가지 기본 비율을 외우는 방법입니다. SOH: 사인 = 대변 / 빗변. CAH: 코사인 = 이웃변 / 빗변. TOA: 탄젠트 = 대변 / 이웃변. 이 페이지에서는 SOH에 집중하세요. 이 암기법은 올바른 비율을 고르는 데 도움이 되지만, 기준 각도의 대변을 정확히 식별하는 것은 여전히 필요합니다.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"대변 a와 빗변 c가 강조된 직각삼각형, sin(A)는 a를 c로 나눈 값\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">사인 비율: 강조된 대변 a를 강조된 빗변 c로 나누면 sin(A)가 됩니다.</figcaption>\n</figure>"
      },
      {
        "h2": "직각삼각형 사인 변 계산기 사용 방법",
        "paragraphs": [
          "정확한 결과를 얻으려면 다음 단계를 따르세요."
        ],
        "listTitle": "단계:",
        "listItems": [
          "삼각형에서 직각을 확인하세요. 한 모서리가 90도인지 확인합니다.",
          "알려진 예각 A를 확인하세요. 직각이 아닌 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>인지 확인합니다.",
          "빗변 c를 찾으세요. 직각 반대편의 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>로, 항상 가장 긴 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>입니다.",
          "대변 a를 확인하세요. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A의 정반대편에 있습니다.",
          "빗변 길이 c를 첫 번째 입력란에 입력하세요.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A를 도 단위로 두 번째 입력란에 입력하세요.",
          "빗변 입력값과 일치하는 측정 단위를 선택하세요.",
          "계산 버튼을 누르세요. 풀이 단계와 함께 대변 a가 표시됩니다.",
          "단계를 검토하여 공식과 대입이 문제와 일치하는지 확인하세요.",
          "a가 c보다 짧은지 확인하세요. 그렇지 않다면 빗변으로 입력한 변을 다시 확인하세요."
        ]
      },
      {
        "h2": "사인으로 대변 계산하는 방법",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>예제 1: 기본 3-4-5 직각삼각형</h3>\n<p><strong>주어진 값:</strong> c = 5 cm, A = 36.87°. <strong>구하기:</strong> a.</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 5 × sin(36.87°)</p>\n<p><strong>계산:</strong> sin(36.87°) ≈ 0.6이므로, a ≈ 5 × 0.6 = 3</p>\n<p><strong>답:</strong> <strong>a = 3 cm</strong></p>\n<p>3-4-5 삼각형은 가장 익숙한 직각삼각형입니다. 표시된 정밀도에서 sin(36.87°)이 0.6이므로 대벽이 정확히 3 cm가 됩니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 2: 특수각 30도</h3>\n<p><strong>주어진 값:</strong> c = 10 m, A = 30°. <strong>구하기:</strong> a.</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 10 × sin(30°)</p>\n<p><strong>계산:</strong> sin(30°) = 0.5이므로, a = 10 × 0.5 = 5</p>\n<p><strong>답:</strong> <strong>a = 5 m</strong></p>\n<p>30도에서는 대벽이 빗변의 정확히 절반입니다. 30°, 45°, 60° 같은 특수각은 기억해 둘 만한 깔끔한 사인값을 가집니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 3: 소수 측정값</h3>\n<p><strong>주어진 값:</strong> c = 12 ft, A = 60°. <strong>구하기:</strong> a.</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 12 × sin(60°)</p>\n<p><strong>계산:</strong> sin(60°) ≈ 0.8660254이므로, a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>답:</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>계산 중에는 사인값의 정밀도를 그대로 유지하고 최종 답에서만 반올림하세요. sin(60°)을 미리 0.87로 반올림하면 10.44 ft가 되어 피할 수 있는 작은 오차가 생깁니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 4: 가파른 각도</h3>\n<p><strong>주어진 값:</strong> c = 7.5 m, A = 42°. <strong>구하기:</strong> a.</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 7.5 × sin(42°)</p>\n<p><strong>계산:</strong> sin(42°) ≈ 0.6691306이므로, a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>답:</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>각도가 90도에 가까워질수록 대벽은 빗변 전체 길이에 가까워집니다. 42도에서는 이미 빗변의 약 67%입니다.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"단계별 사인 계산: 빗변 10 m, 각도 30도, 대변은 5 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">풀이 과정: a = 10 × sin(30°) = 5 m이며, 각 대입 단계가 표시되어 있습니다.</figcaption>\n</figure>"
      },
      {
        "h2": "사인 계산의 실생활 예제",
        "paragraphs": [
          "이 예제들은 사인 공식이 실제 측정 문제를 어떻게 해결하는지 보여줍니다. 각 경우에 알려진 경사 또는 대각선 길이가 빗변이며, 구하려는 수직 거리가 대변입니다."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>예제 5: 사다리가 닿는 높이 구하기</h3>\n<p><strong>주어진 값:</strong> 5 m 사다리가 지면과 65° 각도로 기대어 있습니다. <strong>구하기:</strong> 닿는 높이(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 5 × sin(65°)</p>\n<p><strong>계산:</strong> sin(65°) ≈ 0.9063078이므로, a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>답:</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>사다리는 빗변이고 벽의 높이는 지면 각도의 대변입니다. 이 높이만으로는 사다리가 안전하게 놓였는지 알 수 없습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 6: 완만한 경사로의 높이</h3>\n<p><strong>주어진 값:</strong> 길이 8 m, 경사 6°인 경사로. <strong>구하기:</strong> 수직 상승 높이(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 8 × sin(6°)</p>\n<p><strong>계산:</strong> sin(6°) ≈ 0.1045285이므로, a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>답:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>작은 각도는 작은 상승을 만듭니다. 6도에서는 경사로가 8 m 길이에서 1 m도 채 오르지 않습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 7: 30도로 매달린 짧은 로프</h3>\n<p><strong>주어진 값:</strong> 수평에서 30° 각도로 매달린 4.5 m 로프. <strong>구하기:</strong> 수직 낙차(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 4.5 × sin(30°)</p>\n<p><strong>계산:</strong> sin(30°) = 0.5이므로, a = 4.5 × 0.5 = 2.25</p>\n<p><strong>답:</strong> <strong>a = 2.25 m</strong></p>\n<p>30도 특수각 덕분에 정확합니다. 수직 성분은 로프 길이의 정확히 절반입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 8: 20 m 케이블의 수직 성분</h3>\n<p><strong>주어진 값:</strong> 20 m 케이블이 55°로 처져 있습니다. <strong>구하기:</strong> 수직 성분(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 20 × sin(55°)</p>\n<p><strong>계산:</strong> sin(55°) ≈ 0.8191520이므로, a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>답:</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>각도가 가파를수록 대벽은 빗변에 가까워집니다. 55도에서는 수직 성분이 케이블 길이의 약 82%입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 9: 완만한 경사의 긴 경사로</h3>\n<p><strong>주어진 값:</strong> 150 m 경사로가 12°로 오릅니다. <strong>구하기:</strong> 전체 상승 높이(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 150 × sin(12°)</p>\n<p><strong>계산:</strong> sin(12°) ≈ 0.2079117이므로, a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>답:</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>완만한 12도 경사도 150 m 경사로에서 31 m의 상승을 만듭니다. 긴 경사로는 높이를 빠르게 쌓습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 10: 측량 시준선</h3>\n<p><strong>주어진 값:</strong> 수평 위로 50° 기울어진 40 m 시준선. <strong>구하기:</strong> 표고차(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 40 × sin(50°)</p>\n<p><strong>계산:</strong> sin(50°) ≈ 0.7660444이므로, a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>답:</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>측량사는 이를 이용해 측정한 경사 거리와 각도를 수직 표고차로 환산합니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 11: 밀리미터 단위의 기계 링크</h3>\n<p><strong>주어진 값:</strong> 25°에 놓인 850 mm 링크. <strong>구하기:</strong> 수직 투영(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 850 × sin(25°)</p>\n<p><strong>계산:</strong> sin(25°) ≈ 0.4226183이므로, a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>답:</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>공식은 밀리미터에서도 동일하게 적용됩니다. 계산 중 소수 자릿수를 유지하세요. 359.2255는 359.30이 아니라 359.23으로 반올림됩니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 12: 지붕 서까래의 높이</h3>\n<p><strong>주어진 값:</strong> 35° 경사의 18 m 서까래. <strong>구하기:</strong> 수직 상승(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 18 × sin(35°)</p>\n<p><strong>계산:</strong> sin(35°) ≈ 0.5735764이므로, a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>답:</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>지붕공은 서까래(빗변)와 경사 각도를 측정한 뒤 사인을 이용해 지붕 마루가 벽체 위로 얼마나 높은지 구합니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 13: 긴 짚라인의 낙차</h3>\n<p><strong>주어진 값:</strong> 18°로 내려가는 250 m 짚라인. <strong>구하기:</strong> 전체 낙차(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 250 × sin(18°)</p>\n<p><strong>계산:</strong> sin(18°) ≈ 0.3090170이므로, a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>답:</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>짚라인 케이블이 빗변이고 낙차가 대변입니다. 이는 직선으로 단순화한 모델입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 14: 완만한 각도의 짧은 판자</h3>\n<p><strong>주어진 값:</strong> 8°로 기울어진 6 m 판자. <strong>구하기:</strong> 들린 끝의 높이(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 6 × sin(8°)</p>\n<p><strong>계산:</strong> sin(8°) ≈ 0.1391731이므로, a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>답:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>8도에서는 들린 끝이 1 m도 채 되지 않습니다. 완만한 들어올림이 필요할 때 작은 각도가 유용합니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 15: 힘의 성분 분해</h3>\n<p><strong>주어진 값:</strong> 수평 위 30° 방향으로 당기는 100 N 힘. <strong>구하기:</strong> 수직 성분(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 100 × sin(30°)</p>\n<p><strong>계산:</strong> sin(30°) = 0.5이므로, a = 100 × 0.5 = 50</p>\n<p><strong>답:</strong> <strong>a = 50 N</strong></p>\n<p>물리학에서 힘 벡터가 빗변이고 수직 성분이 대변입니다. 같은 사인 공식이 힘, 속도 및 기타 모든 벡터량에 적용됩니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 16: 짧은 어닝 지지대</h3>\n<p><strong>주어진 값:</strong> 48° 각도의 3.2 ft 지지대. <strong>구하기:</strong> 수직 도달 높이(a).</p>\n<p><strong>공식:</strong> a = c × sin(A)</p>\n<p><strong>대입:</strong> a = 3.2 × sin(48°)</p>\n<p><strong>계산:</strong> sin(48°) ≈ 0.7431448이므로, a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>답:</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>소규모 프로젝트도 같은 수학을 사용합니다. 지지대가 빗변이며, 사인 공식이 반환하는 값이 수직 도달 높이입니다.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"두 가지 실용 사인 예제: 사다리 높이 4.53 m와 경사로 상승 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">실생활 사인 활용: 65도의 5 m 사다리는 약 4.53 m 높이에 닿고, 12도의 150 m 경사로는 약 31.19 m 상승합니다.</figcaption>\n</figure>"
      },
      {
        "h2": "사인, 코사인, 탄젠트: 무엇을 사용할까",
        "paragraphs": [],
        "customHtml": "<p>각도와 빗변으로 변을 구하는 비율은 세 가지지만, 각각 구하는 변이 다릅니다. 잘못 고르는 것이 이 페이지에서 가장 흔한 오류입니다.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">알려진 값</th><th class=\"border px-4 py-2 text-left\">구하려는 값</th><th class=\"border px-4 py-2 text-left\">사용할 함수</th><th class=\"border px-4 py-2 text-left\">공식</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">대변 a</td><td class=\"border px-4 py-2\">사인</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">이웃변 b</td><td class=\"border px-4 py-2\">코사인</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">대변 a</td><td class=\"border px-4 py-2\">탄젠트</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>빗변을 알고 각도의 대변을 구할 때는 사인을 사용하세요. 각도 옆의 변을 구할 때는 코사인을 사용하세요. 빗변은 모르고 이웃변을 알 때는 탄젠트를 사용하세요. 각도와 대변을 알고 빗변을 구해야 한다면 변형하세요. c = a / sin(A).</p>"
      },
      {
        "h2": "각도가 대변에 미치는 영향",
        "paragraphs": [],
        "customHtml": "<p>빗변이 고정된 경우 각도가 클수록 대벽도 커집니다. 이 관계는 선형이 아닙니다. 사인은 처음에는 빠르게 증가하다가 각도가 90도에 가까워지면 완만해집니다.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">각도 A (c = 10 m)</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">대변 a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>각도를 두 배로 해도 변이 두 배가 되지는 않습니다. 30°에서 60°로 가면 대벽이 5.00 m에서 8.66 m로 증가하는데, 이는 약 1.73배이지 2배가 아닙니다. 따라서 단순 비례로 사인 결과를 추정할 수 없으며, 항상 sin(A)를 직접 계산하세요.</p>"
      },
      {
        "h2": "도, 단위, 반올림",
        "paragraphs": [
          "이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A를 도 단위로 받습니다. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>가 라디안이라면 먼저 변환하세요. 도 = 라디안 × (180 / π). 0.5라디안 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>는 약 28.65도입니다.",
          "빗변과 결과는 같은 단위를 공유합니다. c를 미터로 입력하면 a도 미터로 나오고, c를 피트로 입력하면 a도 피트로 나옵니다. 단위를 섞지 마세요. 미터 단위 빗변에 인치 단위 결과를 기대한다면 계산 전후에 변환이 필요합니다.",
          "사인 곱셈까지는 정밀도를 그대로 유지하고 최종 답에서만 반올림하세요. 건축 현장에서는 가장 가까운 밀리미터나 1/16인치로 반올림하는 것이 보통 충분하고, 교실에서는 소수 둘째 자리가 표준입니다. 대략 측정한 각도로 소수 여섯 자리를 보고하는 것은 없는 정밀도를 있는 것처럼 보이게 합니다."
        ]
      },
      {
        "h2": "흔한 사인 계산 실수",
        "paragraphs": [
          "가장 자주 나타나는 오류들입니다. 각각 간단한 해결책이 있습니다."
        ],
        "listTitle": "피해야 할 12가지 실수:",
        "listItems": [
          "이웃<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 빗변으로 사용하는 것. 빗변은 항상 직각 반대편에 있으며 가장 긴 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>입니다.",
          "사인 대신 코사인을 사용하는 것. 코사인은 원하는 대벽이 아니라 이웃변을 반환합니다.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A를 라디안으로 입력하는 것. 이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 도 단위를 받으므로, 0.5라디안을 0.5도로 입력하면 크게 틀린 답이 나옵니다.",
          "각도를 잘못된 꼭짓점에서 측정하는 것. 대벽은 각도 A를 기준으로 정의됩니다.",
          "빗변보다 긴 결과를 기대하는 것. sin(A)는 최대 1이므로 a는 c를 초과할 수 없습니다.",
          "실제로는 한 변인 값을 c로 입력하는 것. 빗변 입력값이 직각 반대편 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>인지 다시 확인하세요.",
          "곱하기 전에 sin(A)를 반올림하는 것. 오차 누적을 피하려면 최종 답에서만 반올림하세요.",
          "입력과 기대값 사이에서 단위를 섞는 것. 미터로 입력하고 결과를 피트로 읽는 경우가 예입니다.",
          "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A 대신 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> B를 사용하는 것. 알려진 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>가 다른 예각 꼭짓점에 있다면 대변과 이웃변 표시가 바뀝니다.",
          "각도가 예각(0도에서 90도 사이)이어야 한다는 점을 잊는 것. 90도 입력은 삼각형을 무너뜨립니다.",
          "사인과 역사인을 혼동하는 것. 이 페이지는 각도로 변을 계산하며, 역함수는 변으로 각도를 계산합니다.",
          "대략적인 현장 측정값을 소수 여섯 자리까지 믿는 것. 보고하는 정밀도는 측정 정밀도에 맞추세요."
        ]
      },
      {
        "h2": "답 검증 방법",
        "paragraphs": [],
        "customHtml": "<p>세 가지 독립적인 확인으로 사인 결과를 검증할 수 있습니다. 답을 믿기 전에 최소 하나를 사용하세요.</p>\n<h3>방법 1: 비율 확인하기</h3>\n<p>결과를 빗변으로 나누어 sin(A)와 비교하세요. 예제 1의 경우 3 / 5 = 0.6이며 sin(36.87°) ≈ 0.6입니다. 일치합니다.</p>\n<h3>방법 2: 피타고라스 정리로 확인하기</h3>\n<p>b = √(c² − a²)로 이웃변을 구한 뒤 a² + b² = c²를 확인하세요. 예제 1의 경우 b = √(25 − 9) = 4이며 9 + 16 = 25입니다.</p>\n<h3>방법 3: 여각으로 확인하기</h3>\n<p>각도 B = 90° − A를 계산한 뒤 코사인으로 검증하세요. b는 c × cos(A)와 같아야 합니다. 예제 1의 경우 5 × cos(36.87°) ≈ 5 × 0.8 = 4로, 위에서 구한 b와 일치합니다.</p>"
      },
      {
        "h2": "결론",
        "paragraphs": [
          "사인 공식 a = c × sin(A)는 알려진 빗변과 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>를 한 번의 곱셈으로 대벽으로 바꿉니다. 빗변을 확인하고, <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>가 도 단위이며 예각인지 확인한 뒤 곱하고, 결과가 빗변보다 짧은지 확인하세요.",
          "반대 문제, 즉 알려진 변으로 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>를 구하려면 <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">직각삼각형 사인 각도 계산기</a>를 사용하세요. 이웃변을 구하려면 <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">직각삼각형 코사인 변 계산기</a>를 사용하세요."
        ]
      }
    ],
    "faqs": [
      {
        "question": "a = c × sin(A)는 무엇을 계산하나요?",
        "answer": "직각삼각형에서 대변 a의 길이를 계산합니다. 이 공식을 사용하려면 빗변 c와 예각 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A가 필요합니다."
      },
      {
        "question": "여기서 코사인 대신 사인을 사용하는 이유는 무엇인가요?",
        "answer": "사인은 대벽을 빗변과 연결합니다. 코사인은 이웃<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 빗변과 연결합니다. 이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 대벽을 구하므로 사인이 올바른 함수입니다."
      },
      {
        "question": "결과가 빗변보다 클 수 있나요?",
        "answer": "아니요. 직각삼각형에서 대벽은 항상 빗변보다 짧습니다. 결과가 더 크다면 입력 중 하나가 잘못된 것입니다."
      },
      {
        "question": "각도가 정확히 90도라면 어떻게 되나요?",
        "answer": "90도 입력은 여기서 유효하지 않습니다. 직각삼각형에서 두 예각은 각각 0도에서 90도 사이여야 합니다. 90도 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>는 이미 직각 꼭짓점에 고정되어 있습니다."
      },
      {
        "question": "각도가 도 단위여야 하나요?",
        "answer": "예. 이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A를 도 단위로 받습니다. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>가 라디안이라면 먼저 도 단위로 변환하세요. 180을 곱하고 파이로 나누면 됩니다."
      },
      {
        "question": "코사인 계산기와 어떻게 다른가요?",
        "answer": "사인 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A의 대벽을 구합니다(a = c × sin(A)). <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">코사인 계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A의 이웃<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 구합니다(b = c × cos(A)). 입력은 같고 출력 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>이 다릅니다."
      },
      {
        "question": "물리학의 힘 벡터에도 사용할 수 있나요?",
        "answer": "예. 벡터가 빗변이고 수직 성분이 대벽입니다. 수평 위 30° 방향의 100 N 힘은 수직 성분이 100 × sin(30°) = 50 N입니다."
      },
      {
        "question": "어떤 단위를 사용해야 하나요?",
        "answer": "일관된 길이 단위라면 무엇이든 됩니다. 미터, 피트, 인치, 밀리미터. 결과는 입력한 빗변과 같은 단위를 사용합니다. 한 계산 안에서 단위를 섞지 마세요."
      },
      {
        "question": "교과서 답과 약간 다른 이유는 무엇인가요?",
        "answer": "작은 차이는 사인값을 어느 단계에서 반올림했느냐에서 옵니다. 곱셈 중에는 정밀도를 그대로 유지하고 최종 답에서만 반올림하여 교과서의 반올림과 맞추세요."
      },
      {
        "question": "각도가 90도를 초과할 수 있나요?",
        "answer": "아니요. 각도 A는 이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>에서 예각(0도에서 90도 사이)이어야 합니다. 둔각은 직각삼각형의 기준 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>가 될 수 없습니다."
      },
      {
        "question": "대벽과 각도를 알 때 빗변은 어떻게 구하나요?",
        "answer": "공식을 변형하세요. c = a / sin(A). a = 3이고 A = 36.87°라면 c = 3 / 0.6 = 5입니다."
      },
      {
        "question": "삼각형이 회전하거나 뒤집혀도 사인이 적용되나요?",
        "answer": "예. 회전해도 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a> A의 대변인 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>은 바뀌지 않습니다. 항상 기준 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각도</a>의 반대편 변을 먼저 확인한 뒤 a = c × sin(A)를 적용하세요."
      }
    ]
  },
  "ms":   {
    "extraSections": [
      {
        "h2": "Cara Mencari Sisi Bertentangan Menggunakan Sinus",
        "paragraphs": [
          "Sebuah tangga 5 m bersandar pada dinding pada <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> 65 darjah dengan tanah. Anda tahu panjang tangga dan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudutnya</a>, tetapi setinggi manakah ia sampai? Ketinggian menegak itu ialah kaki bertentangan segi tiga tepat, dan sinus menentukannya secara langsung. Sebuah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">sisi</a> sinus mengambil hipotenus dan satu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tirus sebagai input dan mengembalikan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan, tanpa memerlukan jadual trigonometri manual.",
          "Panduan ini menerangkan formula sinus dari prinsip asas: maksud <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan, mengapa sinus menggunakan hipotenus, cara mengenal pasti sisi yang betul dalam sebarang orientasi gambar rajah, dan cara menggunakan hasilnya untuk ukuran sebenar. Formulanya ialah a = c × sin(A), dengan a ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A, c ialah hipotenus, dan A diukur dalam darjah. Berbeza dengan <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> Pythagoras yang memerlukan dua sisi, alat ini berfungsi apabila anda mengetahui satu <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> dan satu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a>."
        ]
      },
      {
        "h2": "Memahami Sisi Bertentangan dan Hipotenus",
        "paragraphs": [],
        "customHtml": "<h3>Apakah Segi Tiga Tepat?</h3>\n<p>Segi tiga tepat mempunyai satu sudut yang berukuran tepat 90 darjah. Dua sudut lagi adalah tirus (masing-masing kurang daripada 90 darjah) dan pelengkap, bermaksud jumlahnya 90 darjah. Jika sudut A ialah 36.87 darjah, sudut tirus yang satu lagi B mestilah 53.13 darjah. Pengiraan sinus memerlukan struktur sudut tepat ini kerana definisi nisbah bergantung pada hubungan serenjang antara kaki-kaki segi tiga.</p>\n<h3>Apakah Hipotenus?</h3>\n<p>Hipotenus terletak bertentangan dengan sudut tepat dan sentiasa menjadi sisi terpanjang. Ia dilabelkan c mengikut kebiasaan. Untuk mencarinya dalam gambar rajah yang diputarkan, cari sisi yang tidak menyentuh tanda sudut tepat. Dalam kalkulator ini, anda memasukkan hipotenus sebagai nilai yang diketahui.</p>\n<h3>Apakah Sisi Bertentangan?</h3>\n<p>Sisi bertentangan ialah kaki yang terletak betul-betul bertentangan dengan sudut rujukan A. Bagi sudut A, sisi a adalah bertentangan dan sisi b adalah bersebelahan. Jika anda menukar rujukan kepada sudut B, labelnya bertukar: sisi b menjadi bertentangan dan sisi a menjadi bersebelahan. Hipotenus tidak pernah berubah; ia sentiasa c, bertentangan dengan sudut 90 darjah.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"Segi tiga tepat dengan sudut A di kiri bawah, kaki bertentangan a, kaki bersebelahan b, dan hipotenus c dilabelkan\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomi untuk sinus: sudut A di kiri bawah, kaki bertentangan a menegak, kaki bersebelahan b di sepanjang tapak, hipotenus c bertentangan dengan sudut tepat.</figcaption>\n</figure>"
      },
      {
        "h2": "Apakah Sinus dalam Segi Tiga Tepat?",
        "paragraphs": [],
        "customHtml": "<p>Sinus menyatakan nisbah mudah: bagi sudut tirus tertentu, kaki bertentangan dibahagi hipotenus sentiasa memberikan nombor yang sama. Nombor itu ialah sin(A). Jika sudut A ialah 30 darjah, sin(30°) = 0.5, yang bermaksud sisi bertentangan adalah tepat separuh daripada hipotenus, tidak kira betapa besar atau kecilnya segi tiga itu.</p>\n<p>Nisbah ini tidak berunit kerana unit-unit terhapus: meter dibahagi meter menghasilkan nombor tulen. Untuk mencari sisi bertentangan, susun semula nisbah itu. Mulakan dengan sin(A) = a / c. Darabkan kedua-dua belah dengan c. Huruf c dalam penyebut terhapus, meninggalkan <strong>a = c × sin(A)</strong>. Formula ini mendarabkan hipotenus yang diketahui dengan sinus sudut yang diketahui.</p>\n<p>Bagi mana-mana sudut tirus yang sah (antara 0 dan 90 darjah), sin(A) adalah antara 0 dan 1. Ini menjamin kaki bertentangan lebih pendek daripada hipotenus, yang selaras dengan geometri: tiada kaki boleh melebihi hipotenus.</p>\n<h3>Memahami SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA ialah alat bantu ingatan untuk tiga nisbah asas. SOH: Sinus = Bertentangan / Hipotenus. CAH: Kosinus = Bersebelahan / Hipotenus. TOA: Tangen = Bertentangan / Bersebelahan. Untuk halaman ini, tumpukan pada SOH. Mnemonik ini membantu anda memilih nisbah yang betul, tetapi anda masih perlu mengenal pasti dengan tepat sisi mana yang bertentangan dengan sudut rujukan anda.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"Segi tiga tepat yang mengetengahkan kaki bertentangan a dan hipotenus c dengan sin(A) sama dengan a dibahagi c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Nisbah sinus: bahagikan kaki bertentangan a yang diketengahkan dengan hipotenus c yang diketengahkan untuk mendapatkan sin(A).</figcaption>\n</figure>"
      },
      {
        "h2": "Cara Menggunakan Kalkulator Sisi Segi Tiga Tepat Daripada Sinus",
        "paragraphs": [
          "Ikuti langkah-langkah ini untuk mendapatkan hasil yang tepat."
        ],
        "listTitle": "Langkah-langkah:",
        "listItems": [
          "Kenal pasti <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat dalam segi tiga anda. Sahkan satu penjuru berukuran 90 darjah.",
          "Kenal pasti <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tirus A yang diketahui. Pastikan ia bukan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat.",
          "Cari hipotenus c. Ia ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat, sentiasa <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang.",
          "Kenal pasti kaki bertentangan a. Ia terletak betul-betul bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A.",
          "Masukkan panjang hipotenus c ke dalam medan input pertama.",
          "Masukkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dalam darjah ke dalam medan kedua.",
          "Pilih unit ukuran yang sepadan dengan input hipotenus anda.",
          "Tekan Kira. Hasilnya menunjukkan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan a berserta langkah penyelesaian.",
          "Semak langkah-langkah itu untuk mengesahkan formula dan gantian sepadan dengan masalah anda.",
          "Pastikan a lebih pendek daripada c. Jika tidak, semak semula sisi mana yang anda masukkan sebagai hipotenus."
        ]
      },
      {
        "h2": "Cara Mengira Sisi Bertentangan Menggunakan Sinus",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>Contoh 1: Segi Tiga Tepat 3-4-5 Asas</h3>\n<p><strong>Diberi:</strong> c = 5 cm, A = 36.87°. <strong>Cari:</strong> a.</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 5 × sin(36.87°)</p>\n<p><strong>Pengiraan:</strong> sin(36.87°) ≈ 0.6, jadi a ≈ 5 × 0.6 = 3</p>\n<p><strong>Jawapan:</strong> <strong>a = 3 cm</strong></p>\n<p>Segi tiga 3-4-5 ialah segi tiga tepat yang paling dikenali. Di sini sisi bertentangan keluar tepat 3 cm kerana sin(36.87°) ialah 0.6 pada ketepatan yang ditunjukkan.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 2: Sudut Khas 30 Darjah</h3>\n<p><strong>Diberi:</strong> c = 10 m, A = 30°. <strong>Cari:</strong> a.</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 10 × sin(30°)</p>\n<p><strong>Pengiraan:</strong> sin(30°) = 0.5 tepat, jadi a = 10 × 0.5 = 5</p>\n<p><strong>Jawapan:</strong> <strong>a = 5 m</strong></p>\n<p>Pada 30 darjah, sisi bertentangan adalah tepat separuh daripada hipotenus. Sudut khas seperti 30°, 45°, dan 60° memberikan nilai sinus yang kemas dan wajar diingati.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 3: Ukuran Perpuluhan</h3>\n<p><strong>Diberi:</strong> c = 12 ft, A = 60°. <strong>Cari:</strong> a.</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 12 × sin(60°)</p>\n<p><strong>Pengiraan:</strong> sin(60°) ≈ 0.8660254, jadi a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>Kekalkan ketepatan penuh pada nilai sinus semasa pengiraan dan bundarkan hanya jawapan akhir. Membundarkan sin(60°) kepada 0.87 lebih awal akan memberikan 10.44 ft, ralat kecil yang boleh dielakkan.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 4: Sudut Curam</h3>\n<p><strong>Diberi:</strong> c = 7.5 m, A = 42°. <strong>Cari:</strong> a.</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 7.5 × sin(42°)</p>\n<p><strong>Pengiraan:</strong> sin(42°) ≈ 0.6691306, jadi a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>Apabila sudut membesar ke arah 90 darjah, sisi bertentangan menghampiri panjang penuh hipotenus. Pada 42° ia sudah kira-kira 67% daripada hipotenus.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"Pengiraan sinus langkah demi langkah: hipotenus 10 m, sudut 30 darjah, sisi bertentangan sama dengan 5 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Penyelesaian kerja: a = 10 × sin(30°) = 5 m, dengan setiap langkah gantian ditunjukkan.</figcaption>\n</figure>"
      },
      {
        "h2": "Contoh Pengiraan Sinus dalam Kehidupan Sebenar",
        "paragraphs": [
          "Contoh-contoh ini menunjukkan bagaimana formula sinus menyelesaikan masalah ukuran praktikal. Dalam setiap kes, panjang condong atau pepenjuru yang diketahui ialah hipotenus, dan jarak menegak yang dikehendaki ialah kaki bertentangan."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>Contoh 5: Mencari Ketinggian yang Dicapai Tangga</h3>\n<p><strong>Diberi:</strong> Sebuah tangga 5 m bersandar pada 65° dengan tanah. <strong>Cari:</strong> ketinggian yang dicapainya (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 5 × sin(65°)</p>\n<p><strong>Pengiraan:</strong> sin(65°) ≈ 0.9063078, jadi a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>Tangga ialah hipotenus dan ketinggian dinding bertentangan dengan sudut tanah. Perhatikan bahawa ketinggian ini sahaja tidak memberitahu anda sama ada tangga diletakkan dengan selamat.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 6: Kenaikan Tanjakan Landai</h3>\n<p><strong>Diberi:</strong> Sebuah tanjakan 8 m panjang dengan kecondongan 6°. <strong>Cari:</strong> kenaikan menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 8 × sin(6°)</p>\n<p><strong>Pengiraan:</strong> sin(6°) ≈ 0.1045285, jadi a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Sudut kecil memberikan kenaikan kecil. Pada 6 darjah, tanjakan itu menaik kurang daripada satu meter sepanjang 8 m.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 7: Tali Pendek pada 30 Darjah</h3>\n<p><strong>Diberi:</strong> Tali 4.5 m tergantung pada 30° dari ufuk. <strong>Cari:</strong> kejatuhan menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 4.5 × sin(30°)</p>\n<p><strong>Pengiraan:</strong> sin(30°) = 0.5, jadi a = 4.5 × 0.5 = 2.25</p>\n<p><strong>Jawapan:</strong> <strong>a = 2.25 m</strong></p>\n<p>Sudut khas 30 darjah menjadikan ini tepat: komponen menegak adalah tepat separuh panjang tali.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 8: Kabel Merentasi 20 Meter</h3>\n<p><strong>Diberi:</strong> Kabel 20 m panjang melendut pada 55°. <strong>Cari:</strong> komponen menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 20 × sin(55°)</p>\n<p><strong>Pengiraan:</strong> sin(55°) ≈ 0.8191520, jadi a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>Sudut yang lebih curam menolak sisi bertentangan lebih dekat kepada hipotenus. Pada 55°, komponen menegak adalah kira-kira 82% daripada panjang kabel.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 9: Tanjakan Panjang pada Cerun Landai</h3>\n<p><strong>Diberi:</strong> Tanjakan 150 m menaik pada 12°. <strong>Cari:</strong> jumlah kenaikan (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 150 × sin(12°)</p>\n<p><strong>Pengiraan:</strong> sin(12°) ≈ 0.2079117, jadi a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>Malah cerun landai 12 darjah menghasilkan kenaikan 31 m sepanjang 150 m tanjakan. Tanjakan panjang mengumpul ketinggian dengan cepat.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 10: Garis Pandang Ukur Tanah</h3>\n<p><strong>Diberi:</strong> Garis pandang 40 m bersudut 50° di atas ufuk. <strong>Cari:</strong> perbezaan ketinggian (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 40 × sin(50°)</p>\n<p><strong>Pengiraan:</strong> sin(50°) ≈ 0.7660444, jadi a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>Juru ukur menggunakan ini untuk menukar jarak cerun dan sudut yang diukur kepada perubahan ketinggian menegak.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 11: Sambungan Mekanikal dalam Milimeter</h3>\n<p><strong>Diberi:</strong> Sambungan 850 mm panjang terletak pada 25°. <strong>Cari:</strong> unjuran menegaknya (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 850 × sin(25°)</p>\n<p><strong>Pengiraan:</strong> sin(25°) ≈ 0.4226183, jadi a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>Formula ini berfungsi sama dalam milimeter. Kekalkan perpuluhan tambahan semasa pengiraan: 359.2255 dibundarkan kepada 359.23, bukan 359.30.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 12: Kenaikan Kasau Bumbung</h3>\n<p><strong>Diberi:</strong> Kasau 18 m panjang dicondongkan pada 35°. <strong>Cari:</strong> kenaikan menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 18 × sin(35°)</p>\n<p><strong>Pengiraan:</strong> sin(35°) ≈ 0.5735764, jadi a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>Tukang bumbung mengukur kasau (hipotenus) dan sudut kecondongan, kemudian menggunakan sinus untuk mencari setinggi mana puncak bumbung terletak di atas plate dinding.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 13: Kejatuhan Zipline Panjang</h3>\n<p><strong>Diberi:</strong> Zipline 250 m menurun pada 18°. <strong>Cari:</strong> jumlah kejatuhan (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 250 × sin(18°)</p>\n<p><strong>Pengiraan:</strong> sin(18°) ≈ 0.3090170, jadi a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>Kabel zipline ialah hipotenus; kejatuhan ialah kaki bertentangan. Ini ialah model garis lurus ringkas bagi tunggangan itu.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 14: Papan Pendek pada Sudut Landai</h3>\n<p><strong>Diberi:</strong> Papan 6 m senget pada 8°. <strong>Cari:</strong> ketinggian hujung yang terangkat (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 6 × sin(8°)</p>\n<p><strong>Pengiraan:</strong> sin(8°) ≈ 0.1391731, jadi a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Pada 8 darjah, hujung yang terangkat terletak di bawah satu meter tinggi. Sudut landai berguna apabila anda memerlukan angkatan lembut.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 15: Daya Dipecahkan kepada Komponen</h3>\n<p><strong>Diberi:</strong> Daya 100 N menarik pada 30° di atas ufuk. <strong>Cari:</strong> komponen menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 100 × sin(30°)</p>\n<p><strong>Pengiraan:</strong> sin(30°) = 0.5, jadi a = 100 × 0.5 = 50</p>\n<p><strong>Jawapan:</strong> <strong>a = 50 N</strong></p>\n<p>Dalam fizik, vektor daya ialah hipotenus dan komponen menegaknya ialah kaki bertentangan. Formula sinus yang sama terpakai pada daya, halaju, dan sebarang kuantiti vektor lain.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 16: Lengan Sokongan Awning Pendek</h3>\n<p><strong>Diberi:</strong> Lengan sokongan 3.2 ft bersudut pada 48°. <strong>Cari:</strong> capaian menegak (a).</p>\n<p><strong>Formula:</strong> a = c × sin(A)</p>\n<p><strong>Gantian:</strong> a = 3.2 × sin(48°)</p>\n<p><strong>Pengiraan:</strong> sin(48°) ≈ 0.7431448, jadi a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>Jawapan:</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>Projek berskala kecil menggunakan matematik yang sama. Lengan sokongan ialah hipotenus; capaian menegak ialah hasil formula sinus.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"Dua contoh sinus praktikal: ketinggian tangga 4.53 m dan kenaikan tanjakan 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Penggunaan sinus praktikal: tangga 5 m pada 65° mencapai kira-kira 4.53 m tinggi; tanjakan 150 m pada 12° menaik kira-kira 31.19 m.</figcaption>\n</figure>"
      },
      {
        "h2": "Sinus lwn Kosinus lwn Tangen: Yang Mana Digunakan",
        "paragraphs": [],
        "customHtml": "<p>Tiga nisbah boleh mencari sisi daripada sudut dan hipotenus, tetapi setiap satunya mencari sisi yang berbeza. Memilih yang salah ialah ralat paling lazim pada halaman-halaman ini.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Diketahui</th><th class=\"border px-4 py-2 text-left\">Diingini</th><th class=\"border px-4 py-2 text-left\">Gunakan</th><th class=\"border px-4 py-2 text-left\">Formula</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">sisi bertentangan a</td><td class=\"border px-4 py-2\">sinus</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">sisi bersebelahan b</td><td class=\"border px-4 py-2\">kosinus</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">sisi bertentangan a</td><td class=\"border px-4 py-2\">tangen</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>Gunakan sinus apabila hipotenus diketahui dan anda memerlukan sisi yang bertentangan dengan sudut. Gunakan kosinus apabila anda memerlukan sisi yang bersebelahan dengan sudut. Gunakan tangen apabila hipotenus tidak diketahui tetapi kaki bersebelahan diketahui. Jika anda mempunyai sudut dan memerlukan hipotenus pula, susun semula: c = a / sin(A).</p>"
      },
      {
        "h2": "Bagaimana Sudut Mengubah Sisi Bertentangan",
        "paragraphs": [],
        "customHtml": "<p>Bagi hipotenus tetap, sudut yang lebih besar menghasilkan sisi bertentangan yang lebih besar. Hubungannya tidak linear: sinus bertumbuh cepat pada mulanya, kemudian mendatar apabila sudut menghampiri 90 darjah.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Sudut A (c = 10 m)</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">Sisi bertentangan a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>Menggandakan sudut tidak menggandakan sisi. Beralih daripada 30° kepada 60° meningkatkan sisi bertentangan daripada 5.00 m kepada 8.66 m, faktor kira-kira 1.73, bukan 2. Inilah sebabnya anda tidak boleh menganggarkan hasil sinus dengan nisbah mudah; sentiasa kira sin(A) secara langsung.</p>"
      },
      {
        "h2": "Darjah, Unit, dan Pembundaran",
        "paragraphs": [
          "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> ini menjangkakan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dalam darjah. Jika <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> anda dalam radian, tukarkan dahulu: darjah = radian × (180 / π). <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Sudut</a> 0.5 radian adalah kira-kira 28.65 darjah.",
          "Hipotenus dan hasilnya berkongsi unit yang sama. Masukkan c dalam meter dan a keluar dalam meter; masukkan c dalam kaki dan a keluar dalam kaki. Jangan sekali-kali campur unit: hipotenus dalam meter dengan jangkaan inci memerlukan penukaran sebelum atau selepas pengiraan.",
          "Kekalkan ketepatan penuh sepanjang pendaraban sinus dan bundarkan hanya jawapan akhir. Untuk kerja pembinaan, membundarkan kepada milimeter terdekat atau seperenambelas inci biasanya mencukupi; untuk kerja bilik darjah, dua tempat perpuluhan adalah standard. Melaporkan enam perpuluhan daripada sudut yang diukur secara kasar membayangkan ketepatan yang anda tidak miliki."
        ]
      },
      {
        "h2": "Kesilapan Lazim Pengiraan Sinus",
        "paragraphs": [
          "Ini ialah ralat-ralat yang paling kerap muncul. Setiap satunya ada pembaikan mudah."
        ],
        "listTitle": "12 kesilapan yang perlu dielakkan:",
        "listItems": [
          "Menggunakan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan sebagai hipotenus. Hipotenus sentiasa bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat dan ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang.",
          "Menggunakan kosinus dan bukannya sinus. Kosinus mengembalikan kaki bersebelahan, bukan kaki bertentangan yang anda mahu di sini.",
          "Memasukkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dalam radian. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> ini menjangkakan darjah; 0.5 radian yang dimasukkan sebagai 0.5 darjah memberikan jawapan yang sangat salah.",
          "Mengukur sudut dari bucu yang salah. Sisi bertentangan ditakrifkan secara relatif kepada sudut A khususnya.",
          "Menjangkakan hasil yang lebih panjang daripada hipotenus. Memandangkan sin(A) paling banyak 1, a tidak boleh melebihi c.",
          "Memasukkan kaki yang diketahui sebagai c sedangkan ia sebenarnya kaki. Semak dua kali bahawa input hipotenus anda ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat.",
          "Membundarkan sin(A) sebelum mendarab. Bundarkan hanya jawapan akhir untuk mengelakkan ralat terkumpul.",
          "Mencampur unit antara input dan jangkaan, seperti memasukkan meter tetapi membaca hasil sebagai kaki.",
          "Menggunakan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> B dan bukannya <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A. Jika <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> yang anda ketahui berada di bucu tirus yang satu lagi, label bertentangan dan bersebelahan bertukar.",
          "Lupa bahawa sudut mestilah tirus (antara 0 dan 90 darjah). Input 90 darjah meruntuhkan segi tiga.",
          "Mengelirukan sinus dengan sinus songsang. Halaman ini mengira sisi daripada sudut; fungsi songsang mengira sudut daripada sisi.",
          "Mempercayai ukuran lapangan yang kasar sehingga enam perpuluhan. Padankan ketepatan yang anda laporkan dengan ketepatan ukuran anda."
        ]
      },
      {
        "h2": "Cara Mengesahkan Jawapan Anda",
        "paragraphs": [],
        "customHtml": "<p>Tiga semakan bebas mengesahkan hasil sinus. Gunakan sekurang-kurangnya satu sebelum mempercayai jawapan.</p>\n<h3>Kaedah 1: Semak nisbah</h3>\n<p>Bahagikan hasil dengan hipotenus dan bandingkan dengan sin(A). Untuk Contoh 1: 3 / 5 = 0.6, dan sin(36.87°) ≈ 0.6. Kedua-duanya sepadan.</p>\n<h3>Kaedah 2: Semak dengan Pythagoras</h3>\n<p>Cari kaki bersebelahan dengan b = √(c² − a²), kemudian sahkan a² + b² = c². Untuk Contoh 1: b = √(25 − 9) = 4, dan 9 + 16 = 25.</p>\n<h3>Kaedah 3: Semak sudut pelengkap</h3>\n<p>Kira sudut B = 90° − A, kemudian sahkan dengan kosinus: b sepatutnya sama dengan c × cos(A). Untuk Contoh 1: 5 × cos(36.87°) ≈ 5 × 0.8 = 4, sepadan dengan b yang ditemui di atas.</p>"
      },
      {
        "h2": "Kesimpulan",
        "paragraphs": [
          "Formula sinus a = c × sin(A) menukar hipotenus dan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> yang diketahui menjadi <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan dalam satu pendaraban. Kenal pasti hipotenus, sahkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> anda dalam darjah dan tirus, darabkan, dan pastikan hasilnya lebih pendek daripada hipotenus.",
          "Untuk masalah songsang, mencari <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> daripada sisi yang diketahui, gunakan <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sudut Segi Tiga Tepat Daripada Sinus</a>. Untuk kaki bersebelahan, gunakan <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">Kalkulator Sisi Segi Tiga Tepat Daripada Kosinus</a>."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Apakah yang dikira oleh a = c × sin(A)?",
        "answer": "Ia mengira panjang <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan a dalam segi tiga tepat. Anda memerlukan hipotenus c dan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tirus A untuk menggunakan formula ini."
      },
      {
        "question": "Mengapa saya menggunakan sinus dan bukannya kosinus di sini?",
        "answer": "Sinus menghubungkan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan dengan hipotenus. Kosinus menghubungkan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan dengan hipotenus. Memandangkan <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> ini mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan, sinus ialah fungsi yang betul."
      },
      {
        "question": "Bolehkah hasilnya lebih besar daripada hipotenus?",
        "answer": "Tidak. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> bertentangan sentiasa lebih pendek daripada hipotenus dalam segi tiga tepat. Jika hasil anda lebih besar, salah satu input adalah salah."
      },
      {
        "question": "Bagaimana jika sudut saya tepat 90 darjah?",
        "answer": "Input 90 darjah tidak sah di sini. Dalam segi tiga tepat, dua sudut tirus mestilah masing-masing antara 0 dan 90 darjah. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Sudut</a> 90 darjah sudah tetap pada bucu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat."
      },
      {
        "question": "Adakah sudut perlu dalam darjah?",
        "answer": "Ya. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> ini menjangkakan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dalam darjah. Jika <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> anda dalam radian, tukarkannya kepada darjah dahulu dengan mendarab 180 dan membahagi dengan pi."
      },
      {
        "question": "Bagaimanakah ini berbeza daripada kalkulator kosinus?",
        "answer": "<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> sinus mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A (a = c × sin(A)). <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">Kalkulator kosinus</a> mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bersebelahan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A (b = c × cos(A)). Input sama, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> output berbeza."
      },
      {
        "question": "Bolehkah saya menggunakannya untuk vektor daya dalam fizik?",
        "answer": "Ya. Vektor ialah hipotenus dan komponen menegaknya ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bertentangan. Daya 100 N pada 30° di atas ufuk mempunyai komponen menegak 100 × sin(30°) = 50 N."
      },
      {
        "question": "Unit apakah yang patut saya gunakan?",
        "answer": "Sebarang unit panjang yang konsisten boleh digunakan: meter, kaki, inci, milimeter. Hasilnya menggunakan unit yang sama seperti hipotenus yang anda masukkan. Jangan campur unit dalam satu pengiraan."
      },
      {
        "question": "Mengapa jawapan saya sedikit berbeza daripada buku teks?",
        "answer": "Perbezaan kecil datang daripada membundarkan nilai sinus pada peringkat berbeza. Kekalkan ketepatan penuh semasa pendaraban dan bundarkan hanya jawapan akhir untuk menyamai pembundaran buku teks."
      },
      {
        "question": "Bolehkah sudut lebih besar daripada 90 darjah?",
        "answer": "Tidak. Sudut A mestilah tirus (antara 0 dan 90 darjah) untuk <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> ini. Sudut tumpul tidak berlaku sebagai <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> rujukan dalam segi tiga tepat."
      },
      {
        "question": "Bagaimana saya mencari hipotenus jika saya tahu sisi bertentangan dan sudut?",
        "answer": "Susun semula formula: c = a / sin(A). Jika a = 3 dan A = 36.87°, maka c = 3 / 0.6 = 5."
      },
      {
        "question": "Adakah sinus berfungsi apabila segi tiga diputarkan atau diterbalikkan?",
        "answer": "Ya. Putaran tidak mengubah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> mana yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A. Sentiasa kenal pasti <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> rujukan anda dahulu, kemudian gunakan a = c × sin(A)."
      }
    ]
  },
  "pl":   {
    "extraSections": [
      {
        "h2": "Jak znaleźć bok naprzeciwległy za pomocą sinusa",
        "paragraphs": [
          "Drabina o długości 5 m opiera się o ścianę pod <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kątem</a> 65 stopni do podłoża. Znasz długość drabiny i <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a>, ale na jaką wysokość sięga? Ta wysokość pionowa to przyprostokątna naprzeciwległa trójkąta prostokątnego, a sinus znajduje ją bezpośrednio. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> na podstawie sinusa przyjmuje na wejściu przeciwprostokątną i jeden ostry <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a>, a zwraca naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>, bez potrzeby ręcznego korzystania z tablic trygonometrycznych.",
          "Ten przewodnik wyjaśnia wzór sinusowy od podstaw: co oznacza naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>, dlaczego sinus korzysta z przeciwprostokątnej, jak rozpoznać właściwe boki przy dowolnej orientacji rysunku oraz jak zastosować wynik do rzeczywistych pomiarów. Wzór to a = c × sin(A), gdzie a to <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> leżący naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A, c to przeciwprostokątna, a A mierzy się w stopniach. W przeciwieństwie do pitagorejskiego <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulatora</a>, który wymaga dwóch boków, to narzędzie działa, gdy znasz jeden <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> i jeden <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a>."
        ]
      },
      {
        "h2": "Zrozumienie boku naprzeciwległego i przeciwprostokątnej",
        "paragraphs": [],
        "customHtml": "<h3>Czym jest trójkąt prostokątny?</h3>\n<p>Trójkąt prostokątny zawiera jeden kąt mierzący dokładnie 90 stopni. Pozostałe dwa kąty są ostre (każdy mniejszy niż 90 stopni) i dopełniające się, co oznacza, że sumują się do 90 stopni. Jeśli kąt A wynosi 36.87 stopni, drugi kąt ostry B musi wynosić 53.13 stopni. Obliczenia sinusowe wymagają tej struktury kąta prostego, ponieważ definicje stosunków opierają się na prostopadłej relacji między przyprostokątnymi.</p>\n<h3>Czym jest przeciwprostokątna?</h3>\n<p>Przeciwprostokątna leży naprzeciw kąta prostego i jest zawsze najdłuższym bokiem. Zgodnie z konwencją oznacza się ją literą c. Aby ją znaleźć na obróconym rysunku, szukaj boku, który nie styka się z oznaczeniem kąta prostego. W tym kalkulatorze wprowadzasz przeciwprostokątną jako znaną wartość.</p>\n<h3>Czym jest bok naprzeciwległy?</h3>\n<p>Bok naprzeciwległy to przyprostokątna leżąca bezpośrednio naprzeciw kąta odniesienia A. Dla kąta A bok a jest naprzeciwległy, a bok b przyległy. Jeśli zmienisz odniesienie na kąt B, oznaczenia zamieniają się: bok b staje się naprzeciwległy, a bok a przyległy. Przeciwprostokątna nigdy się nie zmienia; to zawsze c, naprzeciw kąta 90 stopni.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-anatomy.svg\" alt=\"Trójkąt prostokątny z kątem A w lewym dolnym rogu, przyprostokątną naprzeciwległą a, przyprostokątną przyległą b oraz oznaczoną przeciwprostokątną c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomia dla sinusa: kąt A w lewym dolnym rogu, przyprostokątna naprzeciwległa a w pionie, przyprostokątna przyległa b wzdłuż podstawy, przeciwprostokątna c naprzeciw kąta prostego.</figcaption>\n</figure>"
      },
      {
        "h2": "Czym jest sinus w trójkącie prostokątnym?",
        "paragraphs": [],
        "customHtml": "<p>Sinus wyraża prosty stosunek: dla danego kąta ostrego przyprostokątna naprzeciwległa podzielona przez przeciwprostokątną zawsze daje tę samą liczbę. Tą liczbą jest sin(A). Jeśli kąt A wynosi 30 stopni, sin(30°) = 0.5, co oznacza, że bok naprzeciwległy jest dokładnie połową przeciwprostokątnej, niezależnie od tego, jak duży lub mały jest trójkąt.</p>\n<p>Stosunek nie ma jednostek, ponieważ jednostki się skracają: metry podzielone przez metry dają czystą liczbę. Aby znaleźć bok naprzeciwległy, przekształć stosunek. Zacznij od sin(A) = a / c. Pomnóż obie strony przez c. C w mianowniku się skraca, pozostawiając <strong>a = c × sin(A)</strong>. Wzór mnoży znaną przeciwprostokątną przez sinus znanego kąta.</p>\n<p>Dla każdego prawidłowego kąta ostrego (od 0 do 90 stopni) sin(A) mieści się między 0 a 1. To gwarantuje, że przyprostokątna naprzeciwległa jest krótsza od przeciwprostokątnej, co zgadza się z geometrią: żadna przyprostokątna nie może przekroczyć przeciwprostokątnej.</p>\n<h3>Zrozumienie SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA to pomoc pamięciowa dla trzech podstawowych stosunków. SOH: Sinus = Naprzeciwległa / Przeciwprostokątna. CAH: Cosinus = Przyległa / Przeciwprostokątna. TOA: Tangens = Naprzeciwległa / Przyległa. Na tej stronie skup się na SOH. Pomoc pamięciowa pomaga wybrać właściwy stosunek, ale nadal musisz poprawnie rozpoznać, który bok leży naprzeciw twojego kąta odniesienia.</p>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-ratio.svg\" alt=\"Trójkąt prostokątny z wyróżnioną przyprostokątną naprzeciwległą a i przeciwprostokątną c, przy czym sin(A) równa się a podzielone przez c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Stosunek sinusa: podziel wyróżnioną przyprostokątną naprzeciwległą a przez wyróżnioną przeciwprostokątną c, aby otrzymać sin(A).</figcaption>\n</figure>"
      },
      {
        "h2": "Jak korzystać z kalkulatora boku trójkąta prostokątnego na podstawie sinusa",
        "paragraphs": [
          "Wykonaj te kroki, aby uzyskać dokładny wynik."
        ],
        "listTitle": "Kroki:",
        "listItems": [
          "Rozpoznaj prosty <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> w swoim trójkącie. Potwierdź, że jeden wierzchołek mierzy 90 stopni.",
          "Rozpoznaj znany ostry <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A. Upewnij się, że nie jest to <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt prosty</a>.",
          "Zlokalizuj przeciwprostokątną c. Jest to <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> naprzeciw prostego <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a>, zawsze najdłuższy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>.",
          "Rozpoznaj przyprostokątną naprzeciwległą a. Leży ona bezpośrednio naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A.",
          "Wprowadź długość przeciwprostokątnej c w pierwsze pole wejściowe.",
          "Wprowadź <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A w stopniach w drugie pole.",
          "Wybierz jednostkę miary zgodną z wprowadzoną przeciwprostokątną.",
          "Naciśnij Oblicz. Wynik pokazuje naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> a wraz z krokami rozwiązania.",
          "Przejrzyj kroki, aby potwierdzić, że wzór i podstawienie odpowiadają twojemu zadaniu.",
          "Sprawdź, czy a jest krótsze od c. Jeśli nie, sprawdź ponownie, który bok wpisałeś jako przeciwprostokątną."
        ]
      },
      {
        "h2": "Jak obliczyć bok naprzeciwległy za pomocą sinusa",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>Przykład 1: Podstawowy trójkąt prostokątny 3-4-5</h3>\n<p><strong>Dane:</strong> c = 5 cm, A = 36.87°. <strong>Szukane:</strong> a.</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 5 × sin(36.87°)</p>\n<p><strong>Obliczenia:</strong> sin(36.87°) ≈ 0.6, więc a ≈ 5 × 0.6 = 3</p>\n<p><strong>Odpowiedź:</strong> <strong>a = 3 cm</strong></p>\n<p>Trójkąt 3-4-5 to najbardziej znany trójkąt prostokątny. Tutaj bok naprzeciwległy wychodzi dokładnie 3 cm, ponieważ sin(36.87°) przy pokazanej precyzji wynosi 0.6.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 2: Specjalny kąt 30 stopni</h3>\n<p><strong>Dane:</strong> c = 10 m, A = 30°. <strong>Szukane:</strong> a.</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 10 × sin(30°)</p>\n<p><strong>Obliczenia:</strong> sin(30°) = 0.5 dokładnie, więc a = 10 × 0.5 = 5</p>\n<p><strong>Odpowiedź:</strong> <strong>a = 5 m</strong></p>\n<p>Przy 30 stopniach bok naprzeciwległy jest dokładnie połową przeciwprostokątnej. Specjalne kąty, takie jak 30°, 45° i 60°, dają przejrzyste wartości sinusa warte zapamiętania.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 3: Pomiar dziesiętny</h3>\n<p><strong>Dane:</strong> c = 12 ft, A = 60°. <strong>Szukane:</strong> a.</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 12 × sin(60°)</p>\n<p><strong>Obliczenia:</strong> sin(60°) ≈ 0.8660254, więc a ≈ 12 × 0.8660254 ≈ 10.3923</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 10.39 ft</strong></p>\n<p>Zachowaj pełną precyzję wartości sinusa podczas obliczeń i zaokrąglij tylko ostateczny wynik. Wczesne zaokrąglenie sin(60°) do 0.87 dałoby 10.44 ft, co jest małym, ale możliwym do uniknięcia błędem.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 4: Stromy kąt</h3>\n<p><strong>Dane:</strong> c = 7.5 m, A = 42°. <strong>Szukane:</strong> a.</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 7.5 × sin(42°)</p>\n<p><strong>Obliczenia:</strong> sin(42°) ≈ 0.6691306, więc a ≈ 7.5 × 0.6691306 ≈ 5.0185</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 5.02 m</strong></p>\n<p>Gdy kąt rośnie w kierunku 90 stopni, bok naprzeciwległy zbliża się do pełnej długości przeciwprostokątnej. Przy 42° stanowi już około 67% przeciwprostokątnej.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-steps.svg\" alt=\"Obliczanie sinusa krok po kroku: przeciwprostokątna 10 m, kąt 30 stopni, bok naprzeciwległy równa się 5 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Rozwiązane zadanie: a = 10 × sin(30°) = 5 m, z pokazanym każdym krokiem podstawienia.</figcaption>\n</figure>"
      },
      {
        "h2": "Przykłady obliczeń sinusowych z życia",
        "paragraphs": [
          "Te przykłady pokazują, jak wzór sinusowy rozwiązuje praktyczne problemy pomiarowe. W każdym przypadku znana długość pochylona lub ukośna to przeciwprostokątna, a szukana odległość pionowa to przyprostokątna naprzeciwległa."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>Przykład 5: Znajdowanie wysokości, na jaką sięga drabina</h3>\n<p><strong>Dane:</strong> Drabina o długości 5 m opiera się pod kątem 65° do podłoża. <strong>Szukane:</strong> wysokość, na jaką sięga (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 5 × sin(65°)</p>\n<p><strong>Obliczenia:</strong> sin(65°) ≈ 0.9063078, więc a ≈ 5 × 0.9063078 ≈ 4.5315</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 4.53 m</strong></p>\n<p>Drabina to przeciwprostokątna, a wysokość ściany leży naprzeciw kąta przy podłożu. Zauważ, że sama ta wysokość nie mówi, czy drabina jest ustawiona bezpiecznie.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 6: Wzniesienie łagodnej rampy</h3>\n<p><strong>Dane:</strong> Rampa ma długość 8 m i nachylenie 6°. <strong>Szukane:</strong> wzniesienie pionowe (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 8 × sin(6°)</p>\n<p><strong>Obliczenia:</strong> sin(6°) ≈ 0.1045285, więc a ≈ 8 × 0.1045285 ≈ 0.8362</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Małe kąty dają małe wzniesienia. Przy 6 stopniach rampa wznosi się o mniej niż metr na długości 8 m.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 7: Krótka lina pod kątem 30 stopni</h3>\n<p><strong>Dane:</strong> Lina o długości 4.5 m zwisa pod kątem 30° od poziomu. <strong>Szukane:</strong> spadek pionowy (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 4.5 × sin(30°)</p>\n<p><strong>Obliczenia:</strong> sin(30°) = 0.5, więc a = 4.5 × 0.5 = 2.25</p>\n<p><strong>Odpowiedź:</strong> <strong>a = 2.25 m</strong></p>\n<p>Specjalny kąt 30 stopni sprawia, że wynik jest dokładny: składowa pionowa to dokładnie połowa długości liny.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 8: Kabel o długości 20 metrów</h3>\n<p><strong>Dane:</strong> Kabel o długości 20 m zwisa pod kątem 55°. <strong>Szukane:</strong> składowa pionowa (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 20 × sin(55°)</p>\n<p><strong>Obliczenia:</strong> sin(55°) ≈ 0.8191520, więc a ≈ 20 × 0.8191520 ≈ 16.3830</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 16.38 m</strong></p>\n<p>Bardziej strome kąty sprawiają, że bok naprzeciwległy zbliża się do przeciwprostokątnej. Przy 55° składowa pionowa to około 82% długości kabla.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 9: Długa rampa o łagodnym nachyleniu</h3>\n<p><strong>Dane:</strong> Rampa o długości 150 m wznosi się pod kątem 12°. <strong>Szukane:</strong> całkowite wzniesienie (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 150 × sin(12°)</p>\n<p><strong>Obliczenia:</strong> sin(12°) ≈ 0.2079117, więc a ≈ 150 × 0.2079117 ≈ 31.1868</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 31.19 m</strong></p>\n<p>Nawet łagodne nachylenie 12 stopni daje wzniesienie 31 m na długości 150 m rampy. Długie rampy szybko nabierają wysokości.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 10: Geodezyjna linia celowania</h3>\n<p><strong>Dane:</strong> Linia celowania o długości 40 m jest nachylona pod kątem 50° powyżej poziomu. <strong>Szukane:</strong> różnica wysokości (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 40 × sin(50°)</p>\n<p><strong>Obliczenia:</strong> sin(50°) ≈ 0.7660444, więc a ≈ 40 × 0.7660444 ≈ 30.6418</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 30.64 m</strong></p>\n<p>Geodeci używają tego, aby przeliczyć zmierzoną odległość pochyłą i kąt na pionową zmianę wysokości.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 11: Mechaniczne ogniwo w milimetrach</h3>\n<p><strong>Dane:</strong> Ogniwo o długości 850 mm leży pod kątem 25°. <strong>Szukane:</strong> jego rzut pionowy (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 850 × sin(25°)</p>\n<p><strong>Obliczenia:</strong> sin(25°) ≈ 0.4226183, więc a ≈ 850 × 0.4226183 ≈ 359.2255</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 359.23 mm</strong></p>\n<p>Wzór działa identycznie w milimetrach. Zachowaj dodatkowe miejsce dziesiętne podczas obliczeń: 359.2255 zaokrągla się do 359.23, a nie do 359.30.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 12: Wzniesienie krokwi dachowej</h3>\n<p><strong>Dane:</strong> Krokiew o długości 18 m ma nachylenie 35°. <strong>Szukane:</strong> wzniesienie pionowe (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 18 × sin(35°)</p>\n<p><strong>Obliczenia:</strong> sin(35°) ≈ 0.5735764, więc a ≈ 18 × 0.5735764 ≈ 10.3244</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 10.32 m</strong></p>\n<p>Dekarze mierzą krokiew (przeciwprostokątną) i kąt nachylenia, a następnie używają sinusa, aby ustalić, jak wysoko szczyt dachu znajduje się nad murłatą.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 13: Spadek na długiej tyrolce</h3>\n<p><strong>Dane:</strong> Tyrolka o długości 250 m opada pod kątem 18°. <strong>Szukane:</strong> całkowity spadek (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 250 × sin(18°)</p>\n<p><strong>Obliczenia:</strong> sin(18°) ≈ 0.3090170, więc a ≈ 250 × 0.3090170 ≈ 77.2542</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 77.25 m</strong></p>\n<p>Lina tyrolki to przeciwprostokątna, a spadek to przyprostokątna naprzeciwległa. To uproszczony model prostej linii zjazdu.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 14: Krótka deska pod płytkim kątem</h3>\n<p><strong>Dane:</strong> Deska o długości 6 m jest przechylona pod kątem 8°. <strong>Szukane:</strong> wysokość uniesionego końca (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 6 × sin(8°)</p>\n<p><strong>Obliczenia:</strong> sin(8°) ≈ 0.1391731, więc a ≈ 6 × 0.1391731 ≈ 0.8350</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 0.84 m</strong></p>\n<p>Przy 8 stopniach uniesiony koniec znajduje się na wysokości poniżej metra. Płytkie kąty są przydatne, gdy potrzebne jest delikatne uniesienie.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 15: Siła rozłożona na składowe</h3>\n<p><strong>Dane:</strong> Siła 100 N działa pod kątem 30° powyżej poziomu. <strong>Szukane:</strong> składowa pionowa (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 100 × sin(30°)</p>\n<p><strong>Obliczenia:</strong> sin(30°) = 0.5, więc a = 100 × 0.5 = 50</p>\n<p><strong>Odpowiedź:</strong> <strong>a = 50 N</strong></p>\n<p>W fizyce wektor siły to przeciwprostokątna, a jego składowa pionowa to przyprostokątna naprzeciwległa. Ten sam wzór sinusowy stosuje się do sił, prędkości i wszelkich innych wielkości wektorowych.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 16: Krótkie ramię wspornika markizy</h3>\n<p><strong>Dane:</strong> Ramię wspornika o długości 3.2 ft jest ustawione pod kątem 48°. <strong>Szukane:</strong> zasięg pionowy (a).</p>\n<p><strong>Wzór:</strong> a = c × sin(A)</p>\n<p><strong>Podstawienie:</strong> a = 3.2 × sin(48°)</p>\n<p><strong>Obliczenia:</strong> sin(48°) ≈ 0.7431448, więc a ≈ 3.2 × 0.7431448 ≈ 2.3781</p>\n<p><strong>Odpowiedź:</strong> <strong>a ≈ 2.38 ft</strong></p>\n<p>Projekty w małej skali korzystają z tej samej matematyki. Ramię wspornika to przeciwprostokątna, a zasięg pionowy to wynik wzoru sinusowego.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/sine/sine-applications.svg\" alt=\"Dwa praktyczne przykłady sinusa: wysokość drabiny 4.53 m i wzniesienie rampy 31.19 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Praktyczne zastosowanie sinusa: drabina o długości 5 m pod kątem 65° sięga na wysokość około 4.53 m; rampa o długości 150 m pod kątem 12° wznosi się o około 31.19 m.</figcaption>\n</figure>"
      },
      {
        "h2": "Sinus, cosinus czy tangens: którego użyć",
        "paragraphs": [],
        "customHtml": "<p>Trzy stosunki pozwalają znaleźć bok na podstawie kąta i przeciwprostokątnej, ale każdy znajduje inny bok. Wybór niewłaściwego to najczęstszy błąd na tych stronach.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Znane</th><th class=\"border px-4 py-2 text-left\">Szukane</th><th class=\"border px-4 py-2 text-left\">Użyj</th><th class=\"border px-4 py-2 text-left\">Wzór</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">bok naprzeciwległy a</td><td class=\"border px-4 py-2\">sinus</td><td class=\"border px-4 py-2\">a = c × sin(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">c, A</td><td class=\"border px-4 py-2\">bok przyległy b</td><td class=\"border px-4 py-2\">cosinus</td><td class=\"border px-4 py-2\">b = c × cos(A)</td></tr>\n<tr><td class=\"border px-4 py-2\">b, A</td><td class=\"border px-4 py-2\">bok naprzeciwległy a</td><td class=\"border px-4 py-2\">tangens</td><td class=\"border px-4 py-2\">a = b × tan(A)</td></tr>\n</tbody></table>\n<p>Użyj sinusa, gdy znana jest przeciwprostokątna i potrzebny jest bok naprzeciw kąta. Użyj cosinusa, gdy potrzebny jest bok obok kąta. Użyj tangensa, gdy przeciwprostokątna jest nieznana, ale znana jest przyprostokątna przyległa. Jeśli masz kąt i zamiast tego potrzebujesz przeciwprostokątnej, przekształć wzór: c = a / sin(A).</p>"
      },
      {
        "h2": "Jak kąt zmienia bok naprzeciwległy",
        "paragraphs": [],
        "customHtml": "<p>Przy stałej przeciwprostokątnej większy kąt daje większy bok naprzeciwległy. Zależność nie jest liniowa: sinus początkowo rośnie szybko, a następnie spłaszcza się, gdy kąt zbliża się do 90 stopni.</p>\n<table class=\"w-full my-6 border-collapse\">\n<thead><tr><th class=\"border px-4 py-2 text-left\">Kąt A (c = 10 m)</th><th class=\"border px-4 py-2 text-left\">sin(A)</th><th class=\"border px-4 py-2 text-left\">Bok naprzeciwległy a</th></tr></thead>\n<tbody>\n<tr><td class=\"border px-4 py-2\">10°</td><td class=\"border px-4 py-2\">0.1736</td><td class=\"border px-4 py-2\">1.74 m</td></tr>\n<tr><td class=\"border px-4 py-2\">30°</td><td class=\"border px-4 py-2\">0.5000</td><td class=\"border px-4 py-2\">5.00 m</td></tr>\n<tr><td class=\"border px-4 py-2\">45°</td><td class=\"border px-4 py-2\">0.7071</td><td class=\"border px-4 py-2\">7.07 m</td></tr>\n<tr><td class=\"border px-4 py-2\">60°</td><td class=\"border px-4 py-2\">0.8660</td><td class=\"border px-4 py-2\">8.66 m</td></tr>\n<tr><td class=\"border px-4 py-2\">80°</td><td class=\"border px-4 py-2\">0.9848</td><td class=\"border px-4 py-2\">9.85 m</td></tr>\n</tbody></table>\n<p>Podwojenie kąta nie podwaja boku. Przejście od 30° do 60° zwiększa bok naprzeciwległy z 5.00 m do 8.66 m, czyli około 1.73 razy, a nie 2 razy. Dlatego nie można szacować wyników sinusowych prostą proporcją; zawsze obliczaj sin(A) bezpośrednio.</p>"
      },
      {
        "h2": "Stopnie, jednostki i zaokrąglanie",
        "paragraphs": [
          "Ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> oczekuje <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A w stopniach. Jeśli twój <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> jest w radianach, przelicz go najpierw: degrees = radians × (180 / π). <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Kąt</a> 0.5 radiana to około 28.65 stopni.",
          "Przeciwprostokątna i wynik mają tę samą jednostkę. Wpisz c w metrach, a wynik otrzymasz w metrach; wpisz c w stopach, a wynik otrzymasz w stopach. Nigdy nie mieszaj jednostek: przeciwprostokątna w metrach przy oczekiwaniu cali wymaga przeliczenia przed lub po obliczeniu.",
          "Zachowaj pełną precyzję podczas mnożenia przez sinus i zaokrąglij tylko ostateczny wynik. W pracach budowlanych zaokrąglenie do najbliższego milimetra lub szesnastej części cala zwykle wystarcza; w pracach szkolnych standardem są dwa miejsca dziesiętne. Podawanie sześciu miejsc dziesiętnych na podstawie z grubsza zmierzonego kąta sugeruje precyzję, której nie masz."
        ]
      },
      {
        "h2": "Częste błędy w obliczeniach sinusowych",
        "paragraphs": [
          "To błędy, które pojawiają się najczęściej. Każdy ma proste rozwiązanie."
        ],
        "listTitle": "12 błędów, których należy unikać:",
        "listItems": [
          "Używanie przyległego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> jako przeciwprostokątnej. Przeciwprostokątna zawsze leży naprzeciw prostego <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> i jest najdłuższym <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokiem</a>.",
          "Używanie cosinusa zamiast sinusa. Cosinus zwraca przyprostokątną przyległą, a nie naprzeciwległą, której tu potrzebujesz.",
          "Wprowadzanie <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A w radianach. Ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> oczekuje stopni; 0.5 radiana wpisane jako 0.5 stopnia daje całkowicie błędny wynik.",
          "Mierzenie kąta od niewłaściwego wierzchołka. Bok naprzeciwległy definiuje się względem konkretnie kąta A.",
          "Oczekiwanie wyniku dłuższego niż przeciwprostokątna. Ponieważ sin(A) wynosi co najwyżej 1, a nigdy nie może przekroczyć c.",
          "Wpisywanie znanej przyprostokątnej jako c, gdy w rzeczywistości jest to przyprostokątna. Sprawdź dwukrotnie, czy wprowadzona przeciwprostokątna to <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> naprzeciw prostego <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a>.",
          "Zaokrąglanie sin(A) przed mnożeniem. Zaokrąglij tylko ostateczny wynik, aby uniknąć narastania błędu.",
          "Mieszanie jednostek między danymi wejściowymi a oczekiwaniami, np. wpisywanie metrów, ale odczytywanie wyniku w stopach.",
          "Używanie <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> B zamiast <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A. Jeśli znany <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> znajduje się przy drugim ostrym wierzchołku, oznaczenia naprzeciwległy i przyległy zamieniają się.",
          "Zapominanie, że kąt musi być ostry (od 0 do 90 stopni). Wpisanie 90 stopni sprawia, że trójkąt przestaje istnieć.",
          "Mylenie sinusa z arcus sinusem. Ta strona oblicza bok na podstawie kąta; funkcja odwrotna oblicza kąt na podstawie boków.",
          "Ufanie z grubsza wykonanemu pomiarowi terenowemu z dokładnością do sześciu miejsc dziesiętnych. Dostosuj podawaną precyzję do precyzji pomiaru."
        ]
      },
      {
        "h2": "Jak zweryfikować odpowiedź",
        "paragraphs": [],
        "customHtml": "<p>Trzy niezależne kontrole potwierdzają wynik sinusowy. Zastosuj przynajmniej jedną, zanim zaufasz odpowiedzi.</p>\n<h3>Metoda 1: Sprawdzenie stosunku</h3>\n<p>Podziel wynik przez przeciwprostokątną i porównaj z sin(A). Dla przykładu 1: 3 / 5 = 0.6 oraz sin(36.87°) ≈ 0.6. Wyniki się zgadzają.</p>\n<h3>Metoda 2: Sprawdzenie twierdzeniem Pitagorasa</h3>\n<p>Znajdź przyprostokątną przyległą ze wzoru b = √(c² − a²), a następnie sprawdź, czy a² + b² = c². Dla przykładu 1: b = √(25 − 9) = 4 oraz 9 + 16 = 25.</p>\n<h3>Metoda 3: Sprawdzenie kąta dopełniającego</h3>\n<p>Oblicz kąt B = 90° − A, a następnie sprawdź cosinusem: b powinno równać się c × cos(A). Dla przykładu 1: 5 × cos(36.87°) ≈ 5 × 0.8 = 4, co zgadza się z b znalezionym powyżej.</p>"
      },
      {
        "h2": "Podsumowanie",
        "paragraphs": [
          "Wzór sinusowy a = c × sin(A) przekształca znaną przeciwprostokątną i <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> w naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> jednym mnożeniem. Zidentyfikuj przeciwprostokątną, potwierdź, że twój <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> jest w stopniach i jest ostry, pomnóż i sprawdź, czy wynik jest krótszy od przeciwprostokątnej.",
          "Aby rozwiązać zadanie odwrotne, czyli znaleźć <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> na podstawie znanych boków, użyj <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulatora kąta trójkąta prostokątnego na podstawie sinusa</a>. Aby znaleźć przyprostokątną przyległą, użyj <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">kalkulatora boku trójkąta prostokątnego na podstawie cosinusa</a>."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Co oblicza wzór a = c × sin(A)?",
        "answer": "Oblicza długość naprzeciwległego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> a w trójkącie prostokątnym. Aby użyć tego wzoru, potrzebujesz przeciwprostokątnej c i ostrego <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A."
      },
      {
        "question": "Dlaczego używam tu sinusa zamiast cosinusa?",
        "answer": "Sinus wiąże naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> z przeciwprostokątną. Cosinus wiąże przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> z przeciwprostokątną. Ponieważ ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> znajduje naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>, sinus jest właściwą funkcją."
      },
      {
        "question": "Czy wynik może być większy niż przeciwprostokątna?",
        "answer": "Nie. Naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> jest zawsze krótszy od przeciwprostokątnej w trójkącie prostokątnym. Jeśli twój wynik jest większy, jedna z danych wejściowych jest błędna."
      },
      {
        "question": "Co jeśli mój kąt wynosi dokładnie 90 stopni?",
        "answer": "Wpisanie 90 stopni nie jest tu prawidłowe. W trójkącie prostokątnym oba kąty ostre muszą mieścić się między 0 a 90 stopni. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Kąt</a> 90 stopni jest już ustalony w wierzchołku prostego <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a>."
      },
      {
        "question": "Czy kąt musi być w stopniach?",
        "answer": "Tak. Ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> oczekuje <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A w stopniach. Jeśli twój <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> jest w radianach, najpierw przelicz go na stopnie, mnożąc przez 180 i dzieląc przez pi."
      },
      {
        "question": "Czym różni się to od kalkulatora cosinusa?",
        "answer": "Kalkulator <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">sinusa</a> znajduje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A (a = c × sin(A)). <a href=\"/right-triangle-side-from-cosine-calculator/\" class=\"text-primary hover:underline\">Kalkulator cosinusa</a> znajduje <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> przyległy do <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A (b = c × cos(A)). Te same dane wejściowe, inny bok wynikowy."
      },
      {
        "question": "Czy mogę tego użyć do wektorów sił w fizyce?",
        "answer": "Tak. Wektor to przeciwprostokątna, a jego składowa pionowa to naprzeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>. Siła 100 N pod kątem 30° powyżej poziomu ma składową pionową 100 × sin(30°) = 50 N."
      },
      {
        "question": "Jakich jednostek powinienem użyć?",
        "answer": "Działa każda spójna jednostka długości: metry, stopy, cale, milimetry. Wynik ma tę samą jednostkę co wprowadzona przeciwprostokątna. Nie mieszaj jednostek w jednym obliczeniu."
      },
      {
        "question": "Dlaczego moja odpowiedź nieco różni się od podręcznikowej?",
        "answer": "Małe różnice wynikają z zaokrąglania wartości sinusa na różnych etapach. Zachowaj pełną precyzję podczas mnożenia i zaokrąglij tylko ostateczny wynik, aby dopasować go do zaokrąglenia podręcznika."
      },
      {
        "question": "Czy kąt może być większy niż 90 stopni?",
        "answer": "Nie. <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">Kąt</a> A musi być ostry (od 0 do 90 stopni) w tym <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulatorze</a>. Kąty rozwarte nie występują jako <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> odniesienia w trójkącie prostokątnym."
      },
      {
        "question": "Jak znaleźć przeciwprostokątną, jeśli znam bok naprzeciwległy i kąt?",
        "answer": "Przekształć wzór: c = a / sin(A). Jeśli a = 3 oraz A = 36.87°, to c = 3 / 0.6 = 5."
      },
      {
        "question": "Czy sinus działa, gdy trójkąt jest obrócony lub odbity?",
        "answer": "Tak. Obrót nie zmienia tego, który <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> leży naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A. Zawsze najpierw zidentyfikuj <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> naprzeciw kąta odniesienia, a następnie zastosuj a = c × sin(A)."
      }
    ]
  }
};
