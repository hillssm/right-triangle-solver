/**
 * cosineTranslations.batch2.ts
 * Translations of the Right Triangle Side From Cosine Calculator guide
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Formulas, variable names, numbers, URLs, and HTML structure preserved exactly.
 * Zero em dashes. Native-quality translations.
 */

export const COSINE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "calculator": {
      "fields": [
        {
          "key": "c",
          "label": "Hipotenusa c",
          "min": 0
        },
        {
          "key": "A",
          "label": "Ângulo A",
          "min": 0
        }
      ],
      "outputLabel": "Cateto adjacente b"
    },
    "diagram": {
      "caption": "Triângulo retângulo mostrando o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A, a hipotenusa c conhecida e o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b desconhecido.",
      "h2": "Diagrama do Triângulo Retângulo: Lado b pelo Cosseno",
      "intro": "Neste diagrama, o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A está no canto inferior direito. O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b corre ao longo da base, bem ao lado do ângulo A. A hipotenusa c se estende do ângulo A até o vértice superior. A <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> usa esses dois valores conhecidos para encontrar b.",
      "notes": [
        "Para o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A, o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> a é o oposto, o lado b é o adjacente e o lado c é a hipotenusa.",
        "O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> adjacente é sempre o lado que toca o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A e o ângulo reto.",
        "O resultado b será sempre menor que c."
      ],
      "sides": {
        "a": {
          "description": "O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> oposto a fica exatamente em frente ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A. Ele não é necessário para este cálculo.",
          "label": "a",
          "status": "unknown"
        },
        "b": {
          "description": "O <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b corre ao longo da base, ao lado do <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A. Este é o valor que a <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> retorna.",
          "label": "b = a encontrar",
          "status": "unknown"
        },
        "c": {
          "description": "A hipotenusa c é o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> mais longo, oposta ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto. Você fornece este valor como entrada.",
          "label": "c = conhecido",
          "status": "known"
        }
      }
    },
    "example": {
      "h2": "Exemplo Passo a Passo: Encontrar o Cateto Adjacente b",
      "intro": "Dados: A = 36.87 graus, c = 5. Encontre o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b usando a fórmula do cosseno.",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "Como Encontrar o Cateto Adjacente Usando o Cosseno",
        "paragraphs": [
          "Uma escada de 5 m encostada em uma parede forma um ângulo de 65 graus com o solo. Você conhece o comprimento da escada e o ângulo, mas qual é a distância da base até a parede? Essa distância horizontal é o cateto adjacente de um triângulo retângulo, e o cosseno a encontra diretamente. Uma calculadora de lado pelo cosseno recebe a hipotenusa e um ângulo agudo como entradas e retorna o cateto adjacente, sem precisar de tabelas trigonométricas manuais.",
          "Esta página explica a fórmula do cosseno a partir dos princípios básicos: o que significa o cateto adjacente, por que o cosseno usa a hipotenusa, como identificar os lados corretos em qualquer orientação de diagrama e como aplicar o resultado a medições reais. A fórmula é b = c × cos(A), onde b é o lado ao lado do ângulo A, c é a hipotenusa e A é medido em graus. Diferente de uma calculadora pitagórica básica que precisa de dois lados, esta ferramenta funciona quando você conhece um lado e um ângulo."
        ]
      },
      {
        "customHtml": "<h3>O que é um Triângulo Retângulo?</h3>\n<p>Um triângulo retângulo contém um ângulo que mede exatamente 90 graus. Os outros dois ângulos são agudos (cada um menor que 90 graus) e complementares, ou seja, somam 90 graus. Se o ângulo A é de 30 graus, o outro ângulo agudo B deve ser de 60 graus. Os cálculos com cosseno exigem essa estrutura de ângulo reto porque as definições das razões dependem da relação perpendicular entre os catetos.</p>\n<h3>O que é a Hipotenusa?</h3>\n<p>A hipotenusa fica oposta ao ângulo reto e é sempre o lado mais longo. Por convenção, é rotulada como c. Para encontrá-la em um diagrama girado, procure o lado que não toca o marcador do ângulo reto. Nesta calculadora, você insere a hipotenusa como um valor conhecido.</p>\n<h3>O que é o Cateto Adjacente?</h3>\n<p>O cateto adjacente é o cateto que toca tanto o ângulo de referência A quanto o ângulo reto. Para o ângulo A, o lado b é o adjacente e o lado a é o oposto. Se você mudar a referência para o ângulo B, os rótulos se invertem: o lado a passa a ser o adjacente e o lado b passa a ser o oposto. A hipotenusa nunca muda; é sempre c, oposta ao ângulo de 90 graus.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"Triângulo retângulo com o ângulo A no canto inferior esquerdo, cateto adjacente b, cateto oposto a e hipotenusa c rotulados\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomia do cosseno: ângulo A no canto inferior esquerdo, cateto adjacente b ao longo da base, cateto oposto a na vertical e hipotenusa c em frente ao ângulo reto.</figcaption>\n</figure>",
        "h2": "Entendendo o Cateto Adjacente e a Hipotenusa",
        "paragraphs": []
      },
      {
        "customHtml": "<p>O cosseno expressa uma razão simples: para um dado ângulo agudo, o cateto adjacente dividido pela hipotenusa sempre resulta no mesmo número. Esse número é cos(A). Se o ângulo A é de 60 graus, cos(60°) = 0.5, o que significa que o cateto adjacente é exatamente metade da hipotenusa, não importa quão grande ou pequeno seja o triângulo.</p>\n<p>A razão não tem unidades porque as unidades se cancelam: metros divididos por metros resultam em um número puro. Para encontrar o cateto adjacente, rearranje a razão. Comece com cos(A) = b / c. Multiplique ambos os lados por c. O c no denominador se cancela, restando <strong>b = c × cos(A)</strong>. A fórmula multiplica a hipotenusa conhecida pelo cosseno do ângulo conhecido.</p>\n<p>Para qualquer ângulo agudo válido (entre 0 e 90 graus), cos(A) está entre 0 e 1. Isso garante que o cateto adjacente seja menor que a hipotenusa, o que corresponde à geometria: nenhum cateto pode exceder a hipotenusa.</p>\n<h3>Entendendo SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA é um recurso de memorização para as três razões básicas. SOH: Seno = Oposto / Hipotenusa. CAH: Cosseno = Adjacente / Hipotenusa. TOA: Tangente = Oposto / Adjacente. Para esta página, concentre-se em CAH. O recurso mnemônico ajuda a escolher a razão certa, mas você ainda precisa identificar corretamente qual lado é adjacente ao seu ângulo de referência.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"Triângulo retângulo destacando o cateto adjacente b e a hipotenusa c, com cos(A) igual a b dividido por c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">A razão do cosseno: divida o cateto adjacente b destacado pela hipotenusa c destacada para obter cos(A).</figcaption>\n</figure>",
        "h2": "O que é o Cosseno em um Triângulo Retângulo?",
        "paragraphs": []
      },
      {
        "h2": "Como Usar a Calculadora de Lado do Triângulo Retângulo pelo Cosseno",
        "listItems": [
          "Identifique o ângulo reto no seu triângulo. Confirme que um dos cantos mede 90 graus.",
          "Identifique o ângulo agudo conhecido A. Certifique-se de que não é o ângulo reto.",
          "Localize a hipotenusa c. É o lado oposto ao ângulo reto, sempre o lado mais longo.",
          "Identifique o cateto adjacente b. Ele toca tanto o ângulo A quanto o ângulo reto.",
          "Digite o comprimento da hipotenusa c no primeiro campo de entrada.",
          "Digite o ângulo A em graus no segundo campo.",
          "Selecione a unidade de medida que corresponde à sua entrada da hipotenusa.",
          "Pressione Calcular. O resultado mostra o cateto adjacente b com os passos da solução.",
          "Revise os passos para confirmar que a fórmula e a substituição correspondem ao seu problema.",
          "Verifique que b é menor que c. Se não for, confira novamente qual lado você inseriu como hipotenusa."
        ],
        "listTitle": "Passos:",
        "paragraphs": [
          "Siga estes passos para obter um resultado preciso."
        ]
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>Exemplo 1: Um Triângulo Retângulo Básico</h3>\n<p><strong>Dados:</strong> c = 10 m, A = 30°. <strong>Encontre:</strong> b.</p>\n<p><strong>Fórmula:</strong> b = c × cos(A)</p>\n<p><strong>Substituição:</strong> b = 10 × cos(30°)</p>\n<p><strong>Valor do cosseno:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>Cálculo:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 8.66 m</strong></p>\n<p>O resultado é menor que a hipotenusa de 10 m, como esperado. A 30 graus, o cateto adjacente corresponde a cerca de 87% do comprimento da hipotenusa.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 2: Um Ângulo Especial</h3>\n<p><strong>Dados:</strong> c = 12 ft, A = 60°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>Resposta:</strong> <strong>b = 6 ft</strong></p>\n<p>A 60 graus, cos(A) = 0.5 exatamente, então o cateto adjacente é precisamente metade da hipotenusa. Ângulos especiais como 30°, 45° e 60° dão valores de cosseno exatos que valem a pena memorizar.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 3: Uma Medida Decimal</h3>\n<p><strong>Dados:</strong> c = 7.5 m, A = 42°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 5.57 m</strong></p>\n<p>Mantenha a precisão total no valor do cosseno durante o cálculo e arredonde apenas a resposta final. Arredondar cos(42°) para 0.74 antes da hora daria 5.55 m, introduzindo um erro pequeno, mas evitável.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 4: Um Ângulo Próximo de 90 Graus</h3>\n<p><strong>Dados:</strong> c = 15 cm, A = 80°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 2.60 cm</strong></p>\n<p>À medida que o ângulo se aproxima de 90 graus, o cateto adjacente encolhe em direção a zero. A 80°, o cateto adjacente é apenas cerca de 17% da hipotenusa. Isso é geometria normal, não um erro de cálculo.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"Cálculo do cosseno passo a passo: hipotenusa de 10 m, ângulo de 30 graus, cateto adjacente igual a 8.66 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Solução detalhada: b = 10 × cos(30°) ≈ 8.66 m, com cada passo da substituição mostrado.</figcaption>\n</figure>",
        "h2": "Como Calcular o Cateto Adjacente Usando o Cosseno",
        "paragraphs": []
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>Exemplo 5: Encontrando a Distância Horizontal de uma Escada</h3>\n<p>Uma escada de 5 m está encostada em uma parede e forma um ângulo de 65 graus com o solo nivelado. Encontre a distância horizontal da parede até o pé da escada.</p>\n<p><strong>Dados:</strong> c = 5 m (escada), A = 65°. <strong>Encontre:</strong> b (distância no solo).</p>\n<p><strong>Por que adjacente:</strong> a distância no solo toca tanto o ângulo de 65° quanto o ângulo reto onde a parede encontra o solo.</p>\n<p><strong>Cálculo:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 2.11 m</strong></p>\n<p>A base fica a cerca de 2.11 m da parede. Este é apenas um cálculo geométrico e não determina se a montagem da escada é segura.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 6: Encontrando a Projeção Horizontal de um Telhado</h3>\n<p>Uma viga de telhado tem 4.5 m de comprimento e forma um ângulo de 30 graus com a horizontal. Encontre sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 4.5 m (viga), A = 30°. <strong>Encontre:</strong> b (projeção horizontal).</p>\n<p><strong>Cálculo:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 3.90 m</strong></p>\n<p>A viga inclinada (4.5 m) cobre 3.90 m na horizontal. A diferença importa ao encomendar materiais: você precisa de 4.5 m de madeira para um vão horizontal de 3.90 m. Beirais, juntas e folgas de construção não estão incluídos.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 7: Calculando a Projeção Horizontal de uma Rampa</h3>\n<p>Uma rampa simplificada tem um comprimento inclinado de 8 m e um ângulo de 6 graus em relação à horizontal. Encontre sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 8 m (inclinação), A = 6°. <strong>Encontre:</strong> b (projeção horizontal).</p>\n<p><strong>Cálculo:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 7.96 m</strong></p>\n<p>Com um ângulo raso de 6°, a projeção horizontal (7.96 m) é quase igual ao comprimento da inclinação (8 m). A inclinação é sempre um pouco maior que a projeção horizontal. Isso não verifica acessibilidade nem conformidade com normas de construção.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 8: Encontrando o Alcance Horizontal de um Cabo</h3>\n<p>Um cabo tem 20 m de comprimento e forma um ângulo de 55 graus com a horizontal. Calcule a componente horizontal.</p>\n<p><strong>Dados:</strong> c = 20 m, A = 55°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 11.47 m</strong></p>\n<p>Quanto mais íngreme o ângulo, menor o alcance horizontal. A 55°, o cabo cobre 11.47 m na horizontal enquanto sobe significativamente.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 9: Estimando a Distância Horizontal em Topografia</h3>\n<p>Uma linha de visada simplificada tem 150 m de comprimento e forma um ângulo de 12 graus com a horizontal. Encontre sua componente horizontal.</p>\n<p><strong>Dados:</strong> c = 150 m, A = 12°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 146.72 m</strong></p>\n<p>A distância horizontal é de 146.72 m, um pouco menor que a linha de visada de 150 m. A topografia real exige correções de curvatura, terreno e altura do instrumento; este exemplo cobre apenas a geometria básica.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 10: Encontrando a Componente Horizontal de um Fio</h3>\n<p>Um fio tem 13 m de comprimento e forma um ângulo de 22 graus com o solo nivelado. Encontre sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 13 m, A = 22°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 12.05 m</strong></p>\n<p>A componente horizontal (12.05 m) é menor que o comprimento total do fio (13 m) porque parte do comprimento do fio é usada na elevação vertical.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 11: Calculando o Deslocamento Horizontal de uma Escora</h3>\n<p>Uma escora diagonal tem 2.4 m de comprimento e forma um ângulo de 40 graus com a horizontal. Calcule sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 2.4 m, A = 40°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 1.84 m</strong></p>\n<p>Esta medida ajuda a interpretar um desenho: a escora abrange 1.84 m na horizontal. O cálculo é geométrico e não verifica resistência estrutural nem conformidade do projeto.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 12: Encontrando a Distância no Solo de um Estai</h3>\n<p>Um estai tem 18 m de comprimento e forma um ângulo de 35 graus com o solo nivelado. Calcule a distância horizontal entre o ponto de ancoragem e o ponto diretamente abaixo da fixação do fio.</p>\n<p><strong>Dados:</strong> c = 18 m, A = 35°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 14.74 m</strong></p>\n<p>O próprio fio é a hipotenusa porque se estende da âncora no solo até o ponto de fixação, oposto ao ângulo reto formado pela estrutura vertical e o solo nivelado.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 13: Estimando o Deslocamento Horizontal em uma Ladeira</h3>\n<p>Um caminho inclinado simplificado mede 250 m e forma um ângulo de 18 graus com a horizontal. Calcule a componente horizontal.</p>\n<p><strong>Dados:</strong> c = 250 m, A = 18°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 237.76 m</strong></p>\n<p>Caminhar 250 m ao longo da ladeira cobre 237.76 m de distância horizontal. A distância na inclinação é sempre maior que o deslocamento horizontal.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 14: Calculando a Projeção Horizontal de uma Passarela</h3>\n<p>Uma passarela inclinada tem 6 m de comprimento e forma um ângulo de 8 graus com a horizontal. Calcule sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 6 m, A = 8°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 5.94 m</strong></p>\n<p>A 8°, a passarela é suave o suficiente para que a projeção horizontal (5.94 m) fique próxima do comprimento da inclinação (6 m). O resultado sozinho não prova conformidade com acessibilidade.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 15: Encontrando a Projeção Horizontal de um Elo Mecânico</h3>\n<p>Um elo mecânico tem 850 mm de comprimento e está posicionado em um ângulo de 25 graus em relação à horizontal. Calcule sua componente horizontal.</p>\n<p><strong>Dados:</strong> c = 850 mm, A = 25°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 770.36 mm</strong></p>\n<p>A relação do cosseno funciona da mesma forma em milímetros. A unidade da resposta sempre corresponde à unidade da hipotenusa inserida.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Exemplo 16: Calculando a Componente Horizontal de um Suporte Inclinado</h3>\n<p>Um elemento de suporte tem 3.2 ft de comprimento e forma um ângulo de 48 graus com a horizontal. Calcule sua projeção horizontal.</p>\n<p><strong>Dados:</strong> c = 3.2 ft, A = 48°. <strong>Encontre:</strong> b.</p>\n<p><strong>Cálculo:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>Resposta:</strong> <strong>b ≈ 2.14 ft</strong></p>\n<p>Ao ler um desenho cotado, isso informa que o suporte cobre 2.14 ft na horizontal. O cálculo é geométrico, não uma verificação de segurança estrutural.</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Cenário</th>\n<th class=\"py-2 pr-4 font-semibold\">Hipotenusa</th>\n<th class=\"py-2 pr-4 font-semibold\">Ângulo</th>\n<th class=\"py-2 pr-4 font-semibold\">Fórmula</th>\n<th class=\"py-2 font-semibold\">Cateto Adjacente</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Escada</td><td class=\"py-2 pr-4\">5 m</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Viga de telhado</td><td class=\"py-2 pr-4\">4.5 m</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Cabo</td><td class=\"py-2 pr-4\">20 m</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Visada topográfica</td><td class=\"py-2 pr-4\">150 m</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Estai</td><td class=\"py-2 pr-4\">18 m</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 m</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">Passarela</td><td class=\"py-2 pr-4\">6 m</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 m</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"Quatro painéis: escada, viga de telhado, cabo e passarela mostrando projeções horizontais calculadas com cosseno\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">O cosseno na prática: cada painel mostra a hipotenusa, o ângulo de referência e a distância horizontal (adjacente) calculada.</figcaption>\n</figure>",
        "h2": "Exemplos Reais de Cálculos com Cosseno",
        "paragraphs": [
          "Estes exemplos mostram como a fórmula do cosseno resolve problemas práticos de medição. Em cada caso, o comprimento inclinado ou diagonal conhecido é a hipotenusa, e a distância horizontal desejada é o cateto adjacente."
        ]
      },
      {
        "customHtml": "<p>Cada razão trigonométrica conecta um par diferente de lados. Escolha a que corresponde aos seus valores conhecidos e desconhecidos.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Razão</th>\n<th class=\"py-2 pr-4 font-semibold\">Fórmula</th>\n<th class=\"py-2 pr-4 font-semibold\">Conhecidos</th>\n<th class=\"py-2 font-semibold\">Encontra</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Cosseno</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">Hipotenusa, ângulo</td><td class=\"py-2\">Cateto adjacente</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Seno</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">Hipotenusa, ângulo</td><td class=\"py-2\">Cateto oposto</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">Tangente</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">Cateto adjacente, ângulo</td><td class=\"py-2\">Cateto oposto</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>O que dá errado com a razão errada:</strong> suponha c = 10 m e A = 30°, e você precisa do cateto adjacente. Usar o seno por engano dá a = 10 × sin(30°) = 5 m, que é o cateto oposto, não o adjacente. O cálculo correto com cosseno dá b ≈ 8.66 m. As duas respostas diferem porque medem lados diferentes. Sempre confirme qual lado toca seu ângulo de referência antes de escolher.</p>",
        "h2": "Quando Usar Cosseno em Vez de Seno ou Tangente?",
        "paragraphs": []
      },
      {
        "customHtml": "<p>Com a hipotenusa fixa, o cateto adjacente encolhe à medida que o ângulo A cresce. A 0°, cos(A) = 1 e o cateto adjacente é igual à hipotenusa inteira (o triângulo se achata em uma linha). A 90°, cos(A) = 0 e o cateto adjacente desaparece. Entre esses extremos, a relação é suave e previsível.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Ângulo A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">Cateto adjacente b (c = 10)</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>Observe o padrão: dobrar o ângulo de 30° para 60° não reduz o lado pela metade, porque o cosseno não é linear. Dois triângulos com o mesmo ângulo, mas hipotenusas diferentes, são semelhantes, então suas razões de lados coincidem mesmo que os comprimentos absolutos difiram. Uma hipotenusa de 5 m a 30° dá b ≈ 4.33 m, exatamente metade do caso de 10 m.</p>\n<p>Observação: 0° e 90° não são ângulos agudos válidos para um triângulo retângulo não degenerado. Eles representam casos limites em que o triângulo colapsa.</p>",
        "h2": "Como o Ângulo Altera o Cateto Adjacente",
        "paragraphs": []
      },
      {
        "h2": "Inserindo Ângulos e Medidas Corretamente",
        "paragraphs": [
          "Esta calculadora espera ângulos em graus. Os graus dividem um círculo completo em 360 partes; os radianos usam uma escala diferente, em que um círculo completo é cerca de 6.283. Inserir 30 radianos quando você quer dizer 30 graus produz uma resposta totalmente errada, porque cos(30 radianos) ≈ 0.154, não 0.866. Sempre confirme que seu ângulo está em graus antes de calcular.",
          "Use a mesma unidade de comprimento para a hipotenusa que você quer na resposta. Se c está em metros, b sai em metros. Misturar unidades, como inserir c = 5 (metros) pensando em pés, garante um resultado errado. Converta primeiro, depois calcule.",
          "Arredonde apenas a resposta final, não os valores intermediários. O cosseno de 42° é 0.743144825..., e usar o valor completo dá b = 5.5736 m para c = 7.5 m. Arredondar o cosseno para 0.74 antes dá 5.55 m, um erro de quase 2.4 cm. Seu resultado não pode ser mais preciso que sua entrada menos precisa: se você mediu a hipotenusa ao centímetro mais próximo, não informe a resposta em milímetros."
        ]
      },
      {
        "customHtml": "<p><strong>1. Confundir o cateto adjacente com o cateto oposto.</strong> O cateto adjacente toca o ângulo A; o cateto oposto não. Correção: trace a partir do ângulo A ao longo de cada cateto e confirme qual deles forma o ângulo.</p>\n<p><strong>2. Usar o cateto como hipotenusa.</strong> Inserir um valor de cateto no campo da hipotenusa infla o resultado. Correção: a hipotenusa é sempre oposta ao ângulo reto e sempre o lado mais longo.</p>\n<p><strong>3. Esquecer de multiplicar pela hipotenusa.</strong> Responder cos(30°) ≈ 0.866 em vez de 10 × 0.866 ≈ 8.66. Correção: a razão sozinha não é um comprimento; multiplique por c.</p>\n<p><strong>4. Dividir em vez de multiplicar.</strong> Calcular c / cos(A) em vez de c × cos(A). A divisão se aplica ao modo tangente para encontrar b a partir de a, não ao cosseno. Correção: confira a fórmula rearranjada.</p>\n<p><strong>5. Usar o ângulo de referência errado.</strong> Medir a partir do ângulo B em vez do ângulo A troca adjacente e oposto. Correção: rotule seu ângulo de referência antes de identificar os lados.</p>\n<p><strong>6. Inserir radianos quando se esperam graus.</strong> cos(1 radiano) ≈ 0.540 difere de cos(1°) ≈ 0.99985. Correção: confirme o modo de graus.</p>\n<p><strong>7. Misturar unidades.</strong> Inserir c = 5 (metros) e esperar pés. Correção: converta todas as entradas para uma única unidade primeiro.</p>\n<p><strong>8. Arredondar valores intermediários cedo demais.</strong> Arredondar cos(42°) para 0.74 antes de multiplicar agrava o erro. Correção: mantenha a precisão total até o passo final.</p>\n<p><strong>9. Aplicar o cosseno a um triângulo não retângulo.</strong> As definições das razões pressupõem um ângulo de 90 graus. Correção: verifique se o ângulo reto existe antes de usar esta calculadora.</p>\n<p><strong>10. Aceitar um resultado maior que a hipotenusa.</strong> Se b > c, algo está errado. Correção: confira as entradas; cos(A) nunca excede 1 para ângulos agudos.</p>\n<p><strong>11. Inserir medidas nulas, negativas ou inválidas.</strong> Os comprimentos dos lados devem ser positivos. Correção: use apenas comprimentos positivos.</p>\n<p><strong>12. Tratar um cateto adjacente próximo de zero como erro.</strong> A 89°, b ≈ 0.017c, o que é geometria correta, não um defeito. Correção: reconheça que ângulos íngremes produzem naturalmente catetos adjacentes curtos.</p>",
        "h2": "Erros Comuns de Cálculo com Cosseno e Como Evitá-los",
        "paragraphs": []
      },
      {
        "customHtml": "<p><strong>Método 1: Verifique os comprimentos relativos dos lados.</strong> Para qualquer ângulo agudo, o cateto adjacente deve ser menor que a hipotenusa. Se sua resposta exceder c, confira suas entradas.</p>\n<p><strong>Método 2: Recalcule a razão do cosseno.</strong> Divida sua resposta pela hipotenusa: b / c deve ser aproximadamente igual a cos(A). Use valores não arredondados para a verificação. Para c = 10 m, A = 30°, b ≈ 8.660254: 8.660254 / 10 = 0.8660254 ≈ cos(30°). A correspondência confirma a correção.</p>\n<p><strong>Método 3: Aplique o teorema de Pitágoras.</strong> Se você também conhece ou calcula o cateto oposto a = c × sin(A), verifique que a² + b² ≈ c². Exemplo completo: c = 10 m, A = 30°. Então b ≈ 8.660254 m e a = 10 × sin(30°) = 5 m. Verificação: 5² + 8.660254² = 25 + 75 = 100 = 10². O triângulo é consistente.</p>\n<p>Pequenas discrepâncias na última casa decimal vêm do arredondamento dos valores exibidos. Ao verificar, use os números de precisão total em vez da saída arredondada.</p>",
        "h2": "Como Verificar se seu Resultado com Cosseno Está Correto",
        "paragraphs": []
      },
      {
        "h2": "Encontre o Cateto Adjacente com Confiança",
        "paragraphs": [
          "Identifique primeiro a hipotenusa e o ângulo de referência. Confirme qual cateto toca o ângulo: esse é o cateto adjacente b. Aplique b = c × cos(A) com o ângulo em graus, usando unidades consistentes. Verifique se a resposta é menor que a hipotenusa e, quando possível, confira com o teorema de Pitágoras. Com esses hábitos, todo cálculo de lado pelo cosseno se torna rotina. Use a calculadora acima para calcular seus números."
        ]
      }
    ],
    "faqs": [
      {
        "answer": "Multiplique a hipotenusa pelo cosseno do ângulo agudo conhecido: b = c × cos(A). Digite a hipotenusa c e o ângulo A em graus, e a calculadora retorna o cateto adjacente b com os passos completos da solução.",
        "question": "Como encontrar o cateto adjacente usando o cosseno?"
      },
      {
        "answer": "A fórmula é b = c × cos(A), onde b é o cateto adjacente, c é a hipotenusa e A é o ângulo agudo. Ela vem do rearranjo da razão do cosseno cos(A) = b / c multiplicando ambos os lados por c.",
        "question": "Qual é a fórmula de uma calculadora de lado pelo cosseno?"
      },
      {
        "answer": "O cosseno usa o cateto adjacente e a hipotenusa: cos(A) = adjacente / hipotenusa. Para o ângulo A, o cateto adjacente é b (o cateto que toca o ângulo A) e a hipotenusa é c (o lado mais longo, oposto ao ângulo reto).",
        "question": "Quais lados são usados na razão do cosseno?"
      },
      {
        "answer": "Sim. É exatamente isso que esta calculadora faz. Digite o comprimento da hipotenusa e o ângulo agudo em graus, e ela calcula b = c × cos(A). O ângulo deve estar entre 0 e 90 graus, exclusive.",
        "question": "Posso calcular o cateto adjacente a partir da hipotenusa e de um ângulo?"
      },
      {
        "answer": "Para qualquer ângulo agudo, cos(A) está entre 0 e 1, então multiplicar a hipotenusa por cos(A) sempre dá um valor menor. Geometricamente, nenhum cateto de um triângulo retângulo pode exceder a hipotenusa, que abrange a maior distância entre os vértices.",
        "question": "Por que o cateto adjacente é menor que a hipotenusa?"
      },
      {
        "answer": "Ambos usam a hipotenusa, mas o seno retorna o cateto oposto (a = c × sin(A)) enquanto o cosseno retorna o cateto adjacente (b = c × cos(A)). Escolha o seno quando precisar do lado em frente ao ângulo, e o cosseno quando precisar do lado ao lado dele.",
        "question": "Qual é a diferença entre seno e cosseno?"
      },
      {
        "answer": "Insira o ângulo em graus. Esta calculadora espera entradas em graus. Inserir radianos produz resultados incorretos, porque cos(30 radianos) ≈ 0.154 difere de cos(30°) ≈ 0.866. Sempre confirme o modo de graus antes de calcular.",
        "question": "Devo inserir o ângulo em graus ou radianos?"
      },
      {
        "answer": "Sim. A fórmula funciona em qualquer unidade de comprimento. A resposta usa a mesma unidade da hipotenusa inserida: metros na entrada dão metros na saída, pés na entrada dão pés na saída. Use unidades consistentes em todas as entradas.",
        "question": "O cosseno pode calcular um lado em metros, pés ou polegadas?"
      },
      {
        "answer": "O cosseno diminui de 1 para 0 à medida que o ângulo cresce de 0° para 90°. Como b = c × cos(A), um multiplicador de cosseno menor produz um cateto adjacente mais curto. A 60°, o cateto adjacente é metade da hipotenusa; a 80°, é apenas cerca de 17%.",
        "question": "Por que o cateto adjacente diminui à medida que o ângulo aumenta?"
      },
      {
        "answer": "Rearranje a fórmula para resolver c: c = b / cos(A). Esta calculadora encontra o cateto adjacente a partir da hipotenusa; para encontrar a hipotenusa a partir do cateto adjacente, divida o cateto adjacente por cos(A).",
        "question": "E se eu conhecer o cateto adjacente e o ângulo, mas não a hipotenusa?"
      },
      {
        "answer": "Verifique três coisas: (1) a resposta é menor que a hipotenusa, (2) dividir a resposta pela hipotenusa é aproximadamente igual a cos(A), e (3) se você também calcular a = c × sin(A), então a² + b² deve ser igual a c².",
        "question": "Como posso verificar meu lado calculado?"
      },
      {
        "answer": "O cateto adjacente fica muito pequeno porque cos(A) se aproxima de zero. A 89°, b ≈ 0.017c. Isso é geometria correta, não um erro. O triângulo fica alto e estreito, com quase todo o comprimento da hipotenusa indo para o cateto oposto.",
        "question": "O que acontece quando o ângulo está muito próximo de 90 graus?"
      }
    ],
    "formulaSection": {
      "formulas": [
        "b = c \\times \\cos(A)"
      ],
      "h2": "Fórmula do Lado pelo Cosseno",
      "paragraphs": [
        "O cosseno de um <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> em um triângulo retângulo é igual ao <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente dividido pela hipotenusa. Escrito como razão: cos(A) = b / c. Multiplicar ambos os lados por c fornece a fórmula direta abaixo.",
        "Aqui, c é a hipotenusa (o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> mais longo, oposto ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> de 90 graus), A é o ângulo agudo e b é o cateto adjacente que você quer encontrar. A <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">função cosseno</a> converte o ângulo na fração exata da hipotenusa que equivale ao cateto adjacente."
      ]
    },
    "formulaSlug": "b-c-cos",
    "h1": "Calculadora de Lado do Triângulo Retângulo a partir do Cosseno",
    "howTo": {
      "h2": "Como Usar Esta Calculadora",
      "steps": [
        "Encontre a hipotenusa c no seu triângulo retângulo. É o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">lado</a> em frente ao <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> reto e sempre o lado mais longo.",
        "Identifique o seu <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> agudo conhecido A. Confirme que o valor está em graus.",
        "Digite a hipotenusa c no primeiro campo.",
        "Digite o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A no segundo campo.",
        "Pressione Calcular para ver o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b e a solução passo a passo."
      ]
    },
    "intro": "Use esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> para encontrar o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b a partir do <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A e da hipotenusa c.",
    "metaDescription": "Encontre o cateto adjacente b a partir do ângulo A e da hipotenusa c com esta calculadora, incluindo fórmula, passo a passo e exemplos.",
    "metaTitle": "Lado do Triângulo Retângulo pelo Cosseno | b = c × cos(A)",
    "quickSummary": {
      "cards": [
        {
          "label": "Valores conhecidos",
          "value": "Ângulo A e hipotenusa c"
        },
        {
          "label": "Encontra",
          "value": "Cateto adjacente b"
        },
        {
          "label": "Fórmula principal",
          "value": "b = c × cos(A)"
        },
        {
          "label": "Ideal para",
          "value": "Encontrar a projeção horizontal, a distância da base ou a projeção no solo"
        }
      ],
      "h2": "O que Esta Ferramenta Resolve",
      "intro": "Esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> recebe o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A e a hipotenusa c como entradas e retorna o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b. O cosseno é a razão que liga esses três valores, então a fórmula não precisa de rearranjo."
    },
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "Calculadora de Lado do Triângulo Retângulo pelo Ângulo"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "Calculadora de Lado do Triângulo Retângulo pelo Seno"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "Calculadora de Lado do Triângulo Retângulo pela Tangente"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "Calculadora de Ângulo do Triângulo Retângulo pelo Cosseno"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "Calculadora da Razão do Cosseno"
      }
    ],
    "slug": "right-triangle-side-from-cosine-calculator",
    "toolPurpose": "Esta <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora</a> encontra o <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">cateto</a> adjacente b quando você já tem o <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">ângulo</a> A e a hipotenusa c. Ela realiza o cálculo do cosseno e mostra o caminho completo da solução para que você possa acompanhar ou verificar cada passo.",
    "url": "/right-triangle-side-from-cosine-calculator/"
  },
  "bn": {
    "slug": "right-triangle-side-from-cosine-calculator",
    "url": "/right-triangle-side-from-cosine-calculator/",
    "h1": "সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর",
    "metaTitle": "সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর | b = c × cos(A) নির্ণয় করুন",
    "metaDescription": "সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর ব্যবহার করে কোণ A ও অতিভুজ c থেকে সন্নিহিত বাহু b নির্ণয় করুন, সূত্র, ধাপ ও উদাহরণসহ।",
    "formulaSlug": "b-c-cos",
    "toolPurpose": "এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> কোণ A ও অতিভুজ c জানা থাকলে সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b নির্ণয় করে। এটি কোসাইন গণনা সম্পন্ন করে এবং সম্পূর্ণ সমাধানপথ দেখায়, যাতে আপনি প্রতিটি ধাপ অনুসরণ বা যাচাই করতে পারেন।",
    "intro": "কোণ A ও অতিভুজ c থেকে সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b নির্ণয় করতে এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> ব্যবহার করুন।",
    "quickSummary": {
      "h2": "এই টুল কী সমাধান করে",
      "intro": "এই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A ও অতিভুজ c ইনপুট হিসেবে নেয় এবং সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b ফেরত দেয়। কোসাইন হলো সেই অনুপাত যা এই তিনটি মানকে যুক্ত করে, তাই সূত্রটির কোনো পুনর্বিন্যাসের প্রয়োজন হয় না।",
      "cards": [
        {
          "label": "জ্ঞাত মান",
          "value": "কোণ A ও অতিভুজ c"
        },
        {
          "label": "নির্ণয় করে",
          "value": "সন্নিহিত বাহু b"
        },
        {
          "label": "মূল সূত্র",
          "value": "b = c × cos(A)"
        },
        {
          "label": "সবচেয়ে উপযোগী",
          "value": "অনুভূমিক বিস্তার, ভূমির দূরত্ব, বা ভূমির অভিক্ষেপ নির্ণয়ে"
        }
      ]
    },
    "diagram": {
      "h2": "সমকোণী ত্রিভুজের চিত্র: কোসাইন থেকে বাহু b",
      "intro": "এই বিন্যাসে <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A নিচে-ডানে অবস্থিত। সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b ভূমি বরাবর চলে, কোণ A-এর ঠিক পাশে বসে আছে। অতিভুজ c কোণ A থেকে শীর্ষ শীর্ষবিন্দু পর্যন্ত প্রসারিত। <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> এই দুটি জ্ঞাত মান ব্যবহার করে b নির্ণয় করে।",
      "caption": "সমকোণী ত্রিভুজে <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A, জ্ঞাত অতিভুজ c এবং অজ্ঞাত সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b দেখানো হয়েছে।",
      "sides": {
        "a": {
          "label": "a",
          "description": "বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> a <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর ঠিক বিপরীতে অবস্থিত। এই গণনায় এটির প্রয়োজন নেই।",
          "status": "unknown"
        },
        "b": {
          "label": "b = নির্ণয় করুন",
          "description": "সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর পাশে ভূমি বরাবর চলে। এই মানটিই <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">ক্যালকুলেটর</a> ফেরত দেয়।",
          "status": "unknown"
        },
        "c": {
          "label": "c = জ্ঞাত",
          "description": "অতিভুজ c সবচেয়ে দীর্ঘ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>, যা সমকোণের বিপরীতে অবস্থিত। আপনি এটি ইনপুট হিসেবে দেন।",
          "status": "known"
        }
      },
      "notes": [
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A-এর জন্য <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> a বিপরীত, বাহু b সন্নিহিত, এবং বাহু c অতিভুজ।",
        "সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> সর্বদা সেই বাহু যা <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A ও সমকোণ উভয়কেই স্পর্শ করে।",
        "ফলাফল b সর্বদা c-এর চেয়ে ছোট হবে।"
      ]
    },
    "calculator": {
      "outputLabel": "সন্নিহিত বাহু b",
      "fields": [
        {
          "key": "c",
          "label": "অতিভুজ c",
          "min": 0
        },
        {
          "key": "A",
          "label": "কোণ A",
          "min": 0
        }
      ]
    },
    "formulaSection": {
      "h2": "কোসাইন থেকে বাহু নির্ণয়ের সূত্র",
      "paragraphs": [
        "সমকোণী ত্রিভুজে একটি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণের</a> কোসাইন সমান সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> ভাগ অতিভুজ। অনুপাত হিসেবে লিখলে: cos(A) = b / c। উভয় পক্ষকে c দিয়ে গুণ করলে নিচের সরাসরি সূত্রটি পাওয়া যায়।",
        "এখানে, c হলো অতিভুজ (সবচেয়ে দীর্ঘ <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a>, 90-ডিগ্রি <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণের</a> বিপরীতে), A হলো সূক্ষ্মকোণ, এবং b হলো আপনার কাঙ্ক্ষিত সন্নিহিত বাহু। <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">কোসাইন ফাংশন</a> কোণটিকে অতিভুজের সেই নির্দিষ্ট ভগ্নাংশে রূপান্তর করে যা সন্নিহিত বাহুর সমান।"
      ],
      "formulas": [
        "b = c \\times \\cos(A)"
      ]
    },
    "howTo": {
      "h2": "এই ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "steps": [
        "আপনার সমকোণী ত্রিভুজে অতিভুজ c খুঁজুন। এটি সমকোণের বিপরীত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> এবং সর্বদা সবচেয়ে দীর্ঘ বাহু।",
        "আপনার জ্ঞাত সূক্ষ্ম <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A চিহ্নিত করুন। মানটি ডিগ্রিতে আছে কিনা নিশ্চিত করুন।",
        "প্রথম ক্ষেত্রে অতিভুজ c টাইপ করুন।",
        "দ্বিতীয় ক্ষেত্রে <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">কোণ</a> A টাইপ করুন।",
        "সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b ও ধাপে ধাপে সমাধান দেখতে Calculate বোতাম চাপুন।"
      ]
    },
    "example": {
      "h2": "ধাপে ধাপে উদাহরণ: সন্নিহিত বাহু b নির্ণয়",
      "intro": "প্রদত্ত: A = 36.87 ডিগ্রি, c = 5। কোসাইন সূত্র ব্যবহার করে সন্নিহিত <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">বাহু</a> b নির্ণয় করুন।",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "কোসাইন ব্যবহার করে সন্নিহিত বাহু কীভাবে নির্ণয় করবেন",
        "paragraphs": [
          "একটি 5 মিটার মই দেয়ালের সাথে হেলান দিয়ে আছে এবং ভূমির সাথে 65-ডিগ্রি কোণ তৈরি করেছে। আপনি মইয়ের দৈর্ঘ্য ও কোণ জানেন, কিন্তু দেয়াল থেকে মইয়ের গোড়া কত দূরে? সেই অনুভূমিক দূরত্বই সমকোণী ত্রিভুজের সন্নিহিত বাহু, এবং কোসাইন সরাসরি এটি নির্ণয় করে। একটি কোসাইন বাহু ক্যালকুলেটর অতিভুজ ও একটি সূক্ষ্মকোণ ইনপুট হিসেবে নেয় এবং সন্নিহিত বাহু ফেরত দেয়, হাতে ত্রিকোণমিতিক সারণি দেখার প্রয়োজন হয় না।",
          "এই পৃষ্ঠায় মৌলিক নীতি থেকে কোসাইন সূত্র ব্যাখ্যা করা হয়েছে: সন্নিহিত বাহু বলতে কী বোঝায়, কোসাইন কেন অতিভুজ ব্যবহার করে, যেকোনো চিত্র-অভিমুখে সঠিক বাহু কীভাবে চিহ্নিত করবেন, এবং বাস্তব পরিমাপে ফলাফল কীভাবে প্রয়োগ করবেন। সূত্রটি হলো b = c × cos(A), যেখানে b হলো কোণ A-এর পাশের বাহু, c হলো অতিভুজ, এবং A ডিগ্রিতে পরিমাপ করা হয়। একটি সাধারণ পিথাগোরীয় ক্যালকুলেটরের বিপরীতে যার দুটি বাহু প্রয়োজন, এই টুল তখন কাজ করে যখন আপনি একটি বাহু ও একটি কোণ জানেন।"
        ]
      },
      {
        "h2": "সন্নিহিত বাহু ও অতিভুজ বোঝা",
        "paragraphs": [],
        "customHtml": "<h3>সমকোণী ত্রিভুজ কী?</h3>\n<p>সমকোণী ত্রিভুজে ঠিক 90 ডিগ্রি পরিমাপের একটি কোণ থাকে। অন্য দুটি কোণ সূক্ষ্মকোণ (প্রত্যেকটি 90 ডিগ্রির কম) এবং পূরক, অর্থাৎ এদের যোগফল 90 ডিগ্রি। কোণ A 30 ডিগ্রি হলে, অন্য সূক্ষ্মকোণ B অবশ্যই 60 ডিগ্রি হবে। কোসাইন গণনায় এই সমকোণ কাঠামো প্রয়োজন, কারণ অনুপাতের সংজ্ঞাগুলো বাহুদ্বয়ের লম্ব সম্পর্কের ওপর নির্ভর করে।</p>\n<h3>অতিভুজ কী?</h3>\n<p>অতিভুজ সমকোণের বিপরীতে বসে এবং সর্বদা সবচেয়ে দীর্ঘ বাহু। প্রচলিত নিয়মে একে c দিয়ে চিহ্নিত করা হয়। ঘোরানো চিত্রে এটি খুঁজতে, সমকোণ চিহ্ন স্পর্শ করে না এমন বাহুটি দেখুন। এই ক্যালকুলেটরে আপনি অতিভুজকে জ্ঞাত মান হিসেবে প্রবেশ করান।</p>\n<h3>সন্নিহিত বাহু কী?</h3>\n<p>সন্নিহিত বাহু হলো সেই বাহু যা প্রসঙ্গ কোণ A ও সমকোণ উভয়কেই স্পর্শ করে। কোণ A-এর জন্য বাহু b সন্নিহিত এবং বাহু a বিপরীত। আপনি প্রসঙ্গ বদলে কোণ B ধরলে চিহ্নগুলো অদলবদল হয়: বাহু a সন্নিহিত হয় এবং বাহু b বিপরীত হয়। অতিভুজ কখনো বদলায় না; এটি সর্বদা c, 90-ডিগ্রি কোণের বিপরীতে।</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"নিচে-বামে কোণ A, সন্নিহিত বাহু b, বিপরীত বাহু a এবং চিহ্নিত অতিভুজ c সহ সমকোণী ত্রিভুজ\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">কোসাইনের জন্য অঙ্গবিন্যাস: নিচে-বামে কোণ A, ভূমি বরাবর সন্নিহিত বাহু b, উল্লম্ব বিপরীত বাহু a, সমকোণের বিপরীতে অতিভুজ c।</figcaption>\n</figure>"
      },
      {
        "h2": "সমকোণী ত্রিভুজে কোসাইন কী?",
        "paragraphs": [],
        "customHtml": "<p>কোসাইন একটি সরল অনুপাত প্রকাশ করে: একটি নির্দিষ্ট সূক্ষ্মকোণের জন্য, সন্নিহিত বাহু ভাগ অতিভুজ সর্বদা একই সংখ্যা দেয়। সেই সংখ্যাই cos(A)। কোণ A 60 ডিগ্রি হলে, cos(60°) = 0.5, অর্থাৎ ত্রিভুজ যত বড় বা ছোটই হোক, সন্নিহিত বাহু অতিভুজের ঠিক অর্ধেক।</p>\n<p>অনুপাতটির কোনো একক নেই, কারণ এককগুলো বাতিল হয়ে যায়: মিটার ভাগ মিটার একটি বিশুদ্ধ সংখ্যা রেখে যায়। সন্নিহিত বাহু নির্ণয় করতে অনুপাতটি পুনর্বিন্যাস করুন। cos(A) = b / c থেকে শুরু করুন। উভয় পক্ষকে c দিয়ে গুণ করুন। হরের c বাতিল হয়ে যায়, ফলে থাকে <strong>b = c × cos(A)</strong>। সূত্রটি জ্ঞাত অতিভুজকে জ্ঞাত কোণের কোসাইন দিয়ে গুণ করে।</p>\n<p>যেকোনো বৈধ সূক্ষ্মকোণের (0 থেকে 90 ডিগ্রির মধ্যে) জন্য cos(A) 0 থেকে 1-এর মধ্যে থাকে। এটি নিশ্চিত করে যে সন্নিহিত বাহু অতিভুজের চেয়ে ছোট, যা জ্যামিতির সাথে সামঞ্জস্যপূর্ণ: কোনো বাহুই অতিভুজকে ছাড়িয়ে যেতে পারে না।</p>\n<h3>SOH-CAH-TOA বোঝা</h3>\n<p>SOH-CAH-TOA তিনটি মৌলিক অনুপাতের স্মরণ-সহায়ক। SOH: সাইন = বিপরীত / অতিভুজ। CAH: কোসাইন = সন্নিহিত / অতিভুজ। TOA: ট্যানজেন্ট = বিপরীত / সন্নিহিত। এই পৃষ্ঠার জন্য CAH-এর দিকে মনোযোগ দিন। স্মরণ-কৌশলটি সঠিক অনুপাত বাছতে সাহায্য করে, তবে আপনার প্রসঙ্গ কোণের সন্নিহিত বাহু কোনটি তা তবুও সঠিকভাবে চিহ্নিত করতে হবে।</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"সন্নিহিত বাহু b ও অতিভুজ c চিহ্নিত সমকোণী ত্রিভুজ, যেখানে cos(A) সমান b ভাগ c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">কোসাইন অনুপাত: cos(A) পেতে চিহ্নিত সন্নিহিত বাহু b-কে চিহ্নিত অতিভুজ c দিয়ে ভাগ করুন।</figcaption>\n</figure>"
      },
      {
        "h2": "সমকোণী ত্রিভুজের কোসাইন থেকে বাহু ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "paragraphs": [
          "সঠিক ফলাফল পেতে এই ধাপগুলো অনুসরণ করুন।"
        ],
        "listTitle": "ধাপসমূহ:",
        "listItems": [
          "আপনার ত্রিভুজে সমকোণ চিহ্নিত করুন। একটি কোণ 90 ডিগ্রি পরিমাপ করে কিনা নিশ্চিত করুন।",
          "জ্ঞাত সূক্ষ্মকোণ A চিহ্নিত করুন। এটি সমকোণ নয় তা নিশ্চিত করুন।",
          "অতিভুজ c নির্ণয় করুন। এটি সমকোণের বিপরীত বাহু, সর্বদা সবচেয়ে দীর্ঘ বাহু।",
          "সন্নিহিত বাহু b চিহ্নিত করুন। এটি কোণ A ও সমকোণ উভয়কেই স্পর্শ করে।",
          "প্রথম ইনপুট ক্ষেত্রে অতিভুজের দৈর্ঘ্য c প্রবেশ করান।",
          "দ্বিতীয় ক্ষেত্রে ডিগ্রিতে কোণ A প্রবেশ করান।",
          "আপনার অতিভুজ ইনপুটের সাথে মিলে এমন পরিমাপের একক নির্বাচন করুন।",
          "Calculate বোতাম চাপুন। ফলাফলে সমাধানের ধাপসহ সন্নিহিত বাহু b দেখানো হবে।",
          "সূত্র ও মান বসানো আপনার সমস্যার সাথে মিলছে কিনা তা নিশ্চিত করতে ধাপগুলো পর্যালোচনা করুন।",
          "b c-এর চেয়ে ছোট কিনা যাচাই করুন। না হলে, অতিভুজ হিসেবে কোন বাহু প্রবেশ করিয়েছেন তা পুনরায় যাচাই করুন।"
        ]
      },
      {
        "h2": "কোসাইন ব্যবহার করে সন্নিহিত বাহু কীভাবে গণনা করবেন",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>উদাহরণ 1: একটি মৌলিক সমকোণী ত্রিভুজ</h3>\n<p><strong>প্রদত্ত:</strong> c = 10 মিটার, A = 30°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>সূত্র:</strong> b = c × cos(A)</p>\n<p><strong>প্রতিস্থাপন:</strong> b = 10 × cos(30°)</p>\n<p><strong>কোসাইনের মান:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>গণনা:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 8.66 মিটার</strong></p>\n<p>ফলাফলটি 10 মিটার অতিভুজের চেয়ে ছোট, যেমনটি প্রত্যাশিত। 30 ডিগ্রিতে, সন্নিহিত বাহু অতিভুজের দৈর্ঘ্যের প্রায় 87%।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 2: একটি বিশেষ কোণ</h3>\n<p><strong>প্রদত্ত:</strong> c = 12 ফুট, A = 60°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>উত্তর:</strong> <strong>b = 6 ফুট</strong></p>\n<p>60 ডিগ্রিতে, cos(A) = 0.5 ঠিকঠাক, তাই সন্নিহিত বাহু অতিভুজের ঠিক অর্ধেক। 30°, 45° ও 60°-এর মতো বিশেষ কোণগুলো মনে রাখার মতো সরল কোসাইন মান দেয়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 3: একটি দশমিক পরিমাপ</h3>\n<p><strong>প্রদত্ত:</strong> c = 7.5 মিটার, A = 42°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 5.57 মিটার</strong></p>\n<p>গণনার সময় কোসাইন মানে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তরে আসন্ন মান নিন। cos(42°)-কে আগেই 0.74-এ আসন্ন করলে 5.55 মিটার পাওয়া যেত, যা একটি ছোট কিন্তু এড়ানো যায় এমন ভুল তৈরি করে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 4: 90 ডিগ্রির কাছাকাছি একটি কোণ</h3>\n<p><strong>প্রদত্ত:</strong> c = 15 সেন্টিমিটার, A = 80°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 2.60 সেন্টিমিটার</strong></p>\n<p>কোণ 90 ডিগ্রির কাছাকাছি এলে সন্নিহিত বাহু শূন্যের দিকে সঙ্কুচিত হয়। 80°-এ সন্নিহিত বাহু অতিভুজের মাত্র প্রায় 17%। এটি স্বাভাবিক জ্যামিতি, গণনার ভুল নয়।</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"ধাপে ধাপে কোসাইন গণনা: 10 মিটার অতিভুজ, 30 ডিগ্রি কোণ, সন্নিহিত বাহু সমান 8.66 মিটার\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">সমাধানকৃত উদাহরণ: b = 10 × cos(30°) ≈ 8.66 মিটার, প্রতিটি প্রতিস্থাপন ধাপ দেখানোসহ।</figcaption>\n</figure>"
      },
      {
        "h2": "কোসাইন গণনার বাস্তব উদাহরণ",
        "paragraphs": [
          "এই উদাহরণগুলো দেখায় কীভাবে কোসাইন সূত্র বাস্তব পরিমাপের সমস্যা সমাধান করে। প্রতিটি ক্ষেত্রে, জ্ঞাত ঢালু বা তির্যক দৈর্ঘ্যই অতিভুজ, এবং কাঙ্ক্ষিত অনুভূমিক দূরত্বই সন্নিহিত বাহু।"
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>উদাহরণ 5: মইয়ের অনুভূমিক দূরত্ব নির্ণয়</h3>\n<p>একটি 5 মিটার মই দেয়ালের সাথে হেলান দিয়ে আছে এবং সমতল ভূমির সাথে 65-ডিগ্রি কোণ তৈরি করে। দেয়াল থেকে মইয়ের গোড়া পর্যন্ত অনুভূমিক দূরত্ব নির্ণয় করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 5 মিটার (মই), A = 65°। <strong>নির্ণেয়:</strong> b (ভূমির দূরত্ব)।</p>\n<p><strong>কেন সন্নিহিত:</strong> ভূমির দূরত্ব 65° কোণ ও দেয়াল-ভূমির মিলনস্থলের সমকোণ উভয়কেই স্পর্শ করে।</p>\n<p><strong>গণনা:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 2.11 মিটার</strong></p>\n<p>মইয়ের গোড়া দেয়াল থেকে প্রায় 2.11 মিটার দূরে বসে। এটি শুধু জ্যামিতিক হিসাব এবং মই বসানোর নিরাপত্তা নির্ধারণ করে না।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 6: ছাদের রাফটারের অনুভূমিক বিস্তার নির্ণয়</h3>\n<p>একটি ছাদের রাফটার 4.5 মিটার দীর্ঘ এবং অনুভূমিকের সাথে 30-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক বিস্তার নির্ণয় করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 4.5 মিটার (রাফটার), A = 30°। <strong>নির্ণেয়:</strong> b (অনুভূমিক বিস্তার)।</p>\n<p><strong>গণনা:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 3.90 মিটার</strong></p>\n<p>ঢালু রাফটার (4.5 মিটার) অনুভূমিকভাবে 3.90 মিটার জুড়ে থাকে। উপকরণ অর্ডারের সময় পার্থক্যটি গুরুত্বপূর্ণ: 3.90 মিটার অনুভূমিক বিস্তারের জন্য আপনার 4.5 মিটার কাঠ প্রয়োজন। ছাদের বহির্গত অংশ, সংযোগস্থল ও নির্মাণ ছাড় অন্তর্ভুক্ত নয়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 7: র‍্যাম্পের অনুভূমিক বিস্তার গণনা</h3>\n<p>একটি সরলীকৃত র‍্যাম্পের ঢালু দৈর্ঘ্য 8 মিটার এবং অনুভূমিকের সাপেক্ষে কোণ 6 ডিগ্রি। এর অনুভূমিক বিস্তার নির্ণয় করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 8 মিটার (ঢাল), A = 6°। <strong>নির্ণেয়:</strong> b (অনুভূমিক বিস্তার)।</p>\n<p><strong>গণনা:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 7.96 মিটার</strong></p>\n<p>6°-এর মতো অগভীর কোণে অনুভূমিক বিস্তার (7.96 মিটার) ঢালের দৈর্ঘ্যের (8 মিটার) প্রায় সমান। ঢাল সর্বদা অনুভূমিক অভিক্ষেপের চেয়ে সামান্য দীর্ঘ হয়। এটি প্রবেশগম্যতা বা ভবন নির্মাণ বিধি মেনে চলা যাচাই করে না।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 8: তারের অনুভূমিক বিস্তার নির্ণয়</h3>\n<p>একটি তার 20 মিটার দীর্ঘ এবং অনুভূমিকের সাথে 55-ডিগ্রি কোণ তৈরি করে। অনুভূমিক উপাদান গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 20 মিটার, A = 55°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 11.47 মিটার</strong></p>\n<p>কোণ যত খাড়া, অনুভূমিক বিস্তার তত কম। 55°-এ তারটি অনুভূমিকভাবে 11.47 মিটার জুড়ে থাকে এবং উল্লেখযোগ্যভাবে উপরে ওঠে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 9: জরিপে অনুভূমিক দূরত্ব অনুমান</h3>\n<p>একটি সরলীকৃত দৃষ্টিরেখা 150 মিটার দীর্ঘ এবং অনুভূমিকের সাথে 12-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক উপাদান নির্ণয় করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 150 মিটার, A = 12°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 146.72 মিটার</strong></p>\n<p>অনুভূমিক দূরত্ব 146.72 মিটার, যা 150 মিটার দৃষ্টিরেখার চেয়ে সামান্য কম। প্রকৃত জরিপে বক্রতা, ভূখণ্ড ও যন্ত্রের উচ্চতার সংশোধন প্রয়োজন; এই উদাহরণে শুধু মৌলিক জ্যামিতি আলোচিত হয়েছে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 10: তারের অনুভূমিক উপাদান নির্ণয়</h3>\n<p>একটি তার 13 মিটার দীর্ঘ এবং সমতল ভূমির সাথে 22-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক অভিক্ষেপ নির্ণয় করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 13 মিটার, A = 22°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 12.05 মিটার</strong></p>\n<p>অনুভূমিক উপাদান (12.05 মিটার) পূর্ণ তারের দৈর্ঘ্যের (13 মিটার) চেয়ে কম, কারণ তারের দৈর্ঘ্যের একটি অংশ উল্লম্ব উচ্চতায় চলে যায়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 11: ব্রেসের অনুভূমিক অফসেট গণনা</h3>\n<p>একটি তির্যক ব্রেস 2.4 মিটার দীর্ঘ এবং অনুভূমিকের সাথে 40-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক অভিক্ষেপ গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 2.4 মিটার, A = 40°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 1.84 মিটার</strong></p>\n<p>এই পরিমাপ একটি অঙ্কন ব্যাখ্যা করতে সাহায্য করে: ব্রেসটি অনুভূমিকভাবে 1.84 মিটার বিস্তৃত। গণনাটি জ্যামিতিক এবং কাঠামোগত শক্তি বা নকশার অনুমোদন যাচাই করে না।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 12: গাই তারের ভূমির দূরত্ব নির্ণয়</h3>\n<p>একটি গাই তার 18 মিটার দীর্ঘ এবং সমতল ভূমির সাথে 35-ডিগ্রি কোণ তৈরি করে। অ্যাংকর বিন্দু ও তারের সংযোগ বিন্দুর ঠিক নিচের বিন্দুর মধ্যে অনুভূমিক দূরত্ব গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 18 মিটার, A = 35°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 14.74 মিটার</strong></p>\n<p>তারটি নিজেই অতিভুজ, কারণ এটি ভূমির অ্যাংকর থেকে সংযোগ বিন্দু পর্যন্ত প্রসারিত, উল্লম্ব কাঠামো ও সমতল ভূমির তৈরি সমকোণের বিপরীতে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 13: ঢালে অনুভূমিক চলাচল অনুমান</h3>\n<p>একটি সরলীকৃত ঢালু পথ 250 মিটার পরিমাপের এবং অনুভূমিকের সাথে 18-ডিগ্রি কোণ তৈরি করে। অনুভূমিক উপাদান গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 250 মিটার, A = 18°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 237.76 মিটার</strong></p>\n<p>ঢাল বরাবর 250 মিটার হাঁটলে 237.76 মিটার অনুভূমিক দূরত্ব অতিক্রম হয়। ঢালের দূরত্ব সর্বদা অনুভূমিক সরণের চেয়ে দীর্ঘ হয়।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 14: হাঁটার পথের অনুভূমিক বিস্তার গণনা</h3>\n<p>একটি ঢালু হাঁটার পথ 6 মিটার দীর্ঘ এবং অনুভূমিকের সাথে 8-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক বিস্তার গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 6 মিটার, A = 8°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 5.94 মিটার</strong></p>\n<p>8°-এ হাঁটার পথটি এতটাই মৃদু যে অনুভূমিক বিস্তার (5.94 মিটার) ঢালের দৈর্ঘ্যের (6 মিটার) কাছাকাছি। শুধু এই ফলাফল প্রবেশগম্যতা বিধি মেনে চলা প্রমাণ করে না।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 15: যান্ত্রিক সংযোগের অনুভূমিক অভিক্ষেপ নির্ণয়</h3>\n<p>একটি যান্ত্রিক সংযোগ 850 মিলিমিটার দীর্ঘ এবং অনুভূমিকের সাপেক্ষে 25-ডিগ্রি কোণে অবস্থিত। এর অনুভূমিক উপাদান গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 850 মিলিমিটার, A = 25°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 770.36 মিলিমিটার</strong></p>\n<p>কোসাইন সম্পর্ক মিলিমিটারেও একইভাবে কাজ করে। উত্তরের একক সর্বদা অতিভুজ ইনপুটের এককের সাথে মিলে।</p>\n</article>\n<article class=\"mb-8\">\n<h3>উদাহরণ 16: ঢালু সাপোর্টের অনুভূমিক উপাদান গণনা</h3>\n<p>একটি সাপোর্ট সদস্য 3.2 ফুট দীর্ঘ এবং অনুভূমিকের সাথে 48-ডিগ্রি কোণ তৈরি করে। এর অনুভূমিক অভিক্ষেপ গণনা করুন।</p>\n<p><strong>প্রদত্ত:</strong> c = 3.2 ফুট, A = 48°। <strong>নির্ণেয়:</strong> b।</p>\n<p><strong>গণনা:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>উত্তর:</strong> <strong>b ≈ 2.14 ফুট</strong></p>\n<p>একটি মাত্রিক অঙ্কন পড়ার সময় এটি জানায় যে সাপোর্টটি অনুভূমিকভাবে 2.14 ফুট জুড়ে থাকে। গণনাটি জ্যামিতিক, কাঠামোগত নিরাপত্তা যাচাই নয়।</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">পরিস্থিতি</th>\n<th class=\"py-2 pr-4 font-semibold\">অতিভুজ</th>\n<th class=\"py-2 pr-4 font-semibold\">কোণ</th>\n<th class=\"py-2 pr-4 font-semibold\">সূত্র</th>\n<th class=\"py-2 font-semibold\">সন্নিহিত বাহু</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">মই</td><td class=\"py-2 pr-4\">5 মিটার</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 মিটার</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">ছাদের রাফটার</td><td class=\"py-2 pr-4\">4.5 মিটার</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 মিটার</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">তার</td><td class=\"py-2 pr-4\">20 মিটার</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 মিটার</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">জরিপ দৃষ্টি</td><td class=\"py-2 pr-4\">150 মিটার</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 মিটার</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">গাই তার</td><td class=\"py-2 pr-4\">18 মিটার</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 মিটার</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">হাঁটার পথ</td><td class=\"py-2 pr-4\">6 মিটার</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 মিটার</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"চারটি প্যানেল: মই, ছাদের রাফটার, তার ও হাঁটার পথ, কোসাইন দিয়ে গণনা করা অনুভূমিক অভিক্ষেপ দেখানোসহ\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">বাস্তবে কোসাইন: প্রতিটি প্যানেলে অতিভুজ, প্রসঙ্গ কোণ ও গণনা করা অনুভূমিক (সন্নিহিত) দূরত্ব দেখানো হয়েছে।</figcaption>\n</figure>"
      },
      {
        "h2": "সাইন বা ট্যানজেন্টের পরিবর্তে কখন কোসাইন ব্যবহার করবেন?",
        "paragraphs": [],
        "customHtml": "<p>প্রতিটি ত্রিকোণমিতিক অনুপাত বাহুর একটি ভিন্ন জোড়া যুক্ত করে। আপনার জ্ঞাত ও অজ্ঞাত মানের সাথে মিলে এমনটি বেছে নিন।</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">অনুপাত</th>\n<th class=\"py-2 pr-4 font-semibold\">সূত্র</th>\n<th class=\"py-2 pr-4 font-semibold\">জ্ঞাত</th>\n<th class=\"py-2 font-semibold\">নির্ণেয়</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">কোসাইন</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">অতিভুজ, কোণ</td><td class=\"py-2\">সন্নিহিত বাহু</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">সাইন</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">অতিভুজ, কোণ</td><td class=\"py-2\">বিপরীত বাহু</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">ট্যানজেন্ট</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">সন্নিহিত বাহু, কোণ</td><td class=\"py-2\">বিপরীত বাহু</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>ভুল অনুপাতে যা ভুল হয়:</strong> ধরুন c = 10 মিটার ও A = 30°, এবং আপনার সন্নিহিত বাহু প্রয়োজন। ভুলে সাইন ব্যবহার করলে a = 10 × sin(30°) = 5 মিটার পাওয়া যায়, যা বিপরীত বাহু, সন্নিহিত নয়। সঠিক কোসাইন গণনায় b ≈ 8.66 মিটার পাওয়া যায়। দুটি উত্তর ভিন্ন, কারণ তারা ভিন্ন বাহু পরিমাপ করে। বাছাইয়ের আগে কোন বাহু আপনার প্রসঙ্গ কোণ স্পর্শ করে তা সর্বদা নিশ্চিত করুন।</p>"
      },
      {
        "h2": "কোণ কীভাবে সন্নিহিত বাহু বদলে দেয়",
        "paragraphs": [],
        "customHtml": "<p>অতিভুজ স্থির থাকলে কোণ A বাড়ার সাথে সন্নিহিত বাহু সঙ্কুচিত হয়। 0°-এ cos(A) = 1 এবং সন্নিহিত বাহু পূর্ণ অতিভুজের সমান হয় (ত্রিভুজটি একটি রেখায় সমতল হয়ে যায়)। 90°-এ cos(A) = 0 এবং সন্নিহিত বাহু শূন্য হয়ে যায়। এই চরম মানগুলোর মধ্যে সম্পর্ক মসৃণ ও অনুমানযোগ্য।</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">কোণ A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">সন্নিহিত b (c = 10)</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>ধরনটি লক্ষ্য করুন: কোণ 30° থেকে 60° দ্বিগুণ করলে বাহু অর্ধেক হয় না, কারণ কোসাইন রৈখিক নয়। একই কোণ কিন্তু ভিন্ন অতিভুজের দুটি ত্রিভুজ সদৃশ, তাই পরম দৈর্ঘ্য ভিন্ন হলেও এদের বাহুর অনুপাত মিলে। 30°-এ 5 মিটার অতিভুজে b ≈ 4.33 মিটার পাওয়া যায়, যা 10 মিটার ক্ষেত্রের ঠিক অর্ধেক।</p>\n<p>দ্রষ্টব্য: অপতিত সমকোণী ত্রিভুজের জন্য 0° ও 90° বৈধ সূক্ষ্মকোণ নয়। এগুলো সীমাবদ্ধ ক্ষেত্র যেখানে ত্রিভুজ সংকুচিত হয়ে যায়।</p>"
      },
      {
        "h2": "কোণ ও পরিমাপ সঠিকভাবে প্রবেশ করানো",
        "paragraphs": [
          "এই ক্যালকুলেটর ডিগ্রিতে কোণ আশা করে। ডিগ্রি একটি পূর্ণ বৃত্তকে 360 ভাগে ভাগ করে; রেডিয়ান একটি ভিন্ন স্কেল ব্যবহার করে যেখানে পূর্ণ বৃত্ত প্রায় 6.283। 30 ডিগ্রি বোঝাতে 30 রেডিয়ান প্রবেশ করালে মারাত্মক ভুল উত্তর আসে, কারণ cos(30 রেডিয়ান) ≈ 0.154, 0.866 নয়। গণনার আগে আপনার কোণ ডিগ্রিতে আছে কিনা সর্বদা নিশ্চিত করুন।",
          "উত্তরে যে দৈর্ঘ্যের একক চান অতিভুজের জন্য সেই এককই ব্যবহার করুন। c মিটারে হলে b মিটারে আসে। একক মেশানো, যেমন c = 5 (মিটার) প্রবেশ করিয়ে ফুটে ভাবা, ভুল ফলাফল নিশ্চিত করে। আগে রূপান্তর করুন, তারপর গণনা করুন।",
          "শুধু চূড়ান্ত উত্তরে আসন্ন মান নিন, মধ্যবর্তী মানে নয়। 42°-এর কোসাইন 0.743144825..., এবং পূর্ণ মান ব্যবহার করলে c = 7.5 মিটারের জন্য b = 5.5736 মিটার পাওয়া যায়। কোসাইনকে আগে 0.74-এ আসন্ন করলে 5.55 মিটার পাওয়া যায়, প্রায় 2.4 সেন্টিমিটার ভুল। আপনার ফলাফল আপনার সর্বনিম্ন নির্ভুল ইনপুটের চেয়ে বেশি নির্ভুল হতে পারে না: অতিভুজ নিকটতম সেন্টিমিটারে পরিমাপ করলে উত্তর মিলিমিটারে জানাবেন না।"
        ]
      },
      {
        "h2": "সাধারণ কোসাইন গণনার ভুল ও এড়ানোর উপায়",
        "paragraphs": [],
        "customHtml": "<p><strong>1. সন্নিহিত বাহুকে বিপরীত বাহুর সাথে গুলিয়ে ফেলা।</strong> সন্নিহিত বাহু কোণ A স্পর্শ করে; বিপরীত বাহু করে না। সমাধান: কোণ A থেকে প্রতিটি বাহু বরাবর অনুসরণ করে নিশ্চিত করুন কোনটি কোণটি গঠন করে।</p>\n<p><strong>2. বাহুকে অতিভুজ হিসেবে ব্যবহার করা।</strong> অতিভুজের ক্ষেত্রে বাহুর মান প্রবেশ করালে ফলাফল বড় হয়ে যায়। সমাধান: অতিভুজ সর্বদা সমকোণের বিপরীতে এবং সর্বদা সবচেয়ে দীর্ঘ বাহু।</p>\n<p><strong>3. অতিভুজ দিয়ে গুণ করতে ভুলে যাওয়া।</strong> 10 × 0.866 ≈ 8.66-এর বদলে cos(30°) ≈ 0.866 উত্তর দেওয়া। সমাধান: শুধু অনুপাত দৈর্ঘ্য নয়; c দিয়ে গুণ করুন।</p>\n<p><strong>4. গুণের বদলে ভাগ করা।</strong> c × cos(A)-এর বদলে c / cos(A) গণনা করা। ভাগ ট্যানজেন্ট মোডে a থেকে b নির্ণয়ে প্রযোজ্য, কোসাইনে নয়। সমাধান: পুনর্বিন্যাসকৃত সূত্র যাচাই করুন।</p>\n<p><strong>5. ভুল প্রসঙ্গ কোণ ব্যবহার করা।</strong> কোণ A-এর বদলে কোণ B থেকে পরিমাপ করলে সন্নিহিত ও বিপরীত অদলবদল হয়। সমাধান: বাহু চিহ্নিত করার আগে আপনার প্রসঙ্গ কোণ চিহ্নিত করুন।</p>\n<p><strong>6. ডিগ্রি প্রত্যাশিত হলে রেডিয়ান প্রবেশ করানো।</strong> cos(1 রেডিয়ান) ≈ 0.540, যা cos(1°) ≈ 0.99985 থেকে ভিন্ন। সমাধান: ডিগ্রি মোড নিশ্চিত করুন।</p>\n<p><strong>7. একক মেশানো।</strong> c = 5 (মিটার) প্রবেশ করিয়ে ফুট আশা করা। সমাধান: প্রথমে সব ইনপুট এক এককে রূপান্তর করুন।</p>\n<p><strong>8. মধ্যবর্তী মান খুব আগে আসন্ন করা।</strong> গুণের আগে cos(42°)-কে 0.74-এ আসন্ন করলে ভুল জমা হয়। সমাধান: চূড়ান্ত ধাপ পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।</p>\n<p><strong>9. অ-সমকোণী ত্রিভুজে কোসাইন প্রয়োগ করা।</strong> অনুপাতের সংজ্ঞাগুলো 90-ডিগ্রি কোণ ধরে নেয়। সমাধান: এই ক্যালকুলেটর ব্যবহারের আগে সমকোণ আছে কিনা যাচাই করুন।</p>\n<p><strong>10. অতিভুজের চেয়ে দীর্ঘ ফলাফল মেনে নেওয়া।</strong> b > c হলে কিছু ভুল আছে। সমাধান: ইনপুট পুনরায় যাচাই করুন; সূক্ষ্মকোণের জন্য cos(A) কখনো 1 ছাড়ায় না।</p>\n<p><strong>11. শূন্য, ঋণাত্মক বা অবৈধ পরিমাপ প্রবেশ করানো।</strong> বাহুর দৈর্ঘ্য ধনাত্মক হতে হবে। সমাধান: শুধু ধনাত্মক দৈর্ঘ্য ব্যবহার করুন।</p>\n<p><strong>12. প্রায়-শূন্য সন্নিহিত বাহুকে ভুল মনে করা।</strong> 89°-এ b ≈ 0.017c, যা সঠিক জ্যামিতি, ত্রুটি নয়। সমাধান: স্বীকার করুন যে খাড়া কোণ স্বাভাবিকভাবে ছোট সন্নিহিত বাহু তৈরি করে।</p>"
      },
      {
        "h2": "আপনার কোসাইন ফলাফল সঠিক কিনা কীভাবে যাচাই করবেন",
        "paragraphs": [],
        "customHtml": "<p><strong>পদ্ধতি 1: আপেক্ষিক বাহুর দৈর্ঘ্য যাচাই করুন।</strong> যেকোনো সূক্ষ্মকোণের জন্য সন্নিহিত বাহু অতিভুজের চেয়ে ছোট হতে হবে। আপনার উত্তর c ছাড়িয়ে গেলে ইনপুট পুনরায় যাচাই করুন।</p>\n<p><strong>পদ্ধতি 2: কোসাইন অনুপাত পুনরায় গণনা করুন।</strong> আপনার উত্তরকে অতিভুজ দিয়ে ভাগ করুন: b / c প্রায় cos(A)-এর সমান হওয়া উচিত। যাচাইয়ে অ-আসন্ন মান ব্যবহার করুন। c = 10 মিটার, A = 30°, b ≈ 8.660254-এর জন্য: 8.660254 / 10 = 0.8660254 ≈ cos(30°)। মিল সঠিকতা নিশ্চিত করে।</p>\n<p><strong>পদ্ধতি 3: পিথাগোরাসের উপপাদ্য প্রয়োগ করুন।</strong> আপনি বিপরীত বাহু a = c × sin(A)-ও জানলে বা গণনা করলে যাচাই করুন যে a² + b² ≈ c²। পূর্ণ উদাহরণ: c = 10 মিটার, A = 30°। তাহলে b ≈ 8.660254 মিটার এবং a = 10 × sin(30°) = 5 মিটার। যাচাই: 5² + 8.660254² = 25 + 75 = 100 = 10²। ত্রিভুজটি সঙ্গতিপূর্ণ।</p>\n<p>শেষ দশমিক স্থানে সামান্য পার্থক্য প্রদর্শিত মানগুলোর আসন্নকরণ থেকে আসে। যাচাইয়ের সময় আসন্ন আউটপুটের বদলে পূর্ণ-নির্ভুল সংখ্যা ব্যবহার করুন।</p>"
      },
      {
        "h2": "আত্মবিশ্বাসের সাথে সন্নিহিত বাহু নির্ণয় করুন",
        "paragraphs": [
          "প্রথমে অতিভুজ ও প্রসঙ্গ কোণ চিহ্নিত করুন। কোন বাহু কোণটি স্পর্শ করে তা নিশ্চিত করুন: সেটিই সন্নিহিত বাহু b। ডিগ্রিতে কোণ নিয়ে b = c × cos(A) প্রয়োগ করুন, সামঞ্জস্যপূর্ণ একক ব্যবহার করে। উত্তর অতিভুজের চেয়ে ছোট কিনা যাচাই করুন এবং সম্ভব হলে পিথাগোরাসের উপপাদ্য দিয়ে যাচাই করুন। এই অভ্যাসগুলোর মাধ্যমে প্রতিটি কোসাইন বাহু গণনা রুটিন হয়ে যায়। আপনার সংখ্যা চালাতে উপরের ক্যালকুলেটর ব্যবহার করুন।"
        ]
      }
    ],
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "সমকোণী ত্রিভুজের কোণ থেকে বাহু ক্যালকুলেটর"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "সমকোণী ত্রিভুজের সাইন থেকে বাহু ক্যালকুলেটর"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "সমকোণী ত্রিভুজের ট্যানজেন্ট থেকে বাহু ক্যালকুলেটর"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "কোসাইন অনুপাত ক্যালকুলেটর"
      }
    ],
    "faqs": [
      {
        "question": "কোসাইন ব্যবহার করে সন্নিহিত বাহু কীভাবে নির্ণয় করবেন?",
        "answer": "জ্ঞাত সূক্ষ্মকোণের কোসাইন দিয়ে অতিভুজকে গুণ করুন: b = c × cos(A)। অতিভুজ c ও ডিগ্রিতে কোণ A প্রবেশ করান, এবং ক্যালকুলেটর পূর্ণ সমাধান ধাপসহ সন্নিহিত বাহু b ফেরত দেয়।"
      },
      {
        "question": "কোসাইন বাহু ক্যালকুলেটরের সূত্র কী?",
        "answer": "সূত্রটি হলো b = c × cos(A), যেখানে b সন্নিহিত বাহু, c অতিভুজ এবং A সূক্ষ্মকোণ। এটি কোসাইন অনুপাত cos(A) = b / c-কে উভয় পক্ষকে c দিয়ে গুণ করে পুনর্বিন্যাস করে পাওয়া।"
      },
      {
        "question": "কোসাইন অনুপাতে কোন বাহুগুলো ব্যবহৃত হয়?",
        "answer": "কোসাইন সন্নিহিত বাহু ও অতিভুজ ব্যবহার করে: cos(A) = সন্নিহিত / অতিভুজ। কোণ A-এর জন্য সন্নিহিত বাহু হলো b (কোণ A স্পর্শকারী বাহু) এবং অতিভুজ হলো c (সবচেয়ে দীর্ঘ বাহু, সমকোণের বিপরীতে)।"
      },
      {
        "question": "অতিভুজ ও কোণ থেকে সন্নিহিত বাহু গণনা করতে পারি কি?",
        "answer": "হ্যাঁ। এই ক্যালকুলেটর ঠিক এটিই করে। অতিভুজের দৈর্ঘ্য ও ডিগ্রিতে সূক্ষ্মকোণ প্রবেশ করান, এবং এটি b = c × cos(A) গণনা করে। কোণ 0 থেকে 90 ডিগ্রির মধ্যে হতে হবে, উভয় প্রান্ত বাদে।"
      },
      {
        "question": "সন্নিহিত বাহু অতিভুজের চেয়ে ছোট কেন?",
        "answer": "যেকোনো সূক্ষ্মকোণের জন্য cos(A) 0 থেকে 1-এর মধ্যে থাকে, তাই অতিভুজকে cos(A) দিয়ে গুণ করলে সর্বদা ছোট মান পাওয়া যায়। জ্যামিতিকভাবে, সমকোণী ত্রিভুজের কোনো বাহুই অতিভুজকে ছাড়াতে পারে না, যা শীর্ষবিন্দুগুলোর মধ্যে সর্বাধিক দূরত্ব জুড়ে থাকে।"
      },
      {
        "question": "সাইন ও কোসাইনের পার্থক্য কী?",
        "answer": "উভয়েই অতিভুজ ব্যবহার করে, তবে সাইন বিপরীত বাহু দেয় (a = c × sin(A)) আর কোসাইন সন্নিহিত বাহু দেয় (b = c × cos(A))। কোণের বিপরীত বাহু প্রয়োজন হলে সাইন বেছে নিন, পাশের বাহু প্রয়োজন হলে কোসাইন।"
      },
      {
        "question": "কোণ ডিগ্রিতে না রেডিয়ানে প্রবেশ করাব?",
        "answer": "কোণ ডিগ্রিতে প্রবেশ করান। এই ক্যালকুলেটর ডিগ্রি ইনপুট আশা করে। রেডিয়ান প্রবেশ করালে ভুল ফলাফল আসে, কারণ cos(30 রেডিয়ান) ≈ 0.154, cos(30°) ≈ 0.866 থেকে ভিন্ন। গণনার আগে সর্বদা ডিগ্রি মোড নিশ্চিত করুন।"
      },
      {
        "question": "কোসাইন দিয়ে মিটার, ফুট বা ইঞ্চিতে বাহু গণনা করা যায়?",
        "answer": "হ্যাঁ। সূত্রটি যেকোনো দৈর্ঘ্যের এককে কাজ করে। উত্তর অতিভুজ ইনপুটের একই এককে আসে: মিটার দিলে মিটার, ফুট দিলে ফুট। সব ইনপুটে সামঞ্জস্যপূর্ণ একক ব্যবহার করুন।"
      },
      {
        "question": "কোণ বাড়লে সন্নিহিত বাহু কমে কেন?",
        "answer": "কোণ 0° থেকে 90° বাড়ার সাথে কোসাইন 1 থেকে 0-এ কমে। যেহেতু b = c × cos(A), ছোট কোসাইন গুণক ছোট সন্নিহিত বাহু তৈরি করে। 60°-এ সন্নিহিত বাহু অতিভুজের অর্ধেক; 80°-এ মাত্র প্রায় 17%।"
      },
      {
        "question": "সন্নিহিত বাহু ও কোণ জানা থাকলে কিন্তু অতিভুজ না জানা থাকলে কী হবে?",
        "answer": "c-এর জন্য সূত্রটি পুনর্বিন্যাস করুন: c = b / cos(A)। এই ক্যালকুলেটর অতিভুজ থেকে সন্নিহিত বাহু নির্ণয় করে; সন্নিহিত বাহু থেকে অতিভুজ নির্ণয় করতে সন্নিহিত বাহুকে cos(A) দিয়ে ভাগ করুন।"
      },
      {
        "question": "আমার গণনা করা বাহু কীভাবে যাচাই করব?",
        "answer": "তিনটি বিষয় যাচাই করুন: (1) উত্তর অতিভুজের চেয়ে ছোট, (2) উত্তরকে অতিভুজ দিয়ে ভাগ করলে প্রায় cos(A)-এর সমান, এবং (3) a = c × sin(A)-ও গণনা করলে a² + b² সমান c² হওয়া উচিত।"
      },
      {
        "question": "কোণ 90 ডিগ্রির খুব কাছাকাছি হলে কী হয়?",
        "answer": "সন্নিহিত বাহু খুব ছোট হয়ে যায়, কারণ cos(A) শূন্যের দিকে যায়। 89°-এ b ≈ 0.017c। এটি সঠিক জ্যামিতি, ভুল নয়। ত্রিভুজটি লম্বা ও সরু হয়ে যায়, অতিভুজের দৈর্ঘ্যের প্রায় সবটাই বিপরীত বাহুতে চলে যায়।"
      }
    ]
  },
  "ja": {
    "slug": "right-triangle-side-from-cosine-calculator",
    "url": "/right-triangle-side-from-cosine-calculator/",
    "h1": "余弦から直角三角形の辺を求める計算機",
    "metaTitle": "余弦から直角三角形の辺を求める計算機 | b = c × cos(A) を計算",
    "metaDescription": "この余弦による直角三角形の辺計算機を使えば、角度 A と斜辺 c から隣辺 b を、公式・手順・例題とともに求めることができます。",
    "formulaSlug": "b-c-cos",
    "toolPurpose": "この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A と斜辺 c が分かっているときに、隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b を求めます。余弦の計算を自動で処理し、解法の全手順を表示するので、各ステップを確認・検証できます。",
    "intro": "この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>を使って、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A と斜辺 c から隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b を求めましょう。",
    "quickSummary": {
      "h2": "このツールで解けること",
      "intro": "この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A と斜辺 c を入力として受け取り、隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b を返します。余弦はこれら3つの値を結びつける比なので、公式を変形する必要がありません。",
      "cards": [
        {
          "label": "既知の値",
          "value": "角度 A と斜辺 c"
        },
        {
          "label": "求める値",
          "value": "隣辺 b"
        },
        {
          "label": "主な公式",
          "value": "b = c × cos(A)"
        },
        {
          "label": "用途",
          "value": "水平距離、基礎の長さ、地面への投影を求める場合"
        }
      ]
    },
    "diagram": {
      "h2": "直角三角形の図: 余弦から辺 b を求める",
      "intro": "この図では、<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A が右下にあります。隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b は底辺に沿って延び、角度 A のすぐ隣にあります。斜辺 c は角度 A から頂上の頂点まで伸びています。この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>は、これら2つの既知の値を使って b を求めます。",
      "caption": "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A、既知の斜辺 c、未知の隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b を示す直角三角形。",
      "sides": {
        "a": {
          "label": "a",
          "description": "対<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> a は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A の真向かいにあります。この計算では必要ありません。",
          "status": "unknown"
        },
        "b": {
          "label": "b = 求める値",
          "description": "隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b は<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A の隣で底辺に沿っています。この<a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">計算機</a>が返す値です。",
          "status": "unknown"
        },
        "c": {
          "label": "c = 既知",
          "description": "斜辺 c は最も長い<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>で、直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かいにあります。入力として指定してください。",
          "status": "known"
        }
      },
      "notes": [
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A に対して、<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> a は対辺、辺 b は隣辺、辺 c は斜辺です。",
        "隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>は、常に<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A と直角の両方に接する辺です。",
        "結果 b は常に c より短くなります。"
      ]
    },
    "calculator": {
      "outputLabel": "隣辺 b",
      "fields": [
        {
          "key": "c",
          "label": "斜辺 c",
          "min": 0
        },
        {
          "key": "A",
          "label": "角度 A",
          "min": 0
        }
      ]
    },
    "formulaSection": {
      "h2": "余弦から辺を求める公式",
      "paragraphs": [
        "直角三角形における<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a>の余弦は、隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>を斜辺で割った値に等しくなります。比として書くと cos(A) = b / c となります。両辺に c を掛けると、下の直接公式が得られます。",
        "ここで、c は斜辺（最も長い<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>、90度の<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かい側）、A は鋭角、b は求めたい隣辺です。<a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">余弦関数</a>は角度を、隣辺に等しい斜辺の正確な割合に変換します。"
      ],
      "formulas": [
        "b = c \\times \\cos(A)"
      ]
    },
    "howTo": {
      "h2": "この計算機の使い方",
      "steps": [
        "直角三角形の中で斜辺 c を見つけましょう。直<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a>の向かいにある<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a>で、常に最も長い辺です。",
        "既知の鋭<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角</a> A を特定しましょう。値が度数法であることを確認してください。",
        "最初の入力欄に斜辺 c を入力します。",
        "2番目の入力欄に<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">角度</a> A を入力します。",
        "「計算」ボタンを押すと、隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b と段階的な解法が表示されます。"
      ]
    },
    "example": {
      "h2": "段階的な例題: 隣辺 b を求める",
      "intro": "条件: A = 36.87 度、c = 5。余弦の公式を使って隣<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">辺</a> b を求めましょう。",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "余弦を使って隣辺を求める方法",
        "paragraphs": [
          "5 m のはしごが壁に立てかけられ、地面と65度の角度をなしています。はしごの長さと角度は分かっていますが、壁からはしごの足元までの距離はどれくらいでしょうか。その水平距離は直角三角形の隣辺であり、余弦を使えば直接求められます。余弦による辺計算機は、斜辺と1つの鋭角を入力として受け取り、隣辺を返します。手作業の三角関数表は必要ありません。",
          "このページでは、余弦の公式を基本原理から解説します。隣辺の意味、余弦が斜辺を使う理由、図の向きによらず正しい辺を特定する方法、そして結果を実際の測定に応用する方法です。公式は b = c × cos(A) で、b は角度 A の隣の辺、c は斜辺、A は度数法で表した角度です。2辺が必要な基本的なピタゴラス計算機とは異なり、このツールは1辺と1角が分かれば計算できます。"
        ]
      },
      {
        "h2": "隣辺と斜辺の理解",
        "paragraphs": [],
        "customHtml": "<h3>直角三角形とは？</h3>\n<p>直角三角形は、ちょうど90度の角を1つ含みます。残りの2つの角は鋭角（いずれも90度未満）で、互いに余角の関係にあり、合計で90度になります。角度 A が30度なら、もう1つの鋭角 B は60度でなければなりません。余弦の計算にはこの直角構造が必要です。比の定義は、2つの辺（脚）の垂直な関係に基づいているからです。</p>\n<h3>斜辺とは？</h3>\n<p>斜辺は直角の向かいに位置し、常に最も長い辺です。慣例により c と表記します。回転した図で斜辺を見つけるには、直角マークに触れていない辺を探してください。この計算機では、斜辺を既知の値として入力します。</p>\n<h3>隣辺とは？</h3>\n<p>隣辺は、基準角 A と直角の両方に接する辺（脚）です。角度 A に対しては、辺 b が隣辺、辺 a が対辺になります。基準を角度 B に切り替えると、ラベルが入れ替わります。辺 a が隣辺になり、辺 b が対辺になります。斜辺は決して変わりません。常に c で、90度の角の向かいにあります。</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"左下に角度 A、隣辺 b、対辺 a、斜辺 c を表示した直角三角形\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">余弦のための図解: 左下に角度 A、底辺に沿った隣辺 b、垂直な対辺 a、直角の向かい側に斜辺 c。</figcaption>\n</figure>"
      },
      {
        "h2": "直角三角形における余弦とは？",
        "paragraphs": [],
        "customHtml": "<p>余弦は単純な比を表します。ある鋭角に対して、隣辺を斜辺で割った値は常に同じ数になります。その数が cos(A) です。角度 A が60度の場合、cos(60°) = 0.5 となり、三角形の大小にかかわらず、隣辺は斜辺のちょうど半分であることを意味します。</p>\n<p>この比には単位がありません。単位が打ち消されるからです（メートル÷メートルは純粋な数になります）。隣辺を求めるには、この比を変形します。cos(A) = b / c から始めます。両辺に c を掛けます。分母の c が打ち消され、<strong>b = c × cos(A)</strong> が残ります。この公式は、既知の斜辺に既知の角度の余弦を掛けます。</p>\n<p>有効な鋭角（0度から90度の間）に対して、cos(A) は0から1の間になります。これにより、隣辺が斜辺より短いことが保証されます。これは幾何学と一致します。いかなる辺も斜辺を超えることはありません。</p>\n<h3>SOH-CAH-TOA の理解</h3>\n<p>SOH-CAH-TOA は3つの基本的な比の覚え方です。SOH: 正弦 = 対辺 / 斜辺。CAH: 余弦 = 隣辺 / 斜辺。TOA: 正接 = 対辺 / 隣辺。このページでは CAH に注目してください。この語呂合わせは正しい比を選ぶ助けになりますが、基準角に対してどの辺が隣辺かを正しく特定する必要は変わりません。</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"隣辺 b と斜辺 c を強調し、cos(A) が b を c で割った値に等しいことを示す直角三角形\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">余弦の比: 強調表示された隣辺 b を強調表示された斜辺 c で割ると cos(A) が得られます。</figcaption>\n</figure>"
      },
      {
        "h2": "余弦から直角三角形の辺を求める計算機の使い方",
        "paragraphs": [
          "正確な結果を得るために、次の手順に従ってください。"
        ],
        "listTitle": "手順:",
        "listItems": [
          "三角形の直角を特定します。1つの角が90度であることを確認してください。",
          "既知の鋭角 A を特定します。直角でないことを確認してください。",
          "斜辺 c を見つけます。直角の向かいにある辺で、常に最も長い辺です。",
          "隣辺 b を特定します。角度 A と直角の両方に接しています。",
          "最初の入力欄に斜辺の長さ c を入力します。",
          "2番目の入力欄に角度 A を度数法で入力します。",
          "斜辺の入力に合った測定単位を選択します。",
          "「計算」ボタンを押します。結果として、解法の手順とともに隣辺 b が表示されます。",
          "公式と代入が問題に合っていることを、手順を確認して確かめてください。",
          "b が c より短いことを確認します。そうでない場合は、斜辺として入力した辺を再確認してください。"
        ]
      },
      {
        "h2": "余弦を使って隣辺を計算する方法",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>例題1: 基本的な直角三角形</h3>\n<p><strong>条件:</strong> c = 10 m、A = 30°。<strong>求める値:</strong> b。</p>\n<p><strong>公式:</strong> b = c × cos(A)</p>\n<p><strong>代入:</strong> b = 10 × cos(30°)</p>\n<p><strong>余弦の値:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>計算:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>答え:</strong> <strong>b ≈ 8.66 m</strong></p>\n<p>予想通り、結果は 10 m の斜辺より短くなります。30度の場合、隣辺は斜辺の長さの約87%です。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題2: 特殊角</h3>\n<p><strong>条件:</strong> c = 12 ft、A = 60°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>答え:</strong> <strong>b = 6 ft</strong></p>\n<p>60度では cos(A) = 0.5 ちょうどなので、隣辺は斜辺の正確に半分です。30°、45°、60° といった特殊角は、覚えておく価値のあるきれいな余弦の値になります。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題3: 小数を含む測定値</h3>\n<p><strong>条件:</strong> c = 7.5 m、A = 42°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>答え:</strong> <strong>b ≈ 5.57 m</strong></p>\n<p>計算中は余弦の値を完全な精度で保ち、最終的な答えだけを丸めてください。cos(42°) を早い段階で 0.74 に丸めると 5.55 m になり、小さいながらも避けられる誤差が生じます。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題4: 90度に近い角度</h3>\n<p><strong>条件:</strong> c = 15 cm、A = 80°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>答え:</strong> <strong>b ≈ 2.60 cm</strong></p>\n<p>角度が90度に近づくにつれて、隣辺はゼロに向かって縮みます。80° では、隣辺は斜辺の約17%にすぎません。これは正常な幾何学であり、計算ミスではありません。</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"段階的な余弦の計算: 10 m の斜辺、30度の角度、隣辺は 8.66 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">解法の例: b = 10 × cos(30°) ≈ 8.66 m。各代入ステップを示しています。</figcaption>\n</figure>"
      },
      {
        "h2": "余弦計算の実生活での例",
        "paragraphs": [
          "これらの例は、余弦の公式が実際の測定問題をどのように解決するかを示します。いずれの場合も、既知の傾斜または斜めの長さが斜辺であり、求めたい水平距離が隣辺です。"
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>例題5: はしごの水平距離を求める</h3>\n<p>5 m のはしごが壁に立てかけられ、水平な地面と65度の角度をなしています。壁からはしごの足元までの水平距離を求めましょう。</p>\n<p><strong>条件:</strong> c = 5 m（はしご）、A = 65°。<strong>求める値:</strong> b（地面の距離）。</p>\n<p><strong>なぜ隣辺か:</strong> 地面の距離は、65°の角と、壁と地面が出会う直角の両方に接しています。</p>\n<p><strong>計算:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>答え:</strong> <strong>b ≈ 2.11 m</strong></p>\n<p>はしごの足元は壁から約 2.11 m の位置にあります。これは幾何学的な計算のみであり、はしごの設置が安全かどうかを判断するものではありません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題6: 屋根の水平距離を求める</h3>\n<p>屋根の垂木は 4.5 m の長さがあり、水平面と30度の角度をなしています。その水平距離を求めましょう。</p>\n<p><strong>条件:</strong> c = 4.5 m（垂木）、A = 30°。<strong>求める値:</strong> b（水平距離）。</p>\n<p><strong>計算:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>答え:</strong> <strong>b ≈ 3.90 m</strong></p>\n<p>傾斜した垂木（4.5 m）は水平方向に 3.90 m をカバーします。この差は材料の発注時に重要です。3.90 m の水平スパンには 4.5 m の木材が必要です。屋根の軒の出、継ぎ目、施工上の余裕は含まれていません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題7: スロープの水平距離を計算する</h3>\n<p>簡略化されたスロープは、傾斜の長さが 8 m で、水平面に対して6度の角度があります。その水平距離を求めましょう。</p>\n<p><strong>条件:</strong> c = 8 m（傾斜）、A = 6°。<strong>求める値:</strong> b（水平距離）。</p>\n<p><strong>計算:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>答え:</strong> <strong>b ≈ 7.96 m</strong></p>\n<p>緩やかな6°の角度では、水平距離（7.96 m）は傾斜の長さ（8 m）とほぼ等しくなります。傾斜は常に水平投影よりわずかに長くなります。これはバリアフリーや建築基準への適合を検証するものではありません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題8: ケーブルの水平到達距離を求める</h3>\n<p>ケーブルは 20 m の長さがあり、水平面と55度の角度をなしています。水平成分を計算しましょう。</p>\n<p><strong>条件:</strong> c = 20 m、A = 55°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>答え:</strong> <strong>b ≈ 11.47 m</strong></p>\n<p>角度が急になるほど、水平到達距離は短くなります。55° では、ケーブルは水平方向に 11.47 m をカバーしながら大きく上昇します。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題9: 測量における水平距離の推定</h3>\n<p>簡略化された視線は 150 m の長さがあり、水平面と12度の角度をなしています。その水平成分を求めましょう。</p>\n<p><strong>条件:</strong> c = 150 m、A = 12°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>答え:</strong> <strong>b ≈ 146.72 m</strong></p>\n<p>水平距離は 146.72 m で、150 m の視線よりわずかに短くなります。実際の測量では、地球の曲率、地形、器械高の補正が必要です。この例では基本的な幾何学のみを扱います。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題10: 電線の水平成分を求める</h3>\n<p>電線は 13 m の長さがあり、水平な地面と22度の角度をなしています。その水平投影を求めましょう。</p>\n<p><strong>条件:</strong> c = 13 m、A = 22°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>答え:</strong> <strong>b ≈ 12.05 m</strong></p>\n<p>水平成分（12.05 m）は電線の全長（13 m）より短くなります。電線の長さの一部が垂直方向の上昇に使われるからです。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題11: 筋交いの水平オフセットを計算する</h3>\n<p>斜めの筋交いは 2.4 m の長さがあり、水平面と40度の角度をなしています。その水平投影を計算しましょう。</p>\n<p><strong>条件:</strong> c = 2.4 m、A = 40°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>答え:</strong> <strong>b ≈ 1.84 m</strong></p>\n<p>この測定値は図面の解釈に役立ちます。筋交いは水平方向に 1.84 m をカバーします。この計算は幾何学的なものであり、構造強度や設計適合性を検証するものではありません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題12: 支線の地上距離を求める</h3>\n<p>支線は 18 m の長さがあり、水平な地面と35度の角度をなしています。アンカー点と、支線の取り付け点の真下の点との間の水平距離を計算しましょう。</p>\n<p><strong>条件:</strong> c = 18 m、A = 35°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>答え:</strong> <strong>b ≈ 14.74 m</strong></p>\n<p>支線自体が斜辺です。地面のアンカーから取り付け点まで伸び、垂直な構造物と水平な地面が作る直角の向かいにあるからです。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題13: 斜面での水平移動距離の推定</h3>\n<p>簡略化された傾斜路は 250 m の長さがあり、水平面と18度の角度をなしています。水平成分を計算しましょう。</p>\n<p><strong>条件:</strong> c = 250 m、A = 18°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>答え:</strong> <strong>b ≈ 237.76 m</strong></p>\n<p>斜面に沿って 250 m 歩くと、水平方向に 237.76 m 進んだことになります。斜面の距離は常に水平変位より長くなります。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題14: 歩道の水平距離を計算する</h3>\n<p>傾斜した歩道は 6 m の長さがあり、水平面と8度の角度をなしています。その水平距離を計算しましょう。</p>\n<p><strong>条件:</strong> c = 6 m、A = 8°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>答え:</strong> <strong>b ≈ 5.94 m</strong></p>\n<p>8° では歩道は十分に緩やかで、水平距離（5.94 m）は傾斜の長さ（6 m）に近くなります。この結果だけではバリアフリーへの適合は証明されません。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題15: 機械リンクの水平投影を求める</h3>\n<p>機械リンクは 850 mm の長さがあり、水平面に対して25度の角度で配置されています。その水平成分を計算しましょう。</p>\n<p><strong>条件:</strong> c = 850 mm、A = 25°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>答え:</strong> <strong>b ≈ 770.36 mm</strong></p>\n<p>余弦の関係はミリメートルでも同様に成り立ちます。答えの単位は常に斜辺の入力の単位と一致します。</p>\n</article>\n<article class=\"mb-8\">\n<h3>例題16: 傾斜した支持材の水平成分を計算する</h3>\n<p>支持材は 3.2 ft の長さがあり、水平面と48度の角度をなしています。その水平投影を計算しましょう。</p>\n<p><strong>条件:</strong> c = 3.2 ft、A = 48°。<strong>求める値:</strong> b。</p>\n<p><strong>計算:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>答え:</strong> <strong>b ≈ 2.14 ft</strong></p>\n<p>寸法図を読む際、この値は支持材が水平方向に 2.14 ft をカバーすることを示します。この計算は幾何学的なものであり、構造の安全確認ではありません。</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">場面</th>\n<th class=\"py-2 pr-4 font-semibold\">斜辺</th>\n<th class=\"py-2 pr-4 font-semibold\">角度</th>\n<th class=\"py-2 pr-4 font-semibold\">公式</th>\n<th class=\"py-2 font-semibold\">隣辺</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">はしご</td><td class=\"py-2 pr-4\">5 m</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">屋根の垂木</td><td class=\"py-2 pr-4\">4.5 m</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">ケーブル</td><td class=\"py-2 pr-4\">20 m</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">測量の視線</td><td class=\"py-2 pr-4\">150 m</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">支線</td><td class=\"py-2 pr-4\">18 m</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 m</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">歩道</td><td class=\"py-2 pr-4\">6 m</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 m</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"4つのパネル: はしご、屋根の垂木、ケーブル、歩道の余弦による水平投影\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">実践における余弦: 各パネルに斜辺、基準角、計算された水平（隣辺）距離を示しています。</figcaption>\n</figure>"
      },
      {
        "h2": "正弦や正接ではなく余弦を使うべき場合は？",
        "paragraphs": [],
        "customHtml": "<p>各三角比は異なる辺のペアを結びつけます。既知の値と未知の値に合ったものを選んでください。</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">比</th>\n<th class=\"py-2 pr-4 font-semibold\">公式</th>\n<th class=\"py-2 pr-4 font-semibold\">既知の値</th>\n<th class=\"py-2 font-semibold\">求める値</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">余弦</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">斜辺、角度</td><td class=\"py-2\">隣辺</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">正弦</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">斜辺、角度</td><td class=\"py-2\">対辺</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">正接</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">隣辺、角度</td><td class=\"py-2\">対辺</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>間違った比を使うとどうなるか:</strong> c = 10 m、A = 30° で隣辺が必要だとします。誤って正弦を使うと a = 10 × sin(30°) = 5 m となり、これは対辺であって隣辺ではありません。正しい余弦の計算では b ≈ 8.66 m となります。2つの答えが異なるのは、測定している辺が違うからです。選ぶ前に、どの辺が基準角に接しているかを必ず確認してください。</p>"
      },
      {
        "h2": "角度が隣辺をどう変化させるか",
        "paragraphs": [],
        "customHtml": "<p>斜辺を固定すると、角度 A が大きくなるにつれて隣辺は縮みます。0° では cos(A) = 1 で、隣辺は斜辺全体に等しくなります（三角形は線に潰れます）。90° では cos(A) = 0 で、隣辺は消滅します。これらの両極端の間では、関係は滑らかで予測可能です。</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">角度 A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">隣辺 b（c = 10 の場合）</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>このパターンに注目してください。角度を30°から60°に倍増しても辺は半分になりません。余弦は線形ではないからです。同じ角度で斜辺が異なる2つの三角形は相似であり、絶対的な長さは違っても辺の比は一致します。30°で斜辺が 5 m なら b ≈ 4.33 m となり、10 m の場合のちょうど半分です。</p>\n<p>注意: 0° と 90° は、退化していない直角三角形の有効な鋭角ではありません。これらは三角形が潰れる極限の場合を表します。</p>"
      },
      {
        "h2": "角度と測定値の正しい入力",
        "paragraphs": [
          "この計算機は角度を度数法で受け付けます。度は円周を360等分しますが、ラジアンは異なる尺度で、円周は約 6.283 です。30度を意味するつもりで30ラジアンを入力すると、cos(30 ラジアン) ≈ 0.154 であり 0.866 ではないため、大きく間違った答えが出ます。計算前に角度が度数法であることを必ず確認してください。",
          "斜辺には、答えで得たいのと同じ長さの単位を使ってください。c がメートルなら、b もメートルで出ます。c = 5（メートル）と入力しながらフィートで考えるといった単位の混在は、必ず間違った結果を招きます。先に単位を換算してから計算してください。",
          "最終的な答えだけを丸め、中間値は丸めないでください。42° の余弦は 0.743144825... であり、完全な値を使うと c = 7.5 m に対して b = 5.5736 m となります。余弦を先に 0.74 に丸めると 5.55 m になり、約 2.4 cm の誤差が生じます。結果は最も精度の低い入力より正確にはなりません。斜辺をセンチメートル単位で測ったなら、答えをミリメートル単位で報告しないでください。"
        ]
      },
      {
        "h2": "余弦計算でよくある間違いと回避方法",
        "paragraphs": [],
        "customHtml": "<p><strong>1. 隣辺と対辺の混同。</strong> 隣辺は角度 A に接し、対辺は接しません。<strong>対策:</strong> 角度 A から各辺をたどり、どちらが角を形成しているかを確認してください。</p>\n<p><strong>2. 脚を斜辺として使う。</strong> 脚の値を斜辺欄に入力すると、結果が大きくなります。<strong>対策:</strong> 斜辺は常に直角の向かいにあり、常に最も長い辺です。</p>\n<p><strong>3. 斜辺を掛け忘れる。</strong> 10 × 0.866 ≈ 8.66 ではなく cos(30°) ≈ 0.866 を答えにしてしまう。<strong>対策:</strong> 比だけでは長さになりません。c を掛けてください。</p>\n<p><strong>4. 掛ける代わりに割ってしまう。</strong> c × cos(A) の代わりに c / cos(A) を計算してしまう。割り算は、a から b を求める正接モードで使うもので、余弦ではありません。<strong>対策:</strong> 変形した公式を確認してください。</p>\n<p><strong>5. 基準角の間違い。</strong> 角度 A の代わりに角度 B を基準にすると、隣辺と対辺が入れ替わります。<strong>対策:</strong> 辺を特定する前に基準角にラベルを付けてください。</p>\n<p><strong>6. 度数法のはずがラジアンで入力する。</strong> cos(1 ラジアン) ≈ 0.540 は cos(1°) ≈ 0.99985 と異なります。<strong>対策:</strong> 度数モードを確認してください。</p>\n<p><strong>7. 単位の混在。</strong> c = 5（メートル）と入力してフィートを期待してしまう。<strong>対策:</strong> すべての入力を先に1つの単位に換算してください。</p>\n<p><strong>8. 中間値を早すぎる段階で丸める。</strong> 掛ける前に cos(42°) を 0.74 に丸めると誤差が増幅します。<strong>対策:</strong> 最後のステップまで完全な精度を保ってください。</p>\n<p><strong>9. 直角三角形でない三角形に余弦を適用する。</strong> 比の定義は90度の角を前提としています。<strong>対策:</strong> この計算機を使う前に直角が存在することを確認してください。</p>\n<p><strong>10. 斜辺より長い結果を受け入れる。</strong> b > c なら何かが間違っています。<strong>対策:</strong> 入力を再確認してください。鋭角では cos(A) が1を超えることはありません。</p>\n<p><strong>11. ゼロ、負、または無効な測定値を入力する。</strong> 辺の長さは正でなければなりません。<strong>対策:</strong> 正の長さだけを使ってください。</p>\n<p><strong>12. ゼロに近い隣辺をエラーとみなす。</strong> 89° では b ≈ 0.017c となります。これは正しい幾何学であり、バグではありません。<strong>対策:</strong> 急な角度では当然ながら隣辺が短くなることを理解してください。</p>"
      },
      {
        "h2": "余弦の結果が正しいか確認する方法",
        "paragraphs": [],
        "customHtml": "<p><strong>方法1: 辺の長さの関係を確認する。</strong> 鋭角の場合、隣辺は斜辺より短くなければなりません。答えが c を超える場合は、入力を再確認してください。</p>\n<p><strong>方法2: 余弦の比を再計算する。</strong> 答えを斜辺で割ります。b / c は cos(A) とほぼ等しくなるはずです。確認には丸めていない値を使ってください。c = 10 m、A = 30°、b ≈ 8.660254 の場合: 8.660254 / 10 = 0.8660254 ≈ cos(30°)。一致すれば正しいことが確認できます。</p>\n<p><strong>方法3: ピタゴラスの定理を適用する。</strong> 対辺 a = c × sin(A) も分かっているか計算できる場合は、a² + b² ≈ c² であることを確認します。完全な例: c = 10 m、A = 30°。このとき b ≈ 8.660254 m、a = 10 × sin(30°) = 5 m。確認: 5² + 8.660254² = 25 + 75 = 100 = 10²。三角形に矛盾がありません。</p>\n<p>最後の小数位のわずかな差は、表示値の丸めに由来します。検証の際は、丸められた出力ではなく完全な精度の数値を使ってください。</p>"
      },
      {
        "h2": "自信を持って隣辺を求める",
        "paragraphs": [
          "まず斜辺と基準角を特定します。角に接している辺を確認してください。それが隣辺 b です。角度を度数法で、単位を統一して b = c × cos(A) を適用します。答えが斜辺より短いことを確認し、可能であればピタゴラスの定理で相互確認します。これらの習慣を身につければ、余弦による辺の計算はどれも日常的な作業になります。上の計算機で数値を計算してみましょう。"
        ]
      }
    ],
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "角度から直角三角形の辺を求める計算機"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "正弦から直角三角形の辺を求める計算機"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "正接から直角三角形の辺を求める計算機"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "余弦から直角三角形の角度を求める計算機"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "余弦比計算機"
      }
    ],
    "faqs": [
      {
        "question": "余弦を使って隣辺を求めるにはどうすればよいですか。",
        "answer": "既知の鋭角の余弦に斜辺を掛けます: b = c × cos(A)。斜辺 c と角度 A を度数法で入力すると、計算機が解法の全手順とともに隣辺 b を返します。"
      },
      {
        "question": "余弦による辺計算機の公式は何ですか。",
        "answer": "公式は b = c × cos(A) で、b は隣辺、c は斜辺、A は鋭角です。これは余弦の比 cos(A) = b / c の両辺に c を掛けて変形したものです。"
      },
      {
        "question": "余弦の比ではどの辺を使いますか。",
        "answer": "余弦は隣辺と斜辺を使います: cos(A) = 隣辺 / 斜辺。角度 A に対して、隣辺は b（角度 A に接する辺）、斜辺は c（最も長い辺、直角の向かい側）です。"
      },
      {
        "question": "斜辺と角度から隣辺を計算できますか。",
        "answer": "はい。まさにこの計算機が行うことです。斜辺の長さと鋭角を度数法で入力すると、b = c × cos(A) を計算します。角度は0度から90度の間（両端を除く）でなければなりません。"
      },
      {
        "question": "隣辺が斜辺より短いのはなぜですか。",
        "answer": "鋭角の場合、cos(A) は0から1の間なので、斜辺に cos(A) を掛けると常に小さい値になります。幾何学的には、直角三角形のどの辺も、頂点間の最大距離である斜辺を超えることはありません。"
      },
      {
        "question": "正弦と余弦の違いは何ですか。",
        "answer": "どちらも斜辺を使いますが、正弦は対辺（a = c × sin(A)）を返し、余弦は隣辺（b = c × cos(A)）を返します。角の向かいの辺が必要なら正弦、角の隣の辺が必要なら余弦を選んでください。"
      },
      {
        "question": "角度は度数法とラジアンのどちらで入力すべきですか。",
        "answer": "角度は度数法で入力してください。この計算機は度数入力を前提としています。ラジアンで入力すると、cos(30 ラジアン) ≈ 0.154 は cos(30°) ≈ 0.866 と異なるため、間違った結果が出ます。計算前に必ず度数モードを確認してください。"
      },
      {
        "question": "余弦はメートル、フィート、インチの辺を計算できますか。",
        "answer": "はい。公式はあらゆる長さの単位で機能します。答えは斜辺の入力と同じ単位になります。メートルで入力すればメートルで、フィートで入力すればフィートで出力されます。すべての入力で単位を統一してください。"
      },
      {
        "question": "角度が大きくなると隣辺が短くなるのはなぜですか。",
        "answer": "余弦は角度が0°から90°に大きくなるにつれて1から0に減少します。b = c × cos(A) なので、余弦の乗数が小さくなると隣辺も短くなります。60°では隣辺は斜辺の半分、80°では約17%にすぎません。"
      },
      {
        "question": "隣辺と角度は分かるが斜辺が分からない場合はどうすればよいですか。",
        "answer": "公式を変形して c について解きます: c = b / cos(A)。この計算機は斜辺から隣辺を求めます。隣辺から斜辺を求めるには、隣辺を cos(A) で割ってください。"
      },
      {
        "question": "計算した辺を検証するにはどうすればよいですか。",
        "answer": "3つのことを確認してください。(1) 答えが斜辺より短いこと、(2) 答えを斜辺で割った値が cos(A) とほぼ等しいこと、(3) a = c × sin(A) も計算した場合は a² + b² が c² に等しいことです。"
      },
      {
        "question": "角度が90度に非常に近い場合はどうなりますか。",
        "answer": "cos(A) がゼロに近づくため、隣辺は非常に小さくなります。89°では b ≈ 0.017c となります。これは正しい幾何学であり、エラーではありません。三角形は縦に長く細くなり、斜辺の長さのほぼすべてが対辺に使われます。"
      }
    ]
  },
  "ko": {
    "calculator": {
      "fields": [
        {
          "key": "c",
          "label": "빗변 c",
          "min": 0
        },
        {
          "key": "A",
          "label": "각 A",
          "min": 0
        }
      ],
      "outputLabel": "인접변 b"
    },
    "diagram": {
      "caption": "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A, 알려진 빗변 c, 미지의 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b를 보여 주는 직각삼각형입니다.",
      "h2": "직각삼각형 도식: 코사인으로 변 b 구하기",
      "intro": "이 배치에서 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A는 오른쪽 아래에 있습니다. 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b는 밑변을 따라 각 A 바로 옆에 위치합니다. 빗변 c는 각 A에서 위쪽 꼭짓점까지 이어집니다. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 이 두 알려진 값을 이용해 b를 구합니다.",
      "notes": [
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A에 대해 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> a는 대변, 변 b는 인접변, 변 c는 빗변입니다.",
        "인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>은 항상 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A와 직각에 닿는 변입니다.",
        "결과 b는 항상 c보다 짧습니다."
      ],
      "sides": {
        "a": {
          "description": "대변 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> a는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A의 바로 맞은편에 있습니다. 이 계산에는 필요하지 않습니다.",
          "label": "a",
          "status": "unknown"
        },
        "b": {
          "description": "인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A 옆의 밑변을 따라 놓입니다. 이 값이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>가 반환하는 결과입니다.",
          "label": "b = 구할 값",
          "status": "unknown"
        },
        "c": {
          "description": "빗변 c는 가장 긴 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>으로, 직각의 맞은편에 있습니다. 이 값을 입력으로 제공합니다.",
          "label": "c = 알려진 값",
          "status": "known"
        }
      }
    },
    "example": {
      "h2": "단계별 예제: 인접변 b 구하기",
      "intro": "주어진 값: A = 36.87도, c = 5. 코사인 공식을 이용해 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b를 구합니다.",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "코사인으로 인접변 구하는 방법",
        "paragraphs": [
          "5 m 사다리가 벽에 기대어 있고 지면과 65도 각도를 이룹니다. 사다리 길이와 각도는 알지만, 벽에서 사다리 밑부분까지의 거리는 얼마나 될까요? 그 수평 거리는 직각삼각형의 인접 다리로, 코사인으로 바로 구할 수 있습니다. 코사인 변 계산기는 빗변과 한 예각을 입력받아 인접변을 반환하며, 삼각함수 표를 직접 볼 필요가 없습니다.",
          "이 페이지에서는 코사인 공식을 기본 원리부터 설명합니다. 인접변의 의미, 코사인이 빗변을 사용하는 이유, 모든 도식 방향에서 올바른 변을 식별하는 방법, 그리고 결과를 실제 측정에 적용하는 방법을 다룹니다. 공식은 b = c × cos(A)이며, 여기서 b는 각 A 옆의 변, c는 빗변, A는 도 단위로 측정한 각입니다. 두 변을 알아야 하는 기본 피타고라스 계산기와 달리, 이 도구는 한 변과 한 각만 알면 됩니다."
        ]
      },
      {
        "customHtml": "<h3>직각삼각형이란 무엇일까요?</h3>\n<p>직각삼각형은 정확히 90도인 각을 하나 포함합니다. 나머지 두 각은 예각(각각 90도 미만)이며 여각 관계로, 합이 90도가 됩니다. 각 A가 30도라면 다른 예각 B는 반드시 60도입니다. 코사인 계산에는 이러한 직각 구조가 필요합니다. 비율의 정의가 두 다리 사이의 수직 관계에 의존하기 때문입니다.</p>\n<h3>빗변이란 무엇일까요?</h3>\n<p>빗변은 직각의 맞은편에 위치하며 항상 가장 긴 변입니다. 관례상 c로 표시합니다. 회전된 도식에서 찾으려면 직각 표시와 닿지 않는 변을 찾으세요. 이 계산기에서는 빗변을 알려진 값으로 입력합니다.</p>\n<h3>인접변이란 무엇일까요?</h3>\n<p>인접변은 기준각 A와 직각 모두에 닿는 다리입니다. 각 A에 대해 변 b는 인접변이고 변 a는 대변입니다. 기준을 각 B로 바꾸면 표시가 뒤바뀝니다. 변 a가 인접변이 되고 변 b가 대변이 됩니다. 빗변은 절대 변하지 않습니다. 항상 90도 각의 맞은편인 c입니다.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"각 A가 왼쪽 아래에 있고, 인접 다리 b, 대변 a, 빗변 c가 표시된 직각삼각형\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">코사인 해부도: 왼쪽 아래의 각 A, 밑변을 따른 인접 다리 b, 수직인 대변 a, 직각 맞은편의 빗변 c.</figcaption>\n</figure>",
        "h2": "인접변과 빗변 이해하기",
        "paragraphs": []
      },
      {
        "customHtml": "<p>코사인은 간단한 비율을 나타냅니다. 주어진 예각에 대해 인접 다리를 빗변으로 나누면 항상 같은 수가 나옵니다. 그 수가 cos(A)입니다. 각 A가 60도라면 cos(60°) = 0.5이며, 이는 삼각형의 크기와 상관없이 인접변이 빗변의 정확히 절반이라는 뜻입니다.</p>\n<p>이 비율에는 단위가 없습니다. 단위가 서로 상쇄되기 때문입니다. 미터를 미터로 나누면 순수한 수가 남습니다. 인접변을 구하려면 비율을 변형합니다. cos(A) = b / c에서 시작합니다. 양변에 c를 곱합니다. 분모의 c가 상쇄되어 <strong>b = c × cos(A)</strong>가 남습니다. 이 공식은 알려진 빗변에 알려진 각의 코사인을 곱합니다.</p>\n<p>유효한 예각(0도에서 90도 사이)의 경우 cos(A)는 0과 1 사이입니다. 따라서 인접 다리는 빗변보다 짧음이 보장되며, 이는 기하학과 일치합니다. 어떤 다리도 빗변을 초과할 수 없습니다.</p>\n<h3>SOH-CAH-TOA 이해하기</h3>\n<p>SOH-CAH-TOA는 세 가지 기본 비율을 외우는 기억법입니다. SOH: 사인 = 대변 / 빗변. CAH: 코사인 = 인접변 / 빗변. TOA: 탄젠트 = 대변 / 인접변. 이 페이지에서는 CAH에 집중합니다. 이 기억법은 올바른 비율을 고르는 데 도움이 되지만, 기준각에 대한 인접변을 정확히 식별해야 합니다.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"인접 다리 b와 빗변 c를 강조하고 cos(A)가 b를 c로 나눈 값과 같음을 보여 주는 직각삼각형\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">코사인 비율: 강조된 인접 다리 b를 강조된 빗변 c로 나누면 cos(A)를 구할 수 있습니다.</figcaption>\n</figure>",
        "h2": "직각삼각형에서의 코사인이란?",
        "paragraphs": []
      },
      {
        "h2": "코사인으로 직각삼각형의 변 구하기 계산기 사용법",
        "listItems": [
          "삼각형에서 직각을 찾습니다. 한 모서리가 90도인지 확인합니다.",
          "알고 있는 예각 A를 확인합니다. 직각이 아닌지 확인합니다.",
          "빗변 c를 찾습니다. 직각 맞은편의 변으로, 항상 가장 긴 변입니다.",
          "인접 다리 b를 확인합니다. 각 A와 직각 모두에 닿습니다.",
          "빗변 길이 c를 첫 번째 입력란에 입력합니다.",
          "각 A를 도 단위로 두 번째 입력란에 입력합니다.",
          "빗변 입력과 일치하는 측정 단위를 선택합니다.",
          "계산하기를 누릅니다. 결과에 풀이 단계와 함께 인접변 b가 표시됩니다.",
          "단계를 검토하여 공식과 대입이 문제와 일치하는지 확인합니다.",
          "b가 c보다 짧은지 확인합니다. 그렇지 않다면 빗변으로 입력한 변을 다시 확인하세요."
        ],
        "listTitle": "단계:",
        "paragraphs": [
          "정확한 결과를 얻으려면 다음 단계를 따르세요."
        ]
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>예제 1: 기본 직각삼각형</h3>\n<p><strong>주어진 값:</strong> c = 10 m, A = 30°. <strong>구할 값:</strong> b.</p>\n<p><strong>공식:</strong> b = c × cos(A)</p>\n<p><strong>대입:</strong> b = 10 × cos(30°)</p>\n<p><strong>코사인 값:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>계산:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>답:</strong> <strong>b ≈ 8.66 m</strong></p>\n<p>예상대로 결과는 10 m 빗변보다 짧습니다. 30도에서는 인접변이 빗변 길이의 약 87%입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 2: 특수각</h3>\n<p><strong>주어진 값:</strong> c = 12 ft, A = 60°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>답:</strong> <strong>b = 6 ft</strong></p>\n<p>60도에서는 cos(A) = 0.5가 정확히 성립하므로 인접 다리는 빗변의 정확히 절반입니다. 30°, 45°, 60° 같은 특수각은 외워 둘 만한 깔끔한 코사인 값을 제공합니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 3: 소수 측정값</h3>\n<p><strong>주어진 값:</strong> c = 7.5 m, A = 42°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>답:</strong> <strong>b ≈ 5.57 m</strong></p>\n<p>계산 과정에서 코사인 값은 완전한 정밀도로 유지하고 최종 답에서만 반올림하세요. cos(42°)를 0.74로 미리 반올림하면 5.55 m가 되어 작지만 피할 수 있는 오차가 생깁니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 4: 90도에 가까운 각</h3>\n<p><strong>주어진 값:</strong> c = 15 cm, A = 80°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>답:</strong> <strong>b ≈ 2.60 cm</strong></p>\n<p>각이 90도에 가까워질수록 인접 다리는 0을 향해 줄어듭니다. 80°에서는 인접변이 빗변의 약 17%에 불과합니다. 이는 계산 오류가 아니라 정상적인 기하학입니다.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"단계별 코사인 계산: 10 m 빗변, 30도 각, 인접변은 8.66 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">풀이 과정: 각 대입 단계를 보여 주는 b = 10 × cos(30°) ≈ 8.66 m.</figcaption>\n</figure>",
        "h2": "코사인을 이용해 인접변 계산하는 방법",
        "paragraphs": []
      },
      {
        "customHtml": "<article class=\"mb-8\">\n<h3>예제 5: 사다리의 수평 거리 구하기</h3>\n<p>5 m 사다리가 벽에 기대어 있고 평평한 지면과 65도 각도를 이룹니다. 벽에서 사다리 밑부분까지의 수평 거리를 구해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 5 m (사다리), A = 65°. <strong>구할 값:</strong> b (지면 거리).</p>\n<p><strong>인접변인 이유:</strong> 지면 거리는 65° 각과 벽이 지면과 만나는 직각 모두에 닿습니다.</p>\n<p><strong>계산:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>답:</strong> <strong>b ≈ 2.11 m</strong></p>\n<p>밑부분은 벽에서 약 2.11 m 떨어져 있습니다. 이는 기하학적 계산일 뿐이며 사다리 설치가 안전한지를 판단하지는 않습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 6: 지붕의 수평 길이 구하기</h3>\n<p>지붕 서까래가 4.5 m 길이이고 수평과 30도 각도를 이룹니다. 수평 길이를 구해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 4.5 m (서까래), A = 30°. <strong>구할 값:</strong> b (수평 길이).</p>\n<p><strong>계산:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>답:</strong> <strong>b ≈ 3.90 m</strong></p>\n<p>기울어진 서까래(4.5 m)는 수평으로 3.90 m를 차지합니다. 이 차이는 자재 주문 시 중요합니다. 3.90 m의 수평 구간에 4.5 m의 목재가 필요합니다. 지붕 처마 돌출, 이음, 시공 여유분은 포함되지 않습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 7: 경사로의 수평 길이 계산하기</h3>\n<p>단순화된 경사로는 기울어진 길이가 8 m이고 수평에 대해 6도 각도입니다. 수평 길이를 구해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 8 m (경사), A = 6°. <strong>구할 값:</strong> b (수평 길이).</p>\n<p><strong>계산:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>답:</strong> <strong>b ≈ 7.96 m</strong></p>\n<p>완만한 6° 각도에서는 수평 길이(7.96 m)가 경사 길이(8 m)와 거의 같습니다. 경사는 항상 수평 투영보다 약간 깁니다. 이는 접근성이나 건축 기준 적합성을 검증하지 않습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 8: 케이블의 수평 도달 거리 구하기</h3>\n<p>케이블이 20 m 길이이고 수평과 55도 각도를 이룹니다. 수평 성분을 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 20 m, A = 55°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>답:</strong> <strong>b ≈ 11.47 m</strong></p>\n<p>각이 가파를수록 수평 도달 거리는 짧아집니다. 55°에서는 케이블이 수평으로 11.47 m를 차지하면서 높이 솟아오릅니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 9: 측량에서 수평 거리 추정하기</h3>\n<p>단순화된 시선 거리가 150 m이고 수평과 12도 각도를 이룹니다. 수평 성분을 구해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 150 m, A = 12°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>답:</strong> <strong>b ≈ 146.72 m</strong></p>\n<p>수평 거리는 150 m 시선보다 약간 짧은 146.72 m입니다. 실제 측량에서는 곡률, 지형, 측기 높이에 대한 보정이 필요합니다. 이 예제는 기본 기하학만 다룹니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 10: 전선의 수평 성분 구하기</h3>\n<p>전선이 13 m 길이이고 평평한 지면과 22도 각도를 이룹니다. 수평 투영을 구해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 13 m, A = 22°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>답:</strong> <strong>b ≈ 12.05 m</strong></p>\n<p>수평 성분(12.05 m)은 전체 전선 길이(13 m)보다 짧습니다. 전선 길이의 일부가 수직 상승에 사용되기 때문입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 11: 버팀목의 수평 오프셋 계산하기</h3>\n<p>대각선 버팀목이 2.4 m 길이이고 수평과 40도 각도를 이룹니다. 수평 투영을 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 2.4 m, A = 40°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>답:</strong> <strong>b ≈ 1.84 m</strong></p>\n<p>이 측정값은 도면을 해석하는 데 도움이 됩니다. 버팀목이 수평으로 1.84 m를 차지합니다. 이 계산은 기하학적 계산이며 구조 강도나 설계 적합성을 검증하지 않습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 12: 가이 와이어의 지상 거리 구하기</h3>\n<p>가이 와이어가 18 m 길이이고 평평한 지면과 35도 각도를 이룹니다. 고정점과 와이어 부착점 바로 아래 지점 사이의 수평 거리를 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 18 m, A = 35°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>답:</strong> <strong>b ≈ 14.74 m</strong></p>\n<p>와이어 자체가 빗변입니다. 지면 고정점에서 부착점까지 뻗어 있으며, 수직 구조물과 평평한 지면이 이루는 직각의 맞은편에 있기 때문입니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 13: 경사면에서의 수평 이동 거리 추정하기</h3>\n<p>단순화된 경사 경로가 250 m이고 수평과 18도 각도를 이룹니다. 수평 성분을 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 250 m, A = 18°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>답:</strong> <strong>b ≈ 237.76 m</strong></p>\n<p>경사를 따라 250 m를 걸으면 수평 거리는 237.76 m가 됩니다. 경사 거리는 항상 수평 변위보다 깁니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 14: 보도 경사로의 수평 길이 계산하기</h3>\n<p>기울어진 보도가 6 m 길이이고 수평과 8도 각도를 이룹니다. 수평 길이를 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 6 m, A = 8°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>답:</strong> <strong>b ≈ 5.94 m</strong></p>\n<p>8°에서는 보도가 완만하여 수평 길이(5.94 m)가 경사 길이(6 m)에 가깝습니다. 이 결과만으로는 접근성 기준 적합성을 증명할 수 없습니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 15: 기계식 링크의 수평 투영 구하기</h3>\n<p>기계식 링크가 850 mm 길이이고 수평에 대해 25도 각도로 배치되어 있습니다. 수평 성분을 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 850 mm, A = 25°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>답:</strong> <strong>b ≈ 770.36 mm</strong></p>\n<p>코사인 관계는 밀리미터에서도 동일하게 적용됩니다. 답의 단위는 항상 빗변 입력의 단위와 일치합니다.</p>\n</article>\n<article class=\"mb-8\">\n<h3>예제 16: 기울어진 지지 부재의 수평 성분 계산하기</h3>\n<p>지지 부재가 3.2 ft 길이이고 수평과 48도 각도를 이룹니다. 수평 투영을 계산해 보세요.</p>\n<p><strong>주어진 값:</strong> c = 3.2 ft, A = 48°. <strong>구할 값:</strong> b.</p>\n<p><strong>계산:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>답:</strong> <strong>b ≈ 2.14 ft</strong></p>\n<p>치수 도면을 읽을 때 이 값은 지지 부재가 수평으로 2.14 ft를 차지함을 알려 줍니다. 이 계산은 기하학적 계산이며 구조 안전 검사가 아닙니다.</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">상황</th>\n<th class=\"py-2 pr-4 font-semibold\">빗변</th>\n<th class=\"py-2 pr-4 font-semibold\">각</th>\n<th class=\"py-2 pr-4 font-semibold\">공식</th>\n<th class=\"py-2 font-semibold\">인접변</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">사다리</td><td class=\"py-2 pr-4\">5 m</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">지붕 서까래</td><td class=\"py-2 pr-4\">4.5 m</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">케이블</td><td class=\"py-2 pr-4\">20 m</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">측량 시선</td><td class=\"py-2 pr-4\">150 m</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">가이 와이어</td><td class=\"py-2 pr-4\">18 m</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 m</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">보도</td><td class=\"py-2 pr-4\">6 m</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 m</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"네 개의 패널: 코사인으로 계산한 수평 투영을 보여 주는 사다리, 지붕 서까래, 케이블, 보도\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">실생활 속 코사인: 각 패널은 빗변, 기준각, 계산된 수평(인접) 거리를 보여 줍니다.</figcaption>\n</figure>",
        "h2": "코사인 계산의 실생활 예제",
        "paragraphs": [
          "다음 예제들은 코사인 공식이 실제 측정 문제를 어떻게 푸는지 보여 줍니다. 각 경우에 알려진 기울어진 대각선 길이가 빗변이고, 구하려는 수평 거리가 인접 다리입니다."
        ]
      },
      {
        "customHtml": "<p>각 삼각함수 비율은 서로 다른 변의 쌍을 연결합니다. 알려진 값과 구하려는 값에 맞는 비율을 선택하세요.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">비율</th>\n<th class=\"py-2 pr-4 font-semibold\">공식</th>\n<th class=\"py-2 pr-4 font-semibold\">알고 있는 값</th>\n<th class=\"py-2 font-semibold\">구하는 값</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">코사인</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">빗변, 각</td><td class=\"py-2\">인접 다리</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">사인</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">빗변, 각</td><td class=\"py-2\">대변 다리</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">탄젠트</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">인접 다리, 각</td><td class=\"py-2\">대변 다리</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>잘못된 비율을 쓰면 생기는 문제:</strong> c = 10 m, A = 30°이고 인접변이 필요하다고 가정해 보세요. 실수로 사인을 사용하면 a = 10 × sin(30°) = 5 m가 되는데, 이는 인접변이 아니라 대변입니다. 올바른 코사인 계산을 하면 b ≈ 8.66 m가 됩니다. 두 답은 측정하는 변이 다르기 때문에 다릅니다. 선택하기 전에 어느 변이 기준각에 닿는지 항상 확인하세요.</p>",
        "h2": "사인이나 탄젠트 대신 코사인을 사용해야 할 때는?",
        "paragraphs": []
      },
      {
        "customHtml": "<p>빗변이 고정된 상태에서 각 A가 커질수록 인접 다리는 줄어듭니다. 0°에서는 cos(A) = 1이고 인접 다리는 빗변 전체와 같습니다(삼각형이 직선으로 납작해집니다). 90°에서는 cos(A) = 0이고 인접 다리는 사라집니다. 이 양 극단 사이에서 관계는 부드럽고 예측 가능합니다.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">각 A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">인접변 b (c = 10)</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>패턴을 주목하세요. 각을 30°에서 60°로 두 배로 늘려도 변이 절반이 되지 않습니다. 코사인은 선형이 아니기 때문입니다. 각이 같고 빗변이 다른 두 삼각형은 닮음이므로 절대 길이는 달라도 변의 비율은 일치합니다. 30°에서 빗변이 5 m이면 b ≈ 4.33 m가 되어 10 m 경우의 정확히 절반입니다.</p>\n<p>참고: 0°와 90°는 퇴화되지 않은 직각삼각형의 유효한 예각이 아닙니다. 삼각형이 붕괴되는 극한 경우를 나타냅니다.</p>",
        "h2": "각이 인접변을 어떻게 바꾸는가",
        "paragraphs": []
      },
      {
        "h2": "각과 측정값 정확히 입력하기",
        "paragraphs": [
          "이 계산기는 도 단위의 각을 기대합니다. 도는 한 바퀴를 360등분한 것이고, 라디안은 한 바퀴가 약 6.283인 다른 단위계입니다. 30도를 의미하면서 30라디안을 입력하면 cos(30 라디안) ≈ 0.154로 0.866이 아니므로 크게 틀린 답이 나옵니다. 계산 전에 각이 도 단위인지 항상 확인하세요.",
          "답에 원하는 단위와 같은 길이 단위를 빗변에 사용하세요. c가 미터이면 b도 미터로 나옵니다. c = 5(미터)를 입력하면서 피트를 생각하는 식으로 단위를 섞으면 반드시 틀린 결과가 나옵니다. 먼저 변환한 뒤 계산하세요.",
          "중간 값이 아니라 최종 답에서만 반올림하세요. 42°의 코사인은 0.743144825...이며, 완전한 값을 사용하면 c = 7.5 m일 때 b = 5.5736 m가 됩니다. 코사인을 먼저 0.74로 반올림하면 5.55 m가 되어 약 2.4 cm의 오차가 생깁니다. 결과는 가장 정밀도가 낮은 입력보다 정밀할 수 없습니다. 빗변을 센티미터 단위까지 쟀다면 답을 밀리미터 단위로 보고하지 마세요."
        ]
      },
      {
        "customHtml": "<p><strong>1. 인접변과 대변을 혼동하기.</strong> 인접변은 각 A에 닿고, 대변은 닿지 않습니다. 해결: 각 A에서 각 다리를 따라가며 어느 다리가 각을 이루는지 확인하세요.</p>\n<p><strong>2. 다리를 빗변으로 사용하기.</strong> 빗변 입력란에 다리 값을 입력하면 결과가 부풀려집니다. 해결: 빗변은 항상 직각의 맞은편에 있으며 항상 가장 긴 변입니다.</p>\n<p><strong>3. 빗변을 곱하는 것을 잊기.</strong> 10 × 0.866 ≈ 8.66 대신 cos(30°) ≈ 0.866으로 답하기. 해결: 비율만으로는 길이가 아닙니다. c를 곱하세요.</p>\n<p><strong>4. 곱셈 대신 나눗셈하기.</strong> c × cos(A) 대신 c / cos(A)로 계산하기. 나눗셈은 a로부터 b를 구하는 탄젠트 모드에 적용되며 코사인에는 적용되지 않습니다. 해결: 변형된 공식을 확인하세요.</p>\n<p><strong>5. 잘못된 기준각 사용하기.</strong> 각 A 대신 각 B를 기준으로 측정하면 인접변과 대변이 뒤바뀝니다. 해결: 변을 식별하기 전에 기준각을 표시하세요.</p>\n<p><strong>6. 도 단위가 필요한 곳에 라디안 입력하기.</strong> cos(1 라디안) ≈ 0.540은 cos(1°) ≈ 0.99985와 다릅니다. 해결: 도 모드인지 확인하세요.</p>\n<p><strong>7. 단위 섞기.</strong> c = 5(미터)를 입력하고 피트를 기대하기. 해결: 모든 입력을 먼저 하나의 단위로 변환하세요.</p>\n<p><strong>8. 중간 값을 너무 일찍 반올림하기.</strong> 곱하기 전에 cos(42°)를 0.74로 반올림하면 오차가 누적됩니다. 해결: 마지막 단계까지 완전한 정밀도를 유지하세요.</p>\n<p><strong>9. 직각삼각형이 아닌 삼각형에 코사인 적용하기.</strong> 비율 정의는 90도 각을 전제로 합니다. 해결: 이 계산기를 사용하기 전에 직각이 존재하는지 확인하세요.</p>\n<p><strong>10. 빗변보다 긴 결과를 받아들이기.</strong> b > c라면 무언가 잘못된 것입니다. 해결: 입력을 다시 확인하세요. 예각에 대해 cos(A)는 절대 1을 초과하지 않습니다.</p>\n<p><strong>11. 0, 음수, 유효하지 않은 측정값 입력하기.</strong> 변의 길이는 양수여야 합니다. 해결: 양의 길이만 사용하세요.</p>\n<p><strong>12. 0에 가까운 인접변을 오류로 여기기.</strong> 89°에서 b ≈ 0.017c인 것은 올바른 기하학이지 버그가 아닙니다. 해결: 가파른 각에서는 인접변이 자연스럽게 짧아진다는 것을 알아두세요.</p>",
        "h2": "흔한 코사인 계산 실수와 피하는 방법",
        "paragraphs": []
      },
      {
        "customHtml": "<p><strong>방법 1: 변의 상대 길이 확인하기.</strong> 예각에 대해 인접 다리는 반드시 빗변보다 짧아야 합니다. 답이 c를 초과하면 입력을 다시 확인하세요.</p>\n<p><strong>방법 2: 코사인 비율 다시 계산하기.</strong> 답을 빗변으로 나누세요. b / c가 대략 cos(A)와 같아야 합니다. 확인에는 반올림하지 않은 값을 사용하세요. c = 10 m, A = 30°, b ≈ 8.660254인 경우 8.660254 / 10 = 0.8660254 ≈ cos(30°)입니다. 일치하면 정확합니다.</p>\n<p><strong>방법 3: 피타고라스 정리 적용하기.</strong> 대변 a = c × sin(A)도 알거나 계산했다면 a² + b² ≈ c²를 확인하세요. 전체 예제: c = 10 m, A = 30°. 이때 b ≈ 8.660254 m이고 a = 10 × sin(30°) = 5 m입니다. 확인: 5² + 8.660254² = 25 + 75 = 100 = 10². 삼각형이 일관됩니다.</p>\n<p>마지막 소수점 자리에서 생기는 작은 차이는 표시된 값을 반올림했기 때문입니다. 검증할 때는 반올림된 출력이 아니라 완전한 정밀도의 숫자를 사용하세요.</p>",
        "h2": "코사인 결과가 맞는지 확인하는 방법",
        "paragraphs": []
      },
      {
        "h2": "인접변, 자신 있게 구하기",
        "paragraphs": [
          "먼저 빗변과 기준각을 확인하세요. 어느 다리가 각에 닿는지 확인합니다. 그것이 인접변 b입니다. 각을 도 단위로 하고 단위를 일관되게 하여 b = c × cos(A)를 적용하세요. 답이 빗변보다 짧은지 확인하고, 가능하면 피타고라스 정리로 교차 검증하세요. 이런 습관을 들이면 모든 코사인 변 계산이 일상이 됩니다. 위의 계산기를 사용해 숫자를 계산해 보세요."
        ]
      }
    ],
    "faqs": [
      {
        "answer": "알려진 예각의 코사인에 빗변을 곱합니다. b = c × cos(A). 빗변 c와 각 A를 도 단위로 입력하면 계산기가 풀이 단계와 함께 인접변 b를 반환합니다.",
        "question": "코사인으로 인접변을 어떻게 구하나요?"
      },
      {
        "answer": "공식은 b = c × cos(A)이며, 여기서 b는 인접변, c는 빗변, A는 예각입니다. 코사인 비율 cos(A) = b / c의 양변에 c를 곱하여 변형한 것입니다.",
        "question": "코사인 변 계산기의 공식은 무엇인가요?"
      },
      {
        "answer": "코사인은 인접변과 빗변을 사용합니다. cos(A) = 인접변 / 빗변. 각 A에 대해 인접변은 b(각 A에 닿는 다리)이고 빗변은 c(가장 긴 변, 직각의 맞은편)입니다.",
        "question": "코사인 비율에는 어떤 변이 사용되나요?"
      },
      {
        "answer": "네. 이 계산기가 정확히 그것을 합니다. 빗변 길이와 예각을 도 단위로 입력하면 b = c × cos(A)를 계산합니다. 각은 0도에서 90도 사이(양 끝 제외)여야 합니다.",
        "question": "빗변과 각으로 인접변을 계산할 수 있나요?"
      },
      {
        "answer": "예각에 대해 cos(A)는 0과 1 사이이므로, 빗변에 cos(A)를 곱하면 항상 더 작은 값이 됩니다. 기하학적으로 직각삼각형의 어떤 다리도 꼭짓점 사이의 최대 거리인 빗변을 초과할 수 없습니다.",
        "question": "인접변이 빗변보다 짧은 이유는 무엇인가요?"
      },
      {
        "answer": "둘 다 빗변을 사용하지만, 사인은 대변을 반환하고(a = c × sin(A)), 코사인은 인접변을 반환합니다(b = c × cos(A)). 각의 맞은편 변이 필요하면 사인, 각 옆의 변이 필요하면 코사인을 선택하세요.",
        "question": "사인과 코사인의 차이는 무엇인가요?"
      },
      {
        "answer": "각을 도 단위로 입력하세요. 이 계산기는 도 입력을 기대합니다. 라디안을 입력하면 cos(30 라디안) ≈ 0.154가 cos(30°) ≈ 0.866과 다르므로 잘못된 결과가 나옵니다. 계산 전에 항상 도 모드인지 확인하세요.",
        "question": "각을 도 단위로 입력해야 하나요, 라디안 단위로 입력해야 하나요?"
      },
      {
        "answer": "네. 이 공식은 모든 길이 단위에서 작동합니다. 답은 빗변 입력과 같은 단위를 사용합니다. 미터로 입력하면 미터로 나오고, 피트로 입력하면 피트로 나옵니다. 모든 입력에 일관된 단위를 사용하세요.",
        "question": "코사인으로 미터, 피트, 인치 단위의 변을 계산할 수 있나요?"
      },
      {
        "answer": "코사인은 각이 0°에서 90°로 커질 때 1에서 0으로 감소합니다. b = c × cos(A)이므로 코사인 승수가 작아지면 인접변도 짧아집니다. 60°에서는 인접변이 빗변의 절반이고, 80°에서는 약 17%에 불과합니다.",
        "question": "각이 커질수록 인접변이 줄어드는 이유는 무엇인가요?"
      },
      {
        "answer": "공식을 변형하여 c를 구하세요. c = b / cos(A). 이 계산기는 빗변으로부터 인접변을 구합니다. 인접변으로부터 빗변을 구하려면 인접변을 cos(A)로 나누세요.",
        "question": "인접변과 각은 알지만 빗변을 모르면 어떻게 하나요?"
      },
      {
        "answer": "세 가지를 확인하세요. (1) 답이 빗변보다 짧은지, (2) 답을 빗변으로 나눈 값이 대략 cos(A)와 같은지, (3) a = c × sin(A)도 계산했다면 a² + b²가 c²와 같은지 확인합니다.",
        "question": "계산한 변을 어떻게 검증할 수 있나요?"
      },
      {
        "answer": "cos(A)가 0에 가까워지므로 인접변이 매우 작아집니다. 89°에서는 b ≈ 0.017c입니다. 이는 오류가 아니라 올바른 기하학입니다. 삼각형이 높고 좁아지며 빗변 길이의 거의 전부가 대변 쪽으로 갑니다.",
        "question": "각이 90도에 매우 가까우면 어떻게 되나요?"
      }
    ],
    "formulaSection": {
      "formulas": [
        "b = c \\times \\cos(A)"
      ],
      "h2": "코사인으로 변 구하기 공식",
      "paragraphs": [
        "직각삼각형에서 한 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>의 코사인은 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>을 빗변으로 나눈 값과 같습니다. 비율로 쓰면 cos(A) = b / c 입니다. 양변에 c를 곱하면 아래의 직접 공식이 됩니다.",
        "여기서 c는 빗변(가장 긴 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>, 90도 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a>의 맞은편), A는 예각, b는 구하려는 인접변입니다. <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">코사인 함수</a>는 각을 인접변과 같은 빗변의 비율로 변환합니다."
      ]
    },
    "formulaSlug": "b-c-cos",
    "h1": "코사인으로 직각삼각형의 변 구하기 계산기",
    "howTo": {
      "h2": "이 계산기 사용 방법",
      "steps": [
        "직각삼각형에서 빗변 c를 찾습니다. 직각 맞은편의 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a>으로, 항상 가장 긴 변입니다.",
        "알고 있는 예각 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A를 확인합니다. 값이 도(degree) 단위인지 확인하세요.",
        "빗변 c를 첫 번째 입력란에 입력합니다.",
        "<a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A를 두 번째 입력란에 입력합니다.",
        "계산하기를 눌러 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b와 단계별 풀이를 확인합니다."
      ]
    },
    "intro": "이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>를 사용하여 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A와 빗변 c로부터 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b를 구해 보세요.",
    "metaDescription": "각 A와 빗변 c로부터 인접변 b를 구하는 코사인 기반 직각삼각형 변 계산기를 사용해 보세요. 공식, 풀이 단계, 예제가 함께 제공됩니다.",
    "metaTitle": "코사인으로 직각삼각형의 변 구하기 계산기 | b = c × cos(A) 구하기",
    "quickSummary": {
      "cards": [
        {
          "label": "알고 있는 값",
          "value": "각 A와 빗변 c"
        },
        {
          "label": "구하는 값",
          "value": "인접변 b"
        },
        {
          "label": "주요 공식",
          "value": "b = c × cos(A)"
        },
        {
          "label": "활용 분야",
          "value": "수평 거리, 밑변 거리, 지상 투영 구하기"
        }
      ],
      "h2": "이 도구가 구하는 것",
      "intro": "이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A와 빗변 c를 입력받아 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b를 반환합니다. 코사인은 이 세 값을 연결하는 비율이므로 공식을 변형할 필요가 없습니다."
    },
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "각으로 직각삼각형의 변 구하기 계산기"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "사인으로 직각삼각형의 변 구하기 계산기"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "탄젠트로 직각삼각형의 변 구하기 계산기"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "코사인으로 직각삼각형의 각 구하기 계산기"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "코사인 비율 계산기"
      }
    ],
    "slug": "right-triangle-side-from-cosine-calculator",
    "toolPurpose": "이 <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">계산기</a>는 <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">각</a> A와 빗변 c가 이미 주어졌을 때 인접 <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">변</a> b를 구합니다. 코사인 계산을 처리하고 풀이 과정을 모두 보여 주므로 각 단계를 따라가거나 검증할 수 있습니다.",
    "url": "/right-triangle-side-from-cosine-calculator/"
  },
  "ms": {
    "slug": "right-triangle-side-from-cosine-calculator",
    "url": "/right-triangle-side-from-cosine-calculator/",
    "h1": "Kalkulator Sisi Segi Tiga Tepat Dari Kosinus",
    "metaTitle": "Kalkulator Sisi Segi Tiga Tepat Dari Kosinus | Cari b = c × cos(A)",
    "metaDescription": "Gunakan kalkulator sisi segi tiga tepat dari kosinus ini untuk mencari sisi bersebelahan b daripada sudut A dan hipotenus c dengan formula, langkah, dan contoh.",
    "formulaSlug": "b-c-cos",
    "toolPurpose": "Ini <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> menyelesaikan untuk <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b apabila anda sudah mempunyai <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dan hipotenus c. Ia mengendalikan pengiraan kosinus dan menunjukkan laluan penyelesaian penuh supaya anda boleh mengikut atau mengesahkan setiap langkah.",
    "intro": "Gunakan <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> ini untuk mencari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b daripada <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dan hipotenus c.",
    "quickSummary": {
      "h2": "Apa Yang Diselesaikan Alat Ini",
      "intro": "Ini <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> mengambil <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dan hipotenus c sebagai input dan mengembalikan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b. Kosinus ialah nisbah yang menghubungkan ketiga-tiga nilai ini, jadi formula tidak perlu disusun semula.",
      "cards": [
        {
          "label": "Nilai yang diketahui",
          "value": "Sudut A dan hipotenus c"
        },
        {
          "label": "Mencari",
          "value": "Sisi bersebelahan b"
        },
        {
          "label": "Formula utama",
          "value": "b = c × cos(A)"
        },
        {
          "label": "Paling sesuai untuk",
          "value": "Mencari jarak mendatar, jarak tapak, atau unjuran tanah"
        }
      ]
    },
    "diagram": {
      "h2": "Rajah Segi Tiga Tepat: Sisi b daripada Kosinus",
      "intro": "Dalam susun atur ini, <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A berada di kanan bawah. <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> bersebelahan b terletak sepanjang tapak, betul-betul di sebelah sudut A. Hipotenus c menjangkau dari sudut A hingga ke bucu atas. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> menggunakan kedua-dua nilai yang diketahui ini untuk mencari b.",
      "caption": "Segi tiga tepat menunjukkan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A, hipotenus c yang diketahui, dan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b yang tidak diketahui.",
      "sides": {
        "a": {
          "label": "a",
          "description": "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> bertentangan a terletak betul-betul bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A. Ia tidak diperlukan untuk pengiraan ini.",
          "status": "unknown"
        },
        "b": {
          "label": "b = cari",
          "description": "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> bersebelahan b terletak sepanjang tapak di sebelah <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A. Ini adalah nilai yang dikembalikan oleh <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a>.",
          "status": "unknown"
        },
        "c": {
          "label": "c = diketahui",
          "description": "Hipotenus c ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang, bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat. Anda memberikannya sebagai input.",
          "status": "known"
        }
      },
      "notes": [
        "Bagi <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> a ialah bertentangan, sisi b ialah bersebelahan, dan sisi c ialah hipotenus.",
        "<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Sisi</a> bersebelahan sentiasa sisi yang menyentuh <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A dan sudut tepat.",
        "Hasil b sentiasa lebih pendek daripada c."
      ]
    },
    "calculator": {
      "outputLabel": "Sisi bersebelahan b",
      "fields": [
        {
          "key": "c",
          "label": "Hipotenus c",
          "min": 0
        },
        {
          "key": "A",
          "label": "Sudut A",
          "min": 0
        }
      ]
    },
    "formulaSection": {
      "h2": "Formula Sisi Dari Kosinus",
      "paragraphs": [
        "Kosinus sebuah <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> dalam segi tiga tepat sama dengan <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan dibahagi dengan hipotenus. Ditulis sebagai nisbah: cos(A) = b / c. Mendarabkan kedua-dua belah dengan c memberikan formula terus di bawah.",
        "Di sini, c ialah hipotenus (<a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> terpanjang, bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> 90 darjah), A ialah sudut tirus, dan b ialah sisi bersebelahan yang anda mahukan. <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Fungsi kosinus</a> menukarkan sudut kepada pecahan tepat hipotenus yang sama dengan sisi bersebelahan."
      ],
      "formulas": [
        "b = c \\times \\cos(A)"
      ]
    },
    "howTo": {
      "h2": "Cara Menggunakan Kalkulator Ini",
      "steps": [
        "Cari hipotenus c dalam segi tiga tepat anda. Ia ialah <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> yang bertentangan dengan <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tepat dan sentiasa sisi terpanjang.",
        "Kenal pasti <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> tirus A yang anda ketahui. Sahkan nilainya dalam darjah.",
        "Taip hipotenus c ke dalam medan pertama.",
        "Taip <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">sudut</a> A ke dalam medan kedua.",
        "Tekan Kira untuk melihat <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b dan penyelesaian langkah demi langkah."
      ]
    },
    "example": {
      "h2": "Contoh Langkah Demi Langkah: Cari Sisi Bersebelahan b",
      "intro": "Diberi: A = 36.87 darjah, c = 5. Cari <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">sisi</a> bersebelahan b menggunakan formula kosinus.",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "Cara Mencari Sisi Bersebelahan Menggunakan Kosinus",
        "paragraphs": [
          "Sebatang tangga 5 m bersandar pada dinding, membentuk sudut 65 darjah dengan tanah. Anda tahu panjang tangga dan sudutnya, tetapi sejauh manakah tapaknya dari dinding? Jarak mendatar itu ialah kaki bersebelahan sebuah segi tiga tepat, dan kosinus mencarinya secara terus. Kalkulator sisi kosinus mengambil hipotenus dan satu sudut tirus sebagai input dan mengembalikan sisi bersebelahan, tanpa memerlukan jadual trigonometri manual.",
          "Halaman ini menerangkan formula kosinus dari prinsip asas: maksud sisi bersebelahan, mengapa kosinus menggunakan hipotenus, cara mengenal pasti sisi yang betul dalam sebarang orientasi rajah, dan cara mengaplikasikan hasil kepada ukuran sebenar. Formulanya ialah b = c × cos(A), dengan b ialah sisi di sebelah sudut A, c ialah hipotenus, dan A diukur dalam darjah. Berbeza dengan kalkulator Pythagoras asas yang memerlukan dua sisi, alat ini berfungsi apabila anda mengetahui satu sisi dan satu sudut."
        ]
      },
      {
        "h2": "Memahami Sisi Bersebelahan dan Hipotenus",
        "paragraphs": [],
        "customHtml": "<h3>Apakah Segi Tiga Tepat?</h3>\n<p>Segi tiga tepat mengandungi satu sudut yang berukuran tepat 90 darjah. Dua sudut yang lain adalah tirus (masing-masing kurang daripada 90 darjah) dan berkomplemen, bermakna jumlahnya 90 darjah. Jika sudut A ialah 30 darjah, sudut tirus yang lain B mestilah 60 darjah. Pengiraan kosinus memerlukan struktur sudut tepat ini kerana takrifan nisbah bergantung pada hubungan serenjang antara kaki-kaki segi tiga.</p>\n<h3>Apakah Hipotenus?</h3>\n<p>Hipotenus terletak bertentangan dengan sudut tepat dan sentiasa sisi terpanjang. Ia dilabelkan c mengikut kelaziman. Untuk mencarinya dalam rajah yang diputarkan, cari sisi yang tidak menyentuh tanda sudut tepat. Dalam kalkulator ini, anda memasukkan hipotenus sebagai nilai yang diketahui.</p>\n<h3>Apakah Sisi Bersebelahan?</h3>\n<p>Sisi bersebelahan ialah kaki yang menyentuh kedua-dua sudut rujukan A dan sudut tepat. Bagi sudut A, sisi b adalah bersebelahan dan sisi a adalah bertentangan. Jika anda menukar rujukan kepada sudut B, labelnya bertukar: sisi a menjadi bersebelahan dan sisi b menjadi bertentangan. Hipotenus tidak pernah berubah; ia sentiasa c, bertentangan dengan sudut 90 darjah.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"Segi tiga tepat dengan sudut A di kiri bawah, kaki bersebelahan b, kaki bertentangan a, dan hipotenus c dilabelkan\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomi untuk kosinus: sudut A di kiri bawah, kaki bersebelahan b sepanjang tapak, kaki bertentangan a menegak, hipotenus c bertentangan dengan sudut tepat.</figcaption>\n</figure>"
      },
      {
        "h2": "Apakah Kosinus dalam Segi Tiga Tepat?",
        "paragraphs": [],
        "customHtml": "<p>Kosinus menyatakan nisbah yang mudah: bagi sesuatu sudut tirus yang diberikan, kaki bersebelahan dibahagi dengan hipotenus sentiasa memberikan nombor yang sama. Nombor itu ialah cos(A). Jika sudut A ialah 60 darjah, cos(60°) = 0.5, yang bermakna sisi bersebelahan adalah tepat separuh hipotenus, tidak kira sebesar atau sekecil mana segi tiga itu.</p>\n<p>Nisbah ini tidak mempunyai unit kerana unit-unitnya saling membatalkan: meter dibahagi meter meninggalkan nombor tulen. Untuk mencari sisi bersebelahan, susun semula nisbah tersebut. Mulakan dengan cos(A) = b / c. Darabkan kedua-dua belah dengan c. Nilai c dalam penyebut akan terhapus, meninggalkan <strong>b = c × cos(A)</strong>. Formula ini mendarabkan hipotenus yang diketahui dengan kosinus sudut yang diketahui.</p>\n<p>Bagi mana-mana sudut tirus yang sah (antara 0 dan 90 darjah), cos(A) berada antara 0 dan 1. Ini menjamin kaki bersebelahan lebih pendek daripada hipotenus, yang sepadan dengan geometri: tiada kaki boleh melebihi hipotenus.</p>\n<h3>Memahami SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA ialah bantuan ingatan untuk tiga nisbah asas. SOH: Sinus = Bertentangan / Hipotenus. CAH: Kosinus = Bersebelahan / Hipotenus. TOA: Tangen = Bertentangan / Bersebelahan. Untuk halaman ini, tumpukan pada CAH. Mnemonik ini membantu anda memilih nisbah yang betul, tetapi anda masih perlu mengenal pasti dengan betul sisi mana yang bersebelahan dengan sudut rujukan anda.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"Segi tiga tepat yang menonjolkan kaki bersebelahan b dan hipotenus c dengan cos(A) sama dengan b dibahagi c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Nisbah kosinus: bahagikan kaki bersebelahan b yang ditonjolkan dengan hipotenus c yang ditonjolkan untuk mendapatkan cos(A).</figcaption>\n</figure>"
      },
      {
        "h2": "Cara Menggunakan Kalkulator Sisi Segi Tiga Tepat Dari Kosinus",
        "paragraphs": [
          "Ikuti langkah-langkah ini untuk mendapatkan hasil yang tepat."
        ],
        "listTitle": "Langkah:",
        "listItems": [
          "Kenal pasti sudut tepat dalam segi tiga anda. Sahkan satu bucu berukuran 90 darjah.",
          "Kenal pasti sudut tirus A yang diketahui. Pastikan ia bukan sudut tepat.",
          "Cari hipotenus c. Ia ialah sisi bertentangan dengan sudut tepat, sentiasa sisi terpanjang.",
          "Kenal pasti kaki bersebelahan b. Ia menyentuh kedua-dua sudut A dan sudut tepat.",
          "Masukkan panjang hipotenus c ke dalam medan input pertama.",
          "Masukkan sudut A dalam darjah ke dalam medan kedua.",
          "Pilih unit ukuran yang sepadan dengan input hipotenus anda.",
          "Tekan Kira. Hasilnya menunjukkan sisi bersebelahan b dengan langkah penyelesaian.",
          "Semak langkah-langkah untuk memastikan formula dan penggantian sepadan dengan masalah anda.",
          "Periksa bahawa b lebih pendek daripada c. Jika tidak, semak semula sisi yang anda masukkan sebagai hipotenus."
        ]
      },
      {
        "h2": "Cara Mengira Sisi Bersebelahan Menggunakan Kosinus",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>Contoh 1: Segi Tiga Tepat Asas</h3>\n<p><strong>Diberi:</strong> c = 10 m, A = 30°. <strong>Cari:</strong> b.</p>\n<p><strong>Formula:</strong> b = c × cos(A)</p>\n<p><strong>Penggantian:</strong> b = 10 × cos(30°)</p>\n<p><strong>Nilai kosinus:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>Pengiraan:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 8.66 m</strong></p>\n<p>Hasilnya lebih pendek daripada hipotenus 10 m, seperti yang dijangkakan. Pada 30 darjah, sisi bersebelahan adalah kira-kira 87% daripada panjang hipotenus.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 2: Sudut Istimewa</h3>\n<p><strong>Diberi:</strong> c = 12 ft, A = 60°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>Jawapan:</strong> <strong>b = 6 ft</strong></p>\n<p>Pada 60 darjah, cos(A) = 0.5 tepat, jadi kaki bersebelahan adalah tepat separuh hipotenus. Sudut istimewa seperti 30°, 45°, dan 60° memberikan nilai kosinus yang kemas dan patut diingati.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 3: Ukuran Perpuluhan</h3>\n<p><strong>Diberi:</strong> c = 7.5 m, A = 42°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 5.57 m</strong></p>\n<p>Kekalkan ketepatan penuh dalam nilai kosinus semasa pengiraan dan bundarkan hanya jawapan akhir. Membundarkan cos(42°) kepada 0.74 lebih awal akan memberikan 5.55 m, menimbulkan ralat kecil tetapi boleh dielakkan.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 4: Sudut Hampir 90 Darjah</h3>\n<p><strong>Diberi:</strong> c = 15 cm, A = 80°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 2.60 cm</strong></p>\n<p>Apabila sudut menghampiri 90 darjah, kaki bersebelahan mengecil ke arah sifar. Pada 80°, sisi bersebelahan hanya kira-kira 17% daripada hipotenus. Ini adalah geometri biasa, bukan ralat pengiraan.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"Pengiraan kosinus langkah demi langkah: hipotenus 10 m, sudut 30 darjah, sisi bersebelahan sama dengan 8.66 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Penyelesaian yang dikerjakan: b = 10 × cos(30°) ≈ 8.66 m, dengan setiap langkah penggantian ditunjukkan.</figcaption>\n</figure>"
      },
      {
        "h2": "Contoh Pengiraan Kosinus Dalam Kehidupan Sebenar",
        "paragraphs": [
          "Contoh-contoh ini menunjukkan cara formula kosinus menyelesaikan masalah ukuran praktikal. Dalam setiap kes, panjang cerun atau pepenjuru yang diketahui ialah hipotenus, dan jarak mendatar yang dikehendaki ialah kaki bersebelahan."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>Contoh 5: Mencari Jarak Mendatar Tangga</h3>\n<p>Sebatang tangga 5 m bersandar pada dinding dan membentuk sudut 65 darjah dengan tanah yang rata. Cari jarak mendatar dari dinding ke kaki tangga.</p>\n<p><strong>Diberi:</strong> c = 5 m (tangga), A = 65°. <strong>Cari:</strong> b (jarak tanah).</p>\n<p><strong>Mengapa bersebelahan:</strong> Jarak tanah menyentuh kedua-dua sudut 65° dan sudut tepat di mana dinding bertemu tanah.</p>\n<p><strong>Pengiraan:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 2.11 m</strong></p>\n<p>Tapak terletak kira-kira 2.11 m dari dinding. Ini ialah pengiraan geometri sahaja dan tidak menentukan sama ada susunan tangga itu selamat.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 6: Mencari Rentang Mendatar Bumbung</h3>\n<p>Sebatang kasau bumbung sepanjang 4.5 m dan membentuk sudut 30 darjah dengan garis mendatar. Cari rentang mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 4.5 m (kasau), A = 30°. <strong>Cari:</strong> b (rentang mendatar).</p>\n<p><strong>Pengiraan:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 3.90 m</strong></p>\n<p>Kasau yang condong (4.5 m) meliputi 3.90 m secara mendatar. Perbezaannya penting apabila memesan bahan: anda memerlukan 4.5 m kayu untuk rentang mendatar 3.90 m. Lebih atap, sambungan, dan elaun pembinaan tidak termasuk.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 7: Mengira Rentang Mendatar Tanijakan</h3>\n<p>Tanijakan yang dipermudahkan mempunyai panjang cerun 8 m dan sudut 6 darjah relatif kepada garis mendatar. Cari rentang mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 8 m (cerun), A = 6°. <strong>Cari:</strong> b (rentang mendatar).</p>\n<p><strong>Pengiraan:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 7.96 m</strong></p>\n<p>Pada sudut cetek 6°, rentang mendatar (7.96 m) hampir sama dengan panjang cerun (8 m). Cerun sentiasa sedikit lebih panjang daripada unjuran mendatar. Ini tidak mengesahkan kebolehcapaian atau pematuhan kod bangunan.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 8: Mencari Jangkauan Mendatar Kabel</h3>\n<p>Sebatang kabel sepanjang 20 m dan membentuk sudut 55 darjah dengan garis mendatar. Kira komponen mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 20 m, A = 55°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 11.47 m</strong></p>\n<p>Semakin curam sudut, semakin pendek jangkauan mendatar. Pada 55°, kabel meliputi 11.47 m secara mendatar sambil naik dengan ketara.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 9: Menganggarkan Jarak Mendatar dalam Ukur Tanah</h3>\n<p>Garis penglihatan yang dipermudahkan sepanjang 150 m dan membentuk sudut 12 darjah dengan garis mendatar. Cari komponen mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 150 m, A = 12°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 146.72 m</strong></p>\n<p>Jarak mendatar ialah 146.72 m, sedikit kurang daripada garis penglihatan 150 m. Ukur tanah sebenar memerlukan pembetulan untuk kelengkungan, rupa bumi, dan ketinggian alat; contoh ini hanya meliputi geometri asas.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 10: Mencari Komponen Mendatar Wayar</h3>\n<p>Sebatang wayar sepanjang 13 m dan membentuk sudut 22 darjah dengan tanah yang rata. Cari unjuran mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 13 m, A = 22°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 12.05 m</strong></p>\n<p>Komponen mendatar (12.05 m) adalah kurang daripada panjang wayar penuh (13 m) kerana sebahagian panjang wayar menjadi kenaikan menegak.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 11: Mengira Ofset Mendatar Pendakap</h3>\n<p>Pendakap pepenjuru sepanjang 2.4 m dan membentuk sudut 40 darjah dengan garis mendatar. Kira unjuran mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 2.4 m, A = 40°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 1.84 m</strong></p>\n<p>Ukuran ini membantu mentafsir lukisan: pendakap menjangkau 1.84 m secara mendatar. Pengiraan ini bersifat geometri dan tidak mengesahkan kekuatan struktur atau pematuhan reka bentuk.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 12: Mencari Jarak Tanah Wayar Guy</h3>\n<p>Wayar guy sepanjang 18 m dan membentuk sudut 35 darjah dengan tanah yang rata. Kira jarak mendatar antara titik sauh dan titik tepat di bawah tempat wayar dipasang.</p>\n<p><strong>Diberi:</strong> c = 18 m, A = 35°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 14.74 m</strong></p>\n<p>Wayar itu sendiri ialah hipotenus kerana ia menjangkau dari sauh tanah hingga ke titik pemasangan, bertentangan dengan sudut tepat yang dibentuk oleh struktur menegak dan tanah yang rata.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 13: Menganggarkan Perjalanan Mendatar di Cerun</h3>\n<p>Laluan cerun yang dipermudahkan berukuran 250 m dan membentuk sudut 18 darjah dengan garis mendatar. Kira komponen mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 250 m, A = 18°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 237.76 m</strong></p>\n<p>Berjalan 250 m sepanjang cerun meliputi 237.76 m jarak mendatar. Jarak cerun sentiasa lebih panjang daripada sesaran mendatar.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 14: Mengira Rentang Mendatar Laluan Kaki</h3>\n<p>Laluan kaki yang condong sepanjang 6 m dan membentuk sudut 8 darjah dengan garis mendatar. Kira rentang mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 6 m, A = 8°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 5.94 m</strong></p>\n<p>Pada 8°, laluan kaki ini cukup landai sehingga rentang mendatar (5.94 m) hampir dengan panjang cerun (6 m). Hasilnya sahaja tidak membuktikan pematuhan kebolehcapaian.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 15: Mencari Unjuran Mendatar Pautan Mekanikal</h3>\n<p>Sebatang pautan mekanikal sepanjang 850 mm dan diposisikan pada sudut 25 darjah kepada garis mendatar. Kira komponen mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 850 mm, A = 25°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 770.36 mm</strong></p>\n<p>Hubungan kosinus berfungsi sama dalam milimeter. Unit jawapan sentiasa sepadan dengan unit input hipotenus.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Contoh 16: Mengira Komponen Mendatar Sokongan Condong</h3>\n<p>Ahli sokongan sepanjang 3.2 ft dan membentuk sudut 48 darjah dengan garis mendatar. Kira unjuran mendatarnya.</p>\n<p><strong>Diberi:</strong> c = 3.2 ft, A = 48°. <strong>Cari:</strong> b.</p>\n<p><strong>Pengiraan:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>Jawapan:</strong> <strong>b ≈ 2.14 ft</strong></p>\n<p>Apabila membaca lukisan dimensi, ini memberitahu anda sokongan itu meliputi 2.14 ft secara mendatar. Pengiraan ini bersifat geometri, bukan semakan keselamatan struktur.</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Senario</th>\n<th class=\"py-2 pr-4 font-semibold\">Hipotenus</th>\n<th class=\"py-2 pr-4 font-semibold\">Sudut</th>\n<th class=\"py-2 pr-4 font-semibold\">Formula</th>\n<th class=\"py-2 font-semibold\">Sisi Bersebelahan</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Tangga</td><td class=\"py-2 pr-4\">5 m</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Kasau bumbung</td><td class=\"py-2 pr-4\">4.5 m</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Kabel</td><td class=\"py-2 pr-4\">20 m</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Penglihatan ukur</td><td class=\"py-2 pr-4\">150 m</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Wayar guy</td><td class=\"py-2 pr-4\">18 m</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 m</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">Laluan kaki</td><td class=\"py-2 pr-4\">6 m</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 m</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"Empat panel: tangga, kasau bumbung, kabel, dan laluan kaki menunjukkan unjuran mendatar yang dikira dengan kosinus\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Kosinus dalam amalan: setiap panel menunjukkan hipotenus, sudut rujukan, dan jarak mendatar (bersebelahan) yang dikira.</figcaption>\n</figure>"
      },
      {
        "h2": "Bilakah Anda Harus Menggunakan Kosinus Berbanding Sinus atau Tangen?",
        "paragraphs": [],
        "customHtml": "<p>Setiap nisbah trigonometri menghubungkan pasangan sisi yang berbeza. Pilih yang sepadan dengan nilai diketahui dan tidak diketahui anda.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Nisbah</th>\n<th class=\"py-2 pr-4 font-semibold\">Formula</th>\n<th class=\"py-2 pr-4 font-semibold\">Diketahui</th>\n<th class=\"py-2 font-semibold\">Mencari</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Kosinus</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">Hipotenus, sudut</td><td class=\"py-2\">Kaki bersebelahan</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Sinus</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">Hipotenus, sudut</td><td class=\"py-2\">Kaki bertentangan</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">Tangen</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">Kaki bersebelahan, sudut</td><td class=\"py-2\">Kaki bertentangan</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>Apa yang salah jika nisbah salah:</strong> Andaikan c = 10 m dan A = 30°, dan anda memerlukan sisi bersebelahan. Menggunakan sinus secara tersilap memberikan a = 10 × sin(30°) = 5 m, iaitu kaki bertentangan, bukan bersebelahan. Pengiraan kosinus yang betul memberikan b ≈ 8.66 m. Kedua-dua jawapan berbeza kerana ia mengukur sisi yang berbeza. Sentiasa sahkan sisi mana yang menyentuh sudut rujukan anda sebelum memilih.</p>"
      },
      {
        "h2": "Bagaimana Sudut Mengubah Sisi Bersebelahan",
        "paragraphs": [],
        "customHtml": "<p>Dengan hipotenus ditetapkan, kaki bersebelahan mengecil apabila sudut A bertambah. Pada 0°, cos(A) = 1 dan kaki bersebelahan sama dengan hipotenus penuh (segi tiga merata menjadi garis). Pada 90°, cos(A) = 0 dan kaki bersebelahan hilang. Antara kedua-dua ekstrem ini, hubungannya lancar dan boleh diramalkan.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Sudut A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">Bersebelahan b (c = 10)</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>Perhatikan polanya: menggandakan sudut dari 30° ke 60° tidak mengurangkan sisi separuh, kerana kosinus bukan linear. Dua segi tiga dengan sudut yang sama tetapi hipotenus yang berbeza adalah serupa, jadi nisbah sisinya sepadan walaupun panjang mutlaknya berbeza. Hipotenus 5 m pada 30° memberikan b ≈ 4.33 m, tepat separuh daripada kes 10 m.</p>\n<p>Nota: 0° dan 90° bukan sudut tirus yang sah bagi segi tiga tepat yang tidak merosot. Ia mewakili kes had di mana segi tiga runtuh.</p>"
      },
      {
        "h2": "Memasukkan Sudut dan Ukuran dengan Betul",
        "paragraphs": [
          "Kalkulator ini mengharapkan sudut dalam darjah. Darjah membahagikan bulatan penuh kepada 360 bahagian; radian menggunakan skala berbeza di mana bulatan penuh adalah kira-kira 6.283. Memasukkan 30 radian apabila anda bermaksud 30 darjah menghasilkan jawapan yang sangat salah kerana cos(30 radian) ≈ 0.154, bukan 0.866. Sentiasa sahkan sudut anda dalam darjah sebelum mengira.",
          "Gunakan unit panjang yang sama untuk hipotenus seperti yang anda mahukan dalam jawapan. Jika c dalam meter, b keluar dalam meter. Mencampurkan unit, seperti memasukkan c = 5 (meter) sambil berfikir dalam kaki, menjamin hasil yang salah. Tukar dahulu, kemudian kira.",
          "Bundarkan hanya jawapan akhir, bukan nilai pertengahan. Kosinus 42° ialah 0.743144825..., dan menggunakan nilai penuh memberikan b = 5.5736 m untuk c = 7.5 m. Membundarkan kosinus kepada 0.74 terlebih dahulu memberikan 5.55 m, ralat hampir 2.4 cm. Hasil anda tidak boleh lebih tepat daripada input paling tidak tepat anda: jika anda mengukur hipotenus kepada sentimeter terdekat, jangan laporkan jawapan dalam milimeter."
        ]
      },
      {
        "h2": "Kesilapan Pengiraan Kosinus Biasa dan Cara Mengelakkannya",
        "paragraphs": [],
        "customHtml": "<p><strong>1. Mengelirukan sisi bersebelahan dengan sisi bertentangan.</strong> Sisi bersebelahan menyentuh sudut A; sisi bertentangan tidak. Pembetulan: jejak dari sudut A sepanjang setiap kaki dan sahkan yang mana satu membentuk sudut.</p>\n<p><strong>2. Menggunakan kaki sebagai hipotenus.</strong> Memasukkan nilai kaki ke dalam medan hipotenus membesarkan hasil. Pembetulan: hipotenus sentiasa bertentangan dengan sudut tepat dan sentiasa sisi terpanjang.</p>\n<p><strong>3. Lupa mendarab dengan hipotenus.</strong> Menjawab cos(30°) ≈ 0.866 dan bukan 10 × 0.866 ≈ 8.66. Pembetulan: nisbah sahaja bukan panjang; darab dengan c.</p>\n<p><strong>4. Membahagi dan bukan mendarab.</strong> Mengira c / cos(A) dan bukan c × cos(A). Pembahagian digunakan untuk mod tangen bagi mencari b dari a, bukan untuk kosinus. Pembetulan: semak formula yang disusun semula.</p>\n<p><strong>5. Menggunakan sudut rujukan yang salah.</strong> Mengukur dari sudut B dan bukan sudut A menukar bersebelahan dan bertentangan. Pembetulan: labelkan sudut rujukan anda sebelum mengenal pasti sisi.</p>\n<p><strong>6. Memasukkan radian apabila darjah dijangkakan.</strong> cos(1 radian) ≈ 0.540 berbeza dengan cos(1°) ≈ 0.99985. Pembetulan: sahkan mod darjah.</p>\n<p><strong>7. Mencampurkan unit.</strong> Memasukkan c = 5 (meter) dan menjangkakan kaki. Pembetulan: tukar semua input kepada satu unit dahulu.</p>\n<p><strong>8. Membundarkan nilai pertengahan terlalu awal.</strong> Membundarkan cos(42°) kepada 0.74 sebelum mendarab menggandakan ralat. Pembetulan: kekalkan ketepatan penuh sehingga langkah akhir.</p>\n<p><strong>9. Mengaplikasikan kosinus kepada segi tiga bukan tepat.</strong> Takrifan nisbah mengandaikan sudut 90 darjah. Pembetulan: sahkan sudut tepat wujud sebelum menggunakan kalkulator ini.</p>\n<p><strong>10. Menerima hasil yang lebih panjang daripada hipotenus.</strong> Jika b > c, ada yang tidak kena. Pembetulan: semak semula input; cos(A) tidak pernah melebihi 1 bagi sudut tirus.</p>\n<p><strong>11. Memasukkan ukuran sifar, negatif, atau tidak sah.</strong> Panjang sisi mestilah positif. Pembetulan: gunakan panjang positif sahaja.</p>\n<p><strong>12. Menganggap sisi bersebelahan yang hampir sifar sebagai ralat.</strong> Pada 89°, b ≈ 0.017c, yang merupakan geometri yang betul, bukan pepijat. Pembetulan: fahami bahawa sudut yang curam secara semula jadi menghasilkan sisi bersebelahan yang pendek.</p>"
      },
      {
        "h2": "Cara Memeriksa Sama Ada Hasil Kosinus Anda Betul",
        "paragraphs": [],
        "customHtml": "<p><strong>Kaedah 1: Semak panjang sisi relatif.</strong> Bagi mana-mana sudut tirus, kaki bersebelahan mestilah lebih pendek daripada hipotenus. Jika jawapan anda melebihi c, semak semula input anda.</p>\n<p><strong>Kaedah 2: Kira semula nisbah kosinus.</strong> Bahagikan jawapan anda dengan hipotenus: b / c sepatutnya lebih kurang sama dengan cos(A). Gunakan nilai tidak dibundarkan untuk semakan. Untuk c = 10 m, A = 30°, b ≈ 8.660254: 8.660254 / 10 = 0.8660254 ≈ cos(30°). Kesepadanan mengesahkan ketepatan.</p>\n<p><strong>Kaedah 3: Aplikasikan teorem Pythagoras.</strong> Jika anda juga mengetahui atau mengira kaki bertentangan a = c × sin(A), sahkan bahawa a² + b² ≈ c². Contoh penuh: c = 10 m, A = 30°. Maka b ≈ 8.660254 m dan a = 10 × sin(30°) = 5 m. Semak: 5² + 8.660254² = 25 + 75 = 100 = 10². Segi tiga itu konsisten.</p>\n<p>Penyimpangan kecil pada tempat perpuluhan terakhir datang daripada pembundaran nilai yang dipaparkan. Apabila mengesahkan, gunakan nombor ketepatan penuh dan bukan output yang dibundarkan.</p>"
      },
      {
        "h2": "Cari Sisi Bersebelahan Dengan Yakin",
        "paragraphs": [
          "Kenal pasti hipotenus dan sudut rujukan dahulu. Sahkan kaki mana yang menyentuh sudut: itulah sisi bersebelahan b. Aplikasikan b = c × cos(A) dengan sudut dalam darjah, menggunakan unit yang konsisten. Sahkan bahawa jawapan lebih pendek daripada hipotenus dan, jika boleh, semak silang dengan teorem Pythagoras. Dengan tabiat ini, setiap pengiraan sisi kosinus menjadi rutin. Gunakan kalkulator di atas untuk menjalankan nombor anda."
        ]
      }
    ],
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "Kalkulator Sisi Segi Tiga Tepat Dari Sudut"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "Kalkulator Sisi Segi Tiga Tepat Dari Sinus"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "Kalkulator Sisi Segi Tiga Tepat Dari Tangen"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "Kalkulator Sudut Segi Tiga Tepat Dari Kosinus"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "Kalkulator Nisbah Kosinus"
      }
    ],
    "faqs": [
      {
        "question": "Bagaimana mencari sisi bersebelahan menggunakan kosinus?",
        "answer": "Darabkan hipotenus dengan kosinus sudut tirus yang diketahui: b = c × cos(A). Masukkan hipotenus c dan sudut A dalam darjah, dan kalkulator mengembalikan sisi bersebelahan b dengan langkah penyelesaian penuh."
      },
      {
        "question": "Apakah formula untuk kalkulator sisi kosinus?",
        "answer": "Formulanya ialah b = c × cos(A), dengan b ialah sisi bersebelahan, c ialah hipotenus, dan A ialah sudut tirus. Ia diperoleh daripada menyusun semula nisbah kosinus cos(A) = b / c dengan mendarabkan kedua-dua belah dengan c."
      },
      {
        "question": "Sisi manakah yang digunakan dalam nisbah kosinus?",
        "answer": "Kosinus menggunakan sisi bersebelahan dan hipotenus: cos(A) = bersebelahan / hipotenus. Bagi sudut A, sisi bersebelahan ialah b (kaki yang menyentuh sudut A) dan hipotenus ialah c (sisi terpanjang, bertentangan dengan sudut tepat)."
      },
      {
        "question": "Bolehkah saya mengira sisi bersebelahan dari hipotenus dan sudut?",
        "answer": "Ya. Itulah tepatnya fungsi kalkulator ini. Masukkan panjang hipotenus dan sudut tirus dalam darjah, dan ia mengira b = c × cos(A). Sudut mestilah antara 0 dan 90 darjah, tidak termasuk."
      },
      {
        "question": "Mengapa sisi bersebelahan lebih pendek daripada hipotenus?",
        "answer": "Bagi mana-mana sudut tirus, cos(A) berada antara 0 dan 1, jadi mendarabkan hipotenus dengan cos(A) sentiasa memberikan nilai yang lebih kecil. Secara geometri, tiada kaki segi tiga tepat boleh melebihi hipotenus, yang merentasi jarak terbesar antara bucu."
      },
      {
        "question": "Apakah perbezaan antara sinus dan kosinus?",
        "answer": "Kedua-duanya menggunakan hipotenus, tetapi sinus mengembalikan sisi bertentangan (a = c × sin(A)) manakala kosinus mengembalikan sisi bersebelahan (b = c × cos(A)). Pilih sinus apabila anda memerlukan sisi bertentangan dengan sudut, kosinus apabila anda memerlukan sisi di sebelahnya."
      },
      {
        "question": "Patutkah saya memasukkan sudut dalam darjah atau radian?",
        "answer": "Masukkan sudut dalam darjah. Kalkulator ini mengharapkan input darjah. Memasukkan radian menghasilkan hasil yang tidak betul kerana cos(30 radian) ≈ 0.154 berbeza daripada cos(30°) ≈ 0.866. Sentiasa sahkan mod darjah sebelum mengira."
      },
      {
        "question": "Bolehkah kosinus mengira sisi dalam meter, kaki, atau inci?",
        "answer": "Ya. Formula berfungsi dalam sebarang unit panjang. Jawapan menggunakan unit yang sama dengan input hipotenus: meter masuk memberikan meter keluar, kaki masuk memberikan kaki keluar. Gunakan unit yang konsisten untuk semua input."
      },
      {
        "question": "Mengapa sisi bersebelahan mengecil apabila sudut bertambah?",
        "answer": "Kosinus menurun dari 1 kepada 0 apabila sudut bertambah dari 0° kepada 90°. Oleh kerana b = c × cos(A), pendarab kosinus yang lebih kecil menghasilkan sisi bersebelahan yang lebih pendek. Pada 60° sisi bersebelahan adalah separuh hipotenus; pada 80° ia hanya kira-kira 17%."
      },
      {
        "question": "Bagaimana jika saya mengetahui sisi bersebelahan dan sudut tetapi bukan hipotenus?",
        "answer": "Susun semula formula untuk menyelesaikan c: c = b / cos(A). Kalkulator ini mencari sisi bersebelahan dari hipotenus; untuk mencari hipotenus dari sisi bersebelahan, bahagikan sisi bersebelahan dengan cos(A)."
      },
      {
        "question": "Bagaimana saya boleh mengesahkan sisi yang saya kira?",
        "answer": "Semak tiga perkara: (1) jawapannya lebih pendek daripada hipotenus, (2) membahagikan jawapan dengan hipotenus lebih kurang sama dengan cos(A), dan (3) jika anda juga mengira a = c × sin(A), maka a² + b² sepatutnya sama dengan c²."
      },
      {
        "question": "Apa yang berlaku apabila sudut sangat hampir dengan 90 darjah?",
        "answer": "Sisi bersebelahan menjadi sangat kecil kerana cos(A) menghampiri sifar. Pada 89°, b ≈ 0.017c. Ini ialah geometri yang betul, bukan ralat. Segi tiga menjadi tinggi dan sempit, dengan hampir keseluruhan panjang hipotenus menjadi sisi bertentangan."
      }
    ]
  },
  "pl": {
    "slug": "right-triangle-side-from-cosine-calculator",
    "url": "/right-triangle-side-from-cosine-calculator/",
    "h1": "Kalkulator boku trójkąta prostokątnego z cosinusa",
    "metaTitle": "Kalkulator boku trójkąta prostokątnego z cosinusa | Znajdź b = c × cos(A)",
    "metaDescription": "Użyj tego kalkulatora boku trójkąta prostokątnego z cosinusa, aby znaleźć przyległy bok b z kąta A i przeciwprostokątnej c, z podanym wzorem, krokami i przykładami.",
    "formulaSlug": "b-c-cos",
    "toolPurpose": "Ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> rozwiązuje równanie dla przyległego <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">boku</a> b, gdy znasz już <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A i przeciwprostokątną c. Wykonuje obliczenia cosinusa i pokazuje pełny przebieg rozwiązania, abyś mógł śledzić lub sprawdzić każdy krok.",
    "intro": "Użyj tego <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulatora</a>, aby znaleźć przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b z <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A i przeciwprostokątnej c.",
    "quickSummary": {
      "h2": "Co oblicza to narzędzie",
      "intro": "Ten <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a> przyjmuje <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A i przeciwprostokątną c jako dane wejściowe i zwraca przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b. Cosinus to stosunek, który łączy te trzy wartości, więc wzór nie wymaga przekształcania.",
      "cards": [
        {
          "label": "Znane wartości",
          "value": "Kąt A i przeciwprostokątna c"
        },
        {
          "label": "Znajduje",
          "value": "Przyległy bok b"
        },
        {
          "label": "Główny wzór",
          "value": "b = c × cos(A)"
        },
        {
          "label": "Najlepszy do",
          "value": "Znajdowania rzutu poziomego, odległości bazowej lub rzutu na podłoże"
        }
      ]
    },
    "diagram": {
      "h2": "Schemat trójkąta prostokątnego: bok b z cosinusa",
      "intro": "W tym układzie <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A znajduje się w prawym dolnym rogu. Przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b biegnie wzdłuż podstawy, tuż obok kąta A. Przeciwprostokątna c rozciąga się od kąta A do górnego wierzchołka. <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">Kalkulator</a> używa tych dwóch znanych wartości, aby znaleźć b.",
      "caption": "Trójkąt prostokątny pokazujący <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A, znaną przeciwprostokątną c i nieznany przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b.",
      "sides": {
        "a": {
          "label": "a",
          "description": "Przeciwległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> a znajduje się naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A. Nie jest potrzebny do tych obliczeń.",
          "status": "unknown"
        },
        "b": {
          "label": "b = do znalezienia",
          "description": "Przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b biegnie wzdłuż podstawy obok <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A. To jest wartość, którą zwraca <a href=\"/right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator</a>.",
          "status": "unknown"
        },
        "c": {
          "label": "c = znane",
          "description": "Przeciwprostokątna c jest najdłuższym <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokiem</a>, naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta prostego</a>. Podajesz ją jako dane wejściowe.",
          "status": "known"
        }
      },
      "notes": [
        "Dla <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> A <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> a jest przeciwległy, bok b jest przyległy, a bok c jest przeciwprostokątną.",
        "Przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> to zawsze bok, który styka się z <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kątem</a> A i kątem prostym.",
        "Wynik b zawsze będzie krótszy niż c."
      ]
    },
    "calculator": {
      "outputLabel": "Przyległy bok b",
      "fields": [
        {
          "key": "c",
          "label": "Przeciwprostokątna c",
          "min": 0
        },
        {
          "key": "A",
          "label": "Kąt A",
          "min": 0
        }
      ]
    },
    "formulaSection": {
      "h2": "Wzór na bok z cosinusa",
      "paragraphs": [
        "Cosinus <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> w trójkącie prostokątnym jest równy przyległemu <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bokowi</a> podzielonemu przez przeciwprostokątną. Zapisany jako stosunek: cos(A) = b / c. Pomnożenie obu stron przez c daje bezpośredni wzór poniżej.",
        "Tutaj c to przeciwprostokątna (najdłuższy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a>, naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta</a> 90 stopni), A to kąt ostry, a b to przyległy bok, który chcesz znaleźć. <a href=\"/cosine-ratio-calculator/\" class=\"text-primary hover:underline\">Funkcja cosinus</a> zamienia kąt na dokładną część przeciwprostokątnej równą przyległemu bokowi."
      ],
      "formulas": [
        "b = c \\times \\cos(A)"
      ]
    },
    "howTo": {
      "h2": "Jak korzystać z tego kalkulatora",
      "steps": [
        "Znajdź przeciwprostokątną c w swoim trójkącie prostokątnym. Jest to <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> naprzeciw <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąta prostego</a> i zawsze najdłuższy bok.",
        "Zidentyfikuj swój znany ostry <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A. Sprawdź, czy wartość jest podana w stopniach.",
        "Wpisz przeciwprostokątną c w pierwszym polu.",
        "Wpisz <a href=\"/right-triangle-angle-calculator/\" class=\"text-primary hover:underline\">kąt</a> A w drugim polu.",
        "Naciśnij Oblicz, aby zobaczyć przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b i rozwiązanie krok po kroku."
      ]
    },
    "example": {
      "h2": "Przykład krok po kroku: znajdź przyległy bok b",
      "intro": "Dane: A = 36.87 stopnia, c = 5. Znajdź przyległy <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">bok</a> b, korzystając ze wzoru na cosinus.",
      "lines": [
        "b = c \\times \\cos(A)",
        "b = 5 \\times \\cos(36.87)",
        "b = 5 \\times 0.8",
        "b = 4"
      ]
    },
    "extraSections": [
      {
        "h2": "Jak znaleźć przyległy bok przy użyciu cosinusa",
        "paragraphs": [
          "Drabina o długości 5 m opiera się o ścianę, tworząc z podłożem kąt 65 stopni. Znasz długość drabiny i kąt, ale jak daleko podstawa znajduje się od ściany? Ta pozioma odległość to przyległa przyprostokątna trójkąta prostokątnego, a cosinus znajduje ją bezpośrednio. Kalkulator boku z cosinusa przyjmuje przeciwprostokątną i jeden kąt ostry jako dane wejściowe i zwraca przyległy bok, bez ręcznych tablic trygonometrycznych.",
          "Ta strona wyjaśnia wzór na cosinus od podstaw: co oznacza przyległy bok, dlaczego cosinus wykorzystuje przeciwprostokątną, jak zidentyfikować właściwe boki w schemacie o dowolnej orientacji oraz jak zastosować wynik do rzeczywistych pomiarów. Wzór to b = c × cos(A), gdzie b to bok przyległy do kąta A, c to przeciwprostokątna, a A mierzy się w stopniach. W przeciwieństwie do podstawowego kalkulatora pitagorejskiego, który potrzebuje dwóch boków, to narzędzie działa, gdy znasz jeden bok i jeden kąt."
        ]
      },
      {
        "h2": "Zrozumienie przyległego boku i przeciwprostokątnej",
        "paragraphs": [],
        "customHtml": "<h3>Co to jest trójkąt prostokątny?</h3>\n<p>Trójkąt prostokątny zawiera jeden kąt mierzący dokładnie 90 stopni. Pozostałe dwa kąty są ostre (każdy mniejszy niż 90 stopni) i dopełniające się, co oznacza, że sumują się do 90 stopni. Jeśli kąt A ma 30 stopni, drugi kąt ostry B musi mieć 60 stopni. Obliczenia cosinusa wymagają tej struktury kąta prostego, ponieważ definicje stosunków zależą od prostopadłej relacji między przyprostokątnymi.</p>\n<h3>Co to jest przeciwprostokątna?</h3>\n<p>Przeciwprostokątna znajduje się naprzeciw kąta prostego i jest zawsze najdłuższym bokiem. Zgodnie z konwencją oznacza się ją jako c. Aby ją znaleźć w obróconym schemacie, szukaj boku, który nie styka się ze znacznikiem kąta prostego. W tym kalkulatorze podajesz przeciwprostokątną jako znaną wartość.</p>\n<h3>Co to jest przyległy bok?</h3>\n<p>Przyległy bok to przyprostokątna, która styka się zarówno z kątem odniesienia A, jak i z kątem prostym. Dla kąta A bok b jest przyległy, a bok a jest przeciwległy. Jeśli zmienisz odniesienie na kąt B, oznaczenia się zamieniają: bok a staje się przyległy, a bok b przeciwległy. Przeciwprostokątna nigdy się nie zmienia; to zawsze c, naprzeciw kąta 90 stopni.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-anatomy.svg\" alt=\"Trójkąt prostokątny z kątem A w lewym dolnym rogu, przyległą przyprostokątną b, przeciwległą przyprostokątną a i oznaczoną przeciwprostokątną c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Anatomia cosinusa: kąt A w lewym dolnym rogu, przyległa przyprostokątna b wzdłuż podstawy, przeciwległa przyprostokątna a pionowo, przeciwprostokątna c naprzeciw kąta prostego.</figcaption>\n</figure>"
      },
      {
        "h2": "Co to jest cosinus w trójkącie prostokątnym?",
        "paragraphs": [],
        "customHtml": "<p>Cosinus wyraża prosty stosunek: dla danego kąta ostrego przyległa przyprostokątna podzielona przez przeciwprostokątną zawsze daje tę samą liczbę. Ta liczba to cos(A). Jeśli kąt A ma 60 stopni, cos(60°) = 0.5, co oznacza, że przyległy bok jest dokładnie połową przeciwprostokątnej, niezależnie od tego, jak duży lub mały jest trójkąt.</p>\n<p>Stosunek nie ma jednostek, ponieważ jednostki się skracają: metry podzielone przez metry dają czystą liczbę. Aby znaleźć przyległy bok, przekształć stosunek. Zacznij od cos(A) = b / c. Pomnóż obie strony przez c. Litera c w mianowniku się skraca, pozostawiając <strong>b = c × cos(A)</strong>. Wzór mnoży znaną przeciwprostokątną przez cosinus znanego kąta.</p>\n<p>Dla każdego prawidłowego kąta ostrego (od 0 do 90 stopni) cos(A) mieści się między 0 a 1. Gwarantuje to, że przyległa przyprostokątna jest krótsza niż przeciwprostokątna, co odpowiada geometrii: żadna przyprostokątna nie może przekroczyć przeciwprostokątnej.</p>\n<h3>Zrozumienie SOH-CAH-TOA</h3>\n<p>SOH-CAH-TOA to pomoc mnemotechniczna dla trzech podstawowych stosunków. SOH: Sinus = Przeciwległa / Przeciwprostokątna. CAH: Cosinus = Przyległa / Przeciwprostokątna. TOA: Tangens = Przeciwległa / Przyległa. Na tej stronie skup się na CAH. Mnemotechnika pomaga wybrać właściwy stosunek, ale nadal musisz poprawnie zidentyfikować, który bok jest przyległy do kąta odniesienia.</p>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-ratio.svg\" alt=\"Trójkąt prostokątny z wyróżnioną przyległą przyprostokątną b i przeciwprostokątną c, z cos(A) równym b podzielonemu przez c\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Stosunek cosinusa: podziel wyróżnioną przyległą przyprostokątną b przez wyróżnioną przeciwprostokątną c, aby otrzymać cos(A).</figcaption>\n</figure>"
      },
      {
        "h2": "Jak korzystać z kalkulatora boku trójkąta prostokątnego z cosinusa",
        "paragraphs": [
          "Aby uzyskać dokładny wynik, wykonaj następujące kroki."
        ],
        "listTitle": "Kroki:",
        "listItems": [
          "Zidentyfikuj kąt prosty w swoim trójkącie. Sprawdź, czy jeden z rogów mierzy 90 stopni.",
          "Zidentyfikuj znany kąt ostry A. Upewnij się, że nie jest to kąt prosty.",
          "Zlokalizuj przeciwprostokątną c. To bok naprzeciw kąta prostego, zawsze najdłuższy bok.",
          "Zidentyfikuj przyległą przyprostokątną b. Styka się ona zarówno z kątem A, jak i z kątem prostym.",
          "Wpisz długość przeciwprostokątnej c w pierwszym polu wejściowym.",
          "Wpisz kąt A w stopniach w drugim polu.",
          "Wybierz jednostkę miary zgodną z podaną przeciwprostokątną.",
          "Naciśnij Oblicz. Wynik pokaże przyległy bok b wraz z krokami rozwiązania.",
          "Przejrzyj kroki, aby sprawdzić, czy wzór i podstawienie odpowiadają Twojemu zadaniu.",
          "Sprawdź, czy b jest krótsze niż c. Jeśli nie, sprawdź ponownie, który bok wpisałeś jako przeciwprostokątną."
        ]
      },
      {
        "h2": "Jak obliczyć przyległy bok przy użyciu cosinusa",
        "paragraphs": [],
        "customHtml": "<article class=\"mb-8\">\n<h3>Przykład 1: Podstawowy trójkąt prostokątny</h3>\n<p><strong>Dane:</strong> c = 10 m, A = 30°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Wzór:</strong> b = c × cos(A)</p>\n<p><strong>Podstawienie:</strong> b = 10 × cos(30°)</p>\n<p><strong>Wartość cosinusa:</strong> cos(30°) ≈ 0.8660254</p>\n<p><strong>Obliczenie:</strong> b ≈ 10 × 0.8660254 = 8.660254</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 8.66 m</strong></p>\n<p>Wynik jest krótszy niż 10 m przeciwprostokątna, jak oczekiwano. Przy 30 stopniach przyległy bok stanowi około 87% długości przeciwprostokątnej.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 2: Kąt szczególny</h3>\n<p><strong>Dane:</strong> c = 12 ft, A = 60°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 12 × cos(60°) = 12 × 0.5 = 6</p>\n<p><strong>Odpowiedź:</strong> <strong>b = 6 ft</strong></p>\n<p>Przy 60 stopniach cos(A) = 0.5 dokładnie, więc przyległa przyprostokątna jest dokładnie połową przeciwprostokątnej. Kąty szczególne, takie jak 30°, 45° i 60°, dają czyste wartości cosinusa warte zapamiętania.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 3: Pomiar dziesiętny</h3>\n<p><strong>Dane:</strong> c = 7.5 m, A = 42°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 7.5 × cos(42°) ≈ 7.5 × 0.7431448 ≈ 5.573586</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 5.57 m</strong></p>\n<p>Zachowaj pełną precyzję wartości cosinusa podczas obliczeń i zaokrąglaj tylko ostateczną odpowiedź. Zaokrąglenie cos(42°) do 0.74 na wczesnym etapie dałoby 5.55 m, wprowadzając mały, ale możliwy do uniknięcia błąd.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 4: Kąt bliski 90 stopni</h3>\n<p><strong>Dane:</strong> c = 15 cm, A = 80°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 15 × cos(80°) ≈ 15 × 0.1736482 ≈ 2.6047</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 2.60 cm</strong></p>\n<p>Gdy kąt zbliża się do 90 stopni, przyległa przyprostokątna kurczy się w kierunku zera. Przy 80° przyległy bok stanowi tylko około 17% przeciwprostokątnej. To normalna geometria, a nie błąd obliczeń.</p>\n</article>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-steps.svg\" alt=\"Obliczenie cosinusa krok po kroku: przeciwprostokątna 10 m, kąt 30 stopni, przyległy bok wynosi 8.66 m\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Rozwiązanie krok po kroku: b = 10 × cos(30°) ≈ 8.66 m, z pokazanym każdym krokiem podstawienia.</figcaption>\n</figure>"
      },
      {
        "h2": "Przykłady cosinusa z życia codziennego",
        "paragraphs": [
          "Te przykłady pokazują, jak wzór na cosinus rozwiązuje praktyczne problemy pomiarowe. W każdym przypadku znana długość nachylona lub ukośna to przeciwprostokątna, a pożądana pozioma odległość to przyległa przyprostokątna."
        ],
        "customHtml": "<article class=\"mb-8\">\n<h3>Przykład 5: Znajdowanie poziomej odległości drabiny</h3>\n<p>Drabina o długości 5 m opiera się o ścianę i tworzy z poziomym podłożem kąt 65 stopni. Znajdź poziomą odległość od ściany do podstawy drabiny.</p>\n<p><strong>Dane:</strong> c = 5 m (drabina), A = 65°. <strong>Znajdź:</strong> b (odległość na podłożu).</p>\n<p><strong>Dlaczego przyległy:</strong> Odległość na podłożu styka się zarówno z kątem 65°, jak i z kątem prostym, w którym ściana styka się z podłożem.</p>\n<p><strong>Obliczenie:</strong> b = 5 × cos(65°) ≈ 5 × 0.4226183 ≈ 2.1131</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 2.11 m</strong></p>\n<p>Podstawa znajduje się około 2.11 m od ściany. To obliczenie wyłącznie geometryczne i nie określa, czy ustawienie drabiny jest bezpieczne.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 6: Znajdowanie poziomego rzutu krokwi dachowej</h3>\n<p>Krokiew dachowa ma 4.5 m długości i tworzy z poziomem kąt 30 stopni. Znajdź jej poziomy rzut.</p>\n<p><strong>Dane:</strong> c = 4.5 m (krokiew), A = 30°. <strong>Znajdź:</strong> b (poziomy rzut).</p>\n<p><strong>Obliczenie:</strong> b = 4.5 × cos(30°) ≈ 4.5 × 0.8660254 ≈ 3.8971</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 3.90 m</strong></p>\n<p>Nachylona krokiew (4.5 m) obejmuje poziomo 3.90 m. Różnica ma znaczenie przy zamawianiu materiałów: potrzebujesz 4.5 m drewna na 3.90 m poziomej rozpiętości. Okapy dachowe, połączenia i zapasy konstrukcyjne nie są uwzględnione.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 7: Obliczanie poziomego rzutu pochylni</h3>\n<p>Uproszczona pochylnia ma długość nachylenia 8 m i kąt 6 stopni względem poziomu. Znajdź jej poziomy rzut.</p>\n<p><strong>Dane:</strong> c = 8 m (nachylenie), A = 6°. <strong>Znajdź:</strong> b (poziomy rzut).</p>\n<p><strong>Obliczenie:</strong> b = 8 × cos(6°) ≈ 8 × 0.9945219 ≈ 7.9562</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 7.96 m</strong></p>\n<p>Przy łagodnym kącie 6° poziomy rzut (7.96 m) jest prawie równy długości nachylenia (8 m). Nachylenie jest zawsze nieco dłuższe niż rzut poziomy. Nie potwierdza to dostępności ani zgodności z przepisami budowlanymi.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 8: Znajdowanie poziomego zasięgu kabla</h3>\n<p>Kabel ma 20 m długości i tworzy z poziomem kąt 55 stopni. Oblicz składową poziomą.</p>\n<p><strong>Dane:</strong> c = 20 m, A = 55°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 20 × cos(55°) ≈ 20 × 0.5735764 ≈ 11.4715</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 11.47 m</strong></p>\n<p>Im bardziej stromy kąt, tym krótszy poziomy zasięg. Przy 55° kabel obejmuje poziomo 11.47 m, jednocześnie znacznie się wznosząc.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 9: Szacowanie poziomej odległości w geodezji</h3>\n<p>Uproszczona linia celowania ma 150 m długości i tworzy z poziomem kąt 12 stopni. Znajdź jej składową poziomą.</p>\n<p><strong>Dane:</strong> c = 150 m, A = 12°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 150 × cos(12°) ≈ 150 × 0.9781476 ≈ 146.7221</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 146.72 m</strong></p>\n<p>Pozioma odległość wynosi 146.72 m, nieco mniej niż 150 m linii celowania. Rzeczywiste pomiary geodezyjne wymagają poprawek na krzywiznę, teren i wysokość instrumentu; ten przykład obejmuje tylko podstawową geometrię.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 10: Znajdowanie poziomej składowej drutu</h3>\n<p>Drut ma 13 m długości i tworzy z poziomym podłożem kąt 22 stopni. Znajdź jego rzut poziomy.</p>\n<p><strong>Dane:</strong> c = 13 m, A = 22°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 13 × cos(22°) ≈ 13 × 0.9271839 ≈ 12.0534</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 12.05 m</strong></p>\n<p>Składowa pozioma (12.05 m) jest mniejsza niż pełna długość drutu (13 m), ponieważ część długości drutu przypada na wzrost pionowy.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 11: Obliczanie poziomego odsunięcia zastrzału</h3>\n<p>Ukośny zastrzał ma 2.4 m długości i tworzy z poziomem kąt 40 stopni. Oblicz jego rzut poziomy.</p>\n<p><strong>Dane:</strong> c = 2.4 m, A = 40°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 2.4 × cos(40°) ≈ 2.4 × 0.7660444 ≈ 1.8385</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 1.84 m</strong></p>\n<p>Ten pomiar pomaga odczytać rysunek: zastrzał obejmuje poziomo 1.84 m. Obliczenie ma charakter geometryczny i nie potwierdza wytrzymałości konstrukcyjnej ani zgodności projektu.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 12: Znajdowanie odległości na podłożu liny odciągowej</h3>\n<p>Lina odciągowa ma 18 m długości i tworzy z poziomym podłożem kąt 35 stopni. Oblicz poziomą odległość między punktem kotwiczenia a punktem znajdującym się bezpośrednio pod miejscem mocowania liny.</p>\n<p><strong>Dane:</strong> c = 18 m, A = 35°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 18 × cos(35°) ≈ 18 × 0.8191520 ≈ 14.7447</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 14.74 m</strong></p>\n<p>Sama lina jest przeciwprostokątną, ponieważ rozciąga się od kotwy w podłożu do punktu mocowania, naprzeciw kąta prostego tworzonego przez pionową konstrukcję i poziome podłoże.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 13: Szacowanie poziomego przemieszczenia na zboczu</h3>\n<p>Uproszczona nachylona ścieżka mierzy 250 m i tworzy z poziomem kąt 18 stopni. Oblicz składową poziomą.</p>\n<p><strong>Dane:</strong> c = 250 m, A = 18°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 250 × cos(18°) ≈ 250 × 0.9510565 ≈ 237.7641</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 237.76 m</strong></p>\n<p>Idąc 250 m wzdłuż zbocza, pokonujesz poziomo 237.76 m. Odległość wzdłuż zbocza jest zawsze dłuższa niż poziome przemieszczenie.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 14: Obliczanie poziomego rzutu chodnika</h3>\n<p>Nachylony chodnik ma 6 m długości i tworzy z poziomem kąt 8 stopni. Oblicz jego poziomy rzut.</p>\n<p><strong>Dane:</strong> c = 6 m, A = 8°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 6 × cos(8°) ≈ 6 × 0.9902681 ≈ 5.9416</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 5.94 m</strong></p>\n<p>Przy 8° chodnik jest na tyle łagodny, że poziomy rzut (5.94 m) jest bliski długości nachylenia (6 m). Sam wynik nie dowodzi zgodności z przepisami dostępności.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 15: Znajdowanie poziomego rzutu elementu mechanicznego</h3>\n<p>Element mechaniczny ma 850 mm długości i jest ustawiony pod kątem 25 stopni do poziomu. Oblicz jego składową poziomą.</p>\n<p><strong>Dane:</strong> c = 850 mm, A = 25°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 850 × cos(25°) ≈ 850 × 0.9063078 ≈ 770.3616</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 770.36 mm</strong></p>\n<p>Zależność cosinusa działa identycznie w milimetrach. Jednostka odpowiedzi zawsze odpowiada jednostce podanej przeciwprostokątnej.</p>\n</article>\n<article class=\"mb-8\">\n<h3>Przykład 16: Obliczanie poziomej składowej nachylonego wspornika</h3>\n<p>Element wspornikowy ma 3.2 ft długości i tworzy z poziomem kąt 48 stopni. Oblicz jego rzut poziomy.</p>\n<p><strong>Dane:</strong> c = 3.2 ft, A = 48°. <strong>Znajdź:</strong> b.</p>\n<p><strong>Obliczenie:</strong> b = 3.2 × cos(48°) ≈ 3.2 × 0.6691306 ≈ 2.1412</p>\n<p><strong>Odpowiedź:</strong> <strong>b ≈ 2.14 ft</strong></p>\n<p>Podczas odczytywania rysunku wymiarowego mówi to, że wspornik obejmuje poziomo 2.14 ft. Obliczenie ma charakter geometryczny, a nie jest sprawdzeniem bezpieczeństwa konstrukcji.</p>\n</article>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[560px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Scenariusz</th>\n<th class=\"py-2 pr-4 font-semibold\">Przeciwprostokątna</th>\n<th class=\"py-2 pr-4 font-semibold\">Kąt</th>\n<th class=\"py-2 pr-4 font-semibold\">Wzór</th>\n<th class=\"py-2 font-semibold\">Przyległy bok</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Drabina</td><td class=\"py-2 pr-4\">5 m</td><td class=\"py-2 pr-4\">65°</td><td class=\"py-2 pr-4 font-mono\">b = 5 × cos(65°)</td><td class=\"py-2\">2.11 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Krokiew dachowa</td><td class=\"py-2 pr-4\">4.5 m</td><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4 font-mono\">b = 4.5 × cos(30°)</td><td class=\"py-2\">3.90 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Kabel</td><td class=\"py-2 pr-4\">20 m</td><td class=\"py-2 pr-4\">55°</td><td class=\"py-2 pr-4 font-mono\">b = 20 × cos(55°)</td><td class=\"py-2\">11.47 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Linia celowania</td><td class=\"py-2 pr-4\">150 m</td><td class=\"py-2 pr-4\">12°</td><td class=\"py-2 pr-4 font-mono\">b = 150 × cos(12°)</td><td class=\"py-2\">146.72 m</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">Lina odciągowa</td><td class=\"py-2 pr-4\">18 m</td><td class=\"py-2 pr-4\">35°</td><td class=\"py-2 pr-4 font-mono\">b = 18 × cos(35°)</td><td class=\"py-2\">14.74 m</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">Chodnik</td><td class=\"py-2 pr-4\">6 m</td><td class=\"py-2 pr-4\">8°</td><td class=\"py-2 pr-4 font-mono\">b = 6 × cos(8°)</td><td class=\"py-2\">5.94 m</td></tr>\n</tbody>\n</table>\n</div>\n<figure class=\"my-6\">\n<img src=\"/images/cosine/cosine-applications.svg\" alt=\"Cztery panele: drabina, krokiew dachowa, kabel i chodnik, pokazujące rzuty poziome obliczone przy użyciu cosinusa\" class=\"mx-auto h-auto w-full max-w-xl\" loading=\"lazy\" />\n<figcaption class=\"mt-2 text-center text-sm text-on-surface-variant\">Cosinus w praktyce: każdy panel pokazuje przeciwprostokątną, kąt odniesienia i obliczoną poziomą (przyległą) odległość.</figcaption>\n</figure>"
      },
      {
        "h2": "Kiedy używać cosinusa zamiast sinusa lub tangensa?",
        "paragraphs": [],
        "customHtml": "<p>Każdy stosunek trygonometryczny łączy inną parę boków. Wybierz ten, który odpowiada Twoim znanym i nieznanym wartościom.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[480px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Stosunek</th>\n<th class=\"py-2 pr-4 font-semibold\">Wzór</th>\n<th class=\"py-2 pr-4 font-semibold\">Znane</th>\n<th class=\"py-2 font-semibold\">Znajduje</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Cosinus</td><td class=\"py-2 pr-4 font-mono\">b = c × cos(A)</td><td class=\"py-2 pr-4\">Przeciwprostokątna, kąt</td><td class=\"py-2\">Przyległa przyprostokątna</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4 font-semibold\">Sinus</td><td class=\"py-2 pr-4 font-mono\">a = c × sin(A)</td><td class=\"py-2 pr-4\">Przeciwprostokątna, kąt</td><td class=\"py-2\">Przeciwległa przyprostokątna</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4 font-semibold\">Tangens</td><td class=\"py-2 pr-4 font-mono\">a = b × tan(A)</td><td class=\"py-2 pr-4\">Przyległa przyprostokątna, kąt</td><td class=\"py-2\">Przeciwległa przyprostokątna</td></tr>\n</tbody>\n</table>\n</div>\n<p><strong>Co się psuje przy złym stosunku:</strong> Załóżmy, że c = 10 m i A = 30°, a potrzebujesz przyległego boku. Pomyłkowe użycie sinusa daje a = 10 × sin(30°) = 5 m, czyli przeciwległą przyprostokątną, a nie przyległą. Poprawne obliczenie cosinusa daje b ≈ 8.66 m. Dwie odpowiedzi różnią się, ponieważ mierzą różne boki. Zawsze potwierdź, który bok styka się z kątem odniesienia, zanim wybierzesz.</p>"
      },
      {
        "h2": "Jak kąt zmienia przyległy bok",
        "paragraphs": [],
        "customHtml": "<p>Przy ustalonej przeciwprostokątnej przyległa przyprostokątna kurczy się, gdy kąt A rośnie. Przy 0° cos(A) = 1 i przyległa przyprostokątna równa się pełnej przeciwprostokątnej (trójkąt spłaszcza się w linię). Przy 90° cos(A) = 0 i przyległa przyprostokątna znika. Pomiędzy tymi skrajnościami zależność jest gładka i przewidywalna.</p>\n<div class=\"not-prose overflow-x-auto my-6\">\n<table class=\"w-full min-w-[400px] border-collapse text-sm\">\n<thead>\n<tr class=\"border-b border-outline-variant/30 text-left\">\n<th class=\"py-2 pr-4 font-semibold\">Kąt A</th>\n<th class=\"py-2 pr-4 font-semibold\">cos(A)</th>\n<th class=\"py-2 font-semibold\">Przyległy bok b (c = 10)</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">30°</td><td class=\"py-2 pr-4\">0.8660</td><td class=\"py-2\">8.66</td></tr>\n<tr class=\"border-b border-outline-variant/15\"><td class=\"py-2 pr-4\">45°</td><td class=\"py-2 pr-4\">0.7071</td><td class=\"py-2\">7.07</td></tr>\n<tr class=\"border-b border-outline-variant/15 last:border-0\"><td class=\"py-2 pr-4\">60°</td><td class=\"py-2 pr-4\">0.5000</td><td class=\"py-2\">5.00</td></tr>\n</tbody>\n</table>\n</div>\n<p>Zauważ wzorzec: podwojenie kąta z 30° do 60° nie zmniejsza boku o połowę, ponieważ cosinus nie jest liniowy. Dwa trójkąty o tym samym kącie, ale różnych przeciwprostokątnych są podobne, więc ich stosunki boków są zgodne, mimo że długości bezwzględne się różnią. Przeciwprostokątna 5 m przy 30° daje b ≈ 4.33 m, dokładnie połowę przypadku z 10 m.</p>\n<p>Uwaga: 0° i 90° nie są prawidłowymi kątami ostrymi dla niezdegenerowanego trójkąta prostokątnego. Reprezentują one przypadki graniczne, w których trójkąt zapada się.</p>"
      },
      {
        "h2": "Poprawne wprowadzanie kątów i pomiarów",
        "paragraphs": [
          "Ten kalkulator oczekuje kątów w stopniach. Stopnie dzielą pełny okrąg na 360 części; radiany używają innej skali, w której pełny okrąg to około 6.283. Wprowadzenie 30 radianów, gdy masz na myśli 30 stopni, daje dziko błędną odpowiedź, ponieważ cos(30 radianów) ≈ 0.154, a nie 0.866. Zawsze potwierdź, że kąt jest podany w stopniach, zanim zaczniesz obliczać.",
          "Używaj tej samej jednostki długości dla przeciwprostokątnej, jakiej oczekujesz w odpowiedzi. Jeśli c jest w metrach, b wyjdzie w metrach. Mieszanie jednostek, np. wpisanie c = 5 (metry) przy myśleniu w stopach, gwarantuje błędny wynik. Najpierw przelicz, potem obliczaj.",
          "Zaokrąglaj tylko ostateczną odpowiedź, a nie wartości pośrednie. Cosinus 42° to 0.743144825..., a użycie pełnej wartości daje b = 5.5736 m dla c = 7.5 m. Zaokrąglenie cosinusa do 0.74 na początku daje 5.55 m, błąd prawie 2.4 cm. Twój wynik nie może być dokładniejszy niż najmniej dokładne dane wejściowe: jeśli zmierzyłeś przeciwprostokątną z dokładnością do centymetra, nie podawaj odpowiedzi w milimetrach."
        ]
      },
      {
        "h2": "Typowe błędy obliczeń cosinusa i jak ich unikać",
        "paragraphs": [],
        "customHtml": "<p><strong>1. Mylenie przyległego boku z przeciwległym.</strong> Przyległy bok styka się z kątem A; przeciwległy nie. Poprawka: prześledź od kąta A wzdłuż każdej przyprostokątnej i potwierdź, która z nich tworzy kąt.</p>\n<p><strong>2. Używanie przyprostokątnej jako przeciwprostokątnej.</strong> Wpisanie wartości przyprostokątnej w pole przeciwprostokątnej zawyża wynik. Poprawka: przeciwprostokątna jest zawsze naprzeciw kąta prostego i zawsze najdłuższym bokiem.</p>\n<p><strong>3. Zapominanie o pomnożeniu przez przeciwprostokątną.</strong> Odpowiadanie cos(30°) ≈ 0.866 zamiast 10 × 0.866 ≈ 8.66. Poprawka: sam stosunek nie jest długością; pomnóż przez c.</p>\n<p><strong>4. Dzielenie zamiast mnożenia.</strong> Obliczanie c / cos(A) zamiast c × cos(A). Dzielenie dotyczy trybu tangensa przy znajdowaniu b z a, a nie cosinusa. Poprawka: sprawdź przekształcony wzór.</p>\n<p><strong>5. Używanie złego kąta odniesienia.</strong> Mierzenie od kąta B zamiast kąta A zamienia przyległy z przeciwległym. Poprawka: oznacz kąt odniesienia, zanim zidentyfikujesz boki.</p>\n<p><strong>6. Wprowadzanie radianów, gdy oczekiwane są stopnie.</strong> cos(1 radiana) ≈ 0.540 różni się od cos(1°) ≈ 0.99985. Poprawka: potwierdź tryb stopni.</p>\n<p><strong>7. Mieszanie jednostek.</strong> Wpisanie c = 5 (metry) i oczekiwanie stóp. Poprawka: najpierw przelicz wszystkie dane wejściowe na jedną jednostkę.</p>\n<p><strong>8. Zbyt wczesne zaokrąglanie wartości pośrednich.</strong> Zaokrąglenie cos(42°) do 0.74 przed pomnożeniem potęguje błąd. Poprawka: zachowaj pełną precyzję do ostatniego kroku.</p>\n<p><strong>9. Stosowanie cosinusa do trójkąta nieprostokątnego.</strong> Definicje stosunków zakładają kąt 90 stopni. Poprawka: sprawdź, czy kąt prosty istnieje, zanim użyjesz tego kalkulatora.</p>\n<p><strong>10. Akceptowanie wyniku dłuższego niż przeciwprostokątna.</strong> Jeśli b > c, coś jest nie tak. Poprawka: sprawdź dane wejściowe; cos(A) nigdy nie przekracza 1 dla kątów ostrych.</p>\n<p><strong>11. Wprowadzanie zerowych, ujemnych lub nieprawidłowych pomiarów.</strong> Długości boków muszą być dodatnie. Poprawka: używaj wyłącznie dodatnich długości.</p>\n<p><strong>12. Traktowanie prawie zerowego przyległego boku jako błędu.</strong> Przy 89° b ≈ 0.017c, co jest poprawną geometrią, a nie błędem. Poprawka: pamiętaj, że strome kąty naturalnie dają krótkie przyległe boki.</p>"
      },
      {
        "h2": "Jak sprawdzić, czy wynik cosinusa jest poprawny",
        "paragraphs": [],
        "customHtml": "<p><strong>Metoda 1: Sprawdź względne długości boków.</strong> Dla dowolnego kąta ostrego przyległa przyprostokątna musi być krótsza niż przeciwprostokątna. Jeśli Twoja odpowiedź przekracza c, sprawdź dane wejściowe.</p>\n<p><strong>Metoda 2: Przelicz stosunek cosinusa.</strong> Podziel odpowiedź przez przeciwprostokątną: b / c powinno być w przybliżeniu równe cos(A). Do sprawdzenia używaj wartości niezaokrąglonych. Dla c = 10 m, A = 30°, b ≈ 8.660254: 8.660254 / 10 = 0.8660254 ≈ cos(30°). Zgodność potwierdza poprawność.</p>\n<p><strong>Metoda 3: Zastosuj twierdzenie Pitagorasa.</strong> Jeśli znasz lub obliczysz także przeciwległą przyprostokątną a = c × sin(A), sprawdź, czy a² + b² ≈ c². Pełny przykład: c = 10 m, A = 30°. Wtedy b ≈ 8.660254 m i a = 10 × sin(30°) = 5 m. Sprawdzenie: 5² + 8.660254² = 25 + 75 = 100 = 10². Trójkąt jest spójny.</p>\n<p>Drobne rozbieżności w ostatnim miejscu po przecinku wynikają z zaokrąglenia wyświetlanych wartości. Podczas weryfikacji używaj liczb o pełnej precyzji, a nie zaokrąglonych wyników.</p>"
      },
      {
        "h2": "Znajdź przyległy bok z pewnością",
        "paragraphs": [
          "Najpierw zidentyfikuj przeciwprostokątną i kąt odniesienia. Potwierdź, która przyprostokątna styka się z kątem: to jest przyległy bok b. Zastosuj b = c × cos(A) z kątem w stopniach, używając spójnych jednostek. Sprawdź, czy odpowiedź jest krótsza niż przeciwprostokątna i, gdy to możliwe, zweryfikuj twierdzeniem Pitagorasa. Dzięki tym nawykom każde obliczenie boku z cosinusa staje się rutyną. Użyj powyższego kalkulatora, aby przeliczyć swoje liczby."
        ]
      }
    ],
    "relatedLinks": [
      {
        "href": "/right-triangle-side-from-angle-calculator/",
        "label": "Kalkulator boku trójkąta prostokątnego z kąta"
      },
      {
        "href": "/right-triangle-side-from-sine-calculator/",
        "label": "Kalkulator boku trójkąta prostokątnego z sinusa"
      },
      {
        "href": "/right-triangle-side-from-tangent-calculator/",
        "label": "Kalkulator boku trójkąta prostokątnego z tangensa"
      },
      {
        "href": "/right-triangle-angle-from-cosine-calculator/",
        "label": "Kalkulator kąta trójkąta prostokątnego z cosinusa"
      },
      {
        "href": "/cosine-ratio-calculator/",
        "label": "Kalkulator stosunku cosinusa"
      }
    ],
    "faqs": [
      {
        "question": "Jak znaleźć przyległy bok przy użyciu cosinusa?",
        "answer": "Pomnóż przeciwprostokątną przez cosinus znanego kąta ostrego: b = c × cos(A). Wpisz przeciwprostokątną c i kąt A w stopniach, a kalkulator zwróci przyległy bok b wraz z pełnymi krokami rozwiązania."
      },
      {
        "question": "Jaki jest wzór kalkulatora boku z cosinusa?",
        "answer": "Wzór to b = c × cos(A), gdzie b to przyległy bok, c to przeciwprostokątna, a A to kąt ostry. Pochodzi z przekształcenia stosunku cosinusa cos(A) = b / c poprzez pomnożenie obu stron przez c."
      },
      {
        "question": "Które boki są używane w stosunku cosinusa?",
        "answer": "Cosinus używa przyległego boku i przeciwprostokątnej: cos(A) = bok przyległy / przeciwprostokątna. Dla kąta A przyległy bok to b (przyprostokątna stykająca się z kątem A), a przeciwprostokątna to c (najdłuższy bok, naprzeciw kąta prostego)."
      },
      {
        "question": "Czy mogę obliczyć przyległy bok z przeciwprostokątnej i kąta?",
        "answer": "Tak. Dokładnie to robi ten kalkulator. Wpisz długość przeciwprostokątnej i kąt ostry w stopniach, a obliczy b = c × cos(A). Kąt musi zawierać się między 0 a 90 stopni, z wyłączeniem końcówek."
      },
      {
        "question": "Dlaczego przyległy bok jest krótszy niż przeciwprostokątna?",
        "answer": "Dla każdego kąta ostrego cos(A) mieści się między 0 a 1, więc pomnożenie przeciwprostokątnej przez cos(A) zawsze daje mniejszą wartość. Geometrycznie żadna przyprostokątna trójkąta prostokątnego nie może przekroczyć przeciwprostokątnej, która obejmuje największą odległość między wierzchołkami."
      },
      {
        "question": "Jaka jest różnica między sinusem a cosinusem?",
        "answer": "Oba używają przeciwprostokątnej, ale sinus zwraca bok przeciwległy (a = c × sin(A)), a cosinus zwraca bok przyległy (b = c × cos(A)). Wybierz sinus, gdy potrzebujesz boku naprzeciw kąta, i cosinus, gdy potrzebujesz boku obok niego."
      },
      {
        "question": "Czy kąt wpisywać w stopniach czy w radianach?",
        "answer": "Wpisz kąt w stopniach. Ten kalkulator oczekuje danych w stopniach. Wprowadzenie radianów daje błędne wyniki, ponieważ cos(30 radianów) ≈ 0.154 różni się od cos(30°) ≈ 0.866. Zawsze potwierdź tryb stopni przed obliczeniami."
      },
      {
        "question": "Czy cosinus może obliczyć bok w metrach, stopach lub calach?",
        "answer": "Tak. Wzór działa w dowolnej jednostce długości. Odpowiedź używa tej samej jednostki co podana przeciwprostokątna: metry na wejściu dają metry na wyjściu, stopy na wejściu dają stopy na wyjściu. Używaj spójnych jednostek we wszystkich danych wejściowych."
      },
      {
        "question": "Dlaczego przyległy bok maleje, gdy kąt rośnie?",
        "answer": "Cosinus maleje od 1 do 0, gdy kąt rośnie od 0° do 90°. Ponieważ b = c × cos(A), mniejszy mnożnik cosinusa daje krótszy przyległy bok. Przy 60° przyległy bok stanowi połowę przeciwprostokątnej; przy 80° to tylko około 17%."
      },
      {
        "question": "Co jeśli znam przyległy bok i kąt, ale nie przeciwprostokątną?",
        "answer": "Przekształć wzór, aby rozwiązać dla c: c = b / cos(A). Ten kalkulator znajduje przyległy bok z przeciwprostokątnej; aby znaleźć przeciwprostokątną z przyległego boku, podziel przyległy bok przez cos(A)."
      },
      {
        "question": "Jak mogę zweryfikować obliczony bok?",
        "answer": "Sprawdź trzy rzeczy: (1) odpowiedź jest krótsza niż przeciwprostokątna, (2) podzielenie odpowiedzi przez przeciwprostokątną daje w przybliżeniu cos(A) oraz (3) jeśli obliczysz też a = c × sin(A), to a² + b² powinno równać się c²."
      },
      {
        "question": "Co się dzieje, gdy kąt jest bardzo bliski 90 stopni?",
        "answer": "Przyległy bok staje się bardzo mały, ponieważ cos(A) zbliża się do zera. Przy 89° b ≈ 0.017c. To poprawna geometria, a nie błąd. Trójkąt staje się wysoki i wąski, a prawie cała długość przeciwprostokątnej przypada na bok przeciwległy."
      }
    ]
  }
};
